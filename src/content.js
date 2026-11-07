export const GITHUB = 'https://github.com/LuisDulo';
export const EMAIL = 'luisokal15@gmail.com';

const repo = (name) => `${GITHUB}/${name}`;

// What each measured language was used for, keyed by GitHub's language name.
export const languageNotes = {
  Python: 'Django REST API, scikit-learn and XGBoost pipelines, image-processing labs',
  JavaScript: 'React dashboard, React Native app, Node and Express back end',
  EJS: 'Server-rendered views for the Artify marketplace',
  Kotlin: 'Android ticketing app with Jetpack Compose',
  CSS: 'Styling for the web projects',
  HTML: 'Page structure for the web projects',
  Java: 'Swing desktop calculator',
  Assembly: 'x86-64 factorial and summing routines',
  C: 'C program calling an assembly routine',
};

export const capstone = {
  url: repo('smart-school-feeding'),
  summary:
    "Parents top up a child's meal balance by M-Pesa, kitchen staff serve meals by QR code or name, and school administrators monitor balances, demand forecasts and suspicious transactions.",
  parts: [
    ['Back end', 'Django REST Framework, PostgreSQL', 'Accounts, meals, payments, forecasting and anomaly services'],
    ['Web', 'React', 'Dashboard for admins, bursars, kitchen staff and a network super admin'],
    ['Mobile', 'React Native, Expo', 'Parent and student app with a kitchen serving screen and push notifications'],
    ['Machine learning', 'scikit-learn, XGBoost', 'Demand forecasting, balance-risk and anomaly models'],
  ],
  results: [
    {
      figure: '1.03',
      unit: 'meals mean error',
      title: 'Demand forecasting',
      text: 'Compared Linear Regression, Random Forest and XGBoost on 3,000 held-out rows. XGBoost scored best, with R² of 0.81 against 0.59 for Linear Regression, whose mean error was 1.45 meals.',
    },
    {
      figure: '28% → 100%',
      unit: 'recall on injected anomalies',
      title: 'Meal-serving anomalies',
      text: 'An Isolation Forest cannot flag night or weekend meals it never saw in training, so the detector pairs it with explainable rules. Together they caught all 53 injected anomalies at 88% precision.',
    },
    {
      figure: '0.80',
      unit: 'F1 score',
      title: 'Payment anomalies',
      text: 'Isolation Forest and Local Outlier Factor were tested on the same split. The test set held only 5 labelled anomalies, so this is an early indication and not a final score.',
    },
  ],
  caveat: 'Evaluated on synthetic and demo data, not a live school deployment.',
  meta: ['Strathmore University capstone', 'Partner: Webmasters Kenya', 'Agile Scrum, five two-week sprints', '227 backend test functions'],
};

export const projects = [
  {
    name: 'Artify',
    kind: 'Web marketplace',
    text: 'A site where people create art on an in-browser canvas and sell it, with a marketplace, designer hiring, live chat and M-Pesa payment routes.',
    stack: ['Node.js', 'Express', 'MongoDB', 'EJS', 'Socket.IO', 'M-Pesa Daraja'],
    url: repo('ICS-Project1-'),
  },
  {
    name: 'TicketMaster App',
    kind: 'Android app',
    text: 'Event ticketing app where organisers add events and buyers pay through an M-Pesa STK push, with event data stored in Firebase.',
    stack: ['Kotlin', 'Jetpack Compose', 'Firebase', 'Retrofit', 'M-Pesa Daraja'],
    url: repo('TicketMasterApp'),
  },
  {
    name: 'C and Assembly Factorial',
    kind: 'Systems coursework',
    text: 'A C program that calls a hand-written x86-64 factorial routine using the Linux calling convention, plus summing loops in assembly.',
    stack: ['C', 'x86-64 Assembly'],
    url: repo('assembly-c-activity'),
  },
  {
    name: 'Embedded Circuit Design',
    kind: 'IoT coursework',
    text: 'Circuit designs and a DHT22 sensor write-up from an embedded systems and IoT assignment.',
    stack: ['Sensors', 'Microcontrollers', 'IoT'],
    url: repo('Circuit-Design'),
  },
  {
    name: 'Save Our Wildlife',
    kind: 'Multimedia page',
    text: 'A wildlife conservation page built around a scripted video player.',
    stack: ['HTML', 'CSS', 'JavaScript'],
    url: repo('Cat2_MMA'),
  },
  {
    name: 'Desktop Calculator',
    kind: 'Desktop app',
    text: 'A macOS-style calculator built with Java Swing.',
    stack: ['Java', 'Swing'],
    url: repo('SchoolAssignmentCalculator'),
  },
  {
    name: 'Proglink',
    kind: 'Web platform',
    text: 'A platform connecting programmers with each other and with organisations through collaboration, learning resources, forums and events.',
    stack: ['HTML', 'JavaScript', 'React'],
  },
  {
    name: 'ThriftMart',
    kind: 'E-commerce app',
    text: 'An application where users buy and sell their own goods.',
    stack: ['Java', 'SQL'],
  },
];

export const experience = {
  role: 'Industrial Attachment, IT and Digital Transformation Division',
  org: 'Isuzu East Africa Ltd',
  dates: 'January 2026 to April 2026',
  points: [
    'Built support automation workflows with Power Apps, Power Automate and SharePoint, and tested new systems before rollout.',
    'Resolved help desk tickets across end-user computing, MS Office and internal company applications.',
    'Set up and onboarded laptops, desktops and printers, and integrated them onto the company network.',
    'Maintained the IT managed asset database and tracked equipment through movement and decommissioning.',
    'Supported backup and recovery, and took part in IT projects from requirements gathering through deployment.',
    'Trained employees to submit IT requests through the online self-help portal.',
  ],
};

export const education = [
  ['Strathmore University', 'BSc Informatics and Computer Science', 'Expected July 2027'],
  ['KIPS Technical College', 'ICDL Certificate', 'Feb to May 2023'],
  ['Nairobi School', 'KCSE, Grade B', '2019 to 2022'],
];

export const skills = [
  ['Web and mobile', 'React, React Native, HTML, CSS'],
  ['Back end', 'Django REST Framework, RESTful API design'],
  ['Databases', 'PostgreSQL, SQL, Firebase, MongoDB'],
  ['Machine learning', 'scikit-learn, Linear Regression, Isolation Forest'],
  ['Payments', 'M-Pesa Daraja API'],
  ['Data and automation', 'Power BI, Power Apps, Power Automate'],
  ['Embedded and IoT', 'Sensor and microcontroller integration, prototyping'],
  ['Infrastructure', 'Network and switch configuration, Linux, Windows'],
  ['Fundamentals', 'Data structures and algorithms, computer networks, computer architecture'],
  ['Ways of working', 'Agile Scrum'],
];
