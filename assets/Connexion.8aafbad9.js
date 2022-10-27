import{d as c,o as r,c as a,a as e,t as p,b as n,s as i,u}from"./index.d5c1ae69.js";const _={class:"flex justify-between items-center w-[539px] relative px-8 py-5 bg-white"},m=["src"],g={class:"flex-grow-0 flex-shrink-0 text-xl text-left uppercase text-black font-poppins"},l=c({__name:"LoginButton",props:["src","name"],setup(s){return(t,o)=>(r(),a("button",_,[e("img",{src:s.src,alt:"Logo de l'authentification par un tierce"},null,8,m),e("p",g," Se connecter avec "+p(s.name),1)]))}}),d={class:"col-span-2 col-start-5 mt-36"},x=c({__name:"Login",setup(s){u();async function t(){i.auth.signIn({provider:"google"},{redirectTo:"http://sae301.hrodrigues.fr/moncompte"})}async function o(){i.auth.signIn({provider:"facebook"},{redirectTo:"http://sae301.hrodrigues.fr/moncompte"})}return(v,b)=>(r(),a("div",d,[n(l,{src:"src/assets/gLogo.svg",name:"Google",onClick:t}),n(l,{src:"src\\assets\\fbLogo.svg",name:"Facebook",onClick:o,class:"mt-9"})]))}}),f={class:"grid grid-cols-10 gap-[30px] row-auto lg:grid-cols-8 pb-96"},h=e("div",{class:"font-poppins col-span-2 mt-32 col-start-2"},[e("h1",{class:"title"}," Connexion "),e("p",{class:"font-light text-xl mt-12"},"Connectez-vous pour commencer \xE0 personnaliser vos mod\xE8les de montres. Une fois connect\xE9, cr\xE9er la montre connect\xE9e qui vous ressemble. ")],-1),C=c({__name:"Connexion",setup(s){return(t,o)=>(r(),a("div",f,[h,n(x)]))}});export{C as default};
