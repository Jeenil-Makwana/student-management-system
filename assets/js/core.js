// ==========================================================
// STUDENT MANAGEMENT SYSTEM - CORE LOGIC & DEMO DATA SEEDER
// ==========================================================

(function () {
    // Helper to generate fake MongoDB-style object IDs
    const generateId = () => Math.random().toString(16).slice(2) + Math.random().toString(16).slice(2);

    // ==========================================================
    // REALISTIC HUMAN-CURATED DEMO DATASETS (ALL 19+ MODULES)
    // ==========================================================
    const DEFAULT_DEMO_DATA = {
        users: [
            { _id: 'usr_adm_01', fullName: 'Dr. Rajesh Sharma', username: 'admin', password: 'admin123', role: 'admin', email: 'rajesh.sharma@sms.edu' },
            { _id: 'usr_fac_01', fullName: 'Prof. Ananya Iyer', username: 'faculty', password: 'faculty123', role: 'faculty', email: 'ananya.iyer@sms.edu' },
            { _id: 'usr_std_01', fullName: 'Aarav Patel', username: 'student', password: 'student123', role: 'student', email: 'aarav.patel@student.sms.edu' },
            { _id: 'usr_par_01', fullName: 'Suresh Patel', username: 'parent', password: 'parent123', role: 'parent', email: 'suresh.patel@gmail.com' },
            { _id: 'usr_alm_01', fullName: 'Neha Verma', username: 'alumni', password: 'alumni123', role: 'alumni', email: 'neha.verma@google.com' }
        ],
        '/admissions': [
            { _id: generateId(), name: 'Aarav Patel', type: 'B.Tech Computer Science (Merit)', submittedBy: 'student', details: 'High School GPA: 3.85 / 4.0, JEE Rank: 4210, Status: Admitted & Enrolled', status: 'Approved', createdAt: '2026-06-15T10:30:00.000Z' },
            { _id: generateId(), name: 'Diya Sen', type: 'B.Sc Data Science & AI', submittedBy: 'student', details: 'High School GPA: 3.92 / 4.0, Olympiad Gold Medalist, Status: Document Verified', status: 'Approved', createdAt: '2026-06-18T14:15:00.000Z' },
            { _id: generateId(), name: 'Rohan Mehta', type: 'B.Tech Mechanical Engineering', submittedBy: 'student', details: 'High School GPA: 3.70 / 4.0, Sports Quota (State Level Basketball)', status: 'Approved', createdAt: '2026-06-20T09:45:00.000Z' },
            { _id: generateId(), name: 'Priya Sharma', type: 'B.Com Financial Analytics', submittedBy: 'student', details: 'High School GPA: 3.65 / 4.0, Mathematics Distinction, Status: Under Review', status: 'Pending', createdAt: '2026-07-02T11:20:00.000Z' },
            { _id: generateId(), name: 'Siddharth Rao', type: 'B.Des UI/UX & Interaction Design', submittedBy: 'student', details: 'Design Portfolio Score: 94/100, Creative Writing Specialization', status: 'Approved', createdAt: '2026-07-05T16:00:00.000Z' },
            { _id: generateId(), name: 'Ananya Mukherjee', type: 'B.A Economics & Public Policy', submittedBy: 'student', details: 'High School GPA: 3.78 / 4.0, Model UN Best Delegate, Status: Verified', status: 'Approved', createdAt: '2026-07-10T13:10:00.000Z' },
            { _id: generateId(), name: 'Kabir Singhania', type: 'B.Tech Robotics & Automation', submittedBy: 'student', details: 'High School GPA: 3.88 / 4.0, National Science Talent Winner', status: 'Approved', createdAt: '2026-07-14T09:15:00.000Z' },
            { _id: generateId(), name: 'Tanvi Joshi', type: 'B.Sc Biotechnology & Genetics', submittedBy: 'student', details: 'High School GPA: 3.90 / 4.0, Published Paper on CRISPR, Status: Verified', status: 'Approved', createdAt: '2026-07-18T11:40:00.000Z' }
        ],
        '/attendance': [
            { _id: generateId(), studentId: 'STD-2024-001 (Aarav Patel)', date: '2026-08-11', status: 'Present', submittedBy: 'faculty' },
            { _id: generateId(), studentId: 'STD-2024-001 (Aarav Patel)', date: '2026-08-12', status: 'Present', submittedBy: 'faculty' },
            { _id: generateId(), studentId: 'STD-2024-001 (Aarav Patel)', date: '2026-08-13', status: 'Late', submittedBy: 'faculty' },
            { _id: generateId(), studentId: 'STD-2024-001 (Aarav Patel)', date: '2026-08-14', status: 'Present', submittedBy: 'faculty' },
            { _id: generateId(), studentId: 'STD-2024-001 (Aarav Patel)', date: '2026-08-15', status: 'Present', submittedBy: 'faculty' },
            { _id: generateId(), studentId: 'STD-2024-002 (Diya Sen)', date: '2026-08-11', status: 'Present', submittedBy: 'faculty' },
            { _id: generateId(), studentId: 'STD-2024-002 (Diya Sen)', date: '2026-08-12', status: 'Present', submittedBy: 'faculty' },
            { _id: generateId(), studentId: 'STD-2024-002 (Diya Sen)', date: '2026-08-13', status: 'Present', submittedBy: 'faculty' },
            { _id: generateId(), studentId: 'STD-2024-002 (Diya Sen)', date: '2026-08-14', status: 'Present', submittedBy: 'faculty' },
            { _id: generateId(), studentId: 'STD-2024-003 (Rohan Mehta)', date: '2026-08-11', status: 'Absent', submittedBy: 'faculty' },
            { _id: generateId(), studentId: 'STD-2024-003 (Rohan Mehta)', date: '2026-08-12', status: 'Present', submittedBy: 'faculty' },
            { _id: generateId(), studentId: 'STD-2024-003 (Rohan Mehta)', date: '2026-08-13', status: 'Present', submittedBy: 'faculty' },
            { _id: generateId(), studentId: 'STD-2024-003 (Rohan Mehta)', date: '2026-08-14', status: 'Late', submittedBy: 'faculty' },
            { _id: generateId(), studentId: 'STD-2024-004 (Priya Sharma)', date: '2026-08-11', status: 'Present', submittedBy: 'faculty' },
            { _id: generateId(), studentId: 'STD-2024-004 (Priya Sharma)', date: '2026-08-12', status: 'Late', submittedBy: 'faculty' },
            { _id: generateId(), studentId: 'STD-2024-004 (Priya Sharma)', date: '2026-08-13', status: 'Present', submittedBy: 'faculty' },
            { _id: generateId(), studentId: 'STD-2024-005 (Siddharth Rao)', date: '2026-08-11', status: 'Present', submittedBy: 'faculty' },
            { _id: generateId(), studentId: 'STD-2024-005 (Siddharth Rao)', date: '2026-08-12', status: 'Present', submittedBy: 'faculty' },
            { _id: generateId(), studentId: 'STD-2024-005 (Siddharth Rao)', date: '2026-08-13', status: 'Present', submittedBy: 'faculty' },
            { _id: generateId(), studentId: 'STD-2024-005 (Siddharth Rao)', date: '2026-08-14', status: 'Present', submittedBy: 'faculty' }
        ],
        '/library': [
            { _id: generateId(), bookTitle: 'Introduction to Algorithms (4th Edition)', author: 'Thomas H. Cormen, Charles E. Leiserson', isbn: '978-0262046305', status: 'available' },
            { _id: generateId(), bookTitle: 'Clean Code: A Handbook of Agile Software', author: 'Robert C. Martin (Uncle Bob)', isbn: '978-0132350884', status: 'borrowed' },
            { _id: generateId(), bookTitle: 'Artificial Intelligence: A Modern Approach (4th Ed)', author: 'Stuart Russell & Peter Norvig', isbn: '978-0134610993', status: 'available' },
            { _id: generateId(), bookTitle: 'Database System Concepts (7th Edition)', author: 'Abraham Silberschatz, Henry Korth', isbn: '978-0078022159', status: 'available' },
            { _id: generateId(), bookTitle: 'Design Patterns: Elements of Reusable Software', author: 'Erich Gamma, Richard Helm, Ralph Johnson', isbn: '978-0201633610', status: 'borrowed' },
            { _id: generateId(), bookTitle: 'Computer Networking: A Top-Down Approach', author: 'James F. Kurose, Keith W. Ross', isbn: '978-0133594140', status: 'available' },
            { _id: generateId(), bookTitle: 'Principles of Neural Science (6th Edition)', author: 'Eric R. Kandel, John D. Koester', isbn: '978-1259642234', status: 'available' },
            { _id: generateId(), bookTitle: 'Modern Operating Systems (5th Edition)', author: 'Andrew S. Tanenbaum, Herbert Bos', isbn: '978-0137588831', status: 'available' },
            { _id: generateId(), bookTitle: 'Corporate Finance: Theory and Practice', author: 'Aswath Damodaran', isbn: '978-0471283379', status: 'borrowed' }
        ],
        '/canteen': [
            { _id: generateId(), itemName: 'Gourmet Veg Grilled Sandwich', price: '4.50', category: 'Snack', availability: true },
            { _id: generateId(), itemName: 'Paneer Tikka Kathi Roll', price: '5.25', category: 'Snack', availability: true },
            { _id: generateId(), itemName: 'North Indian Deluxe Thali', price: '8.50', category: 'Meal', availability: true },
            { _id: generateId(), itemName: 'South Indian Special Masala Dosa', price: '6.00', category: 'Meal', availability: true },
            { _id: generateId(), itemName: 'Fresh Cold Brew Coffee (Vanilla)', price: '3.25', category: 'Drink', availability: true },
            { _id: generateId(), itemName: 'Organic Mango & Berry Smoothie', price: '3.75', category: 'Drink', availability: true },
            { _id: generateId(), itemName: 'Double Dark Chocolate Chip Muffin', price: '2.50', category: 'Snack', availability: true },
            { _id: generateId(), itemName: 'Crispy Veg Spring Rolls (4 pcs)', price: '4.00', category: 'Snack', availability: true },
            { _id: generateId(), itemName: 'Mediterranean Falafel Wrap', price: '5.50', category: 'Meal', availability: true },
            { _id: generateId(), itemName: 'Matcha Green Tea Latte', price: '3.50', category: 'Drink', availability: true }
        ],
        '/events': [
            { _id: generateId(), title: 'HackTech 2026: 36-Hour National Hackathon', date: '2026-09-15', location: 'Innovation Hub & Audi B', description: 'Annual inter-university hackathon focusing on GenAI, Web3, and Smart Campus IoT with ₹3,00,000 prize pool and sponsor tracks.' },
            { _id: generateId(), title: 'Annual Cultural Fest "Euphoria 2026"', date: '2026-10-02', location: 'Main University Amphitheater', description: 'Flagship cultural celebration with live bands, drama showcases, digital art competitions, and celebrity musical night.' },
            { _id: generateId(), title: 'Keynote: Quantum Computing in Practical Engineering', date: '2026-08-28', location: 'Dr. Sarabhai Seminar Hall', description: 'Distinguished lecture by leading IBM Quantum researchers exploring practical applications in cryptography and materials science.' },
            { _id: generateId(), title: 'Alumni Mentorship & Leadership Gala', date: '2026-09-22', location: 'Executive Conference Hall', description: 'Interactive networking mixer connecting current pre-final and final-year students with high-achieving alumni working across Fortune 500 companies.' },
            { _id: generateId(), title: 'Inter-College Sports Tournament "Olympus 2026"', date: '2026-10-18', location: 'University Sports Complex', description: 'Inter-collegiate championships across Football, Basketball, Badminton, Chess, and Athletics with 32 participating universities.' },
            { _id: generateId(), title: 'International Conference on Sustainable Tech (ICST)', date: '2026-11-05', location: 'Global Convention Hall', description: 'Peer-reviewed academic research presentations and keynotes on renewable energy grids, smart cities, and green computing.' }
        ],
        '/alumni': [
            { _id: generateId(), name: 'Vikram Malhotra', batch: '2020', email: 'vikram.m@google.com', company: 'Google (Senior Software Engineer, Google Cloud)', photo: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&auto=format&fit=crop&q=80', submittedBy: 'alumni' },
            { _id: generateId(), name: 'Sneha Kulkarni', batch: '2019', email: 'sneha.k@microsoft.com', company: 'Microsoft (Product Lead, Azure AI Infrastructure)', photo: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?w=100&auto=format&fit=crop&q=80', submittedBy: 'alumni' },
            { _id: generateId(), name: 'Arjun Deshmukh', batch: '2021', email: 'arjun.d@amazon.com', company: 'Amazon Web Services (Cloud Solutions Architect)', photo: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&auto=format&fit=crop&q=80', submittedBy: 'alumni' },
            { _id: generateId(), name: 'Kavita Reddy', batch: '2018', email: 'kavita.r@goldmansachs.com', company: 'Goldman Sachs (VP Quantitative Strategy)', photo: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=100&auto=format&fit=crop&q=80', submittedBy: 'alumni' },
            { _id: generateId(), name: 'Rohan Mehra', batch: '2022', email: 'rohan.m@apple.com', company: 'Apple (Silicon Design Engineer, Apple Silicon)', photo: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&auto=format&fit=crop&q=80', submittedBy: 'alumni' },
            { _id: generateId(), name: 'Aditi Nair', batch: '2020', email: 'aditi.nair@uber.com', company: 'Uber (Senior Product Designer, Global Rides)', photo: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=100&auto=format&fit=crop&q=80', submittedBy: 'alumni' }
        ],
        examsData: [
            { id: 1, studentId: 'STD-2024-001', subject: 'Data Structures & Algorithms', marks: 88, date: '2026-06-10' },
            { id: 2, studentId: 'STD-2024-001', subject: 'Database Management Systems', marks: 92, date: '2026-06-12' },
            { id: 3, studentId: 'STD-2024-001', subject: 'Computer Networks & Protocols', marks: 85, date: '2026-06-16' },
            { id: 4, studentId: 'STD-2024-002', subject: 'Machine Learning & Statistics', marks: 95, date: '2026-06-10' },
            { id: 5, studentId: 'STD-2024-002', subject: 'Cloud Computing & DevOps', marks: 91, date: '2026-06-14' },
            { id: 6, studentId: 'STD-2024-002', subject: 'Deep Learning with PyTorch', marks: 96, date: '2026-06-18' },
            { id: 7, studentId: 'STD-2024-003', subject: 'Fluid Mechanics & Thermodynamics', marks: 78, date: '2026-06-11' },
            { id: 8, studentId: 'STD-2024-003', subject: 'Robotics & Control Systems', marks: 82, date: '2026-06-15' },
            { id: 9, studentId: 'STD-2024-004', subject: 'Corporate Financial Accounting', marks: 84, date: '2026-06-13' },
            { id: 10, studentId: 'STD-2024-004', subject: 'Investment Portfolio Analysis', marks: 89, date: '2026-06-17' },
            { id: 11, studentId: 'STD-2024-005', subject: 'Human-Computer Interaction', marks: 90, date: '2026-06-15' },
            { id: 12, studentId: 'STD-2024-005', subject: 'Visual Design & Typography', marks: 94, date: '2026-06-19' }
        ],
        examinationGradesData: [
            { gradeName: 'Grade A+ (Distinction)', minMarks: 90, maxMarks: 100 },
            { gradeName: 'Grade A (Excellent)', minMarks: 80, maxMarks: 89 },
            { gradeName: 'Grade B+ (Very Good)', minMarks: 70, maxMarks: 79 },
            { gradeName: 'Grade B (Good)', minMarks: 60, maxMarks: 69 },
            { gradeName: 'Grade C (Satisfactory)', minMarks: 50, maxMarks: 59 },
            { gradeName: 'Grade D (Pass)', minMarks: 35, maxMarks: 49 },
            { gradeName: 'Grade F (Fail)', minMarks: 0, maxMarks: 34 }
        ],
        hostelData: [
            { studentId: 'STD-2024-001 (Aarav Patel)', room: 'Block A - 204 (AC Suite)', checkin: '2026-01-10', checkout: '2026-12-20' },
            { studentId: 'STD-2024-002 (Diya Sen)', room: 'Block B - 108 (Single Study)', checkin: '2026-01-12', checkout: '2026-12-20' },
            { studentId: 'STD-2024-003 (Rohan Mehta)', room: 'Block A - 312 (Double Deluxe)', checkin: '2026-01-15', checkout: '2026-12-20' },
            { studentId: 'STD-2024-004 (Priya Sharma)', room: 'Block B - 205 (AC Suite)', checkin: '2026-02-01', checkout: '2026-12-20' },
            { studentId: 'STD-2024-005 (Siddharth Rao)', room: 'Block A - 102 (Single Study)', checkin: '2026-01-20', checkout: '2026-12-20' },
            { studentId: 'STD-2024-006 (Kabir Singhania)', room: 'Block C - 401 (Executive)', checkin: '2026-01-10', checkout: '2026-12-20' },
            { studentId: 'STD-2024-007 (Tanvi Joshi)', room: 'Block B - 302 (Single Study)', checkin: '2026-01-18', checkout: '2026-12-20' }
        ],
        idRecords: [
            { studentId: 'STD-2024-001', cardType: 'id-card', link: '#' },
            { studentId: 'STD-2024-002', cardType: 'certificate', link: '#' },
            { studentId: 'STD-2024-003', cardType: 'id-card', link: '#' },
            { studentId: 'STD-2024-004', cardType: 'certificate', link: '#' },
            { studentId: 'STD-2024-005', cardType: 'id-card', link: '#' },
            { studentId: 'STD-2024-006', cardType: 'id-card', link: '#' },
            { studentId: 'STD-2024-007', cardType: 'certificate', link: '#' }
        ],
        internPlacementData: [
            { company: 'Microsoft India R&D', internship: 'Cloud Infrastructure Intern', placement: 'Associate Software Engineer (L59)', date: '2026-07-01' },
            { company: 'Google Cloud Platform', internship: 'Software Systems Intern', placement: 'Software Engineer (L3)', date: '2026-06-15' },
            { company: 'Deloitte USI Advisory', internship: 'Cyber Threat Analyst Intern', placement: 'Cyber Risk Consultant', date: '2026-07-15' },
            { company: 'Goldman Sachs', internship: 'Summer Quant Analyst', placement: 'Quantitative Analyst Track', date: '2026-08-01' },
            { company: 'Adobe Systems', internship: 'Design & UX Research Intern', placement: 'Product Designer I', date: '2026-07-20' },
            { company: 'Amazon Web Services', internship: 'Cloud Solutions Intern', placement: 'Solutions Architect Trainee', date: '2026-08-05' },
            { company: 'Apple Inc.', internship: 'Hardware Systems Intern', placement: 'System Validation Engineer', date: '2026-08-10' },
            { company: 'Uber Engineering', internship: 'Backend Platform Intern', placement: 'Software Engineer I (Core Rides)', date: '2026-08-12' }
        ],
        facultyData: [
            { id: 'FAC-CS-101', name: 'Dr. Rajesh Sharma', department: 'Computer Science & AI' },
            { id: 'FAC-CS-102', name: 'Prof. Ananya Iyer', department: 'Machine Learning & Big Data' },
            { id: 'FAC-ME-201', name: 'Dr. Vikram Rao', department: 'Mechanical & Robotics Engineering' },
            { id: 'FAC-MA-301', name: 'Dr. Shweta Nair', department: 'Mathematics & Applied Statistics' },
            { id: 'FAC-DM-401', name: 'Prof. Kevin Thomas', department: 'Design, UI/UX & Media' },
            { id: 'FAC-EC-501', name: 'Dr. Meenakshi Sundaram', department: 'Economics & Management' },
            { id: 'FAC-PH-601', name: 'Dr. Alok Verma', department: 'Applied Physics & Quantum Labs' },
            { id: 'FAC-EE-701', name: 'Prof. Radhika Menon', department: 'Electrical & Embedded Systems' }
        ],
        marksheetData: [
            { studentId: 'STD-2024-001', subject: 'Data Structures & Algorithms', marksObtained: 92, totalMarks: 100, percentage: '92.00' },
            { studentId: 'STD-2024-001', subject: 'Operating Systems & Kernels', marksObtained: 88, totalMarks: 100, percentage: '88.00' },
            { studentId: 'STD-2024-001', subject: 'Database Architecture', marksObtained: 95, totalMarks: 100, percentage: '95.00' },
            { studentId: 'STD-2024-001', subject: 'Computer Networks', marksObtained: 85, totalMarks: 100, percentage: '85.00' },
            { studentId: 'STD-2024-002', subject: 'Machine Learning Foundations', marksObtained: 96, totalMarks: 100, percentage: '96.00' },
            { studentId: 'STD-2024-002', subject: 'Big Data Processing', marksObtained: 91, totalMarks: 100, percentage: '91.00' },
            { studentId: 'STD-2024-002', subject: 'Deep Neural Networks', marksObtained: 94, totalMarks: 100, percentage: '94.00' },
            { studentId: 'STD-2024-003', subject: 'Thermodynamics & Heat Transfer', marksObtained: 82, totalMarks: 100, percentage: '82.00' },
            { studentId: 'STD-2024-004', subject: 'Corporate Finance & Valuation', marksObtained: 89, totalMarks: 100, percentage: '89.00' },
            { studentId: 'STD-2024-005', subject: 'User Experience Research & Prototyping', marksObtained: 93, totalMarks: 100, percentage: '93.00' }
        ],
        scholarshipData: [
            { name: 'Presidential Academic Merit Scholarship', amount: '75,000' },
            { name: 'STEM Women in Leadership Grant', amount: '60,000' },
            { name: 'National Sports Excellence Fellowship', amount: '45,000' },
            { name: 'Underrepresented Student Financial Aid', amount: '50,000' },
            { name: 'Dean’s Innovation & Research Award', amount: '65,000' },
            { name: 'Alumni Endowment Tuition Waiver', amount: '40,000' },
            { name: 'Global Diversity & Cultural Fellowship', amount: '55,000' },
            { name: 'Cybersecurity & Tech Pioneer Fellowship', amount: '70,000' }
        ],
        studentFeesData: [
            { studentId: 'STD-2024-001 (Aarav Patel)', amount: '65,000', date: '2026-07-15' },
            { studentId: 'STD-2024-002 (Diya Sen)', amount: '65,000', date: '2026-07-18' },
            { studentId: 'STD-2024-003 (Rohan Mehta)', amount: '58,000', date: '2026-07-20' },
            { studentId: 'STD-2024-004 (Priya Sharma)', amount: '62,000', date: '2026-07-22' },
            { studentId: 'STD-2024-005 (Siddharth Rao)', amount: '60,000', date: '2026-07-25' },
            { studentId: 'STD-2024-006 (Kabir Singhania)', amount: '65,000', date: '2026-07-28' },
            { studentId: 'STD-2024-007 (Tanvi Joshi)', amount: '62,000', date: '2026-08-01' }
        ],
        timeTableData: [
            { day: 'Monday', time: '09:00 - 10:30 AM', subject: 'Data Structures & Algorithms', faculty: 'Dr. Rajesh Sharma' },
            { day: 'Monday', time: '11:00 - 12:30 PM', subject: 'Database Management Systems', faculty: 'Prof. Ananya Iyer' },
            { day: 'Tuesday', time: '10:00 - 11:30 AM', subject: 'Cloud Computing & DevOps', faculty: 'Dr. Vikram Rao' },
            { day: 'Tuesday', time: '01:30 - 03:00 PM', subject: 'Artificial Intelligence & Ethics', faculty: 'Prof. Ananya Iyer' },
            { day: 'Wednesday', time: '09:00 - 10:30 AM', subject: 'Machine Learning & Statistics', faculty: 'Prof. Ananya Iyer' },
            { day: 'Thursday', time: '02:00 - 04:00 PM', subject: 'Advanced Software Engineering Lab', faculty: 'Dr. Rajesh Sharma' },
            { day: 'Friday', time: '10:00 - 11:30 AM', subject: 'Applied Mathematics & Graph Theory', faculty: 'Dr. Shweta Nair' },
            { day: 'Friday', time: '02:00 - 03:30 PM', subject: 'UI/UX Interaction Design Studio', faculty: 'Prof. Kevin Thomas' }
        ],
        transportData: [
            { studentId: 'STD-2024-001 (Aarav Patel)', route: 'Route 4: North Campus Express (Sector 12 - Univ)', vehicleNo: 'BUS-MH-02-AB-1204' },
            { studentId: 'STD-2024-002 (Diya Sen)', route: 'Route 1: City Metro Link (Central Station - Univ)', vehicleNo: 'BUS-MH-02-CD-5601' },
            { studentId: 'STD-2024-003 (Rohan Mehta)', route: 'Route 7: East Suburbs Shuttle (Palm Beach - Univ)', vehicleNo: 'BUS-MH-02-EF-8907' },
            { studentId: 'STD-2024-004 (Priya Sharma)', route: 'Route 3: West Hills Direct (Orchid Park - Univ)', vehicleNo: 'BUS-MH-02-GH-3403' },
            { studentId: 'STD-2024-005 (Siddharth Rao)', route: 'Route 2: South Gateway Shuttle (Cyber City - Univ)', vehicleNo: 'BUS-MH-02-IJ-7802' },
            { studentId: 'STD-2024-006 (Kabir Singhania)', route: 'Route 5: Airport Express Line (Terminal 2 - Univ)', vehicleNo: 'BUS-MH-02-KL-9905' },
            { studentId: 'STD-2024-007 (Tanvi Joshi)', route: 'Route 6: Green Valley Transit (Eco Park - Univ)', vehicleNo: 'BUS-MH-02-MN-4306' }
        ],
        paymentTransactions: [
            { studentId: 'STD-2024-001', amount: '65000.00', method: 'UPI', barcode: 'REF-2026-UPI-9821' },
            { studentId: 'STD-2024-002', amount: '65000.00', method: 'Net Banking', barcode: 'REF-2026-NB-4412' },
            { studentId: 'STD-2024-003', amount: '58000.00', method: 'Credit Card', barcode: 'REF-2026-CC-8763' },
            { studentId: 'STD-2024-004', amount: '62000.00', method: 'Debit Card', barcode: 'REF-2026-DC-3190' },
            { studentId: 'STD-2024-005', amount: '60000.00', method: 'UPI', barcode: 'REF-2026-UPI-7724' },
            { studentId: 'STD-2024-006', amount: '65000.00', method: 'Net Banking', barcode: 'REF-2026-NB-6109' },
            { studentId: 'STD-2024-007', amount: '62000.00', method: 'UPI', barcode: 'REF-2026-UPI-5521' }
        ],
        resultProcessingData: [
            { studentId: 'STD-2024-001', subject: 'Data Structures', obtained: 48, total: 50, percentage: '96.00', status: 'Pass' },
            { studentId: 'STD-2024-001', subject: 'Operating Systems', obtained: 44, total: 50, percentage: '88.00', status: 'Pass' },
            { studentId: 'STD-2024-002', subject: 'Machine Learning', obtained: 49, total: 50, percentage: '98.00', status: 'Pass' },
            { studentId: 'STD-2024-002', subject: 'Cloud Computing', obtained: 46, total: 50, percentage: '92.00', status: 'Pass' },
            { studentId: 'STD-2024-003', subject: 'Fluid Mechanics', obtained: 39, total: 50, percentage: '78.00', status: 'Pass' },
            { studentId: 'STD-2024-003', subject: 'Robotics Control', obtained: 41, total: 50, percentage: '82.00', status: 'Pass' },
            { studentId: 'STD-2024-004', subject: 'Financial Analysis', obtained: 42, total: 50, percentage: '84.00', status: 'Pass' },
            { studentId: 'STD-2024-005', subject: 'Interaction Design', obtained: 47, total: 50, percentage: '94.00', status: 'Pass' },
            { studentId: 'STD-2024-006', subject: 'Microprocessors', obtained: 45, total: 50, percentage: '90.00', status: 'Pass' },
            { studentId: 'STD-2024-007', subject: 'Molecular Genetics', obtained: 49, total: 50, percentage: '98.00', status: 'Pass' }
        ],
        smsHistoryData: [
            { recipient: '+91 98201 12345 (All Parents)', message: 'Notice: Mid-Term Examination schedules for Fall 2026 are published. Please check the student portal.', timestamp: '2026-08-10 10:30 AM' },
            { recipient: '+91 97690 67890 (CS Final Year)', message: 'Reminder: Campus Recruitment Drive by Microsoft starts tomorrow at 9:00 AM in Seminar Hall 1.', timestamp: '2026-08-12 04:15 PM' },
            { recipient: '+91 98111 22334 (Hostel Block A)', message: 'Maintenance Alert: Routine solar water heating maintenance scheduled on Saturday from 2 PM to 5 PM.', timestamp: '2026-08-14 02:00 PM' },
            { recipient: '+91 99304 88122 (All Faculty)', message: 'Faculty Meeting: Monthly Academic Council meeting will convene this Friday at 3:30 PM in Boardroom A.', timestamp: '2026-08-16 11:00 AM' },
            { recipient: '+91 98212 34567 (B.Tech Batch 2026)', message: 'HackTech 2026: Team registration deadline is August 25. Cash prizes and internship fast-tracks available.', timestamp: '2026-08-17 01:20 PM' }
        ]
    };

    // ==========================================================
    // INITIALIZATION / SEEDING FUNCTION
    // ==========================================================
    window.seedAllDemoData = function (force = false) {
        Object.keys(DEFAULT_DEMO_DATA).forEach(key => {
            const current = localStorage.getItem(key);
            let needsSeed = force || !current || current === 'null' || current === '[]' || current === '{}';
            
            // If it exists but has fewer items than our rich demo set, upgrade it
            if (!needsSeed && Array.isArray(DEFAULT_DEMO_DATA[key])) {
                try {
                    const parsed = JSON.parse(current);
                    if (Array.isArray(parsed) && parsed.length < 2) {
                        needsSeed = true;
                    }
                } catch {
                    needsSeed = true;
                }
            }

            if (needsSeed) {
                localStorage.setItem(key, JSON.stringify(DEFAULT_DEMO_DATA[key]));
            }
        });

        // Ensure default session if none exists
        if (!localStorage.getItem('loggedInUser')) {
            const adminUser = DEFAULT_DEMO_DATA.users[0];
            localStorage.setItem('loggedInUser', JSON.stringify(adminUser));
            localStorage.setItem('userRole', adminUser.role);
            localStorage.setItem('role', adminUser.role);
            localStorage.setItem('authenticated', 'true');
            localStorage.setItem('token', 'mock-jwt-token-admin');
        }

        if (force) {
            showGlobalToast('✨ Demo data successfully re-seeded and refreshed!');
            setTimeout(() => window.location.reload(), 500);
        }
    };

    // RUN SYNCHRONOUSLY IMMEDIATELY!
    seedAllDemoData(false);

    // ==========================================================
    // GLOBAL REST API SIMULATOR
    // ==========================================================
    window.apiFetch = async function (endpoint, options = {}) {
        const method = options.method || 'GET';
        const body = options.body ? JSON.parse(options.body) : null;

        // Artificial latency for realism
        await new Promise(r => setTimeout(r, 40));

        // 1. Authentication Endpoints
        if (endpoint === '/api/auth/login' && method === 'POST') {
            const users = JSON.parse(localStorage.getItem('users') || '[]');
            const user = users.find(u => (u.username === body.username || u.email === body.username) && u.password === body.password);
            if (user) {
                return {
                    message: "Login successful",
                    token: "mock-jwt-token-" + user.role,
                    role: user.role,
                    user: {
                        id: user._id,
                        username: user.username,
                        fullName: user.fullName,
                        role: user.role,
                        email: user.email
                    }
                };
            } else {
                throw new Error("Invalid username or password. Please try demo credentials (e.g. admin / admin123)");
            }
        }

        if (endpoint === '/api/auth/signup' && method === 'POST') {
            const users = JSON.parse(localStorage.getItem('users') || '[]');
            if (users.some(u => u.username === body.username || u.email === body.email)) {
                throw new Error("Username or Email already registered");
            }
            const newUser = {
                _id: generateId(),
                fullName: body.fullName || body.username,
                username: body.username,
                email: body.email,
                password: body.password,
                role: body.role || 'student'
            };
            users.push(newUser);
            localStorage.setItem('users', JSON.stringify(users));
            return { message: "Account registered successfully!", user: newUser };
        }

        // 2. Generic REST Data Endpoints
        const collectionKey = endpoint.split('?')[0];
        
        let dbKey = collectionKey;
        if (!DEFAULT_DEMO_DATA[dbKey]) {
            const parts = endpoint.split('/').filter(Boolean);
            if (parts.length >= 2) {
                dbKey = '/' + parts[0];
            }
        }

        let dataset = JSON.parse(localStorage.getItem(dbKey) || '[]');
        if (dataset.length === 0 && DEFAULT_DEMO_DATA[dbKey]) {
            dataset = DEFAULT_DEMO_DATA[dbKey];
            localStorage.setItem(dbKey, JSON.stringify(dataset));
        }

        if (method === 'GET') {
            return dataset;
        }

        if (method === 'POST') {
            const newRecord = { _id: generateId(), ...body, createdAt: new Date().toISOString() };
            dataset.unshift(newRecord);
            localStorage.setItem(dbKey, JSON.stringify(dataset));
            return newRecord;
        }

        if (method === 'PUT') {
            const id = endpoint.split('/').pop();
            const index = dataset.findIndex(item => item._id === id || item.id === id);
            if (index !== -1) {
                dataset[index] = { ...dataset[index], ...body, updatedAt: new Date().toISOString() };
                localStorage.setItem(dbKey, JSON.stringify(dataset));
                return dataset[index];
            }
            throw new Error("Record not found to update");
        }

        if (method === 'DELETE') {
            const id = endpoint.split('/').pop();
            dataset = dataset.filter(item => item._id !== id && item.id !== id && String(item.id) !== String(id));
            localStorage.setItem(dbKey, JSON.stringify(dataset));
            return { message: "Record deleted successfully" };
        }

        return dataset;
    };

    // ==========================================================
    // GLOBAL TOAST NOTIFICATION UTILITY
    // ==========================================================
    window.showGlobalToast = function (message, duration = 3000) {
        let toast = document.getElementById('sms-global-toast');
        if (!toast) {
            toast = document.createElement('div');
            toast.id = 'sms-global-toast';
            toast.style.cssText = 'position:fixed;bottom:20px;right:20px;z-index:99999;padding:12px 20px;border-radius:14px;font-weight:700;font-size:14px;background:#111827;color:#ffffff;box-shadow:0 10px 25px rgba(0,0,0,0.3);transition:all 0.3s ease;transform:translateY(50px);opacity:0;display:flex;align-items:center;gap:10px;font-family:sans-serif;border:1px solid rgba(255,255,255,0.2);';
            document.body.appendChild(toast);
        }
        toast.innerHTML = message;
        toast.style.transform = 'translateY(0)';
        toast.style.opacity = '1';
        setTimeout(() => {
            toast.style.transform = 'translateY(50px)';
            toast.style.opacity = '0';
        }, duration);
    };

    // ==========================================================
    // AUTO-INJECT GLOBAL BRAND HEADER ACROSS ALL PAGES (SELF-CONTAINED CSS)
    // ==========================================================
    function renderMainNavigation() {
        const navPlaceholder = document.getElementById('main-nav');
        if (!navPlaceholder) return;

        const loggedInUser = JSON.parse(localStorage.getItem('loggedInUser') || '{}');
        const currentRole = localStorage.getItem('userRole') || loggedInUser.role || 'admin';

        navPlaceholder.innerHTML = `
            <style>
                .sms-nav-bar {
                    display: flex;
                    flex-wrap: wrap;
                    justify-content: space-between;
                    align-items: center;
                    background: rgba(255, 255, 255, 0.98);
                    border-bottom: 1px solid #e5e7eb;
                    padding: 10px 24px;
                    gap: 12px;
                    position: sticky;
                    top: 0;
                    z-index: 1000;
                    box-shadow: 0 1px 3px rgba(0,0,0,0.05);
                    font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
                }
                .sms-nav-left {
                    display: flex;
                    align-items: center;
                    gap: 12px;
                }
                .sms-nav-brand {
                    display: flex;
                    align-items: center;
                    gap: 8px;
                    font-weight: 900;
                    color: #111827;
                    text-decoration: none;
                    font-size: 18px;
                    letter-spacing: -0.5px;
                }
                .sms-brand-icon {
                    background: linear-gradient(135deg, #4f46e5, #7c3aed);
                    color: white;
                    padding: 6px;
                    border-radius: 8px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                }
                .sms-nav-dash-link {
                    font-size: 13px;
                    font-weight: 700;
                    color: #4f46e5;
                    text-decoration: none;
                    padding: 4px 8px;
                    border-radius: 6px;
                    background: #eef2ff;
                    transition: all 0.2s;
                }
                .sms-nav-dash-link:hover {
                    background: #e0e7ff;
                }
                .sms-nav-right {
                    display: flex;
                    align-items: center;
                    flex-wrap: wrap;
                    gap: 10px;
                }
                .sms-nav-role-badge {
                    display: flex;
                    align-items: center;
                    font-size: 12px;
                    font-weight: 700;
                }
                .sms-nav-role-select {
                    font-size: 12px;
                    font-weight: 700;
                    border: 1px solid #d1d5db;
                    background: #f9fafb;
                    color: #1f2937;
                    border-radius: 8px;
                    padding: 6px 10px;
                    cursor: pointer;
                    outline: none;
                }
                .sms-btn-reset {
                    display: inline-flex;
                    align-items: center;
                    gap: 6px;
                    font-size: 12px;
                    font-weight: 700;
                    background: #4f46e5;
                    color: white;
                    border: none;
                    padding: 6px 12px;
                    border-radius: 8px;
                    cursor: pointer;
                    transition: all 0.2s;
                    box-shadow: 0 1px 2px rgba(79, 70, 229, 0.3);
                }
                .sms-btn-reset:hover {
                    background: #4338ca;
                    transform: translateY(-1px);
                }
                .sms-nav-user {
                    display: flex;
                    align-items: center;
                    gap: 8px;
                    padding-left: 10px;
                    border-left: 1px solid #e5e7eb;
                }
                .sms-nav-logout {
                    background: #fee2e2;
                    color: #dc2626;
                    border: none;
                    padding: 6px 10px;
                    border-radius: 8px;
                    font-size: 12px;
                    font-weight: 700;
                    cursor: pointer;
                }
            </style>
            <div class="sms-nav-bar">
                <!-- Left: App Logo & Dashboard Link -->
                <div class="sms-nav-left">
                    <a href="dashboard.html" class="sms-nav-brand">
                        <span class="sms-brand-icon">
                            <svg style="width: 18px; height: 18px;" fill="none" stroke="currentColor" stroke-width="2.5" viewBox="0 0 24 24"><path d="M12 14l9-5-9-5-9 5 9 5z"/><path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"/></svg>
                        </span>
                        <span>SMS Pro</span>
                    </a>
                    <span style="color: #cbd5e1;">|</span>
                    <a href="dashboard.html" class="sms-nav-dash-link">
                        ← Dashboard
                    </a>
                </div>

                <!-- Right: Role Switcher, Reset Demo Data, User Profile -->
                <div class="sms-nav-right">
                    <!-- Quick Role Switcher -->
                    <div class="sms-nav-role-badge">
                        <select id="sms-quick-role-select" class="sms-nav-role-select">
                            <option value="admin" ${currentRole === 'admin' ? 'selected' : ''}>👑 Administrator</option>
                            <option value="faculty" ${currentRole === 'faculty' ? 'selected' : ''}>👩‍🏫 Faculty</option>
                            <option value="student" ${currentRole === 'student' ? 'selected' : ''}>🎓 Student</option>
                            <option value="parent" ${currentRole === 'parent' ? 'selected' : ''}>👨‍👧 Parent</option>
                            <option value="alumni" ${currentRole === 'alumni' ? 'selected' : ''}>🌟 Alumni</option>
                        </select>
                    </div>

                    <!-- Reset Demo Data Button -->
                    <button onclick="window.seedAllDemoData(true)" class="sms-btn-reset" title="Reset all data back to realistic human demo records">
                        <svg style="width: 14px; height: 14px;" fill="none" stroke="currentColor" stroke-width="2.5" viewBox="0 0 24 24"><path d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"/></svg>
                        <span>Reset Demo Data</span>
                    </button>

                    <!-- Logged in User info -->
                    <div class="sms-nav-user">
                        <span style="font-size: 12px; font-weight: 700; color: #1f2937;">${loggedInUser.fullName || 'User'}</span>
                        <button onclick="localStorage.clear(); window.location.href='login.html';" class="sms-nav-logout" title="Logout">
                            Logout
                        </button>
                    </div>
                </div>
            </div>
        `;

        // Handle role switcher change
        const roleSelect = document.getElementById('sms-quick-role-select');
        if (roleSelect) {
            roleSelect.addEventListener('change', function (e) {
                const newRole = e.target.value;
                const users = JSON.parse(localStorage.getItem('users') || '[]');
                const matchedUser = users.find(u => u.role === newRole) || { fullName: newRole.toUpperCase() + ' User', role: newRole, username: newRole };
                
                localStorage.setItem('userRole', newRole);
                localStorage.setItem('role', newRole);
                localStorage.setItem('loggedInUser', JSON.stringify(matchedUser));
                showGlobalToast(`Switched role to: ${newRole.toUpperCase()}`);
                setTimeout(() => window.location.reload(), 300);
            });
        }
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', renderMainNavigation);
    } else {
        renderMainNavigation();
    }
})();
