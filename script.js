/**
 * Mohammad Al-Sqour - Official Portfolio Script
 * Bilingual Engine (AR/EN), RTL/LTR Switching, UI Interactions, and AEO/SEO support.
 */

document.addEventListener('DOMContentLoaded', () => {

  // ==========================================
  // Bilingual Translation Dictionary
  // ==========================================
  const translations = {
    ar: {
      "nav.name": "محمد الصقور",
      "nav.role": "HEXO Verse · تطوير الأعمال والتسويق",
      "nav.about": "عن محمد",
      "nav.philosophy": "ما وراء المشاريع",
      "nav.projects": "المشاريع",
      "nav.focus": "مجالات التركيز",
      "nav.faq": "الأسئلة الشائعة",
      "nav.contact": "تواصل معي",
      "nav.cta": "طلب تواصل",

      "hero.badge": "محمد الصقور — مسؤول تطوير الأعمال والتسويق · HEXO Verse",
      "hero.title": "نبني ما يصنع فرقًا في المستقبل.",
      "hero.desc": "من مشكلات اليوم تولد فرص الغد؛ نكتشف ما يستحق أن يُبنى، ونحوّل الأفكار الواعدة إلى مشاريع تصنع قيمة حقيقية وتترك أثرًا يمتد إلى المستقبل.",
      "hero.btnProjects": "استعراض المشاريع",
      "hero.btnContact": "تواصل مباشر",
      "hero.btnCV": "تحميل السيرة الذاتية (PDF)",
      "hero.metric1": "مشاريع تقنية صاعدة في HEXO Verse",
      "hero.metric2": "مشاريع تقنية مختلفة المجالات",
      "hero.metric3": "شراكات ومسارات مؤسسية جاهزة",
      "hero.cardName": "محمد الصقور",
      "hero.cardRole": "مسؤول تطوير الأعمال والتسويق · HEXO Verse",

      "about.tag": "نبذة مهنية وأكاديمية",
      "about.title": "من المعرفة إلى صناعة الواقع",
      "about.desc": "خلفية في إدارة الأعمال والتسويق، وتجربة عملية في تأسيس المشاريع وتطوير الأفكار في بيئة تقنية ناشئة، مع تركيز على اكتشاف الفرص وتحويلها إلى مشاريع قابلة للنمو وصناعة الأثر.",
      "about.eduTitle": "الخلفية الأكاديمية",
      "about.eduBody": "خلفية أكاديمية في إدارة الأعمال والتسويق الإلكتروني، تجمع بين التفكير الاستراتيجي، دراسة الجدوى وتقييم المشاريع، فهم الأسواق وسلوك المستهلك، وبناء الاستراتيجيات التسويقية — معرفة تُترجم إلى قرارات وممارسات في بيئة الأعمال والمشاريع الناشئة.",
      "about.eduBadge": "كلية الخوارزمي · الأردن",
      "about.roleTitle": "الدور في HEXO Verse",
      "about.roleBody": "<strong>محمد الصقور — مسؤول تطوير الأعمال والتسويق</strong><br>يمتد الدور من اكتشاف الفرص وتطوير الأفكار إلى دراسة الأسواق، وتشكيل نماذج المشاريع، وتطوير العلاقات والشراكات، وصياغة الاستراتيجيات التي تدعم إطلاق الشركات الناشئة والمشاريع التقنية وربطها بالاحتياج الحقيقي في السوق.",
      "about.roleBadge": "HEXO Verse · 2024 - الآن",
      "about.marketTitle": "العلاقات والأسواق",
      "about.marketBody": "تطوير العلاقات وفتح مسارات جديدة للمشاريع مع الجهات الحكومية والمؤسسات والشركات والأسواق الاستهلاكية، انطلاقًا من فهم احتياجات كل سوق وبناء فرص تعاون تدعم وصول المشاريع وانتشارها.<br><strong>B2G &amp; B2B &amp; B2C</strong>",
      "about.marketBadge": "B2G · B2B · B2C",

      "phil.tag": "ما وراء المشاريع",
      "phil.title": "الأفكار لا تبدأ من التقنية، بل من المشكلة",
      "phil.desc": "كل مشروع يبدأ بسؤال: ما الذي يمكن أن يكون أفضل؟ من هنا تبدأ رحلة البحث عن المشكلة، فهم السوق، اكتشاف الفرصة، ثم تحويلها إلى فكرة قابلة للبناء والنمو. في HEXO Verse تلتقي هذه الرؤية مع التقنية لتطوير مشاريع وشركات ناشئة تستجيب لاحتياجات حقيقية.",
      "phil.qTitle": "ماذا يميز هذه الرحلة؟",
      "phil.step1Title": "فهم الواقع",
      "phil.step1Desc": "الاقتراب من المشكلة قبل التفكير في الحل.",
      "phil.step2Title": "اكتشاف الفرص",
      "phil.step2Desc": "البحث عن المساحات التي يمكن أن تتحول فيها المشكلة إلى قيمة.",
      "phil.step3Title": "تحويل الفكرة",
      "phil.step3Desc": "تشكيل الفكرة إلى مشروع واضح له نموذج ومسار نحو السوق.",
      "phil.step4Title": "صناعة الأثر",
      "phil.step4Desc": "بناء حلول لا تكتفي بأن تعمل، بل تضيف قيمة يمكن قياسها والاستمرار بها.",

      "projects.tag": "محفظة الأعمال في HEXO Verse",
      "projects.title": "مشاريع نقود تطويرها وتسويقها",
      "projects.desc": "مجموعة من الحلول التقنية المبتكرة التي نعمل على إعداد دراسات جدواها، ونماذج تسييلها، وعروضها الرسمية.",

      "projects.rawaaTitle": "مشروع رَواء (Rawaa) — منظومة إدارة وتوزيع المياه الذكية",
      "projects.rawaaOverview": "نظام ذكي متكامل يربط بين حساسات إنترنت الأشياء (IoT) على شبكات المياه، ومنصة سحابية متقدمة وتطبيق مواطنين، لمساعدة البلديات على جدولة التوزيع العادل وكشف التسريبات وتقليل الفاقد المائي.",
      "projects.rawaaRoleTitle": "دور محمد الصقور في المشروع:",
      "projects.rawaaRoleIntro": "المساهمة في تطوير رواء من منظور الأعمال والسوق، وتشكيل مسارها نحو التبني المؤسسي والتوسع؛ بدءًا من فهم احتياجات البلديات والسوق، مرورًا بتطوير العروض والنماذج التجارية، ووصولًا إلى بناء العلاقات وتهيئة فرص الشراكة التي تدعم انتقال المشروع من التجربة إلى التطبيق والنمو.",
      "projects.rawaaPoint1": "دراسة احتياجات البلديات وسلوك المشتركين وتطوير نماذج التسعير وحزم الاشتراكات السحابية (SaaS).",
      "projects.rawaaPoint2": "متابعة وتوثيق نتائج التجربة الميدانية الأولى في قرية نوبا، والتي أظهرت تقليلاً للفاقد بنسبة تصل لـ 30%.",
      "projects.rawaaPoint3": "بناء العلاقات المؤسسية (B2G) وتهيئة فرص الشراكة التي تدعم انتقال المشروع من التجربة إلى التطبيق والنمو.",
      "projects.visitWebsite": "زيارة الموقع الرسمي (rawaa.net)",
      "projects.readCaseStudy": "قراءة دراسة الحالة (Case Study)",

      "projects.namouTitle": "مشروع نُمو (Namou) — وكالة إعلانية ذكية في جيبك للمشاريع الصغيرة",
      "projects.namouOverview": "منصة تسويق بالذكاء الاصطناعي تعمل عبر محادثة تيليجرام، تمكّن أصحاب المتاجر المنزلية والشركات الصغيرة من تصميم وكتابة ونشر إعلانات احترافية خلال دقيقة واحدة وبدون تكاليف باهظة.",
      "projects.namouRoleTitle": "دور محمد الصقور في المشروع:",
      "projects.namouPoint1": "دراسة التحديات الواقعية التي تواجه أصحاب المشاريع الصغيرة في السوق المحلي في تصميم وكتابة الإعلانات.",
      "projects.namouPoint2": "تحديد استراتيجية الوصول الأولى (GTM) لأصحاب المتاجر الإلكترونية في فلسطين والأردن.",
      "projects.namouPoint3": "صياغة مسودات الشراكة المقترحة للتعاون مع حاضنات الأعمال وشبكات دعم الرياديين.",
      "projects.visitNamou": "الموقع الرسمي (namou.online)",

      "projects.fathTitle": "مشروع فَذ (Fath) — منصة المسابقات والتعليم التفاعلي",
      "projects.fathOverview": "مبادرة ومنظومة تعليمية تدمج بين طاولات المسابقات التفاعلية وأزرار الإجابة السريعة، والتطبيقات الرقمية لإقامة بطولات ومسابقات تفاعلية في المدارس والجامعات والفعاليات المجتمعية.",
      "projects.fathRoleTitle": "دور محمد الصقور في المشروع:",
      "projects.fathPoint1": "إعداد ملفات وحزم الرعاية التجارية (Sponsorship Packages) للمؤسسات والشركات الراغبة في دعم الفعاليات.",
      "projects.fathPoint2": "تنسيق النشر والتغطية التسويقية الرقمية عبر منصات التواصل (TikTok & Instagram).",
      "projects.fathPoint3": "تجهيز عروض الطرح للمؤسسات الأكاديمية والجامعات لتنظيم البطولات الدورية.",
      "projects.visitFath": "الموقع الرسمي (fath-app.com)",
      "projects.fathSponsors": "بوابة الرعاة (Sponsors Portal)",
      "projects.moreTag": "منظومة الابتكار في HEXO Verse",
      "projects.moreTitle": "هل ترغب في استكشاف المزيد من المشاريع والشركات الناشئة؟",
      "projects.moreDesc": "نعمل في HEXO Verse على بناء وتطوير أكثر من 15 مشروعاً تقنياً وحلولاً ذكية في مجالات إنترنت الأشياء والذكاء الاصطناعي والحلول الرقمية ونماذج B2G و B2B.",
      "projects.moreBtn": "عرض جميع مشاريع HEXO Verse",

      "focus.tag": "مجالات التركيز",
      "focus.title": "منهجية القيادة وبناء القيمة",
      "focus.desc": "محاور رئيسية تجمع بين التفكير الاستراتيجي، والقدرة على تحويل التحديات المعقدة إلى مشاريع مستدامة وقابلة للنمو.",
      "focus.cat1Title": "بناء المشاريع",
      "focus.cat1Desc": "من اكتشاف المشكلة والفرصة، إلى تشكيل الفكرة ونموذج العمل ومسارها نحو السوق.",
      "focus.cat2Title": "الاستراتيجية وتطوير الأعمال",
      "focus.cat2Desc": "فهم الأسواق، تقييم الفرص، تطوير العلاقات والشراكات، وصياغة المسارات التي تساعد المشاريع على التقدم والنمو.",
      "focus.cat3Title": "التسويق والنمو",
      "focus.cat3Desc": "بناء الاستراتيجيات التي تربط المشاريع بجمهورها، وتحوّل القيمة التي يقدمها المشروع إلى حضور ووصول ونمو.",
      "focus.cat4Title": "القيادة والتواصل",
      "focus.cat4Desc": "تحويل الرؤية إلى اتجاه واضح، وإدارة الحوار مع الفرق والشركاء والجهات المختلفة للوصول إلى قرارات ومسارات عملية.",

      "faq.tag": "إجابات سريعة ومباشرة",
      "faq.title": "الأسئلة الشائعة (FAQ)",
      "faq.desc": "معلومات موثوقة ومباشرة تم تنظيمها لمحركات البحث والذكاء الاصطناعي (AEO & GEO).",
      "faq.q1": "من هو محمد الصقور؟ وما هو دوره في HEXO Verse؟",
      "faq.a1": "محمد الصقور هو خريج إدارة أعمال وتسويق إلكتروني، ومسؤول تطوير الأعمال والتسويق في شركة HEXO Verse. يمتد دوره من اكتشاف الفرص وتطوير الأفكار إلى دراسة الأسواق، وتشكيل نماذج المشاريع، وتطوير العلاقات والشراكات المؤسسية (B2G & B2B & B2C).",
      "faq.q2": "ما هي رؤية وفلسفة محمد الصقور في بناء المشاريع؟",
      "faq.a2": "تنطلق الفلسفة من أن الأفكار لا تبدأ من التقنية، بل من المشكلة. يبدأ كل مشروع بفهم الواقع والاقتراب من التحدي، واكتشاف المساحات القابلة لخلق القيمة، ثم تحويل الفكرة إلى مشروع ذي نموذج عمل مستدام، وصناعة أثر ملموس يمتد إلى المستقبل.",
      "faq.q3": "ما هو دور محمد الصقور في مشروع رَواء (Rawaa)؟",
      "faq.a3": "المساهمة في تطوير رواء من منظور الأعمال والسوق، وتشكيل مسارها نحو التبني المؤسسي والتوسع؛ بدءًا من فهم احتياجات البلديات والسوق، مرورًا بتطوير العروض والنماذج التجارية، ووصولًا إلى بناء العلاقات وتهيئة فرص الشراكة التي تدعم انتقال المشروع من التجربة إلى التطبيق والنمو.",
      "faq.q4": "ما هي الخلفية الأكاديمية والمهنية لمحمد الصقور؟",
      "faq.a4": "يحمل محمد خلفية أكاديمية في إدارة الأعمال والتسويق الإلكتروني من كلية الخوارزمي في عمّان (الأردن)، تجمع بين التفكير الاستراتيجي، دراسة الجدوى وتقييم المشاريع، فهم سلوك المستهلك، وبناء استراتيجيات النمو.",

      "contact.tag": "تواصل مهني ومباشر",
      "contact.title": "يسعدني التواصل والتعاون المشترك",
      "contact.desc": "سواء كنت مهتماً بمشاريع HEXO Verse أو ترغب في مناقشة فرص شراكة عمل أو طلب عرض تقديمي رسمي، أنا على أتم الاستعداد للتواصل الفعّال.",
      "contact.emailLabel": "البريد الإلكتروني المهني",
      "contact.phoneLabel": "رقم الهاتف / واتساب",
      "contact.companyLabel": "الشركة",
      "contact.locLabel": "الموقع",
      "contact.locValue": "فلسطين",
      "contact.formTitle": "إرسال استفسار سريع",
      "contact.formSub": "سيتم توجيه رسالتك مباشرة لبريد محمد الصقور.",
      "contact.fName": "الاسم الكامل / الجهة",
      "contact.fEmail": "البريد الإلكتروني",
      "contact.fSubject": "موضوع الاستفسار",
      "contact.subOpt1": "شراكة عمل مع HEXO Verse",
      "contact.subOpt2": "استفسار عن مشروع رَواء",
      "contact.subOpt3": "استفسار عن مشروع نُمو",
      "contact.subOpt4": "استفسار عن مشروع فَذ",
      "contact.subOpt5": "تواصل عام",
      "contact.fMessage": "نص الرسالة",
      "contact.fSend": "إرسال الرسالة الآن",

      "footer.name": "محمد الصقور",
      "footer.role": "مسؤول تطوير الأعمال والتسويق · HEXO Verse",
      "footer.cv": "السيرة الذاتية (PDF)",
      "footer.copy": "© 2026 محمد الصقور. جميع الحقوق محفوظة لشركة HEXO Verse."
    },

    en: {
      "nav.name": "Mohammad Al-Sqour",
      "nav.role": "HEXO Verse · Business & Marketing",
      "nav.about": "About",
      "nav.philosophy": "Beyond Projects",
      "nav.projects": "Projects",
      "nav.focus": "Focus Areas",
      "nav.faq": "FAQ",
      "nav.contact": "Contact",
      "nav.cta": "Get in Touch",

      "hero.badge": "Mohammad Al-Sqour — Business Development & Marketing Lead · HEXO Verse",
      "hero.title": "Building What Makes a Difference for the Future.",
      "hero.desc": "From today's challenges emerge tomorrow's opportunities. We discover what is truly worth building, transforming promising ideas into ventures that create real value and leave a lasting impact.",
      "hero.btnProjects": "Explore Projects",
      "hero.btnContact": "Direct Contact",
      "hero.btnCV": "Download CV (PDF)",
      "hero.metric1": "Emerging Tech Ventures at HEXO Verse",
      "hero.metric2": "Technology projects across various fields",
      "hero.metric3": "Institutional Readiness & B2G/B2B Partnerships",
      "hero.cardName": "Mohammad Al-Sqour",
      "hero.cardRole": "Business Development & Marketing Lead · HEXO Verse",

      "about.tag": "Professional & Academic Background",
      "about.title": "From Knowledge to Shaping Reality",
      "about.desc": "A background in business administration and marketing, combined with hands-on experience founding ventures and maturing ideas within an emerging tech ecosystem, focusing on discovering opportunities and transforming them into scalable, high-impact projects.",
      "about.eduTitle": "Academic Background",
      "about.eduBody": "An academic foundation in Business Administration and E-Marketing, combining strategic thinking, project feasibility analysis, market dynamics, consumer behavior, and marketing strategy formulation — knowledge directly translated into actionable decisions in startup and business environments.",
      "about.eduBadge": "Khwarizmi University · Jordan",
      "about.roleTitle": "Role at HEXO Verse",
      "about.roleBody": "<strong>Mohammad Al-Sqour — Business Development & Marketing Lead</strong><br>The role spans discovering opportunities and developing concepts to analyzing markets, structuring business models, cultivating partnerships, and architecting strategies that launch tech startups and anchor them to real market needs.",
      "about.roleBadge": "HEXO Verse · 2024 - Present",
      "about.marketTitle": "Relations & Markets",
      "about.marketBody": "Developing relationships and opening new market pathways with government entities, institutions, enterprises, and consumer segments, rooted in understanding market needs and forging partnerships that drive reach and scale.<br><strong>B2G &amp; B2B &amp; B2C</strong>",
      "about.marketBadge": "B2G · B2B · B2C",

      "phil.tag": "Beyond the Projects",
      "phil.title": "Ideas Don't Start with Tech, They Start with the Problem",
      "phil.desc": "Every project begins with a question: What can be better? From there begins the journey of discovering the problem, understanding the market, capturing the opportunity, and transforming it into a buildable and scalable concept. At HEXO Verse, this vision converges with technology to create ventures that answer real-world needs.",
      "phil.qTitle": "What Defines This Journey?",
      "phil.step1Title": "Understanding Reality",
      "phil.step1Desc": "Getting closer to the problem before jumping to solutions.",
      "phil.step2Title": "Discovering Opportunities",
      "phil.step2Desc": "Uncovering spaces where problems can be transformed into lasting value.",
      "phil.step3Title": "Transforming the Idea",
      "phil.step3Desc": "Shaping the concept into a clear venture with a viable model and market pathway.",
      "phil.step4Title": "Creating Impact",
      "phil.step4Desc": "Building solutions that don't just function, but add measurable and sustainable value.",

      "projects.tag": "HEXO Verse Venture Portfolio",
      "projects.title": "Key Products We Market & Grow",
      "projects.desc": "A portfolio of high-impact technology solutions where I manage commercial feasibility, pricing architectures, and official proposals.",

      "projects.rawaaTitle": "Rawaa (رَواء) — Smart Water Distribution & Municipal IoT Solution",
      "projects.rawaaOverview": "An integrated smart water management solution connecting IoT sensors on distribution networks with a cloud platform and mobile app to assist municipalities in fair scheduling, leak detection, and water conservation.",
      "projects.rawaaRoleTitle": "Mohammad Al-Sqour's Role in the Project:",
      "projects.rawaaRoleIntro": "Contributing to the business and market evolution of Rawaa, guiding its roadmap toward institutional adoption and expansion; starting from understanding municipal needs and market dynamics, to creating commercial proposals and business models, and establishing partnerships that support the transition from pilot to deployment and growth.",
      "projects.rawaaPoint1": "Analyzing municipal pain points and customer behavior, designing SaaS pricing models and tiered sensor packages.",
      "projects.rawaaPoint2": "Documenting pilot results in Nuba village demonstrating up to 30% reduction in water loss and fewer resident complaints.",
      "projects.rawaaPoint3": "Building institutional relationships (B2G) and establishing partnerships supporting transition from pilot to deployment.",
      "projects.visitWebsite": "Official Website (rawaa.net)",
      "projects.readCaseStudy": "Read Project Case Study",

      "projects.namouTitle": "Namou (نمو) — AI Ad Agency in Your Pocket for MSMEs",
      "projects.namouOverview": "A conversational generative-AI marketing platform deployed via Telegram, enabling small business owners, home stores, and startups to generate localized ad visuals and persuasive copy in under 60 seconds.",
      "projects.namouRoleTitle": "Mohammad Al-Sqour's Role in the Project:",
      "projects.namouPoint1": "Researched operational challenges faced by 100+ local micro-businesses regarding advertising costs and design skills gaps.",
      "projects.namouPoint2": "Defined the early go-to-market (GTM) outreach strategy for e-commerce sellers in Palestine and Jordan.",
      "projects.namouPoint3": "Drafted collaboration proposals for regional business incubators and entrepreneurial networks.",
      "projects.visitNamou": "Official Website (namou.online)",

      "projects.fathTitle": "Fath (فذ) — Gamified Interactive Edutainment Platform",
      "projects.fathOverview": "An interactive educational competition ecosystem combining physical buzzer tables with digital applications for schools, universities, and community tournaments.",
      "projects.fathRoleTitle": "Mohammad Al-Sqour's Role in the Project:",
      "projects.fathPoint1": "Designed corporate sponsorship packages for private enterprises and institutional event sponsors.",
      "projects.fathPoint2": "Coordinated digital marketing and video coverage across TikTok and Instagram for interactive quiz competitions.",
      "projects.fathPoint3": "Prepared introductory pitch decks for academic councils and universities.",
      "projects.visitFath": "Official Website (fath-app.com)",
      "projects.fathSponsors": "Sponsors Portal",
      "projects.moreTag": "HEXO Verse Ecosystem",
      "projects.moreTitle": "Looking to Explore More Tech Ventures & Startups?",
      "projects.moreDesc": "At HEXO Verse, we engineer, incubate, and scale 15+ emerging tech ventures and smart solutions across IoT, Artificial Intelligence, and Smart Civic Systems.",
      "projects.moreBtn": "Explore All Projects at HEXO Verse",

      "focus.tag": "Core Focus Areas",
      "focus.title": "Leadership & Value Creation Methodology",
      "focus.desc": "Core strategic pillars guiding Mohammad Al-Sqour in building, validating, and commercializing scalable technology ventures.",
      "focus.cat1Title": "Venture Building",
      "focus.cat1Desc": "From discovering problems and opportunities to shaping concepts, business models, and go-to-market paths.",
      "focus.cat2Title": "Strategy & Business Development",
      "focus.cat2Desc": "Analyzing markets, evaluating opportunities, fostering partnerships, and formulating growth trajectories.",
      "focus.cat3Title": "Marketing & Growth",
      "focus.cat3Desc": "Building strategies that connect projects with their audience, translating core value into reach, presence, and sustained growth.",
      "focus.cat4Title": "Leadership & Communication",
      "focus.cat4Desc": "Translating vision into clear direction, facilitating dialogue with cross-functional teams, partners, and stakeholders to achieve actionable decisions.",

      "faq.tag": "Direct Answers for Search & AI",
      "faq.title": "Frequently Asked Questions (FAQ)",
      "faq.desc": "Structured and verified information formatted for Answer Engines (AEO) and Generative Search (GEO).",
      "faq.q1": "Who is Mohammad Al-Sqour and what is his role at HEXO Verse?",
      "faq.a1": "Mohammad Al-Sqour is a business administration and digital marketing graduate, currently serving as the Business Development and Marketing Lead at HEXO Verse. His role spans opportunity discovery, market validation, business model design, and institutional partnership development across B2G, B2B, and B2C segments.",
      "faq.q2": "What is Mohammad Al-Sqour's venture building philosophy?",
      "faq.a2": "The philosophy asserts that ideas don't start with technology, but with the problem. Every venture begins by understanding reality, uncovering spaces where pain points become value, transforming ideas into sustainable models, and building measurable, enduring impact.",
      "faq.q3": "What is Mohammad Al-Sqour's role in the Rawaa project?",
      "faq.a3": "Contributing to Rawaa's business and market evolution toward municipal adoption and regional expansion; assessing municipal needs, structuring commercial models and proposals, and forging partnerships from field testing to scale.",
      "faq.q4": "What is Mohammad Al-Sqour's educational foundation?",
      "faq.a4": "He holds an academic degree in Business Administration & Digital Marketing from Khwarizmi University Technical College in Jordan, specializing in strategic management, project feasibility, and market research.",

      "contact.tag": "Professional Contact",
      "contact.title": "Let's Connect & Discuss Collaborations",
      "contact.desc": "Whether you are interested in HEXO Verse's digital products, exploring strategic partnerships, or requesting a formal proposal, I am ready to connect.",
      "contact.emailLabel": "Professional Email",
      "contact.phoneLabel": "Phone / WhatsApp",
      "contact.companyLabel": "Company",
      "contact.locLabel": "Location",
      "contact.locValue": "Palestine",
      "contact.formTitle": "Send an Inquiry",
      "contact.formSub": "Your message will be sent directly to Mohammad Al-Sqour.",
      "contact.fName": "Full Name / Organization",
      "contact.fEmail": "Email Address",
      "contact.fSubject": "Subject",
      "contact.subOpt1": "Business Partnership with HEXO Verse",
      "contact.subOpt2": "Inquiry about Rawaa Project",
      "contact.subOpt3": "Inquiry about Namou Project",
      "contact.subOpt4": "Inquiry about Fath Project",
      "contact.subOpt5": "General Communication",
      "contact.fMessage": "Message Content",
      "contact.fSend": "Send Message Now",

      "footer.name": "Mohammad Al-Sqour",
      "footer.role": "Business Development & Marketing Lead · HEXO Verse",
      "footer.cv": "CV (PDF)",
      "footer.copy": "© 2026 Mohammad Al-Sqour. All Rights Reserved to HEXO Verse."
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

      const mailSubject = encodeURIComponent(`[HEXO Verse Inquiry] ${subject} - from ${name}`);
      const mailBody = encodeURIComponent(`Name / Organization: ${name}\nEmail: ${email}\nSubject: ${subject}\n\nMessage:\n${message}`);

      window.location.href = `mailto:info@mohammedsqour.com?subject=${mailSubject}&body=${mailBody}`;
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

    // Dynamic Header Glassmorphic State on Scroll
    const navbar = document.getElementById('navbar');
    if (navbar) {
      if (scrollY > 20) {
        navbar.classList.add('scrolled');
      } else {
        navbar.classList.remove('scrolled');
      }
    }
  });

});
