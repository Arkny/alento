export interface Post {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  category: string;
  author: string;
  date: string;
  source?: string;
  tags: string[];
}

export const mockPosts: Post[] = [
  {
    id: "1",
    title: "5 Técnicas de Respiração para Reduzir a Ansiedade",
    excerpt: "Aprenda métodos simples e eficazes de respiração que podem ser usados em qualquer momento para acalmar a mente.",
    content: "A respiração é uma ferramenta poderosa para controlar a ansiedade. Aqui estão 5 técnicas que você pode usar: 1) Respiração 4-7-8: Inspire por 4, segure por 7, expire por 8. 2) Respiração quadrada: Inspire, segure, expire e pause por 4 tempos cada. 3) Respiração profunda: Foque em expandir o diafragma. 4) Respiração nasal alternada: Use uma narina por vez. 5) Respiração com visualização: Imagine um local calmo enquanto respira.",
    category: "Respiração",
    author: "Dr. Ana Silva",
    date: "15 de março, 2024",
    source: "Centro de Bem-Estar Mental",
    tags: ["respiração", "ansiedade", "técnicas", "calma"]
  },
  {
    id: "2",
    title: "Primeiros Socorros Emocionais em Momentos de Crise",
    excerpt: "Estratégias práticas para lidar com crises emocionais agudas e quando buscar ajuda profissional.",
    content: "Em momentos de crise emocional intensa, é importante ter estratégias imediatas: 1) PARE - Reconheça que está em crise. 2) RESPIRE - Use técnicas de respiração profunda. 3) OBSERVE - Identifique seus sentimentos sem julgamento. 4) AÇÃO - Escolha uma ação segura e positiva. 5) CONECTE-SE - Entre em contato com alguém de confiança. Lembre-se: crises são temporárias e você pode superá-las.",
    category: "Crise",
    author: "Psicóloga Maria Santos",
    date: "12 de março, 2024",
    source: "Instituto de Apoio Psicológico",
    tags: ["crise", "emergência", "primeiros socorros", "apoio"]
  },
  {
    id: "3",
    title: "Técnica de Grounding 5-4-3-2-1 para Ansiedade",
    excerpt: "Uma técnica sensorial simples para te trazer de volta ao momento presente durante episódios de ansiedade.",
    content: "A técnica 5-4-3-2-1 usa seus sentidos para te ancorar no presente: 5 coisas que você pode VER (olhe ao redor), 4 coisas que você pode TOCAR (textura de objetos), 3 coisas que você pode OUVIR (sons ao redor), 2 coisas que você pode CHEIRAR (aromas), 1 coisa que você pode SABOREAR. Esta técnica interrompe o ciclo de pensamentos ansiosos e te traz de volta ao agora.",
    category: "Ansiedade",
    author: "Dr. João Oliveira",
    date: "10 de março, 2024",
    source: "Clínica de Terapia Cognitiva",
    tags: ["ansiedade", "grounding", "presente", "técnica"]
  },
  {
    id: "4",
    title: "Práticas Diárias de Mindfulness para Iniciantes",
    excerpt: "Introdução às práticas de atenção plena que podem ser integradas facilmente à sua rotina diária.",
    content: "Mindfulness é sobre estar presente no momento atual. Comece com 5 minutos diários: 1) Respiração consciente - foque apenas na sua respiração. 2) Body scan - observe sensações no corpo sem julgamento. 3) Caminhada consciente - preste atenção em cada passo. 4) Alimentação mindful - saboreie cada mordida. 5) Meditação guiada - use apps ou vídeos. A prática regular reduz estresse e melhora o bem-estar.",
    category: "Mindfulness",
    author: "Instrutor Pedro Lima",
    date: "8 de março, 2024",
    source: "Centro de Meditação Zen",
    tags: ["mindfulness", "meditação", "presença", "bem-estar"]
  },
  {
    id: "5",
    title: "Sinais de Depressão e Quando Buscar Ajuda",
    excerpt: "Reconheça os sintomas da depressão e saiba quando é importante procurar apoio profissional.",
    content: "A depressão pode se manifestar de várias formas: tristeza persistente, perda de interesse em atividades, fadiga, alterações no sono/apetite, dificuldade de concentração, sentimentos de inutilidade. Se você sente 5+ sintomas por mais de 2 semanas, procure ajuda. Lembre-se: depressão é uma condição médica tratável, não é fraqueza. Terapia, medicação e mudanças no estilo de vida podem ajudar significativamente.",
    category: "Depressão",
    author: "Dra. Carla Mendes",
    date: "5 de março, 2024",
    source: "Hospital das Clínicas",
    tags: ["depressão", "sintomas", "ajuda", "tratamento"]
  },
  {
    id: "6",
    title: "Rotinas de Autocuidado para Dias Difíceis",
    excerpt: "Estratégias simples e práticas de autocuidado que você pode usar mesmo quando está se sentindo mal.",
    content: "Nos dias difíceis, o autocuidado básico é essencial: 1) Higiene mínima - banho rápido, escovação dos dentes. 2) Hidratação - beba água regularmente. 3) Alimentação gentil - algo nutritivo e simples. 4) Movimento suave - alongamento ou caminhada curta. 5) Conexão - mensagem para um amigo. 6) Descanso - permita-se relaxar. 7) Gratidão - liste 3 coisas pequenas pelas quais é grato. Pequenos atos importam.",
    category: "Autocuidado",
    author: "Terapeuta Sofia Rodrigues",
    date: "2 de março, 2024",
    source: "Espaço Terapêutico Acolher",
    tags: ["autocuidado", "rotina", "bem-estar", "gentileza"]
  },
  {
    id: "7",
    title: "Melhorando a Qualidade do Sono para Saúde Mental",
    excerpt: "A conexão entre sono e saúde mental, com dicas práticas para uma melhor higiene do sono.",
    content: "O sono é fundamental para a saúde mental. Dicas para melhorar: 1) Horário regular - durma e acorde no mesmo horário. 2) Ambiente ideal - escuro, silencioso e fresco. 3) Sem telas 1h antes de dormir. 4) Relaxamento - leitura, música suave ou meditação. 5) Evite cafeína após 14h. 6) Exercícios regulares, mas não à noite. 7) Journaling - escreva preocupações antes de dormir. Sono de qualidade melhora humor, concentração e resistência ao estresse.",
    category: "Sono",
    author: "Dr. Ricardo Tavares",
    date: "28 de fevereiro, 2024",
    source: "Instituto do Sono",
    tags: ["sono", "higiene", "saúde mental", "descanso"]
  },
  {
    id: "8",
    title: "Estabelecendo Limites Saudáveis nos Relacionamentos",
    excerpt: "Como comunicar suas necessidades e estabelecer limites de forma assertiva e respeitosa.",
    content: "Limites saudáveis protegem seu bem-estar mental: 1) Identifique suas necessidades e valores. 2) Comunique claramente - use 'eu' em vez de 'você'. 3) Seja consistente - mantenha os limites estabelecidos. 4) Não se justifique excessivamente. 5) Aceite que nem todos vão gostar. 6) Pratique o 'não' sem culpa. 7) Busque apoio quando necessário. Limites não são muros, são portas que você controla.",
    category: "Relacionamentos",
    author: "Psicóloga Luna Ferreira",
    date: "25 de fevereiro, 2024",
    source: "Clínica de Terapia Familiar",
    tags: ["limites", "relacionamentos", "comunicação", "assertividade"]
  },
  {
    id: "9",
    title: "Lidando com Burnout e Estresse no Trabalho",
    excerpt: "Estratégias para reconhecer, prevenir e lidar com o esgotamento profissional.",
    content: "Burnout é o esgotamento físico e mental causado pelo trabalho. Sinais: exaustão constante, cinismo, redução da eficácia. Estratégias: 1) Pausas regulares durante o dia. 2) Defina limites entre trabalho e vida pessoal. 3) Delegue quando possível. 4) Pratique técnicas de relaxamento. 5) Busque apoio da equipe/supervisor. 6) Reavalie prioridades e metas. 7) Considere mudanças necessárias. Sua saúde mental vale mais que qualquer trabalho.",
    category: "Trabalho",
    author: "Coach Andrea Costa",
    date: "22 de fevereiro, 2024",
    source: "Centro de Desenvolvimento Profissional",
    tags: ["burnout", "trabalho", "estresse", "equilíbrio"]
  },
  {
    id: "10",
    title: "Números de Emergência e Onde Buscar Ajuda",
    excerpt: "Lista de recursos de apoio e números de emergência para momentos de crise em saúde mental.",
    content: "RECURSOS DE EMERGÊNCIA: • CVV (Centro de Valorização da Vida): 188 - 24h gratuito • CAPS (Centro de Atenção Psicossocial): procure o mais próximo • SAMU: 192 • Bombeiros: 193 • Polícia: 190. ONLINE: • Mapa da Saúde Mental (mapasaudemental.com.br) • Terapia online gratuita. APPS: Querido Diário, Sanvello, Calm. LEMBRE-SE: Buscar ajuda é um ato de coragem, não de fraqueza. Você não está sozinho.",
    category: "Emergência",
    author: "Equipe de Apoio",
    date: "20 de fevereiro, 2024",
    source: "Rede de Apoio Mental",
    tags: ["emergência", "ajuda", "recursos", "apoio"]
  },
  {
    id: "11",
    title: "Exercícios de Respiração 4-7-8 para Dormir",
    excerpt: "Uma técnica simples de respiração que pode ajudar você a adormecer mais rapidamente.",
    content: "A técnica 4-7-8 é excelente para induzir o sono: 1) Expire completamente pela boca. 2) Feche a boca e inspire pelo nariz contando até 4. 3) Segure a respiração contando até 7. 4) Expire pela boca contando até 8, fazendo um som suave. 5) Repita o ciclo 3-4 vezes. Esta técnica ativa o sistema nervoso parassimpático, promovendo relaxamento e sono.",
    category: "Respiração",
    author: "Dr. Paulo Mendes",
    date: "18 de fevereiro, 2024",
    source: "Clínica do Sono",
    tags: ["respiração", "sono", "relaxamento", "4-7-8"]
  },
  {
    id: "12",
    title: "Ataques de Pânico: Como Reconhecer e Lidar",
    excerpt: "Entenda os sintomas dos ataques de pânico e aprenda estratégias para gerenciá-los.",
    content: "Ataques de pânico são episódios súbitos de medo intenso. Sintomas: palpitações, sudorese, tremores, falta de ar, sensação de desmaio. DURANTE O ATAQUE: 1) Respire lentamente. 2) Use técnica 5-4-3-2-1. 3) Lembre-se: é temporário e não é perigoso. 4) Não lute contra - aceite a sensação. PREVENÇÃO: exercícios regulares, redução de cafeína, técnicas de relaxamento, terapia cognitivo-comportamental.",
    category: "Ansiedade",
    author: "Dra. Fernanda Lima",
    date: "15 de fevereiro, 2024",
    source: "Centro de Transtornos de Ansiedade",
    tags: ["pânico", "ansiedade", "ataques", "estratégias"]
  }
];

export const categories = [
  { id: "all", name: "Tudo" },
  { id: "Ansiedade", name: "Ansiedade" },
  { id: "Depressão", name: "Depressão" },
  { id: "Crise", name: "Crise" },
  { id: "Respiração", name: "Respiração" },
  { id: "Mindfulness", name: "Mindfulness" },
  { id: "Autocuidado", name: "Autocuidado" },
  { id: "Sono", name: "Sono" },
  { id: "Relacionamentos", name: "Relacionamentos" },
  { id: "Trabalho", name: "Trabalho" },
  { id: "Emergência", name: "Emergência" }
];