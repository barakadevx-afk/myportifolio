// Baraka DevX Certifications & Courses JavaScript
class CertificationsPlatform {
    constructor() {
        this.companyName = 'Baraka DevX';
        this.companyTagline = 'Next-Generation Cybersecurity Platform';
        this.certifications = [
            {
                id: 'CEH',
                name: 'Certified Ethical Hacker',
                code: 'CEH v12',
                level: 'intermediate',
                duration: '40 Hours',
                price: 2999,
                format: 'Online + Live',
                modules: 20,
                description: 'Master the latest ethical hacking techniques, tools, and methodologies used by security professionals worldwide.',
                features: ['20 Comprehensive Modules', 'Hands-on Lab Environment', 'Official Exam Voucher', 'Lifetime Access'],
                instructor: 'Dr. Sarah Chen',
                rating: 4.8,
                students: 3250,
                certificateId: this.generateCertificateId('CEH'),
                issueDate: new Date().toISOString(),
                validityPeriod: 'Lifetime'
            },
            {
                id: 'Security+',
                name: 'CompTIA Security+',
                code: 'SY0-701',
                level: 'beginner',
                duration: '30 Hours',
                price: 1599,
                format: 'Online',
                modules: 6,
                description: 'Build foundational cybersecurity skills with this globally recognized entry-level certification perfect for career starters.',
                features: ['6 Security Domains', 'Performance Labs', 'Exam Preparation', 'Study Materials'],
                instructor: 'Michael Rodriguez',
                rating: 4.9,
                students: 5100,
                certificateId: this.generateCertificateId('Security+'),
                issueDate: new Date().toISOString(),
                validityPeriod: 'Lifetime'
            },
            {
                id: 'CISSP',
                name: 'Certified Information Systems Security Professional',
                code: 'CISSP',
                level: 'advanced',
                duration: '60 Hours',
                price: 4999,
                format: 'Hybrid',
                modules: 8,
                description: 'Join the elite ranks of cybersecurity professionals with this premier security certification for senior roles.',
                features: ['8 Security Domains', 'Real-World Case Studies', 'Expert Mentorship', 'Executive Networking'],
                instructor: 'Jennifer Liu',
                rating: 4.7,
                students: 2100,
                certificateId: this.generateCertificateId('CISSP'),
                issueDate: new Date().toISOString(),
                validityPeriod: '3 Years'
            },
            {
                id: 'OSCP',
                name: 'Offensive Security Certified Professional',
                code: 'OSCP',
                level: 'advanced',
                duration: '80 Hours',
                price: 3499,
                format: 'Online + Lab',
                modules: 12,
                description: 'Prove your practical penetration testing skills with this hands-on certification requiring real-world expertise.',
                features: ['24-Hour Practical Exam', 'Dedicated Lab Environment', 'Hands-on Testing', 'Practical Assessment'],
                instructor: 'Alex Thompson',
                rating: 4.9,
                students: 1850,
                certificateId: this.generateCertificateId('OSCP'),
                issueDate: new Date().toISOString(),
                validityPeriod: 'Lifetime'
            }
        ];

        this.courses = [
            {
                id: 'WEBSEC',
                name: 'Web Application Security',
                level: 'intermediate',
                duration: '25 Hours',
                price: 899,
                instructor: 'Dr. Sarah Chen',
                rating: 4.8,
                students: 1250,
                image: 'https://picsum.photos/seed/webapp-sec/400/250',
                description: 'Master modern web application security testing techniques and vulnerability assessment.',
                topics: ['OWASP Top 10', 'SQL Injection', 'XSS', 'CSRF', 'Security Headers'],
                prerequisites: ['Basic HTML/CSS', 'JavaScript Fundamentals'],
                certificateId: this.generateCertificateId('WEBSEC'),
                completionDate: new Date().toISOString()
            },
            {
                id: 'NETSEC',
                name: 'Network Security Fundamentals',
                level: 'beginner',
                duration: '30 Hours',
                price: 699,
                instructor: 'Michael Rodriguez',
                rating: 4.9,
                students: 2100,
                image: 'https://picsum.photos/seed/network-sec/400/250',
                description: 'Learn essential network security concepts, protocols, and defense mechanisms.',
                topics: ['TCP/IP', 'Firewalls', 'IDS/IPS', 'VPN', 'Network Monitoring'],
                prerequisites: ['Basic Networking', 'Computer Fundamentals'],
                certificateId: this.generateCertificateId('NETSEC'),
                completionDate: new Date().toISOString()
            },
            {
                id: 'CLOUDSEC',
                name: 'Cloud Security Architecture',
                level: 'advanced',
                duration: '40 Hours',
                price: 1299,
                instructor: 'Jennifer Liu',
                rating: 4.7,
                students: 850,
                image: 'https://picsum.photos/seed/cloud-sec/400/250',
                description: 'Master cloud security principles and secure cloud deployment strategies.',
                topics: ['AWS Security', 'Azure Security', 'Cloud Compliance', 'DevSecOps', 'Container Security'],
                prerequisites: ['Cloud Computing Basics', 'Security Fundamentals'],
                certificateId: this.generateCertificateId('CLOUDSEC'),
                completionDate: new Date().toISOString()
            },
            {
                id: 'MALWARE',
                name: 'Malware Analysis & Reverse Engineering',
                level: 'advanced',
                duration: '50 Hours',
                price: 1499,
                instructor: 'Alex Thompson',
                rating: 4.9,
                students: 450,
                image: 'https://picsum.photos/seed/malware/400/250',
                description: 'Dive deep into malware analysis, reverse engineering, and threat hunting.',
                topics: ['Static Analysis', 'Dynamic Analysis', 'Reverse Engineering', 'Malware Types', 'Sandboxing'],
                prerequisites: ['Assembly Language', 'Operating Systems', 'Programming Skills'],
                certificateId: this.generateCertificateId('MALWARE'),
                completionDate: new Date().toISOString()
            }
        ];

        this.learningPaths = [
            {
                id: 'SECURITY_ANALYST',
                name: 'Security Analyst Path',
                duration: '6-12 Months',
                outcome: 'Security Analyst, SOC Analyst, Threat Hunter',
                jobPlacement: 85,
                avgSalary: 75000,
                courses: [
                    'Network Security Fundamentals',
                    'Security+ Certification',
                    'SIEM Operations',
                    'Threat Intelligence'
                ],
                description: 'Complete path from beginner to security analyst with job-ready skills.',
                certificateId: this.generateCertificateId('SECURITY_ANALYST'),
                completionDate: new Date().toISOString()
            },
            {
                id: 'ETHICAL_HACKER',
                name: 'Ethical Hacker Path',
                duration: '8-15 Months',
                outcome: 'Penetration Tester, Security Consultant, Ethical Hacker',
                jobPlacement: 92,
                avgSalary: 95000,
                courses: [
                    'Linux Fundamentals',
                    'Python for Security',
                    'CEH Certification',
                    'OSCP Preparation'
                ],
                description: 'Complete ethical hacking journey from fundamentals to expert penetration testing.',
                certificateId: this.generateCertificateId('ETHICAL_HACKER'),
                completionDate: new Date().toISOString()
            }
        ];

        this.init();
    }

