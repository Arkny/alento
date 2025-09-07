import { Search, SlidersHorizontal } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";

interface SearchBarProps {
  searchTerm: string;
  onSearchChange: (term: string) => void;
  categories: Array<{ id: string; name: string }>;
  activeCategory: string;
  onCategoryChange: (categoryId: string) => void;
}

export const SearchBar = ({ 
  searchTerm, 
  onSearchChange, 
  categories, 
  activeCategory, 
  onCategoryChange 
}: SearchBarProps) => {
  return (
    <div className="relative mb-6">
      <div className="relative">
        <img 
          src="/lovable-uploads/f119eb3c-3483-4172-89a6-79b01cba80a5.png" 
          alt="Ícone de pesquisa" 
          className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 brightness-0 invert opacity-70"
        />
        <Input
          placeholder="Pesquisar"
          value={searchTerm}
          onChange={(e) => onSearchChange(e.target.value)}
          className="pl-12 pr-16 py-4 bg-surface-overlay/80 border-0 text-white placeholder:text-white/70 rounded-2xl h-14 text-lg backdrop-blur-sm"
        />
        
        <Dialog>
          <DialogTrigger asChild>
            <Button
              variant="ghost"
              size="icon"
              className="absolute right-2 top-1/2 transform -translate-y-1/2 h-10 w-10 hover:bg-white/10 text-white/70 hover:text-white rounded-xl"
            >
              <SlidersHorizontal className="h-5 w-5" />
            </Button>
          </DialogTrigger>
          <DialogContent className="bg-surface-elevated border-surface-overlay/20">
            <DialogHeader>
              <DialogTitle className="text-white">Filtrar por Categoria</DialogTitle>
            </DialogHeader>
            <div className="grid grid-cols-2 gap-3 mt-4">
              {categories.map((category) => (
                <Badge
                  key={category.id}
                  variant={activeCategory === category.id ? "default" : "secondary"}
                  onClick={() => onCategoryChange(category.id)}
                  className={`
                    cursor-pointer px-4 py-2 text-center transition-all duration-200 rounded-full
                    ${activeCategory === category.id 
                      ? "bg-filter-active text-white shadow-lg" 
                      : "bg-filter-inactive text-white hover:bg-filter-active"
                    }
                  `}
                >
                  {category.name}
                </Badge>
              ))}
            </div>
          </DialogContent>
        </Dialog>
      </div>
    </div>
  );
};