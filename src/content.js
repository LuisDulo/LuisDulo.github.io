export const GITHUB = 'https://github.com/LuisDulo';
export const EMAIL = 'luisokal15@gmail.com';
export const PHONE = { display: '+254 796 890 292', tel: '+254796890292' };
export const CV = { pdf: '/cv/Luis_Okal_CV.pdf', docx: '/cv/Luis_Okal_CV.docx' };

const repo = (name) => `${GITHUB}/${name}`;

// What each measured language was used for, keyed by GitHub's language name.
export const languageNotes = {
  Python: 'Django REST and FastAPI back ends, scikit-learn and XGBoost pipelines, retrieval and evaluation',
  JavaScript: 'React dashboard, React Native app, Node and Express back end',
  TypeScript: 'Data pipeline, and the React clients for CHAMA and Sheria RAG',
  EJS: 'Server-rendered views for the Artify marketplace',
  Kotlin: 'Android ticketing app with Jetpack Compose',
  CSS: 'Styling for the web projects',
  PowerShell: 'Scheduled daily refresh for the data pipeline',
  HTML: 'Page structure for the web projects',
  Java: 'Swing desktop calculator',
  Assembly: 'x86-64 factorial and summing routines',
  C: 'C program calling an assembly routine',
};

export const about = {
  paragraphs: [
    "I'm Luis Okal, an Informatics and Computer Science student at Strathmore University, graduating in July 2027. Most of what I build handles real money or real data for people in Kenya: school meal payments over M-Pesa, savings groups, fuel price data, and plain-language answers about tax, SHA and HELB rules.",
    'I work across the whole stack, from Django and FastAPI back ends to React and React Native front ends, and I like proving that things work: tests for every fix, evaluation sets for models, and quality checks before data is published.',
    'My attachment at Isuzu East Africa put me on the support side of software. I resolved help desk tickets, set up and networked new machines, kept the IT asset records, and automated support workflows with Power Apps and Power Automate.',
    'Away from the keyboard I play basketball, and was on the Nairobi School team that reached the Nairobi Region final. I also enjoy pool and gaming.',
  ],
  facts: [
    ['Studying', 'BSc Informatics and Computer Science, Strathmore University'],
    ['Graduating', 'July 2027'],
    ['Experience', 'IT and Digital Transformation attachment, Isuzu East Africa'],
  ],
  photo: { src: '/images/luis-isuzu.webp', width: 338, height: 700, caption: 'On attachment at Isuzu East Africa, 2026' },
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
      text: 'Compared Linear Regression, Random Forest and XGBoost on 3,000 held-out rows. XGBoost scored best, with an R-squared of 0.81 against 0.59 for Linear Regression, whose mean error was 1.45 meals.',
    },
    {
      figure: '28% to 100%',
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
  meta: ['Strathmore University capstone', 'Partner: Webmasters Kenya', 'Agile Scrum, five two-week sprints', '244 backend tests'],
};

// Projects built after the capstone, each with its own repo, sprints and pull requests.
export const recent = [
  {
    name: 'CHAMA',
    kind: 'Fintech platform',
    figure: '12 of 12',
    unit: 'acceptance criteria met, 129 backend tests',
    text: 'A platform for running savings groups. One account can run several chamas, each with its own members, roles, versioned rules and statements. Members pay by M-Pesa STK Push or in cash, and every shilling is posted to a double-entry ledger.',
    detail: 'Money is credited only when M-Pesa confirms a payment, never when it is requested, and a repeated callback changes nothing.',
    stack: ['Django REST Framework', 'PostgreSQL', 'React', 'TypeScript', 'M-Pesa Daraja'],
    url: repo('chama'),
  },
  {
    name: 'Sheria RAG',
    kind: 'AI retrieval app',
    figure: '0.98',
    unit: 'Hit@12 on 44 labelled questions',
    text: 'A chatbot for Kenyan tax, SHA and HELB rules that answers only from official KRA, SHA and HELB guidance, and says so when the pages do not cover a question. Embeddings run locally, and Claude writes the answer when an API key is set.',
    detail: 'Hybrid search was built first but did not beat plain vector search, so the simpler option stayed the default.',
    stack: ['Python', 'FastAPI', 'PostgreSQL', 'pgvector', 'Claude API', 'React', 'TypeScript'],
    url: repo('sheria-rag'),
  },
  {
    name: 'Kenya Prices Pipeline',
    kind: 'Data engineering',
    figure: '8',
    unit: 'quality checks before every publish',
    text: 'A daily pipeline that extracts EPRA pump prices and Central Bank of Kenya inflation, cleans them, loads a PostgreSQL star schema and publishes curated CSV files for a Power BI dashboard. A run that fails a check rolls back.',
    detail: 'Every rejected row is kept with its reason. One finding: Nairobi petrol rose from KES 180.66 to KES 226.96 between November 2024 and October 2026.',
    stack: ['TypeScript', 'Node.js', 'PostgreSQL', 'GitHub Actions', 'PowerShell', 'Power BI'],
    url: repo('kenya-prices-pipeline'),
  },
  {
    name: 'Smart School Feeding Security Review',
    kind: 'Application security',
    figure: '10 of 11',
    unit: 'findings fixed, each proved by a test',
    text: 'A review of my capstone against the OWASP Top 10, starting from the money. It found a critical flaw where a forged M-Pesa callback could credit a meal account without payment, plus token, configuration and dependency issues.',
    detail: 'Each fix went through its own pull request, and the review added CI so tests and security scans run on every change.',
    stack: ['OWASP Top 10', 'pytest', 'pip-audit', 'bandit', 'npm audit'],
    url: repo('smart-school-feeding-security-review'),
  },
];

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
  ['Web and mobile', 'React, React Native, TypeScript, HTML, CSS'],
  ['Back end', 'Django REST Framework, FastAPI, Node.js, RESTful API design'],
  ['Databases', 'PostgreSQL, pgvector, SQL, Firebase, MongoDB'],
  ['Machine learning and AI', 'scikit-learn, XGBoost, Isolation Forest, retrieval-augmented generation, Claude API'],
  ['Data engineering', 'ETL pipelines, star schemas, data quality checks, Power BI'],
  ['Security', 'OWASP Top 10 reviews, dependency auditing, security testing'],
  ['Payments', 'M-Pesa Daraja API, double-entry ledgers'],
  ['DevOps and automation', 'GitHub Actions, PowerShell, Power Apps, Power Automate'],
  ['Embedded and IoT', 'Sensor and microcontroller integration, prototyping'],
  ['Infrastructure', 'Network and switch configuration, Linux, Windows'],
  ['Fundamentals', 'Data structures and algorithms, computer networks, computer architecture'],
  ['Ways of working', 'Agile Scrum, issue-driven pull requests'],
];
