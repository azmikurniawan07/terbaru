import { useState } from 'react';
import { Mail, Phone, MapPin, Send, Github, Linkedin, Twitter, Instagram, Facebook } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    toast({
      title: "Message sent!",
      description: "Thank you for your message. I'll get back to you soon.",
    });
    
    setFormData({ name: '', email: '', subject: '', message: '' });
    setIsSubmitting(false);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const contactInfo = [
    {
      icon: Mail,
      title: 'Email',
      value: 'azmikurniawan350@gmail.com',
      href: 'azmikurniawan350@gmail.com'
    },
    {
      icon: Phone,
      title: 'Phone',
      value: '+62 821-7068-7314',
      href: 'tel:+62 821-7068-7314'
    },
    {
      icon: MapPin,
      title: 'Lokasi',
      value: 'Pasaman Barat, Sumatera Barat',
      href: '#'
    }
  ];

  const socialLinks = [
    { icon: Github, href: 'https://github.com/azmikurniawan07', label: 'GitHub' },
    { icon: Linkedin, href: 'https://www.linkedin.com/in/azmi-kurniawan-568134288/', label: 'LinkedIn' },
    { icon: Twitter, href: 'https://x.com/azmikurnia0797', label: 'Twitter' },
    { icon: Instagram, href: 'https://www.instagram.com/_manungkuik/?next=%2F', label: 'Instagram' },
    { icon: Facebook, href: 'https://www.facebook.com/azmi.gonzalo', label: 'Facebook' },
  ];

  return (
    <section id="contact" className="py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-4">
            Kontak Saya
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Siap memulai proyek Anda berikutnya? Mari kita ciptakan sesuatu yang luar biasa bersama.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-semibold mb-6">Mari Terhubung</h3>
              <p className="text-muted-foreground mb-8 leading-relaxed">
                Saya selalu tertarik dengan peluang baru dan proyek-proyek menarik.
                Jika Anda memiliki pertanyaan, ingin mendiskusikan proyek, atau sekadar ingin
                bertemu, saya ingin sekali mendengar dari Anda.
              </p>
            </div>

            <div className="space-y-4">
              {contactInfo.map((info) => (
                <a
                  key={info.title}
                  href={info.href}
                  className="flex items-center space-x-4 p-4 rounded-lg hover:bg-muted/50 transition-colors duration-300 group"
                >
                  <div className="p-3 rounded-lg bg-primary/10 group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
                    <info.icon className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="font-medium">{info.title}</p>
                    <p className="text-muted-foreground">{info.value}</p>
                  </div>
                </a>
              ))}
            </div>

            <div className="pt-8">
              <h4 className="text-lg font-semibold mb-4">Ikuti Saya</h4>
              <div className="flex space-x-4">
                {socialLinks.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-full bg-card hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover-scale shadow-soft"
                    aria-label={social.label}
                  >
                    <social.icon className="h-5 w-5" />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <Card className="hover-lift">
            <CardContent className="p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-medium">
                      Nama Lengkap
                    </label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Nama Anda"
                      required
                      className="transition-all duration-300 focus:shadow-soft"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium">
                      Email
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="Kamu@email.com"
                      required
                      className="transition-all duration-300 focus:shadow-soft"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label htmlFor="subject" className="text-sm font-medium">
                    Subjek
                  </label>
                  <Input
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="Diskusi proyek"
                    required
                    className="transition-all duration-300 focus:shadow-soft"
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium">
                    Pesan
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Ceritakan tentang proyek Anda..."
                    rows={5}
                    required
                    className="transition-all duration-300 focus:shadow-soft resize-none"
                  />
                </div>

                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full gradient-bg hover:shadow-glow transition-all duration-300"
                  size="lg"
                >
                  {isSubmitting ? (
                    'Sending...'
                  ) : (
                    <>
                      <Send className="h-4 w-4 mr-2" />
                     Kirim Pesan
                    </>
                  )}
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;