import{f as d}from"./index.00c1b7ba.js";const c={dark:{type:Boolean,default:null}};function l(t,o){return d(()=>t.dark===null?o.dark.isActive:t.dark)}let a,e=0;const r=new Array(256);for(let t=0;t<256;t++)r[t]=(t+256).toString(16).substring(1);const u=(()=>{const t=typeof crypto!="undefined"?crypto:typeof window!="undefined"?window.crypto||window.msCrypto:void 0;if(t!==void 0){if(t.randomBytes!==void 0)return t.randomBytes;if(t.getRandomValues!==void 0)return o=>{const n=new Uint8Array(o);return t.getRandomValues(n),n}}return o=>{const n=[];for(let i=o;i>0;i--)n.push(Math.floor(Math.random()*256));return n}})(),s=4096;function y(){(a===void 0||e+16>s)&&(e=0,a=u(s));const t=Array.prototype.slice.call(a,e,e+=16);return t[6]=t[6]&15|64,t[8]=t[8]&63|128,r[t[0]]+r[t[1]]+r[t[2]]+r[t[3]]+"-"+r[t[4]]+r[t[5]]+"-"+r[t[6]]+r[t[7]]+"-"+r[t[8]]+r[t[9]]+"-"+r[t[10]]+r[t[11]]+r[t[12]]+r[t[13]]+r[t[14]]+r[t[15]]}export{l as a,y as b,c as u};
