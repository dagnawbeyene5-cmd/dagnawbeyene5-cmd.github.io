// modules/i18n.js
// Centralized translations. To edit copy in any language, edit TRANSLATIONS below —
// nothing else needs to change. English is the source of truth (also the HTML fallback).
//
// Note on scope: certificate titles/issuers (rendered by modules/certificates.js) are
// official credential names and are intentionally NOT translated here, to avoid
// misrepresenting an institution's own wording. The decorative "DAGI. — DEVELOPER /
// BUILDER / SYSTEM READY" photo caption is also kept as a fixed HUD-style tag in every
// language, same treatment as a logo.
//
// Translation quality note: Amharic is a primary-fluency translation. Afaan Oromo and
// Chinese (Simplified) are good-faith translations aimed at being clear and accurate —
// worth a native-speaker read-through before this goes live if precision matters to you.

const STORAGE_KEY = 'Dagnaw Beyene-portfolio-lang';
const SUPPORTED = ['en', 'am', 'om', 'zh'];
const DEFAULT_LANG = 'en';

export const TRANSLATIONS = {
  en: {
    'nav.home': 'Home', 'nav.about': 'About', 'nav.skills': 'Skills', 'nav.projects': 'Projects',
    'nav.certificates': 'Certificates', 'nav.tools': 'Tools', 'nav.contact': 'Contact',
    'sound.on': 'SOUND ON', 'sound.off': 'SOUND OFF',
    'menu.footer': 'SYS // NAVIGATION LIVE',
    'hero.eyebrow': 'DEVELOPER PORTFOLIO / SYSTEM ONLINE',
    'hero.title': 'Building digital experiences with code &amp; curiosity.',
    'hero.sub': "I'm <strong>Dagi</strong> — a Software Developer, Database Administrator and Creative Specialist based in Bahir Dar, Ethiopia.",
    'hero.cta.explore': 'Explore Projects', 'hero.cta.contact': 'Contact',
    'hero.meta': 'AVAILABLE FOR BUILDING — PYTHON / DATA SCIENCE / ANDROID / WEB — 01–07',
    'hero.scroll': 'SCROLL TO EXPLORE',
    'about.index': '02 // ABOUT', 'about.title': 'Turning ideas into useful interfaces.',
    'about.p1': 'I am an ambitious, award-winning Software Developer, Database Administrator, and Creative Specialist based in Bahir Dar, Ethiopia. Recognized by regional innovation hubs and international certified training programs (such as Udacity/Ethiocoders), I combine technical expertise in Python, Data Science, Android, and Web Development with creative problem-solving.',
    'about.p2': 'Beyond technology, I am an accomplished poet and dedicated community volunteer, committed to leveraging tech and continuous learning to transform communities and excel in global programs like Outreachy.',
    'about.stat1': 'Certifications &amp; awards', 'about.stat2': 'Room to grow', 'about.stat3': 'Built for learning',
    'skills.index': '03 // SKILLS', 'skills.title': 'Tools of the craft.',
    'skill.python.title': 'Python', 'skill.python.desc': 'Automation, data tooling and backend scripting.',
    'skill.data.title': 'Data Science', 'skill.data.desc': 'Analysis, modelling and turning data into decisions.',
    'skill.android.title': 'Android Development', 'skill.android.desc': 'Mobile app interfaces and application logic.',
    'skill.web.title': 'Web Development', 'skill.web.desc': 'HTML, CSS, JS — responsive, accessible interfaces.',
    'skill.dba.title': 'Database Administration', 'skill.dba.desc': 'Structuring, maintaining and querying reliable data stores.',
    'skill.creative.title': 'Creative Problem-Solving', 'skill.creative.desc': 'Poetry and community work feeding a different angle on tech.',
    'projects.index': '04 // PROJECTS', 'projects.title': 'Selected builds.',
    'projects.note': "Placeholder slots — replace with real projects, links and stacks as they're added.",
    'project.slot.title': 'Your Project',
    'project.slot1.desc': 'Add your real project title, short description, technologies and links here.',
    'project.slot2.desc': 'This slot is intentionally not filled with invented project information.',
    'project.slot3.desc': 'Duplicate this card for future work without changing the main architecture.',
    'certificates.index': '05 // CERTIFICATES', 'certificates.title': 'Proof of progress.',
    'certificates.note': 'Certificate images live in <code>assets/certificates/</code> and are registered in <code>modules/certificates.js</code>.',
    'cv.index': '06 // CV', 'cv.title': 'Download the full picture.', 'cv.button': 'Download CV (PDF)',
    'contact.index': '07 // CONTACT', 'contact.title': "Let's build something useful.",
    'contact.note': "Add your real contact details. They're intentionally left as placeholders until provided.",
    'contact.email': 'Email Me', 'contact.toolsbtn': 'Open Tools Hub',
    'footer.tag1': 'DAGI. — Developer Portfolio',
    'tools.index': '06 // TOOLS HUB', 'tools.title': 'Small utilities, built one at a time.',
    'tools.note': "One tool is live below. The rest are modular slots — each new tool is added to modules/toolsData.js without touching this page's structure.",
    'tool.password.title': 'Password Generator', 'tool.password.desc': 'Generate a random password locally in your browser. Nothing is sent anywhere.',
    'tool.password.length': 'Length', 'tool.password.upper': 'Uppercase (A-Z)', 'tool.password.lower': 'Lowercase (a-z)',
    'tool.password.numbers': 'Numbers (0-9)', 'tool.password.symbols': 'Symbols (!@#$...)',
    'tool.generate': 'Generate', 'tool.copy': 'Copy', 'tool.copied': 'Copied!',
    'tool.status.live': 'LIVE', 'tool.status.soon': 'COMING SOON',
    'tool.qr.title': 'QR Code Generator', 'tool.qr.desc': 'Turn text or links into a scannable QR code.',
    'tool.unit.title': 'Unit Converter', 'tool.unit.desc': 'Convert between length, weight, and other common units.',
    'tool.palette.title': 'Color Palette Picker', 'tool.palette.desc': 'Pick and export color palettes for designs.',
    'tool.markdown.title': 'Markdown Previewer', 'tool.markdown.desc': 'Write Markdown and preview the rendered output live.',
    'tool.json.title': 'JSON Formatter', 'tool.json.desc': 'Format and validate JSON with one click.',
    'tool.wordcount.title': 'Word Counter', 'tool.wordcount.desc': 'Count words, characters, and reading time for any text.',
    'tool.base64.title': 'Base64 Encoder/Decoder', 'tool.base64.desc': 'Encode or decode text to and from Base64.',
    'tool.timestamp.title': 'Timestamp Converter', 'tool.timestamp.desc': 'Convert between Unix timestamps and readable dates.',
    'tool.imagecompress.title': 'Image Compressor', 'tool.imagecompress.desc': 'Shrink image file size right in the browser.',
    'splash.tag': 'SYSTEM INITIALIZING', 'splash.enter': 'Enter',
    'splash.title': 'Welcome', 'splash.subtitle': "Dagnaw Beyene \u2014 it's for all", 'splash.slide': 'Slide to enter',
  },

  am: {
    'nav.home': 'ቤት', 'nav.about': 'ስለ እኔ', 'nav.skills': 'ችሎታዎች', 'nav.projects': 'ፕሮጀክቶች',
    'nav.certificates': 'ሰርተፍኬቶች', 'nav.tools': 'መሳሪያዎች', 'nav.contact': 'አግኙኝ',
    'sound.on': 'ድምጽ በርቷል', 'sound.off': 'ድምጽ ጠፍቷል',
    'menu.footer': 'SYS // ዳሰሳ ገባሪ',
    'hero.eyebrow': 'የገንቢ ፖርትፎሊዮ / ሲስተም ስራ ላይ ነው',
    'hero.title': 'በኮድ እና በጉጉት ዲጂታል ተሞክሮዎችን መገንባት።',
    'hero.sub': 'እኔ <strong>ዳጊ</strong> ነኝ — በባህር ዳር፣ ኢትዮጵያ የምገኝ የሶፍትዌር ገንቢ፣ የዳታቤዝ አስተዳዳሪ እና የፈጠራ ስፔሻሊስት።',
    'hero.cta.explore': 'ፕሮጀክቶችን ይመልከቱ', 'hero.cta.contact': 'አግኙኝ',
    'hero.meta': 'ለመገንባት ዝግጁ ነኝ — ፓይዘን / ዳታ ሳይንስ / አንድሮይድ / ድህረ ገጽ — 01–07',
    'hero.scroll': 'ለማየት ይሸብልሉ',
    'about.index': '02 // ስለ እኔ', 'about.title': 'ሃሳቦችን ጠቃሚ ወደ ሆኑ በይነገጾች መቀየር።',
    'about.p1': 'እኔ በባህር ዳር፣ ኢትዮጵያ የምገኝ ትጉህ እና ሽልማት ያገኘ የሶፍትዌር ገንቢ፣ የዳታቤዝ አስተዳዳሪ እና የፈጠራ ስፔሻሊስት ነኝ። በክልላዊ የፈጠራ ማዕከላት እና በዓለም አቀፍ የተመሰከረላቸው የስልጠና ፕሮግራሞች (እንደ Udacity/Ethiocoders) የተመሰገንኩ ሲሆን፣ በፓይዘን፣ በዳታ ሳይንስ፣ በአንድሮይድ እና በድህረ ገጽ ልማት ያለኝን የቴክኒክ ችሎታ ከፈጠራ ችግር መፍቻ ዘዴዎች ጋር አዋህዳለሁ።',
    'about.p2': 'ከቴክኖሎጂ ባሻገር፣ የተዋጣለት ገጣሚ እና ራሱን የወሰነ የማህበረሰብ በጎ ፈቃደኛ ነኝ፤ ቴክኖሎጂንና ተከታታይ ትምህርትን በመጠቀም ማህበረሰቦችን ለመለወጥ እና እንደ Outreachy ባሉ ዓለም አቀፍ ፕሮግራሞች ውስጥ ለመሳካት ቁርጠኛ ነኝ።',
    'about.stat1': 'ሰርተፍኬቶች እና ሽልማቶች', 'about.stat2': 'ለእድገት ክፍት', 'about.stat3': 'ለመማር የተገነባ',
    'skills.index': '03 // ችሎታዎች', 'skills.title': 'የሙያ መሳሪያዎች።',
    'skill.python.title': 'ፓይዘን', 'skill.python.desc': 'ራስ-ሰር ስራ፣ የዳታ መሳሪያዎች እና የባክኤንድ ስክሪፕቲንግ።',
    'skill.data.title': 'ዳታ ሳይንስ', 'skill.data.desc': 'ትንተና፣ ሞዴሊንግ እና ዳታን ወደ ውሳኔ መቀየር።',
    'skill.android.title': 'የአንድሮይድ ልማት', 'skill.android.desc': 'የሞባይል መተግበሪያ በይነገጾች እና ሎጂክ።',
    'skill.web.title': 'የድህረ ገጽ ልማት', 'skill.web.desc': 'HTML, CSS, JS — ምላሽ ሰጪ፣ ተደራሽ በይነገጾች።',
    'skill.dba.title': 'የዳታቤዝ አስተዳደር', 'skill.dba.desc': 'አስተማማኝ የዳታ ማከማቻዎችን መገንባት፣ መጠበቅ እና መጠየቅ።',
    'skill.creative.title': 'የፈጠራ ችግር መፍቻ', 'skill.creative.desc': 'ግጥም እና የማህበረሰብ ስራ ለቴክኖሎጂ የተለየ አመለካከት ይሰጣሉ።',
    'projects.index': '04 // ፕሮጀክቶች', 'projects.title': 'የተመረጡ ስራዎች።',
    'projects.note': 'የቦታ ማስያዣ ካርዶች — እውነተኛ ፕሮጀክቶች፣ ሊንኮች እና ቴክኖሎጂዎች ሲጨመሩ ይተኩ።',
    'project.slot.title': 'ፕሮጀክትህ',
    'project.slot1.desc': 'እውነተኛ የፕሮጀክት ርዕስ፣ አጭር መግለጫ፣ ቴክኖሎጂዎች እና ሊንኮች እዚህ ጨምር።',
    'project.slot2.desc': 'ይህ ቦታ ሆን ተብሎ በተፈጠረ የፕሮጀክት መረጃ አልተሞላም።',
    'project.slot3.desc': 'ለወደፊት ስራ ይህን ካርድ ገልብጥ፣ ዋናውን አርክቴክቸር ሳትቀይር።',
    'certificates.index': '05 // ሰርተፍኬቶች', 'certificates.title': 'የእድገት ማረጋገጫ።',
    'certificates.note': 'የሰርተፍኬት ምስሎች በ <code>assets/certificates/</code> ውስጥ ይገኛሉ፤ በ <code>modules/certificates.js</code> ውስጥ ተመዝግበዋል።',
    'cv.index': '06 // CV', 'cv.title': 'ሙሉ ገለፃውን ያውርዱ።', 'cv.button': 'CV አውርድ (PDF)',
    'contact.index': '07 // አግኙኝ', 'contact.title': 'ጠቃሚ ነገር እንገንባ።',
    'contact.note': 'እውነተኛ የመገናኛ መረጃህን ጨምር። እስክትሰጠኝ ድረስ ሆን ተብሎ እንደ ቦታ ማስያዣ ቀርተዋል።',
    'contact.email': 'ኢሜይል ላክ', 'contact.toolsbtn': 'Tools Hub ክፈት',
    'footer.tag1': 'ዳጊ. — የገንቢ ፖርትፎሊዮ',
    'tools.index': '06 // የመሳሪያዎች ማዕከል', 'tools.title': 'ትንንሽ መሳሪያዎች፣ አንድ በአንድ የተገነቡ።',
    'tools.note': 'አንድ መሳሪያ ከታች ዝግጁ ነው። የተቀሩት በ modules/toolsData.js ውስጥ ይህን ገጽ ሳይነካ ሊጨመሩ የሚችሉ ክፍት ቦታዎች ናቸው።',
    'tool.password.title': 'የይለፍ ቃል ጀነሬተር', 'tool.password.desc': 'በአሳሽዎ ውስጥ በቀጥታ የዘፈቀደ የይለፍ ቃል ይፍጠሩ። ምንም ነገር ወዴትም አይላክም።',
    'tool.password.length': 'ርዝመት', 'tool.password.upper': 'ትልቅ ፊደላት (A-Z)', 'tool.password.lower': 'ትንሽ ፊደላት (a-z)',
    'tool.password.numbers': 'ቁጥሮች (0-9)', 'tool.password.symbols': 'ምልክቶች (!@#$...)',
    'tool.generate': 'ፍጠር', 'tool.copy': 'ቅዳ', 'tool.copied': 'ተቀድቷል!',
    'tool.status.live': 'ዝግጁ', 'tool.status.soon': 'በቅርቡ',
    'tool.qr.title': 'QR ኮድ ጀነሬተር', 'tool.qr.desc': 'ጽሑፍ ወይም ሊንክ ወደሚነበብ QR ኮድ ይቀይራል።',
    'tool.unit.title': 'የመለኪያ መቀየሪያ', 'tool.unit.desc': 'በርዝመት፣ ክብደት እና ሌሎች መለኪያዎች መካከል ይቀይራል።',
    'tool.palette.title': 'የቀለም ፓሌት መራጭ', 'tool.palette.desc': 'ለዲዛይን የቀለም ፓሌቶችን ይምረጡ እና ያውጡ።',
    'tool.markdown.title': 'Markdown Previewer', 'tool.markdown.desc': 'Markdown ይጻፉ እና ውጤቱን በቀጥታ ይመልከቱ።',
    'tool.json.title': 'JSON Formatter', 'tool.json.desc': 'JSON ን በአንድ ጠቅታ ያደራጁ እና ያረጋግጡ።',
    'tool.wordcount.title': 'የቃላት ቆጣሪ', 'tool.wordcount.desc': 'ለማንኛውም ጽሑፍ ቃላት፣ ፊደላት እና የንባብ ጊዜ ይቆጥራል።',
    'tool.base64.title': 'Base64 መቀየሪያ', 'tool.base64.desc': 'ጽሑፍን ወደ Base64 ይቀይራል ወይም ይመልሳል።',
    'tool.timestamp.title': 'የጊዜ ማህተም መቀየሪያ', 'tool.timestamp.desc': 'በUnix timestamp እና በሚነበብ ቀን መካከል ይቀይራል።',
    'tool.imagecompress.title': 'የምስል መጭመቂያ', 'tool.imagecompress.desc': 'የምስል ፋይል መጠንን በአሳሽ ውስጥ በቀጥታ ይቀንሳል።',
    'splash.tag': 'ሲስተም በመዘጋጀት ላይ', 'splash.enter': 'ግባ',
    'splash.title': 'እንኳን ደህና መጡ', 'splash.subtitle': 'ዳግናው ብዬነ — ለሁሉም ነው', 'splash.slide': 'ለመግባት ይጎትቱ',
  },

  om: {
    'nav.home': 'Mana', 'nav.about': "Waa'ee Koo", 'nav.skills': 'Dandeettii', 'nav.projects': 'Pirojektoota',
    'nav.certificates': 'Ragaalee', 'nav.tools': 'Meeshaalee', 'nav.contact': 'Nu Qunnamaa',
    'sound.on': 'SAGALEE BANAA', 'sound.off': 'SAGALEE CUFAA',
    'menu.footer': 'SYS // GALTEE HOJJACHAA JIRA',
    'hero.eyebrow': 'PORTFOOLIYOO IJAARAA / SIRNI HOJJACHAA JIRA',
    'hero.title': 'Muuxannoo Dijitaalaa Koodiifi Hawwiin Ijaaruu.',
    'hero.sub': "Ani <strong>Dagii</strong> dha — Baahir Daar, Itoophiyaa keessatti kan argamu Ijaarraa Sooftweerii, Bulchaa Deetaabeezii fi Ogeessa Uumamaa.",
    'hero.cta.explore': 'Pirojektoota Ilaali', 'hero.cta.contact': 'Nu Qunnamaa',
    'hero.meta': "IJAARUUDHAAF QOPHAA'EDHA — PYTHON / DATA SCIENCE / ANDROID / WEB — 01–07",
    'hero.scroll': 'ILAALUUF SCROOLII',
    'about.index': "02 // WAA'EE KOO", 'about.title': "Yaadota gara Interfeesii Faayidaa Qabuutti Jijjiiruu.",
    'about.p1': "Ani nama Baahir Daar, Itoophiyaa keessa jiraatu, ogummaa fi badhaasa argate kan Ijaarraa Sooftweerii, Bulchaa Deetaabeezii fi Ogeessa Uumamaa dha. Giddugaleeyyii haaraa naannoo fi sagantaalee leenjii idil-addunyaa (fkn Udacity/Ethiocoders) irraa beekamtii argadheera; ogummaa teeknikaa Python, Data Science, Android fi Ijaarsa Weebsaayitii furmaata rakkoo uumamaa wajjin walitti fida.",
    'about.p2': "Teeknooloojiin ala, walaloo ogeessa ta'ee fi hojjetaa jaalala hawaasaa dha; teeknooloojii fi barnoota itti fufiinsaan fayyadamuudhaan hawaasota jijjiiruuf fi sagantaalee addunyaa akka Outreachy keessatti milkaa'uuf kutannoo qaba.",
    'about.stat1': 'Ragaalee fi Badhaasaawwan', 'about.stat2': 'Guddina Banaa', 'about.stat3': "Baruudhaaf Ijaarame",
    'skills.index': '03 // DANDEETTII', 'skills.title': 'Meeshaalee Ogummaa.',
    'skill.python.title': 'Python', 'skill.python.desc': 'Ofumaan hojjechuu, meeshaalee deetaa fi backend scripting.',
    'skill.data.title': 'Sains Deetaa', 'skill.data.desc': "Xiinxala, moodeelii fi deetaa gara murtiitti jijjiiruu.",
    'skill.android.title': 'Ijaarsa Android', 'skill.android.desc': 'Interfeesii fi loojikii aappii mobaayilii.',
    'skill.web.title': 'Ijaarsa Weebsaayitii', 'skill.web.desc': "HTML, CSS, JS — interfeesii deebii kennuu fi dhaqqabamu.",
    'skill.dba.title': 'Bulchiinsa Deetaabeezii', 'skill.dba.desc': "Kuusaa deetaa amanamaa ijaaruu, eeguu fi gaafachuu.",
    'skill.creative.title': 'Furmaata Rakkoo Uumamaa', 'skill.creative.desc': "Walaloo fi hojii hawaasaa ilaalcha addaa teeknooloojiif kennu.",
    'projects.index': '04 // PIROJEKTOOTA', 'projects.title': 'Ijaarsawwan Filatamoo.',
    'projects.note': "Bakka qubannaa — pirojektoota dhugaa, liinkii fi teeknooloojii yeroo dabalamu bakka buusi.",
    'project.slot.title': 'Pirojektii Kee',
    'project.slot1.desc': 'Mata duree pirojektii dhugaa, ibsa gabaabaa, teeknooloojii fi liinkii asitti dabali.',
    'project.slot2.desc': "Bakki kun beekamsaan odeeffannoo pirojektii uumamee hin guutamne.",
    'project.slot3.desc': "Hojii gara fuulduraatiif kaardii kana garagalchi, bu'uura ijaarsaa hin jijjiirin.",
    'certificates.index': '05 // RAGAALEE', 'certificates.title': 'Ragaa Guddinaa.',
    'certificates.note': "Suuraaleen ragaa <code>assets/certificates/</code> keessa jiru; <code>modules/certificates.js</code> keessatti galmaa'eera.",
    'cv.index': '06 // CV', 'cv.title': 'Guutummaa Ragaa Buufadhaa.', 'cv.button': 'CV Buufadhu (PDF)',
    'contact.index': '07 // NU QUNNAMAA', 'contact.title': "Wanta Faayidaa Qabu Haa Ijaarru.",
    'contact.note': "Odeeffannoo qunnamtii dhugaa kee dabali. Hanga naaf kennitutti beekamsaan bakka qubannaadhaan hafeera.",
    'contact.email': 'Imeelii Naaf Ergi', 'contact.toolsbtn': 'Tools Hub Banaa',
    'footer.tag1': 'DAGI. — Poortfooliyoo Ijaaraa',
    'tools.index': '06 // GIDDUGALA MEESHAALEE', 'tools.title': 'Meeshaalee xixiqqaa, tokko tokkoon ijaaraman.',
    'tools.note': "Meeshaan tokko gadii jira. Kan hafan bakka qubannaa kan modules/toolsData.js keessatti fuula kana hin tuqnee dabalamuu danda'anii dha.",
    'tool.password.title': 'Uumaa Jecha Iccitii', 'tool.password.desc': "Birawuzarii kee keessatti jecha iccitii tasaa uumi. Wanti tokko iyyuu gara biraatti hin ergamu.",
    'tool.password.length': 'Dheerina', 'tool.password.upper': 'Qubee Guddaa (A-Z)', 'tool.password.lower': 'Qubee Xiqqaa (a-z)',
    'tool.password.numbers': 'Lakkoofsota (0-9)', 'tool.password.symbols': 'Mallattoolee (!@#$...)',
    'tool.generate': 'Uumi', 'tool.copy': 'Waraabi', 'tool.copied': 'Waraabame!',
    'tool.status.live': 'Jiraa', 'tool.status.soon': 'Dhiyootti',
    'tool.qr.title': 'Uumaa QR Code', 'tool.qr.desc': "Barruu ykn liinkii gara QR Code scan gochuun danda'amuutti jijjiira.",
    'tool.unit.title': 'Jijjiirraa Safartuu', 'tool.unit.desc': 'Dheerina, ulfaatina fi safartuuwwan biroo gidduutti jijjiira.',
    'tool.palette.title': 'Filataa Halluu', 'tool.palette.desc': 'Halluuwwan dizaayiniif filadhaa fi baasi.',
    'tool.markdown.title': 'Ilaalcha Markdown', 'tool.markdown.desc': 'Markdown barreessuun bay\u2019ina isaa yeroo dhugaatti ilaali.',
    'tool.json.title': 'Qopheessaa JSON', 'tool.json.desc': 'JSON tuqaa tokkoon qopheessi fi mirkaneessi.',
    'tool.wordcount.title': 'Lakkoofsa Jechootaa', 'tool.wordcount.desc': 'Barruu kamiifuu jechoota, qubeewwan fi yeroo dubbisuu lakkaa\u2019a.',
    'tool.base64.title': 'Jijjiirraa Base64', 'tool.base64.desc': 'Barruu gara Base64tti jijjiiri ykn deebisi.',
    'tool.timestamp.title': 'Jijjiirraa Yeroo', 'tool.timestamp.desc': 'Unix timestamp fi guyyaa dubbifamu gidduutti jijjiira.',
    'tool.imagecompress.title': 'Xiqqeessaa Suuraa', 'tool.imagecompress.desc': 'Bal\u2019ina faayilii suuraa birawuzarii keessatti xiqqeessi.',
    'splash.tag': "SIRNI QOPHAA'AA JIRA", 'splash.enter': 'Seeni',
    'splash.title': 'Baga Nagaan Dhuftan', 'splash.subtitle': 'Dagnaw Beyene \u2014 Hundaaf', 'splash.slide': 'Seenuuf Harkisi',
  },

  zh: {
    'nav.home': '首页', 'nav.about': '关于', 'nav.skills': '技能', 'nav.projects': '项目',
    'nav.certificates': '证书', 'nav.tools': '工具', 'nav.contact': '联系',
    'sound.on': '声音开启', 'sound.off': '声音关闭',
    'menu.footer': 'SYS // 导航在线',
    'hero.eyebrow': '开发者作品集 / 系统在线',
    'hero.title': '用代码与好奇心构建数字体验。',
    'hero.sub': '我是 <strong>Dagi</strong> —— 一名居住在埃塞俄比亚巴希尔达尔的软件开发者、数据库管理员和创意专家。',
    'hero.cta.explore': '查看项目', 'hero.cta.contact': '联系我',
    'hero.meta': '可承接开发 — PYTHON / 数据科学 / 安卓 / 网页 — 01–07',
    'hero.scroll': '向下滚动探索',
    'about.index': '02 // 关于我', 'about.title': '把想法转化为有用的界面。',
    'about.p1': '我是一名居住在埃塞俄比亚巴希尔达尔、充满抱负并屡获殊荣的软件开发者、数据库管理员和创意专家。我曾获得地区创新中心及国际认证培训项目(如 Udacity/Ethiocoders)的认可,将 Python、数据科学、安卓和网页开发方面的技术专长与创造性解决问题的能力相结合。',
    'about.p2': '除了技术之外,我还是一名成就斐然的诗人和积极的社区志愿者,致力于运用科技与持续学习来改变社区,并在 Outreachy 等国际项目中追求卓越。',
    'about.stat1': '证书与奖项', 'about.stat2': '成长空间', 'about.stat3': '为学习而建',
    'skills.index': '03 // 技能', 'skills.title': '技艺之器。',
    'skill.python.title': 'Python', 'skill.python.desc': '自动化、数据工具与后端脚本编写。',
    'skill.data.title': '数据科学', 'skill.data.desc': '分析、建模,把数据转化为决策。',
    'skill.android.title': '安卓开发', 'skill.android.desc': '移动应用界面与应用逻辑。',
    'skill.web.title': '网页开发', 'skill.web.desc': 'HTML、CSS、JS —— 响应式、无障碍界面。',
    'skill.dba.title': '数据库管理', 'skill.dba.desc': '构建、维护和查询可靠的数据存储。',
    'skill.creative.title': '创造性问题解决', 'skill.creative.desc': '诗歌与社区工作为技术带来不同的视角。',
    'projects.index': '04 // 项目', 'projects.title': '精选作品。',
    'projects.note': '占位卡片 —— 添加真实项目、链接和技术栈后替换。',
    'project.slot.title': '你的项目',
    'project.slot1.desc': '在此添加真实的项目标题、简短描述、技术栈和链接。',
    'project.slot2.desc': '此处故意不填入虚构的项目信息。',
    'project.slot3.desc': '为未来的作品复制此卡片,无需更改主体架构。',
    'certificates.index': '05 // 证书', 'certificates.title': '进步的证明。',
    'certificates.note': '证书图片位于 <code>assets/certificates/</code> 中,并在 <code>modules/certificates.js</code> 中登记。',
    'cv.index': '06 // 简历', 'cv.title': '下载完整履历。', 'cv.button': '下载简历(PDF)',
    'contact.index': '07 // 联系', 'contact.title': '让我们一起打造有价值的东西。',
    'contact.note': '请添加真实联系方式。在你提供之前,这里暂作占位。',
    'contact.email': '给我发邮件', 'contact.toolsbtn': '打开工具中心',
    'footer.tag1': 'DAGI. — 开发者作品集',
    'tools.index': '06 // 工具中心', 'tools.title': '小工具,逐一构建。',
    'tools.note': '下方有一个工具已上线。其余为模块化占位卡片——在 modules/toolsData.js 中添加新工具,无需改动本页结构。',
    'tool.password.title': '密码生成器', 'tool.password.desc': '在浏览器本地生成随机密码,不会发送到任何地方。',
    'tool.password.length': '长度', 'tool.password.upper': '大写字母 (A-Z)', 'tool.password.lower': '小写字母 (a-z)',
    'tool.password.numbers': '数字 (0-9)', 'tool.password.symbols': '符号 (!@#$...)',
    'tool.generate': '生成', 'tool.copy': '复制', 'tool.copied': '已复制!',
    'tool.status.live': '已上线', 'tool.status.soon': '即将推出',
    'tool.qr.title': '二维码生成器', 'tool.qr.desc': '将文本或链接转换为可扫描的二维码。',
    'tool.unit.title': '单位转换器', 'tool.unit.desc': '在长度、重量等常用单位之间转换。',
    'tool.palette.title': '调色板选择器', 'tool.palette.desc': '为设计选取并导出配色方案。',
    'tool.markdown.title': 'Markdown 预览器', 'tool.markdown.desc': '编写 Markdown 并实时预览渲染效果。',
    'tool.json.title': 'JSON 格式化工具', 'tool.json.desc': '一键格式化并验证 JSON。',
    'tool.wordcount.title': '字数统计', 'tool.wordcount.desc': '统计任意文本的字数、字符数和阅读时间。',
    'tool.base64.title': 'Base64 编解码器', 'tool.base64.desc': '将文本编码为 Base64 或解码。',
    'tool.timestamp.title': '时间戳转换器', 'tool.timestamp.desc': '在 Unix 时间戳与可读日期之间转换。',
    'tool.imagecompress.title': '图片压缩器', 'tool.imagecompress.desc': '直接在浏览器中压缩图片文件大小。',
    'splash.tag': '系统初始化中', 'splash.enter': '进入',
    'splash.title': '欢迎', 'splash.subtitle': 'Dagnaw Beyene — 属于每个人', 'splash.slide': '滑动进入',
  },
};

