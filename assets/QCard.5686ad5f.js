import{l as ke,ai as Ve,c as le,f as y,h as k,g as W,w as L,G as oe,o as re,k as G,aj as xe,r as N,ak as Ae,al as Ce,am as _e,q as ie,H,a3 as we,an as Se,a6 as Ee,C as X,Q as ce,ao as Be,T as $e,ap as Oe,x as Pe,D as ve,a4 as Te,a8 as Ie}from"./index.00c1b7ba.js";import{b as je,u as qe,a as Me}from"./uid.c4af4a8b.js";function st(){return ke(Ve)}var dt=le({name:"QCardSection",props:{tag:{type:String,default:"div"},horizontal:Boolean},setup(e,{slots:t}){const u=y(()=>`q-card__section q-card__section--${e.horizontal===!0?"horiz row no-wrap":"vert"}`);return()=>k(e.tag,{class:u.value},W(t.default))}});function De({validate:e,resetValidation:t,requiresQForm:u}){const i=ke(xe,!1);if(i!==!1){const{props:d,proxy:f}=G();Object.assign(f,{validate:e,resetValidation:t}),L(()=>d.disable,c=>{c===!0?(typeof t=="function"&&t(),i.unbindComponent(f)):i.bindComponent(f)}),oe(()=>{d.disable!==!0&&i.bindComponent(f)}),re(()=>{d.disable!==!0&&i.unbindComponent(f)})}else u===!0&&console.error("Parent QForm not found on useFormChild()!")}const ge=/^#[0-9a-fA-F]{3}([0-9a-fA-F]{3})?$/,me=/^#[0-9a-fA-F]{4}([0-9a-fA-F]{4})?$/,he=/^#([0-9a-fA-F]{3}|[0-9a-fA-F]{4}|[0-9a-fA-F]{6}|[0-9a-fA-F]{8})$/,te=/^rgb\(((0|[1-9][\d]?|1[\d]{0,2}|2[\d]?|2[0-4][\d]|25[0-5]),){2}(0|[1-9][\d]?|1[\d]{0,2}|2[\d]?|2[0-4][\d]|25[0-5])\)$/,ne=/^rgba\(((0|[1-9][\d]?|1[\d]{0,2}|2[\d]?|2[0-4][\d]|25[0-5]),){2}(0|[1-9][\d]?|1[\d]{0,2}|2[\d]?|2[0-4][\d]|25[0-5]),(0|0\.[0-9]+[1-9]|0\.[1-9]+|1)\)$/,ue={date:e=>/^-?[\d]+\/[0-1]\d\/[0-3]\d$/.test(e),time:e=>/^([0-1]?\d|2[0-3]):[0-5]\d$/.test(e),fulltime:e=>/^([0-1]?\d|2[0-3]):[0-5]\d:[0-5]\d$/.test(e),timeOrFulltime:e=>/^([0-1]?\d|2[0-3]):[0-5]\d(:[0-5]\d)?$/.test(e),email:e=>/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(e),hexColor:e=>ge.test(e),hexaColor:e=>me.test(e),hexOrHexaColor:e=>he.test(e),rgbColor:e=>te.test(e),rgbaColor:e=>ne.test(e),rgbOrRgbaColor:e=>te.test(e)||ne.test(e),hexOrRgbColor:e=>ge.test(e)||te.test(e),hexaOrRgbaColor:e=>me.test(e)||ne.test(e),anyColor:e=>he.test(e)||te.test(e)||ne.test(e)},ze=[!0,!1,"ondemand"],Ne={modelValue:{},error:{type:Boolean,default:null},errorMessage:String,noErrorIcon:Boolean,rules:Array,reactiveRules:Boolean,lazyRules:{type:[Boolean,String],validator:e=>ze.includes(e)}};function Le(e,t){const{props:u,proxy:i}=G(),d=N(!1),f=N(null),c=N(null);De({validate:V,resetValidation:v});let x=0,$;const M=y(()=>u.rules!==void 0&&u.rules!==null&&u.rules.length>0),C=y(()=>u.disable!==!0&&M.value===!0),g=y(()=>u.error===!0||d.value===!0),Z=y(()=>typeof u.errorMessage=="string"&&u.errorMessage.length>0?u.errorMessage:f.value);L(()=>u.modelValue,()=>{D()}),L(()=>u.reactiveRules,j=>{j===!0?$===void 0&&($=L(()=>u.rules,()=>{D(!0)})):$!==void 0&&($(),$=void 0)},{immediate:!0}),L(e,j=>{j===!0?c.value===null&&(c.value=!1):c.value===!1&&(c.value=!0,C.value===!0&&u.lazyRules!=="ondemand"&&t.value===!1&&I())});function v(){x++,t.value=!1,c.value=null,d.value=!1,f.value=null,I.cancel()}function V(j=u.modelValue){if(C.value!==!0)return!0;const B=++x,R=t.value!==!0?()=>{c.value=!0}:()=>{},A=(S,w)=>{S===!0&&R(),d.value=S,f.value=w||null,t.value=!1},_=[];for(let S=0;S<u.rules.length;S++){const w=u.rules[S];let T;if(typeof w=="function"?T=w(j,ue):typeof w=="string"&&ue[w]!==void 0&&(T=ue[w](j)),T===!1||typeof T=="string")return A(!0,T),!1;T!==!0&&T!==void 0&&_.push(T)}return _.length===0?(A(!1),!0):(t.value=!0,Promise.all(_).then(S=>{if(S===void 0||Array.isArray(S)===!1||S.length===0)return B===x&&A(!1),!0;const w=S.find(T=>T===!1||typeof T=="string");return B===x&&A(w!==void 0,w),w===void 0},S=>(B===x&&(console.error(S),A(!0)),!1)))}function D(j){C.value===!0&&u.lazyRules!=="ondemand"&&(c.value===!0||u.lazyRules!==!0&&j!==!0)&&I()}const I=Ae(V,0);return re(()=>{$!==void 0&&$(),I.cancel()}),Object.assign(i,{resetValidation:v,validate:V}),Ce(i,"hasError",()=>g.value),{isDirtyModel:c,hasRules:M,hasError:g,errorMessage:Z,validate:V,resetValidation:v}}const be=/^on[A-Z]/;function Ke(e,t){const u={listeners:N({}),attributes:N({})};function i(){const d={},f={};for(const c in e)c!=="class"&&c!=="style"&&be.test(c)===!1&&(d[c]=e[c]);for(const c in t.props)be.test(c)===!0&&(f[c]=t.props[c]);u.attributes.value=d,u.listeners.value=f}return _e(i),i(),u}let Y=[],ee=[];function Fe(e){ee=ee.filter(t=>t!==e)}function ft(e){Fe(e),ee.push(e)}function ct(e){Fe(e),ee.length===0&&Y.length>0&&(Y[Y.length-1](),Y=[])}function fe(e){ee.length===0?e():Y.push(e)}function Ze(e){Y=Y.filter(t=>t!==e)}function se(e){return e===void 0?`f_${je()}`:e}function de(e){return e!=null&&(""+e).length>0}const Qe={...qe,...Ne,label:String,stackLabel:Boolean,hint:String,hideHint:Boolean,prefix:String,suffix:String,labelColor:String,color:String,bgColor:String,filled:Boolean,outlined:Boolean,borderless:Boolean,standout:[Boolean,String],square:Boolean,loading:Boolean,labelSlot:Boolean,bottomSlots:Boolean,hideBottomSpace:Boolean,rounded:Boolean,dense:Boolean,itemAligned:Boolean,counter:Boolean,clearable:Boolean,clearIcon:String,disable:Boolean,readonly:Boolean,autofocus:Boolean,for:String,maxlength:[Number,String]},Ue=["update:modelValue","clear","focus","blur","popupShow","popupHide"];function He(){const{props:e,attrs:t,proxy:u,vnode:i}=G();return{isDark:Me(e,u.$q),editable:y(()=>e.disable!==!0&&e.readonly!==!0),innerLoading:N(!1),focused:N(!1),hasPopupOpen:!1,splitAttrs:Ke(t,i),targetUid:N(se(e.for)),rootRef:N(null),targetRef:N(null),controlRef:N(null)}}function We(e){const{props:t,emit:u,slots:i,attrs:d,proxy:f}=G(),{$q:c}=f;let x=null;e.hasValue===void 0&&(e.hasValue=y(()=>de(t.modelValue))),e.emitValue===void 0&&(e.emitValue=n=>{u("update:modelValue",n)}),e.controlEvents===void 0&&(e.controlEvents={onFocusin:r,onFocusout:l}),Object.assign(e,{clearValue:s,onControlFocusin:r,onControlFocusout:l,focus:w}),e.computedCounter===void 0&&(e.computedCounter=y(()=>{if(t.counter!==!1){const n=typeof t.modelValue=="string"||typeof t.modelValue=="number"?(""+t.modelValue).length:Array.isArray(t.modelValue)===!0?t.modelValue.length:0,p=t.maxlength!==void 0?t.maxlength:t.maxValues;return n+(p!==void 0?" / "+p:"")}}));const{isDirtyModel:$,hasRules:M,hasError:C,errorMessage:g,resetValidation:Z}=Le(e.focused,e.innerLoading),v=e.floatingLabel!==void 0?y(()=>t.stackLabel===!0||e.focused.value===!0||e.floatingLabel.value===!0):y(()=>t.stackLabel===!0||e.focused.value===!0||e.hasValue.value===!0),V=y(()=>t.bottomSlots===!0||t.hint!==void 0||M.value===!0||t.counter===!0||t.error!==null),D=y(()=>t.filled===!0?"filled":t.outlined===!0?"outlined":t.borderless===!0?"borderless":t.standout?"standout":"standard"),I=y(()=>`q-field row no-wrap items-start q-field--${D.value}`+(e.fieldClass!==void 0?` ${e.fieldClass.value}`:"")+(t.rounded===!0?" q-field--rounded":"")+(t.square===!0?" q-field--square":"")+(v.value===!0?" q-field--float":"")+(B.value===!0?" q-field--labeled":"")+(t.dense===!0?" q-field--dense":"")+(t.itemAligned===!0?" q-field--item-aligned q-item-type":"")+(e.isDark.value===!0?" q-field--dark":"")+(e.getControl===void 0?" q-field--auto-height":"")+(e.focused.value===!0?" q-field--focused":"")+(C.value===!0?" q-field--error":"")+(C.value===!0||e.focused.value===!0?" q-field--highlighted":"")+(t.hideBottomSpace!==!0&&V.value===!0?" q-field--with-bottom":"")+(t.disable===!0?" q-field--disabled":t.readonly===!0?" q-field--readonly":"")),j=y(()=>"q-field__control relative-position row no-wrap"+(t.bgColor!==void 0?` bg-${t.bgColor}`:"")+(C.value===!0?" text-negative":typeof t.standout=="string"&&t.standout.length>0&&e.focused.value===!0?` ${t.standout}`:t.color!==void 0?` text-${t.color}`:"")),B=y(()=>t.labelSlot===!0||t.label!==void 0),R=y(()=>"q-field__label no-pointer-events absolute ellipsis"+(t.labelColor!==void 0&&C.value!==!0?` text-${t.labelColor}`:"")),A=y(()=>({id:e.targetUid.value,editable:e.editable.value,focused:e.focused.value,floatingLabel:v.value,modelValue:t.modelValue,emitValue:e.emitValue})),_=y(()=>{const n={for:e.targetUid.value};return t.disable===!0?n["aria-disabled"]="true":t.readonly===!0&&(n["aria-readonly"]="true"),n});L(()=>t.for,n=>{e.targetUid.value=se(n)});function S(){const n=document.activeElement;let p=e.targetRef!==void 0&&e.targetRef.value;p&&(n===null||n.id!==e.targetUid.value)&&(p.hasAttribute("tabindex")===!0||(p=p.querySelector("[tabindex]")),p&&p!==n&&p.focus({preventScroll:!0}))}function w(){fe(S)}function T(){Ze(S);const n=document.activeElement;n!==null&&e.rootRef.value.contains(n)&&n.blur()}function r(n){x!==null&&(clearTimeout(x),x=null),e.editable.value===!0&&e.focused.value===!1&&(e.focused.value=!0,u("focus",n))}function l(n,p){x!==null&&clearTimeout(x),x=setTimeout(()=>{x=null,!(document.hasFocus()===!0&&(e.hasPopupOpen===!0||e.controlRef===void 0||e.controlRef.value===null||e.controlRef.value.contains(document.activeElement)!==!1))&&(e.focused.value===!0&&(e.focused.value=!1,u("blur",n)),p!==void 0&&p())})}function s(n){ie(n),c.platform.is.mobile!==!0?(e.targetRef!==void 0&&e.targetRef.value||e.rootRef.value).focus():e.rootRef.value.contains(document.activeElement)===!0&&document.activeElement.blur(),t.type==="file"&&(e.inputRef.value.value=null),u("update:modelValue",null),u("clear",t.modelValue),H(()=>{Z(),c.platform.is.mobile!==!0&&($.value=!1)})}function o(){const n=[];return i.prepend!==void 0&&n.push(k("div",{class:"q-field__prepend q-field__marginal row no-wrap items-center",key:"prepend",onClick:X},i.prepend())),n.push(k("div",{class:"q-field__control-container col relative-position row no-wrap q-anchor--skip"},h())),C.value===!0&&t.noErrorIcon===!1&&n.push(F("error",[k(ce,{name:c.iconSet.field.error,color:"negative"})])),t.loading===!0||e.innerLoading.value===!0?n.push(F("inner-loading-append",i.loading!==void 0?i.loading():[k(Be,{color:t.color})])):t.clearable===!0&&e.hasValue.value===!0&&e.editable.value===!0&&n.push(F("inner-clearable-append",[k(ce,{class:"q-field__focusable-action",tag:"button",name:t.clearIcon||c.iconSet.field.clear,tabindex:0,type:"button","aria-hidden":null,role:null,onClick:s})])),i.append!==void 0&&n.push(k("div",{class:"q-field__append q-field__marginal row no-wrap items-center",key:"append",onClick:X},i.append())),e.getInnerAppend!==void 0&&n.push(F("inner-append",e.getInnerAppend())),e.getControlChild!==void 0&&n.push(e.getControlChild()),n}function h(){const n=[];return t.prefix!==void 0&&t.prefix!==null&&n.push(k("div",{class:"q-field__prefix no-pointer-events row items-center"},t.prefix)),e.getShadowControl!==void 0&&e.hasShadow.value===!0&&n.push(e.getShadowControl()),e.getControl!==void 0?n.push(e.getControl()):i.rawControl!==void 0?n.push(i.rawControl()):i.control!==void 0&&n.push(k("div",{ref:e.targetRef,class:"q-field__native row",tabindex:-1,...e.splitAttrs.attributes.value,"data-autofocus":t.autofocus===!0||void 0},i.control(A.value))),B.value===!0&&n.push(k("div",{class:R.value},W(i.label,t.label))),t.suffix!==void 0&&t.suffix!==null&&n.push(k("div",{class:"q-field__suffix no-pointer-events row items-center"},t.suffix)),n.concat(W(i.default))}function m(){let n,p;C.value===!0?g.value!==null?(n=[k("div",{role:"alert"},g.value)],p=`q--slot-error-${g.value}`):(n=W(i.error),p="q--slot-error"):(t.hideHint!==!0||e.focused.value===!0)&&(t.hint!==void 0?(n=[k("div",t.hint)],p=`q--slot-hint-${t.hint}`):(n=W(i.hint),p="q--slot-hint"));const Q=t.counter===!0||i.counter!==void 0;if(t.hideBottomSpace===!0&&Q===!1&&n===void 0)return;const q=k("div",{key:p,class:"q-field__messages col"},n);return k("div",{class:"q-field__bottom row items-start q-field__bottom--"+(t.hideBottomSpace!==!0?"animated":"stale"),onClick:X},[t.hideBottomSpace===!0?q:k($e,{name:"q-transition--field-message"},()=>q),Q===!0?k("div",{class:"q-field__counter"},i.counter!==void 0?i.counter():e.computedCounter.value):null])}function F(n,p){return p===null?null:k("div",{key:n,class:"q-field__append q-field__marginal row no-wrap items-center q-anchor--skip"},p)}let b=!1;return we(()=>{b=!0}),Se(()=>{b===!0&&t.autofocus===!0&&f.focus()}),oe(()=>{Ee.value===!0&&t.for===void 0&&(e.targetUid.value=se()),t.autofocus===!0&&f.focus()}),re(()=>{x!==null&&clearTimeout(x)}),Object.assign(f,{focus:w,blur:T}),function(){const p=e.getControl===void 0&&i.control===void 0?{...e.splitAttrs.attributes.value,"data-autofocus":t.autofocus===!0||void 0,..._.value}:_.value;return k("label",{ref:e.rootRef,class:[I.value,d.class],style:d.style,...p},[i.before!==void 0?k("div",{class:"q-field__before q-field__marginal row no-wrap items-center",onClick:X},i.before()):null,k("div",{class:"q-field__inner relative-position col self-stretch"},[k("div",{ref:e.controlRef,class:j.value,tabindex:-1,...e.controlEvents},o()),V.value===!0?m():null]),i.after!==void 0?k("div",{class:"q-field__after q-field__marginal row no-wrap items-center",onClick:X},i.after()):null])}}const pe={date:"####/##/##",datetime:"####/##/## ##:##",time:"##:##",fulltime:"##:##:##",phone:"(###) ### - ####",card:"#### #### #### ####"},ae={"#":{pattern:"[\\d]",negate:"[^\\d]"},S:{pattern:"[a-zA-Z]",negate:"[^a-zA-Z]"},N:{pattern:"[0-9a-zA-Z]",negate:"[^0-9a-zA-Z]"},A:{pattern:"[a-zA-Z]",negate:"[^a-zA-Z]",transform:e=>e.toLocaleUpperCase()},a:{pattern:"[a-zA-Z]",negate:"[^a-zA-Z]",transform:e=>e.toLocaleLowerCase()},X:{pattern:"[0-9a-zA-Z]",negate:"[^0-9a-zA-Z]",transform:e=>e.toLocaleUpperCase()},x:{pattern:"[0-9a-zA-Z]",negate:"[^0-9a-zA-Z]",transform:e=>e.toLocaleLowerCase()}},Re=Object.keys(ae);Re.forEach(e=>{ae[e].regex=new RegExp(ae[e].pattern)});const Ye=new RegExp("\\\\([^.*+?^${}()|([\\]])|([.*+?^${}()|[\\]])|(["+Re.join("")+"])|(.)","g"),ye=/[.*+?^${}()|[\]\\]/g,O=String.fromCharCode(1),Ge={mask:String,reverseFillMask:Boolean,fillMask:[Boolean,String],unmaskedValue:Boolean};function Je(e,t,u,i){let d,f,c,x,$,M;const C=N(null),g=N(v());function Z(){return e.autogrow===!0||["textarea","text","search","url","tel","password"].includes(e.type)}L(()=>e.type+e.autogrow,D),L(()=>e.mask,r=>{if(r!==void 0)I(g.value,!0);else{const l=w(g.value);D(),e.modelValue!==l&&t("update:modelValue",l)}}),L(()=>e.fillMask+e.reverseFillMask,()=>{C.value===!0&&I(g.value,!0)}),L(()=>e.unmaskedValue,()=>{C.value===!0&&I(g.value)});function v(){if(D(),C.value===!0){const r=_(w(e.modelValue));return e.fillMask!==!1?T(r):r}return e.modelValue}function V(r){if(r<d.length)return d.slice(-r);let l="",s=d;const o=s.indexOf(O);if(o>-1){for(let h=r-s.length;h>0;h--)l+=O;s=s.slice(0,o)+l+s.slice(o)}return s}function D(){if(C.value=e.mask!==void 0&&e.mask.length>0&&Z(),C.value===!1){x=void 0,d="",f="";return}const r=pe[e.mask]===void 0?e.mask:pe[e.mask],l=typeof e.fillMask=="string"&&e.fillMask.length>0?e.fillMask.slice(0,1):"_",s=l.replace(ye,"\\$&"),o=[],h=[],m=[];let F=e.reverseFillMask===!0,b="",n="";r.replace(Ye,(P,a,E,U,K)=>{if(U!==void 0){const z=ae[U];m.push(z),n=z.negate,F===!0&&(h.push("(?:"+n+"+)?("+z.pattern+"+)?(?:"+n+"+)?("+z.pattern+"+)?"),F=!1),h.push("(?:"+n+"+)?("+z.pattern+")?")}else if(E!==void 0)b="\\"+(E==="\\"?"":E),m.push(E),o.push("([^"+b+"]+)?"+b+"?");else{const z=a!==void 0?a:K;b=z==="\\"?"\\\\\\\\":z.replace(ye,"\\\\$&"),m.push(z),o.push("([^"+b+"]+)?"+b+"?")}});const p=new RegExp("^"+o.join("")+"("+(b===""?".":"[^"+b+"]")+"+)?"+(b===""?"":"["+b+"]*")+"$"),Q=h.length-1,q=h.map((P,a)=>a===0&&e.reverseFillMask===!0?new RegExp("^"+s+"*"+P):a===Q?new RegExp("^"+P+"("+(n===""?".":n)+"+)?"+(e.reverseFillMask===!0?"$":s+"*")):new RegExp("^"+P));c=m,x=P=>{const a=p.exec(e.reverseFillMask===!0?P:P.slice(0,m.length+1));a!==null&&(P=a.slice(1).join(""));const E=[],U=q.length;for(let K=0,z=P;K<U;K++){const J=q[K].exec(z);if(J===null)break;z=z.slice(J.shift().length),E.push(...J)}return E.length>0?E.join(""):P},d=m.map(P=>typeof P=="string"?P:O).join(""),f=d.split(O).join(l)}function I(r,l,s){const o=i.value,h=o.selectionEnd,m=o.value.length-h,F=w(r);l===!0&&D();const b=_(F),n=e.fillMask!==!1?T(b):b,p=g.value!==n;o.value!==n&&(o.value=n),p===!0&&(g.value=n),document.activeElement===o&&H(()=>{if(n===f){const q=e.reverseFillMask===!0?f.length:0;o.setSelectionRange(q,q,"forward");return}if(s==="insertFromPaste"&&e.reverseFillMask!==!0){const q=o.selectionEnd;let P=h-1;for(let a=$;a<=P&&a<q;a++)d[a]!==O&&P++;B.right(o,P);return}if(["deleteContentBackward","deleteContentForward"].indexOf(s)>-1){const q=e.reverseFillMask===!0?h===0?n.length>b.length?1:0:Math.max(0,n.length-(n===f?0:Math.min(b.length,m)+1))+1:h;o.setSelectionRange(q,q,"forward");return}if(e.reverseFillMask===!0)if(p===!0){const q=Math.max(0,n.length-(n===f?0:Math.min(b.length,m+1)));q===1&&h===1?o.setSelectionRange(q,q,"forward"):B.rightReverse(o,q)}else{const q=n.length-m;o.setSelectionRange(q,q,"backward")}else if(p===!0){const q=Math.max(0,d.indexOf(O),Math.min(b.length,h)-1);B.right(o,q)}else{const q=h-1;B.right(o,q)}});const Q=e.unmaskedValue===!0?w(n):n;String(e.modelValue)!==Q&&u(Q,!0)}function j(r,l,s){const o=_(w(r.value));l=Math.max(0,d.indexOf(O),Math.min(o.length,l)),$=l,r.setSelectionRange(l,s,"forward")}const B={left(r,l){const s=d.slice(l-1).indexOf(O)===-1;let o=Math.max(0,l-1);for(;o>=0;o--)if(d[o]===O){l=o,s===!0&&l++;break}if(o<0&&d[l]!==void 0&&d[l]!==O)return B.right(r,0);l>=0&&r.setSelectionRange(l,l,"backward")},right(r,l){const s=r.value.length;let o=Math.min(s,l+1);for(;o<=s;o++)if(d[o]===O){l=o;break}else d[o-1]===O&&(l=o);if(o>s&&d[l-1]!==void 0&&d[l-1]!==O)return B.left(r,s);r.setSelectionRange(l,l,"forward")},leftReverse(r,l){const s=V(r.value.length);let o=Math.max(0,l-1);for(;o>=0;o--)if(s[o-1]===O){l=o;break}else if(s[o]===O&&(l=o,o===0))break;if(o<0&&s[l]!==void 0&&s[l]!==O)return B.rightReverse(r,0);l>=0&&r.setSelectionRange(l,l,"backward")},rightReverse(r,l){const s=r.value.length,o=V(s),h=o.slice(0,l+1).indexOf(O)===-1;let m=Math.min(s,l+1);for(;m<=s;m++)if(o[m-1]===O){l=m,l>0&&h===!0&&l--;break}if(m>s&&o[l-1]!==void 0&&o[l-1]!==O)return B.leftReverse(r,s);r.setSelectionRange(l,l,"forward")}};function R(r){t("click",r),M=void 0}function A(r){if(t("keydown",r),Oe(r)===!0)return;const l=i.value,s=l.selectionStart,o=l.selectionEnd;if(r.shiftKey||(M=void 0),r.keyCode===37||r.keyCode===39){r.shiftKey&&M===void 0&&(M=l.selectionDirection==="forward"?s:o);const h=B[(r.keyCode===39?"right":"left")+(e.reverseFillMask===!0?"Reverse":"")];if(r.preventDefault(),h(l,M===s?o:s),r.shiftKey){const m=l.selectionStart;l.setSelectionRange(Math.min(M,m),Math.max(M,m),"forward")}}else r.keyCode===8&&e.reverseFillMask!==!0&&s===o?(B.left(l,s),l.setSelectionRange(l.selectionStart,o,"backward")):r.keyCode===46&&e.reverseFillMask===!0&&s===o&&(B.rightReverse(l,o),l.setSelectionRange(s,l.selectionEnd,"forward"))}function _(r){if(r==null||r==="")return"";if(e.reverseFillMask===!0)return S(r);const l=c;let s=0,o="";for(let h=0;h<l.length;h++){const m=r[s],F=l[h];if(typeof F=="string")o+=F,m===F&&s++;else if(m!==void 0&&F.regex.test(m))o+=F.transform!==void 0?F.transform(m):m,s++;else return o}return o}function S(r){const l=c,s=d.indexOf(O);let o=r.length-1,h="";for(let m=l.length-1;m>=0&&o>-1;m--){const F=l[m];let b=r[o];if(typeof F=="string")h=F+h,b===F&&o--;else if(b!==void 0&&F.regex.test(b))do h=(F.transform!==void 0?F.transform(b):b)+h,o--,b=r[o];while(s===m&&b!==void 0&&F.regex.test(b));else return h}return h}function w(r){return typeof r!="string"||x===void 0?typeof r=="number"?x(""+r):r:x(r)}function T(r){return f.length-r.length<=0?r:e.reverseFillMask===!0&&r.length>0?f.slice(0,-r.length)+r:r+f.slice(r.length)}return{innerValue:g,hasMask:C,moveCursorForPaste:j,updateMaskValue:I,onMaskedKeydown:A,onMaskedClick:R}}const Xe={name:String};function vt(e){return y(()=>({type:"hidden",name:e.name,value:e.modelValue}))}function gt(e={}){return(t,u,i)=>{t[u](k("input",{class:"hidden"+(i||""),...e.value}))}}function et(e){return y(()=>e.name||e.for)}function tt(e,t){function u(){const i=e.modelValue;try{const d="DataTransfer"in window?new DataTransfer:"ClipboardEvent"in window?new ClipboardEvent("").clipboardData:void 0;return Object(i)===i&&("length"in i?Array.from(i):[i]).forEach(f=>{d.items.add(f)}),{files:d.files}}catch{return{files:void 0}}}return t===!0?y(()=>{if(e.type==="file")return u()}):y(u)}const nt=/[\u3000-\u303f\u3040-\u309f\u30a0-\u30ff\uff00-\uff9f\u4e00-\u9faf\u3400-\u4dbf]/,at=/[\u4e00-\u9fff\u3400-\u4dbf\u{20000}-\u{2a6df}\u{2a700}-\u{2b73f}\u{2b740}-\u{2b81f}\u{2b820}-\u{2ceaf}\uf900-\ufaff\u3300-\u33ff\ufe30-\ufe4f\uf900-\ufaff\u{2f800}-\u{2fa1f}]/u,lt=/[\u3131-\u314e\u314f-\u3163\uac00-\ud7a3]/,ot=/[a-z0-9_ -]$/i;function rt(e){return function(u){if(u.type==="compositionend"||u.type==="change"){if(u.target.qComposing!==!0)return;u.target.qComposing=!1,e(u)}else u.type==="compositionupdate"&&u.target.qComposing!==!0&&typeof u.data=="string"&&(Pe.is.firefox===!0?ot.test(u.data)===!1:nt.test(u.data)===!0||at.test(u.data)===!0||lt.test(u.data)===!0)===!0&&(u.target.qComposing=!0)}}var mt=le({name:"QInput",inheritAttrs:!1,props:{...Qe,...Ge,...Xe,modelValue:{required:!1},shadowText:String,type:{type:String,default:"text"},debounce:[String,Number],autogrow:Boolean,inputClass:[Array,String,Object],inputStyle:[Array,String,Object]},emits:[...Ue,"paste","change","keydown","click","animationend"],setup(e,{emit:t,attrs:u}){const{proxy:i}=G(),{$q:d}=i,f={};let c=NaN,x,$,M=null,C;const g=N(null),Z=et(e),{innerValue:v,hasMask:V,moveCursorForPaste:D,updateMaskValue:I,onMaskedKeydown:j,onMaskedClick:B}=Je(e,t,b,g),R=tt(e,!0),A=y(()=>de(v.value)),_=rt(m),S=He(),w=y(()=>e.type==="textarea"||e.autogrow===!0),T=y(()=>w.value===!0||["text","search","url","tel","password"].includes(e.type)),r=y(()=>{const a={...S.splitAttrs.listeners.value,onInput:m,onPaste:h,onChange:p,onBlur:Q,onFocus:ve};return a.onCompositionstart=a.onCompositionupdate=a.onCompositionend=_,V.value===!0&&(a.onKeydown=j,a.onClick=B),e.autogrow===!0&&(a.onAnimationend=F),a}),l=y(()=>{const a={tabindex:0,"data-autofocus":e.autofocus===!0||void 0,rows:e.type==="textarea"?6:void 0,"aria-label":e.label,name:Z.value,...S.splitAttrs.attributes.value,id:S.targetUid.value,maxlength:e.maxlength,disabled:e.disable===!0,readonly:e.readonly===!0};return w.value===!1&&(a.type=e.type),e.autogrow===!0&&(a.rows=1),a});L(()=>e.type,()=>{g.value&&(g.value.value=e.modelValue)}),L(()=>e.modelValue,a=>{if(V.value===!0){if($===!0&&($=!1,String(a)===c))return;I(a)}else v.value!==a&&(v.value=a,e.type==="number"&&f.hasOwnProperty("value")===!0&&(x===!0?x=!1:delete f.value));e.autogrow===!0&&H(n)}),L(()=>e.autogrow,a=>{a===!0?H(n):g.value!==null&&u.rows>0&&(g.value.style.height="auto")}),L(()=>e.dense,()=>{e.autogrow===!0&&H(n)});function s(){fe(()=>{const a=document.activeElement;g.value!==null&&g.value!==a&&(a===null||a.id!==S.targetUid.value)&&g.value.focus({preventScroll:!0})})}function o(){g.value!==null&&g.value.select()}function h(a){if(V.value===!0&&e.reverseFillMask!==!0){const E=a.target;D(E,E.selectionStart,E.selectionEnd)}t("paste",a)}function m(a){if(!a||!a.target)return;if(e.type==="file"){t("update:modelValue",a.target.files);return}const E=a.target.value;if(a.target.qComposing===!0){f.value=E;return}if(V.value===!0)I(E,!1,a.inputType);else if(b(E),T.value===!0&&a.target===document.activeElement){const{selectionStart:U,selectionEnd:K}=a.target;U!==void 0&&K!==void 0&&H(()=>{a.target===document.activeElement&&E.indexOf(a.target.value)===0&&a.target.setSelectionRange(U,K)})}e.autogrow===!0&&n()}function F(a){t("animationend",a),n()}function b(a,E){C=()=>{M=null,e.type!=="number"&&f.hasOwnProperty("value")===!0&&delete f.value,e.modelValue!==a&&c!==a&&(c=a,E===!0&&($=!0),t("update:modelValue",a),H(()=>{c===a&&(c=NaN)})),C=void 0},e.type==="number"&&(x=!0,f.value=a),e.debounce!==void 0?(M!==null&&clearTimeout(M),f.value=a,M=setTimeout(C,e.debounce)):C()}function n(){requestAnimationFrame(()=>{const a=g.value;if(a!==null){const E=a.parentNode.style,{scrollTop:U}=a,{overflowY:K,maxHeight:z}=d.platform.is.firefox===!0?{}:window.getComputedStyle(a),J=K!==void 0&&K!=="scroll";J===!0&&(a.style.overflowY="hidden"),E.marginBottom=a.scrollHeight-1+"px",a.style.height="1px",a.style.height=a.scrollHeight+"px",J===!0&&(a.style.overflowY=parseInt(z,10)<a.scrollHeight?"auto":"hidden"),E.marginBottom="",a.scrollTop=U}})}function p(a){_(a),M!==null&&(clearTimeout(M),M=null),C!==void 0&&C(),t("change",a.target.value)}function Q(a){a!==void 0&&ve(a),M!==null&&(clearTimeout(M),M=null),C!==void 0&&C(),x=!1,$=!1,delete f.value,e.type!=="file"&&setTimeout(()=>{g.value!==null&&(g.value.value=v.value!==void 0?v.value:"")})}function q(){return f.hasOwnProperty("value")===!0?f.value:v.value!==void 0?v.value:""}re(()=>{Q()}),oe(()=>{e.autogrow===!0&&n()}),Object.assign(S,{innerValue:v,fieldClass:y(()=>`q-${w.value===!0?"textarea":"input"}`+(e.autogrow===!0?" q-textarea--autogrow":"")),hasShadow:y(()=>e.type!=="file"&&typeof e.shadowText=="string"&&e.shadowText.length>0),inputRef:g,emitValue:b,hasValue:A,floatingLabel:y(()=>A.value===!0&&(e.type!=="number"||isNaN(v.value)===!1)||de(e.displayValue)),getControl:()=>k(w.value===!0?"textarea":"input",{ref:g,class:["q-field__native q-placeholder",e.inputClass],style:e.inputStyle,...l.value,...r.value,...e.type!=="file"?{value:q()}:R.value}),getShadowControl:()=>k("div",{class:"q-field__native q-field__shadow absolute-bottom no-pointer-events"+(w.value===!0?"":" text-no-wrap")},[k("span",{class:"invisible"},q()),k("span",e.shadowText)])});const P=We(S);return Object.assign(i,{focus:s,select:o,getNativeElement:()=>g.value}),Ce(i,"nativeEl",()=>g.value),P}}),ht=le({name:"QForm",props:{autofocus:Boolean,noErrorFocus:Boolean,noResetFocus:Boolean,greedy:Boolean,onSubmit:Function},emits:["reset","validationSuccess","validationError"],setup(e,{slots:t,emit:u}){const i=G(),d=N(null);let f=0;const c=[];function x(v){const V=typeof v=="boolean"?v:e.noErrorFocus!==!0,D=++f,I=(R,A)=>{u("validation"+(R===!0?"Success":"Error"),A)},j=R=>{const A=R.validate();return typeof A.then=="function"?A.then(_=>({valid:_,comp:R}),_=>({valid:!1,comp:R,err:_})):Promise.resolve({valid:A,comp:R})};return(e.greedy===!0?Promise.all(c.map(j)).then(R=>R.filter(A=>A.valid!==!0)):c.reduce((R,A)=>R.then(()=>j(A).then(_=>{if(_.valid===!1)return Promise.reject(_)})),Promise.resolve()).catch(R=>[R])).then(R=>{if(R===void 0||R.length===0)return D===f&&I(!0),!0;if(D===f){const{comp:A,err:_}=R[0];if(_!==void 0&&console.error(_),I(!1,A),V===!0){const S=R.find(({comp:w})=>typeof w.focus=="function"&&Te(w.$)===!1);S!==void 0&&S.comp.focus()}}return!1})}function $(){f++,c.forEach(v=>{typeof v.resetValidation=="function"&&v.resetValidation()})}function M(v){v!==void 0&&ie(v);const V=f+1;x().then(D=>{V===f&&D===!0&&(e.onSubmit!==void 0?u("submit",v):v!==void 0&&v.target!==void 0&&typeof v.target.submit=="function"&&v.target.submit())})}function C(v){v!==void 0&&ie(v),u("reset"),H(()=>{$(),e.autofocus===!0&&e.noResetFocus!==!0&&g()})}function g(){fe(()=>{if(d.value===null)return;const v=d.value.querySelector("[autofocus][tabindex], [data-autofocus][tabindex]")||d.value.querySelector("[autofocus] [tabindex], [data-autofocus] [tabindex]")||d.value.querySelector("[autofocus], [data-autofocus]")||Array.prototype.find.call(d.value.querySelectorAll("[tabindex]"),V=>V.tabIndex>-1);v!=null&&v.focus({preventScroll:!0})})}Ie(xe,{bindComponent(v){c.push(v)},unbindComponent(v){const V=c.indexOf(v);V>-1&&c.splice(V,1)}});let Z=!1;return we(()=>{Z=!0}),Se(()=>{Z===!0&&e.autofocus===!0&&g()}),oe(()=>{e.autofocus===!0&&g()}),Object.assign(i.proxy,{validate:x,resetValidation:$,submit:M,reset:C,focus:g,getValidationComponents:()=>c}),()=>k("form",{class:"q-form",ref:d,onSubmit:M,onReset:C},W(t.default))}}),bt=le({name:"QCard",props:{...qe,tag:{type:String,default:"div"},square:Boolean,flat:Boolean,bordered:Boolean},setup(e,{slots:t}){const{proxy:{$q:u}}=G(),i=Me(e,u),d=y(()=>"q-card"+(i.value===!0?" q-card--dark q-dark":"")+(e.bordered===!0?" q-card--bordered":"")+(e.square===!0?" q-card--square no-border-radius":"")+(e.flat===!0?" q-card--flat no-shadow":""));return()=>k(e.tag,{class:d.value},W(t.default))}});export{dt as Q,ht as a,mt as b,bt as c,Xe as d,vt as e,gt as f,ft as g,fe as h,Qe as i,Ue as j,We as k,He as l,et as m,de as n,rt as o,ct as r,st as u};
