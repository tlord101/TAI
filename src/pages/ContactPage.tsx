import { useState } from 'react';
import { motion } from 'motion/react';
import { Mail, MapPin, Clock } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { Textarea } from '../components/ui/textarea';
import { toast } from 'sonner@2.0.3';

export default function ContactPage() {
  const { t } = useLanguage();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Send directly to serverless endpoint; OWNER_EMAIL placeholder used in API if not configured
    try {
      const resp = await fetch('/api/send-email', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          subject: formData.subject,
          message: formData.message,
        }),
      });
      const json = await resp.json();
      if (resp.ok && json.ok) {
        toast.success(t('contact.success'));
        setFormData({ name: '', email: '', subject: '', message: '' });
      } else {
        console.error('Email API error', json);
        toast.error('Failed to send message.');
      }
    } catch (err) {
      console.error(err);
      toast.error('Failed to send message.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="pt-20">
      {/* Header */}
      <section className="bg-luxury-black text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center"
          >
            <h1 className="text-white mb-4">{t('contact.title')}</h1>
            <p className="text-xl text-gray-300">
              Get in touch with our luxury real estate experts
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Contact Information */}
            <div className="lg:col-span-1">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                className="space-y-8"
              >
                <div>
                  <h3 className="mb-6">Get in Touch</h3>
                  <p className="text-gray-700 mb-6">
                    We're here to help you find your dream property in Spain. 
                    Reach out to our team and we'll respond within 24 hours.
                  </p>
                </div>

                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="bg-luxury-gold/10 p-3 rounded-lg">
                      <Mail className="w-6 h-6 text-luxury-gold" />
                    </div>
                    <div>
                      <h5 className="mb-1">Email</h5>
                      <a
                        href="mailto:Goldenstatesestates@hotmail.com"
                        className="text-gray-600 hover:text-luxury-gold transition-colors"
                      >
                        Goldenstatesestates@hotmail.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="bg-luxury-gold/10 p-3 rounded-lg">
                      <MapPin className="w-6 h-6 text-luxury-gold" />
                    </div>
                    <div>
                      <h5 className="mb-1">Location</h5>
                      <p className="text-gray-600">Barcelona, Spain</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="bg-luxury-gold/10 p-3 rounded-lg">
                      <Clock className="w-6 h-6 text-luxury-gold" />
                    </div>
                    <div>
                      <h5 className="mb-1">Response Time</h5>
                      <p className="text-gray-600">{t('contact.subtitle')}</p>
                    </div>
                  </div>
                </div>

                <div className="bg-luxury-gray-light p-6 rounded-lg">
                  <h5 className="mb-3">Office Hours</h5>
                  <div className="space-y-2 text-sm text-gray-600">
                    <div className="flex justify-between">
                      <span>Monday - Friday</span>
                      <span>9:00 AM - 7:00 PM</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Saturday</span>
                      <span>10:00 AM - 6:00 PM</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Sunday</span>
                      <span>Closed</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                className="bg-luxury-gray-light p-8 lg:p-12 rounded-lg"
              >
                <h3 className="mb-6">Send us a Message</h3>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm mb-2 text-gray-700">
                        {t('contact.name')} *
                      </label>
                      <Input
                        id="name"
                        type="text"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        required
                        className="w-full"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm mb-2 text-gray-700">
                        {t('contact.email')} *
                      </label>
                      <Input
                        id="email"
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        required
                        className="w-full"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="subject" className="block text-sm mb-2 text-gray-700">
                      {t('contact.subject')} *
                    </label>
                    <Input
                      id="subject"
                      type="text"
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      required
                      className="w-full"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm mb-2 text-gray-700">
                      {t('contact.message')} *
                    </label>
                    <Textarea
                      id="message"
                      rows={6}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      required
                      className="w-full"
                    />
                  </div>

                  <div className="flex items-center justify-between">
                    <p className="text-sm text-gray-600">
                      * Required fields
                    </p>
                    <Button
                      type="submit"
                      disabled={isSubmitting}
                      className="bg-luxury-gold hover:bg-luxury-gold-dark text-white px-8"
                    >
                      {isSubmitting ? 'Sending...' : t('contact.send')}
                    </Button>
                  </div>
                </form>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
