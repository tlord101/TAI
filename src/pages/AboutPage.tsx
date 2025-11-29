import { motion } from 'motion/react';
import { Award, Users, Globe, TrendingUp, Shield, Heart } from 'lucide-react';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import { useLanguage } from '../contexts/LanguageContext';

export default function AboutPage() {
  const { t } = useLanguage();

  const values = [
    {
      icon: Award,
      title: 'Excellence',
      description: 'We maintain the highest standards in luxury real estate services.',
    },
    {
      icon: Shield,
      title: 'Trust',
      description: 'Your confidence in us is built on transparency and integrity.',
    },
    {
      icon: Heart,
      title: 'Dedication',
      description: 'We are passionate about matching clients with their dream properties.',
    },
    {
      icon: Globe,
      title: 'Global Reach',
      description: 'International network serving clients from around the world.',
    },
  ];

  const stats = [
    { number: '500+', label: 'Luxury Properties' },
    { number: '15+', label: 'Years Experience' },
    { number: '30+', label: 'Prime Locations' },
    { number: '98%', label: 'Client Satisfaction' },
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative h-[50vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1739386748286-0ba8b1c8b6cf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiYXJjZWxvbmElMjBza3lsaW5lJTIwbHV4dXJ5fGVufDF8fHx8MTc2MzQ0MjIzMHww&ixlib=rb-4.1.0&q=80&w=1080"
            alt="About Golden Gates Estates"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-luxury-black/60"></div>
        </div>
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="relative z-10 text-center text-white max-w-4xl mx-auto px-4"
        >
          <h1 className="text-white mb-4">{t('about.title')}</h1>
          <p className="text-xl text-gray-200">{t('about.subtitle')}</p>
        </motion.div>
      </section>

      {/* Story Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="mb-6">Our Story</h2>
              <p className="text-gray-700 mb-4">
                Golden Gates Estates Barcelona was founded with a singular vision: to provide 
                discerning clients with access to Spain's most exceptional luxury properties. 
                Based in Barcelona, we've expanded our reach across Spain's most prestigious 
                locations.
              </p>
              <p className="text-gray-700 mb-4">
                Our deep knowledge of local markets, combined with our international network, 
                allows us to offer unparalleled service to both buyers and sellers. We understand 
                that luxury real estate is about more than just properties—it's about lifestyle, 
                investment, and creating lasting value.
              </p>
              <p className="text-gray-700">
                Whether you're seeking a beachfront villa in Marbella, a penthouse in Barcelona's 
                Eixample, or an estate in Ibiza, our dedicated team is committed to making your 
                real estate dreams a reality.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative h-[500px] rounded-lg overflow-hidden shadow-xl"
            >
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1594873604892-b599f847e859?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBhcGFydG1lbnQlMjBpbnRlcmlvcnxlbnwxfHx8fDE3NjMzNDczMzl8MA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Golden Gates Estates Office"
                className="w-full h-full object-cover"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-luxury-black text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <div className="text-4xl md:text-5xl text-luxury-gold mb-2">{stat.number}</div>
                <div className="text-sm text-gray-400 uppercase tracking-wide">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="mb-4">Our Values</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              The principles that guide everything we do
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center p-6"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-luxury-gold/10 rounded-full mb-4">
                  <value.icon className="w-8 h-8 text-luxury-gold" />
                </div>
                <h4 className="mb-3">{value.title}</h4>
                <p className="text-sm text-gray-600">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust Badges */}
      <section className="py-20 bg-luxury-gray-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h2 className="mb-12">Why Choose Golden Gates Estates</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white p-8 rounded-lg shadow-md">
                <Users className="w-12 h-12 text-luxury-gold mx-auto mb-4" />
                <h4 className="mb-3">Expert Team</h4>
                <p className="text-sm text-gray-600">
                  Our multilingual team brings decades of combined experience in luxury real estate.
                </p>
              </div>
              <div className="bg-white p-8 rounded-lg shadow-md">
                <TrendingUp className="w-12 h-12 text-luxury-gold mx-auto mb-4" />
                <h4 className="mb-3">Market Knowledge</h4>
                <p className="text-sm text-gray-600">
                  In-depth understanding of Spain's luxury property markets and investment opportunities.
                </p>
              </div>
              <div className="bg-white p-8 rounded-lg shadow-md">
                <Shield className="w-12 h-12 text-luxury-gold mx-auto mb-4" />
                <h4 className="mb-3">Secure Transactions</h4>
                <p className="text-sm text-gray-600">
                  We ensure every transaction is handled with the utmost professionalism and security.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