function detectInitialLang() {
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored && SUPPORTED.includes(stored)) return stored;
  } catch { /* storage unavailable — fall through */ }
  return DEFAULT_LANG;
}

let currentLang = detectInitialLang();

export function getLang() {
  return currentLang;
}

/** Look up a single translation key for the current language, falling back to English. */
export function t(key) {
  return (TRANSLATIONS[currentLang] && TRANSLATIONS[currentLang][key])
    || TRANSLATIONS.en[key]
    || key;
}

/** Applies the current language to every element carrying a data-i18n attribute. */
export function applyTranslations() {
  document.documentElement.setAttribute('lang', currentLang);
  document.querySelectorAll('[data-i18n]').forEach((el) => {
    const key = el.getAttribute('data-i18n');
    const value = t(key);
    // Only a handful of keys intentionally carry inline markup (e.g. <strong>Dagi</strong>);
    // everything else is plain text, so innerHTML is safe here (dictionary content only,
    // never user input).
    el.innerHTML = value;
  });

  // Highlight the active language button(s) in both the desktop and mobile switchers.
  document.querySelectorAll('.lang-btn').forEach((btn) => {
    btn.classList.toggle('active', btn.dataset.lang === currentLang);
    btn.setAttribute('aria-pressed', String(btn.dataset.lang === currentLang));
  });

  document.dispatchEvent(new CustomEvent('lang:changed', { detail: { lang: currentLang } }));
}

export function setLang(lang) {
  if (!SUPPORTED.includes(lang) || lang === currentLang) return;
  currentLang = lang;
  try {
    localStorage.setItem(STORAGE_KEY, lang);
  } catch { /* non-fatal */ }
  applyTranslations();
}

/** Wires up all .lang-btn elements (desktop + mobile switchers) and does the first render. */
export function initI18n() {
  document.querySelectorAll('.lang-btn').forEach((btn) => {
    btn.addEventListener('click', () => setLang(btn.dataset.lang));
  });
  applyTranslations();
}
