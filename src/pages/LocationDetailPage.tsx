import { useParams, Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { ArrowLeft, MapPin, TrendingUp, Home, Euro, Check } from 'lucide-react';
import { locations } from '../data/locations';
import { properties } from '../data/properties';
import PropertyCard from '../components/PropertyCard';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import { Button } from '../components/ui/button';

export default function LocationDetailPage() {
  const { slug } = useParams();
  const location = locations.find((l) => l.slug === slug);

  if (!location) {
    return (
      <div className="pt-20 min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="mb-4">Location Not Found</h2>
          <Link to="/locations">
            <Button>Back to Locations</Button>
          </Link>
        </div>
      </div>
    );
  }

  // Find properties in this location
  const locationProperties = properties.filter(
    (p) => p.city === location.name || p.district === location.name || p.location.includes(location.name)
  );

  const getLocationImage = () => {
    return 'https://images.unsplash.com/photo-1739386748286-0ba8b1c8b6cf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiYXJjZWxvbmElMjBza3lsaW5lJTIwbHV4dXJ5fGVufDF8fHx8MTc2MzQ0MjIzMHww&ixlib=rb-4.1.0&q=80&w=1080';
  };

  return (
    <div className="pt-20">
      {/* Back Button */}
      <div className="bg-luxury-gray-light border-b border-gray-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <Link to="/locations" className="inline-flex items-center text-sm text-gray-600 hover:text-luxury-gold">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Locations
          </Link>
        </div>
      </div>

      {/* Hero Section */}
      <section className="relative h-[50vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <ImageWithFallback
            src={getLocationImage()}
            alt={location.name}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-luxury-black/60"></div>
        </div>
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="relative z-10 text-center text-white max-w-4xl mx-auto px-4"
        >
          <div className="flex items-center justify-center space-x-2 mb-4">
            <MapPin className="w-6 h-6 text-luxury-gold" />
            <span className="text-sm uppercase tracking-wide text-luxury-gold">
              {location.type}
            </span>
          </div>
          <h1 className="text-white mb-4">{location.name}</h1>
          {location.city && (
            <p className="text-xl text-gray-200">{location.city}</p>
          )}
        </motion.div>
      </section>

      {/* Quick Stats */}
      <section className="py-12 bg-luxury-gray-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <Euro className="w-8 h-8 text-luxury-gold mx-auto mb-3" />
              <h4 className="mb-2">Average Price</h4>
              <p className="text-luxury-gold">{location.averagePrice}</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <Home className="w-8 h-8 text-luxury-gold mx-auto mb-3" />
              <h4 className="mb-2">Property Types</h4>
              <p className="text-gray-600">{location.popularPropertyTypes.join(', ')}</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <TrendingUp className="w-8 h-8 text-luxury-gold mx-auto mb-3" />
              <h4 className="mb-2">Available Properties</h4>
              <p className="text-gray-600">{locationProperties.length} listings</p>
            </div>
          </div>
        </div>
      </section>

      {/* Overview Section */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="mb-6">Overview</h2>
              <p className="text-gray-700 leading-relaxed mb-6">{location.overview}</p>
              
              <h3 className="mb-4">Lifestyle</h3>
              <p className="text-gray-700 leading-relaxed">{location.lifestyle}</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h3 className="mb-4">Luxury Highlights</h3>
              <div className="space-y-3 mb-8">
                {location.luxuryHighlights.map((highlight, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <Check className="w-5 h-5 text-luxury-gold flex-shrink-0 mt-1" />
                    <span className="text-gray-700">{highlight}</span>
                  </div>
                ))}
              </div>

              <h3 className="mb-4">Investment Potential</h3>
              <p className="text-gray-700 leading-relaxed">{location.investmentPotential}</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Properties in This Location */}
      {locationProperties.length > 0 && (
        <section className="py-12 bg-luxury-gray-light">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="mb-8">Properties in {location.name}</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {locationProperties.map((property) => (
                <PropertyCard key={property.id} property={property} />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA */}
      <section className="py-16 bg-luxury-black text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-white mb-4">Interested in {location.name}?</h2>
          <p className="text-xl text-gray-300 mb-8">
            Contact our expert team to learn more about properties in this area
          </p>
          <Link to="/contact">
            <Button className="bg-luxury-gold hover:bg-luxury-gold-dark text-white px-8 py-6">
              Contact Us
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
