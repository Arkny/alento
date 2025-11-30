import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "@/contexts/AuthContext";
import circleShape from "@/assets/circle-shape.png";
import blobShape from "@/assets/blob-shape.png";
import { 
  Brain,
  Info,
  BookOpen,
  LogOut,
  User
} from "lucide-react";
import { Button } from "@/components/ui/button";

const navigationItems = [
  { id: 'grounding', label: 'Grounding', icon: Brain, path: '/grounding' },
  { id: 'informativo', label: 'Informativo', icon: Info, path: '/informativo' },
  { id: 'diario', label: 'Diário de Crise', icon: BookOpen, path: '/diario-ansiedade' },
  { id: 'minha-conta', label: 'Minha Conta', icon: User, path: '/minha-conta' },
  { id: 'placeholder3', label: 'Em breve', icon: null, path: '#' },
  { id: 'placeholder4', label: 'Em breve', icon: null, path: '#' },
  { id: 'placeholder5', label: 'Em breve', icon: null, path: '#' },
  { id: 'placeholder6', label: 'Em breve', icon: null, path: '#' },
];

const Home = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [isClosing, setIsClosing] = useState(false);
  const navigate = useNavigate();
  const { signOut } = useAuth();

  const handleCircleClick = () => {
    if (isExpanded) {
      // Se está expandido, inicia o processo de fechamento
      setIsClosing(true);
      // Aguarda a animação de fade-out completar antes de esconder
      setTimeout(() => {
        setIsExpanded(false);
        setIsClosing(false);
      }, 300); // Duração da animação fade-out
    } else {
      // Se não está expandido, apenas expande
      setIsExpanded(true);
    }
  };

  const handleNavigationClick = (path: string) => {
    navigate(path);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gradient-start via-gradient-middle to-gradient-end flex items-center justify-center relative overflow-hidden px-4">
      {/* Logout Button */}
      <div className="absolute top-4 right-4 z-20">
        <Button
          variant="outline"
          onClick={signOut}
          className="bg-white/10 border-white/20 text-white hover:bg-white/20 backdrop-blur-sm text-xs sm:text-sm px-3 py-2 sm:px-4"
        >
          <LogOut className="w-3 h-3 sm:w-4 sm:h-4 mr-1 sm:mr-2" />
          Sair
        </Button>
      </div>
      
      {/* Central Shape */}
      <div className="relative z-10">
        <button
          onClick={handleCircleClick}
          className="transition-all duration-700 ease-in-out transform hover:scale-105 focus:outline-none active:scale-95"
        >
          <img
            src={isExpanded ? blobShape : circleShape}
            alt="Central shape"
            className={`w-32 h-32 xs:w-48 xs:h-48 sm:w-64 sm:h-64 md:w-80 md:h-80 object-contain opacity-20 transition-all duration-700 ease-in-out ${
              isExpanded 
                ? 'rotate-12 scale-110 opacity-30' 
                : 'rotate-0 scale-100 opacity-20'
            }`}
          />
        </button>
      </div>

      {/* Navigation Carousel */}
      {(isExpanded || isClosing) && (
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="relative w-[280px] h-[280px] xs:w-[340px] xs:h-[340px] sm:w-[480px] sm:h-[480px] md:w-[600px] md:h-[600px]">
            {navigationItems.map((item, index) => {
              const angle = (index * 360) / navigationItems.length;
              // Responsive radius based on screen size
              const getRadius = () => {
                if (typeof window !== 'undefined') {
                  if (window.innerWidth < 400) return 120;
                  if (window.innerWidth < 640) return 150;
                  if (window.innerWidth < 768) return 200;
                  return 250;
                }
                return 200;
              };
              const radius = getRadius();
              const x = Math.cos((angle - 90) * (Math.PI / 180)) * radius;
              const y = Math.sin((angle - 90) * (Math.PI / 180)) * radius;

              return (
                <button
                  key={item.id}
                  onClick={() => handleNavigationClick(item.path)}
                  className={`absolute w-14 h-14 xs:w-16 xs:h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 bg-black/20 rounded-full flex items-center justify-center hover:bg-black/30 transition-all duration-300 opacity-0 backdrop-blur-sm group ${
                    isClosing ? 'animate-fade-out' : 'animate-fade-in'
                  }`}
                  style={{
                    left: `calc(50% + ${x}px - 1.75rem)`,
                    top: `calc(50% + ${y}px - 1.75rem)`,
                    animationDelay: isClosing ? '0ms' : `${index * 150}ms`,
                  }}
                  disabled={!item.icon}
                >
                  {item.icon && (
                    <item.icon className="w-6 h-6 xs:w-7 xs:h-7 sm:w-8 sm:h-8 md:w-10 md:h-10 text-white group-hover:scale-110 transition-transform duration-200" />
                  )}
                  
                  {/* Label - hidden on very small screens, visible on hover for larger */}
                  <div className="absolute top-full mt-1 sm:mt-2 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 sm:group-hover:opacity-100 transition-opacity duration-200 pointer-events-none">
                    <span className="text-white text-[10px] xs:text-xs sm:text-sm font-medium bg-black/50 px-1.5 py-0.5 sm:px-2 sm:py-1 rounded-lg backdrop-blur-sm whitespace-nowrap">
                      {item.label}
                    </span>
                  </div>
                </button>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
};

export default Home;