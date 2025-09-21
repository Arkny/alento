import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { format } from "date-fns";
import { Link } from "react-router-dom";
import { 
  ChevronLeft, 
  Calendar,
  Clock,
  MapPin,
  Home,
  Briefcase,
  GraduationCap,
  School,
  Car,
  Heart,
  Frown,
  Angry,
  Zap,
  Shield
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Calendar as CalendarComponent } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { cn } from "@/lib/utils";
import { useToast } from "@/hooks/use-toast";

const formSchema = z.object({
  date: z.date({
    required_error: "Por favor, selecione uma data.",
  }),
  time: z.string().min(1, "Por favor, informe o horário."),
  duration: z.string().min(1, "Por favor, informe a duração."),
  location: z.string().min(1, "Por favor, informe onde você estava."),
  trigger: z.string().min(1, "Por favor, descreva o motivo desencadeante."),
  emotion: z.string().min(1, "Por favor, selecione uma emoção."),
  intensity: z.string().min(1, "Por favor, selecione a intensidade."),
});

const locationSuggestions = [
  { id: "casa", label: "Casa", icon: Home },
  { id: "trabalho", label: "Trabalho", icon: Briefcase },
  { id: "escola", label: "Escola", icon: School },
  { id: "faculdade", label: "Faculdade", icon: GraduationCap },
  { id: "rua", label: "Rua", icon: Car },
];

const emotionSuggestions = [
  { id: "medo", label: "Medo", icon: Shield },
  { id: "nervosismo", label: "Nervosismo", icon: Zap },
  { id: "tristeza", label: "Tristeza", icon: Frown },
  { id: "raiva", label: "Raiva", icon: Angry },
  { id: "preocupacao", label: "Preocupação", icon: Heart },
];

