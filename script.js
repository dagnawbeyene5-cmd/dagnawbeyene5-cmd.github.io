const $=s=>document.querySelector(s), $$=s=>document.querySelectorAll(s);
window.addEventListener("load",()=>setTimeout(()=>$("#loader").classList.add("done"),450));

const translations={
en:{
navHome:"Home",navAbout:"About",navSkills:"Skills",navProjects:"Projects",navJourney:"Journey",navContact:"Contact",
letsTalk:"Let's Talk ↗",logoTag:"DEVELOPER • CREATIVE • BUILDER",
available:"AVAILABLE FOR OPPORTUNITIES",
heroKicker:"HELLO, I'M",
hero:"I build modern web experiences, database systems and technology-driven solutions where software, IoT, AI and creative media meet.",
explore:"Explore my work ↗",downloadCv:"Download CV ↗",resumeDownload:"Download CV",
heroLocation:"BAHIR DAR / ETHIOPIA",heroOnline:"● ONLINE",
heroLangLabel:"LANGUAGES<br>SUPPORTED",heroMiniLabel:"SMART AGRICULTURE",farmUiTitle:"SMART<br>AGRICULTURE",featuredBadge:"IoT • AI • EDGE",
aboutSection:"01 / ABOUT",
aboutTitle:"A developer with a<br><strong>builder's mindset.</strong>",
aboutText:"I am an enthusiastic Web Developer, Database Administrator and Graphics/Video Specialist based in Bahir Dar, Ethiopia. I am studying Level 2 Web Development & Database Administration at Bahir Dar Polytechnic College, with a strong interest in Software Engineering and Artificial Intelligence.",
aboutText2:"I enjoy combining IoT technology with modern software solutions to solve real-world problems. My long-term goal is to become an impactful Software Engineer and contribute to open-source ecosystems through programs such as Outreachy.",
aboutQuote:"“Build useful technology. Keep learning. Create impact.”",
factLocTitle:"Bahir Dar",factLocSub:"Ethiopia",
factLevelTitle:"Level 2",factLevelSub:"Web + Database",
factInterestTitle:"IoT + AI",factInterestSub:"Core interest",
factOpenTitle:"Open Source",factOpenSub:"Outreachy goal",
skillsSection:"02 / CAPABILITIES",
skillsHeading:"Skills that turn<br><strong>ideas into systems.</strong>",
skillCat1Label:"WEB & SOFTWARE",skillCat1Title:"Development",
skillCat2Label:"DATA & TOOLS",skillCat2Title:"Systems",
skillCat3Label:"CREATIVE",skillCat3Title:"Digital Media",
profAdvanced:"Advanced",profIntermediate:"Intermediate",profBegInt:"Beginner / Intermediate",
projectsSection:"03 / SELECTED WORK",
projectsHeading:"Projects with a<br><strong>real-world purpose.</strong>",
featuredLabel:"FEATURED PROJECT / 01",
featuredTag:"IoT × AI × AUTOMATION",
featuredTitle:"Green Tech<br><strong>Smart Agriculture 2.0</strong>",
featuredDesc:"An automated agricultural monitoring and smart irrigation concept using IoT sensors, offline MicroSD logging, cloud/edge gateways and YOLOv8 computer vision for crop-disease detection.",
viewCaseStudy:"View case study ↗",
proj2Cat:"WEB • MYSQL",proj2Title:"ICT Inventory Management",proj2Desc:"Department inventory workflow for tracking assets, employees, issues and reports.",
proj3Cat:"CREATIVE • VIDEO",proj3Title:"Digital Content Studio",proj3Desc:"Branding, poster design, short-form and long-form video editing workflows.",
proj4Cat:"HTML • CSS • JS",proj4Title:"Personal Portfolio",proj4Desc:"A responsive personal brand site designed around technology, creativity and open source.",
detailsBtn:"Details →",
journeySection:"04 / JOURNEY",
journeyHeading:"Learning today.<br><strong>Building tomorrow.</strong>",
j1Label:"NOW / EDUCATION",j1Title:"Level 2 — Web Development & Database Administration",j1Desc:"Bahir Dar Polytechnic College. Focused on practical web, database and programming foundations.",
j2Label:"PROFESSIONAL / CREATIVE",j2Title:"Freelance Designer & Digital Content Creator",j2Desc:"Promotional materials, social-media graphics and video editing for personal and client projects.",
j3Label:"WORK EXPERIENCE",j3Title:"Barman & Customer Service Specialist — Palm Palace Hotel",j3Desc:"Customer service, workplace coordination and communication experience in a live service environment.",
j4Label:"FUTURE / OPEN SOURCE",j4Title:"Outreachy & Impactful Software Engineering",j4Desc:"Goal: contribute to open source and build software/database systems with meaningful community impact.",
certsLabel:"TRAINING",cert1:"Graphic Design",cert2:"Web Development",cert3:"Video Editing",cert4:"Digital Marketing",cert5:"Content Creation",
visionSection:"05 / VISION",
visionHeading:"Technology should<br><strong>solve something.</strong>",
visionText:"My direction is simple: grow from a student developer into a software engineer who creates practical, accessible and open-source technology.",
visionStat1:"Languages",visionStat2:"Learning",visionStat3:"Big Mission",
contactSection:"06 / CONTACT",
contactHeading:"Have an idea?<br><strong>Let's build it.</strong>",
contactIntro:"For collaboration, freelance work, open-source opportunities or technology projects, reach out through any channel below.",
emailLabel:"EMAIL",githubLabel:"GITHUB",linkedinLabel:"LINKEDIN",phoneLabel:"PHONE",resumeLabel:"RESUME",
formNameLabel:"Your name",formNamePh:"Your name",
formEmailLabel:"Email address",formEmailPh:"you@example.com",
formMessageLabel:"Message",formMessagePh:"Tell me about your idea...",
sendBtn:"Send message ↗",
formNoteText:"This static portfolio opens your email app with the message prepared.",
formNoteSent:"Your email app should now open with the message prepared.",
footerTagline:"Designed & built with curiosity in Bahir Dar, Ethiopia.",
backToTop:"BACK TO TOP ↑",
typed:["Web Developer","Database Administrator","IoT Builder","AI Enthusiast","Creative Specialist"],
modal:{
green:{tag:"IoT × AI × AUTOMATION",title:"Green Tech Smart Agriculture 2.0",text:"Automated agricultural monitoring and smart irrigation concept using IoT sensors, offline MicroSD logging, cloud/edge gateways and YOLOv8 computer vision for crop-disease detection."},
inventory:{tag:"WEB • MYSQL",title:"ICT Inventory Management",text:"A department-focused inventory workflow for tracking equipment, employees, issued assets and reports with a database-backed web interface."},
media:{tag:"CREATIVE • VIDEO",title:"Digital Content Studio",text:"A creative workflow for promotional graphics, social-media designs, short-form videos and longer edits for personal and client projects."},
portfolio:{tag:"HTML • CSS • JS",title:"Dagnaw Personal Portfolio",text:"A responsive personal brand website combining developer identity, project storytelling, multilingual content, animations and contact tools."}
}
},
am:{
navHome:"መነሻ",navAbout:"ስለ እኔ",navSkills:"ክህሎቶች",navProjects:"ፕሮጀክቶች",navJourney:"ጉዞ",navContact:"አግኙኝ",
letsTalk:"እናውራ ↗",logoTag:"ገንቢ • ፈጣሪ • ገንቢ",
available:"ለአዲስ ዕድሎች ዝግጁ ነኝ",
heroKicker:"ሰላም፣ እኔ",
hero:"ዘመናዊ የዌብ ልምዶችን፣ የዳታቤዝ ሲስተሞችን እና ሶፍትዌር፣ IoT፣ AI እና ዲጂታል ሚዲያን የሚያጣምሩ ቴክኖሎጂ መፍትሄዎችን እገነባለሁ።",
explore:"ስራዬን ይመልከቱ ↗",downloadCv:"CV አውርድ ↗",resumeDownload:"CV አውርድ",
heroLocation:"ባህር ዳር / ኢትዮጵያ",heroOnline:"● በመስመር ላይ",
heroLangLabel:"የሚደገፉ<br>ቋንቋዎች",heroMiniLabel:"ስማርት አግሪካልቸር",farmUiTitle:"ስማርት<br>አግሪካልቸር",featuredBadge:"IoT • AI • ጠርዝ",
aboutSection:"01 / ስለ እኔ",
aboutTitle:"የገንቢ<br><strong>አስተሳሰብ ያለው ገንቢ።</strong>",
aboutText:"እኔ በባህር ዳር የምገኝ የዌብ ዲቨሎፐር፣ የዳታቤዝ አስተዳዳሪ እና የግራፊክስ/ቪዲዮ ባለሙያ ነኝ። በባህር ዳር ፖሊቴክኒክ ኮሌጅ ደረጃ 2 ዌብ ዲቨሎፕመንት እና ዳታቤዝ አስተዳደር በመማር ላይ ስሆን፣ ለሶፍትዌር ኢንጂነሪንግ እና ለአርቲፊሻል ኢንተለጀንስ ልዩ ፍላጎት አለኝ።",
aboutText2:"IoTን ከዘመናዊ ሶፍትዌር ጋር በማጣመር ተጨባጭ ችግሮችን መፍታት እወዳለሁ። የረጅም ጊዜ ግቤ ተፅዕኖ ፈጣሪ ሶፍትዌር ኢንጂነር በመሆን እንደ Outreachy ባሉ ፕሮግራሞች ለክፍት ምንጭ ማህበረሰብ አስተዋፅዖ ማድረግ ነው።",
aboutQuote:"«ጠቃሚ ቴክኖሎጂ ገንቡ። ተማሩ። ተፅዕኖ ፍጠሩ።»",
factLocTitle:"ባህር ዳር",factLocSub:"ኢትዮጵያ",
factLevelTitle:"ደረጃ 2",factLevelSub:"ዌብ + ዳታቤዝ",
factInterestTitle:"IoT + AI",factInterestSub:"ዋና ፍላጎት",
factOpenTitle:"ክፍት ምንጭ",factOpenSub:"የOutreachy ግብ",
skillsSection:"02 / ችሎታዎች",
skillsHeading:"ሃሳቦችን ወደ<br><strong>ሲስተም የሚቀይሩ ክህሎቶች።</strong>",
skillCat1Label:"ዌብ እና ሶፍትዌር",skillCat1Title:"ዲቨሎፕመንት",
skillCat2Label:"ዳታ እና መሳሪያዎች",skillCat2Title:"ሲስተሞች",
skillCat3Label:"ፈጠራ",skillCat3Title:"ዲጂታል ሚዲያ",
profAdvanced:"የላቀ",profIntermediate:"መካከለኛ",profBegInt:"ጀማሪ / መካከለኛ",
projectsSection:"03 / የተመረጡ ስራዎች",
projectsHeading:"ተጨባጭ ዓላማ ያላቸው<br><strong>ፕሮጀክቶች።</strong>",
featuredLabel:"ተለይቶ የቀረበ ፕሮጀክት / 01",
featuredTag:"IoT × AI × አውቶሜሽን",
featuredTitle:"ግሪን ቴክ<br><strong>ስማርት አግሪካልቸር 2.0</strong>",
featuredDesc:"IoT ሴንሰሮችን፣ ከመስመር ውጭ MicroSD ምዝገባን፣ ክላውድ/edge ጌትዌይዎችን እና ለሰብል በሽታ ማወቂያ YOLOv8 ኮምፒውተር ቪዥንን የሚጠቀም አውቶማቲክ የግብርና ክትትል እና ስማርት መስኖ ፅንሰ-ሀሳብ።",
viewCaseStudy:"የጥናት ጉዳይ ይመልከቱ ↗",
proj2Cat:"ዌብ • MYSQL",proj2Title:"የICT ንብረት አስተዳደር",proj2Desc:"ንብረቶችን፣ ሰራተኞችን፣ ችግሮችን እና ሪፖርቶችን ለመከታተል የክፍል ንብረት አስተዳደር ስርዓት።",
proj3Cat:"ፈጠራ • ቪዲዮ",proj3Title:"ዲጂታል ይዘት ስቱዲዮ",proj3Desc:"ብራንዲንግ፣ የፖስተር ዲዛይን፣ አጭር እና ረጅም የቪዲዮ አርትዖት ስራ ፍሰቶች።",
proj4Cat:"HTML • CSS • JS",proj4Title:"የግል ፖርትፎሊዮ",proj4Desc:"በቴክኖሎጂ፣ ፈጠራ እና ክፍት ምንጭ ዙሪያ የተነደፈ ምላሽ ሰጪ የግል ብራንድ ድህረ ገጽ።",
detailsBtn:"ዝርዝር →",
journeySection:"04 / ጉዞ",
journeyHeading:"ዛሬ መማር።<br><strong>ነገ መገንባት።</strong>",
j1Label:"አሁን / ትምህርት",j1Title:"ደረጃ 2 — ዌብ ዲቨሎፕመንት እና ዳታቤዝ አስተዳደር",j1Desc:"ባህር ዳር ፖሊቴክኒክ ኮሌጅ። በተግባራዊ ዌብ፣ ዳታቤዝ እና ፕሮግራሚንግ መሰረቶች ላይ ያተኩራል።",
j2Label:"ሙያዊ / ፈጠራ",j2Title:"ፍሪላንስ ዲዛይነር እና ዲጂታል ይዘት ፈጣሪ",j2Desc:"ለግል እና ደንበኛ ፕሮጀክቶች የማስተዋወቂያ ቁሳቁሶች፣ የማህበራዊ ሚዲያ ግራፊክስ እና የቪዲዮ አርትዖት።",
j3Label:"የስራ ልምድ",j3Title:"ባርማን እና የደንበኛ አገልግሎት ስፔሻሊስት — Palm Palace Hotel",j3Desc:"በቀጥታ አገልግሎት አካባቢ ውስጥ የደንበኛ አገልግሎት፣ የስራ ቦታ ቅንጅት እና የመግባቢያ ልምድ።",
j4Label:"ወደፊት / ክፍት ምንጭ",j4Title:"Outreachy እና ተፅዕኖ ፈጣሪ ሶፍትዌር ኢንጂነሪንግ",j4Desc:"ግብ፦ ለክፍት ምንጭ አስተዋፅዖ ማድረግ እና ትርጉም ያለው የማህበረሰብ ተፅዕኖ ያላቸው ሶፍትዌር/ዳታቤዝ ስርዓቶችን መገንባት።",
certsLabel:"ስልጠና",cert1:"ግራፊክ ዲዛይን",cert2:"ዌብ ዲቨሎፕመንት",cert3:"ቪዲዮ አርትዖት",cert4:"ዲጂታል ማርኬቲንግ",cert5:"የይዘት ፈጠራ",
visionSection:"05 / ራዕይ",
visionHeading:"ቴክኖሎጂ<br><strong>የሆነ ነገር መፍታት አለበት።</strong>",
visionText:"አቅጣጫዬ ቀላል ነው፦ ከተማሪ ገንቢነት ወደ ተግባራዊ፣ ተደራሽ እና ክፍት ምንጭ ቴክኖሎጂ ወደሚፈጥር ሶፍትዌር ኢንጂነር ማደግ።",
visionStat1:"ቋንቋዎች",visionStat2:"ትምህርት",visionStat3:"ትልቅ ተልእኮ",
contactSection:"06 / አግኙኝ",
contactHeading:"ሀሳብ አለዎት?<br><strong>እንገንባው።</strong>",
contactIntro:"ለትብብር፣ ፍሪላንስ ስራ፣ ክፍት ምንጭ እድሎች ወይም የቴክኖሎጂ ፕሮጀክቶች ከታች ባሉት ማናቸውም መንገዶች ያግኙኝ።",
emailLabel:"ኢሜይል",githubLabel:"ጊትሃብ",linkedinLabel:"ሊንክድኢን",phoneLabel:"ስልክ",resumeLabel:"ሬዙሜ",
formNameLabel:"ስምዎ",formNamePh:"ስምዎ",
formEmailLabel:"የኢሜይል አድራሻ",formEmailPh:"you@example.com",
formMessageLabel:"መልእክት",formMessagePh:"ስለ ሀሳብዎ ይንገሩኝ...",
sendBtn:"መልእክት ላክ ↗",
formNoteText:"ይህ ስታቲክ ፖርትፎሊዮ የኢሜይል መተግበሪያዎን በተዘጋጀ መልእክት ይከፍታል።",
formNoteSent:"የኢሜይል መተግበሪያዎ አሁን በተዘጋጀው መልእክት መከፈት አለበት።",
footerTagline:"በባህር ዳር፣ ኢትዮጵያ በጉጉት የተነደፈ እና የተገነባ።",
backToTop:"ወደ ላይ ተመለስ ↑",
typed:["ዌብ ዲቨሎፐር","የዳታቤዝ አስተዳዳሪ","IoT ገንቢ","AI ፍቅረኛ","ክሪኤቲቭ ስፔሻሊስት"],
modal:{
green:{tag:"IoT × AI × አውቶሜሽን",title:"ግሪን ቴክ ስማርት አግሪካልቸር 2.0",text:"IoT ሴንሰሮችን፣ ከመስመር ውጭ MicroSD ምዝገባን፣ ክላውድ/edge ጌትዌይዎችን እና YOLOv8ን የሚጠቀም አውቶማቲክ የግብርና ክትትል እና ስማርት መስኖ ፅንሰ-ሀሳብ።"},
inventory:{tag:"ዌብ • MYSQL",title:"የICT ንብረት አስተዳደር",text:"መሳሪያዎችን፣ ሰራተኞችን፣ የተሰጡ ንብረቶችን እና ሪፖርቶችን ለመከታተል በዳታቤዝ የተደገፈ የክፍል ንብረት አስተዳደር ስርዓት።"},
media:{tag:"ፈጠራ • ቪዲዮ",title:"ዲጂታል ይዘት ስቱዲዮ",text:"ለግል እና ደንበኛ ፕሮጀክቶች የማስተዋወቂያ ግራፊክስ፣ የማህበራዊ ሚዲያ ዲዛይኖች፣ አጭር ቪዲዮዎች እና ረጅም አርትዖቶች የፈጠራ ስራ ፍሰት።"},
portfolio:{tag:"HTML • CSS • JS",title:"የዳኘው የግል ፖርትፎሊዮ",text:"የገንቢ ማንነትን፣ የፕሮጀክት ትረካን፣ ባለብዙ ቋንቋ ይዘትን፣ አኒሜሽንን እና የመገናኛ መሳሪያዎችን የሚያጣምር ምላሽ ሰጪ የግል ብራንድ ድህረ ገጽ።"}
}
},
om:{
navHome:"Mana",navAbout:"Waa'ee Koo",navSkills:"Dandeettii",navProjects:"Piroojektota",navJourney:"Imala",navContact:"Nu Qunnamaa",
letsTalk:"Haa Haasofnu ↗",logoTag:"IJAARAA • UUMAA • HOJJETAA",
available:"CARRAA HARAAF QOPHAA'AA",
heroKicker:"ASHAMAA, ANI",
hero:"Muuxannoo weeb ammayyaa, sirna kuusaa deetaa fi furmaata teeknooloojii kan software, IoT, AI fi miidiyaa uumamaa walitti fidu nan ijaara.",
explore:"Hojii koo ilaali ↗",downloadCv:"CV Buufadhu ↗",resumeDownload:"CV Buufadhu",
heroLocation:"BAHIR DAR / ITOOPHIYAA",heroOnline:"● ONLAAYINII",
heroLangLabel:"AFAANOTA<br>DEEGGARAMAN",heroMiniLabel:"QONNA OGUMMAA",farmUiTitle:"QONNA<br>OGUMMAA",featuredBadge:"IoT • AI • DAANGAA",
aboutSection:"01 / WAA'EE KOO",
aboutTitle:"Ijaaraa<br><strong>yaada ijaarsaa qabu.</strong>",
aboutText:"Ani Ijaaraa Weeb, Bulchaa Kuusaa Deetaa fi Ogeessa Suuraa/Viidiyoo kan Bahir Dar, Itoophiyaa jiraatu dha. Kolleejjii Poolitekniikaa Bahir Dar keessatti Sadarkaa 2 Ijaarsa Weeb fi Bulchiinsa Kuusaa Deetaa barachaa jira, fedhii guddaa Injinariingii Software fi Artifishaal Intelijensiif qaba.",
aboutText2:"Teeknooloojii IoT waliin walitti fiduun rakkoo dhugaa hiikuu nan jaalladha. Kaayyoon koo yeroo dheeraa Injinara Software dhiibbaa qabu ta'uu fi sagantaalee akka Outreachy karaa hawaasa open-source galtee gumaachuu dha.",
aboutQuote:"«Teeknooloojii faayidaa qabu ijaari. Baradhu. Dhiibbaa uumi.»",
factLocTitle:"Bahir Dar",factLocSub:"Itoophiyaa",
factLevelTitle:"Sadarkaa 2",factLevelSub:"Weeb + Kuusaa Deetaa",
factInterestTitle:"IoT + AI",factInterestSub:"Fedhii Ijoo",
factOpenTitle:"Open Source",factOpenSub:"Kaayyoo Outreachy",
skillsSection:"02 / DANDEETTII",
skillsHeading:"Yaada gara<br><strong>sirnaatti kan geeddaru dandeettii.</strong>",
skillCat1Label:"WEEB & SOFTWARE",skillCat1Title:"Ijaarsa",
skillCat2Label:"DEETAA & MEESHAALEE",skillCat2Title:"Sirnoota",
skillCat3Label:"UUMAMA",skillCat3Title:"Miidiyaa Dijitaalaa",
profAdvanced:"Ol'aanaa",profIntermediate:"Giddu Galeessaa",profBegInt:"Jalqabaa / Giddu Galeessaa",
projectsSection:"03 / HOJII FILATAMAN",
projectsHeading:"Piroojektoota kaayyoo<br><strong>dhugaa qaban.</strong>",
featuredLabel:"PIROOJEKTII ADDAA / 01",
featuredTag:"IoT × AI × OTOMEESHINII",
featuredTitle:"Green Tech<br><strong>Qonna Ogummaa 2.0</strong>",
featuredDesc:"Yaada hordoffii qonnaa otomaatawaa fi dhiqannaa ogummaa kan sensora IoT, galmee MicroSD offline, gateway cloud/edge fi mul'ata koompiitaraa YOLOv8 dhukkuba midhaanii adda baasuuf fayyadamu.",
viewCaseStudy:"Qorannoo ilaali ↗",
proj2Cat:"WEEB • MYSQL",proj2Title:"Bulchiinsa Qabeenya ICT",proj2Desc:"Adeemsa bulchiinsa qabeenya damee kan qabeenya, hojjettoota, rakkoolee fi gabaasa hordofuuf.",
proj3Cat:"UUMAMA • VIIDIYOO",proj3Title:"Istuudiyoo Odeeffannoo Dijitaalaa",proj3Desc:"Baraandingii, dizaayinii pooster, hojii sirreeffama viidiyoo gabaabaa fi dheeraa.",
proj4Cat:"HTML • CSS • JS",proj4Title:"Portfolioo Dhuunfaa",proj4Desc:"Marsariitii moggaasa dhuunfaa deebii kennu kan teeknooloojii, uumama fi open-source irratti xiyyeeffate.",
detailsBtn:"Bal'ina →",
journeySection:"04 / IMALA",
journeyHeading:"Har'a baradhu.<br><strong>Boru ijaari.</strong>",
j1Label:"AMMA / BARNOOTA",j1Title:"Sadarkaa 2 — Ijaarsa Weeb fi Bulchiinsa Kuusaa Deetaa",j1Desc:"Kolleejjii Poolitekniikaa Bahir Dar. Hundee weeb, kuusaa deetaa fi progiraaming irratti xiyyeeffata.",
j2Label:"OGUMMAA / UUMAMA",j2Title:"Dizaayinaraa Ofjiraataa fi Uumaa Odeeffannoo Dijitaalaa",j2Desc:"Meeshaalee beeksisaa, suuraalee miidiyaa hawaasaa fi sirreeffama viidiyoo piroojektoota dhuunfaa fi maamiltootaaf.",
j3Label:"MUUXANNOO HOJII",j3Title:"Barmaanii fi Ogeessa Tajaajila Maamilaa — Palm Palace Hotel",j3Desc:"Tajaajila maamilaa, qindoomina bakka hojii fi muuxannoo qunnamtii naannoo tajaajila yeroo dhugaa keessatti.",
j4Label:"FUULDURA / OPEN SOURCE",j4Title:"Outreachy fi Injinariingii Software Dhiibbaa Qabu",j4Desc:"Kaayyoo: open source galtee gumaachuu fi sirna software/kuusaa deetaa dhiibbaa hawaasaa qabu ijaaruu.",
certsLabel:"LEENJII",cert1:"Dizaayinii Suuraa",cert2:"Ijaarsa Weeb",cert3:"Sirreeffama Viidiyoo",cert4:"Gabaa Dijitaalaa",cert5:"Uumaa Odeeffannoo",
visionSection:"05 / MUL'ATA",
visionHeading:"Teeknooloojiin<br><strong>waan tokko hiikuu qaba.</strong>",
visionText:"Kallattiin koo salphaa dha: ijaaraa barataa irraa gara injinara software kan teeknooloojii ta'u, argamu fi open-source uumu ta'uutti guddachuu.",
visionStat1:"Afaanota",visionStat2:"Barnoota",visionStat3:"Ergama Guddaa",
contactSection:"06 / NU QUNNAMAA",
contactHeading:"Yaada qabdaa?<br><strong>Haa ijaarru.</strong>",
contactIntro:"Waliigaltee, hojii ofjiraataa, carraa open-source ykn piroojektoota teeknooloojiif, karaa armaan gadii kamiyyuu na qunnamaa.",
emailLabel:"IMEELII",githubLabel:"GITHUB",linkedinLabel:"LINKEDIN",phoneLabel:"BILBILA",resumeLabel:"RESUME",
formNameLabel:"Maqaa Keessan",formNamePh:"Maqaa Keessan",
formEmailLabel:"Teessoo Imeelii",formEmailPh:"you@example.com",
formMessageLabel:"Ergaa",formMessagePh:"Waa'ee yaada keessanii natti himaa...",
sendBtn:"Ergaa Ergi ↗",
formNoteText:"Portfolioon static kun aappii imeelii keessan ergaa qophaa'e waliin banaa.",
formNoteSent:"Aappiin imeelii keessan ammaan ergaa qophaa'ame waliin banamuu qaba.",
footerTagline:"Bahir Dar, Itoophiyaa keessatti hawwii guddaan hojjetame.",
backToTop:"GARA OLII DEEBI'I ↑",
typed:["Ijaaraa Weeb","Bulchaa Kuusaa Deetaa","Ijaaraa IoT","Fedhii AI","Ogeessa Uumaa"],
modal:{
green:{tag:"IoT × AI × OTOMEESHINII",title:"Green Tech Qonna Ogummaa 2.0",text:"Yaada hordoffii qonnaa otomaatawaa fi dhiqannaa ogummaa kan sensora IoT, galmee MicroSD offline, gateway cloud/edge fi YOLOv8 fayyadamu."},
inventory:{tag:"WEEB • MYSQL",title:"Bulchiinsa Qabeenya ICT",text:"Adeemsa bulchiinsa qabeenya damee kan meeshaalee, hojjettoota, qabeenya kennaman fi gabaasa hordofuuf, marsariitii kuusaa deetaa waliin walqabate."},
media:{tag:"UUMAMA • VIIDIYOO",title:"Istuudiyoo Odeeffannoo Dijitaalaa",text:"Adeemsa uumamaa suuraalee beeksisaa, dizaayinii miidiyaa hawaasaa, viidiyoo gabaabaa fi sirreeffama dheeraa piroojektoota dhuunfaa fi maamiltootaaf."},
portfolio:{tag:"HTML • CSS • JS",title:"Portfolioo Dhuunfaa Dagnaw",text:"Marsariitii moggaasa dhuunfaa deebii kennu kan eenyummaa ijaaraa, seenaa piroojektii, odeeffannoo afaan hedduu, sochii fi meeshaalee qunnamtii walitti fidu."}
}
},
zh:{
navHome:"首页",navAbout:"关于我",navSkills:"技能",navProjects:"项目",navJourney:"历程",navContact:"联系",
letsTalk:"联系我 ↗",logoTag:"开发者 • 创意人 • 建造者",
available:"欢迎新的合作机会",
heroKicker:"你好，我是",
hero:"我构建现代网页体验、数据库系统，以及融合软件、物联网、人工智能与创意媒体的技术方案。",
explore:"查看作品 ↗",downloadCv:"下载简历 ↗",resumeDownload:"下载简历",
heroLocation:"巴希尔达尔 / 埃塞俄比亚",heroOnline:"● 在线",
heroLangLabel:"支持的<br>语言",heroMiniLabel:"智能农业",farmUiTitle:"智能<br>农业",featuredBadge:"物联网 • AI • 边缘计算",
aboutSection:"01 / 关于我",
aboutTitle:"具备建造者<br><strong>思维的开发者。</strong>",
aboutText:"我是一名充满热情的网页开发者、数据库管理员和平面/视频制作专家，居住在埃塞俄比亚巴希尔达尔。我正在巴希尔达尔理工学院学习二级网页开发与数据库管理，对软件工程和人工智能有浓厚兴趣。",
aboutText2:"我喜欢将物联网技术与现代软件解决方案相结合，解决现实世界的问题。我的长期目标是成为一名有影响力的软件工程师，并通过 Outreachy 等项目为开源社区做出贡献。",
aboutQuote:"“打造有用的技术。持续学习。创造影响。”",
factLocTitle:"巴希尔达尔",factLocSub:"埃塞俄比亚",
factLevelTitle:"二级",factLevelSub:"网页 + 数据库",
factInterestTitle:"物联网 + AI",factInterestSub:"核心兴趣",
factOpenTitle:"开源",factOpenSub:"Outreachy 目标",
skillsSection:"02 / 能力",
skillsHeading:"将想法转化为<br><strong>系统的技能。</strong>",
skillCat1Label:"网页与软件",skillCat1Title:"开发",
skillCat2Label:"数据与工具",skillCat2Title:"系统",
skillCat3Label:"创意",skillCat3Title:"数字媒体",
profAdvanced:"精通",profIntermediate:"中级",profBegInt:"初级 / 中级",
projectsSection:"03 / 精选作品",
projectsHeading:"具有现实意义<br><strong>的项目。</strong>",
featuredLabel:"精选项目 / 01",
featuredTag:"物联网 × AI × 自动化",
featuredTitle:"绿色科技<br><strong>智能农业 2.0</strong>",
featuredDesc:"利用物联网传感器、离线 MicroSD 记录、云/边缘网关以及 YOLOv8 计算机视觉进行作物病害检测的自动化农业监测与智能灌溉方案。",
viewCaseStudy:"查看案例 ↗",
proj2Cat:"网页 • MYSQL",proj2Title:"ICT 资产管理系统",proj2Desc:"用于跟踪资产、员工、问题和报告的部门库存管理流程。",
proj3Cat:"创意 • 视频",proj3Title:"数字内容工作室",proj3Desc:"品牌设计、海报设计、短视频与长视频剪辑工作流程。",
proj4Cat:"HTML • CSS • JS",proj4Title:"个人作品集",proj4Desc:"围绕技术、创意与开源理念设计的响应式个人品牌网站。",
detailsBtn:"详情 →",
journeySection:"04 / 历程",
journeyHeading:"今日学习。<br><strong>明日建造。</strong>",
j1Label:"当前 / 教育",j1Title:"二级 — 网页开发与数据库管理",j1Desc:"巴希尔达尔理工学院。专注于实用的网页、数据库和编程基础。",
j2Label:"职业 / 创意",j2Title:"自由设计师与数字内容创作者",j2Desc:"为个人和客户项目提供宣传材料、社交媒体图形设计和视频剪辑。",
j3Label:"工作经验",j3Title:"调酒师与客户服务专员 — Palm Palace Hotel",j3Desc:"在实际服务环境中积累的客户服务、工作协调与沟通经验。",
j4Label:"未来 / 开源",j4Title:"Outreachy 与有影响力的软件工程",j4Desc:"目标：为开源做出贡献，构建具有社区意义的软件/数据库系统。",
certsLabel:"培训",cert1:"平面设计",cert2:"网页开发",cert3:"视频剪辑",cert4:"数字营销",cert5:"内容创作",
visionSection:"05 / 愿景",
visionHeading:"技术应当<br><strong>解决实际问题。</strong>",
visionText:"我的方向很简单：从学生开发者成长为能够创造实用、可及且开源技术的软件工程师。",
visionStat1:"语言",visionStat2:"学习",visionStat3:"远大使命",
contactSection:"06 / 联系",
contactHeading:"有想法吗？<br><strong>让我们一起实现它。</strong>",
contactIntro:"如需合作、自由职业、开源机会或技术项目，请通过以下任意渠道联系我。",
emailLabel:"邮箱",githubLabel:"GITHUB",linkedinLabel:"领英",phoneLabel:"电话",resumeLabel:"简历",
formNameLabel:"您的姓名",formNamePh:"您的姓名",
formEmailLabel:"电子邮箱",formEmailPh:"you@example.com",
formMessageLabel:"留言",formMessagePh:"请告诉我您的想法……",
sendBtn:"发送消息 ↗",
formNoteText:"这个静态作品集会打开您的邮件应用并自动填好邮件内容。",
formNoteSent:"您的邮件应用现在应该已打开，并已准备好消息内容。",
footerTagline:"怀着好奇心在埃塞俄比亚巴希尔达尔设计与打造。",
backToTop:"返回顶部 ↑",
typed:["网页开发者","数据库管理员","物联网开发者","AI 爱好者","创意专家"],
modal:{
green:{tag:"物联网 × AI × 自动化",title:"绿色科技智能农业 2.0",text:"利用物联网传感器、离线 MicroSD 记录、云/边缘网关以及 YOLOv8 进行农作物病害检测的自动化农业监测与智能灌溉方案。"},
inventory:{tag:"网页 • MYSQL",title:"ICT 资产管理系统",text:"基于数据库的部门资产管理流程，用于跟踪设备、员工、已发放资产和报告。"},
media:{tag:"创意 • 视频",title:"数字内容工作室",text:"为个人和客户项目提供宣传图形、社交媒体设计、短视频及长视频剪辑的创意工作流程。"},
portfolio:{tag:"HTML • CSS • JS",title:"Dagnaw 个人作品集",text:"融合开发者身份、项目故事、多语言内容、动画效果与联系方式的响应式个人品牌网站。"}
}
}
};