    generateCertificateId(programId) {
        const timestamp = Date.now();
        const random = Math.random().toString(36).substr(2, 9).toUpperCase();
        return `${programId}-${timestamp}-${random}`;
    }

    init() {
        this.setupEventListeners();
        this.initializeTheme();
        this.animateStats();
        this.setupSmoothScrolling();
        this.initializeEmailJS();
        this.setupPDFGeneration();
    }

    setupPDFGeneration() {
        // Load jsPDF library for PDF generation
        const script = document.createElement('script');
        script.src = 'https://cdnjs.cloudflare.com/ajax/libs/jspdf/2.5.1/jspdf.umd.min.js';
        script.onload = () => {
            console.log('PDF generation library loaded');
        };
        document.head.appendChild(script);
    }

    downloadCertificatePDF(itemId, itemType = 'certification') {
        let item;
        
        if (itemType === 'certification') {
            item = this.certifications.find(cert => cert.id === itemId);
        } else if (itemType === 'course') {
            item = this.courses.find(course => course.id === itemId);
        } else if (itemType === 'path') {
            item = this.learningPaths.find(path => path.id === itemId);
        }

        if (!item) {
            this.showToast('Item not found', 'error');
            return;
        }

        try {
            const { jsPDF } = window.jspdf;
            const pdf = new jsPDF({
                orientation: 'landscape',
                unit: 'mm',
                format: 'a4'
            });

            // Generate certificate content
            this.generateCertificateContent(pdf, item, itemType);
            
            // Save the PDF
            const fileName = `${this.companyName.replace(/\s+/g, '_')}_${item.name.replace(/\s+/g, '_')}_Certificate.pdf`;
            pdf.save(fileName);
            
            this.showToast('Certificate downloaded successfully!', 'success');
        } catch (error) {
            console.error('PDF generation failed:', error);
            this.showToast('Failed to generate certificate. Please try again.', 'error');
        }
    }

    generateCertificateContent(pdf, item, itemType) {
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
        pdf.text(item.name, pageWidth / 2, 90, { align: 'center' });
        
        // Certificate Code
        pdf.setTextColor(74, 0, 224);
        pdf.setFontSize(16);
        pdf.setFont('helvetica', 'normal');
        pdf.text(`Certificate Code: ${item.certificateId || item.id}`, pageWidth / 2, 105, { align: 'center' });
        
        // Recipient Name (placeholder - would be filled with actual user data)
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
        pdf.text(`Program: ${item.name}`, 50, 195);
        pdf.text(`Duration: ${item.duration}`, 50, 210);
        pdf.text(`Format: ${item.format}`, 50, 225);
        
        if (itemType === 'certification') {
            pdf.text(`Level: ${item.level.charAt(0).toUpperCase() + item.level.slice(1)}`, pageWidth - 120, 195);
            pdf.text(`Code: ${item.code}`, pageWidth - 120, 210);
            pdf.text(`Validity: ${item.validityPeriod}`, pageWidth - 120, 225);
        } else if (itemType === 'course') {
            pdf.text(`Instructor: ${item.instructor}`, pageWidth - 120, 195);
            pdf.text(`Rating: ${item.rating}/5.0`, pageWidth - 120, 210);
            pdf.text(`Students: ${item.students.toLocaleString()}`, pageWidth - 120, 225);
        } else if (itemType === 'path') {
            pdf.text(`Duration: ${item.duration}`, pageWidth - 120, 195);
            pdf.text(`Placement: ${item.jobPlacement}%`, pageWidth - 120, 210);
            pdf.text(`Avg Salary: $${item.avgSalary.toLocaleString()}`, pageWidth - 120, 225);
        }
        
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
        pdf.text(`Verification Code: ${this.generateVerificationCode(item.certificateId || item.id)}`, pageWidth / 2, pageHeight - 10, { align: 'center' });
    }

