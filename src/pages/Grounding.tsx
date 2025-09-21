import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowLeft, Brain, Heart } from "lucide-react";

const Grounding = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[hsl(var(--gradient-start))] via-[hsl(var(--gradient-middle))] to-[hsl(var(--gradient-end))] p-4">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="flex items-center gap-4 mb-8">
          <Link to="/">
            <Button variant="ghost" size="icon">
              <ArrowLeft className="h-5 w-5" />
            </Button>
          </Link>
          <div>
            <h1 className="text-3xl font-bold text-foreground">Grounding</h1>
            <p className="text-muted-foreground">Exercícios para conectar você ao presente</p>
          </div>
        </div>

        {/* Exercises Library */}
        <div className="grid gap-6">
          <Card className="hover:shadow-lg transition-shadow duration-300 bg-black/30 backdrop-blur-sm border-white/20">
            <CardHeader>
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-lg bg-primary/10">
                  <Brain className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <CardTitle className="text-white">Grounding 5,4,3,2,1</CardTitle>
                  <CardDescription className="text-white/80">
                    Técnica sensorial para trazer você de volta ao momento presente
                  </CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-white/70 mb-4">
                Use seus cinco sentidos para se conectar com o ambiente ao seu redor. 
                Este exercício ajuda a reduzir ansiedade e focar no presente.
              </p>
              <div className="flex items-center gap-2 text-xs text-white/60 mb-4">
                <Heart className="h-4 w-4" />
                <span>Duração: 5-10 minutos</span>
              </div>
              <Link to="/grounding/5-4-3-2-1">
                <Button className="w-full">Começar Exercício</Button>
              </Link>
            </CardContent>
          </Card>

          {/* Placeholder for future exercises */}
          <Card className="opacity-50">
            <CardHeader>
              <CardTitle className="text-muted-foreground">Mais exercícios em breve...</CardTitle>
              <CardDescription>
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