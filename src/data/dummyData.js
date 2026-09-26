// SmartShiksha — realistic seed data for the SIH 2026 prototype (PS 26207)
// All names, numbers and content below are illustrative dummy data.

export const DEMO_ACCOUNTS = [
  {
    role: 'student',
    email: 'aarav.sharma@nitt.edu',
    password: 'demo123',
    name: 'Aarav Sharma',
    title: 'B.Tech CSE · 5th Semester',
    avatarInitials: 'AS'
  },
  {
    role: 'faculty',
    email: 'v.raman@nitt.edu',
    password: 'demo123',
    name: 'Prof. Venkatesh Raman',
    title: 'Course Coordinator, CSE',
    avatarInitials: 'VR'
  },
  {
    role: 'admin',
    email: 'dean.academic@nitt.edu',
    password: 'demo123',
    name: 'Dr. Somasekharan',
    title: 'Dean of Academic Affairs',
    avatarInitials: 'DS'
  }
]

export const STUDENT_PROFILE = {
  id: '2023CS042',
  name: 'Aarav Sharma',
  rollNo: '2023CS042',
  college: 'National Institute of Technology, Trichy',
  department: 'Computer Science & Engineering',
  semester: '5th Semester · Autumn 2026',
  cgpa: '8.84',
  attendance: 89,
  creditsCompleted: 92,
  creditsTotal: 160,
  dailyStreak: 12,
  weeklyStudyHours: 14.5,
  weeklyGoalHours: 18
}

export const COURSES_DATA = [
  {
    id: 'cs301',
    code: 'CS301',
    title: 'Data Structures & Algorithms',
    instructor: 'Prof. Venkatesh Raman',
    credits: 4,
    progress: 78,
    lecturesCount: 36,
    completedLectures: 28,
    color: '#4F46E5',
    nextTopic: 'Dijkstra Shortest Path with Min-Heap',
    units: [
      {
        unitId: 'u1',
        title: 'Arrays, Stacks & Queues',
        topics: [
          { id: 't1_1', title: 'Two Pointers & Sliding Window', status: 'completed', duration: '45 min' },
          { id: 't1_2', title: 'Monotonic Stack: Next Greater Element', status: 'completed', duration: '50 min' }
        ]
      },
      {
        unitId: 'u2',
        title: 'Trees & Binary Search Trees',
        topics: [
          { id: 't2_1', title: 'Tree Traversals — Recursive vs Iterative', status: 'completed', duration: '55 min' },
          { id: 't2_2', title: 'AVL Rotations & Balance Factors', status: 'completed', duration: '60 min' }
        ]
      },
      {
        unitId: 'u3',
        title: 'Graph Algorithms & Traversals',
        topics: [
          { id: 't3_1', title: 'Adjacency Matrix vs Adjacency List', status: 'completed', duration: '40 min' },
          { id: 't3_2', title: 'Dijkstra Shortest Path with Min-Heap', status: 'active', duration: '65 min' },
          { id: 't3_3', title: "Disjoint Set Union & Kruskal's MST", status: 'locked', duration: '50 min' }
        ]
      },
      {
        unitId: 'u4',
        title: 'Dynamic Programming',
        topics: [
          { id: 't4_1', title: '0/1 Knapsack & Subset Sum', status: 'locked', duration: '75 min' },
          { id: 't4_2', title: 'Longest Common Subsequence', status: 'locked', duration: '70 min' }
        ]
      }
    ]
  },
  {
    id: 'cs302',
    code: 'CS302',
    title: 'Database Management Systems',
    instructor: 'Dr. Shalini K.',
    credits: 3,
    progress: 65,
    lecturesCount: 30,
    completedLectures: 20,
    color: '#0EA5E9',
    nextTopic: '1NF to BCNF Decomposition',
    units: [
      { unitId: 'db_u1', title: 'Relational Algebra & SQL', topics: [{ id: 'db_1', title: 'Subqueries & Window Functions', status: 'completed', duration: '50 min' }] },
      { unitId: 'db_u2', title: 'Normalization', topics: [{ id: 'db_2', title: '1NF to BCNF Decomposition', status: 'active', duration: '60 min' }] }
    ]
  },
  {
    id: 'cs303',
    code: 'CS303',
    title: 'Operating Systems',
    instructor: 'Prof. Amit Saxena',
    credits: 4,
    progress: 84,
    lecturesCount: 34,
    completedLectures: 29,
    color: '#16A34A',
    nextTopic: 'Virtual Memory & Page Replacement',
    units: [
      { unitId: 'os_u1', title: 'Process Synchronization & Deadlocks', topics: [
        { id: 'os_1', title: 'Semaphores, Mutex & Dining Philosophers', status: 'completed', duration: '55 min' },
        { id: 'os_2', title: "Banker's Algorithm", status: 'completed', duration: '45 min' }
      ] }
    ]
  },
  {
    id: 'cs304',
    code: 'CS304',
    title: 'Artificial Intelligence & ML',
    instructor: 'Dr. R. Sundaram',
    credits: 3,
    progress: 52,
    lecturesCount: 32,
    completedLectures: 17,
    color: '#A855F7',
    nextTopic: 'Attention Mechanisms in Deep Learning',
    units: [
      { unitId: 'ai_u1', title: 'Neural Networks & Backpropagation', topics: [
        { id: 'ai_1', title: 'Chain Rule in Computational Graphs', status: 'completed', duration: '60 min' },
        { id: 'ai_2', title: 'Attention Mechanisms', status: 'active', duration: '70 min' }
      ] }
    ]
  }
]