    generateVerificationCode(certificateId) {
        const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
        let result = '';
        for (let i = 0; i < 12; i++) {
            result += chars.charAt(Math.floor(Math.random() * chars.length));
        }
        return result;
    }

    shareCertification(certId) {
        const certification = this.certifications.find(cert => cert.id === certId);
        if (certification) {
            const shareData = {
                title: `${certification.name} - ${this.companyName}`,
                text: `Check out this amazing certification: ${certification.name} offered by ${this.companyName}`,
                url: `${window.location.origin}/certifications.html#${certId}`,
                image: 'https://barakadevx.com/images/cert-share.jpg'
            };

            if (navigator.share) {
                navigator.share(shareData)
                    .then(() => this.showToast('Shared successfully!', 'success'))
                    .catch((error) => console.error('Share failed:', error));
            } else {
                // Fallback: Copy to clipboard
                const shareText = `${shareData.title}\n${shareData.text}\n${shareData.url}`;
                navigator.clipboard.writeText(shareText)
                    .then(() => this.showToast('Link copied to clipboard!', 'success'))
                    .catch(() => this.showToast('Failed to copy link', 'error'));
            }
        }
    }

    showCertificationLevel(level) {
        const cards = document.querySelectorAll('.certification-card');
        const tabs = document.querySelectorAll('.level-tab');
        
        // Update active tab
        tabs.forEach(tab => tab.classList.remove('active'));
        event.target.closest('.level-tab').classList.add('active');
        
        // Filter cards
        cards.forEach(card => {
            if (level === 'all' || card.dataset.level === level) {
                card.style.display = 'block';
                card.style.animation = 'fadeIn 0.5s ease-in-out';
            } else {
                card.style.display = 'none';
            }
        });
    }

    filterPrograms() {
        const levelFilter = document.getElementById('level-filter').value;
        const typeFilter = document.getElementById('type-filter').value;
        const durationFilter = document.getElementById('duration-filter').value;
        const priceFilter = document.getElementById('price-filter').value;
        
        const allCards = document.querySelectorAll('.certification-card, .course-card, .learning-path-card');
        const activeFilters = [];
        
        allCards.forEach(card => {
            let show = true;
            
            // Level filter
            if (levelFilter && card.dataset.level !== levelFilter) {
                show = false;
            }
            
            // Type filter
            if (typeFilter && card.dataset.type !== typeFilter) {
                show = false;
            }
            
            // Duration filter
            if (durationFilter) {
                const duration = this.getCardDuration(card);
                if (!this.matchesDurationFilter(duration, durationFilter)) {
                    show = false;
                }
            }
            
            // Price filter
            if (priceFilter) {
                const price = this.getCardPrice(card);
                if (!this.matchesPriceFilter(price, priceFilter)) {
                    show = false;
                }
            }
            
            if (show) {
                card.style.display = 'block';
                card.style.animation = 'fadeIn 0.5s ease-in-out';
            } else {
                card.style.display = 'none';
            }
        });
        
        this.updateActiveFilters(levelFilter, typeFilter, durationFilter, priceFilter);
    }

    getCardDuration(card) {
        const durationText = card.querySelector('.detail .value')?.textContent;
        return durationText || '';
    }

    getCardPrice(card) {
        const priceText = card.querySelector('.detail .value')?.textContent;
        if (priceText) {
            return parseInt(priceText.replace(/[^0-9]/g, ''));
        }
        return 0;
    }

    matchesDurationFilter(duration, filter) {
        const hours = parseInt(duration.replace(/[^0-9]/g, ''));
        switch (filter) {
            case 'short': return hours < 30;
            case 'medium': return hours >= 30 && hours <= 60;
            case 'long': return hours > 60;
            default: return true;
        }
    }

    matchesPriceFilter(price, filter) {
        switch (filter) {
            case 'budget': return price < 1000;
            case 'standard': return price >= 1000 && price <= 3000;
            case 'premium': return price > 3000 && price <= 5000;
            case 'enterprise': return price > 5000;
            default: return true;
        }
    }

    updateActiveFilters(level, type, duration, price) {
        const activeFiltersDiv = document.getElementById('active-filters');
        const filters = [];
        
        if (level) filters.push(`Level: ${level.charAt(0).toUpperCase() + level.slice(1)}`);
        if (type) filters.push(`Type: ${type.charAt(0).toUpperCase() + type.slice(1)}`);
        if (duration) filters.push(`Duration: ${duration.charAt(0).toUpperCase() + duration.slice(1)}`);
        if (price) filters.push(`Price: ${price.charAt(0).toUpperCase() + price.slice(1)}`);
        
        if (filters.length > 0) {
            activeFiltersDiv.innerHTML = `
                <div class="active-filters-list">
                    <span class="filters-label">Active Filters:</span>
                    ${filters.map(filter => `<span class="filter-tag">${filter}</span>`).join('')}
                    <button class="clear-filters" onclick="resetFilters()">
                        <i class="fas fa-times"></i> Clear All
                    </button>
                </div>
            `;
        } else {
            activeFiltersDiv.innerHTML = '';
        }
    }

