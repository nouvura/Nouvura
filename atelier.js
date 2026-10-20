/* ===== Atelier NOUVURA : brief guidé → prompt IA → commande par e-mail / WhatsApp ===== */
(function(){
const C=window.NVC,WA="213564628260",MAIL="whaletailcompany@gmail.com";
const $=s=>document.querySelector(s),$$=s=>[...document.querySelectorAll(s)];
const LG=()=>{const l=document.documentElement.lang;return l==="ar"||l==="en"?l:"fr"};
const T3=(fr,en,ar)=>({fr,en,ar});
const t=o=>o?o[LG()]||o.fr:"";
const esc=s=>String(s==null?"":s).replace(/[&<>"]/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"}[c]));
const nf=n=>String(Math.round(n)).replace(/\B(?=(\d{3})+(?!\d))/g," ");
const nmI=o=>o[LG()];
const ITEMS=C.items.map((a,i)=>({i,c:a[0],ar:a[1],fr:a[2],en:a[3],u:C.units[a[4]],d:a[5],p:a[6],f:a[7],q:a[8]}));
/* ---------- textes de l'interface ---------- */
const U={
t:T3("Atelier NOUVURA","NOUVURA Atelier","ورشة NOUVURA"),x:T3("Fermer","Close","إغلاق"),back:T3("Retour","Back","رجوع"),next:T3("Continuer","Continue","متابعة"),
st:[T3("Service","Service","الخدمة"),T3("Projet","Project","المشروع"),T3("Style","Style","الأسلوب"),T3("Prompt IA","AI prompt","موجّه الذكاء"),T3("Commande","Order","الطلب")],
h1:T3("Quel service souhaitez-vous ?","Which service do you need?","ما الخدمة التي تريدها؟"),
srch:T3("Rechercher un service…","Search a service…","ابحث عن خدمة…"),all:T3("Tout","All","الكل"),
quote:T3("Sur devis","On quote","حسب عرض السعر"),da:T3("DA","DZD","دج"),from:T3("≈","≈","≈"),
estT:T3("Estimation indicative","Indicative estimate","تقدير استرشادي"),
estN:T3("Estimation indicative : le devis final est confirmé par NOUVURA avant le début du travail.","Indicative estimate: the final quote is confirmed by NOUVURA before work starts.","تقدير استرشادي: يؤكَّد السعر النهائي من NOUVURA قبل بدء العمل."),
none:T3("Aucun service trouvé","No service found","لا توجد نتائج"),
resume:T3("Reprendre mon brouillon :","Resume my draft:","متابعة مسودتي:"),
h2:T3("Parlez-nous de votre projet","Tell us about your project","حدّثنا عن مشروعك"),h3:T3("Style, couleurs et taille","Style, colors and size","الأسلوب والألوان والمقاس"),
fake:T3("Pour votre sécurité, n’écrivez pas vos vrais téléphone, e-mail ou adresse ici : nous mettrons des coordonnées fictives dans le design, et vous donnerez les vraies à l’étape Commande.","For your safety, don’t type your real phone, email or address here: the design will use fake placeholders, and you’ll give the real ones at the Order step.","لحمايتك لا تكتب هاتفك أو بريدك أو عنوانك الحقيقي هنا: سنضع بيانات وهمية في التصميم، وتعطينا الحقيقية في مرحلة الطلب."),
h4:T3("Votre prompt est prêt","Your prompt is ready","موجّهك جاهز"),
p1:T3("Copiez le prompt","Copy the prompt","انسخ الموجّه"),p2:T3("Collez-le dans votre outil d’IA","Paste it in your AI tool","الصقه في أداة الذكاء الاصطناعي"),p3:T3("Téléchargez l’image qui vous plaît et revenez ici","Download the image you like and come back here","نزّل الصورة التي تعجبك وعد إلى هنا"),
copy:T3("Copier le prompt","Copy prompt","نسخ الموجّه"),copied:T3("Copié !","Copied!","تم النسخ!"),
tools:T3("Outils d’IA","AI tools","أدوات الذكاء الاصطناعي"),
toolsNote:T3("Gemini et ChatGPT ont une version gratuite limitée. Claude n’est proposé que pour les services sans image (site, vidéo).","Gemini and ChatGPT have a limited free tier. Claude is only offered for non-image services (website, video).","لدى Gemini وChatGPT نسخة مجانية محدودة. يُقترح Claude فقط للخدمات غير المصوّرة (موقع، فيديو)."),
iter:T3("Pas satisfait ? Collez une de ces phrases dans l’IA :","Not happy? Paste one of these lines in the AI:","لم يعجبك؟ الصق إحدى هذه الجمل في الذكاء الاصطناعي:"),
warn:T3("Ce que vous obtenez est un concept : NOUVURA le transforme en fichier prêt à imprimer (vectoriel, bons formats), remplace les coordonnées fictives par les vraies et vérifie qu’il ne ressemble pas à une marque existante.","What you get is a concept: NOUVURA turns it into a print-ready file (vector, correct sizes), replaces the fake details with real ones and checks it doesn’t resemble an existing brand.","ما تحصل عليه تصوّر أولي: تحوّله NOUVURA إلى ملف جاهز للطباعة (متجهات ومقاسات صحيحة)، وتستبدل البيانات الوهمية بالحقيقية، وتتأكد أنه لا يشبه علامة موجودة."),
arTip:T3("Si le texte arabe est mal écrit par l’IA, demandez-lui de laisser des zones de texte vides : nous composerons l’arabe nous-mêmes.","If the AI misspells Arabic text, ask it to leave empty text zones: we will typeset the Arabic ourselves.","إذا أخطأ الذكاء في الكتابة العربية فاطلب منه ترك مساحات نص فارغة: سنكتب العربية نحن."),
h5:T3("Envoyez votre commande","Send your order","أرسل طلبك"),
img:T3("Image du design choisi","Chosen design image","صورة التصميم المختار"),pick:T3("Choisir une image","Choose an image","اختر صورة"),
imgN:T3("L’image reste sur votre téléphone : elle n’est envoyée que lorsque vous la joignez à votre message.","The image stays on your phone: it is only sent when you attach it to your message.","تبقى الصورة على هاتفك ولا تُرسل إلا عندما ترفقها برسالتك."),
rn:T3("Votre nom *","Your name *","اسمك *"),rp:T3("Téléphone *","Phone *","الهاتف *"),re:T3("Votre e-mail","Your email","بريدك الإلكتروني"),ra:T3("Adresse réelle","Real address","العنوان الحقيقي"),rw:T3("Site web réel","Real website","الموقع الحقيقي"),rs:T3("Compte réseaux réel","Real social handle","حساب التواصل الحقيقي"),
mode:T3("Ce que vous voulez","What you need","ما تحتاجه"),mD:T3("Design seulement","Design only","التصميم فقط"),mP:T3("Production seulement (j’ai un fichier prêt)","Production only (I have a ready file)","الإنتاج فقط (لدي ملف جاهز)"),mB:T3("Design + production","Design + production","تصميم + إنتاج"),
qB:T3("Quantité (pièces)","Quantity (pieces)","الكمية (قطع)"),qA:T3("Surface (m²)","Area (m²)","المساحة (م²)"),qQ:T3("Quantité","Quantity","الكمية"),
rt:T3("Total estimé","Estimated total","المجموع التقديري"),
sm:T3("Envoyer par e-mail","Send by email","إرسال بالإيميل"),sw:T3("Envoyer sur WhatsApp","Send on WhatsApp","إرسال عبر واتساب"),ss:T3("Partager avec l’image","Share with the image","مشاركة مع الصورة"),sc:T3("Copier le message","Copy message","نسخ الرسالة"),
sH:T3("Votre message est prêt (destinataire déjà rempli). Appuyez simplement sur Envoyer. Si l’image n’est pas jointe, elle a été enregistrée sur votre téléphone : joignez-la au message.","Your message is ready (recipient already filled in). Just press Send. If the image isn’t attached, it was saved on your phone: attach it to the message.","رسالتك جاهزة (والمستلم مكتوب). اضغط إرسال فقط. إذا لم تُرفق الصورة فقد حُفظت على هاتفك: أرفقها بالرسالة."),
need:T3("Veuillez indiquer votre nom et votre téléphone.","Please enter your name and phone.","يرجى كتابة اسمك وهاتفك."),
inapp:T3("Vous êtes dans le navigateur d’une application (Facebook, Instagram…). Pour envoyer facilement, ouvrez le site dans Chrome ou Safari.","You are in an app’s built-in browser (Facebook, Instagram…). To send easily, open the site in Chrome or Safari.","أنت داخل متصفح تطبيق (فيسبوك، إنستغرام…). للإرسال بسهولة افتح الموقع في كروم أو سفاري."),
free:T3("Une autre idée ? Parlons-en sur WhatsApp","Another idea? Let’s talk on WhatsApp","فكرة أخرى؟ لنتحدث عبر واتساب")
};
/* ---------- listes de choix : [valeur, libellé, texte pour le prompt] ---------- */
const O={
sector:[["food",T3("Restauration / café","Food & café","مطاعم / مقاهي"),"restaurant, cafe and food"],["retail",T3("Commerce / boutique","Retail / shop","تجارة / متجر"),"retail shop"],["build",T3("Bâtiment / construction","Building / construction","بناء / مقاولات"),"construction, aluminium and PVC joinery"],["auto",T3("Automobile / garage","Automotive / garage","سيارات / ورشة"),"automotive and garage"],["health",T3("Santé / beauté","Health / beauty","صحة / تجميل"),"health, wellness and beauty"],["edu",T3("Éducation / enfance","Education / kids","تعليم / طفولة"),"education and childcare"],["events",T3("Événementiel","Events","فعاليات"),"events, catering and entertainment"],["tech",T3("Tech / digital","Tech / digital","تقنية / رقمي"),"technology and digital services"],["craft",T3("Artisanat / industrie","Craft / industry","حرف / صناعة"),"craft and industry"],["fashion",T3("Mode / textile","Fashion / textile","موضة / نسيج"),"fashion and textile"],["other",T3("Autre","Other","أخرى"),"general business"]],
style:[["minimal",T3("Moderne minimal","Modern minimal","عصري بسيط"),"modern minimalist, lots of white space"],["luxury",T3("Luxe élégant","Elegant luxury","فخم أنيق"),"elegant premium luxury with refined details"],["playful",T3("Fun et coloré","Fun & colorful","مرح وملوّن"),"fun, colorful and friendly"],["corp",T3("Corporate pro","Professional corporate","رسمي احترافي"),"clean professional corporate"],["craft",T3("Chaleureux / artisanal","Warm / artisanal","دافئ / حِرفي"),"warm, artisanal and traditional"],["tech",T3("Tech futuriste","Futuristic tech","تقني مستقبلي"),"futuristic tech with geometric shapes"],["bold",T3("Impact fort","Bold impact","قوي وجريء"),"bold, high-impact with large typography"]],
lang:[["fr",T3("Français","French","فرنسية"),"French"],["ar",T3("Arabe","Arabic","عربية"),"Arabic (right-to-left)"],["en",T3("Anglais","English","إنجليزية"),"English"],["bi",T3("Arabe + français","Arabic + French","عربية + فرنسية"),"bilingual Arabic and French"]],
sides:[["1",T3("1 face","1 side","وجه واحد"),"front side only"],["2",T3("2 faces","2 sides","وجهان"),"front and back sides"]],
vehicle:[["car",T3("Voiture","Car","سيارة"),"passenger car"],["pickup",T3("Pick-up","Pickup","بيك آب"),"pickup truck"],["van",T3("Fourgon","Van","شاحنة صغيرة"),"cargo van"],["truck",T3("Camion","Truck","شاحنة"),"truck"],["bus",T3("Bus","Bus","حافلة"),"bus"]],
material:[["mdf",T3("MDF","MDF","MDF"),"MDF"],["acrylic",T3("Acrylique / Plexiglas","Acrylic / Plexiglas","أكريليك / بليكسي"),"acrylic"],["forex",T3("Forex","Forex","فوركس"),"Forex PVC board"],["aluco",T3("Alucobond","Alucobond","ألوكوبوند"),"Alucobond aluminium composite"]],
goal:[["present",T3("Présenter mon activité","Present my business","تعريف بنشاطي"),"present the business"],["leads",T3("Recevoir des demandes","Get inquiries","استقبال طلبات"),"generate contact requests"],["sell",T3("Vendre en ligne","Sell online","البيع أونلاين"),"sell products online"],["book",T3("Prendre des rendez-vous","Book appointments","حجز مواعيد"),"book appointments"]],
fmt:[["9:16","9:16","vertical 9:16"],["16:9","16:9","horizontal 16:9"],["1:1","1:1","square 1:1"],["4:5","4:5","portrait 4:5"]],
dur:[["15",T3("15 s","15 s","15 ث"),"15 seconds"],["30",T3("30 s","30 s","30 ث"),"30 seconds"],["60",T3("60 s","60 s","60 ث"),"60 seconds"],["120",T3("2 min","2 min","دقيقتان"),"2 minutes"]],
mood:[["energy",T3("Énergique","Energetic","حماسي"),"energetic and dynamic"],["elegant",T3("Élégant","Elegant","أنيق"),"elegant and calm"],["fun",T3("Fun","Fun","مرح"),"fun and light"],["serious",T3("Sérieux","Serious","جاد"),"serious and trustworthy"]],
pos:[["chest",T3("Poitrine (petit)","Chest (small)","الصدر (صغير)"),"small left-chest print"],["front",T3("Devant (grand)","Front (large)","أمامي (كبير)"),"large front print"],["back",T3("Dos","Back","الخلف"),"back print"],["sleeve",T3("Manche","Sleeve","الكم"),"sleeve print"]],
inc:{phone:T3("Téléphone","Phone","هاتف"),email:T3("E-mail","Email","بريد"),address:T3("Adresse","Address","عنوان"),website:T3("Site web","Website","موقع"),social:T3("Réseaux","Social","تواصل"),qr:T3("Code QR","QR code","رمز QR")}
};
const PAL={food:[["#C62828","#FFB300","#1B1B1B"],["#2E7D32","#F9A825","#FFF8E1"]],retail:[["#111111","#FFD400","#FFFFFF"],["#1565C0","#FF6F00","#ECEFF1"]],build:[["#263238","#FF8F00","#ECEFF1"],["#0D47A1","#90A4AE","#FFFFFF"]],auto:[["#111111","#FF6D00","#9E9E9E"],["#B71C1C","#212121","#FAFAFA"]],health:[["#00897B","#E0F2F1","#37474F"],["#AD1457","#F8BBD0","#FFFFFF"]],edu:[["#1E88E5","#FDD835","#E53935"],["#7B1FA2","#26C6DA","#FFEE58"]],events:[["#111111","#C9A227","#FFFFFF"],["#6A1B9A","#FF4081","#FFF176"]],tech:[["#0B1220","#00E5FF","#7C4DFF"],["#111827","#22C55E","#F9FAFB"]],craft:[["#4E342E","#D7A86E","#FFF3E0"],["#263238","#FF7043","#ECEFF1"]],fashion:[["#111111","#E8D5B5","#FFFFFF"],["#880E4F","#F48FB1","#FFFFFF"]],other:[["#111111","#FFD400","#FFFFFF"],["#0F172A","#38BDF8","#F8FAFC"]]};
const SEED={food:["Saveur","Délice","Gourmet","Fournil","Oasis"],retail:["Select","Horizon","Atlas","Prime","Marché"],build:["Bâti","Structura","Habitat","Solida","Terra"],auto:["Motus","Drive","Piston","Turbo","Route"],health:["Éclat","Sérénité","Aura","Lumina","Bella"],edu:["Éclosion","Petits Pas","Arc-en-ciel","Savoir","Mosaïque"],events:["Festiva","Moment","Célébra","Prestige","Gala"],tech:["Nexa","Pixel","Orbit","Codex","Nova"],craft:["Atelier","Forge","Matière","Origine","Savoir-faire"],fashion:["Fibre","Élégance","Style","Tissage","Mode"],other:["Nova","Alpha","Origine","Vision","Élan"]};
const SZ={card:[[90,50,"mm","90×50"],[85,55,"mm","85×55"],[88.9,50.8,"mm","88.9×50.8"]],doc:[[105,148,"mm","A6"],[148,210,"mm","A5"],[210,297,"mm","A4"],[297,420,"mm","A3"],[420,594,"mm","A2"],[594,841,"mm","A1"],[99,210,"mm","DL"]],social:[[1080,1080,"px","1:1"],[1080,1350,"px","4:5"],[1080,1920,"px","9:16 Story"],[1200,628,"px","Ad"],[820,312,"px","FB cover"],[1280,720,"px","16:9"]],sign:[[80,200,"cm","Roll-up 80×200"],[300,100,"cm","300×100"],[200,100,"cm","200×100"],[100,100,"cm","100×100"]],apparel:[[8,8,"cm","8×8"],[20,25,"cm","20×25"],[30,40,"cm","30×40"]]};
const FD={
biz:{t:"text",l:T3("Nom de l’entreprise ou votre nom","Business name or your name","اسم نشاطك أو اسمك")},
noname:{t:"noname",l:T3("Je n’ai pas de nom : proposez-moi des idées","I have no name: suggest ideas","ليس لدي اسم: اقترحوا عليّ أفكاراً")},
sector:{t:"sel",o:"sector",l:T3("Votre domaine","Your field","مجالك")},
slogan:{t:"text",l:T3("Slogan (facultatif)","Tagline (optional)","شعار نصي (اختياري)")},
role:{t:"text",l:T3("Fonction (ex. gérant, médecin…)","Job title (e.g. manager, doctor…)","الوظيفة (مثال: مدير، طبيب…)")},
title:{t:"text",l:T3("Titre, texte ou idée principale","Headline, text or main idea","العنوان أو النص أو الفكرة الرئيسية")},
msg:{t:"area",l:T3("Message / détails (offre, date, lieu…)","Message / details (offer, date, place…)","الرسالة / التفاصيل (عرض، تاريخ، مكان…)")},
inc:{t:"chips",l:T3("À inclure sur le design","Include on the design","يُدرج في التصميم")},
size:{t:"size",l:T3("Dimensions","Size","المقاس")},
sides:{t:"sel",o:"sides",l:T3("Nombre de faces","Sides","عدد الأوجه")},
style:{t:"sel",o:"style",l:T3("Style","Style","الأسلوب")},
colors:{t:"colors",l:T3("Couleurs (3 maximum)","Colors (3 max)","الألوان (3 كحد أقصى)")},
lang:{t:"sel",o:"lang",l:T3("Langue du texte sur le design","Language of the text on the design","لغة النص في التصميم")},
notes:{t:"area",l:T3("Autres précisions","Other details","تفاصيل أخرى")},
vehicle:{t:"sel",o:"vehicle",l:T3("Type de véhicule","Vehicle type","نوع المركبة")},
item:{t:"text",l:T3("Produit ou objet concerné","Product or item concerned","المنتج أو القطعة المعنية")},
shape:{t:"area",l:T3("Forme ou motif à réaliser","Shape or pattern to make","الشكل أو النقش المطلوب")},
material:{t:"sel",o:"material",l:T3("Matière","Material","الخامة")},
thick:{t:"text",l:T3("Épaisseur (mm)","Thickness (mm)","السماكة (مم)")},
dims:{t:"dims",l:T3("Dimensions L × l × H (cm)","Dimensions L × W × H (cm)","الأبعاد الطول × العرض × الارتفاع (سم)")},
pos:{t:"sel",o:"pos",l:T3("Emplacement du motif","Print position","موضع الطباعة")},
script:{t:"area",l:T3("Idée / scénario de la vidéo","Video idea / script","فكرة / سيناريو الفيديو")},
duration:{t:"sel",o:"dur",l:T3("Durée","Duration","المدة")},
fmt:{t:"sel",o:"fmt",l:T3("Format","Format","الصيغة")},
mood:{t:"sel",o:"mood",l:T3("Ambiance","Mood","الأجواء")},
goal:{t:"sel",o:"goal",l:T3("Objectif du site","Website goal","هدف الموقع")},
sections:{t:"area",l:T3("Sections souhaitées (accueil, services…)","Sections wanted (home, services…)","الأقسام المطلوبة (رئيسية، خدمات…)")},
pages:{t:"text",l:T3("Nombre de pages","Number of pages","عدد الصفحات")},
refs:{t:"text",l:T3("Sites ou designs que vous aimez","Sites or designs you like","مواقع أو تصاميم تعجبك")}
};
const FAM={brand:{a:["biz","noname","sector","slogan"],b:["style","colors","lang","notes"]},card:{a:["biz","noname","role","sector","slogan","inc"],b:["size","sides","style","colors","lang","notes"],inc:["phone","email","address","website","social","qr"]},doc:{a:["biz","sector","title","msg","inc"],b:["size","sides","style","colors","lang","notes"],inc:["phone","address","website","social","qr"]},social:{a:["biz","sector","title","msg","inc"],b:["size","style","colors","lang","notes"],inc:["phone","address","website","social"]},sign:{a:["biz","sector","title","msg","inc"],b:["size","style","colors","lang","notes"],inc:["phone","address","website","social","qr"]},vehicle:{a:["biz","sector","slogan","inc"],b:["vehicle","style","colors","lang","notes"],inc:["phone","address","website","social","qr"]},apparel:{a:["biz","item","title"],b:["pos","size","style","colors","notes"]},package:{a:["biz","item","title"],b:["dims","style","colors","lang","notes"]},cnc:{a:["item","shape"],b:["material","thick","dims","notes"]},video:{a:["biz","sector","script"],b:["duration","fmt","mood","lang","colors","notes"]},web:{a:["biz","sector","goal","sections"],b:["pages","style","colors","lang","refs","notes"]},misc:{a:["notes"],b:[]}};
const szKind={card:"card",doc:"doc",social:"social",sign:"sign",apparel:"apparel"};
/* ---------- état ---------- */
let st={svc:null,v:{},step:0,mode:"both",qty:"",area:"",real:{},cat:-1,q:""};
let saved=null;try{saved=JSON.parse(localStorage.getItem("nvA")||"null")}catch(e){}
const keep=()=>{try{localStorage.setItem("nvA",JSON.stringify({svc:st.svc,v:st.v,mode:st.mode,qty:st.qty,real:st.real}))}catch(e){}};
let img=null,root=null;
const it=()=>ITEMS[st.svc];
const fam=()=>FAM[it().f];
const steps=()=>it()&&it().f==="misc"?[0,1,4]:[0,1,2,3,4];
function defSize(){const i=it(),k=szKind[i.f];if(!k)return null;const n=i.en,P=SZ[k];let ix=0;
const m=n.match(/\bA([1-6])\b/);if(k==="doc"&&m){ix=P.findIndex(p=>p[3]==="A"+m[1])}
if(k==="sign"&&/Roll-up/i.test(n))ix=0;else if(k==="sign")ix=1;
if(k==="social"){if(/Story|Status/i.test(n))ix=2;else if(/Facebook cover/i.test(n))ix=4;else if(/thumbnail/i.test(n))ix=5;else if(/Avatar/i.test(n))ix=0;else if(/sponsored|ad/i.test(n))ix=3;else ix=1}
if(k==="card"&&/PVC/i.test(n))ix=1;
if(ix<0)ix=0;const p=P[ix];return{i:ix,w:p[0],h:p[1],u:p[2]}}
function pick(i){st.svc=i;const v=st.v;if(!v.sector)v.sector="other";const d=defSize();if(d)v.size=d;
if(!v.lang)v.lang="fr";if(!v.style)v.style="minimal";v.sides=/double-sided/i.test(it().en)?"2":"1";
if(!v.inc)v.inc=[];if(!v.colors)v.colors=[];
const u=it().u;st.mode=it().d>0&&it().p>0?"both":it().p>0?"prod":"design";
st.qty=u.t==="batch"?String(u.n):"1";st.area="";st.step=1;keep();draw()}
/* ---------- estimation ---------- */
function areaM2(){const a=parseFloat(String(st.area).replace(",","."));if(a>0)return a;const s=st.v.size;if(s&&s.u==="cm"&&s.w&&s.h)return Math.max(s.w*s.h/10000,0.1);return 1}
function est(){const i=it(),u=i.u,q=Math.max(parseFloat(st.qty)||1,1);let dm=1,pm=1;
if(u.t==="batch")pm=Math.ceil(q/u.n);else if(u.t==="area")pm=areaM2();else if(u.t==="qty"){if(i.p>0)pm=q;else dm=q}
const design=i.d*dm,prod=i.p*pm;const total=st.mode==="design"?design:st.mode==="prod"?prod:design+prod;return{design,prod,total}}
function rowPrice(i){const tot=i.d+i.p;const un=({fr:i.u.fr,en:i.u.en,ar:i.u.ar})[LG()];const pr=nf(tot)+" "+t(U.da)+" / "+un;return i.q?t(U.quote)+" ("+t(U.from)+" "+pr+")":pr}
/* ---------- champs ---------- */
function incList(){return (fam().inc)||[]}
function fld(k){const d=FD[k],v=st.v[k],l=t(d.l);
if(d.t==="text")return `<label class="nf"><span>${l}</span><input data-k="${k}" value="${esc(v||"")}" autocomplete="off"></label>`;
if(d.t==="area")return `<label class="nf"><span>${l}</span><textarea data-k="${k}" rows="3">${esc(v||"")}</textarea></label>`;
if(d.t==="sel")return `<label class="nf"><span>${l}</span><select data-k="${k}">${O[d.o].map(o=>`<option value="${o[0]}" ${String(v)===o[0]?"selected":""}>${esc(t(o[1])||o[1])}</option>`).join("")}</select></label>`;
if(d.t==="chips")return `<div class="nf"><span>${l}</span><div class="nchips">${incList().map(x=>`<button type="button" class="chip" data-inc="${x}" aria-pressed="${(v||[]).includes(x)}">${t(O.inc[x])}</button>`).join("")}</div></div>`;
if(d.t==="noname"){const sg=v?(SEED[st.v.sector||"other"]||SEED.other).slice(0,5):[];return `<div class="nf"><label class="ck"><input type="checkbox" data-k="noname" ${v?"checked":""}><span>${l}</span></label>${sg.length?`<div class="nchips">${sg.map(n=>`<button type="button" class="chip" data-nm="${esc(n)}">${esc(n)}</button>`).join("")}</div>`:""}</div>`}
if(d.t==="size"){const k2=szKind[it().f],P=SZ[k2],s=v||{i:0,w:P[0][0],h:P[0][1],u:P[0][2]};return `<div class="nf"><span>${l}</span><select data-sz="p">${P.map((p,ix)=>`<option value="${ix}" ${s.i===ix?"selected":""}>${esc(p[3])} (${p[0]}×${p[1]} ${p[2]})</option>`).join("")}<option value="-1" ${s.i===-1?"selected":""}>${t(T3("Autre dimension","Custom size","مقاس آخر"))}</option></select>${s.i===-1?`<div class="n2"><input type="number" inputmode="decimal" data-sz="w" value="${s.w||""}" placeholder="W"><i>×</i><input type="number" inputmode="decimal" data-sz="h" value="${s.h||""}" placeholder="H"><b>${s.u||P[0][2]}</b></div>`:""}</div>`}
if(d.t==="dims"){const s=v||{};return `<div class="nf"><span>${l}</span><div class="n2"><input type="number" inputmode="decimal" data-dm="l" value="${s.l||""}" placeholder="L"><i>×</i><input type="number" inputmode="decimal" data-dm="w" value="${s.w||""}" placeholder="l"><i>×</i><input type="number" inputmode="decimal" data-dm="h" value="${s.h||""}" placeholder="H"></div></div>`}
if(d.t==="colors"){const cs=v||[],pal=PAL[st.v.sector||"other"]||PAL.other;return `<div class="nf"><span>${l}</span><div class="pals">${pal.map((p,ix)=>`<button type="button" class="pal" data-pal="${ix}" aria-label="palette ${ix+1}">${p.map(c=>`<i style="background:${c}"></i>`).join("")}</button>`).join("")}</div><div class="cols">${cs.map((c,ix)=>`<label class="cc"><input type="color" data-col="${ix}" value="${c}"><button type="button" data-rm="${ix}" aria-label="remove">×</button></label>`).join("")}${cs.length<3?`<button type="button" class="chip" data-addc="1">+ ${t(T3("Couleur","Color","لون"))}</button>`:""}${cs.length?`<button type="button" class="chip" data-clr="1">${t(T3("L’IA choisit","Let AI choose","يختار الذكاء"))}</button>`:""}</div></div>`}
return ""}
/* ---------- prompt IA (anglais) ---------- */
const en=(list,val)=>{const o=O[list].find(x=>x[0]===val);return o?o[2]:""};
function sizeTxt(){const s=st.v.size;if(!s||!s.w||!s.h)return "";const r=(s.w/s.h);const ori=r>1.05?"landscape":r<0.95?"portrait":"square";return `${s.w}×${s.h} ${s.u}, aspect ratio ${+(r).toFixed(3)}:1, ${ori}`}
function buildPrompt(){const i=it(),v=st.v,f=i.f,L=[];const sector=en("sector",v.sector||"other");
L.push(`Act as a senior graphic designer and art director. Create: ${i.en}.`);
if(v.noname)L.push(`Business name: not decided yet. First invent 3 short, memorable brand names suited to the ${sector} sector (in ${en("lang",v.lang||"fr")}), then use the best one in the design.`);
else if(v.biz)L.push(`Business / person name: "${v.biz}".`);
if(FAM[f].a.includes("sector")&&f!=="cnc")L.push(`Sector: ${sector}.`);
if(v.role)L.push(`Job title on the card: "${v.role}".`);
if(v.slogan)L.push(`Tagline: "${v.slogan}".`);
if(v.title)L.push(f==="package"||f==="apparel"?`Main text / idea: ${v.title}.`:`Headline / main text: "${v.title}".`);
if(v.msg)L.push(`Message and details: ${v.msg}.`);
if(v.item)L.push(`Product / item: ${v.item}.`);
if(v.shape)L.push(`Shape or pattern: ${v.shape}.`);
const inc=v.inc||[],PH={phone:"Phone: +213 555 00 00 00",email:"Email: contact@example.dz",address:"Address: 12 Example Street, Algiers",website:"Website: www.example.dz",social:"Social: @yourbrand"};
const ph=inc.filter(x=>PH[x]).map(x=>PH[x]);
if(ph.length)L.push(`Contact details to show (FAKE PLACEHOLDERS, they will be replaced later): ${ph.join(" | ")}.`);
if(inc.includes("qr"))L.push("Leave a clean empty square area for a QR code. Do NOT draw a QR code.");
if(f==="card"||f==="doc")L.push(`Sides: ${en("sides",v.sides||"1")}.${v.sides==="2"?" Create the FRONT and the BACK as two separate images with the same style.":""}`);
if(f==="vehicle")L.push(`Vehicle: ${en("vehicle",v.vehicle||"van")}. Show a flat side view (and rear view if possible) of the vehicle with a full wrap design, on a plain white background. No street scene.`);
if(f==="apparel")L.push(`Artwork for ${en("pos",v.pos||"front")}, printed area ${sizeTxt()}. Deliver the artwork alone on a plain or transparent-looking background. No garment mockup.`);
if(f==="package"||f==="cnc"){const d=v.dims||{};if(d.l||d.w||d.h)L.push(`Dimensions (cm): length ${d.l||"?"}, width ${d.w||"?"}, height ${d.h||"?"}.`)}
if(f==="cnc"){L.push(`Material: ${en("material",v.material||"mdf")}${v.thick?`, thickness ${v.thick} mm`:""}. Output a clean black-and-white outline drawing for cutting, single closed paths, no shading, no gradients, no mockup.`)}
if(f==="video"){L.push(`Video: ${en("dur",v.duration||"30")}, ${en("fmt",v.fmt||"9:16")}, mood ${en("mood",v.mood||"energy")}. Idea: ${v.script||"to be proposed by you"}. Write a scene-by-scene storyboard (6-8 scenes) with on-screen text, voice-over lines, music mood and shot list in a table, then describe key frames.`)}
if(f==="web"){L.push(`Website goal: ${en("goal",v.goal||"present")}. Pages: ${v.pages||"to be proposed"}. Sections: ${v.sections||"to be proposed"}. References: ${v.refs||"none"}. Design a high-fidelity homepage concept for desktop and mobile (UI design, not code), with clear hierarchy and one primary call to action.`)}
const sz=["card","doc","social","sign"].includes(f)?sizeTxt():"";
if(sz){L.push(`Format: ${sz}. ${f==="social"?"Digital artwork.":"Print artwork: flat front view, background extends to the edges (3 mm bleed) and all important elements stay at least 3 mm inside the trim."}`)}
if(f!=="cnc"&&f!=="video"&&f!=="web")L.push(`Visual style: ${en("style",v.style||"minimal")}.`);
if(f==="web")L.push(`Visual style: ${en("style",v.style||"minimal")}.`);
if(v.colors&&v.colors.length)L.push(`Color palette (use only these${v.colors.length<3?", plus neutrals":""}): ${v.colors.join(", ")}.`);else if(f!=="cnc")L.push("Choose a harmonious palette of at most 3 colors suited to the sector.");
if(f!=="cnc")L.push(`Text language on the design: ${en("lang",v.lang||"fr")}.${(v.lang==="ar"||v.lang==="bi")?" Render Arabic correctly (right-to-left, connected letters) or leave clean empty text zones if you cannot.":""}`);
if(v.notes)L.push(`Extra notes: ${v.notes}.`);
if(["brand"].includes(f))L.push("Deliver clean logo concepts in a flat vector style, centered on a plain white background, then the best one on a dark background. Simple geometry that stays readable at 16 px.");
L.push("DESIGN RULES: clear visual hierarchy (name or headline first, then key info, then contacts); maximum 2 typefaces; strong contrast between text and background; generous white space; everything aligned on a grid; consistent margins.");
if(!["video","web"].includes(f))L.push("OUTPUT RULES: flat 2D artwork only, no mockup, no perspective, no paper texture, no shadows, no hands or desk, no watermark. High resolution, sharp vector-like shapes. Do not add any text other than what is specified above.");
L.push("After the result, list in text the font names and HEX colors you used, so a designer can rebuild it as a print-ready vector file.");
return L.join("\n")}
const ITER=["Keep everything exactly the same, but change only the main color to [COLOR].","Create 3 alternative versions with different layouts, keeping the same text and colors.","Make the headline larger and increase the contrast. Keep every other element unchanged.","Simplify the design: remove decorative elements and add more white space.","Make it look more premium (or more playful), keep exactly the same content.","Fix any misspelled text and keep all other details identical."];
/* ---------- message de commande ---------- */
const M={hello:T3("Bonjour NOUVURA,","Hello NOUVURA,","مرحباً NOUVURA،"),want:T3("Je souhaite commander :","I would like to order:","أرغب بطلب:"),est:T3("Estimation indicative","Indicative estimate","تقدير استرشادي"),qty:T3("Quantité","Quantity","الكمية"),proj:T3("Détails du projet","Project details","تفاصيل المشروع"),me:T3("Mes coordonnées","My details","بياناتي"),nm:T3("Nom","Name","الاسم"),ph:T3("Téléphone","Phone","الهاتف"),em:T3("E-mail","Email","البريد"),ad:T3("Adresse","Address","العنوان"),ws:T3("Site web","Website","الموقع"),so:T3("Réseaux","Social","التواصل"),img:T3("Image du design choisi : jointe ({f})","Chosen design image: attached ({f})","صورة التصميم المختار: مرفقة ({f})"),noimg:T3("Aucune image jointe.","No image attached.","لا توجد صورة مرفقة."),rep:T3("Merci de remplacer les coordonnées fictives du design par les miennes.","Please replace the fake details in the design with mine.","يرجى استبدال البيانات الوهمية في التصميم ببياناتي.")};
function valTxt(k){const v=st.v[k];if(v==null||v===""||(Array.isArray(v)&&!v.length))return "";const d=FD[k];
if(d.t==="sel"){const o=O[d.o].find(x=>x[0]===String(v));return o?(t(o[1])||o[1]):v}
if(d.t==="chips")return v.map(x=>t(O.inc[x])).join(", ");
if(d.t==="size")return v.w?`${v.w}×${v.h} ${v.u}`:"";
if(d.t==="dims")return (v.l||v.w||v.h)?`${v.l||"?"}×${v.w||"?"}×${v.h||"?"} cm`:"";
if(d.t==="colors")return v.join(" ");
if(d.t==="noname")return v?t(T3("à proposer","to be suggested","يُقترح")):"";
return String(v)}
function modeName(){return t(st.mode==="design"?U.mD:st.mode==="prod"?U.mP:U.mB)}
function message(){const i=it(),r=st.real,e=est(),L=[t(M.hello),"",t(M.want)+" "+nmI(i)+` (${modeName()})`];
const q=i.u.t==="batch"?st.qty:i.u.t==="area"?areaM2()+" m²":i.u.t==="qty"?st.qty:"";if(q)L.push(t(M.qty)+" : "+q);
L.push(t(M.est)+" : "+(i.q?t(U.quote)+" ≈ ":"")+nf(e.total)+" "+t(U.da),"");
const keys=[...fam().a,...fam().b].filter(k=>!["noname"].includes(k));const lines=keys.map(k=>{const s=valTxt(k);return s?"• "+t(FD[k].l).replace(/\s*\(.*?\)\s*$/,"")+" : "+s:""}).filter(Boolean);
if(lines.length)L.push(t(M.proj)+" :",...lines,"");
L.push(t(M.me)+" :","• "+t(M.nm)+" : "+(r.name||""),"• "+t(M.ph)+" : "+(r.phone||""));
if(r.email)L.push("• "+t(M.em)+" : "+r.email);if(r.address)L.push("• "+t(M.ad)+" : "+r.address);if(r.website)L.push("• "+t(M.ws)+" : "+r.website);if(r.social)L.push("• "+t(M.so)+" : "+r.social);
if(r.notes)L.push("",r.notes);
L.push("",img?t(M.img).replace("{f}","nouvura-design.jpg"):t(M.noimg));
if((st.v.inc||[]).length)L.push(t(M.rep));
return L.join("\n")}
function subject(){return "NOUVURA — "+nmI(it())+" — "+(st.real.name||"")}
/* ---------- utilitaires ---------- */
function toast(m){const e=$("#nva-toast");e.textContent=m;e.classList.add("on");clearTimeout(toast.t);toast.t=setTimeout(()=>e.classList.remove("on"),2600)}
function copy(txt,msg){const ok=()=>toast(msg||t(U.copied));if(navigator.clipboard&&window.isSecureContext)navigator.clipboard.writeText(txt).then(ok,()=>fb());else fb();
function fb(){const a=document.createElement("textarea");a.value=txt;a.style.cssText="position:fixed;opacity:0";document.body.appendChild(a);a.select();try{document.execCommand("copy")}catch(e){}a.remove();ok()}}
function dl(file){const u=URL.createObjectURL(file),a=document.createElement("a");a.href=u;a.download=file.name;document.body.appendChild(a);a.click();a.remove();setTimeout(()=>URL.revokeObjectURL(u),4000)}
function shrink(f){return new Promise((res,rej)=>{const u=URL.createObjectURL(f),im=new Image();im.onload=()=>{const s=Math.min(1,1600/Math.max(im.width,im.height)),c=document.createElement("canvas");c.width=Math.round(im.width*s);c.height=Math.round(im.height*s);c.getContext("2d").drawImage(im,0,0,c.width,c.height);URL.revokeObjectURL(u);c.toBlob(b=>b?res(new File([b],"nouvura-design.jpg",{type:"image/jpeg"})):rej(),"image/jpeg",.86)};im.onerror=rej;im.src=u})}
const inApp=/FBAN|FBAV|FB_IAB|Instagram|Messenger|Line\//i.test(navigator.userAgent);
function need(){if(!st.real.name||!st.real.phone){toast(t(U.need));return false}return true}
function sendMail(){if(!need())return;if(img)dl(img);const b=encodeURIComponent(message().replace(/\n/g,"\r\n"));location.href="mailto:"+MAIL+"?subject="+encodeURIComponent(subject())+"&body="+b;toast(t(U.sH).slice(0,120)+"…")}
function sendWa(){if(!need())return;if(img)dl(img);window.open("https://wa.me/"+WA+"?text="+encodeURIComponent(message()),"_blank")}
async function shareImg(){if(!need())return;try{if(img&&navigator.canShare&&navigator.canShare({files:[img]})){await navigator.share({files:[img],title:subject(),text:message()})}else if(navigator.share){await navigator.share({title:subject(),text:message()})}else{copy(message(),t(U.copied))}}catch(e){}}
/* ---------- interface ---------- */
function shell(){root=document.createElement("div");root.id="nva";root.hidden=true;root.setAttribute("role","dialog");root.setAttribute("aria-modal","true");
root.innerHTML='<div class="nva-h"><b id="nva-t"></b><button class="nva-x" id="nva-x"></button></div><div class="nva-p" id="nva-p"></div><div class="nva-b" id="nva-b"></div><div class="nva-f"><button class="btn ghost" id="nva-bk"></button><button class="btn y" id="nva-nx"></button></div><div class="nva-toast" id="nva-toast" role="status"></div>';
document.body.appendChild(root);$("#nva-x").onclick=close;$("#nva-bk").onclick=()=>go(-1);$("#nva-nx").onclick=()=>go(1);
document.addEventListener("keydown",e=>{if(!root.hidden&&e.key==="Escape")close()});addEventListener("nvlang",()=>{if(!root.hidden)draw()})}
function close(){root.hidden=true;document.body.classList.remove("noscroll")}
function go(d){const s=steps(),ix=s.indexOf(st.step);const n=s[Math.max(0,Math.min(s.length-1,ix+d))];st.step=n;keep();draw();$("#nva-b").scrollTop=0}
function progress(){const s=steps();return s.map((x,ix)=>`<span class="${x===st.step?"on":""} ${s.indexOf(st.step)>ix?"dn":""}">${ix+1}</span>`).join("<i></i>")+`<em>${t(U.st[st.step])}</em>`}
function listHtml(){const q=st.q.trim().toLowerCase();const arr=ITEMS.filter(i=>(st.cat<0||i.c===st.cat)&&(!q||(i.ar+" "+i.fr+" "+i.en).toLowerCase().includes(q)));
return arr.length?arr.map(i=>`<button class="svc" data-i="${i.i}"><span class="sn">${esc(i[LG()])}</span><span class="sp">${esc(rowPrice(i))}</span></button>`).join(""):`<p class="nn">${t(U.none)}</p>`}
function draw(){if(!root)return;root.dir=LG()==="ar"?"rtl":"ltr";const b=$("#nva-b");$("#nva-t").textContent=t(U.t);$("#nva-x").setAttribute("aria-label",t(U.x));$("#nva-x").textContent="×";
$("#nva-p").innerHTML=progress();const s=steps(),ix=s.indexOf(st.step);$("#nva-bk").textContent=t(U.back);$("#nva-bk").style.visibility=ix>0?"visible":"hidden";
$(".nva-f").classList.toggle("off",st.step===0);const nx=$("#nva-nx");nx.style.display=(st.step===0||st.step===4)?"none":"";nx.textContent=st.step===3?t(T3("J’ai mon image","I have my image","لدي صورتي")):t(U.next);
if(st.step===0)b.innerHTML=s0();else if(st.step===1)b.innerHTML=`<h3>${t(U.h2)}</h3>${(fam().inc&&fam().a.includes("inc"))?`<p class="nnote">${t(U.fake)}</p>`:""}${fam().a.map(fld).join("")}`;
else if(st.step===2)b.innerHTML=`<h3>${t(U.h3)}</h3>${fam().b.map(fld).join("")}`;else if(st.step===3)b.innerHTML=s3();else b.innerHTML=s4();bind()}
function s0(){const cats=[`<button class="chip" data-cat="-1" aria-pressed="${st.cat<0}">${t(U.all)}</button>`,...C.cats.map((c,i)=>`<button class="chip" data-cat="${i}" aria-pressed="${st.cat===i}">${esc(c[LG()])}</button>`)].join("");
const rs=saved&&saved.svc!=null&&ITEMS[saved.svc]&&st.svc==null?`<button class="rs" id="nva-rs">${t(U.resume)} <b>${esc(nmI(ITEMS[saved.svc]))}</b></button>`:"";
return `<h3>${t(U.h1)}</h3>${rs}<input class="nva-s" id="nva-q" type="search" placeholder="${esc(t(U.srch))}" value="${esc(st.q)}"><div class="ncats">${cats}</div><div class="nlist" id="nva-l">${listHtml()}</div><a class="nfree" href="https://wa.me/${WA}" target="_blank" rel="noopener">${t(U.free)} ↗</a>`}
const TOOLS=[["ChatGPT","https://chatgpt.com/"],["Gemini","https://gemini.google.com/"],["Copilot","https://copilot.microsoft.com/"],["Ideogram","https://ideogram.ai/"],["Adobe Firefly","https://firefly.adobe.com/"]];
function s3(){const p=buildPrompt(),f=it().f,tools=[...TOOLS,...(["web","video"].includes(f)?[["Claude","https://claude.ai/"]]:[])];
return `<h3>${t(U.h4)}</h3><ol class="nsteps"><li>${t(U.p1)}</li><li>${t(U.p2)}</li><li>${t(U.p3)}</li></ol><textarea class="nprompt" id="nva-pr" readonly rows="12" dir="ltr">${esc(p)}</textarea><button class="btn y nbig" id="nva-cp"><span>${t(U.copy)}</span><i>⧉</i></button>
<h4>${t(U.tools)}</h4><div class="nchips">${tools.map(x=>`<a class="chip" target="_blank" rel="noopener" href="${x[1]}">${x[0]} ↗</a>`).join("")}</div><p class="nnote">${t(U.toolsNote)}</p>
<h4>${t(U.iter)}</h4><div class="niter">${ITER.map((x,ix)=>`<button type="button" class="it" data-it="${ix}" dir="ltr">${esc(x)}<i>⧉</i></button>`).join("")}</div>
<p class="nnote">${t(U.warn)}</p>${(st.v.lang==="ar"||st.v.lang==="bi")?`<p class="nnote">${t(U.arTip)}</p>`:""}`}
function s4(){const i=it(),e=est(),u=i.u,modes=[];if(i.d>0)modes.push(["design",U.mD]);if(i.p>0)modes.push(["prod",U.mP]);if(i.d>0&&i.p>0)modes.push(["both",U.mB]);
const r=st.real,inc=st.v.inc||[];
const qin=u.t==="batch"?`<label class="nf"><span>${t(U.qB)}</span><input data-q="qty" type="number" inputmode="numeric" min="1" value="${esc(st.qty)}"></label>`:u.t==="area"?`<label class="nf"><span>${t(U.qA)}</span><input data-q="area" type="number" inputmode="decimal" min="0" step="0.1" value="${esc(st.area||areaM2())}"></label>`:u.t==="qty"?`<label class="nf"><span>${t(U.qQ)} (${esc(({fr:u.fr,en:u.en,ar:u.ar})[LG()])})</span><input data-q="qty" type="number" inputmode="numeric" min="1" value="${esc(st.qty)}"></label>`:"";
const inf=(k,l)=>`<label class="nf"><span>${t(U[l])}</span><input data-r="${k}" value="${esc(r[k]||"")}" ${k==="phone"?'type="tel" inputmode="tel"':k==="email"?'type="email"':""}></label>`;
return `<h3>${t(U.h5)}</h3>${inApp?`<p class="nnote warn">${t(U.inapp)}</p>`:""}
<div class="nest"><b>${esc(nmI(i))}</b>${modes.length>1?`<div class="nchips">${modes.map(m=>`<button type="button" class="chip" data-mode="${m[0]}" aria-pressed="${st.mode===m[0]}">${t(m[1])}</button>`).join("")}</div>`:""}${qin}<div class="nrt"><span>${t(U.rt)}</span><strong id="nva-tot">${i.q?t(U.quote)+" ≈ ":""}${nf(e.total)} ${t(U.da)}</strong></div><p class="nnote">${t(U.estN)}</p></div>
<div class="nf"><span>${t(U.img)}</span><label class="nfile"><input type="file" id="nva-fi" accept="image/*"><span>${t(U.pick)}</span></label><div id="nva-pv">${img?`<img src="${URL.createObjectURL(img)}" alt="">`:""}</div><p class="nnote">${t(U.imgN)}</p></div>
${inf("name","rn")}${inf("phone","rp")}${inf("email","re")}${inc.includes("address")?inf("address","ra"):""}${inc.includes("website")?inf("website","rw"):""}${inc.includes("social")?inf("social","rs"):""}
<label class="nf"><span>${t(FD.notes.l)}</span><textarea data-r="notes" rows="3">${esc(r.notes||"")}</textarea></label>
<div class="nsend"><button class="btn y" id="nva-sm"><span>${t(U.sm)}</span><i>↗</i></button><button class="btn y" id="nva-sw"><span>${t(U.sw)}</span><i>↗</i></button>${navigator.share?`<button class="btn ghost" id="nva-ss"><span>${t(U.ss)}</span></button>`:""}<button class="btn ghost" id="nva-sc"><span>${t(U.sc)}</span></button></div><p class="nnote">${t(U.sH)}</p>`}
function bind(){const b=$("#nva-b");
$$("#nva-b [data-cat]").forEach(x=>x.onclick=()=>{st.cat=+x.dataset.cat;draw()});
const q=$("#nva-q");if(q)q.oninput=()=>{st.q=q.value;$("#nva-l").innerHTML=listHtml();bindList()};bindList();
const rs=$("#nva-rs");if(rs)rs.onclick=()=>{st.v=saved.v||{};st.mode=saved.mode||"both";st.qty=saved.qty||"1";st.real=saved.real||{};st.svc=saved.svc;st.step=1;draw()};
$$("#nva-b [data-k]").forEach(x=>{const ev=x.type==="checkbox"||x.tagName==="SELECT"?"change":"input";x.addEventListener(ev,()=>{const k=x.dataset.k;st.v[k]=x.type==="checkbox"?x.checked:x.value;keep();if(k==="sector"||k==="noname"){const y=b.scrollTop;draw();b.scrollTop=y}})});
$$("#nva-b [data-inc]").forEach(x=>x.onclick=()=>{const a=st.v.inc||(st.v.inc=[]),k=x.dataset.inc,ix=a.indexOf(k);ix<0?a.push(k):a.splice(ix,1);x.setAttribute("aria-pressed",ix<0);keep()});
$$("#nva-b [data-nm]").forEach(x=>x.onclick=()=>{st.v.biz=x.dataset.nm;st.v.noname=false;keep();draw()});
$$("#nva-b [data-sz]").forEach(x=>x.addEventListener("change",()=>{const k=szKind[it().f],P=SZ[k],s=st.v.size||{};if(x.dataset.sz==="p"){const ix=+x.value;st.v.size=ix>=0?{i:ix,w:P[ix][0],h:P[ix][1],u:P[ix][2]}:{i:-1,w:s.w||"",h:s.h||"",u:P[0][2]};keep();draw()}else{s[x.dataset.sz]=parseFloat(x.value)||"";keep()}}));
$$("#nva-b [data-sz=w],#nva-b [data-sz=h]").forEach(x=>x.addEventListener("input",()=>{st.v.size[x.dataset.sz]=parseFloat(x.value)||"";keep()}));
$$("#nva-b [data-dm]").forEach(x=>x.addEventListener("input",()=>{const d=st.v.dims||(st.v.dims={});d[x.dataset.dm]=parseFloat(x.value)||"";keep()}));
$$("#nva-b [data-pal]").forEach(x=>x.onclick=()=>{st.v.colors=[...(PAL[st.v.sector||"other"]||PAL.other)[+x.dataset.pal]];keep();draw()});
$$("#nva-b [data-col]").forEach(x=>x.addEventListener("input",()=>{st.v.colors[+x.dataset.col]=x.value;keep()}));
$$("#nva-b [data-rm]").forEach(x=>x.onclick=()=>{st.v.colors.splice(+x.dataset.rm,1);keep();draw()});
$$("#nva-b [data-addc]").forEach(x=>x.onclick=()=>{(st.v.colors=st.v.colors||[]).push("#ffd400");keep();draw()});
$$("#nva-b [data-clr]").forEach(x=>x.onclick=()=>{st.v.colors=[];keep();draw()});
const cp=$("#nva-cp");if(cp)cp.onclick=()=>copy($("#nva-pr").value);
$$("#nva-b [data-it]").forEach(x=>x.onclick=()=>copy(ITER[+x.dataset.it]));
$$("#nva-b [data-mode]").forEach(x=>x.onclick=()=>{st.mode=x.dataset.mode;keep();draw()});
$$("#nva-b [data-q]").forEach(x=>x.addEventListener("input",()=>{st[x.dataset.q]=x.value;keep();const e=est();$("#nva-tot").textContent=(it().q?t(U.quote)+" ≈ ":"")+nf(e.total)+" "+t(U.da)}));
$$("#nva-b [data-r]").forEach(x=>x.addEventListener("input",()=>{st.real[x.dataset.r]=x.value;keep()}));
const fi=$("#nva-fi");if(fi)fi.onchange=async()=>{const f=fi.files&&fi.files[0];if(!f)return;try{img=await shrink(f);$("#nva-pv").innerHTML=`<img src="${URL.createObjectURL(img)}" alt="">`}catch(e){toast("Image ?")}};
const sm=$("#nva-sm");if(sm){sm.onclick=sendMail;$("#nva-sw").onclick=sendWa;$("#nva-sc").onclick=()=>{if(need())copy(message())};const ss=$("#nva-ss");if(ss)ss.onclick=shareImg}}
function bindList(){$$("#nva-l .svc").forEach(x=>x.onclick=()=>pick(+x.dataset.i))}
window.NVA={open(cat){if(!root)shell();if(typeof cat==="number")st.cat=cat;st.step=st.svc==null?0:Math.min(st.step,4);if(st.svc==null)st.step=0;root.hidden=false;document.body.classList.add("noscroll");draw();$("#nva-x").focus()}};
})();
