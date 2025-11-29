import { motion } from 'motion/react';
import { Calendar, Clock, ArrowRight } from 'lucide-react';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import { Button } from '../components/ui/button';

export default function BlogPage() {
  const blogPosts = [
    {
      id: '1',
      title: 'The Ultimate Guide to Buying Luxury Property in Barcelona',
      excerpt: 'Everything you need to know about investing in Barcelona\'s premium real estate market, from neighborhoods to legal requirements.',
      category: 'Investment Guide',
      date: 'November 15, 2024',
      readTime: '8 min read',
      image: 'https://images.unsplash.com/photo-1739386748286-0ba8b1c8b6cf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiYXJjZWxvbmElMjBza3lsaW5lJTIwbHV4dXJ5fGVufDF8fHx8MTc2MzQ0MjIzMHww&ixlib=rb-4.1.0&q=80&w=1080',
    },
    {
      id: '2',
      title: 'Marbella vs Ibiza: Which Coastal Paradise is Right for You?',
      excerpt: 'A comprehensive comparison of two of Spain\'s most exclusive coastal destinations for luxury property investment.',
      category: 'Market Analysis',
      date: 'November 10, 2024',
      readTime: '6 min read',
      image: 'https://images.unsplash.com/photo-1722452848316-c6c26ebeeb09?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYXJiZWxsYSUyMGx1eHVyeSUyMHZpbGxhfGVufDF8fHx8MTc2MzQ0MjIzMnww&ixlib=rb-4.1.0&q=80&w=1080',
    },
    {
      id: '3',
      title: 'Top 5 Emerging Luxury Neighborhoods in Madrid',
      excerpt: 'Discover Madrid\'s up-and-coming districts that are attracting discerning property buyers and investors.',
      category: 'Lifestyle',
      date: 'November 5, 2024',
      readTime: '5 min read',
      image: 'https://images.unsplash.com/photo-1737466670202-aab34a09f3c5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYWRyaWQlMjBlbGVnYW50JTIwYXJjaGl0ZWN0dXJlfGVufDF8fHx8MTc2MzQ0MjIzM3ww&ixlib=rb-4.1.0&q=80&w=1080',
    },
    {
      id: '4',
      title: 'Understanding Spanish Property Law: A Foreign Buyer\'s Guide',
      excerpt: 'Navigate the legal landscape of Spanish real estate with confidence. Essential information for international buyers.',
      category: 'Legal Guide',
      date: 'October 28, 2024',
      readTime: '10 min read',
      image: 'https://images.unsplash.com/photo-1594873604892-b599f847e859?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBhcGFydG1lbnQlMjBpbnRlcmlvcnxlbnwxfHx8fDE3NjMzNDczMzl8MA&ixlib=rb-4.1.0&q=80&w=1080',
    },
    {
      id: '5',
      title: 'The Rise of Sustainable Luxury Homes in Spain',
      excerpt: 'How eco-friendly features and sustainable design are shaping the future of luxury real estate.',
      category: 'Trends',
      date: 'October 20, 2024',
      readTime: '7 min read',
      image: 'https://images.unsplash.com/photo-1694967832949-09984640b143?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjB2aWxsYSUyMHBvb2x8ZW58MXx8fHwxNzYzNDQxMzAxfDA&ixlib=rb-4.1.0&q=80&w=1080',
    },
    {
      id: '6',
      title: 'Barcelona\'s Golden Quarter: Inside Eixample\'s Luxury Property Market',
      excerpt: 'An in-depth look at Barcelona\'s most iconic district and why it remains a top choice for luxury buyers.',
      category: 'Market Analysis',
      date: 'October 15, 2024',
      readTime: '9 min read',
      image: 'https://images.unsplash.com/photo-1661362715810-74dbbd4b51a7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBwZW50aG91c2UlMjBiYXJjZWxvbmF8ZW58MXx8fHwxNzYzNDQyMjMxfDA&ixlib=rb-4.1.0&q=80&w=1080',
    },
  ];

  const categories = ['All', 'Investment Guide', 'Market Analysis', 'Lifestyle', 'Legal Guide', 'Trends'];

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
            <h1 className="text-white mb-4">Insights & Expertise</h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Expert analysis, market insights, and lifestyle guides for luxury property enthusiasts
            </p>
          </motion.div>
        </div>
      </section>

      {/* Categories */}
      <section className="bg-luxury-gray-light border-b border-gray-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-wrap gap-3 justify-center">
            {categories.map((category) => (
              <Button
                key={category}
                variant="outline"
                className="hover:bg-luxury-gold hover:text-white hover:border-luxury-gold"
              >
                {category}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Post */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16"
          >
            <div className="relative h-[400px] lg:h-auto overflow-hidden rounded-lg">
              <ImageWithFallback
                src={blogPosts[0].image}
                alt={blogPosts[0].title}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex flex-col justify-center">
              <span className="inline-block px-3 py-1 bg-luxury-gold text-white text-xs uppercase tracking-wide mb-4 w-fit">
                Featured
              </span>
              <h2 className="mb-4">{blogPosts[0].title}</h2>
              <p className="text-gray-700 mb-6">{blogPosts[0].excerpt}</p>
              <div className="flex items-center space-x-6 text-sm text-gray-500 mb-6">
                <div className="flex items-center space-x-2">
                  <Calendar className="w-4 h-4" />
                  <span>{blogPosts[0].date}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Clock className="w-4 h-4" />
                  <span>{blogPosts[0].readTime}</span>
                </div>
              </div>
              <Button className="bg-luxury-gold hover:bg-luxury-gold-dark text-white w-fit">
                Read More
                <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </div>
          </motion.div>

          {/* Blog Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.slice(1).map((post, index) => (
              <motion.article
                key={post.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow group cursor-pointer"
              >
                <div className="relative h-56 overflow-hidden">
                  <ImageWithFallback
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="inline-block px-3 py-1 bg-luxury-gold text-white text-xs uppercase tracking-wide">
                      {post.category}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <h4 className="mb-3 group-hover:text-luxury-gold transition-colors">
                    {post.title}
                  </h4>
                  <p className="text-sm text-gray-600 mb-4">{post.excerpt}</p>
                  <div className="flex items-center space-x-4 text-xs text-gray-500">
                    <div className="flex items-center space-x-1">
                      <Calendar className="w-3 h-3" />
                      <span>{post.date}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Clock className="w-3 h-3" />
                      <span>{post.readTime}</span>
                    </div>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-16 bg-luxury-black text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-white mb-4">Stay Informed</h2>
            <p className="text-xl text-gray-300 mb-8">
              Subscribe to our newsletter for the latest insights on luxury real estate in Spain
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-lg text-gray-900"
              />
              <Button className="bg-luxury-gold hover:bg-luxury-gold-dark text-white px-8">
                Subscribe
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