    resetFilters() {
        document.getElementById('level-filter').value = '';
        document.getElementById('type-filter').value = '';
        document.getElementById('duration-filter').value = '';
        document.getElementById('price-filter').value = '';
        document.getElementById('active-filters').innerHTML = '';
        
        const allCards = document.querySelectorAll('.certification-card, .course-card, .learning-path-card');
        allCards.forEach(card => {
            card.style.display = 'block';
            card.style.animation = 'fadeIn 0.5s ease-in-out';
        });
        
        this.showToast('Filters cleared', 'info');
    }

    // Enhanced EmailJS Integration
    initializeEmailJS() {
        try {
            const emailjsConfig = {
                serviceID: 'service_barakadevx',
                templateID: 'template_certifications',
                userID: 'user_barakadevx',
                dashboardUrl: 'https://dashboard.emailjs.com/admin'
            };
            
            emailjs.init(emailjsConfig.userID);
            window.emailjsConfig = emailjsConfig;
            
            console.log('EmailJS initialized for certifications:', emailjsConfig);
            
            // Add enhanced email status indicator
            this.addEnhancedEmailStatus();
            
        } catch (error) {
            console.error('EmailJS initialization failed:', error);
        }
    }

    addEnhancedEmailStatus() {
        const indicator = document.createElement('div');
        indicator.id = 'enhanced-email-status';
        indicator.className = 'enhanced-email-indicator connected';
        indicator.innerHTML = `
            <div class="email-status-content">
                <i class="fas fa-envelope"></i>
                <span class="status-text">Email Service Connected</span>
                <div class="company-brand">
                    <strong>${this.companyName}</strong>
                </div>
            </div>
            <div class="email-status-actions">
                <button class="btn btn-small btn-outline" onclick="app.testEmailConnection()">
                    <i class="fas fa-sync"></i> Test
                </button>
                <button class="btn btn-small btn-outline" onclick="app.openEmailJSDashboard()">
                    <i class="fas fa-external-link-alt"></i> Dashboard
                </button>
                <button class="btn btn-small btn-primary" onclick="app.showEmailSettings()">
                    <i class="fas fa-cog"></i> Settings
                </button>
            </div>
        `;
        
        // Enhanced styling
        indicator.style.cssText = `
            position: fixed;
            top: 20px;
            right: 20px;
            background: linear-gradient(135deg, rgba(0, 255, 136, 0.95), rgba(74, 0, 224, 0.95));
            color: white;
            padding: 1rem 1.5rem;
            border-radius: 12px;
            font-size: 0.9rem;
            font-weight: 600;
            z-index: 9999;
            box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3);
            backdrop-filter: blur(20px);
            border: 2px solid rgba(255, 255, 255, 0.2);
            transition: all 0.3s ease;
            max-width: 350px;
        `;
        
        // Remove existing indicator
        const existingIndicator = document.getElementById('enhanced-email-status');
        if (existingIndicator) {
            existingIndicator.remove();
        }
        
        document.body.appendChild(indicator);
        
        // Auto-hide after 8 seconds
        setTimeout(() => {
            if (document.getElementById('enhanced-email-status')) {
                indicator.style.opacity = '0';
                indicator.style.transform = 'translateX(100%)';
                setTimeout(() => indicator.remove(), 300);
            }
        }, 8000);
    }

    testEmailConnection() {
        this.showToast('Testing email connection...', 'info');
        
        if (window.emailjsConfig) {
            const testData = {
                name: 'Test User',
                email: 'test@barakadevx.com',
                subject: 'Email Connection Test',
                message: 'This is a test message to verify EmailJS connectivity.',
                company: this.companyName,
                timestamp: new Date().toISOString()
            };
            
            emailjs.send(
                window.emailjsConfig.serviceID,
                window.emailjsConfig.templateID,
                testData,
                window.emailjsConfig.userID
            ).then((response) => {
                console.log('Email test successful:', response);
                this.showToast('Email connection test successful!', 'success');
                this.updateEmailStatus('connected');
            }).catch((error) => {
                console.error('Email test failed:', error);
                this.showToast('Email connection test failed.', 'error');
                this.updateEmailStatus('disconnected');
            });
        }
    }

    updateEmailStatus(status) {
        const indicator = document.getElementById('enhanced-email-status');
        if (indicator) {
            indicator.className = `enhanced-email-indicator ${status}`;
            const statusText = indicator.querySelector('.status-text');
            if (statusText) {
                statusText.textContent = status === 'connected' ? 'Email Service Connected' : 'Email Service Disconnected';
            }
        }
    }

