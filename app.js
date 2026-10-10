const T={
fr:{nav0:"Réalisations",nav1:"Services",nav2:"Contact",h1:"Vos idées prennent forme.",intro:"Design, motion, web et production.",cta:"Voir nos réalisations",wTitle:"Nos réalisations",f0:"Tout",f1:"Menus",f2:"Affiches & roll-up",f3:"Bannières & enseignes",f4:"Habillage véhicule",f5:"Logos & identité",f6:"Réseaux sociaux",gT:"Jeu de mémoire",mvT:"Coups",prT:"Paires",bsT:"Meilleur",again:"Rejouer",win:"Bravo !",idea:"Idée trouvée",all:"Toutes les idées trouvées !",allseen:"Vous avez tout découvert !",sTitle:"Nos services",s1:"Design graphique",s2:"Motion & vidéo",s3:"Web & UI/UX",s4:"Réseaux sociaux",s5:"Impression & publicité",s6:"CNC, laser & DTF",cTitle:"Parlons de votre projet",send:"Envoyer sur WhatsApp",ph1:"Nom",ph2:"Votre besoin"},
en:{nav0:"Work",nav1:"Services",nav2:"Contact",h1:"Your ideas, brought to life.",intro:"Design, motion, web and production.",cta:"See our work",wTitle:"Our work",f0:"All",f1:"Menus",f2:"Posters & roll-ups",f3:"Banners & signs",f4:"Vehicle wrap",f5:"Logos & identity",f6:"Social media",gT:"Memory game",mvT:"Moves",prT:"Pairs",bsT:"Best",again:"Replay",win:"Well done!",idea:"Idea found",all:"All ideas found!",allseen:"You discovered everything!",sTitle:"Our services",s1:"Graphic design",s2:"Motion & video",s3:"Web & UI/UX",s4:"Social media",s5:"Print & advertising",s6:"CNC, laser & DTF",cTitle:"Let’s talk about your project",send:"Send on WhatsApp",ph1:"Name",ph2:"Your need"},
ar:{nav0:"أعمالنا",nav1:"الخدمات",nav2:"تواصل",h1:"أفكارك تتحوّل إلى واقع.",intro:"تصميم، موشن، ويب وإنتاج.",cta:"شاهد أعمالنا",wTitle:"أعمالنا",f0:"الكل",f1:"قوائم الطعام",f2:"ملصقات وRoll-up",f3:"لافتات وبانرات",f4:"تغليف المركبات",f5:"الشعارات والهوية",f6:"السوشيال ميديا",gT:"لعبة الذاكرة",mvT:"الحركات",prT:"الأزواج",bsT:"الأفضل",again:"إعادة",win:"أحسنت!",idea:"وجدت فكرة",all:"وجدت كل الأفكار!",allseen:"اكتشفت كل الأعمال!",sTitle:"خدماتنا",s1:"التصميم الجرافيكي",s2:"موشن وفيديو",s3:"تصميم الويب وUI/UX",s4:"السوشيال ميديا",s5:"الطباعة والإعلان",s6:"CNC وليزر وDTF",cTitle:"لنتحدث عن مشروعك",send:"إرسال عبر واتساب",ph1:"الاسم",ph2:"ما الذي تحتاجه؟"}};
const $=s=>document.querySelector(s),$$=s=>[...document.querySelectorAll(s)];
let L="fr";
const FEAT=[["pieces-detach","Pièces Détach Asiatique",3],["etim-pvc","ETIM — Menuiserie Aluminium",4],["cafe-laziv","Cafétéria Laziv Ichariouen",1]];
const W=[
["master-events","Master Event’s",4],["empire-gym","Empire Gym",2],["creche","Crèche Éclo Maternelle & Garderie",3],
["escale-menu","Grand Espace L’Escale",1],["escale-prix","L’Escale — Pizza, Sandwich, Tacos",1],["menu-fastfood","Menu Fast-food",1],["menu-pizza","Menu Pizza",1],
["rollup-coca","Roll-up Café & Coca",2],["poulet-oeufs","Poulet & Œufs",2],["ramses-travel","Ramses Travel",2],
["pet-shop","Pet Shop Thafsuth",3],["alico-bonde","Menuiserie Alum PVC Alico Bonde",3],["amena-alu","Entreprise Amena",3],
["clim-auto","Réparation chaud & froid Clim Auto",3],["saveurs-dorees","Saveurs Dorées",3],["coffee-banner","Bannière Coffee",3],
["nouvura-design","Nouvura Design — Identité",5],["logo-color","Logo Template — Couleur",5],["logo-bw","Logo Template — Noir & blanc",5],["mandala","Motif géométrique",5],["moodboard","Moodboard coloré",5],
["summer-flyer","Summer Events — Flyer",2],["party-post","Party Event — Post réseaux sociaux",6],["shoe-hut","Shoe Hut — Post réseaux sociaux",6]];
const ALL=[...FEAT,...W];
let S={b:[],s:[],best:0};
try{S=Object.assign(S,JSON.parse(localStorage.getItem("nv")||"{}"))}catch(e){}
const keep=()=>{try{localStorage.setItem("nv",JSON.stringify(S))}catch(e){}};
const hud=()=>{$("#ht").textContent=ALL.length;$("#hb").textContent=S.b.length;$("#hs").textContent=S.s.length};
function toast(m){const t=$("#toast");t.textContent=m;t.classList.add("on");clearTimeout(toast.t);toast.t=setTimeout(()=>t.classList.remove("on"),2600)}
function seen(id){if(S.s.includes(id))return;S.s.push(id);keep();hud();if(S.s.length===ALL.length)toast(T[L].allseen)}
const io=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){const t=e.target;setTimeout(()=>t.classList.add("in"),[...t.parentNode.children].indexOf(t)%3*120);io.unobserve(t)}}),{threshold:.15});
function setLang(l){L=l;const d=document.documentElement;d.lang=l;d.dir=l==="ar"?"rtl":"ltr";
$$("[data-i18n]").forEach(e=>e.textContent=T[l][e.dataset.i18n]);
$$("[data-ph]").forEach(e=>e.placeholder=T[l][e.dataset.ph]);
$$(".lang button").forEach(b=>b.classList.toggle("on",b.dataset.lang===l));render();feat()}
$$(".lang button").forEach(b=>b.onclick=()=>setLang(b.dataset.lang));
$("#y").textContent=new Date().getFullYear();
$$("article").forEach(a=>io.observe(a));
// lightbox
const lb=$("#lb");let LL=[],k=0;
function show(list,i){LL=list;k=(i+list.length)%list.length;const w=LL[k];lb.hidden=false;lb.querySelector("img").src=w[0]+".webp";lb.querySelector("figcaption").innerHTML=`${w[1]}<small>${T[L]["f"+w[2]]}</small>`;seen(w[0])}
lb.onclick=e=>{if(e.target===lb||e.target.classList.contains("x"))lb.hidden=true};
lb.querySelector(".pv").onclick=()=>show(LL,k-1);lb.querySelector(".nx").onclick=()=>show(LL,k+1);
addEventListener("keydown",e=>{if(lb.hidden)return;if(e.key==="Escape")lb.hidden=true;if(e.key==="ArrowRight")show(LL,k+1);if(e.key==="ArrowLeft")show(LL,k-1)});
// featured trio
function feat(){const g=$("#fgrid");
g.innerHTML=FEAT.map((w,i)=>`<figure class="tile t${i}"><img src="${w[0]}-t.webp" alt="${w[1]}"><figcaption><b>${w[1]}</b><small>${T[L]["f"+w[2]]}</small></figcaption></figure>`).join("");
$$(".tile").forEach((t,i)=>{t.onclick=()=>show(FEAT,i);io.observe(t)})}
// gallery
let F=0,cur=[];
function render(){const g=$("#gal"),fl=$("#filters");
fl.innerHTML=[0,1,2,3,4,5,6].map(i=>`<button data-f="${i}" class="${i===F?"on":""}">${T[L]["f"+i]}</button>`).join("");
$$("#filters button").forEach(b=>b.onclick=()=>{F=+b.dataset.f;render()});
cur=W.filter(w=>!F||w[2]===F);
g.innerHTML=cur.map((w,i)=>`<figure class="card"><div class="im"><img loading="lazy" src="${w[0]}-t.webp" alt="${w[1]}"></div><div class="t"><b>${w[1]}</b><small>${T[L]["f"+w[2]]}</small></div></figure>`).join("");
$$("#gal .card").forEach((c,i)=>{c.onclick=()=>show(cur,i);io.observe(c)})}
// idées à collecter
const BULB='<svg viewBox="0 0 24 24"><path d="M9 18h6M10 21h4M12 3a6 6 0 0 0-3.5 10.9c.5.4.5 1.1.5 1.6h6c0-.5 0-1.2.5-1.6A6 6 0 0 0 12 3z"/></svg>';
[[".hero","47%","86%"],[".feat","calc(100% - 66px)","-2%"],[".game","calc(100% - 66px)","5%"],[".services","5%","4%"],[".contact","calc(100% - 66px)","6%"]].forEach((p,i)=>{
const b=document.createElement("button");b.className="bulb";b.setAttribute("aria-label","idea");b.style.left=p[1];b.style.top=p[2];b.innerHTML=BULB;
if(S.b.includes(i))b.classList.add("got");
b.onclick=()=>{if(b.classList.contains("got"))return;b.classList.add("got");S.b.push(i);keep();hud();toast(S.b.length===5?T[L].all:T[L].idea+" "+S.b.length+"/5")};
$(p[0]).appendChild(b)});
// jeu de mémoire
const G=["master-events","empire-gym","creche","pet-shop","ramses-travel","escale-menu"];
let a1=null,lock=false,mv=0,fd=0;
function game(){const d=[...G,...G].sort(()=>Math.random()-.5);mv=0;fd=0;a1=null;lock=false;
$("#mv").textContent=0;$("#fd").textContent="0/6";$("#bst").textContent=S.best||"–";$("#win").hidden=true;
$("#board").innerHTML=d.map(id=>`<button class="mc" data-id="${id}" aria-label="card"><span class="in2"><span class="bk"><img src="logo.png" alt=""></span><span class="ft"><img src="${id}-t.webp" alt=""></span></span></button>`).join("");
$$("#board .mc").forEach(c=>c.onclick=()=>flip(c))}
function flip(c){if(lock||c.classList.contains("on"))return;c.classList.add("on");
if(!a1){a1=c;return}
mv++;$("#mv").textContent=mv;
if(a1.dataset.id===c.dataset.id){[a1,c].forEach(x=>x.classList.add("ok"));seen(c.dataset.id);fd++;$("#fd").textContent=fd+"/6";a1=null;
if(fd===6){if(!S.best||mv<S.best){S.best=mv;keep()}$("#bst").textContent=S.best;$("#win").hidden=false}}
else{lock=true;const a=a1;a1=null;setTimeout(()=>{a.classList.remove("on");c.classList.remove("on");lock=false},850)}}
$("#again").onclick=game;
// parallax 3D
const st=$("#stage"),P=[...st.querySelectorAll(".plate")].reverse();
let tx=0,ty=0,x=0,y=0;
addEventListener("pointermove",e=>{tx=e.clientX/innerWidth-.5;ty=e.clientY/innerHeight-.5});
(function loop(){x+=(tx-x)*.07;y+=(ty-y)*.07;
P.forEach((p,i)=>p.style.transform=`translate3d(${x*-24*(i+1)+(i*-70)}px,${y*-16*(i+1)+(i*-10)}px,${-i*60}px) rotateY(${x*22-12}deg) rotateX(${y*-16+6}deg) rotateZ(${-3-i*2}deg)`);
requestAnimationFrame(loop)})();
$("#f").onsubmit=e=>{e.preventDefault();const f=e.target;
open("https://wa.me/213564628260?text="+encodeURIComponent("NOUVURA — "+f.n.value+"\n"+f.m.value),"_blank")};
render();feat();game();hud();
