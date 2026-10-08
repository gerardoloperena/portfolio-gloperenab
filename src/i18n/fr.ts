export const fr = {
  translation: {
    common: {
      portfolio: 'Portfolio',
      home: 'Accueil',
      back: 'Retour',
      close: 'Fermer',
      previous: 'Précédent',
      next: 'Suivant',
      image: 'Image {{current}} sur {{total}}',
      openProject: 'Voir les détails de {{project}}',
      goHome: 'Retourner au menu principal',
    },
    navigation: {
      projects: 'Projets',
      experience: 'Expérience',
      about: 'À propos',
      contact: 'Contact',
    },
    home: {
      greeting: 'Je suis Gerardo Loperena Bustillos.\nEnchanté !',
      introduction:
        "Développeur passionné par la technologie avec plus de quatre ans d'expérience. J'aime apporter de la valeur et des idées à chaque projet :D.",
    },
    preferences: {
      hide: 'Masquer les options',
      show: 'Afficher les options',
      dark: 'Sombre',
      light: 'Clair',
      activateDark: 'Activer le thème sombre',
      activateLight: 'Activer le thème clair',
      effectsOn: 'Effets : oui',
      effectsOff: 'Effets : non',
      disableEffects: 'Désactiver les effets',
      enableEffects: 'Activer les effets',
      language: 'Langue',
      chooseLanguage: 'Choisir la langue',
    },
    projects: {
      title: 'Projets',
      introduction:
        'Des plateformes et des systèmes que j’ai développés pour le web et les appareils mobiles, en utilisant différentes technologies pour répondre à des besoins réels.',
      context: 'Contexte',
      contributions: 'Contributions principales',
      technologies: 'Technologies',
      links: {
        title: 'Liens',
        project: 'Voir le projet',
        repository: 'Voir le dépôt',
        reference: 'Page de référence',
      },
      colegeeks: {
        name: 'Colegeeks',
        role: 'Développeur Full Stack',
        description:
          'Système web destiné à la gestion des processus internes des établissements scolaires publics et privés. J’ai dirigé et développé ce projet dans le cadre de mon travail chez Edumedia TICS.',
        context: 'Edumedia TICS - Plateforme web et mobile',
        contributions: [
          'J’ai développé des projets full stack avec Laravel (modules frontend et backend), React (tableaux de bord et modules analytiques) et Angular/Ionic (systèmes hybrides). J’ai migré un système legacy développé en PHP vers Laravel, modernisant ainsi son architecture.',
          'J’ai dirigé le développement complet d’une plateforme web en définissant son architecture, sa stack technologique et sa stratégie de gestion des tâches.',
          'J’ai conçu une application mobile hybride avec Ionic pour compléter le système web principal, en mettant l’accent sur l’amélioration de l’expérience utilisateur.',
        ],
      },
      confer: {
        name: 'Confer Control',
        role: 'Développeur Full Stack',
        description:
          'Système web de gestion et d’administration d’un système de vote parlementaire. J’ai activement participé à l’implémentation de nouveaux modules, à la refactorisation, aux tests, à l’intégration de matériel (écrans, lecteur d’empreintes digitales, reconnaissance faciale et gestion des microphones) ainsi qu’aux présentations au client.',
        context: 'Softbot - Système web de contrôle des votes',
        contributions: [
          'Développement de modules dynamiques en React avec des hooks et des composants réutilisables.',
          'Développement de microservices en Python avec Flask et Socket.',
          'Gestion de PostgreSQL avec des champs JSONB et des fonctions stockées.',
          'Préparation d’environnements Dockerisés pour le développement et les tests.',
          'Intégration d’API REST avec une authentification sécurisée par jetons.',
        ],
      },
      valConnect: {
        name: '+Val Connect',
        role: 'Développeur web et mobile',
        description:
          'Système mobile multiplateforme pour la gestion et le contrôle des accès aux résidences privées ou aux immeubles. J’ai activement participé à la création de différentes fonctionnalités et de différents modules pour l’application mobile.',
        context: 'Motorrax · Stage professionnel · 2021',
        contributions: [
          'Développement du système mobile multiplateforme +Val Connect.',
          'Implémentation de fonctionnalités avec Ionic et Angular.',
          'Intégration avec un backend développé en Laravel.',
          'Création de composants d’interface responsifs avec Bootstrap et SCSS.',
        ],
      },
      capasiti: {
        name: 'Plateforme CAPASITI',
        role: 'Développeur web',
        description:
          'Système administratif et dépôt numérique mis en œuvre durant mon stage au Sous-secrétariat à l’innovation et aux technologies de l’information.',
        context: 'Sous-secrétariat à l’innovation et aux technologies de l’information · 2019',
        contributions: [
          'Mise en œuvre du système d’administration, de contrôle et de dépôt de la plateforme CAPASITI.',
          'Développement et refactorisation de fonctionnalités existantes.',
          'Réalisation de tests et de débogage afin de garantir des performances optimales.',
          'Gestion de la persistance des données avec MySQL.',
        ],
      },
      galleryUsb: {
        name: 'Galerie vers USB',
        role: 'Développeur mobile',
        description:
          'Application Android permettant de sélectionner, visualiser et transférer des images de la galerie de l’appareil vers une mémoire USB grâce à OTG. Je l’ai développée de manière indépendante afin d’optimiser et de faciliter les activités pédagogiques de ma mère.',
        context: 'Projet mobile indépendant · Android',
        contributions: [
          'Sélection et visualisation d’images avec contrôles de zoom.',
          'Copie et vérification sécurisées des fichiers grâce à USB OTG.',
          'Intégration de modules natifs avec Kotlin et ContentResolver.',
          'Exploration et suppression des images stockées sur la mémoire USB.',
          'Localisation en huit langues et améliorations de l’accessibilité.',
        ],
      },
    },
    experience: {
      title: 'Expérience Professionnelle',
      introduction:
        'Un parcours à travers les équipes, les produits et les défis qui ont façonné mon évolution professionnelle en tant que développeur full stack.',
      concurrent: 'Expérience simultanée',
      items: {
        subsecretaria: {
          company: 'Sous-secrétariat à l’innovation et aux technologies de l’information',
          workplace: 'Ciudad Victoria, Tamaulipas',
          role: 'Développeur Web Junior',
          summary:
            'C’est ici que mon parcours professionnel a commencé, avec l’amélioration d’un portail existant, de nouveaux modules, des métriques, de la refactorisation et des mises à jour du code.',
          highlights: [
            'J’ai travaillé sur un système administratif et un dépôt numérique avec CakePHP et MySQL.',
            'J’ai refactorisé des fonctionnalités existantes afin d’améliorer leur fonctionnement et leur maintenance.',
            'J’ai réalisé des tests et du débogage pour garantir des performances optimales.',
          ],
        },
        motorrax: {
          company: 'Motorrax',
          workplace: 'À distance · Monterrey, Nuevo León',
          role: 'Développeur Web et Mobile',
          summary:
            'J’ai travaillé sur une application multiplateforme, en transformant des besoins opérationnels en fonctionnalités claires et simples à utiliser.',
          highlights: [
            'J’ai implémenté de nouvelles fonctionnalités dans des applications hybrides développées avec Ionic et Angular.',
            'J’ai travaillé sur un backend développé avec Laravel.',
            'J’ai créé des composants d’interface responsifs avec Bootstrap et SCSS.',
          ],
        },
        eduMedia: {
          company: 'Edumedia TICS',
          workplace: 'À distance · Ciudad Victoria, Tamaulipas',
          role: 'Développeur Web et Mobile Full Stack',
          summary:
            'Il s’agit de mon expérience professionnelle la plus récente et la plus longue : j’ai participé à plusieurs systèmes et eu l’occasion de diriger des produits complets dès leur planification.',
          highlights: [
            'J’ai développé des projets full stack avec Laravel pour les modules frontend et backend, React pour les tableaux de bord et les modules analytiques, ainsi qu’Angular et Ionic pour les systèmes hybrides.',
            'J’ai migré un système legacy développé en PHP vers Laravel, modernisant ainsi son architecture.',
            'J’ai dirigé le développement complet d’une plateforme web en définissant son architecture, sa stack technologique et sa stratégie de gestion des tâches.',
            'J’ai conçu une application mobile hybride avec Ionic comme complément du système web principal, en mettant l’accent sur l’amélioration de l’expérience de l’utilisateur final.',
          ],
        },
        softbot: {
          company: 'Softbot',
          workplace: 'Hybride · Ciudad Victoria, Tamaulipas',
          role: 'Développeur Web Full Stack Freelance',
          summary:
            'J’ai collaboré simultanément dans un environnement technique différent, en travaillant sur des modules web, des microservices, des bases de données et des intégrations matérielles.',
          highlights: [
            'J’ai développé plusieurs modules React avec des hooks et des composants réutilisables.',
            'J’ai travaillé avec des microservices Python utilisant Flask et Socket.',
            'J’ai géré PostgreSQL avec des champs JSONB et des fonctions stockées.',
            'J’ai déployé des environnements Dockerisés pour le développement et les tests.',
            'J’ai intégré des API REST avec une authentification sécurisée basée sur des jetons.',
          ],
        },
      },
    },
    certificates: {
      title: 'Certificats',
      backToTop: 'Revenir en haut',
      introduction:
        'Dans le cadre de mon évolution professionnelle, j’ai suivi ces cours afin de renforcer mes connaissances et de les traduire en meilleurs résultats.',
      items: {
        aws: {
          name: 'AWS Cloud Practitioner Essentials',
          issuer: 'AWS Training & Certification',
        },
        googleUx: {
          name: 'Fondements de la conception de l’expérience utilisateur (UX)',
          issuer: 'Certificat professionnel Google UX Design',
        },
        claudeCode: {
          name: 'Claude Code 101',
          issuer: 'Claude Academy',
        },
      },
    },
    about: {
      title: 'À propos de moi',
      heroAlt: 'Image de couverture',
      introduction:
        'Je suis passionné par la technologie depuis mon plus jeune âge. À l’école primaire, j’ai découvert le monde de l’informatique en réalisant mes premiers dessins numériques et en leur donnant vie image par image. Je me considère comme une personne joyeuse et amusante, qui cherche toujours à faire sourire ses amis, sa famille et ses connaissances. Mon entourage me considère comme quelqu’un d’attentionné, intelligent, responsable et minutieux. J’aime toujours donner le meilleur de moi-même afin que mes résultats soient non seulement fonctionnels, mais également attrayants pour ceux qui en ont besoin.',
      hobbies: {
        title: 'Mes loisirs préférés',
        items: {
          videoGames: {
            title: 'Jeux vidéo',
            description:
              'J’aime jouer aux jeux vidéo avec mes amis et/ou mon frère. J’adore Valorant, un jeu de tir tactique, les jeux de réflexion comme Escape Simulator, ainsi que les jeux d’aventure et de plateforme comme Sonic et Banjo-Kazooie.',
            imageAlt: 'Jeux vidéo préférés',
          },
          music: {
            title: 'Musique',
            description:
              'Mon genre musical préféré est le rock. J’aime écouter des groupes et des artistes comme Linkin Park, Bring Me The Horizon, Twenty One Pilots, Woodkid, entre autres.',
            imageAlt: 'Musique et groupes préférés',
          },
          seriesMovies: {
            title: 'Séries et films',
            description:
              'J’adore regarder des séries et des films. Parmi mes favoris figurent Mentalist, Breaking Bad, Dr House, Sherlock Holmes, Black Storm, Re:Zero et L’Attaque des Titans.',
            imageAlt: 'Séries et films préférés',
          },
          travel: {
            title: 'Voyager',
            description:
              'J’adore découvrir de nouveaux endroits et profiter de leurs paysages. J’ai voyagé à Guanajuato, San Juan de los Lagos, León et Monterrey. L’un de mes objectifs est de vivre quelque temps à Monterrey avec mon frère et, à l’avenir, de voyager au Japon avec lui et mes amis.',
            imageAlt: 'Voyages et lieux visités',
          },
        },
      },
    },
    contact: {
      title: 'Contact',
      copyValue: 'Copier {{label}}',
      valueCopied: '{{label}} copié',
      introduction:
        'Vous trouverez ici ma carte de contact avec les principaux moyens de communiquer avec moi.',
      role: 'Développeur Full Stack',
      cardLabel: 'Carte de visite de Gerardo Loperena Bustillos',
      linkedin: 'Profil LinkedIn',
      whatsapp: 'Téléphone / WhatsApp',
      email: 'E-mail',
      openLinkedin: 'Ouvrir le profil LinkedIn',
      openWhatsapp: 'Démarrer une conversation WhatsApp',
      openEmail: 'Rédiger un e-mail',
      line: 'LINE',
      wechat: 'WeChat',
      openLineContact: 'Afficher le contact LINE',
      openWechatContact: 'Afficher le contact WeChat',
      digitalContact: 'Contact numérique',
      qrDescription: 'Scannez le code QR ou utilisez l’identifiant pour m’ajouter sur {{service}}.',
      accountId: 'Identifiant utilisateur',
      copyId: 'Copier l’identifiant',
      copiedId: 'Identifiant copié',
      openLineProfile: 'Ouvrir le profil LINE',
      lineQrAlt: 'Code QR LINE de Gerardo Loperena',
      wechatQrAlt: 'Code QR WeChat de Gerardo Loperena',
    },
    sections: {
      experience: 'Mon expérience professionnelle et mon parcours apparaîtront ici.',
      about: 'Découvrez-moi, mes compétences et ma façon de travailler.',
      contact: 'Les différentes façons de me contacter apparaîtront ici.',
      pending: 'Le contenu de cette section sera ajouté à la prochaine étape.',
    },
  },
} as const
