/* =========================================================
   DAGNAW BEYENE TIZAZU
   Developer Portfolio + Tools Hub
   Main JavaScript
========================================================= */

"use strict";

/* =========================================================
   GLOBAL HELPERS
========================================================= */

const $ = (selector, parent = document) => parent.querySelector(selector);
const $$ = (selector, parent = document) =>
    [...parent.querySelectorAll(selector)];

const storage = {
    get(key, fallback = null) {
        try {
            const value = localStorage.getItem(key);
            return value === null ? fallback : value;
        } catch {
            return fallback;
        }
    },

    set(key, value) {
        try {
            localStorage.setItem(key, value);
        } catch {}
    }
};

/* =========================================================
   TRANSLATIONS
========================================================= */

const translations = {

    en: {
        nav_home: "Home",
        nav_about: "About",
        nav_skills: "Skills",
        nav_projects: "Projects",
        nav_tools: "Tools",
        nav_experience: "Experience",
        nav_contact: "Contact",

        hero_available: "Available for opportunities",
        hero_greeting: "Hello, I'm",
        hero_role: "Web Developer • Database Administrator • Creative Technologist",
        hero_description:
            "I build modern web applications, practical database systems and creative digital solutions with a strong interest in AI and IoT.",
        hero_view_work: "View My Work",
        hero_explore_tools: "Explore Tools",
        hero_hire: "Hire Me",

        about_title: "About Me",
        about_subtitle: "Developer • Designer • Problem Solver",
        about_text:
            "I am Dagnaw Beyene Tizazu, an enthusiastic Web Developer, Database Administrator and Graphics/Video Specialist from Bahir Dar, Ethiopia. I enjoy transforming ideas into useful digital products and learning modern technologies.",
        about_text2:
            "My interests include Software Engineering, Artificial Intelligence, IoT, databases and open-source development. I am continuously improving my technical and creative skills through projects and practical learning.",
        about_location: "Bahir Dar, Ethiopia",
        about_focus: "Software Engineering + AI",
        about_learning: "Always Learning",
        about_open: "Open to Opportunities",

        skills_title: "Skills",
        skills_subtitle: "Technologies & creative abilities",

        project_title: "Green Tech Smart Agriculture 2.0",
        project_subtitle: "IoT + AI Smart Agriculture Platform",
        project_description:
            "An intelligent agriculture system designed to monitor farm conditions, automate irrigation, record sensor data offline and support crop disease detection using AI.",
        project_view: "Featured Project",

        tools_title: "Dagnaw Tools Hub",
        tools_subtitle:
            "Useful mini tools for developers, students, creators and everyday digital work.",
        tools_search: "Search tools...",
        all_tools: "All",
        developer_tools: "Developer",
        student_tools: "Student",
        utility_tools: "Utility",
        creative_tools: "Creative",

        open_tool: "Open Tool",

        education_title: "Education",
        experience_title: "Experience",
        goal_title: "My Vision",
        contact_title: "Contact Me",

        contact_name: "Your Name",
        contact_email: "Your Email",
        contact_subject: "Subject",
        contact_message: "Your Message",
        contact_send: "Send Message",

        footer_text:
            "Designed & developed by Dagnaw Beyene Tizazu.",

        /* Tools */

        tool_calculator: "Smart Calculator",
        tool_calculator_desc:
            "Fast calculator for everyday arithmetic and development work.",

        tool_currency: "Currency Converter",
        tool_currency_desc:
            "Convert currencies using built-in reference rates.",

        tool_unit: "Unit Converter",
        tool_unit_desc:
            "Convert length, weight, temperature and digital storage units.",

        tool_password: "Password Generator",
        tool_password_desc:
            "Generate strong random passwords with customizable options.",

        tool_color: "Color Studio",
        tool_color_desc:
            "Pick colors and instantly view HEX, RGB and HSL values.",

        tool_qr: "QR Code Generator",
        tool_qr_desc:
            "Generate a QR code from text, links or contact information.",

        tool_text: "Text Toolkit",
        tool_text_desc:
            "Analyze, transform, clean and copy text quickly.",

        tool_json: "JSON Formatter",
        tool_json_desc:
            "Format, validate and minify JSON data.",

        tool_pomodoro: "Focus Timer",
        tool_pomodoro_desc:
            "Pomodoro timer for focused study and productivity.",

        tool_gpa: "GPA Calculator",
        tool_gpa_desc:
            "Calculate GPA from course credits and grade points.",

        /* Tool UI */

        calculate: "Calculate",
        convert: "Convert",
        generate: "Generate",
        copy: "Copy",
        copied: "Copied!",
        reset: "Reset",
        download: "Download",
        format: "Format",
        validate: "Validate",
        minify: "Minify",
        start: "Start",
        pause: "Pause",
        add_course: "Add Course",
        calculate_gpa: "Calculate GPA",

        password_length: "Password Length",
        uppercase: "Uppercase",
        lowercase: "Lowercase",
        numbers: "Numbers",
        symbols: "Symbols",

        text_input: "Enter your text...",
        json_input: "Paste JSON here...",

        focus: "Focus",
        break: "Break",
        time_left: "Time Left",

        success: "Success",
        error: "Error",
        invalid_json: "Invalid JSON",
        valid_json: "Valid JSON",

        form_success: "Thank you! Your message is ready to be sent.",
        demo_rates:
            "Reference rates are for demonstration and may not represent live market rates."
    },

    am: {
        nav_home: "መነሻ",
        nav_about: "ስለእኔ",
        nav_skills: "ችሎታዎች",
        nav_projects: "ፕሮጀክቶች",
        nav_tools: "መሳሪያዎች",
        nav_experience: "ልምድ",
        nav_contact: "አግኙኝ",

        hero_available: "ለስራ እድሎች ዝግጁ ነኝ",
        hero_greeting: "ሰላም፣ እኔ",
        hero_role: "Web Developer • Database Administrator • Creative Technologist",
        hero_description:
            "ዘመናዊ Web Application፣ Database System እና የፈጠራ Digital Solution እገነባለሁ። በAI እና IoT ላይም ትልቅ ፍላጎት አለኝ።",
        hero_view_work: "ስራዬን ይመልከቱ",
        hero_explore_tools: "መሳሪያዎችን ይመልከቱ",
        hero_hire: "ቅጠሩኝ",

        about_title: "ስለእኔ",
        about_subtitle: "Developer • Designer • Problem Solver",
        about_text:
            "እኔ Dagnaw Beyene Tizazu ነኝ። ከባህር ዳር ኢትዮጵያ የመጣሁ Web Developer፣ Database Administrator እና Graphics/Video Specialist ነኝ። ሀሳቦችን ወደ ጠቃሚ Digital Product መቀየር እወዳለሁ።",
        about_text2:
            "የSoftware Engineering፣ Artificial Intelligence፣ IoT፣ Database እና Open Source Development ቴክኖሎጂዎች ላይ ፍላጎት አለኝ።",
        about_location: "ባህር ዳር፣ ኢትዮጵያ",
        about_focus: "Software Engineering + AI",
        about_learning: "ሁልጊዜ እማራለሁ",
        about_open: "ለእድሎች ክፍት ነኝ",

        skills_title: "ችሎታዎች",
        skills_subtitle: "ቴክኖሎጂዎች እና የፈጠራ ችሎታዎች",

        project_title: "Green Tech Smart Agriculture 2.0",
        project_subtitle: "IoT + AI Smart Agriculture Platform",
        project_description:
            "የእርሻ ሁኔታን የሚከታተል፣ መስኖን በራስ-ሰር የሚቆጣጠር፣ Sensor Data የሚመዘግብ እና AI በመጠቀም የእፅዋት በሽታን ለመለየት የሚረዳ ዘመናዊ የእርሻ ስርዓት።",
        project_view: "ዋና ፕሮጀክት",

        tools_title: "Dagnaw Tools Hub",
        tools_subtitle:
            "ለDeveloper፣ Student፣ Creator እና የዕለት ተዕለት Digital Work ጠቃሚ መሳሪያዎች።",
        tools_search: "መሳሪያ ፈልግ...",
        all_tools: "ሁሉም",
        developer_tools: "Developer",
        student_tools: "ተማሪ",
        utility_tools: "አጠቃላይ",
        creative_tools: "Creative",

        open_tool: "መሳሪያውን ክፈት",

        education_title: "ትምህርት",
        experience_title: "የስራ ልምድ",
        goal_title: "ራዕዬ",
        contact_title: "አግኙኝ",

        contact_name: "ስምዎ",
        contact_email: "Emailዎ",
        contact_subject: "ርዕስ",
        contact_message: "መልዕክትዎ",
        contact_send: "መልዕክት ላክ",

        footer_text:
            "Designed & developed by Dagnaw Beyene Tizazu.",

        tool_calculator: "Smart Calculator",
        tool_calculator_desc:
            "ለዕለታዊ ስሌት እና ለDevelopment ስራ ፈጣን Calculator።",

        tool_currency: "Currency Converter",
        tool_currency_desc:
            "የገንዘብ አይነቶችን በReference Rate ይቀይሩ።",

        tool_unit: "Unit Converter",
        tool_unit_desc:
            "Length፣ Weight፣ Temperature እና Digital Storage ይቀይሩ።",

        tool_password: "Password Generator",
        tool_password_desc:
            "ጠንካራ Random Password በተለያዩ አማራጮች ይፍጠሩ።",

        tool_color: "Color Studio",
        tool_color_desc:
            "Color ይምረጡ እና HEX፣ RGB፣ HSL ዋጋዎችን ያግኙ።",

        tool_qr: "QR Code Generator",
        tool_qr_desc:
            "ከText፣ Link ወይም Contact Information QR Code ይፍጠሩ።",

        tool_text: "Text Toolkit",
        tool_text_desc:
            "Text ይተንትኑ፣ ይቀይሩ፣ ያጽዱ እና Copy ያድርጉ።",

        tool_json: "JSON Formatter",
        tool_json_desc:
            "JSON Data ያስተካክሉ፣ Validate እና Minify ያድርጉ።",

        tool_pomodoro: "Focus Timer",
        tool_pomodoro_desc:
            "ለትምህርት እና Productivity Pomodoro Timer።",

        tool_gpa: "GPA Calculator",
        tool_gpa_desc:
            "Course Credit እና Grade Point በመጠቀም GPA ያስሉ።",

        calculate: "አስላ",
        convert: "ቀይር",
        generate: "ፍጠር",
        copy: "Copy",
        copied: "ተቀድቷል!",
        reset: "እንደገና ጀምር",
        download: "አውርድ",
        format: "Format",
        validate: "Validate",
        minify: "Minify",
        start: "ጀምር",
        pause: "አቁም",
        add_course: "Course ጨምር",
        calculate_gpa: "GPA አስላ",

        password_length: "የPassword ርዝመት",
        uppercase: "ትልቅ ፊደል",
        lowercase: "ትንሽ ፊደል",
        numbers: "ቁጥሮች",
        symbols: "ምልክቶች",

        text_input: "Text እዚህ ያስገቡ...",
        json_input: "JSON እዚህ ይለጥፉ...",

        focus: "Focus",
        break: "እረፍት",
        time_left: "የቀረ ጊዜ",

        success: "ተሳክቷል",
        error: "ስህተት",
        invalid_json: "JSON ልክ አይደለም",
        valid_json: "JSON ትክክል ነው",

        form_success: "እናመሰግናለን! መልዕክትዎ ለመላክ ተዘጋጅቷል።",
        demo_rates: "የCurrency ዋጋዎቹ ለDemo ብቻ ናቸው።"
    },

    om: {
        nav_home: "Mana",
        nav_about: "Waa'ee Koo",
        nav_skills: "Dandeettii",
        nav_projects: "Pirojektoota",
        nav_tools: "Meeshaalee",
        nav_experience: "Muuxannoo",
        nav_contact: "Na Qunnamaa",

        hero_available: "Carraawwan hojiiif qophaa'eera",
        hero_greeting: "Akkam, ani",
        hero_role: "Web Developer • Database Administrator • Creative Technologist",
        hero_description:
            "Web application ammayyaa, database system fi digital solution kalaqaa nan ijaara; AI fi IoT irrattis fedhii guddaa qaba.",
        hero_view_work: "Hojii Koo Ilaali",
        hero_explore_tools: "Meeshaalee Ilaali",
        hero_hire: "Na Qacaraa",

        about_title: "Waa'ee Koo",
        about_subtitle: "Developer • Designer • Problem Solver",
        about_text:
            "Ani Dagnaw Beyene Tizazu, Web Developer, Database Administrator fi Graphics/Video Specialist dha. Yaada gara digital product faayidaa qabuutti jijjiiruu nan jaalladha.",
        about_text2:
            "Software Engineering, Artificial Intelligence, IoT, Database fi Open Source Development irratti fedhii qaba.",
        about_location: "Bahir Dar, Ethiopia",
        about_focus: "Software Engineering + AI",
        about_learning: "Yeroo Hunda Barachaa",
        about_open: "Carraawwanif Banaadha",

        skills_title: "Dandeettii",
        skills_subtitle: "Teknolojii fi dandeettii kalaqaa",

        project_title: "Green Tech Smart Agriculture 2.0",
        project_subtitle: "IoT + AI Smart Agriculture Platform",
        project_description:
            "Sirna qonnaa ammayyaa kan haala qonnaa hordofu, bishaanii kennuu ofumaan to'atu, sensor data galmeessu fi AI fayyadamuun dhibee biqiltootaa adda baasu.",
        project_view: "Pirojektii Ijoo",

        tools_title: "Dagnaw Tools Hub",
        tools_subtitle:
            "Developer, student, creator fi hojii digital guyyaa guyyaaf meeshaalee faayidaa qaban.",
        tools_search: "Meeshaa barbaadi...",
        all_tools: "Hunda",
        developer_tools: "Developer",
        student_tools: "Barataa",
        utility_tools: "Utility",
        creative_tools: "Creative",

        open_tool: "Meeshaa Bani",

        education_title: "Barnoota",
        experience_title: "Muuxannoo Hojii",
        goal_title: "Mul'ata Koo",
        contact_title: "Na Qunnamaa",

        contact_name: "Maqaa Keessan",
        contact_email: "Email Keessan",
        contact_subject: "Mata-duree",
        contact_message: "Ergaa Keessan",
        contact_send: "Ergaa Ergi",

        footer_text: "Designed & developed by Dagnaw Beyene Tizazu.",

        tool_calculator: "Smart Calculator",
        tool_calculator_desc:
            "Herrega saffisaa hojii guyyaa guyyaa fi development'f.",

        tool_currency: "Currency Converter",
        tool_currency_desc:
            "Maallaqa gara maallaqa biraatti jijjiiri.",

        tool_unit: "Unit Converter",
        tool_unit_desc:
            "Length, weight, temperature fi digital storage jijjiiri.",

        tool_password: "Password Generator",
        tool_password_desc:
            "Password cimaa random ta'e filannoowwan adda addaatiin uumi.",

        tool_color: "Color Studio",
        tool_color_desc:
            "Halluu filadhu; HEX, RGB fi HSL ilaali.",

        tool_qr: "QR Code Generator",
        tool_qr_desc:
            "Text, link ykn contact irraa QR Code uumi.",

        tool_text: "Text Toolkit",
        tool_text_desc:
            "Text qoradhu, jijjiiri, qulqulleessi fi copy godhi.",

        tool_json: "JSON Formatter",
        tool_json_desc:
            "JSON format godhi, validate fi minify godhi.",

        tool_pomodoro: "Focus Timer",
        tool_pomodoro_desc:
            "Barnoota fi productivity'f Pomodoro Timer.",

        tool_gpa: "GPA Calculator",
        tool_gpa_desc:
            "Credit fi grade point fayyadamuun GPA shallagi.",

        calculate: "Shallagi",
        convert: "Jijjiiri",
        generate: "Uumi",
        copy: "Copy",
        copied: "Copy ta'eera!",
        reset: "Reset",
        download: "Buusi",
        format: "Format",
        validate: "Validate",
        minify: "Minify",
        start: "Jalqabi",
        pause: "Dhaabi",
        add_course: "Course Dabali",
        calculate_gpa: "GPA Shallagi",

        password_length: "Dheerina Password",
        uppercase: "Uppercase",
        lowercase: "Lowercase",
        numbers: "Lakkoofsota",
        symbols: "Mallattoolee",

        text_input: "Text kee asitti galchi...",
        json_input: "JSON asitti maxxansi...",

        focus: "Focus",
        break: "Boqonnaa",
        time_left: "Yeroo Hafe",

        success: "Milkaa'e",
        error: "Dogoggora",
        invalid_json: "JSON sirrii miti",
        valid_json: "JSON sirrii dha",

        form_success: "Galatoomi! Ergaan kee erguuf qophaa'eera.",
        demo_rates: "Gatiin maallaqaa kun Demo qofaaf."
    },

    zh: {
        nav_home: "首页",
        nav_about: "关于我",
        nav_skills: "技能",
        nav_projects: "项目",
        nav_tools: "工具",
        nav_experience: "经历",
        nav_contact: "联系我",

        hero_available: "正在寻找机会",
        hero_greeting: "你好，我是",
        hero_role: "Web 开发者 • 数据库管理员 • 创意技术人员",
        hero_description:
            "我专注于现代 Web 应用、数据库系统和数字化解决方案，同时对人工智能和物联网充满兴趣。",
        hero_view_work: "查看作品",
        hero_explore_tools: "探索工具",
        hero_hire: "聘用我",

        about_title: "关于我",
        about_subtitle: "开发者 • 设计师 • 问题解决者",
        about_text:
            "我是 Dagnaw Beyene Tizazu，来自埃塞俄比亚巴赫达尔，是一名 Web 开发者、数据库管理员以及平面/视频设计人员。",
        about_text2:
            "我对软件工程、人工智能、物联网、数据库和开源开发非常感兴趣，并通过实践项目不断提升自己的技术能力。",
        about_location: "埃塞俄比亚，巴赫达尔",
        about_focus: "软件工程 + AI",
        about_learning: "持续学习",
        about_open: "开放工作机会",

        skills_title: "技能",
        skills_subtitle: "技术与创意能力",

        project_title: "Green Tech Smart Agriculture 2.0",
        project_subtitle: "IoT + AI 智能农业平台",
        project_description:
            "一个智能农业系统，可以监测农田环境、自动控制灌溉、离线记录传感器数据，并使用 AI 辅助识别作物疾病。",
        project_view: "重点项目",

        tools_title: "Dagnaw Tools Hub",
        tools_subtitle:
            "为开发者、学生、创作者和日常数字工作提供实用的小工具。",
        tools_search: "搜索工具...",
        all_tools: "全部",
        developer_tools: "开发者",
        student_tools: "学生",
        utility_tools: "实用",
        creative_tools: "创意",

        open_tool: "打开工具",

        education_title: "教育经历",
        experience_title: "工作经历",
        goal_title: "我的愿景",
        contact_title: "联系我",

        contact_name: "您的姓名",
        contact_email: "您的邮箱",
        contact_subject: "主题",
        contact_message: "您的留言",
        contact_send: "发送消息",

        footer_text: "Designed & developed by Dagnaw Beyene Tizazu.",

        tool_calculator: "智能计算器",
        tool_calculator_desc: "快速完成日常计算和开发工作中的数学运算。",

        tool_currency: "货币转换器",
        tool_currency_desc: "使用参考汇率进行货币转换。",

        tool_unit: "单位转换器",
        tool_unit_desc: "转换长度、重量、温度和数字存储单位。",

        tool_password: "密码生成器",
        tool_password_desc: "生成可自定义的高强度随机密码。",

        tool_color: "颜色工作室",
        tool_color_desc: "选择颜色并查看 HEX、RGB 和 HSL 数值。",

        tool_qr: "二维码生成器",
        tool_qr_desc: "从文字、链接或联系信息生成二维码。",

        tool_text: "文本工具箱",
        tool_text_desc: "快速分析、转换、清理和复制文本。",

        tool_json: "JSON 格式化工具",
        tool_json_desc: "格式化、验证和压缩 JSON 数据。",

        tool_pomodoro: "专注计时器",
        tool_pomodoro_desc: "帮助学习和提高效率的番茄钟。",

        tool_gpa: "GPA 计算器",
        tool_gpa_desc: "根据课程学分和成绩点计算 GPA。",

        calculate: "计算",
        convert: "转换",
        generate: "生成",
        copy: "复制",
        copied: "已复制!",
        reset: "重置",
        download: "下载",
        format: "格式化",
        validate: "验证",
        minify: "压缩",
        start: "开始",
        pause: "暂停",
        add_course: "添加课程",
        calculate_gpa: "计算 GPA",

        password_length: "密码长度",
        uppercase: "大写字母",
        lowercase: "小写字母",
        numbers: "数字",
        symbols: "符号",

        text_input: "请输入文本...",
        json_input: "请粘贴 JSON...",

        focus: "专注",
        break: "休息",
        time_left: "剩余时间",

        success: "成功",
        error: "错误",
        invalid_json: "JSON 无效",
        valid_json: "JSON 有效",

        form_success: "谢谢！您的消息已经准备发送。",
        demo_rates: "汇率仅供演示参考。"
    }
};


