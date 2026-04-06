// Baraka DevX - Next-Generation Cybersecurity Platform for Digital Transformation
class BarakaDevX {
    constructor() {
        this.isDarkMode = true;
        this.currentScan = null;
        this.threatData = [];
        this.newsData = [];
        this.companyName = 'Baraka DevX';
        this.companyTagline = 'Next-Generation Cybersecurity Platform';
        this.isLoggedIn = false;
        this.currentUser = null;
        this.eyeAuthActive = false;
        this.init();
    }

    init() {
        this.setupEventListeners();
        this.initializeMatrixBackground();
        this.initializeTheme();
        this.animateStats();
        this.loadThreatData();
        this.loadNewsData();
        this.setupImageLoading();
        this.setup3DAnimations();
        this.fetch3DObjects();
        this.initializeEmailJS();
        this.setupMobileMenu();
        this.setupSmoothScrolling();
        this.setupPDFGeneration();
        this.initializeCertificateSystem();
        this.initializeLoginSystem();
        this.checkLoginStatus();
    }

    initializeLoginSystem() {
        // Add login functions to global scope
        window.openLoginModal = () => {
            this.openLoginModal();
        };
        
        window.openProfileModal = () => {
            this.openProfileModal();
        };
        
        window.closeLoginModal = () => {
            this.closeLoginModal();
        };
        
        window.closeProfileModal = () => {
            this.closeProfileModal();
        };
        
        window.login = () => {
            this.handleLogin();
        };
        
        window.logout = () => {
            this.handleLogout();
        };
        
        window.editProfile = () => {
            this.editProfile();
        };
        
        window.viewCertificates = () => {
            this.viewUserCertificates();
        };
        
        window.openSettings = () => {
            this.openSettings();
        };
        
        // Setup login form
        this.setupLoginForm();
    }

    setupLoginForm() {
        const loginForm = document.getElementById('login-form');
        if (loginForm) {
            loginForm.addEventListener('submit', (e) => {
                e.preventDefault();
                this.handleLogin();
            });
        }
    }

    checkLoginStatus() {
        const savedUser = localStorage.getItem('barakadevx_user');
        if (savedUser) {
            try {
                this.currentUser = JSON.parse(savedUser);
                this.isLoggedIn = true;
                this.updateUIForLoggedInUser();
            } catch (error) {
                console.error('Error parsing saved user data:', error);
                localStorage.removeItem('barakadevx_user');
            }
        }
    }

    openLoginModal() {
        const modal = document.getElementById('login-modal');
        if (modal) {
            modal.classList.add('active');
            this.startEyeAuthentication();
        }
    }

    closeLoginModal() {
        const modal = document.getElementById('login-modal');
        if (modal) {
            modal.classList.remove('active');
            this.stopEyeAuthentication();
        }
    }

    openProfileModal() {
        const modal = document.getElementById('profile-modal');
        if (modal) {
            modal.classList.add('active');
            this.updateProfileData();
        }
    }

    closeProfileModal() {
        const modal = document.getElementById('profile-modal');
        if (modal) {
            modal.classList.remove('active');
        }
    }

    startEyeAuthentication() {
        this.eyeAuthActive = true;
        const statusText = document.querySelector('.status-text');
        const statusIndicator = document.querySelector('.status-indicator');
        
        if (statusText) statusText.textContent = 'Scanning...';
        if (statusIndicator) statusIndicator.classList.add('scanning');
        
        // Simulate eye scanning
        setTimeout(() => {
            this.completeEyeAuthentication();
        }, 3000);
    }

    stopEyeAuthentication() {
        this.eyeAuthActive = false;
    }

    completeEyeAuthentication() {
        const statusText = document.querySelector('.status-text');
        const statusIndicator = document.querySelector('.status-indicator');
        
        if (statusText) statusText.textContent = 'Authentication successful!';
        if (statusIndicator) {
            statusIndicator.classList.remove('scanning');
            statusIndicator.classList.add('success');
        }
        
        // Auto-login after successful eye scan
        setTimeout(() => {
            this.autoLoginWithEye();
        }, 1000);
    }

    autoLoginWithEye() {
        const userData = {
            name: 'Authenticated User',
            email: 'user@barakadevx.com',
            role: 'Security Analyst',
            avatar: 'https://picsum.photos/seed/eye-auth-user/100/100',
            loginMethod: 'biometric',
            loginTime: new Date().toISOString()
        };
        
        this.setLoggedInUser(userData);
        this.closeLoginModal();
        this.showToast('Biometric authentication successful!', 'success');
    }

    handleLogin() {
        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;
        const rememberMe = document.getElementById('remember-me').checked;
        
        if (!username || !password) {
            this.showToast('Please enter username and password', 'error');
            return;
        }
        
        // Simulate login validation
        const loginBtn = document.getElementById('login-btn');
        loginBtn.classList.add('loading');
        loginBtn.disabled = true;
        
        setTimeout(() => {
            // Simulate successful login
            const userData = {
                name: username,
                email: username.includes('@') ? username : `${username}@barakadevx.com`,
                role: 'Security Analyst',
                avatar: `https://picsum.photos/seed/${username}/100/100`,
                loginMethod: 'credentials',
                loginTime: new Date().toISOString()
            };
            
            this.setLoggedInUser(userData);
            
            if (rememberMe) {
                localStorage.setItem('barakadevx_remember', 'true');
            }
            
            this.closeLoginModal();
            this.showToast('Login successful!', 'success');
            
            loginBtn.classList.remove('loading');
            loginBtn.disabled = false;
        }, 1500);
    }

    setLoggedInUser(userData) {
        this.currentUser = userData;
        this.isLoggedIn = true;
        
        // Save to localStorage
        localStorage.setItem('barakadevx_user', JSON.stringify(userData));
        
        // Update UI
        this.updateUIForLoggedInUser();
    }

    updateUIForLoggedInUser() {
        const floatingLoginBtn = document.getElementById('floating-login-btn');
        const userMenu = document.getElementById('user-menu');
        
        if (floatingLoginBtn && userMenu) {
            floatingLoginBtn.style.display = 'none';
            userMenu.style.display = 'flex';
            
            // Update user avatar
            const userAvatar = document.getElementById('user-avatar-small');
            if (userAvatar && this.currentUser?.avatar) {
                userAvatar.src = this.currentUser.avatar;
            }
        }
    }

    updateUIForLoggedOutUser() {
        const floatingLoginBtn = document.getElementById('floating-login-btn');
        const userMenu = document.getElementById('user-menu');
        
        if (floatingLoginBtn && userMenu) {
            floatingLoginBtn.style.display = 'flex';
            userMenu.style.display = 'none';
        }
    }

    handleLogout() {
        this.currentUser = null;
        this.isLoggedIn = false;
        
        // Clear localStorage
        localStorage.removeItem('barakadevx_user');
        localStorage.removeItem('barakadevx_remember');
        
        // Update UI
        this.updateUIForLoggedOutUser();
        this.closeProfileModal();
        
        this.showToast('Logged out successfully', 'info');
    }

    updateProfileData() {
        if (!this.currentUser) return;
        
        // Update profile modal with user data
        const userName = document.getElementById('user-name');
        const userRole = document.getElementById('user-role');
        const userAvatar = document.getElementById('user-avatar');
        
        if (userName) userName.textContent = this.currentUser.name;
        if (userRole) userRole.textContent = this.currentUser.role;
        if (userAvatar && this.currentUser.avatar) {
            userAvatar.src = this.currentUser.avatar;
        }
        
        // Update profile stats (simulated)
        this.updateProfileStats();
    }

    updateProfileStats() {
        // Simulate dynamic profile stats
        const stats = {
            certifications: Math.floor(Math.random() * 20) + 5,
            hoursLearned: Math.floor(Math.random() * 500) + 100,
            successRate: Math.floor(Math.random() * 10) + 90
        };
        
        // Update DOM elements
        const statNumbers = document.querySelectorAll('.stat-number');
        if (statNumbers.length >= 3) {
            statNumbers[0].textContent = stats.certifications;
            statNumbers[1].textContent = stats.hoursLearned;
            statNumbers[2].textContent = stats.successRate + '%';
        }
    }

    editProfile() {
        this.showToast('Profile editor coming soon!', 'info');
    }

    viewUserCertificates() {
        // Scroll to certifications section
        const certificationsSection = document.querySelector('[href*="certifications.html"]');
        if (certificationsSection) {
            certificationsSection.click();
        }
        this.closeProfileModal();
    }

    openSettings() {
        this.showToast('Settings panel coming soon!', 'info');
    }

    // Formspree form handler
    handleFormspreeSubmit(event) {
        event.preventDefault();
        const form = event.target;
        const formData = new FormData(form);
        
        // Show loading state
        const submitBtn = form.querySelector('button[type="submit"]');
        const originalText = submitBtn.innerHTML;
        submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Sending...';
        submitBtn.disabled = true;
        
        // Submit to Formspree
        fetch(form.action, {
            method: form.method,
            body: formData,
            headers: {
                'Accept': 'application/json'
            }
        })
        .then(response => {
            if (response.ok) {
                this.showToast('Message sent successfully! We\'ll get back to you soon.', 'success');
                form.reset();
                this.closeModal('tool-modal');
            } else {
                throw new Error('Form submission failed');
            }
        })
        .catch(error => {
            console.error('Formspree error:', error);
            this.showToast('Failed to send message. Please try again.', 'error');
        })
        .finally(() => {
            // Restore button state
            submitBtn.innerHTML = originalText;
            submitBtn.disabled = false;
        });
    }

    setupPDFGeneration() {
        // Load jsPDF library for PDF generation
        const script = document.createElement('script');
        script.src = 'https://cdnjs.cloudflare.com/ajax/libs/jspdf/2.5.1/jspdf.umd.min.js';
        script.onload = () => {
            console.log('PDF generation library loaded');
            this.addPDFDownloadButtons();
        };
        document.head.appendChild(script);
    }

    initializeCertificateSystem() {
        // Add global certificate download functionality
        window.downloadCertificatePDF = (itemId, itemType = 'certification') => {
            this.downloadCertificatePDF(itemId, itemType);
        };
        
        // Add certificate generation to window scope
        window.generateCertificateId = (programId) => {
            const timestamp = Date.now();
            const random = Math.random().toString(36).substr(2, 9).toUpperCase();
            return `${programId}-${timestamp}-${random}`;
        };
    }

    addPDFDownloadButtons() {
        // Add PDF download buttons to certification cards
        const certificationCards = document.querySelectorAll('.certification-card, .course-card, .learning-path-card');
        certificationCards.forEach(card => {
            if (!card.querySelector('.pdf-download-btn')) {
                const actionsContainer = card.querySelector('.certification-actions, .course-actions, .path-actions');
                if (actionsContainer) {
                    const pdfBtn = document.createElement('button');
                    pdfBtn.className = 'pdf-download-btn';
                    pdfBtn.innerHTML = `
                        <i class="fas fa-file-pdf"></i>
                        <span>Download Certificate</span>
                    `;
                    pdfBtn.onclick = () => {
                        const itemId = card.dataset.id || card.querySelector('h3')?.textContent?.trim();
                        const itemType = card.classList.contains('certification-card') ? 'certification' : 
                                       card.classList.contains('course-card') ? 'course' : 'path';
                        this.downloadCertificatePDF(itemId, itemType);
                    };
                    actionsContainer.appendChild(pdfBtn);
                }
            }
        });
    }

