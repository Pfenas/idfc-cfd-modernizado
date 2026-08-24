// Script de Interatividade

document.addEventListener('DOMContentLoaded', function() {
    // Menu Mobile
    setupMobileMenu();
    
    // Smooth Scroll
    setupSmoothScroll();
    
    // Form Validation
    setupFormValidation();
    
    // Animações ao scroll
    setupScrollAnimations();
});

// Menu Mobile
function setupMobileMenu() {
    const menuToggle = document.querySelector('.menu-toggle');
    const navMenu = document.querySelector('.navbar');
    
    if (menuToggle) {
        menuToggle.addEventListener('click', function() {
            navMenu.classList.toggle('active');
        });
    }
}

// Smooth Scroll para âncoras
function setupSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
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

// Validação de Formulário
function setupFormValidation() {
    const contactForm = document.querySelector('.contact-form');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Validação básica
            const name = this.querySelector('input[placeholder="Seu Nome"]').value;
            const email = this.querySelector('input[placeholder="Seu Email"]').value;
            const message = this.querySelector('textarea').value;
            
            if (!name || !email || !message) {
                alert('Por favor, preencha todos os campos.');
                return;
            }
            
            if (!isValidEmail(email)) {
                alert('Por favor, insira um email válido.');
                return;
            }
            
            // Aqui você pode enviar o formulário
            console.log('Formulário válido:', { name, email, message });
            alert('Obrigado! Sua mensagem foi enviada com sucesso.');
            this.reset();
        });
    }
}

// Validar Email
function isValidEmail(email) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
}

// Animações ao Scroll
function setupScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animated');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);
    
    // Animar cards de cursos
    document.querySelectorAll('.course-card').forEach((card, index) => {
        card.style.opacity = '0';
        card.style.animation = `fadeInUp 0.6s ease ${index * 0.1}s forwards`;
        observer.observe(card);
    });
    
    // Animar feature cards
    document.querySelectorAll('.feature').forEach((feature, index) => {
        feature.style.opacity = '0';
        feature.style.animation = `fadeInUp 0.6s ease ${index * 0.1}s forwards`;
        observer.observe(feature);
    });
}

// Adicionar animação CSS dinamicamente
const style = document.createElement('style');
style.textContent = `
    @keyframes fadeInUp {
        from {
            opacity: 0;
            transform: translateY(30px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }
    
    .course-card {
        animation: fadeInUp 0.6s ease forwards;
    }
`;
document.head.appendChild(style);

// Função para detectar mudanças na página
function onPageChange(callback) {
    const observer = new MutationObserver(callback);
    observer.observe(document.body, {
        childList: true,
        subtree: true
    });
}

// Logging para debugging
console.log('IDFC - Centro de Formação a Distância');
console.log('Página modernizada carregada com sucesso!');