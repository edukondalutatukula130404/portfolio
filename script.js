// Portfolio Interactive Engine - Matches Exact Video Experience
document.addEventListener('DOMContentLoaded', () => {

  // Project Database - Real-Time Speshway, AI & Vexa Projects
  const projectsData = [
    {
      id: 'chatbot',
      category: 'ai',
      badge: 'AI & NLP',
      name: 'AI EDUCATIONAL CHATBOT',
      subtitle: '24/7 ACADEMIC ASSISTANCE & NLP PIPELINE',
      fullTitle: 'AI-Based Chatbot for Educational Systems',
      leadDescription: 'Designed and implemented an AI-powered conversational chatbot engineered with Natural Language Processing (NLP) techniques, custom intent classifiers, and real-time query resolution to provide instantaneous 24/7 academic support for students.',
      description: 'An AI-powered conversational chatbot engineered with Natural Language Processing (NLP) techniques, custom intent classifiers, and real-time query resolution to provide instantaneous 24/7 academic support for students.',
      image: 'assets/showcase-chatbot.jpg',
      githubUrl: 'https://github.com/edukondalutatukula130404/AI-Based-Chatbot-for-Educational-Systems',
      liveUrl: 'https://github.com/edukondalutatukula130404/AI-Based-Chatbot-for-Educational-Systems',
      github: 'https://github.com/edukondalutatukula130404/AI-Based-Chatbot-for-Educational-Systems',
      live: 'https://github.com/edukondalutatukula130404/AI-Based-Chatbot-for-Educational-Systems',
      workflowSubtitle: 'From natural query tokenization to sub-120ms verified academic response generation.',
      workflows: [
        { step: '01', title: 'Query Tokenization', text: 'Breaks raw natural language queries into root tokens, eliminates noise words, and normalizes input text.' },
        { step: '02', title: 'Intent Classification', text: 'Maps normalized student queries against academic syllabus, exam schedules, and FAQs with confidence scoring.' },
        { step: '03', title: 'Solution Retrieval', text: 'Fetches verified syllabus details, formula references, and curriculum guidelines with contextual awareness.' },
        { step: '04', title: 'Instant Response', text: 'Dispatches sub-120ms conversational answers to the client interface with interactive follow-up suggestion chips.' }
      ],
      featuresSubtitle: 'Explore core capabilities designed for real-time conversational assistance, NLP intent parsing, and instant query resolution.',
      features: [
        { icon: 'brain', title: 'Natural Language Processing', desc: 'Tokenizes and evaluates varied student phrasings using customized NLP classification models for accurate, context-aware answers.' },
        { icon: 'message', title: 'Interactive Chat Experience', desc: 'Sleek, responsive chat interface featuring typing indicators, prompt suggestion chips, message history, and auto-scroll.' },
        { icon: 'server', title: 'Real-Time Flask API Engine', desc: 'Lightweight Python microservice handling academic FAQs, examination schedules, syllabus details, and course reference materials.' },
        { icon: 'shield', title: 'Intelligent Fallback System', desc: 'Automatically flags low-confidence or ambiguous queries and suggests verified faculty advisory contact channels.' }
      ],
      techSubtitle: 'Our application is built using a powerful blend of NLP processing pipelines, lightweight Flask microservices, and reactive JavaScript UI.',
      stack: ['Python', 'NLP', 'NLTK', 'Flask API', 'JavaScript', 'HTML5', 'CSS3', 'REST API'],
      tech: ['Python', 'Natural Language Processing', 'NLTK', 'Flask REST API', 'JavaScript', 'HTML5/CSS3'],
      architecture: 'Engineered with a modular Python Flask backend serving high-throughput RESTful endpoints. Utilizes NLTK pipeline for tokenization, lemmatization, and bag-of-words classification with 92%+ intent precision. Integrates responsive vanilla JavaScript client widget with asynchronous AJAX streaming and sub-120ms latency.'
    },
    {
      id: 'ecom',
      category: 'ecom',
      badge: 'REAL PROJECT',
      name: 'SPESHWAY MULTI-VENDOR E-COMMERCE',
      subtitle: 'ENTERPRISE MULTI-VENDOR COMMERCE PLATFORM',
      fullTitle: 'Speshway Multi-Vendor E-Commerce Platform',
      leadDescription: 'A production-grade, multi-vendor e-commerce web platform engineered with high-speed catalog browsing, real-time cart state synchronization, secure payment gateway integration, and comprehensive customer & order management.',
      description: 'A production-grade, multi-vendor e-commerce web platform engineered with high-speed catalog browsing, real-time cart state synchronization, secure payment gateway integration, and comprehensive customer & order management.',
      image: 'assets/showcase-ecommerce.jpg?v=3',
      githubUrl: 'https://github.com/edukondalutatukula130404/E_commerce.git',
      liveUrl: 'https://ecom.speshway.site',
      github: 'https://github.com/edukondalutatukula130404/E_commerce.git',
      live: 'https://ecom.speshway.site',
      workflowSubtitle: 'Seamless commerce pipeline from product discovery and cart synchronization to secure online payment and doorstep dispatch.',
      workflows: [
        { step: '01', title: 'Catalog Discovery', text: 'Browse thousands of products with multi-facet category filters, search autocomplete, and price ranges.' },
        { step: '02', title: 'Persistent Cart & State', text: 'Synchronize shopping cart across tabs via Redux Toolkit with automated promo code validation.' },
        { step: '03', title: 'Secure Razorpay Checkout', text: 'Execute fast online payments through Razorpay gateway with cryptographic HMAC webhook verification.' },
        { step: '04', title: 'Fulfillment & Dispatch', text: 'Generate automated tax invoices, send SMS/email confirmations, and track parcel fulfillment live.' }
      ],
      featuresSubtitle: 'Explore powerful commerce tools designed to browse catalogues, manage distributed inventories, and process secure payments.',
      features: [
        { icon: 'search', title: 'Faceted Catalog Search', desc: 'Engineered high-speed faceted product search by category, price ranges, brand, and customer ratings with instant client-side state updates.' },
        { icon: 'cart', title: 'Persistent Shopping Cart', desc: 'Redux-driven state persistence keeping items saved across browser sessions and authenticated customer devices.' },
        { icon: 'card', title: 'Razorpay Gateway Integration', desc: 'End-to-end encrypted checkout supporting UPI, Credit/Debit cards, Net Banking, and instant payment receipts.' },
        { icon: 'dashboard', title: 'Vendor Management Portal', desc: 'Built administrative dashboards for order status tracking, inventory stock alerts, customer dispute handling, and automated invoice delivery.' }
      ],
      techSubtitle: 'Our application is built using a scalable blend of full-stack MERN services, Redux state management, and cloud database clusters.',
      stack: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'Redux Toolkit', 'Razorpay', 'Tailwind CSS', 'JWT Auth'],
      tech: ['React', 'Node.js', 'Express', 'MongoDB', 'Redux', 'Razorpay', 'REST APIs', 'Tailwind CSS'],
      architecture: 'Built on full MERN stack (MongoDB, Express, React, Node.js) with Redux Toolkit for centralized client state. Employs RESTful APIs with JWT authentication and bcrypt password hashing. MongoDB Atlas cluster with indexed query paths ensures sub-100ms response times under high concurrency.'
    },
    {
      id: 'clothing',
      category: 'clothing',
      badge: 'REAL PROJECT',
      name: 'SPESHWAY FASHION STORE (VEXA)',
      subtitle: 'DIGITAL APPAREL & TRENDING BOUTIQUE',
      fullTitle: 'Speshway Clothing & Apparel Storefront',
      leadDescription: 'An elegant, high-conversion online fashion storefront featuring dynamic category carousels, responsive lookbook galleries, real-time size & inventory pickers, and smooth checkout.',
      description: 'An elegant, high-conversion online fashion storefront featuring dynamic category carousels, responsive lookbook galleries, real-time size & inventory pickers, and smooth checkout.',
      image: 'assets/showcase-clothing.jpg?v=3',
      githubUrl: 'https://github.com/edukondalutatukula130404/clothing_web.git',
      liveUrl: 'https://clothing.speshway.site',
      github: 'https://github.com/edukondalutatukula130404/clothing_web.git',
      live: 'https://clothing.speshway.site',
      workflowSubtitle: 'Effortless style journey from trend curation and size selection to express checkout and live dispatch tracking.',
      workflows: [
        { step: '01', title: 'Lookbook Curation', text: 'Explore curated modern apparel collections, trending styles, and model lookbook galleries.' },
        { step: '02', title: 'Size & Fit Selection', text: 'Select fit, color swatches, and size dimensions with dynamic stock availability checking.' },
        { step: '03', title: 'Express Checkout', text: 'Frictionless customer checkout with saved addresses, coupon discounts, and instant payment validation.' },
        { step: '04', title: 'Delivery & Updates', text: 'Instant order confirmation vouchers and dispatch tracking sent via email and customer account panel.' }
      ],
      featuresSubtitle: 'Explore tailored boutique features engineered for visual appeal, responsive device ergonomics, and high conversion rates.',
      features: [
        { icon: 'sparkles', title: 'Curated Lookbook Displays', desc: 'High-resolution image showcases with responsive zoom, variant selectors, and fashion styling recommendations.' },
        { icon: 'layers', title: 'Smart Size & Swatches', desc: 'Instant visual feedback on garment stock availability per size and color shade before cart addition.' },
        { icon: 'cart', title: 'Frictionless One-Page Checkout', desc: 'Streamlined 3-step ordering process reducing cart abandonment with address autofill and promo coupons.' },
        { icon: 'mobile', title: 'Mobile-First Ergonomics', desc: 'Tailored mobile ergonomics with fluid bottom sheets, touch swiping, and delightful micro-interactions.' }
      ],
      techSubtitle: 'Our application is built using a modern blend of React frontend components, Node.js APIs, and CDN asset delivery.',
      stack: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'CSS3', 'REST API', 'Razorpay', 'Cloudinary'],
      tech: ['React', 'Node.js', 'Express', 'MongoDB', 'Razorpay API', 'RESTful API', 'CSS Grid'],
      architecture: 'Architected with React.js frontend and Node.js/Express REST backend. Utilizes Cloudinary CDN for adaptive image compression and responsive delivery. Integrated with MongoDB for catalog metadata and Razorpay for payment orchestration.'
    },
    {
      id: 'erp',
      category: 'erp',
      badge: 'ENTERPRISE',
      name: 'SPESHWAY CLOUD ERP SYSTEM',
      subtitle: 'ENTERPRISE RESOURCE PLANNING & ANALYTICS',
      fullTitle: 'Speshway All-in-One Cloud ERP System',
      leadDescription: 'A centralized cloud-based enterprise resource planning platform engineered to unify multi-branch inventory, supply chain logistics, staff payroll, and financial operations.',
      description: 'A centralized cloud-based enterprise resource planning platform engineered to unify multi-branch inventory, supply chain logistics, staff payroll, and financial operations.',
      image: 'assets/showcase-erp.jpg',
      githubUrl: 'https://github.com/edukondalutatukula130404/all_in_one_erp_project.git',
      liveUrl: 'https://erp.speshway.site',
      github: 'https://github.com/edukondalutatukula130404/all_in_one_erp_project.git',
      live: 'https://erp.speshway.site',
      workflowSubtitle: 'Robust enterprise operations pipeline from role-based authentication and stock management to automated tax invoicing and analytics.',
      workflows: [
        { step: '01', title: 'Role-Based Access', text: 'Multi-tier access permissions for executives, department heads, accountants, and warehouse managers.' },
        { step: '02', title: 'Inventory Automation', text: 'Real-time tracking of multi-location warehouse stock with automated low-stock vendor purchase requisitions.' },
        { step: '03', title: 'GST Billing Engine', text: 'Instant automated tax invoice generation with dual-entry accounting and ledger reconciliation.' },
        { step: '04', title: 'Executive Analytics', text: 'Real-time revenue charts, profit & loss statements, and department efficiency metrics.' }
      ],
      featuresSubtitle: 'Explore enterprise ERP modules designed to streamline business workflows, automate accounting, and provide real-time visibility.',
      features: [
        { icon: 'package', title: 'Multi-Warehouse Tracking', desc: 'Centralized stock movement tracking across physical depots with barcode serialization and batch numbers.' },
        { icon: 'invoice', title: 'Automated GST Invoicing', desc: 'Pre-configured tax slabs (CGST, SGST, IGST) with automated calculations, PDF generation, and thermal printing.' },
        { icon: 'lock', title: 'Role-Based Access Control', desc: 'Strict permission matrices ensuring sensitive financial ledgers and payroll data are accessible only to authorized roles.' },
        { icon: 'chart', title: 'Real-Time KPI Dashboards', desc: 'Executive dashboards visualizing weekly revenue, cash flow trends, and sales rep performance KPIs.' }
      ],
      techSubtitle: 'Our application is built using a resilient blend of Node.js services, MongoDB transactions, and reactive analytical charts.',
      stack: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'Redux', 'JWT Auth', 'Chart.js', 'PDFKit'],
      tech: ['React', 'Node.js', 'Express', 'MongoDB', 'JWT Auth', 'REST APIs', 'Chart.js'],
      architecture: 'Engineered using a multi-tenant micro-architecture with Node.js and Express. MongoDB replica sets provide high-availability transaction records with ACID-compliant multi-document transactions for critical billing pipelines. Frontend built with React, Redux, and Chart.js for data visualization.'
    },
    {
      id: 'vexa',
      category: 'mobile',
      badge: 'MOBILE APP',
      name: 'VEXA SMART MOBILE APPLICATION',
      subtitle: 'CROSS-PLATFORM FLUTTER SHOPPING APP',
      fullTitle: 'Vexa Smart Mobile Application (iOS & Android)',
      leadDescription: 'A production-ready cross-platform mobile application engineered for iOS and Android with Flutter, delivering 60fps native transitions, biometric login, offline database caching, and push notifications.',
      description: 'A production-ready cross-platform mobile application engineered for iOS and Android with Flutter, delivering 60fps native transitions, biometric login, offline database caching, and push notifications.',
      image: 'assets/showcase-mobile.jpg',
      githubUrl: 'https://github.com/edukondalutatukula130404/VEXA-Clothing-Mobile-App',
      liveUrl: 'https://clothing.speshway.site',
      github: 'https://github.com/edukondalutatukula130404/VEXA-Clothing-Mobile-App',
      live: 'https://clothing.speshway.site',
      workflowSubtitle: 'Native mobile experience from biometric authentication and gesture browsing to in-app payment and push notifications.',
      workflows: [
        { step: '01', title: 'Biometric Sign-In', text: 'Quick FaceID or fingerprint authentication with encrypted local keychain token storage.' },
        { step: '02', title: 'Gesture Discovery', text: 'Browse products with 60fps animated hero transitions, pinch zoom, and pull-to-refresh.' },
        { step: '03', title: 'Native Payment Sheet', text: 'Frictionless in-app payment sheet supporting Google Pay, Apple Pay, cards, and UPI.' },
        { step: '04', title: 'Push Alerts', text: 'Background Firebase Cloud Messaging delivers instant order tracking and delivery dispatch alerts.' }
      ],
      featuresSubtitle: 'Explore native mobile capabilities engineered for smooth 60fps animations, offline resiliency, and device security.',
      features: [
        { icon: 'mobile', title: 'Cross-Platform Native Core', desc: 'Single high-performance codebase compiling to ARM64 native binaries on iOS and Android with 60fps fluid motion.' },
        { icon: 'shield', title: 'Biometric Authentication', desc: 'Native biometric hardware integration for cryptographic credential authentication (FaceID & Fingerprint).' },
        { icon: 'database', title: 'Offline SQLite Caching', desc: 'Offline-first data architecture caching catalog items locally for instant browsing without active cell service.' },
        { icon: 'bell', title: 'Firebase Cloud Messaging', desc: 'Low-latency push notifications for flash sales, order transit updates, and back-in-stock alerts.' }
      ],
      techSubtitle: 'Our application is built using Flutter and Dart, backed by Firebase cloud infrastructure and native device APIs.',
      stack: ['Flutter', 'Dart', 'Firebase', 'SQLite', 'REST APIs', 'Cloud Messaging', 'Provider State'],
      tech: ['Flutter', 'Dart', 'React Native', 'Firebase', 'Push Notifications', 'Offline SQLite'],
      architecture: 'Built using Flutter and Dart with Clean Architecture (Domain, Data, and Presentation layers). Leverages Provider for reactive UI updates and SQLite (sqflite) for local offline persistence. Synchronizes with Node.js backend services via secure REST APIs with automated offline sync queues.'
    },
    {
      id: 'desktop-app',
      category: 'desktop',
      badge: 'DESKTOP APP',
      name: 'INVOICEPRO DESKTOP APPLICATION',
      subtitle: 'OFFLINE GST BILLING & INVENTORY SUITE',
      fullTitle: 'InvoicePro Desktop Application Suite',
      leadDescription: 'A high-performance offline-first desktop billing software built with Electron and React, designed for retail and wholesale billing with local embedded database, thermal printing, and barcode scanner support.',
      description: 'A high-performance offline-first desktop billing software built with Electron and React, designed for retail and wholesale billing with local embedded database, thermal printing, and barcode scanner support.',
      image: 'assets/showcase-desktop.jpg',
      githubUrl: 'https://github.com/edukondalutatukula130404/Billing-Software-for-Desktop',
      liveUrl: 'https://github.com/edukondalutatukula130404/Billing-Software-for-Desktop',
      github: 'https://github.com/edukondalutatukula130404/Billing-Software-for-Desktop',
      live: 'https://github.com/edukondalutatukula130404/Billing-Software-for-Desktop',
      workflowSubtitle: 'Instant offline billing workflow from barcode scanning to automated GST tax calculation and thermal receipt printing.',
      workflows: [
        { step: '01', title: 'Instant Offline Launch', text: 'Runs natively on Windows without requiring internet connection or remote cloud dependencies.' },
        { step: '02', title: 'High-Speed Barcode Scan', text: 'Instantly look up items via USB barcode scanner and populate bill lines in sub-50ms.' },
        { step: '03', title: 'One-Click Tax Bill', text: 'Calculate GST breakdowns and trigger high-speed 58mm/80mm ESC/POS thermal or A4 laser printers.' },
        { step: '04', title: 'Local Backup & Sync', text: 'Automated daily encrypted local database backups with optional background cloud synchronization.' }
      ],
      featuresSubtitle: 'Explore desktop billing capabilities built for speed, offline reliability, and native peripheral hardware integration.',
      features: [
        { icon: 'database', title: 'Offline Embedded MongoDB', desc: 'Zero network latency data operations powered by local embedded database ensuring 100% data privacy and uptime.' },
        { icon: 'printer', title: 'Printer & Scanner Bridge', desc: 'Native OS integration with USB barcode scanners, cash drawers, and ESC/POS thermal receipt printers.' },
        { icon: 'invoice', title: 'Automated GST Tax Engine', desc: 'Comprehensive GST calculations with automatic HSN code lookups, CGST/SGST/IGST tax invoices, and GSTR summaries.' },
        { icon: 'cpu', title: 'Windows NSIS Installer', desc: 'Production electron-builder pipeline creating signed lightweight Windows installer packages with machine key licensing.' }
      ],
      techSubtitle: 'Our application is built using Electron desktop runtime, React user interfaces, and embedded local database storage.',
      stack: ['Electron', 'React.js', 'Node.js', 'MongoDB Embedded', 'IPC Bridge', 'ESC/POS Drivers', 'NSIS Installer'],
      tech: ['Electron', 'React', 'Node.js', 'Embedded MongoDB', 'Windows NSIS', 'Local Database'],
      architecture: 'Architected with Electron IPC (Inter-Process Communication) bridge connecting a React frontend with a native Node.js process. Embeds local MongoDB for microsecond read/write operations with zero network dependency. Electron-builder automates compilation into signed Windows NSIS executable packages.'
    }
  ];

  // Helper: Feature SVG Icons
  function getFeatureIcon(type) {
    switch (type) {
      case 'brain':
        return '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9.5 2A2.5 2.5 0 0 1 12 4.5v15a2.5 2.5 0 0 1-4.96.44 2.5 2.5 0 0 1-2.96-3.08 3 3 0 0 1-.34-5.58 2.5 2.5 0 0 1 1.32-4.24 2.5 2.5 0 0 1 4.44-2.04z"/><path d="M14.5 2A2.5 2.5 0 0 0 12 4.5v15a2.5 2.5 0 0 0 4.96.44 2.5 2.5 0 0 0 2.96-3.08 3 3 0 0 0 .34-5.58 2.5 2.5 0 0 0-1.32-4.24 2.5 2.5 0 0 0-4.44-2.04z"/></svg>';
      case 'message':
        return '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>';
      case 'server':
        return '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="2" width="20" height="8" rx="2" ry="2"/><rect x="2" y="14" width="20" height="8" rx="2" ry="2"/><line x1="6" y1="6" x2="6.01" y2="6"/><line x1="6" y1="18" x2="6.01" y2="18"/></svg>';
      case 'shield':
      case 'lock':
        return '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>';
      case 'search':
        return '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>';
      case 'cart':
        return '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="9" cy="21" r="1"/><circle cx="20" cy="21" r="1"/><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"/></svg>';
      case 'card':
        return '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="1" y="4" width="22" height="16" rx="2" ry="2"/><line x1="1" y1="10" x2="23" y2="10"/></svg>';
      case 'dashboard':
      case 'chart':
        return '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="20" x2="18" y2="10"/><line x1="12" y1="20" x2="12" y2="4"/><line x1="6" y1="20" x2="6" y2="14"/></svg>';
      case 'sparkles':
        return '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z"/></svg>';
      case 'layers':
        return '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="12 2 2 7 12 12 22 7 12 2"/><polyline points="2 17 12 22 22 17"/><polyline points="2 12 12 17 22 12"/></svg>';
      case 'mobile':
        return '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="5" y="2" width="14" height="20" rx="2" ry="2"/><line x1="12" y1="18" x2="12.01" y2="18"/></svg>';
      case 'package':
        return '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="16.5" y1="9.4" x2="7.5" y2="4.21"/><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/><polyline points="3.27 6.96 12 12.01 20.73 6.96"/><line x1="12" y1="22.08" x2="12" y2="12"/></svg>';
      case 'invoice':
        return '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/><polyline points="10 9 9 9 8 9"/></svg>';
      case 'database':
        return '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><ellipse cx="12" cy="5" rx="9" ry="3"/><path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"/><path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"/></svg>';
      case 'bell':
        return '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"/><path d="M13.73 21a2 2 0 0 1-3.46 0"/></svg>';
      case 'printer':
        return '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="6 9 6 2 18 2 18 9"/><path d="M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2"/><rect x="6" y="14" width="12" height="8"/></svg>';
      case 'cpu':
        return '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="4" y="4" width="16" height="16" rx="2"/><rect x="9" y="9" width="6" height="6"/><line x1="9" y1="1" x2="9" y2="4"/><line x1="15" y1="1" x2="15" y2="4"/><line x1="9" y1="20" x2="9" y2="23"/><line x1="15" y1="20" x2="15" y2="23"/><line x1="20" y1="9" x2="23" y2="9"/><line x1="20" y1="14" x2="23" y2="14"/><line x1="1" y1="9" x2="4" y2="9"/><line x1="1" y1="14" x2="4" y2="14"/></svg>';
      default:
        return '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><line x1="12" y1="16" x2="12" y2="12"/><line x1="12" y1="8" x2="12.01" y2="8"/></svg>';
    }
  }

  // 1. Service Accordion Toggle
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
          card.style.display = '';
          card.style.animation = 'cardReveal 0.45s cubic-bezier(0.16, 1, 0.3, 1) ' + delay + 's both';
          delay += 0.05;
        } else {
          card.style.display = 'none';
        }
      });
      if (typeof handleCardStackScroll === 'function') {
        handleCardStackScroll();
      }
    });
  });

  // 3. Project Case Study / Details View (Matches Charan Teja Experience)
  const modal = document.getElementById('caseStudyModal');
  const modalBackBtn = document.getElementById('modalBackBtn');
  const csBottomBackBtn = document.getElementById('csBottomBackBtn');

  function closeCaseStudy() {
    if (!modal) return;
    modal.classList.remove('open');
    document.body.style.overflow = '';
    const workSec = document.getElementById('work');
    if (workSec) {
      workSec.scrollIntoView({ behavior: 'smooth' });
    }
  }

  function openProjectModal(projectId) {
    const proj = projectsData.find(p => p.id === projectId) || projectsData[0];
    if (!modal) return;

    // Overview Header
    const titleEl = document.getElementById('csTitle');
    if (titleEl) titleEl.textContent = proj.name || proj.fullTitle;

    const subEl = document.getElementById('csSubtitle');
    if (subEl) subEl.textContent = proj.subtitle;

    const heroImgEl = document.getElementById('csHeroImg');
    if (heroImgEl) {
      heroImgEl.src = proj.image;
      heroImgEl.alt = (proj.name || proj.fullTitle) + ' Showcase';
    }

    const descEl = document.getElementById('csDesc');
    if (descEl) descEl.textContent = proj.description || proj.leadDescription;

    // Repository Link
    const gitBtn = document.getElementById('csGitBtn');
    if (gitBtn) {
      if (proj.github || proj.githubUrl) {
        gitBtn.href = proj.github || proj.githubUrl;
        gitBtn.style.display = 'inline-flex';
      } else {
        gitBtn.style.display = 'none';
      }
    }

    // Live Application Link
    const liveBtn = document.getElementById('csLiveBtn');
    if (liveBtn) {
      if (proj.live || proj.liveUrl) {
        liveBtn.href = proj.live || proj.liveUrl;
        liveBtn.style.display = 'inline-flex';
      } else {
        liveBtn.style.display = 'none';
      }
    }

    // How It Works Section
    const workflowSub = document.getElementById('csWorkflowSub');
    if (workflowSub) workflowSub.textContent = proj.workflowSubtitle || 'Seamless end-to-end workflow from initiation to completion.';

    const stepsGrid = document.getElementById('csStepsGrid');
    if (stepsGrid && Array.isArray(proj.workflows)) {
      stepsGrid.innerHTML = proj.workflows.map((wf, idx) => `
        <div class="cs-step-card">
          <span class="cs-step-num">${wf.step || String(idx + 1).padStart(2, '0')}</span>
          <h4 class="cs-step-title">${wf.title}</h4>
          <p class="cs-step-text">${wf.text}</p>
        </div>
      `).join('');
    }

    // App Features Section
    const featSub = document.getElementById('csFeaturesSub');
    if (featSub) featSub.textContent = proj.featuresSubtitle || 'Key architectural and design features powering this application.';

    const featGrid = document.getElementById('csFeaturesGrid');
    if (featGrid && Array.isArray(proj.features)) {
      featGrid.innerHTML = proj.features.map(f => `
        <div class="cs-feature-card">
          <div class="cs-feat-icon-box">
            ${getFeatureIcon(f.icon)}
          </div>
          <div class="cs-feat-info">
            <h4 class="cs-feat-name">${f.title}</h4>
            <p class="cs-feat-desc">${f.desc}</p>
          </div>
        </div>
      `).join('');
    }

    // Technologies We Use Section
    const techSub = document.getElementById('csTechSub');
    if (techSub) techSub.textContent = proj.techSubtitle || 'A balanced modern stack ensuring speed, reliability, and security.';

    const techGrid = document.getElementById('csTechGrid');
    if (techGrid && Array.isArray(proj.stack)) {
      techGrid.innerHTML = proj.stack.map(tech => `
        <div class="cs-tech-pill">
          <span class="cs-tech-dot"></span>
          <span>${tech}</span>
        </div>
      `).join('');
    }

    // System Architecture Section
    const archCard = document.getElementById('csArchCard');
    const archIcon = '<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="4 17 10 11 4 5"></polyline><line x1="12" y1="19" x2="20" y2="19"></line></svg>';
    if (archCard && proj.architecture) {
      const sentences = proj.architecture.split(/(?<=\.)\s+/).map(s => s.trim()).filter(Boolean);
      archCard.innerHTML = sentences.map(sent => `
        <div class="cs-arch-row">
          <div class="cs-arch-icon-wrap">${archIcon}</div>
          <p class="cs-arch-text">${sent}</p>
        </div>
      `).join('');
    }

    const archPills = document.getElementById('csArchPills');
    if (archPills && Array.isArray(proj.stack)) {
      archPills.innerHTML = proj.stack.map(tech => `
        <span class="cs-arch-pill">${tech}</span>
      `).join('');
    }

    // Up Next Navigation
    const currentIdx = projectsData.findIndex(p => p.id === proj.id);
    const nextProj = projectsData[(currentIdx + 1) % projectsData.length];
    const nextTitle = document.getElementById('csNextTitle');
    const nextSub = document.getElementById('csNextSubtitle');
    const nextCard = document.getElementById('csNextCard');

    if (nextTitle) nextTitle.textContent = nextProj.name;
    if (nextSub) nextSub.textContent = nextProj.subtitle;
    if (nextCard) {
      nextCard.onclick = () => {
        openProjectModal(nextProj.id);
      };
    }

    modal.classList.add('open');
    document.body.style.overflow = 'hidden';
    modal.scrollTop = 0;
  }

  window.openProjectModal = openProjectModal;
  window.switchModalProject = function(id) {
    openProjectModal(id);
  };

  // Smooth scroll within Case Study container
  window.scrollToCaseStudySection = function(sectionId) {
    if (!modal) return;
    const target = document.getElementById(sectionId);
    if (target) {
      const topOffset = target.offsetTop - 70;
      modal.scrollTo({ top: topOffset, behavior: 'smooth' });
    }
  };

  if (modalBackBtn) {
    modalBackBtn.addEventListener('click', closeCaseStudy);
  }
  if (csBottomBackBtn) {
    csBottomBackBtn.addEventListener('click', closeCaseStudy);
  }

  // Case Study Footer Navigation Links: close modal and scroll to section on home page
  document.querySelectorAll('.cs-footer-nav-link').forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      const targetId = link.getAttribute('data-target');
      closeCaseStudy();
      if (targetId) {
        setTimeout(() => {
          const el = document.getElementById(targetId);
          if (el) {
            el.scrollIntoView({ behavior: 'smooth' });
          }
        }, 150);
      }
    });
  });

  // Keyboard Escape listener
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal && modal.classList.contains('open')) {
      closeCaseStudy();
    }
  });

  // Bind project cards
  projectCards.forEach(card => {
    card.addEventListener('click', (e) => {
      if (e.target.closest('.card-links-row') || e.target.closest('.stack-card-actions') || e.target.closest('a') || e.target.closest('button')) {
        return;
      }
      const id = card.getAttribute('data-id');
      openProjectModal(id);
    });
  });

  // Prevent card click when clicking action buttons
  document.querySelectorAll('.card-links-row a, .card-links-row button, .stack-card-actions a, .stack-card-actions button').forEach(el => {
    el.addEventListener('click', (e) => {
      e.stopPropagation();
    });
  });

  // Sticky Stack Cards Scrubbing Animation (Matches charanteja.online GSAP feel)
  const stackCards = document.querySelectorAll('.stack-card');
  function handleCardStackScroll() {
    if (!stackCards.length) return;
    const stickyTop = window.innerWidth <= 900 ? 76 : 92;
    const windowH = window.innerHeight;

    const visibleCards = Array.from(stackCards).filter(c => c.style.display !== 'none');

    visibleCards.forEach((card, idx) => {
      if (idx < visibleCards.length - 1) {
        const nextCard = visibleCards[idx + 1];
        const nextRect = nextCard.getBoundingClientRect();
        const totalDist = windowH - stickyTop;
        const currentDist = nextRect.top - stickyTop;

        if (currentDist <= 0) {
          card.style.transform = 'scale(0.94)';
          card.style.filter = 'brightness(0.65)';
        } else if (currentDist < totalDist) {
          const progress = 1 - (currentDist / totalDist);
          const scale = 1 - (progress * 0.06); // 1.0 -> 0.94
          const brightness = 1 - (progress * 0.35); // 1.0 -> 0.65
          card.style.transform = `scale(${scale.toFixed(3)})`;
          card.style.filter = `brightness(${brightness.toFixed(3)})`;
        } else {
          card.style.transform = 'scale(1)';
          card.style.filter = 'brightness(1)';
        }
      } else {
        card.style.transform = 'scale(1)';
        card.style.filter = 'brightness(1)';
      }
    });
  }

  window.addEventListener('scroll', () => requestAnimationFrame(handleCardStackScroll), { passive: true });
  window.addEventListener('resize', () => requestAnimationFrame(handleCardStackScroll), { passive: true });
  handleCardStackScroll();

  // Helper for Email Validation
  function isValidEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim());
  }

  // 4. Contact Forms & Validation (Embedded Form + Quick Dialog)
  const mainContactForm = document.getElementById('mainContactForm');
  const mainMsgInput = document.getElementById('mainMessage');
  const charCounter = document.getElementById('charCounter');

  if (mainMsgInput && charCounter) {
    mainMsgInput.addEventListener('input', () => {
      const len = mainMsgInput.value.length;
      charCounter.textContent = `${len} / 1000`;
      if (len > 1000) {
        charCounter.style.color = '#ef4444';
      } else {
        charCounter.style.color = '';
      }
    });
  }

  if (mainContactForm) {
    const nameInput = document.getElementById('mainName');
    const emailInput = document.getElementById('mainEmail');
    const subjectSelect = document.getElementById('mainSubject');
    const msgInput = document.getElementById('mainMessage');
    const nameErr = document.getElementById('nameError');
    const emailErr = document.getElementById('emailError');
    const msgErr = document.getElementById('messageError');
    const successBanner = document.getElementById('formSuccessBanner');
    const successDesc = document.getElementById('successDesc');
    const submitBtn = document.getElementById('submitContactBtn');

    mainContactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      let hasError = false;

      // Reset errors
      [nameErr, emailErr, msgErr].forEach(el => { if (el) el.textContent = ''; });
      [nameInput, emailInput, msgInput].forEach(el => { if (el) el.classList.remove('input-error'); });

      // Name validation
      const name = nameInput.value.trim();
      if (!name || name.length < 2) {
        if (nameErr) nameErr.textContent = 'Please enter your name (at least 2 characters).';
        nameInput.classList.add('input-error');
        hasError = true;
      }

      // Email validation
      const email = emailInput.value.trim();
      if (!email || !isValidEmail(email)) {
        if (emailErr) emailErr.textContent = 'Please enter a valid email address (e.g., name@domain.com).';
        emailInput.classList.add('input-error');
        hasError = true;
      }

      // Message validation
      const message = msgInput.value.trim();
      if (!message || message.length < 10) {
        if (msgErr) msgErr.textContent = 'Please include a message with at least 10 characters.';
        msgInput.classList.add('input-error');
        hasError = true;
      }

      if (hasError) return;

      const subject = subjectSelect ? subjectSelect.value : 'Inquiry from Portfolio';

      // Submit State
      if (submitBtn) {
        submitBtn.disabled = true;
        submitBtn.innerHTML = `
          <span class="btn-text">Sending...</span>
          <span class="btn-spinner"></span>
        `;
      }

      // Show Success Notification Banner
      if (successBanner) {
        if (successDesc) {
          successDesc.textContent = `Thank you, ${name}! Your email client has been prepared with your message to tatukulaedukondalu@gmail.com.`;
        }
        successBanner.style.display = 'flex';
      }

      showToast(`Thank you, ${name}! Launching email client...`);

      // Proper Email Delivery via URI Encoded mailto
      setTimeout(() => {
        const bodyContent = `From: ${name} (${email})\nInquiry Topic: ${subject}\n\nMessage Details:\n${message}\n\n--\nSent via Portfolio Contact System`;
        window.location.href = `mailto:tatukulaedukondalu@gmail.com?subject=${encodeURIComponent(subject + ' - ' + name)}&body=${encodeURIComponent(bodyContent)}`;

        setTimeout(() => {
          if (submitBtn) {
            submitBtn.disabled = false;
            submitBtn.innerHTML = `
              <span class="btn-text">Send Message</span>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">
                <line x1="22" y1="2" x2="11" y2="13"></line>
                <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
              </svg>
            `;
          }
          mainContactForm.reset();
          if (charCounter) charCounter.textContent = '0 / 1000';
        }, 1500);
      }, 700);
    });
  }

  // Quick Dialog Modal
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

  // Quick Contact Form Submission & Validation
  const quickContactForm = document.getElementById('contactQuickForm');
  if (quickContactForm) {
    const qName = document.getElementById('senderName');
    const qEmail = document.getElementById('senderEmail');
    const qMsg = document.getElementById('senderMsg');
    const qNameErr = document.getElementById('quickNameError');
    const qEmailErr = document.getElementById('quickEmailError');
    const qMsgErr = document.getElementById('quickMsgError');
    const qSuccessBanner = document.getElementById('quickSuccessBanner');
    const qSubmitBtn = document.getElementById('quickSubmitBtn');

    quickContactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      let hasError = false;

      [qNameErr, qEmailErr, qMsgErr].forEach(el => { if (el) el.textContent = ''; });
      [qName, qEmail, qMsg].forEach(el => { if (el) el.classList.remove('input-error'); });

      const name = qName.value.trim();
      if (!name || name.length < 2) {
        if (qNameErr) qNameErr.textContent = 'Please enter your name.';
        qName.classList.add('input-error');
        hasError = true;
      }

      const email = qEmail.value.trim();
      if (!email || !isValidEmail(email)) {
        if (qEmailErr) qEmailErr.textContent = 'Please enter a valid email.';
        qEmail.classList.add('input-error');
        hasError = true;
      }

      const message = qMsg.value.trim();
      if (!message || message.length < 8) {
        if (qMsgErr) qMsgErr.textContent = 'Please write a message (at least 8 chars).';
        qMsg.classList.add('input-error');
        hasError = true;
      }

      if (hasError) return;

      if (qSubmitBtn) {
        qSubmitBtn.disabled = true;
        qSubmitBtn.textContent = 'Preparing email...';
      }

      if (qSuccessBanner) qSuccessBanner.style.display = 'flex';
      showToast(`Thank you, ${name}! Launching email client...`);

      setTimeout(() => {
        const bodyContent = `From: ${name} (${email})\n\nMessage:\n${message}\n\n--\nSent via Quick Dialog`;
        window.location.href = `mailto:tatukulaedukondalu@gmail.com?subject=${encodeURIComponent('Quick Message from ' + name)}&body=${encodeURIComponent(bodyContent)}`;

        setTimeout(() => {
          if (contactModal) contactModal.classList.remove('open');
          quickContactForm.reset();
          if (qSuccessBanner) qSuccessBanner.style.display = 'none';
          if (qSubmitBtn) {
            qSubmitBtn.disabled = false;
            qSubmitBtn.textContent = 'Send Message ↗';
          }
        }, 1200);
      }, 700);
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

  // 8. Custom Glowing Lime Circle Cursor Animation (Matches Visual Design)
  function initCustomCursor() {
    const ring = document.getElementById('customCursorRing');
    const dot = document.getElementById('customCursorDot');
    if (!ring || !dot) return;

    let mouseX = -100;
    let mouseY = -100;
    let ringX = -100;
    let ringY = -100;
    let isHovered = false;
    let isClicked = false;
    let isVisible = false;

    function onPointerMove(e) {
      mouseX = e.clientX;
      mouseY = e.clientY;
      if (!isVisible) {
        isVisible = true;
        document.documentElement.classList.add('custom-cursor-active');
        ring.style.opacity = '1';
        dot.style.opacity = '1';
      }
    }

    window.addEventListener('mousemove', onPointerMove, { passive: true });
    window.addEventListener('pointermove', onPointerMove, { passive: true });

    // Hide when touch input occurs (e.g. tapping screen on touchscreen laptops)
    window.addEventListener('touchstart', () => {
      document.documentElement.classList.remove('custom-cursor-active');
      ring.style.opacity = '0';
      dot.style.opacity = '0';
      isVisible = false;
    }, { passive: true });

    document.addEventListener('mouseleave', () => {
      ring.style.opacity = '0';
      dot.style.opacity = '0';
    });

    document.addEventListener('mouseenter', () => {
      if (isVisible) {
        ring.style.opacity = '1';
        dot.style.opacity = '1';
      }
    });

    window.addEventListener('mousedown', () => {
      isClicked = true;
    });

    window.addEventListener('mouseup', () => {
      isClicked = false;
    });

    // Detect hover on interactive elements using event delegation
    const interactiveSelector = 'a, button, .project-card, .service-item, .timeline-item, .skill-pill, .theme-toggle-btn, input, textarea, select, .stretched-card-link';

    document.addEventListener('mouseover', (e) => {
      if (e.target && e.target.closest(interactiveSelector)) {
        isHovered = true;
        ring.classList.add('cursor-hover');
      }
    });

    document.addEventListener('mouseout', (e) => {
      if (e.target && e.target.closest(interactiveSelector)) {
        isHovered = false;
        ring.classList.remove('cursor-hover');
      }
    });

    function lerp(start, end, factor) {
      return start + (end - start) * factor;
    }

    function render() {
      // Smooth 60fps/120fps hardware-accelerated lerp tracking
      ringX = lerp(ringX, mouseX, 0.22);
      ringY = lerp(ringY, mouseY, 0.22);

      const scale = isClicked ? 0.8 : (isHovered ? 1.5 : 1);
      ring.style.transform = `translate3d(${ringX}px, ${ringY}px, 0) translate(-50%, -50%) scale(${scale})`;
      dot.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0) translate(-50%, -50%)`;

      requestAnimationFrame(render);
    }

    requestAnimationFrame(render);
  }

  initCustomCursor();

  // 9. Hero "Crafting with" Interactive Tech Scroller (MongoDB, Flutter, React...)
  function initCraftingRoller() {
    const el = document.getElementById('craftingTech');
    if (!el) return;

    // Technologies requested: MongoDB, Flutter, React + full stack
    const skills = ['MongoDB', 'Flutter', 'React', 'Node.js', 'Python', 'MERN Stack', 'Express.js'];
    let idx = 0;

    setInterval(() => {
      el.classList.add('slide-out');
      setTimeout(() => {
        idx = (idx + 1) % skills.length;
        el.textContent = skills[idx];
        el.classList.remove('slide-out');
        el.classList.add('slide-in-prep');
        void el.offsetWidth; // Force CSS reflow
        el.classList.remove('slide-in-prep');
      }, 350);
    }, 2200);
  }

  initCraftingRoller();

});