const techByProject={
green:["ESP32-S3","Python","IoT Sensors","MicroSD","LoRaWAN / GSM","YOLOv8"],
inventory:["HTML","CSS","JavaScript","PHP","MySQL"],
media:["Graphic Design","Video Editing","Content Creation","Digital Marketing"],
portfolio:["HTML5","CSS3","JavaScript","Responsive UI","Animation"]
};

let currentLang=localStorage.getItem("lang")||"en";

const typed=$("#typed");
let words=translations[currentLang].typed;
let wi=0,ci=0,del=false;
function type(){let w=words[wi];typed.textContent=w.slice(0,ci);if(!del&&ci<w.length){ci++;setTimeout(type,85)}else if(!del){del=true;setTimeout(type,1200)}else if(ci>0){ci--;setTimeout(type,42)}else{del=false;wi=(wi+1)%words.length;setTimeout(type,250)}} type();

const io=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting)e.target.classList.add("visible")}),{threshold:.12});
$$(".reveal").forEach(x=>io.observe(x));

$("#theme").onclick=()=>{document.body.classList.toggle("light");$("#theme").textContent=document.body.classList.contains("light")?"☀":"☾";localStorage.setItem("theme",document.body.classList.contains("light")?"light":"dark")};
if(localStorage.getItem("theme")==="light"){document.body.classList.add("light");$("#theme").textContent="☀"}