    showEmailSettings() {
        const modal = document.getElementById('enrollment-modal');
        const modalBody = document.getElementById('enrollment-modal-body');
        
        modalBody.innerHTML = `
            <div class="email-settings">
                <h3><i class="fas fa-cog"></i> Email Settings</h3>
                <div class="settings-form">
                    <div class="form-group">
                        <label for="company-name">Company Name</label>
                        <input type="text" id="company-name" value="${this.companyName}" readonly>
                    </div>
                    <div class="form-group">
                        <label for="company-tagline">Company Tagline</label>
                        <input type="text" id="company-tagline" value="${this.companyTagline}" readonly>
                    </div>
                    <div class="form-group">
                        <label for="email-service">Email Service</label>
                        <select id="email-service">
                            <option value="emailjs">EmailJS</option>
                            <option value="sendgrid">SendGrid</option>
                            <option value="mailgun">Mailgun</option>
                        </select>
                    </div>
                    <div class="form-group">
                        <label for="auto-resend">Auto Resend</label>
                        <div class="toggle-switch">
                            <input type="checkbox" id="auto-resend" checked>
                            <label for="auto-resend" class="toggle-label"></label>
                        </div>
                    </div>
                    <div class="form-group">
                        <label for="resend-attempts">Max Resend Attempts</label>
                        <input type="number" id="resend-attempts" value="3" min="1" max="10">
                    </div>
                    <div class="form-group">
                        <label for="resend-delay">Resend Delay (minutes)</label>
                        <input type="number" id="resend-delay" value="5" min="1" max="60">
                    </div>
                </div>
                <div class="settings-actions">
                    <button class="btn btn-primary" onclick="app.saveEmailSettings()">
                        <i class="fas fa-save"></i> Save Settings
                    </button>
                    <button class="btn btn-outline" onclick="app.closeModal('enrollment-modal')">
                        <i class="fas fa-times"></i> Cancel
                    </button>
                </div>
            </div>
        `;
        
        modal.style.display = 'block';
    }

    saveEmailSettings() {
        const settings = {
            companyName: document.getElementById('company-name').value,
            companyTagline: document.getElementById('company-tagline').value,
            emailService: document.getElementById('email-service').value,
            autoResend: document.getElementById('auto-resend').checked,
            resendAttempts: parseInt(document.getElementById('resend-attempts').value),
            resendDelay: parseInt(document.getElementById('resend-delay').value)
        };
        
        // Save to localStorage
        localStorage.setItem('baraka_email_settings', JSON.stringify(settings));
        
        this.showToast('Email settings saved successfully!', 'success');
        this.closeModal('enrollment-modal');
    }

    // Enhanced resend functionality
    resendMessageWithRetry(encodedData, maxRetries = 3) {
        let retryCount = 0;
        
        const attemptResend = () => {
            if (retryCount >= maxRetries) {
                this.showToast('Maximum retry attempts reached. Please try again later.', 'error');
                return;
            }
            
            retryCount++;
            this.showToast(`Resend attempt ${retryCount} of ${maxRetries}...`, 'info');
            
            this.resendMessage(encodedData)
                .then(() => {
                    this.showToast(`Message resent successfully on attempt ${retryCount}!`, 'success');
                })
                .catch((error) => {
                    console.error(`Resend attempt ${retryCount} failed:`, error);
                    
                    if (retryCount < maxRetries) {
                        // Schedule next retry
                        const delay = 5000 * retryCount; // Exponential backoff
                        setTimeout(attemptResend, delay);
                    }
                });
        };
        
        attemptResend();
    }

    // Existing methods continue...
    setupEventListeners() {
        // Theme toggle
        document.getElementById('theme-toggle').addEventListener('click', () => {
            this.toggleTheme();
        });

        // Mobile menu toggle
        document.getElementById('mobile-menu-toggle').addEventListener('click', () => {
            this.toggleMobileMenu();
        });

        // Close mobile menu when clicking outside
        document.addEventListener('click', (e) => {
            const navMenu = document.querySelector('.nav-menu');
            const mobileToggle = document.getElementById('mobile-menu-toggle');
            
            if (!navMenu.contains(e.target) && !mobileToggle.contains(e.target)) {
                navMenu.classList.remove('active');
            }
        });

        // Scroll effects
        window.addEventListener('scroll', () => {
            this.handleScroll();
        });
    }

    initializeTheme() {
        const savedTheme = localStorage.getItem('theme') || 'dark';
        document.body.setAttribute('data-theme', savedTheme);
        this.updateThemeToggle(savedTheme);
    }

    toggleTheme() {
        const currentTheme = document.body.getAttribute('data-theme');
        const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
        
        document.body.setAttribute('data-theme', newTheme);
        localStorage.setItem('theme', newTheme);
        this.updateThemeToggle(newTheme);
    }

    updateThemeToggle(theme) {
        const themeToggle = document.getElementById('theme-toggle');
        const icon = themeToggle.querySelector('i');
        
        if (theme === 'light') {
            icon.className = 'fas fa-moon';
        } else {
            icon.className = 'fas fa-sun';
        }
    }

    toggleMobileMenu() {
        const navMenu = document.querySelector('.nav-menu');
        navMenu.classList.toggle('active');
    }

    handleScroll() {
        const navbar = document.querySelector('.navbar');
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    }

