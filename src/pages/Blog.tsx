import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Calendar, Clock, ArrowRight, Tag, TrendingUp, Bookmark } from 'lucide-react';
import { Button } from '@/components/ui/button';

const featuredPost = {
  title: 'The Future of Fiber: How 10 Gbps is Changing Home Connectivity',
  excerpt: 'Discover how next-generation fiber optic technology is revolutionizing the way we connect, work, and play at home.',
  image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1200&h=600&fit=crop',
  date: 'Dec 1, 2024',
  readTime: '8 min read',
  category: 'Technology',
  slug: 'future-of-fiber',
};

const posts = [
  {
    title: '5 Tips to Maximize Your Wi-Fi Coverage at Home',
    excerpt: 'Learn how to position your router and optimize settings for the best wireless coverage.',
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=300&fit=crop',
    date: 'Nov 28, 2024',
    readTime: '5 min read',
    category: 'Tips & Tricks',
    slug: 'wifi-coverage-tips',
  },
  {
    title: 'Smart Home Devices That Need Gigabit Internet',
    excerpt: 'From 8K TVs to VR headsets, these smart devices perform best with fiber internet.',
    image: 'https://images.unsplash.com/photo-1558002038-1055907df827?w=400&h=300&fit=crop',
    date: 'Nov 25, 2024',
    readTime: '6 min read',
    category: 'Smart Home',
    slug: 'smart-home-gigabit',
  },
  {
    title: 'Understanding Latency: Why Ping Matters for Gamers',
    excerpt: 'A deep dive into network latency and why fiber provides the best gaming experience.',
    image: 'https://images.unsplash.com/photo-1542751371-adc38448a05e?w=400&h=300&fit=crop',
    date: 'Nov 22, 2024',
    readTime: '7 min read',
    category: 'Gaming',
    slug: 'latency-ping-gaming',
  },
  {
    title: 'Remote Work Essentials: Building the Perfect Home Office',
    excerpt: 'Create a productive workspace with reliable internet and the right equipment.',
    image: 'https://images.unsplash.com/photo-1593642632559-0c6d3fc62b89?w=400&h=300&fit=crop',
    date: 'Nov 18, 2024',
    readTime: '6 min read',
    category: 'Productivity',
    slug: 'remote-work-essentials',
  },
  {
    title: 'Fiber vs. Cable: A Comprehensive Comparison',
    excerpt: 'Breaking down the key differences between fiber optic and traditional cable internet.',
    image: 'https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=400&h=300&fit=crop',
    date: 'Nov 15, 2024',
    readTime: '9 min read',
    category: 'Education',
    slug: 'fiber-vs-cable',
  },
  {
    title: "How We're Expanding Fiber to 50 New Cities This Year",
    excerpt: 'An inside look at our infrastructure expansion and what it means for underserved areas.',
    image: 'https://images.unsplash.com/photo-1524661135-423995f22d0b?w=400&h=300&fit=crop',
    date: 'Nov 10, 2024',
    readTime: '4 min read',
    category: 'Company News',
    slug: 'fiber-expansion-2024',
  },
];

const categories = ['All', 'Technology', 'Tips & Tricks', 'Smart Home', 'Gaming', 'Company News'];

const trendingTopics = [
  { name: 'Wi-Fi 7', count: 12 },
  { name: '10 Gbps', count: 8 },
  { name: 'Smart Home', count: 15 },
  { name: 'Gaming', count: 10 },
  { name: 'Remote Work', count: 7 },
];