$("#menu").onclick=()=>$("#mobileNav").classList.toggle("show");
$$(".mobile-nav a").forEach(a=>a.onclick=()=>$("#mobileNav").classList.remove("show"));

function applyLang(lang){
  const t=translations[lang];
  if(!t)return;
  currentLang=lang;
  document.documentElement.lang=lang;
  $$("[data-i18n]").forEach(el=>{const k=el.dataset.i18n;if(t[k]!==undefined)el.innerHTML=t[k]});
  $$("[data-i18n-placeholder]").forEach(el=>{const k=el.dataset.i18nPlaceholder;if(t[k]!==undefined)el.placeholder=t[k]});
  words=t.typed;wi=0;ci=0;del=false;
  localStorage.setItem("lang",lang);
}
$("#lang").value=currentLang;
$("#lang").onchange=e=>applyLang(e.target.value);
applyLang(currentLang);

function openProject(id){
  const p=translations[currentLang].modal[id],tech=techByProject[id];
  $("#modalTag").textContent=p.tag;$("#modalTitle").textContent=p.title;$("#modalText").textContent=p.text;
  $("#modalTech").innerHTML=tech.map(x=>`<span>${x}</span>`).join("");$("#modal").classList.add("show")
}
$$(".project-open").forEach(b=>b.onclick=()=>openProject(b.dataset.project));
$("#closeModal").onclick=()=>$("#modal").classList.remove("show");
$("#modal").onclick=e=>{if(e.target.id==="modal")$("#modal").classList.remove("show")};

