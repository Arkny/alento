import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { format } from "date-fns";
import { ptBR } from "date-fns/locale";
import { 
  ChevronLeft, 
  Plus,
  Calendar,
  Clock,
  MapPin,
  Heart,
  Trash2,
  Eye
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useToast } from "@/hooks/use-toast";

interface DiaryEntry {
  id: string;
  date: Date;
  time: string;
  duration: string;
  location: string;
  trigger: string;
  emotion: string;
  intensity: string;
  createdAt: Date;
}

const DiarioAnsiedadeList = () => {
  const [entries, setEntries] = useState<DiaryEntry[]>([]);
  const { toast } = useToast();

  useEffect(() => {
    const storedEntries = localStorage.getItem("anxiety-diary-entries");
    if (storedEntries) {
      const parsedEntries = JSON.parse(storedEntries).map((entry: any) => ({
        ...entry,
        date: new Date(entry.date),
        createdAt: new Date(entry.createdAt)
      }));
      // Ordenar por data e hora mais recente
      parsedEntries.sort((a: DiaryEntry, b: DiaryEntry) => {
        const dateA = new Date(`${format(a.date, "yyyy-MM-dd")} ${a.time}`);
        const dateB = new Date(`${format(b.date, "yyyy-MM-dd")} ${b.time}`);
        return dateB.getTime() - dateA.getTime();
      });
      setEntries(parsedEntries);
    }
  }, []);

  const deleteEntry = (id: string) => {
    const updatedEntries = entries.filter(entry => entry.id !== id);
    setEntries(updatedEntries);
    localStorage.setItem("anxiety-diary-entries", JSON.stringify(updatedEntries));
    toast({
      title: "Registro excluído",
      description: "O registro foi removido com sucesso.",
    });
  };

  const getIntensityColor = (intensity: string) => {
    switch (intensity) {
      case "1": return "bg-green-500/20 text-green-300 border-green-500/30";
      case "2": return "bg-green-400/20 text-green-200 border-green-400/30";
      case "3": return "bg-yellow-500/20 text-yellow-300 border-yellow-500/30";
      case "4": return "bg-orange-500/20 text-orange-300 border-orange-500/30";
      case "5": return "bg-red-500/20 text-red-300 border-red-500/30";
      default: return "bg-gray-500/20 text-gray-300 border-gray-500/30";
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gradient-start via-gradient-middle to-gradient-end flex items-center justify-center p-4">
      <div className="w-full max-w-4xl">
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <Link
            to="/"
            className="inline-flex items-center text-white hover:text-white/80 transition-colors"
          >
            <ChevronLeft className="w-5 h-5 mr-1" />
            Voltar
          </Link>

          <Link to="/diario-ansiedade/novo">
            <Button 
              className="bg-black/40 border-white/20 text-white hover:bg-black/50"
              variant="outline"
            >
              <Plus className="w-4 h-4 mr-2" />
              Novo Registro
            </Button>
          </Link>
        </div>

        {/* Main Card */}
        <Card className="bg-black/30 border-white/20 backdrop-blur-sm">
          <CardHeader className="text-center pb-6">
            <CardTitle className="text-3xl font-bold text-white flex items-center justify-center gap-3">
              <Heart className="w-8 h-8" />
              Diário da Ansiedade
            </CardTitle>
            <p className="text-white/80 mt-2">
              Seus registros de ansiedade organizados por data e hora
            </p>
          </CardHeader>

          <CardContent className="space-y-4">
            {entries.length === 0 ? (
              <div className="text-center py-12">
                <Heart className="w-16 h-16 text-white/50 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-white mb-2">
                  Nenhum registro encontrado
                </h3>
                <p className="text-white/70 mb-6">
                  Comece registrando sua primeira experiência de ansiedade
                </p>
                <Link to="/diario-ansiedade/novo">
                  <Button 
                    className="bg-primary text-white hover:bg-primary/90"
                  >
                    <Plus className="w-4 h-4 mr-2" />
                    Criar Primeiro Registro
                  </Button>
                </Link>
              </div>
            ) : (
              <div className="space-y-4">
                {entries.map((entry) => (
                  <Card 
                    key={entry.id} 
                    className="bg-black/40 border-white/20 backdrop-blur-sm hover:bg-black/50 transition-colors"
                  >
                    <CardContent className="p-6">
                      <div className="flex justify-between items-start mb-4">
                        <div className="flex items-center gap-4 text-white">
                          <div className="flex items-center gap-2">
                            <Calendar className="w-4 h-4" />
                            <span className="font-medium">
                              {format(entry.date, "dd 'de' MMMM, yyyy", { locale: ptBR })}
                            </span>
                          </div>
                          <div className="flex items-center gap-2">
                            <Clock className="w-4 h-4" />
                            <span>{entry.time}</span>
                          </div>
                        </div>
                        
                        <div className="flex items-center gap-2">
                          <Badge 
                            variant="outline" 
                            className={`${getIntensityColor(entry.intensity)} border`}
                          >
                            Intensidade {entry.intensity}/10
                          </Badge>
                          <Button
                            variant="ghost"
                            size="sm"
                            onClick={() => deleteEntry(entry.id)}
                            className="text-red-400 hover:text-red-300 hover:bg-red-500/10"
                          >
                            <Trash2 className="w-4 h-4" />
                          </Button>
                        </div>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-white/90">
                        <div>
                          <div className="flex items-center gap-2 text-sm text-white/70 mb-1">
                            <MapPin className="w-3 h-3" />
                            Local
                          </div>
                          <p className="font-medium">{entry.location}</p>
                        </div>

                        <div>
                          <div className="flex items-center gap-2 text-sm text-white/70 mb-1">
                            <Clock className="w-3 h-3" />
                            Duração
                          </div>
                          <p className="font-medium">{entry.duration}</p>
                        </div>

                        <div>
                          <div className="flex items-center gap-2 text-sm text-white/70 mb-1">
                            <Heart className="w-3 h-3" />
                            Emoção
                          </div>
                          <p className="font-medium">{entry.emotion}</p>
                        </div>
                      </div>

                      <div className="mt-4">
                        <div className="text-sm text-white/70 mb-1">
                          Motivo desencadeante
                        </div>
                        <p className="text-white/90 text-sm leading-relaxed">
                          {entry.trigger}
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default DiarioAnsiedadeList;