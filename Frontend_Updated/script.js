// Main JavaScript for Kashi With Pravah

// ===========================
// DOM Content Loaded
// ===========================
document.addEventListener('DOMContentLoaded', function() {
    console.log('Kashi With Pravah - Frontend JS Loaded');
    
    // Initialize all functions
    initSearchForms();
    initFormButtons();
    initCopyCode();
    initCopyPost();
    initShareButtons();
    initMobileMenu();
    initSmoothScroll();
    initActiveNavigation();
    initFormValidation();
    initDashboardInteractions();
    initReferralStats();
    initNotifications();
    initDateInputs();
    initPasswordToggles();
});

// ===========================
// Search Forms Handler
// ===========================
function initSearchForms() {
    // Main search bar buttons
    const searchBtn = document.querySelector('.search-btn');
    if (searchBtn) {
        searchBtn.addEventListener('click', function(e) {
            e.preventDefault();
            console.log('Spiritual search clicked');
            // Add your search logic here
            alert('Sacred path search functionality will guide you to the divine sites of Kashi');
        });
    }

    // Journey form submission
    const journeyForm = document.querySelector('.journey-form');
    if (journeyForm) {
        journeyForm.addEventListener('submit', function(e) {
            e.preventDefault();
            console.log('Sacred journey form submitted');
            
            // Collect form data
            const formData = new FormData(journeyForm);
            const data = Object.fromEntries(formData);
            console.log('Pilgrim form data:', data);
            
            // Show loading state
            const submitBtn = journeyForm.querySelector('.search-submit-btn');
            if (submitBtn) {
                const originalText = submitBtn.textContent;
                submitBtn.textContent = 'Finding spiritual path...';
                submitBtn.disabled = true;
                
                // Simulate API call
                setTimeout(() => {
                    submitBtn.textContent = originalText;
                    submitBtn.disabled = false;
                    alert('Sacred path found! Check console for your Kashi Yatra details.');
                }, 1500);
            }
        });
    }
}

// ===========================
// Form Buttons Handler
// ===========================
function initFormButtons() {
    // Generic form button handler
    const formBtn = document.querySelector('.form-btn');
    if (formBtn) {
        formBtn.addEventListener('click', function(e) {
            e.preventDefault();
            console.log('Spiritual form clicked');
            
            // Check if it's in a form
            const parentForm = formBtn.closest('form');
            if (parentForm) {
                const formData = new FormData(parentForm);
                const data = Object.fromEntries(formData);
                console.log('Spiritual form data:', data);
                alert('Your sacred journey details submitted! Har Har Mahadev!');
            }
        });
    }

    // Planner form
    const plannerForm = document.querySelector('.planner-form');
    if (plannerForm) {
        const planBtn = plannerForm.querySelector('.form-btn');
        if (planBtn) {
            planBtn.addEventListener('click', function(e) {
                e.preventDefault();
                console.log('Kashi Yatra plan clicked');
                
                const fromInput = plannerForm.querySelector('input[placeholder*="starting"]');
                const toInput = plannerForm.querySelector('input[placeholder*="temple"]');
                const dateInput = plannerForm.querySelector('input[type="date"]');
                
                if (fromInput && toInput && dateInput) {
                    console.log('Spiritual planning:', {
                        from: fromInput.value,
                        to: toInput.value,
                        date: dateInput.value
                    });
                    
                    if (fromInput.value && toInput.value && dateInput.value) {
                        alert(`Planning your Kashi Yatra from ${fromInput.value} to ${toInput.value} on ${dateInput.value}`);
                    } else {
                        alert('Please fill in all fields for your spiritual journey');
                    }
                }
            });
        }
    }

    // Signup form
    const signupForm = document.querySelector('.signup-form');
    if (signupForm) {
        signupForm.addEventListener('submit', function(e) {
            e.preventDefault();
            console.log('Pilgrim signup form submitted');
            
            const password = signupForm.querySelector('input[type="password"]');
            const confirmPassword = signupForm.querySelectorAll('input[type="password"]')[1];
            
            if (password && confirmPassword && password.value !== confirmPassword.value) {
                alert('Passwords do not match!');
                return;
            }
            
            // Collect form data
            const formData = new FormData(signupForm);
            const data = Object.fromEntries(formData);
            console.log('Pilgrim signup data:', data);
            
            // Show success message
            alert('Pilgrim account created successfully! Welcome to the Kashi spiritual community!');
        });
    }

    // Contribution forms
    const contributionForms = document.querySelectorAll('.contribution-form');
    contributionForms.forEach(form => {
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            console.log('Spiritual contribution form submitted');
            
            const formData = new FormData(form);
            const data = Object.fromEntries(formData);
            console.log('Kashi wisdom contribution data:', data);
            
            alert('Thank you for sharing your spiritual knowledge! Har Har Mahadev!');
        });
    });

    // Booking form
    const travelForm = document.querySelector('.travel-form');
    if (travelForm) {
        travelForm.addEventListener('submit', function(e) {
            e.preventDefault();
            console.log('Aarti booking form submitted');
            
            const formData = new FormData(travelForm);
            const data = Object.fromEntries(formData);
            console.log('Aarti booking data:', data);
            
            alert('Your Ganga Aarti has been booked! Check console for details. Har Har Mahadev!');
        });
    }
}

