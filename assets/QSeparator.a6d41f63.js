import{u as d,a as g}from"./uid.c4af4a8b.js";import{c as $,f as t,h,k as f}from"./index.00c1b7ba.js";const x={true:"inset",item:"item-inset","item-thumbnail":"item-thumbnail-inset"},i={xs:2,sm:4,md:8,lg:16,xl:24};var z=$({name:"QSeparator",props:{...d,spaced:[Boolean,String],inset:[Boolean,String],vertical:Boolean,color:String,size:String},setup(e){const o=f(),c=g(e,o.proxy.$q),s=t(()=>e.vertical===!0?"vertical":"horizontal"),n=t(()=>` q-separator--${s.value}`),l=t(()=>e.inset!==!1?`${n.value}-${x[e.inset]}`:""),u=t(()=>`q-separator${n.value}${l.value}`+(e.color!==void 0?` bg-${e.color}`:"")+(c.value===!0?" q-separator--dark":"")),m=t(()=>{const a={};if(e.size!==void 0&&(a[e.vertical===!0?"width":"height"]=e.size),e.spaced!==!1){const v=e.spaced===!0?`${i.md}px`:e.spaced in i?`${i[e.spaced]}px`:e.spaced,r=e.vertical===!0?["Left","Right"]:["Top","Bottom"];a[`margin${r[0]}`]=a[`margin${r[1]}`]=v}return a});return()=>h("hr",{class:u.value,style:m.value,"aria-orientation":s.value})}});export{z as Q};
