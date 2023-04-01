import{J as S,r as d,U as q,K as C,at as P,O as l,W as w,M as i,Y as b,V as E,p as U,Q as F,L as I,X as z,au as A,b as D}from"./index.00c1b7ba.js";import{Q as L,a as T}from"./QTable.722c96f7.js";import{Q as j}from"./QPageSticky.d153300a.js";import{Q as G}from"./QPage.86c4b5c1.js";import{u as N,c as J,Q as x,a as K,b as h}from"./QCard.5686ad5f.js";import{c as Q,n as y,s as g,m as p}from"./supabase.7a60f0a8.js";import{u as k}from"./app.9f400080.js";import{B as M,c as O,Q as W,C as X}from"./BorrarItem.f88052be.js";import"./QSeparator.a6d41f63.js";import"./uid.c4af4a8b.js";import"./QList.33562488.js";import"./format.87ff2225.js";const Y={emits:["nuevo","editado","borrado"],components:{BorrarItem:M},setup(v,{emit:r}){const u=N(),o=d(!1),c=d(null);k();const s=d({}),t=d(null),a=d(null);function _(e,n){e?(c.value="Editar",t.value=n,a.value=e.id,s.value={nombre:e.nombre,salario_base:e.salario_base}):(c.value="Crear",s.value={}),o.value=!0}async function B(){if(o.value=!1,Q(!0),c.value==="Crear"){s.value.negocio=y.id;const{data:e,error:n}=await g.from("cargos").insert(s.value).select("id,nombre,salario_base");n?p(n):(r("nuevo",e[0]),u.notify({type:"positive",message:"Acci\xF3n realizada con \xE9xito."}))}else{const{data:e,error:n}=await g.from("cargos").update(s.value).eq("id",a.value).select("id,nombre,salario_base");n?p(n):(r("editado",e[0],t.value),u.notify({type:"positive",message:"Acci\xF3n realizada con \xE9xito."}))}Q(!1)}return{dialog:o,mostrar:_,accion:c,onSubmit:B,row:s,index:t,id:a,borrado:function(e){o.value=!1,r("borrado",e)}}}},H={class:"text-h6"},Z=b("br",null,null,-1),$={class:"row"},oo={class:"col"},eo={class:"col-auto text-right"};function ao(v,r,u,o,c,s){const t=q("BorrarItem");return C(),P(A,null,[l(w,{class:"animate__animated animate__slideInUp",push:"",fab:"",icon:"add",color:"accent",onClick:r[0]||(r[0]=a=>o.mostrar())}),l(W,{modelValue:o.dialog,"onUpdate:modelValue":r[3]||(r[3]=a=>o.dialog=a),persistent:"","transition-show":"slide-down","transition-hide":"slide-down"},{default:i(()=>[l(J,null,{default:i(()=>[l(x,{class:"row items-center q-pb-none"},{default:i(()=>[b("div",H,E(o.accion)+" cargo",1),l(O),U(l(w,{icon:"close",flat:"",round:"",dense:""},null,512),[[X]])]),_:1}),l(x,null,{default:i(()=>[l(K,{onSubmit:o.onSubmit},{default:i(()=>[l(h,{filled:"",modelValue:o.row.nombre,"onUpdate:modelValue":r[1]||(r[1]=a=>o.row.nombre=a),label:"Nombre","lazy-rules":"",rules:[a=>a&&a.length>0||"Complete este campo"]},null,8,["modelValue","rules"]),l(h,{filled:"",modelValue:o.row.salario_base,"onUpdate:modelValue":r[2]||(r[2]=a=>o.row.salario_base=a),type:"number",label:"Salario base","lazy-rules":"",rules:[a=>a&&a.length>0||"Complete este campo"]},{prepend:i(()=>[l(F,{name:"attach_money"})]),_:1},8,["modelValue","rules"]),Z,b("div",$,[b("div",oo,[o.accion==="Editar"?(C(),I(t,{key:0,index:o.index,id:o.id,tabla:"cargos",onBorrado:o.borrado},null,8,["index","id","onBorrado"])):z("",!0)]),b("div",eo,[l(w,{push:"","no-caps":"",type:"submit",label:"Guardar",color:"primary"})])])]),_:1},8,["onSubmit"])]),_:1})]),_:1})]),_:1},8,["modelValue"])],64)}var ro=S(Y,[["render",ao]]);const no={components:{FormularioItem:ro},setup(){N();const v=k(),r=D();v.titulo=r.currentRoute._value.name;const u=d(null),o=d([]),c=d(""),s=d(!1),t=d({sortBy:null,descending:!1,page:1,rowsPerPage:25,rowsNumber:0});async function a(e,n){if(t.value.sortBy){let{data:m,error:f}=await g.from("cargos").select("id,nombre,salario_base").eq("negocio",y.id).order(t.value.sortBy,{ascending:!t.value.descending}).range(e,n);f?p(f):o.value=m}else{let{data:m,error:f}=await g.from("cargos").select("id,nombre,salario_base").eq("negocio",y.id).range(e,n);f?p(f):o.value=m}s.value=!1,Q(!1)}async function _(){Q(!0);const{count:e,error:n}=await g.from("cargos").select("*",{count:"exact",head:!0}).eq("negocio",y.id);n?p(n):(t.value.rowsNumber=e,a(0,24))}_();function B(e){s.value=!0,t.value=e.pagination;const{page:n,rowsPerPage:m,sortBy:f,descending:to}=e.pagination;if(m===0)a(0,t.value.rowsNumber-1);else{const V=(n-1)*m,R=V+m-1;a(V,R)}}return{rows:o,onRequest:B,filter:c,loading:s,pagination:t,columns:[{name:"nombre",align:"left",label:"Nombre",field:"nombre",sortable:!0},{name:"salario_base",align:"left",label:"Salario base",field:e=>"$ "+e.salario_base,sortable:!0},{name:"opcion",align:"left",label:"",field:e=>"$ "+e.salario_base,sortable:!1}],formulario:u,borrado:function(e){o.value.splice(e,1)},nuevo:function(e){o.value.push(e)},editar:function(e){u.value.mostrar(e.row,e.pageIndex)},editado:function(e,n){o.value[n]=e}}}};function lo(v,r,u,o,c,s){const t=q("FormularioItem");return C(),I(G,{padding:""},{default:i(()=>[l(T,{rows:o.rows,columns:o.columns,"row-key":"id",pagination:o.pagination,"onUpdate:pagination":r[0]||(r[0]=a=>o.pagination=a),loading:o.loading,filter:o.filter,onRequest:o.onRequest},{"body-cell-opcion":i(a=>[l(L,{props:a},{default:i(()=>[l(w,{disabled:o.loading,icon:"edit",round:"",dense:"",flat:"",color:"green",onClick:_=>o.editar(a)},null,8,["disabled","onClick"])]),_:2},1032,["props"])]),_:1},8,["rows","columns","pagination","loading","filter","onRequest"]),l(j,{position:"bottom-right",offset:[18,18]},{default:i(()=>[l(t,{ref:"formulario",onNuevo:o.nuevo,onEditado:o.editado,onBorrado:o.borrado},null,8,["onNuevo","onEditado","onBorrado"])]),_:1})]),_:1})}var yo=S(no,[["render",lo]]);export{yo as default};
