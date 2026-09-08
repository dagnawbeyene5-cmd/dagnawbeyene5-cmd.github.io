/* ===================== INTRO / WELCOME SCREEN ===================== */
(function(){
  const introScreen=$("#introScreen"), cycleEl=$("#introCycle"), taglineEl=$("#introTagline");
  if(!introScreen)return;

  document.documentElement.style.overflow="hidden";
  const reduceMotion=matchMedia("(prefers-reduced-motion: reduce)").matches;

  const phrases=["Welcome","እንኳን ደህና መጡ","Baga Nagaan Dhuftan","欢迎","LET'S CREATE","DIGITAL IMPACT"];
  const taglines=["Ideas → Code → Systems → Impact","Design → Develop → Deliver","Web • Data • AI • IoT • Creative"];
  let idx=0, tagIdx=0;

  const cyclePhrase=()=>{
    if(!cycleEl)return;
    cycleEl.classList.remove("intro-word-in");
    void cycleEl.offsetWidth;
    cycleEl.textContent=phrases[idx];
    cycleEl.classList.add("intro-word-in");
    idx=(idx+1)%phrases.length;
  };
  cyclePhrase();
  const cycleTimer=setInterval(cyclePhrase,520);

  const taglineTimer=setInterval(()=>{
    if(!taglineEl)return;
    tagIdx=(tagIdx+1)%taglines.length;
    taglineEl.classList.remove("intro-word-in");
    void taglineEl.offsetWidth;
    taglineEl.textContent=taglines[tagIdx];
    taglineEl.classList.add("intro-word-in");
  },900);

  const introCanvas=$("#introParticles");
  let raf;
  if(introCanvas && !reduceMotion){
    const ctx=introCanvas.getContext("2d");
    let W,H,pts=[];
    function resize(){
      const dpr=Math.min(devicePixelRatio||1,2);
      W=innerWidth; H=innerHeight;
      introCanvas.width=W*dpr; introCanvas.height=H*dpr;
      introCanvas.style.width=W+"px"; introCanvas.style.height=H+"px";
      ctx.setTransform(dpr,0,0,dpr,0,0);
      const count=Math.min(110,Math.max(55,Math.floor(W/12)));
      pts=Array.from({length:count},()=>({
        x:Math.random()*W,y:Math.random()*H,
        vx:(Math.random()-.5)*.75,vy:(Math.random()-.5)*.75,
        r:Math.random()*1.7+.45
      }));
    }
    function draw(){
      ctx.clearRect(0,0,W,H);
      for(let i=0;i<pts.length;i++){
        const p=pts[i];
        p.x+=p.vx;p.y+=p.vy;
        if(p.x<0||p.x>W)p.vx*=-1;
        if(p.y<0||p.y>H)p.vy*=-1;
        ctx.beginPath();ctx.arc(p.x,p.y,p.r,0,Math.PI*2);
        ctx.fillStyle="rgba(103,217,255,.72)";ctx.fill();

        for(let k=i+1;k<pts.length;k++){
          const q=pts[k],dx=p.x-q.x,dy=p.y-q.y,d=Math.hypot(dx,dy);
          if(d<125){
            ctx.beginPath();ctx.moveTo(p.x,p.y);ctx.lineTo(q.x,q.y);
            ctx.strokeStyle=`rgba(139,123,255,${(1-d/125)*.16})`;
            ctx.lineWidth=.7;ctx.stroke();
          }
        }
      }
      raf=requestAnimationFrame(draw);
    }
    addEventListener("resize",resize,{passive:true});resize();draw();
  }

  const finish=()=>{
    clearInterval(cycleTimer);
    clearInterval(taglineTimer);
    if(raf)cancelAnimationFrame(raf);
    introScreen.classList.add("intro-hide");
    document.documentElement.style.overflow="";
    setTimeout(()=>introScreen.remove(),850);
  };

  // Fast, automatic transition into the main portfolio.
  setTimeout(finish,3400);
  if(reduceMotion)setTimeout(finish,1200);
})();
/* ===================== TRANSLATIONS ===================== */
const translations={
en:{
nav_home:"Home",nav_about:"About",nav_skills:"Skills",nav_projects:"Projects",nav_tools:"Tools",nav_journey:"Journey",nav_contact:"Contact",
hire_me:"Hire Me",
available:"Available for opportunities",hello:"HELLO, I'M",
hero_prefix:"I am a",
hero_description:"I build modern web experiences, manage databases and create digital solutions that connect technology with real-world needs.",
view_projects:"View My Projects",explore_tools:"Explore Tools",download_cv:"Download CV",
profile_role:"Developer • Database • Creative",stat_skills:"Skills",stat_languages:"Languages",stat_tools:"Tools",
section_about:"ABOUT ME",about_title:"Turning ideas into digital solutions.",
about_p1:"I am an enthusiastic Web Developer, Database Administrator, Graphics and Video Specialist passionate about Software Engineering and Artificial Intelligence.",
about_p2:"I am currently studying a Level 5 Diploma in Web Development at Bahir Dar Polytechnic College.",
about_p3:"My goal is to combine modern software development, databases, IoT and AI to create useful solutions for real-world problems.",
about_p4:"I am also interested in open-source development and hope to contribute to global technology communities through programs such as Outreachy.",
highlight_web_title:"Web Development",highlight_web_text:"Modern, responsive and user-friendly websites.",
highlight_db_title:"Database",highlight_db_text:"Database design, SQL and administration.",
highlight_ai_title:"AI & IoT",highlight_ai_text:"Exploring intelligent connected solutions.",
highlight_creative_title:"Creative",highlight_creative_text:"Graphic design, video editing and content creation.",
section_skills:"SKILLS",skills_title:"My technical & creative skills.",
skillCat1Title:"Development & Database",skillCat3Title:"Creative & AI",
profAdvanced:"Advanced",profIntermediate:"Intermediate",
section_projects:"PROJECTS",projects_title:"Things I'm building.",
featuredLabel:"FEATURED PROJECT",featuredTitle:"Green Tech Smart Agriculture 2.0",featuredTag:"IoT + AI + Smart Irrigation",
project_description:"An automated agricultural monitoring and smart irrigation system designed to use IoT sensors, microcontrollers, AI-powered crop disease detection and intelligent irrigation to improve agricultural productivity.",
proj2Cat:"WEB • MYSQL",proj2Title:"ICT Inventory Management",proj2Desc:"Department inventory workflow for tracking assets, employees, issues and reports.",
proj3Cat:"CREATIVE • VIDEO",proj3Title:"Digital Content Studio",proj3Desc:"Branding, poster design, short-form and long-form video editing workflows.",
proj4Cat:"HTML • CSS • JS",proj4Title:"Personal Portfolio",proj4Desc:"A responsive personal brand site designed around technology, creativity and open source.",
journeySection:"JOURNEY",journeyHeadingPlain:"Learning today. Building tomorrow.",
j1Label:"NOW / EDUCATION",j1Title:"Web Development Diploma — Bahir Dar Polytechnic College",j1Desc:"Focused on practical web, database and programming foundations.",
j2Label:"PROFESSIONAL / CREATIVE",j2Title:"Freelance Designer & Digital Content Creator",j2Desc:"Promotional materials, social-media graphics and video editing for personal and client projects.",
j3Label:"WORK EXPERIENCE",j3Title:"Front Desk Attendant — Palm Palace Hotel",j3Desc:"Customer service, workplace coordination and communication experience in a live service environment.",
j4Label:"FUTURE / OPEN SOURCE",j4Title:"Outreachy & Impactful Software Engineering",j4Desc:"Goal: contribute to open source and build software/database systems with meaningful community impact.",
goal_label:"MY VISION",goal_title:"Become an impactful Software Engineer.",
goal_description:"My long-term goal is to build meaningful software solutions, contribute to open source and use technology to solve real-world problems.",
section_contact:"CONTACT",contact_title:"Let's build something great.",
contact_subtitle:"Get in touch",contact_description:"Have a project, idea or opportunity? Feel free to contact me.",
form_name:"Your Name",form_email:"Email",form_message:"Message",send_message:"Send Message",
form_sent:"Your email app should now open with the message prepared.",
footer_text:"Building useful things with technology.",rights:"All rights reserved.",
typed:["Web Developer","Database Administrator","IoT Builder","AI Enthusiast","Creative Specialist"]
},
am:{
nav_home:"መነሻ",nav_about:"ስለ እኔ",nav_skills:"ክህሎቶች",nav_projects:"ፕሮጀክቶች",nav_tools:"መገልገያዎች",nav_journey:"ጉዞ",nav_contact:"አግኙኝ",
hire_me:"ቅጠሩኝ",
available:"ለአዲስ ዕድሎች ዝግጁ ነኝ",hello:"ሰላም፣ እኔ",
hero_prefix:"እኔ",
hero_description:"ዘመናዊ የዌብ ልምዶችን፣ ዳታቤዞችን የማስተዳድር እና ቴክኖሎጂን ከተጨባጭ ፍላጎቶች ጋር የሚያገናኙ ዲጂታል መፍትሄዎችን እገነባለሁ።",
view_projects:"ፕሮጀክቶቼን ይመልከቱ",explore_tools:"መገልገያዎችን ይመልከቱ",download_cv:"CV አውርድ",
profile_role:"ገንቢ • ዳታቤዝ • ፈጠራ",stat_skills:"ክህሎቶች",stat_languages:"ቋንቋዎች",stat_tools:"መገልገያዎች",
section_about:"ስለ እኔ",about_title:"ሃሳቦችን ወደ ዲጂታል መፍትሄ የሚቀይር።",
about_p1:"እኔ ለሶፍትዌር ኢንጂነሪንግ እና ለአርቲፊሻል ኢንተለጀንስ ልዩ ፍላጎት ያለኝ የዌብ ዲቨሎፐር፣ የዳታቤዝ አስተዳዳሪ እና የግራፊክስ/ቪዲዮ ባለሙያ ነኝ።",
about_p2:"በአሁኑ ጊዜ በባህር ዳር ፖሊቴክኒክ ኮሌጅ የደረጃ 5 ዲፕሎማ በዌብ ዲቨሎፕመንት እየተማርኩ ነው።",
about_p3:"ግቤ ዘመናዊ ሶፍትዌር ልማት፣ ዳታቤዝ፣ IoT እና AI ን በማጣመር ለተጨባጭ ችግሮች ጠቃሚ መፍትሄዎችን መፍጠር ነው።",
about_p4:"እንዲሁም ክፍት ምንጭ (open-source) ልማት ላይ ፍላጎት አለኝ፣ እና እንደ Outreachy ባሉ ፕሮግራሞች ለዓለም አቀፍ ቴክኖሎጂ ማህበረሰቦች አስተዋፅዖ ማድረግ ተስፋ አደርጋለሁ።",
highlight_web_title:"ዌብ ዲቨሎፕመንት",highlight_web_text:"ዘመናዊ፣ ምላሽ ሰጪ እና ተጠቃሚ ተኮር ድህረ ገፆች።",
highlight_db_title:"ዳታቤዝ",highlight_db_text:"የዳታቤዝ ንድፍ፣ SQL እና አስተዳደር።",
highlight_ai_title:"AI እና IoT",highlight_ai_text:"ብልህ የተገናኙ መፍትሄዎችን መመርመር።",
highlight_creative_title:"ፈጠራ",highlight_creative_text:"ግራፊክ ዲዛይን፣ የቪዲዮ አርትዖት እና የይዘት ፈጠራ።",
section_skills:"ክህሎቶች",skills_title:"ቴክኒካል እና የፈጠራ ክህሎቶቼ።",
skillCat1Title:"ዲቨሎፕመንት እና ዳታቤዝ",skillCat3Title:"ፈጠራ እና AI",
profAdvanced:"የላቀ",profIntermediate:"መካከለኛ",
section_projects:"ፕሮጀክቶች",projects_title:"እየገነባኋቸው ያሉ ነገሮች።",
featuredLabel:"ተለይቶ የቀረበ ፕሮጀክት",featuredTitle:"ግሪን ቴክ ስማርት አግሪካልቸር 2.0",featuredTag:"IoT + AI + ስማርት መስኖ",
project_description:"IoT ሴንሰሮችን፣ ማይክሮኮንትሮለሮችን፣ በAI የተደገፈ የሰብል በሽታ ማወቂያ እና ብልህ መስኖ በመጠቀም የግብርና ምርታማነትን ለማሻሻል የተነደፈ አውቶማቲክ የግብርና ክትትል ስርዓት።",
proj2Cat:"ዌብ • MYSQL",proj2Title:"የICT ንብረት አስተዳደር",proj2Desc:"ንብረቶችን፣ ሰራተኞችን፣ ችግሮችን እና ሪፖርቶችን ለመከታተል የክፍል ንብረት አስተዳደር ስርዓት።",
proj3Cat:"ፈጠራ • ቪዲዮ",proj3Title:"ዲጂታል ይዘት ስቱዲዮ",proj3Desc:"ብራንዲንግ፣ የፖስተር ዲዛይን፣ አጭር እና ረጅም የቪዲዮ አርትዖት ስራ ፍሰቶች።",
proj4Cat:"HTML • CSS • JS",proj4Title:"የግል ፖርትፎሊዮ",proj4Desc:"በቴክኖሎጂ፣ ፈጠራ እና ክፍት ምንጭ ዙሪያ የተነደፈ ምላሽ ሰጪ የግል ብራንድ ድህረ ገጽ።",
journeySection:"ጉዞ",journeyHeadingPlain:"ዛሬ መማር። ነገ መገንባት።",
j1Label:"አሁን / ትምህርት",j1Title:"የዌብ ዲቨሎፕመንት ዲፕሎማ — ባህር ዳር ፖሊቴክኒክ ኮሌጅ",j1Desc:"በተግባራዊ ዌብ፣ ዳታቤዝ እና ፕሮግራሚንግ መሰረቶች ላይ ያተኩራል።",
j2Label:"ሙያዊ / ፈጠራ",j2Title:"ፍሪላንስ ዲዛይነር እና ዲጂታል ይዘት ፈጣሪ",j2Desc:"ለግል እና ደንበኛ ፕሮጀክቶች የማስተዋወቂያ ቁሳቁሶች፣ የማህበራዊ ሚዲያ ግራፊክስ እና የቪዲዮ አርትዖት።",
j3Label:"የስራ ልምድ",j3Title:"ፍሮንት ዴስክ ሰራተኛ — Palm Palace Hotel",j3Desc:"በቀጥታ አገልግሎት አካባቢ ውስጥ የደንበኛ አገልግሎት፣ የስራ ቦታ ቅንጅት እና የመግባቢያ ልምድ።",
j4Label:"ወደፊት / ክፍት ምንጭ",j4Title:"Outreachy እና ተፅዕኖ ፈጣሪ ሶፍትዌር ኢንጂነሪንግ",j4Desc:"ግብ፦ ለክፍት ምንጭ አስተዋፅዖ ማድረግ እና ትርጉም ያለው የማህበረሰብ ተፅዕኖ ያላቸው ሶፍትዌር/ዳታቤዝ ስርዓቶችን መገንባት።",
goal_label:"ራዕይ",goal_title:"ተፅዕኖ ፈጣሪ ሶፍትዌር ኢንጂነር መሆን።",
goal_description:"የረጅም ጊዜ ግቤ ትርጉም ያላቸው የሶፍትዌር መፍትሄዎችን መገንባት፣ ለክፍት ምንጭ አስተዋፅዖ ማድረግ እና ቴክኖሎጂን ለተጨባጭ ችግሮች መፍትሄ ለመስጠት መጠቀም ነው።",
section_contact:"አግኙኝ",contact_title:"የሆነ ትልቅ ነገር አብረን እንገንባ።",
contact_subtitle:"አግኙኝ",contact_description:"ፕሮጀክት፣ ሀሳብ ወይም እድል አለዎት? እባክዎ ያግኙኝ።",
form_name:"ስምዎ",form_email:"ኢሜይል",form_message:"መልእክት",send_message:"መልእክት ላክ",
form_sent:"የኢሜይል መተግበሪያዎ አሁን በተዘጋጀው መልእክት መከፈት አለበት።",
footer_text:"በቴክኖሎጂ ጠቃሚ ነገሮችን መገንባት።",rights:"ሁሉም መብቶች የተጠበቁ ናቸው።",
typed:["ዌብ ዲቨሎፐር","የዳታቤዝ አስተዳዳሪ","IoT ገንቢ","AI ፍቅረኛ","ክሪኤቲቭ ስፔሻሊስት"]
},
om:{
nav_home:"Mana",nav_about:"Waa'ee Koo",nav_skills:"Dandeettii",nav_projects:"Piroojektota",nav_tools:"Meeshaalee",nav_journey:"Imala",nav_contact:"Nu Qunnamaa",
hire_me:"Na Hojjechiisi",
available:"Carraa haaraaf qophaa'aa",hello:"Ashamaa, ani",
hero_prefix:"Ani",
hero_description:"Muuxannoo weeb ammayyaa nan ijaara, kuusaa deetaa nan bulcha, teeknooloojii fedhii dhugaa waliin walqabsiisu furmaata dijitaalaa nan uuma.",
view_projects:"Hojii Koo Ilaali",explore_tools:"Meeshaalee Ilaali",download_cv:"CV Buufadhu",
profile_role:"Ijaaraa • Kuusaa Deetaa • Uumaa",stat_skills:"Dandeettii",stat_languages:"Afaanota",stat_tools:"Meeshaalee",
section_about:"WAA'EE KOO",about_title:"Yaada gara furmaata dijitaalaatti geeddaruu.",
about_p1:"Ani Ijaaraa Weeb, Bulchaa Kuusaa Deetaa fi Ogeessa Suuraa/Viidiyoo kan Injinariingii Software fi Artifishaal Intelijensiif fedhii guddaa qabu dha.",
about_p2:"Ammaan tana Kolleejjii Poolitekniikaa Bahir Dar keessatti Diploomaa Sadarkaa 5 Ijaarsa Weeb baradhaa jira.",
about_p3:"Kaayyoon koo software ammayyaa, kuusaa deetaa, IoT fi AI walitti fiduun rakkoo dhugaadhaaf furmaata faayidaa qabu uumuu dha.",
about_p4:"Akkasumas ijaarsa open-source irratti fedhii qaba, sagantaalee akka Outreachy tiin hawaasa teeknooloojii addunyaatiif gumaachuuf abdii qaba.",
highlight_web_title:"Ijaarsa Weeb",highlight_web_text:"Marsariitii ammayyaa, deebii kennuu fi fayyadamaaf mijataa.",
highlight_db_title:"Kuusaa Deetaa",highlight_db_text:"Dizaayinii kuusaa deetaa, SQL fi bulchiinsa.",
highlight_ai_title:"AI fi IoT",highlight_ai_text:"Furmaata walitti hidhaman kan qaroo ta'e qorachuu.",
highlight_creative_title:"Uumama",highlight_creative_text:"Dizaayinii suuraa, sirreeffama viidiyoo fi uumaa odeeffannoo.",
section_skills:"DANDEETTII",skills_title:"Dandeettii teeknikaa fi uumamaa koo.",
skillCat1Title:"Ijaarsa fi Kuusaa Deetaa",skillCat3Title:"Uumama fi AI",
profAdvanced:"Ol'aanaa",profIntermediate:"Giddu Galeessaa",
section_projects:"PIROOJEKTOTA",projects_title:"Wantoota ani ijaaraa jiru.",
featuredLabel:"PIROOJEKTII ADDAA",featuredTitle:"Green Tech Qonna Ogummaa 2.0",featuredTag:"IoT + AI + Dhiqannaa Ogummaa",
project_description:"Sensora IoT, maayikroo-kontrooleera, adda baasuu dhukkuba midhaanii AI'n deeggarame fi dhiqannaa ogummaa fayyadamuun oomisha qonnaa fooyyessuuf kan qophaa'e sirna hordoffii qonnaa otomaatawaa.",
proj2Cat:"WEEB • MYSQL",proj2Title:"Bulchiinsa Qabeenya ICT",proj2Desc:"Adeemsa bulchiinsa qabeenya damee kan qabeenya, hojjettoota, rakkoolee fi gabaasa hordofuuf.",
proj3Cat:"UUMAMA • VIIDIYOO",proj3Title:"Istuudiyoo Odeeffannoo Dijitaalaa",proj3Desc:"Baraandingii, dizaayinii pooster, hojii sirreeffama viidiyoo gabaabaa fi dheeraa.",
proj4Cat:"HTML • CSS • JS",proj4Title:"Portfolioo Dhuunfaa",proj4Desc:"Marsariitii moggaasa dhuunfaa deebii kennu kan teeknooloojii, uumama fi open-source irratti xiyyeeffate.",
journeySection:"IMALA",journeyHeadingPlain:"Har'a baradhu. Boru ijaari.",
j1Label:"AMMA / BARNOOTA",j1Title:"Diploomaa Ijaarsa Weeb — Kolleejjii Poolitekniikaa Bahir Dar",j1Desc:"Hundee weeb, kuusaa deetaa fi progiraaming irratti xiyyeeffata.",
j2Label:"OGUMMAA / UUMAMA",j2Title:"Dizaayinaraa Ofjiraataa fi Uumaa Odeeffannoo Dijitaalaa",j2Desc:"Meeshaalee beeksisaa, suuraalee miidiyaa hawaasaa fi sirreeffama viidiyoo piroojektoota dhuunfaa fi maamiltootaaf.",
j3Label:"MUUXANNOO HOJII",j3Title:"Hojjetaa Fuula Duraa — Palm Palace Hotel",j3Desc:"Tajaajila maamilaa, qindoomina bakka hojii fi muuxannoo qunnamtii naannoo tajaajila yeroo dhugaa keessatti.",
j4Label:"FUULDURA / OPEN SOURCE",j4Title:"Outreachy fi Injinariingii Software Dhiibbaa Qabu",j4Desc:"Kaayyoo: open source galtee gumaachuu fi sirna software/kuusaa deetaa dhiibbaa hawaasaa qabu ijaaruu.",
goal_label:"MUL'ATA",goal_title:"Injinara Software Dhiibbaa Qabu Ta'uu.",
goal_description:"Kaayyoon koo yeroo dheeraa furmaata software bu'aa qabeessa ta'e ijaaruu, open source galtee gumaachuu fi teeknooloojii rakkoo dhugaa furuuf fayyadamuu dha.",
section_contact:"NU QUNNAMAA",contact_title:"Waan guddaa haa ijaarru.",
contact_subtitle:"Nu Qunnamaa",contact_description:"Piroojektii, yaada ykn carraa qabdaa? Maaloo na qunnamaa.",
form_name:"Maqaa Keessan",form_email:"Imeelii",form_message:"Ergaa",send_message:"Ergaa Ergi",
form_sent:"Aappiin imeelii keessan ammaan ergaa qophaa'ame waliin banamuu qaba.",
footer_text:"Teeknooloojiin waan faayidaa qabu ijaaruu.",rights:"Mirgi hundi eegameera.",
typed:["Ijaaraa Weeb","Bulchaa Kuusaa Deetaa","Ijaaraa IoT","Fedhii AI","Ogeessa Uumaa"]
},
zh:{
nav_home:"首页",nav_about:"关于我",nav_skills:"技能",nav_projects:"项目",nav_tools:"工具",nav_journey:"历程",nav_contact:"联系",
hire_me:"聘用我",
available:"欢迎新的合作机会",hello:"你好，我是",
hero_prefix:"我是",
hero_description:"我构建现代网页体验、管理数据库，并创建将技术与现实需求相连接的数字解决方案。",
view_projects:"查看我的项目",explore_tools:"探索工具",download_cv:"下载简历",
profile_role:"开发者 • 数据库 • 创意",stat_skills:"技能",stat_languages:"语言",stat_tools:"工具",
section_about:"关于我",about_title:"把想法变成数字解决方案。",
about_p1:"我是一名充满热情的网页开发者、数据库管理员和平面/视频制作专家，对软件工程和人工智能有浓厚兴趣。",
about_p2:"我目前正在巴希尔达尔理工学院学习网页开发五级文凭课程。",
about_p3:"我的目标是将现代软件开发、数据库、物联网与人工智能相结合，为现实问题创造有用的解决方案。",
about_p4:"我也对开源开发很感兴趣，希望通过 Outreachy 等项目为全球技术社区做出贡献。",
highlight_web_title:"网页开发",highlight_web_text:"现代、响应式且用户友好的网站。",
highlight_db_title:"数据库",highlight_db_text:"数据库设计、SQL 与管理。",
highlight_ai_title:"AI 与物联网",highlight_ai_text:"探索智能互联解决方案。",
highlight_creative_title:"创意",highlight_creative_text:"平面设计、视频剪辑与内容创作。",
section_skills:"技能",skills_title:"我的技术与创意技能。",
skillCat1Title:"开发与数据库",skillCat3Title:"创意与 AI",
profAdvanced:"精通",profIntermediate:"中级",
section_projects:"项目",projects_title:"我正在构建的项目。",
featuredLabel:"精选项目",featuredTitle:"绿色科技智能农业 2.0",featuredTag:"物联网 + AI + 智能灌溉",
project_description:"利用物联网传感器、微控制器、AI 驱动的作物病害检测和智能灌溉，旨在提高农业生产力的自动化农业监测系统。",
proj2Cat:"网页 • MYSQL",proj2Title:"ICT 资产管理系统",proj2Desc:"用于跟踪资产、员工、问题和报告的部门库存管理流程。",
proj3Cat:"创意 • 视频",proj3Title:"数字内容工作室",proj3Desc:"品牌设计、海报设计、短视频与长视频剪辑工作流程。",
proj4Cat:"HTML • CSS • JS",proj4Title:"个人作品集",proj4Desc:"围绕技术、创意与开源理念设计的响应式个人品牌网站。",
journeySection:"历程",journeyHeadingPlain:"今日学习。明日建造。",
j1Label:"当前 / 教育",j1Title:"网页开发文凭 — 巴希尔达尔理工学院",j1Desc:"专注于实用的网页、数据库和编程基础。",
j2Label:"职业 / 创意",j2Title:"自由设计师与数字内容创作者",j2Desc:"为个人和客户项目提供宣传材料、社交媒体图形设计和视频剪辑。",
j3Label:"工作经验",j3Title:"前台接待 — Palm Palace Hotel",j3Desc:"在实际服务环境中积累的客户服务、工作协调与沟通经验。",
j4Label:"未来 / 开源",j4Title:"Outreachy 与有影响力的软件工程",j4Desc:"目标：为开源做出贡献，构建具有社区意义的软件/数据库系统。",
goal_label:"愿景",goal_title:"成为一名有影响力的软件工程师。",
goal_description:"我的长期目标是构建有意义的软件解决方案，为开源做出贡献，并利用技术解决现实世界的问题。",
section_contact:"联系",contact_title:"让我们一起打造精彩的作品。",
contact_subtitle:"联系我",contact_description:"有项目、想法或机会吗？欢迎随时联系我。",
form_name:"您的姓名",form_email:"电子邮箱",form_message:"留言",send_message:"发送消息",
form_sent:"您的邮件应用现在应该已打开，并已准备好消息内容。",
footer_text:"用技术打造有用的东西。",rights:"版权所有。",
typed:["网页开发者","数据库管理员","物联网开发者","AI 爱好者","创意专家"]
}
};

