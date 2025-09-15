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
  Star
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
    setIsExpanded(false);
    setTimeout(() => navigate(path), 300);
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
      <div className="relative z-10 flex items-center justify-center min-h-screen">
        <div className="flex flex-col items-center">
          
          {/* Central Orb */}
          <div className="relative">
            <AnimatePresence>
              {!isExpanded && (
                <motion.div
                  initial={{ scale: 0, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  exit={{ scale: 0, opacity: 0 }}
                  transition={{ duration: 0.5, ease: "easeOut" }}
                  className="relative"
                >
                  <motion.button
                    className="w-36 h-36 sm:w-48 sm:h-48 bg-black/20 backdrop-blur-sm rounded-full shadow-2xl flex items-center justify-center cursor-pointer border border-white/20"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => setIsExpanded(true)}
                    animate={{
                      boxShadow: [
                        "0 0 0 0 rgba(255, 255, 255, 0.3)",
                        "0 0 0 20px rgba(255, 255, 255, 0)",
                        "0 0 0 0 rgba(255, 255, 255, 0)"
                      ]
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      repeatType: "loop"
                    }}
                  >
                    <div className="text-white/80 text-lg sm:text-xl font-light">
                      Toque aqui
                    </div>
                  </motion.button>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Expanded Navigation */}
            <AnimatePresence>
              {isExpanded && (
                <motion.div
                  initial={{ scale: 0, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  exit={{ scale: 0, opacity: 0 }}
                  transition={{ duration: 0.5, ease: "easeOut" }}
                  className="relative"
                >
                  {/* Central Close Button */}
                  <motion.button
                    className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-16 h-16 bg-black/40 backdrop-blur-sm rounded-full shadow-xl flex items-center justify-center cursor-pointer border border-white/20 z-20"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={() => setIsExpanded(false)}
                  >
                    <div className="w-4 h-4 border-2 border-white/80 rounded-full" />
                  </motion.button>

                  {/* Navigation Items in Circle */}
                  <div className="relative w-80 h-80 sm:w-96 sm:h-96">
                    {navigationItems.map((item, index) => {
                      const angle = (index * 360) / navigationItems.length;
                      const radius = 140;
                      const x = Math.cos((angle - 90) * (Math.PI / 180)) * radius;
                      const y = Math.sin((angle - 90) * (Math.PI / 180)) * radius;
                      
                      return (
                        <motion.button
                          key={item.id}
                          className={`absolute w-14 h-14 sm:w-16 sm:h-16 ${item.color} rounded-full shadow-lg flex items-center justify-center cursor-pointer border-2 border-white/30`}
                          style={{
                            left: `calc(50% + ${x}px - 28px)`,
                            top: `calc(50% + ${y}px - 28px)`,
                          }}
                          initial={{ scale: 0, opacity: 0 }}
                          animate={{ scale: 1, opacity: 1 }}
                          transition={{ 
                            delay: index * 0.1,
                            duration: 0.3,
                            ease: "easeOut"
                          }}
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.9 }}
                          onClick={() => handleItemClick(item.path)}
                        >
                          <item.icon className="w-6 h-6 sm:w-7 sm:h-7 text-white" />
                        </motion.button>
                      );
                    })}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Dots Indicator */}
          <motion.div 
            className="flex gap-2 mt-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.5 }}
          >
            <div className="w-2 h-2 bg-white/60 rounded-full" />
            <div className="w-2 h-2 bg-white/60 rounded-full" />
            <div className="w-2 h-2 bg-white/40 rounded-full" />
          </motion.div>
        </div>
      </div>
    </div>
  );
}