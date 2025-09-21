import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { ArrowLeft, Plus, Minus, CheckCircle } from "lucide-react";

const steps = [
  {
    number: 5,
    title: "5 Coisas que você pode VER",
    description: "Olhe ao seu redor e encontre 5 objetos visíveis",
    instruction: "Observe atentamente e identifique 5 coisas que estão ao seu redor"
  },
  {
    number: 4,
    title: "4 Coisas que você pode TOCAR",
    description: "Identifique 4 texturas ou objetos que pode sentir",
    instruction: "Toque e sinta 4 diferentes texturas ou superfícies"
  },
  {
    number: 3,
    title: "3 Sons que você pode OUVIR",
    description: "Preste atenção aos sons ao seu redor",
    instruction: "Escute com atenção e identifique 3 sons diferentes"
  },
  {
    number: 2,
    title: "2 Aromas que você pode CHEIRAR",
    description: "Concentre-se nos cheiros presentes",
    instruction: "Respire fundo e identifique 2 aromas distintos"
  },
  {
    number: 1,
    title: "1 Sabor que você pode SENTIR",
    description: "Foque no sabor presente em sua boca",
    instruction: "Concentre-se no sabor que você consegue perceber agora"
  }
];

const Grounding543221 = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [counter, setCounter] = useState(0);
  const [isCompleted, setIsCompleted] = useState(false);

  const currentStepData = steps[currentStep];
  const maxCount = currentStepData?.number || 0;
  const progress = (currentStep / steps.length) * 100;

  const handleIncrement = () => {
    if (counter < maxCount) {
      setCounter(counter + 1);
    }
  };

  const handleDecrement = () => {
    if (counter > 0) {
      setCounter(counter - 1);
    }
  };

  const handleNext = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1);
      setCounter(0);
    } else {
      setIsCompleted(true);
    }
  };

  const handlePrevious = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
      setCounter(0);
    }
  };

  if (isCompleted) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-[hsl(var(--gradient-start))] via-[hsl(var(--gradient-middle))] to-[hsl(var(--gradient-end))] p-4 flex items-center justify-center">
        <Card className="max-w-md w-full text-center bg-black/50 backdrop-blur-sm border-white/20">
          <CardHeader>
            <div className="mx-auto mb-4 p-3 rounded-full bg-primary/60">
              <CheckCircle className="h-8 w-8 text-white" />
            </div>
            <CardTitle className="text-2xl text-white">Exercício Concluído!</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-white">
              Parabéns! Você completou o exercício de grounding 5,4,3,2,1. 
              Esperamos que se sinta mais presente e conectado.
            </p>
            <div className="flex flex-col gap-3">
              <Link to="/grounding">
                <Button className="w-full">Voltar aos Exercícios</Button>
              </Link>
              <Link to="/">
                <Button variant="outline" className="w-full">Ir para Home</Button>
              </Link>
            </div>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-[hsl(var(--gradient-start))] via-[hsl(var(--gradient-middle))] to-[hsl(var(--gradient-end))] p-4">
      <div className="max-w-2xl mx-auto">
        {/* Header */}
        <div className="flex items-center gap-4 mb-6">
          <Link to="/grounding">
            <Button variant="ghost" size="icon">
              <ArrowLeft className="h-5 w-5" />
            </Button>
          </Link>
          <div className="flex-1">
            <h1 className="text-xl font-semibold text-black/60">Grounding 5,4,3,2,1</h1>
            <p className="text-sm text-black/60">
              Etapa {currentStep + 1} de {steps.length}
            </p>
          </div>
        </div>

        {/* Progress */}
        <div className="mb-8">
          <Progress value={progress} className="h-2" />
        </div>

        {/* Main Content */}
        <Card className="mb-6 bg-black/50 backdrop-blur-sm border-white/20">
          <CardHeader className="text-center">
            <div className="mx-auto mb-4 w-16 h-16 rounded-full bg-primary/60 flex items-center justify-center">
              <span className="text-2xl font-bold text-white">{currentStepData.number}</span>
            </div>
            <CardTitle className="text-xl text-white">{currentStepData.title}</CardTitle>
            <p className="text-white">{currentStepData.description}</p>
          </CardHeader>
          <CardContent className="text-center space-y-6">
            <p className="text-sm text-white">{currentStepData.instruction}</p>
            
            {/* Counter */}
            <div className="flex items-center justify-center gap-4">
              <Button
                variant="outline"
                size="icon"
                onClick={handleDecrement}
                disabled={counter === 0}
              >
                <Minus className="h-4 w-4" />
              </Button>
              
              <div className="text-4xl font-bold text-white min-w-[80px]">
                {counter}
              </div>
              
              <Button
                variant="outline"
                size="icon"
                onClick={handleIncrement}
                disabled={counter === maxCount}
              >
                <Plus className="h-4 w-4" />
              </Button>
            </div>

            <div className="text-sm text-white">
              {counter} de {maxCount} identificados
            </div>
          </CardContent>
        </Card>

        {/* Navigation */}
        <div className="flex gap-3">
          <Button
            variant="outline"
            onClick={handlePrevious}
            disabled={currentStep === 0}
            className="flex-1"
          >
            Anterior
          </Button>
          <Button
            onClick={handleNext}
            disabled={counter < maxCount}
            className="flex-1"
          >
            {currentStep === steps.length - 1 ? 'Finalizar' : 'Próximo'}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Grounding543221;