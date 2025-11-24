import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { format } from "date-fns";
import { ptBR } from "date-fns/locale";
import { supabase } from "@/integrations/supabase/client";
import { useAuth } from "@/contexts/AuthContext";
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
  const [isLoading, setIsLoading] = useState(true);
  const { toast } = useToast();
  const { user } = useAuth();

  useEffect(() => {
    if (user) {
      loadEntries();
    } else {
      setIsLoading(false);
    }
  }, [user]);

  const loadEntries = async () => {
    if (!user) return;

    try {
      const { data, error } = await supabase
        .from('anxiety_diary_entries')
        .select('*')
        .eq('user_id', user.id)
        .order('date', { ascending: false })
        .order('time', { ascending: false });

      if (error) throw error;

      const parsedEntries = data.map((entry: any) => ({
        id: entry.id,
        date: new Date(entry.date),
        time: entry.time,
        duration: entry.duration,
        location: entry.location,
        trigger: entry.trigger,
        emotion: entry.emotion,
        intensity: entry.intensity.toString(),
        createdAt: new Date(entry.created_at)
      }));

      setEntries(parsedEntries);
    } catch (error) {
      console.error('Error loading entries:', error);
      toast({
        title: "Erro ao carregar",
        description: "Não foi possível carregar seus registros.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  const deleteEntry = async (id: string) => {
    try {
      const { error } = await supabase
        .from('anxiety_diary_entries')
        .delete()
        .eq('id', id);

      if (error) throw error;

      setEntries(entries.filter(entry => entry.id !== id));
      toast({
        title: "Registro excluído",
        description: "O registro foi removido com sucesso.",
      });
    } catch (error) {
      console.error('Error deleting entry:', error);
      toast({
        title: "Erro ao excluir",
        description: "Não foi possível excluir o registro.",
        variant: "destructive",
      });
    }
  };

  const getIntensityColor = (intensity: string) => {
    const level = parseInt(intensity);
    if (level <= 2) return "bg-green-500/20 text-green-300 border-green-500/30";
    if (level <= 4) return "bg-yellow-500/20 text-yellow-300 border-yellow-500/30";
    if (level <= 6) return "bg-orange-500/20 text-orange-300 border-orange-500/30";
    if (level <= 8) return "bg-red-500/20 text-red-300 border-red-500/30";
    return "bg-red-700/20 text-red-200 border-red-700/30";
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gradient-start via-gradient-middle to-gradient-end flex items-center justify-center p-4">
      <div className="w-full max-w-4xl">
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <Link to="/">
            <button className="p-2 sm:p-3 bg-surface-overlay/80 rounded-full backdrop-blur-sm hover:bg-surface-overlay transition-colors">
              <ChevronLeft className="h-5 w-5 sm:h-6 sm:w-6 text-white" />
            </button>
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
              Diário de Crise
            </CardTitle>
            <p className="text-white/80 mt-2">
              Seus registros de crise organizados por data e hora
            </p>
          </CardHeader>

          <CardContent className="space-y-4">
            {isLoading ? (
              <div className="text-center py-12">
                <p className="text-white/70">Carregando registros...</p>
              </div>
            ) : entries.length === 0 ? (
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