/* =========================================================
   LANGUAGE SYSTEM
========================================================= */

let currentLanguage =
    storage.get("dagnaw-language", "en");

function t(key) {
    return translations[currentLanguage]?.[key] ||
           translations.en[key] ||
           key;
}

function translatePage() {

    $$("[data-i18n]").forEach(element => {

        const key = element.dataset.i18n;

        if (translations[currentLanguage]?.[key]) {
            element.textContent = t(key);
        }
    });

    $$("[data-i18n-placeholder]").forEach(element => {

        const key = element.dataset.i18nPlaceholder;

        if (translations[currentLanguage]?.[key]) {
            element.placeholder = t(key);
        }
    });

    document.documentElement.lang = currentLanguage;

    const select = $("#languageSelect");

    if (select) {
        select.value = currentLanguage;
    }

    translateStaticElements();
}

function translateStaticElements() {

    /* Tool titles/descriptions */
    $$(".tool-card").forEach(card => {

        const key = card.dataset.toolKey;

        if (!key) return;

        const title = $(".tool-card-title", card);
        const desc = $(".tool-card-description", card);

        if (title && translations[currentLanguage]?.[`tool_${key}`]) {
            title.textContent = t(`tool_${key}`);
        }

        if (desc && translations[currentLanguage]?.[`tool_${key}_desc`]) {
            desc.textContent = t(`tool_${key}_desc`);
        }
    });

    /* Common placeholder fallbacks */
    const search = $("#toolSearch");

    if (search) {
        search.placeholder = t("tools_search");
    }
}

