// ==========================================================
// STUDENT MANAGEMENT SYSTEM - CORE LOGIC & DEMO DATA SEEDER
// ==========================================================

(function () {
    // Helper to generate fake MongoDB-style object IDs
    const generateId = () => Math.random().toString(16).slice(2) + Math.random().toString(16).slice(2);

    // ==========================================================
    // REALISTIC HUMAN-CURATED DEMO DATASETS
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
            { _id: generateId(), name: 'Ananya Mukherjee', type: 'B.A Economics & Public Policy', submittedBy: 'student', details: 'High School GPA: 3.78 / 4.0, Model UN Best Delegate, Status: Verified', status: 'Approved', createdAt: '2026-07-10T13:10:00.000Z' }
        ],
        '/attendance': [
            { _id: generateId(), studentId: 'STD-2024-001 (Aarav Patel)', date: '2026-08-11', status: 'Present', submittedBy: 'faculty' },
            { _id: generateId(), studentId: 'STD-2024-001 (Aarav Patel)', date: '2026-08-12', status: 'Present', submittedBy: 'faculty' },
            { _id: generateId(), studentId: 'STD-2024-001 (Aarav Patel)', date: '2026-08-13', status: 'Late', submittedBy: 'faculty' },
            { _id: generateId(), studentId: 'STD-2024-001 (Aarav Patel)', date: '2026-08-14', status: 'Present', submittedBy: 'faculty' },
            { _id: generateId(), studentId: 'STD-2024-002 (Diya Sen)', date: '2026-08-11', status: 'Present', submittedBy: 'faculty' },
            { _id: generateId(), studentId: 'STD-2024-002 (Diya Sen)', date: '2026-08-12', status: 'Present', submittedBy: 'faculty' },
            { _id: generateId(), studentId: 'STD-2024-002 (Diya Sen)', date: '2026-08-13', status: 'Present', submittedBy: 'faculty' },
            { _id: generateId(), studentId: 'STD-2024-002 (Diya Sen)', date: '2026-08-14', status: 'Present', submittedBy: 'faculty' },
            { _id: generateId(), studentId: 'STD-2024-003 (Rohan Mehta)', date: '2026-08-11', status: 'Absent', submittedBy: 'faculty' },
            { _id: generateId(), studentId: 'STD-2024-003 (Rohan Mehta)', date: '2026-08-12', status: 'Present', submittedBy: 'faculty' },
            { _id: generateId(), studentId: 'STD-2024-003 (Rohan Mehta)', date: '2026-08-13', status: 'Present', submittedBy: 'faculty' },
            { _id: generateId(), studentId: 'STD-2024-004 (Priya Sharma)', date: '2026-08-11', status: 'Present', submittedBy: 'faculty' },
            { _id: generateId(), studentId: 'STD-2024-004 (Priya Sharma)', date: '2026-08-12', status: 'Late', submittedBy: 'faculty' },
            { _id: generateId(), studentId: 'STD-2024-005 (Siddharth Rao)', date: '2026-08-11', status: 'Present', submittedBy: 'faculty' },
            { _id: generateId(), studentId: 'STD-2024-005 (Siddharth Rao)', date: '2026-08-12', status: 'Present', submittedBy: 'faculty' }
        ],
        '/library': [
            { _id: generateId(), bookTitle: 'Introduction to Algorithms (4th Edition)', author: 'Thomas H. Cormen, Charles E. Leiserson', isbn: '978-0262046305', status: 'available' },
            { _id: generateId(), bookTitle: 'Clean Code: A Handbook of Agile Software', author: 'Robert C. Martin (Uncle Bob)', isbn: '978-0132350884', status: 'borrowed' },
            { _id: generateId(), bookTitle: 'Artificial Intelligence: A Modern Approach', author: 'Stuart Russell & Peter Norvig', isbn: '978-0134610993', status: 'available' },
            { _id: generateId(), bookTitle: 'Database System Concepts (7th Edition)', author: 'Abraham Silberschatz, Henry Korth', isbn: '978-0078022159', status: 'available' },
            { _id: generateId(), bookTitle: 'Design Patterns: Elements of Reusable Software', author: 'Erich Gamma, Richard Helm', isbn: '978-0201633610', status: 'borrowed' },
            { _id: generateId(), bookTitle: 'Computer Networking: A Top-Down Approach', author: 'James F. Kurose, Keith W. Ross', isbn: '978-0133594140', status: 'available' },
            { _id: generateId(), bookTitle: 'Principles of Neural Science (6th Edition)', author: 'Eric R. Kandel, John D. Koester', isbn: '978-1259642234', status: 'available' }
        ],
        '/canteen': [
            { _id: generateId(), itemName: 'Gourmet Veg Grilled Sandwich', price: '4.50', category: 'Snack', availability: true },
            { _id: generateId(), itemName: 'Paneer Tikka Kathi Roll', price: '5.25', category: 'Snack', availability: true },
            { _id: generateId(), itemName: 'North Indian Deluxe Thali', price: '8.50', category: 'Meal', availability: true },
            { _id: generateId(), itemName: 'South Indian Special Masala Dosa', price: '6.00', category: 'Meal', availability: true },
            { _id: generateId(), itemName: 'Fresh Cold Brew Coffee (Vanilla)', price: '3.25', category: 'Drink', availability: true },
            { _id: generateId(), itemName: 'Organic Mango & Berry Smoothie', price: '3.75', category: 'Drink', availability: true },
            { _id: generateId(), itemName: 'Double Dark Chocolate Chip Muffin', price: '2.50', category: 'Snack', availability: true },
            { _id: generateId(), itemName: 'Crispy Veg Spring Rolls (4 pcs)', price: '4.00', category: 'Snack', availability: true }
        ],
        '/events': [
            { _id: generateId(), title: 'HackTech 2026: 36-Hour National Hackathon', date: '2026-09-15', location: 'Innovation Hub & Audi B', description: 'Annual inter-university hackathon focusing on GenAI, Web3, and Smart Campus IoT with ₹3,00,000 prize pool and sponsor tracks.' },
            { _id: generateId(), title: 'Annual Cultural Fest "Euphoria 2026"', date: '2026-10-02', location: 'Main University Amphitheater', description: 'Flagship cultural celebration with live bands, drama showcases, digital art competitions, and celebrity musical night.' },
            { _id: generateId(), title: 'Keynote: Quantum Computing in Practical Engineering', date: '2026-08-28', location: 'Dr. Sarabhai Seminar Hall', description: 'Distinguished lecture by leading IBM Quantum researchers exploring practical applications in cryptography and materials science.' },
            { _id: generateId(), title: 'Alumni Mentorship & Leadership Gala', date: '2026-09-22', location: 'Executive Conference Hall', description: 'Interactive networking mixer connecting current pre-final and final-year students with high-achieving alumni working across Fortune 500 companies.' }
        ],
        '/alumni': [
            { _id: generateId(), name: 'Vikram Malhotra', batch: '2020', email: 'vikram.m@google.com', company: 'Google (Senior Software Engineer)', photo: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&auto=format&fit=crop&q=80', submittedBy: 'alumni' },
            { _id: generateId(), name: 'Sneha Kulkarni', batch: '2019', email: 'sneha.k@microsoft.com', company: 'Microsoft (Product Lead, Azure AI)', photo: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?w=100&auto=format&fit=crop&q=80', submittedBy: 'alumni' },
            { _id: generateId(), name: 'Arjun Deshmukh', batch: '2021', email: 'arjun.d@amazon.com', company: 'Amazon Web Services (Cloud Solutions Architect)', photo: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&auto=format&fit=crop&q=80', submittedBy: 'alumni' },
            { _id: generateId(), name: 'Kavita Reddy', batch: '2018', email: 'kavita.r@goldmansachs.com', company: 'Goldman Sachs (VP Quantitative Strategy)', photo: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=100&auto=format&fit=crop&q=80', submittedBy: 'alumni' }
        ],
        examsData: [
            { id: 1, studentId: 'STD-2024-001', subject: 'Data Structures & Algorithms', marks: 88, date: '2026-06-10' },
            { id: 2, studentId: 'STD-2024-001', subject: 'Database Management Systems', marks: 92, date: '2026-06-12' },
            { id: 3, studentId: 'STD-2024-002', subject: 'Machine Learning & Statistics', marks: 95, date: '2026-06-10' },
            { id: 4, studentId: 'STD-2024-002', subject: 'Cloud Computing & DevOps', marks: 91, date: '2026-06-14' },
            { id: 5, studentId: 'STD-2024-003', subject: 'Fluid Mechanics & Thermodynamics', marks: 78, date: '2026-06-11' },
            { id: 6, studentId: 'STD-2024-004', subject: 'Corporate Financial Accounting', marks: 84, date: '2026-06-13' },
            { id: 7, studentId: 'STD-2024-005', subject: 'Human-Computer Interaction', marks: 90, date: '2026-06-15' }
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
            { studentId: 'STD-2024-005 (Siddharth Rao)', room: 'Block A - 102 (Single Study)', checkin: '2026-01-20', checkout: '2026-12-20' }
        ],
        idRecords: [
            { studentId: 'STD-2024-001', cardType: 'id-card', link: '#' },
            { studentId: 'STD-2024-002', cardType: 'certificate', link: '#' },
            { studentId: 'STD-2024-003', cardType: 'id-card', link: '#' },
            { studentId: 'STD-2024-004', cardType: 'certificate', link: '#' },
            { studentId: 'STD-2024-005', cardType: 'id-card', link: '#' }
        ],
        internPlacementData: [
            { company: 'Microsoft India R&D', internship: 'Cloud Infrastructure Intern', placement: 'Associate Software Engineer (L59)', date: '2026-07-01' },
            { company: 'Google Cloud Platform', internship: 'Software Systems Intern', placement: 'Software Engineer (L3)', date: '2026-06-15' },
            { company: 'Deloitte USI Advisory', internship: 'Cyber Threat Analyst Intern', placement: 'Cyber Risk Consultant', date: '2026-07-15' },
            { company: 'Goldman Sachs', internship: 'Summer Quant Analyst', placement: 'Quantitative Analyst Analyst Track', date: '2026-08-01' },
            { company: 'Adobe Systems', internship: 'Design & UX Research Intern', placement: 'Product Designer I', date: '2026-07-20' },
            { company: 'Amazon Web Services', internship: 'Cloud Solutions Intern', placement: 'Solutions Architect Trainee', date: '2026-08-05' }
        ],
        facultyData: [
            { id: 'FAC-CS-101', name: 'Dr. Rajesh Sharma', department: 'Computer Science & AI' },
            { id: 'FAC-CS-102', name: 'Prof. Ananya Iyer', department: 'Machine Learning & Big Data' },
            { id: 'FAC-ME-201', name: 'Dr. Vikram Rao', department: 'Mechanical & Robotics Engineering' },
            { id: 'FAC-MA-301', name: 'Dr. Shweta Nair', department: 'Mathematics & Applied Statistics' },
            { id: 'FAC-DM-401', name: 'Prof. Kevin Thomas', department: 'Design, UI/UX & Media' },
            { id: 'FAC-EC-501', name: 'Dr. Meenakshi Sundaram', department: 'Economics & Management' }
        ],
        marksheetData: [
            { studentId: 'STD-2024-001', subject: 'Data Structures & Algorithms', marksObtained: 92, totalMarks: 100, percentage: '92.00' },
            { studentId: 'STD-2024-001', subject: 'Operating Systems & Kernels', marksObtained: 88, totalMarks: 100, percentage: '88.00' },
            { studentId: 'STD-2024-001', subject: 'Database Architecture', marksObtained: 95, totalMarks: 100, percentage: '95.00' },
            { studentId: 'STD-2024-001', subject: 'Computer Networks', marksObtained: 85, totalMarks: 100, percentage: '85.00' },
            { studentId: 'STD-2024-002', subject: 'Machine Learning Foundations', marksObtained: 96, totalMarks: 100, percentage: '96.00' },
            { studentId: 'STD-2024-002', subject: 'Big Data Processing', marksObtained: 91, totalMarks: 100, percentage: '91.00' }
        ],
        scholarshipData: [
            { name: 'Presidential Academic Merit Scholarship', amount: '75,000' },
            { name: 'STEM Women in Leadership Grant', amount: '60,000' },
            { name: 'National Sports Excellence Fellowship', amount: '45,000' },
            { name: 'Underrepresented Student Financial Aid', amount: '50,000' },
            { name: 'Dean’s Innovation & Research Award', amount: '65,000' },
            { name: 'Alumni Endowment Tuition Waiver', amount: '40,000' }
        ],
        studentFeesData: [
            { studentId: 'STD-2024-001 (Aarav Patel)', amount: '65,000', date: '2026-07-15' },
            { studentId: 'STD-2024-002 (Diya Sen)', amount: '65,000', date: '2026-07-18' },
            { studentId: 'STD-2024-003 (Rohan Mehta)', amount: '58,000', date: '2026-07-20' },
            { studentId: 'STD-2024-004 (Priya Sharma)', amount: '62,000', date: '2026-07-22' },
            { studentId: 'STD-2024-005 (Siddharth Rao)', amount: '60,000', date: '2026-07-25' }
        ],
        timeTableData: [
            { day: 'Monday', time: '09:00 - 10:30 AM', subject: 'Data Structures & Algorithms', faculty: 'Dr. Rajesh Sharma' },
            { day: 'Monday', time: '11:00 - 12:30 PM', subject: 'Database Management Systems', faculty: 'Prof. Ananya Iyer' },
            { day: 'Tuesday', time: '10:00 - 11:30 AM', subject: 'Cloud Computing & DevOps', faculty: 'Dr. Vikram Rao' },
            { day: 'Wednesday', time: '09:00 - 10:30 AM', subject: 'Machine Learning & Statistics', faculty: 'Prof. Ananya Iyer' },
            { day: 'Thursday', time: '02:00 - 04:00 PM', subject: 'Advanced Software Engineering Lab', faculty: 'Dr. Rajesh Sharma' },
            { day: 'Friday', time: '10:00 - 11:30 AM', subject: 'Applied Mathematics & Graph Theory', faculty: 'Dr. Shweta Nair' }
        ],
        transportData: [
            { studentId: 'STD-2024-001 (Aarav Patel)', route: 'Route 4: North Campus Express (Sector 12 - Univ)', vehicleNo: 'BUS-MH-02-AB-1204' },
            { studentId: 'STD-2024-002 (Diya Sen)', route: 'Route 1: City Metro Link (Central Station - Univ)', vehicleNo: 'BUS-MH-02-CD-5601' },
            { studentId: 'STD-2024-003 (Rohan Mehta)', route: 'Route 7: East Suburbs Shuttle (Palm Beach - Univ)', vehicleNo: 'BUS-MH-02-EF-8907' },
            { studentId: 'STD-2024-004 (Priya Sharma)', route: 'Route 3: West Hills Direct (Orchid Park - Univ)', vehicleNo: 'BUS-MH-02-GH-3403' },
            { studentId: 'STD-2024-005 (Siddharth Rao)', route: 'Route 2: South Gateway Shuttle (Cyber City - Univ)', vehicleNo: 'BUS-MH-02-IJ-7802' }
        ],
        paymentTransactions: [
            { studentId: 'STD-2024-001', amount: '65000.00', method: 'UPI', barcode: 'REF-2026-UPI-9821' },
            { studentId: 'STD-2024-002', amount: '65000.00', method: 'Net Banking', barcode: 'REF-2026-NB-4412' },
            { studentId: 'STD-2024-003', amount: '58000.00', method: 'Credit Card', barcode: 'REF-2026-CC-8763' },
            { studentId: 'STD-2024-004', amount: '62000.00', method: 'Debit Card', barcode: 'REF-2026-DC-3190' },
            { studentId: 'STD-2024-005', amount: '60000.00', method: 'UPI', barcode: 'REF-2026-UPI-7724' }
        ],
        resultProcessingData: [
            { studentId: 'STD-2024-001', subject: 'Data Structures', obtained: 48, total: 50, percentage: '96.00', status: 'Pass' },
            { studentId: 'STD-2024-001', subject: 'Operating Systems', obtained: 44, total: 50, percentage: '88.00', status: 'Pass' },
            { studentId: 'STD-2024-002', subject: 'Machine Learning', obtained: 49, total: 50, percentage: '98.00', status: 'Pass' },
            { studentId: 'STD-2024-003', subject: 'Fluid Mechanics', obtained: 39, total: 50, percentage: '78.00', status: 'Pass' },
            { studentId: 'STD-2024-004', subject: 'Financial Analysis', obtained: 42, total: 50, percentage: '84.00', status: 'Pass' },
            { studentId: 'STD-2024-005', subject: 'Interaction Design', obtained: 47, total: 50, percentage: '94.00', status: 'Pass' }
        ],
        smsHistoryData: [
            { recipient: '+91 98201 12345 (All Parents)', message: 'Notice: Mid-Term Examination schedules for Fall 2026 are published. Please check the student portal.', timestamp: '2026-08-10 10:30 AM' },
            { recipient: '+91 97690 67890 (CS Final Year)', message: 'Reminder: Campus Recruitment Drive by Microsoft starts tomorrow at 9:00 AM in Seminar Hall 1.', timestamp: '2026-08-12 04:15 PM' },
            { recipient: '+91 98111 22334 (Hostel Block A)', message: 'Maintenance Alert: Routine solar water heating maintenance scheduled on Saturday from 2 PM to 5 PM.', timestamp: '2026-08-14 02:00 PM' }
        ]
    };

    // ==========================================================
    // INITIALIZATION / SEEDING FUNCTION
    // ==========================================================
    window.seedAllDemoData = function (force = false) {
        Object.keys(DEFAULT_DEMO_DATA).forEach(key => {
            if (force || !localStorage.getItem(key) || localStorage.getItem(key) === '[]') {
                localStorage.setItem(key, JSON.stringify(DEFAULT_DEMO_DATA[key]));
            }
        });

        // Ensure default session if none exists
        if (!localStorage.getItem('loggedInUser')) {
            const adminUser = DEFAULT_DEMO_DATA.users[0];
            localStorage.setItem('loggedInUser', JSON.stringify(adminUser));
            localStorage.setItem('userRole', adminUser.role);
            localStorage.setItem('authenticated', 'true');
            localStorage.setItem('token', 'mock-jwt-token-admin');
        }

        if (force) {
            showGlobalToast('✨ Demo data successfully re-seeded and refreshed!');
            setTimeout(() => window.location.reload(), 800);
        }
    };

    // Run seeding on load
    seedAllDemoData(false);

    // ==========================================================
    // GLOBAL REST API SIMULATOR
    // ==========================================================
    window.apiFetch = async function (endpoint, options = {}) {
        const method = options.method || 'GET';
        const body = options.body ? JSON.parse(options.body) : null;

        // Realistic tiny network delay
        await new Promise(resolve => setTimeout(resolve, 150));

        // AUTHENTICATION
        if (endpoint === '/auth/register') {
            const users = JSON.parse(localStorage.getItem('users') || '[]');
            if (users.find(u => u.username === body.username)) {
                throw new Error('Username already exists');
            }
            body._id = generateId();
            users.push(body);
            localStorage.setItem('users', JSON.stringify(users));
            return { success: true, user: body };
        }

        if (endpoint === '/auth/login') {
            const users = JSON.parse(localStorage.getItem('users') || '[]');
            const user = users.find(u => u.username === body.username && u.password === body.password);
            if (!user) {
                throw new Error('Invalid username or password');
            }
            return {
                user: { fullName: user.fullName, role: user.role, username: user.username, _id: user._id },
                token: 'mock-jwt-token-' + user._id
            };
        }

        // GENERIC CRUD FOR REST ENDPOINTS
        const parts = endpoint.split('/');
        const resourceUrl = '/' + parts[1]; // e.g. '/library'
        const id = parts[2];

        let data = JSON.parse(localStorage.getItem(resourceUrl) || '[]');

        if (method === 'GET') {
            if (id) {
                const item = data.find(item => item._id === id);
                if (!item) throw new Error('Item not found');
                return item;
            }
            return data;
        }

        if (method === 'POST') {
            const newItem = { ...body, _id: generateId(), createdAt: new Date().toISOString() };
            data.push(newItem);
            localStorage.setItem(resourceUrl, JSON.stringify(data));
            return newItem;
        }

        if (method === 'PUT') {
            const index = data.findIndex(item => item._id === id);
            if (index !== -1) {
                data[index] = { ...data[index], ...body, updatedAt: new Date().toISOString() };
                localStorage.setItem(resourceUrl, JSON.stringify(data));
                return data[index];
            }
            throw new Error('Item not found');
        }

        if (method === 'DELETE') {
            data = data.filter(item => item._id !== id);
            localStorage.setItem(resourceUrl, JSON.stringify(data));
            return { success: true };
        }

        throw new Error('Unsupported endpoint or method: ' + method + ' ' + endpoint);
    };

    // ==========================================================
    // TOAST NOTIFICATIONS HELPER
    // ==========================================================
    function showGlobalToast(message) {
        let toast = document.getElementById('sms-global-toast');
        if (!toast) {
            toast = document.createElement('div');
            toast.id = 'sms-global-toast';
            toast.style.cssText = `
                position: fixed;
                bottom: 24px;
                right: 24px;
                background: #1e1b4b;
                color: #ffffff;
                padding: 12px 24px;
                border-radius: 12px;
                box-shadow: 0 10px 30px rgba(0,0,0,0.3);
                font-family: system-ui, -apple-system, sans-serif;
                font-size: 14px;
                font-weight: 600;
                z-index: 999999;
                display: flex;
                align-items: center;
                gap: 10px;
                border: 1px solid rgba(255,255,255,0.2);
                transition: all 0.3s ease;
            `;
            document.body.appendChild(toast);
        }
        toast.textContent = message;
        toast.style.opacity = '1';
        toast.style.transform = 'translateY(0)';
        setTimeout(() => {
            toast.style.opacity = '0';
            toast.style.transform = 'translateY(20px)';
        }, 3000);
    }
    window.showGlobalToast = showGlobalToast;

    // ==========================================================
    // UNIFIED TOP NAVIGATION BAR INJECTION (#main-nav)
    // ==========================================================
    document.addEventListener('DOMContentLoaded', function () {
        const navEl = document.getElementById('main-nav');
        if (!navEl) return;

        const loggedInUser = JSON.parse(localStorage.getItem('loggedInUser')) || {
            fullName: 'Administrator',
            role: localStorage.getItem('userRole') || 'admin'
        };

        const currentPage = window.location.pathname.split('/').pop() || 'index.html';
        if (currentPage === 'index.html' || currentPage === 'login.html' || currentPage === 'signup.html') {
            return; // Don't render full nav on auth pages
        }

        const roleColors = {
            admin: 'bg-red-500/20 text-red-700 border-red-500/30',
            faculty: 'bg-emerald-500/20 text-emerald-700 border-emerald-500/30',
            student: 'bg-indigo-500/20 text-indigo-700 border-indigo-500/30',
            parent: 'bg-amber-500/20 text-amber-700 border-amber-500/30',
            alumni: 'bg-purple-500/20 text-purple-700 border-purple-500/30'
        };

        const currentRole = loggedInUser.role || 'admin';
        const roleBadgeClass = roleColors[currentRole] || 'bg-indigo-100 text-indigo-800 border-indigo-200';

        navEl.className = 'w-full bg-white/90 dark:bg-gray-800/90 backdrop-blur-md border-b border-gray-200 dark:border-gray-700 sticky top-0 z-50 mb-6 shadow-sm';
        navEl.innerHTML = `
            <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 flex flex-wrap items-center justify-between gap-4">
                <!-- Left: Brand & Back to Dashboard -->
                <div class="flex items-center space-x-3">
                    <a href="dashboard.html" class="flex items-center gap-2 font-bold text-gray-800 dark:text-white hover:text-indigo-600 transition text-lg tracking-tight">
                        <span class="bg-gradient-to-r from-indigo-600 to-purple-600 text-white p-1.5 rounded-lg shadow-sm">
                            <svg class="w-5 h-5" fill="none" stroke="currentColor" stroke-width="2.2" viewBox="0 0 24 24"><path d="M12 14l9-5-9-5-9 5 9 5z"/><path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"/></svg>
                        </span>
                        <span>SMS Pro</span>
                    </a>
                    <span class="text-gray-300 dark:text-gray-600">|</span>
                    <a href="dashboard.html" class="text-sm font-semibold text-indigo-600 dark:text-indigo-400 hover:underline flex items-center gap-1">
                        ← Dashboard
                    </a>
                </div>

                <!-- Right: Role Switcher, Reset Demo Data, User Profile -->
                <div class="flex items-center flex-wrap gap-2 sm:gap-3">
                    <!-- Quick Role Switcher -->
                    <div class="flex items-center text-xs font-semibold">
                        <span class="text-gray-500 dark:text-gray-400 mr-1.5 hidden sm:inline">Role:</span>
                        <select id="sms-quick-role-select" class="text-xs font-bold border border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-700 text-gray-800 dark:text-gray-200 rounded-lg px-2.5 py-1.5 focus:ring-2 focus:ring-indigo-500 cursor-pointer">
                            <option value="admin" ${currentRole === 'admin' ? 'selected' : ''}>👑 Admin</option>
                            <option value="faculty" ${currentRole === 'faculty' ? 'selected' : ''}>👩‍🏫 Faculty</option>
                            <option value="student" ${currentRole === 'student' ? 'selected' : ''}>🎓 Student</option>
                            <option value="parent" ${currentRole === 'parent' ? 'selected' : ''}>👨‍👧 Parent</option>
                            <option value="alumni" ${currentRole === 'alumni' ? 'selected' : ''}>🌟 Alumni</option>
                        </select>
                    </div>

                    <!-- Reset Demo Data Button -->
                    <button onclick="window.seedAllDemoData(true)" class="inline-flex items-center gap-1.5 text-xs font-bold bg-indigo-50 dark:bg-indigo-900/30 text-indigo-700 dark:text-indigo-300 hover:bg-indigo-100 dark:hover:bg-indigo-900/50 border border-indigo-200 dark:border-indigo-800 px-3 py-1.5 rounded-lg transition shadow-xs" title="Reset all data back to realistic human demo records">
                        <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" stroke-width="2.5" viewBox="0 0 24 24"><path d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"/></svg>
                        <span>Reset Demo Data</span>
                    </button>

                    <!-- Logged in User info -->
                    <div class="flex items-center gap-2 pl-2 border-l border-gray-200 dark:border-gray-700">
                        <div class="text-right hidden md:block">
                            <div class="text-xs font-bold text-gray-800 dark:text-gray-200">${loggedInUser.fullName || 'User'}</div>
                            <div class="text-[10px] text-gray-500 uppercase tracking-wider">${currentRole}</div>
                        </div>
                        <button onclick="localStorage.clear(); window.location.href='login.html';" class="text-xs font-semibold text-rose-600 dark:text-rose-400 hover:bg-rose-50 dark:hover:bg-rose-950/30 p-1.5 rounded-lg transition" title="Logout">
                            <svg class="w-4 h-4" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"/></svg>
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
                setTimeout(() => window.location.reload(), 400);
            });
        }
    });
})();
