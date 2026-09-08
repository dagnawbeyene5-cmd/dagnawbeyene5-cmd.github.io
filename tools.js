const $=s=>document.querySelector(s), $$=s=>document.querySelectorAll(s);

/* ===== MOBILE MENU ===== */
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

/* ===== REVEAL ON SCROLL ===== */
const io=new IntersectionObserver(entries=>{
  entries.forEach(e=>{if(e.isIntersecting)e.target.classList.add("visible")});
},{threshold:.1});
$$(".reveal").forEach(el=>io.observe(el));

/* ===== PARTICLE BACKGROUND ===== */
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

/* ===== SCROLL TOP ===== */
const scrollTopBtn=$("#scrollTop");
if(scrollTopBtn){
  addEventListener("scroll",()=>scrollTopBtn.classList.toggle("show",scrollY>500));
  scrollTopBtn.addEventListener("click",()=>scrollTo({top:0,behavior:"smooth"}));
}

/* ===== FOOTER YEAR ===== */
const yearEl=$("#currentYear");
if(yearEl)yearEl.textContent=new Date().getFullYear();

/* ===================== SEARCH + CATEGORY FILTER ===================== */
const searchInput=$("#toolSearch");
const categoryButtons=$$(".category-button");
const toolCards=$$(".tool-card");
const emptyMsg=$("#toolsEmpty");
let activeCategory="all";

function filterTools(){
  const query=(searchInput?.value||"").trim().toLowerCase();
  let visibleCount=0;
  toolCards.forEach(card=>{
    const matchesCategory=activeCategory==="all"||card.dataset.category===activeCategory;
    const matchesSearch=!query||card.dataset.name.includes(query);
    const show=matchesCategory&&matchesSearch;
    card.classList.toggle("hidden-card",!show);
    if(show)visibleCount++;
  });
  if(emptyMsg)emptyMsg.hidden=visibleCount>0;
}

if(searchInput)searchInput.addEventListener("input",filterTools);
categoryButtons.forEach(btn=>{
  btn.addEventListener("click",()=>{
    categoryButtons.forEach(b=>b.classList.remove("active"));
    btn.classList.add("active");
    activeCategory=btn.dataset.category;
    filterTools();
  });
});

/* ===================== OPEN / CLOSE TOOL PANELS ===================== */
$$(".tool-open[data-tool-open]").forEach(btn=>{
  btn.addEventListener("click",()=>{
    const toolId=btn.dataset.toolOpen;
    const panel=$("#panel-"+toolId);
    if(!panel)return;
    panel.hidden=false;
    panel.scrollIntoView({behavior:"smooth",block:"start"});
  });
});
const closePasswordTool=$("#closePasswordTool");
if(closePasswordTool){
  closePasswordTool.addEventListener("click",()=>{
    $("#panel-password").hidden=true;
    $("#toolsGrid").scrollIntoView({behavior:"smooth",block:"start"});
  });
}

/* ===================== PASSWORD GENERATOR ===================== */
const pwLength=$("#pwLength"),pwLengthValue=$("#pwLengthValue");
const optUpper=$("#optUpper"),optLower=$("#optLower"),optNumbers=$("#optNumbers"),optSymbols=$("#optSymbols");
const passwordOutput=$("#passwordOutput"),generateBtn=$("#generatePassword"),copyBtn=$("#copyPassword"),copyNote=$("#copyNote");
const strengthFill=$("#strengthFill"),strengthLabel=$("#strengthLabel");

if(pwLength){
  pwLength.addEventListener("input",()=>pwLengthValue.textContent=pwLength.value);
}

function generatePassword(){
  const upper="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const lower="abcdefghijklmnopqrstuvwxyz";
  const numbers="0123456789";
  const symbols="!@#$%^&*()_-+=?";
  let pool="";
  if(optUpper.checked)pool+=upper;
  if(optLower.checked)pool+=lower;
  if(optNumbers.checked)pool+=numbers;
  if(optSymbols.checked)pool+=symbols;

  if(!pool){
    passwordOutput.value="Select at least one option";
    updateStrength("");
    return;
  }

  const length=parseInt(pwLength.value,10);
  const array=new Uint32Array(length);
  crypto.getRandomValues(array);
  let result="";
  for(let i=0;i<length;i++){
    result+=pool[array[i]%pool.length];
  }
  passwordOutput.value=result;
  updateStrength(result);
}

function updateStrength(pw){
  if(!pw){strengthFill.style.width="0%";strengthLabel.textContent="—";return;}
  let score=0;
  if(pw.length>=8)score++;
  if(pw.length>=14)score++;
  if(/[A-Z]/.test(pw))score++;
  if(/[0-9]/.test(pw))score++;
  if(/[^A-Za-z0-9]/.test(pw))score++;

  const levels=[
    {pct:20,label:"Weak",color:"#f87171"},
    {pct:40,label:"Weak",color:"#f87171"},
    {pct:60,label:"Medium",color:"#fbbf24"},
    {pct:80,label:"Strong",color:"#4ade80"},
    {pct:100,label:"Very Strong",color:"#4ade80"}
  ];
  const lvl=levels[Math.min(score,4)];
  strengthFill.style.width=lvl.pct+"%";
  strengthFill.style.background=lvl.color;
  strengthLabel.textContent=lvl.label;
  strengthLabel.style.color=lvl.color;
}

if(generateBtn)generateBtn.addEventListener("click",generatePassword);

if(copyBtn){
  copyBtn.addEventListener("click",async()=>{
    if(!passwordOutput.value||passwordOutput.value.startsWith("Click")||passwordOutput.value.startsWith("Select"))return;
    try{
      await navigator.clipboard.writeText(passwordOutput.value);
      copyNote.textContent="Copied to clipboard!";
      setTimeout(()=>copyNote.textContent="",1800);
    }catch(err){
      copyNote.textContent="Could not copy — select and copy manually.";
    }
  });
}
