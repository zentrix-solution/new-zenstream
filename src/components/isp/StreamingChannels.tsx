import { motion } from 'framer-motion';
import { Tv, Film, Trophy, Music, Globe, Baby, Newspaper, GraduationCap } from 'lucide-react';

const channelCategories = [
  {
    icon: Tv,
    title: 'Entertainment',
    channels: 'HBO, Netflix, Disney+, Hulu',
    count: '150+',
    color: 'from-purple-500 to-pink-500',
  },
  {
    icon: Trophy,
    title: 'Sports',
    channels: 'ESPN, Fox Sports, NBA TV, NFL Network',
    count: '80+',
    color: 'from-green-500 to-emerald-500',
  },
  {
    icon: Film,
    title: 'Movies',
    channels: 'Showtime, Starz, AMC, TCM',
    count: '60+',
    color: 'from-red-500 to-rose-500',
  },
  {
    icon: Newspaper,
    title: 'News',
    channels: 'CNN, Fox News, MSNBC, BBC',
    count: '40+',
    color: 'from-blue-500 to-cyan-500',
  },
  {
    icon: Baby,
    title: 'Kids & Family',
    channels: 'Nickelodeon, Cartoon Network, Disney',
    count: '50+',
    color: 'from-yellow-500 to-orange-500',
  },
  {
    icon: Music,
    title: 'Music',
    channels: 'MTV, VH1, BET, CMT',
    count: '30+',
    color: 'from-pink-500 to-red-500',
  },
  {
    icon: GraduationCap,
    title: 'Educational',
    channels: 'Discovery, History, Nat Geo, PBS',
    count: '45+',
    color: 'from-indigo-500 to-purple-500',
  },
  {
    icon: Globe,
    title: 'International',
    channels: 'Telemundo, TV5, RAI, Al Jazeera',
    count: '55+',
    color: 'from-teal-500 to-cyan-500',
  },
];

export function StreamingChannels() {
  return (
    <section className="py-24 bg-gradient-to-b from-secondary/30 to-background">
      <div className="container mx-auto px-4 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            500+ Premium Channels
          </span>
          <h2 className="font-display text-3xl lg:text-5xl font-bold mb-4">
            Watch everything you love,{' '}
            <span className="text-gradient">all in one place</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-6">
            From blockbuster movies to live sports, news to kids shows - ZENSTREAM has it all
          </p>
          <a 
            href="tel:8556837815" 
            className="inline-flex items-center gap-2 text-xl font-semibold text-primary hover:underline"
          >
            <Tv className="w-5 h-5" />
            Call (855) 683-7815 to get started
          </a>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {channelCategories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              whileHover={{ y: -5, scale: 1.02 }}
              className="relative group"
            >
              <div className="bg-card rounded-3xl p-6 border border-border hover:border-primary/30 hover:shadow-xl transition-all h-full">
                <motion.div
                  whileHover={{ rotate: 5, scale: 1.1 }}
                  className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${category.color} flex items-center justify-center mb-4 shadow-lg`}
                >
                  <category.icon className="w-7 h-7 text-white" />
                </motion.div>
                
                <div className="absolute top-6 right-6 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-bold">
                  {category.count}
                </div>

                <h3 className="font-display text-xl font-bold mb-2 group-hover:text-primary transition-colors">
                  {category.title}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {category.channels}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional Features */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid md:grid-cols-3 gap-6"
        >
          <div className="bg-gradient-to-br from-primary/10 to-primary/5 rounded-2xl p-8 text-center border border-primary/20">
            <div className="text-4xl font-bold text-primary mb-2">4K HDR</div>
            <p className="text-muted-foreground">Ultra HD quality on select channels</p>
          </div>
          <div className="bg-gradient-to-br from-primary/10 to-primary/5 rounded-2xl p-8 text-center border border-primary/20">
            <div className="text-4xl font-bold text-primary mb-2">Cloud DVR</div>
            <p className="text-muted-foreground">Record & watch anywhere</p>
          </div>
          <div className="bg-gradient-to-br from-primary/10 to-primary/5 rounded-2xl p-8 text-center border border-primary/20">
            <div className="text-4xl font-bold text-primary mb-2">5 Devices</div>
            <p className="text-muted-foreground">Stream on multiple screens</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
