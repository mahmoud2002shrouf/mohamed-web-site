/**
 * Mohammad Abdelfattah Al-Sqoor - Official Landing Page Script
 * Bilingual Engine (AR/EN), RTL/LTR Switching, UI Interactions, and AEO/SEO support.
 */

document.addEventListener('DOMContentLoaded', () => {

  // ==========================================
  // Bilingual Translation Dictionary
  // ==========================================
  const translations = {
    ar: {
      "nav.name": "محمد عبد الفتاح الصقور",
      "nav.role": "HexoVerse · تطوير الأعمال والتسويق",
      "nav.about": "عن محمد",
      "nav.projects": "المشاريع والمبادرات",
      "nav.skills": "المهارات والخبرات",
      "nav.faq": "الأسئلة الشائعة",
      "nav.contact": "تواصل معي",
      "nav.cta": "طلب اجتماع / تواصل",

      "hero.badge": "تطوير الأعمال والتسويق الرقمي · HexoVerse",
      "hero.title": "نحو نمو أعمال مدروس،<br><span class=\"text-gradient\">وحلول تقنية ترتقي بالواقع.</span>",
      "hero.desc": "أنا <strong>محمد عبد الفتاح الصقور</strong>، أخصائي تطوير أعمال وتسويق رقمي فلسطيني مقيم في فلسطين، وخريج إدارة الأعمال والتسويق الإلكتروني من جامعة الخوارزمي في الأردن. أتولى قيادة جوانب تطوير الأعمال والتسويق في شركة <strong>HexoVerse</strong> الناشئة، حيث أركز على دراسة الأسواق، صياغة مقترحات المشاريع والعروض التقديمية المؤسسية، وتخطيط الحملات الرقمية الفعالة.",
      "hero.btnProjects": "استعراض المشاريع",
      "hero.btnContact": "تواصل مباشر",
      "hero.btnCV": "ملف السيرة الذاتية (LaTeX)",
      "hero.metric1": "مشاريع تقنية صاعدة في HexoVerse",
      "hero.metric2": "فاقد مائي موثق بتجربة رَواء الميدانية",
      "hero.metric3": "جاهزية عروض ومقترحات الشراكة",
      "hero.cardName": "محمد الصقور",
      "hero.cardRole": "مسؤول تطوير الأعمال والتسويق",

      "about.tag": "نبذة مهنية وأكاديمية",
      "about.title": "الكفاءة الأكاديمية والعمل الواقعي",
      "about.desc": "الجمع بين الأساس الأكاديمي الرصين في إدارة الأعمال والتسويق، والعمل الميداني المباشر في بيئة الشركات التقنية الناشئة.",
      "about.eduTitle": "الخلفية الأكاديمية",
      "about.eduBody": "خريج درجة البكالوريوس في <strong>إدارة الأعمال والتسويق الإلكتروني (Digital Marketing)</strong> من <strong>كلية الخوارزمي الجامعية التقنية (KUTC)</strong> في العاصمة الأردنية عمّان. شملت دراستي: الإدارة الاستراتيجية، إعداد دراسات الجدوى وتقييم المشاريع، بحوث التسويق وسلوك المستهلك، والاتصالات التسويقية المتكاملة.",
      "about.eduBadge": "كلية الخوارزمي · الأردن",
      "about.roleTitle": "الدور في HexoVerse",
      "about.roleBody": "العمل مع فريق <strong>HexoVerse</strong> لتطوير النماذج التجارية للمشاريع، وإعداد العروض التقديمية للمستثمرين والجهات الرسمية، ودراسة السوق للوصول إلى الملاءمة المثلى بين المنتج والسوق (Product-Market Fit).",
      "about.roleBadge": "HexoVerse Co. · 2024 - الآن",
      "about.approachTitle": "تجهيز الشراكات المؤسسية",
      "about.approachBody": "صياغة مقترحات الشراكة الموجهة للمؤسسات العامة والمجالس البلدية والهيئات الاقتصادية، وبناء مذكرات التفاهم وحزم الرعاية لتوفير أسس تواصل رسمية ومحترمة عند عقد الاجتماعات.",
      "about.approachBadge": "B2B & B2G Proposals",

      "projects.tag": "محفظة الأعمال في HexoVerse",
      "projects.title": "مشاريع نقود تطويرها وتسويقها",
      "projects.desc": "مجموعة من الحلول التقنية المبتكرة التي نعمل على إعداد دراسات جدواها، ونماذج تسييلها، وعروضها الرسمية.",
      
      "projects.rawaaTitle": "مشروع رَواء (Rawaa) — منظومة إدارة وتوزيع المياه الذكية",
      "projects.rawaaOverview": "نظام ذكي متكامل يربط بين حساسات إنترنت الأشياء (IoT) على شبكات المياه، ومنصة سحابية متقدمة وتطبيق مواطنين، لمساعدة البلديات على جدولة التوزيع العادل وكشف التسريبات وتقليل الفاقد المائي.",
      "projects.rawaaRoleTitle": "دور محمد عبد الفتاح الصقور في المشروع:",
      "projects.rawaaPoint1": "إعداد العروض التقديمية والملخصات التنفيذية الموجهة للمجالس البلدية والجهات الحكومية لتمهيد اللقاءات والاتفاقيات.",
      "projects.rawaaPoint2": "متابعة وتوثيق نتائج التجربة الميدانية الأولى في قرية نوبا، والتي أظهرت تقليلاً للفاقد بنسبة تصل لـ 30% وانخفاضاً كبيراً في شكاوى المواطنين.",
      "projects.rawaaPoint3": "تصميم هيكل الاشتراكات الشهرية والسنوية لنظام SaaS وحزم الحساسات للبلديات.",
      "projects.visitWebsite": "زيارة الموقع الرسمي (rawaa.net)",
      "projects.readCaseStudy": "قراءة دراسة الحالة (Case Study)",

      "projects.namouTitle": "مشروع نُمو (Namou) — وكالة إعلانية ذكية في جيبك للمشاريع الصغيرة",
      "projects.namouOverview": "منصة تسويق بالذكاء الاصطناعي تعمل عبر محادثة تيليجرام، تمكّن أصحاب المتاجر المنزلية والشركات الصغيرة من تصميم وكتابة ونشر إعلانات احترافية خلال دقيقة واحدة وبدون تكاليف باهظة.",
      "projects.namouRoleTitle": "دور محمد عبد الفتاح الصقور في المشروع:",
      "projects.namouPoint1": "دراسة التحديات الواقعية التي تواجه أصحاب المشاريع الصغيرة في السوق المحلي في تصميم وكتابة الإعلانات.",
      "projects.namouPoint2": "تحديد استراتيجية الوصول الأولى (GTM) لأصحاب المتاجر الإلكترونية في فلسطين والأردن.",
      "projects.namouPoint3": "صياغة مسودات الشراكة المقترحة للتعاون مع حاضنات الأعمال وشبكات دعم الرياديين.",
      "projects.visitNamou": "الموقع الرسمي (namou.online)",

      "projects.fathTitle": "مشروع فَذ (Fath) — منصة المسابقات والتعليم التفاعلي",
      "projects.fathOverview": "مبادرة ومنظومة تعليمية تدمج بين طاولات المسابقات التفاعلية وأزرار الإجابة السريعة، والتطبيقات الرقمية لإقامة بطولات ومسابقات تفاعلية في المدارس والجامعات والفعاليات المجتمعية.",
      "projects.fathRoleTitle": "دور محمد عبد الفتاح الصقور في المشروع:",
      "projects.fathPoint1": "إعداد ملفات وحزم الرعاية التجارية (Sponsorship Packages) للمؤسسات والشركات الراغبة في دعم الفعاليات.",
      "projects.fathPoint2": "تنسيق النشر والتغطية التسويقية الرقمية عبر منصات التواصل (TikTok & Instagram).",
      "projects.fathPoint3": "تجهيز عروض الطرح للمؤسسات الأكاديمية والجامعات لتنظيم البطولات الدورية.",
      "projects.visitFath": "الموقع الرسمي (fath-app.com)",
      "projects.fathSponsors": "بوابة الرعاة (Sponsors Portal)",

      "skills.tag": "المهارات والخبرات العملية",
      "skills.title": "كفاءات متكاملة لإنجاح المبادرات",
      "skills.desc": "مجالات التركيز التي يوظفها محمد في بناء وتطوير المشاريع وتسويقها بكفاءة.",
      "skills.cat1": "تطوير الأعمال والتخطيط",
      "skills.c1_1": "إعداد العروض التقديمية والملخصات التنفيذية (Pitch Decks)",
      "skills.c1_2": "صياغة مقترحات الشراكة المؤسسية والعقود الأولية",
      "skills.c1_3": "دراسات الجدوى المبدئية ونماذج الإيرادات والتسعير",
      "skills.c1_4": "تحليل المنافسين وحجم الفرص السوقية (Market Sizing)",
      "skills.cat2": "التسويق الرقمي وإدارة الحملات",
      "skills.c2_1": "إدارة الإعلانات الممولة عبر منصات Meta (فيسبوك وإنستغرام)",
      "skills.c2_2": "تخطيط جداول المحتوى وصياغة الرسائل الإعلانية المقنعة",
      "skills.c2_3": "تحديد وتقسيم الجماهير المستهدفة (Audience Segmentation)",
      "skills.c2_4": "متابعة الحملات على منصة TikTok و Google Ads الأساسية",
      "skills.cat3": "الأدوات والتحليل الرقمي",
      "skills.c3_1": "Meta Business Suite & Ads Manager",
      "skills.c3_2": "Google Analytics 4 (GA4) لمتابعة حركة الزوار",
      "skills.c3_3": "تصميم المواد والعروض عبر Canva و PowerPoint",
      "skills.c3_4": "تحليل البيانات والجداول باستخدام Microsoft Excel",
      "skills.cat4": "التواصل والعمل الجماعي",
      "skills.c4_1": "مهارات العرض والإلقاء وإدارة الاجتماعات الرسمية",
      "skills.c4_2": "التنسيق الفعّال بين الفريق البرمجي والفريق التسويقي",
      "skills.c4_3": "التواصل المباشر مع العملاء وأخذ التغذية الراجعة",
      "skills.c4_4": "اللغة العربية (الأم) واللغة الإنجليزية (مهنية للعمل)",

      "faq.tag": "إجابات سريعة ومباشرة",
      "faq.title": "الأسئلة الشائعة (FAQ)",
      "faq.desc": "معلومات موثوقة ومباشرة تم تنظيمها لمحركات البحث والذكاء الاصطناعي (AEO & GEO).",
      "faq.q1": "من هو محمد عبد الفتاح الصقور؟ وما هو دوره الحالي؟",
      "faq.a1": "محمد عبد الفتاح الصقور هو أخصائي تطوير أعمال وتسويق رقمي فلسطيني، مقيم في فلسطين، وتخرج من كلية الخوارزمي في عمّان (الأردن) بتخصص إدارة الأعمال والتسويق الإلكتروني. يشغل حالياً منصب مسؤول تطوير الأعمال والتسويق في شركة HexoVerse التقنية الناشئة، حيث يتولى دراسة السوق، إعداد عروض المشاريع، والتنسيق التسويقي للحلول الرقمية.",
      "faq.q2": "ما هي طبيعة شركة HexoVerse والمشاريع التي تعمل عليها؟",
      "faq.a2": "شركة HexoVerse هي شركة تقنية ناشئة عمرها سنتان، تركز على ابتكار وتطوير منصات برمجية ذكية ونظم SaaS و IoT؛ ومن أبرز مشاريعها: نظام \"رَواء\" لإدارة شبكات المياه، ومنصة \"نُمو\" للإعلانات المؤتمتة بالذكاء الاصطناعي، ومبادرة \"فَذ\" للتعليم التفاعلي.",
      "faq.q3": "كيف يجهز محمد الصقور لاجتماعات الشراكة الرسمية والمؤسسية؟",
      "faq.a3": "يقوم محمد بإعداد عروض تقديمية واضحة (Pitch Decks)، ومذكرات ملخصات تنفيذية، ودراسات جدوى اقتصادية واقعية تبرز الأثر العملي والتكاليف والعوائد، لتكون جاهزة للمناقشة في الاجتماعات الرسمية مع الجهات الحكومية والبلديات ومؤسسات القطاع الخاص.",
      "faq.q4": "ما هو المؤهل الأكاديمي لمحمد الصقور؟",
      "faq.a4": "يحمل محمد درجة البكالوريوس في إدارة الأعمال والتسويق الإلكتروني من كلية الخوارزمي الجامعية التقنية (KUTC) في الأردن، مع تركيز أكاديمي على الإدارة الاستراتيجية، إعداد دراسات الجدوى، وبحوث التسويق.",

      "contact.tag": "تواصل مهني ومباشر",
      "contact.title": "يسعدني التواصل والتعاون المشترك",
      "contact.desc": "سواء كنت مهتماً بمشاريع HexoVerse أو ترغب في مناقشة فرص شراكة عمل أو طلب عرض تقديمي رسمي، أنا على أتم الاستعداد للتواصل الفعّال.",
      "contact.emailLabel": "البريد الإلكتروني المهني",
      "contact.companyLabel": "الشركة",
      "contact.locLabel": "الموقع",
      "contact.locValue": "فلسطين",
      "contact.formTitle": "إرسال استفسار سريع",
      "contact.formSub": "سيتم توجيه رسالتك مباشرة لبريد محمد الصقور.",
      "contact.fName": "الاسم الكامل / الجهة",
      "contact.fEmail": "البريد الإلكتروني",
      "contact.fSubject": "موضوع الاستفسار",
      "contact.subOpt1": "شراكة عمل مع HexoVerse",
      "contact.subOpt2": "استفسار عن مشروع رَواء",
      "contact.subOpt3": "استفسار عن مشروع نُمو",
      "contact.subOpt4": "استفسار عن مشروع فَذ",
      "contact.subOpt5": "تواصل عام",
      "contact.fMessage": "نص الرسالة",
      "contact.fSend": "إرسال الرسالة الآن"
    },

    en: {
      "nav.name": "Mohammad Abdelfattah Al-Sqoor",
      "nav.role": "HexoVerse · Business & Marketing",
      "nav.about": "About",
      "nav.projects": "Projects & Initiatives",
      "nav.skills": "Skills & Competencies",
      "nav.faq": "FAQ",
      "nav.contact": "Contact",
      "nav.cta": "Request Meeting / Contact",

      "hero.badge": "Business Development & Digital Marketing · HexoVerse",
      "hero.title": "Strategic Business Growth,<br><span class=\"text-gradient\">Driven by Real-World Tech.</span>",
      "hero.desc": "I am <strong>Mohammad Abdelfattah Al-Sqoor</strong>, a Palestinian business development and digital marketing specialist based in Palestine, and a Business Administration & Digital Marketing graduate from Khwarizmi University Technical College in Jordan. Currently leading Business Development and Marketing at <strong>HexoVerse</strong>, an emerging tech startup where I focus on market research, institutional proposal development, executive pitch decks, and high-impact digital campaigns.",
      "hero.btnProjects": "Explore Projects",
      "hero.btnContact": "Direct Contact",
      "hero.btnCV": "CV Source File (LaTeX)",
      "hero.metric1": "Emerging Tech Ventures at HexoVerse",
      "hero.metric2": "Documented Water Loss Reduction (Rawaa Pilot)",
      "hero.metric3": "Institutional Proposal & Deck Readiness",
      "hero.cardName": "Mohammad Al-Sqoor",
      "hero.cardRole": "Business Development & Marketing Lead",

      "about.tag": "Professional & Academic Background",
      "about.title": "Academic Rigor & Hands-on Execution",
      "about.desc": "Combining a solid foundation in business management and e-marketing with agile execution in emerging tech startup environments.",
      "about.eduTitle": "Academic Background",
      "about.eduBody": "Holds a Bachelor's Degree in <strong>Business Administration & Digital Marketing (E-Marketing)</strong> from <strong>Khwarizmi University Technical College (KUTC)</strong> in Amman, Jordan. Coursework focused on Strategic Management, Feasibility Studies & Project Appraisal, Marketing Research & Consumer Behavior, and Integrated Marketing Communications.",
      "about.eduBadge": "Khwarizmi University · Jordan",
      "about.roleTitle": "Role at HexoVerse",
      "about.roleBody": "Working with the <strong>HexoVerse</strong> core team to architect sustainable commercial models, design executive presentations for partners and investors, and conduct market research to achieve Product-Market Fit.",
      "about.roleBadge": "HexoVerse Co. · 2024 - Present",
      "about.approachTitle": "Institutional Partnership Prep",
      "about.approachBody": "Authoring structured business proposals, MoUs, and sponsorship packages tailored for public authorities, municipalities, and enterprise partners, ensuring credibility and clarity during official meetings.",
      "about.approachBadge": "B2B & B2G Proposals",

      "projects.tag": "HexoVerse Venture Portfolio",
      "projects.title": "Key Products We Market & Grow",
      "projects.desc": "A portfolio of high-impact technology solutions where I manage commercial feasibility, pricing architectures, and official proposals.",
      
      "projects.rawaaTitle": "Rawaa (رَواء) — Smart Water Distribution & IoT System",
      "projects.rawaaOverview": "An integrated smart water management solution connecting IoT sensors on distribution networks with a cloud platform and mobile app to assist municipalities in fair scheduling, leak detection, and water conservation.",
      "projects.rawaaRoleTitle": "Mohammad's Commercial Role:",
      "projects.rawaaPoint1": "Authored commercial proposals and executive summaries tailored for municipal councils and public utility departments.",
      "projects.rawaaPoint2": "Documented field test metrics from the initial pilot in Nuba village, demonstrating a 30% loss reduction and significant drops in citizen inquiries.",
      "projects.rawaaPoint3": "Structured tiered SaaS subscription tiers and hardware sensor procurement models for municipalities.",
      "projects.visitWebsite": "Official Website (rawaa.net)",
      "projects.readCaseStudy": "Read Project Case Study",

      "projects.namouTitle": "Namou (نمو) — AI Ad Agency in Your Pocket for MSMEs",
      "projects.namouOverview": "A conversational generative-AI marketing platform deployed via Telegram, enabling small business owners, home stores, and startups to generate localized ad visuals and persuasive copy in under 60 seconds.",
      "projects.namouRoleTitle": "Mohammad's Commercial Role:",
      "projects.namouPoint1": "Researched operational challenges faced by 100+ local micro-businesses regarding advertising costs and design skills gaps.",
      "projects.namouPoint2": "Defined the early go-to-market (GTM) outreach strategy for e-commerce sellers in Palestine and Jordan.",
      "projects.namouPoint3": "Drafted collaboration proposals for regional business incubators and entrepreneurial networks.",
      "projects.visitNamou": "Official Website (namou.online)",

      "projects.fathTitle": "Fath (فذ) — Gamified Interactive Edutainment Platform",
      "projects.fathOverview": "An interactive educational competition ecosystem combining physical buzzer tables with digital applications for schools, universities, and community tournaments.",
      "projects.fathRoleTitle": "Mohammad's Commercial Role:",
      "projects.fathPoint1": "Designed corporate sponsorship packages for private enterprises and institutional event sponsors.",
      "projects.fathPoint2": "Coordinated digital marketing and video coverage across TikTok and Instagram for interactive quiz competitions.",
      "projects.fathPoint3": "Prepared introductory pitch decks for academic councils and universities.",
      "projects.visitFath": "Official Website (fath-app.com)",
      "projects.fathSponsors": "Sponsors Portal",

      "skills.tag": "Core Competencies",
      "skills.title": "Integrated Business & Marketing Skills",
      "skills.desc": "Key professional skills Mohammad leverages to build, validate, and commercialize startup ventures.",
      "skills.cat1": "Business Development & Planning",
      "skills.c1_1": "Executive Pitch Deck & Presentation Design",
      "skills.c1_2": "Drafting Institutional Proposals & Preliminary MoUs",
      "skills.c1_3": "Commercial Feasibility Studies & Pricing Models",
      "skills.c1_4": "Competitor Benchmarking & Market Opportunity Sizing",
      "skills.cat2": "Digital Marketing & Campaigns",
      "skills.c2_1": "Paid Ad Management via Meta (Facebook & Instagram)",
      "skills.c2_2": "Content Calendar Planning & Compelling Copywriting",
      "skills.c2_3": "Audience Segmentation & Funnel Structuring",
      "skills.c2_4": "Campaign Tracking on TikTok and Google Ads Basics",
      "skills.cat3": "Analytics & Productivity Tools",
      "skills.c3_1": "Meta Business Suite & Ads Manager",
      "skills.c3_2": "Google Analytics 4 (GA4) Traffic Insights",
      "skills.c3_3": "Presentation & Collateral Design via Canva & PowerPoint",
      "skills.c3_4": "Data Modeling and Spreadsheets with Microsoft Excel",
      "skills.cat4": "Professional Communication",
      "skills.c4_1": "Stakeholder Presentation & Professional Protocol",
      "skills.c4_2": "Cross-Functional Alignment Between Tech & Business Teams",
      "skills.c4_3": "Direct Customer Interviews & Feedback Synthesis",
      "skills.c4_4": "Arabic (Native) & English (Professional Working)",

      "faq.tag": "Direct Answers for Search & AI",
      "faq.title": "Frequently Asked Questions (FAQ)",
      "faq.desc": "Structured and verified information formatted for Answer Engines (AEO) and Generative Search (GEO).",
      "faq.q1": "Who is Mohammad Abdelfattah Al-Sqoor and what is his current role?",
      "faq.a1": "Mohammad Abdelfattah Al-Sqoor is a Palestinian business development and digital marketing specialist based in Palestine. He graduated in Business Administration & Digital Marketing from Khwarizmi University Technical College in Amman, Jordan, and currently serves as the Business Development and Marketing Lead at HexoVerse.",
      "faq.q2": "What is HexoVerse and what products does the team build?",
      "faq.a2": "HexoVerse is an agile, 2-year-old tech startup developing smart software, SaaS, and IoT solutions. Key initiatives include Rawaa (smart municipal water management), Namou (AI ad generator for SMEs on Telegram), and Fath (interactive edutainment platform).",
      "faq.q3": "How does Mohammad prepare for official and institutional meetings?",
      "faq.a3": "Mohammad crafts clear executive pitch decks, institutional proposals, and practical feasibility studies detailing operational value, ROI, and technical roadmaps, ensuring prepared dialogue for municipal and public-sector discussions.",
      "faq.q4": "What is Mohammad Al-Sqoor's educational background?",
      "faq.a4": "He holds a Bachelor's Degree in Business Administration & Digital Marketing from Khwarizmi University Technical College (KUTC) in Jordan, with coursework covering Strategic Management, Feasibility Studies, and Market Research.",

      "contact.tag": "Professional Contact",
      "contact.title": "Let's Connect & Discuss Collaborations",
      "contact.desc": "Whether you are interested in HexoVerse's digital products, exploring strategic partnerships, or requesting a formal proposal, I am ready to connect.",
      "contact.emailLabel": "Professional Email",
      "contact.companyLabel": "Company",
      "contact.locLabel": "Location",
      "contact.locValue": "Palestine",
      "contact.formTitle": "Send an Inquiry",
      "contact.formSub": "Your message will be sent directly to Mohammad Al-Sqoor.",
      "contact.fName": "Full Name / Organization",
      "contact.fEmail": "Email Address",
      "contact.fSubject": "Subject",
      "contact.subOpt1": "Business Partnership with HexoVerse",
      "contact.subOpt2": "Inquiry about Rawaa Project",
      "contact.subOpt3": "Inquiry about Namou Project",
      "contact.subOpt4": "Inquiry about Fath Project",
      "contact.subOpt5": "General Communication",
      "contact.fMessage": "Message Content",
      "contact.fSend": "Send Message Now"
    }
  };

  // ==========================================
  // Language Management Engine
  // ==========================================
  const langToggleBtn = document.getElementById('langToggleBtn');
  const langLabel = document.getElementById('langLabel');
  
  // Determine initial language: check URL (?lang=), then localStorage, fallback to 'ar'
  const urlParams = new URLSearchParams(window.location.search);
  let currentLang = urlParams.get('lang') || localStorage.getItem('preferredLang') || 'ar';
  if (currentLang !== 'ar' && currentLang !== 'en') {
    currentLang = 'ar';
  }

  function setLanguage(lang) {
    currentLang = lang;
    localStorage.setItem('preferredLang', lang);

    const isAr = (lang === 'ar');
    document.documentElement.lang = isAr ? 'ar' : 'en';
    document.documentElement.dir = isAr ? 'rtl' : 'ltr';

    // Update Language Toggle Button Label
    if (langLabel) {
      langLabel.textContent = isAr ? 'English' : 'العربية';
    }

    // Translate all elements with data-i18n
    const elements = document.querySelectorAll('[data-i18n]');
    elements.forEach(el => {
      const key = el.getAttribute('data-i18n');
      if (translations[lang] && translations[lang][key]) {
        el.innerHTML = translations[lang][key];
      }
    });

    // Update Input Placeholders
    const nameInput = document.getElementById('name');
    const msgTextarea = document.getElementById('message');
    if (nameInput) {
      nameInput.placeholder = isAr ? 'مثال: م. أحمد أو اسم المؤسسة' : 'e.g., Eng. Ahmad or Company Name';
    }
    if (msgTextarea) {
      msgTextarea.placeholder = isAr ? 'اكتب تفاصيل الاستفسار أو موعد الاجتماع المقترح...' : 'Enter your inquiry details or meeting proposal...';
    }
  }

  // Initial Language Setup
  setLanguage(currentLang);

  // Toggle button event listener
  if (langToggleBtn) {
    langToggleBtn.addEventListener('click', () => {
      const nextLang = (currentLang === 'ar') ? 'en' : 'ar';
      setLanguage(nextLang);
    });
  }

  // ==========================================
  // Mobile Menu Drawer
  // ==========================================
  const mobileMenuBtn = document.getElementById('mobileMenuBtn');
  const navMenu = document.getElementById('navMenu');

  if (mobileMenuBtn && navMenu) {
    mobileMenuBtn.addEventListener('click', () => {
      const isActive = navMenu.classList.toggle('mobile-active');
      mobileMenuBtn.setAttribute('aria-expanded', isActive ? 'true' : 'false');
    });

    // Close mobile menu on link click
    const navLinks = navMenu.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
      link.addEventListener('click', () => {
        navMenu.classList.remove('mobile-active');
        mobileMenuBtn.setAttribute('aria-expanded', 'false');
      });
    });
  }

  // ==========================================
  // Contact Form Handling (Pre-filled Mailto)
  // ==========================================
  const contactForm = document.getElementById('contactForm');
  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const name = document.getElementById('name').value;
      const email = document.getElementById('email').value;
      const subject = document.getElementById('subject').value;
      const message = document.getElementById('message').value;

      const mailSubject = encodeURIComponent(`[HexoVerse Inquiry] ${subject} - from ${name}`);
      const mailBody = encodeURIComponent(`Name / Organization: ${name}\nEmail: ${email}\nSubject: ${subject}\n\nMessage:\n${message}`);

      window.location.href = `mailto:info@mohammadsqour.com?subject=${mailSubject}&body=${mailBody}`;
    });
  }

  // ==========================================
  // Active Navigation Link on Scroll
  // ==========================================
  const sections = document.querySelectorAll('section[id]');
  window.addEventListener('scroll', () => {
    const scrollY = window.pageYOffset;

    sections.forEach(current => {
      const sectionHeight = current.offsetHeight;
      const sectionTop = current.offsetTop - 120;
      const sectionId = current.getAttribute('id');
      const targetNav = document.querySelector(`.nav-menu a[href*="${sectionId}"]`);

      if (targetNav) {
        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
          targetNav.classList.add('active');
        } else {
          targetNav.classList.remove('active');
        }
      }
    });
  });

});
