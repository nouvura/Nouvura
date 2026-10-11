/* ===== NOUVURA — langue principale : français (FR / EN / AR) ===== */
const WA="213564628260";
const T={
fr:{slogan:"Tout a commencé par une idée",nav0:"Réalisations",nav1:"Services",nav2:"Contact",h1:"Vos idées prennent forme.",intro:"Design, motion, web et production.",cta:"Voir nos réalisations",wTitle:"Nos réalisations",f0:"Tout",f1:"Menus",f2:"Affiches & roll-up",f3:"Bannières & enseignes",f4:"Habillage véhicule",f5:"Logos & identité",f6:"Réseaux sociaux",gT:"Jeu de mémoire",mvT:"Coups",prT:"Paires",bsT:"Meilleur",again:"Rejouer",win:"Bravo !",sTitle:"Nos services",s1:"Design graphique",s2:"Motion & vidéo",s3:"Web & UI/UX",s4:"Réseaux sociaux",s5:"Impression & publicité",s6:"CNC, laser & DTF",cTitle:"Parlons de votre projet",send:"Envoyer sur WhatsApp",ph1:"Nom",ph2:"Votre besoin"},
en:{slogan:"It all started with an idea",nav0:"Work",nav1:"Services",nav2:"Contact",h1:"Your ideas, brought to life.",intro:"Design, motion, web and production.",cta:"See our work",wTitle:"Our work",f0:"All",f1:"Menus",f2:"Posters & roll-ups",f3:"Banners & signs",f4:"Vehicle wrap",f5:"Logos & identity",f6:"Social media",gT:"Memory game",mvT:"Moves",prT:"Pairs",bsT:"Best",again:"Replay",win:"Well done!",sTitle:"Our services",s1:"Graphic design",s2:"Motion & video",s3:"Web & UI/UX",s4:"Social media",s5:"Print & advertising",s6:"CNC, laser & DTF",cTitle:"Let’s talk about your project",send:"Send on WhatsApp",ph1:"Name",ph2:"Your need"},
ar:{slogan:"كل شيء بدأ بفكرة",nav0:"أعمالنا",nav1:"الخدمات",nav2:"تواصل",h1:"أفكارك تتحوّل إلى واقع.",intro:"تصميم، موشن، ويب وإنتاج.",cta:"شاهد أعمالنا",wTitle:"أعمالنا",f0:"الكل",f1:"قوائم الطعام",f2:"ملصقات وRoll-up",f3:"لافتات وبانرات",f4:"تغليف المركبات",f5:"الشعارات والهوية",f6:"السوشيال ميديا",gT:"لعبة الذاكرة",mvT:"الحركات",prT:"الأزواج",bsT:"الأفضل",again:"إعادة",win:"أحسنت!",sTitle:"خدماتنا",s1:"التصميم الجرافيكي",s2:"موشن وفيديو",s3:"تصميم الويب وUI/UX",s4:"السوشيال ميديا",s5:"الطباعة والإعلان",s6:"CNC وليزر وDTF",cTitle:"لنتحدث عن مشروعك",send:"إرسال عبر واتساب",ph1:"الاسم",ph2:"ما الذي تحتاجه؟"}};
// r(id, catégorie, nom FR, nom EN, nom AR, description FR, EN, AR)
const r=(id,c,nf,ne,na,df,de,da)=>({id,c,n:{fr:nf,en:ne||nf,ar:na||nf},d:{fr:df,en:de,ar:da}});
const FEAT=[
r("pieces-detach",3,"Pièces Détach Asiatique","","","Bannière publicitaire pour un commerce de pièces automobiles : produits, services et réseaux sociaux d’un coup d’œil. Pour garages, vendeurs de pièces et concessionnaires.","Advertising banner for an auto parts business: products, services and social links at a glance. For garages, parts sellers and dealers.","بانر إعلاني لمحل قطع غيار السيارات: المنتجات والخدمات وحسابات التواصل في نظرة واحدة. مناسب للورشات وبائعي قطع الغيار والوكلاء."),
r("etim-pvc",4,"ETIM — Menuiserie Aluminium","ETIM — Aluminium joinery","ETIM — نجارة الألمنيوم","Habillage complet d’un véhicule utilitaire en adhésif : votre marque visible partout où il circule. Pour artisans, menuisiers, entreprises du bâtiment et livraison.","Full adhesive wrap for a work vehicle: your brand visible wherever it drives. For craftsmen, joiners, construction and delivery companies.","تغليف كامل لمركبة عمل بالملصقات: علامتك ظاهرة أينما سارت. مناسب للحرفيين والنجّارين وشركات البناء والتوصيل."),
r("cafe-laziv",1,"Cafétéria Laziv Ichariouen","","","Menu des boissons et gâteaux d’une cafétéria, lisible d’un regard. Impression sur panneau, bâche ou PVC. Pour cafés, salons de thé et pâtisseries.","Drinks and pastry menu board for a cafeteria, readable at a glance. Printed on panel, banner or PVC. For cafés, tea rooms and pastry shops.","قائمة المشروبات والحلويات لكافيتيريا، واضحة من النظرة الأولى. تُطبع على لوحة أو بانر أو PVC. مناسبة للمقاهي وصالونات الشاي والمخابز.")];
const W=[
r("master-events",4,"Master Event’s","","","Habillage de véhicule pour traiteur et organisation d’événements : une publicité mobile. Pour sociétés d’événementiel, DJ, décoration et location de matériel.","Vehicle wrap for a caterer and event organiser: advertising on the move. For event companies, DJs, decoration and equipment rental.","تغليف مركبة لمتعهد حفلات ومنظّم مناسبات: إعلان متنقل. مناسب لشركات تنظيم الحفلات والـDJ والديكور وكراء المعدات."),
r("empire-gym",2,"Empire Gym","","","Visuel de marque pour salle de sport, utilisable en affiche, enseigne ou publication réseaux sociaux. Pour salles de fitness, coachs et centres de musculation.","Brand visual for a gym, usable as a poster, sign or social media post. For fitness clubs, coaches and bodybuilding centers.","تصميم هوية لقاعة رياضية، يصلح ملصقاً أو لافتة أو منشوراً للتواصل الاجتماعي. مناسب لقاعات اللياقة والمدرّبين ومراكز كمال الأجسام."),
r("creche",3,"Crèche Éclo Maternelle & Garderie","Éclo Maternelle nursery & daycare","حضانة إيكلو ماترنيل ورياض الأطفال","Affiche colorée pour crèche et garderie, pensée pour rassurer les parents. Pour crèches, écoles maternelles et centres d’éveil.","Colorful poster for a nursery and daycare, designed to reassure parents. For nurseries, preschools and early-learning centers.","ملصق ملوّن لحضانة ورياض أطفال، مصمم ليطمئن الأولياء. مناسب للحضانات ورياض الأطفال ومراكز التنمية المبكرة."),
r("escale-menu",1,"Grand Espace L’Escale","","","Couverture de menu pour restaurant et café, avec une identité visuelle cohérente. Menus imprimés, plastifiés ou avec QR code. Pour restaurants, cafés et espaces commerciaux.","Menu cover for a restaurant and café with a consistent visual identity. Printed, laminated or QR-code menus. For restaurants, cafés and shopping spaces.","غلاف قائمة لمطعم ومقهى بهوية بصرية متناسقة. قوائم مطبوعة أو مغلّفة أو برمز QR. مناسبة للمطاعم والمقاهي والفضاءات التجارية."),
r("escale-prix",1,"L’Escale — Pizza, Sandwich, Tacos","","لسكال — بيتزا، ساندويتش، تاكوس","Carte des prix claire (pizzas, sandwichs, tacos, hamburgers) en plusieurs formats. Impression recto-verso ou plastifiée. Pour restaurants et fast-foods.","Clear price list (pizzas, sandwiches, tacos, burgers) in several formats. Double-sided or laminated printing. For restaurants and fast-food outlets.","قائمة أسعار واضحة (بيتزا، ساندويتش، تاكوس، همبرغر) بعدة قياسات. طباعة وجهين أو مغلّفة. مناسبة للمطاعم ومحلات الوجبات السريعة."),
r("menu-fastfood",1,"Menu Fast-food","Fast-food menu","قائمة الوجبات السريعة","Menu de snack à fond sombre, prix bien organisés par catégorie. Impression A4/A3, affiche ou panneau. Pour snacks et fast-foods.","Dark-background snack menu with prices organised by category. A4/A3 print, poster or board. For snack bars and fast-food outlets.","قائمة سناك بخلفية داكنة وأسعار منظمة حسب الفئة. طباعة A4/A3 أو ملصق أو لوحة. مناسبة للسناكات ومحلات الوجبات السريعة."),
r("menu-pizza",1,"Menu Pizza","Pizza menu","قائمة البيتزا","Carte de pizzeria élégante : pizzas, tacos et plats avec prix. Impression plastifiée ou version numérique. Pour pizzerias et restaurants.","Elegant pizzeria menu: pizzas, tacos and dishes with prices. Laminated print or digital version. For pizzerias and restaurants.","قائمة بيتزيريا أنيقة: بيتزا وتاكوس وأطباق مع الأسعار. طباعة مغلّفة أو نسخة رقمية. مناسبة لمحلات البيتزا والمطاعم."),
r("rollup-coca",2,"Roll-up Café & Coca","Café & Coca roll-up","رول-أب القهوة وكوكا","Roll-up publicitaire vertical (80 × 198 cm), portable et percutant. Pour cafés, marques de boissons, salons et événements.","Vertical advertising roll-up (80 × 198 cm), portable and eye-catching. For cafés, beverage brands, trade shows and events.","رول-أب إعلاني عمودي (80 × 198 سم)، سهل النقل وجذّاب. مناسب للمقاهي وعلامات المشروبات والمعارض والفعاليات."),
r("poulet-oeufs",2,"Poulet & Œufs","Chicken & Eggs","دجاج وبيض","Affiche verticale pour volailler : poulet, œufs et découpes mis en valeur. Pour boucheries, volaillers, supermarchés et traiteurs.","Vertical poster for a poultry shop: chicken, eggs and cuts showcased. For butchers, poultry sellers, supermarkets and caterers.","ملصق عمودي لبائع دواجن: الدجاج والبيض والقطع مُبرَزة بجاذبية. مناسب للجزارين وبائعي الدواجن والمتاجر الكبرى والمتعهدين."),
r("ramses-travel",2,"Ramses Travel","","","Flyer d’agence de voyage : destinations, services et contacts. Impression flyer, affiche ou version réseaux sociaux. Pour agences de voyage et voyages organisés.","Travel agency flyer: destinations, services and contacts. Flyer, poster or social media version. For travel agencies and organised trips.","فلاير وكالة أسفار: الوجهات والخدمات وبيانات التواصل. يُطبع فلايراً أو ملصقاً أو بنسخة للتواصل الاجتماعي. مناسب لوكالات السفر والرحلات المنظمة."),
r("pet-shop",3,"Pet Shop Thafsuth","","","Panneau publicitaire pour animalerie : aliments et accessoires pour animaux domestiques. Pour animaleries, vétérinaires et vendeurs d’accessoires.","Advertising panel for a pet shop: food and accessories for pets. For pet shops, vets and accessory sellers.","لوحة إعلانية لمحل حيوانات أليفة: أغذية وإكسسوارات للحيوانات الأليفة. مناسبة لمحلات الحيوانات والبياطرة وبائعي الإكسسوارات."),
r("alico-bonde",3,"Menuiserie Alum PVC Alico Bonde","Alico Bonde Alu/PVC joinery","نجارة ألمنيوم وPVC — Alico Bonde","Visuel pour menuiserie aluminium et PVC, adapté à la bâche, l’enseigne ou le flyer. Pour fabricants et installateurs de fenêtres et portes.","Visual for an aluminium and PVC joinery shop, suited to banners, signs or flyers. For window and door makers and installers.","تصميم لورشة نجارة ألمنيوم وPVC، يصلح لبانر أو لافتة أو فلاير. مناسب لمصنّعي ومركّبي النوافذ والأبواب."),
r("amena-alu",3,"Entreprise Amena","Amena company","مؤسسة Amena","Composition d’identité pour entreprise du bâtiment et de l’aluminium/PVC : logos et réalisations. Cartes de visite, en-têtes et enseignes. Pour entreprises de construction.","Brand layout for a construction and aluminium/PVC company: logos and projects. Business cards, letterheads and signs. For construction firms.","تصميم هوية لمؤسسة بناء وألمنيوم/PVC: الشعارات والأعمال المنجزة. بطاقات زيارة وأوراق رسمية ولافتات. مناسب لشركات البناء."),
r("clim-auto",3,"Réparation chaud & froid Clim Auto","Heating & cooling repair — Clim Auto","إصلاح التدفئة والتبريد — Clim Auto","Bannière pour un service de réparation chaud et froid et climatisation auto. Pour garages, techniciens en climatisation et ateliers.","Banner for an auto heating, cooling and air-conditioning repair service. For garages, A/C technicians and workshops.","بانر لخدمة إصلاح التدفئة والتبريد وتكييف السيارات. مناسب للورشات وفنيي التكييف."),
r("saveurs-dorees",3,"Saveurs Dorées","","","Bannière d’enseigne pour boulangerie, viennoiserie et pizza. Pour boulangeries, pâtisseries et salons de thé.","Shop-sign banner for a bakery, pastries and pizza. For bakeries, pastry shops and tea rooms.","بانر لافتة لمخبزة ومعجنات وبيتزا. مناسب للمخابز ومحلات الحلويات وصالونات الشاي."),
r("coffee-banner",3,"Bannière Coffee","Coffee banner","بانر القهوة","Bannière d’ambiance café aux tons chauds, pour vitrine ou mur. Pour coffee shops, cafés et restaurants.","Warm-toned café ambiance banner for a window or wall. For coffee shops, cafés and restaurants.","بانر أجواء مقهى بألوان دافئة للواجهة أو الجدار. مناسب لمحلات القهوة والمقاهي والمطاعم."),
r("nouvura-design",5,"Nouvura Design — Identité","Nouvura Design — Identity","Nouvura Design — هوية","Identité élégante pour studio créatif, déclinable en carte de visite double face, en PVC plastique ou NFC. Pour créateurs, indépendants et entreprises.","Elegant identity for a creative studio, available as a double-sided, plastic PVC or NFC business card. For creators, freelancers and companies.","هوية أنيقة لاستوديو إبداعي، تتوفر كبطاقة زيارة بوجهين أو من PVC البلاستيكي أو بتقنية NFC. مناسبة للمبدعين والمستقلين والشركات."),
r("logo-color",5,"Logo Template — Couleur","Logo Template — Color","قالب شعارات — ملوّن","Planche de modèles de logos colorés à personnaliser : point de départ d’une identité visuelle. Pour nouveaux commerces et entreprises.","Sheet of colorful logo templates to customise: a starting point for a visual identity. For new shops and companies.","لوحة نماذج شعارات ملوّنة قابلة للتخصيص: نقطة انطلاق لهوية بصرية. مناسبة للمحلات والشركات الناشئة."),
r("logo-bw",5,"Logo Template — Noir & blanc","Logo Template — Black & white","قالب شعارات — أبيض وأسود","Planche de logos monochromes, adaptés au tampon, à la gravure laser et à la broderie. Pour entreprises, associations et artisans.","Sheet of monochrome logos, suited to stamps, laser engraving and embroidery. For companies, associations and craftsmen.","لوحة شعارات أحادية اللون، تناسب الأختام والنقش بالليزر والتطريز. مناسبة للشركات والجمعيات والحرفيين."),
r("mandala",5,"Motif géométrique","Geometric pattern","نقش هندسي","Motif géométrique pour décoration, découpe laser/CNC ou vinyle. Pour ateliers de décoration, boutiques et intérieurs.","Geometric pattern for decoration, laser/CNC cutting or vinyl. For decoration workshops, shops and interiors.","نقش هندسي للديكور أو القص بالليزر/CNC أو الفينيل. مناسب لورشات الديكور والمحلات والتصميم الداخلي."),
r("moodboard",5,"Moodboard coloré","Colorful moodboard","لوحة إلهام ملوّنة","Planche d’inspiration : palette de couleurs et mise en page avant de créer. Pour lancer un projet de branding ou de campagne.","Inspiration board: colour palette and layout before creating. For kicking off a branding or campaign project.","لوحة إلهام: لوحة ألوان وتخطيط قبل البدء بالتصميم. تفيد في إطلاق مشروع هوية أو حملة."),
r("summer-flyer",2,"Summer Events — Flyer","","","Flyer événementiel A4 coloré. Impression de flyers, affiches et invitations. Pour festivals, associations et organisateurs d’événements.","Colorful A4 event flyer. Printing of flyers, posters and invitations. For festivals, associations and event organisers.","فلاير فعاليات A4 ملوّن. طباعة الفلايرات والملصقات والدعوات. مناسب للمهرجانات والجمعيات ومنظّمي الفعاليات."),
r("party-post",6,"Party Event — Post réseaux sociaux","Party Event — Social media post","Party Event — منشور تواصل اجتماعي","Publication carrée pour réseaux sociaux annonçant une soirée. Pour organisateurs d’événements, clubs et salles de fêtes.","Square social media post announcing a party. For event organisers, clubs and venues.","منشور مربع للتواصل الاجتماعي يعلن عن حفلة. مناسب لمنظّمي الفعاليات والنوادي وقاعات الحفلات."),
r("shoe-hut",6,"Shoe Hut — Post réseaux sociaux","Shoe Hut — Social media post","Shoe Hut — منشور تواصل اجتماعي","Publication promotionnelle avec offre pour réseaux sociaux. Pour boutiques de chaussures, de mode et commerces en ligne.","Promotional social media post with an offer. For shoe shops, fashion boutiques and online stores.","منشور ترويجي بعرض للتواصل الاجتماعي. مناسب لمحلات الأحذية والموضة والتجارة الإلكترونية.")];
const ALL=[...FEAT,...W];
const $=s=>document.querySelector(s),$$=s=>[...document.querySelectorAll(s)];
let L="fr";
const nm=w=>w.n[L],cat=w=>T[L]["f"+w.c];
let S={best:0};
try{S=Object.assign(S,JSON.parse(localStorage.getItem("nv")||"{}"))}catch(e){}
const keep=()=>{try{localStorage.setItem("nv",JSON.stringify(S))}catch(e){}};
const io=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){const t=e.target;setTimeout(()=>t.classList.add("in"),[...t.parentNode.children].indexOf(t)%3*120);io.unobserve(t)}}),{threshold:.15});
$$("article").forEach(a=>io.observe(a));
function setLang(l){L=l;const d=document.documentElement;d.lang=l;d.dir=l==="ar"?"rtl":"ltr";
$$("[data-i18n]").forEach(e=>e.textContent=T[l][e.dataset.i18n]);
$$("[data-ph]").forEach(e=>e.placeholder=T[l][e.dataset.ph]);
$$(".lang button").forEach(b=>b.classList.toggle("on",b.dataset.lang===l));
render(true);reel();$$(".cp").forEach(c=>c.textContent=nm(ALL.find(w=>w.id===c.parentNode.parentNode.parentNode.dataset.id)));
if(!lb.hidden)show(LL,k);winText()}
$$(".lang button").forEach(b=>b.onclick=()=>setLang(b.dataset.lang));
$("#y").textContent=new Date().getFullYear();
/* lightbox */
const lb=$("#lb");let LL=[],k=0;
function show(list,i){LL=list;k=(i+list.length)%list.length;const w=LL[k];lb.hidden=false;lb.querySelector("img").src=w.id+".webp";lb.querySelector("img").alt=nm(w);
lb.querySelector("figcaption").innerHTML=`${nm(w)}<small>${cat(w)}</small><p>${w.d[L]}</p>`}
lb.onclick=e=>{if(e.target===lb||e.target.classList.contains("x"))lb.hidden=true};
lb.querySelector(".pv").onclick=()=>show(LL,k-1);lb.querySelector(".nx").onclick=()=>show(LL,k+1);
addEventListener("keydown",e=>{if(e.key==="Escape")lb.hidden=true;if(lb.hidden)return;if(e.key==="ArrowRight")show(LL,k+1);if(e.key==="ArrowLeft")show(LL,k-1)});
/* bande horizontale en rotation continue */
function reel(){const set=[...FEAT,...FEAT];const h=[...set,...set].map(w=>`<figure class="rc" data-id="${w.id}"><div class="ri"><img src="${w.id}-t.webp" alt="${nm(w)}"></div><figcaption><b>${nm(w)}</b><small>${cat(w)}</small></figcaption></figure>`).join("");
$("#track").innerHTML=h;$$(".rc").forEach(c=>c.onclick=()=>show(FEAT,FEAT.findIndex(w=>w.id===c.dataset.id)))}
/* « Nos réalisations » : s'ouvre au clic */
const works=$("#works");let F=0,cur=[];
$("#wc").textContent=ALL.length;
$("#wstack").innerHTML=["master-events","empire-gym","creche","pet-shop"].map(i=>`<img src="${i}-t.webp" alt="">`).join("");
function openWorks(on){works.classList.toggle("open",on);$("#wt").setAttribute("aria-expanded",on);if(on)burst()}
function burst(){$$("#gal .card").forEach((c,i)=>{c.classList.remove("in","done");c.style.transitionDelay=i*70+"ms";void c.offsetWidth;requestAnimationFrame(()=>c.classList.add("in"));setTimeout(()=>{c.style.transitionDelay="0ms";c.classList.add("done")},1200+i*70)})}
$("#wt").onclick=()=>openWorks(!works.classList.contains("open"));
$$('a[href="#works"]').forEach(a=>a.addEventListener("click",()=>openWorks(true)));
function render(keepState){const g=$("#gal"),fl=$("#filters");
fl.innerHTML=[0,1,2,3,4,5,6].map(i=>`<button data-f="${i}" class="${i===F?"on":""}">${T[L]["f"+i]}</button>`).join("");
$$("#filters button").forEach(b=>b.onclick=()=>{F=+b.dataset.f;render()});
cur=W.filter(w=>!F||w.c===F);
g.innerHTML=cur.map(w=>`<figure class="card"><div class="im"><img loading="lazy" src="${w.id}-t.webp" alt="${nm(w)}"></div><div class="t"><b>${nm(w)}</b><small>${cat(w)}</small></div></figure>`).join("");
$$("#gal .card").forEach((c,i)=>c.onclick=()=>show(cur,i));
if(works.classList.contains("open"))burst()}
/* jeu de mémoire plein écran */
const G=["master-events","empire-gym","creche","pet-shop","ramses-travel","escale-menu"];
let a1=null,lock=false,mv=0,fd=0,won=false;
function winText(){if(won)$("#win").textContent=T[L].win+" — "+mv+" "+T[L].mvT.toLowerCase()}
function game(){const d=[...G,...G].sort(()=>Math.random()-.5);mv=0;fd=0;a1=null;lock=false;won=false;
$("#mv").textContent=0;$("#fd").textContent="0/6";$("#bst").textContent=S.best||"–";$("#win").hidden=true;
$("#board").innerHTML=d.map(id=>`<button class="mc" data-id="${id}" aria-label="card"><span class="in2"><span class="bk"><img src="logo.png" alt=""></span><span class="ft"><img src="${id}-t.webp" alt=""><span class="cp">${nm(W.find(w=>w.id===id))}</span></span></span></button>`).join("");
$$("#board .mc").forEach(c=>c.onclick=()=>flip(c))}
function flip(c){if(lock||c.classList.contains("on"))return;c.classList.add("on");
if(!a1){a1=c;return}
mv++;$("#mv").textContent=mv;
if(a1.dataset.id===c.dataset.id){[a1,c].forEach(x=>x.classList.add("ok"));fd++;$("#fd").textContent=fd+"/6";a1=null;
if(fd===6){if(!S.best||mv<S.best){S.best=mv;keep()}$("#bst").textContent=S.best;won=true;winText();$("#win").hidden=false}}
else{lock=true;const a=a1;a1=null;setTimeout(()=>{a.classList.remove("on");c.classList.remove("on");lock=false},850)}}
$("#again").onclick=game;
function fit(){const g=$(".gwrap"),cs=getComputedStyle(g),w=g.clientWidth-parseFloat(cs.paddingLeft)*2,h=Math.max(innerHeight-(innerWidth<700?340:425),240);
const c4=Math.min(w/4,h/3),c3=Math.min(w/3,h/4),n=c4>=c3?4:3,b=$("#board");b.style.gridTemplateColumns=`repeat(${n},1fr)`;b.style.width=Math.max(Math.min(n*Math.max(c4,c3),w),n===4?300:240)+"px"}
addEventListener("resize",fit);addEventListener("orientationchange",fit);
/* parallax 3D de l'en-tête */
const st=$("#stage"),P=[...st.querySelectorAll(".plate")].reverse();
let tx=0,ty=0,x=0,y=0;
addEventListener("pointermove",e=>{tx=e.clientX/innerWidth-.5;ty=e.clientY/innerHeight-.5});
(function loop(){x+=(tx-x)*.07;y+=(ty-y)*.07;
P.forEach((p,i)=>p.style.transform=`translate3d(${x*-24*(i+1)+(i*-70)}px,${y*-16*(i+1)+(i*-10)}px,${-i*60}px) rotateY(${x*22-12}deg) rotateX(${y*-16+6}deg) rotateZ(${-3-i*2}deg)`);
requestAnimationFrame(loop)})();
$("#f").onsubmit=e=>{e.preventDefault();const f=e.target;
open("https://wa.me/"+WA+"?text="+encodeURIComponent("NOUVURA — "+f.n.value+"\n"+f.m.value),"_blank")};
render();reel();game();fit();
