import{c as o,f as n,h as d,g as l,k as i}from"./index.00c1b7ba.js";import{u,a as c}from"./uid.c4af4a8b.js";var p=o({name:"QList",props:{...u,bordered:Boolean,dense:Boolean,separator:Boolean,padding:Boolean,tag:{type:String,default:"div"}},setup(e,{slots:a}){const t=i(),r=c(e,t.proxy.$q),s=n(()=>"q-list"+(e.bordered===!0?" q-list--bordered":"")+(e.dense===!0?" q-list--dense":"")+(e.separator===!0?" q-list--separator":"")+(r.value===!0?" q-list--dark":"")+(e.padding===!0?" q-list--padding":""));return()=>d(e.tag,{class:s.value},l(a.default))}});export{p as Q};
