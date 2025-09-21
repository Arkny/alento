import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ChevronLeft, Brain, Heart } from "lucide-react";

const Grounding = () => {
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

        {/* Exercises Library */}
        <div className="max-w-4xl mx-auto grid gap-6">
          <Card className="hover:shadow-lg transition-shadow duration-300 bg-black/50 backdrop-blur-sm border-white/20">
            <CardHeader>
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-lg bg-primary/60">
                  <Brain className="h-6 w-6 text-white" />
                </div>
                <div>
                  <CardTitle className="text-white">Grounding 5,4,3,2,1</CardTitle>
                  <CardDescription className="text-white">
                    Técnica sensorial para trazer você de volta ao momento presente
                  </CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-white mb-4">
                Use seus cinco sentidos para se conectar com o ambiente ao seu redor. 
                Este exercício ajuda a reduzir ansiedade e focar no presente.
              </p>
              <div className="flex items-center gap-2 text-xs text-white mb-4">
                <Heart className="h-4 w-4" />
                <span>Duração: 5-10 minutos</span>
              </div>
              <Link to="/grounding/5-4-3-2-1">
                <Button className="w-full">Começar Exercício</Button>
              </Link>
            </CardContent>
          </Card>

          {/* Placeholder for future exercises */}
          <Card className="bg-black/50 backdrop-blur-sm border-white/20">
            <CardHeader>
              <CardTitle className="text-white">Mais exercícios em breve...</CardTitle>
              <CardDescription className="text-white">
                Novos exercícios de grounding serão adicionados regularmente
              </CardDescription>
            </CardHeader>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Grounding;