(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))n(r);new MutationObserver(r=>{for(const a of r)if(a.type==="childList")for(const c of a.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&n(c)}).observe(document,{childList:!0,subtree:!0});function t(r){const a={};return r.integrity&&(a.integrity=r.integrity),r.referrerPolicy&&(a.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?a.credentials="include":r.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function n(r){if(r.ep)return;r.ep=!0;const a=t(r);fetch(r.href,a)}})();/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const fh="158",dM=0,_p=1,pM=2,ug=1,mM=2,Yr=3,Zr=0,Ei=1,yr=2,Ms=0,Xo=1,vp=2,xp=3,yp=4,gM=5,Ks=100,_M=101,vM=102,Sp=103,Mp=104,xM=200,yM=201,SM=202,MM=203,Kf=204,$f=205,TM=206,EM=207,AM=208,bM=209,wM=210,RM=211,CM=212,LM=213,PM=214,DM=0,IM=1,NM=2,Ec=3,UM=4,OM=5,FM=6,BM=7,fg=0,HM=1,zM=2,Ts=0,GM=1,kM=2,VM=3,WM=4,XM=5,Tp="attached",qM="detached",hg=300,jo=301,Ko=302,Zf=303,Jf=304,Dc=306,$o=1e3,Yi=1001,Ac=1002,Xn=1003,Qf=1004,Mc=1005,Ti=1006,dg=1007,no=1008,Es=1009,YM=1010,jM=1011,hh=1012,pg=1013,Ss=1014,jr=1015,Ja=1016,mg=1017,gg=1018,Qs=1020,KM=1021,ji=1023,$M=1024,ZM=1025,eo=1026,Zo=1027,JM=1028,_g=1029,QM=1030,vg=1031,xg=1033,qu=33776,Yu=33777,ju=33778,Ku=33779,Ep=35840,Ap=35841,bp=35842,wp=35843,eT=36196,Rp=37492,Cp=37496,Lp=37808,Pp=37809,Dp=37810,Ip=37811,Np=37812,Up=37813,Op=37814,Fp=37815,Bp=37816,Hp=37817,zp=37818,Gp=37819,kp=37820,Vp=37821,$u=36492,Wp=36494,Xp=36495,tT=36283,qp=36284,Yp=36285,jp=36286,Qa=2300,Jo=2301,Zu=2302,Kp=2400,$p=2401,Zp=2402,nT=2500,iT=0,yg=1,eh=2,Sg=3e3,to=3001,rT=3200,sT=3201,Mg=0,oT=1,Ki="",bn="srgb",$n="srgb-linear",dh="display-p3",Ic="display-p3-linear",bc="linear",vn="srgb",wc="rec709",Rc="p3",bo=7680,Jp=519,aT=512,lT=513,cT=514,uT=515,fT=516,hT=517,dT=518,pT=519,th=35044,Qp="300 es",nh=1035,Kr=2e3,Cc=2001;class ra{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const r=this._listeners[e];if(r!==void 0){const a=r.indexOf(t);a!==-1&&r.splice(a,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const n=this._listeners[e.type];if(n!==void 0){e.target=this;const r=n.slice(0);for(let a=0,c=r.length;a<c;a++)r[a].call(this,e);e.target=null}}}const ti=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let em=1234567;const ja=Math.PI/180,Qo=180/Math.PI;function lr(){const s=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(ti[s&255]+ti[s>>8&255]+ti[s>>16&255]+ti[s>>24&255]+"-"+ti[e&255]+ti[e>>8&255]+"-"+ti[e>>16&15|64]+ti[e>>24&255]+"-"+ti[t&63|128]+ti[t>>8&255]+"-"+ti[t>>16&255]+ti[t>>24&255]+ti[n&255]+ti[n>>8&255]+ti[n>>16&255]+ti[n>>24&255]).toLowerCase()}function ii(s,e,t){return Math.max(e,Math.min(t,s))}function ph(s,e){return(s%e+e)%e}function mT(s,e,t,n,r){return n+(s-e)*(r-n)/(t-e)}function gT(s,e,t){return s!==e?(t-s)/(e-s):0}function Ka(s,e,t){return(1-t)*s+t*e}function _T(s,e,t,n){return Ka(s,e,1-Math.exp(-t*n))}function vT(s,e=1){return e-Math.abs(ph(s,e*2)-e)}function xT(s,e,t){return s<=e?0:s>=t?1:(s=(s-e)/(t-e),s*s*(3-2*s))}function yT(s,e,t){return s<=e?0:s>=t?1:(s=(s-e)/(t-e),s*s*s*(s*(s*6-15)+10))}function ST(s,e){return s+Math.floor(Math.random()*(e-s+1))}function MT(s,e){return s+Math.random()*(e-s)}function TT(s){return s*(.5-Math.random())}function ET(s){s!==void 0&&(em=s);let e=em+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function AT(s){return s*ja}function bT(s){return s*Qo}function ih(s){return(s&s-1)===0&&s!==0}function Tg(s){return Math.pow(2,Math.ceil(Math.log(s)/Math.LN2))}function Lc(s){return Math.pow(2,Math.floor(Math.log(s)/Math.LN2))}function wT(s,e,t,n,r){const a=Math.cos,c=Math.sin,u=a(t/2),d=c(t/2),p=a((e+n)/2),g=c((e+n)/2),v=a((e-n)/2),x=c((e-n)/2),E=a((n-e)/2),w=c((n-e)/2);switch(r){case"XYX":s.set(u*g,d*v,d*x,u*p);break;case"YZY":s.set(d*x,u*g,d*v,u*p);break;case"ZXZ":s.set(d*v,d*x,u*g,u*p);break;case"XZX":s.set(u*g,d*w,d*E,u*p);break;case"YXY":s.set(d*E,u*g,d*w,u*p);break;case"ZYZ":s.set(d*w,d*E,u*g,u*p);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+r)}}function Sr(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("Invalid component type.")}}function fn(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("Invalid component type.")}}const RT={DEG2RAD:ja,RAD2DEG:Qo,generateUUID:lr,clamp:ii,euclideanModulo:ph,mapLinear:mT,inverseLerp:gT,lerp:Ka,damp:_T,pingpong:vT,smoothstep:xT,smootherstep:yT,randInt:ST,randFloat:MT,randFloatSpread:TT,seededRandom:ET,degToRad:AT,radToDeg:bT,isPowerOfTwo:ih,ceilPowerOfTwo:Tg,floorPowerOfTwo:Lc,setQuaternionFromProperEuler:wT,normalize:fn,denormalize:Sr};class Qt{constructor(e=0,t=0){Qt.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6],this.y=r[1]*t+r[4]*n+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(ii(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),r=Math.sin(t),a=this.x-e.x,c=this.y-e.y;return this.x=a*n-c*r+e.x,this.y=a*r+c*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Xt{constructor(e,t,n,r,a,c,u,d,p){Xt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,r,a,c,u,d,p)}set(e,t,n,r,a,c,u,d,p){const g=this.elements;return g[0]=e,g[1]=r,g[2]=u,g[3]=t,g[4]=a,g[5]=d,g[6]=n,g[7]=c,g[8]=p,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,r=t.elements,a=this.elements,c=n[0],u=n[3],d=n[6],p=n[1],g=n[4],v=n[7],x=n[2],E=n[5],w=n[8],C=r[0],T=r[3],M=r[6],k=r[1],O=r[4],B=r[7],W=r[2],J=r[5],m=r[8];return a[0]=c*C+u*k+d*W,a[3]=c*T+u*O+d*J,a[6]=c*M+u*B+d*m,a[1]=p*C+g*k+v*W,a[4]=p*T+g*O+v*J,a[7]=p*M+g*B+v*m,a[2]=x*C+E*k+w*W,a[5]=x*T+E*O+w*J,a[8]=x*M+E*B+w*m,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],r=e[2],a=e[3],c=e[4],u=e[5],d=e[6],p=e[7],g=e[8];return t*c*g-t*u*p-n*a*g+n*u*d+r*a*p-r*c*d}invert(){const e=this.elements,t=e[0],n=e[1],r=e[2],a=e[3],c=e[4],u=e[5],d=e[6],p=e[7],g=e[8],v=g*c-u*p,x=u*d-g*a,E=p*a-c*d,w=t*v+n*x+r*E;if(w===0)return this.set(0,0,0,0,0,0,0,0,0);const C=1/w;return e[0]=v*C,e[1]=(r*p-g*n)*C,e[2]=(u*n-r*c)*C,e[3]=x*C,e[4]=(g*t-r*d)*C,e[5]=(r*a-u*t)*C,e[6]=E*C,e[7]=(n*d-p*t)*C,e[8]=(c*t-n*a)*C,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,r,a,c,u){const d=Math.cos(a),p=Math.sin(a);return this.set(n*d,n*p,-n*(d*c+p*u)+c+e,-r*p,r*d,-r*(-p*c+d*u)+u+t,0,0,1),this}scale(e,t){return this.premultiply(Ju.makeScale(e,t)),this}rotate(e){return this.premultiply(Ju.makeRotation(-e)),this}translate(e,t){return this.premultiply(Ju.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let r=0;r<9;r++)if(t[r]!==n[r])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Ju=new Xt;function Eg(s){for(let e=s.length-1;e>=0;--e)if(s[e]>=65535)return!0;return!1}function el(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function CT(){const s=el("canvas");return s.style.display="block",s}const tm={};function $a(s){s in tm||(tm[s]=!0,console.warn(s))}const nm=new Xt().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),im=new Xt().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),jl={[$n]:{transfer:bc,primaries:wc,toReference:s=>s,fromReference:s=>s},[bn]:{transfer:vn,primaries:wc,toReference:s=>s.convertSRGBToLinear(),fromReference:s=>s.convertLinearToSRGB()},[Ic]:{transfer:bc,primaries:Rc,toReference:s=>s.applyMatrix3(im),fromReference:s=>s.applyMatrix3(nm)},[dh]:{transfer:vn,primaries:Rc,toReference:s=>s.convertSRGBToLinear().applyMatrix3(im),fromReference:s=>s.applyMatrix3(nm).convertLinearToSRGB()}},LT=new Set([$n,Ic]),an={enabled:!0,_workingColorSpace:$n,get legacyMode(){return console.warn("THREE.ColorManagement: .legacyMode=false renamed to .enabled=true in r150."),!this.enabled},set legacyMode(s){console.warn("THREE.ColorManagement: .legacyMode=false renamed to .enabled=true in r150."),this.enabled=!s},get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(s){if(!LT.has(s))throw new Error(`Unsupported working color space, "${s}".`);this._workingColorSpace=s},convert:function(s,e,t){if(this.enabled===!1||e===t||!e||!t)return s;const n=jl[e].toReference,r=jl[t].fromReference;return r(n(s))},fromWorkingColorSpace:function(s,e){return this.convert(s,this._workingColorSpace,e)},toWorkingColorSpace:function(s,e){return this.convert(s,e,this._workingColorSpace)},getPrimaries:function(s){return jl[s].primaries},getTransfer:function(s){return s===Ki?bc:jl[s].transfer}};function qo(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function Qu(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}let wo;class Ag{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{wo===void 0&&(wo=el("canvas")),wo.width=e.width,wo.height=e.height;const n=wo.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=wo}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=el("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const r=n.getImageData(0,0,e.width,e.height),a=r.data;for(let c=0;c<a.length;c++)a[c]=qo(a[c]/255)*255;return n.putImageData(r,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(qo(t[n]/255)*255):t[n]=qo(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let PT=0;class bg{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:PT++}),this.uuid=lr(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},r=this.data;if(r!==null){let a;if(Array.isArray(r)){a=[];for(let c=0,u=r.length;c<u;c++)r[c].isDataTexture?a.push(ef(r[c].image)):a.push(ef(r[c]))}else a=ef(r);n.url=a}return t||(e.images[this.uuid]=n),n}}function ef(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?Ag.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let DT=0;class Kn extends ra{constructor(e=Kn.DEFAULT_IMAGE,t=Kn.DEFAULT_MAPPING,n=Yi,r=Yi,a=Ti,c=no,u=ji,d=Es,p=Kn.DEFAULT_ANISOTROPY,g=Ki){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:DT++}),this.uuid=lr(),this.name="",this.source=new bg(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=r,this.magFilter=a,this.minFilter=c,this.anisotropy=p,this.format=u,this.internalFormat=null,this.type=d,this.offset=new Qt(0,0),this.repeat=new Qt(1,1),this.center=new Qt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Xt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof g=="string"?this.colorSpace=g:($a("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=g===to?bn:Ki),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==hg)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case $o:e.x=e.x-Math.floor(e.x);break;case Yi:e.x=e.x<0?0:1;break;case Ac:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case $o:e.y=e.y-Math.floor(e.y);break;case Yi:e.y=e.y<0?0:1;break;case Ac:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return $a("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===bn?to:Sg}set encoding(e){$a("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=e===to?bn:Ki}}Kn.DEFAULT_IMAGE=null;Kn.DEFAULT_MAPPING=hg;Kn.DEFAULT_ANISOTROPY=1;class dn{constructor(e=0,t=0,n=0,r=1){dn.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,r){return this.x=e,this.y=t,this.z=n,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,r=this.z,a=this.w,c=e.elements;return this.x=c[0]*t+c[4]*n+c[8]*r+c[12]*a,this.y=c[1]*t+c[5]*n+c[9]*r+c[13]*a,this.z=c[2]*t+c[6]*n+c[10]*r+c[14]*a,this.w=c[3]*t+c[7]*n+c[11]*r+c[15]*a,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,r,a;const d=e.elements,p=d[0],g=d[4],v=d[8],x=d[1],E=d[5],w=d[9],C=d[2],T=d[6],M=d[10];if(Math.abs(g-x)<.01&&Math.abs(v-C)<.01&&Math.abs(w-T)<.01){if(Math.abs(g+x)<.1&&Math.abs(v+C)<.1&&Math.abs(w+T)<.1&&Math.abs(p+E+M-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const O=(p+1)/2,B=(E+1)/2,W=(M+1)/2,J=(g+x)/4,m=(v+C)/4,me=(w+T)/4;return O>B&&O>W?O<.01?(n=0,r=.707106781,a=.707106781):(n=Math.sqrt(O),r=J/n,a=m/n):B>W?B<.01?(n=.707106781,r=0,a=.707106781):(r=Math.sqrt(B),n=J/r,a=me/r):W<.01?(n=.707106781,r=.707106781,a=0):(a=Math.sqrt(W),n=m/a,r=me/a),this.set(n,r,a,t),this}let k=Math.sqrt((T-w)*(T-w)+(v-C)*(v-C)+(x-g)*(x-g));return Math.abs(k)<.001&&(k=1),this.x=(T-w)/k,this.y=(v-C)/k,this.z=(x-g)/k,this.w=Math.acos((p+E+M-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class IT extends ra{constructor(e=1,t=1,n={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new dn(0,0,e,t),this.scissorTest=!1,this.viewport=new dn(0,0,e,t);const r={width:e,height:t,depth:1};n.encoding!==void 0&&($a("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),n.colorSpace=n.encoding===to?bn:Ki),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Ti,depthBuffer:!0,stencilBuffer:!1,depthTexture:null,samples:0},n),this.texture=new Kn(r,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=n.generateMipmaps,this.texture.internalFormat=n.internalFormat,this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}setSize(e,t,n=1){(this.width!==e||this.height!==t||this.depth!==n)&&(this.width=e,this.height=t,this.depth=n,this.texture.image.width=e,this.texture.image.height=t,this.texture.image.depth=n,this.dispose()),this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new bg(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class io extends IT{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class wg extends Kn{constructor(e=null,t=1,n=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=Xn,this.minFilter=Xn,this.wrapR=Yi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class NT extends Kn{constructor(e=null,t=1,n=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=Xn,this.minFilter=Xn,this.wrapR=Yi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class As{constructor(e=0,t=0,n=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=r}static slerpFlat(e,t,n,r,a,c,u){let d=n[r+0],p=n[r+1],g=n[r+2],v=n[r+3];const x=a[c+0],E=a[c+1],w=a[c+2],C=a[c+3];if(u===0){e[t+0]=d,e[t+1]=p,e[t+2]=g,e[t+3]=v;return}if(u===1){e[t+0]=x,e[t+1]=E,e[t+2]=w,e[t+3]=C;return}if(v!==C||d!==x||p!==E||g!==w){let T=1-u;const M=d*x+p*E+g*w+v*C,k=M>=0?1:-1,O=1-M*M;if(O>Number.EPSILON){const W=Math.sqrt(O),J=Math.atan2(W,M*k);T=Math.sin(T*J)/W,u=Math.sin(u*J)/W}const B=u*k;if(d=d*T+x*B,p=p*T+E*B,g=g*T+w*B,v=v*T+C*B,T===1-u){const W=1/Math.sqrt(d*d+p*p+g*g+v*v);d*=W,p*=W,g*=W,v*=W}}e[t]=d,e[t+1]=p,e[t+2]=g,e[t+3]=v}static multiplyQuaternionsFlat(e,t,n,r,a,c){const u=n[r],d=n[r+1],p=n[r+2],g=n[r+3],v=a[c],x=a[c+1],E=a[c+2],w=a[c+3];return e[t]=u*w+g*v+d*E-p*x,e[t+1]=d*w+g*x+p*v-u*E,e[t+2]=p*w+g*E+u*x-d*v,e[t+3]=g*w-u*v-d*x-p*E,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,r){return this._x=e,this._y=t,this._z=n,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t){const n=e._x,r=e._y,a=e._z,c=e._order,u=Math.cos,d=Math.sin,p=u(n/2),g=u(r/2),v=u(a/2),x=d(n/2),E=d(r/2),w=d(a/2);switch(c){case"XYZ":this._x=x*g*v+p*E*w,this._y=p*E*v-x*g*w,this._z=p*g*w+x*E*v,this._w=p*g*v-x*E*w;break;case"YXZ":this._x=x*g*v+p*E*w,this._y=p*E*v-x*g*w,this._z=p*g*w-x*E*v,this._w=p*g*v+x*E*w;break;case"ZXY":this._x=x*g*v-p*E*w,this._y=p*E*v+x*g*w,this._z=p*g*w+x*E*v,this._w=p*g*v-x*E*w;break;case"ZYX":this._x=x*g*v-p*E*w,this._y=p*E*v+x*g*w,this._z=p*g*w-x*E*v,this._w=p*g*v+x*E*w;break;case"YZX":this._x=x*g*v+p*E*w,this._y=p*E*v+x*g*w,this._z=p*g*w-x*E*v,this._w=p*g*v-x*E*w;break;case"XZY":this._x=x*g*v-p*E*w,this._y=p*E*v-x*g*w,this._z=p*g*w+x*E*v,this._w=p*g*v+x*E*w;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+c)}return t!==!1&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,r=Math.sin(n);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],r=t[4],a=t[8],c=t[1],u=t[5],d=t[9],p=t[2],g=t[6],v=t[10],x=n+u+v;if(x>0){const E=.5/Math.sqrt(x+1);this._w=.25/E,this._x=(g-d)*E,this._y=(a-p)*E,this._z=(c-r)*E}else if(n>u&&n>v){const E=2*Math.sqrt(1+n-u-v);this._w=(g-d)/E,this._x=.25*E,this._y=(r+c)/E,this._z=(a+p)/E}else if(u>v){const E=2*Math.sqrt(1+u-n-v);this._w=(a-p)/E,this._x=(r+c)/E,this._y=.25*E,this._z=(d+g)/E}else{const E=2*Math.sqrt(1+v-n-u);this._w=(c-r)/E,this._x=(a+p)/E,this._y=(d+g)/E,this._z=.25*E}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(ii(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const r=Math.min(1,t/n);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,r=e._y,a=e._z,c=e._w,u=t._x,d=t._y,p=t._z,g=t._w;return this._x=n*g+c*u+r*p-a*d,this._y=r*g+c*d+a*u-n*p,this._z=a*g+c*p+n*d-r*u,this._w=c*g-n*u-r*d-a*p,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,r=this._y,a=this._z,c=this._w;let u=c*e._w+n*e._x+r*e._y+a*e._z;if(u<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,u=-u):this.copy(e),u>=1)return this._w=c,this._x=n,this._y=r,this._z=a,this;const d=1-u*u;if(d<=Number.EPSILON){const E=1-t;return this._w=E*c+t*this._w,this._x=E*n+t*this._x,this._y=E*r+t*this._y,this._z=E*a+t*this._z,this.normalize(),this._onChangeCallback(),this}const p=Math.sqrt(d),g=Math.atan2(p,u),v=Math.sin((1-t)*g)/p,x=Math.sin(t*g)/p;return this._w=c*v+this._w*x,this._x=n*v+this._x*x,this._y=r*v+this._y*x,this._z=a*v+this._z*x,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=Math.random(),t=Math.sqrt(1-e),n=Math.sqrt(e),r=2*Math.PI*Math.random(),a=2*Math.PI*Math.random();return this.set(t*Math.cos(r),n*Math.sin(a),n*Math.cos(a),t*Math.sin(r))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class re{constructor(e=0,t=0,n=0){re.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(rm.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(rm.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,r=this.z,a=e.elements;return this.x=a[0]*t+a[3]*n+a[6]*r,this.y=a[1]*t+a[4]*n+a[7]*r,this.z=a[2]*t+a[5]*n+a[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,r=this.z,a=e.elements,c=1/(a[3]*t+a[7]*n+a[11]*r+a[15]);return this.x=(a[0]*t+a[4]*n+a[8]*r+a[12])*c,this.y=(a[1]*t+a[5]*n+a[9]*r+a[13])*c,this.z=(a[2]*t+a[6]*n+a[10]*r+a[14])*c,this}applyQuaternion(e){const t=this.x,n=this.y,r=this.z,a=e.x,c=e.y,u=e.z,d=e.w,p=2*(c*r-u*n),g=2*(u*t-a*r),v=2*(a*n-c*t);return this.x=t+d*p+c*v-u*g,this.y=n+d*g+u*p-a*v,this.z=r+d*v+a*g-c*p,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,r=this.z,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*r,this.y=a[1]*t+a[5]*n+a[9]*r,this.z=a[2]*t+a[6]*n+a[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,r=e.y,a=e.z,c=t.x,u=t.y,d=t.z;return this.x=r*d-a*u,this.y=a*c-n*d,this.z=n*u-r*c,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return tf.copy(this).projectOnVector(e),this.sub(tf)}reflect(e){return this.sub(tf.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(ii(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,r=this.z-e.z;return t*t+n*n+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const r=Math.sin(t)*e;return this.x=r*Math.sin(n),this.y=Math.cos(t)*e,this.z=r*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=(Math.random()-.5)*2,t=Math.random()*Math.PI*2,n=Math.sqrt(1-e**2);return this.x=n*Math.cos(t),this.y=n*Math.sin(t),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const tf=new re,rm=new As;class Jr{constructor(e=new re(1/0,1/0,1/0),t=new re(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(rr.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(rr.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=rr.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const a=n.getAttribute("position");if(t===!0&&a!==void 0&&e.isInstancedMesh!==!0)for(let c=0,u=a.count;c<u;c++)e.isMesh===!0?e.getVertexPosition(c,rr):rr.fromBufferAttribute(a,c),rr.applyMatrix4(e.matrixWorld),this.expandByPoint(rr);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Kl.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Kl.copy(n.boundingBox)),Kl.applyMatrix4(e.matrixWorld),this.union(Kl)}const r=e.children;for(let a=0,c=r.length;a<c;a++)this.expandByObject(r[a],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,rr),rr.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Ba),$l.subVectors(this.max,Ba),Ro.subVectors(e.a,Ba),Co.subVectors(e.b,Ba),Lo.subVectors(e.c,Ba),ds.subVectors(Co,Ro),ps.subVectors(Lo,Co),Gs.subVectors(Ro,Lo);let t=[0,-ds.z,ds.y,0,-ps.z,ps.y,0,-Gs.z,Gs.y,ds.z,0,-ds.x,ps.z,0,-ps.x,Gs.z,0,-Gs.x,-ds.y,ds.x,0,-ps.y,ps.x,0,-Gs.y,Gs.x,0];return!nf(t,Ro,Co,Lo,$l)||(t=[1,0,0,0,1,0,0,0,1],!nf(t,Ro,Co,Lo,$l))?!1:(Zl.crossVectors(ds,ps),t=[Zl.x,Zl.y,Zl.z],nf(t,Ro,Co,Lo,$l))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,rr).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(rr).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Gr[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Gr[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Gr[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Gr[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Gr[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Gr[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Gr[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Gr[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Gr),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const Gr=[new re,new re,new re,new re,new re,new re,new re,new re],rr=new re,Kl=new Jr,Ro=new re,Co=new re,Lo=new re,ds=new re,ps=new re,Gs=new re,Ba=new re,$l=new re,Zl=new re,ks=new re;function nf(s,e,t,n,r){for(let a=0,c=s.length-3;a<=c;a+=3){ks.fromArray(s,a);const u=r.x*Math.abs(ks.x)+r.y*Math.abs(ks.y)+r.z*Math.abs(ks.z),d=e.dot(ks),p=t.dot(ks),g=n.dot(ks);if(Math.max(-Math.max(d,p,g),Math.min(d,p,g))>u)return!1}return!0}const UT=new Jr,Ha=new re,rf=new re;class Tr{constructor(e=new re,t=-1){this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):UT.setFromPoints(e).getCenter(n);let r=0;for(let a=0,c=e.length;a<c;a++)r=Math.max(r,n.distanceToSquared(e[a]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Ha.subVectors(e,this.center);const t=Ha.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),r=(n-this.radius)*.5;this.center.addScaledVector(Ha,r/n),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(rf.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Ha.copy(e.center).add(rf)),this.expandByPoint(Ha.copy(e.center).sub(rf))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const kr=new re,sf=new re,Jl=new re,ms=new re,of=new re,Ql=new re,af=new re;class Nc{constructor(e=new re,t=new re(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,kr)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=kr.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(kr.copy(this.origin).addScaledVector(this.direction,t),kr.distanceToSquared(e))}distanceSqToSegment(e,t,n,r){sf.copy(e).add(t).multiplyScalar(.5),Jl.copy(t).sub(e).normalize(),ms.copy(this.origin).sub(sf);const a=e.distanceTo(t)*.5,c=-this.direction.dot(Jl),u=ms.dot(this.direction),d=-ms.dot(Jl),p=ms.lengthSq(),g=Math.abs(1-c*c);let v,x,E,w;if(g>0)if(v=c*d-u,x=c*u-d,w=a*g,v>=0)if(x>=-w)if(x<=w){const C=1/g;v*=C,x*=C,E=v*(v+c*x+2*u)+x*(c*v+x+2*d)+p}else x=a,v=Math.max(0,-(c*x+u)),E=-v*v+x*(x+2*d)+p;else x=-a,v=Math.max(0,-(c*x+u)),E=-v*v+x*(x+2*d)+p;else x<=-w?(v=Math.max(0,-(-c*a+u)),x=v>0?-a:Math.min(Math.max(-a,-d),a),E=-v*v+x*(x+2*d)+p):x<=w?(v=0,x=Math.min(Math.max(-a,-d),a),E=x*(x+2*d)+p):(v=Math.max(0,-(c*a+u)),x=v>0?a:Math.min(Math.max(-a,-d),a),E=-v*v+x*(x+2*d)+p);else x=c>0?-a:a,v=Math.max(0,-(c*x+u)),E=-v*v+x*(x+2*d)+p;return n&&n.copy(this.origin).addScaledVector(this.direction,v),r&&r.copy(sf).addScaledVector(Jl,x),E}intersectSphere(e,t){kr.subVectors(e.center,this.origin);const n=kr.dot(this.direction),r=kr.dot(kr)-n*n,a=e.radius*e.radius;if(r>a)return null;const c=Math.sqrt(a-r),u=n-c,d=n+c;return d<0?null:u<0?this.at(d,t):this.at(u,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,r,a,c,u,d;const p=1/this.direction.x,g=1/this.direction.y,v=1/this.direction.z,x=this.origin;return p>=0?(n=(e.min.x-x.x)*p,r=(e.max.x-x.x)*p):(n=(e.max.x-x.x)*p,r=(e.min.x-x.x)*p),g>=0?(a=(e.min.y-x.y)*g,c=(e.max.y-x.y)*g):(a=(e.max.y-x.y)*g,c=(e.min.y-x.y)*g),n>c||a>r||((a>n||isNaN(n))&&(n=a),(c<r||isNaN(r))&&(r=c),v>=0?(u=(e.min.z-x.z)*v,d=(e.max.z-x.z)*v):(u=(e.max.z-x.z)*v,d=(e.min.z-x.z)*v),n>d||u>r)||((u>n||n!==n)&&(n=u),(d<r||r!==r)&&(r=d),r<0)?null:this.at(n>=0?n:r,t)}intersectsBox(e){return this.intersectBox(e,kr)!==null}intersectTriangle(e,t,n,r,a){of.subVectors(t,e),Ql.subVectors(n,e),af.crossVectors(of,Ql);let c=this.direction.dot(af),u;if(c>0){if(r)return null;u=1}else if(c<0)u=-1,c=-c;else return null;ms.subVectors(this.origin,e);const d=u*this.direction.dot(Ql.crossVectors(ms,Ql));if(d<0)return null;const p=u*this.direction.dot(of.cross(ms));if(p<0||d+p>c)return null;const g=-u*ms.dot(af);return g<0?null:this.at(g/c,a)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class qt{constructor(e,t,n,r,a,c,u,d,p,g,v,x,E,w,C,T){qt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,r,a,c,u,d,p,g,v,x,E,w,C,T)}set(e,t,n,r,a,c,u,d,p,g,v,x,E,w,C,T){const M=this.elements;return M[0]=e,M[4]=t,M[8]=n,M[12]=r,M[1]=a,M[5]=c,M[9]=u,M[13]=d,M[2]=p,M[6]=g,M[10]=v,M[14]=x,M[3]=E,M[7]=w,M[11]=C,M[15]=T,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new qt().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,r=1/Po.setFromMatrixColumn(e,0).length(),a=1/Po.setFromMatrixColumn(e,1).length(),c=1/Po.setFromMatrixColumn(e,2).length();return t[0]=n[0]*r,t[1]=n[1]*r,t[2]=n[2]*r,t[3]=0,t[4]=n[4]*a,t[5]=n[5]*a,t[6]=n[6]*a,t[7]=0,t[8]=n[8]*c,t[9]=n[9]*c,t[10]=n[10]*c,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,r=e.y,a=e.z,c=Math.cos(n),u=Math.sin(n),d=Math.cos(r),p=Math.sin(r),g=Math.cos(a),v=Math.sin(a);if(e.order==="XYZ"){const x=c*g,E=c*v,w=u*g,C=u*v;t[0]=d*g,t[4]=-d*v,t[8]=p,t[1]=E+w*p,t[5]=x-C*p,t[9]=-u*d,t[2]=C-x*p,t[6]=w+E*p,t[10]=c*d}else if(e.order==="YXZ"){const x=d*g,E=d*v,w=p*g,C=p*v;t[0]=x+C*u,t[4]=w*u-E,t[8]=c*p,t[1]=c*v,t[5]=c*g,t[9]=-u,t[2]=E*u-w,t[6]=C+x*u,t[10]=c*d}else if(e.order==="ZXY"){const x=d*g,E=d*v,w=p*g,C=p*v;t[0]=x-C*u,t[4]=-c*v,t[8]=w+E*u,t[1]=E+w*u,t[5]=c*g,t[9]=C-x*u,t[2]=-c*p,t[6]=u,t[10]=c*d}else if(e.order==="ZYX"){const x=c*g,E=c*v,w=u*g,C=u*v;t[0]=d*g,t[4]=w*p-E,t[8]=x*p+C,t[1]=d*v,t[5]=C*p+x,t[9]=E*p-w,t[2]=-p,t[6]=u*d,t[10]=c*d}else if(e.order==="YZX"){const x=c*d,E=c*p,w=u*d,C=u*p;t[0]=d*g,t[4]=C-x*v,t[8]=w*v+E,t[1]=v,t[5]=c*g,t[9]=-u*g,t[2]=-p*g,t[6]=E*v+w,t[10]=x-C*v}else if(e.order==="XZY"){const x=c*d,E=c*p,w=u*d,C=u*p;t[0]=d*g,t[4]=-v,t[8]=p*g,t[1]=x*v+C,t[5]=c*g,t[9]=E*v-w,t[2]=w*v-E,t[6]=u*g,t[10]=C*v+x}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(OT,e,FT)}lookAt(e,t,n){const r=this.elements;return Ni.subVectors(e,t),Ni.lengthSq()===0&&(Ni.z=1),Ni.normalize(),gs.crossVectors(n,Ni),gs.lengthSq()===0&&(Math.abs(n.z)===1?Ni.x+=1e-4:Ni.z+=1e-4,Ni.normalize(),gs.crossVectors(n,Ni)),gs.normalize(),ec.crossVectors(Ni,gs),r[0]=gs.x,r[4]=ec.x,r[8]=Ni.x,r[1]=gs.y,r[5]=ec.y,r[9]=Ni.y,r[2]=gs.z,r[6]=ec.z,r[10]=Ni.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,r=t.elements,a=this.elements,c=n[0],u=n[4],d=n[8],p=n[12],g=n[1],v=n[5],x=n[9],E=n[13],w=n[2],C=n[6],T=n[10],M=n[14],k=n[3],O=n[7],B=n[11],W=n[15],J=r[0],m=r[4],me=r[8],N=r[12],X=r[1],Ee=r[5],Re=r[9],ye=r[13],te=r[2],xe=r[6],we=r[10],ge=r[14],Oe=r[3],Ce=r[7],be=r[11],ne=r[15];return a[0]=c*J+u*X+d*te+p*Oe,a[4]=c*m+u*Ee+d*xe+p*Ce,a[8]=c*me+u*Re+d*we+p*be,a[12]=c*N+u*ye+d*ge+p*ne,a[1]=g*J+v*X+x*te+E*Oe,a[5]=g*m+v*Ee+x*xe+E*Ce,a[9]=g*me+v*Re+x*we+E*be,a[13]=g*N+v*ye+x*ge+E*ne,a[2]=w*J+C*X+T*te+M*Oe,a[6]=w*m+C*Ee+T*xe+M*Ce,a[10]=w*me+C*Re+T*we+M*be,a[14]=w*N+C*ye+T*ge+M*ne,a[3]=k*J+O*X+B*te+W*Oe,a[7]=k*m+O*Ee+B*xe+W*Ce,a[11]=k*me+O*Re+B*we+W*be,a[15]=k*N+O*ye+B*ge+W*ne,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],r=e[8],a=e[12],c=e[1],u=e[5],d=e[9],p=e[13],g=e[2],v=e[6],x=e[10],E=e[14],w=e[3],C=e[7],T=e[11],M=e[15];return w*(+a*d*v-r*p*v-a*u*x+n*p*x+r*u*E-n*d*E)+C*(+t*d*E-t*p*x+a*c*x-r*c*E+r*p*g-a*d*g)+T*(+t*p*v-t*u*E-a*c*v+n*c*E+a*u*g-n*p*g)+M*(-r*u*g-t*d*v+t*u*x+r*c*v-n*c*x+n*d*g)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],r=e[2],a=e[3],c=e[4],u=e[5],d=e[6],p=e[7],g=e[8],v=e[9],x=e[10],E=e[11],w=e[12],C=e[13],T=e[14],M=e[15],k=v*T*p-C*x*p+C*d*E-u*T*E-v*d*M+u*x*M,O=w*x*p-g*T*p-w*d*E+c*T*E+g*d*M-c*x*M,B=g*C*p-w*v*p+w*u*E-c*C*E-g*u*M+c*v*M,W=w*v*d-g*C*d-w*u*x+c*C*x+g*u*T-c*v*T,J=t*k+n*O+r*B+a*W;if(J===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const m=1/J;return e[0]=k*m,e[1]=(C*x*a-v*T*a-C*r*E+n*T*E+v*r*M-n*x*M)*m,e[2]=(u*T*a-C*d*a+C*r*p-n*T*p-u*r*M+n*d*M)*m,e[3]=(v*d*a-u*x*a-v*r*p+n*x*p+u*r*E-n*d*E)*m,e[4]=O*m,e[5]=(g*T*a-w*x*a+w*r*E-t*T*E-g*r*M+t*x*M)*m,e[6]=(w*d*a-c*T*a-w*r*p+t*T*p+c*r*M-t*d*M)*m,e[7]=(c*x*a-g*d*a+g*r*p-t*x*p-c*r*E+t*d*E)*m,e[8]=B*m,e[9]=(w*v*a-g*C*a-w*n*E+t*C*E+g*n*M-t*v*M)*m,e[10]=(c*C*a-w*u*a+w*n*p-t*C*p-c*n*M+t*u*M)*m,e[11]=(g*u*a-c*v*a-g*n*p+t*v*p+c*n*E-t*u*E)*m,e[12]=W*m,e[13]=(g*C*r-w*v*r+w*n*x-t*C*x-g*n*T+t*v*T)*m,e[14]=(w*u*r-c*C*r-w*n*d+t*C*d+c*n*T-t*u*T)*m,e[15]=(c*v*r-g*u*r+g*n*d-t*v*d-c*n*x+t*u*x)*m,this}scale(e){const t=this.elements,n=e.x,r=e.y,a=e.z;return t[0]*=n,t[4]*=r,t[8]*=a,t[1]*=n,t[5]*=r,t[9]*=a,t[2]*=n,t[6]*=r,t[10]*=a,t[3]*=n,t[7]*=r,t[11]*=a,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,r))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),r=Math.sin(t),a=1-n,c=e.x,u=e.y,d=e.z,p=a*c,g=a*u;return this.set(p*c+n,p*u-r*d,p*d+r*u,0,p*u+r*d,g*u+n,g*d-r*c,0,p*d-r*u,g*d+r*c,a*d*d+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,r,a,c){return this.set(1,n,a,0,e,1,c,0,t,r,1,0,0,0,0,1),this}compose(e,t,n){const r=this.elements,a=t._x,c=t._y,u=t._z,d=t._w,p=a+a,g=c+c,v=u+u,x=a*p,E=a*g,w=a*v,C=c*g,T=c*v,M=u*v,k=d*p,O=d*g,B=d*v,W=n.x,J=n.y,m=n.z;return r[0]=(1-(C+M))*W,r[1]=(E+B)*W,r[2]=(w-O)*W,r[3]=0,r[4]=(E-B)*J,r[5]=(1-(x+M))*J,r[6]=(T+k)*J,r[7]=0,r[8]=(w+O)*m,r[9]=(T-k)*m,r[10]=(1-(x+C))*m,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,n){const r=this.elements;let a=Po.set(r[0],r[1],r[2]).length();const c=Po.set(r[4],r[5],r[6]).length(),u=Po.set(r[8],r[9],r[10]).length();this.determinant()<0&&(a=-a),e.x=r[12],e.y=r[13],e.z=r[14],sr.copy(this);const p=1/a,g=1/c,v=1/u;return sr.elements[0]*=p,sr.elements[1]*=p,sr.elements[2]*=p,sr.elements[4]*=g,sr.elements[5]*=g,sr.elements[6]*=g,sr.elements[8]*=v,sr.elements[9]*=v,sr.elements[10]*=v,t.setFromRotationMatrix(sr),n.x=a,n.y=c,n.z=u,this}makePerspective(e,t,n,r,a,c,u=Kr){const d=this.elements,p=2*a/(t-e),g=2*a/(n-r),v=(t+e)/(t-e),x=(n+r)/(n-r);let E,w;if(u===Kr)E=-(c+a)/(c-a),w=-2*c*a/(c-a);else if(u===Cc)E=-c/(c-a),w=-c*a/(c-a);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+u);return d[0]=p,d[4]=0,d[8]=v,d[12]=0,d[1]=0,d[5]=g,d[9]=x,d[13]=0,d[2]=0,d[6]=0,d[10]=E,d[14]=w,d[3]=0,d[7]=0,d[11]=-1,d[15]=0,this}makeOrthographic(e,t,n,r,a,c,u=Kr){const d=this.elements,p=1/(t-e),g=1/(n-r),v=1/(c-a),x=(t+e)*p,E=(n+r)*g;let w,C;if(u===Kr)w=(c+a)*v,C=-2*v;else if(u===Cc)w=a*v,C=-1*v;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+u);return d[0]=2*p,d[4]=0,d[8]=0,d[12]=-x,d[1]=0,d[5]=2*g,d[9]=0,d[13]=-E,d[2]=0,d[6]=0,d[10]=C,d[14]=-w,d[3]=0,d[7]=0,d[11]=0,d[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let r=0;r<16;r++)if(t[r]!==n[r])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const Po=new re,sr=new qt,OT=new re(0,0,0),FT=new re(1,1,1),gs=new re,ec=new re,Ni=new re,sm=new qt,om=new As;class Uc{constructor(e=0,t=0,n=0,r=Uc.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,r=this._order){return this._x=e,this._y=t,this._z=n,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const r=e.elements,a=r[0],c=r[4],u=r[8],d=r[1],p=r[5],g=r[9],v=r[2],x=r[6],E=r[10];switch(t){case"XYZ":this._y=Math.asin(ii(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(-g,E),this._z=Math.atan2(-c,a)):(this._x=Math.atan2(x,p),this._z=0);break;case"YXZ":this._x=Math.asin(-ii(g,-1,1)),Math.abs(g)<.9999999?(this._y=Math.atan2(u,E),this._z=Math.atan2(d,p)):(this._y=Math.atan2(-v,a),this._z=0);break;case"ZXY":this._x=Math.asin(ii(x,-1,1)),Math.abs(x)<.9999999?(this._y=Math.atan2(-v,E),this._z=Math.atan2(-c,p)):(this._y=0,this._z=Math.atan2(d,a));break;case"ZYX":this._y=Math.asin(-ii(v,-1,1)),Math.abs(v)<.9999999?(this._x=Math.atan2(x,E),this._z=Math.atan2(d,a)):(this._x=0,this._z=Math.atan2(-c,p));break;case"YZX":this._z=Math.asin(ii(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(-g,p),this._y=Math.atan2(-v,a)):(this._x=0,this._y=Math.atan2(u,E));break;case"XZY":this._z=Math.asin(-ii(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(x,p),this._y=Math.atan2(u,a)):(this._x=Math.atan2(-g,E),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return sm.makeRotationFromQuaternion(e),this.setFromRotationMatrix(sm,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return om.setFromEuler(this),this.setFromQuaternion(om,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Uc.DEFAULT_ORDER="XYZ";class Rg{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let BT=0;const am=new re,Do=new As,Vr=new qt,tc=new re,za=new re,HT=new re,zT=new As,lm=new re(1,0,0),cm=new re(0,1,0),um=new re(0,0,1),GT={type:"added"},kT={type:"removed"};class En extends ra{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:BT++}),this.uuid=lr(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=En.DEFAULT_UP.clone();const e=new re,t=new Uc,n=new As,r=new re(1,1,1);function a(){n.setFromEuler(t,!1)}function c(){t.setFromQuaternion(n,void 0,!1)}t._onChange(a),n._onChange(c),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new qt},normalMatrix:{value:new Xt}}),this.matrix=new qt,this.matrixWorld=new qt,this.matrixAutoUpdate=En.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.matrixWorldAutoUpdate=En.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.layers=new Rg,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Do.setFromAxisAngle(e,t),this.quaternion.multiply(Do),this}rotateOnWorldAxis(e,t){return Do.setFromAxisAngle(e,t),this.quaternion.premultiply(Do),this}rotateX(e){return this.rotateOnAxis(lm,e)}rotateY(e){return this.rotateOnAxis(cm,e)}rotateZ(e){return this.rotateOnAxis(um,e)}translateOnAxis(e,t){return am.copy(e).applyQuaternion(this.quaternion),this.position.add(am.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(lm,e)}translateY(e){return this.translateOnAxis(cm,e)}translateZ(e){return this.translateOnAxis(um,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Vr.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?tc.copy(e):tc.set(e,t,n);const r=this.parent;this.updateWorldMatrix(!0,!1),za.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Vr.lookAt(za,tc,this.up):Vr.lookAt(tc,za,this.up),this.quaternion.setFromRotationMatrix(Vr),r&&(Vr.extractRotation(r.matrixWorld),Do.setFromRotationMatrix(Vr),this.quaternion.premultiply(Do.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(GT)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(kT)),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Vr.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Vr.multiply(e.parent.matrixWorld)),e.applyMatrix4(Vr),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,r=this.children.length;n<r;n++){const c=this.children[n].getObjectByProperty(e,t);if(c!==void 0)return c}}getObjectsByProperty(e,t){let n=[];this[e]===t&&n.push(this);for(let r=0,a=this.children.length;r<a;r++){const c=this.children[r].getObjectsByProperty(e,t);c.length>0&&(n=n.concat(c))}return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(za,e,HT),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(za,zT,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,r=t.length;n<r;n++){const a=t[n];(a.matrixWorldAutoUpdate===!0||e===!0)&&a.updateMatrixWorld(e)}}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.matrixWorldAutoUpdate===!0&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){const r=this.children;for(let a=0,c=r.length;a<c;a++){const u=r[a];u.matrixWorldAutoUpdate===!0&&u.updateWorldMatrix(!1,!0)}}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON()));function a(u,d){return u[d.uuid]===void 0&&(u[d.uuid]=d.toJSON(e)),d.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=a(e.geometries,this.geometry);const u=this.geometry.parameters;if(u!==void 0&&u.shapes!==void 0){const d=u.shapes;if(Array.isArray(d))for(let p=0,g=d.length;p<g;p++){const v=d[p];a(e.shapes,v)}else a(e.shapes,d)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(a(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const u=[];for(let d=0,p=this.material.length;d<p;d++)u.push(a(e.materials,this.material[d]));r.material=u}else r.material=a(e.materials,this.material);if(this.children.length>0){r.children=[];for(let u=0;u<this.children.length;u++)r.children.push(this.children[u].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let u=0;u<this.animations.length;u++){const d=this.animations[u];r.animations.push(a(e.animations,d))}}if(t){const u=c(e.geometries),d=c(e.materials),p=c(e.textures),g=c(e.images),v=c(e.shapes),x=c(e.skeletons),E=c(e.animations),w=c(e.nodes);u.length>0&&(n.geometries=u),d.length>0&&(n.materials=d),p.length>0&&(n.textures=p),g.length>0&&(n.images=g),v.length>0&&(n.shapes=v),x.length>0&&(n.skeletons=x),E.length>0&&(n.animations=E),w.length>0&&(n.nodes=w)}return n.object=r,n;function c(u){const d=[];for(const p in u){const g=u[p];delete g.metadata,d.push(g)}return d}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const r=e.children[n];this.add(r.clone())}return this}}En.DEFAULT_UP=new re(0,1,0);En.DEFAULT_MATRIX_AUTO_UPDATE=!0;En.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const or=new re,Wr=new re,lf=new re,Xr=new re,Io=new re,No=new re,fm=new re,cf=new re,uf=new re,ff=new re;let nc=!1;class ar{constructor(e=new re,t=new re,n=new re){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,r){r.subVectors(n,t),or.subVectors(e,t),r.cross(or);const a=r.lengthSq();return a>0?r.multiplyScalar(1/Math.sqrt(a)):r.set(0,0,0)}static getBarycoord(e,t,n,r,a){or.subVectors(r,t),Wr.subVectors(n,t),lf.subVectors(e,t);const c=or.dot(or),u=or.dot(Wr),d=or.dot(lf),p=Wr.dot(Wr),g=Wr.dot(lf),v=c*p-u*u;if(v===0)return a.set(-2,-1,-1);const x=1/v,E=(p*d-u*g)*x,w=(c*g-u*d)*x;return a.set(1-E-w,w,E)}static containsPoint(e,t,n,r){return this.getBarycoord(e,t,n,r,Xr),Xr.x>=0&&Xr.y>=0&&Xr.x+Xr.y<=1}static getUV(e,t,n,r,a,c,u,d){return nc===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),nc=!0),this.getInterpolation(e,t,n,r,a,c,u,d)}static getInterpolation(e,t,n,r,a,c,u,d){return this.getBarycoord(e,t,n,r,Xr),d.setScalar(0),d.addScaledVector(a,Xr.x),d.addScaledVector(c,Xr.y),d.addScaledVector(u,Xr.z),d}static isFrontFacing(e,t,n,r){return or.subVectors(n,t),Wr.subVectors(e,t),or.cross(Wr).dot(r)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,r){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,n,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return or.subVectors(this.c,this.b),Wr.subVectors(this.a,this.b),or.cross(Wr).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return ar.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return ar.getBarycoord(e,this.a,this.b,this.c,t)}getUV(e,t,n,r,a){return nc===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),nc=!0),ar.getInterpolation(e,this.a,this.b,this.c,t,n,r,a)}getInterpolation(e,t,n,r,a){return ar.getInterpolation(e,this.a,this.b,this.c,t,n,r,a)}containsPoint(e){return ar.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return ar.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,r=this.b,a=this.c;let c,u;Io.subVectors(r,n),No.subVectors(a,n),cf.subVectors(e,n);const d=Io.dot(cf),p=No.dot(cf);if(d<=0&&p<=0)return t.copy(n);uf.subVectors(e,r);const g=Io.dot(uf),v=No.dot(uf);if(g>=0&&v<=g)return t.copy(r);const x=d*v-g*p;if(x<=0&&d>=0&&g<=0)return c=d/(d-g),t.copy(n).addScaledVector(Io,c);ff.subVectors(e,a);const E=Io.dot(ff),w=No.dot(ff);if(w>=0&&E<=w)return t.copy(a);const C=E*p-d*w;if(C<=0&&p>=0&&w<=0)return u=p/(p-w),t.copy(n).addScaledVector(No,u);const T=g*w-E*v;if(T<=0&&v-g>=0&&E-w>=0)return fm.subVectors(a,r),u=(v-g)/(v-g+(E-w)),t.copy(r).addScaledVector(fm,u);const M=1/(T+C+x);return c=C*M,u=x*M,t.copy(n).addScaledVector(Io,c).addScaledVector(No,u)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const Cg={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},_s={h:0,s:0,l:0},ic={h:0,s:0,l:0};function hf(s,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?s+(e-s)*6*t:t<1/2?e:t<2/3?s+(e-s)*6*(2/3-t):s}class Rt{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=bn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,an.toWorkingColorSpace(this,t),this}setRGB(e,t,n,r=an.workingColorSpace){return this.r=e,this.g=t,this.b=n,an.toWorkingColorSpace(this,r),this}setHSL(e,t,n,r=an.workingColorSpace){if(e=ph(e,1),t=ii(t,0,1),n=ii(n,0,1),t===0)this.r=this.g=this.b=n;else{const a=n<=.5?n*(1+t):n+t-n*t,c=2*n-a;this.r=hf(c,a,e+1/3),this.g=hf(c,a,e),this.b=hf(c,a,e-1/3)}return an.toWorkingColorSpace(this,r),this}setStyle(e,t=bn){function n(a){a!==void 0&&parseFloat(a)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let a;const c=r[1],u=r[2];switch(c){case"rgb":case"rgba":if(a=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(u))return n(a[4]),this.setRGB(Math.min(255,parseInt(a[1],10))/255,Math.min(255,parseInt(a[2],10))/255,Math.min(255,parseInt(a[3],10))/255,t);if(a=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(u))return n(a[4]),this.setRGB(Math.min(100,parseInt(a[1],10))/100,Math.min(100,parseInt(a[2],10))/100,Math.min(100,parseInt(a[3],10))/100,t);break;case"hsl":case"hsla":if(a=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(u))return n(a[4]),this.setHSL(parseFloat(a[1])/360,parseFloat(a[2])/100,parseFloat(a[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const a=r[1],c=a.length;if(c===3)return this.setRGB(parseInt(a.charAt(0),16)/15,parseInt(a.charAt(1),16)/15,parseInt(a.charAt(2),16)/15,t);if(c===6)return this.setHex(parseInt(a,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=bn){const n=Cg[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=qo(e.r),this.g=qo(e.g),this.b=qo(e.b),this}copyLinearToSRGB(e){return this.r=Qu(e.r),this.g=Qu(e.g),this.b=Qu(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=bn){return an.fromWorkingColorSpace(ni.copy(this),e),Math.round(ii(ni.r*255,0,255))*65536+Math.round(ii(ni.g*255,0,255))*256+Math.round(ii(ni.b*255,0,255))}getHexString(e=bn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=an.workingColorSpace){an.fromWorkingColorSpace(ni.copy(this),t);const n=ni.r,r=ni.g,a=ni.b,c=Math.max(n,r,a),u=Math.min(n,r,a);let d,p;const g=(u+c)/2;if(u===c)d=0,p=0;else{const v=c-u;switch(p=g<=.5?v/(c+u):v/(2-c-u),c){case n:d=(r-a)/v+(r<a?6:0);break;case r:d=(a-n)/v+2;break;case a:d=(n-r)/v+4;break}d/=6}return e.h=d,e.s=p,e.l=g,e}getRGB(e,t=an.workingColorSpace){return an.fromWorkingColorSpace(ni.copy(this),t),e.r=ni.r,e.g=ni.g,e.b=ni.b,e}getStyle(e=bn){an.fromWorkingColorSpace(ni.copy(this),e);const t=ni.r,n=ni.g,r=ni.b;return e!==bn?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(r*255)})`}offsetHSL(e,t,n){return this.getHSL(_s),this.setHSL(_s.h+e,_s.s+t,_s.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(_s),e.getHSL(ic);const n=Ka(_s.h,ic.h,t),r=Ka(_s.s,ic.s,t),a=Ka(_s.l,ic.l,t);return this.setHSL(n,r,a),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,r=this.b,a=e.elements;return this.r=a[0]*t+a[3]*n+a[6]*r,this.g=a[1]*t+a[4]*n+a[7]*r,this.b=a[2]*t+a[5]*n+a[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const ni=new Rt;Rt.NAMES=Cg;let VT=0;class Mr extends ra{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:VT++}),this.uuid=lr(),this.name="",this.type="Material",this.blending=Xo,this.side=Zr,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Kf,this.blendDst=$f,this.blendEquation=Ks,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Rt(0,0,0),this.blendAlpha=0,this.depthFunc=Ec,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Jp,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=bo,this.stencilZFail=bo,this.stencilZPass=bo,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(n):r&&r.isVector3&&n&&n.isVector3?r.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Xo&&(n.blending=this.blending),this.side!==Zr&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Kf&&(n.blendSrc=this.blendSrc),this.blendDst!==$f&&(n.blendDst=this.blendDst),this.blendEquation!==Ks&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Ec&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Jp&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==bo&&(n.stencilFail=this.stencilFail),this.stencilZFail!==bo&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==bo&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function r(a){const c=[];for(const u in a){const d=a[u];delete d.metadata,c.push(d)}return c}if(t){const a=r(e.textures),c=r(e.images);a.length>0&&(n.textures=a),c.length>0&&(n.images=c)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const r=t.length;n=new Array(r);for(let a=0;a!==r;++a)n[a]=t[a].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class Zs extends Mr{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Rt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=fg,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const In=new re,rc=new Qt;class di{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=th,this.updateRange={offset:0,count:-1},this.gpuType=jr,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let r=0,a=this.itemSize;r<a;r++)this.array[e+r]=t.array[n+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)rc.fromBufferAttribute(this,t),rc.applyMatrix3(e),this.setXY(t,rc.x,rc.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)In.fromBufferAttribute(this,t),In.applyMatrix3(e),this.setXYZ(t,In.x,In.y,In.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)In.fromBufferAttribute(this,t),In.applyMatrix4(e),this.setXYZ(t,In.x,In.y,In.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)In.fromBufferAttribute(this,t),In.applyNormalMatrix(e),this.setXYZ(t,In.x,In.y,In.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)In.fromBufferAttribute(this,t),In.transformDirection(e),this.setXYZ(t,In.x,In.y,In.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=Sr(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=fn(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Sr(t,this.array)),t}setX(e,t){return this.normalized&&(t=fn(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Sr(t,this.array)),t}setY(e,t){return this.normalized&&(t=fn(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Sr(t,this.array)),t}setZ(e,t){return this.normalized&&(t=fn(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Sr(t,this.array)),t}setW(e,t){return this.normalized&&(t=fn(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=fn(t,this.array),n=fn(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,r){return e*=this.itemSize,this.normalized&&(t=fn(t,this.array),n=fn(n,this.array),r=fn(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this}setXYZW(e,t,n,r,a){return e*=this.itemSize,this.normalized&&(t=fn(t,this.array),n=fn(n,this.array),r=fn(r,this.array),a=fn(a,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this.array[e+3]=a,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==th&&(e.usage=this.usage),(this.updateRange.offset!==0||this.updateRange.count!==-1)&&(e.updateRange=this.updateRange),e}}class Lg extends di{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class Pg extends di{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class $r extends di{constructor(e,t,n){super(new Float32Array(e),t,n)}}let WT=0;const Xi=new qt,df=new En,Uo=new re,Ui=new Jr,Ga=new Jr,Wn=new re;class Er extends ra{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:WT++}),this.uuid=lr(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Eg(e)?Pg:Lg)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const a=new Xt().getNormalMatrix(e);n.applyNormalMatrix(a),n.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Xi.makeRotationFromQuaternion(e),this.applyMatrix4(Xi),this}rotateX(e){return Xi.makeRotationX(e),this.applyMatrix4(Xi),this}rotateY(e){return Xi.makeRotationY(e),this.applyMatrix4(Xi),this}rotateZ(e){return Xi.makeRotationZ(e),this.applyMatrix4(Xi),this}translate(e,t,n){return Xi.makeTranslation(e,t,n),this.applyMatrix4(Xi),this}scale(e,t,n){return Xi.makeScale(e,t,n),this.applyMatrix4(Xi),this}lookAt(e){return df.lookAt(e),df.updateMatrix(),this.applyMatrix4(df.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Uo).negate(),this.translate(Uo.x,Uo.y,Uo.z),this}setFromPoints(e){const t=[];for(let n=0,r=e.length;n<r;n++){const a=e[n];t.push(a.x,a.y,a.z||0)}return this.setAttribute("position",new $r(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Jr);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new re(-1/0,-1/0,-1/0),new re(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,r=t.length;n<r;n++){const a=t[n];Ui.setFromBufferAttribute(a),this.morphTargetsRelative?(Wn.addVectors(this.boundingBox.min,Ui.min),this.boundingBox.expandByPoint(Wn),Wn.addVectors(this.boundingBox.max,Ui.max),this.boundingBox.expandByPoint(Wn)):(this.boundingBox.expandByPoint(Ui.min),this.boundingBox.expandByPoint(Ui.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Tr);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new re,1/0);return}if(e){const n=this.boundingSphere.center;if(Ui.setFromBufferAttribute(e),t)for(let a=0,c=t.length;a<c;a++){const u=t[a];Ga.setFromBufferAttribute(u),this.morphTargetsRelative?(Wn.addVectors(Ui.min,Ga.min),Ui.expandByPoint(Wn),Wn.addVectors(Ui.max,Ga.max),Ui.expandByPoint(Wn)):(Ui.expandByPoint(Ga.min),Ui.expandByPoint(Ga.max))}Ui.getCenter(n);let r=0;for(let a=0,c=e.count;a<c;a++)Wn.fromBufferAttribute(e,a),r=Math.max(r,n.distanceToSquared(Wn));if(t)for(let a=0,c=t.length;a<c;a++){const u=t[a],d=this.morphTargetsRelative;for(let p=0,g=u.count;p<g;p++)Wn.fromBufferAttribute(u,p),d&&(Uo.fromBufferAttribute(e,p),Wn.add(Uo)),r=Math.max(r,n.distanceToSquared(Wn))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.array,r=t.position.array,a=t.normal.array,c=t.uv.array,u=r.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new di(new Float32Array(4*u),4));const d=this.getAttribute("tangent").array,p=[],g=[];for(let X=0;X<u;X++)p[X]=new re,g[X]=new re;const v=new re,x=new re,E=new re,w=new Qt,C=new Qt,T=new Qt,M=new re,k=new re;function O(X,Ee,Re){v.fromArray(r,X*3),x.fromArray(r,Ee*3),E.fromArray(r,Re*3),w.fromArray(c,X*2),C.fromArray(c,Ee*2),T.fromArray(c,Re*2),x.sub(v),E.sub(v),C.sub(w),T.sub(w);const ye=1/(C.x*T.y-T.x*C.y);isFinite(ye)&&(M.copy(x).multiplyScalar(T.y).addScaledVector(E,-C.y).multiplyScalar(ye),k.copy(E).multiplyScalar(C.x).addScaledVector(x,-T.x).multiplyScalar(ye),p[X].add(M),p[Ee].add(M),p[Re].add(M),g[X].add(k),g[Ee].add(k),g[Re].add(k))}let B=this.groups;B.length===0&&(B=[{start:0,count:n.length}]);for(let X=0,Ee=B.length;X<Ee;++X){const Re=B[X],ye=Re.start,te=Re.count;for(let xe=ye,we=ye+te;xe<we;xe+=3)O(n[xe+0],n[xe+1],n[xe+2])}const W=new re,J=new re,m=new re,me=new re;function N(X){m.fromArray(a,X*3),me.copy(m);const Ee=p[X];W.copy(Ee),W.sub(m.multiplyScalar(m.dot(Ee))).normalize(),J.crossVectors(me,Ee);const ye=J.dot(g[X])<0?-1:1;d[X*4]=W.x,d[X*4+1]=W.y,d[X*4+2]=W.z,d[X*4+3]=ye}for(let X=0,Ee=B.length;X<Ee;++X){const Re=B[X],ye=Re.start,te=Re.count;for(let xe=ye,we=ye+te;xe<we;xe+=3)N(n[xe+0]),N(n[xe+1]),N(n[xe+2])}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new di(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let x=0,E=n.count;x<E;x++)n.setXYZ(x,0,0,0);const r=new re,a=new re,c=new re,u=new re,d=new re,p=new re,g=new re,v=new re;if(e)for(let x=0,E=e.count;x<E;x+=3){const w=e.getX(x+0),C=e.getX(x+1),T=e.getX(x+2);r.fromBufferAttribute(t,w),a.fromBufferAttribute(t,C),c.fromBufferAttribute(t,T),g.subVectors(c,a),v.subVectors(r,a),g.cross(v),u.fromBufferAttribute(n,w),d.fromBufferAttribute(n,C),p.fromBufferAttribute(n,T),u.add(g),d.add(g),p.add(g),n.setXYZ(w,u.x,u.y,u.z),n.setXYZ(C,d.x,d.y,d.z),n.setXYZ(T,p.x,p.y,p.z)}else for(let x=0,E=t.count;x<E;x+=3)r.fromBufferAttribute(t,x+0),a.fromBufferAttribute(t,x+1),c.fromBufferAttribute(t,x+2),g.subVectors(c,a),v.subVectors(r,a),g.cross(v),n.setXYZ(x+0,g.x,g.y,g.z),n.setXYZ(x+1,g.x,g.y,g.z),n.setXYZ(x+2,g.x,g.y,g.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)Wn.fromBufferAttribute(e,t),Wn.normalize(),e.setXYZ(t,Wn.x,Wn.y,Wn.z)}toNonIndexed(){function e(u,d){const p=u.array,g=u.itemSize,v=u.normalized,x=new p.constructor(d.length*g);let E=0,w=0;for(let C=0,T=d.length;C<T;C++){u.isInterleavedBufferAttribute?E=d[C]*u.data.stride+u.offset:E=d[C]*g;for(let M=0;M<g;M++)x[w++]=p[E++]}return new di(x,g,v)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Er,n=this.index.array,r=this.attributes;for(const u in r){const d=r[u],p=e(d,n);t.setAttribute(u,p)}const a=this.morphAttributes;for(const u in a){const d=[],p=a[u];for(let g=0,v=p.length;g<v;g++){const x=p[g],E=e(x,n);d.push(E)}t.morphAttributes[u]=d}t.morphTargetsRelative=this.morphTargetsRelative;const c=this.groups;for(let u=0,d=c.length;u<d;u++){const p=c[u];t.addGroup(p.start,p.count,p.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const d=this.parameters;for(const p in d)d[p]!==void 0&&(e[p]=d[p]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const d in n){const p=n[d];e.data.attributes[d]=p.toJSON(e.data)}const r={};let a=!1;for(const d in this.morphAttributes){const p=this.morphAttributes[d],g=[];for(let v=0,x=p.length;v<x;v++){const E=p[v];g.push(E.toJSON(e.data))}g.length>0&&(r[d]=g,a=!0)}a&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const c=this.groups;c.length>0&&(e.data.groups=JSON.parse(JSON.stringify(c)));const u=this.boundingSphere;return u!==null&&(e.data.boundingSphere={center:u.center.toArray(),radius:u.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone(t));const r=e.attributes;for(const p in r){const g=r[p];this.setAttribute(p,g.clone(t))}const a=e.morphAttributes;for(const p in a){const g=[],v=a[p];for(let x=0,E=v.length;x<E;x++)g.push(v[x].clone(t));this.morphAttributes[p]=g}this.morphTargetsRelative=e.morphTargetsRelative;const c=e.groups;for(let p=0,g=c.length;p<g;p++){const v=c[p];this.addGroup(v.start,v.count,v.materialIndex)}const u=e.boundingBox;u!==null&&(this.boundingBox=u.clone());const d=e.boundingSphere;return d!==null&&(this.boundingSphere=d.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const hm=new qt,Vs=new Nc,sc=new Tr,dm=new re,Oo=new re,Fo=new re,Bo=new re,pf=new re,oc=new re,ac=new Qt,lc=new Qt,cc=new Qt,pm=new re,mm=new re,gm=new re,uc=new re,fc=new re;class $i extends En{constructor(e=new Er,t=new Zs){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const r=t[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let a=0,c=r.length;a<c;a++){const u=r[a].name||String(a);this.morphTargetInfluences.push(0),this.morphTargetDictionary[u]=a}}}}getVertexPosition(e,t){const n=this.geometry,r=n.attributes.position,a=n.morphAttributes.position,c=n.morphTargetsRelative;t.fromBufferAttribute(r,e);const u=this.morphTargetInfluences;if(a&&u){oc.set(0,0,0);for(let d=0,p=a.length;d<p;d++){const g=u[d],v=a[d];g!==0&&(pf.fromBufferAttribute(v,e),c?oc.addScaledVector(pf,g):oc.addScaledVector(pf.sub(t),g))}t.add(oc)}return t}raycast(e,t){const n=this.geometry,r=this.material,a=this.matrixWorld;r!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),sc.copy(n.boundingSphere),sc.applyMatrix4(a),Vs.copy(e.ray).recast(e.near),!(sc.containsPoint(Vs.origin)===!1&&(Vs.intersectSphere(sc,dm)===null||Vs.origin.distanceToSquared(dm)>(e.far-e.near)**2))&&(hm.copy(a).invert(),Vs.copy(e.ray).applyMatrix4(hm),!(n.boundingBox!==null&&Vs.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,Vs)))}_computeIntersections(e,t,n){let r;const a=this.geometry,c=this.material,u=a.index,d=a.attributes.position,p=a.attributes.uv,g=a.attributes.uv1,v=a.attributes.normal,x=a.groups,E=a.drawRange;if(u!==null)if(Array.isArray(c))for(let w=0,C=x.length;w<C;w++){const T=x[w],M=c[T.materialIndex],k=Math.max(T.start,E.start),O=Math.min(u.count,Math.min(T.start+T.count,E.start+E.count));for(let B=k,W=O;B<W;B+=3){const J=u.getX(B),m=u.getX(B+1),me=u.getX(B+2);r=hc(this,M,e,n,p,g,v,J,m,me),r&&(r.faceIndex=Math.floor(B/3),r.face.materialIndex=T.materialIndex,t.push(r))}}else{const w=Math.max(0,E.start),C=Math.min(u.count,E.start+E.count);for(let T=w,M=C;T<M;T+=3){const k=u.getX(T),O=u.getX(T+1),B=u.getX(T+2);r=hc(this,c,e,n,p,g,v,k,O,B),r&&(r.faceIndex=Math.floor(T/3),t.push(r))}}else if(d!==void 0)if(Array.isArray(c))for(let w=0,C=x.length;w<C;w++){const T=x[w],M=c[T.materialIndex],k=Math.max(T.start,E.start),O=Math.min(d.count,Math.min(T.start+T.count,E.start+E.count));for(let B=k,W=O;B<W;B+=3){const J=B,m=B+1,me=B+2;r=hc(this,M,e,n,p,g,v,J,m,me),r&&(r.faceIndex=Math.floor(B/3),r.face.materialIndex=T.materialIndex,t.push(r))}}else{const w=Math.max(0,E.start),C=Math.min(d.count,E.start+E.count);for(let T=w,M=C;T<M;T+=3){const k=T,O=T+1,B=T+2;r=hc(this,c,e,n,p,g,v,k,O,B),r&&(r.faceIndex=Math.floor(T/3),t.push(r))}}}}function XT(s,e,t,n,r,a,c,u){let d;if(e.side===Ei?d=n.intersectTriangle(c,a,r,!0,u):d=n.intersectTriangle(r,a,c,e.side===Zr,u),d===null)return null;fc.copy(u),fc.applyMatrix4(s.matrixWorld);const p=t.ray.origin.distanceTo(fc);return p<t.near||p>t.far?null:{distance:p,point:fc.clone(),object:s}}function hc(s,e,t,n,r,a,c,u,d,p){s.getVertexPosition(u,Oo),s.getVertexPosition(d,Fo),s.getVertexPosition(p,Bo);const g=XT(s,e,t,n,Oo,Fo,Bo,uc);if(g){r&&(ac.fromBufferAttribute(r,u),lc.fromBufferAttribute(r,d),cc.fromBufferAttribute(r,p),g.uv=ar.getInterpolation(uc,Oo,Fo,Bo,ac,lc,cc,new Qt)),a&&(ac.fromBufferAttribute(a,u),lc.fromBufferAttribute(a,d),cc.fromBufferAttribute(a,p),g.uv1=ar.getInterpolation(uc,Oo,Fo,Bo,ac,lc,cc,new Qt),g.uv2=g.uv1),c&&(pm.fromBufferAttribute(c,u),mm.fromBufferAttribute(c,d),gm.fromBufferAttribute(c,p),g.normal=ar.getInterpolation(uc,Oo,Fo,Bo,pm,mm,gm,new re),g.normal.dot(n.direction)>0&&g.normal.multiplyScalar(-1));const v={a:u,b:d,c:p,normal:new re,materialIndex:0};ar.getNormal(Oo,Fo,Bo,v.normal),g.face=v}return g}class nl extends Er{constructor(e=1,t=1,n=1,r=1,a=1,c=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:r,heightSegments:a,depthSegments:c};const u=this;r=Math.floor(r),a=Math.floor(a),c=Math.floor(c);const d=[],p=[],g=[],v=[];let x=0,E=0;w("z","y","x",-1,-1,n,t,e,c,a,0),w("z","y","x",1,-1,n,t,-e,c,a,1),w("x","z","y",1,1,e,n,t,r,c,2),w("x","z","y",1,-1,e,n,-t,r,c,3),w("x","y","z",1,-1,e,t,n,r,a,4),w("x","y","z",-1,-1,e,t,-n,r,a,5),this.setIndex(d),this.setAttribute("position",new $r(p,3)),this.setAttribute("normal",new $r(g,3)),this.setAttribute("uv",new $r(v,2));function w(C,T,M,k,O,B,W,J,m,me,N){const X=B/m,Ee=W/me,Re=B/2,ye=W/2,te=J/2,xe=m+1,we=me+1;let ge=0,Oe=0;const Ce=new re;for(let be=0;be<we;be++){const ne=be*Ee-ye;for(let pe=0;pe<xe;pe++){const Ve=pe*X-Re;Ce[C]=Ve*k,Ce[T]=ne*O,Ce[M]=te,p.push(Ce.x,Ce.y,Ce.z),Ce[C]=0,Ce[T]=0,Ce[M]=J>0?1:-1,g.push(Ce.x,Ce.y,Ce.z),v.push(pe/m),v.push(1-be/me),ge+=1}}for(let be=0;be<me;be++)for(let ne=0;ne<m;ne++){const pe=x+ne+xe*be,Ve=x+ne+xe*(be+1),Ke=x+(ne+1)+xe*(be+1),Ye=x+(ne+1)+xe*be;d.push(pe,Ve,Ye),d.push(Ve,Ke,Ye),Oe+=6}u.addGroup(E,Oe,N),E+=Oe,x+=ge}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new nl(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function ea(s){const e={};for(const t in s){e[t]={};for(const n in s[t]){const r=s[t][n];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=r.clone():Array.isArray(r)?e[t][n]=r.slice():e[t][n]=r}}return e}function fi(s){const e={};for(let t=0;t<s.length;t++){const n=ea(s[t]);for(const r in n)e[r]=n[r]}return e}function qT(s){const e=[];for(let t=0;t<s.length;t++)e.push(s[t].clone());return e}function Dg(s){return s.getRenderTarget()===null?s.outputColorSpace:an.workingColorSpace}const YT={clone:ea,merge:fi};var jT=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,KT=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class ro extends Mr{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=jT,this.fragmentShader=KT,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=ea(e.uniforms),this.uniformsGroups=qT(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const r in this.uniforms){const c=this.uniforms[r].value;c&&c.isTexture?t.uniforms[r]={type:"t",value:c.toJSON(e).uuid}:c&&c.isColor?t.uniforms[r]={type:"c",value:c.getHex()}:c&&c.isVector2?t.uniforms[r]={type:"v2",value:c.toArray()}:c&&c.isVector3?t.uniforms[r]={type:"v3",value:c.toArray()}:c&&c.isVector4?t.uniforms[r]={type:"v4",value:c.toArray()}:c&&c.isMatrix3?t.uniforms[r]={type:"m3",value:c.toArray()}:c&&c.isMatrix4?t.uniforms[r]={type:"m4",value:c.toArray()}:t.uniforms[r]={value:c}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const r in this.extensions)this.extensions[r]===!0&&(n[r]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class Ig extends En{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new qt,this.projectionMatrix=new qt,this.projectionMatrixInverse=new qt,this.coordinateSystem=Kr}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}class hi extends Ig{constructor(e=50,t=1,n=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Qo*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(ja*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Qo*2*Math.atan(Math.tan(ja*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,t,n,r,a,c){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=a,this.view.height=c,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(ja*.5*this.fov)/this.zoom,n=2*t,r=this.aspect*n,a=-.5*r;const c=this.view;if(this.view!==null&&this.view.enabled){const d=c.fullWidth,p=c.fullHeight;a+=c.offsetX*r/d,t-=c.offsetY*n/p,r*=c.width/d,n*=c.height/p}const u=this.filmOffset;u!==0&&(a+=e*u/this.getFilmWidth()),this.projectionMatrix.makePerspective(a,a+r,t,t-n,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const Ho=-90,zo=1;class $T extends En{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new hi(Ho,zo,e,t);r.layers=this.layers,this.add(r);const a=new hi(Ho,zo,e,t);a.layers=this.layers,this.add(a);const c=new hi(Ho,zo,e,t);c.layers=this.layers,this.add(c);const u=new hi(Ho,zo,e,t);u.layers=this.layers,this.add(u);const d=new hi(Ho,zo,e,t);d.layers=this.layers,this.add(d);const p=new hi(Ho,zo,e,t);p.layers=this.layers,this.add(p)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,r,a,c,u,d]=t;for(const p of t)this.remove(p);if(e===Kr)n.up.set(0,1,0),n.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),a.up.set(0,0,-1),a.lookAt(0,1,0),c.up.set(0,0,1),c.lookAt(0,-1,0),u.up.set(0,1,0),u.lookAt(0,0,1),d.up.set(0,1,0),d.lookAt(0,0,-1);else if(e===Cc)n.up.set(0,-1,0),n.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),a.up.set(0,0,1),a.lookAt(0,1,0),c.up.set(0,0,-1),c.lookAt(0,-1,0),u.up.set(0,-1,0),u.lookAt(0,0,1),d.up.set(0,-1,0),d.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const p of t)this.add(p),p.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[a,c,u,d,p,g]=this.children,v=e.getRenderTarget(),x=e.getActiveCubeFace(),E=e.getActiveMipmapLevel(),w=e.xr.enabled;e.xr.enabled=!1;const C=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,r),e.render(t,a),e.setRenderTarget(n,1,r),e.render(t,c),e.setRenderTarget(n,2,r),e.render(t,u),e.setRenderTarget(n,3,r),e.render(t,d),e.setRenderTarget(n,4,r),e.render(t,p),n.texture.generateMipmaps=C,e.setRenderTarget(n,5,r),e.render(t,g),e.setRenderTarget(v,x,E),e.xr.enabled=w,n.texture.needsPMREMUpdate=!0}}class Ng extends Kn{constructor(e,t,n,r,a,c,u,d,p,g){e=e!==void 0?e:[],t=t!==void 0?t:jo,super(e,t,n,r,a,c,u,d,p,g),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class ZT extends io{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},r=[n,n,n,n,n,n];t.encoding!==void 0&&($a("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),t.colorSpace=t.encoding===to?bn:Ki),this.texture=new Ng(r,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:Ti}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new nl(5,5,5),a=new ro({name:"CubemapFromEquirect",uniforms:ea(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Ei,blending:Ms});a.uniforms.tEquirect.value=t;const c=new $i(r,a),u=t.minFilter;return t.minFilter===no&&(t.minFilter=Ti),new $T(1,10,this).update(e,c),t.minFilter=u,c.geometry.dispose(),c.material.dispose(),this}clear(e,t,n,r){const a=e.getRenderTarget();for(let c=0;c<6;c++)e.setRenderTarget(this,c),e.clear(t,n,r);e.setRenderTarget(a)}}const mf=new re,JT=new re,QT=new Xt;class qs{constructor(e=new re(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,r){return this.normal.set(e,t,n),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const r=mf.subVectors(n,t).cross(JT.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const n=e.delta(mf),r=this.normal.dot(n);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const a=-(e.start.dot(this.normal)+this.constant)/r;return a<0||a>1?null:t.copy(e.start).addScaledVector(n,a)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||QT.getNormalMatrix(e),r=this.coplanarPoint(mf).applyMatrix4(e),a=this.normal.applyMatrix3(n).normalize();return this.constant=-r.dot(a),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Ws=new Tr,dc=new re;class mh{constructor(e=new qs,t=new qs,n=new qs,r=new qs,a=new qs,c=new qs){this.planes=[e,t,n,r,a,c]}set(e,t,n,r,a,c){const u=this.planes;return u[0].copy(e),u[1].copy(t),u[2].copy(n),u[3].copy(r),u[4].copy(a),u[5].copy(c),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=Kr){const n=this.planes,r=e.elements,a=r[0],c=r[1],u=r[2],d=r[3],p=r[4],g=r[5],v=r[6],x=r[7],E=r[8],w=r[9],C=r[10],T=r[11],M=r[12],k=r[13],O=r[14],B=r[15];if(n[0].setComponents(d-a,x-p,T-E,B-M).normalize(),n[1].setComponents(d+a,x+p,T+E,B+M).normalize(),n[2].setComponents(d+c,x+g,T+w,B+k).normalize(),n[3].setComponents(d-c,x-g,T-w,B-k).normalize(),n[4].setComponents(d-u,x-v,T-C,B-O).normalize(),t===Kr)n[5].setComponents(d+u,x+v,T+C,B+O).normalize();else if(t===Cc)n[5].setComponents(u,v,C,O).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Ws.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Ws.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Ws)}intersectsSprite(e){return Ws.center.set(0,0,0),Ws.radius=.7071067811865476,Ws.applyMatrix4(e.matrixWorld),this.intersectsSphere(Ws)}intersectsSphere(e){const t=this.planes,n=e.center,r=-e.radius;for(let a=0;a<6;a++)if(t[a].distanceToPoint(n)<r)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const r=t[n];if(dc.x=r.normal.x>0?e.max.x:e.min.x,dc.y=r.normal.y>0?e.max.y:e.min.y,dc.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(dc)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Ug(){let s=null,e=!1,t=null,n=null;function r(a,c){t(a,c),n=s.requestAnimationFrame(r)}return{start:function(){e!==!0&&t!==null&&(n=s.requestAnimationFrame(r),e=!0)},stop:function(){s.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(a){t=a},setContext:function(a){s=a}}}function eE(s,e){const t=e.isWebGL2,n=new WeakMap;function r(p,g){const v=p.array,x=p.usage,E=s.createBuffer();s.bindBuffer(g,E),s.bufferData(g,v,x),p.onUploadCallback();let w;if(v instanceof Float32Array)w=s.FLOAT;else if(v instanceof Uint16Array)if(p.isFloat16BufferAttribute)if(t)w=s.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else w=s.UNSIGNED_SHORT;else if(v instanceof Int16Array)w=s.SHORT;else if(v instanceof Uint32Array)w=s.UNSIGNED_INT;else if(v instanceof Int32Array)w=s.INT;else if(v instanceof Int8Array)w=s.BYTE;else if(v instanceof Uint8Array)w=s.UNSIGNED_BYTE;else if(v instanceof Uint8ClampedArray)w=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+v);return{buffer:E,type:w,bytesPerElement:v.BYTES_PER_ELEMENT,version:p.version}}function a(p,g,v){const x=g.array,E=g.updateRange;s.bindBuffer(v,p),E.count===-1?s.bufferSubData(v,0,x):(t?s.bufferSubData(v,E.offset*x.BYTES_PER_ELEMENT,x,E.offset,E.count):s.bufferSubData(v,E.offset*x.BYTES_PER_ELEMENT,x.subarray(E.offset,E.offset+E.count)),E.count=-1),g.onUploadCallback()}function c(p){return p.isInterleavedBufferAttribute&&(p=p.data),n.get(p)}function u(p){p.isInterleavedBufferAttribute&&(p=p.data);const g=n.get(p);g&&(s.deleteBuffer(g.buffer),n.delete(p))}function d(p,g){if(p.isGLBufferAttribute){const x=n.get(p);(!x||x.version<p.version)&&n.set(p,{buffer:p.buffer,type:p.type,bytesPerElement:p.elementSize,version:p.version});return}p.isInterleavedBufferAttribute&&(p=p.data);const v=n.get(p);v===void 0?n.set(p,r(p,g)):v.version<p.version&&(a(v.buffer,p,g),v.version=p.version)}return{get:c,remove:u,update:d}}class gh extends Er{constructor(e=1,t=1,n=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:r};const a=e/2,c=t/2,u=Math.floor(n),d=Math.floor(r),p=u+1,g=d+1,v=e/u,x=t/d,E=[],w=[],C=[],T=[];for(let M=0;M<g;M++){const k=M*x-c;for(let O=0;O<p;O++){const B=O*v-a;w.push(B,-k,0),C.push(0,0,1),T.push(O/u),T.push(1-M/d)}}for(let M=0;M<d;M++)for(let k=0;k<u;k++){const O=k+p*M,B=k+p*(M+1),W=k+1+p*(M+1),J=k+1+p*M;E.push(O,B,J),E.push(B,W,J)}this.setIndex(E),this.setAttribute("position",new $r(w,3)),this.setAttribute("normal",new $r(C,3)),this.setAttribute("uv",new $r(T,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new gh(e.width,e.height,e.widthSegments,e.heightSegments)}}var tE=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,nE=`#ifdef USE_ALPHAHASH
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
#endif`,iE=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,rE=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,sE=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,oE=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,aE=`#ifdef USE_AOMAP
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
#endif`,lE=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,cE=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,uE=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,fE=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,hE=`#ifdef USE_IRIDESCENCE
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
#endif`,dE=`#ifdef USE_BUMPMAP
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
#endif`,pE=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,mE=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,gE=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,_E=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,vE=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,xE=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,yE=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,SE=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,ME=`#define PI 3.141592653589793
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
} // validated`,TE=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,EE=`vec3 transformedNormal = objectNormal;
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
#endif`,AE=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,bE=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,wE=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,RE=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,CE="gl_FragColor = linearToOutputTexel( gl_FragColor );",LE=`
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
}`,PE=`#ifdef USE_ENVMAP
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
#endif`,DE=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,IE=`#ifdef USE_ENVMAP
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
#endif`,NE=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,UE=`#ifdef USE_ENVMAP
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
#endif`,OE=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,FE=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,BE=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,HE=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,zE=`#ifdef USE_GRADIENTMAP
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
}`,GE=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,kE=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,VE=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,WE=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,XE=`uniform bool receiveShadow;
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
#endif`,qE=`#ifdef USE_ENVMAP
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
#endif`,YE=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,jE=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,KE=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,$E=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,ZE=`PhysicalMaterial material;
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
#endif`,JE=`struct PhysicalMaterial {
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
}`,QE=`
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
#endif`,eA=`#if defined( RE_IndirectDiffuse )
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
#endif`,tA=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,nA=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,iA=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,rA=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,sA=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,oA=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,aA=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,lA=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,cA=`#if defined( USE_POINTS_UV )
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
#endif`,uA=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,fA=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,hA=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,dA=`#ifdef USE_MORPHNORMALS
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
#endif`,pA=`#ifdef USE_MORPHTARGETS
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
#endif`,mA=`#ifdef USE_MORPHTARGETS
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
#endif`,gA=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,_A=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,vA=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,xA=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,yA=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,SA=`#ifdef USE_NORMALMAP
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
#endif`,MA=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,TA=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,EA=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,AA=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,bA=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,wA=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,RA=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,CA=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,LA=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,PA=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,DA=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,IA=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,NA=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,UA=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,OA=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,FA=`float getShadowMask() {
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
}`,BA=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,HA=`#ifdef USE_SKINNING
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
#endif`,zA=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,GA=`#ifdef USE_SKINNING
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
#endif`,kA=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,VA=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,WA=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,XA=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,qA=`#ifdef USE_TRANSMISSION
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
#endif`,YA=`#ifdef USE_TRANSMISSION
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
#endif`,jA=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,KA=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,$A=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,ZA=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const JA=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,QA=`uniform sampler2D t2D;
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
}`,eb=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,tb=`#ifdef ENVMAP_TYPE_CUBE
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
}`,nb=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,ib=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,rb=`#include <common>
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
}`,sb=`#if DEPTH_PACKING == 3200
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
}`,ob=`#define DISTANCE
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
}`,ab=`#define DISTANCE
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
}`,lb=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,cb=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,ub=`uniform float scale;
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
}`,fb=`uniform vec3 diffuse;
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
}`,hb=`#include <common>
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
}`,db=`uniform vec3 diffuse;
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
}`,pb=`#define LAMBERT
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
}`,mb=`#define LAMBERT
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
}`,gb=`#define MATCAP
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
}`,_b=`#define MATCAP
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
}`,vb=`#define NORMAL
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
}`,xb=`#define NORMAL
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
}`,yb=`#define PHONG
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
}`,Sb=`#define PHONG
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
}`,Mb=`#define STANDARD
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
}`,Tb=`#define STANDARD
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
}`,Eb=`#define TOON
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
}`,Ab=`#define TOON
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
}`,bb=`uniform float size;
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
}`,wb=`uniform vec3 diffuse;
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
}`,Rb=`#include <common>
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
}`,Cb=`uniform vec3 color;
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
}`,Lb=`uniform float rotation;
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
}`,Pb=`uniform vec3 diffuse;
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
}`,Ft={alphahash_fragment:tE,alphahash_pars_fragment:nE,alphamap_fragment:iE,alphamap_pars_fragment:rE,alphatest_fragment:sE,alphatest_pars_fragment:oE,aomap_fragment:aE,aomap_pars_fragment:lE,begin_vertex:cE,beginnormal_vertex:uE,bsdfs:fE,iridescence_fragment:hE,bumpmap_pars_fragment:dE,clipping_planes_fragment:pE,clipping_planes_pars_fragment:mE,clipping_planes_pars_vertex:gE,clipping_planes_vertex:_E,color_fragment:vE,color_pars_fragment:xE,color_pars_vertex:yE,color_vertex:SE,common:ME,cube_uv_reflection_fragment:TE,defaultnormal_vertex:EE,displacementmap_pars_vertex:AE,displacementmap_vertex:bE,emissivemap_fragment:wE,emissivemap_pars_fragment:RE,colorspace_fragment:CE,colorspace_pars_fragment:LE,envmap_fragment:PE,envmap_common_pars_fragment:DE,envmap_pars_fragment:IE,envmap_pars_vertex:NE,envmap_physical_pars_fragment:qE,envmap_vertex:UE,fog_vertex:OE,fog_pars_vertex:FE,fog_fragment:BE,fog_pars_fragment:HE,gradientmap_pars_fragment:zE,lightmap_fragment:GE,lightmap_pars_fragment:kE,lights_lambert_fragment:VE,lights_lambert_pars_fragment:WE,lights_pars_begin:XE,lights_toon_fragment:YE,lights_toon_pars_fragment:jE,lights_phong_fragment:KE,lights_phong_pars_fragment:$E,lights_physical_fragment:ZE,lights_physical_pars_fragment:JE,lights_fragment_begin:QE,lights_fragment_maps:eA,lights_fragment_end:tA,logdepthbuf_fragment:nA,logdepthbuf_pars_fragment:iA,logdepthbuf_pars_vertex:rA,logdepthbuf_vertex:sA,map_fragment:oA,map_pars_fragment:aA,map_particle_fragment:lA,map_particle_pars_fragment:cA,metalnessmap_fragment:uA,metalnessmap_pars_fragment:fA,morphcolor_vertex:hA,morphnormal_vertex:dA,morphtarget_pars_vertex:pA,morphtarget_vertex:mA,normal_fragment_begin:gA,normal_fragment_maps:_A,normal_pars_fragment:vA,normal_pars_vertex:xA,normal_vertex:yA,normalmap_pars_fragment:SA,clearcoat_normal_fragment_begin:MA,clearcoat_normal_fragment_maps:TA,clearcoat_pars_fragment:EA,iridescence_pars_fragment:AA,opaque_fragment:bA,packing:wA,premultiplied_alpha_fragment:RA,project_vertex:CA,dithering_fragment:LA,dithering_pars_fragment:PA,roughnessmap_fragment:DA,roughnessmap_pars_fragment:IA,shadowmap_pars_fragment:NA,shadowmap_pars_vertex:UA,shadowmap_vertex:OA,shadowmask_pars_fragment:FA,skinbase_vertex:BA,skinning_pars_vertex:HA,skinning_vertex:zA,skinnormal_vertex:GA,specularmap_fragment:kA,specularmap_pars_fragment:VA,tonemapping_fragment:WA,tonemapping_pars_fragment:XA,transmission_fragment:qA,transmission_pars_fragment:YA,uv_pars_fragment:jA,uv_pars_vertex:KA,uv_vertex:$A,worldpos_vertex:ZA,background_vert:JA,background_frag:QA,backgroundCube_vert:eb,backgroundCube_frag:tb,cube_vert:nb,cube_frag:ib,depth_vert:rb,depth_frag:sb,distanceRGBA_vert:ob,distanceRGBA_frag:ab,equirect_vert:lb,equirect_frag:cb,linedashed_vert:ub,linedashed_frag:fb,meshbasic_vert:hb,meshbasic_frag:db,meshlambert_vert:pb,meshlambert_frag:mb,meshmatcap_vert:gb,meshmatcap_frag:_b,meshnormal_vert:vb,meshnormal_frag:xb,meshphong_vert:yb,meshphong_frag:Sb,meshphysical_vert:Mb,meshphysical_frag:Tb,meshtoon_vert:Eb,meshtoon_frag:Ab,points_vert:bb,points_frag:wb,shadow_vert:Rb,shadow_frag:Cb,sprite_vert:Lb,sprite_frag:Pb},We={common:{diffuse:{value:new Rt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Xt},alphaMap:{value:null},alphaMapTransform:{value:new Xt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Xt}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Xt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Xt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Xt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Xt},normalScale:{value:new Qt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Xt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Xt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Xt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Xt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Rt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Rt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Xt},alphaTest:{value:0},uvTransform:{value:new Xt}},sprite:{diffuse:{value:new Rt(16777215)},opacity:{value:1},center:{value:new Qt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Xt},alphaMap:{value:null},alphaMapTransform:{value:new Xt},alphaTest:{value:0}}},xr={basic:{uniforms:fi([We.common,We.specularmap,We.envmap,We.aomap,We.lightmap,We.fog]),vertexShader:Ft.meshbasic_vert,fragmentShader:Ft.meshbasic_frag},lambert:{uniforms:fi([We.common,We.specularmap,We.envmap,We.aomap,We.lightmap,We.emissivemap,We.bumpmap,We.normalmap,We.displacementmap,We.fog,We.lights,{emissive:{value:new Rt(0)}}]),vertexShader:Ft.meshlambert_vert,fragmentShader:Ft.meshlambert_frag},phong:{uniforms:fi([We.common,We.specularmap,We.envmap,We.aomap,We.lightmap,We.emissivemap,We.bumpmap,We.normalmap,We.displacementmap,We.fog,We.lights,{emissive:{value:new Rt(0)},specular:{value:new Rt(1118481)},shininess:{value:30}}]),vertexShader:Ft.meshphong_vert,fragmentShader:Ft.meshphong_frag},standard:{uniforms:fi([We.common,We.envmap,We.aomap,We.lightmap,We.emissivemap,We.bumpmap,We.normalmap,We.displacementmap,We.roughnessmap,We.metalnessmap,We.fog,We.lights,{emissive:{value:new Rt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ft.meshphysical_vert,fragmentShader:Ft.meshphysical_frag},toon:{uniforms:fi([We.common,We.aomap,We.lightmap,We.emissivemap,We.bumpmap,We.normalmap,We.displacementmap,We.gradientmap,We.fog,We.lights,{emissive:{value:new Rt(0)}}]),vertexShader:Ft.meshtoon_vert,fragmentShader:Ft.meshtoon_frag},matcap:{uniforms:fi([We.common,We.bumpmap,We.normalmap,We.displacementmap,We.fog,{matcap:{value:null}}]),vertexShader:Ft.meshmatcap_vert,fragmentShader:Ft.meshmatcap_frag},points:{uniforms:fi([We.points,We.fog]),vertexShader:Ft.points_vert,fragmentShader:Ft.points_frag},dashed:{uniforms:fi([We.common,We.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ft.linedashed_vert,fragmentShader:Ft.linedashed_frag},depth:{uniforms:fi([We.common,We.displacementmap]),vertexShader:Ft.depth_vert,fragmentShader:Ft.depth_frag},normal:{uniforms:fi([We.common,We.bumpmap,We.normalmap,We.displacementmap,{opacity:{value:1}}]),vertexShader:Ft.meshnormal_vert,fragmentShader:Ft.meshnormal_frag},sprite:{uniforms:fi([We.sprite,We.fog]),vertexShader:Ft.sprite_vert,fragmentShader:Ft.sprite_frag},background:{uniforms:{uvTransform:{value:new Xt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ft.background_vert,fragmentShader:Ft.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:Ft.backgroundCube_vert,fragmentShader:Ft.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ft.cube_vert,fragmentShader:Ft.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ft.equirect_vert,fragmentShader:Ft.equirect_frag},distanceRGBA:{uniforms:fi([We.common,We.displacementmap,{referencePosition:{value:new re},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ft.distanceRGBA_vert,fragmentShader:Ft.distanceRGBA_frag},shadow:{uniforms:fi([We.lights,We.fog,{color:{value:new Rt(0)},opacity:{value:1}}]),vertexShader:Ft.shadow_vert,fragmentShader:Ft.shadow_frag}};xr.physical={uniforms:fi([xr.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Xt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Xt},clearcoatNormalScale:{value:new Qt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Xt},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Xt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Xt},sheen:{value:0},sheenColor:{value:new Rt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Xt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Xt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Xt},transmissionSamplerSize:{value:new Qt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Xt},attenuationDistance:{value:0},attenuationColor:{value:new Rt(0)},specularColor:{value:new Rt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Xt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Xt},anisotropyVector:{value:new Qt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Xt}}]),vertexShader:Ft.meshphysical_vert,fragmentShader:Ft.meshphysical_frag};const pc={r:0,b:0,g:0};function Db(s,e,t,n,r,a,c){const u=new Rt(0);let d=a===!0?0:1,p,g,v=null,x=0,E=null;function w(T,M){let k=!1,O=M.isScene===!0?M.background:null;O&&O.isTexture&&(O=(M.backgroundBlurriness>0?t:e).get(O)),O===null?C(u,d):O&&O.isColor&&(C(O,1),k=!0);const B=s.xr.getEnvironmentBlendMode();B==="additive"?n.buffers.color.setClear(0,0,0,1,c):B==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,c),(s.autoClear||k)&&s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil),O&&(O.isCubeTexture||O.mapping===Dc)?(g===void 0&&(g=new $i(new nl(1,1,1),new ro({name:"BackgroundCubeMaterial",uniforms:ea(xr.backgroundCube.uniforms),vertexShader:xr.backgroundCube.vertexShader,fragmentShader:xr.backgroundCube.fragmentShader,side:Ei,depthTest:!1,depthWrite:!1,fog:!1})),g.geometry.deleteAttribute("normal"),g.geometry.deleteAttribute("uv"),g.onBeforeRender=function(W,J,m){this.matrixWorld.copyPosition(m.matrixWorld)},Object.defineProperty(g.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(g)),g.material.uniforms.envMap.value=O,g.material.uniforms.flipEnvMap.value=O.isCubeTexture&&O.isRenderTargetTexture===!1?-1:1,g.material.uniforms.backgroundBlurriness.value=M.backgroundBlurriness,g.material.uniforms.backgroundIntensity.value=M.backgroundIntensity,g.material.toneMapped=an.getTransfer(O.colorSpace)!==vn,(v!==O||x!==O.version||E!==s.toneMapping)&&(g.material.needsUpdate=!0,v=O,x=O.version,E=s.toneMapping),g.layers.enableAll(),T.unshift(g,g.geometry,g.material,0,0,null)):O&&O.isTexture&&(p===void 0&&(p=new $i(new gh(2,2),new ro({name:"BackgroundMaterial",uniforms:ea(xr.background.uniforms),vertexShader:xr.background.vertexShader,fragmentShader:xr.background.fragmentShader,side:Zr,depthTest:!1,depthWrite:!1,fog:!1})),p.geometry.deleteAttribute("normal"),Object.defineProperty(p.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(p)),p.material.uniforms.t2D.value=O,p.material.uniforms.backgroundIntensity.value=M.backgroundIntensity,p.material.toneMapped=an.getTransfer(O.colorSpace)!==vn,O.matrixAutoUpdate===!0&&O.updateMatrix(),p.material.uniforms.uvTransform.value.copy(O.matrix),(v!==O||x!==O.version||E!==s.toneMapping)&&(p.material.needsUpdate=!0,v=O,x=O.version,E=s.toneMapping),p.layers.enableAll(),T.unshift(p,p.geometry,p.material,0,0,null))}function C(T,M){T.getRGB(pc,Dg(s)),n.buffers.color.setClear(pc.r,pc.g,pc.b,M,c)}return{getClearColor:function(){return u},setClearColor:function(T,M=1){u.set(T),d=M,C(u,d)},getClearAlpha:function(){return d},setClearAlpha:function(T){d=T,C(u,d)},render:w}}function Ib(s,e,t,n){const r=s.getParameter(s.MAX_VERTEX_ATTRIBS),a=n.isWebGL2?null:e.get("OES_vertex_array_object"),c=n.isWebGL2||a!==null,u={},d=T(null);let p=d,g=!1;function v(te,xe,we,ge,Oe){let Ce=!1;if(c){const be=C(ge,we,xe);p!==be&&(p=be,E(p.object)),Ce=M(te,ge,we,Oe),Ce&&k(te,ge,we,Oe)}else{const be=xe.wireframe===!0;(p.geometry!==ge.id||p.program!==we.id||p.wireframe!==be)&&(p.geometry=ge.id,p.program=we.id,p.wireframe=be,Ce=!0)}Oe!==null&&t.update(Oe,s.ELEMENT_ARRAY_BUFFER),(Ce||g)&&(g=!1,me(te,xe,we,ge),Oe!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,t.get(Oe).buffer))}function x(){return n.isWebGL2?s.createVertexArray():a.createVertexArrayOES()}function E(te){return n.isWebGL2?s.bindVertexArray(te):a.bindVertexArrayOES(te)}function w(te){return n.isWebGL2?s.deleteVertexArray(te):a.deleteVertexArrayOES(te)}function C(te,xe,we){const ge=we.wireframe===!0;let Oe=u[te.id];Oe===void 0&&(Oe={},u[te.id]=Oe);let Ce=Oe[xe.id];Ce===void 0&&(Ce={},Oe[xe.id]=Ce);let be=Ce[ge];return be===void 0&&(be=T(x()),Ce[ge]=be),be}function T(te){const xe=[],we=[],ge=[];for(let Oe=0;Oe<r;Oe++)xe[Oe]=0,we[Oe]=0,ge[Oe]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:xe,enabledAttributes:we,attributeDivisors:ge,object:te,attributes:{},index:null}}function M(te,xe,we,ge){const Oe=p.attributes,Ce=xe.attributes;let be=0;const ne=we.getAttributes();for(const pe in ne)if(ne[pe].location>=0){const Ke=Oe[pe];let Ye=Ce[pe];if(Ye===void 0&&(pe==="instanceMatrix"&&te.instanceMatrix&&(Ye=te.instanceMatrix),pe==="instanceColor"&&te.instanceColor&&(Ye=te.instanceColor)),Ke===void 0||Ke.attribute!==Ye||Ye&&Ke.data!==Ye.data)return!0;be++}return p.attributesNum!==be||p.index!==ge}function k(te,xe,we,ge){const Oe={},Ce=xe.attributes;let be=0;const ne=we.getAttributes();for(const pe in ne)if(ne[pe].location>=0){let Ke=Ce[pe];Ke===void 0&&(pe==="instanceMatrix"&&te.instanceMatrix&&(Ke=te.instanceMatrix),pe==="instanceColor"&&te.instanceColor&&(Ke=te.instanceColor));const Ye={};Ye.attribute=Ke,Ke&&Ke.data&&(Ye.data=Ke.data),Oe[pe]=Ye,be++}p.attributes=Oe,p.attributesNum=be,p.index=ge}function O(){const te=p.newAttributes;for(let xe=0,we=te.length;xe<we;xe++)te[xe]=0}function B(te){W(te,0)}function W(te,xe){const we=p.newAttributes,ge=p.enabledAttributes,Oe=p.attributeDivisors;we[te]=1,ge[te]===0&&(s.enableVertexAttribArray(te),ge[te]=1),Oe[te]!==xe&&((n.isWebGL2?s:e.get("ANGLE_instanced_arrays"))[n.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](te,xe),Oe[te]=xe)}function J(){const te=p.newAttributes,xe=p.enabledAttributes;for(let we=0,ge=xe.length;we<ge;we++)xe[we]!==te[we]&&(s.disableVertexAttribArray(we),xe[we]=0)}function m(te,xe,we,ge,Oe,Ce,be){be===!0?s.vertexAttribIPointer(te,xe,we,Oe,Ce):s.vertexAttribPointer(te,xe,we,ge,Oe,Ce)}function me(te,xe,we,ge){if(n.isWebGL2===!1&&(te.isInstancedMesh||ge.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;O();const Oe=ge.attributes,Ce=we.getAttributes(),be=xe.defaultAttributeValues;for(const ne in Ce){const pe=Ce[ne];if(pe.location>=0){let Ve=Oe[ne];if(Ve===void 0&&(ne==="instanceMatrix"&&te.instanceMatrix&&(Ve=te.instanceMatrix),ne==="instanceColor"&&te.instanceColor&&(Ve=te.instanceColor)),Ve!==void 0){const Ke=Ve.normalized,Ye=Ve.itemSize,lt=t.get(Ve);if(lt===void 0)continue;const Ct=lt.buffer,dt=lt.type,De=lt.bytesPerElement,Ge=n.isWebGL2===!0&&(dt===s.INT||dt===s.UNSIGNED_INT||Ve.gpuType===pg);if(Ve.isInterleavedBufferAttribute){const ot=Ve.data,oe=ot.stride,wn=Ve.offset;if(ot.isInstancedInterleavedBuffer){for(let tt=0;tt<pe.locationSize;tt++)W(pe.location+tt,ot.meshPerAttribute);te.isInstancedMesh!==!0&&ge._maxInstanceCount===void 0&&(ge._maxInstanceCount=ot.meshPerAttribute*ot.count)}else for(let tt=0;tt<pe.locationSize;tt++)B(pe.location+tt);s.bindBuffer(s.ARRAY_BUFFER,Ct);for(let tt=0;tt<pe.locationSize;tt++)m(pe.location+tt,Ye/pe.locationSize,dt,Ke,oe*De,(wn+Ye/pe.locationSize*tt)*De,Ge)}else{if(Ve.isInstancedBufferAttribute){for(let ot=0;ot<pe.locationSize;ot++)W(pe.location+ot,Ve.meshPerAttribute);te.isInstancedMesh!==!0&&ge._maxInstanceCount===void 0&&(ge._maxInstanceCount=Ve.meshPerAttribute*Ve.count)}else for(let ot=0;ot<pe.locationSize;ot++)B(pe.location+ot);s.bindBuffer(s.ARRAY_BUFFER,Ct);for(let ot=0;ot<pe.locationSize;ot++)m(pe.location+ot,Ye/pe.locationSize,dt,Ke,Ye*De,Ye/pe.locationSize*ot*De,Ge)}}else if(be!==void 0){const Ke=be[ne];if(Ke!==void 0)switch(Ke.length){case 2:s.vertexAttrib2fv(pe.location,Ke);break;case 3:s.vertexAttrib3fv(pe.location,Ke);break;case 4:s.vertexAttrib4fv(pe.location,Ke);break;default:s.vertexAttrib1fv(pe.location,Ke)}}}}J()}function N(){Re();for(const te in u){const xe=u[te];for(const we in xe){const ge=xe[we];for(const Oe in ge)w(ge[Oe].object),delete ge[Oe];delete xe[we]}delete u[te]}}function X(te){if(u[te.id]===void 0)return;const xe=u[te.id];for(const we in xe){const ge=xe[we];for(const Oe in ge)w(ge[Oe].object),delete ge[Oe];delete xe[we]}delete u[te.id]}function Ee(te){for(const xe in u){const we=u[xe];if(we[te.id]===void 0)continue;const ge=we[te.id];for(const Oe in ge)w(ge[Oe].object),delete ge[Oe];delete we[te.id]}}function Re(){ye(),g=!0,p!==d&&(p=d,E(p.object))}function ye(){d.geometry=null,d.program=null,d.wireframe=!1}return{setup:v,reset:Re,resetDefaultState:ye,dispose:N,releaseStatesOfGeometry:X,releaseStatesOfProgram:Ee,initAttributes:O,enableAttribute:B,disableUnusedAttributes:J}}function Nb(s,e,t,n){const r=n.isWebGL2;let a;function c(p){a=p}function u(p,g){s.drawArrays(a,p,g),t.update(g,a,1)}function d(p,g,v){if(v===0)return;let x,E;if(r)x=s,E="drawArraysInstanced";else if(x=e.get("ANGLE_instanced_arrays"),E="drawArraysInstancedANGLE",x===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}x[E](a,p,g,v),t.update(g,a,v)}this.setMode=c,this.render=u,this.renderInstances=d}function Ub(s,e,t){let n;function r(){if(n!==void 0)return n;if(e.has("EXT_texture_filter_anisotropic")===!0){const m=e.get("EXT_texture_filter_anisotropic");n=s.getParameter(m.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function a(m){if(m==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";m="mediump"}return m==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}const c=typeof WebGL2RenderingContext<"u"&&s.constructor.name==="WebGL2RenderingContext";let u=t.precision!==void 0?t.precision:"highp";const d=a(u);d!==u&&(console.warn("THREE.WebGLRenderer:",u,"not supported, using",d,"instead."),u=d);const p=c||e.has("WEBGL_draw_buffers"),g=t.logarithmicDepthBuffer===!0,v=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),x=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),E=s.getParameter(s.MAX_TEXTURE_SIZE),w=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),C=s.getParameter(s.MAX_VERTEX_ATTRIBS),T=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),M=s.getParameter(s.MAX_VARYING_VECTORS),k=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),O=x>0,B=c||e.has("OES_texture_float"),W=O&&B,J=c?s.getParameter(s.MAX_SAMPLES):0;return{isWebGL2:c,drawBuffers:p,getMaxAnisotropy:r,getMaxPrecision:a,precision:u,logarithmicDepthBuffer:g,maxTextures:v,maxVertexTextures:x,maxTextureSize:E,maxCubemapSize:w,maxAttributes:C,maxVertexUniforms:T,maxVaryings:M,maxFragmentUniforms:k,vertexTextures:O,floatFragmentTextures:B,floatVertexTextures:W,maxSamples:J}}function Ob(s){const e=this;let t=null,n=0,r=!1,a=!1;const c=new qs,u=new Xt,d={value:null,needsUpdate:!1};this.uniform=d,this.numPlanes=0,this.numIntersection=0,this.init=function(v,x){const E=v.length!==0||x||n!==0||r;return r=x,n=v.length,E},this.beginShadows=function(){a=!0,g(null)},this.endShadows=function(){a=!1},this.setGlobalState=function(v,x){t=g(v,x,0)},this.setState=function(v,x,E){const w=v.clippingPlanes,C=v.clipIntersection,T=v.clipShadows,M=s.get(v);if(!r||w===null||w.length===0||a&&!T)a?g(null):p();else{const k=a?0:n,O=k*4;let B=M.clippingState||null;d.value=B,B=g(w,x,O,E);for(let W=0;W!==O;++W)B[W]=t[W];M.clippingState=B,this.numIntersection=C?this.numPlanes:0,this.numPlanes+=k}};function p(){d.value!==t&&(d.value=t,d.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function g(v,x,E,w){const C=v!==null?v.length:0;let T=null;if(C!==0){if(T=d.value,w!==!0||T===null){const M=E+C*4,k=x.matrixWorldInverse;u.getNormalMatrix(k),(T===null||T.length<M)&&(T=new Float32Array(M));for(let O=0,B=E;O!==C;++O,B+=4)c.copy(v[O]).applyMatrix4(k,u),c.normal.toArray(T,B),T[B+3]=c.constant}d.value=T,d.needsUpdate=!0}return e.numPlanes=C,e.numIntersection=0,T}}function Fb(s){let e=new WeakMap;function t(c,u){return u===Zf?c.mapping=jo:u===Jf&&(c.mapping=Ko),c}function n(c){if(c&&c.isTexture&&c.isRenderTargetTexture===!1){const u=c.mapping;if(u===Zf||u===Jf)if(e.has(c)){const d=e.get(c).texture;return t(d,c.mapping)}else{const d=c.image;if(d&&d.height>0){const p=new ZT(d.height/2);return p.fromEquirectangularTexture(s,c),e.set(c,p),c.addEventListener("dispose",r),t(p.texture,c.mapping)}else return null}}return c}function r(c){const u=c.target;u.removeEventListener("dispose",r);const d=e.get(u);d!==void 0&&(e.delete(u),d.dispose())}function a(){e=new WeakMap}return{get:n,dispose:a}}class _h extends Ig{constructor(e=-1,t=1,n=1,r=-1,a=.1,c=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=r,this.near=a,this.far=c,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,r,a,c){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=a,this.view.height=c,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let a=n-e,c=n+e,u=r+t,d=r-t;if(this.view!==null&&this.view.enabled){const p=(this.right-this.left)/this.view.fullWidth/this.zoom,g=(this.top-this.bottom)/this.view.fullHeight/this.zoom;a+=p*this.view.offsetX,c=a+p*this.view.width,u-=g*this.view.offsetY,d=u-g*this.view.height}this.projectionMatrix.makeOrthographic(a,c,u,d,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const Wo=4,_m=[.125,.215,.35,.446,.526,.582],$s=20,gf=new _h,vm=new Rt;let _f=null,vf=0,xf=0;const Ys=(1+Math.sqrt(5))/2,Go=1/Ys,xm=[new re(1,1,1),new re(-1,1,1),new re(1,1,-1),new re(-1,1,-1),new re(0,Ys,Go),new re(0,Ys,-Go),new re(Go,0,Ys),new re(-Go,0,Ys),new re(Ys,Go,0),new re(-Ys,Go,0)];class ym{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,r=100){_f=this._renderer.getRenderTarget(),vf=this._renderer.getActiveCubeFace(),xf=this._renderer.getActiveMipmapLevel(),this._setSize(256);const a=this._allocateTargets();return a.depthBuffer=!0,this._sceneToCubeUV(e,n,r,a),t>0&&this._blur(a,0,0,t),this._applyPMREM(a),this._cleanup(a),a}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Tm(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Mm(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(_f,vf,xf),e.scissorTest=!1,mc(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===jo||e.mapping===Ko?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),_f=this._renderer.getRenderTarget(),vf=this._renderer.getActiveCubeFace(),xf=this._renderer.getActiveMipmapLevel();const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:Ti,minFilter:Ti,generateMipmaps:!1,type:Ja,format:ji,colorSpace:$n,depthBuffer:!1},r=Sm(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Sm(e,t,n);const{_lodMax:a}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Bb(a)),this._blurMaterial=Hb(a,e,t)}return r}_compileMaterial(e){const t=new $i(this._lodPlanes[0],e);this._renderer.compile(t,gf)}_sceneToCubeUV(e,t,n,r){const u=new hi(90,1,t,n),d=[1,-1,1,1,1,1],p=[1,1,1,-1,-1,-1],g=this._renderer,v=g.autoClear,x=g.toneMapping;g.getClearColor(vm),g.toneMapping=Ts,g.autoClear=!1;const E=new Zs({name:"PMREM.Background",side:Ei,depthWrite:!1,depthTest:!1}),w=new $i(new nl,E);let C=!1;const T=e.background;T?T.isColor&&(E.color.copy(T),e.background=null,C=!0):(E.color.copy(vm),C=!0);for(let M=0;M<6;M++){const k=M%3;k===0?(u.up.set(0,d[M],0),u.lookAt(p[M],0,0)):k===1?(u.up.set(0,0,d[M]),u.lookAt(0,p[M],0)):(u.up.set(0,d[M],0),u.lookAt(0,0,p[M]));const O=this._cubeSize;mc(r,k*O,M>2?O:0,O,O),g.setRenderTarget(r),C&&g.render(w,u),g.render(e,u)}w.geometry.dispose(),w.material.dispose(),g.toneMapping=x,g.autoClear=v,e.background=T}_textureToCubeUV(e,t){const n=this._renderer,r=e.mapping===jo||e.mapping===Ko;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=Tm()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Mm());const a=r?this._cubemapMaterial:this._equirectMaterial,c=new $i(this._lodPlanes[0],a),u=a.uniforms;u.envMap.value=e;const d=this._cubeSize;mc(t,0,0,3*d,2*d),n.setRenderTarget(t),n.render(c,gf)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;for(let r=1;r<this._lodPlanes.length;r++){const a=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),c=xm[(r-1)%xm.length];this._blur(e,r-1,r,a,c)}t.autoClear=n}_blur(e,t,n,r,a){const c=this._pingPongRenderTarget;this._halfBlur(e,c,t,n,r,"latitudinal",a),this._halfBlur(c,e,n,n,r,"longitudinal",a)}_halfBlur(e,t,n,r,a,c,u){const d=this._renderer,p=this._blurMaterial;c!=="latitudinal"&&c!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const g=3,v=new $i(this._lodPlanes[r],p),x=p.uniforms,E=this._sizeLods[n]-1,w=isFinite(a)?Math.PI/(2*E):2*Math.PI/(2*$s-1),C=a/w,T=isFinite(a)?1+Math.floor(g*C):$s;T>$s&&console.warn(`sigmaRadians, ${a}, is too large and will clip, as it requested ${T} samples when the maximum is set to ${$s}`);const M=[];let k=0;for(let m=0;m<$s;++m){const me=m/C,N=Math.exp(-me*me/2);M.push(N),m===0?k+=N:m<T&&(k+=2*N)}for(let m=0;m<M.length;m++)M[m]=M[m]/k;x.envMap.value=e.texture,x.samples.value=T,x.weights.value=M,x.latitudinal.value=c==="latitudinal",u&&(x.poleAxis.value=u);const{_lodMax:O}=this;x.dTheta.value=w,x.mipInt.value=O-n;const B=this._sizeLods[r],W=3*B*(r>O-Wo?r-O+Wo:0),J=4*(this._cubeSize-B);mc(t,W,J,3*B,2*B),d.setRenderTarget(t),d.render(v,gf)}}function Bb(s){const e=[],t=[],n=[];let r=s;const a=s-Wo+1+_m.length;for(let c=0;c<a;c++){const u=Math.pow(2,r);t.push(u);let d=1/u;c>s-Wo?d=_m[c-s+Wo-1]:c===0&&(d=0),n.push(d);const p=1/(u-2),g=-p,v=1+p,x=[g,g,v,g,v,v,g,g,v,v,g,v],E=6,w=6,C=3,T=2,M=1,k=new Float32Array(C*w*E),O=new Float32Array(T*w*E),B=new Float32Array(M*w*E);for(let J=0;J<E;J++){const m=J%3*2/3-1,me=J>2?0:-1,N=[m,me,0,m+2/3,me,0,m+2/3,me+1,0,m,me,0,m+2/3,me+1,0,m,me+1,0];k.set(N,C*w*J),O.set(x,T*w*J);const X=[J,J,J,J,J,J];B.set(X,M*w*J)}const W=new Er;W.setAttribute("position",new di(k,C)),W.setAttribute("uv",new di(O,T)),W.setAttribute("faceIndex",new di(B,M)),e.push(W),r>Wo&&r--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function Sm(s,e,t){const n=new io(s,e,t);return n.texture.mapping=Dc,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function mc(s,e,t,n,r){s.viewport.set(e,t,n,r),s.scissor.set(e,t,n,r)}function Hb(s,e,t){const n=new Float32Array($s),r=new re(0,1,0);return new ro({name:"SphericalGaussianBlur",defines:{n:$s,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:vh(),fragmentShader:`

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
		`,blending:Ms,depthTest:!1,depthWrite:!1})}function Mm(){return new ro({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:vh(),fragmentShader:`

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
		`,blending:Ms,depthTest:!1,depthWrite:!1})}function Tm(){return new ro({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:vh(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Ms,depthTest:!1,depthWrite:!1})}function vh(){return`

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
	`}function zb(s){let e=new WeakMap,t=null;function n(u){if(u&&u.isTexture){const d=u.mapping,p=d===Zf||d===Jf,g=d===jo||d===Ko;if(p||g)if(u.isRenderTargetTexture&&u.needsPMREMUpdate===!0){u.needsPMREMUpdate=!1;let v=e.get(u);return t===null&&(t=new ym(s)),v=p?t.fromEquirectangular(u,v):t.fromCubemap(u,v),e.set(u,v),v.texture}else{if(e.has(u))return e.get(u).texture;{const v=u.image;if(p&&v&&v.height>0||g&&v&&r(v)){t===null&&(t=new ym(s));const x=p?t.fromEquirectangular(u):t.fromCubemap(u);return e.set(u,x),u.addEventListener("dispose",a),x.texture}else return null}}}return u}function r(u){let d=0;const p=6;for(let g=0;g<p;g++)u[g]!==void 0&&d++;return d===p}function a(u){const d=u.target;d.removeEventListener("dispose",a);const p=e.get(d);p!==void 0&&(e.delete(d),p.dispose())}function c(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:c}}function Gb(s){const e={};function t(n){if(e[n]!==void 0)return e[n];let r;switch(n){case"WEBGL_depth_texture":r=s.getExtension("WEBGL_depth_texture")||s.getExtension("MOZ_WEBGL_depth_texture")||s.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=s.getExtension("EXT_texture_filter_anisotropic")||s.getExtension("MOZ_EXT_texture_filter_anisotropic")||s.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=s.getExtension("WEBGL_compressed_texture_s3tc")||s.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=s.getExtension("WEBGL_compressed_texture_pvrtc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=s.getExtension(n)}return e[n]=r,r}return{has:function(n){return t(n)!==null},init:function(n){n.isWebGL2?t("EXT_color_buffer_float"):(t("WEBGL_depth_texture"),t("OES_texture_float"),t("OES_texture_half_float"),t("OES_texture_half_float_linear"),t("OES_standard_derivatives"),t("OES_element_index_uint"),t("OES_vertex_array_object"),t("ANGLE_instanced_arrays")),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture")},get:function(n){const r=t(n);return r===null&&console.warn("THREE.WebGLRenderer: "+n+" extension not supported."),r}}}function kb(s,e,t,n){const r={},a=new WeakMap;function c(v){const x=v.target;x.index!==null&&e.remove(x.index);for(const w in x.attributes)e.remove(x.attributes[w]);for(const w in x.morphAttributes){const C=x.morphAttributes[w];for(let T=0,M=C.length;T<M;T++)e.remove(C[T])}x.removeEventListener("dispose",c),delete r[x.id];const E=a.get(x);E&&(e.remove(E),a.delete(x)),n.releaseStatesOfGeometry(x),x.isInstancedBufferGeometry===!0&&delete x._maxInstanceCount,t.memory.geometries--}function u(v,x){return r[x.id]===!0||(x.addEventListener("dispose",c),r[x.id]=!0,t.memory.geometries++),x}function d(v){const x=v.attributes;for(const w in x)e.update(x[w],s.ARRAY_BUFFER);const E=v.morphAttributes;for(const w in E){const C=E[w];for(let T=0,M=C.length;T<M;T++)e.update(C[T],s.ARRAY_BUFFER)}}function p(v){const x=[],E=v.index,w=v.attributes.position;let C=0;if(E!==null){const k=E.array;C=E.version;for(let O=0,B=k.length;O<B;O+=3){const W=k[O+0],J=k[O+1],m=k[O+2];x.push(W,J,J,m,m,W)}}else if(w!==void 0){const k=w.array;C=w.version;for(let O=0,B=k.length/3-1;O<B;O+=3){const W=O+0,J=O+1,m=O+2;x.push(W,J,J,m,m,W)}}else return;const T=new(Eg(x)?Pg:Lg)(x,1);T.version=C;const M=a.get(v);M&&e.remove(M),a.set(v,T)}function g(v){const x=a.get(v);if(x){const E=v.index;E!==null&&x.version<E.version&&p(v)}else p(v);return a.get(v)}return{get:u,update:d,getWireframeAttribute:g}}function Vb(s,e,t,n){const r=n.isWebGL2;let a;function c(x){a=x}let u,d;function p(x){u=x.type,d=x.bytesPerElement}function g(x,E){s.drawElements(a,E,u,x*d),t.update(E,a,1)}function v(x,E,w){if(w===0)return;let C,T;if(r)C=s,T="drawElementsInstanced";else if(C=e.get("ANGLE_instanced_arrays"),T="drawElementsInstancedANGLE",C===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}C[T](a,E,u,x*d,w),t.update(E,a,w)}this.setMode=c,this.setIndex=p,this.render=g,this.renderInstances=v}function Wb(s){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(a,c,u){switch(t.calls++,c){case s.TRIANGLES:t.triangles+=u*(a/3);break;case s.LINES:t.lines+=u*(a/2);break;case s.LINE_STRIP:t.lines+=u*(a-1);break;case s.LINE_LOOP:t.lines+=u*a;break;case s.POINTS:t.points+=u*a;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",c);break}}function r(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:n}}function Xb(s,e){return s[0]-e[0]}function qb(s,e){return Math.abs(e[1])-Math.abs(s[1])}function Yb(s,e,t){const n={},r=new Float32Array(8),a=new WeakMap,c=new dn,u=[];for(let p=0;p<8;p++)u[p]=[p,0];function d(p,g,v){const x=p.morphTargetInfluences;if(e.isWebGL2===!0){const w=g.morphAttributes.position||g.morphAttributes.normal||g.morphAttributes.color,C=w!==void 0?w.length:0;let T=a.get(g);if(T===void 0||T.count!==C){let xe=function(){ye.dispose(),a.delete(g),g.removeEventListener("dispose",xe)};var E=xe;T!==void 0&&T.texture.dispose();const O=g.morphAttributes.position!==void 0,B=g.morphAttributes.normal!==void 0,W=g.morphAttributes.color!==void 0,J=g.morphAttributes.position||[],m=g.morphAttributes.normal||[],me=g.morphAttributes.color||[];let N=0;O===!0&&(N=1),B===!0&&(N=2),W===!0&&(N=3);let X=g.attributes.position.count*N,Ee=1;X>e.maxTextureSize&&(Ee=Math.ceil(X/e.maxTextureSize),X=e.maxTextureSize);const Re=new Float32Array(X*Ee*4*C),ye=new wg(Re,X,Ee,C);ye.type=jr,ye.needsUpdate=!0;const te=N*4;for(let we=0;we<C;we++){const ge=J[we],Oe=m[we],Ce=me[we],be=X*Ee*4*we;for(let ne=0;ne<ge.count;ne++){const pe=ne*te;O===!0&&(c.fromBufferAttribute(ge,ne),Re[be+pe+0]=c.x,Re[be+pe+1]=c.y,Re[be+pe+2]=c.z,Re[be+pe+3]=0),B===!0&&(c.fromBufferAttribute(Oe,ne),Re[be+pe+4]=c.x,Re[be+pe+5]=c.y,Re[be+pe+6]=c.z,Re[be+pe+7]=0),W===!0&&(c.fromBufferAttribute(Ce,ne),Re[be+pe+8]=c.x,Re[be+pe+9]=c.y,Re[be+pe+10]=c.z,Re[be+pe+11]=Ce.itemSize===4?c.w:1)}}T={count:C,texture:ye,size:new Qt(X,Ee)},a.set(g,T),g.addEventListener("dispose",xe)}let M=0;for(let O=0;O<x.length;O++)M+=x[O];const k=g.morphTargetsRelative?1:1-M;v.getUniforms().setValue(s,"morphTargetBaseInfluence",k),v.getUniforms().setValue(s,"morphTargetInfluences",x),v.getUniforms().setValue(s,"morphTargetsTexture",T.texture,t),v.getUniforms().setValue(s,"morphTargetsTextureSize",T.size)}else{const w=x===void 0?0:x.length;let C=n[g.id];if(C===void 0||C.length!==w){C=[];for(let B=0;B<w;B++)C[B]=[B,0];n[g.id]=C}for(let B=0;B<w;B++){const W=C[B];W[0]=B,W[1]=x[B]}C.sort(qb);for(let B=0;B<8;B++)B<w&&C[B][1]?(u[B][0]=C[B][0],u[B][1]=C[B][1]):(u[B][0]=Number.MAX_SAFE_INTEGER,u[B][1]=0);u.sort(Xb);const T=g.morphAttributes.position,M=g.morphAttributes.normal;let k=0;for(let B=0;B<8;B++){const W=u[B],J=W[0],m=W[1];J!==Number.MAX_SAFE_INTEGER&&m?(T&&g.getAttribute("morphTarget"+B)!==T[J]&&g.setAttribute("morphTarget"+B,T[J]),M&&g.getAttribute("morphNormal"+B)!==M[J]&&g.setAttribute("morphNormal"+B,M[J]),r[B]=m,k+=m):(T&&g.hasAttribute("morphTarget"+B)===!0&&g.deleteAttribute("morphTarget"+B),M&&g.hasAttribute("morphNormal"+B)===!0&&g.deleteAttribute("morphNormal"+B),r[B]=0)}const O=g.morphTargetsRelative?1:1-k;v.getUniforms().setValue(s,"morphTargetBaseInfluence",O),v.getUniforms().setValue(s,"morphTargetInfluences",r)}}return{update:d}}function jb(s,e,t,n){let r=new WeakMap;function a(d){const p=n.render.frame,g=d.geometry,v=e.get(d,g);if(r.get(v)!==p&&(e.update(v),r.set(v,p)),d.isInstancedMesh&&(d.hasEventListener("dispose",u)===!1&&d.addEventListener("dispose",u),r.get(d)!==p&&(t.update(d.instanceMatrix,s.ARRAY_BUFFER),d.instanceColor!==null&&t.update(d.instanceColor,s.ARRAY_BUFFER),r.set(d,p))),d.isSkinnedMesh){const x=d.skeleton;r.get(x)!==p&&(x.update(),r.set(x,p))}return v}function c(){r=new WeakMap}function u(d){const p=d.target;p.removeEventListener("dispose",u),t.remove(p.instanceMatrix),p.instanceColor!==null&&t.remove(p.instanceColor)}return{update:a,dispose:c}}const Og=new Kn,Fg=new wg,Bg=new NT,Hg=new Ng,Em=[],Am=[],bm=new Float32Array(16),wm=new Float32Array(9),Rm=new Float32Array(4);function sa(s,e,t){const n=s[0];if(n<=0||n>0)return s;const r=e*t;let a=Em[r];if(a===void 0&&(a=new Float32Array(r),Em[r]=a),e!==0){n.toArray(a,0);for(let c=1,u=0;c!==e;++c)u+=t,s[c].toArray(a,u)}return a}function zn(s,e){if(s.length!==e.length)return!1;for(let t=0,n=s.length;t<n;t++)if(s[t]!==e[t])return!1;return!0}function Gn(s,e){for(let t=0,n=e.length;t<n;t++)s[t]=e[t]}function Oc(s,e){let t=Am[e];t===void 0&&(t=new Int32Array(e),Am[e]=t);for(let n=0;n!==e;++n)t[n]=s.allocateTextureUnit();return t}function Kb(s,e){const t=this.cache;t[0]!==e&&(s.uniform1f(this.addr,e),t[0]=e)}function $b(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(zn(t,e))return;s.uniform2fv(this.addr,e),Gn(t,e)}}function Zb(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(s.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(zn(t,e))return;s.uniform3fv(this.addr,e),Gn(t,e)}}function Jb(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(zn(t,e))return;s.uniform4fv(this.addr,e),Gn(t,e)}}function Qb(s,e){const t=this.cache,n=e.elements;if(n===void 0){if(zn(t,e))return;s.uniformMatrix2fv(this.addr,!1,e),Gn(t,e)}else{if(zn(t,n))return;Rm.set(n),s.uniformMatrix2fv(this.addr,!1,Rm),Gn(t,n)}}function ew(s,e){const t=this.cache,n=e.elements;if(n===void 0){if(zn(t,e))return;s.uniformMatrix3fv(this.addr,!1,e),Gn(t,e)}else{if(zn(t,n))return;wm.set(n),s.uniformMatrix3fv(this.addr,!1,wm),Gn(t,n)}}function tw(s,e){const t=this.cache,n=e.elements;if(n===void 0){if(zn(t,e))return;s.uniformMatrix4fv(this.addr,!1,e),Gn(t,e)}else{if(zn(t,n))return;bm.set(n),s.uniformMatrix4fv(this.addr,!1,bm),Gn(t,n)}}function nw(s,e){const t=this.cache;t[0]!==e&&(s.uniform1i(this.addr,e),t[0]=e)}function iw(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(zn(t,e))return;s.uniform2iv(this.addr,e),Gn(t,e)}}function rw(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(zn(t,e))return;s.uniform3iv(this.addr,e),Gn(t,e)}}function sw(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(zn(t,e))return;s.uniform4iv(this.addr,e),Gn(t,e)}}function ow(s,e){const t=this.cache;t[0]!==e&&(s.uniform1ui(this.addr,e),t[0]=e)}function aw(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(zn(t,e))return;s.uniform2uiv(this.addr,e),Gn(t,e)}}function lw(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(zn(t,e))return;s.uniform3uiv(this.addr,e),Gn(t,e)}}function cw(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(zn(t,e))return;s.uniform4uiv(this.addr,e),Gn(t,e)}}function uw(s,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(s.uniform1i(this.addr,r),n[0]=r),t.setTexture2D(e||Og,r)}function fw(s,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(s.uniform1i(this.addr,r),n[0]=r),t.setTexture3D(e||Bg,r)}function hw(s,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(s.uniform1i(this.addr,r),n[0]=r),t.setTextureCube(e||Hg,r)}function dw(s,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(s.uniform1i(this.addr,r),n[0]=r),t.setTexture2DArray(e||Fg,r)}function pw(s){switch(s){case 5126:return Kb;case 35664:return $b;case 35665:return Zb;case 35666:return Jb;case 35674:return Qb;case 35675:return ew;case 35676:return tw;case 5124:case 35670:return nw;case 35667:case 35671:return iw;case 35668:case 35672:return rw;case 35669:case 35673:return sw;case 5125:return ow;case 36294:return aw;case 36295:return lw;case 36296:return cw;case 35678:case 36198:case 36298:case 36306:case 35682:return uw;case 35679:case 36299:case 36307:return fw;case 35680:case 36300:case 36308:case 36293:return hw;case 36289:case 36303:case 36311:case 36292:return dw}}function mw(s,e){s.uniform1fv(this.addr,e)}function gw(s,e){const t=sa(e,this.size,2);s.uniform2fv(this.addr,t)}function _w(s,e){const t=sa(e,this.size,3);s.uniform3fv(this.addr,t)}function vw(s,e){const t=sa(e,this.size,4);s.uniform4fv(this.addr,t)}function xw(s,e){const t=sa(e,this.size,4);s.uniformMatrix2fv(this.addr,!1,t)}function yw(s,e){const t=sa(e,this.size,9);s.uniformMatrix3fv(this.addr,!1,t)}function Sw(s,e){const t=sa(e,this.size,16);s.uniformMatrix4fv(this.addr,!1,t)}function Mw(s,e){s.uniform1iv(this.addr,e)}function Tw(s,e){s.uniform2iv(this.addr,e)}function Ew(s,e){s.uniform3iv(this.addr,e)}function Aw(s,e){s.uniform4iv(this.addr,e)}function bw(s,e){s.uniform1uiv(this.addr,e)}function ww(s,e){s.uniform2uiv(this.addr,e)}function Rw(s,e){s.uniform3uiv(this.addr,e)}function Cw(s,e){s.uniform4uiv(this.addr,e)}function Lw(s,e,t){const n=this.cache,r=e.length,a=Oc(t,r);zn(n,a)||(s.uniform1iv(this.addr,a),Gn(n,a));for(let c=0;c!==r;++c)t.setTexture2D(e[c]||Og,a[c])}function Pw(s,e,t){const n=this.cache,r=e.length,a=Oc(t,r);zn(n,a)||(s.uniform1iv(this.addr,a),Gn(n,a));for(let c=0;c!==r;++c)t.setTexture3D(e[c]||Bg,a[c])}function Dw(s,e,t){const n=this.cache,r=e.length,a=Oc(t,r);zn(n,a)||(s.uniform1iv(this.addr,a),Gn(n,a));for(let c=0;c!==r;++c)t.setTextureCube(e[c]||Hg,a[c])}function Iw(s,e,t){const n=this.cache,r=e.length,a=Oc(t,r);zn(n,a)||(s.uniform1iv(this.addr,a),Gn(n,a));for(let c=0;c!==r;++c)t.setTexture2DArray(e[c]||Fg,a[c])}function Nw(s){switch(s){case 5126:return mw;case 35664:return gw;case 35665:return _w;case 35666:return vw;case 35674:return xw;case 35675:return yw;case 35676:return Sw;case 5124:case 35670:return Mw;case 35667:case 35671:return Tw;case 35668:case 35672:return Ew;case 35669:case 35673:return Aw;case 5125:return bw;case 36294:return ww;case 36295:return Rw;case 36296:return Cw;case 35678:case 36198:case 36298:case 36306:case 35682:return Lw;case 35679:case 36299:case 36307:return Pw;case 35680:case 36300:case 36308:case 36293:return Dw;case 36289:case 36303:case 36311:case 36292:return Iw}}class Uw{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.setValue=pw(t.type)}}class Ow{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.size=t.size,this.setValue=Nw(t.type)}}class Fw{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const r=this.seq;for(let a=0,c=r.length;a!==c;++a){const u=r[a];u.setValue(e,t[u.id],n)}}}const yf=/(\w+)(\])?(\[|\.)?/g;function Cm(s,e){s.seq.push(e),s.map[e.id]=e}function Bw(s,e,t){const n=s.name,r=n.length;for(yf.lastIndex=0;;){const a=yf.exec(n),c=yf.lastIndex;let u=a[1];const d=a[2]==="]",p=a[3];if(d&&(u=u|0),p===void 0||p==="["&&c+2===r){Cm(t,p===void 0?new Uw(u,s,e):new Ow(u,s,e));break}else{let v=t.map[u];v===void 0&&(v=new Fw(u),Cm(t,v)),t=v}}}class Tc{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let r=0;r<n;++r){const a=e.getActiveUniform(t,r),c=e.getUniformLocation(t,a.name);Bw(a,c,this)}}setValue(e,t,n,r){const a=this.map[t];a!==void 0&&a.setValue(e,n,r)}setOptional(e,t,n){const r=t[n];r!==void 0&&this.setValue(e,n,r)}static upload(e,t,n,r){for(let a=0,c=t.length;a!==c;++a){const u=t[a],d=n[u.id];d.needsUpdate!==!1&&u.setValue(e,d.value,r)}}static seqWithValue(e,t){const n=[];for(let r=0,a=e.length;r!==a;++r){const c=e[r];c.id in t&&n.push(c)}return n}}function Lm(s,e,t){const n=s.createShader(e);return s.shaderSource(n,t),s.compileShader(n),n}const Hw=37297;let zw=0;function Gw(s,e){const t=s.split(`
`),n=[],r=Math.max(e-6,0),a=Math.min(e+6,t.length);for(let c=r;c<a;c++){const u=c+1;n.push(`${u===e?">":" "} ${u}: ${t[c]}`)}return n.join(`
`)}function kw(s){const e=an.getPrimaries(an.workingColorSpace),t=an.getPrimaries(s);let n;switch(e===t?n="":e===Rc&&t===wc?n="LinearDisplayP3ToLinearSRGB":e===wc&&t===Rc&&(n="LinearSRGBToLinearDisplayP3"),s){case $n:case Ic:return[n,"LinearTransferOETF"];case bn:case dh:return[n,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",s),[n,"LinearTransferOETF"]}}function Pm(s,e,t){const n=s.getShaderParameter(e,s.COMPILE_STATUS),r=s.getShaderInfoLog(e).trim();if(n&&r==="")return"";const a=/ERROR: 0:(\d+)/.exec(r);if(a){const c=parseInt(a[1]);return t.toUpperCase()+`

`+r+`

`+Gw(s.getShaderSource(e),c)}else return r}function Vw(s,e){const t=kw(e);return`vec4 ${s}( vec4 value ) { return ${t[0]}( ${t[1]}( value ) ); }`}function Ww(s,e){let t;switch(e){case GM:t="Linear";break;case kM:t="Reinhard";break;case VM:t="OptimizedCineon";break;case WM:t="ACESFilmic";break;case XM:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+s+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function Xw(s){return[s.extensionDerivatives||s.envMapCubeUVHeight||s.bumpMap||s.normalMapTangentSpace||s.clearcoatNormalMap||s.flatShading||s.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(s.extensionFragDepth||s.logarithmicDepthBuffer)&&s.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",s.extensionDrawBuffers&&s.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(s.extensionShaderTextureLOD||s.envMap||s.transmission)&&s.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(qa).join(`
`)}function qw(s){const e=[];for(const t in s){const n=s[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function Yw(s,e){const t={},n=s.getProgramParameter(e,s.ACTIVE_ATTRIBUTES);for(let r=0;r<n;r++){const a=s.getActiveAttrib(e,r),c=a.name;let u=1;a.type===s.FLOAT_MAT2&&(u=2),a.type===s.FLOAT_MAT3&&(u=3),a.type===s.FLOAT_MAT4&&(u=4),t[c]={type:a.type,location:s.getAttribLocation(e,c),locationSize:u}}return t}function qa(s){return s!==""}function Dm(s,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return s.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Im(s,e){return s.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const jw=/^[ \t]*#include +<([\w\d./]+)>/gm;function rh(s){return s.replace(jw,$w)}const Kw=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function $w(s,e){let t=Ft[e];if(t===void 0){const n=Kw.get(e);if(n!==void 0)t=Ft[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return rh(t)}const Zw=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Nm(s){return s.replace(Zw,Jw)}function Jw(s,e,t,n){let r="";for(let a=parseInt(e);a<parseInt(t);a++)r+=n.replace(/\[\s*i\s*\]/g,"[ "+a+" ]").replace(/UNROLLED_LOOP_INDEX/g,a);return r}function Um(s){let e="precision "+s.precision+` float;
precision `+s.precision+" int;";return s.precision==="highp"?e+=`
#define HIGH_PRECISION`:s.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:s.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function Qw(s){let e="SHADOWMAP_TYPE_BASIC";return s.shadowMapType===ug?e="SHADOWMAP_TYPE_PCF":s.shadowMapType===mM?e="SHADOWMAP_TYPE_PCF_SOFT":s.shadowMapType===Yr&&(e="SHADOWMAP_TYPE_VSM"),e}function eR(s){let e="ENVMAP_TYPE_CUBE";if(s.envMap)switch(s.envMapMode){case jo:case Ko:e="ENVMAP_TYPE_CUBE";break;case Dc:e="ENVMAP_TYPE_CUBE_UV";break}return e}function tR(s){let e="ENVMAP_MODE_REFLECTION";if(s.envMap)switch(s.envMapMode){case Ko:e="ENVMAP_MODE_REFRACTION";break}return e}function nR(s){let e="ENVMAP_BLENDING_NONE";if(s.envMap)switch(s.combine){case fg:e="ENVMAP_BLENDING_MULTIPLY";break;case HM:e="ENVMAP_BLENDING_MIX";break;case zM:e="ENVMAP_BLENDING_ADD";break}return e}function iR(s){const e=s.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:n,maxMip:t}}function rR(s,e,t,n){const r=s.getContext(),a=t.defines;let c=t.vertexShader,u=t.fragmentShader;const d=Qw(t),p=eR(t),g=tR(t),v=nR(t),x=iR(t),E=t.isWebGL2?"":Xw(t),w=qw(a),C=r.createProgram();let T,M,k=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(T=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,w].filter(qa).join(`
`),T.length>0&&(T+=`
`),M=[E,"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,w].filter(qa).join(`
`),M.length>0&&(M+=`
`)):(T=[Um(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,w,t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+g:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors&&t.isWebGL2?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+d:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(qa).join(`
`),M=[E,Um(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,w,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+p:"",t.envMap?"#define "+g:"",t.envMap?"#define "+v:"",x?"#define CUBEUV_TEXEL_WIDTH "+x.texelWidth:"",x?"#define CUBEUV_TEXEL_HEIGHT "+x.texelHeight:"",x?"#define CUBEUV_MAX_MIP "+x.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+d:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Ts?"#define TONE_MAPPING":"",t.toneMapping!==Ts?Ft.tonemapping_pars_fragment:"",t.toneMapping!==Ts?Ww("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Ft.colorspace_pars_fragment,Vw("linearToOutputTexel",t.outputColorSpace),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(qa).join(`
`)),c=rh(c),c=Dm(c,t),c=Im(c,t),u=rh(u),u=Dm(u,t),u=Im(u,t),c=Nm(c),u=Nm(u),t.isWebGL2&&t.isRawShaderMaterial!==!0&&(k=`#version 300 es
`,T=["precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+T,M=["precision mediump sampler2DArray;","#define varying in",t.glslVersion===Qp?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Qp?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+M);const O=k+T+c,B=k+M+u,W=Lm(r,r.VERTEX_SHADER,O),J=Lm(r,r.FRAGMENT_SHADER,B);r.attachShader(C,W),r.attachShader(C,J),t.index0AttributeName!==void 0?r.bindAttribLocation(C,0,t.index0AttributeName):t.morphTargets===!0&&r.bindAttribLocation(C,0,"position"),r.linkProgram(C);function m(Ee){if(s.debug.checkShaderErrors){const Re=r.getProgramInfoLog(C).trim(),ye=r.getShaderInfoLog(W).trim(),te=r.getShaderInfoLog(J).trim();let xe=!0,we=!0;if(r.getProgramParameter(C,r.LINK_STATUS)===!1)if(xe=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(r,C,W,J);else{const ge=Pm(r,W,"vertex"),Oe=Pm(r,J,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(C,r.VALIDATE_STATUS)+`

Program Info Log: `+Re+`
`+ge+`
`+Oe)}else Re!==""?console.warn("THREE.WebGLProgram: Program Info Log:",Re):(ye===""||te==="")&&(we=!1);we&&(Ee.diagnostics={runnable:xe,programLog:Re,vertexShader:{log:ye,prefix:T},fragmentShader:{log:te,prefix:M}})}r.deleteShader(W),r.deleteShader(J),me=new Tc(r,C),N=Yw(r,C)}let me;this.getUniforms=function(){return me===void 0&&m(this),me};let N;this.getAttributes=function(){return N===void 0&&m(this),N};let X=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return X===!1&&(X=r.getProgramParameter(C,Hw)),X},this.destroy=function(){n.releaseStatesOfProgram(this),r.deleteProgram(C),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=zw++,this.cacheKey=e,this.usedTimes=1,this.program=C,this.vertexShader=W,this.fragmentShader=J,this}let sR=0;class oR{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,r=this._getShaderStage(t),a=this._getShaderStage(n),c=this._getShaderCacheForMaterial(e);return c.has(r)===!1&&(c.add(r),r.usedTimes++),c.has(a)===!1&&(c.add(a),a.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new aR(e),t.set(e,n)),n}}class aR{constructor(e){this.id=sR++,this.code=e,this.usedTimes=0}}function lR(s,e,t,n,r,a,c){const u=new Rg,d=new oR,p=[],g=r.isWebGL2,v=r.logarithmicDepthBuffer,x=r.vertexTextures;let E=r.precision;const w={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function C(N){return N===0?"uv":`uv${N}`}function T(N,X,Ee,Re,ye){const te=Re.fog,xe=ye.geometry,we=N.isMeshStandardMaterial?Re.environment:null,ge=(N.isMeshStandardMaterial?t:e).get(N.envMap||we),Oe=ge&&ge.mapping===Dc?ge.image.height:null,Ce=w[N.type];N.precision!==null&&(E=r.getMaxPrecision(N.precision),E!==N.precision&&console.warn("THREE.WebGLProgram.getParameters:",N.precision,"not supported, using",E,"instead."));const be=xe.morphAttributes.position||xe.morphAttributes.normal||xe.morphAttributes.color,ne=be!==void 0?be.length:0;let pe=0;xe.morphAttributes.position!==void 0&&(pe=1),xe.morphAttributes.normal!==void 0&&(pe=2),xe.morphAttributes.color!==void 0&&(pe=3);let Ve,Ke,Ye,lt;if(Ce){const xn=xr[Ce];Ve=xn.vertexShader,Ke=xn.fragmentShader}else Ve=N.vertexShader,Ke=N.fragmentShader,d.update(N),Ye=d.getVertexShaderID(N),lt=d.getFragmentShaderID(N);const Ct=s.getRenderTarget(),dt=ye.isInstancedMesh===!0,De=!!N.map,Ge=!!N.matcap,ot=!!ge,oe=!!N.aoMap,wn=!!N.lightMap,tt=!!N.bumpMap,mt=!!N.normalMap,vt=!!N.displacementMap,Yt=!!N.emissiveMap,gt=!!N.metalnessMap,Dt=!!N.roughnessMap,$t=N.anisotropy>0,tn=N.clearcoat>0,en=N.iridescence>0,G=N.sheen>0,D=N.transmission>0,$=$t&&!!N.anisotropyMap,Pe=tn&&!!N.clearcoatMap,Ie=tn&&!!N.clearcoatNormalMap,Be=tn&&!!N.clearcoatRoughnessMap,rt=en&&!!N.iridescenceMap,ze=en&&!!N.iridescenceThicknessMap,qe=G&&!!N.sheenColorMap,ct=G&&!!N.sheenRoughnessMap,Et=!!N.specularMap,Ue=!!N.specularColorMap,Bt=!!N.specularIntensityMap,St=D&&!!N.transmissionMap,ut=D&&!!N.thicknessMap,ft=!!N.gradientMap,Je=!!N.alphaMap,Gt=N.alphaTest>0,Q=!!N.alphaHash,ke=!!N.extensions,He=!!xe.attributes.uv1,Se=!!xe.attributes.uv2,Fe=!!xe.attributes.uv3;let nt=Ts;return N.toneMapped&&(Ct===null||Ct.isXRRenderTarget===!0)&&(nt=s.toneMapping),{isWebGL2:g,shaderID:Ce,shaderType:N.type,shaderName:N.name,vertexShader:Ve,fragmentShader:Ke,defines:N.defines,customVertexShaderID:Ye,customFragmentShaderID:lt,isRawShaderMaterial:N.isRawShaderMaterial===!0,glslVersion:N.glslVersion,precision:E,instancing:dt,instancingColor:dt&&ye.instanceColor!==null,supportsVertexTextures:x,outputColorSpace:Ct===null?s.outputColorSpace:Ct.isXRRenderTarget===!0?Ct.texture.colorSpace:$n,map:De,matcap:Ge,envMap:ot,envMapMode:ot&&ge.mapping,envMapCubeUVHeight:Oe,aoMap:oe,lightMap:wn,bumpMap:tt,normalMap:mt,displacementMap:x&&vt,emissiveMap:Yt,normalMapObjectSpace:mt&&N.normalMapType===oT,normalMapTangentSpace:mt&&N.normalMapType===Mg,metalnessMap:gt,roughnessMap:Dt,anisotropy:$t,anisotropyMap:$,clearcoat:tn,clearcoatMap:Pe,clearcoatNormalMap:Ie,clearcoatRoughnessMap:Be,iridescence:en,iridescenceMap:rt,iridescenceThicknessMap:ze,sheen:G,sheenColorMap:qe,sheenRoughnessMap:ct,specularMap:Et,specularColorMap:Ue,specularIntensityMap:Bt,transmission:D,transmissionMap:St,thicknessMap:ut,gradientMap:ft,opaque:N.transparent===!1&&N.blending===Xo,alphaMap:Je,alphaTest:Gt,alphaHash:Q,combine:N.combine,mapUv:De&&C(N.map.channel),aoMapUv:oe&&C(N.aoMap.channel),lightMapUv:wn&&C(N.lightMap.channel),bumpMapUv:tt&&C(N.bumpMap.channel),normalMapUv:mt&&C(N.normalMap.channel),displacementMapUv:vt&&C(N.displacementMap.channel),emissiveMapUv:Yt&&C(N.emissiveMap.channel),metalnessMapUv:gt&&C(N.metalnessMap.channel),roughnessMapUv:Dt&&C(N.roughnessMap.channel),anisotropyMapUv:$&&C(N.anisotropyMap.channel),clearcoatMapUv:Pe&&C(N.clearcoatMap.channel),clearcoatNormalMapUv:Ie&&C(N.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Be&&C(N.clearcoatRoughnessMap.channel),iridescenceMapUv:rt&&C(N.iridescenceMap.channel),iridescenceThicknessMapUv:ze&&C(N.iridescenceThicknessMap.channel),sheenColorMapUv:qe&&C(N.sheenColorMap.channel),sheenRoughnessMapUv:ct&&C(N.sheenRoughnessMap.channel),specularMapUv:Et&&C(N.specularMap.channel),specularColorMapUv:Ue&&C(N.specularColorMap.channel),specularIntensityMapUv:Bt&&C(N.specularIntensityMap.channel),transmissionMapUv:St&&C(N.transmissionMap.channel),thicknessMapUv:ut&&C(N.thicknessMap.channel),alphaMapUv:Je&&C(N.alphaMap.channel),vertexTangents:!!xe.attributes.tangent&&(mt||$t),vertexColors:N.vertexColors,vertexAlphas:N.vertexColors===!0&&!!xe.attributes.color&&xe.attributes.color.itemSize===4,vertexUv1s:He,vertexUv2s:Se,vertexUv3s:Fe,pointsUvs:ye.isPoints===!0&&!!xe.attributes.uv&&(De||Je),fog:!!te,useFog:N.fog===!0,fogExp2:te&&te.isFogExp2,flatShading:N.flatShading===!0,sizeAttenuation:N.sizeAttenuation===!0,logarithmicDepthBuffer:v,skinning:ye.isSkinnedMesh===!0,morphTargets:xe.morphAttributes.position!==void 0,morphNormals:xe.morphAttributes.normal!==void 0,morphColors:xe.morphAttributes.color!==void 0,morphTargetsCount:ne,morphTextureStride:pe,numDirLights:X.directional.length,numPointLights:X.point.length,numSpotLights:X.spot.length,numSpotLightMaps:X.spotLightMap.length,numRectAreaLights:X.rectArea.length,numHemiLights:X.hemi.length,numDirLightShadows:X.directionalShadowMap.length,numPointLightShadows:X.pointShadowMap.length,numSpotLightShadows:X.spotShadowMap.length,numSpotLightShadowsWithMaps:X.numSpotLightShadowsWithMaps,numLightProbes:X.numLightProbes,numClippingPlanes:c.numPlanes,numClipIntersection:c.numIntersection,dithering:N.dithering,shadowMapEnabled:s.shadowMap.enabled&&Ee.length>0,shadowMapType:s.shadowMap.type,toneMapping:nt,useLegacyLights:s._useLegacyLights,decodeVideoTexture:De&&N.map.isVideoTexture===!0&&an.getTransfer(N.map.colorSpace)===vn,premultipliedAlpha:N.premultipliedAlpha,doubleSided:N.side===yr,flipSided:N.side===Ei,useDepthPacking:N.depthPacking>=0,depthPacking:N.depthPacking||0,index0AttributeName:N.index0AttributeName,extensionDerivatives:ke&&N.extensions.derivatives===!0,extensionFragDepth:ke&&N.extensions.fragDepth===!0,extensionDrawBuffers:ke&&N.extensions.drawBuffers===!0,extensionShaderTextureLOD:ke&&N.extensions.shaderTextureLOD===!0,rendererExtensionFragDepth:g||n.has("EXT_frag_depth"),rendererExtensionDrawBuffers:g||n.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:g||n.has("EXT_shader_texture_lod"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:N.customProgramCacheKey()}}function M(N){const X=[];if(N.shaderID?X.push(N.shaderID):(X.push(N.customVertexShaderID),X.push(N.customFragmentShaderID)),N.defines!==void 0)for(const Ee in N.defines)X.push(Ee),X.push(N.defines[Ee]);return N.isRawShaderMaterial===!1&&(k(X,N),O(X,N),X.push(s.outputColorSpace)),X.push(N.customProgramCacheKey),X.join()}function k(N,X){N.push(X.precision),N.push(X.outputColorSpace),N.push(X.envMapMode),N.push(X.envMapCubeUVHeight),N.push(X.mapUv),N.push(X.alphaMapUv),N.push(X.lightMapUv),N.push(X.aoMapUv),N.push(X.bumpMapUv),N.push(X.normalMapUv),N.push(X.displacementMapUv),N.push(X.emissiveMapUv),N.push(X.metalnessMapUv),N.push(X.roughnessMapUv),N.push(X.anisotropyMapUv),N.push(X.clearcoatMapUv),N.push(X.clearcoatNormalMapUv),N.push(X.clearcoatRoughnessMapUv),N.push(X.iridescenceMapUv),N.push(X.iridescenceThicknessMapUv),N.push(X.sheenColorMapUv),N.push(X.sheenRoughnessMapUv),N.push(X.specularMapUv),N.push(X.specularColorMapUv),N.push(X.specularIntensityMapUv),N.push(X.transmissionMapUv),N.push(X.thicknessMapUv),N.push(X.combine),N.push(X.fogExp2),N.push(X.sizeAttenuation),N.push(X.morphTargetsCount),N.push(X.morphAttributeCount),N.push(X.numDirLights),N.push(X.numPointLights),N.push(X.numSpotLights),N.push(X.numSpotLightMaps),N.push(X.numHemiLights),N.push(X.numRectAreaLights),N.push(X.numDirLightShadows),N.push(X.numPointLightShadows),N.push(X.numSpotLightShadows),N.push(X.numSpotLightShadowsWithMaps),N.push(X.numLightProbes),N.push(X.shadowMapType),N.push(X.toneMapping),N.push(X.numClippingPlanes),N.push(X.numClipIntersection),N.push(X.depthPacking)}function O(N,X){u.disableAll(),X.isWebGL2&&u.enable(0),X.supportsVertexTextures&&u.enable(1),X.instancing&&u.enable(2),X.instancingColor&&u.enable(3),X.matcap&&u.enable(4),X.envMap&&u.enable(5),X.normalMapObjectSpace&&u.enable(6),X.normalMapTangentSpace&&u.enable(7),X.clearcoat&&u.enable(8),X.iridescence&&u.enable(9),X.alphaTest&&u.enable(10),X.vertexColors&&u.enable(11),X.vertexAlphas&&u.enable(12),X.vertexUv1s&&u.enable(13),X.vertexUv2s&&u.enable(14),X.vertexUv3s&&u.enable(15),X.vertexTangents&&u.enable(16),X.anisotropy&&u.enable(17),X.alphaHash&&u.enable(18),N.push(u.mask),u.disableAll(),X.fog&&u.enable(0),X.useFog&&u.enable(1),X.flatShading&&u.enable(2),X.logarithmicDepthBuffer&&u.enable(3),X.skinning&&u.enable(4),X.morphTargets&&u.enable(5),X.morphNormals&&u.enable(6),X.morphColors&&u.enable(7),X.premultipliedAlpha&&u.enable(8),X.shadowMapEnabled&&u.enable(9),X.useLegacyLights&&u.enable(10),X.doubleSided&&u.enable(11),X.flipSided&&u.enable(12),X.useDepthPacking&&u.enable(13),X.dithering&&u.enable(14),X.transmission&&u.enable(15),X.sheen&&u.enable(16),X.opaque&&u.enable(17),X.pointsUvs&&u.enable(18),X.decodeVideoTexture&&u.enable(19),N.push(u.mask)}function B(N){const X=w[N.type];let Ee;if(X){const Re=xr[X];Ee=YT.clone(Re.uniforms)}else Ee=N.uniforms;return Ee}function W(N,X){let Ee;for(let Re=0,ye=p.length;Re<ye;Re++){const te=p[Re];if(te.cacheKey===X){Ee=te,++Ee.usedTimes;break}}return Ee===void 0&&(Ee=new rR(s,X,N,a),p.push(Ee)),Ee}function J(N){if(--N.usedTimes===0){const X=p.indexOf(N);p[X]=p[p.length-1],p.pop(),N.destroy()}}function m(N){d.remove(N)}function me(){d.dispose()}return{getParameters:T,getProgramCacheKey:M,getUniforms:B,acquireProgram:W,releaseProgram:J,releaseShaderCache:m,programs:p,dispose:me}}function cR(){let s=new WeakMap;function e(a){let c=s.get(a);return c===void 0&&(c={},s.set(a,c)),c}function t(a){s.delete(a)}function n(a,c,u){s.get(a)[c]=u}function r(){s=new WeakMap}return{get:e,remove:t,update:n,dispose:r}}function uR(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.material.id!==e.material.id?s.material.id-e.material.id:s.z!==e.z?s.z-e.z:s.id-e.id}function Om(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.z!==e.z?e.z-s.z:s.id-e.id}function Fm(){const s=[];let e=0;const t=[],n=[],r=[];function a(){e=0,t.length=0,n.length=0,r.length=0}function c(v,x,E,w,C,T){let M=s[e];return M===void 0?(M={id:v.id,object:v,geometry:x,material:E,groupOrder:w,renderOrder:v.renderOrder,z:C,group:T},s[e]=M):(M.id=v.id,M.object=v,M.geometry=x,M.material=E,M.groupOrder=w,M.renderOrder=v.renderOrder,M.z=C,M.group=T),e++,M}function u(v,x,E,w,C,T){const M=c(v,x,E,w,C,T);E.transmission>0?n.push(M):E.transparent===!0?r.push(M):t.push(M)}function d(v,x,E,w,C,T){const M=c(v,x,E,w,C,T);E.transmission>0?n.unshift(M):E.transparent===!0?r.unshift(M):t.unshift(M)}function p(v,x){t.length>1&&t.sort(v||uR),n.length>1&&n.sort(x||Om),r.length>1&&r.sort(x||Om)}function g(){for(let v=e,x=s.length;v<x;v++){const E=s[v];if(E.id===null)break;E.id=null,E.object=null,E.geometry=null,E.material=null,E.group=null}}return{opaque:t,transmissive:n,transparent:r,init:a,push:u,unshift:d,finish:g,sort:p}}function fR(){let s=new WeakMap;function e(n,r){const a=s.get(n);let c;return a===void 0?(c=new Fm,s.set(n,[c])):r>=a.length?(c=new Fm,a.push(c)):c=a[r],c}function t(){s=new WeakMap}return{get:e,dispose:t}}function hR(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new re,color:new Rt};break;case"SpotLight":t={position:new re,direction:new re,color:new Rt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new re,color:new Rt,distance:0,decay:0};break;case"HemisphereLight":t={direction:new re,skyColor:new Rt,groundColor:new Rt};break;case"RectAreaLight":t={color:new Rt,position:new re,halfWidth:new re,halfHeight:new re};break}return s[e.id]=t,t}}}function dR(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Qt};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Qt};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Qt,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[e.id]=t,t}}}let pR=0;function mR(s,e){return(e.castShadow?2:0)-(s.castShadow?2:0)+(e.map?1:0)-(s.map?1:0)}function gR(s,e){const t=new hR,n=dR(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let g=0;g<9;g++)r.probe.push(new re);const a=new re,c=new qt,u=new qt;function d(g,v){let x=0,E=0,w=0;for(let Re=0;Re<9;Re++)r.probe[Re].set(0,0,0);let C=0,T=0,M=0,k=0,O=0,B=0,W=0,J=0,m=0,me=0,N=0;g.sort(mR);const X=v===!0?Math.PI:1;for(let Re=0,ye=g.length;Re<ye;Re++){const te=g[Re],xe=te.color,we=te.intensity,ge=te.distance,Oe=te.shadow&&te.shadow.map?te.shadow.map.texture:null;if(te.isAmbientLight)x+=xe.r*we*X,E+=xe.g*we*X,w+=xe.b*we*X;else if(te.isLightProbe){for(let Ce=0;Ce<9;Ce++)r.probe[Ce].addScaledVector(te.sh.coefficients[Ce],we);N++}else if(te.isDirectionalLight){const Ce=t.get(te);if(Ce.color.copy(te.color).multiplyScalar(te.intensity*X),te.castShadow){const be=te.shadow,ne=n.get(te);ne.shadowBias=be.bias,ne.shadowNormalBias=be.normalBias,ne.shadowRadius=be.radius,ne.shadowMapSize=be.mapSize,r.directionalShadow[C]=ne,r.directionalShadowMap[C]=Oe,r.directionalShadowMatrix[C]=te.shadow.matrix,B++}r.directional[C]=Ce,C++}else if(te.isSpotLight){const Ce=t.get(te);Ce.position.setFromMatrixPosition(te.matrixWorld),Ce.color.copy(xe).multiplyScalar(we*X),Ce.distance=ge,Ce.coneCos=Math.cos(te.angle),Ce.penumbraCos=Math.cos(te.angle*(1-te.penumbra)),Ce.decay=te.decay,r.spot[M]=Ce;const be=te.shadow;if(te.map&&(r.spotLightMap[m]=te.map,m++,be.updateMatrices(te),te.castShadow&&me++),r.spotLightMatrix[M]=be.matrix,te.castShadow){const ne=n.get(te);ne.shadowBias=be.bias,ne.shadowNormalBias=be.normalBias,ne.shadowRadius=be.radius,ne.shadowMapSize=be.mapSize,r.spotShadow[M]=ne,r.spotShadowMap[M]=Oe,J++}M++}else if(te.isRectAreaLight){const Ce=t.get(te);Ce.color.copy(xe).multiplyScalar(we),Ce.halfWidth.set(te.width*.5,0,0),Ce.halfHeight.set(0,te.height*.5,0),r.rectArea[k]=Ce,k++}else if(te.isPointLight){const Ce=t.get(te);if(Ce.color.copy(te.color).multiplyScalar(te.intensity*X),Ce.distance=te.distance,Ce.decay=te.decay,te.castShadow){const be=te.shadow,ne=n.get(te);ne.shadowBias=be.bias,ne.shadowNormalBias=be.normalBias,ne.shadowRadius=be.radius,ne.shadowMapSize=be.mapSize,ne.shadowCameraNear=be.camera.near,ne.shadowCameraFar=be.camera.far,r.pointShadow[T]=ne,r.pointShadowMap[T]=Oe,r.pointShadowMatrix[T]=te.shadow.matrix,W++}r.point[T]=Ce,T++}else if(te.isHemisphereLight){const Ce=t.get(te);Ce.skyColor.copy(te.color).multiplyScalar(we*X),Ce.groundColor.copy(te.groundColor).multiplyScalar(we*X),r.hemi[O]=Ce,O++}}k>0&&(e.isWebGL2||s.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=We.LTC_FLOAT_1,r.rectAreaLTC2=We.LTC_FLOAT_2):s.has("OES_texture_half_float_linear")===!0?(r.rectAreaLTC1=We.LTC_HALF_1,r.rectAreaLTC2=We.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),r.ambient[0]=x,r.ambient[1]=E,r.ambient[2]=w;const Ee=r.hash;(Ee.directionalLength!==C||Ee.pointLength!==T||Ee.spotLength!==M||Ee.rectAreaLength!==k||Ee.hemiLength!==O||Ee.numDirectionalShadows!==B||Ee.numPointShadows!==W||Ee.numSpotShadows!==J||Ee.numSpotMaps!==m||Ee.numLightProbes!==N)&&(r.directional.length=C,r.spot.length=M,r.rectArea.length=k,r.point.length=T,r.hemi.length=O,r.directionalShadow.length=B,r.directionalShadowMap.length=B,r.pointShadow.length=W,r.pointShadowMap.length=W,r.spotShadow.length=J,r.spotShadowMap.length=J,r.directionalShadowMatrix.length=B,r.pointShadowMatrix.length=W,r.spotLightMatrix.length=J+m-me,r.spotLightMap.length=m,r.numSpotLightShadowsWithMaps=me,r.numLightProbes=N,Ee.directionalLength=C,Ee.pointLength=T,Ee.spotLength=M,Ee.rectAreaLength=k,Ee.hemiLength=O,Ee.numDirectionalShadows=B,Ee.numPointShadows=W,Ee.numSpotShadows=J,Ee.numSpotMaps=m,Ee.numLightProbes=N,r.version=pR++)}function p(g,v){let x=0,E=0,w=0,C=0,T=0;const M=v.matrixWorldInverse;for(let k=0,O=g.length;k<O;k++){const B=g[k];if(B.isDirectionalLight){const W=r.directional[x];W.direction.setFromMatrixPosition(B.matrixWorld),a.setFromMatrixPosition(B.target.matrixWorld),W.direction.sub(a),W.direction.transformDirection(M),x++}else if(B.isSpotLight){const W=r.spot[w];W.position.setFromMatrixPosition(B.matrixWorld),W.position.applyMatrix4(M),W.direction.setFromMatrixPosition(B.matrixWorld),a.setFromMatrixPosition(B.target.matrixWorld),W.direction.sub(a),W.direction.transformDirection(M),w++}else if(B.isRectAreaLight){const W=r.rectArea[C];W.position.setFromMatrixPosition(B.matrixWorld),W.position.applyMatrix4(M),u.identity(),c.copy(B.matrixWorld),c.premultiply(M),u.extractRotation(c),W.halfWidth.set(B.width*.5,0,0),W.halfHeight.set(0,B.height*.5,0),W.halfWidth.applyMatrix4(u),W.halfHeight.applyMatrix4(u),C++}else if(B.isPointLight){const W=r.point[E];W.position.setFromMatrixPosition(B.matrixWorld),W.position.applyMatrix4(M),E++}else if(B.isHemisphereLight){const W=r.hemi[T];W.direction.setFromMatrixPosition(B.matrixWorld),W.direction.transformDirection(M),T++}}}return{setup:d,setupView:p,state:r}}function Bm(s,e){const t=new gR(s,e),n=[],r=[];function a(){n.length=0,r.length=0}function c(v){n.push(v)}function u(v){r.push(v)}function d(v){t.setup(n,v)}function p(v){t.setupView(n,v)}return{init:a,state:{lightsArray:n,shadowsArray:r,lights:t},setupLights:d,setupLightsView:p,pushLight:c,pushShadow:u}}function _R(s,e){let t=new WeakMap;function n(a,c=0){const u=t.get(a);let d;return u===void 0?(d=new Bm(s,e),t.set(a,[d])):c>=u.length?(d=new Bm(s,e),u.push(d)):d=u[c],d}function r(){t=new WeakMap}return{get:n,dispose:r}}class vR extends Mr{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=rT,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class xR extends Mr{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const yR=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,SR=`uniform sampler2D shadow_pass;
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
}`;function MR(s,e,t){let n=new mh;const r=new Qt,a=new Qt,c=new dn,u=new vR({depthPacking:sT}),d=new xR,p={},g=t.maxTextureSize,v={[Zr]:Ei,[Ei]:Zr,[yr]:yr},x=new ro({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Qt},radius:{value:4}},vertexShader:yR,fragmentShader:SR}),E=x.clone();E.defines.HORIZONTAL_PASS=1;const w=new Er;w.setAttribute("position",new di(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const C=new $i(w,x),T=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=ug;let M=this.type;this.render=function(W,J,m){if(T.enabled===!1||T.autoUpdate===!1&&T.needsUpdate===!1||W.length===0)return;const me=s.getRenderTarget(),N=s.getActiveCubeFace(),X=s.getActiveMipmapLevel(),Ee=s.state;Ee.setBlending(Ms),Ee.buffers.color.setClear(1,1,1,1),Ee.buffers.depth.setTest(!0),Ee.setScissorTest(!1);const Re=M!==Yr&&this.type===Yr,ye=M===Yr&&this.type!==Yr;for(let te=0,xe=W.length;te<xe;te++){const we=W[te],ge=we.shadow;if(ge===void 0){console.warn("THREE.WebGLShadowMap:",we,"has no shadow.");continue}if(ge.autoUpdate===!1&&ge.needsUpdate===!1)continue;r.copy(ge.mapSize);const Oe=ge.getFrameExtents();if(r.multiply(Oe),a.copy(ge.mapSize),(r.x>g||r.y>g)&&(r.x>g&&(a.x=Math.floor(g/Oe.x),r.x=a.x*Oe.x,ge.mapSize.x=a.x),r.y>g&&(a.y=Math.floor(g/Oe.y),r.y=a.y*Oe.y,ge.mapSize.y=a.y)),ge.map===null||Re===!0||ye===!0){const be=this.type!==Yr?{minFilter:Xn,magFilter:Xn}:{};ge.map!==null&&ge.map.dispose(),ge.map=new io(r.x,r.y,be),ge.map.texture.name=we.name+".shadowMap",ge.camera.updateProjectionMatrix()}s.setRenderTarget(ge.map),s.clear();const Ce=ge.getViewportCount();for(let be=0;be<Ce;be++){const ne=ge.getViewport(be);c.set(a.x*ne.x,a.y*ne.y,a.x*ne.z,a.y*ne.w),Ee.viewport(c),ge.updateMatrices(we,be),n=ge.getFrustum(),B(J,m,ge.camera,we,this.type)}ge.isPointLightShadow!==!0&&this.type===Yr&&k(ge,m),ge.needsUpdate=!1}M=this.type,T.needsUpdate=!1,s.setRenderTarget(me,N,X)};function k(W,J){const m=e.update(C);x.defines.VSM_SAMPLES!==W.blurSamples&&(x.defines.VSM_SAMPLES=W.blurSamples,E.defines.VSM_SAMPLES=W.blurSamples,x.needsUpdate=!0,E.needsUpdate=!0),W.mapPass===null&&(W.mapPass=new io(r.x,r.y)),x.uniforms.shadow_pass.value=W.map.texture,x.uniforms.resolution.value=W.mapSize,x.uniforms.radius.value=W.radius,s.setRenderTarget(W.mapPass),s.clear(),s.renderBufferDirect(J,null,m,x,C,null),E.uniforms.shadow_pass.value=W.mapPass.texture,E.uniforms.resolution.value=W.mapSize,E.uniforms.radius.value=W.radius,s.setRenderTarget(W.map),s.clear(),s.renderBufferDirect(J,null,m,E,C,null)}function O(W,J,m,me){let N=null;const X=m.isPointLight===!0?W.customDistanceMaterial:W.customDepthMaterial;if(X!==void 0)N=X;else if(N=m.isPointLight===!0?d:u,s.localClippingEnabled&&J.clipShadows===!0&&Array.isArray(J.clippingPlanes)&&J.clippingPlanes.length!==0||J.displacementMap&&J.displacementScale!==0||J.alphaMap&&J.alphaTest>0||J.map&&J.alphaTest>0){const Ee=N.uuid,Re=J.uuid;let ye=p[Ee];ye===void 0&&(ye={},p[Ee]=ye);let te=ye[Re];te===void 0&&(te=N.clone(),ye[Re]=te),N=te}if(N.visible=J.visible,N.wireframe=J.wireframe,me===Yr?N.side=J.shadowSide!==null?J.shadowSide:J.side:N.side=J.shadowSide!==null?J.shadowSide:v[J.side],N.alphaMap=J.alphaMap,N.alphaTest=J.alphaTest,N.map=J.map,N.clipShadows=J.clipShadows,N.clippingPlanes=J.clippingPlanes,N.clipIntersection=J.clipIntersection,N.displacementMap=J.displacementMap,N.displacementScale=J.displacementScale,N.displacementBias=J.displacementBias,N.wireframeLinewidth=J.wireframeLinewidth,N.linewidth=J.linewidth,m.isPointLight===!0&&N.isMeshDistanceMaterial===!0){const Ee=s.properties.get(N);Ee.light=m}return N}function B(W,J,m,me,N){if(W.visible===!1)return;if(W.layers.test(J.layers)&&(W.isMesh||W.isLine||W.isPoints)&&(W.castShadow||W.receiveShadow&&N===Yr)&&(!W.frustumCulled||n.intersectsObject(W))){W.modelViewMatrix.multiplyMatrices(m.matrixWorldInverse,W.matrixWorld);const Re=e.update(W),ye=W.material;if(Array.isArray(ye)){const te=Re.groups;for(let xe=0,we=te.length;xe<we;xe++){const ge=te[xe],Oe=ye[ge.materialIndex];if(Oe&&Oe.visible){const Ce=O(W,Oe,me,N);s.renderBufferDirect(m,null,Re,Ce,W,ge)}}}else if(ye.visible){const te=O(W,ye,me,N);s.renderBufferDirect(m,null,Re,te,W,null)}}const Ee=W.children;for(let Re=0,ye=Ee.length;Re<ye;Re++)B(Ee[Re],J,m,me,N)}}function TR(s,e,t){const n=t.isWebGL2;function r(){let Q=!1;const ke=new dn;let He=null;const Se=new dn(0,0,0,0);return{setMask:function(Fe){He!==Fe&&!Q&&(s.colorMask(Fe,Fe,Fe,Fe),He=Fe)},setLocked:function(Fe){Q=Fe},setClear:function(Fe,nt,kt,xn,qn){qn===!0&&(Fe*=xn,nt*=xn,kt*=xn),ke.set(Fe,nt,kt,xn),Se.equals(ke)===!1&&(s.clearColor(Fe,nt,kt,xn),Se.copy(ke))},reset:function(){Q=!1,He=null,Se.set(-1,0,0,0)}}}function a(){let Q=!1,ke=null,He=null,Se=null;return{setTest:function(Fe){Fe?De(s.DEPTH_TEST):Ge(s.DEPTH_TEST)},setMask:function(Fe){ke!==Fe&&!Q&&(s.depthMask(Fe),ke=Fe)},setFunc:function(Fe){if(He!==Fe){switch(Fe){case DM:s.depthFunc(s.NEVER);break;case IM:s.depthFunc(s.ALWAYS);break;case NM:s.depthFunc(s.LESS);break;case Ec:s.depthFunc(s.LEQUAL);break;case UM:s.depthFunc(s.EQUAL);break;case OM:s.depthFunc(s.GEQUAL);break;case FM:s.depthFunc(s.GREATER);break;case BM:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}He=Fe}},setLocked:function(Fe){Q=Fe},setClear:function(Fe){Se!==Fe&&(s.clearDepth(Fe),Se=Fe)},reset:function(){Q=!1,ke=null,He=null,Se=null}}}function c(){let Q=!1,ke=null,He=null,Se=null,Fe=null,nt=null,kt=null,xn=null,qn=null;return{setTest:function(rn){Q||(rn?De(s.STENCIL_TEST):Ge(s.STENCIL_TEST))},setMask:function(rn){ke!==rn&&!Q&&(s.stencilMask(rn),ke=rn)},setFunc:function(rn,pn,Nn){(He!==rn||Se!==pn||Fe!==Nn)&&(s.stencilFunc(rn,pn,Nn),He=rn,Se=pn,Fe=Nn)},setOp:function(rn,pn,Nn){(nt!==rn||kt!==pn||xn!==Nn)&&(s.stencilOp(rn,pn,Nn),nt=rn,kt=pn,xn=Nn)},setLocked:function(rn){Q=rn},setClear:function(rn){qn!==rn&&(s.clearStencil(rn),qn=rn)},reset:function(){Q=!1,ke=null,He=null,Se=null,Fe=null,nt=null,kt=null,xn=null,qn=null}}}const u=new r,d=new a,p=new c,g=new WeakMap,v=new WeakMap;let x={},E={},w=new WeakMap,C=[],T=null,M=!1,k=null,O=null,B=null,W=null,J=null,m=null,me=null,N=new Rt(0,0,0),X=0,Ee=!1,Re=null,ye=null,te=null,xe=null,we=null;const ge=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let Oe=!1,Ce=0;const be=s.getParameter(s.VERSION);be.indexOf("WebGL")!==-1?(Ce=parseFloat(/^WebGL (\d)/.exec(be)[1]),Oe=Ce>=1):be.indexOf("OpenGL ES")!==-1&&(Ce=parseFloat(/^OpenGL ES (\d)/.exec(be)[1]),Oe=Ce>=2);let ne=null,pe={};const Ve=s.getParameter(s.SCISSOR_BOX),Ke=s.getParameter(s.VIEWPORT),Ye=new dn().fromArray(Ve),lt=new dn().fromArray(Ke);function Ct(Q,ke,He,Se){const Fe=new Uint8Array(4),nt=s.createTexture();s.bindTexture(Q,nt),s.texParameteri(Q,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(Q,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let kt=0;kt<He;kt++)n&&(Q===s.TEXTURE_3D||Q===s.TEXTURE_2D_ARRAY)?s.texImage3D(ke,0,s.RGBA,1,1,Se,0,s.RGBA,s.UNSIGNED_BYTE,Fe):s.texImage2D(ke+kt,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,Fe);return nt}const dt={};dt[s.TEXTURE_2D]=Ct(s.TEXTURE_2D,s.TEXTURE_2D,1),dt[s.TEXTURE_CUBE_MAP]=Ct(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),n&&(dt[s.TEXTURE_2D_ARRAY]=Ct(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),dt[s.TEXTURE_3D]=Ct(s.TEXTURE_3D,s.TEXTURE_3D,1,1)),u.setClear(0,0,0,1),d.setClear(1),p.setClear(0),De(s.DEPTH_TEST),d.setFunc(Ec),gt(!1),Dt(_p),De(s.CULL_FACE),vt(Ms);function De(Q){x[Q]!==!0&&(s.enable(Q),x[Q]=!0)}function Ge(Q){x[Q]!==!1&&(s.disable(Q),x[Q]=!1)}function ot(Q,ke){return E[Q]!==ke?(s.bindFramebuffer(Q,ke),E[Q]=ke,n&&(Q===s.DRAW_FRAMEBUFFER&&(E[s.FRAMEBUFFER]=ke),Q===s.FRAMEBUFFER&&(E[s.DRAW_FRAMEBUFFER]=ke)),!0):!1}function oe(Q,ke){let He=C,Se=!1;if(Q)if(He=w.get(ke),He===void 0&&(He=[],w.set(ke,He)),Q.isWebGLMultipleRenderTargets){const Fe=Q.texture;if(He.length!==Fe.length||He[0]!==s.COLOR_ATTACHMENT0){for(let nt=0,kt=Fe.length;nt<kt;nt++)He[nt]=s.COLOR_ATTACHMENT0+nt;He.length=Fe.length,Se=!0}}else He[0]!==s.COLOR_ATTACHMENT0&&(He[0]=s.COLOR_ATTACHMENT0,Se=!0);else He[0]!==s.BACK&&(He[0]=s.BACK,Se=!0);Se&&(t.isWebGL2?s.drawBuffers(He):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(He))}function wn(Q){return T!==Q?(s.useProgram(Q),T=Q,!0):!1}const tt={[Ks]:s.FUNC_ADD,[_M]:s.FUNC_SUBTRACT,[vM]:s.FUNC_REVERSE_SUBTRACT};if(n)tt[Sp]=s.MIN,tt[Mp]=s.MAX;else{const Q=e.get("EXT_blend_minmax");Q!==null&&(tt[Sp]=Q.MIN_EXT,tt[Mp]=Q.MAX_EXT)}const mt={[xM]:s.ZERO,[yM]:s.ONE,[SM]:s.SRC_COLOR,[Kf]:s.SRC_ALPHA,[wM]:s.SRC_ALPHA_SATURATE,[AM]:s.DST_COLOR,[TM]:s.DST_ALPHA,[MM]:s.ONE_MINUS_SRC_COLOR,[$f]:s.ONE_MINUS_SRC_ALPHA,[bM]:s.ONE_MINUS_DST_COLOR,[EM]:s.ONE_MINUS_DST_ALPHA,[RM]:s.CONSTANT_COLOR,[CM]:s.ONE_MINUS_CONSTANT_COLOR,[LM]:s.CONSTANT_ALPHA,[PM]:s.ONE_MINUS_CONSTANT_ALPHA};function vt(Q,ke,He,Se,Fe,nt,kt,xn,qn,rn){if(Q===Ms){M===!0&&(Ge(s.BLEND),M=!1);return}if(M===!1&&(De(s.BLEND),M=!0),Q!==gM){if(Q!==k||rn!==Ee){if((O!==Ks||J!==Ks)&&(s.blendEquation(s.FUNC_ADD),O=Ks,J=Ks),rn)switch(Q){case Xo:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case vp:s.blendFunc(s.ONE,s.ONE);break;case xp:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case yp:s.blendFuncSeparate(s.ZERO,s.SRC_COLOR,s.ZERO,s.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",Q);break}else switch(Q){case Xo:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case vp:s.blendFunc(s.SRC_ALPHA,s.ONE);break;case xp:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case yp:s.blendFunc(s.ZERO,s.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",Q);break}B=null,W=null,m=null,me=null,N.set(0,0,0),X=0,k=Q,Ee=rn}return}Fe=Fe||ke,nt=nt||He,kt=kt||Se,(ke!==O||Fe!==J)&&(s.blendEquationSeparate(tt[ke],tt[Fe]),O=ke,J=Fe),(He!==B||Se!==W||nt!==m||kt!==me)&&(s.blendFuncSeparate(mt[He],mt[Se],mt[nt],mt[kt]),B=He,W=Se,m=nt,me=kt),(xn.equals(N)===!1||qn!==X)&&(s.blendColor(xn.r,xn.g,xn.b,qn),N.copy(xn),X=qn),k=Q,Ee=!1}function Yt(Q,ke){Q.side===yr?Ge(s.CULL_FACE):De(s.CULL_FACE);let He=Q.side===Ei;ke&&(He=!He),gt(He),Q.blending===Xo&&Q.transparent===!1?vt(Ms):vt(Q.blending,Q.blendEquation,Q.blendSrc,Q.blendDst,Q.blendEquationAlpha,Q.blendSrcAlpha,Q.blendDstAlpha,Q.blendColor,Q.blendAlpha,Q.premultipliedAlpha),d.setFunc(Q.depthFunc),d.setTest(Q.depthTest),d.setMask(Q.depthWrite),u.setMask(Q.colorWrite);const Se=Q.stencilWrite;p.setTest(Se),Se&&(p.setMask(Q.stencilWriteMask),p.setFunc(Q.stencilFunc,Q.stencilRef,Q.stencilFuncMask),p.setOp(Q.stencilFail,Q.stencilZFail,Q.stencilZPass)),tn(Q.polygonOffset,Q.polygonOffsetFactor,Q.polygonOffsetUnits),Q.alphaToCoverage===!0?De(s.SAMPLE_ALPHA_TO_COVERAGE):Ge(s.SAMPLE_ALPHA_TO_COVERAGE)}function gt(Q){Re!==Q&&(Q?s.frontFace(s.CW):s.frontFace(s.CCW),Re=Q)}function Dt(Q){Q!==dM?(De(s.CULL_FACE),Q!==ye&&(Q===_p?s.cullFace(s.BACK):Q===pM?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):Ge(s.CULL_FACE),ye=Q}function $t(Q){Q!==te&&(Oe&&s.lineWidth(Q),te=Q)}function tn(Q,ke,He){Q?(De(s.POLYGON_OFFSET_FILL),(xe!==ke||we!==He)&&(s.polygonOffset(ke,He),xe=ke,we=He)):Ge(s.POLYGON_OFFSET_FILL)}function en(Q){Q?De(s.SCISSOR_TEST):Ge(s.SCISSOR_TEST)}function G(Q){Q===void 0&&(Q=s.TEXTURE0+ge-1),ne!==Q&&(s.activeTexture(Q),ne=Q)}function D(Q,ke,He){He===void 0&&(ne===null?He=s.TEXTURE0+ge-1:He=ne);let Se=pe[He];Se===void 0&&(Se={type:void 0,texture:void 0},pe[He]=Se),(Se.type!==Q||Se.texture!==ke)&&(ne!==He&&(s.activeTexture(He),ne=He),s.bindTexture(Q,ke||dt[Q]),Se.type=Q,Se.texture=ke)}function $(){const Q=pe[ne];Q!==void 0&&Q.type!==void 0&&(s.bindTexture(Q.type,null),Q.type=void 0,Q.texture=void 0)}function Pe(){try{s.compressedTexImage2D.apply(s,arguments)}catch(Q){console.error("THREE.WebGLState:",Q)}}function Ie(){try{s.compressedTexImage3D.apply(s,arguments)}catch(Q){console.error("THREE.WebGLState:",Q)}}function Be(){try{s.texSubImage2D.apply(s,arguments)}catch(Q){console.error("THREE.WebGLState:",Q)}}function rt(){try{s.texSubImage3D.apply(s,arguments)}catch(Q){console.error("THREE.WebGLState:",Q)}}function ze(){try{s.compressedTexSubImage2D.apply(s,arguments)}catch(Q){console.error("THREE.WebGLState:",Q)}}function qe(){try{s.compressedTexSubImage3D.apply(s,arguments)}catch(Q){console.error("THREE.WebGLState:",Q)}}function ct(){try{s.texStorage2D.apply(s,arguments)}catch(Q){console.error("THREE.WebGLState:",Q)}}function Et(){try{s.texStorage3D.apply(s,arguments)}catch(Q){console.error("THREE.WebGLState:",Q)}}function Ue(){try{s.texImage2D.apply(s,arguments)}catch(Q){console.error("THREE.WebGLState:",Q)}}function Bt(){try{s.texImage3D.apply(s,arguments)}catch(Q){console.error("THREE.WebGLState:",Q)}}function St(Q){Ye.equals(Q)===!1&&(s.scissor(Q.x,Q.y,Q.z,Q.w),Ye.copy(Q))}function ut(Q){lt.equals(Q)===!1&&(s.viewport(Q.x,Q.y,Q.z,Q.w),lt.copy(Q))}function ft(Q,ke){let He=v.get(ke);He===void 0&&(He=new WeakMap,v.set(ke,He));let Se=He.get(Q);Se===void 0&&(Se=s.getUniformBlockIndex(ke,Q.name),He.set(Q,Se))}function Je(Q,ke){const Se=v.get(ke).get(Q);g.get(ke)!==Se&&(s.uniformBlockBinding(ke,Se,Q.__bindingPointIndex),g.set(ke,Se))}function Gt(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),n===!0&&(s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null)),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),x={},ne=null,pe={},E={},w=new WeakMap,C=[],T=null,M=!1,k=null,O=null,B=null,W=null,J=null,m=null,me=null,N=new Rt(0,0,0),X=0,Ee=!1,Re=null,ye=null,te=null,xe=null,we=null,Ye.set(0,0,s.canvas.width,s.canvas.height),lt.set(0,0,s.canvas.width,s.canvas.height),u.reset(),d.reset(),p.reset()}return{buffers:{color:u,depth:d,stencil:p},enable:De,disable:Ge,bindFramebuffer:ot,drawBuffers:oe,useProgram:wn,setBlending:vt,setMaterial:Yt,setFlipSided:gt,setCullFace:Dt,setLineWidth:$t,setPolygonOffset:tn,setScissorTest:en,activeTexture:G,bindTexture:D,unbindTexture:$,compressedTexImage2D:Pe,compressedTexImage3D:Ie,texImage2D:Ue,texImage3D:Bt,updateUBOMapping:ft,uniformBlockBinding:Je,texStorage2D:ct,texStorage3D:Et,texSubImage2D:Be,texSubImage3D:rt,compressedTexSubImage2D:ze,compressedTexSubImage3D:qe,scissor:St,viewport:ut,reset:Gt}}function ER(s,e,t,n,r,a,c){const u=r.isWebGL2,d=r.maxTextures,p=r.maxCubemapSize,g=r.maxTextureSize,v=r.maxSamples,x=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,E=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),w=new WeakMap;let C;const T=new WeakMap;let M=!1;try{M=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function k(G,D){return M?new OffscreenCanvas(G,D):el("canvas")}function O(G,D,$,Pe){let Ie=1;if((G.width>Pe||G.height>Pe)&&(Ie=Pe/Math.max(G.width,G.height)),Ie<1||D===!0)if(typeof HTMLImageElement<"u"&&G instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&G instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&G instanceof ImageBitmap){const Be=D?Lc:Math.floor,rt=Be(Ie*G.width),ze=Be(Ie*G.height);C===void 0&&(C=k(rt,ze));const qe=$?k(rt,ze):C;return qe.width=rt,qe.height=ze,qe.getContext("2d").drawImage(G,0,0,rt,ze),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+G.width+"x"+G.height+") to ("+rt+"x"+ze+")."),qe}else return"data"in G&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+G.width+"x"+G.height+")."),G;return G}function B(G){return ih(G.width)&&ih(G.height)}function W(G){return u?!1:G.wrapS!==Yi||G.wrapT!==Yi||G.minFilter!==Xn&&G.minFilter!==Ti}function J(G,D){return G.generateMipmaps&&D&&G.minFilter!==Xn&&G.minFilter!==Ti}function m(G){s.generateMipmap(G)}function me(G,D,$,Pe,Ie=!1){if(u===!1)return D;if(G!==null){if(s[G]!==void 0)return s[G];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+G+"'")}let Be=D;if(D===s.RED&&($===s.FLOAT&&(Be=s.R32F),$===s.HALF_FLOAT&&(Be=s.R16F),$===s.UNSIGNED_BYTE&&(Be=s.R8)),D===s.RED_INTEGER&&($===s.UNSIGNED_BYTE&&(Be=s.R8UI),$===s.UNSIGNED_SHORT&&(Be=s.R16UI),$===s.UNSIGNED_INT&&(Be=s.R32UI),$===s.BYTE&&(Be=s.R8I),$===s.SHORT&&(Be=s.R16I),$===s.INT&&(Be=s.R32I)),D===s.RG&&($===s.FLOAT&&(Be=s.RG32F),$===s.HALF_FLOAT&&(Be=s.RG16F),$===s.UNSIGNED_BYTE&&(Be=s.RG8)),D===s.RGBA){const rt=Ie?bc:an.getTransfer(Pe);$===s.FLOAT&&(Be=s.RGBA32F),$===s.HALF_FLOAT&&(Be=s.RGBA16F),$===s.UNSIGNED_BYTE&&(Be=rt===vn?s.SRGB8_ALPHA8:s.RGBA8),$===s.UNSIGNED_SHORT_4_4_4_4&&(Be=s.RGBA4),$===s.UNSIGNED_SHORT_5_5_5_1&&(Be=s.RGB5_A1)}return(Be===s.R16F||Be===s.R32F||Be===s.RG16F||Be===s.RG32F||Be===s.RGBA16F||Be===s.RGBA32F)&&e.get("EXT_color_buffer_float"),Be}function N(G,D,$){return J(G,$)===!0||G.isFramebufferTexture&&G.minFilter!==Xn&&G.minFilter!==Ti?Math.log2(Math.max(D.width,D.height))+1:G.mipmaps!==void 0&&G.mipmaps.length>0?G.mipmaps.length:G.isCompressedTexture&&Array.isArray(G.image)?D.mipmaps.length:1}function X(G){return G===Xn||G===Qf||G===Mc?s.NEAREST:s.LINEAR}function Ee(G){const D=G.target;D.removeEventListener("dispose",Ee),ye(D),D.isVideoTexture&&w.delete(D)}function Re(G){const D=G.target;D.removeEventListener("dispose",Re),xe(D)}function ye(G){const D=n.get(G);if(D.__webglInit===void 0)return;const $=G.source,Pe=T.get($);if(Pe){const Ie=Pe[D.__cacheKey];Ie.usedTimes--,Ie.usedTimes===0&&te(G),Object.keys(Pe).length===0&&T.delete($)}n.remove(G)}function te(G){const D=n.get(G);s.deleteTexture(D.__webglTexture);const $=G.source,Pe=T.get($);delete Pe[D.__cacheKey],c.memory.textures--}function xe(G){const D=G.texture,$=n.get(G),Pe=n.get(D);if(Pe.__webglTexture!==void 0&&(s.deleteTexture(Pe.__webglTexture),c.memory.textures--),G.depthTexture&&G.depthTexture.dispose(),G.isWebGLCubeRenderTarget)for(let Ie=0;Ie<6;Ie++){if(Array.isArray($.__webglFramebuffer[Ie]))for(let Be=0;Be<$.__webglFramebuffer[Ie].length;Be++)s.deleteFramebuffer($.__webglFramebuffer[Ie][Be]);else s.deleteFramebuffer($.__webglFramebuffer[Ie]);$.__webglDepthbuffer&&s.deleteRenderbuffer($.__webglDepthbuffer[Ie])}else{if(Array.isArray($.__webglFramebuffer))for(let Ie=0;Ie<$.__webglFramebuffer.length;Ie++)s.deleteFramebuffer($.__webglFramebuffer[Ie]);else s.deleteFramebuffer($.__webglFramebuffer);if($.__webglDepthbuffer&&s.deleteRenderbuffer($.__webglDepthbuffer),$.__webglMultisampledFramebuffer&&s.deleteFramebuffer($.__webglMultisampledFramebuffer),$.__webglColorRenderbuffer)for(let Ie=0;Ie<$.__webglColorRenderbuffer.length;Ie++)$.__webglColorRenderbuffer[Ie]&&s.deleteRenderbuffer($.__webglColorRenderbuffer[Ie]);$.__webglDepthRenderbuffer&&s.deleteRenderbuffer($.__webglDepthRenderbuffer)}if(G.isWebGLMultipleRenderTargets)for(let Ie=0,Be=D.length;Ie<Be;Ie++){const rt=n.get(D[Ie]);rt.__webglTexture&&(s.deleteTexture(rt.__webglTexture),c.memory.textures--),n.remove(D[Ie])}n.remove(D),n.remove(G)}let we=0;function ge(){we=0}function Oe(){const G=we;return G>=d&&console.warn("THREE.WebGLTextures: Trying to use "+G+" texture units while this GPU supports only "+d),we+=1,G}function Ce(G){const D=[];return D.push(G.wrapS),D.push(G.wrapT),D.push(G.wrapR||0),D.push(G.magFilter),D.push(G.minFilter),D.push(G.anisotropy),D.push(G.internalFormat),D.push(G.format),D.push(G.type),D.push(G.generateMipmaps),D.push(G.premultiplyAlpha),D.push(G.flipY),D.push(G.unpackAlignment),D.push(G.colorSpace),D.join()}function be(G,D){const $=n.get(G);if(G.isVideoTexture&&tn(G),G.isRenderTargetTexture===!1&&G.version>0&&$.__version!==G.version){const Pe=G.image;if(Pe===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(Pe.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{De($,G,D);return}}t.bindTexture(s.TEXTURE_2D,$.__webglTexture,s.TEXTURE0+D)}function ne(G,D){const $=n.get(G);if(G.version>0&&$.__version!==G.version){De($,G,D);return}t.bindTexture(s.TEXTURE_2D_ARRAY,$.__webglTexture,s.TEXTURE0+D)}function pe(G,D){const $=n.get(G);if(G.version>0&&$.__version!==G.version){De($,G,D);return}t.bindTexture(s.TEXTURE_3D,$.__webglTexture,s.TEXTURE0+D)}function Ve(G,D){const $=n.get(G);if(G.version>0&&$.__version!==G.version){Ge($,G,D);return}t.bindTexture(s.TEXTURE_CUBE_MAP,$.__webglTexture,s.TEXTURE0+D)}const Ke={[$o]:s.REPEAT,[Yi]:s.CLAMP_TO_EDGE,[Ac]:s.MIRRORED_REPEAT},Ye={[Xn]:s.NEAREST,[Qf]:s.NEAREST_MIPMAP_NEAREST,[Mc]:s.NEAREST_MIPMAP_LINEAR,[Ti]:s.LINEAR,[dg]:s.LINEAR_MIPMAP_NEAREST,[no]:s.LINEAR_MIPMAP_LINEAR},lt={[aT]:s.NEVER,[pT]:s.ALWAYS,[lT]:s.LESS,[uT]:s.LEQUAL,[cT]:s.EQUAL,[dT]:s.GEQUAL,[fT]:s.GREATER,[hT]:s.NOTEQUAL};function Ct(G,D,$){if($?(s.texParameteri(G,s.TEXTURE_WRAP_S,Ke[D.wrapS]),s.texParameteri(G,s.TEXTURE_WRAP_T,Ke[D.wrapT]),(G===s.TEXTURE_3D||G===s.TEXTURE_2D_ARRAY)&&s.texParameteri(G,s.TEXTURE_WRAP_R,Ke[D.wrapR]),s.texParameteri(G,s.TEXTURE_MAG_FILTER,Ye[D.magFilter]),s.texParameteri(G,s.TEXTURE_MIN_FILTER,Ye[D.minFilter])):(s.texParameteri(G,s.TEXTURE_WRAP_S,s.CLAMP_TO_EDGE),s.texParameteri(G,s.TEXTURE_WRAP_T,s.CLAMP_TO_EDGE),(G===s.TEXTURE_3D||G===s.TEXTURE_2D_ARRAY)&&s.texParameteri(G,s.TEXTURE_WRAP_R,s.CLAMP_TO_EDGE),(D.wrapS!==Yi||D.wrapT!==Yi)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),s.texParameteri(G,s.TEXTURE_MAG_FILTER,X(D.magFilter)),s.texParameteri(G,s.TEXTURE_MIN_FILTER,X(D.minFilter)),D.minFilter!==Xn&&D.minFilter!==Ti&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),D.compareFunction&&(s.texParameteri(G,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(G,s.TEXTURE_COMPARE_FUNC,lt[D.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){const Pe=e.get("EXT_texture_filter_anisotropic");if(D.magFilter===Xn||D.minFilter!==Mc&&D.minFilter!==no||D.type===jr&&e.has("OES_texture_float_linear")===!1||u===!1&&D.type===Ja&&e.has("OES_texture_half_float_linear")===!1)return;(D.anisotropy>1||n.get(D).__currentAnisotropy)&&(s.texParameterf(G,Pe.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(D.anisotropy,r.getMaxAnisotropy())),n.get(D).__currentAnisotropy=D.anisotropy)}}function dt(G,D){let $=!1;G.__webglInit===void 0&&(G.__webglInit=!0,D.addEventListener("dispose",Ee));const Pe=D.source;let Ie=T.get(Pe);Ie===void 0&&(Ie={},T.set(Pe,Ie));const Be=Ce(D);if(Be!==G.__cacheKey){Ie[Be]===void 0&&(Ie[Be]={texture:s.createTexture(),usedTimes:0},c.memory.textures++,$=!0),Ie[Be].usedTimes++;const rt=Ie[G.__cacheKey];rt!==void 0&&(Ie[G.__cacheKey].usedTimes--,rt.usedTimes===0&&te(D)),G.__cacheKey=Be,G.__webglTexture=Ie[Be].texture}return $}function De(G,D,$){let Pe=s.TEXTURE_2D;(D.isDataArrayTexture||D.isCompressedArrayTexture)&&(Pe=s.TEXTURE_2D_ARRAY),D.isData3DTexture&&(Pe=s.TEXTURE_3D);const Ie=dt(G,D),Be=D.source;t.bindTexture(Pe,G.__webglTexture,s.TEXTURE0+$);const rt=n.get(Be);if(Be.version!==rt.__version||Ie===!0){t.activeTexture(s.TEXTURE0+$);const ze=an.getPrimaries(an.workingColorSpace),qe=D.colorSpace===Ki?null:an.getPrimaries(D.colorSpace),ct=D.colorSpace===Ki||ze===qe?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,D.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,D.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,D.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,ct);const Et=W(D)&&B(D.image)===!1;let Ue=O(D.image,Et,!1,g);Ue=en(D,Ue);const Bt=B(Ue)||u,St=a.convert(D.format,D.colorSpace);let ut=a.convert(D.type),ft=me(D.internalFormat,St,ut,D.colorSpace,D.isVideoTexture);Ct(Pe,D,Bt);let Je;const Gt=D.mipmaps,Q=u&&D.isVideoTexture!==!0,ke=rt.__version===void 0||Ie===!0,He=N(D,Ue,Bt);if(D.isDepthTexture)ft=s.DEPTH_COMPONENT,u?D.type===jr?ft=s.DEPTH_COMPONENT32F:D.type===Ss?ft=s.DEPTH_COMPONENT24:D.type===Qs?ft=s.DEPTH24_STENCIL8:ft=s.DEPTH_COMPONENT16:D.type===jr&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),D.format===eo&&ft===s.DEPTH_COMPONENT&&D.type!==hh&&D.type!==Ss&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),D.type=Ss,ut=a.convert(D.type)),D.format===Zo&&ft===s.DEPTH_COMPONENT&&(ft=s.DEPTH_STENCIL,D.type!==Qs&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),D.type=Qs,ut=a.convert(D.type))),ke&&(Q?t.texStorage2D(s.TEXTURE_2D,1,ft,Ue.width,Ue.height):t.texImage2D(s.TEXTURE_2D,0,ft,Ue.width,Ue.height,0,St,ut,null));else if(D.isDataTexture)if(Gt.length>0&&Bt){Q&&ke&&t.texStorage2D(s.TEXTURE_2D,He,ft,Gt[0].width,Gt[0].height);for(let Se=0,Fe=Gt.length;Se<Fe;Se++)Je=Gt[Se],Q?t.texSubImage2D(s.TEXTURE_2D,Se,0,0,Je.width,Je.height,St,ut,Je.data):t.texImage2D(s.TEXTURE_2D,Se,ft,Je.width,Je.height,0,St,ut,Je.data);D.generateMipmaps=!1}else Q?(ke&&t.texStorage2D(s.TEXTURE_2D,He,ft,Ue.width,Ue.height),t.texSubImage2D(s.TEXTURE_2D,0,0,0,Ue.width,Ue.height,St,ut,Ue.data)):t.texImage2D(s.TEXTURE_2D,0,ft,Ue.width,Ue.height,0,St,ut,Ue.data);else if(D.isCompressedTexture)if(D.isCompressedArrayTexture){Q&&ke&&t.texStorage3D(s.TEXTURE_2D_ARRAY,He,ft,Gt[0].width,Gt[0].height,Ue.depth);for(let Se=0,Fe=Gt.length;Se<Fe;Se++)Je=Gt[Se],D.format!==ji?St!==null?Q?t.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,Se,0,0,0,Je.width,Je.height,Ue.depth,St,Je.data,0,0):t.compressedTexImage3D(s.TEXTURE_2D_ARRAY,Se,ft,Je.width,Je.height,Ue.depth,0,Je.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Q?t.texSubImage3D(s.TEXTURE_2D_ARRAY,Se,0,0,0,Je.width,Je.height,Ue.depth,St,ut,Je.data):t.texImage3D(s.TEXTURE_2D_ARRAY,Se,ft,Je.width,Je.height,Ue.depth,0,St,ut,Je.data)}else{Q&&ke&&t.texStorage2D(s.TEXTURE_2D,He,ft,Gt[0].width,Gt[0].height);for(let Se=0,Fe=Gt.length;Se<Fe;Se++)Je=Gt[Se],D.format!==ji?St!==null?Q?t.compressedTexSubImage2D(s.TEXTURE_2D,Se,0,0,Je.width,Je.height,St,Je.data):t.compressedTexImage2D(s.TEXTURE_2D,Se,ft,Je.width,Je.height,0,Je.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Q?t.texSubImage2D(s.TEXTURE_2D,Se,0,0,Je.width,Je.height,St,ut,Je.data):t.texImage2D(s.TEXTURE_2D,Se,ft,Je.width,Je.height,0,St,ut,Je.data)}else if(D.isDataArrayTexture)Q?(ke&&t.texStorage3D(s.TEXTURE_2D_ARRAY,He,ft,Ue.width,Ue.height,Ue.depth),t.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,Ue.width,Ue.height,Ue.depth,St,ut,Ue.data)):t.texImage3D(s.TEXTURE_2D_ARRAY,0,ft,Ue.width,Ue.height,Ue.depth,0,St,ut,Ue.data);else if(D.isData3DTexture)Q?(ke&&t.texStorage3D(s.TEXTURE_3D,He,ft,Ue.width,Ue.height,Ue.depth),t.texSubImage3D(s.TEXTURE_3D,0,0,0,0,Ue.width,Ue.height,Ue.depth,St,ut,Ue.data)):t.texImage3D(s.TEXTURE_3D,0,ft,Ue.width,Ue.height,Ue.depth,0,St,ut,Ue.data);else if(D.isFramebufferTexture){if(ke)if(Q)t.texStorage2D(s.TEXTURE_2D,He,ft,Ue.width,Ue.height);else{let Se=Ue.width,Fe=Ue.height;for(let nt=0;nt<He;nt++)t.texImage2D(s.TEXTURE_2D,nt,ft,Se,Fe,0,St,ut,null),Se>>=1,Fe>>=1}}else if(Gt.length>0&&Bt){Q&&ke&&t.texStorage2D(s.TEXTURE_2D,He,ft,Gt[0].width,Gt[0].height);for(let Se=0,Fe=Gt.length;Se<Fe;Se++)Je=Gt[Se],Q?t.texSubImage2D(s.TEXTURE_2D,Se,0,0,St,ut,Je):t.texImage2D(s.TEXTURE_2D,Se,ft,St,ut,Je);D.generateMipmaps=!1}else Q?(ke&&t.texStorage2D(s.TEXTURE_2D,He,ft,Ue.width,Ue.height),t.texSubImage2D(s.TEXTURE_2D,0,0,0,St,ut,Ue)):t.texImage2D(s.TEXTURE_2D,0,ft,St,ut,Ue);J(D,Bt)&&m(Pe),rt.__version=Be.version,D.onUpdate&&D.onUpdate(D)}G.__version=D.version}function Ge(G,D,$){if(D.image.length!==6)return;const Pe=dt(G,D),Ie=D.source;t.bindTexture(s.TEXTURE_CUBE_MAP,G.__webglTexture,s.TEXTURE0+$);const Be=n.get(Ie);if(Ie.version!==Be.__version||Pe===!0){t.activeTexture(s.TEXTURE0+$);const rt=an.getPrimaries(an.workingColorSpace),ze=D.colorSpace===Ki?null:an.getPrimaries(D.colorSpace),qe=D.colorSpace===Ki||rt===ze?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,D.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,D.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,D.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,qe);const ct=D.isCompressedTexture||D.image[0].isCompressedTexture,Et=D.image[0]&&D.image[0].isDataTexture,Ue=[];for(let Se=0;Se<6;Se++)!ct&&!Et?Ue[Se]=O(D.image[Se],!1,!0,p):Ue[Se]=Et?D.image[Se].image:D.image[Se],Ue[Se]=en(D,Ue[Se]);const Bt=Ue[0],St=B(Bt)||u,ut=a.convert(D.format,D.colorSpace),ft=a.convert(D.type),Je=me(D.internalFormat,ut,ft,D.colorSpace),Gt=u&&D.isVideoTexture!==!0,Q=Be.__version===void 0||Pe===!0;let ke=N(D,Bt,St);Ct(s.TEXTURE_CUBE_MAP,D,St);let He;if(ct){Gt&&Q&&t.texStorage2D(s.TEXTURE_CUBE_MAP,ke,Je,Bt.width,Bt.height);for(let Se=0;Se<6;Se++){He=Ue[Se].mipmaps;for(let Fe=0;Fe<He.length;Fe++){const nt=He[Fe];D.format!==ji?ut!==null?Gt?t.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Se,Fe,0,0,nt.width,nt.height,ut,nt.data):t.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Se,Fe,Je,nt.width,nt.height,0,nt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Gt?t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Se,Fe,0,0,nt.width,nt.height,ut,ft,nt.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Se,Fe,Je,nt.width,nt.height,0,ut,ft,nt.data)}}}else{He=D.mipmaps,Gt&&Q&&(He.length>0&&ke++,t.texStorage2D(s.TEXTURE_CUBE_MAP,ke,Je,Ue[0].width,Ue[0].height));for(let Se=0;Se<6;Se++)if(Et){Gt?t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Se,0,0,0,Ue[Se].width,Ue[Se].height,ut,ft,Ue[Se].data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Se,0,Je,Ue[Se].width,Ue[Se].height,0,ut,ft,Ue[Se].data);for(let Fe=0;Fe<He.length;Fe++){const kt=He[Fe].image[Se].image;Gt?t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Se,Fe+1,0,0,kt.width,kt.height,ut,ft,kt.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Se,Fe+1,Je,kt.width,kt.height,0,ut,ft,kt.data)}}else{Gt?t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Se,0,0,0,ut,ft,Ue[Se]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Se,0,Je,ut,ft,Ue[Se]);for(let Fe=0;Fe<He.length;Fe++){const nt=He[Fe];Gt?t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Se,Fe+1,0,0,ut,ft,nt.image[Se]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Se,Fe+1,Je,ut,ft,nt.image[Se])}}}J(D,St)&&m(s.TEXTURE_CUBE_MAP),Be.__version=Ie.version,D.onUpdate&&D.onUpdate(D)}G.__version=D.version}function ot(G,D,$,Pe,Ie,Be){const rt=a.convert($.format,$.colorSpace),ze=a.convert($.type),qe=me($.internalFormat,rt,ze,$.colorSpace);if(!n.get(D).__hasExternalTextures){const Et=Math.max(1,D.width>>Be),Ue=Math.max(1,D.height>>Be);Ie===s.TEXTURE_3D||Ie===s.TEXTURE_2D_ARRAY?t.texImage3D(Ie,Be,qe,Et,Ue,D.depth,0,rt,ze,null):t.texImage2D(Ie,Be,qe,Et,Ue,0,rt,ze,null)}t.bindFramebuffer(s.FRAMEBUFFER,G),$t(D)?x.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,Pe,Ie,n.get($).__webglTexture,0,Dt(D)):(Ie===s.TEXTURE_2D||Ie>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&Ie<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,Pe,Ie,n.get($).__webglTexture,Be),t.bindFramebuffer(s.FRAMEBUFFER,null)}function oe(G,D,$){if(s.bindRenderbuffer(s.RENDERBUFFER,G),D.depthBuffer&&!D.stencilBuffer){let Pe=u===!0?s.DEPTH_COMPONENT24:s.DEPTH_COMPONENT16;if($||$t(D)){const Ie=D.depthTexture;Ie&&Ie.isDepthTexture&&(Ie.type===jr?Pe=s.DEPTH_COMPONENT32F:Ie.type===Ss&&(Pe=s.DEPTH_COMPONENT24));const Be=Dt(D);$t(D)?x.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,Be,Pe,D.width,D.height):s.renderbufferStorageMultisample(s.RENDERBUFFER,Be,Pe,D.width,D.height)}else s.renderbufferStorage(s.RENDERBUFFER,Pe,D.width,D.height);s.framebufferRenderbuffer(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.RENDERBUFFER,G)}else if(D.depthBuffer&&D.stencilBuffer){const Pe=Dt(D);$&&$t(D)===!1?s.renderbufferStorageMultisample(s.RENDERBUFFER,Pe,s.DEPTH24_STENCIL8,D.width,D.height):$t(D)?x.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,Pe,s.DEPTH24_STENCIL8,D.width,D.height):s.renderbufferStorage(s.RENDERBUFFER,s.DEPTH_STENCIL,D.width,D.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.RENDERBUFFER,G)}else{const Pe=D.isWebGLMultipleRenderTargets===!0?D.texture:[D.texture];for(let Ie=0;Ie<Pe.length;Ie++){const Be=Pe[Ie],rt=a.convert(Be.format,Be.colorSpace),ze=a.convert(Be.type),qe=me(Be.internalFormat,rt,ze,Be.colorSpace),ct=Dt(D);$&&$t(D)===!1?s.renderbufferStorageMultisample(s.RENDERBUFFER,ct,qe,D.width,D.height):$t(D)?x.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,ct,qe,D.width,D.height):s.renderbufferStorage(s.RENDERBUFFER,qe,D.width,D.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function wn(G,D){if(D&&D.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(s.FRAMEBUFFER,G),!(D.depthTexture&&D.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(D.depthTexture).__webglTexture||D.depthTexture.image.width!==D.width||D.depthTexture.image.height!==D.height)&&(D.depthTexture.image.width=D.width,D.depthTexture.image.height=D.height,D.depthTexture.needsUpdate=!0),be(D.depthTexture,0);const Pe=n.get(D.depthTexture).__webglTexture,Ie=Dt(D);if(D.depthTexture.format===eo)$t(D)?x.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,Pe,0,Ie):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,Pe,0);else if(D.depthTexture.format===Zo)$t(D)?x.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,Pe,0,Ie):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,Pe,0);else throw new Error("Unknown depthTexture format")}function tt(G){const D=n.get(G),$=G.isWebGLCubeRenderTarget===!0;if(G.depthTexture&&!D.__autoAllocateDepthBuffer){if($)throw new Error("target.depthTexture not supported in Cube render targets");wn(D.__webglFramebuffer,G)}else if($){D.__webglDepthbuffer=[];for(let Pe=0;Pe<6;Pe++)t.bindFramebuffer(s.FRAMEBUFFER,D.__webglFramebuffer[Pe]),D.__webglDepthbuffer[Pe]=s.createRenderbuffer(),oe(D.__webglDepthbuffer[Pe],G,!1)}else t.bindFramebuffer(s.FRAMEBUFFER,D.__webglFramebuffer),D.__webglDepthbuffer=s.createRenderbuffer(),oe(D.__webglDepthbuffer,G,!1);t.bindFramebuffer(s.FRAMEBUFFER,null)}function mt(G,D,$){const Pe=n.get(G);D!==void 0&&ot(Pe.__webglFramebuffer,G,G.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),$!==void 0&&tt(G)}function vt(G){const D=G.texture,$=n.get(G),Pe=n.get(D);G.addEventListener("dispose",Re),G.isWebGLMultipleRenderTargets!==!0&&(Pe.__webglTexture===void 0&&(Pe.__webglTexture=s.createTexture()),Pe.__version=D.version,c.memory.textures++);const Ie=G.isWebGLCubeRenderTarget===!0,Be=G.isWebGLMultipleRenderTargets===!0,rt=B(G)||u;if(Ie){$.__webglFramebuffer=[];for(let ze=0;ze<6;ze++)if(u&&D.mipmaps&&D.mipmaps.length>0){$.__webglFramebuffer[ze]=[];for(let qe=0;qe<D.mipmaps.length;qe++)$.__webglFramebuffer[ze][qe]=s.createFramebuffer()}else $.__webglFramebuffer[ze]=s.createFramebuffer()}else{if(u&&D.mipmaps&&D.mipmaps.length>0){$.__webglFramebuffer=[];for(let ze=0;ze<D.mipmaps.length;ze++)$.__webglFramebuffer[ze]=s.createFramebuffer()}else $.__webglFramebuffer=s.createFramebuffer();if(Be)if(r.drawBuffers){const ze=G.texture;for(let qe=0,ct=ze.length;qe<ct;qe++){const Et=n.get(ze[qe]);Et.__webglTexture===void 0&&(Et.__webglTexture=s.createTexture(),c.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(u&&G.samples>0&&$t(G)===!1){const ze=Be?D:[D];$.__webglMultisampledFramebuffer=s.createFramebuffer(),$.__webglColorRenderbuffer=[],t.bindFramebuffer(s.FRAMEBUFFER,$.__webglMultisampledFramebuffer);for(let qe=0;qe<ze.length;qe++){const ct=ze[qe];$.__webglColorRenderbuffer[qe]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,$.__webglColorRenderbuffer[qe]);const Et=a.convert(ct.format,ct.colorSpace),Ue=a.convert(ct.type),Bt=me(ct.internalFormat,Et,Ue,ct.colorSpace,G.isXRRenderTarget===!0),St=Dt(G);s.renderbufferStorageMultisample(s.RENDERBUFFER,St,Bt,G.width,G.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+qe,s.RENDERBUFFER,$.__webglColorRenderbuffer[qe])}s.bindRenderbuffer(s.RENDERBUFFER,null),G.depthBuffer&&($.__webglDepthRenderbuffer=s.createRenderbuffer(),oe($.__webglDepthRenderbuffer,G,!0)),t.bindFramebuffer(s.FRAMEBUFFER,null)}}if(Ie){t.bindTexture(s.TEXTURE_CUBE_MAP,Pe.__webglTexture),Ct(s.TEXTURE_CUBE_MAP,D,rt);for(let ze=0;ze<6;ze++)if(u&&D.mipmaps&&D.mipmaps.length>0)for(let qe=0;qe<D.mipmaps.length;qe++)ot($.__webglFramebuffer[ze][qe],G,D,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+ze,qe);else ot($.__webglFramebuffer[ze],G,D,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+ze,0);J(D,rt)&&m(s.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Be){const ze=G.texture;for(let qe=0,ct=ze.length;qe<ct;qe++){const Et=ze[qe],Ue=n.get(Et);t.bindTexture(s.TEXTURE_2D,Ue.__webglTexture),Ct(s.TEXTURE_2D,Et,rt),ot($.__webglFramebuffer,G,Et,s.COLOR_ATTACHMENT0+qe,s.TEXTURE_2D,0),J(Et,rt)&&m(s.TEXTURE_2D)}t.unbindTexture()}else{let ze=s.TEXTURE_2D;if((G.isWebGL3DRenderTarget||G.isWebGLArrayRenderTarget)&&(u?ze=G.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),t.bindTexture(ze,Pe.__webglTexture),Ct(ze,D,rt),u&&D.mipmaps&&D.mipmaps.length>0)for(let qe=0;qe<D.mipmaps.length;qe++)ot($.__webglFramebuffer[qe],G,D,s.COLOR_ATTACHMENT0,ze,qe);else ot($.__webglFramebuffer,G,D,s.COLOR_ATTACHMENT0,ze,0);J(D,rt)&&m(ze),t.unbindTexture()}G.depthBuffer&&tt(G)}function Yt(G){const D=B(G)||u,$=G.isWebGLMultipleRenderTargets===!0?G.texture:[G.texture];for(let Pe=0,Ie=$.length;Pe<Ie;Pe++){const Be=$[Pe];if(J(Be,D)){const rt=G.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:s.TEXTURE_2D,ze=n.get(Be).__webglTexture;t.bindTexture(rt,ze),m(rt),t.unbindTexture()}}}function gt(G){if(u&&G.samples>0&&$t(G)===!1){const D=G.isWebGLMultipleRenderTargets?G.texture:[G.texture],$=G.width,Pe=G.height;let Ie=s.COLOR_BUFFER_BIT;const Be=[],rt=G.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,ze=n.get(G),qe=G.isWebGLMultipleRenderTargets===!0;if(qe)for(let ct=0;ct<D.length;ct++)t.bindFramebuffer(s.FRAMEBUFFER,ze.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+ct,s.RENDERBUFFER,null),t.bindFramebuffer(s.FRAMEBUFFER,ze.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+ct,s.TEXTURE_2D,null,0);t.bindFramebuffer(s.READ_FRAMEBUFFER,ze.__webglMultisampledFramebuffer),t.bindFramebuffer(s.DRAW_FRAMEBUFFER,ze.__webglFramebuffer);for(let ct=0;ct<D.length;ct++){Be.push(s.COLOR_ATTACHMENT0+ct),G.depthBuffer&&Be.push(rt);const Et=ze.__ignoreDepthValues!==void 0?ze.__ignoreDepthValues:!1;if(Et===!1&&(G.depthBuffer&&(Ie|=s.DEPTH_BUFFER_BIT),G.stencilBuffer&&(Ie|=s.STENCIL_BUFFER_BIT)),qe&&s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,ze.__webglColorRenderbuffer[ct]),Et===!0&&(s.invalidateFramebuffer(s.READ_FRAMEBUFFER,[rt]),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[rt])),qe){const Ue=n.get(D[ct]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,Ue,0)}s.blitFramebuffer(0,0,$,Pe,0,0,$,Pe,Ie,s.NEAREST),E&&s.invalidateFramebuffer(s.READ_FRAMEBUFFER,Be)}if(t.bindFramebuffer(s.READ_FRAMEBUFFER,null),t.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),qe)for(let ct=0;ct<D.length;ct++){t.bindFramebuffer(s.FRAMEBUFFER,ze.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+ct,s.RENDERBUFFER,ze.__webglColorRenderbuffer[ct]);const Et=n.get(D[ct]).__webglTexture;t.bindFramebuffer(s.FRAMEBUFFER,ze.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+ct,s.TEXTURE_2D,Et,0)}t.bindFramebuffer(s.DRAW_FRAMEBUFFER,ze.__webglMultisampledFramebuffer)}}function Dt(G){return Math.min(v,G.samples)}function $t(G){const D=n.get(G);return u&&G.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&D.__useRenderToTexture!==!1}function tn(G){const D=c.render.frame;w.get(G)!==D&&(w.set(G,D),G.update())}function en(G,D){const $=G.colorSpace,Pe=G.format,Ie=G.type;return G.isCompressedTexture===!0||G.isVideoTexture===!0||G.format===nh||$!==$n&&$!==Ki&&(an.getTransfer($)===vn?u===!1?e.has("EXT_sRGB")===!0&&Pe===ji?(G.format=nh,G.minFilter=Ti,G.generateMipmaps=!1):D=Ag.sRGBToLinear(D):(Pe!==ji||Ie!==Es)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",$)),D}this.allocateTextureUnit=Oe,this.resetTextureUnits=ge,this.setTexture2D=be,this.setTexture2DArray=ne,this.setTexture3D=pe,this.setTextureCube=Ve,this.rebindTextures=mt,this.setupRenderTarget=vt,this.updateRenderTargetMipmap=Yt,this.updateMultisampleRenderTarget=gt,this.setupDepthRenderbuffer=tt,this.setupFrameBufferTexture=ot,this.useMultisampledRTT=$t}function AR(s,e,t){const n=t.isWebGL2;function r(a,c=Ki){let u;const d=an.getTransfer(c);if(a===Es)return s.UNSIGNED_BYTE;if(a===mg)return s.UNSIGNED_SHORT_4_4_4_4;if(a===gg)return s.UNSIGNED_SHORT_5_5_5_1;if(a===YM)return s.BYTE;if(a===jM)return s.SHORT;if(a===hh)return s.UNSIGNED_SHORT;if(a===pg)return s.INT;if(a===Ss)return s.UNSIGNED_INT;if(a===jr)return s.FLOAT;if(a===Ja)return n?s.HALF_FLOAT:(u=e.get("OES_texture_half_float"),u!==null?u.HALF_FLOAT_OES:null);if(a===KM)return s.ALPHA;if(a===ji)return s.RGBA;if(a===$M)return s.LUMINANCE;if(a===ZM)return s.LUMINANCE_ALPHA;if(a===eo)return s.DEPTH_COMPONENT;if(a===Zo)return s.DEPTH_STENCIL;if(a===nh)return u=e.get("EXT_sRGB"),u!==null?u.SRGB_ALPHA_EXT:null;if(a===JM)return s.RED;if(a===_g)return s.RED_INTEGER;if(a===QM)return s.RG;if(a===vg)return s.RG_INTEGER;if(a===xg)return s.RGBA_INTEGER;if(a===qu||a===Yu||a===ju||a===Ku)if(d===vn)if(u=e.get("WEBGL_compressed_texture_s3tc_srgb"),u!==null){if(a===qu)return u.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(a===Yu)return u.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(a===ju)return u.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(a===Ku)return u.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(u=e.get("WEBGL_compressed_texture_s3tc"),u!==null){if(a===qu)return u.COMPRESSED_RGB_S3TC_DXT1_EXT;if(a===Yu)return u.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(a===ju)return u.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(a===Ku)return u.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(a===Ep||a===Ap||a===bp||a===wp)if(u=e.get("WEBGL_compressed_texture_pvrtc"),u!==null){if(a===Ep)return u.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(a===Ap)return u.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(a===bp)return u.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(a===wp)return u.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(a===eT)return u=e.get("WEBGL_compressed_texture_etc1"),u!==null?u.COMPRESSED_RGB_ETC1_WEBGL:null;if(a===Rp||a===Cp)if(u=e.get("WEBGL_compressed_texture_etc"),u!==null){if(a===Rp)return d===vn?u.COMPRESSED_SRGB8_ETC2:u.COMPRESSED_RGB8_ETC2;if(a===Cp)return d===vn?u.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:u.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(a===Lp||a===Pp||a===Dp||a===Ip||a===Np||a===Up||a===Op||a===Fp||a===Bp||a===Hp||a===zp||a===Gp||a===kp||a===Vp)if(u=e.get("WEBGL_compressed_texture_astc"),u!==null){if(a===Lp)return d===vn?u.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:u.COMPRESSED_RGBA_ASTC_4x4_KHR;if(a===Pp)return d===vn?u.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:u.COMPRESSED_RGBA_ASTC_5x4_KHR;if(a===Dp)return d===vn?u.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:u.COMPRESSED_RGBA_ASTC_5x5_KHR;if(a===Ip)return d===vn?u.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:u.COMPRESSED_RGBA_ASTC_6x5_KHR;if(a===Np)return d===vn?u.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:u.COMPRESSED_RGBA_ASTC_6x6_KHR;if(a===Up)return d===vn?u.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:u.COMPRESSED_RGBA_ASTC_8x5_KHR;if(a===Op)return d===vn?u.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:u.COMPRESSED_RGBA_ASTC_8x6_KHR;if(a===Fp)return d===vn?u.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:u.COMPRESSED_RGBA_ASTC_8x8_KHR;if(a===Bp)return d===vn?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:u.COMPRESSED_RGBA_ASTC_10x5_KHR;if(a===Hp)return d===vn?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:u.COMPRESSED_RGBA_ASTC_10x6_KHR;if(a===zp)return d===vn?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:u.COMPRESSED_RGBA_ASTC_10x8_KHR;if(a===Gp)return d===vn?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:u.COMPRESSED_RGBA_ASTC_10x10_KHR;if(a===kp)return d===vn?u.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:u.COMPRESSED_RGBA_ASTC_12x10_KHR;if(a===Vp)return d===vn?u.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:u.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(a===$u||a===Wp||a===Xp)if(u=e.get("EXT_texture_compression_bptc"),u!==null){if(a===$u)return d===vn?u.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:u.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(a===Wp)return u.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(a===Xp)return u.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(a===tT||a===qp||a===Yp||a===jp)if(u=e.get("EXT_texture_compression_rgtc"),u!==null){if(a===$u)return u.COMPRESSED_RED_RGTC1_EXT;if(a===qp)return u.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(a===Yp)return u.COMPRESSED_RED_GREEN_RGTC2_EXT;if(a===jp)return u.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return a===Qs?n?s.UNSIGNED_INT_24_8:(u=e.get("WEBGL_depth_texture"),u!==null?u.UNSIGNED_INT_24_8_WEBGL:null):s[a]!==void 0?s[a]:null}return{convert:r}}class bR extends hi{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class Js extends En{constructor(){super(),this.isGroup=!0,this.type="Group"}}const wR={type:"move"};class Sf{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Js,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Js,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new re,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new re),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Js,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new re,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new re),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let r=null,a=null,c=null;const u=this._targetRay,d=this._grip,p=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(p&&e.hand){c=!0;for(const C of e.hand.values()){const T=t.getJointPose(C,n),M=this._getHandJoint(p,C);T!==null&&(M.matrix.fromArray(T.transform.matrix),M.matrix.decompose(M.position,M.rotation,M.scale),M.matrixWorldNeedsUpdate=!0,M.jointRadius=T.radius),M.visible=T!==null}const g=p.joints["index-finger-tip"],v=p.joints["thumb-tip"],x=g.position.distanceTo(v.position),E=.02,w=.005;p.inputState.pinching&&x>E+w?(p.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!p.inputState.pinching&&x<=E-w&&(p.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else d!==null&&e.gripSpace&&(a=t.getPose(e.gripSpace,n),a!==null&&(d.matrix.fromArray(a.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,a.linearVelocity?(d.hasLinearVelocity=!0,d.linearVelocity.copy(a.linearVelocity)):d.hasLinearVelocity=!1,a.angularVelocity?(d.hasAngularVelocity=!0,d.angularVelocity.copy(a.angularVelocity)):d.hasAngularVelocity=!1));u!==null&&(r=t.getPose(e.targetRaySpace,n),r===null&&a!==null&&(r=a),r!==null&&(u.matrix.fromArray(r.transform.matrix),u.matrix.decompose(u.position,u.rotation,u.scale),u.matrixWorldNeedsUpdate=!0,r.linearVelocity?(u.hasLinearVelocity=!0,u.linearVelocity.copy(r.linearVelocity)):u.hasLinearVelocity=!1,r.angularVelocity?(u.hasAngularVelocity=!0,u.angularVelocity.copy(r.angularVelocity)):u.hasAngularVelocity=!1,this.dispatchEvent(wR)))}return u!==null&&(u.visible=r!==null),d!==null&&(d.visible=a!==null),p!==null&&(p.visible=c!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new Js;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}class RR extends Kn{constructor(e,t,n,r,a,c,u,d,p,g){if(g=g!==void 0?g:eo,g!==eo&&g!==Zo)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&g===eo&&(n=Ss),n===void 0&&g===Zo&&(n=Qs),super(null,r,a,c,u,d,g,n,p),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=u!==void 0?u:Xn,this.minFilter=d!==void 0?d:Xn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class CR extends ra{constructor(e,t){super();const n=this;let r=null,a=1,c=null,u="local-floor",d=1,p=null,g=null,v=null,x=null,E=null,w=null;const C=t.getContextAttributes();let T=null,M=null;const k=[],O=[],B=new hi;B.layers.enable(1),B.viewport=new dn;const W=new hi;W.layers.enable(2),W.viewport=new dn;const J=[B,W],m=new bR;m.layers.enable(1),m.layers.enable(2);let me=null,N=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(ne){let pe=k[ne];return pe===void 0&&(pe=new Sf,k[ne]=pe),pe.getTargetRaySpace()},this.getControllerGrip=function(ne){let pe=k[ne];return pe===void 0&&(pe=new Sf,k[ne]=pe),pe.getGripSpace()},this.getHand=function(ne){let pe=k[ne];return pe===void 0&&(pe=new Sf,k[ne]=pe),pe.getHandSpace()};function X(ne){const pe=O.indexOf(ne.inputSource);if(pe===-1)return;const Ve=k[pe];Ve!==void 0&&(Ve.update(ne.inputSource,ne.frame,p||c),Ve.dispatchEvent({type:ne.type,data:ne.inputSource}))}function Ee(){r.removeEventListener("select",X),r.removeEventListener("selectstart",X),r.removeEventListener("selectend",X),r.removeEventListener("squeeze",X),r.removeEventListener("squeezestart",X),r.removeEventListener("squeezeend",X),r.removeEventListener("end",Ee),r.removeEventListener("inputsourceschange",Re);for(let ne=0;ne<k.length;ne++){const pe=O[ne];pe!==null&&(O[ne]=null,k[ne].disconnect(pe))}me=null,N=null,e.setRenderTarget(T),E=null,x=null,v=null,r=null,M=null,be.stop(),n.isPresenting=!1,n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(ne){a=ne,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(ne){u=ne,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return p||c},this.setReferenceSpace=function(ne){p=ne},this.getBaseLayer=function(){return x!==null?x:E},this.getBinding=function(){return v},this.getFrame=function(){return w},this.getSession=function(){return r},this.setSession=async function(ne){if(r=ne,r!==null){if(T=e.getRenderTarget(),r.addEventListener("select",X),r.addEventListener("selectstart",X),r.addEventListener("selectend",X),r.addEventListener("squeeze",X),r.addEventListener("squeezestart",X),r.addEventListener("squeezeend",X),r.addEventListener("end",Ee),r.addEventListener("inputsourceschange",Re),C.xrCompatible!==!0&&await t.makeXRCompatible(),r.renderState.layers===void 0||e.capabilities.isWebGL2===!1){const pe={antialias:r.renderState.layers===void 0?C.antialias:!0,alpha:!0,depth:C.depth,stencil:C.stencil,framebufferScaleFactor:a};E=new XRWebGLLayer(r,t,pe),r.updateRenderState({baseLayer:E}),M=new io(E.framebufferWidth,E.framebufferHeight,{format:ji,type:Es,colorSpace:e.outputColorSpace,stencilBuffer:C.stencil})}else{let pe=null,Ve=null,Ke=null;C.depth&&(Ke=C.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,pe=C.stencil?Zo:eo,Ve=C.stencil?Qs:Ss);const Ye={colorFormat:t.RGBA8,depthFormat:Ke,scaleFactor:a};v=new XRWebGLBinding(r,t),x=v.createProjectionLayer(Ye),r.updateRenderState({layers:[x]}),M=new io(x.textureWidth,x.textureHeight,{format:ji,type:Es,depthTexture:new RR(x.textureWidth,x.textureHeight,Ve,void 0,void 0,void 0,void 0,void 0,void 0,pe),stencilBuffer:C.stencil,colorSpace:e.outputColorSpace,samples:C.antialias?4:0});const lt=e.properties.get(M);lt.__ignoreDepthValues=x.ignoreDepthValues}M.isXRRenderTarget=!0,this.setFoveation(d),p=null,c=await r.requestReferenceSpace(u),be.setContext(r),be.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode};function Re(ne){for(let pe=0;pe<ne.removed.length;pe++){const Ve=ne.removed[pe],Ke=O.indexOf(Ve);Ke>=0&&(O[Ke]=null,k[Ke].disconnect(Ve))}for(let pe=0;pe<ne.added.length;pe++){const Ve=ne.added[pe];let Ke=O.indexOf(Ve);if(Ke===-1){for(let lt=0;lt<k.length;lt++)if(lt>=O.length){O.push(Ve),Ke=lt;break}else if(O[lt]===null){O[lt]=Ve,Ke=lt;break}if(Ke===-1)break}const Ye=k[Ke];Ye&&Ye.connect(Ve)}}const ye=new re,te=new re;function xe(ne,pe,Ve){ye.setFromMatrixPosition(pe.matrixWorld),te.setFromMatrixPosition(Ve.matrixWorld);const Ke=ye.distanceTo(te),Ye=pe.projectionMatrix.elements,lt=Ve.projectionMatrix.elements,Ct=Ye[14]/(Ye[10]-1),dt=Ye[14]/(Ye[10]+1),De=(Ye[9]+1)/Ye[5],Ge=(Ye[9]-1)/Ye[5],ot=(Ye[8]-1)/Ye[0],oe=(lt[8]+1)/lt[0],wn=Ct*ot,tt=Ct*oe,mt=Ke/(-ot+oe),vt=mt*-ot;pe.matrixWorld.decompose(ne.position,ne.quaternion,ne.scale),ne.translateX(vt),ne.translateZ(mt),ne.matrixWorld.compose(ne.position,ne.quaternion,ne.scale),ne.matrixWorldInverse.copy(ne.matrixWorld).invert();const Yt=Ct+mt,gt=dt+mt,Dt=wn-vt,$t=tt+(Ke-vt),tn=De*dt/gt*Yt,en=Ge*dt/gt*Yt;ne.projectionMatrix.makePerspective(Dt,$t,tn,en,Yt,gt),ne.projectionMatrixInverse.copy(ne.projectionMatrix).invert()}function we(ne,pe){pe===null?ne.matrixWorld.copy(ne.matrix):ne.matrixWorld.multiplyMatrices(pe.matrixWorld,ne.matrix),ne.matrixWorldInverse.copy(ne.matrixWorld).invert()}this.updateCamera=function(ne){if(r===null)return;m.near=W.near=B.near=ne.near,m.far=W.far=B.far=ne.far,(me!==m.near||N!==m.far)&&(r.updateRenderState({depthNear:m.near,depthFar:m.far}),me=m.near,N=m.far);const pe=ne.parent,Ve=m.cameras;we(m,pe);for(let Ke=0;Ke<Ve.length;Ke++)we(Ve[Ke],pe);Ve.length===2?xe(m,B,W):m.projectionMatrix.copy(B.projectionMatrix),ge(ne,m,pe)};function ge(ne,pe,Ve){Ve===null?ne.matrix.copy(pe.matrixWorld):(ne.matrix.copy(Ve.matrixWorld),ne.matrix.invert(),ne.matrix.multiply(pe.matrixWorld)),ne.matrix.decompose(ne.position,ne.quaternion,ne.scale),ne.updateMatrixWorld(!0),ne.projectionMatrix.copy(pe.projectionMatrix),ne.projectionMatrixInverse.copy(pe.projectionMatrixInverse),ne.isPerspectiveCamera&&(ne.fov=Qo*2*Math.atan(1/ne.projectionMatrix.elements[5]),ne.zoom=1)}this.getCamera=function(){return m},this.getFoveation=function(){if(!(x===null&&E===null))return d},this.setFoveation=function(ne){d=ne,x!==null&&(x.fixedFoveation=ne),E!==null&&E.fixedFoveation!==void 0&&(E.fixedFoveation=ne)};let Oe=null;function Ce(ne,pe){if(g=pe.getViewerPose(p||c),w=pe,g!==null){const Ve=g.views;E!==null&&(e.setRenderTargetFramebuffer(M,E.framebuffer),e.setRenderTarget(M));let Ke=!1;Ve.length!==m.cameras.length&&(m.cameras.length=0,Ke=!0);for(let Ye=0;Ye<Ve.length;Ye++){const lt=Ve[Ye];let Ct=null;if(E!==null)Ct=E.getViewport(lt);else{const De=v.getViewSubImage(x,lt);Ct=De.viewport,Ye===0&&(e.setRenderTargetTextures(M,De.colorTexture,x.ignoreDepthValues?void 0:De.depthStencilTexture),e.setRenderTarget(M))}let dt=J[Ye];dt===void 0&&(dt=new hi,dt.layers.enable(Ye),dt.viewport=new dn,J[Ye]=dt),dt.matrix.fromArray(lt.transform.matrix),dt.matrix.decompose(dt.position,dt.quaternion,dt.scale),dt.projectionMatrix.fromArray(lt.projectionMatrix),dt.projectionMatrixInverse.copy(dt.projectionMatrix).invert(),dt.viewport.set(Ct.x,Ct.y,Ct.width,Ct.height),Ye===0&&(m.matrix.copy(dt.matrix),m.matrix.decompose(m.position,m.quaternion,m.scale)),Ke===!0&&m.cameras.push(dt)}}for(let Ve=0;Ve<k.length;Ve++){const Ke=O[Ve],Ye=k[Ve];Ke!==null&&Ye!==void 0&&Ye.update(Ke,pe,p||c)}Oe&&Oe(ne,pe),pe.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:pe}),w=null}const be=new Ug;be.setAnimationLoop(Ce),this.setAnimationLoop=function(ne){Oe=ne},this.dispose=function(){}}}function LR(s,e){function t(T,M){T.matrixAutoUpdate===!0&&T.updateMatrix(),M.value.copy(T.matrix)}function n(T,M){M.color.getRGB(T.fogColor.value,Dg(s)),M.isFog?(T.fogNear.value=M.near,T.fogFar.value=M.far):M.isFogExp2&&(T.fogDensity.value=M.density)}function r(T,M,k,O,B){M.isMeshBasicMaterial||M.isMeshLambertMaterial?a(T,M):M.isMeshToonMaterial?(a(T,M),v(T,M)):M.isMeshPhongMaterial?(a(T,M),g(T,M)):M.isMeshStandardMaterial?(a(T,M),x(T,M),M.isMeshPhysicalMaterial&&E(T,M,B)):M.isMeshMatcapMaterial?(a(T,M),w(T,M)):M.isMeshDepthMaterial?a(T,M):M.isMeshDistanceMaterial?(a(T,M),C(T,M)):M.isMeshNormalMaterial?a(T,M):M.isLineBasicMaterial?(c(T,M),M.isLineDashedMaterial&&u(T,M)):M.isPointsMaterial?d(T,M,k,O):M.isSpriteMaterial?p(T,M):M.isShadowMaterial?(T.color.value.copy(M.color),T.opacity.value=M.opacity):M.isShaderMaterial&&(M.uniformsNeedUpdate=!1)}function a(T,M){T.opacity.value=M.opacity,M.color&&T.diffuse.value.copy(M.color),M.emissive&&T.emissive.value.copy(M.emissive).multiplyScalar(M.emissiveIntensity),M.map&&(T.map.value=M.map,t(M.map,T.mapTransform)),M.alphaMap&&(T.alphaMap.value=M.alphaMap,t(M.alphaMap,T.alphaMapTransform)),M.bumpMap&&(T.bumpMap.value=M.bumpMap,t(M.bumpMap,T.bumpMapTransform),T.bumpScale.value=M.bumpScale,M.side===Ei&&(T.bumpScale.value*=-1)),M.normalMap&&(T.normalMap.value=M.normalMap,t(M.normalMap,T.normalMapTransform),T.normalScale.value.copy(M.normalScale),M.side===Ei&&T.normalScale.value.negate()),M.displacementMap&&(T.displacementMap.value=M.displacementMap,t(M.displacementMap,T.displacementMapTransform),T.displacementScale.value=M.displacementScale,T.displacementBias.value=M.displacementBias),M.emissiveMap&&(T.emissiveMap.value=M.emissiveMap,t(M.emissiveMap,T.emissiveMapTransform)),M.specularMap&&(T.specularMap.value=M.specularMap,t(M.specularMap,T.specularMapTransform)),M.alphaTest>0&&(T.alphaTest.value=M.alphaTest);const k=e.get(M).envMap;if(k&&(T.envMap.value=k,T.flipEnvMap.value=k.isCubeTexture&&k.isRenderTargetTexture===!1?-1:1,T.reflectivity.value=M.reflectivity,T.ior.value=M.ior,T.refractionRatio.value=M.refractionRatio),M.lightMap){T.lightMap.value=M.lightMap;const O=s._useLegacyLights===!0?Math.PI:1;T.lightMapIntensity.value=M.lightMapIntensity*O,t(M.lightMap,T.lightMapTransform)}M.aoMap&&(T.aoMap.value=M.aoMap,T.aoMapIntensity.value=M.aoMapIntensity,t(M.aoMap,T.aoMapTransform))}function c(T,M){T.diffuse.value.copy(M.color),T.opacity.value=M.opacity,M.map&&(T.map.value=M.map,t(M.map,T.mapTransform))}function u(T,M){T.dashSize.value=M.dashSize,T.totalSize.value=M.dashSize+M.gapSize,T.scale.value=M.scale}function d(T,M,k,O){T.diffuse.value.copy(M.color),T.opacity.value=M.opacity,T.size.value=M.size*k,T.scale.value=O*.5,M.map&&(T.map.value=M.map,t(M.map,T.uvTransform)),M.alphaMap&&(T.alphaMap.value=M.alphaMap,t(M.alphaMap,T.alphaMapTransform)),M.alphaTest>0&&(T.alphaTest.value=M.alphaTest)}function p(T,M){T.diffuse.value.copy(M.color),T.opacity.value=M.opacity,T.rotation.value=M.rotation,M.map&&(T.map.value=M.map,t(M.map,T.mapTransform)),M.alphaMap&&(T.alphaMap.value=M.alphaMap,t(M.alphaMap,T.alphaMapTransform)),M.alphaTest>0&&(T.alphaTest.value=M.alphaTest)}function g(T,M){T.specular.value.copy(M.specular),T.shininess.value=Math.max(M.shininess,1e-4)}function v(T,M){M.gradientMap&&(T.gradientMap.value=M.gradientMap)}function x(T,M){T.metalness.value=M.metalness,M.metalnessMap&&(T.metalnessMap.value=M.metalnessMap,t(M.metalnessMap,T.metalnessMapTransform)),T.roughness.value=M.roughness,M.roughnessMap&&(T.roughnessMap.value=M.roughnessMap,t(M.roughnessMap,T.roughnessMapTransform)),e.get(M).envMap&&(T.envMapIntensity.value=M.envMapIntensity)}function E(T,M,k){T.ior.value=M.ior,M.sheen>0&&(T.sheenColor.value.copy(M.sheenColor).multiplyScalar(M.sheen),T.sheenRoughness.value=M.sheenRoughness,M.sheenColorMap&&(T.sheenColorMap.value=M.sheenColorMap,t(M.sheenColorMap,T.sheenColorMapTransform)),M.sheenRoughnessMap&&(T.sheenRoughnessMap.value=M.sheenRoughnessMap,t(M.sheenRoughnessMap,T.sheenRoughnessMapTransform))),M.clearcoat>0&&(T.clearcoat.value=M.clearcoat,T.clearcoatRoughness.value=M.clearcoatRoughness,M.clearcoatMap&&(T.clearcoatMap.value=M.clearcoatMap,t(M.clearcoatMap,T.clearcoatMapTransform)),M.clearcoatRoughnessMap&&(T.clearcoatRoughnessMap.value=M.clearcoatRoughnessMap,t(M.clearcoatRoughnessMap,T.clearcoatRoughnessMapTransform)),M.clearcoatNormalMap&&(T.clearcoatNormalMap.value=M.clearcoatNormalMap,t(M.clearcoatNormalMap,T.clearcoatNormalMapTransform),T.clearcoatNormalScale.value.copy(M.clearcoatNormalScale),M.side===Ei&&T.clearcoatNormalScale.value.negate())),M.iridescence>0&&(T.iridescence.value=M.iridescence,T.iridescenceIOR.value=M.iridescenceIOR,T.iridescenceThicknessMinimum.value=M.iridescenceThicknessRange[0],T.iridescenceThicknessMaximum.value=M.iridescenceThicknessRange[1],M.iridescenceMap&&(T.iridescenceMap.value=M.iridescenceMap,t(M.iridescenceMap,T.iridescenceMapTransform)),M.iridescenceThicknessMap&&(T.iridescenceThicknessMap.value=M.iridescenceThicknessMap,t(M.iridescenceThicknessMap,T.iridescenceThicknessMapTransform))),M.transmission>0&&(T.transmission.value=M.transmission,T.transmissionSamplerMap.value=k.texture,T.transmissionSamplerSize.value.set(k.width,k.height),M.transmissionMap&&(T.transmissionMap.value=M.transmissionMap,t(M.transmissionMap,T.transmissionMapTransform)),T.thickness.value=M.thickness,M.thicknessMap&&(T.thicknessMap.value=M.thicknessMap,t(M.thicknessMap,T.thicknessMapTransform)),T.attenuationDistance.value=M.attenuationDistance,T.attenuationColor.value.copy(M.attenuationColor)),M.anisotropy>0&&(T.anisotropyVector.value.set(M.anisotropy*Math.cos(M.anisotropyRotation),M.anisotropy*Math.sin(M.anisotropyRotation)),M.anisotropyMap&&(T.anisotropyMap.value=M.anisotropyMap,t(M.anisotropyMap,T.anisotropyMapTransform))),T.specularIntensity.value=M.specularIntensity,T.specularColor.value.copy(M.specularColor),M.specularColorMap&&(T.specularColorMap.value=M.specularColorMap,t(M.specularColorMap,T.specularColorMapTransform)),M.specularIntensityMap&&(T.specularIntensityMap.value=M.specularIntensityMap,t(M.specularIntensityMap,T.specularIntensityMapTransform))}function w(T,M){M.matcap&&(T.matcap.value=M.matcap)}function C(T,M){const k=e.get(M).light;T.referencePosition.value.setFromMatrixPosition(k.matrixWorld),T.nearDistance.value=k.shadow.camera.near,T.farDistance.value=k.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:r}}function PR(s,e,t,n){let r={},a={},c=[];const u=t.isWebGL2?s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS):0;function d(k,O){const B=O.program;n.uniformBlockBinding(k,B)}function p(k,O){let B=r[k.id];B===void 0&&(w(k),B=g(k),r[k.id]=B,k.addEventListener("dispose",T));const W=O.program;n.updateUBOMapping(k,W);const J=e.render.frame;a[k.id]!==J&&(x(k),a[k.id]=J)}function g(k){const O=v();k.__bindingPointIndex=O;const B=s.createBuffer(),W=k.__size,J=k.usage;return s.bindBuffer(s.UNIFORM_BUFFER,B),s.bufferData(s.UNIFORM_BUFFER,W,J),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,O,B),B}function v(){for(let k=0;k<u;k++)if(c.indexOf(k)===-1)return c.push(k),k;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function x(k){const O=r[k.id],B=k.uniforms,W=k.__cache;s.bindBuffer(s.UNIFORM_BUFFER,O);for(let J=0,m=B.length;J<m;J++){const me=B[J];if(E(me,J,W)===!0){const N=me.__offset,X=Array.isArray(me.value)?me.value:[me.value];let Ee=0;for(let Re=0;Re<X.length;Re++){const ye=X[Re],te=C(ye);typeof ye=="number"?(me.__data[0]=ye,s.bufferSubData(s.UNIFORM_BUFFER,N+Ee,me.__data)):ye.isMatrix3?(me.__data[0]=ye.elements[0],me.__data[1]=ye.elements[1],me.__data[2]=ye.elements[2],me.__data[3]=ye.elements[0],me.__data[4]=ye.elements[3],me.__data[5]=ye.elements[4],me.__data[6]=ye.elements[5],me.__data[7]=ye.elements[0],me.__data[8]=ye.elements[6],me.__data[9]=ye.elements[7],me.__data[10]=ye.elements[8],me.__data[11]=ye.elements[0]):(ye.toArray(me.__data,Ee),Ee+=te.storage/Float32Array.BYTES_PER_ELEMENT)}s.bufferSubData(s.UNIFORM_BUFFER,N,me.__data)}}s.bindBuffer(s.UNIFORM_BUFFER,null)}function E(k,O,B){const W=k.value;if(B[O]===void 0){if(typeof W=="number")B[O]=W;else{const J=Array.isArray(W)?W:[W],m=[];for(let me=0;me<J.length;me++)m.push(J[me].clone());B[O]=m}return!0}else if(typeof W=="number"){if(B[O]!==W)return B[O]=W,!0}else{const J=Array.isArray(B[O])?B[O]:[B[O]],m=Array.isArray(W)?W:[W];for(let me=0;me<J.length;me++){const N=J[me];if(N.equals(m[me])===!1)return N.copy(m[me]),!0}}return!1}function w(k){const O=k.uniforms;let B=0;const W=16;let J=0;for(let m=0,me=O.length;m<me;m++){const N=O[m],X={boundary:0,storage:0},Ee=Array.isArray(N.value)?N.value:[N.value];for(let Re=0,ye=Ee.length;Re<ye;Re++){const te=Ee[Re],xe=C(te);X.boundary+=xe.boundary,X.storage+=xe.storage}if(N.__data=new Float32Array(X.storage/Float32Array.BYTES_PER_ELEMENT),N.__offset=B,m>0){J=B%W;const Re=W-J;J!==0&&Re-X.boundary<0&&(B+=W-J,N.__offset=B)}B+=X.storage}return J=B%W,J>0&&(B+=W-J),k.__size=B,k.__cache={},this}function C(k){const O={boundary:0,storage:0};return typeof k=="number"?(O.boundary=4,O.storage=4):k.isVector2?(O.boundary=8,O.storage=8):k.isVector3||k.isColor?(O.boundary=16,O.storage=12):k.isVector4?(O.boundary=16,O.storage=16):k.isMatrix3?(O.boundary=48,O.storage=48):k.isMatrix4?(O.boundary=64,O.storage=64):k.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",k),O}function T(k){const O=k.target;O.removeEventListener("dispose",T);const B=c.indexOf(O.__bindingPointIndex);c.splice(B,1),s.deleteBuffer(r[O.id]),delete r[O.id],delete a[O.id]}function M(){for(const k in r)s.deleteBuffer(r[k]);c=[],r={},a={}}return{bind:d,update:p,dispose:M}}class zg{constructor(e={}){const{canvas:t=CT(),context:n=null,depth:r=!0,stencil:a=!0,alpha:c=!1,antialias:u=!1,premultipliedAlpha:d=!0,preserveDrawingBuffer:p=!1,powerPreference:g="default",failIfMajorPerformanceCaveat:v=!1}=e;this.isWebGLRenderer=!0;let x;n!==null?x=n.getContextAttributes().alpha:x=c;const E=new Uint32Array(4),w=new Int32Array(4);let C=null,T=null;const M=[],k=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=bn,this._useLegacyLights=!1,this.toneMapping=Ts,this.toneMappingExposure=1;const O=this;let B=!1,W=0,J=0,m=null,me=-1,N=null;const X=new dn,Ee=new dn;let Re=null;const ye=new Rt(0);let te=0,xe=t.width,we=t.height,ge=1,Oe=null,Ce=null;const be=new dn(0,0,xe,we),ne=new dn(0,0,xe,we);let pe=!1;const Ve=new mh;let Ke=!1,Ye=!1,lt=null;const Ct=new qt,dt=new Qt,De=new re,Ge={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function ot(){return m===null?ge:1}let oe=n;function wn(F,se){for(let ue=0;ue<F.length;ue++){const fe=F[ue],he=t.getContext(fe,se);if(he!==null)return he}return null}try{const F={alpha:!0,depth:r,stencil:a,antialias:u,premultipliedAlpha:d,preserveDrawingBuffer:p,powerPreference:g,failIfMajorPerformanceCaveat:v};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${fh}`),t.addEventListener("webglcontextlost",Gt,!1),t.addEventListener("webglcontextrestored",Q,!1),t.addEventListener("webglcontextcreationerror",ke,!1),oe===null){const se=["webgl2","webgl","experimental-webgl"];if(O.isWebGL1Renderer===!0&&se.shift(),oe=wn(se,F),oe===null)throw wn(se)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext<"u"&&oe instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),oe.getShaderPrecisionFormat===void 0&&(oe.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(F){throw console.error("THREE.WebGLRenderer: "+F.message),F}let tt,mt,vt,Yt,gt,Dt,$t,tn,en,G,D,$,Pe,Ie,Be,rt,ze,qe,ct,Et,Ue,Bt,St,ut;function ft(){tt=new Gb(oe),mt=new Ub(oe,tt,e),tt.init(mt),Bt=new AR(oe,tt,mt),vt=new TR(oe,tt,mt),Yt=new Wb(oe),gt=new cR,Dt=new ER(oe,tt,vt,gt,mt,Bt,Yt),$t=new Fb(O),tn=new zb(O),en=new eE(oe,mt),St=new Ib(oe,tt,en,mt),G=new kb(oe,en,Yt,St),D=new jb(oe,G,en,Yt),ct=new Yb(oe,mt,Dt),rt=new Ob(gt),$=new lR(O,$t,tn,tt,mt,St,rt),Pe=new LR(O,gt),Ie=new fR,Be=new _R(tt,mt),qe=new Db(O,$t,tn,vt,D,x,d),ze=new MR(O,D,mt),ut=new PR(oe,Yt,mt,vt),Et=new Nb(oe,tt,Yt,mt),Ue=new Vb(oe,tt,Yt,mt),Yt.programs=$.programs,O.capabilities=mt,O.extensions=tt,O.properties=gt,O.renderLists=Ie,O.shadowMap=ze,O.state=vt,O.info=Yt}ft();const Je=new CR(O,oe);this.xr=Je,this.getContext=function(){return oe},this.getContextAttributes=function(){return oe.getContextAttributes()},this.forceContextLoss=function(){const F=tt.get("WEBGL_lose_context");F&&F.loseContext()},this.forceContextRestore=function(){const F=tt.get("WEBGL_lose_context");F&&F.restoreContext()},this.getPixelRatio=function(){return ge},this.setPixelRatio=function(F){F!==void 0&&(ge=F,this.setSize(xe,we,!1))},this.getSize=function(F){return F.set(xe,we)},this.setSize=function(F,se,ue=!0){if(Je.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}xe=F,we=se,t.width=Math.floor(F*ge),t.height=Math.floor(se*ge),ue===!0&&(t.style.width=F+"px",t.style.height=se+"px"),this.setViewport(0,0,F,se)},this.getDrawingBufferSize=function(F){return F.set(xe*ge,we*ge).floor()},this.setDrawingBufferSize=function(F,se,ue){xe=F,we=se,ge=ue,t.width=Math.floor(F*ue),t.height=Math.floor(se*ue),this.setViewport(0,0,F,se)},this.getCurrentViewport=function(F){return F.copy(X)},this.getViewport=function(F){return F.copy(be)},this.setViewport=function(F,se,ue,fe){F.isVector4?be.set(F.x,F.y,F.z,F.w):be.set(F,se,ue,fe),vt.viewport(X.copy(be).multiplyScalar(ge).floor())},this.getScissor=function(F){return F.copy(ne)},this.setScissor=function(F,se,ue,fe){F.isVector4?ne.set(F.x,F.y,F.z,F.w):ne.set(F,se,ue,fe),vt.scissor(Ee.copy(ne).multiplyScalar(ge).floor())},this.getScissorTest=function(){return pe},this.setScissorTest=function(F){vt.setScissorTest(pe=F)},this.setOpaqueSort=function(F){Oe=F},this.setTransparentSort=function(F){Ce=F},this.getClearColor=function(F){return F.copy(qe.getClearColor())},this.setClearColor=function(){qe.setClearColor.apply(qe,arguments)},this.getClearAlpha=function(){return qe.getClearAlpha()},this.setClearAlpha=function(){qe.setClearAlpha.apply(qe,arguments)},this.clear=function(F=!0,se=!0,ue=!0){let fe=0;if(F){let he=!1;if(m!==null){const $e=m.texture.format;he=$e===xg||$e===vg||$e===_g}if(he){const $e=m.texture.type,it=$e===Es||$e===Ss||$e===hh||$e===Qs||$e===mg||$e===gg,at=qe.getClearColor(),pt=qe.getClearAlpha(),bt=at.r,Mt=at.g,Tt=at.b;it?(E[0]=bt,E[1]=Mt,E[2]=Tt,E[3]=pt,oe.clearBufferuiv(oe.COLOR,0,E)):(w[0]=bt,w[1]=Mt,w[2]=Tt,w[3]=pt,oe.clearBufferiv(oe.COLOR,0,w))}else fe|=oe.COLOR_BUFFER_BIT}se&&(fe|=oe.DEPTH_BUFFER_BIT),ue&&(fe|=oe.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),oe.clear(fe)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",Gt,!1),t.removeEventListener("webglcontextrestored",Q,!1),t.removeEventListener("webglcontextcreationerror",ke,!1),Ie.dispose(),Be.dispose(),gt.dispose(),$t.dispose(),tn.dispose(),D.dispose(),St.dispose(),ut.dispose(),$.dispose(),Je.dispose(),Je.removeEventListener("sessionstart",qn),Je.removeEventListener("sessionend",rn),lt&&(lt.dispose(),lt=null),pn.stop()};function Gt(F){F.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),B=!0}function Q(){console.log("THREE.WebGLRenderer: Context Restored."),B=!1;const F=Yt.autoReset,se=ze.enabled,ue=ze.autoUpdate,fe=ze.needsUpdate,he=ze.type;ft(),Yt.autoReset=F,ze.enabled=se,ze.autoUpdate=ue,ze.needsUpdate=fe,ze.type=he}function ke(F){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",F.statusMessage)}function He(F){const se=F.target;se.removeEventListener("dispose",He),Se(se)}function Se(F){Fe(F),gt.remove(F)}function Fe(F){const se=gt.get(F).programs;se!==void 0&&(se.forEach(function(ue){$.releaseProgram(ue)}),F.isShaderMaterial&&$.releaseShaderCache(F))}this.renderBufferDirect=function(F,se,ue,fe,he,$e){se===null&&(se=Ge);const it=he.isMesh&&he.matrixWorld.determinant()<0,at=ca(F,se,ue,fe,he);vt.setMaterial(fe,it);let pt=ue.index,bt=1;if(fe.wireframe===!0){if(pt=G.getWireframeAttribute(ue),pt===void 0)return;bt=2}const Mt=ue.drawRange,Tt=ue.attributes.position;let mn=Mt.start*bt,Ln=(Mt.start+Mt.count)*bt;$e!==null&&(mn=Math.max(mn,$e.start*bt),Ln=Math.min(Ln,($e.start+$e.count)*bt)),pt!==null?(mn=Math.max(mn,0),Ln=Math.min(Ln,pt.count)):Tt!=null&&(mn=Math.max(mn,0),Ln=Math.min(Ln,Tt.count));const yn=Ln-mn;if(yn<0||yn===1/0)return;St.setup(he,fe,at,ue,pt);let Ai,hn=Et;if(pt!==null&&(Ai=en.get(pt),hn=Ue,hn.setIndex(Ai)),he.isMesh)fe.wireframe===!0?(vt.setLineWidth(fe.wireframeLinewidth*ot()),hn.setMode(oe.LINES)):hn.setMode(oe.TRIANGLES);else if(he.isLine){let It=fe.linewidth;It===void 0&&(It=1),vt.setLineWidth(It*ot()),he.isLineSegments?hn.setMode(oe.LINES):he.isLineLoop?hn.setMode(oe.LINE_LOOP):hn.setMode(oe.LINE_STRIP)}else he.isPoints?hn.setMode(oe.POINTS):he.isSprite&&hn.setMode(oe.TRIANGLES);if(he.isInstancedMesh)hn.renderInstances(mn,yn,he.count);else if(ue.isInstancedBufferGeometry){const It=ue._maxInstanceCount!==void 0?ue._maxInstanceCount:1/0,br=Math.min(ue.instanceCount,It);hn.renderInstances(mn,yn,br)}else hn.render(mn,yn)};function nt(F,se,ue){F.transparent===!0&&F.side===yr&&F.forceSinglePass===!1?(F.side=Ei,F.needsUpdate=!0,ts(F,se,ue),F.side=Zr,F.needsUpdate=!0,ts(F,se,ue),F.side=yr):ts(F,se,ue)}this.compile=function(F,se,ue=null){ue===null&&(ue=F),T=Be.get(ue),T.init(),k.push(T),ue.traverseVisible(function(he){he.isLight&&he.layers.test(se.layers)&&(T.pushLight(he),he.castShadow&&T.pushShadow(he))}),F!==ue&&F.traverseVisible(function(he){he.isLight&&he.layers.test(se.layers)&&(T.pushLight(he),he.castShadow&&T.pushShadow(he))}),T.setupLights(O._useLegacyLights);const fe=new Set;return F.traverse(function(he){const $e=he.material;if($e)if(Array.isArray($e))for(let it=0;it<$e.length;it++){const at=$e[it];nt(at,ue,he),fe.add(at)}else nt($e,ue,he),fe.add($e)}),k.pop(),T=null,fe},this.compileAsync=function(F,se,ue=null){const fe=this.compile(F,se,ue);return new Promise(he=>{function $e(){if(fe.forEach(function(it){gt.get(it).currentProgram.isReady()&&fe.delete(it)}),fe.size===0){he(F);return}setTimeout($e,10)}tt.get("KHR_parallel_shader_compile")!==null?$e():setTimeout($e,10)})};let kt=null;function xn(F){kt&&kt(F)}function qn(){pn.stop()}function rn(){pn.start()}const pn=new Ug;pn.setAnimationLoop(xn),typeof self<"u"&&pn.setContext(self),this.setAnimationLoop=function(F){kt=F,Je.setAnimationLoop(F),F===null?pn.stop():pn.start()},Je.addEventListener("sessionstart",qn),Je.addEventListener("sessionend",rn),this.render=function(F,se){if(se!==void 0&&se.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(B===!0)return;F.matrixWorldAutoUpdate===!0&&F.updateMatrixWorld(),se.parent===null&&se.matrixWorldAutoUpdate===!0&&se.updateMatrixWorld(),Je.enabled===!0&&Je.isPresenting===!0&&(Je.cameraAutoUpdate===!0&&Je.updateCamera(se),se=Je.getCamera()),F.isScene===!0&&F.onBeforeRender(O,F,se,m),T=Be.get(F,k.length),T.init(),k.push(T),Ct.multiplyMatrices(se.projectionMatrix,se.matrixWorldInverse),Ve.setFromProjectionMatrix(Ct),Ye=this.localClippingEnabled,Ke=rt.init(this.clippingPlanes,Ye),C=Ie.get(F,M.length),C.init(),M.push(C),Nn(F,se,0,O.sortObjects),C.finish(),O.sortObjects===!0&&C.sort(Oe,Ce),this.info.render.frame++,Ke===!0&&rt.beginShadows();const ue=T.state.shadowsArray;if(ze.render(ue,F,se),Ke===!0&&rt.endShadows(),this.info.autoReset===!0&&this.info.reset(),qe.render(C,F),T.setupLights(O._useLegacyLights),se.isArrayCamera){const fe=se.cameras;for(let he=0,$e=fe.length;he<$e;he++){const it=fe[he];cr(C,F,it,it.viewport)}}else cr(C,F,se);m!==null&&(Dt.updateMultisampleRenderTarget(m),Dt.updateRenderTargetMipmap(m)),F.isScene===!0&&F.onAfterRender(O,F,se),St.resetDefaultState(),me=-1,N=null,k.pop(),k.length>0?T=k[k.length-1]:T=null,M.pop(),M.length>0?C=M[M.length-1]:C=null};function Nn(F,se,ue,fe){if(F.visible===!1)return;if(F.layers.test(se.layers)){if(F.isGroup)ue=F.renderOrder;else if(F.isLOD)F.autoUpdate===!0&&F.update(se);else if(F.isLight)T.pushLight(F),F.castShadow&&T.pushShadow(F);else if(F.isSprite){if(!F.frustumCulled||Ve.intersectsSprite(F)){fe&&De.setFromMatrixPosition(F.matrixWorld).applyMatrix4(Ct);const it=D.update(F),at=F.material;at.visible&&C.push(F,it,at,ue,De.z,null)}}else if((F.isMesh||F.isLine||F.isPoints)&&(!F.frustumCulled||Ve.intersectsObject(F))){const it=D.update(F),at=F.material;if(fe&&(F.boundingSphere!==void 0?(F.boundingSphere===null&&F.computeBoundingSphere(),De.copy(F.boundingSphere.center)):(it.boundingSphere===null&&it.computeBoundingSphere(),De.copy(it.boundingSphere.center)),De.applyMatrix4(F.matrixWorld).applyMatrix4(Ct)),Array.isArray(at)){const pt=it.groups;for(let bt=0,Mt=pt.length;bt<Mt;bt++){const Tt=pt[bt],mn=at[Tt.materialIndex];mn&&mn.visible&&C.push(F,it,mn,ue,De.z,Tt)}}else at.visible&&C.push(F,it,at,ue,De.z,null)}}const $e=F.children;for(let it=0,at=$e.length;it<at;it++)Nn($e[it],se,ue,fe)}function cr(F,se,ue,fe){const he=F.opaque,$e=F.transmissive,it=F.transparent;T.setupLightsView(ue),Ke===!0&&rt.setGlobalState(O.clippingPlanes,ue),$e.length>0&&Qr(he,$e,se,ue),fe&&vt.viewport(X.copy(fe)),he.length>0&&es(he,se,ue),$e.length>0&&es($e,se,ue),it.length>0&&es(it,se,ue),vt.buffers.depth.setTest(!0),vt.buffers.depth.setMask(!0),vt.buffers.color.setMask(!0),vt.setPolygonOffset(!1)}function Qr(F,se,ue,fe){if((ue.isScene===!0?ue.overrideMaterial:null)!==null)return;const $e=mt.isWebGL2;lt===null&&(lt=new io(1,1,{generateMipmaps:!0,type:tt.has("EXT_color_buffer_half_float")?Ja:Es,minFilter:no,samples:$e?4:0})),O.getDrawingBufferSize(dt),$e?lt.setSize(dt.x,dt.y):lt.setSize(Lc(dt.x),Lc(dt.y));const it=O.getRenderTarget();O.setRenderTarget(lt),O.getClearColor(ye),te=O.getClearAlpha(),te<1&&O.setClearColor(16777215,.5),O.clear();const at=O.toneMapping;O.toneMapping=Ts,es(F,ue,fe),Dt.updateMultisampleRenderTarget(lt),Dt.updateRenderTargetMipmap(lt);let pt=!1;for(let bt=0,Mt=se.length;bt<Mt;bt++){const Tt=se[bt],mn=Tt.object,Ln=Tt.geometry,yn=Tt.material,Ai=Tt.group;if(yn.side===yr&&mn.layers.test(fe.layers)){const hn=yn.side;yn.side=Ei,yn.needsUpdate=!0,ao(mn,ue,fe,Ln,yn,Ai),yn.side=hn,yn.needsUpdate=!0,pt=!0}}pt===!0&&(Dt.updateMultisampleRenderTarget(lt),Dt.updateRenderTargetMipmap(lt)),O.setRenderTarget(it),O.setClearColor(ye,te),O.toneMapping=at}function es(F,se,ue){const fe=se.isScene===!0?se.overrideMaterial:null;for(let he=0,$e=F.length;he<$e;he++){const it=F[he],at=it.object,pt=it.geometry,bt=fe===null?it.material:fe,Mt=it.group;at.layers.test(ue.layers)&&ao(at,se,ue,pt,bt,Mt)}}function ao(F,se,ue,fe,he,$e){F.onBeforeRender(O,se,ue,fe,he,$e),F.modelViewMatrix.multiplyMatrices(ue.matrixWorldInverse,F.matrixWorld),F.normalMatrix.getNormalMatrix(F.modelViewMatrix),he.onBeforeRender(O,se,ue,fe,F,$e),he.transparent===!0&&he.side===yr&&he.forceSinglePass===!1?(he.side=Ei,he.needsUpdate=!0,O.renderBufferDirect(ue,se,fe,he,F,$e),he.side=Zr,he.needsUpdate=!0,O.renderBufferDirect(ue,se,fe,he,F,$e),he.side=yr):O.renderBufferDirect(ue,se,fe,he,F,$e),F.onAfterRender(O,se,ue,fe,he,$e)}function ts(F,se,ue){se.isScene!==!0&&(se=Ge);const fe=gt.get(F),he=T.state.lights,$e=T.state.shadowsArray,it=he.state.version,at=$.getParameters(F,he.state,$e,se,ue),pt=$.getProgramCacheKey(at);let bt=fe.programs;fe.environment=F.isMeshStandardMaterial?se.environment:null,fe.fog=se.fog,fe.envMap=(F.isMeshStandardMaterial?tn:$t).get(F.envMap||fe.environment),bt===void 0&&(F.addEventListener("dispose",He),bt=new Map,fe.programs=bt);let Mt=bt.get(pt);if(Mt!==void 0){if(fe.currentProgram===Mt&&fe.lightsStateVersion===it)return lo(F,at),Mt}else at.uniforms=$.getUniforms(F),F.onBuild(ue,at,O),F.onBeforeCompile(at,O),Mt=$.acquireProgram(at,pt),bt.set(pt,Mt),fe.uniforms=at.uniforms;const Tt=fe.uniforms;return(!F.isShaderMaterial&&!F.isRawShaderMaterial||F.clipping===!0)&&(Tt.clippingPlanes=rt.uniform),lo(F,at),fe.needsLights=uo(F),fe.lightsStateVersion=it,fe.needsLights&&(Tt.ambientLightColor.value=he.state.ambient,Tt.lightProbe.value=he.state.probe,Tt.directionalLights.value=he.state.directional,Tt.directionalLightShadows.value=he.state.directionalShadow,Tt.spotLights.value=he.state.spot,Tt.spotLightShadows.value=he.state.spotShadow,Tt.rectAreaLights.value=he.state.rectArea,Tt.ltc_1.value=he.state.rectAreaLTC1,Tt.ltc_2.value=he.state.rectAreaLTC2,Tt.pointLights.value=he.state.point,Tt.pointLightShadows.value=he.state.pointShadow,Tt.hemisphereLights.value=he.state.hemi,Tt.directionalShadowMap.value=he.state.directionalShadowMap,Tt.directionalShadowMatrix.value=he.state.directionalShadowMatrix,Tt.spotShadowMap.value=he.state.spotShadowMap,Tt.spotLightMatrix.value=he.state.spotLightMatrix,Tt.spotLightMap.value=he.state.spotLightMap,Tt.pointShadowMap.value=he.state.pointShadowMap,Tt.pointShadowMatrix.value=he.state.pointShadowMatrix),fe.currentProgram=Mt,fe.uniformsList=null,Mt}function ws(F){if(F.uniformsList===null){const se=F.currentProgram.getUniforms();F.uniformsList=Tc.seqWithValue(se.seq,F.uniforms)}return F.uniformsList}function lo(F,se){const ue=gt.get(F);ue.outputColorSpace=se.outputColorSpace,ue.instancing=se.instancing,ue.instancingColor=se.instancingColor,ue.skinning=se.skinning,ue.morphTargets=se.morphTargets,ue.morphNormals=se.morphNormals,ue.morphColors=se.morphColors,ue.morphTargetsCount=se.morphTargetsCount,ue.numClippingPlanes=se.numClippingPlanes,ue.numIntersection=se.numClipIntersection,ue.vertexAlphas=se.vertexAlphas,ue.vertexTangents=se.vertexTangents,ue.toneMapping=se.toneMapping}function ca(F,se,ue,fe,he){se.isScene!==!0&&(se=Ge),Dt.resetTextureUnits();const $e=se.fog,it=fe.isMeshStandardMaterial?se.environment:null,at=m===null?O.outputColorSpace:m.isXRRenderTarget===!0?m.texture.colorSpace:$n,pt=(fe.isMeshStandardMaterial?tn:$t).get(fe.envMap||it),bt=fe.vertexColors===!0&&!!ue.attributes.color&&ue.attributes.color.itemSize===4,Mt=!!ue.attributes.tangent&&(!!fe.normalMap||fe.anisotropy>0),Tt=!!ue.morphAttributes.position,mn=!!ue.morphAttributes.normal,Ln=!!ue.morphAttributes.color;let yn=Ts;fe.toneMapped&&(m===null||m.isXRRenderTarget===!0)&&(yn=O.toneMapping);const Ai=ue.morphAttributes.position||ue.morphAttributes.normal||ue.morphAttributes.color,hn=Ai!==void 0?Ai.length:0,It=gt.get(fe),br=T.state.lights;if(Ke===!0&&(Ye===!0||F!==N)){const Dn=F===N&&fe.id===me;rt.setState(fe,F,Dn)}let gn=!1;fe.version===It.__version?(It.needsLights&&It.lightsStateVersion!==br.state.version||It.outputColorSpace!==at||he.isInstancedMesh&&It.instancing===!1||!he.isInstancedMesh&&It.instancing===!0||he.isSkinnedMesh&&It.skinning===!1||!he.isSkinnedMesh&&It.skinning===!0||he.isInstancedMesh&&It.instancingColor===!0&&he.instanceColor===null||he.isInstancedMesh&&It.instancingColor===!1&&he.instanceColor!==null||It.envMap!==pt||fe.fog===!0&&It.fog!==$e||It.numClippingPlanes!==void 0&&(It.numClippingPlanes!==rt.numPlanes||It.numIntersection!==rt.numIntersection)||It.vertexAlphas!==bt||It.vertexTangents!==Mt||It.morphTargets!==Tt||It.morphNormals!==mn||It.morphColors!==Ln||It.toneMapping!==yn||mt.isWebGL2===!0&&It.morphTargetsCount!==hn)&&(gn=!0):(gn=!0,It.__version=fe.version);let _n=It.currentProgram;gn===!0&&(_n=ts(fe,se,he));let Oi=!1,pi=!1,Rs=!1;const Pn=_n.getUniforms(),Zn=It.uniforms;if(vt.useProgram(_n.program)&&(Oi=!0,pi=!0,Rs=!0),fe.id!==me&&(me=fe.id,pi=!0),Oi||N!==F){Pn.setValue(oe,"projectionMatrix",F.projectionMatrix),Pn.setValue(oe,"viewMatrix",F.matrixWorldInverse);const Dn=Pn.map.cameraPosition;Dn!==void 0&&Dn.setValue(oe,De.setFromMatrixPosition(F.matrixWorld)),mt.logarithmicDepthBuffer&&Pn.setValue(oe,"logDepthBufFC",2/(Math.log(F.far+1)/Math.LN2)),(fe.isMeshPhongMaterial||fe.isMeshToonMaterial||fe.isMeshLambertMaterial||fe.isMeshBasicMaterial||fe.isMeshStandardMaterial||fe.isShaderMaterial)&&Pn.setValue(oe,"isOrthographic",F.isOrthographicCamera===!0),N!==F&&(N=F,pi=!0,Rs=!0)}if(he.isSkinnedMesh){Pn.setOptional(oe,he,"bindMatrix"),Pn.setOptional(oe,he,"bindMatrixInverse");const Dn=he.skeleton;Dn&&(mt.floatVertexTextures?(Dn.boneTexture===null&&Dn.computeBoneTexture(),Pn.setValue(oe,"boneTexture",Dn.boneTexture,Dt),Pn.setValue(oe,"boneTextureSize",Dn.boneTextureSize)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}const wr=ue.morphAttributes;if((wr.position!==void 0||wr.normal!==void 0||wr.color!==void 0&&mt.isWebGL2===!0)&&ct.update(he,ue,_n),(pi||It.receiveShadow!==he.receiveShadow)&&(It.receiveShadow=he.receiveShadow,Pn.setValue(oe,"receiveShadow",he.receiveShadow)),fe.isMeshGouraudMaterial&&fe.envMap!==null&&(Zn.envMap.value=pt,Zn.flipEnvMap.value=pt.isCubeTexture&&pt.isRenderTargetTexture===!1?-1:1),pi&&(Pn.setValue(oe,"toneMappingExposure",O.toneMappingExposure),It.needsLights&&co(Zn,Rs),$e&&fe.fog===!0&&Pe.refreshFogUniforms(Zn,$e),Pe.refreshMaterialUniforms(Zn,fe,ge,we,lt),Tc.upload(oe,ws(It),Zn,Dt)),fe.isShaderMaterial&&fe.uniformsNeedUpdate===!0&&(Tc.upload(oe,ws(It),Zn,Dt),fe.uniformsNeedUpdate=!1),fe.isSpriteMaterial&&Pn.setValue(oe,"center",he.center),Pn.setValue(oe,"modelViewMatrix",he.modelViewMatrix),Pn.setValue(oe,"normalMatrix",he.normalMatrix),Pn.setValue(oe,"modelMatrix",he.matrixWorld),fe.isShaderMaterial||fe.isRawShaderMaterial){const Dn=fe.uniformsGroups;for(let Rr=0,fo=Dn.length;Rr<fo;Rr++)if(mt.isWebGL2){const ns=Dn[Rr];ut.update(ns,_n),ut.bind(ns,_n)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return _n}function co(F,se){F.ambientLightColor.needsUpdate=se,F.lightProbe.needsUpdate=se,F.directionalLights.needsUpdate=se,F.directionalLightShadows.needsUpdate=se,F.pointLights.needsUpdate=se,F.pointLightShadows.needsUpdate=se,F.spotLights.needsUpdate=se,F.spotLightShadows.needsUpdate=se,F.rectAreaLights.needsUpdate=se,F.hemisphereLights.needsUpdate=se}function uo(F){return F.isMeshLambertMaterial||F.isMeshToonMaterial||F.isMeshPhongMaterial||F.isMeshStandardMaterial||F.isShadowMaterial||F.isShaderMaterial&&F.lights===!0}this.getActiveCubeFace=function(){return W},this.getActiveMipmapLevel=function(){return J},this.getRenderTarget=function(){return m},this.setRenderTargetTextures=function(F,se,ue){gt.get(F.texture).__webglTexture=se,gt.get(F.depthTexture).__webglTexture=ue;const fe=gt.get(F);fe.__hasExternalTextures=!0,fe.__hasExternalTextures&&(fe.__autoAllocateDepthBuffer=ue===void 0,fe.__autoAllocateDepthBuffer||tt.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),fe.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(F,se){const ue=gt.get(F);ue.__webglFramebuffer=se,ue.__useDefaultFramebuffer=se===void 0},this.setRenderTarget=function(F,se=0,ue=0){m=F,W=se,J=ue;let fe=!0,he=null,$e=!1,it=!1;if(F){const pt=gt.get(F);pt.__useDefaultFramebuffer!==void 0?(vt.bindFramebuffer(oe.FRAMEBUFFER,null),fe=!1):pt.__webglFramebuffer===void 0?Dt.setupRenderTarget(F):pt.__hasExternalTextures&&Dt.rebindTextures(F,gt.get(F.texture).__webglTexture,gt.get(F.depthTexture).__webglTexture);const bt=F.texture;(bt.isData3DTexture||bt.isDataArrayTexture||bt.isCompressedArrayTexture)&&(it=!0);const Mt=gt.get(F).__webglFramebuffer;F.isWebGLCubeRenderTarget?(Array.isArray(Mt[se])?he=Mt[se][ue]:he=Mt[se],$e=!0):mt.isWebGL2&&F.samples>0&&Dt.useMultisampledRTT(F)===!1?he=gt.get(F).__webglMultisampledFramebuffer:Array.isArray(Mt)?he=Mt[ue]:he=Mt,X.copy(F.viewport),Ee.copy(F.scissor),Re=F.scissorTest}else X.copy(be).multiplyScalar(ge).floor(),Ee.copy(ne).multiplyScalar(ge).floor(),Re=pe;if(vt.bindFramebuffer(oe.FRAMEBUFFER,he)&&mt.drawBuffers&&fe&&vt.drawBuffers(F,he),vt.viewport(X),vt.scissor(Ee),vt.setScissorTest(Re),$e){const pt=gt.get(F.texture);oe.framebufferTexture2D(oe.FRAMEBUFFER,oe.COLOR_ATTACHMENT0,oe.TEXTURE_CUBE_MAP_POSITIVE_X+se,pt.__webglTexture,ue)}else if(it){const pt=gt.get(F.texture),bt=se||0;oe.framebufferTextureLayer(oe.FRAMEBUFFER,oe.COLOR_ATTACHMENT0,pt.__webglTexture,ue||0,bt)}me=-1},this.readRenderTargetPixels=function(F,se,ue,fe,he,$e,it){if(!(F&&F.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let at=gt.get(F).__webglFramebuffer;if(F.isWebGLCubeRenderTarget&&it!==void 0&&(at=at[it]),at){vt.bindFramebuffer(oe.FRAMEBUFFER,at);try{const pt=F.texture,bt=pt.format,Mt=pt.type;if(bt!==ji&&Bt.convert(bt)!==oe.getParameter(oe.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const Tt=Mt===Ja&&(tt.has("EXT_color_buffer_half_float")||mt.isWebGL2&&tt.has("EXT_color_buffer_float"));if(Mt!==Es&&Bt.convert(Mt)!==oe.getParameter(oe.IMPLEMENTATION_COLOR_READ_TYPE)&&!(Mt===jr&&(mt.isWebGL2||tt.has("OES_texture_float")||tt.has("WEBGL_color_buffer_float")))&&!Tt){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}se>=0&&se<=F.width-fe&&ue>=0&&ue<=F.height-he&&oe.readPixels(se,ue,fe,he,Bt.convert(bt),Bt.convert(Mt),$e)}finally{const pt=m!==null?gt.get(m).__webglFramebuffer:null;vt.bindFramebuffer(oe.FRAMEBUFFER,pt)}}},this.copyFramebufferToTexture=function(F,se,ue=0){const fe=Math.pow(2,-ue),he=Math.floor(se.image.width*fe),$e=Math.floor(se.image.height*fe);Dt.setTexture2D(se,0),oe.copyTexSubImage2D(oe.TEXTURE_2D,ue,0,0,F.x,F.y,he,$e),vt.unbindTexture()},this.copyTextureToTexture=function(F,se,ue,fe=0){const he=se.image.width,$e=se.image.height,it=Bt.convert(ue.format),at=Bt.convert(ue.type);Dt.setTexture2D(ue,0),oe.pixelStorei(oe.UNPACK_FLIP_Y_WEBGL,ue.flipY),oe.pixelStorei(oe.UNPACK_PREMULTIPLY_ALPHA_WEBGL,ue.premultiplyAlpha),oe.pixelStorei(oe.UNPACK_ALIGNMENT,ue.unpackAlignment),se.isDataTexture?oe.texSubImage2D(oe.TEXTURE_2D,fe,F.x,F.y,he,$e,it,at,se.image.data):se.isCompressedTexture?oe.compressedTexSubImage2D(oe.TEXTURE_2D,fe,F.x,F.y,se.mipmaps[0].width,se.mipmaps[0].height,it,se.mipmaps[0].data):oe.texSubImage2D(oe.TEXTURE_2D,fe,F.x,F.y,it,at,se.image),fe===0&&ue.generateMipmaps&&oe.generateMipmap(oe.TEXTURE_2D),vt.unbindTexture()},this.copyTextureToTexture3D=function(F,se,ue,fe,he=0){if(O.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const $e=F.max.x-F.min.x+1,it=F.max.y-F.min.y+1,at=F.max.z-F.min.z+1,pt=Bt.convert(fe.format),bt=Bt.convert(fe.type);let Mt;if(fe.isData3DTexture)Dt.setTexture3D(fe,0),Mt=oe.TEXTURE_3D;else if(fe.isDataArrayTexture)Dt.setTexture2DArray(fe,0),Mt=oe.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}oe.pixelStorei(oe.UNPACK_FLIP_Y_WEBGL,fe.flipY),oe.pixelStorei(oe.UNPACK_PREMULTIPLY_ALPHA_WEBGL,fe.premultiplyAlpha),oe.pixelStorei(oe.UNPACK_ALIGNMENT,fe.unpackAlignment);const Tt=oe.getParameter(oe.UNPACK_ROW_LENGTH),mn=oe.getParameter(oe.UNPACK_IMAGE_HEIGHT),Ln=oe.getParameter(oe.UNPACK_SKIP_PIXELS),yn=oe.getParameter(oe.UNPACK_SKIP_ROWS),Ai=oe.getParameter(oe.UNPACK_SKIP_IMAGES),hn=ue.isCompressedTexture?ue.mipmaps[0]:ue.image;oe.pixelStorei(oe.UNPACK_ROW_LENGTH,hn.width),oe.pixelStorei(oe.UNPACK_IMAGE_HEIGHT,hn.height),oe.pixelStorei(oe.UNPACK_SKIP_PIXELS,F.min.x),oe.pixelStorei(oe.UNPACK_SKIP_ROWS,F.min.y),oe.pixelStorei(oe.UNPACK_SKIP_IMAGES,F.min.z),ue.isDataTexture||ue.isData3DTexture?oe.texSubImage3D(Mt,he,se.x,se.y,se.z,$e,it,at,pt,bt,hn.data):ue.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),oe.compressedTexSubImage3D(Mt,he,se.x,se.y,se.z,$e,it,at,pt,hn.data)):oe.texSubImage3D(Mt,he,se.x,se.y,se.z,$e,it,at,pt,bt,hn),oe.pixelStorei(oe.UNPACK_ROW_LENGTH,Tt),oe.pixelStorei(oe.UNPACK_IMAGE_HEIGHT,mn),oe.pixelStorei(oe.UNPACK_SKIP_PIXELS,Ln),oe.pixelStorei(oe.UNPACK_SKIP_ROWS,yn),oe.pixelStorei(oe.UNPACK_SKIP_IMAGES,Ai),he===0&&fe.generateMipmaps&&oe.generateMipmap(Mt),vt.unbindTexture()},this.initTexture=function(F){F.isCubeTexture?Dt.setTextureCube(F,0):F.isData3DTexture?Dt.setTexture3D(F,0):F.isDataArrayTexture||F.isCompressedArrayTexture?Dt.setTexture2DArray(F,0):Dt.setTexture2D(F,0),vt.unbindTexture()},this.resetState=function(){W=0,J=0,m=null,vt.reset(),St.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Kr}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=e===dh?"display-p3":"srgb",t.unpackColorSpace=an.workingColorSpace===Ic?"display-p3":"srgb"}get physicallyCorrectLights(){return console.warn("THREE.WebGLRenderer: The property .physicallyCorrectLights has been removed. Set renderer.useLegacyLights instead."),!this.useLegacyLights}set physicallyCorrectLights(e){console.warn("THREE.WebGLRenderer: The property .physicallyCorrectLights has been removed. Set renderer.useLegacyLights instead."),this.useLegacyLights=!e}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace===bn?to:Sg}set outputEncoding(e){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=e===to?bn:$n}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(e){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=e}}class DR extends zg{}DR.prototype.isWebGL1Renderer=!0;class IR extends En{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t}}class NR{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=th,this.updateRange={offset:0,count:-1},this.version=0,this.uuid=lr()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let r=0,a=this.stride;r<a;r++)this.array[e+r]=t.array[n+r];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=lr()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=lr()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const ui=new re;class xh{constructor(e,t,n,r=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=r}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)ui.fromBufferAttribute(this,t),ui.applyMatrix4(e),this.setXYZ(t,ui.x,ui.y,ui.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)ui.fromBufferAttribute(this,t),ui.applyNormalMatrix(e),this.setXYZ(t,ui.x,ui.y,ui.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)ui.fromBufferAttribute(this,t),ui.transformDirection(e),this.setXYZ(t,ui.x,ui.y,ui.z);return this}setX(e,t){return this.normalized&&(t=fn(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=fn(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=fn(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=fn(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=Sr(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=Sr(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=Sr(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=Sr(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=fn(t,this.array),n=fn(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=fn(t,this.array),n=fn(n,this.array),r=fn(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=r,this}setXYZW(e,t,n,r,a){return e=e*this.data.stride+this.offset,this.normalized&&(t=fn(t,this.array),n=fn(n,this.array),r=fn(r,this.array),a=fn(a,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=r,this.data.array[e+3]=a,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const r=n*this.data.stride+this.offset;for(let a=0;a<this.itemSize;a++)t.push(this.data.array[r+a])}return new di(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new xh(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const r=n*this.data.stride+this.offset;for(let a=0;a<this.itemSize;a++)t.push(this.data.array[r+a])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}const Hm=new re,zm=new dn,Gm=new dn,UR=new re,km=new qt,gc=new re,Mf=new Tr,Vm=new qt,Tf=new Nc;class OR extends $i{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=Tp,this.bindMatrix=new qt,this.bindMatrixInverse=new qt,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){const e=this.geometry;this.boundingBox===null&&(this.boundingBox=new Jr),this.boundingBox.makeEmpty();const t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,gc),this.boundingBox.expandByPoint(gc)}computeBoundingSphere(){const e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new Tr),this.boundingSphere.makeEmpty();const t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,gc),this.boundingSphere.expandByPoint(gc)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}raycast(e,t){const n=this.material,r=this.matrixWorld;n!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Mf.copy(this.boundingSphere),Mf.applyMatrix4(r),e.ray.intersectsSphere(Mf)!==!1&&(Vm.copy(r).invert(),Tf.copy(e.ray).applyMatrix4(Vm),!(this.boundingBox!==null&&Tf.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(e,t,Tf)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){const e=new dn,t=this.geometry.attributes.skinWeight;for(let n=0,r=t.count;n<r;n++){e.fromBufferAttribute(t,n);const a=1/e.manhattanLength();a!==1/0?e.multiplyScalar(a):e.set(1,0,0,0),t.setXYZW(n,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===Tp?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===qM?this.bindMatrixInverse.copy(this.bindMatrix).invert():console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){const n=this.skeleton,r=this.geometry;zm.fromBufferAttribute(r.attributes.skinIndex,e),Gm.fromBufferAttribute(r.attributes.skinWeight,e),Hm.copy(t).applyMatrix4(this.bindMatrix),t.set(0,0,0);for(let a=0;a<4;a++){const c=Gm.getComponent(a);if(c!==0){const u=zm.getComponent(a);km.multiplyMatrices(n.bones[u].matrixWorld,n.boneInverses[u]),t.addScaledVector(UR.copy(Hm).applyMatrix4(km),c)}}return t.applyMatrix4(this.bindMatrixInverse)}boneTransform(e,t){return console.warn("THREE.SkinnedMesh: .boneTransform() was renamed to .applyBoneTransform() in r151."),this.applyBoneTransform(e,t)}}class Gg extends En{constructor(){super(),this.isBone=!0,this.type="Bone"}}class FR extends Kn{constructor(e=null,t=1,n=1,r,a,c,u,d,p=Xn,g=Xn,v,x){super(null,c,u,d,p,g,r,a,v,x),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Wm=new qt,BR=new qt;class yh{constructor(e=[],t=[]){this.uuid=lr(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.boneTexture=null,this.boneTextureSize=0,this.init()}init(){const e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,r=this.bones.length;n<r;n++)this.boneInverses.push(new qt)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){const n=new qt;this.bones[e]&&n.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(n)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&n.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}}update(){const e=this.bones,t=this.boneInverses,n=this.boneMatrices,r=this.boneTexture;for(let a=0,c=e.length;a<c;a++){const u=e[a]?e[a].matrixWorld:BR;Wm.multiplyMatrices(u,t[a]),Wm.toArray(n,a*16)}r!==null&&(r.needsUpdate=!0)}clone(){return new yh(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Tg(e),e=Math.max(e,4);const t=new Float32Array(e*e*4);t.set(this.boneMatrices);const n=new FR(t,e,e,ji,jr);return n.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=n,this.boneTextureSize=e,this}getBoneByName(e){for(let t=0,n=this.bones.length;t<n;t++){const r=this.bones[t];if(r.name===e)return r}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let n=0,r=e.bones.length;n<r;n++){const a=e.bones[n];let c=t[a];c===void 0&&(console.warn("THREE.Skeleton: No bone found with UUID:",a),c=new Gg),this.bones.push(c),this.boneInverses.push(new qt().fromArray(e.boneInverses[n]))}return this.init(),this}toJSON(){const e={metadata:{version:4.6,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;const t=this.bones,n=this.boneInverses;for(let r=0,a=t.length;r<a;r++){const c=t[r];e.bones.push(c.uuid);const u=n[r];e.boneInverses.push(u.toArray())}return e}}class sh extends di{constructor(e,t,n,r=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=r}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const ko=new qt,Xm=new qt,_c=[],qm=new Jr,HR=new qt,ka=new $i,Va=new Tr;class zR extends $i{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new sh(new Float32Array(n*16),16),this.instanceColor=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let r=0;r<n;r++)this.setMatrixAt(r,HR)}computeBoundingBox(){const e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new Jr),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,ko),qm.copy(e.boundingBox).applyMatrix4(ko),this.boundingBox.union(qm)}computeBoundingSphere(){const e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new Tr),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,ko),Va.copy(e.boundingSphere).applyMatrix4(ko),this.boundingSphere.union(Va)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}raycast(e,t){const n=this.matrixWorld,r=this.count;if(ka.geometry=this.geometry,ka.material=this.material,ka.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Va.copy(this.boundingSphere),Va.applyMatrix4(n),e.ray.intersectsSphere(Va)!==!1))for(let a=0;a<r;a++){this.getMatrixAt(a,ko),Xm.multiplyMatrices(n,ko),ka.matrixWorld=Xm,ka.raycast(e,_c);for(let c=0,u=_c.length;c<u;c++){const d=_c[c];d.instanceId=a,d.object=this,t.push(d)}_c.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new sh(new Float32Array(this.instanceMatrix.count*3),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"})}}class kg extends Mr{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Rt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const Ym=new re,jm=new re,Km=new qt,Ef=new Nc,vc=new Tr;class Sh extends En{constructor(e=new Er,t=new kg){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[0];for(let r=1,a=t.count;r<a;r++)Ym.fromBufferAttribute(t,r-1),jm.fromBufferAttribute(t,r),n[r]=n[r-1],n[r]+=Ym.distanceTo(jm);e.setAttribute("lineDistance",new $r(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const n=this.geometry,r=this.matrixWorld,a=e.params.Line.threshold,c=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),vc.copy(n.boundingSphere),vc.applyMatrix4(r),vc.radius+=a,e.ray.intersectsSphere(vc)===!1)return;Km.copy(r).invert(),Ef.copy(e.ray).applyMatrix4(Km);const u=a/((this.scale.x+this.scale.y+this.scale.z)/3),d=u*u,p=new re,g=new re,v=new re,x=new re,E=this.isLineSegments?2:1,w=n.index,T=n.attributes.position;if(w!==null){const M=Math.max(0,c.start),k=Math.min(w.count,c.start+c.count);for(let O=M,B=k-1;O<B;O+=E){const W=w.getX(O),J=w.getX(O+1);if(p.fromBufferAttribute(T,W),g.fromBufferAttribute(T,J),Ef.distanceSqToSegment(p,g,x,v)>d)continue;x.applyMatrix4(this.matrixWorld);const me=e.ray.origin.distanceTo(x);me<e.near||me>e.far||t.push({distance:me,point:v.clone().applyMatrix4(this.matrixWorld),index:O,face:null,faceIndex:null,object:this})}}else{const M=Math.max(0,c.start),k=Math.min(T.count,c.start+c.count);for(let O=M,B=k-1;O<B;O+=E){if(p.fromBufferAttribute(T,O),g.fromBufferAttribute(T,O+1),Ef.distanceSqToSegment(p,g,x,v)>d)continue;x.applyMatrix4(this.matrixWorld);const J=e.ray.origin.distanceTo(x);J<e.near||J>e.far||t.push({distance:J,point:v.clone().applyMatrix4(this.matrixWorld),index:O,face:null,faceIndex:null,object:this})}}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const r=t[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let a=0,c=r.length;a<c;a++){const u=r[a].name||String(a);this.morphTargetInfluences.push(0),this.morphTargetDictionary[u]=a}}}}}const $m=new re,Zm=new re;class GR extends Sh{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[];for(let r=0,a=t.count;r<a;r+=2)$m.fromBufferAttribute(t,r),Zm.fromBufferAttribute(t,r+1),n[r]=r===0?0:n[r-1],n[r+1]=n[r]+$m.distanceTo(Zm);e.setAttribute("lineDistance",new $r(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class kR extends Sh{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}}class Vg extends Mr{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Rt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const Jm=new qt,oh=new Nc,xc=new Tr,yc=new re;class VR extends En{constructor(e=new Er,t=new Vg){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const n=this.geometry,r=this.matrixWorld,a=e.params.Points.threshold,c=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),xc.copy(n.boundingSphere),xc.applyMatrix4(r),xc.radius+=a,e.ray.intersectsSphere(xc)===!1)return;Jm.copy(r).invert(),oh.copy(e.ray).applyMatrix4(Jm);const u=a/((this.scale.x+this.scale.y+this.scale.z)/3),d=u*u,p=n.index,v=n.attributes.position;if(p!==null){const x=Math.max(0,c.start),E=Math.min(p.count,c.start+c.count);for(let w=x,C=E;w<C;w++){const T=p.getX(w);yc.fromBufferAttribute(v,T),Qm(yc,T,d,r,e,t,this)}}else{const x=Math.max(0,c.start),E=Math.min(v.count,c.start+c.count);for(let w=x,C=E;w<C;w++)yc.fromBufferAttribute(v,w),Qm(yc,w,d,r,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const r=t[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let a=0,c=r.length;a<c;a++){const u=r[a].name||String(a);this.morphTargetInfluences.push(0),this.morphTargetDictionary[u]=a}}}}}function Qm(s,e,t,n,r,a,c){const u=oh.distanceSqToPoint(s);if(u<t){const d=new re;oh.closestPointToPoint(s,d),d.applyMatrix4(n);const p=r.ray.origin.distanceTo(d);if(p<r.near||p>r.far)return;a.push({distance:p,distanceToRay:Math.sqrt(u),point:d,index:e,face:null,object:c})}}class Mh extends Mr{constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new Rt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Rt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Mg,this.normalScale=new Qt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class bs extends Mh{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new Qt(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return ii(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new Rt(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Rt(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Rt(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}}function Sc(s,e,t){return!s||!t&&s.constructor===e?s:typeof e.BYTES_PER_ELEMENT=="number"?new e(s):Array.prototype.slice.call(s)}function WR(s){return ArrayBuffer.isView(s)&&!(s instanceof DataView)}function XR(s){function e(r,a){return s[r]-s[a]}const t=s.length,n=new Array(t);for(let r=0;r!==t;++r)n[r]=r;return n.sort(e),n}function eg(s,e,t){const n=s.length,r=new s.constructor(n);for(let a=0,c=0;c!==n;++a){const u=t[a]*e;for(let d=0;d!==e;++d)r[c++]=s[u+d]}return r}function Wg(s,e,t,n){let r=1,a=s[0];for(;a!==void 0&&a[n]===void 0;)a=s[r++];if(a===void 0)return;let c=a[n];if(c!==void 0)if(Array.isArray(c))do c=a[n],c!==void 0&&(e.push(a.time),t.push.apply(t,c)),a=s[r++];while(a!==void 0);else if(c.toArray!==void 0)do c=a[n],c!==void 0&&(e.push(a.time),c.toArray(t,t.length)),a=s[r++];while(a!==void 0);else do c=a[n],c!==void 0&&(e.push(a.time),t.push(c)),a=s[r++];while(a!==void 0)}class il{constructor(e,t,n,r){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=r!==void 0?r:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){const t=this.parameterPositions;let n=this._cachedIndex,r=t[n],a=t[n-1];e:{t:{let c;n:{i:if(!(e<r)){for(let u=n+2;;){if(r===void 0){if(e<a)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===u)break;if(a=r,r=t[++n],e<r)break t}c=t.length;break n}if(!(e>=a)){const u=t[1];e<u&&(n=2,a=u);for(let d=n-2;;){if(a===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===d)break;if(r=a,a=t[--n-1],e>=a)break t}c=n,n=0;break n}break e}for(;n<c;){const u=n+c>>>1;e<t[u]?c=u:n=u+1}if(r=t[n],a=t[n-1],a===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(r===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,a,r)}return this.interpolate_(n,a,e,r)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){const t=this.resultBuffer,n=this.sampleValues,r=this.valueSize,a=e*r;for(let c=0;c!==r;++c)t[c]=n[a+c];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}}class qR extends il{constructor(e,t,n,r){super(e,t,n,r),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Kp,endingEnd:Kp}}intervalChanged_(e,t,n){const r=this.parameterPositions;let a=e-2,c=e+1,u=r[a],d=r[c];if(u===void 0)switch(this.getSettings_().endingStart){case $p:a=e,u=2*t-n;break;case Zp:a=r.length-2,u=t+r[a]-r[a+1];break;default:a=e,u=n}if(d===void 0)switch(this.getSettings_().endingEnd){case $p:c=e,d=2*n-t;break;case Zp:c=1,d=n+r[1]-r[0];break;default:c=e-1,d=t}const p=(n-t)*.5,g=this.valueSize;this._weightPrev=p/(t-u),this._weightNext=p/(d-n),this._offsetPrev=a*g,this._offsetNext=c*g}interpolate_(e,t,n,r){const a=this.resultBuffer,c=this.sampleValues,u=this.valueSize,d=e*u,p=d-u,g=this._offsetPrev,v=this._offsetNext,x=this._weightPrev,E=this._weightNext,w=(n-t)/(r-t),C=w*w,T=C*w,M=-x*T+2*x*C-x*w,k=(1+x)*T+(-1.5-2*x)*C+(-.5+x)*w+1,O=(-1-E)*T+(1.5+E)*C+.5*w,B=E*T-E*C;for(let W=0;W!==u;++W)a[W]=M*c[g+W]+k*c[p+W]+O*c[d+W]+B*c[v+W];return a}}class YR extends il{constructor(e,t,n,r){super(e,t,n,r)}interpolate_(e,t,n,r){const a=this.resultBuffer,c=this.sampleValues,u=this.valueSize,d=e*u,p=d-u,g=(n-t)/(r-t),v=1-g;for(let x=0;x!==u;++x)a[x]=c[p+x]*v+c[d+x]*g;return a}}class jR extends il{constructor(e,t,n,r){super(e,t,n,r)}interpolate_(e){return this.copySampleValue_(e-1)}}class Ar{constructor(e,t,n,r){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=Sc(t,this.TimeBufferType),this.values=Sc(n,this.ValueBufferType),this.setInterpolation(r||this.DefaultInterpolation)}static toJSON(e){const t=e.constructor;let n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:Sc(e.times,Array),values:Sc(e.values,Array)};const r=e.getInterpolation();r!==e.DefaultInterpolation&&(n.interpolation=r)}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new jR(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new YR(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new qR(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case Qa:t=this.InterpolantFactoryMethodDiscrete;break;case Jo:t=this.InterpolantFactoryMethodLinear;break;case Zu:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){const n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Qa;case this.InterpolantFactoryMethodLinear:return Jo;case this.InterpolantFactoryMethodSmooth:return Zu}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){const t=this.times;for(let n=0,r=t.length;n!==r;++n)t[n]+=e}return this}scale(e){if(e!==1){const t=this.times;for(let n=0,r=t.length;n!==r;++n)t[n]*=e}return this}trim(e,t){const n=this.times,r=n.length;let a=0,c=r-1;for(;a!==r&&n[a]<e;)++a;for(;c!==-1&&n[c]>t;)--c;if(++c,a!==0||c!==r){a>=c&&(c=Math.max(c,1),a=c-1);const u=this.getValueSize();this.times=n.slice(a,c),this.values=this.values.slice(a*u,c*u)}return this}validate(){let e=!0;const t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);const n=this.times,r=this.values,a=n.length;a===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let c=null;for(let u=0;u!==a;u++){const d=n[u];if(typeof d=="number"&&isNaN(d)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,u,d),e=!1;break}if(c!==null&&c>d){console.error("THREE.KeyframeTrack: Out of order keys.",this,u,d,c),e=!1;break}c=d}if(r!==void 0&&WR(r))for(let u=0,d=r.length;u!==d;++u){const p=r[u];if(isNaN(p)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,u,p),e=!1;break}}return e}optimize(){const e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),r=this.getInterpolation()===Zu,a=e.length-1;let c=1;for(let u=1;u<a;++u){let d=!1;const p=e[u],g=e[u+1];if(p!==g&&(u!==1||p!==e[0]))if(r)d=!0;else{const v=u*n,x=v-n,E=v+n;for(let w=0;w!==n;++w){const C=t[v+w];if(C!==t[x+w]||C!==t[E+w]){d=!0;break}}}if(d){if(u!==c){e[c]=e[u];const v=u*n,x=c*n;for(let E=0;E!==n;++E)t[x+E]=t[v+E]}++c}}if(a>0){e[c]=e[a];for(let u=a*n,d=c*n,p=0;p!==n;++p)t[d+p]=t[u+p];++c}return c!==e.length?(this.times=e.slice(0,c),this.values=t.slice(0,c*n)):(this.times=e,this.values=t),this}clone(){const e=this.times.slice(),t=this.values.slice(),n=this.constructor,r=new n(this.name,e,t);return r.createInterpolant=this.createInterpolant,r}}Ar.prototype.TimeBufferType=Float32Array;Ar.prototype.ValueBufferType=Float32Array;Ar.prototype.DefaultInterpolation=Jo;class oa extends Ar{}oa.prototype.ValueTypeName="bool";oa.prototype.ValueBufferType=Array;oa.prototype.DefaultInterpolation=Qa;oa.prototype.InterpolantFactoryMethodLinear=void 0;oa.prototype.InterpolantFactoryMethodSmooth=void 0;class Xg extends Ar{}Xg.prototype.ValueTypeName="color";class ta extends Ar{}ta.prototype.ValueTypeName="number";class KR extends il{constructor(e,t,n,r){super(e,t,n,r)}interpolate_(e,t,n,r){const a=this.resultBuffer,c=this.sampleValues,u=this.valueSize,d=(n-t)/(r-t);let p=e*u;for(let g=p+u;p!==g;p+=4)As.slerpFlat(a,0,c,p-u,c,p,d);return a}}class so extends Ar{InterpolantFactoryMethodLinear(e){return new KR(this.times,this.values,this.getValueSize(),e)}}so.prototype.ValueTypeName="quaternion";so.prototype.DefaultInterpolation=Jo;so.prototype.InterpolantFactoryMethodSmooth=void 0;class aa extends Ar{}aa.prototype.ValueTypeName="string";aa.prototype.ValueBufferType=Array;aa.prototype.DefaultInterpolation=Qa;aa.prototype.InterpolantFactoryMethodLinear=void 0;aa.prototype.InterpolantFactoryMethodSmooth=void 0;class na extends Ar{}na.prototype.ValueTypeName="vector";class $R{constructor(e,t=-1,n,r=nT){this.name=e,this.tracks=n,this.duration=t,this.blendMode=r,this.uuid=lr(),this.duration<0&&this.resetDuration()}static parse(e){const t=[],n=e.tracks,r=1/(e.fps||1);for(let c=0,u=n.length;c!==u;++c)t.push(JR(n[c]).scale(r));const a=new this(e.name,e.duration,t,e.blendMode);return a.uuid=e.uuid,a}static toJSON(e){const t=[],n=e.tracks,r={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode};for(let a=0,c=n.length;a!==c;++a)t.push(Ar.toJSON(n[a]));return r}static CreateFromMorphTargetSequence(e,t,n,r){const a=t.length,c=[];for(let u=0;u<a;u++){let d=[],p=[];d.push((u+a-1)%a,u,(u+1)%a),p.push(0,1,0);const g=XR(d);d=eg(d,1,g),p=eg(p,1,g),!r&&d[0]===0&&(d.push(a),p.push(p[0])),c.push(new ta(".morphTargetInfluences["+t[u].name+"]",d,p).scale(1/n))}return new this(e,-1,c)}static findByName(e,t){let n=e;if(!Array.isArray(e)){const r=e;n=r.geometry&&r.geometry.animations||r.animations}for(let r=0;r<n.length;r++)if(n[r].name===t)return n[r];return null}static CreateClipsFromMorphTargetSequences(e,t,n){const r={},a=/^([\w-]*?)([\d]+)$/;for(let u=0,d=e.length;u<d;u++){const p=e[u],g=p.name.match(a);if(g&&g.length>1){const v=g[1];let x=r[v];x||(r[v]=x=[]),x.push(p)}}const c=[];for(const u in r)c.push(this.CreateFromMorphTargetSequence(u,r[u],t,n));return c}static parseAnimation(e,t){if(!e)return console.error("THREE.AnimationClip: No animation in JSONLoader data."),null;const n=function(v,x,E,w,C){if(E.length!==0){const T=[],M=[];Wg(E,T,M,w),T.length!==0&&C.push(new v(x,T,M))}},r=[],a=e.name||"default",c=e.fps||30,u=e.blendMode;let d=e.length||-1;const p=e.hierarchy||[];for(let v=0;v<p.length;v++){const x=p[v].keys;if(!(!x||x.length===0))if(x[0].morphTargets){const E={};let w;for(w=0;w<x.length;w++)if(x[w].morphTargets)for(let C=0;C<x[w].morphTargets.length;C++)E[x[w].morphTargets[C]]=-1;for(const C in E){const T=[],M=[];for(let k=0;k!==x[w].morphTargets.length;++k){const O=x[w];T.push(O.time),M.push(O.morphTarget===C?1:0)}r.push(new ta(".morphTargetInfluence["+C+"]",T,M))}d=E.length*c}else{const E=".bones["+t[v].name+"]";n(na,E+".position",x,"pos",r),n(so,E+".quaternion",x,"rot",r),n(na,E+".scale",x,"scl",r)}}return r.length===0?null:new this(a,d,r,u)}resetDuration(){const e=this.tracks;let t=0;for(let n=0,r=e.length;n!==r;++n){const a=this.tracks[n];t=Math.max(t,a.times[a.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){const e=[];for(let t=0;t<this.tracks.length;t++)e.push(this.tracks[t].clone());return new this.constructor(this.name,this.duration,e,this.blendMode)}toJSON(){return this.constructor.toJSON(this)}}function ZR(s){switch(s.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return ta;case"vector":case"vector2":case"vector3":case"vector4":return na;case"color":return Xg;case"quaternion":return so;case"bool":case"boolean":return oa;case"string":return aa}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+s)}function JR(s){if(s.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");const e=ZR(s.type);if(s.times===void 0){const t=[],n=[];Wg(s.keys,t,n,"value"),s.times=t,s.values=n}return e.parse!==void 0?e.parse(s):new e(s.name,s.times,s.values,s.interpolation)}const ia={enabled:!1,files:{},add:function(s,e){this.enabled!==!1&&(this.files[s]=e)},get:function(s){if(this.enabled!==!1)return this.files[s]},remove:function(s){delete this.files[s]},clear:function(){this.files={}}};class qg{constructor(e,t,n){const r=this;let a=!1,c=0,u=0,d;const p=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.itemStart=function(g){u++,a===!1&&r.onStart!==void 0&&r.onStart(g,c,u),a=!0},this.itemEnd=function(g){c++,r.onProgress!==void 0&&r.onProgress(g,c,u),c===u&&(a=!1,r.onLoad!==void 0&&r.onLoad())},this.itemError=function(g){r.onError!==void 0&&r.onError(g)},this.resolveURL=function(g){return d?d(g):g},this.setURLModifier=function(g){return d=g,this},this.addHandler=function(g,v){return p.push(g,v),this},this.removeHandler=function(g){const v=p.indexOf(g);return v!==-1&&p.splice(v,2),this},this.getHandler=function(g){for(let v=0,x=p.length;v<x;v+=2){const E=p[v],w=p[v+1];if(E.global&&(E.lastIndex=0),E.test(g))return w}return null}}}const QR=new qg;class la{constructor(e){this.manager=e!==void 0?e:QR,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const n=this;return new Promise(function(r,a){n.load(e,r,t,a)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}la.DEFAULT_MATERIAL_NAME="__DEFAULT";const qr={};class e1 extends Error{constructor(e,t){super(e),this.response=t}}class Yg extends la{constructor(e){super(e)}load(e,t,n,r){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const a=ia.get(e);if(a!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(a),this.manager.itemEnd(e)},0),a;if(qr[e]!==void 0){qr[e].push({onLoad:t,onProgress:n,onError:r});return}qr[e]=[],qr[e].push({onLoad:t,onProgress:n,onError:r});const c=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),u=this.mimeType,d=this.responseType;fetch(c).then(p=>{if(p.status===200||p.status===0){if(p.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||p.body===void 0||p.body.getReader===void 0)return p;const g=qr[e],v=p.body.getReader(),x=p.headers.get("Content-Length")||p.headers.get("X-File-Size"),E=x?parseInt(x):0,w=E!==0;let C=0;const T=new ReadableStream({start(M){k();function k(){v.read().then(({done:O,value:B})=>{if(O)M.close();else{C+=B.byteLength;const W=new ProgressEvent("progress",{lengthComputable:w,loaded:C,total:E});for(let J=0,m=g.length;J<m;J++){const me=g[J];me.onProgress&&me.onProgress(W)}M.enqueue(B),k()}})}}});return new Response(T)}else throw new e1(`fetch for "${p.url}" responded with ${p.status}: ${p.statusText}`,p)}).then(p=>{switch(d){case"arraybuffer":return p.arrayBuffer();case"blob":return p.blob();case"document":return p.text().then(g=>new DOMParser().parseFromString(g,u));case"json":return p.json();default:if(u===void 0)return p.text();{const v=/charset="?([^;"\s]*)"?/i.exec(u),x=v&&v[1]?v[1].toLowerCase():void 0,E=new TextDecoder(x);return p.arrayBuffer().then(w=>E.decode(w))}}}).then(p=>{ia.add(e,p);const g=qr[e];delete qr[e];for(let v=0,x=g.length;v<x;v++){const E=g[v];E.onLoad&&E.onLoad(p)}}).catch(p=>{const g=qr[e];if(g===void 0)throw this.manager.itemError(e),p;delete qr[e];for(let v=0,x=g.length;v<x;v++){const E=g[v];E.onError&&E.onError(p)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}}class t1 extends la{constructor(e){super(e)}load(e,t,n,r){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const a=this,c=ia.get(e);if(c!==void 0)return a.manager.itemStart(e),setTimeout(function(){t&&t(c),a.manager.itemEnd(e)},0),c;const u=el("img");function d(){g(),ia.add(e,this),t&&t(this),a.manager.itemEnd(e)}function p(v){g(),r&&r(v),a.manager.itemError(e),a.manager.itemEnd(e)}function g(){u.removeEventListener("load",d,!1),u.removeEventListener("error",p,!1)}return u.addEventListener("load",d,!1),u.addEventListener("error",p,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(u.crossOrigin=this.crossOrigin),a.manager.itemStart(e),u.src=e,u}}class n1 extends la{constructor(e){super(e)}load(e,t,n,r){const a=new Kn,c=new t1(this.manager);return c.setCrossOrigin(this.crossOrigin),c.setPath(this.path),c.load(e,function(u){a.image=u,a.needsUpdate=!0,t!==void 0&&t(a)},n,r),a}}class Fc extends En{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Rt(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),t}}const Af=new qt,tg=new re,ng=new re;class Th{constructor(e){this.camera=e,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Qt(512,512),this.map=null,this.mapPass=null,this.matrix=new qt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new mh,this._frameExtents=new Qt(1,1),this._viewportCount=1,this._viewports=[new dn(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,n=this.matrix;tg.setFromMatrixPosition(e.matrixWorld),t.position.copy(tg),ng.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(ng),t.updateMatrixWorld(),Af.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Af),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Af)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class i1 extends Th{constructor(){super(new hi(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(e){const t=this.camera,n=Qo*2*e.angle*this.focus,r=this.mapSize.width/this.mapSize.height,a=e.distance||t.far;(n!==t.fov||r!==t.aspect||a!==t.far)&&(t.fov=n,t.aspect=r,t.far=a,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}}class r1 extends Fc{constructor(e,t,n=0,r=Math.PI/3,a=0,c=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(En.DEFAULT_UP),this.updateMatrix(),this.target=new En,this.distance=n,this.angle=r,this.penumbra=a,this.decay=c,this.map=null,this.shadow=new i1}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}const ig=new qt,Wa=new re,bf=new re;class s1 extends Th{constructor(){super(new hi(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new Qt(4,2),this._viewportCount=6,this._viewports=[new dn(2,1,1,1),new dn(0,1,1,1),new dn(3,1,1,1),new dn(1,1,1,1),new dn(3,0,1,1),new dn(1,0,1,1)],this._cubeDirections=[new re(1,0,0),new re(-1,0,0),new re(0,0,1),new re(0,0,-1),new re(0,1,0),new re(0,-1,0)],this._cubeUps=[new re(0,1,0),new re(0,1,0),new re(0,1,0),new re(0,1,0),new re(0,0,1),new re(0,0,-1)]}updateMatrices(e,t=0){const n=this.camera,r=this.matrix,a=e.distance||n.far;a!==n.far&&(n.far=a,n.updateProjectionMatrix()),Wa.setFromMatrixPosition(e.matrixWorld),n.position.copy(Wa),bf.copy(n.position),bf.add(this._cubeDirections[t]),n.up.copy(this._cubeUps[t]),n.lookAt(bf),n.updateMatrixWorld(),r.makeTranslation(-Wa.x,-Wa.y,-Wa.z),ig.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(ig)}}class jg extends Fc{constructor(e,t,n=0,r=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=r,this.shadow=new s1}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class o1 extends Th{constructor(){super(new _h(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Kg extends Fc{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(En.DEFAULT_UP),this.updateMatrix(),this.target=new En,this.shadow=new o1}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class a1 extends Fc{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}class ah{static decodeText(e){if(typeof TextDecoder<"u")return new TextDecoder().decode(e);let t="";for(let n=0,r=e.length;n<r;n++)t+=String.fromCharCode(e[n]);try{return decodeURIComponent(escape(t))}catch{return t}}static extractUrlBase(e){const t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}}class l1 extends la{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&console.warn("THREE.ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"}}setOptions(e){return this.options=e,this}load(e,t,n,r){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const a=this,c=ia.get(e);if(c!==void 0)return a.manager.itemStart(e),setTimeout(function(){t&&t(c),a.manager.itemEnd(e)},0),c;const u={};u.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",u.headers=this.requestHeader,fetch(e,u).then(function(d){return d.blob()}).then(function(d){return createImageBitmap(d,Object.assign(a.options,{colorSpaceConversion:"none"}))}).then(function(d){ia.add(e,d),t&&t(d),a.manager.itemEnd(e)}).catch(function(d){r&&r(d),a.manager.itemError(e),a.manager.itemEnd(e)}),a.manager.itemStart(e)}}const Eh="\\[\\]\\.:\\/",c1=new RegExp("["+Eh+"]","g"),Ah="[^"+Eh+"]",u1="[^"+Eh.replace("\\.","")+"]",f1=/((?:WC+[\/:])*)/.source.replace("WC",Ah),h1=/(WCOD+)?/.source.replace("WCOD",u1),d1=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Ah),p1=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Ah),m1=new RegExp("^"+f1+h1+d1+p1+"$"),g1=["material","materials","bones","map"];class _1{constructor(e,t,n){const r=n||cn.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,r)}getValue(e,t){this.bind();const n=this._targetGroup.nCachedObjects_,r=this._bindings[n];r!==void 0&&r.getValue(e,t)}setValue(e,t){const n=this._bindings;for(let r=this._targetGroup.nCachedObjects_,a=n.length;r!==a;++r)n[r].setValue(e,t)}bind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}}class cn{constructor(e,t,n){this.path=t,this.parsedPath=n||cn.parseTrackName(t),this.node=cn.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new cn.Composite(e,t,n):new cn(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(c1,"")}static parseTrackName(e){const t=m1.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);const n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},r=n.nodeName&&n.nodeName.lastIndexOf(".");if(r!==void 0&&r!==-1){const a=n.nodeName.substring(r+1);g1.indexOf(a)!==-1&&(n.nodeName=n.nodeName.substring(0,r),n.objectName=a)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){const n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){const n=function(a){for(let c=0;c<a.length;c++){const u=a[c];if(u.name===t||u.uuid===t)return u;const d=n(u.children);if(d)return d}return null},r=n(e.children);if(r)return r}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){const n=this.resolvedProperty;for(let r=0,a=n.length;r!==a;++r)e[t++]=n[r]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){const n=this.resolvedProperty;for(let r=0,a=n.length;r!==a;++r)n[r]=e[t++]}_setValue_array_setNeedsUpdate(e,t){const n=this.resolvedProperty;for(let r=0,a=n.length;r!==a;++r)n[r]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){const n=this.resolvedProperty;for(let r=0,a=n.length;r!==a;++r)n[r]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node;const t=this.parsedPath,n=t.objectName,r=t.propertyName;let a=t.propertyIndex;if(e||(e=cn.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let p=t.objectIndex;switch(n){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let g=0;g<e.length;g++)if(e[g].name===p){p=g;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(p!==void 0){if(e[p]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[p]}}const c=e[r];if(c===void 0){const p=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+p+"."+r+" but it wasn't found.",e);return}let u=this.Versioning.None;this.targetObject=e,e.needsUpdate!==void 0?u=this.Versioning.NeedsUpdate:e.matrixWorldNeedsUpdate!==void 0&&(u=this.Versioning.MatrixWorldNeedsUpdate);let d=this.BindingType.Direct;if(a!==void 0){if(r==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[a]!==void 0&&(a=e.morphTargetDictionary[a])}d=this.BindingType.ArrayElement,this.resolvedProperty=c,this.propertyIndex=a}else c.fromArray!==void 0&&c.toArray!==void 0?(d=this.BindingType.HasFromToArray,this.resolvedProperty=c):Array.isArray(c)?(d=this.BindingType.EntireArray,this.resolvedProperty=c):this.propertyName=r;this.getValue=this.GetterByBindingType[d],this.setValue=this.SetterByBindingTypeAndVersioning[d][u]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}cn.Composite=_1;cn.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};cn.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};cn.prototype.GetterByBindingType=[cn.prototype._getValue_direct,cn.prototype._getValue_array,cn.prototype._getValue_arrayElement,cn.prototype._getValue_toArray];cn.prototype.SetterByBindingTypeAndVersioning=[[cn.prototype._setValue_direct,cn.prototype._setValue_direct_setNeedsUpdate,cn.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[cn.prototype._setValue_array,cn.prototype._setValue_array_setNeedsUpdate,cn.prototype._setValue_array_setMatrixWorldNeedsUpdate],[cn.prototype._setValue_arrayElement,cn.prototype._setValue_arrayElement_setNeedsUpdate,cn.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[cn.prototype._setValue_fromArray,cn.prototype._setValue_fromArray_setNeedsUpdate,cn.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:fh}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=fh);function rg(s,e){if(e===iT)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),s;if(e===eh||e===yg){let t=s.getIndex();if(t===null){const c=[],u=s.getAttribute("position");if(u!==void 0){for(let d=0;d<u.count;d++)c.push(d);s.setIndex(c),t=s.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),s}const n=t.count-2,r=[];if(e===eh)for(let c=1;c<=n;c++)r.push(t.getX(0)),r.push(t.getX(c)),r.push(t.getX(c+1));else for(let c=0;c<n;c++)c%2===0?(r.push(t.getX(c)),r.push(t.getX(c+1)),r.push(t.getX(c+2))):(r.push(t.getX(c+2)),r.push(t.getX(c+1)),r.push(t.getX(c)));r.length/3!==n&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");const a=s.clone();return a.setIndex(r),a.clearGroups(),a}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",e),s}class v1 extends la{constructor(e){super(e),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(t){return new T1(t)}),this.register(function(t){return new P1(t)}),this.register(function(t){return new D1(t)}),this.register(function(t){return new I1(t)}),this.register(function(t){return new A1(t)}),this.register(function(t){return new b1(t)}),this.register(function(t){return new w1(t)}),this.register(function(t){return new R1(t)}),this.register(function(t){return new M1(t)}),this.register(function(t){return new C1(t)}),this.register(function(t){return new E1(t)}),this.register(function(t){return new L1(t)}),this.register(function(t){return new y1(t)}),this.register(function(t){return new N1(t)}),this.register(function(t){return new U1(t)})}load(e,t,n,r){const a=this;let c;this.resourcePath!==""?c=this.resourcePath:this.path!==""?c=this.path:c=ah.extractUrlBase(e),this.manager.itemStart(e);const u=function(p){r?r(p):console.error(p),a.manager.itemError(e),a.manager.itemEnd(e)},d=new Yg(this.manager);d.setPath(this.path),d.setResponseType("arraybuffer"),d.setRequestHeader(this.requestHeader),d.setWithCredentials(this.withCredentials),d.load(e,function(p){try{a.parse(p,c,function(g){t(g),a.manager.itemEnd(e)},u)}catch(g){u(g)}},n,u)}setDRACOLoader(e){return this.dracoLoader=e,this}setDDSLoader(){throw new Error('THREE.GLTFLoader: "MSFT_texture_dds" no longer supported. Please update to "KHR_texture_basisu".')}setKTX2Loader(e){return this.ktx2Loader=e,this}setMeshoptDecoder(e){return this.meshoptDecoder=e,this}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}parse(e,t,n,r){let a;const c={},u={},d=new TextDecoder;if(typeof e=="string")a=JSON.parse(e);else if(e instanceof ArrayBuffer)if(d.decode(new Uint8Array(e,0,4))===$g){try{c[Jt.KHR_BINARY_GLTF]=new O1(e)}catch(v){r&&r(v);return}a=JSON.parse(c[Jt.KHR_BINARY_GLTF].content)}else a=JSON.parse(d.decode(e));else a=e;if(a.asset===void 0||a.asset.version[0]<2){r&&r(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}const p=new K1(a,{path:t||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});p.fileLoader.setRequestHeader(this.requestHeader);for(let g=0;g<this.pluginCallbacks.length;g++){const v=this.pluginCallbacks[g](p);v.name||console.error("THREE.GLTFLoader: Invalid plugin found: missing name"),u[v.name]=v,c[v.name]=!0}if(a.extensionsUsed)for(let g=0;g<a.extensionsUsed.length;++g){const v=a.extensionsUsed[g],x=a.extensionsRequired||[];switch(v){case Jt.KHR_MATERIALS_UNLIT:c[v]=new S1;break;case Jt.KHR_DRACO_MESH_COMPRESSION:c[v]=new F1(a,this.dracoLoader);break;case Jt.KHR_TEXTURE_TRANSFORM:c[v]=new B1;break;case Jt.KHR_MESH_QUANTIZATION:c[v]=new H1;break;default:x.indexOf(v)>=0&&u[v]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+v+'".')}}p.setExtensions(c),p.setPlugins(u),p.parse(n,r)}parseAsync(e,t){const n=this;return new Promise(function(r,a){n.parse(e,t,r,a)})}}function x1(){let s={};return{get:function(e){return s[e]},add:function(e,t){s[e]=t},remove:function(e){delete s[e]},removeAll:function(){s={}}}}const Jt={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"};class y1{constructor(e){this.parser=e,this.name=Jt.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){const e=this.parser,t=this.parser.json.nodes||[];for(let n=0,r=t.length;n<r;n++){const a=t[n];a.extensions&&a.extensions[this.name]&&a.extensions[this.name].light!==void 0&&e._addNodeRef(this.cache,a.extensions[this.name].light)}}_loadLight(e){const t=this.parser,n="light:"+e;let r=t.cache.get(n);if(r)return r;const a=t.json,d=((a.extensions&&a.extensions[this.name]||{}).lights||[])[e];let p;const g=new Rt(16777215);d.color!==void 0&&g.setRGB(d.color[0],d.color[1],d.color[2],$n);const v=d.range!==void 0?d.range:0;switch(d.type){case"directional":p=new Kg(g),p.target.position.set(0,0,-1),p.add(p.target);break;case"point":p=new jg(g),p.distance=v;break;case"spot":p=new r1(g),p.distance=v,d.spot=d.spot||{},d.spot.innerConeAngle=d.spot.innerConeAngle!==void 0?d.spot.innerConeAngle:0,d.spot.outerConeAngle=d.spot.outerConeAngle!==void 0?d.spot.outerConeAngle:Math.PI/4,p.angle=d.spot.outerConeAngle,p.penumbra=1-d.spot.innerConeAngle/d.spot.outerConeAngle,p.target.position.set(0,0,-1),p.add(p.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+d.type)}return p.position.set(0,0,0),p.decay=2,xs(p,d),d.intensity!==void 0&&(p.intensity=d.intensity),p.name=t.createUniqueName(d.name||"light_"+e),r=Promise.resolve(p),t.cache.add(n,r),r}getDependency(e,t){if(e==="light")return this._loadLight(t)}createNodeAttachment(e){const t=this,n=this.parser,a=n.json.nodes[e],u=(a.extensions&&a.extensions[this.name]||{}).light;return u===void 0?null:this._loadLight(u).then(function(d){return n._getNodeRef(t.cache,u,d)})}}class S1{constructor(){this.name=Jt.KHR_MATERIALS_UNLIT}getMaterialType(){return Zs}extendParams(e,t,n){const r=[];e.color=new Rt(1,1,1),e.opacity=1;const a=t.pbrMetallicRoughness;if(a){if(Array.isArray(a.baseColorFactor)){const c=a.baseColorFactor;e.color.setRGB(c[0],c[1],c[2],$n),e.opacity=c[3]}a.baseColorTexture!==void 0&&r.push(n.assignTexture(e,"map",a.baseColorTexture,bn))}return Promise.all(r)}}class M1{constructor(e){this.parser=e,this.name=Jt.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(e,t){const r=this.parser.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const a=r.extensions[this.name].emissiveStrength;return a!==void 0&&(t.emissiveIntensity=a),Promise.resolve()}}class T1{constructor(e){this.parser=e,this.name=Jt.KHR_MATERIALS_CLEARCOAT}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:bs}extendMaterialParams(e,t){const n=this.parser,r=n.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const a=[],c=r.extensions[this.name];if(c.clearcoatFactor!==void 0&&(t.clearcoat=c.clearcoatFactor),c.clearcoatTexture!==void 0&&a.push(n.assignTexture(t,"clearcoatMap",c.clearcoatTexture)),c.clearcoatRoughnessFactor!==void 0&&(t.clearcoatRoughness=c.clearcoatRoughnessFactor),c.clearcoatRoughnessTexture!==void 0&&a.push(n.assignTexture(t,"clearcoatRoughnessMap",c.clearcoatRoughnessTexture)),c.clearcoatNormalTexture!==void 0&&(a.push(n.assignTexture(t,"clearcoatNormalMap",c.clearcoatNormalTexture)),c.clearcoatNormalTexture.scale!==void 0)){const u=c.clearcoatNormalTexture.scale;t.clearcoatNormalScale=new Qt(u,u)}return Promise.all(a)}}class E1{constructor(e){this.parser=e,this.name=Jt.KHR_MATERIALS_IRIDESCENCE}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:bs}extendMaterialParams(e,t){const n=this.parser,r=n.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const a=[],c=r.extensions[this.name];return c.iridescenceFactor!==void 0&&(t.iridescence=c.iridescenceFactor),c.iridescenceTexture!==void 0&&a.push(n.assignTexture(t,"iridescenceMap",c.iridescenceTexture)),c.iridescenceIor!==void 0&&(t.iridescenceIOR=c.iridescenceIor),t.iridescenceThicknessRange===void 0&&(t.iridescenceThicknessRange=[100,400]),c.iridescenceThicknessMinimum!==void 0&&(t.iridescenceThicknessRange[0]=c.iridescenceThicknessMinimum),c.iridescenceThicknessMaximum!==void 0&&(t.iridescenceThicknessRange[1]=c.iridescenceThicknessMaximum),c.iridescenceThicknessTexture!==void 0&&a.push(n.assignTexture(t,"iridescenceThicknessMap",c.iridescenceThicknessTexture)),Promise.all(a)}}class A1{constructor(e){this.parser=e,this.name=Jt.KHR_MATERIALS_SHEEN}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:bs}extendMaterialParams(e,t){const n=this.parser,r=n.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const a=[];t.sheenColor=new Rt(0,0,0),t.sheenRoughness=0,t.sheen=1;const c=r.extensions[this.name];if(c.sheenColorFactor!==void 0){const u=c.sheenColorFactor;t.sheenColor.setRGB(u[0],u[1],u[2],$n)}return c.sheenRoughnessFactor!==void 0&&(t.sheenRoughness=c.sheenRoughnessFactor),c.sheenColorTexture!==void 0&&a.push(n.assignTexture(t,"sheenColorMap",c.sheenColorTexture,bn)),c.sheenRoughnessTexture!==void 0&&a.push(n.assignTexture(t,"sheenRoughnessMap",c.sheenRoughnessTexture)),Promise.all(a)}}class b1{constructor(e){this.parser=e,this.name=Jt.KHR_MATERIALS_TRANSMISSION}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:bs}extendMaterialParams(e,t){const n=this.parser,r=n.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const a=[],c=r.extensions[this.name];return c.transmissionFactor!==void 0&&(t.transmission=c.transmissionFactor),c.transmissionTexture!==void 0&&a.push(n.assignTexture(t,"transmissionMap",c.transmissionTexture)),Promise.all(a)}}class w1{constructor(e){this.parser=e,this.name=Jt.KHR_MATERIALS_VOLUME}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:bs}extendMaterialParams(e,t){const n=this.parser,r=n.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const a=[],c=r.extensions[this.name];t.thickness=c.thicknessFactor!==void 0?c.thicknessFactor:0,c.thicknessTexture!==void 0&&a.push(n.assignTexture(t,"thicknessMap",c.thicknessTexture)),t.attenuationDistance=c.attenuationDistance||1/0;const u=c.attenuationColor||[1,1,1];return t.attenuationColor=new Rt().setRGB(u[0],u[1],u[2],$n),Promise.all(a)}}class R1{constructor(e){this.parser=e,this.name=Jt.KHR_MATERIALS_IOR}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:bs}extendMaterialParams(e,t){const r=this.parser.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const a=r.extensions[this.name];return t.ior=a.ior!==void 0?a.ior:1.5,Promise.resolve()}}class C1{constructor(e){this.parser=e,this.name=Jt.KHR_MATERIALS_SPECULAR}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:bs}extendMaterialParams(e,t){const n=this.parser,r=n.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const a=[],c=r.extensions[this.name];t.specularIntensity=c.specularFactor!==void 0?c.specularFactor:1,c.specularTexture!==void 0&&a.push(n.assignTexture(t,"specularIntensityMap",c.specularTexture));const u=c.specularColorFactor||[1,1,1];return t.specularColor=new Rt().setRGB(u[0],u[1],u[2],$n),c.specularColorTexture!==void 0&&a.push(n.assignTexture(t,"specularColorMap",c.specularColorTexture,bn)),Promise.all(a)}}class L1{constructor(e){this.parser=e,this.name=Jt.KHR_MATERIALS_ANISOTROPY}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:bs}extendMaterialParams(e,t){const n=this.parser,r=n.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const a=[],c=r.extensions[this.name];return c.anisotropyStrength!==void 0&&(t.anisotropy=c.anisotropyStrength),c.anisotropyRotation!==void 0&&(t.anisotropyRotation=c.anisotropyRotation),c.anisotropyTexture!==void 0&&a.push(n.assignTexture(t,"anisotropyMap",c.anisotropyTexture)),Promise.all(a)}}class P1{constructor(e){this.parser=e,this.name=Jt.KHR_TEXTURE_BASISU}loadTexture(e){const t=this.parser,n=t.json,r=n.textures[e];if(!r.extensions||!r.extensions[this.name])return null;const a=r.extensions[this.name],c=t.options.ktx2Loader;if(!c){if(n.extensionsRequired&&n.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return t.loadTextureImage(e,a.source,c)}}class D1{constructor(e){this.parser=e,this.name=Jt.EXT_TEXTURE_WEBP,this.isSupported=null}loadTexture(e){const t=this.name,n=this.parser,r=n.json,a=r.textures[e];if(!a.extensions||!a.extensions[t])return null;const c=a.extensions[t],u=r.images[c.source];let d=n.textureLoader;if(u.uri){const p=n.options.manager.getHandler(u.uri);p!==null&&(d=p)}return this.detectSupport().then(function(p){if(p)return n.loadTextureImage(e,c.source,d);if(r.extensionsRequired&&r.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: WebP required by asset but unsupported.");return n.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){const t=new Image;t.src="data:image/webp;base64,UklGRiIAAABXRUJQVlA4IBYAAAAwAQCdASoBAAEADsD+JaQAA3AAAAAA",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}}class I1{constructor(e){this.parser=e,this.name=Jt.EXT_TEXTURE_AVIF,this.isSupported=null}loadTexture(e){const t=this.name,n=this.parser,r=n.json,a=r.textures[e];if(!a.extensions||!a.extensions[t])return null;const c=a.extensions[t],u=r.images[c.source];let d=n.textureLoader;if(u.uri){const p=n.options.manager.getHandler(u.uri);p!==null&&(d=p)}return this.detectSupport().then(function(p){if(p)return n.loadTextureImage(e,c.source,d);if(r.extensionsRequired&&r.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: AVIF required by asset but unsupported.");return n.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){const t=new Image;t.src="data:image/avif;base64,AAAAIGZ0eXBhdmlmAAAAAGF2aWZtaWYxbWlhZk1BMUIAAADybWV0YQAAAAAAAAAoaGRscgAAAAAAAAAAcGljdAAAAAAAAAAAAAAAAGxpYmF2aWYAAAAADnBpdG0AAAAAAAEAAAAeaWxvYwAAAABEAAABAAEAAAABAAABGgAAABcAAAAoaWluZgAAAAAAAQAAABppbmZlAgAAAAABAABhdjAxQ29sb3IAAAAAamlwcnAAAABLaXBjbwAAABRpc3BlAAAAAAAAAAEAAAABAAAAEHBpeGkAAAAAAwgICAAAAAxhdjFDgQAMAAAAABNjb2xybmNseAACAAIABoAAAAAXaXBtYQAAAAAAAAABAAEEAQKDBAAAAB9tZGF0EgAKCBgABogQEDQgMgkQAAAAB8dSLfI=",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}}class N1{constructor(e){this.name=Jt.EXT_MESHOPT_COMPRESSION,this.parser=e}loadBufferView(e){const t=this.parser.json,n=t.bufferViews[e];if(n.extensions&&n.extensions[this.name]){const r=n.extensions[this.name],a=this.parser.getDependency("buffer",r.buffer),c=this.parser.options.meshoptDecoder;if(!c||!c.supported){if(t.extensionsRequired&&t.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return a.then(function(u){const d=r.byteOffset||0,p=r.byteLength||0,g=r.count,v=r.byteStride,x=new Uint8Array(u,d,p);return c.decodeGltfBufferAsync?c.decodeGltfBufferAsync(g,v,x,r.mode,r.filter).then(function(E){return E.buffer}):c.ready.then(function(){const E=new ArrayBuffer(g*v);return c.decodeGltfBuffer(new Uint8Array(E),g,v,x,r.mode,r.filter),E})})}else return null}}class U1{constructor(e){this.name=Jt.EXT_MESH_GPU_INSTANCING,this.parser=e}createNodeMesh(e){const t=this.parser.json,n=t.nodes[e];if(!n.extensions||!n.extensions[this.name]||n.mesh===void 0)return null;const r=t.meshes[n.mesh];for(const p of r.primitives)if(p.mode!==qi.TRIANGLES&&p.mode!==qi.TRIANGLE_STRIP&&p.mode!==qi.TRIANGLE_FAN&&p.mode!==void 0)return null;const c=n.extensions[this.name].attributes,u=[],d={};for(const p in c)u.push(this.parser.getDependency("accessor",c[p]).then(g=>(d[p]=g,d[p])));return u.length<1?null:(u.push(this.parser.createNodeMesh(e)),Promise.all(u).then(p=>{const g=p.pop(),v=g.isGroup?g.children:[g],x=p[0].count,E=[];for(const w of v){const C=new qt,T=new re,M=new As,k=new re(1,1,1),O=new zR(w.geometry,w.material,x);for(let B=0;B<x;B++)d.TRANSLATION&&T.fromBufferAttribute(d.TRANSLATION,B),d.ROTATION&&M.fromBufferAttribute(d.ROTATION,B),d.SCALE&&k.fromBufferAttribute(d.SCALE,B),O.setMatrixAt(B,C.compose(T,M,k));for(const B in d)if(B==="_COLOR_0"){const W=d[B];O.instanceColor=new sh(W.array,W.itemSize,W.normalized)}else B!=="TRANSLATION"&&B!=="ROTATION"&&B!=="SCALE"&&w.geometry.setAttribute(B,d[B]);En.prototype.copy.call(O,w),this.parser.assignFinalMaterial(O),E.push(O)}return g.isGroup?(g.clear(),g.add(...E),g):E[0]}))}}const $g="glTF",Xa=12,sg={JSON:1313821514,BIN:5130562};class O1{constructor(e){this.name=Jt.KHR_BINARY_GLTF,this.content=null,this.body=null;const t=new DataView(e,0,Xa),n=new TextDecoder;if(this.header={magic:n.decode(new Uint8Array(e.slice(0,4))),version:t.getUint32(4,!0),length:t.getUint32(8,!0)},this.header.magic!==$g)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");const r=this.header.length-Xa,a=new DataView(e,Xa);let c=0;for(;c<r;){const u=a.getUint32(c,!0);c+=4;const d=a.getUint32(c,!0);if(c+=4,d===sg.JSON){const p=new Uint8Array(e,Xa+c,u);this.content=n.decode(p)}else if(d===sg.BIN){const p=Xa+c;this.body=e.slice(p,p+u)}c+=u}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}}class F1{constructor(e,t){if(!t)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=Jt.KHR_DRACO_MESH_COMPRESSION,this.json=e,this.dracoLoader=t,this.dracoLoader.preload()}decodePrimitive(e,t){const n=this.json,r=this.dracoLoader,a=e.extensions[this.name].bufferView,c=e.extensions[this.name].attributes,u={},d={},p={};for(const g in c){const v=lh[g]||g.toLowerCase();u[v]=c[g]}for(const g in e.attributes){const v=lh[g]||g.toLowerCase();if(c[g]!==void 0){const x=n.accessors[e.attributes[g]],E=Yo[x.componentType];p[v]=E.name,d[v]=x.normalized===!0}}return t.getDependency("bufferView",a).then(function(g){return new Promise(function(v){r.decodeDracoFile(g,function(x){for(const E in x.attributes){const w=x.attributes[E],C=d[E];C!==void 0&&(w.normalized=C)}v(x)},u,p)})})}}class B1{constructor(){this.name=Jt.KHR_TEXTURE_TRANSFORM}extendTexture(e,t){return(t.texCoord===void 0||t.texCoord===e.channel)&&t.offset===void 0&&t.rotation===void 0&&t.scale===void 0||(e=e.clone(),t.texCoord!==void 0&&(e.channel=t.texCoord),t.offset!==void 0&&e.offset.fromArray(t.offset),t.rotation!==void 0&&(e.rotation=t.rotation),t.scale!==void 0&&e.repeat.fromArray(t.scale),e.needsUpdate=!0),e}}class H1{constructor(){this.name=Jt.KHR_MESH_QUANTIZATION}}class Zg extends il{constructor(e,t,n,r){super(e,t,n,r)}copySampleValue_(e){const t=this.resultBuffer,n=this.sampleValues,r=this.valueSize,a=e*r*3+r;for(let c=0;c!==r;c++)t[c]=n[a+c];return t}interpolate_(e,t,n,r){const a=this.resultBuffer,c=this.sampleValues,u=this.valueSize,d=u*2,p=u*3,g=r-t,v=(n-t)/g,x=v*v,E=x*v,w=e*p,C=w-p,T=-2*E+3*x,M=E-x,k=1-T,O=M-x+v;for(let B=0;B!==u;B++){const W=c[C+B+u],J=c[C+B+d]*g,m=c[w+B+u],me=c[w+B]*g;a[B]=k*W+O*J+T*m+M*me}return a}}const z1=new As;class G1 extends Zg{interpolate_(e,t,n,r){const a=super.interpolate_(e,t,n,r);return z1.fromArray(a).normalize().toArray(a),a}}const qi={FLOAT:5126,FLOAT_MAT3:35675,FLOAT_MAT4:35676,FLOAT_VEC2:35664,FLOAT_VEC3:35665,FLOAT_VEC4:35666,LINEAR:9729,REPEAT:10497,SAMPLER_2D:35678,POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6,UNSIGNED_BYTE:5121,UNSIGNED_SHORT:5123},Yo={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},og={9728:Xn,9729:Ti,9984:Qf,9985:dg,9986:Mc,9987:no},ag={33071:Yi,33648:Ac,10497:$o},wf={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},lh={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},vs={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},k1={CUBICSPLINE:void 0,LINEAR:Jo,STEP:Qa},Rf={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function V1(s){return s.DefaultMaterial===void 0&&(s.DefaultMaterial=new Mh({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:Zr})),s.DefaultMaterial}function Xs(s,e,t){for(const n in t.extensions)s[n]===void 0&&(e.userData.gltfExtensions=e.userData.gltfExtensions||{},e.userData.gltfExtensions[n]=t.extensions[n])}function xs(s,e){e.extras!==void 0&&(typeof e.extras=="object"?Object.assign(s.userData,e.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+e.extras))}function W1(s,e,t){let n=!1,r=!1,a=!1;for(let p=0,g=e.length;p<g;p++){const v=e[p];if(v.POSITION!==void 0&&(n=!0),v.NORMAL!==void 0&&(r=!0),v.COLOR_0!==void 0&&(a=!0),n&&r&&a)break}if(!n&&!r&&!a)return Promise.resolve(s);const c=[],u=[],d=[];for(let p=0,g=e.length;p<g;p++){const v=e[p];if(n){const x=v.POSITION!==void 0?t.getDependency("accessor",v.POSITION):s.attributes.position;c.push(x)}if(r){const x=v.NORMAL!==void 0?t.getDependency("accessor",v.NORMAL):s.attributes.normal;u.push(x)}if(a){const x=v.COLOR_0!==void 0?t.getDependency("accessor",v.COLOR_0):s.attributes.color;d.push(x)}}return Promise.all([Promise.all(c),Promise.all(u),Promise.all(d)]).then(function(p){const g=p[0],v=p[1],x=p[2];return n&&(s.morphAttributes.position=g),r&&(s.morphAttributes.normal=v),a&&(s.morphAttributes.color=x),s.morphTargetsRelative=!0,s})}function X1(s,e){if(s.updateMorphTargets(),e.weights!==void 0)for(let t=0,n=e.weights.length;t<n;t++)s.morphTargetInfluences[t]=e.weights[t];if(e.extras&&Array.isArray(e.extras.targetNames)){const t=e.extras.targetNames;if(s.morphTargetInfluences.length===t.length){s.morphTargetDictionary={};for(let n=0,r=t.length;n<r;n++)s.morphTargetDictionary[t[n]]=n}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function q1(s){let e;const t=s.extensions&&s.extensions[Jt.KHR_DRACO_MESH_COMPRESSION];if(t?e="draco:"+t.bufferView+":"+t.indices+":"+Cf(t.attributes):e=s.indices+":"+Cf(s.attributes)+":"+s.mode,s.targets!==void 0)for(let n=0,r=s.targets.length;n<r;n++)e+=":"+Cf(s.targets[n]);return e}function Cf(s){let e="";const t=Object.keys(s).sort();for(let n=0,r=t.length;n<r;n++)e+=t[n]+":"+s[t[n]]+";";return e}function ch(s){switch(s){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function Y1(s){return s.search(/\.jpe?g($|\?)/i)>0||s.search(/^data\:image\/jpeg/)===0?"image/jpeg":s.search(/\.webp($|\?)/i)>0||s.search(/^data\:image\/webp/)===0?"image/webp":"image/png"}const j1=new qt;class K1{constructor(e={},t={}){this.json=e,this.extensions={},this.plugins={},this.options=t,this.cache=new x1,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let n=!1,r=!1,a=-1;typeof navigator<"u"&&(n=/^((?!chrome|android).)*safari/i.test(navigator.userAgent)===!0,r=navigator.userAgent.indexOf("Firefox")>-1,a=r?navigator.userAgent.match(/Firefox\/([0-9]+)\./)[1]:-1),typeof createImageBitmap>"u"||n||r&&a<98?this.textureLoader=new n1(this.options.manager):this.textureLoader=new l1(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new Yg(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials"&&this.fileLoader.setWithCredentials(!0)}setExtensions(e){this.extensions=e}setPlugins(e){this.plugins=e}parse(e,t){const n=this,r=this.json,a=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(c){return c._markDefs&&c._markDefs()}),Promise.all(this._invokeAll(function(c){return c.beforeRoot&&c.beforeRoot()})).then(function(){return Promise.all([n.getDependencies("scene"),n.getDependencies("animation"),n.getDependencies("camera")])}).then(function(c){const u={scene:c[0][r.scene||0],scenes:c[0],animations:c[1],cameras:c[2],asset:r.asset,parser:n,userData:{}};return Xs(a,u,r),xs(u,r),Promise.all(n._invokeAll(function(d){return d.afterRoot&&d.afterRoot(u)})).then(function(){e(u)})}).catch(t)}_markDefs(){const e=this.json.nodes||[],t=this.json.skins||[],n=this.json.meshes||[];for(let r=0,a=t.length;r<a;r++){const c=t[r].joints;for(let u=0,d=c.length;u<d;u++)e[c[u]].isBone=!0}for(let r=0,a=e.length;r<a;r++){const c=e[r];c.mesh!==void 0&&(this._addNodeRef(this.meshCache,c.mesh),c.skin!==void 0&&(n[c.mesh].isSkinnedMesh=!0)),c.camera!==void 0&&this._addNodeRef(this.cameraCache,c.camera)}}_addNodeRef(e,t){t!==void 0&&(e.refs[t]===void 0&&(e.refs[t]=e.uses[t]=0),e.refs[t]++)}_getNodeRef(e,t,n){if(e.refs[t]<=1)return n;const r=n.clone(),a=(c,u)=>{const d=this.associations.get(c);d!=null&&this.associations.set(u,d);for(const[p,g]of c.children.entries())a(g,u.children[p])};return a(n,r),r.name+="_instance_"+e.uses[t]++,r}_invokeOne(e){const t=Object.values(this.plugins);t.push(this);for(let n=0;n<t.length;n++){const r=e(t[n]);if(r)return r}return null}_invokeAll(e){const t=Object.values(this.plugins);t.unshift(this);const n=[];for(let r=0;r<t.length;r++){const a=e(t[r]);a&&n.push(a)}return n}getDependency(e,t){const n=e+":"+t;let r=this.cache.get(n);if(!r){switch(e){case"scene":r=this.loadScene(t);break;case"node":r=this._invokeOne(function(a){return a.loadNode&&a.loadNode(t)});break;case"mesh":r=this._invokeOne(function(a){return a.loadMesh&&a.loadMesh(t)});break;case"accessor":r=this.loadAccessor(t);break;case"bufferView":r=this._invokeOne(function(a){return a.loadBufferView&&a.loadBufferView(t)});break;case"buffer":r=this.loadBuffer(t);break;case"material":r=this._invokeOne(function(a){return a.loadMaterial&&a.loadMaterial(t)});break;case"texture":r=this._invokeOne(function(a){return a.loadTexture&&a.loadTexture(t)});break;case"skin":r=this.loadSkin(t);break;case"animation":r=this._invokeOne(function(a){return a.loadAnimation&&a.loadAnimation(t)});break;case"camera":r=this.loadCamera(t);break;default:if(r=this._invokeOne(function(a){return a!=this&&a.getDependency&&a.getDependency(e,t)}),!r)throw new Error("Unknown type: "+e);break}this.cache.add(n,r)}return r}getDependencies(e){let t=this.cache.get(e);if(!t){const n=this,r=this.json[e+(e==="mesh"?"es":"s")]||[];t=Promise.all(r.map(function(a,c){return n.getDependency(e,c)})),this.cache.add(e,t)}return t}loadBuffer(e){const t=this.json.buffers[e],n=this.fileLoader;if(t.type&&t.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+t.type+" buffer type is not supported.");if(t.uri===void 0&&e===0)return Promise.resolve(this.extensions[Jt.KHR_BINARY_GLTF].body);const r=this.options;return new Promise(function(a,c){n.load(ah.resolveURL(t.uri,r.path),a,void 0,function(){c(new Error('THREE.GLTFLoader: Failed to load buffer "'+t.uri+'".'))})})}loadBufferView(e){const t=this.json.bufferViews[e];return this.getDependency("buffer",t.buffer).then(function(n){const r=t.byteLength||0,a=t.byteOffset||0;return n.slice(a,a+r)})}loadAccessor(e){const t=this,n=this.json,r=this.json.accessors[e];if(r.bufferView===void 0&&r.sparse===void 0){const c=wf[r.type],u=Yo[r.componentType],d=r.normalized===!0,p=new u(r.count*c);return Promise.resolve(new di(p,c,d))}const a=[];return r.bufferView!==void 0?a.push(this.getDependency("bufferView",r.bufferView)):a.push(null),r.sparse!==void 0&&(a.push(this.getDependency("bufferView",r.sparse.indices.bufferView)),a.push(this.getDependency("bufferView",r.sparse.values.bufferView))),Promise.all(a).then(function(c){const u=c[0],d=wf[r.type],p=Yo[r.componentType],g=p.BYTES_PER_ELEMENT,v=g*d,x=r.byteOffset||0,E=r.bufferView!==void 0?n.bufferViews[r.bufferView].byteStride:void 0,w=r.normalized===!0;let C,T;if(E&&E!==v){const M=Math.floor(x/E),k="InterleavedBuffer:"+r.bufferView+":"+r.componentType+":"+M+":"+r.count;let O=t.cache.get(k);O||(C=new p(u,M*E,r.count*E/g),O=new NR(C,E/g),t.cache.add(k,O)),T=new xh(O,d,x%E/g,w)}else u===null?C=new p(r.count*d):C=new p(u,x,r.count*d),T=new di(C,d,w);if(r.sparse!==void 0){const M=wf.SCALAR,k=Yo[r.sparse.indices.componentType],O=r.sparse.indices.byteOffset||0,B=r.sparse.values.byteOffset||0,W=new k(c[1],O,r.sparse.count*M),J=new p(c[2],B,r.sparse.count*d);u!==null&&(T=new di(T.array.slice(),T.itemSize,T.normalized));for(let m=0,me=W.length;m<me;m++){const N=W[m];if(T.setX(N,J[m*d]),d>=2&&T.setY(N,J[m*d+1]),d>=3&&T.setZ(N,J[m*d+2]),d>=4&&T.setW(N,J[m*d+3]),d>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}}return T})}loadTexture(e){const t=this.json,n=this.options,a=t.textures[e].source,c=t.images[a];let u=this.textureLoader;if(c.uri){const d=n.manager.getHandler(c.uri);d!==null&&(u=d)}return this.loadTextureImage(e,a,u)}loadTextureImage(e,t,n){const r=this,a=this.json,c=a.textures[e],u=a.images[t],d=(u.uri||u.bufferView)+":"+c.sampler;if(this.textureCache[d])return this.textureCache[d];const p=this.loadImageSource(t,n).then(function(g){g.flipY=!1,g.name=c.name||u.name||"",g.name===""&&typeof u.uri=="string"&&u.uri.startsWith("data:image/")===!1&&(g.name=u.uri);const x=(a.samplers||{})[c.sampler]||{};return g.magFilter=og[x.magFilter]||Ti,g.minFilter=og[x.minFilter]||no,g.wrapS=ag[x.wrapS]||$o,g.wrapT=ag[x.wrapT]||$o,r.associations.set(g,{textures:e}),g}).catch(function(){return null});return this.textureCache[d]=p,p}loadImageSource(e,t){const n=this,r=this.json,a=this.options;if(this.sourceCache[e]!==void 0)return this.sourceCache[e].then(v=>v.clone());const c=r.images[e],u=self.URL||self.webkitURL;let d=c.uri||"",p=!1;if(c.bufferView!==void 0)d=n.getDependency("bufferView",c.bufferView).then(function(v){p=!0;const x=new Blob([v],{type:c.mimeType});return d=u.createObjectURL(x),d});else if(c.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+e+" is missing URI and bufferView");const g=Promise.resolve(d).then(function(v){return new Promise(function(x,E){let w=x;t.isImageBitmapLoader===!0&&(w=function(C){const T=new Kn(C);T.needsUpdate=!0,x(T)}),t.load(ah.resolveURL(v,a.path),w,void 0,E)})}).then(function(v){return p===!0&&u.revokeObjectURL(d),v.userData.mimeType=c.mimeType||Y1(c.uri),v}).catch(function(v){throw console.error("THREE.GLTFLoader: Couldn't load texture",d),v});return this.sourceCache[e]=g,g}assignTexture(e,t,n,r){const a=this;return this.getDependency("texture",n.index).then(function(c){if(!c)return null;if(n.texCoord!==void 0&&n.texCoord>0&&(c=c.clone(),c.channel=n.texCoord),a.extensions[Jt.KHR_TEXTURE_TRANSFORM]){const u=n.extensions!==void 0?n.extensions[Jt.KHR_TEXTURE_TRANSFORM]:void 0;if(u){const d=a.associations.get(c);c=a.extensions[Jt.KHR_TEXTURE_TRANSFORM].extendTexture(c,u),a.associations.set(c,d)}}return r!==void 0&&(c.colorSpace=r),e[t]=c,c})}assignFinalMaterial(e){const t=e.geometry;let n=e.material;const r=t.attributes.tangent===void 0,a=t.attributes.color!==void 0,c=t.attributes.normal===void 0;if(e.isPoints){const u="PointsMaterial:"+n.uuid;let d=this.cache.get(u);d||(d=new Vg,Mr.prototype.copy.call(d,n),d.color.copy(n.color),d.map=n.map,d.sizeAttenuation=!1,this.cache.add(u,d)),n=d}else if(e.isLine){const u="LineBasicMaterial:"+n.uuid;let d=this.cache.get(u);d||(d=new kg,Mr.prototype.copy.call(d,n),d.color.copy(n.color),d.map=n.map,this.cache.add(u,d)),n=d}if(r||a||c){let u="ClonedMaterial:"+n.uuid+":";r&&(u+="derivative-tangents:"),a&&(u+="vertex-colors:"),c&&(u+="flat-shading:");let d=this.cache.get(u);d||(d=n.clone(),a&&(d.vertexColors=!0),c&&(d.flatShading=!0),r&&(d.normalScale&&(d.normalScale.y*=-1),d.clearcoatNormalScale&&(d.clearcoatNormalScale.y*=-1)),this.cache.add(u,d),this.associations.set(d,this.associations.get(n))),n=d}e.material=n}getMaterialType(){return Mh}loadMaterial(e){const t=this,n=this.json,r=this.extensions,a=n.materials[e];let c;const u={},d=a.extensions||{},p=[];if(d[Jt.KHR_MATERIALS_UNLIT]){const v=r[Jt.KHR_MATERIALS_UNLIT];c=v.getMaterialType(),p.push(v.extendParams(u,a,t))}else{const v=a.pbrMetallicRoughness||{};if(u.color=new Rt(1,1,1),u.opacity=1,Array.isArray(v.baseColorFactor)){const x=v.baseColorFactor;u.color.setRGB(x[0],x[1],x[2],$n),u.opacity=x[3]}v.baseColorTexture!==void 0&&p.push(t.assignTexture(u,"map",v.baseColorTexture,bn)),u.metalness=v.metallicFactor!==void 0?v.metallicFactor:1,u.roughness=v.roughnessFactor!==void 0?v.roughnessFactor:1,v.metallicRoughnessTexture!==void 0&&(p.push(t.assignTexture(u,"metalnessMap",v.metallicRoughnessTexture)),p.push(t.assignTexture(u,"roughnessMap",v.metallicRoughnessTexture))),c=this._invokeOne(function(x){return x.getMaterialType&&x.getMaterialType(e)}),p.push(Promise.all(this._invokeAll(function(x){return x.extendMaterialParams&&x.extendMaterialParams(e,u)})))}a.doubleSided===!0&&(u.side=yr);const g=a.alphaMode||Rf.OPAQUE;if(g===Rf.BLEND?(u.transparent=!0,u.depthWrite=!1):(u.transparent=!1,g===Rf.MASK&&(u.alphaTest=a.alphaCutoff!==void 0?a.alphaCutoff:.5)),a.normalTexture!==void 0&&c!==Zs&&(p.push(t.assignTexture(u,"normalMap",a.normalTexture)),u.normalScale=new Qt(1,1),a.normalTexture.scale!==void 0)){const v=a.normalTexture.scale;u.normalScale.set(v,v)}if(a.occlusionTexture!==void 0&&c!==Zs&&(p.push(t.assignTexture(u,"aoMap",a.occlusionTexture)),a.occlusionTexture.strength!==void 0&&(u.aoMapIntensity=a.occlusionTexture.strength)),a.emissiveFactor!==void 0&&c!==Zs){const v=a.emissiveFactor;u.emissive=new Rt().setRGB(v[0],v[1],v[2],$n)}return a.emissiveTexture!==void 0&&c!==Zs&&p.push(t.assignTexture(u,"emissiveMap",a.emissiveTexture,bn)),Promise.all(p).then(function(){const v=new c(u);return a.name&&(v.name=a.name),xs(v,a),t.associations.set(v,{materials:e}),a.extensions&&Xs(r,v,a),v})}createUniqueName(e){const t=cn.sanitizeNodeName(e||"");return t in this.nodeNamesUsed?t+"_"+ ++this.nodeNamesUsed[t]:(this.nodeNamesUsed[t]=0,t)}loadGeometries(e){const t=this,n=this.extensions,r=this.primitiveCache;function a(u){return n[Jt.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(u,t).then(function(d){return lg(d,u,t)})}const c=[];for(let u=0,d=e.length;u<d;u++){const p=e[u],g=q1(p),v=r[g];if(v)c.push(v.promise);else{let x;p.extensions&&p.extensions[Jt.KHR_DRACO_MESH_COMPRESSION]?x=a(p):x=lg(new Er,p,t),r[g]={primitive:p,promise:x},c.push(x)}}return Promise.all(c)}loadMesh(e){const t=this,n=this.json,r=this.extensions,a=n.meshes[e],c=a.primitives,u=[];for(let d=0,p=c.length;d<p;d++){const g=c[d].material===void 0?V1(this.cache):this.getDependency("material",c[d].material);u.push(g)}return u.push(t.loadGeometries(c)),Promise.all(u).then(function(d){const p=d.slice(0,d.length-1),g=d[d.length-1],v=[];for(let E=0,w=g.length;E<w;E++){const C=g[E],T=c[E];let M;const k=p[E];if(T.mode===qi.TRIANGLES||T.mode===qi.TRIANGLE_STRIP||T.mode===qi.TRIANGLE_FAN||T.mode===void 0)M=a.isSkinnedMesh===!0?new OR(C,k):new $i(C,k),M.isSkinnedMesh===!0&&M.normalizeSkinWeights(),T.mode===qi.TRIANGLE_STRIP?M.geometry=rg(M.geometry,yg):T.mode===qi.TRIANGLE_FAN&&(M.geometry=rg(M.geometry,eh));else if(T.mode===qi.LINES)M=new GR(C,k);else if(T.mode===qi.LINE_STRIP)M=new Sh(C,k);else if(T.mode===qi.LINE_LOOP)M=new kR(C,k);else if(T.mode===qi.POINTS)M=new VR(C,k);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+T.mode);Object.keys(M.geometry.morphAttributes).length>0&&X1(M,a),M.name=t.createUniqueName(a.name||"mesh_"+e),xs(M,a),T.extensions&&Xs(r,M,T),t.assignFinalMaterial(M),v.push(M)}for(let E=0,w=v.length;E<w;E++)t.associations.set(v[E],{meshes:e,primitives:E});if(v.length===1)return a.extensions&&Xs(r,v[0],a),v[0];const x=new Js;a.extensions&&Xs(r,x,a),t.associations.set(x,{meshes:e});for(let E=0,w=v.length;E<w;E++)x.add(v[E]);return x})}loadCamera(e){let t;const n=this.json.cameras[e],r=n[n.type];if(!r){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return n.type==="perspective"?t=new hi(RT.radToDeg(r.yfov),r.aspectRatio||1,r.znear||1,r.zfar||2e6):n.type==="orthographic"&&(t=new _h(-r.xmag,r.xmag,r.ymag,-r.ymag,r.znear,r.zfar)),n.name&&(t.name=this.createUniqueName(n.name)),xs(t,n),Promise.resolve(t)}loadSkin(e){const t=this.json.skins[e],n=[];for(let r=0,a=t.joints.length;r<a;r++)n.push(this._loadNodeShallow(t.joints[r]));return t.inverseBindMatrices!==void 0?n.push(this.getDependency("accessor",t.inverseBindMatrices)):n.push(null),Promise.all(n).then(function(r){const a=r.pop(),c=r,u=[],d=[];for(let p=0,g=c.length;p<g;p++){const v=c[p];if(v){u.push(v);const x=new qt;a!==null&&x.fromArray(a.array,p*16),d.push(x)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',t.joints[p])}return new yh(u,d)})}loadAnimation(e){const t=this.json,n=this,r=t.animations[e],a=r.name?r.name:"animation_"+e,c=[],u=[],d=[],p=[],g=[];for(let v=0,x=r.channels.length;v<x;v++){const E=r.channels[v],w=r.samplers[E.sampler],C=E.target,T=C.node,M=r.parameters!==void 0?r.parameters[w.input]:w.input,k=r.parameters!==void 0?r.parameters[w.output]:w.output;C.node!==void 0&&(c.push(this.getDependency("node",T)),u.push(this.getDependency("accessor",M)),d.push(this.getDependency("accessor",k)),p.push(w),g.push(C))}return Promise.all([Promise.all(c),Promise.all(u),Promise.all(d),Promise.all(p),Promise.all(g)]).then(function(v){const x=v[0],E=v[1],w=v[2],C=v[3],T=v[4],M=[];for(let k=0,O=x.length;k<O;k++){const B=x[k],W=E[k],J=w[k],m=C[k],me=T[k];if(B===void 0)continue;B.updateMatrix&&B.updateMatrix();const N=n._createAnimationTracks(B,W,J,m,me);if(N)for(let X=0;X<N.length;X++)M.push(N[X])}return new $R(a,void 0,M)})}createNodeMesh(e){const t=this.json,n=this,r=t.nodes[e];return r.mesh===void 0?null:n.getDependency("mesh",r.mesh).then(function(a){const c=n._getNodeRef(n.meshCache,r.mesh,a);return r.weights!==void 0&&c.traverse(function(u){if(u.isMesh)for(let d=0,p=r.weights.length;d<p;d++)u.morphTargetInfluences[d]=r.weights[d]}),c})}loadNode(e){const t=this.json,n=this,r=t.nodes[e],a=n._loadNodeShallow(e),c=[],u=r.children||[];for(let p=0,g=u.length;p<g;p++)c.push(n.getDependency("node",u[p]));const d=r.skin===void 0?Promise.resolve(null):n.getDependency("skin",r.skin);return Promise.all([a,Promise.all(c),d]).then(function(p){const g=p[0],v=p[1],x=p[2];x!==null&&g.traverse(function(E){E.isSkinnedMesh&&E.bind(x,j1)});for(let E=0,w=v.length;E<w;E++)g.add(v[E]);return g})}_loadNodeShallow(e){const t=this.json,n=this.extensions,r=this;if(this.nodeCache[e]!==void 0)return this.nodeCache[e];const a=t.nodes[e],c=a.name?r.createUniqueName(a.name):"",u=[],d=r._invokeOne(function(p){return p.createNodeMesh&&p.createNodeMesh(e)});return d&&u.push(d),a.camera!==void 0&&u.push(r.getDependency("camera",a.camera).then(function(p){return r._getNodeRef(r.cameraCache,a.camera,p)})),r._invokeAll(function(p){return p.createNodeAttachment&&p.createNodeAttachment(e)}).forEach(function(p){u.push(p)}),this.nodeCache[e]=Promise.all(u).then(function(p){let g;if(a.isBone===!0?g=new Gg:p.length>1?g=new Js:p.length===1?g=p[0]:g=new En,g!==p[0])for(let v=0,x=p.length;v<x;v++)g.add(p[v]);if(a.name&&(g.userData.name=a.name,g.name=c),xs(g,a),a.extensions&&Xs(n,g,a),a.matrix!==void 0){const v=new qt;v.fromArray(a.matrix),g.applyMatrix4(v)}else a.translation!==void 0&&g.position.fromArray(a.translation),a.rotation!==void 0&&g.quaternion.fromArray(a.rotation),a.scale!==void 0&&g.scale.fromArray(a.scale);return r.associations.has(g)||r.associations.set(g,{}),r.associations.get(g).nodes=e,g}),this.nodeCache[e]}loadScene(e){const t=this.extensions,n=this.json.scenes[e],r=this,a=new Js;n.name&&(a.name=r.createUniqueName(n.name)),xs(a,n),n.extensions&&Xs(t,a,n);const c=n.nodes||[],u=[];for(let d=0,p=c.length;d<p;d++)u.push(r.getDependency("node",c[d]));return Promise.all(u).then(function(d){for(let g=0,v=d.length;g<v;g++)a.add(d[g]);const p=g=>{const v=new Map;for(const[x,E]of r.associations)(x instanceof Mr||x instanceof Kn)&&v.set(x,E);return g.traverse(x=>{const E=r.associations.get(x);E!=null&&v.set(x,E)}),v};return r.associations=p(a),a})}_createAnimationTracks(e,t,n,r,a){const c=[],u=e.name?e.name:e.uuid,d=[];vs[a.path]===vs.weights?e.traverse(function(x){x.morphTargetInfluences&&d.push(x.name?x.name:x.uuid)}):d.push(u);let p;switch(vs[a.path]){case vs.weights:p=ta;break;case vs.rotation:p=so;break;case vs.position:case vs.scale:p=na;break;default:switch(n.itemSize){case 1:p=ta;break;case 2:case 3:default:p=na;break}break}const g=r.interpolation!==void 0?k1[r.interpolation]:Jo,v=this._getArrayFromAccessor(n);for(let x=0,E=d.length;x<E;x++){const w=new p(d[x]+"."+vs[a.path],t.array,v,g);r.interpolation==="CUBICSPLINE"&&this._createCubicSplineTrackInterpolant(w),c.push(w)}return c}_getArrayFromAccessor(e){let t=e.array;if(e.normalized){const n=ch(t.constructor),r=new Float32Array(t.length);for(let a=0,c=t.length;a<c;a++)r[a]=t[a]*n;t=r}return t}_createCubicSplineTrackInterpolant(e){e.createInterpolant=function(n){const r=this instanceof so?G1:Zg;return new r(this.times,this.values,this.getValueSize()/3,n)},e.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}}function $1(s,e,t){const n=e.attributes,r=new Jr;if(n.POSITION!==void 0){const u=t.json.accessors[n.POSITION],d=u.min,p=u.max;if(d!==void 0&&p!==void 0){if(r.set(new re(d[0],d[1],d[2]),new re(p[0],p[1],p[2])),u.normalized){const g=ch(Yo[u.componentType]);r.min.multiplyScalar(g),r.max.multiplyScalar(g)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;const a=e.targets;if(a!==void 0){const u=new re,d=new re;for(let p=0,g=a.length;p<g;p++){const v=a[p];if(v.POSITION!==void 0){const x=t.json.accessors[v.POSITION],E=x.min,w=x.max;if(E!==void 0&&w!==void 0){if(d.setX(Math.max(Math.abs(E[0]),Math.abs(w[0]))),d.setY(Math.max(Math.abs(E[1]),Math.abs(w[1]))),d.setZ(Math.max(Math.abs(E[2]),Math.abs(w[2]))),x.normalized){const C=ch(Yo[x.componentType]);d.multiplyScalar(C)}u.max(d)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}r.expandByVector(u)}s.boundingBox=r;const c=new Tr;r.getCenter(c.center),c.radius=r.min.distanceTo(r.max)/2,s.boundingSphere=c}function lg(s,e,t){const n=e.attributes,r=[];function a(c,u){return t.getDependency("accessor",c).then(function(d){s.setAttribute(u,d)})}for(const c in n){const u=lh[c]||c.toLowerCase();u in s.attributes||r.push(a(n[c],u))}if(e.indices!==void 0&&!s.index){const c=t.getDependency("accessor",e.indices).then(function(u){s.setIndex(u)});r.push(c)}return an.workingColorSpace!==$n&&"COLOR_0"in n&&console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${an.workingColorSpace}" not supported.`),xs(s,e),$1(s,e,t),Promise.all(r).then(function(){return e.targets!==void 0?W1(s,e.targets,t):s})}var Vo=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function Z1(s){return s&&s.__esModule&&Object.prototype.hasOwnProperty.call(s,"default")?s.default:s}var J1={exports:{}};/*!
 * jQuery JavaScript Library v3.7.1
 * https://jquery.com/
 *
 * Copyright OpenJS Foundation and other contributors
 * Released under the MIT license
 * https://jquery.org/license
 *
 * Date: 2023-08-28T13:37Z
 */(function(s){(function(e,t){s.exports=e.document?t(e,!0):function(n){if(!n.document)throw new Error("jQuery requires a window with a document");return t(n)}})(typeof window<"u"?window:Vo,function(e,t){var n=[],r=Object.getPrototypeOf,a=n.slice,c=n.flat?function(l){return n.flat.call(l)}:function(l){return n.concat.apply([],l)},u=n.push,d=n.indexOf,p={},g=p.toString,v=p.hasOwnProperty,x=v.toString,E=x.call(Object),w={},C=function(h){return typeof h=="function"&&typeof h.nodeType!="number"&&typeof h.item!="function"},T=function(h){return h!=null&&h===h.window},M=e.document,k={type:!0,src:!0,nonce:!0,noModule:!0};function O(l,h,_){_=_||M;var S,A,b=_.createElement("script");if(b.text=l,h)for(S in k)A=h[S]||h.getAttribute&&h.getAttribute(S),A&&b.setAttribute(S,A);_.head.appendChild(b).parentNode.removeChild(b)}function B(l){return l==null?l+"":typeof l=="object"||typeof l=="function"?p[g.call(l)]||"object":typeof l}var W="3.7.1",J=/HTML$/i,m=function(l,h){return new m.fn.init(l,h)};m.fn=m.prototype={jquery:W,constructor:m,length:0,toArray:function(){return a.call(this)},get:function(l){return l==null?a.call(this):l<0?this[l+this.length]:this[l]},pushStack:function(l){var h=m.merge(this.constructor(),l);return h.prevObject=this,h},each:function(l){return m.each(this,l)},map:function(l){return this.pushStack(m.map(this,function(h,_){return l.call(h,_,h)}))},slice:function(){return this.pushStack(a.apply(this,arguments))},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},even:function(){return this.pushStack(m.grep(this,function(l,h){return(h+1)%2}))},odd:function(){return this.pushStack(m.grep(this,function(l,h){return h%2}))},eq:function(l){var h=this.length,_=+l+(l<0?h:0);return this.pushStack(_>=0&&_<h?[this[_]]:[])},end:function(){return this.prevObject||this.constructor()},push:u,sort:n.sort,splice:n.splice},m.extend=m.fn.extend=function(){var l,h,_,S,A,b,L=arguments[0]||{},q=1,z=arguments.length,ee=!1;for(typeof L=="boolean"&&(ee=L,L=arguments[q]||{},q++),typeof L!="object"&&!C(L)&&(L={}),q===z&&(L=this,q--);q<z;q++)if((l=arguments[q])!=null)for(h in l)S=l[h],!(h==="__proto__"||L===S)&&(ee&&S&&(m.isPlainObject(S)||(A=Array.isArray(S)))?(_=L[h],A&&!Array.isArray(_)?b=[]:!A&&!m.isPlainObject(_)?b={}:b=_,A=!1,L[h]=m.extend(ee,b,S)):S!==void 0&&(L[h]=S));return L},m.extend({expando:"jQuery"+(W+Math.random()).replace(/\D/g,""),isReady:!0,error:function(l){throw new Error(l)},noop:function(){},isPlainObject:function(l){var h,_;return!l||g.call(l)!=="[object Object]"?!1:(h=r(l),h?(_=v.call(h,"constructor")&&h.constructor,typeof _=="function"&&x.call(_)===E):!0)},isEmptyObject:function(l){var h;for(h in l)return!1;return!0},globalEval:function(l,h,_){O(l,{nonce:h&&h.nonce},_)},each:function(l,h){var _,S=0;if(me(l))for(_=l.length;S<_&&h.call(l[S],S,l[S])!==!1;S++);else for(S in l)if(h.call(l[S],S,l[S])===!1)break;return l},text:function(l){var h,_="",S=0,A=l.nodeType;if(!A)for(;h=l[S++];)_+=m.text(h);return A===1||A===11?l.textContent:A===9?l.documentElement.textContent:A===3||A===4?l.nodeValue:_},makeArray:function(l,h){var _=h||[];return l!=null&&(me(Object(l))?m.merge(_,typeof l=="string"?[l]:l):u.call(_,l)),_},inArray:function(l,h,_){return h==null?-1:d.call(h,l,_)},isXMLDoc:function(l){var h=l&&l.namespaceURI,_=l&&(l.ownerDocument||l).documentElement;return!J.test(h||_&&_.nodeName||"HTML")},merge:function(l,h){for(var _=+h.length,S=0,A=l.length;S<_;S++)l[A++]=h[S];return l.length=A,l},grep:function(l,h,_){for(var S,A=[],b=0,L=l.length,q=!_;b<L;b++)S=!h(l[b],b),S!==q&&A.push(l[b]);return A},map:function(l,h,_){var S,A,b=0,L=[];if(me(l))for(S=l.length;b<S;b++)A=h(l[b],b,_),A!=null&&L.push(A);else for(b in l)A=h(l[b],b,_),A!=null&&L.push(A);return c(L)},guid:1,support:w}),typeof Symbol=="function"&&(m.fn[Symbol.iterator]=n[Symbol.iterator]),m.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "),function(l,h){p["[object "+h+"]"]=h.toLowerCase()});function me(l){var h=!!l&&"length"in l&&l.length,_=B(l);return C(l)||T(l)?!1:_==="array"||h===0||typeof h=="number"&&h>0&&h-1 in l}function N(l,h){return l.nodeName&&l.nodeName.toLowerCase()===h.toLowerCase()}var X=n.pop,Ee=n.sort,Re=n.splice,ye="[\\x20\\t\\r\\n\\f]",te=new RegExp("^"+ye+"+|((?:^|[^\\\\])(?:\\\\.)*)"+ye+"+$","g");m.contains=function(l,h){var _=h&&h.parentNode;return l===_||!!(_&&_.nodeType===1&&(l.contains?l.contains(_):l.compareDocumentPosition&&l.compareDocumentPosition(_)&16))};var xe=/([\0-\x1f\x7f]|^-?\d)|^-$|[^\x80-\uFFFF\w-]/g;function we(l,h){return h?l==="\0"?"�":l.slice(0,-1)+"\\"+l.charCodeAt(l.length-1).toString(16)+" ":"\\"+l}m.escapeSelector=function(l){return(l+"").replace(xe,we)};var ge=M,Oe=u;(function(){var l,h,_,S,A,b=Oe,L,q,z,ee,de,_e=m.expando,le=0,Ne=0,Ze=Ds(),Lt=Ds(),wt=Ds(),Un=Ds(),Mn=function(H,Z){return H===Z&&(A=!0),0},Fi="checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",Bi="(?:\\\\[\\da-fA-F]{1,6}"+ye+"?|\\\\[^\\r\\n\\f]|[\\w-]|[^\0-\\x7f])+",Vt="\\["+ye+"*("+Bi+")(?:"+ye+"*([*^$|!~]?=)"+ye+`*(?:'((?:\\\\.|[^\\\\'])*)'|"((?:\\\\.|[^\\\\"])*)"|(`+Bi+"))|)"+ye+"*\\]",hr=":("+Bi+`)(?:\\((('((?:\\\\.|[^\\\\'])*)'|"((?:\\\\.|[^\\\\"])*)")|((?:\\\\.|[^\\\\()[\\]]|`+Vt+")*)|.*)\\)|)",Wt=new RegExp(ye+"+","g"),ln=new RegExp("^"+ye+"*,"+ye+"*"),Cs=new RegExp("^"+ye+"*([>+~]|"+ye+")"+ye+"*"),mo=new RegExp(ye+"|>"),wi=new RegExp(hr),Lr=new RegExp("^"+Bi+"$"),gi={ID:new RegExp("^#("+Bi+")"),CLASS:new RegExp("^\\.("+Bi+")"),TAG:new RegExp("^("+Bi+"|[*])"),ATTR:new RegExp("^"+Vt),PSEUDO:new RegExp("^"+hr),CHILD:new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+ye+"*(even|odd|(([+-]|)(\\d*)n|)"+ye+"*(?:([+-]|)"+ye+"*(\\d+)|))"+ye+"*\\)|)","i"),bool:new RegExp("^(?:"+Fi+")$","i"),needsContext:new RegExp("^"+ye+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+ye+"*((?:-\\d)?\\d*)"+ye+"*\\)|)(?=[^-]|$)","i")},Ji=/^(?:input|select|textarea|button)$/i,dr=/^h\d$/i,Jn=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,Ls=/[+~]/,Qi=new RegExp("\\\\[\\da-fA-F]{1,6}"+ye+"?|\\\\([^\\r\\n\\f])","g"),Hi=function(H,Z){var ae="0x"+H.slice(1)-65536;return Z||(ae<0?String.fromCharCode(ae+65536):String.fromCharCode(ae>>10|55296,ae&1023|56320))},ri=function(){pr()},ya=Pr(function(H){return H.disabled===!0&&N(H,"fieldset")},{dir:"parentNode",next:"legend"});function Ps(){try{return L.activeElement}catch{}}try{b.apply(n=a.call(ge.childNodes),ge.childNodes),n[ge.childNodes.length].nodeType}catch{b={apply:function(Z,ae){Oe.apply(Z,a.call(ae))},call:function(Z){Oe.apply(Z,a.call(arguments,1))}}}function nn(H,Z,ae,ce){var U,j,Y,ve,Me,Qe,et,je=Z&&Z.ownerDocument,Nt=Z?Z.nodeType:9;if(ae=ae||[],typeof H!="string"||!H||Nt!==1&&Nt!==9&&Nt!==11)return ae;if(!ce&&(pr(Z),Z=Z||L,z)){if(Nt!==11&&(Me=Jn.exec(H)))if(U=Me[1]){if(Nt===9)if(Y=Z.getElementById(U)){if(Y.id===U)return b.call(ae,Y),ae}else return ae;else if(je&&(Y=je.getElementById(U))&&nn.contains(Z,Y)&&Y.id===U)return b.call(ae,Y),ae}else{if(Me[2])return b.apply(ae,Z.getElementsByTagName(H)),ae;if((U=Me[3])&&Z.getElementsByClassName)return b.apply(ae,Z.getElementsByClassName(U)),ae}if(!Un[H+" "]&&(!ee||!ee.test(H))){if(et=H,je=Z,Nt===1&&(mo.test(H)||Cs.test(H))){for(je=Ls.test(H)&&Sa(Z.parentNode)||Z,(je!=Z||!w.scope)&&((ve=Z.getAttribute("id"))?ve=m.escapeSelector(ve):Z.setAttribute("id",ve=_e)),Qe=os(H),j=Qe.length;j--;)Qe[j]=(ve?"#"+ve:":scope")+" "+Ci(Qe[j]);et=Qe.join(",")}try{return b.apply(ae,je.querySelectorAll(et)),ae}catch{Un(H,!0)}finally{ve===_e&&Z.removeAttribute("id")}}}return pl(H.replace(te,"$1"),Z,ae,ce)}function Ds(){var H=[];function Z(ae,ce){return H.push(ae+" ")>h.cacheLength&&delete Z[H.shift()],Z[ae+" "]=ce}return Z}function Ri(H){return H[_e]=!0,H}function ss(H){var Z=L.createElement("fieldset");try{return!!H(Z)}catch{return!1}finally{Z.parentNode&&Z.parentNode.removeChild(Z),Z=null}}function $c(H){return function(Z){return N(Z,"input")&&Z.type===H}}function Zc(H){return function(Z){return(N(Z,"input")||N(Z,"button"))&&Z.type===H}}function hl(H){return function(Z){return"form"in Z?Z.parentNode&&Z.disabled===!1?"label"in Z?"label"in Z.parentNode?Z.parentNode.disabled===H:Z.disabled===H:Z.isDisabled===H||Z.isDisabled!==!H&&ya(Z)===H:Z.disabled===H:"label"in Z?Z.disabled===H:!1}}function _i(H){return Ri(function(Z){return Z=+Z,Ri(function(ae,ce){for(var U,j=H([],ae.length,Z),Y=j.length;Y--;)ae[U=j[Y]]&&(ae[U]=!(ce[U]=ae[U]))})})}function Sa(H){return H&&typeof H.getElementsByTagName<"u"&&H}function pr(H){var Z,ae=H?H.ownerDocument||H:ge;return ae==L||ae.nodeType!==9||!ae.documentElement||(L=ae,q=L.documentElement,z=!m.isXMLDoc(L),de=q.matches||q.webkitMatchesSelector||q.msMatchesSelector,q.msMatchesSelector&&ge!=L&&(Z=L.defaultView)&&Z.top!==Z&&Z.addEventListener("unload",ri),w.getById=ss(function(ce){return q.appendChild(ce).id=m.expando,!L.getElementsByName||!L.getElementsByName(m.expando).length}),w.disconnectedMatch=ss(function(ce){return de.call(ce,"*")}),w.scope=ss(function(){return L.querySelectorAll(":scope")}),w.cssHas=ss(function(){try{return L.querySelector(":has(*,:jqfake)"),!1}catch{return!0}}),w.getById?(h.filter.ID=function(ce){var U=ce.replace(Qi,Hi);return function(j){return j.getAttribute("id")===U}},h.find.ID=function(ce,U){if(typeof U.getElementById<"u"&&z){var j=U.getElementById(ce);return j?[j]:[]}}):(h.filter.ID=function(ce){var U=ce.replace(Qi,Hi);return function(j){var Y=typeof j.getAttributeNode<"u"&&j.getAttributeNode("id");return Y&&Y.value===U}},h.find.ID=function(ce,U){if(typeof U.getElementById<"u"&&z){var j,Y,ve,Me=U.getElementById(ce);if(Me){if(j=Me.getAttributeNode("id"),j&&j.value===ce)return[Me];for(ve=U.getElementsByName(ce),Y=0;Me=ve[Y++];)if(j=Me.getAttributeNode("id"),j&&j.value===ce)return[Me]}return[]}}),h.find.TAG=function(ce,U){return typeof U.getElementsByTagName<"u"?U.getElementsByTagName(ce):U.querySelectorAll(ce)},h.find.CLASS=function(ce,U){if(typeof U.getElementsByClassName<"u"&&z)return U.getElementsByClassName(ce)},ee=[],ss(function(ce){var U;q.appendChild(ce).innerHTML="<a id='"+_e+"' href='' disabled='disabled'></a><select id='"+_e+"-\r\\' disabled='disabled'><option selected=''></option></select>",ce.querySelectorAll("[selected]").length||ee.push("\\["+ye+"*(?:value|"+Fi+")"),ce.querySelectorAll("[id~="+_e+"-]").length||ee.push("~="),ce.querySelectorAll("a#"+_e+"+*").length||ee.push(".#.+[+~]"),ce.querySelectorAll(":checked").length||ee.push(":checked"),U=L.createElement("input"),U.setAttribute("type","hidden"),ce.appendChild(U).setAttribute("name","D"),q.appendChild(ce).disabled=!0,ce.querySelectorAll(":disabled").length!==2&&ee.push(":enabled",":disabled"),U=L.createElement("input"),U.setAttribute("name",""),ce.appendChild(U),ce.querySelectorAll("[name='']").length||ee.push("\\["+ye+"*name"+ye+"*="+ye+`*(?:''|"")`)}),w.cssHas||ee.push(":has"),ee=ee.length&&new RegExp(ee.join("|")),Mn=function(ce,U){if(ce===U)return A=!0,0;var j=!ce.compareDocumentPosition-!U.compareDocumentPosition;return j||(j=(ce.ownerDocument||ce)==(U.ownerDocument||U)?ce.compareDocumentPosition(U):1,j&1||!w.sortDetached&&U.compareDocumentPosition(ce)===j?ce===L||ce.ownerDocument==ge&&nn.contains(ge,ce)?-1:U===L||U.ownerDocument==ge&&nn.contains(ge,U)?1:S?d.call(S,ce)-d.call(S,U):0:j&4?-1:1)}),L}nn.matches=function(H,Z){return nn(H,null,null,Z)},nn.matchesSelector=function(H,Z){if(pr(H),z&&!Un[Z+" "]&&(!ee||!ee.test(Z)))try{var ae=de.call(H,Z);if(ae||w.disconnectedMatch||H.document&&H.document.nodeType!==11)return ae}catch{Un(Z,!0)}return nn(Z,L,null,[H]).length>0},nn.contains=function(H,Z){return(H.ownerDocument||H)!=L&&pr(H),m.contains(H,Z)},nn.attr=function(H,Z){(H.ownerDocument||H)!=L&&pr(H);var ae=h.attrHandle[Z.toLowerCase()],ce=ae&&v.call(h.attrHandle,Z.toLowerCase())?ae(H,Z,!z):void 0;return ce!==void 0?ce:H.getAttribute(Z)},nn.error=function(H){throw new Error("Syntax error, unrecognized expression: "+H)},m.uniqueSort=function(H){var Z,ae=[],ce=0,U=0;if(A=!w.sortStable,S=!w.sortStable&&a.call(H,0),Ee.call(H,Mn),A){for(;Z=H[U++];)Z===H[U]&&(ce=ae.push(U));for(;ce--;)Re.call(H,ae[ce],1)}return S=null,H},m.fn.uniqueSort=function(){return this.pushStack(m.uniqueSort(a.apply(this)))},h=m.expr={cacheLength:50,createPseudo:Ri,match:gi,attrHandle:{},find:{},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(H){return H[1]=H[1].replace(Qi,Hi),H[3]=(H[3]||H[4]||H[5]||"").replace(Qi,Hi),H[2]==="~="&&(H[3]=" "+H[3]+" "),H.slice(0,4)},CHILD:function(H){return H[1]=H[1].toLowerCase(),H[1].slice(0,3)==="nth"?(H[3]||nn.error(H[0]),H[4]=+(H[4]?H[5]+(H[6]||1):2*(H[3]==="even"||H[3]==="odd")),H[5]=+(H[7]+H[8]||H[3]==="odd")):H[3]&&nn.error(H[0]),H},PSEUDO:function(H){var Z,ae=!H[6]&&H[2];return gi.CHILD.test(H[0])?null:(H[3]?H[2]=H[4]||H[5]||"":ae&&wi.test(ae)&&(Z=os(ae,!0))&&(Z=ae.indexOf(")",ae.length-Z)-ae.length)&&(H[0]=H[0].slice(0,Z),H[2]=ae.slice(0,Z)),H.slice(0,3))}},filter:{TAG:function(H){var Z=H.replace(Qi,Hi).toLowerCase();return H==="*"?function(){return!0}:function(ae){return N(ae,Z)}},CLASS:function(H){var Z=Ze[H+" "];return Z||(Z=new RegExp("(^|"+ye+")"+H+"("+ye+"|$)"))&&Ze(H,function(ae){return Z.test(typeof ae.className=="string"&&ae.className||typeof ae.getAttribute<"u"&&ae.getAttribute("class")||"")})},ATTR:function(H,Z,ae){return function(ce){var U=nn.attr(ce,H);return U==null?Z==="!=":Z?(U+="",Z==="="?U===ae:Z==="!="?U!==ae:Z==="^="?ae&&U.indexOf(ae)===0:Z==="*="?ae&&U.indexOf(ae)>-1:Z==="$="?ae&&U.slice(-ae.length)===ae:Z==="~="?(" "+U.replace(Wt," ")+" ").indexOf(ae)>-1:Z==="|="?U===ae||U.slice(0,ae.length+1)===ae+"-":!1):!0}},CHILD:function(H,Z,ae,ce,U){var j=H.slice(0,3)!=="nth",Y=H.slice(-4)!=="last",ve=Z==="of-type";return ce===1&&U===0?function(Me){return!!Me.parentNode}:function(Me,Qe,et){var je,Nt,ht,Ht,On,kn=j!==Y?"nextSibling":"previousSibling",Fn=Me.parentNode,oi=ve&&Me.nodeName.toLowerCase(),er=!et&&!ve,At=!1;if(Fn){if(j){for(;kn;){for(ht=Me;ht=ht[kn];)if(ve?N(ht,oi):ht.nodeType===1)return!1;On=kn=H==="only"&&!On&&"nextSibling"}return!0}if(On=[Y?Fn.firstChild:Fn.lastChild],Y&&er){for(Nt=Fn[_e]||(Fn[_e]={}),je=Nt[H]||[],Ht=je[0]===le&&je[1],At=Ht&&je[2],ht=Ht&&Fn.childNodes[Ht];ht=++Ht&&ht&&ht[kn]||(At=Ht=0)||On.pop();)if(ht.nodeType===1&&++At&&ht===Me){Nt[H]=[le,Ht,At];break}}else if(er&&(Nt=Me[_e]||(Me[_e]={}),je=Nt[H]||[],Ht=je[0]===le&&je[1],At=Ht),At===!1)for(;(ht=++Ht&&ht&&ht[kn]||(At=Ht=0)||On.pop())&&!((ve?N(ht,oi):ht.nodeType===1)&&++At&&(er&&(Nt=ht[_e]||(ht[_e]={}),Nt[H]=[le,At]),ht===Me)););return At-=U,At===ce||At%ce===0&&At/ce>=0}}},PSEUDO:function(H,Z){var ae,ce=h.pseudos[H]||h.setFilters[H.toLowerCase()]||nn.error("unsupported pseudo: "+H);return ce[_e]?ce(Z):ce.length>1?(ae=[H,H,"",Z],h.setFilters.hasOwnProperty(H.toLowerCase())?Ri(function(U,j){for(var Y,ve=ce(U,Z),Me=ve.length;Me--;)Y=d.call(U,ve[Me]),U[Y]=!(j[Y]=ve[Me])}):function(U){return ce(U,0,ae)}):ce}},pseudos:{not:Ri(function(H){var Z=[],ae=[],ce=Ta(H.replace(te,"$1"));return ce[_e]?Ri(function(U,j,Y,ve){for(var Me,Qe=ce(U,null,ve,[]),et=U.length;et--;)(Me=Qe[et])&&(U[et]=!(j[et]=Me))}):function(U,j,Y){return Z[0]=U,ce(Z,null,Y,ae),Z[0]=null,!ae.pop()}}),has:Ri(function(H){return function(Z){return nn(H,Z).length>0}}),contains:Ri(function(H){return H=H.replace(Qi,Hi),function(Z){return(Z.textContent||m.text(Z)).indexOf(H)>-1}}),lang:Ri(function(H){return Lr.test(H||"")||nn.error("unsupported lang: "+H),H=H.replace(Qi,Hi).toLowerCase(),function(Z){var ae;do if(ae=z?Z.lang:Z.getAttribute("xml:lang")||Z.getAttribute("lang"))return ae=ae.toLowerCase(),ae===H||ae.indexOf(H+"-")===0;while((Z=Z.parentNode)&&Z.nodeType===1);return!1}}),target:function(H){var Z=e.location&&e.location.hash;return Z&&Z.slice(1)===H.id},root:function(H){return H===q},focus:function(H){return H===Ps()&&L.hasFocus()&&!!(H.type||H.href||~H.tabIndex)},enabled:hl(!1),disabled:hl(!0),checked:function(H){return N(H,"input")&&!!H.checked||N(H,"option")&&!!H.selected},selected:function(H){return H.parentNode&&H.parentNode.selectedIndex,H.selected===!0},empty:function(H){for(H=H.firstChild;H;H=H.nextSibling)if(H.nodeType<6)return!1;return!0},parent:function(H){return!h.pseudos.empty(H)},header:function(H){return dr.test(H.nodeName)},input:function(H){return Ji.test(H.nodeName)},button:function(H){return N(H,"input")&&H.type==="button"||N(H,"button")},text:function(H){var Z;return N(H,"input")&&H.type==="text"&&((Z=H.getAttribute("type"))==null||Z.toLowerCase()==="text")},first:_i(function(){return[0]}),last:_i(function(H,Z){return[Z-1]}),eq:_i(function(H,Z,ae){return[ae<0?ae+Z:ae]}),even:_i(function(H,Z){for(var ae=0;ae<Z;ae+=2)H.push(ae);return H}),odd:_i(function(H,Z){for(var ae=1;ae<Z;ae+=2)H.push(ae);return H}),lt:_i(function(H,Z,ae){var ce;for(ae<0?ce=ae+Z:ae>Z?ce=Z:ce=ae;--ce>=0;)H.push(ce);return H}),gt:_i(function(H,Z,ae){for(var ce=ae<0?ae+Z:ae;++ce<Z;)H.push(ce);return H})}},h.pseudos.nth=h.pseudos.eq;for(l in{radio:!0,checkbox:!0,file:!0,password:!0,image:!0})h.pseudos[l]=$c(l);for(l in{submit:!0,reset:!0})h.pseudos[l]=Zc(l);function go(){}go.prototype=h.filters=h.pseudos,h.setFilters=new go;function os(H,Z){var ae,ce,U,j,Y,ve,Me,Qe=Lt[H+" "];if(Qe)return Z?0:Qe.slice(0);for(Y=H,ve=[],Me=h.preFilter;Y;){(!ae||(ce=ln.exec(Y)))&&(ce&&(Y=Y.slice(ce[0].length)||Y),ve.push(U=[])),ae=!1,(ce=Cs.exec(Y))&&(ae=ce.shift(),U.push({value:ae,type:ce[0].replace(te," ")}),Y=Y.slice(ae.length));for(j in h.filter)(ce=gi[j].exec(Y))&&(!Me[j]||(ce=Me[j](ce)))&&(ae=ce.shift(),U.push({value:ae,type:j,matches:ce}),Y=Y.slice(ae.length));if(!ae)break}return Z?Y.length:Y?nn.error(H):Lt(H,ve).slice(0)}function Ci(H){for(var Z=0,ae=H.length,ce="";Z<ae;Z++)ce+=H[Z].value;return ce}function Pr(H,Z,ae){var ce=Z.dir,U=Z.next,j=U||ce,Y=ae&&j==="parentNode",ve=Ne++;return Z.first?function(Me,Qe,et){for(;Me=Me[ce];)if(Me.nodeType===1||Y)return H(Me,Qe,et);return!1}:function(Me,Qe,et){var je,Nt,ht=[le,ve];if(et){for(;Me=Me[ce];)if((Me.nodeType===1||Y)&&H(Me,Qe,et))return!0}else for(;Me=Me[ce];)if(Me.nodeType===1||Y)if(Nt=Me[_e]||(Me[_e]={}),U&&N(Me,U))Me=Me[ce]||Me;else{if((je=Nt[j])&&je[0]===le&&je[1]===ve)return ht[2]=je[2];if(Nt[j]=ht,ht[2]=H(Me,Qe,et))return!0}return!1}}function Ma(H){return H.length>1?function(Z,ae,ce){for(var U=H.length;U--;)if(!H[U](Z,ae,ce))return!1;return!0}:H[0]}function Jc(H,Z,ae){for(var ce=0,U=Z.length;ce<U;ce++)nn(H,Z[ce],ae);return ae}function _o(H,Z,ae,ce,U){for(var j,Y=[],ve=0,Me=H.length,Qe=Z!=null;ve<Me;ve++)(j=H[ve])&&(!ae||ae(j,ce,U))&&(Y.push(j),Qe&&Z.push(ve));return Y}function mr(H,Z,ae,ce,U,j){return ce&&!ce[_e]&&(ce=mr(ce)),U&&!U[_e]&&(U=mr(U,j)),Ri(function(Y,ve,Me,Qe){var et,je,Nt,ht,Ht=[],On=[],kn=ve.length,Fn=Y||Jc(Z||"*",Me.nodeType?[Me]:Me,[]),oi=H&&(Y||!Z)?_o(Fn,Ht,H,Me,Qe):Fn;if(ae?(ht=U||(Y?H:kn||ce)?[]:ve,ae(oi,ht,Me,Qe)):ht=oi,ce)for(et=_o(ht,On),ce(et,[],Me,Qe),je=et.length;je--;)(Nt=et[je])&&(ht[On[je]]=!(oi[On[je]]=Nt));if(Y){if(U||H){if(U){for(et=[],je=ht.length;je--;)(Nt=ht[je])&&et.push(oi[je]=Nt);U(null,ht=[],et,Qe)}for(je=ht.length;je--;)(Nt=ht[je])&&(et=U?d.call(Y,Nt):Ht[je])>-1&&(Y[et]=!(ve[et]=Nt))}}else ht=_o(ht===ve?ht.splice(kn,ht.length):ht),U?U(null,ve,ht,Qe):b.apply(ve,ht)})}function si(H){for(var Z,ae,ce,U=H.length,j=h.relative[H[0].type],Y=j||h.relative[" "],ve=j?1:0,Me=Pr(function(je){return je===Z},Y,!0),Qe=Pr(function(je){return d.call(Z,je)>-1},Y,!0),et=[function(je,Nt,ht){var Ht=!j&&(ht||Nt!=_)||((Z=Nt).nodeType?Me(je,Nt,ht):Qe(je,Nt,ht));return Z=null,Ht}];ve<U;ve++)if(ae=h.relative[H[ve].type])et=[Pr(Ma(et),ae)];else{if(ae=h.filter[H[ve].type].apply(null,H[ve].matches),ae[_e]){for(ce=++ve;ce<U&&!h.relative[H[ce].type];ce++);return mr(ve>1&&Ma(et),ve>1&&Ci(H.slice(0,ve-1).concat({value:H[ve-2].type===" "?"*":""})).replace(te,"$1"),ae,ve<ce&&si(H.slice(ve,ce)),ce<U&&si(H=H.slice(ce)),ce<U&&Ci(H))}et.push(ae)}return Ma(et)}function dl(H,Z){var ae=Z.length>0,ce=H.length>0,U=function(j,Y,ve,Me,Qe){var et,je,Nt,ht=0,Ht="0",On=j&&[],kn=[],Fn=_,oi=j||ce&&h.find.TAG("*",Qe),er=le+=Fn==null?1:Math.random()||.1,At=oi.length;for(Qe&&(_=Y==L||Y||Qe);Ht!==At&&(et=oi[Ht])!=null;Ht++){if(ce&&et){for(je=0,!Y&&et.ownerDocument!=L&&(pr(et),ve=!z);Nt=H[je++];)if(Nt(et,Y||L,ve)){b.call(Me,et);break}Qe&&(le=er)}ae&&((et=!Nt&&et)&&ht--,j&&On.push(et))}if(ht+=Ht,ae&&Ht!==ht){for(je=0;Nt=Z[je++];)Nt(On,kn,Y,ve);if(j){if(ht>0)for(;Ht--;)On[Ht]||kn[Ht]||(kn[Ht]=X.call(Me));kn=_o(kn)}b.apply(Me,kn),Qe&&!j&&kn.length>0&&ht+Z.length>1&&m.uniqueSort(Me)}return Qe&&(le=er,_=Fn),On};return ae?Ri(U):U}function Ta(H,Z){var ae,ce=[],U=[],j=wt[H+" "];if(!j){for(Z||(Z=os(H)),ae=Z.length;ae--;)j=si(Z[ae]),j[_e]?ce.push(j):U.push(j);j=wt(H,dl(U,ce)),j.selector=H}return j}function pl(H,Z,ae,ce){var U,j,Y,ve,Me,Qe=typeof H=="function"&&H,et=!ce&&os(H=Qe.selector||H);if(ae=ae||[],et.length===1){if(j=et[0]=et[0].slice(0),j.length>2&&(Y=j[0]).type==="ID"&&Z.nodeType===9&&z&&h.relative[j[1].type]){if(Z=(h.find.ID(Y.matches[0].replace(Qi,Hi),Z)||[])[0],Z)Qe&&(Z=Z.parentNode);else return ae;H=H.slice(j.shift().value.length)}for(U=gi.needsContext.test(H)?0:j.length;U--&&(Y=j[U],!h.relative[ve=Y.type]);)if((Me=h.find[ve])&&(ce=Me(Y.matches[0].replace(Qi,Hi),Ls.test(j[0].type)&&Sa(Z.parentNode)||Z))){if(j.splice(U,1),H=ce.length&&Ci(j),!H)return b.apply(ae,ce),ae;break}}return(Qe||Ta(H,et))(ce,Z,!z,ae,!Z||Ls.test(H)&&Sa(Z.parentNode)||Z),ae}w.sortStable=_e.split("").sort(Mn).join("")===_e,pr(),w.sortDetached=ss(function(H){return H.compareDocumentPosition(L.createElement("fieldset"))&1}),m.find=nn,m.expr[":"]=m.expr.pseudos,m.unique=m.uniqueSort,nn.compile=Ta,nn.select=pl,nn.setDocument=pr,nn.tokenize=os,nn.escape=m.escapeSelector,nn.getText=m.text,nn.isXML=m.isXMLDoc,nn.selectors=m.expr,nn.support=m.support,nn.uniqueSort=m.uniqueSort})();var Ce=function(l,h,_){for(var S=[],A=_!==void 0;(l=l[h])&&l.nodeType!==9;)if(l.nodeType===1){if(A&&m(l).is(_))break;S.push(l)}return S},be=function(l,h){for(var _=[];l;l=l.nextSibling)l.nodeType===1&&l!==h&&_.push(l);return _},ne=m.expr.match.needsContext,pe=/^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;function Ve(l,h,_){return C(h)?m.grep(l,function(S,A){return!!h.call(S,A,S)!==_}):h.nodeType?m.grep(l,function(S){return S===h!==_}):typeof h!="string"?m.grep(l,function(S){return d.call(h,S)>-1!==_}):m.filter(h,l,_)}m.filter=function(l,h,_){var S=h[0];return _&&(l=":not("+l+")"),h.length===1&&S.nodeType===1?m.find.matchesSelector(S,l)?[S]:[]:m.find.matches(l,m.grep(h,function(A){return A.nodeType===1}))},m.fn.extend({find:function(l){var h,_,S=this.length,A=this;if(typeof l!="string")return this.pushStack(m(l).filter(function(){for(h=0;h<S;h++)if(m.contains(A[h],this))return!0}));for(_=this.pushStack([]),h=0;h<S;h++)m.find(l,A[h],_);return S>1?m.uniqueSort(_):_},filter:function(l){return this.pushStack(Ve(this,l||[],!1))},not:function(l){return this.pushStack(Ve(this,l||[],!0))},is:function(l){return!!Ve(this,typeof l=="string"&&ne.test(l)?m(l):l||[],!1).length}});var Ke,Ye=/^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/,lt=m.fn.init=function(l,h,_){var S,A;if(!l)return this;if(_=_||Ke,typeof l=="string")if(l[0]==="<"&&l[l.length-1]===">"&&l.length>=3?S=[null,l,null]:S=Ye.exec(l),S&&(S[1]||!h))if(S[1]){if(h=h instanceof m?h[0]:h,m.merge(this,m.parseHTML(S[1],h&&h.nodeType?h.ownerDocument||h:M,!0)),pe.test(S[1])&&m.isPlainObject(h))for(S in h)C(this[S])?this[S](h[S]):this.attr(S,h[S]);return this}else return A=M.getElementById(S[2]),A&&(this[0]=A,this.length=1),this;else return!h||h.jquery?(h||_).find(l):this.constructor(h).find(l);else{if(l.nodeType)return this[0]=l,this.length=1,this;if(C(l))return _.ready!==void 0?_.ready(l):l(m)}return m.makeArray(l,this)};lt.prototype=m.fn,Ke=m(M);var Ct=/^(?:parents|prev(?:Until|All))/,dt={children:!0,contents:!0,next:!0,prev:!0};m.fn.extend({has:function(l){var h=m(l,this),_=h.length;return this.filter(function(){for(var S=0;S<_;S++)if(m.contains(this,h[S]))return!0})},closest:function(l,h){var _,S=0,A=this.length,b=[],L=typeof l!="string"&&m(l);if(!ne.test(l)){for(;S<A;S++)for(_=this[S];_&&_!==h;_=_.parentNode)if(_.nodeType<11&&(L?L.index(_)>-1:_.nodeType===1&&m.find.matchesSelector(_,l))){b.push(_);break}}return this.pushStack(b.length>1?m.uniqueSort(b):b)},index:function(l){return l?typeof l=="string"?d.call(m(l),this[0]):d.call(this,l.jquery?l[0]:l):this[0]&&this[0].parentNode?this.first().prevAll().length:-1},add:function(l,h){return this.pushStack(m.uniqueSort(m.merge(this.get(),m(l,h))))},addBack:function(l){return this.add(l==null?this.prevObject:this.prevObject.filter(l))}});function De(l,h){for(;(l=l[h])&&l.nodeType!==1;);return l}m.each({parent:function(l){var h=l.parentNode;return h&&h.nodeType!==11?h:null},parents:function(l){return Ce(l,"parentNode")},parentsUntil:function(l,h,_){return Ce(l,"parentNode",_)},next:function(l){return De(l,"nextSibling")},prev:function(l){return De(l,"previousSibling")},nextAll:function(l){return Ce(l,"nextSibling")},prevAll:function(l){return Ce(l,"previousSibling")},nextUntil:function(l,h,_){return Ce(l,"nextSibling",_)},prevUntil:function(l,h,_){return Ce(l,"previousSibling",_)},siblings:function(l){return be((l.parentNode||{}).firstChild,l)},children:function(l){return be(l.firstChild)},contents:function(l){return l.contentDocument!=null&&r(l.contentDocument)?l.contentDocument:(N(l,"template")&&(l=l.content||l),m.merge([],l.childNodes))}},function(l,h){m.fn[l]=function(_,S){var A=m.map(this,h,_);return l.slice(-5)!=="Until"&&(S=_),S&&typeof S=="string"&&(A=m.filter(S,A)),this.length>1&&(dt[l]||m.uniqueSort(A),Ct.test(l)&&A.reverse()),this.pushStack(A)}});var Ge=/[^\x20\t\r\n\f]+/g;function ot(l){var h={};return m.each(l.match(Ge)||[],function(_,S){h[S]=!0}),h}m.Callbacks=function(l){l=typeof l=="string"?ot(l):m.extend({},l);var h,_,S,A,b=[],L=[],q=-1,z=function(){for(A=A||l.once,S=h=!0;L.length;q=-1)for(_=L.shift();++q<b.length;)b[q].apply(_[0],_[1])===!1&&l.stopOnFalse&&(q=b.length,_=!1);l.memory||(_=!1),h=!1,A&&(_?b=[]:b="")},ee={add:function(){return b&&(_&&!h&&(q=b.length-1,L.push(_)),function de(_e){m.each(_e,function(le,Ne){C(Ne)?(!l.unique||!ee.has(Ne))&&b.push(Ne):Ne&&Ne.length&&B(Ne)!=="string"&&de(Ne)})}(arguments),_&&!h&&z()),this},remove:function(){return m.each(arguments,function(de,_e){for(var le;(le=m.inArray(_e,b,le))>-1;)b.splice(le,1),le<=q&&q--}),this},has:function(de){return de?m.inArray(de,b)>-1:b.length>0},empty:function(){return b&&(b=[]),this},disable:function(){return A=L=[],b=_="",this},disabled:function(){return!b},lock:function(){return A=L=[],!_&&!h&&(b=_=""),this},locked:function(){return!!A},fireWith:function(de,_e){return A||(_e=_e||[],_e=[de,_e.slice?_e.slice():_e],L.push(_e),h||z()),this},fire:function(){return ee.fireWith(this,arguments),this},fired:function(){return!!S}};return ee};function oe(l){return l}function wn(l){throw l}function tt(l,h,_,S){var A;try{l&&C(A=l.promise)?A.call(l).done(h).fail(_):l&&C(A=l.then)?A.call(l,h,_):h.apply(void 0,[l].slice(S))}catch(b){_.apply(void 0,[b])}}m.extend({Deferred:function(l){var h=[["notify","progress",m.Callbacks("memory"),m.Callbacks("memory"),2],["resolve","done",m.Callbacks("once memory"),m.Callbacks("once memory"),0,"resolved"],["reject","fail",m.Callbacks("once memory"),m.Callbacks("once memory"),1,"rejected"]],_="pending",S={state:function(){return _},always:function(){return A.done(arguments).fail(arguments),this},catch:function(b){return S.then(null,b)},pipe:function(){var b=arguments;return m.Deferred(function(L){m.each(h,function(q,z){var ee=C(b[z[4]])&&b[z[4]];A[z[1]](function(){var de=ee&&ee.apply(this,arguments);de&&C(de.promise)?de.promise().progress(L.notify).done(L.resolve).fail(L.reject):L[z[0]+"With"](this,ee?[de]:arguments)})}),b=null}).promise()},then:function(b,L,q){var z=0;function ee(de,_e,le,Ne){return function(){var Ze=this,Lt=arguments,wt=function(){var Mn,Fi;if(!(de<z)){if(Mn=le.apply(Ze,Lt),Mn===_e.promise())throw new TypeError("Thenable self-resolution");Fi=Mn&&(typeof Mn=="object"||typeof Mn=="function")&&Mn.then,C(Fi)?Ne?Fi.call(Mn,ee(z,_e,oe,Ne),ee(z,_e,wn,Ne)):(z++,Fi.call(Mn,ee(z,_e,oe,Ne),ee(z,_e,wn,Ne),ee(z,_e,oe,_e.notifyWith))):(le!==oe&&(Ze=void 0,Lt=[Mn]),(Ne||_e.resolveWith)(Ze,Lt))}},Un=Ne?wt:function(){try{wt()}catch(Mn){m.Deferred.exceptionHook&&m.Deferred.exceptionHook(Mn,Un.error),de+1>=z&&(le!==wn&&(Ze=void 0,Lt=[Mn]),_e.rejectWith(Ze,Lt))}};de?Un():(m.Deferred.getErrorHook?Un.error=m.Deferred.getErrorHook():m.Deferred.getStackHook&&(Un.error=m.Deferred.getStackHook()),e.setTimeout(Un))}}return m.Deferred(function(de){h[0][3].add(ee(0,de,C(q)?q:oe,de.notifyWith)),h[1][3].add(ee(0,de,C(b)?b:oe)),h[2][3].add(ee(0,de,C(L)?L:wn))}).promise()},promise:function(b){return b!=null?m.extend(b,S):S}},A={};return m.each(h,function(b,L){var q=L[2],z=L[5];S[L[1]]=q.add,z&&q.add(function(){_=z},h[3-b][2].disable,h[3-b][3].disable,h[0][2].lock,h[0][3].lock),q.add(L[3].fire),A[L[0]]=function(){return A[L[0]+"With"](this===A?void 0:this,arguments),this},A[L[0]+"With"]=q.fireWith}),S.promise(A),l&&l.call(A,A),A},when:function(l){var h=arguments.length,_=h,S=Array(_),A=a.call(arguments),b=m.Deferred(),L=function(q){return function(z){S[q]=this,A[q]=arguments.length>1?a.call(arguments):z,--h||b.resolveWith(S,A)}};if(h<=1&&(tt(l,b.done(L(_)).resolve,b.reject,!h),b.state()==="pending"||C(A[_]&&A[_].then)))return b.then();for(;_--;)tt(A[_],L(_),b.reject);return b.promise()}});var mt=/^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;m.Deferred.exceptionHook=function(l,h){e.console&&e.console.warn&&l&&mt.test(l.name)&&e.console.warn("jQuery.Deferred exception: "+l.message,l.stack,h)},m.readyException=function(l){e.setTimeout(function(){throw l})};var vt=m.Deferred();m.fn.ready=function(l){return vt.then(l).catch(function(h){m.readyException(h)}),this},m.extend({isReady:!1,readyWait:1,ready:function(l){(l===!0?--m.readyWait:m.isReady)||(m.isReady=!0,!(l!==!0&&--m.readyWait>0)&&vt.resolveWith(M,[m]))}}),m.ready.then=vt.then;function Yt(){M.removeEventListener("DOMContentLoaded",Yt),e.removeEventListener("load",Yt),m.ready()}M.readyState==="complete"||M.readyState!=="loading"&&!M.documentElement.doScroll?e.setTimeout(m.ready):(M.addEventListener("DOMContentLoaded",Yt),e.addEventListener("load",Yt));var gt=function(l,h,_,S,A,b,L){var q=0,z=l.length,ee=_==null;if(B(_)==="object"){A=!0;for(q in _)gt(l,h,q,_[q],!0,b,L)}else if(S!==void 0&&(A=!0,C(S)||(L=!0),ee&&(L?(h.call(l,S),h=null):(ee=h,h=function(de,_e,le){return ee.call(m(de),le)})),h))for(;q<z;q++)h(l[q],_,L?S:S.call(l[q],q,h(l[q],_)));return A?l:ee?h.call(l):z?h(l[0],_):b},Dt=/^-ms-/,$t=/-([a-z])/g;function tn(l,h){return h.toUpperCase()}function en(l){return l.replace(Dt,"ms-").replace($t,tn)}var G=function(l){return l.nodeType===1||l.nodeType===9||!+l.nodeType};function D(){this.expando=m.expando+D.uid++}D.uid=1,D.prototype={cache:function(l){var h=l[this.expando];return h||(h={},G(l)&&(l.nodeType?l[this.expando]=h:Object.defineProperty(l,this.expando,{value:h,configurable:!0}))),h},set:function(l,h,_){var S,A=this.cache(l);if(typeof h=="string")A[en(h)]=_;else for(S in h)A[en(S)]=h[S];return A},get:function(l,h){return h===void 0?this.cache(l):l[this.expando]&&l[this.expando][en(h)]},access:function(l,h,_){return h===void 0||h&&typeof h=="string"&&_===void 0?this.get(l,h):(this.set(l,h,_),_!==void 0?_:h)},remove:function(l,h){var _,S=l[this.expando];if(S!==void 0){if(h!==void 0)for(Array.isArray(h)?h=h.map(en):(h=en(h),h=h in S?[h]:h.match(Ge)||[]),_=h.length;_--;)delete S[h[_]];(h===void 0||m.isEmptyObject(S))&&(l.nodeType?l[this.expando]=void 0:delete l[this.expando])}},hasData:function(l){var h=l[this.expando];return h!==void 0&&!m.isEmptyObject(h)}};var $=new D,Pe=new D,Ie=/^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,Be=/[A-Z]/g;function rt(l){return l==="true"?!0:l==="false"?!1:l==="null"?null:l===+l+""?+l:Ie.test(l)?JSON.parse(l):l}function ze(l,h,_){var S;if(_===void 0&&l.nodeType===1)if(S="data-"+h.replace(Be,"-$&").toLowerCase(),_=l.getAttribute(S),typeof _=="string"){try{_=rt(_)}catch{}Pe.set(l,h,_)}else _=void 0;return _}m.extend({hasData:function(l){return Pe.hasData(l)||$.hasData(l)},data:function(l,h,_){return Pe.access(l,h,_)},removeData:function(l,h){Pe.remove(l,h)},_data:function(l,h,_){return $.access(l,h,_)},_removeData:function(l,h){$.remove(l,h)}}),m.fn.extend({data:function(l,h){var _,S,A,b=this[0],L=b&&b.attributes;if(l===void 0){if(this.length&&(A=Pe.get(b),b.nodeType===1&&!$.get(b,"hasDataAttrs"))){for(_=L.length;_--;)L[_]&&(S=L[_].name,S.indexOf("data-")===0&&(S=en(S.slice(5)),ze(b,S,A[S])));$.set(b,"hasDataAttrs",!0)}return A}return typeof l=="object"?this.each(function(){Pe.set(this,l)}):gt(this,function(q){var z;if(b&&q===void 0)return z=Pe.get(b,l),z!==void 0||(z=ze(b,l),z!==void 0)?z:void 0;this.each(function(){Pe.set(this,l,q)})},null,h,arguments.length>1,null,!0)},removeData:function(l){return this.each(function(){Pe.remove(this,l)})}}),m.extend({queue:function(l,h,_){var S;if(l)return h=(h||"fx")+"queue",S=$.get(l,h),_&&(!S||Array.isArray(_)?S=$.access(l,h,m.makeArray(_)):S.push(_)),S||[]},dequeue:function(l,h){h=h||"fx";var _=m.queue(l,h),S=_.length,A=_.shift(),b=m._queueHooks(l,h),L=function(){m.dequeue(l,h)};A==="inprogress"&&(A=_.shift(),S--),A&&(h==="fx"&&_.unshift("inprogress"),delete b.stop,A.call(l,L,b)),!S&&b&&b.empty.fire()},_queueHooks:function(l,h){var _=h+"queueHooks";return $.get(l,_)||$.access(l,_,{empty:m.Callbacks("once memory").add(function(){$.remove(l,[h+"queue",_])})})}}),m.fn.extend({queue:function(l,h){var _=2;return typeof l!="string"&&(h=l,l="fx",_--),arguments.length<_?m.queue(this[0],l):h===void 0?this:this.each(function(){var S=m.queue(this,l,h);m._queueHooks(this,l),l==="fx"&&S[0]!=="inprogress"&&m.dequeue(this,l)})},dequeue:function(l){return this.each(function(){m.dequeue(this,l)})},clearQueue:function(l){return this.queue(l||"fx",[])},promise:function(l,h){var _,S=1,A=m.Deferred(),b=this,L=this.length,q=function(){--S||A.resolveWith(b,[b])};for(typeof l!="string"&&(h=l,l=void 0),l=l||"fx";L--;)_=$.get(b[L],l+"queueHooks"),_&&_.empty&&(S++,_.empty.add(q));return q(),A.promise(h)}});var qe=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,ct=new RegExp("^(?:([+-])=|)("+qe+")([a-z%]*)$","i"),Et=["Top","Right","Bottom","Left"],Ue=M.documentElement,Bt=function(l){return m.contains(l.ownerDocument,l)},St={composed:!0};Ue.getRootNode&&(Bt=function(l){return m.contains(l.ownerDocument,l)||l.getRootNode(St)===l.ownerDocument});var ut=function(l,h){return l=h||l,l.style.display==="none"||l.style.display===""&&Bt(l)&&m.css(l,"display")==="none"};function ft(l,h,_,S){var A,b,L=20,q=S?function(){return S.cur()}:function(){return m.css(l,h,"")},z=q(),ee=_&&_[3]||(m.cssNumber[h]?"":"px"),de=l.nodeType&&(m.cssNumber[h]||ee!=="px"&&+z)&&ct.exec(m.css(l,h));if(de&&de[3]!==ee){for(z=z/2,ee=ee||de[3],de=+z||1;L--;)m.style(l,h,de+ee),(1-b)*(1-(b=q()/z||.5))<=0&&(L=0),de=de/b;de=de*2,m.style(l,h,de+ee),_=_||[]}return _&&(de=+de||+z||0,A=_[1]?de+(_[1]+1)*_[2]:+_[2],S&&(S.unit=ee,S.start=de,S.end=A)),A}var Je={};function Gt(l){var h,_=l.ownerDocument,S=l.nodeName,A=Je[S];return A||(h=_.body.appendChild(_.createElement(S)),A=m.css(h,"display"),h.parentNode.removeChild(h),A==="none"&&(A="block"),Je[S]=A,A)}function Q(l,h){for(var _,S,A=[],b=0,L=l.length;b<L;b++)S=l[b],S.style&&(_=S.style.display,h?(_==="none"&&(A[b]=$.get(S,"display")||null,A[b]||(S.style.display="")),S.style.display===""&&ut(S)&&(A[b]=Gt(S))):_!=="none"&&(A[b]="none",$.set(S,"display",_)));for(b=0;b<L;b++)A[b]!=null&&(l[b].style.display=A[b]);return l}m.fn.extend({show:function(){return Q(this,!0)},hide:function(){return Q(this)},toggle:function(l){return typeof l=="boolean"?l?this.show():this.hide():this.each(function(){ut(this)?m(this).show():m(this).hide()})}});var ke=/^(?:checkbox|radio)$/i,He=/<([a-z][^\/\0>\x20\t\r\n\f]*)/i,Se=/^$|^module$|\/(?:java|ecma)script/i;(function(){var l=M.createDocumentFragment(),h=l.appendChild(M.createElement("div")),_=M.createElement("input");_.setAttribute("type","radio"),_.setAttribute("checked","checked"),_.setAttribute("name","t"),h.appendChild(_),w.checkClone=h.cloneNode(!0).cloneNode(!0).lastChild.checked,h.innerHTML="<textarea>x</textarea>",w.noCloneChecked=!!h.cloneNode(!0).lastChild.defaultValue,h.innerHTML="<option></option>",w.option=!!h.lastChild})();var Fe={thead:[1,"<table>","</table>"],col:[2,"<table><colgroup>","</colgroup></table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:[0,"",""]};Fe.tbody=Fe.tfoot=Fe.colgroup=Fe.caption=Fe.thead,Fe.th=Fe.td,w.option||(Fe.optgroup=Fe.option=[1,"<select multiple='multiple'>","</select>"]);function nt(l,h){var _;return typeof l.getElementsByTagName<"u"?_=l.getElementsByTagName(h||"*"):typeof l.querySelectorAll<"u"?_=l.querySelectorAll(h||"*"):_=[],h===void 0||h&&N(l,h)?m.merge([l],_):_}function kt(l,h){for(var _=0,S=l.length;_<S;_++)$.set(l[_],"globalEval",!h||$.get(h[_],"globalEval"))}var xn=/<|&#?\w+;/;function qn(l,h,_,S,A){for(var b,L,q,z,ee,de,_e=h.createDocumentFragment(),le=[],Ne=0,Ze=l.length;Ne<Ze;Ne++)if(b=l[Ne],b||b===0)if(B(b)==="object")m.merge(le,b.nodeType?[b]:b);else if(!xn.test(b))le.push(h.createTextNode(b));else{for(L=L||_e.appendChild(h.createElement("div")),q=(He.exec(b)||["",""])[1].toLowerCase(),z=Fe[q]||Fe._default,L.innerHTML=z[1]+m.htmlPrefilter(b)+z[2],de=z[0];de--;)L=L.lastChild;m.merge(le,L.childNodes),L=_e.firstChild,L.textContent=""}for(_e.textContent="",Ne=0;b=le[Ne++];){if(S&&m.inArray(b,S)>-1){A&&A.push(b);continue}if(ee=Bt(b),L=nt(_e.appendChild(b),"script"),ee&&kt(L),_)for(de=0;b=L[de++];)Se.test(b.type||"")&&_.push(b)}return _e}var rn=/^([^.]*)(?:\.(.+)|)/;function pn(){return!0}function Nn(){return!1}function cr(l,h,_,S,A,b){var L,q;if(typeof h=="object"){typeof _!="string"&&(S=S||_,_=void 0);for(q in h)cr(l,q,_,S,h[q],b);return l}if(S==null&&A==null?(A=_,S=_=void 0):A==null&&(typeof _=="string"?(A=S,S=void 0):(A=S,S=_,_=void 0)),A===!1)A=Nn;else if(!A)return l;return b===1&&(L=A,A=function(z){return m().off(z),L.apply(this,arguments)},A.guid=L.guid||(L.guid=m.guid++)),l.each(function(){m.event.add(this,h,A,S,_)})}m.event={global:{},add:function(l,h,_,S,A){var b,L,q,z,ee,de,_e,le,Ne,Ze,Lt,wt=$.get(l);if(G(l))for(_.handler&&(b=_,_=b.handler,A=b.selector),A&&m.find.matchesSelector(Ue,A),_.guid||(_.guid=m.guid++),(z=wt.events)||(z=wt.events=Object.create(null)),(L=wt.handle)||(L=wt.handle=function(Un){return typeof m<"u"&&m.event.triggered!==Un.type?m.event.dispatch.apply(l,arguments):void 0}),h=(h||"").match(Ge)||[""],ee=h.length;ee--;)q=rn.exec(h[ee])||[],Ne=Lt=q[1],Ze=(q[2]||"").split(".").sort(),Ne&&(_e=m.event.special[Ne]||{},Ne=(A?_e.delegateType:_e.bindType)||Ne,_e=m.event.special[Ne]||{},de=m.extend({type:Ne,origType:Lt,data:S,handler:_,guid:_.guid,selector:A,needsContext:A&&m.expr.match.needsContext.test(A),namespace:Ze.join(".")},b),(le=z[Ne])||(le=z[Ne]=[],le.delegateCount=0,(!_e.setup||_e.setup.call(l,S,Ze,L)===!1)&&l.addEventListener&&l.addEventListener(Ne,L)),_e.add&&(_e.add.call(l,de),de.handler.guid||(de.handler.guid=_.guid)),A?le.splice(le.delegateCount++,0,de):le.push(de),m.event.global[Ne]=!0)},remove:function(l,h,_,S,A){var b,L,q,z,ee,de,_e,le,Ne,Ze,Lt,wt=$.hasData(l)&&$.get(l);if(!(!wt||!(z=wt.events))){for(h=(h||"").match(Ge)||[""],ee=h.length;ee--;){if(q=rn.exec(h[ee])||[],Ne=Lt=q[1],Ze=(q[2]||"").split(".").sort(),!Ne){for(Ne in z)m.event.remove(l,Ne+h[ee],_,S,!0);continue}for(_e=m.event.special[Ne]||{},Ne=(S?_e.delegateType:_e.bindType)||Ne,le=z[Ne]||[],q=q[2]&&new RegExp("(^|\\.)"+Ze.join("\\.(?:.*\\.|)")+"(\\.|$)"),L=b=le.length;b--;)de=le[b],(A||Lt===de.origType)&&(!_||_.guid===de.guid)&&(!q||q.test(de.namespace))&&(!S||S===de.selector||S==="**"&&de.selector)&&(le.splice(b,1),de.selector&&le.delegateCount--,_e.remove&&_e.remove.call(l,de));L&&!le.length&&((!_e.teardown||_e.teardown.call(l,Ze,wt.handle)===!1)&&m.removeEvent(l,Ne,wt.handle),delete z[Ne])}m.isEmptyObject(z)&&$.remove(l,"handle events")}},dispatch:function(l){var h,_,S,A,b,L,q=new Array(arguments.length),z=m.event.fix(l),ee=($.get(this,"events")||Object.create(null))[z.type]||[],de=m.event.special[z.type]||{};for(q[0]=z,h=1;h<arguments.length;h++)q[h]=arguments[h];if(z.delegateTarget=this,!(de.preDispatch&&de.preDispatch.call(this,z)===!1)){for(L=m.event.handlers.call(this,z,ee),h=0;(A=L[h++])&&!z.isPropagationStopped();)for(z.currentTarget=A.elem,_=0;(b=A.handlers[_++])&&!z.isImmediatePropagationStopped();)(!z.rnamespace||b.namespace===!1||z.rnamespace.test(b.namespace))&&(z.handleObj=b,z.data=b.data,S=((m.event.special[b.origType]||{}).handle||b.handler).apply(A.elem,q),S!==void 0&&(z.result=S)===!1&&(z.preventDefault(),z.stopPropagation()));return de.postDispatch&&de.postDispatch.call(this,z),z.result}},handlers:function(l,h){var _,S,A,b,L,q=[],z=h.delegateCount,ee=l.target;if(z&&ee.nodeType&&!(l.type==="click"&&l.button>=1)){for(;ee!==this;ee=ee.parentNode||this)if(ee.nodeType===1&&!(l.type==="click"&&ee.disabled===!0)){for(b=[],L={},_=0;_<z;_++)S=h[_],A=S.selector+" ",L[A]===void 0&&(L[A]=S.needsContext?m(A,this).index(ee)>-1:m.find(A,this,null,[ee]).length),L[A]&&b.push(S);b.length&&q.push({elem:ee,handlers:b})}}return ee=this,z<h.length&&q.push({elem:ee,handlers:h.slice(z)}),q},addProp:function(l,h){Object.defineProperty(m.Event.prototype,l,{enumerable:!0,configurable:!0,get:C(h)?function(){if(this.originalEvent)return h(this.originalEvent)}:function(){if(this.originalEvent)return this.originalEvent[l]},set:function(_){Object.defineProperty(this,l,{enumerable:!0,configurable:!0,writable:!0,value:_})}})},fix:function(l){return l[m.expando]?l:new m.Event(l)},special:{load:{noBubble:!0},click:{setup:function(l){var h=this||l;return ke.test(h.type)&&h.click&&N(h,"input")&&Qr(h,"click",!0),!1},trigger:function(l){var h=this||l;return ke.test(h.type)&&h.click&&N(h,"input")&&Qr(h,"click"),!0},_default:function(l){var h=l.target;return ke.test(h.type)&&h.click&&N(h,"input")&&$.get(h,"click")||N(h,"a")}},beforeunload:{postDispatch:function(l){l.result!==void 0&&l.originalEvent&&(l.originalEvent.returnValue=l.result)}}}};function Qr(l,h,_){if(!_){$.get(l,h)===void 0&&m.event.add(l,h,pn);return}$.set(l,h,!1),m.event.add(l,h,{namespace:!1,handler:function(S){var A,b=$.get(this,h);if(S.isTrigger&1&&this[h]){if(b)(m.event.special[h]||{}).delegateType&&S.stopPropagation();else if(b=a.call(arguments),$.set(this,h,b),this[h](),A=$.get(this,h),$.set(this,h,!1),b!==A)return S.stopImmediatePropagation(),S.preventDefault(),A}else b&&($.set(this,h,m.event.trigger(b[0],b.slice(1),this)),S.stopPropagation(),S.isImmediatePropagationStopped=pn)}})}m.removeEvent=function(l,h,_){l.removeEventListener&&l.removeEventListener(h,_)},m.Event=function(l,h){if(!(this instanceof m.Event))return new m.Event(l,h);l&&l.type?(this.originalEvent=l,this.type=l.type,this.isDefaultPrevented=l.defaultPrevented||l.defaultPrevented===void 0&&l.returnValue===!1?pn:Nn,this.target=l.target&&l.target.nodeType===3?l.target.parentNode:l.target,this.currentTarget=l.currentTarget,this.relatedTarget=l.relatedTarget):this.type=l,h&&m.extend(this,h),this.timeStamp=l&&l.timeStamp||Date.now(),this[m.expando]=!0},m.Event.prototype={constructor:m.Event,isDefaultPrevented:Nn,isPropagationStopped:Nn,isImmediatePropagationStopped:Nn,isSimulated:!1,preventDefault:function(){var l=this.originalEvent;this.isDefaultPrevented=pn,l&&!this.isSimulated&&l.preventDefault()},stopPropagation:function(){var l=this.originalEvent;this.isPropagationStopped=pn,l&&!this.isSimulated&&l.stopPropagation()},stopImmediatePropagation:function(){var l=this.originalEvent;this.isImmediatePropagationStopped=pn,l&&!this.isSimulated&&l.stopImmediatePropagation(),this.stopPropagation()}},m.each({altKey:!0,bubbles:!0,cancelable:!0,changedTouches:!0,ctrlKey:!0,detail:!0,eventPhase:!0,metaKey:!0,pageX:!0,pageY:!0,shiftKey:!0,view:!0,char:!0,code:!0,charCode:!0,key:!0,keyCode:!0,button:!0,buttons:!0,clientX:!0,clientY:!0,offsetX:!0,offsetY:!0,pointerId:!0,pointerType:!0,screenX:!0,screenY:!0,targetTouches:!0,toElement:!0,touches:!0,which:!0},m.event.addProp),m.each({focus:"focusin",blur:"focusout"},function(l,h){function _(S){if(M.documentMode){var A=$.get(this,"handle"),b=m.event.fix(S);b.type=S.type==="focusin"?"focus":"blur",b.isSimulated=!0,A(S),b.target===b.currentTarget&&A(b)}else m.event.simulate(h,S.target,m.event.fix(S))}m.event.special[l]={setup:function(){var S;if(Qr(this,l,!0),M.documentMode)S=$.get(this,h),S||this.addEventListener(h,_),$.set(this,h,(S||0)+1);else return!1},trigger:function(){return Qr(this,l),!0},teardown:function(){var S;if(M.documentMode)S=$.get(this,h)-1,S?$.set(this,h,S):(this.removeEventListener(h,_),$.remove(this,h));else return!1},_default:function(S){return $.get(S.target,l)},delegateType:h},m.event.special[h]={setup:function(){var S=this.ownerDocument||this.document||this,A=M.documentMode?this:S,b=$.get(A,h);b||(M.documentMode?this.addEventListener(h,_):S.addEventListener(l,_,!0)),$.set(A,h,(b||0)+1)},teardown:function(){var S=this.ownerDocument||this.document||this,A=M.documentMode?this:S,b=$.get(A,h)-1;b?$.set(A,h,b):(M.documentMode?this.removeEventListener(h,_):S.removeEventListener(l,_,!0),$.remove(A,h))}}}),m.each({mouseenter:"mouseover",mouseleave:"mouseout",pointerenter:"pointerover",pointerleave:"pointerout"},function(l,h){m.event.special[l]={delegateType:h,bindType:h,handle:function(_){var S,A=this,b=_.relatedTarget,L=_.handleObj;return(!b||b!==A&&!m.contains(A,b))&&(_.type=L.origType,S=L.handler.apply(this,arguments),_.type=h),S}}}),m.fn.extend({on:function(l,h,_,S){return cr(this,l,h,_,S)},one:function(l,h,_,S){return cr(this,l,h,_,S,1)},off:function(l,h,_){var S,A;if(l&&l.preventDefault&&l.handleObj)return S=l.handleObj,m(l.delegateTarget).off(S.namespace?S.origType+"."+S.namespace:S.origType,S.selector,S.handler),this;if(typeof l=="object"){for(A in l)this.off(A,h,l[A]);return this}return(h===!1||typeof h=="function")&&(_=h,h=void 0),_===!1&&(_=Nn),this.each(function(){m.event.remove(this,l,_,h)})}});var es=/<script|<style|<link/i,ao=/checked\s*(?:[^=]|=\s*.checked.)/i,ts=/^\s*<!\[CDATA\[|\]\]>\s*$/g;function ws(l,h){return N(l,"table")&&N(h.nodeType!==11?h:h.firstChild,"tr")&&m(l).children("tbody")[0]||l}function lo(l){return l.type=(l.getAttribute("type")!==null)+"/"+l.type,l}function ca(l){return(l.type||"").slice(0,5)==="true/"?l.type=l.type.slice(5):l.removeAttribute("type"),l}function co(l,h){var _,S,A,b,L,q,z;if(h.nodeType===1){if($.hasData(l)&&(b=$.get(l),z=b.events,z)){$.remove(h,"handle events");for(A in z)for(_=0,S=z[A].length;_<S;_++)m.event.add(h,A,z[A][_])}Pe.hasData(l)&&(L=Pe.access(l),q=m.extend({},L),Pe.set(h,q))}}function uo(l,h){var _=h.nodeName.toLowerCase();_==="input"&&ke.test(l.type)?h.checked=l.checked:(_==="input"||_==="textarea")&&(h.defaultValue=l.defaultValue)}function F(l,h,_,S){h=c(h);var A,b,L,q,z,ee,de=0,_e=l.length,le=_e-1,Ne=h[0],Ze=C(Ne);if(Ze||_e>1&&typeof Ne=="string"&&!w.checkClone&&ao.test(Ne))return l.each(function(Lt){var wt=l.eq(Lt);Ze&&(h[0]=Ne.call(this,Lt,wt.html())),F(wt,h,_,S)});if(_e&&(A=qn(h,l[0].ownerDocument,!1,l,S),b=A.firstChild,A.childNodes.length===1&&(A=b),b||S)){for(L=m.map(nt(A,"script"),lo),q=L.length;de<_e;de++)z=A,de!==le&&(z=m.clone(z,!0,!0),q&&m.merge(L,nt(z,"script"))),_.call(l[de],z,de);if(q)for(ee=L[L.length-1].ownerDocument,m.map(L,ca),de=0;de<q;de++)z=L[de],Se.test(z.type||"")&&!$.access(z,"globalEval")&&m.contains(ee,z)&&(z.src&&(z.type||"").toLowerCase()!=="module"?m._evalUrl&&!z.noModule&&m._evalUrl(z.src,{nonce:z.nonce||z.getAttribute("nonce")},ee):O(z.textContent.replace(ts,""),z,ee))}return l}function se(l,h,_){for(var S,A=h?m.filter(h,l):l,b=0;(S=A[b])!=null;b++)!_&&S.nodeType===1&&m.cleanData(nt(S)),S.parentNode&&(_&&Bt(S)&&kt(nt(S,"script")),S.parentNode.removeChild(S));return l}m.extend({htmlPrefilter:function(l){return l},clone:function(l,h,_){var S,A,b,L,q=l.cloneNode(!0),z=Bt(l);if(!w.noCloneChecked&&(l.nodeType===1||l.nodeType===11)&&!m.isXMLDoc(l))for(L=nt(q),b=nt(l),S=0,A=b.length;S<A;S++)uo(b[S],L[S]);if(h)if(_)for(b=b||nt(l),L=L||nt(q),S=0,A=b.length;S<A;S++)co(b[S],L[S]);else co(l,q);return L=nt(q,"script"),L.length>0&&kt(L,!z&&nt(l,"script")),q},cleanData:function(l){for(var h,_,S,A=m.event.special,b=0;(_=l[b])!==void 0;b++)if(G(_)){if(h=_[$.expando]){if(h.events)for(S in h.events)A[S]?m.event.remove(_,S):m.removeEvent(_,S,h.handle);_[$.expando]=void 0}_[Pe.expando]&&(_[Pe.expando]=void 0)}}}),m.fn.extend({detach:function(l){return se(this,l,!0)},remove:function(l){return se(this,l)},text:function(l){return gt(this,function(h){return h===void 0?m.text(this):this.empty().each(function(){(this.nodeType===1||this.nodeType===11||this.nodeType===9)&&(this.textContent=h)})},null,l,arguments.length)},append:function(){return F(this,arguments,function(l){if(this.nodeType===1||this.nodeType===11||this.nodeType===9){var h=ws(this,l);h.appendChild(l)}})},prepend:function(){return F(this,arguments,function(l){if(this.nodeType===1||this.nodeType===11||this.nodeType===9){var h=ws(this,l);h.insertBefore(l,h.firstChild)}})},before:function(){return F(this,arguments,function(l){this.parentNode&&this.parentNode.insertBefore(l,this)})},after:function(){return F(this,arguments,function(l){this.parentNode&&this.parentNode.insertBefore(l,this.nextSibling)})},empty:function(){for(var l,h=0;(l=this[h])!=null;h++)l.nodeType===1&&(m.cleanData(nt(l,!1)),l.textContent="");return this},clone:function(l,h){return l=l??!1,h=h??l,this.map(function(){return m.clone(this,l,h)})},html:function(l){return gt(this,function(h){var _=this[0]||{},S=0,A=this.length;if(h===void 0&&_.nodeType===1)return _.innerHTML;if(typeof h=="string"&&!es.test(h)&&!Fe[(He.exec(h)||["",""])[1].toLowerCase()]){h=m.htmlPrefilter(h);try{for(;S<A;S++)_=this[S]||{},_.nodeType===1&&(m.cleanData(nt(_,!1)),_.innerHTML=h);_=0}catch{}}_&&this.empty().append(h)},null,l,arguments.length)},replaceWith:function(){var l=[];return F(this,arguments,function(h){var _=this.parentNode;m.inArray(this,l)<0&&(m.cleanData(nt(this)),_&&_.replaceChild(h,this))},l)}}),m.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(l,h){m.fn[l]=function(_){for(var S,A=[],b=m(_),L=b.length-1,q=0;q<=L;q++)S=q===L?this:this.clone(!0),m(b[q])[h](S),u.apply(A,S.get());return this.pushStack(A)}});var ue=new RegExp("^("+qe+")(?!px)[a-z%]+$","i"),fe=/^--/,he=function(l){var h=l.ownerDocument.defaultView;return(!h||!h.opener)&&(h=e),h.getComputedStyle(l)},$e=function(l,h,_){var S,A,b={};for(A in h)b[A]=l.style[A],l.style[A]=h[A];S=_.call(l);for(A in h)l.style[A]=b[A];return S},it=new RegExp(Et.join("|"),"i");(function(){function l(){if(ee){z.style.cssText="position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0",ee.style.cssText="position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%",Ue.appendChild(z).appendChild(ee);var de=e.getComputedStyle(ee);_=de.top!=="1%",q=h(de.marginLeft)===12,ee.style.right="60%",b=h(de.right)===36,S=h(de.width)===36,ee.style.position="absolute",A=h(ee.offsetWidth/3)===12,Ue.removeChild(z),ee=null}}function h(de){return Math.round(parseFloat(de))}var _,S,A,b,L,q,z=M.createElement("div"),ee=M.createElement("div");ee.style&&(ee.style.backgroundClip="content-box",ee.cloneNode(!0).style.backgroundClip="",w.clearCloneStyle=ee.style.backgroundClip==="content-box",m.extend(w,{boxSizingReliable:function(){return l(),S},pixelBoxStyles:function(){return l(),b},pixelPosition:function(){return l(),_},reliableMarginLeft:function(){return l(),q},scrollboxSize:function(){return l(),A},reliableTrDimensions:function(){var de,_e,le,Ne;return L==null&&(de=M.createElement("table"),_e=M.createElement("tr"),le=M.createElement("div"),de.style.cssText="position:absolute;left:-11111px;border-collapse:separate",_e.style.cssText="box-sizing:content-box;border:1px solid",_e.style.height="1px",le.style.height="9px",le.style.display="block",Ue.appendChild(de).appendChild(_e).appendChild(le),Ne=e.getComputedStyle(_e),L=parseInt(Ne.height,10)+parseInt(Ne.borderTopWidth,10)+parseInt(Ne.borderBottomWidth,10)===_e.offsetHeight,Ue.removeChild(de)),L}}))})();function at(l,h,_){var S,A,b,L,q=fe.test(h),z=l.style;return _=_||he(l),_&&(L=_.getPropertyValue(h)||_[h],q&&L&&(L=L.replace(te,"$1")||void 0),L===""&&!Bt(l)&&(L=m.style(l,h)),!w.pixelBoxStyles()&&ue.test(L)&&it.test(h)&&(S=z.width,A=z.minWidth,b=z.maxWidth,z.minWidth=z.maxWidth=z.width=L,L=_.width,z.width=S,z.minWidth=A,z.maxWidth=b)),L!==void 0?L+"":L}function pt(l,h){return{get:function(){if(l()){delete this.get;return}return(this.get=h).apply(this,arguments)}}}var bt=["Webkit","Moz","ms"],Mt=M.createElement("div").style,Tt={};function mn(l){for(var h=l[0].toUpperCase()+l.slice(1),_=bt.length;_--;)if(l=bt[_]+h,l in Mt)return l}function Ln(l){var h=m.cssProps[l]||Tt[l];return h||(l in Mt?l:Tt[l]=mn(l)||l)}var yn=/^(none|table(?!-c[ea]).+)/,Ai={position:"absolute",visibility:"hidden",display:"block"},hn={letterSpacing:"0",fontWeight:"400"};function It(l,h,_){var S=ct.exec(h);return S?Math.max(0,S[2]-(_||0))+(S[3]||"px"):h}function br(l,h,_,S,A,b){var L=h==="width"?1:0,q=0,z=0,ee=0;if(_===(S?"border":"content"))return 0;for(;L<4;L+=2)_==="margin"&&(ee+=m.css(l,_+Et[L],!0,A)),S?(_==="content"&&(z-=m.css(l,"padding"+Et[L],!0,A)),_!=="margin"&&(z-=m.css(l,"border"+Et[L]+"Width",!0,A))):(z+=m.css(l,"padding"+Et[L],!0,A),_!=="padding"?z+=m.css(l,"border"+Et[L]+"Width",!0,A):q+=m.css(l,"border"+Et[L]+"Width",!0,A));return!S&&b>=0&&(z+=Math.max(0,Math.ceil(l["offset"+h[0].toUpperCase()+h.slice(1)]-b-z-q-.5))||0),z+ee}function gn(l,h,_){var S=he(l),A=!w.boxSizingReliable()||_,b=A&&m.css(l,"boxSizing",!1,S)==="border-box",L=b,q=at(l,h,S),z="offset"+h[0].toUpperCase()+h.slice(1);if(ue.test(q)){if(!_)return q;q="auto"}return(!w.boxSizingReliable()&&b||!w.reliableTrDimensions()&&N(l,"tr")||q==="auto"||!parseFloat(q)&&m.css(l,"display",!1,S)==="inline")&&l.getClientRects().length&&(b=m.css(l,"boxSizing",!1,S)==="border-box",L=z in l,L&&(q=l[z])),q=parseFloat(q)||0,q+br(l,h,_||(b?"border":"content"),L,S,q)+"px"}m.extend({cssHooks:{opacity:{get:function(l,h){if(h){var _=at(l,"opacity");return _===""?"1":_}}}},cssNumber:{animationIterationCount:!0,aspectRatio:!0,borderImageSlice:!0,columnCount:!0,flexGrow:!0,flexShrink:!0,fontWeight:!0,gridArea:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnStart:!0,gridRow:!0,gridRowEnd:!0,gridRowStart:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,scale:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeMiterlimit:!0,strokeOpacity:!0},cssProps:{},style:function(l,h,_,S){if(!(!l||l.nodeType===3||l.nodeType===8||!l.style)){var A,b,L,q=en(h),z=fe.test(h),ee=l.style;if(z||(h=Ln(q)),L=m.cssHooks[h]||m.cssHooks[q],_!==void 0){if(b=typeof _,b==="string"&&(A=ct.exec(_))&&A[1]&&(_=ft(l,h,A),b="number"),_==null||_!==_)return;b==="number"&&!z&&(_+=A&&A[3]||(m.cssNumber[q]?"":"px")),!w.clearCloneStyle&&_===""&&h.indexOf("background")===0&&(ee[h]="inherit"),(!L||!("set"in L)||(_=L.set(l,_,S))!==void 0)&&(z?ee.setProperty(h,_):ee[h]=_)}else return L&&"get"in L&&(A=L.get(l,!1,S))!==void 0?A:ee[h]}},css:function(l,h,_,S){var A,b,L,q=en(h),z=fe.test(h);return z||(h=Ln(q)),L=m.cssHooks[h]||m.cssHooks[q],L&&"get"in L&&(A=L.get(l,!0,_)),A===void 0&&(A=at(l,h,S)),A==="normal"&&h in hn&&(A=hn[h]),_===""||_?(b=parseFloat(A),_===!0||isFinite(b)?b||0:A):A}}),m.each(["height","width"],function(l,h){m.cssHooks[h]={get:function(_,S,A){if(S)return yn.test(m.css(_,"display"))&&(!_.getClientRects().length||!_.getBoundingClientRect().width)?$e(_,Ai,function(){return gn(_,h,A)}):gn(_,h,A)},set:function(_,S,A){var b,L=he(_),q=!w.scrollboxSize()&&L.position==="absolute",z=q||A,ee=z&&m.css(_,"boxSizing",!1,L)==="border-box",de=A?br(_,h,A,ee,L):0;return ee&&q&&(de-=Math.ceil(_["offset"+h[0].toUpperCase()+h.slice(1)]-parseFloat(L[h])-br(_,h,"border",!1,L)-.5)),de&&(b=ct.exec(S))&&(b[3]||"px")!=="px"&&(_.style[h]=S,S=m.css(_,h)),It(_,S,de)}}}),m.cssHooks.marginLeft=pt(w.reliableMarginLeft,function(l,h){if(h)return(parseFloat(at(l,"marginLeft"))||l.getBoundingClientRect().left-$e(l,{marginLeft:0},function(){return l.getBoundingClientRect().left}))+"px"}),m.each({margin:"",padding:"",border:"Width"},function(l,h){m.cssHooks[l+h]={expand:function(_){for(var S=0,A={},b=typeof _=="string"?_.split(" "):[_];S<4;S++)A[l+Et[S]+h]=b[S]||b[S-2]||b[0];return A}},l!=="margin"&&(m.cssHooks[l+h].set=It)}),m.fn.extend({css:function(l,h){return gt(this,function(_,S,A){var b,L,q={},z=0;if(Array.isArray(S)){for(b=he(_),L=S.length;z<L;z++)q[S[z]]=m.css(_,S[z],!1,b);return q}return A!==void 0?m.style(_,S,A):m.css(_,S)},l,h,arguments.length>1)}});function _n(l,h,_,S,A){return new _n.prototype.init(l,h,_,S,A)}m.Tween=_n,_n.prototype={constructor:_n,init:function(l,h,_,S,A,b){this.elem=l,this.prop=_,this.easing=A||m.easing._default,this.options=h,this.start=this.now=this.cur(),this.end=S,this.unit=b||(m.cssNumber[_]?"":"px")},cur:function(){var l=_n.propHooks[this.prop];return l&&l.get?l.get(this):_n.propHooks._default.get(this)},run:function(l){var h,_=_n.propHooks[this.prop];return this.options.duration?this.pos=h=m.easing[this.easing](l,this.options.duration*l,0,1,this.options.duration):this.pos=h=l,this.now=(this.end-this.start)*h+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),_&&_.set?_.set(this):_n.propHooks._default.set(this),this}},_n.prototype.init.prototype=_n.prototype,_n.propHooks={_default:{get:function(l){var h;return l.elem.nodeType!==1||l.elem[l.prop]!=null&&l.elem.style[l.prop]==null?l.elem[l.prop]:(h=m.css(l.elem,l.prop,""),!h||h==="auto"?0:h)},set:function(l){m.fx.step[l.prop]?m.fx.step[l.prop](l):l.elem.nodeType===1&&(m.cssHooks[l.prop]||l.elem.style[Ln(l.prop)]!=null)?m.style(l.elem,l.prop,l.now+l.unit):l.elem[l.prop]=l.now}}},_n.propHooks.scrollTop=_n.propHooks.scrollLeft={set:function(l){l.elem.nodeType&&l.elem.parentNode&&(l.elem[l.prop]=l.now)}},m.easing={linear:function(l){return l},swing:function(l){return .5-Math.cos(l*Math.PI)/2},_default:"swing"},m.fx=_n.prototype.init,m.fx.step={};var Oi,pi,Rs=/^(?:toggle|show|hide)$/,Pn=/queueHooks$/;function Zn(){pi&&(M.hidden===!1&&e.requestAnimationFrame?e.requestAnimationFrame(Zn):e.setTimeout(Zn,m.fx.interval),m.fx.tick())}function wr(){return e.setTimeout(function(){Oi=void 0}),Oi=Date.now()}function Dn(l,h){var _,S=0,A={height:l};for(h=h?1:0;S<4;S+=2-h)_=Et[S],A["margin"+_]=A["padding"+_]=l;return h&&(A.opacity=A.width=l),A}function Rr(l,h,_){for(var S,A=(bi.tweeners[h]||[]).concat(bi.tweeners["*"]),b=0,L=A.length;b<L;b++)if(S=A[b].call(_,h,l))return S}function fo(l,h,_){var S,A,b,L,q,z,ee,de,_e="width"in h||"height"in h,le=this,Ne={},Ze=l.style,Lt=l.nodeType&&ut(l),wt=$.get(l,"fxshow");_.queue||(L=m._queueHooks(l,"fx"),L.unqueued==null&&(L.unqueued=0,q=L.empty.fire,L.empty.fire=function(){L.unqueued||q()}),L.unqueued++,le.always(function(){le.always(function(){L.unqueued--,m.queue(l,"fx").length||L.empty.fire()})}));for(S in h)if(A=h[S],Rs.test(A)){if(delete h[S],b=b||A==="toggle",A===(Lt?"hide":"show"))if(A==="show"&&wt&&wt[S]!==void 0)Lt=!0;else continue;Ne[S]=wt&&wt[S]||m.style(l,S)}if(z=!m.isEmptyObject(h),!(!z&&m.isEmptyObject(Ne))){_e&&l.nodeType===1&&(_.overflow=[Ze.overflow,Ze.overflowX,Ze.overflowY],ee=wt&&wt.display,ee==null&&(ee=$.get(l,"display")),de=m.css(l,"display"),de==="none"&&(ee?de=ee:(Q([l],!0),ee=l.style.display||ee,de=m.css(l,"display"),Q([l]))),(de==="inline"||de==="inline-block"&&ee!=null)&&m.css(l,"float")==="none"&&(z||(le.done(function(){Ze.display=ee}),ee==null&&(de=Ze.display,ee=de==="none"?"":de)),Ze.display="inline-block")),_.overflow&&(Ze.overflow="hidden",le.always(function(){Ze.overflow=_.overflow[0],Ze.overflowX=_.overflow[1],Ze.overflowY=_.overflow[2]})),z=!1;for(S in Ne)z||(wt?"hidden"in wt&&(Lt=wt.hidden):wt=$.access(l,"fxshow",{display:ee}),b&&(wt.hidden=!Lt),Lt&&Q([l],!0),le.done(function(){Lt||Q([l]),$.remove(l,"fxshow");for(S in Ne)m.style(l,S,Ne[S])})),z=Rr(Lt?wt[S]:0,S,le),S in wt||(wt[S]=z.start,Lt&&(z.end=z.start,z.start=0))}}function ns(l,h){var _,S,A,b,L;for(_ in l)if(S=en(_),A=h[S],b=l[_],Array.isArray(b)&&(A=b[1],b=l[_]=b[0]),_!==S&&(l[S]=b,delete l[_]),L=m.cssHooks[S],L&&"expand"in L){b=L.expand(b),delete l[S];for(_ in b)_ in l||(l[_]=b[_],h[_]=A)}else h[S]=A}function bi(l,h,_){var S,A,b=0,L=bi.prefilters.length,q=m.Deferred().always(function(){delete z.elem}),z=function(){if(A)return!1;for(var _e=Oi||wr(),le=Math.max(0,ee.startTime+ee.duration-_e),Ne=le/ee.duration||0,Ze=1-Ne,Lt=0,wt=ee.tweens.length;Lt<wt;Lt++)ee.tweens[Lt].run(Ze);return q.notifyWith(l,[ee,Ze,le]),Ze<1&&wt?le:(wt||q.notifyWith(l,[ee,1,0]),q.resolveWith(l,[ee]),!1)},ee=q.promise({elem:l,props:m.extend({},h),opts:m.extend(!0,{specialEasing:{},easing:m.easing._default},_),originalProperties:h,originalOptions:_,startTime:Oi||wr(),duration:_.duration,tweens:[],createTween:function(_e,le){var Ne=m.Tween(l,ee.opts,_e,le,ee.opts.specialEasing[_e]||ee.opts.easing);return ee.tweens.push(Ne),Ne},stop:function(_e){var le=0,Ne=_e?ee.tweens.length:0;if(A)return this;for(A=!0;le<Ne;le++)ee.tweens[le].run(1);return _e?(q.notifyWith(l,[ee,1,0]),q.resolveWith(l,[ee,_e])):q.rejectWith(l,[ee,_e]),this}}),de=ee.props;for(ns(de,ee.opts.specialEasing);b<L;b++)if(S=bi.prefilters[b].call(ee,l,de,ee.opts),S)return C(S.stop)&&(m._queueHooks(ee.elem,ee.opts.queue).stop=S.stop.bind(S)),S;return m.map(de,Rr,ee),C(ee.opts.start)&&ee.opts.start.call(l,ee),ee.progress(ee.opts.progress).done(ee.opts.done,ee.opts.complete).fail(ee.opts.fail).always(ee.opts.always),m.fx.timer(m.extend(z,{elem:l,anim:ee,queue:ee.opts.queue})),ee}m.Animation=m.extend(bi,{tweeners:{"*":[function(l,h){var _=this.createTween(l,h);return ft(_.elem,l,ct.exec(h),_),_}]},tweener:function(l,h){C(l)?(h=l,l=["*"]):l=l.match(Ge);for(var _,S=0,A=l.length;S<A;S++)_=l[S],bi.tweeners[_]=bi.tweeners[_]||[],bi.tweeners[_].unshift(h)},prefilters:[fo],prefilter:function(l,h){h?bi.prefilters.unshift(l):bi.prefilters.push(l)}}),m.speed=function(l,h,_){var S=l&&typeof l=="object"?m.extend({},l):{complete:_||!_&&h||C(l)&&l,duration:l,easing:_&&h||h&&!C(h)&&h};return m.fx.off?S.duration=0:typeof S.duration!="number"&&(S.duration in m.fx.speeds?S.duration=m.fx.speeds[S.duration]:S.duration=m.fx.speeds._default),(S.queue==null||S.queue===!0)&&(S.queue="fx"),S.old=S.complete,S.complete=function(){C(S.old)&&S.old.call(this),S.queue&&m.dequeue(this,S.queue)},S},m.fn.extend({fadeTo:function(l,h,_,S){return this.filter(ut).css("opacity",0).show().end().animate({opacity:h},l,_,S)},animate:function(l,h,_,S){var A=m.isEmptyObject(l),b=m.speed(h,_,S),L=function(){var q=bi(this,m.extend({},l),b);(A||$.get(this,"finish"))&&q.stop(!0)};return L.finish=L,A||b.queue===!1?this.each(L):this.queue(b.queue,L)},stop:function(l,h,_){var S=function(A){var b=A.stop;delete A.stop,b(_)};return typeof l!="string"&&(_=h,h=l,l=void 0),h&&this.queue(l||"fx",[]),this.each(function(){var A=!0,b=l!=null&&l+"queueHooks",L=m.timers,q=$.get(this);if(b)q[b]&&q[b].stop&&S(q[b]);else for(b in q)q[b]&&q[b].stop&&Pn.test(b)&&S(q[b]);for(b=L.length;b--;)L[b].elem===this&&(l==null||L[b].queue===l)&&(L[b].anim.stop(_),A=!1,L.splice(b,1));(A||!_)&&m.dequeue(this,l)})},finish:function(l){return l!==!1&&(l=l||"fx"),this.each(function(){var h,_=$.get(this),S=_[l+"queue"],A=_[l+"queueHooks"],b=m.timers,L=S?S.length:0;for(_.finish=!0,m.queue(this,l,[]),A&&A.stop&&A.stop.call(this,!0),h=b.length;h--;)b[h].elem===this&&b[h].queue===l&&(b[h].anim.stop(!0),b.splice(h,1));for(h=0;h<L;h++)S[h]&&S[h].finish&&S[h].finish.call(this);delete _.finish})}}),m.each(["toggle","show","hide"],function(l,h){var _=m.fn[h];m.fn[h]=function(S,A,b){return S==null||typeof S=="boolean"?_.apply(this,arguments):this.animate(Dn(h,!0),S,A,b)}}),m.each({slideDown:Dn("show"),slideUp:Dn("hide"),slideToggle:Dn("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(l,h){m.fn[l]=function(_,S,A){return this.animate(h,_,S,A)}}),m.timers=[],m.fx.tick=function(){var l,h=0,_=m.timers;for(Oi=Date.now();h<_.length;h++)l=_[h],!l()&&_[h]===l&&_.splice(h--,1);_.length||m.fx.stop(),Oi=void 0},m.fx.timer=function(l){m.timers.push(l),m.fx.start()},m.fx.interval=13,m.fx.start=function(){pi||(pi=!0,Zn())},m.fx.stop=function(){pi=null},m.fx.speeds={slow:600,fast:200,_default:400},m.fn.delay=function(l,h){return l=m.fx&&m.fx.speeds[l]||l,h=h||"fx",this.queue(h,function(_,S){var A=e.setTimeout(_,l);S.stop=function(){e.clearTimeout(A)}})},function(){var l=M.createElement("input"),h=M.createElement("select"),_=h.appendChild(M.createElement("option"));l.type="checkbox",w.checkOn=l.value!=="",w.optSelected=_.selected,l=M.createElement("input"),l.value="t",l.type="radio",w.radioValue=l.value==="t"}();var ua,Cr=m.expr.attrHandle;m.fn.extend({attr:function(l,h){return gt(this,m.attr,l,h,arguments.length>1)},removeAttr:function(l){return this.each(function(){m.removeAttr(this,l)})}}),m.extend({attr:function(l,h,_){var S,A,b=l.nodeType;if(!(b===3||b===8||b===2)){if(typeof l.getAttribute>"u")return m.prop(l,h,_);if((b!==1||!m.isXMLDoc(l))&&(A=m.attrHooks[h.toLowerCase()]||(m.expr.match.bool.test(h)?ua:void 0)),_!==void 0){if(_===null){m.removeAttr(l,h);return}return A&&"set"in A&&(S=A.set(l,_,h))!==void 0?S:(l.setAttribute(h,_+""),_)}return A&&"get"in A&&(S=A.get(l,h))!==null?S:(S=m.find.attr(l,h),S??void 0)}},attrHooks:{type:{set:function(l,h){if(!w.radioValue&&h==="radio"&&N(l,"input")){var _=l.value;return l.setAttribute("type",h),_&&(l.value=_),h}}}},removeAttr:function(l,h){var _,S=0,A=h&&h.match(Ge);if(A&&l.nodeType===1)for(;_=A[S++];)l.removeAttribute(_)}}),ua={set:function(l,h,_){return h===!1?m.removeAttr(l,_):l.setAttribute(_,_),_}},m.each(m.expr.match.bool.source.match(/\w+/g),function(l,h){var _=Cr[h]||m.find.attr;Cr[h]=function(S,A,b){var L,q,z=A.toLowerCase();return b||(q=Cr[z],Cr[z]=L,L=_(S,A,b)!=null?z:null,Cr[z]=q),L}});var fa=/^(?:input|select|textarea|button)$/i,is=/^(?:a|area)$/i;m.fn.extend({prop:function(l,h){return gt(this,m.prop,l,h,arguments.length>1)},removeProp:function(l){return this.each(function(){delete this[m.propFix[l]||l]})}}),m.extend({prop:function(l,h,_){var S,A,b=l.nodeType;if(!(b===3||b===8||b===2))return(b!==1||!m.isXMLDoc(l))&&(h=m.propFix[h]||h,A=m.propHooks[h]),_!==void 0?A&&"set"in A&&(S=A.set(l,_,h))!==void 0?S:l[h]=_:A&&"get"in A&&(S=A.get(l,h))!==null?S:l[h]},propHooks:{tabIndex:{get:function(l){var h=m.find.attr(l,"tabindex");return h?parseInt(h,10):fa.test(l.nodeName)||is.test(l.nodeName)&&l.href?0:-1}}},propFix:{for:"htmlFor",class:"className"}}),w.optSelected||(m.propHooks.selected={get:function(l){var h=l.parentNode;return h&&h.parentNode&&h.parentNode.selectedIndex,null},set:function(l){var h=l.parentNode;h&&(h.selectedIndex,h.parentNode&&h.parentNode.selectedIndex)}}),m.each(["tabIndex","readOnly","maxLength","cellSpacing","cellPadding","rowSpan","colSpan","useMap","frameBorder","contentEditable"],function(){m.propFix[this.toLowerCase()]=this});function ur(l){var h=l.match(Ge)||[];return h.join(" ")}function fr(l){return l.getAttribute&&l.getAttribute("class")||""}function ha(l){return Array.isArray(l)?l:typeof l=="string"?l.match(Ge)||[]:[]}m.fn.extend({addClass:function(l){var h,_,S,A,b,L;return C(l)?this.each(function(q){m(this).addClass(l.call(this,q,fr(this)))}):(h=ha(l),h.length?this.each(function(){if(S=fr(this),_=this.nodeType===1&&" "+ur(S)+" ",_){for(b=0;b<h.length;b++)A=h[b],_.indexOf(" "+A+" ")<0&&(_+=A+" ");L=ur(_),S!==L&&this.setAttribute("class",L)}}):this)},removeClass:function(l){var h,_,S,A,b,L;return C(l)?this.each(function(q){m(this).removeClass(l.call(this,q,fr(this)))}):arguments.length?(h=ha(l),h.length?this.each(function(){if(S=fr(this),_=this.nodeType===1&&" "+ur(S)+" ",_){for(b=0;b<h.length;b++)for(A=h[b];_.indexOf(" "+A+" ")>-1;)_=_.replace(" "+A+" "," ");L=ur(_),S!==L&&this.setAttribute("class",L)}}):this):this.attr("class","")},toggleClass:function(l,h){var _,S,A,b,L=typeof l,q=L==="string"||Array.isArray(l);return C(l)?this.each(function(z){m(this).toggleClass(l.call(this,z,fr(this),h),h)}):typeof h=="boolean"&&q?h?this.addClass(l):this.removeClass(l):(_=ha(l),this.each(function(){if(q)for(b=m(this),A=0;A<_.length;A++)S=_[A],b.hasClass(S)?b.removeClass(S):b.addClass(S);else(l===void 0||L==="boolean")&&(S=fr(this),S&&$.set(this,"__className__",S),this.setAttribute&&this.setAttribute("class",S||l===!1?"":$.get(this,"__className__")||""))}))},hasClass:function(l){var h,_,S=0;for(h=" "+l+" ";_=this[S++];)if(_.nodeType===1&&(" "+ur(fr(_))+" ").indexOf(h)>-1)return!0;return!1}});var rl=/\r/g;m.fn.extend({val:function(l){var h,_,S,A=this[0];return arguments.length?(S=C(l),this.each(function(b){var L;this.nodeType===1&&(S?L=l.call(this,b,m(this).val()):L=l,L==null?L="":typeof L=="number"?L+="":Array.isArray(L)&&(L=m.map(L,function(q){return q==null?"":q+""})),h=m.valHooks[this.type]||m.valHooks[this.nodeName.toLowerCase()],(!h||!("set"in h)||h.set(this,L,"value")===void 0)&&(this.value=L))})):A?(h=m.valHooks[A.type]||m.valHooks[A.nodeName.toLowerCase()],h&&"get"in h&&(_=h.get(A,"value"))!==void 0?_:(_=A.value,typeof _=="string"?_.replace(rl,""):_??"")):void 0}}),m.extend({valHooks:{option:{get:function(l){var h=m.find.attr(l,"value");return h??ur(m.text(l))}},select:{get:function(l){var h,_,S,A=l.options,b=l.selectedIndex,L=l.type==="select-one",q=L?null:[],z=L?b+1:A.length;for(b<0?S=z:S=L?b:0;S<z;S++)if(_=A[S],(_.selected||S===b)&&!_.disabled&&(!_.parentNode.disabled||!N(_.parentNode,"optgroup"))){if(h=m(_).val(),L)return h;q.push(h)}return q},set:function(l,h){for(var _,S,A=l.options,b=m.makeArray(h),L=A.length;L--;)S=A[L],(S.selected=m.inArray(m.valHooks.option.get(S),b)>-1)&&(_=!0);return _||(l.selectedIndex=-1),b}}}}),m.each(["radio","checkbox"],function(){m.valHooks[this]={set:function(l,h){if(Array.isArray(h))return l.checked=m.inArray(m(l).val(),h)>-1}},w.checkOn||(m.valHooks[this].get=function(l){return l.getAttribute("value")===null?"on":l.value})});var rs=e.location,da={guid:Date.now()},ho=/\?/;m.parseXML=function(l){var h,_;if(!l||typeof l!="string")return null;try{h=new e.DOMParser().parseFromString(l,"text/xml")}catch{}return _=h&&h.getElementsByTagName("parsererror")[0],(!h||_)&&m.error("Invalid XML: "+(_?m.map(_.childNodes,function(S){return S.textContent}).join(`
`):l)),h};var sl=/^(?:focusinfocus|focusoutblur)$/,ol=function(l){l.stopPropagation()};m.extend(m.event,{trigger:function(l,h,_,S){var A,b,L,q,z,ee,de,_e,le=[_||M],Ne=v.call(l,"type")?l.type:l,Ze=v.call(l,"namespace")?l.namespace.split("."):[];if(b=_e=L=_=_||M,!(_.nodeType===3||_.nodeType===8)&&!sl.test(Ne+m.event.triggered)&&(Ne.indexOf(".")>-1&&(Ze=Ne.split("."),Ne=Ze.shift(),Ze.sort()),z=Ne.indexOf(":")<0&&"on"+Ne,l=l[m.expando]?l:new m.Event(Ne,typeof l=="object"&&l),l.isTrigger=S?2:3,l.namespace=Ze.join("."),l.rnamespace=l.namespace?new RegExp("(^|\\.)"+Ze.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,l.result=void 0,l.target||(l.target=_),h=h==null?[l]:m.makeArray(h,[l]),de=m.event.special[Ne]||{},!(!S&&de.trigger&&de.trigger.apply(_,h)===!1))){if(!S&&!de.noBubble&&!T(_)){for(q=de.delegateType||Ne,sl.test(q+Ne)||(b=b.parentNode);b;b=b.parentNode)le.push(b),L=b;L===(_.ownerDocument||M)&&le.push(L.defaultView||L.parentWindow||e)}for(A=0;(b=le[A++])&&!l.isPropagationStopped();)_e=b,l.type=A>1?q:de.bindType||Ne,ee=($.get(b,"events")||Object.create(null))[l.type]&&$.get(b,"handle"),ee&&ee.apply(b,h),ee=z&&b[z],ee&&ee.apply&&G(b)&&(l.result=ee.apply(b,h),l.result===!1&&l.preventDefault());return l.type=Ne,!S&&!l.isDefaultPrevented()&&(!de._default||de._default.apply(le.pop(),h)===!1)&&G(_)&&z&&C(_[Ne])&&!T(_)&&(L=_[z],L&&(_[z]=null),m.event.triggered=Ne,l.isPropagationStopped()&&_e.addEventListener(Ne,ol),_[Ne](),l.isPropagationStopped()&&_e.removeEventListener(Ne,ol),m.event.triggered=void 0,L&&(_[z]=L)),l.result}},simulate:function(l,h,_){var S=m.extend(new m.Event,_,{type:l,isSimulated:!0});m.event.trigger(S,null,h)}}),m.fn.extend({trigger:function(l,h){return this.each(function(){m.event.trigger(l,h,this)})},triggerHandler:function(l,h){var _=this[0];if(_)return m.event.trigger(l,h,_,!0)}});var Hc=/\[\]$/,pa=/\r?\n/g,zc=/^(?:submit|button|image|reset|file)$/i,Gc=/^(?:input|select|textarea|keygen)/i;function ma(l,h,_,S){var A;if(Array.isArray(h))m.each(h,function(b,L){_||Hc.test(l)?S(l,L):ma(l+"["+(typeof L=="object"&&L!=null?b:"")+"]",L,_,S)});else if(!_&&B(h)==="object")for(A in h)ma(l+"["+A+"]",h[A],_,S);else S(l,h)}m.param=function(l,h){var _,S=[],A=function(b,L){var q=C(L)?L():L;S[S.length]=encodeURIComponent(b)+"="+encodeURIComponent(q??"")};if(l==null)return"";if(Array.isArray(l)||l.jquery&&!m.isPlainObject(l))m.each(l,function(){A(this.name,this.value)});else for(_ in l)ma(_,l[_],h,A);return S.join("&")},m.fn.extend({serialize:function(){return m.param(this.serializeArray())},serializeArray:function(){return this.map(function(){var l=m.prop(this,"elements");return l?m.makeArray(l):this}).filter(function(){var l=this.type;return this.name&&!m(this).is(":disabled")&&Gc.test(this.nodeName)&&!zc.test(l)&&(this.checked||!ke.test(l))}).map(function(l,h){var _=m(this).val();return _==null?null:Array.isArray(_)?m.map(_,function(S){return{name:h.name,value:S.replace(pa,`\r
`)}}):{name:h.name,value:_.replace(pa,`\r
`)}}).get()}});var kc=/%20/g,ga=/#.*$/,Vc=/([?&])_=[^&]*/,Wc=/^(.*?):[ \t]*([^\r\n]*)$/mg,Xc=/^(?:about|app|app-storage|.+-extension|file|res|widget):$/,qc=/^(?:GET|HEAD)$/,Yc=/^\/\//,un={},sn={},al="*/".concat("*"),_a=M.createElement("a");_a.href=rs.href;function ll(l){return function(h,_){typeof h!="string"&&(_=h,h="*");var S,A=0,b=h.toLowerCase().match(Ge)||[];if(C(_))for(;S=b[A++];)S[0]==="+"?(S=S.slice(1)||"*",(l[S]=l[S]||[]).unshift(_)):(l[S]=l[S]||[]).push(_)}}function cl(l,h,_,S){var A={},b=l===sn;function L(q){var z;return A[q]=!0,m.each(l[q]||[],function(ee,de){var _e=de(h,_,S);if(typeof _e=="string"&&!b&&!A[_e])return h.dataTypes.unshift(_e),L(_e),!1;if(b)return!(z=_e)}),z}return L(h.dataTypes[0])||!A["*"]&&L("*")}function va(l,h){var _,S,A=m.ajaxSettings.flatOptions||{};for(_ in h)h[_]!==void 0&&((A[_]?l:S||(S={}))[_]=h[_]);return S&&m.extend(!0,l,S),l}function jc(l,h,_){for(var S,A,b,L,q=l.contents,z=l.dataTypes;z[0]==="*";)z.shift(),S===void 0&&(S=l.mimeType||h.getResponseHeader("Content-Type"));if(S){for(A in q)if(q[A]&&q[A].test(S)){z.unshift(A);break}}if(z[0]in _)b=z[0];else{for(A in _){if(!z[0]||l.converters[A+" "+z[0]]){b=A;break}L||(L=A)}b=b||L}if(b)return b!==z[0]&&z.unshift(b),_[b]}function ul(l,h,_,S){var A,b,L,q,z,ee={},de=l.dataTypes.slice();if(de[1])for(L in l.converters)ee[L.toLowerCase()]=l.converters[L];for(b=de.shift();b;)if(l.responseFields[b]&&(_[l.responseFields[b]]=h),!z&&S&&l.dataFilter&&(h=l.dataFilter(h,l.dataType)),z=b,b=de.shift(),b){if(b==="*")b=z;else if(z!=="*"&&z!==b){if(L=ee[z+" "+b]||ee["* "+b],!L){for(A in ee)if(q=A.split(" "),q[1]===b&&(L=ee[z+" "+q[0]]||ee["* "+q[0]],L)){L===!0?L=ee[A]:ee[A]!==!0&&(b=q[0],de.unshift(q[1]));break}}if(L!==!0)if(L&&l.throws)h=L(h);else try{h=L(h)}catch(_e){return{state:"parsererror",error:L?_e:"No conversion from "+z+" to "+b}}}}return{state:"success",data:h}}m.extend({active:0,lastModified:{},etag:{},ajaxSettings:{url:rs.href,type:"GET",isLocal:Xc.test(rs.protocol),global:!0,processData:!0,async:!0,contentType:"application/x-www-form-urlencoded; charset=UTF-8",accepts:{"*":al,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{xml:/\bxml\b/,html:/\bhtml/,json:/\bjson\b/},responseFields:{xml:"responseXML",text:"responseText",json:"responseJSON"},converters:{"* text":String,"text html":!0,"text json":JSON.parse,"text xml":m.parseXML},flatOptions:{url:!0,context:!0}},ajaxSetup:function(l,h){return h?va(va(l,m.ajaxSettings),h):va(m.ajaxSettings,l)},ajaxPrefilter:ll(un),ajaxTransport:ll(sn),ajax:function(l,h){typeof l=="object"&&(h=l,l=void 0),h=h||{};var _,S,A,b,L,q,z,ee,de,_e,le=m.ajaxSetup({},h),Ne=le.context||le,Ze=le.context&&(Ne.nodeType||Ne.jquery)?m(Ne):m.event,Lt=m.Deferred(),wt=m.Callbacks("once memory"),Un=le.statusCode||{},Mn={},Fi={},Bi="canceled",Vt={readyState:0,getResponseHeader:function(Wt){var ln;if(z){if(!b)for(b={};ln=Wc.exec(A);)b[ln[1].toLowerCase()+" "]=(b[ln[1].toLowerCase()+" "]||[]).concat(ln[2]);ln=b[Wt.toLowerCase()+" "]}return ln==null?null:ln.join(", ")},getAllResponseHeaders:function(){return z?A:null},setRequestHeader:function(Wt,ln){return z==null&&(Wt=Fi[Wt.toLowerCase()]=Fi[Wt.toLowerCase()]||Wt,Mn[Wt]=ln),this},overrideMimeType:function(Wt){return z==null&&(le.mimeType=Wt),this},statusCode:function(Wt){var ln;if(Wt)if(z)Vt.always(Wt[Vt.status]);else for(ln in Wt)Un[ln]=[Un[ln],Wt[ln]];return this},abort:function(Wt){var ln=Wt||Bi;return _&&_.abort(ln),hr(0,ln),this}};if(Lt.promise(Vt),le.url=((l||le.url||rs.href)+"").replace(Yc,rs.protocol+"//"),le.type=h.method||h.type||le.method||le.type,le.dataTypes=(le.dataType||"*").toLowerCase().match(Ge)||[""],le.crossDomain==null){q=M.createElement("a");try{q.href=le.url,q.href=q.href,le.crossDomain=_a.protocol+"//"+_a.host!=q.protocol+"//"+q.host}catch{le.crossDomain=!0}}if(le.data&&le.processData&&typeof le.data!="string"&&(le.data=m.param(le.data,le.traditional)),cl(un,le,h,Vt),z)return Vt;ee=m.event&&le.global,ee&&m.active++===0&&m.event.trigger("ajaxStart"),le.type=le.type.toUpperCase(),le.hasContent=!qc.test(le.type),S=le.url.replace(ga,""),le.hasContent?le.data&&le.processData&&(le.contentType||"").indexOf("application/x-www-form-urlencoded")===0&&(le.data=le.data.replace(kc,"+")):(_e=le.url.slice(S.length),le.data&&(le.processData||typeof le.data=="string")&&(S+=(ho.test(S)?"&":"?")+le.data,delete le.data),le.cache===!1&&(S=S.replace(Vc,"$1"),_e=(ho.test(S)?"&":"?")+"_="+da.guid+++_e),le.url=S+_e),le.ifModified&&(m.lastModified[S]&&Vt.setRequestHeader("If-Modified-Since",m.lastModified[S]),m.etag[S]&&Vt.setRequestHeader("If-None-Match",m.etag[S])),(le.data&&le.hasContent&&le.contentType!==!1||h.contentType)&&Vt.setRequestHeader("Content-Type",le.contentType),Vt.setRequestHeader("Accept",le.dataTypes[0]&&le.accepts[le.dataTypes[0]]?le.accepts[le.dataTypes[0]]+(le.dataTypes[0]!=="*"?", "+al+"; q=0.01":""):le.accepts["*"]);for(de in le.headers)Vt.setRequestHeader(de,le.headers[de]);if(le.beforeSend&&(le.beforeSend.call(Ne,Vt,le)===!1||z))return Vt.abort();if(Bi="abort",wt.add(le.complete),Vt.done(le.success),Vt.fail(le.error),_=cl(sn,le,h,Vt),!_)hr(-1,"No Transport");else{if(Vt.readyState=1,ee&&Ze.trigger("ajaxSend",[Vt,le]),z)return Vt;le.async&&le.timeout>0&&(L=e.setTimeout(function(){Vt.abort("timeout")},le.timeout));try{z=!1,_.send(Mn,hr)}catch(Wt){if(z)throw Wt;hr(-1,Wt)}}function hr(Wt,ln,Cs,mo){var wi,Lr,gi,Ji,dr,Jn=ln;z||(z=!0,L&&e.clearTimeout(L),_=void 0,A=mo||"",Vt.readyState=Wt>0?4:0,wi=Wt>=200&&Wt<300||Wt===304,Cs&&(Ji=jc(le,Vt,Cs)),!wi&&m.inArray("script",le.dataTypes)>-1&&m.inArray("json",le.dataTypes)<0&&(le.converters["text script"]=function(){}),Ji=ul(le,Ji,Vt,wi),wi?(le.ifModified&&(dr=Vt.getResponseHeader("Last-Modified"),dr&&(m.lastModified[S]=dr),dr=Vt.getResponseHeader("etag"),dr&&(m.etag[S]=dr)),Wt===204||le.type==="HEAD"?Jn="nocontent":Wt===304?Jn="notmodified":(Jn=Ji.state,Lr=Ji.data,gi=Ji.error,wi=!gi)):(gi=Jn,(Wt||!Jn)&&(Jn="error",Wt<0&&(Wt=0))),Vt.status=Wt,Vt.statusText=(ln||Jn)+"",wi?Lt.resolveWith(Ne,[Lr,Jn,Vt]):Lt.rejectWith(Ne,[Vt,Jn,gi]),Vt.statusCode(Un),Un=void 0,ee&&Ze.trigger(wi?"ajaxSuccess":"ajaxError",[Vt,le,wi?Lr:gi]),wt.fireWith(Ne,[Vt,Jn]),ee&&(Ze.trigger("ajaxComplete",[Vt,le]),--m.active||m.event.trigger("ajaxStop")))}return Vt},getJSON:function(l,h,_){return m.get(l,h,_,"json")},getScript:function(l,h){return m.get(l,void 0,h,"script")}}),m.each(["get","post"],function(l,h){m[h]=function(_,S,A,b){return C(S)&&(b=b||A,A=S,S=void 0),m.ajax(m.extend({url:_,type:h,dataType:b,data:S,success:A},m.isPlainObject(_)&&_))}}),m.ajaxPrefilter(function(l){var h;for(h in l.headers)h.toLowerCase()==="content-type"&&(l.contentType=l.headers[h]||"")}),m._evalUrl=function(l,h,_){return m.ajax({url:l,type:"GET",dataType:"script",cache:!0,async:!1,global:!1,converters:{"text script":function(){}},dataFilter:function(S){m.globalEval(S,h,_)}})},m.fn.extend({wrapAll:function(l){var h;return this[0]&&(C(l)&&(l=l.call(this[0])),h=m(l,this[0].ownerDocument).eq(0).clone(!0),this[0].parentNode&&h.insertBefore(this[0]),h.map(function(){for(var _=this;_.firstElementChild;)_=_.firstElementChild;return _}).append(this)),this},wrapInner:function(l){return C(l)?this.each(function(h){m(this).wrapInner(l.call(this,h))}):this.each(function(){var h=m(this),_=h.contents();_.length?_.wrapAll(l):h.append(l)})},wrap:function(l){var h=C(l);return this.each(function(_){m(this).wrapAll(h?l.call(this,_):l)})},unwrap:function(l){return this.parent(l).not("body").each(function(){m(this).replaceWith(this.childNodes)}),this}}),m.expr.pseudos.hidden=function(l){return!m.expr.pseudos.visible(l)},m.expr.pseudos.visible=function(l){return!!(l.offsetWidth||l.offsetHeight||l.getClientRects().length)},m.ajaxSettings.xhr=function(){try{return new e.XMLHttpRequest}catch{}};var Kc={0:200,1223:204},Sn=m.ajaxSettings.xhr();w.cors=!!Sn&&"withCredentials"in Sn,w.ajax=Sn=!!Sn,m.ajaxTransport(function(l){var h,_;if(w.cors||Sn&&!l.crossDomain)return{send:function(S,A){var b,L=l.xhr();if(L.open(l.type,l.url,l.async,l.username,l.password),l.xhrFields)for(b in l.xhrFields)L[b]=l.xhrFields[b];l.mimeType&&L.overrideMimeType&&L.overrideMimeType(l.mimeType),!l.crossDomain&&!S["X-Requested-With"]&&(S["X-Requested-With"]="XMLHttpRequest");for(b in S)L.setRequestHeader(b,S[b]);h=function(q){return function(){h&&(h=_=L.onload=L.onerror=L.onabort=L.ontimeout=L.onreadystatechange=null,q==="abort"?L.abort():q==="error"?typeof L.status!="number"?A(0,"error"):A(L.status,L.statusText):A(Kc[L.status]||L.status,L.statusText,(L.responseType||"text")!=="text"||typeof L.responseText!="string"?{binary:L.response}:{text:L.responseText},L.getAllResponseHeaders()))}},L.onload=h(),_=L.onerror=L.ontimeout=h("error"),L.onabort!==void 0?L.onabort=_:L.onreadystatechange=function(){L.readyState===4&&e.setTimeout(function(){h&&_()})},h=h("abort");try{L.send(l.hasContent&&l.data||null)}catch(q){if(h)throw q}},abort:function(){h&&h()}}}),m.ajaxPrefilter(function(l){l.crossDomain&&(l.contents.script=!1)}),m.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/\b(?:java|ecma)script\b/},converters:{"text script":function(l){return m.globalEval(l),l}}}),m.ajaxPrefilter("script",function(l){l.cache===void 0&&(l.cache=!1),l.crossDomain&&(l.type="GET")}),m.ajaxTransport("script",function(l){if(l.crossDomain||l.scriptAttrs){var h,_;return{send:function(S,A){h=m("<script>").attr(l.scriptAttrs||{}).prop({charset:l.scriptCharset,src:l.url}).on("load error",_=function(b){h.remove(),_=null,b&&A(b.type==="error"?404:200,b.type)}),M.head.appendChild(h[0])},abort:function(){_&&_()}}}});var po=[],Zi=/(=)\?(?=&|$)|\?\?/;m.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var l=po.pop()||m.expando+"_"+da.guid++;return this[l]=!0,l}}),m.ajaxPrefilter("json jsonp",function(l,h,_){var S,A,b,L=l.jsonp!==!1&&(Zi.test(l.url)?"url":typeof l.data=="string"&&(l.contentType||"").indexOf("application/x-www-form-urlencoded")===0&&Zi.test(l.data)&&"data");if(L||l.dataTypes[0]==="jsonp")return S=l.jsonpCallback=C(l.jsonpCallback)?l.jsonpCallback():l.jsonpCallback,L?l[L]=l[L].replace(Zi,"$1"+S):l.jsonp!==!1&&(l.url+=(ho.test(l.url)?"&":"?")+l.jsonp+"="+S),l.converters["script json"]=function(){return b||m.error(S+" was not called"),b[0]},l.dataTypes[0]="json",A=e[S],e[S]=function(){b=arguments},_.always(function(){A===void 0?m(e).removeProp(S):e[S]=A,l[S]&&(l.jsonpCallback=h.jsonpCallback,po.push(S)),b&&C(A)&&A(b[0]),b=A=void 0}),"script"}),w.createHTMLDocument=function(){var l=M.implementation.createHTMLDocument("").body;return l.innerHTML="<form></form><form></form>",l.childNodes.length===2}(),m.parseHTML=function(l,h,_){if(typeof l!="string")return[];typeof h=="boolean"&&(_=h,h=!1);var S,A,b;return h||(w.createHTMLDocument?(h=M.implementation.createHTMLDocument(""),S=h.createElement("base"),S.href=M.location.href,h.head.appendChild(S)):h=M),A=pe.exec(l),b=!_&&[],A?[h.createElement(A[1])]:(A=qn([l],h,b),b&&b.length&&m(b).remove(),m.merge([],A.childNodes))},m.fn.load=function(l,h,_){var S,A,b,L=this,q=l.indexOf(" ");return q>-1&&(S=ur(l.slice(q)),l=l.slice(0,q)),C(h)?(_=h,h=void 0):h&&typeof h=="object"&&(A="POST"),L.length>0&&m.ajax({url:l,type:A||"GET",dataType:"html",data:h}).done(function(z){b=arguments,L.html(S?m("<div>").append(m.parseHTML(z)).find(S):z)}).always(_&&function(z,ee){L.each(function(){_.apply(this,b||[z.responseText,ee,z])})}),this},m.expr.pseudos.animated=function(l){return m.grep(m.timers,function(h){return l===h.elem}).length},m.offset={setOffset:function(l,h,_){var S,A,b,L,q,z,ee,de=m.css(l,"position"),_e=m(l),le={};de==="static"&&(l.style.position="relative"),q=_e.offset(),b=m.css(l,"top"),z=m.css(l,"left"),ee=(de==="absolute"||de==="fixed")&&(b+z).indexOf("auto")>-1,ee?(S=_e.position(),L=S.top,A=S.left):(L=parseFloat(b)||0,A=parseFloat(z)||0),C(h)&&(h=h.call(l,_,m.extend({},q))),h.top!=null&&(le.top=h.top-q.top+L),h.left!=null&&(le.left=h.left-q.left+A),"using"in h?h.using.call(l,le):_e.css(le)}},m.fn.extend({offset:function(l){if(arguments.length)return l===void 0?this:this.each(function(A){m.offset.setOffset(this,l,A)});var h,_,S=this[0];if(S)return S.getClientRects().length?(h=S.getBoundingClientRect(),_=S.ownerDocument.defaultView,{top:h.top+_.pageYOffset,left:h.left+_.pageXOffset}):{top:0,left:0}},position:function(){if(this[0]){var l,h,_,S=this[0],A={top:0,left:0};if(m.css(S,"position")==="fixed")h=S.getBoundingClientRect();else{for(h=this.offset(),_=S.ownerDocument,l=S.offsetParent||_.documentElement;l&&(l===_.body||l===_.documentElement)&&m.css(l,"position")==="static";)l=l.parentNode;l&&l!==S&&l.nodeType===1&&(A=m(l).offset(),A.top+=m.css(l,"borderTopWidth",!0),A.left+=m.css(l,"borderLeftWidth",!0))}return{top:h.top-A.top-m.css(S,"marginTop",!0),left:h.left-A.left-m.css(S,"marginLeft",!0)}}},offsetParent:function(){return this.map(function(){for(var l=this.offsetParent;l&&m.css(l,"position")==="static";)l=l.offsetParent;return l||Ue})}}),m.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(l,h){var _=h==="pageYOffset";m.fn[l]=function(S){return gt(this,function(A,b,L){var q;if(T(A)?q=A:A.nodeType===9&&(q=A.defaultView),L===void 0)return q?q[h]:A[b];q?q.scrollTo(_?q.pageXOffset:L,_?L:q.pageYOffset):A[b]=L},l,S,arguments.length)}}),m.each(["top","left"],function(l,h){m.cssHooks[h]=pt(w.pixelPosition,function(_,S){if(S)return S=at(_,h),ue.test(S)?m(_).position()[h]+"px":S})}),m.each({Height:"height",Width:"width"},function(l,h){m.each({padding:"inner"+l,content:h,"":"outer"+l},function(_,S){m.fn[S]=function(A,b){var L=arguments.length&&(_||typeof A!="boolean"),q=_||(A===!0||b===!0?"margin":"border");return gt(this,function(z,ee,de){var _e;return T(z)?S.indexOf("outer")===0?z["inner"+l]:z.document.documentElement["client"+l]:z.nodeType===9?(_e=z.documentElement,Math.max(z.body["scroll"+l],_e["scroll"+l],z.body["offset"+l],_e["offset"+l],_e["client"+l])):de===void 0?m.css(z,ee,q):m.style(z,ee,de,q)},h,L?A:void 0,L)}})}),m.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],function(l,h){m.fn[h]=function(_){return this.on(h,_)}}),m.fn.extend({bind:function(l,h,_){return this.on(l,null,h,_)},unbind:function(l,h){return this.off(l,null,h)},delegate:function(l,h,_,S){return this.on(h,l,_,S)},undelegate:function(l,h,_){return arguments.length===1?this.off(l,"**"):this.off(h,l||"**",_)},hover:function(l,h){return this.on("mouseenter",l).on("mouseleave",h||l)}}),m.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "),function(l,h){m.fn[h]=function(_,S){return arguments.length>0?this.on(h,null,_,S):this.trigger(h)}});var fl=/^[\s\uFEFF\xA0]+|([^\s\uFEFF\xA0])[\s\uFEFF\xA0]+$/g;m.proxy=function(l,h){var _,S,A;if(typeof h=="string"&&(_=l[h],h=l,l=_),!!C(l))return S=a.call(arguments,2),A=function(){return l.apply(h||this,S.concat(a.call(arguments)))},A.guid=l.guid=l.guid||m.guid++,A},m.holdReady=function(l){l?m.readyWait++:m.ready(!0)},m.isArray=Array.isArray,m.parseJSON=JSON.parse,m.nodeName=N,m.isFunction=C,m.isWindow=T,m.camelCase=en,m.type=B,m.now=Date.now,m.isNumeric=function(l){var h=m.type(l);return(h==="number"||h==="string")&&!isNaN(l-parseFloat(l))},m.trim=function(l){return l==null?"":(l+"").replace(fl,"$1")};var xa=e.jQuery,mi=e.$;return m.noConflict=function(l){return e.$===m&&(e.$=mi),l&&e.jQuery===m&&(e.jQuery=xa),m},typeof t>"u"&&(e.jQuery=e.$=m),m})})(J1);var Pc={exports:{}};/**
 * @license
 * Lodash <https://lodash.com/>
 * Copyright OpenJS Foundation and other contributors <https://openjsf.org/>
 * Released under MIT license <https://lodash.com/license>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 */Pc.exports;(function(s,e){(function(){var t,n="4.17.21",r=200,a="Unsupported core-js use. Try https://npms.io/search?q=ponyfill.",c="Expected a function",u="Invalid `variable` option passed into `_.template`",d="__lodash_hash_undefined__",p=500,g="__lodash_placeholder__",v=1,x=2,E=4,w=1,C=2,T=1,M=2,k=4,O=8,B=16,W=32,J=64,m=128,me=256,N=512,X=30,Ee="...",Re=800,ye=16,te=1,xe=2,we=3,ge=1/0,Oe=9007199254740991,Ce=17976931348623157e292,be=NaN,ne=4294967295,pe=ne-1,Ve=ne>>>1,Ke=[["ary",m],["bind",T],["bindKey",M],["curry",O],["curryRight",B],["flip",N],["partial",W],["partialRight",J],["rearg",me]],Ye="[object Arguments]",lt="[object Array]",Ct="[object AsyncFunction]",dt="[object Boolean]",De="[object Date]",Ge="[object DOMException]",ot="[object Error]",oe="[object Function]",wn="[object GeneratorFunction]",tt="[object Map]",mt="[object Number]",vt="[object Null]",Yt="[object Object]",gt="[object Promise]",Dt="[object Proxy]",$t="[object RegExp]",tn="[object Set]",en="[object String]",G="[object Symbol]",D="[object Undefined]",$="[object WeakMap]",Pe="[object WeakSet]",Ie="[object ArrayBuffer]",Be="[object DataView]",rt="[object Float32Array]",ze="[object Float64Array]",qe="[object Int8Array]",ct="[object Int16Array]",Et="[object Int32Array]",Ue="[object Uint8Array]",Bt="[object Uint8ClampedArray]",St="[object Uint16Array]",ut="[object Uint32Array]",ft=/\b__p \+= '';/g,Je=/\b(__p \+=) '' \+/g,Gt=/(__e\(.*?\)|\b__t\)) \+\n'';/g,Q=/&(?:amp|lt|gt|quot|#39);/g,ke=/[&<>"']/g,He=RegExp(Q.source),Se=RegExp(ke.source),Fe=/<%-([\s\S]+?)%>/g,nt=/<%([\s\S]+?)%>/g,kt=/<%=([\s\S]+?)%>/g,xn=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,qn=/^\w*$/,rn=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,pn=/[\\^$.*+?()[\]{}|]/g,Nn=RegExp(pn.source),cr=/^\s+/,Qr=/\s/,es=/\{(?:\n\/\* \[wrapped with .+\] \*\/)?\n?/,ao=/\{\n\/\* \[wrapped with (.+)\] \*/,ts=/,? & /,ws=/[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g,lo=/[()=,{}\[\]\/\s]/,ca=/\\(\\)?/g,co=/\$\{([^\\}]*(?:\\.[^\\}]*)*)\}/g,uo=/\w*$/,F=/^[-+]0x[0-9a-f]+$/i,se=/^0b[01]+$/i,ue=/^\[object .+?Constructor\]$/,fe=/^0o[0-7]+$/i,he=/^(?:0|[1-9]\d*)$/,$e=/[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g,it=/($^)/,at=/['\n\r\u2028\u2029\\]/g,pt="\\ud800-\\udfff",bt="\\u0300-\\u036f",Mt="\\ufe20-\\ufe2f",Tt="\\u20d0-\\u20ff",mn=bt+Mt+Tt,Ln="\\u2700-\\u27bf",yn="a-z\\xdf-\\xf6\\xf8-\\xff",Ai="\\xac\\xb1\\xd7\\xf7",hn="\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf",It="\\u2000-\\u206f",br=" \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000",gn="A-Z\\xc0-\\xd6\\xd8-\\xde",_n="\\ufe0e\\ufe0f",Oi=Ai+hn+It+br,pi="['’]",Rs="["+pt+"]",Pn="["+Oi+"]",Zn="["+mn+"]",wr="\\d+",Dn="["+Ln+"]",Rr="["+yn+"]",fo="[^"+pt+Oi+wr+Ln+yn+gn+"]",ns="\\ud83c[\\udffb-\\udfff]",bi="(?:"+Zn+"|"+ns+")",ua="[^"+pt+"]",Cr="(?:\\ud83c[\\udde6-\\uddff]){2}",fa="[\\ud800-\\udbff][\\udc00-\\udfff]",is="["+gn+"]",ur="\\u200d",fr="(?:"+Rr+"|"+fo+")",ha="(?:"+is+"|"+fo+")",rl="(?:"+pi+"(?:d|ll|m|re|s|t|ve))?",rs="(?:"+pi+"(?:D|LL|M|RE|S|T|VE))?",da=bi+"?",ho="["+_n+"]?",sl="(?:"+ur+"(?:"+[ua,Cr,fa].join("|")+")"+ho+da+")*",ol="\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])",Hc="\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])",pa=ho+da+sl,zc="(?:"+[Dn,Cr,fa].join("|")+")"+pa,Gc="(?:"+[ua+Zn+"?",Zn,Cr,fa,Rs].join("|")+")",ma=RegExp(pi,"g"),kc=RegExp(Zn,"g"),ga=RegExp(ns+"(?="+ns+")|"+Gc+pa,"g"),Vc=RegExp([is+"?"+Rr+"+"+rl+"(?="+[Pn,is,"$"].join("|")+")",ha+"+"+rs+"(?="+[Pn,is+fr,"$"].join("|")+")",is+"?"+fr+"+"+rl,is+"+"+rs,Hc,ol,wr,zc].join("|"),"g"),Wc=RegExp("["+ur+pt+mn+_n+"]"),Xc=/[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/,qc=["Array","Buffer","DataView","Date","Error","Float32Array","Float64Array","Function","Int8Array","Int16Array","Int32Array","Map","Math","Object","Promise","RegExp","Set","String","Symbol","TypeError","Uint8Array","Uint8ClampedArray","Uint16Array","Uint32Array","WeakMap","_","clearTimeout","isFinite","parseInt","setTimeout"],Yc=-1,un={};un[rt]=un[ze]=un[qe]=un[ct]=un[Et]=un[Ue]=un[Bt]=un[St]=un[ut]=!0,un[Ye]=un[lt]=un[Ie]=un[dt]=un[Be]=un[De]=un[ot]=un[oe]=un[tt]=un[mt]=un[Yt]=un[$t]=un[tn]=un[en]=un[$]=!1;var sn={};sn[Ye]=sn[lt]=sn[Ie]=sn[Be]=sn[dt]=sn[De]=sn[rt]=sn[ze]=sn[qe]=sn[ct]=sn[Et]=sn[tt]=sn[mt]=sn[Yt]=sn[$t]=sn[tn]=sn[en]=sn[G]=sn[Ue]=sn[Bt]=sn[St]=sn[ut]=!0,sn[ot]=sn[oe]=sn[$]=!1;var al={À:"A",Á:"A",Â:"A",Ã:"A",Ä:"A",Å:"A",à:"a",á:"a",â:"a",ã:"a",ä:"a",å:"a",Ç:"C",ç:"c",Ð:"D",ð:"d",È:"E",É:"E",Ê:"E",Ë:"E",è:"e",é:"e",ê:"e",ë:"e",Ì:"I",Í:"I",Î:"I",Ï:"I",ì:"i",í:"i",î:"i",ï:"i",Ñ:"N",ñ:"n",Ò:"O",Ó:"O",Ô:"O",Õ:"O",Ö:"O",Ø:"O",ò:"o",ó:"o",ô:"o",õ:"o",ö:"o",ø:"o",Ù:"U",Ú:"U",Û:"U",Ü:"U",ù:"u",ú:"u",û:"u",ü:"u",Ý:"Y",ý:"y",ÿ:"y",Æ:"Ae",æ:"ae",Þ:"Th",þ:"th",ß:"ss",Ā:"A",Ă:"A",Ą:"A",ā:"a",ă:"a",ą:"a",Ć:"C",Ĉ:"C",Ċ:"C",Č:"C",ć:"c",ĉ:"c",ċ:"c",č:"c",Ď:"D",Đ:"D",ď:"d",đ:"d",Ē:"E",Ĕ:"E",Ė:"E",Ę:"E",Ě:"E",ē:"e",ĕ:"e",ė:"e",ę:"e",ě:"e",Ĝ:"G",Ğ:"G",Ġ:"G",Ģ:"G",ĝ:"g",ğ:"g",ġ:"g",ģ:"g",Ĥ:"H",Ħ:"H",ĥ:"h",ħ:"h",Ĩ:"I",Ī:"I",Ĭ:"I",Į:"I",İ:"I",ĩ:"i",ī:"i",ĭ:"i",į:"i",ı:"i",Ĵ:"J",ĵ:"j",Ķ:"K",ķ:"k",ĸ:"k",Ĺ:"L",Ļ:"L",Ľ:"L",Ŀ:"L",Ł:"L",ĺ:"l",ļ:"l",ľ:"l",ŀ:"l",ł:"l",Ń:"N",Ņ:"N",Ň:"N",Ŋ:"N",ń:"n",ņ:"n",ň:"n",ŋ:"n",Ō:"O",Ŏ:"O",Ő:"O",ō:"o",ŏ:"o",ő:"o",Ŕ:"R",Ŗ:"R",Ř:"R",ŕ:"r",ŗ:"r",ř:"r",Ś:"S",Ŝ:"S",Ş:"S",Š:"S",ś:"s",ŝ:"s",ş:"s",š:"s",Ţ:"T",Ť:"T",Ŧ:"T",ţ:"t",ť:"t",ŧ:"t",Ũ:"U",Ū:"U",Ŭ:"U",Ů:"U",Ű:"U",Ų:"U",ũ:"u",ū:"u",ŭ:"u",ů:"u",ű:"u",ų:"u",Ŵ:"W",ŵ:"w",Ŷ:"Y",ŷ:"y",Ÿ:"Y",Ź:"Z",Ż:"Z",Ž:"Z",ź:"z",ż:"z",ž:"z",Ĳ:"IJ",ĳ:"ij",Œ:"Oe",œ:"oe",ŉ:"'n",ſ:"s"},_a={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"},ll={"&amp;":"&","&lt;":"<","&gt;":">","&quot;":'"',"&#39;":"'"},cl={"\\":"\\","'":"'","\n":"n","\r":"r","\u2028":"u2028","\u2029":"u2029"},va=parseFloat,jc=parseInt,ul=typeof Vo=="object"&&Vo&&Vo.Object===Object&&Vo,Kc=typeof self=="object"&&self&&self.Object===Object&&self,Sn=ul||Kc||Function("return this")(),po=e&&!e.nodeType&&e,Zi=po&&!0&&s&&!s.nodeType&&s,fl=Zi&&Zi.exports===po,xa=fl&&ul.process,mi=function(){try{var U=Zi&&Zi.require&&Zi.require("util").types;return U||xa&&xa.binding&&xa.binding("util")}catch{}}(),l=mi&&mi.isArrayBuffer,h=mi&&mi.isDate,_=mi&&mi.isMap,S=mi&&mi.isRegExp,A=mi&&mi.isSet,b=mi&&mi.isTypedArray;function L(U,j,Y){switch(Y.length){case 0:return U.call(j);case 1:return U.call(j,Y[0]);case 2:return U.call(j,Y[0],Y[1]);case 3:return U.call(j,Y[0],Y[1],Y[2])}return U.apply(j,Y)}function q(U,j,Y,ve){for(var Me=-1,Qe=U==null?0:U.length;++Me<Qe;){var et=U[Me];j(ve,et,Y(et),U)}return ve}function z(U,j){for(var Y=-1,ve=U==null?0:U.length;++Y<ve&&j(U[Y],Y,U)!==!1;);return U}function ee(U,j){for(var Y=U==null?0:U.length;Y--&&j(U[Y],Y,U)!==!1;);return U}function de(U,j){for(var Y=-1,ve=U==null?0:U.length;++Y<ve;)if(!j(U[Y],Y,U))return!1;return!0}function _e(U,j){for(var Y=-1,ve=U==null?0:U.length,Me=0,Qe=[];++Y<ve;){var et=U[Y];j(et,Y,U)&&(Qe[Me++]=et)}return Qe}function le(U,j){var Y=U==null?0:U.length;return!!Y&&ln(U,j,0)>-1}function Ne(U,j,Y){for(var ve=-1,Me=U==null?0:U.length;++ve<Me;)if(Y(j,U[ve]))return!0;return!1}function Ze(U,j){for(var Y=-1,ve=U==null?0:U.length,Me=Array(ve);++Y<ve;)Me[Y]=j(U[Y],Y,U);return Me}function Lt(U,j){for(var Y=-1,ve=j.length,Me=U.length;++Y<ve;)U[Me+Y]=j[Y];return U}function wt(U,j,Y,ve){var Me=-1,Qe=U==null?0:U.length;for(ve&&Qe&&(Y=U[++Me]);++Me<Qe;)Y=j(Y,U[Me],Me,U);return Y}function Un(U,j,Y,ve){var Me=U==null?0:U.length;for(ve&&Me&&(Y=U[--Me]);Me--;)Y=j(Y,U[Me],Me,U);return Y}function Mn(U,j){for(var Y=-1,ve=U==null?0:U.length;++Y<ve;)if(j(U[Y],Y,U))return!0;return!1}var Fi=Lr("length");function Bi(U){return U.split("")}function Vt(U){return U.match(ws)||[]}function hr(U,j,Y){var ve;return Y(U,function(Me,Qe,et){if(j(Me,Qe,et))return ve=Qe,!1}),ve}function Wt(U,j,Y,ve){for(var Me=U.length,Qe=Y+(ve?1:-1);ve?Qe--:++Qe<Me;)if(j(U[Qe],Qe,U))return Qe;return-1}function ln(U,j,Y){return j===j?Jc(U,j,Y):Wt(U,mo,Y)}function Cs(U,j,Y,ve){for(var Me=Y-1,Qe=U.length;++Me<Qe;)if(ve(U[Me],j))return Me;return-1}function mo(U){return U!==U}function wi(U,j){var Y=U==null?0:U.length;return Y?Jn(U,j)/Y:be}function Lr(U){return function(j){return j==null?t:j[U]}}function gi(U){return function(j){return U==null?t:U[j]}}function Ji(U,j,Y,ve,Me){return Me(U,function(Qe,et,je){Y=ve?(ve=!1,Qe):j(Y,Qe,et,je)}),Y}function dr(U,j){var Y=U.length;for(U.sort(j);Y--;)U[Y]=U[Y].value;return U}function Jn(U,j){for(var Y,ve=-1,Me=U.length;++ve<Me;){var Qe=j(U[ve]);Qe!==t&&(Y=Y===t?Qe:Y+Qe)}return Y}function Ls(U,j){for(var Y=-1,ve=Array(U);++Y<U;)ve[Y]=j(Y);return ve}function Qi(U,j){return Ze(j,function(Y){return[Y,U[Y]]})}function Hi(U){return U&&U.slice(0,dl(U)+1).replace(cr,"")}function ri(U){return function(j){return U(j)}}function ya(U,j){return Ze(j,function(Y){return U[Y]})}function Ps(U,j){return U.has(j)}function nn(U,j){for(var Y=-1,ve=U.length;++Y<ve&&ln(j,U[Y],0)>-1;);return Y}function Ds(U,j){for(var Y=U.length;Y--&&ln(j,U[Y],0)>-1;);return Y}function Ri(U,j){for(var Y=U.length,ve=0;Y--;)U[Y]===j&&++ve;return ve}var ss=gi(al),$c=gi(_a);function Zc(U){return"\\"+cl[U]}function hl(U,j){return U==null?t:U[j]}function _i(U){return Wc.test(U)}function Sa(U){return Xc.test(U)}function pr(U){for(var j,Y=[];!(j=U.next()).done;)Y.push(j.value);return Y}function go(U){var j=-1,Y=Array(U.size);return U.forEach(function(ve,Me){Y[++j]=[Me,ve]}),Y}function os(U,j){return function(Y){return U(j(Y))}}function Ci(U,j){for(var Y=-1,ve=U.length,Me=0,Qe=[];++Y<ve;){var et=U[Y];(et===j||et===g)&&(U[Y]=g,Qe[Me++]=Y)}return Qe}function Pr(U){var j=-1,Y=Array(U.size);return U.forEach(function(ve){Y[++j]=ve}),Y}function Ma(U){var j=-1,Y=Array(U.size);return U.forEach(function(ve){Y[++j]=[ve,ve]}),Y}function Jc(U,j,Y){for(var ve=Y-1,Me=U.length;++ve<Me;)if(U[ve]===j)return ve;return-1}function _o(U,j,Y){for(var ve=Y+1;ve--;)if(U[ve]===j)return ve;return ve}function mr(U){return _i(U)?pl(U):Fi(U)}function si(U){return _i(U)?H(U):Bi(U)}function dl(U){for(var j=U.length;j--&&Qr.test(U.charAt(j)););return j}var Ta=gi(ll);function pl(U){for(var j=ga.lastIndex=0;ga.test(U);)++j;return j}function H(U){return U.match(ga)||[]}function Z(U){return U.match(Vc)||[]}var ae=function U(j){j=j==null?Sn:ce.defaults(Sn.Object(),j,ce.pick(Sn,qc));var Y=j.Array,ve=j.Date,Me=j.Error,Qe=j.Function,et=j.Math,je=j.Object,Nt=j.RegExp,ht=j.String,Ht=j.TypeError,On=Y.prototype,kn=Qe.prototype,Fn=je.prototype,oi=j["__core-js_shared__"],er=kn.toString,At=Fn.hasOwnProperty,l_=0,Rh=function(){var i=/[^.]+$/.exec(oi&&oi.keys&&oi.keys.IE_PROTO||"");return i?"Symbol(src)_1."+i:""}(),ml=Fn.toString,c_=er.call(je),u_=Sn._,f_=Nt("^"+er.call(At).replace(pn,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$"),gl=fl?j.Buffer:t,as=j.Symbol,_l=j.Uint8Array,Ch=gl?gl.allocUnsafe:t,vl=os(je.getPrototypeOf,je),Lh=je.create,Ph=Fn.propertyIsEnumerable,xl=On.splice,Dh=as?as.isConcatSpreadable:t,Ea=as?as.iterator:t,Is=as?as.toStringTag:t,yl=function(){try{var i=Bs(je,"defineProperty");return i({},"",{}),i}catch{}}(),h_=j.clearTimeout!==Sn.clearTimeout&&j.clearTimeout,d_=ve&&ve.now!==Sn.Date.now&&ve.now,p_=j.setTimeout!==Sn.setTimeout&&j.setTimeout,Sl=et.ceil,Ml=et.floor,Qc=je.getOwnPropertySymbols,m_=gl?gl.isBuffer:t,Ih=j.isFinite,g_=On.join,__=os(je.keys,je),Bn=et.max,Qn=et.min,v_=ve.now,x_=j.parseInt,Nh=et.random,y_=On.reverse,eu=Bs(j,"DataView"),Aa=Bs(j,"Map"),tu=Bs(j,"Promise"),vo=Bs(j,"Set"),ba=Bs(j,"WeakMap"),wa=Bs(je,"create"),Tl=ba&&new ba,xo={},S_=Hs(eu),M_=Hs(Aa),T_=Hs(tu),E_=Hs(vo),A_=Hs(ba),El=as?as.prototype:t,Ra=El?El.valueOf:t,Uh=El?El.toString:t;function P(i){if(An(i)&&!Pt(i)&&!(i instanceof Kt)){if(i instanceof zi)return i;if(At.call(i,"__wrapped__"))return Od(i)}return new zi(i)}var yo=function(){function i(){}return function(o){if(!Tn(o))return{};if(Lh)return Lh(o);i.prototype=o;var f=new i;return i.prototype=t,f}}();function Al(){}function zi(i,o){this.__wrapped__=i,this.__actions__=[],this.__chain__=!!o,this.__index__=0,this.__values__=t}P.templateSettings={escape:Fe,evaluate:nt,interpolate:kt,variable:"",imports:{_:P}},P.prototype=Al.prototype,P.prototype.constructor=P,zi.prototype=yo(Al.prototype),zi.prototype.constructor=zi;function Kt(i){this.__wrapped__=i,this.__actions__=[],this.__dir__=1,this.__filtered__=!1,this.__iteratees__=[],this.__takeCount__=ne,this.__views__=[]}function b_(){var i=new Kt(this.__wrapped__);return i.__actions__=vi(this.__actions__),i.__dir__=this.__dir__,i.__filtered__=this.__filtered__,i.__iteratees__=vi(this.__iteratees__),i.__takeCount__=this.__takeCount__,i.__views__=vi(this.__views__),i}function w_(){if(this.__filtered__){var i=new Kt(this);i.__dir__=-1,i.__filtered__=!0}else i=this.clone(),i.__dir__*=-1;return i}function R_(){var i=this.__wrapped__.value(),o=this.__dir__,f=Pt(i),y=o<0,R=f?i.length:0,I=zv(0,R,this.__views__),V=I.start,K=I.end,ie=K-V,Te=y?K:V-1,Ae=this.__iteratees__,Le=Ae.length,Xe=0,st=Qn(ie,this.__takeCount__);if(!f||!y&&R==ie&&st==ie)return sd(i,this.__actions__);var xt=[];e:for(;ie--&&Xe<st;){Te+=o;for(var Ot=-1,yt=i[Te];++Ot<Le;){var jt=Ae[Ot],Zt=jt.iteratee,Di=jt.type,ci=Zt(yt);if(Di==xe)yt=ci;else if(!ci){if(Di==te)continue e;break e}}xt[Xe++]=yt}return xt}Kt.prototype=yo(Al.prototype),Kt.prototype.constructor=Kt;function Ns(i){var o=-1,f=i==null?0:i.length;for(this.clear();++o<f;){var y=i[o];this.set(y[0],y[1])}}function C_(){this.__data__=wa?wa(null):{},this.size=0}function L_(i){var o=this.has(i)&&delete this.__data__[i];return this.size-=o?1:0,o}function P_(i){var o=this.__data__;if(wa){var f=o[i];return f===d?t:f}return At.call(o,i)?o[i]:t}function D_(i){var o=this.__data__;return wa?o[i]!==t:At.call(o,i)}function I_(i,o){var f=this.__data__;return this.size+=this.has(i)?0:1,f[i]=wa&&o===t?d:o,this}Ns.prototype.clear=C_,Ns.prototype.delete=L_,Ns.prototype.get=P_,Ns.prototype.has=D_,Ns.prototype.set=I_;function Dr(i){var o=-1,f=i==null?0:i.length;for(this.clear();++o<f;){var y=i[o];this.set(y[0],y[1])}}function N_(){this.__data__=[],this.size=0}function U_(i){var o=this.__data__,f=bl(o,i);if(f<0)return!1;var y=o.length-1;return f==y?o.pop():xl.call(o,f,1),--this.size,!0}function O_(i){var o=this.__data__,f=bl(o,i);return f<0?t:o[f][1]}function F_(i){return bl(this.__data__,i)>-1}function B_(i,o){var f=this.__data__,y=bl(f,i);return y<0?(++this.size,f.push([i,o])):f[y][1]=o,this}Dr.prototype.clear=N_,Dr.prototype.delete=U_,Dr.prototype.get=O_,Dr.prototype.has=F_,Dr.prototype.set=B_;function Ir(i){var o=-1,f=i==null?0:i.length;for(this.clear();++o<f;){var y=i[o];this.set(y[0],y[1])}}function H_(){this.size=0,this.__data__={hash:new Ns,map:new(Aa||Dr),string:new Ns}}function z_(i){var o=Bl(this,i).delete(i);return this.size-=o?1:0,o}function G_(i){return Bl(this,i).get(i)}function k_(i){return Bl(this,i).has(i)}function V_(i,o){var f=Bl(this,i),y=f.size;return f.set(i,o),this.size+=f.size==y?0:1,this}Ir.prototype.clear=H_,Ir.prototype.delete=z_,Ir.prototype.get=G_,Ir.prototype.has=k_,Ir.prototype.set=V_;function Us(i){var o=-1,f=i==null?0:i.length;for(this.__data__=new Ir;++o<f;)this.add(i[o])}function W_(i){return this.__data__.set(i,d),this}function X_(i){return this.__data__.has(i)}Us.prototype.add=Us.prototype.push=W_,Us.prototype.has=X_;function tr(i){var o=this.__data__=new Dr(i);this.size=o.size}function q_(){this.__data__=new Dr,this.size=0}function Y_(i){var o=this.__data__,f=o.delete(i);return this.size=o.size,f}function j_(i){return this.__data__.get(i)}function K_(i){return this.__data__.has(i)}function $_(i,o){var f=this.__data__;if(f instanceof Dr){var y=f.__data__;if(!Aa||y.length<r-1)return y.push([i,o]),this.size=++f.size,this;f=this.__data__=new Ir(y)}return f.set(i,o),this.size=f.size,this}tr.prototype.clear=q_,tr.prototype.delete=Y_,tr.prototype.get=j_,tr.prototype.has=K_,tr.prototype.set=$_;function Oh(i,o){var f=Pt(i),y=!f&&zs(i),R=!f&&!y&&hs(i),I=!f&&!y&&!R&&Eo(i),V=f||y||R||I,K=V?Ls(i.length,ht):[],ie=K.length;for(var Te in i)(o||At.call(i,Te))&&!(V&&(Te=="length"||R&&(Te=="offset"||Te=="parent")||I&&(Te=="buffer"||Te=="byteLength"||Te=="byteOffset")||Fr(Te,ie)))&&K.push(Te);return K}function Fh(i){var o=i.length;return o?i[hu(0,o-1)]:t}function Z_(i,o){return Hl(vi(i),Os(o,0,i.length))}function J_(i){return Hl(vi(i))}function nu(i,o,f){(f!==t&&!nr(i[o],f)||f===t&&!(o in i))&&Nr(i,o,f)}function Ca(i,o,f){var y=i[o];(!(At.call(i,o)&&nr(y,f))||f===t&&!(o in i))&&Nr(i,o,f)}function bl(i,o){for(var f=i.length;f--;)if(nr(i[f][0],o))return f;return-1}function Q_(i,o,f,y){return ls(i,function(R,I,V){o(y,R,f(R),V)}),y}function Bh(i,o){return i&&_r(o,Vn(o),i)}function ev(i,o){return i&&_r(o,yi(o),i)}function Nr(i,o,f){o=="__proto__"&&yl?yl(i,o,{configurable:!0,enumerable:!0,value:f,writable:!0}):i[o]=f}function iu(i,o){for(var f=-1,y=o.length,R=Y(y),I=i==null;++f<y;)R[f]=I?t:Fu(i,o[f]);return R}function Os(i,o,f){return i===i&&(f!==t&&(i=i<=f?i:f),o!==t&&(i=i>=o?i:o)),i}function Gi(i,o,f,y,R,I){var V,K=o&v,ie=o&x,Te=o&E;if(f&&(V=R?f(i,y,R,I):f(i)),V!==t)return V;if(!Tn(i))return i;var Ae=Pt(i);if(Ae){if(V=kv(i),!K)return vi(i,V)}else{var Le=ei(i),Xe=Le==oe||Le==wn;if(hs(i))return ld(i,K);if(Le==Yt||Le==Ye||Xe&&!R){if(V=ie||Xe?{}:wd(i),!K)return ie?Pv(i,ev(V,i)):Lv(i,Bh(V,i))}else{if(!sn[Le])return R?i:{};V=Vv(i,Le,K)}}I||(I=new tr);var st=I.get(i);if(st)return st;I.set(i,V),np(i)?i.forEach(function(yt){V.add(Gi(yt,o,f,yt,i,I))}):ep(i)&&i.forEach(function(yt,jt){V.set(jt,Gi(yt,o,f,jt,i,I))});var xt=Te?ie?Tu:Mu:ie?yi:Vn,Ot=Ae?t:xt(i);return z(Ot||i,function(yt,jt){Ot&&(jt=yt,yt=i[jt]),Ca(V,jt,Gi(yt,o,f,jt,i,I))}),V}function tv(i){var o=Vn(i);return function(f){return Hh(f,i,o)}}function Hh(i,o,f){var y=f.length;if(i==null)return!y;for(i=je(i);y--;){var R=f[y],I=o[R],V=i[R];if(V===t&&!(R in i)||!I(V))return!1}return!0}function zh(i,o,f){if(typeof i!="function")throw new Ht(c);return Oa(function(){i.apply(t,f)},o)}function La(i,o,f,y){var R=-1,I=le,V=!0,K=i.length,ie=[],Te=o.length;if(!K)return ie;f&&(o=Ze(o,ri(f))),y?(I=Ne,V=!1):o.length>=r&&(I=Ps,V=!1,o=new Us(o));e:for(;++R<K;){var Ae=i[R],Le=f==null?Ae:f(Ae);if(Ae=y||Ae!==0?Ae:0,V&&Le===Le){for(var Xe=Te;Xe--;)if(o[Xe]===Le)continue e;ie.push(Ae)}else I(o,Le,y)||ie.push(Ae)}return ie}var ls=dd(gr),Gh=dd(su,!0);function nv(i,o){var f=!0;return ls(i,function(y,R,I){return f=!!o(y,R,I),f}),f}function wl(i,o,f){for(var y=-1,R=i.length;++y<R;){var I=i[y],V=o(I);if(V!=null&&(K===t?V===V&&!Pi(V):f(V,K)))var K=V,ie=I}return ie}function iv(i,o,f,y){var R=i.length;for(f=Ut(f),f<0&&(f=-f>R?0:R+f),y=y===t||y>R?R:Ut(y),y<0&&(y+=R),y=f>y?0:rp(y);f<y;)i[f++]=o;return i}function kh(i,o){var f=[];return ls(i,function(y,R,I){o(y,R,I)&&f.push(y)}),f}function Yn(i,o,f,y,R){var I=-1,V=i.length;for(f||(f=Xv),R||(R=[]);++I<V;){var K=i[I];o>0&&f(K)?o>1?Yn(K,o-1,f,y,R):Lt(R,K):y||(R[R.length]=K)}return R}var ru=pd(),Vh=pd(!0);function gr(i,o){return i&&ru(i,o,Vn)}function su(i,o){return i&&Vh(i,o,Vn)}function Rl(i,o){return _e(o,function(f){return Br(i[f])})}function Fs(i,o){o=us(o,i);for(var f=0,y=o.length;i!=null&&f<y;)i=i[vr(o[f++])];return f&&f==y?i:t}function Wh(i,o,f){var y=o(i);return Pt(i)?y:Lt(y,f(i))}function ai(i){return i==null?i===t?D:vt:Is&&Is in je(i)?Hv(i):Jv(i)}function ou(i,o){return i>o}function rv(i,o){return i!=null&&At.call(i,o)}function sv(i,o){return i!=null&&o in je(i)}function ov(i,o,f){return i>=Qn(o,f)&&i<Bn(o,f)}function au(i,o,f){for(var y=f?Ne:le,R=i[0].length,I=i.length,V=I,K=Y(I),ie=1/0,Te=[];V--;){var Ae=i[V];V&&o&&(Ae=Ze(Ae,ri(o))),ie=Qn(Ae.length,ie),K[V]=!f&&(o||R>=120&&Ae.length>=120)?new Us(V&&Ae):t}Ae=i[0];var Le=-1,Xe=K[0];e:for(;++Le<R&&Te.length<ie;){var st=Ae[Le],xt=o?o(st):st;if(st=f||st!==0?st:0,!(Xe?Ps(Xe,xt):y(Te,xt,f))){for(V=I;--V;){var Ot=K[V];if(!(Ot?Ps(Ot,xt):y(i[V],xt,f)))continue e}Xe&&Xe.push(xt),Te.push(st)}}return Te}function av(i,o,f,y){return gr(i,function(R,I,V){o(y,f(R),I,V)}),y}function Pa(i,o,f){o=us(o,i),i=Pd(i,o);var y=i==null?i:i[vr(Vi(o))];return y==null?t:L(y,i,f)}function Xh(i){return An(i)&&ai(i)==Ye}function lv(i){return An(i)&&ai(i)==Ie}function cv(i){return An(i)&&ai(i)==De}function Da(i,o,f,y,R){return i===o?!0:i==null||o==null||!An(i)&&!An(o)?i!==i&&o!==o:uv(i,o,f,y,Da,R)}function uv(i,o,f,y,R,I){var V=Pt(i),K=Pt(o),ie=V?lt:ei(i),Te=K?lt:ei(o);ie=ie==Ye?Yt:ie,Te=Te==Ye?Yt:Te;var Ae=ie==Yt,Le=Te==Yt,Xe=ie==Te;if(Xe&&hs(i)){if(!hs(o))return!1;V=!0,Ae=!1}if(Xe&&!Ae)return I||(I=new tr),V||Eo(i)?Ed(i,o,f,y,R,I):Fv(i,o,ie,f,y,R,I);if(!(f&w)){var st=Ae&&At.call(i,"__wrapped__"),xt=Le&&At.call(o,"__wrapped__");if(st||xt){var Ot=st?i.value():i,yt=xt?o.value():o;return I||(I=new tr),R(Ot,yt,f,y,I)}}return Xe?(I||(I=new tr),Bv(i,o,f,y,R,I)):!1}function fv(i){return An(i)&&ei(i)==tt}function lu(i,o,f,y){var R=f.length,I=R,V=!y;if(i==null)return!I;for(i=je(i);R--;){var K=f[R];if(V&&K[2]?K[1]!==i[K[0]]:!(K[0]in i))return!1}for(;++R<I;){K=f[R];var ie=K[0],Te=i[ie],Ae=K[1];if(V&&K[2]){if(Te===t&&!(ie in i))return!1}else{var Le=new tr;if(y)var Xe=y(Te,Ae,ie,i,o,Le);if(!(Xe===t?Da(Ae,Te,w|C,y,Le):Xe))return!1}}return!0}function qh(i){if(!Tn(i)||Yv(i))return!1;var o=Br(i)?f_:ue;return o.test(Hs(i))}function hv(i){return An(i)&&ai(i)==$t}function dv(i){return An(i)&&ei(i)==tn}function pv(i){return An(i)&&Xl(i.length)&&!!un[ai(i)]}function Yh(i){return typeof i=="function"?i:i==null?Si:typeof i=="object"?Pt(i)?$h(i[0],i[1]):Kh(i):mp(i)}function cu(i){if(!Ua(i))return __(i);var o=[];for(var f in je(i))At.call(i,f)&&f!="constructor"&&o.push(f);return o}function mv(i){if(!Tn(i))return Zv(i);var o=Ua(i),f=[];for(var y in i)y=="constructor"&&(o||!At.call(i,y))||f.push(y);return f}function uu(i,o){return i<o}function jh(i,o){var f=-1,y=xi(i)?Y(i.length):[];return ls(i,function(R,I,V){y[++f]=o(R,I,V)}),y}function Kh(i){var o=Au(i);return o.length==1&&o[0][2]?Cd(o[0][0],o[0][1]):function(f){return f===i||lu(f,i,o)}}function $h(i,o){return wu(i)&&Rd(o)?Cd(vr(i),o):function(f){var y=Fu(f,i);return y===t&&y===o?Bu(f,i):Da(o,y,w|C)}}function Cl(i,o,f,y,R){i!==o&&ru(o,function(I,V){if(R||(R=new tr),Tn(I))gv(i,o,V,f,Cl,y,R);else{var K=y?y(Cu(i,V),I,V+"",i,o,R):t;K===t&&(K=I),nu(i,V,K)}},yi)}function gv(i,o,f,y,R,I,V){var K=Cu(i,f),ie=Cu(o,f),Te=V.get(ie);if(Te){nu(i,f,Te);return}var Ae=I?I(K,ie,f+"",i,o,V):t,Le=Ae===t;if(Le){var Xe=Pt(ie),st=!Xe&&hs(ie),xt=!Xe&&!st&&Eo(ie);Ae=ie,Xe||st||xt?Pt(K)?Ae=K:Rn(K)?Ae=vi(K):st?(Le=!1,Ae=ld(ie,!0)):xt?(Le=!1,Ae=cd(ie,!0)):Ae=[]:Fa(ie)||zs(ie)?(Ae=K,zs(K)?Ae=sp(K):(!Tn(K)||Br(K))&&(Ae=wd(ie))):Le=!1}Le&&(V.set(ie,Ae),R(Ae,ie,y,I,V),V.delete(ie)),nu(i,f,Ae)}function Zh(i,o){var f=i.length;if(f)return o+=o<0?f:0,Fr(o,f)?i[o]:t}function Jh(i,o,f){o.length?o=Ze(o,function(I){return Pt(I)?function(V){return Fs(V,I.length===1?I[0]:I)}:I}):o=[Si];var y=-1;o=Ze(o,ri(_t()));var R=jh(i,function(I,V,K){var ie=Ze(o,function(Te){return Te(I)});return{criteria:ie,index:++y,value:I}});return dr(R,function(I,V){return Cv(I,V,f)})}function _v(i,o){return Qh(i,o,function(f,y){return Bu(i,y)})}function Qh(i,o,f){for(var y=-1,R=o.length,I={};++y<R;){var V=o[y],K=Fs(i,V);f(K,V)&&Ia(I,us(V,i),K)}return I}function vv(i){return function(o){return Fs(o,i)}}function fu(i,o,f,y){var R=y?Cs:ln,I=-1,V=o.length,K=i;for(i===o&&(o=vi(o)),f&&(K=Ze(i,ri(f)));++I<V;)for(var ie=0,Te=o[I],Ae=f?f(Te):Te;(ie=R(K,Ae,ie,y))>-1;)K!==i&&xl.call(K,ie,1),xl.call(i,ie,1);return i}function ed(i,o){for(var f=i?o.length:0,y=f-1;f--;){var R=o[f];if(f==y||R!==I){var I=R;Fr(R)?xl.call(i,R,1):mu(i,R)}}return i}function hu(i,o){return i+Ml(Nh()*(o-i+1))}function xv(i,o,f,y){for(var R=-1,I=Bn(Sl((o-i)/(f||1)),0),V=Y(I);I--;)V[y?I:++R]=i,i+=f;return V}function du(i,o){var f="";if(!i||o<1||o>Oe)return f;do o%2&&(f+=i),o=Ml(o/2),o&&(i+=i);while(o);return f}function zt(i,o){return Lu(Ld(i,o,Si),i+"")}function yv(i){return Fh(Ao(i))}function Sv(i,o){var f=Ao(i);return Hl(f,Os(o,0,f.length))}function Ia(i,o,f,y){if(!Tn(i))return i;o=us(o,i);for(var R=-1,I=o.length,V=I-1,K=i;K!=null&&++R<I;){var ie=vr(o[R]),Te=f;if(ie==="__proto__"||ie==="constructor"||ie==="prototype")return i;if(R!=V){var Ae=K[ie];Te=y?y(Ae,ie,K):t,Te===t&&(Te=Tn(Ae)?Ae:Fr(o[R+1])?[]:{})}Ca(K,ie,Te),K=K[ie]}return i}var td=Tl?function(i,o){return Tl.set(i,o),i}:Si,Mv=yl?function(i,o){return yl(i,"toString",{configurable:!0,enumerable:!1,value:zu(o),writable:!0})}:Si;function Tv(i){return Hl(Ao(i))}function ki(i,o,f){var y=-1,R=i.length;o<0&&(o=-o>R?0:R+o),f=f>R?R:f,f<0&&(f+=R),R=o>f?0:f-o>>>0,o>>>=0;for(var I=Y(R);++y<R;)I[y]=i[y+o];return I}function Ev(i,o){var f;return ls(i,function(y,R,I){return f=o(y,R,I),!f}),!!f}function Ll(i,o,f){var y=0,R=i==null?y:i.length;if(typeof o=="number"&&o===o&&R<=Ve){for(;y<R;){var I=y+R>>>1,V=i[I];V!==null&&!Pi(V)&&(f?V<=o:V<o)?y=I+1:R=I}return R}return pu(i,o,Si,f)}function pu(i,o,f,y){var R=0,I=i==null?0:i.length;if(I===0)return 0;o=f(o);for(var V=o!==o,K=o===null,ie=Pi(o),Te=o===t;R<I;){var Ae=Ml((R+I)/2),Le=f(i[Ae]),Xe=Le!==t,st=Le===null,xt=Le===Le,Ot=Pi(Le);if(V)var yt=y||xt;else Te?yt=xt&&(y||Xe):K?yt=xt&&Xe&&(y||!st):ie?yt=xt&&Xe&&!st&&(y||!Ot):st||Ot?yt=!1:yt=y?Le<=o:Le<o;yt?R=Ae+1:I=Ae}return Qn(I,pe)}function nd(i,o){for(var f=-1,y=i.length,R=0,I=[];++f<y;){var V=i[f],K=o?o(V):V;if(!f||!nr(K,ie)){var ie=K;I[R++]=V===0?0:V}}return I}function id(i){return typeof i=="number"?i:Pi(i)?be:+i}function Li(i){if(typeof i=="string")return i;if(Pt(i))return Ze(i,Li)+"";if(Pi(i))return Uh?Uh.call(i):"";var o=i+"";return o=="0"&&1/i==-ge?"-0":o}function cs(i,o,f){var y=-1,R=le,I=i.length,V=!0,K=[],ie=K;if(f)V=!1,R=Ne;else if(I>=r){var Te=o?null:Uv(i);if(Te)return Pr(Te);V=!1,R=Ps,ie=new Us}else ie=o?[]:K;e:for(;++y<I;){var Ae=i[y],Le=o?o(Ae):Ae;if(Ae=f||Ae!==0?Ae:0,V&&Le===Le){for(var Xe=ie.length;Xe--;)if(ie[Xe]===Le)continue e;o&&ie.push(Le),K.push(Ae)}else R(ie,Le,f)||(ie!==K&&ie.push(Le),K.push(Ae))}return K}function mu(i,o){return o=us(o,i),i=Pd(i,o),i==null||delete i[vr(Vi(o))]}function rd(i,o,f,y){return Ia(i,o,f(Fs(i,o)),y)}function Pl(i,o,f,y){for(var R=i.length,I=y?R:-1;(y?I--:++I<R)&&o(i[I],I,i););return f?ki(i,y?0:I,y?I+1:R):ki(i,y?I+1:0,y?R:I)}function sd(i,o){var f=i;return f instanceof Kt&&(f=f.value()),wt(o,function(y,R){return R.func.apply(R.thisArg,Lt([y],R.args))},f)}function gu(i,o,f){var y=i.length;if(y<2)return y?cs(i[0]):[];for(var R=-1,I=Y(y);++R<y;)for(var V=i[R],K=-1;++K<y;)K!=R&&(I[R]=La(I[R]||V,i[K],o,f));return cs(Yn(I,1),o,f)}function od(i,o,f){for(var y=-1,R=i.length,I=o.length,V={};++y<R;){var K=y<I?o[y]:t;f(V,i[y],K)}return V}function _u(i){return Rn(i)?i:[]}function vu(i){return typeof i=="function"?i:Si}function us(i,o){return Pt(i)?i:wu(i,o)?[i]:Ud(on(i))}var Av=zt;function fs(i,o,f){var y=i.length;return f=f===t?y:f,!o&&f>=y?i:ki(i,o,f)}var ad=h_||function(i){return Sn.clearTimeout(i)};function ld(i,o){if(o)return i.slice();var f=i.length,y=Ch?Ch(f):new i.constructor(f);return i.copy(y),y}function xu(i){var o=new i.constructor(i.byteLength);return new _l(o).set(new _l(i)),o}function bv(i,o){var f=o?xu(i.buffer):i.buffer;return new i.constructor(f,i.byteOffset,i.byteLength)}function wv(i){var o=new i.constructor(i.source,uo.exec(i));return o.lastIndex=i.lastIndex,o}function Rv(i){return Ra?je(Ra.call(i)):{}}function cd(i,o){var f=o?xu(i.buffer):i.buffer;return new i.constructor(f,i.byteOffset,i.length)}function ud(i,o){if(i!==o){var f=i!==t,y=i===null,R=i===i,I=Pi(i),V=o!==t,K=o===null,ie=o===o,Te=Pi(o);if(!K&&!Te&&!I&&i>o||I&&V&&ie&&!K&&!Te||y&&V&&ie||!f&&ie||!R)return 1;if(!y&&!I&&!Te&&i<o||Te&&f&&R&&!y&&!I||K&&f&&R||!V&&R||!ie)return-1}return 0}function Cv(i,o,f){for(var y=-1,R=i.criteria,I=o.criteria,V=R.length,K=f.length;++y<V;){var ie=ud(R[y],I[y]);if(ie){if(y>=K)return ie;var Te=f[y];return ie*(Te=="desc"?-1:1)}}return i.index-o.index}function fd(i,o,f,y){for(var R=-1,I=i.length,V=f.length,K=-1,ie=o.length,Te=Bn(I-V,0),Ae=Y(ie+Te),Le=!y;++K<ie;)Ae[K]=o[K];for(;++R<V;)(Le||R<I)&&(Ae[f[R]]=i[R]);for(;Te--;)Ae[K++]=i[R++];return Ae}function hd(i,o,f,y){for(var R=-1,I=i.length,V=-1,K=f.length,ie=-1,Te=o.length,Ae=Bn(I-K,0),Le=Y(Ae+Te),Xe=!y;++R<Ae;)Le[R]=i[R];for(var st=R;++ie<Te;)Le[st+ie]=o[ie];for(;++V<K;)(Xe||R<I)&&(Le[st+f[V]]=i[R++]);return Le}function vi(i,o){var f=-1,y=i.length;for(o||(o=Y(y));++f<y;)o[f]=i[f];return o}function _r(i,o,f,y){var R=!f;f||(f={});for(var I=-1,V=o.length;++I<V;){var K=o[I],ie=y?y(f[K],i[K],K,f,i):t;ie===t&&(ie=i[K]),R?Nr(f,K,ie):Ca(f,K,ie)}return f}function Lv(i,o){return _r(i,bu(i),o)}function Pv(i,o){return _r(i,Ad(i),o)}function Dl(i,o){return function(f,y){var R=Pt(f)?q:Q_,I=o?o():{};return R(f,i,_t(y,2),I)}}function So(i){return zt(function(o,f){var y=-1,R=f.length,I=R>1?f[R-1]:t,V=R>2?f[2]:t;for(I=i.length>3&&typeof I=="function"?(R--,I):t,V&&li(f[0],f[1],V)&&(I=R<3?t:I,R=1),o=je(o);++y<R;){var K=f[y];K&&i(o,K,y,I)}return o})}function dd(i,o){return function(f,y){if(f==null)return f;if(!xi(f))return i(f,y);for(var R=f.length,I=o?R:-1,V=je(f);(o?I--:++I<R)&&y(V[I],I,V)!==!1;);return f}}function pd(i){return function(o,f,y){for(var R=-1,I=je(o),V=y(o),K=V.length;K--;){var ie=V[i?K:++R];if(f(I[ie],ie,I)===!1)break}return o}}function Dv(i,o,f){var y=o&T,R=Na(i);function I(){var V=this&&this!==Sn&&this instanceof I?R:i;return V.apply(y?f:this,arguments)}return I}function md(i){return function(o){o=on(o);var f=_i(o)?si(o):t,y=f?f[0]:o.charAt(0),R=f?fs(f,1).join(""):o.slice(1);return y[i]()+R}}function Mo(i){return function(o){return wt(dp(hp(o).replace(ma,"")),i,"")}}function Na(i){return function(){var o=arguments;switch(o.length){case 0:return new i;case 1:return new i(o[0]);case 2:return new i(o[0],o[1]);case 3:return new i(o[0],o[1],o[2]);case 4:return new i(o[0],o[1],o[2],o[3]);case 5:return new i(o[0],o[1],o[2],o[3],o[4]);case 6:return new i(o[0],o[1],o[2],o[3],o[4],o[5]);case 7:return new i(o[0],o[1],o[2],o[3],o[4],o[5],o[6])}var f=yo(i.prototype),y=i.apply(f,o);return Tn(y)?y:f}}function Iv(i,o,f){var y=Na(i);function R(){for(var I=arguments.length,V=Y(I),K=I,ie=To(R);K--;)V[K]=arguments[K];var Te=I<3&&V[0]!==ie&&V[I-1]!==ie?[]:Ci(V,ie);if(I-=Te.length,I<f)return yd(i,o,Il,R.placeholder,t,V,Te,t,t,f-I);var Ae=this&&this!==Sn&&this instanceof R?y:i;return L(Ae,this,V)}return R}function gd(i){return function(o,f,y){var R=je(o);if(!xi(o)){var I=_t(f,3);o=Vn(o),f=function(K){return I(R[K],K,R)}}var V=i(o,f,y);return V>-1?R[I?o[V]:V]:t}}function _d(i){return Or(function(o){var f=o.length,y=f,R=zi.prototype.thru;for(i&&o.reverse();y--;){var I=o[y];if(typeof I!="function")throw new Ht(c);if(R&&!V&&Fl(I)=="wrapper")var V=new zi([],!0)}for(y=V?y:f;++y<f;){I=o[y];var K=Fl(I),ie=K=="wrapper"?Eu(I):t;ie&&Ru(ie[0])&&ie[1]==(m|O|W|me)&&!ie[4].length&&ie[9]==1?V=V[Fl(ie[0])].apply(V,ie[3]):V=I.length==1&&Ru(I)?V[K]():V.thru(I)}return function(){var Te=arguments,Ae=Te[0];if(V&&Te.length==1&&Pt(Ae))return V.plant(Ae).value();for(var Le=0,Xe=f?o[Le].apply(this,Te):Ae;++Le<f;)Xe=o[Le].call(this,Xe);return Xe}})}function Il(i,o,f,y,R,I,V,K,ie,Te){var Ae=o&m,Le=o&T,Xe=o&M,st=o&(O|B),xt=o&N,Ot=Xe?t:Na(i);function yt(){for(var jt=arguments.length,Zt=Y(jt),Di=jt;Di--;)Zt[Di]=arguments[Di];if(st)var ci=To(yt),Ii=Ri(Zt,ci);if(y&&(Zt=fd(Zt,y,R,st)),I&&(Zt=hd(Zt,I,V,st)),jt-=Ii,st&&jt<Te){var Cn=Ci(Zt,ci);return yd(i,o,Il,yt.placeholder,f,Zt,Cn,K,ie,Te-jt)}var ir=Le?f:this,zr=Xe?ir[i]:i;return jt=Zt.length,K?Zt=Qv(Zt,K):xt&&jt>1&&Zt.reverse(),Ae&&ie<jt&&(Zt.length=ie),this&&this!==Sn&&this instanceof yt&&(zr=Ot||Na(zr)),zr.apply(ir,Zt)}return yt}function vd(i,o){return function(f,y){return av(f,i,o(y),{})}}function Nl(i,o){return function(f,y){var R;if(f===t&&y===t)return o;if(f!==t&&(R=f),y!==t){if(R===t)return y;typeof f=="string"||typeof y=="string"?(f=Li(f),y=Li(y)):(f=id(f),y=id(y)),R=i(f,y)}return R}}function yu(i){return Or(function(o){return o=Ze(o,ri(_t())),zt(function(f){var y=this;return i(o,function(R){return L(R,y,f)})})})}function Ul(i,o){o=o===t?" ":Li(o);var f=o.length;if(f<2)return f?du(o,i):o;var y=du(o,Sl(i/mr(o)));return _i(o)?fs(si(y),0,i).join(""):y.slice(0,i)}function Nv(i,o,f,y){var R=o&T,I=Na(i);function V(){for(var K=-1,ie=arguments.length,Te=-1,Ae=y.length,Le=Y(Ae+ie),Xe=this&&this!==Sn&&this instanceof V?I:i;++Te<Ae;)Le[Te]=y[Te];for(;ie--;)Le[Te++]=arguments[++K];return L(Xe,R?f:this,Le)}return V}function xd(i){return function(o,f,y){return y&&typeof y!="number"&&li(o,f,y)&&(f=y=t),o=Hr(o),f===t?(f=o,o=0):f=Hr(f),y=y===t?o<f?1:-1:Hr(y),xv(o,f,y,i)}}function Ol(i){return function(o,f){return typeof o=="string"&&typeof f=="string"||(o=Wi(o),f=Wi(f)),i(o,f)}}function yd(i,o,f,y,R,I,V,K,ie,Te){var Ae=o&O,Le=Ae?V:t,Xe=Ae?t:V,st=Ae?I:t,xt=Ae?t:I;o|=Ae?W:J,o&=~(Ae?J:W),o&k||(o&=~(T|M));var Ot=[i,o,R,st,Le,xt,Xe,K,ie,Te],yt=f.apply(t,Ot);return Ru(i)&&Dd(yt,Ot),yt.placeholder=y,Id(yt,i,o)}function Su(i){var o=et[i];return function(f,y){if(f=Wi(f),y=y==null?0:Qn(Ut(y),292),y&&Ih(f)){var R=(on(f)+"e").split("e"),I=o(R[0]+"e"+(+R[1]+y));return R=(on(I)+"e").split("e"),+(R[0]+"e"+(+R[1]-y))}return o(f)}}var Uv=vo&&1/Pr(new vo([,-0]))[1]==ge?function(i){return new vo(i)}:Vu;function Sd(i){return function(o){var f=ei(o);return f==tt?go(o):f==tn?Ma(o):Qi(o,i(o))}}function Ur(i,o,f,y,R,I,V,K){var ie=o&M;if(!ie&&typeof i!="function")throw new Ht(c);var Te=y?y.length:0;if(Te||(o&=~(W|J),y=R=t),V=V===t?V:Bn(Ut(V),0),K=K===t?K:Ut(K),Te-=R?R.length:0,o&J){var Ae=y,Le=R;y=R=t}var Xe=ie?t:Eu(i),st=[i,o,f,y,R,Ae,Le,I,V,K];if(Xe&&$v(st,Xe),i=st[0],o=st[1],f=st[2],y=st[3],R=st[4],K=st[9]=st[9]===t?ie?0:i.length:Bn(st[9]-Te,0),!K&&o&(O|B)&&(o&=~(O|B)),!o||o==T)var xt=Dv(i,o,f);else o==O||o==B?xt=Iv(i,o,K):(o==W||o==(T|W))&&!R.length?xt=Nv(i,o,f,y):xt=Il.apply(t,st);var Ot=Xe?td:Dd;return Id(Ot(xt,st),i,o)}function Md(i,o,f,y){return i===t||nr(i,Fn[f])&&!At.call(y,f)?o:i}function Td(i,o,f,y,R,I){return Tn(i)&&Tn(o)&&(I.set(o,i),Cl(i,o,t,Td,I),I.delete(o)),i}function Ov(i){return Fa(i)?t:i}function Ed(i,o,f,y,R,I){var V=f&w,K=i.length,ie=o.length;if(K!=ie&&!(V&&ie>K))return!1;var Te=I.get(i),Ae=I.get(o);if(Te&&Ae)return Te==o&&Ae==i;var Le=-1,Xe=!0,st=f&C?new Us:t;for(I.set(i,o),I.set(o,i);++Le<K;){var xt=i[Le],Ot=o[Le];if(y)var yt=V?y(Ot,xt,Le,o,i,I):y(xt,Ot,Le,i,o,I);if(yt!==t){if(yt)continue;Xe=!1;break}if(st){if(!Mn(o,function(jt,Zt){if(!Ps(st,Zt)&&(xt===jt||R(xt,jt,f,y,I)))return st.push(Zt)})){Xe=!1;break}}else if(!(xt===Ot||R(xt,Ot,f,y,I))){Xe=!1;break}}return I.delete(i),I.delete(o),Xe}function Fv(i,o,f,y,R,I,V){switch(f){case Be:if(i.byteLength!=o.byteLength||i.byteOffset!=o.byteOffset)return!1;i=i.buffer,o=o.buffer;case Ie:return!(i.byteLength!=o.byteLength||!I(new _l(i),new _l(o)));case dt:case De:case mt:return nr(+i,+o);case ot:return i.name==o.name&&i.message==o.message;case $t:case en:return i==o+"";case tt:var K=go;case tn:var ie=y&w;if(K||(K=Pr),i.size!=o.size&&!ie)return!1;var Te=V.get(i);if(Te)return Te==o;y|=C,V.set(i,o);var Ae=Ed(K(i),K(o),y,R,I,V);return V.delete(i),Ae;case G:if(Ra)return Ra.call(i)==Ra.call(o)}return!1}function Bv(i,o,f,y,R,I){var V=f&w,K=Mu(i),ie=K.length,Te=Mu(o),Ae=Te.length;if(ie!=Ae&&!V)return!1;for(var Le=ie;Le--;){var Xe=K[Le];if(!(V?Xe in o:At.call(o,Xe)))return!1}var st=I.get(i),xt=I.get(o);if(st&&xt)return st==o&&xt==i;var Ot=!0;I.set(i,o),I.set(o,i);for(var yt=V;++Le<ie;){Xe=K[Le];var jt=i[Xe],Zt=o[Xe];if(y)var Di=V?y(Zt,jt,Xe,o,i,I):y(jt,Zt,Xe,i,o,I);if(!(Di===t?jt===Zt||R(jt,Zt,f,y,I):Di)){Ot=!1;break}yt||(yt=Xe=="constructor")}if(Ot&&!yt){var ci=i.constructor,Ii=o.constructor;ci!=Ii&&"constructor"in i&&"constructor"in o&&!(typeof ci=="function"&&ci instanceof ci&&typeof Ii=="function"&&Ii instanceof Ii)&&(Ot=!1)}return I.delete(i),I.delete(o),Ot}function Or(i){return Lu(Ld(i,t,Hd),i+"")}function Mu(i){return Wh(i,Vn,bu)}function Tu(i){return Wh(i,yi,Ad)}var Eu=Tl?function(i){return Tl.get(i)}:Vu;function Fl(i){for(var o=i.name+"",f=xo[o],y=At.call(xo,o)?f.length:0;y--;){var R=f[y],I=R.func;if(I==null||I==i)return R.name}return o}function To(i){var o=At.call(P,"placeholder")?P:i;return o.placeholder}function _t(){var i=P.iteratee||Gu;return i=i===Gu?Yh:i,arguments.length?i(arguments[0],arguments[1]):i}function Bl(i,o){var f=i.__data__;return qv(o)?f[typeof o=="string"?"string":"hash"]:f.map}function Au(i){for(var o=Vn(i),f=o.length;f--;){var y=o[f],R=i[y];o[f]=[y,R,Rd(R)]}return o}function Bs(i,o){var f=hl(i,o);return qh(f)?f:t}function Hv(i){var o=At.call(i,Is),f=i[Is];try{i[Is]=t;var y=!0}catch{}var R=ml.call(i);return y&&(o?i[Is]=f:delete i[Is]),R}var bu=Qc?function(i){return i==null?[]:(i=je(i),_e(Qc(i),function(o){return Ph.call(i,o)}))}:Wu,Ad=Qc?function(i){for(var o=[];i;)Lt(o,bu(i)),i=vl(i);return o}:Wu,ei=ai;(eu&&ei(new eu(new ArrayBuffer(1)))!=Be||Aa&&ei(new Aa)!=tt||tu&&ei(tu.resolve())!=gt||vo&&ei(new vo)!=tn||ba&&ei(new ba)!=$)&&(ei=function(i){var o=ai(i),f=o==Yt?i.constructor:t,y=f?Hs(f):"";if(y)switch(y){case S_:return Be;case M_:return tt;case T_:return gt;case E_:return tn;case A_:return $}return o});function zv(i,o,f){for(var y=-1,R=f.length;++y<R;){var I=f[y],V=I.size;switch(I.type){case"drop":i+=V;break;case"dropRight":o-=V;break;case"take":o=Qn(o,i+V);break;case"takeRight":i=Bn(i,o-V);break}}return{start:i,end:o}}function Gv(i){var o=i.match(ao);return o?o[1].split(ts):[]}function bd(i,o,f){o=us(o,i);for(var y=-1,R=o.length,I=!1;++y<R;){var V=vr(o[y]);if(!(I=i!=null&&f(i,V)))break;i=i[V]}return I||++y!=R?I:(R=i==null?0:i.length,!!R&&Xl(R)&&Fr(V,R)&&(Pt(i)||zs(i)))}function kv(i){var o=i.length,f=new i.constructor(o);return o&&typeof i[0]=="string"&&At.call(i,"index")&&(f.index=i.index,f.input=i.input),f}function wd(i){return typeof i.constructor=="function"&&!Ua(i)?yo(vl(i)):{}}function Vv(i,o,f){var y=i.constructor;switch(o){case Ie:return xu(i);case dt:case De:return new y(+i);case Be:return bv(i,f);case rt:case ze:case qe:case ct:case Et:case Ue:case Bt:case St:case ut:return cd(i,f);case tt:return new y;case mt:case en:return new y(i);case $t:return wv(i);case tn:return new y;case G:return Rv(i)}}function Wv(i,o){var f=o.length;if(!f)return i;var y=f-1;return o[y]=(f>1?"& ":"")+o[y],o=o.join(f>2?", ":" "),i.replace(es,`{
/* [wrapped with `+o+`] */
`)}function Xv(i){return Pt(i)||zs(i)||!!(Dh&&i&&i[Dh])}function Fr(i,o){var f=typeof i;return o=o??Oe,!!o&&(f=="number"||f!="symbol"&&he.test(i))&&i>-1&&i%1==0&&i<o}function li(i,o,f){if(!Tn(f))return!1;var y=typeof o;return(y=="number"?xi(f)&&Fr(o,f.length):y=="string"&&o in f)?nr(f[o],i):!1}function wu(i,o){if(Pt(i))return!1;var f=typeof i;return f=="number"||f=="symbol"||f=="boolean"||i==null||Pi(i)?!0:qn.test(i)||!xn.test(i)||o!=null&&i in je(o)}function qv(i){var o=typeof i;return o=="string"||o=="number"||o=="symbol"||o=="boolean"?i!=="__proto__":i===null}function Ru(i){var o=Fl(i),f=P[o];if(typeof f!="function"||!(o in Kt.prototype))return!1;if(i===f)return!0;var y=Eu(f);return!!y&&i===y[0]}function Yv(i){return!!Rh&&Rh in i}var jv=oi?Br:Xu;function Ua(i){var o=i&&i.constructor,f=typeof o=="function"&&o.prototype||Fn;return i===f}function Rd(i){return i===i&&!Tn(i)}function Cd(i,o){return function(f){return f==null?!1:f[i]===o&&(o!==t||i in je(f))}}function Kv(i){var o=Vl(i,function(y){return f.size===p&&f.clear(),y}),f=o.cache;return o}function $v(i,o){var f=i[1],y=o[1],R=f|y,I=R<(T|M|m),V=y==m&&f==O||y==m&&f==me&&i[7].length<=o[8]||y==(m|me)&&o[7].length<=o[8]&&f==O;if(!(I||V))return i;y&T&&(i[2]=o[2],R|=f&T?0:k);var K=o[3];if(K){var ie=i[3];i[3]=ie?fd(ie,K,o[4]):K,i[4]=ie?Ci(i[3],g):o[4]}return K=o[5],K&&(ie=i[5],i[5]=ie?hd(ie,K,o[6]):K,i[6]=ie?Ci(i[5],g):o[6]),K=o[7],K&&(i[7]=K),y&m&&(i[8]=i[8]==null?o[8]:Qn(i[8],o[8])),i[9]==null&&(i[9]=o[9]),i[0]=o[0],i[1]=R,i}function Zv(i){var o=[];if(i!=null)for(var f in je(i))o.push(f);return o}function Jv(i){return ml.call(i)}function Ld(i,o,f){return o=Bn(o===t?i.length-1:o,0),function(){for(var y=arguments,R=-1,I=Bn(y.length-o,0),V=Y(I);++R<I;)V[R]=y[o+R];R=-1;for(var K=Y(o+1);++R<o;)K[R]=y[R];return K[o]=f(V),L(i,this,K)}}function Pd(i,o){return o.length<2?i:Fs(i,ki(o,0,-1))}function Qv(i,o){for(var f=i.length,y=Qn(o.length,f),R=vi(i);y--;){var I=o[y];i[y]=Fr(I,f)?R[I]:t}return i}function Cu(i,o){if(!(o==="constructor"&&typeof i[o]=="function")&&o!="__proto__")return i[o]}var Dd=Nd(td),Oa=p_||function(i,o){return Sn.setTimeout(i,o)},Lu=Nd(Mv);function Id(i,o,f){var y=o+"";return Lu(i,Wv(y,e0(Gv(y),f)))}function Nd(i){var o=0,f=0;return function(){var y=v_(),R=ye-(y-f);if(f=y,R>0){if(++o>=Re)return arguments[0]}else o=0;return i.apply(t,arguments)}}function Hl(i,o){var f=-1,y=i.length,R=y-1;for(o=o===t?y:o;++f<o;){var I=hu(f,R),V=i[I];i[I]=i[f],i[f]=V}return i.length=o,i}var Ud=Kv(function(i){var o=[];return i.charCodeAt(0)===46&&o.push(""),i.replace(rn,function(f,y,R,I){o.push(R?I.replace(ca,"$1"):y||f)}),o});function vr(i){if(typeof i=="string"||Pi(i))return i;var o=i+"";return o=="0"&&1/i==-ge?"-0":o}function Hs(i){if(i!=null){try{return er.call(i)}catch{}try{return i+""}catch{}}return""}function e0(i,o){return z(Ke,function(f){var y="_."+f[0];o&f[1]&&!le(i,y)&&i.push(y)}),i.sort()}function Od(i){if(i instanceof Kt)return i.clone();var o=new zi(i.__wrapped__,i.__chain__);return o.__actions__=vi(i.__actions__),o.__index__=i.__index__,o.__values__=i.__values__,o}function t0(i,o,f){(f?li(i,o,f):o===t)?o=1:o=Bn(Ut(o),0);var y=i==null?0:i.length;if(!y||o<1)return[];for(var R=0,I=0,V=Y(Sl(y/o));R<y;)V[I++]=ki(i,R,R+=o);return V}function n0(i){for(var o=-1,f=i==null?0:i.length,y=0,R=[];++o<f;){var I=i[o];I&&(R[y++]=I)}return R}function i0(){var i=arguments.length;if(!i)return[];for(var o=Y(i-1),f=arguments[0],y=i;y--;)o[y-1]=arguments[y];return Lt(Pt(f)?vi(f):[f],Yn(o,1))}var r0=zt(function(i,o){return Rn(i)?La(i,Yn(o,1,Rn,!0)):[]}),s0=zt(function(i,o){var f=Vi(o);return Rn(f)&&(f=t),Rn(i)?La(i,Yn(o,1,Rn,!0),_t(f,2)):[]}),o0=zt(function(i,o){var f=Vi(o);return Rn(f)&&(f=t),Rn(i)?La(i,Yn(o,1,Rn,!0),t,f):[]});function a0(i,o,f){var y=i==null?0:i.length;return y?(o=f||o===t?1:Ut(o),ki(i,o<0?0:o,y)):[]}function l0(i,o,f){var y=i==null?0:i.length;return y?(o=f||o===t?1:Ut(o),o=y-o,ki(i,0,o<0?0:o)):[]}function c0(i,o){return i&&i.length?Pl(i,_t(o,3),!0,!0):[]}function u0(i,o){return i&&i.length?Pl(i,_t(o,3),!0):[]}function f0(i,o,f,y){var R=i==null?0:i.length;return R?(f&&typeof f!="number"&&li(i,o,f)&&(f=0,y=R),iv(i,o,f,y)):[]}function Fd(i,o,f){var y=i==null?0:i.length;if(!y)return-1;var R=f==null?0:Ut(f);return R<0&&(R=Bn(y+R,0)),Wt(i,_t(o,3),R)}function Bd(i,o,f){var y=i==null?0:i.length;if(!y)return-1;var R=y-1;return f!==t&&(R=Ut(f),R=f<0?Bn(y+R,0):Qn(R,y-1)),Wt(i,_t(o,3),R,!0)}function Hd(i){var o=i==null?0:i.length;return o?Yn(i,1):[]}function h0(i){var o=i==null?0:i.length;return o?Yn(i,ge):[]}function d0(i,o){var f=i==null?0:i.length;return f?(o=o===t?1:Ut(o),Yn(i,o)):[]}function p0(i){for(var o=-1,f=i==null?0:i.length,y={};++o<f;){var R=i[o];y[R[0]]=R[1]}return y}function zd(i){return i&&i.length?i[0]:t}function m0(i,o,f){var y=i==null?0:i.length;if(!y)return-1;var R=f==null?0:Ut(f);return R<0&&(R=Bn(y+R,0)),ln(i,o,R)}function g0(i){var o=i==null?0:i.length;return o?ki(i,0,-1):[]}var _0=zt(function(i){var o=Ze(i,_u);return o.length&&o[0]===i[0]?au(o):[]}),v0=zt(function(i){var o=Vi(i),f=Ze(i,_u);return o===Vi(f)?o=t:f.pop(),f.length&&f[0]===i[0]?au(f,_t(o,2)):[]}),x0=zt(function(i){var o=Vi(i),f=Ze(i,_u);return o=typeof o=="function"?o:t,o&&f.pop(),f.length&&f[0]===i[0]?au(f,t,o):[]});function y0(i,o){return i==null?"":g_.call(i,o)}function Vi(i){var o=i==null?0:i.length;return o?i[o-1]:t}function S0(i,o,f){var y=i==null?0:i.length;if(!y)return-1;var R=y;return f!==t&&(R=Ut(f),R=R<0?Bn(y+R,0):Qn(R,y-1)),o===o?_o(i,o,R):Wt(i,mo,R,!0)}function M0(i,o){return i&&i.length?Zh(i,Ut(o)):t}var T0=zt(Gd);function Gd(i,o){return i&&i.length&&o&&o.length?fu(i,o):i}function E0(i,o,f){return i&&i.length&&o&&o.length?fu(i,o,_t(f,2)):i}function A0(i,o,f){return i&&i.length&&o&&o.length?fu(i,o,t,f):i}var b0=Or(function(i,o){var f=i==null?0:i.length,y=iu(i,o);return ed(i,Ze(o,function(R){return Fr(R,f)?+R:R}).sort(ud)),y});function w0(i,o){var f=[];if(!(i&&i.length))return f;var y=-1,R=[],I=i.length;for(o=_t(o,3);++y<I;){var V=i[y];o(V,y,i)&&(f.push(V),R.push(y))}return ed(i,R),f}function Pu(i){return i==null?i:y_.call(i)}function R0(i,o,f){var y=i==null?0:i.length;return y?(f&&typeof f!="number"&&li(i,o,f)?(o=0,f=y):(o=o==null?0:Ut(o),f=f===t?y:Ut(f)),ki(i,o,f)):[]}function C0(i,o){return Ll(i,o)}function L0(i,o,f){return pu(i,o,_t(f,2))}function P0(i,o){var f=i==null?0:i.length;if(f){var y=Ll(i,o);if(y<f&&nr(i[y],o))return y}return-1}function D0(i,o){return Ll(i,o,!0)}function I0(i,o,f){return pu(i,o,_t(f,2),!0)}function N0(i,o){var f=i==null?0:i.length;if(f){var y=Ll(i,o,!0)-1;if(nr(i[y],o))return y}return-1}function U0(i){return i&&i.length?nd(i):[]}function O0(i,o){return i&&i.length?nd(i,_t(o,2)):[]}function F0(i){var o=i==null?0:i.length;return o?ki(i,1,o):[]}function B0(i,o,f){return i&&i.length?(o=f||o===t?1:Ut(o),ki(i,0,o<0?0:o)):[]}function H0(i,o,f){var y=i==null?0:i.length;return y?(o=f||o===t?1:Ut(o),o=y-o,ki(i,o<0?0:o,y)):[]}function z0(i,o){return i&&i.length?Pl(i,_t(o,3),!1,!0):[]}function G0(i,o){return i&&i.length?Pl(i,_t(o,3)):[]}var k0=zt(function(i){return cs(Yn(i,1,Rn,!0))}),V0=zt(function(i){var o=Vi(i);return Rn(o)&&(o=t),cs(Yn(i,1,Rn,!0),_t(o,2))}),W0=zt(function(i){var o=Vi(i);return o=typeof o=="function"?o:t,cs(Yn(i,1,Rn,!0),t,o)});function X0(i){return i&&i.length?cs(i):[]}function q0(i,o){return i&&i.length?cs(i,_t(o,2)):[]}function Y0(i,o){return o=typeof o=="function"?o:t,i&&i.length?cs(i,t,o):[]}function Du(i){if(!(i&&i.length))return[];var o=0;return i=_e(i,function(f){if(Rn(f))return o=Bn(f.length,o),!0}),Ls(o,function(f){return Ze(i,Lr(f))})}function kd(i,o){if(!(i&&i.length))return[];var f=Du(i);return o==null?f:Ze(f,function(y){return L(o,t,y)})}var j0=zt(function(i,o){return Rn(i)?La(i,o):[]}),K0=zt(function(i){return gu(_e(i,Rn))}),$0=zt(function(i){var o=Vi(i);return Rn(o)&&(o=t),gu(_e(i,Rn),_t(o,2))}),Z0=zt(function(i){var o=Vi(i);return o=typeof o=="function"?o:t,gu(_e(i,Rn),t,o)}),J0=zt(Du);function Q0(i,o){return od(i||[],o||[],Ca)}function ex(i,o){return od(i||[],o||[],Ia)}var tx=zt(function(i){var o=i.length,f=o>1?i[o-1]:t;return f=typeof f=="function"?(i.pop(),f):t,kd(i,f)});function Vd(i){var o=P(i);return o.__chain__=!0,o}function nx(i,o){return o(i),i}function zl(i,o){return o(i)}var ix=Or(function(i){var o=i.length,f=o?i[0]:0,y=this.__wrapped__,R=function(I){return iu(I,i)};return o>1||this.__actions__.length||!(y instanceof Kt)||!Fr(f)?this.thru(R):(y=y.slice(f,+f+(o?1:0)),y.__actions__.push({func:zl,args:[R],thisArg:t}),new zi(y,this.__chain__).thru(function(I){return o&&!I.length&&I.push(t),I}))});function rx(){return Vd(this)}function sx(){return new zi(this.value(),this.__chain__)}function ox(){this.__values__===t&&(this.__values__=ip(this.value()));var i=this.__index__>=this.__values__.length,o=i?t:this.__values__[this.__index__++];return{done:i,value:o}}function ax(){return this}function lx(i){for(var o,f=this;f instanceof Al;){var y=Od(f);y.__index__=0,y.__values__=t,o?R.__wrapped__=y:o=y;var R=y;f=f.__wrapped__}return R.__wrapped__=i,o}function cx(){var i=this.__wrapped__;if(i instanceof Kt){var o=i;return this.__actions__.length&&(o=new Kt(this)),o=o.reverse(),o.__actions__.push({func:zl,args:[Pu],thisArg:t}),new zi(o,this.__chain__)}return this.thru(Pu)}function ux(){return sd(this.__wrapped__,this.__actions__)}var fx=Dl(function(i,o,f){At.call(i,f)?++i[f]:Nr(i,f,1)});function hx(i,o,f){var y=Pt(i)?de:nv;return f&&li(i,o,f)&&(o=t),y(i,_t(o,3))}function dx(i,o){var f=Pt(i)?_e:kh;return f(i,_t(o,3))}var px=gd(Fd),mx=gd(Bd);function gx(i,o){return Yn(Gl(i,o),1)}function _x(i,o){return Yn(Gl(i,o),ge)}function vx(i,o,f){return f=f===t?1:Ut(f),Yn(Gl(i,o),f)}function Wd(i,o){var f=Pt(i)?z:ls;return f(i,_t(o,3))}function Xd(i,o){var f=Pt(i)?ee:Gh;return f(i,_t(o,3))}var xx=Dl(function(i,o,f){At.call(i,f)?i[f].push(o):Nr(i,f,[o])});function yx(i,o,f,y){i=xi(i)?i:Ao(i),f=f&&!y?Ut(f):0;var R=i.length;return f<0&&(f=Bn(R+f,0)),ql(i)?f<=R&&i.indexOf(o,f)>-1:!!R&&ln(i,o,f)>-1}var Sx=zt(function(i,o,f){var y=-1,R=typeof o=="function",I=xi(i)?Y(i.length):[];return ls(i,function(V){I[++y]=R?L(o,V,f):Pa(V,o,f)}),I}),Mx=Dl(function(i,o,f){Nr(i,f,o)});function Gl(i,o){var f=Pt(i)?Ze:jh;return f(i,_t(o,3))}function Tx(i,o,f,y){return i==null?[]:(Pt(o)||(o=o==null?[]:[o]),f=y?t:f,Pt(f)||(f=f==null?[]:[f]),Jh(i,o,f))}var Ex=Dl(function(i,o,f){i[f?0:1].push(o)},function(){return[[],[]]});function Ax(i,o,f){var y=Pt(i)?wt:Ji,R=arguments.length<3;return y(i,_t(o,4),f,R,ls)}function bx(i,o,f){var y=Pt(i)?Un:Ji,R=arguments.length<3;return y(i,_t(o,4),f,R,Gh)}function wx(i,o){var f=Pt(i)?_e:kh;return f(i,Wl(_t(o,3)))}function Rx(i){var o=Pt(i)?Fh:yv;return o(i)}function Cx(i,o,f){(f?li(i,o,f):o===t)?o=1:o=Ut(o);var y=Pt(i)?Z_:Sv;return y(i,o)}function Lx(i){var o=Pt(i)?J_:Tv;return o(i)}function Px(i){if(i==null)return 0;if(xi(i))return ql(i)?mr(i):i.length;var o=ei(i);return o==tt||o==tn?i.size:cu(i).length}function Dx(i,o,f){var y=Pt(i)?Mn:Ev;return f&&li(i,o,f)&&(o=t),y(i,_t(o,3))}var Ix=zt(function(i,o){if(i==null)return[];var f=o.length;return f>1&&li(i,o[0],o[1])?o=[]:f>2&&li(o[0],o[1],o[2])&&(o=[o[0]]),Jh(i,Yn(o,1),[])}),kl=d_||function(){return Sn.Date.now()};function Nx(i,o){if(typeof o!="function")throw new Ht(c);return i=Ut(i),function(){if(--i<1)return o.apply(this,arguments)}}function qd(i,o,f){return o=f?t:o,o=i&&o==null?i.length:o,Ur(i,m,t,t,t,t,o)}function Yd(i,o){var f;if(typeof o!="function")throw new Ht(c);return i=Ut(i),function(){return--i>0&&(f=o.apply(this,arguments)),i<=1&&(o=t),f}}var Iu=zt(function(i,o,f){var y=T;if(f.length){var R=Ci(f,To(Iu));y|=W}return Ur(i,y,o,f,R)}),jd=zt(function(i,o,f){var y=T|M;if(f.length){var R=Ci(f,To(jd));y|=W}return Ur(o,y,i,f,R)});function Kd(i,o,f){o=f?t:o;var y=Ur(i,O,t,t,t,t,t,o);return y.placeholder=Kd.placeholder,y}function $d(i,o,f){o=f?t:o;var y=Ur(i,B,t,t,t,t,t,o);return y.placeholder=$d.placeholder,y}function Zd(i,o,f){var y,R,I,V,K,ie,Te=0,Ae=!1,Le=!1,Xe=!0;if(typeof i!="function")throw new Ht(c);o=Wi(o)||0,Tn(f)&&(Ae=!!f.leading,Le="maxWait"in f,I=Le?Bn(Wi(f.maxWait)||0,o):I,Xe="trailing"in f?!!f.trailing:Xe);function st(Cn){var ir=y,zr=R;return y=R=t,Te=Cn,V=i.apply(zr,ir),V}function xt(Cn){return Te=Cn,K=Oa(jt,o),Ae?st(Cn):V}function Ot(Cn){var ir=Cn-ie,zr=Cn-Te,gp=o-ir;return Le?Qn(gp,I-zr):gp}function yt(Cn){var ir=Cn-ie,zr=Cn-Te;return ie===t||ir>=o||ir<0||Le&&zr>=I}function jt(){var Cn=kl();if(yt(Cn))return Zt(Cn);K=Oa(jt,Ot(Cn))}function Zt(Cn){return K=t,Xe&&y?st(Cn):(y=R=t,V)}function Di(){K!==t&&ad(K),Te=0,y=ie=R=K=t}function ci(){return K===t?V:Zt(kl())}function Ii(){var Cn=kl(),ir=yt(Cn);if(y=arguments,R=this,ie=Cn,ir){if(K===t)return xt(ie);if(Le)return ad(K),K=Oa(jt,o),st(ie)}return K===t&&(K=Oa(jt,o)),V}return Ii.cancel=Di,Ii.flush=ci,Ii}var Ux=zt(function(i,o){return zh(i,1,o)}),Ox=zt(function(i,o,f){return zh(i,Wi(o)||0,f)});function Fx(i){return Ur(i,N)}function Vl(i,o){if(typeof i!="function"||o!=null&&typeof o!="function")throw new Ht(c);var f=function(){var y=arguments,R=o?o.apply(this,y):y[0],I=f.cache;if(I.has(R))return I.get(R);var V=i.apply(this,y);return f.cache=I.set(R,V)||I,V};return f.cache=new(Vl.Cache||Ir),f}Vl.Cache=Ir;function Wl(i){if(typeof i!="function")throw new Ht(c);return function(){var o=arguments;switch(o.length){case 0:return!i.call(this);case 1:return!i.call(this,o[0]);case 2:return!i.call(this,o[0],o[1]);case 3:return!i.call(this,o[0],o[1],o[2])}return!i.apply(this,o)}}function Bx(i){return Yd(2,i)}var Hx=Av(function(i,o){o=o.length==1&&Pt(o[0])?Ze(o[0],ri(_t())):Ze(Yn(o,1),ri(_t()));var f=o.length;return zt(function(y){for(var R=-1,I=Qn(y.length,f);++R<I;)y[R]=o[R].call(this,y[R]);return L(i,this,y)})}),Nu=zt(function(i,o){var f=Ci(o,To(Nu));return Ur(i,W,t,o,f)}),Jd=zt(function(i,o){var f=Ci(o,To(Jd));return Ur(i,J,t,o,f)}),zx=Or(function(i,o){return Ur(i,me,t,t,t,o)});function Gx(i,o){if(typeof i!="function")throw new Ht(c);return o=o===t?o:Ut(o),zt(i,o)}function kx(i,o){if(typeof i!="function")throw new Ht(c);return o=o==null?0:Bn(Ut(o),0),zt(function(f){var y=f[o],R=fs(f,0,o);return y&&Lt(R,y),L(i,this,R)})}function Vx(i,o,f){var y=!0,R=!0;if(typeof i!="function")throw new Ht(c);return Tn(f)&&(y="leading"in f?!!f.leading:y,R="trailing"in f?!!f.trailing:R),Zd(i,o,{leading:y,maxWait:o,trailing:R})}function Wx(i){return qd(i,1)}function Xx(i,o){return Nu(vu(o),i)}function qx(){if(!arguments.length)return[];var i=arguments[0];return Pt(i)?i:[i]}function Yx(i){return Gi(i,E)}function jx(i,o){return o=typeof o=="function"?o:t,Gi(i,E,o)}function Kx(i){return Gi(i,v|E)}function $x(i,o){return o=typeof o=="function"?o:t,Gi(i,v|E,o)}function Zx(i,o){return o==null||Hh(i,o,Vn(o))}function nr(i,o){return i===o||i!==i&&o!==o}var Jx=Ol(ou),Qx=Ol(function(i,o){return i>=o}),zs=Xh(function(){return arguments}())?Xh:function(i){return An(i)&&At.call(i,"callee")&&!Ph.call(i,"callee")},Pt=Y.isArray,ey=l?ri(l):lv;function xi(i){return i!=null&&Xl(i.length)&&!Br(i)}function Rn(i){return An(i)&&xi(i)}function ty(i){return i===!0||i===!1||An(i)&&ai(i)==dt}var hs=m_||Xu,ny=h?ri(h):cv;function iy(i){return An(i)&&i.nodeType===1&&!Fa(i)}function ry(i){if(i==null)return!0;if(xi(i)&&(Pt(i)||typeof i=="string"||typeof i.splice=="function"||hs(i)||Eo(i)||zs(i)))return!i.length;var o=ei(i);if(o==tt||o==tn)return!i.size;if(Ua(i))return!cu(i).length;for(var f in i)if(At.call(i,f))return!1;return!0}function sy(i,o){return Da(i,o)}function oy(i,o,f){f=typeof f=="function"?f:t;var y=f?f(i,o):t;return y===t?Da(i,o,t,f):!!y}function Uu(i){if(!An(i))return!1;var o=ai(i);return o==ot||o==Ge||typeof i.message=="string"&&typeof i.name=="string"&&!Fa(i)}function ay(i){return typeof i=="number"&&Ih(i)}function Br(i){if(!Tn(i))return!1;var o=ai(i);return o==oe||o==wn||o==Ct||o==Dt}function Qd(i){return typeof i=="number"&&i==Ut(i)}function Xl(i){return typeof i=="number"&&i>-1&&i%1==0&&i<=Oe}function Tn(i){var o=typeof i;return i!=null&&(o=="object"||o=="function")}function An(i){return i!=null&&typeof i=="object"}var ep=_?ri(_):fv;function ly(i,o){return i===o||lu(i,o,Au(o))}function cy(i,o,f){return f=typeof f=="function"?f:t,lu(i,o,Au(o),f)}function uy(i){return tp(i)&&i!=+i}function fy(i){if(jv(i))throw new Me(a);return qh(i)}function hy(i){return i===null}function dy(i){return i==null}function tp(i){return typeof i=="number"||An(i)&&ai(i)==mt}function Fa(i){if(!An(i)||ai(i)!=Yt)return!1;var o=vl(i);if(o===null)return!0;var f=At.call(o,"constructor")&&o.constructor;return typeof f=="function"&&f instanceof f&&er.call(f)==c_}var Ou=S?ri(S):hv;function py(i){return Qd(i)&&i>=-Oe&&i<=Oe}var np=A?ri(A):dv;function ql(i){return typeof i=="string"||!Pt(i)&&An(i)&&ai(i)==en}function Pi(i){return typeof i=="symbol"||An(i)&&ai(i)==G}var Eo=b?ri(b):pv;function my(i){return i===t}function gy(i){return An(i)&&ei(i)==$}function _y(i){return An(i)&&ai(i)==Pe}var vy=Ol(uu),xy=Ol(function(i,o){return i<=o});function ip(i){if(!i)return[];if(xi(i))return ql(i)?si(i):vi(i);if(Ea&&i[Ea])return pr(i[Ea]());var o=ei(i),f=o==tt?go:o==tn?Pr:Ao;return f(i)}function Hr(i){if(!i)return i===0?i:0;if(i=Wi(i),i===ge||i===-ge){var o=i<0?-1:1;return o*Ce}return i===i?i:0}function Ut(i){var o=Hr(i),f=o%1;return o===o?f?o-f:o:0}function rp(i){return i?Os(Ut(i),0,ne):0}function Wi(i){if(typeof i=="number")return i;if(Pi(i))return be;if(Tn(i)){var o=typeof i.valueOf=="function"?i.valueOf():i;i=Tn(o)?o+"":o}if(typeof i!="string")return i===0?i:+i;i=Hi(i);var f=se.test(i);return f||fe.test(i)?jc(i.slice(2),f?2:8):F.test(i)?be:+i}function sp(i){return _r(i,yi(i))}function yy(i){return i?Os(Ut(i),-Oe,Oe):i===0?i:0}function on(i){return i==null?"":Li(i)}var Sy=So(function(i,o){if(Ua(o)||xi(o)){_r(o,Vn(o),i);return}for(var f in o)At.call(o,f)&&Ca(i,f,o[f])}),op=So(function(i,o){_r(o,yi(o),i)}),Yl=So(function(i,o,f,y){_r(o,yi(o),i,y)}),My=So(function(i,o,f,y){_r(o,Vn(o),i,y)}),Ty=Or(iu);function Ey(i,o){var f=yo(i);return o==null?f:Bh(f,o)}var Ay=zt(function(i,o){i=je(i);var f=-1,y=o.length,R=y>2?o[2]:t;for(R&&li(o[0],o[1],R)&&(y=1);++f<y;)for(var I=o[f],V=yi(I),K=-1,ie=V.length;++K<ie;){var Te=V[K],Ae=i[Te];(Ae===t||nr(Ae,Fn[Te])&&!At.call(i,Te))&&(i[Te]=I[Te])}return i}),by=zt(function(i){return i.push(t,Td),L(ap,t,i)});function wy(i,o){return hr(i,_t(o,3),gr)}function Ry(i,o){return hr(i,_t(o,3),su)}function Cy(i,o){return i==null?i:ru(i,_t(o,3),yi)}function Ly(i,o){return i==null?i:Vh(i,_t(o,3),yi)}function Py(i,o){return i&&gr(i,_t(o,3))}function Dy(i,o){return i&&su(i,_t(o,3))}function Iy(i){return i==null?[]:Rl(i,Vn(i))}function Ny(i){return i==null?[]:Rl(i,yi(i))}function Fu(i,o,f){var y=i==null?t:Fs(i,o);return y===t?f:y}function Uy(i,o){return i!=null&&bd(i,o,rv)}function Bu(i,o){return i!=null&&bd(i,o,sv)}var Oy=vd(function(i,o,f){o!=null&&typeof o.toString!="function"&&(o=ml.call(o)),i[o]=f},zu(Si)),Fy=vd(function(i,o,f){o!=null&&typeof o.toString!="function"&&(o=ml.call(o)),At.call(i,o)?i[o].push(f):i[o]=[f]},_t),By=zt(Pa);function Vn(i){return xi(i)?Oh(i):cu(i)}function yi(i){return xi(i)?Oh(i,!0):mv(i)}function Hy(i,o){var f={};return o=_t(o,3),gr(i,function(y,R,I){Nr(f,o(y,R,I),y)}),f}function zy(i,o){var f={};return o=_t(o,3),gr(i,function(y,R,I){Nr(f,R,o(y,R,I))}),f}var Gy=So(function(i,o,f){Cl(i,o,f)}),ap=So(function(i,o,f,y){Cl(i,o,f,y)}),ky=Or(function(i,o){var f={};if(i==null)return f;var y=!1;o=Ze(o,function(I){return I=us(I,i),y||(y=I.length>1),I}),_r(i,Tu(i),f),y&&(f=Gi(f,v|x|E,Ov));for(var R=o.length;R--;)mu(f,o[R]);return f});function Vy(i,o){return lp(i,Wl(_t(o)))}var Wy=Or(function(i,o){return i==null?{}:_v(i,o)});function lp(i,o){if(i==null)return{};var f=Ze(Tu(i),function(y){return[y]});return o=_t(o),Qh(i,f,function(y,R){return o(y,R[0])})}function Xy(i,o,f){o=us(o,i);var y=-1,R=o.length;for(R||(R=1,i=t);++y<R;){var I=i==null?t:i[vr(o[y])];I===t&&(y=R,I=f),i=Br(I)?I.call(i):I}return i}function qy(i,o,f){return i==null?i:Ia(i,o,f)}function Yy(i,o,f,y){return y=typeof y=="function"?y:t,i==null?i:Ia(i,o,f,y)}var cp=Sd(Vn),up=Sd(yi);function jy(i,o,f){var y=Pt(i),R=y||hs(i)||Eo(i);if(o=_t(o,4),f==null){var I=i&&i.constructor;R?f=y?new I:[]:Tn(i)?f=Br(I)?yo(vl(i)):{}:f={}}return(R?z:gr)(i,function(V,K,ie){return o(f,V,K,ie)}),f}function Ky(i,o){return i==null?!0:mu(i,o)}function $y(i,o,f){return i==null?i:rd(i,o,vu(f))}function Zy(i,o,f,y){return y=typeof y=="function"?y:t,i==null?i:rd(i,o,vu(f),y)}function Ao(i){return i==null?[]:ya(i,Vn(i))}function Jy(i){return i==null?[]:ya(i,yi(i))}function Qy(i,o,f){return f===t&&(f=o,o=t),f!==t&&(f=Wi(f),f=f===f?f:0),o!==t&&(o=Wi(o),o=o===o?o:0),Os(Wi(i),o,f)}function eS(i,o,f){return o=Hr(o),f===t?(f=o,o=0):f=Hr(f),i=Wi(i),ov(i,o,f)}function tS(i,o,f){if(f&&typeof f!="boolean"&&li(i,o,f)&&(o=f=t),f===t&&(typeof o=="boolean"?(f=o,o=t):typeof i=="boolean"&&(f=i,i=t)),i===t&&o===t?(i=0,o=1):(i=Hr(i),o===t?(o=i,i=0):o=Hr(o)),i>o){var y=i;i=o,o=y}if(f||i%1||o%1){var R=Nh();return Qn(i+R*(o-i+va("1e-"+((R+"").length-1))),o)}return hu(i,o)}var nS=Mo(function(i,o,f){return o=o.toLowerCase(),i+(f?fp(o):o)});function fp(i){return Hu(on(i).toLowerCase())}function hp(i){return i=on(i),i&&i.replace($e,ss).replace(kc,"")}function iS(i,o,f){i=on(i),o=Li(o);var y=i.length;f=f===t?y:Os(Ut(f),0,y);var R=f;return f-=o.length,f>=0&&i.slice(f,R)==o}function rS(i){return i=on(i),i&&Se.test(i)?i.replace(ke,$c):i}function sS(i){return i=on(i),i&&Nn.test(i)?i.replace(pn,"\\$&"):i}var oS=Mo(function(i,o,f){return i+(f?"-":"")+o.toLowerCase()}),aS=Mo(function(i,o,f){return i+(f?" ":"")+o.toLowerCase()}),lS=md("toLowerCase");function cS(i,o,f){i=on(i),o=Ut(o);var y=o?mr(i):0;if(!o||y>=o)return i;var R=(o-y)/2;return Ul(Ml(R),f)+i+Ul(Sl(R),f)}function uS(i,o,f){i=on(i),o=Ut(o);var y=o?mr(i):0;return o&&y<o?i+Ul(o-y,f):i}function fS(i,o,f){i=on(i),o=Ut(o);var y=o?mr(i):0;return o&&y<o?Ul(o-y,f)+i:i}function hS(i,o,f){return f||o==null?o=0:o&&(o=+o),x_(on(i).replace(cr,""),o||0)}function dS(i,o,f){return(f?li(i,o,f):o===t)?o=1:o=Ut(o),du(on(i),o)}function pS(){var i=arguments,o=on(i[0]);return i.length<3?o:o.replace(i[1],i[2])}var mS=Mo(function(i,o,f){return i+(f?"_":"")+o.toLowerCase()});function gS(i,o,f){return f&&typeof f!="number"&&li(i,o,f)&&(o=f=t),f=f===t?ne:f>>>0,f?(i=on(i),i&&(typeof o=="string"||o!=null&&!Ou(o))&&(o=Li(o),!o&&_i(i))?fs(si(i),0,f):i.split(o,f)):[]}var _S=Mo(function(i,o,f){return i+(f?" ":"")+Hu(o)});function vS(i,o,f){return i=on(i),f=f==null?0:Os(Ut(f),0,i.length),o=Li(o),i.slice(f,f+o.length)==o}function xS(i,o,f){var y=P.templateSettings;f&&li(i,o,f)&&(o=t),i=on(i),o=Yl({},o,y,Md);var R=Yl({},o.imports,y.imports,Md),I=Vn(R),V=ya(R,I),K,ie,Te=0,Ae=o.interpolate||it,Le="__p += '",Xe=Nt((o.escape||it).source+"|"+Ae.source+"|"+(Ae===kt?co:it).source+"|"+(o.evaluate||it).source+"|$","g"),st="//# sourceURL="+(At.call(o,"sourceURL")?(o.sourceURL+"").replace(/\s/g," "):"lodash.templateSources["+ ++Yc+"]")+`
`;i.replace(Xe,function(yt,jt,Zt,Di,ci,Ii){return Zt||(Zt=Di),Le+=i.slice(Te,Ii).replace(at,Zc),jt&&(K=!0,Le+=`' +
__e(`+jt+`) +
'`),ci&&(ie=!0,Le+=`';
`+ci+`;
__p += '`),Zt&&(Le+=`' +
((__t = (`+Zt+`)) == null ? '' : __t) +
'`),Te=Ii+yt.length,yt}),Le+=`';
`;var xt=At.call(o,"variable")&&o.variable;if(!xt)Le=`with (obj) {
`+Le+`
}
`;else if(lo.test(xt))throw new Me(u);Le=(ie?Le.replace(ft,""):Le).replace(Je,"$1").replace(Gt,"$1;"),Le="function("+(xt||"obj")+`) {
`+(xt?"":`obj || (obj = {});
`)+"var __t, __p = ''"+(K?", __e = _.escape":"")+(ie?`, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
`:`;
`)+Le+`return __p
}`;var Ot=pp(function(){return Qe(I,st+"return "+Le).apply(t,V)});if(Ot.source=Le,Uu(Ot))throw Ot;return Ot}function yS(i){return on(i).toLowerCase()}function SS(i){return on(i).toUpperCase()}function MS(i,o,f){if(i=on(i),i&&(f||o===t))return Hi(i);if(!i||!(o=Li(o)))return i;var y=si(i),R=si(o),I=nn(y,R),V=Ds(y,R)+1;return fs(y,I,V).join("")}function TS(i,o,f){if(i=on(i),i&&(f||o===t))return i.slice(0,dl(i)+1);if(!i||!(o=Li(o)))return i;var y=si(i),R=Ds(y,si(o))+1;return fs(y,0,R).join("")}function ES(i,o,f){if(i=on(i),i&&(f||o===t))return i.replace(cr,"");if(!i||!(o=Li(o)))return i;var y=si(i),R=nn(y,si(o));return fs(y,R).join("")}function AS(i,o){var f=X,y=Ee;if(Tn(o)){var R="separator"in o?o.separator:R;f="length"in o?Ut(o.length):f,y="omission"in o?Li(o.omission):y}i=on(i);var I=i.length;if(_i(i)){var V=si(i);I=V.length}if(f>=I)return i;var K=f-mr(y);if(K<1)return y;var ie=V?fs(V,0,K).join(""):i.slice(0,K);if(R===t)return ie+y;if(V&&(K+=ie.length-K),Ou(R)){if(i.slice(K).search(R)){var Te,Ae=ie;for(R.global||(R=Nt(R.source,on(uo.exec(R))+"g")),R.lastIndex=0;Te=R.exec(Ae);)var Le=Te.index;ie=ie.slice(0,Le===t?K:Le)}}else if(i.indexOf(Li(R),K)!=K){var Xe=ie.lastIndexOf(R);Xe>-1&&(ie=ie.slice(0,Xe))}return ie+y}function bS(i){return i=on(i),i&&He.test(i)?i.replace(Q,Ta):i}var wS=Mo(function(i,o,f){return i+(f?" ":"")+o.toUpperCase()}),Hu=md("toUpperCase");function dp(i,o,f){return i=on(i),o=f?t:o,o===t?Sa(i)?Z(i):Vt(i):i.match(o)||[]}var pp=zt(function(i,o){try{return L(i,t,o)}catch(f){return Uu(f)?f:new Me(f)}}),RS=Or(function(i,o){return z(o,function(f){f=vr(f),Nr(i,f,Iu(i[f],i))}),i});function CS(i){var o=i==null?0:i.length,f=_t();return i=o?Ze(i,function(y){if(typeof y[1]!="function")throw new Ht(c);return[f(y[0]),y[1]]}):[],zt(function(y){for(var R=-1;++R<o;){var I=i[R];if(L(I[0],this,y))return L(I[1],this,y)}})}function LS(i){return tv(Gi(i,v))}function zu(i){return function(){return i}}function PS(i,o){return i==null||i!==i?o:i}var DS=_d(),IS=_d(!0);function Si(i){return i}function Gu(i){return Yh(typeof i=="function"?i:Gi(i,v))}function NS(i){return Kh(Gi(i,v))}function US(i,o){return $h(i,Gi(o,v))}var OS=zt(function(i,o){return function(f){return Pa(f,i,o)}}),FS=zt(function(i,o){return function(f){return Pa(i,f,o)}});function ku(i,o,f){var y=Vn(o),R=Rl(o,y);f==null&&!(Tn(o)&&(R.length||!y.length))&&(f=o,o=i,i=this,R=Rl(o,Vn(o)));var I=!(Tn(f)&&"chain"in f)||!!f.chain,V=Br(i);return z(R,function(K){var ie=o[K];i[K]=ie,V&&(i.prototype[K]=function(){var Te=this.__chain__;if(I||Te){var Ae=i(this.__wrapped__),Le=Ae.__actions__=vi(this.__actions__);return Le.push({func:ie,args:arguments,thisArg:i}),Ae.__chain__=Te,Ae}return ie.apply(i,Lt([this.value()],arguments))})}),i}function BS(){return Sn._===this&&(Sn._=u_),this}function Vu(){}function HS(i){return i=Ut(i),zt(function(o){return Zh(o,i)})}var zS=yu(Ze),GS=yu(de),kS=yu(Mn);function mp(i){return wu(i)?Lr(vr(i)):vv(i)}function VS(i){return function(o){return i==null?t:Fs(i,o)}}var WS=xd(),XS=xd(!0);function Wu(){return[]}function Xu(){return!1}function qS(){return{}}function YS(){return""}function jS(){return!0}function KS(i,o){if(i=Ut(i),i<1||i>Oe)return[];var f=ne,y=Qn(i,ne);o=_t(o),i-=ne;for(var R=Ls(y,o);++f<i;)o(f);return R}function $S(i){return Pt(i)?Ze(i,vr):Pi(i)?[i]:vi(Ud(on(i)))}function ZS(i){var o=++l_;return on(i)+o}var JS=Nl(function(i,o){return i+o},0),QS=Su("ceil"),eM=Nl(function(i,o){return i/o},1),tM=Su("floor");function nM(i){return i&&i.length?wl(i,Si,ou):t}function iM(i,o){return i&&i.length?wl(i,_t(o,2),ou):t}function rM(i){return wi(i,Si)}function sM(i,o){return wi(i,_t(o,2))}function oM(i){return i&&i.length?wl(i,Si,uu):t}function aM(i,o){return i&&i.length?wl(i,_t(o,2),uu):t}var lM=Nl(function(i,o){return i*o},1),cM=Su("round"),uM=Nl(function(i,o){return i-o},0);function fM(i){return i&&i.length?Jn(i,Si):0}function hM(i,o){return i&&i.length?Jn(i,_t(o,2)):0}return P.after=Nx,P.ary=qd,P.assign=Sy,P.assignIn=op,P.assignInWith=Yl,P.assignWith=My,P.at=Ty,P.before=Yd,P.bind=Iu,P.bindAll=RS,P.bindKey=jd,P.castArray=qx,P.chain=Vd,P.chunk=t0,P.compact=n0,P.concat=i0,P.cond=CS,P.conforms=LS,P.constant=zu,P.countBy=fx,P.create=Ey,P.curry=Kd,P.curryRight=$d,P.debounce=Zd,P.defaults=Ay,P.defaultsDeep=by,P.defer=Ux,P.delay=Ox,P.difference=r0,P.differenceBy=s0,P.differenceWith=o0,P.drop=a0,P.dropRight=l0,P.dropRightWhile=c0,P.dropWhile=u0,P.fill=f0,P.filter=dx,P.flatMap=gx,P.flatMapDeep=_x,P.flatMapDepth=vx,P.flatten=Hd,P.flattenDeep=h0,P.flattenDepth=d0,P.flip=Fx,P.flow=DS,P.flowRight=IS,P.fromPairs=p0,P.functions=Iy,P.functionsIn=Ny,P.groupBy=xx,P.initial=g0,P.intersection=_0,P.intersectionBy=v0,P.intersectionWith=x0,P.invert=Oy,P.invertBy=Fy,P.invokeMap=Sx,P.iteratee=Gu,P.keyBy=Mx,P.keys=Vn,P.keysIn=yi,P.map=Gl,P.mapKeys=Hy,P.mapValues=zy,P.matches=NS,P.matchesProperty=US,P.memoize=Vl,P.merge=Gy,P.mergeWith=ap,P.method=OS,P.methodOf=FS,P.mixin=ku,P.negate=Wl,P.nthArg=HS,P.omit=ky,P.omitBy=Vy,P.once=Bx,P.orderBy=Tx,P.over=zS,P.overArgs=Hx,P.overEvery=GS,P.overSome=kS,P.partial=Nu,P.partialRight=Jd,P.partition=Ex,P.pick=Wy,P.pickBy=lp,P.property=mp,P.propertyOf=VS,P.pull=T0,P.pullAll=Gd,P.pullAllBy=E0,P.pullAllWith=A0,P.pullAt=b0,P.range=WS,P.rangeRight=XS,P.rearg=zx,P.reject=wx,P.remove=w0,P.rest=Gx,P.reverse=Pu,P.sampleSize=Cx,P.set=qy,P.setWith=Yy,P.shuffle=Lx,P.slice=R0,P.sortBy=Ix,P.sortedUniq=U0,P.sortedUniqBy=O0,P.split=gS,P.spread=kx,P.tail=F0,P.take=B0,P.takeRight=H0,P.takeRightWhile=z0,P.takeWhile=G0,P.tap=nx,P.throttle=Vx,P.thru=zl,P.toArray=ip,P.toPairs=cp,P.toPairsIn=up,P.toPath=$S,P.toPlainObject=sp,P.transform=jy,P.unary=Wx,P.union=k0,P.unionBy=V0,P.unionWith=W0,P.uniq=X0,P.uniqBy=q0,P.uniqWith=Y0,P.unset=Ky,P.unzip=Du,P.unzipWith=kd,P.update=$y,P.updateWith=Zy,P.values=Ao,P.valuesIn=Jy,P.without=j0,P.words=dp,P.wrap=Xx,P.xor=K0,P.xorBy=$0,P.xorWith=Z0,P.zip=J0,P.zipObject=Q0,P.zipObjectDeep=ex,P.zipWith=tx,P.entries=cp,P.entriesIn=up,P.extend=op,P.extendWith=Yl,ku(P,P),P.add=JS,P.attempt=pp,P.camelCase=nS,P.capitalize=fp,P.ceil=QS,P.clamp=Qy,P.clone=Yx,P.cloneDeep=Kx,P.cloneDeepWith=$x,P.cloneWith=jx,P.conformsTo=Zx,P.deburr=hp,P.defaultTo=PS,P.divide=eM,P.endsWith=iS,P.eq=nr,P.escape=rS,P.escapeRegExp=sS,P.every=hx,P.find=px,P.findIndex=Fd,P.findKey=wy,P.findLast=mx,P.findLastIndex=Bd,P.findLastKey=Ry,P.floor=tM,P.forEach=Wd,P.forEachRight=Xd,P.forIn=Cy,P.forInRight=Ly,P.forOwn=Py,P.forOwnRight=Dy,P.get=Fu,P.gt=Jx,P.gte=Qx,P.has=Uy,P.hasIn=Bu,P.head=zd,P.identity=Si,P.includes=yx,P.indexOf=m0,P.inRange=eS,P.invoke=By,P.isArguments=zs,P.isArray=Pt,P.isArrayBuffer=ey,P.isArrayLike=xi,P.isArrayLikeObject=Rn,P.isBoolean=ty,P.isBuffer=hs,P.isDate=ny,P.isElement=iy,P.isEmpty=ry,P.isEqual=sy,P.isEqualWith=oy,P.isError=Uu,P.isFinite=ay,P.isFunction=Br,P.isInteger=Qd,P.isLength=Xl,P.isMap=ep,P.isMatch=ly,P.isMatchWith=cy,P.isNaN=uy,P.isNative=fy,P.isNil=dy,P.isNull=hy,P.isNumber=tp,P.isObject=Tn,P.isObjectLike=An,P.isPlainObject=Fa,P.isRegExp=Ou,P.isSafeInteger=py,P.isSet=np,P.isString=ql,P.isSymbol=Pi,P.isTypedArray=Eo,P.isUndefined=my,P.isWeakMap=gy,P.isWeakSet=_y,P.join=y0,P.kebabCase=oS,P.last=Vi,P.lastIndexOf=S0,P.lowerCase=aS,P.lowerFirst=lS,P.lt=vy,P.lte=xy,P.max=nM,P.maxBy=iM,P.mean=rM,P.meanBy=sM,P.min=oM,P.minBy=aM,P.stubArray=Wu,P.stubFalse=Xu,P.stubObject=qS,P.stubString=YS,P.stubTrue=jS,P.multiply=lM,P.nth=M0,P.noConflict=BS,P.noop=Vu,P.now=kl,P.pad=cS,P.padEnd=uS,P.padStart=fS,P.parseInt=hS,P.random=tS,P.reduce=Ax,P.reduceRight=bx,P.repeat=dS,P.replace=pS,P.result=Xy,P.round=cM,P.runInContext=U,P.sample=Rx,P.size=Px,P.snakeCase=mS,P.some=Dx,P.sortedIndex=C0,P.sortedIndexBy=L0,P.sortedIndexOf=P0,P.sortedLastIndex=D0,P.sortedLastIndexBy=I0,P.sortedLastIndexOf=N0,P.startCase=_S,P.startsWith=vS,P.subtract=uM,P.sum=fM,P.sumBy=hM,P.template=xS,P.times=KS,P.toFinite=Hr,P.toInteger=Ut,P.toLength=rp,P.toLower=yS,P.toNumber=Wi,P.toSafeInteger=yy,P.toString=on,P.toUpper=SS,P.trim=MS,P.trimEnd=TS,P.trimStart=ES,P.truncate=AS,P.unescape=bS,P.uniqueId=ZS,P.upperCase=wS,P.upperFirst=Hu,P.each=Wd,P.eachRight=Xd,P.first=zd,ku(P,function(){var i={};return gr(P,function(o,f){At.call(P.prototype,f)||(i[f]=o)}),i}(),{chain:!1}),P.VERSION=n,z(["bind","bindKey","curry","curryRight","partial","partialRight"],function(i){P[i].placeholder=P}),z(["drop","take"],function(i,o){Kt.prototype[i]=function(f){f=f===t?1:Bn(Ut(f),0);var y=this.__filtered__&&!o?new Kt(this):this.clone();return y.__filtered__?y.__takeCount__=Qn(f,y.__takeCount__):y.__views__.push({size:Qn(f,ne),type:i+(y.__dir__<0?"Right":"")}),y},Kt.prototype[i+"Right"]=function(f){return this.reverse()[i](f).reverse()}}),z(["filter","map","takeWhile"],function(i,o){var f=o+1,y=f==te||f==we;Kt.prototype[i]=function(R){var I=this.clone();return I.__iteratees__.push({iteratee:_t(R,3),type:f}),I.__filtered__=I.__filtered__||y,I}}),z(["head","last"],function(i,o){var f="take"+(o?"Right":"");Kt.prototype[i]=function(){return this[f](1).value()[0]}}),z(["initial","tail"],function(i,o){var f="drop"+(o?"":"Right");Kt.prototype[i]=function(){return this.__filtered__?new Kt(this):this[f](1)}}),Kt.prototype.compact=function(){return this.filter(Si)},Kt.prototype.find=function(i){return this.filter(i).head()},Kt.prototype.findLast=function(i){return this.reverse().find(i)},Kt.prototype.invokeMap=zt(function(i,o){return typeof i=="function"?new Kt(this):this.map(function(f){return Pa(f,i,o)})}),Kt.prototype.reject=function(i){return this.filter(Wl(_t(i)))},Kt.prototype.slice=function(i,o){i=Ut(i);var f=this;return f.__filtered__&&(i>0||o<0)?new Kt(f):(i<0?f=f.takeRight(-i):i&&(f=f.drop(i)),o!==t&&(o=Ut(o),f=o<0?f.dropRight(-o):f.take(o-i)),f)},Kt.prototype.takeRightWhile=function(i){return this.reverse().takeWhile(i).reverse()},Kt.prototype.toArray=function(){return this.take(ne)},gr(Kt.prototype,function(i,o){var f=/^(?:filter|find|map|reject)|While$/.test(o),y=/^(?:head|last)$/.test(o),R=P[y?"take"+(o=="last"?"Right":""):o],I=y||/^find/.test(o);R&&(P.prototype[o]=function(){var V=this.__wrapped__,K=y?[1]:arguments,ie=V instanceof Kt,Te=K[0],Ae=ie||Pt(V),Le=function(jt){var Zt=R.apply(P,Lt([jt],K));return y&&Xe?Zt[0]:Zt};Ae&&f&&typeof Te=="function"&&Te.length!=1&&(ie=Ae=!1);var Xe=this.__chain__,st=!!this.__actions__.length,xt=I&&!Xe,Ot=ie&&!st;if(!I&&Ae){V=Ot?V:new Kt(this);var yt=i.apply(V,K);return yt.__actions__.push({func:zl,args:[Le],thisArg:t}),new zi(yt,Xe)}return xt&&Ot?i.apply(this,K):(yt=this.thru(Le),xt?y?yt.value()[0]:yt.value():yt)})}),z(["pop","push","shift","sort","splice","unshift"],function(i){var o=On[i],f=/^(?:push|sort|unshift)$/.test(i)?"tap":"thru",y=/^(?:pop|shift)$/.test(i);P.prototype[i]=function(){var R=arguments;if(y&&!this.__chain__){var I=this.value();return o.apply(Pt(I)?I:[],R)}return this[f](function(V){return o.apply(Pt(V)?V:[],R)})}}),gr(Kt.prototype,function(i,o){var f=P[o];if(f){var y=f.name+"";At.call(xo,y)||(xo[y]=[]),xo[y].push({name:o,func:f})}}),xo[Il(t,M).name]=[{name:"wrapper",func:t}],Kt.prototype.clone=b_,Kt.prototype.reverse=w_,Kt.prototype.value=R_,P.prototype.at=ix,P.prototype.chain=rx,P.prototype.commit=sx,P.prototype.next=ox,P.prototype.plant=lx,P.prototype.reverse=cx,P.prototype.toJSON=P.prototype.valueOf=P.prototype.value=ux,P.prototype.first=P.prototype.head,Ea&&(P.prototype[Ea]=ax),P},ce=ae();Zi?((Zi.exports=ce)._=ce,po._=ce):Sn._=ce}).call(Vo)})(Pc,Pc.exports);var Q1=Pc.exports;const eC=Z1(Q1);var Za=function(){var s=0,e=document.createElement("div");e.style.cssText="position:fixed;top:0;left:0;cursor:pointer;opacity:0.9;z-index:10000",e.addEventListener("click",function(g){g.preventDefault(),n(++s%e.children.length)},!1);function t(g){return e.appendChild(g.dom),g}function n(g){for(var v=0;v<e.children.length;v++)e.children[v].style.display=v===g?"block":"none";s=g}var r=(performance||Date).now(),a=r,c=0,u=t(new Za.Panel("FPS","#0ff","#002")),d=t(new Za.Panel("MS","#0f0","#020"));if(self.performance&&self.performance.memory)var p=t(new Za.Panel("MB","#f08","#201"));return n(0),{REVISION:16,dom:e,addPanel:t,showPanel:n,begin:function(){r=(performance||Date).now()},end:function(){c++;var g=(performance||Date).now();if(d.update(g-r,200),g>=a+1e3&&(u.update(c*1e3/(g-a),100),a=g,c=0,p)){var v=performance.memory;p.update(v.usedJSHeapSize/1048576,v.jsHeapSizeLimit/1048576)}return g},update:function(){r=this.end()},domElement:e,setMode:n}};Za.Panel=function(s,e,t){var n=1/0,r=0,a=Math.round,c=a(window.devicePixelRatio||1),u=80*c,d=48*c,p=3*c,g=2*c,v=3*c,x=15*c,E=74*c,w=30*c,C=document.createElement("canvas");C.width=u,C.height=d,C.style.cssText="width:80px;height:48px";var T=C.getContext("2d");return T.font="bold "+9*c+"px Helvetica,Arial,sans-serif",T.textBaseline="top",T.fillStyle=t,T.fillRect(0,0,u,d),T.fillStyle=e,T.fillText(s,p,g),T.fillRect(v,x,E,w),T.fillStyle=t,T.globalAlpha=.9,T.fillRect(v,x,E,w),{dom:C,update:function(M,k){n=Math.min(n,M),r=Math.max(r,M),T.fillStyle=t,T.globalAlpha=1,T.fillRect(0,0,u,x),T.fillStyle=e,T.fillText(a(M)+" "+s+" ("+a(n)+"-"+a(r)+")",p,g),T.drawImage(C,v+c,x,E-c,w,v,x,E-c,w),T.fillRect(v+E-c,x,c,w),T.fillStyle=t,T.globalAlpha=.9,T.fillRect(v+E-c,x,c,a((1-M/k)*w))}}};const tC=Za;document.getElementById("myForm");document.getElementById("csvFile");document.getElementById("startingPositionForm");document.getElementById("startingPositionCSVFile");const ys=document.getElementById("trialSelect");let Bc,Hn,Lf,Pf,cg,Df,If,Nf,nC=new tC;ys.style.display="none";function Mi(s){return eC.cloneDeep(s)}const Jg=[],Qg=[],e_=[],t_=[],n_=[],i_=[],r_=[],bh=[],js=[],s_=[],uh=[],iC=[],o_=[],Uf=[],a_=[];Bc=rotationDataString;let oo=Bc.split(`
`),jn=[],wh=oo[0].split(",");for(let s=1;s<oo.length;s++){let e=oo[s].split(","),t={};for(let n=0;n<e.length;n++)t[wh[n].trim()]=e[n].trim();jn.push(t)}let tl;const Of=[],Ff=[],Bf=[],Hf=[],zf=[],Gf=[],kf=[],Vf=[],Wf=[],Xf=[],qf=[],Yf=[],jf=[];for(let s=0;s<jn.length;s++)s>0&jn[s].NODE!=tl&&(Jg.push(Mi(Of)),Qg.push(Mi(Ff)),e_.push(Mi(Bf)),t_.push(Mi(Hf)),n_.push(Mi(zf)),i_.push(Mi(Gf)),r_.push(Mi(kf)),js.push(Mi(Vf)),bh.push(Mi(Wf)),s_.push(Mi(Xf)),uh.push(Mi(qf)),iC.push(Mi(Yf)),o_.push(Mi(jf)),Of.length=0,Ff.length=0,Bf.length=0,Hf.length=0,zf.length=0,Gf.length=0,kf.length=0,Vf.length=0,Wf.length=0,Xf.length=0,qf.length=0,Yf.length=0,jf.length=0),Of.push(jn[s].CURRENT_EULER_X),Ff.push(jn[s].CURRENT_EULER_Y),Bf.push(jn[s].CURRENT_EULER_Z),Hf.push(jn[s].QUARTERNION_X),zf.push(jn[s].QUARTERNION_Y),Gf.push(jn[s].QUARTERNION_Z),kf.push(jn[s].QUARTERNION_W),Vf.push(jn[s].OBJECT_NAME),Wf.push(jn[s].MS),Xf.push(jn[s].FRAME),qf.push(jn[s].NODE),Yf.push(jn[s].PRESENCE),jf.push(jn[s].COLOUR),tl=jn[s].NODE;for(let s=0;s<uh.length;s++){let e=document.createElement("option");e.value=s,e.innerHTML="Trial "+uh[s][0],ys.appendChild(e)}Hn=0;console.log(bh);Bc=startingPositionString;oo=Bc.split(`
`);let Ya=[];wh=oo[0].split(",");for(let s=1;s<oo.length;s++){let e=oo[s].split(","),t={};for(let n=0;n<e.length;n++)t[wh[n].trim()]=e[n].trim();Ya.push(t)}tl="";for(let s=0;s<Ya.length;s++)s>0&Ya[s].NODE!=tl&&(a_.push(Mi(Uf)),Uf.length=0),Uf.push(Ya[s]),tl=Ya[s].NODE;Hn=0;rC();function rC(){const s=new IR,e=new hi(10,window.innerWidth/window.innerHeight,.1,1e3);let t=0,n=0,r=0,a,c=0,u,d=o_[0][0];d==null&&(d="0xFFFFFF"),console.log(d);let p=document.createElement("div");p.setAttribute("class","textFont");let g=document.createElement("div");g.setAttribute("class","textFont");let v=document.createElement("div");v.setAttribute("class","textFont");let x=document.createElement("div");x.setAttribute("class","textFont");let E=document.createElement("button"),w=document.createElement("button"),C=document.createElement("button"),T=document.createElement("button"),M=document.createElement("div");M.setAttribute("id","divContainer"),E.innerHTML="Start Trial",E.setAttribute("class","submitButton"),E.setAttribute("id","divForm"),E.addEventListener("click",W),T.innerHTML="Go",T.style.position="fixed",T.style.left="0.5%",T.setAttribute("class","submitButton"),T.addEventListener("click",J),w.innerHTML="Start Trial",w.style.position="fixed",w.style.top="0.5%",w.style.left="0.5%",w.setAttribute("class","submitButton"),w.style.display="none",w.addEventListener("click",m),C.innerHTML="Restart Trial",C.style.position="fixed",C.style.top=p.offsetHeight+g.offsetHeight+"px",C.style.left="0.5%",C.addEventListener("click",B),C.setAttribute("class","submitButton"),document.body.appendChild(M),M.appendChild(E),document.body.appendChild(w),document.body.appendChild(C),document.body.appendChild(T),T.style.display="none",C.style.display="none",ys.style.left="0.5%";let k=0;window.addEventListener("resize",O);function O(){e.aspect=window.innerWidth/window.innerHeight,e.updateProjectionMatrix(),xe.setSize(window.innerWidth,window.innerHeight)}function B(){C.style.display="none",p.style.display="initial",g.style.display="initial",w.style.display="initial",w.style.top=p.offsetHeight+g.offsetHeight+"px",w.innerHTML="Pause Trial",p.innerHTML="Trial running...",c=0,k=0,lt(),Ct()}function W(){M.style.display="none",p.style.display="initial",g.style.display="initial",w.style.display="initial",w.style.top=p.offsetHeight+g.offsetHeight+"px",ys.style.position="fixed",ys.style.display="initial",x.style.display="initial",T.style.display="initial",v.style.display="initial",v.style.top=p.offsetHeight+g.offsetHeight+w.offsetHeight+15+"px",x.style.top=p.offsetHeight+g.offsetHeight+w.offsetHeight+v.offsetHeight*2+"px",ys.style.top=p.offsetHeight+g.offsetHeight+w.offsetHeight+v.offsetHeight*2+x.offsetHeight+"px",T.style.top=p.offsetHeight+g.offsetHeight+w.offsetHeight+v.offsetHeight*2+x.offsetHeight+"px",T.style.left=ys.offsetWidth+15+"px",p.innerHTML="Trial running...",w.innerHTML="Pause Trial",Ct()}function J(){me(),Hn=ys.value,B()}function m(){k++,k==1?(w.innerHTML="Resume Trial",p.innerHTML="Trial paused...",me()):k==2&&(w.style.top=p.offsetHeight+g.offsetHeight+"px",w.innerHTML="Pause Trial",p.innerHTML="Trial running...",N(),k=0)}function me(){cancelAnimationFrame(Nf)}function N(){Ct()}p.innerHTML="Start of trial",p.style.fontSize="25px",p.style.lineHeight=1.6+"em",p.style.position="fixed",p.style.top="0px",p.style.left="0.5%",document.body.appendChild(p),v.innerHTML="Present Trial",v.style.fontSize="25px",v.style.lineHeight=1.6+"em",v.style.position="fixed",v.style.left="0.5%",v.style.display="none",document.body.appendChild(v),x.innerHTML="Select a trial to replay",x.style.fontSize="25px",x.style.lineHeight=1.6+"em",x.style.position="fixed",x.style.top="0px",x.style.left="0.5%",x.style.display="none",document.body.appendChild(x),g.innerHTML="0:00",g.style.fontSize="25px",g.style.lineHeight=1.6+"em",g.style.position="fixed",g.style.top=p.offsetHeight+"px",g.style.left="0.5%",document.body.appendChild(g),p.style.display="none",g.style.display="none";let X,Ee,Re,ye,te;const xe=new zg;xe.setSize(window.innerWidth,window.innerHeight),document.body.appendChild(xe.domElement),s.background=new Rt(15790320);const we=new a1(16777215,1),ge=new Kg(16777215,5);ge.position.set(0,0,15),s.add(ge),new jg(16777147,5).position.set(0,0,15),s.add(we),e.position.z=110,e.lookAt(0,0,0);const Ce=new qg,be=new v1(Ce);let ne=["L_CUBE_TOP.glb","L_CUBE_TOP.glb","L_CUBE_TOP.glb","L_CUBE_TOP.glb","T_CUBE_TOP.glb"],pe=["DISTRACTOR_1","DISTRACTOR_2","DISTRACTOR_3","DISTRACTOR_4","TARGET_1"];Ce.onLoad=function(){lt(),turnOffLoadingScreen()};for(let De=0;De<ne.length;De++)be.load(ne[De],function(Ge){let ot=Ge.scene;ot.traverse(oe=>{oe.isMesh&&(oe.material.color.setHex(d),oe.material.roughness=.8,ot=oe)}),De==0&&(X=ot,X.name="DISTRACTOR_1"),De==1&&(Ee=ot,Ee.name="DISTRACTOR_2"),De==2&&(Re=ot,Re.name="DISTRACTOR_3"),De==3&&(ye=ot,ye.name="DISTRACTOR_4"),De==4&&(te=ot,te.name="TARGET_1")},function(Ge){console.log(Ge.loaded/Ge.total*100+"% loaded")},function(Ge){console.log("An error happened")});let Ve;function Ke(De){Lf=window.performance.now(),Pf=1e3/De,Ye()}function Ye(){Nf=window.requestAnimationFrame(Ye),Df=window.performance.now(),If=Math.round(Df-Lf),!(If<Pf)&&(cg=If%Pf,Lf=Df-cg,dt(),xe.render(s,e),nC.update())}function lt(){console.log("setting starting positions"),js[Hn].includes("TARGET_1")?v.innerHTML="Present Trial":v.innerHTML="Absent Trial";for(let Ge=0;Ge<pe.length;Ge++){let ot=s.getObjectByName(pe[Ge]);ot&&s.remove(ot)}let De=a_[Hn];for(let Ge=0;Ge<De.length;Ge++)De[Ge].OBJECT_NAME=="DISTRACTOR_1"&&(X.position.set(De[Ge].X_POS,De[Ge].Y_POS,De[Ge].Z_POS),X.rotation.set(De[Ge].EULER_X,De[Ge].EULER_Y,De[Ge].EULER_Z),s.add(X)),De[Ge].OBJECT_NAME=="DISTRACTOR_2"&&(Ee.position.set(De[Ge].X_POS,De[Ge].Y_POS,De[Ge].Z_POS),Ee.rotation.set(De[Ge].EULER_X,De[Ge].EULER_Y,De[Ge].EULER_Z),s.add(Ee)),De[Ge].OBJECT_NAME=="DISTRACTOR_3"&&(Re.position.set(De[Ge].X_POS,De[Ge].Y_POS,De[Ge].Z_POS),Re.rotation.set(De[Ge].EULER_X,De[Ge].EULER_Y,De[Ge].EULER_Z),s.add(Re)),De[Ge].OBJECT_NAME=="DISTRACTOR_4"&&(ye.position.set(De[Ge].X_POS,De[Ge].Y_POS,De[Ge].Z_POS),ye.rotation.set(De[Ge].EULER_X,De[Ge].EULER_Y,De[Ge].EULER_Z),s.add(ye)),De[Ge].OBJECT_NAME=="TARGET_1"&&(te.position.set(De[Ge].X_POS,De[Ge].Y_POS,De[Ge].Z_POS),te.rotation.set(De[Ge].EULER_X,De[Ge].EULER_Y,De[Ge].EULER_Z),s.add(te))}function Ct(){Ke(50)}function dt(){js[Hn][c]=="DISTRACTOR_1"?a=X:js[Hn][c]=="DISTRACTOR_2"?a=Ee:js[Hn][c]=="DISTRACTOR_3"?a=Re:js[Hn][c]=="DISTRACTOR_4"?a=ye:js[Hn][c]=="TARGET_1"&&(a=te),t=Jg[Hn][c],n=Qg[Hn][c],r=e_[Hn][c],t_[Hn][c],n_[Hn][c],i_[Hn][c],r_[Hn][c],u=bh[Hn][c],c++,a.rotation.set(t,n,r);let De=new Date(null);De.setMilliseconds(u),Ve=De.toISOString().slice(11,22),g.innerHTML=Ve,c==s_[Hn].length&&(cancelAnimationFrame(Nf),p.innerHTML="End of trial.",w.style.display="none",C.style.display="initial",C.style.top=p.offsetHeight+g.offsetHeight+"px")}}
