import { Post } from "@/components/PostCard";

export const mockPosts: Post[] = [
  {
    id: "1",
    title: "Departamento de Saúde Mental, Álcool e outras Drogas",
    excerpt: "O Departamento de Saúde Mental, Álcool e outras Drogas (Desmad) integra a Secretaria de Atenção Especializada do Ministério da Saúde (SAES) e tem como competência...",
    content: `O Departamento de Saúde Mental, Álcool e outras Drogas (Desmad) integra a Secretaria de Atenção Especializada do Ministério da Saúde (SAES) e tem como competência o desenvolvimento de políticas, diretrizes e ações de atenção à saúde mental, incluindo a prevenção, tratamento e reabilitação de pessoas com transtornos mentais e com problemas relacionados ao uso de álcool e outras drogas.

O departamento trabalha na elaboração de normas técnicas, protocolos clínicos e diretrizes terapêuticas para a atenção em saúde mental, coordenando ações intersetoriais e promovendo a integração entre os diferentes níveis de atenção à saúde.

Principais ações:
- Desenvolvimento de políticas públicas em saúde mental
- Coordenação da Rede de Atenção Psicossocial (RAPS)
- Apoio técnico aos estados e municípios
- Monitoramento e avaliação dos serviços de saúde mental
- Promoção de ações de prevenção e promoção da saúde mental`,
    category: "Mental",
    author: "gov.br",
    date: "2024-01-15",
    source: "Ministério da Saúde",
    tags: ["saúde mental", "políticas públicas", "SUS", "RAPS"]
  },
  {
    id: "2",
    title: "Novo Marco Legal da Educação Especial",
    excerpt: "O governo federal apresentou o novo marco legal para a educação especial, estabelecendo diretrizes para garantir o acesso e a permanência de estudantes com deficiência...",
    content: `O governo federal apresentou o novo marco legal para a educação especial, estabelecendo diretrizes para garantir o acesso e a permanência de estudantes com deficiência, transtornos globais do desenvolvimento e altas habilidades ou superdotação nas escolas regulares.

O marco legal reforça os princípios da educação inclusiva e estabelece novas diretrizes para:

Formação de professores:
- Capacitação continuada em educação especial
- Metodologias adaptadas de ensino
- Uso de tecnologias assistivas

Estrutura escolar:
- Adaptação de espaços físicos
- Recursos pedagógicos especializados
- Atendimento educacional especializado (AEE)

Avaliação e acompanhamento:
- Planos educacionais individualizados
- Sistemas de monitoramento do progresso
- Parceria com famílias e profissionais especializados

Esta iniciativa visa garantir que todos os estudantes tenham oportunidades equitativas de aprendizagem e desenvolvimento.`,
    category: "Educação",
    author: "MEC",
    date: "2024-01-12",
    source: "Ministério da Educação",
    tags: ["educação especial", "inclusão", "acessibilidade", "direitos"]
  },
  {
    id: "3",
    title: "Programa de Fortalecimento da Atenção Básica",
    excerpt: "Lançamento de programa nacional para fortalecer a atenção básica em saúde, com foco na ampliação da cobertura e melhoria da qualidade dos serviços...",
    content: `O Ministério da Saúde lançou o Programa de Fortalecimento da Atenção Básica (PFAB), uma iniciativa que visa ampliar a cobertura e melhorar a qualidade dos serviços de atenção primária à saúde em todo o país.

Objetivos principais:
- Aumentar a cobertura da Estratégia Saúde da Família
- Qualificar os profissionais da atenção básica
- Modernizar a infraestrutura das unidades de saúde
- Implementar sistemas de informação integrados

Investimentos previstos:
- R$ 2,5 bilhões para expansão da rede
- Contratação de 15.000 novos profissionais
- Reforma e construção de 800 unidades básicas de saúde
- Aquisição de equipamentos médicos modernos

Benefícios esperados:
- Redução das filas de espera
- Melhoria no acesso aos serviços preventivos
- Fortalecimento da medicina de família e comunidade
- Integração com outros níveis de atenção

O programa será implementado em parceria com estados e municípios, priorizando regiões com maior vulnerabilidade social e menor cobertura assistencial.`,
    category: "Mental",
    author: "Ministério da Saúde",
    date: "2024-01-10",
    source: "Portal da Saúde",
    tags: ["atenção básica", "SUS", "saúde da família", "investimento"]
  },
  {
    id: "4",
    title: "Plataforma Digital de Aprendizagem para Ensino Médio",
    excerpt: "Nova plataforma oferece recursos digitais complementares para estudantes do ensino médio, com conteúdos interativos e ferramentas de apoio ao aprendizado...",
    content: `O Ministério da Educação lançou uma nova plataforma digital de aprendizagem destinada a estudantes do ensino médio de escolas públicas, oferecendo recursos educacionais complementares e inovadores.

Características da plataforma:
- Conteúdos multimídia interativos
- Simulados e exercícios adaptativos
- Videoaulas com professores especialistas
- Ferramentas de acompanhamento do progresso
- Gamificação do processo de aprendizagem

Áreas de conhecimento contempladas:
- Linguagens e suas tecnologias
- Matemática e suas tecnologias
- Ciências da natureza e suas tecnologias
- Ciências humanas e sociais aplicadas

Funcionalidades especiais:
- Trilhas de aprendizagem personalizadas
- Inteligência artificial para recomendação de conteúdos
- Fóruns de discussão entre estudantes
- Mentoria virtual com tutores
- Preparação para o ENEM

A plataforma está disponível gratuitamente para todos os estudantes do ensino médio público e pode ser acessada via web ou aplicativo móvel.`,
    category: "Educação",
    author: "FNDE",
    date: "2024-01-08",
    source: "Fundo Nacional de Desenvolvimento da Educação",
    tags: ["tecnologia educacional", "ensino médio", "ENEM", "digital"]
  },
  {
    id: "5",
    title: "Campanha Nacional de Prevenção ao Suicídio",
    excerpt: "Iniciativa do governo federal promove ações de conscientização e prevenção ao suicídio, com foco na identificação precoce de sinais de risco...",
    content: `O Ministério da Saúde lançou a Campanha Nacional de Prevenção ao Suicídio, uma iniciativa abrangente que visa reduzir os índices de suicídio no país através de ações de conscientização, prevenção e apoio.

Pilares da campanha:

Conscientização:
- Campanhas publicitárias em mídias tradicionais e digitais
- Materiais educativos para escolas e comunidades
- Capacitação de profissionais de diferentes setores
- Desmistificação de tabus sobre saúde mental

Prevenção:
- Identificação precoce de sinais de risco
- Treinamento para profissionais de saúde
- Protocolos de atendimento em situações de crise
- Fortalecimento da rede de apoio psicossocial

Apoio:
- Ampliação do Centro de Valorização da Vida (CVV)
- Criação de novos centros de apoio psicossocial
- Implementação de serviços de emergência especializados
- Suporte às famílias e comunidades afetadas

A campanha "Vida é a Melhor Escolha" contará com a participação de artistas, influenciadores e personalidades públicas para amplificar a mensagem de valorização da vida e busca por ajuda profissional.`,
    category: "Mental",
    author: "Ministério da Saúde",
    date: "2024-01-05",
    source: "Secretaria de Atenção Primária à Saúde",
    tags: ["prevenção", "suicídio", "saúde mental", "campanha", "CVV"]
  },
  {
    id: "6",
    title: "Programa Mais Alfabetização 2024",
    excerpt: "Governo federal anuncia expansão do programa de alfabetização com novas metodologias e recursos para reduzir os índices de analfabetismo no país...",
    content: `O governo federal anunciou a expansão do Programa Mais Alfabetização para 2024, com novas metodologias e investimentos significativos para combater o analfabetismo e melhorar os índices de alfabetização em todo o país.

Principais mudanças:

Metodologia atualizada:
- Incorporação de métodos fônicos e construtivistas
- Uso de tecnologias digitais no processo de alfabetização
- Materiais didáticos renovados e contextualizados
- Formação específica para alfabetizadores

Expansão do programa:
- Atendimento a 2 milhões de estudantes
- Parceria com 3.500 municípios
- Contratação de 25.000 novos alfabetizadores
- Criação de 1.000 novos pontos de atendimento

Recursos e investimentos:
- R$ 1,8 bilhão em investimentos diretos
- Bolsas para alfabetizadores e coordenadores
- Aquisição de materiais didáticos modernos
- Infraestrutura tecnológica para unidades

Metas para 2024:
- Reduzir em 50% o analfabetismo funcional
- Aumentar em 30% os índices de proficiência em leitura
- Formar 100.000 novos leitores fluentes
- Implementar avaliação contínua do progresso

O programa priorizará regiões Norte e Nordeste, onde os índices de analfabetismo ainda são mais elevados.`,
    category: "Educação",
    author: "Secretaria de Alfabetização",
    date: "2024-01-03",
    source: "Ministério da Educação",
    tags: ["alfabetização", "educação básica", "analfabetismo", "metodologia"]
  }
];

export const categories = [
  { id: "all", name: "Tudo" },
  { id: "Educação", name: "Educação" },
  { id: "Mental", name: "Mental" }
];