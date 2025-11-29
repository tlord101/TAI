export interface Location {
  id: string;
  name: string;
  slug: string;
  city?: string;
  type: 'city' | 'district' | 'region';
  image: string;
  shortDescription: string;
  overview: string;
  lifestyle: string;
  luxuryHighlights: string[];
  investmentPotential: string;
  averagePrice: string;
  popularPropertyTypes: string[];
  featured?: boolean;
}

export const locations: Location[] = [
  // Barcelona Districts
  {
    id: 'eixample',
    name: 'Eixample',
    slug: 'eixample-barcelona',
    city: 'Barcelona',
    type: 'district',
    image: 'barcelona-eixample-architecture',
    shortDescription: 'Iconic modernist architecture and wide boulevards',
    overview: 'Eixample is Barcelona\'s most iconic district, famous for its octagonal blocks, wide boulevards, and stunning modernist architecture. Home to Gaudí\'s Sagrada Familia and Casa Batlló, this district represents the pinnacle of Barcelona\'s urban planning and architectural heritage.',
    lifestyle: 'Sophisticated urban living with access to high-end shopping on Passeig de Gràcia, Michelin-starred restaurants, and world-class cultural attractions. The district offers a perfect blend of historic charm and modern amenities.',
    luxuryHighlights: [
      'Passeig de Gràcia luxury shopping',
      'Modernist architectural masterpieces',
      'Exclusive penthouses with Sagrada Familia views',
      'Premium restaurants and private clubs',
      'Central location with excellent connectivity'
    ],
    investmentPotential: 'Eixample remains one of Barcelona\'s most sought-after areas with consistent property value appreciation. High rental yields from tourism and corporate rentals. Strong demand from international buyers.',
    averagePrice: '€6,500 - €12,000 per m²',
    popularPropertyTypes: ['Modernist Apartments', 'Penthouses', 'Renovated Flats'],
    featured: true
  },
  {
    id: 'gracia',
    name: 'Gràcia',
    slug: 'gracia-barcelona',
    city: 'Barcelona',
    type: 'district',
    image: 'barcelona-gracia-neighborhood',
    shortDescription: 'Bohemian charm with village atmosphere',
    overview: 'Gràcia maintains its village-like atmosphere despite being in the heart of Barcelona. Known for its charming squares, independent boutiques, and artistic community, it offers a unique blend of local authenticity and cosmopolitan living.',
    lifestyle: 'Relaxed, community-oriented lifestyle with artisan markets, independent cinemas, and family-run restaurants. Popular with creative professionals and families seeking authentic Barcelona living.',
    luxuryHighlights: [
      'Exclusive renovated townhouses',
      'Proximity to Park Güell',
      'Boutique shopping and dining',
      'Strong community atmosphere',
      'Excellent schools nearby'
    ],
    investmentPotential: 'Growing demand from buyers seeking character properties. Increasing gentrification has led to steady value appreciation while maintaining neighborhood charm.',
    averagePrice: '€4,500 - €7,500 per m²',
    popularPropertyTypes: ['Townhouses', 'Renovated Apartments', 'Duplexes'],
    featured: true
  },
  {
    id: 'sarria-sant-gervasi',
    name: 'Sarrià-Sant Gervasi',
    slug: 'sarria-sant-gervasi-barcelona',
    city: 'Barcelona',
    type: 'district',
    image: 'barcelona-sarria-residential',
    shortDescription: 'Barcelona\'s most prestigious residential area',
    overview: 'Sarrià-Sant Gervasi is synonymous with elegance and exclusivity. This upscale district features tree-lined streets, prestigious international schools, and some of Barcelona\'s finest residences.',
    lifestyle: 'Refined, family-oriented lifestyle with access to premium amenities, private healthcare, international schools, and exclusive clubs. Quiet residential environment while remaining close to the city center.',
    luxuryHighlights: [
      'Exclusive single-family homes',
      'International schools (BSB, ASB)',
      'Private health clinics',
      'Premium boutiques and markets',
      'Excellent public transport connections'
    ],
    investmentPotential: 'Highly stable market with strong demand from high-net-worth families and diplomats. Limited supply of properties ensures value retention and appreciation.',
    averagePrice: '€6,000 - €10,000 per m²',
    popularPropertyTypes: ['Family Homes', 'Luxury Apartments', 'Garden Flats'],
    featured: true
  },
  {
    id: 'pedralbes',
    name: 'Pedralbes',
    slug: 'pedralbes-barcelona',
    city: 'Barcelona',
    type: 'district',
    image: 'barcelona-pedralbes-luxury',
    shortDescription: 'Ultimate luxury in Barcelona\'s most exclusive zone',
    overview: 'Pedralbes represents the pinnacle of luxury living in Barcelona. Home to embassies, the royal palace, and the city\'s wealthiest residents, this area offers unparalleled privacy, security, and prestige.',
    lifestyle: 'Ultra-exclusive lifestyle with expansive properties, private gardens, and complete privacy. Residents enjoy proximity to premium golf courses, private clubs, and international schools.',
    luxuryHighlights: [
      'Palatial villas and mansions',
      'Royal Palace of Pedralbes',
      'FC Barcelona facilities',
      'Private security',
      'Extensive gardens and green spaces'
    ],
    investmentPotential: 'Barcelona\'s premier luxury market with limited availability. Properties in Pedralbes are considered trophy assets with exceptional long-term value.',
    averagePrice: '€8,000 - €15,000+ per m²',
    popularPropertyTypes: ['Villas', 'Estates', 'Luxury Apartments'],
    featured: true
  },
  {
    id: 'barceloneta',
    name: 'Barceloneta',
    slug: 'barceloneta-barcelona',
    city: 'Barcelona',
    type: 'district',
    image: 'barcelona-barceloneta-beach',
    shortDescription: 'Beachfront living in the heart of the city',
    overview: 'Barceloneta is Barcelona\'s historic maritime neighborhood, offering the unique combination of beach living and urban convenience. Modern luxury developments complement traditional fishermen\'s quarters.',
    lifestyle: 'Mediterranean lifestyle with beach access, waterfront dining, and water sports. Popular with those seeking an active, outdoor-oriented lifestyle without leaving the city.',
    luxuryHighlights: [
      'Direct beach access',
      'Marina and yacht clubs',
      'Seafood restaurants',
      'Waterfront penthouses',
      'Olympic Port nearby'
    ],
    investmentPotential: 'Strong rental market due to tourism and beach proximity. New luxury developments have elevated the area\'s prestige and property values.',
    averagePrice: '€5,500 - €9,000 per m²',
    popularPropertyTypes: ['Beachfront Apartments', 'Penthouses', 'Modern Developments'],
    featured: false
  },
  {
    id: 'poblenou',
    name: 'Poblenou / 22@',
    slug: 'poblenou-barcelona',
    city: 'Barcelona',
    type: 'district',
    image: 'barcelona-poblenou-modern',
    shortDescription: 'Barcelona\'s innovation district with creative energy',
    overview: 'Poblenou has transformed from an industrial area into Barcelona\'s innovation and technology hub. The 22@ district combines creative offices, modern residences, and cultural spaces, creating a dynamic urban environment.',
    lifestyle: 'Contemporary, creative lifestyle with co-working spaces, art galleries, and beach proximity. Popular with entrepreneurs, tech professionals, and young families.',
    luxuryHighlights: [
      'Designer lofts and new builds',
      'Tech and innovation hub',
      'Beach proximity',
      'Creative dining scene',
      'Parks and green spaces'
    ],
    investmentPotential: 'Rapidly appreciating area with ongoing development. Strong demand from tech sector employees and creative professionals. Excellent long-term growth potential.',
    averagePrice: '€4,000 - €7,000 per m²',
    popularPropertyTypes: ['Lofts', 'New Developments', 'Industrial Conversions'],
    featured: true
  },
  
  // Catalonia
  {
    id: 'sitges',
    name: 'Sitges',
    slug: 'sitges-catalonia',
    type: 'city',
    image: 'sitges-coastal-town',
    shortDescription: 'Elegant coastal town with cosmopolitan atmosphere',
    overview: 'Sitges is a sophisticated coastal town just 35 minutes from Barcelona, known for its beautiful beaches, cultural festivals, and Mediterranean charm. This historic town attracts an international community seeking luxury seaside living.',
    lifestyle: 'Relaxed Mediterranean lifestyle with year-round cultural events, excellent dining, and water sports. Perfect blend of beach living and cultural sophistication.',
    luxuryHighlights: [
      '17 pristine beaches',
      'Historic old town',
      'International film festival',
      'Golf courses',
      'Yacht marina'
    ],
    investmentPotential: 'Strong second-home and vacation rental market. Consistent demand from Barcelona professionals and international buyers. Year-round appeal.',
    averagePrice: '€3,500 - €6,500 per m²',
    popularPropertyTypes: ['Villas', 'Seafront Apartments', 'Estates'],
    featured: true
  },
  {
    id: 'costa-brava',
    name: 'Costa Brava',
    slug: 'costa-brava-catalonia',
    type: 'region',
    image: 'costa-brava-coastline',
    shortDescription: 'Rugged coastline with hidden coves and medieval villages',
    overview: 'Costa Brava stretches from Blanes to the French border, featuring dramatic cliffs, crystal-clear coves, and charming medieval villages. This region offers some of Catalonia\'s most exclusive coastal properties.',
    lifestyle: 'Sophisticated coastal living with access to world-class restaurants, golf courses, and natural beauty. Popular with those seeking privacy and natural surroundings.',
    luxuryHighlights: [
      'Exclusive waterfront villas',
      'Michelin-starred restaurants',
      'Golf courses (PGA Catalunya)',
      'Historic villages (Cadaqués, Begur)',
      'Protected natural parks'
    ],
    investmentPotential: 'Premium coastal market with limited available land. Strong international demand, particularly from French and northern European buyers.',
    averagePrice: '€4,000 - €10,000+ per m²',
    popularPropertyTypes: ['Seafront Villas', 'Estates', 'Luxury Apartments'],
    featured: true
  },
  
  // Madrid
  {
    id: 'salamanca-madrid',
    name: 'Salamanca',
    slug: 'salamanca-madrid',
    city: 'Madrid',
    type: 'district',
    image: 'madrid-salamanca-elegant',
    shortDescription: 'Madrid\'s golden mile of luxury and elegance',
    overview: 'Salamanca is Madrid\'s most prestigious district, known for its elegant 19th-century architecture, luxury boutiques on Calle Serrano, and refined atmosphere. This is the address of choice for Madrid\'s elite.',
    lifestyle: 'Sophisticated urban lifestyle with access to haute couture shopping, Michelin-starred dining, art galleries, and exclusive private clubs. Traditional Madrid elegance meets modern luxury.',
    luxuryHighlights: [
      'Serrano and Ortega y Gasset luxury shopping',
      'Classic Madrid architecture',
      'Private clubs and cultural institutions',
      'Premium restaurants',
      'Excellent schools'
    ],
    investmentPotential: 'Madrid\'s most stable luxury market. Consistent demand from Spanish and international buyers. Limited supply ensures value retention.',
    averagePrice: '€7,000 - €13,000 per m²',
    popularPropertyTypes: ['Classic Apartments', 'Penthouses', 'Renovated Flats'],
    featured: true
  },
  
  // Marbella
  {
    id: 'marbella',
    name: 'Marbella',
    slug: 'marbella-costa-del-sol',
    type: 'city',
    image: 'marbella-golden-mile',
    shortDescription: 'Mediterranean luxury lifestyle destination',
    overview: 'Marbella is synonymous with Mediterranean luxury. From the exclusive Golden Mile to the glamorous Puerto Banús, this coastal city offers year-round sunshine, world-class amenities, and an international lifestyle.',
    lifestyle: 'Glamorous Mediterranean lifestyle with beach clubs, championship golf courses, luxury marinas, and five-star dining. International community with year-round social calendar.',
    luxuryHighlights: [
      'Puerto Banús marina',
      'Golden Mile estates',
      'Beach clubs',
      '50+ golf courses nearby',
      'Michelin-starred restaurants'
    ],
    investmentPotential: 'Spain\'s premier luxury coastal market. Strong international demand, particularly from UK, Scandinavia, and Middle East. Excellent rental potential.',
    averagePrice: '€5,000 - €15,000+ per m²',
    popularPropertyTypes: ['Beachfront Villas', 'Golf Properties', 'Penthouses'],
    featured: true
  },
  
  // Ibiza
  {
    id: 'ibiza',
    name: 'Ibiza',
    slug: 'ibiza-balearic-islands',
    type: 'city',
    image: 'ibiza-sunset-villa',
    shortDescription: 'Bohemian luxury in the Mediterranean',
    overview: 'Ibiza offers a unique blend of bohemian spirit and sophisticated luxury. Beyond its famous nightlife, the island features stunning beaches, hidden coves, and exclusive estates with breathtaking sunset views.',
    lifestyle: 'Eclectic island lifestyle combining beach living, wellness culture, international dining, and vibrant entertainment. Popular with creative professionals and luxury travelers.',
    luxuryHighlights: [
      'Exclusive villa estates',
      'Beach clubs',
      'World-renowned restaurants',
      'Wellness retreats',
      'Private yacht charters'
    ],
    investmentPotential: 'Premium island market with limited land availability. Strong rental market during summer season. International appeal ensures sustained demand.',
    averagePrice: '€6,000 - €12,000+ per m²',
    popularPropertyTypes: ['Luxury Villas', 'Seafront Properties', 'Rural Estates'],
    featured: true
  },
  
  // Mallorca
  {
    id: 'mallorca',
    name: 'Mallorca',
    slug: 'mallorca-balearic-islands',
    type: 'city',
    image: 'mallorca-port-andratx',
    shortDescription: 'Sophisticated island living in the Mediterranean',
    overview: 'Mallorca is the Mediterranean\'s most sophisticated island destination. From the historic capital Palma to exclusive coastal enclaves like Port d\'Andratx, the island offers diverse luxury living options.',
    lifestyle: 'Refined island lifestyle with world-class marinas, championship golf, Michelin-starred restaurants, and cultural attractions. Year-round appeal with international community.',
    luxuryHighlights: [
      'Port d\'Andratx luxury marina',
      'Historic Palma old town',
      'Mountain estates (Tramuntana)',
      'Golf courses',
      'International schools'
    ],
    investmentPotential: 'Balearic Islands\' most established luxury market. Strong year-round demand from European buyers. Excellent infrastructure and connectivity.',
    averagePrice: '€5,500 - €12,000+ per m²',
    popularPropertyTypes: ['Seafront Villas', 'Country Estates', 'Palma Apartments'],
    featured: true
  },
  
  // Valencia
  {
    id: 'valencia',
    name: 'Valencia',
    slug: 'valencia',
    type: 'city',
    image: 'valencia-city-arts',
    shortDescription: 'Modern Mediterranean metropolis',
    overview: 'Valencia combines modern architecture, Mediterranean beaches, and rich cultural heritage. Spain\'s third-largest city offers excellent quality of life with more affordable luxury than Barcelona or Madrid.',
    lifestyle: 'Balanced Mediterranean lifestyle with beaches, parks, cultural attractions, and renowned gastronomy. Growing international community and excellent infrastructure.',
    luxuryHighlights: [
      'City of Arts and Sciences',
      'Beachfront promenade',
      'Historic old town',
      'Modern developments',
      'Renowned gastronomy'
    ],
    investmentPotential: 'Emerging luxury market with significant growth potential. Increasing international interest and major infrastructure developments. Excellent value compared to Madrid and Barcelona.',
    averagePrice: '€2,500 - €5,500 per m²',
    popularPropertyTypes: ['Modern Apartments', 'Penthouses', 'Historic Renovations'],
    featured: false
  },
  
  // Additional Barcelona Districts
  {
    id: 'les-corts',
    name: 'Les Corts',
    slug: 'les-corts-barcelona',
    city: 'Barcelona',
    type: 'district',
    image: 'barcelona-les-corts',
    shortDescription: 'Residential elegance near FC Barcelona',
    overview: 'Les Corts is a distinguished residential district known for its peaceful atmosphere, excellent schools, and proximity to FC Barcelona\'s Camp Nou stadium. It combines traditional Catalan charm with modern amenities.',
    lifestyle: 'Family-friendly environment with local markets, parks, and quality restaurants. Predominantly residential with a strong sense of community.',
    luxuryHighlights: [
      'Proximity to Camp Nou',
      'Excellent schools',
      'L\'Illa Diagonal shopping center',
      'Green spaces and parks',
      'Family-oriented community'
    ],
    investmentPotential: 'Stable residential market with consistent demand from families and professionals. Lower profile than Eixample but excellent value retention.',
    averagePrice: '€4,000 - €7,000 per m²',
    popularPropertyTypes: ['Family Apartments', 'Renovated Flats', 'Townhouses'],
    featured: false
  },
  {
    id: 'ciutat-vella',
    name: 'Ciutat Vella',
    slug: 'ciutat-vella-barcelona',
    city: 'Barcelona',
    type: 'district',
    image: 'barcelona-ciutat-vella',
    shortDescription: 'Historic heart of Barcelona',
    overview: 'Ciutat Vella (Old City) is Barcelona\'s historic center, encompassing the Gothic Quarter, El Born, and La Rambla. This area combines medieval architecture with vibrant cultural life.',
    lifestyle: 'Dynamic urban living in Barcelona\'s cultural epicenter. Perfect for those who want to be in the heart of the action with historic charm.',
    luxuryHighlights: [
      'Gothic Quarter architecture',
      'Picasso Museum',
      'La Rambla',
      'Historic palaces',
      'Cultural attractions'
    ],
    investmentPotential: 'Strong tourism appeal with excellent rental yields. Historic properties with character in high demand from international buyers.',
    averagePrice: '€4,500 - €8,000 per m²',
    popularPropertyTypes: ['Historic Apartments', 'Lofts', 'Restored Palaces'],
    featured: false
  },
  {
    id: 'sant-marti',
    name: 'Sant Martí',
    slug: 'sant-marti-barcelona',
    city: 'Barcelona',
    type: 'district',
    image: 'barcelona-sant-marti',
    shortDescription: 'Emerging district with modern developments',
    overview: 'Sant Martí is a diverse district undergoing significant transformation, featuring both traditional neighborhoods and modern developments near the beach.',
    lifestyle: 'Mix of local authenticity and modern amenities. Growing area popular with young professionals and families seeking value.',
    luxuryHighlights: [
      'Beach proximity',
      'New developments',
      'Rambla del Poblenou',
      'Parks and green spaces',
      'Growing cultural scene'
    ],
    investmentPotential: 'Excellent growth potential with ongoing urban renewal projects. More affordable entry point with strong appreciation prospects.',
    averagePrice: '€3,500 - €6,000 per m²',
    popularPropertyTypes: ['New Apartments', 'Renovated Flats', 'Beachside Properties'],
    featured: false
  },
  
  // Additional Spanish Cities
  {
    id: 'seville',
    name: 'Seville',
    slug: 'seville-andalusia',
    type: 'city',
    image: 'seville-historic',
    shortDescription: 'Andalusian charm and cultural heritage',
    overview: 'Seville, the capital of Andalusia, offers rich history, flamenco culture, and stunning architecture. The city combines traditional Spanish lifestyle with modern amenities.',
    lifestyle: 'Authentic Spanish lifestyle with tapas culture, festivals, and historic charm. Year-round sunshine and warm community atmosphere.',
    luxuryHighlights: [
      'Historic palaces and courtyards',
      'Cathedral and Alcázar',
      'Triana neighborhood',
      'Flamenco culture',
      'River Guadalquivir views'
    ],
    investmentPotential: 'Growing luxury market with increasing international interest. Excellent value compared to coastal areas.',
    averagePrice: '€2,000 - €4,500 per m²',
    popularPropertyTypes: ['Historic Homes', 'Courtyardhouses', 'Renovated Palaces'],
    featured: false
  },
  {
    id: 'malaga',
    name: 'Málaga',
    slug: 'malaga-costa-del-sol',
    type: 'city',
    image: 'malaga-coastal',
    shortDescription: 'Costa del Sol\'s cultural capital',
    overview: 'Málaga combines coastal living with cultural sophistication. The city offers beaches, museums (including the Picasso Museum), and excellent cuisine.',
    lifestyle: 'Mediterranean coastal lifestyle with cultural attractions. Perfect balance of beach and city living.',
    luxuryHighlights: [
      'Picasso Museum',
      'Beaches and promenade',
      'Historic center',
      'International airport',
      'Growing art scene'
    ],
    investmentPotential: 'Rapidly growing luxury market benefiting from Costa del Sol appeal. Excellent connectivity and year-round tourism.',
    averagePrice: '€3,000 - €6,500 per m²',
    popularPropertyTypes: ['Seafront Apartments', 'Penthouses', 'Historic Renovations'],
    featured: false
  },
  {
    id: 'alicante',
    name: 'Alicante',
    slug: 'alicante-costa-blanca',
    type: 'city',
    image: 'alicante-coastal',
    shortDescription: 'Costa Blanca\'s elegant coastal city',
    overview: 'Alicante offers beautiful beaches, a charming old quarter, and excellent climate. The city is a growing luxury destination on the Costa Blanca.',
    lifestyle: 'Relaxed Mediterranean lifestyle with excellent weather year-round. Strong expat community and modern amenities.',
    luxuryHighlights: [
      'Beautiful beaches',
      'Santa Bárbara Castle',
      'Marina and yacht clubs',
      'Golf courses nearby',
      'International airport'
    ],
    investmentPotential: 'Emerging market with strong growth potential. Excellent value and increasing international buyer interest.',
    averagePrice: '€2,200 - €5,000 per m²',
    popularPropertyTypes: ['Beachfront Properties', 'Golf Villas', 'Modern Apartments'],
    featured: false
  },
  {
    id: 'bilbao',
    name: 'Bilbao',
    slug: 'bilbao-basque-country',
    type: 'city',
    image: 'bilbao-guggenheim',
    shortDescription: 'Basque Country\'s transformed metropolis',
    overview: 'Bilbao has transformed from an industrial city into a cultural and architectural landmark, anchored by the Guggenheim Museum.',
    lifestyle: 'Sophisticated urban lifestyle with world-class cuisine, museums, and modern architecture. Strong local culture and identity.',
    luxuryHighlights: [
      'Guggenheim Museum',
      'Basque cuisine',
      'Modern architecture',
      'Cultural institutions',
      'Nearby beaches'
    ],
    investmentPotential: 'Established market with steady demand. Strong local economy and growing international recognition.',
    averagePrice: '€3,000 - €6,000 per m²',
    popularPropertyTypes: ['Modern Apartments', 'Renovated Buildings', 'Penthouses'],
    featured: false
  },
  {
    id: 'san-sebastian',
    name: 'San Sebastián',
    slug: 'san-sebastian-basque-country',
    type: 'city',
    image: 'san-sebastian-beach',
    shortDescription: 'Elegant beach city with Michelin-star dining',
    overview: 'San Sebastián (Donostia) is one of Spain\'s most elegant cities, known for its beautiful beach, Belle Époque architecture, and world-renowned gastronomy.',
    lifestyle: 'Refined coastal lifestyle with exceptional dining culture. Perfect blend of beach, culture, and gastronomy.',
    luxuryHighlights: [
      'La Concha beach',
      'Michelin-starred restaurants',
      'Film festival',
      'Belle Époque architecture',
      'Pintxos culture'
    ],
    investmentPotential: 'Premium market with limited supply. High demand from both Spanish and international buyers. Excellent year-round appeal.',
    averagePrice: '€5,000 - €10,000 per m²',
    popularPropertyTypes: ['Beachfront Apartments', 'Historic Renovations', 'Penthouses'],
    featured: false
  }
];