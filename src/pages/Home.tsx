import { useState } from "react";
import { useNavigate } from "react-router-dom";
import circleShape from "@/assets/circle-shape.png";
import blobShape from "@/assets/blob-shape.png";
import { 
  User, 
  FileText, 
  Calendar, 
  Settings, 
  Info, 
  MessageSquare,
  Bell,
  Map
} from "lucide-react";

const navigationItems = [
  { id: 'informativo', label: 'Informativo', icon: Info, path: '/informativo' },
  { id: 'perfil', label: 'Perfil', icon: User, path: '/perfil' },
  { id: 'agenda', label: 'Agenda', icon: Calendar, path: '/agenda' },
  { id: 'documentos', label: 'Documentos', icon: FileText, path: '/documentos' },
  { id: 'chat', label: 'Chat', icon: MessageSquare, path: '/chat' },
  { id: 'notificacoes', label: 'Notificações', icon: Bell, path: '/notificacoes' },
  { id: 'mapa', label: 'Mapa', icon: Map, path: '/mapa' },
  { id: 'configuracoes', label: 'Configurações', icon: Settings, path: '/configuracoes' },
];

const Home = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const navigate = useNavigate();

  const handleCircleClick = () => {
    setIsExpanded(!isExpanded);
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
          className="transition-all duration-700 ease-in-out transform hover:scale-105 focus:outline-none"
        >
          <img
            src={isExpanded ? blobShape : circleShape}
            alt="Central shape"
            className="w-64 h-64 sm:w-80 sm:h-80 object-contain opacity-20 transition-all duration-700"
          />
        </button>
      </div>

      {/* Navigation Carousel */}
      {isExpanded && (
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="relative w-[500px] h-[500px] sm:w-[600px] sm:h-[600px]">
            {navigationItems.map((item, index) => {
              const angle = (index * 360) / navigationItems.length;
              const radius = 200;
              const x = Math.cos((angle - 90) * (Math.PI / 180)) * radius;
              const y = Math.sin((angle - 90) * (Math.PI / 180)) * radius;

              return (
                <button
                  key={item.id}
                  onClick={() => handleNavigationClick(item.path)}
                  className="absolute w-16 h-16 sm:w-20 sm:h-20 bg-black/20 rounded-full flex items-center justify-center hover:bg-black/30 transition-all duration-300 animate-fade-in backdrop-blur-sm group"
                  style={{
                    left: `calc(50% + ${x}px - 2rem)`,
                    top: `calc(50% + ${y}px - 2rem)`,
                    animationDelay: `${index * 100}ms`,
                  }}
                >
                  <item.icon className="w-6 h-6 sm:w-8 sm:h-8 text-white group-hover:scale-110 transition-transform duration-200" />
                  
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