    setupSmoothScrolling() {
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                const target = document.querySelector(this.getAttribute('href'));
                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            });
        });
    }

    animateStats() {
        const statNumbers = document.querySelectorAll('.stat-number');
        
        statNumbers.forEach(stat => {
            const target = parseInt(stat.getAttribute('data-target'));
            const increment = target / 50;
            let current = 0;

            const updateStat = () => {
                current += increment;
                if ((increment > 0 && current < target) || (increment < 0 && current > target)) {
                    stat.textContent = Math.round(current).toLocaleString();
                    requestAnimationFrame(updateStat);
                } else {
                    stat.textContent = target.toLocaleString();
                }
            };

            updateStat();
        });
    }

    scrollToSection(sectionId) {
        const section = document.getElementById(sectionId);
        if (section) {
            section.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    }

    // Certification Functions
    enrollCertification(certId) {
        const certification = this.certifications.find(cert => cert.id === certId);
        if (certification) {
            this.showEnrollmentModal('certification', certification);
        }
    }

    viewCertificationDetails(certId) {
        const certification = this.certifications.find(cert => cert.id === certId);
        if (certification) {
            this.showDetailsModal('certification', certification);
        }
    }

    // Course Functions
    enrollCourse(courseId) {
        const course = this.courses.find(c => c.id === courseId);
        if (course) {
            this.showEnrollmentModal('course', course);
        }
    }

    viewCourseDetails(courseId) {
        const course = this.courses.find(c => c.id === courseId);
        if (course) {
            this.showDetailsModal('course', course);
        }
    }

    // Learning Path Functions
    enrollPath(pathId) {
        const path = this.learningPaths.find(p => p.id === pathId);
        if (path) {
            this.showEnrollmentModal('path', path);
        }
    }

    viewPathDetails(pathId) {
        const path = this.learningPaths.find(p => p.id === pathId);
        if (path) {
            this.showDetailsModal('path', path);
        }
    }

    // Modal Functions
    showEnrollmentModal(type, item) {
        const modal = document.getElementById('enrollment-modal');
        const modalBody = document.getElementById('enrollment-modal-body');
        
        let content = '';
        
        if (type === 'certification') {
            content = `
                <div class="enrollment-form">
                    <h3>Enroll in ${item.name}</h3>
                    <form onsubmit="handleEnrollmentSubmit(event, '${type}', '${item.id}')">
                        <div class="form-group">
                            <label for="full-name">Full Name *</label>
                            <input type="text" id="full-name" name="fullName" required placeholder="Enter your full name">
                        </div>
                        <div class="form-group">
                            <label for="email">Email Address *</label>
                            <input type="email" id="email" name="email" required placeholder="Enter your email address">
                        </div>
                        <div class="form-group">
                            <label for="phone">Phone Number</label>
                            <input type="tel" id="phone" name="phone" placeholder="Enter your phone number">
                        </div>
                        <div class="form-group">
                            <label for="experience">Experience Level</label>
                            <select id="experience" name="experience">
                                <option value="">Select your experience</option>
                                <option value="beginner">Beginner</option>
                                <option value="intermediate">Intermediate</option>
                                <option value="advanced">Advanced</option>
                            </select>
                        </div>
                        <div class="enrollment-summary">
                            <div class="summary-item">
                                <span class="label">Program:</span>
                                <span class="value">${item.name}</span>
                            </div>
                            <div class="summary-item">
                                <span class="label">Duration:</span>
                                <span class="value">${item.duration}</span>
                            </div>
                            <div class="summary-item">
                                <span class="label">Price:</span>
                                <span class="value">$${item.price.toLocaleString()}</span>
                            </div>
                        </div>
                        <div class="form-actions">
                            <button type="submit" class="btn btn-primary">
                                <i class="fas fa-check"></i> Complete Enrollment
                            </button>
                            <button type="button" class="btn btn-outline" onclick="closeModal('enrollment-modal')">
                                <i class="fas fa-times"></i> Cancel
                            </button>
                        </div>
                    </form>
                </div>
            `;
        } else if (type === 'course') {
            content = `
                <div class="enrollment-form">
                    <h3>Enroll in ${item.name}</h3>
                    <form onsubmit="handleEnrollmentSubmit(event, '${type}', '${item.id}')">
                        <div class="form-group">
                            <label for="full-name">Full Name *</label>
                            <input type="text" id="full-name" name="fullName" required placeholder="Enter your full name">
                        </div>
                        <div class="form-group">
                            <label for="email">Email Address *</label>
                            <input type="email" id="email" name="email" required placeholder="Enter your email address">
                        </div>
                        <div class="form-group">
                            <label for="payment">Payment Method</label>
                            <select id="payment" name="payment">
                                <option value="">Select payment method</option>
                                <option value="credit-card">Credit Card</option>
                                <option value="paypal">PayPal</option>
                                <option value="bank-transfer">Bank Transfer</option>
                            </select>
                        </div>
                        <div class="enrollment-summary">
                            <div class="summary-item">
                                <span class="label">Course:</span>
                                <span class="value">${item.name}</span>
                            </div>
                            <div class="summary-item">
                                <span class="label">Instructor:</span>
                                <span class="value">${item.instructor}</span>
                            </div>
                            <div class="summary-item">
                                <span class="label">Duration:</span>
                                <span class="value">${item.duration}</span>
                            </div>
                            <div class="summary-item">
                                <span class="label">Price:</span>
                                <span class="value">$${item.price.toLocaleString()}</span>
                            </div>
                        </div>
                        <div class="form-actions">
                            <button type="submit" class="btn btn-primary">
                                <i class="fas fa-check"></i> Complete Enrollment
                            </button>
                            <button type="button" class="btn btn-outline" onclick="closeModal('enrollment-modal')">
                                <i class="fas fa-times"></i> Cancel
                            </button>
                        </div>
                    </form>
                </div>
            `;
        } else if (type === 'path') {
            content = `
                <div class="enrollment-form">
                    <h3>Start ${item.name}</h3>
                    <form onsubmit="handleEnrollmentSubmit(event, '${type}', '${item.id}')">
                        <div class="form-group">
                            <label for="full-name">Full Name *</label>
                            <input type="text" id="full-name" name="fullName" required placeholder="Enter your full name">
                        </div>
                        <div class="form-group">
                            <label for="email">Email Address *</label>
                            <input type="email" id="email" name="email" required placeholder="Enter your email address">
                        </div>
                        <div class="form-group">
                            <label for="goals">Career Goals</label>
                            <textarea id="goals" name="goals" placeholder="Tell us about your career goals"></textarea>
                        </div>
                        <div class="path-overview">
                            <h4>Learning Path Includes:</h4>
                            <ul>
                                ${item.courses.map(course => `<li><i class="fas fa-check-circle"></i> ${course}</li>`).join('')}
                            </ul>
                        </div>
                        <div class="enrollment-summary">
                            <div class="summary-item">
                                <span class="label">Path:</span>
                                <span class="value">${item.name}</span>
                            </div>
                            <div class="summary-item">
                                <span class="label">Duration:</span>
                                <span class="value">${item.duration}</span>
                            </div>
                            <div class="summary-item">
                                <span class="label">Career Outcome:</span>
                                <span class="value">${item.outcome}</span>
                            </div>
                            <div class="summary-item">
                                <span class="label">Job Placement:</span>
                                <span class="value">${item.jobPlacement}%</span>
                            </div>
                        </div>
                        <div class="form-actions">
                            <button type="submit" class="btn btn-primary">
                                <i class="fas fa-rocket"></i> Start Learning Path
                            </button>
                            <button type="button" class="btn btn-outline" onclick="closeModal('enrollment-modal')">
                                <i class="fas fa-times"></i> Cancel
                            </button>
                        </div>
                    </form>
                </div>
            `;
        }
        
        modalBody.innerHTML = content;
        modal.style.display = 'block';
    }

    showDetailsModal(type, item) {
        const modal = document.getElementById('enrollment-modal');
        const modalBody = document.getElementById('enrollment-modal-body');
        
        let content = '';
        
        if (type === 'certification') {
            content = `
                <div class="details-content">
                    <h3>${item.name}</h3>
                    <div class="details-grid">
                        <div class="detail-section">
                            <h4>Program Details</h4>
                            <div class="detail-item">
                                <span class="label">Certification Code:</span>
                                <span class="value">${item.code}</span>
                            </div>
                            <div class="detail-item">
                                <span class="label">Level:</span>
                                <span class="value level ${item.level}">${item.level.charAt(0).toUpperCase() + item.level.slice(1)}</span>
                            </div>
                            <div class="detail-item">
                                <span class="label">Duration:</span>
                                <span class="value">${item.duration}</span>
                            </div>
                            <div class="detail-item">
                                <span class="label">Format:</span>
                                <span class="value">${item.format}</span>
                            </div>
                            <div class="detail-item">
                                <span class="label">Price:</span>
                                <span class="value">$${item.price.toLocaleString()}</span>
                            </div>
                        </div>
                        <div class="detail-section">
                            <h4>What You'll Learn</h4>
                            <p>${item.description}</p>
                            <div class="features-list">
                                ${item.features.map(feature => `<div class="feature"><i class="fas fa-check"></i> ${feature}</div>`).join('')}
                            </div>
                        </div>
                    </div>
                    <div class="details-actions">
                        <button class="btn btn-primary" onclick="enrollCertification('${item.id}')">
                            <i class="fas fa-shopping-cart"></i> Enroll Now
                        </button>
                        <button class="btn btn-outline" onclick="closeModal('enrollment-modal')">
                            <i class="fas fa-times"></i> Close
                        </button>
                    </div>
                </div>
            `;
        } else if (type === 'course') {
            content = `
                <div class="details-content">
                    <h3>${item.name}</h3>
                    <div class="course-preview">
                        <img src="${item.image}" alt="${item.name}" loading="lazy">
                        <div class="course-info">
                            <div class="rating">
                                <i class="fas fa-star"></i>
                                <span>${item.rating}</span>
                            </div>
                            <div class="students">
                                <i class="fas fa-users"></i>
                                <span>${item.students.toLocaleString()} Students</span>
                            </div>
                            <div class="instructor">
                                <i class="fas fa-chalkboard-teacher"></i>
                                <span>${item.instructor}</span>
                            </div>
                        </div>
                    </div>
                    <div class="details-grid">
                        <div class="detail-section">
                            <h4>Course Description</h4>
                            <p>${item.description}</p>
                        </div>
                        <div class="detail-section">
                            <h4>Topics Covered</h4>
                            <div class="topics-list">
                                ${item.topics.map(topic => `<div class="topic"><i class="fas fa-chevron-right"></i> ${topic}</div>`).join('')}
                            </div>
                        </div>
                        <div class="detail-section">
                            <h4>Prerequisites</h4>
                            <ul>
                                ${item.prerequisites.map(prereq => `<li>${prereq}</li>`).join('')}
                            </ul>
                        </div>
                        <div class="detail-section">
                            <h4>Course Details</h4>
                            <div class="detail-item">
                                <span class="label">Duration:</span>
                                <span class="value">${item.duration}</span>
                            </div>
                            <div class="detail-item">
                                <span class="label">Price:</span>
                                <span class="value">$${item.price.toLocaleString()}</span>
                            </div>
                            <div class="detail-item">
                                <span class="label">Level:</span>
                                <span class="value level ${item.level}">${item.level.charAt(0).toUpperCase() + item.level.slice(1)}</span>
                            </div>
                        </div>
                    </div>
                    <div class="details-actions">
                        <button class="btn btn-primary" onclick="enrollCourse('${item.id}')">
                            <i class="fas fa-shopping-cart"></i> Enroll Now
                        </button>
                        <button class="btn btn-outline" onclick="closeModal('enrollment-modal')">
                            <i class="fas fa-times"></i> Close
                        </button>
                    </div>
                </div>
            `;
        } else if (type === 'path') {
            content = `
                <div class="details-content">
                    <h3>${item.name}</h3>
                    <div class="path-details">
                        <div class="detail-section">
                            <h4>Learning Path Overview</h4>
                            <p>${item.description}</p>
                        </div>
                        <div class="detail-section">
                            <h4>Courses Included</h4>
                            <ul>
                                ${item.courses.map(course => `<li><i class="fas fa-check-circle"></i> ${course}</li>`).join('')}
                            </ul>
                        </div>
                        <div class="detail-section">
                            <h4>Career Outcome</h4>
                            <p>${item.outcome}</p>
                            <div class="path-stats">
                                <div class="stat">
                                    <span class="stat-number">${item.jobPlacement}%</span>
                                    <span class="stat-label">Job Placement</span>
                                </div>
                                <div class="stat">
                                    <span class="stat-number">$${item.avgSalary.toLocaleString()}</span>
                                    <span class="stat-label">Avg Salary</span>
                                </div>
                            </div>
                        </div>
                        <div class="detail-section">
                            <h4>Timeline</h4>
                            <div class="detail-item">
                                <span class="label">Duration:</span>
                                <span class="value">${item.duration}</span>
                            </div>
                        </div>
                    </div>
                    <div class="details-actions">
                        <button class="btn btn-primary" onclick="enrollPath('${item.id}')">
                            <i class="fas fa-rocket"></i> Start Path
                        </button>
                        <button class="btn btn-outline" onclick="closeModal('enrollment-modal')">
                            <i class="fas fa-times"></i> Close
                        </button>
                    </div>
                </div>
            `;
        }
        
        modalBody.innerHTML = content;
        modal.style.display = 'block';
    }

    initializeEmailJS() {
        try {
            const emailjsConfig = {
                serviceID: 'service_barakadevx',
                templateID: 'template_certifications',
                userID: 'user_barakadevx',
                dashboardUrl: 'https://dashboard.emailjs.com/admin'
            };
            
            emailjs.init(emailjsConfig.userID);
            window.emailjsConfig = emailjsConfig;
            
            console.log('EmailJS initialized for certifications:', emailjsConfig);
        } catch (error) {
            console.error('EmailJS initialization failed:', error);
        }
    }

    // Utility Functions
    closeModal(modalId) {
        document.getElementById(modalId).style.display = 'none';
    }

    showToast(message, type = 'info') {
        const toast = document.createElement('div');
        toast.className = `toast ${type}`;
        toast.innerHTML = `
            <i class="fas fa-${type === 'success' ? 'check-circle' : type === 'error' ? 'exclamation-circle' : 'info-circle'}"></i>
            <span>${message}</span>
        `;
        
        document.body.appendChild(toast);
        
        setTimeout(() => {
            toast.style.opacity = '0';
            setTimeout(() => toast.remove(), 300);
        }, 3000);
    }
}