function initLanguage() {

    const select = $("#languageSelect");

    if (!select) return;

    select.value = currentLanguage;

    select.addEventListener("change", event => {

        currentLanguage = event.target.value;

        storage.set(
            "dagnaw-language",
            currentLanguage
        );

        translatePage();

        showToast(
            currentLanguage === "am"
                ? "ቋንቋ ተቀይሯል"
                : "Language changed"
        );
    });

    translatePage();
}


/* =========================================================
   THEME
========================================================= */

function initTheme() {

    const toggle = $("#themeToggle");

    if (!toggle) return;

    const savedTheme =
        storage.get("dagnaw-theme", "dark");

    document.documentElement.dataset.theme =
        savedTheme;

    updateThemeIcon();

    toggle.addEventListener("click", () => {

        const current =
            document.documentElement.dataset.theme;

        const next =
            current === "light" ? "dark" : "light";

        document.documentElement.dataset.theme =
            next;

        storage.set("dagnaw-theme", next);

        updateThemeIcon();
    });
}

function updateThemeIcon() {

    const toggle = $("#themeToggle");

    if (!toggle) return;

    const theme =
        document.documentElement.dataset.theme;

    toggle.textContent =
        theme === "light" ? "🌙" : "☀️";
}


/* =========================================================
   MOBILE MENU
========================================================= */

function initMobileMenu() {

    const menuButton = $("#menuToggle");
    const mobileMenu = $("#mobileMenu");

    if (!menuButton || !mobileMenu) return;

    menuButton.addEventListener("click", () => {

        mobileMenu.classList.toggle("active");

        menuButton.classList.toggle("active");
    });

    $$("a", mobileMenu).forEach(link => {

        link.addEventListener("click", () => {

            mobileMenu.classList.remove("active");
            menuButton.classList.remove("active");
        });
    });
}


/* =========================================================
   TYPING ANIMATION
========================================================= */

function initTyping() {

    const element = $("#typingText");

    if (!element) return;

    const words = [
        "Web Developer",
        "Database Administrator",
        "Software Engineer",
        "AI Enthusiast",
        "IoT Developer",
        "Creative Technologist"
    ];

    let wordIndex = 0;
    let charIndex = 0;
    let deleting = false;

    function type() {

        const word = words[wordIndex];

        if (!deleting) {

            element.textContent =
                word.substring(0, charIndex + 1);

            charIndex++;

            if (charIndex === word.length) {

                deleting = true;

                setTimeout(type, 1500);
                return;
            }

        } else {

            element.textContent =
                word.substring(0, charIndex - 1);

            charIndex--;

            if (charIndex === 0) {

                deleting = false;

                wordIndex =
                    (wordIndex + 1) % words.length;
            }
        }

        setTimeout(
            type,
            deleting ? 55 : 100
        );
    }

    type();
}


/* =========================================================
   PARTICLE BACKGROUND
========================================================= */

function initParticles() {

    const canvas = $("#particles");

    if (!canvas) return;

    const ctx = canvas.getContext("2d");

    let width;
    let height;

    const particles = [];

    function resize() {

        width = canvas.width =
            window.innerWidth;

        height = canvas.height =
            window.innerHeight;
    }

    resize();

    window.addEventListener("resize", resize);

    const count =
        Math.min(
            80,
            Math.floor(window.innerWidth / 15)
        );

    for (let i = 0; i < count; i++) {

        particles.push({
            x: Math.random() * width,
            y: Math.random() * height,
            size: Math.random() * 2 + 0.5,
            speedX: (Math.random() - 0.5) * 0.35,
            speedY: (Math.random() - 0.5) * 0.35
        });
    }

    function animate() {

        ctx.clearRect(
            0,
            0,
            width,
            height
        );

        particles.forEach(p => {

            p.x += p.speedX;
            p.y += p.speedY;

            if (p.x < 0 || p.x > width) {
                p.speedX *= -1;
            }

            if (p.y < 0 || p.y > height) {
                p.speedY *= -1;
            }

            ctx.beginPath();

            ctx.arc(
                p.x,
                p.y,
                p.size,
                0,
                Math.PI * 2
            );

            ctx.fillStyle =
                "rgba(90,160,255,.35)";

            ctx.fill();
        });

        requestAnimationFrame(animate);
    }

    animate();
}