/* ===================== MOBILE MENU ===================== */
const menuToggle=$("#menuToggle"),mobilePanel=$("#mobileNavPanel");
if(menuToggle){
  menuToggle.addEventListener("click",()=>{
    const open=mobilePanel.classList.toggle("open");
    menuToggle.setAttribute("aria-expanded",open?"true":"false");
  });
  $$(".mobile-nav-panel a").forEach(a=>a.addEventListener("click",()=>{
    mobilePanel.classList.remove("open");
    menuToggle.setAttribute("aria-expanded","false");
  }));
}

/* ===================== LANGUAGE SWITCHER ===================== */
let currentLang=localStorage.getItem("lang")||"en";
const langSelect=$("#languageSelect");

function applyLang(lang){
  const t=translations[lang];
  if(!t)return;
  currentLang=lang;
  document.documentElement.lang=lang;
  $$("[data-i18n]").forEach(el=>{
    const key=el.dataset.i18n;
    if(t[key]!==undefined)el.textContent=t[key];
  });
  $$("[data-i18n-placeholder]").forEach(el=>{
    const key=el.dataset.i18nPlaceholder;
    if(t[key]!==undefined)el.placeholder=t[key];
  });
  words=t.typed;wi=0;ci=0;del=false;
  localStorage.setItem("lang",lang);
}
if(langSelect){
  langSelect.value=currentLang;
  langSelect.addEventListener("change",e=>applyLang(e.target.value));
}

