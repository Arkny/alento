-- Criar tabela de diários de ansiedade
CREATE TABLE public.anxiety_diary_entries (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id UUID NOT NULL REFERENCES public.profiles(id) ON DELETE CASCADE,
  date DATE NOT NULL,
  time TEXT NOT NULL,
  duration TEXT NOT NULL,
  location TEXT NOT NULL,
  trigger TEXT NOT NULL,
  emotion TEXT NOT NULL,
  intensity INTEGER NOT NULL CHECK (intensity >= 1 AND intensity <= 10),
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Habilitar RLS
ALTER TABLE public.anxiety_diary_entries ENABLE ROW LEVEL SECURITY;

-- Políticas: Usuários podem ver apenas seus próprios diários
CREATE POLICY "Users can view their own anxiety diary entries"
ON public.anxiety_diary_entries
FOR SELECT
TO authenticated
USING (auth.uid() = user_id);

-- Políticas: Usuários podem criar seus próprios diários
CREATE POLICY "Users can create their own anxiety diary entries"
ON public.anxiety_diary_entries
FOR INSERT
TO authenticated
WITH CHECK (auth.uid() = user_id);

-- Políticas: Usuários podem atualizar seus próprios diários
CREATE POLICY "Users can update their own anxiety diary entries"
ON public.anxiety_diary_entries
FOR UPDATE
TO authenticated
USING (auth.uid() = user_id);

-- Políticas: Usuários podem deletar seus próprios diários
CREATE POLICY "Users can delete their own anxiety diary entries"
ON public.anxiety_diary_entries
FOR DELETE
TO authenticated
USING (auth.uid() = user_id);

-- Trigger para atualizar o campo updated_at automaticamente
CREATE TRIGGER update_anxiety_diary_entries_updated_at
BEFORE UPDATE ON public.anxiety_diary_entries
FOR EACH ROW
EXECUTE FUNCTION public.update_updated_at_column();

-- Criar índice para melhorar performance nas consultas por usuário
CREATE INDEX idx_anxiety_diary_entries_user_id ON public.anxiety_diary_entries(user_id);
CREATE INDEX idx_anxiety_diary_entries_date ON public.anxiety_diary_entries(date DESC);