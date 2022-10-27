import{d as $,o as s,k as u,w as b,a as e,n as S,t as x,f as F,j as D,r as f,p as V,c as E,b as d,h as c,q as j,v as A,x as h,s as m,u as O}from"./index.e1a34eb6.js";import{_ as P}from"./MontreConnectee.vue_vue_type_script_setup_true_lang.a8863290.js";const R={"#FFFFFF":"Blanc","#FFE4E6":"Rose","#D2E9E1":"Vert","#BFDBFE":"Bleu","#1d1c1c":"Noir"},z={"865ab6bf-3b9f-4e41-a8af-111aff29af68":"Cuir","37fda8a4-1c64-406c-9fb4-f6f2ad0382fa":"Acier","3025e9b9-004c-43fe-b571-b47d0dded564":"Caoutchouc"},T={class:"sr-only"},g=$({__name:"FormKitListColors",props:{name:null,label:null},setup(v){return(l,_)=>{const r=D("FormKit");return s(),u(r,{name:v.name,label:v.label,value:"#FFFFFF",type:"radio",options:F(R),"sections-schema":{inner:{$el:null},decorator:{$el:null}},"input-class":"peer sr-only","options-class":"flex gap-1 mb-12 mt-1","legend-class":"font-poppins text-3xl font-medium "},{label:b(p=>[e("div",{class:"h-9 w-16 peer-checked:border-blue-400 peer-checked:border-2 dark:border-white dark:border",style:S({backgroundColor:p.option.value})},null,4),e("span",T,x(p.option.label),1)]),_:1},8,["name","label","options"])}}}),I={class:"grid grid-cols-10 gap-[30px] row-auto pb-96"},U={class:"col-span-8 col-start-2 mt-32 relative"},L=e("h1",{class:"title mb-12"},"Personnalisation",-1),G={class:"2xl:flex 2xl:flex-row 2xl:gap-20 2xl:items-center xl:grid xl:grid-cols-2"},H={class:"h-12 w-40 bg-white peer-checked:bg-green-75 relative dark:peer-checked:bg-green-300 hover:bg-gray-200"},J={class:"label dark:text-zinc-900"},Q={class:"w-80"},W={class:"flex flex-col gap-5"},X={class:"h-12 w-40 bg-white peer-checked:bg-green-75 relative dark:peer-checked:bg-green-300 hover:bg-gray-200"},Y={class:"label dark:text-zinc-900"},Z={class:"h-12 w-40 bg-white peer-checked:bg-green-75 relative dark:peer-checked:bg-green-300 hover:bg-gray-200"},ee={class:"label dark:text-zinc-900"},te=e("div",{class:"legend"},"Prix",-1),ae=e("div",{class:"font-poppins text-xl font-normal"},"299.99 \u20AC",-1),oe={class:"font-poppins bg-white text-zinc-700 w-full px-5 py-2 uppercase text-xl mt-2"},se={class:"flex flex-row gap-3 items-center justify-between"},le=h("Enregister"),re={key:0,class:"font-poppins text-2xl absolute p-8 top-1/3 left-1/3 right-1/3 mx-auto bg-gray-700 bg-opacity-90 flex items-center justify-center text-center"},ne=h("Merci pour votre commande, "),ie=e("br",null,null,-1),ce=h(" un code de r\xE9duction vous attend "),de=e("br",null,null,-1),ue=h(" dans votre boite mail. "),pe=e("br",null,null,-1),me=h(" Vous allez \xEAtre redirig\xE9. "),be=[ne,ie,ce,de,ue,pe,me],_e={key:1,class:"font-poppins text-xl absolute p-3 top-48 left-1/3 right-1/3 mx-20 bg-green-600 bg-opacity-90 flex items-center justify-center text-center animate-fadeInDown animate-fast"},ve=$({__name:"FormMontre",props:["id","data"],async setup(v){var B;let l,_;const r=v,p=O(),y=f((B=r.data)!=null?B:{}),i=f("");i.value="Ovale";const w=f();w.value=!1;const k=f();k.value=!1;const C=f();if(r.id){let{data:a,error:o}=([l,_]=V(()=>m.from("montre").select("*").eq("montre_id",r.id)),l=await l,_(),l);o||!a?console.log("n'a pas pu charger le table Maison :",o):y.value=a[0]}async function M(a,o){if(a.ecran==null)alert("veuillez s\xE9lectionner une couleur pour l'\xE9cran");else{a.user_id=m.auth.user().id;const{data:n,error:t}=await m.from("montre").upsert(a);t?o.setErrors([t.message]):(o.setErrors([]),p.push({name:"montre-edit-id",params:{id:n[0].montre_id}})),k.value=!0,setTimeout(()=>{k.value=!1},1500)}}async function q(){await m.from("montre").update({montre_commandee:!0}).eq("montre_id",r.id),w.value=!0,setTimeout(()=>{p.push("/moncompte")},7e3)}async function K(){const{error:a}=await m.from("montre").delete().eq("montre_id",r.id);a?console.error("Erreur \xE0 la suppression de la montre, erreur :",a):p.push("/")}const{error:fe,data:ge,count:N}=([l,_]=V(()=>m.from("montre").select("*",{count:"exact",head:!0}).eq("montre_commandee",!0)),l=await l,_(),l);return C.value=150-N,(a,o)=>{const n=D("FormKit");return s(),E("div",I,[e("div",U,[L,d(n,{type:"form",modelValue:y.value,"onUpdate:modelValue":o[1]||(o[1]=t=>y.value=t),onSubmit:M,"submit-attrs":{classes:{input:"sr-only"}},"submit-label":"Enregister"},{default:b(()=>[e("div",G,[e("div",null,[d(g,{name:"bracelet",label:"Bracelet"}),d(n,{name:"forme",value:i.value,modelValue:i.value,"onUpdate:modelValue":o[0]||(o[0]=t=>i.value=t),type:"radio",label:"Forme du cadran",options:["Ovale","Dali"],"sections-schema":{inner:{$el:null},decorator:{$el:null}},"input-class":"peer sr-only","options-class":"flex gap-5 mb-3 mt-1","legend-class":"legend"},{label:b(t=>[e("div",H,[e("span",J,x(t.option.label),1)])]),_:1},8,["value","modelValue"]),i.value=="Ovale"?(s(),u(g,{key:0,name:"ecran",label:"Ecran"})):c("",!0),i.value=="Ovale"?(s(),u(g,{key:1,name:"boitier",label:"Boitier"})):c("",!0),i.value=="Dali"?(s(),u(g,{key:2,name:"ecran",label:"Ecran"})):c("",!0),i.value=="Dali"?(s(),u(g,{key:3,name:"boitier",label:"Boitier"})):c("",!0)]),e("div",Q,[d(P,j(A(y.value)),null,16)]),e("div",W,[d(n,{name:"materiaux_bracelet",type:"radio",label:"Mat\xE9raux du bracelet",options:F(z),"sections-schema":{inner:{$el:null},decorator:{$el:null}},"input-class":"peer sr-only","options-class":"flex gap-5 mb-5 mt-1","legend-class":"legend"},{label:b(t=>[e("div",X,[e("span",Y,x(t.option.label),1)])]),_:1},8,["options"]),d(n,{name:"materiaux_boitier",type:"radio",label:"Mat\xE9raux du Boitier",options:F(z),"sections-schema":{inner:{$el:null},decorator:{$el:null}},"input-class":"peer sr-only","options-class":"flex gap-5 mb-3 mt-1","legend-class":"legend"},{label:b(t=>[e("div",Z,[e("span",ee,x(t.option.label),1)])]),_:1},8,["options"]),te,ae,e("div",oe,"Il reste seulement "+x(C.value)+" exemplaires",1),e("div",se,[d(n,{type:"submit","input-class":"font-poppins bg-green-75 px-5 py-2 uppercase text-xl dark:text-zinc-900 dark:bg-green-300 hover:bg-green-400"},{default:b(()=>[le]),_:1}),r.id?(s(),u(n,{key:0,name:"commander",label:"commander",type:"button","input-class":"font-poppins bg-blue-200 px-5 py-2 uppercase text-xl dark:text-zinc-900 dark:bg-blue-300 hover:bg-blue-400",onClick:q})):c("",!0),r.id?(s(),u(n,{key:1,name:"Supprimer",label:"Supprimer",type:"button","input-class":"font-poppins bg-rose-200 px-5 py-2 uppercase text-xl dark:text-zinc-900 dark:bg-rose-300 hover:bg-rose-400",onClick:K})):c("",!0)])])])]),_:1},8,["modelValue"])]),w.value?(s(),E("div",re,be)):c("",!0),k.value?(s(),E("div",_e," Modifications enregistr\xE9es ")):c("",!0)])}}});export{ve as _};
