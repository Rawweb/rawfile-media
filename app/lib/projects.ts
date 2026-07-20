export type Project = {
  slug: string;
  title: string;
  blurb: string;
  description: string;
  problem?: string;
  solution?: string;
  tags: string[];
  year: string;
  role: string;
  gradient: string;
  domain: string;
  url?: string;
  image?: string;
  repos?: { label: string; url: string }[];
};

export const projects: Project[] = [
  {
    slug: 'talentflow-lms',
    title: 'TalentFlow LMS',
    blurb:
      'Learning platform for a 50+ intern cohort, where I led frontend architecture and delivery.',
    description:
      "TalentFlow is Trueminds Innovations' internal learning platform, built to replace a scattered mix of email, chat, shared drives, and separate learning portals with one system. It covers course delivery, assignment submission and feedback, progress tracking with certification at completion, team allocation, and peer collaboration, across three user types: learners, instructors, and program administrators. I led the frontend team from architecture setup through delivery.",
    problem:
      'Learning programs were running across email, messaging apps, shared drives, and multiple portals at once. Learners could not find materials or tell what to do next, instructors had no reliable view of progress, and collaboration had no structure. The fragmentation cost both sides time and made outcomes impossible to measure.',
    solution:
      'One platform replacing the scattered tools. I set up the frontend architecture and component structure, then guided the team in building against it so the product stayed consistent as it grew. Reviewed contributions, coordinated a sub-team, and kept a 5–6 hour update cadence that held everyone aligned. Closed with a 100/100 performance review across Technical Skill, Teamwork, and Workplace Attitude.',
    tags: ['React', 'Tailwind', 'REST API'],
    year: '2026',
    role: 'Frontend Team Lead · Trueminds Innovations',
    gradient: 'pv1',
    domain: 'team-delta-lms.vercel.app',
    url: 'https://team-delta-lms.vercel.app',
    image: '/projects/talentflow-lms.png',
  },
  {
    slug: 'smart-job-portal',
    title: 'Smart Job Portal',
    blurb:
      "Job portal that scores graduates against roles and names the skills they're missing.",
    description:
      "Most job boards stop at listing vacancies, so applicants get rejected without ever learning why. This portal compares a graduate's skill profile against each employer's requirements, produces a compatibility score, and returns the specific missing skills split into technical and soft categories with structured improvement suggestions. Employers post roles and see ranked, pre-filtered applicants instead of screening everyone by hand.",
    problem:
      'Graduates apply into a void. They get rejected without ever learning which skill cost them the role, so they repeat the same gap across dozens of applications. Employers have the opposite problem, screening hundreds of CVs by hand with no structured way to see who is actually close to qualified.',
    solution:
      "A matching engine that compares a candidate's skill profile against each role's requirements and returns a compatibility score, not just a yes or no. Missing skills are split into technical and soft categories with concrete suggestions for closing each gap. Employers see applicants ranked by fit instead of arrival order.",
    tags: ['React', 'Javascript', 'Express', 'Node', 'MongoDB'],
    year: '2026',
    role: 'Full-stack · design + build',
    gradient: 'pv1',
    domain: 'raw-smart-job-portal.vercel.app',
    url: 'https://raw-smart-job-portal.vercel.app/',
    image: '/projects/smart-job-portal.png',
    repos: [
      {
        label: 'Client',
        url: 'https://github.com/Rawweb/smart-job-portal-client',
      },
      {
        label: 'Server',
        url: 'https://github.com/Rawweb/smart-job-portal-server',
      },
    ],
  },
  {
    slug: 'course-registration',
    title: 'Course Registration System',
    blurb:
      'Registration platform that enforces prerequisites and unit load limits in real time.',
    description:
      "University portals let students register advanced courses without passing the prerequisites, then push the cleanup onto advisers weeks later. This system validates prerequisites against the student's academic record at submission, calculates and caps total credit units against departmental minimums and maximums, and returns instant feedback so mistakes get corrected before submission rather than after.",
    problem:
      'University portals accept whatever a student submits. Students register 300-level courses without having passed the prerequisites, exceed the approved credit load, and nobody catches it until an adviser reviews the form weeks later. By then the timetable is set and the correction is painful.',
    solution:
      "Validation moved to the moment of submission. The system checks each selected course against the student's academic record for prerequisite completion, calculates total credit units live against departmental minimums and maximums, and blocks submission with a specific reason instead of a generic error. Advisers approve rather than repair.",
    tags: ['React', 'React Query', 'Express', 'MongoDB'],
    year: '2026',
    role: 'Full-stack developer',
    gradient: 'pv5',
    domain: 'course-reg-system.vercel.app',
    url: 'https://course-reg-system.vercel.app/',
    image: '/projects/course-registration.png',
    repos: [
      {
        label: 'Client',
        url: 'https://github.com/Rawweb/course-reg-sys-client',
      },
      {
        label: 'Server',
        url: 'https://github.com/Rawweb/course-reg-sys-server',
      },
    ],
  },
  {
    slug: 'expense-tracker',
    title: 'Smart Expense Tracker',
    blurb:
      'Personal finance tracker with automated budget alerts at 50%, 80%, and 100%.',
    description:
      'Built for students and low-income earners who spend across cash, transfers, and cards and lose track of where it went. Users set budgets per category and the system tracks spend in real time, firing automated alerts as utilisation crosses 50%, 80%, and 100%. Charts and progress bars turn a list of transactions into a spending pattern the user can actually act on.',
    problem:
      'Money leaves through cash, transfers, and cards in the same day, so students and low-income earners genuinely cannot say where it went. Budgets fail not because people overspend deliberately, but because they only discover the overspend after the month has closed.',
    solution:
      'Per-category budgets tracked in real time, with automated alerts firing as utilisation crosses 50%, 80%, and 100%. The warning arrives while the money still exists. A category breakdown and progress bars turn a transaction list into a visible spending pattern.',
    tags: ['React', 'Node', 'Express', 'MongoDB'],
    year: '2026',
    role: 'Full-stack design + build',
    gradient: 'pv2',
    domain: 'smart-expense-client-ruby.vercel.app',
    url: 'https://smart-expense-client-ruby.vercel.app/',
    image: '/projects/expense-tracker.png',
    repos: [
      {
        label: 'Client',
        url: 'https://github.com/Rawweb/smart-expense-tracker-client',
      },
      {
        label: 'Server',
        url: 'https://github.com/Rawweb/smart-expense-tracker-server',
      },
    ],
  },
  {
    slug: 'siwes-placement',
    title: 'SIWES Placement Platform',
    blurb:
      'Centralised platform matching Nigerian students to local internship placements.',
    description:
      'Nigerian students still find SIWES placements by carrying introduction letters office to office, and frequently end up somewhere unrelated to their course. This platform gives students a searchable list of local openings filtered by discipline, gives employers a channel to post openings and manage applications, and gives coordinators real-time visibility into who is placed where instead of chasing paper records.',
    problem:
      'Nigerian students still find SIWES placements by carrying introduction letters from office to office, and many end up somewhere with no relevance to their course. Employers have no channel to advertise openings, and coordinators track placements on paper with no real-time view of who is placed where.',
    solution:
      'One platform for the three parties. Students search verified openings filtered by discipline and location, then apply and track status online. Employers register, get verified, post openings, and manage applicants from a dashboard. Coordinators see placement status across the whole cohort as it updates.',
    tags: ['React', 'Node', 'MongoDB', 'Tailwind'],
    year: '2026',
    role: 'Full-stack developer',
    gradient: 'pv4',
    domain: 'siwes-placement.vercel.app',
    url: 'https://swiss-placement.vercel.app/',
    image: '/projects/siwes-placement.png',
    repos: [
      {
        label: 'Client',
        url: 'https://github.com/Rawweb/siwes-placement-client',
      },
      {
        label: 'Server',
        url: 'https://github.com/Rawweb/siwes-placement-server',
      },
    ],
  },
  {
    slug: 'school-management',
    title: 'School Management System',
    blurb:
      'Full-stack student platform with a rules-enforced quiz engine and performance tracking.',
    description:
      "Set as a group project where I was the only developer among five, so I used it to build something closer to a real system than a coursework demo. Students authenticate with matric number or email, register and drop courses, sit timed quizzes, and track results over time. The quiz engine is where the work is: one active attempt per student, retakes blocked after submission, timer enforced, and pass/fail graded server-side so the rules can't be bypassed from the client. Duplicate registrations are prevented at the database level rather than in the UI.",
    problem:
      'Set as a group project where I was the only developer among five. The easy path was a static site that satisfied the brief. The harder and more useful problem was building something with real rules: an assessment system that cannot be gamed from the browser.',
    solution:
      'Rules enforced on the server, not in the UI. A student must start a quiz before submitting, only one attempt stays active, retakes are blocked once submitted, the timer is enforced backend-side, and pass or fail is graded against stored answers rather than trusted from the client. Duplicate course registrations are prevented at the database level, and JWT-protected routes gate every request.',
    tags: [
      'React',
      'Tailwind',
      'Node',
      'Express',
      'MongoDB',
      'JWT',
      'Framer motion',
    ],
    year: '2024',
    role: 'Sole developer · team of five',
    gradient: 'pv3',
    domain: 'school-management-app-sage-one.vercel.app',
    url: 'https://school-management-app-sage-one.vercel.app/',
    image: '/projects/school-management.png',
    repos: [
      {
        label: 'Client',
        url: 'https://github.com/Rawweb/school_management_app-frontend',
      },
      {
        label: 'Server',
        url: 'https://github.com/Rawweb/school_management_app',
      },
    ],
  },
  {
    slug: 'expiry-prediction',
    title: 'Product Expiry Prediction',
    blurb:
      'Machine learning system that forecasts approaching product expiry and alerts before it happens.',
    description:
      'Retail and pharmacy stock is still tracked on paper in most small businesses, so expiry gets discovered after the product is already on the shelf. This system stores product records, applies a machine learning module to forecast items approaching expiry within configurable time windows, and pushes alerts to administrators ahead of the date. Reporting surfaces expiry trends and stock status for decision-making.',
    problem:
      'Small retailers and pharmacies track stock on paper, so expired products are discovered on the shelf rather than before. The loss is financial for the business and a safety risk for the customer, and neither is visible until it has already happened.',
    solution:
      'Product records feed a machine learning module that forecasts which items are approaching expiry within configurable windows, pushing alerts to administrators ahead of the date. Reporting surfaces expiry trends over time so purchasing decisions can adjust rather than repeat.',
    tags: ['Machine Learning', 'Python', 'React', 'Node'],
    year: '2025',
    role: 'Full-stack developer',
    gradient: 'pv3',
    domain: 'expiry-system.vercel.app',
    url: undefined,
    image: undefined,
    repos: [
      {
        label: 'Server',
        url: 'https://github.com/Rawweb/alert_system_server',
      },
    ],
  },
];
