export type Project = {
  slug: string;
  title: string;
  blurb: string;
  description: string;
  tags: string[];
  year: string;
  role: string;
  gradient: string;
  domain: string;
  url?: string;
  repo?: string;
  image?: string;
};

export const projects: Project[] = [
  {
    slug: 'smart-job-portal',
    title: 'Smart Job Portal',
    blurb:
      "Job portal that scores graduates against roles and names the skills they're missing.",
    description:
      "Most job boards stop at listing vacancies, so applicants get rejected without ever learning why. This portal compares a graduate's skill profile against each employer's requirements, produces a compatibility score, and returns the specific missing skills split into technical and soft categories with structured improvement suggestions. Employers post roles and see ranked, pre-filtered applicants instead of screening everyone by hand.",
    tags: ['React', 'Javascript', 'Express', 'Node', 'MongoDB'],
    year: '2025',
    role: 'Full-stack · design + build',
    gradient: 'pv1',
    domain: 'raw-smart-job-portal.vercel.app',
    url: 'https://raw-smart-job-portal.vercel.app/',
    image: '/projects/smart-job-portal.png',
  },
  {
    slug: 'course-registration',
    title: 'Course Registration System',
    blurb:
      'Registration platform that enforces prerequisites and unit load limits in real time.',
    description:
      "University portals let students register advanced courses without passing the prerequisites, then push the cleanup onto advisers weeks later. This system validates prerequisites against the student's academic record at submission, calculates and caps total credit units against departmental minimums and maximums, and returns instant feedback so mistakes get corrected before submission rather than after.",
    tags: ['React', 'React Query', 'Express', 'MongoDB'],
    year: '2026',
    role: 'Full-stack developer',
    gradient: 'pv5',
    domain: 'course-reg-system.vercel.app',
    url: 'https://course-reg-system.vercel.app/',
    image: '/projects/course-registration.png',
  },
  {
    slug: 'expense-tracker',
    title: 'Smart Expense Tracker',
    blurb:
      'Personal finance tracker with automated budget alerts at 50%, 80%, and 100%.',
    description:
      'Built for students and low-income earners who spend across cash, transfers, and cards and lose track of where it went. Users set budgets per category and the system tracks spend in real time, firing automated alerts as utilisation crosses 50%, 80%, and 100%. Charts and progress bars turn a list of transactions into a spending pattern the user can actually act on.',
    tags: ['React', 'Node', 'Express', 'MongoDB'],
    year: '2025',
    role: 'Full-stack design + build',
    gradient: 'pv2',
    domain: 'smart-expense-client-ruby.vercel.app',
    url: 'https://smart-expense-client-ruby.vercel.app/',
    image: '/projects/expense-tracker.png',
  },
  {
    slug: 'siwes-placement',
    title: 'SIWES Placement Platform',
    blurb:
      'Centralised platform matching Nigerian students to local internship placements.',
    description:
      'Nigerian students still find SIWES placements by carrying introduction letters office to office, and frequently end up somewhere unrelated to their course. This platform gives students a searchable list of local openings filtered by discipline, gives employers a channel to post openings and manage applications, and gives coordinators real-time visibility into who is placed where instead of chasing paper records.',
    tags: ['Next.js', 'Node', 'MongoDB', 'Tailwind'],
    year: '2026',
    role: 'Full-stack developer',
    gradient: 'pv4',
    domain: 'swiss-placement.vercel.app',
    url: 'https://swiss-placement.vercel.app/',
    image: '/projects/siwes-placement.png',
  },
  {
    slug: 'school-management',
    title: 'School Management System',
    blurb:
      'Full-stack student platform with a rules-enforced quiz engine and performance tracking.',
    description:
      "Set as a group project where I was the only developer among five, so I used it to build something closer to a real system than a coursework demo. Students authenticate with matric number or email, register and drop courses, sit timed quizzes, and track results over time. The quiz engine is where the work is: one active attempt per student, retakes blocked after submission, timer enforced, and pass/fail graded server-side so the rules can't be bypassed from the client. Duplicate registrations are prevented at the database level rather than in the UI.",
    tags: ['React', 'Tailwind', 'Node', 'Express', 'MongoDB', 'JWT'],
    year: '2026',
    role: 'Sole developer · team of five',
    gradient: 'pv3',
    domain: 'school-management-app-sage-one.vercel.app',
    url: 'https://school-management-app-sage-one.vercel.app/',
    image: '/projects/school-management.png',
  },
  {
    slug: 'expiry-prediction',
    title: 'Product Expiry Prediction',
    blurb:
      'Machine learning system that forecasts approaching product expiry and alerts before it happens.',
    description:
      'Retail and pharmacy stock is still tracked on paper in most small businesses, so expiry gets discovered after the product is already on the shelf. This system stores product records, applies a machine learning module to forecast items approaching expiry within configurable time windows, and pushes alerts to administrators ahead of the date. Reporting surfaces expiry trends and stock status for decision-making.',
    tags: ['Machine Learning', 'Python', 'React', 'Node'],
    year: '2025',
    role: 'Full-stack developer',
    gradient: 'pv3',
    domain: 'expiry-system.vercel.app',
    url: undefined,
  },
];