/* =========================================================
   SCROLL REVEAL
========================================================= */

function initReveal() {

    const elements =
        $$(".reveal, .reveal-left, .reveal-right");

    if (!elements.length) return;

    const observer =
        new IntersectionObserver(
            entries => {

                entries.forEach(entry => {

                    if (entry.isIntersecting) {

                        entry.target.classList.add(
                            "visible"
                        );

                        observer.unobserve(
                            entry.target
                        );
                    }
                });

            },
            {
                threshold: 0.12
            }
        );

    elements.forEach(el =>
        observer.observe(el)
    );
}


/* =========================================================
   ACTIVE NAVIGATION
========================================================= */

function initActiveNav() {

    const sections =
        $$("main section[id]");

    const links =
        $$("nav a[href^='#']");

    if (!sections.length || !links.length) return;

    const observer =
        new IntersectionObserver(
            entries => {

                entries.forEach(entry => {

                    if (!entry.isIntersecting)
                        return;

                    links.forEach(link =>
                        link.classList.remove("active")
                    );

                    const active =
                        links.find(
                            link =>
                                link.getAttribute("href") ===
                                `#${entry.target.id}`
                        );

                    if (active) {
                        active.classList.add("active");
                    }
                });

            },
            {
                rootMargin: "-35% 0px -55% 0px"
            }
        );

    sections.forEach(section =>
        observer.observe(section)
    );
}


/* =========================================================
   SCROLL TOP
========================================================= */

function initScrollTop() {

    const button = $("#scrollTop");

    if (!button) return;

    window.addEventListener(
        "scroll",
        () => {

            if (window.scrollY > 500) {
                button.classList.add("show");
            } else {
                button.classList.remove("show");
            }
        }
    );

    button.addEventListener(
        "click",
        () => {

            window.scrollTo({
                top: 0,
                behavior: "smooth"
            });
        }
    );
}


/* =========================================================
   TOOLS HUB FILTER
========================================================= */

function initToolFilter() {

    const search = $("#toolSearch");
    const buttons = $$(".tool-filter");
    const cards = $$(".tool-card");

    if (!cards.length) return;

    let category = "all";

    function filterTools() {

        const query =
            (search?.value || "")
                .toLowerCase()
                .trim();

        cards.forEach(card => {

            const text =
                card.textContent.toLowerCase();

            const cardCategory =
                card.dataset.category || "all";

            const categoryMatch =
                category === "all" ||
                cardCategory === category;

            const searchMatch =
                !query ||
                text.includes(query);

            card.style.display =
                categoryMatch && searchMatch
                    ? ""
                    : "none";
        });
    }

    buttons.forEach(button => {

        button.addEventListener(
            "click",
            () => {

                buttons.forEach(b =>
                    b.classList.remove("active")
                );

                button.classList.add("active");

                category =
                    button.dataset.category ||
                    "all";

                filterTools();
            }
        );
    });

    search?.addEventListener(
        "input",
        filterTools
    );
}


/* =========================================================
   TOOL MODAL
========================================================= */

const toolModal = {
    element: null,
    content: null
};

function initToolModal() {

    toolModal.element = $("#toolModal");
    toolModal.content = $("#toolContent");

    if (!toolModal.element) return;

    $$("[data-tool-open]").forEach(button => {

        button.addEventListener(
            "click",
            () => {

                const tool =
                    button.dataset.toolOpen;

                openTool(tool);
            }
        );
    });

    const close =
        $("#toolModalClose");

    close?.addEventListener(
        "click",
        closeTool
    );

    toolModal.element.addEventListener(
        "click",
        event => {

            if (
                event.target ===
                toolModal.element
            ) {
                closeTool();
            }
        }
    );

    document.addEventListener(
        "keydown",
        event => {

            if (
                event.key === "Escape" &&
                toolModal.element.classList.contains("active")
            ) {
                closeTool();
            }
        }
    );
}

function openTool(name) {

    if (!toolModal.element ||
        !toolModal.content) return;

    const builders = {

        calculator: buildCalculator,
        currency: buildCurrencyConverter,
        unit: buildUnitConverter,
        password: buildPasswordGenerator,
        color: buildColorStudio,
        qr: buildQRGenerator,
        text: buildTextToolkit,
        json: buildJSONFormatter,
        pomodoro: buildPomodoro,
        gpa: buildGPACalculator
    };

    const builder = builders[name];

    if (!builder) return;

    toolModal.content.innerHTML =
        builder();

    toolModal.element.classList.add("active");

    document.body.style.overflow = "hidden";

    initTool(name);
}

function closeTool() {

    if (!toolModal.element) return;

    toolModal.element.classList.remove("active");

    document.body.style.overflow = "";
}


/* =========================================================
   TOOL 1 — CALCULATOR
========================================================= */

function buildCalculator() {

    return `
        <div class="tool-ui calculator-ui">

            <h2>🧮 ${t("tool_calculator")}</h2>

            <input
                id="calcDisplay"
                class="tool-input calculator-display"
                type="text"
                readonly
                placeholder="0"
            >

            <div class="calculator-grid">

                <button data-calc="clear">C</button>
                <button data-calc="(">(</button>
                <button data-calc=")">)</button>
                <button data-calc="/">÷</button>

                <button data-calc="7">7</button>
                <button data-calc="8">8</button>
                <button data-calc="9">9</button>
                <button data-calc="*">×</button>

                <button data-calc="4">4</button>
                <button data-calc="5">5</button>
                <button data-calc="6">6</button>
                <button data-calc="-">−</button>

                <button data-calc="1">1</button>
                <button data-calc="2">2</button>
                <button data-calc="3">3</button>
                <button data-calc="+">+</button>

                <button data-calc="0">0</button>
                <button data-calc=".">.</button>
                <button data-calc="%">%</button>
                <button data-calc="equals">=</button>

            </div>

        </div>
    `;
}

function initCalculator() {

    const display = $("#calcDisplay");

    if (!display) return;

    $$("[data-calc]").forEach(button => {

        button.addEventListener(
            "click",
            () => {

                const value =
                    button.dataset.calc;

                if (value === "clear") {

                    display.value = "";
                    return;
                }

                if (value === "equals") {

                    calculateExpression(display);
                    return;
                }

                display.value += value;
            }
        );
    });
}

function calculateExpression(display) {

    let expression =
        display.value.trim();

    if (!expression) return;

    if (!/^[0-9+\-*/().%\s]+$/.test(expression)) {

        display.value = "Error";
        return;
    }

    try {

        expression =
            expression.replace(
                /(\d+(?:\.\d+)?)%/g,
                "($1/100)"
            );

        const result =
            Function(
                `"use strict"; return (${expression})`
            )();

        if (!Number.isFinite(result)) {
            throw new Error();
        }

        display.value =
            Number(result.toFixed(10));

    } catch {

        display.value = "Error";
    }
}


/* =========================================================
   TOOL 2 — CURRENCY CONVERTER
========================================================= */

function buildCurrencyConverter() {

    return `
        <div class="tool-ui">

            <h2>💱 ${t("tool_currency")}</h2>

            <div class="tool-grid-2">

                <div>
                    <label>Amount</label>
                    <input
                        id="currencyAmount"
                        class="tool-input"
                        type="number"
                        value="1"
                    >
                </div>

                <div>
                    <label>From</label>
                    <select
                        id="currencyFrom"
                        class="tool-input"
                    >
                        <option>USD</option>
                        <option>ETB</option>
                        <option>EUR</option>
                        <option>GBP</option>
                        <option>CNY</option>
                        <option>KES</option>
                    </select>
                </div>

                <div>
                    <label>To</label>
                    <select
                        id="currencyTo"
                        class="tool-input"
                    >
                        <option>ETB</option>
                        <option>USD</option>
                        <option>EUR</option>
                        <option>GBP</option>
                        <option>CNY</option>
                        <option>KES</option>
                    </select>
                </div>

            </div>

            <button
                id="currencyConvert"
                class="tool-button"
            >
                ${t("convert")}
            </button>

            <div
                id="currencyResult"
                class="tool-result"
            ></div>

            <small>
                ${t("demo_rates")}
            </small>

        </div>
    `;
}

