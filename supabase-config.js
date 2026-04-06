// Supabase Configuration for Baraka DevX Military Platform
const SUPABASE_CONFIG = {
    url: 'https://poyzhoxnvbfumgtcklia.supabase.co',
    anonKey: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.sb_publishable_riXA6qvXzB6Bo3z8bJYRUg_D4E8fVWV',
    database: {
        host: 'db.poyzhoxnvbfumgtcklia.supabase.co',
        user: 'postgres',
        password: 'YOUR-PASSWORD',
        database: 'postgres',
        port: 5432,
        ssl: true
    }
};

// Initialize Supabase client
const { createClient } = supabase;
const supabase = createClient(SUPABASE_CONFIG.url, SUPABASE_CONFIG.anonKey);

// Export for use in other modules
window.supabase = supabase;
window.SUPABASE_CONFIG = SUPABASE_CONFIG;

console.log('Supabase: Military platform database initialized');