// Global Functions
function handleEnrollmentSubmit(event, type, itemId) {
    event.preventDefault();
    
    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData);
    
    // Add item information to data
    data.itemType = type;
    data.itemId = itemId;
    data.enrollmentDate = new Date().toISOString();
    
    // Show loading state
    const submitBtn = event.target.querySelector('button[type="submit"]');
    const originalText = submitBtn.innerHTML;
    submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Processing...';
    submitBtn.disabled = true;
    
    // Send enrollment data using EmailJS
    if (window.emailjsConfig) {
        emailjs.send(
            window.emailjsConfig.serviceID,
            window.emailjsConfig.templateID,
            data,
            window.emailjsConfig.userID
        ).then((response) => {
            console.log('Enrollment sent successfully:', response);
            app.showToast('Enrollment submitted successfully! We\'ll contact you soon.', 'success');
            event.target.reset();
            closeModal('enrollment-modal');
        }).catch((error) => {
            console.error('Enrollment failed:', error);
            app.showToast('Failed to submit enrollment. Please try again.', 'error');
        }).finally(() => {
            submitBtn.innerHTML = originalText;
            submitBtn.disabled = false;
        });
    } else {
        // Fallback for when EmailJS is not available
        setTimeout(() => {
            app.showToast('Enrollment submitted successfully! We\'ll contact you soon.', 'success');
            event.target.reset();
            closeModal('enrollment-modal');
            submitBtn.innerHTML = originalText;
            submitBtn.disabled = false;
        }, 2000);
    }
}

function showEnrollmentForm() {
    scrollToSection('certifications');
    setTimeout(() => {
        app.showEnrollmentModal('general', {
            name: 'Cybersecurity Training',
            description: 'Get started with our comprehensive cybersecurity programs'
        });
    }, 500);
}

function scheduleConsultation() {
    app.showEnrollmentModal('consultation', {
        name: 'Career Consultation',
        description: 'Schedule a free consultation with our career advisors'
    });
}

// Initialize the platform
const app = new CertificationsPlatform();