function initCurrency() {

    const rates = {

        USD: 1,
        ETB: 150,
        EUR: 0.92,
        GBP: 0.78,
        CNY: 7.15,
        KES: 129
    };

    $("#currencyConvert")?.addEventListener(
        "click",
        () => {

            const amount =
                Number($("#currencyAmount").value);

            const from =
                $("#currencyFrom").value;

            const to =
                $("#currencyTo").value;

            if (!Number.isFinite(amount)) return;

            const usd =
                amount / rates[from];

            const result =
                usd * rates[to];

            $("#currencyResult").textContent =
                `${amount} ${from} = ${result.toFixed(2)} ${to}`;
        }
    );
}


/* =========================================================
   TOOL 3 — UNIT CONVERTER
========================================================= */

function buildUnitConverter() {

    return `
        <div class="tool-ui">

            <h2>📏 ${t("tool_unit")}</h2>

            <select
                id="unitType"
                class="tool-input"
            >
                <option value="length">Length</option>
                <option value="weight">Weight</option>
                <option value="temperature">Temperature</option>
                <option value="storage">Digital Storage</option>
            </select>

            <div class="tool-grid-2">

                <input
                    id="unitValue"
                    class="tool-input"
                    type="number"
                    placeholder="Value"
                >

                <select
                    id="unitFrom"
                    class="tool-input"
                ></select>

                <select
                    id="unitTo"
                    class="tool-input"
                ></select>

            </div>

            <button
                id="unitConvert"
                class="tool-button"
            >
                ${t("convert")}
            </button>

            <div
                id="unitResult"
                class="tool-result"
            ></div>

        </div>
    `;
}

function initUnit() {

    const type = $("#unitType");
    const from = $("#unitFrom");
    const to = $("#unitTo");

    const units = {

        length: [
            ["Meter", 1],
            ["Kilometer", 1000],
            ["Centimeter", 0.01],
            ["Millimeter", 0.001],
            ["Mile", 1609.344],
            ["Foot", 0.3048],
            ["Inch", 0.0254]
        ],

        weight: [
            ["Kilogram", 1],
            ["Gram", 0.001],
            ["Pound", 0.453592],
            ["Ounce", 0.0283495]
        ],

        storage: [
            ["Byte", 1],
            ["KB", 1024],
            ["MB", 1024 ** 2],
            ["GB", 1024 ** 3],
            ["TB", 1024 ** 4]
        ],

        temperature: [
            ["Celsius", "C"],
            ["Fahrenheit", "F"],
            ["Kelvin", "K"]
        ]
    };

    function populate() {

        const list =
            units[type.value];

        from.innerHTML = "";
        to.innerHTML = "";

        list.forEach(item => {

            from.innerHTML +=
                `<option value="${item[1]}">${item[0]}</option>`;

            to.innerHTML +=
                `<option value="${item[1]}">${item[0]}</option>`;
        });
    }

    populate();

    type.addEventListener(
        "change",
        populate
    );

    $("#unitConvert")?.addEventListener(
        "click",
        () => {

            const value =
                Number($("#unitValue").value);

            const fromValue =
                from.value;

            const toValue =
                to.value;

            if (!Number.isFinite(value)) return;

            let result;

            if (type.value === "temperature") {

                result =
                    convertTemperature(
                        value,
                        fromValue,
                        toValue
                    );

            } else {

                result =
                    value *
                    Number(fromValue) /
                    Number(toValue);
            }

            $("#unitResult").textContent =
                `Result: ${result.toFixed(4)}`;
        }
    );
}

function convertTemperature(value, from, to) {

    let celsius;

    if (from === "C") celsius = value;
    if (from === "F") celsius = (value - 32) * 5 / 9;
    if (from === "K") celsius = value - 273.15;

    if (to === "C") return celsius;
    if (to === "F") return celsius * 9 / 5 + 32;
    if (to === "K") return celsius + 273.15;
}


/* =========================================================
   TOOL 4 — PASSWORD GENERATOR
========================================================= */

function buildPasswordGenerator() {

    return `
        <div class="tool-ui">

            <h2>🔐 ${t("tool_password")}</h2>

            <label>
                ${t("password_length")}
            </label>

            <input
                id="passwordLength"
                class="tool-input"
                type="range"
                min="6"
                max="64"
                value="16"
            >

            <strong id="passwordLengthValue">16</strong>

            <div class="check-grid">

                <label>
                    <input
                        id="passUpper"
                        type="checkbox"
                        checked
                    >
                    ${t("uppercase")}
                </label>

                <label>
                    <input
                        id="passLower"
                        type="checkbox"
                        checked
                    >
                    ${t("lowercase")}
                </label>

                <label>
                    <input
                        id="passNumbers"
                        type="checkbox"
                        checked
                    >
                    ${t("numbers")}
                </label>

                <label>
                    <input
                        id="passSymbols"
                        type="checkbox"
                        checked
                    >
                    ${t("symbols")}
                </label>

            </div>

            <button
                id="generatePassword"
                class="tool-button"
            >
                ${t("generate")}
            </button>

            <div class="tool-copy-row">

                <input
                    id="passwordOutput"
                    class="tool-input"
                    readonly
                >

                <button
                    id="copyPassword"
                    class="tool-button"
                >
                    ${t("copy")}
                </button>

            </div>

        </div>
    `;
}

function initPassword() {

    const length =
        $("#passwordLength");

    const output =
        $("#passwordOutput");

    length?.addEventListener(
        "input",
        () => {

            $("#passwordLengthValue")
                .textContent =
                length.value;
        }
    );

    $("#generatePassword")?.addEventListener(
        "click",
        () => {

            const result =
                generatePassword(
                    Number(length.value),
                    $("#passUpper").checked,
                    $("#passLower").checked,
                    $("#passNumbers").checked,
                    $("#passSymbols").checked
                );

            output.value = result;
        }
    );

    $("#copyPassword")?.addEventListener(
        "click",
        () => copyText(output.value)
    );

    $("#generatePassword")?.click();
}

function generatePassword(
    length,
    upper,
    lower,
    numbers,
    symbols
) {

    let chars = "";

    if (upper) chars += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    if (lower) chars += "abcdefghijklmnopqrstuvwxyz";
    if (numbers) chars += "0123456789";
    if (symbols) chars += "!@#$%^&*()_+-=[]{}<>?";

    if (!chars) return "";

    const array =
        new Uint32Array(length);

    crypto.getRandomValues(array);

    return [...array]
        .map(n => chars[n % chars.length])
        .join("");
}


/* =========================================================
   TOOL 5 — COLOR STUDIO
========================================================= */

function buildColorStudio() {

    return `
        <div class="tool-ui">

            <h2>🎨 ${t("tool_color")}</h2>

            <input
                id="colorPicker"
                type="color"
                value="#4f8cff"
                class="color-picker"
            >

            <div
                id="colorPreview"
                class="color-preview"
            ></div>

            <div class="color-values">

                <div>
                    <span>HEX</span>
                    <strong id="hexValue">
                        #4F8CFF
                    </strong>
                </div>

                <div>
                    <span>RGB</span>
                    <strong id="rgbValue">
                        rgb(79,140,255)
                    </strong>
                </div>

                <div>
                    <span>HSL</span>
                    <strong id="hslValue">
                        hsl(218,100%,65%)
                    </strong>
                </div>

            </div>

            <button
                id="copyColor"
                class="tool-button"
            >
                ${t("copy")}
            </button>

        </div>
    `;
}

function initColor() {

    const picker =
        $("#colorPicker");

    function update() {

        const hex =
            picker.value.toUpperCase();

        const rgb =
            hexToRgb(hex);

        const hsl =
            rgbToHsl(
                rgb.r,
                rgb.g,
                rgb.b
            );

        $("#colorPreview").style.background =
            hex;

        $("#hexValue").textContent =
            hex;

        $("#rgbValue").textContent =
            `rgb(${rgb.r}, ${rgb.g}, ${rgb.b})`;

        $("#hslValue").textContent =
            `hsl(${hsl.h}, ${hsl.s}%, ${hsl.l}%)`;
    }

    picker?.addEventListener(
        "input",
        update
    );

    $("#copyColor")?.addEventListener(
        "click",
        () => copyText($("#hexValue").textContent)
    );

    update();
}

function hexToRgb(hex) {

    const value =
        hex.replace("#", "");

    return {
        r: parseInt(value.substring(0, 2), 16),
        g: parseInt(value.substring(2, 4), 16),
        b: parseInt(value.substring(4, 6), 16)
    };
}

