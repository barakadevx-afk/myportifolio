// Baraka DevX - Military Cybersecurity Platform with Simple Authentication
class MilitaryAuth {
    constructor() {
        this.isAuthenticated = false;
        this.currentUser = null;
        this.init();
    }

    async init() {
        this.setupEventListeners();
        this.initializeBackground();
        this.startSecurityMonitoring();
        console.log('MilitaryAuth: Advanced military cybersecurity platform initialized');
    }

    setupEventListeners() {
        // Global functions
        window.openAuth = () => this.openAuth();
        window.handleLogin = (event) => this.handleLogin(event);
        window.closeModal = (modalId) => this.closeModal(modalId);
        window.openProjectDetails = (projectId) => this.openProjectDetails(projectId);
        window.scrollToSection = (sectionId) => this.scrollToSection(sectionId);
        
        // Add click listeners to all buttons
        this.addClickListeners();
    }

    addClickListeners() {
        // Add click listeners to all buttons
        document.addEventListener('DOMContentLoaded', () => {
            const buttons = document.querySelectorAll('.btn');
            buttons.forEach(button => {
                button.addEventListener('click', (e) => {
                    console.log('Button clicked:', e.target.textContent);
                    this.handleButtonClick(e);
                });
            });
        });
    }

    handleButtonClick(event) {
        // Add visual feedback
        const button = event.target.closest('.btn');
        if (button) {
            // Add ripple effect
            this.createRippleEffect(button);
            
            // Add haptic feedback simulation
            if (navigator.vibrate) {
                navigator.vibrate(50);
            }
        }
    }

    createRippleEffect(button) {
        const ripple = document.createElement('span');
        ripple.className = 'ripple';
        
        const rect = button.getBoundingClientRect();
        const size = Math.max(rect.width, rect.height);
        const x = event.clientX - rect.left - size / 2;
        const y = event.clientY - rect.top - size / 2;
        
        ripple.style.width = ripple.style.height = size + 'px';
        ripple.style.left = x + 'px';
        ripple.style.top = y + 'px';
        ripple.style.transform = 'scale(0)';
        ripple.style.opacity = '1';
        
        button.appendChild(ripple);
        
        // Animate ripple
        setTimeout(() => {
            ripple.style.transform = 'scale(4)';
            ripple.style.opacity = '0';
        }, 10);
        
        // Remove ripple after animation
        setTimeout(() => {
            if (ripple.parentNode) {
                ripple.parentNode.removeChild(ripple);
            }
        }, 600);
    }

    openAuth() {
        console.log('MilitaryAuth: Opening authentication modal');
        const modal = document.getElementById('auth-modal');
        if (modal) {
            modal.style.display = 'flex';
        }
    }

    closeModal(modalId) {
        const modal = document.getElementById(modalId);
        if (modal) {
            modal.style.display = 'none';
        }
    }

    handleLogin(event) {
        event.preventDefault();
        
        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;
        
        // Show loading state
        const submitBtn = event.target.querySelector('button[type="submit"]');
        const originalText = submitBtn.innerHTML;
        submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> <span>Authenticating...</span>';
        submitBtn.disabled = true;
        
        // Simulate authentication
        setTimeout(() => {
            if (username === 'Baraka' && password === 'Baraka@2050!!!') {
                this.authenticateUser('Baraka');
            } else {
                this.showNotification('Invalid credentials. Please try again.', 'error');
                submitBtn.innerHTML = originalText;
                submitBtn.disabled = false;
            }
        }, 1500);
    }

    authenticateUser(username) {
        this.isAuthenticated = true;
        this.currentUser = {
            username: username,
            role: 'Military Administrator',
            level: 'Top Secret',
            clearance: 'Level 5',
            loginTime: new Date().toISOString()
        };
        
        // Save to localStorage
        localStorage.setItem('militaryAuth', JSON.stringify({
            isAuthenticated: true,
            user: this.currentUser
        }));
        
        // Update UI
        this.updateUIForAuthenticated();
        this.closeModal('auth-modal');
        this.showNotification(`Welcome ${username}! Access granted to Military Platform.`, 'success');
        this.updateDashboard(true);
    }

    logout() {
        this.isAuthenticated = false;
        this.currentUser = null;
        localStorage.removeItem('militaryAuth');
        this.updateUIForUnauthenticated();
        this.updateDashboard(false);
        this.showNotification('Logged out successfully. Secure session terminated.', 'info');
    }

    updateUIForAuthenticated() {
        // Update any UI elements for authenticated state
        const authBtn = document.querySelector('.hero-cta button');
        if (authBtn) {
            authBtn.innerHTML = '<i class="fas fa-sign-out-alt"></i> <span>Logout</span>';
            authBtn.onclick = () => this.logout();
        }
    }

    updateUIForUnauthenticated() {
        // Update UI for unauthenticated state
        const authBtn = document.querySelector('.hero-cta button');
        if (authBtn) {
            authBtn.innerHTML = '<i class="fas fa-user-shield"></i> <span>Access Military Platform</span>';
            authBtn.onclick = () => this.openAuth();
        }
    }

