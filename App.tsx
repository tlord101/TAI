import React, { useState, useCallback, useRef } from 'react';
import { GoogleGenAI, Modality } from '@google/genai';
import { Logo } from './components/Logo';
import { UploadIcon, SparklesIcon, BackIcon, DownloadIcon } from './components/Icons';
import { fileToBase64, getMimeType } from './utils/fileUtils';

// Helper component for the file upload screen, defined outside the main component
const ImageUploader: React.FC<{ onImageUpload: (file: File) => void; isLoading: boolean }> = ({ onImageUpload, isLoading }) => {
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files[0]) {
      onImageUpload(event.target.files[0]);
    }
  };

  const handleDrop = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    event.stopPropagation();
    if (event.dataTransfer.files && event.dataTransfer.files[0]) {
      onImageUpload(event.dataTransfer.files[0]);
    }
  };

  const handleDragOver = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    event.stopPropagation();
  };
  
  const handleClick = () => {
      fileInputRef.current?.click();
  };

  return (
    <div className="w-full max-w-2xl mx-auto flex flex-col items-center justify-center text-center p-8">
      <Logo className="h-20 w-auto text-gray-400 mb-6" />
      <h1 className="text-4xl font-bold text-white tracking-tighter">TAI Photo Editor</h1>
      <p className="text-gray-400 mt-2 mb-8">Upload an image and describe the edits you want to see.</p>
      <div
        onClick={handleClick}
        onDrop={handleDrop}
        onDragOver={handleDragOver}
        className="w-full h-64 border-2 border-dashed border-gray-600 rounded-2xl flex flex-col items-center justify-center cursor-pointer hover:border-gray-400 hover:bg-gray-800/50 transition-all duration-300"
      >
        <input
          type="file"
          ref={fileInputRef}
          onChange={handleFileChange}
          className="hidden"
          accept="image/png, image/jpeg, image/webp"
          disabled={isLoading}
        />
        <UploadIcon className="w-12 h-12 text-gray-500 mb-4" />
        <p className="text-gray-300 font-semibold">Click to upload or drag & drop</p>
        <p className="text-gray-500 text-sm">PNG, JPG, or WEBP</p>
      </div>
    </div>
  );
};

