import { motion } from 'framer-motion';
import { Link, useParams } from 'react-router-dom';
import { Calendar, Clock, ArrowLeft, Share2, Facebook, Twitter, Linkedin, Tag } from 'lucide-react';
import { Button } from '@/components/ui/button';

const blogPosts: Record<string, {
  title: string;
  excerpt: string;
  image: string;
  date: string;
  readTime: string;
  category: string;
  author: { name: string; avatar: string; role: string };
  content: string;
}> = {
  'future-of-fiber': {
    title: 'The Future of Fiber: How 10 Gbps is Changing Home Connectivity',
    excerpt: 'Discover how next-generation fiber optic technology is revolutionizing the way we connect, work, and play at home.',
    image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1200&h=600&fit=crop',
    date: 'Dec 1, 2024',
    readTime: '8 min read',
    category: 'Technology',
    author: {
      name: 'Sarah Mitchell',
      avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop',
      role: 'Technology Editor'
    },
    content: `
The internet has become an integral part of our daily lives, transforming how we work, learn, and entertain ourselves. As our digital demands continue to grow exponentially, the need for faster, more reliable internet connections has never been greater. Enter 10 Gbps fiber optic technology – the next frontier in home connectivity that promises to revolutionize our online experience.

## Understanding Fiber Optic Technology

Fiber optic cables use light pulses to transmit data through thin glass or plastic fibers. Unlike traditional copper cables that carry electrical signals, fiber optics can transmit information over longer distances with minimal signal loss. This fundamental difference makes fiber inherently faster and more reliable than its predecessors.

The journey from dial-up connections at 56 Kbps to today's gigabit speeds represents one of the most remarkable technological evolutions of our time. But even as many households are just beginning to experience gigabit speeds, forward-thinking providers are already deploying 10 Gbps networks.

## The Real-World Impact of 10 Gbps

What does 10 Gbps actually mean for everyday users? Let's put it in perspective. At 10 Gbps, you could download a full HD movie in less than a second. An entire video game library that might take hours on a standard connection could be downloaded in minutes. But raw speed is just the beginning.

### Enabling the Smart Home Revolution

The average smart home today has dozens of connected devices – from thermostats and security cameras to refrigerators and light bulbs. Each device needs bandwidth to communicate effectively. With 10 Gbps connectivity, homes can support hundreds of smart devices simultaneously without any degradation in performance.

This bandwidth headroom enables truly seamless smart home experiences. Imagine your 8K security cameras streaming crystal-clear footage while your kids are gaming online, you're in a video conference, and your smart home is running its automated routines – all without a single hiccup.

### Transforming Remote Work

The COVID-19 pandemic accelerated the remote work revolution, and it's clear that hybrid and remote work arrangements are here to stay. With 10 Gbps fiber, the concept of "working from home" takes on new meaning. Video calls become indistinguishable from in-person meetings with perfect 4K quality. Large file transfers happen instantaneously. Cloud applications respond as quickly as locally installed software.

For creative professionals, this is particularly transformative. Video editors can work with raw 8K footage stored in the cloud. 3D artists can render complex scenes on remote servers. Musicians can collaborate in real-time with zero latency.

## The Technology Behind the Speed

Achieving 10 Gbps speeds requires advancements across the entire network infrastructure. XGS-PON (10-Gigabit Symmetric Passive Optical Network) technology is at the heart of these next-generation networks. This technology allows service providers to deliver symmetrical 10 Gbps speeds over existing fiber infrastructure in many cases.

At the home level, new optical network terminals (ONTs) and Wi-Fi 6E or Wi-Fi 7 routers are needed to fully utilize these speeds. The latest mesh networking systems can distribute 10 Gbps throughout a home, ensuring every corner benefits from ultra-fast connectivity.

## Looking Ahead

As we look to the future, 10 Gbps is just the beginning. Researchers are already working on 100 Gbps residential technologies and beyond. The infrastructure being deployed today is designed to scale, ensuring that the fiber optic cables in the ground can support even faster speeds as technology evolves.

The implications extend beyond pure speed. Lower latency opens doors for real-time applications that were previously impossible. Augmented and virtual reality experiences become truly immersive. Telemedicine can provide care quality approaching in-person visits. Education can leverage interactive, immersive content that makes learning more engaging than ever.

## Conclusion

The transition to 10 Gbps fiber represents more than just an incremental improvement in internet speeds. It's a fundamental shift that will enable new applications, transform existing services, and redefine what's possible from the comfort of our homes.

As FiberFlow continues to expand our 10 Gbps network, we're not just delivering faster internet – we're laying the foundation for the connected future. Whether you're a remote worker, a gaming enthusiast, a smart home pioneer, or simply someone who values reliable connectivity, 10 Gbps fiber is designed with your future needs in mind.

The fiber revolution is here, and it's faster than ever.
    `
  }
};

