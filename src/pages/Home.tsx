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
import blobShape from "../assets/blob-shape.png";

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
                    >
                      <div className="text-white/80 text-lg sm:text-xl font-light">
                        Toque aqui
                      </div>
                    </motion.button>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Expanded Blob Shape */}
              <AnimatePresence>
                {isExpanded && (
                  <motion.div
                    initial={{ scale: 0, opacity: 0 }}
                    animate={{ scale: 1, opacity: 0.2 }}
                    exit={{ scale: 0, opacity: 0 }}
                    transition={{ duration: 0.5, ease: "easeOut" }}
                    className="relative cursor-pointer"
                    onClick={() => setIsExpanded(false)}
                  >
                    <img 
                      src={blobShape} 
                      alt="Blob shape" 
                      className="w-96 h-96 sm:w-[480px] sm:h-[480px] object-contain"
                    />
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