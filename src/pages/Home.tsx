import { useState } from "react";
import { useNavigate } from "react-router-dom";
import circleShape from "@/assets/circle-shape.png";
import blobShape from "@/assets/blob-shape.png";
import { 
  Brain,
  Info,
  BookOpen
} from "lucide-react";

const navigationItems = [
  { id: 'grounding', label: 'Grounding', icon: Brain, path: '/grounding' },
  { id: 'informativo', label: 'Informativo', icon: Info, path: '/informativo' },
  { id: 'diario', label: 'Diário de Crise', icon: BookOpen, path: '/diario-ansiedade' },
  { id: 'placeholder2', label: 'Em breve', icon: null, path: '#' },
  { id: 'placeholder3', label: 'Em breve', icon: null, path: '#' },
  { id: 'placeholder4', label: 'Em breve', icon: null, path: '#' },
  { id: 'placeholder5', label: 'Em breve', icon: null, path: '#' },
  { id: 'placeholder6', label: 'Em breve', icon: null, path: '#' },
];

const Home = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [isClosing, setIsClosing] = useState(false);
  const navigate = useNavigate();

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
    <div className="min-h-screen bg-gradient-to-b from-gradient-start via-gradient-middle to-gradient-end flex items-center justify-center relative overflow-hidden">
      {/* Central Shape */}
      <div className="relative z-10">
        <button
          onClick={handleCircleClick}
          className="transition-all duration-700 ease-in-out transform hover:scale-105 focus:outline-none active:scale-95"
        >
          <img
            src={isExpanded ? blobShape : circleShape}
            alt="Central shape"
            className={`w-64 h-64 sm:w-80 sm:h-80 object-contain opacity-20 transition-all duration-700 ease-in-out ${
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
          <div className="relative w-[500px] h-[500px] sm:w-[600px] sm:h-[600px]">
            {navigationItems.map((item, index) => {
              const angle = (index * 360) / navigationItems.length;
              const radius = 280;
              const x = Math.cos((angle - 90) * (Math.PI / 180)) * radius;
              const y = Math.sin((angle - 90) * (Math.PI / 180)) * radius;

              return (
                <button
                  key={item.id}
                  onClick={() => handleNavigationClick(item.path)}
                  className={`absolute w-24 h-24 sm:w-[120px] sm:h-[120px] bg-black/20 rounded-full flex items-center justify-center hover:bg-black/30 transition-all duration-300 opacity-0 backdrop-blur-sm group ${
                    isClosing ? 'animate-fade-out' : 'animate-fade-in'
                  }`}
                  style={{
                    left: `calc(50% + ${x}px - 3rem)`,
                    top: `calc(50% + ${y}px - 3rem)`,
                    animationDelay: isClosing ? '0ms' : `${index * 150}ms`,
                  }}
                  disabled={!item.icon}
                >
                  {item.icon && (
                    <item.icon className="w-10 h-10 sm:w-12 sm:h-12 text-white group-hover:scale-110 transition-transform duration-200" />
                  )}
                  
                  {/* Label */}
                  <div className="absolute top-full mt-2 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                    <span className="text-white text-sm sm:text-base font-medium bg-black/50 px-2 py-1 rounded-lg backdrop-blur-sm whitespace-nowrap">
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