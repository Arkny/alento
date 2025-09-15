import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { 
  FileText, 
  Users, 
  Settings, 
  BookOpen,
  Camera,
  Music,
  Heart,
  Star,
  X
} from "lucide-react";

interface NavigationItem {
  id: string;
  label: string;
  icon: any;
  path: string;
  color: string;
}

const navigationItems: NavigationItem[] = [
  { id: "posts", label: "Informativo", icon: FileText, path: "/informativo", color: "bg-blue-500" },
  { id: "users", label: "Pessoas", icon: Users, path: "/pessoas", color: "bg-green-500" },
  { id: "gallery", label: "Galeria", icon: Camera, path: "/galeria", color: "bg-purple-500" },
  { id: "music", label: "Música", icon: Music, path: "/musica", color: "bg-pink-500" },
  { id: "favorites", label: "Favoritos", icon: Heart, path: "/favoritos", color: "bg-red-500" },
  { id: "blog", label: "Blog", icon: BookOpen, path: "/blog", color: "bg-orange-500" },
  { id: "featured", label: "Destaques", icon: Star, path: "/destaques", color: "bg-yellow-500" },
  { id: "settings", label: "Configurações", icon: Settings, path: "/configuracoes", color: "bg-gray-500" }
];

export default function Home() {
  const [isExpanded, setIsExpanded] = useState(false);
  const navigate = useNavigate();

  const handleItemClick = (path: string) => {
    navigate(path);
  };

  const handleToggleExpanded = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className="min-h-screen overflow-hidden relative">
      {/* Gradient Background */}
      <div 
        className="absolute inset-0 bg-gradient-to-br"
        style={{
          background: `linear-gradient(135deg, 
            hsl(140, 65%, 91%) 0%, 
            hsl(50, 85%, 83%) 50%, 
            hsl(345, 100%, 74%) 100%)`
        }}
      />
      
      {/* Main Content */}
      <div className="relative z-10 flex items-center justify-center min-h-screen p-4">
        <div className="flex flex-col items-center">
          
          {/* Central Orb or Expanded Menu */}
          <div className="relative flex items-center justify-center">
            
            {!isExpanded ? (
              // Central Orb
              <button
                className="w-36 h-36 sm:w-48 sm:h-48 bg-black/20 backdrop-blur-sm rounded-full shadow-2xl flex items-center justify-center cursor-pointer border border-white/20 hover:bg-black/25 transition-colors duration-200"
                onClick={handleToggleExpanded}
              >
                <div className="text-white/80 text-lg sm:text-xl font-light">
                  Toque aqui
                </div>
              </button>
            ) : (
              // Expanded Menu
              <div className="relative">
                {/* Close Button */}
                <button
                  className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-12 h-12 bg-black/40 backdrop-blur-sm rounded-full shadow-xl flex items-center justify-center cursor-pointer border border-white/20 z-10 hover:bg-black/50 transition-colors"
                  onClick={handleToggleExpanded}
                >
                  <X className="w-5 h-5 text-white/80" />
                </button>

                {/* Navigation Items Grid */}
                <div className="grid grid-cols-3 gap-6 w-96">
                  {navigationItems.map((item, index) => (
                    <div key={item.id} className="flex flex-col items-center gap-2">
                      <button
                        className={`w-20 h-20 ${item.color} rounded-full shadow-lg flex items-center justify-center cursor-pointer border-2 border-white/30 hover:scale-105 transition-transform duration-200`}
                        onClick={() => handleItemClick(item.path)}
                      >
                        <item.icon className="w-7 h-7 text-white" />
                      </button>
                      <span className="text-xs text-white/80 font-medium text-center">
                        {item.label}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Dots Indicator */}
          <div className="flex gap-2 mt-16">
            <div className="w-2 h-2 bg-white/60 rounded-full" />
            <div className="w-2 h-2 bg-white/60 rounded-full" />
            <div className="w-2 h-2 bg-white/40 rounded-full" />
          </div>
        </div>
      </div>
    </div>
  );
}