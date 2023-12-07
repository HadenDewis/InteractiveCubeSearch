(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))n(r);new MutationObserver(r=>{for(const a of r)if(a.type==="childList")for(const c of a.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&n(c)}).observe(document,{childList:!0,subtree:!0});function t(r){const a={};return r.integrity&&(a.integrity=r.integrity),r.referrerPolicy&&(a.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?a.credentials="include":r.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function n(r){if(r.ep)return;r.ep=!0;const a=t(r);fetch(r.href,a)}})();/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Kf="158",ZS=0,Qd=1,JS=2,qm=1,QS=2,qr=3,$r=0,Ei=1,xr=2,Ss=0,Vo=1,ep=2,tp=3,np=4,eM=5,js=100,tM=101,nM=102,ip=103,rp=104,iM=200,rM=201,sM=202,oM=203,Df=204,Nf=205,aM=206,lM=207,cM=208,uM=209,fM=210,hM=211,dM=212,pM=213,mM=214,gM=0,_M=1,vM=2,yc=3,xM=4,yM=5,SM=6,MM=7,Ym=0,EM=1,TM=2,Ms=0,AM=1,bM=2,wM=3,RM=4,CM=5,sp="attached",LM="detached",jm=300,qo=301,Yo=302,Uf=303,Of=304,Cc=306,jo=1e3,qi=1001,Sc=1002,Xn=1003,Ff=1004,vc=1005,Mi=1006,Km=1007,to=1008,Es=1009,PM=1010,IM=1011,$f=1012,$m=1013,ys=1014,Yr=1015,Ka=1016,Zm=1017,Jm=1018,Js=1020,DM=1021,Yi=1023,NM=1024,UM=1025,Qs=1026,Ko=1027,OM=1028,Qm=1029,FM=1030,eg=1031,tg=1033,ku=33776,Vu=33777,Wu=33778,Xu=33779,op=35840,ap=35841,lp=35842,cp=35843,BM=36196,up=37492,fp=37496,hp=37808,dp=37809,pp=37810,mp=37811,gp=37812,_p=37813,vp=37814,xp=37815,yp=37816,Sp=37817,Mp=37818,Ep=37819,Tp=37820,Ap=37821,qu=36492,bp=36494,wp=36495,HM=36283,Rp=36284,Cp=36285,Lp=36286,$a=2300,$o=2301,Yu=2302,Pp=2400,Ip=2401,Dp=2402,zM=2500,GM=0,ng=1,Bf=2,ig=3e3,eo=3001,kM=3200,VM=3201,rg=0,WM=1,ji="",bn="srgb",Kn="srgb-linear",Zf="display-p3",Lc="display-p3-linear",Mc="linear",vn="srgb",Ec="rec709",Tc="p3",To=7680,Np=519,XM=512,qM=513,YM=514,jM=515,KM=516,$M=517,ZM=518,JM=519,Hf=35044,Up="300 es",zf=1035,jr=2e3,Ac=2001;class na{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const r=this._listeners[e];if(r!==void 0){const a=r.indexOf(t);a!==-1&&r.splice(a,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const n=this._listeners[e.type];if(n!==void 0){e.target=this;const r=n.slice(0);for(let a=0,c=r.length;a<c;a++)r[a].call(this,e);e.target=null}}}const ei=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Op=1234567;const Xa=Math.PI/180,Zo=180/Math.PI;function ar(){const s=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(ei[s&255]+ei[s>>8&255]+ei[s>>16&255]+ei[s>>24&255]+"-"+ei[e&255]+ei[e>>8&255]+"-"+ei[e>>16&15|64]+ei[e>>24&255]+"-"+ei[t&63|128]+ei[t>>8&255]+"-"+ei[t>>16&255]+ei[t>>24&255]+ei[n&255]+ei[n>>8&255]+ei[n>>16&255]+ei[n>>24&255]).toLowerCase()}function ni(s,e,t){return Math.max(e,Math.min(t,s))}function Jf(s,e){return(s%e+e)%e}function QM(s,e,t,n,r){return n+(s-e)*(r-n)/(t-e)}function eE(s,e,t){return s!==e?(t-s)/(e-s):0}function qa(s,e,t){return(1-t)*s+t*e}function tE(s,e,t,n){return qa(s,e,1-Math.exp(-t*n))}function nE(s,e=1){return e-Math.abs(Jf(s,e*2)-e)}function iE(s,e,t){return s<=e?0:s>=t?1:(s=(s-e)/(t-e),s*s*(3-2*s))}function rE(s,e,t){return s<=e?0:s>=t?1:(s=(s-e)/(t-e),s*s*s*(s*(s*6-15)+10))}function sE(s,e){return s+Math.floor(Math.random()*(e-s+1))}function oE(s,e){return s+Math.random()*(e-s)}function aE(s){return s*(.5-Math.random())}function lE(s){s!==void 0&&(Op=s);let e=Op+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function cE(s){return s*Xa}function uE(s){return s*Zo}function Gf(s){return(s&s-1)===0&&s!==0}function sg(s){return Math.pow(2,Math.ceil(Math.log(s)/Math.LN2))}function bc(s){return Math.pow(2,Math.floor(Math.log(s)/Math.LN2))}function fE(s,e,t,n,r){const a=Math.cos,c=Math.sin,u=a(t/2),d=c(t/2),p=a((e+n)/2),g=c((e+n)/2),v=a((e-n)/2),x=c((e-n)/2),T=a((n-e)/2),b=c((n-e)/2);switch(r){case"XYX":s.set(u*g,d*v,d*x,u*p);break;case"YZY":s.set(d*x,u*g,d*v,u*p);break;case"ZXZ":s.set(d*v,d*x,u*g,u*p);break;case"XZX":s.set(u*g,d*b,d*T,u*p);break;case"YXY":s.set(d*T,u*g,d*b,u*p);break;case"ZYZ":s.set(d*b,d*T,u*g,u*p);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+r)}}function yr(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("Invalid component type.")}}function fn(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("Invalid component type.")}}const hE={DEG2RAD:Xa,RAD2DEG:Zo,generateUUID:ar,clamp:ni,euclideanModulo:Jf,mapLinear:QM,inverseLerp:eE,lerp:qa,damp:tE,pingpong:nE,smoothstep:iE,smootherstep:rE,randInt:sE,randFloat:oE,randFloatSpread:aE,seededRandom:lE,degToRad:cE,radToDeg:uE,isPowerOfTwo:Gf,ceilPowerOfTwo:sg,floorPowerOfTwo:bc,setQuaternionFromProperEuler:fE,normalize:fn,denormalize:yr};class Qt{constructor(e=0,t=0){Qt.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6],this.y=r[1]*t+r[4]*n+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(ni(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),r=Math.sin(t),a=this.x-e.x,c=this.y-e.y;return this.x=a*n-c*r+e.x,this.y=a*r+c*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Xt{constructor(e,t,n,r,a,c,u,d,p){Xt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,r,a,c,u,d,p)}set(e,t,n,r,a,c,u,d,p){const g=this.elements;return g[0]=e,g[1]=r,g[2]=u,g[3]=t,g[4]=a,g[5]=d,g[6]=n,g[7]=c,g[8]=p,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,r=t.elements,a=this.elements,c=n[0],u=n[3],d=n[6],p=n[1],g=n[4],v=n[7],x=n[2],T=n[5],b=n[8],C=r[0],E=r[3],M=r[6],V=r[1],U=r[4],B=r[7],z=r[2],$=r[5],m=r[8];return a[0]=c*C+u*V+d*z,a[3]=c*E+u*U+d*$,a[6]=c*M+u*B+d*m,a[1]=p*C+g*V+v*z,a[4]=p*E+g*U+v*$,a[7]=p*M+g*B+v*m,a[2]=x*C+T*V+b*z,a[5]=x*E+T*U+b*$,a[8]=x*M+T*B+b*m,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],r=e[2],a=e[3],c=e[4],u=e[5],d=e[6],p=e[7],g=e[8];return t*c*g-t*u*p-n*a*g+n*u*d+r*a*p-r*c*d}invert(){const e=this.elements,t=e[0],n=e[1],r=e[2],a=e[3],c=e[4],u=e[5],d=e[6],p=e[7],g=e[8],v=g*c-u*p,x=u*d-g*a,T=p*a-c*d,b=t*v+n*x+r*T;if(b===0)return this.set(0,0,0,0,0,0,0,0,0);const C=1/b;return e[0]=v*C,e[1]=(r*p-g*n)*C,e[2]=(u*n-r*c)*C,e[3]=x*C,e[4]=(g*t-r*d)*C,e[5]=(r*a-u*t)*C,e[6]=T*C,e[7]=(n*d-p*t)*C,e[8]=(c*t-n*a)*C,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,r,a,c,u){const d=Math.cos(a),p=Math.sin(a);return this.set(n*d,n*p,-n*(d*c+p*u)+c+e,-r*p,r*d,-r*(-p*c+d*u)+u+t,0,0,1),this}scale(e,t){return this.premultiply(ju.makeScale(e,t)),this}rotate(e){return this.premultiply(ju.makeRotation(-e)),this}translate(e,t){return this.premultiply(ju.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let r=0;r<9;r++)if(t[r]!==n[r])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const ju=new Xt;function og(s){for(let e=s.length-1;e>=0;--e)if(s[e]>=65535)return!0;return!1}function Za(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function dE(){const s=Za("canvas");return s.style.display="block",s}const Fp={};function Ya(s){s in Fp||(Fp[s]=!0,console.warn(s))}const Bp=new Xt().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),Hp=new Xt().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),Wl={[Kn]:{transfer:Mc,primaries:Ec,toReference:s=>s,fromReference:s=>s},[bn]:{transfer:vn,primaries:Ec,toReference:s=>s.convertSRGBToLinear(),fromReference:s=>s.convertLinearToSRGB()},[Lc]:{transfer:Mc,primaries:Tc,toReference:s=>s.applyMatrix3(Hp),fromReference:s=>s.applyMatrix3(Bp)},[Zf]:{transfer:vn,primaries:Tc,toReference:s=>s.convertSRGBToLinear().applyMatrix3(Hp),fromReference:s=>s.applyMatrix3(Bp).convertLinearToSRGB()}},pE=new Set([Kn,Lc]),an={enabled:!0,_workingColorSpace:Kn,get legacyMode(){return console.warn("THREE.ColorManagement: .legacyMode=false renamed to .enabled=true in r150."),!this.enabled},set legacyMode(s){console.warn("THREE.ColorManagement: .legacyMode=false renamed to .enabled=true in r150."),this.enabled=!s},get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(s){if(!pE.has(s))throw new Error(`Unsupported working color space, "${s}".`);this._workingColorSpace=s},convert:function(s,e,t){if(this.enabled===!1||e===t||!e||!t)return s;const n=Wl[e].toReference,r=Wl[t].fromReference;return r(n(s))},fromWorkingColorSpace:function(s,e){return this.convert(s,this._workingColorSpace,e)},toWorkingColorSpace:function(s,e){return this.convert(s,e,this._workingColorSpace)},getPrimaries:function(s){return Wl[s].primaries},getTransfer:function(s){return s===ji?Mc:Wl[s].transfer}};function Wo(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function Ku(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}let Ao;class ag{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{Ao===void 0&&(Ao=Za("canvas")),Ao.width=e.width,Ao.height=e.height;const n=Ao.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=Ao}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Za("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const r=n.getImageData(0,0,e.width,e.height),a=r.data;for(let c=0;c<a.length;c++)a[c]=Wo(a[c]/255)*255;return n.putImageData(r,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(Wo(t[n]/255)*255):t[n]=Wo(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let mE=0;class lg{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:mE++}),this.uuid=ar(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},r=this.data;if(r!==null){let a;if(Array.isArray(r)){a=[];for(let c=0,u=r.length;c<u;c++)r[c].isDataTexture?a.push($u(r[c].image)):a.push($u(r[c]))}else a=$u(r);n.url=a}return t||(e.images[this.uuid]=n),n}}function $u(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?ag.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let gE=0;class jn extends na{constructor(e=jn.DEFAULT_IMAGE,t=jn.DEFAULT_MAPPING,n=qi,r=qi,a=Mi,c=to,u=Yi,d=Es,p=jn.DEFAULT_ANISOTROPY,g=ji){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:gE++}),this.uuid=ar(),this.name="",this.source=new lg(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=r,this.magFilter=a,this.minFilter=c,this.anisotropy=p,this.format=u,this.internalFormat=null,this.type=d,this.offset=new Qt(0,0),this.repeat=new Qt(1,1),this.center=new Qt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Xt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof g=="string"?this.colorSpace=g:(Ya("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=g===eo?bn:ji),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==jm)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case jo:e.x=e.x-Math.floor(e.x);break;case qi:e.x=e.x<0?0:1;break;case Sc:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case jo:e.y=e.y-Math.floor(e.y);break;case qi:e.y=e.y<0?0:1;break;case Sc:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return Ya("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===bn?eo:ig}set encoding(e){Ya("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=e===eo?bn:ji}}jn.DEFAULT_IMAGE=null;jn.DEFAULT_MAPPING=jm;jn.DEFAULT_ANISOTROPY=1;class dn{constructor(e=0,t=0,n=0,r=1){dn.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,r){return this.x=e,this.y=t,this.z=n,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,r=this.z,a=this.w,c=e.elements;return this.x=c[0]*t+c[4]*n+c[8]*r+c[12]*a,this.y=c[1]*t+c[5]*n+c[9]*r+c[13]*a,this.z=c[2]*t+c[6]*n+c[10]*r+c[14]*a,this.w=c[3]*t+c[7]*n+c[11]*r+c[15]*a,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,r,a;const d=e.elements,p=d[0],g=d[4],v=d[8],x=d[1],T=d[5],b=d[9],C=d[2],E=d[6],M=d[10];if(Math.abs(g-x)<.01&&Math.abs(v-C)<.01&&Math.abs(b-E)<.01){if(Math.abs(g+x)<.1&&Math.abs(v+C)<.1&&Math.abs(b+E)<.1&&Math.abs(p+T+M-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const U=(p+1)/2,B=(T+1)/2,z=(M+1)/2,$=(g+x)/4,m=(v+C)/4,pe=(b+E)/4;return U>B&&U>z?U<.01?(n=0,r=.707106781,a=.707106781):(n=Math.sqrt(U),r=$/n,a=m/n):B>z?B<.01?(n=.707106781,r=0,a=.707106781):(r=Math.sqrt(B),n=$/r,a=pe/r):z<.01?(n=.707106781,r=.707106781,a=0):(a=Math.sqrt(z),n=m/a,r=pe/a),this.set(n,r,a,t),this}let V=Math.sqrt((E-b)*(E-b)+(v-C)*(v-C)+(x-g)*(x-g));return Math.abs(V)<.001&&(V=1),this.x=(E-b)/V,this.y=(v-C)/V,this.z=(x-g)/V,this.w=Math.acos((p+T+M-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class _E extends na{constructor(e=1,t=1,n={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new dn(0,0,e,t),this.scissorTest=!1,this.viewport=new dn(0,0,e,t);const r={width:e,height:t,depth:1};n.encoding!==void 0&&(Ya("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),n.colorSpace=n.encoding===eo?bn:ji),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Mi,depthBuffer:!0,stencilBuffer:!1,depthTexture:null,samples:0},n),this.texture=new jn(r,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=n.generateMipmaps,this.texture.internalFormat=n.internalFormat,this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}setSize(e,t,n=1){(this.width!==e||this.height!==t||this.depth!==n)&&(this.width=e,this.height=t,this.depth=n,this.texture.image.width=e,this.texture.image.height=t,this.texture.image.depth=n,this.dispose()),this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new lg(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class no extends _E{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class cg extends jn{constructor(e=null,t=1,n=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=Xn,this.minFilter=Xn,this.wrapR=qi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class vE extends jn{constructor(e=null,t=1,n=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=Xn,this.minFilter=Xn,this.wrapR=qi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Ts{constructor(e=0,t=0,n=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=r}static slerpFlat(e,t,n,r,a,c,u){let d=n[r+0],p=n[r+1],g=n[r+2],v=n[r+3];const x=a[c+0],T=a[c+1],b=a[c+2],C=a[c+3];if(u===0){e[t+0]=d,e[t+1]=p,e[t+2]=g,e[t+3]=v;return}if(u===1){e[t+0]=x,e[t+1]=T,e[t+2]=b,e[t+3]=C;return}if(v!==C||d!==x||p!==T||g!==b){let E=1-u;const M=d*x+p*T+g*b+v*C,V=M>=0?1:-1,U=1-M*M;if(U>Number.EPSILON){const z=Math.sqrt(U),$=Math.atan2(z,M*V);E=Math.sin(E*$)/z,u=Math.sin(u*$)/z}const B=u*V;if(d=d*E+x*B,p=p*E+T*B,g=g*E+b*B,v=v*E+C*B,E===1-u){const z=1/Math.sqrt(d*d+p*p+g*g+v*v);d*=z,p*=z,g*=z,v*=z}}e[t]=d,e[t+1]=p,e[t+2]=g,e[t+3]=v}static multiplyQuaternionsFlat(e,t,n,r,a,c){const u=n[r],d=n[r+1],p=n[r+2],g=n[r+3],v=a[c],x=a[c+1],T=a[c+2],b=a[c+3];return e[t]=u*b+g*v+d*T-p*x,e[t+1]=d*b+g*x+p*v-u*T,e[t+2]=p*b+g*T+u*x-d*v,e[t+3]=g*b-u*v-d*x-p*T,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,r){return this._x=e,this._y=t,this._z=n,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t){const n=e._x,r=e._y,a=e._z,c=e._order,u=Math.cos,d=Math.sin,p=u(n/2),g=u(r/2),v=u(a/2),x=d(n/2),T=d(r/2),b=d(a/2);switch(c){case"XYZ":this._x=x*g*v+p*T*b,this._y=p*T*v-x*g*b,this._z=p*g*b+x*T*v,this._w=p*g*v-x*T*b;break;case"YXZ":this._x=x*g*v+p*T*b,this._y=p*T*v-x*g*b,this._z=p*g*b-x*T*v,this._w=p*g*v+x*T*b;break;case"ZXY":this._x=x*g*v-p*T*b,this._y=p*T*v+x*g*b,this._z=p*g*b+x*T*v,this._w=p*g*v-x*T*b;break;case"ZYX":this._x=x*g*v-p*T*b,this._y=p*T*v+x*g*b,this._z=p*g*b-x*T*v,this._w=p*g*v+x*T*b;break;case"YZX":this._x=x*g*v+p*T*b,this._y=p*T*v+x*g*b,this._z=p*g*b-x*T*v,this._w=p*g*v-x*T*b;break;case"XZY":this._x=x*g*v-p*T*b,this._y=p*T*v-x*g*b,this._z=p*g*b+x*T*v,this._w=p*g*v+x*T*b;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+c)}return t!==!1&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,r=Math.sin(n);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],r=t[4],a=t[8],c=t[1],u=t[5],d=t[9],p=t[2],g=t[6],v=t[10],x=n+u+v;if(x>0){const T=.5/Math.sqrt(x+1);this._w=.25/T,this._x=(g-d)*T,this._y=(a-p)*T,this._z=(c-r)*T}else if(n>u&&n>v){const T=2*Math.sqrt(1+n-u-v);this._w=(g-d)/T,this._x=.25*T,this._y=(r+c)/T,this._z=(a+p)/T}else if(u>v){const T=2*Math.sqrt(1+u-n-v);this._w=(a-p)/T,this._x=(r+c)/T,this._y=.25*T,this._z=(d+g)/T}else{const T=2*Math.sqrt(1+v-n-u);this._w=(c-r)/T,this._x=(a+p)/T,this._y=(d+g)/T,this._z=.25*T}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(ni(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const r=Math.min(1,t/n);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,r=e._y,a=e._z,c=e._w,u=t._x,d=t._y,p=t._z,g=t._w;return this._x=n*g+c*u+r*p-a*d,this._y=r*g+c*d+a*u-n*p,this._z=a*g+c*p+n*d-r*u,this._w=c*g-n*u-r*d-a*p,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,r=this._y,a=this._z,c=this._w;let u=c*e._w+n*e._x+r*e._y+a*e._z;if(u<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,u=-u):this.copy(e),u>=1)return this._w=c,this._x=n,this._y=r,this._z=a,this;const d=1-u*u;if(d<=Number.EPSILON){const T=1-t;return this._w=T*c+t*this._w,this._x=T*n+t*this._x,this._y=T*r+t*this._y,this._z=T*a+t*this._z,this.normalize(),this._onChangeCallback(),this}const p=Math.sqrt(d),g=Math.atan2(p,u),v=Math.sin((1-t)*g)/p,x=Math.sin(t*g)/p;return this._w=c*v+this._w*x,this._x=n*v+this._x*x,this._y=r*v+this._y*x,this._z=a*v+this._z*x,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=Math.random(),t=Math.sqrt(1-e),n=Math.sqrt(e),r=2*Math.PI*Math.random(),a=2*Math.PI*Math.random();return this.set(t*Math.cos(r),n*Math.sin(a),n*Math.cos(a),t*Math.sin(r))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class re{constructor(e=0,t=0,n=0){re.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(zp.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(zp.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,r=this.z,a=e.elements;return this.x=a[0]*t+a[3]*n+a[6]*r,this.y=a[1]*t+a[4]*n+a[7]*r,this.z=a[2]*t+a[5]*n+a[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,r=this.z,a=e.elements,c=1/(a[3]*t+a[7]*n+a[11]*r+a[15]);return this.x=(a[0]*t+a[4]*n+a[8]*r+a[12])*c,this.y=(a[1]*t+a[5]*n+a[9]*r+a[13])*c,this.z=(a[2]*t+a[6]*n+a[10]*r+a[14])*c,this}applyQuaternion(e){const t=this.x,n=this.y,r=this.z,a=e.x,c=e.y,u=e.z,d=e.w,p=2*(c*r-u*n),g=2*(u*t-a*r),v=2*(a*n-c*t);return this.x=t+d*p+c*v-u*g,this.y=n+d*g+u*p-a*v,this.z=r+d*v+a*g-c*p,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,r=this.z,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*r,this.y=a[1]*t+a[5]*n+a[9]*r,this.z=a[2]*t+a[6]*n+a[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,r=e.y,a=e.z,c=t.x,u=t.y,d=t.z;return this.x=r*d-a*u,this.y=a*c-n*d,this.z=n*u-r*c,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Zu.copy(this).projectOnVector(e),this.sub(Zu)}reflect(e){return this.sub(Zu.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(ni(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,r=this.z-e.z;return t*t+n*n+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const r=Math.sin(t)*e;return this.x=r*Math.sin(n),this.y=Math.cos(t)*e,this.z=r*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=(Math.random()-.5)*2,t=Math.random()*Math.PI*2,n=Math.sqrt(1-e**2);return this.x=n*Math.cos(t),this.y=n*Math.sin(t),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Zu=new re,zp=new Ts;class Zr{constructor(e=new re(1/0,1/0,1/0),t=new re(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(ir.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(ir.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=ir.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const a=n.getAttribute("position");if(t===!0&&a!==void 0&&e.isInstancedMesh!==!0)for(let c=0,u=a.count;c<u;c++)e.isMesh===!0?e.getVertexPosition(c,ir):ir.fromBufferAttribute(a,c),ir.applyMatrix4(e.matrixWorld),this.expandByPoint(ir);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Xl.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Xl.copy(n.boundingBox)),Xl.applyMatrix4(e.matrixWorld),this.union(Xl)}const r=e.children;for(let a=0,c=r.length;a<c;a++)this.expandByObject(r[a],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,ir),ir.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Oa),ql.subVectors(this.max,Oa),bo.subVectors(e.a,Oa),wo.subVectors(e.b,Oa),Ro.subVectors(e.c,Oa),hs.subVectors(wo,bo),ds.subVectors(Ro,wo),zs.subVectors(bo,Ro);let t=[0,-hs.z,hs.y,0,-ds.z,ds.y,0,-zs.z,zs.y,hs.z,0,-hs.x,ds.z,0,-ds.x,zs.z,0,-zs.x,-hs.y,hs.x,0,-ds.y,ds.x,0,-zs.y,zs.x,0];return!Ju(t,bo,wo,Ro,ql)||(t=[1,0,0,0,1,0,0,0,1],!Ju(t,bo,wo,Ro,ql))?!1:(Yl.crossVectors(hs,ds),t=[Yl.x,Yl.y,Yl.z],Ju(t,bo,wo,Ro,ql))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,ir).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(ir).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(zr[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),zr[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),zr[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),zr[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),zr[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),zr[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),zr[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),zr[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(zr),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const zr=[new re,new re,new re,new re,new re,new re,new re,new re],ir=new re,Xl=new Zr,bo=new re,wo=new re,Ro=new re,hs=new re,ds=new re,zs=new re,Oa=new re,ql=new re,Yl=new re,Gs=new re;function Ju(s,e,t,n,r){for(let a=0,c=s.length-3;a<=c;a+=3){Gs.fromArray(s,a);const u=r.x*Math.abs(Gs.x)+r.y*Math.abs(Gs.y)+r.z*Math.abs(Gs.z),d=e.dot(Gs),p=t.dot(Gs),g=n.dot(Gs);if(Math.max(-Math.max(d,p,g),Math.min(d,p,g))>u)return!1}return!0}const xE=new Zr,Fa=new re,Qu=new re;class Mr{constructor(e=new re,t=-1){this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):xE.setFromPoints(e).getCenter(n);let r=0;for(let a=0,c=e.length;a<c;a++)r=Math.max(r,n.distanceToSquared(e[a]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Fa.subVectors(e,this.center);const t=Fa.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),r=(n-this.radius)*.5;this.center.addScaledVector(Fa,r/n),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Qu.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Fa.copy(e.center).add(Qu)),this.expandByPoint(Fa.copy(e.center).sub(Qu))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Gr=new re,ef=new re,jl=new re,ps=new re,tf=new re,Kl=new re,nf=new re;class Pc{constructor(e=new re,t=new re(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Gr)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Gr.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Gr.copy(this.origin).addScaledVector(this.direction,t),Gr.distanceToSquared(e))}distanceSqToSegment(e,t,n,r){ef.copy(e).add(t).multiplyScalar(.5),jl.copy(t).sub(e).normalize(),ps.copy(this.origin).sub(ef);const a=e.distanceTo(t)*.5,c=-this.direction.dot(jl),u=ps.dot(this.direction),d=-ps.dot(jl),p=ps.lengthSq(),g=Math.abs(1-c*c);let v,x,T,b;if(g>0)if(v=c*d-u,x=c*u-d,b=a*g,v>=0)if(x>=-b)if(x<=b){const C=1/g;v*=C,x*=C,T=v*(v+c*x+2*u)+x*(c*v+x+2*d)+p}else x=a,v=Math.max(0,-(c*x+u)),T=-v*v+x*(x+2*d)+p;else x=-a,v=Math.max(0,-(c*x+u)),T=-v*v+x*(x+2*d)+p;else x<=-b?(v=Math.max(0,-(-c*a+u)),x=v>0?-a:Math.min(Math.max(-a,-d),a),T=-v*v+x*(x+2*d)+p):x<=b?(v=0,x=Math.min(Math.max(-a,-d),a),T=x*(x+2*d)+p):(v=Math.max(0,-(c*a+u)),x=v>0?a:Math.min(Math.max(-a,-d),a),T=-v*v+x*(x+2*d)+p);else x=c>0?-a:a,v=Math.max(0,-(c*x+u)),T=-v*v+x*(x+2*d)+p;return n&&n.copy(this.origin).addScaledVector(this.direction,v),r&&r.copy(ef).addScaledVector(jl,x),T}intersectSphere(e,t){Gr.subVectors(e.center,this.origin);const n=Gr.dot(this.direction),r=Gr.dot(Gr)-n*n,a=e.radius*e.radius;if(r>a)return null;const c=Math.sqrt(a-r),u=n-c,d=n+c;return d<0?null:u<0?this.at(d,t):this.at(u,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,r,a,c,u,d;const p=1/this.direction.x,g=1/this.direction.y,v=1/this.direction.z,x=this.origin;return p>=0?(n=(e.min.x-x.x)*p,r=(e.max.x-x.x)*p):(n=(e.max.x-x.x)*p,r=(e.min.x-x.x)*p),g>=0?(a=(e.min.y-x.y)*g,c=(e.max.y-x.y)*g):(a=(e.max.y-x.y)*g,c=(e.min.y-x.y)*g),n>c||a>r||((a>n||isNaN(n))&&(n=a),(c<r||isNaN(r))&&(r=c),v>=0?(u=(e.min.z-x.z)*v,d=(e.max.z-x.z)*v):(u=(e.max.z-x.z)*v,d=(e.min.z-x.z)*v),n>d||u>r)||((u>n||n!==n)&&(n=u),(d<r||r!==r)&&(r=d),r<0)?null:this.at(n>=0?n:r,t)}intersectsBox(e){return this.intersectBox(e,Gr)!==null}intersectTriangle(e,t,n,r,a){tf.subVectors(t,e),Kl.subVectors(n,e),nf.crossVectors(tf,Kl);let c=this.direction.dot(nf),u;if(c>0){if(r)return null;u=1}else if(c<0)u=-1,c=-c;else return null;ps.subVectors(this.origin,e);const d=u*this.direction.dot(Kl.crossVectors(ps,Kl));if(d<0)return null;const p=u*this.direction.dot(tf.cross(ps));if(p<0||d+p>c)return null;const g=-u*ps.dot(nf);return g<0?null:this.at(g/c,a)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class qt{constructor(e,t,n,r,a,c,u,d,p,g,v,x,T,b,C,E){qt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,r,a,c,u,d,p,g,v,x,T,b,C,E)}set(e,t,n,r,a,c,u,d,p,g,v,x,T,b,C,E){const M=this.elements;return M[0]=e,M[4]=t,M[8]=n,M[12]=r,M[1]=a,M[5]=c,M[9]=u,M[13]=d,M[2]=p,M[6]=g,M[10]=v,M[14]=x,M[3]=T,M[7]=b,M[11]=C,M[15]=E,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new qt().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,r=1/Co.setFromMatrixColumn(e,0).length(),a=1/Co.setFromMatrixColumn(e,1).length(),c=1/Co.setFromMatrixColumn(e,2).length();return t[0]=n[0]*r,t[1]=n[1]*r,t[2]=n[2]*r,t[3]=0,t[4]=n[4]*a,t[5]=n[5]*a,t[6]=n[6]*a,t[7]=0,t[8]=n[8]*c,t[9]=n[9]*c,t[10]=n[10]*c,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,r=e.y,a=e.z,c=Math.cos(n),u=Math.sin(n),d=Math.cos(r),p=Math.sin(r),g=Math.cos(a),v=Math.sin(a);if(e.order==="XYZ"){const x=c*g,T=c*v,b=u*g,C=u*v;t[0]=d*g,t[4]=-d*v,t[8]=p,t[1]=T+b*p,t[5]=x-C*p,t[9]=-u*d,t[2]=C-x*p,t[6]=b+T*p,t[10]=c*d}else if(e.order==="YXZ"){const x=d*g,T=d*v,b=p*g,C=p*v;t[0]=x+C*u,t[4]=b*u-T,t[8]=c*p,t[1]=c*v,t[5]=c*g,t[9]=-u,t[2]=T*u-b,t[6]=C+x*u,t[10]=c*d}else if(e.order==="ZXY"){const x=d*g,T=d*v,b=p*g,C=p*v;t[0]=x-C*u,t[4]=-c*v,t[8]=b+T*u,t[1]=T+b*u,t[5]=c*g,t[9]=C-x*u,t[2]=-c*p,t[6]=u,t[10]=c*d}else if(e.order==="ZYX"){const x=c*g,T=c*v,b=u*g,C=u*v;t[0]=d*g,t[4]=b*p-T,t[8]=x*p+C,t[1]=d*v,t[5]=C*p+x,t[9]=T*p-b,t[2]=-p,t[6]=u*d,t[10]=c*d}else if(e.order==="YZX"){const x=c*d,T=c*p,b=u*d,C=u*p;t[0]=d*g,t[4]=C-x*v,t[8]=b*v+T,t[1]=v,t[5]=c*g,t[9]=-u*g,t[2]=-p*g,t[6]=T*v+b,t[10]=x-C*v}else if(e.order==="XZY"){const x=c*d,T=c*p,b=u*d,C=u*p;t[0]=d*g,t[4]=-v,t[8]=p*g,t[1]=x*v+C,t[5]=c*g,t[9]=T*v-b,t[2]=b*v-T,t[6]=u*g,t[10]=C*v+x}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(yE,e,SE)}lookAt(e,t,n){const r=this.elements;return Di.subVectors(e,t),Di.lengthSq()===0&&(Di.z=1),Di.normalize(),ms.crossVectors(n,Di),ms.lengthSq()===0&&(Math.abs(n.z)===1?Di.x+=1e-4:Di.z+=1e-4,Di.normalize(),ms.crossVectors(n,Di)),ms.normalize(),$l.crossVectors(Di,ms),r[0]=ms.x,r[4]=$l.x,r[8]=Di.x,r[1]=ms.y,r[5]=$l.y,r[9]=Di.y,r[2]=ms.z,r[6]=$l.z,r[10]=Di.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,r=t.elements,a=this.elements,c=n[0],u=n[4],d=n[8],p=n[12],g=n[1],v=n[5],x=n[9],T=n[13],b=n[2],C=n[6],E=n[10],M=n[14],V=n[3],U=n[7],B=n[11],z=n[15],$=r[0],m=r[4],pe=r[8],D=r[12],X=r[1],Te=r[5],Re=r[9],xe=r[13],te=r[2],ye=r[6],we=r[10],ge=r[14],Ue=r[3],Ce=r[7],be=r[11],ne=r[15];return a[0]=c*$+u*X+d*te+p*Ue,a[4]=c*m+u*Te+d*ye+p*Ce,a[8]=c*pe+u*Re+d*we+p*be,a[12]=c*D+u*xe+d*ge+p*ne,a[1]=g*$+v*X+x*te+T*Ue,a[5]=g*m+v*Te+x*ye+T*Ce,a[9]=g*pe+v*Re+x*we+T*be,a[13]=g*D+v*xe+x*ge+T*ne,a[2]=b*$+C*X+E*te+M*Ue,a[6]=b*m+C*Te+E*ye+M*Ce,a[10]=b*pe+C*Re+E*we+M*be,a[14]=b*D+C*xe+E*ge+M*ne,a[3]=V*$+U*X+B*te+z*Ue,a[7]=V*m+U*Te+B*ye+z*Ce,a[11]=V*pe+U*Re+B*we+z*be,a[15]=V*D+U*xe+B*ge+z*ne,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],r=e[8],a=e[12],c=e[1],u=e[5],d=e[9],p=e[13],g=e[2],v=e[6],x=e[10],T=e[14],b=e[3],C=e[7],E=e[11],M=e[15];return b*(+a*d*v-r*p*v-a*u*x+n*p*x+r*u*T-n*d*T)+C*(+t*d*T-t*p*x+a*c*x-r*c*T+r*p*g-a*d*g)+E*(+t*p*v-t*u*T-a*c*v+n*c*T+a*u*g-n*p*g)+M*(-r*u*g-t*d*v+t*u*x+r*c*v-n*c*x+n*d*g)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],r=e[2],a=e[3],c=e[4],u=e[5],d=e[6],p=e[7],g=e[8],v=e[9],x=e[10],T=e[11],b=e[12],C=e[13],E=e[14],M=e[15],V=v*E*p-C*x*p+C*d*T-u*E*T-v*d*M+u*x*M,U=b*x*p-g*E*p-b*d*T+c*E*T+g*d*M-c*x*M,B=g*C*p-b*v*p+b*u*T-c*C*T-g*u*M+c*v*M,z=b*v*d-g*C*d-b*u*x+c*C*x+g*u*E-c*v*E,$=t*V+n*U+r*B+a*z;if($===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const m=1/$;return e[0]=V*m,e[1]=(C*x*a-v*E*a-C*r*T+n*E*T+v*r*M-n*x*M)*m,e[2]=(u*E*a-C*d*a+C*r*p-n*E*p-u*r*M+n*d*M)*m,e[3]=(v*d*a-u*x*a-v*r*p+n*x*p+u*r*T-n*d*T)*m,e[4]=U*m,e[5]=(g*E*a-b*x*a+b*r*T-t*E*T-g*r*M+t*x*M)*m,e[6]=(b*d*a-c*E*a-b*r*p+t*E*p+c*r*M-t*d*M)*m,e[7]=(c*x*a-g*d*a+g*r*p-t*x*p-c*r*T+t*d*T)*m,e[8]=B*m,e[9]=(b*v*a-g*C*a-b*n*T+t*C*T+g*n*M-t*v*M)*m,e[10]=(c*C*a-b*u*a+b*n*p-t*C*p-c*n*M+t*u*M)*m,e[11]=(g*u*a-c*v*a-g*n*p+t*v*p+c*n*T-t*u*T)*m,e[12]=z*m,e[13]=(g*C*r-b*v*r+b*n*x-t*C*x-g*n*E+t*v*E)*m,e[14]=(b*u*r-c*C*r-b*n*d+t*C*d+c*n*E-t*u*E)*m,e[15]=(c*v*r-g*u*r+g*n*d-t*v*d-c*n*x+t*u*x)*m,this}scale(e){const t=this.elements,n=e.x,r=e.y,a=e.z;return t[0]*=n,t[4]*=r,t[8]*=a,t[1]*=n,t[5]*=r,t[9]*=a,t[2]*=n,t[6]*=r,t[10]*=a,t[3]*=n,t[7]*=r,t[11]*=a,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,r))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),r=Math.sin(t),a=1-n,c=e.x,u=e.y,d=e.z,p=a*c,g=a*u;return this.set(p*c+n,p*u-r*d,p*d+r*u,0,p*u+r*d,g*u+n,g*d-r*c,0,p*d-r*u,g*d+r*c,a*d*d+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,r,a,c){return this.set(1,n,a,0,e,1,c,0,t,r,1,0,0,0,0,1),this}compose(e,t,n){const r=this.elements,a=t._x,c=t._y,u=t._z,d=t._w,p=a+a,g=c+c,v=u+u,x=a*p,T=a*g,b=a*v,C=c*g,E=c*v,M=u*v,V=d*p,U=d*g,B=d*v,z=n.x,$=n.y,m=n.z;return r[0]=(1-(C+M))*z,r[1]=(T+B)*z,r[2]=(b-U)*z,r[3]=0,r[4]=(T-B)*$,r[5]=(1-(x+M))*$,r[6]=(E+V)*$,r[7]=0,r[8]=(b+U)*m,r[9]=(E-V)*m,r[10]=(1-(x+C))*m,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,n){const r=this.elements;let a=Co.set(r[0],r[1],r[2]).length();const c=Co.set(r[4],r[5],r[6]).length(),u=Co.set(r[8],r[9],r[10]).length();this.determinant()<0&&(a=-a),e.x=r[12],e.y=r[13],e.z=r[14],rr.copy(this);const p=1/a,g=1/c,v=1/u;return rr.elements[0]*=p,rr.elements[1]*=p,rr.elements[2]*=p,rr.elements[4]*=g,rr.elements[5]*=g,rr.elements[6]*=g,rr.elements[8]*=v,rr.elements[9]*=v,rr.elements[10]*=v,t.setFromRotationMatrix(rr),n.x=a,n.y=c,n.z=u,this}makePerspective(e,t,n,r,a,c,u=jr){const d=this.elements,p=2*a/(t-e),g=2*a/(n-r),v=(t+e)/(t-e),x=(n+r)/(n-r);let T,b;if(u===jr)T=-(c+a)/(c-a),b=-2*c*a/(c-a);else if(u===Ac)T=-c/(c-a),b=-c*a/(c-a);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+u);return d[0]=p,d[4]=0,d[8]=v,d[12]=0,d[1]=0,d[5]=g,d[9]=x,d[13]=0,d[2]=0,d[6]=0,d[10]=T,d[14]=b,d[3]=0,d[7]=0,d[11]=-1,d[15]=0,this}makeOrthographic(e,t,n,r,a,c,u=jr){const d=this.elements,p=1/(t-e),g=1/(n-r),v=1/(c-a),x=(t+e)*p,T=(n+r)*g;let b,C;if(u===jr)b=(c+a)*v,C=-2*v;else if(u===Ac)b=a*v,C=-1*v;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+u);return d[0]=2*p,d[4]=0,d[8]=0,d[12]=-x,d[1]=0,d[5]=2*g,d[9]=0,d[13]=-T,d[2]=0,d[6]=0,d[10]=C,d[14]=-b,d[3]=0,d[7]=0,d[11]=0,d[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let r=0;r<16;r++)if(t[r]!==n[r])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const Co=new re,rr=new qt,yE=new re(0,0,0),SE=new re(1,1,1),ms=new re,$l=new re,Di=new re,Gp=new qt,kp=new Ts;class Ic{constructor(e=0,t=0,n=0,r=Ic.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,r=this._order){return this._x=e,this._y=t,this._z=n,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const r=e.elements,a=r[0],c=r[4],u=r[8],d=r[1],p=r[5],g=r[9],v=r[2],x=r[6],T=r[10];switch(t){case"XYZ":this._y=Math.asin(ni(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(-g,T),this._z=Math.atan2(-c,a)):(this._x=Math.atan2(x,p),this._z=0);break;case"YXZ":this._x=Math.asin(-ni(g,-1,1)),Math.abs(g)<.9999999?(this._y=Math.atan2(u,T),this._z=Math.atan2(d,p)):(this._y=Math.atan2(-v,a),this._z=0);break;case"ZXY":this._x=Math.asin(ni(x,-1,1)),Math.abs(x)<.9999999?(this._y=Math.atan2(-v,T),this._z=Math.atan2(-c,p)):(this._y=0,this._z=Math.atan2(d,a));break;case"ZYX":this._y=Math.asin(-ni(v,-1,1)),Math.abs(v)<.9999999?(this._x=Math.atan2(x,T),this._z=Math.atan2(d,a)):(this._x=0,this._z=Math.atan2(-c,p));break;case"YZX":this._z=Math.asin(ni(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(-g,p),this._y=Math.atan2(-v,a)):(this._x=0,this._y=Math.atan2(u,T));break;case"XZY":this._z=Math.asin(-ni(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(x,p),this._y=Math.atan2(u,a)):(this._x=Math.atan2(-g,T),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return Gp.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Gp,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return kp.setFromEuler(this),this.setFromQuaternion(kp,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Ic.DEFAULT_ORDER="XYZ";class ug{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let ME=0;const Vp=new re,Lo=new Ts,kr=new qt,Zl=new re,Ba=new re,EE=new re,TE=new Ts,Wp=new re(1,0,0),Xp=new re(0,1,0),qp=new re(0,0,1),AE={type:"added"},bE={type:"removed"};class Tn extends na{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:ME++}),this.uuid=ar(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Tn.DEFAULT_UP.clone();const e=new re,t=new Ic,n=new Ts,r=new re(1,1,1);function a(){n.setFromEuler(t,!1)}function c(){t.setFromQuaternion(n,void 0,!1)}t._onChange(a),n._onChange(c),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new qt},normalMatrix:{value:new Xt}}),this.matrix=new qt,this.matrixWorld=new qt,this.matrixAutoUpdate=Tn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.matrixWorldAutoUpdate=Tn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.layers=new ug,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Lo.setFromAxisAngle(e,t),this.quaternion.multiply(Lo),this}rotateOnWorldAxis(e,t){return Lo.setFromAxisAngle(e,t),this.quaternion.premultiply(Lo),this}rotateX(e){return this.rotateOnAxis(Wp,e)}rotateY(e){return this.rotateOnAxis(Xp,e)}rotateZ(e){return this.rotateOnAxis(qp,e)}translateOnAxis(e,t){return Vp.copy(e).applyQuaternion(this.quaternion),this.position.add(Vp.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Wp,e)}translateY(e){return this.translateOnAxis(Xp,e)}translateZ(e){return this.translateOnAxis(qp,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(kr.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Zl.copy(e):Zl.set(e,t,n);const r=this.parent;this.updateWorldMatrix(!0,!1),Ba.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?kr.lookAt(Ba,Zl,this.up):kr.lookAt(Zl,Ba,this.up),this.quaternion.setFromRotationMatrix(kr),r&&(kr.extractRotation(r.matrixWorld),Lo.setFromRotationMatrix(kr),this.quaternion.premultiply(Lo.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(AE)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(bE)),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),kr.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),kr.multiply(e.parent.matrixWorld)),e.applyMatrix4(kr),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,r=this.children.length;n<r;n++){const c=this.children[n].getObjectByProperty(e,t);if(c!==void 0)return c}}getObjectsByProperty(e,t){let n=[];this[e]===t&&n.push(this);for(let r=0,a=this.children.length;r<a;r++){const c=this.children[r].getObjectsByProperty(e,t);c.length>0&&(n=n.concat(c))}return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ba,e,EE),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ba,TE,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,r=t.length;n<r;n++){const a=t[n];(a.matrixWorldAutoUpdate===!0||e===!0)&&a.updateMatrixWorld(e)}}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.matrixWorldAutoUpdate===!0&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){const r=this.children;for(let a=0,c=r.length;a<c;a++){const u=r[a];u.matrixWorldAutoUpdate===!0&&u.updateWorldMatrix(!1,!0)}}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON()));function a(u,d){return u[d.uuid]===void 0&&(u[d.uuid]=d.toJSON(e)),d.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=a(e.geometries,this.geometry);const u=this.geometry.parameters;if(u!==void 0&&u.shapes!==void 0){const d=u.shapes;if(Array.isArray(d))for(let p=0,g=d.length;p<g;p++){const v=d[p];a(e.shapes,v)}else a(e.shapes,d)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(a(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const u=[];for(let d=0,p=this.material.length;d<p;d++)u.push(a(e.materials,this.material[d]));r.material=u}else r.material=a(e.materials,this.material);if(this.children.length>0){r.children=[];for(let u=0;u<this.children.length;u++)r.children.push(this.children[u].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let u=0;u<this.animations.length;u++){const d=this.animations[u];r.animations.push(a(e.animations,d))}}if(t){const u=c(e.geometries),d=c(e.materials),p=c(e.textures),g=c(e.images),v=c(e.shapes),x=c(e.skeletons),T=c(e.animations),b=c(e.nodes);u.length>0&&(n.geometries=u),d.length>0&&(n.materials=d),p.length>0&&(n.textures=p),g.length>0&&(n.images=g),v.length>0&&(n.shapes=v),x.length>0&&(n.skeletons=x),T.length>0&&(n.animations=T),b.length>0&&(n.nodes=b)}return n.object=r,n;function c(u){const d=[];for(const p in u){const g=u[p];delete g.metadata,d.push(g)}return d}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const r=e.children[n];this.add(r.clone())}return this}}Tn.DEFAULT_UP=new re(0,1,0);Tn.DEFAULT_MATRIX_AUTO_UPDATE=!0;Tn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const sr=new re,Vr=new re,rf=new re,Wr=new re,Po=new re,Io=new re,Yp=new re,sf=new re,of=new re,af=new re;let Jl=!1;class or{constructor(e=new re,t=new re,n=new re){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,r){r.subVectors(n,t),sr.subVectors(e,t),r.cross(sr);const a=r.lengthSq();return a>0?r.multiplyScalar(1/Math.sqrt(a)):r.set(0,0,0)}static getBarycoord(e,t,n,r,a){sr.subVectors(r,t),Vr.subVectors(n,t),rf.subVectors(e,t);const c=sr.dot(sr),u=sr.dot(Vr),d=sr.dot(rf),p=Vr.dot(Vr),g=Vr.dot(rf),v=c*p-u*u;if(v===0)return a.set(-2,-1,-1);const x=1/v,T=(p*d-u*g)*x,b=(c*g-u*d)*x;return a.set(1-T-b,b,T)}static containsPoint(e,t,n,r){return this.getBarycoord(e,t,n,r,Wr),Wr.x>=0&&Wr.y>=0&&Wr.x+Wr.y<=1}static getUV(e,t,n,r,a,c,u,d){return Jl===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),Jl=!0),this.getInterpolation(e,t,n,r,a,c,u,d)}static getInterpolation(e,t,n,r,a,c,u,d){return this.getBarycoord(e,t,n,r,Wr),d.setScalar(0),d.addScaledVector(a,Wr.x),d.addScaledVector(c,Wr.y),d.addScaledVector(u,Wr.z),d}static isFrontFacing(e,t,n,r){return sr.subVectors(n,t),Vr.subVectors(e,t),sr.cross(Vr).dot(r)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,r){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,n,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return sr.subVectors(this.c,this.b),Vr.subVectors(this.a,this.b),sr.cross(Vr).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return or.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return or.getBarycoord(e,this.a,this.b,this.c,t)}getUV(e,t,n,r,a){return Jl===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),Jl=!0),or.getInterpolation(e,this.a,this.b,this.c,t,n,r,a)}getInterpolation(e,t,n,r,a){return or.getInterpolation(e,this.a,this.b,this.c,t,n,r,a)}containsPoint(e){return or.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return or.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,r=this.b,a=this.c;let c,u;Po.subVectors(r,n),Io.subVectors(a,n),sf.subVectors(e,n);const d=Po.dot(sf),p=Io.dot(sf);if(d<=0&&p<=0)return t.copy(n);of.subVectors(e,r);const g=Po.dot(of),v=Io.dot(of);if(g>=0&&v<=g)return t.copy(r);const x=d*v-g*p;if(x<=0&&d>=0&&g<=0)return c=d/(d-g),t.copy(n).addScaledVector(Po,c);af.subVectors(e,a);const T=Po.dot(af),b=Io.dot(af);if(b>=0&&T<=b)return t.copy(a);const C=T*p-d*b;if(C<=0&&p>=0&&b<=0)return u=p/(p-b),t.copy(n).addScaledVector(Io,u);const E=g*b-T*v;if(E<=0&&v-g>=0&&T-b>=0)return Yp.subVectors(a,r),u=(v-g)/(v-g+(T-b)),t.copy(r).addScaledVector(Yp,u);const M=1/(E+C+x);return c=C*M,u=x*M,t.copy(n).addScaledVector(Po,c).addScaledVector(Io,u)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const fg={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},gs={h:0,s:0,l:0},Ql={h:0,s:0,l:0};function lf(s,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?s+(e-s)*6*t:t<1/2?e:t<2/3?s+(e-s)*6*(2/3-t):s}class Rt{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=bn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,an.toWorkingColorSpace(this,t),this}setRGB(e,t,n,r=an.workingColorSpace){return this.r=e,this.g=t,this.b=n,an.toWorkingColorSpace(this,r),this}setHSL(e,t,n,r=an.workingColorSpace){if(e=Jf(e,1),t=ni(t,0,1),n=ni(n,0,1),t===0)this.r=this.g=this.b=n;else{const a=n<=.5?n*(1+t):n+t-n*t,c=2*n-a;this.r=lf(c,a,e+1/3),this.g=lf(c,a,e),this.b=lf(c,a,e-1/3)}return an.toWorkingColorSpace(this,r),this}setStyle(e,t=bn){function n(a){a!==void 0&&parseFloat(a)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let a;const c=r[1],u=r[2];switch(c){case"rgb":case"rgba":if(a=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(u))return n(a[4]),this.setRGB(Math.min(255,parseInt(a[1],10))/255,Math.min(255,parseInt(a[2],10))/255,Math.min(255,parseInt(a[3],10))/255,t);if(a=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(u))return n(a[4]),this.setRGB(Math.min(100,parseInt(a[1],10))/100,Math.min(100,parseInt(a[2],10))/100,Math.min(100,parseInt(a[3],10))/100,t);break;case"hsl":case"hsla":if(a=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(u))return n(a[4]),this.setHSL(parseFloat(a[1])/360,parseFloat(a[2])/100,parseFloat(a[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const a=r[1],c=a.length;if(c===3)return this.setRGB(parseInt(a.charAt(0),16)/15,parseInt(a.charAt(1),16)/15,parseInt(a.charAt(2),16)/15,t);if(c===6)return this.setHex(parseInt(a,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=bn){const n=fg[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Wo(e.r),this.g=Wo(e.g),this.b=Wo(e.b),this}copyLinearToSRGB(e){return this.r=Ku(e.r),this.g=Ku(e.g),this.b=Ku(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=bn){return an.fromWorkingColorSpace(ti.copy(this),e),Math.round(ni(ti.r*255,0,255))*65536+Math.round(ni(ti.g*255,0,255))*256+Math.round(ni(ti.b*255,0,255))}getHexString(e=bn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=an.workingColorSpace){an.fromWorkingColorSpace(ti.copy(this),t);const n=ti.r,r=ti.g,a=ti.b,c=Math.max(n,r,a),u=Math.min(n,r,a);let d,p;const g=(u+c)/2;if(u===c)d=0,p=0;else{const v=c-u;switch(p=g<=.5?v/(c+u):v/(2-c-u),c){case n:d=(r-a)/v+(r<a?6:0);break;case r:d=(a-n)/v+2;break;case a:d=(n-r)/v+4;break}d/=6}return e.h=d,e.s=p,e.l=g,e}getRGB(e,t=an.workingColorSpace){return an.fromWorkingColorSpace(ti.copy(this),t),e.r=ti.r,e.g=ti.g,e.b=ti.b,e}getStyle(e=bn){an.fromWorkingColorSpace(ti.copy(this),e);const t=ti.r,n=ti.g,r=ti.b;return e!==bn?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(r*255)})`}offsetHSL(e,t,n){return this.getHSL(gs),this.setHSL(gs.h+e,gs.s+t,gs.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(gs),e.getHSL(Ql);const n=qa(gs.h,Ql.h,t),r=qa(gs.s,Ql.s,t),a=qa(gs.l,Ql.l,t);return this.setHSL(n,r,a),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,r=this.b,a=e.elements;return this.r=a[0]*t+a[3]*n+a[6]*r,this.g=a[1]*t+a[4]*n+a[7]*r,this.b=a[2]*t+a[5]*n+a[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const ti=new Rt;Rt.NAMES=fg;let wE=0;class Sr extends na{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:wE++}),this.uuid=ar(),this.name="",this.type="Material",this.blending=Vo,this.side=$r,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Df,this.blendDst=Nf,this.blendEquation=js,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Rt(0,0,0),this.blendAlpha=0,this.depthFunc=yc,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Np,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=To,this.stencilZFail=To,this.stencilZPass=To,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(n):r&&r.isVector3&&n&&n.isVector3?r.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Vo&&(n.blending=this.blending),this.side!==$r&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Df&&(n.blendSrc=this.blendSrc),this.blendDst!==Nf&&(n.blendDst=this.blendDst),this.blendEquation!==js&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==yc&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Np&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==To&&(n.stencilFail=this.stencilFail),this.stencilZFail!==To&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==To&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function r(a){const c=[];for(const u in a){const d=a[u];delete d.metadata,c.push(d)}return c}if(t){const a=r(e.textures),c=r(e.images);a.length>0&&(n.textures=a),c.length>0&&(n.images=c)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const r=t.length;n=new Array(r);for(let a=0;a!==r;++a)n[a]=t[a].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class $s extends Sr{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Rt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=Ym,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Dn=new re,ec=new Qt;class hi{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=Hf,this.updateRange={offset:0,count:-1},this.gpuType=Yr,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let r=0,a=this.itemSize;r<a;r++)this.array[e+r]=t.array[n+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)ec.fromBufferAttribute(this,t),ec.applyMatrix3(e),this.setXY(t,ec.x,ec.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)Dn.fromBufferAttribute(this,t),Dn.applyMatrix3(e),this.setXYZ(t,Dn.x,Dn.y,Dn.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)Dn.fromBufferAttribute(this,t),Dn.applyMatrix4(e),this.setXYZ(t,Dn.x,Dn.y,Dn.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Dn.fromBufferAttribute(this,t),Dn.applyNormalMatrix(e),this.setXYZ(t,Dn.x,Dn.y,Dn.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Dn.fromBufferAttribute(this,t),Dn.transformDirection(e),this.setXYZ(t,Dn.x,Dn.y,Dn.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=yr(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=fn(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=yr(t,this.array)),t}setX(e,t){return this.normalized&&(t=fn(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=yr(t,this.array)),t}setY(e,t){return this.normalized&&(t=fn(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=yr(t,this.array)),t}setZ(e,t){return this.normalized&&(t=fn(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=yr(t,this.array)),t}setW(e,t){return this.normalized&&(t=fn(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=fn(t,this.array),n=fn(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,r){return e*=this.itemSize,this.normalized&&(t=fn(t,this.array),n=fn(n,this.array),r=fn(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this}setXYZW(e,t,n,r,a){return e*=this.itemSize,this.normalized&&(t=fn(t,this.array),n=fn(n,this.array),r=fn(r,this.array),a=fn(a,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this.array[e+3]=a,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Hf&&(e.usage=this.usage),(this.updateRange.offset!==0||this.updateRange.count!==-1)&&(e.updateRange=this.updateRange),e}}class hg extends hi{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class dg extends hi{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class Kr extends hi{constructor(e,t,n){super(new Float32Array(e),t,n)}}let RE=0;const Wi=new qt,cf=new Tn,Do=new re,Ni=new Zr,Ha=new Zr,Wn=new re;class Er extends na{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:RE++}),this.uuid=ar(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(og(e)?dg:hg)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const a=new Xt().getNormalMatrix(e);n.applyNormalMatrix(a),n.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Wi.makeRotationFromQuaternion(e),this.applyMatrix4(Wi),this}rotateX(e){return Wi.makeRotationX(e),this.applyMatrix4(Wi),this}rotateY(e){return Wi.makeRotationY(e),this.applyMatrix4(Wi),this}rotateZ(e){return Wi.makeRotationZ(e),this.applyMatrix4(Wi),this}translate(e,t,n){return Wi.makeTranslation(e,t,n),this.applyMatrix4(Wi),this}scale(e,t,n){return Wi.makeScale(e,t,n),this.applyMatrix4(Wi),this}lookAt(e){return cf.lookAt(e),cf.updateMatrix(),this.applyMatrix4(cf.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Do).negate(),this.translate(Do.x,Do.y,Do.z),this}setFromPoints(e){const t=[];for(let n=0,r=e.length;n<r;n++){const a=e[n];t.push(a.x,a.y,a.z||0)}return this.setAttribute("position",new Kr(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Zr);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new re(-1/0,-1/0,-1/0),new re(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,r=t.length;n<r;n++){const a=t[n];Ni.setFromBufferAttribute(a),this.morphTargetsRelative?(Wn.addVectors(this.boundingBox.min,Ni.min),this.boundingBox.expandByPoint(Wn),Wn.addVectors(this.boundingBox.max,Ni.max),this.boundingBox.expandByPoint(Wn)):(this.boundingBox.expandByPoint(Ni.min),this.boundingBox.expandByPoint(Ni.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Mr);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new re,1/0);return}if(e){const n=this.boundingSphere.center;if(Ni.setFromBufferAttribute(e),t)for(let a=0,c=t.length;a<c;a++){const u=t[a];Ha.setFromBufferAttribute(u),this.morphTargetsRelative?(Wn.addVectors(Ni.min,Ha.min),Ni.expandByPoint(Wn),Wn.addVectors(Ni.max,Ha.max),Ni.expandByPoint(Wn)):(Ni.expandByPoint(Ha.min),Ni.expandByPoint(Ha.max))}Ni.getCenter(n);let r=0;for(let a=0,c=e.count;a<c;a++)Wn.fromBufferAttribute(e,a),r=Math.max(r,n.distanceToSquared(Wn));if(t)for(let a=0,c=t.length;a<c;a++){const u=t[a],d=this.morphTargetsRelative;for(let p=0,g=u.count;p<g;p++)Wn.fromBufferAttribute(u,p),d&&(Do.fromBufferAttribute(e,p),Wn.add(Do)),r=Math.max(r,n.distanceToSquared(Wn))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.array,r=t.position.array,a=t.normal.array,c=t.uv.array,u=r.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new hi(new Float32Array(4*u),4));const d=this.getAttribute("tangent").array,p=[],g=[];for(let X=0;X<u;X++)p[X]=new re,g[X]=new re;const v=new re,x=new re,T=new re,b=new Qt,C=new Qt,E=new Qt,M=new re,V=new re;function U(X,Te,Re){v.fromArray(r,X*3),x.fromArray(r,Te*3),T.fromArray(r,Re*3),b.fromArray(c,X*2),C.fromArray(c,Te*2),E.fromArray(c,Re*2),x.sub(v),T.sub(v),C.sub(b),E.sub(b);const xe=1/(C.x*E.y-E.x*C.y);isFinite(xe)&&(M.copy(x).multiplyScalar(E.y).addScaledVector(T,-C.y).multiplyScalar(xe),V.copy(T).multiplyScalar(C.x).addScaledVector(x,-E.x).multiplyScalar(xe),p[X].add(M),p[Te].add(M),p[Re].add(M),g[X].add(V),g[Te].add(V),g[Re].add(V))}let B=this.groups;B.length===0&&(B=[{start:0,count:n.length}]);for(let X=0,Te=B.length;X<Te;++X){const Re=B[X],xe=Re.start,te=Re.count;for(let ye=xe,we=xe+te;ye<we;ye+=3)U(n[ye+0],n[ye+1],n[ye+2])}const z=new re,$=new re,m=new re,pe=new re;function D(X){m.fromArray(a,X*3),pe.copy(m);const Te=p[X];z.copy(Te),z.sub(m.multiplyScalar(m.dot(Te))).normalize(),$.crossVectors(pe,Te);const xe=$.dot(g[X])<0?-1:1;d[X*4]=z.x,d[X*4+1]=z.y,d[X*4+2]=z.z,d[X*4+3]=xe}for(let X=0,Te=B.length;X<Te;++X){const Re=B[X],xe=Re.start,te=Re.count;for(let ye=xe,we=xe+te;ye<we;ye+=3)D(n[ye+0]),D(n[ye+1]),D(n[ye+2])}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new hi(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let x=0,T=n.count;x<T;x++)n.setXYZ(x,0,0,0);const r=new re,a=new re,c=new re,u=new re,d=new re,p=new re,g=new re,v=new re;if(e)for(let x=0,T=e.count;x<T;x+=3){const b=e.getX(x+0),C=e.getX(x+1),E=e.getX(x+2);r.fromBufferAttribute(t,b),a.fromBufferAttribute(t,C),c.fromBufferAttribute(t,E),g.subVectors(c,a),v.subVectors(r,a),g.cross(v),u.fromBufferAttribute(n,b),d.fromBufferAttribute(n,C),p.fromBufferAttribute(n,E),u.add(g),d.add(g),p.add(g),n.setXYZ(b,u.x,u.y,u.z),n.setXYZ(C,d.x,d.y,d.z),n.setXYZ(E,p.x,p.y,p.z)}else for(let x=0,T=t.count;x<T;x+=3)r.fromBufferAttribute(t,x+0),a.fromBufferAttribute(t,x+1),c.fromBufferAttribute(t,x+2),g.subVectors(c,a),v.subVectors(r,a),g.cross(v),n.setXYZ(x+0,g.x,g.y,g.z),n.setXYZ(x+1,g.x,g.y,g.z),n.setXYZ(x+2,g.x,g.y,g.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)Wn.fromBufferAttribute(e,t),Wn.normalize(),e.setXYZ(t,Wn.x,Wn.y,Wn.z)}toNonIndexed(){function e(u,d){const p=u.array,g=u.itemSize,v=u.normalized,x=new p.constructor(d.length*g);let T=0,b=0;for(let C=0,E=d.length;C<E;C++){u.isInterleavedBufferAttribute?T=d[C]*u.data.stride+u.offset:T=d[C]*g;for(let M=0;M<g;M++)x[b++]=p[T++]}return new hi(x,g,v)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Er,n=this.index.array,r=this.attributes;for(const u in r){const d=r[u],p=e(d,n);t.setAttribute(u,p)}const a=this.morphAttributes;for(const u in a){const d=[],p=a[u];for(let g=0,v=p.length;g<v;g++){const x=p[g],T=e(x,n);d.push(T)}t.morphAttributes[u]=d}t.morphTargetsRelative=this.morphTargetsRelative;const c=this.groups;for(let u=0,d=c.length;u<d;u++){const p=c[u];t.addGroup(p.start,p.count,p.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const d=this.parameters;for(const p in d)d[p]!==void 0&&(e[p]=d[p]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const d in n){const p=n[d];e.data.attributes[d]=p.toJSON(e.data)}const r={};let a=!1;for(const d in this.morphAttributes){const p=this.morphAttributes[d],g=[];for(let v=0,x=p.length;v<x;v++){const T=p[v];g.push(T.toJSON(e.data))}g.length>0&&(r[d]=g,a=!0)}a&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const c=this.groups;c.length>0&&(e.data.groups=JSON.parse(JSON.stringify(c)));const u=this.boundingSphere;return u!==null&&(e.data.boundingSphere={center:u.center.toArray(),radius:u.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone(t));const r=e.attributes;for(const p in r){const g=r[p];this.setAttribute(p,g.clone(t))}const a=e.morphAttributes;for(const p in a){const g=[],v=a[p];for(let x=0,T=v.length;x<T;x++)g.push(v[x].clone(t));this.morphAttributes[p]=g}this.morphTargetsRelative=e.morphTargetsRelative;const c=e.groups;for(let p=0,g=c.length;p<g;p++){const v=c[p];this.addGroup(v.start,v.count,v.materialIndex)}const u=e.boundingBox;u!==null&&(this.boundingBox=u.clone());const d=e.boundingSphere;return d!==null&&(this.boundingSphere=d.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const jp=new qt,ks=new Pc,tc=new Mr,Kp=new re,No=new re,Uo=new re,Oo=new re,uf=new re,nc=new re,ic=new Qt,rc=new Qt,sc=new Qt,$p=new re,Zp=new re,Jp=new re,oc=new re,ac=new re;class Ki extends Tn{constructor(e=new Er,t=new $s){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const r=t[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let a=0,c=r.length;a<c;a++){const u=r[a].name||String(a);this.morphTargetInfluences.push(0),this.morphTargetDictionary[u]=a}}}}getVertexPosition(e,t){const n=this.geometry,r=n.attributes.position,a=n.morphAttributes.position,c=n.morphTargetsRelative;t.fromBufferAttribute(r,e);const u=this.morphTargetInfluences;if(a&&u){nc.set(0,0,0);for(let d=0,p=a.length;d<p;d++){const g=u[d],v=a[d];g!==0&&(uf.fromBufferAttribute(v,e),c?nc.addScaledVector(uf,g):nc.addScaledVector(uf.sub(t),g))}t.add(nc)}return t}raycast(e,t){const n=this.geometry,r=this.material,a=this.matrixWorld;r!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),tc.copy(n.boundingSphere),tc.applyMatrix4(a),ks.copy(e.ray).recast(e.near),!(tc.containsPoint(ks.origin)===!1&&(ks.intersectSphere(tc,Kp)===null||ks.origin.distanceToSquared(Kp)>(e.far-e.near)**2))&&(jp.copy(a).invert(),ks.copy(e.ray).applyMatrix4(jp),!(n.boundingBox!==null&&ks.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,ks)))}_computeIntersections(e,t,n){let r;const a=this.geometry,c=this.material,u=a.index,d=a.attributes.position,p=a.attributes.uv,g=a.attributes.uv1,v=a.attributes.normal,x=a.groups,T=a.drawRange;if(u!==null)if(Array.isArray(c))for(let b=0,C=x.length;b<C;b++){const E=x[b],M=c[E.materialIndex],V=Math.max(E.start,T.start),U=Math.min(u.count,Math.min(E.start+E.count,T.start+T.count));for(let B=V,z=U;B<z;B+=3){const $=u.getX(B),m=u.getX(B+1),pe=u.getX(B+2);r=lc(this,M,e,n,p,g,v,$,m,pe),r&&(r.faceIndex=Math.floor(B/3),r.face.materialIndex=E.materialIndex,t.push(r))}}else{const b=Math.max(0,T.start),C=Math.min(u.count,T.start+T.count);for(let E=b,M=C;E<M;E+=3){const V=u.getX(E),U=u.getX(E+1),B=u.getX(E+2);r=lc(this,c,e,n,p,g,v,V,U,B),r&&(r.faceIndex=Math.floor(E/3),t.push(r))}}else if(d!==void 0)if(Array.isArray(c))for(let b=0,C=x.length;b<C;b++){const E=x[b],M=c[E.materialIndex],V=Math.max(E.start,T.start),U=Math.min(d.count,Math.min(E.start+E.count,T.start+T.count));for(let B=V,z=U;B<z;B+=3){const $=B,m=B+1,pe=B+2;r=lc(this,M,e,n,p,g,v,$,m,pe),r&&(r.faceIndex=Math.floor(B/3),r.face.materialIndex=E.materialIndex,t.push(r))}}else{const b=Math.max(0,T.start),C=Math.min(d.count,T.start+T.count);for(let E=b,M=C;E<M;E+=3){const V=E,U=E+1,B=E+2;r=lc(this,c,e,n,p,g,v,V,U,B),r&&(r.faceIndex=Math.floor(E/3),t.push(r))}}}}function CE(s,e,t,n,r,a,c,u){let d;if(e.side===Ei?d=n.intersectTriangle(c,a,r,!0,u):d=n.intersectTriangle(r,a,c,e.side===$r,u),d===null)return null;ac.copy(u),ac.applyMatrix4(s.matrixWorld);const p=t.ray.origin.distanceTo(ac);return p<t.near||p>t.far?null:{distance:p,point:ac.clone(),object:s}}function lc(s,e,t,n,r,a,c,u,d,p){s.getVertexPosition(u,No),s.getVertexPosition(d,Uo),s.getVertexPosition(p,Oo);const g=CE(s,e,t,n,No,Uo,Oo,oc);if(g){r&&(ic.fromBufferAttribute(r,u),rc.fromBufferAttribute(r,d),sc.fromBufferAttribute(r,p),g.uv=or.getInterpolation(oc,No,Uo,Oo,ic,rc,sc,new Qt)),a&&(ic.fromBufferAttribute(a,u),rc.fromBufferAttribute(a,d),sc.fromBufferAttribute(a,p),g.uv1=or.getInterpolation(oc,No,Uo,Oo,ic,rc,sc,new Qt),g.uv2=g.uv1),c&&($p.fromBufferAttribute(c,u),Zp.fromBufferAttribute(c,d),Jp.fromBufferAttribute(c,p),g.normal=or.getInterpolation(oc,No,Uo,Oo,$p,Zp,Jp,new re),g.normal.dot(n.direction)>0&&g.normal.multiplyScalar(-1));const v={a:u,b:d,c:p,normal:new re,materialIndex:0};or.getNormal(No,Uo,Oo,v.normal),g.face=v}return g}class Ja extends Er{constructor(e=1,t=1,n=1,r=1,a=1,c=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:r,heightSegments:a,depthSegments:c};const u=this;r=Math.floor(r),a=Math.floor(a),c=Math.floor(c);const d=[],p=[],g=[],v=[];let x=0,T=0;b("z","y","x",-1,-1,n,t,e,c,a,0),b("z","y","x",1,-1,n,t,-e,c,a,1),b("x","z","y",1,1,e,n,t,r,c,2),b("x","z","y",1,-1,e,n,-t,r,c,3),b("x","y","z",1,-1,e,t,n,r,a,4),b("x","y","z",-1,-1,e,t,-n,r,a,5),this.setIndex(d),this.setAttribute("position",new Kr(p,3)),this.setAttribute("normal",new Kr(g,3)),this.setAttribute("uv",new Kr(v,2));function b(C,E,M,V,U,B,z,$,m,pe,D){const X=B/m,Te=z/pe,Re=B/2,xe=z/2,te=$/2,ye=m+1,we=pe+1;let ge=0,Ue=0;const Ce=new re;for(let be=0;be<we;be++){const ne=be*Te-xe;for(let me=0;me<ye;me++){const We=me*X-Re;Ce[C]=We*V,Ce[E]=ne*U,Ce[M]=te,p.push(Ce.x,Ce.y,Ce.z),Ce[C]=0,Ce[E]=0,Ce[M]=$>0?1:-1,g.push(Ce.x,Ce.y,Ce.z),v.push(me/m),v.push(1-be/pe),ge+=1}}for(let be=0;be<pe;be++)for(let ne=0;ne<m;ne++){const me=x+ne+ye*be,We=x+ne+ye*(be+1),Ye=x+(ne+1)+ye*(be+1),je=x+(ne+1)+ye*be;d.push(me,We,je),d.push(We,Ye,je),Ue+=6}u.addGroup(T,Ue,D),T+=Ue,x+=ge}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ja(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Jo(s){const e={};for(const t in s){e[t]={};for(const n in s[t]){const r=s[t][n];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=r.clone():Array.isArray(r)?e[t][n]=r.slice():e[t][n]=r}}return e}function ui(s){const e={};for(let t=0;t<s.length;t++){const n=Jo(s[t]);for(const r in n)e[r]=n[r]}return e}function LE(s){const e=[];for(let t=0;t<s.length;t++)e.push(s[t].clone());return e}function pg(s){return s.getRenderTarget()===null?s.outputColorSpace:an.workingColorSpace}const PE={clone:Jo,merge:ui};var IE=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,DE=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class io extends Sr{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=IE,this.fragmentShader=DE,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Jo(e.uniforms),this.uniformsGroups=LE(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const r in this.uniforms){const c=this.uniforms[r].value;c&&c.isTexture?t.uniforms[r]={type:"t",value:c.toJSON(e).uuid}:c&&c.isColor?t.uniforms[r]={type:"c",value:c.getHex()}:c&&c.isVector2?t.uniforms[r]={type:"v2",value:c.toArray()}:c&&c.isVector3?t.uniforms[r]={type:"v3",value:c.toArray()}:c&&c.isVector4?t.uniforms[r]={type:"v4",value:c.toArray()}:c&&c.isMatrix3?t.uniforms[r]={type:"m3",value:c.toArray()}:c&&c.isMatrix4?t.uniforms[r]={type:"m4",value:c.toArray()}:t.uniforms[r]={value:c}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const r in this.extensions)this.extensions[r]===!0&&(n[r]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class mg extends Tn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new qt,this.projectionMatrix=new qt,this.projectionMatrixInverse=new qt,this.coordinateSystem=jr}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}class fi extends mg{constructor(e=50,t=1,n=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Zo*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Xa*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Zo*2*Math.atan(Math.tan(Xa*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,t,n,r,a,c){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=a,this.view.height=c,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Xa*.5*this.fov)/this.zoom,n=2*t,r=this.aspect*n,a=-.5*r;const c=this.view;if(this.view!==null&&this.view.enabled){const d=c.fullWidth,p=c.fullHeight;a+=c.offsetX*r/d,t-=c.offsetY*n/p,r*=c.width/d,n*=c.height/p}const u=this.filmOffset;u!==0&&(a+=e*u/this.getFilmWidth()),this.projectionMatrix.makePerspective(a,a+r,t,t-n,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const Fo=-90,Bo=1;class NE extends Tn{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new fi(Fo,Bo,e,t);r.layers=this.layers,this.add(r);const a=new fi(Fo,Bo,e,t);a.layers=this.layers,this.add(a);const c=new fi(Fo,Bo,e,t);c.layers=this.layers,this.add(c);const u=new fi(Fo,Bo,e,t);u.layers=this.layers,this.add(u);const d=new fi(Fo,Bo,e,t);d.layers=this.layers,this.add(d);const p=new fi(Fo,Bo,e,t);p.layers=this.layers,this.add(p)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,r,a,c,u,d]=t;for(const p of t)this.remove(p);if(e===jr)n.up.set(0,1,0),n.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),a.up.set(0,0,-1),a.lookAt(0,1,0),c.up.set(0,0,1),c.lookAt(0,-1,0),u.up.set(0,1,0),u.lookAt(0,0,1),d.up.set(0,1,0),d.lookAt(0,0,-1);else if(e===Ac)n.up.set(0,-1,0),n.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),a.up.set(0,0,1),a.lookAt(0,1,0),c.up.set(0,0,-1),c.lookAt(0,-1,0),u.up.set(0,-1,0),u.lookAt(0,0,1),d.up.set(0,-1,0),d.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const p of t)this.add(p),p.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[a,c,u,d,p,g]=this.children,v=e.getRenderTarget(),x=e.getActiveCubeFace(),T=e.getActiveMipmapLevel(),b=e.xr.enabled;e.xr.enabled=!1;const C=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,r),e.render(t,a),e.setRenderTarget(n,1,r),e.render(t,c),e.setRenderTarget(n,2,r),e.render(t,u),e.setRenderTarget(n,3,r),e.render(t,d),e.setRenderTarget(n,4,r),e.render(t,p),n.texture.generateMipmaps=C,e.setRenderTarget(n,5,r),e.render(t,g),e.setRenderTarget(v,x,T),e.xr.enabled=b,n.texture.needsPMREMUpdate=!0}}class gg extends jn{constructor(e,t,n,r,a,c,u,d,p,g){e=e!==void 0?e:[],t=t!==void 0?t:qo,super(e,t,n,r,a,c,u,d,p,g),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class UE extends no{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},r=[n,n,n,n,n,n];t.encoding!==void 0&&(Ya("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),t.colorSpace=t.encoding===eo?bn:ji),this.texture=new gg(r,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:Mi}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},r=new Ja(5,5,5),a=new io({name:"CubemapFromEquirect",uniforms:Jo(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Ei,blending:Ss});a.uniforms.tEquirect.value=t;const c=new Ki(r,a),u=t.minFilter;return t.minFilter===to&&(t.minFilter=Mi),new NE(1,10,this).update(e,c),t.minFilter=u,c.geometry.dispose(),c.material.dispose(),this}clear(e,t,n,r){const a=e.getRenderTarget();for(let c=0;c<6;c++)e.setRenderTarget(this,c),e.clear(t,n,r);e.setRenderTarget(a)}}const ff=new re,OE=new re,FE=new Xt;class Xs{constructor(e=new re(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,r){return this.normal.set(e,t,n),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const r=ff.subVectors(n,t).cross(OE.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const n=e.delta(ff),r=this.normal.dot(n);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const a=-(e.start.dot(this.normal)+this.constant)/r;return a<0||a>1?null:t.copy(e.start).addScaledVector(n,a)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||FE.getNormalMatrix(e),r=this.coplanarPoint(ff).applyMatrix4(e),a=this.normal.applyMatrix3(n).normalize();return this.constant=-r.dot(a),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Vs=new Mr,cc=new re;class Qf{constructor(e=new Xs,t=new Xs,n=new Xs,r=new Xs,a=new Xs,c=new Xs){this.planes=[e,t,n,r,a,c]}set(e,t,n,r,a,c){const u=this.planes;return u[0].copy(e),u[1].copy(t),u[2].copy(n),u[3].copy(r),u[4].copy(a),u[5].copy(c),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=jr){const n=this.planes,r=e.elements,a=r[0],c=r[1],u=r[2],d=r[3],p=r[4],g=r[5],v=r[6],x=r[7],T=r[8],b=r[9],C=r[10],E=r[11],M=r[12],V=r[13],U=r[14],B=r[15];if(n[0].setComponents(d-a,x-p,E-T,B-M).normalize(),n[1].setComponents(d+a,x+p,E+T,B+M).normalize(),n[2].setComponents(d+c,x+g,E+b,B+V).normalize(),n[3].setComponents(d-c,x-g,E-b,B-V).normalize(),n[4].setComponents(d-u,x-v,E-C,B-U).normalize(),t===jr)n[5].setComponents(d+u,x+v,E+C,B+U).normalize();else if(t===Ac)n[5].setComponents(u,v,C,U).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Vs.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Vs.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Vs)}intersectsSprite(e){return Vs.center.set(0,0,0),Vs.radius=.7071067811865476,Vs.applyMatrix4(e.matrixWorld),this.intersectsSphere(Vs)}intersectsSphere(e){const t=this.planes,n=e.center,r=-e.radius;for(let a=0;a<6;a++)if(t[a].distanceToPoint(n)<r)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const r=t[n];if(cc.x=r.normal.x>0?e.max.x:e.min.x,cc.y=r.normal.y>0?e.max.y:e.min.y,cc.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(cc)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function _g(){let s=null,e=!1,t=null,n=null;function r(a,c){t(a,c),n=s.requestAnimationFrame(r)}return{start:function(){e!==!0&&t!==null&&(n=s.requestAnimationFrame(r),e=!0)},stop:function(){s.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(a){t=a},setContext:function(a){s=a}}}function BE(s,e){const t=e.isWebGL2,n=new WeakMap;function r(p,g){const v=p.array,x=p.usage,T=s.createBuffer();s.bindBuffer(g,T),s.bufferData(g,v,x),p.onUploadCallback();let b;if(v instanceof Float32Array)b=s.FLOAT;else if(v instanceof Uint16Array)if(p.isFloat16BufferAttribute)if(t)b=s.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else b=s.UNSIGNED_SHORT;else if(v instanceof Int16Array)b=s.SHORT;else if(v instanceof Uint32Array)b=s.UNSIGNED_INT;else if(v instanceof Int32Array)b=s.INT;else if(v instanceof Int8Array)b=s.BYTE;else if(v instanceof Uint8Array)b=s.UNSIGNED_BYTE;else if(v instanceof Uint8ClampedArray)b=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+v);return{buffer:T,type:b,bytesPerElement:v.BYTES_PER_ELEMENT,version:p.version}}function a(p,g,v){const x=g.array,T=g.updateRange;s.bindBuffer(v,p),T.count===-1?s.bufferSubData(v,0,x):(t?s.bufferSubData(v,T.offset*x.BYTES_PER_ELEMENT,x,T.offset,T.count):s.bufferSubData(v,T.offset*x.BYTES_PER_ELEMENT,x.subarray(T.offset,T.offset+T.count)),T.count=-1),g.onUploadCallback()}function c(p){return p.isInterleavedBufferAttribute&&(p=p.data),n.get(p)}function u(p){p.isInterleavedBufferAttribute&&(p=p.data);const g=n.get(p);g&&(s.deleteBuffer(g.buffer),n.delete(p))}function d(p,g){if(p.isGLBufferAttribute){const x=n.get(p);(!x||x.version<p.version)&&n.set(p,{buffer:p.buffer,type:p.type,bytesPerElement:p.elementSize,version:p.version});return}p.isInterleavedBufferAttribute&&(p=p.data);const v=n.get(p);v===void 0?n.set(p,r(p,g)):v.version<p.version&&(a(v.buffer,p,g),v.version=p.version)}return{get:c,remove:u,update:d}}class eh extends Er{constructor(e=1,t=1,n=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:r};const a=e/2,c=t/2,u=Math.floor(n),d=Math.floor(r),p=u+1,g=d+1,v=e/u,x=t/d,T=[],b=[],C=[],E=[];for(let M=0;M<g;M++){const V=M*x-c;for(let U=0;U<p;U++){const B=U*v-a;b.push(B,-V,0),C.push(0,0,1),E.push(U/u),E.push(1-M/d)}}for(let M=0;M<d;M++)for(let V=0;V<u;V++){const U=V+p*M,B=V+p*(M+1),z=V+1+p*(M+1),$=V+1+p*M;T.push(U,B,$),T.push(B,z,$)}this.setIndex(T),this.setAttribute("position",new Kr(b,3)),this.setAttribute("normal",new Kr(C,3)),this.setAttribute("uv",new Kr(E,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new eh(e.width,e.height,e.widthSegments,e.heightSegments)}}var HE=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,zE=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,GE=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,kE=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,VE=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,WE=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,XE=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,qE=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,YE=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,jE=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,KE=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,$E=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,ZE=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,JE=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#pragma unroll_loop_start
	for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
		plane = clippingPlanes[ i ];
		if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
	}
	#pragma unroll_loop_end
	#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
		bool clipped = true;
		#pragma unroll_loop_start
		for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
		}
		#pragma unroll_loop_end
		if ( clipped ) discard;
	#endif
#endif`,QE=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,eT=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,tT=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,nT=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,iT=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,rT=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,sT=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,oT=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,aT=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_v0 0.339
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_v1 0.276
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_v4 0.046
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_v5 0.016
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_v6 0.0038
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,lT=`vec3 transformedNormal = objectNormal;
#ifdef USE_INSTANCING
	mat3 m = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( m[ 0 ], m[ 0 ] ), dot( m[ 1 ], m[ 1 ] ), dot( m[ 2 ], m[ 2 ] ) );
	transformedNormal = m * transformedNormal;
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	vec3 transformedTangent = ( modelViewMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,cT=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,uT=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,fT=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,hT=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,dT="gl_FragColor = linearToOutputTexel( gl_FragColor );",pT=`
const mat3 LINEAR_SRGB_TO_LINEAR_DISPLAY_P3 = mat3(
	vec3( 0.8224621, 0.177538, 0.0 ),
	vec3( 0.0331941, 0.9668058, 0.0 ),
	vec3( 0.0170827, 0.0723974, 0.9105199 )
);
const mat3 LINEAR_DISPLAY_P3_TO_LINEAR_SRGB = mat3(
	vec3( 1.2249401, - 0.2249404, 0.0 ),
	vec3( - 0.0420569, 1.0420571, 0.0 ),
	vec3( - 0.0196376, - 0.0786361, 1.0982735 )
);
vec4 LinearSRGBToLinearDisplayP3( in vec4 value ) {
	return vec4( value.rgb * LINEAR_SRGB_TO_LINEAR_DISPLAY_P3, value.a );
}
vec4 LinearDisplayP3ToLinearSRGB( in vec4 value ) {
	return vec4( value.rgb * LINEAR_DISPLAY_P3_TO_LINEAR_SRGB, value.a );
}
vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}
vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return sRGBTransferOETF( value );
}`,mT=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,gT=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,_T=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,vT=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,xT=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,yT=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,ST=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,MT=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,ET=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,TT=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,AT=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,bT=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,wT=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,RT=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,CT=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	#if defined ( LEGACY_LIGHTS )
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#else
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#endif
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,LT=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,PT=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,IT=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,DT=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,NT=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,UT=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	anisotropyV /= material.anisotropy;
	material.anisotropy = saturate( material.anisotropy );
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x - tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x + tbn[ 0 ] * anisotropyV.y;
#endif`,OT=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,FT=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,BT=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,HT=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,zT=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,GT=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,kT=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,VT=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,WT=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,XT=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,qT=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,YT=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,jT=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,KT=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,$T=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,ZT=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`,JT=`#ifdef USE_MORPHTARGETS
	uniform float morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		uniform sampler2DArray morphTargetsTexture;
		uniform ivec2 morphTargetsTextureSize;
		vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
			int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
			int y = texelIndex / morphTargetsTextureSize.x;
			int x = texelIndex - y * morphTargetsTextureSize.x;
			ivec3 morphUV = ivec3( x, y, morphTargetIndex );
			return texelFetch( morphTargetsTexture, morphUV, 0 );
		}
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`,QT=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`,eA=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,tA=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,nA=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,iA=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,rA=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,sA=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,oA=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,aA=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,lA=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,cA=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,uA=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,fA=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec2 packDepthToRG( in highp float v ) {
	return packDepthToRGBA( v ).yx;
}
float unpackRGToDepth( const in highp vec2 v ) {
	return unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,hA=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,dA=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,pA=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,mA=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,gA=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,_A=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,vA=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return shadow;
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
		vec3 lightToPosition = shadowCoord.xyz;
		float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );		dp += shadowBias;
		vec3 bd3D = normalize( lightToPosition );
		#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
			vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
			return (
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
			) * ( 1.0 / 9.0 );
		#else
			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
		#endif
	}
#endif`,xA=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,yA=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,SA=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,MA=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,EA=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	uniform int boneTextureSize;
	mat4 getBoneMatrix( const in float i ) {
		float j = i * 4.0;
		float x = mod( j, float( boneTextureSize ) );
		float y = floor( j / float( boneTextureSize ) );
		float dx = 1.0 / float( boneTextureSize );
		float dy = 1.0 / float( boneTextureSize );
		y = dy * ( y + 0.5 );
		vec4 v1 = texture2D( boneTexture, vec2( dx * ( x + 0.5 ), y ) );
		vec4 v2 = texture2D( boneTexture, vec2( dx * ( x + 1.5 ), y ) );
		vec4 v3 = texture2D( boneTexture, vec2( dx * ( x + 2.5 ), y ) );
		vec4 v4 = texture2D( boneTexture, vec2( dx * ( x + 3.5 ), y ) );
		mat4 bone = mat4( v1, v2, v3, v4 );
		return bone;
	}
#endif`,TA=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,AA=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,bA=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,wA=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,RA=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,CA=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,LA=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,PA=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
		vec3 refractedRayExit = position + transmissionRay;
		vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
		vec2 refractionCoords = ndcPos.xy / ndcPos.w;
		refractionCoords += 1.0;
		refractionCoords /= 2.0;
		vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
		vec3 transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,IA=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,DA=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,NA=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,UA=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const OA=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,FA=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,BA=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,HA=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,zA=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,GA=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,kA=`#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,VA=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,WA=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,XA=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,qA=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,YA=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,jA=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,KA=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,$A=`#include <common>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,ZA=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,JA=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,QA=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,eb=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,tb=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,nb=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,ib=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), opacity );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,rb=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,sb=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,ob=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,ab=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,lb=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,cb=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,ub=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,fb=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,hb=`#include <common>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,db=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,pb=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,mb=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Ft={alphahash_fragment:HE,alphahash_pars_fragment:zE,alphamap_fragment:GE,alphamap_pars_fragment:kE,alphatest_fragment:VE,alphatest_pars_fragment:WE,aomap_fragment:XE,aomap_pars_fragment:qE,begin_vertex:YE,beginnormal_vertex:jE,bsdfs:KE,iridescence_fragment:$E,bumpmap_pars_fragment:ZE,clipping_planes_fragment:JE,clipping_planes_pars_fragment:QE,clipping_planes_pars_vertex:eT,clipping_planes_vertex:tT,color_fragment:nT,color_pars_fragment:iT,color_pars_vertex:rT,color_vertex:sT,common:oT,cube_uv_reflection_fragment:aT,defaultnormal_vertex:lT,displacementmap_pars_vertex:cT,displacementmap_vertex:uT,emissivemap_fragment:fT,emissivemap_pars_fragment:hT,colorspace_fragment:dT,colorspace_pars_fragment:pT,envmap_fragment:mT,envmap_common_pars_fragment:gT,envmap_pars_fragment:_T,envmap_pars_vertex:vT,envmap_physical_pars_fragment:LT,envmap_vertex:xT,fog_vertex:yT,fog_pars_vertex:ST,fog_fragment:MT,fog_pars_fragment:ET,gradientmap_pars_fragment:TT,lightmap_fragment:AT,lightmap_pars_fragment:bT,lights_lambert_fragment:wT,lights_lambert_pars_fragment:RT,lights_pars_begin:CT,lights_toon_fragment:PT,lights_toon_pars_fragment:IT,lights_phong_fragment:DT,lights_phong_pars_fragment:NT,lights_physical_fragment:UT,lights_physical_pars_fragment:OT,lights_fragment_begin:FT,lights_fragment_maps:BT,lights_fragment_end:HT,logdepthbuf_fragment:zT,logdepthbuf_pars_fragment:GT,logdepthbuf_pars_vertex:kT,logdepthbuf_vertex:VT,map_fragment:WT,map_pars_fragment:XT,map_particle_fragment:qT,map_particle_pars_fragment:YT,metalnessmap_fragment:jT,metalnessmap_pars_fragment:KT,morphcolor_vertex:$T,morphnormal_vertex:ZT,morphtarget_pars_vertex:JT,morphtarget_vertex:QT,normal_fragment_begin:eA,normal_fragment_maps:tA,normal_pars_fragment:nA,normal_pars_vertex:iA,normal_vertex:rA,normalmap_pars_fragment:sA,clearcoat_normal_fragment_begin:oA,clearcoat_normal_fragment_maps:aA,clearcoat_pars_fragment:lA,iridescence_pars_fragment:cA,opaque_fragment:uA,packing:fA,premultiplied_alpha_fragment:hA,project_vertex:dA,dithering_fragment:pA,dithering_pars_fragment:mA,roughnessmap_fragment:gA,roughnessmap_pars_fragment:_A,shadowmap_pars_fragment:vA,shadowmap_pars_vertex:xA,shadowmap_vertex:yA,shadowmask_pars_fragment:SA,skinbase_vertex:MA,skinning_pars_vertex:EA,skinning_vertex:TA,skinnormal_vertex:AA,specularmap_fragment:bA,specularmap_pars_fragment:wA,tonemapping_fragment:RA,tonemapping_pars_fragment:CA,transmission_fragment:LA,transmission_pars_fragment:PA,uv_pars_fragment:IA,uv_pars_vertex:DA,uv_vertex:NA,worldpos_vertex:UA,background_vert:OA,background_frag:FA,backgroundCube_vert:BA,backgroundCube_frag:HA,cube_vert:zA,cube_frag:GA,depth_vert:kA,depth_frag:VA,distanceRGBA_vert:WA,distanceRGBA_frag:XA,equirect_vert:qA,equirect_frag:YA,linedashed_vert:jA,linedashed_frag:KA,meshbasic_vert:$A,meshbasic_frag:ZA,meshlambert_vert:JA,meshlambert_frag:QA,meshmatcap_vert:eb,meshmatcap_frag:tb,meshnormal_vert:nb,meshnormal_frag:ib,meshphong_vert:rb,meshphong_frag:sb,meshphysical_vert:ob,meshphysical_frag:ab,meshtoon_vert:lb,meshtoon_frag:cb,points_vert:ub,points_frag:fb,shadow_vert:hb,shadow_frag:db,sprite_vert:pb,sprite_frag:mb},Ve={common:{diffuse:{value:new Rt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Xt},alphaMap:{value:null},alphaMapTransform:{value:new Xt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Xt}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Xt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Xt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Xt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Xt},normalScale:{value:new Qt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Xt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Xt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Xt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Xt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Rt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Rt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Xt},alphaTest:{value:0},uvTransform:{value:new Xt}},sprite:{diffuse:{value:new Rt(16777215)},opacity:{value:1},center:{value:new Qt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Xt},alphaMap:{value:null},alphaMapTransform:{value:new Xt},alphaTest:{value:0}}},vr={basic:{uniforms:ui([Ve.common,Ve.specularmap,Ve.envmap,Ve.aomap,Ve.lightmap,Ve.fog]),vertexShader:Ft.meshbasic_vert,fragmentShader:Ft.meshbasic_frag},lambert:{uniforms:ui([Ve.common,Ve.specularmap,Ve.envmap,Ve.aomap,Ve.lightmap,Ve.emissivemap,Ve.bumpmap,Ve.normalmap,Ve.displacementmap,Ve.fog,Ve.lights,{emissive:{value:new Rt(0)}}]),vertexShader:Ft.meshlambert_vert,fragmentShader:Ft.meshlambert_frag},phong:{uniforms:ui([Ve.common,Ve.specularmap,Ve.envmap,Ve.aomap,Ve.lightmap,Ve.emissivemap,Ve.bumpmap,Ve.normalmap,Ve.displacementmap,Ve.fog,Ve.lights,{emissive:{value:new Rt(0)},specular:{value:new Rt(1118481)},shininess:{value:30}}]),vertexShader:Ft.meshphong_vert,fragmentShader:Ft.meshphong_frag},standard:{uniforms:ui([Ve.common,Ve.envmap,Ve.aomap,Ve.lightmap,Ve.emissivemap,Ve.bumpmap,Ve.normalmap,Ve.displacementmap,Ve.roughnessmap,Ve.metalnessmap,Ve.fog,Ve.lights,{emissive:{value:new Rt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ft.meshphysical_vert,fragmentShader:Ft.meshphysical_frag},toon:{uniforms:ui([Ve.common,Ve.aomap,Ve.lightmap,Ve.emissivemap,Ve.bumpmap,Ve.normalmap,Ve.displacementmap,Ve.gradientmap,Ve.fog,Ve.lights,{emissive:{value:new Rt(0)}}]),vertexShader:Ft.meshtoon_vert,fragmentShader:Ft.meshtoon_frag},matcap:{uniforms:ui([Ve.common,Ve.bumpmap,Ve.normalmap,Ve.displacementmap,Ve.fog,{matcap:{value:null}}]),vertexShader:Ft.meshmatcap_vert,fragmentShader:Ft.meshmatcap_frag},points:{uniforms:ui([Ve.points,Ve.fog]),vertexShader:Ft.points_vert,fragmentShader:Ft.points_frag},dashed:{uniforms:ui([Ve.common,Ve.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ft.linedashed_vert,fragmentShader:Ft.linedashed_frag},depth:{uniforms:ui([Ve.common,Ve.displacementmap]),vertexShader:Ft.depth_vert,fragmentShader:Ft.depth_frag},normal:{uniforms:ui([Ve.common,Ve.bumpmap,Ve.normalmap,Ve.displacementmap,{opacity:{value:1}}]),vertexShader:Ft.meshnormal_vert,fragmentShader:Ft.meshnormal_frag},sprite:{uniforms:ui([Ve.sprite,Ve.fog]),vertexShader:Ft.sprite_vert,fragmentShader:Ft.sprite_frag},background:{uniforms:{uvTransform:{value:new Xt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ft.background_vert,fragmentShader:Ft.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:Ft.backgroundCube_vert,fragmentShader:Ft.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ft.cube_vert,fragmentShader:Ft.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ft.equirect_vert,fragmentShader:Ft.equirect_frag},distanceRGBA:{uniforms:ui([Ve.common,Ve.displacementmap,{referencePosition:{value:new re},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ft.distanceRGBA_vert,fragmentShader:Ft.distanceRGBA_frag},shadow:{uniforms:ui([Ve.lights,Ve.fog,{color:{value:new Rt(0)},opacity:{value:1}}]),vertexShader:Ft.shadow_vert,fragmentShader:Ft.shadow_frag}};vr.physical={uniforms:ui([vr.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Xt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Xt},clearcoatNormalScale:{value:new Qt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Xt},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Xt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Xt},sheen:{value:0},sheenColor:{value:new Rt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Xt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Xt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Xt},transmissionSamplerSize:{value:new Qt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Xt},attenuationDistance:{value:0},attenuationColor:{value:new Rt(0)},specularColor:{value:new Rt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Xt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Xt},anisotropyVector:{value:new Qt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Xt}}]),vertexShader:Ft.meshphysical_vert,fragmentShader:Ft.meshphysical_frag};const uc={r:0,b:0,g:0};function gb(s,e,t,n,r,a,c){const u=new Rt(0);let d=a===!0?0:1,p,g,v=null,x=0,T=null;function b(E,M){let V=!1,U=M.isScene===!0?M.background:null;U&&U.isTexture&&(U=(M.backgroundBlurriness>0?t:e).get(U)),U===null?C(u,d):U&&U.isColor&&(C(U,1),V=!0);const B=s.xr.getEnvironmentBlendMode();B==="additive"?n.buffers.color.setClear(0,0,0,1,c):B==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,c),(s.autoClear||V)&&s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil),U&&(U.isCubeTexture||U.mapping===Cc)?(g===void 0&&(g=new Ki(new Ja(1,1,1),new io({name:"BackgroundCubeMaterial",uniforms:Jo(vr.backgroundCube.uniforms),vertexShader:vr.backgroundCube.vertexShader,fragmentShader:vr.backgroundCube.fragmentShader,side:Ei,depthTest:!1,depthWrite:!1,fog:!1})),g.geometry.deleteAttribute("normal"),g.geometry.deleteAttribute("uv"),g.onBeforeRender=function(z,$,m){this.matrixWorld.copyPosition(m.matrixWorld)},Object.defineProperty(g.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(g)),g.material.uniforms.envMap.value=U,g.material.uniforms.flipEnvMap.value=U.isCubeTexture&&U.isRenderTargetTexture===!1?-1:1,g.material.uniforms.backgroundBlurriness.value=M.backgroundBlurriness,g.material.uniforms.backgroundIntensity.value=M.backgroundIntensity,g.material.toneMapped=an.getTransfer(U.colorSpace)!==vn,(v!==U||x!==U.version||T!==s.toneMapping)&&(g.material.needsUpdate=!0,v=U,x=U.version,T=s.toneMapping),g.layers.enableAll(),E.unshift(g,g.geometry,g.material,0,0,null)):U&&U.isTexture&&(p===void 0&&(p=new Ki(new eh(2,2),new io({name:"BackgroundMaterial",uniforms:Jo(vr.background.uniforms),vertexShader:vr.background.vertexShader,fragmentShader:vr.background.fragmentShader,side:$r,depthTest:!1,depthWrite:!1,fog:!1})),p.geometry.deleteAttribute("normal"),Object.defineProperty(p.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(p)),p.material.uniforms.t2D.value=U,p.material.uniforms.backgroundIntensity.value=M.backgroundIntensity,p.material.toneMapped=an.getTransfer(U.colorSpace)!==vn,U.matrixAutoUpdate===!0&&U.updateMatrix(),p.material.uniforms.uvTransform.value.copy(U.matrix),(v!==U||x!==U.version||T!==s.toneMapping)&&(p.material.needsUpdate=!0,v=U,x=U.version,T=s.toneMapping),p.layers.enableAll(),E.unshift(p,p.geometry,p.material,0,0,null))}function C(E,M){E.getRGB(uc,pg(s)),n.buffers.color.setClear(uc.r,uc.g,uc.b,M,c)}return{getClearColor:function(){return u},setClearColor:function(E,M=1){u.set(E),d=M,C(u,d)},getClearAlpha:function(){return d},setClearAlpha:function(E){d=E,C(u,d)},render:b}}function _b(s,e,t,n){const r=s.getParameter(s.MAX_VERTEX_ATTRIBS),a=n.isWebGL2?null:e.get("OES_vertex_array_object"),c=n.isWebGL2||a!==null,u={},d=E(null);let p=d,g=!1;function v(te,ye,we,ge,Ue){let Ce=!1;if(c){const be=C(ge,we,ye);p!==be&&(p=be,T(p.object)),Ce=M(te,ge,we,Ue),Ce&&V(te,ge,we,Ue)}else{const be=ye.wireframe===!0;(p.geometry!==ge.id||p.program!==we.id||p.wireframe!==be)&&(p.geometry=ge.id,p.program=we.id,p.wireframe=be,Ce=!0)}Ue!==null&&t.update(Ue,s.ELEMENT_ARRAY_BUFFER),(Ce||g)&&(g=!1,pe(te,ye,we,ge),Ue!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,t.get(Ue).buffer))}function x(){return n.isWebGL2?s.createVertexArray():a.createVertexArrayOES()}function T(te){return n.isWebGL2?s.bindVertexArray(te):a.bindVertexArrayOES(te)}function b(te){return n.isWebGL2?s.deleteVertexArray(te):a.deleteVertexArrayOES(te)}function C(te,ye,we){const ge=we.wireframe===!0;let Ue=u[te.id];Ue===void 0&&(Ue={},u[te.id]=Ue);let Ce=Ue[ye.id];Ce===void 0&&(Ce={},Ue[ye.id]=Ce);let be=Ce[ge];return be===void 0&&(be=E(x()),Ce[ge]=be),be}function E(te){const ye=[],we=[],ge=[];for(let Ue=0;Ue<r;Ue++)ye[Ue]=0,we[Ue]=0,ge[Ue]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:ye,enabledAttributes:we,attributeDivisors:ge,object:te,attributes:{},index:null}}function M(te,ye,we,ge){const Ue=p.attributes,Ce=ye.attributes;let be=0;const ne=we.getAttributes();for(const me in ne)if(ne[me].location>=0){const Ye=Ue[me];let je=Ce[me];if(je===void 0&&(me==="instanceMatrix"&&te.instanceMatrix&&(je=te.instanceMatrix),me==="instanceColor"&&te.instanceColor&&(je=te.instanceColor)),Ye===void 0||Ye.attribute!==je||je&&Ye.data!==je.data)return!0;be++}return p.attributesNum!==be||p.index!==ge}function V(te,ye,we,ge){const Ue={},Ce=ye.attributes;let be=0;const ne=we.getAttributes();for(const me in ne)if(ne[me].location>=0){let Ye=Ce[me];Ye===void 0&&(me==="instanceMatrix"&&te.instanceMatrix&&(Ye=te.instanceMatrix),me==="instanceColor"&&te.instanceColor&&(Ye=te.instanceColor));const je={};je.attribute=Ye,Ye&&Ye.data&&(je.data=Ye.data),Ue[me]=je,be++}p.attributes=Ue,p.attributesNum=be,p.index=ge}function U(){const te=p.newAttributes;for(let ye=0,we=te.length;ye<we;ye++)te[ye]=0}function B(te){z(te,0)}function z(te,ye){const we=p.newAttributes,ge=p.enabledAttributes,Ue=p.attributeDivisors;we[te]=1,ge[te]===0&&(s.enableVertexAttribArray(te),ge[te]=1),Ue[te]!==ye&&((n.isWebGL2?s:e.get("ANGLE_instanced_arrays"))[n.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](te,ye),Ue[te]=ye)}function $(){const te=p.newAttributes,ye=p.enabledAttributes;for(let we=0,ge=ye.length;we<ge;we++)ye[we]!==te[we]&&(s.disableVertexAttribArray(we),ye[we]=0)}function m(te,ye,we,ge,Ue,Ce,be){be===!0?s.vertexAttribIPointer(te,ye,we,Ue,Ce):s.vertexAttribPointer(te,ye,we,ge,Ue,Ce)}function pe(te,ye,we,ge){if(n.isWebGL2===!1&&(te.isInstancedMesh||ge.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;U();const Ue=ge.attributes,Ce=we.getAttributes(),be=ye.defaultAttributeValues;for(const ne in Ce){const me=Ce[ne];if(me.location>=0){let We=Ue[ne];if(We===void 0&&(ne==="instanceMatrix"&&te.instanceMatrix&&(We=te.instanceMatrix),ne==="instanceColor"&&te.instanceColor&&(We=te.instanceColor)),We!==void 0){const Ye=We.normalized,je=We.itemSize,ot=t.get(We);if(ot===void 0)continue;const It=ot.buffer,Pe=ot.type,Oe=ot.bytesPerElement,Mt=n.isWebGL2===!0&&(Pe===s.INT||Pe===s.UNSIGNED_INT||We.gpuType===$m);if(We.isInterleavedBufferAttribute){const gt=We.data,le=gt.stride,wn=We.offset;if(gt.isInstancedInterleavedBuffer){for(let tt=0;tt<me.locationSize;tt++)z(me.location+tt,gt.meshPerAttribute);te.isInstancedMesh!==!0&&ge._maxInstanceCount===void 0&&(ge._maxInstanceCount=gt.meshPerAttribute*gt.count)}else for(let tt=0;tt<me.locationSize;tt++)B(me.location+tt);s.bindBuffer(s.ARRAY_BUFFER,It);for(let tt=0;tt<me.locationSize;tt++)m(me.location+tt,je/me.locationSize,Pe,Ye,le*Oe,(wn+je/me.locationSize*tt)*Oe,Mt)}else{if(We.isInstancedBufferAttribute){for(let gt=0;gt<me.locationSize;gt++)z(me.location+gt,We.meshPerAttribute);te.isInstancedMesh!==!0&&ge._maxInstanceCount===void 0&&(ge._maxInstanceCount=We.meshPerAttribute*We.count)}else for(let gt=0;gt<me.locationSize;gt++)B(me.location+gt);s.bindBuffer(s.ARRAY_BUFFER,It);for(let gt=0;gt<me.locationSize;gt++)m(me.location+gt,je/me.locationSize,Pe,Ye,je*Oe,je/me.locationSize*gt*Oe,Mt)}}else if(be!==void 0){const Ye=be[ne];if(Ye!==void 0)switch(Ye.length){case 2:s.vertexAttrib2fv(me.location,Ye);break;case 3:s.vertexAttrib3fv(me.location,Ye);break;case 4:s.vertexAttrib4fv(me.location,Ye);break;default:s.vertexAttrib1fv(me.location,Ye)}}}}$()}function D(){Re();for(const te in u){const ye=u[te];for(const we in ye){const ge=ye[we];for(const Ue in ge)b(ge[Ue].object),delete ge[Ue];delete ye[we]}delete u[te]}}function X(te){if(u[te.id]===void 0)return;const ye=u[te.id];for(const we in ye){const ge=ye[we];for(const Ue in ge)b(ge[Ue].object),delete ge[Ue];delete ye[we]}delete u[te.id]}function Te(te){for(const ye in u){const we=u[ye];if(we[te.id]===void 0)continue;const ge=we[te.id];for(const Ue in ge)b(ge[Ue].object),delete ge[Ue];delete we[te.id]}}function Re(){xe(),g=!0,p!==d&&(p=d,T(p.object))}function xe(){d.geometry=null,d.program=null,d.wireframe=!1}return{setup:v,reset:Re,resetDefaultState:xe,dispose:D,releaseStatesOfGeometry:X,releaseStatesOfProgram:Te,initAttributes:U,enableAttribute:B,disableUnusedAttributes:$}}function vb(s,e,t,n){const r=n.isWebGL2;let a;function c(p){a=p}function u(p,g){s.drawArrays(a,p,g),t.update(g,a,1)}function d(p,g,v){if(v===0)return;let x,T;if(r)x=s,T="drawArraysInstanced";else if(x=e.get("ANGLE_instanced_arrays"),T="drawArraysInstancedANGLE",x===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}x[T](a,p,g,v),t.update(g,a,v)}this.setMode=c,this.render=u,this.renderInstances=d}function xb(s,e,t){let n;function r(){if(n!==void 0)return n;if(e.has("EXT_texture_filter_anisotropic")===!0){const m=e.get("EXT_texture_filter_anisotropic");n=s.getParameter(m.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function a(m){if(m==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";m="mediump"}return m==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}const c=typeof WebGL2RenderingContext<"u"&&s.constructor.name==="WebGL2RenderingContext";let u=t.precision!==void 0?t.precision:"highp";const d=a(u);d!==u&&(console.warn("THREE.WebGLRenderer:",u,"not supported, using",d,"instead."),u=d);const p=c||e.has("WEBGL_draw_buffers"),g=t.logarithmicDepthBuffer===!0,v=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),x=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),T=s.getParameter(s.MAX_TEXTURE_SIZE),b=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),C=s.getParameter(s.MAX_VERTEX_ATTRIBS),E=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),M=s.getParameter(s.MAX_VARYING_VECTORS),V=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),U=x>0,B=c||e.has("OES_texture_float"),z=U&&B,$=c?s.getParameter(s.MAX_SAMPLES):0;return{isWebGL2:c,drawBuffers:p,getMaxAnisotropy:r,getMaxPrecision:a,precision:u,logarithmicDepthBuffer:g,maxTextures:v,maxVertexTextures:x,maxTextureSize:T,maxCubemapSize:b,maxAttributes:C,maxVertexUniforms:E,maxVaryings:M,maxFragmentUniforms:V,vertexTextures:U,floatFragmentTextures:B,floatVertexTextures:z,maxSamples:$}}function yb(s){const e=this;let t=null,n=0,r=!1,a=!1;const c=new Xs,u=new Xt,d={value:null,needsUpdate:!1};this.uniform=d,this.numPlanes=0,this.numIntersection=0,this.init=function(v,x){const T=v.length!==0||x||n!==0||r;return r=x,n=v.length,T},this.beginShadows=function(){a=!0,g(null)},this.endShadows=function(){a=!1},this.setGlobalState=function(v,x){t=g(v,x,0)},this.setState=function(v,x,T){const b=v.clippingPlanes,C=v.clipIntersection,E=v.clipShadows,M=s.get(v);if(!r||b===null||b.length===0||a&&!E)a?g(null):p();else{const V=a?0:n,U=V*4;let B=M.clippingState||null;d.value=B,B=g(b,x,U,T);for(let z=0;z!==U;++z)B[z]=t[z];M.clippingState=B,this.numIntersection=C?this.numPlanes:0,this.numPlanes+=V}};function p(){d.value!==t&&(d.value=t,d.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function g(v,x,T,b){const C=v!==null?v.length:0;let E=null;if(C!==0){if(E=d.value,b!==!0||E===null){const M=T+C*4,V=x.matrixWorldInverse;u.getNormalMatrix(V),(E===null||E.length<M)&&(E=new Float32Array(M));for(let U=0,B=T;U!==C;++U,B+=4)c.copy(v[U]).applyMatrix4(V,u),c.normal.toArray(E,B),E[B+3]=c.constant}d.value=E,d.needsUpdate=!0}return e.numPlanes=C,e.numIntersection=0,E}}function Sb(s){let e=new WeakMap;function t(c,u){return u===Uf?c.mapping=qo:u===Of&&(c.mapping=Yo),c}function n(c){if(c&&c.isTexture&&c.isRenderTargetTexture===!1){const u=c.mapping;if(u===Uf||u===Of)if(e.has(c)){const d=e.get(c).texture;return t(d,c.mapping)}else{const d=c.image;if(d&&d.height>0){const p=new UE(d.height/2);return p.fromEquirectangularTexture(s,c),e.set(c,p),c.addEventListener("dispose",r),t(p.texture,c.mapping)}else return null}}return c}function r(c){const u=c.target;u.removeEventListener("dispose",r);const d=e.get(u);d!==void 0&&(e.delete(u),d.dispose())}function a(){e=new WeakMap}return{get:n,dispose:a}}class th extends mg{constructor(e=-1,t=1,n=1,r=-1,a=.1,c=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=r,this.near=a,this.far=c,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,r,a,c){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=a,this.view.height=c,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let a=n-e,c=n+e,u=r+t,d=r-t;if(this.view!==null&&this.view.enabled){const p=(this.right-this.left)/this.view.fullWidth/this.zoom,g=(this.top-this.bottom)/this.view.fullHeight/this.zoom;a+=p*this.view.offsetX,c=a+p*this.view.width,u-=g*this.view.offsetY,d=u-g*this.view.height}this.projectionMatrix.makeOrthographic(a,c,u,d,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const ko=4,Qp=[.125,.215,.35,.446,.526,.582],Ks=20,hf=new th,em=new Rt;let df=null,pf=0,mf=0;const qs=(1+Math.sqrt(5))/2,Ho=1/qs,tm=[new re(1,1,1),new re(-1,1,1),new re(1,1,-1),new re(-1,1,-1),new re(0,qs,Ho),new re(0,qs,-Ho),new re(Ho,0,qs),new re(-Ho,0,qs),new re(qs,Ho,0),new re(-qs,Ho,0)];class nm{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,r=100){df=this._renderer.getRenderTarget(),pf=this._renderer.getActiveCubeFace(),mf=this._renderer.getActiveMipmapLevel(),this._setSize(256);const a=this._allocateTargets();return a.depthBuffer=!0,this._sceneToCubeUV(e,n,r,a),t>0&&this._blur(a,0,0,t),this._applyPMREM(a),this._cleanup(a),a}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=sm(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=rm(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(df,pf,mf),e.scissorTest=!1,fc(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===qo||e.mapping===Yo?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),df=this._renderer.getRenderTarget(),pf=this._renderer.getActiveCubeFace(),mf=this._renderer.getActiveMipmapLevel();const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:Mi,minFilter:Mi,generateMipmaps:!1,type:Ka,format:Yi,colorSpace:Kn,depthBuffer:!1},r=im(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=im(e,t,n);const{_lodMax:a}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Mb(a)),this._blurMaterial=Eb(a,e,t)}return r}_compileMaterial(e){const t=new Ki(this._lodPlanes[0],e);this._renderer.compile(t,hf)}_sceneToCubeUV(e,t,n,r){const u=new fi(90,1,t,n),d=[1,-1,1,1,1,1],p=[1,1,1,-1,-1,-1],g=this._renderer,v=g.autoClear,x=g.toneMapping;g.getClearColor(em),g.toneMapping=Ms,g.autoClear=!1;const T=new $s({name:"PMREM.Background",side:Ei,depthWrite:!1,depthTest:!1}),b=new Ki(new Ja,T);let C=!1;const E=e.background;E?E.isColor&&(T.color.copy(E),e.background=null,C=!0):(T.color.copy(em),C=!0);for(let M=0;M<6;M++){const V=M%3;V===0?(u.up.set(0,d[M],0),u.lookAt(p[M],0,0)):V===1?(u.up.set(0,0,d[M]),u.lookAt(0,p[M],0)):(u.up.set(0,d[M],0),u.lookAt(0,0,p[M]));const U=this._cubeSize;fc(r,V*U,M>2?U:0,U,U),g.setRenderTarget(r),C&&g.render(b,u),g.render(e,u)}b.geometry.dispose(),b.material.dispose(),g.toneMapping=x,g.autoClear=v,e.background=E}_textureToCubeUV(e,t){const n=this._renderer,r=e.mapping===qo||e.mapping===Yo;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=sm()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=rm());const a=r?this._cubemapMaterial:this._equirectMaterial,c=new Ki(this._lodPlanes[0],a),u=a.uniforms;u.envMap.value=e;const d=this._cubeSize;fc(t,0,0,3*d,2*d),n.setRenderTarget(t),n.render(c,hf)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;for(let r=1;r<this._lodPlanes.length;r++){const a=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),c=tm[(r-1)%tm.length];this._blur(e,r-1,r,a,c)}t.autoClear=n}_blur(e,t,n,r,a){const c=this._pingPongRenderTarget;this._halfBlur(e,c,t,n,r,"latitudinal",a),this._halfBlur(c,e,n,n,r,"longitudinal",a)}_halfBlur(e,t,n,r,a,c,u){const d=this._renderer,p=this._blurMaterial;c!=="latitudinal"&&c!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const g=3,v=new Ki(this._lodPlanes[r],p),x=p.uniforms,T=this._sizeLods[n]-1,b=isFinite(a)?Math.PI/(2*T):2*Math.PI/(2*Ks-1),C=a/b,E=isFinite(a)?1+Math.floor(g*C):Ks;E>Ks&&console.warn(`sigmaRadians, ${a}, is too large and will clip, as it requested ${E} samples when the maximum is set to ${Ks}`);const M=[];let V=0;for(let m=0;m<Ks;++m){const pe=m/C,D=Math.exp(-pe*pe/2);M.push(D),m===0?V+=D:m<E&&(V+=2*D)}for(let m=0;m<M.length;m++)M[m]=M[m]/V;x.envMap.value=e.texture,x.samples.value=E,x.weights.value=M,x.latitudinal.value=c==="latitudinal",u&&(x.poleAxis.value=u);const{_lodMax:U}=this;x.dTheta.value=b,x.mipInt.value=U-n;const B=this._sizeLods[r],z=3*B*(r>U-ko?r-U+ko:0),$=4*(this._cubeSize-B);fc(t,z,$,3*B,2*B),d.setRenderTarget(t),d.render(v,hf)}}function Mb(s){const e=[],t=[],n=[];let r=s;const a=s-ko+1+Qp.length;for(let c=0;c<a;c++){const u=Math.pow(2,r);t.push(u);let d=1/u;c>s-ko?d=Qp[c-s+ko-1]:c===0&&(d=0),n.push(d);const p=1/(u-2),g=-p,v=1+p,x=[g,g,v,g,v,v,g,g,v,v,g,v],T=6,b=6,C=3,E=2,M=1,V=new Float32Array(C*b*T),U=new Float32Array(E*b*T),B=new Float32Array(M*b*T);for(let $=0;$<T;$++){const m=$%3*2/3-1,pe=$>2?0:-1,D=[m,pe,0,m+2/3,pe,0,m+2/3,pe+1,0,m,pe,0,m+2/3,pe+1,0,m,pe+1,0];V.set(D,C*b*$),U.set(x,E*b*$);const X=[$,$,$,$,$,$];B.set(X,M*b*$)}const z=new Er;z.setAttribute("position",new hi(V,C)),z.setAttribute("uv",new hi(U,E)),z.setAttribute("faceIndex",new hi(B,M)),e.push(z),r>ko&&r--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function im(s,e,t){const n=new no(s,e,t);return n.texture.mapping=Cc,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function fc(s,e,t,n,r){s.viewport.set(e,t,n,r),s.scissor.set(e,t,n,r)}function Eb(s,e,t){const n=new Float32Array(Ks),r=new re(0,1,0);return new io({name:"SphericalGaussianBlur",defines:{n:Ks,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:nh(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Ss,depthTest:!1,depthWrite:!1})}function rm(){return new io({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:nh(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Ss,depthTest:!1,depthWrite:!1})}function sm(){return new io({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:nh(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Ss,depthTest:!1,depthWrite:!1})}function nh(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function Tb(s){let e=new WeakMap,t=null;function n(u){if(u&&u.isTexture){const d=u.mapping,p=d===Uf||d===Of,g=d===qo||d===Yo;if(p||g)if(u.isRenderTargetTexture&&u.needsPMREMUpdate===!0){u.needsPMREMUpdate=!1;let v=e.get(u);return t===null&&(t=new nm(s)),v=p?t.fromEquirectangular(u,v):t.fromCubemap(u,v),e.set(u,v),v.texture}else{if(e.has(u))return e.get(u).texture;{const v=u.image;if(p&&v&&v.height>0||g&&v&&r(v)){t===null&&(t=new nm(s));const x=p?t.fromEquirectangular(u):t.fromCubemap(u);return e.set(u,x),u.addEventListener("dispose",a),x.texture}else return null}}}return u}function r(u){let d=0;const p=6;for(let g=0;g<p;g++)u[g]!==void 0&&d++;return d===p}function a(u){const d=u.target;d.removeEventListener("dispose",a);const p=e.get(d);p!==void 0&&(e.delete(d),p.dispose())}function c(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:c}}function Ab(s){const e={};function t(n){if(e[n]!==void 0)return e[n];let r;switch(n){case"WEBGL_depth_texture":r=s.getExtension("WEBGL_depth_texture")||s.getExtension("MOZ_WEBGL_depth_texture")||s.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=s.getExtension("EXT_texture_filter_anisotropic")||s.getExtension("MOZ_EXT_texture_filter_anisotropic")||s.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=s.getExtension("WEBGL_compressed_texture_s3tc")||s.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=s.getExtension("WEBGL_compressed_texture_pvrtc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=s.getExtension(n)}return e[n]=r,r}return{has:function(n){return t(n)!==null},init:function(n){n.isWebGL2?t("EXT_color_buffer_float"):(t("WEBGL_depth_texture"),t("OES_texture_float"),t("OES_texture_half_float"),t("OES_texture_half_float_linear"),t("OES_standard_derivatives"),t("OES_element_index_uint"),t("OES_vertex_array_object"),t("ANGLE_instanced_arrays")),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture")},get:function(n){const r=t(n);return r===null&&console.warn("THREE.WebGLRenderer: "+n+" extension not supported."),r}}}function bb(s,e,t,n){const r={},a=new WeakMap;function c(v){const x=v.target;x.index!==null&&e.remove(x.index);for(const b in x.attributes)e.remove(x.attributes[b]);for(const b in x.morphAttributes){const C=x.morphAttributes[b];for(let E=0,M=C.length;E<M;E++)e.remove(C[E])}x.removeEventListener("dispose",c),delete r[x.id];const T=a.get(x);T&&(e.remove(T),a.delete(x)),n.releaseStatesOfGeometry(x),x.isInstancedBufferGeometry===!0&&delete x._maxInstanceCount,t.memory.geometries--}function u(v,x){return r[x.id]===!0||(x.addEventListener("dispose",c),r[x.id]=!0,t.memory.geometries++),x}function d(v){const x=v.attributes;for(const b in x)e.update(x[b],s.ARRAY_BUFFER);const T=v.morphAttributes;for(const b in T){const C=T[b];for(let E=0,M=C.length;E<M;E++)e.update(C[E],s.ARRAY_BUFFER)}}function p(v){const x=[],T=v.index,b=v.attributes.position;let C=0;if(T!==null){const V=T.array;C=T.version;for(let U=0,B=V.length;U<B;U+=3){const z=V[U+0],$=V[U+1],m=V[U+2];x.push(z,$,$,m,m,z)}}else if(b!==void 0){const V=b.array;C=b.version;for(let U=0,B=V.length/3-1;U<B;U+=3){const z=U+0,$=U+1,m=U+2;x.push(z,$,$,m,m,z)}}else return;const E=new(og(x)?dg:hg)(x,1);E.version=C;const M=a.get(v);M&&e.remove(M),a.set(v,E)}function g(v){const x=a.get(v);if(x){const T=v.index;T!==null&&x.version<T.version&&p(v)}else p(v);return a.get(v)}return{get:u,update:d,getWireframeAttribute:g}}function wb(s,e,t,n){const r=n.isWebGL2;let a;function c(x){a=x}let u,d;function p(x){u=x.type,d=x.bytesPerElement}function g(x,T){s.drawElements(a,T,u,x*d),t.update(T,a,1)}function v(x,T,b){if(b===0)return;let C,E;if(r)C=s,E="drawElementsInstanced";else if(C=e.get("ANGLE_instanced_arrays"),E="drawElementsInstancedANGLE",C===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}C[E](a,T,u,x*d,b),t.update(T,a,b)}this.setMode=c,this.setIndex=p,this.render=g,this.renderInstances=v}function Rb(s){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(a,c,u){switch(t.calls++,c){case s.TRIANGLES:t.triangles+=u*(a/3);break;case s.LINES:t.lines+=u*(a/2);break;case s.LINE_STRIP:t.lines+=u*(a-1);break;case s.LINE_LOOP:t.lines+=u*a;break;case s.POINTS:t.points+=u*a;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",c);break}}function r(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:n}}function Cb(s,e){return s[0]-e[0]}function Lb(s,e){return Math.abs(e[1])-Math.abs(s[1])}function Pb(s,e,t){const n={},r=new Float32Array(8),a=new WeakMap,c=new dn,u=[];for(let p=0;p<8;p++)u[p]=[p,0];function d(p,g,v){const x=p.morphTargetInfluences;if(e.isWebGL2===!0){const b=g.morphAttributes.position||g.morphAttributes.normal||g.morphAttributes.color,C=b!==void 0?b.length:0;let E=a.get(g);if(E===void 0||E.count!==C){let ye=function(){xe.dispose(),a.delete(g),g.removeEventListener("dispose",ye)};var T=ye;E!==void 0&&E.texture.dispose();const U=g.morphAttributes.position!==void 0,B=g.morphAttributes.normal!==void 0,z=g.morphAttributes.color!==void 0,$=g.morphAttributes.position||[],m=g.morphAttributes.normal||[],pe=g.morphAttributes.color||[];let D=0;U===!0&&(D=1),B===!0&&(D=2),z===!0&&(D=3);let X=g.attributes.position.count*D,Te=1;X>e.maxTextureSize&&(Te=Math.ceil(X/e.maxTextureSize),X=e.maxTextureSize);const Re=new Float32Array(X*Te*4*C),xe=new cg(Re,X,Te,C);xe.type=Yr,xe.needsUpdate=!0;const te=D*4;for(let we=0;we<C;we++){const ge=$[we],Ue=m[we],Ce=pe[we],be=X*Te*4*we;for(let ne=0;ne<ge.count;ne++){const me=ne*te;U===!0&&(c.fromBufferAttribute(ge,ne),Re[be+me+0]=c.x,Re[be+me+1]=c.y,Re[be+me+2]=c.z,Re[be+me+3]=0),B===!0&&(c.fromBufferAttribute(Ue,ne),Re[be+me+4]=c.x,Re[be+me+5]=c.y,Re[be+me+6]=c.z,Re[be+me+7]=0),z===!0&&(c.fromBufferAttribute(Ce,ne),Re[be+me+8]=c.x,Re[be+me+9]=c.y,Re[be+me+10]=c.z,Re[be+me+11]=Ce.itemSize===4?c.w:1)}}E={count:C,texture:xe,size:new Qt(X,Te)},a.set(g,E),g.addEventListener("dispose",ye)}let M=0;for(let U=0;U<x.length;U++)M+=x[U];const V=g.morphTargetsRelative?1:1-M;v.getUniforms().setValue(s,"morphTargetBaseInfluence",V),v.getUniforms().setValue(s,"morphTargetInfluences",x),v.getUniforms().setValue(s,"morphTargetsTexture",E.texture,t),v.getUniforms().setValue(s,"morphTargetsTextureSize",E.size)}else{const b=x===void 0?0:x.length;let C=n[g.id];if(C===void 0||C.length!==b){C=[];for(let B=0;B<b;B++)C[B]=[B,0];n[g.id]=C}for(let B=0;B<b;B++){const z=C[B];z[0]=B,z[1]=x[B]}C.sort(Lb);for(let B=0;B<8;B++)B<b&&C[B][1]?(u[B][0]=C[B][0],u[B][1]=C[B][1]):(u[B][0]=Number.MAX_SAFE_INTEGER,u[B][1]=0);u.sort(Cb);const E=g.morphAttributes.position,M=g.morphAttributes.normal;let V=0;for(let B=0;B<8;B++){const z=u[B],$=z[0],m=z[1];$!==Number.MAX_SAFE_INTEGER&&m?(E&&g.getAttribute("morphTarget"+B)!==E[$]&&g.setAttribute("morphTarget"+B,E[$]),M&&g.getAttribute("morphNormal"+B)!==M[$]&&g.setAttribute("morphNormal"+B,M[$]),r[B]=m,V+=m):(E&&g.hasAttribute("morphTarget"+B)===!0&&g.deleteAttribute("morphTarget"+B),M&&g.hasAttribute("morphNormal"+B)===!0&&g.deleteAttribute("morphNormal"+B),r[B]=0)}const U=g.morphTargetsRelative?1:1-V;v.getUniforms().setValue(s,"morphTargetBaseInfluence",U),v.getUniforms().setValue(s,"morphTargetInfluences",r)}}return{update:d}}function Ib(s,e,t,n){let r=new WeakMap;function a(d){const p=n.render.frame,g=d.geometry,v=e.get(d,g);if(r.get(v)!==p&&(e.update(v),r.set(v,p)),d.isInstancedMesh&&(d.hasEventListener("dispose",u)===!1&&d.addEventListener("dispose",u),r.get(d)!==p&&(t.update(d.instanceMatrix,s.ARRAY_BUFFER),d.instanceColor!==null&&t.update(d.instanceColor,s.ARRAY_BUFFER),r.set(d,p))),d.isSkinnedMesh){const x=d.skeleton;r.get(x)!==p&&(x.update(),r.set(x,p))}return v}function c(){r=new WeakMap}function u(d){const p=d.target;p.removeEventListener("dispose",u),t.remove(p.instanceMatrix),p.instanceColor!==null&&t.remove(p.instanceColor)}return{update:a,dispose:c}}const vg=new jn,xg=new cg,yg=new vE,Sg=new gg,om=[],am=[],lm=new Float32Array(16),cm=new Float32Array(9),um=new Float32Array(4);function ia(s,e,t){const n=s[0];if(n<=0||n>0)return s;const r=e*t;let a=om[r];if(a===void 0&&(a=new Float32Array(r),om[r]=a),e!==0){n.toArray(a,0);for(let c=1,u=0;c!==e;++c)u+=t,s[c].toArray(a,u)}return a}function zn(s,e){if(s.length!==e.length)return!1;for(let t=0,n=s.length;t<n;t++)if(s[t]!==e[t])return!1;return!0}function Gn(s,e){for(let t=0,n=e.length;t<n;t++)s[t]=e[t]}function Dc(s,e){let t=am[e];t===void 0&&(t=new Int32Array(e),am[e]=t);for(let n=0;n!==e;++n)t[n]=s.allocateTextureUnit();return t}function Db(s,e){const t=this.cache;t[0]!==e&&(s.uniform1f(this.addr,e),t[0]=e)}function Nb(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(zn(t,e))return;s.uniform2fv(this.addr,e),Gn(t,e)}}function Ub(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(s.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(zn(t,e))return;s.uniform3fv(this.addr,e),Gn(t,e)}}function Ob(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(zn(t,e))return;s.uniform4fv(this.addr,e),Gn(t,e)}}function Fb(s,e){const t=this.cache,n=e.elements;if(n===void 0){if(zn(t,e))return;s.uniformMatrix2fv(this.addr,!1,e),Gn(t,e)}else{if(zn(t,n))return;um.set(n),s.uniformMatrix2fv(this.addr,!1,um),Gn(t,n)}}function Bb(s,e){const t=this.cache,n=e.elements;if(n===void 0){if(zn(t,e))return;s.uniformMatrix3fv(this.addr,!1,e),Gn(t,e)}else{if(zn(t,n))return;cm.set(n),s.uniformMatrix3fv(this.addr,!1,cm),Gn(t,n)}}function Hb(s,e){const t=this.cache,n=e.elements;if(n===void 0){if(zn(t,e))return;s.uniformMatrix4fv(this.addr,!1,e),Gn(t,e)}else{if(zn(t,n))return;lm.set(n),s.uniformMatrix4fv(this.addr,!1,lm),Gn(t,n)}}function zb(s,e){const t=this.cache;t[0]!==e&&(s.uniform1i(this.addr,e),t[0]=e)}function Gb(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(zn(t,e))return;s.uniform2iv(this.addr,e),Gn(t,e)}}function kb(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(zn(t,e))return;s.uniform3iv(this.addr,e),Gn(t,e)}}function Vb(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(zn(t,e))return;s.uniform4iv(this.addr,e),Gn(t,e)}}function Wb(s,e){const t=this.cache;t[0]!==e&&(s.uniform1ui(this.addr,e),t[0]=e)}function Xb(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(zn(t,e))return;s.uniform2uiv(this.addr,e),Gn(t,e)}}function qb(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(zn(t,e))return;s.uniform3uiv(this.addr,e),Gn(t,e)}}function Yb(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(zn(t,e))return;s.uniform4uiv(this.addr,e),Gn(t,e)}}function jb(s,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(s.uniform1i(this.addr,r),n[0]=r),t.setTexture2D(e||vg,r)}function Kb(s,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(s.uniform1i(this.addr,r),n[0]=r),t.setTexture3D(e||yg,r)}function $b(s,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(s.uniform1i(this.addr,r),n[0]=r),t.setTextureCube(e||Sg,r)}function Zb(s,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(s.uniform1i(this.addr,r),n[0]=r),t.setTexture2DArray(e||xg,r)}function Jb(s){switch(s){case 5126:return Db;case 35664:return Nb;case 35665:return Ub;case 35666:return Ob;case 35674:return Fb;case 35675:return Bb;case 35676:return Hb;case 5124:case 35670:return zb;case 35667:case 35671:return Gb;case 35668:case 35672:return kb;case 35669:case 35673:return Vb;case 5125:return Wb;case 36294:return Xb;case 36295:return qb;case 36296:return Yb;case 35678:case 36198:case 36298:case 36306:case 35682:return jb;case 35679:case 36299:case 36307:return Kb;case 35680:case 36300:case 36308:case 36293:return $b;case 36289:case 36303:case 36311:case 36292:return Zb}}function Qb(s,e){s.uniform1fv(this.addr,e)}function ew(s,e){const t=ia(e,this.size,2);s.uniform2fv(this.addr,t)}function tw(s,e){const t=ia(e,this.size,3);s.uniform3fv(this.addr,t)}function nw(s,e){const t=ia(e,this.size,4);s.uniform4fv(this.addr,t)}function iw(s,e){const t=ia(e,this.size,4);s.uniformMatrix2fv(this.addr,!1,t)}function rw(s,e){const t=ia(e,this.size,9);s.uniformMatrix3fv(this.addr,!1,t)}function sw(s,e){const t=ia(e,this.size,16);s.uniformMatrix4fv(this.addr,!1,t)}function ow(s,e){s.uniform1iv(this.addr,e)}function aw(s,e){s.uniform2iv(this.addr,e)}function lw(s,e){s.uniform3iv(this.addr,e)}function cw(s,e){s.uniform4iv(this.addr,e)}function uw(s,e){s.uniform1uiv(this.addr,e)}function fw(s,e){s.uniform2uiv(this.addr,e)}function hw(s,e){s.uniform3uiv(this.addr,e)}function dw(s,e){s.uniform4uiv(this.addr,e)}function pw(s,e,t){const n=this.cache,r=e.length,a=Dc(t,r);zn(n,a)||(s.uniform1iv(this.addr,a),Gn(n,a));for(let c=0;c!==r;++c)t.setTexture2D(e[c]||vg,a[c])}function mw(s,e,t){const n=this.cache,r=e.length,a=Dc(t,r);zn(n,a)||(s.uniform1iv(this.addr,a),Gn(n,a));for(let c=0;c!==r;++c)t.setTexture3D(e[c]||yg,a[c])}function gw(s,e,t){const n=this.cache,r=e.length,a=Dc(t,r);zn(n,a)||(s.uniform1iv(this.addr,a),Gn(n,a));for(let c=0;c!==r;++c)t.setTextureCube(e[c]||Sg,a[c])}function _w(s,e,t){const n=this.cache,r=e.length,a=Dc(t,r);zn(n,a)||(s.uniform1iv(this.addr,a),Gn(n,a));for(let c=0;c!==r;++c)t.setTexture2DArray(e[c]||xg,a[c])}function vw(s){switch(s){case 5126:return Qb;case 35664:return ew;case 35665:return tw;case 35666:return nw;case 35674:return iw;case 35675:return rw;case 35676:return sw;case 5124:case 35670:return ow;case 35667:case 35671:return aw;case 35668:case 35672:return lw;case 35669:case 35673:return cw;case 5125:return uw;case 36294:return fw;case 36295:return hw;case 36296:return dw;case 35678:case 36198:case 36298:case 36306:case 35682:return pw;case 35679:case 36299:case 36307:return mw;case 35680:case 36300:case 36308:case 36293:return gw;case 36289:case 36303:case 36311:case 36292:return _w}}class xw{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.setValue=Jb(t.type)}}class yw{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.size=t.size,this.setValue=vw(t.type)}}class Sw{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const r=this.seq;for(let a=0,c=r.length;a!==c;++a){const u=r[a];u.setValue(e,t[u.id],n)}}}const gf=/(\w+)(\])?(\[|\.)?/g;function fm(s,e){s.seq.push(e),s.map[e.id]=e}function Mw(s,e,t){const n=s.name,r=n.length;for(gf.lastIndex=0;;){const a=gf.exec(n),c=gf.lastIndex;let u=a[1];const d=a[2]==="]",p=a[3];if(d&&(u=u|0),p===void 0||p==="["&&c+2===r){fm(t,p===void 0?new xw(u,s,e):new yw(u,s,e));break}else{let v=t.map[u];v===void 0&&(v=new Sw(u),fm(t,v)),t=v}}}class xc{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let r=0;r<n;++r){const a=e.getActiveUniform(t,r),c=e.getUniformLocation(t,a.name);Mw(a,c,this)}}setValue(e,t,n,r){const a=this.map[t];a!==void 0&&a.setValue(e,n,r)}setOptional(e,t,n){const r=t[n];r!==void 0&&this.setValue(e,n,r)}static upload(e,t,n,r){for(let a=0,c=t.length;a!==c;++a){const u=t[a],d=n[u.id];d.needsUpdate!==!1&&u.setValue(e,d.value,r)}}static seqWithValue(e,t){const n=[];for(let r=0,a=e.length;r!==a;++r){const c=e[r];c.id in t&&n.push(c)}return n}}function hm(s,e,t){const n=s.createShader(e);return s.shaderSource(n,t),s.compileShader(n),n}const Ew=37297;let Tw=0;function Aw(s,e){const t=s.split(`
`),n=[],r=Math.max(e-6,0),a=Math.min(e+6,t.length);for(let c=r;c<a;c++){const u=c+1;n.push(`${u===e?">":" "} ${u}: ${t[c]}`)}return n.join(`
`)}function bw(s){const e=an.getPrimaries(an.workingColorSpace),t=an.getPrimaries(s);let n;switch(e===t?n="":e===Tc&&t===Ec?n="LinearDisplayP3ToLinearSRGB":e===Ec&&t===Tc&&(n="LinearSRGBToLinearDisplayP3"),s){case Kn:case Lc:return[n,"LinearTransferOETF"];case bn:case Zf:return[n,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",s),[n,"LinearTransferOETF"]}}function dm(s,e,t){const n=s.getShaderParameter(e,s.COMPILE_STATUS),r=s.getShaderInfoLog(e).trim();if(n&&r==="")return"";const a=/ERROR: 0:(\d+)/.exec(r);if(a){const c=parseInt(a[1]);return t.toUpperCase()+`

`+r+`

`+Aw(s.getShaderSource(e),c)}else return r}function ww(s,e){const t=bw(e);return`vec4 ${s}( vec4 value ) { return ${t[0]}( ${t[1]}( value ) ); }`}function Rw(s,e){let t;switch(e){case AM:t="Linear";break;case bM:t="Reinhard";break;case wM:t="OptimizedCineon";break;case RM:t="ACESFilmic";break;case CM:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+s+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function Cw(s){return[s.extensionDerivatives||s.envMapCubeUVHeight||s.bumpMap||s.normalMapTangentSpace||s.clearcoatNormalMap||s.flatShading||s.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(s.extensionFragDepth||s.logarithmicDepthBuffer)&&s.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",s.extensionDrawBuffers&&s.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(s.extensionShaderTextureLOD||s.envMap||s.transmission)&&s.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(Wa).join(`
`)}function Lw(s){const e=[];for(const t in s){const n=s[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function Pw(s,e){const t={},n=s.getProgramParameter(e,s.ACTIVE_ATTRIBUTES);for(let r=0;r<n;r++){const a=s.getActiveAttrib(e,r),c=a.name;let u=1;a.type===s.FLOAT_MAT2&&(u=2),a.type===s.FLOAT_MAT3&&(u=3),a.type===s.FLOAT_MAT4&&(u=4),t[c]={type:a.type,location:s.getAttribLocation(e,c),locationSize:u}}return t}function Wa(s){return s!==""}function pm(s,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return s.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function mm(s,e){return s.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const Iw=/^[ \t]*#include +<([\w\d./]+)>/gm;function kf(s){return s.replace(Iw,Nw)}const Dw=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function Nw(s,e){let t=Ft[e];if(t===void 0){const n=Dw.get(e);if(n!==void 0)t=Ft[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return kf(t)}const Uw=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function gm(s){return s.replace(Uw,Ow)}function Ow(s,e,t,n){let r="";for(let a=parseInt(e);a<parseInt(t);a++)r+=n.replace(/\[\s*i\s*\]/g,"[ "+a+" ]").replace(/UNROLLED_LOOP_INDEX/g,a);return r}function _m(s){let e="precision "+s.precision+` float;
precision `+s.precision+" int;";return s.precision==="highp"?e+=`
#define HIGH_PRECISION`:s.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:s.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function Fw(s){let e="SHADOWMAP_TYPE_BASIC";return s.shadowMapType===qm?e="SHADOWMAP_TYPE_PCF":s.shadowMapType===QS?e="SHADOWMAP_TYPE_PCF_SOFT":s.shadowMapType===qr&&(e="SHADOWMAP_TYPE_VSM"),e}function Bw(s){let e="ENVMAP_TYPE_CUBE";if(s.envMap)switch(s.envMapMode){case qo:case Yo:e="ENVMAP_TYPE_CUBE";break;case Cc:e="ENVMAP_TYPE_CUBE_UV";break}return e}function Hw(s){let e="ENVMAP_MODE_REFLECTION";if(s.envMap)switch(s.envMapMode){case Yo:e="ENVMAP_MODE_REFRACTION";break}return e}function zw(s){let e="ENVMAP_BLENDING_NONE";if(s.envMap)switch(s.combine){case Ym:e="ENVMAP_BLENDING_MULTIPLY";break;case EM:e="ENVMAP_BLENDING_MIX";break;case TM:e="ENVMAP_BLENDING_ADD";break}return e}function Gw(s){const e=s.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:n,maxMip:t}}function kw(s,e,t,n){const r=s.getContext(),a=t.defines;let c=t.vertexShader,u=t.fragmentShader;const d=Fw(t),p=Bw(t),g=Hw(t),v=zw(t),x=Gw(t),T=t.isWebGL2?"":Cw(t),b=Lw(a),C=r.createProgram();let E,M,V=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(E=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,b].filter(Wa).join(`
`),E.length>0&&(E+=`
`),M=[T,"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,b].filter(Wa).join(`
`),M.length>0&&(M+=`
`)):(E=[_m(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,b,t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+g:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors&&t.isWebGL2?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+d:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Wa).join(`
`),M=[T,_m(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,b,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+p:"",t.envMap?"#define "+g:"",t.envMap?"#define "+v:"",x?"#define CUBEUV_TEXEL_WIDTH "+x.texelWidth:"",x?"#define CUBEUV_TEXEL_HEIGHT "+x.texelHeight:"",x?"#define CUBEUV_MAX_MIP "+x.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+d:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Ms?"#define TONE_MAPPING":"",t.toneMapping!==Ms?Ft.tonemapping_pars_fragment:"",t.toneMapping!==Ms?Rw("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Ft.colorspace_pars_fragment,ww("linearToOutputTexel",t.outputColorSpace),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Wa).join(`
`)),c=kf(c),c=pm(c,t),c=mm(c,t),u=kf(u),u=pm(u,t),u=mm(u,t),c=gm(c),u=gm(u),t.isWebGL2&&t.isRawShaderMaterial!==!0&&(V=`#version 300 es
`,E=["precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+E,M=["precision mediump sampler2DArray;","#define varying in",t.glslVersion===Up?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Up?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+M);const U=V+E+c,B=V+M+u,z=hm(r,r.VERTEX_SHADER,U),$=hm(r,r.FRAGMENT_SHADER,B);r.attachShader(C,z),r.attachShader(C,$),t.index0AttributeName!==void 0?r.bindAttribLocation(C,0,t.index0AttributeName):t.morphTargets===!0&&r.bindAttribLocation(C,0,"position"),r.linkProgram(C);function m(Te){if(s.debug.checkShaderErrors){const Re=r.getProgramInfoLog(C).trim(),xe=r.getShaderInfoLog(z).trim(),te=r.getShaderInfoLog($).trim();let ye=!0,we=!0;if(r.getProgramParameter(C,r.LINK_STATUS)===!1)if(ye=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(r,C,z,$);else{const ge=dm(r,z,"vertex"),Ue=dm(r,$,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(C,r.VALIDATE_STATUS)+`

Program Info Log: `+Re+`
`+ge+`
`+Ue)}else Re!==""?console.warn("THREE.WebGLProgram: Program Info Log:",Re):(xe===""||te==="")&&(we=!1);we&&(Te.diagnostics={runnable:ye,programLog:Re,vertexShader:{log:xe,prefix:E},fragmentShader:{log:te,prefix:M}})}r.deleteShader(z),r.deleteShader($),pe=new xc(r,C),D=Pw(r,C)}let pe;this.getUniforms=function(){return pe===void 0&&m(this),pe};let D;this.getAttributes=function(){return D===void 0&&m(this),D};let X=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return X===!1&&(X=r.getProgramParameter(C,Ew)),X},this.destroy=function(){n.releaseStatesOfProgram(this),r.deleteProgram(C),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=Tw++,this.cacheKey=e,this.usedTimes=1,this.program=C,this.vertexShader=z,this.fragmentShader=$,this}let Vw=0;class Ww{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,r=this._getShaderStage(t),a=this._getShaderStage(n),c=this._getShaderCacheForMaterial(e);return c.has(r)===!1&&(c.add(r),r.usedTimes++),c.has(a)===!1&&(c.add(a),a.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new Xw(e),t.set(e,n)),n}}class Xw{constructor(e){this.id=Vw++,this.code=e,this.usedTimes=0}}function qw(s,e,t,n,r,a,c){const u=new ug,d=new Ww,p=[],g=r.isWebGL2,v=r.logarithmicDepthBuffer,x=r.vertexTextures;let T=r.precision;const b={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function C(D){return D===0?"uv":`uv${D}`}function E(D,X,Te,Re,xe){const te=Re.fog,ye=xe.geometry,we=D.isMeshStandardMaterial?Re.environment:null,ge=(D.isMeshStandardMaterial?t:e).get(D.envMap||we),Ue=ge&&ge.mapping===Cc?ge.image.height:null,Ce=b[D.type];D.precision!==null&&(T=r.getMaxPrecision(D.precision),T!==D.precision&&console.warn("THREE.WebGLProgram.getParameters:",D.precision,"not supported, using",T,"instead."));const be=ye.morphAttributes.position||ye.morphAttributes.normal||ye.morphAttributes.color,ne=be!==void 0?be.length:0;let me=0;ye.morphAttributes.position!==void 0&&(me=1),ye.morphAttributes.normal!==void 0&&(me=2),ye.morphAttributes.color!==void 0&&(me=3);let We,Ye,je,ot;if(Ce){const xn=vr[Ce];We=xn.vertexShader,Ye=xn.fragmentShader}else We=D.vertexShader,Ye=D.fragmentShader,d.update(D),je=d.getVertexShaderID(D),ot=d.getFragmentShaderID(D);const It=s.getRenderTarget(),Pe=xe.isInstancedMesh===!0,Oe=!!D.map,Mt=!!D.matcap,gt=!!ge,le=!!D.aoMap,wn=!!D.lightMap,tt=!!D.bumpMap,dt=!!D.normalMap,_t=!!D.displacementMap,Yt=!!D.emissiveMap,pt=!!D.metalnessMap,Pt=!!D.roughnessMap,$t=D.anisotropy>0,tn=D.clearcoat>0,en=D.iridescence>0,k=D.sheen>0,I=D.transmission>0,Z=$t&&!!D.anisotropyMap,Ie=tn&&!!D.clearcoatMap,De=tn&&!!D.clearcoatNormalMap,He=tn&&!!D.clearcoatRoughnessMap,rt=en&&!!D.iridescenceMap,Ge=en&&!!D.iridescenceThicknessMap,qe=k&&!!D.sheenColorMap,lt=k&&!!D.sheenRoughnessMap,Tt=!!D.specularMap,Fe=!!D.specularColorMap,Bt=!!D.specularIntensityMap,yt=I&&!!D.transmissionMap,ct=I&&!!D.thicknessMap,ut=!!D.gradientMap,Je=!!D.alphaMap,Gt=D.alphaTest>0,Q=!!D.alphaHash,ke=!!D.extensions,ze=!!ye.attributes.uv1,Se=!!ye.attributes.uv2,Be=!!ye.attributes.uv3;let nt=Ms;return D.toneMapped&&(It===null||It.isXRRenderTarget===!0)&&(nt=s.toneMapping),{isWebGL2:g,shaderID:Ce,shaderType:D.type,shaderName:D.name,vertexShader:We,fragmentShader:Ye,defines:D.defines,customVertexShaderID:je,customFragmentShaderID:ot,isRawShaderMaterial:D.isRawShaderMaterial===!0,glslVersion:D.glslVersion,precision:T,instancing:Pe,instancingColor:Pe&&xe.instanceColor!==null,supportsVertexTextures:x,outputColorSpace:It===null?s.outputColorSpace:It.isXRRenderTarget===!0?It.texture.colorSpace:Kn,map:Oe,matcap:Mt,envMap:gt,envMapMode:gt&&ge.mapping,envMapCubeUVHeight:Ue,aoMap:le,lightMap:wn,bumpMap:tt,normalMap:dt,displacementMap:x&&_t,emissiveMap:Yt,normalMapObjectSpace:dt&&D.normalMapType===WM,normalMapTangentSpace:dt&&D.normalMapType===rg,metalnessMap:pt,roughnessMap:Pt,anisotropy:$t,anisotropyMap:Z,clearcoat:tn,clearcoatMap:Ie,clearcoatNormalMap:De,clearcoatRoughnessMap:He,iridescence:en,iridescenceMap:rt,iridescenceThicknessMap:Ge,sheen:k,sheenColorMap:qe,sheenRoughnessMap:lt,specularMap:Tt,specularColorMap:Fe,specularIntensityMap:Bt,transmission:I,transmissionMap:yt,thicknessMap:ct,gradientMap:ut,opaque:D.transparent===!1&&D.blending===Vo,alphaMap:Je,alphaTest:Gt,alphaHash:Q,combine:D.combine,mapUv:Oe&&C(D.map.channel),aoMapUv:le&&C(D.aoMap.channel),lightMapUv:wn&&C(D.lightMap.channel),bumpMapUv:tt&&C(D.bumpMap.channel),normalMapUv:dt&&C(D.normalMap.channel),displacementMapUv:_t&&C(D.displacementMap.channel),emissiveMapUv:Yt&&C(D.emissiveMap.channel),metalnessMapUv:pt&&C(D.metalnessMap.channel),roughnessMapUv:Pt&&C(D.roughnessMap.channel),anisotropyMapUv:Z&&C(D.anisotropyMap.channel),clearcoatMapUv:Ie&&C(D.clearcoatMap.channel),clearcoatNormalMapUv:De&&C(D.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:He&&C(D.clearcoatRoughnessMap.channel),iridescenceMapUv:rt&&C(D.iridescenceMap.channel),iridescenceThicknessMapUv:Ge&&C(D.iridescenceThicknessMap.channel),sheenColorMapUv:qe&&C(D.sheenColorMap.channel),sheenRoughnessMapUv:lt&&C(D.sheenRoughnessMap.channel),specularMapUv:Tt&&C(D.specularMap.channel),specularColorMapUv:Fe&&C(D.specularColorMap.channel),specularIntensityMapUv:Bt&&C(D.specularIntensityMap.channel),transmissionMapUv:yt&&C(D.transmissionMap.channel),thicknessMapUv:ct&&C(D.thicknessMap.channel),alphaMapUv:Je&&C(D.alphaMap.channel),vertexTangents:!!ye.attributes.tangent&&(dt||$t),vertexColors:D.vertexColors,vertexAlphas:D.vertexColors===!0&&!!ye.attributes.color&&ye.attributes.color.itemSize===4,vertexUv1s:ze,vertexUv2s:Se,vertexUv3s:Be,pointsUvs:xe.isPoints===!0&&!!ye.attributes.uv&&(Oe||Je),fog:!!te,useFog:D.fog===!0,fogExp2:te&&te.isFogExp2,flatShading:D.flatShading===!0,sizeAttenuation:D.sizeAttenuation===!0,logarithmicDepthBuffer:v,skinning:xe.isSkinnedMesh===!0,morphTargets:ye.morphAttributes.position!==void 0,morphNormals:ye.morphAttributes.normal!==void 0,morphColors:ye.morphAttributes.color!==void 0,morphTargetsCount:ne,morphTextureStride:me,numDirLights:X.directional.length,numPointLights:X.point.length,numSpotLights:X.spot.length,numSpotLightMaps:X.spotLightMap.length,numRectAreaLights:X.rectArea.length,numHemiLights:X.hemi.length,numDirLightShadows:X.directionalShadowMap.length,numPointLightShadows:X.pointShadowMap.length,numSpotLightShadows:X.spotShadowMap.length,numSpotLightShadowsWithMaps:X.numSpotLightShadowsWithMaps,numLightProbes:X.numLightProbes,numClippingPlanes:c.numPlanes,numClipIntersection:c.numIntersection,dithering:D.dithering,shadowMapEnabled:s.shadowMap.enabled&&Te.length>0,shadowMapType:s.shadowMap.type,toneMapping:nt,useLegacyLights:s._useLegacyLights,decodeVideoTexture:Oe&&D.map.isVideoTexture===!0&&an.getTransfer(D.map.colorSpace)===vn,premultipliedAlpha:D.premultipliedAlpha,doubleSided:D.side===xr,flipSided:D.side===Ei,useDepthPacking:D.depthPacking>=0,depthPacking:D.depthPacking||0,index0AttributeName:D.index0AttributeName,extensionDerivatives:ke&&D.extensions.derivatives===!0,extensionFragDepth:ke&&D.extensions.fragDepth===!0,extensionDrawBuffers:ke&&D.extensions.drawBuffers===!0,extensionShaderTextureLOD:ke&&D.extensions.shaderTextureLOD===!0,rendererExtensionFragDepth:g||n.has("EXT_frag_depth"),rendererExtensionDrawBuffers:g||n.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:g||n.has("EXT_shader_texture_lod"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:D.customProgramCacheKey()}}function M(D){const X=[];if(D.shaderID?X.push(D.shaderID):(X.push(D.customVertexShaderID),X.push(D.customFragmentShaderID)),D.defines!==void 0)for(const Te in D.defines)X.push(Te),X.push(D.defines[Te]);return D.isRawShaderMaterial===!1&&(V(X,D),U(X,D),X.push(s.outputColorSpace)),X.push(D.customProgramCacheKey),X.join()}function V(D,X){D.push(X.precision),D.push(X.outputColorSpace),D.push(X.envMapMode),D.push(X.envMapCubeUVHeight),D.push(X.mapUv),D.push(X.alphaMapUv),D.push(X.lightMapUv),D.push(X.aoMapUv),D.push(X.bumpMapUv),D.push(X.normalMapUv),D.push(X.displacementMapUv),D.push(X.emissiveMapUv),D.push(X.metalnessMapUv),D.push(X.roughnessMapUv),D.push(X.anisotropyMapUv),D.push(X.clearcoatMapUv),D.push(X.clearcoatNormalMapUv),D.push(X.clearcoatRoughnessMapUv),D.push(X.iridescenceMapUv),D.push(X.iridescenceThicknessMapUv),D.push(X.sheenColorMapUv),D.push(X.sheenRoughnessMapUv),D.push(X.specularMapUv),D.push(X.specularColorMapUv),D.push(X.specularIntensityMapUv),D.push(X.transmissionMapUv),D.push(X.thicknessMapUv),D.push(X.combine),D.push(X.fogExp2),D.push(X.sizeAttenuation),D.push(X.morphTargetsCount),D.push(X.morphAttributeCount),D.push(X.numDirLights),D.push(X.numPointLights),D.push(X.numSpotLights),D.push(X.numSpotLightMaps),D.push(X.numHemiLights),D.push(X.numRectAreaLights),D.push(X.numDirLightShadows),D.push(X.numPointLightShadows),D.push(X.numSpotLightShadows),D.push(X.numSpotLightShadowsWithMaps),D.push(X.numLightProbes),D.push(X.shadowMapType),D.push(X.toneMapping),D.push(X.numClippingPlanes),D.push(X.numClipIntersection),D.push(X.depthPacking)}function U(D,X){u.disableAll(),X.isWebGL2&&u.enable(0),X.supportsVertexTextures&&u.enable(1),X.instancing&&u.enable(2),X.instancingColor&&u.enable(3),X.matcap&&u.enable(4),X.envMap&&u.enable(5),X.normalMapObjectSpace&&u.enable(6),X.normalMapTangentSpace&&u.enable(7),X.clearcoat&&u.enable(8),X.iridescence&&u.enable(9),X.alphaTest&&u.enable(10),X.vertexColors&&u.enable(11),X.vertexAlphas&&u.enable(12),X.vertexUv1s&&u.enable(13),X.vertexUv2s&&u.enable(14),X.vertexUv3s&&u.enable(15),X.vertexTangents&&u.enable(16),X.anisotropy&&u.enable(17),X.alphaHash&&u.enable(18),D.push(u.mask),u.disableAll(),X.fog&&u.enable(0),X.useFog&&u.enable(1),X.flatShading&&u.enable(2),X.logarithmicDepthBuffer&&u.enable(3),X.skinning&&u.enable(4),X.morphTargets&&u.enable(5),X.morphNormals&&u.enable(6),X.morphColors&&u.enable(7),X.premultipliedAlpha&&u.enable(8),X.shadowMapEnabled&&u.enable(9),X.useLegacyLights&&u.enable(10),X.doubleSided&&u.enable(11),X.flipSided&&u.enable(12),X.useDepthPacking&&u.enable(13),X.dithering&&u.enable(14),X.transmission&&u.enable(15),X.sheen&&u.enable(16),X.opaque&&u.enable(17),X.pointsUvs&&u.enable(18),X.decodeVideoTexture&&u.enable(19),D.push(u.mask)}function B(D){const X=b[D.type];let Te;if(X){const Re=vr[X];Te=PE.clone(Re.uniforms)}else Te=D.uniforms;return Te}function z(D,X){let Te;for(let Re=0,xe=p.length;Re<xe;Re++){const te=p[Re];if(te.cacheKey===X){Te=te,++Te.usedTimes;break}}return Te===void 0&&(Te=new kw(s,X,D,a),p.push(Te)),Te}function $(D){if(--D.usedTimes===0){const X=p.indexOf(D);p[X]=p[p.length-1],p.pop(),D.destroy()}}function m(D){d.remove(D)}function pe(){d.dispose()}return{getParameters:E,getProgramCacheKey:M,getUniforms:B,acquireProgram:z,releaseProgram:$,releaseShaderCache:m,programs:p,dispose:pe}}function Yw(){let s=new WeakMap;function e(a){let c=s.get(a);return c===void 0&&(c={},s.set(a,c)),c}function t(a){s.delete(a)}function n(a,c,u){s.get(a)[c]=u}function r(){s=new WeakMap}return{get:e,remove:t,update:n,dispose:r}}function jw(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.material.id!==e.material.id?s.material.id-e.material.id:s.z!==e.z?s.z-e.z:s.id-e.id}function vm(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.z!==e.z?e.z-s.z:s.id-e.id}function xm(){const s=[];let e=0;const t=[],n=[],r=[];function a(){e=0,t.length=0,n.length=0,r.length=0}function c(v,x,T,b,C,E){let M=s[e];return M===void 0?(M={id:v.id,object:v,geometry:x,material:T,groupOrder:b,renderOrder:v.renderOrder,z:C,group:E},s[e]=M):(M.id=v.id,M.object=v,M.geometry=x,M.material=T,M.groupOrder=b,M.renderOrder=v.renderOrder,M.z=C,M.group=E),e++,M}function u(v,x,T,b,C,E){const M=c(v,x,T,b,C,E);T.transmission>0?n.push(M):T.transparent===!0?r.push(M):t.push(M)}function d(v,x,T,b,C,E){const M=c(v,x,T,b,C,E);T.transmission>0?n.unshift(M):T.transparent===!0?r.unshift(M):t.unshift(M)}function p(v,x){t.length>1&&t.sort(v||jw),n.length>1&&n.sort(x||vm),r.length>1&&r.sort(x||vm)}function g(){for(let v=e,x=s.length;v<x;v++){const T=s[v];if(T.id===null)break;T.id=null,T.object=null,T.geometry=null,T.material=null,T.group=null}}return{opaque:t,transmissive:n,transparent:r,init:a,push:u,unshift:d,finish:g,sort:p}}function Kw(){let s=new WeakMap;function e(n,r){const a=s.get(n);let c;return a===void 0?(c=new xm,s.set(n,[c])):r>=a.length?(c=new xm,a.push(c)):c=a[r],c}function t(){s=new WeakMap}return{get:e,dispose:t}}function $w(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new re,color:new Rt};break;case"SpotLight":t={position:new re,direction:new re,color:new Rt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new re,color:new Rt,distance:0,decay:0};break;case"HemisphereLight":t={direction:new re,skyColor:new Rt,groundColor:new Rt};break;case"RectAreaLight":t={color:new Rt,position:new re,halfWidth:new re,halfHeight:new re};break}return s[e.id]=t,t}}}function Zw(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Qt};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Qt};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Qt,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[e.id]=t,t}}}let Jw=0;function Qw(s,e){return(e.castShadow?2:0)-(s.castShadow?2:0)+(e.map?1:0)-(s.map?1:0)}function eR(s,e){const t=new $w,n=Zw(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let g=0;g<9;g++)r.probe.push(new re);const a=new re,c=new qt,u=new qt;function d(g,v){let x=0,T=0,b=0;for(let Re=0;Re<9;Re++)r.probe[Re].set(0,0,0);let C=0,E=0,M=0,V=0,U=0,B=0,z=0,$=0,m=0,pe=0,D=0;g.sort(Qw);const X=v===!0?Math.PI:1;for(let Re=0,xe=g.length;Re<xe;Re++){const te=g[Re],ye=te.color,we=te.intensity,ge=te.distance,Ue=te.shadow&&te.shadow.map?te.shadow.map.texture:null;if(te.isAmbientLight)x+=ye.r*we*X,T+=ye.g*we*X,b+=ye.b*we*X;else if(te.isLightProbe){for(let Ce=0;Ce<9;Ce++)r.probe[Ce].addScaledVector(te.sh.coefficients[Ce],we);D++}else if(te.isDirectionalLight){const Ce=t.get(te);if(Ce.color.copy(te.color).multiplyScalar(te.intensity*X),te.castShadow){const be=te.shadow,ne=n.get(te);ne.shadowBias=be.bias,ne.shadowNormalBias=be.normalBias,ne.shadowRadius=be.radius,ne.shadowMapSize=be.mapSize,r.directionalShadow[C]=ne,r.directionalShadowMap[C]=Ue,r.directionalShadowMatrix[C]=te.shadow.matrix,B++}r.directional[C]=Ce,C++}else if(te.isSpotLight){const Ce=t.get(te);Ce.position.setFromMatrixPosition(te.matrixWorld),Ce.color.copy(ye).multiplyScalar(we*X),Ce.distance=ge,Ce.coneCos=Math.cos(te.angle),Ce.penumbraCos=Math.cos(te.angle*(1-te.penumbra)),Ce.decay=te.decay,r.spot[M]=Ce;const be=te.shadow;if(te.map&&(r.spotLightMap[m]=te.map,m++,be.updateMatrices(te),te.castShadow&&pe++),r.spotLightMatrix[M]=be.matrix,te.castShadow){const ne=n.get(te);ne.shadowBias=be.bias,ne.shadowNormalBias=be.normalBias,ne.shadowRadius=be.radius,ne.shadowMapSize=be.mapSize,r.spotShadow[M]=ne,r.spotShadowMap[M]=Ue,$++}M++}else if(te.isRectAreaLight){const Ce=t.get(te);Ce.color.copy(ye).multiplyScalar(we),Ce.halfWidth.set(te.width*.5,0,0),Ce.halfHeight.set(0,te.height*.5,0),r.rectArea[V]=Ce,V++}else if(te.isPointLight){const Ce=t.get(te);if(Ce.color.copy(te.color).multiplyScalar(te.intensity*X),Ce.distance=te.distance,Ce.decay=te.decay,te.castShadow){const be=te.shadow,ne=n.get(te);ne.shadowBias=be.bias,ne.shadowNormalBias=be.normalBias,ne.shadowRadius=be.radius,ne.shadowMapSize=be.mapSize,ne.shadowCameraNear=be.camera.near,ne.shadowCameraFar=be.camera.far,r.pointShadow[E]=ne,r.pointShadowMap[E]=Ue,r.pointShadowMatrix[E]=te.shadow.matrix,z++}r.point[E]=Ce,E++}else if(te.isHemisphereLight){const Ce=t.get(te);Ce.skyColor.copy(te.color).multiplyScalar(we*X),Ce.groundColor.copy(te.groundColor).multiplyScalar(we*X),r.hemi[U]=Ce,U++}}V>0&&(e.isWebGL2||s.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=Ve.LTC_FLOAT_1,r.rectAreaLTC2=Ve.LTC_FLOAT_2):s.has("OES_texture_half_float_linear")===!0?(r.rectAreaLTC1=Ve.LTC_HALF_1,r.rectAreaLTC2=Ve.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),r.ambient[0]=x,r.ambient[1]=T,r.ambient[2]=b;const Te=r.hash;(Te.directionalLength!==C||Te.pointLength!==E||Te.spotLength!==M||Te.rectAreaLength!==V||Te.hemiLength!==U||Te.numDirectionalShadows!==B||Te.numPointShadows!==z||Te.numSpotShadows!==$||Te.numSpotMaps!==m||Te.numLightProbes!==D)&&(r.directional.length=C,r.spot.length=M,r.rectArea.length=V,r.point.length=E,r.hemi.length=U,r.directionalShadow.length=B,r.directionalShadowMap.length=B,r.pointShadow.length=z,r.pointShadowMap.length=z,r.spotShadow.length=$,r.spotShadowMap.length=$,r.directionalShadowMatrix.length=B,r.pointShadowMatrix.length=z,r.spotLightMatrix.length=$+m-pe,r.spotLightMap.length=m,r.numSpotLightShadowsWithMaps=pe,r.numLightProbes=D,Te.directionalLength=C,Te.pointLength=E,Te.spotLength=M,Te.rectAreaLength=V,Te.hemiLength=U,Te.numDirectionalShadows=B,Te.numPointShadows=z,Te.numSpotShadows=$,Te.numSpotMaps=m,Te.numLightProbes=D,r.version=Jw++)}function p(g,v){let x=0,T=0,b=0,C=0,E=0;const M=v.matrixWorldInverse;for(let V=0,U=g.length;V<U;V++){const B=g[V];if(B.isDirectionalLight){const z=r.directional[x];z.direction.setFromMatrixPosition(B.matrixWorld),a.setFromMatrixPosition(B.target.matrixWorld),z.direction.sub(a),z.direction.transformDirection(M),x++}else if(B.isSpotLight){const z=r.spot[b];z.position.setFromMatrixPosition(B.matrixWorld),z.position.applyMatrix4(M),z.direction.setFromMatrixPosition(B.matrixWorld),a.setFromMatrixPosition(B.target.matrixWorld),z.direction.sub(a),z.direction.transformDirection(M),b++}else if(B.isRectAreaLight){const z=r.rectArea[C];z.position.setFromMatrixPosition(B.matrixWorld),z.position.applyMatrix4(M),u.identity(),c.copy(B.matrixWorld),c.premultiply(M),u.extractRotation(c),z.halfWidth.set(B.width*.5,0,0),z.halfHeight.set(0,B.height*.5,0),z.halfWidth.applyMatrix4(u),z.halfHeight.applyMatrix4(u),C++}else if(B.isPointLight){const z=r.point[T];z.position.setFromMatrixPosition(B.matrixWorld),z.position.applyMatrix4(M),T++}else if(B.isHemisphereLight){const z=r.hemi[E];z.direction.setFromMatrixPosition(B.matrixWorld),z.direction.transformDirection(M),E++}}}return{setup:d,setupView:p,state:r}}function ym(s,e){const t=new eR(s,e),n=[],r=[];function a(){n.length=0,r.length=0}function c(v){n.push(v)}function u(v){r.push(v)}function d(v){t.setup(n,v)}function p(v){t.setupView(n,v)}return{init:a,state:{lightsArray:n,shadowsArray:r,lights:t},setupLights:d,setupLightsView:p,pushLight:c,pushShadow:u}}function tR(s,e){let t=new WeakMap;function n(a,c=0){const u=t.get(a);let d;return u===void 0?(d=new ym(s,e),t.set(a,[d])):c>=u.length?(d=new ym(s,e),u.push(d)):d=u[c],d}function r(){t=new WeakMap}return{get:n,dispose:r}}class nR extends Sr{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=kM,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class iR extends Sr{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const rR=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,sR=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function oR(s,e,t){let n=new Qf;const r=new Qt,a=new Qt,c=new dn,u=new nR({depthPacking:VM}),d=new iR,p={},g=t.maxTextureSize,v={[$r]:Ei,[Ei]:$r,[xr]:xr},x=new io({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Qt},radius:{value:4}},vertexShader:rR,fragmentShader:sR}),T=x.clone();T.defines.HORIZONTAL_PASS=1;const b=new Er;b.setAttribute("position",new hi(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const C=new Ki(b,x),E=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=qm;let M=this.type;this.render=function(z,$,m){if(E.enabled===!1||E.autoUpdate===!1&&E.needsUpdate===!1||z.length===0)return;const pe=s.getRenderTarget(),D=s.getActiveCubeFace(),X=s.getActiveMipmapLevel(),Te=s.state;Te.setBlending(Ss),Te.buffers.color.setClear(1,1,1,1),Te.buffers.depth.setTest(!0),Te.setScissorTest(!1);const Re=M!==qr&&this.type===qr,xe=M===qr&&this.type!==qr;for(let te=0,ye=z.length;te<ye;te++){const we=z[te],ge=we.shadow;if(ge===void 0){console.warn("THREE.WebGLShadowMap:",we,"has no shadow.");continue}if(ge.autoUpdate===!1&&ge.needsUpdate===!1)continue;r.copy(ge.mapSize);const Ue=ge.getFrameExtents();if(r.multiply(Ue),a.copy(ge.mapSize),(r.x>g||r.y>g)&&(r.x>g&&(a.x=Math.floor(g/Ue.x),r.x=a.x*Ue.x,ge.mapSize.x=a.x),r.y>g&&(a.y=Math.floor(g/Ue.y),r.y=a.y*Ue.y,ge.mapSize.y=a.y)),ge.map===null||Re===!0||xe===!0){const be=this.type!==qr?{minFilter:Xn,magFilter:Xn}:{};ge.map!==null&&ge.map.dispose(),ge.map=new no(r.x,r.y,be),ge.map.texture.name=we.name+".shadowMap",ge.camera.updateProjectionMatrix()}s.setRenderTarget(ge.map),s.clear();const Ce=ge.getViewportCount();for(let be=0;be<Ce;be++){const ne=ge.getViewport(be);c.set(a.x*ne.x,a.y*ne.y,a.x*ne.z,a.y*ne.w),Te.viewport(c),ge.updateMatrices(we,be),n=ge.getFrustum(),B($,m,ge.camera,we,this.type)}ge.isPointLightShadow!==!0&&this.type===qr&&V(ge,m),ge.needsUpdate=!1}M=this.type,E.needsUpdate=!1,s.setRenderTarget(pe,D,X)};function V(z,$){const m=e.update(C);x.defines.VSM_SAMPLES!==z.blurSamples&&(x.defines.VSM_SAMPLES=z.blurSamples,T.defines.VSM_SAMPLES=z.blurSamples,x.needsUpdate=!0,T.needsUpdate=!0),z.mapPass===null&&(z.mapPass=new no(r.x,r.y)),x.uniforms.shadow_pass.value=z.map.texture,x.uniforms.resolution.value=z.mapSize,x.uniforms.radius.value=z.radius,s.setRenderTarget(z.mapPass),s.clear(),s.renderBufferDirect($,null,m,x,C,null),T.uniforms.shadow_pass.value=z.mapPass.texture,T.uniforms.resolution.value=z.mapSize,T.uniforms.radius.value=z.radius,s.setRenderTarget(z.map),s.clear(),s.renderBufferDirect($,null,m,T,C,null)}function U(z,$,m,pe){let D=null;const X=m.isPointLight===!0?z.customDistanceMaterial:z.customDepthMaterial;if(X!==void 0)D=X;else if(D=m.isPointLight===!0?d:u,s.localClippingEnabled&&$.clipShadows===!0&&Array.isArray($.clippingPlanes)&&$.clippingPlanes.length!==0||$.displacementMap&&$.displacementScale!==0||$.alphaMap&&$.alphaTest>0||$.map&&$.alphaTest>0){const Te=D.uuid,Re=$.uuid;let xe=p[Te];xe===void 0&&(xe={},p[Te]=xe);let te=xe[Re];te===void 0&&(te=D.clone(),xe[Re]=te),D=te}if(D.visible=$.visible,D.wireframe=$.wireframe,pe===qr?D.side=$.shadowSide!==null?$.shadowSide:$.side:D.side=$.shadowSide!==null?$.shadowSide:v[$.side],D.alphaMap=$.alphaMap,D.alphaTest=$.alphaTest,D.map=$.map,D.clipShadows=$.clipShadows,D.clippingPlanes=$.clippingPlanes,D.clipIntersection=$.clipIntersection,D.displacementMap=$.displacementMap,D.displacementScale=$.displacementScale,D.displacementBias=$.displacementBias,D.wireframeLinewidth=$.wireframeLinewidth,D.linewidth=$.linewidth,m.isPointLight===!0&&D.isMeshDistanceMaterial===!0){const Te=s.properties.get(D);Te.light=m}return D}function B(z,$,m,pe,D){if(z.visible===!1)return;if(z.layers.test($.layers)&&(z.isMesh||z.isLine||z.isPoints)&&(z.castShadow||z.receiveShadow&&D===qr)&&(!z.frustumCulled||n.intersectsObject(z))){z.modelViewMatrix.multiplyMatrices(m.matrixWorldInverse,z.matrixWorld);const Re=e.update(z),xe=z.material;if(Array.isArray(xe)){const te=Re.groups;for(let ye=0,we=te.length;ye<we;ye++){const ge=te[ye],Ue=xe[ge.materialIndex];if(Ue&&Ue.visible){const Ce=U(z,Ue,pe,D);s.renderBufferDirect(m,null,Re,Ce,z,ge)}}}else if(xe.visible){const te=U(z,xe,pe,D);s.renderBufferDirect(m,null,Re,te,z,null)}}const Te=z.children;for(let Re=0,xe=Te.length;Re<xe;Re++)B(Te[Re],$,m,pe,D)}}function aR(s,e,t){const n=t.isWebGL2;function r(){let Q=!1;const ke=new dn;let ze=null;const Se=new dn(0,0,0,0);return{setMask:function(Be){ze!==Be&&!Q&&(s.colorMask(Be,Be,Be,Be),ze=Be)},setLocked:function(Be){Q=Be},setClear:function(Be,nt,kt,xn,qn){qn===!0&&(Be*=xn,nt*=xn,kt*=xn),ke.set(Be,nt,kt,xn),Se.equals(ke)===!1&&(s.clearColor(Be,nt,kt,xn),Se.copy(ke))},reset:function(){Q=!1,ze=null,Se.set(-1,0,0,0)}}}function a(){let Q=!1,ke=null,ze=null,Se=null;return{setTest:function(Be){Be?Oe(s.DEPTH_TEST):Mt(s.DEPTH_TEST)},setMask:function(Be){ke!==Be&&!Q&&(s.depthMask(Be),ke=Be)},setFunc:function(Be){if(ze!==Be){switch(Be){case gM:s.depthFunc(s.NEVER);break;case _M:s.depthFunc(s.ALWAYS);break;case vM:s.depthFunc(s.LESS);break;case yc:s.depthFunc(s.LEQUAL);break;case xM:s.depthFunc(s.EQUAL);break;case yM:s.depthFunc(s.GEQUAL);break;case SM:s.depthFunc(s.GREATER);break;case MM:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}ze=Be}},setLocked:function(Be){Q=Be},setClear:function(Be){Se!==Be&&(s.clearDepth(Be),Se=Be)},reset:function(){Q=!1,ke=null,ze=null,Se=null}}}function c(){let Q=!1,ke=null,ze=null,Se=null,Be=null,nt=null,kt=null,xn=null,qn=null;return{setTest:function(rn){Q||(rn?Oe(s.STENCIL_TEST):Mt(s.STENCIL_TEST))},setMask:function(rn){ke!==rn&&!Q&&(s.stencilMask(rn),ke=rn)},setFunc:function(rn,pn,Nn){(ze!==rn||Se!==pn||Be!==Nn)&&(s.stencilFunc(rn,pn,Nn),ze=rn,Se=pn,Be=Nn)},setOp:function(rn,pn,Nn){(nt!==rn||kt!==pn||xn!==Nn)&&(s.stencilOp(rn,pn,Nn),nt=rn,kt=pn,xn=Nn)},setLocked:function(rn){Q=rn},setClear:function(rn){qn!==rn&&(s.clearStencil(rn),qn=rn)},reset:function(){Q=!1,ke=null,ze=null,Se=null,Be=null,nt=null,kt=null,xn=null,qn=null}}}const u=new r,d=new a,p=new c,g=new WeakMap,v=new WeakMap;let x={},T={},b=new WeakMap,C=[],E=null,M=!1,V=null,U=null,B=null,z=null,$=null,m=null,pe=null,D=new Rt(0,0,0),X=0,Te=!1,Re=null,xe=null,te=null,ye=null,we=null;const ge=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let Ue=!1,Ce=0;const be=s.getParameter(s.VERSION);be.indexOf("WebGL")!==-1?(Ce=parseFloat(/^WebGL (\d)/.exec(be)[1]),Ue=Ce>=1):be.indexOf("OpenGL ES")!==-1&&(Ce=parseFloat(/^OpenGL ES (\d)/.exec(be)[1]),Ue=Ce>=2);let ne=null,me={};const We=s.getParameter(s.SCISSOR_BOX),Ye=s.getParameter(s.VIEWPORT),je=new dn().fromArray(We),ot=new dn().fromArray(Ye);function It(Q,ke,ze,Se){const Be=new Uint8Array(4),nt=s.createTexture();s.bindTexture(Q,nt),s.texParameteri(Q,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(Q,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let kt=0;kt<ze;kt++)n&&(Q===s.TEXTURE_3D||Q===s.TEXTURE_2D_ARRAY)?s.texImage3D(ke,0,s.RGBA,1,1,Se,0,s.RGBA,s.UNSIGNED_BYTE,Be):s.texImage2D(ke+kt,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,Be);return nt}const Pe={};Pe[s.TEXTURE_2D]=It(s.TEXTURE_2D,s.TEXTURE_2D,1),Pe[s.TEXTURE_CUBE_MAP]=It(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),n&&(Pe[s.TEXTURE_2D_ARRAY]=It(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),Pe[s.TEXTURE_3D]=It(s.TEXTURE_3D,s.TEXTURE_3D,1,1)),u.setClear(0,0,0,1),d.setClear(1),p.setClear(0),Oe(s.DEPTH_TEST),d.setFunc(yc),pt(!1),Pt(Qd),Oe(s.CULL_FACE),_t(Ss);function Oe(Q){x[Q]!==!0&&(s.enable(Q),x[Q]=!0)}function Mt(Q){x[Q]!==!1&&(s.disable(Q),x[Q]=!1)}function gt(Q,ke){return T[Q]!==ke?(s.bindFramebuffer(Q,ke),T[Q]=ke,n&&(Q===s.DRAW_FRAMEBUFFER&&(T[s.FRAMEBUFFER]=ke),Q===s.FRAMEBUFFER&&(T[s.DRAW_FRAMEBUFFER]=ke)),!0):!1}function le(Q,ke){let ze=C,Se=!1;if(Q)if(ze=b.get(ke),ze===void 0&&(ze=[],b.set(ke,ze)),Q.isWebGLMultipleRenderTargets){const Be=Q.texture;if(ze.length!==Be.length||ze[0]!==s.COLOR_ATTACHMENT0){for(let nt=0,kt=Be.length;nt<kt;nt++)ze[nt]=s.COLOR_ATTACHMENT0+nt;ze.length=Be.length,Se=!0}}else ze[0]!==s.COLOR_ATTACHMENT0&&(ze[0]=s.COLOR_ATTACHMENT0,Se=!0);else ze[0]!==s.BACK&&(ze[0]=s.BACK,Se=!0);Se&&(t.isWebGL2?s.drawBuffers(ze):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(ze))}function wn(Q){return E!==Q?(s.useProgram(Q),E=Q,!0):!1}const tt={[js]:s.FUNC_ADD,[tM]:s.FUNC_SUBTRACT,[nM]:s.FUNC_REVERSE_SUBTRACT};if(n)tt[ip]=s.MIN,tt[rp]=s.MAX;else{const Q=e.get("EXT_blend_minmax");Q!==null&&(tt[ip]=Q.MIN_EXT,tt[rp]=Q.MAX_EXT)}const dt={[iM]:s.ZERO,[rM]:s.ONE,[sM]:s.SRC_COLOR,[Df]:s.SRC_ALPHA,[fM]:s.SRC_ALPHA_SATURATE,[cM]:s.DST_COLOR,[aM]:s.DST_ALPHA,[oM]:s.ONE_MINUS_SRC_COLOR,[Nf]:s.ONE_MINUS_SRC_ALPHA,[uM]:s.ONE_MINUS_DST_COLOR,[lM]:s.ONE_MINUS_DST_ALPHA,[hM]:s.CONSTANT_COLOR,[dM]:s.ONE_MINUS_CONSTANT_COLOR,[pM]:s.CONSTANT_ALPHA,[mM]:s.ONE_MINUS_CONSTANT_ALPHA};function _t(Q,ke,ze,Se,Be,nt,kt,xn,qn,rn){if(Q===Ss){M===!0&&(Mt(s.BLEND),M=!1);return}if(M===!1&&(Oe(s.BLEND),M=!0),Q!==eM){if(Q!==V||rn!==Te){if((U!==js||$!==js)&&(s.blendEquation(s.FUNC_ADD),U=js,$=js),rn)switch(Q){case Vo:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case ep:s.blendFunc(s.ONE,s.ONE);break;case tp:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case np:s.blendFuncSeparate(s.ZERO,s.SRC_COLOR,s.ZERO,s.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",Q);break}else switch(Q){case Vo:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case ep:s.blendFunc(s.SRC_ALPHA,s.ONE);break;case tp:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case np:s.blendFunc(s.ZERO,s.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",Q);break}B=null,z=null,m=null,pe=null,D.set(0,0,0),X=0,V=Q,Te=rn}return}Be=Be||ke,nt=nt||ze,kt=kt||Se,(ke!==U||Be!==$)&&(s.blendEquationSeparate(tt[ke],tt[Be]),U=ke,$=Be),(ze!==B||Se!==z||nt!==m||kt!==pe)&&(s.blendFuncSeparate(dt[ze],dt[Se],dt[nt],dt[kt]),B=ze,z=Se,m=nt,pe=kt),(xn.equals(D)===!1||qn!==X)&&(s.blendColor(xn.r,xn.g,xn.b,qn),D.copy(xn),X=qn),V=Q,Te=!1}function Yt(Q,ke){Q.side===xr?Mt(s.CULL_FACE):Oe(s.CULL_FACE);let ze=Q.side===Ei;ke&&(ze=!ze),pt(ze),Q.blending===Vo&&Q.transparent===!1?_t(Ss):_t(Q.blending,Q.blendEquation,Q.blendSrc,Q.blendDst,Q.blendEquationAlpha,Q.blendSrcAlpha,Q.blendDstAlpha,Q.blendColor,Q.blendAlpha,Q.premultipliedAlpha),d.setFunc(Q.depthFunc),d.setTest(Q.depthTest),d.setMask(Q.depthWrite),u.setMask(Q.colorWrite);const Se=Q.stencilWrite;p.setTest(Se),Se&&(p.setMask(Q.stencilWriteMask),p.setFunc(Q.stencilFunc,Q.stencilRef,Q.stencilFuncMask),p.setOp(Q.stencilFail,Q.stencilZFail,Q.stencilZPass)),tn(Q.polygonOffset,Q.polygonOffsetFactor,Q.polygonOffsetUnits),Q.alphaToCoverage===!0?Oe(s.SAMPLE_ALPHA_TO_COVERAGE):Mt(s.SAMPLE_ALPHA_TO_COVERAGE)}function pt(Q){Re!==Q&&(Q?s.frontFace(s.CW):s.frontFace(s.CCW),Re=Q)}function Pt(Q){Q!==ZS?(Oe(s.CULL_FACE),Q!==xe&&(Q===Qd?s.cullFace(s.BACK):Q===JS?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):Mt(s.CULL_FACE),xe=Q}function $t(Q){Q!==te&&(Ue&&s.lineWidth(Q),te=Q)}function tn(Q,ke,ze){Q?(Oe(s.POLYGON_OFFSET_FILL),(ye!==ke||we!==ze)&&(s.polygonOffset(ke,ze),ye=ke,we=ze)):Mt(s.POLYGON_OFFSET_FILL)}function en(Q){Q?Oe(s.SCISSOR_TEST):Mt(s.SCISSOR_TEST)}function k(Q){Q===void 0&&(Q=s.TEXTURE0+ge-1),ne!==Q&&(s.activeTexture(Q),ne=Q)}function I(Q,ke,ze){ze===void 0&&(ne===null?ze=s.TEXTURE0+ge-1:ze=ne);let Se=me[ze];Se===void 0&&(Se={type:void 0,texture:void 0},me[ze]=Se),(Se.type!==Q||Se.texture!==ke)&&(ne!==ze&&(s.activeTexture(ze),ne=ze),s.bindTexture(Q,ke||Pe[Q]),Se.type=Q,Se.texture=ke)}function Z(){const Q=me[ne];Q!==void 0&&Q.type!==void 0&&(s.bindTexture(Q.type,null),Q.type=void 0,Q.texture=void 0)}function Ie(){try{s.compressedTexImage2D.apply(s,arguments)}catch(Q){console.error("THREE.WebGLState:",Q)}}function De(){try{s.compressedTexImage3D.apply(s,arguments)}catch(Q){console.error("THREE.WebGLState:",Q)}}function He(){try{s.texSubImage2D.apply(s,arguments)}catch(Q){console.error("THREE.WebGLState:",Q)}}function rt(){try{s.texSubImage3D.apply(s,arguments)}catch(Q){console.error("THREE.WebGLState:",Q)}}function Ge(){try{s.compressedTexSubImage2D.apply(s,arguments)}catch(Q){console.error("THREE.WebGLState:",Q)}}function qe(){try{s.compressedTexSubImage3D.apply(s,arguments)}catch(Q){console.error("THREE.WebGLState:",Q)}}function lt(){try{s.texStorage2D.apply(s,arguments)}catch(Q){console.error("THREE.WebGLState:",Q)}}function Tt(){try{s.texStorage3D.apply(s,arguments)}catch(Q){console.error("THREE.WebGLState:",Q)}}function Fe(){try{s.texImage2D.apply(s,arguments)}catch(Q){console.error("THREE.WebGLState:",Q)}}function Bt(){try{s.texImage3D.apply(s,arguments)}catch(Q){console.error("THREE.WebGLState:",Q)}}function yt(Q){je.equals(Q)===!1&&(s.scissor(Q.x,Q.y,Q.z,Q.w),je.copy(Q))}function ct(Q){ot.equals(Q)===!1&&(s.viewport(Q.x,Q.y,Q.z,Q.w),ot.copy(Q))}function ut(Q,ke){let ze=v.get(ke);ze===void 0&&(ze=new WeakMap,v.set(ke,ze));let Se=ze.get(Q);Se===void 0&&(Se=s.getUniformBlockIndex(ke,Q.name),ze.set(Q,Se))}function Je(Q,ke){const Se=v.get(ke).get(Q);g.get(ke)!==Se&&(s.uniformBlockBinding(ke,Se,Q.__bindingPointIndex),g.set(ke,Se))}function Gt(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),n===!0&&(s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null)),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),x={},ne=null,me={},T={},b=new WeakMap,C=[],E=null,M=!1,V=null,U=null,B=null,z=null,$=null,m=null,pe=null,D=new Rt(0,0,0),X=0,Te=!1,Re=null,xe=null,te=null,ye=null,we=null,je.set(0,0,s.canvas.width,s.canvas.height),ot.set(0,0,s.canvas.width,s.canvas.height),u.reset(),d.reset(),p.reset()}return{buffers:{color:u,depth:d,stencil:p},enable:Oe,disable:Mt,bindFramebuffer:gt,drawBuffers:le,useProgram:wn,setBlending:_t,setMaterial:Yt,setFlipSided:pt,setCullFace:Pt,setLineWidth:$t,setPolygonOffset:tn,setScissorTest:en,activeTexture:k,bindTexture:I,unbindTexture:Z,compressedTexImage2D:Ie,compressedTexImage3D:De,texImage2D:Fe,texImage3D:Bt,updateUBOMapping:ut,uniformBlockBinding:Je,texStorage2D:lt,texStorage3D:Tt,texSubImage2D:He,texSubImage3D:rt,compressedTexSubImage2D:Ge,compressedTexSubImage3D:qe,scissor:yt,viewport:ct,reset:Gt}}function lR(s,e,t,n,r,a,c){const u=r.isWebGL2,d=r.maxTextures,p=r.maxCubemapSize,g=r.maxTextureSize,v=r.maxSamples,x=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,T=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),b=new WeakMap;let C;const E=new WeakMap;let M=!1;try{M=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function V(k,I){return M?new OffscreenCanvas(k,I):Za("canvas")}function U(k,I,Z,Ie){let De=1;if((k.width>Ie||k.height>Ie)&&(De=Ie/Math.max(k.width,k.height)),De<1||I===!0)if(typeof HTMLImageElement<"u"&&k instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&k instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&k instanceof ImageBitmap){const He=I?bc:Math.floor,rt=He(De*k.width),Ge=He(De*k.height);C===void 0&&(C=V(rt,Ge));const qe=Z?V(rt,Ge):C;return qe.width=rt,qe.height=Ge,qe.getContext("2d").drawImage(k,0,0,rt,Ge),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+k.width+"x"+k.height+") to ("+rt+"x"+Ge+")."),qe}else return"data"in k&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+k.width+"x"+k.height+")."),k;return k}function B(k){return Gf(k.width)&&Gf(k.height)}function z(k){return u?!1:k.wrapS!==qi||k.wrapT!==qi||k.minFilter!==Xn&&k.minFilter!==Mi}function $(k,I){return k.generateMipmaps&&I&&k.minFilter!==Xn&&k.minFilter!==Mi}function m(k){s.generateMipmap(k)}function pe(k,I,Z,Ie,De=!1){if(u===!1)return I;if(k!==null){if(s[k]!==void 0)return s[k];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+k+"'")}let He=I;if(I===s.RED&&(Z===s.FLOAT&&(He=s.R32F),Z===s.HALF_FLOAT&&(He=s.R16F),Z===s.UNSIGNED_BYTE&&(He=s.R8)),I===s.RED_INTEGER&&(Z===s.UNSIGNED_BYTE&&(He=s.R8UI),Z===s.UNSIGNED_SHORT&&(He=s.R16UI),Z===s.UNSIGNED_INT&&(He=s.R32UI),Z===s.BYTE&&(He=s.R8I),Z===s.SHORT&&(He=s.R16I),Z===s.INT&&(He=s.R32I)),I===s.RG&&(Z===s.FLOAT&&(He=s.RG32F),Z===s.HALF_FLOAT&&(He=s.RG16F),Z===s.UNSIGNED_BYTE&&(He=s.RG8)),I===s.RGBA){const rt=De?Mc:an.getTransfer(Ie);Z===s.FLOAT&&(He=s.RGBA32F),Z===s.HALF_FLOAT&&(He=s.RGBA16F),Z===s.UNSIGNED_BYTE&&(He=rt===vn?s.SRGB8_ALPHA8:s.RGBA8),Z===s.UNSIGNED_SHORT_4_4_4_4&&(He=s.RGBA4),Z===s.UNSIGNED_SHORT_5_5_5_1&&(He=s.RGB5_A1)}return(He===s.R16F||He===s.R32F||He===s.RG16F||He===s.RG32F||He===s.RGBA16F||He===s.RGBA32F)&&e.get("EXT_color_buffer_float"),He}function D(k,I,Z){return $(k,Z)===!0||k.isFramebufferTexture&&k.minFilter!==Xn&&k.minFilter!==Mi?Math.log2(Math.max(I.width,I.height))+1:k.mipmaps!==void 0&&k.mipmaps.length>0?k.mipmaps.length:k.isCompressedTexture&&Array.isArray(k.image)?I.mipmaps.length:1}function X(k){return k===Xn||k===Ff||k===vc?s.NEAREST:s.LINEAR}function Te(k){const I=k.target;I.removeEventListener("dispose",Te),xe(I),I.isVideoTexture&&b.delete(I)}function Re(k){const I=k.target;I.removeEventListener("dispose",Re),ye(I)}function xe(k){const I=n.get(k);if(I.__webglInit===void 0)return;const Z=k.source,Ie=E.get(Z);if(Ie){const De=Ie[I.__cacheKey];De.usedTimes--,De.usedTimes===0&&te(k),Object.keys(Ie).length===0&&E.delete(Z)}n.remove(k)}function te(k){const I=n.get(k);s.deleteTexture(I.__webglTexture);const Z=k.source,Ie=E.get(Z);delete Ie[I.__cacheKey],c.memory.textures--}function ye(k){const I=k.texture,Z=n.get(k),Ie=n.get(I);if(Ie.__webglTexture!==void 0&&(s.deleteTexture(Ie.__webglTexture),c.memory.textures--),k.depthTexture&&k.depthTexture.dispose(),k.isWebGLCubeRenderTarget)for(let De=0;De<6;De++){if(Array.isArray(Z.__webglFramebuffer[De]))for(let He=0;He<Z.__webglFramebuffer[De].length;He++)s.deleteFramebuffer(Z.__webglFramebuffer[De][He]);else s.deleteFramebuffer(Z.__webglFramebuffer[De]);Z.__webglDepthbuffer&&s.deleteRenderbuffer(Z.__webglDepthbuffer[De])}else{if(Array.isArray(Z.__webglFramebuffer))for(let De=0;De<Z.__webglFramebuffer.length;De++)s.deleteFramebuffer(Z.__webglFramebuffer[De]);else s.deleteFramebuffer(Z.__webglFramebuffer);if(Z.__webglDepthbuffer&&s.deleteRenderbuffer(Z.__webglDepthbuffer),Z.__webglMultisampledFramebuffer&&s.deleteFramebuffer(Z.__webglMultisampledFramebuffer),Z.__webglColorRenderbuffer)for(let De=0;De<Z.__webglColorRenderbuffer.length;De++)Z.__webglColorRenderbuffer[De]&&s.deleteRenderbuffer(Z.__webglColorRenderbuffer[De]);Z.__webglDepthRenderbuffer&&s.deleteRenderbuffer(Z.__webglDepthRenderbuffer)}if(k.isWebGLMultipleRenderTargets)for(let De=0,He=I.length;De<He;De++){const rt=n.get(I[De]);rt.__webglTexture&&(s.deleteTexture(rt.__webglTexture),c.memory.textures--),n.remove(I[De])}n.remove(I),n.remove(k)}let we=0;function ge(){we=0}function Ue(){const k=we;return k>=d&&console.warn("THREE.WebGLTextures: Trying to use "+k+" texture units while this GPU supports only "+d),we+=1,k}function Ce(k){const I=[];return I.push(k.wrapS),I.push(k.wrapT),I.push(k.wrapR||0),I.push(k.magFilter),I.push(k.minFilter),I.push(k.anisotropy),I.push(k.internalFormat),I.push(k.format),I.push(k.type),I.push(k.generateMipmaps),I.push(k.premultiplyAlpha),I.push(k.flipY),I.push(k.unpackAlignment),I.push(k.colorSpace),I.join()}function be(k,I){const Z=n.get(k);if(k.isVideoTexture&&tn(k),k.isRenderTargetTexture===!1&&k.version>0&&Z.__version!==k.version){const Ie=k.image;if(Ie===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(Ie.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Oe(Z,k,I);return}}t.bindTexture(s.TEXTURE_2D,Z.__webglTexture,s.TEXTURE0+I)}function ne(k,I){const Z=n.get(k);if(k.version>0&&Z.__version!==k.version){Oe(Z,k,I);return}t.bindTexture(s.TEXTURE_2D_ARRAY,Z.__webglTexture,s.TEXTURE0+I)}function me(k,I){const Z=n.get(k);if(k.version>0&&Z.__version!==k.version){Oe(Z,k,I);return}t.bindTexture(s.TEXTURE_3D,Z.__webglTexture,s.TEXTURE0+I)}function We(k,I){const Z=n.get(k);if(k.version>0&&Z.__version!==k.version){Mt(Z,k,I);return}t.bindTexture(s.TEXTURE_CUBE_MAP,Z.__webglTexture,s.TEXTURE0+I)}const Ye={[jo]:s.REPEAT,[qi]:s.CLAMP_TO_EDGE,[Sc]:s.MIRRORED_REPEAT},je={[Xn]:s.NEAREST,[Ff]:s.NEAREST_MIPMAP_NEAREST,[vc]:s.NEAREST_MIPMAP_LINEAR,[Mi]:s.LINEAR,[Km]:s.LINEAR_MIPMAP_NEAREST,[to]:s.LINEAR_MIPMAP_LINEAR},ot={[XM]:s.NEVER,[JM]:s.ALWAYS,[qM]:s.LESS,[jM]:s.LEQUAL,[YM]:s.EQUAL,[ZM]:s.GEQUAL,[KM]:s.GREATER,[$M]:s.NOTEQUAL};function It(k,I,Z){if(Z?(s.texParameteri(k,s.TEXTURE_WRAP_S,Ye[I.wrapS]),s.texParameteri(k,s.TEXTURE_WRAP_T,Ye[I.wrapT]),(k===s.TEXTURE_3D||k===s.TEXTURE_2D_ARRAY)&&s.texParameteri(k,s.TEXTURE_WRAP_R,Ye[I.wrapR]),s.texParameteri(k,s.TEXTURE_MAG_FILTER,je[I.magFilter]),s.texParameteri(k,s.TEXTURE_MIN_FILTER,je[I.minFilter])):(s.texParameteri(k,s.TEXTURE_WRAP_S,s.CLAMP_TO_EDGE),s.texParameteri(k,s.TEXTURE_WRAP_T,s.CLAMP_TO_EDGE),(k===s.TEXTURE_3D||k===s.TEXTURE_2D_ARRAY)&&s.texParameteri(k,s.TEXTURE_WRAP_R,s.CLAMP_TO_EDGE),(I.wrapS!==qi||I.wrapT!==qi)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),s.texParameteri(k,s.TEXTURE_MAG_FILTER,X(I.magFilter)),s.texParameteri(k,s.TEXTURE_MIN_FILTER,X(I.minFilter)),I.minFilter!==Xn&&I.minFilter!==Mi&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),I.compareFunction&&(s.texParameteri(k,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(k,s.TEXTURE_COMPARE_FUNC,ot[I.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){const Ie=e.get("EXT_texture_filter_anisotropic");if(I.magFilter===Xn||I.minFilter!==vc&&I.minFilter!==to||I.type===Yr&&e.has("OES_texture_float_linear")===!1||u===!1&&I.type===Ka&&e.has("OES_texture_half_float_linear")===!1)return;(I.anisotropy>1||n.get(I).__currentAnisotropy)&&(s.texParameterf(k,Ie.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(I.anisotropy,r.getMaxAnisotropy())),n.get(I).__currentAnisotropy=I.anisotropy)}}function Pe(k,I){let Z=!1;k.__webglInit===void 0&&(k.__webglInit=!0,I.addEventListener("dispose",Te));const Ie=I.source;let De=E.get(Ie);De===void 0&&(De={},E.set(Ie,De));const He=Ce(I);if(He!==k.__cacheKey){De[He]===void 0&&(De[He]={texture:s.createTexture(),usedTimes:0},c.memory.textures++,Z=!0),De[He].usedTimes++;const rt=De[k.__cacheKey];rt!==void 0&&(De[k.__cacheKey].usedTimes--,rt.usedTimes===0&&te(I)),k.__cacheKey=He,k.__webglTexture=De[He].texture}return Z}function Oe(k,I,Z){let Ie=s.TEXTURE_2D;(I.isDataArrayTexture||I.isCompressedArrayTexture)&&(Ie=s.TEXTURE_2D_ARRAY),I.isData3DTexture&&(Ie=s.TEXTURE_3D);const De=Pe(k,I),He=I.source;t.bindTexture(Ie,k.__webglTexture,s.TEXTURE0+Z);const rt=n.get(He);if(He.version!==rt.__version||De===!0){t.activeTexture(s.TEXTURE0+Z);const Ge=an.getPrimaries(an.workingColorSpace),qe=I.colorSpace===ji?null:an.getPrimaries(I.colorSpace),lt=I.colorSpace===ji||Ge===qe?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,I.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,I.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,I.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,lt);const Tt=z(I)&&B(I.image)===!1;let Fe=U(I.image,Tt,!1,g);Fe=en(I,Fe);const Bt=B(Fe)||u,yt=a.convert(I.format,I.colorSpace);let ct=a.convert(I.type),ut=pe(I.internalFormat,yt,ct,I.colorSpace,I.isVideoTexture);It(Ie,I,Bt);let Je;const Gt=I.mipmaps,Q=u&&I.isVideoTexture!==!0,ke=rt.__version===void 0||De===!0,ze=D(I,Fe,Bt);if(I.isDepthTexture)ut=s.DEPTH_COMPONENT,u?I.type===Yr?ut=s.DEPTH_COMPONENT32F:I.type===ys?ut=s.DEPTH_COMPONENT24:I.type===Js?ut=s.DEPTH24_STENCIL8:ut=s.DEPTH_COMPONENT16:I.type===Yr&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),I.format===Qs&&ut===s.DEPTH_COMPONENT&&I.type!==$f&&I.type!==ys&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),I.type=ys,ct=a.convert(I.type)),I.format===Ko&&ut===s.DEPTH_COMPONENT&&(ut=s.DEPTH_STENCIL,I.type!==Js&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),I.type=Js,ct=a.convert(I.type))),ke&&(Q?t.texStorage2D(s.TEXTURE_2D,1,ut,Fe.width,Fe.height):t.texImage2D(s.TEXTURE_2D,0,ut,Fe.width,Fe.height,0,yt,ct,null));else if(I.isDataTexture)if(Gt.length>0&&Bt){Q&&ke&&t.texStorage2D(s.TEXTURE_2D,ze,ut,Gt[0].width,Gt[0].height);for(let Se=0,Be=Gt.length;Se<Be;Se++)Je=Gt[Se],Q?t.texSubImage2D(s.TEXTURE_2D,Se,0,0,Je.width,Je.height,yt,ct,Je.data):t.texImage2D(s.TEXTURE_2D,Se,ut,Je.width,Je.height,0,yt,ct,Je.data);I.generateMipmaps=!1}else Q?(ke&&t.texStorage2D(s.TEXTURE_2D,ze,ut,Fe.width,Fe.height),t.texSubImage2D(s.TEXTURE_2D,0,0,0,Fe.width,Fe.height,yt,ct,Fe.data)):t.texImage2D(s.TEXTURE_2D,0,ut,Fe.width,Fe.height,0,yt,ct,Fe.data);else if(I.isCompressedTexture)if(I.isCompressedArrayTexture){Q&&ke&&t.texStorage3D(s.TEXTURE_2D_ARRAY,ze,ut,Gt[0].width,Gt[0].height,Fe.depth);for(let Se=0,Be=Gt.length;Se<Be;Se++)Je=Gt[Se],I.format!==Yi?yt!==null?Q?t.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,Se,0,0,0,Je.width,Je.height,Fe.depth,yt,Je.data,0,0):t.compressedTexImage3D(s.TEXTURE_2D_ARRAY,Se,ut,Je.width,Je.height,Fe.depth,0,Je.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Q?t.texSubImage3D(s.TEXTURE_2D_ARRAY,Se,0,0,0,Je.width,Je.height,Fe.depth,yt,ct,Je.data):t.texImage3D(s.TEXTURE_2D_ARRAY,Se,ut,Je.width,Je.height,Fe.depth,0,yt,ct,Je.data)}else{Q&&ke&&t.texStorage2D(s.TEXTURE_2D,ze,ut,Gt[0].width,Gt[0].height);for(let Se=0,Be=Gt.length;Se<Be;Se++)Je=Gt[Se],I.format!==Yi?yt!==null?Q?t.compressedTexSubImage2D(s.TEXTURE_2D,Se,0,0,Je.width,Je.height,yt,Je.data):t.compressedTexImage2D(s.TEXTURE_2D,Se,ut,Je.width,Je.height,0,Je.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Q?t.texSubImage2D(s.TEXTURE_2D,Se,0,0,Je.width,Je.height,yt,ct,Je.data):t.texImage2D(s.TEXTURE_2D,Se,ut,Je.width,Je.height,0,yt,ct,Je.data)}else if(I.isDataArrayTexture)Q?(ke&&t.texStorage3D(s.TEXTURE_2D_ARRAY,ze,ut,Fe.width,Fe.height,Fe.depth),t.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,Fe.width,Fe.height,Fe.depth,yt,ct,Fe.data)):t.texImage3D(s.TEXTURE_2D_ARRAY,0,ut,Fe.width,Fe.height,Fe.depth,0,yt,ct,Fe.data);else if(I.isData3DTexture)Q?(ke&&t.texStorage3D(s.TEXTURE_3D,ze,ut,Fe.width,Fe.height,Fe.depth),t.texSubImage3D(s.TEXTURE_3D,0,0,0,0,Fe.width,Fe.height,Fe.depth,yt,ct,Fe.data)):t.texImage3D(s.TEXTURE_3D,0,ut,Fe.width,Fe.height,Fe.depth,0,yt,ct,Fe.data);else if(I.isFramebufferTexture){if(ke)if(Q)t.texStorage2D(s.TEXTURE_2D,ze,ut,Fe.width,Fe.height);else{let Se=Fe.width,Be=Fe.height;for(let nt=0;nt<ze;nt++)t.texImage2D(s.TEXTURE_2D,nt,ut,Se,Be,0,yt,ct,null),Se>>=1,Be>>=1}}else if(Gt.length>0&&Bt){Q&&ke&&t.texStorage2D(s.TEXTURE_2D,ze,ut,Gt[0].width,Gt[0].height);for(let Se=0,Be=Gt.length;Se<Be;Se++)Je=Gt[Se],Q?t.texSubImage2D(s.TEXTURE_2D,Se,0,0,yt,ct,Je):t.texImage2D(s.TEXTURE_2D,Se,ut,yt,ct,Je);I.generateMipmaps=!1}else Q?(ke&&t.texStorage2D(s.TEXTURE_2D,ze,ut,Fe.width,Fe.height),t.texSubImage2D(s.TEXTURE_2D,0,0,0,yt,ct,Fe)):t.texImage2D(s.TEXTURE_2D,0,ut,yt,ct,Fe);$(I,Bt)&&m(Ie),rt.__version=He.version,I.onUpdate&&I.onUpdate(I)}k.__version=I.version}function Mt(k,I,Z){if(I.image.length!==6)return;const Ie=Pe(k,I),De=I.source;t.bindTexture(s.TEXTURE_CUBE_MAP,k.__webglTexture,s.TEXTURE0+Z);const He=n.get(De);if(De.version!==He.__version||Ie===!0){t.activeTexture(s.TEXTURE0+Z);const rt=an.getPrimaries(an.workingColorSpace),Ge=I.colorSpace===ji?null:an.getPrimaries(I.colorSpace),qe=I.colorSpace===ji||rt===Ge?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,I.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,I.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,I.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,qe);const lt=I.isCompressedTexture||I.image[0].isCompressedTexture,Tt=I.image[0]&&I.image[0].isDataTexture,Fe=[];for(let Se=0;Se<6;Se++)!lt&&!Tt?Fe[Se]=U(I.image[Se],!1,!0,p):Fe[Se]=Tt?I.image[Se].image:I.image[Se],Fe[Se]=en(I,Fe[Se]);const Bt=Fe[0],yt=B(Bt)||u,ct=a.convert(I.format,I.colorSpace),ut=a.convert(I.type),Je=pe(I.internalFormat,ct,ut,I.colorSpace),Gt=u&&I.isVideoTexture!==!0,Q=He.__version===void 0||Ie===!0;let ke=D(I,Bt,yt);It(s.TEXTURE_CUBE_MAP,I,yt);let ze;if(lt){Gt&&Q&&t.texStorage2D(s.TEXTURE_CUBE_MAP,ke,Je,Bt.width,Bt.height);for(let Se=0;Se<6;Se++){ze=Fe[Se].mipmaps;for(let Be=0;Be<ze.length;Be++){const nt=ze[Be];I.format!==Yi?ct!==null?Gt?t.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Se,Be,0,0,nt.width,nt.height,ct,nt.data):t.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Se,Be,Je,nt.width,nt.height,0,nt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Gt?t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Se,Be,0,0,nt.width,nt.height,ct,ut,nt.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Se,Be,Je,nt.width,nt.height,0,ct,ut,nt.data)}}}else{ze=I.mipmaps,Gt&&Q&&(ze.length>0&&ke++,t.texStorage2D(s.TEXTURE_CUBE_MAP,ke,Je,Fe[0].width,Fe[0].height));for(let Se=0;Se<6;Se++)if(Tt){Gt?t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Se,0,0,0,Fe[Se].width,Fe[Se].height,ct,ut,Fe[Se].data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Se,0,Je,Fe[Se].width,Fe[Se].height,0,ct,ut,Fe[Se].data);for(let Be=0;Be<ze.length;Be++){const kt=ze[Be].image[Se].image;Gt?t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Se,Be+1,0,0,kt.width,kt.height,ct,ut,kt.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Se,Be+1,Je,kt.width,kt.height,0,ct,ut,kt.data)}}else{Gt?t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Se,0,0,0,ct,ut,Fe[Se]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Se,0,Je,ct,ut,Fe[Se]);for(let Be=0;Be<ze.length;Be++){const nt=ze[Be];Gt?t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Se,Be+1,0,0,ct,ut,nt.image[Se]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Se,Be+1,Je,ct,ut,nt.image[Se])}}}$(I,yt)&&m(s.TEXTURE_CUBE_MAP),He.__version=De.version,I.onUpdate&&I.onUpdate(I)}k.__version=I.version}function gt(k,I,Z,Ie,De,He){const rt=a.convert(Z.format,Z.colorSpace),Ge=a.convert(Z.type),qe=pe(Z.internalFormat,rt,Ge,Z.colorSpace);if(!n.get(I).__hasExternalTextures){const Tt=Math.max(1,I.width>>He),Fe=Math.max(1,I.height>>He);De===s.TEXTURE_3D||De===s.TEXTURE_2D_ARRAY?t.texImage3D(De,He,qe,Tt,Fe,I.depth,0,rt,Ge,null):t.texImage2D(De,He,qe,Tt,Fe,0,rt,Ge,null)}t.bindFramebuffer(s.FRAMEBUFFER,k),$t(I)?x.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,Ie,De,n.get(Z).__webglTexture,0,Pt(I)):(De===s.TEXTURE_2D||De>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&De<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,Ie,De,n.get(Z).__webglTexture,He),t.bindFramebuffer(s.FRAMEBUFFER,null)}function le(k,I,Z){if(s.bindRenderbuffer(s.RENDERBUFFER,k),I.depthBuffer&&!I.stencilBuffer){let Ie=u===!0?s.DEPTH_COMPONENT24:s.DEPTH_COMPONENT16;if(Z||$t(I)){const De=I.depthTexture;De&&De.isDepthTexture&&(De.type===Yr?Ie=s.DEPTH_COMPONENT32F:De.type===ys&&(Ie=s.DEPTH_COMPONENT24));const He=Pt(I);$t(I)?x.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,He,Ie,I.width,I.height):s.renderbufferStorageMultisample(s.RENDERBUFFER,He,Ie,I.width,I.height)}else s.renderbufferStorage(s.RENDERBUFFER,Ie,I.width,I.height);s.framebufferRenderbuffer(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.RENDERBUFFER,k)}else if(I.depthBuffer&&I.stencilBuffer){const Ie=Pt(I);Z&&$t(I)===!1?s.renderbufferStorageMultisample(s.RENDERBUFFER,Ie,s.DEPTH24_STENCIL8,I.width,I.height):$t(I)?x.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,Ie,s.DEPTH24_STENCIL8,I.width,I.height):s.renderbufferStorage(s.RENDERBUFFER,s.DEPTH_STENCIL,I.width,I.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.RENDERBUFFER,k)}else{const Ie=I.isWebGLMultipleRenderTargets===!0?I.texture:[I.texture];for(let De=0;De<Ie.length;De++){const He=Ie[De],rt=a.convert(He.format,He.colorSpace),Ge=a.convert(He.type),qe=pe(He.internalFormat,rt,Ge,He.colorSpace),lt=Pt(I);Z&&$t(I)===!1?s.renderbufferStorageMultisample(s.RENDERBUFFER,lt,qe,I.width,I.height):$t(I)?x.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,lt,qe,I.width,I.height):s.renderbufferStorage(s.RENDERBUFFER,qe,I.width,I.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function wn(k,I){if(I&&I.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(s.FRAMEBUFFER,k),!(I.depthTexture&&I.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(I.depthTexture).__webglTexture||I.depthTexture.image.width!==I.width||I.depthTexture.image.height!==I.height)&&(I.depthTexture.image.width=I.width,I.depthTexture.image.height=I.height,I.depthTexture.needsUpdate=!0),be(I.depthTexture,0);const Ie=n.get(I.depthTexture).__webglTexture,De=Pt(I);if(I.depthTexture.format===Qs)$t(I)?x.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,Ie,0,De):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,Ie,0);else if(I.depthTexture.format===Ko)$t(I)?x.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,Ie,0,De):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,Ie,0);else throw new Error("Unknown depthTexture format")}function tt(k){const I=n.get(k),Z=k.isWebGLCubeRenderTarget===!0;if(k.depthTexture&&!I.__autoAllocateDepthBuffer){if(Z)throw new Error("target.depthTexture not supported in Cube render targets");wn(I.__webglFramebuffer,k)}else if(Z){I.__webglDepthbuffer=[];for(let Ie=0;Ie<6;Ie++)t.bindFramebuffer(s.FRAMEBUFFER,I.__webglFramebuffer[Ie]),I.__webglDepthbuffer[Ie]=s.createRenderbuffer(),le(I.__webglDepthbuffer[Ie],k,!1)}else t.bindFramebuffer(s.FRAMEBUFFER,I.__webglFramebuffer),I.__webglDepthbuffer=s.createRenderbuffer(),le(I.__webglDepthbuffer,k,!1);t.bindFramebuffer(s.FRAMEBUFFER,null)}function dt(k,I,Z){const Ie=n.get(k);I!==void 0&&gt(Ie.__webglFramebuffer,k,k.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),Z!==void 0&&tt(k)}function _t(k){const I=k.texture,Z=n.get(k),Ie=n.get(I);k.addEventListener("dispose",Re),k.isWebGLMultipleRenderTargets!==!0&&(Ie.__webglTexture===void 0&&(Ie.__webglTexture=s.createTexture()),Ie.__version=I.version,c.memory.textures++);const De=k.isWebGLCubeRenderTarget===!0,He=k.isWebGLMultipleRenderTargets===!0,rt=B(k)||u;if(De){Z.__webglFramebuffer=[];for(let Ge=0;Ge<6;Ge++)if(u&&I.mipmaps&&I.mipmaps.length>0){Z.__webglFramebuffer[Ge]=[];for(let qe=0;qe<I.mipmaps.length;qe++)Z.__webglFramebuffer[Ge][qe]=s.createFramebuffer()}else Z.__webglFramebuffer[Ge]=s.createFramebuffer()}else{if(u&&I.mipmaps&&I.mipmaps.length>0){Z.__webglFramebuffer=[];for(let Ge=0;Ge<I.mipmaps.length;Ge++)Z.__webglFramebuffer[Ge]=s.createFramebuffer()}else Z.__webglFramebuffer=s.createFramebuffer();if(He)if(r.drawBuffers){const Ge=k.texture;for(let qe=0,lt=Ge.length;qe<lt;qe++){const Tt=n.get(Ge[qe]);Tt.__webglTexture===void 0&&(Tt.__webglTexture=s.createTexture(),c.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(u&&k.samples>0&&$t(k)===!1){const Ge=He?I:[I];Z.__webglMultisampledFramebuffer=s.createFramebuffer(),Z.__webglColorRenderbuffer=[],t.bindFramebuffer(s.FRAMEBUFFER,Z.__webglMultisampledFramebuffer);for(let qe=0;qe<Ge.length;qe++){const lt=Ge[qe];Z.__webglColorRenderbuffer[qe]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,Z.__webglColorRenderbuffer[qe]);const Tt=a.convert(lt.format,lt.colorSpace),Fe=a.convert(lt.type),Bt=pe(lt.internalFormat,Tt,Fe,lt.colorSpace,k.isXRRenderTarget===!0),yt=Pt(k);s.renderbufferStorageMultisample(s.RENDERBUFFER,yt,Bt,k.width,k.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+qe,s.RENDERBUFFER,Z.__webglColorRenderbuffer[qe])}s.bindRenderbuffer(s.RENDERBUFFER,null),k.depthBuffer&&(Z.__webglDepthRenderbuffer=s.createRenderbuffer(),le(Z.__webglDepthRenderbuffer,k,!0)),t.bindFramebuffer(s.FRAMEBUFFER,null)}}if(De){t.bindTexture(s.TEXTURE_CUBE_MAP,Ie.__webglTexture),It(s.TEXTURE_CUBE_MAP,I,rt);for(let Ge=0;Ge<6;Ge++)if(u&&I.mipmaps&&I.mipmaps.length>0)for(let qe=0;qe<I.mipmaps.length;qe++)gt(Z.__webglFramebuffer[Ge][qe],k,I,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+Ge,qe);else gt(Z.__webglFramebuffer[Ge],k,I,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+Ge,0);$(I,rt)&&m(s.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(He){const Ge=k.texture;for(let qe=0,lt=Ge.length;qe<lt;qe++){const Tt=Ge[qe],Fe=n.get(Tt);t.bindTexture(s.TEXTURE_2D,Fe.__webglTexture),It(s.TEXTURE_2D,Tt,rt),gt(Z.__webglFramebuffer,k,Tt,s.COLOR_ATTACHMENT0+qe,s.TEXTURE_2D,0),$(Tt,rt)&&m(s.TEXTURE_2D)}t.unbindTexture()}else{let Ge=s.TEXTURE_2D;if((k.isWebGL3DRenderTarget||k.isWebGLArrayRenderTarget)&&(u?Ge=k.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),t.bindTexture(Ge,Ie.__webglTexture),It(Ge,I,rt),u&&I.mipmaps&&I.mipmaps.length>0)for(let qe=0;qe<I.mipmaps.length;qe++)gt(Z.__webglFramebuffer[qe],k,I,s.COLOR_ATTACHMENT0,Ge,qe);else gt(Z.__webglFramebuffer,k,I,s.COLOR_ATTACHMENT0,Ge,0);$(I,rt)&&m(Ge),t.unbindTexture()}k.depthBuffer&&tt(k)}function Yt(k){const I=B(k)||u,Z=k.isWebGLMultipleRenderTargets===!0?k.texture:[k.texture];for(let Ie=0,De=Z.length;Ie<De;Ie++){const He=Z[Ie];if($(He,I)){const rt=k.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:s.TEXTURE_2D,Ge=n.get(He).__webglTexture;t.bindTexture(rt,Ge),m(rt),t.unbindTexture()}}}function pt(k){if(u&&k.samples>0&&$t(k)===!1){const I=k.isWebGLMultipleRenderTargets?k.texture:[k.texture],Z=k.width,Ie=k.height;let De=s.COLOR_BUFFER_BIT;const He=[],rt=k.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Ge=n.get(k),qe=k.isWebGLMultipleRenderTargets===!0;if(qe)for(let lt=0;lt<I.length;lt++)t.bindFramebuffer(s.FRAMEBUFFER,Ge.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+lt,s.RENDERBUFFER,null),t.bindFramebuffer(s.FRAMEBUFFER,Ge.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+lt,s.TEXTURE_2D,null,0);t.bindFramebuffer(s.READ_FRAMEBUFFER,Ge.__webglMultisampledFramebuffer),t.bindFramebuffer(s.DRAW_FRAMEBUFFER,Ge.__webglFramebuffer);for(let lt=0;lt<I.length;lt++){He.push(s.COLOR_ATTACHMENT0+lt),k.depthBuffer&&He.push(rt);const Tt=Ge.__ignoreDepthValues!==void 0?Ge.__ignoreDepthValues:!1;if(Tt===!1&&(k.depthBuffer&&(De|=s.DEPTH_BUFFER_BIT),k.stencilBuffer&&(De|=s.STENCIL_BUFFER_BIT)),qe&&s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,Ge.__webglColorRenderbuffer[lt]),Tt===!0&&(s.invalidateFramebuffer(s.READ_FRAMEBUFFER,[rt]),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[rt])),qe){const Fe=n.get(I[lt]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,Fe,0)}s.blitFramebuffer(0,0,Z,Ie,0,0,Z,Ie,De,s.NEAREST),T&&s.invalidateFramebuffer(s.READ_FRAMEBUFFER,He)}if(t.bindFramebuffer(s.READ_FRAMEBUFFER,null),t.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),qe)for(let lt=0;lt<I.length;lt++){t.bindFramebuffer(s.FRAMEBUFFER,Ge.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+lt,s.RENDERBUFFER,Ge.__webglColorRenderbuffer[lt]);const Tt=n.get(I[lt]).__webglTexture;t.bindFramebuffer(s.FRAMEBUFFER,Ge.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+lt,s.TEXTURE_2D,Tt,0)}t.bindFramebuffer(s.DRAW_FRAMEBUFFER,Ge.__webglMultisampledFramebuffer)}}function Pt(k){return Math.min(v,k.samples)}function $t(k){const I=n.get(k);return u&&k.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&I.__useRenderToTexture!==!1}function tn(k){const I=c.render.frame;b.get(k)!==I&&(b.set(k,I),k.update())}function en(k,I){const Z=k.colorSpace,Ie=k.format,De=k.type;return k.isCompressedTexture===!0||k.isVideoTexture===!0||k.format===zf||Z!==Kn&&Z!==ji&&(an.getTransfer(Z)===vn?u===!1?e.has("EXT_sRGB")===!0&&Ie===Yi?(k.format=zf,k.minFilter=Mi,k.generateMipmaps=!1):I=ag.sRGBToLinear(I):(Ie!==Yi||De!==Es)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",Z)),I}this.allocateTextureUnit=Ue,this.resetTextureUnits=ge,this.setTexture2D=be,this.setTexture2DArray=ne,this.setTexture3D=me,this.setTextureCube=We,this.rebindTextures=dt,this.setupRenderTarget=_t,this.updateRenderTargetMipmap=Yt,this.updateMultisampleRenderTarget=pt,this.setupDepthRenderbuffer=tt,this.setupFrameBufferTexture=gt,this.useMultisampledRTT=$t}function cR(s,e,t){const n=t.isWebGL2;function r(a,c=ji){let u;const d=an.getTransfer(c);if(a===Es)return s.UNSIGNED_BYTE;if(a===Zm)return s.UNSIGNED_SHORT_4_4_4_4;if(a===Jm)return s.UNSIGNED_SHORT_5_5_5_1;if(a===PM)return s.BYTE;if(a===IM)return s.SHORT;if(a===$f)return s.UNSIGNED_SHORT;if(a===$m)return s.INT;if(a===ys)return s.UNSIGNED_INT;if(a===Yr)return s.FLOAT;if(a===Ka)return n?s.HALF_FLOAT:(u=e.get("OES_texture_half_float"),u!==null?u.HALF_FLOAT_OES:null);if(a===DM)return s.ALPHA;if(a===Yi)return s.RGBA;if(a===NM)return s.LUMINANCE;if(a===UM)return s.LUMINANCE_ALPHA;if(a===Qs)return s.DEPTH_COMPONENT;if(a===Ko)return s.DEPTH_STENCIL;if(a===zf)return u=e.get("EXT_sRGB"),u!==null?u.SRGB_ALPHA_EXT:null;if(a===OM)return s.RED;if(a===Qm)return s.RED_INTEGER;if(a===FM)return s.RG;if(a===eg)return s.RG_INTEGER;if(a===tg)return s.RGBA_INTEGER;if(a===ku||a===Vu||a===Wu||a===Xu)if(d===vn)if(u=e.get("WEBGL_compressed_texture_s3tc_srgb"),u!==null){if(a===ku)return u.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(a===Vu)return u.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(a===Wu)return u.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(a===Xu)return u.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(u=e.get("WEBGL_compressed_texture_s3tc"),u!==null){if(a===ku)return u.COMPRESSED_RGB_S3TC_DXT1_EXT;if(a===Vu)return u.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(a===Wu)return u.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(a===Xu)return u.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(a===op||a===ap||a===lp||a===cp)if(u=e.get("WEBGL_compressed_texture_pvrtc"),u!==null){if(a===op)return u.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(a===ap)return u.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(a===lp)return u.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(a===cp)return u.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(a===BM)return u=e.get("WEBGL_compressed_texture_etc1"),u!==null?u.COMPRESSED_RGB_ETC1_WEBGL:null;if(a===up||a===fp)if(u=e.get("WEBGL_compressed_texture_etc"),u!==null){if(a===up)return d===vn?u.COMPRESSED_SRGB8_ETC2:u.COMPRESSED_RGB8_ETC2;if(a===fp)return d===vn?u.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:u.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(a===hp||a===dp||a===pp||a===mp||a===gp||a===_p||a===vp||a===xp||a===yp||a===Sp||a===Mp||a===Ep||a===Tp||a===Ap)if(u=e.get("WEBGL_compressed_texture_astc"),u!==null){if(a===hp)return d===vn?u.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:u.COMPRESSED_RGBA_ASTC_4x4_KHR;if(a===dp)return d===vn?u.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:u.COMPRESSED_RGBA_ASTC_5x4_KHR;if(a===pp)return d===vn?u.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:u.COMPRESSED_RGBA_ASTC_5x5_KHR;if(a===mp)return d===vn?u.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:u.COMPRESSED_RGBA_ASTC_6x5_KHR;if(a===gp)return d===vn?u.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:u.COMPRESSED_RGBA_ASTC_6x6_KHR;if(a===_p)return d===vn?u.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:u.COMPRESSED_RGBA_ASTC_8x5_KHR;if(a===vp)return d===vn?u.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:u.COMPRESSED_RGBA_ASTC_8x6_KHR;if(a===xp)return d===vn?u.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:u.COMPRESSED_RGBA_ASTC_8x8_KHR;if(a===yp)return d===vn?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:u.COMPRESSED_RGBA_ASTC_10x5_KHR;if(a===Sp)return d===vn?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:u.COMPRESSED_RGBA_ASTC_10x6_KHR;if(a===Mp)return d===vn?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:u.COMPRESSED_RGBA_ASTC_10x8_KHR;if(a===Ep)return d===vn?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:u.COMPRESSED_RGBA_ASTC_10x10_KHR;if(a===Tp)return d===vn?u.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:u.COMPRESSED_RGBA_ASTC_12x10_KHR;if(a===Ap)return d===vn?u.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:u.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(a===qu||a===bp||a===wp)if(u=e.get("EXT_texture_compression_bptc"),u!==null){if(a===qu)return d===vn?u.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:u.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(a===bp)return u.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(a===wp)return u.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(a===HM||a===Rp||a===Cp||a===Lp)if(u=e.get("EXT_texture_compression_rgtc"),u!==null){if(a===qu)return u.COMPRESSED_RED_RGTC1_EXT;if(a===Rp)return u.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(a===Cp)return u.COMPRESSED_RED_GREEN_RGTC2_EXT;if(a===Lp)return u.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return a===Js?n?s.UNSIGNED_INT_24_8:(u=e.get("WEBGL_depth_texture"),u!==null?u.UNSIGNED_INT_24_8_WEBGL:null):s[a]!==void 0?s[a]:null}return{convert:r}}class uR extends fi{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class Zs extends Tn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const fR={type:"move"};class _f{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Zs,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Zs,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new re,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new re),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Zs,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new re,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new re),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let r=null,a=null,c=null;const u=this._targetRay,d=this._grip,p=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(p&&e.hand){c=!0;for(const C of e.hand.values()){const E=t.getJointPose(C,n),M=this._getHandJoint(p,C);E!==null&&(M.matrix.fromArray(E.transform.matrix),M.matrix.decompose(M.position,M.rotation,M.scale),M.matrixWorldNeedsUpdate=!0,M.jointRadius=E.radius),M.visible=E!==null}const g=p.joints["index-finger-tip"],v=p.joints["thumb-tip"],x=g.position.distanceTo(v.position),T=.02,b=.005;p.inputState.pinching&&x>T+b?(p.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!p.inputState.pinching&&x<=T-b&&(p.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else d!==null&&e.gripSpace&&(a=t.getPose(e.gripSpace,n),a!==null&&(d.matrix.fromArray(a.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,a.linearVelocity?(d.hasLinearVelocity=!0,d.linearVelocity.copy(a.linearVelocity)):d.hasLinearVelocity=!1,a.angularVelocity?(d.hasAngularVelocity=!0,d.angularVelocity.copy(a.angularVelocity)):d.hasAngularVelocity=!1));u!==null&&(r=t.getPose(e.targetRaySpace,n),r===null&&a!==null&&(r=a),r!==null&&(u.matrix.fromArray(r.transform.matrix),u.matrix.decompose(u.position,u.rotation,u.scale),u.matrixWorldNeedsUpdate=!0,r.linearVelocity?(u.hasLinearVelocity=!0,u.linearVelocity.copy(r.linearVelocity)):u.hasLinearVelocity=!1,r.angularVelocity?(u.hasAngularVelocity=!0,u.angularVelocity.copy(r.angularVelocity)):u.hasAngularVelocity=!1,this.dispatchEvent(fR)))}return u!==null&&(u.visible=r!==null),d!==null&&(d.visible=a!==null),p!==null&&(p.visible=c!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new Zs;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}class hR extends jn{constructor(e,t,n,r,a,c,u,d,p,g){if(g=g!==void 0?g:Qs,g!==Qs&&g!==Ko)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&g===Qs&&(n=ys),n===void 0&&g===Ko&&(n=Js),super(null,r,a,c,u,d,g,n,p),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=u!==void 0?u:Xn,this.minFilter=d!==void 0?d:Xn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class dR extends na{constructor(e,t){super();const n=this;let r=null,a=1,c=null,u="local-floor",d=1,p=null,g=null,v=null,x=null,T=null,b=null;const C=t.getContextAttributes();let E=null,M=null;const V=[],U=[],B=new fi;B.layers.enable(1),B.viewport=new dn;const z=new fi;z.layers.enable(2),z.viewport=new dn;const $=[B,z],m=new uR;m.layers.enable(1),m.layers.enable(2);let pe=null,D=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(ne){let me=V[ne];return me===void 0&&(me=new _f,V[ne]=me),me.getTargetRaySpace()},this.getControllerGrip=function(ne){let me=V[ne];return me===void 0&&(me=new _f,V[ne]=me),me.getGripSpace()},this.getHand=function(ne){let me=V[ne];return me===void 0&&(me=new _f,V[ne]=me),me.getHandSpace()};function X(ne){const me=U.indexOf(ne.inputSource);if(me===-1)return;const We=V[me];We!==void 0&&(We.update(ne.inputSource,ne.frame,p||c),We.dispatchEvent({type:ne.type,data:ne.inputSource}))}function Te(){r.removeEventListener("select",X),r.removeEventListener("selectstart",X),r.removeEventListener("selectend",X),r.removeEventListener("squeeze",X),r.removeEventListener("squeezestart",X),r.removeEventListener("squeezeend",X),r.removeEventListener("end",Te),r.removeEventListener("inputsourceschange",Re);for(let ne=0;ne<V.length;ne++){const me=U[ne];me!==null&&(U[ne]=null,V[ne].disconnect(me))}pe=null,D=null,e.setRenderTarget(E),T=null,x=null,v=null,r=null,M=null,be.stop(),n.isPresenting=!1,n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(ne){a=ne,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(ne){u=ne,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return p||c},this.setReferenceSpace=function(ne){p=ne},this.getBaseLayer=function(){return x!==null?x:T},this.getBinding=function(){return v},this.getFrame=function(){return b},this.getSession=function(){return r},this.setSession=async function(ne){if(r=ne,r!==null){if(E=e.getRenderTarget(),r.addEventListener("select",X),r.addEventListener("selectstart",X),r.addEventListener("selectend",X),r.addEventListener("squeeze",X),r.addEventListener("squeezestart",X),r.addEventListener("squeezeend",X),r.addEventListener("end",Te),r.addEventListener("inputsourceschange",Re),C.xrCompatible!==!0&&await t.makeXRCompatible(),r.renderState.layers===void 0||e.capabilities.isWebGL2===!1){const me={antialias:r.renderState.layers===void 0?C.antialias:!0,alpha:!0,depth:C.depth,stencil:C.stencil,framebufferScaleFactor:a};T=new XRWebGLLayer(r,t,me),r.updateRenderState({baseLayer:T}),M=new no(T.framebufferWidth,T.framebufferHeight,{format:Yi,type:Es,colorSpace:e.outputColorSpace,stencilBuffer:C.stencil})}else{let me=null,We=null,Ye=null;C.depth&&(Ye=C.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,me=C.stencil?Ko:Qs,We=C.stencil?Js:ys);const je={colorFormat:t.RGBA8,depthFormat:Ye,scaleFactor:a};v=new XRWebGLBinding(r,t),x=v.createProjectionLayer(je),r.updateRenderState({layers:[x]}),M=new no(x.textureWidth,x.textureHeight,{format:Yi,type:Es,depthTexture:new hR(x.textureWidth,x.textureHeight,We,void 0,void 0,void 0,void 0,void 0,void 0,me),stencilBuffer:C.stencil,colorSpace:e.outputColorSpace,samples:C.antialias?4:0});const ot=e.properties.get(M);ot.__ignoreDepthValues=x.ignoreDepthValues}M.isXRRenderTarget=!0,this.setFoveation(d),p=null,c=await r.requestReferenceSpace(u),be.setContext(r),be.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode};function Re(ne){for(let me=0;me<ne.removed.length;me++){const We=ne.removed[me],Ye=U.indexOf(We);Ye>=0&&(U[Ye]=null,V[Ye].disconnect(We))}for(let me=0;me<ne.added.length;me++){const We=ne.added[me];let Ye=U.indexOf(We);if(Ye===-1){for(let ot=0;ot<V.length;ot++)if(ot>=U.length){U.push(We),Ye=ot;break}else if(U[ot]===null){U[ot]=We,Ye=ot;break}if(Ye===-1)break}const je=V[Ye];je&&je.connect(We)}}const xe=new re,te=new re;function ye(ne,me,We){xe.setFromMatrixPosition(me.matrixWorld),te.setFromMatrixPosition(We.matrixWorld);const Ye=xe.distanceTo(te),je=me.projectionMatrix.elements,ot=We.projectionMatrix.elements,It=je[14]/(je[10]-1),Pe=je[14]/(je[10]+1),Oe=(je[9]+1)/je[5],Mt=(je[9]-1)/je[5],gt=(je[8]-1)/je[0],le=(ot[8]+1)/ot[0],wn=It*gt,tt=It*le,dt=Ye/(-gt+le),_t=dt*-gt;me.matrixWorld.decompose(ne.position,ne.quaternion,ne.scale),ne.translateX(_t),ne.translateZ(dt),ne.matrixWorld.compose(ne.position,ne.quaternion,ne.scale),ne.matrixWorldInverse.copy(ne.matrixWorld).invert();const Yt=It+dt,pt=Pe+dt,Pt=wn-_t,$t=tt+(Ye-_t),tn=Oe*Pe/pt*Yt,en=Mt*Pe/pt*Yt;ne.projectionMatrix.makePerspective(Pt,$t,tn,en,Yt,pt),ne.projectionMatrixInverse.copy(ne.projectionMatrix).invert()}function we(ne,me){me===null?ne.matrixWorld.copy(ne.matrix):ne.matrixWorld.multiplyMatrices(me.matrixWorld,ne.matrix),ne.matrixWorldInverse.copy(ne.matrixWorld).invert()}this.updateCamera=function(ne){if(r===null)return;m.near=z.near=B.near=ne.near,m.far=z.far=B.far=ne.far,(pe!==m.near||D!==m.far)&&(r.updateRenderState({depthNear:m.near,depthFar:m.far}),pe=m.near,D=m.far);const me=ne.parent,We=m.cameras;we(m,me);for(let Ye=0;Ye<We.length;Ye++)we(We[Ye],me);We.length===2?ye(m,B,z):m.projectionMatrix.copy(B.projectionMatrix),ge(ne,m,me)};function ge(ne,me,We){We===null?ne.matrix.copy(me.matrixWorld):(ne.matrix.copy(We.matrixWorld),ne.matrix.invert(),ne.matrix.multiply(me.matrixWorld)),ne.matrix.decompose(ne.position,ne.quaternion,ne.scale),ne.updateMatrixWorld(!0),ne.projectionMatrix.copy(me.projectionMatrix),ne.projectionMatrixInverse.copy(me.projectionMatrixInverse),ne.isPerspectiveCamera&&(ne.fov=Zo*2*Math.atan(1/ne.projectionMatrix.elements[5]),ne.zoom=1)}this.getCamera=function(){return m},this.getFoveation=function(){if(!(x===null&&T===null))return d},this.setFoveation=function(ne){d=ne,x!==null&&(x.fixedFoveation=ne),T!==null&&T.fixedFoveation!==void 0&&(T.fixedFoveation=ne)};let Ue=null;function Ce(ne,me){if(g=me.getViewerPose(p||c),b=me,g!==null){const We=g.views;T!==null&&(e.setRenderTargetFramebuffer(M,T.framebuffer),e.setRenderTarget(M));let Ye=!1;We.length!==m.cameras.length&&(m.cameras.length=0,Ye=!0);for(let je=0;je<We.length;je++){const ot=We[je];let It=null;if(T!==null)It=T.getViewport(ot);else{const Oe=v.getViewSubImage(x,ot);It=Oe.viewport,je===0&&(e.setRenderTargetTextures(M,Oe.colorTexture,x.ignoreDepthValues?void 0:Oe.depthStencilTexture),e.setRenderTarget(M))}let Pe=$[je];Pe===void 0&&(Pe=new fi,Pe.layers.enable(je),Pe.viewport=new dn,$[je]=Pe),Pe.matrix.fromArray(ot.transform.matrix),Pe.matrix.decompose(Pe.position,Pe.quaternion,Pe.scale),Pe.projectionMatrix.fromArray(ot.projectionMatrix),Pe.projectionMatrixInverse.copy(Pe.projectionMatrix).invert(),Pe.viewport.set(It.x,It.y,It.width,It.height),je===0&&(m.matrix.copy(Pe.matrix),m.matrix.decompose(m.position,m.quaternion,m.scale)),Ye===!0&&m.cameras.push(Pe)}}for(let We=0;We<V.length;We++){const Ye=U[We],je=V[We];Ye!==null&&je!==void 0&&je.update(Ye,me,p||c)}Ue&&Ue(ne,me),me.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:me}),b=null}const be=new _g;be.setAnimationLoop(Ce),this.setAnimationLoop=function(ne){Ue=ne},this.dispose=function(){}}}function pR(s,e){function t(E,M){E.matrixAutoUpdate===!0&&E.updateMatrix(),M.value.copy(E.matrix)}function n(E,M){M.color.getRGB(E.fogColor.value,pg(s)),M.isFog?(E.fogNear.value=M.near,E.fogFar.value=M.far):M.isFogExp2&&(E.fogDensity.value=M.density)}function r(E,M,V,U,B){M.isMeshBasicMaterial||M.isMeshLambertMaterial?a(E,M):M.isMeshToonMaterial?(a(E,M),v(E,M)):M.isMeshPhongMaterial?(a(E,M),g(E,M)):M.isMeshStandardMaterial?(a(E,M),x(E,M),M.isMeshPhysicalMaterial&&T(E,M,B)):M.isMeshMatcapMaterial?(a(E,M),b(E,M)):M.isMeshDepthMaterial?a(E,M):M.isMeshDistanceMaterial?(a(E,M),C(E,M)):M.isMeshNormalMaterial?a(E,M):M.isLineBasicMaterial?(c(E,M),M.isLineDashedMaterial&&u(E,M)):M.isPointsMaterial?d(E,M,V,U):M.isSpriteMaterial?p(E,M):M.isShadowMaterial?(E.color.value.copy(M.color),E.opacity.value=M.opacity):M.isShaderMaterial&&(M.uniformsNeedUpdate=!1)}function a(E,M){E.opacity.value=M.opacity,M.color&&E.diffuse.value.copy(M.color),M.emissive&&E.emissive.value.copy(M.emissive).multiplyScalar(M.emissiveIntensity),M.map&&(E.map.value=M.map,t(M.map,E.mapTransform)),M.alphaMap&&(E.alphaMap.value=M.alphaMap,t(M.alphaMap,E.alphaMapTransform)),M.bumpMap&&(E.bumpMap.value=M.bumpMap,t(M.bumpMap,E.bumpMapTransform),E.bumpScale.value=M.bumpScale,M.side===Ei&&(E.bumpScale.value*=-1)),M.normalMap&&(E.normalMap.value=M.normalMap,t(M.normalMap,E.normalMapTransform),E.normalScale.value.copy(M.normalScale),M.side===Ei&&E.normalScale.value.negate()),M.displacementMap&&(E.displacementMap.value=M.displacementMap,t(M.displacementMap,E.displacementMapTransform),E.displacementScale.value=M.displacementScale,E.displacementBias.value=M.displacementBias),M.emissiveMap&&(E.emissiveMap.value=M.emissiveMap,t(M.emissiveMap,E.emissiveMapTransform)),M.specularMap&&(E.specularMap.value=M.specularMap,t(M.specularMap,E.specularMapTransform)),M.alphaTest>0&&(E.alphaTest.value=M.alphaTest);const V=e.get(M).envMap;if(V&&(E.envMap.value=V,E.flipEnvMap.value=V.isCubeTexture&&V.isRenderTargetTexture===!1?-1:1,E.reflectivity.value=M.reflectivity,E.ior.value=M.ior,E.refractionRatio.value=M.refractionRatio),M.lightMap){E.lightMap.value=M.lightMap;const U=s._useLegacyLights===!0?Math.PI:1;E.lightMapIntensity.value=M.lightMapIntensity*U,t(M.lightMap,E.lightMapTransform)}M.aoMap&&(E.aoMap.value=M.aoMap,E.aoMapIntensity.value=M.aoMapIntensity,t(M.aoMap,E.aoMapTransform))}function c(E,M){E.diffuse.value.copy(M.color),E.opacity.value=M.opacity,M.map&&(E.map.value=M.map,t(M.map,E.mapTransform))}function u(E,M){E.dashSize.value=M.dashSize,E.totalSize.value=M.dashSize+M.gapSize,E.scale.value=M.scale}function d(E,M,V,U){E.diffuse.value.copy(M.color),E.opacity.value=M.opacity,E.size.value=M.size*V,E.scale.value=U*.5,M.map&&(E.map.value=M.map,t(M.map,E.uvTransform)),M.alphaMap&&(E.alphaMap.value=M.alphaMap,t(M.alphaMap,E.alphaMapTransform)),M.alphaTest>0&&(E.alphaTest.value=M.alphaTest)}function p(E,M){E.diffuse.value.copy(M.color),E.opacity.value=M.opacity,E.rotation.value=M.rotation,M.map&&(E.map.value=M.map,t(M.map,E.mapTransform)),M.alphaMap&&(E.alphaMap.value=M.alphaMap,t(M.alphaMap,E.alphaMapTransform)),M.alphaTest>0&&(E.alphaTest.value=M.alphaTest)}function g(E,M){E.specular.value.copy(M.specular),E.shininess.value=Math.max(M.shininess,1e-4)}function v(E,M){M.gradientMap&&(E.gradientMap.value=M.gradientMap)}function x(E,M){E.metalness.value=M.metalness,M.metalnessMap&&(E.metalnessMap.value=M.metalnessMap,t(M.metalnessMap,E.metalnessMapTransform)),E.roughness.value=M.roughness,M.roughnessMap&&(E.roughnessMap.value=M.roughnessMap,t(M.roughnessMap,E.roughnessMapTransform)),e.get(M).envMap&&(E.envMapIntensity.value=M.envMapIntensity)}function T(E,M,V){E.ior.value=M.ior,M.sheen>0&&(E.sheenColor.value.copy(M.sheenColor).multiplyScalar(M.sheen),E.sheenRoughness.value=M.sheenRoughness,M.sheenColorMap&&(E.sheenColorMap.value=M.sheenColorMap,t(M.sheenColorMap,E.sheenColorMapTransform)),M.sheenRoughnessMap&&(E.sheenRoughnessMap.value=M.sheenRoughnessMap,t(M.sheenRoughnessMap,E.sheenRoughnessMapTransform))),M.clearcoat>0&&(E.clearcoat.value=M.clearcoat,E.clearcoatRoughness.value=M.clearcoatRoughness,M.clearcoatMap&&(E.clearcoatMap.value=M.clearcoatMap,t(M.clearcoatMap,E.clearcoatMapTransform)),M.clearcoatRoughnessMap&&(E.clearcoatRoughnessMap.value=M.clearcoatRoughnessMap,t(M.clearcoatRoughnessMap,E.clearcoatRoughnessMapTransform)),M.clearcoatNormalMap&&(E.clearcoatNormalMap.value=M.clearcoatNormalMap,t(M.clearcoatNormalMap,E.clearcoatNormalMapTransform),E.clearcoatNormalScale.value.copy(M.clearcoatNormalScale),M.side===Ei&&E.clearcoatNormalScale.value.negate())),M.iridescence>0&&(E.iridescence.value=M.iridescence,E.iridescenceIOR.value=M.iridescenceIOR,E.iridescenceThicknessMinimum.value=M.iridescenceThicknessRange[0],E.iridescenceThicknessMaximum.value=M.iridescenceThicknessRange[1],M.iridescenceMap&&(E.iridescenceMap.value=M.iridescenceMap,t(M.iridescenceMap,E.iridescenceMapTransform)),M.iridescenceThicknessMap&&(E.iridescenceThicknessMap.value=M.iridescenceThicknessMap,t(M.iridescenceThicknessMap,E.iridescenceThicknessMapTransform))),M.transmission>0&&(E.transmission.value=M.transmission,E.transmissionSamplerMap.value=V.texture,E.transmissionSamplerSize.value.set(V.width,V.height),M.transmissionMap&&(E.transmissionMap.value=M.transmissionMap,t(M.transmissionMap,E.transmissionMapTransform)),E.thickness.value=M.thickness,M.thicknessMap&&(E.thicknessMap.value=M.thicknessMap,t(M.thicknessMap,E.thicknessMapTransform)),E.attenuationDistance.value=M.attenuationDistance,E.attenuationColor.value.copy(M.attenuationColor)),M.anisotropy>0&&(E.anisotropyVector.value.set(M.anisotropy*Math.cos(M.anisotropyRotation),M.anisotropy*Math.sin(M.anisotropyRotation)),M.anisotropyMap&&(E.anisotropyMap.value=M.anisotropyMap,t(M.anisotropyMap,E.anisotropyMapTransform))),E.specularIntensity.value=M.specularIntensity,E.specularColor.value.copy(M.specularColor),M.specularColorMap&&(E.specularColorMap.value=M.specularColorMap,t(M.specularColorMap,E.specularColorMapTransform)),M.specularIntensityMap&&(E.specularIntensityMap.value=M.specularIntensityMap,t(M.specularIntensityMap,E.specularIntensityMapTransform))}function b(E,M){M.matcap&&(E.matcap.value=M.matcap)}function C(E,M){const V=e.get(M).light;E.referencePosition.value.setFromMatrixPosition(V.matrixWorld),E.nearDistance.value=V.shadow.camera.near,E.farDistance.value=V.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:r}}function mR(s,e,t,n){let r={},a={},c=[];const u=t.isWebGL2?s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS):0;function d(V,U){const B=U.program;n.uniformBlockBinding(V,B)}function p(V,U){let B=r[V.id];B===void 0&&(b(V),B=g(V),r[V.id]=B,V.addEventListener("dispose",E));const z=U.program;n.updateUBOMapping(V,z);const $=e.render.frame;a[V.id]!==$&&(x(V),a[V.id]=$)}function g(V){const U=v();V.__bindingPointIndex=U;const B=s.createBuffer(),z=V.__size,$=V.usage;return s.bindBuffer(s.UNIFORM_BUFFER,B),s.bufferData(s.UNIFORM_BUFFER,z,$),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,U,B),B}function v(){for(let V=0;V<u;V++)if(c.indexOf(V)===-1)return c.push(V),V;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function x(V){const U=r[V.id],B=V.uniforms,z=V.__cache;s.bindBuffer(s.UNIFORM_BUFFER,U);for(let $=0,m=B.length;$<m;$++){const pe=B[$];if(T(pe,$,z)===!0){const D=pe.__offset,X=Array.isArray(pe.value)?pe.value:[pe.value];let Te=0;for(let Re=0;Re<X.length;Re++){const xe=X[Re],te=C(xe);typeof xe=="number"?(pe.__data[0]=xe,s.bufferSubData(s.UNIFORM_BUFFER,D+Te,pe.__data)):xe.isMatrix3?(pe.__data[0]=xe.elements[0],pe.__data[1]=xe.elements[1],pe.__data[2]=xe.elements[2],pe.__data[3]=xe.elements[0],pe.__data[4]=xe.elements[3],pe.__data[5]=xe.elements[4],pe.__data[6]=xe.elements[5],pe.__data[7]=xe.elements[0],pe.__data[8]=xe.elements[6],pe.__data[9]=xe.elements[7],pe.__data[10]=xe.elements[8],pe.__data[11]=xe.elements[0]):(xe.toArray(pe.__data,Te),Te+=te.storage/Float32Array.BYTES_PER_ELEMENT)}s.bufferSubData(s.UNIFORM_BUFFER,D,pe.__data)}}s.bindBuffer(s.UNIFORM_BUFFER,null)}function T(V,U,B){const z=V.value;if(B[U]===void 0){if(typeof z=="number")B[U]=z;else{const $=Array.isArray(z)?z:[z],m=[];for(let pe=0;pe<$.length;pe++)m.push($[pe].clone());B[U]=m}return!0}else if(typeof z=="number"){if(B[U]!==z)return B[U]=z,!0}else{const $=Array.isArray(B[U])?B[U]:[B[U]],m=Array.isArray(z)?z:[z];for(let pe=0;pe<$.length;pe++){const D=$[pe];if(D.equals(m[pe])===!1)return D.copy(m[pe]),!0}}return!1}function b(V){const U=V.uniforms;let B=0;const z=16;let $=0;for(let m=0,pe=U.length;m<pe;m++){const D=U[m],X={boundary:0,storage:0},Te=Array.isArray(D.value)?D.value:[D.value];for(let Re=0,xe=Te.length;Re<xe;Re++){const te=Te[Re],ye=C(te);X.boundary+=ye.boundary,X.storage+=ye.storage}if(D.__data=new Float32Array(X.storage/Float32Array.BYTES_PER_ELEMENT),D.__offset=B,m>0){$=B%z;const Re=z-$;$!==0&&Re-X.boundary<0&&(B+=z-$,D.__offset=B)}B+=X.storage}return $=B%z,$>0&&(B+=z-$),V.__size=B,V.__cache={},this}function C(V){const U={boundary:0,storage:0};return typeof V=="number"?(U.boundary=4,U.storage=4):V.isVector2?(U.boundary=8,U.storage=8):V.isVector3||V.isColor?(U.boundary=16,U.storage=12):V.isVector4?(U.boundary=16,U.storage=16):V.isMatrix3?(U.boundary=48,U.storage=48):V.isMatrix4?(U.boundary=64,U.storage=64):V.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",V),U}function E(V){const U=V.target;U.removeEventListener("dispose",E);const B=c.indexOf(U.__bindingPointIndex);c.splice(B,1),s.deleteBuffer(r[U.id]),delete r[U.id],delete a[U.id]}function M(){for(const V in r)s.deleteBuffer(r[V]);c=[],r={},a={}}return{bind:d,update:p,dispose:M}}class Mg{constructor(e={}){const{canvas:t=dE(),context:n=null,depth:r=!0,stencil:a=!0,alpha:c=!1,antialias:u=!1,premultipliedAlpha:d=!0,preserveDrawingBuffer:p=!1,powerPreference:g="default",failIfMajorPerformanceCaveat:v=!1}=e;this.isWebGLRenderer=!0;let x;n!==null?x=n.getContextAttributes().alpha:x=c;const T=new Uint32Array(4),b=new Int32Array(4);let C=null,E=null;const M=[],V=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=bn,this._useLegacyLights=!1,this.toneMapping=Ms,this.toneMappingExposure=1;const U=this;let B=!1,z=0,$=0,m=null,pe=-1,D=null;const X=new dn,Te=new dn;let Re=null;const xe=new Rt(0);let te=0,ye=t.width,we=t.height,ge=1,Ue=null,Ce=null;const be=new dn(0,0,ye,we),ne=new dn(0,0,ye,we);let me=!1;const We=new Qf;let Ye=!1,je=!1,ot=null;const It=new qt,Pe=new Qt,Oe=new re,Mt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function gt(){return m===null?ge:1}let le=n;function wn(F,se){for(let ue=0;ue<F.length;ue++){const fe=F[ue],he=t.getContext(fe,se);if(he!==null)return he}return null}try{const F={alpha:!0,depth:r,stencil:a,antialias:u,premultipliedAlpha:d,preserveDrawingBuffer:p,powerPreference:g,failIfMajorPerformanceCaveat:v};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Kf}`),t.addEventListener("webglcontextlost",Gt,!1),t.addEventListener("webglcontextrestored",Q,!1),t.addEventListener("webglcontextcreationerror",ke,!1),le===null){const se=["webgl2","webgl","experimental-webgl"];if(U.isWebGL1Renderer===!0&&se.shift(),le=wn(se,F),le===null)throw wn(se)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext<"u"&&le instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),le.getShaderPrecisionFormat===void 0&&(le.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(F){throw console.error("THREE.WebGLRenderer: "+F.message),F}let tt,dt,_t,Yt,pt,Pt,$t,tn,en,k,I,Z,Ie,De,He,rt,Ge,qe,lt,Tt,Fe,Bt,yt,ct;function ut(){tt=new Ab(le),dt=new xb(le,tt,e),tt.init(dt),Bt=new cR(le,tt,dt),_t=new aR(le,tt,dt),Yt=new Rb(le),pt=new Yw,Pt=new lR(le,tt,_t,pt,dt,Bt,Yt),$t=new Sb(U),tn=new Tb(U),en=new BE(le,dt),yt=new _b(le,tt,en,dt),k=new bb(le,en,Yt,yt),I=new Ib(le,k,en,Yt),lt=new Pb(le,dt,Pt),rt=new yb(pt),Z=new qw(U,$t,tn,tt,dt,yt,rt),Ie=new pR(U,pt),De=new Kw,He=new tR(tt,dt),qe=new gb(U,$t,tn,_t,I,x,d),Ge=new oR(U,I,dt),ct=new mR(le,Yt,dt,_t),Tt=new vb(le,tt,Yt,dt),Fe=new wb(le,tt,Yt,dt),Yt.programs=Z.programs,U.capabilities=dt,U.extensions=tt,U.properties=pt,U.renderLists=De,U.shadowMap=Ge,U.state=_t,U.info=Yt}ut();const Je=new dR(U,le);this.xr=Je,this.getContext=function(){return le},this.getContextAttributes=function(){return le.getContextAttributes()},this.forceContextLoss=function(){const F=tt.get("WEBGL_lose_context");F&&F.loseContext()},this.forceContextRestore=function(){const F=tt.get("WEBGL_lose_context");F&&F.restoreContext()},this.getPixelRatio=function(){return ge},this.setPixelRatio=function(F){F!==void 0&&(ge=F,this.setSize(ye,we,!1))},this.getSize=function(F){return F.set(ye,we)},this.setSize=function(F,se,ue=!0){if(Je.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}ye=F,we=se,t.width=Math.floor(F*ge),t.height=Math.floor(se*ge),ue===!0&&(t.style.width=F+"px",t.style.height=se+"px"),this.setViewport(0,0,F,se)},this.getDrawingBufferSize=function(F){return F.set(ye*ge,we*ge).floor()},this.setDrawingBufferSize=function(F,se,ue){ye=F,we=se,ge=ue,t.width=Math.floor(F*ue),t.height=Math.floor(se*ue),this.setViewport(0,0,F,se)},this.getCurrentViewport=function(F){return F.copy(X)},this.getViewport=function(F){return F.copy(be)},this.setViewport=function(F,se,ue,fe){F.isVector4?be.set(F.x,F.y,F.z,F.w):be.set(F,se,ue,fe),_t.viewport(X.copy(be).multiplyScalar(ge).floor())},this.getScissor=function(F){return F.copy(ne)},this.setScissor=function(F,se,ue,fe){F.isVector4?ne.set(F.x,F.y,F.z,F.w):ne.set(F,se,ue,fe),_t.scissor(Te.copy(ne).multiplyScalar(ge).floor())},this.getScissorTest=function(){return me},this.setScissorTest=function(F){_t.setScissorTest(me=F)},this.setOpaqueSort=function(F){Ue=F},this.setTransparentSort=function(F){Ce=F},this.getClearColor=function(F){return F.copy(qe.getClearColor())},this.setClearColor=function(){qe.setClearColor.apply(qe,arguments)},this.getClearAlpha=function(){return qe.getClearAlpha()},this.setClearAlpha=function(){qe.setClearAlpha.apply(qe,arguments)},this.clear=function(F=!0,se=!0,ue=!0){let fe=0;if(F){let he=!1;if(m!==null){const $e=m.texture.format;he=$e===tg||$e===eg||$e===Qm}if(he){const $e=m.texture.type,it=$e===Es||$e===ys||$e===$f||$e===Js||$e===Zm||$e===Jm,at=qe.getClearColor(),ht=qe.getClearAlpha(),bt=at.r,St=at.g,Et=at.b;it?(T[0]=bt,T[1]=St,T[2]=Et,T[3]=ht,le.clearBufferuiv(le.COLOR,0,T)):(b[0]=bt,b[1]=St,b[2]=Et,b[3]=ht,le.clearBufferiv(le.COLOR,0,b))}else fe|=le.COLOR_BUFFER_BIT}se&&(fe|=le.DEPTH_BUFFER_BIT),ue&&(fe|=le.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),le.clear(fe)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",Gt,!1),t.removeEventListener("webglcontextrestored",Q,!1),t.removeEventListener("webglcontextcreationerror",ke,!1),De.dispose(),He.dispose(),pt.dispose(),$t.dispose(),tn.dispose(),I.dispose(),yt.dispose(),ct.dispose(),Z.dispose(),Je.dispose(),Je.removeEventListener("sessionstart",qn),Je.removeEventListener("sessionend",rn),ot&&(ot.dispose(),ot=null),pn.stop()};function Gt(F){F.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),B=!0}function Q(){console.log("THREE.WebGLRenderer: Context Restored."),B=!1;const F=Yt.autoReset,se=Ge.enabled,ue=Ge.autoUpdate,fe=Ge.needsUpdate,he=Ge.type;ut(),Yt.autoReset=F,Ge.enabled=se,Ge.autoUpdate=ue,Ge.needsUpdate=fe,Ge.type=he}function ke(F){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",F.statusMessage)}function ze(F){const se=F.target;se.removeEventListener("dispose",ze),Se(se)}function Se(F){Be(F),pt.remove(F)}function Be(F){const se=pt.get(F).programs;se!==void 0&&(se.forEach(function(ue){Z.releaseProgram(ue)}),F.isShaderMaterial&&Z.releaseShaderCache(F))}this.renderBufferDirect=function(F,se,ue,fe,he,$e){se===null&&(se=Mt);const it=he.isMesh&&he.matrixWorld.determinant()<0,at=aa(F,se,ue,fe,he);_t.setMaterial(fe,it);let ht=ue.index,bt=1;if(fe.wireframe===!0){if(ht=k.getWireframeAttribute(ue),ht===void 0)return;bt=2}const St=ue.drawRange,Et=ue.attributes.position;let mn=St.start*bt,Ln=(St.start+St.count)*bt;$e!==null&&(mn=Math.max(mn,$e.start*bt),Ln=Math.min(Ln,($e.start+$e.count)*bt)),ht!==null?(mn=Math.max(mn,0),Ln=Math.min(Ln,ht.count)):Et!=null&&(mn=Math.max(mn,0),Ln=Math.min(Ln,Et.count));const yn=Ln-mn;if(yn<0||yn===1/0)return;yt.setup(he,fe,at,ue,ht);let Ti,hn=Tt;if(ht!==null&&(Ti=en.get(ht),hn=Fe,hn.setIndex(Ti)),he.isMesh)fe.wireframe===!0?(_t.setLineWidth(fe.wireframeLinewidth*gt()),hn.setMode(le.LINES)):hn.setMode(le.TRIANGLES);else if(he.isLine){let Dt=fe.linewidth;Dt===void 0&&(Dt=1),_t.setLineWidth(Dt*gt()),he.isLineSegments?hn.setMode(le.LINES):he.isLineLoop?hn.setMode(le.LINE_LOOP):hn.setMode(le.LINE_STRIP)}else he.isPoints?hn.setMode(le.POINTS):he.isSprite&&hn.setMode(le.TRIANGLES);if(he.isInstancedMesh)hn.renderInstances(mn,yn,he.count);else if(ue.isInstancedBufferGeometry){const Dt=ue._maxInstanceCount!==void 0?ue._maxInstanceCount:1/0,Ar=Math.min(ue.instanceCount,Dt);hn.renderInstances(mn,yn,Ar)}else hn.render(mn,yn)};function nt(F,se,ue){F.transparent===!0&&F.side===xr&&F.forceSinglePass===!1?(F.side=Ei,F.needsUpdate=!0,es(F,se,ue),F.side=$r,F.needsUpdate=!0,es(F,se,ue),F.side=xr):es(F,se,ue)}this.compile=function(F,se,ue=null){ue===null&&(ue=F),E=He.get(ue),E.init(),V.push(E),ue.traverseVisible(function(he){he.isLight&&he.layers.test(se.layers)&&(E.pushLight(he),he.castShadow&&E.pushShadow(he))}),F!==ue&&F.traverseVisible(function(he){he.isLight&&he.layers.test(se.layers)&&(E.pushLight(he),he.castShadow&&E.pushShadow(he))}),E.setupLights(U._useLegacyLights);const fe=new Set;return F.traverse(function(he){const $e=he.material;if($e)if(Array.isArray($e))for(let it=0;it<$e.length;it++){const at=$e[it];nt(at,ue,he),fe.add(at)}else nt($e,ue,he),fe.add($e)}),V.pop(),E=null,fe},this.compileAsync=function(F,se,ue=null){const fe=this.compile(F,se,ue);return new Promise(he=>{function $e(){if(fe.forEach(function(it){pt.get(it).currentProgram.isReady()&&fe.delete(it)}),fe.size===0){he(F);return}setTimeout($e,10)}tt.get("KHR_parallel_shader_compile")!==null?$e():setTimeout($e,10)})};let kt=null;function xn(F){kt&&kt(F)}function qn(){pn.stop()}function rn(){pn.start()}const pn=new _g;pn.setAnimationLoop(xn),typeof self<"u"&&pn.setContext(self),this.setAnimationLoop=function(F){kt=F,Je.setAnimationLoop(F),F===null?pn.stop():pn.start()},Je.addEventListener("sessionstart",qn),Je.addEventListener("sessionend",rn),this.render=function(F,se){if(se!==void 0&&se.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(B===!0)return;F.matrixWorldAutoUpdate===!0&&F.updateMatrixWorld(),se.parent===null&&se.matrixWorldAutoUpdate===!0&&se.updateMatrixWorld(),Je.enabled===!0&&Je.isPresenting===!0&&(Je.cameraAutoUpdate===!0&&Je.updateCamera(se),se=Je.getCamera()),F.isScene===!0&&F.onBeforeRender(U,F,se,m),E=He.get(F,V.length),E.init(),V.push(E),It.multiplyMatrices(se.projectionMatrix,se.matrixWorldInverse),We.setFromProjectionMatrix(It),je=this.localClippingEnabled,Ye=rt.init(this.clippingPlanes,je),C=De.get(F,M.length),C.init(),M.push(C),Nn(F,se,0,U.sortObjects),C.finish(),U.sortObjects===!0&&C.sort(Ue,Ce),this.info.render.frame++,Ye===!0&&rt.beginShadows();const ue=E.state.shadowsArray;if(Ge.render(ue,F,se),Ye===!0&&rt.endShadows(),this.info.autoReset===!0&&this.info.reset(),qe.render(C,F),E.setupLights(U._useLegacyLights),se.isArrayCamera){const fe=se.cameras;for(let he=0,$e=fe.length;he<$e;he++){const it=fe[he];lr(C,F,it,it.viewport)}}else lr(C,F,se);m!==null&&(Pt.updateMultisampleRenderTarget(m),Pt.updateRenderTargetMipmap(m)),F.isScene===!0&&F.onAfterRender(U,F,se),yt.resetDefaultState(),pe=-1,D=null,V.pop(),V.length>0?E=V[V.length-1]:E=null,M.pop(),M.length>0?C=M[M.length-1]:C=null};function Nn(F,se,ue,fe){if(F.visible===!1)return;if(F.layers.test(se.layers)){if(F.isGroup)ue=F.renderOrder;else if(F.isLOD)F.autoUpdate===!0&&F.update(se);else if(F.isLight)E.pushLight(F),F.castShadow&&E.pushShadow(F);else if(F.isSprite){if(!F.frustumCulled||We.intersectsSprite(F)){fe&&Oe.setFromMatrixPosition(F.matrixWorld).applyMatrix4(It);const it=I.update(F),at=F.material;at.visible&&C.push(F,it,at,ue,Oe.z,null)}}else if((F.isMesh||F.isLine||F.isPoints)&&(!F.frustumCulled||We.intersectsObject(F))){const it=I.update(F),at=F.material;if(fe&&(F.boundingSphere!==void 0?(F.boundingSphere===null&&F.computeBoundingSphere(),Oe.copy(F.boundingSphere.center)):(it.boundingSphere===null&&it.computeBoundingSphere(),Oe.copy(it.boundingSphere.center)),Oe.applyMatrix4(F.matrixWorld).applyMatrix4(It)),Array.isArray(at)){const ht=it.groups;for(let bt=0,St=ht.length;bt<St;bt++){const Et=ht[bt],mn=at[Et.materialIndex];mn&&mn.visible&&C.push(F,it,mn,ue,Oe.z,Et)}}else at.visible&&C.push(F,it,at,ue,Oe.z,null)}}const $e=F.children;for(let it=0,at=$e.length;it<at;it++)Nn($e[it],se,ue,fe)}function lr(F,se,ue,fe){const he=F.opaque,$e=F.transmissive,it=F.transparent;E.setupLightsView(ue),Ye===!0&&rt.setGlobalState(U.clippingPlanes,ue),$e.length>0&&Jr(he,$e,se,ue),fe&&_t.viewport(X.copy(fe)),he.length>0&&Qr(he,se,ue),$e.length>0&&Qr($e,se,ue),it.length>0&&Qr(it,se,ue),_t.buffers.depth.setTest(!0),_t.buffers.depth.setMask(!0),_t.buffers.color.setMask(!0),_t.setPolygonOffset(!1)}function Jr(F,se,ue,fe){if((ue.isScene===!0?ue.overrideMaterial:null)!==null)return;const $e=dt.isWebGL2;ot===null&&(ot=new no(1,1,{generateMipmaps:!0,type:tt.has("EXT_color_buffer_half_float")?Ka:Es,minFilter:to,samples:$e?4:0})),U.getDrawingBufferSize(Pe),$e?ot.setSize(Pe.x,Pe.y):ot.setSize(bc(Pe.x),bc(Pe.y));const it=U.getRenderTarget();U.setRenderTarget(ot),U.getClearColor(xe),te=U.getClearAlpha(),te<1&&U.setClearColor(16777215,.5),U.clear();const at=U.toneMapping;U.toneMapping=Ms,Qr(F,ue,fe),Pt.updateMultisampleRenderTarget(ot),Pt.updateRenderTargetMipmap(ot);let ht=!1;for(let bt=0,St=se.length;bt<St;bt++){const Et=se[bt],mn=Et.object,Ln=Et.geometry,yn=Et.material,Ti=Et.group;if(yn.side===xr&&mn.layers.test(fe.layers)){const hn=yn.side;yn.side=Ei,yn.needsUpdate=!0,so(mn,ue,fe,Ln,yn,Ti),yn.side=hn,yn.needsUpdate=!0,ht=!0}}ht===!0&&(Pt.updateMultisampleRenderTarget(ot),Pt.updateRenderTargetMipmap(ot)),U.setRenderTarget(it),U.setClearColor(xe,te),U.toneMapping=at}function Qr(F,se,ue){const fe=se.isScene===!0?se.overrideMaterial:null;for(let he=0,$e=F.length;he<$e;he++){const it=F[he],at=it.object,ht=it.geometry,bt=fe===null?it.material:fe,St=it.group;at.layers.test(ue.layers)&&so(at,se,ue,ht,bt,St)}}function so(F,se,ue,fe,he,$e){F.onBeforeRender(U,se,ue,fe,he,$e),F.modelViewMatrix.multiplyMatrices(ue.matrixWorldInverse,F.matrixWorld),F.normalMatrix.getNormalMatrix(F.modelViewMatrix),he.onBeforeRender(U,se,ue,fe,F,$e),he.transparent===!0&&he.side===xr&&he.forceSinglePass===!1?(he.side=Ei,he.needsUpdate=!0,U.renderBufferDirect(ue,se,fe,he,F,$e),he.side=$r,he.needsUpdate=!0,U.renderBufferDirect(ue,se,fe,he,F,$e),he.side=xr):U.renderBufferDirect(ue,se,fe,he,F,$e),F.onAfterRender(U,se,ue,fe,he,$e)}function es(F,se,ue){se.isScene!==!0&&(se=Mt);const fe=pt.get(F),he=E.state.lights,$e=E.state.shadowsArray,it=he.state.version,at=Z.getParameters(F,he.state,$e,se,ue),ht=Z.getProgramCacheKey(at);let bt=fe.programs;fe.environment=F.isMeshStandardMaterial?se.environment:null,fe.fog=se.fog,fe.envMap=(F.isMeshStandardMaterial?tn:$t).get(F.envMap||fe.environment),bt===void 0&&(F.addEventListener("dispose",ze),bt=new Map,fe.programs=bt);let St=bt.get(ht);if(St!==void 0){if(fe.currentProgram===St&&fe.lightsStateVersion===it)return oo(F,at),St}else at.uniforms=Z.getUniforms(F),F.onBuild(ue,at,U),F.onBeforeCompile(at,U),St=Z.acquireProgram(at,ht),bt.set(ht,St),fe.uniforms=at.uniforms;const Et=fe.uniforms;return(!F.isShaderMaterial&&!F.isRawShaderMaterial||F.clipping===!0)&&(Et.clippingPlanes=rt.uniform),oo(F,at),fe.needsLights=lo(F),fe.lightsStateVersion=it,fe.needsLights&&(Et.ambientLightColor.value=he.state.ambient,Et.lightProbe.value=he.state.probe,Et.directionalLights.value=he.state.directional,Et.directionalLightShadows.value=he.state.directionalShadow,Et.spotLights.value=he.state.spot,Et.spotLightShadows.value=he.state.spotShadow,Et.rectAreaLights.value=he.state.rectArea,Et.ltc_1.value=he.state.rectAreaLTC1,Et.ltc_2.value=he.state.rectAreaLTC2,Et.pointLights.value=he.state.point,Et.pointLightShadows.value=he.state.pointShadow,Et.hemisphereLights.value=he.state.hemi,Et.directionalShadowMap.value=he.state.directionalShadowMap,Et.directionalShadowMatrix.value=he.state.directionalShadowMatrix,Et.spotShadowMap.value=he.state.spotShadowMap,Et.spotLightMatrix.value=he.state.spotLightMatrix,Et.spotLightMap.value=he.state.spotLightMap,Et.pointShadowMap.value=he.state.pointShadowMap,Et.pointShadowMatrix.value=he.state.pointShadowMatrix),fe.currentProgram=St,fe.uniformsList=null,St}function bs(F){if(F.uniformsList===null){const se=F.currentProgram.getUniforms();F.uniformsList=xc.seqWithValue(se.seq,F.uniforms)}return F.uniformsList}function oo(F,se){const ue=pt.get(F);ue.outputColorSpace=se.outputColorSpace,ue.instancing=se.instancing,ue.instancingColor=se.instancingColor,ue.skinning=se.skinning,ue.morphTargets=se.morphTargets,ue.morphNormals=se.morphNormals,ue.morphColors=se.morphColors,ue.morphTargetsCount=se.morphTargetsCount,ue.numClippingPlanes=se.numClippingPlanes,ue.numIntersection=se.numClipIntersection,ue.vertexAlphas=se.vertexAlphas,ue.vertexTangents=se.vertexTangents,ue.toneMapping=se.toneMapping}function aa(F,se,ue,fe,he){se.isScene!==!0&&(se=Mt),Pt.resetTextureUnits();const $e=se.fog,it=fe.isMeshStandardMaterial?se.environment:null,at=m===null?U.outputColorSpace:m.isXRRenderTarget===!0?m.texture.colorSpace:Kn,ht=(fe.isMeshStandardMaterial?tn:$t).get(fe.envMap||it),bt=fe.vertexColors===!0&&!!ue.attributes.color&&ue.attributes.color.itemSize===4,St=!!ue.attributes.tangent&&(!!fe.normalMap||fe.anisotropy>0),Et=!!ue.morphAttributes.position,mn=!!ue.morphAttributes.normal,Ln=!!ue.morphAttributes.color;let yn=Ms;fe.toneMapped&&(m===null||m.isXRRenderTarget===!0)&&(yn=U.toneMapping);const Ti=ue.morphAttributes.position||ue.morphAttributes.normal||ue.morphAttributes.color,hn=Ti!==void 0?Ti.length:0,Dt=pt.get(fe),Ar=E.state.lights;if(Ye===!0&&(je===!0||F!==D)){const In=F===D&&fe.id===pe;rt.setState(fe,F,In)}let gn=!1;fe.version===Dt.__version?(Dt.needsLights&&Dt.lightsStateVersion!==Ar.state.version||Dt.outputColorSpace!==at||he.isInstancedMesh&&Dt.instancing===!1||!he.isInstancedMesh&&Dt.instancing===!0||he.isSkinnedMesh&&Dt.skinning===!1||!he.isSkinnedMesh&&Dt.skinning===!0||he.isInstancedMesh&&Dt.instancingColor===!0&&he.instanceColor===null||he.isInstancedMesh&&Dt.instancingColor===!1&&he.instanceColor!==null||Dt.envMap!==ht||fe.fog===!0&&Dt.fog!==$e||Dt.numClippingPlanes!==void 0&&(Dt.numClippingPlanes!==rt.numPlanes||Dt.numIntersection!==rt.numIntersection)||Dt.vertexAlphas!==bt||Dt.vertexTangents!==St||Dt.morphTargets!==Et||Dt.morphNormals!==mn||Dt.morphColors!==Ln||Dt.toneMapping!==yn||dt.isWebGL2===!0&&Dt.morphTargetsCount!==hn)&&(gn=!0):(gn=!0,Dt.__version=fe.version);let _n=Dt.currentProgram;gn===!0&&(_n=es(fe,se,he));let Ui=!1,di=!1,ws=!1;const Pn=_n.getUniforms(),$n=Dt.uniforms;if(_t.useProgram(_n.program)&&(Ui=!0,di=!0,ws=!0),fe.id!==pe&&(pe=fe.id,di=!0),Ui||D!==F){Pn.setValue(le,"projectionMatrix",F.projectionMatrix),Pn.setValue(le,"viewMatrix",F.matrixWorldInverse);const In=Pn.map.cameraPosition;In!==void 0&&In.setValue(le,Oe.setFromMatrixPosition(F.matrixWorld)),dt.logarithmicDepthBuffer&&Pn.setValue(le,"logDepthBufFC",2/(Math.log(F.far+1)/Math.LN2)),(fe.isMeshPhongMaterial||fe.isMeshToonMaterial||fe.isMeshLambertMaterial||fe.isMeshBasicMaterial||fe.isMeshStandardMaterial||fe.isShaderMaterial)&&Pn.setValue(le,"isOrthographic",F.isOrthographicCamera===!0),D!==F&&(D=F,di=!0,ws=!0)}if(he.isSkinnedMesh){Pn.setOptional(le,he,"bindMatrix"),Pn.setOptional(le,he,"bindMatrixInverse");const In=he.skeleton;In&&(dt.floatVertexTextures?(In.boneTexture===null&&In.computeBoneTexture(),Pn.setValue(le,"boneTexture",In.boneTexture,Pt),Pn.setValue(le,"boneTextureSize",In.boneTextureSize)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}const br=ue.morphAttributes;if((br.position!==void 0||br.normal!==void 0||br.color!==void 0&&dt.isWebGL2===!0)&&lt.update(he,ue,_n),(di||Dt.receiveShadow!==he.receiveShadow)&&(Dt.receiveShadow=he.receiveShadow,Pn.setValue(le,"receiveShadow",he.receiveShadow)),fe.isMeshGouraudMaterial&&fe.envMap!==null&&($n.envMap.value=ht,$n.flipEnvMap.value=ht.isCubeTexture&&ht.isRenderTargetTexture===!1?-1:1),di&&(Pn.setValue(le,"toneMappingExposure",U.toneMappingExposure),Dt.needsLights&&ao($n,ws),$e&&fe.fog===!0&&Ie.refreshFogUniforms($n,$e),Ie.refreshMaterialUniforms($n,fe,ge,we,ot),xc.upload(le,bs(Dt),$n,Pt)),fe.isShaderMaterial&&fe.uniformsNeedUpdate===!0&&(xc.upload(le,bs(Dt),$n,Pt),fe.uniformsNeedUpdate=!1),fe.isSpriteMaterial&&Pn.setValue(le,"center",he.center),Pn.setValue(le,"modelViewMatrix",he.modelViewMatrix),Pn.setValue(le,"normalMatrix",he.normalMatrix),Pn.setValue(le,"modelMatrix",he.matrixWorld),fe.isShaderMaterial||fe.isRawShaderMaterial){const In=fe.uniformsGroups;for(let wr=0,co=In.length;wr<co;wr++)if(dt.isWebGL2){const ts=In[wr];ct.update(ts,_n),ct.bind(ts,_n)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return _n}function ao(F,se){F.ambientLightColor.needsUpdate=se,F.lightProbe.needsUpdate=se,F.directionalLights.needsUpdate=se,F.directionalLightShadows.needsUpdate=se,F.pointLights.needsUpdate=se,F.pointLightShadows.needsUpdate=se,F.spotLights.needsUpdate=se,F.spotLightShadows.needsUpdate=se,F.rectAreaLights.needsUpdate=se,F.hemisphereLights.needsUpdate=se}function lo(F){return F.isMeshLambertMaterial||F.isMeshToonMaterial||F.isMeshPhongMaterial||F.isMeshStandardMaterial||F.isShadowMaterial||F.isShaderMaterial&&F.lights===!0}this.getActiveCubeFace=function(){return z},this.getActiveMipmapLevel=function(){return $},this.getRenderTarget=function(){return m},this.setRenderTargetTextures=function(F,se,ue){pt.get(F.texture).__webglTexture=se,pt.get(F.depthTexture).__webglTexture=ue;const fe=pt.get(F);fe.__hasExternalTextures=!0,fe.__hasExternalTextures&&(fe.__autoAllocateDepthBuffer=ue===void 0,fe.__autoAllocateDepthBuffer||tt.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),fe.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(F,se){const ue=pt.get(F);ue.__webglFramebuffer=se,ue.__useDefaultFramebuffer=se===void 0},this.setRenderTarget=function(F,se=0,ue=0){m=F,z=se,$=ue;let fe=!0,he=null,$e=!1,it=!1;if(F){const ht=pt.get(F);ht.__useDefaultFramebuffer!==void 0?(_t.bindFramebuffer(le.FRAMEBUFFER,null),fe=!1):ht.__webglFramebuffer===void 0?Pt.setupRenderTarget(F):ht.__hasExternalTextures&&Pt.rebindTextures(F,pt.get(F.texture).__webglTexture,pt.get(F.depthTexture).__webglTexture);const bt=F.texture;(bt.isData3DTexture||bt.isDataArrayTexture||bt.isCompressedArrayTexture)&&(it=!0);const St=pt.get(F).__webglFramebuffer;F.isWebGLCubeRenderTarget?(Array.isArray(St[se])?he=St[se][ue]:he=St[se],$e=!0):dt.isWebGL2&&F.samples>0&&Pt.useMultisampledRTT(F)===!1?he=pt.get(F).__webglMultisampledFramebuffer:Array.isArray(St)?he=St[ue]:he=St,X.copy(F.viewport),Te.copy(F.scissor),Re=F.scissorTest}else X.copy(be).multiplyScalar(ge).floor(),Te.copy(ne).multiplyScalar(ge).floor(),Re=me;if(_t.bindFramebuffer(le.FRAMEBUFFER,he)&&dt.drawBuffers&&fe&&_t.drawBuffers(F,he),_t.viewport(X),_t.scissor(Te),_t.setScissorTest(Re),$e){const ht=pt.get(F.texture);le.framebufferTexture2D(le.FRAMEBUFFER,le.COLOR_ATTACHMENT0,le.TEXTURE_CUBE_MAP_POSITIVE_X+se,ht.__webglTexture,ue)}else if(it){const ht=pt.get(F.texture),bt=se||0;le.framebufferTextureLayer(le.FRAMEBUFFER,le.COLOR_ATTACHMENT0,ht.__webglTexture,ue||0,bt)}pe=-1},this.readRenderTargetPixels=function(F,se,ue,fe,he,$e,it){if(!(F&&F.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let at=pt.get(F).__webglFramebuffer;if(F.isWebGLCubeRenderTarget&&it!==void 0&&(at=at[it]),at){_t.bindFramebuffer(le.FRAMEBUFFER,at);try{const ht=F.texture,bt=ht.format,St=ht.type;if(bt!==Yi&&Bt.convert(bt)!==le.getParameter(le.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const Et=St===Ka&&(tt.has("EXT_color_buffer_half_float")||dt.isWebGL2&&tt.has("EXT_color_buffer_float"));if(St!==Es&&Bt.convert(St)!==le.getParameter(le.IMPLEMENTATION_COLOR_READ_TYPE)&&!(St===Yr&&(dt.isWebGL2||tt.has("OES_texture_float")||tt.has("WEBGL_color_buffer_float")))&&!Et){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}se>=0&&se<=F.width-fe&&ue>=0&&ue<=F.height-he&&le.readPixels(se,ue,fe,he,Bt.convert(bt),Bt.convert(St),$e)}finally{const ht=m!==null?pt.get(m).__webglFramebuffer:null;_t.bindFramebuffer(le.FRAMEBUFFER,ht)}}},this.copyFramebufferToTexture=function(F,se,ue=0){const fe=Math.pow(2,-ue),he=Math.floor(se.image.width*fe),$e=Math.floor(se.image.height*fe);Pt.setTexture2D(se,0),le.copyTexSubImage2D(le.TEXTURE_2D,ue,0,0,F.x,F.y,he,$e),_t.unbindTexture()},this.copyTextureToTexture=function(F,se,ue,fe=0){const he=se.image.width,$e=se.image.height,it=Bt.convert(ue.format),at=Bt.convert(ue.type);Pt.setTexture2D(ue,0),le.pixelStorei(le.UNPACK_FLIP_Y_WEBGL,ue.flipY),le.pixelStorei(le.UNPACK_PREMULTIPLY_ALPHA_WEBGL,ue.premultiplyAlpha),le.pixelStorei(le.UNPACK_ALIGNMENT,ue.unpackAlignment),se.isDataTexture?le.texSubImage2D(le.TEXTURE_2D,fe,F.x,F.y,he,$e,it,at,se.image.data):se.isCompressedTexture?le.compressedTexSubImage2D(le.TEXTURE_2D,fe,F.x,F.y,se.mipmaps[0].width,se.mipmaps[0].height,it,se.mipmaps[0].data):le.texSubImage2D(le.TEXTURE_2D,fe,F.x,F.y,it,at,se.image),fe===0&&ue.generateMipmaps&&le.generateMipmap(le.TEXTURE_2D),_t.unbindTexture()},this.copyTextureToTexture3D=function(F,se,ue,fe,he=0){if(U.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const $e=F.max.x-F.min.x+1,it=F.max.y-F.min.y+1,at=F.max.z-F.min.z+1,ht=Bt.convert(fe.format),bt=Bt.convert(fe.type);let St;if(fe.isData3DTexture)Pt.setTexture3D(fe,0),St=le.TEXTURE_3D;else if(fe.isDataArrayTexture)Pt.setTexture2DArray(fe,0),St=le.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}le.pixelStorei(le.UNPACK_FLIP_Y_WEBGL,fe.flipY),le.pixelStorei(le.UNPACK_PREMULTIPLY_ALPHA_WEBGL,fe.premultiplyAlpha),le.pixelStorei(le.UNPACK_ALIGNMENT,fe.unpackAlignment);const Et=le.getParameter(le.UNPACK_ROW_LENGTH),mn=le.getParameter(le.UNPACK_IMAGE_HEIGHT),Ln=le.getParameter(le.UNPACK_SKIP_PIXELS),yn=le.getParameter(le.UNPACK_SKIP_ROWS),Ti=le.getParameter(le.UNPACK_SKIP_IMAGES),hn=ue.isCompressedTexture?ue.mipmaps[0]:ue.image;le.pixelStorei(le.UNPACK_ROW_LENGTH,hn.width),le.pixelStorei(le.UNPACK_IMAGE_HEIGHT,hn.height),le.pixelStorei(le.UNPACK_SKIP_PIXELS,F.min.x),le.pixelStorei(le.UNPACK_SKIP_ROWS,F.min.y),le.pixelStorei(le.UNPACK_SKIP_IMAGES,F.min.z),ue.isDataTexture||ue.isData3DTexture?le.texSubImage3D(St,he,se.x,se.y,se.z,$e,it,at,ht,bt,hn.data):ue.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),le.compressedTexSubImage3D(St,he,se.x,se.y,se.z,$e,it,at,ht,hn.data)):le.texSubImage3D(St,he,se.x,se.y,se.z,$e,it,at,ht,bt,hn),le.pixelStorei(le.UNPACK_ROW_LENGTH,Et),le.pixelStorei(le.UNPACK_IMAGE_HEIGHT,mn),le.pixelStorei(le.UNPACK_SKIP_PIXELS,Ln),le.pixelStorei(le.UNPACK_SKIP_ROWS,yn),le.pixelStorei(le.UNPACK_SKIP_IMAGES,Ti),he===0&&fe.generateMipmaps&&le.generateMipmap(St),_t.unbindTexture()},this.initTexture=function(F){F.isCubeTexture?Pt.setTextureCube(F,0):F.isData3DTexture?Pt.setTexture3D(F,0):F.isDataArrayTexture||F.isCompressedArrayTexture?Pt.setTexture2DArray(F,0):Pt.setTexture2D(F,0),_t.unbindTexture()},this.resetState=function(){z=0,$=0,m=null,_t.reset(),yt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return jr}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=e===Zf?"display-p3":"srgb",t.unpackColorSpace=an.workingColorSpace===Lc?"display-p3":"srgb"}get physicallyCorrectLights(){return console.warn("THREE.WebGLRenderer: The property .physicallyCorrectLights has been removed. Set renderer.useLegacyLights instead."),!this.useLegacyLights}set physicallyCorrectLights(e){console.warn("THREE.WebGLRenderer: The property .physicallyCorrectLights has been removed. Set renderer.useLegacyLights instead."),this.useLegacyLights=!e}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace===bn?eo:ig}set outputEncoding(e){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=e===eo?bn:Kn}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(e){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=e}}class gR extends Mg{}gR.prototype.isWebGL1Renderer=!0;class _R extends Tn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t}}class vR{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=Hf,this.updateRange={offset:0,count:-1},this.version=0,this.uuid=ar()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let r=0,a=this.stride;r<a;r++)this.array[e+r]=t.array[n+r];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=ar()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=ar()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const ci=new re;class ih{constructor(e,t,n,r=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=r}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)ci.fromBufferAttribute(this,t),ci.applyMatrix4(e),this.setXYZ(t,ci.x,ci.y,ci.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)ci.fromBufferAttribute(this,t),ci.applyNormalMatrix(e),this.setXYZ(t,ci.x,ci.y,ci.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)ci.fromBufferAttribute(this,t),ci.transformDirection(e),this.setXYZ(t,ci.x,ci.y,ci.z);return this}setX(e,t){return this.normalized&&(t=fn(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=fn(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=fn(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=fn(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=yr(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=yr(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=yr(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=yr(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=fn(t,this.array),n=fn(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=fn(t,this.array),n=fn(n,this.array),r=fn(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=r,this}setXYZW(e,t,n,r,a){return e=e*this.data.stride+this.offset,this.normalized&&(t=fn(t,this.array),n=fn(n,this.array),r=fn(r,this.array),a=fn(a,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=r,this.data.array[e+3]=a,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const r=n*this.data.stride+this.offset;for(let a=0;a<this.itemSize;a++)t.push(this.data.array[r+a])}return new hi(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new ih(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const r=n*this.data.stride+this.offset;for(let a=0;a<this.itemSize;a++)t.push(this.data.array[r+a])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}const Sm=new re,Mm=new dn,Em=new dn,xR=new re,Tm=new qt,hc=new re,vf=new Mr,Am=new qt,xf=new Pc;class yR extends Ki{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=sp,this.bindMatrix=new qt,this.bindMatrixInverse=new qt,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){const e=this.geometry;this.boundingBox===null&&(this.boundingBox=new Zr),this.boundingBox.makeEmpty();const t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,hc),this.boundingBox.expandByPoint(hc)}computeBoundingSphere(){const e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new Mr),this.boundingSphere.makeEmpty();const t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,hc),this.boundingSphere.expandByPoint(hc)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}raycast(e,t){const n=this.material,r=this.matrixWorld;n!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),vf.copy(this.boundingSphere),vf.applyMatrix4(r),e.ray.intersectsSphere(vf)!==!1&&(Am.copy(r).invert(),xf.copy(e.ray).applyMatrix4(Am),!(this.boundingBox!==null&&xf.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(e,t,xf)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){const e=new dn,t=this.geometry.attributes.skinWeight;for(let n=0,r=t.count;n<r;n++){e.fromBufferAttribute(t,n);const a=1/e.manhattanLength();a!==1/0?e.multiplyScalar(a):e.set(1,0,0,0),t.setXYZW(n,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===sp?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===LM?this.bindMatrixInverse.copy(this.bindMatrix).invert():console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){const n=this.skeleton,r=this.geometry;Mm.fromBufferAttribute(r.attributes.skinIndex,e),Em.fromBufferAttribute(r.attributes.skinWeight,e),Sm.copy(t).applyMatrix4(this.bindMatrix),t.set(0,0,0);for(let a=0;a<4;a++){const c=Em.getComponent(a);if(c!==0){const u=Mm.getComponent(a);Tm.multiplyMatrices(n.bones[u].matrixWorld,n.boneInverses[u]),t.addScaledVector(xR.copy(Sm).applyMatrix4(Tm),c)}}return t.applyMatrix4(this.bindMatrixInverse)}boneTransform(e,t){return console.warn("THREE.SkinnedMesh: .boneTransform() was renamed to .applyBoneTransform() in r151."),this.applyBoneTransform(e,t)}}class Eg extends Tn{constructor(){super(),this.isBone=!0,this.type="Bone"}}class SR extends jn{constructor(e=null,t=1,n=1,r,a,c,u,d,p=Xn,g=Xn,v,x){super(null,c,u,d,p,g,r,a,v,x),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const bm=new qt,MR=new qt;class rh{constructor(e=[],t=[]){this.uuid=ar(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.boneTexture=null,this.boneTextureSize=0,this.init()}init(){const e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,r=this.bones.length;n<r;n++)this.boneInverses.push(new qt)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){const n=new qt;this.bones[e]&&n.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(n)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&n.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}}update(){const e=this.bones,t=this.boneInverses,n=this.boneMatrices,r=this.boneTexture;for(let a=0,c=e.length;a<c;a++){const u=e[a]?e[a].matrixWorld:MR;bm.multiplyMatrices(u,t[a]),bm.toArray(n,a*16)}r!==null&&(r.needsUpdate=!0)}clone(){return new rh(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=sg(e),e=Math.max(e,4);const t=new Float32Array(e*e*4);t.set(this.boneMatrices);const n=new SR(t,e,e,Yi,Yr);return n.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=n,this.boneTextureSize=e,this}getBoneByName(e){for(let t=0,n=this.bones.length;t<n;t++){const r=this.bones[t];if(r.name===e)return r}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let n=0,r=e.bones.length;n<r;n++){const a=e.bones[n];let c=t[a];c===void 0&&(console.warn("THREE.Skeleton: No bone found with UUID:",a),c=new Eg),this.bones.push(c),this.boneInverses.push(new qt().fromArray(e.boneInverses[n]))}return this.init(),this}toJSON(){const e={metadata:{version:4.6,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;const t=this.bones,n=this.boneInverses;for(let r=0,a=t.length;r<a;r++){const c=t[r];e.bones.push(c.uuid);const u=n[r];e.boneInverses.push(u.toArray())}return e}}class Vf extends hi{constructor(e,t,n,r=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=r}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const zo=new qt,wm=new qt,dc=[],Rm=new Zr,ER=new qt,za=new Ki,Ga=new Mr;class TR extends Ki{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new Vf(new Float32Array(n*16),16),this.instanceColor=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let r=0;r<n;r++)this.setMatrixAt(r,ER)}computeBoundingBox(){const e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new Zr),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,zo),Rm.copy(e.boundingBox).applyMatrix4(zo),this.boundingBox.union(Rm)}computeBoundingSphere(){const e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new Mr),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,zo),Ga.copy(e.boundingSphere).applyMatrix4(zo),this.boundingSphere.union(Ga)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}raycast(e,t){const n=this.matrixWorld,r=this.count;if(za.geometry=this.geometry,za.material=this.material,za.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Ga.copy(this.boundingSphere),Ga.applyMatrix4(n),e.ray.intersectsSphere(Ga)!==!1))for(let a=0;a<r;a++){this.getMatrixAt(a,zo),wm.multiplyMatrices(n,zo),za.matrixWorld=wm,za.raycast(e,dc);for(let c=0,u=dc.length;c<u;c++){const d=dc[c];d.instanceId=a,d.object=this,t.push(d)}dc.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new Vf(new Float32Array(this.instanceMatrix.count*3),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"})}}class Tg extends Sr{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Rt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const Cm=new re,Lm=new re,Pm=new qt,yf=new Pc,pc=new Mr;class sh extends Tn{constructor(e=new Er,t=new Tg){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[0];for(let r=1,a=t.count;r<a;r++)Cm.fromBufferAttribute(t,r-1),Lm.fromBufferAttribute(t,r),n[r]=n[r-1],n[r]+=Cm.distanceTo(Lm);e.setAttribute("lineDistance",new Kr(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const n=this.geometry,r=this.matrixWorld,a=e.params.Line.threshold,c=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),pc.copy(n.boundingSphere),pc.applyMatrix4(r),pc.radius+=a,e.ray.intersectsSphere(pc)===!1)return;Pm.copy(r).invert(),yf.copy(e.ray).applyMatrix4(Pm);const u=a/((this.scale.x+this.scale.y+this.scale.z)/3),d=u*u,p=new re,g=new re,v=new re,x=new re,T=this.isLineSegments?2:1,b=n.index,E=n.attributes.position;if(b!==null){const M=Math.max(0,c.start),V=Math.min(b.count,c.start+c.count);for(let U=M,B=V-1;U<B;U+=T){const z=b.getX(U),$=b.getX(U+1);if(p.fromBufferAttribute(E,z),g.fromBufferAttribute(E,$),yf.distanceSqToSegment(p,g,x,v)>d)continue;x.applyMatrix4(this.matrixWorld);const pe=e.ray.origin.distanceTo(x);pe<e.near||pe>e.far||t.push({distance:pe,point:v.clone().applyMatrix4(this.matrixWorld),index:U,face:null,faceIndex:null,object:this})}}else{const M=Math.max(0,c.start),V=Math.min(E.count,c.start+c.count);for(let U=M,B=V-1;U<B;U+=T){if(p.fromBufferAttribute(E,U),g.fromBufferAttribute(E,U+1),yf.distanceSqToSegment(p,g,x,v)>d)continue;x.applyMatrix4(this.matrixWorld);const $=e.ray.origin.distanceTo(x);$<e.near||$>e.far||t.push({distance:$,point:v.clone().applyMatrix4(this.matrixWorld),index:U,face:null,faceIndex:null,object:this})}}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const r=t[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let a=0,c=r.length;a<c;a++){const u=r[a].name||String(a);this.morphTargetInfluences.push(0),this.morphTargetDictionary[u]=a}}}}}const Im=new re,Dm=new re;class AR extends sh{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[];for(let r=0,a=t.count;r<a;r+=2)Im.fromBufferAttribute(t,r),Dm.fromBufferAttribute(t,r+1),n[r]=r===0?0:n[r-1],n[r+1]=n[r]+Im.distanceTo(Dm);e.setAttribute("lineDistance",new Kr(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class bR extends sh{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}}class Ag extends Sr{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Rt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const Nm=new qt,Wf=new Pc,mc=new Mr,gc=new re;class wR extends Tn{constructor(e=new Er,t=new Ag){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const n=this.geometry,r=this.matrixWorld,a=e.params.Points.threshold,c=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),mc.copy(n.boundingSphere),mc.applyMatrix4(r),mc.radius+=a,e.ray.intersectsSphere(mc)===!1)return;Nm.copy(r).invert(),Wf.copy(e.ray).applyMatrix4(Nm);const u=a/((this.scale.x+this.scale.y+this.scale.z)/3),d=u*u,p=n.index,v=n.attributes.position;if(p!==null){const x=Math.max(0,c.start),T=Math.min(p.count,c.start+c.count);for(let b=x,C=T;b<C;b++){const E=p.getX(b);gc.fromBufferAttribute(v,E),Um(gc,E,d,r,e,t,this)}}else{const x=Math.max(0,c.start),T=Math.min(v.count,c.start+c.count);for(let b=x,C=T;b<C;b++)gc.fromBufferAttribute(v,b),Um(gc,b,d,r,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const r=t[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let a=0,c=r.length;a<c;a++){const u=r[a].name||String(a);this.morphTargetInfluences.push(0),this.morphTargetDictionary[u]=a}}}}}function Um(s,e,t,n,r,a,c){const u=Wf.distanceSqToPoint(s);if(u<t){const d=new re;Wf.closestPointToPoint(s,d),d.applyMatrix4(n);const p=r.ray.origin.distanceTo(d);if(p<r.near||p>r.far)return;a.push({distance:p,distanceToRay:Math.sqrt(u),point:d,index:e,face:null,object:c})}}class oh extends Sr{constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new Rt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Rt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=rg,this.normalScale=new Qt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class As extends oh{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new Qt(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return ni(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new Rt(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Rt(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Rt(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}}function _c(s,e,t){return!s||!t&&s.constructor===e?s:typeof e.BYTES_PER_ELEMENT=="number"?new e(s):Array.prototype.slice.call(s)}function RR(s){return ArrayBuffer.isView(s)&&!(s instanceof DataView)}function CR(s){function e(r,a){return s[r]-s[a]}const t=s.length,n=new Array(t);for(let r=0;r!==t;++r)n[r]=r;return n.sort(e),n}function Om(s,e,t){const n=s.length,r=new s.constructor(n);for(let a=0,c=0;c!==n;++a){const u=t[a]*e;for(let d=0;d!==e;++d)r[c++]=s[u+d]}return r}function bg(s,e,t,n){let r=1,a=s[0];for(;a!==void 0&&a[n]===void 0;)a=s[r++];if(a===void 0)return;let c=a[n];if(c!==void 0)if(Array.isArray(c))do c=a[n],c!==void 0&&(e.push(a.time),t.push.apply(t,c)),a=s[r++];while(a!==void 0);else if(c.toArray!==void 0)do c=a[n],c!==void 0&&(e.push(a.time),c.toArray(t,t.length)),a=s[r++];while(a!==void 0);else do c=a[n],c!==void 0&&(e.push(a.time),t.push(c)),a=s[r++];while(a!==void 0)}class Qa{constructor(e,t,n,r){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=r!==void 0?r:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){const t=this.parameterPositions;let n=this._cachedIndex,r=t[n],a=t[n-1];e:{t:{let c;n:{i:if(!(e<r)){for(let u=n+2;;){if(r===void 0){if(e<a)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===u)break;if(a=r,r=t[++n],e<r)break t}c=t.length;break n}if(!(e>=a)){const u=t[1];e<u&&(n=2,a=u);for(let d=n-2;;){if(a===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===d)break;if(r=a,a=t[--n-1],e>=a)break t}c=n,n=0;break n}break e}for(;n<c;){const u=n+c>>>1;e<t[u]?c=u:n=u+1}if(r=t[n],a=t[n-1],a===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(r===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,a,r)}return this.interpolate_(n,a,e,r)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){const t=this.resultBuffer,n=this.sampleValues,r=this.valueSize,a=e*r;for(let c=0;c!==r;++c)t[c]=n[a+c];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}}class LR extends Qa{constructor(e,t,n,r){super(e,t,n,r),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Pp,endingEnd:Pp}}intervalChanged_(e,t,n){const r=this.parameterPositions;let a=e-2,c=e+1,u=r[a],d=r[c];if(u===void 0)switch(this.getSettings_().endingStart){case Ip:a=e,u=2*t-n;break;case Dp:a=r.length-2,u=t+r[a]-r[a+1];break;default:a=e,u=n}if(d===void 0)switch(this.getSettings_().endingEnd){case Ip:c=e,d=2*n-t;break;case Dp:c=1,d=n+r[1]-r[0];break;default:c=e-1,d=t}const p=(n-t)*.5,g=this.valueSize;this._weightPrev=p/(t-u),this._weightNext=p/(d-n),this._offsetPrev=a*g,this._offsetNext=c*g}interpolate_(e,t,n,r){const a=this.resultBuffer,c=this.sampleValues,u=this.valueSize,d=e*u,p=d-u,g=this._offsetPrev,v=this._offsetNext,x=this._weightPrev,T=this._weightNext,b=(n-t)/(r-t),C=b*b,E=C*b,M=-x*E+2*x*C-x*b,V=(1+x)*E+(-1.5-2*x)*C+(-.5+x)*b+1,U=(-1-T)*E+(1.5+T)*C+.5*b,B=T*E-T*C;for(let z=0;z!==u;++z)a[z]=M*c[g+z]+V*c[p+z]+U*c[d+z]+B*c[v+z];return a}}class PR extends Qa{constructor(e,t,n,r){super(e,t,n,r)}interpolate_(e,t,n,r){const a=this.resultBuffer,c=this.sampleValues,u=this.valueSize,d=e*u,p=d-u,g=(n-t)/(r-t),v=1-g;for(let x=0;x!==u;++x)a[x]=c[p+x]*v+c[d+x]*g;return a}}class IR extends Qa{constructor(e,t,n,r){super(e,t,n,r)}interpolate_(e){return this.copySampleValue_(e-1)}}class Tr{constructor(e,t,n,r){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=_c(t,this.TimeBufferType),this.values=_c(n,this.ValueBufferType),this.setInterpolation(r||this.DefaultInterpolation)}static toJSON(e){const t=e.constructor;let n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:_c(e.times,Array),values:_c(e.values,Array)};const r=e.getInterpolation();r!==e.DefaultInterpolation&&(n.interpolation=r)}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new IR(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new PR(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new LR(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case $a:t=this.InterpolantFactoryMethodDiscrete;break;case $o:t=this.InterpolantFactoryMethodLinear;break;case Yu:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){const n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return $a;case this.InterpolantFactoryMethodLinear:return $o;case this.InterpolantFactoryMethodSmooth:return Yu}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){const t=this.times;for(let n=0,r=t.length;n!==r;++n)t[n]+=e}return this}scale(e){if(e!==1){const t=this.times;for(let n=0,r=t.length;n!==r;++n)t[n]*=e}return this}trim(e,t){const n=this.times,r=n.length;let a=0,c=r-1;for(;a!==r&&n[a]<e;)++a;for(;c!==-1&&n[c]>t;)--c;if(++c,a!==0||c!==r){a>=c&&(c=Math.max(c,1),a=c-1);const u=this.getValueSize();this.times=n.slice(a,c),this.values=this.values.slice(a*u,c*u)}return this}validate(){let e=!0;const t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);const n=this.times,r=this.values,a=n.length;a===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let c=null;for(let u=0;u!==a;u++){const d=n[u];if(typeof d=="number"&&isNaN(d)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,u,d),e=!1;break}if(c!==null&&c>d){console.error("THREE.KeyframeTrack: Out of order keys.",this,u,d,c),e=!1;break}c=d}if(r!==void 0&&RR(r))for(let u=0,d=r.length;u!==d;++u){const p=r[u];if(isNaN(p)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,u,p),e=!1;break}}return e}optimize(){const e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),r=this.getInterpolation()===Yu,a=e.length-1;let c=1;for(let u=1;u<a;++u){let d=!1;const p=e[u],g=e[u+1];if(p!==g&&(u!==1||p!==e[0]))if(r)d=!0;else{const v=u*n,x=v-n,T=v+n;for(let b=0;b!==n;++b){const C=t[v+b];if(C!==t[x+b]||C!==t[T+b]){d=!0;break}}}if(d){if(u!==c){e[c]=e[u];const v=u*n,x=c*n;for(let T=0;T!==n;++T)t[x+T]=t[v+T]}++c}}if(a>0){e[c]=e[a];for(let u=a*n,d=c*n,p=0;p!==n;++p)t[d+p]=t[u+p];++c}return c!==e.length?(this.times=e.slice(0,c),this.values=t.slice(0,c*n)):(this.times=e,this.values=t),this}clone(){const e=this.times.slice(),t=this.values.slice(),n=this.constructor,r=new n(this.name,e,t);return r.createInterpolant=this.createInterpolant,r}}Tr.prototype.TimeBufferType=Float32Array;Tr.prototype.ValueBufferType=Float32Array;Tr.prototype.DefaultInterpolation=$o;class ra extends Tr{}ra.prototype.ValueTypeName="bool";ra.prototype.ValueBufferType=Array;ra.prototype.DefaultInterpolation=$a;ra.prototype.InterpolantFactoryMethodLinear=void 0;ra.prototype.InterpolantFactoryMethodSmooth=void 0;class wg extends Tr{}wg.prototype.ValueTypeName="color";class Qo extends Tr{}Qo.prototype.ValueTypeName="number";class DR extends Qa{constructor(e,t,n,r){super(e,t,n,r)}interpolate_(e,t,n,r){const a=this.resultBuffer,c=this.sampleValues,u=this.valueSize,d=(n-t)/(r-t);let p=e*u;for(let g=p+u;p!==g;p+=4)Ts.slerpFlat(a,0,c,p-u,c,p,d);return a}}class ro extends Tr{InterpolantFactoryMethodLinear(e){return new DR(this.times,this.values,this.getValueSize(),e)}}ro.prototype.ValueTypeName="quaternion";ro.prototype.DefaultInterpolation=$o;ro.prototype.InterpolantFactoryMethodSmooth=void 0;class sa extends Tr{}sa.prototype.ValueTypeName="string";sa.prototype.ValueBufferType=Array;sa.prototype.DefaultInterpolation=$a;sa.prototype.InterpolantFactoryMethodLinear=void 0;sa.prototype.InterpolantFactoryMethodSmooth=void 0;class ea extends Tr{}ea.prototype.ValueTypeName="vector";class NR{constructor(e,t=-1,n,r=zM){this.name=e,this.tracks=n,this.duration=t,this.blendMode=r,this.uuid=ar(),this.duration<0&&this.resetDuration()}static parse(e){const t=[],n=e.tracks,r=1/(e.fps||1);for(let c=0,u=n.length;c!==u;++c)t.push(OR(n[c]).scale(r));const a=new this(e.name,e.duration,t,e.blendMode);return a.uuid=e.uuid,a}static toJSON(e){const t=[],n=e.tracks,r={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode};for(let a=0,c=n.length;a!==c;++a)t.push(Tr.toJSON(n[a]));return r}static CreateFromMorphTargetSequence(e,t,n,r){const a=t.length,c=[];for(let u=0;u<a;u++){let d=[],p=[];d.push((u+a-1)%a,u,(u+1)%a),p.push(0,1,0);const g=CR(d);d=Om(d,1,g),p=Om(p,1,g),!r&&d[0]===0&&(d.push(a),p.push(p[0])),c.push(new Qo(".morphTargetInfluences["+t[u].name+"]",d,p).scale(1/n))}return new this(e,-1,c)}static findByName(e,t){let n=e;if(!Array.isArray(e)){const r=e;n=r.geometry&&r.geometry.animations||r.animations}for(let r=0;r<n.length;r++)if(n[r].name===t)return n[r];return null}static CreateClipsFromMorphTargetSequences(e,t,n){const r={},a=/^([\w-]*?)([\d]+)$/;for(let u=0,d=e.length;u<d;u++){const p=e[u],g=p.name.match(a);if(g&&g.length>1){const v=g[1];let x=r[v];x||(r[v]=x=[]),x.push(p)}}const c=[];for(const u in r)c.push(this.CreateFromMorphTargetSequence(u,r[u],t,n));return c}static parseAnimation(e,t){if(!e)return console.error("THREE.AnimationClip: No animation in JSONLoader data."),null;const n=function(v,x,T,b,C){if(T.length!==0){const E=[],M=[];bg(T,E,M,b),E.length!==0&&C.push(new v(x,E,M))}},r=[],a=e.name||"default",c=e.fps||30,u=e.blendMode;let d=e.length||-1;const p=e.hierarchy||[];for(let v=0;v<p.length;v++){const x=p[v].keys;if(!(!x||x.length===0))if(x[0].morphTargets){const T={};let b;for(b=0;b<x.length;b++)if(x[b].morphTargets)for(let C=0;C<x[b].morphTargets.length;C++)T[x[b].morphTargets[C]]=-1;for(const C in T){const E=[],M=[];for(let V=0;V!==x[b].morphTargets.length;++V){const U=x[b];E.push(U.time),M.push(U.morphTarget===C?1:0)}r.push(new Qo(".morphTargetInfluence["+C+"]",E,M))}d=T.length*c}else{const T=".bones["+t[v].name+"]";n(ea,T+".position",x,"pos",r),n(ro,T+".quaternion",x,"rot",r),n(ea,T+".scale",x,"scl",r)}}return r.length===0?null:new this(a,d,r,u)}resetDuration(){const e=this.tracks;let t=0;for(let n=0,r=e.length;n!==r;++n){const a=this.tracks[n];t=Math.max(t,a.times[a.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){const e=[];for(let t=0;t<this.tracks.length;t++)e.push(this.tracks[t].clone());return new this.constructor(this.name,this.duration,e,this.blendMode)}toJSON(){return this.constructor.toJSON(this)}}function UR(s){switch(s.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return Qo;case"vector":case"vector2":case"vector3":case"vector4":return ea;case"color":return wg;case"quaternion":return ro;case"bool":case"boolean":return ra;case"string":return sa}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+s)}function OR(s){if(s.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");const e=UR(s.type);if(s.times===void 0){const t=[],n=[];bg(s.keys,t,n,"value"),s.times=t,s.values=n}return e.parse!==void 0?e.parse(s):new e(s.name,s.times,s.values,s.interpolation)}const ta={enabled:!1,files:{},add:function(s,e){this.enabled!==!1&&(this.files[s]=e)},get:function(s){if(this.enabled!==!1)return this.files[s]},remove:function(s){delete this.files[s]},clear:function(){this.files={}}};class Rg{constructor(e,t,n){const r=this;let a=!1,c=0,u=0,d;const p=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.itemStart=function(g){u++,a===!1&&r.onStart!==void 0&&r.onStart(g,c,u),a=!0},this.itemEnd=function(g){c++,r.onProgress!==void 0&&r.onProgress(g,c,u),c===u&&(a=!1,r.onLoad!==void 0&&r.onLoad())},this.itemError=function(g){r.onError!==void 0&&r.onError(g)},this.resolveURL=function(g){return d?d(g):g},this.setURLModifier=function(g){return d=g,this},this.addHandler=function(g,v){return p.push(g,v),this},this.removeHandler=function(g){const v=p.indexOf(g);return v!==-1&&p.splice(v,2),this},this.getHandler=function(g){for(let v=0,x=p.length;v<x;v+=2){const T=p[v],b=p[v+1];if(T.global&&(T.lastIndex=0),T.test(g))return b}return null}}}const FR=new Rg;class oa{constructor(e){this.manager=e!==void 0?e:FR,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const n=this;return new Promise(function(r,a){n.load(e,r,t,a)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}oa.DEFAULT_MATERIAL_NAME="__DEFAULT";const Xr={};class BR extends Error{constructor(e,t){super(e),this.response=t}}class Cg extends oa{constructor(e){super(e)}load(e,t,n,r){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const a=ta.get(e);if(a!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(a),this.manager.itemEnd(e)},0),a;if(Xr[e]!==void 0){Xr[e].push({onLoad:t,onProgress:n,onError:r});return}Xr[e]=[],Xr[e].push({onLoad:t,onProgress:n,onError:r});const c=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),u=this.mimeType,d=this.responseType;fetch(c).then(p=>{if(p.status===200||p.status===0){if(p.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||p.body===void 0||p.body.getReader===void 0)return p;const g=Xr[e],v=p.body.getReader(),x=p.headers.get("Content-Length")||p.headers.get("X-File-Size"),T=x?parseInt(x):0,b=T!==0;let C=0;const E=new ReadableStream({start(M){V();function V(){v.read().then(({done:U,value:B})=>{if(U)M.close();else{C+=B.byteLength;const z=new ProgressEvent("progress",{lengthComputable:b,loaded:C,total:T});for(let $=0,m=g.length;$<m;$++){const pe=g[$];pe.onProgress&&pe.onProgress(z)}M.enqueue(B),V()}})}}});return new Response(E)}else throw new BR(`fetch for "${p.url}" responded with ${p.status}: ${p.statusText}`,p)}).then(p=>{switch(d){case"arraybuffer":return p.arrayBuffer();case"blob":return p.blob();case"document":return p.text().then(g=>new DOMParser().parseFromString(g,u));case"json":return p.json();default:if(u===void 0)return p.text();{const v=/charset="?([^;"\s]*)"?/i.exec(u),x=v&&v[1]?v[1].toLowerCase():void 0,T=new TextDecoder(x);return p.arrayBuffer().then(b=>T.decode(b))}}}).then(p=>{ta.add(e,p);const g=Xr[e];delete Xr[e];for(let v=0,x=g.length;v<x;v++){const T=g[v];T.onLoad&&T.onLoad(p)}}).catch(p=>{const g=Xr[e];if(g===void 0)throw this.manager.itemError(e),p;delete Xr[e];for(let v=0,x=g.length;v<x;v++){const T=g[v];T.onError&&T.onError(p)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}}class HR extends oa{constructor(e){super(e)}load(e,t,n,r){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const a=this,c=ta.get(e);if(c!==void 0)return a.manager.itemStart(e),setTimeout(function(){t&&t(c),a.manager.itemEnd(e)},0),c;const u=Za("img");function d(){g(),ta.add(e,this),t&&t(this),a.manager.itemEnd(e)}function p(v){g(),r&&r(v),a.manager.itemError(e),a.manager.itemEnd(e)}function g(){u.removeEventListener("load",d,!1),u.removeEventListener("error",p,!1)}return u.addEventListener("load",d,!1),u.addEventListener("error",p,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(u.crossOrigin=this.crossOrigin),a.manager.itemStart(e),u.src=e,u}}class zR extends oa{constructor(e){super(e)}load(e,t,n,r){const a=new jn,c=new HR(this.manager);return c.setCrossOrigin(this.crossOrigin),c.setPath(this.path),c.load(e,function(u){a.image=u,a.needsUpdate=!0,t!==void 0&&t(a)},n,r),a}}class Nc extends Tn{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Rt(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),t}}const Sf=new qt,Fm=new re,Bm=new re;class ah{constructor(e){this.camera=e,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Qt(512,512),this.map=null,this.mapPass=null,this.matrix=new qt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Qf,this._frameExtents=new Qt(1,1),this._viewportCount=1,this._viewports=[new dn(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,n=this.matrix;Fm.setFromMatrixPosition(e.matrixWorld),t.position.copy(Fm),Bm.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Bm),t.updateMatrixWorld(),Sf.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Sf),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Sf)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class GR extends ah{constructor(){super(new fi(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(e){const t=this.camera,n=Zo*2*e.angle*this.focus,r=this.mapSize.width/this.mapSize.height,a=e.distance||t.far;(n!==t.fov||r!==t.aspect||a!==t.far)&&(t.fov=n,t.aspect=r,t.far=a,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}}class kR extends Nc{constructor(e,t,n=0,r=Math.PI/3,a=0,c=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(Tn.DEFAULT_UP),this.updateMatrix(),this.target=new Tn,this.distance=n,this.angle=r,this.penumbra=a,this.decay=c,this.map=null,this.shadow=new GR}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}const Hm=new qt,ka=new re,Mf=new re;class VR extends ah{constructor(){super(new fi(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new Qt(4,2),this._viewportCount=6,this._viewports=[new dn(2,1,1,1),new dn(0,1,1,1),new dn(3,1,1,1),new dn(1,1,1,1),new dn(3,0,1,1),new dn(1,0,1,1)],this._cubeDirections=[new re(1,0,0),new re(-1,0,0),new re(0,0,1),new re(0,0,-1),new re(0,1,0),new re(0,-1,0)],this._cubeUps=[new re(0,1,0),new re(0,1,0),new re(0,1,0),new re(0,1,0),new re(0,0,1),new re(0,0,-1)]}updateMatrices(e,t=0){const n=this.camera,r=this.matrix,a=e.distance||n.far;a!==n.far&&(n.far=a,n.updateProjectionMatrix()),ka.setFromMatrixPosition(e.matrixWorld),n.position.copy(ka),Mf.copy(n.position),Mf.add(this._cubeDirections[t]),n.up.copy(this._cubeUps[t]),n.lookAt(Mf),n.updateMatrixWorld(),r.makeTranslation(-ka.x,-ka.y,-ka.z),Hm.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Hm)}}class Lg extends Nc{constructor(e,t,n=0,r=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=r,this.shadow=new VR}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class WR extends ah{constructor(){super(new th(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Pg extends Nc{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Tn.DEFAULT_UP),this.updateMatrix(),this.target=new Tn,this.shadow=new WR}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class XR extends Nc{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}class Xf{static decodeText(e){if(typeof TextDecoder<"u")return new TextDecoder().decode(e);let t="";for(let n=0,r=e.length;n<r;n++)t+=String.fromCharCode(e[n]);try{return decodeURIComponent(escape(t))}catch{return t}}static extractUrlBase(e){const t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}}class qR extends oa{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&console.warn("THREE.ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"}}setOptions(e){return this.options=e,this}load(e,t,n,r){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const a=this,c=ta.get(e);if(c!==void 0)return a.manager.itemStart(e),setTimeout(function(){t&&t(c),a.manager.itemEnd(e)},0),c;const u={};u.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",u.headers=this.requestHeader,fetch(e,u).then(function(d){return d.blob()}).then(function(d){return createImageBitmap(d,Object.assign(a.options,{colorSpaceConversion:"none"}))}).then(function(d){ta.add(e,d),t&&t(d),a.manager.itemEnd(e)}).catch(function(d){r&&r(d),a.manager.itemError(e),a.manager.itemEnd(e)}),a.manager.itemStart(e)}}const lh="\\[\\]\\.:\\/",YR=new RegExp("["+lh+"]","g"),ch="[^"+lh+"]",jR="[^"+lh.replace("\\.","")+"]",KR=/((?:WC+[\/:])*)/.source.replace("WC",ch),$R=/(WCOD+)?/.source.replace("WCOD",jR),ZR=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",ch),JR=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",ch),QR=new RegExp("^"+KR+$R+ZR+JR+"$"),e1=["material","materials","bones","map"];class t1{constructor(e,t,n){const r=n||cn.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,r)}getValue(e,t){this.bind();const n=this._targetGroup.nCachedObjects_,r=this._bindings[n];r!==void 0&&r.getValue(e,t)}setValue(e,t){const n=this._bindings;for(let r=this._targetGroup.nCachedObjects_,a=n.length;r!==a;++r)n[r].setValue(e,t)}bind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}}class cn{constructor(e,t,n){this.path=t,this.parsedPath=n||cn.parseTrackName(t),this.node=cn.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new cn.Composite(e,t,n):new cn(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(YR,"")}static parseTrackName(e){const t=QR.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);const n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},r=n.nodeName&&n.nodeName.lastIndexOf(".");if(r!==void 0&&r!==-1){const a=n.nodeName.substring(r+1);e1.indexOf(a)!==-1&&(n.nodeName=n.nodeName.substring(0,r),n.objectName=a)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){const n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){const n=function(a){for(let c=0;c<a.length;c++){const u=a[c];if(u.name===t||u.uuid===t)return u;const d=n(u.children);if(d)return d}return null},r=n(e.children);if(r)return r}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){const n=this.resolvedProperty;for(let r=0,a=n.length;r!==a;++r)e[t++]=n[r]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){const n=this.resolvedProperty;for(let r=0,a=n.length;r!==a;++r)n[r]=e[t++]}_setValue_array_setNeedsUpdate(e,t){const n=this.resolvedProperty;for(let r=0,a=n.length;r!==a;++r)n[r]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){const n=this.resolvedProperty;for(let r=0,a=n.length;r!==a;++r)n[r]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node;const t=this.parsedPath,n=t.objectName,r=t.propertyName;let a=t.propertyIndex;if(e||(e=cn.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let p=t.objectIndex;switch(n){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let g=0;g<e.length;g++)if(e[g].name===p){p=g;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(p!==void 0){if(e[p]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[p]}}const c=e[r];if(c===void 0){const p=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+p+"."+r+" but it wasn't found.",e);return}let u=this.Versioning.None;this.targetObject=e,e.needsUpdate!==void 0?u=this.Versioning.NeedsUpdate:e.matrixWorldNeedsUpdate!==void 0&&(u=this.Versioning.MatrixWorldNeedsUpdate);let d=this.BindingType.Direct;if(a!==void 0){if(r==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[a]!==void 0&&(a=e.morphTargetDictionary[a])}d=this.BindingType.ArrayElement,this.resolvedProperty=c,this.propertyIndex=a}else c.fromArray!==void 0&&c.toArray!==void 0?(d=this.BindingType.HasFromToArray,this.resolvedProperty=c):Array.isArray(c)?(d=this.BindingType.EntireArray,this.resolvedProperty=c):this.propertyName=r;this.getValue=this.GetterByBindingType[d],this.setValue=this.SetterByBindingTypeAndVersioning[d][u]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}cn.Composite=t1;cn.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};cn.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};cn.prototype.GetterByBindingType=[cn.prototype._getValue_direct,cn.prototype._getValue_array,cn.prototype._getValue_arrayElement,cn.prototype._getValue_toArray];cn.prototype.SetterByBindingTypeAndVersioning=[[cn.prototype._setValue_direct,cn.prototype._setValue_direct_setNeedsUpdate,cn.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[cn.prototype._setValue_array,cn.prototype._setValue_array_setNeedsUpdate,cn.prototype._setValue_array_setMatrixWorldNeedsUpdate],[cn.prototype._setValue_arrayElement,cn.prototype._setValue_arrayElement_setNeedsUpdate,cn.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[cn.prototype._setValue_fromArray,cn.prototype._setValue_fromArray_setNeedsUpdate,cn.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Kf}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Kf);function zm(s,e){if(e===GM)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),s;if(e===Bf||e===ng){let t=s.getIndex();if(t===null){const c=[],u=s.getAttribute("position");if(u!==void 0){for(let d=0;d<u.count;d++)c.push(d);s.setIndex(c),t=s.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),s}const n=t.count-2,r=[];if(e===Bf)for(let c=1;c<=n;c++)r.push(t.getX(0)),r.push(t.getX(c)),r.push(t.getX(c+1));else for(let c=0;c<n;c++)c%2===0?(r.push(t.getX(c)),r.push(t.getX(c+1)),r.push(t.getX(c+2))):(r.push(t.getX(c+2)),r.push(t.getX(c+1)),r.push(t.getX(c)));r.length/3!==n&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");const a=s.clone();return a.setIndex(r),a.clearGroups(),a}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",e),s}class n1 extends oa{constructor(e){super(e),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(t){return new a1(t)}),this.register(function(t){return new m1(t)}),this.register(function(t){return new g1(t)}),this.register(function(t){return new _1(t)}),this.register(function(t){return new c1(t)}),this.register(function(t){return new u1(t)}),this.register(function(t){return new f1(t)}),this.register(function(t){return new h1(t)}),this.register(function(t){return new o1(t)}),this.register(function(t){return new d1(t)}),this.register(function(t){return new l1(t)}),this.register(function(t){return new p1(t)}),this.register(function(t){return new r1(t)}),this.register(function(t){return new v1(t)}),this.register(function(t){return new x1(t)})}load(e,t,n,r){const a=this;let c;this.resourcePath!==""?c=this.resourcePath:this.path!==""?c=this.path:c=Xf.extractUrlBase(e),this.manager.itemStart(e);const u=function(p){r?r(p):console.error(p),a.manager.itemError(e),a.manager.itemEnd(e)},d=new Cg(this.manager);d.setPath(this.path),d.setResponseType("arraybuffer"),d.setRequestHeader(this.requestHeader),d.setWithCredentials(this.withCredentials),d.load(e,function(p){try{a.parse(p,c,function(g){t(g),a.manager.itemEnd(e)},u)}catch(g){u(g)}},n,u)}setDRACOLoader(e){return this.dracoLoader=e,this}setDDSLoader(){throw new Error('THREE.GLTFLoader: "MSFT_texture_dds" no longer supported. Please update to "KHR_texture_basisu".')}setKTX2Loader(e){return this.ktx2Loader=e,this}setMeshoptDecoder(e){return this.meshoptDecoder=e,this}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}parse(e,t,n,r){let a;const c={},u={},d=new TextDecoder;if(typeof e=="string")a=JSON.parse(e);else if(e instanceof ArrayBuffer)if(d.decode(new Uint8Array(e,0,4))===Ig){try{c[Jt.KHR_BINARY_GLTF]=new y1(e)}catch(v){r&&r(v);return}a=JSON.parse(c[Jt.KHR_BINARY_GLTF].content)}else a=JSON.parse(d.decode(e));else a=e;if(a.asset===void 0||a.asset.version[0]<2){r&&r(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}const p=new D1(a,{path:t||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});p.fileLoader.setRequestHeader(this.requestHeader);for(let g=0;g<this.pluginCallbacks.length;g++){const v=this.pluginCallbacks[g](p);v.name||console.error("THREE.GLTFLoader: Invalid plugin found: missing name"),u[v.name]=v,c[v.name]=!0}if(a.extensionsUsed)for(let g=0;g<a.extensionsUsed.length;++g){const v=a.extensionsUsed[g],x=a.extensionsRequired||[];switch(v){case Jt.KHR_MATERIALS_UNLIT:c[v]=new s1;break;case Jt.KHR_DRACO_MESH_COMPRESSION:c[v]=new S1(a,this.dracoLoader);break;case Jt.KHR_TEXTURE_TRANSFORM:c[v]=new M1;break;case Jt.KHR_MESH_QUANTIZATION:c[v]=new E1;break;default:x.indexOf(v)>=0&&u[v]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+v+'".')}}p.setExtensions(c),p.setPlugins(u),p.parse(n,r)}parseAsync(e,t){const n=this;return new Promise(function(r,a){n.parse(e,t,r,a)})}}function i1(){let s={};return{get:function(e){return s[e]},add:function(e,t){s[e]=t},remove:function(e){delete s[e]},removeAll:function(){s={}}}}const Jt={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"};class r1{constructor(e){this.parser=e,this.name=Jt.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){const e=this.parser,t=this.parser.json.nodes||[];for(let n=0,r=t.length;n<r;n++){const a=t[n];a.extensions&&a.extensions[this.name]&&a.extensions[this.name].light!==void 0&&e._addNodeRef(this.cache,a.extensions[this.name].light)}}_loadLight(e){const t=this.parser,n="light:"+e;let r=t.cache.get(n);if(r)return r;const a=t.json,d=((a.extensions&&a.extensions[this.name]||{}).lights||[])[e];let p;const g=new Rt(16777215);d.color!==void 0&&g.setRGB(d.color[0],d.color[1],d.color[2],Kn);const v=d.range!==void 0?d.range:0;switch(d.type){case"directional":p=new Pg(g),p.target.position.set(0,0,-1),p.add(p.target);break;case"point":p=new Lg(g),p.distance=v;break;case"spot":p=new kR(g),p.distance=v,d.spot=d.spot||{},d.spot.innerConeAngle=d.spot.innerConeAngle!==void 0?d.spot.innerConeAngle:0,d.spot.outerConeAngle=d.spot.outerConeAngle!==void 0?d.spot.outerConeAngle:Math.PI/4,p.angle=d.spot.outerConeAngle,p.penumbra=1-d.spot.innerConeAngle/d.spot.outerConeAngle,p.target.position.set(0,0,-1),p.add(p.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+d.type)}return p.position.set(0,0,0),p.decay=2,vs(p,d),d.intensity!==void 0&&(p.intensity=d.intensity),p.name=t.createUniqueName(d.name||"light_"+e),r=Promise.resolve(p),t.cache.add(n,r),r}getDependency(e,t){if(e==="light")return this._loadLight(t)}createNodeAttachment(e){const t=this,n=this.parser,a=n.json.nodes[e],u=(a.extensions&&a.extensions[this.name]||{}).light;return u===void 0?null:this._loadLight(u).then(function(d){return n._getNodeRef(t.cache,u,d)})}}class s1{constructor(){this.name=Jt.KHR_MATERIALS_UNLIT}getMaterialType(){return $s}extendParams(e,t,n){const r=[];e.color=new Rt(1,1,1),e.opacity=1;const a=t.pbrMetallicRoughness;if(a){if(Array.isArray(a.baseColorFactor)){const c=a.baseColorFactor;e.color.setRGB(c[0],c[1],c[2],Kn),e.opacity=c[3]}a.baseColorTexture!==void 0&&r.push(n.assignTexture(e,"map",a.baseColorTexture,bn))}return Promise.all(r)}}class o1{constructor(e){this.parser=e,this.name=Jt.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(e,t){const r=this.parser.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const a=r.extensions[this.name].emissiveStrength;return a!==void 0&&(t.emissiveIntensity=a),Promise.resolve()}}class a1{constructor(e){this.parser=e,this.name=Jt.KHR_MATERIALS_CLEARCOAT}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:As}extendMaterialParams(e,t){const n=this.parser,r=n.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const a=[],c=r.extensions[this.name];if(c.clearcoatFactor!==void 0&&(t.clearcoat=c.clearcoatFactor),c.clearcoatTexture!==void 0&&a.push(n.assignTexture(t,"clearcoatMap",c.clearcoatTexture)),c.clearcoatRoughnessFactor!==void 0&&(t.clearcoatRoughness=c.clearcoatRoughnessFactor),c.clearcoatRoughnessTexture!==void 0&&a.push(n.assignTexture(t,"clearcoatRoughnessMap",c.clearcoatRoughnessTexture)),c.clearcoatNormalTexture!==void 0&&(a.push(n.assignTexture(t,"clearcoatNormalMap",c.clearcoatNormalTexture)),c.clearcoatNormalTexture.scale!==void 0)){const u=c.clearcoatNormalTexture.scale;t.clearcoatNormalScale=new Qt(u,u)}return Promise.all(a)}}class l1{constructor(e){this.parser=e,this.name=Jt.KHR_MATERIALS_IRIDESCENCE}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:As}extendMaterialParams(e,t){const n=this.parser,r=n.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const a=[],c=r.extensions[this.name];return c.iridescenceFactor!==void 0&&(t.iridescence=c.iridescenceFactor),c.iridescenceTexture!==void 0&&a.push(n.assignTexture(t,"iridescenceMap",c.iridescenceTexture)),c.iridescenceIor!==void 0&&(t.iridescenceIOR=c.iridescenceIor),t.iridescenceThicknessRange===void 0&&(t.iridescenceThicknessRange=[100,400]),c.iridescenceThicknessMinimum!==void 0&&(t.iridescenceThicknessRange[0]=c.iridescenceThicknessMinimum),c.iridescenceThicknessMaximum!==void 0&&(t.iridescenceThicknessRange[1]=c.iridescenceThicknessMaximum),c.iridescenceThicknessTexture!==void 0&&a.push(n.assignTexture(t,"iridescenceThicknessMap",c.iridescenceThicknessTexture)),Promise.all(a)}}class c1{constructor(e){this.parser=e,this.name=Jt.KHR_MATERIALS_SHEEN}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:As}extendMaterialParams(e,t){const n=this.parser,r=n.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const a=[];t.sheenColor=new Rt(0,0,0),t.sheenRoughness=0,t.sheen=1;const c=r.extensions[this.name];if(c.sheenColorFactor!==void 0){const u=c.sheenColorFactor;t.sheenColor.setRGB(u[0],u[1],u[2],Kn)}return c.sheenRoughnessFactor!==void 0&&(t.sheenRoughness=c.sheenRoughnessFactor),c.sheenColorTexture!==void 0&&a.push(n.assignTexture(t,"sheenColorMap",c.sheenColorTexture,bn)),c.sheenRoughnessTexture!==void 0&&a.push(n.assignTexture(t,"sheenRoughnessMap",c.sheenRoughnessTexture)),Promise.all(a)}}class u1{constructor(e){this.parser=e,this.name=Jt.KHR_MATERIALS_TRANSMISSION}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:As}extendMaterialParams(e,t){const n=this.parser,r=n.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const a=[],c=r.extensions[this.name];return c.transmissionFactor!==void 0&&(t.transmission=c.transmissionFactor),c.transmissionTexture!==void 0&&a.push(n.assignTexture(t,"transmissionMap",c.transmissionTexture)),Promise.all(a)}}class f1{constructor(e){this.parser=e,this.name=Jt.KHR_MATERIALS_VOLUME}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:As}extendMaterialParams(e,t){const n=this.parser,r=n.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const a=[],c=r.extensions[this.name];t.thickness=c.thicknessFactor!==void 0?c.thicknessFactor:0,c.thicknessTexture!==void 0&&a.push(n.assignTexture(t,"thicknessMap",c.thicknessTexture)),t.attenuationDistance=c.attenuationDistance||1/0;const u=c.attenuationColor||[1,1,1];return t.attenuationColor=new Rt().setRGB(u[0],u[1],u[2],Kn),Promise.all(a)}}class h1{constructor(e){this.parser=e,this.name=Jt.KHR_MATERIALS_IOR}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:As}extendMaterialParams(e,t){const r=this.parser.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const a=r.extensions[this.name];return t.ior=a.ior!==void 0?a.ior:1.5,Promise.resolve()}}class d1{constructor(e){this.parser=e,this.name=Jt.KHR_MATERIALS_SPECULAR}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:As}extendMaterialParams(e,t){const n=this.parser,r=n.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const a=[],c=r.extensions[this.name];t.specularIntensity=c.specularFactor!==void 0?c.specularFactor:1,c.specularTexture!==void 0&&a.push(n.assignTexture(t,"specularIntensityMap",c.specularTexture));const u=c.specularColorFactor||[1,1,1];return t.specularColor=new Rt().setRGB(u[0],u[1],u[2],Kn),c.specularColorTexture!==void 0&&a.push(n.assignTexture(t,"specularColorMap",c.specularColorTexture,bn)),Promise.all(a)}}class p1{constructor(e){this.parser=e,this.name=Jt.KHR_MATERIALS_ANISOTROPY}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:As}extendMaterialParams(e,t){const n=this.parser,r=n.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const a=[],c=r.extensions[this.name];return c.anisotropyStrength!==void 0&&(t.anisotropy=c.anisotropyStrength),c.anisotropyRotation!==void 0&&(t.anisotropyRotation=c.anisotropyRotation),c.anisotropyTexture!==void 0&&a.push(n.assignTexture(t,"anisotropyMap",c.anisotropyTexture)),Promise.all(a)}}class m1{constructor(e){this.parser=e,this.name=Jt.KHR_TEXTURE_BASISU}loadTexture(e){const t=this.parser,n=t.json,r=n.textures[e];if(!r.extensions||!r.extensions[this.name])return null;const a=r.extensions[this.name],c=t.options.ktx2Loader;if(!c){if(n.extensionsRequired&&n.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return t.loadTextureImage(e,a.source,c)}}class g1{constructor(e){this.parser=e,this.name=Jt.EXT_TEXTURE_WEBP,this.isSupported=null}loadTexture(e){const t=this.name,n=this.parser,r=n.json,a=r.textures[e];if(!a.extensions||!a.extensions[t])return null;const c=a.extensions[t],u=r.images[c.source];let d=n.textureLoader;if(u.uri){const p=n.options.manager.getHandler(u.uri);p!==null&&(d=p)}return this.detectSupport().then(function(p){if(p)return n.loadTextureImage(e,c.source,d);if(r.extensionsRequired&&r.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: WebP required by asset but unsupported.");return n.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){const t=new Image;t.src="data:image/webp;base64,UklGRiIAAABXRUJQVlA4IBYAAAAwAQCdASoBAAEADsD+JaQAA3AAAAAA",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}}class _1{constructor(e){this.parser=e,this.name=Jt.EXT_TEXTURE_AVIF,this.isSupported=null}loadTexture(e){const t=this.name,n=this.parser,r=n.json,a=r.textures[e];if(!a.extensions||!a.extensions[t])return null;const c=a.extensions[t],u=r.images[c.source];let d=n.textureLoader;if(u.uri){const p=n.options.manager.getHandler(u.uri);p!==null&&(d=p)}return this.detectSupport().then(function(p){if(p)return n.loadTextureImage(e,c.source,d);if(r.extensionsRequired&&r.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: AVIF required by asset but unsupported.");return n.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){const t=new Image;t.src="data:image/avif;base64,AAAAIGZ0eXBhdmlmAAAAAGF2aWZtaWYxbWlhZk1BMUIAAADybWV0YQAAAAAAAAAoaGRscgAAAAAAAAAAcGljdAAAAAAAAAAAAAAAAGxpYmF2aWYAAAAADnBpdG0AAAAAAAEAAAAeaWxvYwAAAABEAAABAAEAAAABAAABGgAAABcAAAAoaWluZgAAAAAAAQAAABppbmZlAgAAAAABAABhdjAxQ29sb3IAAAAAamlwcnAAAABLaXBjbwAAABRpc3BlAAAAAAAAAAEAAAABAAAAEHBpeGkAAAAAAwgICAAAAAxhdjFDgQAMAAAAABNjb2xybmNseAACAAIABoAAAAAXaXBtYQAAAAAAAAABAAEEAQKDBAAAAB9tZGF0EgAKCBgABogQEDQgMgkQAAAAB8dSLfI=",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}}class v1{constructor(e){this.name=Jt.EXT_MESHOPT_COMPRESSION,this.parser=e}loadBufferView(e){const t=this.parser.json,n=t.bufferViews[e];if(n.extensions&&n.extensions[this.name]){const r=n.extensions[this.name],a=this.parser.getDependency("buffer",r.buffer),c=this.parser.options.meshoptDecoder;if(!c||!c.supported){if(t.extensionsRequired&&t.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return a.then(function(u){const d=r.byteOffset||0,p=r.byteLength||0,g=r.count,v=r.byteStride,x=new Uint8Array(u,d,p);return c.decodeGltfBufferAsync?c.decodeGltfBufferAsync(g,v,x,r.mode,r.filter).then(function(T){return T.buffer}):c.ready.then(function(){const T=new ArrayBuffer(g*v);return c.decodeGltfBuffer(new Uint8Array(T),g,v,x,r.mode,r.filter),T})})}else return null}}class x1{constructor(e){this.name=Jt.EXT_MESH_GPU_INSTANCING,this.parser=e}createNodeMesh(e){const t=this.parser.json,n=t.nodes[e];if(!n.extensions||!n.extensions[this.name]||n.mesh===void 0)return null;const r=t.meshes[n.mesh];for(const p of r.primitives)if(p.mode!==Xi.TRIANGLES&&p.mode!==Xi.TRIANGLE_STRIP&&p.mode!==Xi.TRIANGLE_FAN&&p.mode!==void 0)return null;const c=n.extensions[this.name].attributes,u=[],d={};for(const p in c)u.push(this.parser.getDependency("accessor",c[p]).then(g=>(d[p]=g,d[p])));return u.length<1?null:(u.push(this.parser.createNodeMesh(e)),Promise.all(u).then(p=>{const g=p.pop(),v=g.isGroup?g.children:[g],x=p[0].count,T=[];for(const b of v){const C=new qt,E=new re,M=new Ts,V=new re(1,1,1),U=new TR(b.geometry,b.material,x);for(let B=0;B<x;B++)d.TRANSLATION&&E.fromBufferAttribute(d.TRANSLATION,B),d.ROTATION&&M.fromBufferAttribute(d.ROTATION,B),d.SCALE&&V.fromBufferAttribute(d.SCALE,B),U.setMatrixAt(B,C.compose(E,M,V));for(const B in d)if(B==="_COLOR_0"){const z=d[B];U.instanceColor=new Vf(z.array,z.itemSize,z.normalized)}else B!=="TRANSLATION"&&B!=="ROTATION"&&B!=="SCALE"&&b.geometry.setAttribute(B,d[B]);Tn.prototype.copy.call(U,b),this.parser.assignFinalMaterial(U),T.push(U)}return g.isGroup?(g.clear(),g.add(...T),g):T[0]}))}}const Ig="glTF",Va=12,Gm={JSON:1313821514,BIN:5130562};class y1{constructor(e){this.name=Jt.KHR_BINARY_GLTF,this.content=null,this.body=null;const t=new DataView(e,0,Va),n=new TextDecoder;if(this.header={magic:n.decode(new Uint8Array(e.slice(0,4))),version:t.getUint32(4,!0),length:t.getUint32(8,!0)},this.header.magic!==Ig)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");const r=this.header.length-Va,a=new DataView(e,Va);let c=0;for(;c<r;){const u=a.getUint32(c,!0);c+=4;const d=a.getUint32(c,!0);if(c+=4,d===Gm.JSON){const p=new Uint8Array(e,Va+c,u);this.content=n.decode(p)}else if(d===Gm.BIN){const p=Va+c;this.body=e.slice(p,p+u)}c+=u}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}}class S1{constructor(e,t){if(!t)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=Jt.KHR_DRACO_MESH_COMPRESSION,this.json=e,this.dracoLoader=t,this.dracoLoader.preload()}decodePrimitive(e,t){const n=this.json,r=this.dracoLoader,a=e.extensions[this.name].bufferView,c=e.extensions[this.name].attributes,u={},d={},p={};for(const g in c){const v=qf[g]||g.toLowerCase();u[v]=c[g]}for(const g in e.attributes){const v=qf[g]||g.toLowerCase();if(c[g]!==void 0){const x=n.accessors[e.attributes[g]],T=Xo[x.componentType];p[v]=T.name,d[v]=x.normalized===!0}}return t.getDependency("bufferView",a).then(function(g){return new Promise(function(v){r.decodeDracoFile(g,function(x){for(const T in x.attributes){const b=x.attributes[T],C=d[T];C!==void 0&&(b.normalized=C)}v(x)},u,p)})})}}class M1{constructor(){this.name=Jt.KHR_TEXTURE_TRANSFORM}extendTexture(e,t){return(t.texCoord===void 0||t.texCoord===e.channel)&&t.offset===void 0&&t.rotation===void 0&&t.scale===void 0||(e=e.clone(),t.texCoord!==void 0&&(e.channel=t.texCoord),t.offset!==void 0&&e.offset.fromArray(t.offset),t.rotation!==void 0&&(e.rotation=t.rotation),t.scale!==void 0&&e.repeat.fromArray(t.scale),e.needsUpdate=!0),e}}class E1{constructor(){this.name=Jt.KHR_MESH_QUANTIZATION}}class Dg extends Qa{constructor(e,t,n,r){super(e,t,n,r)}copySampleValue_(e){const t=this.resultBuffer,n=this.sampleValues,r=this.valueSize,a=e*r*3+r;for(let c=0;c!==r;c++)t[c]=n[a+c];return t}interpolate_(e,t,n,r){const a=this.resultBuffer,c=this.sampleValues,u=this.valueSize,d=u*2,p=u*3,g=r-t,v=(n-t)/g,x=v*v,T=x*v,b=e*p,C=b-p,E=-2*T+3*x,M=T-x,V=1-E,U=M-x+v;for(let B=0;B!==u;B++){const z=c[C+B+u],$=c[C+B+d]*g,m=c[b+B+u],pe=c[b+B]*g;a[B]=V*z+U*$+E*m+M*pe}return a}}const T1=new Ts;class A1 extends Dg{interpolate_(e,t,n,r){const a=super.interpolate_(e,t,n,r);return T1.fromArray(a).normalize().toArray(a),a}}const Xi={FLOAT:5126,FLOAT_MAT3:35675,FLOAT_MAT4:35676,FLOAT_VEC2:35664,FLOAT_VEC3:35665,FLOAT_VEC4:35666,LINEAR:9729,REPEAT:10497,SAMPLER_2D:35678,POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6,UNSIGNED_BYTE:5121,UNSIGNED_SHORT:5123},Xo={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},km={9728:Xn,9729:Mi,9984:Ff,9985:Km,9986:vc,9987:to},Vm={33071:qi,33648:Sc,10497:jo},Ef={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},qf={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},_s={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},b1={CUBICSPLINE:void 0,LINEAR:$o,STEP:$a},Tf={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function w1(s){return s.DefaultMaterial===void 0&&(s.DefaultMaterial=new oh({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:$r})),s.DefaultMaterial}function Ws(s,e,t){for(const n in t.extensions)s[n]===void 0&&(e.userData.gltfExtensions=e.userData.gltfExtensions||{},e.userData.gltfExtensions[n]=t.extensions[n])}function vs(s,e){e.extras!==void 0&&(typeof e.extras=="object"?Object.assign(s.userData,e.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+e.extras))}function R1(s,e,t){let n=!1,r=!1,a=!1;for(let p=0,g=e.length;p<g;p++){const v=e[p];if(v.POSITION!==void 0&&(n=!0),v.NORMAL!==void 0&&(r=!0),v.COLOR_0!==void 0&&(a=!0),n&&r&&a)break}if(!n&&!r&&!a)return Promise.resolve(s);const c=[],u=[],d=[];for(let p=0,g=e.length;p<g;p++){const v=e[p];if(n){const x=v.POSITION!==void 0?t.getDependency("accessor",v.POSITION):s.attributes.position;c.push(x)}if(r){const x=v.NORMAL!==void 0?t.getDependency("accessor",v.NORMAL):s.attributes.normal;u.push(x)}if(a){const x=v.COLOR_0!==void 0?t.getDependency("accessor",v.COLOR_0):s.attributes.color;d.push(x)}}return Promise.all([Promise.all(c),Promise.all(u),Promise.all(d)]).then(function(p){const g=p[0],v=p[1],x=p[2];return n&&(s.morphAttributes.position=g),r&&(s.morphAttributes.normal=v),a&&(s.morphAttributes.color=x),s.morphTargetsRelative=!0,s})}function C1(s,e){if(s.updateMorphTargets(),e.weights!==void 0)for(let t=0,n=e.weights.length;t<n;t++)s.morphTargetInfluences[t]=e.weights[t];if(e.extras&&Array.isArray(e.extras.targetNames)){const t=e.extras.targetNames;if(s.morphTargetInfluences.length===t.length){s.morphTargetDictionary={};for(let n=0,r=t.length;n<r;n++)s.morphTargetDictionary[t[n]]=n}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function L1(s){let e;const t=s.extensions&&s.extensions[Jt.KHR_DRACO_MESH_COMPRESSION];if(t?e="draco:"+t.bufferView+":"+t.indices+":"+Af(t.attributes):e=s.indices+":"+Af(s.attributes)+":"+s.mode,s.targets!==void 0)for(let n=0,r=s.targets.length;n<r;n++)e+=":"+Af(s.targets[n]);return e}function Af(s){let e="";const t=Object.keys(s).sort();for(let n=0,r=t.length;n<r;n++)e+=t[n]+":"+s[t[n]]+";";return e}function Yf(s){switch(s){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function P1(s){return s.search(/\.jpe?g($|\?)/i)>0||s.search(/^data\:image\/jpeg/)===0?"image/jpeg":s.search(/\.webp($|\?)/i)>0||s.search(/^data\:image\/webp/)===0?"image/webp":"image/png"}const I1=new qt;class D1{constructor(e={},t={}){this.json=e,this.extensions={},this.plugins={},this.options=t,this.cache=new i1,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let n=!1,r=!1,a=-1;typeof navigator<"u"&&(n=/^((?!chrome|android).)*safari/i.test(navigator.userAgent)===!0,r=navigator.userAgent.indexOf("Firefox")>-1,a=r?navigator.userAgent.match(/Firefox\/([0-9]+)\./)[1]:-1),typeof createImageBitmap>"u"||n||r&&a<98?this.textureLoader=new zR(this.options.manager):this.textureLoader=new qR(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new Cg(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials"&&this.fileLoader.setWithCredentials(!0)}setExtensions(e){this.extensions=e}setPlugins(e){this.plugins=e}parse(e,t){const n=this,r=this.json,a=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(c){return c._markDefs&&c._markDefs()}),Promise.all(this._invokeAll(function(c){return c.beforeRoot&&c.beforeRoot()})).then(function(){return Promise.all([n.getDependencies("scene"),n.getDependencies("animation"),n.getDependencies("camera")])}).then(function(c){const u={scene:c[0][r.scene||0],scenes:c[0],animations:c[1],cameras:c[2],asset:r.asset,parser:n,userData:{}};return Ws(a,u,r),vs(u,r),Promise.all(n._invokeAll(function(d){return d.afterRoot&&d.afterRoot(u)})).then(function(){e(u)})}).catch(t)}_markDefs(){const e=this.json.nodes||[],t=this.json.skins||[],n=this.json.meshes||[];for(let r=0,a=t.length;r<a;r++){const c=t[r].joints;for(let u=0,d=c.length;u<d;u++)e[c[u]].isBone=!0}for(let r=0,a=e.length;r<a;r++){const c=e[r];c.mesh!==void 0&&(this._addNodeRef(this.meshCache,c.mesh),c.skin!==void 0&&(n[c.mesh].isSkinnedMesh=!0)),c.camera!==void 0&&this._addNodeRef(this.cameraCache,c.camera)}}_addNodeRef(e,t){t!==void 0&&(e.refs[t]===void 0&&(e.refs[t]=e.uses[t]=0),e.refs[t]++)}_getNodeRef(e,t,n){if(e.refs[t]<=1)return n;const r=n.clone(),a=(c,u)=>{const d=this.associations.get(c);d!=null&&this.associations.set(u,d);for(const[p,g]of c.children.entries())a(g,u.children[p])};return a(n,r),r.name+="_instance_"+e.uses[t]++,r}_invokeOne(e){const t=Object.values(this.plugins);t.push(this);for(let n=0;n<t.length;n++){const r=e(t[n]);if(r)return r}return null}_invokeAll(e){const t=Object.values(this.plugins);t.unshift(this);const n=[];for(let r=0;r<t.length;r++){const a=e(t[r]);a&&n.push(a)}return n}getDependency(e,t){const n=e+":"+t;let r=this.cache.get(n);if(!r){switch(e){case"scene":r=this.loadScene(t);break;case"node":r=this._invokeOne(function(a){return a.loadNode&&a.loadNode(t)});break;case"mesh":r=this._invokeOne(function(a){return a.loadMesh&&a.loadMesh(t)});break;case"accessor":r=this.loadAccessor(t);break;case"bufferView":r=this._invokeOne(function(a){return a.loadBufferView&&a.loadBufferView(t)});break;case"buffer":r=this.loadBuffer(t);break;case"material":r=this._invokeOne(function(a){return a.loadMaterial&&a.loadMaterial(t)});break;case"texture":r=this._invokeOne(function(a){return a.loadTexture&&a.loadTexture(t)});break;case"skin":r=this.loadSkin(t);break;case"animation":r=this._invokeOne(function(a){return a.loadAnimation&&a.loadAnimation(t)});break;case"camera":r=this.loadCamera(t);break;default:if(r=this._invokeOne(function(a){return a!=this&&a.getDependency&&a.getDependency(e,t)}),!r)throw new Error("Unknown type: "+e);break}this.cache.add(n,r)}return r}getDependencies(e){let t=this.cache.get(e);if(!t){const n=this,r=this.json[e+(e==="mesh"?"es":"s")]||[];t=Promise.all(r.map(function(a,c){return n.getDependency(e,c)})),this.cache.add(e,t)}return t}loadBuffer(e){const t=this.json.buffers[e],n=this.fileLoader;if(t.type&&t.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+t.type+" buffer type is not supported.");if(t.uri===void 0&&e===0)return Promise.resolve(this.extensions[Jt.KHR_BINARY_GLTF].body);const r=this.options;return new Promise(function(a,c){n.load(Xf.resolveURL(t.uri,r.path),a,void 0,function(){c(new Error('THREE.GLTFLoader: Failed to load buffer "'+t.uri+'".'))})})}loadBufferView(e){const t=this.json.bufferViews[e];return this.getDependency("buffer",t.buffer).then(function(n){const r=t.byteLength||0,a=t.byteOffset||0;return n.slice(a,a+r)})}loadAccessor(e){const t=this,n=this.json,r=this.json.accessors[e];if(r.bufferView===void 0&&r.sparse===void 0){const c=Ef[r.type],u=Xo[r.componentType],d=r.normalized===!0,p=new u(r.count*c);return Promise.resolve(new hi(p,c,d))}const a=[];return r.bufferView!==void 0?a.push(this.getDependency("bufferView",r.bufferView)):a.push(null),r.sparse!==void 0&&(a.push(this.getDependency("bufferView",r.sparse.indices.bufferView)),a.push(this.getDependency("bufferView",r.sparse.values.bufferView))),Promise.all(a).then(function(c){const u=c[0],d=Ef[r.type],p=Xo[r.componentType],g=p.BYTES_PER_ELEMENT,v=g*d,x=r.byteOffset||0,T=r.bufferView!==void 0?n.bufferViews[r.bufferView].byteStride:void 0,b=r.normalized===!0;let C,E;if(T&&T!==v){const M=Math.floor(x/T),V="InterleavedBuffer:"+r.bufferView+":"+r.componentType+":"+M+":"+r.count;let U=t.cache.get(V);U||(C=new p(u,M*T,r.count*T/g),U=new vR(C,T/g),t.cache.add(V,U)),E=new ih(U,d,x%T/g,b)}else u===null?C=new p(r.count*d):C=new p(u,x,r.count*d),E=new hi(C,d,b);if(r.sparse!==void 0){const M=Ef.SCALAR,V=Xo[r.sparse.indices.componentType],U=r.sparse.indices.byteOffset||0,B=r.sparse.values.byteOffset||0,z=new V(c[1],U,r.sparse.count*M),$=new p(c[2],B,r.sparse.count*d);u!==null&&(E=new hi(E.array.slice(),E.itemSize,E.normalized));for(let m=0,pe=z.length;m<pe;m++){const D=z[m];if(E.setX(D,$[m*d]),d>=2&&E.setY(D,$[m*d+1]),d>=3&&E.setZ(D,$[m*d+2]),d>=4&&E.setW(D,$[m*d+3]),d>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}}return E})}loadTexture(e){const t=this.json,n=this.options,a=t.textures[e].source,c=t.images[a];let u=this.textureLoader;if(c.uri){const d=n.manager.getHandler(c.uri);d!==null&&(u=d)}return this.loadTextureImage(e,a,u)}loadTextureImage(e,t,n){const r=this,a=this.json,c=a.textures[e],u=a.images[t],d=(u.uri||u.bufferView)+":"+c.sampler;if(this.textureCache[d])return this.textureCache[d];const p=this.loadImageSource(t,n).then(function(g){g.flipY=!1,g.name=c.name||u.name||"",g.name===""&&typeof u.uri=="string"&&u.uri.startsWith("data:image/")===!1&&(g.name=u.uri);const x=(a.samplers||{})[c.sampler]||{};return g.magFilter=km[x.magFilter]||Mi,g.minFilter=km[x.minFilter]||to,g.wrapS=Vm[x.wrapS]||jo,g.wrapT=Vm[x.wrapT]||jo,r.associations.set(g,{textures:e}),g}).catch(function(){return null});return this.textureCache[d]=p,p}loadImageSource(e,t){const n=this,r=this.json,a=this.options;if(this.sourceCache[e]!==void 0)return this.sourceCache[e].then(v=>v.clone());const c=r.images[e],u=self.URL||self.webkitURL;let d=c.uri||"",p=!1;if(c.bufferView!==void 0)d=n.getDependency("bufferView",c.bufferView).then(function(v){p=!0;const x=new Blob([v],{type:c.mimeType});return d=u.createObjectURL(x),d});else if(c.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+e+" is missing URI and bufferView");const g=Promise.resolve(d).then(function(v){return new Promise(function(x,T){let b=x;t.isImageBitmapLoader===!0&&(b=function(C){const E=new jn(C);E.needsUpdate=!0,x(E)}),t.load(Xf.resolveURL(v,a.path),b,void 0,T)})}).then(function(v){return p===!0&&u.revokeObjectURL(d),v.userData.mimeType=c.mimeType||P1(c.uri),v}).catch(function(v){throw console.error("THREE.GLTFLoader: Couldn't load texture",d),v});return this.sourceCache[e]=g,g}assignTexture(e,t,n,r){const a=this;return this.getDependency("texture",n.index).then(function(c){if(!c)return null;if(n.texCoord!==void 0&&n.texCoord>0&&(c=c.clone(),c.channel=n.texCoord),a.extensions[Jt.KHR_TEXTURE_TRANSFORM]){const u=n.extensions!==void 0?n.extensions[Jt.KHR_TEXTURE_TRANSFORM]:void 0;if(u){const d=a.associations.get(c);c=a.extensions[Jt.KHR_TEXTURE_TRANSFORM].extendTexture(c,u),a.associations.set(c,d)}}return r!==void 0&&(c.colorSpace=r),e[t]=c,c})}assignFinalMaterial(e){const t=e.geometry;let n=e.material;const r=t.attributes.tangent===void 0,a=t.attributes.color!==void 0,c=t.attributes.normal===void 0;if(e.isPoints){const u="PointsMaterial:"+n.uuid;let d=this.cache.get(u);d||(d=new Ag,Sr.prototype.copy.call(d,n),d.color.copy(n.color),d.map=n.map,d.sizeAttenuation=!1,this.cache.add(u,d)),n=d}else if(e.isLine){const u="LineBasicMaterial:"+n.uuid;let d=this.cache.get(u);d||(d=new Tg,Sr.prototype.copy.call(d,n),d.color.copy(n.color),d.map=n.map,this.cache.add(u,d)),n=d}if(r||a||c){let u="ClonedMaterial:"+n.uuid+":";r&&(u+="derivative-tangents:"),a&&(u+="vertex-colors:"),c&&(u+="flat-shading:");let d=this.cache.get(u);d||(d=n.clone(),a&&(d.vertexColors=!0),c&&(d.flatShading=!0),r&&(d.normalScale&&(d.normalScale.y*=-1),d.clearcoatNormalScale&&(d.clearcoatNormalScale.y*=-1)),this.cache.add(u,d),this.associations.set(d,this.associations.get(n))),n=d}e.material=n}getMaterialType(){return oh}loadMaterial(e){const t=this,n=this.json,r=this.extensions,a=n.materials[e];let c;const u={},d=a.extensions||{},p=[];if(d[Jt.KHR_MATERIALS_UNLIT]){const v=r[Jt.KHR_MATERIALS_UNLIT];c=v.getMaterialType(),p.push(v.extendParams(u,a,t))}else{const v=a.pbrMetallicRoughness||{};if(u.color=new Rt(1,1,1),u.opacity=1,Array.isArray(v.baseColorFactor)){const x=v.baseColorFactor;u.color.setRGB(x[0],x[1],x[2],Kn),u.opacity=x[3]}v.baseColorTexture!==void 0&&p.push(t.assignTexture(u,"map",v.baseColorTexture,bn)),u.metalness=v.metallicFactor!==void 0?v.metallicFactor:1,u.roughness=v.roughnessFactor!==void 0?v.roughnessFactor:1,v.metallicRoughnessTexture!==void 0&&(p.push(t.assignTexture(u,"metalnessMap",v.metallicRoughnessTexture)),p.push(t.assignTexture(u,"roughnessMap",v.metallicRoughnessTexture))),c=this._invokeOne(function(x){return x.getMaterialType&&x.getMaterialType(e)}),p.push(Promise.all(this._invokeAll(function(x){return x.extendMaterialParams&&x.extendMaterialParams(e,u)})))}a.doubleSided===!0&&(u.side=xr);const g=a.alphaMode||Tf.OPAQUE;if(g===Tf.BLEND?(u.transparent=!0,u.depthWrite=!1):(u.transparent=!1,g===Tf.MASK&&(u.alphaTest=a.alphaCutoff!==void 0?a.alphaCutoff:.5)),a.normalTexture!==void 0&&c!==$s&&(p.push(t.assignTexture(u,"normalMap",a.normalTexture)),u.normalScale=new Qt(1,1),a.normalTexture.scale!==void 0)){const v=a.normalTexture.scale;u.normalScale.set(v,v)}if(a.occlusionTexture!==void 0&&c!==$s&&(p.push(t.assignTexture(u,"aoMap",a.occlusionTexture)),a.occlusionTexture.strength!==void 0&&(u.aoMapIntensity=a.occlusionTexture.strength)),a.emissiveFactor!==void 0&&c!==$s){const v=a.emissiveFactor;u.emissive=new Rt().setRGB(v[0],v[1],v[2],Kn)}return a.emissiveTexture!==void 0&&c!==$s&&p.push(t.assignTexture(u,"emissiveMap",a.emissiveTexture,bn)),Promise.all(p).then(function(){const v=new c(u);return a.name&&(v.name=a.name),vs(v,a),t.associations.set(v,{materials:e}),a.extensions&&Ws(r,v,a),v})}createUniqueName(e){const t=cn.sanitizeNodeName(e||"");return t in this.nodeNamesUsed?t+"_"+ ++this.nodeNamesUsed[t]:(this.nodeNamesUsed[t]=0,t)}loadGeometries(e){const t=this,n=this.extensions,r=this.primitiveCache;function a(u){return n[Jt.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(u,t).then(function(d){return Wm(d,u,t)})}const c=[];for(let u=0,d=e.length;u<d;u++){const p=e[u],g=L1(p),v=r[g];if(v)c.push(v.promise);else{let x;p.extensions&&p.extensions[Jt.KHR_DRACO_MESH_COMPRESSION]?x=a(p):x=Wm(new Er,p,t),r[g]={primitive:p,promise:x},c.push(x)}}return Promise.all(c)}loadMesh(e){const t=this,n=this.json,r=this.extensions,a=n.meshes[e],c=a.primitives,u=[];for(let d=0,p=c.length;d<p;d++){const g=c[d].material===void 0?w1(this.cache):this.getDependency("material",c[d].material);u.push(g)}return u.push(t.loadGeometries(c)),Promise.all(u).then(function(d){const p=d.slice(0,d.length-1),g=d[d.length-1],v=[];for(let T=0,b=g.length;T<b;T++){const C=g[T],E=c[T];let M;const V=p[T];if(E.mode===Xi.TRIANGLES||E.mode===Xi.TRIANGLE_STRIP||E.mode===Xi.TRIANGLE_FAN||E.mode===void 0)M=a.isSkinnedMesh===!0?new yR(C,V):new Ki(C,V),M.isSkinnedMesh===!0&&M.normalizeSkinWeights(),E.mode===Xi.TRIANGLE_STRIP?M.geometry=zm(M.geometry,ng):E.mode===Xi.TRIANGLE_FAN&&(M.geometry=zm(M.geometry,Bf));else if(E.mode===Xi.LINES)M=new AR(C,V);else if(E.mode===Xi.LINE_STRIP)M=new sh(C,V);else if(E.mode===Xi.LINE_LOOP)M=new bR(C,V);else if(E.mode===Xi.POINTS)M=new wR(C,V);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+E.mode);Object.keys(M.geometry.morphAttributes).length>0&&C1(M,a),M.name=t.createUniqueName(a.name||"mesh_"+e),vs(M,a),E.extensions&&Ws(r,M,E),t.assignFinalMaterial(M),v.push(M)}for(let T=0,b=v.length;T<b;T++)t.associations.set(v[T],{meshes:e,primitives:T});if(v.length===1)return a.extensions&&Ws(r,v[0],a),v[0];const x=new Zs;a.extensions&&Ws(r,x,a),t.associations.set(x,{meshes:e});for(let T=0,b=v.length;T<b;T++)x.add(v[T]);return x})}loadCamera(e){let t;const n=this.json.cameras[e],r=n[n.type];if(!r){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return n.type==="perspective"?t=new fi(hE.radToDeg(r.yfov),r.aspectRatio||1,r.znear||1,r.zfar||2e6):n.type==="orthographic"&&(t=new th(-r.xmag,r.xmag,r.ymag,-r.ymag,r.znear,r.zfar)),n.name&&(t.name=this.createUniqueName(n.name)),vs(t,n),Promise.resolve(t)}loadSkin(e){const t=this.json.skins[e],n=[];for(let r=0,a=t.joints.length;r<a;r++)n.push(this._loadNodeShallow(t.joints[r]));return t.inverseBindMatrices!==void 0?n.push(this.getDependency("accessor",t.inverseBindMatrices)):n.push(null),Promise.all(n).then(function(r){const a=r.pop(),c=r,u=[],d=[];for(let p=0,g=c.length;p<g;p++){const v=c[p];if(v){u.push(v);const x=new qt;a!==null&&x.fromArray(a.array,p*16),d.push(x)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',t.joints[p])}return new rh(u,d)})}loadAnimation(e){const t=this.json,n=this,r=t.animations[e],a=r.name?r.name:"animation_"+e,c=[],u=[],d=[],p=[],g=[];for(let v=0,x=r.channels.length;v<x;v++){const T=r.channels[v],b=r.samplers[T.sampler],C=T.target,E=C.node,M=r.parameters!==void 0?r.parameters[b.input]:b.input,V=r.parameters!==void 0?r.parameters[b.output]:b.output;C.node!==void 0&&(c.push(this.getDependency("node",E)),u.push(this.getDependency("accessor",M)),d.push(this.getDependency("accessor",V)),p.push(b),g.push(C))}return Promise.all([Promise.all(c),Promise.all(u),Promise.all(d),Promise.all(p),Promise.all(g)]).then(function(v){const x=v[0],T=v[1],b=v[2],C=v[3],E=v[4],M=[];for(let V=0,U=x.length;V<U;V++){const B=x[V],z=T[V],$=b[V],m=C[V],pe=E[V];if(B===void 0)continue;B.updateMatrix&&B.updateMatrix();const D=n._createAnimationTracks(B,z,$,m,pe);if(D)for(let X=0;X<D.length;X++)M.push(D[X])}return new NR(a,void 0,M)})}createNodeMesh(e){const t=this.json,n=this,r=t.nodes[e];return r.mesh===void 0?null:n.getDependency("mesh",r.mesh).then(function(a){const c=n._getNodeRef(n.meshCache,r.mesh,a);return r.weights!==void 0&&c.traverse(function(u){if(u.isMesh)for(let d=0,p=r.weights.length;d<p;d++)u.morphTargetInfluences[d]=r.weights[d]}),c})}loadNode(e){const t=this.json,n=this,r=t.nodes[e],a=n._loadNodeShallow(e),c=[],u=r.children||[];for(let p=0,g=u.length;p<g;p++)c.push(n.getDependency("node",u[p]));const d=r.skin===void 0?Promise.resolve(null):n.getDependency("skin",r.skin);return Promise.all([a,Promise.all(c),d]).then(function(p){const g=p[0],v=p[1],x=p[2];x!==null&&g.traverse(function(T){T.isSkinnedMesh&&T.bind(x,I1)});for(let T=0,b=v.length;T<b;T++)g.add(v[T]);return g})}_loadNodeShallow(e){const t=this.json,n=this.extensions,r=this;if(this.nodeCache[e]!==void 0)return this.nodeCache[e];const a=t.nodes[e],c=a.name?r.createUniqueName(a.name):"",u=[],d=r._invokeOne(function(p){return p.createNodeMesh&&p.createNodeMesh(e)});return d&&u.push(d),a.camera!==void 0&&u.push(r.getDependency("camera",a.camera).then(function(p){return r._getNodeRef(r.cameraCache,a.camera,p)})),r._invokeAll(function(p){return p.createNodeAttachment&&p.createNodeAttachment(e)}).forEach(function(p){u.push(p)}),this.nodeCache[e]=Promise.all(u).then(function(p){let g;if(a.isBone===!0?g=new Eg:p.length>1?g=new Zs:p.length===1?g=p[0]:g=new Tn,g!==p[0])for(let v=0,x=p.length;v<x;v++)g.add(p[v]);if(a.name&&(g.userData.name=a.name,g.name=c),vs(g,a),a.extensions&&Ws(n,g,a),a.matrix!==void 0){const v=new qt;v.fromArray(a.matrix),g.applyMatrix4(v)}else a.translation!==void 0&&g.position.fromArray(a.translation),a.rotation!==void 0&&g.quaternion.fromArray(a.rotation),a.scale!==void 0&&g.scale.fromArray(a.scale);return r.associations.has(g)||r.associations.set(g,{}),r.associations.get(g).nodes=e,g}),this.nodeCache[e]}loadScene(e){const t=this.extensions,n=this.json.scenes[e],r=this,a=new Zs;n.name&&(a.name=r.createUniqueName(n.name)),vs(a,n),n.extensions&&Ws(t,a,n);const c=n.nodes||[],u=[];for(let d=0,p=c.length;d<p;d++)u.push(r.getDependency("node",c[d]));return Promise.all(u).then(function(d){for(let g=0,v=d.length;g<v;g++)a.add(d[g]);const p=g=>{const v=new Map;for(const[x,T]of r.associations)(x instanceof Sr||x instanceof jn)&&v.set(x,T);return g.traverse(x=>{const T=r.associations.get(x);T!=null&&v.set(x,T)}),v};return r.associations=p(a),a})}_createAnimationTracks(e,t,n,r,a){const c=[],u=e.name?e.name:e.uuid,d=[];_s[a.path]===_s.weights?e.traverse(function(x){x.morphTargetInfluences&&d.push(x.name?x.name:x.uuid)}):d.push(u);let p;switch(_s[a.path]){case _s.weights:p=Qo;break;case _s.rotation:p=ro;break;case _s.position:case _s.scale:p=ea;break;default:switch(n.itemSize){case 1:p=Qo;break;case 2:case 3:default:p=ea;break}break}const g=r.interpolation!==void 0?b1[r.interpolation]:$o,v=this._getArrayFromAccessor(n);for(let x=0,T=d.length;x<T;x++){const b=new p(d[x]+"."+_s[a.path],t.array,v,g);r.interpolation==="CUBICSPLINE"&&this._createCubicSplineTrackInterpolant(b),c.push(b)}return c}_getArrayFromAccessor(e){let t=e.array;if(e.normalized){const n=Yf(t.constructor),r=new Float32Array(t.length);for(let a=0,c=t.length;a<c;a++)r[a]=t[a]*n;t=r}return t}_createCubicSplineTrackInterpolant(e){e.createInterpolant=function(n){const r=this instanceof ro?A1:Dg;return new r(this.times,this.values,this.getValueSize()/3,n)},e.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}}function N1(s,e,t){const n=e.attributes,r=new Zr;if(n.POSITION!==void 0){const u=t.json.accessors[n.POSITION],d=u.min,p=u.max;if(d!==void 0&&p!==void 0){if(r.set(new re(d[0],d[1],d[2]),new re(p[0],p[1],p[2])),u.normalized){const g=Yf(Xo[u.componentType]);r.min.multiplyScalar(g),r.max.multiplyScalar(g)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;const a=e.targets;if(a!==void 0){const u=new re,d=new re;for(let p=0,g=a.length;p<g;p++){const v=a[p];if(v.POSITION!==void 0){const x=t.json.accessors[v.POSITION],T=x.min,b=x.max;if(T!==void 0&&b!==void 0){if(d.setX(Math.max(Math.abs(T[0]),Math.abs(b[0]))),d.setY(Math.max(Math.abs(T[1]),Math.abs(b[1]))),d.setZ(Math.max(Math.abs(T[2]),Math.abs(b[2]))),x.normalized){const C=Yf(Xo[x.componentType]);d.multiplyScalar(C)}u.max(d)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}r.expandByVector(u)}s.boundingBox=r;const c=new Mr;r.getCenter(c.center),c.radius=r.min.distanceTo(r.max)/2,s.boundingSphere=c}function Wm(s,e,t){const n=e.attributes,r=[];function a(c,u){return t.getDependency("accessor",c).then(function(d){s.setAttribute(u,d)})}for(const c in n){const u=qf[c]||c.toLowerCase();u in s.attributes||r.push(a(n[c],u))}if(e.indices!==void 0&&!s.index){const c=t.getDependency("accessor",e.indices).then(function(u){s.setIndex(u)});r.push(c)}return an.workingColorSpace!==Kn&&"COLOR_0"in n&&console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${an.workingColorSpace}" not supported.`),vs(s,e),N1(s,e,t),Promise.all(r).then(function(){return e.targets!==void 0?R1(s,e.targets,t):s})}var Go=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function U1(s){return s&&s.__esModule&&Object.prototype.hasOwnProperty.call(s,"default")?s.default:s}var O1={exports:{}};/*!
 * jQuery JavaScript Library v3.7.1
 * https://jquery.com/
 *
 * Copyright OpenJS Foundation and other contributors
 * Released under the MIT license
 * https://jquery.org/license
 *
 * Date: 2023-08-28T13:37Z
 */(function(s){(function(e,t){s.exports=e.document?t(e,!0):function(n){if(!n.document)throw new Error("jQuery requires a window with a document");return t(n)}})(typeof window<"u"?window:Go,function(e,t){var n=[],r=Object.getPrototypeOf,a=n.slice,c=n.flat?function(l){return n.flat.call(l)}:function(l){return n.concat.apply([],l)},u=n.push,d=n.indexOf,p={},g=p.toString,v=p.hasOwnProperty,x=v.toString,T=x.call(Object),b={},C=function(h){return typeof h=="function"&&typeof h.nodeType!="number"&&typeof h.item!="function"},E=function(h){return h!=null&&h===h.window},M=e.document,V={type:!0,src:!0,nonce:!0,noModule:!0};function U(l,h,_){_=_||M;var S,A,w=_.createElement("script");if(w.text=l,h)for(S in V)A=h[S]||h.getAttribute&&h.getAttribute(S),A&&w.setAttribute(S,A);_.head.appendChild(w).parentNode.removeChild(w)}function B(l){return l==null?l+"":typeof l=="object"||typeof l=="function"?p[g.call(l)]||"object":typeof l}var z="3.7.1",$=/HTML$/i,m=function(l,h){return new m.fn.init(l,h)};m.fn=m.prototype={jquery:z,constructor:m,length:0,toArray:function(){return a.call(this)},get:function(l){return l==null?a.call(this):l<0?this[l+this.length]:this[l]},pushStack:function(l){var h=m.merge(this.constructor(),l);return h.prevObject=this,h},each:function(l){return m.each(this,l)},map:function(l){return this.pushStack(m.map(this,function(h,_){return l.call(h,_,h)}))},slice:function(){return this.pushStack(a.apply(this,arguments))},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},even:function(){return this.pushStack(m.grep(this,function(l,h){return(h+1)%2}))},odd:function(){return this.pushStack(m.grep(this,function(l,h){return h%2}))},eq:function(l){var h=this.length,_=+l+(l<0?h:0);return this.pushStack(_>=0&&_<h?[this[_]]:[])},end:function(){return this.prevObject||this.constructor()},push:u,sort:n.sort,splice:n.splice},m.extend=m.fn.extend=function(){var l,h,_,S,A,w,L=arguments[0]||{},q=1,G=arguments.length,ee=!1;for(typeof L=="boolean"&&(ee=L,L=arguments[q]||{},q++),typeof L!="object"&&!C(L)&&(L={}),q===G&&(L=this,q--);q<G;q++)if((l=arguments[q])!=null)for(h in l)S=l[h],!(h==="__proto__"||L===S)&&(ee&&S&&(m.isPlainObject(S)||(A=Array.isArray(S)))?(_=L[h],A&&!Array.isArray(_)?w=[]:!A&&!m.isPlainObject(_)?w={}:w=_,A=!1,L[h]=m.extend(ee,w,S)):S!==void 0&&(L[h]=S));return L},m.extend({expando:"jQuery"+(z+Math.random()).replace(/\D/g,""),isReady:!0,error:function(l){throw new Error(l)},noop:function(){},isPlainObject:function(l){var h,_;return!l||g.call(l)!=="[object Object]"?!1:(h=r(l),h?(_=v.call(h,"constructor")&&h.constructor,typeof _=="function"&&x.call(_)===T):!0)},isEmptyObject:function(l){var h;for(h in l)return!1;return!0},globalEval:function(l,h,_){U(l,{nonce:h&&h.nonce},_)},each:function(l,h){var _,S=0;if(pe(l))for(_=l.length;S<_&&h.call(l[S],S,l[S])!==!1;S++);else for(S in l)if(h.call(l[S],S,l[S])===!1)break;return l},text:function(l){var h,_="",S=0,A=l.nodeType;if(!A)for(;h=l[S++];)_+=m.text(h);return A===1||A===11?l.textContent:A===9?l.documentElement.textContent:A===3||A===4?l.nodeValue:_},makeArray:function(l,h){var _=h||[];return l!=null&&(pe(Object(l))?m.merge(_,typeof l=="string"?[l]:l):u.call(_,l)),_},inArray:function(l,h,_){return h==null?-1:d.call(h,l,_)},isXMLDoc:function(l){var h=l&&l.namespaceURI,_=l&&(l.ownerDocument||l).documentElement;return!$.test(h||_&&_.nodeName||"HTML")},merge:function(l,h){for(var _=+h.length,S=0,A=l.length;S<_;S++)l[A++]=h[S];return l.length=A,l},grep:function(l,h,_){for(var S,A=[],w=0,L=l.length,q=!_;w<L;w++)S=!h(l[w],w),S!==q&&A.push(l[w]);return A},map:function(l,h,_){var S,A,w=0,L=[];if(pe(l))for(S=l.length;w<S;w++)A=h(l[w],w,_),A!=null&&L.push(A);else for(w in l)A=h(l[w],w,_),A!=null&&L.push(A);return c(L)},guid:1,support:b}),typeof Symbol=="function"&&(m.fn[Symbol.iterator]=n[Symbol.iterator]),m.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "),function(l,h){p["[object "+h+"]"]=h.toLowerCase()});function pe(l){var h=!!l&&"length"in l&&l.length,_=B(l);return C(l)||E(l)?!1:_==="array"||h===0||typeof h=="number"&&h>0&&h-1 in l}function D(l,h){return l.nodeName&&l.nodeName.toLowerCase()===h.toLowerCase()}var X=n.pop,Te=n.sort,Re=n.splice,xe="[\\x20\\t\\r\\n\\f]",te=new RegExp("^"+xe+"+|((?:^|[^\\\\])(?:\\\\.)*)"+xe+"+$","g");m.contains=function(l,h){var _=h&&h.parentNode;return l===_||!!(_&&_.nodeType===1&&(l.contains?l.contains(_):l.compareDocumentPosition&&l.compareDocumentPosition(_)&16))};var ye=/([\0-\x1f\x7f]|^-?\d)|^-$|[^\x80-\uFFFF\w-]/g;function we(l,h){return h?l==="\0"?"�":l.slice(0,-1)+"\\"+l.charCodeAt(l.length-1).toString(16)+" ":"\\"+l}m.escapeSelector=function(l){return(l+"").replace(ye,we)};var ge=M,Ue=u;(function(){var l,h,_,S,A,w=Ue,L,q,G,ee,de,_e=m.expando,ae=0,Ne=0,Ze=Ps(),Ct=Ps(),wt=Ps(),Un=Ps(),Mn=function(H,J){return H===J&&(A=!0),0},Oi="checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",Fi="(?:\\\\[\\da-fA-F]{1,6}"+xe+"?|\\\\[^\\r\\n\\f]|[\\w-]|[^\0-\\x7f])+",Vt="\\["+xe+"*("+Fi+")(?:"+xe+"*([*^$|!~]?=)"+xe+`*(?:'((?:\\\\.|[^\\\\'])*)'|"((?:\\\\.|[^\\\\"])*)"|(`+Fi+"))|)"+xe+"*\\]",fr=":("+Fi+`)(?:\\((('((?:\\\\.|[^\\\\'])*)'|"((?:\\\\.|[^\\\\"])*)")|((?:\\\\.|[^\\\\()[\\]]|`+Vt+")*)|.*)\\)|)",Wt=new RegExp(xe+"+","g"),ln=new RegExp("^"+xe+"*,"+xe+"*"),Rs=new RegExp("^"+xe+"*([>+~]|"+xe+")"+xe+"*"),ho=new RegExp(xe+"|>"),bi=new RegExp(fr),Cr=new RegExp("^"+Fi+"$"),mi={ID:new RegExp("^#("+Fi+")"),CLASS:new RegExp("^\\.("+Fi+")"),TAG:new RegExp("^("+Fi+"|[*])"),ATTR:new RegExp("^"+Vt),PSEUDO:new RegExp("^"+fr),CHILD:new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+xe+"*(even|odd|(([+-]|)(\\d*)n|)"+xe+"*(?:([+-]|)"+xe+"*(\\d+)|))"+xe+"*\\)|)","i"),bool:new RegExp("^(?:"+Oi+")$","i"),needsContext:new RegExp("^"+xe+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+xe+"*((?:-\\d)?\\d*)"+xe+"*\\)|)(?=[^-]|$)","i")},Zi=/^(?:input|select|textarea|button)$/i,hr=/^h\d$/i,Zn=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,Cs=/[+~]/,Ji=new RegExp("\\\\[\\da-fA-F]{1,6}"+xe+"?|\\\\([^\\r\\n\\f])","g"),Bi=function(H,J){var oe="0x"+H.slice(1)-65536;return J||(oe<0?String.fromCharCode(oe+65536):String.fromCharCode(oe>>10|55296,oe&1023|56320))},ii=function(){dr()},va=Lr(function(H){return H.disabled===!0&&D(H,"fieldset")},{dir:"parentNode",next:"legend"});function Ls(){try{return L.activeElement}catch{}}try{w.apply(n=a.call(ge.childNodes),ge.childNodes),n[ge.childNodes.length].nodeType}catch{w={apply:function(J,oe){Ue.apply(J,a.call(oe))},call:function(J){Ue.apply(J,a.call(arguments,1))}}}function nn(H,J,oe,ce){var O,j,Y,ve,Me,Qe,et,Ke=J&&J.ownerDocument,Nt=J?J.nodeType:9;if(oe=oe||[],typeof H!="string"||!H||Nt!==1&&Nt!==9&&Nt!==11)return oe;if(!ce&&(dr(J),J=J||L,G)){if(Nt!==11&&(Me=Zn.exec(H)))if(O=Me[1]){if(Nt===9)if(Y=J.getElementById(O)){if(Y.id===O)return w.call(oe,Y),oe}else return oe;else if(Ke&&(Y=Ke.getElementById(O))&&nn.contains(J,Y)&&Y.id===O)return w.call(oe,Y),oe}else{if(Me[2])return w.apply(oe,J.getElementsByTagName(H)),oe;if((O=Me[3])&&J.getElementsByClassName)return w.apply(oe,J.getElementsByClassName(O)),oe}if(!Un[H+" "]&&(!ee||!ee.test(H))){if(et=H,Ke=J,Nt===1&&(ho.test(H)||Rs.test(H))){for(Ke=Cs.test(H)&&xa(J.parentNode)||J,(Ke!=J||!b.scope)&&((ve=J.getAttribute("id"))?ve=m.escapeSelector(ve):J.setAttribute("id",ve=_e)),Qe=ss(H),j=Qe.length;j--;)Qe[j]=(ve?"#"+ve:":scope")+" "+Ri(Qe[j]);et=Qe.join(",")}try{return w.apply(oe,Ke.querySelectorAll(et)),oe}catch{Un(H,!0)}finally{ve===_e&&J.removeAttribute("id")}}}return ul(H.replace(te,"$1"),J,oe,ce)}function Ps(){var H=[];function J(oe,ce){return H.push(oe+" ")>h.cacheLength&&delete J[H.shift()],J[oe+" "]=ce}return J}function wi(H){return H[_e]=!0,H}function rs(H){var J=L.createElement("fieldset");try{return!!H(J)}catch{return!1}finally{J.parentNode&&J.parentNode.removeChild(J),J=null}}function qc(H){return function(J){return D(J,"input")&&J.type===H}}function Yc(H){return function(J){return(D(J,"input")||D(J,"button"))&&J.type===H}}function ll(H){return function(J){return"form"in J?J.parentNode&&J.disabled===!1?"label"in J?"label"in J.parentNode?J.parentNode.disabled===H:J.disabled===H:J.isDisabled===H||J.isDisabled!==!H&&va(J)===H:J.disabled===H:"label"in J?J.disabled===H:!1}}function gi(H){return wi(function(J){return J=+J,wi(function(oe,ce){for(var O,j=H([],oe.length,J),Y=j.length;Y--;)oe[O=j[Y]]&&(oe[O]=!(ce[O]=oe[O]))})})}function xa(H){return H&&typeof H.getElementsByTagName<"u"&&H}function dr(H){var J,oe=H?H.ownerDocument||H:ge;return oe==L||oe.nodeType!==9||!oe.documentElement||(L=oe,q=L.documentElement,G=!m.isXMLDoc(L),de=q.matches||q.webkitMatchesSelector||q.msMatchesSelector,q.msMatchesSelector&&ge!=L&&(J=L.defaultView)&&J.top!==J&&J.addEventListener("unload",ii),b.getById=rs(function(ce){return q.appendChild(ce).id=m.expando,!L.getElementsByName||!L.getElementsByName(m.expando).length}),b.disconnectedMatch=rs(function(ce){return de.call(ce,"*")}),b.scope=rs(function(){return L.querySelectorAll(":scope")}),b.cssHas=rs(function(){try{return L.querySelector(":has(*,:jqfake)"),!1}catch{return!0}}),b.getById?(h.filter.ID=function(ce){var O=ce.replace(Ji,Bi);return function(j){return j.getAttribute("id")===O}},h.find.ID=function(ce,O){if(typeof O.getElementById<"u"&&G){var j=O.getElementById(ce);return j?[j]:[]}}):(h.filter.ID=function(ce){var O=ce.replace(Ji,Bi);return function(j){var Y=typeof j.getAttributeNode<"u"&&j.getAttributeNode("id");return Y&&Y.value===O}},h.find.ID=function(ce,O){if(typeof O.getElementById<"u"&&G){var j,Y,ve,Me=O.getElementById(ce);if(Me){if(j=Me.getAttributeNode("id"),j&&j.value===ce)return[Me];for(ve=O.getElementsByName(ce),Y=0;Me=ve[Y++];)if(j=Me.getAttributeNode("id"),j&&j.value===ce)return[Me]}return[]}}),h.find.TAG=function(ce,O){return typeof O.getElementsByTagName<"u"?O.getElementsByTagName(ce):O.querySelectorAll(ce)},h.find.CLASS=function(ce,O){if(typeof O.getElementsByClassName<"u"&&G)return O.getElementsByClassName(ce)},ee=[],rs(function(ce){var O;q.appendChild(ce).innerHTML="<a id='"+_e+"' href='' disabled='disabled'></a><select id='"+_e+"-\r\\' disabled='disabled'><option selected=''></option></select>",ce.querySelectorAll("[selected]").length||ee.push("\\["+xe+"*(?:value|"+Oi+")"),ce.querySelectorAll("[id~="+_e+"-]").length||ee.push("~="),ce.querySelectorAll("a#"+_e+"+*").length||ee.push(".#.+[+~]"),ce.querySelectorAll(":checked").length||ee.push(":checked"),O=L.createElement("input"),O.setAttribute("type","hidden"),ce.appendChild(O).setAttribute("name","D"),q.appendChild(ce).disabled=!0,ce.querySelectorAll(":disabled").length!==2&&ee.push(":enabled",":disabled"),O=L.createElement("input"),O.setAttribute("name",""),ce.appendChild(O),ce.querySelectorAll("[name='']").length||ee.push("\\["+xe+"*name"+xe+"*="+xe+`*(?:''|"")`)}),b.cssHas||ee.push(":has"),ee=ee.length&&new RegExp(ee.join("|")),Mn=function(ce,O){if(ce===O)return A=!0,0;var j=!ce.compareDocumentPosition-!O.compareDocumentPosition;return j||(j=(ce.ownerDocument||ce)==(O.ownerDocument||O)?ce.compareDocumentPosition(O):1,j&1||!b.sortDetached&&O.compareDocumentPosition(ce)===j?ce===L||ce.ownerDocument==ge&&nn.contains(ge,ce)?-1:O===L||O.ownerDocument==ge&&nn.contains(ge,O)?1:S?d.call(S,ce)-d.call(S,O):0:j&4?-1:1)}),L}nn.matches=function(H,J){return nn(H,null,null,J)},nn.matchesSelector=function(H,J){if(dr(H),G&&!Un[J+" "]&&(!ee||!ee.test(J)))try{var oe=de.call(H,J);if(oe||b.disconnectedMatch||H.document&&H.document.nodeType!==11)return oe}catch{Un(J,!0)}return nn(J,L,null,[H]).length>0},nn.contains=function(H,J){return(H.ownerDocument||H)!=L&&dr(H),m.contains(H,J)},nn.attr=function(H,J){(H.ownerDocument||H)!=L&&dr(H);var oe=h.attrHandle[J.toLowerCase()],ce=oe&&v.call(h.attrHandle,J.toLowerCase())?oe(H,J,!G):void 0;return ce!==void 0?ce:H.getAttribute(J)},nn.error=function(H){throw new Error("Syntax error, unrecognized expression: "+H)},m.uniqueSort=function(H){var J,oe=[],ce=0,O=0;if(A=!b.sortStable,S=!b.sortStable&&a.call(H,0),Te.call(H,Mn),A){for(;J=H[O++];)J===H[O]&&(ce=oe.push(O));for(;ce--;)Re.call(H,oe[ce],1)}return S=null,H},m.fn.uniqueSort=function(){return this.pushStack(m.uniqueSort(a.apply(this)))},h=m.expr={cacheLength:50,createPseudo:wi,match:mi,attrHandle:{},find:{},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(H){return H[1]=H[1].replace(Ji,Bi),H[3]=(H[3]||H[4]||H[5]||"").replace(Ji,Bi),H[2]==="~="&&(H[3]=" "+H[3]+" "),H.slice(0,4)},CHILD:function(H){return H[1]=H[1].toLowerCase(),H[1].slice(0,3)==="nth"?(H[3]||nn.error(H[0]),H[4]=+(H[4]?H[5]+(H[6]||1):2*(H[3]==="even"||H[3]==="odd")),H[5]=+(H[7]+H[8]||H[3]==="odd")):H[3]&&nn.error(H[0]),H},PSEUDO:function(H){var J,oe=!H[6]&&H[2];return mi.CHILD.test(H[0])?null:(H[3]?H[2]=H[4]||H[5]||"":oe&&bi.test(oe)&&(J=ss(oe,!0))&&(J=oe.indexOf(")",oe.length-J)-oe.length)&&(H[0]=H[0].slice(0,J),H[2]=oe.slice(0,J)),H.slice(0,3))}},filter:{TAG:function(H){var J=H.replace(Ji,Bi).toLowerCase();return H==="*"?function(){return!0}:function(oe){return D(oe,J)}},CLASS:function(H){var J=Ze[H+" "];return J||(J=new RegExp("(^|"+xe+")"+H+"("+xe+"|$)"))&&Ze(H,function(oe){return J.test(typeof oe.className=="string"&&oe.className||typeof oe.getAttribute<"u"&&oe.getAttribute("class")||"")})},ATTR:function(H,J,oe){return function(ce){var O=nn.attr(ce,H);return O==null?J==="!=":J?(O+="",J==="="?O===oe:J==="!="?O!==oe:J==="^="?oe&&O.indexOf(oe)===0:J==="*="?oe&&O.indexOf(oe)>-1:J==="$="?oe&&O.slice(-oe.length)===oe:J==="~="?(" "+O.replace(Wt," ")+" ").indexOf(oe)>-1:J==="|="?O===oe||O.slice(0,oe.length+1)===oe+"-":!1):!0}},CHILD:function(H,J,oe,ce,O){var j=H.slice(0,3)!=="nth",Y=H.slice(-4)!=="last",ve=J==="of-type";return ce===1&&O===0?function(Me){return!!Me.parentNode}:function(Me,Qe,et){var Ke,Nt,ft,Ht,On,kn=j!==Y?"nextSibling":"previousSibling",Fn=Me.parentNode,si=ve&&Me.nodeName.toLowerCase(),Qi=!et&&!ve,At=!1;if(Fn){if(j){for(;kn;){for(ft=Me;ft=ft[kn];)if(ve?D(ft,si):ft.nodeType===1)return!1;On=kn=H==="only"&&!On&&"nextSibling"}return!0}if(On=[Y?Fn.firstChild:Fn.lastChild],Y&&Qi){for(Nt=Fn[_e]||(Fn[_e]={}),Ke=Nt[H]||[],Ht=Ke[0]===ae&&Ke[1],At=Ht&&Ke[2],ft=Ht&&Fn.childNodes[Ht];ft=++Ht&&ft&&ft[kn]||(At=Ht=0)||On.pop();)if(ft.nodeType===1&&++At&&ft===Me){Nt[H]=[ae,Ht,At];break}}else if(Qi&&(Nt=Me[_e]||(Me[_e]={}),Ke=Nt[H]||[],Ht=Ke[0]===ae&&Ke[1],At=Ht),At===!1)for(;(ft=++Ht&&ft&&ft[kn]||(At=Ht=0)||On.pop())&&!((ve?D(ft,si):ft.nodeType===1)&&++At&&(Qi&&(Nt=ft[_e]||(ft[_e]={}),Nt[H]=[ae,At]),ft===Me)););return At-=O,At===ce||At%ce===0&&At/ce>=0}}},PSEUDO:function(H,J){var oe,ce=h.pseudos[H]||h.setFilters[H.toLowerCase()]||nn.error("unsupported pseudo: "+H);return ce[_e]?ce(J):ce.length>1?(oe=[H,H,"",J],h.setFilters.hasOwnProperty(H.toLowerCase())?wi(function(O,j){for(var Y,ve=ce(O,J),Me=ve.length;Me--;)Y=d.call(O,ve[Me]),O[Y]=!(j[Y]=ve[Me])}):function(O){return ce(O,0,oe)}):ce}},pseudos:{not:wi(function(H){var J=[],oe=[],ce=Sa(H.replace(te,"$1"));return ce[_e]?wi(function(O,j,Y,ve){for(var Me,Qe=ce(O,null,ve,[]),et=O.length;et--;)(Me=Qe[et])&&(O[et]=!(j[et]=Me))}):function(O,j,Y){return J[0]=O,ce(J,null,Y,oe),J[0]=null,!oe.pop()}}),has:wi(function(H){return function(J){return nn(H,J).length>0}}),contains:wi(function(H){return H=H.replace(Ji,Bi),function(J){return(J.textContent||m.text(J)).indexOf(H)>-1}}),lang:wi(function(H){return Cr.test(H||"")||nn.error("unsupported lang: "+H),H=H.replace(Ji,Bi).toLowerCase(),function(J){var oe;do if(oe=G?J.lang:J.getAttribute("xml:lang")||J.getAttribute("lang"))return oe=oe.toLowerCase(),oe===H||oe.indexOf(H+"-")===0;while((J=J.parentNode)&&J.nodeType===1);return!1}}),target:function(H){var J=e.location&&e.location.hash;return J&&J.slice(1)===H.id},root:function(H){return H===q},focus:function(H){return H===Ls()&&L.hasFocus()&&!!(H.type||H.href||~H.tabIndex)},enabled:ll(!1),disabled:ll(!0),checked:function(H){return D(H,"input")&&!!H.checked||D(H,"option")&&!!H.selected},selected:function(H){return H.parentNode&&H.parentNode.selectedIndex,H.selected===!0},empty:function(H){for(H=H.firstChild;H;H=H.nextSibling)if(H.nodeType<6)return!1;return!0},parent:function(H){return!h.pseudos.empty(H)},header:function(H){return hr.test(H.nodeName)},input:function(H){return Zi.test(H.nodeName)},button:function(H){return D(H,"input")&&H.type==="button"||D(H,"button")},text:function(H){var J;return D(H,"input")&&H.type==="text"&&((J=H.getAttribute("type"))==null||J.toLowerCase()==="text")},first:gi(function(){return[0]}),last:gi(function(H,J){return[J-1]}),eq:gi(function(H,J,oe){return[oe<0?oe+J:oe]}),even:gi(function(H,J){for(var oe=0;oe<J;oe+=2)H.push(oe);return H}),odd:gi(function(H,J){for(var oe=1;oe<J;oe+=2)H.push(oe);return H}),lt:gi(function(H,J,oe){var ce;for(oe<0?ce=oe+J:oe>J?ce=J:ce=oe;--ce>=0;)H.push(ce);return H}),gt:gi(function(H,J,oe){for(var ce=oe<0?oe+J:oe;++ce<J;)H.push(ce);return H})}},h.pseudos.nth=h.pseudos.eq;for(l in{radio:!0,checkbox:!0,file:!0,password:!0,image:!0})h.pseudos[l]=qc(l);for(l in{submit:!0,reset:!0})h.pseudos[l]=Yc(l);function po(){}po.prototype=h.filters=h.pseudos,h.setFilters=new po;function ss(H,J){var oe,ce,O,j,Y,ve,Me,Qe=Ct[H+" "];if(Qe)return J?0:Qe.slice(0);for(Y=H,ve=[],Me=h.preFilter;Y;){(!oe||(ce=ln.exec(Y)))&&(ce&&(Y=Y.slice(ce[0].length)||Y),ve.push(O=[])),oe=!1,(ce=Rs.exec(Y))&&(oe=ce.shift(),O.push({value:oe,type:ce[0].replace(te," ")}),Y=Y.slice(oe.length));for(j in h.filter)(ce=mi[j].exec(Y))&&(!Me[j]||(ce=Me[j](ce)))&&(oe=ce.shift(),O.push({value:oe,type:j,matches:ce}),Y=Y.slice(oe.length));if(!oe)break}return J?Y.length:Y?nn.error(H):Ct(H,ve).slice(0)}function Ri(H){for(var J=0,oe=H.length,ce="";J<oe;J++)ce+=H[J].value;return ce}function Lr(H,J,oe){var ce=J.dir,O=J.next,j=O||ce,Y=oe&&j==="parentNode",ve=Ne++;return J.first?function(Me,Qe,et){for(;Me=Me[ce];)if(Me.nodeType===1||Y)return H(Me,Qe,et);return!1}:function(Me,Qe,et){var Ke,Nt,ft=[ae,ve];if(et){for(;Me=Me[ce];)if((Me.nodeType===1||Y)&&H(Me,Qe,et))return!0}else for(;Me=Me[ce];)if(Me.nodeType===1||Y)if(Nt=Me[_e]||(Me[_e]={}),O&&D(Me,O))Me=Me[ce]||Me;else{if((Ke=Nt[j])&&Ke[0]===ae&&Ke[1]===ve)return ft[2]=Ke[2];if(Nt[j]=ft,ft[2]=H(Me,Qe,et))return!0}return!1}}function ya(H){return H.length>1?function(J,oe,ce){for(var O=H.length;O--;)if(!H[O](J,oe,ce))return!1;return!0}:H[0]}function jc(H,J,oe){for(var ce=0,O=J.length;ce<O;ce++)nn(H,J[ce],oe);return oe}function mo(H,J,oe,ce,O){for(var j,Y=[],ve=0,Me=H.length,Qe=J!=null;ve<Me;ve++)(j=H[ve])&&(!oe||oe(j,ce,O))&&(Y.push(j),Qe&&J.push(ve));return Y}function pr(H,J,oe,ce,O,j){return ce&&!ce[_e]&&(ce=pr(ce)),O&&!O[_e]&&(O=pr(O,j)),wi(function(Y,ve,Me,Qe){var et,Ke,Nt,ft,Ht=[],On=[],kn=ve.length,Fn=Y||jc(J||"*",Me.nodeType?[Me]:Me,[]),si=H&&(Y||!J)?mo(Fn,Ht,H,Me,Qe):Fn;if(oe?(ft=O||(Y?H:kn||ce)?[]:ve,oe(si,ft,Me,Qe)):ft=si,ce)for(et=mo(ft,On),ce(et,[],Me,Qe),Ke=et.length;Ke--;)(Nt=et[Ke])&&(ft[On[Ke]]=!(si[On[Ke]]=Nt));if(Y){if(O||H){if(O){for(et=[],Ke=ft.length;Ke--;)(Nt=ft[Ke])&&et.push(si[Ke]=Nt);O(null,ft=[],et,Qe)}for(Ke=ft.length;Ke--;)(Nt=ft[Ke])&&(et=O?d.call(Y,Nt):Ht[Ke])>-1&&(Y[et]=!(ve[et]=Nt))}}else ft=mo(ft===ve?ft.splice(kn,ft.length):ft),O?O(null,ve,ft,Qe):w.apply(ve,ft)})}function ri(H){for(var J,oe,ce,O=H.length,j=h.relative[H[0].type],Y=j||h.relative[" "],ve=j?1:0,Me=Lr(function(Ke){return Ke===J},Y,!0),Qe=Lr(function(Ke){return d.call(J,Ke)>-1},Y,!0),et=[function(Ke,Nt,ft){var Ht=!j&&(ft||Nt!=_)||((J=Nt).nodeType?Me(Ke,Nt,ft):Qe(Ke,Nt,ft));return J=null,Ht}];ve<O;ve++)if(oe=h.relative[H[ve].type])et=[Lr(ya(et),oe)];else{if(oe=h.filter[H[ve].type].apply(null,H[ve].matches),oe[_e]){for(ce=++ve;ce<O&&!h.relative[H[ce].type];ce++);return pr(ve>1&&ya(et),ve>1&&Ri(H.slice(0,ve-1).concat({value:H[ve-2].type===" "?"*":""})).replace(te,"$1"),oe,ve<ce&&ri(H.slice(ve,ce)),ce<O&&ri(H=H.slice(ce)),ce<O&&Ri(H))}et.push(oe)}return ya(et)}function cl(H,J){var oe=J.length>0,ce=H.length>0,O=function(j,Y,ve,Me,Qe){var et,Ke,Nt,ft=0,Ht="0",On=j&&[],kn=[],Fn=_,si=j||ce&&h.find.TAG("*",Qe),Qi=ae+=Fn==null?1:Math.random()||.1,At=si.length;for(Qe&&(_=Y==L||Y||Qe);Ht!==At&&(et=si[Ht])!=null;Ht++){if(ce&&et){for(Ke=0,!Y&&et.ownerDocument!=L&&(dr(et),ve=!G);Nt=H[Ke++];)if(Nt(et,Y||L,ve)){w.call(Me,et);break}Qe&&(ae=Qi)}oe&&((et=!Nt&&et)&&ft--,j&&On.push(et))}if(ft+=Ht,oe&&Ht!==ft){for(Ke=0;Nt=J[Ke++];)Nt(On,kn,Y,ve);if(j){if(ft>0)for(;Ht--;)On[Ht]||kn[Ht]||(kn[Ht]=X.call(Me));kn=mo(kn)}w.apply(Me,kn),Qe&&!j&&kn.length>0&&ft+J.length>1&&m.uniqueSort(Me)}return Qe&&(ae=Qi,_=Fn),On};return oe?wi(O):O}function Sa(H,J){var oe,ce=[],O=[],j=wt[H+" "];if(!j){for(J||(J=ss(H)),oe=J.length;oe--;)j=ri(J[oe]),j[_e]?ce.push(j):O.push(j);j=wt(H,cl(O,ce)),j.selector=H}return j}function ul(H,J,oe,ce){var O,j,Y,ve,Me,Qe=typeof H=="function"&&H,et=!ce&&ss(H=Qe.selector||H);if(oe=oe||[],et.length===1){if(j=et[0]=et[0].slice(0),j.length>2&&(Y=j[0]).type==="ID"&&J.nodeType===9&&G&&h.relative[j[1].type]){if(J=(h.find.ID(Y.matches[0].replace(Ji,Bi),J)||[])[0],J)Qe&&(J=J.parentNode);else return oe;H=H.slice(j.shift().value.length)}for(O=mi.needsContext.test(H)?0:j.length;O--&&(Y=j[O],!h.relative[ve=Y.type]);)if((Me=h.find[ve])&&(ce=Me(Y.matches[0].replace(Ji,Bi),Cs.test(j[0].type)&&xa(J.parentNode)||J))){if(j.splice(O,1),H=ce.length&&Ri(j),!H)return w.apply(oe,ce),oe;break}}return(Qe||Sa(H,et))(ce,J,!G,oe,!J||Cs.test(H)&&xa(J.parentNode)||J),oe}b.sortStable=_e.split("").sort(Mn).join("")===_e,dr(),b.sortDetached=rs(function(H){return H.compareDocumentPosition(L.createElement("fieldset"))&1}),m.find=nn,m.expr[":"]=m.expr.pseudos,m.unique=m.uniqueSort,nn.compile=Sa,nn.select=ul,nn.setDocument=dr,nn.tokenize=ss,nn.escape=m.escapeSelector,nn.getText=m.text,nn.isXML=m.isXMLDoc,nn.selectors=m.expr,nn.support=m.support,nn.uniqueSort=m.uniqueSort})();var Ce=function(l,h,_){for(var S=[],A=_!==void 0;(l=l[h])&&l.nodeType!==9;)if(l.nodeType===1){if(A&&m(l).is(_))break;S.push(l)}return S},be=function(l,h){for(var _=[];l;l=l.nextSibling)l.nodeType===1&&l!==h&&_.push(l);return _},ne=m.expr.match.needsContext,me=/^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;function We(l,h,_){return C(h)?m.grep(l,function(S,A){return!!h.call(S,A,S)!==_}):h.nodeType?m.grep(l,function(S){return S===h!==_}):typeof h!="string"?m.grep(l,function(S){return d.call(h,S)>-1!==_}):m.filter(h,l,_)}m.filter=function(l,h,_){var S=h[0];return _&&(l=":not("+l+")"),h.length===1&&S.nodeType===1?m.find.matchesSelector(S,l)?[S]:[]:m.find.matches(l,m.grep(h,function(A){return A.nodeType===1}))},m.fn.extend({find:function(l){var h,_,S=this.length,A=this;if(typeof l!="string")return this.pushStack(m(l).filter(function(){for(h=0;h<S;h++)if(m.contains(A[h],this))return!0}));for(_=this.pushStack([]),h=0;h<S;h++)m.find(l,A[h],_);return S>1?m.uniqueSort(_):_},filter:function(l){return this.pushStack(We(this,l||[],!1))},not:function(l){return this.pushStack(We(this,l||[],!0))},is:function(l){return!!We(this,typeof l=="string"&&ne.test(l)?m(l):l||[],!1).length}});var Ye,je=/^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/,ot=m.fn.init=function(l,h,_){var S,A;if(!l)return this;if(_=_||Ye,typeof l=="string")if(l[0]==="<"&&l[l.length-1]===">"&&l.length>=3?S=[null,l,null]:S=je.exec(l),S&&(S[1]||!h))if(S[1]){if(h=h instanceof m?h[0]:h,m.merge(this,m.parseHTML(S[1],h&&h.nodeType?h.ownerDocument||h:M,!0)),me.test(S[1])&&m.isPlainObject(h))for(S in h)C(this[S])?this[S](h[S]):this.attr(S,h[S]);return this}else return A=M.getElementById(S[2]),A&&(this[0]=A,this.length=1),this;else return!h||h.jquery?(h||_).find(l):this.constructor(h).find(l);else{if(l.nodeType)return this[0]=l,this.length=1,this;if(C(l))return _.ready!==void 0?_.ready(l):l(m)}return m.makeArray(l,this)};ot.prototype=m.fn,Ye=m(M);var It=/^(?:parents|prev(?:Until|All))/,Pe={children:!0,contents:!0,next:!0,prev:!0};m.fn.extend({has:function(l){var h=m(l,this),_=h.length;return this.filter(function(){for(var S=0;S<_;S++)if(m.contains(this,h[S]))return!0})},closest:function(l,h){var _,S=0,A=this.length,w=[],L=typeof l!="string"&&m(l);if(!ne.test(l)){for(;S<A;S++)for(_=this[S];_&&_!==h;_=_.parentNode)if(_.nodeType<11&&(L?L.index(_)>-1:_.nodeType===1&&m.find.matchesSelector(_,l))){w.push(_);break}}return this.pushStack(w.length>1?m.uniqueSort(w):w)},index:function(l){return l?typeof l=="string"?d.call(m(l),this[0]):d.call(this,l.jquery?l[0]:l):this[0]&&this[0].parentNode?this.first().prevAll().length:-1},add:function(l,h){return this.pushStack(m.uniqueSort(m.merge(this.get(),m(l,h))))},addBack:function(l){return this.add(l==null?this.prevObject:this.prevObject.filter(l))}});function Oe(l,h){for(;(l=l[h])&&l.nodeType!==1;);return l}m.each({parent:function(l){var h=l.parentNode;return h&&h.nodeType!==11?h:null},parents:function(l){return Ce(l,"parentNode")},parentsUntil:function(l,h,_){return Ce(l,"parentNode",_)},next:function(l){return Oe(l,"nextSibling")},prev:function(l){return Oe(l,"previousSibling")},nextAll:function(l){return Ce(l,"nextSibling")},prevAll:function(l){return Ce(l,"previousSibling")},nextUntil:function(l,h,_){return Ce(l,"nextSibling",_)},prevUntil:function(l,h,_){return Ce(l,"previousSibling",_)},siblings:function(l){return be((l.parentNode||{}).firstChild,l)},children:function(l){return be(l.firstChild)},contents:function(l){return l.contentDocument!=null&&r(l.contentDocument)?l.contentDocument:(D(l,"template")&&(l=l.content||l),m.merge([],l.childNodes))}},function(l,h){m.fn[l]=function(_,S){var A=m.map(this,h,_);return l.slice(-5)!=="Until"&&(S=_),S&&typeof S=="string"&&(A=m.filter(S,A)),this.length>1&&(Pe[l]||m.uniqueSort(A),It.test(l)&&A.reverse()),this.pushStack(A)}});var Mt=/[^\x20\t\r\n\f]+/g;function gt(l){var h={};return m.each(l.match(Mt)||[],function(_,S){h[S]=!0}),h}m.Callbacks=function(l){l=typeof l=="string"?gt(l):m.extend({},l);var h,_,S,A,w=[],L=[],q=-1,G=function(){for(A=A||l.once,S=h=!0;L.length;q=-1)for(_=L.shift();++q<w.length;)w[q].apply(_[0],_[1])===!1&&l.stopOnFalse&&(q=w.length,_=!1);l.memory||(_=!1),h=!1,A&&(_?w=[]:w="")},ee={add:function(){return w&&(_&&!h&&(q=w.length-1,L.push(_)),function de(_e){m.each(_e,function(ae,Ne){C(Ne)?(!l.unique||!ee.has(Ne))&&w.push(Ne):Ne&&Ne.length&&B(Ne)!=="string"&&de(Ne)})}(arguments),_&&!h&&G()),this},remove:function(){return m.each(arguments,function(de,_e){for(var ae;(ae=m.inArray(_e,w,ae))>-1;)w.splice(ae,1),ae<=q&&q--}),this},has:function(de){return de?m.inArray(de,w)>-1:w.length>0},empty:function(){return w&&(w=[]),this},disable:function(){return A=L=[],w=_="",this},disabled:function(){return!w},lock:function(){return A=L=[],!_&&!h&&(w=_=""),this},locked:function(){return!!A},fireWith:function(de,_e){return A||(_e=_e||[],_e=[de,_e.slice?_e.slice():_e],L.push(_e),h||G()),this},fire:function(){return ee.fireWith(this,arguments),this},fired:function(){return!!S}};return ee};function le(l){return l}function wn(l){throw l}function tt(l,h,_,S){var A;try{l&&C(A=l.promise)?A.call(l).done(h).fail(_):l&&C(A=l.then)?A.call(l,h,_):h.apply(void 0,[l].slice(S))}catch(w){_.apply(void 0,[w])}}m.extend({Deferred:function(l){var h=[["notify","progress",m.Callbacks("memory"),m.Callbacks("memory"),2],["resolve","done",m.Callbacks("once memory"),m.Callbacks("once memory"),0,"resolved"],["reject","fail",m.Callbacks("once memory"),m.Callbacks("once memory"),1,"rejected"]],_="pending",S={state:function(){return _},always:function(){return A.done(arguments).fail(arguments),this},catch:function(w){return S.then(null,w)},pipe:function(){var w=arguments;return m.Deferred(function(L){m.each(h,function(q,G){var ee=C(w[G[4]])&&w[G[4]];A[G[1]](function(){var de=ee&&ee.apply(this,arguments);de&&C(de.promise)?de.promise().progress(L.notify).done(L.resolve).fail(L.reject):L[G[0]+"With"](this,ee?[de]:arguments)})}),w=null}).promise()},then:function(w,L,q){var G=0;function ee(de,_e,ae,Ne){return function(){var Ze=this,Ct=arguments,wt=function(){var Mn,Oi;if(!(de<G)){if(Mn=ae.apply(Ze,Ct),Mn===_e.promise())throw new TypeError("Thenable self-resolution");Oi=Mn&&(typeof Mn=="object"||typeof Mn=="function")&&Mn.then,C(Oi)?Ne?Oi.call(Mn,ee(G,_e,le,Ne),ee(G,_e,wn,Ne)):(G++,Oi.call(Mn,ee(G,_e,le,Ne),ee(G,_e,wn,Ne),ee(G,_e,le,_e.notifyWith))):(ae!==le&&(Ze=void 0,Ct=[Mn]),(Ne||_e.resolveWith)(Ze,Ct))}},Un=Ne?wt:function(){try{wt()}catch(Mn){m.Deferred.exceptionHook&&m.Deferred.exceptionHook(Mn,Un.error),de+1>=G&&(ae!==wn&&(Ze=void 0,Ct=[Mn]),_e.rejectWith(Ze,Ct))}};de?Un():(m.Deferred.getErrorHook?Un.error=m.Deferred.getErrorHook():m.Deferred.getStackHook&&(Un.error=m.Deferred.getStackHook()),e.setTimeout(Un))}}return m.Deferred(function(de){h[0][3].add(ee(0,de,C(q)?q:le,de.notifyWith)),h[1][3].add(ee(0,de,C(w)?w:le)),h[2][3].add(ee(0,de,C(L)?L:wn))}).promise()},promise:function(w){return w!=null?m.extend(w,S):S}},A={};return m.each(h,function(w,L){var q=L[2],G=L[5];S[L[1]]=q.add,G&&q.add(function(){_=G},h[3-w][2].disable,h[3-w][3].disable,h[0][2].lock,h[0][3].lock),q.add(L[3].fire),A[L[0]]=function(){return A[L[0]+"With"](this===A?void 0:this,arguments),this},A[L[0]+"With"]=q.fireWith}),S.promise(A),l&&l.call(A,A),A},when:function(l){var h=arguments.length,_=h,S=Array(_),A=a.call(arguments),w=m.Deferred(),L=function(q){return function(G){S[q]=this,A[q]=arguments.length>1?a.call(arguments):G,--h||w.resolveWith(S,A)}};if(h<=1&&(tt(l,w.done(L(_)).resolve,w.reject,!h),w.state()==="pending"||C(A[_]&&A[_].then)))return w.then();for(;_--;)tt(A[_],L(_),w.reject);return w.promise()}});var dt=/^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;m.Deferred.exceptionHook=function(l,h){e.console&&e.console.warn&&l&&dt.test(l.name)&&e.console.warn("jQuery.Deferred exception: "+l.message,l.stack,h)},m.readyException=function(l){e.setTimeout(function(){throw l})};var _t=m.Deferred();m.fn.ready=function(l){return _t.then(l).catch(function(h){m.readyException(h)}),this},m.extend({isReady:!1,readyWait:1,ready:function(l){(l===!0?--m.readyWait:m.isReady)||(m.isReady=!0,!(l!==!0&&--m.readyWait>0)&&_t.resolveWith(M,[m]))}}),m.ready.then=_t.then;function Yt(){M.removeEventListener("DOMContentLoaded",Yt),e.removeEventListener("load",Yt),m.ready()}M.readyState==="complete"||M.readyState!=="loading"&&!M.documentElement.doScroll?e.setTimeout(m.ready):(M.addEventListener("DOMContentLoaded",Yt),e.addEventListener("load",Yt));var pt=function(l,h,_,S,A,w,L){var q=0,G=l.length,ee=_==null;if(B(_)==="object"){A=!0;for(q in _)pt(l,h,q,_[q],!0,w,L)}else if(S!==void 0&&(A=!0,C(S)||(L=!0),ee&&(L?(h.call(l,S),h=null):(ee=h,h=function(de,_e,ae){return ee.call(m(de),ae)})),h))for(;q<G;q++)h(l[q],_,L?S:S.call(l[q],q,h(l[q],_)));return A?l:ee?h.call(l):G?h(l[0],_):w},Pt=/^-ms-/,$t=/-([a-z])/g;function tn(l,h){return h.toUpperCase()}function en(l){return l.replace(Pt,"ms-").replace($t,tn)}var k=function(l){return l.nodeType===1||l.nodeType===9||!+l.nodeType};function I(){this.expando=m.expando+I.uid++}I.uid=1,I.prototype={cache:function(l){var h=l[this.expando];return h||(h={},k(l)&&(l.nodeType?l[this.expando]=h:Object.defineProperty(l,this.expando,{value:h,configurable:!0}))),h},set:function(l,h,_){var S,A=this.cache(l);if(typeof h=="string")A[en(h)]=_;else for(S in h)A[en(S)]=h[S];return A},get:function(l,h){return h===void 0?this.cache(l):l[this.expando]&&l[this.expando][en(h)]},access:function(l,h,_){return h===void 0||h&&typeof h=="string"&&_===void 0?this.get(l,h):(this.set(l,h,_),_!==void 0?_:h)},remove:function(l,h){var _,S=l[this.expando];if(S!==void 0){if(h!==void 0)for(Array.isArray(h)?h=h.map(en):(h=en(h),h=h in S?[h]:h.match(Mt)||[]),_=h.length;_--;)delete S[h[_]];(h===void 0||m.isEmptyObject(S))&&(l.nodeType?l[this.expando]=void 0:delete l[this.expando])}},hasData:function(l){var h=l[this.expando];return h!==void 0&&!m.isEmptyObject(h)}};var Z=new I,Ie=new I,De=/^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,He=/[A-Z]/g;function rt(l){return l==="true"?!0:l==="false"?!1:l==="null"?null:l===+l+""?+l:De.test(l)?JSON.parse(l):l}function Ge(l,h,_){var S;if(_===void 0&&l.nodeType===1)if(S="data-"+h.replace(He,"-$&").toLowerCase(),_=l.getAttribute(S),typeof _=="string"){try{_=rt(_)}catch{}Ie.set(l,h,_)}else _=void 0;return _}m.extend({hasData:function(l){return Ie.hasData(l)||Z.hasData(l)},data:function(l,h,_){return Ie.access(l,h,_)},removeData:function(l,h){Ie.remove(l,h)},_data:function(l,h,_){return Z.access(l,h,_)},_removeData:function(l,h){Z.remove(l,h)}}),m.fn.extend({data:function(l,h){var _,S,A,w=this[0],L=w&&w.attributes;if(l===void 0){if(this.length&&(A=Ie.get(w),w.nodeType===1&&!Z.get(w,"hasDataAttrs"))){for(_=L.length;_--;)L[_]&&(S=L[_].name,S.indexOf("data-")===0&&(S=en(S.slice(5)),Ge(w,S,A[S])));Z.set(w,"hasDataAttrs",!0)}return A}return typeof l=="object"?this.each(function(){Ie.set(this,l)}):pt(this,function(q){var G;if(w&&q===void 0)return G=Ie.get(w,l),G!==void 0||(G=Ge(w,l),G!==void 0)?G:void 0;this.each(function(){Ie.set(this,l,q)})},null,h,arguments.length>1,null,!0)},removeData:function(l){return this.each(function(){Ie.remove(this,l)})}}),m.extend({queue:function(l,h,_){var S;if(l)return h=(h||"fx")+"queue",S=Z.get(l,h),_&&(!S||Array.isArray(_)?S=Z.access(l,h,m.makeArray(_)):S.push(_)),S||[]},dequeue:function(l,h){h=h||"fx";var _=m.queue(l,h),S=_.length,A=_.shift(),w=m._queueHooks(l,h),L=function(){m.dequeue(l,h)};A==="inprogress"&&(A=_.shift(),S--),A&&(h==="fx"&&_.unshift("inprogress"),delete w.stop,A.call(l,L,w)),!S&&w&&w.empty.fire()},_queueHooks:function(l,h){var _=h+"queueHooks";return Z.get(l,_)||Z.access(l,_,{empty:m.Callbacks("once memory").add(function(){Z.remove(l,[h+"queue",_])})})}}),m.fn.extend({queue:function(l,h){var _=2;return typeof l!="string"&&(h=l,l="fx",_--),arguments.length<_?m.queue(this[0],l):h===void 0?this:this.each(function(){var S=m.queue(this,l,h);m._queueHooks(this,l),l==="fx"&&S[0]!=="inprogress"&&m.dequeue(this,l)})},dequeue:function(l){return this.each(function(){m.dequeue(this,l)})},clearQueue:function(l){return this.queue(l||"fx",[])},promise:function(l,h){var _,S=1,A=m.Deferred(),w=this,L=this.length,q=function(){--S||A.resolveWith(w,[w])};for(typeof l!="string"&&(h=l,l=void 0),l=l||"fx";L--;)_=Z.get(w[L],l+"queueHooks"),_&&_.empty&&(S++,_.empty.add(q));return q(),A.promise(h)}});var qe=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,lt=new RegExp("^(?:([+-])=|)("+qe+")([a-z%]*)$","i"),Tt=["Top","Right","Bottom","Left"],Fe=M.documentElement,Bt=function(l){return m.contains(l.ownerDocument,l)},yt={composed:!0};Fe.getRootNode&&(Bt=function(l){return m.contains(l.ownerDocument,l)||l.getRootNode(yt)===l.ownerDocument});var ct=function(l,h){return l=h||l,l.style.display==="none"||l.style.display===""&&Bt(l)&&m.css(l,"display")==="none"};function ut(l,h,_,S){var A,w,L=20,q=S?function(){return S.cur()}:function(){return m.css(l,h,"")},G=q(),ee=_&&_[3]||(m.cssNumber[h]?"":"px"),de=l.nodeType&&(m.cssNumber[h]||ee!=="px"&&+G)&&lt.exec(m.css(l,h));if(de&&de[3]!==ee){for(G=G/2,ee=ee||de[3],de=+G||1;L--;)m.style(l,h,de+ee),(1-w)*(1-(w=q()/G||.5))<=0&&(L=0),de=de/w;de=de*2,m.style(l,h,de+ee),_=_||[]}return _&&(de=+de||+G||0,A=_[1]?de+(_[1]+1)*_[2]:+_[2],S&&(S.unit=ee,S.start=de,S.end=A)),A}var Je={};function Gt(l){var h,_=l.ownerDocument,S=l.nodeName,A=Je[S];return A||(h=_.body.appendChild(_.createElement(S)),A=m.css(h,"display"),h.parentNode.removeChild(h),A==="none"&&(A="block"),Je[S]=A,A)}function Q(l,h){for(var _,S,A=[],w=0,L=l.length;w<L;w++)S=l[w],S.style&&(_=S.style.display,h?(_==="none"&&(A[w]=Z.get(S,"display")||null,A[w]||(S.style.display="")),S.style.display===""&&ct(S)&&(A[w]=Gt(S))):_!=="none"&&(A[w]="none",Z.set(S,"display",_)));for(w=0;w<L;w++)A[w]!=null&&(l[w].style.display=A[w]);return l}m.fn.extend({show:function(){return Q(this,!0)},hide:function(){return Q(this)},toggle:function(l){return typeof l=="boolean"?l?this.show():this.hide():this.each(function(){ct(this)?m(this).show():m(this).hide()})}});var ke=/^(?:checkbox|radio)$/i,ze=/<([a-z][^\/\0>\x20\t\r\n\f]*)/i,Se=/^$|^module$|\/(?:java|ecma)script/i;(function(){var l=M.createDocumentFragment(),h=l.appendChild(M.createElement("div")),_=M.createElement("input");_.setAttribute("type","radio"),_.setAttribute("checked","checked"),_.setAttribute("name","t"),h.appendChild(_),b.checkClone=h.cloneNode(!0).cloneNode(!0).lastChild.checked,h.innerHTML="<textarea>x</textarea>",b.noCloneChecked=!!h.cloneNode(!0).lastChild.defaultValue,h.innerHTML="<option></option>",b.option=!!h.lastChild})();var Be={thead:[1,"<table>","</table>"],col:[2,"<table><colgroup>","</colgroup></table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:[0,"",""]};Be.tbody=Be.tfoot=Be.colgroup=Be.caption=Be.thead,Be.th=Be.td,b.option||(Be.optgroup=Be.option=[1,"<select multiple='multiple'>","</select>"]);function nt(l,h){var _;return typeof l.getElementsByTagName<"u"?_=l.getElementsByTagName(h||"*"):typeof l.querySelectorAll<"u"?_=l.querySelectorAll(h||"*"):_=[],h===void 0||h&&D(l,h)?m.merge([l],_):_}function kt(l,h){for(var _=0,S=l.length;_<S;_++)Z.set(l[_],"globalEval",!h||Z.get(h[_],"globalEval"))}var xn=/<|&#?\w+;/;function qn(l,h,_,S,A){for(var w,L,q,G,ee,de,_e=h.createDocumentFragment(),ae=[],Ne=0,Ze=l.length;Ne<Ze;Ne++)if(w=l[Ne],w||w===0)if(B(w)==="object")m.merge(ae,w.nodeType?[w]:w);else if(!xn.test(w))ae.push(h.createTextNode(w));else{for(L=L||_e.appendChild(h.createElement("div")),q=(ze.exec(w)||["",""])[1].toLowerCase(),G=Be[q]||Be._default,L.innerHTML=G[1]+m.htmlPrefilter(w)+G[2],de=G[0];de--;)L=L.lastChild;m.merge(ae,L.childNodes),L=_e.firstChild,L.textContent=""}for(_e.textContent="",Ne=0;w=ae[Ne++];){if(S&&m.inArray(w,S)>-1){A&&A.push(w);continue}if(ee=Bt(w),L=nt(_e.appendChild(w),"script"),ee&&kt(L),_)for(de=0;w=L[de++];)Se.test(w.type||"")&&_.push(w)}return _e}var rn=/^([^.]*)(?:\.(.+)|)/;function pn(){return!0}function Nn(){return!1}function lr(l,h,_,S,A,w){var L,q;if(typeof h=="object"){typeof _!="string"&&(S=S||_,_=void 0);for(q in h)lr(l,q,_,S,h[q],w);return l}if(S==null&&A==null?(A=_,S=_=void 0):A==null&&(typeof _=="string"?(A=S,S=void 0):(A=S,S=_,_=void 0)),A===!1)A=Nn;else if(!A)return l;return w===1&&(L=A,A=function(G){return m().off(G),L.apply(this,arguments)},A.guid=L.guid||(L.guid=m.guid++)),l.each(function(){m.event.add(this,h,A,S,_)})}m.event={global:{},add:function(l,h,_,S,A){var w,L,q,G,ee,de,_e,ae,Ne,Ze,Ct,wt=Z.get(l);if(k(l))for(_.handler&&(w=_,_=w.handler,A=w.selector),A&&m.find.matchesSelector(Fe,A),_.guid||(_.guid=m.guid++),(G=wt.events)||(G=wt.events=Object.create(null)),(L=wt.handle)||(L=wt.handle=function(Un){return typeof m<"u"&&m.event.triggered!==Un.type?m.event.dispatch.apply(l,arguments):void 0}),h=(h||"").match(Mt)||[""],ee=h.length;ee--;)q=rn.exec(h[ee])||[],Ne=Ct=q[1],Ze=(q[2]||"").split(".").sort(),Ne&&(_e=m.event.special[Ne]||{},Ne=(A?_e.delegateType:_e.bindType)||Ne,_e=m.event.special[Ne]||{},de=m.extend({type:Ne,origType:Ct,data:S,handler:_,guid:_.guid,selector:A,needsContext:A&&m.expr.match.needsContext.test(A),namespace:Ze.join(".")},w),(ae=G[Ne])||(ae=G[Ne]=[],ae.delegateCount=0,(!_e.setup||_e.setup.call(l,S,Ze,L)===!1)&&l.addEventListener&&l.addEventListener(Ne,L)),_e.add&&(_e.add.call(l,de),de.handler.guid||(de.handler.guid=_.guid)),A?ae.splice(ae.delegateCount++,0,de):ae.push(de),m.event.global[Ne]=!0)},remove:function(l,h,_,S,A){var w,L,q,G,ee,de,_e,ae,Ne,Ze,Ct,wt=Z.hasData(l)&&Z.get(l);if(!(!wt||!(G=wt.events))){for(h=(h||"").match(Mt)||[""],ee=h.length;ee--;){if(q=rn.exec(h[ee])||[],Ne=Ct=q[1],Ze=(q[2]||"").split(".").sort(),!Ne){for(Ne in G)m.event.remove(l,Ne+h[ee],_,S,!0);continue}for(_e=m.event.special[Ne]||{},Ne=(S?_e.delegateType:_e.bindType)||Ne,ae=G[Ne]||[],q=q[2]&&new RegExp("(^|\\.)"+Ze.join("\\.(?:.*\\.|)")+"(\\.|$)"),L=w=ae.length;w--;)de=ae[w],(A||Ct===de.origType)&&(!_||_.guid===de.guid)&&(!q||q.test(de.namespace))&&(!S||S===de.selector||S==="**"&&de.selector)&&(ae.splice(w,1),de.selector&&ae.delegateCount--,_e.remove&&_e.remove.call(l,de));L&&!ae.length&&((!_e.teardown||_e.teardown.call(l,Ze,wt.handle)===!1)&&m.removeEvent(l,Ne,wt.handle),delete G[Ne])}m.isEmptyObject(G)&&Z.remove(l,"handle events")}},dispatch:function(l){var h,_,S,A,w,L,q=new Array(arguments.length),G=m.event.fix(l),ee=(Z.get(this,"events")||Object.create(null))[G.type]||[],de=m.event.special[G.type]||{};for(q[0]=G,h=1;h<arguments.length;h++)q[h]=arguments[h];if(G.delegateTarget=this,!(de.preDispatch&&de.preDispatch.call(this,G)===!1)){for(L=m.event.handlers.call(this,G,ee),h=0;(A=L[h++])&&!G.isPropagationStopped();)for(G.currentTarget=A.elem,_=0;(w=A.handlers[_++])&&!G.isImmediatePropagationStopped();)(!G.rnamespace||w.namespace===!1||G.rnamespace.test(w.namespace))&&(G.handleObj=w,G.data=w.data,S=((m.event.special[w.origType]||{}).handle||w.handler).apply(A.elem,q),S!==void 0&&(G.result=S)===!1&&(G.preventDefault(),G.stopPropagation()));return de.postDispatch&&de.postDispatch.call(this,G),G.result}},handlers:function(l,h){var _,S,A,w,L,q=[],G=h.delegateCount,ee=l.target;if(G&&ee.nodeType&&!(l.type==="click"&&l.button>=1)){for(;ee!==this;ee=ee.parentNode||this)if(ee.nodeType===1&&!(l.type==="click"&&ee.disabled===!0)){for(w=[],L={},_=0;_<G;_++)S=h[_],A=S.selector+" ",L[A]===void 0&&(L[A]=S.needsContext?m(A,this).index(ee)>-1:m.find(A,this,null,[ee]).length),L[A]&&w.push(S);w.length&&q.push({elem:ee,handlers:w})}}return ee=this,G<h.length&&q.push({elem:ee,handlers:h.slice(G)}),q},addProp:function(l,h){Object.defineProperty(m.Event.prototype,l,{enumerable:!0,configurable:!0,get:C(h)?function(){if(this.originalEvent)return h(this.originalEvent)}:function(){if(this.originalEvent)return this.originalEvent[l]},set:function(_){Object.defineProperty(this,l,{enumerable:!0,configurable:!0,writable:!0,value:_})}})},fix:function(l){return l[m.expando]?l:new m.Event(l)},special:{load:{noBubble:!0},click:{setup:function(l){var h=this||l;return ke.test(h.type)&&h.click&&D(h,"input")&&Jr(h,"click",!0),!1},trigger:function(l){var h=this||l;return ke.test(h.type)&&h.click&&D(h,"input")&&Jr(h,"click"),!0},_default:function(l){var h=l.target;return ke.test(h.type)&&h.click&&D(h,"input")&&Z.get(h,"click")||D(h,"a")}},beforeunload:{postDispatch:function(l){l.result!==void 0&&l.originalEvent&&(l.originalEvent.returnValue=l.result)}}}};function Jr(l,h,_){if(!_){Z.get(l,h)===void 0&&m.event.add(l,h,pn);return}Z.set(l,h,!1),m.event.add(l,h,{namespace:!1,handler:function(S){var A,w=Z.get(this,h);if(S.isTrigger&1&&this[h]){if(w)(m.event.special[h]||{}).delegateType&&S.stopPropagation();else if(w=a.call(arguments),Z.set(this,h,w),this[h](),A=Z.get(this,h),Z.set(this,h,!1),w!==A)return S.stopImmediatePropagation(),S.preventDefault(),A}else w&&(Z.set(this,h,m.event.trigger(w[0],w.slice(1),this)),S.stopPropagation(),S.isImmediatePropagationStopped=pn)}})}m.removeEvent=function(l,h,_){l.removeEventListener&&l.removeEventListener(h,_)},m.Event=function(l,h){if(!(this instanceof m.Event))return new m.Event(l,h);l&&l.type?(this.originalEvent=l,this.type=l.type,this.isDefaultPrevented=l.defaultPrevented||l.defaultPrevented===void 0&&l.returnValue===!1?pn:Nn,this.target=l.target&&l.target.nodeType===3?l.target.parentNode:l.target,this.currentTarget=l.currentTarget,this.relatedTarget=l.relatedTarget):this.type=l,h&&m.extend(this,h),this.timeStamp=l&&l.timeStamp||Date.now(),this[m.expando]=!0},m.Event.prototype={constructor:m.Event,isDefaultPrevented:Nn,isPropagationStopped:Nn,isImmediatePropagationStopped:Nn,isSimulated:!1,preventDefault:function(){var l=this.originalEvent;this.isDefaultPrevented=pn,l&&!this.isSimulated&&l.preventDefault()},stopPropagation:function(){var l=this.originalEvent;this.isPropagationStopped=pn,l&&!this.isSimulated&&l.stopPropagation()},stopImmediatePropagation:function(){var l=this.originalEvent;this.isImmediatePropagationStopped=pn,l&&!this.isSimulated&&l.stopImmediatePropagation(),this.stopPropagation()}},m.each({altKey:!0,bubbles:!0,cancelable:!0,changedTouches:!0,ctrlKey:!0,detail:!0,eventPhase:!0,metaKey:!0,pageX:!0,pageY:!0,shiftKey:!0,view:!0,char:!0,code:!0,charCode:!0,key:!0,keyCode:!0,button:!0,buttons:!0,clientX:!0,clientY:!0,offsetX:!0,offsetY:!0,pointerId:!0,pointerType:!0,screenX:!0,screenY:!0,targetTouches:!0,toElement:!0,touches:!0,which:!0},m.event.addProp),m.each({focus:"focusin",blur:"focusout"},function(l,h){function _(S){if(M.documentMode){var A=Z.get(this,"handle"),w=m.event.fix(S);w.type=S.type==="focusin"?"focus":"blur",w.isSimulated=!0,A(S),w.target===w.currentTarget&&A(w)}else m.event.simulate(h,S.target,m.event.fix(S))}m.event.special[l]={setup:function(){var S;if(Jr(this,l,!0),M.documentMode)S=Z.get(this,h),S||this.addEventListener(h,_),Z.set(this,h,(S||0)+1);else return!1},trigger:function(){return Jr(this,l),!0},teardown:function(){var S;if(M.documentMode)S=Z.get(this,h)-1,S?Z.set(this,h,S):(this.removeEventListener(h,_),Z.remove(this,h));else return!1},_default:function(S){return Z.get(S.target,l)},delegateType:h},m.event.special[h]={setup:function(){var S=this.ownerDocument||this.document||this,A=M.documentMode?this:S,w=Z.get(A,h);w||(M.documentMode?this.addEventListener(h,_):S.addEventListener(l,_,!0)),Z.set(A,h,(w||0)+1)},teardown:function(){var S=this.ownerDocument||this.document||this,A=M.documentMode?this:S,w=Z.get(A,h)-1;w?Z.set(A,h,w):(M.documentMode?this.removeEventListener(h,_):S.removeEventListener(l,_,!0),Z.remove(A,h))}}}),m.each({mouseenter:"mouseover",mouseleave:"mouseout",pointerenter:"pointerover",pointerleave:"pointerout"},function(l,h){m.event.special[l]={delegateType:h,bindType:h,handle:function(_){var S,A=this,w=_.relatedTarget,L=_.handleObj;return(!w||w!==A&&!m.contains(A,w))&&(_.type=L.origType,S=L.handler.apply(this,arguments),_.type=h),S}}}),m.fn.extend({on:function(l,h,_,S){return lr(this,l,h,_,S)},one:function(l,h,_,S){return lr(this,l,h,_,S,1)},off:function(l,h,_){var S,A;if(l&&l.preventDefault&&l.handleObj)return S=l.handleObj,m(l.delegateTarget).off(S.namespace?S.origType+"."+S.namespace:S.origType,S.selector,S.handler),this;if(typeof l=="object"){for(A in l)this.off(A,h,l[A]);return this}return(h===!1||typeof h=="function")&&(_=h,h=void 0),_===!1&&(_=Nn),this.each(function(){m.event.remove(this,l,_,h)})}});var Qr=/<script|<style|<link/i,so=/checked\s*(?:[^=]|=\s*.checked.)/i,es=/^\s*<!\[CDATA\[|\]\]>\s*$/g;function bs(l,h){return D(l,"table")&&D(h.nodeType!==11?h:h.firstChild,"tr")&&m(l).children("tbody")[0]||l}function oo(l){return l.type=(l.getAttribute("type")!==null)+"/"+l.type,l}function aa(l){return(l.type||"").slice(0,5)==="true/"?l.type=l.type.slice(5):l.removeAttribute("type"),l}function ao(l,h){var _,S,A,w,L,q,G;if(h.nodeType===1){if(Z.hasData(l)&&(w=Z.get(l),G=w.events,G)){Z.remove(h,"handle events");for(A in G)for(_=0,S=G[A].length;_<S;_++)m.event.add(h,A,G[A][_])}Ie.hasData(l)&&(L=Ie.access(l),q=m.extend({},L),Ie.set(h,q))}}function lo(l,h){var _=h.nodeName.toLowerCase();_==="input"&&ke.test(l.type)?h.checked=l.checked:(_==="input"||_==="textarea")&&(h.defaultValue=l.defaultValue)}function F(l,h,_,S){h=c(h);var A,w,L,q,G,ee,de=0,_e=l.length,ae=_e-1,Ne=h[0],Ze=C(Ne);if(Ze||_e>1&&typeof Ne=="string"&&!b.checkClone&&so.test(Ne))return l.each(function(Ct){var wt=l.eq(Ct);Ze&&(h[0]=Ne.call(this,Ct,wt.html())),F(wt,h,_,S)});if(_e&&(A=qn(h,l[0].ownerDocument,!1,l,S),w=A.firstChild,A.childNodes.length===1&&(A=w),w||S)){for(L=m.map(nt(A,"script"),oo),q=L.length;de<_e;de++)G=A,de!==ae&&(G=m.clone(G,!0,!0),q&&m.merge(L,nt(G,"script"))),_.call(l[de],G,de);if(q)for(ee=L[L.length-1].ownerDocument,m.map(L,aa),de=0;de<q;de++)G=L[de],Se.test(G.type||"")&&!Z.access(G,"globalEval")&&m.contains(ee,G)&&(G.src&&(G.type||"").toLowerCase()!=="module"?m._evalUrl&&!G.noModule&&m._evalUrl(G.src,{nonce:G.nonce||G.getAttribute("nonce")},ee):U(G.textContent.replace(es,""),G,ee))}return l}function se(l,h,_){for(var S,A=h?m.filter(h,l):l,w=0;(S=A[w])!=null;w++)!_&&S.nodeType===1&&m.cleanData(nt(S)),S.parentNode&&(_&&Bt(S)&&kt(nt(S,"script")),S.parentNode.removeChild(S));return l}m.extend({htmlPrefilter:function(l){return l},clone:function(l,h,_){var S,A,w,L,q=l.cloneNode(!0),G=Bt(l);if(!b.noCloneChecked&&(l.nodeType===1||l.nodeType===11)&&!m.isXMLDoc(l))for(L=nt(q),w=nt(l),S=0,A=w.length;S<A;S++)lo(w[S],L[S]);if(h)if(_)for(w=w||nt(l),L=L||nt(q),S=0,A=w.length;S<A;S++)ao(w[S],L[S]);else ao(l,q);return L=nt(q,"script"),L.length>0&&kt(L,!G&&nt(l,"script")),q},cleanData:function(l){for(var h,_,S,A=m.event.special,w=0;(_=l[w])!==void 0;w++)if(k(_)){if(h=_[Z.expando]){if(h.events)for(S in h.events)A[S]?m.event.remove(_,S):m.removeEvent(_,S,h.handle);_[Z.expando]=void 0}_[Ie.expando]&&(_[Ie.expando]=void 0)}}}),m.fn.extend({detach:function(l){return se(this,l,!0)},remove:function(l){return se(this,l)},text:function(l){return pt(this,function(h){return h===void 0?m.text(this):this.empty().each(function(){(this.nodeType===1||this.nodeType===11||this.nodeType===9)&&(this.textContent=h)})},null,l,arguments.length)},append:function(){return F(this,arguments,function(l){if(this.nodeType===1||this.nodeType===11||this.nodeType===9){var h=bs(this,l);h.appendChild(l)}})},prepend:function(){return F(this,arguments,function(l){if(this.nodeType===1||this.nodeType===11||this.nodeType===9){var h=bs(this,l);h.insertBefore(l,h.firstChild)}})},before:function(){return F(this,arguments,function(l){this.parentNode&&this.parentNode.insertBefore(l,this)})},after:function(){return F(this,arguments,function(l){this.parentNode&&this.parentNode.insertBefore(l,this.nextSibling)})},empty:function(){for(var l,h=0;(l=this[h])!=null;h++)l.nodeType===1&&(m.cleanData(nt(l,!1)),l.textContent="");return this},clone:function(l,h){return l=l??!1,h=h??l,this.map(function(){return m.clone(this,l,h)})},html:function(l){return pt(this,function(h){var _=this[0]||{},S=0,A=this.length;if(h===void 0&&_.nodeType===1)return _.innerHTML;if(typeof h=="string"&&!Qr.test(h)&&!Be[(ze.exec(h)||["",""])[1].toLowerCase()]){h=m.htmlPrefilter(h);try{for(;S<A;S++)_=this[S]||{},_.nodeType===1&&(m.cleanData(nt(_,!1)),_.innerHTML=h);_=0}catch{}}_&&this.empty().append(h)},null,l,arguments.length)},replaceWith:function(){var l=[];return F(this,arguments,function(h){var _=this.parentNode;m.inArray(this,l)<0&&(m.cleanData(nt(this)),_&&_.replaceChild(h,this))},l)}}),m.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(l,h){m.fn[l]=function(_){for(var S,A=[],w=m(_),L=w.length-1,q=0;q<=L;q++)S=q===L?this:this.clone(!0),m(w[q])[h](S),u.apply(A,S.get());return this.pushStack(A)}});var ue=new RegExp("^("+qe+")(?!px)[a-z%]+$","i"),fe=/^--/,he=function(l){var h=l.ownerDocument.defaultView;return(!h||!h.opener)&&(h=e),h.getComputedStyle(l)},$e=function(l,h,_){var S,A,w={};for(A in h)w[A]=l.style[A],l.style[A]=h[A];S=_.call(l);for(A in h)l.style[A]=w[A];return S},it=new RegExp(Tt.join("|"),"i");(function(){function l(){if(ee){G.style.cssText="position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0",ee.style.cssText="position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%",Fe.appendChild(G).appendChild(ee);var de=e.getComputedStyle(ee);_=de.top!=="1%",q=h(de.marginLeft)===12,ee.style.right="60%",w=h(de.right)===36,S=h(de.width)===36,ee.style.position="absolute",A=h(ee.offsetWidth/3)===12,Fe.removeChild(G),ee=null}}function h(de){return Math.round(parseFloat(de))}var _,S,A,w,L,q,G=M.createElement("div"),ee=M.createElement("div");ee.style&&(ee.style.backgroundClip="content-box",ee.cloneNode(!0).style.backgroundClip="",b.clearCloneStyle=ee.style.backgroundClip==="content-box",m.extend(b,{boxSizingReliable:function(){return l(),S},pixelBoxStyles:function(){return l(),w},pixelPosition:function(){return l(),_},reliableMarginLeft:function(){return l(),q},scrollboxSize:function(){return l(),A},reliableTrDimensions:function(){var de,_e,ae,Ne;return L==null&&(de=M.createElement("table"),_e=M.createElement("tr"),ae=M.createElement("div"),de.style.cssText="position:absolute;left:-11111px;border-collapse:separate",_e.style.cssText="box-sizing:content-box;border:1px solid",_e.style.height="1px",ae.style.height="9px",ae.style.display="block",Fe.appendChild(de).appendChild(_e).appendChild(ae),Ne=e.getComputedStyle(_e),L=parseInt(Ne.height,10)+parseInt(Ne.borderTopWidth,10)+parseInt(Ne.borderBottomWidth,10)===_e.offsetHeight,Fe.removeChild(de)),L}}))})();function at(l,h,_){var S,A,w,L,q=fe.test(h),G=l.style;return _=_||he(l),_&&(L=_.getPropertyValue(h)||_[h],q&&L&&(L=L.replace(te,"$1")||void 0),L===""&&!Bt(l)&&(L=m.style(l,h)),!b.pixelBoxStyles()&&ue.test(L)&&it.test(h)&&(S=G.width,A=G.minWidth,w=G.maxWidth,G.minWidth=G.maxWidth=G.width=L,L=_.width,G.width=S,G.minWidth=A,G.maxWidth=w)),L!==void 0?L+"":L}function ht(l,h){return{get:function(){if(l()){delete this.get;return}return(this.get=h).apply(this,arguments)}}}var bt=["Webkit","Moz","ms"],St=M.createElement("div").style,Et={};function mn(l){for(var h=l[0].toUpperCase()+l.slice(1),_=bt.length;_--;)if(l=bt[_]+h,l in St)return l}function Ln(l){var h=m.cssProps[l]||Et[l];return h||(l in St?l:Et[l]=mn(l)||l)}var yn=/^(none|table(?!-c[ea]).+)/,Ti={position:"absolute",visibility:"hidden",display:"block"},hn={letterSpacing:"0",fontWeight:"400"};function Dt(l,h,_){var S=lt.exec(h);return S?Math.max(0,S[2]-(_||0))+(S[3]||"px"):h}function Ar(l,h,_,S,A,w){var L=h==="width"?1:0,q=0,G=0,ee=0;if(_===(S?"border":"content"))return 0;for(;L<4;L+=2)_==="margin"&&(ee+=m.css(l,_+Tt[L],!0,A)),S?(_==="content"&&(G-=m.css(l,"padding"+Tt[L],!0,A)),_!=="margin"&&(G-=m.css(l,"border"+Tt[L]+"Width",!0,A))):(G+=m.css(l,"padding"+Tt[L],!0,A),_!=="padding"?G+=m.css(l,"border"+Tt[L]+"Width",!0,A):q+=m.css(l,"border"+Tt[L]+"Width",!0,A));return!S&&w>=0&&(G+=Math.max(0,Math.ceil(l["offset"+h[0].toUpperCase()+h.slice(1)]-w-G-q-.5))||0),G+ee}function gn(l,h,_){var S=he(l),A=!b.boxSizingReliable()||_,w=A&&m.css(l,"boxSizing",!1,S)==="border-box",L=w,q=at(l,h,S),G="offset"+h[0].toUpperCase()+h.slice(1);if(ue.test(q)){if(!_)return q;q="auto"}return(!b.boxSizingReliable()&&w||!b.reliableTrDimensions()&&D(l,"tr")||q==="auto"||!parseFloat(q)&&m.css(l,"display",!1,S)==="inline")&&l.getClientRects().length&&(w=m.css(l,"boxSizing",!1,S)==="border-box",L=G in l,L&&(q=l[G])),q=parseFloat(q)||0,q+Ar(l,h,_||(w?"border":"content"),L,S,q)+"px"}m.extend({cssHooks:{opacity:{get:function(l,h){if(h){var _=at(l,"opacity");return _===""?"1":_}}}},cssNumber:{animationIterationCount:!0,aspectRatio:!0,borderImageSlice:!0,columnCount:!0,flexGrow:!0,flexShrink:!0,fontWeight:!0,gridArea:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnStart:!0,gridRow:!0,gridRowEnd:!0,gridRowStart:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,scale:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeMiterlimit:!0,strokeOpacity:!0},cssProps:{},style:function(l,h,_,S){if(!(!l||l.nodeType===3||l.nodeType===8||!l.style)){var A,w,L,q=en(h),G=fe.test(h),ee=l.style;if(G||(h=Ln(q)),L=m.cssHooks[h]||m.cssHooks[q],_!==void 0){if(w=typeof _,w==="string"&&(A=lt.exec(_))&&A[1]&&(_=ut(l,h,A),w="number"),_==null||_!==_)return;w==="number"&&!G&&(_+=A&&A[3]||(m.cssNumber[q]?"":"px")),!b.clearCloneStyle&&_===""&&h.indexOf("background")===0&&(ee[h]="inherit"),(!L||!("set"in L)||(_=L.set(l,_,S))!==void 0)&&(G?ee.setProperty(h,_):ee[h]=_)}else return L&&"get"in L&&(A=L.get(l,!1,S))!==void 0?A:ee[h]}},css:function(l,h,_,S){var A,w,L,q=en(h),G=fe.test(h);return G||(h=Ln(q)),L=m.cssHooks[h]||m.cssHooks[q],L&&"get"in L&&(A=L.get(l,!0,_)),A===void 0&&(A=at(l,h,S)),A==="normal"&&h in hn&&(A=hn[h]),_===""||_?(w=parseFloat(A),_===!0||isFinite(w)?w||0:A):A}}),m.each(["height","width"],function(l,h){m.cssHooks[h]={get:function(_,S,A){if(S)return yn.test(m.css(_,"display"))&&(!_.getClientRects().length||!_.getBoundingClientRect().width)?$e(_,Ti,function(){return gn(_,h,A)}):gn(_,h,A)},set:function(_,S,A){var w,L=he(_),q=!b.scrollboxSize()&&L.position==="absolute",G=q||A,ee=G&&m.css(_,"boxSizing",!1,L)==="border-box",de=A?Ar(_,h,A,ee,L):0;return ee&&q&&(de-=Math.ceil(_["offset"+h[0].toUpperCase()+h.slice(1)]-parseFloat(L[h])-Ar(_,h,"border",!1,L)-.5)),de&&(w=lt.exec(S))&&(w[3]||"px")!=="px"&&(_.style[h]=S,S=m.css(_,h)),Dt(_,S,de)}}}),m.cssHooks.marginLeft=ht(b.reliableMarginLeft,function(l,h){if(h)return(parseFloat(at(l,"marginLeft"))||l.getBoundingClientRect().left-$e(l,{marginLeft:0},function(){return l.getBoundingClientRect().left}))+"px"}),m.each({margin:"",padding:"",border:"Width"},function(l,h){m.cssHooks[l+h]={expand:function(_){for(var S=0,A={},w=typeof _=="string"?_.split(" "):[_];S<4;S++)A[l+Tt[S]+h]=w[S]||w[S-2]||w[0];return A}},l!=="margin"&&(m.cssHooks[l+h].set=Dt)}),m.fn.extend({css:function(l,h){return pt(this,function(_,S,A){var w,L,q={},G=0;if(Array.isArray(S)){for(w=he(_),L=S.length;G<L;G++)q[S[G]]=m.css(_,S[G],!1,w);return q}return A!==void 0?m.style(_,S,A):m.css(_,S)},l,h,arguments.length>1)}});function _n(l,h,_,S,A){return new _n.prototype.init(l,h,_,S,A)}m.Tween=_n,_n.prototype={constructor:_n,init:function(l,h,_,S,A,w){this.elem=l,this.prop=_,this.easing=A||m.easing._default,this.options=h,this.start=this.now=this.cur(),this.end=S,this.unit=w||(m.cssNumber[_]?"":"px")},cur:function(){var l=_n.propHooks[this.prop];return l&&l.get?l.get(this):_n.propHooks._default.get(this)},run:function(l){var h,_=_n.propHooks[this.prop];return this.options.duration?this.pos=h=m.easing[this.easing](l,this.options.duration*l,0,1,this.options.duration):this.pos=h=l,this.now=(this.end-this.start)*h+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),_&&_.set?_.set(this):_n.propHooks._default.set(this),this}},_n.prototype.init.prototype=_n.prototype,_n.propHooks={_default:{get:function(l){var h;return l.elem.nodeType!==1||l.elem[l.prop]!=null&&l.elem.style[l.prop]==null?l.elem[l.prop]:(h=m.css(l.elem,l.prop,""),!h||h==="auto"?0:h)},set:function(l){m.fx.step[l.prop]?m.fx.step[l.prop](l):l.elem.nodeType===1&&(m.cssHooks[l.prop]||l.elem.style[Ln(l.prop)]!=null)?m.style(l.elem,l.prop,l.now+l.unit):l.elem[l.prop]=l.now}}},_n.propHooks.scrollTop=_n.propHooks.scrollLeft={set:function(l){l.elem.nodeType&&l.elem.parentNode&&(l.elem[l.prop]=l.now)}},m.easing={linear:function(l){return l},swing:function(l){return .5-Math.cos(l*Math.PI)/2},_default:"swing"},m.fx=_n.prototype.init,m.fx.step={};var Ui,di,ws=/^(?:toggle|show|hide)$/,Pn=/queueHooks$/;function $n(){di&&(M.hidden===!1&&e.requestAnimationFrame?e.requestAnimationFrame($n):e.setTimeout($n,m.fx.interval),m.fx.tick())}function br(){return e.setTimeout(function(){Ui=void 0}),Ui=Date.now()}function In(l,h){var _,S=0,A={height:l};for(h=h?1:0;S<4;S+=2-h)_=Tt[S],A["margin"+_]=A["padding"+_]=l;return h&&(A.opacity=A.width=l),A}function wr(l,h,_){for(var S,A=(Ai.tweeners[h]||[]).concat(Ai.tweeners["*"]),w=0,L=A.length;w<L;w++)if(S=A[w].call(_,h,l))return S}function co(l,h,_){var S,A,w,L,q,G,ee,de,_e="width"in h||"height"in h,ae=this,Ne={},Ze=l.style,Ct=l.nodeType&&ct(l),wt=Z.get(l,"fxshow");_.queue||(L=m._queueHooks(l,"fx"),L.unqueued==null&&(L.unqueued=0,q=L.empty.fire,L.empty.fire=function(){L.unqueued||q()}),L.unqueued++,ae.always(function(){ae.always(function(){L.unqueued--,m.queue(l,"fx").length||L.empty.fire()})}));for(S in h)if(A=h[S],ws.test(A)){if(delete h[S],w=w||A==="toggle",A===(Ct?"hide":"show"))if(A==="show"&&wt&&wt[S]!==void 0)Ct=!0;else continue;Ne[S]=wt&&wt[S]||m.style(l,S)}if(G=!m.isEmptyObject(h),!(!G&&m.isEmptyObject(Ne))){_e&&l.nodeType===1&&(_.overflow=[Ze.overflow,Ze.overflowX,Ze.overflowY],ee=wt&&wt.display,ee==null&&(ee=Z.get(l,"display")),de=m.css(l,"display"),de==="none"&&(ee?de=ee:(Q([l],!0),ee=l.style.display||ee,de=m.css(l,"display"),Q([l]))),(de==="inline"||de==="inline-block"&&ee!=null)&&m.css(l,"float")==="none"&&(G||(ae.done(function(){Ze.display=ee}),ee==null&&(de=Ze.display,ee=de==="none"?"":de)),Ze.display="inline-block")),_.overflow&&(Ze.overflow="hidden",ae.always(function(){Ze.overflow=_.overflow[0],Ze.overflowX=_.overflow[1],Ze.overflowY=_.overflow[2]})),G=!1;for(S in Ne)G||(wt?"hidden"in wt&&(Ct=wt.hidden):wt=Z.access(l,"fxshow",{display:ee}),w&&(wt.hidden=!Ct),Ct&&Q([l],!0),ae.done(function(){Ct||Q([l]),Z.remove(l,"fxshow");for(S in Ne)m.style(l,S,Ne[S])})),G=wr(Ct?wt[S]:0,S,ae),S in wt||(wt[S]=G.start,Ct&&(G.end=G.start,G.start=0))}}function ts(l,h){var _,S,A,w,L;for(_ in l)if(S=en(_),A=h[S],w=l[_],Array.isArray(w)&&(A=w[1],w=l[_]=w[0]),_!==S&&(l[S]=w,delete l[_]),L=m.cssHooks[S],L&&"expand"in L){w=L.expand(w),delete l[S];for(_ in w)_ in l||(l[_]=w[_],h[_]=A)}else h[S]=A}function Ai(l,h,_){var S,A,w=0,L=Ai.prefilters.length,q=m.Deferred().always(function(){delete G.elem}),G=function(){if(A)return!1;for(var _e=Ui||br(),ae=Math.max(0,ee.startTime+ee.duration-_e),Ne=ae/ee.duration||0,Ze=1-Ne,Ct=0,wt=ee.tweens.length;Ct<wt;Ct++)ee.tweens[Ct].run(Ze);return q.notifyWith(l,[ee,Ze,ae]),Ze<1&&wt?ae:(wt||q.notifyWith(l,[ee,1,0]),q.resolveWith(l,[ee]),!1)},ee=q.promise({elem:l,props:m.extend({},h),opts:m.extend(!0,{specialEasing:{},easing:m.easing._default},_),originalProperties:h,originalOptions:_,startTime:Ui||br(),duration:_.duration,tweens:[],createTween:function(_e,ae){var Ne=m.Tween(l,ee.opts,_e,ae,ee.opts.specialEasing[_e]||ee.opts.easing);return ee.tweens.push(Ne),Ne},stop:function(_e){var ae=0,Ne=_e?ee.tweens.length:0;if(A)return this;for(A=!0;ae<Ne;ae++)ee.tweens[ae].run(1);return _e?(q.notifyWith(l,[ee,1,0]),q.resolveWith(l,[ee,_e])):q.rejectWith(l,[ee,_e]),this}}),de=ee.props;for(ts(de,ee.opts.specialEasing);w<L;w++)if(S=Ai.prefilters[w].call(ee,l,de,ee.opts),S)return C(S.stop)&&(m._queueHooks(ee.elem,ee.opts.queue).stop=S.stop.bind(S)),S;return m.map(de,wr,ee),C(ee.opts.start)&&ee.opts.start.call(l,ee),ee.progress(ee.opts.progress).done(ee.opts.done,ee.opts.complete).fail(ee.opts.fail).always(ee.opts.always),m.fx.timer(m.extend(G,{elem:l,anim:ee,queue:ee.opts.queue})),ee}m.Animation=m.extend(Ai,{tweeners:{"*":[function(l,h){var _=this.createTween(l,h);return ut(_.elem,l,lt.exec(h),_),_}]},tweener:function(l,h){C(l)?(h=l,l=["*"]):l=l.match(Mt);for(var _,S=0,A=l.length;S<A;S++)_=l[S],Ai.tweeners[_]=Ai.tweeners[_]||[],Ai.tweeners[_].unshift(h)},prefilters:[co],prefilter:function(l,h){h?Ai.prefilters.unshift(l):Ai.prefilters.push(l)}}),m.speed=function(l,h,_){var S=l&&typeof l=="object"?m.extend({},l):{complete:_||!_&&h||C(l)&&l,duration:l,easing:_&&h||h&&!C(h)&&h};return m.fx.off?S.duration=0:typeof S.duration!="number"&&(S.duration in m.fx.speeds?S.duration=m.fx.speeds[S.duration]:S.duration=m.fx.speeds._default),(S.queue==null||S.queue===!0)&&(S.queue="fx"),S.old=S.complete,S.complete=function(){C(S.old)&&S.old.call(this),S.queue&&m.dequeue(this,S.queue)},S},m.fn.extend({fadeTo:function(l,h,_,S){return this.filter(ct).css("opacity",0).show().end().animate({opacity:h},l,_,S)},animate:function(l,h,_,S){var A=m.isEmptyObject(l),w=m.speed(h,_,S),L=function(){var q=Ai(this,m.extend({},l),w);(A||Z.get(this,"finish"))&&q.stop(!0)};return L.finish=L,A||w.queue===!1?this.each(L):this.queue(w.queue,L)},stop:function(l,h,_){var S=function(A){var w=A.stop;delete A.stop,w(_)};return typeof l!="string"&&(_=h,h=l,l=void 0),h&&this.queue(l||"fx",[]),this.each(function(){var A=!0,w=l!=null&&l+"queueHooks",L=m.timers,q=Z.get(this);if(w)q[w]&&q[w].stop&&S(q[w]);else for(w in q)q[w]&&q[w].stop&&Pn.test(w)&&S(q[w]);for(w=L.length;w--;)L[w].elem===this&&(l==null||L[w].queue===l)&&(L[w].anim.stop(_),A=!1,L.splice(w,1));(A||!_)&&m.dequeue(this,l)})},finish:function(l){return l!==!1&&(l=l||"fx"),this.each(function(){var h,_=Z.get(this),S=_[l+"queue"],A=_[l+"queueHooks"],w=m.timers,L=S?S.length:0;for(_.finish=!0,m.queue(this,l,[]),A&&A.stop&&A.stop.call(this,!0),h=w.length;h--;)w[h].elem===this&&w[h].queue===l&&(w[h].anim.stop(!0),w.splice(h,1));for(h=0;h<L;h++)S[h]&&S[h].finish&&S[h].finish.call(this);delete _.finish})}}),m.each(["toggle","show","hide"],function(l,h){var _=m.fn[h];m.fn[h]=function(S,A,w){return S==null||typeof S=="boolean"?_.apply(this,arguments):this.animate(In(h,!0),S,A,w)}}),m.each({slideDown:In("show"),slideUp:In("hide"),slideToggle:In("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(l,h){m.fn[l]=function(_,S,A){return this.animate(h,_,S,A)}}),m.timers=[],m.fx.tick=function(){var l,h=0,_=m.timers;for(Ui=Date.now();h<_.length;h++)l=_[h],!l()&&_[h]===l&&_.splice(h--,1);_.length||m.fx.stop(),Ui=void 0},m.fx.timer=function(l){m.timers.push(l),m.fx.start()},m.fx.interval=13,m.fx.start=function(){di||(di=!0,$n())},m.fx.stop=function(){di=null},m.fx.speeds={slow:600,fast:200,_default:400},m.fn.delay=function(l,h){return l=m.fx&&m.fx.speeds[l]||l,h=h||"fx",this.queue(h,function(_,S){var A=e.setTimeout(_,l);S.stop=function(){e.clearTimeout(A)}})},function(){var l=M.createElement("input"),h=M.createElement("select"),_=h.appendChild(M.createElement("option"));l.type="checkbox",b.checkOn=l.value!=="",b.optSelected=_.selected,l=M.createElement("input"),l.value="t",l.type="radio",b.radioValue=l.value==="t"}();var la,Rr=m.expr.attrHandle;m.fn.extend({attr:function(l,h){return pt(this,m.attr,l,h,arguments.length>1)},removeAttr:function(l){return this.each(function(){m.removeAttr(this,l)})}}),m.extend({attr:function(l,h,_){var S,A,w=l.nodeType;if(!(w===3||w===8||w===2)){if(typeof l.getAttribute>"u")return m.prop(l,h,_);if((w!==1||!m.isXMLDoc(l))&&(A=m.attrHooks[h.toLowerCase()]||(m.expr.match.bool.test(h)?la:void 0)),_!==void 0){if(_===null){m.removeAttr(l,h);return}return A&&"set"in A&&(S=A.set(l,_,h))!==void 0?S:(l.setAttribute(h,_+""),_)}return A&&"get"in A&&(S=A.get(l,h))!==null?S:(S=m.find.attr(l,h),S??void 0)}},attrHooks:{type:{set:function(l,h){if(!b.radioValue&&h==="radio"&&D(l,"input")){var _=l.value;return l.setAttribute("type",h),_&&(l.value=_),h}}}},removeAttr:function(l,h){var _,S=0,A=h&&h.match(Mt);if(A&&l.nodeType===1)for(;_=A[S++];)l.removeAttribute(_)}}),la={set:function(l,h,_){return h===!1?m.removeAttr(l,_):l.setAttribute(_,_),_}},m.each(m.expr.match.bool.source.match(/\w+/g),function(l,h){var _=Rr[h]||m.find.attr;Rr[h]=function(S,A,w){var L,q,G=A.toLowerCase();return w||(q=Rr[G],Rr[G]=L,L=_(S,A,w)!=null?G:null,Rr[G]=q),L}});var ca=/^(?:input|select|textarea|button)$/i,ns=/^(?:a|area)$/i;m.fn.extend({prop:function(l,h){return pt(this,m.prop,l,h,arguments.length>1)},removeProp:function(l){return this.each(function(){delete this[m.propFix[l]||l]})}}),m.extend({prop:function(l,h,_){var S,A,w=l.nodeType;if(!(w===3||w===8||w===2))return(w!==1||!m.isXMLDoc(l))&&(h=m.propFix[h]||h,A=m.propHooks[h]),_!==void 0?A&&"set"in A&&(S=A.set(l,_,h))!==void 0?S:l[h]=_:A&&"get"in A&&(S=A.get(l,h))!==null?S:l[h]},propHooks:{tabIndex:{get:function(l){var h=m.find.attr(l,"tabindex");return h?parseInt(h,10):ca.test(l.nodeName)||ns.test(l.nodeName)&&l.href?0:-1}}},propFix:{for:"htmlFor",class:"className"}}),b.optSelected||(m.propHooks.selected={get:function(l){var h=l.parentNode;return h&&h.parentNode&&h.parentNode.selectedIndex,null},set:function(l){var h=l.parentNode;h&&(h.selectedIndex,h.parentNode&&h.parentNode.selectedIndex)}}),m.each(["tabIndex","readOnly","maxLength","cellSpacing","cellPadding","rowSpan","colSpan","useMap","frameBorder","contentEditable"],function(){m.propFix[this.toLowerCase()]=this});function cr(l){var h=l.match(Mt)||[];return h.join(" ")}function ur(l){return l.getAttribute&&l.getAttribute("class")||""}function ua(l){return Array.isArray(l)?l:typeof l=="string"?l.match(Mt)||[]:[]}m.fn.extend({addClass:function(l){var h,_,S,A,w,L;return C(l)?this.each(function(q){m(this).addClass(l.call(this,q,ur(this)))}):(h=ua(l),h.length?this.each(function(){if(S=ur(this),_=this.nodeType===1&&" "+cr(S)+" ",_){for(w=0;w<h.length;w++)A=h[w],_.indexOf(" "+A+" ")<0&&(_+=A+" ");L=cr(_),S!==L&&this.setAttribute("class",L)}}):this)},removeClass:function(l){var h,_,S,A,w,L;return C(l)?this.each(function(q){m(this).removeClass(l.call(this,q,ur(this)))}):arguments.length?(h=ua(l),h.length?this.each(function(){if(S=ur(this),_=this.nodeType===1&&" "+cr(S)+" ",_){for(w=0;w<h.length;w++)for(A=h[w];_.indexOf(" "+A+" ")>-1;)_=_.replace(" "+A+" "," ");L=cr(_),S!==L&&this.setAttribute("class",L)}}):this):this.attr("class","")},toggleClass:function(l,h){var _,S,A,w,L=typeof l,q=L==="string"||Array.isArray(l);return C(l)?this.each(function(G){m(this).toggleClass(l.call(this,G,ur(this),h),h)}):typeof h=="boolean"&&q?h?this.addClass(l):this.removeClass(l):(_=ua(l),this.each(function(){if(q)for(w=m(this),A=0;A<_.length;A++)S=_[A],w.hasClass(S)?w.removeClass(S):w.addClass(S);else(l===void 0||L==="boolean")&&(S=ur(this),S&&Z.set(this,"__className__",S),this.setAttribute&&this.setAttribute("class",S||l===!1?"":Z.get(this,"__className__")||""))}))},hasClass:function(l){var h,_,S=0;for(h=" "+l+" ";_=this[S++];)if(_.nodeType===1&&(" "+cr(ur(_))+" ").indexOf(h)>-1)return!0;return!1}});var el=/\r/g;m.fn.extend({val:function(l){var h,_,S,A=this[0];return arguments.length?(S=C(l),this.each(function(w){var L;this.nodeType===1&&(S?L=l.call(this,w,m(this).val()):L=l,L==null?L="":typeof L=="number"?L+="":Array.isArray(L)&&(L=m.map(L,function(q){return q==null?"":q+""})),h=m.valHooks[this.type]||m.valHooks[this.nodeName.toLowerCase()],(!h||!("set"in h)||h.set(this,L,"value")===void 0)&&(this.value=L))})):A?(h=m.valHooks[A.type]||m.valHooks[A.nodeName.toLowerCase()],h&&"get"in h&&(_=h.get(A,"value"))!==void 0?_:(_=A.value,typeof _=="string"?_.replace(el,""):_??"")):void 0}}),m.extend({valHooks:{option:{get:function(l){var h=m.find.attr(l,"value");return h??cr(m.text(l))}},select:{get:function(l){var h,_,S,A=l.options,w=l.selectedIndex,L=l.type==="select-one",q=L?null:[],G=L?w+1:A.length;for(w<0?S=G:S=L?w:0;S<G;S++)if(_=A[S],(_.selected||S===w)&&!_.disabled&&(!_.parentNode.disabled||!D(_.parentNode,"optgroup"))){if(h=m(_).val(),L)return h;q.push(h)}return q},set:function(l,h){for(var _,S,A=l.options,w=m.makeArray(h),L=A.length;L--;)S=A[L],(S.selected=m.inArray(m.valHooks.option.get(S),w)>-1)&&(_=!0);return _||(l.selectedIndex=-1),w}}}}),m.each(["radio","checkbox"],function(){m.valHooks[this]={set:function(l,h){if(Array.isArray(h))return l.checked=m.inArray(m(l).val(),h)>-1}},b.checkOn||(m.valHooks[this].get=function(l){return l.getAttribute("value")===null?"on":l.value})});var is=e.location,fa={guid:Date.now()},uo=/\?/;m.parseXML=function(l){var h,_;if(!l||typeof l!="string")return null;try{h=new e.DOMParser().parseFromString(l,"text/xml")}catch{}return _=h&&h.getElementsByTagName("parsererror")[0],(!h||_)&&m.error("Invalid XML: "+(_?m.map(_.childNodes,function(S){return S.textContent}).join(`
`):l)),h};var tl=/^(?:focusinfocus|focusoutblur)$/,nl=function(l){l.stopPropagation()};m.extend(m.event,{trigger:function(l,h,_,S){var A,w,L,q,G,ee,de,_e,ae=[_||M],Ne=v.call(l,"type")?l.type:l,Ze=v.call(l,"namespace")?l.namespace.split("."):[];if(w=_e=L=_=_||M,!(_.nodeType===3||_.nodeType===8)&&!tl.test(Ne+m.event.triggered)&&(Ne.indexOf(".")>-1&&(Ze=Ne.split("."),Ne=Ze.shift(),Ze.sort()),G=Ne.indexOf(":")<0&&"on"+Ne,l=l[m.expando]?l:new m.Event(Ne,typeof l=="object"&&l),l.isTrigger=S?2:3,l.namespace=Ze.join("."),l.rnamespace=l.namespace?new RegExp("(^|\\.)"+Ze.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,l.result=void 0,l.target||(l.target=_),h=h==null?[l]:m.makeArray(h,[l]),de=m.event.special[Ne]||{},!(!S&&de.trigger&&de.trigger.apply(_,h)===!1))){if(!S&&!de.noBubble&&!E(_)){for(q=de.delegateType||Ne,tl.test(q+Ne)||(w=w.parentNode);w;w=w.parentNode)ae.push(w),L=w;L===(_.ownerDocument||M)&&ae.push(L.defaultView||L.parentWindow||e)}for(A=0;(w=ae[A++])&&!l.isPropagationStopped();)_e=w,l.type=A>1?q:de.bindType||Ne,ee=(Z.get(w,"events")||Object.create(null))[l.type]&&Z.get(w,"handle"),ee&&ee.apply(w,h),ee=G&&w[G],ee&&ee.apply&&k(w)&&(l.result=ee.apply(w,h),l.result===!1&&l.preventDefault());return l.type=Ne,!S&&!l.isDefaultPrevented()&&(!de._default||de._default.apply(ae.pop(),h)===!1)&&k(_)&&G&&C(_[Ne])&&!E(_)&&(L=_[G],L&&(_[G]=null),m.event.triggered=Ne,l.isPropagationStopped()&&_e.addEventListener(Ne,nl),_[Ne](),l.isPropagationStopped()&&_e.removeEventListener(Ne,nl),m.event.triggered=void 0,L&&(_[G]=L)),l.result}},simulate:function(l,h,_){var S=m.extend(new m.Event,_,{type:l,isSimulated:!0});m.event.trigger(S,null,h)}}),m.fn.extend({trigger:function(l,h){return this.each(function(){m.event.trigger(l,h,this)})},triggerHandler:function(l,h){var _=this[0];if(_)return m.event.trigger(l,h,_,!0)}});var Uc=/\[\]$/,ha=/\r?\n/g,Oc=/^(?:submit|button|image|reset|file)$/i,Fc=/^(?:input|select|textarea|keygen)/i;function da(l,h,_,S){var A;if(Array.isArray(h))m.each(h,function(w,L){_||Uc.test(l)?S(l,L):da(l+"["+(typeof L=="object"&&L!=null?w:"")+"]",L,_,S)});else if(!_&&B(h)==="object")for(A in h)da(l+"["+A+"]",h[A],_,S);else S(l,h)}m.param=function(l,h){var _,S=[],A=function(w,L){var q=C(L)?L():L;S[S.length]=encodeURIComponent(w)+"="+encodeURIComponent(q??"")};if(l==null)return"";if(Array.isArray(l)||l.jquery&&!m.isPlainObject(l))m.each(l,function(){A(this.name,this.value)});else for(_ in l)da(_,l[_],h,A);return S.join("&")},m.fn.extend({serialize:function(){return m.param(this.serializeArray())},serializeArray:function(){return this.map(function(){var l=m.prop(this,"elements");return l?m.makeArray(l):this}).filter(function(){var l=this.type;return this.name&&!m(this).is(":disabled")&&Fc.test(this.nodeName)&&!Oc.test(l)&&(this.checked||!ke.test(l))}).map(function(l,h){var _=m(this).val();return _==null?null:Array.isArray(_)?m.map(_,function(S){return{name:h.name,value:S.replace(ha,`\r
`)}}):{name:h.name,value:_.replace(ha,`\r
`)}}).get()}});var Bc=/%20/g,pa=/#.*$/,Hc=/([?&])_=[^&]*/,zc=/^(.*?):[ \t]*([^\r\n]*)$/mg,Gc=/^(?:about|app|app-storage|.+-extension|file|res|widget):$/,kc=/^(?:GET|HEAD)$/,Vc=/^\/\//,un={},sn={},il="*/".concat("*"),ma=M.createElement("a");ma.href=is.href;function rl(l){return function(h,_){typeof h!="string"&&(_=h,h="*");var S,A=0,w=h.toLowerCase().match(Mt)||[];if(C(_))for(;S=w[A++];)S[0]==="+"?(S=S.slice(1)||"*",(l[S]=l[S]||[]).unshift(_)):(l[S]=l[S]||[]).push(_)}}function sl(l,h,_,S){var A={},w=l===sn;function L(q){var G;return A[q]=!0,m.each(l[q]||[],function(ee,de){var _e=de(h,_,S);if(typeof _e=="string"&&!w&&!A[_e])return h.dataTypes.unshift(_e),L(_e),!1;if(w)return!(G=_e)}),G}return L(h.dataTypes[0])||!A["*"]&&L("*")}function ga(l,h){var _,S,A=m.ajaxSettings.flatOptions||{};for(_ in h)h[_]!==void 0&&((A[_]?l:S||(S={}))[_]=h[_]);return S&&m.extend(!0,l,S),l}function Wc(l,h,_){for(var S,A,w,L,q=l.contents,G=l.dataTypes;G[0]==="*";)G.shift(),S===void 0&&(S=l.mimeType||h.getResponseHeader("Content-Type"));if(S){for(A in q)if(q[A]&&q[A].test(S)){G.unshift(A);break}}if(G[0]in _)w=G[0];else{for(A in _){if(!G[0]||l.converters[A+" "+G[0]]){w=A;break}L||(L=A)}w=w||L}if(w)return w!==G[0]&&G.unshift(w),_[w]}function ol(l,h,_,S){var A,w,L,q,G,ee={},de=l.dataTypes.slice();if(de[1])for(L in l.converters)ee[L.toLowerCase()]=l.converters[L];for(w=de.shift();w;)if(l.responseFields[w]&&(_[l.responseFields[w]]=h),!G&&S&&l.dataFilter&&(h=l.dataFilter(h,l.dataType)),G=w,w=de.shift(),w){if(w==="*")w=G;else if(G!=="*"&&G!==w){if(L=ee[G+" "+w]||ee["* "+w],!L){for(A in ee)if(q=A.split(" "),q[1]===w&&(L=ee[G+" "+q[0]]||ee["* "+q[0]],L)){L===!0?L=ee[A]:ee[A]!==!0&&(w=q[0],de.unshift(q[1]));break}}if(L!==!0)if(L&&l.throws)h=L(h);else try{h=L(h)}catch(_e){return{state:"parsererror",error:L?_e:"No conversion from "+G+" to "+w}}}}return{state:"success",data:h}}m.extend({active:0,lastModified:{},etag:{},ajaxSettings:{url:is.href,type:"GET",isLocal:Gc.test(is.protocol),global:!0,processData:!0,async:!0,contentType:"application/x-www-form-urlencoded; charset=UTF-8",accepts:{"*":il,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{xml:/\bxml\b/,html:/\bhtml/,json:/\bjson\b/},responseFields:{xml:"responseXML",text:"responseText",json:"responseJSON"},converters:{"* text":String,"text html":!0,"text json":JSON.parse,"text xml":m.parseXML},flatOptions:{url:!0,context:!0}},ajaxSetup:function(l,h){return h?ga(ga(l,m.ajaxSettings),h):ga(m.ajaxSettings,l)},ajaxPrefilter:rl(un),ajaxTransport:rl(sn),ajax:function(l,h){typeof l=="object"&&(h=l,l=void 0),h=h||{};var _,S,A,w,L,q,G,ee,de,_e,ae=m.ajaxSetup({},h),Ne=ae.context||ae,Ze=ae.context&&(Ne.nodeType||Ne.jquery)?m(Ne):m.event,Ct=m.Deferred(),wt=m.Callbacks("once memory"),Un=ae.statusCode||{},Mn={},Oi={},Fi="canceled",Vt={readyState:0,getResponseHeader:function(Wt){var ln;if(G){if(!w)for(w={};ln=zc.exec(A);)w[ln[1].toLowerCase()+" "]=(w[ln[1].toLowerCase()+" "]||[]).concat(ln[2]);ln=w[Wt.toLowerCase()+" "]}return ln==null?null:ln.join(", ")},getAllResponseHeaders:function(){return G?A:null},setRequestHeader:function(Wt,ln){return G==null&&(Wt=Oi[Wt.toLowerCase()]=Oi[Wt.toLowerCase()]||Wt,Mn[Wt]=ln),this},overrideMimeType:function(Wt){return G==null&&(ae.mimeType=Wt),this},statusCode:function(Wt){var ln;if(Wt)if(G)Vt.always(Wt[Vt.status]);else for(ln in Wt)Un[ln]=[Un[ln],Wt[ln]];return this},abort:function(Wt){var ln=Wt||Fi;return _&&_.abort(ln),fr(0,ln),this}};if(Ct.promise(Vt),ae.url=((l||ae.url||is.href)+"").replace(Vc,is.protocol+"//"),ae.type=h.method||h.type||ae.method||ae.type,ae.dataTypes=(ae.dataType||"*").toLowerCase().match(Mt)||[""],ae.crossDomain==null){q=M.createElement("a");try{q.href=ae.url,q.href=q.href,ae.crossDomain=ma.protocol+"//"+ma.host!=q.protocol+"//"+q.host}catch{ae.crossDomain=!0}}if(ae.data&&ae.processData&&typeof ae.data!="string"&&(ae.data=m.param(ae.data,ae.traditional)),sl(un,ae,h,Vt),G)return Vt;ee=m.event&&ae.global,ee&&m.active++===0&&m.event.trigger("ajaxStart"),ae.type=ae.type.toUpperCase(),ae.hasContent=!kc.test(ae.type),S=ae.url.replace(pa,""),ae.hasContent?ae.data&&ae.processData&&(ae.contentType||"").indexOf("application/x-www-form-urlencoded")===0&&(ae.data=ae.data.replace(Bc,"+")):(_e=ae.url.slice(S.length),ae.data&&(ae.processData||typeof ae.data=="string")&&(S+=(uo.test(S)?"&":"?")+ae.data,delete ae.data),ae.cache===!1&&(S=S.replace(Hc,"$1"),_e=(uo.test(S)?"&":"?")+"_="+fa.guid+++_e),ae.url=S+_e),ae.ifModified&&(m.lastModified[S]&&Vt.setRequestHeader("If-Modified-Since",m.lastModified[S]),m.etag[S]&&Vt.setRequestHeader("If-None-Match",m.etag[S])),(ae.data&&ae.hasContent&&ae.contentType!==!1||h.contentType)&&Vt.setRequestHeader("Content-Type",ae.contentType),Vt.setRequestHeader("Accept",ae.dataTypes[0]&&ae.accepts[ae.dataTypes[0]]?ae.accepts[ae.dataTypes[0]]+(ae.dataTypes[0]!=="*"?", "+il+"; q=0.01":""):ae.accepts["*"]);for(de in ae.headers)Vt.setRequestHeader(de,ae.headers[de]);if(ae.beforeSend&&(ae.beforeSend.call(Ne,Vt,ae)===!1||G))return Vt.abort();if(Fi="abort",wt.add(ae.complete),Vt.done(ae.success),Vt.fail(ae.error),_=sl(sn,ae,h,Vt),!_)fr(-1,"No Transport");else{if(Vt.readyState=1,ee&&Ze.trigger("ajaxSend",[Vt,ae]),G)return Vt;ae.async&&ae.timeout>0&&(L=e.setTimeout(function(){Vt.abort("timeout")},ae.timeout));try{G=!1,_.send(Mn,fr)}catch(Wt){if(G)throw Wt;fr(-1,Wt)}}function fr(Wt,ln,Rs,ho){var bi,Cr,mi,Zi,hr,Zn=ln;G||(G=!0,L&&e.clearTimeout(L),_=void 0,A=ho||"",Vt.readyState=Wt>0?4:0,bi=Wt>=200&&Wt<300||Wt===304,Rs&&(Zi=Wc(ae,Vt,Rs)),!bi&&m.inArray("script",ae.dataTypes)>-1&&m.inArray("json",ae.dataTypes)<0&&(ae.converters["text script"]=function(){}),Zi=ol(ae,Zi,Vt,bi),bi?(ae.ifModified&&(hr=Vt.getResponseHeader("Last-Modified"),hr&&(m.lastModified[S]=hr),hr=Vt.getResponseHeader("etag"),hr&&(m.etag[S]=hr)),Wt===204||ae.type==="HEAD"?Zn="nocontent":Wt===304?Zn="notmodified":(Zn=Zi.state,Cr=Zi.data,mi=Zi.error,bi=!mi)):(mi=Zn,(Wt||!Zn)&&(Zn="error",Wt<0&&(Wt=0))),Vt.status=Wt,Vt.statusText=(ln||Zn)+"",bi?Ct.resolveWith(Ne,[Cr,Zn,Vt]):Ct.rejectWith(Ne,[Vt,Zn,mi]),Vt.statusCode(Un),Un=void 0,ee&&Ze.trigger(bi?"ajaxSuccess":"ajaxError",[Vt,ae,bi?Cr:mi]),wt.fireWith(Ne,[Vt,Zn]),ee&&(Ze.trigger("ajaxComplete",[Vt,ae]),--m.active||m.event.trigger("ajaxStop")))}return Vt},getJSON:function(l,h,_){return m.get(l,h,_,"json")},getScript:function(l,h){return m.get(l,void 0,h,"script")}}),m.each(["get","post"],function(l,h){m[h]=function(_,S,A,w){return C(S)&&(w=w||A,A=S,S=void 0),m.ajax(m.extend({url:_,type:h,dataType:w,data:S,success:A},m.isPlainObject(_)&&_))}}),m.ajaxPrefilter(function(l){var h;for(h in l.headers)h.toLowerCase()==="content-type"&&(l.contentType=l.headers[h]||"")}),m._evalUrl=function(l,h,_){return m.ajax({url:l,type:"GET",dataType:"script",cache:!0,async:!1,global:!1,converters:{"text script":function(){}},dataFilter:function(S){m.globalEval(S,h,_)}})},m.fn.extend({wrapAll:function(l){var h;return this[0]&&(C(l)&&(l=l.call(this[0])),h=m(l,this[0].ownerDocument).eq(0).clone(!0),this[0].parentNode&&h.insertBefore(this[0]),h.map(function(){for(var _=this;_.firstElementChild;)_=_.firstElementChild;return _}).append(this)),this},wrapInner:function(l){return C(l)?this.each(function(h){m(this).wrapInner(l.call(this,h))}):this.each(function(){var h=m(this),_=h.contents();_.length?_.wrapAll(l):h.append(l)})},wrap:function(l){var h=C(l);return this.each(function(_){m(this).wrapAll(h?l.call(this,_):l)})},unwrap:function(l){return this.parent(l).not("body").each(function(){m(this).replaceWith(this.childNodes)}),this}}),m.expr.pseudos.hidden=function(l){return!m.expr.pseudos.visible(l)},m.expr.pseudos.visible=function(l){return!!(l.offsetWidth||l.offsetHeight||l.getClientRects().length)},m.ajaxSettings.xhr=function(){try{return new e.XMLHttpRequest}catch{}};var Xc={0:200,1223:204},Sn=m.ajaxSettings.xhr();b.cors=!!Sn&&"withCredentials"in Sn,b.ajax=Sn=!!Sn,m.ajaxTransport(function(l){var h,_;if(b.cors||Sn&&!l.crossDomain)return{send:function(S,A){var w,L=l.xhr();if(L.open(l.type,l.url,l.async,l.username,l.password),l.xhrFields)for(w in l.xhrFields)L[w]=l.xhrFields[w];l.mimeType&&L.overrideMimeType&&L.overrideMimeType(l.mimeType),!l.crossDomain&&!S["X-Requested-With"]&&(S["X-Requested-With"]="XMLHttpRequest");for(w in S)L.setRequestHeader(w,S[w]);h=function(q){return function(){h&&(h=_=L.onload=L.onerror=L.onabort=L.ontimeout=L.onreadystatechange=null,q==="abort"?L.abort():q==="error"?typeof L.status!="number"?A(0,"error"):A(L.status,L.statusText):A(Xc[L.status]||L.status,L.statusText,(L.responseType||"text")!=="text"||typeof L.responseText!="string"?{binary:L.response}:{text:L.responseText},L.getAllResponseHeaders()))}},L.onload=h(),_=L.onerror=L.ontimeout=h("error"),L.onabort!==void 0?L.onabort=_:L.onreadystatechange=function(){L.readyState===4&&e.setTimeout(function(){h&&_()})},h=h("abort");try{L.send(l.hasContent&&l.data||null)}catch(q){if(h)throw q}},abort:function(){h&&h()}}}),m.ajaxPrefilter(function(l){l.crossDomain&&(l.contents.script=!1)}),m.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/\b(?:java|ecma)script\b/},converters:{"text script":function(l){return m.globalEval(l),l}}}),m.ajaxPrefilter("script",function(l){l.cache===void 0&&(l.cache=!1),l.crossDomain&&(l.type="GET")}),m.ajaxTransport("script",function(l){if(l.crossDomain||l.scriptAttrs){var h,_;return{send:function(S,A){h=m("<script>").attr(l.scriptAttrs||{}).prop({charset:l.scriptCharset,src:l.url}).on("load error",_=function(w){h.remove(),_=null,w&&A(w.type==="error"?404:200,w.type)}),M.head.appendChild(h[0])},abort:function(){_&&_()}}}});var fo=[],$i=/(=)\?(?=&|$)|\?\?/;m.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var l=fo.pop()||m.expando+"_"+fa.guid++;return this[l]=!0,l}}),m.ajaxPrefilter("json jsonp",function(l,h,_){var S,A,w,L=l.jsonp!==!1&&($i.test(l.url)?"url":typeof l.data=="string"&&(l.contentType||"").indexOf("application/x-www-form-urlencoded")===0&&$i.test(l.data)&&"data");if(L||l.dataTypes[0]==="jsonp")return S=l.jsonpCallback=C(l.jsonpCallback)?l.jsonpCallback():l.jsonpCallback,L?l[L]=l[L].replace($i,"$1"+S):l.jsonp!==!1&&(l.url+=(uo.test(l.url)?"&":"?")+l.jsonp+"="+S),l.converters["script json"]=function(){return w||m.error(S+" was not called"),w[0]},l.dataTypes[0]="json",A=e[S],e[S]=function(){w=arguments},_.always(function(){A===void 0?m(e).removeProp(S):e[S]=A,l[S]&&(l.jsonpCallback=h.jsonpCallback,fo.push(S)),w&&C(A)&&A(w[0]),w=A=void 0}),"script"}),b.createHTMLDocument=function(){var l=M.implementation.createHTMLDocument("").body;return l.innerHTML="<form></form><form></form>",l.childNodes.length===2}(),m.parseHTML=function(l,h,_){if(typeof l!="string")return[];typeof h=="boolean"&&(_=h,h=!1);var S,A,w;return h||(b.createHTMLDocument?(h=M.implementation.createHTMLDocument(""),S=h.createElement("base"),S.href=M.location.href,h.head.appendChild(S)):h=M),A=me.exec(l),w=!_&&[],A?[h.createElement(A[1])]:(A=qn([l],h,w),w&&w.length&&m(w).remove(),m.merge([],A.childNodes))},m.fn.load=function(l,h,_){var S,A,w,L=this,q=l.indexOf(" ");return q>-1&&(S=cr(l.slice(q)),l=l.slice(0,q)),C(h)?(_=h,h=void 0):h&&typeof h=="object"&&(A="POST"),L.length>0&&m.ajax({url:l,type:A||"GET",dataType:"html",data:h}).done(function(G){w=arguments,L.html(S?m("<div>").append(m.parseHTML(G)).find(S):G)}).always(_&&function(G,ee){L.each(function(){_.apply(this,w||[G.responseText,ee,G])})}),this},m.expr.pseudos.animated=function(l){return m.grep(m.timers,function(h){return l===h.elem}).length},m.offset={setOffset:function(l,h,_){var S,A,w,L,q,G,ee,de=m.css(l,"position"),_e=m(l),ae={};de==="static"&&(l.style.position="relative"),q=_e.offset(),w=m.css(l,"top"),G=m.css(l,"left"),ee=(de==="absolute"||de==="fixed")&&(w+G).indexOf("auto")>-1,ee?(S=_e.position(),L=S.top,A=S.left):(L=parseFloat(w)||0,A=parseFloat(G)||0),C(h)&&(h=h.call(l,_,m.extend({},q))),h.top!=null&&(ae.top=h.top-q.top+L),h.left!=null&&(ae.left=h.left-q.left+A),"using"in h?h.using.call(l,ae):_e.css(ae)}},m.fn.extend({offset:function(l){if(arguments.length)return l===void 0?this:this.each(function(A){m.offset.setOffset(this,l,A)});var h,_,S=this[0];if(S)return S.getClientRects().length?(h=S.getBoundingClientRect(),_=S.ownerDocument.defaultView,{top:h.top+_.pageYOffset,left:h.left+_.pageXOffset}):{top:0,left:0}},position:function(){if(this[0]){var l,h,_,S=this[0],A={top:0,left:0};if(m.css(S,"position")==="fixed")h=S.getBoundingClientRect();else{for(h=this.offset(),_=S.ownerDocument,l=S.offsetParent||_.documentElement;l&&(l===_.body||l===_.documentElement)&&m.css(l,"position")==="static";)l=l.parentNode;l&&l!==S&&l.nodeType===1&&(A=m(l).offset(),A.top+=m.css(l,"borderTopWidth",!0),A.left+=m.css(l,"borderLeftWidth",!0))}return{top:h.top-A.top-m.css(S,"marginTop",!0),left:h.left-A.left-m.css(S,"marginLeft",!0)}}},offsetParent:function(){return this.map(function(){for(var l=this.offsetParent;l&&m.css(l,"position")==="static";)l=l.offsetParent;return l||Fe})}}),m.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(l,h){var _=h==="pageYOffset";m.fn[l]=function(S){return pt(this,function(A,w,L){var q;if(E(A)?q=A:A.nodeType===9&&(q=A.defaultView),L===void 0)return q?q[h]:A[w];q?q.scrollTo(_?q.pageXOffset:L,_?L:q.pageYOffset):A[w]=L},l,S,arguments.length)}}),m.each(["top","left"],function(l,h){m.cssHooks[h]=ht(b.pixelPosition,function(_,S){if(S)return S=at(_,h),ue.test(S)?m(_).position()[h]+"px":S})}),m.each({Height:"height",Width:"width"},function(l,h){m.each({padding:"inner"+l,content:h,"":"outer"+l},function(_,S){m.fn[S]=function(A,w){var L=arguments.length&&(_||typeof A!="boolean"),q=_||(A===!0||w===!0?"margin":"border");return pt(this,function(G,ee,de){var _e;return E(G)?S.indexOf("outer")===0?G["inner"+l]:G.document.documentElement["client"+l]:G.nodeType===9?(_e=G.documentElement,Math.max(G.body["scroll"+l],_e["scroll"+l],G.body["offset"+l],_e["offset"+l],_e["client"+l])):de===void 0?m.css(G,ee,q):m.style(G,ee,de,q)},h,L?A:void 0,L)}})}),m.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],function(l,h){m.fn[h]=function(_){return this.on(h,_)}}),m.fn.extend({bind:function(l,h,_){return this.on(l,null,h,_)},unbind:function(l,h){return this.off(l,null,h)},delegate:function(l,h,_,S){return this.on(h,l,_,S)},undelegate:function(l,h,_){return arguments.length===1?this.off(l,"**"):this.off(h,l||"**",_)},hover:function(l,h){return this.on("mouseenter",l).on("mouseleave",h||l)}}),m.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "),function(l,h){m.fn[h]=function(_,S){return arguments.length>0?this.on(h,null,_,S):this.trigger(h)}});var al=/^[\s\uFEFF\xA0]+|([^\s\uFEFF\xA0])[\s\uFEFF\xA0]+$/g;m.proxy=function(l,h){var _,S,A;if(typeof h=="string"&&(_=l[h],h=l,l=_),!!C(l))return S=a.call(arguments,2),A=function(){return l.apply(h||this,S.concat(a.call(arguments)))},A.guid=l.guid=l.guid||m.guid++,A},m.holdReady=function(l){l?m.readyWait++:m.ready(!0)},m.isArray=Array.isArray,m.parseJSON=JSON.parse,m.nodeName=D,m.isFunction=C,m.isWindow=E,m.camelCase=en,m.type=B,m.now=Date.now,m.isNumeric=function(l){var h=m.type(l);return(h==="number"||h==="string")&&!isNaN(l-parseFloat(l))},m.trim=function(l){return l==null?"":(l+"").replace(al,"$1")};var _a=e.jQuery,pi=e.$;return m.noConflict=function(l){return e.$===m&&(e.$=pi),l&&e.jQuery===m&&(e.jQuery=_a),m},typeof t>"u"&&(e.jQuery=e.$=m),m})})(O1);var wc={exports:{}};/**
 * @license
 * Lodash <https://lodash.com/>
 * Copyright OpenJS Foundation and other contributors <https://openjsf.org/>
 * Released under MIT license <https://lodash.com/license>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 */wc.exports;(function(s,e){(function(){var t,n="4.17.21",r=200,a="Unsupported core-js use. Try https://npms.io/search?q=ponyfill.",c="Expected a function",u="Invalid `variable` option passed into `_.template`",d="__lodash_hash_undefined__",p=500,g="__lodash_placeholder__",v=1,x=2,T=4,b=1,C=2,E=1,M=2,V=4,U=8,B=16,z=32,$=64,m=128,pe=256,D=512,X=30,Te="...",Re=800,xe=16,te=1,ye=2,we=3,ge=1/0,Ue=9007199254740991,Ce=17976931348623157e292,be=NaN,ne=4294967295,me=ne-1,We=ne>>>1,Ye=[["ary",m],["bind",E],["bindKey",M],["curry",U],["curryRight",B],["flip",D],["partial",z],["partialRight",$],["rearg",pe]],je="[object Arguments]",ot="[object Array]",It="[object AsyncFunction]",Pe="[object Boolean]",Oe="[object Date]",Mt="[object DOMException]",gt="[object Error]",le="[object Function]",wn="[object GeneratorFunction]",tt="[object Map]",dt="[object Number]",_t="[object Null]",Yt="[object Object]",pt="[object Promise]",Pt="[object Proxy]",$t="[object RegExp]",tn="[object Set]",en="[object String]",k="[object Symbol]",I="[object Undefined]",Z="[object WeakMap]",Ie="[object WeakSet]",De="[object ArrayBuffer]",He="[object DataView]",rt="[object Float32Array]",Ge="[object Float64Array]",qe="[object Int8Array]",lt="[object Int16Array]",Tt="[object Int32Array]",Fe="[object Uint8Array]",Bt="[object Uint8ClampedArray]",yt="[object Uint16Array]",ct="[object Uint32Array]",ut=/\b__p \+= '';/g,Je=/\b(__p \+=) '' \+/g,Gt=/(__e\(.*?\)|\b__t\)) \+\n'';/g,Q=/&(?:amp|lt|gt|quot|#39);/g,ke=/[&<>"']/g,ze=RegExp(Q.source),Se=RegExp(ke.source),Be=/<%-([\s\S]+?)%>/g,nt=/<%([\s\S]+?)%>/g,kt=/<%=([\s\S]+?)%>/g,xn=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,qn=/^\w*$/,rn=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,pn=/[\\^$.*+?()[\]{}|]/g,Nn=RegExp(pn.source),lr=/^\s+/,Jr=/\s/,Qr=/\{(?:\n\/\* \[wrapped with .+\] \*\/)?\n?/,so=/\{\n\/\* \[wrapped with (.+)\] \*/,es=/,? & /,bs=/[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g,oo=/[()=,{}\[\]\/\s]/,aa=/\\(\\)?/g,ao=/\$\{([^\\}]*(?:\\.[^\\}]*)*)\}/g,lo=/\w*$/,F=/^[-+]0x[0-9a-f]+$/i,se=/^0b[01]+$/i,ue=/^\[object .+?Constructor\]$/,fe=/^0o[0-7]+$/i,he=/^(?:0|[1-9]\d*)$/,$e=/[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g,it=/($^)/,at=/['\n\r\u2028\u2029\\]/g,ht="\\ud800-\\udfff",bt="\\u0300-\\u036f",St="\\ufe20-\\ufe2f",Et="\\u20d0-\\u20ff",mn=bt+St+Et,Ln="\\u2700-\\u27bf",yn="a-z\\xdf-\\xf6\\xf8-\\xff",Ti="\\xac\\xb1\\xd7\\xf7",hn="\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf",Dt="\\u2000-\\u206f",Ar=" \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000",gn="A-Z\\xc0-\\xd6\\xd8-\\xde",_n="\\ufe0e\\ufe0f",Ui=Ti+hn+Dt+Ar,di="['’]",ws="["+ht+"]",Pn="["+Ui+"]",$n="["+mn+"]",br="\\d+",In="["+Ln+"]",wr="["+yn+"]",co="[^"+ht+Ui+br+Ln+yn+gn+"]",ts="\\ud83c[\\udffb-\\udfff]",Ai="(?:"+$n+"|"+ts+")",la="[^"+ht+"]",Rr="(?:\\ud83c[\\udde6-\\uddff]){2}",ca="[\\ud800-\\udbff][\\udc00-\\udfff]",ns="["+gn+"]",cr="\\u200d",ur="(?:"+wr+"|"+co+")",ua="(?:"+ns+"|"+co+")",el="(?:"+di+"(?:d|ll|m|re|s|t|ve))?",is="(?:"+di+"(?:D|LL|M|RE|S|T|VE))?",fa=Ai+"?",uo="["+_n+"]?",tl="(?:"+cr+"(?:"+[la,Rr,ca].join("|")+")"+uo+fa+")*",nl="\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])",Uc="\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])",ha=uo+fa+tl,Oc="(?:"+[In,Rr,ca].join("|")+")"+ha,Fc="(?:"+[la+$n+"?",$n,Rr,ca,ws].join("|")+")",da=RegExp(di,"g"),Bc=RegExp($n,"g"),pa=RegExp(ts+"(?="+ts+")|"+Fc+ha,"g"),Hc=RegExp([ns+"?"+wr+"+"+el+"(?="+[Pn,ns,"$"].join("|")+")",ua+"+"+is+"(?="+[Pn,ns+ur,"$"].join("|")+")",ns+"?"+ur+"+"+el,ns+"+"+is,Uc,nl,br,Oc].join("|"),"g"),zc=RegExp("["+cr+ht+mn+_n+"]"),Gc=/[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/,kc=["Array","Buffer","DataView","Date","Error","Float32Array","Float64Array","Function","Int8Array","Int16Array","Int32Array","Map","Math","Object","Promise","RegExp","Set","String","Symbol","TypeError","Uint8Array","Uint8ClampedArray","Uint16Array","Uint32Array","WeakMap","_","clearTimeout","isFinite","parseInt","setTimeout"],Vc=-1,un={};un[rt]=un[Ge]=un[qe]=un[lt]=un[Tt]=un[Fe]=un[Bt]=un[yt]=un[ct]=!0,un[je]=un[ot]=un[De]=un[Pe]=un[He]=un[Oe]=un[gt]=un[le]=un[tt]=un[dt]=un[Yt]=un[$t]=un[tn]=un[en]=un[Z]=!1;var sn={};sn[je]=sn[ot]=sn[De]=sn[He]=sn[Pe]=sn[Oe]=sn[rt]=sn[Ge]=sn[qe]=sn[lt]=sn[Tt]=sn[tt]=sn[dt]=sn[Yt]=sn[$t]=sn[tn]=sn[en]=sn[k]=sn[Fe]=sn[Bt]=sn[yt]=sn[ct]=!0,sn[gt]=sn[le]=sn[Z]=!1;var il={À:"A",Á:"A",Â:"A",Ã:"A",Ä:"A",Å:"A",à:"a",á:"a",â:"a",ã:"a",ä:"a",å:"a",Ç:"C",ç:"c",Ð:"D",ð:"d",È:"E",É:"E",Ê:"E",Ë:"E",è:"e",é:"e",ê:"e",ë:"e",Ì:"I",Í:"I",Î:"I",Ï:"I",ì:"i",í:"i",î:"i",ï:"i",Ñ:"N",ñ:"n",Ò:"O",Ó:"O",Ô:"O",Õ:"O",Ö:"O",Ø:"O",ò:"o",ó:"o",ô:"o",õ:"o",ö:"o",ø:"o",Ù:"U",Ú:"U",Û:"U",Ü:"U",ù:"u",ú:"u",û:"u",ü:"u",Ý:"Y",ý:"y",ÿ:"y",Æ:"Ae",æ:"ae",Þ:"Th",þ:"th",ß:"ss",Ā:"A",Ă:"A",Ą:"A",ā:"a",ă:"a",ą:"a",Ć:"C",Ĉ:"C",Ċ:"C",Č:"C",ć:"c",ĉ:"c",ċ:"c",č:"c",Ď:"D",Đ:"D",ď:"d",đ:"d",Ē:"E",Ĕ:"E",Ė:"E",Ę:"E",Ě:"E",ē:"e",ĕ:"e",ė:"e",ę:"e",ě:"e",Ĝ:"G",Ğ:"G",Ġ:"G",Ģ:"G",ĝ:"g",ğ:"g",ġ:"g",ģ:"g",Ĥ:"H",Ħ:"H",ĥ:"h",ħ:"h",Ĩ:"I",Ī:"I",Ĭ:"I",Į:"I",İ:"I",ĩ:"i",ī:"i",ĭ:"i",į:"i",ı:"i",Ĵ:"J",ĵ:"j",Ķ:"K",ķ:"k",ĸ:"k",Ĺ:"L",Ļ:"L",Ľ:"L",Ŀ:"L",Ł:"L",ĺ:"l",ļ:"l",ľ:"l",ŀ:"l",ł:"l",Ń:"N",Ņ:"N",Ň:"N",Ŋ:"N",ń:"n",ņ:"n",ň:"n",ŋ:"n",Ō:"O",Ŏ:"O",Ő:"O",ō:"o",ŏ:"o",ő:"o",Ŕ:"R",Ŗ:"R",Ř:"R",ŕ:"r",ŗ:"r",ř:"r",Ś:"S",Ŝ:"S",Ş:"S",Š:"S",ś:"s",ŝ:"s",ş:"s",š:"s",Ţ:"T",Ť:"T",Ŧ:"T",ţ:"t",ť:"t",ŧ:"t",Ũ:"U",Ū:"U",Ŭ:"U",Ů:"U",Ű:"U",Ų:"U",ũ:"u",ū:"u",ŭ:"u",ů:"u",ű:"u",ų:"u",Ŵ:"W",ŵ:"w",Ŷ:"Y",ŷ:"y",Ÿ:"Y",Ź:"Z",Ż:"Z",Ž:"Z",ź:"z",ż:"z",ž:"z",Ĳ:"IJ",ĳ:"ij",Œ:"Oe",œ:"oe",ŉ:"'n",ſ:"s"},ma={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"},rl={"&amp;":"&","&lt;":"<","&gt;":">","&quot;":'"',"&#39;":"'"},sl={"\\":"\\","'":"'","\n":"n","\r":"r","\u2028":"u2028","\u2029":"u2029"},ga=parseFloat,Wc=parseInt,ol=typeof Go=="object"&&Go&&Go.Object===Object&&Go,Xc=typeof self=="object"&&self&&self.Object===Object&&self,Sn=ol||Xc||Function("return this")(),fo=e&&!e.nodeType&&e,$i=fo&&!0&&s&&!s.nodeType&&s,al=$i&&$i.exports===fo,_a=al&&ol.process,pi=function(){try{var O=$i&&$i.require&&$i.require("util").types;return O||_a&&_a.binding&&_a.binding("util")}catch{}}(),l=pi&&pi.isArrayBuffer,h=pi&&pi.isDate,_=pi&&pi.isMap,S=pi&&pi.isRegExp,A=pi&&pi.isSet,w=pi&&pi.isTypedArray;function L(O,j,Y){switch(Y.length){case 0:return O.call(j);case 1:return O.call(j,Y[0]);case 2:return O.call(j,Y[0],Y[1]);case 3:return O.call(j,Y[0],Y[1],Y[2])}return O.apply(j,Y)}function q(O,j,Y,ve){for(var Me=-1,Qe=O==null?0:O.length;++Me<Qe;){var et=O[Me];j(ve,et,Y(et),O)}return ve}function G(O,j){for(var Y=-1,ve=O==null?0:O.length;++Y<ve&&j(O[Y],Y,O)!==!1;);return O}function ee(O,j){for(var Y=O==null?0:O.length;Y--&&j(O[Y],Y,O)!==!1;);return O}function de(O,j){for(var Y=-1,ve=O==null?0:O.length;++Y<ve;)if(!j(O[Y],Y,O))return!1;return!0}function _e(O,j){for(var Y=-1,ve=O==null?0:O.length,Me=0,Qe=[];++Y<ve;){var et=O[Y];j(et,Y,O)&&(Qe[Me++]=et)}return Qe}function ae(O,j){var Y=O==null?0:O.length;return!!Y&&ln(O,j,0)>-1}function Ne(O,j,Y){for(var ve=-1,Me=O==null?0:O.length;++ve<Me;)if(Y(j,O[ve]))return!0;return!1}function Ze(O,j){for(var Y=-1,ve=O==null?0:O.length,Me=Array(ve);++Y<ve;)Me[Y]=j(O[Y],Y,O);return Me}function Ct(O,j){for(var Y=-1,ve=j.length,Me=O.length;++Y<ve;)O[Me+Y]=j[Y];return O}function wt(O,j,Y,ve){var Me=-1,Qe=O==null?0:O.length;for(ve&&Qe&&(Y=O[++Me]);++Me<Qe;)Y=j(Y,O[Me],Me,O);return Y}function Un(O,j,Y,ve){var Me=O==null?0:O.length;for(ve&&Me&&(Y=O[--Me]);Me--;)Y=j(Y,O[Me],Me,O);return Y}function Mn(O,j){for(var Y=-1,ve=O==null?0:O.length;++Y<ve;)if(j(O[Y],Y,O))return!0;return!1}var Oi=Cr("length");function Fi(O){return O.split("")}function Vt(O){return O.match(bs)||[]}function fr(O,j,Y){var ve;return Y(O,function(Me,Qe,et){if(j(Me,Qe,et))return ve=Qe,!1}),ve}function Wt(O,j,Y,ve){for(var Me=O.length,Qe=Y+(ve?1:-1);ve?Qe--:++Qe<Me;)if(j(O[Qe],Qe,O))return Qe;return-1}function ln(O,j,Y){return j===j?jc(O,j,Y):Wt(O,ho,Y)}function Rs(O,j,Y,ve){for(var Me=Y-1,Qe=O.length;++Me<Qe;)if(ve(O[Me],j))return Me;return-1}function ho(O){return O!==O}function bi(O,j){var Y=O==null?0:O.length;return Y?Zn(O,j)/Y:be}function Cr(O){return function(j){return j==null?t:j[O]}}function mi(O){return function(j){return O==null?t:O[j]}}function Zi(O,j,Y,ve,Me){return Me(O,function(Qe,et,Ke){Y=ve?(ve=!1,Qe):j(Y,Qe,et,Ke)}),Y}function hr(O,j){var Y=O.length;for(O.sort(j);Y--;)O[Y]=O[Y].value;return O}function Zn(O,j){for(var Y,ve=-1,Me=O.length;++ve<Me;){var Qe=j(O[ve]);Qe!==t&&(Y=Y===t?Qe:Y+Qe)}return Y}function Cs(O,j){for(var Y=-1,ve=Array(O);++Y<O;)ve[Y]=j(Y);return ve}function Ji(O,j){return Ze(j,function(Y){return[Y,O[Y]]})}function Bi(O){return O&&O.slice(0,cl(O)+1).replace(lr,"")}function ii(O){return function(j){return O(j)}}function va(O,j){return Ze(j,function(Y){return O[Y]})}function Ls(O,j){return O.has(j)}function nn(O,j){for(var Y=-1,ve=O.length;++Y<ve&&ln(j,O[Y],0)>-1;);return Y}function Ps(O,j){for(var Y=O.length;Y--&&ln(j,O[Y],0)>-1;);return Y}function wi(O,j){for(var Y=O.length,ve=0;Y--;)O[Y]===j&&++ve;return ve}var rs=mi(il),qc=mi(ma);function Yc(O){return"\\"+sl[O]}function ll(O,j){return O==null?t:O[j]}function gi(O){return zc.test(O)}function xa(O){return Gc.test(O)}function dr(O){for(var j,Y=[];!(j=O.next()).done;)Y.push(j.value);return Y}function po(O){var j=-1,Y=Array(O.size);return O.forEach(function(ve,Me){Y[++j]=[Me,ve]}),Y}function ss(O,j){return function(Y){return O(j(Y))}}function Ri(O,j){for(var Y=-1,ve=O.length,Me=0,Qe=[];++Y<ve;){var et=O[Y];(et===j||et===g)&&(O[Y]=g,Qe[Me++]=Y)}return Qe}function Lr(O){var j=-1,Y=Array(O.size);return O.forEach(function(ve){Y[++j]=ve}),Y}function ya(O){var j=-1,Y=Array(O.size);return O.forEach(function(ve){Y[++j]=[ve,ve]}),Y}function jc(O,j,Y){for(var ve=Y-1,Me=O.length;++ve<Me;)if(O[ve]===j)return ve;return-1}function mo(O,j,Y){for(var ve=Y+1;ve--;)if(O[ve]===j)return ve;return ve}function pr(O){return gi(O)?ul(O):Oi(O)}function ri(O){return gi(O)?H(O):Fi(O)}function cl(O){for(var j=O.length;j--&&Jr.test(O.charAt(j)););return j}var Sa=mi(rl);function ul(O){for(var j=pa.lastIndex=0;pa.test(O);)++j;return j}function H(O){return O.match(pa)||[]}function J(O){return O.match(Hc)||[]}var oe=function O(j){j=j==null?Sn:ce.defaults(Sn.Object(),j,ce.pick(Sn,kc));var Y=j.Array,ve=j.Date,Me=j.Error,Qe=j.Function,et=j.Math,Ke=j.Object,Nt=j.RegExp,ft=j.String,Ht=j.TypeError,On=Y.prototype,kn=Qe.prototype,Fn=Ke.prototype,si=j["__core-js_shared__"],Qi=kn.toString,At=Fn.hasOwnProperty,qg=0,uh=function(){var i=/[^.]+$/.exec(si&&si.keys&&si.keys.IE_PROTO||"");return i?"Symbol(src)_1."+i:""}(),fl=Fn.toString,Yg=Qi.call(Ke),jg=Sn._,Kg=Nt("^"+Qi.call(At).replace(pn,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$"),hl=al?j.Buffer:t,os=j.Symbol,dl=j.Uint8Array,fh=hl?hl.allocUnsafe:t,pl=ss(Ke.getPrototypeOf,Ke),hh=Ke.create,dh=Fn.propertyIsEnumerable,ml=On.splice,ph=os?os.isConcatSpreadable:t,Ma=os?os.iterator:t,Is=os?os.toStringTag:t,gl=function(){try{var i=Fs(Ke,"defineProperty");return i({},"",{}),i}catch{}}(),$g=j.clearTimeout!==Sn.clearTimeout&&j.clearTimeout,Zg=ve&&ve.now!==Sn.Date.now&&ve.now,Jg=j.setTimeout!==Sn.setTimeout&&j.setTimeout,_l=et.ceil,vl=et.floor,Kc=Ke.getOwnPropertySymbols,Qg=hl?hl.isBuffer:t,mh=j.isFinite,e_=On.join,t_=ss(Ke.keys,Ke),Bn=et.max,Jn=et.min,n_=ve.now,i_=j.parseInt,gh=et.random,r_=On.reverse,$c=Fs(j,"DataView"),Ea=Fs(j,"Map"),Zc=Fs(j,"Promise"),go=Fs(j,"Set"),Ta=Fs(j,"WeakMap"),Aa=Fs(Ke,"create"),xl=Ta&&new Ta,_o={},s_=Bs($c),o_=Bs(Ea),a_=Bs(Zc),l_=Bs(go),c_=Bs(Ta),yl=os?os.prototype:t,ba=yl?yl.valueOf:t,_h=yl?yl.toString:t;function P(i){if(An(i)&&!Lt(i)&&!(i instanceof Kt)){if(i instanceof Hi)return i;if(At.call(i,"__wrapped__"))return vd(i)}return new Hi(i)}var vo=function(){function i(){}return function(o){if(!En(o))return{};if(hh)return hh(o);i.prototype=o;var f=new i;return i.prototype=t,f}}();function Sl(){}function Hi(i,o){this.__wrapped__=i,this.__actions__=[],this.__chain__=!!o,this.__index__=0,this.__values__=t}P.templateSettings={escape:Be,evaluate:nt,interpolate:kt,variable:"",imports:{_:P}},P.prototype=Sl.prototype,P.prototype.constructor=P,Hi.prototype=vo(Sl.prototype),Hi.prototype.constructor=Hi;function Kt(i){this.__wrapped__=i,this.__actions__=[],this.__dir__=1,this.__filtered__=!1,this.__iteratees__=[],this.__takeCount__=ne,this.__views__=[]}function u_(){var i=new Kt(this.__wrapped__);return i.__actions__=_i(this.__actions__),i.__dir__=this.__dir__,i.__filtered__=this.__filtered__,i.__iteratees__=_i(this.__iteratees__),i.__takeCount__=this.__takeCount__,i.__views__=_i(this.__views__),i}function f_(){if(this.__filtered__){var i=new Kt(this);i.__dir__=-1,i.__filtered__=!0}else i=this.clone(),i.__dir__*=-1;return i}function h_(){var i=this.__wrapped__.value(),o=this.__dir__,f=Lt(i),y=o<0,R=f?i.length:0,N=Tv(0,R,this.__views__),W=N.start,K=N.end,ie=K-W,Ee=y?K:W-1,Ae=this.__iteratees__,Le=Ae.length,Xe=0,st=Jn(ie,this.__takeCount__);if(!f||!y&&R==ie&&st==ie)return Gh(i,this.__actions__);var vt=[];e:for(;ie--&&Xe<st;){Ee+=o;for(var Ot=-1,xt=i[Ee];++Ot<Le;){var jt=Ae[Ot],Zt=jt.iteratee,Pi=jt.type,li=Zt(xt);if(Pi==ye)xt=li;else if(!li){if(Pi==te)continue e;break e}}vt[Xe++]=xt}return vt}Kt.prototype=vo(Sl.prototype),Kt.prototype.constructor=Kt;function Ds(i){var o=-1,f=i==null?0:i.length;for(this.clear();++o<f;){var y=i[o];this.set(y[0],y[1])}}function d_(){this.__data__=Aa?Aa(null):{},this.size=0}function p_(i){var o=this.has(i)&&delete this.__data__[i];return this.size-=o?1:0,o}function m_(i){var o=this.__data__;if(Aa){var f=o[i];return f===d?t:f}return At.call(o,i)?o[i]:t}function g_(i){var o=this.__data__;return Aa?o[i]!==t:At.call(o,i)}function __(i,o){var f=this.__data__;return this.size+=this.has(i)?0:1,f[i]=Aa&&o===t?d:o,this}Ds.prototype.clear=d_,Ds.prototype.delete=p_,Ds.prototype.get=m_,Ds.prototype.has=g_,Ds.prototype.set=__;function Pr(i){var o=-1,f=i==null?0:i.length;for(this.clear();++o<f;){var y=i[o];this.set(y[0],y[1])}}function v_(){this.__data__=[],this.size=0}function x_(i){var o=this.__data__,f=Ml(o,i);if(f<0)return!1;var y=o.length-1;return f==y?o.pop():ml.call(o,f,1),--this.size,!0}function y_(i){var o=this.__data__,f=Ml(o,i);return f<0?t:o[f][1]}function S_(i){return Ml(this.__data__,i)>-1}function M_(i,o){var f=this.__data__,y=Ml(f,i);return y<0?(++this.size,f.push([i,o])):f[y][1]=o,this}Pr.prototype.clear=v_,Pr.prototype.delete=x_,Pr.prototype.get=y_,Pr.prototype.has=S_,Pr.prototype.set=M_;function Ir(i){var o=-1,f=i==null?0:i.length;for(this.clear();++o<f;){var y=i[o];this.set(y[0],y[1])}}function E_(){this.size=0,this.__data__={hash:new Ds,map:new(Ea||Pr),string:new Ds}}function T_(i){var o=Nl(this,i).delete(i);return this.size-=o?1:0,o}function A_(i){return Nl(this,i).get(i)}function b_(i){return Nl(this,i).has(i)}function w_(i,o){var f=Nl(this,i),y=f.size;return f.set(i,o),this.size+=f.size==y?0:1,this}Ir.prototype.clear=E_,Ir.prototype.delete=T_,Ir.prototype.get=A_,Ir.prototype.has=b_,Ir.prototype.set=w_;function Ns(i){var o=-1,f=i==null?0:i.length;for(this.__data__=new Ir;++o<f;)this.add(i[o])}function R_(i){return this.__data__.set(i,d),this}function C_(i){return this.__data__.has(i)}Ns.prototype.add=Ns.prototype.push=R_,Ns.prototype.has=C_;function er(i){var o=this.__data__=new Pr(i);this.size=o.size}function L_(){this.__data__=new Pr,this.size=0}function P_(i){var o=this.__data__,f=o.delete(i);return this.size=o.size,f}function I_(i){return this.__data__.get(i)}function D_(i){return this.__data__.has(i)}function N_(i,o){var f=this.__data__;if(f instanceof Pr){var y=f.__data__;if(!Ea||y.length<r-1)return y.push([i,o]),this.size=++f.size,this;f=this.__data__=new Ir(y)}return f.set(i,o),this.size=f.size,this}er.prototype.clear=L_,er.prototype.delete=P_,er.prototype.get=I_,er.prototype.has=D_,er.prototype.set=N_;function vh(i,o){var f=Lt(i),y=!f&&Hs(i),R=!f&&!y&&fs(i),N=!f&&!y&&!R&&Mo(i),W=f||y||R||N,K=W?Cs(i.length,ft):[],ie=K.length;for(var Ee in i)(o||At.call(i,Ee))&&!(W&&(Ee=="length"||R&&(Ee=="offset"||Ee=="parent")||N&&(Ee=="buffer"||Ee=="byteLength"||Ee=="byteOffset")||Or(Ee,ie)))&&K.push(Ee);return K}function xh(i){var o=i.length;return o?i[lu(0,o-1)]:t}function U_(i,o){return Ul(_i(i),Us(o,0,i.length))}function O_(i){return Ul(_i(i))}function Jc(i,o,f){(f!==t&&!tr(i[o],f)||f===t&&!(o in i))&&Dr(i,o,f)}function wa(i,o,f){var y=i[o];(!(At.call(i,o)&&tr(y,f))||f===t&&!(o in i))&&Dr(i,o,f)}function Ml(i,o){for(var f=i.length;f--;)if(tr(i[f][0],o))return f;return-1}function F_(i,o,f,y){return as(i,function(R,N,W){o(y,R,f(R),W)}),y}function yh(i,o){return i&&gr(o,Vn(o),i)}function B_(i,o){return i&&gr(o,xi(o),i)}function Dr(i,o,f){o=="__proto__"&&gl?gl(i,o,{configurable:!0,enumerable:!0,value:f,writable:!0}):i[o]=f}function Qc(i,o){for(var f=-1,y=o.length,R=Y(y),N=i==null;++f<y;)R[f]=N?t:Du(i,o[f]);return R}function Us(i,o,f){return i===i&&(f!==t&&(i=i<=f?i:f),o!==t&&(i=i>=o?i:o)),i}function zi(i,o,f,y,R,N){var W,K=o&v,ie=o&x,Ee=o&T;if(f&&(W=R?f(i,y,R,N):f(i)),W!==t)return W;if(!En(i))return i;var Ae=Lt(i);if(Ae){if(W=bv(i),!K)return _i(i,W)}else{var Le=Qn(i),Xe=Le==le||Le==wn;if(fs(i))return Wh(i,K);if(Le==Yt||Le==je||Xe&&!R){if(W=ie||Xe?{}:cd(i),!K)return ie?mv(i,B_(W,i)):pv(i,yh(W,i))}else{if(!sn[Le])return R?i:{};W=wv(i,Le,K)}}N||(N=new er);var st=N.get(i);if(st)return st;N.set(i,W),Bd(i)?i.forEach(function(xt){W.add(zi(xt,o,f,xt,i,N))}):Od(i)&&i.forEach(function(xt,jt){W.set(jt,zi(xt,o,f,jt,i,N))});var vt=Ee?ie?xu:vu:ie?xi:Vn,Ot=Ae?t:vt(i);return G(Ot||i,function(xt,jt){Ot&&(jt=xt,xt=i[jt]),wa(W,jt,zi(xt,o,f,jt,i,N))}),W}function H_(i){var o=Vn(i);return function(f){return Sh(f,i,o)}}function Sh(i,o,f){var y=f.length;if(i==null)return!y;for(i=Ke(i);y--;){var R=f[y],N=o[R],W=i[R];if(W===t&&!(R in i)||!N(W))return!1}return!0}function Mh(i,o,f){if(typeof i!="function")throw new Ht(c);return Na(function(){i.apply(t,f)},o)}function Ra(i,o,f,y){var R=-1,N=ae,W=!0,K=i.length,ie=[],Ee=o.length;if(!K)return ie;f&&(o=Ze(o,ii(f))),y?(N=Ne,W=!1):o.length>=r&&(N=Ls,W=!1,o=new Ns(o));e:for(;++R<K;){var Ae=i[R],Le=f==null?Ae:f(Ae);if(Ae=y||Ae!==0?Ae:0,W&&Le===Le){for(var Xe=Ee;Xe--;)if(o[Xe]===Le)continue e;ie.push(Ae)}else N(o,Le,y)||ie.push(Ae)}return ie}var as=Kh(mr),Eh=Kh(tu,!0);function z_(i,o){var f=!0;return as(i,function(y,R,N){return f=!!o(y,R,N),f}),f}function El(i,o,f){for(var y=-1,R=i.length;++y<R;){var N=i[y],W=o(N);if(W!=null&&(K===t?W===W&&!Li(W):f(W,K)))var K=W,ie=N}return ie}function G_(i,o,f,y){var R=i.length;for(f=Ut(f),f<0&&(f=-f>R?0:R+f),y=y===t||y>R?R:Ut(y),y<0&&(y+=R),y=f>y?0:zd(y);f<y;)i[f++]=o;return i}function Th(i,o){var f=[];return as(i,function(y,R,N){o(y,R,N)&&f.push(y)}),f}function Yn(i,o,f,y,R){var N=-1,W=i.length;for(f||(f=Cv),R||(R=[]);++N<W;){var K=i[N];o>0&&f(K)?o>1?Yn(K,o-1,f,y,R):Ct(R,K):y||(R[R.length]=K)}return R}var eu=$h(),Ah=$h(!0);function mr(i,o){return i&&eu(i,o,Vn)}function tu(i,o){return i&&Ah(i,o,Vn)}function Tl(i,o){return _e(o,function(f){return Fr(i[f])})}function Os(i,o){o=cs(o,i);for(var f=0,y=o.length;i!=null&&f<y;)i=i[_r(o[f++])];return f&&f==y?i:t}function bh(i,o,f){var y=o(i);return Lt(i)?y:Ct(y,f(i))}function oi(i){return i==null?i===t?I:_t:Is&&Is in Ke(i)?Ev(i):Ov(i)}function nu(i,o){return i>o}function k_(i,o){return i!=null&&At.call(i,o)}function V_(i,o){return i!=null&&o in Ke(i)}function W_(i,o,f){return i>=Jn(o,f)&&i<Bn(o,f)}function iu(i,o,f){for(var y=f?Ne:ae,R=i[0].length,N=i.length,W=N,K=Y(N),ie=1/0,Ee=[];W--;){var Ae=i[W];W&&o&&(Ae=Ze(Ae,ii(o))),ie=Jn(Ae.length,ie),K[W]=!f&&(o||R>=120&&Ae.length>=120)?new Ns(W&&Ae):t}Ae=i[0];var Le=-1,Xe=K[0];e:for(;++Le<R&&Ee.length<ie;){var st=Ae[Le],vt=o?o(st):st;if(st=f||st!==0?st:0,!(Xe?Ls(Xe,vt):y(Ee,vt,f))){for(W=N;--W;){var Ot=K[W];if(!(Ot?Ls(Ot,vt):y(i[W],vt,f)))continue e}Xe&&Xe.push(vt),Ee.push(st)}}return Ee}function X_(i,o,f,y){return mr(i,function(R,N,W){o(y,f(R),N,W)}),y}function Ca(i,o,f){o=cs(o,i),i=dd(i,o);var y=i==null?i:i[_r(ki(o))];return y==null?t:L(y,i,f)}function wh(i){return An(i)&&oi(i)==je}function q_(i){return An(i)&&oi(i)==De}function Y_(i){return An(i)&&oi(i)==Oe}function La(i,o,f,y,R){return i===o?!0:i==null||o==null||!An(i)&&!An(o)?i!==i&&o!==o:j_(i,o,f,y,La,R)}function j_(i,o,f,y,R,N){var W=Lt(i),K=Lt(o),ie=W?ot:Qn(i),Ee=K?ot:Qn(o);ie=ie==je?Yt:ie,Ee=Ee==je?Yt:Ee;var Ae=ie==Yt,Le=Ee==Yt,Xe=ie==Ee;if(Xe&&fs(i)){if(!fs(o))return!1;W=!0,Ae=!1}if(Xe&&!Ae)return N||(N=new er),W||Mo(i)?od(i,o,f,y,R,N):Sv(i,o,ie,f,y,R,N);if(!(f&b)){var st=Ae&&At.call(i,"__wrapped__"),vt=Le&&At.call(o,"__wrapped__");if(st||vt){var Ot=st?i.value():i,xt=vt?o.value():o;return N||(N=new er),R(Ot,xt,f,y,N)}}return Xe?(N||(N=new er),Mv(i,o,f,y,R,N)):!1}function K_(i){return An(i)&&Qn(i)==tt}function ru(i,o,f,y){var R=f.length,N=R,W=!y;if(i==null)return!N;for(i=Ke(i);R--;){var K=f[R];if(W&&K[2]?K[1]!==i[K[0]]:!(K[0]in i))return!1}for(;++R<N;){K=f[R];var ie=K[0],Ee=i[ie],Ae=K[1];if(W&&K[2]){if(Ee===t&&!(ie in i))return!1}else{var Le=new er;if(y)var Xe=y(Ee,Ae,ie,i,o,Le);if(!(Xe===t?La(Ae,Ee,b|C,y,Le):Xe))return!1}}return!0}function Rh(i){if(!En(i)||Pv(i))return!1;var o=Fr(i)?Kg:ue;return o.test(Bs(i))}function $_(i){return An(i)&&oi(i)==$t}function Z_(i){return An(i)&&Qn(i)==tn}function J_(i){return An(i)&&Gl(i.length)&&!!un[oi(i)]}function Ch(i){return typeof i=="function"?i:i==null?yi:typeof i=="object"?Lt(i)?Ih(i[0],i[1]):Ph(i):Zd(i)}function su(i){if(!Da(i))return t_(i);var o=[];for(var f in Ke(i))At.call(i,f)&&f!="constructor"&&o.push(f);return o}function Q_(i){if(!En(i))return Uv(i);var o=Da(i),f=[];for(var y in i)y=="constructor"&&(o||!At.call(i,y))||f.push(y);return f}function ou(i,o){return i<o}function Lh(i,o){var f=-1,y=vi(i)?Y(i.length):[];return as(i,function(R,N,W){y[++f]=o(R,N,W)}),y}function Ph(i){var o=Su(i);return o.length==1&&o[0][2]?fd(o[0][0],o[0][1]):function(f){return f===i||ru(f,i,o)}}function Ih(i,o){return Eu(i)&&ud(o)?fd(_r(i),o):function(f){var y=Du(f,i);return y===t&&y===o?Nu(f,i):La(o,y,b|C)}}function Al(i,o,f,y,R){i!==o&&eu(o,function(N,W){if(R||(R=new er),En(N))ev(i,o,W,f,Al,y,R);else{var K=y?y(Au(i,W),N,W+"",i,o,R):t;K===t&&(K=N),Jc(i,W,K)}},xi)}function ev(i,o,f,y,R,N,W){var K=Au(i,f),ie=Au(o,f),Ee=W.get(ie);if(Ee){Jc(i,f,Ee);return}var Ae=N?N(K,ie,f+"",i,o,W):t,Le=Ae===t;if(Le){var Xe=Lt(ie),st=!Xe&&fs(ie),vt=!Xe&&!st&&Mo(ie);Ae=ie,Xe||st||vt?Lt(K)?Ae=K:Rn(K)?Ae=_i(K):st?(Le=!1,Ae=Wh(ie,!0)):vt?(Le=!1,Ae=Xh(ie,!0)):Ae=[]:Ua(ie)||Hs(ie)?(Ae=K,Hs(K)?Ae=Gd(K):(!En(K)||Fr(K))&&(Ae=cd(ie))):Le=!1}Le&&(W.set(ie,Ae),R(Ae,ie,y,N,W),W.delete(ie)),Jc(i,f,Ae)}function Dh(i,o){var f=i.length;if(f)return o+=o<0?f:0,Or(o,f)?i[o]:t}function Nh(i,o,f){o.length?o=Ze(o,function(N){return Lt(N)?function(W){return Os(W,N.length===1?N[0]:N)}:N}):o=[yi];var y=-1;o=Ze(o,ii(mt()));var R=Lh(i,function(N,W,K){var ie=Ze(o,function(Ee){return Ee(N)});return{criteria:ie,index:++y,value:N}});return hr(R,function(N,W){return dv(N,W,f)})}function tv(i,o){return Uh(i,o,function(f,y){return Nu(i,y)})}function Uh(i,o,f){for(var y=-1,R=o.length,N={};++y<R;){var W=o[y],K=Os(i,W);f(K,W)&&Pa(N,cs(W,i),K)}return N}function nv(i){return function(o){return Os(o,i)}}function au(i,o,f,y){var R=y?Rs:ln,N=-1,W=o.length,K=i;for(i===o&&(o=_i(o)),f&&(K=Ze(i,ii(f)));++N<W;)for(var ie=0,Ee=o[N],Ae=f?f(Ee):Ee;(ie=R(K,Ae,ie,y))>-1;)K!==i&&ml.call(K,ie,1),ml.call(i,ie,1);return i}function Oh(i,o){for(var f=i?o.length:0,y=f-1;f--;){var R=o[f];if(f==y||R!==N){var N=R;Or(R)?ml.call(i,R,1):fu(i,R)}}return i}function lu(i,o){return i+vl(gh()*(o-i+1))}function iv(i,o,f,y){for(var R=-1,N=Bn(_l((o-i)/(f||1)),0),W=Y(N);N--;)W[y?N:++R]=i,i+=f;return W}function cu(i,o){var f="";if(!i||o<1||o>Ue)return f;do o%2&&(f+=i),o=vl(o/2),o&&(i+=i);while(o);return f}function zt(i,o){return bu(hd(i,o,yi),i+"")}function rv(i){return xh(Eo(i))}function sv(i,o){var f=Eo(i);return Ul(f,Us(o,0,f.length))}function Pa(i,o,f,y){if(!En(i))return i;o=cs(o,i);for(var R=-1,N=o.length,W=N-1,K=i;K!=null&&++R<N;){var ie=_r(o[R]),Ee=f;if(ie==="__proto__"||ie==="constructor"||ie==="prototype")return i;if(R!=W){var Ae=K[ie];Ee=y?y(Ae,ie,K):t,Ee===t&&(Ee=En(Ae)?Ae:Or(o[R+1])?[]:{})}wa(K,ie,Ee),K=K[ie]}return i}var Fh=xl?function(i,o){return xl.set(i,o),i}:yi,ov=gl?function(i,o){return gl(i,"toString",{configurable:!0,enumerable:!1,value:Ou(o),writable:!0})}:yi;function av(i){return Ul(Eo(i))}function Gi(i,o,f){var y=-1,R=i.length;o<0&&(o=-o>R?0:R+o),f=f>R?R:f,f<0&&(f+=R),R=o>f?0:f-o>>>0,o>>>=0;for(var N=Y(R);++y<R;)N[y]=i[y+o];return N}function lv(i,o){var f;return as(i,function(y,R,N){return f=o(y,R,N),!f}),!!f}function bl(i,o,f){var y=0,R=i==null?y:i.length;if(typeof o=="number"&&o===o&&R<=We){for(;y<R;){var N=y+R>>>1,W=i[N];W!==null&&!Li(W)&&(f?W<=o:W<o)?y=N+1:R=N}return R}return uu(i,o,yi,f)}function uu(i,o,f,y){var R=0,N=i==null?0:i.length;if(N===0)return 0;o=f(o);for(var W=o!==o,K=o===null,ie=Li(o),Ee=o===t;R<N;){var Ae=vl((R+N)/2),Le=f(i[Ae]),Xe=Le!==t,st=Le===null,vt=Le===Le,Ot=Li(Le);if(W)var xt=y||vt;else Ee?xt=vt&&(y||Xe):K?xt=vt&&Xe&&(y||!st):ie?xt=vt&&Xe&&!st&&(y||!Ot):st||Ot?xt=!1:xt=y?Le<=o:Le<o;xt?R=Ae+1:N=Ae}return Jn(N,me)}function Bh(i,o){for(var f=-1,y=i.length,R=0,N=[];++f<y;){var W=i[f],K=o?o(W):W;if(!f||!tr(K,ie)){var ie=K;N[R++]=W===0?0:W}}return N}function Hh(i){return typeof i=="number"?i:Li(i)?be:+i}function Ci(i){if(typeof i=="string")return i;if(Lt(i))return Ze(i,Ci)+"";if(Li(i))return _h?_h.call(i):"";var o=i+"";return o=="0"&&1/i==-ge?"-0":o}function ls(i,o,f){var y=-1,R=ae,N=i.length,W=!0,K=[],ie=K;if(f)W=!1,R=Ne;else if(N>=r){var Ee=o?null:xv(i);if(Ee)return Lr(Ee);W=!1,R=Ls,ie=new Ns}else ie=o?[]:K;e:for(;++y<N;){var Ae=i[y],Le=o?o(Ae):Ae;if(Ae=f||Ae!==0?Ae:0,W&&Le===Le){for(var Xe=ie.length;Xe--;)if(ie[Xe]===Le)continue e;o&&ie.push(Le),K.push(Ae)}else R(ie,Le,f)||(ie!==K&&ie.push(Le),K.push(Ae))}return K}function fu(i,o){return o=cs(o,i),i=dd(i,o),i==null||delete i[_r(ki(o))]}function zh(i,o,f,y){return Pa(i,o,f(Os(i,o)),y)}function wl(i,o,f,y){for(var R=i.length,N=y?R:-1;(y?N--:++N<R)&&o(i[N],N,i););return f?Gi(i,y?0:N,y?N+1:R):Gi(i,y?N+1:0,y?R:N)}function Gh(i,o){var f=i;return f instanceof Kt&&(f=f.value()),wt(o,function(y,R){return R.func.apply(R.thisArg,Ct([y],R.args))},f)}function hu(i,o,f){var y=i.length;if(y<2)return y?ls(i[0]):[];for(var R=-1,N=Y(y);++R<y;)for(var W=i[R],K=-1;++K<y;)K!=R&&(N[R]=Ra(N[R]||W,i[K],o,f));return ls(Yn(N,1),o,f)}function kh(i,o,f){for(var y=-1,R=i.length,N=o.length,W={};++y<R;){var K=y<N?o[y]:t;f(W,i[y],K)}return W}function du(i){return Rn(i)?i:[]}function pu(i){return typeof i=="function"?i:yi}function cs(i,o){return Lt(i)?i:Eu(i,o)?[i]:_d(on(i))}var cv=zt;function us(i,o,f){var y=i.length;return f=f===t?y:f,!o&&f>=y?i:Gi(i,o,f)}var Vh=$g||function(i){return Sn.clearTimeout(i)};function Wh(i,o){if(o)return i.slice();var f=i.length,y=fh?fh(f):new i.constructor(f);return i.copy(y),y}function mu(i){var o=new i.constructor(i.byteLength);return new dl(o).set(new dl(i)),o}function uv(i,o){var f=o?mu(i.buffer):i.buffer;return new i.constructor(f,i.byteOffset,i.byteLength)}function fv(i){var o=new i.constructor(i.source,lo.exec(i));return o.lastIndex=i.lastIndex,o}function hv(i){return ba?Ke(ba.call(i)):{}}function Xh(i,o){var f=o?mu(i.buffer):i.buffer;return new i.constructor(f,i.byteOffset,i.length)}function qh(i,o){if(i!==o){var f=i!==t,y=i===null,R=i===i,N=Li(i),W=o!==t,K=o===null,ie=o===o,Ee=Li(o);if(!K&&!Ee&&!N&&i>o||N&&W&&ie&&!K&&!Ee||y&&W&&ie||!f&&ie||!R)return 1;if(!y&&!N&&!Ee&&i<o||Ee&&f&&R&&!y&&!N||K&&f&&R||!W&&R||!ie)return-1}return 0}function dv(i,o,f){for(var y=-1,R=i.criteria,N=o.criteria,W=R.length,K=f.length;++y<W;){var ie=qh(R[y],N[y]);if(ie){if(y>=K)return ie;var Ee=f[y];return ie*(Ee=="desc"?-1:1)}}return i.index-o.index}function Yh(i,o,f,y){for(var R=-1,N=i.length,W=f.length,K=-1,ie=o.length,Ee=Bn(N-W,0),Ae=Y(ie+Ee),Le=!y;++K<ie;)Ae[K]=o[K];for(;++R<W;)(Le||R<N)&&(Ae[f[R]]=i[R]);for(;Ee--;)Ae[K++]=i[R++];return Ae}function jh(i,o,f,y){for(var R=-1,N=i.length,W=-1,K=f.length,ie=-1,Ee=o.length,Ae=Bn(N-K,0),Le=Y(Ae+Ee),Xe=!y;++R<Ae;)Le[R]=i[R];for(var st=R;++ie<Ee;)Le[st+ie]=o[ie];for(;++W<K;)(Xe||R<N)&&(Le[st+f[W]]=i[R++]);return Le}function _i(i,o){var f=-1,y=i.length;for(o||(o=Y(y));++f<y;)o[f]=i[f];return o}function gr(i,o,f,y){var R=!f;f||(f={});for(var N=-1,W=o.length;++N<W;){var K=o[N],ie=y?y(f[K],i[K],K,f,i):t;ie===t&&(ie=i[K]),R?Dr(f,K,ie):wa(f,K,ie)}return f}function pv(i,o){return gr(i,Mu(i),o)}function mv(i,o){return gr(i,ad(i),o)}function Rl(i,o){return function(f,y){var R=Lt(f)?q:F_,N=o?o():{};return R(f,i,mt(y,2),N)}}function xo(i){return zt(function(o,f){var y=-1,R=f.length,N=R>1?f[R-1]:t,W=R>2?f[2]:t;for(N=i.length>3&&typeof N=="function"?(R--,N):t,W&&ai(f[0],f[1],W)&&(N=R<3?t:N,R=1),o=Ke(o);++y<R;){var K=f[y];K&&i(o,K,y,N)}return o})}function Kh(i,o){return function(f,y){if(f==null)return f;if(!vi(f))return i(f,y);for(var R=f.length,N=o?R:-1,W=Ke(f);(o?N--:++N<R)&&y(W[N],N,W)!==!1;);return f}}function $h(i){return function(o,f,y){for(var R=-1,N=Ke(o),W=y(o),K=W.length;K--;){var ie=W[i?K:++R];if(f(N[ie],ie,N)===!1)break}return o}}function gv(i,o,f){var y=o&E,R=Ia(i);function N(){var W=this&&this!==Sn&&this instanceof N?R:i;return W.apply(y?f:this,arguments)}return N}function Zh(i){return function(o){o=on(o);var f=gi(o)?ri(o):t,y=f?f[0]:o.charAt(0),R=f?us(f,1).join(""):o.slice(1);return y[i]()+R}}function yo(i){return function(o){return wt(Kd(jd(o).replace(da,"")),i,"")}}function Ia(i){return function(){var o=arguments;switch(o.length){case 0:return new i;case 1:return new i(o[0]);case 2:return new i(o[0],o[1]);case 3:return new i(o[0],o[1],o[2]);case 4:return new i(o[0],o[1],o[2],o[3]);case 5:return new i(o[0],o[1],o[2],o[3],o[4]);case 6:return new i(o[0],o[1],o[2],o[3],o[4],o[5]);case 7:return new i(o[0],o[1],o[2],o[3],o[4],o[5],o[6])}var f=vo(i.prototype),y=i.apply(f,o);return En(y)?y:f}}function _v(i,o,f){var y=Ia(i);function R(){for(var N=arguments.length,W=Y(N),K=N,ie=So(R);K--;)W[K]=arguments[K];var Ee=N<3&&W[0]!==ie&&W[N-1]!==ie?[]:Ri(W,ie);if(N-=Ee.length,N<f)return nd(i,o,Cl,R.placeholder,t,W,Ee,t,t,f-N);var Ae=this&&this!==Sn&&this instanceof R?y:i;return L(Ae,this,W)}return R}function Jh(i){return function(o,f,y){var R=Ke(o);if(!vi(o)){var N=mt(f,3);o=Vn(o),f=function(K){return N(R[K],K,R)}}var W=i(o,f,y);return W>-1?R[N?o[W]:W]:t}}function Qh(i){return Ur(function(o){var f=o.length,y=f,R=Hi.prototype.thru;for(i&&o.reverse();y--;){var N=o[y];if(typeof N!="function")throw new Ht(c);if(R&&!W&&Dl(N)=="wrapper")var W=new Hi([],!0)}for(y=W?y:f;++y<f;){N=o[y];var K=Dl(N),ie=K=="wrapper"?yu(N):t;ie&&Tu(ie[0])&&ie[1]==(m|U|z|pe)&&!ie[4].length&&ie[9]==1?W=W[Dl(ie[0])].apply(W,ie[3]):W=N.length==1&&Tu(N)?W[K]():W.thru(N)}return function(){var Ee=arguments,Ae=Ee[0];if(W&&Ee.length==1&&Lt(Ae))return W.plant(Ae).value();for(var Le=0,Xe=f?o[Le].apply(this,Ee):Ae;++Le<f;)Xe=o[Le].call(this,Xe);return Xe}})}function Cl(i,o,f,y,R,N,W,K,ie,Ee){var Ae=o&m,Le=o&E,Xe=o&M,st=o&(U|B),vt=o&D,Ot=Xe?t:Ia(i);function xt(){for(var jt=arguments.length,Zt=Y(jt),Pi=jt;Pi--;)Zt[Pi]=arguments[Pi];if(st)var li=So(xt),Ii=wi(Zt,li);if(y&&(Zt=Yh(Zt,y,R,st)),N&&(Zt=jh(Zt,N,W,st)),jt-=Ii,st&&jt<Ee){var Cn=Ri(Zt,li);return nd(i,o,Cl,xt.placeholder,f,Zt,Cn,K,ie,Ee-jt)}var nr=Le?f:this,Hr=Xe?nr[i]:i;return jt=Zt.length,K?Zt=Fv(Zt,K):vt&&jt>1&&Zt.reverse(),Ae&&ie<jt&&(Zt.length=ie),this&&this!==Sn&&this instanceof xt&&(Hr=Ot||Ia(Hr)),Hr.apply(nr,Zt)}return xt}function ed(i,o){return function(f,y){return X_(f,i,o(y),{})}}function Ll(i,o){return function(f,y){var R;if(f===t&&y===t)return o;if(f!==t&&(R=f),y!==t){if(R===t)return y;typeof f=="string"||typeof y=="string"?(f=Ci(f),y=Ci(y)):(f=Hh(f),y=Hh(y)),R=i(f,y)}return R}}function gu(i){return Ur(function(o){return o=Ze(o,ii(mt())),zt(function(f){var y=this;return i(o,function(R){return L(R,y,f)})})})}function Pl(i,o){o=o===t?" ":Ci(o);var f=o.length;if(f<2)return f?cu(o,i):o;var y=cu(o,_l(i/pr(o)));return gi(o)?us(ri(y),0,i).join(""):y.slice(0,i)}function vv(i,o,f,y){var R=o&E,N=Ia(i);function W(){for(var K=-1,ie=arguments.length,Ee=-1,Ae=y.length,Le=Y(Ae+ie),Xe=this&&this!==Sn&&this instanceof W?N:i;++Ee<Ae;)Le[Ee]=y[Ee];for(;ie--;)Le[Ee++]=arguments[++K];return L(Xe,R?f:this,Le)}return W}function td(i){return function(o,f,y){return y&&typeof y!="number"&&ai(o,f,y)&&(f=y=t),o=Br(o),f===t?(f=o,o=0):f=Br(f),y=y===t?o<f?1:-1:Br(y),iv(o,f,y,i)}}function Il(i){return function(o,f){return typeof o=="string"&&typeof f=="string"||(o=Vi(o),f=Vi(f)),i(o,f)}}function nd(i,o,f,y,R,N,W,K,ie,Ee){var Ae=o&U,Le=Ae?W:t,Xe=Ae?t:W,st=Ae?N:t,vt=Ae?t:N;o|=Ae?z:$,o&=~(Ae?$:z),o&V||(o&=~(E|M));var Ot=[i,o,R,st,Le,vt,Xe,K,ie,Ee],xt=f.apply(t,Ot);return Tu(i)&&pd(xt,Ot),xt.placeholder=y,md(xt,i,o)}function _u(i){var o=et[i];return function(f,y){if(f=Vi(f),y=y==null?0:Jn(Ut(y),292),y&&mh(f)){var R=(on(f)+"e").split("e"),N=o(R[0]+"e"+(+R[1]+y));return R=(on(N)+"e").split("e"),+(R[0]+"e"+(+R[1]-y))}return o(f)}}var xv=go&&1/Lr(new go([,-0]))[1]==ge?function(i){return new go(i)}:Hu;function id(i){return function(o){var f=Qn(o);return f==tt?po(o):f==tn?ya(o):Ji(o,i(o))}}function Nr(i,o,f,y,R,N,W,K){var ie=o&M;if(!ie&&typeof i!="function")throw new Ht(c);var Ee=y?y.length:0;if(Ee||(o&=~(z|$),y=R=t),W=W===t?W:Bn(Ut(W),0),K=K===t?K:Ut(K),Ee-=R?R.length:0,o&$){var Ae=y,Le=R;y=R=t}var Xe=ie?t:yu(i),st=[i,o,f,y,R,Ae,Le,N,W,K];if(Xe&&Nv(st,Xe),i=st[0],o=st[1],f=st[2],y=st[3],R=st[4],K=st[9]=st[9]===t?ie?0:i.length:Bn(st[9]-Ee,0),!K&&o&(U|B)&&(o&=~(U|B)),!o||o==E)var vt=gv(i,o,f);else o==U||o==B?vt=_v(i,o,K):(o==z||o==(E|z))&&!R.length?vt=vv(i,o,f,y):vt=Cl.apply(t,st);var Ot=Xe?Fh:pd;return md(Ot(vt,st),i,o)}function rd(i,o,f,y){return i===t||tr(i,Fn[f])&&!At.call(y,f)?o:i}function sd(i,o,f,y,R,N){return En(i)&&En(o)&&(N.set(o,i),Al(i,o,t,sd,N),N.delete(o)),i}function yv(i){return Ua(i)?t:i}function od(i,o,f,y,R,N){var W=f&b,K=i.length,ie=o.length;if(K!=ie&&!(W&&ie>K))return!1;var Ee=N.get(i),Ae=N.get(o);if(Ee&&Ae)return Ee==o&&Ae==i;var Le=-1,Xe=!0,st=f&C?new Ns:t;for(N.set(i,o),N.set(o,i);++Le<K;){var vt=i[Le],Ot=o[Le];if(y)var xt=W?y(Ot,vt,Le,o,i,N):y(vt,Ot,Le,i,o,N);if(xt!==t){if(xt)continue;Xe=!1;break}if(st){if(!Mn(o,function(jt,Zt){if(!Ls(st,Zt)&&(vt===jt||R(vt,jt,f,y,N)))return st.push(Zt)})){Xe=!1;break}}else if(!(vt===Ot||R(vt,Ot,f,y,N))){Xe=!1;break}}return N.delete(i),N.delete(o),Xe}function Sv(i,o,f,y,R,N,W){switch(f){case He:if(i.byteLength!=o.byteLength||i.byteOffset!=o.byteOffset)return!1;i=i.buffer,o=o.buffer;case De:return!(i.byteLength!=o.byteLength||!N(new dl(i),new dl(o)));case Pe:case Oe:case dt:return tr(+i,+o);case gt:return i.name==o.name&&i.message==o.message;case $t:case en:return i==o+"";case tt:var K=po;case tn:var ie=y&b;if(K||(K=Lr),i.size!=o.size&&!ie)return!1;var Ee=W.get(i);if(Ee)return Ee==o;y|=C,W.set(i,o);var Ae=od(K(i),K(o),y,R,N,W);return W.delete(i),Ae;case k:if(ba)return ba.call(i)==ba.call(o)}return!1}function Mv(i,o,f,y,R,N){var W=f&b,K=vu(i),ie=K.length,Ee=vu(o),Ae=Ee.length;if(ie!=Ae&&!W)return!1;for(var Le=ie;Le--;){var Xe=K[Le];if(!(W?Xe in o:At.call(o,Xe)))return!1}var st=N.get(i),vt=N.get(o);if(st&&vt)return st==o&&vt==i;var Ot=!0;N.set(i,o),N.set(o,i);for(var xt=W;++Le<ie;){Xe=K[Le];var jt=i[Xe],Zt=o[Xe];if(y)var Pi=W?y(Zt,jt,Xe,o,i,N):y(jt,Zt,Xe,i,o,N);if(!(Pi===t?jt===Zt||R(jt,Zt,f,y,N):Pi)){Ot=!1;break}xt||(xt=Xe=="constructor")}if(Ot&&!xt){var li=i.constructor,Ii=o.constructor;li!=Ii&&"constructor"in i&&"constructor"in o&&!(typeof li=="function"&&li instanceof li&&typeof Ii=="function"&&Ii instanceof Ii)&&(Ot=!1)}return N.delete(i),N.delete(o),Ot}function Ur(i){return bu(hd(i,t,Sd),i+"")}function vu(i){return bh(i,Vn,Mu)}function xu(i){return bh(i,xi,ad)}var yu=xl?function(i){return xl.get(i)}:Hu;function Dl(i){for(var o=i.name+"",f=_o[o],y=At.call(_o,o)?f.length:0;y--;){var R=f[y],N=R.func;if(N==null||N==i)return R.name}return o}function So(i){var o=At.call(P,"placeholder")?P:i;return o.placeholder}function mt(){var i=P.iteratee||Fu;return i=i===Fu?Ch:i,arguments.length?i(arguments[0],arguments[1]):i}function Nl(i,o){var f=i.__data__;return Lv(o)?f[typeof o=="string"?"string":"hash"]:f.map}function Su(i){for(var o=Vn(i),f=o.length;f--;){var y=o[f],R=i[y];o[f]=[y,R,ud(R)]}return o}function Fs(i,o){var f=ll(i,o);return Rh(f)?f:t}function Ev(i){var o=At.call(i,Is),f=i[Is];try{i[Is]=t;var y=!0}catch{}var R=fl.call(i);return y&&(o?i[Is]=f:delete i[Is]),R}var Mu=Kc?function(i){return i==null?[]:(i=Ke(i),_e(Kc(i),function(o){return dh.call(i,o)}))}:zu,ad=Kc?function(i){for(var o=[];i;)Ct(o,Mu(i)),i=pl(i);return o}:zu,Qn=oi;($c&&Qn(new $c(new ArrayBuffer(1)))!=He||Ea&&Qn(new Ea)!=tt||Zc&&Qn(Zc.resolve())!=pt||go&&Qn(new go)!=tn||Ta&&Qn(new Ta)!=Z)&&(Qn=function(i){var o=oi(i),f=o==Yt?i.constructor:t,y=f?Bs(f):"";if(y)switch(y){case s_:return He;case o_:return tt;case a_:return pt;case l_:return tn;case c_:return Z}return o});function Tv(i,o,f){for(var y=-1,R=f.length;++y<R;){var N=f[y],W=N.size;switch(N.type){case"drop":i+=W;break;case"dropRight":o-=W;break;case"take":o=Jn(o,i+W);break;case"takeRight":i=Bn(i,o-W);break}}return{start:i,end:o}}function Av(i){var o=i.match(so);return o?o[1].split(es):[]}function ld(i,o,f){o=cs(o,i);for(var y=-1,R=o.length,N=!1;++y<R;){var W=_r(o[y]);if(!(N=i!=null&&f(i,W)))break;i=i[W]}return N||++y!=R?N:(R=i==null?0:i.length,!!R&&Gl(R)&&Or(W,R)&&(Lt(i)||Hs(i)))}function bv(i){var o=i.length,f=new i.constructor(o);return o&&typeof i[0]=="string"&&At.call(i,"index")&&(f.index=i.index,f.input=i.input),f}function cd(i){return typeof i.constructor=="function"&&!Da(i)?vo(pl(i)):{}}function wv(i,o,f){var y=i.constructor;switch(o){case De:return mu(i);case Pe:case Oe:return new y(+i);case He:return uv(i,f);case rt:case Ge:case qe:case lt:case Tt:case Fe:case Bt:case yt:case ct:return Xh(i,f);case tt:return new y;case dt:case en:return new y(i);case $t:return fv(i);case tn:return new y;case k:return hv(i)}}function Rv(i,o){var f=o.length;if(!f)return i;var y=f-1;return o[y]=(f>1?"& ":"")+o[y],o=o.join(f>2?", ":" "),i.replace(Qr,`{
/* [wrapped with `+o+`] */
`)}function Cv(i){return Lt(i)||Hs(i)||!!(ph&&i&&i[ph])}function Or(i,o){var f=typeof i;return o=o??Ue,!!o&&(f=="number"||f!="symbol"&&he.test(i))&&i>-1&&i%1==0&&i<o}function ai(i,o,f){if(!En(f))return!1;var y=typeof o;return(y=="number"?vi(f)&&Or(o,f.length):y=="string"&&o in f)?tr(f[o],i):!1}function Eu(i,o){if(Lt(i))return!1;var f=typeof i;return f=="number"||f=="symbol"||f=="boolean"||i==null||Li(i)?!0:qn.test(i)||!xn.test(i)||o!=null&&i in Ke(o)}function Lv(i){var o=typeof i;return o=="string"||o=="number"||o=="symbol"||o=="boolean"?i!=="__proto__":i===null}function Tu(i){var o=Dl(i),f=P[o];if(typeof f!="function"||!(o in Kt.prototype))return!1;if(i===f)return!0;var y=yu(f);return!!y&&i===y[0]}function Pv(i){return!!uh&&uh in i}var Iv=si?Fr:Gu;function Da(i){var o=i&&i.constructor,f=typeof o=="function"&&o.prototype||Fn;return i===f}function ud(i){return i===i&&!En(i)}function fd(i,o){return function(f){return f==null?!1:f[i]===o&&(o!==t||i in Ke(f))}}function Dv(i){var o=Hl(i,function(y){return f.size===p&&f.clear(),y}),f=o.cache;return o}function Nv(i,o){var f=i[1],y=o[1],R=f|y,N=R<(E|M|m),W=y==m&&f==U||y==m&&f==pe&&i[7].length<=o[8]||y==(m|pe)&&o[7].length<=o[8]&&f==U;if(!(N||W))return i;y&E&&(i[2]=o[2],R|=f&E?0:V);var K=o[3];if(K){var ie=i[3];i[3]=ie?Yh(ie,K,o[4]):K,i[4]=ie?Ri(i[3],g):o[4]}return K=o[5],K&&(ie=i[5],i[5]=ie?jh(ie,K,o[6]):K,i[6]=ie?Ri(i[5],g):o[6]),K=o[7],K&&(i[7]=K),y&m&&(i[8]=i[8]==null?o[8]:Jn(i[8],o[8])),i[9]==null&&(i[9]=o[9]),i[0]=o[0],i[1]=R,i}function Uv(i){var o=[];if(i!=null)for(var f in Ke(i))o.push(f);return o}function Ov(i){return fl.call(i)}function hd(i,o,f){return o=Bn(o===t?i.length-1:o,0),function(){for(var y=arguments,R=-1,N=Bn(y.length-o,0),W=Y(N);++R<N;)W[R]=y[o+R];R=-1;for(var K=Y(o+1);++R<o;)K[R]=y[R];return K[o]=f(W),L(i,this,K)}}function dd(i,o){return o.length<2?i:Os(i,Gi(o,0,-1))}function Fv(i,o){for(var f=i.length,y=Jn(o.length,f),R=_i(i);y--;){var N=o[y];i[y]=Or(N,f)?R[N]:t}return i}function Au(i,o){if(!(o==="constructor"&&typeof i[o]=="function")&&o!="__proto__")return i[o]}var pd=gd(Fh),Na=Jg||function(i,o){return Sn.setTimeout(i,o)},bu=gd(ov);function md(i,o,f){var y=o+"";return bu(i,Rv(y,Bv(Av(y),f)))}function gd(i){var o=0,f=0;return function(){var y=n_(),R=xe-(y-f);if(f=y,R>0){if(++o>=Re)return arguments[0]}else o=0;return i.apply(t,arguments)}}function Ul(i,o){var f=-1,y=i.length,R=y-1;for(o=o===t?y:o;++f<o;){var N=lu(f,R),W=i[N];i[N]=i[f],i[f]=W}return i.length=o,i}var _d=Dv(function(i){var o=[];return i.charCodeAt(0)===46&&o.push(""),i.replace(rn,function(f,y,R,N){o.push(R?N.replace(aa,"$1"):y||f)}),o});function _r(i){if(typeof i=="string"||Li(i))return i;var o=i+"";return o=="0"&&1/i==-ge?"-0":o}function Bs(i){if(i!=null){try{return Qi.call(i)}catch{}try{return i+""}catch{}}return""}function Bv(i,o){return G(Ye,function(f){var y="_."+f[0];o&f[1]&&!ae(i,y)&&i.push(y)}),i.sort()}function vd(i){if(i instanceof Kt)return i.clone();var o=new Hi(i.__wrapped__,i.__chain__);return o.__actions__=_i(i.__actions__),o.__index__=i.__index__,o.__values__=i.__values__,o}function Hv(i,o,f){(f?ai(i,o,f):o===t)?o=1:o=Bn(Ut(o),0);var y=i==null?0:i.length;if(!y||o<1)return[];for(var R=0,N=0,W=Y(_l(y/o));R<y;)W[N++]=Gi(i,R,R+=o);return W}function zv(i){for(var o=-1,f=i==null?0:i.length,y=0,R=[];++o<f;){var N=i[o];N&&(R[y++]=N)}return R}function Gv(){var i=arguments.length;if(!i)return[];for(var o=Y(i-1),f=arguments[0],y=i;y--;)o[y-1]=arguments[y];return Ct(Lt(f)?_i(f):[f],Yn(o,1))}var kv=zt(function(i,o){return Rn(i)?Ra(i,Yn(o,1,Rn,!0)):[]}),Vv=zt(function(i,o){var f=ki(o);return Rn(f)&&(f=t),Rn(i)?Ra(i,Yn(o,1,Rn,!0),mt(f,2)):[]}),Wv=zt(function(i,o){var f=ki(o);return Rn(f)&&(f=t),Rn(i)?Ra(i,Yn(o,1,Rn,!0),t,f):[]});function Xv(i,o,f){var y=i==null?0:i.length;return y?(o=f||o===t?1:Ut(o),Gi(i,o<0?0:o,y)):[]}function qv(i,o,f){var y=i==null?0:i.length;return y?(o=f||o===t?1:Ut(o),o=y-o,Gi(i,0,o<0?0:o)):[]}function Yv(i,o){return i&&i.length?wl(i,mt(o,3),!0,!0):[]}function jv(i,o){return i&&i.length?wl(i,mt(o,3),!0):[]}function Kv(i,o,f,y){var R=i==null?0:i.length;return R?(f&&typeof f!="number"&&ai(i,o,f)&&(f=0,y=R),G_(i,o,f,y)):[]}function xd(i,o,f){var y=i==null?0:i.length;if(!y)return-1;var R=f==null?0:Ut(f);return R<0&&(R=Bn(y+R,0)),Wt(i,mt(o,3),R)}function yd(i,o,f){var y=i==null?0:i.length;if(!y)return-1;var R=y-1;return f!==t&&(R=Ut(f),R=f<0?Bn(y+R,0):Jn(R,y-1)),Wt(i,mt(o,3),R,!0)}function Sd(i){var o=i==null?0:i.length;return o?Yn(i,1):[]}function $v(i){var o=i==null?0:i.length;return o?Yn(i,ge):[]}function Zv(i,o){var f=i==null?0:i.length;return f?(o=o===t?1:Ut(o),Yn(i,o)):[]}function Jv(i){for(var o=-1,f=i==null?0:i.length,y={};++o<f;){var R=i[o];y[R[0]]=R[1]}return y}function Md(i){return i&&i.length?i[0]:t}function Qv(i,o,f){var y=i==null?0:i.length;if(!y)return-1;var R=f==null?0:Ut(f);return R<0&&(R=Bn(y+R,0)),ln(i,o,R)}function e0(i){var o=i==null?0:i.length;return o?Gi(i,0,-1):[]}var t0=zt(function(i){var o=Ze(i,du);return o.length&&o[0]===i[0]?iu(o):[]}),n0=zt(function(i){var o=ki(i),f=Ze(i,du);return o===ki(f)?o=t:f.pop(),f.length&&f[0]===i[0]?iu(f,mt(o,2)):[]}),i0=zt(function(i){var o=ki(i),f=Ze(i,du);return o=typeof o=="function"?o:t,o&&f.pop(),f.length&&f[0]===i[0]?iu(f,t,o):[]});function r0(i,o){return i==null?"":e_.call(i,o)}function ki(i){var o=i==null?0:i.length;return o?i[o-1]:t}function s0(i,o,f){var y=i==null?0:i.length;if(!y)return-1;var R=y;return f!==t&&(R=Ut(f),R=R<0?Bn(y+R,0):Jn(R,y-1)),o===o?mo(i,o,R):Wt(i,ho,R,!0)}function o0(i,o){return i&&i.length?Dh(i,Ut(o)):t}var a0=zt(Ed);function Ed(i,o){return i&&i.length&&o&&o.length?au(i,o):i}function l0(i,o,f){return i&&i.length&&o&&o.length?au(i,o,mt(f,2)):i}function c0(i,o,f){return i&&i.length&&o&&o.length?au(i,o,t,f):i}var u0=Ur(function(i,o){var f=i==null?0:i.length,y=Qc(i,o);return Oh(i,Ze(o,function(R){return Or(R,f)?+R:R}).sort(qh)),y});function f0(i,o){var f=[];if(!(i&&i.length))return f;var y=-1,R=[],N=i.length;for(o=mt(o,3);++y<N;){var W=i[y];o(W,y,i)&&(f.push(W),R.push(y))}return Oh(i,R),f}function wu(i){return i==null?i:r_.call(i)}function h0(i,o,f){var y=i==null?0:i.length;return y?(f&&typeof f!="number"&&ai(i,o,f)?(o=0,f=y):(o=o==null?0:Ut(o),f=f===t?y:Ut(f)),Gi(i,o,f)):[]}function d0(i,o){return bl(i,o)}function p0(i,o,f){return uu(i,o,mt(f,2))}function m0(i,o){var f=i==null?0:i.length;if(f){var y=bl(i,o);if(y<f&&tr(i[y],o))return y}return-1}function g0(i,o){return bl(i,o,!0)}function _0(i,o,f){return uu(i,o,mt(f,2),!0)}function v0(i,o){var f=i==null?0:i.length;if(f){var y=bl(i,o,!0)-1;if(tr(i[y],o))return y}return-1}function x0(i){return i&&i.length?Bh(i):[]}function y0(i,o){return i&&i.length?Bh(i,mt(o,2)):[]}function S0(i){var o=i==null?0:i.length;return o?Gi(i,1,o):[]}function M0(i,o,f){return i&&i.length?(o=f||o===t?1:Ut(o),Gi(i,0,o<0?0:o)):[]}function E0(i,o,f){var y=i==null?0:i.length;return y?(o=f||o===t?1:Ut(o),o=y-o,Gi(i,o<0?0:o,y)):[]}function T0(i,o){return i&&i.length?wl(i,mt(o,3),!1,!0):[]}function A0(i,o){return i&&i.length?wl(i,mt(o,3)):[]}var b0=zt(function(i){return ls(Yn(i,1,Rn,!0))}),w0=zt(function(i){var o=ki(i);return Rn(o)&&(o=t),ls(Yn(i,1,Rn,!0),mt(o,2))}),R0=zt(function(i){var o=ki(i);return o=typeof o=="function"?o:t,ls(Yn(i,1,Rn,!0),t,o)});function C0(i){return i&&i.length?ls(i):[]}function L0(i,o){return i&&i.length?ls(i,mt(o,2)):[]}function P0(i,o){return o=typeof o=="function"?o:t,i&&i.length?ls(i,t,o):[]}function Ru(i){if(!(i&&i.length))return[];var o=0;return i=_e(i,function(f){if(Rn(f))return o=Bn(f.length,o),!0}),Cs(o,function(f){return Ze(i,Cr(f))})}function Td(i,o){if(!(i&&i.length))return[];var f=Ru(i);return o==null?f:Ze(f,function(y){return L(o,t,y)})}var I0=zt(function(i,o){return Rn(i)?Ra(i,o):[]}),D0=zt(function(i){return hu(_e(i,Rn))}),N0=zt(function(i){var o=ki(i);return Rn(o)&&(o=t),hu(_e(i,Rn),mt(o,2))}),U0=zt(function(i){var o=ki(i);return o=typeof o=="function"?o:t,hu(_e(i,Rn),t,o)}),O0=zt(Ru);function F0(i,o){return kh(i||[],o||[],wa)}function B0(i,o){return kh(i||[],o||[],Pa)}var H0=zt(function(i){var o=i.length,f=o>1?i[o-1]:t;return f=typeof f=="function"?(i.pop(),f):t,Td(i,f)});function Ad(i){var o=P(i);return o.__chain__=!0,o}function z0(i,o){return o(i),i}function Ol(i,o){return o(i)}var G0=Ur(function(i){var o=i.length,f=o?i[0]:0,y=this.__wrapped__,R=function(N){return Qc(N,i)};return o>1||this.__actions__.length||!(y instanceof Kt)||!Or(f)?this.thru(R):(y=y.slice(f,+f+(o?1:0)),y.__actions__.push({func:Ol,args:[R],thisArg:t}),new Hi(y,this.__chain__).thru(function(N){return o&&!N.length&&N.push(t),N}))});function k0(){return Ad(this)}function V0(){return new Hi(this.value(),this.__chain__)}function W0(){this.__values__===t&&(this.__values__=Hd(this.value()));var i=this.__index__>=this.__values__.length,o=i?t:this.__values__[this.__index__++];return{done:i,value:o}}function X0(){return this}function q0(i){for(var o,f=this;f instanceof Sl;){var y=vd(f);y.__index__=0,y.__values__=t,o?R.__wrapped__=y:o=y;var R=y;f=f.__wrapped__}return R.__wrapped__=i,o}function Y0(){var i=this.__wrapped__;if(i instanceof Kt){var o=i;return this.__actions__.length&&(o=new Kt(this)),o=o.reverse(),o.__actions__.push({func:Ol,args:[wu],thisArg:t}),new Hi(o,this.__chain__)}return this.thru(wu)}function j0(){return Gh(this.__wrapped__,this.__actions__)}var K0=Rl(function(i,o,f){At.call(i,f)?++i[f]:Dr(i,f,1)});function $0(i,o,f){var y=Lt(i)?de:z_;return f&&ai(i,o,f)&&(o=t),y(i,mt(o,3))}function Z0(i,o){var f=Lt(i)?_e:Th;return f(i,mt(o,3))}var J0=Jh(xd),Q0=Jh(yd);function ex(i,o){return Yn(Fl(i,o),1)}function tx(i,o){return Yn(Fl(i,o),ge)}function nx(i,o,f){return f=f===t?1:Ut(f),Yn(Fl(i,o),f)}function bd(i,o){var f=Lt(i)?G:as;return f(i,mt(o,3))}function wd(i,o){var f=Lt(i)?ee:Eh;return f(i,mt(o,3))}var ix=Rl(function(i,o,f){At.call(i,f)?i[f].push(o):Dr(i,f,[o])});function rx(i,o,f,y){i=vi(i)?i:Eo(i),f=f&&!y?Ut(f):0;var R=i.length;return f<0&&(f=Bn(R+f,0)),kl(i)?f<=R&&i.indexOf(o,f)>-1:!!R&&ln(i,o,f)>-1}var sx=zt(function(i,o,f){var y=-1,R=typeof o=="function",N=vi(i)?Y(i.length):[];return as(i,function(W){N[++y]=R?L(o,W,f):Ca(W,o,f)}),N}),ox=Rl(function(i,o,f){Dr(i,f,o)});function Fl(i,o){var f=Lt(i)?Ze:Lh;return f(i,mt(o,3))}function ax(i,o,f,y){return i==null?[]:(Lt(o)||(o=o==null?[]:[o]),f=y?t:f,Lt(f)||(f=f==null?[]:[f]),Nh(i,o,f))}var lx=Rl(function(i,o,f){i[f?0:1].push(o)},function(){return[[],[]]});function cx(i,o,f){var y=Lt(i)?wt:Zi,R=arguments.length<3;return y(i,mt(o,4),f,R,as)}function ux(i,o,f){var y=Lt(i)?Un:Zi,R=arguments.length<3;return y(i,mt(o,4),f,R,Eh)}function fx(i,o){var f=Lt(i)?_e:Th;return f(i,zl(mt(o,3)))}function hx(i){var o=Lt(i)?xh:rv;return o(i)}function dx(i,o,f){(f?ai(i,o,f):o===t)?o=1:o=Ut(o);var y=Lt(i)?U_:sv;return y(i,o)}function px(i){var o=Lt(i)?O_:av;return o(i)}function mx(i){if(i==null)return 0;if(vi(i))return kl(i)?pr(i):i.length;var o=Qn(i);return o==tt||o==tn?i.size:su(i).length}function gx(i,o,f){var y=Lt(i)?Mn:lv;return f&&ai(i,o,f)&&(o=t),y(i,mt(o,3))}var _x=zt(function(i,o){if(i==null)return[];var f=o.length;return f>1&&ai(i,o[0],o[1])?o=[]:f>2&&ai(o[0],o[1],o[2])&&(o=[o[0]]),Nh(i,Yn(o,1),[])}),Bl=Zg||function(){return Sn.Date.now()};function vx(i,o){if(typeof o!="function")throw new Ht(c);return i=Ut(i),function(){if(--i<1)return o.apply(this,arguments)}}function Rd(i,o,f){return o=f?t:o,o=i&&o==null?i.length:o,Nr(i,m,t,t,t,t,o)}function Cd(i,o){var f;if(typeof o!="function")throw new Ht(c);return i=Ut(i),function(){return--i>0&&(f=o.apply(this,arguments)),i<=1&&(o=t),f}}var Cu=zt(function(i,o,f){var y=E;if(f.length){var R=Ri(f,So(Cu));y|=z}return Nr(i,y,o,f,R)}),Ld=zt(function(i,o,f){var y=E|M;if(f.length){var R=Ri(f,So(Ld));y|=z}return Nr(o,y,i,f,R)});function Pd(i,o,f){o=f?t:o;var y=Nr(i,U,t,t,t,t,t,o);return y.placeholder=Pd.placeholder,y}function Id(i,o,f){o=f?t:o;var y=Nr(i,B,t,t,t,t,t,o);return y.placeholder=Id.placeholder,y}function Dd(i,o,f){var y,R,N,W,K,ie,Ee=0,Ae=!1,Le=!1,Xe=!0;if(typeof i!="function")throw new Ht(c);o=Vi(o)||0,En(f)&&(Ae=!!f.leading,Le="maxWait"in f,N=Le?Bn(Vi(f.maxWait)||0,o):N,Xe="trailing"in f?!!f.trailing:Xe);function st(Cn){var nr=y,Hr=R;return y=R=t,Ee=Cn,W=i.apply(Hr,nr),W}function vt(Cn){return Ee=Cn,K=Na(jt,o),Ae?st(Cn):W}function Ot(Cn){var nr=Cn-ie,Hr=Cn-Ee,Jd=o-nr;return Le?Jn(Jd,N-Hr):Jd}function xt(Cn){var nr=Cn-ie,Hr=Cn-Ee;return ie===t||nr>=o||nr<0||Le&&Hr>=N}function jt(){var Cn=Bl();if(xt(Cn))return Zt(Cn);K=Na(jt,Ot(Cn))}function Zt(Cn){return K=t,Xe&&y?st(Cn):(y=R=t,W)}function Pi(){K!==t&&Vh(K),Ee=0,y=ie=R=K=t}function li(){return K===t?W:Zt(Bl())}function Ii(){var Cn=Bl(),nr=xt(Cn);if(y=arguments,R=this,ie=Cn,nr){if(K===t)return vt(ie);if(Le)return Vh(K),K=Na(jt,o),st(ie)}return K===t&&(K=Na(jt,o)),W}return Ii.cancel=Pi,Ii.flush=li,Ii}var xx=zt(function(i,o){return Mh(i,1,o)}),yx=zt(function(i,o,f){return Mh(i,Vi(o)||0,f)});function Sx(i){return Nr(i,D)}function Hl(i,o){if(typeof i!="function"||o!=null&&typeof o!="function")throw new Ht(c);var f=function(){var y=arguments,R=o?o.apply(this,y):y[0],N=f.cache;if(N.has(R))return N.get(R);var W=i.apply(this,y);return f.cache=N.set(R,W)||N,W};return f.cache=new(Hl.Cache||Ir),f}Hl.Cache=Ir;function zl(i){if(typeof i!="function")throw new Ht(c);return function(){var o=arguments;switch(o.length){case 0:return!i.call(this);case 1:return!i.call(this,o[0]);case 2:return!i.call(this,o[0],o[1]);case 3:return!i.call(this,o[0],o[1],o[2])}return!i.apply(this,o)}}function Mx(i){return Cd(2,i)}var Ex=cv(function(i,o){o=o.length==1&&Lt(o[0])?Ze(o[0],ii(mt())):Ze(Yn(o,1),ii(mt()));var f=o.length;return zt(function(y){for(var R=-1,N=Jn(y.length,f);++R<N;)y[R]=o[R].call(this,y[R]);return L(i,this,y)})}),Lu=zt(function(i,o){var f=Ri(o,So(Lu));return Nr(i,z,t,o,f)}),Nd=zt(function(i,o){var f=Ri(o,So(Nd));return Nr(i,$,t,o,f)}),Tx=Ur(function(i,o){return Nr(i,pe,t,t,t,o)});function Ax(i,o){if(typeof i!="function")throw new Ht(c);return o=o===t?o:Ut(o),zt(i,o)}function bx(i,o){if(typeof i!="function")throw new Ht(c);return o=o==null?0:Bn(Ut(o),0),zt(function(f){var y=f[o],R=us(f,0,o);return y&&Ct(R,y),L(i,this,R)})}function wx(i,o,f){var y=!0,R=!0;if(typeof i!="function")throw new Ht(c);return En(f)&&(y="leading"in f?!!f.leading:y,R="trailing"in f?!!f.trailing:R),Dd(i,o,{leading:y,maxWait:o,trailing:R})}function Rx(i){return Rd(i,1)}function Cx(i,o){return Lu(pu(o),i)}function Lx(){if(!arguments.length)return[];var i=arguments[0];return Lt(i)?i:[i]}function Px(i){return zi(i,T)}function Ix(i,o){return o=typeof o=="function"?o:t,zi(i,T,o)}function Dx(i){return zi(i,v|T)}function Nx(i,o){return o=typeof o=="function"?o:t,zi(i,v|T,o)}function Ux(i,o){return o==null||Sh(i,o,Vn(o))}function tr(i,o){return i===o||i!==i&&o!==o}var Ox=Il(nu),Fx=Il(function(i,o){return i>=o}),Hs=wh(function(){return arguments}())?wh:function(i){return An(i)&&At.call(i,"callee")&&!dh.call(i,"callee")},Lt=Y.isArray,Bx=l?ii(l):q_;function vi(i){return i!=null&&Gl(i.length)&&!Fr(i)}function Rn(i){return An(i)&&vi(i)}function Hx(i){return i===!0||i===!1||An(i)&&oi(i)==Pe}var fs=Qg||Gu,zx=h?ii(h):Y_;function Gx(i){return An(i)&&i.nodeType===1&&!Ua(i)}function kx(i){if(i==null)return!0;if(vi(i)&&(Lt(i)||typeof i=="string"||typeof i.splice=="function"||fs(i)||Mo(i)||Hs(i)))return!i.length;var o=Qn(i);if(o==tt||o==tn)return!i.size;if(Da(i))return!su(i).length;for(var f in i)if(At.call(i,f))return!1;return!0}function Vx(i,o){return La(i,o)}function Wx(i,o,f){f=typeof f=="function"?f:t;var y=f?f(i,o):t;return y===t?La(i,o,t,f):!!y}function Pu(i){if(!An(i))return!1;var o=oi(i);return o==gt||o==Mt||typeof i.message=="string"&&typeof i.name=="string"&&!Ua(i)}function Xx(i){return typeof i=="number"&&mh(i)}function Fr(i){if(!En(i))return!1;var o=oi(i);return o==le||o==wn||o==It||o==Pt}function Ud(i){return typeof i=="number"&&i==Ut(i)}function Gl(i){return typeof i=="number"&&i>-1&&i%1==0&&i<=Ue}function En(i){var o=typeof i;return i!=null&&(o=="object"||o=="function")}function An(i){return i!=null&&typeof i=="object"}var Od=_?ii(_):K_;function qx(i,o){return i===o||ru(i,o,Su(o))}function Yx(i,o,f){return f=typeof f=="function"?f:t,ru(i,o,Su(o),f)}function jx(i){return Fd(i)&&i!=+i}function Kx(i){if(Iv(i))throw new Me(a);return Rh(i)}function $x(i){return i===null}function Zx(i){return i==null}function Fd(i){return typeof i=="number"||An(i)&&oi(i)==dt}function Ua(i){if(!An(i)||oi(i)!=Yt)return!1;var o=pl(i);if(o===null)return!0;var f=At.call(o,"constructor")&&o.constructor;return typeof f=="function"&&f instanceof f&&Qi.call(f)==Yg}var Iu=S?ii(S):$_;function Jx(i){return Ud(i)&&i>=-Ue&&i<=Ue}var Bd=A?ii(A):Z_;function kl(i){return typeof i=="string"||!Lt(i)&&An(i)&&oi(i)==en}function Li(i){return typeof i=="symbol"||An(i)&&oi(i)==k}var Mo=w?ii(w):J_;function Qx(i){return i===t}function ey(i){return An(i)&&Qn(i)==Z}function ty(i){return An(i)&&oi(i)==Ie}var ny=Il(ou),iy=Il(function(i,o){return i<=o});function Hd(i){if(!i)return[];if(vi(i))return kl(i)?ri(i):_i(i);if(Ma&&i[Ma])return dr(i[Ma]());var o=Qn(i),f=o==tt?po:o==tn?Lr:Eo;return f(i)}function Br(i){if(!i)return i===0?i:0;if(i=Vi(i),i===ge||i===-ge){var o=i<0?-1:1;return o*Ce}return i===i?i:0}function Ut(i){var o=Br(i),f=o%1;return o===o?f?o-f:o:0}function zd(i){return i?Us(Ut(i),0,ne):0}function Vi(i){if(typeof i=="number")return i;if(Li(i))return be;if(En(i)){var o=typeof i.valueOf=="function"?i.valueOf():i;i=En(o)?o+"":o}if(typeof i!="string")return i===0?i:+i;i=Bi(i);var f=se.test(i);return f||fe.test(i)?Wc(i.slice(2),f?2:8):F.test(i)?be:+i}function Gd(i){return gr(i,xi(i))}function ry(i){return i?Us(Ut(i),-Ue,Ue):i===0?i:0}function on(i){return i==null?"":Ci(i)}var sy=xo(function(i,o){if(Da(o)||vi(o)){gr(o,Vn(o),i);return}for(var f in o)At.call(o,f)&&wa(i,f,o[f])}),kd=xo(function(i,o){gr(o,xi(o),i)}),Vl=xo(function(i,o,f,y){gr(o,xi(o),i,y)}),oy=xo(function(i,o,f,y){gr(o,Vn(o),i,y)}),ay=Ur(Qc);function ly(i,o){var f=vo(i);return o==null?f:yh(f,o)}var cy=zt(function(i,o){i=Ke(i);var f=-1,y=o.length,R=y>2?o[2]:t;for(R&&ai(o[0],o[1],R)&&(y=1);++f<y;)for(var N=o[f],W=xi(N),K=-1,ie=W.length;++K<ie;){var Ee=W[K],Ae=i[Ee];(Ae===t||tr(Ae,Fn[Ee])&&!At.call(i,Ee))&&(i[Ee]=N[Ee])}return i}),uy=zt(function(i){return i.push(t,sd),L(Vd,t,i)});function fy(i,o){return fr(i,mt(o,3),mr)}function hy(i,o){return fr(i,mt(o,3),tu)}function dy(i,o){return i==null?i:eu(i,mt(o,3),xi)}function py(i,o){return i==null?i:Ah(i,mt(o,3),xi)}function my(i,o){return i&&mr(i,mt(o,3))}function gy(i,o){return i&&tu(i,mt(o,3))}function _y(i){return i==null?[]:Tl(i,Vn(i))}function vy(i){return i==null?[]:Tl(i,xi(i))}function Du(i,o,f){var y=i==null?t:Os(i,o);return y===t?f:y}function xy(i,o){return i!=null&&ld(i,o,k_)}function Nu(i,o){return i!=null&&ld(i,o,V_)}var yy=ed(function(i,o,f){o!=null&&typeof o.toString!="function"&&(o=fl.call(o)),i[o]=f},Ou(yi)),Sy=ed(function(i,o,f){o!=null&&typeof o.toString!="function"&&(o=fl.call(o)),At.call(i,o)?i[o].push(f):i[o]=[f]},mt),My=zt(Ca);function Vn(i){return vi(i)?vh(i):su(i)}function xi(i){return vi(i)?vh(i,!0):Q_(i)}function Ey(i,o){var f={};return o=mt(o,3),mr(i,function(y,R,N){Dr(f,o(y,R,N),y)}),f}function Ty(i,o){var f={};return o=mt(o,3),mr(i,function(y,R,N){Dr(f,R,o(y,R,N))}),f}var Ay=xo(function(i,o,f){Al(i,o,f)}),Vd=xo(function(i,o,f,y){Al(i,o,f,y)}),by=Ur(function(i,o){var f={};if(i==null)return f;var y=!1;o=Ze(o,function(N){return N=cs(N,i),y||(y=N.length>1),N}),gr(i,xu(i),f),y&&(f=zi(f,v|x|T,yv));for(var R=o.length;R--;)fu(f,o[R]);return f});function wy(i,o){return Wd(i,zl(mt(o)))}var Ry=Ur(function(i,o){return i==null?{}:tv(i,o)});function Wd(i,o){if(i==null)return{};var f=Ze(xu(i),function(y){return[y]});return o=mt(o),Uh(i,f,function(y,R){return o(y,R[0])})}function Cy(i,o,f){o=cs(o,i);var y=-1,R=o.length;for(R||(R=1,i=t);++y<R;){var N=i==null?t:i[_r(o[y])];N===t&&(y=R,N=f),i=Fr(N)?N.call(i):N}return i}function Ly(i,o,f){return i==null?i:Pa(i,o,f)}function Py(i,o,f,y){return y=typeof y=="function"?y:t,i==null?i:Pa(i,o,f,y)}var Xd=id(Vn),qd=id(xi);function Iy(i,o,f){var y=Lt(i),R=y||fs(i)||Mo(i);if(o=mt(o,4),f==null){var N=i&&i.constructor;R?f=y?new N:[]:En(i)?f=Fr(N)?vo(pl(i)):{}:f={}}return(R?G:mr)(i,function(W,K,ie){return o(f,W,K,ie)}),f}function Dy(i,o){return i==null?!0:fu(i,o)}function Ny(i,o,f){return i==null?i:zh(i,o,pu(f))}function Uy(i,o,f,y){return y=typeof y=="function"?y:t,i==null?i:zh(i,o,pu(f),y)}function Eo(i){return i==null?[]:va(i,Vn(i))}function Oy(i){return i==null?[]:va(i,xi(i))}function Fy(i,o,f){return f===t&&(f=o,o=t),f!==t&&(f=Vi(f),f=f===f?f:0),o!==t&&(o=Vi(o),o=o===o?o:0),Us(Vi(i),o,f)}function By(i,o,f){return o=Br(o),f===t?(f=o,o=0):f=Br(f),i=Vi(i),W_(i,o,f)}function Hy(i,o,f){if(f&&typeof f!="boolean"&&ai(i,o,f)&&(o=f=t),f===t&&(typeof o=="boolean"?(f=o,o=t):typeof i=="boolean"&&(f=i,i=t)),i===t&&o===t?(i=0,o=1):(i=Br(i),o===t?(o=i,i=0):o=Br(o)),i>o){var y=i;i=o,o=y}if(f||i%1||o%1){var R=gh();return Jn(i+R*(o-i+ga("1e-"+((R+"").length-1))),o)}return lu(i,o)}var zy=yo(function(i,o,f){return o=o.toLowerCase(),i+(f?Yd(o):o)});function Yd(i){return Uu(on(i).toLowerCase())}function jd(i){return i=on(i),i&&i.replace($e,rs).replace(Bc,"")}function Gy(i,o,f){i=on(i),o=Ci(o);var y=i.length;f=f===t?y:Us(Ut(f),0,y);var R=f;return f-=o.length,f>=0&&i.slice(f,R)==o}function ky(i){return i=on(i),i&&Se.test(i)?i.replace(ke,qc):i}function Vy(i){return i=on(i),i&&Nn.test(i)?i.replace(pn,"\\$&"):i}var Wy=yo(function(i,o,f){return i+(f?"-":"")+o.toLowerCase()}),Xy=yo(function(i,o,f){return i+(f?" ":"")+o.toLowerCase()}),qy=Zh("toLowerCase");function Yy(i,o,f){i=on(i),o=Ut(o);var y=o?pr(i):0;if(!o||y>=o)return i;var R=(o-y)/2;return Pl(vl(R),f)+i+Pl(_l(R),f)}function jy(i,o,f){i=on(i),o=Ut(o);var y=o?pr(i):0;return o&&y<o?i+Pl(o-y,f):i}function Ky(i,o,f){i=on(i),o=Ut(o);var y=o?pr(i):0;return o&&y<o?Pl(o-y,f)+i:i}function $y(i,o,f){return f||o==null?o=0:o&&(o=+o),i_(on(i).replace(lr,""),o||0)}function Zy(i,o,f){return(f?ai(i,o,f):o===t)?o=1:o=Ut(o),cu(on(i),o)}function Jy(){var i=arguments,o=on(i[0]);return i.length<3?o:o.replace(i[1],i[2])}var Qy=yo(function(i,o,f){return i+(f?"_":"")+o.toLowerCase()});function eS(i,o,f){return f&&typeof f!="number"&&ai(i,o,f)&&(o=f=t),f=f===t?ne:f>>>0,f?(i=on(i),i&&(typeof o=="string"||o!=null&&!Iu(o))&&(o=Ci(o),!o&&gi(i))?us(ri(i),0,f):i.split(o,f)):[]}var tS=yo(function(i,o,f){return i+(f?" ":"")+Uu(o)});function nS(i,o,f){return i=on(i),f=f==null?0:Us(Ut(f),0,i.length),o=Ci(o),i.slice(f,f+o.length)==o}function iS(i,o,f){var y=P.templateSettings;f&&ai(i,o,f)&&(o=t),i=on(i),o=Vl({},o,y,rd);var R=Vl({},o.imports,y.imports,rd),N=Vn(R),W=va(R,N),K,ie,Ee=0,Ae=o.interpolate||it,Le="__p += '",Xe=Nt((o.escape||it).source+"|"+Ae.source+"|"+(Ae===kt?ao:it).source+"|"+(o.evaluate||it).source+"|$","g"),st="//# sourceURL="+(At.call(o,"sourceURL")?(o.sourceURL+"").replace(/\s/g," "):"lodash.templateSources["+ ++Vc+"]")+`
`;i.replace(Xe,function(xt,jt,Zt,Pi,li,Ii){return Zt||(Zt=Pi),Le+=i.slice(Ee,Ii).replace(at,Yc),jt&&(K=!0,Le+=`' +
__e(`+jt+`) +
'`),li&&(ie=!0,Le+=`';
`+li+`;
__p += '`),Zt&&(Le+=`' +
((__t = (`+Zt+`)) == null ? '' : __t) +
'`),Ee=Ii+xt.length,xt}),Le+=`';
`;var vt=At.call(o,"variable")&&o.variable;if(!vt)Le=`with (obj) {
`+Le+`
}
`;else if(oo.test(vt))throw new Me(u);Le=(ie?Le.replace(ut,""):Le).replace(Je,"$1").replace(Gt,"$1;"),Le="function("+(vt||"obj")+`) {
`+(vt?"":`obj || (obj = {});
`)+"var __t, __p = ''"+(K?", __e = _.escape":"")+(ie?`, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
`:`;
`)+Le+`return __p
}`;var Ot=$d(function(){return Qe(N,st+"return "+Le).apply(t,W)});if(Ot.source=Le,Pu(Ot))throw Ot;return Ot}function rS(i){return on(i).toLowerCase()}function sS(i){return on(i).toUpperCase()}function oS(i,o,f){if(i=on(i),i&&(f||o===t))return Bi(i);if(!i||!(o=Ci(o)))return i;var y=ri(i),R=ri(o),N=nn(y,R),W=Ps(y,R)+1;return us(y,N,W).join("")}function aS(i,o,f){if(i=on(i),i&&(f||o===t))return i.slice(0,cl(i)+1);if(!i||!(o=Ci(o)))return i;var y=ri(i),R=Ps(y,ri(o))+1;return us(y,0,R).join("")}function lS(i,o,f){if(i=on(i),i&&(f||o===t))return i.replace(lr,"");if(!i||!(o=Ci(o)))return i;var y=ri(i),R=nn(y,ri(o));return us(y,R).join("")}function cS(i,o){var f=X,y=Te;if(En(o)){var R="separator"in o?o.separator:R;f="length"in o?Ut(o.length):f,y="omission"in o?Ci(o.omission):y}i=on(i);var N=i.length;if(gi(i)){var W=ri(i);N=W.length}if(f>=N)return i;var K=f-pr(y);if(K<1)return y;var ie=W?us(W,0,K).join(""):i.slice(0,K);if(R===t)return ie+y;if(W&&(K+=ie.length-K),Iu(R)){if(i.slice(K).search(R)){var Ee,Ae=ie;for(R.global||(R=Nt(R.source,on(lo.exec(R))+"g")),R.lastIndex=0;Ee=R.exec(Ae);)var Le=Ee.index;ie=ie.slice(0,Le===t?K:Le)}}else if(i.indexOf(Ci(R),K)!=K){var Xe=ie.lastIndexOf(R);Xe>-1&&(ie=ie.slice(0,Xe))}return ie+y}function uS(i){return i=on(i),i&&ze.test(i)?i.replace(Q,Sa):i}var fS=yo(function(i,o,f){return i+(f?" ":"")+o.toUpperCase()}),Uu=Zh("toUpperCase");function Kd(i,o,f){return i=on(i),o=f?t:o,o===t?xa(i)?J(i):Vt(i):i.match(o)||[]}var $d=zt(function(i,o){try{return L(i,t,o)}catch(f){return Pu(f)?f:new Me(f)}}),hS=Ur(function(i,o){return G(o,function(f){f=_r(f),Dr(i,f,Cu(i[f],i))}),i});function dS(i){var o=i==null?0:i.length,f=mt();return i=o?Ze(i,function(y){if(typeof y[1]!="function")throw new Ht(c);return[f(y[0]),y[1]]}):[],zt(function(y){for(var R=-1;++R<o;){var N=i[R];if(L(N[0],this,y))return L(N[1],this,y)}})}function pS(i){return H_(zi(i,v))}function Ou(i){return function(){return i}}function mS(i,o){return i==null||i!==i?o:i}var gS=Qh(),_S=Qh(!0);function yi(i){return i}function Fu(i){return Ch(typeof i=="function"?i:zi(i,v))}function vS(i){return Ph(zi(i,v))}function xS(i,o){return Ih(i,zi(o,v))}var yS=zt(function(i,o){return function(f){return Ca(f,i,o)}}),SS=zt(function(i,o){return function(f){return Ca(i,f,o)}});function Bu(i,o,f){var y=Vn(o),R=Tl(o,y);f==null&&!(En(o)&&(R.length||!y.length))&&(f=o,o=i,i=this,R=Tl(o,Vn(o)));var N=!(En(f)&&"chain"in f)||!!f.chain,W=Fr(i);return G(R,function(K){var ie=o[K];i[K]=ie,W&&(i.prototype[K]=function(){var Ee=this.__chain__;if(N||Ee){var Ae=i(this.__wrapped__),Le=Ae.__actions__=_i(this.__actions__);return Le.push({func:ie,args:arguments,thisArg:i}),Ae.__chain__=Ee,Ae}return ie.apply(i,Ct([this.value()],arguments))})}),i}function MS(){return Sn._===this&&(Sn._=jg),this}function Hu(){}function ES(i){return i=Ut(i),zt(function(o){return Dh(o,i)})}var TS=gu(Ze),AS=gu(de),bS=gu(Mn);function Zd(i){return Eu(i)?Cr(_r(i)):nv(i)}function wS(i){return function(o){return i==null?t:Os(i,o)}}var RS=td(),CS=td(!0);function zu(){return[]}function Gu(){return!1}function LS(){return{}}function PS(){return""}function IS(){return!0}function DS(i,o){if(i=Ut(i),i<1||i>Ue)return[];var f=ne,y=Jn(i,ne);o=mt(o),i-=ne;for(var R=Cs(y,o);++f<i;)o(f);return R}function NS(i){return Lt(i)?Ze(i,_r):Li(i)?[i]:_i(_d(on(i)))}function US(i){var o=++qg;return on(i)+o}var OS=Ll(function(i,o){return i+o},0),FS=_u("ceil"),BS=Ll(function(i,o){return i/o},1),HS=_u("floor");function zS(i){return i&&i.length?El(i,yi,nu):t}function GS(i,o){return i&&i.length?El(i,mt(o,2),nu):t}function kS(i){return bi(i,yi)}function VS(i,o){return bi(i,mt(o,2))}function WS(i){return i&&i.length?El(i,yi,ou):t}function XS(i,o){return i&&i.length?El(i,mt(o,2),ou):t}var qS=Ll(function(i,o){return i*o},1),YS=_u("round"),jS=Ll(function(i,o){return i-o},0);function KS(i){return i&&i.length?Zn(i,yi):0}function $S(i,o){return i&&i.length?Zn(i,mt(o,2)):0}return P.after=vx,P.ary=Rd,P.assign=sy,P.assignIn=kd,P.assignInWith=Vl,P.assignWith=oy,P.at=ay,P.before=Cd,P.bind=Cu,P.bindAll=hS,P.bindKey=Ld,P.castArray=Lx,P.chain=Ad,P.chunk=Hv,P.compact=zv,P.concat=Gv,P.cond=dS,P.conforms=pS,P.constant=Ou,P.countBy=K0,P.create=ly,P.curry=Pd,P.curryRight=Id,P.debounce=Dd,P.defaults=cy,P.defaultsDeep=uy,P.defer=xx,P.delay=yx,P.difference=kv,P.differenceBy=Vv,P.differenceWith=Wv,P.drop=Xv,P.dropRight=qv,P.dropRightWhile=Yv,P.dropWhile=jv,P.fill=Kv,P.filter=Z0,P.flatMap=ex,P.flatMapDeep=tx,P.flatMapDepth=nx,P.flatten=Sd,P.flattenDeep=$v,P.flattenDepth=Zv,P.flip=Sx,P.flow=gS,P.flowRight=_S,P.fromPairs=Jv,P.functions=_y,P.functionsIn=vy,P.groupBy=ix,P.initial=e0,P.intersection=t0,P.intersectionBy=n0,P.intersectionWith=i0,P.invert=yy,P.invertBy=Sy,P.invokeMap=sx,P.iteratee=Fu,P.keyBy=ox,P.keys=Vn,P.keysIn=xi,P.map=Fl,P.mapKeys=Ey,P.mapValues=Ty,P.matches=vS,P.matchesProperty=xS,P.memoize=Hl,P.merge=Ay,P.mergeWith=Vd,P.method=yS,P.methodOf=SS,P.mixin=Bu,P.negate=zl,P.nthArg=ES,P.omit=by,P.omitBy=wy,P.once=Mx,P.orderBy=ax,P.over=TS,P.overArgs=Ex,P.overEvery=AS,P.overSome=bS,P.partial=Lu,P.partialRight=Nd,P.partition=lx,P.pick=Ry,P.pickBy=Wd,P.property=Zd,P.propertyOf=wS,P.pull=a0,P.pullAll=Ed,P.pullAllBy=l0,P.pullAllWith=c0,P.pullAt=u0,P.range=RS,P.rangeRight=CS,P.rearg=Tx,P.reject=fx,P.remove=f0,P.rest=Ax,P.reverse=wu,P.sampleSize=dx,P.set=Ly,P.setWith=Py,P.shuffle=px,P.slice=h0,P.sortBy=_x,P.sortedUniq=x0,P.sortedUniqBy=y0,P.split=eS,P.spread=bx,P.tail=S0,P.take=M0,P.takeRight=E0,P.takeRightWhile=T0,P.takeWhile=A0,P.tap=z0,P.throttle=wx,P.thru=Ol,P.toArray=Hd,P.toPairs=Xd,P.toPairsIn=qd,P.toPath=NS,P.toPlainObject=Gd,P.transform=Iy,P.unary=Rx,P.union=b0,P.unionBy=w0,P.unionWith=R0,P.uniq=C0,P.uniqBy=L0,P.uniqWith=P0,P.unset=Dy,P.unzip=Ru,P.unzipWith=Td,P.update=Ny,P.updateWith=Uy,P.values=Eo,P.valuesIn=Oy,P.without=I0,P.words=Kd,P.wrap=Cx,P.xor=D0,P.xorBy=N0,P.xorWith=U0,P.zip=O0,P.zipObject=F0,P.zipObjectDeep=B0,P.zipWith=H0,P.entries=Xd,P.entriesIn=qd,P.extend=kd,P.extendWith=Vl,Bu(P,P),P.add=OS,P.attempt=$d,P.camelCase=zy,P.capitalize=Yd,P.ceil=FS,P.clamp=Fy,P.clone=Px,P.cloneDeep=Dx,P.cloneDeepWith=Nx,P.cloneWith=Ix,P.conformsTo=Ux,P.deburr=jd,P.defaultTo=mS,P.divide=BS,P.endsWith=Gy,P.eq=tr,P.escape=ky,P.escapeRegExp=Vy,P.every=$0,P.find=J0,P.findIndex=xd,P.findKey=fy,P.findLast=Q0,P.findLastIndex=yd,P.findLastKey=hy,P.floor=HS,P.forEach=bd,P.forEachRight=wd,P.forIn=dy,P.forInRight=py,P.forOwn=my,P.forOwnRight=gy,P.get=Du,P.gt=Ox,P.gte=Fx,P.has=xy,P.hasIn=Nu,P.head=Md,P.identity=yi,P.includes=rx,P.indexOf=Qv,P.inRange=By,P.invoke=My,P.isArguments=Hs,P.isArray=Lt,P.isArrayBuffer=Bx,P.isArrayLike=vi,P.isArrayLikeObject=Rn,P.isBoolean=Hx,P.isBuffer=fs,P.isDate=zx,P.isElement=Gx,P.isEmpty=kx,P.isEqual=Vx,P.isEqualWith=Wx,P.isError=Pu,P.isFinite=Xx,P.isFunction=Fr,P.isInteger=Ud,P.isLength=Gl,P.isMap=Od,P.isMatch=qx,P.isMatchWith=Yx,P.isNaN=jx,P.isNative=Kx,P.isNil=Zx,P.isNull=$x,P.isNumber=Fd,P.isObject=En,P.isObjectLike=An,P.isPlainObject=Ua,P.isRegExp=Iu,P.isSafeInteger=Jx,P.isSet=Bd,P.isString=kl,P.isSymbol=Li,P.isTypedArray=Mo,P.isUndefined=Qx,P.isWeakMap=ey,P.isWeakSet=ty,P.join=r0,P.kebabCase=Wy,P.last=ki,P.lastIndexOf=s0,P.lowerCase=Xy,P.lowerFirst=qy,P.lt=ny,P.lte=iy,P.max=zS,P.maxBy=GS,P.mean=kS,P.meanBy=VS,P.min=WS,P.minBy=XS,P.stubArray=zu,P.stubFalse=Gu,P.stubObject=LS,P.stubString=PS,P.stubTrue=IS,P.multiply=qS,P.nth=o0,P.noConflict=MS,P.noop=Hu,P.now=Bl,P.pad=Yy,P.padEnd=jy,P.padStart=Ky,P.parseInt=$y,P.random=Hy,P.reduce=cx,P.reduceRight=ux,P.repeat=Zy,P.replace=Jy,P.result=Cy,P.round=YS,P.runInContext=O,P.sample=hx,P.size=mx,P.snakeCase=Qy,P.some=gx,P.sortedIndex=d0,P.sortedIndexBy=p0,P.sortedIndexOf=m0,P.sortedLastIndex=g0,P.sortedLastIndexBy=_0,P.sortedLastIndexOf=v0,P.startCase=tS,P.startsWith=nS,P.subtract=jS,P.sum=KS,P.sumBy=$S,P.template=iS,P.times=DS,P.toFinite=Br,P.toInteger=Ut,P.toLength=zd,P.toLower=rS,P.toNumber=Vi,P.toSafeInteger=ry,P.toString=on,P.toUpper=sS,P.trim=oS,P.trimEnd=aS,P.trimStart=lS,P.truncate=cS,P.unescape=uS,P.uniqueId=US,P.upperCase=fS,P.upperFirst=Uu,P.each=bd,P.eachRight=wd,P.first=Md,Bu(P,function(){var i={};return mr(P,function(o,f){At.call(P.prototype,f)||(i[f]=o)}),i}(),{chain:!1}),P.VERSION=n,G(["bind","bindKey","curry","curryRight","partial","partialRight"],function(i){P[i].placeholder=P}),G(["drop","take"],function(i,o){Kt.prototype[i]=function(f){f=f===t?1:Bn(Ut(f),0);var y=this.__filtered__&&!o?new Kt(this):this.clone();return y.__filtered__?y.__takeCount__=Jn(f,y.__takeCount__):y.__views__.push({size:Jn(f,ne),type:i+(y.__dir__<0?"Right":"")}),y},Kt.prototype[i+"Right"]=function(f){return this.reverse()[i](f).reverse()}}),G(["filter","map","takeWhile"],function(i,o){var f=o+1,y=f==te||f==we;Kt.prototype[i]=function(R){var N=this.clone();return N.__iteratees__.push({iteratee:mt(R,3),type:f}),N.__filtered__=N.__filtered__||y,N}}),G(["head","last"],function(i,o){var f="take"+(o?"Right":"");Kt.prototype[i]=function(){return this[f](1).value()[0]}}),G(["initial","tail"],function(i,o){var f="drop"+(o?"":"Right");Kt.prototype[i]=function(){return this.__filtered__?new Kt(this):this[f](1)}}),Kt.prototype.compact=function(){return this.filter(yi)},Kt.prototype.find=function(i){return this.filter(i).head()},Kt.prototype.findLast=function(i){return this.reverse().find(i)},Kt.prototype.invokeMap=zt(function(i,o){return typeof i=="function"?new Kt(this):this.map(function(f){return Ca(f,i,o)})}),Kt.prototype.reject=function(i){return this.filter(zl(mt(i)))},Kt.prototype.slice=function(i,o){i=Ut(i);var f=this;return f.__filtered__&&(i>0||o<0)?new Kt(f):(i<0?f=f.takeRight(-i):i&&(f=f.drop(i)),o!==t&&(o=Ut(o),f=o<0?f.dropRight(-o):f.take(o-i)),f)},Kt.prototype.takeRightWhile=function(i){return this.reverse().takeWhile(i).reverse()},Kt.prototype.toArray=function(){return this.take(ne)},mr(Kt.prototype,function(i,o){var f=/^(?:filter|find|map|reject)|While$/.test(o),y=/^(?:head|last)$/.test(o),R=P[y?"take"+(o=="last"?"Right":""):o],N=y||/^find/.test(o);R&&(P.prototype[o]=function(){var W=this.__wrapped__,K=y?[1]:arguments,ie=W instanceof Kt,Ee=K[0],Ae=ie||Lt(W),Le=function(jt){var Zt=R.apply(P,Ct([jt],K));return y&&Xe?Zt[0]:Zt};Ae&&f&&typeof Ee=="function"&&Ee.length!=1&&(ie=Ae=!1);var Xe=this.__chain__,st=!!this.__actions__.length,vt=N&&!Xe,Ot=ie&&!st;if(!N&&Ae){W=Ot?W:new Kt(this);var xt=i.apply(W,K);return xt.__actions__.push({func:Ol,args:[Le],thisArg:t}),new Hi(xt,Xe)}return vt&&Ot?i.apply(this,K):(xt=this.thru(Le),vt?y?xt.value()[0]:xt.value():xt)})}),G(["pop","push","shift","sort","splice","unshift"],function(i){var o=On[i],f=/^(?:push|sort|unshift)$/.test(i)?"tap":"thru",y=/^(?:pop|shift)$/.test(i);P.prototype[i]=function(){var R=arguments;if(y&&!this.__chain__){var N=this.value();return o.apply(Lt(N)?N:[],R)}return this[f](function(W){return o.apply(Lt(W)?W:[],R)})}}),mr(Kt.prototype,function(i,o){var f=P[o];if(f){var y=f.name+"";At.call(_o,y)||(_o[y]=[]),_o[y].push({name:o,func:f})}}),_o[Cl(t,M).name]=[{name:"wrapper",func:t}],Kt.prototype.clone=u_,Kt.prototype.reverse=f_,Kt.prototype.value=h_,P.prototype.at=G0,P.prototype.chain=k0,P.prototype.commit=V0,P.prototype.next=W0,P.prototype.plant=q0,P.prototype.reverse=Y0,P.prototype.toJSON=P.prototype.valueOf=P.prototype.value=j0,P.prototype.first=P.prototype.head,Ma&&(P.prototype[Ma]=X0),P},ce=oe();$i?(($i.exports=ce)._=ce,fo._=ce):Sn._=ce}).call(Go)})(wc,wc.exports);var F1=wc.exports;const B1=U1(F1);var ja=function(){var s=0,e=document.createElement("div");e.style.cssText="position:fixed;top:0;left:0;cursor:pointer;opacity:0.9;z-index:10000",e.addEventListener("click",function(g){g.preventDefault(),n(++s%e.children.length)},!1);function t(g){return e.appendChild(g.dom),g}function n(g){for(var v=0;v<e.children.length;v++)e.children[v].style.display=v===g?"block":"none";s=g}var r=(performance||Date).now(),a=r,c=0,u=t(new ja.Panel("FPS","#0ff","#002")),d=t(new ja.Panel("MS","#0f0","#020"));if(self.performance&&self.performance.memory)var p=t(new ja.Panel("MB","#f08","#201"));return n(0),{REVISION:16,dom:e,addPanel:t,showPanel:n,begin:function(){r=(performance||Date).now()},end:function(){c++;var g=(performance||Date).now();if(d.update(g-r,200),g>=a+1e3&&(u.update(c*1e3/(g-a),100),a=g,c=0,p)){var v=performance.memory;p.update(v.usedJSHeapSize/1048576,v.jsHeapSizeLimit/1048576)}return g},update:function(){r=this.end()},domElement:e,setMode:n}};ja.Panel=function(s,e,t){var n=1/0,r=0,a=Math.round,c=a(window.devicePixelRatio||1),u=80*c,d=48*c,p=3*c,g=2*c,v=3*c,x=15*c,T=74*c,b=30*c,C=document.createElement("canvas");C.width=u,C.height=d,C.style.cssText="width:80px;height:48px";var E=C.getContext("2d");return E.font="bold "+9*c+"px Helvetica,Arial,sans-serif",E.textBaseline="top",E.fillStyle=t,E.fillRect(0,0,u,d),E.fillStyle=e,E.fillText(s,p,g),E.fillRect(v,x,T,b),E.fillStyle=t,E.globalAlpha=.9,E.fillRect(v,x,T,b),{dom:C,update:function(M,V){n=Math.min(n,M),r=Math.max(r,M),E.fillStyle=t,E.globalAlpha=1,E.fillRect(0,0,u,x),E.fillStyle=e,E.fillText(a(M)+" "+s+" ("+a(n)+"-"+a(r)+")",p,g),E.drawImage(C,v+c,x,T-c,b,v,x,T-c,b),E.fillRect(v+T-c,x,c,b),E.fillStyle=t,E.globalAlpha=.9,E.fillRect(v+T-c,x,c,a((1-M/V)*b))}}};const H1=ja,z1=document.getElementById("myForm"),G1=document.getElementById("csvFile"),k1=document.getElementById("divForm"),Ng=document.getElementById("divFormStartingPosition");Ng.style.display="none";const V1=document.getElementById("startingPositionForm"),W1=document.getElementById("startingPositionCSVFile"),Ug=document.getElementById("divContainer"),xs=document.getElementById("trialSelect");let Rc,Hn,bf,wf,Xm,Rf,Cf,Lf,X1=new H1;function Si(s){return B1.cloneDeep(s)}const Og=[],Fg=[],Bg=[],Hg=[],zg=[],Gg=[],kg=[],jf=[],Ys=[],Vg=[],Pf=[],q1=[],Wg=[],If=[],Xg=[];z1.addEventListener("submit",function(s){s.preventDefault();const e=G1.files[0],t=new FileReader;t.readAsText(e),t.onload=function(n){Rc=n.target.result;let r=Rc.split(`
`),a=[],c=r[0].split(",");for(let z=1;z<r.length;z++){let $=r[z].split(","),m={};for(let pe=0;pe<$.length;pe++)m[c[pe].trim()]=$[pe].trim();a.push(m)}let u;const d=[],p=[],g=[],v=[],x=[],T=[],b=[],C=[],E=[],M=[],V=[],U=[],B=[];for(let z=0;z<a.length;z++)z>0&a[z].NODE!=u&&(Og.push(Si(d)),Fg.push(Si(p)),Bg.push(Si(g)),Hg.push(Si(v)),zg.push(Si(x)),Gg.push(Si(T)),kg.push(Si(b)),Ys.push(Si(C)),jf.push(Si(E)),Vg.push(Si(M)),Pf.push(Si(V)),q1.push(Si(U)),Wg.push(Si(B)),d.length=0,p.length=0,g.length=0,v.length=0,x.length=0,T.length=0,b.length=0,C.length=0,E.length=0,M.length=0,V.length=0,U.length=0,B.length=0),d.push(a[z].CURRENT_EULER_X),p.push(a[z].CURRENT_EULER_Y),g.push(a[z].CURRENT_EULER_Z),v.push(a[z].QUARTERNION_X),x.push(a[z].QUARTERNION_Y),T.push(a[z].QUARTERNION_Z),b.push(a[z].QUARTERNION_W),C.push(a[z].OBJECT_NAME),E.push(a[z].MS),M.push(a[z].FRAME),V.push(a[z].NODE),U.push(a[z].PRESENCE),B.push(a[z].COLOUR),u=a[z].NODE;for(let z=0;z<Pf.length;z++){let $=document.createElement("option");$.value=z,$.innerHTML="Trial "+Pf[z][0],xs.appendChild($)}Hn=0,k1.style.display="none",Ng.style.display="flex",console.log(jf)}});V1.addEventListener("submit",function(s){s.preventDefault();const e=W1.files[0],t=new FileReader;t.readAsText(e),t.onload=function(n){Rc=n.target.result;let r=Rc.split(`
`),a=[],c=r[0].split(",");for(let d=1;d<r.length;d++){let p=r[d].split(","),g={};for(let v=0;v<p.length;v++)g[c[v].trim()]=p[v].trim();a.push(g)}let u;for(let d=0;d<a.length;d++)d>0&a[d].NODE!=u&&(Xg.push(Si(If)),If.length=0),If.push(a[d]),u=a[d].NODE;Ug.style.display="none",Hn=0,Y1()}});Ug.style.display="flex";xs.style.display="none";function Y1(){const s=new _R,e=new fi(10,window.innerWidth/window.innerHeight,.1,1e3);let t=0,n=0,r=0,a,c=0,u,d=Wg[0][0];d==null&&(d="0xFFFFFF"),console.log(d);let p=document.createElement("div");p.setAttribute("class","textFont");let g=document.createElement("div");g.setAttribute("class","textFont");let v=document.createElement("div");v.setAttribute("class","textFont");let x=document.createElement("div");x.setAttribute("class","textFont");let T=document.createElement("button"),b=document.createElement("button"),C=document.createElement("button"),E=document.createElement("button");T.innerHTML="Start Trial",T.style.position="fixed",T.style.top="0.5%",T.style.left="0.5%",T.setAttribute("class","submitButton"),T.addEventListener("click",B),E.innerHTML="Go",E.style.position="fixed",E.style.left="0.5%",E.setAttribute("class","submitButton"),E.addEventListener("click",z),b.innerHTML="Start Trial",b.style.position="fixed",b.style.top="0.5%",b.style.left="0.5%",b.setAttribute("class","submitButton"),b.style.display="none",b.addEventListener("click",$),C.innerHTML="Restart Trial",C.style.position="fixed",C.style.top=p.offsetHeight+g.offsetHeight+"px",C.style.left="0.5%",C.addEventListener("click",U),C.setAttribute("class","submitButton"),document.body.appendChild(T),document.body.appendChild(b),document.body.appendChild(C),document.body.appendChild(E),E.style.display="none",C.style.display="none",xs.style.left="0.5%";let M=0;window.addEventListener("resize",V);function V(){e.aspect=window.innerWidth/window.innerHeight,e.updateProjectionMatrix(),te.setSize(window.innerWidth,window.innerHeight)}function U(){C.style.display="none",p.style.display="initial",g.style.display="initial",b.style.display="initial",b.style.top=p.offsetHeight+g.offsetHeight+"px",b.innerHTML="Pause Trial",p.innerHTML="Trial running...",c=0,M=0,je(),ot()}function B(){T.style.display="none",p.style.display="initial",g.style.display="initial",b.style.display="initial",b.style.top=p.offsetHeight+g.offsetHeight+"px",xs.style.position="fixed",xs.style.display="initial",x.style.display="initial",E.style.display="initial",v.style.display="initial",v.style.top=p.offsetHeight+g.offsetHeight+b.offsetHeight+15+"px",x.style.top=p.offsetHeight+g.offsetHeight+b.offsetHeight+v.offsetHeight*2+"px",xs.style.top=p.offsetHeight+g.offsetHeight+b.offsetHeight+v.offsetHeight*2+x.offsetHeight+"px",E.style.top=p.offsetHeight+g.offsetHeight+b.offsetHeight+v.offsetHeight*2+x.offsetHeight+"px",E.style.left=xs.offsetWidth+15+"px",p.innerHTML="Trial running...",b.innerHTML="Pause Trial",ot()}function z(){m(),Hn=xs.value,U()}function $(){M++,M==1?(b.innerHTML="Resume Trial",p.innerHTML="Trial paused...",m()):M==2&&(b.style.top=p.offsetHeight+g.offsetHeight+"px",b.innerHTML="Pause Trial",p.innerHTML="Trial running...",pe(),M=0)}function m(){cancelAnimationFrame(Lf)}function pe(){ot()}p.innerHTML="Start of trial",p.style.fontSize="25px",p.style.lineHeight=1.6+"em",p.style.position="fixed",p.style.top="0px",p.style.left="0.5%",document.body.appendChild(p),v.innerHTML="Present Trial",v.style.fontSize="25px",v.style.lineHeight=1.6+"em",v.style.position="fixed",v.style.left="0.5%",v.style.display="none",document.body.appendChild(v),x.innerHTML="Select a trial to replay",x.style.fontSize="25px",x.style.lineHeight=1.6+"em",x.style.position="fixed",x.style.top="0px",x.style.left="0.5%",x.style.display="none",document.body.appendChild(x),g.innerHTML="0:00",g.style.fontSize="25px",g.style.lineHeight=1.6+"em",g.style.position="fixed",g.style.top=p.offsetHeight+"px",g.style.left="0.5%",document.body.appendChild(g),p.style.display="none",g.style.display="none";let D,X,Te,Re,xe;const te=new Mg;te.setSize(window.innerWidth,window.innerHeight),document.body.appendChild(te.domElement),s.background=new Rt(15790320);const ye=new XR(16777215,1),we=new Pg(16777215,5);we.position.set(0,0,15),s.add(we),new Lg(16777147,5).position.set(0,0,15),s.add(ye),e.position.z=110,e.lookAt(0,0,0);const Ue=new Rg,Ce=new n1(Ue);let be=["L_CUBE_TOP.glb","L_CUBE_TOP.glb","L_CUBE_TOP.glb","L_CUBE_TOP.glb","T_CUBE_TOP.glb"],ne=["DISTRACTOR_1","DISTRACTOR_2","DISTRACTOR_3","DISTRACTOR_4","TARGET_1"];Ue.onLoad=function(){je()};for(let Pe=0;Pe<be.length;Pe++)Ce.load(be[Pe],function(Oe){let Mt=Oe.scene;Mt.traverse(gt=>{gt.isMesh&&(gt.material.color.setHex(d),gt.material.roughness=.8,Mt=gt)}),Pe==0&&(D=Mt,D.name="DISTRACTOR_1"),Pe==1&&(X=Mt,X.name="DISTRACTOR_2"),Pe==2&&(Te=Mt,Te.name="DISTRACTOR_3"),Pe==3&&(Re=Mt,Re.name="DISTRACTOR_4"),Pe==4&&(xe=Mt,xe.name="TARGET_1")},function(Oe){console.log(Oe.loaded/Oe.total*100+"% loaded")},function(Oe){console.log("An error happened")});let me;function We(Pe){bf=window.performance.now(),wf=1e3/Pe,Ye()}function Ye(){Lf=window.requestAnimationFrame(Ye),Rf=window.performance.now(),Cf=Math.round(Rf-bf),!(Cf<wf)&&(Xm=Cf%wf,bf=Rf-Xm,It(),te.render(s,e),X1.update())}function je(){console.log("setting starting positions"),Ys[Hn].includes("TARGET_1")?v.innerHTML="Present Trial":v.innerHTML="Absent Trial";for(let Oe=0;Oe<ne.length;Oe++){let Mt=s.getObjectByName(ne[Oe]);Mt&&s.remove(Mt)}let Pe=Xg[Hn];for(let Oe=0;Oe<Pe.length;Oe++)Pe[Oe].OBJECT_NAME=="DISTRACTOR_1"&&(D.position.set(Pe[Oe].X_POS,Pe[Oe].Y_POS,Pe[Oe].Z_POS),D.rotation.set(Pe[Oe].EULER_X,Pe[Oe].EULER_Y,Pe[Oe].EULER_Z),s.add(D)),Pe[Oe].OBJECT_NAME=="DISTRACTOR_2"&&(X.position.set(Pe[Oe].X_POS,Pe[Oe].Y_POS,Pe[Oe].Z_POS),X.rotation.set(Pe[Oe].EULER_X,Pe[Oe].EULER_Y,Pe[Oe].EULER_Z),s.add(X)),Pe[Oe].OBJECT_NAME=="DISTRACTOR_3"&&(Te.position.set(Pe[Oe].X_POS,Pe[Oe].Y_POS,Pe[Oe].Z_POS),Te.rotation.set(Pe[Oe].EULER_X,Pe[Oe].EULER_Y,Pe[Oe].EULER_Z),s.add(Te)),Pe[Oe].OBJECT_NAME=="DISTRACTOR_4"&&(Re.position.set(Pe[Oe].X_POS,Pe[Oe].Y_POS,Pe[Oe].Z_POS),Re.rotation.set(Pe[Oe].EULER_X,Pe[Oe].EULER_Y,Pe[Oe].EULER_Z),s.add(Re)),Pe[Oe].OBJECT_NAME=="TARGET_1"&&(xe.position.set(Pe[Oe].X_POS,Pe[Oe].Y_POS,Pe[Oe].Z_POS),xe.rotation.set(Pe[Oe].EULER_X,Pe[Oe].EULER_Y,Pe[Oe].EULER_Z),s.add(xe))}function ot(){We(50)}function It(){Ys[Hn][c]=="DISTRACTOR_1"?a=D:Ys[Hn][c]=="DISTRACTOR_2"?a=X:Ys[Hn][c]=="DISTRACTOR_3"?a=Te:Ys[Hn][c]=="DISTRACTOR_4"?a=Re:Ys[Hn][c]=="TARGET_1"&&(a=xe),t=Og[Hn][c],n=Fg[Hn][c],r=Bg[Hn][c],Hg[Hn][c],zg[Hn][c],Gg[Hn][c],kg[Hn][c],u=jf[Hn][c],c++,a.rotation.set(t,n,r);let Pe=new Date(null);Pe.setMilliseconds(u),me=Pe.toISOString().slice(11,22),g.innerHTML=me,c==Vg[Hn].length&&(cancelAnimationFrame(Lf),p.innerHTML="End of trial.",b.style.display="none",C.style.display="initial",C.style.top=p.offsetHeight+g.offsetHeight+"px")}}