// ===========================
// Copy Code Functionality
// ===========================
function initCopyCode() {
    const copyCodeBtn = document.querySelector('.copy-code-btn');
    if (copyCodeBtn) {
        copyCodeBtn.addEventListener('click', function() {
            const codeElement = document.querySelector('.code-text');
            if (codeElement) {
                const code = codeElement.textContent;
                
                // Use Clipboard API
                navigator.clipboard.writeText(code).then(() => {
                    console.log('Pilgrim code copied:', code);
                    
                    // Visual feedback
                    const originalText = copyCodeBtn.innerHTML;
                    copyCodeBtn.innerHTML = '<span class="copy-icon">✓</span> Copied!';
                    
                    setTimeout(() => {
                        copyCodeBtn.innerHTML = originalText;
                    }, 2000);
                }).catch(err => {
                    console.error('Copy failed:', err);
                    alert('Failed to copy code. Please try again.');
                });
            }
        });
    }
}

// ===========================
// Copy Post Functionality
// ===========================
function initCopyPost() {
    const copyPostBtn = document.querySelector('.copy-post-btn');
    if (copyPostBtn) {
        copyPostBtn.addEventListener('click', function() {
            const postContent = document.querySelector('.post-content p');
            if (postContent) {
                const postText = postContent.textContent;
                
                navigator.clipboard.writeText(postText).then(() => {
                    console.log('Spiritual post copied');
                    
                    const originalText = copyPostBtn.textContent;
                    copyPostBtn.textContent = 'Copied!';
                    
                    setTimeout(() => {
                        copyPostBtn.textContent = originalText;
                    }, 2000);
                }).catch(err => {
                    console.error('Copy failed:', err);
                });
            }
        });
    }
}

