/**
 * ─────────────────────────────────────────────────────────────
 *  ALL YOUR CONTENT LIVES HERE.
 *  Edit this file to update the site — no need to touch components.
 *  Search for "TODO" to find everything that still needs your input.
 * ─────────────────────────────────────────────────────────────
 */

export const profile = {
  name: 'Nur Auni binti Ahmad Rosli',
  shortName: 'Nur Auni', // shown big in the hero
  initials: 'NA',
  role: 'Frontend Developer & UI/UX Designer',
  location: 'Pulau Pinang, Malaysia',
  tagline: 'I design and build interfaces that feel friendly, fast, and human.',
  // Shown in the About section. Each string is one paragraph.
  bio: [
    "Hi, I'm Auni, a frontend developer and UI/UX designer based in Pulau Pinang. I enjoy the whole journey of a product: sketching user flows in Figma, testing ideas with real people, then turning them into responsive, accessible code.",
    "I care about the small details that make an interface feel effortless, like clear hierarchy, honest copy and smooth interactions. I'm currently open to frontend and UI/UX roles where I can keep learning alongside a team that cares about craft and the people who use what we build.",
  ],
  // Little facts shown next to the bio. Keep them short.
  facts: [
    { label: 'Based in', value: 'Pulau Pinang, Malaysia' },
    { label: 'Focus', value: 'UI design + frontend' },
    { label: 'Status', value: 'Open to opportunities' },
  ],
  availableForWork: true, // shows the green "open to work" badge in the hero
  // TODO (optional): add a photo of yourself, e.g. put me.webp in /public and set '/me.webp'.
  // While empty, the hero card shows your initials instead.
  photo: '',
};

export const links = {
  email: 'aunirose0@gmail.com',
  linkedin: 'http://www.linkedin.com/in/nurauniahmadrosli',
  github: 'https://github.com/auneyyyy',
  // TODO: Add your resume. Put the PDF in /public (e.g. public/resume.pdf)
  // and set this to '/resume.pdf'. While empty, the button shows "Resume — coming soon".
  resume: '',
};

export const seo = {
  title: 'Nur Auni — Frontend Developer & UI/UX Designer',
  description:
    'Portfolio of Nur Auni binti Ahmad Rosli, a frontend developer and UI/UX designer from Pulau Pinang, Malaysia. Projects, skills and contact.',
  ogImage: '/og-image.png', // regenerate with `npm run og` after changing your name/role
};

export type Project = {
  title: string;
  description: string;
  tags: string[];
  image: string; // path inside /public
  imageAlt: string;
  live?: string; // leave empty ('') to hide the "Live" button
  code?: string; // leave empty ('') to hide the "Code" button
  accent: 'coral' | 'violet' | 'sun' | 'mint';
};

/**
 * TODO: These 3 projects are EXAMPLES to show the layout.
 * Replace the title, description, tags, image and links with your real work.
 * Images: drop a screenshot into public/projects/ (1200×750 .webp or .jpg is ideal)
 * and update `image` + `imageAlt`.
 */
export const projects: Project[] = [
  {
    title: 'StokSmart: Inventory Dashboard',
    description:
      'A web dashboard that helps small shops track stock levels, spot low-stock items early and see weekly sales trends at a glance.',
    tags: ['React', 'TypeScript', 'Tailwind CSS', 'Firebase'],
    image: '/projects/example-dashboard.svg', // TODO: replace with real screenshot
    imageAlt: 'Example dashboard interface with stock summary cards and a sales chart',
    live: '#', // TODO: live demo URL
    code: 'https://github.com/auneyyyy', // TODO: link to the project repository
    accent: 'coral',
  },
  {
    title: 'Makan Mana? Penang Food Finder',
    description:
      'A mobile app concept for discovering hawker stalls nearby, with filters for halal, opening hours and budget. Designed in Figma and prototyped in Flutter.',
    tags: ['Figma', 'Flutter', 'Dart', 'UX Research'],
    image: '/projects/example-mobile.svg', // TODO: replace with real screenshot
    imageAlt: 'Example mobile app interface showing a list of nearby food stalls',
    live: '#', // TODO: prototype / demo URL
    code: 'https://github.com/auneyyyy', // TODO: link to the project repository
    accent: 'violet',
  },
  {
    title: 'Kedai Kita: E-commerce Redesign',
    description:
      'A UX case study redesigning a local online store, from user interviews and wireframes to a responsive, accessible storefront.',
    tags: ['UI/UX', 'Figma', 'HTML', 'CSS', 'JavaScript'],
    image: '/projects/example-shop.svg', // TODO: replace with real screenshot
    imageAlt: 'Example e-commerce interface with product cards and a shopping cart',
    live: '#', // TODO: case study / live URL
    code: 'https://github.com/auneyyyy', // TODO: link to the project repository
    accent: 'sun',
  },
];

/** TODO: Adjust these to match the tools you actually use. */
export const skills = [
  {
    group: 'Design',
    color: 'violet',
    items: ['Figma', 'Wireframing', 'Prototyping', 'User Research', 'Design Systems', 'Usability Testing'],
  },
  {
    group: 'Frontend',
    color: 'coral',
    items: ['HTML', 'CSS', 'JavaScript', 'TypeScript', 'React', 'Tailwind CSS', 'Astro'],
  },
  {
    group: 'Mobile & Tools',
    color: 'mint',
    items: ['Flutter', 'Dart', 'Firebase', 'SQL', 'Git & GitHub', 'VS Code'],
  },
] as const;

/**
 * TODO: Replace these placeholder entries with your real education and experience.
 * Newest first. `type` controls the little icon: 'work' or 'education'.
 */
export const experience = [
  {
    type: 'work',
    org: 'Company Name', // TODO
    role: 'Frontend / UI/UX Intern', // TODO
    dates: '2025 – 2026', // TODO
    summary: 'Designed and built responsive UI components and improved usability based on user feedback.', // TODO
  },
  {
    type: 'education',
    org: 'University Name', // TODO
    role: 'Bachelor’s Degree in Computer Science', // TODO
    dates: '2022 – 2026', // TODO
    summary: 'Studied software engineering and human–computer interaction, and led UI design for group projects.', // TODO
  },
] as const;