/* ===================== TYPING EFFECT ===================== */
const typingEl=$("#typingText");
let words=translations[currentLang].typed;
let wi=0,ci=0,del=false;
function type(){
  if(!typingEl)return;
  const w=words[wi];
  typingEl.textContent=w.slice(0,ci);
  if(!del&&ci<w.length){ci++;setTimeout(type,85)}
  else if(!del){del=true;setTimeout(type,1300)}
  else if(ci>0){ci--;setTimeout(type,40)}
  else{del=false;wi=(wi+1)%words.length;setTimeout(type,300)}
}
type();

/* apply saved/default language after typing setup exists */
applyLang(currentLang);

/* ===================== REVEAL ON SCROLL ===================== */
const io=new IntersectionObserver(entries=>{
  entries.forEach(e=>{
    if(e.isIntersecting){
      e.target.classList.add("visible");
      e.target.querySelectorAll(".skill-bar span").forEach(s=>s.classList.add("filled"));
      e.target.querySelectorAll(".dashboard-bars span").forEach(s=>s.classList.add("filled"));
    }
  });
},{threshold:.15});
$$(".reveal").forEach(el=>io.observe(el));

/* ===================== PARTICLE BACKGROUND ===================== */
const canvas=$("#particles");
if(canvas){
  const ctx=canvas.getContext("2d");
  let W,H,pts=[];
  function resize(){
    W=canvas.width=innerWidth;H=canvas.height=innerHeight;
    pts=Array.from({length:Math.min(70,Math.floor(W/22))},()=>({
      x:Math.random()*W,y:Math.random()*H,
      vx:(Math.random()-.5)*.3,vy:(Math.random()-.5)*.3,
      r:Math.random()*1.6+.4
    }));
  }
  function draw(){
    ctx.clearRect(0,0,W,H);
    for(const p of pts){
      p.x+=p.vx;p.y+=p.vy;
      if(p.x<0||p.x>W)p.vx*=-1;
      if(p.y<0||p.y>H)p.vy*=-1;
      ctx.beginPath();ctx.arc(p.x,p.y,p.r,0,Math.PI*2);
      ctx.fillStyle="rgba(103,217,255,.45)";ctx.fill();
    }
    requestAnimationFrame(draw);
  }
  addEventListener("resize",resize);resize();draw();
}

