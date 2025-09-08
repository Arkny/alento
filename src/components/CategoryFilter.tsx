import { Button } from "@/components/ui/button";

export interface Category {
  id: string;
  name: string;
}

interface CategoryFilterProps {
  categories: Category[];
  activeCategory: string;
  onCategoryChange: (categoryId: string) => void;
}

export const CategoryFilter = ({ categories, activeCategory, onCategoryChange }: CategoryFilterProps) => {
  // Mostrar apenas as primeiras 5 categorias
  const visibleCategories = categories.slice(0, 5);
  
  return (
    <div className="flex gap-3 mb-8 overflow-x-auto pb-2 justify-center">
      {visibleCategories.map((category) => (
        <Button
          key={category.id}
          variant={activeCategory === category.id ? "default" : "secondary"}
          onClick={() => onCategoryChange(category.id)}
          className={`
            px-6 py-3 rounded-full text-sm font-medium whitespace-nowrap transition-all duration-200
            ${activeCategory === category.id 
              ? "bg-filter-active text-white shadow-lg" 
              : "bg-filter-inactive text-white hover:bg-filter-active"
            }
          `}
        >
          {category.name}
        </Button>
      ))}
    </div>
  );
};