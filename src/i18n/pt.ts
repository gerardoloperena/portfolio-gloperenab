export const pt = {
  translation: {
    common: {
      portfolio: 'Portfólio',
      home: 'Início',
      back: 'Voltar',
      close: 'Fechar',
      previous: 'Anterior',
      next: 'Seguinte',
      image: 'Imagem {{current}} de {{total}}',
      openProject: 'Ver detalhes de {{project}}',
      goHome: 'Voltar ao menu principal',
    },
    navigation: {
      projects: 'Projetos',
      experience: 'Experiência',
      about: 'Sobre mim',
      contact: 'Contato',
    },
    home: {
      greeting: 'Sou Gerardo Loperena Bustillos.\nMuito prazer!',
      introduction:
        'Desenvolvedor apaixonado por tecnologia com mais de quatro anos de experiência. Gosto de contribuir com valor e ideias em cada projeto :D.',
    },
    preferences: {
      hide: 'Ocultar opções',
      show: 'Mostrar opções',
      dark: 'Escuro',
      light: 'Claro',
      activateDark: 'Ativar tema escuro',
      activateLight: 'Ativar tema claro',
      effectsOn: 'Efeitos: sim',
      effectsOff: 'Efeitos: não',
      disableEffects: 'Desativar efeitos',
      enableEffects: 'Ativar efeitos',
      language: 'Idioma',
      chooseLanguage: 'Selecionar idioma',
    },
    projects: {
      title: 'Projetos',
      introduction:
        'Plataformas e sistemas que desenvolvi para a web e dispositivos móveis, aplicando diferentes tecnologias para resolver necessidades reais.',
      context: 'Contexto',
      contributions: 'Principais contribuições',
      technologies: 'Tecnologias',
      links: {
        title: 'Links',
        project: 'Ver projeto',
        repository: 'Ver repositório',
        reference: 'Página de referência',
      },
      colegeeks: {
        name: 'Colegeeks',
        role: 'Desenvolvedor Full Stack',
        description:
          'Sistema web para a administração de processos internos de escolas públicas e privadas. Liderei e desenvolvi o projeto como parte do meu trabalho na Edumedia TICS.',
        context: 'Edumedia TICS - Plataforma web e móvel',
        contributions: [
          'Desenvolvi projetos full stack com Laravel (módulos frontend e backend), React (dashboards e módulos analíticos) e Angular/Ionic (sistemas híbridos). Migrei um sistema legado desenvolvido em PHP para Laravel, modernizando sua arquitetura.',
          'Liderei o desenvolvimento completo de uma plataforma web, definindo arquitetura, stack tecnológico e estratégia de gestão de tarefas.',
          'Projetei uma aplicação móvel híbrida com Ionic como complemento do sistema web principal, focada em melhorar a experiência do usuário.',
        ],
      },
      confer: {
        name: 'Confer Control',
        role: 'Desenvolvedor Full Stack',
        description:
          'Sistema web para a gestão e administração de um sistema de votação de deputados. Participei ativamente da implementação de novos módulos, refatoração, testes, integração de hardware (telas, leitor de impressões digitais, reconhecimento facial e gerenciamento de microfones) e apresentações ao cliente.',
        context: 'Softbot - Sistema web de controle de votações',
        contributions: [
          'Desenvolvimento de módulos dinâmicos em React com hooks e componentes reutilizáveis.',
          'Desenvolvimento de microsserviços em Python utilizando Flask e Socket.',
          'Gerenciamento de PostgreSQL com campos JSONB e funções armazenadas.',
          'Preparação de ambientes Dockerizados para desenvolvimento e testes.',
          'Integração de APIs REST com autenticação segura baseada em tokens.',
        ],
      },
      valConnect: {
        name: '+Val Connect',
        role: 'Desenvolvedor web e mobile',
        description:
          'Sistema móvel multiplataforma para administrar e controlar o acesso a condomínios privados ou edifícios. Participei ativamente da criação de diferentes funcionalidades e módulos para a aplicação móvel.',
        context: 'Motorrax · Residência profissional · 2021',
        contributions: [
          'Desenvolvimento do sistema móvel multiplataforma +Val Connect.',
          'Implementação de funcionalidades com Ionic e Angular.',
          'Integração com backend desenvolvido em Laravel.',
          'Construção de componentes de interface responsivos com Bootstrap e SCSS.',
        ],
      },
      capasiti: {
        name: 'Plataforma CAPASITI',
        role: 'Desenvolvedor web',
        description:
          'Sistema administrativo e repositório digital implementado durante meu estágio na Subsecretaria de Inovação e Tecnologias da Informação.',
        context: 'Subsecretaria de Inovação e Tecnologias da Informação · 2019',
        contributions: [
          'Implementação do sistema de administração, controle e repositório da plataforma CAPASITI.',
          'Desenvolvimento e refatoração de funcionalidades existentes.',
          'Realização de testes e depuração para garantir o desempenho adequado.',
          'Gerenciamento da persistência de dados com MySQL.',
        ],
      },
      galleryUsb: {
        name: 'Galeria para USB',
        role: 'Desenvolvedor mobile',
        description:
          'Aplicativo Android para selecionar, visualizar e transferir imagens da galeria do dispositivo para memórias USB por meio de OTG. Desenvolvi o aplicativo de forma independente para otimizar e facilitar os processos de ensino da minha mãe.',
        context: 'Projeto móvel independente · Android',
        contributions: [
          'Seleção e visualização de imagens com controles de zoom.',
          'Cópia e verificação segura de arquivos por meio de USB OTG.',
          'Integração de módulos nativos com Kotlin e ContentResolver.',
          'Exploração e exclusão de imagens armazenadas na memória USB.',
          'Localização em oito idiomas e melhorias de acessibilidade.',
        ],
      },
    },
    experience: {
      title: 'Experiência Profissional',
      introduction:
        'Uma trajetória pelos times, produtos e desafios que marcaram meu crescimento profissional como desenvolvedor full stack.',
      concurrent: 'Experiência simultânea',
      items: {
        subsecretaria: {
          company: 'Subsecretaria de Inovação e Tecnologias da Informação',
          workplace: 'Ciudad Victoria, Tamaulipas',
          role: 'Desenvolvedor Web Júnior',
          summary:
            'Foi aqui que minha trajetória profissional começou, implementando melhorias no portal existente, novos módulos, métricas, refatoração e atualização de código.',
          highlights: [
            'Trabalhei em um sistema administrativo e repositório digital utilizando CakePHP e MySQL.',
            'Refatorei funcionalidades existentes para melhorar seu funcionamento e manutenção.',
            'Realizei testes e depuração para garantir um desempenho ideal.',
          ],
        },
        motorrax: {
          company: 'Motorrax',
          workplace: 'Remoto · Monterrey, Nuevo León',
          role: 'Desenvolvedor Web e Mobile',
          summary:
            'Trabalhei em um aplicativo multiplataforma, transformando necessidades operacionais em funcionalidades claras e fáceis de usar.',
          highlights: [
            'Implementei novas funcionalidades em aplicações híbridas desenvolvidas com Ionic e Angular.',
            'Trabalhei em um backend desenvolvido com Laravel.',
            'Construí componentes de interface responsivos utilizando Bootstrap e SCSS.',
          ],
        },
        eduMedia: {
          company: 'Edumedia TICS',
          workplace: 'Remoto · Ciudad Victoria, Tamaulipas',
          role: 'Desenvolvedor Web e Mobile Full Stack',
          summary:
            'Esta foi minha etapa profissional mais recente e extensa: participei de diferentes sistemas e também tive a oportunidade de liderar produtos completos desde o planejamento.',
          highlights: [
            'Desenvolvi projetos full stack utilizando Laravel para módulos frontend e backend, React para dashboards e módulos analíticos, e Angular e Ionic para sistemas híbridos.',
            'Migrei um sistema legado desenvolvido em PHP para Laravel, modernizando sua arquitetura.',
            'Liderei o desenvolvimento completo de uma plataforma web, definindo sua arquitetura, stack tecnológico e estratégia de gestão de tarefas.',
            'Projetei uma aplicação móvel híbrida com Ionic como complemento do sistema web principal, focada em melhorar a experiência do usuário final.',
          ],
        },
        softbot: {
          company: 'Softbot',
          workplace: 'Híbrido · Ciudad Victoria, Tamaulipas',
          role: 'Desenvolvedor Web Full Stack Freelance',
          summary:
            'Colaborei simultaneamente em um ambiente técnico diferente, trabalhando em módulos web, microsserviços, bancos de dados e integrações com hardware.',
          highlights: [
            'Desenvolvi diversos módulos em React utilizando hooks e componentes reutilizáveis.',
            'Trabalhei com microsserviços em Python utilizando Flask e Socket.',
            'Gerenciei PostgreSQL com campos JSONB e funções armazenadas.',
            'Implantei ambientes Dockerizados para desenvolvimento e testes.',
            'Integrei APIs REST com autenticação segura baseada em tokens.',
          ],
        },
      },
    },
    certificates: {
      title: 'Certificados',
      backToTop: 'Voltar ao início',
      introduction:
        'Como parte do meu crescimento profissional, concluí estes cursos para fortalecer meus conhecimentos e transformá-los em melhores resultados.',
      items: {
        aws: {
          name: 'AWS Cloud Practitioner Essentials',
          issuer: 'AWS Training & Certification',
        },
        googleUx: {
          name: 'Fundamentos do design da experiência do usuário (UX)',
          issuer: 'Certificado Profissional de Design UX do Google',
        },
        claudeCode: {
          name: 'Claude Code 101',
          issuer: 'Claude Academy',
        },
      },
    },
    about: {
      title: 'Sobre mim',
      heroAlt: 'Imagem de capa',
      introduction:
        'Sou entusiasta de tecnologia desde muito pequeno. Ainda no ensino fundamental, entrei no mundo da computação criando meus primeiros desenhos digitais e dando vida a eles quadro a quadro. Eu me considero uma pessoa alegre e divertida, sempre tentando fazer meus amigos, familiares e conhecidos sorrirem. As pessoas próximas a mim me consideram atencioso, inteligente, responsável e detalhista. Gosto de dar sempre o meu melhor para que meus resultados não sejam apenas funcionais, mas também visualmente atraentes para quem precisa deles.',
      hobbies: {
        title: 'Meus passatempos favoritos',
        items: {
          videoGames: {
            title: 'Videogames',
            description:
              'Gosto de jogar videogame com amigos e/ou com meu irmão. Adoro Valorant, um jogo de tiro tático, jogos de quebra-cabeça como Escape Simulator e outros jogos de aventura e plataforma como Sonic e Banjo-Kazooie.',
            imageAlt: 'Videogames favoritos',
          },
          music: {
            title: 'Música',
            description:
              'Meu gênero musical favorito é o rock. Gosto de ouvir bandas e artistas como Linkin Park, Bring Me The Horizon, Twenty One Pilots, Woodkid, entre outros.',
            imageAlt: 'Músicas e bandas favoritas',
          },
          seriesMovies: {
            title: 'Séries e filmes',
            description:
              'Adoro assistir a séries e filmes. Entre os meus favoritos estão O Mentalista, Breaking Bad, Dr. House, Sherlock Holmes, No Olho do Tornado, Re:Zero e Attack on Titan.',
            imageAlt: 'Séries e filmes favoritos',
          },
          travel: {
            title: 'Viajar',
            description:
              'Adoro conhecer novos lugares e apreciar suas paisagens. Já viajei para Guanajuato, San Juan de los Lagos, León e Monterrey. Um dos meus objetivos é morar por um tempo em Monterrey com meu irmão e, no futuro, viajar para o Japão com ele e meus amigos.',
            imageAlt: 'Viagens e lugares visitados',
          },
        },
      },
    },
    contact: {
      title: 'Contato',
      copyValue: 'Copiar {{label}}',
      valueCopied: '{{label}} copiado',
      introduction:
        'Aqui você encontrará meu cartão de contato com as principais formas de falar comigo.',
      role: 'Desenvolvedor Full Stack',
      cardLabel: 'Cartão de visita de Gerardo Loperena Bustillos',
      linkedin: 'Perfil do LinkedIn',
      whatsapp: 'Telefone / WhatsApp',
      email: 'E-mail',
      openLinkedin: 'Abrir perfil do LinkedIn',
      openWhatsapp: 'Iniciar conversa pelo WhatsApp',
      openEmail: 'Escrever um e-mail',
      line: 'LINE',
      wechat: 'WeChat',
      openLineContact: 'Mostrar contato do LINE',
      openWechatContact: 'Mostrar contato do WeChat',
      digitalContact: 'Contato digital',
      qrDescription: 'Escaneie o código QR ou use o ID para me adicionar no {{service}}.',
      accountId: 'ID de usuário',
      copyId: 'Copiar ID',
      copiedId: 'ID copiado',
      openLineProfile: 'Abrir perfil do LINE',
      lineQrAlt: 'Código QR do LINE de Gerardo Loperena',
      wechatQrAlt: 'Código QR do WeChat de Gerardo Loperena',
    },
    sections: {
      experience: 'Minha experiência profissional e trajetória aparecerão aqui.',
      about: 'Conheça mais sobre mim, minhas habilidades e minha forma de trabalhar.',
      contact: 'As formas de entrar em contato comigo aparecerão aqui.',
      pending: 'O conteúdo desta seção será adicionado na próxima etapa.',
    },
  },
} as const