export const ACADEMIC_DEADLINES = [
  { id: 'd1', title: 'Mid-Sem Lab Practical: Dijkstra & Graph MST', course: 'CS301 · Data Structures', dueDate: 'Tomorrow, 10:00 AM', type: 'Practical', priority: 'high' },
  { id: 'd2', title: 'Assignment 3: SQL Indexing & Query Plans', course: 'CS302 · DBMS', dueDate: 'Friday, 11:59 PM', type: 'Assignment', priority: 'medium' },
  { id: 'd3', title: 'Weekly Practice Set: Virtual Memory', course: 'CS303 · Operating Systems', dueDate: 'Sunday, 5:00 PM', type: 'Practice Set', priority: 'low' }
]

export const FLASHCARD_DECK = [
  { id: 'f1', course: 'CS301', front: "What is Dijkstra's Algorithm's time complexity with a binary min-heap?", back: 'O((V + E) log V) — each edge relaxation may push onto the heap, and each push/pop costs log V.', box: 3 },
  { id: 'f2', course: 'CS302', front: 'What does BCNF require beyond 3NF?', back: 'Every determinant must be a candidate key — BCNF removes anomalies 3NF can still allow.', box: 2 },
  { id: 'f3', course: 'CS303', front: 'Name the four necessary conditions for deadlock.', back: 'Mutual exclusion, hold-and-wait, no preemption, and circular wait.', box: 1 },
  { id: 'f4', course: 'CS304', front: 'What problem does the attention mechanism solve in seq2seq models?', back: 'It lets the decoder focus on relevant encoder states instead of relying on one fixed context vector.', box: 2 }
]

export const AI_TUTOR_SUGGESTIONS = [
  'Explain Dijkstra using a simple analogy',
  'Give me a C++ template for BFS',
  'Quiz me on BCNF decomposition',
  'Summarize deadlock prevention strategies'
]

export const AI_TUTOR_SEED_MESSAGES = [
  {
    id: 'm1',
    role: 'assistant',
    text: "Hi Aarav! I'm your 24/7 AI Study Buddy. Ask me to explain a concept, generate practice code, or cram for an exam — try one of the prompts below."
  }
]

export const DISCUSSION_FORUM_POSTS = [
  {
    id: 'post_1',
    author: 'Ananya Iyer',
    roll: '2023CS014',
    time: '2 hours ago',
    course: 'CS301 · Data Structures',
    title: "Why does Dijkstra fail with negative-weight edges even without revisiting a cycle?",
    body: "Prof. Raman mentioned the greedy choice property breaks with negative weights. Could someone share a small 3-node counterexample?",
    upvotes: 8,
    repliesCount: 3,
    facultyVerified: true,
    verifiedAnswer: "Consider S→A (5), S→B (2), B→A (-4). Dijkstra locks in S→A at distance 5 before it realizes the path via B totals -2."
  },
  {
    id: 'post_2',
    author: 'Rohan Verma',
    roll: '2023CS058',
    time: '5 hours ago',
    course: 'CS302 · DBMS',
    title: 'Quick way to check 3NF vs BCNF in an exam setting?',
    body: 'When solving decomposition questions under time pressure, what is the fastest check to see if a relation is 3NF but not BCNF?',
    upvotes: 12,
    repliesCount: 4,
    facultyVerified: false,
    verifiedAnswer: null
  },
  {
    id: 'post_3',
    author: 'Sneha Mukherjee',
    roll: '2023CS079',
    time: '1 day ago',
    course: 'CS303 · Operating Systems',
    title: "Banker's Algorithm — how many resource types before it stops being practical by hand?",
    body: 'Working through past papers, 2 resource types is easy but 3+ gets messy. Any shortcuts for the safety-sequence check?',
    upvotes: 5,
    repliesCount: 2,
    facultyVerified: true,
    verifiedAnswer: 'Track the Need matrix separately and eliminate rows greedily — with 3 resource types, always start from the row with the smallest total need.'
  }
]

// ---------- Faculty workspace data ----------

export const FACULTY_PROFILE = {
  name: 'Prof. Venkatesh Raman',
  department: 'Computer Science & Engineering',
  section: 'Section A · CS301',
  studentsCount: 64,
  pendingGrading: 12,
  openDoubts: 5
}

