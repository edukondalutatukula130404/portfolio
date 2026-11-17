// Portfolio Interactive Engine - Matches Exact Video Experience
document.addEventListener('DOMContentLoaded', () => {

  // Project Database - Real-Time Speshway, AI & Vexa Projects
  const projectsData = [
    {
      id: 'chatbot',
      category: 'ai',
      badge: 'AI & NLP',
      tagline: 'AI-Based Chatbot for Educational Systems',
      subtitle: 'Natural Language Processing',
      author: 'Autonomous AI Project',
      liveUrl: 'https://github.com/edukondalutatukula130404/AI-Based-Chatbot-for-Educational-Systems',
      githubUrl: 'https://github.com/edukondalutatukula130404/AI-Based-Chatbot-for-Educational-Systems',
      tech: ['Python', 'Natural Language Processing', 'NLTK', 'Flask REST API', 'JavaScript', 'HTML5/CSS3'],
      image: 'assets/project-chatbot.svg',
      fullTitle: 'AI-Based Chatbot for Educational Systems',
      leadDescription: 'Designed and implemented an AI-powered conversational chatbot engineered with Natural Language Processing (NLP) techniques, custom intent classifiers, and real-time query resolution to provide instantaneous 24/7 academic support for students.',
      quote: '“Designed and implemented an AI-powered chatbot for educational systems to provide real-time academic assistance to students. Used Natural Language Processing (NLP) techniques to analyze user input and generate accurate responses.”',
      problemSolved: 'Students face substantial delays receiving answers to routine curriculum, exam schedule, syllabus, and grading queries outside classroom hours, causing academic friction and placing repetitive administrative burdens on teaching staff.',
      contribution: 'Engineered the NLP preprocessing pipeline (tokenization, lemmatization, stop-word elimination), implemented intent matching algorithms with confidence scoring, built responsive floating chat UI components, and integrated Flask REST endpoints for sub-120ms response generation.',
      features: [
        {
          title: 'Natural Language Processing & Intent Matching',
          desc: 'Tokenizes and evaluates varied student phrasings using customized NLP classification models to yield precise, context-aware answers.'
        },
        {
          title: 'Interactive Web-Based Chat Experience',
          desc: 'Sleek, responsive chat interface featuring typing indicators, prompt suggestion chips, message history, and auto-scroll.'
        },
        {
          title: 'Real-Time Flask API & Knowledge Engine',
          desc: 'Lightweight Python microservice handling academic FAQs, examination schedules, syllabus details, and course reference materials.'
        }
      ],
      metrics: '<120ms Response Time • 92%+ Intent Accuracy • 24/7 Automated Availability'
    },
    {
      id: 'ecom',
      category: 'ecom',
      badge: 'REAL PROJECT',
      tagline: 'Speshway Multi-Vendor E-Commerce Platform',
      subtitle: 'ecom.speshway.site',
      author: 'Speshway Solutions Pvt Ltd',
      liveUrl: 'https://ecom.speshway.site',
      githubUrl: 'https://github.com/edukondalutatukula130404/E_commerce.git',
      tech: ['React', 'Node.js', 'Express', 'MongoDB', 'Redux', 'Razorpay', 'REST APIs', 'Tailwind CSS'],
      image: 'assets/project-ecom.svg',
      fullTitle: 'Speshway Multi-Vendor E-Commerce Platform',
      leadDescription: 'A production-grade, multi-vendor e-commerce web platform engineered with high-speed catalog browsing, real-time cart state synchronization, secure payment gateway integration, and comprehensive customer & order management.',
      quote: '“Architected and deployed ecom.speshway.site, delivering an intuitive shopping experience with dynamic facet search, real-time inventory management, and end-to-end checkout with automated notifications.”',
      problemSolved: 'Independent retailers and vendors lacked a centralized, high-speed digital storefront to manage distributed inventories, process secure multi-vendor payments, and track fulfillment without paying prohibitive SaaS subscription fees.',
      contribution: 'Built product catalog query APIs with dynamic multi-facet filtering, implemented Redux Toolkit persistent shopping cart, integrated Razorpay payment gateway with cryptographic webhook verification, and engineered vendor order management dashboards.',
      features: [
        {
          title: 'Product Catalog & Dynamic Filtering',
          desc: 'Engineered high-speed faceted product search by category, price ranges, brand, and customer ratings with instant client-side state updates.'
        },
        {
          title: 'Cart, Checkout & Payment Gateway',
          desc: 'Integrated Redux persistent cart management, discount coupon validation, and multi-mode payment gateway for seamless, secure transactions.'
        },
        {
          title: 'Vendor Portal & Order Management',
          desc: 'Built administrative dashboards for order status tracking, inventory stock alerts, customer dispute handling, and automated invoice delivery.'
        }
      ],
      metrics: '99.9% Platform Uptime • <180ms Response Latency • Real-Time Inventory Sync'
    },
    {
      id: 'clothing',
      category: 'ecom',
      badge: 'REAL PROJECT',
      tagline: 'Speshway Fashion & Apparel E-Store',
      subtitle: 'clothing.speshway.site',
      author: 'Speshway Solutions Pvt Ltd',
      liveUrl: 'https://clothing.speshway.site',
      githubUrl: 'https://github.com/edukondalutatukula130404/vexa-style-hub.git',
      tech: ['HTML5/CSS3', 'JavaScript', 'Cart Engine', 'Lookbook UI', 'Responsive Design', 'SEO'],
      image: 'assets/project-clothing.svg',
      fullTitle: 'Speshway Clothing & Apparel Storefront',
      leadDescription: 'A high-conversion fashion e-commerce storefront crafted with editorial typography, interactive lookbooks, visual size and color variant selectors, and a fluid slide-over mini-cart drawer.',
      quote: '“Engineered clothing.speshway.site to offer an immersive, visual-first fashion shopping experience with smooth animations, instant size selectors, and zero-friction cart interactions.”',
      problemSolved: 'Apparel buyers on mobile devices regularly abandon sluggish websites with complex checkout flows, slow image carousels, and poorly adapted mobile screen controls.',
      contribution: 'Crafted a visual-first editorial layout with optimized media delivery, built a vanilla JavaScript slide-over cart drawer with persistent local storage, and tuned the critical rendering path for sub-second page loads.',
      features: [
        {
          title: 'Editorial Lookbook & Gallery',
          desc: 'Showcases curated seasonal collections with high-resolution image zoom, interactive lifestyle sliders, and hover-triggered quick previews.'
        },
        {
          title: 'Interactive Slide-Over Mini-Cart',
          desc: 'Slide-out cart drawer enabling frictionless quantity updates, promo code applications, and one-click progression to checkout.'
        },
        {
          title: 'Mobile-First Fluid Responsive Architecture',
          desc: 'Optimized for mobile shoppers with touch gestures, sticky navigation bars, sub-second load times, and structured SEO product schemas.'
        }
      ],
      metrics: '100% Mobile Responsive • Sub-Second Load Time • Optimized Conversion UI'
    },
    {
      id: 'erp',
      category: 'enterprise',
      badge: 'ENTERPRISE',
      tagline: 'Speshway All-in-One Cloud ERP System',
      subtitle: 'erp.speshway.site',
      author: 'Speshway Solutions Pvt Ltd',
      liveUrl: 'https://erp.speshway.site',
      githubUrl: 'https://github.com/naveen3831/Speshway-All-In-One-ERP.git',
      tech: ['PostgreSQL', 'Node.js', 'Python', 'RBAC Security', 'Financial Invoicing', 'Inventory Engine'],
      image: 'assets/project-erp.svg',
      fullTitle: 'Speshway All-in-One Cloud ERP System',
      leadDescription: 'Comprehensive enterprise management platform engineered to automate company-wide workflows: inventory tracking, warehouse logistics, GST-compliant invoicing, HR attendance, and executive financial reporting.',
      quote: '“Designed and engineered erp.speshway.site to centralize business operations, providing multi-tenant security, granular role-based authorization, and real-time ledger accounting.”',
      problemSolved: 'Operational silos, manual Excel entry, and inventory discrepancies between warehouse hubs led to stock-outs, delayed tax filings, and lack of enterprise accountability.',
      contribution: 'Designed normalized 3NF PostgreSQL database schemas, built JWT role-based access control (RBAC) middleware for multi-level staffing, developed automated GST tax computation modules, and created audit-trail ledger logging.',
      features: [
        {
          title: 'Multi-Warehouse Inventory & Supply Chain',
          desc: 'Real-time stock level monitoring across distributed warehouses, automated replenishment alerts, supplier PO tracking, and barcode integration.'
        },
        {
          title: 'GST-Compliant Billing & Invoicing Engine',
          desc: 'Automated invoice generation, tax computation, recurring billing schedules, payment status tracking, and downloadable financial audit reports.'
        },
        {
          title: 'Role-Based Access Control (RBAC) & Audit Log',
          desc: 'Fine-grained permissions for Admins, Managers, and Staff with cryptographically signed activity trails ensuring strict enterprise compliance.'
        }
      ],
      metrics: '10,000+ Operations/Day • 100% Audit Integrity • 99.98% Service Reliability'
    },
    {
      id: 'desktop-app',
      category: 'desktop',
      badge: 'DESKTOP APP',
      tagline: 'InvoicePro Desktop Application Suite',
      subtitle: 'InvoicePro Desktop',
      author: 'Speshway Solutions Pvt Ltd',
      liveUrl: 'https://github.com/edukondalutatukula130404/desktop-application',
      githubUrl: 'https://github.com/edukondalutatukula130404/desktop-application',
      tech: ['Electron', 'React', 'Node.js', 'MongoDB', 'NSIS Installer', 'Offline-First'],
      image: 'assets/project-desktop.svg',
      fullTitle: 'InvoicePro Desktop Application Suite',
      leadDescription: 'A production cross-platform desktop application built with Electron, React, Node.js, and persistent local MongoDB storage for offline-first enterprise invoice generation, client billing, license authentication, and automated financial reporting.',
      quote: '“Engineered the InvoicePro Desktop Application with robust Electron architecture, persistent local MongoDB synchronization, automated NSIS installers, and cryptographic licensing.”',
      problemSolved: 'Retail and wholesale billing points in areas with inconsistent internet connections could not risk billing disruptions or store sensitive financial transaction ledgers on third-party public clouds.',
      contribution: 'Architected Electron IPC bridge between Node backend and React frontend, embedded a local MongoDB instance with automatic data indexing, implemented cryptographic machine-fingerprint licensing, and authored the NSIS Windows installer script.',
      features: [
        {
          title: 'Cross-Platform Electron & React Core',
          desc: 'High-performance desktop user interface built with React components, native OS window controls, and optimized background process management.'
        },
        {
          title: 'Offline-First Persistent Local MongoDB',
          desc: 'Embedded local MongoDB instance ensuring zero-latency data persistence, instant offline access, and automatic background cloud synchronization.'
        },
        {
          title: 'Automated NSIS Windows Installer & Licensing',
          desc: 'Custom build pipeline with electron-builder producing lightweight Windows NSIS installers and cryptographic license key authentication.'
        }
      ],
      metrics: 'Zero-Latency Offline Mode • Windows NSIS Installer • 100% Local Data Privacy'
    },
    {
      id: 'vexa',
      category: 'mobile',
      badge: 'MOBILE APP',
      tagline: 'Vexa Smart Mobile Application',
      subtitle: 'iOS & Android App',
      author: 'Speshway Solutions Pvt Ltd',
      liveUrl: 'https://speshway.com',
      githubUrl: 'https://github.com/edukondalutatukula130404',
      tech: ['Flutter', 'Dart', 'React Native', 'Firebase', 'Push Notifications', 'Offline SQLite'],
      image: 'assets/project-vexa.svg',
      fullTitle: 'Vexa Smart Mobile Application (iOS & Android)',
      leadDescription: 'A production mobile application engineered for iOS and Android platforms, featuring biometric authentication, reactive state management, offline database caching, and real-time cloud notifications.',
      quote: '“Engineered the Vexa Mobile Application with clean modular architecture, achieving native 60fps transitions, reliable offline caching, and frictionless user journeys.”',
      problemSolved: 'Mobile end users required a seamless, battery-efficient mobile application capable of operating smoothly during poor cell reception while guaranteeing secure biometric protection for sensitive credentials.',
      contribution: 'Built responsive cross-platform Flutter mobile interfaces, integrated Firebase cloud messaging for low-latency notifications, developed an SQLite offline caching synchronization engine, and implemented device-native biometric authentication.',
      features: [
        {
          title: 'Cross-Platform iOS & Android Experience',
          desc: 'Engineered with shared codebase architectures delivering smooth 60fps native performance, gesture navigation, and platform-adaptive UI controls.'
        },
        {
          title: 'Biometric Security & Authentication',
          desc: 'Supports Fingerprint and FaceID biometric unlock, encrypted token storage, and secure OAuth2 session management.'
        },
        {
          title: 'Real-Time Sync & Offline Caching',
          desc: 'Offline-first database persistence that synchronizes instantly upon network recovery with low battery and network bandwidth overhead.'
        }
      ],
      metrics: '60fps Native UI • Offline-First Architecture • iOS & Android Deployed'
    }
  ];

  // 1. Service Accordion Toggle (Matches Frame 00:08 - 00:09)
  const serviceItems = document.querySelectorAll('.service-item');
  serviceItems.forEach((item) => {
    item.addEventListener('click', () => {
      const isActive = item.classList.contains('active');
      serviceItems.forEach(i => i.classList.remove('active'));
      if (!isActive) {
        item.classList.add('active');
      }
    });
  });

  // 2. Filter Projects
  const filterBtns = document.querySelectorAll('.filter-btn');
  const projectCards = document.querySelectorAll('.project-card');

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const filterValue = btn.getAttribute('data-filter');
      let delay = 0;
      projectCards.forEach(card => {
        const cardCategory = card.getAttribute('data-category');
        if (filterValue === 'all' || cardCategory === filterValue) {
          card.style.display = 'flex';
          card.style.animation = `cardReveal 0.45s cubic-bezier(0.16, 1, 0.3, 1) ${delay}s both`;
          delay += 0.05;
        } else {
          card.style.display = 'none';
        }
      });
    });
  });

  // 3. Project Case Study Modal (Matches Frame 00:16 - 00:19)
  const modal = document.getElementById('caseStudyModal');
  const modalBackBtn = document.getElementById('modalBackBtn');

  function openProjectModal(projectId) {
    const proj = projectsData.find(p => p.id === projectId) || projectsData[0];

    document.getElementById('modalTagline').textContent = proj.subtitle;
    document.getElementById('modalAuthor').textContent = proj.author;
    document.getElementById('modalTitle').textContent = proj.fullTitle;
    document.getElementById('modalLead').textContent = proj.leadDescription;
    document.getElementById('modalHeroImg').src = proj.image;
    document.getElementById('modalQuote').textContent = proj.quote;

    // Live Preview Link
    const modalLiveLink = document.getElementById('modalLiveLink');
    if (modalLiveLink) {
      modalLiveLink.href = proj.liveUrl || '#';
      const liveSpan = modalLiveLink.querySelector('span');
      if (liveSpan) {
        liveSpan.textContent = (proj.liveUrl.includes('.site') || proj.liveUrl.includes('.com')) ? 'Live Preview ↗' : 'Live Demo ↗';
      }
    }

    // GitHub Repo Link
    const modalGitLink = document.getElementById('modalGitLink');
    if (modalGitLink) {
      modalGitLink.href = proj.githubUrl || 'https://github.com/edukondalutatukula130404';
    }

    // Problem Solved & Contribution
    const problemEl = document.getElementById('modalProblemText');
    if (problemEl) {
      problemEl.textContent = proj.problemSolved || '';
    }

    const contribEl = document.getElementById('modalContributionText');
    if (contribEl) {
      contribEl.textContent = proj.contribution || '';
    }

    // Measurable Outcomes / Metrics
    const metricsEl = document.getElementById('modalMetricsText');
    if (metricsEl) {
      metricsEl.textContent = proj.metrics || '';
    }

    // Features
    const featContainer = document.getElementById('modalFeatures');
    featContainer.innerHTML = proj.features.map(f => `
      <div class="cs-feat-card">
        <h4 class="cs-feat-title">${f.title}</h4>
        <p class="cs-feat-desc">${f.desc}</p>
      </div>
    `).join('');

    // Tech stack pills
    const techContainer = document.getElementById('modalTechPills');
    if (techContainer) {
      techContainer.innerHTML = proj.tech.map(t => `<span class="meta-pill">${t}</span>`).join('');
    }

    // Populate /MORE WORK
    const moreWorkContainer = document.getElementById('modalMoreWorkGrid');
    if (moreWorkContainer) {
      const otherProjects = projectsData.filter(p => p.id !== proj.id);
      moreWorkContainer.innerHTML = otherProjects.slice(0, 2).map(op => `
        <div class="project-card" onclick="window.switchModalProject('${op.id}')">
          <div class="card-preview-wrap">
            <span class="card-badge ${op.badge === 'EXPLORATION' ? 'exploration' : ''}">${op.badge}</span>
            <img src="${op.image}" alt="${op.tagline}" class="card-preview-img">
          </div>
          <div class="card-details-wrap">
            <h3 class="card-title">${op.tagline} <span class="card-arrow">↗</span></h3>
            <div class="card-sub-row">
              <span>${op.subtitle}</span>
              <span>${op.author}</span>
            </div>
          </div>
        </div>
      `).join('');
    }

    modal.classList.add('open');
    document.body.style.overflow = 'hidden';
    modal.scrollTop = 0;
  }

  window.openProjectModal = openProjectModal;
  window.switchModalProject = function(id) {
    openProjectModal(id);
    modal.scrollTop = 0;
  };

  if (modalBackBtn) {
    modalBackBtn.addEventListener('click', () => {
      modal.classList.remove('open');
      document.body.style.overflow = '';
    });
  }

  // Bind project cards
  projectCards.forEach(card => {
    card.addEventListener('click', () => {
      const id = card.getAttribute('data-id');
      openProjectModal(id);
    });
  });

  // 4. Contact Dialog Modal
  const contactModal = document.getElementById('contactDialog');
  const closeContactBtn = document.getElementById('closeContactBtn');
  const contactTriggers = document.querySelectorAll('.trigger-contact');

  contactTriggers.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      if (contactModal) contactModal.classList.add('open');
    });
  });

  if (closeContactBtn) {
    closeContactBtn.addEventListener('click', () => {
      contactModal.classList.remove('open');
    });
  }

  if (contactModal) {
    contactModal.addEventListener('click', (e) => {
      if (e.target === contactModal) {
        contactModal.classList.remove('open');
      }
    });
  }

  // Toast Functionality
  function showToast(msg) {
    const toast = document.getElementById('toastNotice');
    if (toast) {
      toast.textContent = msg;
      toast.classList.add('show');
      setTimeout(() => {
        toast.classList.remove('show');
      }, 3500);
    }
  }
  window.showToast = showToast;

  // Handle Contact Form Submission
  const contactForm = document.getElementById('contactQuickForm');
  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const name = document.getElementById('senderName').value;
      const email = document.getElementById('senderEmail').value;
      const message = document.getElementById('senderMsg').value;

      showToast(`Thank you, ${name}! Launching email client...`);
      setTimeout(() => {
        window.location.href = `mailto:tatukulaedukondalu@gmail.com?subject=Contact from ${encodeURIComponent(name)}&body=${encodeURIComponent(message + '\n\nFrom: ' + email)}`;
        contactModal.classList.remove('open');
        contactForm.reset();
      }, 900);
    });
  }

  // Copy Email / Phone
  window.copyToClipboard = function(text, label) {
    navigator.clipboard.writeText(text).then(() => {
      showToast(`${label} copied to clipboard!`);
    }).catch(() => {
      showToast(`Copied: ${text}`);
    });
  };

  // Keyboard Escape
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      if (modal.classList.contains('open')) {
        modal.classList.remove('open');
        document.body.style.overflow = '';
      }
      if (contactModal && contactModal.classList.contains('open')) {
        contactModal.classList.remove('open');
      }
    }
  });

  // Auto-fit check for Hero Name so it never exceeds container width
  function fitHeroName() {
    const wrap = document.querySelector('.hero-title-wrap');
    const nameEl = document.querySelector('.hero-giant-name');
    if (!wrap || !nameEl) return;

    if (window.innerWidth <= 768) {
      nameEl.style.fontSize = '';
      return;
    }

    nameEl.style.fontSize = '';
    const availWidth = wrap.clientWidth;
    const measuredWidth = nameEl.scrollWidth;

    if (measuredWidth > availWidth && availWidth > 0) {
      const currentSize = parseFloat(window.getComputedStyle(nameEl).fontSize);
      const targetSize = Math.floor(currentSize * (availWidth / measuredWidth) * 0.96);
      nameEl.style.fontSize = `${targetSize}px`;
    }
  }

  fitHeroName();
  window.addEventListener('resize', fitHeroName);
  if (document.fonts) {
    document.fonts.ready.then(fitHeroName);
  }

  // 6. Dark Theme Toggle System (Default: Dark Theme)
  const themeToggleBtn = document.getElementById('themeToggleBtn');
  const savedTheme = localStorage.getItem('portfolio-theme') || 'dark';

  function setTheme(theme) {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark-theme');
      document.body.classList.add('dark-theme');
      document.documentElement.setAttribute('data-theme', 'dark');
      localStorage.setItem('portfolio-theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark-theme');
      document.body.classList.remove('dark-theme');
      document.documentElement.setAttribute('data-theme', 'light');
      localStorage.setItem('portfolio-theme', 'light');
    }
  }

  setTheme(savedTheme);

  if (themeToggleBtn) {
    themeToggleBtn.addEventListener('click', () => {
      const isDark = document.documentElement.classList.contains('dark-theme');
      setTheme(isDark ? 'light' : 'dark');
    });
  }

  // 7. Social Links Click Guarantee (Hero, Footer, Dialog profiles only)
  const realGitHubUrl = 'https://github.com/edukondalutatukula130404';
  const realLinkedInUrl = 'https://www.linkedin.com/in/edukondalu-tatukula-449789261/';

  document.querySelectorAll('.hero-social-list a[href*="github.com"], .footer-social-links a[href*="github.com"], .contact-info-list a[href*="github.com"]').forEach(link => {
    link.href = realGitHubUrl;
    link.addEventListener('click', (e) => {
      e.preventDefault();
      window.open(realGitHubUrl, '_blank', 'noopener,noreferrer');
    });
  });

  document.querySelectorAll('.hero-social-list a[href*="linkedin.com"], .footer-social-links a[href*="linkedin.com"], .contact-info-list a[href*="linkedin.com"]').forEach(link => {
    link.href = realLinkedInUrl;
    link.addEventListener('click', (e) => {
      e.preventDefault();
      window.open(realLinkedInUrl, '_blank', 'noopener,noreferrer');
    });
  });

});

