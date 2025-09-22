import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { ArrowLeft, Plus, CheckCircle, X } from "lucide-react";

const allCategories = [
  {
    title: "Instrumentos Musicais",
    description: "Liste todos os instrumentos musicais que conseguir lembrar",
    placeholder: "Ex: violão, piano, bateria..."
  },
  {
    title: "Sabores de Sorvete",
    description: "Pense em diferentes sabores de sorvete que conhece",
    placeholder: "Ex: chocolate, morango, baunilha..."
  },
  {
    title: "Esportes",
    description: "Liste diferentes modalidades esportivas",
    placeholder: "Ex: futebol, basquete, natação..."
  },
  {
    title: "Países",
    description: "Pense em países ao redor do mundo",
    placeholder: "Ex: Brasil, França, Japão..."
  },
  {
    title: "Animais",
    description: "Liste diferentes tipos de animais",
    placeholder: "Ex: cachorro, gato, elefante..."
  },
  {
    title: "Cores",
    description: "Liste todas as cores que conseguir pensar",
    placeholder: "Ex: azul, vermelho, amarelo..."
  },
  {
    title: "Profissões",
    description: "Pense em diferentes profissões e ocupações",
    placeholder: "Ex: médico, professor, engenheiro..."
  },
  {
    title: "Frutas",
    description: "Liste diferentes tipos de frutas",
    placeholder: "Ex: maçã, banana, laranja..."
  },
  {
    title: "Filmes",
    description: "Pense em filmes que já assistiu ou conhece",
    placeholder: "Ex: Titanic, Avatar, Vingadores..."
  },
  {
    title: "Cidades Brasileiras",
    description: "Liste cidades do Brasil que conhece",
    placeholder: "Ex: São Paulo, Rio de Janeiro, Salvador..."
  },
  {
    title: "Marcas de Carros",
    description: "Pense em diferentes marcas de automóveis",
    placeholder: "Ex: Toyota, Ford, Volkswagen..."
  },
  {
    title: "Tipos de Comida",
    description: "Liste diferentes tipos de alimentos",
    placeholder: "Ex: pizza, lasanha, hambúrguer..."
  },
  {
    title: "Objetos da Cozinha",
    description: "Pense em utensílios e objetos de cozinha",
    placeholder: "Ex: panela, faca, geladeira..."
  },
  {
    title: "Gêneros Musicais",
    description: "Liste diferentes estilos musicais",
    placeholder: "Ex: rock, pop, samba..."
  },
  {
    title: "Meios de Transporte",
    description: "Pense em diferentes formas de se locomover",
    placeholder: "Ex: carro, bicicleta, avião..."
  },
  {
    title: "Flores",
    description: "Liste tipos de flores que conhece",
    placeholder: "Ex: rosa, margarida, girassol..."
  },
  {
    title: "Estados do Brasil",
    description: "Pense nos estados brasileiros",
    placeholder: "Ex: São Paulo, Minas Gerais, Bahia..."
  },
  {
    title: "Jogos",
    description: "Liste jogos digitais ou físicos que conhece",
    placeholder: "Ex: futebol, xadrez, videogame..."
  },
  {
    title: "Livros",
    description: "Pense em livros que já leu ou conhece",
    placeholder: "Ex: Harry Potter, Dom Casmurro..."
  },
  {
    title: "Objetos de Casa",
    description: "Liste objetos encontrados numa casa",
    placeholder: "Ex: sofá, mesa, televisão..."
  },
  {
    title: "Roupas",
    description: "Pense em diferentes peças de vestuário",
    placeholder: "Ex: camiseta, calça, sapato..."
  },
  {
    title: "Bebidas",
    description: "Liste diferentes tipos de bebidas",
    placeholder: "Ex: água, suco, refrigerante..."
  },
  {
    title: "Planetas",
    description: "Pense nos planetas do sistema solar",
    placeholder: "Ex: Terra, Marte, Júpiter..."
  },
  {
    title: "Partes do Corpo",
    description: "Liste partes do corpo humano",
    placeholder: "Ex: braço, perna, cabeça..."
  },
  {
    title: "Materiais Escolares",
    description: "Pense em objetos usados na escola",
    placeholder: "Ex: lápis, caderno, borracha..."
  },
  {
    title: "Temperos",
    description: "Liste diferentes temperos e condimentos",
    placeholder: "Ex: sal, pimenta, alho..."
  },
  {
    title: "Emoções",
    description: "Pense em diferentes sentimentos e emoções",
    placeholder: "Ex: alegria, tristeza, raiva..."
  },
  {
    title: "Brinquedos",
    description: "Liste brinquedos que conhece ou já brincou",
    placeholder: "Ex: boneca, carrinho, bola..."
  },
  {
    title: "Móveis",
    description: "Pense em diferentes tipos de móveis",
    placeholder: "Ex: cama, cadeira, armário..."
  },
  {
    title: "Doces",
    description: "Liste diferentes tipos de doces e sobremesas",
    placeholder: "Ex: chocolate, bolo, brigadeiro..."
  },
  {
    title: "Fenômenos da Natureza",
    description: "Pense em eventos e fenômenos naturais",
    placeholder: "Ex: chuva, vento, trovão..."
  },
  {
    title: "Formas Geométricas",
    description: "Liste diferentes formas e figuras geométricas",
    placeholder: "Ex: círculo, quadrado, triângulo..."
  }
];

