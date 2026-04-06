// Rwanda Community Platform - Main JavaScript
class RwandaPlatform {
    constructor() {
        this.currentLanguage = 'en';
        this.services = [];
        this.jobs = [];
        this.resources = [];
        this.init();
    }

    init() {
        this.setupEventListeners();
        this.loadServices();
        this.loadJobs();
        this.setupLanguageSwitcher();
        this.setupMobileMenu();
        this.setupSmoothScrolling();
        this.initializeOfflineSupport();
    }

    setupEventListeners() {
        // Search functionality
        document.getElementById('service-search').addEventListener('input', (e) => {
            this.debounce(() => this.searchServices(e.target.value), 300)();
        });

        // Job filters
        document.getElementById('job-category').addEventListener('change', () => this.filterJobs());
        document.getElementById('job-location').addEventListener('change', () => this.filterJobs());

        // Close modal on outside click
        window.addEventListener('click', (e) => {
            if (e.target.classList.contains('modal')) {
                e.target.style.display = 'none';
            }
        });

        // Keyboard navigation
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape') {
                document.querySelectorAll('.modal').forEach(modal => {
                    modal.style.display = 'none';
                });
            }
        });
    }

    setupLanguageSwitcher() {
        const languageSelect = document.getElementById('language-select');
        languageSelect.addEventListener('change', (e) => {
            this.changeLanguage(e.target.value);
        });

        // Load saved language preference
        const savedLanguage = localStorage.getItem('rwanda-platform-language') || 'en';
        languageSelect.value = savedLanguage;
        this.changeLanguage(savedLanguage);
    }

    setupMobileMenu() {
        const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
        const navMenu = document.querySelector('.nav-menu');

        mobileMenuToggle.addEventListener('click', () => {
            navMenu.classList.toggle('active');
            const icon = mobileMenuToggle.querySelector('i');
            icon.classList.toggle('fa-bars');
            icon.classList.toggle('fa-times');
        });

        // Close menu when clicking on a link
        document.querySelectorAll('.nav-link').forEach(link => {
            link.addEventListener('click', () => {
                navMenu.classList.remove('active');
                const icon = mobileMenuToggle.querySelector('i');
                icon.classList.add('fa-bars');
                icon.classList.remove('fa-times');
            });
        });
    }

    setupSmoothScrolling() {
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', (e) => {
                e.preventDefault();
                const target = document.querySelector(anchor.getAttribute('href'));
                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            });
        });
    }

    // Service Management
    async loadServices() {
        try {
            // Simulate API call - in real implementation, this would fetch from a server
            this.services = this.getMockServices();
            this.renderServices(this.services);
        } catch (error) {
            console.error('Error loading services:', error);
            this.showToast('Error loading services', 'error');
        }
    }

    getMockServices() {
        return [
            {
                id: 1,
                name: 'Healthcare Services',
                description: 'Find hospitals, clinics, and health centers near you',
                icon: 'fa-hospital',
                category: 'health',
                contact: '912',
                locations: ['Kigali', 'Northern Province', 'Southern Province'],
                services: ['Emergency Care', 'Maternity Services', 'Vaccination', 'General Consultation']
            },
            {
                id: 2,
                name: 'Education Services',
                description: 'Schools, universities, and educational programs',
                icon: 'fa-graduation-cap',
                category: 'education',
                contact: '2020',
                locations: ['Kigali', 'All Provinces'],
                services: ['Primary Education', 'Secondary Education', 'Higher Education', 'Vocational Training']
            },
            {
                id: 3,
                name: 'Government Services',
                description: 'Access government offices and administrative services',
                icon: 'fa-landmark',
                category: 'government',
                contact: '2021',
                locations: ['Kigali', 'All Districts'],
                services: ['ID Card Services', 'Passport Services', 'Business Registration', 'Tax Services']
            },
            {
                id: 4,
                name: 'Agricultural Services',
                description: 'Farming support and agricultural resources',
                icon: 'fa-seedling',
                category: 'agriculture',
                contact: '2022',
                locations: ['All Provinces'],
                services: ['Farm Input Distribution', 'Agricultural Training', 'Market Information', 'Extension Services']
            },
            {
                id: 5,
                name: 'Financial Services',
                description: 'Banking, microfinance, and financial assistance',
                icon: 'fa-piggy-bank',
                category: 'finance',
                contact: '2023',
                locations: ['Kigali', 'Major Towns'],
                services: ['Banking Services', 'Microfinance Loans', 'Mobile Banking', 'Financial Literacy']
            },
            {
                id: 6,
                name: 'Legal Services',
                description: 'Legal aid and justice system access',
                icon: 'fa-balance-scale',
                category: 'legal',
                contact: '2024',
                locations: ['Kigali', 'Provincial Capitals'],
                services: ['Legal Aid', 'Mediation Services', 'Court Information', 'Legal Documentation']
            }
        ];
    }

    renderServices(services) {
        const servicesGrid = document.getElementById('services-grid');
        servicesGrid.innerHTML = '';

        services.forEach(service => {
            const serviceCard = document.createElement('div');
            serviceCard.className = 'service-card';
            serviceCard.onclick = () => this.showServiceDetails(service);

            serviceCard.innerHTML = `
                <i class="fas ${service.icon}"></i>
                <h3>${service.name}</h3>
                <p>${service.description}</p>
                <div class="service-meta">
                    <span><i class="fas fa-phone"></i> ${service.contact}</span>
                    <span><i class="fas fa-map-marker-alt"></i> ${service.locations.length} locations</span>
                </div>
            `;

            servicesGrid.appendChild(serviceCard);
        });
    }

    searchServices(query) {
        const filtered = this.services.filter(service => 
            service.name.toLowerCase().includes(query.toLowerCase()) ||
            service.description.toLowerCase().includes(query.toLowerCase()) ||
            service.category.toLowerCase().includes(query.toLowerCase())
        );
        this.renderServices(filtered);
    }

    showServiceDetails(service) {
        const modal = document.getElementById('service-modal');
        const modalBody = document.getElementById('modal-body');

        modalBody.innerHTML = `
            <div class="service-details">
                <div class="service-header">
                    <i class="fas ${service.icon}" style="font-size: 3rem; color: var(--primary-color);"></i>
                    <h2>${service.name}</h2>
                </div>
                <p>${service.description}</p>
                
                <div class="service-info">
                    <h3>Contact Information</h3>
                    <p><i class="fas fa-phone"></i> <strong>Hotline:</strong> ${service.contact}</p>
                    <p><i class="fas fa-map-marker-alt"></i> <strong>Available in:</strong> ${service.locations.join(', ')}</p>
                </div>

                <div class="services-offered">
                    <h3>Services Offered</h3>
                    <ul>
                        ${service.services.map(s => `<li>${s}</li>`).join('')}
                    </ul>
                </div>

                <div class="service-actions">
                    <button class="btn btn-primary" onclick="platform.callService('${service.contact}')">
                        <i class="fas fa-phone"></i> Call Now
                    </button>
                    <button class="btn btn-outline" onclick="platform.getDirections('${service.name}')">
                        <i class="fas fa-directions"></i> Get Directions
                    </button>
                </div>
            </div>
        `;

        modal.style.display = 'block';
    }

    // Job Management
    async loadJobs() {
        try {
            this.jobs = this.getMockJobs();
            this.renderJobs(this.jobs);
        } catch (error) {
            console.error('Error loading jobs:', error);
            this.showToast('Error loading jobs', 'error');
        }
    }

    getMockJobs() {
        return [
            {
                id: 1,
                title: 'Software Developer',
                company: 'Rwanda Tech Hub',
                location: 'Kigali',
                category: 'technology',
                type: 'Full-time',
                salary: 'RWF 800,000 - 1,200,000',
                description: 'Looking for experienced software developers to join our team.',
                requirements: ['3+ years experience', 'JavaScript/Python knowledge', 'Problem-solving skills'],
                posted: '2 days ago',
                deadline: '2024-02-15'
            },
            {
                id: 2,
                title: 'Nurse',
                company: 'Kigali Teaching Hospital',
                location: 'Kigali',
                category: 'healthcare',
                type: 'Full-time',
                salary: 'RWF 300,000 - 500,000',
                description: 'Registered nurses needed for various departments.',
                requirements: ['Nursing degree', 'Valid license', '1+ year experience'],
                posted: '1 week ago',
                deadline: '2024-02-20'
            },
            {
                id: 3,
                title: 'Agricultural Officer',
                company: 'Ministry of Agriculture',
                location: 'Eastern Province',
                category: 'agriculture',
                type: 'Full-time',
                salary: 'RWF 400,000 - 600,000',
                description: 'Support farmers with modern agricultural techniques.',
                requirements: ['Agriculture degree', 'Field experience', 'Communication skills'],
                posted: '3 days ago',
                deadline: '2024-02-18'
            },
            {
                id: 4,
                title: 'Primary School Teacher',
                company: 'Rwanda Education Board',
                location: 'Northern Province',
                category: 'education',
                type: 'Full-time',
                salary: 'RWF 200,000 - 350,000',
                description: 'Dedicated teachers needed for primary education.',
                requirements: ['Teaching certificate', 'Passion for education', 'Patience and dedication'],
                posted: '5 days ago',
                deadline: '2024-02-25'
            },
            {
                id: 5,
                title: 'Administrative Assistant',
                company: 'Local Government Office',
                location: 'Southern Province',
                category: 'government',
                type: 'Full-time',
                salary: 'RWF 250,000 - 400,000',
                description: 'Administrative support for government services.',
                requirements: ['High school diploma', 'Computer skills', 'Organizational skills'],
                posted: '1 day ago',
                deadline: '2024-02-12'
            }
        ];
    }

    renderJobs(jobs) {
        const jobsList = document.getElementById('jobs-list');
        jobsList.innerHTML = '';

        if (jobs.length === 0) {
            jobsList.innerHTML = '<p style="text-align: center; color: #666;">No jobs found matching your criteria.</p>';
            return;
        }

        jobs.forEach(job => {
            const jobCard = document.createElement('div');
            jobCard.className = 'job-card';

            jobCard.innerHTML = `
                <div class="job-header">
                    <div>
                        <h3 class="job-title">${job.title}</h3>
                        <p class="job-company">${job.company}</p>
                    </div>
                    <span class="job-type">${job.type}</span>
                </div>
                <div class="job-meta">
                    <span><i class="fas fa-map-marker-alt"></i> ${job.location}</span>
                    <span><i class="fas fa-briefcase"></i> ${job.category}</span>
                    <span><i class="fas fa-money-bill"></i> ${job.salary}</span>
                    <span><i class="fas fa-clock"></i> ${job.posted}</span>
                </div>
                <p>${job.description}</p>
                <div class="job-actions">
                    <button class="btn btn-primary" onclick="platform.applyForJob(${job.id})">
                        <i class="fas fa-paper-plane"></i> Apply Now
                    </button>
                    <button class="btn btn-outline" onclick="platform.saveJob(${job.id})">
                        <i class="fas fa-bookmark"></i> Save
                    </button>
                </div>
            `;

            jobsList.appendChild(jobCard);
        });
    }

    filterJobs() {
        const category = document.getElementById('job-category').value;
        const location = document.getElementById('job-location').value;

        let filtered = this.jobs;

        if (category) {
            filtered = filtered.filter(job => job.category === category);
        }

        if (location) {
            filtered = filtered.filter(job => job.location.toLowerCase().includes(location.toLowerCase()));
        }

        this.renderJobs(filtered);
    }

    applyForJob(jobId) {
        const job = this.jobs.find(j => j.id === jobId);
        if (job) {
            this.showToast(`Application process started for ${job.title}`, 'success');
            // In real implementation, this would open an application form
            setTimeout(() => {
                alert(`Thank you for your interest in the ${job.title} position at ${job.company}.\n\nPlease send your CV to careers@rwandaplatform.rw with subject: "Application for ${job.title}"`);
            }, 1000);
        }
    }

    saveJob(jobId) {
        const savedJobs = JSON.parse(localStorage.getItem('savedJobs') || '[]');
        if (!savedJobs.includes(jobId)) {
            savedJobs.push(jobId);
            localStorage.setItem('savedJobs', JSON.stringify(savedJobs));
            this.showToast('Job saved successfully', 'success');
        } else {
            this.showToast('Job already saved', 'warning');
        }
    }

    // Emergency Services
    callEmergency(number) {
        if (confirm(`Are you sure you want to call emergency number ${number}?`)) {
            window.location.href = `tel:${number}`;
            this.showToast(`Calling ${number}...`, 'success');
        }
    }

    callService(number) {
        window.location.href = `tel:${number}`;
    }

    // Resources
    loadResource(type) {
        const resources = this.getMockResources(type);
        this.showResourceModal(type, resources);
    }

    getMockResources(type) {
        const resourceData = {
            health: [
                { name: 'King Faisal Hospital', location: 'Kigali', contact: '0788-123-456', services: 'Emergency, Surgery, Maternity' },
                { name: 'Rwanda Military Hospital', location: 'Kanombe', contact: '0788-234-567', services: 'General Care, Specialized Treatment' },
                { name: 'CHUK', location: 'Kigali', contact: '0788-345-678', services: 'Teaching Hospital, Research' }
            ],
            education: [
                { name: 'University of Rwanda', location: 'Kigali', contact: '0788-456-789', services: 'Higher Education, Research' },
                { name: 'Kigali Institute of Science', location: 'Kigali', contact: '0788-567-890', services: 'Technology Education' },
                { name: 'APR Secondary School', location: 'Kigali', contact: '0788-678-901', services: 'Secondary Education' }
            ],
            government: [
                { name: 'Immigration Office', location: 'Kigali', contact: '0788-789-012', services: 'Passport, Permits' },
                { name: 'RRA Office', location: 'Kigali', contact: '0788-890-123', services: 'Tax Services' },
                { name: 'RDB Office', location: 'Kigali', contact: '0788-901-234', services: 'Business Registration' }
            ]
        };
        return resourceData[type] || [];
    }

    showResourceModal(type, resources) {
        const modal = document.getElementById('service-modal');
        const modalBody = document.getElementById('modal-body');

        const typeLabels = {
            health: 'Health Centers',
            education: 'Educational Institutions',
            government: 'Government Offices'
        };

        modalBody.innerHTML = `
            <div class="resource-details">
                <h2>${typeLabels[type]}</h2>
                <div class="resources-list">
                    ${resources.map(resource => `
                        <div class="resource-item">
                            <h3>${resource.name}</h3>
                            <p><i class="fas fa-map-marker-alt"></i> ${resource.location}</p>
                            <p><i class="fas fa-phone"></i> ${resource.contact}</p>
                            <p><i class="fas fa-info-circle"></i> ${resource.services}</p>
                            <button class="btn btn-outline" onclick="platform.callService('${resource.contact}')">
                                <i class="fas fa-phone"></i> Contact
                            </button>
                        </div>
                    `).join('')}
                </div>
            </div>
        `;

        modal.style.display = 'block';
    }

    // Utility Functions
    getDirections(placeName) {
        // In real implementation, this would integrate with maps
        this.showToast(`Getting directions to ${placeName}...`, 'success');
        setTimeout(() => {
            alert(`Map integration would show directions to ${placeName}\n\nThis feature requires Google Maps API integration.`);
        }, 1000);
    }

    changeLanguage(lang) {
        this.currentLanguage = lang;
        localStorage.setItem('rwanda-platform-language', lang);
        
        // Trigger translation
        if (window.translatePage) {
            window.translatePage(lang);
        }
        
        this.showToast(`Language changed to ${lang.toUpperCase()}`, 'success');
    }

    showToast(message, type = 'info') {
        const toast = document.createElement('div');
        toast.className = `toast ${type}`;
        toast.textContent = message;
        document.body.appendChild(toast);

        setTimeout(() => toast.classList.add('show'), 100);
        setTimeout(() => {
            toast.classList.remove('show');
            setTimeout(() => document.body.removeChild(toast), 300);
        }, 3000);
    }

    debounce(func, wait) {
        let timeout;
        return function executedFunction(...args) {
            const later = () => {
                clearTimeout(timeout);
                func(...args);
            };
            clearTimeout(timeout);
            timeout = setTimeout(later, wait);
        };
    }

    // Offline Support
    initializeOfflineSupport() {
        if ('serviceWorker' in navigator) {
            navigator.serviceWorker.register('/sw.js')
                .then(registration => console.log('SW registered'))
                .catch(error => console.log('SW registration failed'));
        }

        // Listen for online/offline events
        window.addEventListener('online', () => {
            this.showToast('Connection restored', 'success');
        });

        window.addEventListener('offline', () => {
            this.showToast('Offline mode - limited functionality', 'warning');
        });
    }

    // PWA Install Prompt
    showInstallPrompt() {
        const deferredPrompt = window.deferredPrompt;
        if (deferredPrompt) {
            deferredPrompt.prompt();
            deferredPrompt.userChoice.then((choiceResult) => {
                if (choiceResult.outcome === 'accepted') {
                    this.showToast('App installed successfully', 'success');
                }
                window.deferredPrompt = null;
            });
        }
    }
}

// Global functions for onclick handlers
function scrollToSection(sectionId) {
    document.getElementById(sectionId).scrollIntoView({ behavior: 'smooth' });
}

function searchServices() {
    platform.searchServices(document.getElementById('service-search').value);
}

function callEmergency(number) {
    platform.callEmergency(number);
}

function loadResource(type) {
    platform.loadResource(type);
}

function closeModal(modalId) {
    document.getElementById(modalId).style.display = 'none';
}

// Initialize the platform
const platform = new RwandaPlatform();

// Make platform globally accessible
window.platform = platform;
window.scrollToSection = scrollToSection;
window.searchServices = searchServices;
window.callEmergency = callEmergency;
window.loadResource = loadResource;
window.closeModal = closeModal;
