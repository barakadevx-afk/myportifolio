// Military Cybersecurity Advanced Platform - Master Defense System
class MilitaryMasterAuth {
    constructor() {
        this.isAuthenticated = false;
        this.currentUser = null;
        this.accessLevel = null;
        this.init();
    }

    async init() {
        console.log('MilitaryMasterAuth: Initializing advanced military cybersecurity platform...');
        this.setupEventListeners();
        this.initializeBackground();
        this.startSecurityMonitoring();
        console.log('MilitaryMasterAuth: Advanced military cybersecurity platform initialized successfully');
    }

    setupEventListeners() {
        // Global functions
        window.openMasterAuth = () => this.openMasterAuth();
        window.handleMasterLogin = (event) => this.handleMasterLogin(event);
        window.closeModal = (modalId) => this.closeModal(modalId);
        window.openSystemDetails = (systemId) => this.openSystemDetails(systemId);
        window.scrollToSection = (sectionId) => this.scrollToSection(sectionId);
        
        // Add click listeners to all buttons after DOM is ready
        if (document.readyState === 'loading') {
            document.addEventListener('DOMContentLoaded', () => this.addClickListeners());
        } else {
            this.addClickListeners();
        }
    }

    addClickListeners() {
        // Add click listeners to all buttons immediately
        const buttons = document.querySelectorAll('.btn');
        console.log('Found buttons:', buttons.length);
        buttons.forEach((button, index) => {
            console.log(`Button ${index}:`, button.textContent);
            button.addEventListener('click', (e) => {
                console.log('Military button clicked:', e.target.textContent);
                this.handleButtonClick(e);
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

    openMasterAuth() {
        console.log('MilitaryMasterAuth: Opening master authentication modal');
        const modal = document.getElementById('master-auth-modal');
        if (modal) {
            modal.style.display = 'flex';
            modal.classList.add('active');
            console.log('Modal found and opened');
        } else {
            console.error('MilitaryMasterAuth: Master modal not found');
        }
    }

    closeModal(modalId) {
        const modal = document.getElementById(modalId);
        if (modal) {
            modal.style.display = 'none';
            modal.classList.remove('active');
        }
    }

    handleMasterLogin(event) {
        event.preventDefault();
        
        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;
        const accessLevel = document.getElementById('access-level').value;
        
        // Show loading state
        const submitBtn = event.target.querySelector('button[type="submit"]');
        const originalText = submitBtn.innerHTML;
        submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> <span>Authenticating...</span>';
        submitBtn.disabled = true;
        
        // Simulate authentication
        setTimeout(() => {
            if (username && password && accessLevel) {
                this.authenticateMasterUser(username, accessLevel);
            } else {
                this.showNotification('Please fill in all fields', 'error');
                submitBtn.innerHTML = originalText;
                submitBtn.disabled = false;
            }
        }, 1500);
    }

    authenticateMasterUser(username, accessLevel) {
        this.isAuthenticated = true;
        this.currentUser = {
            username: username,
            accessLevel: accessLevel,
            role: this.getAccessRole(accessLevel),
            level: 'Master Defense',
            clearance: this.getAccessClearance(accessLevel),
            loginTime: new Date().toISOString()
        };
        
        // Save to localStorage
        localStorage.setItem('militaryMasterAuth', JSON.stringify({
            isAuthenticated: true,
            user: this.currentUser
        }));
        
        // Update UI
        this.updateUIForAuthenticated();
        this.closeModal('master-auth-modal');
        this.showNotification(`Welcome ${username}! Master Defense access granted.`, 'success');
        this.updateDashboard(true);
    }

    getAccessRole(accessLevel) {
        const roles = {
            'operator': 'System Operator',
            'commander': 'Command Center',
            'administrator': 'System Administrator',
            'master': 'Master Defense'
        };
        return roles[accessLevel] || 'Unknown';
    }

    getAccessClearance(accessLevel) {
        const clearances = {
            'operator': 'Level 1',
            'commander': 'Level 3',
            'administrator': 'Level 5',
            'master': 'Level 10'
        };
        return clearances[accessLevel] || 'Level 0';
    }

    logout() {
        this.isAuthenticated = false;
        this.currentUser = null;
        this.accessLevel = null;
        localStorage.removeItem('militaryMasterAuth');
        this.updateUIForUnauthenticated();
        this.updateDashboard(false);
        this.showNotification('Logged out successfully. Master session terminated.', 'info');
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
            authBtn.innerHTML = '<i class="fas fa-user-shield"></i> <span>Access Master Defense</span>';
            authBtn.onclick = () => this.openMasterAuth();
        }
    }

    updateDashboard(isAuthenticated) {
        // Update dashboard stats
        const systemsElement = document.getElementById('active-systems');
        const operatorsElement = document.getElementById('active-operators');
        const authStatus = document.getElementById('auth-status');
        
        if (systemsElement) {
            systemsElement.textContent = isAuthenticated ? '12' : '0';
        }
        
        if (operatorsElement) {
            operatorsElement.textContent = isAuthenticated ? '1' : '0';
        }
        
        if (authStatus) {
            authStatus.className = isAuthenticated ? 'status-indicator online' : 'status-indicator offline';
            authStatus.nextElementSibling.textContent = isAuthenticated ? 'Master Defense System Active' : 'Authentication Required';
        }
    }

    scrollToSection(sectionId) {
        const element = document.getElementById(sectionId);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    }

    openSystemDetails(systemId) {
        this.showNotification(`Opening system details for ${systemId}`, 'info');
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
        // Advanced military background effects
        this.createMatrixRain();
        this.createNeuralNetwork();
        this.createDefenseGrid();
        this.createTacticalOverlay();
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
            ctx.fillStyle = 'rgba(0, 102, 204, 0.05)';
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

    createDefenseGrid() {
        const container = document.getElementById('defense-grid');
        if (!container) return;
        
        // Create animated defense grid
        const gridSize = 20;
        const cellCount = 100;
        
        for (let i = 0; i < cellCount; i++) {
            const cell = document.createElement('div');
            cell.className = 'defense-cell';
            cell.style.left = (i % gridSize) * (100 / gridSize) + '%';
            cell.style.top = Math.floor(i / gridSize) * (100 / gridSize) + '%';
            
            // Random animation delay
            cell.style.animationDelay = Math.random() * 2 + 's';
            
            container.appendChild(cell);
        }
    }

    createTacticalOverlay() {
        const container = document.getElementById('tactical-overlay');
        if (!container) return;
        
        // Create tactical overlay effects
        const particleCount = 30;
        
        for (let i = 0; i < particleCount; i++) {
            const particle = document.createElement('div');
            particle.className = 'tactical-particle';
            particle.style.left = Math.random() * 100 + '%';
            particle.style.top = Math.random() * 100 + '%';
            particle.style.animationDelay = Math.random() * 5 + 's';
            particle.style.animationDuration = (3 + Math.random() * 4) + 's';
            
            container.appendChild(particle);
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
            'Updating defense protocols...',
            'Monitoring military access points...',
            'Securing communication channels...',
            'Running threat intelligence analysis...'
        ];
        
        const randomMetric = metrics[Math.floor(Math.random() * metrics.length)];
        console.log('Military Security Monitor:', randomMetric);
    }
}

// Initialize Military Master Auth platform
const militaryMasterAuth = new MilitaryMasterAuth();

// Make functions globally accessible
window.openMasterAuth = () => militaryMasterAuth.openMasterAuth();
window.handleMasterLogin = (event) => militaryMasterAuth.handleMasterLogin(event);
window.closeModal = (modalId) => militaryMasterAuth.closeModal(modalId);
window.openSystemDetails = (systemId) => militaryMasterAuth.openSystemDetails(systemId);
window.scrollToSection = (sectionId) => militaryMasterAuth.scrollToSection(sectionId);