// Função para selecionar categorias aleatórias
const getRandomCategories = (count: number = 5) => {
  const shuffled = [...allCategories].sort(() => 0.5 - Math.random());
  return shuffled.slice(0, count);
};

const GroundingCategories = () => {
  const [selectedCount, setSelectedCount] = useState<string>("5");
  const [hasStarted, setHasStarted] = useState(false);
  const [categories, setCategories] = useState<typeof allCategories>([]);
  const [currentCategory, setCurrentCategory] = useState(0);
  const [items, setItems] = useState<string[]>([]);
  const [currentInput, setCurrentInput] = useState("");
  const [isCompleted, setIsCompleted] = useState(false);

  const currentCategoryData = categories[currentCategory];
  const progress = categories.length > 0 ? (currentCategory / categories.length) * 100 : 0;

  const handleStart = () => {
    const count = parseInt(selectedCount);
    setCategories(getRandomCategories(count));
    setHasStarted(true);
  };

  const handleAddItem = () => {
    if (currentInput.trim()) {
      setItems([...items, currentInput.trim()]);
      setCurrentInput("");
    }
  };

  const handleRemoveItem = (index: number) => {
    setItems(items.filter((_, i) => i !== index));
  };

  const handleNext = () => {
    if (currentCategory < categories.length - 1) {
      setCurrentCategory(currentCategory + 1);
      setItems([]);
      setCurrentInput("");
    } else {
      setIsCompleted(true);
    }
  };

  const handlePrevious = () => {
    if (currentCategory > 0) {
      setCurrentCategory(currentCategory - 1);
      setItems([]);
      setCurrentInput("");
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleAddItem();
    }
  };

  // Tela de seleção de quantidade de categorias
  if (!hasStarted) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-[hsl(var(--gradient-start))] via-[hsl(var(--gradient-middle))] to-[hsl(var(--gradient-end))] p-4 flex items-center justify-center">
        <Card className="max-w-md w-full bg-black/50 backdrop-blur-sm border-white/20">
          <CardHeader className="text-center">
            <CardTitle className="text-2xl text-white">Exercício de Categorias</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <p className="text-white text-center">
              Quantas categorias você gostaria de listar hoje?
            </p>
            
            <div className="space-y-3">
              <label className="text-white text-sm font-medium">
                Número de categorias:
              </label>
              <Select value={selectedCount} onValueChange={setSelectedCount}>
                <SelectTrigger className="bg-white/10 border-white/20 text-white">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent className="bg-black/90 border-white/20">
                  <SelectItem value="5" className="text-white hover:bg-white/10">5 categorias</SelectItem>
                  <SelectItem value="10" className="text-white hover:bg-white/10">10 categorias</SelectItem>
                  <SelectItem value="15" className="text-white hover:bg-white/10">15 categorias</SelectItem>
                  <SelectItem value="20" className="text-white hover:bg-white/10">20 categorias</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="flex flex-col gap-3">
              <Button onClick={handleStart} variant="default" className="w-full">
                Começar Exercício
              </Button>
              <Link to="/grounding">
                <Button variant="outline" className="w-full">
                  Voltar
                </Button>
              </Link>
            </div>
          </CardContent>
        </Card>
      </div>
    );
  }

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
              Parabéns! Você completou o exercício de categorias. 
              Esperamos que tenha ajudado a focar seus pensamentos e se sentir mais presente.
            </p>
            <div className="flex flex-col gap-4">
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
            <h1 className="text-xl font-semibold text-black/60">Exercício de Categorias</h1>
            <p className="text-sm text-black/60">
              Categoria {currentCategory + 1} de {categories.length}
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
            <CardTitle className="text-xl text-white">{currentCategoryData.title}</CardTitle>
            <p className="text-white">{currentCategoryData.description}</p>
          </CardHeader>
          <CardContent className="space-y-6">
            {/* Input Section */}
            <div className="flex gap-2">
              <Input
                value={currentInput}
                onChange={(e) => setCurrentInput(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder={currentCategoryData.placeholder}
                className="flex-1 bg-white/10 border-white/20 text-white placeholder:text-white/60"
              />
              <Button
                onClick={handleAddItem}
                disabled={!currentInput.trim()}
                size="icon"
              >
                <Plus className="h-4 w-4" />
              </Button>
            </div>

            {/* Items List */}
            <div className="space-y-2 max-h-60 overflow-y-auto">
              {items.map((item, index) => (
                <div
                  key={index}
                  className="flex items-center justify-between bg-white/10 rounded-lg p-3 animate-fade-in"
                >
                  <span className="text-white">{item}</span>
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => handleRemoveItem(index)}
                    className="h-6 w-6 text-white/60 hover:text-white"
                  >
                    <X className="h-4 w-4" />
                  </Button>
                </div>
              ))}
            </div>

            {items.length > 0 && (
              <div className="text-center text-sm text-white">
                {items.length} {items.length === 1 ? 'item listado' : 'itens listados'}
              </div>
            )}

            {items.length === 0 && (
              <div className="text-center text-white/60 py-8">
                Comece digitando e pressionando Enter ou clicando no botão +
              </div>
            )}
          </CardContent>
        </Card>

        {/* Navigation */}
        <div className="flex gap-3">
          <Button
            variant="outline"
            onClick={handlePrevious}
            disabled={currentCategory === 0}
            className="flex-1"
          >
            Anterior
          </Button>
          <Button
            onClick={handleNext}
            className="flex-1"
          >
            {currentCategory === categories.length - 1 ? 'Finalizar' : 'Próxima Categoria'}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default GroundingCategories;