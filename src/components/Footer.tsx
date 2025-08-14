import { Heart, ArrowUp } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-card border-t">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <div className="text-2xl font-bold gradient-text mb-2">Azmi Kurniawan</div>
            <p className="text-muted-foreground">
              Web Development
            </p>
          </div>

          <div className="flex items-center space-x-4">
            <p className="text-muted-foreground flex items-center">
              Made with <Heart className="h-4 w-4 mx-1 text-red-500" /> using React & Tailwind CSS
            </p>
            <Button
              variant="ghost"
              size="sm"
              onClick={scrollToTop}
              className="hover-scale"
            >
              <ArrowUp className="h-4 w-4" />
            </Button>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t text-center text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} AK.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;