import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ChevronLeft, Brain, Heart, List, Clock } from "lucide-react";
import { CategoryFilter, Category } from "@/components/CategoryFilter";

const filterCategories: Category[] = [
  { id: "todos", name: "Todos" },
  { id: "percepcao", name: "Percepção" },
  { id: "memoria", name: "Memória" },
  { id: "relaxamento", name: "Relaxamento" },
  { id: "respiracao", name: "Respiração" },
  { id: "concentracao", name: "Concentração" }
];

const categoryNames: Record<string, string> = {
  percepcao: "Percepção",
  memoria: "Memória", 
  relaxamento: "Relaxamento",
  respiracao: "Respiração",
  concentracao: "Concentração"
};

interface Exercise {
  id: string;
  title: string;
  description: string;
  content: string;
  duration: string;
  icon: any;
  link: string;
  categories: string[];
}

const exercises: Exercise[] = [
  {
    id: "grounding-5-4-3-2-1",
    title: "Grounding 5,4,3,2,1",
    description: "Técnica sensorial para trazer você de volta ao momento presente",
    content: "Use seus cinco sentidos para se conectar com o ambiente ao seu redor. Este exercício ajuda a reduzir ansiedade e focar no presente.",
    duration: "5-10 minutos",
    icon: Brain,
    link: "/grounding/5-4-3-2-1",
    categories: ["percepcao", "concentracao", "relaxamento"]
  },
  {
    id: "grounding-categorias",
    title: "Exercício de Categorias",
    description: "Liste itens de diferentes categorias para focar seus pensamentos",
    content: "Uma técnica de aterramento que ajuda a desviar o foco de situações de crise, concentrando a mente em listas organizadas de diferentes categorias.",
    duration: "10-15 minutos",
    icon: List,
    link: "/grounding/categorias",
    categories: ["memoria", "concentracao"]
  }
];

const Grounding = () => {
  const [activeFilter, setActiveFilter] = useState("todos");
  const [favorites, setFavorites] = useState<string[]>([]);

  useEffect(() => {
    const savedFavorites = localStorage.getItem("grounding-favorites");
    if (savedFavorites) {
      setFavorites(JSON.parse(savedFavorites));
    }
  }, []);

  const toggleFavorite = (exerciseId: string) => {
    const newFavorites = favorites.includes(exerciseId)
      ? favorites.filter(id => id !== exerciseId)
      : [...favorites, exerciseId];
    
    setFavorites(newFavorites);
    localStorage.setItem("grounding-favorites", JSON.stringify(newFavorites));
  };

  const filteredExercises = exercises.filter(exercise => {
    if (activeFilter === "todos") return true;
    return exercise.categories.includes(activeFilter);
  });

  // Organizar exercícios: favoritos primeiro
  const sortedExercises = filteredExercises.sort((a, b) => {
    const aIsFavorite = favorites.includes(a.id);
    const bIsFavorite = favorites.includes(b.id);
    
    if (aIsFavorite && !bIsFavorite) return -1;
    if (!aIsFavorite && bIsFavorite) return 1;
    return 0;
  });
  return (
    <div className="min-h-screen bg-gradient-to-b from-[hsl(var(--gradient-start))] via-[hsl(var(--gradient-middle))] to-[hsl(var(--gradient-end))]">
      <div className="container mx-auto px-4 sm:px-6 py-4 sm:py-8">
        {/* Back Button */}
        <div className="flex justify-start mb-4">
          <Link to="/">
            <button className="p-2 sm:p-3 bg-surface-overlay/80 rounded-full backdrop-blur-sm hover:bg-surface-overlay transition-colors">
              <ChevronLeft className="h-5 w-5 sm:h-6 sm:w-6 text-white" />
            </button>
          </Link>
        </div>
        
        {/* Header */}
        <div className="mb-8">
          <div className="text-center">
            <h1 className="text-3xl font-bold text-black/60">Grounding</h1>
            <p className="text-black/60">Exercícios para conectar você ao presente</p>
          </div>
        </div>

        {/* Filters */}
        <CategoryFilter 
          categories={filterCategories}
          activeCategory={activeFilter}
          onCategoryChange={setActiveFilter}
        />

        {/* Exercises Library */}
        <div className="max-w-4xl mx-auto grid gap-6">
          {sortedExercises.map((exercise) => {
            const IconComponent = exercise.icon;
            const isFavorite = favorites.includes(exercise.id);
            
            return (
              <Card 
                key={exercise.id}
                className="hover:shadow-lg transition-shadow duration-300 bg-black/50 backdrop-blur-sm border-white/20 relative"
              >
                {isFavorite && (
                  <div className="absolute top-2 right-2 bg-primary/80 text-white text-xs px-2 py-1 rounded-full">
                    Favorito
                  </div>
                )}
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-primary/60">
                      <IconComponent className="h-6 w-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <CardTitle className="text-white">{exercise.title}</CardTitle>
                      <CardDescription className="text-white">
                        {exercise.description}
                      </CardDescription>
                    </div>
                    <button
                      onClick={() => toggleFavorite(exercise.id)}
                      className={`p-2 rounded-full transition-colors ${
                        isFavorite 
                          ? 'text-red-500 hover:text-red-600' 
                          : 'text-white/60 hover:text-red-500'
                      }`}
                    >
                      <Heart 
                        className={`h-5 w-5 ${isFavorite ? 'fill-current' : ''}`} 
                      />
                    </button>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-white mb-4">
                    {exercise.content}
                  </p>
                  
                  {/* Tags de categoria */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {exercise.categories.map((categoryId) => (
                      <Badge 
                        key={categoryId}
                        variant="secondary" 
                        className="bg-white/20 text-white hover:bg-white/30 text-xs"
                      >
                        {categoryNames[categoryId]}
                      </Badge>
                    ))}
                  </div>
                  
                  <div className="flex items-center gap-2 text-xs text-white mb-4">
                    <Clock className="h-4 w-4" />
                    <span>Duração: {exercise.duration}</span>
                  </div>
                  <Link to={exercise.link}>
                    <Button variant="default" className="w-full">Começar Exercício</Button>
                  </Link>
                </CardContent>
              </Card>
            );
          })}

          {sortedExercises.length === 0 && (
            <Card className="bg-black/50 backdrop-blur-sm border-white/20">
              <CardHeader>
                <CardTitle className="text-white text-center">Nenhum exercício encontrado</CardTitle>
                <CardDescription className="text-white text-center">
                  Tente alterar os filtros para ver mais exercícios
                </CardDescription>
              </CardHeader>
            </Card>
          )}

          {/* Placeholder for future exercises */}
          {activeFilter === "todos" && (
            <Card className="bg-black/50 backdrop-blur-sm border-white/20">
              <CardHeader>
                <CardTitle className="text-white">Mais exercícios em breve...</CardTitle>
                <CardDescription className="text-white">
                  Novos exercícios de grounding serão adicionados regularmente
                </CardDescription>
              </CardHeader>
            </Card>
          )}
        </div>
      </div>
    </div>
  );
};

export default Grounding;