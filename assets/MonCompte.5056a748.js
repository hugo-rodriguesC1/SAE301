import{d as b,r as d,e as C,o as s,c as a,a as e,t as m,f as l,g as c,h as M,F as _,i as f,s as n,u as q,j as B,k as E,w as j,b as p,m as h}from"./index.2837c9fa.js";import{_ as g}from"./MontreConnectee.vue_vue_type_script_setup_true_lang.50cdb162.js";const L={class:"grid grid-cols-10 gap-[30px] row-auto lg:grid-cols-8 pb-72"},N={class:"font-poppins col-span-2 mt-32 col-start-2"},R={class:"title"},V={class:"text-xl mt-12 font-normal"},F=e("h2",{class:"font-medium text-3xl mt-12"},"Mes cr\xE9ations",-1),S={class:"row-start-2 col-start-2 col-span-6 bg-white h-96 w-full overflow-y-scroll scrollbar-hide dark:bg-black"},z={class:"grid grid-flow-col auto-cols-max grid-rows-1 gap-28 h-full px-20 py-12"},D=e("div",{class:"font-poppins text-xl font-normal absolute flex justify-center -bottom-10 left-0 right-0"},"Command\xE9e",-1),A=b({__name:"MonCompte",setup(O){const x=q(),i=d(),r=d();r.value=[];async function v(){const{error:u,data:t}=await n.from("montre").select("*").eq("user_id",n.auth.user().id).or("montre_commandee.eq.false,montre_commandee.is.null");console.log(t),i.value=t}async function w(){const{error:u,data:t}=await n.from("montre").select("*").eq("user_id",n.auth.user().id).eq("montre_commandee",!0);console.log(t),r.value=t}async function k(){await n.auth.signOut(),x.push("/")}return C(()=>{v(),w()}),(u,t)=>{const y=B("RouterLink");return s(),a("div",L,[e("div",N,[e("h1",R,m(l(c).user_metadata.full_name),1),e("div",V,m(l(c).email),1),F]),l(c)?(s(),a("button",{key:0,class:"flex items-center justify-center bg-rose-200 text-zinc-700 text-xl mt-32 uppercase col-start-7 h-16",onClick:k}," Se d\xE9connecter ")):M("",!0),e("div",S,[e("div",z,[(s(!0),a(_,null,f(i.value,o=>(s(),E(y,{to:{name:"montre-edit-id",params:{id:o.montre_id}},key:o.montre_id},{default:j(()=>[p(g,h(o,{class:"h-full w-full hover:animate-pulse"}),null,16)]),_:2},1032,["to"]))),128)),(s(!0),a(_,null,f(r.value,o=>(s(),a("div",{key:o.montre_id,class:"relative"},[p(g,h(o,{class:"h-full w-full opacity-40"}),null,16),D]))),128))])])])}}});export{A as default};