export const FACULTY_STUDENT_ROSTER = [
  { rollNo: '2023CS001', name: 'Aaditya Patel', internal1: 23, internal1Max: 25, assignment: 9.5, assignmentMax: 10, attendance: 94, status: 'Good' },
  { rollNo: '2023CS014', name: 'Ananya Iyer', internal1: 24.5, internal1Max: 25, assignment: 10, assignmentMax: 10, attendance: 96, status: 'Top 5%' },
  { rollNo: '2023CS042', name: 'Aarav Sharma', internal1: 22, internal1Max: 25, assignment: 9, assignmentMax: 10, attendance: 89, status: 'Consistent' },
  { rollNo: '2023CS058', name: 'Rohan Verma', internal1: 13, internal1Max: 25, assignment: 6.5, assignmentMax: 10, attendance: 71, status: 'Attention Needed' },
  { rollNo: '2023CS079', name: 'Sneha Mukherjee', internal1: 21.5, internal1Max: 25, assignment: 9.5, assignmentMax: 10, attendance: 91, status: 'Good' },
  { rollNo: '2023CS092', name: 'Vikramaditya Rao', internal1: 15, internal1Max: 25, assignment: 7, assignmentMax: 10, attendance: 74, status: 'Attention Needed' }
]

export const EXAM_BLOOM_LEVELS = [
  { level: 'Remember', questions: 4, marks: 8 },
  { level: 'Understand', questions: 4, marks: 12 },
  { level: 'Apply', questions: 3, marks: 15 },
  { level: 'Analyze', questions: 2, marks: 15 }
]

// ---------- Admin workspace data ----------

export const ADMIN_STATS = {
  totalStudents: 1420,
  totalFaculty: 94,
  departments: 8,
  avgAttendance: 87,
  avgCgpa: 8.12,
  nepComplianceScore: 96
}

export const DEPARTMENT_PERFORMANCE = [
  { dept: 'Computer Science', students: 320, avgCgpa: 8.42, attendance: 89, placementRate: 94 },
  { dept: 'Electronics & Comm.', students: 260, avgCgpa: 7.98, attendance: 85, placementRate: 88 },
  { dept: 'Mechanical', students: 240, avgCgpa: 7.65, attendance: 82, placementRate: 79 },
  { dept: 'Civil', students: 180, avgCgpa: 7.71, attendance: 86, placementRate: 74 },
  { dept: 'Electrical', students: 210, avgCgpa: 7.88, attendance: 84, placementRate: 82 },
  { dept: 'Chemical', students: 130, avgCgpa: 7.94, attendance: 88, placementRate: 77 }
]

export const ENROLLMENT_TREND = [
  { year: '2021', students: 1120 },
  { year: '2022', students: 1210 },
  { year: '2023', students: 1290 },
  { year: '2024', students: 1350 },
  { year: '2025', students: 1390 },
  { year: '2026', students: 1420 }
]

export const COMPLIANCE_ITEMS = [
  { id: 'c1', label: 'NEP 2020 Credit Framework Mapping', status: 'complete' },
  { id: 'c2', label: 'AICTE Outcome-Based Education Records', status: 'complete' },
  { id: 'c3', label: 'Multidisciplinary Course Basket Report', status: 'complete' },
  { id: 'c4', label: 'Academic Bank of Credits (ABC) Sync', status: 'in-progress' },
  { id: 'c5', label: 'Annual NBA Accreditation Dossier', status: 'in-progress' }
]

export const WEEKLY_STUDY_TREND = [6, 8, 7.5, 10, 9, 12.5, 14.5]

export const LANDING_ACTIVITY_FEED = [
  { id: 'a1', label: 'Lecture completed', detail: 'Dijkstra Shortest Path · CS301', time: '2m ago', tone: 'success' },
  { id: 'a2', label: 'Doubt answered by faculty', detail: 'BCNF decomposition · CS302', time: '38m ago', tone: 'brand' },
  { id: 'a3', label: 'Flashcard deck reviewed', detail: '12 cards · 92% recall', time: '1h ago', tone: 'amber' }
]

export const PLATFORM_HIGHLIGHTS = [
  { title: '24/7 AI Study Buddy', desc: 'Instant explanations, code walkthroughs and exam cram sheets, tuned to each course.' },
  { title: 'Spaced-repetition flashcards', desc: 'An SM-2 scheduler resurfaces the concepts you are about to forget, right on time.' },
  { title: 'Classroom doubt forum', desc: 'Peer answers move faster with faculty-verified badges on the ones that matter.' },
  { title: 'Faculty exam generator', desc: "Bloom's-taxonomy-mapped question papers with marking schemes, built in minutes." },
  { title: 'NEP 2020 compliance', desc: 'Credit-bank sync and accreditation dossiers exported in one click for admins.' },
  { title: 'Attendance-risk alerts', desc: 'Faculty see below-75% attendance the moment it happens, not at semester end.' }
]
