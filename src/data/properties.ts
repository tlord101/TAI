export interface Property {
  id: string;
  title: string;
  location: string;
  city: string;
  district?: string;
  price: number;
  type: 'apartment' | 'penthouse' | 'villa' | 'townhouse' | 'estate';
  bedrooms: number;
  bathrooms: number;
  sqm: number;
  image: string;
  images?: string[];
  description: string;
  features: string[];
  coordinates?: { lat: number; lng: number };
  featured?: boolean;
  agentEmail?: string;
}

export const properties: Property[] = [
  {
    id: '1',
    title: 'Luxury Penthouse with Sagrada Familia Views',
    location: 'Eixample, Barcelona',
    city: 'Barcelona',
    district: 'Eixample',
    price: 2850000,
    type: 'penthouse',
    bedrooms: 4,
    bathrooms: 3,
    sqm: 280,
    image: 'barcelona-penthouse-luxury',
    description: 'Spectacular penthouse in the heart of Eixample with stunning views of the Sagrada Familia. This exclusive property features high-end finishes, a private terrace, and state-of-the-art amenities.',
    features: ['Private Terrace', 'Smart Home System', 'Concierge Service', 'Garage', 'Storage Room', 'Air Conditioning'],
    featured: true,
    agentEmail: 'Goldenstatesestates@hotmail.com'
  },
  {
    id: '2',
    title: 'Modernist Apartment in Passeig de Gràcia',
    location: 'Eixample, Barcelona',
    city: 'Barcelona',
    district: 'Eixample',
    price: 1950000,
    type: 'apartment',
    bedrooms: 3,
    bathrooms: 2,
    sqm: 185,
    image: 'barcelona-apartment-modern',
    description: 'Beautifully restored modernist apartment on Barcelona\'s most prestigious avenue. Original architectural details combined with contemporary luxury.',
    features: ['High Ceilings', 'Original Moldings', 'Balcony', 'Central Location', 'Elevator', 'Natural Light'],
    featured: true,
    agentEmail: 'Goldenstatesestates@hotmail.com'
  },
  {
    id: '3',
    title: 'Contemporary Villa in Pedralbes',
    location: 'Pedralbes, Barcelona',
    city: 'Barcelona',
    district: 'Pedralbes',
    price: 5500000,
    type: 'villa',
    bedrooms: 6,
    bathrooms: 5,
    sqm: 650,
    image: 'barcelona-villa-contemporary',
    description: 'Stunning contemporary villa in Barcelona\'s most exclusive neighborhood. Features include a pool, garden, and breathtaking city views.',
    features: ['Swimming Pool', 'Garden', 'Home Cinema', 'Wine Cellar', 'Gym', 'Security System'],
    featured: true,
    agentEmail: 'Goldenstatesestates@hotmail.com'
  },
  {
    id: '4',
    title: 'Beachfront Penthouse in Barceloneta',
    location: 'Barceloneta, Barcelona',
    city: 'Barcelona',
    district: 'Barceloneta',
    price: 2200000,
    type: 'penthouse',
    bedrooms: 3,
    bathrooms: 3,
    sqm: 220,
    image: 'barcelona-beach-penthouse',
    description: 'Exclusive beachfront penthouse with panoramic Mediterranean views. Direct beach access and luxurious amenities.',
    features: ['Sea Views', 'Terrace', 'Beach Access', 'Parking', 'Storage', 'Air Conditioning'],
    featured: false,
    agentEmail: 'Goldenstatesestates@hotmail.com'
  },
  {
    id: '5',
    title: 'Luxury Apartment in Sarrià-Sant Gervasi',
    location: 'Sarrià-Sant Gervasi, Barcelona',
    city: 'Barcelona',
    district: 'Sarrià-Sant Gervasi',
    price: 1650000,
    type: 'apartment',
    bedrooms: 4,
    bathrooms: 3,
    sqm: 195,
    image: 'barcelona-apartment-sarria',
    description: 'Elegant apartment in one of Barcelona\'s most prestigious residential areas. Quiet neighborhood with excellent amenities.',
    features: ['Garden Views', 'Parking', 'Storage Room', 'Concierge', 'Security', 'Elevator'],
    featured: false,
    agentEmail: 'Goldenstatesestates@hotmail.com'
  },
  {
    id: '6',
    title: 'Designer Loft in Poblenou',
    location: 'Poblenou, Barcelona',
    city: 'Barcelona',
    district: 'Poblenou',
    price: 890000,
    type: 'apartment',
    bedrooms: 2,
    bathrooms: 2,
    sqm: 145,
    image: 'barcelona-loft-poblenou',
    description: 'Stylish industrial loft in Barcelona\'s creative district. High ceilings, open plan, and modern design.',
    features: ['High Ceilings', 'Open Plan', 'Terrace', 'Modern Kitchen', 'Parking', 'Near Beach'],
    featured: false,
    agentEmail: 'Goldenstatesestates@hotmail.com'
  },
  {
    id: '7',
    title: 'Historic Townhouse in Gràcia',
    location: 'Gràcia, Barcelona',
    city: 'Barcelona',
    district: 'Gràcia',
    price: 1350000,
    type: 'townhouse',
    bedrooms: 4,
    bathrooms: 3,
    sqm: 240,
    image: 'barcelona-townhouse-gracia',
    description: 'Charming townhouse in the bohemian neighborhood of Gràcia. Original features with modern renovations.',
    features: ['Private Patio', 'Rooftop Terrace', 'Original Details', 'Storage', 'Laundry Room', 'Wine Cellar'],
    featured: false,
    agentEmail: 'Goldenstatesestates@hotmail.com'
  },
  {
    id: '8',
    title: 'Luxury Estate in Sitges',
    location: 'Sitges, Catalonia',
    city: 'Sitges',
    price: 4200000,
    type: 'estate',
    bedrooms: 7,
    bathrooms: 6,
    sqm: 850,
    image: 'sitges-estate-luxury',
    description: 'Magnificent estate overlooking the Mediterranean in the coastal town of Sitges. Private pool, tennis court, and spectacular gardens.',
    features: ['Sea Views', 'Swimming Pool', 'Tennis Court', 'Guest House', 'Wine Cellar', 'Garage for 4 cars'],
    featured: true,
    agentEmail: 'Goldenstatesestates@hotmail.com'
  },
  {
    id: '9',
    title: 'Modern Apartment in Salamanca, Madrid',
    location: 'Salamanca, Madrid',
    city: 'Madrid',
    district: 'Salamanca',
    price: 1850000,
    type: 'apartment',
    bedrooms: 3,
    bathrooms: 3,
    sqm: 210,
    image: 'madrid-apartment-salamanca',
    description: 'Sophisticated apartment in Madrid\'s most exclusive district. Recently renovated with premium finishes.',
    features: ['Doorman', 'Parking', 'Storage Room', 'Central Heating', 'Air Conditioning', 'Balcony'],
    featured: false,
    agentEmail: 'Goldenstatesestates@hotmail.com'
  },
  {
    id: '10',
    title: 'Beachfront Villa in Marbella',
    location: 'Marbella, Costa del Sol',
    city: 'Marbella',
    price: 6800000,
    type: 'villa',
    bedrooms: 6,
    bathrooms: 7,
    sqm: 780,
    image: 'marbella-villa-beachfront',
    description: 'Stunning beachfront villa in Marbella\'s exclusive Golden Mile. Direct beach access, infinity pool, and world-class amenities.',
    features: ['Beach Access', 'Infinity Pool', 'Home Automation', 'Spa', 'Gym', 'Staff Quarters'],
    featured: true,
    agentEmail: 'Goldenstatesestates@hotmail.com'
  },
  {
    id: '11',
    title: 'Seafront Penthouse in Valencia',
    location: 'Valencia',
    city: 'Valencia',
    price: 1450000,
    type: 'penthouse',
    bedrooms: 4,
    bathrooms: 3,
    sqm: 240,
    image: 'valencia-penthouse-seafront',
    description: 'Luxurious penthouse with panoramic sea views in Valencia. Spacious terrace perfect for Mediterranean lifestyle.',
    features: ['Sea Views', 'Large Terrace', 'Jacuzzi', 'Parking', 'Storage', 'Concierge'],
    featured: false,
    agentEmail: 'Goldenstatesestates@hotmail.com'
  },
  {
    id: '12',
    title: 'Luxury Villa in Ibiza',
    location: 'Santa Eulalia, Ibiza',
    city: 'Ibiza',
    price: 5200000,
    type: 'villa',
    bedrooms: 5,
    bathrooms: 5,
    sqm: 520,
    image: 'ibiza-villa-luxury',
    description: 'Contemporary luxury villa in Ibiza with stunning sunset views. Infinity pool, outdoor entertainment areas, and direct sea access.',
    features: ['Sea Views', 'Infinity Pool', 'Outdoor Kitchen', 'Wine Cellar', 'Guest Apartment', 'Boat Mooring'],
    featured: true,
    agentEmail: 'Goldenstatesestates@hotmail.com'
  }
];

export const cities = [
  'Barcelona',
  'Madrid',
  'Valencia',
  'Seville',
  'Malaga',
  'Marbella',
  'Ibiza',
  'Mallorca',
  'Sitges',
  'Girona',
  'Tarragona',
  'Bilbao',
  'San Sebastián',
  'Alicante'
];

export const propertyTypes = ['apartment', 'penthouse', 'villa', 'townhouse', 'estate'];