const DiarioAnsiedade = () => {
  const [selectedLocation, setSelectedLocation] = useState("");
  const [selectedEmotion, setSelectedEmotion] = useState("");
  const { toast } = useToast();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      date: new Date(),
      time: new Date().toLocaleTimeString("pt-BR", { hour: "2-digit", minute: "2-digit" }),
      duration: "",
      location: "",
      trigger: "",
      emotion: "",
      intensity: "",
    },
  });

  const onSubmit = (values: z.infer<typeof formSchema>) => {
    console.log(values);
    toast({
      title: "Registro salvo!",
      description: "Seu episódio de ansiedade foi registrado com sucesso.",
    });
  };

  const handleLocationSelect = (location: string) => {
    setSelectedLocation(location);
    form.setValue("location", location);
  };

  const handleEmotionSelect = (emotion: string) => {
    setSelectedEmotion(emotion);
    form.setValue("emotion", emotion);
  };

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

        {/* Main Content */}
        <div className="max-w-2xl mx-auto">
          <Card className="bg-black/30 backdrop-blur-sm border-white/20 shadow-lg">
            <CardHeader className="text-center">
              <CardTitle className="text-2xl font-bold text-white">
                Diário da Ansiedade
              </CardTitle>
              <p className="text-white/80">
                Registre seus episódios para acompanhar padrões e gatilhos
              </p>
            </CardHeader>
            
            <CardContent className="space-y-6">
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                  {/* Data e Hora */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <FormField
                      control={form.control}
                      name="date"
                      render={({ field }) => (
                        <FormItem className="flex flex-col">
                          <FormLabel className="flex items-center gap-2 text-white">
                            <Calendar className="h-4 w-4" />
                            Data
                          </FormLabel>
                          <Popover>
                            <PopoverTrigger asChild>
                              <FormControl>
                                <Button
                                  variant="outline"
                                  className={cn(
                                    "w-full pl-3 text-left font-normal bg-black/50 border-white/20 text-white hover:bg-black/60",
                                    !field.value && "text-white/70"
                                  )}
                                >
                                  {field.value ? (
                                    format(field.value, "dd/MM/yyyy")
                                  ) : (
                                    <span>Selecione uma data</span>
                                  )}
                                </Button>
                              </FormControl>
                            </PopoverTrigger>
                            <PopoverContent className="w-auto p-0" align="start">
                              <CalendarComponent
                                mode="single"
                                selected={field.value}
                                onSelect={field.onChange}
                                disabled={(date) => date > new Date()}
                                initialFocus
                                className="pointer-events-auto"
                              />
                            </PopoverContent>
                          </Popover>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="time"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="flex items-center gap-2 text-white">
                            <Clock className="h-4 w-4" />
                            Horário
                          </FormLabel>
                          <FormControl>
                            <Input type="time" className="bg-black/50 border-white/20 text-white placeholder:text-white/70" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>

                  {/* Duração */}
                  <FormField
                    control={form.control}
                    name="duration"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-white">Duração da crise</FormLabel>
                        <FormControl>
                          <Input placeholder="Ex: 15 minutos, 1 hora..." className="bg-black/50 border-white/20 text-white placeholder:text-white/70" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  {/* Local */}
                  <FormField
                    control={form.control}
                    name="location"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="flex items-center gap-2 text-white">
                          <MapPin className="h-4 w-4" />
                          Onde você estava?
                        </FormLabel>
                        
                        {/* Sugestões de local */}
                        <div className="grid grid-cols-3 sm:grid-cols-5 gap-2 mb-3">
                          {locationSuggestions.map((location) => (
                            <Button
                              key={location.id}
                              type="button"
                              variant={selectedLocation === location.label ? "default" : "outline"}
                              size="sm"
                              className={`flex flex-col gap-1 h-16 ${
                                selectedLocation === location.label 
                                  ? "bg-primary text-white" 
                                  : "bg-black/50 border-white/20 text-white hover:bg-black/60"
                              }`}
                              onClick={() => handleLocationSelect(location.label)}
                            >
                              <location.icon className="h-4 w-4" />
                              <span className="text-xs">{location.label}</span>
                            </Button>
                          ))}
                        </div>
                        
                        <FormControl>
                          <Input 
                            placeholder="Ou descreva o local..." 
                            className="bg-black/50 border-white/20 text-white placeholder:text-white/70"
                            {...field}
                            value={selectedLocation || field.value}
                            onChange={(e) => {
                              field.onChange(e);
                              setSelectedLocation("");
                            }}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  {/* Motivo desencadeante */}
                  <FormField
                    control={form.control}
                    name="trigger"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-white">O que desencadeou a ansiedade?</FormLabel>
                        <FormControl>
                          <Textarea 
                            placeholder="Descreva o que aconteceu ou o que você estava pensando..."
                            className="min-h-[100px] bg-black/50 border-white/20 text-white placeholder:text-white/70"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  {/* Emoção */}
                  <FormField
                    control={form.control}
                    name="emotion"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-white">Que emoção você sentiu?</FormLabel>
                        
                        {/* Sugestões de emoção */}
                        <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 mb-3">
                          {emotionSuggestions.map((emotion) => (
                            <Button
                              key={emotion.id}
                              type="button"
                              variant={selectedEmotion === emotion.label ? "default" : "outline"}
                              size="sm"
                              className={`flex items-center gap-2 h-12 ${
                                selectedEmotion === emotion.label 
                                  ? "bg-primary text-white" 
                                  : "bg-black/50 border-white/20 text-white hover:bg-black/60"
                              }`}
                              onClick={() => handleEmotionSelect(emotion.label)}
                            >
                              <emotion.icon className="h-4 w-4" />
                              <span className="text-sm">{emotion.label}</span>
                            </Button>
                          ))}
                        </div>
                        
                        <FormControl>
                          <Input 
                            placeholder="Ou descreva outra emoção..." 
                            className="bg-black/50 border-white/20 text-white placeholder:text-white/70"
                            {...field}
                            value={selectedEmotion || field.value}
                            onChange={(e) => {
                              field.onChange(e);
                              setSelectedEmotion("");
                            }}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  {/* Intensidade */}
                  <FormField
                    control={form.control}
                    name="intensity"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-white">Intensidade da emoção (1-10)</FormLabel>
                        <FormControl>
                          <RadioGroup
                            onValueChange={field.onChange}
                            defaultValue={field.value}
                            className="grid grid-cols-5 gap-2"
                          >
                            {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((num) => (
                              <div key={num} className="flex flex-col items-center space-y-2">
                                <RadioGroupItem value={num.toString()} id={`intensity-${num}`} />
                                <Label htmlFor={`intensity-${num}`} className="text-sm text-white">
                                  {num}
                                </Label>
                              </div>
                            ))}
                          </RadioGroup>
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  {/* Submit Button */}
                  <Button type="submit" className="w-full" size="lg">
                    Salvar Registro
                  </Button>
                </form>
              </Form>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default DiarioAnsiedade;