function rgbToHsl(r, g, b) {

    r /= 255;
    g /= 255;
    b /= 255;

    const max =
        Math.max(r, g, b);

    const min =
        Math.min(r, g, b);

    let h = 0;
    let s = 0;

    const l = (max + min) / 2;

    if (max !== min) {

        const d = max - min;

        s =
            l > 0.5
                ? d / (2 - max - min)
                : d / (max + min);

        switch (max) {

            case r:
                h =
                    (g - b) / d +
                    (g < b ? 6 : 0);
                break;

            case g:
                h =
                    (b - r) / d + 2;
                break;

            case b:
                h =
                    (r - g) / d + 4;
        }

        h /= 6;
    }

    return {
        h: Math.round(h * 360),
        s: Math.round(s * 100),
        l: Math.round(l * 100)
    };
}


/* =========================================================
   TOOL 6 — QR CODE GENERATOR
========================================================= */

function buildQRGenerator() {

    return `
        <div class="tool-ui">

            <h2>📱 ${t("tool_qr")}</h2>

            <textarea
                id="qrText"
                class="tool-textarea"
                placeholder="https://example.com"
                rows="4"
            ></textarea>

            <button
                id="generateQR"
                class="tool-button"
            >
                ${t("generate")}
            </button>

            <div
                id="qrResult"
                class="qr-result"
            ></div>

            <small>
                QR generation requires an internet connection.
            </small>

        </div>
    `;
}

function initQR() {

    $("#generateQR")?.addEventListener(
        "click",
        () => {

            const text =
                $("#qrText").value.trim();

            if (!text) {
                showToast("Enter text first");
                return;
            }

            const url =
                "https://api.qrserver.com/v1/create-qr-code/" +
                "?size=240x240&data=" +
                encodeURIComponent(text);

            $("#qrResult").innerHTML = `
                <img
                    src="${url}"
                    alt="QR Code"
                    class="qr-image"
                >

                <a
                    href="${url}"
                    target="_blank"
                    rel="noopener"
                    class="tool-button"
                >
                    ${t("download")}
                </a>
            `;
        }
    );
}


/* =========================================================
   TOOL 7 — TEXT TOOLKIT
========================================================= */

function buildTextToolkit() {

    return `
        <div class="tool-ui">

            <h2>📝 ${t("tool_text")}</h2>

            <textarea
                id="textToolInput"
                class="tool-textarea"
                rows="8"
                placeholder="${t("text_input")}"
            ></textarea>

            <div
                id="textStats"
                class="tool-result"
            >
                Characters: 0 | Words: 0 | Lines: 0
            </div>

            <div class="tool-actions">

                <button
                    id="textUpper"
                    class="tool-button"
                >
                    UPPERCASE
                </button>

                <button
                    id="textLower"
                    class="tool-button"
                >
                    lowercase
                </button>

                <button
                    id="textClean"
                    class="tool-button"
                >
                    Clean Spaces
                </button>

                <button
                    id="textCopy"
                    class="tool-button"
                >
                    ${t("copy")}
                </button>

                <button
                    id="textReset"
                    class="tool-button"
                >
                    ${t("reset")}
                </button>

            </div>

        </div>
    `;
}

function initTextToolkit() {

    const input =
        $("#textToolInput");

    const stats =
        $("#textStats");

    function updateStats() {

        const text =
            input.value;

        const words =
            text.trim()
                ? text.trim().split(/\s+/).length
                : 0;

        const lines =
            text
                ? text.split(/\n/).length
                : 0;

        stats.textContent =
            `Characters: ${text.length} | ` +
            `Words: ${words} | ` +
            `Lines: ${lines}`;
    }

    input?.addEventListener(
        "input",
        updateStats
    );

    $("#textUpper")?.addEventListener(
        "click",
        () => {
            input.value =
                input.value.toUpperCase();

            updateStats();
        }
    );

    $("#textLower")?.addEventListener(
        "click",
        () => {
            input.value =
                input.value.toLowerCase();

            updateStats();
        }
    );

    $("#textClean")?.addEventListener(
        "click",
        () => {

            input.value =
                input.value
                    .replace(/[ \t]+/g, " ")
                    .replace(/\n\s+/g, "\n")
                    .trim();

            updateStats();
        }
    );

    $("#textCopy")?.addEventListener(
        "click",
        () => copyText(input.value)
    );

    $("#textReset")?.addEventListener(
        "click",
        () => {

            input.value = "";
            updateStats();
        }
    );
}


/* =========================================================
   TOOL 8 — JSON FORMATTER
========================================================= */

function buildJSONFormatter() {

    return `
        <div class="tool-ui">

            <h2>{ } ${t("tool_json")}</h2>

            <textarea
                id="jsonInput"
                class="tool-textarea"
                rows="10"
                placeholder="${t("json_input")}"
            ></textarea>

            <div class="tool-actions">

                <button
                    id="jsonFormat"
                    class="tool-button"
                >
                    ${t("format")}
                </button>

                <button
                    id="jsonValidate"
                    class="tool-button"
                >
                    ${t("validate")}
                </button>

                <button
                    id="jsonMinify"
                    class="tool-button"
                >
                    ${t("minify")}
                </button>

                <button
                    id="jsonCopy"
                    class="tool-button"
                >
                    ${t("copy")}
                </button>

            </div>

            <div
                id="jsonResult"
                class="tool-result"
            ></div>

        </div>
    `;
}

function initJSON() {

    const input =
        $("#jsonInput");

    const result =
        $("#jsonResult");

    $("#jsonFormat")?.addEventListener(
        "click",
        () => {

            try {

                const parsed =
                    JSON.parse(input.value);

                input.value =
                    JSON.stringify(
                        parsed,
                        null,
                        4
                    );

                result.textContent =
                    t("valid_json");

            } catch {

                result.textContent =
                    t("invalid_json");
            }
        }
    );

    $("#jsonValidate")?.addEventListener(
        "click",
        () => {

            try {

                JSON.parse(input.value);

                result.textContent =
                    `✓ ${t("valid_json")}`;

            } catch (error) {

                result.textContent =
                    `✗ ${t("invalid_json")}: ${error.message}`;
            }
        }
    );

    $("#jsonMinify")?.addEventListener(
        "click",
        () => {

            try {

                const parsed =
                    JSON.parse(input.value);

                input.value =
                    JSON.stringify(parsed);

                result.textContent =
                    t("valid_json");

            } catch {

                result.textContent =
                    t("invalid_json");
            }
        }
    );

    $("#jsonCopy")?.addEventListener(
        "click",
        () => copyText(input.value)
    );
}


/* =========================================================
   TOOL 9 — POMODORO TIMER
========================================================= */

let pomodoroInterval = null;

function buildPomodoro() {

    return `
        <div class="tool-ui pomodoro-ui">

            <h2>⏱️ ${t("tool_pomodoro")}</h2>

            <div class="pomodoro-mode">
                <button
                    id="focusMode"
                    class="tool-button"
                >
                    ${t("focus")}
                </button>

                <button
                    id="breakMode"
                    class="tool-button"
                >
                    ${t("break")}
                </button>
            </div>

            <div
                id="pomodoroTime"
                class="pomodoro-time"
            >
                25:00
            </div>

            <div class="tool-actions">

                <button
                    id="pomodoroStart"
                    class="tool-button"
                >
                    ${t("start")}
                </button>

                <button
                    id="pomodoroPause"
                    class="tool-button"
                >
                    ${t("pause")}
                </button>

                <button
                    id="pomodoroReset"
                    class="tool-button"
                >
                    ${t("reset")}
                </button>

            </div>

        </div>
    `;
}

function initPomodoro() {

    let seconds = 25 * 60;

    function update() {

        const minutes =
            Math.floor(seconds / 60);

        const secs =
            seconds % 60;

        $("#pomodoroTime").textContent =
            `${String(minutes).padStart(2, "0")}:` +
            `${String(secs).padStart(2, "0")}`;
    }

    function stop() {

        clearInterval(pomodoroInterval);
        pomodoroInterval = null;
    }

    $("#focusMode")?.addEventListener(
        "click",
        () => {

            stop();
            seconds = 25 * 60;
            update();
        }
    );

    $("#breakMode")?.addEventListener(
        "click",
        () => {

            stop();
            seconds = 5 * 60;
            update();
        }
    );

    $("#pomodoroStart")?.addEventListener(
        "click",
        () => {

            if (pomodoroInterval) return;

            pomodoroInterval =
                setInterval(
                    () => {

                        if (seconds <= 0) {

                            stop();

                            showToast(
                                "Timer finished!"
                            );

                            return;
                        }

                        seconds--;
                        update();

                    },
                    1000
                );
        }
    );

    $("#pomodoroPause")?.addEventListener(
        "click",
        stop
    );

    $("#pomodoroReset")?.addEventListener(
        "click",
        () => {

            stop();

            seconds = 25 * 60;

            update();
        }
    );

    update();
}


/* =========================================================
   TOOL 10 — GPA CALCULATOR
========================================================= */

