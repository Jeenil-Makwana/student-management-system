window.apiFetch = async function(endpoint, options = {}) {
    const method = options.method || 'GET';
    const body = options.body ? JSON.parse(options.body) : null;
    
    // Simulate network delay to make it feel like a real backend
    await new Promise(resolve => setTimeout(resolve, 300));
    
    // Helper to generate fake MongoDB-style object IDs
    const generateId = () => Math.random().toString(16).slice(2) + Math.random().toString(16).slice(2);
    
    // ============================================
    // AUTHENTICATION MOCKS
    // ============================================
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
            throw new Error('Invalid credentials');
        }
        return {
            user: { fullName: user.fullName, role: user.role, username: user.username, _id: user._id },
            token: 'mock-jwt-token-' + user._id
        };
    }
    
    // ============================================
    // GENERIC CRUD MOCKS (for /library, /events, /canteen, etc.)
    // ============================================
    const parts = endpoint.split('/');
    const resourceUrl = '/' + parts[1]; // e.g., '/library'
    const id = parts[2]; // e.g., '123'
    
    let data = JSON.parse(localStorage.getItem(resourceUrl) || '[]');
    
    if (method === 'GET') {
        if (id) {
            const item = data.find(item => item._id === id);
            if (!item) throw new Error('Not found');
            return item;
        }
        return data; // Return all items
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