    downloadCertificatePDF(itemId, itemType = 'certification') {
        try {
            const { jsPDF } = window.jspdf;
            if (!jsPDF) {
                this.showToast('PDF library not loaded. Please try again.', 'error');
                return;
            }

            const pdf = new jsPDF({
                orientation: 'landscape',
                unit: 'mm',
                format: 'a4'
            });

            // Generate certificate content
            this.generateCertificateContent(pdf, itemId, itemType);
            
            // Save the PDF
            const fileName = `${this.companyName.replace(/\s+/g, '_')}_${itemType}_Certificate.pdf`;
            pdf.save(fileName);
            
            this.showToast('Certificate downloaded successfully!', 'success');
        } catch (error) {
            console.error('PDF generation failed:', error);
            this.showToast('Failed to generate certificate. Please try again.', 'error');
        }
    }

    generateCertificateContent(pdf, itemId, itemType) {
        const pageWidth = pdf.internal.pageSize.getWidth();
        const pageHeight = pdf.internal.pageSize.getHeight();
        
        // Certificate background
        pdf.setFillColor(245, 245, 245);
        pdf.rect(0, 0, pageWidth, pageHeight, 'F');
        
        // Border
        pdf.setDrawColor(0, 255, 136);
        pdf.setLineWidth(3);
        pdf.rect(10, 10, pageWidth - 20, pageHeight - 20);
        
        // Inner border
        pdf.setDrawColor(74, 0, 224);
        pdf.setLineWidth(1);
        pdf.rect(15, 15, pageWidth - 30, pageHeight - 30);
        
        // Company Header
        pdf.setTextColor(10, 10, 10);
        pdf.setFontSize(24);
        pdf.setFont('helvetica', 'bold');
        pdf.text(this.companyName, pageWidth / 2, 35, { align: 'center' });
        
        pdf.setFontSize(14);
        pdf.setFont('helvetica', 'normal');
        pdf.text(this.companyTagline, pageWidth / 2, 45, { align: 'center' });
        
        // Certificate Title
        pdf.setTextColor(0, 255, 136);
        pdf.setFontSize(32);
        pdf.setFont('helvetica', 'bold');
        pdf.text('CERTIFICATE OF COMPLETION', pageWidth / 2, 70, { align: 'center' });
        
        // Program Name
        pdf.setTextColor(10, 10, 10);
        pdf.setFontSize(28);
        pdf.setFont('helvetica', 'bold');
        pdf.text(itemId, pageWidth / 2, 90, { align: 'center' });
        
        // Certificate Code
        pdf.setTextColor(74, 0, 224);
        pdf.setFontSize(16);
        pdf.setFont('helvetica', 'normal');
        pdf.text(`Certificate Code: ${this.generateCertificateId(itemId)}`, pageWidth / 2, 105, { align: 'center' });
        
        // Recipient Name (placeholder)
        pdf.setTextColor(10, 10, 10);
        pdf.setFontSize(18);
        pdf.setFont('helvetica', 'bold');
        pdf.text('This is to certify that:', pageWidth / 2, 125, { align: 'center' });
        
        pdf.setDrawColor(0, 255, 136);
        pdf.setLineWidth(1);
        pdf.line(50, 135, pageWidth - 50, 135);
        
        pdf.setTextColor(74, 0, 224);
        pdf.setFontSize(22);
        pdf.setFont('helvetica', 'bold');
        pdf.text('[YOUR NAME]', pageWidth / 2, 150, { align: 'center' });
        
        // Program Details
        pdf.setTextColor(10, 10, 10);
        pdf.setFontSize(14);
        pdf.setFont('helvetica', 'normal');
        pdf.text('has successfully completed the following program:', pageWidth / 2, 170, { align: 'center' });
        
        // Program Information Box
        pdf.setDrawColor(0, 255, 136);
        pdf.setLineWidth(1);
        pdf.rect(40, 180, pageWidth - 80, 60);
        
        pdf.setTextColor(10, 10, 10);
        pdf.setFontSize(12);
        pdf.text(`Program: ${itemType}`, 50, 195);
        pdf.text(`Type: ${itemType}`, 50, 210);
        pdf.text(`Completion Date: ${new Date().toLocaleDateString()}`, 50, 225);
        
        // Date and Signature
        pdf.setTextColor(10, 10, 10);
        pdf.setFontSize(12);
        pdf.text(`Date of Issue: ${new Date().toLocaleDateString()}`, 50, 260);
        pdf.text('Authorized Signature:', pageWidth - 120, 260);
        
        // Signature line
        pdf.setDrawColor(74, 0, 224);
        pdf.setLineWidth(1);
        pdf.line(pageWidth - 120, 270, pageWidth - 50, 270);
        
        // Company Footer
        pdf.setTextColor(0, 255, 136);
        pdf.setFontSize(10);
        pdf.setFont('helvetica', 'bold');
        pdf.text(`${this.companyName} - ${this.companyTagline}`, pageWidth / 2, pageHeight - 20, { align: 'center' });
        
        // Verification Code
        pdf.setTextColor(10, 10, 10);
        pdf.setFontSize(8);
        pdf.text(`Verification Code: ${this.generateVerificationCode()}`, pageWidth / 2, pageHeight - 10, { align: 'center' });
    }

    generateCertificateId(programId) {
        const timestamp = Date.now();
        const random = Math.random().toString(36).substr(2, 9).toUpperCase();
        return `${programId}-${timestamp}-${random}`;
    }

    generateVerificationCode() {
        const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
        let result = '';
        for (let i = 0; i < 12; i++) {
            result += chars.charAt(Math.floor(Math.random() * chars.length));
        }
        return result;
    }

    // Global certificate download functions
    downloadAllCertificates() {
        const certificates = [
            { id: 'CEH', name: 'Certified Ethical Hacker', type: 'certification' },
            { id: 'Security+', name: 'CompTIA Security+', type: 'certification' },
            { id: 'CISSP', name: 'CISSP', type: 'certification' },
            { id: 'OSCP', name: 'OSCP', type: 'certification' },
            { id: 'WEBSEC', name: 'Web Application Security', type: 'course' },
            { id: 'NETSEC', name: 'Network Security Fundamentals', type: 'course' },
            { id: 'CLOUDSEC', name: 'Cloud Security Architecture', type: 'course' },
            { id: 'MALWARE', name: 'Malware Analysis', type: 'course' },
            { id: 'SECURITY_ANALYST', name: 'Security Analyst Path', type: 'path' },
            { id: 'ETHICAL_HACKER', name: 'Ethical Hacker Path', type: 'path' }
        ];

        certificates.forEach(cert => {
            setTimeout(() => {
                this.downloadCertificatePDF(cert.id, cert.type);
            }, Math.random() * 1000); // Stagger downloads
        });

        this.showCertificateModal();
    }

    showCertificateModal() {
        const modal = document.getElementById('certificate-modal');
        if (modal) {
            modal.classList.add('active');
        }
    }

    closeCertificateModal() {
        const modal = document.getElementById('certificate-modal');
        if (modal) {
            modal.classList.remove('active');
        }
    }

    // Enhanced certificate download with user data
    downloadCertificateWithUserData(itemId, itemType, userData = {}) {
        const { jsPDF } = window.jspdf;
        if (!jsPDF) {
            this.showToast('PDF library not loaded. Please try again.', 'error');
            return;
        }

        const pdf = new jsPDF({
            orientation: 'landscape',
            unit: 'mm',
            format: 'a4'
        });

        // Generate certificate with user data
        this.generatePersonalizedCertificateContent(pdf, itemId, itemType, userData);
        
        // Save the PDF
        const fileName = `${this.companyName.replace(/\s+/g, '_')}_${userData.name || 'User'}_${itemType}_Certificate.pdf`;
        pdf.save(fileName);
        
        this.showToast('Personalized certificate downloaded successfully!', 'success');
    }

    generatePersonalizedCertificateContent(pdf, itemId, itemType, userData) {
        const pageWidth = pdf.internal.pageSize.getWidth();
        const pageHeight = pdf.internal.pageSize.getHeight();
        
        // Enhanced certificate background
        pdf.setFillColor(245, 245, 245);
        pdf.rect(0, 0, pageWidth, pageHeight, 'F');
        
        // Premium border
        pdf.setDrawColor(0, 255, 136);
        pdf.setLineWidth(4);
        pdf.rect(8, 8, pageWidth - 16, pageHeight - 16);
        
        // Inner border
        pdf.setDrawColor(74, 0, 224);
        pdf.setLineWidth(2);
        pdf.rect(12, 12, pageWidth - 24, pageHeight - 24);
        
        // Company Header
        pdf.setTextColor(10, 10, 10);
        pdf.setFontSize(26);
        pdf.setFont('helvetica', 'bold');
        pdf.text(this.companyName, pageWidth / 2, 40, { align: 'center' });
        
        pdf.setFontSize(16);
        pdf.setFont('helvetica', 'normal');
        pdf.text(this.companyTagline, pageWidth / 2, 52, { align: 'center' });
        
        // Certificate Title
        pdf.setTextColor(0, 255, 136);
        pdf.setFontSize(36);
        pdf.setFont('helvetica', 'bold');
        pdf.text('CERTIFICATE OF ACHIEVEMENT', pageWidth / 2, 80, { align: 'center' });
        
        // Recipient Name
        pdf.setTextColor(10, 10, 10);
        pdf.setFontSize(20);
        pdf.setFont('helvetica', 'bold');
        pdf.text(userData.name || 'AWARDED TO:', pageWidth / 2, 110, { align: 'center' });
        
        pdf.setDrawColor(0, 255, 136);
        pdf.setLineWidth(2);
        pdf.line(80, 125, pageWidth - 80, 125);
        
        pdf.setTextColor(74, 0, 224);
        pdf.setFontSize(24);
        pdf.setFont('helvetica', 'bold');
        pdf.text(userData.name || 'YOUR NAME', pageWidth / 2, 145, { align: 'center' });
        
        // Program Details
        pdf.setTextColor(10, 10, 10);
        pdf.setFontSize(16);
        pdf.setFont('helvetica', 'normal');
        pdf.text(`Program: ${itemId}`, 50, 180);
        pdf.text(`Type: ${itemType}`, 50, 200);
        pdf.text(`Completion Date: ${new Date().toLocaleDateString()}`, 50, 220);
        
        if (userData.score) {
            pdf.text(`Score: ${userData.score}%`, pageWidth - 120, 180);
        }
        
        // Achievement Box
        pdf.setDrawColor(0, 255, 136);
        pdf.setLineWidth(2);
        pdf.rect(40, 250, pageWidth - 80, 80);
        
        pdf.setTextColor(10, 10, 10);
        pdf.setFontSize(14);
        pdf.text('Outstanding Performance & Dedication', pageWidth / 2, 275, { align: 'center' });
        
        // Date and Signature
        pdf.setTextColor(10, 10, 10);
        pdf.setFontSize(12);
        pdf.text(`Date of Issue: ${new Date().toLocaleDateString()}`, 50, 350);
        pdf.text('Authorized Signature:', pageWidth - 150, 350);
        
        // Signature line
        pdf.setDrawColor(74, 0, 224);
        pdf.setLineWidth(1);
        pdf.line(pageWidth - 150, 365, pageWidth - 50, 365);
        
        // Company Footer
        pdf.setTextColor(0, 255, 136);
        pdf.setFontSize(12);
        pdf.setFont('helvetica', 'bold');
        pdf.text(`${this.companyName} - ${this.companyTagline}`, pageWidth / 2, pageHeight - 25, { align: 'center' });
        
        // Enhanced verification
        pdf.setTextColor(10, 10, 10);
        pdf.setFontSize(10);
        pdf.text(`Verification Code: ${this.generateVerificationCode()}`, pageWidth / 2, pageHeight - 12, { align: 'center' });
        
        // Security features
        pdf.setTextColor(74, 0, 224);
        pdf.setFontSize(8);
        pdf.text('Secure PDF • Blockchain Verifiable • Official Document', pageWidth / 2, pageHeight - 5, { align: 'center' });
    }