export default function App() {
  const [originalImage, setOriginalImage] = useState<{ data: string; mimeType: string } | null>(null);
  const [editedImage, setEditedImage] = useState<string | null>(null);
  const [prompt, setPrompt] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleImageUpload = useCallback(async (file: File) => {
    setIsLoading(true);
    setError(null);
    setEditedImage(null);
    setPrompt('');
    try {
      const base64Data = await fileToBase64(file);
      const mimeType = getMimeType(file.name) || file.type;
      if (!mimeType) {
        throw new Error('Could not determine image type.');
      }
      setOriginalImage({ data: base64Data, mimeType });
    } catch (e) {
      setError('Failed to load image. Please try another file.');
      console.error(e);
    } finally {
      setIsLoading(false);
    }
  }, []);

  const handleGenerate = useCallback(async () => {
    if (!prompt || !originalImage) {
        setError("Please provide an image and a prompt.");
        return;
    };
    setIsLoading(true);
    setError(null);
    setEditedImage(null);

    try {
        const ai = new GoogleGenAI({ apiKey: process.env.API_KEY as string });
        const response = await ai.models.generateContent({
            model: 'gemini-2.5-flash-image',
            contents: {
                parts: [
                    {
                        inlineData: {
                            data: originalImage.data,
                            mimeType: originalImage.mimeType,
                        },
                    },
                    {
                        text: prompt,
                    },
                ],
            },
            config: {
                responseModalities: [Modality.IMAGE],
            },
        });

        const firstPart = response.candidates?.[0]?.content?.parts?.[0];
        if (firstPart && firstPart.inlineData) {
            const base64ImageBytes: string = firstPart.inlineData.data;
            const imageUrl = `data:${firstPart.inlineData.mimeType};base64,${base64ImageBytes}`;
            setEditedImage(imageUrl);
        } else {
            throw new Error("No image was generated. The model might have refused the request.");
        }

    } catch (e: any) {
        setError(`An error occurred: ${e.message}`);
        console.error(e);
    } finally {
        setIsLoading(false);
    }
  }, [prompt, originalImage]);

  const handleDownload = useCallback(() => {
    if (!editedImage) return;

    const link = document.createElement('a');
    
    const mimeType = editedImage.substring(5, editedImage.indexOf(';'));
    const extension = mimeType.split('/')[1] || 'png';
    
    link.href = editedImage;
    link.download = `edited-image-by-tai.${extension}`;
    
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }, [editedImage]);

  const reset = () => {
    setOriginalImage(null);
    setEditedImage(null);
    setPrompt('');
    setIsLoading(false);
    setError(null);
  };
  
  return (
    <div className="min-h-screen bg-gray-900 text-white font-sans flex flex-col items-center justify-center p-4 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))] opacity-20"></div>
      <div className="absolute top-0 left-0 w-full h-full bg-[url('data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20width%3D%2232%22%20height%3D%2232%22%20viewBox%3D%220%200%2032%2032%22%3E%3Cpath%20fill%3D%22rgba(255,255,255,0.05)%22%20d%3D%22M0%2032%20L32%2032%20L32%200%20L0%200%20Z%20M31%201%20L1%201%20L1%2031%20L31%2031%20Z%22/%3E%3C/svg%3E')] opacity-50"></div>
      
      <main className="w-full h-full flex-1 flex flex-col items-center justify-center z-10">
        {!originalImage && <ImageUploader onImageUpload={handleImageUpload} isLoading={isLoading} />}
        
        {originalImage && (
          <div className="w-full max-w-7xl mx-auto p-4 md:p-8 bg-gray-900/50 backdrop-blur-sm border border-gray-700/50 rounded-2xl shadow-2xl animate-fade-in">
            <div className="flex justify-between items-center mb-6">
                <button onClick={reset} className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors">
                    <BackIcon className="w-5 h-5" />
                    <span>Upload New Image</span>
                </button>
                <Logo className="h-8 w-auto text-gray-400" isSimple={true} />
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Left Side: Original Image & Prompt */}
              <div className="flex flex-col gap-6">
                <div className="aspect-square bg-gray-800 rounded-lg overflow-hidden border border-gray-700">
                  <img src={`data:${originalImage.mimeType};base64,${originalImage.data}`} alt="Original" className="w-full h-full object-contain" />
                </div>
                 <div className="relative w-full">
                    <textarea
                      value={prompt}
                      onChange={(e) => setPrompt(e.target.value)}
                      placeholder="e.g., 'make the background a futuristic city at night'"
                      className="w-full h-28 p-4 pr-12 bg-gray-800 border border-gray-700 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:outline-none resize-none transition-colors text-white placeholder-gray-500"
                      disabled={isLoading}
                    />
                    <SparklesIcon className="absolute top-4 right-4 w-6 h-6 text-gray-500" />
                </div>
                 <button
                    onClick={handleGenerate}
                    disabled={isLoading || !prompt}
                    className="w-full flex items-center justify-center gap-2 bg-indigo-600 text-white font-semibold py-3 px-6 rounded-lg hover:bg-indigo-500 disabled:bg-gray-600 disabled:cursor-not-allowed transition-all duration-300 transform active:scale-95"
                  >
                    {isLoading ? (
                        <>
                            <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                            </svg>
                            Generating...
                        </>
                    ) : (
                        <>
                            <SparklesIcon className="w-5 h-5"/>
                            Generate Edit
                        </>
                    )}
                 </button>
              </div>

              {/* Right Side: Result */}
              <div className="relative aspect-square bg-gray-800/80 border border-gray-700 rounded-lg flex items-center justify-center overflow-hidden">
                {isLoading && !editedImage && (
                  <div className="flex flex-col items-center text-center text-gray-400">
                    <Logo className="h-20 w-auto animate-pulse-slow mb-4" />
                    <p className="font-semibold">Generating your masterpiece...</p>
                    <p className="text-sm text-gray-500">This may take a moment.</p>
                  </div>
                )}
                {error && <p className="text-red-400 p-4 text-center">{error}</p>}
                {editedImage && (
                  <>
                    <img src={editedImage} alt="Edited" className="w-full h-full object-contain animate-fade-in" />
                    <button
                      onClick={handleDownload}
                      className="absolute bottom-4 right-4 z-10 flex items-center gap-2 bg-gray-900/60 backdrop-blur-sm text-white font-semibold py-2 px-4 rounded-lg hover:bg-gray-800 transition-all duration-300 transform active:scale-95 border border-gray-700"
                      aria-label="Download edited image"
                    >
                      <DownloadIcon className="w-5 h-5" />
                      <span>Download</span>
                    </button>
                  </>
                )}
                {!isLoading && !editedImage && !error && (
                    <div className="text-center text-gray-500 p-8">
                        <p className="font-semibold">Your edited image will appear here.</p>
                        <p className="text-sm">Describe the changes you want and click "Generate Edit".</p>
                    </div>
                )}
              </div>
            </div>
          </div>
        )}
      </main>
      <footer className="w-full text-center py-4 z-10">
        <p className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-purple-500 to-pink-500">
            Produced by Tlord ❤️‍🩹
        </p>
      </footer>
      <style>{`
        @keyframes fade-in {
          from { opacity: 0; transform: scale(0.98); }
          to { opacity: 1; transform: scale(1); }
        }
        .animate-fade-in {
          animation: fade-in 0.5s ease-out forwards;
        }
        @keyframes pulse-slow {
          0%, 100% { opacity: 0.7; }
          50% { opacity: 1; }
        }
        .animate-pulse-slow {
          animation: pulse-slow 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
        }
      `}</style>
    </div>
  );
}