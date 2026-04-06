// Baraka DevX - Advanced Military Cybersecurity Platform with FCE Authentication
class MilitaryCyberFCE {
    constructor() {
        this.isScanning = false;
        this.faceModel = null;
        this.videoStream = null;
        this.scanInterval = null;
        this.confidenceThreshold = 0.85;
        this.maxRetries = 3;
        this.currentRetry = 0;
        this.militaryMode = true;
        this.init();
    }

    async init() {
        await this.loadFaceModel();
        this.setupEventListeners();
        this.initializeBackground();
        this.startSecurityMonitoring();
        console.log('Military CyberFCE: Advanced military cybersecurity platform initialized');
    }

    async loadFaceModel() {
        try {
            // Load face detection model
            this.faceModel = await blazeface.load();
            console.log('FCE: Face recognition model loaded successfully');
        } catch (error) {
            console.error('FCE: Failed to load face model:', error);
            this.showNotification('Face recognition model loading failed', 'error');
        }
    }

    setupEventListeners() {
        // Global functions
        window.startFaceScan = () => this.startFaceScan();
        window.stopFaceScan = () => this.stopFaceScan();
        window.openFCEAuth = () => this.openFCEAuth();
        window.handleAlternativeAuth = (event) => this.handleAlternativeAuth(event);
        window.openProjectDetails = (projectId) => this.openProjectDetails(projectId);
        window.scrollToSection = (sectionId) => this.scrollToSection(sectionId);
        window.closeModal = (modalId) => this.closeModal(modalId);
        
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

    closeModal(modalId) {
        const modal = document.getElementById(modalId);
        if (modal) {
            modal.style.display = 'none';
        }
    }

    scrollToSection(sectionId) {
        const element = document.getElementById(sectionId);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    }

    openFCEAuth() {
        console.log('FCE: openFCEAuth called');
        const modal = document.getElementById('fce-auth-modal');
        if (modal) {
            console.log('FCE: Modal found, displaying');
            modal.style.display = 'flex';
            this.startFaceScan();
        } else {
            console.error('FCE: Modal not found');
        }
    }

    async startFaceScan() {
        if (this.isScanning) return;
        
        try {
            this.isScanning = true;
            this.currentRetry = 0;
            
            // Update UI
            this.updateScanStatus('Initializing camera...', 'scanning');
            document.getElementById('start-scan-btn').style.display = 'none';
            document.getElementById('stop-scan-btn').style.display = 'block';
            document.getElementById('auth-progress').style.display = 'block';
            
            // Get camera access
            const video = document.getElementById('face-video');
            const canvas = document.getElementById('face-canvas');
            
            const stream = await navigator.mediaDevices.getUserMedia({
                video: { 
                    width: 640, 
                    height: 480,
                    facing: 'user'
                },
                audio: false
            });
            
            this.videoStream = stream;
            video.srcObject = stream;
            
            // Start face detection
            await video.play();
            this.startFaceDetection(video, canvas);
            
        } catch (error) {
            console.error('FCE: Camera access failed:', error);
            this.updateScanStatus('Camera access denied', 'error');
            this.showNotification('Please allow camera access for face recognition', 'error');
        }
    }

    stopFaceScan() {
        this.isScanning = false;
        
        // Stop camera
        if (this.videoStream) {
            this.videoStream.getTracks().forEach(track => track.stop());
        }
        
        // Clear detection
        if (this.scanInterval) {
            clearInterval(this.scanInterval);
        }
        
        // Update UI
        this.updateScanStatus('Scan stopped', 'idle');
        document.getElementById('start-scan-btn').style.display = 'block';
        document.getElementById('stop-scan-btn').style.display = 'none';
        document.getElementById('auth-progress').style.display = 'none';
    }

    async startFaceDetection(video, canvas) {
        const context = canvas.getContext('2d');
        
        this.scanInterval = setInterval(async () => {
            if (!this.isScanning) return;
            
            // Draw video frame to canvas
            context.drawImage(video, 0, 0, canvas.width, canvas.height);
            
            try {
                // Detect faces
                const predictions = await this.faceModel.estimateFaces({
                    input: canvas,
                    returnTensors: false
                });
                
                if (predictions.length > 0) {
                    this.processFaceDetection(predictions[0]);
                } else {
                    this.updateScanStatus('No face detected', 'scanning');
                    this.updateProgress(0);
                }
            } catch (error) {
                console.error('FCE: Face detection error:', error);
            }
        }, 100); // Scan every 100ms
    }

    processFaceDetection(face) {
        const confidence = face.probability?.[0] || 0;
        const landmarks = face.landmarks;
        const box = face.box;
        
        // Update biometric data
        this.updateBiometricData(confidence, landmarks, box);
        
        // Check if confidence meets threshold
        if (confidence >= this.confidenceThreshold) {
            this.updateScanStatus('Face authenticated!', 'success');
            this.updateProgress(100);
            this.authenticateUser();
        } else {
            this.updateScanStatus(`Low confidence: ${(confidence * 100).toFixed(1)}%`, 'scanning');
            this.updateProgress(confidence * 100);
        }
        
        // Draw face overlay
        this.drawFaceOverlay(box, landmarks);
    }

    updateBiometricData(confidence, landmarks, box) {
        // Update facial points count
        const pointCount = landmarks ? Object.keys(landmarks).length : 0;
        document.getElementById('point-count').textContent = pointCount;
        
        // Update confidence level
        document.getElementById('confidence-level').textContent = (confidence * 100).toFixed(1);
        
        // Update status
        const statusElement = document.getElementById('auth-status');
        if (confidence >= this.confidenceThreshold) {
            statusElement.textContent = 'Authenticated';
            statusElement.className = 'status-text success';
        } else {
            statusElement.textContent = 'Scanning...';
            statusElement.className = 'status-text scanning';
        }
        
        // Update progress
        this.updateProgress(confidence * 100);
    }

    updateScanStatus(message, status) {
        const statusElement = document.getElementById('auth-status');
        if (statusElement) {
            statusElement.textContent = message;
            statusElement.className = `status-text ${status}`;
        }
        
        const progressText = document.getElementById('progress-text');
        if (progressText) {
            progressText.textContent = message;
        }
    }

    updateProgress(percentage) {
        const progressFill = document.getElementById('progress-fill');
        if (progressFill) {
            progressFill.style.width = `${percentage}%`;
        }
    }

    drawFaceOverlay(box, landmarks) {
        const canvas = document.getElementById('face-canvas');
        const ctx = canvas.getContext('2d');
        
        // Clear previous drawings
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        
        if (box) {
            // Draw bounding box
            ctx.strokeStyle = '#00ff88';
            ctx.lineWidth = 2;
            ctx.strokeRect(
                box.startPoint[0] * canvas.width,
                box.startPoint[1] * canvas.height,
                (box.endPoint[0] - box.startPoint[0]) * canvas.width,
                (box.endPoint[1] - box.startPoint[1]) * canvas.height
            );
            
            // Draw facial points
            if (landmarks) {
                ctx.fillStyle = '#00ff88';
                Object.values(landmarks).forEach(point => {
                    ctx.beginPath();
                    ctx.arc(
                        point[0] * canvas.width,
                        point[1] * canvas.height,
                        3,
                        0,
                        2 * Math.PI
                    );
                    ctx.fill();
                });
            }
        }
    }

    authenticateUser() {
        // Simulate successful authentication
        setTimeout(() => {
            this.stopFaceScan();
            this.showNotification('Face authentication successful! Welcome to Baraka DevX.', 'success');
            this.updateDashboard(true);
            
            // Close modal after success
            const modal = document.getElementById('fce-auth-modal');
            if (modal) {
                setTimeout(() => {
                    modal.style.display = 'none';
                }, 2000);
            }
        }, 1000);
    }

    handleAlternativeAuth(event) {
        event.preventDefault();
        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;
        
        if (username && password) {
            this.showNotification('Alternative authentication successful!', 'success');
            this.updateDashboard(true);
            
            // Close modal
            const modal = document.getElementById('fce-auth-modal');
            if (modal) {
                modal.style.display = 'none';
            }
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
            bioStatus.nextElementSibling.textContent = isAuthenticated ? 'FCE Engine Active' : 'FCE Engine Inactive';
        }
    }

    showNotification(message, type = 'info') {
        // Create notification element
        const notification = document.createElement('div');
        notification.className = `fce-notification ${type}`;
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
        
        const matrix = "ABCDEFGHIJKLMNOPQRSTUVWXYZ123456789@#$%^&*()_+-=[]{}|;:<>?/";
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
            'Monitoring biometric access...'
        ];
        
        const randomMetric = metrics[Math.floor(Math.random() * metrics.length)];
        console.log('FCE Security Monitor:', randomMetric);
    }

    openProjectDetails(projectId) {
        this.showNotification(`Opening project details for ${projectId}`, 'info');
    }
}

// Initialize Military FCE platform
const militaryCyberFCE = new MilitaryCyberFCE();