    setupEventListeners() {
        // Theme toggle
        document.getElementById('theme-toggle').addEventListener('click', () => {
            this.toggleTheme();
        });

        // Modal close on outside click
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

        // News filters
        document.querySelectorAll('.filter-btn').forEach(btn => {
            btn.addEventListener('click', (e) => {
                this.filterNews(e.target.dataset.filter);
                document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
                e.target.classList.add('active');
            });
        });

        // Portfolio filters
        document.querySelectorAll('.portfolio-filters .filter-btn').forEach(btn => {
            btn.addEventListener('click', (e) => {
                this.filterPortfolio(e.target.dataset.filter);
                document.querySelectorAll('.portfolio-filters .filter-btn').forEach(b => b.classList.remove('active'));
                e.target.classList.add('active');
            });
        });
    }

    initializeMatrixBackground() {
        const canvas = document.getElementById('matrix-bg');
        const ctx = canvas.getContext('2d');

        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;

        const matrix = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ123456789@#$%^&*()*&^%+-/~{[|`]}';
        const matrixArray = matrix.split('');

        const fontSize = 10;
        const columns = canvas.width / fontSize;

        const drops = [];
        for (let x = 0; x < columns; x++) {
            drops[x] = 1;
        }

        function draw() {
            ctx.fillStyle = 'rgba(0, 0, 0, 0.04)';
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
        }

        setInterval(draw, 35);

        window.addEventListener('resize', () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        });
    }

    setupImageLoading() {
        // Handle image loading and errors
        const projectImages = document.querySelectorAll('.project-image');
        
        projectImages.forEach(img => {
            img.addEventListener('load', function() {
                this.style.opacity = '1';
                this.parentElement.classList.add('loaded');
            });
            
            img.addEventListener('error', function() {
                this.src = `https://picsum.photos/seed/fallback-${Math.random().toString(36).substring(7)}/400/250`;
                this.alt = 'Project image placeholder';
            });
        });
    }

    setup3DAnimations() {
        // Initialize 3D animations and effects
        this.initializeFloatingElements();
        this.initializeRotatingElements();
        this.initializePulsingElements();
        this.initializeParallaxEffects();
        this.initialize3DInteractions();
    }

    initializeFloatingElements() {
        const floatingElements = document.querySelectorAll('.floating-3d');
        floatingElements.forEach(element => {
            element.style.animationDelay = Math.random() * 2 + 's';
        });
    }

    initializeRotatingElements() {
        const rotatingElements = document.querySelectorAll('.rotating-3d');
        rotatingElements.forEach(element => {
            element.style.animationDuration = (Math.random() * 5 + 5) + 's';
        });
    }

    initializePulsingElements() {
        const pulsingElements = document.querySelectorAll('.pulsing-3d');
        pulsingElements.forEach(element => {
            element.style.animationDelay = Math.random() * 1 + 's';
        });
    }

    initializeParallaxEffects() {
        const parallaxElements = document.querySelectorAll('.parallax-3d');
        
        window.addEventListener('scroll', () => {
            const scrollY = window.pageYOffset;
            
            parallaxElements.forEach(element => {
                const rect = element.getBoundingClientRect();
                const speed = element.dataset.speed || 0.5;
                const yPos = -(scrollY * speed);
                
                element.style.transform = `translateY(${yPos}px) rotateX(${yPos * 0.1}deg)`;
            });
        });
    }

    initialize3DInteractions() {
        // 3D mouse tracking effects
        document.addEventListener('mousemove', (e) => {
            const mouseX = e.clientX / window.innerWidth - 0.5;
            const mouseY = e.clientY / window.innerHeight - 0.5;
            
            const elements3D = document.querySelectorAll('[data-3d="true"]');
            elements3D.forEach(element => {
                const rotateY = mouseX * 20;
                const rotateX = -mouseY * 20;
                
                element.style.transform = `perspective(1000px) rotateY(${rotateY}deg) rotateX(${rotateX}deg)`;
            });
        });

        // 3D tilt effects on cards
        const tiltElements = document.querySelectorAll('.portfolio-item, .tool-card, .profile-card');
        tiltElements.forEach(element => {
            element.addEventListener('mouseenter', (e) => {
                element.classList.add('tilting');
            });
            
            element.addEventListener('mouseleave', (e) => {
                element.classList.remove('tilting');
            });
            
            element.addEventListener('mousemove', (e) => {
                if (!element.classList.contains('tilting')) return;
                
                const rect = element.getBoundingClientRect();
                const x = e.clientX - rect.left;
                const y = e.clientY - rect.top;
                
                const centerX = rect.width / 2;
                const centerY = rect.height / 2;
                
                const rotateX = (y - centerY) / 3;
                const rotateY = (centerX - x) / 3;
                
                element.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateZ(20px)`;
            });
        });
    }

    fetch3DObjects() {
        // Fetch and display 3D objects/models
        const objects3D = [
            {
                id: 'shield-3d',
                name: 'Cyber Shield',
                type: 'model',
                url: 'assets/3d/shield.glb',
                position: { x: 0, y: 0, z: 0 }
            },
            {
                id: 'lock-3d',
                name: 'Security Lock',
                type: 'model',
                url: 'assets/3d/lock.glb',
                position: { x: 100, y: 0, z: 0 }
            },
            {
                id: 'code-3d',
                name: 'Code Matrix',
                type: 'animation',
                url: 'assets/3d/code.json',
                position: { x: 200, y: 0, z: 0 }
            }
        ];

        objects3D.forEach(obj => {
            this.load3DObject(obj);
        });
    }

    load3DObject(objectData) {
        // Simulate 3D object loading
        const container = document.createElement('div');
        container.className = 'object-3d-container';
        container.id = objectData.id;
        
        const object3D = document.createElement('div');
        object3D.className = 'object-3d';
        object3D.innerHTML = `
            <div class="object-3d-model">
                <div class="object-3d-loading">
                    <i class="fas fa-spinner fa-spin"></i>
                    <span>Loading 3D Model...</span>
                </div>
            </div>
        `;
        
        container.appendChild(object3D);
        document.body.appendChild(container);
        
        // Simulate loading
        setTimeout(() => {
            this.display3DObject(objectData, object3D);
        }, 1000 + Math.random() * 2000);
    }

    display3DObject(objectData, element) {
        // Display loaded 3D object
        element.innerHTML = `
            <div class="object-3d-content">
                <div class="object-3d-info">
                    <h3>${objectData.name}</h3>
                    <p>Type: ${objectData.type}</p>
                    <p>Position: X:${objectData.position.x}, Y:${objectData.position.y}, Z:${objectData.position.z}</p>
                </div>
                <div class="object-3d-visual">
                    <div class="object-3d-icon rotating-3d">
                        <i class="fas fa-${this.getIconForType(objectData.type)}"></i>
                    </div>
                </div>
            </div>
        `;
        
        element.classList.add('loaded');
        
        // Add interaction
        element.addEventListener('click', () => {
            this.interactWith3DObject(objectData);
        });
    }

    getIconForType(type) {
        const icons = {
            'model': 'cube',
            'animation': 'code',
            'particle': 'atom',
            'geometry': 'shapes'
        };
        return icons[type] || 'cube';
    }

    interactWith3DObject(objectData) {
        // 3D object interaction
        const modal = document.getElementById('tool-modal');
        const modalBody = document.getElementById('modal-body');
        
        modalBody.innerHTML = `
            <div class="object-3d-modal">
                <div class="object-3d-preview">
                    <div class="object-3d-display rotating-3d">
                        <i class="fas fa-${this.getIconForType(objectData.type)}"></i>
                    </div>
                </div>
                <div class="object-3d-details">
                    <h2><i class="fas fa-cube"></i> ${objectData.name}</h2>
                    <div class="object-3d-stats">
                        <div class="stat">
                            <span class="label">Type</span>
                            <span class="value">${objectData.type}</span>
                        </div>
                        <div class="stat">
                            <span class="label">Position</span>
                            <span class="value">X:${objectData.position.x}, Y:${objectData.position.y}, Z:${objectData.position.z}</span>
                        </div>
                        <div class="stat">
                            <span class="label">Status</span>
                            <span class="value">Active</span>
                        </div>
                    </div>
                    <div class="object-3d-actions">
                        <button class="btn btn-primary" onclick="this.rotate3DObject('${objectData.id}')">
                            <i class="fas fa-sync"></i> Rotate
                        </button>
                        <button class="btn btn-outline" onclick="this.zoom3DObject('${objectData.id}')">
                            <i class="fas fa-search-plus"></i> Zoom
                        </button>
                        <button class="btn btn-outline" onclick="this.reset3DObject('${objectData.id}')">
                            <i class="fas fa-undo"></i> Reset
                        </button>
                    </div>
                </div>
            </div>
        `;
        
        modal.style.display = 'block';
    }

    rotate3DObject(objectId) {
        const element = document.querySelector(`#${objectId} .object-3d-display`);
        if (element) {
            element.style.animation = 'rotate3d 2s linear';
            setTimeout(() => {
                element.style.animation = 'rotate3d 10s linear infinite';
            }, 2000);
        }
    }

    zoom3DObject(objectId) {
        const element = document.querySelector(`#${objectId} .object-3d-display`);
        if (element) {
            element.style.transform = 'scale(1.5) rotate3d 10s linear infinite';
        }
    }

    reset3DObject(objectId) {
        const element = document.querySelector(`#${objectId} .object-3d-display`);
        if (element) {
            element.style.transform = 'scale(1) rotate3d 10s linear infinite';
        }
    }

    animateStats() {
        const statNumbers = document.querySelectorAll('.stat-number');
        
        statNumbers.forEach(stat => {
            const target = parseFloat(stat.getAttribute('data-target'));
            const increment = target / 100;
            let current = 0;

            const updateStat = () => {
                current += increment;
                if (current < target) {
                    stat.textContent = current.toFixed(1);
                    requestAnimationFrame(updateStat);
                } else {
                    stat.textContent = target % 1 === 0 ? target : target.toFixed(1);
                }
            };

            updateStat();
        });
    }

    setupMobileMenu() {
        // Mobile menu toggle
        const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
        const navMenu = document.querySelector('.nav-menu');

        mobileMenuToggle.addEventListener('click', () => {
            navMenu.classList.toggle('active');
        });

        // Close mobile menu when clicking outside
        document.addEventListener('click', (e) => {
            if (!navMenu.contains(e.target) && !mobileMenuToggle.contains(e.target)) {
                navMenu.classList.remove('active');
            }
        });

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

    initializeTheme() {
        const savedTheme = localStorage.getItem('barakadevx-theme') || 'dark';
        if (savedTheme === 'light') {
            this.toggleTheme();
        }
    }

    toggleTheme() {
        this.isDarkMode = !this.isDarkMode;
        
        if (!this.isDarkMode) {
            document.documentElement.style.setProperty('--dark-bg', '#f0f0f0');
            document.documentElement.style.setProperty('--darker-bg', '#e0e0e0');
            document.documentElement.style.setProperty('--card-bg', '#ffffff');
            document.documentElement.style.setProperty('--card-border', '#e0e0e0');
            document.documentElement.style.setProperty('--text-primary', '#1a1a1a');
            document.documentElement.style.setProperty('--text-secondary', '#666666');
            document.documentElement.style.setProperty('--text-muted', '#999999');
            document.querySelector('.theme-toggle i').classList.replace('fa-moon', 'fa-sun');
        } else {
            document.documentElement.style.setProperty('--dark-bg', '#0a0a0a');
            document.documentElement.style.setProperty('--darker-bg', '#050505');
            document.documentElement.style.setProperty('--card-bg', '#111111');
            document.documentElement.style.setProperty('--card-border', '#1a1a1a');
            document.documentElement.style.setProperty('--text-primary', '#ffffff');
            document.documentElement.style.setProperty('--text-secondary', '#cccccc');
            document.documentElement.style.setProperty('--text-muted', '#888888');
            document.querySelector('.theme-toggle i').classList.replace('fa-sun', 'fa-moon');
        }

        localStorage.setItem('barakadevx-theme', this.isDarkMode ? 'dark' : 'light');
    }

    // Security Tools
    openPasswordGenerator() {
        const modal = document.getElementById('tool-modal');
        const modalBody = document.getElementById('modal-body');

        modalBody.innerHTML = `
            <div class="password-generator">
                <h2>Password Generator</h2>
                <div class="password-display">
                    <input type="text" id="generated-password" readonly placeholder="Generated password will appear here">
                    <button class="btn btn-primary" onclick="cybershield.copyPassword()">
                        <i class="fas fa-copy"></i> Copy
                    </button>
                </div>
                
                <div class="password-options">
                    <div class="option-group">
                        <label>Password Length: <span id="length-value">16</span></label>
                        <input type="range" id="password-length" min="8" max="32" value="16" 
                               oninput="document.getElementById('length-value').textContent = this.value">
                    </div>
                    
                    <div class="checkbox-group">
                        <label>
                            <input type="checkbox" id="uppercase" checked> Uppercase Letters
                        </label>
                        <label>
                            <input type="checkbox" id="lowercase" checked> Lowercase Letters
                        </label>
                        <label>
                            <input type="checkbox" id="numbers" checked> Numbers
                        </label>
                        <label>
                            <input type="checkbox" id="symbols" checked> Symbols
                        </label>
                    </div>
                </div>
                
                <button class="btn btn-primary" onclick="cybershield.generatePassword()">
                    <i class="fas fa-key"></i> Generate Password
                </button>
                
                <div class="password-strength" id="password-strength"></div>
            </div>
        `;

        modal.style.display = 'block';
    }

    generatePassword() {
        const length = document.getElementById('password-length').value;
        const useUppercase = document.getElementById('uppercase').checked;
        const useLowercase = document.getElementById('lowercase').checked;
        const useNumbers = document.getElementById('numbers').checked;
        const useSymbols = document.getElementById('symbols').checked;

        let charset = '';
        if (useUppercase) charset += 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
        if (useLowercase) charset += 'abcdefghijklmnopqrstuvwxyz';
        if (useNumbers) charset += '0123456789';
        if (useSymbols) charset += '!@#$%^&*()_+-=[]{}|;:,.<>?';

        if (charset === '') {
            this.showToast('Please select at least one character type', 'error');
            return;
        }

        let password = '';
        for (let i = 0; i < length; i++) {
            password += charset.charAt(Math.floor(Math.random() * charset.length));
        }

        document.getElementById('generated-password').value = password;
        this.checkPasswordStrength(password);
    }

    checkPasswordStrength(password) {
        const strengthDiv = document.getElementById('password-strength');
        let strength = 0;
        let feedback = [];

        if (password.length >= 12) strength += 25;
        if (password.length >= 16) strength += 25;
        if (/[a-z]/.test(password)) strength += 12.5;
        if (/[A-Z]/.test(password)) strength += 12.5;
        if (/[0-9]/.test(password)) strength += 12.5;
        if (/[^a-zA-Z0-9]/.test(password)) strength += 12.5;

        let strengthText = '';
        let strengthClass = '';

        if (strength < 30) {
            strengthText = 'Weak';
            strengthClass = 'weak';
            feedback.push('Add more characters');
        } else if (strength < 60) {
            strengthText = 'Fair';
            strengthClass = 'fair';
            feedback.push('Consider adding symbols');
        } else if (strength < 80) {
            strengthText = 'Good';
            strengthClass = 'good';
        } else {
            strengthText = 'Strong';
            strengthClass = 'strong';
        }

        strengthDiv.innerHTML = `
            <div class="strength-meter">
                <div class="strength-fill ${strengthClass}" style="width: ${strength}%"></div>
            </div>
            <p class="strength-text">${strengthText} (${Math.round(strength)}%)</p>
            ${feedback.length > 0 ? `<ul class="strength-feedback">${feedback.map(f => `<li>${f}</li>`).join('')}</ul>` : ''}
        `;
    }

    copyPassword() {
        const passwordInput = document.getElementById('generated-password');
        if (passwordInput.value) {
            navigator.clipboard.writeText(passwordInput.value);
            this.showToast('Password copied to clipboard!', 'success');
        }
    }

    openPasswordChecker() {
        const modal = document.getElementById('tool-modal');
        const modalBody = document.getElementById('modal-body');

        modalBody.innerHTML = `
            <div class="password-checker">
                <h2>Password Strength Checker</h2>
                <div class="password-input">
                    <input type="password" id="password-to-check" placeholder="Enter password to check">
                    <button class="btn btn-primary" onclick="cybershield.analyzePassword()">
                        <i class="fas fa-shield-alt"></i> Analyze
                    </button>
                </div>
                
                <div id="password-analysis" class="password-analysis"></div>
            </div>
        `;

        modal.style.display = 'block';
    }

    analyzePassword() {
        const password = document.getElementById('password-to-check').value;
        const analysisDiv = document.getElementById('password-analysis');

        if (!password) {
            this.showToast('Please enter a password', 'error');
            return;
        }

        let score = 0;
        const checks = [];

        // Length check
        if (password.length >= 8) {
            score += 20;
            checks.push({ passed: true, text: 'Minimum length (8+ characters)' });
        } else {
            checks.push({ passed: false, text: 'Too short (minimum 8 characters)' });
        }

        // Complexity checks
        if (/[a-z]/.test(password)) {
            score += 15;
            checks.push({ passed: true, text: 'Contains lowercase letters' });
        } else {
            checks.push({ passed: false, text: 'Missing lowercase letters' });
        }

        if (/[A-Z]/.test(password)) {
            score += 15;
            checks.push({ passed: true, text: 'Contains uppercase letters' });
        } else {
            checks.push({ passed: false, text: 'Missing uppercase letters' });
        }

        if (/[0-9]/.test(password)) {
            score += 15;
            checks.push({ passed: true, text: 'Contains numbers' });
        } else {
            checks.push({ passed: false, text: 'Missing numbers' });
        }

        if (/[^a-zA-Z0-9]/.test(password)) {
            score += 15;
            checks.push({ passed: true, text: 'Contains special characters' });
        } else {
            checks.push({ passed: false, text: 'Missing special characters' });
        }

        // Additional checks
        if (password.length >= 12) score += 10;
        if (password.length >= 16) score += 10;

        let strength = '';
        let strengthClass = '';

        if (score < 40) {
            strength = 'Very Weak';
            strengthClass = 'very-weak';
        } else if (score < 60) {
            strength = 'Weak';
            strengthClass = 'weak';
        } else if (score < 80) {
            strength = 'Moderate';
            strengthClass = 'moderate';
        } else if (score < 90) {
            strength = 'Strong';
            strengthClass = 'strong';
        } else {
            strength = 'Very Strong';
            strengthClass = 'very-strong';
        }

        analysisDiv.innerHTML = `
            <div class="strength-result">
                <div class="strength-meter">
                    <div class="strength-fill ${strengthClass}" style="width: ${score}%"></div>
                </div>
                <h3 class="strength-text ${strengthClass}">${strength} (${score}/100)</h3>
            </div>
            
            <div class="security-checks">
                <h4>Security Checks:</h4>
                <ul>
                    ${checks.map(check => `
                        <li class="${check.passed ? 'passed' : 'failed'}">
                            <i class="fas fa-${check.passed ? 'check' : 'times'}"></i>
                            ${check.text}
                        </li>
                    `).join('')}
                </ul>
            </div>
            
            <div class="recommendations">
                <h4>Recommendations:</h4>
                <ul>
                    ${score < 100 ? '<li>Consider making the password longer</li>' : ''}
                    ${!/[A-Z]/.test(password) ? '<li>Add uppercase letters</li>' : ''}
                    ${!/[a-z]/.test(password) ? '<li>Add lowercase letters</li>' : ''}
                    ${!/[0-9]/.test(password) ? '<li>Add numbers</li>' : ''}
                    ${!/[^a-zA-Z0-9]/.test(password) ? '<li>Add special characters</li>' : ''}
                </ul>
            </div>
        `;
    }

    openEncoder() {
        const modal = document.getElementById('tool-modal');
        const modalBody = document.getElementById('modal-body');

        modalBody.innerHTML = `
            <div class="encoder-tool">
                <h2>Encoder/Decoder</h2>
                <div class="encoder-options">
                    <select id="encode-type">
                        <option value="base64">Base64</option>
                        <option value="hex">Hexadecimal</option>
                        <option value="binary">Binary</option>
                        <option value="url">URL Encoding</option>
                    </select>
                </div>
                
                <div class="encoder-input">
                    <textarea id="encode-input" placeholder="Enter text to encode/decode..." rows="5"></textarea>
                </div>
                
                <div class="encoder-actions">
                    <button class="btn btn-primary" onclick="cybershield.encodeText()">
                        <i class="fas fa-lock"></i> Encode
                    </button>
                    <button class="btn btn-secondary" onclick="cybershield.decodeText()">
                        <i class="fas fa-unlock"></i> Decode
                    </button>
                </div>
                
                <div class="encoder-output">
                    <textarea id="encode-output" placeholder="Result will appear here..." readonly rows="5"></textarea>
                    <button class="btn btn-outline" onclick="cybershield.copyEncoded()">
                        <i class="fas fa-copy"></i> Copy Result
                    </button>
                </div>
            </div>
        `;

        modal.style.display = 'block';
    }

    encodeText() {
        const input = document.getElementById('encode-input').value;
        const type = document.getElementById('encode-type').value;
        const output = document.getElementById('encode-output');

        if (!input) {
            this.showToast('Please enter text to encode', 'error');
            return;
        }

        try {
            let result = '';
            switch (type) {
                case 'base64':
                    result = btoa(unescape(encodeURIComponent(input)));
                    break;
                case 'hex':
                    result = input.split('').map(char => char.charCodeAt(0).toString(16).padStart(2, '0')).join('');
                    break;
                case 'binary':
                    result = input.split('').map(char => char.charCodeAt(0).toString(2).padStart(8, '0')).join(' ');
                    break;
                case 'url':
                    result = encodeURIComponent(input);
                    break;
            }
            output.value = result;
            this.showToast('Text encoded successfully', 'success');
        } catch (error) {
            this.showToast('Encoding failed', 'error');
        }
    }

    decodeText() {
        const input = document.getElementById('encode-input').value;
        const type = document.getElementById('encode-type').value;
        const output = document.getElementById('encode-output');

        if (!input) {
            this.showToast('Please enter text to decode', 'error');
            return;
        }

        try {
            let result = '';
            switch (type) {
                case 'base64':
                    result = decodeURIComponent(escape(atob(input)));
                    break;
                case 'hex':
                    result = input.match(/.{1,2}/g).map(hex => String.fromCharCode(parseInt(hex, 16))).join('');
                    break;
                case 'binary':
                    result = input.split(' ').map(binary => String.fromCharCode(parseInt(binary, 2))).join('');
                    break;
                case 'url':
                    result = decodeURIComponent(input);
                    break;
            }
            output.value = result;
            this.showToast('Text decoded successfully', 'success');
        } catch (error) {
            this.showToast('Decoding failed - invalid input', 'error');
        }
    }

    copyEncoded() {
        const output = document.getElementById('encode-output');
        if (output.value) {
            navigator.clipboard.writeText(output.value);
            this.showToast('Result copied to clipboard!', 'success');
        }
    }

    openHashGenerator() {
        const modal = document.getElementById('tool-modal');
        const modalBody = document.getElementById('modal-body');

        modalBody.innerHTML = `
            <div class="hash-generator">
                <h2>Hash Generator</h2>
                <div class="hash-input">
                    <textarea id="hash-input" placeholder="Enter text to hash..." rows="5"></textarea>
                </div>
                
                <div class="hash-actions">
                    <button class="btn btn-primary" onclick="cybershield.generateHashes()">
                        <i class="fas fa-fingerprint"></i> Generate Hashes
                    </button>
                </div>
                
                <div class="hash-results">
                    <div class="hash-result">
                        <label>MD5:</label>
                        <div class="hash-output">
                            <input type="text" id="md5-hash" readonly>
                            <button class="btn btn-outline" onclick="cybershield.copyHash('md5-hash')">
                                <i class="fas fa-copy"></i>
                            </button>
                        </div>
                    </div>
                    
                    <div class="hash-result">
                        <label>SHA-1:</label>
                        <div class="hash-output">
                            <input type="text" id="sha1-hash" readonly>
                            <button class="btn btn-outline" onclick="cybershield.copyHash('sha1-hash')">
                                <i class="fas fa-copy"></i>
                            </button>
                        </div>
                    </div>
                    
                    <div class="hash-result">
                        <label>SHA-256:</label>
                        <div class="hash-output">
                            <input type="text" id="sha256-hash" readonly>
                            <button class="btn btn-outline" onclick="cybershield.copyHash('sha256-hash')">
                                <i class="fas fa-copy"></i>
                            </button>
                        </div>
                    </div>
                    
                    <div class="hash-result">
                        <label>SHA-512:</label>
                        <div class="hash-output">
                            <input type="text" id="sha512-hash" readonly>
                            <button class="btn btn-outline" onclick="cybershield.copyHash('sha512-hash')">
                                <i class="fas fa-copy"></i>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        `;

        modal.style.display = 'block';
    }

    async generateHashes() {
        const input = document.getElementById('hash-input').value;

        if (!input) {
            this.showToast('Please enter text to hash', 'error');
            return;
        }

        try {
            const encoder = new TextEncoder();
            const data = encoder.encode(input);

            // MD5 (simplified - in production use a proper crypto library)
            const md5Hash = await this.simpleHash(data, 'md5');
            document.getElementById('md5-hash').value = md5Hash;

            // SHA-1
            const sha1Buffer = await crypto.subtle.digest('SHA-1', data);
            const sha1Hash = Array.from(new Uint8Array(sha1Buffer)).map(b => b.toString(16).padStart(2, '0')).join('');
            document.getElementById('sha1-hash').value = sha1Hash;

            // SHA-256
            const sha256Buffer = await crypto.subtle.digest('SHA-256', data);
            const sha256Hash = Array.from(new Uint8Array(sha256Buffer)).map(b => b.toString(16).padStart(2, '0')).join('');
            document.getElementById('sha256-hash').value = sha256Hash;

            // SHA-512
            const sha512Buffer = await crypto.subtle.digest('SHA-512', data);
            const sha512Hash = Array.from(new Uint8Array(sha512Buffer)).map(b => b.toString(16).padStart(2, '0')).join('');
            document.getElementById('sha512-hash').value = sha512Hash;

            this.showToast('Hashes generated successfully', 'success');
        } catch (error) {
            this.showToast('Hash generation failed', 'error');
        }
    }

    async simpleHash(data, algorithm) {
        // This is a simplified hash function for demonstration
        // In production, use proper crypto libraries
        const hashBuffer = await crypto.subtle.digest('SHA-256', data);
        return Array.from(new Uint8Array(hashBuffer)).map(b => b.toString(16).padStart(2, '0')).join('').substring(0, 32);
    }

    copyHash(hashId) {
        const hashInput = document.getElementById(hashId);
        if (hashInput.value) {
            navigator.clipboard.writeText(hashInput.value);
            this.showToast('Hash copied to clipboard!', 'success');
        }
    }

    openIPChecker() {
        const modal = document.getElementById('tool-modal');
        const modalBody = document.getElementById('modal-body');

        modalBody.innerHTML = `
            <div class="ip-checker">
                <h2>IP Information Checker</h2>
                <div class="ip-input">
                    <input type="text" id="ip-address" placeholder="Enter IP address or leave blank for your IP">
                    <button class="btn btn-primary" onclick="cybershield.checkIP()">
                        <i class="fas fa-search"></i> Check IP
                    </button>
                </div>
                
                <div id="ip-results" class="ip-results"></div>
            </div>
        `;

        modal.style.display = 'block';
    }

    async checkIP() {
        const ipInput = document.getElementById('ip-address').value;
        const resultsDiv = document.getElementById('ip-results');

        resultsDiv.innerHTML = '<div class="loading"></div>';

        try {
            // For demo purposes, we'll simulate IP checking
            // In production, use a real IP geolocation API
            const mockIPData = {
                ip: ipInput || '203.0.113.1',
                country: 'United States',
                countryCode: 'US',
                region: 'California',
                city: 'San Francisco',
                latitude: 37.7749,
                longitude: -122.4194,
                isp: 'Example ISP',
                org: 'Example Organization',
                timezone: 'America/Los_Angeles',
                isProxy: false,
                isVPN: false
            };

            setTimeout(() => {
                resultsDiv.innerHTML = `
                    <div class="ip-info">
                        <div class="ip-details">
                            <h3>IP Address: ${mockIPData.ip}</h3>
                            <div class="info-grid">
                                <div class="info-item">
                                    <label>Country:</label>
                                    <span>${mockIPData.country} (${mockIPData.countryCode})</span>
                                </div>
                                <div class="info-item">
                                    <label>Region:</label>
                                    <span>${mockIPData.region}</span>
                                </div>
                                <div class="info-item">
                                    <label>City:</label>
                                    <span>${mockIPData.city}</span>
                                </div>
                                <div class="info-item">
                                    <label>Coordinates:</label>
                                    <span>${mockIPData.latitude}, ${mockIPData.longitude}</span>
                                </div>
                                <div class="info-item">
                                    <label>ISP:</label>
                                    <span>${mockIPData.isp}</span>
                                </div>
                                <div class="info-item">
                                    <label>Organization:</label>
                                    <span>${mockIPData.org}</span>
                                </div>
                                <div class="info-item">
                                    <label>Timezone:</label>
                                    <span>${mockIPData.timezone}</span>
                                </div>
                                <div class="info-item">
                                    <label>Proxy/VPN:</label>
                                    <span class="${mockIPData.isProxy || mockIPData.isVPN ? 'warning' : 'safe'}">
                                        ${mockIPData.isProxy || mockIPData.isVPN ? 'Detected' : 'Not Detected'}
                                    </span>
                                </div>
                            </div>
                        </div>
                        
                        <div class="security-analysis">
                            <h4>Security Analysis:</h4>
                            <div class="security-score">
                                <div class="score-circle">
                                    <span class="score">85</span>
                                    <span class="label">Safety Score</span>
                                </div>
                                <div class="security-tips">
                                    <p><i class="fas fa-check"></i> IP appears legitimate</p>
                                    <p><i class="fas fa-check"></i> No proxy or VPN detected</p>
                                    <p><i class="fas fa-info"></i> Standard ISP connection</p>
                                </div>
                            </div>
                        </div>
                    </div>
                `;
            }, 1500);

        } catch (error) {
            resultsDiv.innerHTML = '<p class="error">Failed to check IP address</p>';
            this.showToast('IP check failed', 'error');
        }
    }

    openSSLChecker() {
        const modal = document.getElementById('tool-modal');
        const modalBody = document.getElementById('modal-body');

        modalBody.innerHTML = `
            <div class="ssl-checker">
                <h2>SSL/TLS Certificate Checker</h2>
                <div class="ssl-input">
                    <input type="text" id="ssl-domain" placeholder="Enter domain name (e.g., example.com)">
                    <button class="btn btn-primary" onclick="cybershield.checkSSL()">
                        <i class="fas fa-certificate"></i> Check SSL
                    </button>
                </div>
                
                <div id="ssl-results" class="ssl-results"></div>
            </div>
        `;

        modal.style.display = 'block';
    }

    async checkSSL() {
        const domain = document.getElementById('ssl-domain').value;
        const resultsDiv = document.getElementById('ssl-results');

        if (!domain) {
            this.showToast('Please enter a domain name', 'error');
            return;
        }

        resultsDiv.innerHTML = '<div class="loading"></div>';

        try {
            // Simulate SSL checking (in production, use a real SSL checking API)
            setTimeout(() => {
                const mockSSLData = {
                    domain: domain,
                    isValid: true,
                    issuer: 'Let\'s Encrypt Authority X3',
                    validFrom: '2024-01-15',
                    validUntil: '2024-04-15',
                    protocol: 'TLSv1.3',
                    cipherSuite: 'TLS_AES_256_GCM_SHA384',
                    rating: 'A+',
                    vulnerabilities: [],
                    recommendations: []
                };

                resultsDiv.innerHTML = `
                    <div class="ssl-info">
                        <div class="ssl-status ${mockSSLData.isValid ? 'valid' : 'invalid'}">
                            <i class="fas fa-${mockSSLData.isValid ? 'check-circle' : 'times-circle'}"></i>
                            <span>Certificate is ${mockSSLData.isValid ? 'Valid' : 'Invalid'}</span>
                        </div>
                        
                        <div class="certificate-details">
                            <h4>Certificate Details:</h4>
                            <div class="cert-info">
                                <div class="info-item">
                                    <label>Domain:</label>
                                    <span>${mockSSLData.domain}</span>
                                </div>
                                <div class="info-item">
                                    <label>Issuer:</label>
                                    <span>${mockSSLData.issuer}</span>
                                </div>
                                <div class="info-item">
                                    <label>Valid From:</label>
                                    <span>${mockSSLData.validFrom}</span>
                                </div>
                                <div class="info-item">
                                    <label>Valid Until:</label>
                                    <span>${mockSSLData.validUntil}</span>
                                </div>
                                <div class="info-item">
                                    <label>Protocol:</label>
                                    <span>${mockSSLData.protocol}</span>
                                </div>
                                <div class="info-item">
                                    <label>Cipher Suite:</label>
                                    <span>${mockSSLData.cipherSuite}</span>
                                </div>
                            </div>
                        </div>
                        
                        <div class="ssl-rating">
                            <h4>Security Rating:</h4>
                            <div class="rating-display">
                                <span class="rating ${mockSSLData.rating === 'A+' ? 'excellent' : 'good'}">${mockSSLData.rating}</span>
                            </div>
                        </div>
                        
                        <div class="security-recommendations">
                            <h4>Security Status:</h4>
                            <ul>
                                <li class="passed"><i class="fas fa-check"></i> Strong encryption</li>
                                <li class="passed"><i class="fas fa-check"></i> Modern protocol</li>
                                <li class="passed"><i class="fas fa-check"></i> Secure cipher suite</li>
                                ${mockSSLData.vulnerabilities.length > 0 ? 
                                    mockSSLData.vulnerabilities.map(v => `<li class="failed"><i class="fas fa-exclamation-triangle"></i> ${v}</li>`).join('') : 
                                    '<li class="passed"><i class="fas fa-shield-alt"></i> No vulnerabilities detected</li>'
                                }
                            </ul>
                        </div>
                    </div>
                `;
            }, 2000);

        } catch (error) {
            resultsDiv.innerHTML = '<p class="error">Failed to check SSL certificate</p>';
            this.showToast('SSL check failed', 'error');
        }
    }

    // Security Scanner
    startSecurityScan() {
        const target = document.getElementById('scan-target').value;
        
        if (!target) {
            this.showToast('Please enter a target to scan', 'error');
            return;
        }

        const resultsDiv = document.getElementById('scan-results');
        resultsDiv.innerHTML = '<div class="scan-progress"><div class="loading"></div><p>Scanning...</p></div>';

        // Simulate scanning process
        setTimeout(() => {
            this.performScan(target);
        }, 2000);
    }

    performScan(target) {
        const resultsDiv = document.getElementById('scan-results');
        const scanPorts = document.getElementById('scan-ports').checked;
        const scanVulnerabilities = document.getElementById('scan-vulnerabilities').checked;
        const scanMalware = document.getElementById('scan-malware').checked;
        const scanSSL = document.getElementById('scan-ssl').checked;

        const scanResults = {
            target: target,
            timestamp: new Date().toISOString(),
            overallRisk: 'Medium',
            score: 72,
            findings: []
        };

        if (scanPorts) {
            scanResults.findings.push({
                type: 'port',
                severity: 'low',
                title: 'Open Ports Detected',
                description: 'Several ports are open and potentially accessible',
                details: ['Port 80 (HTTP)', 'Port 443 (HTTPS)', 'Port 22 (SSH)']
            });
        }

        if (scanVulnerabilities) {
            scanResults.findings.push({
                type: 'vulnerability',
                severity: 'medium',
                title: 'Outdated Software Version',
                description: 'Web server appears to be running an outdated version',
                details: ['Apache 2.4.29 (update to 2.4.58 recommended)']
            });
        }

        if (scanMalware) {
            scanResults.findings.push({
                type: 'malware',
                severity: 'info',
                title: 'No Malware Detected',
                description: 'No malware signatures found on the target',
                details: ['Clean scan result']
            });
        }

        if (scanSSL) {
            scanResults.findings.push({
                type: 'ssl',
                severity: 'low',
                title: 'SSL Configuration',
                description: 'SSL certificate is valid but could be improved',
                details: ['Valid certificate', 'Supports TLS 1.2+', 'Could enable HSTS']
            });
        }

        resultsDiv.innerHTML = `
            <div class="scan-results">
                <div class="scan-summary">
                    <h3>Scan Results for ${scanResults.target}</h3>
                    <div class="risk-score">
                        <div class="score-circle">
                            <span class="score">${scanResults.score}</span>
                            <span class="label">Security Score</span>
                        </div>
                        <div class="risk-level ${scanResults.overallRisk.toLowerCase()}">
                            Risk Level: ${scanResults.overallRisk}
                        </div>
                    </div>
                </div>
                
                <div class="findings">
                    <h4>Security Findings:</h4>
                    ${scanResults.findings.map(finding => `
                        <div class="finding ${finding.severity}">
                            <div class="finding-header">
                                <i class="fas fa-${this.getSeverityIcon(finding.severity)}"></i>
                                <h5>${finding.title}</h5>
                                <span class="severity ${finding.severity}">${finding.severity.toUpperCase()}</span>
                            </div>
                            <p>${finding.description}</p>
                            <ul>
                                ${finding.details.map(detail => `<li>${detail}</li>`).join('')}
                            </ul>
                        </div>
                    `).join('')}
                </div>
                
                <div class="scan-actions">
                    <button class="btn btn-primary" onclick="cybershield.exportScanResults()">
                        <i class="fas fa-download"></i> Export Results
                    </button>
                    <button class="btn btn-secondary" onclick="cybershield.rescan()">
                        <i class="fas fa-redo"></i> Rescan
                    </button>
                </div>
            </div>
        `;

        this.showToast('Scan completed successfully', 'success');
    }

    getSeverityIcon(severity) {
        const icons = {
            'critical': 'exclamation-triangle',
            'high': 'exclamation-circle',
            'medium': 'exclamation',
            'low': 'info-circle',
            'info': 'check-circle'
        };
        return icons[severity] || 'info-circle';
    }

    exportScanResults() {
        this.showToast('Scan results exported', 'success');
    }

    rescan() {
        this.startSecurityScan();
    }

    // Threat Intelligence
    loadThreatData() {
        this.threatData = [
            {
                id: 1,
                title: 'Critical RCE Vulnerability in Popular Web Server',
                severity: 'critical',
                category: 'vulnerability',
                description: 'Remote code execution vulnerability discovered in Apache HTTP Server',
                timestamp: new Date().toISOString(),
                affected: 'Apache 2.4.29 - 2.4.57'
            },
            {
                id: 2,
                title: 'New Phishing Campaign Targeting Financial Institutions',
                severity: 'high',
                category: 'phishing',
                description: 'Sophisticated phishing campaign detected targeting banking customers',
                timestamp: new Date(Date.now() - 3600000).toISOString(),
                affected: 'Multiple banks'
            },
            {
                id: 3,
                title: 'Ransomware Variant Detected in Healthcare Sector',
                severity: 'high',
                category: 'malware',
                description: 'New ransomware variant specifically targeting healthcare organizations',
                timestamp: new Date(Date.now() - 7200000).toISOString(),
                affected: 'Healthcare systems'
            },
            {
                id: 4,
                title: 'DDoS Attack Pattern Identified',
                severity: 'medium',
                category: 'attack',
                description: 'Large-scale DDoS attack pattern detected across multiple industries',
                timestamp: new Date(Date.now() - 10800000).toISOString(),
                affected: 'Various sectors'
            },
            {
                id: 5,
                title: 'Data Breach at Major E-commerce Platform',
                severity: 'medium',
                category: 'breach',
                description: 'Customer data breach reported at major online retailer',
                timestamp: new Date(Date.now() - 14400000).toISOString(),
                affected: 'E-commerce customers'
            }
        ];

        this.renderThreatFeed();
        this.updateThreatStats();
    }

    renderThreatFeed() {
        const threatList = document.getElementById('threat-list');
        
        threatList.innerHTML = this.threatData.map(threat => `
            <div class="threat-item ${threat.severity}">
                <div class="threat-header">
                    <h4>${threat.title}</h4>
                    <span class="severity ${threat.severity}">${threat.severity.toUpperCase()}</span>
                </div>
                <p>${threat.description}</p>
                <div class="threat-meta">
                    <span><i class="fas fa-clock"></i> ${this.formatTime(threat.timestamp)}</span>
                    <span><i class="fas fa-tag"></i> ${threat.category}</span>
                </div>
            </div>
        `).join('');
    }

    updateThreatStats() {
        const activeThreats = this.threatData.length;
        const criticalAlerts = this.threatData.filter(t => t.severity === 'critical').length;
        
        // Animate counter updates
        this.animateCounter('active-threats', activeThreats);
        this.animateCounter('critical-alerts', criticalAlerts);
        this.animateCounter('blocked-today', 45892);
    }

    animateCounter(elementId, target) {
        const element = document.getElementById(elementId);
        const current = parseInt(element.textContent.replace(/,/g, ''));
        const increment = (target - current) / 50;
        let value = current;

        const updateCounter = () => {
            value += increment;
            if ((increment > 0 && value < target) || (increment < 0 && value > target)) {
                element.textContent = Math.round(value).toLocaleString();
                requestAnimationFrame(updateCounter);
            } else {
                element.textContent = target.toLocaleString();
            }
        };

        updateCounter();
    }

    formatTime(timestamp) {
        const date = new Date(timestamp);
        const now = new Date();
        const diff = now - date;
        const hours = Math.floor(diff / 3600000);
        
        if (hours < 1) return 'Just now';
        if (hours < 24) return `${hours} hour${hours > 1 ? 's' : ''} ago`;
        return `${Math.floor(hours / 24)} day${Math.floor(hours / 24) > 1 ? 's' : ''} ago`;
    }

    // News Section
    loadNewsData() {
        this.newsData = [
            {
                id: 1,
                title: 'Critical Zero-Day Vulnerability Discovered in Popular Software',
                excerpt: 'Security researchers uncover a critical zero-day vulnerability affecting millions of users worldwide.',
                category: 'vulnerability',
                timestamp: new Date(Date.now() - 3600000).toISOString(),
                source: 'Security News Network'
            },
            {
                id: 2,
                title: 'Major Data Breach Exposes Customer Information',
                excerpt: 'A significant data breach at a leading tech company has exposed personal information of thousands of customers.',
                category: 'breach',
                timestamp: new Date(Date.now() - 7200000).toISOString(),
                source: 'Cybersecurity Daily'
            },
            {
                id: 3,
                title: 'New Ransomware Variant Targets Healthcare Systems',
                excerpt: 'Healthcare organizations worldwide are being targeted by a new sophisticated ransomware variant.',
                category: 'malware',
                timestamp: new Date(Date.now() - 10800000).toISOString(),
                source: 'Threat Intelligence Report'
            },
            {
                id: 4,
                title: 'Government Announces New Cybersecurity Regulations',
                excerpt: 'New regulations aimed at improving national cybersecurity infrastructure have been announced.',
                category: 'policy',
                timestamp: new Date(Date.now() - 14400000).toISOString(),
                source: 'Policy Update'
            },
            {
                id: 5,
                title: 'AI-Powered Security Tools Show Promise in Threat Detection',
                excerpt: 'Machine learning algorithms are revolutionizing how organizations detect and respond to cyber threats.',
                category: 'technology',
                timestamp: new Date(Date.now() - 18000000).toISOString(),
                source: 'Tech Security Review'
            },
            {
                id: 6,
                title: 'Phishing Campaign Exploits Recent Security Updates',
                excerpt: 'Cybercriminals are leveraging recent security updates to craft sophisticated phishing attacks.',
                category: 'vulnerability',
                timestamp: new Date(Date.now() - 21600000).toISOString(),
                source: 'Phishing Alert Center'
            }
        ];

        this.renderNews('all');
    }

    renderNews(filter = 'all') {
        const newsGrid = document.getElementById('news-grid');
        const filteredNews = filter === 'all' ? this.newsData : this.newsData.filter(news => news.category === filter);

        newsGrid.innerHTML = filteredNews.map(news => `
            <div class="news-item">
                <span class="news-category ${news.category}">${news.category}</span>
                <h3>${news.title}</h3>
                <p>${news.excerpt}</p>
                <div class="news-meta">
                    <span><i class="fas fa-newspaper"></i> ${news.source}</span>
                    <span><i class="fas fa-clock"></i> ${this.formatTime(news.timestamp)}</span>
                </div>
            </div>
        `).join('');
    }

    filterNews(category) {
        this.renderNews(category);
    }

    filterPortfolio(category) {
        const portfolioItems = document.querySelectorAll('.portfolio-item');
        
        portfolioItems.forEach(item => {
            if (category === 'all' || item.dataset.category === category) {
                item.classList.remove('hidden');
                item.classList.add('show');
            } else {
                item.classList.add('hidden');
                item.classList.remove('show');
            }
        });
    }

    openContactModal() {
        const modal = document.getElementById('tool-modal');
        const modalBody = document.getElementById('modal-body');

        modalBody.innerHTML = `
            <div class="contact-modal">
                <div class="contact-header">
                    <h2><i class="fas fa-envelope"></i> Get In Touch</h2>
                    <p>Let's discuss your cybersecurity needs or collaboration opportunities</p>
                </div>
                
                <form class="contact-form" action="https://formspree.io/f/xvzvdvje" method="POST" onsubmit="handleFormspreeSubmit(event)">
                    <div class="form-group">
                        <label for="name">Name *</label>
                        <input type="text" id="name" name="name" required placeholder="Your full name">
                    </div>
                    
                    <div class="form-group">
                        <label for="email">Email *</label>
                        <input type="email" id="email" name="email" required placeholder="your.email@example.com">
                    </div>
                    
                    <div class="form-group">
                        <label for="subject">Subject *</label>
                        <select id="subject" name="subject" required>
                            <option value="">Select a subject</option>
                            <option value="consultation">Security Consultation</option>
                            <option value="collaboration">Project Collaboration</option>
                            <option value="development">Custom Development</option>
                            <option value="training">Security Training</option>
                            <option value="other">Other</option>
                        </select>
                    </div>
                    
                    <div class="form-group">
                        <label for="message">Message *</label>
                        <textarea id="message" name="message" rows="5" required placeholder="Tell me about your project or security needs..."></textarea>
                    </div>
                    
                    <div class="form-actions">
                        <button type="submit" class="btn btn-primary">
                            <i class="fas fa-paper-plane"></i> Send Message
                        </button>
                        <button type="button" class="btn btn-outline" onclick="closeModal('tool-modal')">
                            <i class="fas fa-times"></i> Cancel
                        </button>
                    </div>
                </form>
                
                <div class="contact-info">
                    <h3><i class="fas fa-info-circle"></i> Other Ways to Connect</h3>
                    <div class="contact-methods">
                        <div class="contact-method">
                            <i class="fas fa-envelope"></i>
                            <span>contact@barakadevx.com</span>
                        </div>
                        <div class="contact-method">
                            <i class="fab fa-linkedin"></i>
                            <span>linkedin.com/in/barakadevx</span>
                        </div>
                        <div class="contact-method">
                            <i class="fab fa-github"></i>
                            <span>github.com/barakadevx</span>
                        </div>
                        <div class="contact-method">
                            <i class="fas fa-clock"></i>
                            <span>Response time: 24-48 hours</span>
                        </div>
                    </div>
                </div>
            </div>
        `;

        modal.style.display = 'block';
    }

    handleContactSubmit(event) {
        event.preventDefault();
        
        const formData = new FormData(event.target);
        const data = Object.fromEntries(formData);
        
        // EmailJS Configuration
        const emailjsConfig = {
            serviceID: 'your_service_id',
            templateID: 'your_template_id',
            userID: 'your_user_id',
            accessToken: 'your_access_token',
            dashboardUrl: 'https://dashboard.emailjs.com/admin'
        };
        
        // Show loading state
        const submitBtn = event.target.querySelector('button[type="submit"]');
        const originalText = submitBtn.innerHTML;
        submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Sending...';
        submitBtn.disabled = true;
        
        // Send email using EmailJS
        emailjs.send(emailjsConfig.serviceID, emailjsConfig.templateID, data, emailjsConfig.userID)
            .then((response) => {
                console.log('Email sent successfully!', response);
                
                // Show success message
                this.showToast('Message sent successfully! We\'ll get back to you soon.', 'success');
                
                // Reset form
                event.target.reset();
                
                // Show resend option
                setTimeout(() => {
                    this.showResendOption(data, emailjsConfig);
                }, 2000);
                
            }, (error) => {
                console.error('Email send failed:', error);
                
                // Show error message
                this.showToast('Failed to send message. Please try again.', 'error');
                
                // Show manual resend option
                this.showManualResendOption(data, emailjsConfig);
            })
            .finally(() => {
                // Reset button state
                submitBtn.innerHTML = originalText;
                submitBtn.disabled = false;
            });
    }
    
    showResendOption(data, emailjsConfig) {
        const modal = document.getElementById('tool-modal');
        const modalBody = document.getElementById('modal-body');
        
        // Add resend section to modal
        const resendSection = document.createElement('div');
        resendSection.className = 'resend-section';
        resendSection.innerHTML = `
            <div class="resend-confirmation">
                <h3><i class="fas fa-check-circle"></i> Message Sent Successfully!</h3>
                <p>Your message has been delivered to our team.</p>
                <div class="resend-actions">
                    <button class="btn btn-outline" onclick="app.resendMessage('${encodeURIComponent(JSON.stringify(data))}')">
                        <i class="fas fa-redo"></i> Resend Message
                    </button>
                    <button class="btn btn-outline" onclick="app.openEmailJSDashboard('${emailjsConfig.dashboardUrl}')">
                        <i class="fas fa-external-link-alt"></i> EmailJS Dashboard
                    </button>
                    <button class="btn btn-primary" onclick="app.closeContactModal()">
                        <i class="fas fa-times"></i> Close
                    </button>
                </div>
                <div class="message-details">
                    <h4>Message Details:</h4>
                    <p><strong>Name:</strong> ${data.name}</p>
                    <p><strong>Email:</strong> ${data.email}</p>
                    <p><strong>Subject:</strong> ${data.subject}</p>
                    <p><strong>Message:</strong> ${data.message}</p>
                </div>
            </div>
        `;
        
        modalBody.appendChild(resendSection);
    }
    
    showManualResendOption(data, emailjsConfig) {
        const modal = document.getElementById('tool-modal');
        const modalBody = document.getElementById('modal-body');
        
        // Add manual resend section
        const manualSection = document.createElement('div');
        manualSection.className = 'manual-resend-section';
        manualSection.innerHTML = `
            <div class="resend-error">
                <h3><i class="fas fa-exclamation-triangle"></i> Message Failed to Send</h3>
                <p>There was an error sending your message. You can try again or use the manual options below.</p>
                <div class="resend-actions">
                    <button class="btn btn-primary" onclick="app.retrySendMessage('${encodeURIComponent(JSON.stringify(data))}')">
                        <i class="fas fa-redo"></i> Try Again
                    </button>
                    <button class="btn btn-outline" onclick="app.openEmailJSDashboard('${emailjsConfig.dashboardUrl}')">
                        <i class="fas fa-external-link-alt"></i> EmailJS Dashboard
                    </button>
                    <button class="btn btn-outline" onclick="app.copyMessageToClipboard('${encodeURIComponent(JSON.stringify(data))}')">
                        <i class="fas fa-copy"></i> Copy Message
                    </button>
                    <button class="btn btn-outline" onclick="app.closeContactModal()">
                        <i class="fas fa-times"></i> Close
                    </button>
                </div>
                <div class="manual-instructions">
                    <h4>Manual Options:</h4>
                    <p>1. <strong>Dashboard:</strong> Visit your EmailJS dashboard to manage messages</p>
                    <p>2. <strong>Direct Email:</strong> Send directly to contact@barakadevx.com</p>
                    <p>3. <strong>Copy & Paste:</strong> Copy your message and send via your email client</p>
                </div>
            </div>
        `;
        
        modalBody.appendChild(manualSection);
    }
    
    resendMessage(encodedData) {
        try {
            const data = JSON.parse(decodeURIComponent(encodedData));
            
            // Show loading
            this.showToast('Resending message...', 'info');
            
            // Resend using EmailJS
            emailjs.send('your_service_id', 'your_template_id', data, 'your_user_id')
                .then((response) => {
                    console.log('Message resent successfully!', response);
                    this.showToast('Message resent successfully!', 'success');
                    
                    // Update UI to show success
                    setTimeout(() => {
                        this.closeContactModal();
                        this.openContactModal();
                    }, 1000);
                })
                .catch((error) => {
                    console.error('Resend failed:', error);
                    this.showToast('Resend failed. Please try manual options.', 'error');
                });
                
        } catch (error) {
            console.error('Error parsing data:', error);
            this.showToast('Error processing resend request.', 'error');
        }
    }
    
    retrySendMessage(encodedData) {
        try {
            const data = JSON.parse(decodeURIComponent(encodedData));
            
            // Show loading
            this.showToast('Retrying message send...', 'info');
            
            // Retry sending
            emailjs.send('your_service_id', 'your_template_id', data, 'your_user_id')
                .then((response) => {
                    console.log('Message sent successfully on retry!', response);
                    this.showToast('Message sent successfully!', 'success');
                    
                    // Close and reopen modal to show success
                    setTimeout(() => {
                        this.closeContactModal();
                        this.openContactModal();
                    }, 1000);
                })
                .catch((error) => {
                    console.error('Retry failed:', error);
                    this.showToast('Retry failed. Please use manual options.', 'error');
                });
                
        } catch (error) {
            console.error('Error parsing data:', error);
            this.showToast('Error processing retry request.', 'error');
        }
    }
    
    openEmailJSDashboard(dashboardUrl) {
        // Open EmailJS dashboard in new tab
        const url = dashboardUrl || 'https://dashboard.emailjs.com/admin';
        window.open(url, '_blank', 'noopener,noreferrer');
        
        this.showToast('Opening EmailJS dashboard...', 'info');
    }
    
    copyMessageToClipboard(encodedData) {
        try {
            const data = JSON.parse(decodeURIComponent(encodedData));
            
            // Format message for clipboard
            const messageText = `
Name: ${data.name}
Email: ${data.email}
Subject: ${data.subject}
Message: ${data.message}

---
Sent via Baraka DevX Contact Form
            `.trim();
            
            // Copy to clipboard
            navigator.clipboard.writeText(messageText).then(() => {
                this.showToast('Message copied to clipboard!', 'success');
            }).catch((error) => {
                console.error('Failed to copy:', error);
                this.showToast('Failed to copy message.', 'error');
            });
            
        } catch (error) {
            console.error('Error parsing data:', error);
            this.showToast('Error copying message.', 'error');
        }
    }
    
    initializeEmailJS() {
        // Initialize EmailJS with your credentials
        try {
            // Set your actual EmailJS credentials here
            const emailjsConfig = {
                serviceID: 'service_barakadevx',  // Replace with your service ID
                templateID: 'template_barakadevx',  // Replace with your template ID
                userID: 'user_barakadevx',        // Replace with your user ID
                dashboardUrl: 'https://dashboard.emailjs.com/admin'
            };
            
            // Initialize EmailJS
            emailjs.init(emailjsConfig.userID);
            
            // Store configuration globally
            window.emailjsConfig = emailjsConfig;
            
            console.log('EmailJS initialized successfully:', emailjsConfig);
            
            // Add EmailJS connection status
            this.checkEmailJSConnection();
            
        } catch (error) {
            console.error('EmailJS initialization failed:', error);
            this.showToast('Email service initialization failed. Please try again later.', 'error');
        }
    }
    
    checkEmailJSConnection() {
        // Check if EmailJS is properly connected
        if (typeof emailjs !== 'undefined') {
            console.log('EmailJS is connected and ready');
            
            // Add connection indicator to UI
            this.addEmailJSStatusIndicator('connected');
            
            // Set up global error handling
            this.setupEmailJSErrorHandling();
            
        } else {
            console.error('EmailJS is not loaded');
            this.addEmailJSStatusIndicator('disconnected');
            this.showToast('Email service is currently unavailable. Please refresh the page.', 'error');
        }
    }
    
    addEmailJSStatusIndicator(status) {
        // Add visual indicator for EmailJS connection status
        const indicator = document.createElement('div');
        indicator.id = 'emailjs-status';
        indicator.className = `emailjs-indicator ${status}`;
        indicator.innerHTML = `
            <i class="fas fa-envelope"></i>
            <span class="status-text">${status === 'connected' ? 'Email Connected' : 'Email Disconnected'}</span>
        `;
        
        // Style the indicator
        indicator.style.cssText = `
            position: fixed;
            top: 20px;
            left: 20px;
            background: ${status === 'connected' ? 'var(--primary-color)' : 'var(--danger-color)'};
            color: var(--dark-bg);
            padding: 0.5rem 1rem;
            border-radius: 20px;
            font-size: 0.8rem;
            font-weight: 600;
            z-index: 9998;
            display: flex;
            align-items: center;
            gap: 0.5rem;
            box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
            transition: all 0.3s ease;
        `;
        
        // Remove existing indicator if present
        const existingIndicator = document.getElementById('emailjs-status');
        if (existingIndicator) {
            existingIndicator.remove();
        }
        
        // Add to page
        document.body.appendChild(indicator);
        
        // Auto-hide after 5 seconds
        setTimeout(() => {
            if (document.getElementById('emailjs-status')) {
                indicator.style.opacity = '0';
                setTimeout(() => indicator.remove(), 300);
            }
        }, 5000);
    }
    
    setupEmailJSErrorHandling() {
        // Set up global error handling for EmailJS
        window.addEventListener('unhandledrejection', (event) => {
            if (event.reason && event.reason.toString().includes('EmailJS')) {
                console.error('EmailJS unhandled error:', event.reason);
                this.showToast('Email service error occurred. Please try again.', 'error');
                event.preventDefault();
            }
        });
        
        // Set up error handling for email operations
        window.emailjsErrorHandling = {
            handle: (error, context) => {
                console.error(`EmailJS Error in ${context}:`, error);
                
                // Show user-friendly error message
                const errorMessage = this.getUserFriendlyErrorMessage(error);
                this.showToast(errorMessage, 'error');
                
                // Log to console for debugging
                console.log('EmailJS Error Details:', {
                    error: error,
                    context: context,
                    timestamp: new Date().toISOString(),
                    userAgent: navigator.userAgent
                });
            },
            
            getUserFriendlyErrorMessage: (error) => {
                // Convert technical errors to user-friendly messages
                if (error.status === 429) {
                    return 'Too many requests. Please wait a moment and try again.';
                } else if (error.status === 401) {
                    return 'Authentication failed. Please check your EmailJS configuration.';
                } else if (error.status === 403) {
                    return 'Access denied. Please check your EmailJS permissions.';
                } else if (error.status >= 500) {
                    return 'Email service is temporarily unavailable. Please try again later.';
                } else if (error.code === 'NETWORK_ERROR') {
                    return 'Network connection failed. Please check your internet connection.';
                } else {
                    return 'Failed to send email. Please try again or use manual options.';
                }
            }
        };
    }
    
    testEmailJSConnection() {
        // Test EmailJS connection with a test email
        if (!window.emailjsConfig) {
            console.error('EmailJS configuration not found');
            return false;
        }
        
        const testData = {
            name: 'Test User',
            email: 'test@barakadevx.com',
            subject: 'EmailJS Connection Test',
            message: 'This is a test message to verify EmailJS connection.'
        };
        
        return emailjs.send(
            window.emailjsConfig.serviceID,
            window.emailjsConfig.templateID,
            testData,
            window.emailjsConfig.userID
        ).then((response) => {
            console.log('EmailJS test successful:', response);
            this.showToast('EmailJS connection test successful!', 'success');
            return true;
        }).catch((error) => {
            console.error('EmailJS test failed:', error);
            this.showToast('EmailJS connection test failed.', 'error');
            return false;
        });
    }
    
    connectEmailJSDashboard() {
        // Enhanced dashboard connection with authentication
        const dashboardUrl = 'https://dashboard.emailjs.com/admin';
        
        // Create secure connection window
        const popup = window.open(
            dashboardUrl,
            'emailjs-dashboard',
            'width=1200,height=800,scrollbars=yes,resizable=yes,toolbar=yes,menubar=yes,location=yes,status=yes'
        );
        
        if (popup) {
            // Monitor popup for connection status
            const checkClosed = setInterval(() => {
                if (popup.closed) {
                    clearInterval(checkClosed);
                    console.log('EmailJS dashboard closed');
                    this.showToast('EmailJS dashboard connection closed', 'info');
                }
            }, 1000);
            
            // Show connection message
            this.showToast('Opening EmailJS dashboard...', 'info');
            
            // Focus on popup
            popup.focus();
            
        } else {
            // Fallback for popup blockers
            window.open(dashboardUrl, '_blank', 'noopener,noreferrer');
            this.showToast('Popup blocked. Opening EmailJS dashboard in new tab...', 'warning');
        }
    }
    
    getEmailJSStatus() {
        // Get current EmailJS connection status
        const indicator = document.getElementById('emailjs-status');
        if (indicator) {
            return indicator.classList.contains('connected') ? 'connected' : 'disconnected';
        }
        return 'unknown';
    }
    
    reconnectEmailJS() {
        // Attempt to reconnect EmailJS
        console.log('Attempting to reconnect EmailJS...');
        
        // Show loading indicator
        this.showToast('Reconnecting email service...', 'info');
        
        // Reinitialize EmailJS
        setTimeout(() => {
            this.initializeEmailJS();
        }, 1000);
    }

    // Utility Functions
    closeModal(modalId) {
        document.getElementById(modalId).style.display = 'none';
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
}

// Global functions for onclick handlers
function scrollToSection(sectionId) {
    document.getElementById(sectionId).scrollIntoView({ behavior: 'smooth' });
}

function startSecurityScan() {
    barakadevx.startSecurityScan();
}

function openPasswordGenerator() {
    barakadevx.openPasswordGenerator();
}

function openPasswordChecker() {
    barakadevx.openPasswordChecker();
}

function openEncoder() {
    barakadevx.openEncoder();
}

function openHashGenerator() {
    barakadevx.openHashGenerator();
}

function openIPChecker() {
    barakadevx.openIPChecker();
}

function openSSLChecker() {
    barakadevx.openSSLChecker();
}

function openContactModal() {
    barakadevx.openContactModal();
}

function openProjectDetails(projectId) {
    barakadevx.openProjectDetails(projectId);
}

function closeModal(modalId) {
    barakadevx.closeModal(modalId);
}

// Initialize the platform
const app = new BarakaDevX();

// Make functions globally accessible
window.scrollToSection = (sectionId) => app.scrollToSection(sectionId);
window.startSecurityScan = () => app.startSecurityScan();
window.openPasswordGenerator = () => app.openPasswordGenerator();
window.openPasswordChecker = () => app.openPasswordChecker();
window.openEncoder = () => app.openEncoder();
window.openHashGenerator = () => app.openHashGenerator();
window.openIPChecker = () => app.openIPChecker();
window.openSSLChecker = () => app.openSSLChecker();
window.openContactModal = () => app.openContactModal();
window.openProjectDetails = (projectId) => app.openProjectDetails(projectId);
window.closeModal = (modalId) => app.closeModal(modalId);
window.handleFormspreeSubmit = (event) => app.handleFormspreeSubmit(event);
