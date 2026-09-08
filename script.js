/* =========================================================
   DAGNAW PORTFOLIO — SCRIPT.JS v6.0
   Multilingual + Motion Graphics + Interactive Effects
   ========================================================= */

(function () {
  "use strict";

  /* =========================================================
     1. TRANSLATIONS
     ========================================================= */

  const translations = {

    en: {
      nav_home: "Home",
      nav_about: "About",
      nav_skills: "Skills",
      nav_projects: "Projects",
      nav_tools: "Tools",
      nav_journey: "Journey",
      nav_contact: "Contact",

      hire_me: "Hire Me",

      available: "Available for opportunities",
      hello: "HELLO, I'M",
      hero_prefix: "I am a",
      hero_description:
        "I build modern web experiences, manage databases and create digital solutions that connect technology with real-world needs.",
      view_projects: "View My Projects",
      explore_tools: "Explore Tools",
      download_cv: "Download CV",

      profile_role: "Developer • Database • Creative",
      stat_skills: "Skills",
      stat_languages: "Languages",
      stat_tools: "Tools",

      section_about: "ABOUT ME",
      about_title: "Turning ideas into digital solutions.",
      about_p1:
        "I am an enthusiastic Web Developer, Database Administrator, Graphics and Video Specialist passionate about Software Engineering and Artificial Intelligence.",
      about_p2:
        "I am currently studying a Level 5 Diploma in Web Development at Bahir Dar Polytechnic College.",
      about_p3:
        "My goal is to combine modern software development, databases, IoT and AI to create useful solutions for real-world problems.",
      about_p4:
        "I am also interested in open-source development and hope to contribute to global technology communities through programs such as Outreachy.",

      highlight_web_title: "Web Development",
      highlight_web_text:
        "Modern, responsive and user-friendly websites.",
      highlight_db_title: "Database",
      highlight_db_text:
        "Database design, SQL and administration.",
      highlight_ai_title: "AI & IoT",
      highlight_ai_text:
        "Exploring intelligent connected solutions.",
      highlight_creative_title: "Creative",
      highlight_creative_text:
        "Graphic design, video editing and content creation.",

      section_skills: "SKILLS",
      skills_title: "My technical & creative skills.",
      skillCat1Title: "Development & Database",
      skillCat3Title: "Creative & AI",
      profAdvanced: "Advanced",
      profIntermediate: "Intermediate",

      section_projects: "PROJECTS",
      projects_title: "Things I'm building.",
      featuredLabel: "FEATURED PROJECT",
      featuredTitle: "Green Tech Smart Agriculture 2.0",
      featuredTag: "IoT + AI + Smart Irrigation",
      project_description:
        "An automated agricultural monitoring and smart irrigation system designed to use IoT sensors, microcontrollers, AI-powered crop disease detection and intelligent irrigation to improve agricultural productivity.",

      proj2Cat: "WEB • MYSQL",
      proj2Title: "ICT Inventory Management",
      proj2Desc:
        "Department inventory workflow for tracking assets, employees, issues and reports.",
      proj3Cat: "CREATIVE • VIDEO",
      proj3Title: "Digital Content Studio",
      proj3Desc:
        "Branding, poster design, short-form and long-form video editing workflows.",
      proj4Cat: "HTML • CSS • JS",
      proj4Title: "Personal Portfolio",
      proj4Desc:
        "A responsive personal brand site designed around technology, creativity and open source.",

      journeySection: "JOURNEY",
      journeyHeadingPlain: "Learning today. Building tomorrow.",

      j1Label: "NOW / EDUCATION",
      j1Title:
        "Web Development Diploma — Bahir Dar Polytechnic College",
      j1Desc:
        "Focused on practical web, database and programming foundations.",

      j2Label: "PROFESSIONAL / CREATIVE",
      j2Title:
        "Freelance Designer & Digital Content Creator",
      j2Desc:
        "Promotional materials, social-media graphics and video editing for personal and client projects.",

      j3Label: "WORK EXPERIENCE",
      j3Title:
        "Front Desk Attendant — Palm Palace Hotel",
      j3Desc:
        "Customer service, workplace coordination and communication experience in a live service environment.",

      j4Label: "FUTURE / OPEN SOURCE",
      j4Title:
        "Outreachy & Impactful Software Engineering",
      j4Desc:
        "Goal: contribute to open source and build software/database systems with meaningful community impact.",

      goal_label: "MY VISION",
      goal_title: "Become an impactful Software Engineer.",
      goal_description:
        "My long-term goal is to build meaningful software solutions, contribute to open source and use technology to solve real-world problems.",

      section_contact: "CONTACT",
      contact_title: "Let's build something great.",
      contact_subtitle: "Get in touch",
      contact_description:
        "Have a project, idea or opportunity? Feel free to contact me.",

      form_name: "Your Name",
      form_email: "Email",
      form_message: "Message",
      send_message: "Send Message",

      footer_text: "Building useful things with technology.",
      rights: "All rights reserved."
    },


    am: {
      nav_home: "መነሻ",
      nav_about: "ስለ እኔ",
      nav_skills: "ክህሎቶች",
      nav_projects: "ፕሮጀክቶች",
      nav_tools: "መሳሪያዎች",
      nav_journey: "ጉዞ",
      nav_contact: "አግኙኝ",

      hire_me: "አግኙኝ",

      available: "ለአዳዲስ ዕድሎች ዝግጁ ነኝ",
      hello: "ሰላም፣ እኔ",
      hero_prefix: "እኔ",
      hero_description:
        "ዘመናዊ የድር ልምዶችን እገነባለሁ፣ ዳታቤዞችን አስተዳድራለሁ እና ቴክኖሎጂን ከተጨባጭ ፍላጎቶች ጋር የሚያገናኙ ዲጂታል መፍትሄዎችን እፈጥራለሁ።",
      view_projects: "ፕሮጀክቶቼን ይመልከቱ",
      explore_tools: "መሳሪያዎችን ይመልከቱ",
      download_cv: "CV አውርድ",

      profile_role: "ዴቨሎፐር • ዳታቤዝ • ክሪዬቲቭ",
      stat_skills: "ክህሎቶች",
      stat_languages: "ቋንቋዎች",
      stat_tools: "መሳሪያዎች",

      section_about: "ስለ እኔ",
      about_title: "ሀሳቦችን ወደ ዲጂታል መፍትሄዎች መቀየር።",
      about_p1:
        "የድር ዴቨሎፐር፣ የዳታቤዝ አስተዳዳሪ፣ የግራፊክስ እና ቪዲዮ ስፔሻሊስት ሲሆን በSoftware Engineering እና Artificial Intelligence በጣም እወዳለሁ።",
      about_p2:
        "በአሁኑ ጊዜ በBahir Dar Polytechnic College Level 5 Diploma በWeb Development እየተማርኩ ነው።",
      about_p3:
        "ግቤ ዘመናዊ Software Development፣ Database፣ IoT እና AIን በማጣመር ለተጨባጭ ችግሮች ጠቃሚ መፍትሄዎችን መፍጠር ነው።",
      about_p4:
        "እንዲሁም Open Source Development ላይ ፍላጎት አለኝ እና እንደ Outreachy ባሉ ፕሮግራሞች በመሳተፍ ለዓለም አቀፍ የቴክኖሎጂ ማህበረሰቦች አስተዋጽኦ ማድረግ እፈልጋለሁ።",

      highlight_web_title: "የድር ልማት",
      highlight_web_text: "ዘመናዊ፣ ምላሽ ሰጪ እና ለመጠቀም ቀላል ድረ-ገጾች።",
      highlight_db_title: "ዳታቤዝ",
      highlight_db_text: "ዳታቤዝ ዲዛይን፣ SQL እና አስተዳደር።",
      highlight_ai_title: "AI & IoT",
      highlight_ai_text: "ብልህ የተገናኙ ቴክኖሎጂዎችን መመርመር።",
      highlight_creative_title: "ክሪዬቲቭ",
      highlight_creative_text: "ግራፊክ ዲዛይን፣ ቪዲዮ ኤዲቲንግ እና የይዘት ፈጠራ።",

      section_skills: "ክህሎቶች",
      skills_title: "የቴክኒክ እና የፈጠራ ክህሎቶቼ።",
      skillCat1Title: "Development & Database",
      skillCat3Title: "Creative & AI",
      profAdvanced: "ከፍተኛ",
      profIntermediate: "መካከለኛ",

      section_projects: "ፕሮጀክቶች",
      projects_title: "እየገነባኋቸው ያሉ ነገሮች።",
      featuredLabel: "ዋና ፕሮጀክት",
      featuredTitle: "Green Tech Smart Agriculture 2.0",
      featuredTag: "IoT + AI + Smart Irrigation",
      project_description:
        "IoT sensors፣ microcontrollers፣ AI-powered crop disease detection እና intelligent irrigationን በመጠቀም የግብርና ምርታማነትን ለማሻሻል የተዘጋጀ አውቶማቲክ የግብርና ክትትልና የውሃ ማጠጫ ስርዓት።",

      proj2Cat: "WEB • MYSQL",
      proj2Title: "ICT Inventory Management",
      proj2Desc: "ንብረቶችን፣ ሰራተኞችን፣ ጉዳዮችን እና ሪፖርቶችን ለመከታተል የተዘጋጀ የክፍል Inventory workflow።",
      proj3Cat: "CREATIVE • VIDEO",
      proj3Title: "Digital Content Studio",
      proj3Desc: "Branding፣ poster design፣ short-form እና long-form video editing ስራዎች።",
      proj4Cat: "HTML • CSS • JS",
      proj4Title: "Personal Portfolio",
      proj4Desc: "በቴክኖሎጂ፣ ፈጠራ እና open source ላይ የተመሰረተ ምላሽ ሰጪ የግል ፖርትፎሊዮ።",

      journeySection: "ጉዞ",
      journeyHeadingPlain: "ዛሬ እማራለሁ። ነገ እገነባለሁ።",

      j1Label: "አሁን / ትምህርት",
      j1Title: "Web Development Diploma — Bahir Dar Polytechnic College",
      j1Desc: "በWeb፣ Database እና Programming መሰረታዊ ችሎታዎች ላይ ተግባራዊ ትምህርት።",

      j2Label: "ሙያ / ፈጠራ",
      j2Title: "Freelance Designer & Digital Content Creator",
      j2Desc: "ለግል እና ለደንበኞች Branding፣ Social Media Graphics እና Video Editing ስራዎች።",

      j3Label: "የስራ ልምድ",
      j3Title: "Front Desk Attendant — Palm Palace Hotel",
      j3Desc: "የደንበኛ አገልግሎት፣ የስራ ቦታ ቅንጅት እና የግንኙነት ልምድ።",

      j4Label: "ወደፊት / OPEN SOURCE",
      j4Title: "Outreachy & Impactful Software Engineering",
      j4Desc: "ለOpen Source አስተዋጽኦ ማድረግ እና ትርጉም ያላቸው Software/Database systems መገንባት።",

      goal_label: "ራዕዬ",
      goal_title: "ተፅዕኖ ያለው Software Engineer መሆን።",
      goal_description:
        "የረጅም ጊዜ ግቤ ጠቃሚ Software solutions መገንባት፣ Open Source ላይ ማበርከት እና ቴክኖሎጂን በመጠቀም ተጨባጭ ችግሮችን መፍታት ነው።",

      section_contact: "አግኙኝ",
      contact_title: "አንድ ጥሩ ነገር አብረን እንገንባ።",
      contact_subtitle: "እንገናኝ",
      contact_description: "ፕሮጀክት፣ ሀሳብ ወይም የስራ ዕድል ካለዎት ያግኙኝ።",

      form_name: "ስምዎ",
      form_email: "ኢሜይል",
      form_message: "መልዕክት",
      send_message: "መልዕክት ላክ",

      footer_text: "በቴክኖሎጂ ጠቃሚ ነገሮችን እገነባለሁ።",
      rights: "መብቱ በሙሉ የተጠበቀ ነው።"
    },


    om: {
      nav_home: "Mana",
      nav_about: "Waa'ee Koo",
      nav_skills: "Dandeettii",
      nav_projects: "Pirojektoota",
      nav_tools: "Meeshaalee",
      nav_journey: "Imala",
      nav_contact: "Na Qunnamaa",

      hire_me: "Na Qunnamaa",

      available: "Carraawwan haaraaf qophiidha",
      hello: "AKKAM, ANI",
      hero_prefix: "Ani",
      hero_description:
        "Muuxannoo weebii ammayyaa ijaara, database bulcha, akkasumas furmaata dijitaalaa teknooloojii fi fedhii dhugaa walitti hidhu uuma.",
      view_projects: "Pirojektoota Koo Ilaali",
      explore_tools: "Meeshaalee Ilaali",
      download_cv: "CV Buusi",

      profile_role: "Developer • Database • Creative",
      stat_skills: "Dandeettii",
      stat_languages: "Afaanota",
      stat_tools: "Meeshaalee",

      section_about: "WAA'EE KOO",
      about_title: "Yaada gara furmaata dijitaalaatti jijjiiruu.",
      about_p1:
        "Ani Web Developer, Database Administrator, Graphics fi Video Specialist dha; Software Engineering fi Artificial Intelligence irratti fedhii guddaa qaba.",
      about_p2:
        "Yeroo ammaa Bahir Dar Polytechnic College keessatti Level 5 Diploma in Web Development barachaa jira.",
      about_p3:
        "Kaayyoon koo Software Development, Database, IoT fi AI walitti fiduun rakkoolee dhugaa furuuf furmaata faayidaa qabu uumuudha.",
      about_p4:
        "Akkasumas Open Source Development irratti fedhii qaba; sagantaalee akka Outreachy irratti hirmaachuun hawaasa teknooloojii addunyaa gumaachuuf nan hawwa.",

      highlight_web_title: "Web Development",
      highlight_web_text: "Weebsaayitii ammayyaa, saffisaa fi itti fayyadamuuf salphaa.",
      highlight_db_title: "Database",
      highlight_db_text: "Database design, SQL fi bulchiinsa.",
      highlight_ai_title: "AI & IoT",
      highlight_ai_text: "Furmaata walitti hidhame kan sammuu qabu qorachuu.",
      highlight_creative_title: "Creative",
      highlight_creative_text: "Graphic design, video editing fi content creation.",

      section_skills: "DANDEETTII",
      skills_title: "Dandeettii teeknikaa fi kalaqaa koo.",
      skillCat1Title: "Development & Database",
      skillCat3Title: "Creative & AI",
      profAdvanced: "Sadarkaa Olaanaa",
      profIntermediate: "Sadarkaa Giddugaleessaa",

      section_projects: "PIROJEKTOOTA",
      projects_title: "Waanan ijaaraa jiru.",
      featuredLabel: "PIROJEKTII IJOO",
      featuredTitle: "Green Tech Smart Agriculture 2.0",
      featuredTag: "IoT + AI + Smart Irrigation",
      project_description:
        "Sirna hordoffii qonnaa fi bishaan obaasuu smart kan IoT sensors, microcontrollers fi AI fayyadamuun oomishtummaa qonnaa fooyyeessuuf qophaa'e.",

      proj2Cat: "WEB • MYSQL",
      proj2Title: "ICT Inventory Management",
      proj2Desc: "Qabeenya, hojjettoota, rakkoolee fi gabaasa hordofuuf workflow inventory.",
      proj3Cat: "CREATIVE • VIDEO",
      proj3Title: "Digital Content Studio",
      proj3Desc: "Branding, poster design fi video editing.",
      proj4Cat: "HTML • CSS • JS",
      proj4Title: "Personal Portfolio",
      proj4Desc: "Portfolio dhuunfaa responsive kan teknooloojii, kalaqaa fi open source irratti hundaa'e.",

      journeySection: "IMALA",
      journeyHeadingPlain: "Har'a nan baradha. Boru nan ijaara.",

      j1Label: "AMMA / BARNOOTA",
      j1Title: "Web Development Diploma — Bahir Dar Polytechnic College",
      j1Desc: "Web, database fi programming irratti bu'uura hojii irratti xiyyeeffatu.",

      j2Label: "PROFESSIONAL / CREATIVE",
      j2Title: "Freelance Designer & Digital Content Creator",
      j2Desc: "Branding, social media graphics fi video editing.",

      j3Label: "MUUXANNOO HOJII",
      j3Title: "Front Desk Attendant — Palm Palace Hotel",
      j3Desc: "Tajaajila maamilaa, qindoomina hojii fi qunnamtii.",

      j4Label: "FUULDURA / OPEN SOURCE",
      j4Title: "Outreachy & Impactful Software Engineering",
      j4Desc: "Open source irratti gumaachuu fi software/database systems faayidaa qaban ijaaruu.",

      goal_label: "MUL'ATA KOO",
      goal_title: "Software Engineer dhiibbaa qabu ta'uu.",
      goal_description:
        "Kaayyoon koo software furmaata qabu ijaaruu, open source irratti gumaachuu fi teknooloojii fayyadamuun rakkoolee dhugaa furuudha.",

      section_contact: "QUNNAMAA",
      contact_title: "Waan guddaa tokko waliin haa ijaarru.",
      contact_subtitle: "Na Qunnamaa",
      contact_description: "Pirojektii, yaada ykn carraa yoo qabdan na qunnamaa.",

      form_name: "Maqaa Keessan",
      form_email: "Imeelii",
      form_message: "Ergaa",
      send_message: "Ergaa Ergi",

      footer_text: "Teknooloojii fayyadamuun waan faayidaa qabu nan ijaara.",
      rights: "Mirgi hundi eegamaadha."
    },


    zh: {
      nav_home: "首页",
      nav_about: "关于我",
      nav_skills: "技能",
      nav_projects: "项目",
      nav_tools: "工具",
      nav_journey: "经历",
      nav_contact: "联系我",

      hire_me: "联系我",

      available: "目前可接受新的机会",
      hello: "你好，我是",
      hero_prefix: "我是一名",
      hero_description:
        "我构建现代网页体验、管理数据库，并创建连接技术与现实需求的数字解决方案。",
      view_projects: "查看我的项目",
      explore_tools: "探索工具",
      download_cv: "下载简历",

      profile_role: "开发者 • 数据库 • 创意",
      stat_skills: "技能",
      stat_languages: "语言",
      stat_tools: "工具",

      section_about: "关于我",
      about_title: "把想法转化为数字解决方案。",
      about_p1:
        "我是一名热爱软件工程和人工智能的网页开发者、数据库管理员、平面设计与视频专业人士。",
      about_p2:
        "目前我正在 Bahir Dar Polytechnic College 学习 Web Development Level 5 Diploma。",
      about_p3:
        "我的目标是结合现代软件开发、数据库、IoT 和 AI，为现实世界的问题创造有用的解决方案。",
      about_p4:
        "我也对开源开发感兴趣，希望通过 Outreachy 等项目为全球技术社区做出贡献。",

      highlight_web_title: "网页开发",
      highlight_web_text: "现代、响应式且易于使用的网站。",
      highlight_db_title: "数据库",
      highlight_db_text: "数据库设计、SQL 和管理。",
      highlight_ai_title: "AI & IoT",
      highlight_ai_text: "探索智能互联解决方案。",
      highlight_creative_title: "创意",
      highlight_creative_text: "平面设计、视频编辑和内容创作。",

      section_skills: "技能",
      skills_title: "我的技术与创意技能。",
      skillCat1Title: "开发与数据库",
      skillCat3Title: "创意与 AI",
      profAdvanced: "高级",
      profIntermediate: "中级",

      section_projects: "项目",
      projects_title: "我正在构建的东西。",
      featuredLabel: "重点项目",
      featuredTitle: "Green Tech Smart Agriculture 2.0",
      featuredTag: "IoT + AI + 智能灌溉",
      project_description:
        "一个自动化农业监测和智能灌溉系统，通过 IoT 传感器、微控制器、AI 作物疾病检测和智能灌溉技术来提高农业生产力。",

      proj2Cat: "WEB • MYSQL",
      proj2Title: "ICT Inventory Management",
      proj2Desc: "用于跟踪资产、员工、问题和报告的部门库存管理流程。",
      proj3Cat: "CREATIVE • VIDEO",
      proj3Title: "Digital Content Studio",
      proj3Desc: "品牌设计、海报设计以及短视频和长视频编辑。",
      proj4Cat: "HTML • CSS • JS",
      proj4Title: "Personal Portfolio",
      proj4Desc: "围绕技术、创意和开源设计的响应式个人品牌网站。",

      journeySection: "经历",
      journeyHeadingPlain: "今天学习，明天创造。",

      j1Label: "现在 / 教育",
      j1Title: "Web Development Diploma — Bahir Dar Polytechnic College",
      j1Desc: "专注于网页、数据库和编程的实践基础。",

      j2Label: "职业 / 创意",
      j2Title: "Freelance Designer & Digital Content Creator",
      j2Desc: "为个人和客户提供品牌、社交媒体图形和视频编辑服务。",

      j3Label: "工作经验",
      j3Title: "Front Desk Attendant — Palm Palace Hotel",
      j3Desc: "客户服务、工作协调和沟通经验。",

      j4Label: "未来 / 开源",
      j4Title: "Outreachy & Impactful Software Engineering",
      j4Desc: "参与开源，并构建具有社区影响力的软件和数据库系统。",

      goal_label: "我的愿景",
      goal_title: "成为一名有影响力的软件工程师。",
      goal_description:
        "我的长期目标是构建有意义的软件解决方案、参与开源项目，并利用技术解决现实世界的问题。",

      section_contact: "联系我",
      contact_title: "让我们一起创造一些伟大的东西。",
      contact_subtitle: "取得联系",
      contact_description:
        "如果你有项目、想法或机会，欢迎联系我。",

      form_name: "你的姓名",
      form_email: "电子邮件",
      form_message: "留言",
      send_message: "发送消息",

      footer_text: "用技术创造有用的东西。",
      rights: "版权所有。"
    }
  };


  /* =========================================================
     2. LANGUAGE SYSTEM
     ========================================================= */

  let currentLanguage =
    localStorage.getItem("dagnaw-language") || "en";

  function applyLanguage(lang) {
    if (!translations[lang]) {
      lang = "en";
    }

    currentLanguage = lang;

    document.documentElement.lang =
      lang === "am" ? "am" :
      lang === "om" ? "om" :
      lang === "zh" ? "zh" : "en";

    document.querySelectorAll("[data-i18n]").forEach(function (element) {
      const key = element.getAttribute("data-i18n");

      if (
        translations[lang] &&
        Object.prototype.hasOwnProperty.call(translations[lang], key)
      ) {
        element.textContent = translations[lang][key];
      }
    });

    /* Form placeholders */
    const nameInput = document.getElementById("name");
    const emailInput = document.getElementById("email");
    const messageInput = document.getElementById("message");

    if (nameInput) {
      nameInput.placeholder =
        lang === "am" ? "ስምዎን ያስገቡ" :
        lang === "om" ? "Maqaa keessan galchaa" :
        lang === "zh" ? "请输入姓名" :
        "Your name";
    }

    if (emailInput) {
      emailInput.placeholder =
        lang === "am" ? "ኢሜይልዎን ያስገቡ" :
        lang === "om" ? "Imeelii keessan" :
        lang === "zh" ? "请输入邮箱" :
        "you@example.com";
    }

    if (messageInput) {
      messageInput.placeholder =
        lang === "am" ? "መልዕክትዎን ይጻፉ..." :
        lang === "om" ? "Ergaa keessan barreessaa..." :
        lang === "zh" ? "请输入留言..." :
        "Write your message...";
    }

    localStorage.setItem("dagnaw-language", lang);

    /* Restart typing animation with correct language */
    startTyping();

    /* Small language-change motion */
    document.body.classList.remove("language-changing");

    void document.body.offsetWidth;

    document.body.classList.add("language-changing");

    setTimeout(function () {
      document.body.classList.remove("language-changing");
    }, 500);
  }

  window.applyLanguage = applyLanguage;


  /* =========================================================
     3. LANGUAGE SELECTOR
     ========================================================= */

  const languageSelect =
    document.getElementById("languageSelect");

  if (languageSelect) {

    languageSelect.value = currentLanguage;

    languageSelect.addEventListener("change", function () {
      applyLanguage(this.value);
    });
  }


  /* =========================================================
     4. INTRO SCREEN
     ========================================================= */

  let introEntered = false;

  function enterPortfolio() {

    if (introEntered) return;

    introEntered = true;

    const introScreen =
      document.getElementById("introScreen");

    document.body.classList.remove("intro-active");

    if (introScreen) {
      introScreen.classList.add("intro-hide");

      setTimeout(function () {
        introScreen.style.display = "none";
      }, 900);
    }

    setTimeout(function () {
      const home = document.getElementById("home");

      if (home) {
        window.scrollTo({
          top: 0,
          behavior: "smooth"
        });
      }

      revealElements();
    }, 100);
  }

  window.enterPortfolioNow = enterPortfolio;

  const enterButton =
    document.getElementById("introEnterButton");

  if (enterButton) {
    enterButton.addEventListener("click", enterPortfolio);
  }

  /* Automatic entry */
  setTimeout(function () {
    if (!introEntered) {
      enterPortfolio();
    }
  }, 4500);


  /* =========================================================
     5. INTRO WORD ANIMATION
     ========================================================= */

  const introCycle =
    document.getElementById("introCycle");

  const introWords = {
    en: ["Welcome", "Hello", "Create", "Build", "Impact"],
    am: ["እንኳን ደህና መጡ", "ሰላም", "ፍጠር", "ገንባ", "ተፅዕኖ"],
    om: ["Baga Nagaan Dhuftan", "Akkam", "Uumi", "Ijaari", "Dhiibbaa"],
    zh: ["欢迎", "你好", "创造", "构建", "影响"]
  };

  let introWordIndex = 0;

  function animateIntroWords() {

    if (!introCycle) return;

    const words =
      introWords[currentLanguage] || introWords.en;

    introCycle.classList.add("word-changing");

    setTimeout(function () {

      introCycle.textContent =
        words[introWordIndex % words.length];

      introWordIndex++;

      introCycle.classList.remove("word-changing");

    }, 250);
  }

  if (introCycle) {

    introCycle.textContent =
      (introWords[currentLanguage] || introWords.en)[0];

    setInterval(animateIntroWords, 1500);
  }


  /* =========================================================
     6. TYPING EFFECT
     ========================================================= */

  const typingText =
    document.getElementById("typingText");

  let typingTimer = null;

  const typingWords = {
    en: [
      "Web Developer",
      "Database Administrator",
      "AI Explorer",
      "Creative Designer",
      "Software Engineer"
    ],

    am: [
      "የድር ዴቨሎፐር",
      "የዳታቤዝ አስተዳዳሪ",
      "AI ተመራማሪ",
      "ክሪዬቲቭ ዲዛይነር",
      "Software Engineer"
    ],

    om: [
      "Web Developer",
      "Database Administrator",
      "AI Explorer",
      "Creative Designer",
      "Software Engineer"
    ],

    zh: [
      "网页开发者",
      "数据库管理员",
      "AI 探索者",
      "创意设计师",
      "软件工程师"
    ]
  };

  function startTyping() {

    if (!typingText) return;

    if (typingTimer) {
      clearTimeout(typingTimer);
    }

    const words =
      typingWords[currentLanguage] || typingWords.en;

    let wordIndex = 0;
    let charIndex = 0;
    let deleting = false;

    function typeLoop() {

      const word = words[wordIndex];

      if (!deleting) {

        typingText.textContent =
          word.substring(0, charIndex + 1);

        charIndex++;

        if (charIndex >= word.length) {
          deleting = true;
          typingTimer = setTimeout(typeLoop, 1300);
          return;
        }

        typingTimer =
          setTimeout(typeLoop, 75);

      } else {

        typingText.textContent =
          word.substring(0, charIndex - 1);

        charIndex--;

        if (charIndex <= 0) {
          deleting = false;
          wordIndex =
            (wordIndex + 1) % words.length;

          typingTimer =
            setTimeout(typeLoop, 300);

          return;
        }

        typingTimer =
          setTimeout(typeLoop, 40);
      }
    }

    typeLoop();
  }


  /* =========================================================
     7. SCROLL REVEAL
     ========================================================= */

  function revealElements() {

    const revealItems =
      document.querySelectorAll(".reveal");

    if (!("IntersectionObserver" in window)) {

      revealItems.forEach(function (item) {
        item.classList.add("active");
      });

      return;
    }

    const observer =
      new IntersectionObserver(
        function (entries) {

          entries.forEach(function (entry) {

            if (entry.isIntersecting) {

              entry.target.classList.add("active");

              observer.unobserve(entry.target);
            }

          });

        },
        {
          threshold: 0.12,
          rootMargin: "0px 0px -40px 0px"
        }
      );

    revealItems.forEach(function (item) {
      observer.observe(item);
    });
  }


  /* =========================================================
     8. MOTION GRAPHICS ENGINE
     ========================================================= */

  function createMotionStyles() {

    if (document.getElementById("motionStyles")) {
      return;
    }

    const style =
      document.createElement("style");

    style.id = "motionStyles";

    style.textContent = `
      .language-changing [data-i18n] {
        animation: languageFlip .45s ease both;
      }

      @keyframes languageFlip {
        0% {
          opacity: .2;
          transform: translateY(8px);
        }
        100% {
          opacity: 1;
          transform: translateY(0);
        }
      }

      .word-changing {
        opacity: 0;
        transform: translateY(-8px);
        transition: .25s ease;
      }

      .motion-burst {
        position: fixed;
        left: 0;
        top: 0;
        width: 0;
        height: 0;
        pointer-events: none;
        z-index: 99999;
      }

      .motion-ring {
        position: absolute;
        width: 80px;
        height: 80px;
        margin-left: -40px;
        margin-top: -40px;
        border: 2px solid currentColor;
        border-radius: 50%;
        animation: motionRing .75s cubic-bezier(.16,1,.3,1) forwards;
      }

      @keyframes motionRing {
        from {
          opacity: 1;
          transform: scale(.2);
        }
        to {
          opacity: 0;
          transform: scale(3.2);
        }
      }

      .motion-particle {
        position: absolute;
        width: 7px;
        height: 7px;
        border-radius: 50%;
        background: currentColor;
        animation: particleFly .8s cubic-bezier(.16,1,.3,1) forwards;
      }

      @keyframes particleFly {
        from {
          opacity: 1;
          transform: translate(0,0) scale(1);
        }
        to {
          opacity: 0;
          transform:
            translate(
              var(--mx),
              var(--my)
            )
            scale(.1);
        }
      }

      .motion-label {
        position: fixed;
        z-index: 100000;
        pointer-events: none;
        font-size: 12px;
        font-weight: 800;
        letter-spacing: 2px;
        text-transform: uppercase;
        opacity: 0;
        transform: translateY(10px);
        animation: labelFloat 1s ease forwards;
      }

      @keyframes labelFloat {
        0% {
          opacity: 0;
          transform: translateY(10px) scale(.9);
        }
        20% {
          opacity: 1;
          transform: translateY(0) scale(1);
        }
        100% {
          opacity: 0;
          transform: translateY(-35px) scale(1.05);
        }
      }

      .button-motion {
        animation: buttonImpact .55s cubic-bezier(.16,1,.3,1);
      }

      @keyframes buttonImpact {
        0% {
          transform: scale(1);
        }
        35% {
          transform: scale(.94);
        }
        70% {
          transform: scale(1.06);
        }
        100% {
          transform: scale(1);
        }
      }

      .section-flash {
        animation: sectionFlash .65s ease;
      }

      @keyframes sectionFlash {
        0% {
          filter: brightness(1);
        }
        30% {
          filter: brightness(1.25);
        }
        100% {
          filter: brightness(1);
        }
      }

      .project-motion {
        position: fixed;
        inset: 0;
        pointer-events: none;
        z-index: 99998;
        overflow: hidden;
      }

      .project-line {
        position: absolute;
        width: 2px;
        height: 120px;
        background: currentColor;
        opacity: .7;
        animation: projectLine 1s ease forwards;
      }

      @keyframes projectLine {
        from {
          transform: translateY(120vh) rotate(20deg);
          opacity: 0;
        }
        30% {
          opacity: .8;
        }
        to {
          transform: translateY(-150px) rotate(20deg);
          opacity: 0;
        }
      }

      .tools-motion {
        position: fixed;
        inset: 0;
        pointer-events: none;
        z-index: 99998;
        overflow: hidden;
      }

      .gear-particle {
        position: absolute;
        font-size: 24px;
        animation: gearFloat 1.2s ease forwards;
      }

      @keyframes gearFloat {
        from {
          opacity: 0;
          transform: translateY(50px) rotate(0deg) scale(.5);
        }
        30% {
          opacity: 1;
        }
        to {
          opacity: 0;
          transform: translateY(-130px) rotate(360deg) scale(1.4);
        }
      }

      .cv-motion {
        position: fixed;
        inset: 0;
        pointer-events: none;
        z-index: 99998;
      }

      .cv-sheet {
        position: absolute;
        left: 50%;
        top: 50%;
        width: 70px;
        height: 90px;
        border: 2px solid currentColor;
        border-radius: 7px;
        transform: translate(-50%,-50%) scale(.3);
        animation: cvFly 1s ease forwards;
      }

      .cv-sheet:after {
        content: "CV";
        position: absolute;
        inset: 0;
        display: grid;
        place-items: center;
        font-size: 18px;
        font-weight: 900;
      }

      @keyframes cvFly {
        0% {
          opacity: 0;
          transform: translate(-50%,-50%) scale(.3) rotate(-10deg);
        }
        25% {
          opacity: 1;
          transform: translate(-50%,-50%) scale(1) rotate(0deg);
        }
        100% {
          opacity: 0;
          transform: translate(-50%,-180%) scale(.7) rotate(8deg);
        }
      }

      .contact-motion {
        position: fixed;
        inset: 0;
        pointer-events: none;
        z-index: 99998;
      }

      .contact-wave {
        position: absolute;
        left: 50%;
        top: 50%;
        width: 40px;
        height: 40px;
        border: 2px solid currentColor;
        border-radius: 50%;
        transform: translate(-50%,-50%);
        animation: contactWave 1s ease-out forwards;
      }

      @keyframes contactWave {
        from {
          opacity: 1;
          width: 40px;
          height: 40px;
        }
        to {
          opacity: 0;
          width: 650px;
          height: 650px;
        }
      }

      @media (prefers-reduced-motion: reduce) {
        .motion-ring,
        .motion-particle,
        .motion-label,
        .project-line,
        .gear-particle,
        .cv-sheet,
        .contact-wave {
          animation-duration: .01ms !important;
        }
      }
    `;

    document.head.appendChild(style);
  }

  createMotionStyles();


  /* =========================================================
     9. GENERAL CLICK MOTION
     ========================================================= */

  function generalBurst(event, label) {

    const x =
      event.clientX ||
      window.innerWidth / 2;

    const y =
      event.clientY ||
      window.innerHeight / 2;

    const burst =
      document.createElement("div");

    burst.className = "motion-burst";

    burst.style.left = x + "px";
    burst.style.top = y + "px";

    const ring =
      document.createElement("div");

    ring.className = "motion-ring";

    burst.appendChild(ring);

    for (let i = 0; i < 14; i++) {

      const particle =
        document.createElement("span");

      particle.className =
        "motion-particle";

      const angle =
        (Math.PI * 2 * i) / 14;

      const distance =
        70 + Math.random() * 100;

      particle.style.setProperty(
        "--mx",
        Math.cos(angle) * distance + "px"
      );

      particle.style.setProperty(
        "--my",
        Math.sin(angle) * distance + "px"
      );

      burst.appendChild(particle);
    }

    document.body.appendChild(burst);

    if (label) {

      const text =
        document.createElement("div");

      text.className = "motion-label";
      text.textContent = label;

      text.style.left = (x + 18) + "px";
      text.style.top = (y - 25) + "px";

      burst.appendChild(text);
    }

    setTimeout(function () {
      burst.remove();
    }, 1100);
  }


  /* =========================================================
     10. PROJECT MOTION
     ========================================================= */

  function projectMotion() {

    const layer =
      document.createElement("div");

    layer.className = "project-motion";

    for (let i = 0; i < 18; i++) {

      const line =
        document.createElement("span");

      line.className = "project-line";

      line.style.left =
        Math.random() * 100 + "%";

      line.style.animationDelay =
        Math.random() * .35 + "s";

      line.style.height =
        50 + Math.random() * 150 + "px";

      layer.appendChild(line);
    }

    document.body.appendChild(layer);

    setTimeout(function () {
      layer.remove();
    }, 1400);
  }


  /* =========================================================
     11. TOOLS MOTION
     ========================================================= */

  function toolsMotion() {

    const layer =
      document.createElement("div");

    layer.className = "tools-motion";

    const icons = [
      "⚙",
      "⚙",
      "🔧",
      "⚙",
      "🛠",
      "⚙",
      "🔩",
      "⚙"
    ];

    icons.forEach(function (icon, index) {

      const element =
        document.createElement("span");

      element.className =
        "gear-particle";

      element.textContent = icon;

      element.style.left =
        (10 + Math.random() * 80) + "%";

      element.style.top =
        (35 + Math.random() * 45) + "%";

      element.style.animationDelay =
        (index * .08) + "s";

      layer.appendChild(element);
    });

    document.body.appendChild(layer);

    setTimeout(function () {
      layer.remove();
    }, 1500);
  }


  /* =========================================================
     12. CV MOTION
     ========================================================= */

  function cvMotion() {

    const layer =
      document.createElement("div");

    layer.className = "cv-motion";

    const sheet =
      document.createElement("div");

    sheet.className = "cv-sheet";

    layer.appendChild(sheet);

    document.body.appendChild(layer);

    setTimeout(function () {
      layer.remove();
    }, 1200);
  }


  /* =========================================================
     13. CONTACT MOTION
     ========================================================= */

  function contactMotion() {

    const layer =
      document.createElement("div");

    layer.className = "contact-motion";

    for (let i = 0; i < 3; i++) {

      const wave =
        document.createElement("div");

      wave.className = "contact-wave";

      wave.style.animationDelay =
        (i * .15) + "s";

      layer.appendChild(wave);
    }

    document.body.appendChild(layer);

    setTimeout(function () {
      layer.remove();
    }, 1400);
  }


  /* =========================================================
     14. BUTTON / LINK MOTION CONTROLLER
     ========================================================= */

  document.addEventListener("click", function (event) {

    const link =
      event.target.closest("a, button");

    if (!link) return;

    /* Ignore language selector */
    if (
      link.id === "languageSelect" ||
      link.closest("#languageSelect")
    ) {
      return;
    }

    link.classList.remove("button-motion");

    void link.offsetWidth;

    link.classList.add("button-motion");

    setTimeout(function () {
      link.classList.remove("button-motion");
    }, 600);

    const href =
      link.getAttribute("href") || "";

    const text =
      link.textContent.trim().toLowerCase();

    /* PROJECTS */
    if (
      href === "#projects" ||
      text.includes("project") ||
      text.includes("ፕሮጀክት") ||
      text.includes("pirok")
    ) {

      projectMotion();

      generalBurst(
        event,
        currentLanguage === "am"
          ? "Projects"
          : currentLanguage === "zh"
          ? "项目"
          : "Projects"
      );
    }

    /* TOOLS */
    else if (
      href.includes("tools.html") ||
      text.includes("tool") ||
      text.includes("መሳሪያ") ||
      text.includes("meesha")
    ) {

      toolsMotion();

      generalBurst(
        event,
        currentLanguage === "am"
          ? "Tools"
          : currentLanguage === "zh"
          ? "工具"
          : "Tools"
      );
    }

    /* CV */
    else if (
      href.toLowerCase().includes(".pdf") ||
      text.includes("cv") ||
      text.includes("download") ||
      text.includes("አውርድ")
    ) {

      cvMotion();

      generalBurst(event, "CV");
    }

    /* CONTACT */
    else if (
      href === "#contact" ||
      href.startsWith("mailto:") ||
      text.includes("hire") ||
      text.includes("contact") ||
      text.includes("አግኙ") ||
      text.includes("qunnam")
    ) {

      contactMotion();

      generalBurst(
        event,
        currentLanguage === "am"
          ? "Contact"
          : currentLanguage === "zh"
          ? "联系"
          : "Contact"
      );
    }

    /* OTHER SECTIONS */
    else if (
      href &&
      href.startsWith("#")
    ) {

      generalBurst(event);

      const target =
        document.querySelector(href);

      if (target) {
        target.classList.add("section-flash");

        setTimeout(function () {
          target.classList.remove("section-flash");
        }, 700);
      }
    }

  });


  /* =========================================================
     15. PARTICLE CANVAS
     ========================================================= */

  function initParticles() {

    const canvas =
      document.getElementById("particles");

    if (!canvas) return;

    const ctx =
      canvas.getContext("2d");

    if (!ctx) return;

    let particles = [];

    let width = 0;
    let height = 0;

    function resize() {

      const dpr =
        Math.min(window.devicePixelRatio || 1, 2);

      width = window.innerWidth;
      height = window.innerHeight;

      canvas.width =
        width * dpr;

      canvas.height =
        height * dpr;

      canvas.style.width =
        width + "px";

      canvas.style.height =
        height + "px";

      ctx.setTransform(
        dpr,
        0,
        0,
        dpr,
        0,
        0
      );

      createParticles();
    }

    function createParticles() {

      particles = [];

      const count =
        width < 700 ? 35 : 70;

      for (let i = 0; i < count; i++) {

        particles.push({
          x: Math.random() * width,
          y: Math.random() * height,
          vx: (Math.random() - .5) * .35,
          vy: (Math.random() - .5) * .35,
          r: Math.random() * 1.8 + .4,
          a: Math.random() * .5 + .15
        });
      }
    }

    function animate() {

      ctx.clearRect(
        0,
        0,
        width,
        height
      );

      for (let i = 0; i < particles.length; i++) {

        const p = particles[i];

        p.x += p.vx;
        p.y += p.vy;

        if (p.x < 0) p.x = width;
        if (p.x > width) p.x = 0;

        if (p.y < 0) p.y = height;
        if (p.y > height) p.y = 0;

        ctx.beginPath();

        ctx.arc(
          p.x,
          p.y,
          p.r,
          0,
          Math.PI * 2
        );

        ctx.globalAlpha = p.a;

        ctx.fillStyle = "rgba(120,180,255,1)";

        ctx.fill();

        for (let j = i + 1; j < particles.length; j++) {

          const q = particles[j];

          const dx = p.x - q.x;
          const dy = p.y - q.y;

          const distance =
            Math.sqrt(dx * dx + dy * dy);

          if (distance < 110) {

            ctx.beginPath();

            ctx.moveTo(p.x, p.y);
            ctx.lineTo(q.x, q.y);

            ctx.globalAlpha =
              (1 - distance / 110) * .08;

            ctx.strokeStyle =
              "rgba(120,180,255,1)";

            ctx.stroke();
          }
        }
      }

      ctx.globalAlpha = 1;

      requestAnimationFrame(animate);
    }

    window.addEventListener(
      "resize",
      resize
    );

    resize();
    animate();
  }

  initParticles();


  /* =========================================================
     16. MOBILE MENU
     ========================================================= */

  const menuToggle =
    document.getElementById("menuToggle");

  const mobileNavPanel =
    document.getElementById("mobileNavPanel");

  if (menuToggle && mobileNavPanel) {

    menuToggle.addEventListener("click", function () {

      const opened =
        mobileNavPanel.classList.toggle("open");

      menuToggle.setAttribute(
        "aria-expanded",
        opened ? "true" : "false"
      );

      generalBurst(
        {
          clientX:
            window.innerWidth - 30,
          clientY: 30
        },
        "MENU"
      );
    });

    mobileNavPanel.addEventListener(
      "click",
      function (event) {

        if (
          event.target.closest("a")
        ) {
          mobileNavPanel.classList.remove("open");

          menuToggle.setAttribute(
            "aria-expanded",
            "false"
          );
        }
      }
    );
  }


  /* =========================================================
     17. SMOOTH INTERNAL NAVIGATION
     ========================================================= */

  document.addEventListener(
    "click",
    function (event) {

      const link =
        event.target.closest(
          'a[href^="#"]'
        );

      if (!link) return;

      const href =
        link.getAttribute("href");

      if (
        !href ||
        href === "#" ||
        href === "#!"
      ) {
        return;
      }

      const target =
        document.querySelector(href);

      if (!target) return;

      event.preventDefault();

      target.scrollIntoView({
        behavior: "smooth",
        block: "start"
      });

      history.replaceState(
        null,
        "",
        href
      );
    }
  );


  /* =========================================================
     18. SCROLL TOP
     ========================================================= */

  const scrollTop =
    document.getElementById("scrollTop");

  if (scrollTop) {

    function updateScrollTop() {

      if (window.scrollY > 500) {
        scrollTop.classList.add("show");
      } else {
        scrollTop.classList.remove("show");
      }
    }

    window.addEventListener(
      "scroll",
      updateScrollTop,
      { passive: true }
    );

    updateScrollTop();

    scrollTop.addEventListener(
      "click",
      function () {

        generalBurst(
          {
            clientX: 30,
            clientY: window.innerHeight - 30
          },
          "TOP"
        );

        window.scrollTo({
          top: 0,
          behavior: "smooth"
        });
      }
    );
  }


  /* =========================================================
     19. PROFILE CARD 3D EFFECT
     ========================================================= */

  const profileCard =
    document.getElementById("profileCard");

  if (
    profileCard &&
    window.matchMedia(
      "(pointer:fine)"
    ).matches
  ) {

    profileCard.addEventListener(
      "mousemove",
      function (event) {

        const rect =
          profileCard.getBoundingClientRect();

        const x =
          event.clientX - rect.left;

        const y =
          event.clientY - rect.top;

        const rotateY =
          ((x / rect.width) - .5) * 10;

        const rotateX =
          ((y / rect.height) - .5) * -10;

        profileCard.style.transform =
          "perspective(900px) rotateX(" +
          rotateX +
          "deg) rotateY(" +
          rotateY +
          "deg) translateY(-4px)";
      }
    );

    profileCard.addEventListener(
      "mouseleave",
      function () {

        profileCard.style.transform = "";
      }
    );
  }


  /* =========================================================
     20. CONTACT FORM
     ========================================================= */

  const contactForm =
    document.getElementById("contactForm");

  if (contactForm) {

    contactForm.addEventListener(
      "submit",
      function (event) {

        event.preventDefault();

        const name =
          document.getElementById("name")?.value.trim() || "";

        const email =
          document.getElementById("email")?.value.trim() || "";

        const message =
          document.getElementById("message")?.value.trim() || "";

        if (!name || !email || !message) {
          return;
        }

        const subject =
          encodeURIComponent(
            "Portfolio Contact from " + name
          );

        const body =
          encodeURIComponent(
            "Name: " +
            name +
            "\nEmail: " +
            email +
            "\n\nMessage:\n" +
            message
          );

        const formMessage =
          document.getElementById("formMessage");

        if (formMessage) {

          formMessage.textContent =
            currentLanguage === "am"
              ? "የኢሜይል መላኪያ እየተከፈተ ነው..."
              : currentLanguage === "om"
              ? "Imeelii erguuf banamaa jira..."
              : currentLanguage === "zh"
              ? "正在打开邮件客户端..."
              : "Opening your email client...";

          formMessage.classList.add("show");
        }

        contactMotion();

        window.location.href =
          "mailto:dagnawbeyene5@gmail.com" +
          "?subject=" +
          subject +
          "&body=" +
          body;
      }
    );
  }


  /* =========================================================
     21. CURRENT YEAR
     ========================================================= */

  const currentYear =
    document.getElementById("currentYear");

  if (currentYear) {
    currentYear.textContent =
      new Date().getFullYear();
  }


  /* =========================================================
     22. SKILL BAR ANIMATION
     ========================================================= */

  function animateSkillBars() {

    const bars =
      document.querySelectorAll(
        ".skill-bar span"
      );

    if (!bars.length) return;

    const observer =
      new IntersectionObserver(
        function (entries) {

          entries.forEach(function (entry) {

            if (entry.isIntersecting) {

              const bar =
                entry.target;

              const width =
                getComputedStyle(bar)
                  .getPropertyValue("--w");

              if (width) {
                bar.style.width = width;
              }

              observer.unobserve(bar);
            }

          });

        },
        {
          threshold: .4
        }
      );

    bars.forEach(function (bar) {
      observer.observe(bar);
    });
  }

  animateSkillBars();


  /* =========================================================
     23. KEYBOARD ACCESSIBILITY
     ========================================================= */

  document.addEventListener(
    "keydown",
    function (event) {

      /* Enter on focused button */
      if (
        event.key === "Enter" &&
        document.activeElement
      ) {

        const element =
          document.activeElement;

        if (
          element.matches(
            "a, button"
          )
        ) {
          element.classList.add(
            "button-motion"
          );
        }
      }

      /* Escape closes mobile menu */
      if (
        event.key === "Escape" &&
        mobileNavPanel
      ) {

        mobileNavPanel.classList.remove(
          "open"
        );

        if (menuToggle) {
          menuToggle.setAttribute(
            "aria-expanded",
            "false"
          );
        }
      }
    }
  );


  /* =========================================================
     24. INITIALIZE EVERYTHING
     ========================================================= */

  function init() {

    /* Language */
    applyLanguage(currentLanguage);

    /* Reveal */
    revealElements();

    /* Typing */
    startTyping();

    /* Ensure page is visible if JS loads late */
    setTimeout(function () {

      document.body.classList.remove(
        "js-loading"
      );

    }, 100);
  }

  if (
    document.readyState === "loading"
  ) {

    document.addEventListener(
      "DOMContentLoaded",
      init
    );

  } else {
    init();
  }


  /* =========================================================
     25. FAILSAFE
     ========================================================= */

  window.addEventListener(
    "load",
    function () {

      setTimeout(function () {

        document.body.classList.remove(
          "intro-active"
        );

      }, 5500);

    }
  );

})();