function buildGPACalculator() {

    return `
        <div class="tool-ui">

            <h2>🎓 ${t("tool_gpa")}</h2>

            <div id="gpaCourses">

                ${gpaRow(1)}
                ${gpaRow(2)}
                ${gpaRow(3)}

            </div>

            <div class="tool-actions">

                <button
                    id="addGpaCourse"
                    class="tool-button"
                >
                    + ${t("add_course")}
                </button>

                <button
                    id="calculateGPA"
                    class="tool-button"
                >
                    ${t("calculate_gpa")}
                </button>

            </div>

            <div
                id="gpaResult"
                class="tool-result"
            >
                GPA: 0.00
            </div>

        </div>
    `;
}

function gpaRow(number) {

    return `
        <div class="gpa-row">

            <input
                class="tool-input course-name"
                placeholder="Course ${number}"
            >

            <input
                class="tool-input course-credit"
                type="number"
                min="1"
                step="0.5"
                placeholder="Credit"
                value="3"
            >

            <select
                class="tool-input course-grade"
            >
                <option value="4">A</option>
                <option value="3.75">A-</option>
                <option value="3.5">B+</option>
                <option value="3">B</option>
                <option value="2.75">B-</option>
                <option value="2.5">C+</option>
                <option value="2">C</option>
                <option value="1.75">C-</option>
                <option value="1.5">D</option>
                <option value="0">F</option>
            </select>

        </div>
    `;
}

function initGPA() {

    const courses =
        $("#gpaCourses");

    let count = 3;

    $("#addGpaCourse")?.addEventListener(
        "click",
        () => {

            count++;

            courses.insertAdjacentHTML(
                "beforeend",
                gpaRow(count)
            );
        }
    );

    $("#calculateGPA")?.addEventListener(
        "click",
        () => {

            const rows =
                $$(".gpa-row", courses);

            let totalPoints = 0;
            let totalCredits = 0;

            rows.forEach(row => {

                const credit =
                    Number(
                        $(".course-credit", row).value
                    );

                const grade =
                    Number(
                        $(".course-grade", row).value
                    );

                if (
                    Number.isFinite(credit) &&
                    credit > 0
                ) {

                    totalCredits += credit;
                    totalPoints +=
                        credit * grade;
                }
            });

            const gpa =
                totalCredits
                    ? totalPoints / totalCredits
                    : 0;

            $("#gpaResult").textContent =
                `GPA: ${gpa.toFixed(2)} / 4.00`;
        }
    );
}


/* =========================================================
   TOOL INITIALIZER
========================================================= */

function initTool(name) {

    switch (name) {

        case "calculator":
            initCalculator();
            break;

        case "currency":
            initCurrency();
            break;

        case "unit":
            initUnit();
            break;

        case "password":
            initPassword();
            break;

        case "color":
            initColor();
            break;

        case "qr":
            initQR();
            break;

        case "text":
            initTextToolkit();
            break;

        case "json":
            initJSON();
            break;

        case "pomodoro":
            initPomodoro();
            break;

        case "gpa":
            initGPA();
            break;
    }
}


/* =========================================================
   COPY SYSTEM
========================================================= */

async function copyText(text) {

    if (!text) return;

    try {

        await navigator.clipboard.writeText(text);

        showToast(t("copied"));

    } catch {

        const textarea =
            document.createElement("textarea");

        textarea.value = text;

        document.body.appendChild(textarea);

        textarea.select();

        document.execCommand("copy");

        textarea.remove();

        showToast(t("copied"));
    }
}


/* =========================================================
   TOAST
========================================================= */

function showToast(message) {

    let toast =
        $("#dagnawToast");

    if (!toast) {

        toast =
            document.createElement("div");

        toast.id =
            "dagnawToast";

        toast.style.cssText = `
            position:fixed;
            left:50%;
            bottom:28px;
            transform:translateX(-50%);
            z-index:99999;
            padding:12px 18px;
            border-radius:12px;
            background:rgba(20,25,40,.95);
            color:white;
            border:1px solid rgba(255,255,255,.15);
            box-shadow:0 10px 30px rgba(0,0,0,.25);
            font-size:14px;
            backdrop-filter:blur(12px);
        `;

        document.body.appendChild(toast);
    }

    toast.textContent = message;

    toast.style.opacity = "1";

    clearTimeout(toast._timer);

    toast._timer =
        setTimeout(
            () => {
                toast.style.opacity = "0";
            },
            1800
        );
}


/* =========================================================
   CONTACT FORM
========================================================= */

function initContactForm() {

    const form =
        $("#contactForm");

    const message =
        $("#formMessage");

    if (!form) return;

    form.addEventListener(
        "submit",
        event => {

            event.preventDefault();

            if (message) {

                message.textContent =
                    t("form_success");

                message.classList.add(
                    "success"
                );
            }

            form.reset();

            showToast(
                t("form_success")
            );
        }
    );
}


/* =========================================================
   SMOOTH SCROLL
========================================================= */

function initSmoothScroll() {

    $$("a[href^='#']").forEach(link => {

        link.addEventListener(
            "click",
            event => {

                const id =
                    link.getAttribute("href");

                if (
                    !id ||
                    id === "#" ||
                    !$(id)
                ) return;

                event.preventDefault();

                $(id).scrollIntoView({
                    behavior: "smooth",
                    block: "start"
                });
            }
        );
    });
}


/* =========================================================
   COUNTER ANIMATION
========================================================= */

function initCounters() {

    const counters =
        $$("[data-counter]");

    if (!counters.length) return;

    const observer =
        new IntersectionObserver(
            entries => {

                entries.forEach(entry => {

                    if (!entry.isIntersecting)
                        return;

                    const element =
                        entry.target;

                    const target =
                        Number(
                            element.dataset.counter
                        );

                    let current = 0;

                    const step =
                        Math.max(
                            1,
                            Math.ceil(target / 40)
                        );

                    const timer =
                        setInterval(
                            () => {

                                current += step;

                                if (current >= target) {

                                    current = target;

                                    clearInterval(timer);
                                }

                                element.textContent =
                                    current;

                            },
                            30
                        );

                    observer.unobserve(element);
                });

            },
            {
                threshold: 0.7
            }
        );

    counters.forEach(counter =>
        observer.observe(counter)
    );
}


/* =========================================================
   PROJECT INTERACTION
========================================================= */

function initProjectCards() {

    $$(".project-card, .project-feature")
        .forEach(card => {

            card.addEventListener(
                "mouseenter",
                () => {
                    card.classList.add("project-hover");
                }
            );

            card.addEventListener(
                "mouseleave",
                () => {
                    card.classList.remove("project-hover");
                }
            );
        });
}


/* =========================================================
   KEYBOARD SHORTCUTS
========================================================= */

function initKeyboardShortcuts() {

    document.addEventListener(
        "keydown",
        event => {

            if (
                event.ctrlKey &&
                event.key.toLowerCase() === "k"
            ) {

                event.preventDefault();

                $("#toolSearch")?.focus();

                document
                    .getElementById("tools")
                    ?.scrollIntoView({
                        behavior: "smooth"
                    });
            }
        }
    );
}


/* =========================================================
   INITIALIZE EVERYTHING
========================================================= */

