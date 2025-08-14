import { ArrowDown, Github, Linkedin, Mail, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';
import heroImage from '@/assets/hero-bg.jpg';
import { motion } from 'framer-motion';

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.querySelector(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Enhanced Background with Parallax Effect */}
      <motion.div 
        className="absolute inset-0 z-0"
        initial={{ scale: 1.1 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
      >
        <img 
          src={heroImage} 
          alt="Developer workspace showcasing modern development environment" 
          className="w-full h-full object-cover"
        />
        <motion.div 
          className="absolute inset-0 bg-gradient-to-br from-background/60 via-background/40 to-background/60 backdrop-blur-sm"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        />
        <motion.div 
          className="absolute inset-0 gradient-hero opacity-30"
          animate={{ 
            background: [
              "linear-gradient(135deg, hsl(var(--primary)/0.9) 0%, hsl(var(--secondary)/0.8) 50%, hsl(var(--accent)/0.7) 100%)",
              "linear-gradient(135deg, hsl(var(--accent)/0.9) 0%, hsl(var(--primary)/0.8) 50%, hsl(var(--secondary)/0.7) 100%)",
              "linear-gradient(135deg, hsl(var(--primary)/0.9) 0%, hsl(var(--secondary)/0.8) 50%, hsl(var(--accent)/0.7) 100%)"
            ]
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
      </motion.div>

      {/* Content */}
      <motion.div 
        className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.3 }}
      >
        <motion.div 
          className="relative"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          <motion.h1 
            className="text-5xl md:text-7xl font-bold mb-6 leading-tight"
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <motion.span 
              className="block"
              initial={{ x: -50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.6 }}
            >
              Hi, I'm
            </motion.span>
            <motion.span 
              className="gradient-text relative inline-block"
              initial={{ x: 50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.7, duration: 0.6 }}
            >
              Azmi Kurniawan
              <motion.div
                className="absolute -top-4 -right-4"
                animate={{ rotate: [0, 10, -10, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <Sparkles className="h-8 w-8 text-accent" />
              </motion.div>
            </motion.span>
          </motion.h1>
          
          <motion.p 
            className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto"
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.9, duration: 0.6 }}
          >
            Lulusan Sistem Informasi dengan minat dan keahlian pengelolaan data, pengembangan sistem berbasis web, dan jaringan komputer.
          </motion.p>
        </motion.div>

        <motion.div 
          className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12"
          initial={{ y: 40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 1.1, duration: 0.6 }}
        >
          <motion.div
            whileHover={{ scale: 1.05, boxShadow: "var(--shadow-neon)" }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 400, damping: 17 }}
          >
            <Button 
              size="lg" 
              className="gradient-bg hover:shadow-glow transition-all duration-300 px-8 py-6 text-lg font-semibold relative overflow-hidden"
              onClick={() => scrollToSection('#contact')}
            >
              <motion.span
                className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent"
                initial={{ x: "-100%" }}
                whileHover={{ x: "100%" }}
                transition={{ duration: 0.6 }}
              />
              Get In Touch
            </Button>
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 400, damping: 17 }}
          >
            <Button 
              variant="outline" 
              size="lg" 
              className="px-8 py-6 text-lg font-semibold hover-lift border-2 border-primary/20 hover:border-primary/50 hover:bg-primary/5"
              onClick={() => scrollToSection('#projects')}
            >
              View My Work
            </Button>
          </motion.div>
        </motion.div>

        {/* Enhanced Social Links */}
        <motion.div 
          className="flex justify-center space-x-6 mb-12"
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 1.3, duration: 0.6 }}
        >
          {[
            { href: "https://github.com/azmikurniawan07", icon: Github, label: "GitHub", delay: 0 },
            { href: "https://www.linkedin.com/in/azmi-kurniawan-568134288/", icon: Linkedin, label: "LinkedIn", delay: 0.1 },
            { href: "https://mail.google.com/mail/u/0/#inbox", icon: Mail, label: "Email", delay: 0.2 }
          ].map(({ href, icon: Icon, label, delay }) => (
            <motion.a
              key={label}
              href={href}
              target={href.startsWith('mailto') ? undefined : "_blank"}
              rel={href.startsWith('mailto') ? undefined : "noopener noreferrer"}
              className="p-4 rounded-full bg-card/80 backdrop-blur-sm hover:bg-primary hover:text-primary-foreground transition-all duration-300 shadow-soft group"
              whileHover={{ 
                scale: 1.1, 
                rotate: [0, -10, 10, 0],
                boxShadow: "var(--shadow-neon)"
              }}
              whileTap={{ scale: 0.9 }}
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 1.5 + delay, duration: 0.5 }}
            >
              <Icon className="h-6 w-6 group-hover:scale-110 transition-transform duration-300" />
              <span className="sr-only">{label}</span>
            </motion.a>
          ))}
        </motion.div>

        {/* Enhanced Scroll Indicator */}
        <motion.button 
          onClick={() => scrollToSection('#about')}
          className="mx-auto block"
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 1.7, duration: 0.6 }}
          whileHover={{ scale: 1.2 }}
          whileTap={{ scale: 0.8 }}
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="p-2 rounded-full bg-card/50 backdrop-blur-sm shadow-soft"
          >
            <ArrowDown className="h-8 w-8 text-muted-foreground hover:text-primary transition-colors duration-300" />
          </motion.div>
        </motion.button>
      </motion.div>

      {/* Enhanced Decorative Elements */}
      <motion.div 
        className="absolute top-1/4 left-10 w-20 h-20 rounded-full gradient-accent-bg opacity-20"
        animate={{
          y: [-10, 10, -10],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        style={{ filter: "blur(1px)" }}
      />
      <motion.div 
        className="absolute bottom-1/4 right-10 w-16 h-16 rounded-full gradient-bg opacity-30"
        animate={{
          y: [-10, 10, -10],
        }}
        transition={{ 
          delay: 1, 
          duration: 4, 
          repeat: Infinity,
          ease: "easeInOut"
        }}
        style={{ filter: "blur(1px)" }}
      />
      <motion.div 
        className="absolute top-1/2 right-1/4 w-12 h-12 rounded-full bg-accent/20 opacity-40"
        animate={{
          y: [-10, 10, -10],
        }}
        transition={{ 
          delay: 2, 
          duration: 5, 
          repeat: Infinity,
          ease: "easeInOut"
        }}
        style={{ filter: "blur(2px)" }}
      />
      
      {/* Particle-like elements */}
      {[...Array(6)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-2 h-2 rounded-full bg-primary/30"
          style={{
            left: `${20 + i * 15}%`,
            top: `${30 + (i % 2) * 40}%`,
          }}
          animate={{
            y: [-20, 20, -20],
            opacity: [0.3, 0.8, 0.3],
          }}
          transition={{
            duration: 3 + i * 0.5,
            repeat: Infinity,
            delay: i * 0.5,
            ease: "easeInOut"
          }}
        />
      ))}
    </section>
  );
};

export default Hero;