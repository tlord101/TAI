import { useState } from 'react';
import { motion } from 'motion/react';
import { Filter } from 'lucide-react';
import { properties, cities, propertyTypes } from '../data/properties';
import PropertyCard from '../components/PropertyCard';
import { useLanguage } from '../contexts/LanguageContext';
import { Button } from '../components/ui/button';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '../components/ui/select';

export default function PropertiesPage() {
  const { t } = useLanguage();
  const [filters, setFilters] = useState({
    city: 'all',
    type: 'all',
    bedrooms: 'all',
    priceRange: 'all',
  });
  const [showFilters, setShowFilters] = useState(false);

  const filteredProperties = properties.filter((property) => {
    if (filters.city !== 'all' && property.city !== filters.city) return false;
    if (filters.type !== 'all' && property.type !== filters.type) return false;
    if (filters.bedrooms !== 'all') {
      const bedroomCount = parseInt(filters.bedrooms);
      if (property.bedrooms !== bedroomCount) return false;
    }
    if (filters.priceRange !== 'all') {
      const [min, max] = filters.priceRange.split('-').map(Number);
      if (property.price < min || (max && property.price > max)) return false;
    }
    return true;
  });

  const resetFilters = () => {
    setFilters({
      city: 'all',
      type: 'all',
      bedrooms: 'all',
      priceRange: 'all',
    });
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
            <h1 className="text-white mb-4">{t('properties.title')}</h1>
            <p className="text-xl text-gray-300">
              Discover your perfect luxury property in Spain
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filters */}
      <section className="bg-luxury-gray-light border-b border-gray-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between space-y-4 lg:space-y-0">
            <Button
              variant="outline"
              onClick={() => setShowFilters(!showFilters)}
              className="lg:hidden"
            >
              <Filter className="w-4 h-4 mr-2" />
              {showFilters ? 'Hide Filters' : 'Show Filters'}
            </Button>

            <div className={`${showFilters ? 'block' : 'hidden'} lg:flex lg:flex-1 lg:space-x-4 space-y-4 lg:space-y-0`}>
              <Select
                value={filters.city}
                onValueChange={(value) => setFilters({ ...filters, city: value })}
              >
                <SelectTrigger className="w-full lg:w-48">
                  <SelectValue placeholder={t('properties.filter.location')} />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">{t('properties.filter.all')}</SelectItem>
                  {cities.map((city) => (
                    <SelectItem key={city} value={city}>
                      {city}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>

              <Select
                value={filters.type}
                onValueChange={(value) => setFilters({ ...filters, type: value })}
              >
                <SelectTrigger className="w-full lg:w-48">
                  <SelectValue placeholder={t('properties.filter.type')} />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Types</SelectItem>
                  {propertyTypes.map((type) => (
                    <SelectItem key={type} value={type}>
                      {t(`type.${type}`)}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>

              <Select
                value={filters.bedrooms}
                onValueChange={(value) => setFilters({ ...filters, bedrooms: value })}
              >
                <SelectTrigger className="w-full lg:w-48">
                  <SelectValue placeholder={t('properties.filter.bedrooms')} />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">Any Bedrooms</SelectItem>
                  <SelectItem value="1">1+</SelectItem>
                  <SelectItem value="2">2+</SelectItem>
                  <SelectItem value="3">3+</SelectItem>
                  <SelectItem value="4">4+</SelectItem>
                  <SelectItem value="5">5+</SelectItem>
                </SelectContent>
              </Select>

              <Select
                value={filters.priceRange}
                onValueChange={(value) => setFilters({ ...filters, priceRange: value })}
              >
                <SelectTrigger className="w-full lg:w-48">
                  <SelectValue placeholder={t('properties.filter.price')} />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">Any Price</SelectItem>
                  <SelectItem value="0-1000000">Under €1M</SelectItem>
                  <SelectItem value="1000000-2000000">€1M - €2M</SelectItem>
                  <SelectItem value="2000000-5000000">€2M - €5M</SelectItem>
                  <SelectItem value="5000000-999999999">Over €5M</SelectItem>
                </SelectContent>
              </Select>

              <Button
                variant="outline"
                onClick={resetFilters}
                className="w-full lg:w-auto"
              >
                {t('properties.filter.reset')}
              </Button>
            </div>

            <div className="text-sm text-gray-600">
              {filteredProperties.length} {filteredProperties.length === 1 ? 'Property' : 'Properties'} Found
            </div>
          </div>
        </div>
      </section>

      {/* Properties Grid */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {filteredProperties.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProperties.map((property, index) => (
                <motion.div
                  key={property.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.05 }}
                >
                  <PropertyCard property={property} />
                </motion.div>
              ))}
            </div>
          ) : (
            <div className="text-center py-20">
              <p className="text-xl text-gray-600">
                No properties found matching your criteria. Please adjust your filters.
              </p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
