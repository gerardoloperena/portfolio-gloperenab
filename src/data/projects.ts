// Vite resolves every project image during the build; natural sorting preserves numeric order.
const projectImageModules = import.meta.glob<string>(
  '../assets/images/projects/**/*.{png,jpg,jpeg,webp,avif}',
  {
    eager: true,
    import: 'default',
  },
)

const imageNameCollator = new Intl.Collator('es', {
  numeric: true,
  sensitivity: 'base',
})

function getProjectImages(folder: string): readonly string[] {
  const folderPath = `/images/projects/${folder}/`

  return Object.entries(projectImageModules)
    .filter(([path]) => path.includes(folderPath))
    .sort(([firstPath], [secondPath]) => imageNameCollator.compare(firstPath, secondPath))
    .map(([, image]) => image)
}

export const projectTranslationKeys = [
  'colegeeks',
  'confer',
  'valConnect',
  'capasiti',
  'galleryUsb',
] as const

export type ProjectTranslationKey = (typeof projectTranslationKeys)[number]

export interface ProjectLink {
  labelTranslationKey: string
  href: string
}

export interface Project {
  id: string
  translationKey: ProjectTranslationKey
  technologies: readonly string[]
  images: readonly string[]
  links: readonly ProjectLink[]
  accent: string
}

export const projects: readonly Project[] = [
  {
    id: 'colegeeks',
    translationKey: 'colegeeks',
    technologies: ['Laravel', 'React', 'MySQL', 'REST API'],
    images: getProjectImages('colegeeks'),
    links: [
      {
        labelTranslationKey: 'projects.links.project',
        href: 'https://colegeeks.com/',
      },
    ],
    accent: '#6694ff',
  },
  {
    id: 'confer-control',
    translationKey: 'confer',
    technologies: ['React', 'Python', 'Flask', 'PostgreSQL', 'Docker'],
    images: getProjectImages('confer-control'),
    links: [
      {
        labelTranslationKey: 'projects.links.reference',
        href: 'https://www.congresotamaulipas.gob.mx/ArmonizacionContable/Archivo/LeyContabilidad2025/4trim/06.3%20RELACI%C3%93N%20DE%20ADQUISICIONES%20DE%20BIENES%20MUEBLES%20E%20INMUEBLES.pdf',
      },
    ],
    accent: '#4bb8a8',
  },
  {
    id: 'val-connect',
    translationKey: 'valConnect',
    technologies: ['Ionic', 'Angular', 'Laravel', 'SCSS'],
    images: getProjectImages('val-connect'),
    links: [
      {
        labelTranslationKey: 'projects.links.project',
        href: 'https://play.google.com/store/apps/details?id=com.plusvalconnect.app&hl=es_MX',
      },
      {
        labelTranslationKey: 'projects.links.reference',
        href: 'https://plusvalconnect.com/',
      },
    ],
    accent: '#a579e4',
  },
  {
    id: 'capasiti',
    translationKey: 'capasiti',
    technologies: ['CakePHP', 'MySQL', 'WampServer', 'JavaScript'],
    images: getProjectImages('capasiti'),
    links: [
      {
        labelTranslationKey: 'projects.links.project',
        href: 'https://web.archive.org/web/20200216052128/http://capasiti.tamaulipas.gob.mx/login/index.php',
      },
      {
        labelTranslationKey: 'projects.links.reference',
        href: 'https://tamaulipas.gob.mx/2023/04/capacitan-al-personal-administrativo-de-las-dependencias-del-gobierno-de-tamaulipas/',
      },
    ],
    accent: '#d0904b',
  },
  {
    id: 'galeria-usb',
    translationKey: 'galleryUsb',
    technologies: ['React Native', 'TypeScript', 'Kotlin', 'Android', 'USB OTG'],
    images: getProjectImages('galeria-usb'),
    links: [
      {
        labelTranslationKey: 'projects.links.project',
        href: 'https://play.google.com/store/apps/details?id=com.usbphotosync',
      },
    ],
    accent: '#3aa8c2',
  },
]
