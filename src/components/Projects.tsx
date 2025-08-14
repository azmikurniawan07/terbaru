import { ExternalLink, Github, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const Projects = () => {
  const projects = [
    {
      title: 'E-Commerce Platform',
      description: 'Solusi e-commerce dengan integrasi React, Node.js, dan Stripe. Fitur-fiturnya meliputi inventaris real-time, autentikasi pengguna, dan dasbor admin.',
      image: '/placeholder.svg',
      technologies: ['React', 'Node.js', 'PostgreSQL', 'Stripe', 'Tailwind CSS'],
      github: 'https://github.com',
      live: 'https://example.com',
      featured: true
    },
    {
      title: 'Task Management App',
      description: 'Alat manajemen proyek kolaboratif dengan pembaruan waktu nyata, fungsionalitas seret dan lepas, dan fitur kolaborasi tim.',
      image: '/placeholder.svg',
      technologies: ['Next.js', 'TypeScript', 'Prisma', 'Socket.io'],
      github: 'https://github.com',
      live: 'https://example.com',
      featured: true
    },
    {
      title: 'Social Media Dashboard',
      description: 'Dasbor analitik untuk manajemen media sosial dengan visualisasi data, penjadwalan, dan pelacakan kinerja.',
      image: '/placeholder.svg',
      technologies: ['Vue.js', 'Express', 'MongoDB', 'Chart.js'],
      github: 'https://github.com',
      live: 'https://example.com',
      featured: false
    },
    {
      title: 'Weather Forecast App',
      description: 'Aplikasi cuaca yang indah dengan layanan lokasi, peta interaktif, dan prakiraan cuaca terperinci menggunakan prinsip desain modern.',
      image: '/placeholder.svg',
      technologies: ['React Native', 'Redux', 'Weather API', 'Maps'],
      github: 'https://github.com',
      live: 'https://example.com',
      featured: false
    }
  ];

  return (
    <section id="projects" className="py-20 bg-muted/30">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-4">
            Proyek Unggulan
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Karya Terbaru dan Proyek Sampingan
          </p>
        </div>
{}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Card 
              key={project.title} 
              className={`group hover-lift overflow-hidden ${
                project.featured ? 'lg:col-span-2' : ''
              }`}
            >
              <div className={`${project.featured ? 'md:flex' : ''}`}>
                {/* Project Image */}
                <div className={`relative overflow-hidden ${
                  project.featured ? 'md:w-1/2' : ''
                }`}>
                  <div className="aspect-video bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center">
                    <div className="text-4xl font-bold text-muted-foreground/30">
                      {project.title.charAt(0)}
                    </div>
                  </div>
                  <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/10 transition-all duration-300"></div>
                </div>

                {/* Project Content */}
                <CardContent className={`p-6 ${project.featured ? 'md:w-1/2' : ''}`}>
                  <div className="flex items-start justify-between mb-3">
                    <h3 className="text-xl font-semibold group-hover:text-primary transition-colors duration-300">
                      {project.title}
                    </h3>
                    {project.featured && (
                      <Badge variant="secondary" className="gradient-bg text-primary-foreground">
                        Featured
                      </Badge>
                    )}
                  </div>

                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.map((tech) => (
                      <Badge key={tech} variant="outline" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>

                  <div className="flex space-x-4">
                    <Button variant="outline" size="sm" className="hover-scale">
                      <Github className="h-4 w-4 mr-2" />
                      Code
                    </Button>
                    <Button size="sm" className="gradient-bg hover:shadow-glow transition-all duration-300">
                      <ExternalLink className="h-4 w-4 mr-2" />
                      Live Demo
                    </Button>
                  </div>
                </CardContent>
              </div>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button variant="outline" size="lg" className="hover-lift">
            View All Projects
            <ArrowRight className="h-4 w-4 ml-2" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Projects;