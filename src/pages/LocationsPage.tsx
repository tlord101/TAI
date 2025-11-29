import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { MapPin } from 'lucide-react';
import { locations } from '../data/locations';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import { Button } from '../components/ui/button';

export default function LocationsPage() {
  const [filter, setFilter] = useState<'all' | 'city' | 'district' | 'region'>('all');

  const filteredLocations = filter === 'all' 
    ? locations 
    : locations.filter(loc => loc.type === filter);

  const getLocationImage = () => {
    return 'https://images.unsplash.com/photo-1739386748286-0ba8b1c8b6cf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiYXJjZWxvbmElMjBza3lsaW5lJTIwbHV4dXJ5fGVufDF8fHx8MTc2MzQ0MjIzMHww&ixlib=rb-4.1.0&q=80&w=1080';
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
            <h1 className="text-white mb-4">Premium Locations</h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Explore Spain's most prestigious neighborhoods, cities, and regions. 
              Each location offers unique lifestyle opportunities and investment potential.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filter */}
      <section className="bg-luxury-gray-light border-b border-gray-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-wrap gap-3 justify-center">
            <Button
              variant={filter === 'all' ? 'default' : 'outline'}
              onClick={() => setFilter('all')}
              className={filter === 'all' ? 'bg-luxury-gold hover:bg-luxury-gold-dark' : ''}
            >
              All Locations
            </Button>
            <Button
              variant={filter === 'city' ? 'default' : 'outline'}
              onClick={() => setFilter('city')}
              className={filter === 'city' ? 'bg-luxury-gold hover:bg-luxury-gold-dark' : ''}
            >
              Cities
            </Button>
            <Button
              variant={filter === 'district' ? 'default' : 'outline'}
              onClick={() => setFilter('district')}
              className={filter === 'district' ? 'bg-luxury-gold hover:bg-luxury-gold-dark' : ''}
            >
              Districts
            </Button>
            <Button
              variant={filter === 'region' ? 'default' : 'outline'}
              onClick={() => setFilter('region')}
              className={filter === 'region' ? 'bg-luxury-gold hover:bg-luxury-gold-dark' : ''}
            >
              Regions
            </Button>
          </div>
        </div>
      </section>

      {/* Locations Grid */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredLocations.map((location, index) => (
              <motion.div
                key={location.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05 }}
              >
                <Link to={`/locations/${location.slug}`} className="group block">
                  <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow">
                    <div className="relative h-64 overflow-hidden">
                      <ImageWithFallback
                        src={getLocationImage()}
                        alt={location.name}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-luxury-black/80 to-transparent"></div>
                      <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                        <div className="flex items-center space-x-2 mb-2">
                          <MapPin className="w-4 h-4 text-luxury-gold" />
                          <span className="text-xs uppercase tracking-wide text-luxury-gold">
                            {location.type}
                          </span>
                        </div>
                        <h3 className="text-2xl text-white mb-1">{location.name}</h3>
                        {location.city && (
                          <p className="text-sm text-gray-300">{location.city}</p>
                        )}
                      </div>
                    </div>
                    <div className="p-6">
                      <p className="text-gray-700 mb-4">{location.shortDescription}</p>
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-luxury-gold">{location.averagePrice}</span>
                        <span className="text-gray-500">
                          {location.popularPropertyTypes.length} property types
                        </span>
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
