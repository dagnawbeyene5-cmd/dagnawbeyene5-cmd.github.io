const $=s=>document.querySelector(s), $$=s=>document.querySelectorAll(s);
window.addEventListener("load",()=>setTimeout(()=>$("#loader").classList.add("done"),450));

const typed=$("#typed"), words=["Web Developer","Database Administrator","IoT Builder","AI Enthusiast","Creative Specialist"];
let wi=0,ci=0,del=false;
function type(){let w=words[wi];typed.textContent=w.slice(0,ci);if(!del&&ci<w.length){ci++;setTimeout(type,85)}else if(!del){del=true;setTimeout(type,1200)}else if(ci>0){ci--;setTimeout(type,42)}else{del=false;wi=(wi+1)%words.length;setTimeout(type,250)}} type();

const io=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting)e.target.classList.add("visible")}),{threshold:.12});
$$(".reveal").forEach(x=>io.observe(x));

$("#theme").onclick=()=>{document.body.classList.toggle("light");$("#theme").textContent=document.body.classList.contains("light")?"☀":"☾";localStorage.setItem("theme",document.body.classList.contains("light")?"light":"dark")};
if(localStorage.getItem("theme")==="light"){document.body.classList.add("light");$("#theme").textContent="☀"}

$("#menu").onclick=()=>$("#mobileNav").classList.toggle("show");
$$(".mobile-nav a").forEach(a=>a.onclick=()=>$("#mobileNav").classList.remove("show"));

const translations={
am:{available:"ለአዲስ ዕድሎች ዝግጁ ነኝ",hero:"ዘመናዊ የዌብ ልምዶችን፣ የዳታቤዝ ሲስተሞችን እና ዌብ፣ IoT፣ AI እና ዲጂታል ሚዲያን የሚያጣምሩ ቴክኖሎጂዎችን እገነባለሁ።",explore:"ስራዬን ይመልከቱ ↗",connect:"እንገናኝ",aboutTitle:"የገንቢ አስተሳሰብ ያለው ገንቢ።",aboutText:"እኔ በባህር ዳር የምገኝ የዌብ ዲቨሎፐር፣ የዳታቤዝ አስተዳዳሪ እና የግራፊክስ/ቪዲዮ ባለሙያ ነኝ። በባህር ዳር ፖሊቴክኒክ ኮሌጅ ደረጃ 2 ዌብ ዲቨሎፕመንት እና ዳታቤዝ አስተዳደር እማራለሁ።",aboutText2:"IoTን ከዘመናዊ ሶፍትዌር ጋር በማጣመር ተጨባጭ ችግሮችን መፍታት እወዳለሁ። የረጅም ጊዜ ግቤ ተፅዕኖ የሚፈጥር ሶፍትዌር ኢንጂነር መሆን ነው።"}};
$("#lang").onchange=e=>{let t=translations[e.target.value];if(!t)return;$$("[data-i18n]").forEach(el=>{let k=el.dataset.i18n;if(t[k])el.textContent=t[k]})};

const projects={
green:{tag:"IoT × AI × AUTOMATION",title:"Green Tech Smart Agriculture 2.0",text:"Automated agricultural monitoring and smart irrigation concept using IoT sensors, offline MicroSD logging, cloud/edge gateways and YOLOv8 computer vision for crop-disease detection.",tech:["ESP32-S3","Python","IoT Sensors","MicroSD","LoRaWAN / GSM","YOLOv8"]},
inventory:{tag:"WEB • MYSQL",title:"ICT Inventory Management",text:"A department-focused inventory workflow for tracking equipment, employees, issued assets and reports with a database-backed web interface.",tech:["HTML","CSS","JavaScript","PHP","MySQL"]},
media:{tag:"CREATIVE • VIDEO",title:"Digital Content Studio",text:"A creative workflow for promotional graphics, social-media designs, short-form videos and longer edits for personal and client projects.",tech:["Graphic Design","Video Editing","Content Creation","Digital Marketing"]},
portfolio:{tag:"HTML • CSS • JS",title:"Dagnaw Personal Portfolio",text:"A responsive personal brand website combining developer identity, project storytelling, multilingual content, animations and contact tools.",tech:["HTML5","CSS3","JavaScript","Responsive UI","Animation"]}};
function openProject(id){let p=projects[id];$("#modalTag").textContent=p.tag;$("#modalTitle").textContent=p.title;$("#modalText").textContent=p.text;$("#modalTech").innerHTML=p.tech.map(x=>`<span>${x}</span>`).join("");$("#modal").classList.add("show")}
$$(".project-open").forEach(b=>b.onclick=()=>openProject(b.dataset.project));
$("#closeModal").onclick=()=>$("#modal").classList.remove("show");
$("#modal").onclick=e=>{if(e.target.id==="modal")$("#modal").classList.remove("show")};

$$(".tilt").forEach(card=>{card.addEventListener("mousemove",e=>{let r=card.getBoundingClientRect(),x=(e.clientX-r.left)/r.width-.5,y=(e.clientY-r.top)/r.height-.5;card.style.transform=`perspective(900px) rotateX(${y*-5}deg) rotateY(${x*5}deg) translateY(-3px)`});card.addEventListener("mouseleave",()=>card.style.transform="")});

const canvas=$("#particles"),ctx=canvas.getContext("2d");let W,H,pts=[];
function resize(){W=canvas.width=innerWidth;H=canvas.height=innerHeight;pts=Array.from({length:Math.min(80,Math.floor(W/18))},()=>({x:Math.random()*W,y:Math.random()*H,vx:(Math.random()-.5)*.25,vy:(Math.random()-.5)*.25,r:Math.random()*1.4+.3}))}
function particles(){ctx.clearRect(0,0,W,H);for(const p of pts){p.x+=p.vx;p.y+=p.vy;if(p.x<0||p.x>W)p.vx*=-1;if(p.y<0||p.y>H)p.vy*=-1;ctx.beginPath();ctx.arc(p.x,p.y,p.r,0,Math.PI*2);ctx.fillStyle=document.body.classList.contains("light")?"#6a8eae55":"#67d9ff77";ctx.fill()}requestAnimationFrame(particles)}
addEventListener("resize",resize);resize();particles();

const glow=$(".cursor-glow");addEventListener("pointermove",e=>{glow.style.left=e.clientX+"px";glow.style.top=e.clientY+"px"});
$("#contactForm").onsubmit=e=>{e.preventDefault();let f=new FormData(e.target),sub=encodeURIComponent("Portfolio inquiry from "+f.get("name")),body=encodeURIComponent("Name: "+f.get("name")+"\nEmail: "+f.get("email")+"\n\n"+f.get("message"));location.href=`mailto:dagnawbeyene5@gmail.com?subject=${sub}&body=${body}`;$("#formNote").textContent="Your email app should now open with the message prepared.";};