// ===========================
// Share Buttons Handler
// ===========================
function initShareButtons() {
    const shareBtns = document.querySelectorAll('.share-btn, .social-btn');
    
    shareBtns.forEach(btn => {
        btn.addEventListener('click', function(e) {
            e.preventDefault();
            
            const btnText = btn.textContent.trim();
            console.log('Share button clicked:', btnText);
            
            // Get referral code if exists
            const codeElement = document.querySelector('.code-text');
            const referralCode = codeElement ? codeElement.textContent : 'KASHI-PILGRIM-2026';
            
            // Determine share type
            if (btn.classList.contains('whatsapp-btn') || btnText.includes('WhatsApp')) {
                const message = `Experience the divine Kashi with Kashi With Pravah! Use my pilgrim referral code: ${referralCode} to get ₹500 prasad credits on your first sacred journey! Har Har Mahadev! 🕉️`;
                const url = `https://wa.me/?text=${encodeURIComponent(message)}`;
                window.open(url, '_blank');
            }
            else if (btn.classList.contains('email-btn') || btnText.includes('Email')) {
                const subject = 'Join me on a sacred Kashi Yatra';
                const body = `I've been using Kashi With Pravah for spiritual travel planning. Use my pilgrim referral code ${referralCode} to get ₹500 prasad credits on your first journey to Varanasi! Har Har Mahadev!`;
                window.location.href = `mailto:?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
            }
            else if (btn.classList.contains('link-btn') || btnText.includes('Copy Referral Link')) {
                const dummyLink = `https://kashiwithpravah.com/ref/${referralCode}`;
                navigator.clipboard.writeText(dummyLink).then(() => {
                    alert('Pilgrim referral link copied to clipboard!');
                });
            }
            else if (btn.classList.contains('facebook-btn')) {
                const url = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent('https://kashiwithpravah.com')}`;
                window.open(url, '_blank', 'width=600,height=400');
            }
            else if (btn.classList.contains('twitter-btn')) {
                const text = `Just experienced divine Ganga Aarti using @KashiWithPravah! Sacred travel is the future! 🕉️ #Kashi #Varanasi #SpiritualTravel`;
                const url = `https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}`;
                window.open(url, '_blank', 'width=600,height=400');
            }
            else if (btn.classList.contains('linkedin-btn')) {
                const url = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent('https://kashiwithpravah.com')}`;
                window.open(url, '_blank', 'width=600,height=400');
            }
            else if (btn.classList.contains('instagram-btn')) {
                alert('Follow us on Instagram @kashiwithpravah for spiritual inspiration!');
            }
        });
    });
}

// ===========================
// Mobile Menu Handler
// ===========================
function initMobileMenu() {
    // Create mobile menu toggle if needed
    const header = document.querySelector('header');
    const nav = document.querySelector('nav');
    
    if (header && nav && window.innerWidth <= 768) {
        // Check if mobile menu button doesn't exist
        if (!document.querySelector('.mobile-menu-toggle')) {
            const toggle = document.createElement('button');
            toggle.className = 'mobile-menu-toggle';
            toggle.innerHTML = '☰';
            toggle.style.cssText = `
                background: var(--antique-bronze);
                color: white;
                border: none;
                font-size: 1.5rem;
                padding: 10px 20px;
                border-radius: 5px;
                cursor: pointer;
                margin-left: auto;
            `;
            
            header.querySelector('.header-container').appendChild(toggle);
            
            toggle.addEventListener('click', function() {
                if (nav.style.display === 'none' || nav.style.display === '') {
                    nav.style.display = 'flex';
                    nav.style.flexDirection = 'column';
                    nav.style.width = '100%';
                    nav.style.marginTop = '20px';
                    toggle.innerHTML = '✕';
                } else {
                    nav.style.display = 'none';
                    toggle.innerHTML = '☰';
                }
            });
            
            // Reset on window resize
            window.addEventListener('resize', function() {
                if (window.innerWidth > 768) {
                    nav.style.display = 'flex';
                    nav.style.flexDirection = 'row';
                    nav.style.marginTop = '0';
                    if (toggle) toggle.style.display = 'none';
                } else {
                    nav.style.display = 'none';
                    if (toggle) toggle.style.display = 'block';
                }
            });
            
            // Initial state
            nav.style.display = 'none';
        }
    }
}

// ===========================
// Smooth Scroll Handler
// ===========================
function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            
            if (href !== '#') {
                e.preventDefault();
                
                const target = document.querySelector(href);
                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            }
        });
    });
}

// ===========================
// Active Navigation Handler
// ===========================
function initActiveNavigation() {
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    
    document.querySelectorAll('nav a').forEach(link => {
        const linkHref = link.getAttribute('href');
        
        if (linkHref === currentPage || 
            (currentPage === 'index.html' && linkHref === 'index.html') ||
            (currentPage === '' && linkHref === 'index.html')) {
            link.classList.add('active');
        }
    });
}

// ===========================
// Form Validation
// ===========================
function initFormValidation() {
    // Email validation
    document.querySelectorAll('input[type="email"]').forEach(input => {
        input.addEventListener('blur', function() {
            const email = this.value;
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            
            if (email && !emailRegex.test(email)) {
                this.setCustomValidity('Please enter a valid email address');
                this.reportValidity();
            } else {
                this.setCustomValidity('');
            }
        });
    });
    
    // Phone validation
    document.querySelectorAll('input[type="tel"]').forEach(input => {
        input.addEventListener('blur', function() {
            const phone = this.value.replace(/\D/g, '');
            
            if (phone && phone.length < 10) {
                this.setCustomValidity('Please enter a valid 10-digit phone number');
                this.reportValidity();
            } else {
                this.setCustomValidity('');
            }
        });
    });
    
    // Password match validation
    const passwordGroups = document.querySelectorAll('input[type="password"]');
    if (passwordGroups.length >= 2) {
        const password = passwordGroups[0];
        const confirmPassword = passwordGroups[1];
        
        [password, confirmPassword].forEach(input => {
            input.addEventListener('input', function() {
                if (password.value !== confirmPassword.value) {
                    confirmPassword.setCustomValidity('Passwords do not match');
                } else {
                    confirmPassword.setCustomValidity('');
                }
            });
        });
    }
}

// ===========================
// Dashboard Interactions
// ===========================
function initDashboardInteractions() {
    // Journey buttons
    document.querySelectorAll('.journey-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            const journeyItem = this.closest('.journey-item');
            if (journeyItem) {
                const route = journeyItem.querySelector('.journey-route').textContent.replace(/\s+/g, ' ').trim();
                const date = journeyItem.querySelector('.journey-date')?.textContent || 'selected date';
                console.log('Booking spiritual journey:', route, date);
                alert(`Booking your darshan for ${route} on ${date}. Har Har Mahadev!`);
            }
        });
    });
    
    // Suggestion links
    document.querySelectorAll('.suggestion-link').forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const card = this.closest('.suggestion-card');
            if (card) {
                const title = card.querySelector('h3').textContent;
                console.log('Viewing spiritual suggestion:', title);
                alert(`Viewing sacred details for: ${title}`);
            }
        });
    });
    
    // Alert actions
    document.querySelectorAll('.alert-action').forEach(action => {
        action.addEventListener('click', function(e) {
            e.preventDefault();
            const alertCard = this.closest('.alert-card');
            if (alertCard) {
                const alertTitle = alertCard.querySelector('h4').textContent;
                console.log('Spiritual alert action:', alertTitle);
                alert(`Processing: ${alertTitle}`);
            }
        });
    });
    
    // Sidebar buttons
    document.querySelectorAll('.sidebar-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            console.log('Sidebar button clicked:', this.textContent);
            alert(`${this.textContent} feature coming soon! May the blessings of Kashi be with you.`);
        });
    });
    
    // Manage settings link
    document.querySelectorAll('.manage-link').forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            console.log('Manage settings');
            alert('Spiritual settings management page coming soon!');
        });
    });
}

// ===========================
// Referral Stats Animation
// ===========================
function initReferralStats() {
    const statNumbers = document.querySelectorAll('.stat-number, .community-number');
    
    statNumbers.forEach(stat => {
        const targetValue = stat.textContent;
        
        // Only animate numeric values
        if (targetValue.match(/^[0-9,₹Lakh+]+$/)) {
            stat.setAttribute('data-target', targetValue);
            
            // Simple fade-in effect
            stat.style.opacity = '0';
            stat.style.transform = 'translateY(20px)';
            stat.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
            
            // Trigger animation after a small delay
            setTimeout(() => {
                stat.style.opacity = '1';
                stat.style.transform = 'translateY(0)';
            }, 200);
        }
    });
}

// ===========================
// Notifications Handler
// ===========================
function initNotifications() {
    const notificationItems = document.querySelectorAll('.notification-item');
    
    notificationItems.forEach(item => {
        if (item.classList.contains('active')) {
            item.addEventListener('click', function() {
                console.log('Notification toggled:', this.textContent.trim());
                // Toggle functionality could be added here
            });
        }
    });
}

// ===========================
// Date Inputs Handler
// ===========================
function initDateInputs() {
    document.querySelectorAll('input[type="date"]').forEach(dateInput => {
        // Set min date to today
        const today = new Date().toISOString().split('T')[0];
        dateInput.setAttribute('min', today);
        
        dateInput.addEventListener('change', function() {
            console.log('Sacred date selected:', this.value);
        });
    });
}

// ===========================
// Password Toggle Visibility
// ===========================
function initPasswordToggles() {
    document.querySelectorAll('input[type="password"]').forEach(passwordInput => {
        const wrapper = passwordInput.parentElement;
        
        // Create toggle button if it doesn't exist
        if (!wrapper.querySelector('.password-toggle')) {
            const toggle = document.createElement('button');
            toggle.type = 'button';
            toggle.className = 'password-toggle';
            toggle.innerHTML = '👁️';
            toggle.style.cssText = `
                position: absolute;
                right: 10px;
                top: 50%;
                transform: translateY(-50%);
                background: none;
                border: none;
                cursor: pointer;
                font-size: 1.2rem;
                padding: 5px;
            `;
            
            wrapper.style.position = 'relative';
            wrapper.appendChild(toggle);
            
            toggle.addEventListener('click', function() {
                const type = passwordInput.type === 'password' ? 'text' : 'password';
                passwordInput.type = type;
                toggle.innerHTML = type === 'password' ? '👁️' : '🔒';
            });
        }
    });
}

// ===========================
// Utility Functions
// ===========================

// Format currency
function formatCurrency(amount) {
    return new Intl.NumberFormat('en-IN', {
        style: 'currency',
        currency: 'INR',
        minimumFractionDigits: 0,
        maximumFractionDigits: 0
    }).format(amount);
}

// Format date
function formatDate(date) {
    return new Date(date).toLocaleDateString('en-IN', {
        day: 'numeric',
        month: 'short',
        year: 'numeric'
    });
}

// Show loading spinner
function showLoading(element) {
    const originalContent = element.innerHTML;
    element.innerHTML = '<span class="spinner"></span> Loading...';
    element.disabled = true;
    
    return function restore() {
        element.innerHTML = originalContent;
        element.disabled = false;
    };
}

// Debounce function
function debounce(func, wait) {
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

// ===========================
// Export functions if using modules
// ===========================
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        initSearchForms,
        initFormButtons,
        initCopyCode,
        initCopyPost,
        initShareButtons,
        initMobileMenu,
        initSmoothScroll,
        initActiveNavigation,
        initFormValidation,
        initDashboardInteractions,
        initReferralStats,
        initNotifications,
        initDateInputs,
        initPasswordToggles,
        formatCurrency,
        formatDate,
        debounce
    };
}