$$(".tilt").forEach(card=>{card.addEventListener("mousemove",e=>{let r=card.getBoundingClientRect(),x=(e.clientX-r.left)/r.width-.5,y=(e.clientY-r.top)/r.height-.5;card.style.transform=`perspective(900px) rotateX(${y*-5}deg) rotateY(${x*5}deg) translateY(-3px)`});card.addEventListener("mouseleave",()=>card.style.transform="")});

const canvas=$("#particles"),ctx=canvas.getContext("2d");let W,H,pts=[];
function resize(){W=canvas.width=innerWidth;H=canvas.height=innerHeight;pts=Array.from({length:Math.min(80,Math.floor(W/18))},()=>({x:Math.random()*W,y:Math.random()*H,vx:(Math.random()-.5)*.25,vy:(Math.random()-.5)*.25,r:Math.random()*1.4+.3}))}
function particles(){ctx.clearRect(0,0,W,H);for(const p of pts){p.x+=p.vx;p.y+=p.vy;if(p.x<0||p.x>W)p.vx*=-1;if(p.y<0||p.y>H)p.vy*=-1;ctx.beginPath();ctx.arc(p.x,p.y,p.r,0,Math.PI*2);ctx.fillStyle=document.body.classList.contains("light")?"#6a8eae55":"#67d9ff77";ctx.fill()}requestAnimationFrame(particles)}
addEventListener("resize",resize);resize();particles();

const glow=$(".cursor-glow");addEventListener("pointermove",e=>{glow.style.left=e.clientX+"px";glow.style.top=e.clientY+"px"});
$("#contactForm").onsubmit=e=>{e.preventDefault();let f=new FormData(e.target),sub=encodeURIComponent("Portfolio inquiry from "+f.get("name")),body=encodeURIComponent("Name: "+f.get("name")+"\nEmail: "+f.get("email")+"\n\n"+f.get("message"));location.href=`mailto:dagnawbeyene5@gmail.com?subject=${sub}&body=${body}`;$("#formNote").textContent=translations[currentLang].formNoteSent;};