document.addEventListener(
    "DOMContentLoaded",
    () => {

        initLanguage();
        initTheme();
        initMobileMenu();

        initTyping();
        initParticles();

        initReveal();
        initActiveNav();

        initScrollTop();

        initToolFilter();
        initToolModal();

        initContactForm();
        initSmoothScroll();

        initCounters();
        initProjectCards();

        initKeyboardShortcuts();

        console.log(
            "Dagnaw Portfolio loaded successfully 🚀"
        );
    }/* =========================================================
   V4 PREMIUM MOTION ENGINE
========================================================= */

(() => {
    "use strict";

    const reduceMotion = window.matchMedia(
        "(prefers-reduced-motion: reduce)"
    ).matches;

    /* -----------------------------------------------------
       FIX MOBILE MENU
    ----------------------------------------------------- */

    function v4MobileMenu() {
        const button = document.querySelector("#menuToggle");
        const menu = document.querySelector("#mobileMenu");

        if (!button || !menu) return;

        button.setAttribute("aria-expanded", "false");

        button.addEventListener("click", () => {
            const active = menu.classList.toggle("active");

            button.classList.toggle("active", active);
            button.setAttribute(
                "aria-expanded",
                String(active)
            );
        });

        menu.querySelectorAll("a").forEach(link => {
            link.addEventListener("click", () => {
                menu.classList.remove("active");
                button.classList.remove("active");
                button.setAttribute("aria-expanded", "false");
            });
        });

        document.addEventListener("click", event => {
            if (
                !menu.contains(event.target) &&
                !button.contains(event.target)
            ) {
                menu.classList.remove("active");
                button.classList.remove("active");
                button.setAttribute("aria-expanded", "false");
            }
        });
    }


    /* -----------------------------------------------------
       AUTOMATIC REVEAL
    ----------------------------------------------------- */

    function v4Reveal() {
        const targets = document.querySelectorAll(
            "section > *, " +
            ".about-grid > *, " +
            ".skills-grid > *, " +
            ".tools-grid > *, " +
            ".timeline-item, " +
            ".contact-grid > *, " +
            ".goal-card"
        );

        if (!targets.length) return;

        targets.forEach((el, index) => {
            if (
                el.classList.contains("reveal") ||
                el.classList.contains("reveal-left") ||
                el.classList.contains("reveal-right")
            ) return;

            el.classList.add("reveal");

            el.style.transitionDelay =
                `${Math.min(index % 6, 5) * 70}ms`;
        });

        if (reduceMotion) {
            targets.forEach(el =>
                el.classList.add("visible")
            );
            return;
        }

        const observer = new IntersectionObserver(
            entries => {
                entries.forEach(entry => {
                    if (!entry.isIntersecting) return;

                    entry.target.classList.add("visible");
                    observer.unobserve(entry.target);
                });
            },
            {
                threshold: 0.08,
                rootMargin: "0px 0px -50px 0px"
            }
        );

        targets.forEach(el => observer.observe(el));
    }


    /* -----------------------------------------------------
       3D TILT + POINTER SHINE
    ----------------------------------------------------- */

    function v4Tilt() {
        if (reduceMotion) return;

        const cards = document.querySelectorAll(
            ".profile-card, " +
            ".project-card, " +
            ".project-feature, " +
            ".tool-card, " +
            ".highlight-card"
        );

        cards.forEach(card => {
            card.addEventListener("pointermove", event => {
                const rect = card.getBoundingClientRect();

                const x =
                    (event.clientX - rect.left) /
                    rect.width;

                const y =
                    (event.clientY - rect.top) /
                    rect.height;

                const rotateX =
                    (0.5 - y) * 8;

                const rotateY =
                    (x - 0.5) * 8;

                card.style.setProperty(
                    "--mx",
                    `${x * 100}%`
                );

                card.style.setProperty(
                    "--my",
                    `${y * 100}%`
                );

                card.style.transform =
                    `perspective(900px)
                     rotateX(${rotateX}deg)
                     rotateY(${rotateY}deg)
                     translateY(-5px)`;
            });

            card.addEventListener("pointerleave", () => {
                card.style.transform = "";
                card.style.removeProperty("--mx");
                card.style.removeProperty("--my");
            });
        });
    }


    /* -----------------------------------------------------
       HERO POINTER GLOW
    ----------------------------------------------------- */

    function v4HeroGlow() {
        if (reduceMotion) return;

        const hero = document.querySelector("#home");

        if (!hero) return;

        hero.addEventListener("pointermove", event => {
            const rect = hero.getBoundingClientRect();

            hero.style.setProperty(
                "--hero-x",
                `${event.clientX - rect.left}px`
            );

            hero.style.setProperty(
                "--hero-y",
                `${event.clientY - rect.top}px`
            );
        });
    }


    /* -----------------------------------------------------
       SKILL BARS ON SCROLL
    ----------------------------------------------------- */

    function v4SkillBars() {
        const bars = document.querySelectorAll(
            ".skill-fill, " +
            ".skill-bar span, " +
            ".progress-fill"
        );

        if (!bars.length) return;

        bars.forEach(bar => {
            const width =
                bar.dataset.width ||
                bar.style.width;

            if (!width) return;

            bar.dataset.width = width;
            bar.style.width = "0%";
        });

        if (reduceMotion) {
            bars.forEach(bar => {
                bar.style.width = bar.dataset.width;
            });
            return;
        }

        const observer = new IntersectionObserver(
            entries => {
                entries.forEach(entry => {
                    if (!entry.isIntersecting) return;

                    entry.target.style.transition =
                        "width 1.2s cubic-bezier(.2,.7,.2,1)";

                    entry.target.style.width =
                        entry.target.dataset.width;

                    observer.unobserve(entry.target);
                });
            },
            { threshold: 0.4 }
        );

        bars.forEach(bar => observer.observe(bar));
    }


    /* -----------------------------------------------------
       BETTER PARTICLES
    ----------------------------------------------------- */

    function v4Particles() {
        if (reduceMotion) return;

        const canvas =
            document.querySelector("#particles");

        if (!canvas) return;

        const ctx = canvas.getContext("2d");

        let width = 0;
        let height = 0;
        let particles = [];

        function resize() {
            const ratio =
                Math.min(window.devicePixelRatio || 1, 2);

            width = window.innerWidth;
            height = window.innerHeight;

            canvas.width = width * ratio;
            canvas.height = height * ratio;

            canvas.style.width = `${width}px`;
            canvas.style.height = `${height}px`;

            ctx.setTransform(
                ratio,
                0,
                0,
                ratio,
                0,
                0
            );

            const count =
                Math.min(
                    55,
                    Math.max(20, Math.floor(width / 25))
                );

            particles = Array.from(
                { length: count },
                () => ({
                    x: Math.random() * width,
                    y: Math.random() * height,
                    r: Math.random() * 1.6 + .4,
                    vx: (Math.random() - .5) * .25,
                    vy: (Math.random() - .5) * .25
                })
            );
        }

        resize();

        window.addEventListener(
            "resize",
            resize,
            { passive: true }
        );

        function animate() {
            ctx.clearRect(0, 0, width, height);

            for (const p of particles) {
                p.x += p.vx;
                p.y += p.vy;

                if (p.x < 0 || p.x > width)
                    p.vx *= -1;

                if (p.y < 0 || p.y > height)
                    p.vy *= -1;

                ctx.beginPath();

                ctx.arc(
                    p.x,
                    p.y,
                    p.r,
                    0,
                    Math.PI * 2
                );

                ctx.fillStyle =
                    "rgba(130,160,255,.28)";

                ctx.fill();
            }

            requestAnimationFrame(animate);
        }

        animate();
    }


    /* -----------------------------------------------------
       MODAL ACCESSIBILITY
    ----------------------------------------------------- */

    function v4Modal() {
        const modal =
            document.querySelector("#toolModal");

        if (!modal) return;

        const observer =
            new MutationObserver(() => {
                const active =
                    modal.classList.contains("active");

                document.body.classList.toggle(
                    "modal-open",
                    active
                );
            });

        observer.observe(modal, {
            attributes: true,
            attributeFilter: ["class"]
        });

        document.addEventListener("keydown", event => {
            if (event.key !== "Escape") return;

            if (modal.classList.contains("active")) {
                typeof closeTool === "function" &&
                    closeTool();
            }
        });
    }


    /* -----------------------------------------------------
       LANGUAGE-SAFE TOOL REFRESH
    ----------------------------------------------------- */

    function v4LanguageRefresh() {
        const select =
            document.querySelector("#languageSelect");

        if (!select) return;

        select.addEventListener("change", () => {
            setTimeout(() => {
                document
                    .querySelectorAll(".tool-card")
                    .forEach(card => {
                        card.style.transform = "";
                    });
            }, 50);
        });
    }


    /* -----------------------------------------------------
       NAV ACTIVE STATE
    ----------------------------------------------------- */

    function v4Nav() {
        const sections =
            document.querySelectorAll("main section[id]");

        const links =
            document.querySelectorAll(
                'nav a[href^="#"]'
            );

        if (!sections.length || !links.length)
            return;

        const observer =
            new IntersectionObserver(
                entries => {
                    entries.forEach(entry => {
                        if (!entry.isIntersecting)
                            return;

                        links.forEach(link => {
                            link.classList.toggle(
                                "active",
                                link.getAttribute("href") ===
                                `#${entry.target.id}`
                            );
                        });
                    });
                },
                {
                    rootMargin:
                        "-30% 0px -60% 0px"
                }
            );

        sections.forEach(section =>
            observer.observe(section)
        );
    }


    /* -----------------------------------------------------
       BUTTON RIPPLE
    ----------------------------------------------------- */

    function v4Ripple() {
        if (reduceMotion) return;

        document
            .querySelectorAll(
                "button, .btn, .hero-buttons a"
            )
            .forEach(button => {

                button.addEventListener(
                    "pointerdown",
                    event => {

                        const rect =
                            button.getBoundingClientRect();

                        button.style.setProperty(
                            "--ripple-x",
                            `${event.clientX - rect.left}px`
                        );

                        button.style.setProperty(
                            "--ripple-y",
                            `${event.clientY - rect.top}px`
                        );
                    }
                );
            });
    }


    /* -----------------------------------------------------
       INIT V4
    ----------------------------------------------------- */

    function initV4() {
        v4MobileMenu();
        v4Reveal();
        v4Tilt();
        v4HeroGlow();
        v4SkillBars();
        v4Modal();
        v4LanguageRefresh();
        v4Nav();
        v4Ripple();
    }

    if (document.readyState === "loading") {
        document.addEventListener(
            "DOMContentLoaded",
            initV4
        );
    } else {
        initV4();
    }

})();
);
