import { Code, Database, Globe, Palette, Server, Smartphone } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { motion } from 'framer-motion';

const Skills = () => {
  const skillCategories = [
    {
      icon: Code,
      title: 'Frontend Development',
      skills: ['React', 'TypeScript', 'Next.js', 'Tailwind CSS', 'Vue.js'],
      color: 'text-primary'
    },
    {
      icon: Server,
      title: 'Backend Development',
      skills: ['Node.js', 'Express', 'Python', 'PostgreSQL', 'MongoDB'],
      color: 'text-secondary'
    },
    {
      icon: Database,
      title: 'Database & Cloud',
      skills: ['AWS', 'Firebase', 'Docker', 'GraphQL', 'Redis'],
      color: 'text-accent'
    },
    {
      icon: Palette,
      title: 'Design & UX',
      skills: ['Figma', 'Adobe XD', 'Prototyping', 'UI Design', 'User Research'],
      color: 'text-primary'
    },
    {
      icon: Smartphone,
      title: 'Mobile Development',
      skills: ['React Native', 'Flutter', 'iOS', 'Android', 'PWA'],
      color: 'text-secondary'
    },
    {
      icon: Globe,
      title: 'Tools & Others',
      skills: ['Git', 'Webpack', 'Jest', 'CI/CD', 'Agile'],
      color: 'text-accent'
    }
  ];

  const technologies = [
    'JavaScript', 'TypeScript', 'React', 'Node.js', 'Python', 'PostgreSQL',
    'MongoDB', 'AWS', 'Docker', 'Git', 'Figma', 'Next.js', 'Tailwind CSS',
    'GraphQL', 'Redux', 'Express', 'Firebase', 'Jest', 'Webpack', 'Vue.js'
  ];

  return (
    <section id="skills" className="py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
        >
          <motion.h2 
            className="text-4xl md:text-5xl font-bold gradient-text mb-4"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Keterampilan & Keahlian
          </motion.h2>
          <motion.p 
            className="text-xl text-muted-foreground max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            Perangkat untuk membangun website
          </motion.p>
        </motion.div>

        {/* Enhanced Skill Categories */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 50, scale: 0.8 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ 
                duration: 0.6, 
                delay: 0.4 + index * 0.1,
                type: "spring",
                stiffness: 100
              }}
              whileHover={{ 
                scale: 1.05, 
                boxShadow: "var(--shadow-colored)",
                borderColor: category.color.includes('primary') ? "hsl(var(--primary))" : 
                            category.color.includes('secondary') ? "hsl(var(--secondary))" : "hsl(var(--accent))"
              }}
              className="group"
            >
              <Card className="p-6 hover-lift border-2 border-transparent transition-all duration-300 bg-card/80 backdrop-blur-sm">
                <motion.div 
                  className="flex items-center mb-4"
                  whileHover={{ x: 5 }}
                  transition={{ duration: 0.2 }}
                >
                  <motion.div 
                    className={`p-3 rounded-lg bg-muted group-hover:bg-primary/10 transition-colors duration-300`}
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.5 }}
                  >
                    <category.icon className={`h-6 w-6 ${category.color} group-hover:scale-110 transition-transform duration-300`} />
                  </motion.div>
                  <h3 className="text-lg font-semibold ml-3 group-hover:text-primary transition-colors duration-300">{category.title}</h3>
                </motion.div>
                <div className="space-y-2">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.div 
                      key={skill} 
                      className="flex items-center space-x-2"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.3, delay: 0.6 + index * 0.1 + skillIndex * 0.05 }}
                      whileHover={{ x: 5 }}
                    >
                      <motion.div 
                        className="w-2 h-2 rounded-full bg-primary"
                        whileHover={{ scale: 1.5 }}
                        transition={{ duration: 0.2 }}
                      />
                      <span className="text-muted-foreground group-hover:text-foreground transition-colors duration-300">{skill}</span>
                    </motion.div>
                  ))}
                </div>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* Enhanced Technology Tags */}
        <motion.div 
          className="text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <motion.h3 
            className="text-2xl font-semibold mb-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            Teknologi yang Saya Kerjakan
          </motion.h3>
          <motion.div 
            className="flex flex-wrap justify-center gap-3"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            {technologies.map((tech, index) => (
              <motion.span
                key={tech}
                className="px-4 py-2 bg-card/80 backdrop-blur-sm rounded-full text-sm font-medium hover:bg-primary hover:text-primary-foreground transition-all duration-300 shadow-soft border border-border/50 cursor-pointer"
                initial={{ opacity: 0, scale: 0.8, y: 20 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ 
                  duration: 0.4, 
                  delay: 1 + index * 0.05,
                  type: "spring",
                  stiffness: 100
                }}
                whileHover={{ 
                  scale: 1.1, 
                  boxShadow: "var(--shadow-glow)",
                  borderColor: "hsl(var(--primary))"
                }}
                whileTap={{ scale: 0.95 }}
              >
                {tech}
              </motion.span>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;