    updateDashboard(isAuthenticated) {
        // Update dashboard stats
        const sessionsElement = document.getElementById('active-sessions');
        if (sessionsElement) {
            sessionsElement.textContent = isAuthenticated ? '1' : '0';
        }
        
        const bioStatus = document.getElementById('bio-status');
        if (bioStatus) {
            bioStatus.className = isAuthenticated ? 'status-indicator online' : 'status-indicator offline';
            bioStatus.nextElementSibling.textContent = isAuthenticated ? 'Military Auth Active' : 'Authentication Required';
        }
    }

    scrollToSection(sectionId) {
        const element = document.getElementById(sectionId);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    }

    openProjectDetails(projectId) {
        this.showNotification(`Opening project details for ${projectId}`, 'info');
    }

    showNotification(message, type = 'info') {
        // Create notification element
        const notification = document.createElement('div');
        notification.className = `military-notification ${type}`;
        notification.innerHTML = `
            <i class="fas fa-${type === 'success' ? 'check-circle' : type === 'error' ? 'exclamation-triangle' : 'info-circle'}"></i>
            <span>${message}</span>
        `;
        
        document.body.appendChild(notification);
        
        // Auto remove after 5 seconds
        setTimeout(() => {
            notification.remove();
        }, 5000);
    }

    initializeBackground() {
        // Advanced cyber background effects
        this.createMatrixRain();
        this.createNeuralNetwork();
        this.createSecurityGrid();
    }

    createMatrixRain() {
        const canvas = document.getElementById('matrix-rain');
        if (!canvas) return;
        
        const ctx = canvas.getContext('2d');
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
        
        const matrix = "ABCDEFGHIJKLMNOPQRSTUVWXYZ123456789@#$%^&*()_+-=[]{}|;:<>?";
        const matrixArray = matrix.split("");
        
        const fontSize = 14;
        const columns = canvas.width / fontSize;
        
        const drops = [];
        for (let x = 0; x < columns; x++) {
            drops[x] = 1;
        }
        
        const draw = () => {
            ctx.fillStyle = 'rgba(0, 255, 136, 0.05)';
            ctx.fillRect(0, 0, canvas.width, canvas.height);
            
            ctx.fillStyle = '#00ff88';
            ctx.font = fontSize + 'px monospace';
            
            for (let i = 0; i < drops.length; i++) {
                const text = matrixArray[Math.floor(Math.random() * matrixArray.length)];
                ctx.fillText(text, i * fontSize, drops[i] * fontSize);
                
                if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
                    drops[i] = 0;
                }
                drops[i]++;
            }
        };
        
        setInterval(draw, 35);
    }

    createNeuralNetwork() {
        const container = document.getElementById('neural-network');
        if (!container) return;
        
        // Create animated neural network connections
        const nodeCount = 50;
        const connectionCount = 100;
        
        for (let i = 0; i < nodeCount; i++) {
            const node = document.createElement('div');
            node.className = 'neural-node';
            node.style.left = Math.random() * 100 + '%';
            node.style.top = Math.random() * 100 + '%';
            container.appendChild(node);
        }
        
        for (let i = 0; i < connectionCount; i++) {
            const connection = document.createElement('div');
            connection.className = 'neural-connection';
            
            const startX = Math.random() * 100;
            const startY = Math.random() * 100;
            const endX = Math.random() * 100;
            const endY = Math.random() * 100;
            
            connection.style.left = startX + '%';
            connection.style.top = startY + '%';
            connection.style.width = Math.abs(endX - startX) + '%';
            connection.style.height = Math.abs(endY - startY) + '%';
            
            const angle = Math.atan2(endY - startY, endX - startX) * 180 / Math.PI;
            connection.style.transform = `rotate(${angle}deg)`;
            
            container.appendChild(connection);
        }
    }

    createSecurityGrid() {
        const container = document.getElementById('security-grid');
        if (!container) return;
        
        // Create animated security grid
        const gridSize = 20;
        const cellCount = 100;
        
        for (let i = 0; i < cellCount; i++) {
            const cell = document.createElement('div');
            cell.className = 'security-cell';
            cell.style.left = (i % gridSize) * (100 / gridSize) + '%';
            cell.style.top = Math.floor(i / gridSize) * (100 / gridSize) + '%';
            
            // Random animation delay
            cell.style.animationDelay = Math.random() * 2 + 's';
            
            container.appendChild(cell);
        }
    }

    startSecurityMonitoring() {
        // Simulate security monitoring
        setInterval(() => {
            this.updateSecurityMetrics();
        }, 5000);
    }

    updateSecurityMetrics() {
        // Update random security metrics
        const metrics = [
            'Scanning for threats...',
            'Analyzing network traffic...',
            'Updating security protocols...',
            'Monitoring military access points...'
        ];
        
        const randomMetric = metrics[Math.floor(Math.random() * metrics.length)];
        console.log('Military Security Monitor:', randomMetric);
    }
}

// Initialize Military Auth platform
const militaryAuth = new MilitaryAuth();

// Make functions globally accessible
window.openAuth = () => militaryAuth.openAuth();
window.handleLogin = (event) => militaryAuth.handleLogin(event);
window.closeModal = (modalId) => militaryAuth.closeModal(modalId);
window.openProjectDetails = (projectId) => militaryAuth.openProjectDetails(projectId);
window.scrollToSection = (sectionId) => militaryAuth.scrollToSection(sectionId);
