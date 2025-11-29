import { Link } from 'react-router-dom';
import { ArrowRight, MapPin, Star } from 'lucide-react';
import { motion } from 'motion/react';
import { properties } from '../data/properties';
import { locations } from '../data/locations';
import PropertyCard from '../components/PropertyCard';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import { useLanguage } from '../contexts/LanguageContext';
import { Button } from '../components/ui/button';

export default function HomePage() {
  const { t } = useLanguage();
  const featuredProperties = properties.filter(p => p.featured).slice(0, 6);
  const featuredLocations = locations.filter(l => l.featured).slice(0, 6);

  const testimonials = [
    {
      name: 'Sarah Johnson',
      location: 'London, UK',
      text: 'Golden Gates Estates made our dream of owning a property in Barcelona a reality. Their expertise and dedication were exceptional.',
      rating: 5,
    },
    {
      name: 'Michael Schmidt',
      location: 'Berlin, Germany',
      text: 'Professional service from start to finish. They understood exactly what we were looking for and delivered beyond expectations.',
      rating: 5,
    },
    {
      name: 'Marie Dubois',
      location: 'Paris, France',
      text: 'The attention to detail and personalized service made all the difference. Highly recommend for luxury property investment.',
      rating: 5,
    },
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative h-[90vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1739386748286-0ba8b1c8b6cf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiYXJjZWxvbmElMjBza3lsaW5lJTIwbHV4dXJ5fGVufDF8fHx8MTc2MzQ0MjIzMHww&ixlib=rb-4.1.0&q=80&w=1080"
            alt="Barcelona Skyline"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-luxury-black/70 to-luxury-black/30"></div>
        </div>
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 text-center text-white max-w-4xl mx-auto px-4"
        >
          <h1 className="text-white mb-6">{t('home.hero.title')}</h1>
          <p className="text-xl mb-8 text-gray-200">
            {t('home.hero.subtitle')}
          </p>
          <Link to="/properties">
            <Button className="bg-luxury-gold hover:bg-luxury-gold-dark text-white px-8 py-6 text-lg">
              {t('home.hero.cta')}
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </Link>
        </motion.div>
      </section>

      {/* Featured Properties */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="mb-4">{t('home.featured.title')}</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              {t('home.featured.subtitle')}
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProperties.map((property, index) => (
              <motion.div
                key={property.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <PropertyCard property={property} />
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link to="/properties">
              <Button variant="outline" className="border-luxury-gold text-luxury-gold hover:bg-luxury-gold hover:text-white">
                {t('common.view_all')}
                <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Prime Locations */}
      <section className="py-20 bg-luxury-gray-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="mb-4">{t('home.locations.title')}</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              {t('home.locations.subtitle')}
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredLocations.map((location, index) => (
              <motion.div
                key={location.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Link to={`/locations/${location.slug}`} className="group block">
                  <div className="relative h-80 overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-shadow">
                    <ImageWithFallback
                      src={`https://images.unsplash.com/photo-1739386748286-0ba8b1c8b6cf?w=600&h=800`}
                      alt={location.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-luxury-black/80 to-transparent"></div>
                    <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                      <div className="flex items-center space-x-2 mb-2">
                        <MapPin className="w-4 h-4 text-luxury-gold" />
                        <span className="text-sm uppercase tracking-wide text-luxury-gold">
                          {location.type}
                        </span>
                      </div>
                      <h3 className="text-2xl mb-2 text-white">{location.name}</h3>
                      <p className="text-sm text-gray-300">{location.shortDescription}</p>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link to="/locations">
              <Button variant="outline" className="border-luxury-gold text-luxury-gold hover:bg-luxury-gold hover:text-white">
                {t('common.explore')} All Locations
                <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="mb-4">{t('home.testimonials.title')}</h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-luxury-gray-light p-8 rounded-lg"
              >
                <div className="flex space-x-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-luxury-gold text-luxury-gold" />
                  ))}
                </div>
                <p className="text-gray-700 mb-6 italic">"{testimonial.text}"</p>
                <div>
                  <p className="text-sm text-gray-500">{testimonial.location}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-luxury-black text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-white mb-4">{t('home.contact.title')}</h2>
            <p className="text-xl text-gray-300 mb-8">
              {t('home.contact.subtitle')}
            </p>
            <Link to="/contact">
              <Button className="bg-luxury-gold hover:bg-luxury-gold-dark text-white px-8 py-6 text-lg">
                {t('home.contact.cta')}
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
