import { Search, SlidersHorizontal } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

interface SearchBarProps {
  searchTerm: string;
  onSearchChange: (value: string) => void;
  onFiltersClick: () => void;
}

export const SearchBar = ({ searchTerm, onSearchChange, onFiltersClick }: SearchBarProps) => {
  return (
    <div className="relative flex items-center gap-2 mb-6">
      <div className="relative flex-1">
        <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-surface-overlay" />
        <Input
          placeholder="Pesquisar"
          value={searchTerm}
          onChange={(e) => onSearchChange(e.target.value)}
          className="pl-12 pr-4 py-4 bg-surface-overlay/80 border-0 text-white placeholder:text-white/70 rounded-2xl h-14 text-lg backdrop-blur-sm"
        />
      </div>
      <Button
        variant="ghost"
        size="icon"
        onClick={onFiltersClick}
        className="h-14 w-14 bg-surface-overlay/80 hover:bg-surface-overlay text-white rounded-2xl backdrop-blur-sm"
      >
        <SlidersHorizontal className="h-6 w-6" />
      </Button>
    </div>
  );
};