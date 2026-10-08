export const es = {
  translation: {
    common: {
      portfolio: 'Portafolio',
      home: 'Inicio',
      back: 'Regresar',
      close: 'Cerrar',
      previous: 'Anterior',
      next: 'Siguiente',
      image: 'Imagen {{current}} de {{total}}',
      openProject: 'Ver detalles de {{project}}',
      goHome: 'Volver al menú principal',
    },
    navigation: {
      projects: 'Proyectos',
      experience: 'Experiencia',
      about: 'Acerca de mí',
      contact: 'Contacto',
    },
    home: {
      greeting: 'Soy Gerardo Loperena Bustillos.\n¡Mucho gusto!',
      introduction:
        'Programador apasionado de la tecnología con más de 4 años de experiencia. Me encanta aportar gran valor e ideas a los proyectos en los que participo :D.',
    },
    preferences: {
      hide: 'Ocultar opciones',
      show: 'Mostrar opciones',
      dark: 'Oscuro',
      light: 'Claro',
      activateDark: 'Activar tema oscuro',
      activateLight: 'Activar tema claro',
      effectsOn: 'Efectos: sí',
      effectsOff: 'Efectos: no',
      disableEffects: 'Desactivar efectos',
      enableEffects: 'Activar efectos',
      language: 'Idioma',
      chooseLanguage: 'Seleccionar idioma',
    },
    projects: {
      title: 'Proyectos',
      introduction:
        'Plataformas y sistemas que he construido para la web y dispositivos móviles, aplicando distintas tecnologías para resolver necesidades reales.',
      context: 'Contexto',
      contributions: 'Contribuciones principales',
      technologies: 'Tecnologías',
      links: {
        title: 'Enlaces',
        project: 'Ver proyecto',
        repository: 'Ver repositorio',
        reference: 'Página de referencia',
      },
      colegeeks: {
        name: 'Colegeeks',
        role: 'Desarrollador Full Stack',
        description:
          'Sistema web para la administración de procesos internos de escuelas públicas y privadas. Proyecto liderado y desarrollado por mí como parte de mi trabajo en Edumedia TICS.',
        context: 'Edumedia TICS - Plataforma web y móvil',
        contributions: [
          'Desarrollé proyectos fullstack con Laravel (módulos frontend y backend), React (dashboards y módulos analíticos) y Angular/Ionic (sistemas híbridos). Migré un sistema legacy desarrollado en PHP a Laravel, modernizando su arquitectura.',
          'Lideré el desarrollo completo de una plataforma web, definiendo arquitectura, stack tecnológico y estrategia de gestión de tareas.',
          'Diseñé una aplicación móvil híbrida con Ionic como complemento del sistema web principal, enfocada en mejorar la experiencia de usuario.',
        ],
      },
      confer: {
        name: 'Confer Control',
        role: 'Desarrollador Full Stack',
        description:
          'Sistema web para la gestión y administración de un sistema de votaciones de diputados. Participé de forma activa en la implementación de nuevos módulos, refactorización, testing, integración de hardware (pantallas, lector de huellas, reconocimiento facial, administración de micrófonos) y presentaciones a cliente.',
        context: 'Softbot - Sistema web de control de votaciones',
        contributions: [
          'Desarrollo de módulos dinámicos en React con hooks y componentes reutilizables.',
          'Desarrollo de microservicios en Python utilizando Flask y Socket.',
          'Gestión de PostgreSQL con campos JSONB y funciones almacenadas.',
          'Preparación de entornos Dockerizados para desarrollo y pruebas.',
          'Integración de APIs REST con autenticación segura basada en tokens.',
        ],
      },
      valConnect: {
        name: '+Val Connect',
        role: 'Desarrollador web y móvil',
        description:
          'Sistema móvil multiplataforma para la administración y el control de accesos de residencias privadas o edificios. Participé de forma activa en la creación de distintas funcionalidades y módulos para la aplicación móvil.',
        context: 'Motorrax · Estadías profesionales · 2021',
        contributions: [
          'Desarrollo del sistema móvil multiplataforma +Val Connect.',
          'Implementación de funcionalidades en Ionic y Angular.',
          'Integración con backend desarrollado en Laravel.',
          'Construcción de componentes de interfaz responsivos con Bootstrap y SCSS.',
        ],
      },
      capasiti: {
        name: 'Plataforma CAPASITI',
        role: 'Desarrollador web',
        description:
          'Sistema administrativo y repositorio digital implementado durante mis prácticas profesionales en la Subsecretaría de Innovación y Tecnologías de la Información.',
        context: 'Subsecretaría de Innovación y Tecnologías de la Información · 2019',
        contributions: [
          'Implementación del sistema de administración, control y repositorio de la plataforma CAPASITI.',
          'Desarrollo y refactorización de características existentes.',
          'Pruebas y depuración para asegurar un rendimiento óptimo.',
          'Gestión de la persistencia de datos mediante MySQL.',
        ],
      },
      galleryUsb: {
        name: 'Galería a USB',
        role: 'Desarrollador móvil',
        description:
          'Aplicación Android para seleccionar, visualizar y transferir imágenes desde la galería del dispositivo hacia memorias USB mediante OTG. Aplicación desarrollada de manera independiente para optimizar y facilitar los procesos docentes de mi madre.',
        context: 'Proyecto móvil independiente · Android',
        contributions: [
          'Selección y previsualización de imágenes con controles de zoom.',
          'Copia y verificación segura de archivos mediante USB OTG.',
          'Integración de módulos nativos con Kotlin y ContentResolver.',
          'Exploración y eliminación de imágenes almacenadas en la memoria USB.',
          'Localización en ocho idiomas y mejoras de accesibilidad.',
        ],
      },
    },
    experience: {
      title: 'Experiencia Profesional',
      introduction:
        'Un recorrido por los equipos, productos y retos que han marcado mi crecimiento profesional como desarrollador fullstack.',
      concurrent: 'Experiencia simultánea',
      items: {
        subsecretaria: {
          company: 'Subsecretaría de Innovación y Tecnologías de la Información',
          workplace: 'Ciudad Victoria, Tamaulipas',
          role: 'Desarrollador Web Junior',
          summary:
            'Aquí comenzó mi experiencia profesional, implementando mejoras en el portal ya existente, nuevos módulos, métricas, refactorización y actualización de código.',
          highlights: [
            'Trabajé sobre un sistema administrativo y repositorio digital utilizando CakePHP y MySQL.',
            'Refactoricé características existentes para mejorar su funcionamiento y mantenimiento.',
            'Realicé pruebas y depuración para asegurar un rendimiento óptimo.',
          ],
        },
        motorrax: {
          company: 'Motorrax',
          workplace: 'Remoto · Monterrey, Nuevo León',
          role: 'Desarrollador Web y Móvil',
          summary:
            'Trabajé en una app multiplataforma, convirtiendo necesidades operativas en funcionalidades claras y fáciles de utilizar.',
          highlights: [
            'Implementé nuevas funcionalidades en aplicaciones híbridas desarrolladas con Ionic y Angular.',
            'Trabajé en backend desarrollado con Laravel.',
            'Construí componentes de interfaz responsivos utilizando Bootstrap y SCSS.',
          ],
        },
        eduMedia: {
          company: 'Edumedia TICS',
          workplace: 'Remoto · Ciudad Victoria, Tamaulipas',
          role: 'Desarrollador Web y Móvil Full Stack',
          summary:
            'Fue mi etapa profesional más reciente y extensa: participé en distintos sistemas y también tuve la oportunidad de liderar productos completos desde su planeación.',
          highlights: [
            'Desarrollé proyectos fullstack con Laravel para módulos frontend y backend, React para dashboards y módulos analíticos, y Angular e Ionic para sistemas híbridos.',
            'Migré un sistema legacy desarrollado en PHP a Laravel, modernizando su arquitectura.',
            'Lideré el desarrollo completo de una plataforma web, definiendo arquitectura, stack tecnológico y estrategia de gestión de tareas.',
            'Diseñé una aplicación móvil híbrida con Ionic como complemento del sistema web principal, enfocada en mejorar la experiencia del usuario final.',
          ],
        },
        softbot: {
          company: 'Softbot',
          workplace: 'Híbrido · Ciudad Victoria, Tamaulipas',
          role: 'Desarrollador Web Full Stack Freelance',
          summary:
            'Colaboré de manera simultánea en un entorno técnico distinto, participando en módulos web, microservicios, bases de datos e integraciones con hardware.',
          highlights: [
            'Desarrollé diversos módulos en React utilizando hooks y componentes reutilizables.',
            'Trabajé con microservicios en Python utilizando Flask y Socket.',
            'Gestioné PostgreSQL con campos JSONB y funciones almacenadas.',
            'Desplegué entornos Dockerizados para desarrollo y pruebas.',
            'Integré APIs REST con autenticación segura basada en tokens.',
          ],
        },
      },
    },
    certificates: {
      title: 'Certificados',
      backToTop: 'Volver al inicio',
      introduction:
        'Como parte de mi crecimiento profesional, he completado estos cursos para fortalecer mis conocimientos y convertirlos en mejores resultados.',
      items: {
        aws: {
          name: 'AWS Cloud Practitioner Essentials',
          issuer: 'AWS Training & Certification',
        },
        googleUx: {
          name: 'Fundamentos del diseño de la experiencia del usuario (UX)',
          issuer: 'Certificado Profesional de Diseño UX de Google',
        },
        claudeCode: {
          name: 'Claude Code 101',
          issuer: 'Claude Academy',
        },
      },
    },
    about: {
      title: 'Acerca de mí',
      heroAlt: 'Portada',
      introduction:
        'Soy una persona entusiasta por la tecnología desde muy pequeño. Desde la primaria me adentré en el mundo de la computación haciendo mis primeros dibujos digitales para darles un poco de vida, animándolos frame por frame. Me considero alguien alegre y divertido, siempre intentando sacarles una sonrisa a mis amigos, familiares y conocidos. Mi círculo social me considera alguien atento, inteligente, responsable y detallista. Me encanta dar siempre lo mejor de mí para que mis resultados no solo sean funcionales, sino también llamativos para quienes los necesitan.',
      hobbies: {
        title: 'Mis pasatiempos favoritos',
        items: {
          videoGames: {
            title: 'Videojuegos',
            description:
              'Disfruto jugar videojuegos con amigos y/o con mi hermano. Me encanta Valorant (Shooter táctico), los juegos de acertijos como Escape Simulator y otros juegos de aventura y plataformas como Sonic, Banjo-Kazooie, entre otros.',
            imageAlt: 'Videojuegos favoritos',
          },
          music: {
            title: 'Música',
            description:
              'Mi género musical favorito es el rock. Disfruto escuchar bandas como Linkin Park, Bring Me The Horizon, Twenty One Pilots, Woodkid, entre otras.',
            imageAlt: 'Música y bandas favoritas',
          },
          seriesMovies: {
            title: 'Series y películas',
            description:
              'Me encanta ver series y películas. Entre mis favoritas están El Mentalista, Breaking Bad, Dr. House, Sherlock Holmes, En el tornado, Re:Zero y Ataque a los Titanes.',
            imageAlt: 'Series y películas favoritas',
          },
          travel: {
            title: 'Viajar',
            description:
              'Me encanta conocer nuevos lugares y disfrutar sus paisajes. He viajado a Guanajuato, San Juan de los Lagos, León y Monterrey. Una de mis metas es vivir un tiempo en Monterrey junto con mi hermano y, en el futuro, viajar a Japón con él y mis amigos.',
            imageAlt: 'Viajes y lugares visitados',
          },
        },
      },
    },
    contact: {
      title: 'Contacto',
      copyValue: 'Copiar {{label}}',
      valueCopied: '{{label}} copiado',
      introduction:
        'Aquí encontrarás mi tarjeta de contacto con las principales formas de comunicarte conmigo.',
      role: 'Desarrollador Full Stack',
      cardLabel: 'Tarjeta de presentación de Gerardo Loperena Bustillos',
      linkedin: 'Perfil de LinkedIn',
      whatsapp: 'Teléfono / WhatsApp',
      email: 'Correo',
      openLinkedin: 'Abrir perfil de LinkedIn',
      openWhatsapp: 'Iniciar conversación por WhatsApp',
      openEmail: 'Redactar correo electrónico',
      line: 'LINE',
      wechat: 'WeChat',
      openLineContact: 'Mostrar contacto de LINE',
      openWechatContact: 'Mostrar contacto de WeChat',
      digitalContact: 'Contacto digital',
      qrDescription: 'Escanea el código QR o utiliza el ID para agregarme en {{service}}.',
      accountId: 'ID de usuario',
      copyId: 'Copiar ID',
      copiedId: 'ID copiado',
      openLineProfile: 'Abrir perfil de LINE',
      lineQrAlt: 'Código QR de LINE de Gerardo Loperena',
      wechatQrAlt: 'Código QR de WeChat de Gerardo Loperena',
    },
    sections: {
      experience: 'Aquí aparecerá mi experiencia profesional y trayectoria laboral.',
      about: 'Aquí podrás conocer más sobre mí, mis habilidades y mi forma de trabajar.',
      contact: 'Aquí aparecerán las diferentes formas de ponerte en contacto conmigo.',
      pending: 'El contenido de esta sección se agregará en el siguiente paso.',
    },
  },
} as const