/* ===================== SCROLL TOP BUTTON ===================== */
const scrollTopBtn=$("#scrollTop");
if(scrollTopBtn){
  addEventListener("scroll",()=>{
    scrollTopBtn.classList.toggle("show",scrollY>500);
  });
  scrollTopBtn.addEventListener("click",()=>scrollTo({top:0,behavior:"smooth"}));
}

/* ===================== NAV SHADOW ON SCROLL ===================== */
const topbar=$("#topbar");
if(topbar){
  addEventListener("scroll",()=>{
    topbar.style.boxShadow=scrollY>10?"0 8px 24px rgba(0,0,0,.35)":"none";
  });
}

/* ===================== CONTACT FORM ===================== */
const contactForm=$("#contactForm");
if(contactForm){
  contactForm.addEventListener("submit",e=>{
    e.preventDefault();
    const f=new FormData(e.target);
    const sub=encodeURIComponent("Portfolio inquiry from "+f.get("name"));
    const body=encodeURIComponent("Name: "+f.get("name")+"\nEmail: "+f.get("email")+"\n\n"+f.get("message"));
    location.href=`mailto:dagnawbeyene5@gmail.com?subject=${sub}&body=${body}`;
    $("#formMessage").textContent=translations[currentLang].form_sent;
  });
}

/* ===================== PROFILE CARD TILT (desktop only) ===================== */
const profileCard=$("#profileCard");
if(profileCard&&matchMedia("(hover:hover)").matches){
  profileCard.addEventListener("mousemove",e=>{
    const r=profileCard.getBoundingClientRect();
    const x=(e.clientX-r.left)/r.width-.5, y=(e.clientY-r.top)/r.height-.5;
    profileCard.style.transform=`perspective(900px) rotateX(${y*-8}deg) rotateY(${x*8}deg)`;
  });
  profileCard.addEventListener("mouseleave",()=>{profileCard.style.transform="";});
}

/* ===================== FOOTER YEAR ===================== */
const yearEl=$("#currentYear");
if(yearEl)yearEl.textContent=new Date().getFullYear();
