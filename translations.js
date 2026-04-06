// Rwanda Community Platform - Translations
const translations = {
    en: {
        'site-title': 'Rwanda Community Platform',
        'nav-home': 'Home',
        'nav-services': 'Services',
        'nav-jobs': 'Jobs',
        'nav-emergency': 'Emergency',
        'nav-resources': 'Resources',
        'hero-title': 'Welcome to Rwanda Community Platform',
        'hero-subtitle': 'Connecting Rwandans with essential services, opportunities, and resources',
        'find-services': 'Find Services',
        'find-jobs': 'Find Jobs',
        'services-title': 'Essential Services',
        'search-services': 'Search services...',
        'jobs-title': 'Job Opportunities',
        'emergency-title': 'Emergency Services',
        'emergency-police': 'Police',
        'emergency-medical': 'Medical',
        'emergency-fire': 'Fire',
        'resources-title': 'Community Resources',
        'resource-health': 'Health Centers',
        'resource-health-desc': 'Find nearby health centers and hospitals',
        'resource-education': 'Educational Institutions',
        'resource-education-desc': 'Schools, universities, and training centers',
        'resource-government': 'Government Offices',
        'resource-government-desc': 'Local government services and offices',
        'footer-about': 'About',
        'footer-about-desc': 'Connecting Rwandans with essential services and opportunities',
        'footer-contact': 'Contact',
        'footer-follow': 'Follow Us'
    },
    rw: {
        'site-title': 'Urwego rw\'Abaturage rwu Rwanda',
        'nav-home': 'Ahabanza',
        'nav-services': 'Serivisi',
        'nav-jobs': 'Akazi',
        'nav-emergency': 'Ibyabaye',
        'nav-resources': 'Ibikoresho',
        'hero-title': 'Murakaza neza ku Rwego rw\'Abaturage rwu Rwanda',
        'hero-subtitle': 'Tugera Abanyarwanda serivisi zingirakamaro, amahirwe, n\'ibikoresho',
        'find-services': 'Shakisha Serivisi',
        'find-jobs': 'Shakisha Akazi',
        'services-title': 'Serivisi Zingirakamaro',
        'search-services': 'Shakisha serivisi...',
        'jobs-title': 'Amahirwe yo Akazi',
        'emergency-title': 'Serivisi z\'Ibyabaye',
        'emergency-police': 'Polisi',
        'emergency-medical': 'Ubuvuzi',
        'emergency-fire': 'Umuriro',
        'resources-title': 'Ibikoresho by\'Abaturage',
        'resource-health': 'Amavuriro',
        'resource-health-desc': 'Shakisha amavuriro n\'ibitaro hafi yawe',
        'resource-education': 'Amashuri makuru',
        'resource-education-desc': 'Amashuri, kaminuza, n\'ahantu yo gukora amahugurwa',
        'resource-government': 'Ofisi za Leta',
        'resource-government-desc': 'Serivisi z\'ubuyobozi n\'ofisi z\'akarere',
        'footer-about': 'Ibyerekeye',
        'footer-about-desc': 'Tugera Abanyarwanda serivisi zingirakamaro n\'amahirwe',
        'footer-contact': 'Twandikire',
        'footer-follow': 'Dukurikire'
    },
    fr: {
        'site-title': 'Plateforme Communautaire du Rwanda',
        'nav-home': 'Accueil',
        'nav-services': 'Services',
        'nav-jobs': 'Emplois',
        'nav-emergency': 'Urgence',
        'nav-resources': 'Ressources',
        'hero-title': 'Bienvenue sur la Plateforme Communautaire du Rwanda',
        'hero-subtitle': 'Connecter les Rwandais aux services essentiels, opportunités et ressources',
        'find-services': 'Trouver des Services',
        'find-jobs': 'Trouver des Emplois',
        'services-title': 'Services Essentiels',
        'search-services': 'Rechercher des services...',
        'jobs-title': 'Opportunités d\'Emploi',
        'emergency-title': 'Services d\'Urgence',
        'emergency-police': 'Police',
        'emergency-medical': 'Médical',
        'emergency-fire': 'Incendie',
        'resources-title': 'Ressources Communautaires',
        'resource-health': 'Centres de Santé',
        'resource-health-desc': 'Trouver des centres de santé et hôpitaux à proximité',
        'resource-education': 'Institutions Éducatives',
        'resource-education-desc': 'Écoles, universités et centres de formation',
        'resource-government': 'Bureaux Gouvernementaux',
        'resource-government-desc': 'Services gouvernementaux locaux et bureaux',
        'footer-about': 'À Propos',
        'footer-about-desc': 'Connecter les Rwandais aux services essentiels et opportunités',
        'footer-contact': 'Contact',
        'footer-follow': 'Suivez-nous'
    }
};

// Translation function
function translatePage(lang) {
    const elements = document.querySelectorAll('[data-translate]');
    
    elements.forEach(element => {
        const key = element.getAttribute('data-translate');
        if (translations[lang] && translations[lang][key]) {
            element.textContent = translations[lang][key];
        }
    });

    // Update placeholders
    const placeholderElements = document.querySelectorAll('[data-translate-placeholder]');
    placeholderElements.forEach(element => {
        const key = element.getAttribute('data-translate-placeholder');
        if (translations[lang] && translations[lang][key]) {
            element.placeholder = translations[lang][key];
        }
    });

    // Update HTML lang attribute
    document.documentElement.lang = lang;
}

// Make translation function globally accessible
window.translatePage = translatePage;
