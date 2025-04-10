export type MediaType = 'image' | 'video' | 'audio' | 'pdf' | 'webpage';

export interface MediaAsset {
  url: string;
  thumbnailUrl?: string;
  alt?: string;
  duration?: number; // For video/audio in seconds
  mimeType?: string;
}

export interface PortfolioItem {
  id: string;
  title: string;
  description: string;
  type: MediaType;
  date: string;
  client?: string;
  tags: string[];
  category: string;
  featured: boolean;
  media: MediaAsset[];
  links?: {
    live?: string;
    github?: string;
    behance?: string;
    case_study?: string;
  };
  metadata: {
    role: string;
    tools: string[];
    team?: string[];
    duration?: string;
    outcome?: string;
  };
}

// Sample portfolio data
export const portfolioItems: PortfolioItem[] = [
  {
    id: 'brand-campaign-2024',
    title: 'Tech Innovation Campaign',
    description: 'A comprehensive brand campaign exploring the intersection of technology and human creativity.',
    type: 'image',
    date: '2024-02',
    client: 'TechCorp Industries',
    tags: ['branding', 'digital', 'strategy'],
    category: 'Brand Development',
    featured: true,
    media: [
      {
        url: '/portfolio/tech-campaign/hero.jpg',
        thumbnailUrl: '/portfolio/tech-campaign/thumb.jpg',
        alt: 'Tech Innovation Campaign Hero Image'
      },
      {
        url: '/portfolio/tech-campaign/process.pdf',
        mimeType: 'application/pdf'
      }
    ],
    links: {
      live: 'https://techcorp.com/campaign',
      case_study: '/case-studies/tech-innovation'
    },
    metadata: {
      role: 'Creative Director',
      tools: ['Figma', 'Adobe Creative Suite', 'Webflow'],
      team: ['Art Director', 'Copywriter', 'Motion Designer'],
      duration: '3 months',
      outcome: 'Increased brand engagement by 45%'
    }
  },
  {
    id: 'soundscape-project',
    title: 'Urban Soundscapes',
    description: 'An experimental audio project capturing the essence of city life through ambient recordings.',
    type: 'audio',
    date: '2024-01',
    tags: ['audio', 'experimental', 'composition'],
    category: 'Sound Design',
    featured: true,
    media: [
      {
        url: '/portfolio/soundscape/main.mp3',
        duration: 180,
        thumbnailUrl: '/portfolio/soundscape/waveform.png',
        mimeType: 'audio/mpeg'
      }
    ],
    metadata: {
      role: 'Sound Designer & Composer',
      tools: ['Ableton Live', 'Field Recording Equipment', 'Max/MSP'],
      duration: '2 months',
      outcome: 'Featured in local art installation'
    }
  },
  {
    id: 'interactive-experience',
    title: 'Digital Memory Palace',
    description: 'An interactive web experience exploring the concept of digital memories.',
    type: 'webpage',
    date: '2023-12',
    tags: ['web', 'interactive', 'animation'],
    category: 'Interactive Design',
    featured: true,
    media: [
      {
        url: 'https://memory-palace.demo',
        thumbnailUrl: '/portfolio/memory-palace/preview.jpg'
      },
      {
        url: '/portfolio/memory-palace/demo.mp4',
        duration: 120,
        mimeType: 'video/mp4'
      }
    ],
    links: {
      live: 'https://memory-palace.demo',
      github: 'https://github.com/username/memory-palace'
    },
    metadata: {
      role: 'Lead Developer & Designer',
      tools: ['React', 'Three.js', 'GSAP'],
      team: ['3D Artist', 'Backend Developer'],
      duration: '4 months',
      outcome: 'Featured on Awwwards'
    }
  }
]; 