export default function Blog() {
  return (
    <div className="pt-24 pb-16">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <motion.span
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.1 }}
            className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4"
          >
            Our Blog
          </motion.span>
          <h1 className="font-display text-4xl lg:text-6xl font-bold mb-4">
            FiberFlow <span className="text-gradient">Insights</span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Stay up to date with the latest in fiber technology, tips for optimizing your connection, 
            and company news.
          </p>
        </motion.div>

        {/* Categories */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="flex flex-wrap gap-2 justify-center mb-12"
        >
          {categories.map((category, index) => (
            <motion.button
              key={category}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.1 + index * 0.05 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all ${
                index === 0 
                  ? 'bg-primary text-primary-foreground shadow-lg shadow-primary/25' 
                  : 'bg-secondary text-secondary-foreground hover:bg-secondary/80'
              }`}
            >
              {category}
            </motion.button>
          ))}
        </motion.div>

        {/* Featured Post */}
        <motion.article
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mb-16"
        >
          <Link to={`/blog/${featuredPost.slug}`} className="group block">
            <div className="grid lg:grid-cols-2 gap-8 items-center bg-card rounded-3xl overflow-hidden border border-border hover:border-primary/30 transition-all shadow-lg hover:shadow-xl">
              <div className="aspect-video lg:aspect-auto lg:h-full overflow-hidden">
                <img
                  src={featuredPost.image}
                  alt={featuredPost.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>
              <div className="p-8 lg:p-12">
                <motion.div 
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.3 }}
                  className="flex items-center gap-4 mb-4"
                >
                  <span className="px-4 py-1.5 rounded-full bg-primary/10 text-primary text-xs font-semibold uppercase tracking-wide">
                    Featured
                  </span>
                  <span className="px-3 py-1 rounded-full bg-secondary text-xs font-medium">
                    {featuredPost.category}
                  </span>
                </motion.div>
                <div className="flex items-center gap-4 mb-4 text-sm text-muted-foreground">
                  <span className="flex items-center gap-1">
                    <Calendar className="w-4 h-4" />
                    {featuredPost.date}
                  </span>
                  <span className="flex items-center gap-1">
                    <Clock className="w-4 h-4" />
                    {featuredPost.readTime}
                  </span>
                </div>
                <h2 className="font-display text-2xl lg:text-4xl font-bold mb-4 group-hover:text-primary transition-colors">
                  {featuredPost.title}
                </h2>
                <p className="text-muted-foreground mb-6 text-lg">{featuredPost.excerpt}</p>
                <span className="inline-flex items-center gap-2 text-primary font-semibold group-hover:gap-4 transition-all">
                  Read full article 
                  <ArrowRight className="w-5 h-5" />
                </span>
              </div>
            </div>
          </Link>
        </motion.article>

        <div className="grid lg:grid-cols-4 gap-8">
          {/* Posts Grid */}
          <div className="lg:col-span-3">
            <div className="grid md:grid-cols-2 gap-8">
              {posts.map((post, index) => (
                <motion.article
                  key={post.title}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 + index * 0.1 }}
                  whileHover={{ y: -5 }}
                >
                  <Link to={`/blog/${post.slug}`} className="group block h-full">
                    <div className="bg-card rounded-2xl overflow-hidden border border-border hover:border-primary/50 transition-all h-full flex flex-col shadow-sm hover:shadow-lg">
                      <div className="aspect-video overflow-hidden relative">
                        <img
                          src={post.image}
                          alt={post.title}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-background/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                        <motion.button
                          whileHover={{ scale: 1.1 }}
                          className="absolute top-4 right-4 w-10 h-10 rounded-full bg-background/80 backdrop-blur flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity"
                        >
                          <Bookmark className="w-4 h-4" />
                        </motion.button>
                      </div>
                      <div className="p-6 flex-1 flex flex-col">
                        <div className="flex items-center gap-3 mb-3">
                          <span className="px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-medium">
                            {post.category}
                          </span>
                          <span className="text-xs text-muted-foreground">{post.readTime}</span>
                        </div>
                        <h3 className="font-display text-lg font-semibold mb-2 group-hover:text-primary transition-colors line-clamp-2 flex-1">
                          {post.title}
                        </h3>
                        <p className="text-sm text-muted-foreground line-clamp-2 mb-4">{post.excerpt}</p>
                        <div className="flex items-center justify-between">
                          <span className="text-xs text-muted-foreground">{post.date}</span>
                          <ArrowRight className="w-4 h-4 text-primary opacity-0 group-hover:opacity-100 transition-opacity" />
                        </div>
                      </div>
                    </div>
                  </Link>
                </motion.article>
              ))}
            </div>

            {/* Load More */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
              className="text-center mt-12"
            >
              <Button variant="outline" size="lg" className="group">
                Load more articles
                <motion.span
                  animate={{ y: [0, 3, 0] }}
                  transition={{ repeat: Infinity, duration: 1.5 }}
                  className="ml-2"
                >
                  ↓
                </motion.span>
              </Button>
            </motion.div>
          </div>

          {/* Sidebar */}
          <motion.aside
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
            className="space-y-8"
          >
            {/* Trending Topics */}
            <div className="bg-card rounded-2xl p-6 border border-border">
              <div className="flex items-center gap-2 mb-6">
                <TrendingUp className="w-5 h-5 text-primary" />
                <h3 className="font-display text-lg font-semibold">Trending Topics</h3>
              </div>
              <div className="space-y-3">
                {trendingTopics.map((topic, i) => (
                  <motion.a
                    key={topic.name}
                    href="#"
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.5 + i * 0.1 }}
                    className="flex items-center justify-between p-3 rounded-xl hover:bg-secondary transition-colors group"
                  >
                    <div className="flex items-center gap-3">
                      <span className="text-lg font-bold text-muted-foreground/50">#{i + 1}</span>
                      <span className="font-medium group-hover:text-primary transition-colors">{topic.name}</span>
                    </div>
                    <span className="text-xs text-muted-foreground bg-secondary px-2 py-1 rounded-full">
                      {topic.count} posts
                    </span>
                  </motion.a>
                ))}
              </div>
            </div>

            {/* Newsletter */}
            <div className="bg-primary rounded-2xl p-6 text-primary-foreground">
              <h3 className="font-display text-lg font-semibold mb-3">Subscribe to Newsletter</h3>
              <p className="text-primary-foreground/80 text-sm mb-4">
                Get the latest articles and news delivered to your inbox.
              </p>
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full px-4 py-3 rounded-xl bg-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/50 border-0 focus:outline-none focus:ring-2 focus:ring-primary-foreground/30 mb-3"
              />
              <Button variant="secondary" className="w-full">
                Subscribe
              </Button>
            </div>

            {/* Tags Cloud */}
            <div className="bg-card rounded-2xl p-6 border border-border">
              <div className="flex items-center gap-2 mb-6">
                <Tag className="w-5 h-5 text-primary" />
                <h3 className="font-display text-lg font-semibold">Popular Tags</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {['Fiber', 'Wi-Fi', 'Gaming', 'Speed', '5G', 'Router', 'Smart Home', 'Security'].map((tag) => (
                  <motion.span
                    key={tag}
                    whileHover={{ scale: 1.05 }}
                    className="px-3 py-1.5 rounded-full bg-secondary text-sm font-medium hover:bg-primary hover:text-primary-foreground transition-colors cursor-pointer"
                  >
                    {tag}
                  </motion.span>
                ))}
              </div>
            </div>
          </motion.aside>
        </div>
      </div>
    </div>
  );
}