export const profile = {
    name: 'John Denver Macaraig',
    handle: 'JDenver',
    title: 'Computer Science Student',
    subtitle: 'Frontend Developer · DevOps Enthusiast',
    tagline:
        'Designing and shipping software across the stack — from algorithms and systems to polished web experiences.',
    email: 'johndenver9900@gmail.com',
    github: 'https://github.com/IamJdnvr',
    githubUsername: 'Iamjdnvr',
    resume: '/Resume – John Denver Macaraig.pdf',
    location: 'Cavite, Philippines · Open to remote',
};

export const navLinks = [
    { name: 'Home', to: 'home' },
    { name: 'About', to: 'about' },
    { name: 'Projects', to: 'projects' },
    { name: 'Skills', to: 'skills' },
    { name: 'Contact', to: 'contact' },
];

export const focusAreas = [
    'Software Engineering',
    'Web Development',
    'Systems & DevOps',
    'Problem Solving',
];

export const techTags = ['React', 'TypeScript', 'Node.js', 'Docker', 'Python', 'Vite'];

export const stats = [
    { label: 'Projects', value: 6, suffix: '+', key: 'projects' },
    { label: 'Languages', value: 8, suffix: '+', key: 'languages' },
    { label: 'Lines of Code', value: 10, suffix: 'K+', key: 'loc' },
    { label: 'Technologies', value: 12, suffix: '+', key: 'tech' },
];

export const aboutSnippet = {
    filename: 'about.ts',
    lines: [
        { type: 'comment', text: '// Computer Science student & builder' },
        { type: 'decl', name: 'developer', props: [
            { key: 'name', value: '"John Denver Macaraig"', kind: 'string' },
            { key: 'focus', value: '"Full-stack & DevOps"', kind: 'string' },
            { key: 'studying', value: '"B.S. Computer Science"', kind: 'string' },
            { key: 'openToWork', value: 'true', kind: 'boolean' },
        ]},
    ],
};

export const education = [
    {
        year: '2021 – Present',
        school: 'Cavite State University - Carmona Campus',
        location: 'Carmona, Cavite',
        degree: 'Bachelor of Science in Computer Science',
        active: true,
    },
    {
        year: '2018 – 2020',
        school: 'Philippine Technological Institute of Science, Arts, and Trade',
        location: 'General Mariano Alvarez, Cavite',
        degree: 'Senior High School',
        active: false,
    },
    {
        year: '2016 – 2018',
        school: 'Bulihan National Highschool',
        location: 'Bulihan, Silang, Cavite',
        degree: 'Junior High School',
        active: false,
    },
];

export const certificates = [
    {
        title: 'Certificate of Participation – TechCare',
        issuer: 'Cavite State University - Carmona Campus',
        description:
            'Active participation in TechCare: Training on Computer Peripheral Hardware Troubleshooting',
        date: 'July 15, 2026',
        image: '/Certificate of Seminar TechCare_CVSU.jpg',
    },
    {
        title: 'Certificate of Completion – OJT',
        issuer: 'Multi Axis Handlers & Tech Inc.',
        description: '200 hours On-the-Job Training in System Design & Industrial Automation',
        date: 'August 2024',
        image: '/certificates/ojt-certificate.png',
    },
];

export const skillsData = [
    {
        category: 'Programming Languages',
        description: 'Languages used across coursework, projects, and tooling.',
        skills: ['JavaScript', 'TypeScript', 'Python', 'C', 'Java', 'SQL'],
    },
    {
        category: 'CS Foundations',
        description: 'Core concepts applied in academic and personal work.',
        skills: ['Data Structures', 'Algorithms', 'OOP', 'Databases', 'Networking', 'Git'],
    },
    {
        category: 'Web & Cloud',
        description: 'Frameworks and platforms for building and deploying software.',
        skills: ['React', 'Node.js', 'Express', 'Flask', 'Docker', 'REST APIs', 'AWS'],
    },
    {
        category: 'Tools & Workflow',
        description: 'Day-to-day development environment and collaboration.',
        skills: ['Git & GitHub', 'VS Code', 'Cursor', 'Linux CLI', 'Figma', 'Vite'],
    },
];

export const deployedLinks = {
    'portfolio-website': 'https://portfolio-static-0y85.onrender.com',
    'Philippine-DRRM-Simulation-Game': 'https://philippine-drrm-simulation-game-1.onrender.com',
};

export const customDescriptions = {
    'portfolio-website':
        'Professional portfolio built with React, Vite, and Tailwind CSS. Showcases projects, skills, and experience.',
    'Philippine-DRRM-Simulation-Game':
        'Interactive disaster risk reduction simulation for Philippine communities — evacuation, go-bag packing, and hazard identification.',
    PAYROLLSYSTEM:
        'Payroll management system for computing salaries, deductions, and generating payslips.',
};