const relatedPosts = [
  {
    title: '5 Tips to Maximize Your Wi-Fi Coverage',
    slug: 'wifi-coverage-tips',
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=300&fit=crop',
    category: 'Tips & Tricks'
  },
  {
    title: 'Smart Home Devices That Need Gigabit Internet',
    slug: 'smart-home-gigabit',
    image: 'https://images.unsplash.com/photo-1558002038-1055907df827?w=400&h=300&fit=crop',
    category: 'Smart Home'
  },
  {
    title: 'Understanding Latency: Why Ping Matters',
    slug: 'latency-ping-gaming',
    image: 'https://images.unsplash.com/photo-1542751371-adc38448a05e?w=400&h=300&fit=crop',
    category: 'Gaming'
  }
];

export default function BlogPost() {
  const { slug } = useParams();
  const post = blogPosts[slug || 'future-of-fiber'] || blogPosts['future-of-fiber'];

  return (
    <div className="pt-24 pb-16">
      {/* Hero */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="relative h-[50vh] min-h-[400px] overflow-hidden"
      >
        <img
          src={post.image}
          alt={post.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent" />
      </motion.div>

      <div className="container mx-auto px-4 lg:px-8 -mt-32 relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="bg-card rounded-3xl p-8 lg:p-12 border border-border shadow-xl mb-12"
          >
            <Link to="/blog" className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors mb-6">
              <ArrowLeft className="w-4 h-4" />
              Back to Blog
            </Link>
            
            <div className="flex flex-wrap items-center gap-4 mb-6">
              <span className="px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium">
                {post.category}
              </span>
              <span className="text-sm text-muted-foreground flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                {post.date}
              </span>
              <span className="text-sm text-muted-foreground flex items-center gap-2">
                <Clock className="w-4 h-4" />
                {post.readTime}
              </span>
            </div>

            <h1 className="font-display text-3xl lg:text-5xl font-bold mb-8 leading-tight">
              {post.title}
            </h1>

            {/* Author */}
            <div className="flex items-center justify-between flex-wrap gap-4">
              <div className="flex items-center gap-4">
                <img
                  src={post.author.avatar}
                  alt={post.author.name}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <p className="font-semibold">{post.author.name}</p>
                  <p className="text-sm text-muted-foreground">{post.author.role}</p>
                </div>
              </div>

              {/* Share */}
              <div className="flex items-center gap-2">
                <span className="text-sm text-muted-foreground mr-2">Share:</span>
                {[Facebook, Twitter, Linkedin].map((Icon, i) => (
                  <motion.button
                    key={i}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors"
                  >
                    <Icon className="w-4 h-4" />
                  </motion.button>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Content */}
          <motion.article
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="prose prose-lg max-w-none mb-16"
          >
            <div className="bg-card rounded-2xl p-8 lg:p-12 border border-border">
              <div className="space-y-6 text-foreground">
                {post.content.split('\n\n').map((paragraph, i) => {
                  if (paragraph.startsWith('## ')) {
                    return (
                      <h2 key={i} className="font-display text-2xl lg:text-3xl font-bold mt-12 mb-6 text-foreground">
                        {paragraph.replace('## ', '')}
                      </h2>
                    );
                  }
                  if (paragraph.startsWith('### ')) {
                    return (
                      <h3 key={i} className="font-display text-xl lg:text-2xl font-semibold mt-8 mb-4 text-foreground">
                        {paragraph.replace('### ', '')}
                      </h3>
                    );
                  }
                  if (paragraph.trim()) {
                    return (
                      <p key={i} className="text-muted-foreground leading-relaxed text-base lg:text-lg">
                        {paragraph.trim()}
                      </p>
                    );
                  }
                  return null;
                })}
              </div>
            </div>
          </motion.article>

          {/* Tags */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="flex flex-wrap items-center gap-3 mb-16"
          >
            <Tag className="w-4 h-4 text-muted-foreground" />
            {['Fiber Optic', 'Technology', '10 Gbps', 'Smart Home', 'Future'].map((tag) => (
              <span key={tag} className="px-4 py-2 rounded-full bg-secondary text-sm font-medium hover:bg-primary hover:text-primary-foreground transition-colors cursor-pointer">
                {tag}
              </span>
            ))}
          </motion.div>

          {/* Related Posts */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
          >
            <h2 className="font-display text-2xl lg:text-3xl font-bold mb-8">Related Articles</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {relatedPosts.map((relatedPost, i) => (
                <motion.article
                  key={relatedPost.slug}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 + i * 0.1 }}
                  whileHover={{ y: -5 }}
                >
                  <Link to={`/blog/${relatedPost.slug}`} className="group block">
                    <div className="bg-card rounded-2xl overflow-hidden border border-border hover:border-primary/50 transition-all">
                      <div className="aspect-video overflow-hidden">
                        <img
                          src={relatedPost.image}
                          alt={relatedPost.title}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                      </div>
                      <div className="p-5">
                        <span className="text-xs text-primary font-medium">{relatedPost.category}</span>
                        <h3 className="font-display text-lg font-semibold mt-2 group-hover:text-primary transition-colors line-clamp-2">
                          {relatedPost.title}
                        </h3>
                      </div>
                    </div>
                  </Link>
                </motion.article>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}