import{e as m,N as f}from"./index.00c1b7ba.js";import{P as s}from"./Cookies.55ad71ac.js";import{u as p}from"./app.9f400080.js";var h=m(({router:t,Thestore:a})=>{const i=p(a);t.beforeEach((r,n,e)=>{i.session?r.path==="/"||r.path==="/entrar"?e("/escritorio"):e():r.path==="/entrar"?e():e("/entrar");const o=s.get("mensajito");o&&(f.create({type:o.tipo,message:o.mensaje}),s.remove("mensajito"))})});export{h as default};
