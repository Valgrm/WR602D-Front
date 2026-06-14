(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const r of s.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&n(r)}).observe(document,{childList:!0,subtree:!0});function t(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(i){if(i.ep)return;i.ep=!0;const s=t(i);fetch(i.href,s)}})();/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const na="174",Gc=0,Aa=1,Wc=2,tc=1,nc=2,On=3,Gn=0,Yt=1,fn=2,ni=0,Fi=1,Ra=2,Ca=3,Pa=4,Xc=5,mi=100,qc=101,Yc=102,jc=103,Kc=104,Zc=200,$c=201,Jc=202,Qc=203,uo=204,fo=205,eh=206,th=207,nh=208,ih=209,sh=210,rh=211,oh=212,ah=213,lh=214,po=0,mo=1,vo=2,ki=3,go=4,_o=5,xo=6,yo=7,ic=0,ch=1,hh=2,ii=0,uh=1,dh=2,sc=3,fh=4,ph=5,mh=6,vh=7,La="attached",gh="detached",rc=300,Hi=301,Gi=302,Mo=303,So=304,mr=306,Wi=1e3,ei=1001,hr=1002,Qt=1003,oc=1004,fs=1005,hn=1006,ir=1007,Vn=1008,Wn=1009,ac=1010,lc=1011,xs=1012,ia=1013,gi=1014,yn=1015,ws=1016,sa=1017,ra=1018,Xi=1020,cc=35902,hc=1021,uc=1022,pn=1023,dc=1024,fc=1025,Bi=1026,qi=1027,oa=1028,aa=1029,pc=1030,la=1031,ca=1033,sr=33776,rr=33777,or=33778,ar=33779,Eo=35840,wo=35841,bo=35842,To=35843,Ao=36196,Ro=37492,Co=37496,Po=37808,Lo=37809,Io=37810,No=37811,Do=37812,Uo=37813,Fo=37814,Bo=37815,Oo=37816,zo=37817,Vo=37818,ko=37819,Ho=37820,Go=37821,lr=36492,Wo=36494,Xo=36495,mc=36283,qo=36284,Yo=36285,jo=36286,ys=2300,Ms=2301,Er=2302,Ia=2400,Na=2401,Da=2402,_h=2500,xh=0,vc=1,Ko=2,yh=3200,Mh=3201,ha=0,Sh=1,Qn="",Vt="srgb",tn="srgb-linear",ur="linear",Rt="srgb",yi=7680,Ua=519,Eh=512,wh=513,bh=514,gc=515,Th=516,Ah=517,Rh=518,Ch=519,Zo=35044,Fa="300 es",kn=2e3,dr=2001;class Ji{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){const n=this._listeners;return n===void 0?!1:n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){const n=this._listeners;if(n===void 0)return;const i=n[e];if(i!==void 0){const s=i.indexOf(t);s!==-1&&i.splice(s,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const n=t[e.type];if(n!==void 0){e.target=this;const i=n.slice(0);for(let s=0,r=i.length;s<r;s++)i[s].call(this,e);e.target=null}}}const Xt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Ba=1234567;const ms=Math.PI/180,Yi=180/Math.PI;function Sn(){const o=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Xt[o&255]+Xt[o>>8&255]+Xt[o>>16&255]+Xt[o>>24&255]+"-"+Xt[e&255]+Xt[e>>8&255]+"-"+Xt[e>>16&15|64]+Xt[e>>24&255]+"-"+Xt[t&63|128]+Xt[t>>8&255]+"-"+Xt[t>>16&255]+Xt[t>>24&255]+Xt[n&255]+Xt[n>>8&255]+Xt[n>>16&255]+Xt[n>>24&255]).toLowerCase()}function yt(o,e,t){return Math.max(e,Math.min(t,o))}function ua(o,e){return(o%e+e)%e}function Ph(o,e,t,n,i){return n+(o-e)*(i-n)/(t-e)}function Lh(o,e,t){return o!==e?(t-o)/(e-o):0}function vs(o,e,t){return(1-t)*o+t*e}function Ih(o,e,t,n){return vs(o,e,1-Math.exp(-t*n))}function Nh(o,e=1){return e-Math.abs(ua(o,e*2)-e)}function Dh(o,e,t){return o<=e?0:o>=t?1:(o=(o-e)/(t-e),o*o*(3-2*o))}function Uh(o,e,t){return o<=e?0:o>=t?1:(o=(o-e)/(t-e),o*o*o*(o*(o*6-15)+10))}function Fh(o,e){return o+Math.floor(Math.random()*(e-o+1))}function Bh(o,e){return o+Math.random()*(e-o)}function Oh(o){return o*(.5-Math.random())}function zh(o){o!==void 0&&(Ba=o);let e=Ba+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function Vh(o){return o*ms}function kh(o){return o*Yi}function Hh(o){return(o&o-1)===0&&o!==0}function Gh(o){return Math.pow(2,Math.ceil(Math.log(o)/Math.LN2))}function Wh(o){return Math.pow(2,Math.floor(Math.log(o)/Math.LN2))}function Xh(o,e,t,n,i){const s=Math.cos,r=Math.sin,a=s(t/2),l=r(t/2),h=s((e+n)/2),u=r((e+n)/2),c=s((e-n)/2),d=r((e-n)/2),f=s((n-e)/2),m=r((n-e)/2);switch(i){case"XYX":o.set(a*u,l*c,l*d,a*h);break;case"YZY":o.set(l*d,a*u,l*c,a*h);break;case"ZXZ":o.set(l*c,l*d,a*u,a*h);break;case"XZX":o.set(a*u,l*m,l*f,a*h);break;case"YXY":o.set(l*f,a*u,l*m,a*h);break;case"ZYZ":o.set(l*m,l*f,a*u,a*h);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+i)}}function _n(o,e){switch(e.constructor){case Float32Array:return o;case Uint32Array:return o/4294967295;case Uint16Array:return o/65535;case Uint8Array:return o/255;case Int32Array:return Math.max(o/2147483647,-1);case Int16Array:return Math.max(o/32767,-1);case Int8Array:return Math.max(o/127,-1);default:throw new Error("Invalid component type.")}}function Tt(o,e){switch(e.constructor){case Float32Array:return o;case Uint32Array:return Math.round(o*4294967295);case Uint16Array:return Math.round(o*65535);case Uint8Array:return Math.round(o*255);case Int32Array:return Math.round(o*2147483647);case Int16Array:return Math.round(o*32767);case Int8Array:return Math.round(o*127);default:throw new Error("Invalid component type.")}}const qh={DEG2RAD:ms,RAD2DEG:Yi,generateUUID:Sn,clamp:yt,euclideanModulo:ua,mapLinear:Ph,inverseLerp:Lh,lerp:vs,damp:Ih,pingpong:Nh,smoothstep:Dh,smootherstep:Uh,randInt:Fh,randFloat:Bh,randFloatSpread:Oh,seededRandom:zh,degToRad:Vh,radToDeg:kh,isPowerOfTwo:Hh,ceilPowerOfTwo:Gh,floorPowerOfTwo:Wh,setQuaternionFromProperEuler:Xh,normalize:Tt,denormalize:_n};class ft{constructor(e=0,t=0){ft.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6],this.y=i[1]*t+i[4]*n+i[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=yt(this.x,e.x,t.x),this.y=yt(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=yt(this.x,e,t),this.y=yt(this.y,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(yt(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(yt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),i=Math.sin(t),s=this.x-e.x,r=this.y-e.y;return this.x=s*n-r*i+e.x,this.y=s*i+r*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class dt{constructor(e,t,n,i,s,r,a,l,h){dt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,i,s,r,a,l,h)}set(e,t,n,i,s,r,a,l,h){const u=this.elements;return u[0]=e,u[1]=i,u[2]=a,u[3]=t,u[4]=s,u[5]=l,u[6]=n,u[7]=r,u[8]=h,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,s=this.elements,r=n[0],a=n[3],l=n[6],h=n[1],u=n[4],c=n[7],d=n[2],f=n[5],m=n[8],g=i[0],v=i[3],p=i[6],x=i[1],y=i[4],_=i[7],T=i[2],C=i[5],I=i[8];return s[0]=r*g+a*x+l*T,s[3]=r*v+a*y+l*C,s[6]=r*p+a*_+l*I,s[1]=h*g+u*x+c*T,s[4]=h*v+u*y+c*C,s[7]=h*p+u*_+c*I,s[2]=d*g+f*x+m*T,s[5]=d*v+f*y+m*C,s[8]=d*p+f*_+m*I,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],r=e[4],a=e[5],l=e[6],h=e[7],u=e[8];return t*r*u-t*a*h-n*s*u+n*a*l+i*s*h-i*r*l}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],r=e[4],a=e[5],l=e[6],h=e[7],u=e[8],c=u*r-a*h,d=a*l-u*s,f=h*s-r*l,m=t*c+n*d+i*f;if(m===0)return this.set(0,0,0,0,0,0,0,0,0);const g=1/m;return e[0]=c*g,e[1]=(i*h-u*n)*g,e[2]=(a*n-i*r)*g,e[3]=d*g,e[4]=(u*t-i*l)*g,e[5]=(i*s-a*t)*g,e[6]=f*g,e[7]=(n*l-h*t)*g,e[8]=(r*t-n*s)*g,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,i,s,r,a){const l=Math.cos(s),h=Math.sin(s);return this.set(n*l,n*h,-n*(l*r+h*a)+r+e,-i*h,i*l,-i*(-h*r+l*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(wr.makeScale(e,t)),this}rotate(e){return this.premultiply(wr.makeRotation(-e)),this}translate(e,t){return this.premultiply(wr.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<9;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const wr=new dt;function _c(o){for(let e=o.length-1;e>=0;--e)if(o[e]>=65535)return!0;return!1}function Ss(o){return document.createElementNS("http://www.w3.org/1999/xhtml",o)}function Yh(){const o=Ss("canvas");return o.style.display="block",o}const Oa={};function di(o){o in Oa||(Oa[o]=!0,console.warn(o))}function jh(o,e,t){return new Promise(function(n,i){function s(){switch(o.clientWaitSync(e,o.SYNC_FLUSH_COMMANDS_BIT,0)){case o.WAIT_FAILED:i();break;case o.TIMEOUT_EXPIRED:setTimeout(s,t);break;default:n()}}setTimeout(s,t)})}function Kh(o){const e=o.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function Zh(o){const e=o.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}const za=new dt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Va=new dt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function $h(){const o={enabled:!0,workingColorSpace:tn,spaces:{},convert:function(i,s,r){return this.enabled===!1||s===r||!s||!r||(this.spaces[s].transfer===Rt&&(i.r=Hn(i.r),i.g=Hn(i.g),i.b=Hn(i.b)),this.spaces[s].primaries!==this.spaces[r].primaries&&(i.applyMatrix3(this.spaces[s].toXYZ),i.applyMatrix3(this.spaces[r].fromXYZ)),this.spaces[r].transfer===Rt&&(i.r=Oi(i.r),i.g=Oi(i.g),i.b=Oi(i.b))),i},fromWorkingColorSpace:function(i,s){return this.convert(i,this.workingColorSpace,s)},toWorkingColorSpace:function(i,s){return this.convert(i,s,this.workingColorSpace)},getPrimaries:function(i){return this.spaces[i].primaries},getTransfer:function(i){return i===Qn?ur:this.spaces[i].transfer},getLuminanceCoefficients:function(i,s=this.workingColorSpace){return i.fromArray(this.spaces[s].luminanceCoefficients)},define:function(i){Object.assign(this.spaces,i)},_getMatrix:function(i,s,r){return i.copy(this.spaces[s].toXYZ).multiply(this.spaces[r].fromXYZ)},_getDrawingBufferColorSpace:function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return o.define({[tn]:{primaries:e,whitePoint:n,transfer:ur,toXYZ:za,fromXYZ:Va,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:Vt},outputColorSpaceConfig:{drawingBufferColorSpace:Vt}},[Vt]:{primaries:e,whitePoint:n,transfer:Rt,toXYZ:za,fromXYZ:Va,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:Vt}}}),o}const Et=$h();function Hn(o){return o<.04045?o*.0773993808:Math.pow(o*.9478672986+.0521327014,2.4)}function Oi(o){return o<.0031308?o*12.92:1.055*Math.pow(o,.41666)-.055}let Mi;class Jh{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{Mi===void 0&&(Mi=Ss("canvas")),Mi.width=e.width,Mi.height=e.height;const n=Mi.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=Mi}return t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Ss("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const i=n.getImageData(0,0,e.width,e.height),s=i.data;for(let r=0;r<s.length;r++)s[r]=Hn(s[r]/255)*255;return n.putImageData(i,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(Hn(t[n]/255)*255):t[n]=Hn(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let Qh=0;class da{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Qh++}),this.uuid=Sn(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let s;if(Array.isArray(i)){s=[];for(let r=0,a=i.length;r<a;r++)i[r].isDataTexture?s.push(br(i[r].image)):s.push(br(i[r]))}else s=br(i);n.url=s}return t||(e.images[this.uuid]=n),n}}function br(o){return typeof HTMLImageElement<"u"&&o instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&o instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&o instanceof ImageBitmap?Jh.getDataURL(o):o.data?{data:Array.from(o.data),width:o.width,height:o.height,type:o.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let eu=0;class Wt extends Ji{constructor(e=Wt.DEFAULT_IMAGE,t=Wt.DEFAULT_MAPPING,n=ei,i=ei,s=hn,r=Vn,a=pn,l=Wn,h=Wt.DEFAULT_ANISOTROPY,u=Qn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:eu++}),this.uuid=Sn(),this.name="",this.source=new da(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=s,this.minFilter=r,this.anisotropy=h,this.format=a,this.internalFormat=null,this.type=l,this.offset=new ft(0,0),this.repeat=new ft(1,1),this.center=new ft(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new dt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==rc)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Wi:e.x=e.x-Math.floor(e.x);break;case ei:e.x=e.x<0?0:1;break;case hr:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Wi:e.y=e.y-Math.floor(e.y);break;case ei:e.y=e.y<0?0:1;break;case hr:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Wt.DEFAULT_IMAGE=null;Wt.DEFAULT_MAPPING=rc;Wt.DEFAULT_ANISOTROPY=1;class wt{constructor(e=0,t=0,n=0,i=1){wt.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=i}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,i){return this.x=e,this.y=t,this.z=n,this.w=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,s=this.w,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*i+r[12]*s,this.y=r[1]*t+r[5]*n+r[9]*i+r[13]*s,this.z=r[2]*t+r[6]*n+r[10]*i+r[14]*s,this.w=r[3]*t+r[7]*n+r[11]*i+r[15]*s,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,i,s;const l=e.elements,h=l[0],u=l[4],c=l[8],d=l[1],f=l[5],m=l[9],g=l[2],v=l[6],p=l[10];if(Math.abs(u-d)<.01&&Math.abs(c-g)<.01&&Math.abs(m-v)<.01){if(Math.abs(u+d)<.1&&Math.abs(c+g)<.1&&Math.abs(m+v)<.1&&Math.abs(h+f+p-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const y=(h+1)/2,_=(f+1)/2,T=(p+1)/2,C=(u+d)/4,I=(c+g)/4,P=(m+v)/4;return y>_&&y>T?y<.01?(n=0,i=.707106781,s=.707106781):(n=Math.sqrt(y),i=C/n,s=I/n):_>T?_<.01?(n=.707106781,i=0,s=.707106781):(i=Math.sqrt(_),n=C/i,s=P/i):T<.01?(n=.707106781,i=.707106781,s=0):(s=Math.sqrt(T),n=I/s,i=P/s),this.set(n,i,s,t),this}let x=Math.sqrt((v-m)*(v-m)+(c-g)*(c-g)+(d-u)*(d-u));return Math.abs(x)<.001&&(x=1),this.x=(v-m)/x,this.y=(c-g)/x,this.z=(d-u)/x,this.w=Math.acos((h+f+p-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=yt(this.x,e.x,t.x),this.y=yt(this.y,e.y,t.y),this.z=yt(this.z,e.z,t.z),this.w=yt(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=yt(this.x,e,t),this.y=yt(this.y,e,t),this.z=yt(this.z,e,t),this.w=yt(this.w,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(yt(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class tu extends Ji{constructor(e=1,t=1,n={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new wt(0,0,e,t),this.scissorTest=!1,this.viewport=new wt(0,0,e,t);const i={width:e,height:t,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:hn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);const s=new Wt(i,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);s.flipY=!1,s.generateMipmaps=n.generateMipmaps,s.internalFormat=n.internalFormat,this.textures=[];const r=n.count;for(let a=0;a<r;a++)this.textures[a]=s.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let i=0,s=this.textures.length;i<s;i++)this.textures[i].image.width=e,this.textures[i].image.height=t,this.textures[i].image.depth=n;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const i=Object.assign({},e.textures[t].image);this.textures[t].source=new da(i)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class _i extends tu{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class xc extends Wt{constructor(e=null,t=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=Qt,this.minFilter=Qt,this.wrapR=ei,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class nu extends Wt{constructor(e=null,t=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=Qt,this.minFilter=Qt,this.wrapR=ei,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Tn{constructor(e=0,t=0,n=0,i=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=i}static slerpFlat(e,t,n,i,s,r,a){let l=n[i+0],h=n[i+1],u=n[i+2],c=n[i+3];const d=s[r+0],f=s[r+1],m=s[r+2],g=s[r+3];if(a===0){e[t+0]=l,e[t+1]=h,e[t+2]=u,e[t+3]=c;return}if(a===1){e[t+0]=d,e[t+1]=f,e[t+2]=m,e[t+3]=g;return}if(c!==g||l!==d||h!==f||u!==m){let v=1-a;const p=l*d+h*f+u*m+c*g,x=p>=0?1:-1,y=1-p*p;if(y>Number.EPSILON){const T=Math.sqrt(y),C=Math.atan2(T,p*x);v=Math.sin(v*C)/T,a=Math.sin(a*C)/T}const _=a*x;if(l=l*v+d*_,h=h*v+f*_,u=u*v+m*_,c=c*v+g*_,v===1-a){const T=1/Math.sqrt(l*l+h*h+u*u+c*c);l*=T,h*=T,u*=T,c*=T}}e[t]=l,e[t+1]=h,e[t+2]=u,e[t+3]=c}static multiplyQuaternionsFlat(e,t,n,i,s,r){const a=n[i],l=n[i+1],h=n[i+2],u=n[i+3],c=s[r],d=s[r+1],f=s[r+2],m=s[r+3];return e[t]=a*m+u*c+l*f-h*d,e[t+1]=l*m+u*d+h*c-a*f,e[t+2]=h*m+u*f+a*d-l*c,e[t+3]=u*m-a*c-l*d-h*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,i){return this._x=e,this._y=t,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const n=e._x,i=e._y,s=e._z,r=e._order,a=Math.cos,l=Math.sin,h=a(n/2),u=a(i/2),c=a(s/2),d=l(n/2),f=l(i/2),m=l(s/2);switch(r){case"XYZ":this._x=d*u*c+h*f*m,this._y=h*f*c-d*u*m,this._z=h*u*m+d*f*c,this._w=h*u*c-d*f*m;break;case"YXZ":this._x=d*u*c+h*f*m,this._y=h*f*c-d*u*m,this._z=h*u*m-d*f*c,this._w=h*u*c+d*f*m;break;case"ZXY":this._x=d*u*c-h*f*m,this._y=h*f*c+d*u*m,this._z=h*u*m+d*f*c,this._w=h*u*c-d*f*m;break;case"ZYX":this._x=d*u*c-h*f*m,this._y=h*f*c+d*u*m,this._z=h*u*m-d*f*c,this._w=h*u*c+d*f*m;break;case"YZX":this._x=d*u*c+h*f*m,this._y=h*f*c+d*u*m,this._z=h*u*m-d*f*c,this._w=h*u*c-d*f*m;break;case"XZY":this._x=d*u*c-h*f*m,this._y=h*f*c-d*u*m,this._z=h*u*m+d*f*c,this._w=h*u*c+d*f*m;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+r)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,i=Math.sin(n);return this._x=e.x*i,this._y=e.y*i,this._z=e.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],i=t[4],s=t[8],r=t[1],a=t[5],l=t[9],h=t[2],u=t[6],c=t[10],d=n+a+c;if(d>0){const f=.5/Math.sqrt(d+1);this._w=.25/f,this._x=(u-l)*f,this._y=(s-h)*f,this._z=(r-i)*f}else if(n>a&&n>c){const f=2*Math.sqrt(1+n-a-c);this._w=(u-l)/f,this._x=.25*f,this._y=(i+r)/f,this._z=(s+h)/f}else if(a>c){const f=2*Math.sqrt(1+a-n-c);this._w=(s-h)/f,this._x=(i+r)/f,this._y=.25*f,this._z=(l+u)/f}else{const f=2*Math.sqrt(1+c-n-a);this._w=(r-i)/f,this._x=(s+h)/f,this._y=(l+u)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(yt(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const i=Math.min(1,t/n);return this.slerp(e,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,i=e._y,s=e._z,r=e._w,a=t._x,l=t._y,h=t._z,u=t._w;return this._x=n*u+r*a+i*h-s*l,this._y=i*u+r*l+s*a-n*h,this._z=s*u+r*h+n*l-i*a,this._w=r*u-n*a-i*l-s*h,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,i=this._y,s=this._z,r=this._w;let a=r*e._w+n*e._x+i*e._y+s*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=r,this._x=n,this._y=i,this._z=s,this;const l=1-a*a;if(l<=Number.EPSILON){const f=1-t;return this._w=f*r+t*this._w,this._x=f*n+t*this._x,this._y=f*i+t*this._y,this._z=f*s+t*this._z,this.normalize(),this}const h=Math.sqrt(l),u=Math.atan2(h,a),c=Math.sin((1-t)*u)/h,d=Math.sin(t*u)/h;return this._w=r*c+this._w*d,this._x=n*c+this._x*d,this._y=i*c+this._y*d,this._z=s*c+this._z*d,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),i=Math.sqrt(1-n),s=Math.sqrt(n);return this.set(i*Math.sin(e),i*Math.cos(e),s*Math.sin(t),s*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class H{constructor(e=0,t=0,n=0){H.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(ka.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(ka.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,i=this.z,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6]*i,this.y=s[1]*t+s[4]*n+s[7]*i,this.z=s[2]*t+s[5]*n+s[8]*i,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,s=e.elements,r=1/(s[3]*t+s[7]*n+s[11]*i+s[15]);return this.x=(s[0]*t+s[4]*n+s[8]*i+s[12])*r,this.y=(s[1]*t+s[5]*n+s[9]*i+s[13])*r,this.z=(s[2]*t+s[6]*n+s[10]*i+s[14])*r,this}applyQuaternion(e){const t=this.x,n=this.y,i=this.z,s=e.x,r=e.y,a=e.z,l=e.w,h=2*(r*i-a*n),u=2*(a*t-s*i),c=2*(s*n-r*t);return this.x=t+l*h+r*c-a*u,this.y=n+l*u+a*h-s*c,this.z=i+l*c+s*u-r*h,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,i=this.z,s=e.elements;return this.x=s[0]*t+s[4]*n+s[8]*i,this.y=s[1]*t+s[5]*n+s[9]*i,this.z=s[2]*t+s[6]*n+s[10]*i,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=yt(this.x,e.x,t.x),this.y=yt(this.y,e.y,t.y),this.z=yt(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=yt(this.x,e,t),this.y=yt(this.y,e,t),this.z=yt(this.z,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(yt(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,i=e.y,s=e.z,r=t.x,a=t.y,l=t.z;return this.x=i*l-s*a,this.y=s*r-n*l,this.z=n*a-i*r,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Tr.copy(this).projectOnVector(e),this.sub(Tr)}reflect(e){return this.sub(Tr.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(yt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,i=this.z-e.z;return t*t+n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const i=Math.sin(t)*e;return this.x=i*Math.sin(n),this.y=Math.cos(t)*e,this.z=i*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),i=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=i,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Tr=new H,ka=new Tn;class An{constructor(e=new H(1/0,1/0,1/0),t=new H(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(mn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(mn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=mn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const s=n.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let r=0,a=s.count;r<a;r++)e.isMesh===!0?e.getVertexPosition(r,mn):mn.fromBufferAttribute(s,r),mn.applyMatrix4(e.matrixWorld),this.expandByPoint(mn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),As.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),As.copy(n.boundingBox)),As.applyMatrix4(e.matrixWorld),this.union(As)}const i=e.children;for(let s=0,r=i.length;s<r;s++)this.expandByObject(i[s],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,mn),mn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(is),Rs.subVectors(this.max,is),Si.subVectors(e.a,is),Ei.subVectors(e.b,is),wi.subVectors(e.c,is),qn.subVectors(Ei,Si),Yn.subVectors(wi,Ei),ri.subVectors(Si,wi);let t=[0,-qn.z,qn.y,0,-Yn.z,Yn.y,0,-ri.z,ri.y,qn.z,0,-qn.x,Yn.z,0,-Yn.x,ri.z,0,-ri.x,-qn.y,qn.x,0,-Yn.y,Yn.x,0,-ri.y,ri.x,0];return!Ar(t,Si,Ei,wi,Rs)||(t=[1,0,0,0,1,0,0,0,1],!Ar(t,Si,Ei,wi,Rs))?!1:(Cs.crossVectors(qn,Yn),t=[Cs.x,Cs.y,Cs.z],Ar(t,Si,Ei,wi,Rs))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,mn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(mn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Ln[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Ln[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Ln[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Ln[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Ln[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Ln[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Ln[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Ln[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Ln),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const Ln=[new H,new H,new H,new H,new H,new H,new H,new H],mn=new H,As=new An,Si=new H,Ei=new H,wi=new H,qn=new H,Yn=new H,ri=new H,is=new H,Rs=new H,Cs=new H,oi=new H;function Ar(o,e,t,n,i){for(let s=0,r=o.length-3;s<=r;s+=3){oi.fromArray(o,s);const a=i.x*Math.abs(oi.x)+i.y*Math.abs(oi.y)+i.z*Math.abs(oi.z),l=e.dot(oi),h=t.dot(oi),u=n.dot(oi);if(Math.max(-Math.max(l,h,u),Math.min(l,h,u))>a)return!1}return!0}const iu=new An,ss=new H,Rr=new H;class Rn{constructor(e=new H,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):iu.setFromPoints(e).getCenter(n);let i=0;for(let s=0,r=e.length;s<r;s++)i=Math.max(i,n.distanceToSquared(e[s]));return this.radius=Math.sqrt(i),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;ss.subVectors(e,this.center);const t=ss.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),i=(n-this.radius)*.5;this.center.addScaledVector(ss,i/n),this.radius+=i}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Rr.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(ss.copy(e.center).add(Rr)),this.expandByPoint(ss.copy(e.center).sub(Rr))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const In=new H,Cr=new H,Ps=new H,jn=new H,Pr=new H,Ls=new H,Lr=new H;class vr{constructor(e=new H,t=new H(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,In)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=In.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(In.copy(this.origin).addScaledVector(this.direction,t),In.distanceToSquared(e))}distanceSqToSegment(e,t,n,i){Cr.copy(e).add(t).multiplyScalar(.5),Ps.copy(t).sub(e).normalize(),jn.copy(this.origin).sub(Cr);const s=e.distanceTo(t)*.5,r=-this.direction.dot(Ps),a=jn.dot(this.direction),l=-jn.dot(Ps),h=jn.lengthSq(),u=Math.abs(1-r*r);let c,d,f,m;if(u>0)if(c=r*l-a,d=r*a-l,m=s*u,c>=0)if(d>=-m)if(d<=m){const g=1/u;c*=g,d*=g,f=c*(c+r*d+2*a)+d*(r*c+d+2*l)+h}else d=s,c=Math.max(0,-(r*d+a)),f=-c*c+d*(d+2*l)+h;else d=-s,c=Math.max(0,-(r*d+a)),f=-c*c+d*(d+2*l)+h;else d<=-m?(c=Math.max(0,-(-r*s+a)),d=c>0?-s:Math.min(Math.max(-s,-l),s),f=-c*c+d*(d+2*l)+h):d<=m?(c=0,d=Math.min(Math.max(-s,-l),s),f=d*(d+2*l)+h):(c=Math.max(0,-(r*s+a)),d=c>0?s:Math.min(Math.max(-s,-l),s),f=-c*c+d*(d+2*l)+h);else d=r>0?-s:s,c=Math.max(0,-(r*d+a)),f=-c*c+d*(d+2*l)+h;return n&&n.copy(this.origin).addScaledVector(this.direction,c),i&&i.copy(Cr).addScaledVector(Ps,d),f}intersectSphere(e,t){In.subVectors(e.center,this.origin);const n=In.dot(this.direction),i=In.dot(In)-n*n,s=e.radius*e.radius;if(i>s)return null;const r=Math.sqrt(s-i),a=n-r,l=n+r;return l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,i,s,r,a,l;const h=1/this.direction.x,u=1/this.direction.y,c=1/this.direction.z,d=this.origin;return h>=0?(n=(e.min.x-d.x)*h,i=(e.max.x-d.x)*h):(n=(e.max.x-d.x)*h,i=(e.min.x-d.x)*h),u>=0?(s=(e.min.y-d.y)*u,r=(e.max.y-d.y)*u):(s=(e.max.y-d.y)*u,r=(e.min.y-d.y)*u),n>r||s>i||((s>n||isNaN(n))&&(n=s),(r<i||isNaN(i))&&(i=r),c>=0?(a=(e.min.z-d.z)*c,l=(e.max.z-d.z)*c):(a=(e.max.z-d.z)*c,l=(e.min.z-d.z)*c),n>l||a>i)||((a>n||n!==n)&&(n=a),(l<i||i!==i)&&(i=l),i<0)?null:this.at(n>=0?n:i,t)}intersectsBox(e){return this.intersectBox(e,In)!==null}intersectTriangle(e,t,n,i,s){Pr.subVectors(t,e),Ls.subVectors(n,e),Lr.crossVectors(Pr,Ls);let r=this.direction.dot(Lr),a;if(r>0){if(i)return null;a=1}else if(r<0)a=-1,r=-r;else return null;jn.subVectors(this.origin,e);const l=a*this.direction.dot(Ls.crossVectors(jn,Ls));if(l<0)return null;const h=a*this.direction.dot(Pr.cross(jn));if(h<0||l+h>r)return null;const u=-a*jn.dot(Lr);return u<0?null:this.at(u/r,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class pt{constructor(e,t,n,i,s,r,a,l,h,u,c,d,f,m,g,v){pt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,i,s,r,a,l,h,u,c,d,f,m,g,v)}set(e,t,n,i,s,r,a,l,h,u,c,d,f,m,g,v){const p=this.elements;return p[0]=e,p[4]=t,p[8]=n,p[12]=i,p[1]=s,p[5]=r,p[9]=a,p[13]=l,p[2]=h,p[6]=u,p[10]=c,p[14]=d,p[3]=f,p[7]=m,p[11]=g,p[15]=v,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new pt().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,i=1/bi.setFromMatrixColumn(e,0).length(),s=1/bi.setFromMatrixColumn(e,1).length(),r=1/bi.setFromMatrixColumn(e,2).length();return t[0]=n[0]*i,t[1]=n[1]*i,t[2]=n[2]*i,t[3]=0,t[4]=n[4]*s,t[5]=n[5]*s,t[6]=n[6]*s,t[7]=0,t[8]=n[8]*r,t[9]=n[9]*r,t[10]=n[10]*r,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,i=e.y,s=e.z,r=Math.cos(n),a=Math.sin(n),l=Math.cos(i),h=Math.sin(i),u=Math.cos(s),c=Math.sin(s);if(e.order==="XYZ"){const d=r*u,f=r*c,m=a*u,g=a*c;t[0]=l*u,t[4]=-l*c,t[8]=h,t[1]=f+m*h,t[5]=d-g*h,t[9]=-a*l,t[2]=g-d*h,t[6]=m+f*h,t[10]=r*l}else if(e.order==="YXZ"){const d=l*u,f=l*c,m=h*u,g=h*c;t[0]=d+g*a,t[4]=m*a-f,t[8]=r*h,t[1]=r*c,t[5]=r*u,t[9]=-a,t[2]=f*a-m,t[6]=g+d*a,t[10]=r*l}else if(e.order==="ZXY"){const d=l*u,f=l*c,m=h*u,g=h*c;t[0]=d-g*a,t[4]=-r*c,t[8]=m+f*a,t[1]=f+m*a,t[5]=r*u,t[9]=g-d*a,t[2]=-r*h,t[6]=a,t[10]=r*l}else if(e.order==="ZYX"){const d=r*u,f=r*c,m=a*u,g=a*c;t[0]=l*u,t[4]=m*h-f,t[8]=d*h+g,t[1]=l*c,t[5]=g*h+d,t[9]=f*h-m,t[2]=-h,t[6]=a*l,t[10]=r*l}else if(e.order==="YZX"){const d=r*l,f=r*h,m=a*l,g=a*h;t[0]=l*u,t[4]=g-d*c,t[8]=m*c+f,t[1]=c,t[5]=r*u,t[9]=-a*u,t[2]=-h*u,t[6]=f*c+m,t[10]=d-g*c}else if(e.order==="XZY"){const d=r*l,f=r*h,m=a*l,g=a*h;t[0]=l*u,t[4]=-c,t[8]=h*u,t[1]=d*c+g,t[5]=r*u,t[9]=f*c-m,t[2]=m*c-f,t[6]=a*u,t[10]=g*c+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(su,e,ru)}lookAt(e,t,n){const i=this.elements;return ln.subVectors(e,t),ln.lengthSq()===0&&(ln.z=1),ln.normalize(),Kn.crossVectors(n,ln),Kn.lengthSq()===0&&(Math.abs(n.z)===1?ln.x+=1e-4:ln.z+=1e-4,ln.normalize(),Kn.crossVectors(n,ln)),Kn.normalize(),Is.crossVectors(ln,Kn),i[0]=Kn.x,i[4]=Is.x,i[8]=ln.x,i[1]=Kn.y,i[5]=Is.y,i[9]=ln.y,i[2]=Kn.z,i[6]=Is.z,i[10]=ln.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,s=this.elements,r=n[0],a=n[4],l=n[8],h=n[12],u=n[1],c=n[5],d=n[9],f=n[13],m=n[2],g=n[6],v=n[10],p=n[14],x=n[3],y=n[7],_=n[11],T=n[15],C=i[0],I=i[4],P=i[8],S=i[12],M=i[1],b=i[5],F=i[9],U=i[13],W=i[2],q=i[6],ee=i[10],O=i[14],N=i[3],te=i[7],J=i[11],B=i[15];return s[0]=r*C+a*M+l*W+h*N,s[4]=r*I+a*b+l*q+h*te,s[8]=r*P+a*F+l*ee+h*J,s[12]=r*S+a*U+l*O+h*B,s[1]=u*C+c*M+d*W+f*N,s[5]=u*I+c*b+d*q+f*te,s[9]=u*P+c*F+d*ee+f*J,s[13]=u*S+c*U+d*O+f*B,s[2]=m*C+g*M+v*W+p*N,s[6]=m*I+g*b+v*q+p*te,s[10]=m*P+g*F+v*ee+p*J,s[14]=m*S+g*U+v*O+p*B,s[3]=x*C+y*M+_*W+T*N,s[7]=x*I+y*b+_*q+T*te,s[11]=x*P+y*F+_*ee+T*J,s[15]=x*S+y*U+_*O+T*B,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],i=e[8],s=e[12],r=e[1],a=e[5],l=e[9],h=e[13],u=e[2],c=e[6],d=e[10],f=e[14],m=e[3],g=e[7],v=e[11],p=e[15];return m*(+s*l*c-i*h*c-s*a*d+n*h*d+i*a*f-n*l*f)+g*(+t*l*f-t*h*d+s*r*d-i*r*f+i*h*u-s*l*u)+v*(+t*h*c-t*a*f-s*r*c+n*r*f+s*a*u-n*h*u)+p*(-i*a*u-t*l*c+t*a*d+i*r*c-n*r*d+n*l*u)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const i=this.elements;return e.isVector3?(i[12]=e.x,i[13]=e.y,i[14]=e.z):(i[12]=e,i[13]=t,i[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],r=e[4],a=e[5],l=e[6],h=e[7],u=e[8],c=e[9],d=e[10],f=e[11],m=e[12],g=e[13],v=e[14],p=e[15],x=c*v*h-g*d*h+g*l*f-a*v*f-c*l*p+a*d*p,y=m*d*h-u*v*h-m*l*f+r*v*f+u*l*p-r*d*p,_=u*g*h-m*c*h+m*a*f-r*g*f-u*a*p+r*c*p,T=m*c*l-u*g*l-m*a*d+r*g*d+u*a*v-r*c*v,C=t*x+n*y+i*_+s*T;if(C===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const I=1/C;return e[0]=x*I,e[1]=(g*d*s-c*v*s-g*i*f+n*v*f+c*i*p-n*d*p)*I,e[2]=(a*v*s-g*l*s+g*i*h-n*v*h-a*i*p+n*l*p)*I,e[3]=(c*l*s-a*d*s-c*i*h+n*d*h+a*i*f-n*l*f)*I,e[4]=y*I,e[5]=(u*v*s-m*d*s+m*i*f-t*v*f-u*i*p+t*d*p)*I,e[6]=(m*l*s-r*v*s-m*i*h+t*v*h+r*i*p-t*l*p)*I,e[7]=(r*d*s-u*l*s+u*i*h-t*d*h-r*i*f+t*l*f)*I,e[8]=_*I,e[9]=(m*c*s-u*g*s-m*n*f+t*g*f+u*n*p-t*c*p)*I,e[10]=(r*g*s-m*a*s+m*n*h-t*g*h-r*n*p+t*a*p)*I,e[11]=(u*a*s-r*c*s-u*n*h+t*c*h+r*n*f-t*a*f)*I,e[12]=T*I,e[13]=(u*g*i-m*c*i+m*n*d-t*g*d-u*n*v+t*c*v)*I,e[14]=(m*a*i-r*g*i-m*n*l+t*g*l+r*n*v-t*a*v)*I,e[15]=(r*c*i-u*a*i+u*n*l-t*c*l-r*n*d+t*a*d)*I,this}scale(e){const t=this.elements,n=e.x,i=e.y,s=e.z;return t[0]*=n,t[4]*=i,t[8]*=s,t[1]*=n,t[5]*=i,t[9]*=s,t[2]*=n,t[6]*=i,t[10]*=s,t[3]*=n,t[7]*=i,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],i=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,i))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),i=Math.sin(t),s=1-n,r=e.x,a=e.y,l=e.z,h=s*r,u=s*a;return this.set(h*r+n,h*a-i*l,h*l+i*a,0,h*a+i*l,u*a+n,u*l-i*r,0,h*l-i*a,u*l+i*r,s*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,i,s,r){return this.set(1,n,s,0,e,1,r,0,t,i,1,0,0,0,0,1),this}compose(e,t,n){const i=this.elements,s=t._x,r=t._y,a=t._z,l=t._w,h=s+s,u=r+r,c=a+a,d=s*h,f=s*u,m=s*c,g=r*u,v=r*c,p=a*c,x=l*h,y=l*u,_=l*c,T=n.x,C=n.y,I=n.z;return i[0]=(1-(g+p))*T,i[1]=(f+_)*T,i[2]=(m-y)*T,i[3]=0,i[4]=(f-_)*C,i[5]=(1-(d+p))*C,i[6]=(v+x)*C,i[7]=0,i[8]=(m+y)*I,i[9]=(v-x)*I,i[10]=(1-(d+g))*I,i[11]=0,i[12]=e.x,i[13]=e.y,i[14]=e.z,i[15]=1,this}decompose(e,t,n){const i=this.elements;let s=bi.set(i[0],i[1],i[2]).length();const r=bi.set(i[4],i[5],i[6]).length(),a=bi.set(i[8],i[9],i[10]).length();this.determinant()<0&&(s=-s),e.x=i[12],e.y=i[13],e.z=i[14],vn.copy(this);const h=1/s,u=1/r,c=1/a;return vn.elements[0]*=h,vn.elements[1]*=h,vn.elements[2]*=h,vn.elements[4]*=u,vn.elements[5]*=u,vn.elements[6]*=u,vn.elements[8]*=c,vn.elements[9]*=c,vn.elements[10]*=c,t.setFromRotationMatrix(vn),n.x=s,n.y=r,n.z=a,this}makePerspective(e,t,n,i,s,r,a=kn){const l=this.elements,h=2*s/(t-e),u=2*s/(n-i),c=(t+e)/(t-e),d=(n+i)/(n-i);let f,m;if(a===kn)f=-(r+s)/(r-s),m=-2*r*s/(r-s);else if(a===dr)f=-r/(r-s),m=-r*s/(r-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=h,l[4]=0,l[8]=c,l[12]=0,l[1]=0,l[5]=u,l[9]=d,l[13]=0,l[2]=0,l[6]=0,l[10]=f,l[14]=m,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,n,i,s,r,a=kn){const l=this.elements,h=1/(t-e),u=1/(n-i),c=1/(r-s),d=(t+e)*h,f=(n+i)*u;let m,g;if(a===kn)m=(r+s)*c,g=-2*c;else if(a===dr)m=s*c,g=-1*c;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*h,l[4]=0,l[8]=0,l[12]=-d,l[1]=0,l[5]=2*u,l[9]=0,l[13]=-f,l[2]=0,l[6]=0,l[10]=g,l[14]=-m,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<16;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const bi=new H,vn=new pt,su=new H(0,0,0),ru=new H(1,1,1),Kn=new H,Is=new H,ln=new H,Ha=new pt,Ga=new Tn;class bn{constructor(e=0,t=0,n=0,i=bn.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,i=this._order){return this._x=e,this._y=t,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const i=e.elements,s=i[0],r=i[4],a=i[8],l=i[1],h=i[5],u=i[9],c=i[2],d=i[6],f=i[10];switch(t){case"XYZ":this._y=Math.asin(yt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,f),this._z=Math.atan2(-r,s)):(this._x=Math.atan2(d,h),this._z=0);break;case"YXZ":this._x=Math.asin(-yt(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,f),this._z=Math.atan2(l,h)):(this._y=Math.atan2(-c,s),this._z=0);break;case"ZXY":this._x=Math.asin(yt(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-c,f),this._z=Math.atan2(-r,h)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-yt(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-r,h));break;case"YZX":this._z=Math.asin(yt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,h),this._y=Math.atan2(-c,s)):(this._x=0,this._y=Math.atan2(a,f));break;case"XZY":this._z=Math.asin(-yt(r,-1,1)),Math.abs(r)<.9999999?(this._x=Math.atan2(d,h),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-u,f),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return Ha.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Ha,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Ga.setFromEuler(this),this.setFromQuaternion(Ga,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}bn.DEFAULT_ORDER="XYZ";class yc{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let ou=0;const Wa=new H,Ti=new Tn,Nn=new pt,Ns=new H,rs=new H,au=new H,lu=new Tn,Xa=new H(1,0,0),qa=new H(0,1,0),Ya=new H(0,0,1),ja={type:"added"},cu={type:"removed"},Ai={type:"childadded",child:null},Ir={type:"childremoved",child:null};class Ft extends Ji{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:ou++}),this.uuid=Sn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Ft.DEFAULT_UP.clone();const e=new H,t=new bn,n=new Tn,i=new H(1,1,1);function s(){n.setFromEuler(t,!1)}function r(){t.setFromQuaternion(n,void 0,!1)}t._onChange(s),n._onChange(r),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new pt},normalMatrix:{value:new dt}}),this.matrix=new pt,this.matrixWorld=new pt,this.matrixAutoUpdate=Ft.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Ft.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new yc,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Ti.setFromAxisAngle(e,t),this.quaternion.multiply(Ti),this}rotateOnWorldAxis(e,t){return Ti.setFromAxisAngle(e,t),this.quaternion.premultiply(Ti),this}rotateX(e){return this.rotateOnAxis(Xa,e)}rotateY(e){return this.rotateOnAxis(qa,e)}rotateZ(e){return this.rotateOnAxis(Ya,e)}translateOnAxis(e,t){return Wa.copy(e).applyQuaternion(this.quaternion),this.position.add(Wa.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Xa,e)}translateY(e){return this.translateOnAxis(qa,e)}translateZ(e){return this.translateOnAxis(Ya,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Nn.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Ns.copy(e):Ns.set(e,t,n);const i=this.parent;this.updateWorldMatrix(!0,!1),rs.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Nn.lookAt(rs,Ns,this.up):Nn.lookAt(Ns,rs,this.up),this.quaternion.setFromRotationMatrix(Nn),i&&(Nn.extractRotation(i.matrixWorld),Ti.setFromRotationMatrix(Nn),this.quaternion.premultiply(Ti.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(ja),Ai.child=e,this.dispatchEvent(Ai),Ai.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(cu),Ir.child=e,this.dispatchEvent(Ir),Ir.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Nn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Nn.multiply(e.parent.matrixWorld)),e.applyMatrix4(Nn),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(ja),Ai.child=e,this.dispatchEvent(Ai),Ai.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,i=this.children.length;n<i;n++){const r=this.children[n].getObjectByProperty(e,t);if(r!==void 0)return r}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);const i=this.children;for(let s=0,r=i.length;s<r;s++)i[s].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(rs,e,au),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(rs,lu,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const i=this.children;for(let s=0,r=i.length;s<r;s++)i[s].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.visibility=this._visibility,i.active=this._active,i.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),i.maxInstanceCount=this._maxInstanceCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.geometryCount=this._geometryCount,i.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(i.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(i.boundingSphere={center:i.boundingSphere.center.toArray(),radius:i.boundingSphere.radius}),this.boundingBox!==null&&(i.boundingBox={min:i.boundingBox.min.toArray(),max:i.boundingBox.max.toArray()}));function s(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=s(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let h=0,u=l.length;h<u;h++){const c=l[h];s(e.shapes,c)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,h=this.material.length;l<h;l++)a.push(s(e.materials,this.material[l]));i.material=a}else i.material=s(e.materials,this.material);if(this.children.length>0){i.children=[];for(let a=0;a<this.children.length;a++)i.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){i.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];i.animations.push(s(e.animations,l))}}if(t){const a=r(e.geometries),l=r(e.materials),h=r(e.textures),u=r(e.images),c=r(e.shapes),d=r(e.skeletons),f=r(e.animations),m=r(e.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),h.length>0&&(n.textures=h),u.length>0&&(n.images=u),c.length>0&&(n.shapes=c),d.length>0&&(n.skeletons=d),f.length>0&&(n.animations=f),m.length>0&&(n.nodes=m)}return n.object=i,n;function r(a){const l=[];for(const h in a){const u=a[h];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const i=e.children[n];this.add(i.clone())}return this}}Ft.DEFAULT_UP=new H(0,1,0);Ft.DEFAULT_MATRIX_AUTO_UPDATE=!0;Ft.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const gn=new H,Dn=new H,Nr=new H,Un=new H,Ri=new H,Ci=new H,Ka=new H,Dr=new H,Ur=new H,Fr=new H,Br=new wt,Or=new wt,zr=new wt;class xn{constructor(e=new H,t=new H,n=new H){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,i){i.subVectors(n,t),gn.subVectors(e,t),i.cross(gn);const s=i.lengthSq();return s>0?i.multiplyScalar(1/Math.sqrt(s)):i.set(0,0,0)}static getBarycoord(e,t,n,i,s){gn.subVectors(i,t),Dn.subVectors(n,t),Nr.subVectors(e,t);const r=gn.dot(gn),a=gn.dot(Dn),l=gn.dot(Nr),h=Dn.dot(Dn),u=Dn.dot(Nr),c=r*h-a*a;if(c===0)return s.set(0,0,0),null;const d=1/c,f=(h*l-a*u)*d,m=(r*u-a*l)*d;return s.set(1-f-m,m,f)}static containsPoint(e,t,n,i){return this.getBarycoord(e,t,n,i,Un)===null?!1:Un.x>=0&&Un.y>=0&&Un.x+Un.y<=1}static getInterpolation(e,t,n,i,s,r,a,l){return this.getBarycoord(e,t,n,i,Un)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,Un.x),l.addScaledVector(r,Un.y),l.addScaledVector(a,Un.z),l)}static getInterpolatedAttribute(e,t,n,i,s,r){return Br.setScalar(0),Or.setScalar(0),zr.setScalar(0),Br.fromBufferAttribute(e,t),Or.fromBufferAttribute(e,n),zr.fromBufferAttribute(e,i),r.setScalar(0),r.addScaledVector(Br,s.x),r.addScaledVector(Or,s.y),r.addScaledVector(zr,s.z),r}static isFrontFacing(e,t,n,i){return gn.subVectors(n,t),Dn.subVectors(e,t),gn.cross(Dn).dot(i)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,i){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[i]),this}setFromAttributeAndIndices(e,t,n,i){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,i),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return gn.subVectors(this.c,this.b),Dn.subVectors(this.a,this.b),gn.cross(Dn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return xn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return xn.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,i,s){return xn.getInterpolation(e,this.a,this.b,this.c,t,n,i,s)}containsPoint(e){return xn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return xn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,i=this.b,s=this.c;let r,a;Ri.subVectors(i,n),Ci.subVectors(s,n),Dr.subVectors(e,n);const l=Ri.dot(Dr),h=Ci.dot(Dr);if(l<=0&&h<=0)return t.copy(n);Ur.subVectors(e,i);const u=Ri.dot(Ur),c=Ci.dot(Ur);if(u>=0&&c<=u)return t.copy(i);const d=l*c-u*h;if(d<=0&&l>=0&&u<=0)return r=l/(l-u),t.copy(n).addScaledVector(Ri,r);Fr.subVectors(e,s);const f=Ri.dot(Fr),m=Ci.dot(Fr);if(m>=0&&f<=m)return t.copy(s);const g=f*h-l*m;if(g<=0&&h>=0&&m<=0)return a=h/(h-m),t.copy(n).addScaledVector(Ci,a);const v=u*m-f*c;if(v<=0&&c-u>=0&&f-m>=0)return Ka.subVectors(s,i),a=(c-u)/(c-u+(f-m)),t.copy(i).addScaledVector(Ka,a);const p=1/(v+g+d);return r=g*p,a=d*p,t.copy(n).addScaledVector(Ri,r).addScaledVector(Ci,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const Mc={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Zn={h:0,s:0,l:0},Ds={h:0,s:0,l:0};function Vr(o,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?o+(e-o)*6*t:t<1/2?e:t<2/3?o+(e-o)*6*(2/3-t):o}class lt{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const i=e;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Vt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Et.toWorkingColorSpace(this,t),this}setRGB(e,t,n,i=Et.workingColorSpace){return this.r=e,this.g=t,this.b=n,Et.toWorkingColorSpace(this,i),this}setHSL(e,t,n,i=Et.workingColorSpace){if(e=ua(e,1),t=yt(t,0,1),n=yt(n,0,1),t===0)this.r=this.g=this.b=n;else{const s=n<=.5?n*(1+t):n+t-n*t,r=2*n-s;this.r=Vr(r,s,e+1/3),this.g=Vr(r,s,e),this.b=Vr(r,s,e-1/3)}return Et.toWorkingColorSpace(this,i),this}setStyle(e,t=Vt){function n(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const r=i[1],a=i[2];switch(r){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=i[1],r=s.length;if(r===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(r===6)return this.setHex(parseInt(s,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Vt){const n=Mc[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Hn(e.r),this.g=Hn(e.g),this.b=Hn(e.b),this}copyLinearToSRGB(e){return this.r=Oi(e.r),this.g=Oi(e.g),this.b=Oi(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Vt){return Et.fromWorkingColorSpace(qt.copy(this),e),Math.round(yt(qt.r*255,0,255))*65536+Math.round(yt(qt.g*255,0,255))*256+Math.round(yt(qt.b*255,0,255))}getHexString(e=Vt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Et.workingColorSpace){Et.fromWorkingColorSpace(qt.copy(this),t);const n=qt.r,i=qt.g,s=qt.b,r=Math.max(n,i,s),a=Math.min(n,i,s);let l,h;const u=(a+r)/2;if(a===r)l=0,h=0;else{const c=r-a;switch(h=u<=.5?c/(r+a):c/(2-r-a),r){case n:l=(i-s)/c+(i<s?6:0);break;case i:l=(s-n)/c+2;break;case s:l=(n-i)/c+4;break}l/=6}return e.h=l,e.s=h,e.l=u,e}getRGB(e,t=Et.workingColorSpace){return Et.fromWorkingColorSpace(qt.copy(this),t),e.r=qt.r,e.g=qt.g,e.b=qt.b,e}getStyle(e=Vt){Et.fromWorkingColorSpace(qt.copy(this),e);const t=qt.r,n=qt.g,i=qt.b;return e!==Vt?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(e,t,n){return this.getHSL(Zn),this.setHSL(Zn.h+e,Zn.s+t,Zn.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(Zn),e.getHSL(Ds);const n=vs(Zn.h,Ds.h,t),i=vs(Zn.s,Ds.s,t),s=vs(Zn.l,Ds.l,t);return this.setHSL(n,i,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,i=this.b,s=e.elements;return this.r=s[0]*t+s[3]*n+s[6]*i,this.g=s[1]*t+s[4]*n+s[7]*i,this.b=s[2]*t+s[5]*n+s[8]*i,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const qt=new lt;lt.NAMES=Mc;let hu=0;class En extends Ji{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:hu++}),this.uuid=Sn(),this.name="",this.type="Material",this.blending=Fi,this.side=Gn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=uo,this.blendDst=fo,this.blendEquation=mi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new lt(0,0,0),this.blendAlpha=0,this.depthFunc=ki,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Ua,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=yi,this.stencilZFail=yi,this.stencilZPass=yi,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const i=this[t];if(i===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Fi&&(n.blending=this.blending),this.side!==Gn&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==uo&&(n.blendSrc=this.blendSrc),this.blendDst!==fo&&(n.blendDst=this.blendDst),this.blendEquation!==mi&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==ki&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Ua&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==yi&&(n.stencilFail=this.stencilFail),this.stencilZFail!==yi&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==yi&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(s){const r=[];for(const a in s){const l=s[a];delete l.metadata,r.push(l)}return r}if(t){const s=i(e.textures),r=i(e.images);s.length>0&&(n.textures=s),r.length>0&&(n.images=r)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const i=t.length;n=new Array(i);for(let s=0;s!==i;++s)n[s]=t[s].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class Jt extends En{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new lt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new bn,this.combine=ic,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const zt=new H,Us=new ft;let uu=0;class en{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:uu++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=Zo,this.updateRanges=[],this.gpuType=yn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let i=0,s=this.itemSize;i<s;i++)this.array[e+i]=t.array[n+i];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Us.fromBufferAttribute(this,t),Us.applyMatrix3(e),this.setXY(t,Us.x,Us.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)zt.fromBufferAttribute(this,t),zt.applyMatrix3(e),this.setXYZ(t,zt.x,zt.y,zt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)zt.fromBufferAttribute(this,t),zt.applyMatrix4(e),this.setXYZ(t,zt.x,zt.y,zt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)zt.fromBufferAttribute(this,t),zt.applyNormalMatrix(e),this.setXYZ(t,zt.x,zt.y,zt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)zt.fromBufferAttribute(this,t),zt.transformDirection(e),this.setXYZ(t,zt.x,zt.y,zt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=_n(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=Tt(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=_n(t,this.array)),t}setX(e,t){return this.normalized&&(t=Tt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=_n(t,this.array)),t}setY(e,t){return this.normalized&&(t=Tt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=_n(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Tt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=_n(t,this.array)),t}setW(e,t){return this.normalized&&(t=Tt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=Tt(t,this.array),n=Tt(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,i){return e*=this.itemSize,this.normalized&&(t=Tt(t,this.array),n=Tt(n,this.array),i=Tt(i,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this}setXYZW(e,t,n,i,s){return e*=this.itemSize,this.normalized&&(t=Tt(t,this.array),n=Tt(n,this.array),i=Tt(i,this.array),s=Tt(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Zo&&(e.usage=this.usage),e}}class Sc extends en{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class Ec extends en{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class Ot extends en{constructor(e,t,n){super(new Float32Array(e),t,n)}}let du=0;const un=new pt,kr=new Ft,Pi=new H,cn=new An,os=new An,Gt=new H;class rn extends Ji{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:du++}),this.uuid=Sn(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(_c(e)?Ec:Sc)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const s=new dt().getNormalMatrix(e);n.applyNormalMatrix(s),n.needsUpdate=!0}const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(e),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return un.makeRotationFromQuaternion(e),this.applyMatrix4(un),this}rotateX(e){return un.makeRotationX(e),this.applyMatrix4(un),this}rotateY(e){return un.makeRotationY(e),this.applyMatrix4(un),this}rotateZ(e){return un.makeRotationZ(e),this.applyMatrix4(un),this}translate(e,t,n){return un.makeTranslation(e,t,n),this.applyMatrix4(un),this}scale(e,t,n){return un.makeScale(e,t,n),this.applyMatrix4(un),this}lookAt(e){return kr.lookAt(e),kr.updateMatrix(),this.applyMatrix4(kr.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Pi).negate(),this.translate(Pi.x,Pi.y,Pi.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const n=[];for(let i=0,s=e.length;i<s;i++){const r=e[i];n.push(r.x,r.y,r.z||0)}this.setAttribute("position",new Ot(n,3))}else{const n=Math.min(e.length,t.count);for(let i=0;i<n;i++){const s=e[i];t.setXYZ(i,s.x,s.y,s.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new An);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new H(-1/0,-1/0,-1/0),new H(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,i=t.length;n<i;n++){const s=t[n];cn.setFromBufferAttribute(s),this.morphTargetsRelative?(Gt.addVectors(this.boundingBox.min,cn.min),this.boundingBox.expandByPoint(Gt),Gt.addVectors(this.boundingBox.max,cn.max),this.boundingBox.expandByPoint(Gt)):(this.boundingBox.expandByPoint(cn.min),this.boundingBox.expandByPoint(cn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Rn);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new H,1/0);return}if(e){const n=this.boundingSphere.center;if(cn.setFromBufferAttribute(e),t)for(let s=0,r=t.length;s<r;s++){const a=t[s];os.setFromBufferAttribute(a),this.morphTargetsRelative?(Gt.addVectors(cn.min,os.min),cn.expandByPoint(Gt),Gt.addVectors(cn.max,os.max),cn.expandByPoint(Gt)):(cn.expandByPoint(os.min),cn.expandByPoint(os.max))}cn.getCenter(n);let i=0;for(let s=0,r=e.count;s<r;s++)Gt.fromBufferAttribute(e,s),i=Math.max(i,n.distanceToSquared(Gt));if(t)for(let s=0,r=t.length;s<r;s++){const a=t[s],l=this.morphTargetsRelative;for(let h=0,u=a.count;h<u;h++)Gt.fromBufferAttribute(a,h),l&&(Pi.fromBufferAttribute(e,h),Gt.add(Pi)),i=Math.max(i,n.distanceToSquared(Gt))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.position,i=t.normal,s=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new en(new Float32Array(4*n.count),4));const r=this.getAttribute("tangent"),a=[],l=[];for(let P=0;P<n.count;P++)a[P]=new H,l[P]=new H;const h=new H,u=new H,c=new H,d=new ft,f=new ft,m=new ft,g=new H,v=new H;function p(P,S,M){h.fromBufferAttribute(n,P),u.fromBufferAttribute(n,S),c.fromBufferAttribute(n,M),d.fromBufferAttribute(s,P),f.fromBufferAttribute(s,S),m.fromBufferAttribute(s,M),u.sub(h),c.sub(h),f.sub(d),m.sub(d);const b=1/(f.x*m.y-m.x*f.y);isFinite(b)&&(g.copy(u).multiplyScalar(m.y).addScaledVector(c,-f.y).multiplyScalar(b),v.copy(c).multiplyScalar(f.x).addScaledVector(u,-m.x).multiplyScalar(b),a[P].add(g),a[S].add(g),a[M].add(g),l[P].add(v),l[S].add(v),l[M].add(v))}let x=this.groups;x.length===0&&(x=[{start:0,count:e.count}]);for(let P=0,S=x.length;P<S;++P){const M=x[P],b=M.start,F=M.count;for(let U=b,W=b+F;U<W;U+=3)p(e.getX(U+0),e.getX(U+1),e.getX(U+2))}const y=new H,_=new H,T=new H,C=new H;function I(P){T.fromBufferAttribute(i,P),C.copy(T);const S=a[P];y.copy(S),y.sub(T.multiplyScalar(T.dot(S))).normalize(),_.crossVectors(C,S);const b=_.dot(l[P])<0?-1:1;r.setXYZW(P,y.x,y.y,y.z,b)}for(let P=0,S=x.length;P<S;++P){const M=x[P],b=M.start,F=M.count;for(let U=b,W=b+F;U<W;U+=3)I(e.getX(U+0)),I(e.getX(U+1)),I(e.getX(U+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new en(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let d=0,f=n.count;d<f;d++)n.setXYZ(d,0,0,0);const i=new H,s=new H,r=new H,a=new H,l=new H,h=new H,u=new H,c=new H;if(e)for(let d=0,f=e.count;d<f;d+=3){const m=e.getX(d+0),g=e.getX(d+1),v=e.getX(d+2);i.fromBufferAttribute(t,m),s.fromBufferAttribute(t,g),r.fromBufferAttribute(t,v),u.subVectors(r,s),c.subVectors(i,s),u.cross(c),a.fromBufferAttribute(n,m),l.fromBufferAttribute(n,g),h.fromBufferAttribute(n,v),a.add(u),l.add(u),h.add(u),n.setXYZ(m,a.x,a.y,a.z),n.setXYZ(g,l.x,l.y,l.z),n.setXYZ(v,h.x,h.y,h.z)}else for(let d=0,f=t.count;d<f;d+=3)i.fromBufferAttribute(t,d+0),s.fromBufferAttribute(t,d+1),r.fromBufferAttribute(t,d+2),u.subVectors(r,s),c.subVectors(i,s),u.cross(c),n.setXYZ(d+0,u.x,u.y,u.z),n.setXYZ(d+1,u.x,u.y,u.z),n.setXYZ(d+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)Gt.fromBufferAttribute(e,t),Gt.normalize(),e.setXYZ(t,Gt.x,Gt.y,Gt.z)}toNonIndexed(){function e(a,l){const h=a.array,u=a.itemSize,c=a.normalized,d=new h.constructor(l.length*u);let f=0,m=0;for(let g=0,v=l.length;g<v;g++){a.isInterleavedBufferAttribute?f=l[g]*a.data.stride+a.offset:f=l[g]*u;for(let p=0;p<u;p++)d[m++]=h[f++]}return new en(d,u,c)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new rn,n=this.index.array,i=this.attributes;for(const a in i){const l=i[a],h=e(l,n);t.setAttribute(a,h)}const s=this.morphAttributes;for(const a in s){const l=[],h=s[a];for(let u=0,c=h.length;u<c;u++){const d=h[u],f=e(d,n);l.push(f)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;const r=this.groups;for(let a=0,l=r.length;a<l;a++){const h=r[a];t.addGroup(h.start,h.count,h.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const h in l)l[h]!==void 0&&(e[h]=l[h]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const l in n){const h=n[l];e.data.attributes[l]=h.toJSON(e.data)}const i={};let s=!1;for(const l in this.morphAttributes){const h=this.morphAttributes[l],u=[];for(let c=0,d=h.length;c<d;c++){const f=h[c];u.push(f.toJSON(e.data))}u.length>0&&(i[l]=u,s=!0)}s&&(e.data.morphAttributes=i,e.data.morphTargetsRelative=this.morphTargetsRelative);const r=this.groups;r.length>0&&(e.data.groups=JSON.parse(JSON.stringify(r)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone(t));const i=e.attributes;for(const h in i){const u=i[h];this.setAttribute(h,u.clone(t))}const s=e.morphAttributes;for(const h in s){const u=[],c=s[h];for(let d=0,f=c.length;d<f;d++)u.push(c[d].clone(t));this.morphAttributes[h]=u}this.morphTargetsRelative=e.morphTargetsRelative;const r=e.groups;for(let h=0,u=r.length;h<u;h++){const c=r[h];this.addGroup(c.start,c.count,c.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Za=new pt,ai=new vr,Fs=new Rn,$a=new H,Bs=new H,Os=new H,zs=new H,Hr=new H,Vs=new H,Ja=new H,ks=new H;class Nt extends Ft{constructor(e=new rn,t=new Jt){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,r=i.length;s<r;s++){const a=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(e,t){const n=this.geometry,i=n.attributes.position,s=n.morphAttributes.position,r=n.morphTargetsRelative;t.fromBufferAttribute(i,e);const a=this.morphTargetInfluences;if(s&&a){Vs.set(0,0,0);for(let l=0,h=s.length;l<h;l++){const u=a[l],c=s[l];u!==0&&(Hr.fromBufferAttribute(c,e),r?Vs.addScaledVector(Hr,u):Vs.addScaledVector(Hr.sub(t),u))}t.add(Vs)}return t}raycast(e,t){const n=this.geometry,i=this.material,s=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Fs.copy(n.boundingSphere),Fs.applyMatrix4(s),ai.copy(e.ray).recast(e.near),!(Fs.containsPoint(ai.origin)===!1&&(ai.intersectSphere(Fs,$a)===null||ai.origin.distanceToSquared($a)>(e.far-e.near)**2))&&(Za.copy(s).invert(),ai.copy(e.ray).applyMatrix4(Za),!(n.boundingBox!==null&&ai.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,ai)))}_computeIntersections(e,t,n){let i;const s=this.geometry,r=this.material,a=s.index,l=s.attributes.position,h=s.attributes.uv,u=s.attributes.uv1,c=s.attributes.normal,d=s.groups,f=s.drawRange;if(a!==null)if(Array.isArray(r))for(let m=0,g=d.length;m<g;m++){const v=d[m],p=r[v.materialIndex],x=Math.max(v.start,f.start),y=Math.min(a.count,Math.min(v.start+v.count,f.start+f.count));for(let _=x,T=y;_<T;_+=3){const C=a.getX(_),I=a.getX(_+1),P=a.getX(_+2);i=Hs(this,p,e,n,h,u,c,C,I,P),i&&(i.faceIndex=Math.floor(_/3),i.face.materialIndex=v.materialIndex,t.push(i))}}else{const m=Math.max(0,f.start),g=Math.min(a.count,f.start+f.count);for(let v=m,p=g;v<p;v+=3){const x=a.getX(v),y=a.getX(v+1),_=a.getX(v+2);i=Hs(this,r,e,n,h,u,c,x,y,_),i&&(i.faceIndex=Math.floor(v/3),t.push(i))}}else if(l!==void 0)if(Array.isArray(r))for(let m=0,g=d.length;m<g;m++){const v=d[m],p=r[v.materialIndex],x=Math.max(v.start,f.start),y=Math.min(l.count,Math.min(v.start+v.count,f.start+f.count));for(let _=x,T=y;_<T;_+=3){const C=_,I=_+1,P=_+2;i=Hs(this,p,e,n,h,u,c,C,I,P),i&&(i.faceIndex=Math.floor(_/3),i.face.materialIndex=v.materialIndex,t.push(i))}}else{const m=Math.max(0,f.start),g=Math.min(l.count,f.start+f.count);for(let v=m,p=g;v<p;v+=3){const x=v,y=v+1,_=v+2;i=Hs(this,r,e,n,h,u,c,x,y,_),i&&(i.faceIndex=Math.floor(v/3),t.push(i))}}}}function fu(o,e,t,n,i,s,r,a){let l;if(e.side===Yt?l=n.intersectTriangle(r,s,i,!0,a):l=n.intersectTriangle(i,s,r,e.side===Gn,a),l===null)return null;ks.copy(a),ks.applyMatrix4(o.matrixWorld);const h=t.ray.origin.distanceTo(ks);return h<t.near||h>t.far?null:{distance:h,point:ks.clone(),object:o}}function Hs(o,e,t,n,i,s,r,a,l,h){o.getVertexPosition(a,Bs),o.getVertexPosition(l,Os),o.getVertexPosition(h,zs);const u=fu(o,e,t,n,Bs,Os,zs,Ja);if(u){const c=new H;xn.getBarycoord(Ja,Bs,Os,zs,c),i&&(u.uv=xn.getInterpolatedAttribute(i,a,l,h,c,new ft)),s&&(u.uv1=xn.getInterpolatedAttribute(s,a,l,h,c,new ft)),r&&(u.normal=xn.getInterpolatedAttribute(r,a,l,h,c,new H),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));const d={a,b:l,c:h,normal:new H,materialIndex:0};xn.getNormal(Bs,Os,zs,d.normal),u.face=d,u.barycoord=c}return u}class Qi extends rn{constructor(e=1,t=1,n=1,i=1,s=1,r=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:i,heightSegments:s,depthSegments:r};const a=this;i=Math.floor(i),s=Math.floor(s),r=Math.floor(r);const l=[],h=[],u=[],c=[];let d=0,f=0;m("z","y","x",-1,-1,n,t,e,r,s,0),m("z","y","x",1,-1,n,t,-e,r,s,1),m("x","z","y",1,1,e,n,t,i,r,2),m("x","z","y",1,-1,e,n,-t,i,r,3),m("x","y","z",1,-1,e,t,n,i,s,4),m("x","y","z",-1,-1,e,t,-n,i,s,5),this.setIndex(l),this.setAttribute("position",new Ot(h,3)),this.setAttribute("normal",new Ot(u,3)),this.setAttribute("uv",new Ot(c,2));function m(g,v,p,x,y,_,T,C,I,P,S){const M=_/I,b=T/P,F=_/2,U=T/2,W=C/2,q=I+1,ee=P+1;let O=0,N=0;const te=new H;for(let J=0;J<ee;J++){const B=J*b-U;for(let Q=0;Q<q;Q++){const z=Q*M-F;te[g]=z*x,te[v]=B*y,te[p]=W,h.push(te.x,te.y,te.z),te[g]=0,te[v]=0,te[p]=C>0?1:-1,u.push(te.x,te.y,te.z),c.push(Q/I),c.push(1-J/P),O+=1}}for(let J=0;J<P;J++)for(let B=0;B<I;B++){const Q=d+B+q*J,z=d+B+q*(J+1),A=d+(B+1)+q*(J+1),R=d+(B+1)+q*J;l.push(Q,z,R),l.push(z,A,R),N+=6}a.addGroup(f,N,S),f+=N,d+=O}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Qi(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function ji(o){const e={};for(const t in o){e[t]={};for(const n in o[t]){const i=o[t][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?i.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=i.clone():Array.isArray(i)?e[t][n]=i.slice():e[t][n]=i}}return e}function Zt(o){const e={};for(let t=0;t<o.length;t++){const n=ji(o[t]);for(const i in n)e[i]=n[i]}return e}function pu(o){const e=[];for(let t=0;t<o.length;t++)e.push(o[t].clone());return e}function wc(o){const e=o.getRenderTarget();return e===null?o.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Et.workingColorSpace}const mu={clone:ji,merge:Zt};var vu=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,gu=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Xn extends En{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=vu,this.fragmentShader=gu,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=ji(e.uniforms),this.uniformsGroups=pu(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const i in this.uniforms){const r=this.uniforms[i].value;r&&r.isTexture?t.uniforms[i]={type:"t",value:r.toJSON(e).uuid}:r&&r.isColor?t.uniforms[i]={type:"c",value:r.getHex()}:r&&r.isVector2?t.uniforms[i]={type:"v2",value:r.toArray()}:r&&r.isVector3?t.uniforms[i]={type:"v3",value:r.toArray()}:r&&r.isVector4?t.uniforms[i]={type:"v4",value:r.toArray()}:r&&r.isMatrix3?t.uniforms[i]={type:"m3",value:r.toArray()}:r&&r.isMatrix4?t.uniforms[i]={type:"m4",value:r.toArray()}:t.uniforms[i]={value:r}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}let bc=class extends Ft{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new pt,this.projectionMatrix=new pt,this.projectionMatrixInverse=new pt,this.coordinateSystem=kn}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}};const $n=new H,Qa=new ft,el=new ft;class $t extends bc{constructor(e=50,t=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Yi*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(ms*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Yi*2*Math.atan(Math.tan(ms*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){$n.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set($n.x,$n.y).multiplyScalar(-e/$n.z),$n.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set($n.x,$n.y).multiplyScalar(-e/$n.z)}getViewSize(e,t){return this.getViewBounds(e,Qa,el),t.subVectors(el,Qa)}setViewOffset(e,t,n,i,s,r){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=r,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(ms*.5*this.fov)/this.zoom,n=2*t,i=this.aspect*n,s=-.5*i;const r=this.view;if(this.view!==null&&this.view.enabled){const l=r.fullWidth,h=r.fullHeight;s+=r.offsetX*i/l,t-=r.offsetY*n/h,i*=r.width/l,n*=r.height/h}const a=this.filmOffset;a!==0&&(s+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+i,t,t-n,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const Li=-90,Ii=1;class _u extends Ft{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const i=new $t(Li,Ii,e,t);i.layers=this.layers,this.add(i);const s=new $t(Li,Ii,e,t);s.layers=this.layers,this.add(s);const r=new $t(Li,Ii,e,t);r.layers=this.layers,this.add(r);const a=new $t(Li,Ii,e,t);a.layers=this.layers,this.add(a);const l=new $t(Li,Ii,e,t);l.layers=this.layers,this.add(l);const h=new $t(Li,Ii,e,t);h.layers=this.layers,this.add(h)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,i,s,r,a,l]=t;for(const h of t)this.remove(h);if(e===kn)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),r.up.set(0,0,1),r.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===dr)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),r.up.set(0,0,-1),r.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const h of t)this.add(h),h.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,r,a,l,h,u]=this.children,c=e.getRenderTarget(),d=e.getActiveCubeFace(),f=e.getActiveMipmapLevel(),m=e.xr.enabled;e.xr.enabled=!1;const g=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,i),e.render(t,s),e.setRenderTarget(n,1,i),e.render(t,r),e.setRenderTarget(n,2,i),e.render(t,a),e.setRenderTarget(n,3,i),e.render(t,l),e.setRenderTarget(n,4,i),e.render(t,h),n.texture.generateMipmaps=g,e.setRenderTarget(n,5,i),e.render(t,u),e.setRenderTarget(c,d,f),e.xr.enabled=m,n.texture.needsPMREMUpdate=!0}}class fa extends Wt{constructor(e,t,n,i,s,r,a,l,h,u){e=e!==void 0?e:[],t=t!==void 0?t:Hi,super(e,t,n,i,s,r,a,l,h,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class xu extends _i{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},i=[n,n,n,n,n,n];this.texture=new fa(i,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:hn}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},i=new Qi(5,5,5),s=new Xn({name:"CubemapFromEquirect",uniforms:ji(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Yt,blending:ni});s.uniforms.tEquirect.value=t;const r=new Nt(i,s),a=t.minFilter;return t.minFilter===Vn&&(t.minFilter=hn),new _u(1,10,this).update(e,r),t.minFilter=a,r.geometry.dispose(),r.material.dispose(),this}clear(e,t,n,i){const s=e.getRenderTarget();for(let r=0;r<6;r++)e.setRenderTarget(this,r),e.clear(t,n,i);e.setRenderTarget(s)}}class Mn extends Ft{constructor(){super(),this.isGroup=!0,this.type="Group"}}const yu={type:"move"};class Gr{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Mn,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Mn,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new H,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new H),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Mn,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new H,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new H),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let i=null,s=null,r=null;const a=this._targetRay,l=this._grip,h=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(h&&e.hand){r=!0;for(const g of e.hand.values()){const v=t.getJointPose(g,n),p=this._getHandJoint(h,g);v!==null&&(p.matrix.fromArray(v.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=v.radius),p.visible=v!==null}const u=h.joints["index-finger-tip"],c=h.joints["thumb-tip"],d=u.position.distanceTo(c.position),f=.02,m=.005;h.inputState.pinching&&d>f+m?(h.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!h.inputState.pinching&&d<=f-m&&(h.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,n),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(i=t.getPose(e.targetRaySpace,n),i===null&&s!==null&&(i=s),i!==null&&(a.matrix.fromArray(i.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,i.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(i.linearVelocity)):a.hasLinearVelocity=!1,i.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(i.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(yu)))}return a!==null&&(a.visible=i!==null),l!==null&&(l.visible=s!==null),h!==null&&(h.visible=r!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new Mn;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}class Mu extends Ft{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new bn,this.environmentIntensity=1,this.environmentRotation=new bn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}class Su{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=Zo,this.updateRanges=[],this.version=0,this.uuid=Sn()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let i=0,s=this.stride;i<s;i++)this.array[e+i]=t.array[n+i];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Sn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Sn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const Kt=new H;class pa{constructor(e,t,n,i=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=i}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)Kt.fromBufferAttribute(this,t),Kt.applyMatrix4(e),this.setXYZ(t,Kt.x,Kt.y,Kt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Kt.fromBufferAttribute(this,t),Kt.applyNormalMatrix(e),this.setXYZ(t,Kt.x,Kt.y,Kt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Kt.fromBufferAttribute(this,t),Kt.transformDirection(e),this.setXYZ(t,Kt.x,Kt.y,Kt.z);return this}getComponent(e,t){let n=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(n=_n(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=Tt(n,this.array)),this.data.array[e*this.data.stride+this.offset+t]=n,this}setX(e,t){return this.normalized&&(t=Tt(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=Tt(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=Tt(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=Tt(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=_n(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=_n(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=_n(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=_n(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=Tt(t,this.array),n=Tt(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=Tt(t,this.array),n=Tt(n,this.array),i=Tt(i,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this}setXYZW(e,t,n,i,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=Tt(t,this.array),n=Tt(n,this.array),i=Tt(i,this.array),s=Tt(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this.data.array[e+3]=s,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[i+s])}return new en(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new pa(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[i+s])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}const tl=new H,nl=new wt,il=new wt,Eu=new H,sl=new pt,Gs=new H,Wr=new Rn,rl=new pt,Xr=new vr;class wu extends Nt{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=La,this.bindMatrix=new pt,this.bindMatrixInverse=new pt,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){const e=this.geometry;this.boundingBox===null&&(this.boundingBox=new An),this.boundingBox.makeEmpty();const t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,Gs),this.boundingBox.expandByPoint(Gs)}computeBoundingSphere(){const e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new Rn),this.boundingSphere.makeEmpty();const t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,Gs),this.boundingSphere.expandByPoint(Gs)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}raycast(e,t){const n=this.material,i=this.matrixWorld;n!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Wr.copy(this.boundingSphere),Wr.applyMatrix4(i),e.ray.intersectsSphere(Wr)!==!1&&(rl.copy(i).invert(),Xr.copy(e.ray).applyMatrix4(rl),!(this.boundingBox!==null&&Xr.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(e,t,Xr)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){const e=new wt,t=this.geometry.attributes.skinWeight;for(let n=0,i=t.count;n<i;n++){e.fromBufferAttribute(t,n);const s=1/e.manhattanLength();s!==1/0?e.multiplyScalar(s):e.set(1,0,0,0),t.setXYZW(n,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===La?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===gh?this.bindMatrixInverse.copy(this.bindMatrix).invert():console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){const n=this.skeleton,i=this.geometry;nl.fromBufferAttribute(i.attributes.skinIndex,e),il.fromBufferAttribute(i.attributes.skinWeight,e),tl.copy(t).applyMatrix4(this.bindMatrix),t.set(0,0,0);for(let s=0;s<4;s++){const r=il.getComponent(s);if(r!==0){const a=nl.getComponent(s);sl.multiplyMatrices(n.bones[a].matrixWorld,n.boneInverses[a]),t.addScaledVector(Eu.copy(tl).applyMatrix4(sl),r)}}return t.applyMatrix4(this.bindMatrixInverse)}}class Tc extends Ft{constructor(){super(),this.isBone=!0,this.type="Bone"}}class Ac extends Wt{constructor(e=null,t=1,n=1,i,s,r,a,l,h=Qt,u=Qt,c,d){super(null,r,a,l,h,u,i,s,c,d),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const ol=new pt,bu=new pt;class ma{constructor(e=[],t=[]){this.uuid=Sn(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){const e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,i=this.bones.length;n<i;n++)this.boneInverses.push(new pt)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){const n=new pt;this.bones[e]&&n.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(n)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&n.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}}update(){const e=this.bones,t=this.boneInverses,n=this.boneMatrices,i=this.boneTexture;for(let s=0,r=e.length;s<r;s++){const a=e[s]?e[s].matrixWorld:bu;ol.multiplyMatrices(a,t[s]),ol.toArray(n,s*16)}i!==null&&(i.needsUpdate=!0)}clone(){return new ma(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);const t=new Float32Array(e*e*4);t.set(this.boneMatrices);const n=new Ac(t,e,e,pn,yn);return n.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=n,this}getBoneByName(e){for(let t=0,n=this.bones.length;t<n;t++){const i=this.bones[t];if(i.name===e)return i}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let n=0,i=e.bones.length;n<i;n++){const s=e.bones[n];let r=t[s];r===void 0&&(console.warn("THREE.Skeleton: No bone found with UUID:",s),r=new Tc),this.bones.push(r),this.boneInverses.push(new pt().fromArray(e.boneInverses[n]))}return this.init(),this}toJSON(){const e={metadata:{version:4.6,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;const t=this.bones,n=this.boneInverses;for(let i=0,s=t.length;i<s;i++){const r=t[i];e.bones.push(r.uuid);const a=n[i];e.boneInverses.push(a.toArray())}return e}}class $o extends en{constructor(e,t,n,i=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=i}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const Ni=new pt,al=new pt,Ws=[],ll=new An,Tu=new pt,as=new Nt,ls=new Rn;class Au extends Nt{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new $o(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let i=0;i<n;i++)this.setMatrixAt(i,Tu)}computeBoundingBox(){const e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new An),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Ni),ll.copy(e.boundingBox).applyMatrix4(Ni),this.boundingBox.union(ll)}computeBoundingSphere(){const e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new Rn),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Ni),ls.copy(e.boundingSphere).applyMatrix4(Ni),this.boundingSphere.union(ls)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){const n=t.morphTargetInfluences,i=this.morphTexture.source.data.data,s=n.length+1,r=e*s+1;for(let a=0;a<n.length;a++)n[a]=i[r+a]}raycast(e,t){const n=this.matrixWorld,i=this.count;if(as.geometry=this.geometry,as.material=this.material,as.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),ls.copy(this.boundingSphere),ls.applyMatrix4(n),e.ray.intersectsSphere(ls)!==!1))for(let s=0;s<i;s++){this.getMatrixAt(s,Ni),al.multiplyMatrices(n,Ni),as.matrixWorld=al,as.raycast(e,Ws);for(let r=0,a=Ws.length;r<a;r++){const l=Ws[r];l.instanceId=s,l.object=this,t.push(l)}Ws.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new $o(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}setMorphAt(e,t){const n=t.morphTargetInfluences,i=n.length+1;this.morphTexture===null&&(this.morphTexture=new Ac(new Float32Array(i*this.count),i,this.count,oa,yn));const s=this.morphTexture.source.data.data;let r=0;for(let h=0;h<n.length;h++)r+=n[h];const a=this.geometry.morphTargetsRelative?1:1-r,l=i*e;s[l]=a,s.set(n,l+1)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}}const qr=new H,Ru=new H,Cu=new dt;class fi{constructor(e=new H(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,i){return this.normal.set(e,t,n),this.constant=i,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const i=qr.subVectors(n,t).cross(Ru.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(i,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const n=e.delta(qr),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/i;return s<0||s>1?null:t.copy(e.start).addScaledVector(n,s)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||Cu.getNormalMatrix(e),i=this.coplanarPoint(qr).applyMatrix4(e),s=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const li=new Rn,Xs=new H;class va{constructor(e=new fi,t=new fi,n=new fi,i=new fi,s=new fi,r=new fi){this.planes=[e,t,n,i,s,r]}set(e,t,n,i,s,r){const a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(n),a[3].copy(i),a[4].copy(s),a[5].copy(r),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=kn){const n=this.planes,i=e.elements,s=i[0],r=i[1],a=i[2],l=i[3],h=i[4],u=i[5],c=i[6],d=i[7],f=i[8],m=i[9],g=i[10],v=i[11],p=i[12],x=i[13],y=i[14],_=i[15];if(n[0].setComponents(l-s,d-h,v-f,_-p).normalize(),n[1].setComponents(l+s,d+h,v+f,_+p).normalize(),n[2].setComponents(l+r,d+u,v+m,_+x).normalize(),n[3].setComponents(l-r,d-u,v-m,_-x).normalize(),n[4].setComponents(l-a,d-c,v-g,_-y).normalize(),t===kn)n[5].setComponents(l+a,d+c,v+g,_+y).normalize();else if(t===dr)n[5].setComponents(a,c,g,y).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),li.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),li.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(li)}intersectsSprite(e){return li.center.set(0,0,0),li.radius=.7071067811865476,li.applyMatrix4(e.matrixWorld),this.intersectsSphere(li)}intersectsSphere(e){const t=this.planes,n=e.center,i=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(n)<i)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const i=t[n];if(Xs.x=i.normal.x>0?e.max.x:e.min.x,Xs.y=i.normal.y>0?e.max.y:e.min.y,Xs.z=i.normal.z>0?e.max.z:e.min.z,i.distanceToPoint(Xs)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class Rc extends En{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new lt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const fr=new H,pr=new H,cl=new pt,cs=new vr,qs=new Rn,Yr=new H,hl=new H;class ga extends Ft{constructor(e=new rn,t=new Rc){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[0];for(let i=1,s=t.count;i<s;i++)fr.fromBufferAttribute(t,i-1),pr.fromBufferAttribute(t,i),n[i]=n[i-1],n[i]+=fr.distanceTo(pr);e.setAttribute("lineDistance",new Ot(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const n=this.geometry,i=this.matrixWorld,s=e.params.Line.threshold,r=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),qs.copy(n.boundingSphere),qs.applyMatrix4(i),qs.radius+=s,e.ray.intersectsSphere(qs)===!1)return;cl.copy(i).invert(),cs.copy(e.ray).applyMatrix4(cl);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,h=this.isLineSegments?2:1,u=n.index,d=n.attributes.position;if(u!==null){const f=Math.max(0,r.start),m=Math.min(u.count,r.start+r.count);for(let g=f,v=m-1;g<v;g+=h){const p=u.getX(g),x=u.getX(g+1),y=Ys(this,e,cs,l,p,x,g);y&&t.push(y)}if(this.isLineLoop){const g=u.getX(m-1),v=u.getX(f),p=Ys(this,e,cs,l,g,v,m-1);p&&t.push(p)}}else{const f=Math.max(0,r.start),m=Math.min(d.count,r.start+r.count);for(let g=f,v=m-1;g<v;g+=h){const p=Ys(this,e,cs,l,g,g+1,g);p&&t.push(p)}if(this.isLineLoop){const g=Ys(this,e,cs,l,m-1,f,m-1);g&&t.push(g)}}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,r=i.length;s<r;s++){const a=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}function Ys(o,e,t,n,i,s,r){const a=o.geometry.attributes.position;if(fr.fromBufferAttribute(a,i),pr.fromBufferAttribute(a,s),t.distanceSqToSegment(fr,pr,Yr,hl)>n)return;Yr.applyMatrix4(o.matrixWorld);const h=e.ray.origin.distanceTo(Yr);if(!(h<e.near||h>e.far))return{distance:h,point:hl.clone().applyMatrix4(o.matrixWorld),index:r,face:null,faceIndex:null,barycoord:null,object:o}}const ul=new H,dl=new H;class Pu extends ga{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[];for(let i=0,s=t.count;i<s;i+=2)ul.fromBufferAttribute(t,i),dl.fromBufferAttribute(t,i+1),n[i]=i===0?0:n[i-1],n[i+1]=n[i]+ul.distanceTo(dl);e.setAttribute("lineDistance",new Ot(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class Lu extends ga{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}}class Cc extends En{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new lt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const fl=new pt,Jo=new vr,js=new Rn,Ks=new H;class Iu extends Ft{constructor(e=new rn,t=new Cc){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const n=this.geometry,i=this.matrixWorld,s=e.params.Points.threshold,r=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),js.copy(n.boundingSphere),js.applyMatrix4(i),js.radius+=s,e.ray.intersectsSphere(js)===!1)return;fl.copy(i).invert(),Jo.copy(e.ray).applyMatrix4(fl);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,h=n.index,c=n.attributes.position;if(h!==null){const d=Math.max(0,r.start),f=Math.min(h.count,r.start+r.count);for(let m=d,g=f;m<g;m++){const v=h.getX(m);Ks.fromBufferAttribute(c,v),pl(Ks,v,l,i,e,t,this)}}else{const d=Math.max(0,r.start),f=Math.min(c.count,r.start+r.count);for(let m=d,g=f;m<g;m++)Ks.fromBufferAttribute(c,m),pl(Ks,m,l,i,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,r=i.length;s<r;s++){const a=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}function pl(o,e,t,n,i,s,r){const a=Jo.distanceSqToPoint(o);if(a<t){const l=new H;Jo.closestPointToPoint(o,l),l.applyMatrix4(n);const h=i.ray.origin.distanceTo(l);if(h<i.near||h>i.far)return;s.push({distance:h,distanceToRay:Math.sqrt(a),point:l,index:e,face:null,faceIndex:null,barycoord:null,object:r})}}class Pc extends Wt{constructor(e,t,n,i,s,r,a,l,h,u=Bi){if(u!==Bi&&u!==qi)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&u===Bi&&(n=gi),n===void 0&&u===qi&&(n=Xi),super(null,i,s,r,a,l,u,n,h),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=a!==void 0?a:Qt,this.minFilter=l!==void 0?l:Qt,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new da(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class gr extends rn{constructor(e=1,t=32,n=0,i=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:n,thetaLength:i},t=Math.max(3,t);const s=[],r=[],a=[],l=[],h=new H,u=new ft;r.push(0,0,0),a.push(0,0,1),l.push(.5,.5);for(let c=0,d=3;c<=t;c++,d+=3){const f=n+c/t*i;h.x=e*Math.cos(f),h.y=e*Math.sin(f),r.push(h.x,h.y,h.z),a.push(0,0,1),u.x=(r[d]/e+1)/2,u.y=(r[d+1]/e+1)/2,l.push(u.x,u.y)}for(let c=1;c<=t;c++)s.push(c,c+1,0);this.setIndex(s),this.setAttribute("position",new Ot(r,3)),this.setAttribute("normal",new Ot(a,3)),this.setAttribute("uv",new Ot(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new gr(e.radius,e.segments,e.thetaStart,e.thetaLength)}}class _r extends rn{constructor(e=1,t=1,n=1,i=32,s=1,r=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:i,heightSegments:s,openEnded:r,thetaStart:a,thetaLength:l};const h=this;i=Math.floor(i),s=Math.floor(s);const u=[],c=[],d=[],f=[];let m=0;const g=[],v=n/2;let p=0;x(),r===!1&&(e>0&&y(!0),t>0&&y(!1)),this.setIndex(u),this.setAttribute("position",new Ot(c,3)),this.setAttribute("normal",new Ot(d,3)),this.setAttribute("uv",new Ot(f,2));function x(){const _=new H,T=new H;let C=0;const I=(t-e)/n;for(let P=0;P<=s;P++){const S=[],M=P/s,b=M*(t-e)+e;for(let F=0;F<=i;F++){const U=F/i,W=U*l+a,q=Math.sin(W),ee=Math.cos(W);T.x=b*q,T.y=-M*n+v,T.z=b*ee,c.push(T.x,T.y,T.z),_.set(q,I,ee).normalize(),d.push(_.x,_.y,_.z),f.push(U,1-M),S.push(m++)}g.push(S)}for(let P=0;P<i;P++)for(let S=0;S<s;S++){const M=g[S][P],b=g[S+1][P],F=g[S+1][P+1],U=g[S][P+1];(e>0||S!==0)&&(u.push(M,b,U),C+=3),(t>0||S!==s-1)&&(u.push(b,F,U),C+=3)}h.addGroup(p,C,0),p+=C}function y(_){const T=m,C=new ft,I=new H;let P=0;const S=_===!0?e:t,M=_===!0?1:-1;for(let F=1;F<=i;F++)c.push(0,v*M,0),d.push(0,M,0),f.push(.5,.5),m++;const b=m;for(let F=0;F<=i;F++){const W=F/i*l+a,q=Math.cos(W),ee=Math.sin(W);I.x=S*ee,I.y=v*M,I.z=S*q,c.push(I.x,I.y,I.z),d.push(0,M,0),C.x=q*.5+.5,C.y=ee*.5*M+.5,f.push(C.x,C.y),m++}for(let F=0;F<i;F++){const U=T+F,W=b+F;_===!0?u.push(W,W+1,U):u.push(W+1,W,U),P+=3}h.addGroup(p,P,_===!0?1:2),p+=P}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new _r(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class _a extends _r{constructor(e=1,t=1,n=32,i=1,s=!1,r=0,a=Math.PI*2){super(0,e,t,n,i,s,r,a),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:n,heightSegments:i,openEnded:s,thetaStart:r,thetaLength:a}}static fromJSON(e){return new _a(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class xr extends rn{constructor(e=1,t=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:i};const s=e/2,r=t/2,a=Math.floor(n),l=Math.floor(i),h=a+1,u=l+1,c=e/a,d=t/l,f=[],m=[],g=[],v=[];for(let p=0;p<u;p++){const x=p*d-r;for(let y=0;y<h;y++){const _=y*c-s;m.push(_,-x,0),g.push(0,0,1),v.push(y/a),v.push(1-p/l)}}for(let p=0;p<l;p++)for(let x=0;x<a;x++){const y=x+h*p,_=x+h*(p+1),T=x+1+h*(p+1),C=x+1+h*p;f.push(y,_,C),f.push(_,T,C)}this.setIndex(f),this.setAttribute("position",new Ot(m,3)),this.setAttribute("normal",new Ot(g,3)),this.setAttribute("uv",new Ot(v,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new xr(e.width,e.height,e.widthSegments,e.heightSegments)}}class zi extends rn{constructor(e=1,t=32,n=16,i=0,s=Math.PI*2,r=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:i,phiLength:s,thetaStart:r,thetaLength:a},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));const l=Math.min(r+a,Math.PI);let h=0;const u=[],c=new H,d=new H,f=[],m=[],g=[],v=[];for(let p=0;p<=n;p++){const x=[],y=p/n;let _=0;p===0&&r===0?_=.5/t:p===n&&l===Math.PI&&(_=-.5/t);for(let T=0;T<=t;T++){const C=T/t;c.x=-e*Math.cos(i+C*s)*Math.sin(r+y*a),c.y=e*Math.cos(r+y*a),c.z=e*Math.sin(i+C*s)*Math.sin(r+y*a),m.push(c.x,c.y,c.z),d.copy(c).normalize(),g.push(d.x,d.y,d.z),v.push(C+_,1-y),x.push(h++)}u.push(x)}for(let p=0;p<n;p++)for(let x=0;x<t;x++){const y=u[p][x+1],_=u[p][x],T=u[p+1][x],C=u[p+1][x+1];(p!==0||r>0)&&f.push(y,_,C),(p!==n-1||l<Math.PI)&&f.push(_,T,C)}this.setIndex(f),this.setAttribute("position",new Ot(m,3)),this.setAttribute("normal",new Ot(g,3)),this.setAttribute("uv",new Ot(v,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new zi(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class Es extends rn{constructor(e=1,t=.4,n=12,i=48,s=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:n,tubularSegments:i,arc:s},n=Math.floor(n),i=Math.floor(i);const r=[],a=[],l=[],h=[],u=new H,c=new H,d=new H;for(let f=0;f<=n;f++)for(let m=0;m<=i;m++){const g=m/i*s,v=f/n*Math.PI*2;c.x=(e+t*Math.cos(v))*Math.cos(g),c.y=(e+t*Math.cos(v))*Math.sin(g),c.z=t*Math.sin(v),a.push(c.x,c.y,c.z),u.x=e*Math.cos(g),u.y=e*Math.sin(g),d.subVectors(c,u).normalize(),l.push(d.x,d.y,d.z),h.push(m/i),h.push(f/n)}for(let f=1;f<=n;f++)for(let m=1;m<=i;m++){const g=(i+1)*f+m-1,v=(i+1)*(f-1)+m-1,p=(i+1)*(f-1)+m,x=(i+1)*f+m;r.push(g,v,x),r.push(v,p,x)}this.setIndex(r),this.setAttribute("position",new Ot(a,3)),this.setAttribute("normal",new Ot(l,3)),this.setAttribute("uv",new Ot(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Es(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}}class yr extends En{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new lt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new lt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=ha,this.normalScale=new ft(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new bn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Cn extends yr{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new ft(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return yt(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new lt(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new lt(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new lt(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}}class Nu extends En{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=yh,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class Du extends En{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}class xa extends En{constructor(e){super(),this.isMeshMatcapMaterial=!0,this.defines={MATCAP:""},this.type="MeshMatcapMaterial",this.color=new lt(16777215),this.matcap=null,this.map=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=ha,this.normalScale=new ft(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.alphaMap=null,this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={MATCAP:""},this.color.copy(e.color),this.matcap=e.matcap,this.map=e.map,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.alphaMap=e.alphaMap,this.flatShading=e.flatShading,this.fog=e.fog,this}}function Zs(o,e,t){return!o||!t&&o.constructor===e?o:typeof e.BYTES_PER_ELEMENT=="number"?new e(o):Array.prototype.slice.call(o)}function Uu(o){return ArrayBuffer.isView(o)&&!(o instanceof DataView)}function Fu(o){function e(i,s){return o[i]-o[s]}const t=o.length,n=new Array(t);for(let i=0;i!==t;++i)n[i]=i;return n.sort(e),n}function ml(o,e,t){const n=o.length,i=new o.constructor(n);for(let s=0,r=0;r!==n;++s){const a=t[s]*e;for(let l=0;l!==e;++l)i[r++]=o[a+l]}return i}function Lc(o,e,t,n){let i=1,s=o[0];for(;s!==void 0&&s[n]===void 0;)s=o[i++];if(s===void 0)return;let r=s[n];if(r!==void 0)if(Array.isArray(r))do r=s[n],r!==void 0&&(e.push(s.time),t.push(...r)),s=o[i++];while(s!==void 0);else if(r.toArray!==void 0)do r=s[n],r!==void 0&&(e.push(s.time),r.toArray(t,t.length)),s=o[i++];while(s!==void 0);else do r=s[n],r!==void 0&&(e.push(s.time),t.push(r)),s=o[i++];while(s!==void 0)}class bs{constructor(e,t,n,i){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=i!==void 0?i:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){const t=this.parameterPositions;let n=this._cachedIndex,i=t[n],s=t[n-1];n:{e:{let r;t:{i:if(!(e<i)){for(let a=n+2;;){if(i===void 0){if(e<s)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(s=i,i=t[++n],e<i)break e}r=t.length;break t}if(!(e>=s)){const a=t[1];e<a&&(n=2,s=a);for(let l=n-2;;){if(s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(i=s,s=t[--n-1],e>=s)break e}r=n,n=0;break t}break n}for(;n<r;){const a=n+r>>>1;e<t[a]?r=a:n=a+1}if(i=t[n],s=t[n-1],s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,s,i)}return this.interpolate_(n,s,e,i)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){const t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,s=e*i;for(let r=0;r!==i;++r)t[r]=n[s+r];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}}class Bu extends bs{constructor(e,t,n,i){super(e,t,n,i),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Ia,endingEnd:Ia}}intervalChanged_(e,t,n){const i=this.parameterPositions;let s=e-2,r=e+1,a=i[s],l=i[r];if(a===void 0)switch(this.getSettings_().endingStart){case Na:s=e,a=2*t-n;break;case Da:s=i.length-2,a=t+i[s]-i[s+1];break;default:s=e,a=n}if(l===void 0)switch(this.getSettings_().endingEnd){case Na:r=e,l=2*n-t;break;case Da:r=1,l=n+i[1]-i[0];break;default:r=e-1,l=t}const h=(n-t)*.5,u=this.valueSize;this._weightPrev=h/(t-a),this._weightNext=h/(l-n),this._offsetPrev=s*u,this._offsetNext=r*u}interpolate_(e,t,n,i){const s=this.resultBuffer,r=this.sampleValues,a=this.valueSize,l=e*a,h=l-a,u=this._offsetPrev,c=this._offsetNext,d=this._weightPrev,f=this._weightNext,m=(n-t)/(i-t),g=m*m,v=g*m,p=-d*v+2*d*g-d*m,x=(1+d)*v+(-1.5-2*d)*g+(-.5+d)*m+1,y=(-1-f)*v+(1.5+f)*g+.5*m,_=f*v-f*g;for(let T=0;T!==a;++T)s[T]=p*r[u+T]+x*r[h+T]+y*r[l+T]+_*r[c+T];return s}}class Ou extends bs{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){const s=this.resultBuffer,r=this.sampleValues,a=this.valueSize,l=e*a,h=l-a,u=(n-t)/(i-t),c=1-u;for(let d=0;d!==a;++d)s[d]=r[h+d]*c+r[l+d]*u;return s}}class zu extends bs{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e){return this.copySampleValue_(e-1)}}class Pn{constructor(e,t,n,i){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=Zs(t,this.TimeBufferType),this.values=Zs(n,this.ValueBufferType),this.setInterpolation(i||this.DefaultInterpolation)}static toJSON(e){const t=e.constructor;let n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:Zs(e.times,Array),values:Zs(e.values,Array)};const i=e.getInterpolation();i!==e.DefaultInterpolation&&(n.interpolation=i)}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new zu(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new Ou(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new Bu(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case ys:t=this.InterpolantFactoryMethodDiscrete;break;case Ms:t=this.InterpolantFactoryMethodLinear;break;case Er:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){const n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return ys;case this.InterpolantFactoryMethodLinear:return Ms;case this.InterpolantFactoryMethodSmooth:return Er}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){const t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]+=e}return this}scale(e){if(e!==1){const t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]*=e}return this}trim(e,t){const n=this.times,i=n.length;let s=0,r=i-1;for(;s!==i&&n[s]<e;)++s;for(;r!==-1&&n[r]>t;)--r;if(++r,s!==0||r!==i){s>=r&&(r=Math.max(r,1),s=r-1);const a=this.getValueSize();this.times=n.slice(s,r),this.values=this.values.slice(s*a,r*a)}return this}validate(){let e=!0;const t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);const n=this.times,i=this.values,s=n.length;s===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let r=null;for(let a=0;a!==s;a++){const l=n[a];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,l),e=!1;break}if(r!==null&&r>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,l,r),e=!1;break}r=l}if(i!==void 0&&Uu(i))for(let a=0,l=i.length;a!==l;++a){const h=i[a];if(isNaN(h)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,h),e=!1;break}}return e}optimize(){const e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),i=this.getInterpolation()===Er,s=e.length-1;let r=1;for(let a=1;a<s;++a){let l=!1;const h=e[a],u=e[a+1];if(h!==u&&(a!==1||h!==e[0]))if(i)l=!0;else{const c=a*n,d=c-n,f=c+n;for(let m=0;m!==n;++m){const g=t[c+m];if(g!==t[d+m]||g!==t[f+m]){l=!0;break}}}if(l){if(a!==r){e[r]=e[a];const c=a*n,d=r*n;for(let f=0;f!==n;++f)t[d+f]=t[c+f]}++r}}if(s>0){e[r]=e[s];for(let a=s*n,l=r*n,h=0;h!==n;++h)t[l+h]=t[a+h];++r}return r!==e.length?(this.times=e.slice(0,r),this.values=t.slice(0,r*n)):(this.times=e,this.values=t),this}clone(){const e=this.times.slice(),t=this.values.slice(),n=this.constructor,i=new n(this.name,e,t);return i.createInterpolant=this.createInterpolant,i}}Pn.prototype.TimeBufferType=Float32Array;Pn.prototype.ValueBufferType=Float32Array;Pn.prototype.DefaultInterpolation=Ms;class es extends Pn{constructor(e,t,n){super(e,t,n)}}es.prototype.ValueTypeName="bool";es.prototype.ValueBufferType=Array;es.prototype.DefaultInterpolation=ys;es.prototype.InterpolantFactoryMethodLinear=void 0;es.prototype.InterpolantFactoryMethodSmooth=void 0;class Ic extends Pn{}Ic.prototype.ValueTypeName="color";class Ki extends Pn{}Ki.prototype.ValueTypeName="number";class Vu extends bs{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){const s=this.resultBuffer,r=this.sampleValues,a=this.valueSize,l=(n-t)/(i-t);let h=e*a;for(let u=h+a;h!==u;h+=4)Tn.slerpFlat(s,0,r,h-a,r,h,l);return s}}class Zi extends Pn{InterpolantFactoryMethodLinear(e){return new Vu(this.times,this.values,this.getValueSize(),e)}}Zi.prototype.ValueTypeName="quaternion";Zi.prototype.InterpolantFactoryMethodSmooth=void 0;class ts extends Pn{constructor(e,t,n){super(e,t,n)}}ts.prototype.ValueTypeName="string";ts.prototype.ValueBufferType=Array;ts.prototype.DefaultInterpolation=ys;ts.prototype.InterpolantFactoryMethodLinear=void 0;ts.prototype.InterpolantFactoryMethodSmooth=void 0;class $i extends Pn{}$i.prototype.ValueTypeName="vector";class ku{constructor(e="",t=-1,n=[],i=_h){this.name=e,this.tracks=n,this.duration=t,this.blendMode=i,this.uuid=Sn(),this.duration<0&&this.resetDuration()}static parse(e){const t=[],n=e.tracks,i=1/(e.fps||1);for(let r=0,a=n.length;r!==a;++r)t.push(Gu(n[r]).scale(i));const s=new this(e.name,e.duration,t,e.blendMode);return s.uuid=e.uuid,s}static toJSON(e){const t=[],n=e.tracks,i={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode};for(let s=0,r=n.length;s!==r;++s)t.push(Pn.toJSON(n[s]));return i}static CreateFromMorphTargetSequence(e,t,n,i){const s=t.length,r=[];for(let a=0;a<s;a++){let l=[],h=[];l.push((a+s-1)%s,a,(a+1)%s),h.push(0,1,0);const u=Fu(l);l=ml(l,1,u),h=ml(h,1,u),!i&&l[0]===0&&(l.push(s),h.push(h[0])),r.push(new Ki(".morphTargetInfluences["+t[a].name+"]",l,h).scale(1/n))}return new this(e,-1,r)}static findByName(e,t){let n=e;if(!Array.isArray(e)){const i=e;n=i.geometry&&i.geometry.animations||i.animations}for(let i=0;i<n.length;i++)if(n[i].name===t)return n[i];return null}static CreateClipsFromMorphTargetSequences(e,t,n){const i={},s=/^([\w-]*?)([\d]+)$/;for(let a=0,l=e.length;a<l;a++){const h=e[a],u=h.name.match(s);if(u&&u.length>1){const c=u[1];let d=i[c];d||(i[c]=d=[]),d.push(h)}}const r=[];for(const a in i)r.push(this.CreateFromMorphTargetSequence(a,i[a],t,n));return r}static parseAnimation(e,t){if(!e)return console.error("THREE.AnimationClip: No animation in JSONLoader data."),null;const n=function(c,d,f,m,g){if(f.length!==0){const v=[],p=[];Lc(f,v,p,m),v.length!==0&&g.push(new c(d,v,p))}},i=[],s=e.name||"default",r=e.fps||30,a=e.blendMode;let l=e.length||-1;const h=e.hierarchy||[];for(let c=0;c<h.length;c++){const d=h[c].keys;if(!(!d||d.length===0))if(d[0].morphTargets){const f={};let m;for(m=0;m<d.length;m++)if(d[m].morphTargets)for(let g=0;g<d[m].morphTargets.length;g++)f[d[m].morphTargets[g]]=-1;for(const g in f){const v=[],p=[];for(let x=0;x!==d[m].morphTargets.length;++x){const y=d[m];v.push(y.time),p.push(y.morphTarget===g?1:0)}i.push(new Ki(".morphTargetInfluence["+g+"]",v,p))}l=f.length*r}else{const f=".bones["+t[c].name+"]";n($i,f+".position",d,"pos",i),n(Zi,f+".quaternion",d,"rot",i),n($i,f+".scale",d,"scl",i)}}return i.length===0?null:new this(s,l,i,a)}resetDuration(){const e=this.tracks;let t=0;for(let n=0,i=e.length;n!==i;++n){const s=this.tracks[n];t=Math.max(t,s.times[s.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){const e=[];for(let t=0;t<this.tracks.length;t++)e.push(this.tracks[t].clone());return new this.constructor(this.name,this.duration,e,this.blendMode)}toJSON(){return this.constructor.toJSON(this)}}function Hu(o){switch(o.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return Ki;case"vector":case"vector2":case"vector3":case"vector4":return $i;case"color":return Ic;case"quaternion":return Zi;case"bool":case"boolean":return es;case"string":return ts}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+o)}function Gu(o){if(o.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");const e=Hu(o.type);if(o.times===void 0){const t=[],n=[];Lc(o.keys,t,n,"value"),o.times=t,o.values=n}return e.parse!==void 0?e.parse(o):new e(o.name,o.times,o.values,o.interpolation)}const ti={enabled:!1,files:{},add:function(o,e){this.enabled!==!1&&(this.files[o]=e)},get:function(o){if(this.enabled!==!1)return this.files[o]},remove:function(o){delete this.files[o]},clear:function(){this.files={}}};class Wu{constructor(e,t,n){const i=this;let s=!1,r=0,a=0,l;const h=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.itemStart=function(u){a++,s===!1&&i.onStart!==void 0&&i.onStart(u,r,a),s=!0},this.itemEnd=function(u){r++,i.onProgress!==void 0&&i.onProgress(u,r,a),r===a&&(s=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(u){i.onError!==void 0&&i.onError(u)},this.resolveURL=function(u){return l?l(u):u},this.setURLModifier=function(u){return l=u,this},this.addHandler=function(u,c){return h.push(u,c),this},this.removeHandler=function(u){const c=h.indexOf(u);return c!==-1&&h.splice(c,2),this},this.getHandler=function(u){for(let c=0,d=h.length;c<d;c+=2){const f=h[c],m=h[c+1];if(f.global&&(f.lastIndex=0),f.test(u))return m}return null}}}const Xu=new Wu;class xi{constructor(e){this.manager=e!==void 0?e:Xu,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const n=this;return new Promise(function(i,s){n.load(e,i,t,s)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}xi.DEFAULT_MATERIAL_NAME="__DEFAULT";const Fn={};class qu extends Error{constructor(e,t){super(e),this.response=t}}class Nc extends xi{constructor(e){super(e)}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=ti.get(e);if(s!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(s),this.manager.itemEnd(e)},0),s;if(Fn[e]!==void 0){Fn[e].push({onLoad:t,onProgress:n,onError:i});return}Fn[e]=[],Fn[e].push({onLoad:t,onProgress:n,onError:i});const r=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),a=this.mimeType,l=this.responseType;fetch(r).then(h=>{if(h.status===200||h.status===0){if(h.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||h.body===void 0||h.body.getReader===void 0)return h;const u=Fn[e],c=h.body.getReader(),d=h.headers.get("X-File-Size")||h.headers.get("Content-Length"),f=d?parseInt(d):0,m=f!==0;let g=0;const v=new ReadableStream({start(p){x();function x(){c.read().then(({done:y,value:_})=>{if(y)p.close();else{g+=_.byteLength;const T=new ProgressEvent("progress",{lengthComputable:m,loaded:g,total:f});for(let C=0,I=u.length;C<I;C++){const P=u[C];P.onProgress&&P.onProgress(T)}p.enqueue(_),x()}},y=>{p.error(y)})}}});return new Response(v)}else throw new qu(`fetch for "${h.url}" responded with ${h.status}: ${h.statusText}`,h)}).then(h=>{switch(l){case"arraybuffer":return h.arrayBuffer();case"blob":return h.blob();case"document":return h.text().then(u=>new DOMParser().parseFromString(u,a));case"json":return h.json();default:if(a===void 0)return h.text();{const c=/charset="?([^;"\s]*)"?/i.exec(a),d=c&&c[1]?c[1].toLowerCase():void 0,f=new TextDecoder(d);return h.arrayBuffer().then(m=>f.decode(m))}}}).then(h=>{ti.add(e,h);const u=Fn[e];delete Fn[e];for(let c=0,d=u.length;c<d;c++){const f=u[c];f.onLoad&&f.onLoad(h)}}).catch(h=>{const u=Fn[e];if(u===void 0)throw this.manager.itemError(e),h;delete Fn[e];for(let c=0,d=u.length;c<d;c++){const f=u[c];f.onError&&f.onError(h)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}}class Dc extends xi{constructor(e){super(e)}load(e,t,n,i){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=this,r=ti.get(e);if(r!==void 0)return s.manager.itemStart(e),setTimeout(function(){t&&t(r),s.manager.itemEnd(e)},0),r;const a=Ss("img");function l(){u(),ti.add(e,this),t&&t(this),s.manager.itemEnd(e)}function h(c){u(),i&&i(c),s.manager.itemError(e),s.manager.itemEnd(e)}function u(){a.removeEventListener("load",l,!1),a.removeEventListener("error",h,!1)}return a.addEventListener("load",l,!1),a.addEventListener("error",h,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),s.manager.itemStart(e),a.src=e,a}}class Yu extends xi{constructor(e){super(e)}load(e,t,n,i){const s=new fa;s.colorSpace=Vt;const r=new Dc(this.manager);r.setCrossOrigin(this.crossOrigin),r.setPath(this.path);let a=0;function l(h){r.load(e[h],function(u){s.images[h]=u,a++,a===6&&(s.needsUpdate=!0,t&&t(s))},void 0,i)}for(let h=0;h<e.length;++h)l(h);return s}}class Uc extends xi{constructor(e){super(e)}load(e,t,n,i){const s=new Wt,r=new Dc(this.manager);return r.setCrossOrigin(this.crossOrigin),r.setPath(this.path),r.load(e,function(a){s.image=a,s.needsUpdate=!0,t!==void 0&&t(s)},n,i),s}}class ya extends Ft{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new lt(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}}const jr=new pt,vl=new H,gl=new H;class Ma{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new ft(512,512),this.map=null,this.mapPass=null,this.matrix=new pt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new va,this._frameExtents=new ft(1,1),this._viewportCount=1,this._viewports=[new wt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,n=this.matrix;vl.setFromMatrixPosition(e.matrixWorld),t.position.copy(vl),gl.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(gl),t.updateMatrixWorld(),jr.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(jr),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(jr)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class ju extends Ma{constructor(){super(new $t(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(e){const t=this.camera,n=Yi*2*e.angle*this.focus,i=this.mapSize.width/this.mapSize.height,s=e.distance||t.far;(n!==t.fov||i!==t.aspect||s!==t.far)&&(t.fov=n,t.aspect=i,t.far=s,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}}class Ku extends ya{constructor(e,t,n=0,i=Math.PI/3,s=0,r=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(Ft.DEFAULT_UP),this.updateMatrix(),this.target=new Ft,this.distance=n,this.angle=i,this.penumbra=s,this.decay=r,this.map=null,this.shadow=new ju}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}const _l=new pt,hs=new H,Kr=new H;class Zu extends Ma{constructor(){super(new $t(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new ft(4,2),this._viewportCount=6,this._viewports=[new wt(2,1,1,1),new wt(0,1,1,1),new wt(3,1,1,1),new wt(1,1,1,1),new wt(3,0,1,1),new wt(1,0,1,1)],this._cubeDirections=[new H(1,0,0),new H(-1,0,0),new H(0,0,1),new H(0,0,-1),new H(0,1,0),new H(0,-1,0)],this._cubeUps=[new H(0,1,0),new H(0,1,0),new H(0,1,0),new H(0,1,0),new H(0,0,1),new H(0,0,-1)]}updateMatrices(e,t=0){const n=this.camera,i=this.matrix,s=e.distance||n.far;s!==n.far&&(n.far=s,n.updateProjectionMatrix()),hs.setFromMatrixPosition(e.matrixWorld),n.position.copy(hs),Kr.copy(n.position),Kr.add(this._cubeDirections[t]),n.up.copy(this._cubeUps[t]),n.lookAt(Kr),n.updateMatrixWorld(),i.makeTranslation(-hs.x,-hs.y,-hs.z),_l.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(_l)}}class $u extends ya{constructor(e,t,n=0,i=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=i,this.shadow=new Zu}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class Sa extends bc{constructor(e=-1,t=1,n=1,i=-1,s=.1,r=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=i,this.near=s,this.far=r,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,i,s,r){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=r,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let s=n-e,r=n+e,a=i+t,l=i-t;if(this.view!==null&&this.view.enabled){const h=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=h*this.view.offsetX,r=s+h*this.view.width,a-=u*this.view.offsetY,l=a-u*this.view.height}this.projectionMatrix.makeOrthographic(s,r,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class Ju extends Ma{constructor(){super(new Sa(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Qu extends ya{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Ft.DEFAULT_UP),this.updateMatrix(),this.target=new Ft,this.shadow=new Ju}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class gs{static decodeText(e){if(console.warn("THREE.LoaderUtils: decodeText() has been deprecated with r165 and will be removed with r175. Use TextDecoder instead."),typeof TextDecoder<"u")return new TextDecoder().decode(e);let t="";for(let n=0,i=e.length;n<i;n++)t+=String.fromCharCode(e[n]);try{return decodeURIComponent(escape(t))}catch{return t}}static extractUrlBase(e){const t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}}class ed extends xi{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&console.warn("THREE.ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"}}setOptions(e){return this.options=e,this}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=this,r=ti.get(e);if(r!==void 0){if(s.manager.itemStart(e),r.then){r.then(h=>{t&&t(h),s.manager.itemEnd(e)}).catch(h=>{i&&i(h)});return}return setTimeout(function(){t&&t(r),s.manager.itemEnd(e)},0),r}const a={};a.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",a.headers=this.requestHeader;const l=fetch(e,a).then(function(h){return h.blob()}).then(function(h){return createImageBitmap(h,Object.assign(s.options,{colorSpaceConversion:"none"}))}).then(function(h){return ti.add(e,h),t&&t(h),s.manager.itemEnd(e),h}).catch(function(h){i&&i(h),ti.remove(e),s.manager.itemError(e),s.manager.itemEnd(e)});ti.add(e,l),s.manager.itemStart(e)}}class td extends $t{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e,this.index=0}}const Ea="\\[\\]\\.:\\/",nd=new RegExp("["+Ea+"]","g"),wa="[^"+Ea+"]",id="[^"+Ea.replace("\\.","")+"]",sd=/((?:WC+[\/:])*)/.source.replace("WC",wa),rd=/(WCOD+)?/.source.replace("WCOD",id),od=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",wa),ad=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",wa),ld=new RegExp("^"+sd+rd+od+ad+"$"),cd=["material","materials","bones","map"];class hd{constructor(e,t,n){const i=n||At.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,i)}getValue(e,t){this.bind();const n=this._targetGroup.nCachedObjects_,i=this._bindings[n];i!==void 0&&i.getValue(e,t)}setValue(e,t){const n=this._bindings;for(let i=this._targetGroup.nCachedObjects_,s=n.length;i!==s;++i)n[i].setValue(e,t)}bind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}}class At{constructor(e,t,n){this.path=t,this.parsedPath=n||At.parseTrackName(t),this.node=At.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new At.Composite(e,t,n):new At(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(nd,"")}static parseTrackName(e){const t=ld.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);const n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},i=n.nodeName&&n.nodeName.lastIndexOf(".");if(i!==void 0&&i!==-1){const s=n.nodeName.substring(i+1);cd.indexOf(s)!==-1&&(n.nodeName=n.nodeName.substring(0,i),n.objectName=s)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){const n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){const n=function(s){for(let r=0;r<s.length;r++){const a=s[r];if(a.name===t||a.uuid===t)return a;const l=n(a.children);if(l)return l}return null},i=n(e.children);if(i)return i}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){const n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)e[t++]=n[i]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){const n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=e[t++]}_setValue_array_setNeedsUpdate(e,t){const n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){const n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node;const t=this.parsedPath,n=t.objectName,i=t.propertyName;let s=t.propertyIndex;if(e||(e=At.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let h=t.objectIndex;switch(n){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let u=0;u<e.length;u++)if(e[u].name===h){h=u;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(h!==void 0){if(e[h]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[h]}}const r=e[i];if(r===void 0){const h=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+h+"."+i+" but it wasn't found.",e);return}let a=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?a=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(s!==void 0){if(i==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[s]!==void 0&&(s=e.morphTargetDictionary[s])}l=this.BindingType.ArrayElement,this.resolvedProperty=r,this.propertyIndex=s}else r.fromArray!==void 0&&r.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=r):Array.isArray(r)?(l=this.BindingType.EntireArray,this.resolvedProperty=r):this.propertyName=i;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}At.Composite=hd;At.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};At.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};At.prototype.GetterByBindingType=[At.prototype._getValue_direct,At.prototype._getValue_array,At.prototype._getValue_arrayElement,At.prototype._getValue_toArray];At.prototype.SetterByBindingTypeAndVersioning=[[At.prototype._setValue_direct,At.prototype._setValue_direct_setNeedsUpdate,At.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[At.prototype._setValue_array,At.prototype._setValue_array_setNeedsUpdate,At.prototype._setValue_array_setMatrixWorldNeedsUpdate],[At.prototype._setValue_arrayElement,At.prototype._setValue_arrayElement_setNeedsUpdate,At.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[At.prototype._setValue_fromArray,At.prototype._setValue_fromArray_setNeedsUpdate,At.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];function xl(o,e,t,n){const i=ud(n);switch(t){case hc:return o*e;case dc:return o*e;case fc:return o*e*2;case oa:return o*e/i.components*i.byteLength;case aa:return o*e/i.components*i.byteLength;case pc:return o*e*2/i.components*i.byteLength;case la:return o*e*2/i.components*i.byteLength;case uc:return o*e*3/i.components*i.byteLength;case pn:return o*e*4/i.components*i.byteLength;case ca:return o*e*4/i.components*i.byteLength;case sr:case rr:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*8;case or:case ar:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*16;case wo:case To:return Math.max(o,16)*Math.max(e,8)/4;case Eo:case bo:return Math.max(o,8)*Math.max(e,8)/2;case Ao:case Ro:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*8;case Co:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*16;case Po:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*16;case Lo:return Math.floor((o+4)/5)*Math.floor((e+3)/4)*16;case Io:return Math.floor((o+4)/5)*Math.floor((e+4)/5)*16;case No:return Math.floor((o+5)/6)*Math.floor((e+4)/5)*16;case Do:return Math.floor((o+5)/6)*Math.floor((e+5)/6)*16;case Uo:return Math.floor((o+7)/8)*Math.floor((e+4)/5)*16;case Fo:return Math.floor((o+7)/8)*Math.floor((e+5)/6)*16;case Bo:return Math.floor((o+7)/8)*Math.floor((e+7)/8)*16;case Oo:return Math.floor((o+9)/10)*Math.floor((e+4)/5)*16;case zo:return Math.floor((o+9)/10)*Math.floor((e+5)/6)*16;case Vo:return Math.floor((o+9)/10)*Math.floor((e+7)/8)*16;case ko:return Math.floor((o+9)/10)*Math.floor((e+9)/10)*16;case Ho:return Math.floor((o+11)/12)*Math.floor((e+9)/10)*16;case Go:return Math.floor((o+11)/12)*Math.floor((e+11)/12)*16;case lr:case Wo:case Xo:return Math.ceil(o/4)*Math.ceil(e/4)*16;case mc:case qo:return Math.ceil(o/4)*Math.ceil(e/4)*8;case Yo:case jo:return Math.ceil(o/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function ud(o){switch(o){case Wn:case ac:return{byteLength:1,components:1};case xs:case lc:case ws:return{byteLength:2,components:1};case sa:case ra:return{byteLength:2,components:4};case gi:case ia:case yn:return{byteLength:4,components:1};case cc:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${o}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:na}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=na);/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function Fc(){let o=null,e=!1,t=null,n=null;function i(s,r){t(s,r),n=o.requestAnimationFrame(i)}return{start:function(){e!==!0&&t!==null&&(n=o.requestAnimationFrame(i),e=!0)},stop:function(){o.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){o=s}}}function dd(o){const e=new WeakMap;function t(a,l){const h=a.array,u=a.usage,c=h.byteLength,d=o.createBuffer();o.bindBuffer(l,d),o.bufferData(l,h,u),a.onUploadCallback();let f;if(h instanceof Float32Array)f=o.FLOAT;else if(h instanceof Uint16Array)a.isFloat16BufferAttribute?f=o.HALF_FLOAT:f=o.UNSIGNED_SHORT;else if(h instanceof Int16Array)f=o.SHORT;else if(h instanceof Uint32Array)f=o.UNSIGNED_INT;else if(h instanceof Int32Array)f=o.INT;else if(h instanceof Int8Array)f=o.BYTE;else if(h instanceof Uint8Array)f=o.UNSIGNED_BYTE;else if(h instanceof Uint8ClampedArray)f=o.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+h);return{buffer:d,type:f,bytesPerElement:h.BYTES_PER_ELEMENT,version:a.version,size:c}}function n(a,l,h){const u=l.array,c=l.updateRanges;if(o.bindBuffer(h,a),c.length===0)o.bufferSubData(h,0,u);else{c.sort((f,m)=>f.start-m.start);let d=0;for(let f=1;f<c.length;f++){const m=c[d],g=c[f];g.start<=m.start+m.count+1?m.count=Math.max(m.count,g.start+g.count-m.start):(++d,c[d]=g)}c.length=d+1;for(let f=0,m=c.length;f<m;f++){const g=c[f];o.bufferSubData(h,g.start*u.BYTES_PER_ELEMENT,u,g.start,g.count)}l.clearUpdateRanges()}l.onUploadCallback()}function i(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function s(a){a.isInterleavedBufferAttribute&&(a=a.data);const l=e.get(a);l&&(o.deleteBuffer(l.buffer),e.delete(a))}function r(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const u=e.get(a);(!u||u.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const h=e.get(a);if(h===void 0)e.set(a,t(a,l));else if(h.version<a.version){if(h.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(h.buffer,a,l),h.version=a.version}}return{get:i,remove:s,update:r}}var fd=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,pd=`#ifdef USE_ALPHAHASH
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
#endif`,md=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,vd=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,gd=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,_d=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,xd=`#ifdef USE_AOMAP
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
#endif`,yd=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Md=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,Sd=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Ed=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,wd=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,bd=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Td=`#ifdef USE_IRIDESCENCE
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
#endif`,Ad=`#ifdef USE_BUMPMAP
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
#endif`,Rd=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
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
	#endif
#endif`,Cd=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Pd=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Ld=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Id=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Nd=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Dd=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Ud=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,Fd=`#define PI 3.141592653589793
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
} // validated`,Bd=`#ifdef ENVMAP_TYPE_CUBE_UV
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
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
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
#endif`,Od=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,zd=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Vd=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,kd=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Hd=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Gd="gl_FragColor = linearToOutputTexel( gl_FragColor );",Wd=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Xd=`#ifdef USE_ENVMAP
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
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
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
#endif`,qd=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Yd=`#ifdef USE_ENVMAP
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
#endif`,jd=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Kd=`#ifdef USE_ENVMAP
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
#endif`,Zd=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,$d=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Jd=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Qd=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,ef=`#ifdef USE_GRADIENTMAP
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
}`,tf=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,nf=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,sf=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,rf=`uniform bool receiveShadow;
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
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
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
#endif`,of=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
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
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
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
#endif`,af=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,lf=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,cf=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,hf=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,uf=`PhysicalMaterial material;
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
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
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
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,df=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
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
}`,ff=`
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
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
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
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
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
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
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
#endif`,pf=`#if defined( RE_IndirectDiffuse )
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
#endif`,mf=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,vf=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,gf=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,_f=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,xf=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,yf=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Mf=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Sf=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Ef=`#if defined( USE_POINTS_UV )
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
#endif`,wf=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,bf=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Tf=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Af=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Rf=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Cf=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,Pf=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Lf=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,If=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Nf=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Df=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Uf=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Ff=`#ifdef USE_NORMALMAP
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
#endif`,Bf=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Of=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,zf=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Vf=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,kf=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Hf=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
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
}`,Gf=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Wf=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Xf=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,qf=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Yf=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,jf=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Kf=`#if NUM_SPOT_LIGHT_COORDS > 0
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
			float shadowIntensity;
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
			float shadowIntensity;
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
			float shadowIntensity;
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
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
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
		return mix( 1.0, shadow, shadowIntensity );
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
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
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
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,Zf=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
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
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,$f=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Jf=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,Qf=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,ep=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,tp=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,np=`#ifdef USE_SKINNING
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
#endif`,ip=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,sp=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,rp=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,op=`#ifndef saturate
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
vec3 CineonToneMapping( vec3 color ) {
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
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,ap=`#ifdef USE_TRANSMISSION
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
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,lp=`#ifdef USE_TRANSMISSION
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
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,cp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,hp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,up=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,dp=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const fp=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,pp=`uniform sampler2D t2D;
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
}`,mp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,vp=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,gp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,_p=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,xp=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
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
}`,yp=`#if DEPTH_PACKING == 3200
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
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
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
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,Mp=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
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
}`,Sp=`#define DISTANCE
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
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,Ep=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,wp=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,bp=`uniform float scale;
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
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Tp=`uniform vec3 diffuse;
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Ap=`#include <common>
#include <batching_pars_vertex>
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
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
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
}`,Rp=`uniform vec3 diffuse;
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
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
}`,Cp=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
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
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
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
}`,Pp=`#define LAMBERT
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
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
}`,Lp=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
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
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
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
}`,Ip=`#define MATCAP
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
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
}`,Np=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
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
}`,Dp=`#define NORMAL
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
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,Up=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
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
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
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
}`,Fp=`#define PHONG
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
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
}`,Bp=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
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
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
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
}`,Op=`#define STANDARD
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
#ifdef USE_DISPERSION
	uniform float dispersion;
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
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
}`,zp=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
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
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
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
}`,Vp=`#define TOON
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
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
}`,kp=`uniform float size;
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
	#include <morphinstance_vertex>
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
}`,Hp=`uniform vec3 diffuse;
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
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
}`,Gp=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
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
}`,Wp=`uniform vec3 color;
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
}`,Xp=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
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
}`,qp=`uniform vec3 diffuse;
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
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
}`,vt={alphahash_fragment:fd,alphahash_pars_fragment:pd,alphamap_fragment:md,alphamap_pars_fragment:vd,alphatest_fragment:gd,alphatest_pars_fragment:_d,aomap_fragment:xd,aomap_pars_fragment:yd,batching_pars_vertex:Md,batching_vertex:Sd,begin_vertex:Ed,beginnormal_vertex:wd,bsdfs:bd,iridescence_fragment:Td,bumpmap_pars_fragment:Ad,clipping_planes_fragment:Rd,clipping_planes_pars_fragment:Cd,clipping_planes_pars_vertex:Pd,clipping_planes_vertex:Ld,color_fragment:Id,color_pars_fragment:Nd,color_pars_vertex:Dd,color_vertex:Ud,common:Fd,cube_uv_reflection_fragment:Bd,defaultnormal_vertex:Od,displacementmap_pars_vertex:zd,displacementmap_vertex:Vd,emissivemap_fragment:kd,emissivemap_pars_fragment:Hd,colorspace_fragment:Gd,colorspace_pars_fragment:Wd,envmap_fragment:Xd,envmap_common_pars_fragment:qd,envmap_pars_fragment:Yd,envmap_pars_vertex:jd,envmap_physical_pars_fragment:of,envmap_vertex:Kd,fog_vertex:Zd,fog_pars_vertex:$d,fog_fragment:Jd,fog_pars_fragment:Qd,gradientmap_pars_fragment:ef,lightmap_pars_fragment:tf,lights_lambert_fragment:nf,lights_lambert_pars_fragment:sf,lights_pars_begin:rf,lights_toon_fragment:af,lights_toon_pars_fragment:lf,lights_phong_fragment:cf,lights_phong_pars_fragment:hf,lights_physical_fragment:uf,lights_physical_pars_fragment:df,lights_fragment_begin:ff,lights_fragment_maps:pf,lights_fragment_end:mf,logdepthbuf_fragment:vf,logdepthbuf_pars_fragment:gf,logdepthbuf_pars_vertex:_f,logdepthbuf_vertex:xf,map_fragment:yf,map_pars_fragment:Mf,map_particle_fragment:Sf,map_particle_pars_fragment:Ef,metalnessmap_fragment:wf,metalnessmap_pars_fragment:bf,morphinstance_vertex:Tf,morphcolor_vertex:Af,morphnormal_vertex:Rf,morphtarget_pars_vertex:Cf,morphtarget_vertex:Pf,normal_fragment_begin:Lf,normal_fragment_maps:If,normal_pars_fragment:Nf,normal_pars_vertex:Df,normal_vertex:Uf,normalmap_pars_fragment:Ff,clearcoat_normal_fragment_begin:Bf,clearcoat_normal_fragment_maps:Of,clearcoat_pars_fragment:zf,iridescence_pars_fragment:Vf,opaque_fragment:kf,packing:Hf,premultiplied_alpha_fragment:Gf,project_vertex:Wf,dithering_fragment:Xf,dithering_pars_fragment:qf,roughnessmap_fragment:Yf,roughnessmap_pars_fragment:jf,shadowmap_pars_fragment:Kf,shadowmap_pars_vertex:Zf,shadowmap_vertex:$f,shadowmask_pars_fragment:Jf,skinbase_vertex:Qf,skinning_pars_vertex:ep,skinning_vertex:tp,skinnormal_vertex:np,specularmap_fragment:ip,specularmap_pars_fragment:sp,tonemapping_fragment:rp,tonemapping_pars_fragment:op,transmission_fragment:ap,transmission_pars_fragment:lp,uv_pars_fragment:cp,uv_pars_vertex:hp,uv_vertex:up,worldpos_vertex:dp,background_vert:fp,background_frag:pp,backgroundCube_vert:mp,backgroundCube_frag:vp,cube_vert:gp,cube_frag:_p,depth_vert:xp,depth_frag:yp,distanceRGBA_vert:Mp,distanceRGBA_frag:Sp,equirect_vert:Ep,equirect_frag:wp,linedashed_vert:bp,linedashed_frag:Tp,meshbasic_vert:Ap,meshbasic_frag:Rp,meshlambert_vert:Cp,meshlambert_frag:Pp,meshmatcap_vert:Lp,meshmatcap_frag:Ip,meshnormal_vert:Np,meshnormal_frag:Dp,meshphong_vert:Up,meshphong_frag:Fp,meshphysical_vert:Bp,meshphysical_frag:Op,meshtoon_vert:zp,meshtoon_frag:Vp,points_vert:kp,points_frag:Hp,shadow_vert:Gp,shadow_frag:Wp,sprite_vert:Xp,sprite_frag:qp},ke={common:{diffuse:{value:new lt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new dt},alphaMap:{value:null},alphaMapTransform:{value:new dt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new dt}},envmap:{envMap:{value:null},envMapRotation:{value:new dt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new dt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new dt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new dt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new dt},normalScale:{value:new ft(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new dt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new dt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new dt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new dt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new lt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new lt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new dt},alphaTest:{value:0},uvTransform:{value:new dt}},sprite:{diffuse:{value:new lt(16777215)},opacity:{value:1},center:{value:new ft(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new dt},alphaMap:{value:null},alphaMapTransform:{value:new dt},alphaTest:{value:0}}},wn={basic:{uniforms:Zt([ke.common,ke.specularmap,ke.envmap,ke.aomap,ke.lightmap,ke.fog]),vertexShader:vt.meshbasic_vert,fragmentShader:vt.meshbasic_frag},lambert:{uniforms:Zt([ke.common,ke.specularmap,ke.envmap,ke.aomap,ke.lightmap,ke.emissivemap,ke.bumpmap,ke.normalmap,ke.displacementmap,ke.fog,ke.lights,{emissive:{value:new lt(0)}}]),vertexShader:vt.meshlambert_vert,fragmentShader:vt.meshlambert_frag},phong:{uniforms:Zt([ke.common,ke.specularmap,ke.envmap,ke.aomap,ke.lightmap,ke.emissivemap,ke.bumpmap,ke.normalmap,ke.displacementmap,ke.fog,ke.lights,{emissive:{value:new lt(0)},specular:{value:new lt(1118481)},shininess:{value:30}}]),vertexShader:vt.meshphong_vert,fragmentShader:vt.meshphong_frag},standard:{uniforms:Zt([ke.common,ke.envmap,ke.aomap,ke.lightmap,ke.emissivemap,ke.bumpmap,ke.normalmap,ke.displacementmap,ke.roughnessmap,ke.metalnessmap,ke.fog,ke.lights,{emissive:{value:new lt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:vt.meshphysical_vert,fragmentShader:vt.meshphysical_frag},toon:{uniforms:Zt([ke.common,ke.aomap,ke.lightmap,ke.emissivemap,ke.bumpmap,ke.normalmap,ke.displacementmap,ke.gradientmap,ke.fog,ke.lights,{emissive:{value:new lt(0)}}]),vertexShader:vt.meshtoon_vert,fragmentShader:vt.meshtoon_frag},matcap:{uniforms:Zt([ke.common,ke.bumpmap,ke.normalmap,ke.displacementmap,ke.fog,{matcap:{value:null}}]),vertexShader:vt.meshmatcap_vert,fragmentShader:vt.meshmatcap_frag},points:{uniforms:Zt([ke.points,ke.fog]),vertexShader:vt.points_vert,fragmentShader:vt.points_frag},dashed:{uniforms:Zt([ke.common,ke.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:vt.linedashed_vert,fragmentShader:vt.linedashed_frag},depth:{uniforms:Zt([ke.common,ke.displacementmap]),vertexShader:vt.depth_vert,fragmentShader:vt.depth_frag},normal:{uniforms:Zt([ke.common,ke.bumpmap,ke.normalmap,ke.displacementmap,{opacity:{value:1}}]),vertexShader:vt.meshnormal_vert,fragmentShader:vt.meshnormal_frag},sprite:{uniforms:Zt([ke.sprite,ke.fog]),vertexShader:vt.sprite_vert,fragmentShader:vt.sprite_frag},background:{uniforms:{uvTransform:{value:new dt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:vt.background_vert,fragmentShader:vt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new dt}},vertexShader:vt.backgroundCube_vert,fragmentShader:vt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:vt.cube_vert,fragmentShader:vt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:vt.equirect_vert,fragmentShader:vt.equirect_frag},distanceRGBA:{uniforms:Zt([ke.common,ke.displacementmap,{referencePosition:{value:new H},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:vt.distanceRGBA_vert,fragmentShader:vt.distanceRGBA_frag},shadow:{uniforms:Zt([ke.lights,ke.fog,{color:{value:new lt(0)},opacity:{value:1}}]),vertexShader:vt.shadow_vert,fragmentShader:vt.shadow_frag}};wn.physical={uniforms:Zt([wn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new dt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new dt},clearcoatNormalScale:{value:new ft(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new dt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new dt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new dt},sheen:{value:0},sheenColor:{value:new lt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new dt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new dt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new dt},transmissionSamplerSize:{value:new ft},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new dt},attenuationDistance:{value:0},attenuationColor:{value:new lt(0)},specularColor:{value:new lt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new dt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new dt},anisotropyVector:{value:new ft},anisotropyMap:{value:null},anisotropyMapTransform:{value:new dt}}]),vertexShader:vt.meshphysical_vert,fragmentShader:vt.meshphysical_frag};const $s={r:0,b:0,g:0},ci=new bn,Yp=new pt;function jp(o,e,t,n,i,s,r){const a=new lt(0);let l=s===!0?0:1,h,u,c=null,d=0,f=null;function m(y){let _=y.isScene===!0?y.background:null;return _&&_.isTexture&&(_=(y.backgroundBlurriness>0?t:e).get(_)),_}function g(y){let _=!1;const T=m(y);T===null?p(a,l):T&&T.isColor&&(p(T,1),_=!0);const C=o.xr.getEnvironmentBlendMode();C==="additive"?n.buffers.color.setClear(0,0,0,1,r):C==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,r),(o.autoClear||_)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),o.clear(o.autoClearColor,o.autoClearDepth,o.autoClearStencil))}function v(y,_){const T=m(_);T&&(T.isCubeTexture||T.mapping===mr)?(u===void 0&&(u=new Nt(new Qi(1,1,1),new Xn({name:"BackgroundCubeMaterial",uniforms:ji(wn.backgroundCube.uniforms),vertexShader:wn.backgroundCube.vertexShader,fragmentShader:wn.backgroundCube.fragmentShader,side:Yt,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(C,I,P){this.matrixWorld.copyPosition(P.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(u)),ci.copy(_.backgroundRotation),ci.x*=-1,ci.y*=-1,ci.z*=-1,T.isCubeTexture&&T.isRenderTargetTexture===!1&&(ci.y*=-1,ci.z*=-1),u.material.uniforms.envMap.value=T,u.material.uniforms.flipEnvMap.value=T.isCubeTexture&&T.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=_.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=_.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(Yp.makeRotationFromEuler(ci)),u.material.toneMapped=Et.getTransfer(T.colorSpace)!==Rt,(c!==T||d!==T.version||f!==o.toneMapping)&&(u.material.needsUpdate=!0,c=T,d=T.version,f=o.toneMapping),u.layers.enableAll(),y.unshift(u,u.geometry,u.material,0,0,null)):T&&T.isTexture&&(h===void 0&&(h=new Nt(new xr(2,2),new Xn({name:"BackgroundMaterial",uniforms:ji(wn.background.uniforms),vertexShader:wn.background.vertexShader,fragmentShader:wn.background.fragmentShader,side:Gn,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),Object.defineProperty(h.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(h)),h.material.uniforms.t2D.value=T,h.material.uniforms.backgroundIntensity.value=_.backgroundIntensity,h.material.toneMapped=Et.getTransfer(T.colorSpace)!==Rt,T.matrixAutoUpdate===!0&&T.updateMatrix(),h.material.uniforms.uvTransform.value.copy(T.matrix),(c!==T||d!==T.version||f!==o.toneMapping)&&(h.material.needsUpdate=!0,c=T,d=T.version,f=o.toneMapping),h.layers.enableAll(),y.unshift(h,h.geometry,h.material,0,0,null))}function p(y,_){y.getRGB($s,wc(o)),n.buffers.color.setClear($s.r,$s.g,$s.b,_,r)}function x(){u!==void 0&&(u.geometry.dispose(),u.material.dispose(),u=void 0),h!==void 0&&(h.geometry.dispose(),h.material.dispose(),h=void 0)}return{getClearColor:function(){return a},setClearColor:function(y,_=1){a.set(y),l=_,p(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(y){l=y,p(a,l)},render:g,addToRenderList:v,dispose:x}}function Kp(o,e){const t=o.getParameter(o.MAX_VERTEX_ATTRIBS),n={},i=d(null);let s=i,r=!1;function a(M,b,F,U,W){let q=!1;const ee=c(U,F,b);s!==ee&&(s=ee,h(s.object)),q=f(M,U,F,W),q&&m(M,U,F,W),W!==null&&e.update(W,o.ELEMENT_ARRAY_BUFFER),(q||r)&&(r=!1,_(M,b,F,U),W!==null&&o.bindBuffer(o.ELEMENT_ARRAY_BUFFER,e.get(W).buffer))}function l(){return o.createVertexArray()}function h(M){return o.bindVertexArray(M)}function u(M){return o.deleteVertexArray(M)}function c(M,b,F){const U=F.wireframe===!0;let W=n[M.id];W===void 0&&(W={},n[M.id]=W);let q=W[b.id];q===void 0&&(q={},W[b.id]=q);let ee=q[U];return ee===void 0&&(ee=d(l()),q[U]=ee),ee}function d(M){const b=[],F=[],U=[];for(let W=0;W<t;W++)b[W]=0,F[W]=0,U[W]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:b,enabledAttributes:F,attributeDivisors:U,object:M,attributes:{},index:null}}function f(M,b,F,U){const W=s.attributes,q=b.attributes;let ee=0;const O=F.getAttributes();for(const N in O)if(O[N].location>=0){const J=W[N];let B=q[N];if(B===void 0&&(N==="instanceMatrix"&&M.instanceMatrix&&(B=M.instanceMatrix),N==="instanceColor"&&M.instanceColor&&(B=M.instanceColor)),J===void 0||J.attribute!==B||B&&J.data!==B.data)return!0;ee++}return s.attributesNum!==ee||s.index!==U}function m(M,b,F,U){const W={},q=b.attributes;let ee=0;const O=F.getAttributes();for(const N in O)if(O[N].location>=0){let J=q[N];J===void 0&&(N==="instanceMatrix"&&M.instanceMatrix&&(J=M.instanceMatrix),N==="instanceColor"&&M.instanceColor&&(J=M.instanceColor));const B={};B.attribute=J,J&&J.data&&(B.data=J.data),W[N]=B,ee++}s.attributes=W,s.attributesNum=ee,s.index=U}function g(){const M=s.newAttributes;for(let b=0,F=M.length;b<F;b++)M[b]=0}function v(M){p(M,0)}function p(M,b){const F=s.newAttributes,U=s.enabledAttributes,W=s.attributeDivisors;F[M]=1,U[M]===0&&(o.enableVertexAttribArray(M),U[M]=1),W[M]!==b&&(o.vertexAttribDivisor(M,b),W[M]=b)}function x(){const M=s.newAttributes,b=s.enabledAttributes;for(let F=0,U=b.length;F<U;F++)b[F]!==M[F]&&(o.disableVertexAttribArray(F),b[F]=0)}function y(M,b,F,U,W,q,ee){ee===!0?o.vertexAttribIPointer(M,b,F,W,q):o.vertexAttribPointer(M,b,F,U,W,q)}function _(M,b,F,U){g();const W=U.attributes,q=F.getAttributes(),ee=b.defaultAttributeValues;for(const O in q){const N=q[O];if(N.location>=0){let te=W[O];if(te===void 0&&(O==="instanceMatrix"&&M.instanceMatrix&&(te=M.instanceMatrix),O==="instanceColor"&&M.instanceColor&&(te=M.instanceColor)),te!==void 0){const J=te.normalized,B=te.itemSize,Q=e.get(te);if(Q===void 0)continue;const z=Q.buffer,A=Q.type,R=Q.bytesPerElement,k=A===o.INT||A===o.UNSIGNED_INT||te.gpuType===ia;if(te.isInterleavedBufferAttribute){const Z=te.data,ne=Z.stride,Y=te.offset;if(Z.isInstancedInterleavedBuffer){for(let ie=0;ie<N.locationSize;ie++)p(N.location+ie,Z.meshPerAttribute);M.isInstancedMesh!==!0&&U._maxInstanceCount===void 0&&(U._maxInstanceCount=Z.meshPerAttribute*Z.count)}else for(let ie=0;ie<N.locationSize;ie++)v(N.location+ie);o.bindBuffer(o.ARRAY_BUFFER,z);for(let ie=0;ie<N.locationSize;ie++)y(N.location+ie,B/N.locationSize,A,J,ne*R,(Y+B/N.locationSize*ie)*R,k)}else{if(te.isInstancedBufferAttribute){for(let Z=0;Z<N.locationSize;Z++)p(N.location+Z,te.meshPerAttribute);M.isInstancedMesh!==!0&&U._maxInstanceCount===void 0&&(U._maxInstanceCount=te.meshPerAttribute*te.count)}else for(let Z=0;Z<N.locationSize;Z++)v(N.location+Z);o.bindBuffer(o.ARRAY_BUFFER,z);for(let Z=0;Z<N.locationSize;Z++)y(N.location+Z,B/N.locationSize,A,J,B*R,B/N.locationSize*Z*R,k)}}else if(ee!==void 0){const J=ee[O];if(J!==void 0)switch(J.length){case 2:o.vertexAttrib2fv(N.location,J);break;case 3:o.vertexAttrib3fv(N.location,J);break;case 4:o.vertexAttrib4fv(N.location,J);break;default:o.vertexAttrib1fv(N.location,J)}}}}x()}function T(){P();for(const M in n){const b=n[M];for(const F in b){const U=b[F];for(const W in U)u(U[W].object),delete U[W];delete b[F]}delete n[M]}}function C(M){if(n[M.id]===void 0)return;const b=n[M.id];for(const F in b){const U=b[F];for(const W in U)u(U[W].object),delete U[W];delete b[F]}delete n[M.id]}function I(M){for(const b in n){const F=n[b];if(F[M.id]===void 0)continue;const U=F[M.id];for(const W in U)u(U[W].object),delete U[W];delete F[M.id]}}function P(){S(),r=!0,s!==i&&(s=i,h(s.object))}function S(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:a,reset:P,resetDefaultState:S,dispose:T,releaseStatesOfGeometry:C,releaseStatesOfProgram:I,initAttributes:g,enableAttribute:v,disableUnusedAttributes:x}}function Zp(o,e,t){let n;function i(h){n=h}function s(h,u){o.drawArrays(n,h,u),t.update(u,n,1)}function r(h,u,c){c!==0&&(o.drawArraysInstanced(n,h,u,c),t.update(u,n,c))}function a(h,u,c){if(c===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,h,0,u,0,c);let f=0;for(let m=0;m<c;m++)f+=u[m];t.update(f,n,1)}function l(h,u,c,d){if(c===0)return;const f=e.get("WEBGL_multi_draw");if(f===null)for(let m=0;m<h.length;m++)r(h[m],u[m],d[m]);else{f.multiDrawArraysInstancedWEBGL(n,h,0,u,0,d,0,c);let m=0;for(let g=0;g<c;g++)m+=u[g]*d[g];t.update(m,n,1)}}this.setMode=i,this.render=s,this.renderInstances=r,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function $p(o,e,t,n){let i;function s(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){const I=e.get("EXT_texture_filter_anisotropic");i=o.getParameter(I.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function r(I){return!(I!==pn&&n.convert(I)!==o.getParameter(o.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(I){const P=I===ws&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(I!==Wn&&n.convert(I)!==o.getParameter(o.IMPLEMENTATION_COLOR_READ_TYPE)&&I!==yn&&!P)}function l(I){if(I==="highp"){if(o.getShaderPrecisionFormat(o.VERTEX_SHADER,o.HIGH_FLOAT).precision>0&&o.getShaderPrecisionFormat(o.FRAGMENT_SHADER,o.HIGH_FLOAT).precision>0)return"highp";I="mediump"}return I==="mediump"&&o.getShaderPrecisionFormat(o.VERTEX_SHADER,o.MEDIUM_FLOAT).precision>0&&o.getShaderPrecisionFormat(o.FRAGMENT_SHADER,o.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let h=t.precision!==void 0?t.precision:"highp";const u=l(h);u!==h&&(console.warn("THREE.WebGLRenderer:",h,"not supported, using",u,"instead."),h=u);const c=t.logarithmicDepthBuffer===!0,d=t.reverseDepthBuffer===!0&&e.has("EXT_clip_control"),f=o.getParameter(o.MAX_TEXTURE_IMAGE_UNITS),m=o.getParameter(o.MAX_VERTEX_TEXTURE_IMAGE_UNITS),g=o.getParameter(o.MAX_TEXTURE_SIZE),v=o.getParameter(o.MAX_CUBE_MAP_TEXTURE_SIZE),p=o.getParameter(o.MAX_VERTEX_ATTRIBS),x=o.getParameter(o.MAX_VERTEX_UNIFORM_VECTORS),y=o.getParameter(o.MAX_VARYING_VECTORS),_=o.getParameter(o.MAX_FRAGMENT_UNIFORM_VECTORS),T=m>0,C=o.getParameter(o.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:r,textureTypeReadable:a,precision:h,logarithmicDepthBuffer:c,reverseDepthBuffer:d,maxTextures:f,maxVertexTextures:m,maxTextureSize:g,maxCubemapSize:v,maxAttributes:p,maxVertexUniforms:x,maxVaryings:y,maxFragmentUniforms:_,vertexTextures:T,maxSamples:C}}function Jp(o){const e=this;let t=null,n=0,i=!1,s=!1;const r=new fi,a=new dt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(c,d){const f=c.length!==0||d||n!==0||i;return i=d,n=c.length,f},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(c,d){t=u(c,d,0)},this.setState=function(c,d,f){const m=c.clippingPlanes,g=c.clipIntersection,v=c.clipShadows,p=o.get(c);if(!i||m===null||m.length===0||s&&!v)s?u(null):h();else{const x=s?0:n,y=x*4;let _=p.clippingState||null;l.value=_,_=u(m,d,y,f);for(let T=0;T!==y;++T)_[T]=t[T];p.clippingState=_,this.numIntersection=g?this.numPlanes:0,this.numPlanes+=x}};function h(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function u(c,d,f,m){const g=c!==null?c.length:0;let v=null;if(g!==0){if(v=l.value,m!==!0||v===null){const p=f+g*4,x=d.matrixWorldInverse;a.getNormalMatrix(x),(v===null||v.length<p)&&(v=new Float32Array(p));for(let y=0,_=f;y!==g;++y,_+=4)r.copy(c[y]).applyMatrix4(x,a),r.normal.toArray(v,_),v[_+3]=r.constant}l.value=v,l.needsUpdate=!0}return e.numPlanes=g,e.numIntersection=0,v}}function Qp(o){let e=new WeakMap;function t(r,a){return a===Mo?r.mapping=Hi:a===So&&(r.mapping=Gi),r}function n(r){if(r&&r.isTexture){const a=r.mapping;if(a===Mo||a===So)if(e.has(r)){const l=e.get(r).texture;return t(l,r.mapping)}else{const l=r.image;if(l&&l.height>0){const h=new xu(l.height);return h.fromEquirectangularTexture(o,r),e.set(r,h),r.addEventListener("dispose",i),t(h.texture,r.mapping)}else return null}}return r}function i(r){const a=r.target;a.removeEventListener("dispose",i);const l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function s(){e=new WeakMap}return{get:n,dispose:s}}const Ui=4,yl=[.125,.215,.35,.446,.526,.582],vi=20,Zr=new Sa,Ml=new lt;let $r=null,Jr=0,Qr=0,eo=!1;const pi=(1+Math.sqrt(5))/2,Di=1/pi,Sl=[new H(-pi,Di,0),new H(pi,Di,0),new H(-Di,0,pi),new H(Di,0,pi),new H(0,pi,-Di),new H(0,pi,Di),new H(-1,1,-1),new H(1,1,-1),new H(-1,1,1),new H(1,1,1)],em=new H;class El{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,i=100,s={}){const{size:r=256,position:a=em}=s;$r=this._renderer.getRenderTarget(),Jr=this._renderer.getActiveCubeFace(),Qr=this._renderer.getActiveMipmapLevel(),eo=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(r);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,n,i,l,a),t>0&&this._blur(l,0,0,t),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Tl(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=bl(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget($r,Jr,Qr),this._renderer.xr.enabled=eo,e.scissorTest=!1,Js(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Hi||e.mapping===Gi?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),$r=this._renderer.getRenderTarget(),Jr=this._renderer.getActiveCubeFace(),Qr=this._renderer.getActiveMipmapLevel(),eo=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:hn,minFilter:hn,generateMipmaps:!1,type:ws,format:pn,colorSpace:tn,depthBuffer:!1},i=wl(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=wl(e,t,n);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=tm(s)),this._blurMaterial=nm(s,e,t)}return i}_compileMaterial(e){const t=new Nt(this._lodPlanes[0],e);this._renderer.compile(t,Zr)}_sceneToCubeUV(e,t,n,i,s){const l=new $t(90,1,t,n),h=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],c=this._renderer,d=c.autoClear,f=c.toneMapping;c.getClearColor(Ml),c.toneMapping=ii,c.autoClear=!1;const m=new Jt({name:"PMREM.Background",side:Yt,depthWrite:!1,depthTest:!1}),g=new Nt(new Qi,m);let v=!1;const p=e.background;p?p.isColor&&(m.color.copy(p),e.background=null,v=!0):(m.color.copy(Ml),v=!0);for(let x=0;x<6;x++){const y=x%3;y===0?(l.up.set(0,h[x],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x+u[x],s.y,s.z)):y===1?(l.up.set(0,0,h[x]),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y+u[x],s.z)):(l.up.set(0,h[x],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y,s.z+u[x]));const _=this._cubeSize;Js(i,y*_,x>2?_:0,_,_),c.setRenderTarget(i),v&&c.render(g,l),c.render(e,l)}g.geometry.dispose(),g.material.dispose(),c.toneMapping=f,c.autoClear=d,e.background=p}_textureToCubeUV(e,t){const n=this._renderer,i=e.mapping===Hi||e.mapping===Gi;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=Tl()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=bl());const s=i?this._cubemapMaterial:this._equirectMaterial,r=new Nt(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=e;const l=this._cubeSize;Js(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(r,Zr)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;const i=this._lodPlanes.length;for(let s=1;s<i;s++){const r=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),a=Sl[(i-s-1)%Sl.length];this._blur(e,s-1,s,r,a)}t.autoClear=n}_blur(e,t,n,i,s){const r=this._pingPongRenderTarget;this._halfBlur(e,r,t,n,i,"latitudinal",s),this._halfBlur(r,e,n,n,i,"longitudinal",s)}_halfBlur(e,t,n,i,s,r,a){const l=this._renderer,h=this._blurMaterial;r!=="latitudinal"&&r!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,c=new Nt(this._lodPlanes[i],h),d=h.uniforms,f=this._sizeLods[n]-1,m=isFinite(s)?Math.PI/(2*f):2*Math.PI/(2*vi-1),g=s/m,v=isFinite(s)?1+Math.floor(u*g):vi;v>vi&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${v} samples when the maximum is set to ${vi}`);const p=[];let x=0;for(let I=0;I<vi;++I){const P=I/g,S=Math.exp(-P*P/2);p.push(S),I===0?x+=S:I<v&&(x+=2*S)}for(let I=0;I<p.length;I++)p[I]=p[I]/x;d.envMap.value=e.texture,d.samples.value=v,d.weights.value=p,d.latitudinal.value=r==="latitudinal",a&&(d.poleAxis.value=a);const{_lodMax:y}=this;d.dTheta.value=m,d.mipInt.value=y-n;const _=this._sizeLods[i],T=3*_*(i>y-Ui?i-y+Ui:0),C=4*(this._cubeSize-_);Js(t,T,C,3*_,2*_),l.setRenderTarget(t),l.render(c,Zr)}}function tm(o){const e=[],t=[],n=[];let i=o;const s=o-Ui+1+yl.length;for(let r=0;r<s;r++){const a=Math.pow(2,i);t.push(a);let l=1/a;r>o-Ui?l=yl[r-o+Ui-1]:r===0&&(l=0),n.push(l);const h=1/(a-2),u=-h,c=1+h,d=[u,u,c,u,c,c,u,u,c,c,u,c],f=6,m=6,g=3,v=2,p=1,x=new Float32Array(g*m*f),y=new Float32Array(v*m*f),_=new Float32Array(p*m*f);for(let C=0;C<f;C++){const I=C%3*2/3-1,P=C>2?0:-1,S=[I,P,0,I+2/3,P,0,I+2/3,P+1,0,I,P,0,I+2/3,P+1,0,I,P+1,0];x.set(S,g*m*C),y.set(d,v*m*C);const M=[C,C,C,C,C,C];_.set(M,p*m*C)}const T=new rn;T.setAttribute("position",new en(x,g)),T.setAttribute("uv",new en(y,v)),T.setAttribute("faceIndex",new en(_,p)),e.push(T),i>Ui&&i--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function wl(o,e,t){const n=new _i(o,e,t);return n.texture.mapping=mr,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Js(o,e,t,n,i){o.viewport.set(e,t,n,i),o.scissor.set(e,t,n,i)}function nm(o,e,t){const n=new Float32Array(vi),i=new H(0,1,0);return new Xn({name:"SphericalGaussianBlur",defines:{n:vi,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${o}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:ba(),fragmentShader:`

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
		`,blending:ni,depthTest:!1,depthWrite:!1})}function bl(){return new Xn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:ba(),fragmentShader:`

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
		`,blending:ni,depthTest:!1,depthWrite:!1})}function Tl(){return new Xn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:ba(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:ni,depthTest:!1,depthWrite:!1})}function ba(){return`

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
	`}function im(o){let e=new WeakMap,t=null;function n(a){if(a&&a.isTexture){const l=a.mapping,h=l===Mo||l===So,u=l===Hi||l===Gi;if(h||u){let c=e.get(a);const d=c!==void 0?c.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==d)return t===null&&(t=new El(o)),c=h?t.fromEquirectangular(a,c):t.fromCubemap(a,c),c.texture.pmremVersion=a.pmremVersion,e.set(a,c),c.texture;if(c!==void 0)return c.texture;{const f=a.image;return h&&f&&f.height>0||u&&f&&i(f)?(t===null&&(t=new El(o)),c=h?t.fromEquirectangular(a):t.fromCubemap(a),c.texture.pmremVersion=a.pmremVersion,e.set(a,c),a.addEventListener("dispose",s),c.texture):null}}}return a}function i(a){let l=0;const h=6;for(let u=0;u<h;u++)a[u]!==void 0&&l++;return l===h}function s(a){const l=a.target;l.removeEventListener("dispose",s);const h=e.get(l);h!==void 0&&(e.delete(l),h.dispose())}function r(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:r}}function sm(o){const e={};function t(n){if(e[n]!==void 0)return e[n];let i;switch(n){case"WEBGL_depth_texture":i=o.getExtension("WEBGL_depth_texture")||o.getExtension("MOZ_WEBGL_depth_texture")||o.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=o.getExtension("EXT_texture_filter_anisotropic")||o.getExtension("MOZ_EXT_texture_filter_anisotropic")||o.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=o.getExtension("WEBGL_compressed_texture_s3tc")||o.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||o.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=o.getExtension("WEBGL_compressed_texture_pvrtc")||o.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=o.getExtension(n)}return e[n]=i,i}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){const i=t(n);return i===null&&di("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function rm(o,e,t,n){const i={},s=new WeakMap;function r(c){const d=c.target;d.index!==null&&e.remove(d.index);for(const m in d.attributes)e.remove(d.attributes[m]);d.removeEventListener("dispose",r),delete i[d.id];const f=s.get(d);f&&(e.remove(f),s.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,t.memory.geometries--}function a(c,d){return i[d.id]===!0||(d.addEventListener("dispose",r),i[d.id]=!0,t.memory.geometries++),d}function l(c){const d=c.attributes;for(const f in d)e.update(d[f],o.ARRAY_BUFFER)}function h(c){const d=[],f=c.index,m=c.attributes.position;let g=0;if(f!==null){const x=f.array;g=f.version;for(let y=0,_=x.length;y<_;y+=3){const T=x[y+0],C=x[y+1],I=x[y+2];d.push(T,C,C,I,I,T)}}else if(m!==void 0){const x=m.array;g=m.version;for(let y=0,_=x.length/3-1;y<_;y+=3){const T=y+0,C=y+1,I=y+2;d.push(T,C,C,I,I,T)}}else return;const v=new(_c(d)?Ec:Sc)(d,1);v.version=g;const p=s.get(c);p&&e.remove(p),s.set(c,v)}function u(c){const d=s.get(c);if(d){const f=c.index;f!==null&&d.version<f.version&&h(c)}else h(c);return s.get(c)}return{get:a,update:l,getWireframeAttribute:u}}function om(o,e,t){let n;function i(d){n=d}let s,r;function a(d){s=d.type,r=d.bytesPerElement}function l(d,f){o.drawElements(n,f,s,d*r),t.update(f,n,1)}function h(d,f,m){m!==0&&(o.drawElementsInstanced(n,f,s,d*r,m),t.update(f,n,m))}function u(d,f,m){if(m===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,f,0,s,d,0,m);let v=0;for(let p=0;p<m;p++)v+=f[p];t.update(v,n,1)}function c(d,f,m,g){if(m===0)return;const v=e.get("WEBGL_multi_draw");if(v===null)for(let p=0;p<d.length;p++)h(d[p]/r,f[p],g[p]);else{v.multiDrawElementsInstancedWEBGL(n,f,0,s,d,0,g,0,m);let p=0;for(let x=0;x<m;x++)p+=f[x]*g[x];t.update(p,n,1)}}this.setMode=i,this.setIndex=a,this.render=l,this.renderInstances=h,this.renderMultiDraw=u,this.renderMultiDrawInstances=c}function am(o){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,r,a){switch(t.calls++,r){case o.TRIANGLES:t.triangles+=a*(s/3);break;case o.LINES:t.lines+=a*(s/2);break;case o.LINE_STRIP:t.lines+=a*(s-1);break;case o.LINE_LOOP:t.lines+=a*s;break;case o.POINTS:t.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",r);break}}function i(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:i,update:n}}function lm(o,e,t){const n=new WeakMap,i=new wt;function s(r,a,l){const h=r.morphTargetInfluences,u=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,c=u!==void 0?u.length:0;let d=n.get(a);if(d===void 0||d.count!==c){let M=function(){P.dispose(),n.delete(a),a.removeEventListener("dispose",M)};var f=M;d!==void 0&&d.texture.dispose();const m=a.morphAttributes.position!==void 0,g=a.morphAttributes.normal!==void 0,v=a.morphAttributes.color!==void 0,p=a.morphAttributes.position||[],x=a.morphAttributes.normal||[],y=a.morphAttributes.color||[];let _=0;m===!0&&(_=1),g===!0&&(_=2),v===!0&&(_=3);let T=a.attributes.position.count*_,C=1;T>e.maxTextureSize&&(C=Math.ceil(T/e.maxTextureSize),T=e.maxTextureSize);const I=new Float32Array(T*C*4*c),P=new xc(I,T,C,c);P.type=yn,P.needsUpdate=!0;const S=_*4;for(let b=0;b<c;b++){const F=p[b],U=x[b],W=y[b],q=T*C*4*b;for(let ee=0;ee<F.count;ee++){const O=ee*S;m===!0&&(i.fromBufferAttribute(F,ee),I[q+O+0]=i.x,I[q+O+1]=i.y,I[q+O+2]=i.z,I[q+O+3]=0),g===!0&&(i.fromBufferAttribute(U,ee),I[q+O+4]=i.x,I[q+O+5]=i.y,I[q+O+6]=i.z,I[q+O+7]=0),v===!0&&(i.fromBufferAttribute(W,ee),I[q+O+8]=i.x,I[q+O+9]=i.y,I[q+O+10]=i.z,I[q+O+11]=W.itemSize===4?i.w:1)}}d={count:c,texture:P,size:new ft(T,C)},n.set(a,d),a.addEventListener("dispose",M)}if(r.isInstancedMesh===!0&&r.morphTexture!==null)l.getUniforms().setValue(o,"morphTexture",r.morphTexture,t);else{let m=0;for(let v=0;v<h.length;v++)m+=h[v];const g=a.morphTargetsRelative?1:1-m;l.getUniforms().setValue(o,"morphTargetBaseInfluence",g),l.getUniforms().setValue(o,"morphTargetInfluences",h)}l.getUniforms().setValue(o,"morphTargetsTexture",d.texture,t),l.getUniforms().setValue(o,"morphTargetsTextureSize",d.size)}return{update:s}}function cm(o,e,t,n){let i=new WeakMap;function s(l){const h=n.render.frame,u=l.geometry,c=e.get(l,u);if(i.get(c)!==h&&(e.update(c),i.set(c,h)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),i.get(l)!==h&&(t.update(l.instanceMatrix,o.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,o.ARRAY_BUFFER),i.set(l,h))),l.isSkinnedMesh){const d=l.skeleton;i.get(d)!==h&&(d.update(),i.set(d,h))}return c}function r(){i=new WeakMap}function a(l){const h=l.target;h.removeEventListener("dispose",a),t.remove(h.instanceMatrix),h.instanceColor!==null&&t.remove(h.instanceColor)}return{update:s,dispose:r}}const Bc=new Wt,Al=new Pc(1,1),Oc=new xc,zc=new nu,Vc=new fa,Rl=[],Cl=[],Pl=new Float32Array(16),Ll=new Float32Array(9),Il=new Float32Array(4);function ns(o,e,t){const n=o[0];if(n<=0||n>0)return o;const i=e*t;let s=Rl[i];if(s===void 0&&(s=new Float32Array(i),Rl[i]=s),e!==0){n.toArray(s,0);for(let r=1,a=0;r!==e;++r)a+=t,o[r].toArray(s,a)}return s}function kt(o,e){if(o.length!==e.length)return!1;for(let t=0,n=o.length;t<n;t++)if(o[t]!==e[t])return!1;return!0}function Ht(o,e){for(let t=0,n=e.length;t<n;t++)o[t]=e[t]}function Mr(o,e){let t=Cl[e];t===void 0&&(t=new Int32Array(e),Cl[e]=t);for(let n=0;n!==e;++n)t[n]=o.allocateTextureUnit();return t}function hm(o,e){const t=this.cache;t[0]!==e&&(o.uniform1f(this.addr,e),t[0]=e)}function um(o,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(o.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(kt(t,e))return;o.uniform2fv(this.addr,e),Ht(t,e)}}function dm(o,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(o.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(o.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(kt(t,e))return;o.uniform3fv(this.addr,e),Ht(t,e)}}function fm(o,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(o.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(kt(t,e))return;o.uniform4fv(this.addr,e),Ht(t,e)}}function pm(o,e){const t=this.cache,n=e.elements;if(n===void 0){if(kt(t,e))return;o.uniformMatrix2fv(this.addr,!1,e),Ht(t,e)}else{if(kt(t,n))return;Il.set(n),o.uniformMatrix2fv(this.addr,!1,Il),Ht(t,n)}}function mm(o,e){const t=this.cache,n=e.elements;if(n===void 0){if(kt(t,e))return;o.uniformMatrix3fv(this.addr,!1,e),Ht(t,e)}else{if(kt(t,n))return;Ll.set(n),o.uniformMatrix3fv(this.addr,!1,Ll),Ht(t,n)}}function vm(o,e){const t=this.cache,n=e.elements;if(n===void 0){if(kt(t,e))return;o.uniformMatrix4fv(this.addr,!1,e),Ht(t,e)}else{if(kt(t,n))return;Pl.set(n),o.uniformMatrix4fv(this.addr,!1,Pl),Ht(t,n)}}function gm(o,e){const t=this.cache;t[0]!==e&&(o.uniform1i(this.addr,e),t[0]=e)}function _m(o,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(o.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(kt(t,e))return;o.uniform2iv(this.addr,e),Ht(t,e)}}function xm(o,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(o.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(kt(t,e))return;o.uniform3iv(this.addr,e),Ht(t,e)}}function ym(o,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(o.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(kt(t,e))return;o.uniform4iv(this.addr,e),Ht(t,e)}}function Mm(o,e){const t=this.cache;t[0]!==e&&(o.uniform1ui(this.addr,e),t[0]=e)}function Sm(o,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(o.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(kt(t,e))return;o.uniform2uiv(this.addr,e),Ht(t,e)}}function Em(o,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(o.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(kt(t,e))return;o.uniform3uiv(this.addr,e),Ht(t,e)}}function wm(o,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(o.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(kt(t,e))return;o.uniform4uiv(this.addr,e),Ht(t,e)}}function bm(o,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(o.uniform1i(this.addr,i),n[0]=i);let s;this.type===o.SAMPLER_2D_SHADOW?(Al.compareFunction=gc,s=Al):s=Bc,t.setTexture2D(e||s,i)}function Tm(o,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(o.uniform1i(this.addr,i),n[0]=i),t.setTexture3D(e||zc,i)}function Am(o,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(o.uniform1i(this.addr,i),n[0]=i),t.setTextureCube(e||Vc,i)}function Rm(o,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(o.uniform1i(this.addr,i),n[0]=i),t.setTexture2DArray(e||Oc,i)}function Cm(o){switch(o){case 5126:return hm;case 35664:return um;case 35665:return dm;case 35666:return fm;case 35674:return pm;case 35675:return mm;case 35676:return vm;case 5124:case 35670:return gm;case 35667:case 35671:return _m;case 35668:case 35672:return xm;case 35669:case 35673:return ym;case 5125:return Mm;case 36294:return Sm;case 36295:return Em;case 36296:return wm;case 35678:case 36198:case 36298:case 36306:case 35682:return bm;case 35679:case 36299:case 36307:return Tm;case 35680:case 36300:case 36308:case 36293:return Am;case 36289:case 36303:case 36311:case 36292:return Rm}}function Pm(o,e){o.uniform1fv(this.addr,e)}function Lm(o,e){const t=ns(e,this.size,2);o.uniform2fv(this.addr,t)}function Im(o,e){const t=ns(e,this.size,3);o.uniform3fv(this.addr,t)}function Nm(o,e){const t=ns(e,this.size,4);o.uniform4fv(this.addr,t)}function Dm(o,e){const t=ns(e,this.size,4);o.uniformMatrix2fv(this.addr,!1,t)}function Um(o,e){const t=ns(e,this.size,9);o.uniformMatrix3fv(this.addr,!1,t)}function Fm(o,e){const t=ns(e,this.size,16);o.uniformMatrix4fv(this.addr,!1,t)}function Bm(o,e){o.uniform1iv(this.addr,e)}function Om(o,e){o.uniform2iv(this.addr,e)}function zm(o,e){o.uniform3iv(this.addr,e)}function Vm(o,e){o.uniform4iv(this.addr,e)}function km(o,e){o.uniform1uiv(this.addr,e)}function Hm(o,e){o.uniform2uiv(this.addr,e)}function Gm(o,e){o.uniform3uiv(this.addr,e)}function Wm(o,e){o.uniform4uiv(this.addr,e)}function Xm(o,e,t){const n=this.cache,i=e.length,s=Mr(t,i);kt(n,s)||(o.uniform1iv(this.addr,s),Ht(n,s));for(let r=0;r!==i;++r)t.setTexture2D(e[r]||Bc,s[r])}function qm(o,e,t){const n=this.cache,i=e.length,s=Mr(t,i);kt(n,s)||(o.uniform1iv(this.addr,s),Ht(n,s));for(let r=0;r!==i;++r)t.setTexture3D(e[r]||zc,s[r])}function Ym(o,e,t){const n=this.cache,i=e.length,s=Mr(t,i);kt(n,s)||(o.uniform1iv(this.addr,s),Ht(n,s));for(let r=0;r!==i;++r)t.setTextureCube(e[r]||Vc,s[r])}function jm(o,e,t){const n=this.cache,i=e.length,s=Mr(t,i);kt(n,s)||(o.uniform1iv(this.addr,s),Ht(n,s));for(let r=0;r!==i;++r)t.setTexture2DArray(e[r]||Oc,s[r])}function Km(o){switch(o){case 5126:return Pm;case 35664:return Lm;case 35665:return Im;case 35666:return Nm;case 35674:return Dm;case 35675:return Um;case 35676:return Fm;case 5124:case 35670:return Bm;case 35667:case 35671:return Om;case 35668:case 35672:return zm;case 35669:case 35673:return Vm;case 5125:return km;case 36294:return Hm;case 36295:return Gm;case 36296:return Wm;case 35678:case 36198:case 36298:case 36306:case 35682:return Xm;case 35679:case 36299:case 36307:return qm;case 35680:case 36300:case 36308:case 36293:return Ym;case 36289:case 36303:case 36311:case 36292:return jm}}class Zm{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=Cm(t.type)}}class $m{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=Km(t.type)}}class Jm{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const i=this.seq;for(let s=0,r=i.length;s!==r;++s){const a=i[s];a.setValue(e,t[a.id],n)}}}const to=/(\w+)(\])?(\[|\.)?/g;function Nl(o,e){o.seq.push(e),o.map[e.id]=e}function Qm(o,e,t){const n=o.name,i=n.length;for(to.lastIndex=0;;){const s=to.exec(n),r=to.lastIndex;let a=s[1];const l=s[2]==="]",h=s[3];if(l&&(a=a|0),h===void 0||h==="["&&r+2===i){Nl(t,h===void 0?new Zm(a,o,e):new $m(a,o,e));break}else{let c=t.map[a];c===void 0&&(c=new Jm(a),Nl(t,c)),t=c}}}class cr{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let i=0;i<n;++i){const s=e.getActiveUniform(t,i),r=e.getUniformLocation(t,s.name);Qm(s,r,this)}}setValue(e,t,n,i){const s=this.map[t];s!==void 0&&s.setValue(e,n,i)}setOptional(e,t,n){const i=t[n];i!==void 0&&this.setValue(e,n,i)}static upload(e,t,n,i){for(let s=0,r=t.length;s!==r;++s){const a=t[s],l=n[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,i)}}static seqWithValue(e,t){const n=[];for(let i=0,s=e.length;i!==s;++i){const r=e[i];r.id in t&&n.push(r)}return n}}function Dl(o,e,t){const n=o.createShader(e);return o.shaderSource(n,t),o.compileShader(n),n}const ev=37297;let tv=0;function nv(o,e){const t=o.split(`
`),n=[],i=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let r=i;r<s;r++){const a=r+1;n.push(`${a===e?">":" "} ${a}: ${t[r]}`)}return n.join(`
`)}const Ul=new dt;function iv(o){Et._getMatrix(Ul,Et.workingColorSpace,o);const e=`mat3( ${Ul.elements.map(t=>t.toFixed(4))} )`;switch(Et.getTransfer(o)){case ur:return[e,"LinearTransferOETF"];case Rt:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",o),[e,"LinearTransferOETF"]}}function Fl(o,e,t){const n=o.getShaderParameter(e,o.COMPILE_STATUS),i=o.getShaderInfoLog(e).trim();if(n&&i==="")return"";const s=/ERROR: 0:(\d+)/.exec(i);if(s){const r=parseInt(s[1]);return t.toUpperCase()+`

`+i+`

`+nv(o.getShaderSource(e),r)}else return i}function sv(o,e){const t=iv(e);return[`vec4 ${o}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function rv(o,e){let t;switch(e){case uh:t="Linear";break;case dh:t="Reinhard";break;case sc:t="Cineon";break;case fh:t="ACESFilmic";break;case mh:t="AgX";break;case vh:t="Neutral";break;case ph:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+o+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const Qs=new H;function ov(){Et.getLuminanceCoefficients(Qs);const o=Qs.x.toFixed(4),e=Qs.y.toFixed(4),t=Qs.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${o}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function av(o){return[o.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",o.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(ps).join(`
`)}function lv(o){const e=[];for(const t in o){const n=o[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function cv(o,e){const t={},n=o.getProgramParameter(e,o.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){const s=o.getActiveAttrib(e,i),r=s.name;let a=1;s.type===o.FLOAT_MAT2&&(a=2),s.type===o.FLOAT_MAT3&&(a=3),s.type===o.FLOAT_MAT4&&(a=4),t[r]={type:s.type,location:o.getAttribLocation(e,r),locationSize:a}}return t}function ps(o){return o!==""}function Bl(o,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return o.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Ol(o,e){return o.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const hv=/^[ \t]*#include +<([\w\d./]+)>/gm;function Qo(o){return o.replace(hv,dv)}const uv=new Map;function dv(o,e){let t=vt[e];if(t===void 0){const n=uv.get(e);if(n!==void 0)t=vt[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return Qo(t)}const fv=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function zl(o){return o.replace(fv,pv)}function pv(o,e,t,n){let i="";for(let s=parseInt(e);s<parseInt(t);s++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return i}function Vl(o){let e=`precision ${o.precision} float;
	precision ${o.precision} int;
	precision ${o.precision} sampler2D;
	precision ${o.precision} samplerCube;
	precision ${o.precision} sampler3D;
	precision ${o.precision} sampler2DArray;
	precision ${o.precision} sampler2DShadow;
	precision ${o.precision} samplerCubeShadow;
	precision ${o.precision} sampler2DArrayShadow;
	precision ${o.precision} isampler2D;
	precision ${o.precision} isampler3D;
	precision ${o.precision} isamplerCube;
	precision ${o.precision} isampler2DArray;
	precision ${o.precision} usampler2D;
	precision ${o.precision} usampler3D;
	precision ${o.precision} usamplerCube;
	precision ${o.precision} usampler2DArray;
	`;return o.precision==="highp"?e+=`
#define HIGH_PRECISION`:o.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:o.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function mv(o){let e="SHADOWMAP_TYPE_BASIC";return o.shadowMapType===tc?e="SHADOWMAP_TYPE_PCF":o.shadowMapType===nc?e="SHADOWMAP_TYPE_PCF_SOFT":o.shadowMapType===On&&(e="SHADOWMAP_TYPE_VSM"),e}function vv(o){let e="ENVMAP_TYPE_CUBE";if(o.envMap)switch(o.envMapMode){case Hi:case Gi:e="ENVMAP_TYPE_CUBE";break;case mr:e="ENVMAP_TYPE_CUBE_UV";break}return e}function gv(o){let e="ENVMAP_MODE_REFLECTION";if(o.envMap)switch(o.envMapMode){case Gi:e="ENVMAP_MODE_REFRACTION";break}return e}function _v(o){let e="ENVMAP_BLENDING_NONE";if(o.envMap)switch(o.combine){case ic:e="ENVMAP_BLENDING_MULTIPLY";break;case ch:e="ENVMAP_BLENDING_MIX";break;case hh:e="ENVMAP_BLENDING_ADD";break}return e}function xv(o){const e=o.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:n,maxMip:t}}function yv(o,e,t,n){const i=o.getContext(),s=t.defines;let r=t.vertexShader,a=t.fragmentShader;const l=mv(t),h=vv(t),u=gv(t),c=_v(t),d=xv(t),f=av(t),m=lv(s),g=i.createProgram();let v,p,x=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(v=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m].filter(ps).join(`
`),v.length>0&&(v+=`
`),p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m].filter(ps).join(`
`),p.length>0&&(p+=`
`)):(v=[Vl(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(ps).join(`
`),p=[Vl(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.envMap?"#define "+u:"",t.envMap?"#define "+c:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==ii?"#define TONE_MAPPING":"",t.toneMapping!==ii?vt.tonemapping_pars_fragment:"",t.toneMapping!==ii?rv("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",vt.colorspace_pars_fragment,sv("linearToOutputTexel",t.outputColorSpace),ov(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(ps).join(`
`)),r=Qo(r),r=Bl(r,t),r=Ol(r,t),a=Qo(a),a=Bl(a,t),a=Ol(a,t),r=zl(r),a=zl(a),t.isRawShaderMaterial!==!0&&(x=`#version 300 es
`,v=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+v,p=["#define varying in",t.glslVersion===Fa?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Fa?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const y=x+v+r,_=x+p+a,T=Dl(i,i.VERTEX_SHADER,y),C=Dl(i,i.FRAGMENT_SHADER,_);i.attachShader(g,T),i.attachShader(g,C),t.index0AttributeName!==void 0?i.bindAttribLocation(g,0,t.index0AttributeName):t.morphTargets===!0&&i.bindAttribLocation(g,0,"position"),i.linkProgram(g);function I(b){if(o.debug.checkShaderErrors){const F=i.getProgramInfoLog(g).trim(),U=i.getShaderInfoLog(T).trim(),W=i.getShaderInfoLog(C).trim();let q=!0,ee=!0;if(i.getProgramParameter(g,i.LINK_STATUS)===!1)if(q=!1,typeof o.debug.onShaderError=="function")o.debug.onShaderError(i,g,T,C);else{const O=Fl(i,T,"vertex"),N=Fl(i,C,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(g,i.VALIDATE_STATUS)+`

Material Name: `+b.name+`
Material Type: `+b.type+`

Program Info Log: `+F+`
`+O+`
`+N)}else F!==""?console.warn("THREE.WebGLProgram: Program Info Log:",F):(U===""||W==="")&&(ee=!1);ee&&(b.diagnostics={runnable:q,programLog:F,vertexShader:{log:U,prefix:v},fragmentShader:{log:W,prefix:p}})}i.deleteShader(T),i.deleteShader(C),P=new cr(i,g),S=cv(i,g)}let P;this.getUniforms=function(){return P===void 0&&I(this),P};let S;this.getAttributes=function(){return S===void 0&&I(this),S};let M=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return M===!1&&(M=i.getProgramParameter(g,ev)),M},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(g),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=tv++,this.cacheKey=e,this.usedTimes=1,this.program=g,this.vertexShader=T,this.fragmentShader=C,this}let Mv=0;class Sv{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,i=this._getShaderStage(t),s=this._getShaderStage(n),r=this._getShaderCacheForMaterial(e);return r.has(i)===!1&&(r.add(i),i.usedTimes++),r.has(s)===!1&&(r.add(s),s.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new Ev(e),t.set(e,n)),n}}class Ev{constructor(e){this.id=Mv++,this.code=e,this.usedTimes=0}}function wv(o,e,t,n,i,s,r){const a=new yc,l=new Sv,h=new Set,u=[],c=i.logarithmicDepthBuffer,d=i.vertexTextures;let f=i.precision;const m={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function g(S){return h.add(S),S===0?"uv":`uv${S}`}function v(S,M,b,F,U){const W=F.fog,q=U.geometry,ee=S.isMeshStandardMaterial?F.environment:null,O=(S.isMeshStandardMaterial?t:e).get(S.envMap||ee),N=O&&O.mapping===mr?O.image.height:null,te=m[S.type];S.precision!==null&&(f=i.getMaxPrecision(S.precision),f!==S.precision&&console.warn("THREE.WebGLProgram.getParameters:",S.precision,"not supported, using",f,"instead."));const J=q.morphAttributes.position||q.morphAttributes.normal||q.morphAttributes.color,B=J!==void 0?J.length:0;let Q=0;q.morphAttributes.position!==void 0&&(Q=1),q.morphAttributes.normal!==void 0&&(Q=2),q.morphAttributes.color!==void 0&&(Q=3);let z,A,R,k;if(te){const ot=wn[te];z=ot.vertexShader,A=ot.fragmentShader}else z=S.vertexShader,A=S.fragmentShader,l.update(S),R=l.getVertexShaderID(S),k=l.getFragmentShaderID(S);const Z=o.getRenderTarget(),ne=o.state.buffers.depth.getReversed(),Y=U.isInstancedMesh===!0,ie=U.isBatchedMesh===!0,me=!!S.map,Le=!!S.matcap,ve=!!O,D=!!S.aoMap,de=!!S.lightMap,he=!!S.bumpMap,qe=!!S.normalMap,ye=!!S.displacementMap,nt=!!S.emissiveMap,pe=!!S.metalnessMap,L=!!S.roughnessMap,E=S.anisotropy>0,K=S.clearcoat>0,le=S.dispersion>0,ce=S.iridescence>0,oe=S.sheen>0,Ee=S.transmission>0,we=E&&!!S.anisotropyMap,Fe=K&&!!S.clearcoatMap,ct=K&&!!S.clearcoatNormalMap,Se=K&&!!S.clearcoatRoughnessMap,He=ce&&!!S.iridescenceMap,Ze=ce&&!!S.iridescenceThicknessMap,Je=oe&&!!S.sheenColorMap,Xe=oe&&!!S.sheenRoughnessMap,ht=!!S.specularMap,it=!!S.specularColorMap,_t=!!S.specularIntensityMap,X=Ee&&!!S.transmissionMap,Pe=Ee&&!!S.thicknessMap,ae=!!S.gradientMap,fe=!!S.alphaMap,ze=S.alphaTest>0,Oe=!!S.alphaHash,rt=!!S.extensions;let bt=ii;S.toneMapped&&(Z===null||Z.isXRRenderTarget===!0)&&(bt=o.toneMapping);const Ut={shaderID:te,shaderType:S.type,shaderName:S.name,vertexShader:z,fragmentShader:A,defines:S.defines,customVertexShaderID:R,customFragmentShaderID:k,isRawShaderMaterial:S.isRawShaderMaterial===!0,glslVersion:S.glslVersion,precision:f,batching:ie,batchingColor:ie&&U._colorsTexture!==null,instancing:Y,instancingColor:Y&&U.instanceColor!==null,instancingMorph:Y&&U.morphTexture!==null,supportsVertexTextures:d,outputColorSpace:Z===null?o.outputColorSpace:Z.isXRRenderTarget===!0?Z.texture.colorSpace:tn,alphaToCoverage:!!S.alphaToCoverage,map:me,matcap:Le,envMap:ve,envMapMode:ve&&O.mapping,envMapCubeUVHeight:N,aoMap:D,lightMap:de,bumpMap:he,normalMap:qe,displacementMap:d&&ye,emissiveMap:nt,normalMapObjectSpace:qe&&S.normalMapType===Sh,normalMapTangentSpace:qe&&S.normalMapType===ha,metalnessMap:pe,roughnessMap:L,anisotropy:E,anisotropyMap:we,clearcoat:K,clearcoatMap:Fe,clearcoatNormalMap:ct,clearcoatRoughnessMap:Se,dispersion:le,iridescence:ce,iridescenceMap:He,iridescenceThicknessMap:Ze,sheen:oe,sheenColorMap:Je,sheenRoughnessMap:Xe,specularMap:ht,specularColorMap:it,specularIntensityMap:_t,transmission:Ee,transmissionMap:X,thicknessMap:Pe,gradientMap:ae,opaque:S.transparent===!1&&S.blending===Fi&&S.alphaToCoverage===!1,alphaMap:fe,alphaTest:ze,alphaHash:Oe,combine:S.combine,mapUv:me&&g(S.map.channel),aoMapUv:D&&g(S.aoMap.channel),lightMapUv:de&&g(S.lightMap.channel),bumpMapUv:he&&g(S.bumpMap.channel),normalMapUv:qe&&g(S.normalMap.channel),displacementMapUv:ye&&g(S.displacementMap.channel),emissiveMapUv:nt&&g(S.emissiveMap.channel),metalnessMapUv:pe&&g(S.metalnessMap.channel),roughnessMapUv:L&&g(S.roughnessMap.channel),anisotropyMapUv:we&&g(S.anisotropyMap.channel),clearcoatMapUv:Fe&&g(S.clearcoatMap.channel),clearcoatNormalMapUv:ct&&g(S.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Se&&g(S.clearcoatRoughnessMap.channel),iridescenceMapUv:He&&g(S.iridescenceMap.channel),iridescenceThicknessMapUv:Ze&&g(S.iridescenceThicknessMap.channel),sheenColorMapUv:Je&&g(S.sheenColorMap.channel),sheenRoughnessMapUv:Xe&&g(S.sheenRoughnessMap.channel),specularMapUv:ht&&g(S.specularMap.channel),specularColorMapUv:it&&g(S.specularColorMap.channel),specularIntensityMapUv:_t&&g(S.specularIntensityMap.channel),transmissionMapUv:X&&g(S.transmissionMap.channel),thicknessMapUv:Pe&&g(S.thicknessMap.channel),alphaMapUv:fe&&g(S.alphaMap.channel),vertexTangents:!!q.attributes.tangent&&(qe||E),vertexColors:S.vertexColors,vertexAlphas:S.vertexColors===!0&&!!q.attributes.color&&q.attributes.color.itemSize===4,pointsUvs:U.isPoints===!0&&!!q.attributes.uv&&(me||fe),fog:!!W,useFog:S.fog===!0,fogExp2:!!W&&W.isFogExp2,flatShading:S.flatShading===!0,sizeAttenuation:S.sizeAttenuation===!0,logarithmicDepthBuffer:c,reverseDepthBuffer:ne,skinning:U.isSkinnedMesh===!0,morphTargets:q.morphAttributes.position!==void 0,morphNormals:q.morphAttributes.normal!==void 0,morphColors:q.morphAttributes.color!==void 0,morphTargetsCount:B,morphTextureStride:Q,numDirLights:M.directional.length,numPointLights:M.point.length,numSpotLights:M.spot.length,numSpotLightMaps:M.spotLightMap.length,numRectAreaLights:M.rectArea.length,numHemiLights:M.hemi.length,numDirLightShadows:M.directionalShadowMap.length,numPointLightShadows:M.pointShadowMap.length,numSpotLightShadows:M.spotShadowMap.length,numSpotLightShadowsWithMaps:M.numSpotLightShadowsWithMaps,numLightProbes:M.numLightProbes,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:S.dithering,shadowMapEnabled:o.shadowMap.enabled&&b.length>0,shadowMapType:o.shadowMap.type,toneMapping:bt,decodeVideoTexture:me&&S.map.isVideoTexture===!0&&Et.getTransfer(S.map.colorSpace)===Rt,decodeVideoTextureEmissive:nt&&S.emissiveMap.isVideoTexture===!0&&Et.getTransfer(S.emissiveMap.colorSpace)===Rt,premultipliedAlpha:S.premultipliedAlpha,doubleSided:S.side===fn,flipSided:S.side===Yt,useDepthPacking:S.depthPacking>=0,depthPacking:S.depthPacking||0,index0AttributeName:S.index0AttributeName,extensionClipCullDistance:rt&&S.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(rt&&S.extensions.multiDraw===!0||ie)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:S.customProgramCacheKey()};return Ut.vertexUv1s=h.has(1),Ut.vertexUv2s=h.has(2),Ut.vertexUv3s=h.has(3),h.clear(),Ut}function p(S){const M=[];if(S.shaderID?M.push(S.shaderID):(M.push(S.customVertexShaderID),M.push(S.customFragmentShaderID)),S.defines!==void 0)for(const b in S.defines)M.push(b),M.push(S.defines[b]);return S.isRawShaderMaterial===!1&&(x(M,S),y(M,S),M.push(o.outputColorSpace)),M.push(S.customProgramCacheKey),M.join()}function x(S,M){S.push(M.precision),S.push(M.outputColorSpace),S.push(M.envMapMode),S.push(M.envMapCubeUVHeight),S.push(M.mapUv),S.push(M.alphaMapUv),S.push(M.lightMapUv),S.push(M.aoMapUv),S.push(M.bumpMapUv),S.push(M.normalMapUv),S.push(M.displacementMapUv),S.push(M.emissiveMapUv),S.push(M.metalnessMapUv),S.push(M.roughnessMapUv),S.push(M.anisotropyMapUv),S.push(M.clearcoatMapUv),S.push(M.clearcoatNormalMapUv),S.push(M.clearcoatRoughnessMapUv),S.push(M.iridescenceMapUv),S.push(M.iridescenceThicknessMapUv),S.push(M.sheenColorMapUv),S.push(M.sheenRoughnessMapUv),S.push(M.specularMapUv),S.push(M.specularColorMapUv),S.push(M.specularIntensityMapUv),S.push(M.transmissionMapUv),S.push(M.thicknessMapUv),S.push(M.combine),S.push(M.fogExp2),S.push(M.sizeAttenuation),S.push(M.morphTargetsCount),S.push(M.morphAttributeCount),S.push(M.numDirLights),S.push(M.numPointLights),S.push(M.numSpotLights),S.push(M.numSpotLightMaps),S.push(M.numHemiLights),S.push(M.numRectAreaLights),S.push(M.numDirLightShadows),S.push(M.numPointLightShadows),S.push(M.numSpotLightShadows),S.push(M.numSpotLightShadowsWithMaps),S.push(M.numLightProbes),S.push(M.shadowMapType),S.push(M.toneMapping),S.push(M.numClippingPlanes),S.push(M.numClipIntersection),S.push(M.depthPacking)}function y(S,M){a.disableAll(),M.supportsVertexTextures&&a.enable(0),M.instancing&&a.enable(1),M.instancingColor&&a.enable(2),M.instancingMorph&&a.enable(3),M.matcap&&a.enable(4),M.envMap&&a.enable(5),M.normalMapObjectSpace&&a.enable(6),M.normalMapTangentSpace&&a.enable(7),M.clearcoat&&a.enable(8),M.iridescence&&a.enable(9),M.alphaTest&&a.enable(10),M.vertexColors&&a.enable(11),M.vertexAlphas&&a.enable(12),M.vertexUv1s&&a.enable(13),M.vertexUv2s&&a.enable(14),M.vertexUv3s&&a.enable(15),M.vertexTangents&&a.enable(16),M.anisotropy&&a.enable(17),M.alphaHash&&a.enable(18),M.batching&&a.enable(19),M.dispersion&&a.enable(20),M.batchingColor&&a.enable(21),S.push(a.mask),a.disableAll(),M.fog&&a.enable(0),M.useFog&&a.enable(1),M.flatShading&&a.enable(2),M.logarithmicDepthBuffer&&a.enable(3),M.reverseDepthBuffer&&a.enable(4),M.skinning&&a.enable(5),M.morphTargets&&a.enable(6),M.morphNormals&&a.enable(7),M.morphColors&&a.enable(8),M.premultipliedAlpha&&a.enable(9),M.shadowMapEnabled&&a.enable(10),M.doubleSided&&a.enable(11),M.flipSided&&a.enable(12),M.useDepthPacking&&a.enable(13),M.dithering&&a.enable(14),M.transmission&&a.enable(15),M.sheen&&a.enable(16),M.opaque&&a.enable(17),M.pointsUvs&&a.enable(18),M.decodeVideoTexture&&a.enable(19),M.decodeVideoTextureEmissive&&a.enable(20),M.alphaToCoverage&&a.enable(21),S.push(a.mask)}function _(S){const M=m[S.type];let b;if(M){const F=wn[M];b=mu.clone(F.uniforms)}else b=S.uniforms;return b}function T(S,M){let b;for(let F=0,U=u.length;F<U;F++){const W=u[F];if(W.cacheKey===M){b=W,++b.usedTimes;break}}return b===void 0&&(b=new yv(o,M,S,s),u.push(b)),b}function C(S){if(--S.usedTimes===0){const M=u.indexOf(S);u[M]=u[u.length-1],u.pop(),S.destroy()}}function I(S){l.remove(S)}function P(){l.dispose()}return{getParameters:v,getProgramCacheKey:p,getUniforms:_,acquireProgram:T,releaseProgram:C,releaseShaderCache:I,programs:u,dispose:P}}function bv(){let o=new WeakMap;function e(r){return o.has(r)}function t(r){let a=o.get(r);return a===void 0&&(a={},o.set(r,a)),a}function n(r){o.delete(r)}function i(r,a,l){o.get(r)[a]=l}function s(){o=new WeakMap}return{has:e,get:t,remove:n,update:i,dispose:s}}function Tv(o,e){return o.groupOrder!==e.groupOrder?o.groupOrder-e.groupOrder:o.renderOrder!==e.renderOrder?o.renderOrder-e.renderOrder:o.material.id!==e.material.id?o.material.id-e.material.id:o.z!==e.z?o.z-e.z:o.id-e.id}function kl(o,e){return o.groupOrder!==e.groupOrder?o.groupOrder-e.groupOrder:o.renderOrder!==e.renderOrder?o.renderOrder-e.renderOrder:o.z!==e.z?e.z-o.z:o.id-e.id}function Hl(){const o=[];let e=0;const t=[],n=[],i=[];function s(){e=0,t.length=0,n.length=0,i.length=0}function r(c,d,f,m,g,v){let p=o[e];return p===void 0?(p={id:c.id,object:c,geometry:d,material:f,groupOrder:m,renderOrder:c.renderOrder,z:g,group:v},o[e]=p):(p.id=c.id,p.object=c,p.geometry=d,p.material=f,p.groupOrder=m,p.renderOrder=c.renderOrder,p.z=g,p.group=v),e++,p}function a(c,d,f,m,g,v){const p=r(c,d,f,m,g,v);f.transmission>0?n.push(p):f.transparent===!0?i.push(p):t.push(p)}function l(c,d,f,m,g,v){const p=r(c,d,f,m,g,v);f.transmission>0?n.unshift(p):f.transparent===!0?i.unshift(p):t.unshift(p)}function h(c,d){t.length>1&&t.sort(c||Tv),n.length>1&&n.sort(d||kl),i.length>1&&i.sort(d||kl)}function u(){for(let c=e,d=o.length;c<d;c++){const f=o[c];if(f.id===null)break;f.id=null,f.object=null,f.geometry=null,f.material=null,f.group=null}}return{opaque:t,transmissive:n,transparent:i,init:s,push:a,unshift:l,finish:u,sort:h}}function Av(){let o=new WeakMap;function e(n,i){const s=o.get(n);let r;return s===void 0?(r=new Hl,o.set(n,[r])):i>=s.length?(r=new Hl,s.push(r)):r=s[i],r}function t(){o=new WeakMap}return{get:e,dispose:t}}function Rv(){const o={};return{get:function(e){if(o[e.id]!==void 0)return o[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new H,color:new lt};break;case"SpotLight":t={position:new H,direction:new H,color:new lt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new H,color:new lt,distance:0,decay:0};break;case"HemisphereLight":t={direction:new H,skyColor:new lt,groundColor:new lt};break;case"RectAreaLight":t={color:new lt,position:new H,halfWidth:new H,halfHeight:new H};break}return o[e.id]=t,t}}}function Cv(){const o={};return{get:function(e){if(o[e.id]!==void 0)return o[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ft};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ft};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ft,shadowCameraNear:1,shadowCameraFar:1e3};break}return o[e.id]=t,t}}}let Pv=0;function Lv(o,e){return(e.castShadow?2:0)-(o.castShadow?2:0)+(e.map?1:0)-(o.map?1:0)}function Iv(o){const e=new Rv,t=Cv(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let h=0;h<9;h++)n.probe.push(new H);const i=new H,s=new pt,r=new pt;function a(h){let u=0,c=0,d=0;for(let S=0;S<9;S++)n.probe[S].set(0,0,0);let f=0,m=0,g=0,v=0,p=0,x=0,y=0,_=0,T=0,C=0,I=0;h.sort(Lv);for(let S=0,M=h.length;S<M;S++){const b=h[S],F=b.color,U=b.intensity,W=b.distance,q=b.shadow&&b.shadow.map?b.shadow.map.texture:null;if(b.isAmbientLight)u+=F.r*U,c+=F.g*U,d+=F.b*U;else if(b.isLightProbe){for(let ee=0;ee<9;ee++)n.probe[ee].addScaledVector(b.sh.coefficients[ee],U);I++}else if(b.isDirectionalLight){const ee=e.get(b);if(ee.color.copy(b.color).multiplyScalar(b.intensity),b.castShadow){const O=b.shadow,N=t.get(b);N.shadowIntensity=O.intensity,N.shadowBias=O.bias,N.shadowNormalBias=O.normalBias,N.shadowRadius=O.radius,N.shadowMapSize=O.mapSize,n.directionalShadow[f]=N,n.directionalShadowMap[f]=q,n.directionalShadowMatrix[f]=b.shadow.matrix,x++}n.directional[f]=ee,f++}else if(b.isSpotLight){const ee=e.get(b);ee.position.setFromMatrixPosition(b.matrixWorld),ee.color.copy(F).multiplyScalar(U),ee.distance=W,ee.coneCos=Math.cos(b.angle),ee.penumbraCos=Math.cos(b.angle*(1-b.penumbra)),ee.decay=b.decay,n.spot[g]=ee;const O=b.shadow;if(b.map&&(n.spotLightMap[T]=b.map,T++,O.updateMatrices(b),b.castShadow&&C++),n.spotLightMatrix[g]=O.matrix,b.castShadow){const N=t.get(b);N.shadowIntensity=O.intensity,N.shadowBias=O.bias,N.shadowNormalBias=O.normalBias,N.shadowRadius=O.radius,N.shadowMapSize=O.mapSize,n.spotShadow[g]=N,n.spotShadowMap[g]=q,_++}g++}else if(b.isRectAreaLight){const ee=e.get(b);ee.color.copy(F).multiplyScalar(U),ee.halfWidth.set(b.width*.5,0,0),ee.halfHeight.set(0,b.height*.5,0),n.rectArea[v]=ee,v++}else if(b.isPointLight){const ee=e.get(b);if(ee.color.copy(b.color).multiplyScalar(b.intensity),ee.distance=b.distance,ee.decay=b.decay,b.castShadow){const O=b.shadow,N=t.get(b);N.shadowIntensity=O.intensity,N.shadowBias=O.bias,N.shadowNormalBias=O.normalBias,N.shadowRadius=O.radius,N.shadowMapSize=O.mapSize,N.shadowCameraNear=O.camera.near,N.shadowCameraFar=O.camera.far,n.pointShadow[m]=N,n.pointShadowMap[m]=q,n.pointShadowMatrix[m]=b.shadow.matrix,y++}n.point[m]=ee,m++}else if(b.isHemisphereLight){const ee=e.get(b);ee.skyColor.copy(b.color).multiplyScalar(U),ee.groundColor.copy(b.groundColor).multiplyScalar(U),n.hemi[p]=ee,p++}}v>0&&(o.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=ke.LTC_FLOAT_1,n.rectAreaLTC2=ke.LTC_FLOAT_2):(n.rectAreaLTC1=ke.LTC_HALF_1,n.rectAreaLTC2=ke.LTC_HALF_2)),n.ambient[0]=u,n.ambient[1]=c,n.ambient[2]=d;const P=n.hash;(P.directionalLength!==f||P.pointLength!==m||P.spotLength!==g||P.rectAreaLength!==v||P.hemiLength!==p||P.numDirectionalShadows!==x||P.numPointShadows!==y||P.numSpotShadows!==_||P.numSpotMaps!==T||P.numLightProbes!==I)&&(n.directional.length=f,n.spot.length=g,n.rectArea.length=v,n.point.length=m,n.hemi.length=p,n.directionalShadow.length=x,n.directionalShadowMap.length=x,n.pointShadow.length=y,n.pointShadowMap.length=y,n.spotShadow.length=_,n.spotShadowMap.length=_,n.directionalShadowMatrix.length=x,n.pointShadowMatrix.length=y,n.spotLightMatrix.length=_+T-C,n.spotLightMap.length=T,n.numSpotLightShadowsWithMaps=C,n.numLightProbes=I,P.directionalLength=f,P.pointLength=m,P.spotLength=g,P.rectAreaLength=v,P.hemiLength=p,P.numDirectionalShadows=x,P.numPointShadows=y,P.numSpotShadows=_,P.numSpotMaps=T,P.numLightProbes=I,n.version=Pv++)}function l(h,u){let c=0,d=0,f=0,m=0,g=0;const v=u.matrixWorldInverse;for(let p=0,x=h.length;p<x;p++){const y=h[p];if(y.isDirectionalLight){const _=n.directional[c];_.direction.setFromMatrixPosition(y.matrixWorld),i.setFromMatrixPosition(y.target.matrixWorld),_.direction.sub(i),_.direction.transformDirection(v),c++}else if(y.isSpotLight){const _=n.spot[f];_.position.setFromMatrixPosition(y.matrixWorld),_.position.applyMatrix4(v),_.direction.setFromMatrixPosition(y.matrixWorld),i.setFromMatrixPosition(y.target.matrixWorld),_.direction.sub(i),_.direction.transformDirection(v),f++}else if(y.isRectAreaLight){const _=n.rectArea[m];_.position.setFromMatrixPosition(y.matrixWorld),_.position.applyMatrix4(v),r.identity(),s.copy(y.matrixWorld),s.premultiply(v),r.extractRotation(s),_.halfWidth.set(y.width*.5,0,0),_.halfHeight.set(0,y.height*.5,0),_.halfWidth.applyMatrix4(r),_.halfHeight.applyMatrix4(r),m++}else if(y.isPointLight){const _=n.point[d];_.position.setFromMatrixPosition(y.matrixWorld),_.position.applyMatrix4(v),d++}else if(y.isHemisphereLight){const _=n.hemi[g];_.direction.setFromMatrixPosition(y.matrixWorld),_.direction.transformDirection(v),g++}}}return{setup:a,setupView:l,state:n}}function Gl(o){const e=new Iv(o),t=[],n=[];function i(u){h.camera=u,t.length=0,n.length=0}function s(u){t.push(u)}function r(u){n.push(u)}function a(){e.setup(t)}function l(u){e.setupView(t,u)}const h={lightsArray:t,shadowsArray:n,camera:null,lights:e,transmissionRenderTarget:{}};return{init:i,state:h,setupLights:a,setupLightsView:l,pushLight:s,pushShadow:r}}function Nv(o){let e=new WeakMap;function t(i,s=0){const r=e.get(i);let a;return r===void 0?(a=new Gl(o),e.set(i,[a])):s>=r.length?(a=new Gl(o),r.push(a)):a=r[s],a}function n(){e=new WeakMap}return{get:t,dispose:n}}const Dv=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Uv=`uniform sampler2D shadow_pass;
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
}`;function Fv(o,e,t){let n=new va;const i=new ft,s=new ft,r=new wt,a=new Nu({depthPacking:Mh}),l=new Du,h={},u=t.maxTextureSize,c={[Gn]:Yt,[Yt]:Gn,[fn]:fn},d=new Xn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ft},radius:{value:4}},vertexShader:Dv,fragmentShader:Uv}),f=d.clone();f.defines.HORIZONTAL_PASS=1;const m=new rn;m.setAttribute("position",new en(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const g=new Nt(m,d),v=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=tc;let p=this.type;this.render=function(C,I,P){if(v.enabled===!1||v.autoUpdate===!1&&v.needsUpdate===!1||C.length===0)return;const S=o.getRenderTarget(),M=o.getActiveCubeFace(),b=o.getActiveMipmapLevel(),F=o.state;F.setBlending(ni),F.buffers.color.setClear(1,1,1,1),F.buffers.depth.setTest(!0),F.setScissorTest(!1);const U=p!==On&&this.type===On,W=p===On&&this.type!==On;for(let q=0,ee=C.length;q<ee;q++){const O=C[q],N=O.shadow;if(N===void 0){console.warn("THREE.WebGLShadowMap:",O,"has no shadow.");continue}if(N.autoUpdate===!1&&N.needsUpdate===!1)continue;i.copy(N.mapSize);const te=N.getFrameExtents();if(i.multiply(te),s.copy(N.mapSize),(i.x>u||i.y>u)&&(i.x>u&&(s.x=Math.floor(u/te.x),i.x=s.x*te.x,N.mapSize.x=s.x),i.y>u&&(s.y=Math.floor(u/te.y),i.y=s.y*te.y,N.mapSize.y=s.y)),N.map===null||U===!0||W===!0){const B=this.type!==On?{minFilter:Qt,magFilter:Qt}:{};N.map!==null&&N.map.dispose(),N.map=new _i(i.x,i.y,B),N.map.texture.name=O.name+".shadowMap",N.camera.updateProjectionMatrix()}o.setRenderTarget(N.map),o.clear();const J=N.getViewportCount();for(let B=0;B<J;B++){const Q=N.getViewport(B);r.set(s.x*Q.x,s.y*Q.y,s.x*Q.z,s.y*Q.w),F.viewport(r),N.updateMatrices(O,B),n=N.getFrustum(),_(I,P,N.camera,O,this.type)}N.isPointLightShadow!==!0&&this.type===On&&x(N,P),N.needsUpdate=!1}p=this.type,v.needsUpdate=!1,o.setRenderTarget(S,M,b)};function x(C,I){const P=e.update(g);d.defines.VSM_SAMPLES!==C.blurSamples&&(d.defines.VSM_SAMPLES=C.blurSamples,f.defines.VSM_SAMPLES=C.blurSamples,d.needsUpdate=!0,f.needsUpdate=!0),C.mapPass===null&&(C.mapPass=new _i(i.x,i.y)),d.uniforms.shadow_pass.value=C.map.texture,d.uniforms.resolution.value=C.mapSize,d.uniforms.radius.value=C.radius,o.setRenderTarget(C.mapPass),o.clear(),o.renderBufferDirect(I,null,P,d,g,null),f.uniforms.shadow_pass.value=C.mapPass.texture,f.uniforms.resolution.value=C.mapSize,f.uniforms.radius.value=C.radius,o.setRenderTarget(C.map),o.clear(),o.renderBufferDirect(I,null,P,f,g,null)}function y(C,I,P,S){let M=null;const b=P.isPointLight===!0?C.customDistanceMaterial:C.customDepthMaterial;if(b!==void 0)M=b;else if(M=P.isPointLight===!0?l:a,o.localClippingEnabled&&I.clipShadows===!0&&Array.isArray(I.clippingPlanes)&&I.clippingPlanes.length!==0||I.displacementMap&&I.displacementScale!==0||I.alphaMap&&I.alphaTest>0||I.map&&I.alphaTest>0){const F=M.uuid,U=I.uuid;let W=h[F];W===void 0&&(W={},h[F]=W);let q=W[U];q===void 0&&(q=M.clone(),W[U]=q,I.addEventListener("dispose",T)),M=q}if(M.visible=I.visible,M.wireframe=I.wireframe,S===On?M.side=I.shadowSide!==null?I.shadowSide:I.side:M.side=I.shadowSide!==null?I.shadowSide:c[I.side],M.alphaMap=I.alphaMap,M.alphaTest=I.alphaTest,M.map=I.map,M.clipShadows=I.clipShadows,M.clippingPlanes=I.clippingPlanes,M.clipIntersection=I.clipIntersection,M.displacementMap=I.displacementMap,M.displacementScale=I.displacementScale,M.displacementBias=I.displacementBias,M.wireframeLinewidth=I.wireframeLinewidth,M.linewidth=I.linewidth,P.isPointLight===!0&&M.isMeshDistanceMaterial===!0){const F=o.properties.get(M);F.light=P}return M}function _(C,I,P,S,M){if(C.visible===!1)return;if(C.layers.test(I.layers)&&(C.isMesh||C.isLine||C.isPoints)&&(C.castShadow||C.receiveShadow&&M===On)&&(!C.frustumCulled||n.intersectsObject(C))){C.modelViewMatrix.multiplyMatrices(P.matrixWorldInverse,C.matrixWorld);const U=e.update(C),W=C.material;if(Array.isArray(W)){const q=U.groups;for(let ee=0,O=q.length;ee<O;ee++){const N=q[ee],te=W[N.materialIndex];if(te&&te.visible){const J=y(C,te,S,M);C.onBeforeShadow(o,C,I,P,U,J,N),o.renderBufferDirect(P,null,U,J,C,N),C.onAfterShadow(o,C,I,P,U,J,N)}}}else if(W.visible){const q=y(C,W,S,M);C.onBeforeShadow(o,C,I,P,U,q,null),o.renderBufferDirect(P,null,U,q,C,null),C.onAfterShadow(o,C,I,P,U,q,null)}}const F=C.children;for(let U=0,W=F.length;U<W;U++)_(F[U],I,P,S,M)}function T(C){C.target.removeEventListener("dispose",T);for(const P in h){const S=h[P],M=C.target.uuid;M in S&&(S[M].dispose(),delete S[M])}}}const Bv={[po]:mo,[vo]:xo,[go]:yo,[ki]:_o,[mo]:po,[xo]:vo,[yo]:go,[_o]:ki};function Ov(o,e){function t(){let X=!1;const Pe=new wt;let ae=null;const fe=new wt(0,0,0,0);return{setMask:function(ze){ae!==ze&&!X&&(o.colorMask(ze,ze,ze,ze),ae=ze)},setLocked:function(ze){X=ze},setClear:function(ze,Oe,rt,bt,Ut){Ut===!0&&(ze*=bt,Oe*=bt,rt*=bt),Pe.set(ze,Oe,rt,bt),fe.equals(Pe)===!1&&(o.clearColor(ze,Oe,rt,bt),fe.copy(Pe))},reset:function(){X=!1,ae=null,fe.set(-1,0,0,0)}}}function n(){let X=!1,Pe=!1,ae=null,fe=null,ze=null;return{setReversed:function(Oe){if(Pe!==Oe){const rt=e.get("EXT_clip_control");Pe?rt.clipControlEXT(rt.LOWER_LEFT_EXT,rt.ZERO_TO_ONE_EXT):rt.clipControlEXT(rt.LOWER_LEFT_EXT,rt.NEGATIVE_ONE_TO_ONE_EXT);const bt=ze;ze=null,this.setClear(bt)}Pe=Oe},getReversed:function(){return Pe},setTest:function(Oe){Oe?Z(o.DEPTH_TEST):ne(o.DEPTH_TEST)},setMask:function(Oe){ae!==Oe&&!X&&(o.depthMask(Oe),ae=Oe)},setFunc:function(Oe){if(Pe&&(Oe=Bv[Oe]),fe!==Oe){switch(Oe){case po:o.depthFunc(o.NEVER);break;case mo:o.depthFunc(o.ALWAYS);break;case vo:o.depthFunc(o.LESS);break;case ki:o.depthFunc(o.LEQUAL);break;case go:o.depthFunc(o.EQUAL);break;case _o:o.depthFunc(o.GEQUAL);break;case xo:o.depthFunc(o.GREATER);break;case yo:o.depthFunc(o.NOTEQUAL);break;default:o.depthFunc(o.LEQUAL)}fe=Oe}},setLocked:function(Oe){X=Oe},setClear:function(Oe){ze!==Oe&&(Pe&&(Oe=1-Oe),o.clearDepth(Oe),ze=Oe)},reset:function(){X=!1,ae=null,fe=null,ze=null,Pe=!1}}}function i(){let X=!1,Pe=null,ae=null,fe=null,ze=null,Oe=null,rt=null,bt=null,Ut=null;return{setTest:function(ot){X||(ot?Z(o.STENCIL_TEST):ne(o.STENCIL_TEST))},setMask:function(ot){Pe!==ot&&!X&&(o.stencilMask(ot),Pe=ot)},setFunc:function(ot,re,ue){(ae!==ot||fe!==re||ze!==ue)&&(o.stencilFunc(ot,re,ue),ae=ot,fe=re,ze=ue)},setOp:function(ot,re,ue){(Oe!==ot||rt!==re||bt!==ue)&&(o.stencilOp(ot,re,ue),Oe=ot,rt=re,bt=ue)},setLocked:function(ot){X=ot},setClear:function(ot){Ut!==ot&&(o.clearStencil(ot),Ut=ot)},reset:function(){X=!1,Pe=null,ae=null,fe=null,ze=null,Oe=null,rt=null,bt=null,Ut=null}}}const s=new t,r=new n,a=new i,l=new WeakMap,h=new WeakMap;let u={},c={},d=new WeakMap,f=[],m=null,g=!1,v=null,p=null,x=null,y=null,_=null,T=null,C=null,I=new lt(0,0,0),P=0,S=!1,M=null,b=null,F=null,U=null,W=null;const q=o.getParameter(o.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let ee=!1,O=0;const N=o.getParameter(o.VERSION);N.indexOf("WebGL")!==-1?(O=parseFloat(/^WebGL (\d)/.exec(N)[1]),ee=O>=1):N.indexOf("OpenGL ES")!==-1&&(O=parseFloat(/^OpenGL ES (\d)/.exec(N)[1]),ee=O>=2);let te=null,J={};const B=o.getParameter(o.SCISSOR_BOX),Q=o.getParameter(o.VIEWPORT),z=new wt().fromArray(B),A=new wt().fromArray(Q);function R(X,Pe,ae,fe){const ze=new Uint8Array(4),Oe=o.createTexture();o.bindTexture(X,Oe),o.texParameteri(X,o.TEXTURE_MIN_FILTER,o.NEAREST),o.texParameteri(X,o.TEXTURE_MAG_FILTER,o.NEAREST);for(let rt=0;rt<ae;rt++)X===o.TEXTURE_3D||X===o.TEXTURE_2D_ARRAY?o.texImage3D(Pe,0,o.RGBA,1,1,fe,0,o.RGBA,o.UNSIGNED_BYTE,ze):o.texImage2D(Pe+rt,0,o.RGBA,1,1,0,o.RGBA,o.UNSIGNED_BYTE,ze);return Oe}const k={};k[o.TEXTURE_2D]=R(o.TEXTURE_2D,o.TEXTURE_2D,1),k[o.TEXTURE_CUBE_MAP]=R(o.TEXTURE_CUBE_MAP,o.TEXTURE_CUBE_MAP_POSITIVE_X,6),k[o.TEXTURE_2D_ARRAY]=R(o.TEXTURE_2D_ARRAY,o.TEXTURE_2D_ARRAY,1,1),k[o.TEXTURE_3D]=R(o.TEXTURE_3D,o.TEXTURE_3D,1,1),s.setClear(0,0,0,1),r.setClear(1),a.setClear(0),Z(o.DEPTH_TEST),r.setFunc(ki),he(!1),qe(Aa),Z(o.CULL_FACE),D(ni);function Z(X){u[X]!==!0&&(o.enable(X),u[X]=!0)}function ne(X){u[X]!==!1&&(o.disable(X),u[X]=!1)}function Y(X,Pe){return c[X]!==Pe?(o.bindFramebuffer(X,Pe),c[X]=Pe,X===o.DRAW_FRAMEBUFFER&&(c[o.FRAMEBUFFER]=Pe),X===o.FRAMEBUFFER&&(c[o.DRAW_FRAMEBUFFER]=Pe),!0):!1}function ie(X,Pe){let ae=f,fe=!1;if(X){ae=d.get(Pe),ae===void 0&&(ae=[],d.set(Pe,ae));const ze=X.textures;if(ae.length!==ze.length||ae[0]!==o.COLOR_ATTACHMENT0){for(let Oe=0,rt=ze.length;Oe<rt;Oe++)ae[Oe]=o.COLOR_ATTACHMENT0+Oe;ae.length=ze.length,fe=!0}}else ae[0]!==o.BACK&&(ae[0]=o.BACK,fe=!0);fe&&o.drawBuffers(ae)}function me(X){return m!==X?(o.useProgram(X),m=X,!0):!1}const Le={[mi]:o.FUNC_ADD,[qc]:o.FUNC_SUBTRACT,[Yc]:o.FUNC_REVERSE_SUBTRACT};Le[jc]=o.MIN,Le[Kc]=o.MAX;const ve={[Zc]:o.ZERO,[$c]:o.ONE,[Jc]:o.SRC_COLOR,[uo]:o.SRC_ALPHA,[sh]:o.SRC_ALPHA_SATURATE,[nh]:o.DST_COLOR,[eh]:o.DST_ALPHA,[Qc]:o.ONE_MINUS_SRC_COLOR,[fo]:o.ONE_MINUS_SRC_ALPHA,[ih]:o.ONE_MINUS_DST_COLOR,[th]:o.ONE_MINUS_DST_ALPHA,[rh]:o.CONSTANT_COLOR,[oh]:o.ONE_MINUS_CONSTANT_COLOR,[ah]:o.CONSTANT_ALPHA,[lh]:o.ONE_MINUS_CONSTANT_ALPHA};function D(X,Pe,ae,fe,ze,Oe,rt,bt,Ut,ot){if(X===ni){g===!0&&(ne(o.BLEND),g=!1);return}if(g===!1&&(Z(o.BLEND),g=!0),X!==Xc){if(X!==v||ot!==S){if((p!==mi||_!==mi)&&(o.blendEquation(o.FUNC_ADD),p=mi,_=mi),ot)switch(X){case Fi:o.blendFuncSeparate(o.ONE,o.ONE_MINUS_SRC_ALPHA,o.ONE,o.ONE_MINUS_SRC_ALPHA);break;case Ra:o.blendFunc(o.ONE,o.ONE);break;case Ca:o.blendFuncSeparate(o.ZERO,o.ONE_MINUS_SRC_COLOR,o.ZERO,o.ONE);break;case Pa:o.blendFuncSeparate(o.ZERO,o.SRC_COLOR,o.ZERO,o.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",X);break}else switch(X){case Fi:o.blendFuncSeparate(o.SRC_ALPHA,o.ONE_MINUS_SRC_ALPHA,o.ONE,o.ONE_MINUS_SRC_ALPHA);break;case Ra:o.blendFunc(o.SRC_ALPHA,o.ONE);break;case Ca:o.blendFuncSeparate(o.ZERO,o.ONE_MINUS_SRC_COLOR,o.ZERO,o.ONE);break;case Pa:o.blendFunc(o.ZERO,o.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",X);break}x=null,y=null,T=null,C=null,I.set(0,0,0),P=0,v=X,S=ot}return}ze=ze||Pe,Oe=Oe||ae,rt=rt||fe,(Pe!==p||ze!==_)&&(o.blendEquationSeparate(Le[Pe],Le[ze]),p=Pe,_=ze),(ae!==x||fe!==y||Oe!==T||rt!==C)&&(o.blendFuncSeparate(ve[ae],ve[fe],ve[Oe],ve[rt]),x=ae,y=fe,T=Oe,C=rt),(bt.equals(I)===!1||Ut!==P)&&(o.blendColor(bt.r,bt.g,bt.b,Ut),I.copy(bt),P=Ut),v=X,S=!1}function de(X,Pe){X.side===fn?ne(o.CULL_FACE):Z(o.CULL_FACE);let ae=X.side===Yt;Pe&&(ae=!ae),he(ae),X.blending===Fi&&X.transparent===!1?D(ni):D(X.blending,X.blendEquation,X.blendSrc,X.blendDst,X.blendEquationAlpha,X.blendSrcAlpha,X.blendDstAlpha,X.blendColor,X.blendAlpha,X.premultipliedAlpha),r.setFunc(X.depthFunc),r.setTest(X.depthTest),r.setMask(X.depthWrite),s.setMask(X.colorWrite);const fe=X.stencilWrite;a.setTest(fe),fe&&(a.setMask(X.stencilWriteMask),a.setFunc(X.stencilFunc,X.stencilRef,X.stencilFuncMask),a.setOp(X.stencilFail,X.stencilZFail,X.stencilZPass)),nt(X.polygonOffset,X.polygonOffsetFactor,X.polygonOffsetUnits),X.alphaToCoverage===!0?Z(o.SAMPLE_ALPHA_TO_COVERAGE):ne(o.SAMPLE_ALPHA_TO_COVERAGE)}function he(X){M!==X&&(X?o.frontFace(o.CW):o.frontFace(o.CCW),M=X)}function qe(X){X!==Gc?(Z(o.CULL_FACE),X!==b&&(X===Aa?o.cullFace(o.BACK):X===Wc?o.cullFace(o.FRONT):o.cullFace(o.FRONT_AND_BACK))):ne(o.CULL_FACE),b=X}function ye(X){X!==F&&(ee&&o.lineWidth(X),F=X)}function nt(X,Pe,ae){X?(Z(o.POLYGON_OFFSET_FILL),(U!==Pe||W!==ae)&&(o.polygonOffset(Pe,ae),U=Pe,W=ae)):ne(o.POLYGON_OFFSET_FILL)}function pe(X){X?Z(o.SCISSOR_TEST):ne(o.SCISSOR_TEST)}function L(X){X===void 0&&(X=o.TEXTURE0+q-1),te!==X&&(o.activeTexture(X),te=X)}function E(X,Pe,ae){ae===void 0&&(te===null?ae=o.TEXTURE0+q-1:ae=te);let fe=J[ae];fe===void 0&&(fe={type:void 0,texture:void 0},J[ae]=fe),(fe.type!==X||fe.texture!==Pe)&&(te!==ae&&(o.activeTexture(ae),te=ae),o.bindTexture(X,Pe||k[X]),fe.type=X,fe.texture=Pe)}function K(){const X=J[te];X!==void 0&&X.type!==void 0&&(o.bindTexture(X.type,null),X.type=void 0,X.texture=void 0)}function le(){try{o.compressedTexImage2D(...arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function ce(){try{o.compressedTexImage3D(...arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function oe(){try{o.texSubImage2D(...arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function Ee(){try{o.texSubImage3D(...arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function we(){try{o.compressedTexSubImage2D(...arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function Fe(){try{o.compressedTexSubImage3D(...arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function ct(){try{o.texStorage2D(...arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function Se(){try{o.texStorage3D(...arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function He(){try{o.texImage2D(...arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function Ze(){try{o.texImage3D(...arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function Je(X){z.equals(X)===!1&&(o.scissor(X.x,X.y,X.z,X.w),z.copy(X))}function Xe(X){A.equals(X)===!1&&(o.viewport(X.x,X.y,X.z,X.w),A.copy(X))}function ht(X,Pe){let ae=h.get(Pe);ae===void 0&&(ae=new WeakMap,h.set(Pe,ae));let fe=ae.get(X);fe===void 0&&(fe=o.getUniformBlockIndex(Pe,X.name),ae.set(X,fe))}function it(X,Pe){const fe=h.get(Pe).get(X);l.get(Pe)!==fe&&(o.uniformBlockBinding(Pe,fe,X.__bindingPointIndex),l.set(Pe,fe))}function _t(){o.disable(o.BLEND),o.disable(o.CULL_FACE),o.disable(o.DEPTH_TEST),o.disable(o.POLYGON_OFFSET_FILL),o.disable(o.SCISSOR_TEST),o.disable(o.STENCIL_TEST),o.disable(o.SAMPLE_ALPHA_TO_COVERAGE),o.blendEquation(o.FUNC_ADD),o.blendFunc(o.ONE,o.ZERO),o.blendFuncSeparate(o.ONE,o.ZERO,o.ONE,o.ZERO),o.blendColor(0,0,0,0),o.colorMask(!0,!0,!0,!0),o.clearColor(0,0,0,0),o.depthMask(!0),o.depthFunc(o.LESS),r.setReversed(!1),o.clearDepth(1),o.stencilMask(4294967295),o.stencilFunc(o.ALWAYS,0,4294967295),o.stencilOp(o.KEEP,o.KEEP,o.KEEP),o.clearStencil(0),o.cullFace(o.BACK),o.frontFace(o.CCW),o.polygonOffset(0,0),o.activeTexture(o.TEXTURE0),o.bindFramebuffer(o.FRAMEBUFFER,null),o.bindFramebuffer(o.DRAW_FRAMEBUFFER,null),o.bindFramebuffer(o.READ_FRAMEBUFFER,null),o.useProgram(null),o.lineWidth(1),o.scissor(0,0,o.canvas.width,o.canvas.height),o.viewport(0,0,o.canvas.width,o.canvas.height),u={},te=null,J={},c={},d=new WeakMap,f=[],m=null,g=!1,v=null,p=null,x=null,y=null,_=null,T=null,C=null,I=new lt(0,0,0),P=0,S=!1,M=null,b=null,F=null,U=null,W=null,z.set(0,0,o.canvas.width,o.canvas.height),A.set(0,0,o.canvas.width,o.canvas.height),s.reset(),r.reset(),a.reset()}return{buffers:{color:s,depth:r,stencil:a},enable:Z,disable:ne,bindFramebuffer:Y,drawBuffers:ie,useProgram:me,setBlending:D,setMaterial:de,setFlipSided:he,setCullFace:qe,setLineWidth:ye,setPolygonOffset:nt,setScissorTest:pe,activeTexture:L,bindTexture:E,unbindTexture:K,compressedTexImage2D:le,compressedTexImage3D:ce,texImage2D:He,texImage3D:Ze,updateUBOMapping:ht,uniformBlockBinding:it,texStorage2D:ct,texStorage3D:Se,texSubImage2D:oe,texSubImage3D:Ee,compressedTexSubImage2D:we,compressedTexSubImage3D:Fe,scissor:Je,viewport:Xe,reset:_t}}function zv(o,e,t,n,i,s,r){const a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),h=new ft,u=new WeakMap;let c;const d=new WeakMap;let f=!1;try{f=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function m(L,E){return f?new OffscreenCanvas(L,E):Ss("canvas")}function g(L,E,K){let le=1;const ce=pe(L);if((ce.width>K||ce.height>K)&&(le=K/Math.max(ce.width,ce.height)),le<1)if(typeof HTMLImageElement<"u"&&L instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&L instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&L instanceof ImageBitmap||typeof VideoFrame<"u"&&L instanceof VideoFrame){const oe=Math.floor(le*ce.width),Ee=Math.floor(le*ce.height);c===void 0&&(c=m(oe,Ee));const we=E?m(oe,Ee):c;return we.width=oe,we.height=Ee,we.getContext("2d").drawImage(L,0,0,oe,Ee),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+ce.width+"x"+ce.height+") to ("+oe+"x"+Ee+")."),we}else return"data"in L&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+ce.width+"x"+ce.height+")."),L;return L}function v(L){return L.generateMipmaps}function p(L){o.generateMipmap(L)}function x(L){return L.isWebGLCubeRenderTarget?o.TEXTURE_CUBE_MAP:L.isWebGL3DRenderTarget?o.TEXTURE_3D:L.isWebGLArrayRenderTarget||L.isCompressedArrayTexture?o.TEXTURE_2D_ARRAY:o.TEXTURE_2D}function y(L,E,K,le,ce=!1){if(L!==null){if(o[L]!==void 0)return o[L];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+L+"'")}let oe=E;if(E===o.RED&&(K===o.FLOAT&&(oe=o.R32F),K===o.HALF_FLOAT&&(oe=o.R16F),K===o.UNSIGNED_BYTE&&(oe=o.R8)),E===o.RED_INTEGER&&(K===o.UNSIGNED_BYTE&&(oe=o.R8UI),K===o.UNSIGNED_SHORT&&(oe=o.R16UI),K===o.UNSIGNED_INT&&(oe=o.R32UI),K===o.BYTE&&(oe=o.R8I),K===o.SHORT&&(oe=o.R16I),K===o.INT&&(oe=o.R32I)),E===o.RG&&(K===o.FLOAT&&(oe=o.RG32F),K===o.HALF_FLOAT&&(oe=o.RG16F),K===o.UNSIGNED_BYTE&&(oe=o.RG8)),E===o.RG_INTEGER&&(K===o.UNSIGNED_BYTE&&(oe=o.RG8UI),K===o.UNSIGNED_SHORT&&(oe=o.RG16UI),K===o.UNSIGNED_INT&&(oe=o.RG32UI),K===o.BYTE&&(oe=o.RG8I),K===o.SHORT&&(oe=o.RG16I),K===o.INT&&(oe=o.RG32I)),E===o.RGB_INTEGER&&(K===o.UNSIGNED_BYTE&&(oe=o.RGB8UI),K===o.UNSIGNED_SHORT&&(oe=o.RGB16UI),K===o.UNSIGNED_INT&&(oe=o.RGB32UI),K===o.BYTE&&(oe=o.RGB8I),K===o.SHORT&&(oe=o.RGB16I),K===o.INT&&(oe=o.RGB32I)),E===o.RGBA_INTEGER&&(K===o.UNSIGNED_BYTE&&(oe=o.RGBA8UI),K===o.UNSIGNED_SHORT&&(oe=o.RGBA16UI),K===o.UNSIGNED_INT&&(oe=o.RGBA32UI),K===o.BYTE&&(oe=o.RGBA8I),K===o.SHORT&&(oe=o.RGBA16I),K===o.INT&&(oe=o.RGBA32I)),E===o.RGB&&K===o.UNSIGNED_INT_5_9_9_9_REV&&(oe=o.RGB9_E5),E===o.RGBA){const Ee=ce?ur:Et.getTransfer(le);K===o.FLOAT&&(oe=o.RGBA32F),K===o.HALF_FLOAT&&(oe=o.RGBA16F),K===o.UNSIGNED_BYTE&&(oe=Ee===Rt?o.SRGB8_ALPHA8:o.RGBA8),K===o.UNSIGNED_SHORT_4_4_4_4&&(oe=o.RGBA4),K===o.UNSIGNED_SHORT_5_5_5_1&&(oe=o.RGB5_A1)}return(oe===o.R16F||oe===o.R32F||oe===o.RG16F||oe===o.RG32F||oe===o.RGBA16F||oe===o.RGBA32F)&&e.get("EXT_color_buffer_float"),oe}function _(L,E){let K;return L?E===null||E===gi||E===Xi?K=o.DEPTH24_STENCIL8:E===yn?K=o.DEPTH32F_STENCIL8:E===xs&&(K=o.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):E===null||E===gi||E===Xi?K=o.DEPTH_COMPONENT24:E===yn?K=o.DEPTH_COMPONENT32F:E===xs&&(K=o.DEPTH_COMPONENT16),K}function T(L,E){return v(L)===!0||L.isFramebufferTexture&&L.minFilter!==Qt&&L.minFilter!==hn?Math.log2(Math.max(E.width,E.height))+1:L.mipmaps!==void 0&&L.mipmaps.length>0?L.mipmaps.length:L.isCompressedTexture&&Array.isArray(L.image)?E.mipmaps.length:1}function C(L){const E=L.target;E.removeEventListener("dispose",C),P(E),E.isVideoTexture&&u.delete(E)}function I(L){const E=L.target;E.removeEventListener("dispose",I),M(E)}function P(L){const E=n.get(L);if(E.__webglInit===void 0)return;const K=L.source,le=d.get(K);if(le){const ce=le[E.__cacheKey];ce.usedTimes--,ce.usedTimes===0&&S(L),Object.keys(le).length===0&&d.delete(K)}n.remove(L)}function S(L){const E=n.get(L);o.deleteTexture(E.__webglTexture);const K=L.source,le=d.get(K);delete le[E.__cacheKey],r.memory.textures--}function M(L){const E=n.get(L);if(L.depthTexture&&(L.depthTexture.dispose(),n.remove(L.depthTexture)),L.isWebGLCubeRenderTarget)for(let le=0;le<6;le++){if(Array.isArray(E.__webglFramebuffer[le]))for(let ce=0;ce<E.__webglFramebuffer[le].length;ce++)o.deleteFramebuffer(E.__webglFramebuffer[le][ce]);else o.deleteFramebuffer(E.__webglFramebuffer[le]);E.__webglDepthbuffer&&o.deleteRenderbuffer(E.__webglDepthbuffer[le])}else{if(Array.isArray(E.__webglFramebuffer))for(let le=0;le<E.__webglFramebuffer.length;le++)o.deleteFramebuffer(E.__webglFramebuffer[le]);else o.deleteFramebuffer(E.__webglFramebuffer);if(E.__webglDepthbuffer&&o.deleteRenderbuffer(E.__webglDepthbuffer),E.__webglMultisampledFramebuffer&&o.deleteFramebuffer(E.__webglMultisampledFramebuffer),E.__webglColorRenderbuffer)for(let le=0;le<E.__webglColorRenderbuffer.length;le++)E.__webglColorRenderbuffer[le]&&o.deleteRenderbuffer(E.__webglColorRenderbuffer[le]);E.__webglDepthRenderbuffer&&o.deleteRenderbuffer(E.__webglDepthRenderbuffer)}const K=L.textures;for(let le=0,ce=K.length;le<ce;le++){const oe=n.get(K[le]);oe.__webglTexture&&(o.deleteTexture(oe.__webglTexture),r.memory.textures--),n.remove(K[le])}n.remove(L)}let b=0;function F(){b=0}function U(){const L=b;return L>=i.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+L+" texture units while this GPU supports only "+i.maxTextures),b+=1,L}function W(L){const E=[];return E.push(L.wrapS),E.push(L.wrapT),E.push(L.wrapR||0),E.push(L.magFilter),E.push(L.minFilter),E.push(L.anisotropy),E.push(L.internalFormat),E.push(L.format),E.push(L.type),E.push(L.generateMipmaps),E.push(L.premultiplyAlpha),E.push(L.flipY),E.push(L.unpackAlignment),E.push(L.colorSpace),E.join()}function q(L,E){const K=n.get(L);if(L.isVideoTexture&&ye(L),L.isRenderTargetTexture===!1&&L.version>0&&K.__version!==L.version){const le=L.image;if(le===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(le.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{A(K,L,E);return}}t.bindTexture(o.TEXTURE_2D,K.__webglTexture,o.TEXTURE0+E)}function ee(L,E){const K=n.get(L);if(L.version>0&&K.__version!==L.version){A(K,L,E);return}t.bindTexture(o.TEXTURE_2D_ARRAY,K.__webglTexture,o.TEXTURE0+E)}function O(L,E){const K=n.get(L);if(L.version>0&&K.__version!==L.version){A(K,L,E);return}t.bindTexture(o.TEXTURE_3D,K.__webglTexture,o.TEXTURE0+E)}function N(L,E){const K=n.get(L);if(L.version>0&&K.__version!==L.version){R(K,L,E);return}t.bindTexture(o.TEXTURE_CUBE_MAP,K.__webglTexture,o.TEXTURE0+E)}const te={[Wi]:o.REPEAT,[ei]:o.CLAMP_TO_EDGE,[hr]:o.MIRRORED_REPEAT},J={[Qt]:o.NEAREST,[oc]:o.NEAREST_MIPMAP_NEAREST,[fs]:o.NEAREST_MIPMAP_LINEAR,[hn]:o.LINEAR,[ir]:o.LINEAR_MIPMAP_NEAREST,[Vn]:o.LINEAR_MIPMAP_LINEAR},B={[Eh]:o.NEVER,[Ch]:o.ALWAYS,[wh]:o.LESS,[gc]:o.LEQUAL,[bh]:o.EQUAL,[Rh]:o.GEQUAL,[Th]:o.GREATER,[Ah]:o.NOTEQUAL};function Q(L,E){if(E.type===yn&&e.has("OES_texture_float_linear")===!1&&(E.magFilter===hn||E.magFilter===ir||E.magFilter===fs||E.magFilter===Vn||E.minFilter===hn||E.minFilter===ir||E.minFilter===fs||E.minFilter===Vn)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),o.texParameteri(L,o.TEXTURE_WRAP_S,te[E.wrapS]),o.texParameteri(L,o.TEXTURE_WRAP_T,te[E.wrapT]),(L===o.TEXTURE_3D||L===o.TEXTURE_2D_ARRAY)&&o.texParameteri(L,o.TEXTURE_WRAP_R,te[E.wrapR]),o.texParameteri(L,o.TEXTURE_MAG_FILTER,J[E.magFilter]),o.texParameteri(L,o.TEXTURE_MIN_FILTER,J[E.minFilter]),E.compareFunction&&(o.texParameteri(L,o.TEXTURE_COMPARE_MODE,o.COMPARE_REF_TO_TEXTURE),o.texParameteri(L,o.TEXTURE_COMPARE_FUNC,B[E.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(E.magFilter===Qt||E.minFilter!==fs&&E.minFilter!==Vn||E.type===yn&&e.has("OES_texture_float_linear")===!1)return;if(E.anisotropy>1||n.get(E).__currentAnisotropy){const K=e.get("EXT_texture_filter_anisotropic");o.texParameterf(L,K.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(E.anisotropy,i.getMaxAnisotropy())),n.get(E).__currentAnisotropy=E.anisotropy}}}function z(L,E){let K=!1;L.__webglInit===void 0&&(L.__webglInit=!0,E.addEventListener("dispose",C));const le=E.source;let ce=d.get(le);ce===void 0&&(ce={},d.set(le,ce));const oe=W(E);if(oe!==L.__cacheKey){ce[oe]===void 0&&(ce[oe]={texture:o.createTexture(),usedTimes:0},r.memory.textures++,K=!0),ce[oe].usedTimes++;const Ee=ce[L.__cacheKey];Ee!==void 0&&(ce[L.__cacheKey].usedTimes--,Ee.usedTimes===0&&S(E)),L.__cacheKey=oe,L.__webglTexture=ce[oe].texture}return K}function A(L,E,K){let le=o.TEXTURE_2D;(E.isDataArrayTexture||E.isCompressedArrayTexture)&&(le=o.TEXTURE_2D_ARRAY),E.isData3DTexture&&(le=o.TEXTURE_3D);const ce=z(L,E),oe=E.source;t.bindTexture(le,L.__webglTexture,o.TEXTURE0+K);const Ee=n.get(oe);if(oe.version!==Ee.__version||ce===!0){t.activeTexture(o.TEXTURE0+K);const we=Et.getPrimaries(Et.workingColorSpace),Fe=E.colorSpace===Qn?null:Et.getPrimaries(E.colorSpace),ct=E.colorSpace===Qn||we===Fe?o.NONE:o.BROWSER_DEFAULT_WEBGL;o.pixelStorei(o.UNPACK_FLIP_Y_WEBGL,E.flipY),o.pixelStorei(o.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),o.pixelStorei(o.UNPACK_ALIGNMENT,E.unpackAlignment),o.pixelStorei(o.UNPACK_COLORSPACE_CONVERSION_WEBGL,ct);let Se=g(E.image,!1,i.maxTextureSize);Se=nt(E,Se);const He=s.convert(E.format,E.colorSpace),Ze=s.convert(E.type);let Je=y(E.internalFormat,He,Ze,E.colorSpace,E.isVideoTexture);Q(le,E);let Xe;const ht=E.mipmaps,it=E.isVideoTexture!==!0,_t=Ee.__version===void 0||ce===!0,X=oe.dataReady,Pe=T(E,Se);if(E.isDepthTexture)Je=_(E.format===qi,E.type),_t&&(it?t.texStorage2D(o.TEXTURE_2D,1,Je,Se.width,Se.height):t.texImage2D(o.TEXTURE_2D,0,Je,Se.width,Se.height,0,He,Ze,null));else if(E.isDataTexture)if(ht.length>0){it&&_t&&t.texStorage2D(o.TEXTURE_2D,Pe,Je,ht[0].width,ht[0].height);for(let ae=0,fe=ht.length;ae<fe;ae++)Xe=ht[ae],it?X&&t.texSubImage2D(o.TEXTURE_2D,ae,0,0,Xe.width,Xe.height,He,Ze,Xe.data):t.texImage2D(o.TEXTURE_2D,ae,Je,Xe.width,Xe.height,0,He,Ze,Xe.data);E.generateMipmaps=!1}else it?(_t&&t.texStorage2D(o.TEXTURE_2D,Pe,Je,Se.width,Se.height),X&&t.texSubImage2D(o.TEXTURE_2D,0,0,0,Se.width,Se.height,He,Ze,Se.data)):t.texImage2D(o.TEXTURE_2D,0,Je,Se.width,Se.height,0,He,Ze,Se.data);else if(E.isCompressedTexture)if(E.isCompressedArrayTexture){it&&_t&&t.texStorage3D(o.TEXTURE_2D_ARRAY,Pe,Je,ht[0].width,ht[0].height,Se.depth);for(let ae=0,fe=ht.length;ae<fe;ae++)if(Xe=ht[ae],E.format!==pn)if(He!==null)if(it){if(X)if(E.layerUpdates.size>0){const ze=xl(Xe.width,Xe.height,E.format,E.type);for(const Oe of E.layerUpdates){const rt=Xe.data.subarray(Oe*ze/Xe.data.BYTES_PER_ELEMENT,(Oe+1)*ze/Xe.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(o.TEXTURE_2D_ARRAY,ae,0,0,Oe,Xe.width,Xe.height,1,He,rt)}E.clearLayerUpdates()}else t.compressedTexSubImage3D(o.TEXTURE_2D_ARRAY,ae,0,0,0,Xe.width,Xe.height,Se.depth,He,Xe.data)}else t.compressedTexImage3D(o.TEXTURE_2D_ARRAY,ae,Je,Xe.width,Xe.height,Se.depth,0,Xe.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else it?X&&t.texSubImage3D(o.TEXTURE_2D_ARRAY,ae,0,0,0,Xe.width,Xe.height,Se.depth,He,Ze,Xe.data):t.texImage3D(o.TEXTURE_2D_ARRAY,ae,Je,Xe.width,Xe.height,Se.depth,0,He,Ze,Xe.data)}else{it&&_t&&t.texStorage2D(o.TEXTURE_2D,Pe,Je,ht[0].width,ht[0].height);for(let ae=0,fe=ht.length;ae<fe;ae++)Xe=ht[ae],E.format!==pn?He!==null?it?X&&t.compressedTexSubImage2D(o.TEXTURE_2D,ae,0,0,Xe.width,Xe.height,He,Xe.data):t.compressedTexImage2D(o.TEXTURE_2D,ae,Je,Xe.width,Xe.height,0,Xe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):it?X&&t.texSubImage2D(o.TEXTURE_2D,ae,0,0,Xe.width,Xe.height,He,Ze,Xe.data):t.texImage2D(o.TEXTURE_2D,ae,Je,Xe.width,Xe.height,0,He,Ze,Xe.data)}else if(E.isDataArrayTexture)if(it){if(_t&&t.texStorage3D(o.TEXTURE_2D_ARRAY,Pe,Je,Se.width,Se.height,Se.depth),X)if(E.layerUpdates.size>0){const ae=xl(Se.width,Se.height,E.format,E.type);for(const fe of E.layerUpdates){const ze=Se.data.subarray(fe*ae/Se.data.BYTES_PER_ELEMENT,(fe+1)*ae/Se.data.BYTES_PER_ELEMENT);t.texSubImage3D(o.TEXTURE_2D_ARRAY,0,0,0,fe,Se.width,Se.height,1,He,Ze,ze)}E.clearLayerUpdates()}else t.texSubImage3D(o.TEXTURE_2D_ARRAY,0,0,0,0,Se.width,Se.height,Se.depth,He,Ze,Se.data)}else t.texImage3D(o.TEXTURE_2D_ARRAY,0,Je,Se.width,Se.height,Se.depth,0,He,Ze,Se.data);else if(E.isData3DTexture)it?(_t&&t.texStorage3D(o.TEXTURE_3D,Pe,Je,Se.width,Se.height,Se.depth),X&&t.texSubImage3D(o.TEXTURE_3D,0,0,0,0,Se.width,Se.height,Se.depth,He,Ze,Se.data)):t.texImage3D(o.TEXTURE_3D,0,Je,Se.width,Se.height,Se.depth,0,He,Ze,Se.data);else if(E.isFramebufferTexture){if(_t)if(it)t.texStorage2D(o.TEXTURE_2D,Pe,Je,Se.width,Se.height);else{let ae=Se.width,fe=Se.height;for(let ze=0;ze<Pe;ze++)t.texImage2D(o.TEXTURE_2D,ze,Je,ae,fe,0,He,Ze,null),ae>>=1,fe>>=1}}else if(ht.length>0){if(it&&_t){const ae=pe(ht[0]);t.texStorage2D(o.TEXTURE_2D,Pe,Je,ae.width,ae.height)}for(let ae=0,fe=ht.length;ae<fe;ae++)Xe=ht[ae],it?X&&t.texSubImage2D(o.TEXTURE_2D,ae,0,0,He,Ze,Xe):t.texImage2D(o.TEXTURE_2D,ae,Je,He,Ze,Xe);E.generateMipmaps=!1}else if(it){if(_t){const ae=pe(Se);t.texStorage2D(o.TEXTURE_2D,Pe,Je,ae.width,ae.height)}X&&t.texSubImage2D(o.TEXTURE_2D,0,0,0,He,Ze,Se)}else t.texImage2D(o.TEXTURE_2D,0,Je,He,Ze,Se);v(E)&&p(le),Ee.__version=oe.version,E.onUpdate&&E.onUpdate(E)}L.__version=E.version}function R(L,E,K){if(E.image.length!==6)return;const le=z(L,E),ce=E.source;t.bindTexture(o.TEXTURE_CUBE_MAP,L.__webglTexture,o.TEXTURE0+K);const oe=n.get(ce);if(ce.version!==oe.__version||le===!0){t.activeTexture(o.TEXTURE0+K);const Ee=Et.getPrimaries(Et.workingColorSpace),we=E.colorSpace===Qn?null:Et.getPrimaries(E.colorSpace),Fe=E.colorSpace===Qn||Ee===we?o.NONE:o.BROWSER_DEFAULT_WEBGL;o.pixelStorei(o.UNPACK_FLIP_Y_WEBGL,E.flipY),o.pixelStorei(o.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),o.pixelStorei(o.UNPACK_ALIGNMENT,E.unpackAlignment),o.pixelStorei(o.UNPACK_COLORSPACE_CONVERSION_WEBGL,Fe);const ct=E.isCompressedTexture||E.image[0].isCompressedTexture,Se=E.image[0]&&E.image[0].isDataTexture,He=[];for(let fe=0;fe<6;fe++)!ct&&!Se?He[fe]=g(E.image[fe],!0,i.maxCubemapSize):He[fe]=Se?E.image[fe].image:E.image[fe],He[fe]=nt(E,He[fe]);const Ze=He[0],Je=s.convert(E.format,E.colorSpace),Xe=s.convert(E.type),ht=y(E.internalFormat,Je,Xe,E.colorSpace),it=E.isVideoTexture!==!0,_t=oe.__version===void 0||le===!0,X=ce.dataReady;let Pe=T(E,Ze);Q(o.TEXTURE_CUBE_MAP,E);let ae;if(ct){it&&_t&&t.texStorage2D(o.TEXTURE_CUBE_MAP,Pe,ht,Ze.width,Ze.height);for(let fe=0;fe<6;fe++){ae=He[fe].mipmaps;for(let ze=0;ze<ae.length;ze++){const Oe=ae[ze];E.format!==pn?Je!==null?it?X&&t.compressedTexSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+fe,ze,0,0,Oe.width,Oe.height,Je,Oe.data):t.compressedTexImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+fe,ze,ht,Oe.width,Oe.height,0,Oe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):it?X&&t.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+fe,ze,0,0,Oe.width,Oe.height,Je,Xe,Oe.data):t.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+fe,ze,ht,Oe.width,Oe.height,0,Je,Xe,Oe.data)}}}else{if(ae=E.mipmaps,it&&_t){ae.length>0&&Pe++;const fe=pe(He[0]);t.texStorage2D(o.TEXTURE_CUBE_MAP,Pe,ht,fe.width,fe.height)}for(let fe=0;fe<6;fe++)if(Se){it?X&&t.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+fe,0,0,0,He[fe].width,He[fe].height,Je,Xe,He[fe].data):t.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+fe,0,ht,He[fe].width,He[fe].height,0,Je,Xe,He[fe].data);for(let ze=0;ze<ae.length;ze++){const rt=ae[ze].image[fe].image;it?X&&t.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+fe,ze+1,0,0,rt.width,rt.height,Je,Xe,rt.data):t.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+fe,ze+1,ht,rt.width,rt.height,0,Je,Xe,rt.data)}}else{it?X&&t.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+fe,0,0,0,Je,Xe,He[fe]):t.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+fe,0,ht,Je,Xe,He[fe]);for(let ze=0;ze<ae.length;ze++){const Oe=ae[ze];it?X&&t.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+fe,ze+1,0,0,Je,Xe,Oe.image[fe]):t.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+fe,ze+1,ht,Je,Xe,Oe.image[fe])}}}v(E)&&p(o.TEXTURE_CUBE_MAP),oe.__version=ce.version,E.onUpdate&&E.onUpdate(E)}L.__version=E.version}function k(L,E,K,le,ce,oe){const Ee=s.convert(K.format,K.colorSpace),we=s.convert(K.type),Fe=y(K.internalFormat,Ee,we,K.colorSpace),ct=n.get(E),Se=n.get(K);if(Se.__renderTarget=E,!ct.__hasExternalTextures){const He=Math.max(1,E.width>>oe),Ze=Math.max(1,E.height>>oe);ce===o.TEXTURE_3D||ce===o.TEXTURE_2D_ARRAY?t.texImage3D(ce,oe,Fe,He,Ze,E.depth,0,Ee,we,null):t.texImage2D(ce,oe,Fe,He,Ze,0,Ee,we,null)}t.bindFramebuffer(o.FRAMEBUFFER,L),qe(E)?a.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,le,ce,Se.__webglTexture,0,he(E)):(ce===o.TEXTURE_2D||ce>=o.TEXTURE_CUBE_MAP_POSITIVE_X&&ce<=o.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&o.framebufferTexture2D(o.FRAMEBUFFER,le,ce,Se.__webglTexture,oe),t.bindFramebuffer(o.FRAMEBUFFER,null)}function Z(L,E,K){if(o.bindRenderbuffer(o.RENDERBUFFER,L),E.depthBuffer){const le=E.depthTexture,ce=le&&le.isDepthTexture?le.type:null,oe=_(E.stencilBuffer,ce),Ee=E.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,we=he(E);qe(E)?a.renderbufferStorageMultisampleEXT(o.RENDERBUFFER,we,oe,E.width,E.height):K?o.renderbufferStorageMultisample(o.RENDERBUFFER,we,oe,E.width,E.height):o.renderbufferStorage(o.RENDERBUFFER,oe,E.width,E.height),o.framebufferRenderbuffer(o.FRAMEBUFFER,Ee,o.RENDERBUFFER,L)}else{const le=E.textures;for(let ce=0;ce<le.length;ce++){const oe=le[ce],Ee=s.convert(oe.format,oe.colorSpace),we=s.convert(oe.type),Fe=y(oe.internalFormat,Ee,we,oe.colorSpace),ct=he(E);K&&qe(E)===!1?o.renderbufferStorageMultisample(o.RENDERBUFFER,ct,Fe,E.width,E.height):qe(E)?a.renderbufferStorageMultisampleEXT(o.RENDERBUFFER,ct,Fe,E.width,E.height):o.renderbufferStorage(o.RENDERBUFFER,Fe,E.width,E.height)}}o.bindRenderbuffer(o.RENDERBUFFER,null)}function ne(L,E){if(E&&E.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(o.FRAMEBUFFER,L),!(E.depthTexture&&E.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const le=n.get(E.depthTexture);le.__renderTarget=E,(!le.__webglTexture||E.depthTexture.image.width!==E.width||E.depthTexture.image.height!==E.height)&&(E.depthTexture.image.width=E.width,E.depthTexture.image.height=E.height,E.depthTexture.needsUpdate=!0),q(E.depthTexture,0);const ce=le.__webglTexture,oe=he(E);if(E.depthTexture.format===Bi)qe(E)?a.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,o.DEPTH_ATTACHMENT,o.TEXTURE_2D,ce,0,oe):o.framebufferTexture2D(o.FRAMEBUFFER,o.DEPTH_ATTACHMENT,o.TEXTURE_2D,ce,0);else if(E.depthTexture.format===qi)qe(E)?a.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,o.DEPTH_STENCIL_ATTACHMENT,o.TEXTURE_2D,ce,0,oe):o.framebufferTexture2D(o.FRAMEBUFFER,o.DEPTH_STENCIL_ATTACHMENT,o.TEXTURE_2D,ce,0);else throw new Error("Unknown depthTexture format")}function Y(L){const E=n.get(L),K=L.isWebGLCubeRenderTarget===!0;if(E.__boundDepthTexture!==L.depthTexture){const le=L.depthTexture;if(E.__depthDisposeCallback&&E.__depthDisposeCallback(),le){const ce=()=>{delete E.__boundDepthTexture,delete E.__depthDisposeCallback,le.removeEventListener("dispose",ce)};le.addEventListener("dispose",ce),E.__depthDisposeCallback=ce}E.__boundDepthTexture=le}if(L.depthTexture&&!E.__autoAllocateDepthBuffer){if(K)throw new Error("target.depthTexture not supported in Cube render targets");ne(E.__webglFramebuffer,L)}else if(K){E.__webglDepthbuffer=[];for(let le=0;le<6;le++)if(t.bindFramebuffer(o.FRAMEBUFFER,E.__webglFramebuffer[le]),E.__webglDepthbuffer[le]===void 0)E.__webglDepthbuffer[le]=o.createRenderbuffer(),Z(E.__webglDepthbuffer[le],L,!1);else{const ce=L.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,oe=E.__webglDepthbuffer[le];o.bindRenderbuffer(o.RENDERBUFFER,oe),o.framebufferRenderbuffer(o.FRAMEBUFFER,ce,o.RENDERBUFFER,oe)}}else if(t.bindFramebuffer(o.FRAMEBUFFER,E.__webglFramebuffer),E.__webglDepthbuffer===void 0)E.__webglDepthbuffer=o.createRenderbuffer(),Z(E.__webglDepthbuffer,L,!1);else{const le=L.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,ce=E.__webglDepthbuffer;o.bindRenderbuffer(o.RENDERBUFFER,ce),o.framebufferRenderbuffer(o.FRAMEBUFFER,le,o.RENDERBUFFER,ce)}t.bindFramebuffer(o.FRAMEBUFFER,null)}function ie(L,E,K){const le=n.get(L);E!==void 0&&k(le.__webglFramebuffer,L,L.texture,o.COLOR_ATTACHMENT0,o.TEXTURE_2D,0),K!==void 0&&Y(L)}function me(L){const E=L.texture,K=n.get(L),le=n.get(E);L.addEventListener("dispose",I);const ce=L.textures,oe=L.isWebGLCubeRenderTarget===!0,Ee=ce.length>1;if(Ee||(le.__webglTexture===void 0&&(le.__webglTexture=o.createTexture()),le.__version=E.version,r.memory.textures++),oe){K.__webglFramebuffer=[];for(let we=0;we<6;we++)if(E.mipmaps&&E.mipmaps.length>0){K.__webglFramebuffer[we]=[];for(let Fe=0;Fe<E.mipmaps.length;Fe++)K.__webglFramebuffer[we][Fe]=o.createFramebuffer()}else K.__webglFramebuffer[we]=o.createFramebuffer()}else{if(E.mipmaps&&E.mipmaps.length>0){K.__webglFramebuffer=[];for(let we=0;we<E.mipmaps.length;we++)K.__webglFramebuffer[we]=o.createFramebuffer()}else K.__webglFramebuffer=o.createFramebuffer();if(Ee)for(let we=0,Fe=ce.length;we<Fe;we++){const ct=n.get(ce[we]);ct.__webglTexture===void 0&&(ct.__webglTexture=o.createTexture(),r.memory.textures++)}if(L.samples>0&&qe(L)===!1){K.__webglMultisampledFramebuffer=o.createFramebuffer(),K.__webglColorRenderbuffer=[],t.bindFramebuffer(o.FRAMEBUFFER,K.__webglMultisampledFramebuffer);for(let we=0;we<ce.length;we++){const Fe=ce[we];K.__webglColorRenderbuffer[we]=o.createRenderbuffer(),o.bindRenderbuffer(o.RENDERBUFFER,K.__webglColorRenderbuffer[we]);const ct=s.convert(Fe.format,Fe.colorSpace),Se=s.convert(Fe.type),He=y(Fe.internalFormat,ct,Se,Fe.colorSpace,L.isXRRenderTarget===!0),Ze=he(L);o.renderbufferStorageMultisample(o.RENDERBUFFER,Ze,He,L.width,L.height),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+we,o.RENDERBUFFER,K.__webglColorRenderbuffer[we])}o.bindRenderbuffer(o.RENDERBUFFER,null),L.depthBuffer&&(K.__webglDepthRenderbuffer=o.createRenderbuffer(),Z(K.__webglDepthRenderbuffer,L,!0)),t.bindFramebuffer(o.FRAMEBUFFER,null)}}if(oe){t.bindTexture(o.TEXTURE_CUBE_MAP,le.__webglTexture),Q(o.TEXTURE_CUBE_MAP,E);for(let we=0;we<6;we++)if(E.mipmaps&&E.mipmaps.length>0)for(let Fe=0;Fe<E.mipmaps.length;Fe++)k(K.__webglFramebuffer[we][Fe],L,E,o.COLOR_ATTACHMENT0,o.TEXTURE_CUBE_MAP_POSITIVE_X+we,Fe);else k(K.__webglFramebuffer[we],L,E,o.COLOR_ATTACHMENT0,o.TEXTURE_CUBE_MAP_POSITIVE_X+we,0);v(E)&&p(o.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Ee){for(let we=0,Fe=ce.length;we<Fe;we++){const ct=ce[we],Se=n.get(ct);t.bindTexture(o.TEXTURE_2D,Se.__webglTexture),Q(o.TEXTURE_2D,ct),k(K.__webglFramebuffer,L,ct,o.COLOR_ATTACHMENT0+we,o.TEXTURE_2D,0),v(ct)&&p(o.TEXTURE_2D)}t.unbindTexture()}else{let we=o.TEXTURE_2D;if((L.isWebGL3DRenderTarget||L.isWebGLArrayRenderTarget)&&(we=L.isWebGL3DRenderTarget?o.TEXTURE_3D:o.TEXTURE_2D_ARRAY),t.bindTexture(we,le.__webglTexture),Q(we,E),E.mipmaps&&E.mipmaps.length>0)for(let Fe=0;Fe<E.mipmaps.length;Fe++)k(K.__webglFramebuffer[Fe],L,E,o.COLOR_ATTACHMENT0,we,Fe);else k(K.__webglFramebuffer,L,E,o.COLOR_ATTACHMENT0,we,0);v(E)&&p(we),t.unbindTexture()}L.depthBuffer&&Y(L)}function Le(L){const E=L.textures;for(let K=0,le=E.length;K<le;K++){const ce=E[K];if(v(ce)){const oe=x(L),Ee=n.get(ce).__webglTexture;t.bindTexture(oe,Ee),p(oe),t.unbindTexture()}}}const ve=[],D=[];function de(L){if(L.samples>0){if(qe(L)===!1){const E=L.textures,K=L.width,le=L.height;let ce=o.COLOR_BUFFER_BIT;const oe=L.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,Ee=n.get(L),we=E.length>1;if(we)for(let Fe=0;Fe<E.length;Fe++)t.bindFramebuffer(o.FRAMEBUFFER,Ee.__webglMultisampledFramebuffer),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+Fe,o.RENDERBUFFER,null),t.bindFramebuffer(o.FRAMEBUFFER,Ee.__webglFramebuffer),o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0+Fe,o.TEXTURE_2D,null,0);t.bindFramebuffer(o.READ_FRAMEBUFFER,Ee.__webglMultisampledFramebuffer),t.bindFramebuffer(o.DRAW_FRAMEBUFFER,Ee.__webglFramebuffer);for(let Fe=0;Fe<E.length;Fe++){if(L.resolveDepthBuffer&&(L.depthBuffer&&(ce|=o.DEPTH_BUFFER_BIT),L.stencilBuffer&&L.resolveStencilBuffer&&(ce|=o.STENCIL_BUFFER_BIT)),we){o.framebufferRenderbuffer(o.READ_FRAMEBUFFER,o.COLOR_ATTACHMENT0,o.RENDERBUFFER,Ee.__webglColorRenderbuffer[Fe]);const ct=n.get(E[Fe]).__webglTexture;o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0,o.TEXTURE_2D,ct,0)}o.blitFramebuffer(0,0,K,le,0,0,K,le,ce,o.NEAREST),l===!0&&(ve.length=0,D.length=0,ve.push(o.COLOR_ATTACHMENT0+Fe),L.depthBuffer&&L.resolveDepthBuffer===!1&&(ve.push(oe),D.push(oe),o.invalidateFramebuffer(o.DRAW_FRAMEBUFFER,D)),o.invalidateFramebuffer(o.READ_FRAMEBUFFER,ve))}if(t.bindFramebuffer(o.READ_FRAMEBUFFER,null),t.bindFramebuffer(o.DRAW_FRAMEBUFFER,null),we)for(let Fe=0;Fe<E.length;Fe++){t.bindFramebuffer(o.FRAMEBUFFER,Ee.__webglMultisampledFramebuffer),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+Fe,o.RENDERBUFFER,Ee.__webglColorRenderbuffer[Fe]);const ct=n.get(E[Fe]).__webglTexture;t.bindFramebuffer(o.FRAMEBUFFER,Ee.__webglFramebuffer),o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0+Fe,o.TEXTURE_2D,ct,0)}t.bindFramebuffer(o.DRAW_FRAMEBUFFER,Ee.__webglMultisampledFramebuffer)}else if(L.depthBuffer&&L.resolveDepthBuffer===!1&&l){const E=L.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT;o.invalidateFramebuffer(o.DRAW_FRAMEBUFFER,[E])}}}function he(L){return Math.min(i.maxSamples,L.samples)}function qe(L){const E=n.get(L);return L.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&E.__useRenderToTexture!==!1}function ye(L){const E=r.render.frame;u.get(L)!==E&&(u.set(L,E),L.update())}function nt(L,E){const K=L.colorSpace,le=L.format,ce=L.type;return L.isCompressedTexture===!0||L.isVideoTexture===!0||K!==tn&&K!==Qn&&(Et.getTransfer(K)===Rt?(le!==pn||ce!==Wn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",K)),E}function pe(L){return typeof HTMLImageElement<"u"&&L instanceof HTMLImageElement?(h.width=L.naturalWidth||L.width,h.height=L.naturalHeight||L.height):typeof VideoFrame<"u"&&L instanceof VideoFrame?(h.width=L.displayWidth,h.height=L.displayHeight):(h.width=L.width,h.height=L.height),h}this.allocateTextureUnit=U,this.resetTextureUnits=F,this.setTexture2D=q,this.setTexture2DArray=ee,this.setTexture3D=O,this.setTextureCube=N,this.rebindTextures=ie,this.setupRenderTarget=me,this.updateRenderTargetMipmap=Le,this.updateMultisampleRenderTarget=de,this.setupDepthRenderbuffer=Y,this.setupFrameBufferTexture=k,this.useMultisampledRTT=qe}function Vv(o,e){function t(n,i=Qn){let s;const r=Et.getTransfer(i);if(n===Wn)return o.UNSIGNED_BYTE;if(n===sa)return o.UNSIGNED_SHORT_4_4_4_4;if(n===ra)return o.UNSIGNED_SHORT_5_5_5_1;if(n===cc)return o.UNSIGNED_INT_5_9_9_9_REV;if(n===ac)return o.BYTE;if(n===lc)return o.SHORT;if(n===xs)return o.UNSIGNED_SHORT;if(n===ia)return o.INT;if(n===gi)return o.UNSIGNED_INT;if(n===yn)return o.FLOAT;if(n===ws)return o.HALF_FLOAT;if(n===hc)return o.ALPHA;if(n===uc)return o.RGB;if(n===pn)return o.RGBA;if(n===dc)return o.LUMINANCE;if(n===fc)return o.LUMINANCE_ALPHA;if(n===Bi)return o.DEPTH_COMPONENT;if(n===qi)return o.DEPTH_STENCIL;if(n===oa)return o.RED;if(n===aa)return o.RED_INTEGER;if(n===pc)return o.RG;if(n===la)return o.RG_INTEGER;if(n===ca)return o.RGBA_INTEGER;if(n===sr||n===rr||n===or||n===ar)if(r===Rt)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(n===sr)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===rr)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===or)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===ar)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(n===sr)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===rr)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===or)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===ar)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Eo||n===wo||n===bo||n===To)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(n===Eo)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===wo)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===bo)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===To)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Ao||n===Ro||n===Co)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(n===Ao||n===Ro)return r===Rt?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(n===Co)return r===Rt?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===Po||n===Lo||n===Io||n===No||n===Do||n===Uo||n===Fo||n===Bo||n===Oo||n===zo||n===Vo||n===ko||n===Ho||n===Go)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(n===Po)return r===Rt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Lo)return r===Rt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Io)return r===Rt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===No)return r===Rt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Do)return r===Rt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Uo)return r===Rt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Fo)return r===Rt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Bo)return r===Rt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Oo)return r===Rt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===zo)return r===Rt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Vo)return r===Rt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===ko)return r===Rt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Ho)return r===Rt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Go)return r===Rt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===lr||n===Wo||n===Xo)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(n===lr)return r===Rt?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Wo)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Xo)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===mc||n===qo||n===Yo||n===jo)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(n===lr)return s.COMPRESSED_RED_RGTC1_EXT;if(n===qo)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Yo)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===jo)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Xi?o.UNSIGNED_INT_24_8:o[n]!==void 0?o[n]:null}return{convert:t}}const kv=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Hv=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class Gv{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,n){if(this.texture===null){const i=new Wt,s=e.properties.get(i);s.__webglTexture=t.texture,(t.depthNear!==n.depthNear||t.depthFar!==n.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,n=new Xn({vertexShader:kv,fragmentShader:Hv,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Nt(new xr(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class Wv extends Ji{constructor(e,t){super();const n=this;let i=null,s=1,r=null,a="local-floor",l=1,h=null,u=null,c=null,d=null,f=null,m=null;const g=new Gv,v=t.getContextAttributes();let p=null,x=null;const y=[],_=[],T=new ft;let C=null;const I=new $t;I.viewport=new wt;const P=new $t;P.viewport=new wt;const S=[I,P],M=new td;let b=null,F=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(A){let R=y[A];return R===void 0&&(R=new Gr,y[A]=R),R.getTargetRaySpace()},this.getControllerGrip=function(A){let R=y[A];return R===void 0&&(R=new Gr,y[A]=R),R.getGripSpace()},this.getHand=function(A){let R=y[A];return R===void 0&&(R=new Gr,y[A]=R),R.getHandSpace()};function U(A){const R=_.indexOf(A.inputSource);if(R===-1)return;const k=y[R];k!==void 0&&(k.update(A.inputSource,A.frame,h||r),k.dispatchEvent({type:A.type,data:A.inputSource}))}function W(){i.removeEventListener("select",U),i.removeEventListener("selectstart",U),i.removeEventListener("selectend",U),i.removeEventListener("squeeze",U),i.removeEventListener("squeezestart",U),i.removeEventListener("squeezeend",U),i.removeEventListener("end",W),i.removeEventListener("inputsourceschange",q);for(let A=0;A<y.length;A++){const R=_[A];R!==null&&(_[A]=null,y[A].disconnect(R))}b=null,F=null,g.reset(),e.setRenderTarget(p),f=null,d=null,c=null,i=null,x=null,z.stop(),n.isPresenting=!1,e.setPixelRatio(C),e.setSize(T.width,T.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(A){s=A,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(A){a=A,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return h||r},this.setReferenceSpace=function(A){h=A},this.getBaseLayer=function(){return d!==null?d:f},this.getBinding=function(){return c},this.getFrame=function(){return m},this.getSession=function(){return i},this.setSession=async function(A){if(i=A,i!==null){if(p=e.getRenderTarget(),i.addEventListener("select",U),i.addEventListener("selectstart",U),i.addEventListener("selectend",U),i.addEventListener("squeeze",U),i.addEventListener("squeezestart",U),i.addEventListener("squeezeend",U),i.addEventListener("end",W),i.addEventListener("inputsourceschange",q),v.xrCompatible!==!0&&await t.makeXRCompatible(),C=e.getPixelRatio(),e.getSize(T),typeof XRWebGLBinding<"u"&&"createProjectionLayer"in XRWebGLBinding.prototype){let k=null,Z=null,ne=null;v.depth&&(ne=v.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,k=v.stencil?qi:Bi,Z=v.stencil?Xi:gi);const Y={colorFormat:t.RGBA8,depthFormat:ne,scaleFactor:s};c=new XRWebGLBinding(i,t),d=c.createProjectionLayer(Y),i.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),x=new _i(d.textureWidth,d.textureHeight,{format:pn,type:Wn,depthTexture:new Pc(d.textureWidth,d.textureHeight,Z,void 0,void 0,void 0,void 0,void 0,void 0,k),stencilBuffer:v.stencil,colorSpace:e.outputColorSpace,samples:v.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1})}else{const k={antialias:v.antialias,alpha:!0,depth:v.depth,stencil:v.stencil,framebufferScaleFactor:s};f=new XRWebGLLayer(i,t,k),i.updateRenderState({baseLayer:f}),e.setPixelRatio(1),e.setSize(f.framebufferWidth,f.framebufferHeight,!1),x=new _i(f.framebufferWidth,f.framebufferHeight,{format:pn,type:Wn,colorSpace:e.outputColorSpace,stencilBuffer:v.stencil,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1})}x.isXRRenderTarget=!0,this.setFoveation(l),h=null,r=await i.requestReferenceSpace(a),z.setContext(i),z.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode},this.getDepthTexture=function(){return g.getDepthTexture()};function q(A){for(let R=0;R<A.removed.length;R++){const k=A.removed[R],Z=_.indexOf(k);Z>=0&&(_[Z]=null,y[Z].disconnect(k))}for(let R=0;R<A.added.length;R++){const k=A.added[R];let Z=_.indexOf(k);if(Z===-1){for(let Y=0;Y<y.length;Y++)if(Y>=_.length){_.push(k),Z=Y;break}else if(_[Y]===null){_[Y]=k,Z=Y;break}if(Z===-1)break}const ne=y[Z];ne&&ne.connect(k)}}const ee=new H,O=new H;function N(A,R,k){ee.setFromMatrixPosition(R.matrixWorld),O.setFromMatrixPosition(k.matrixWorld);const Z=ee.distanceTo(O),ne=R.projectionMatrix.elements,Y=k.projectionMatrix.elements,ie=ne[14]/(ne[10]-1),me=ne[14]/(ne[10]+1),Le=(ne[9]+1)/ne[5],ve=(ne[9]-1)/ne[5],D=(ne[8]-1)/ne[0],de=(Y[8]+1)/Y[0],he=ie*D,qe=ie*de,ye=Z/(-D+de),nt=ye*-D;if(R.matrixWorld.decompose(A.position,A.quaternion,A.scale),A.translateX(nt),A.translateZ(ye),A.matrixWorld.compose(A.position,A.quaternion,A.scale),A.matrixWorldInverse.copy(A.matrixWorld).invert(),ne[10]===-1)A.projectionMatrix.copy(R.projectionMatrix),A.projectionMatrixInverse.copy(R.projectionMatrixInverse);else{const pe=ie+ye,L=me+ye,E=he-nt,K=qe+(Z-nt),le=Le*me/L*pe,ce=ve*me/L*pe;A.projectionMatrix.makePerspective(E,K,le,ce,pe,L),A.projectionMatrixInverse.copy(A.projectionMatrix).invert()}}function te(A,R){R===null?A.matrixWorld.copy(A.matrix):A.matrixWorld.multiplyMatrices(R.matrixWorld,A.matrix),A.matrixWorldInverse.copy(A.matrixWorld).invert()}this.updateCamera=function(A){if(i===null)return;let R=A.near,k=A.far;g.texture!==null&&(g.depthNear>0&&(R=g.depthNear),g.depthFar>0&&(k=g.depthFar)),M.near=P.near=I.near=R,M.far=P.far=I.far=k,(b!==M.near||F!==M.far)&&(i.updateRenderState({depthNear:M.near,depthFar:M.far}),b=M.near,F=M.far),I.layers.mask=A.layers.mask|2,P.layers.mask=A.layers.mask|4,M.layers.mask=I.layers.mask|P.layers.mask;const Z=A.parent,ne=M.cameras;te(M,Z);for(let Y=0;Y<ne.length;Y++)te(ne[Y],Z);ne.length===2?N(M,I,P):M.projectionMatrix.copy(I.projectionMatrix),J(A,M,Z)};function J(A,R,k){k===null?A.matrix.copy(R.matrixWorld):(A.matrix.copy(k.matrixWorld),A.matrix.invert(),A.matrix.multiply(R.matrixWorld)),A.matrix.decompose(A.position,A.quaternion,A.scale),A.updateMatrixWorld(!0),A.projectionMatrix.copy(R.projectionMatrix),A.projectionMatrixInverse.copy(R.projectionMatrixInverse),A.isPerspectiveCamera&&(A.fov=Yi*2*Math.atan(1/A.projectionMatrix.elements[5]),A.zoom=1)}this.getCamera=function(){return M},this.getFoveation=function(){if(!(d===null&&f===null))return l},this.setFoveation=function(A){l=A,d!==null&&(d.fixedFoveation=A),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=A)},this.hasDepthSensing=function(){return g.texture!==null},this.getDepthSensingMesh=function(){return g.getMesh(M)};let B=null;function Q(A,R){if(u=R.getViewerPose(h||r),m=R,u!==null){const k=u.views;f!==null&&(e.setRenderTargetFramebuffer(x,f.framebuffer),e.setRenderTarget(x));let Z=!1;k.length!==M.cameras.length&&(M.cameras.length=0,Z=!0);for(let ie=0;ie<k.length;ie++){const me=k[ie];let Le=null;if(f!==null)Le=f.getViewport(me);else{const D=c.getViewSubImage(d,me);Le=D.viewport,ie===0&&(e.setRenderTargetTextures(x,D.colorTexture,d.ignoreDepthValues?void 0:D.depthStencilTexture),e.setRenderTarget(x))}let ve=S[ie];ve===void 0&&(ve=new $t,ve.layers.enable(ie),ve.viewport=new wt,S[ie]=ve),ve.matrix.fromArray(me.transform.matrix),ve.matrix.decompose(ve.position,ve.quaternion,ve.scale),ve.projectionMatrix.fromArray(me.projectionMatrix),ve.projectionMatrixInverse.copy(ve.projectionMatrix).invert(),ve.viewport.set(Le.x,Le.y,Le.width,Le.height),ie===0&&(M.matrix.copy(ve.matrix),M.matrix.decompose(M.position,M.quaternion,M.scale)),Z===!0&&M.cameras.push(ve)}const ne=i.enabledFeatures;if(ne&&ne.includes("depth-sensing")&&i.depthUsage=="gpu-optimized"&&c){const ie=c.getDepthInformation(k[0]);ie&&ie.isValid&&ie.texture&&g.init(e,ie,i.renderState)}}for(let k=0;k<y.length;k++){const Z=_[k],ne=y[k];Z!==null&&ne!==void 0&&ne.update(Z,R,h||r)}B&&B(A,R),R.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:R}),m=null}const z=new Fc;z.setAnimationLoop(Q),this.setAnimationLoop=function(A){B=A},this.dispose=function(){}}}const hi=new bn,Xv=new pt;function qv(o,e){function t(v,p){v.matrixAutoUpdate===!0&&v.updateMatrix(),p.value.copy(v.matrix)}function n(v,p){p.color.getRGB(v.fogColor.value,wc(o)),p.isFog?(v.fogNear.value=p.near,v.fogFar.value=p.far):p.isFogExp2&&(v.fogDensity.value=p.density)}function i(v,p,x,y,_){p.isMeshBasicMaterial||p.isMeshLambertMaterial?s(v,p):p.isMeshToonMaterial?(s(v,p),c(v,p)):p.isMeshPhongMaterial?(s(v,p),u(v,p)):p.isMeshStandardMaterial?(s(v,p),d(v,p),p.isMeshPhysicalMaterial&&f(v,p,_)):p.isMeshMatcapMaterial?(s(v,p),m(v,p)):p.isMeshDepthMaterial?s(v,p):p.isMeshDistanceMaterial?(s(v,p),g(v,p)):p.isMeshNormalMaterial?s(v,p):p.isLineBasicMaterial?(r(v,p),p.isLineDashedMaterial&&a(v,p)):p.isPointsMaterial?l(v,p,x,y):p.isSpriteMaterial?h(v,p):p.isShadowMaterial?(v.color.value.copy(p.color),v.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function s(v,p){v.opacity.value=p.opacity,p.color&&v.diffuse.value.copy(p.color),p.emissive&&v.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(v.map.value=p.map,t(p.map,v.mapTransform)),p.alphaMap&&(v.alphaMap.value=p.alphaMap,t(p.alphaMap,v.alphaMapTransform)),p.bumpMap&&(v.bumpMap.value=p.bumpMap,t(p.bumpMap,v.bumpMapTransform),v.bumpScale.value=p.bumpScale,p.side===Yt&&(v.bumpScale.value*=-1)),p.normalMap&&(v.normalMap.value=p.normalMap,t(p.normalMap,v.normalMapTransform),v.normalScale.value.copy(p.normalScale),p.side===Yt&&v.normalScale.value.negate()),p.displacementMap&&(v.displacementMap.value=p.displacementMap,t(p.displacementMap,v.displacementMapTransform),v.displacementScale.value=p.displacementScale,v.displacementBias.value=p.displacementBias),p.emissiveMap&&(v.emissiveMap.value=p.emissiveMap,t(p.emissiveMap,v.emissiveMapTransform)),p.specularMap&&(v.specularMap.value=p.specularMap,t(p.specularMap,v.specularMapTransform)),p.alphaTest>0&&(v.alphaTest.value=p.alphaTest);const x=e.get(p),y=x.envMap,_=x.envMapRotation;y&&(v.envMap.value=y,hi.copy(_),hi.x*=-1,hi.y*=-1,hi.z*=-1,y.isCubeTexture&&y.isRenderTargetTexture===!1&&(hi.y*=-1,hi.z*=-1),v.envMapRotation.value.setFromMatrix4(Xv.makeRotationFromEuler(hi)),v.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,v.reflectivity.value=p.reflectivity,v.ior.value=p.ior,v.refractionRatio.value=p.refractionRatio),p.lightMap&&(v.lightMap.value=p.lightMap,v.lightMapIntensity.value=p.lightMapIntensity,t(p.lightMap,v.lightMapTransform)),p.aoMap&&(v.aoMap.value=p.aoMap,v.aoMapIntensity.value=p.aoMapIntensity,t(p.aoMap,v.aoMapTransform))}function r(v,p){v.diffuse.value.copy(p.color),v.opacity.value=p.opacity,p.map&&(v.map.value=p.map,t(p.map,v.mapTransform))}function a(v,p){v.dashSize.value=p.dashSize,v.totalSize.value=p.dashSize+p.gapSize,v.scale.value=p.scale}function l(v,p,x,y){v.diffuse.value.copy(p.color),v.opacity.value=p.opacity,v.size.value=p.size*x,v.scale.value=y*.5,p.map&&(v.map.value=p.map,t(p.map,v.uvTransform)),p.alphaMap&&(v.alphaMap.value=p.alphaMap,t(p.alphaMap,v.alphaMapTransform)),p.alphaTest>0&&(v.alphaTest.value=p.alphaTest)}function h(v,p){v.diffuse.value.copy(p.color),v.opacity.value=p.opacity,v.rotation.value=p.rotation,p.map&&(v.map.value=p.map,t(p.map,v.mapTransform)),p.alphaMap&&(v.alphaMap.value=p.alphaMap,t(p.alphaMap,v.alphaMapTransform)),p.alphaTest>0&&(v.alphaTest.value=p.alphaTest)}function u(v,p){v.specular.value.copy(p.specular),v.shininess.value=Math.max(p.shininess,1e-4)}function c(v,p){p.gradientMap&&(v.gradientMap.value=p.gradientMap)}function d(v,p){v.metalness.value=p.metalness,p.metalnessMap&&(v.metalnessMap.value=p.metalnessMap,t(p.metalnessMap,v.metalnessMapTransform)),v.roughness.value=p.roughness,p.roughnessMap&&(v.roughnessMap.value=p.roughnessMap,t(p.roughnessMap,v.roughnessMapTransform)),p.envMap&&(v.envMapIntensity.value=p.envMapIntensity)}function f(v,p,x){v.ior.value=p.ior,p.sheen>0&&(v.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),v.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(v.sheenColorMap.value=p.sheenColorMap,t(p.sheenColorMap,v.sheenColorMapTransform)),p.sheenRoughnessMap&&(v.sheenRoughnessMap.value=p.sheenRoughnessMap,t(p.sheenRoughnessMap,v.sheenRoughnessMapTransform))),p.clearcoat>0&&(v.clearcoat.value=p.clearcoat,v.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(v.clearcoatMap.value=p.clearcoatMap,t(p.clearcoatMap,v.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(v.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,t(p.clearcoatRoughnessMap,v.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(v.clearcoatNormalMap.value=p.clearcoatNormalMap,t(p.clearcoatNormalMap,v.clearcoatNormalMapTransform),v.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===Yt&&v.clearcoatNormalScale.value.negate())),p.dispersion>0&&(v.dispersion.value=p.dispersion),p.iridescence>0&&(v.iridescence.value=p.iridescence,v.iridescenceIOR.value=p.iridescenceIOR,v.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],v.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(v.iridescenceMap.value=p.iridescenceMap,t(p.iridescenceMap,v.iridescenceMapTransform)),p.iridescenceThicknessMap&&(v.iridescenceThicknessMap.value=p.iridescenceThicknessMap,t(p.iridescenceThicknessMap,v.iridescenceThicknessMapTransform))),p.transmission>0&&(v.transmission.value=p.transmission,v.transmissionSamplerMap.value=x.texture,v.transmissionSamplerSize.value.set(x.width,x.height),p.transmissionMap&&(v.transmissionMap.value=p.transmissionMap,t(p.transmissionMap,v.transmissionMapTransform)),v.thickness.value=p.thickness,p.thicknessMap&&(v.thicknessMap.value=p.thicknessMap,t(p.thicknessMap,v.thicknessMapTransform)),v.attenuationDistance.value=p.attenuationDistance,v.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(v.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(v.anisotropyMap.value=p.anisotropyMap,t(p.anisotropyMap,v.anisotropyMapTransform))),v.specularIntensity.value=p.specularIntensity,v.specularColor.value.copy(p.specularColor),p.specularColorMap&&(v.specularColorMap.value=p.specularColorMap,t(p.specularColorMap,v.specularColorMapTransform)),p.specularIntensityMap&&(v.specularIntensityMap.value=p.specularIntensityMap,t(p.specularIntensityMap,v.specularIntensityMapTransform))}function m(v,p){p.matcap&&(v.matcap.value=p.matcap)}function g(v,p){const x=e.get(p).light;v.referencePosition.value.setFromMatrixPosition(x.matrixWorld),v.nearDistance.value=x.shadow.camera.near,v.farDistance.value=x.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function Yv(o,e,t,n){let i={},s={},r=[];const a=o.getParameter(o.MAX_UNIFORM_BUFFER_BINDINGS);function l(x,y){const _=y.program;n.uniformBlockBinding(x,_)}function h(x,y){let _=i[x.id];_===void 0&&(m(x),_=u(x),i[x.id]=_,x.addEventListener("dispose",v));const T=y.program;n.updateUBOMapping(x,T);const C=e.render.frame;s[x.id]!==C&&(d(x),s[x.id]=C)}function u(x){const y=c();x.__bindingPointIndex=y;const _=o.createBuffer(),T=x.__size,C=x.usage;return o.bindBuffer(o.UNIFORM_BUFFER,_),o.bufferData(o.UNIFORM_BUFFER,T,C),o.bindBuffer(o.UNIFORM_BUFFER,null),o.bindBufferBase(o.UNIFORM_BUFFER,y,_),_}function c(){for(let x=0;x<a;x++)if(r.indexOf(x)===-1)return r.push(x),x;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(x){const y=i[x.id],_=x.uniforms,T=x.__cache;o.bindBuffer(o.UNIFORM_BUFFER,y);for(let C=0,I=_.length;C<I;C++){const P=Array.isArray(_[C])?_[C]:[_[C]];for(let S=0,M=P.length;S<M;S++){const b=P[S];if(f(b,C,S,T)===!0){const F=b.__offset,U=Array.isArray(b.value)?b.value:[b.value];let W=0;for(let q=0;q<U.length;q++){const ee=U[q],O=g(ee);typeof ee=="number"||typeof ee=="boolean"?(b.__data[0]=ee,o.bufferSubData(o.UNIFORM_BUFFER,F+W,b.__data)):ee.isMatrix3?(b.__data[0]=ee.elements[0],b.__data[1]=ee.elements[1],b.__data[2]=ee.elements[2],b.__data[3]=0,b.__data[4]=ee.elements[3],b.__data[5]=ee.elements[4],b.__data[6]=ee.elements[5],b.__data[7]=0,b.__data[8]=ee.elements[6],b.__data[9]=ee.elements[7],b.__data[10]=ee.elements[8],b.__data[11]=0):(ee.toArray(b.__data,W),W+=O.storage/Float32Array.BYTES_PER_ELEMENT)}o.bufferSubData(o.UNIFORM_BUFFER,F,b.__data)}}}o.bindBuffer(o.UNIFORM_BUFFER,null)}function f(x,y,_,T){const C=x.value,I=y+"_"+_;if(T[I]===void 0)return typeof C=="number"||typeof C=="boolean"?T[I]=C:T[I]=C.clone(),!0;{const P=T[I];if(typeof C=="number"||typeof C=="boolean"){if(P!==C)return T[I]=C,!0}else if(P.equals(C)===!1)return P.copy(C),!0}return!1}function m(x){const y=x.uniforms;let _=0;const T=16;for(let I=0,P=y.length;I<P;I++){const S=Array.isArray(y[I])?y[I]:[y[I]];for(let M=0,b=S.length;M<b;M++){const F=S[M],U=Array.isArray(F.value)?F.value:[F.value];for(let W=0,q=U.length;W<q;W++){const ee=U[W],O=g(ee),N=_%T,te=N%O.boundary,J=N+te;_+=te,J!==0&&T-J<O.storage&&(_+=T-J),F.__data=new Float32Array(O.storage/Float32Array.BYTES_PER_ELEMENT),F.__offset=_,_+=O.storage}}}const C=_%T;return C>0&&(_+=T-C),x.__size=_,x.__cache={},this}function g(x){const y={boundary:0,storage:0};return typeof x=="number"||typeof x=="boolean"?(y.boundary=4,y.storage=4):x.isVector2?(y.boundary=8,y.storage=8):x.isVector3||x.isColor?(y.boundary=16,y.storage=12):x.isVector4?(y.boundary=16,y.storage=16):x.isMatrix3?(y.boundary=48,y.storage=48):x.isMatrix4?(y.boundary=64,y.storage=64):x.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",x),y}function v(x){const y=x.target;y.removeEventListener("dispose",v);const _=r.indexOf(y.__bindingPointIndex);r.splice(_,1),o.deleteBuffer(i[y.id]),delete i[y.id],delete s[y.id]}function p(){for(const x in i)o.deleteBuffer(i[x]);r=[],i={},s={}}return{bind:l,update:h,dispose:p}}class jv{constructor(e={}){const{canvas:t=Yh(),context:n=null,depth:i=!0,stencil:s=!1,alpha:r=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:h=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:c=!1,reverseDepthBuffer:d=!1}=e;this.isWebGLRenderer=!0;let f;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");f=n.getContextAttributes().alpha}else f=r;const m=new Uint32Array(4),g=new Int32Array(4);let v=null,p=null;const x=[],y=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Vt,this.toneMapping=ii,this.toneMappingExposure=1;const _=this;let T=!1,C=0,I=0,P=null,S=-1,M=null;const b=new wt,F=new wt;let U=null;const W=new lt(0);let q=0,ee=t.width,O=t.height,N=1,te=null,J=null;const B=new wt(0,0,ee,O),Q=new wt(0,0,ee,O);let z=!1;const A=new va;let R=!1,k=!1;this.transmissionResolutionScale=1;const Z=new pt,ne=new pt,Y=new H,ie=new wt,me={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Le=!1;function ve(){return P===null?N:1}let D=n;function de(w,G){return t.getContext(w,G)}try{const w={alpha:!0,depth:i,stencil:s,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:h,powerPreference:u,failIfMajorPerformanceCaveat:c};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${na}`),t.addEventListener("webglcontextlost",fe,!1),t.addEventListener("webglcontextrestored",ze,!1),t.addEventListener("webglcontextcreationerror",Oe,!1),D===null){const G="webgl2";if(D=de(G,w),D===null)throw de(G)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(w){throw console.error("THREE.WebGLRenderer: "+w.message),w}let he,qe,ye,nt,pe,L,E,K,le,ce,oe,Ee,we,Fe,ct,Se,He,Ze,Je,Xe,ht,it,_t,X;function Pe(){he=new sm(D),he.init(),it=new Vv(D,he),qe=new $p(D,he,e,it),ye=new Ov(D,he),qe.reverseDepthBuffer&&d&&ye.buffers.depth.setReversed(!0),nt=new am(D),pe=new bv,L=new zv(D,he,ye,pe,qe,it,nt),E=new Qp(_),K=new im(_),le=new dd(D),_t=new Kp(D,le),ce=new rm(D,le,nt,_t),oe=new cm(D,ce,le,nt),Je=new lm(D,qe,L),Se=new Jp(pe),Ee=new wv(_,E,K,he,qe,_t,Se),we=new qv(_,pe),Fe=new Av,ct=new Nv(he),Ze=new jp(_,E,K,ye,oe,f,l),He=new Fv(_,oe,qe),X=new Yv(D,nt,qe,ye),Xe=new Zp(D,he,nt),ht=new om(D,he,nt),nt.programs=Ee.programs,_.capabilities=qe,_.extensions=he,_.properties=pe,_.renderLists=Fe,_.shadowMap=He,_.state=ye,_.info=nt}Pe();const ae=new Wv(_,D);this.xr=ae,this.getContext=function(){return D},this.getContextAttributes=function(){return D.getContextAttributes()},this.forceContextLoss=function(){const w=he.get("WEBGL_lose_context");w&&w.loseContext()},this.forceContextRestore=function(){const w=he.get("WEBGL_lose_context");w&&w.restoreContext()},this.getPixelRatio=function(){return N},this.setPixelRatio=function(w){w!==void 0&&(N=w,this.setSize(ee,O,!1))},this.getSize=function(w){return w.set(ee,O)},this.setSize=function(w,G,j=!0){if(ae.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}ee=w,O=G,t.width=Math.floor(w*N),t.height=Math.floor(G*N),j===!0&&(t.style.width=w+"px",t.style.height=G+"px"),this.setViewport(0,0,w,G)},this.getDrawingBufferSize=function(w){return w.set(ee*N,O*N).floor()},this.setDrawingBufferSize=function(w,G,j){ee=w,O=G,N=j,t.width=Math.floor(w*j),t.height=Math.floor(G*j),this.setViewport(0,0,w,G)},this.getCurrentViewport=function(w){return w.copy(b)},this.getViewport=function(w){return w.copy(B)},this.setViewport=function(w,G,j,$){w.isVector4?B.set(w.x,w.y,w.z,w.w):B.set(w,G,j,$),ye.viewport(b.copy(B).multiplyScalar(N).round())},this.getScissor=function(w){return w.copy(Q)},this.setScissor=function(w,G,j,$){w.isVector4?Q.set(w.x,w.y,w.z,w.w):Q.set(w,G,j,$),ye.scissor(F.copy(Q).multiplyScalar(N).round())},this.getScissorTest=function(){return z},this.setScissorTest=function(w){ye.setScissorTest(z=w)},this.setOpaqueSort=function(w){te=w},this.setTransparentSort=function(w){J=w},this.getClearColor=function(w){return w.copy(Ze.getClearColor())},this.setClearColor=function(){Ze.setClearColor(...arguments)},this.getClearAlpha=function(){return Ze.getClearAlpha()},this.setClearAlpha=function(){Ze.setClearAlpha(...arguments)},this.clear=function(w=!0,G=!0,j=!0){let $=0;if(w){let V=!1;if(P!==null){const xe=P.texture.format;V=xe===ca||xe===la||xe===aa}if(V){const xe=P.texture.type,Re=xe===Wn||xe===gi||xe===xs||xe===Xi||xe===sa||xe===ra,Ue=Ze.getClearColor(),Ge=Ze.getClearAlpha(),$e=Ue.r,We=Ue.g,Ke=Ue.b;Re?(m[0]=$e,m[1]=We,m[2]=Ke,m[3]=Ge,D.clearBufferuiv(D.COLOR,0,m)):(g[0]=$e,g[1]=We,g[2]=Ke,g[3]=Ge,D.clearBufferiv(D.COLOR,0,g))}else $|=D.COLOR_BUFFER_BIT}G&&($|=D.DEPTH_BUFFER_BIT),j&&($|=D.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),D.clear($)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",fe,!1),t.removeEventListener("webglcontextrestored",ze,!1),t.removeEventListener("webglcontextcreationerror",Oe,!1),Ze.dispose(),Fe.dispose(),ct.dispose(),pe.dispose(),E.dispose(),K.dispose(),oe.dispose(),_t.dispose(),X.dispose(),Ee.dispose(),ae.dispose(),ae.removeEventListener("sessionstart",ge),ae.removeEventListener("sessionend",_e),tt.stop()};function fe(w){w.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),T=!0}function ze(){console.log("THREE.WebGLRenderer: Context Restored."),T=!1;const w=nt.autoReset,G=He.enabled,j=He.autoUpdate,$=He.needsUpdate,V=He.type;Pe(),nt.autoReset=w,He.enabled=G,He.autoUpdate=j,He.needsUpdate=$,He.type=V}function Oe(w){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",w.statusMessage)}function rt(w){const G=w.target;G.removeEventListener("dispose",rt),bt(G)}function bt(w){Ut(w),pe.remove(w)}function Ut(w){const G=pe.get(w).programs;G!==void 0&&(G.forEach(function(j){Ee.releaseProgram(j)}),w.isShaderMaterial&&Ee.releaseShaderCache(w))}this.renderBufferDirect=function(w,G,j,$,V,xe){G===null&&(G=me);const Re=V.isMesh&&V.matrixWorld.determinant()<0,Ue=be(w,G,j,$,V);ye.setMaterial($,Re);let Ge=j.index,$e=1;if($.wireframe===!0){if(Ge=ce.getWireframeAttribute(j),Ge===void 0)return;$e=2}const We=j.drawRange,Ke=j.attributes.position;let et=We.start*$e,mt=(We.start+We.count)*$e;xe!==null&&(et=Math.max(et,xe.start*$e),mt=Math.min(mt,(xe.start+xe.count)*$e)),Ge!==null?(et=Math.max(et,0),mt=Math.min(mt,Ge.count)):Ke!=null&&(et=Math.max(et,0),mt=Math.min(mt,Ke.count));const St=mt-et;if(St<0||St===1/0)return;_t.setup(V,$,Ue,j,Ge);let gt,st=Xe;if(Ge!==null&&(gt=le.get(Ge),st=ht,st.setIndex(gt)),V.isMesh)$.wireframe===!0?(ye.setLineWidth($.wireframeLinewidth*ve()),st.setMode(D.LINES)):st.setMode(D.TRIANGLES);else if(V.isLine){let je=$.linewidth;je===void 0&&(je=1),ye.setLineWidth(je*ve()),V.isLineSegments?st.setMode(D.LINES):V.isLineLoop?st.setMode(D.LINE_LOOP):st.setMode(D.LINE_STRIP)}else V.isPoints?st.setMode(D.POINTS):V.isSprite&&st.setMode(D.TRIANGLES);if(V.isBatchedMesh)if(V._multiDrawInstances!==null)di("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),st.renderMultiDrawInstances(V._multiDrawStarts,V._multiDrawCounts,V._multiDrawCount,V._multiDrawInstances);else if(he.get("WEBGL_multi_draw"))st.renderMultiDraw(V._multiDrawStarts,V._multiDrawCounts,V._multiDrawCount);else{const je=V._multiDrawStarts,Ct=V._multiDrawCounts,Ve=V._multiDrawCount,Lt=Ge?le.get(Ge).bytesPerElement:1,It=pe.get($).currentProgram.getUniforms();for(let Bt=0;Bt<Ve;Bt++)It.setValue(D,"_gl_DrawID",Bt),st.render(je[Bt]/Lt,Ct[Bt])}else if(V.isInstancedMesh)st.renderInstances(et,St,V.count);else if(j.isInstancedBufferGeometry){const je=j._maxInstanceCount!==void 0?j._maxInstanceCount:1/0,Ct=Math.min(j.instanceCount,je);st.renderInstances(et,St,Ct)}else st.render(et,St)};function ot(w,G,j){w.transparent===!0&&w.side===fn&&w.forceSinglePass===!1?(w.side=Yt,w.needsUpdate=!0,Ie(w,G,j),w.side=Gn,w.needsUpdate=!0,Ie(w,G,j),w.side=fn):Ie(w,G,j)}this.compile=function(w,G,j=null){j===null&&(j=w),p=ct.get(j),p.init(G),y.push(p),j.traverseVisible(function(V){V.isLight&&V.layers.test(G.layers)&&(p.pushLight(V),V.castShadow&&p.pushShadow(V))}),w!==j&&w.traverseVisible(function(V){V.isLight&&V.layers.test(G.layers)&&(p.pushLight(V),V.castShadow&&p.pushShadow(V))}),p.setupLights();const $=new Set;return w.traverse(function(V){if(!(V.isMesh||V.isPoints||V.isLine||V.isSprite))return;const xe=V.material;if(xe)if(Array.isArray(xe))for(let Re=0;Re<xe.length;Re++){const Ue=xe[Re];ot(Ue,j,V),$.add(Ue)}else ot(xe,j,V),$.add(xe)}),p=y.pop(),$},this.compileAsync=function(w,G,j=null){const $=this.compile(w,G,j);return new Promise(V=>{function xe(){if($.forEach(function(Re){pe.get(Re).currentProgram.isReady()&&$.delete(Re)}),$.size===0){V(w);return}setTimeout(xe,10)}he.get("KHR_parallel_shader_compile")!==null?xe():setTimeout(xe,10)})};let re=null;function ue(w){re&&re(w)}function ge(){tt.stop()}function _e(){tt.start()}const tt=new Fc;tt.setAnimationLoop(ue),typeof self<"u"&&tt.setContext(self),this.setAnimationLoop=function(w){re=w,ae.setAnimationLoop(w),w===null?tt.stop():tt.start()},ae.addEventListener("sessionstart",ge),ae.addEventListener("sessionend",_e),this.render=function(w,G){if(G!==void 0&&G.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(T===!0)return;if(w.matrixWorldAutoUpdate===!0&&w.updateMatrixWorld(),G.parent===null&&G.matrixWorldAutoUpdate===!0&&G.updateMatrixWorld(),ae.enabled===!0&&ae.isPresenting===!0&&(ae.cameraAutoUpdate===!0&&ae.updateCamera(G),G=ae.getCamera()),w.isScene===!0&&w.onBeforeRender(_,w,G,P),p=ct.get(w,y.length),p.init(G),y.push(p),ne.multiplyMatrices(G.projectionMatrix,G.matrixWorldInverse),A.setFromProjectionMatrix(ne),k=this.localClippingEnabled,R=Se.init(this.clippingPlanes,k),v=Fe.get(w,x.length),v.init(),x.push(v),ae.enabled===!0&&ae.isPresenting===!0){const xe=_.xr.getDepthSensingMesh();xe!==null&&Be(xe,G,-1/0,_.sortObjects)}Be(w,G,0,_.sortObjects),v.finish(),_.sortObjects===!0&&v.sort(te,J),Le=ae.enabled===!1||ae.isPresenting===!1||ae.hasDepthSensing()===!1,Le&&Ze.addToRenderList(v,w),this.info.render.frame++,R===!0&&Se.beginShadows();const j=p.state.shadowsArray;He.render(j,w,G),R===!0&&Se.endShadows(),this.info.autoReset===!0&&this.info.reset();const $=v.opaque,V=v.transmissive;if(p.setupLights(),G.isArrayCamera){const xe=G.cameras;if(V.length>0)for(let Re=0,Ue=xe.length;Re<Ue;Re++){const Ge=xe[Re];De($,V,w,Ge)}Le&&Ze.render(w);for(let Re=0,Ue=xe.length;Re<Ue;Re++){const Ge=xe[Re];Te(v,w,Ge,Ge.viewport)}}else V.length>0&&De($,V,w,G),Le&&Ze.render(w),Te(v,w,G);P!==null&&I===0&&(L.updateMultisampleRenderTarget(P),L.updateRenderTargetMipmap(P)),w.isScene===!0&&w.onAfterRender(_,w,G),_t.resetDefaultState(),S=-1,M=null,y.pop(),y.length>0?(p=y[y.length-1],R===!0&&Se.setGlobalState(_.clippingPlanes,p.state.camera)):p=null,x.pop(),x.length>0?v=x[x.length-1]:v=null};function Be(w,G,j,$){if(w.visible===!1)return;if(w.layers.test(G.layers)){if(w.isGroup)j=w.renderOrder;else if(w.isLOD)w.autoUpdate===!0&&w.update(G);else if(w.isLight)p.pushLight(w),w.castShadow&&p.pushShadow(w);else if(w.isSprite){if(!w.frustumCulled||A.intersectsSprite(w)){$&&ie.setFromMatrixPosition(w.matrixWorld).applyMatrix4(ne);const Re=oe.update(w),Ue=w.material;Ue.visible&&v.push(w,Re,Ue,j,ie.z,null)}}else if((w.isMesh||w.isLine||w.isPoints)&&(!w.frustumCulled||A.intersectsObject(w))){const Re=oe.update(w),Ue=w.material;if($&&(w.boundingSphere!==void 0?(w.boundingSphere===null&&w.computeBoundingSphere(),ie.copy(w.boundingSphere.center)):(Re.boundingSphere===null&&Re.computeBoundingSphere(),ie.copy(Re.boundingSphere.center)),ie.applyMatrix4(w.matrixWorld).applyMatrix4(ne)),Array.isArray(Ue)){const Ge=Re.groups;for(let $e=0,We=Ge.length;$e<We;$e++){const Ke=Ge[$e],et=Ue[Ke.materialIndex];et&&et.visible&&v.push(w,Re,et,j,ie.z,Ke)}}else Ue.visible&&v.push(w,Re,Ue,j,ie.z,null)}}const xe=w.children;for(let Re=0,Ue=xe.length;Re<Ue;Re++)Be(xe[Re],G,j,$)}function Te(w,G,j,$){const V=w.opaque,xe=w.transmissive,Re=w.transparent;p.setupLightsView(j),R===!0&&Se.setGlobalState(_.clippingPlanes,j),$&&ye.viewport(b.copy($)),V.length>0&&se(V,G,j),xe.length>0&&se(xe,G,j),Re.length>0&&se(Re,G,j),ye.buffers.depth.setTest(!0),ye.buffers.depth.setMask(!0),ye.buffers.color.setMask(!0),ye.setPolygonOffset(!1)}function De(w,G,j,$){if((j.isScene===!0?j.overrideMaterial:null)!==null)return;p.state.transmissionRenderTarget[$.id]===void 0&&(p.state.transmissionRenderTarget[$.id]=new _i(1,1,{generateMipmaps:!0,type:he.has("EXT_color_buffer_half_float")||he.has("EXT_color_buffer_float")?ws:Wn,minFilter:Vn,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Et.workingColorSpace}));const xe=p.state.transmissionRenderTarget[$.id],Re=$.viewport||b;xe.setSize(Re.z*_.transmissionResolutionScale,Re.w*_.transmissionResolutionScale);const Ue=_.getRenderTarget();_.setRenderTarget(xe),_.getClearColor(W),q=_.getClearAlpha(),q<1&&_.setClearColor(16777215,.5),_.clear(),Le&&Ze.render(j);const Ge=_.toneMapping;_.toneMapping=ii;const $e=$.viewport;if($.viewport!==void 0&&($.viewport=void 0),p.setupLightsView($),R===!0&&Se.setGlobalState(_.clippingPlanes,$),se(w,j,$),L.updateMultisampleRenderTarget(xe),L.updateRenderTargetMipmap(xe),he.has("WEBGL_multisampled_render_to_texture")===!1){let We=!1;for(let Ke=0,et=G.length;Ke<et;Ke++){const mt=G[Ke],St=mt.object,gt=mt.geometry,st=mt.material,je=mt.group;if(st.side===fn&&St.layers.test($.layers)){const Ct=st.side;st.side=Yt,st.needsUpdate=!0,Ae(St,j,$,gt,st,je),st.side=Ct,st.needsUpdate=!0,We=!0}}We===!0&&(L.updateMultisampleRenderTarget(xe),L.updateRenderTargetMipmap(xe))}_.setRenderTarget(Ue),_.setClearColor(W,q),$e!==void 0&&($.viewport=$e),_.toneMapping=Ge}function se(w,G,j){const $=G.isScene===!0?G.overrideMaterial:null;for(let V=0,xe=w.length;V<xe;V++){const Re=w[V],Ue=Re.object,Ge=Re.geometry,$e=$===null?Re.material:$,We=Re.group;Ue.layers.test(j.layers)&&Ae(Ue,G,j,Ge,$e,We)}}function Ae(w,G,j,$,V,xe){w.onBeforeRender(_,G,j,$,V,xe),w.modelViewMatrix.multiplyMatrices(j.matrixWorldInverse,w.matrixWorld),w.normalMatrix.getNormalMatrix(w.modelViewMatrix),V.onBeforeRender(_,G,j,$,w,xe),V.transparent===!0&&V.side===fn&&V.forceSinglePass===!1?(V.side=Yt,V.needsUpdate=!0,_.renderBufferDirect(j,G,$,V,w,xe),V.side=Gn,V.needsUpdate=!0,_.renderBufferDirect(j,G,$,V,w,xe),V.side=fn):_.renderBufferDirect(j,G,$,V,w,xe),w.onAfterRender(_,G,j,$,V,xe)}function Ie(w,G,j){G.isScene!==!0&&(G=me);const $=pe.get(w),V=p.state.lights,xe=p.state.shadowsArray,Re=V.state.version,Ue=Ee.getParameters(w,V.state,xe,G,j),Ge=Ee.getProgramCacheKey(Ue);let $e=$.programs;$.environment=w.isMeshStandardMaterial?G.environment:null,$.fog=G.fog,$.envMap=(w.isMeshStandardMaterial?K:E).get(w.envMap||$.environment),$.envMapRotation=$.environment!==null&&w.envMap===null?G.environmentRotation:w.envMapRotation,$e===void 0&&(w.addEventListener("dispose",rt),$e=new Map,$.programs=$e);let We=$e.get(Ge);if(We!==void 0){if($.currentProgram===We&&$.lightsStateVersion===Re)return Ce(w,Ue),We}else Ue.uniforms=Ee.getUniforms(w),w.onBeforeCompile(Ue,_),We=Ee.acquireProgram(Ue,Ge),$e.set(Ge,We),$.uniforms=Ue.uniforms;const Ke=$.uniforms;return(!w.isShaderMaterial&&!w.isRawShaderMaterial||w.clipping===!0)&&(Ke.clippingPlanes=Se.uniform),Ce(w,Ue),$.needsLights=Qe(w),$.lightsStateVersion=Re,$.needsLights&&(Ke.ambientLightColor.value=V.state.ambient,Ke.lightProbe.value=V.state.probe,Ke.directionalLights.value=V.state.directional,Ke.directionalLightShadows.value=V.state.directionalShadow,Ke.spotLights.value=V.state.spot,Ke.spotLightShadows.value=V.state.spotShadow,Ke.rectAreaLights.value=V.state.rectArea,Ke.ltc_1.value=V.state.rectAreaLTC1,Ke.ltc_2.value=V.state.rectAreaLTC2,Ke.pointLights.value=V.state.point,Ke.pointLightShadows.value=V.state.pointShadow,Ke.hemisphereLights.value=V.state.hemi,Ke.directionalShadowMap.value=V.state.directionalShadowMap,Ke.directionalShadowMatrix.value=V.state.directionalShadowMatrix,Ke.spotShadowMap.value=V.state.spotShadowMap,Ke.spotLightMatrix.value=V.state.spotLightMatrix,Ke.spotLightMap.value=V.state.spotLightMap,Ke.pointShadowMap.value=V.state.pointShadowMap,Ke.pointShadowMatrix.value=V.state.pointShadowMatrix),$.currentProgram=We,$.uniformsList=null,We}function Ye(w){if(w.uniformsList===null){const G=w.currentProgram.getUniforms();w.uniformsList=cr.seqWithValue(G.seq,w.uniforms)}return w.uniformsList}function Ce(w,G){const j=pe.get(w);j.outputColorSpace=G.outputColorSpace,j.batching=G.batching,j.batchingColor=G.batchingColor,j.instancing=G.instancing,j.instancingColor=G.instancingColor,j.instancingMorph=G.instancingMorph,j.skinning=G.skinning,j.morphTargets=G.morphTargets,j.morphNormals=G.morphNormals,j.morphColors=G.morphColors,j.morphTargetsCount=G.morphTargetsCount,j.numClippingPlanes=G.numClippingPlanes,j.numIntersection=G.numClipIntersection,j.vertexAlphas=G.vertexAlphas,j.vertexTangents=G.vertexTangents,j.toneMapping=G.toneMapping}function be(w,G,j,$,V){G.isScene!==!0&&(G=me),L.resetTextureUnits();const xe=G.fog,Re=$.isMeshStandardMaterial?G.environment:null,Ue=P===null?_.outputColorSpace:P.isXRRenderTarget===!0?P.texture.colorSpace:tn,Ge=($.isMeshStandardMaterial?K:E).get($.envMap||Re),$e=$.vertexColors===!0&&!!j.attributes.color&&j.attributes.color.itemSize===4,We=!!j.attributes.tangent&&(!!$.normalMap||$.anisotropy>0),Ke=!!j.morphAttributes.position,et=!!j.morphAttributes.normal,mt=!!j.morphAttributes.color;let St=ii;$.toneMapped&&(P===null||P.isXRRenderTarget===!0)&&(St=_.toneMapping);const gt=j.morphAttributes.position||j.morphAttributes.normal||j.morphAttributes.color,st=gt!==void 0?gt.length:0,je=pe.get($),Ct=p.state.lights;if(R===!0&&(k===!0||w!==M)){const jt=w===M&&$.id===S;Se.setState($,w,jt)}let Ve=!1;$.version===je.__version?(je.needsLights&&je.lightsStateVersion!==Ct.state.version||je.outputColorSpace!==Ue||V.isBatchedMesh&&je.batching===!1||!V.isBatchedMesh&&je.batching===!0||V.isBatchedMesh&&je.batchingColor===!0&&V.colorTexture===null||V.isBatchedMesh&&je.batchingColor===!1&&V.colorTexture!==null||V.isInstancedMesh&&je.instancing===!1||!V.isInstancedMesh&&je.instancing===!0||V.isSkinnedMesh&&je.skinning===!1||!V.isSkinnedMesh&&je.skinning===!0||V.isInstancedMesh&&je.instancingColor===!0&&V.instanceColor===null||V.isInstancedMesh&&je.instancingColor===!1&&V.instanceColor!==null||V.isInstancedMesh&&je.instancingMorph===!0&&V.morphTexture===null||V.isInstancedMesh&&je.instancingMorph===!1&&V.morphTexture!==null||je.envMap!==Ge||$.fog===!0&&je.fog!==xe||je.numClippingPlanes!==void 0&&(je.numClippingPlanes!==Se.numPlanes||je.numIntersection!==Se.numIntersection)||je.vertexAlphas!==$e||je.vertexTangents!==We||je.morphTargets!==Ke||je.morphNormals!==et||je.morphColors!==mt||je.toneMapping!==St||je.morphTargetsCount!==st)&&(Ve=!0):(Ve=!0,je.__version=$.version);let Lt=je.currentProgram;Ve===!0&&(Lt=Ie($,G,V));let It=!1,Bt=!1,an=!1;const Pt=Lt.getUniforms(),nn=je.uniforms;if(ye.useProgram(Lt.program)&&(It=!0,Bt=!0,an=!0),$.id!==S&&(S=$.id,Bt=!0),It||M!==w){ye.buffers.depth.getReversed()?(Z.copy(w.projectionMatrix),Kh(Z),Zh(Z),Pt.setValue(D,"projectionMatrix",Z)):Pt.setValue(D,"projectionMatrix",w.projectionMatrix),Pt.setValue(D,"viewMatrix",w.matrixWorldInverse);const sn=Pt.map.cameraPosition;sn!==void 0&&sn.setValue(D,Y.setFromMatrixPosition(w.matrixWorld)),qe.logarithmicDepthBuffer&&Pt.setValue(D,"logDepthBufFC",2/(Math.log(w.far+1)/Math.LN2)),($.isMeshPhongMaterial||$.isMeshToonMaterial||$.isMeshLambertMaterial||$.isMeshBasicMaterial||$.isMeshStandardMaterial||$.isShaderMaterial)&&Pt.setValue(D,"isOrthographic",w.isOrthographicCamera===!0),M!==w&&(M=w,Bt=!0,an=!0)}if(V.isSkinnedMesh){Pt.setOptional(D,V,"bindMatrix"),Pt.setOptional(D,V,"bindMatrixInverse");const jt=V.skeleton;jt&&(jt.boneTexture===null&&jt.computeBoneTexture(),Pt.setValue(D,"boneTexture",jt.boneTexture,L))}V.isBatchedMesh&&(Pt.setOptional(D,V,"batchingTexture"),Pt.setValue(D,"batchingTexture",V._matricesTexture,L),Pt.setOptional(D,V,"batchingIdTexture"),Pt.setValue(D,"batchingIdTexture",V._indirectTexture,L),Pt.setOptional(D,V,"batchingColorTexture"),V._colorsTexture!==null&&Pt.setValue(D,"batchingColorTexture",V._colorsTexture,L));const xt=j.morphAttributes;if((xt.position!==void 0||xt.normal!==void 0||xt.color!==void 0)&&Je.update(V,j,Lt),(Bt||je.receiveShadow!==V.receiveShadow)&&(je.receiveShadow=V.receiveShadow,Pt.setValue(D,"receiveShadow",V.receiveShadow)),$.isMeshGouraudMaterial&&$.envMap!==null&&(nn.envMap.value=Ge,nn.flipEnvMap.value=Ge.isCubeTexture&&Ge.isRenderTargetTexture===!1?-1:1),$.isMeshStandardMaterial&&$.envMap===null&&G.environment!==null&&(nn.envMapIntensity.value=G.environmentIntensity),Bt&&(Pt.setValue(D,"toneMappingExposure",_.toneMappingExposure),je.needsLights&&Ne(nn,an),xe&&$.fog===!0&&we.refreshFogUniforms(nn,xe),we.refreshMaterialUniforms(nn,$,N,O,p.state.transmissionRenderTarget[w.id]),cr.upload(D,Ye(je),nn,L)),$.isShaderMaterial&&$.uniformsNeedUpdate===!0&&(cr.upload(D,Ye(je),nn,L),$.uniformsNeedUpdate=!1),$.isSpriteMaterial&&Pt.setValue(D,"center",V.center),Pt.setValue(D,"modelViewMatrix",V.modelViewMatrix),Pt.setValue(D,"normalMatrix",V.normalMatrix),Pt.setValue(D,"modelMatrix",V.matrixWorld),$.isShaderMaterial||$.isRawShaderMaterial){const jt=$.uniformsGroups;for(let sn=0,Sr=jt.length;sn<Sr;sn++){const si=jt[sn];X.update(si,Lt),X.bind(si,Lt)}}return Lt}function Ne(w,G){w.ambientLightColor.needsUpdate=G,w.lightProbe.needsUpdate=G,w.directionalLights.needsUpdate=G,w.directionalLightShadows.needsUpdate=G,w.pointLights.needsUpdate=G,w.pointLightShadows.needsUpdate=G,w.spotLights.needsUpdate=G,w.spotLightShadows.needsUpdate=G,w.rectAreaLights.needsUpdate=G,w.hemisphereLights.needsUpdate=G}function Qe(w){return w.isMeshLambertMaterial||w.isMeshToonMaterial||w.isMeshPhongMaterial||w.isMeshStandardMaterial||w.isShadowMaterial||w.isShaderMaterial&&w.lights===!0}this.getActiveCubeFace=function(){return C},this.getActiveMipmapLevel=function(){return I},this.getRenderTarget=function(){return P},this.setRenderTargetTextures=function(w,G,j){pe.get(w.texture).__webglTexture=G,pe.get(w.depthTexture).__webglTexture=j;const $=pe.get(w);$.__hasExternalTextures=!0,$.__autoAllocateDepthBuffer=j===void 0,$.__autoAllocateDepthBuffer||he.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),$.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(w,G){const j=pe.get(w);j.__webglFramebuffer=G,j.__useDefaultFramebuffer=G===void 0};const at=D.createFramebuffer();this.setRenderTarget=function(w,G=0,j=0){P=w,C=G,I=j;let $=!0,V=null,xe=!1,Re=!1;if(w){const Ge=pe.get(w);if(Ge.__useDefaultFramebuffer!==void 0)ye.bindFramebuffer(D.FRAMEBUFFER,null),$=!1;else if(Ge.__webglFramebuffer===void 0)L.setupRenderTarget(w);else if(Ge.__hasExternalTextures)L.rebindTextures(w,pe.get(w.texture).__webglTexture,pe.get(w.depthTexture).__webglTexture);else if(w.depthBuffer){const Ke=w.depthTexture;if(Ge.__boundDepthTexture!==Ke){if(Ke!==null&&pe.has(Ke)&&(w.width!==Ke.image.width||w.height!==Ke.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");L.setupDepthRenderbuffer(w)}}const $e=w.texture;($e.isData3DTexture||$e.isDataArrayTexture||$e.isCompressedArrayTexture)&&(Re=!0);const We=pe.get(w).__webglFramebuffer;w.isWebGLCubeRenderTarget?(Array.isArray(We[G])?V=We[G][j]:V=We[G],xe=!0):w.samples>0&&L.useMultisampledRTT(w)===!1?V=pe.get(w).__webglMultisampledFramebuffer:Array.isArray(We)?V=We[j]:V=We,b.copy(w.viewport),F.copy(w.scissor),U=w.scissorTest}else b.copy(B).multiplyScalar(N).floor(),F.copy(Q).multiplyScalar(N).floor(),U=z;if(j!==0&&(V=at),ye.bindFramebuffer(D.FRAMEBUFFER,V)&&$&&ye.drawBuffers(w,V),ye.viewport(b),ye.scissor(F),ye.setScissorTest(U),xe){const Ge=pe.get(w.texture);D.framebufferTexture2D(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_CUBE_MAP_POSITIVE_X+G,Ge.__webglTexture,j)}else if(Re){const Ge=pe.get(w.texture),$e=G;D.framebufferTextureLayer(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,Ge.__webglTexture,j,$e)}else if(w!==null&&j!==0){const Ge=pe.get(w.texture);D.framebufferTexture2D(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_2D,Ge.__webglTexture,j)}S=-1},this.readRenderTargetPixels=function(w,G,j,$,V,xe,Re){if(!(w&&w.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ue=pe.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&Re!==void 0&&(Ue=Ue[Re]),Ue){ye.bindFramebuffer(D.FRAMEBUFFER,Ue);try{const Ge=w.texture,$e=Ge.format,We=Ge.type;if(!qe.textureFormatReadable($e)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!qe.textureTypeReadable(We)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}G>=0&&G<=w.width-$&&j>=0&&j<=w.height-V&&D.readPixels(G,j,$,V,it.convert($e),it.convert(We),xe)}finally{const Ge=P!==null?pe.get(P).__webglFramebuffer:null;ye.bindFramebuffer(D.FRAMEBUFFER,Ge)}}},this.readRenderTargetPixelsAsync=async function(w,G,j,$,V,xe,Re){if(!(w&&w.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ue=pe.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&Re!==void 0&&(Ue=Ue[Re]),Ue){const Ge=w.texture,$e=Ge.format,We=Ge.type;if(!qe.textureFormatReadable($e))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!qe.textureTypeReadable(We))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(G>=0&&G<=w.width-$&&j>=0&&j<=w.height-V){ye.bindFramebuffer(D.FRAMEBUFFER,Ue);const Ke=D.createBuffer();D.bindBuffer(D.PIXEL_PACK_BUFFER,Ke),D.bufferData(D.PIXEL_PACK_BUFFER,xe.byteLength,D.STREAM_READ),D.readPixels(G,j,$,V,it.convert($e),it.convert(We),0);const et=P!==null?pe.get(P).__webglFramebuffer:null;ye.bindFramebuffer(D.FRAMEBUFFER,et);const mt=D.fenceSync(D.SYNC_GPU_COMMANDS_COMPLETE,0);return D.flush(),await jh(D,mt,4),D.bindBuffer(D.PIXEL_PACK_BUFFER,Ke),D.getBufferSubData(D.PIXEL_PACK_BUFFER,0,xe),D.deleteBuffer(Ke),D.deleteSync(mt),xe}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(w,G=null,j=0){w.isTexture!==!0&&(di("WebGLRenderer: copyFramebufferToTexture function signature has changed."),G=arguments[0]||null,w=arguments[1]);const $=Math.pow(2,-j),V=Math.floor(w.image.width*$),xe=Math.floor(w.image.height*$),Re=G!==null?G.x:0,Ue=G!==null?G.y:0;L.setTexture2D(w,0),D.copyTexSubImage2D(D.TEXTURE_2D,j,0,0,Re,Ue,V,xe),ye.unbindTexture()};const Me=D.createFramebuffer(),ut=D.createFramebuffer();this.copyTextureToTexture=function(w,G,j=null,$=null,V=0,xe=null){w.isTexture!==!0&&(di("WebGLRenderer: copyTextureToTexture function signature has changed."),$=arguments[0]||null,w=arguments[1],G=arguments[2],xe=arguments[3]||0,j=null),xe===null&&(V!==0?(di("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),xe=V,V=0):xe=0);let Re,Ue,Ge,$e,We,Ke,et,mt,St;const gt=w.isCompressedTexture?w.mipmaps[xe]:w.image;if(j!==null)Re=j.max.x-j.min.x,Ue=j.max.y-j.min.y,Ge=j.isBox3?j.max.z-j.min.z:1,$e=j.min.x,We=j.min.y,Ke=j.isBox3?j.min.z:0;else{const xt=Math.pow(2,-V);Re=Math.floor(gt.width*xt),Ue=Math.floor(gt.height*xt),w.isDataArrayTexture?Ge=gt.depth:w.isData3DTexture?Ge=Math.floor(gt.depth*xt):Ge=1,$e=0,We=0,Ke=0}$!==null?(et=$.x,mt=$.y,St=$.z):(et=0,mt=0,St=0);const st=it.convert(G.format),je=it.convert(G.type);let Ct;G.isData3DTexture?(L.setTexture3D(G,0),Ct=D.TEXTURE_3D):G.isDataArrayTexture||G.isCompressedArrayTexture?(L.setTexture2DArray(G,0),Ct=D.TEXTURE_2D_ARRAY):(L.setTexture2D(G,0),Ct=D.TEXTURE_2D),D.pixelStorei(D.UNPACK_FLIP_Y_WEBGL,G.flipY),D.pixelStorei(D.UNPACK_PREMULTIPLY_ALPHA_WEBGL,G.premultiplyAlpha),D.pixelStorei(D.UNPACK_ALIGNMENT,G.unpackAlignment);const Ve=D.getParameter(D.UNPACK_ROW_LENGTH),Lt=D.getParameter(D.UNPACK_IMAGE_HEIGHT),It=D.getParameter(D.UNPACK_SKIP_PIXELS),Bt=D.getParameter(D.UNPACK_SKIP_ROWS),an=D.getParameter(D.UNPACK_SKIP_IMAGES);D.pixelStorei(D.UNPACK_ROW_LENGTH,gt.width),D.pixelStorei(D.UNPACK_IMAGE_HEIGHT,gt.height),D.pixelStorei(D.UNPACK_SKIP_PIXELS,$e),D.pixelStorei(D.UNPACK_SKIP_ROWS,We),D.pixelStorei(D.UNPACK_SKIP_IMAGES,Ke);const Pt=w.isDataArrayTexture||w.isData3DTexture,nn=G.isDataArrayTexture||G.isData3DTexture;if(w.isDepthTexture){const xt=pe.get(w),jt=pe.get(G),sn=pe.get(xt.__renderTarget),Sr=pe.get(jt.__renderTarget);ye.bindFramebuffer(D.READ_FRAMEBUFFER,sn.__webglFramebuffer),ye.bindFramebuffer(D.DRAW_FRAMEBUFFER,Sr.__webglFramebuffer);for(let si=0;si<Ge;si++)Pt&&(D.framebufferTextureLayer(D.READ_FRAMEBUFFER,D.COLOR_ATTACHMENT0,pe.get(w).__webglTexture,V,Ke+si),D.framebufferTextureLayer(D.DRAW_FRAMEBUFFER,D.COLOR_ATTACHMENT0,pe.get(G).__webglTexture,xe,St+si)),D.blitFramebuffer($e,We,Re,Ue,et,mt,Re,Ue,D.DEPTH_BUFFER_BIT,D.NEAREST);ye.bindFramebuffer(D.READ_FRAMEBUFFER,null),ye.bindFramebuffer(D.DRAW_FRAMEBUFFER,null)}else if(V!==0||w.isRenderTargetTexture||pe.has(w)){const xt=pe.get(w),jt=pe.get(G);ye.bindFramebuffer(D.READ_FRAMEBUFFER,Me),ye.bindFramebuffer(D.DRAW_FRAMEBUFFER,ut);for(let sn=0;sn<Ge;sn++)Pt?D.framebufferTextureLayer(D.READ_FRAMEBUFFER,D.COLOR_ATTACHMENT0,xt.__webglTexture,V,Ke+sn):D.framebufferTexture2D(D.READ_FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_2D,xt.__webglTexture,V),nn?D.framebufferTextureLayer(D.DRAW_FRAMEBUFFER,D.COLOR_ATTACHMENT0,jt.__webglTexture,xe,St+sn):D.framebufferTexture2D(D.DRAW_FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_2D,jt.__webglTexture,xe),V!==0?D.blitFramebuffer($e,We,Re,Ue,et,mt,Re,Ue,D.COLOR_BUFFER_BIT,D.NEAREST):nn?D.copyTexSubImage3D(Ct,xe,et,mt,St+sn,$e,We,Re,Ue):D.copyTexSubImage2D(Ct,xe,et,mt,$e,We,Re,Ue);ye.bindFramebuffer(D.READ_FRAMEBUFFER,null),ye.bindFramebuffer(D.DRAW_FRAMEBUFFER,null)}else nn?w.isDataTexture||w.isData3DTexture?D.texSubImage3D(Ct,xe,et,mt,St,Re,Ue,Ge,st,je,gt.data):G.isCompressedArrayTexture?D.compressedTexSubImage3D(Ct,xe,et,mt,St,Re,Ue,Ge,st,gt.data):D.texSubImage3D(Ct,xe,et,mt,St,Re,Ue,Ge,st,je,gt):w.isDataTexture?D.texSubImage2D(D.TEXTURE_2D,xe,et,mt,Re,Ue,st,je,gt.data):w.isCompressedTexture?D.compressedTexSubImage2D(D.TEXTURE_2D,xe,et,mt,gt.width,gt.height,st,gt.data):D.texSubImage2D(D.TEXTURE_2D,xe,et,mt,Re,Ue,st,je,gt);D.pixelStorei(D.UNPACK_ROW_LENGTH,Ve),D.pixelStorei(D.UNPACK_IMAGE_HEIGHT,Lt),D.pixelStorei(D.UNPACK_SKIP_PIXELS,It),D.pixelStorei(D.UNPACK_SKIP_ROWS,Bt),D.pixelStorei(D.UNPACK_SKIP_IMAGES,an),xe===0&&G.generateMipmaps&&D.generateMipmap(Ct),ye.unbindTexture()},this.copyTextureToTexture3D=function(w,G,j=null,$=null,V=0){return w.isTexture!==!0&&(di("WebGLRenderer: copyTextureToTexture3D function signature has changed."),j=arguments[0]||null,$=arguments[1]||null,w=arguments[2],G=arguments[3],V=arguments[4]||0),di('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(w,G,j,$,V)},this.initRenderTarget=function(w){pe.get(w).__webglFramebuffer===void 0&&L.setupRenderTarget(w)},this.initTexture=function(w){w.isCubeTexture?L.setTextureCube(w,0):w.isData3DTexture?L.setTexture3D(w,0):w.isDataArrayTexture||w.isCompressedArrayTexture?L.setTexture2DArray(w,0):L.setTexture2D(w,0),ye.unbindTexture()},this.resetState=function(){C=0,I=0,P=null,ye.reset(),_t.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return kn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorspace=Et._getDrawingBufferColorSpace(e),t.unpackColorSpace=Et._getUnpackColorSpace()}}function Kv(o){return o&&o.__esModule&&Object.prototype.hasOwnProperty.call(o,"default")?o.default:o}function er(o){throw new Error('Could not dynamically require "'+o+'". Please configure the dynamicRequireTargets or/and ignoreDynamicRequires option of @rollup/plugin-commonjs appropriately for this require call to work.')}var no={exports:{}},Wl;function Zv(){return Wl||(Wl=1,(function(o,e){(function(t){o.exports=t()})(function(){return(function t(n,i,s){function r(h,u){if(!i[h]){if(!n[h]){var c=typeof er=="function"&&er;if(!u&&c)return c(h,!0);if(a)return a(h,!0);throw new Error("Cannot find module '"+h+"'")}var d=i[h]={exports:{}};n[h][0].call(d.exports,function(f){var m=n[h][1][f];return r(m||f)},d,d.exports,t,n,i,s)}return i[h].exports}for(var a=typeof er=="function"&&er,l=0;l<s.length;l++)r(s[l]);return r})({1:[function(t,n,i){n.exports={name:"cannon",version:"0.6.2",description:"A lightweight 3D physics engine written in JavaScript.",homepage:"https://github.com/schteppe/cannon.js",author:"Stefan Hedman <schteppe@gmail.com> (http://steffe.se)",keywords:["cannon.js","cannon","physics","engine","3d"],main:"./build/cannon.js",engines:{node:"*"},repository:{type:"git",url:"https://github.com/schteppe/cannon.js.git"},bugs:{url:"https://github.com/schteppe/cannon.js/issues"},licenses:[{type:"MIT"}],devDependencies:{jshint:"latest","uglify-js":"latest",nodeunit:"^0.9.0",grunt:"~0.4.0","grunt-contrib-jshint":"~0.1.1","grunt-contrib-nodeunit":"^0.4.1","grunt-contrib-concat":"~0.1.3","grunt-contrib-uglify":"^0.5.1","grunt-browserify":"^2.1.4","grunt-contrib-yuidoc":"^0.5.2",browserify:"*"},dependencies:{}}},{}],2:[function(t,n,i){n.exports={version:t("../package.json").version,AABB:t("./collision/AABB"),ArrayCollisionMatrix:t("./collision/ArrayCollisionMatrix"),Body:t("./objects/Body"),Box:t("./shapes/Box"),Broadphase:t("./collision/Broadphase"),Constraint:t("./constraints/Constraint"),ContactEquation:t("./equations/ContactEquation"),Narrowphase:t("./world/Narrowphase"),ConeTwistConstraint:t("./constraints/ConeTwistConstraint"),ContactMaterial:t("./material/ContactMaterial"),ConvexPolyhedron:t("./shapes/ConvexPolyhedron"),Cylinder:t("./shapes/Cylinder"),DistanceConstraint:t("./constraints/DistanceConstraint"),Equation:t("./equations/Equation"),EventTarget:t("./utils/EventTarget"),FrictionEquation:t("./equations/FrictionEquation"),GSSolver:t("./solver/GSSolver"),GridBroadphase:t("./collision/GridBroadphase"),Heightfield:t("./shapes/Heightfield"),HingeConstraint:t("./constraints/HingeConstraint"),LockConstraint:t("./constraints/LockConstraint"),Mat3:t("./math/Mat3"),Material:t("./material/Material"),NaiveBroadphase:t("./collision/NaiveBroadphase"),ObjectCollisionMatrix:t("./collision/ObjectCollisionMatrix"),Pool:t("./utils/Pool"),Particle:t("./shapes/Particle"),Plane:t("./shapes/Plane"),PointToPointConstraint:t("./constraints/PointToPointConstraint"),Quaternion:t("./math/Quaternion"),Ray:t("./collision/Ray"),RaycastVehicle:t("./objects/RaycastVehicle"),RaycastResult:t("./collision/RaycastResult"),RigidVehicle:t("./objects/RigidVehicle"),RotationalEquation:t("./equations/RotationalEquation"),RotationalMotorEquation:t("./equations/RotationalMotorEquation"),SAPBroadphase:t("./collision/SAPBroadphase"),SPHSystem:t("./objects/SPHSystem"),Shape:t("./shapes/Shape"),Solver:t("./solver/Solver"),Sphere:t("./shapes/Sphere"),SplitSolver:t("./solver/SplitSolver"),Spring:t("./objects/Spring"),Trimesh:t("./shapes/Trimesh"),Vec3:t("./math/Vec3"),Vec3Pool:t("./utils/Vec3Pool"),World:t("./world/World")}},{"../package.json":1,"./collision/AABB":3,"./collision/ArrayCollisionMatrix":4,"./collision/Broadphase":5,"./collision/GridBroadphase":6,"./collision/NaiveBroadphase":7,"./collision/ObjectCollisionMatrix":8,"./collision/Ray":9,"./collision/RaycastResult":10,"./collision/SAPBroadphase":11,"./constraints/ConeTwistConstraint":12,"./constraints/Constraint":13,"./constraints/DistanceConstraint":14,"./constraints/HingeConstraint":15,"./constraints/LockConstraint":16,"./constraints/PointToPointConstraint":17,"./equations/ContactEquation":19,"./equations/Equation":20,"./equations/FrictionEquation":21,"./equations/RotationalEquation":22,"./equations/RotationalMotorEquation":23,"./material/ContactMaterial":24,"./material/Material":25,"./math/Mat3":27,"./math/Quaternion":28,"./math/Vec3":30,"./objects/Body":31,"./objects/RaycastVehicle":32,"./objects/RigidVehicle":33,"./objects/SPHSystem":34,"./objects/Spring":35,"./shapes/Box":37,"./shapes/ConvexPolyhedron":38,"./shapes/Cylinder":39,"./shapes/Heightfield":40,"./shapes/Particle":41,"./shapes/Plane":42,"./shapes/Shape":43,"./shapes/Sphere":44,"./shapes/Trimesh":45,"./solver/GSSolver":46,"./solver/Solver":47,"./solver/SplitSolver":48,"./utils/EventTarget":49,"./utils/Pool":51,"./utils/Vec3Pool":54,"./world/Narrowphase":55,"./world/World":56}],3:[function(t,n,i){var s=t("../math/Vec3");t("../utils/Utils"),n.exports=r;function r(h){h=h||{},this.lowerBound=new s,h.lowerBound&&this.lowerBound.copy(h.lowerBound),this.upperBound=new s,h.upperBound&&this.upperBound.copy(h.upperBound)}var a=new s;r.prototype.setFromPoints=function(h,u,c,d){var f=this.lowerBound,m=this.upperBound,g=c;f.copy(h[0]),g&&g.vmult(f,f),m.copy(f);for(var v=1;v<h.length;v++){var p=h[v];g&&(g.vmult(p,a),p=a),p.x>m.x&&(m.x=p.x),p.x<f.x&&(f.x=p.x),p.y>m.y&&(m.y=p.y),p.y<f.y&&(f.y=p.y),p.z>m.z&&(m.z=p.z),p.z<f.z&&(f.z=p.z)}return u&&(u.vadd(f,f),u.vadd(m,m)),d&&(f.x-=d,f.y-=d,f.z-=d,m.x+=d,m.y+=d,m.z+=d),this},r.prototype.copy=function(h){return this.lowerBound.copy(h.lowerBound),this.upperBound.copy(h.upperBound),this},r.prototype.clone=function(){return new r().copy(this)},r.prototype.extend=function(h){var u=h.lowerBound.x;this.lowerBound.x>u&&(this.lowerBound.x=u);var c=h.upperBound.x;this.upperBound.x<c&&(this.upperBound.x=c);var u=h.lowerBound.y;this.lowerBound.y>u&&(this.lowerBound.y=u);var c=h.upperBound.y;this.upperBound.y<c&&(this.upperBound.y=c);var u=h.lowerBound.z;this.lowerBound.z>u&&(this.lowerBound.z=u);var c=h.upperBound.z;this.upperBound.z<c&&(this.upperBound.z=c)},r.prototype.overlaps=function(h){var u=this.lowerBound,c=this.upperBound,d=h.lowerBound,f=h.upperBound;return(d.x<=c.x&&c.x<=f.x||u.x<=f.x&&f.x<=c.x)&&(d.y<=c.y&&c.y<=f.y||u.y<=f.y&&f.y<=c.y)&&(d.z<=c.z&&c.z<=f.z||u.z<=f.z&&f.z<=c.z)},r.prototype.contains=function(h){var u=this.lowerBound,c=this.upperBound,d=h.lowerBound,f=h.upperBound;return u.x<=d.x&&c.x>=f.x&&u.y<=d.y&&c.y>=f.y&&u.z<=d.z&&c.z>=f.z},r.prototype.getCorners=function(h,u,c,d,f,m,g,v){var p=this.lowerBound,x=this.upperBound;h.copy(p),u.set(x.x,p.y,p.z),c.set(x.x,x.y,p.z),d.set(p.x,x.y,x.z),f.set(x.x,p.y,p.z),m.set(p.x,x.y,p.z),g.set(p.x,p.y,x.z),v.copy(x)};var l=[new s,new s,new s,new s,new s,new s,new s,new s];r.prototype.toLocalFrame=function(h,u){var c=l,d=c[0],f=c[1],m=c[2],g=c[3],v=c[4],p=c[5],x=c[6],y=c[7];this.getCorners(d,f,m,g,v,p,x,y);for(var _=0;_!==8;_++){var T=c[_];h.pointToLocal(T,T)}return u.setFromPoints(c)},r.prototype.toWorldFrame=function(h,u){var c=l,d=c[0],f=c[1],m=c[2],g=c[3],v=c[4],p=c[5],x=c[6],y=c[7];this.getCorners(d,f,m,g,v,p,x,y);for(var _=0;_!==8;_++){var T=c[_];h.pointToWorld(T,T)}return u.setFromPoints(c)}},{"../math/Vec3":30,"../utils/Utils":53}],4:[function(t,n,i){n.exports=s;function s(){this.matrix=[]}s.prototype.get=function(r,a){if(r=r.index,a=a.index,a>r){var l=a;a=r,r=l}return this.matrix[(r*(r+1)>>1)+a-1]},s.prototype.set=function(r,a,l){if(r=r.index,a=a.index,a>r){var h=a;a=r,r=h}this.matrix[(r*(r+1)>>1)+a-1]=l?1:0},s.prototype.reset=function(){for(var r=0,a=this.matrix.length;r!==a;r++)this.matrix[r]=0},s.prototype.setNumObjects=function(r){this.matrix.length=r*(r-1)>>1}},{}],5:[function(t,n,i){var s=t("../objects/Body"),r=t("../math/Vec3"),a=t("../math/Quaternion");t("../shapes/Shape"),t("../shapes/Plane"),n.exports=l;function l(){this.world=null,this.useBoundingBoxes=!1,this.dirty=!0}l.prototype.collisionPairs=function(g,v,p){throw new Error("collisionPairs not implemented for this BroadPhase class!")};var h=s.STATIC|s.KINEMATIC;l.prototype.needBroadphaseCollision=function(g,v){return!((g.collisionFilterGroup&v.collisionFilterMask)===0||(v.collisionFilterGroup&g.collisionFilterMask)===0||((g.type&h)!==0||g.sleepState===s.SLEEPING)&&((v.type&h)!==0||v.sleepState===s.SLEEPING))},l.prototype.intersectionTest=function(g,v,p,x){this.useBoundingBoxes?this.doBoundingBoxBroadphase(g,v,p,x):this.doBoundingSphereBroadphase(g,v,p,x)};var u=new r;new r,new a,new r,l.prototype.doBoundingSphereBroadphase=function(g,v,p,x){var y=u;v.position.vsub(g.position,y);var _=Math.pow(g.boundingRadius+v.boundingRadius,2),T=y.norm2();T<_&&(p.push(g),x.push(v))},l.prototype.doBoundingBoxBroadphase=function(g,v,p,x){g.aabbNeedsUpdate&&g.computeAABB(),v.aabbNeedsUpdate&&v.computeAABB(),g.aabb.overlaps(v.aabb)&&(p.push(g),x.push(v))};var c={keys:[]},d=[],f=[];l.prototype.makePairsUnique=function(g,v){for(var p=c,x=d,y=f,_=g.length,T=0;T!==_;T++)x[T]=g[T],y[T]=v[T];g.length=0,v.length=0;for(var T=0;T!==_;T++){var C=x[T].id,I=y[T].id,P=C<I?C+","+I:I+","+C;p[P]=T,p.keys.push(P)}for(var T=0;T!==p.keys.length;T++){var P=p.keys.pop(),S=p[P];g.push(x[S]),v.push(y[S]),delete p[P]}},l.prototype.setWorld=function(g){};var m=new r;l.boundingSphereCheck=function(g,v){var p=m;return g.position.vsub(v.position,p),Math.pow(g.shape.boundingSphereRadius+v.shape.boundingSphereRadius,2)>p.norm2()},l.prototype.aabbQuery=function(g,v,p){return console.warn(".aabbQuery is not implemented in this Broadphase subclass."),[]}},{"../math/Quaternion":28,"../math/Vec3":30,"../objects/Body":31,"../shapes/Plane":42,"../shapes/Shape":43}],6:[function(t,n,i){n.exports=l;var s=t("./Broadphase"),r=t("../math/Vec3"),a=t("../shapes/Shape");function l(u,c,d,f,m){s.apply(this),this.nx=d||10,this.ny=f||10,this.nz=m||10,this.aabbMin=u||new r(100,100,100),this.aabbMax=c||new r(-100,-100,-100);var g=this.nx*this.ny*this.nz;if(g<=0)throw"GridBroadphase: Each dimension's n must be >0";this.bins=[],this.binLengths=[],this.bins.length=g,this.binLengths.length=g;for(var v=0;v<g;v++)this.bins[v]=[],this.binLengths[v]=0}l.prototype=new s,l.prototype.constructor=l;var h=new r;new r,l.prototype.collisionPairs=function(u,c,d){var f=u.numObjects(),m=u.bodies,Z=this.aabbMax,k=this.aabbMin,g=this.nx,v=this.ny,p=this.nz,x=v*p,y=p,_=1,T=Z.x,C=Z.y,I=Z.z,P=k.x,S=k.y,M=k.z,b=g/(T-P),F=v/(C-S),U=p/(I-M),W=(T-P)/g,q=(C-S)/v,ee=(I-M)/p,O=Math.sqrt(W*W+q*q+ee*ee)*.5,N=a.types,te=N.SPHERE,J=N.PLANE;N.BOX,N.COMPOUND,N.CONVEXPOLYHEDRON;for(var B=this.bins,Q=this.binLengths,z=this.bins.length,A=0;A!==z;A++)Q[A]=0;var R=Math.ceil,k=Math.min,Z=Math.max;function ne(ct,Se,He,Ze,Je,Xe,ht){var it=(ct-P)*b|0,_t=(Se-S)*F|0,X=(He-M)*U|0,Pe=R((Ze-P)*b),ae=R((Je-S)*F),fe=R((Xe-M)*U);it<0?it=0:it>=g&&(it=g-1),_t<0?_t=0:_t>=v&&(_t=v-1),X<0?X=0:X>=p&&(X=p-1),Pe<0?Pe=0:Pe>=g&&(Pe=g-1),ae<0?ae=0:ae>=v&&(ae=v-1),fe<0?fe=0:fe>=p&&(fe=p-1),it*=x,_t*=y,X*=_,Pe*=x,ae*=y,fe*=_;for(var ze=it;ze<=Pe;ze+=x)for(var Oe=_t;Oe<=ae;Oe+=y)for(var rt=X;rt<=fe;rt+=_){var bt=ze+Oe+rt;B[bt][Q[bt]++]=ht}}for(var A=0;A!==f;A++){var Y=m[A],ie=Y.shape;switch(ie.type){case te:var me=Y.position.x,Le=Y.position.y,ve=Y.position.z,D=ie.radius;ne(me-D,Le-D,ve-D,me+D,Le+D,ve+D,Y);break;case J:ie.worldNormalNeedsUpdate&&ie.computeWorldNormal(Y.quaternion);var de=ie.worldNormal,he=P+W*.5-Y.position.x,qe=S+q*.5-Y.position.y,ye=M+ee*.5-Y.position.z,nt=h;nt.set(he,qe,ye);for(var pe=0,L=0;pe!==g;pe++,L+=x,nt.y=qe,nt.x+=W)for(var E=0,K=0;E!==v;E++,K+=y,nt.z=ye,nt.y+=q)for(var le=0,ce=0;le!==p;le++,ce+=_,nt.z+=ee)if(nt.dot(de)<O){var oe=L+K+ce;B[oe][Q[oe]++]=Y}break;default:Y.aabbNeedsUpdate&&Y.computeAABB(),ne(Y.aabb.lowerBound.x,Y.aabb.lowerBound.y,Y.aabb.lowerBound.z,Y.aabb.upperBound.x,Y.aabb.upperBound.y,Y.aabb.upperBound.z,Y);break}}for(var A=0;A!==z;A++){var Ee=Q[A];if(Ee>1)for(var we=B[A],pe=0;pe!==Ee;pe++)for(var Y=we[pe],E=0;E!==pe;E++){var Fe=we[E];this.needBroadphaseCollision(Y,Fe)&&this.intersectionTest(Y,Fe,c,d)}}this.makePairsUnique(c,d)}},{"../math/Vec3":30,"../shapes/Shape":43,"./Broadphase":5}],7:[function(t,n,i){n.exports=a;var s=t("./Broadphase"),r=t("./AABB");function a(){s.apply(this)}a.prototype=new s,a.prototype.constructor=a,a.prototype.collisionPairs=function(l,h,u){var c=l.bodies,d=c.length,f,m,g,v;for(f=0;f!==d;f++)for(m=0;m!==f;m++)g=c[f],v=c[m],this.needBroadphaseCollision(g,v)&&this.intersectionTest(g,v,h,u)},new r,a.prototype.aabbQuery=function(l,h,u){u=u||[];for(var c=0;c<l.bodies.length;c++){var d=l.bodies[c];d.aabbNeedsUpdate&&d.computeAABB(),d.aabb.overlaps(h)&&u.push(d)}return u}},{"./AABB":3,"./Broadphase":5}],8:[function(t,n,i){n.exports=s;function s(){this.matrix={}}s.prototype.get=function(r,a){if(r=r.id,a=a.id,a>r){var l=a;a=r,r=l}return r+"-"+a in this.matrix},s.prototype.set=function(r,a,l){if(r=r.id,a=a.id,a>r){var h=a;a=r,r=h}l?this.matrix[r+"-"+a]=!0:delete this.matrix[r+"-"+a]},s.prototype.reset=function(){this.matrix={}},s.prototype.setNumObjects=function(r){}},{}],9:[function(t,n,i){n.exports=c;var s=t("../math/Vec3"),r=t("../math/Quaternion"),a=t("../math/Transform");t("../shapes/ConvexPolyhedron"),t("../shapes/Box");var l=t("../collision/RaycastResult"),h=t("../shapes/Shape"),u=t("../collision/AABB");function c(z,A){this.from=z?z.clone():new s,this.to=A?A.clone():new s,this._direction=new s,this.precision=1e-4,this.checkCollisionResponse=!0,this.skipBackfaces=!1,this.collisionFilterMask=-1,this.collisionFilterGroup=-1,this.mode=c.ANY,this.result=new l,this.hasHit=!1,this.callback=function(R){}}c.prototype.constructor=c,c.CLOSEST=1,c.ANY=2,c.ALL=4;var d=new u,f=[];c.prototype.intersectWorld=function(z,A){return this.mode=A.mode||c.ANY,this.result=A.result||new l,this.skipBackfaces=!!A.skipBackfaces,this.collisionFilterMask=typeof A.collisionFilterMask<"u"?A.collisionFilterMask:-1,this.collisionFilterGroup=typeof A.collisionFilterGroup<"u"?A.collisionFilterGroup:-1,A.from&&this.from.copy(A.from),A.to&&this.to.copy(A.to),this.callback=A.callback||function(){},this.hasHit=!1,this.result.reset(),this._updateDirection(),this.getAABB(d),f.length=0,z.broadphase.aabbQuery(z,d,f),this.intersectBodies(f),this.hasHit};var m=new s,g=new s;c.pointInTriangle=v;function v(z,A,R,k){k.vsub(A,J),R.vsub(A,m),z.vsub(A,g);var Z=J.dot(J),ne=J.dot(m),Y=J.dot(g),ie=m.dot(m),me=m.dot(g),Le,ve;return(Le=ie*Y-ne*me)>=0&&(ve=Z*me-ne*Y)>=0&&Le+ve<Z*ie-ne*ne}var p=new s,x=new r;c.prototype.intersectBody=function(z,A){A&&(this.result=A,this._updateDirection());var R=this.checkCollisionResponse;if(!(R&&!z.collisionResponse)&&!((this.collisionFilterGroup&z.collisionFilterMask)===0||(z.collisionFilterGroup&this.collisionFilterMask)===0))for(var k=p,Z=x,ne=0,Y=z.shapes.length;ne<Y;ne++){var ie=z.shapes[ne];if(!(R&&!ie.collisionResponse)&&(z.quaternion.mult(z.shapeOrientations[ne],Z),z.quaternion.vmult(z.shapeOffsets[ne],k),k.vadd(z.position,k),this.intersectShape(ie,Z,k,z),this.result._shouldStop))break}},c.prototype.intersectBodies=function(z,A){A&&(this.result=A,this._updateDirection());for(var R=0,k=z.length;!this.result._shouldStop&&R<k;R++)this.intersectBody(z[R])},c.prototype._updateDirection=function(){this.to.vsub(this.from,this._direction),this._direction.normalize()},c.prototype.intersectShape=function(z,A,R,k){var Z=this.from,ne=Q(Z,this._direction,R);if(!(ne>z.boundingSphereRadius)){var Y=this[z.type];Y&&Y.call(this,z,A,R,k)}},new s,new s;var y=new s,_=new s,T=new s,C=new s;new s,new l,c.prototype.intersectBox=function(z,A,R,k){return this.intersectConvex(z.convexPolyhedronRepresentation,A,R,k)},c.prototype[h.types.BOX]=c.prototype.intersectBox,c.prototype.intersectPlane=function(z,A,R,k){var Z=this.from,ne=this.to,Y=this._direction,ie=new s(0,0,1);A.vmult(ie,ie);var me=new s;Z.vsub(R,me);var Le=me.dot(ie);ne.vsub(R,me);var ve=me.dot(ie);if(!(Le*ve>0)&&!(Z.distanceTo(ne)<Le)){var D=ie.dot(Y);if(!(Math.abs(D)<this.precision)){var de=new s,he=new s,qe=new s;Z.vsub(R,de);var ye=-ie.dot(de)/D;Y.scale(ye,he),Z.vadd(he,qe),this.reportIntersection(ie,qe,z,k,-1)}}},c.prototype[h.types.PLANE]=c.prototype.intersectPlane,c.prototype.getAABB=function(z){var A=this.to,R=this.from;z.lowerBound.x=Math.min(A.x,R.x),z.lowerBound.y=Math.min(A.y,R.y),z.lowerBound.z=Math.min(A.z,R.z),z.upperBound.x=Math.max(A.x,R.x),z.upperBound.y=Math.max(A.y,R.y),z.upperBound.z=Math.max(A.z,R.z)};var I={faceList:[0]};c.prototype.intersectHeightfield=function(z,A,R,k){z.data,z.elementSize;var Z=new s,ne=new c(this.from,this.to);a.pointToLocalFrame(R,A,ne.from,ne.from),a.pointToLocalFrame(R,A,ne.to,ne.to);var Y=[],ie=null,me=null,Le=null,ve=null,D=z.getIndexOfPosition(ne.from.x,ne.from.y,Y,!1);if(D&&(ie=Y[0],me=Y[1],Le=Y[0],ve=Y[1]),D=z.getIndexOfPosition(ne.to.x,ne.to.y,Y,!1),D&&((ie===null||Y[0]<ie)&&(ie=Y[0]),(Le===null||Y[0]>Le)&&(Le=Y[0]),(me===null||Y[1]<me)&&(me=Y[1]),(ve===null||Y[1]>ve)&&(ve=Y[1])),ie!==null){var de=[];z.getRectMinMax(ie,me,Le,ve,de),de[0],de[1];for(var he=ie;he<=Le;he++)for(var qe=me;qe<=ve;qe++){if(this.result._shouldStop||(z.getConvexTrianglePillar(he,qe,!1),a.pointToWorldFrame(R,A,z.pillarOffset,Z),this.intersectConvex(z.pillarConvex,A,Z,k,I),this.result._shouldStop))return;z.getConvexTrianglePillar(he,qe,!0),a.pointToWorldFrame(R,A,z.pillarOffset,Z),this.intersectConvex(z.pillarConvex,A,Z,k,I)}}},c.prototype[h.types.HEIGHTFIELD]=c.prototype.intersectHeightfield;var P=new s,S=new s;c.prototype.intersectSphere=function(z,A,R,k){var Z=this.from,ne=this.to,Y=z.radius,ie=Math.pow(ne.x-Z.x,2)+Math.pow(ne.y-Z.y,2)+Math.pow(ne.z-Z.z,2),me=2*((ne.x-Z.x)*(Z.x-R.x)+(ne.y-Z.y)*(Z.y-R.y)+(ne.z-Z.z)*(Z.z-R.z)),Le=Math.pow(Z.x-R.x,2)+Math.pow(Z.y-R.y,2)+Math.pow(Z.z-R.z,2)-Math.pow(Y,2),ve=Math.pow(me,2)-4*ie*Le,D=P,de=S;if(!(ve<0))if(ve===0)Z.lerp(ne,ve,D),D.vsub(R,de),de.normalize(),this.reportIntersection(de,D,z,k,-1);else{var he=(-me-Math.sqrt(ve))/(2*ie),qe=(-me+Math.sqrt(ve))/(2*ie);if(he>=0&&he<=1&&(Z.lerp(ne,he,D),D.vsub(R,de),de.normalize(),this.reportIntersection(de,D,z,k,-1)),this.result._shouldStop)return;qe>=0&&qe<=1&&(Z.lerp(ne,qe,D),D.vsub(R,de),de.normalize(),this.reportIntersection(de,D,z,k,-1))}},c.prototype[h.types.SPHERE]=c.prototype.intersectSphere;var M=new s;new s,new s;var b=new s;c.prototype.intersectConvex=function(A,R,k,Z,ne){for(var Y=M,ie=b,me=ne&&ne.faceList||null,Le=A.faces,ve=A.vertices,D=A.faceNormals,de=this._direction,he=this.from,qe=this.to,ye=he.distanceTo(qe),nt=me?me.length:Le.length,pe=this.result,L=0;!pe._shouldStop&&L<nt;L++){var E=me?me[L]:L,K=Le[E],le=D[E],ce=R,oe=k;ie.copy(ve[K[0]]),ce.vmult(ie,ie),ie.vadd(oe,ie),ie.vsub(he,ie),ce.vmult(le,Y);var Ee=de.dot(Y);if(!(Math.abs(Ee)<this.precision)){var we=Y.dot(ie)/Ee;if(!(we<0)){de.mult(we,y),y.vadd(he,y),_.copy(ve[K[0]]),ce.vmult(_,_),oe.vadd(_,_);for(var Fe=1;!pe._shouldStop&&Fe<K.length-1;Fe++){T.copy(ve[K[Fe]]),C.copy(ve[K[Fe+1]]),ce.vmult(T,T),ce.vmult(C,C),oe.vadd(T,T),oe.vadd(C,C);var ct=y.distanceTo(he);!(v(y,_,T,C)||v(y,T,_,C))||ct>ye||this.reportIntersection(Y,y,A,Z,E)}}}}},c.prototype[h.types.CONVEXPOLYHEDRON]=c.prototype.intersectConvex;var F=new s,U=new s,W=new s,q=new s,ee=new s,O=new s;new u;var N=[],te=new a;c.prototype.intersectTrimesh=function(A,R,k,Z,ne){var Y=F,ie=N,me=te,Le=b,ve=U,D=W,de=q,he=O,qe=ee;ne&&ne.faceList;var ye=A.indices;A.vertices,A.faceNormals;var nt=this.from,pe=this.to,L=this._direction;me.position.copy(k),me.quaternion.copy(R),a.vectorToLocalFrame(k,R,L,ve),a.pointToLocalFrame(k,R,nt,D),a.pointToLocalFrame(k,R,pe,de);var E=D.distanceSquared(de);A.tree.rayQuery(this,me,ie);for(var K=0,le=ie.length;!this.result._shouldStop&&K!==le;K++){var ce=ie[K];A.getNormal(ce,Y),A.getVertex(ye[ce*3],_),_.vsub(D,Le);var oe=ve.dot(Y),Ee=Y.dot(Le)/oe;if(!(Ee<0)){ve.scale(Ee,y),y.vadd(D,y),A.getVertex(ye[ce*3+1],T),A.getVertex(ye[ce*3+2],C);var we=y.distanceSquared(D);!(v(y,T,_,C)||v(y,_,T,C))||we>E||(a.vectorToWorldFrame(R,Y,qe),a.pointToWorldFrame(k,R,y,he),this.reportIntersection(qe,he,A,Z,ce))}}ie.length=0},c.prototype[h.types.TRIMESH]=c.prototype.intersectTrimesh,c.prototype.reportIntersection=function(z,A,R,k,Z){var ne=this.from,Y=this.to,ie=ne.distanceTo(A),me=this.result;if(!(this.skipBackfaces&&z.dot(this._direction)>0))switch(me.hitFaceIndex=typeof Z<"u"?Z:-1,this.mode){case c.ALL:this.hasHit=!0,me.set(ne,Y,z,A,R,k,ie),me.hasHit=!0,this.callback(me);break;case c.CLOSEST:(ie<me.distance||!me.hasHit)&&(this.hasHit=!0,me.hasHit=!0,me.set(ne,Y,z,A,R,k,ie));break;case c.ANY:this.hasHit=!0,me.hasHit=!0,me.set(ne,Y,z,A,R,k,ie),me._shouldStop=!0;break}};var J=new s,B=new s;function Q(z,A,R){R.vsub(z,J);var k=J.dot(A);A.mult(k,B),B.vadd(z,B);var Z=R.distanceTo(B);return Z}},{"../collision/AABB":3,"../collision/RaycastResult":10,"../math/Quaternion":28,"../math/Transform":29,"../math/Vec3":30,"../shapes/Box":37,"../shapes/ConvexPolyhedron":38,"../shapes/Shape":43}],10:[function(t,n,i){var s=t("../math/Vec3");n.exports=r;function r(){this.rayFromWorld=new s,this.rayToWorld=new s,this.hitNormalWorld=new s,this.hitPointWorld=new s,this.hasHit=!1,this.shape=null,this.body=null,this.hitFaceIndex=-1,this.distance=-1,this._shouldStop=!1}r.prototype.reset=function(){this.rayFromWorld.setZero(),this.rayToWorld.setZero(),this.hitNormalWorld.setZero(),this.hitPointWorld.setZero(),this.hasHit=!1,this.shape=null,this.body=null,this.hitFaceIndex=-1,this.distance=-1,this._shouldStop=!1},r.prototype.abort=function(){this._shouldStop=!0},r.prototype.set=function(a,l,h,u,c,d,f){this.rayFromWorld.copy(a),this.rayToWorld.copy(l),this.hitNormalWorld.copy(h),this.hitPointWorld.copy(u),this.shape=c,this.body=d,this.distance=f}},{"../math/Vec3":30}],11:[function(t,n,i){t("../shapes/Shape");var s=t("../collision/Broadphase");n.exports=r;function r(a){s.apply(this),this.axisList=[],this.world=null,this.axisIndex=0;var l=this.axisList;this._addBodyHandler=function(h){l.push(h.body)},this._removeBodyHandler=function(h){var u=l.indexOf(h.body);u!==-1&&l.splice(u,1)},a&&this.setWorld(a)}r.prototype=new s,r.prototype.setWorld=function(a){this.axisList.length=0;for(var l=0;l<a.bodies.length;l++)this.axisList.push(a.bodies[l]);a.removeEventListener("addBody",this._addBodyHandler),a.removeEventListener("removeBody",this._removeBodyHandler),a.addEventListener("addBody",this._addBodyHandler),a.addEventListener("removeBody",this._removeBodyHandler),this.world=a,this.dirty=!0},r.insertionSortX=function(a){for(var l=1,h=a.length;l<h;l++){for(var u=a[l],c=l-1;c>=0&&!(a[c].aabb.lowerBound.x<=u.aabb.lowerBound.x);c--)a[c+1]=a[c];a[c+1]=u}return a},r.insertionSortY=function(a){for(var l=1,h=a.length;l<h;l++){for(var u=a[l],c=l-1;c>=0&&!(a[c].aabb.lowerBound.y<=u.aabb.lowerBound.y);c--)a[c+1]=a[c];a[c+1]=u}return a},r.insertionSortZ=function(a){for(var l=1,h=a.length;l<h;l++){for(var u=a[l],c=l-1;c>=0&&!(a[c].aabb.lowerBound.z<=u.aabb.lowerBound.z);c--)a[c+1]=a[c];a[c+1]=u}return a},r.prototype.collisionPairs=function(a,l,h){var u=this.axisList,c=u.length,d=this.axisIndex,f,m;for(this.dirty&&(this.sortList(),this.dirty=!1),f=0;f!==c;f++){var g=u[f];for(m=f+1;m<c;m++){var v=u[m];if(this.needBroadphaseCollision(g,v)){if(!r.checkBounds(g,v,d))break;this.intersectionTest(g,v,l,h)}}}},r.prototype.sortList=function(){for(var a=this.axisList,l=this.axisIndex,h=a.length,u=0;u!==h;u++){var c=a[u];c.aabbNeedsUpdate&&c.computeAABB()}l===0?r.insertionSortX(a):l===1?r.insertionSortY(a):l===2&&r.insertionSortZ(a)},r.checkBounds=function(a,l,h){var u,c;h===0?(u=a.position.x,c=l.position.x):h===1?(u=a.position.y,c=l.position.y):h===2&&(u=a.position.z,c=l.position.z);var d=a.boundingRadius,f=l.boundingRadius,m=u+d,g=c-f;return g<m},r.prototype.autoDetectAxis=function(){for(var a=0,l=0,h=0,u=0,c=0,d=0,f=this.axisList,m=f.length,g=1/m,v=0;v!==m;v++){var p=f[v],x=p.position.x;a+=x,l+=x*x;var y=p.position.y;h+=y,u+=y*y;var _=p.position.z;c+=_,d+=_*_}var T=l-a*a*g,C=u-h*h*g,I=d-c*c*g;T>C?T>I?this.axisIndex=0:this.axisIndex=2:C>I?this.axisIndex=1:this.axisIndex=2},r.prototype.aabbQuery=function(a,l,h){h=h||[],this.dirty&&(this.sortList(),this.dirty=!1);var u=this.axisIndex,c="x";u===1&&(c="y"),u===2&&(c="z");var d=this.axisList;l.lowerBound[c],l.upperBound[c];for(var f=0;f<d.length;f++){var m=d[f];m.aabbNeedsUpdate&&m.computeAABB(),m.aabb.overlaps(l)&&h.push(m)}return h}},{"../collision/Broadphase":5,"../shapes/Shape":43}],12:[function(t,n,i){n.exports=h,t("./Constraint");var s=t("./PointToPointConstraint"),r=t("../equations/ConeEquation"),a=t("../equations/RotationalEquation");t("../equations/ContactEquation");var l=t("../math/Vec3");function h(u,c,d){d=d||{};var f=typeof d.maxForce<"u"?d.maxForce:1e6,m=d.pivotA?d.pivotA.clone():new l,g=d.pivotB?d.pivotB.clone():new l;this.axisA=d.axisA?d.axisA.clone():new l,this.axisB=d.axisB?d.axisB.clone():new l,s.call(this,u,m,c,g,f),this.collideConnected=!!d.collideConnected,this.angle=typeof d.angle<"u"?d.angle:0;var v=this.coneEquation=new r(u,c,d),p=this.twistEquation=new a(u,c,d);this.twistAngle=typeof d.twistAngle<"u"?d.twistAngle:0,v.maxForce=0,v.minForce=-f,p.maxForce=0,p.minForce=-f,this.equations.push(v,p)}h.prototype=new s,h.constructor=h,new l,new l,h.prototype.update=function(){var u=this.bodyA,c=this.bodyB,d=this.coneEquation,f=this.twistEquation;s.prototype.update.call(this),u.vectorToWorldFrame(this.axisA,d.axisA),c.vectorToWorldFrame(this.axisB,d.axisB),this.axisA.tangents(f.axisA,f.axisA),u.vectorToWorldFrame(f.axisA,f.axisA),this.axisB.tangents(f.axisB,f.axisB),c.vectorToWorldFrame(f.axisB,f.axisB),d.angle=this.angle,f.maxAngle=this.twistAngle}},{"../equations/ConeEquation":18,"../equations/ContactEquation":19,"../equations/RotationalEquation":22,"../math/Vec3":30,"./Constraint":13,"./PointToPointConstraint":17}],13:[function(t,n,i){n.exports=r;var s=t("../utils/Utils");function r(a,l,h){h=s.defaults(h,{collideConnected:!0,wakeUpBodies:!0}),this.equations=[],this.bodyA=a,this.bodyB=l,this.id=r.idCounter++,this.collideConnected=h.collideConnected,h.wakeUpBodies&&(a&&a.wakeUp(),l&&l.wakeUp())}r.prototype.update=function(){throw new Error("method update() not implmemented in this Constraint subclass!")},r.prototype.enable=function(){for(var a=this.equations,l=0;l<a.length;l++)a[l].enabled=!0},r.prototype.disable=function(){for(var a=this.equations,l=0;l<a.length;l++)a[l].enabled=!1},r.idCounter=0},{"../utils/Utils":53}],14:[function(t,n,i){n.exports=a;var s=t("./Constraint"),r=t("../equations/ContactEquation");function a(l,h,u,c){s.call(this,l,h),typeof u>"u"&&(u=l.position.distanceTo(h.position)),typeof c>"u"&&(c=1e6),this.distance=u;var d=this.distanceEquation=new r(l,h);this.equations.push(d),d.minForce=-c,d.maxForce=c}a.prototype=new s,a.prototype.update=function(){var l=this.bodyA,h=this.bodyB,u=this.distanceEquation,c=this.distance*.5,d=u.ni;h.position.vsub(l.position,d),d.normalize(),d.mult(c,u.ri),d.mult(-c,u.rj)}},{"../equations/ContactEquation":19,"./Constraint":13}],15:[function(t,n,i){n.exports=h,t("./Constraint");var s=t("./PointToPointConstraint"),r=t("../equations/RotationalEquation"),a=t("../equations/RotationalMotorEquation");t("../equations/ContactEquation");var l=t("../math/Vec3");function h(d,f,m){m=m||{};var g=typeof m.maxForce<"u"?m.maxForce:1e6,v=m.pivotA?m.pivotA.clone():new l,p=m.pivotB?m.pivotB.clone():new l;s.call(this,d,v,f,p,g);var x=this.axisA=m.axisA?m.axisA.clone():new l(1,0,0);x.normalize();var y=this.axisB=m.axisB?m.axisB.clone():new l(1,0,0);y.normalize();var _=this.rotationalEquation1=new r(d,f,m),T=this.rotationalEquation2=new r(d,f,m),C=this.motorEquation=new a(d,f,g);C.enabled=!1,this.equations.push(_,T,C)}h.prototype=new s,h.constructor=h,h.prototype.enableMotor=function(){this.motorEquation.enabled=!0},h.prototype.disableMotor=function(){this.motorEquation.enabled=!1},h.prototype.setMotorSpeed=function(d){this.motorEquation.targetVelocity=d},h.prototype.setMotorMaxForce=function(d){this.motorEquation.maxForce=d,this.motorEquation.minForce=-d};var u=new l,c=new l;h.prototype.update=function(){var d=this.bodyA,f=this.bodyB,m=this.motorEquation,g=this.rotationalEquation1,v=this.rotationalEquation2,p=u,x=c,y=this.axisA,_=this.axisB;s.prototype.update.call(this),d.quaternion.vmult(y,p),f.quaternion.vmult(_,x),p.tangents(g.axisA,v.axisA),g.axisB.copy(x),v.axisB.copy(x),this.motorEquation.enabled&&(d.quaternion.vmult(this.axisA,m.axisA),f.quaternion.vmult(this.axisB,m.axisB))}},{"../equations/ContactEquation":19,"../equations/RotationalEquation":22,"../equations/RotationalMotorEquation":23,"../math/Vec3":30,"./Constraint":13,"./PointToPointConstraint":17}],16:[function(t,n,i){n.exports=l,t("./Constraint");var s=t("./PointToPointConstraint"),r=t("../equations/RotationalEquation");t("../equations/RotationalMotorEquation"),t("../equations/ContactEquation");var a=t("../math/Vec3");function l(h,u,c){c=c||{};var d=typeof c.maxForce<"u"?c.maxForce:1e6,f=new a,m=new a,g=new a;h.position.vadd(u.position,g),g.scale(.5,g),u.pointToLocalFrame(g,m),h.pointToLocalFrame(g,f),s.call(this,h,f,u,m,d);var v=this.rotationalEquation1=new r(h,u,c),p=this.rotationalEquation2=new r(h,u,c),x=this.rotationalEquation3=new r(h,u,c);this.equations.push(v,p,x)}l.prototype=new s,l.constructor=l,new a,new a,l.prototype.update=function(){var h=this.bodyA,u=this.bodyB;this.motorEquation;var c=this.rotationalEquation1,d=this.rotationalEquation2,f=this.rotationalEquation3;s.prototype.update.call(this),h.vectorToWorldFrame(a.UNIT_X,c.axisA),u.vectorToWorldFrame(a.UNIT_Y,c.axisB),h.vectorToWorldFrame(a.UNIT_Y,d.axisA),u.vectorToWorldFrame(a.UNIT_Z,d.axisB),h.vectorToWorldFrame(a.UNIT_Z,f.axisA),u.vectorToWorldFrame(a.UNIT_X,f.axisB)}},{"../equations/ContactEquation":19,"../equations/RotationalEquation":22,"../equations/RotationalMotorEquation":23,"../math/Vec3":30,"./Constraint":13,"./PointToPointConstraint":17}],17:[function(t,n,i){n.exports=l;var s=t("./Constraint"),r=t("../equations/ContactEquation"),a=t("../math/Vec3");function l(h,u,c,d,f){s.call(this,h,c),f=typeof f<"u"?f:1e6,this.pivotA=u?u.clone():new a,this.pivotB=d?d.clone():new a;var m=this.equationX=new r(h,c),g=this.equationY=new r(h,c),v=this.equationZ=new r(h,c);this.equations.push(m,g,v),m.minForce=g.minForce=v.minForce=-f,m.maxForce=g.maxForce=v.maxForce=f,m.ni.set(1,0,0),g.ni.set(0,1,0),v.ni.set(0,0,1)}l.prototype=new s,l.prototype.update=function(){var h=this.bodyA,u=this.bodyB,c=this.equationX,d=this.equationY,f=this.equationZ;h.quaternion.vmult(this.pivotA,c.ri),u.quaternion.vmult(this.pivotB,c.rj),d.ri.copy(c.ri),d.rj.copy(c.rj),f.ri.copy(c.ri),f.rj.copy(c.rj)}},{"../equations/ContactEquation":19,"../math/Vec3":30,"./Constraint":13}],18:[function(t,n,i){n.exports=a;var s=t("../math/Vec3");t("../math/Mat3");var r=t("./Equation");function a(u,c,d){d=d||{};var f=typeof d.maxForce<"u"?d.maxForce:1e6;r.call(this,u,c,-f,f),this.axisA=d.axisA?d.axisA.clone():new s(1,0,0),this.axisB=d.axisB?d.axisB.clone():new s(0,1,0),this.angle=typeof d.angle<"u"?d.angle:0}a.prototype=new r,a.prototype.constructor=a;var l=new s,h=new s;a.prototype.computeB=function(u){var c=this.a,d=this.b,f=this.axisA,m=this.axisB,g=l,v=h,p=this.jacobianElementA,x=this.jacobianElementB;f.cross(m,g),m.cross(f,v),p.rotational.copy(v),x.rotational.copy(g);var y=Math.cos(this.angle)-f.dot(m),_=this.computeGW(),T=this.computeGiMf(),C=-y*c-_*d-u*T;return C}},{"../math/Mat3":27,"../math/Vec3":30,"./Equation":20}],19:[function(t,n,i){n.exports=a;var s=t("./Equation"),r=t("../math/Vec3");t("../math/Mat3");function a(v,p,x){x=typeof x<"u"?x:1e6,s.call(this,v,p,0,x),this.restitution=0,this.ri=new r,this.rj=new r,this.ni=new r}a.prototype=new s,a.prototype.constructor=a;var l=new r,h=new r,u=new r;a.prototype.computeB=function(v){var p=this.a,x=this.b,y=this.bi,_=this.bj,T=this.ri,C=this.rj,I=l,P=h,S=y.velocity,M=y.angularVelocity;y.force,y.torque;var b=_.velocity,F=_.angularVelocity;_.force,_.torque;var U=u,W=this.jacobianElementA,q=this.jacobianElementB,ee=this.ni;T.cross(ee,I),C.cross(ee,P),ee.negate(W.spatial),I.negate(W.rotational),q.spatial.copy(ee),q.rotational.copy(P),U.copy(_.position),U.vadd(C,U),U.vsub(y.position,U),U.vsub(T,U);var O=ee.dot(U),N=this.restitution+1,te=N*b.dot(ee)-N*S.dot(ee)+F.dot(P)-M.dot(I),J=this.computeGiMf(),B=-O*p-te*x-v*J;return B};var c=new r,d=new r,f=new r,m=new r,g=new r;a.prototype.getImpactVelocityAlongNormal=function(){var v=c,p=d,x=f,y=m,_=g;return this.bi.position.vadd(this.ri,x),this.bj.position.vadd(this.rj,y),this.bi.getVelocityAtWorldPoint(x,v),this.bj.getVelocityAtWorldPoint(y,p),v.vsub(p,_),this.ni.dot(_)}},{"../math/Mat3":27,"../math/Vec3":30,"./Equation":20}],20:[function(t,n,i){n.exports=a;var s=t("../math/JacobianElement"),r=t("../math/Vec3");function a(g,v,p,x){this.id=a.id++,this.minForce=typeof p>"u"?-1e6:p,this.maxForce=typeof x>"u"?1e6:x,this.bi=g,this.bj=v,this.a=0,this.b=0,this.eps=0,this.jacobianElementA=new s,this.jacobianElementB=new s,this.enabled=!0,this.setSpookParams(1e7,4,1/60)}a.prototype.constructor=a,a.id=0,a.prototype.setSpookParams=function(g,v,p){var x=v,y=g,_=p;this.a=4/(_*(1+4*x)),this.b=4*x/(1+4*x),this.eps=4/(_*_*y*(1+4*x))},a.prototype.computeB=function(g,v,p){var x=this.computeGW(),y=this.computeGq(),_=this.computeGiMf();return-y*g-x*v-_*p},a.prototype.computeGq=function(){var g=this.jacobianElementA,v=this.jacobianElementB,p=this.bi,x=this.bj,y=p.position,_=x.position;return g.spatial.dot(y)+v.spatial.dot(_)};var l=new r;a.prototype.computeGW=function(){var g=this.jacobianElementA,v=this.jacobianElementB,p=this.bi,x=this.bj,y=p.velocity,_=x.velocity,T=p.angularVelocity||l,C=x.angularVelocity||l;return g.multiplyVectors(y,T)+v.multiplyVectors(_,C)},a.prototype.computeGWlambda=function(){var g=this.jacobianElementA,v=this.jacobianElementB,p=this.bi,x=this.bj,y=p.vlambda,_=x.vlambda,T=p.wlambda||l,C=x.wlambda||l;return g.multiplyVectors(y,T)+v.multiplyVectors(_,C)};var h=new r,u=new r,c=new r,d=new r;a.prototype.computeGiMf=function(){var g=this.jacobianElementA,v=this.jacobianElementB,p=this.bi,x=this.bj,y=p.force,_=p.torque,T=x.force,C=x.torque,I=p.invMassSolve,P=x.invMassSolve;return p.invInertiaWorldSolve?p.invInertiaWorldSolve.vmult(_,c):c.set(0,0,0),x.invInertiaWorldSolve?x.invInertiaWorldSolve.vmult(C,d):d.set(0,0,0),y.mult(I,h),T.mult(P,u),g.multiplyVectors(h,c)+v.multiplyVectors(u,d)};var f=new r;a.prototype.computeGiMGt=function(){var g=this.jacobianElementA,v=this.jacobianElementB,p=this.bi,x=this.bj,y=p.invMassSolve,_=x.invMassSolve,T=p.invInertiaWorldSolve,C=x.invInertiaWorldSolve,I=y+_;return T&&(T.vmult(g.rotational,f),I+=f.dot(g.rotational)),C&&(C.vmult(v.rotational,f),I+=f.dot(v.rotational)),I};var m=new r;new r,new r,new r,new r,new r,a.prototype.addToWlambda=function(g){var v=this.jacobianElementA,p=this.jacobianElementB,x=this.bi,y=this.bj,_=m;v.spatial.mult(x.invMassSolve*g,_),x.vlambda.vadd(_,x.vlambda),p.spatial.mult(y.invMassSolve*g,_),y.vlambda.vadd(_,y.vlambda),x.invInertiaWorldSolve&&(x.invInertiaWorldSolve.vmult(v.rotational,_),_.mult(g,_),x.wlambda.vadd(_,x.wlambda)),y.invInertiaWorldSolve&&(y.invInertiaWorldSolve.vmult(p.rotational,_),_.mult(g,_),y.wlambda.vadd(_,y.wlambda))},a.prototype.computeC=function(){return this.computeGiMGt()+this.eps}},{"../math/JacobianElement":26,"../math/Vec3":30}],21:[function(t,n,i){n.exports=a;var s=t("./Equation"),r=t("../math/Vec3");t("../math/Mat3");function a(u,c,d){s.call(this,u,c,-d,d),this.ri=new r,this.rj=new r,this.t=new r}a.prototype=new s,a.prototype.constructor=a;var l=new r,h=new r;a.prototype.computeB=function(u){this.a;var c=this.b;this.bi,this.bj;var d=this.ri,f=this.rj,m=l,g=h,v=this.t;d.cross(v,m),f.cross(v,g);var p=this.jacobianElementA,x=this.jacobianElementB;v.negate(p.spatial),m.negate(p.rotational),x.spatial.copy(v),x.rotational.copy(g);var y=this.computeGW(),_=this.computeGiMf(),T=-y*c-u*_;return T}},{"../math/Mat3":27,"../math/Vec3":30,"./Equation":20}],22:[function(t,n,i){n.exports=a;var s=t("../math/Vec3");t("../math/Mat3");var r=t("./Equation");function a(u,c,d){d=d||{};var f=typeof d.maxForce<"u"?d.maxForce:1e6;r.call(this,u,c,-f,f),this.axisA=d.axisA?d.axisA.clone():new s(1,0,0),this.axisB=d.axisB?d.axisB.clone():new s(0,1,0),this.maxAngle=Math.PI/2}a.prototype=new r,a.prototype.constructor=a;var l=new s,h=new s;a.prototype.computeB=function(u){var c=this.a,d=this.b,f=this.axisA,m=this.axisB,g=l,v=h,p=this.jacobianElementA,x=this.jacobianElementB;f.cross(m,g),m.cross(f,v),p.rotational.copy(v),x.rotational.copy(g);var y=Math.cos(this.maxAngle)-f.dot(m),_=this.computeGW(),T=this.computeGiMf(),C=-y*c-_*d-u*T;return C}},{"../math/Mat3":27,"../math/Vec3":30,"./Equation":20}],23:[function(t,n,i){n.exports=a;var s=t("../math/Vec3");t("../math/Mat3");var r=t("./Equation");function a(l,h,u){u=typeof u<"u"?u:1e6,r.call(this,l,h,-u,u),this.axisA=new s,this.axisB=new s,this.targetVelocity=0}a.prototype=new r,a.prototype.constructor=a,a.prototype.computeB=function(l){this.a;var h=this.b;this.bi,this.bj;var u=this.axisA,c=this.axisB,d=this.jacobianElementA,f=this.jacobianElementB;d.rotational.copy(u),c.negate(f.rotational);var m=this.computeGW()-this.targetVelocity,g=this.computeGiMf(),v=-m*h-l*g;return v}},{"../math/Mat3":27,"../math/Vec3":30,"./Equation":20}],24:[function(t,n,i){var s=t("../utils/Utils");n.exports=r;function r(a,l,h){h=s.defaults(h,{friction:.3,restitution:.3,contactEquationStiffness:1e7,contactEquationRelaxation:3,frictionEquationStiffness:1e7,frictionEquationRelaxation:3}),this.id=r.idCounter++,this.materials=[a,l],this.friction=h.friction,this.restitution=h.restitution,this.contactEquationStiffness=h.contactEquationStiffness,this.contactEquationRelaxation=h.contactEquationRelaxation,this.frictionEquationStiffness=h.frictionEquationStiffness,this.frictionEquationRelaxation=h.frictionEquationRelaxation}r.idCounter=0},{"../utils/Utils":53}],25:[function(t,n,i){n.exports=s;function s(r){var a="";r=r||{},typeof r=="string"?(a=r,r={}):typeof r=="object"&&(a=""),this.name=a,this.id=s.idCounter++,this.friction=typeof r.friction<"u"?r.friction:-1,this.restitution=typeof r.restitution<"u"?r.restitution:-1}s.idCounter=0},{}],26:[function(t,n,i){n.exports=r;var s=t("./Vec3");function r(){this.spatial=new s,this.rotational=new s}r.prototype.multiplyElement=function(a){return a.spatial.dot(this.spatial)+a.rotational.dot(this.rotational)},r.prototype.multiplyVectors=function(a,l){return a.dot(this.spatial)+l.dot(this.rotational)}},{"./Vec3":30}],27:[function(t,n,i){n.exports=r;var s=t("./Vec3");function r(a){a?this.elements=a:this.elements=[0,0,0,0,0,0,0,0,0]}r.prototype.identity=function(){var a=this.elements;a[0]=1,a[1]=0,a[2]=0,a[3]=0,a[4]=1,a[5]=0,a[6]=0,a[7]=0,a[8]=1},r.prototype.setZero=function(){var a=this.elements;a[0]=0,a[1]=0,a[2]=0,a[3]=0,a[4]=0,a[5]=0,a[6]=0,a[7]=0,a[8]=0},r.prototype.setTrace=function(a){var l=this.elements;l[0]=a.x,l[4]=a.y,l[8]=a.z},r.prototype.getTrace=function(l){var l=l||new s,h=this.elements;l.x=h[0],l.y=h[4],l.z=h[8]},r.prototype.vmult=function(a,l){l=l||new s;var h=this.elements,u=a.x,c=a.y,d=a.z;return l.x=h[0]*u+h[1]*c+h[2]*d,l.y=h[3]*u+h[4]*c+h[5]*d,l.z=h[6]*u+h[7]*c+h[8]*d,l},r.prototype.smult=function(a){for(var l=0;l<this.elements.length;l++)this.elements[l]*=a},r.prototype.mmult=function(a,l){for(var h=l||new r,u=0;u<3;u++)for(var c=0;c<3;c++){for(var d=0,f=0;f<3;f++)d+=a.elements[u+f*3]*this.elements[f+c*3];h.elements[u+c*3]=d}return h},r.prototype.scale=function(a,l){l=l||new r;for(var h=this.elements,u=l.elements,c=0;c!==3;c++)u[3*c+0]=a.x*h[3*c+0],u[3*c+1]=a.y*h[3*c+1],u[3*c+2]=a.z*h[3*c+2];return l},r.prototype.solve=function(a,l){l=l||new s;for(var h=3,u=4,c=[],d=0;d<h*u;d++)c.push(0);var d,f;for(d=0;d<3;d++)for(f=0;f<3;f++)c[d+u*f]=this.elements[d+3*f];c[3]=a.x,c[7]=a.y,c[11]=a.z;var m=3,g=m,v,p=4,x;do{if(d=g-m,c[d+u*d]===0){for(f=d+1;f<g;f++)if(c[d+u*f]!==0){v=p;do x=p-v,c[x+u*d]+=c[x+u*f];while(--v);break}}if(c[d+u*d]!==0)for(f=d+1;f<g;f++){var y=c[d+u*f]/c[d+u*d];v=p;do x=p-v,c[x+u*f]=x<=d?0:c[x+u*f]-c[x+u*d]*y;while(--v)}}while(--m);if(l.z=c[2*u+3]/c[2*u+2],l.y=(c[1*u+3]-c[1*u+2]*l.z)/c[1*u+1],l.x=(c[0*u+3]-c[0*u+2]*l.z-c[0*u+1]*l.y)/c[0*u+0],isNaN(l.x)||isNaN(l.y)||isNaN(l.z)||l.x===1/0||l.y===1/0||l.z===1/0)throw"Could not solve equation! Got x=["+l.toString()+"], b=["+a.toString()+"], A=["+this.toString()+"]";return l},r.prototype.e=function(a,l,h){if(h===void 0)return this.elements[l+3*a];this.elements[l+3*a]=h},r.prototype.copy=function(a){for(var l=0;l<a.elements.length;l++)this.elements[l]=a.elements[l];return this},r.prototype.toString=function(){for(var a="",l=",",h=0;h<9;h++)a+=this.elements[h]+l;return a},r.prototype.reverse=function(a){a=a||new r;for(var l=3,h=6,u=[],c=0;c<l*h;c++)u.push(0);var c,d;for(c=0;c<3;c++)for(d=0;d<3;d++)u[c+h*d]=this.elements[c+3*d];u[3]=1,u[9]=0,u[15]=0,u[4]=0,u[10]=1,u[16]=0,u[5]=0,u[11]=0,u[17]=1;var f=3,m=f,g,v=h,p;do{if(c=m-f,u[c+h*c]===0){for(d=c+1;d<m;d++)if(u[c+h*d]!==0){g=v;do p=v-g,u[p+h*c]+=u[p+h*d];while(--g);break}}if(u[c+h*c]!==0)for(d=c+1;d<m;d++){var x=u[c+h*d]/u[c+h*c];g=v;do p=v-g,u[p+h*d]=p<=c?0:u[p+h*d]-u[p+h*c]*x;while(--g)}}while(--f);c=2;do{d=c-1;do{var x=u[c+h*d]/u[c+h*c];g=h;do p=h-g,u[p+h*d]=u[p+h*d]-u[p+h*c]*x;while(--g)}while(d--)}while(--c);c=2;do{var x=1/u[c+h*c];g=h;do p=h-g,u[p+h*c]=u[p+h*c]*x;while(--g)}while(c--);c=2;do{d=2;do{if(p=u[l+d+h*c],isNaN(p)||p===1/0)throw"Could not reverse! A=["+this.toString()+"]";a.e(c,d,p)}while(d--)}while(c--);return a},r.prototype.setRotationFromQuaternion=function(a){var l=a.x,h=a.y,u=a.z,c=a.w,d=l+l,f=h+h,m=u+u,g=l*d,v=l*f,p=l*m,x=h*f,y=h*m,_=u*m,T=c*d,C=c*f,I=c*m,P=this.elements;return P[0]=1-(x+_),P[1]=v-I,P[2]=p+C,P[3]=v+I,P[4]=1-(g+_),P[5]=y-T,P[6]=p-C,P[7]=y+T,P[8]=1-(g+x),this},r.prototype.transpose=function(a){a=a||new r;for(var l=a.elements,h=this.elements,u=0;u!==3;u++)for(var c=0;c!==3;c++)l[3*u+c]=h[3*c+u];return a}},{"./Vec3":30}],28:[function(t,n,i){n.exports=r;var s=t("./Vec3");function r(d,f,m,g){this.x=d!==void 0?d:0,this.y=f!==void 0?f:0,this.z=m!==void 0?m:0,this.w=g!==void 0?g:1}r.prototype.set=function(d,f,m,g){this.x=d,this.y=f,this.z=m,this.w=g},r.prototype.toString=function(){return this.x+","+this.y+","+this.z+","+this.w},r.prototype.toArray=function(){return[this.x,this.y,this.z,this.w]},r.prototype.setFromAxisAngle=function(d,f){var m=Math.sin(f*.5);this.x=d.x*m,this.y=d.y*m,this.z=d.z*m,this.w=Math.cos(f*.5)},r.prototype.toAxisAngle=function(d){d=d||new s,this.normalize();var f=2*Math.acos(this.w),m=Math.sqrt(1-this.w*this.w);return m<.001?(d.x=this.x,d.y=this.y,d.z=this.z):(d.x=this.x/m,d.y=this.y/m,d.z=this.z/m),[d,f]};var a=new s,l=new s;r.prototype.setFromVectors=function(d,f){if(d.isAntiparallelTo(f)){var m=a,g=l;d.tangents(m,g),this.setFromAxisAngle(m,Math.PI)}else{var v=d.cross(f);this.x=v.x,this.y=v.y,this.z=v.z,this.w=Math.sqrt(Math.pow(d.norm(),2)*Math.pow(f.norm(),2))+d.dot(f),this.normalize()}};var h=new s,u=new s,c=new s;r.prototype.mult=function(d,f){f=f||new r;var m=this.w,g=h,v=u,p=c;return g.set(this.x,this.y,this.z),v.set(d.x,d.y,d.z),f.w=m*d.w-g.dot(v),g.cross(v,p),f.x=m*v.x+d.w*g.x+p.x,f.y=m*v.y+d.w*g.y+p.y,f.z=m*v.z+d.w*g.z+p.z,f},r.prototype.inverse=function(d){var f=this.x,m=this.y,g=this.z,v=this.w;d=d||new r,this.conjugate(d);var p=1/(f*f+m*m+g*g+v*v);return d.x*=p,d.y*=p,d.z*=p,d.w*=p,d},r.prototype.conjugate=function(d){return d=d||new r,d.x=-this.x,d.y=-this.y,d.z=-this.z,d.w=this.w,d},r.prototype.normalize=function(){var d=Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w);d===0?(this.x=0,this.y=0,this.z=0,this.w=0):(d=1/d,this.x*=d,this.y*=d,this.z*=d,this.w*=d)},r.prototype.normalizeFast=function(){var d=(3-(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w))/2;d===0?(this.x=0,this.y=0,this.z=0,this.w=0):(this.x*=d,this.y*=d,this.z*=d,this.w*=d)},r.prototype.vmult=function(d,f){f=f||new s;var m=d.x,g=d.y,v=d.z,p=this.x,x=this.y,y=this.z,_=this.w,T=_*m+x*v-y*g,C=_*g+y*m-p*v,I=_*v+p*g-x*m,P=-p*m-x*g-y*v;return f.x=T*_+P*-p+C*-y-I*-x,f.y=C*_+P*-x+I*-p-T*-y,f.z=I*_+P*-y+T*-x-C*-p,f},r.prototype.copy=function(d){return this.x=d.x,this.y=d.y,this.z=d.z,this.w=d.w,this},r.prototype.toEuler=function(d,f){f=f||"YZX";var m,g,v,p=this.x,x=this.y,y=this.z,_=this.w;switch(f){case"YZX":var T=p*x+y*_;if(T>.499&&(m=2*Math.atan2(p,_),g=Math.PI/2,v=0),T<-.499&&(m=-2*Math.atan2(p,_),g=-Math.PI/2,v=0),isNaN(m)){var C=p*p,I=x*x,P=y*y;m=Math.atan2(2*x*_-2*p*y,1-2*I-2*P),g=Math.asin(2*T),v=Math.atan2(2*p*_-2*x*y,1-2*C-2*P)}break;default:throw new Error("Euler order "+f+" not supported yet.")}d.y=m,d.z=g,d.x=v},r.prototype.setFromEuler=function(d,f,m,g){g=g||"XYZ";var v=Math.cos(d/2),p=Math.cos(f/2),x=Math.cos(m/2),y=Math.sin(d/2),_=Math.sin(f/2),T=Math.sin(m/2);return g==="XYZ"?(this.x=y*p*x+v*_*T,this.y=v*_*x-y*p*T,this.z=v*p*T+y*_*x,this.w=v*p*x-y*_*T):g==="YXZ"?(this.x=y*p*x+v*_*T,this.y=v*_*x-y*p*T,this.z=v*p*T-y*_*x,this.w=v*p*x+y*_*T):g==="ZXY"?(this.x=y*p*x-v*_*T,this.y=v*_*x+y*p*T,this.z=v*p*T+y*_*x,this.w=v*p*x-y*_*T):g==="ZYX"?(this.x=y*p*x-v*_*T,this.y=v*_*x+y*p*T,this.z=v*p*T-y*_*x,this.w=v*p*x+y*_*T):g==="YZX"?(this.x=y*p*x+v*_*T,this.y=v*_*x+y*p*T,this.z=v*p*T-y*_*x,this.w=v*p*x-y*_*T):g==="XZY"&&(this.x=y*p*x-v*_*T,this.y=v*_*x-y*p*T,this.z=v*p*T+y*_*x,this.w=v*p*x+y*_*T),this},r.prototype.clone=function(){return new r(this.x,this.y,this.z,this.w)}},{"./Vec3":30}],29:[function(t,n,i){var s=t("./Vec3"),r=t("./Quaternion");n.exports=a;function a(h){h=h||{},this.position=new s,h.position&&this.position.copy(h.position),this.quaternion=new r,h.quaternion&&this.quaternion.copy(h.quaternion)}var l=new r;a.pointToLocalFrame=function(h,u,c,f){var f=f||new s;return c.vsub(h,f),u.conjugate(l),l.vmult(f,f),f},a.prototype.pointToLocal=function(h,u){return a.pointToLocalFrame(this.position,this.quaternion,h,u)},a.pointToWorldFrame=function(h,u,c,f){var f=f||new s;return u.vmult(c,f),f.vadd(h,f),f},a.prototype.pointToWorld=function(h,u){return a.pointToWorldFrame(this.position,this.quaternion,h,u)},a.prototype.vectorToWorldFrame=function(h,c){var c=c||new s;return this.quaternion.vmult(h,c),c},a.vectorToWorldFrame=function(h,u,c){return h.vmult(u,c),c},a.vectorToLocalFrame=function(h,u,c,f){var f=f||new s;return u.w*=-1,u.vmult(c,f),u.w*=-1,f}},{"./Quaternion":28,"./Vec3":30}],30:[function(t,n,i){n.exports=r;var s=t("./Mat3");function r(u,c,d){this.x=u||0,this.y=c||0,this.z=d||0}r.ZERO=new r(0,0,0),r.UNIT_X=new r(1,0,0),r.UNIT_Y=new r(0,1,0),r.UNIT_Z=new r(0,0,1),r.prototype.cross=function(u,c){var d=u.x,f=u.y,m=u.z,g=this.x,v=this.y,p=this.z;return c=c||new r,c.x=v*m-p*f,c.y=p*d-g*m,c.z=g*f-v*d,c},r.prototype.set=function(u,c,d){return this.x=u,this.y=c,this.z=d,this},r.prototype.setZero=function(){this.x=this.y=this.z=0},r.prototype.vadd=function(u,c){if(c)c.x=u.x+this.x,c.y=u.y+this.y,c.z=u.z+this.z;else return new r(this.x+u.x,this.y+u.y,this.z+u.z)},r.prototype.vsub=function(u,c){if(c)c.x=this.x-u.x,c.y=this.y-u.y,c.z=this.z-u.z;else return new r(this.x-u.x,this.y-u.y,this.z-u.z)},r.prototype.crossmat=function(){return new s([0,-this.z,this.y,this.z,0,-this.x,-this.y,this.x,0])},r.prototype.normalize=function(){var u=this.x,c=this.y,d=this.z,f=Math.sqrt(u*u+c*c+d*d);if(f>0){var m=1/f;this.x*=m,this.y*=m,this.z*=m}else this.x=0,this.y=0,this.z=0;return f},r.prototype.unit=function(u){u=u||new r;var c=this.x,d=this.y,f=this.z,m=Math.sqrt(c*c+d*d+f*f);return m>0?(m=1/m,u.x=c*m,u.y=d*m,u.z=f*m):(u.x=1,u.y=0,u.z=0),u},r.prototype.norm=function(){var u=this.x,c=this.y,d=this.z;return Math.sqrt(u*u+c*c+d*d)},r.prototype.length=r.prototype.norm,r.prototype.norm2=function(){return this.dot(this)},r.prototype.lengthSquared=r.prototype.norm2,r.prototype.distanceTo=function(u){var c=this.x,d=this.y,f=this.z,m=u.x,g=u.y,v=u.z;return Math.sqrt((m-c)*(m-c)+(g-d)*(g-d)+(v-f)*(v-f))},r.prototype.distanceSquared=function(u){var c=this.x,d=this.y,f=this.z,m=u.x,g=u.y,v=u.z;return(m-c)*(m-c)+(g-d)*(g-d)+(v-f)*(v-f)},r.prototype.mult=function(u,c){c=c||new r;var d=this.x,f=this.y,m=this.z;return c.x=u*d,c.y=u*f,c.z=u*m,c},r.prototype.scale=r.prototype.mult,r.prototype.dot=function(u){return this.x*u.x+this.y*u.y+this.z*u.z},r.prototype.isZero=function(){return this.x===0&&this.y===0&&this.z===0},r.prototype.negate=function(u){return u=u||new r,u.x=-this.x,u.y=-this.y,u.z=-this.z,u};var a=new r,l=new r;r.prototype.tangents=function(u,c){var d=this.norm();if(d>0){var f=a,m=1/d;f.set(this.x*m,this.y*m,this.z*m);var g=l;Math.abs(f.x)<.9?(g.set(1,0,0),f.cross(g,u)):(g.set(0,1,0),f.cross(g,u)),f.cross(u,c)}else u.set(1,0,0),c.set(0,1,0)},r.prototype.toString=function(){return this.x+","+this.y+","+this.z},r.prototype.toArray=function(){return[this.x,this.y,this.z]},r.prototype.copy=function(u){return this.x=u.x,this.y=u.y,this.z=u.z,this},r.prototype.lerp=function(u,c,d){var f=this.x,m=this.y,g=this.z;d.x=f+(u.x-f)*c,d.y=m+(u.y-m)*c,d.z=g+(u.z-g)*c},r.prototype.almostEquals=function(u,c){return c===void 0&&(c=1e-6),!(Math.abs(this.x-u.x)>c||Math.abs(this.y-u.y)>c||Math.abs(this.z-u.z)>c)},r.prototype.almostZero=function(u){return u===void 0&&(u=1e-6),!(Math.abs(this.x)>u||Math.abs(this.y)>u||Math.abs(this.z)>u)};var h=new r;r.prototype.isAntiparallelTo=function(u,c){return this.negate(h),h.almostEquals(u,c)},r.prototype.clone=function(){return new r(this.x,this.y,this.z)}},{"./Mat3":27}],31:[function(t,n,i){n.exports=c;var s=t("../utils/EventTarget");t("../shapes/Shape");var r=t("../math/Vec3"),a=t("../math/Mat3"),l=t("../math/Quaternion");t("../material/Material");var h=t("../collision/AABB"),u=t("../shapes/Box");function c(b){b=b||{},s.apply(this),this.id=c.idCounter++,this.world=null,this.preStep=null,this.postStep=null,this.vlambda=new r,this.collisionFilterGroup=typeof b.collisionFilterGroup=="number"?b.collisionFilterGroup:1,this.collisionFilterMask=typeof b.collisionFilterMask=="number"?b.collisionFilterMask:1,this.collisionResponse=!0,this.position=new r,b.position&&this.position.copy(b.position),this.previousPosition=new r,this.initPosition=new r,this.velocity=new r,b.velocity&&this.velocity.copy(b.velocity),this.initVelocity=new r,this.force=new r;var F=typeof b.mass=="number"?b.mass:0;this.mass=F,this.invMass=F>0?1/F:0,this.material=b.material||null,this.linearDamping=typeof b.linearDamping=="number"?b.linearDamping:.01,this.type=F<=0?c.STATIC:c.DYNAMIC,typeof b.type==typeof c.STATIC&&(this.type=b.type),this.allowSleep=typeof b.allowSleep<"u"?b.allowSleep:!0,this.sleepState=0,this.sleepSpeedLimit=typeof b.sleepSpeedLimit<"u"?b.sleepSpeedLimit:.1,this.sleepTimeLimit=typeof b.sleepTimeLimit<"u"?b.sleepTimeLimit:1,this.timeLastSleepy=0,this._wakeUpAfterNarrowphase=!1,this.torque=new r,this.quaternion=new l,b.quaternion&&this.quaternion.copy(b.quaternion),this.initQuaternion=new l,this.angularVelocity=new r,b.angularVelocity&&this.angularVelocity.copy(b.angularVelocity),this.initAngularVelocity=new r,this.interpolatedPosition=new r,this.interpolatedQuaternion=new l,this.shapes=[],this.shapeOffsets=[],this.shapeOrientations=[],this.inertia=new r,this.invInertia=new r,this.invInertiaWorld=new a,this.invMassSolve=0,this.invInertiaSolve=new r,this.invInertiaWorldSolve=new a,this.fixedRotation=typeof b.fixedRotation<"u"?b.fixedRotation:!1,this.angularDamping=typeof b.angularDamping<"u"?b.angularDamping:.01,this.aabb=new h,this.aabbNeedsUpdate=!0,this.wlambda=new r,b.shape&&this.addShape(b.shape),this.updateMassProperties()}c.prototype=new s,c.prototype.constructor=c,c.DYNAMIC=1,c.STATIC=2,c.KINEMATIC=4,c.AWAKE=0,c.SLEEPY=1,c.SLEEPING=2,c.idCounter=0,c.prototype.wakeUp=function(){var b=this.sleepState;this.sleepState=0,b===c.SLEEPING&&this.dispatchEvent({type:"wakeup"})},c.prototype.sleep=function(){this.sleepState=c.SLEEPING,this.velocity.set(0,0,0),this.angularVelocity.set(0,0,0)},c.sleepyEvent={type:"sleepy"},c.sleepEvent={type:"sleep"},c.prototype.sleepTick=function(b){if(this.allowSleep){var F=this.sleepState,U=this.velocity.norm2()+this.angularVelocity.norm2(),W=Math.pow(this.sleepSpeedLimit,2);F===c.AWAKE&&U<W?(this.sleepState=c.SLEEPY,this.timeLastSleepy=b,this.dispatchEvent(c.sleepyEvent)):F===c.SLEEPY&&U>W?this.wakeUp():F===c.SLEEPY&&b-this.timeLastSleepy>this.sleepTimeLimit&&(this.sleep(),this.dispatchEvent(c.sleepEvent))}},c.prototype.updateSolveMassProperties=function(){this.sleepState===c.SLEEPING||this.type===c.KINEMATIC?(this.invMassSolve=0,this.invInertiaSolve.setZero(),this.invInertiaWorldSolve.setZero()):(this.invMassSolve=this.invMass,this.invInertiaSolve.copy(this.invInertia),this.invInertiaWorldSolve.copy(this.invInertiaWorld))},c.prototype.pointToLocalFrame=function(b,U){var U=U||new r;return b.vsub(this.position,U),this.quaternion.conjugate().vmult(U,U),U},c.prototype.vectorToLocalFrame=function(b,U){var U=U||new r;return this.quaternion.conjugate().vmult(b,U),U},c.prototype.pointToWorldFrame=function(b,U){var U=U||new r;return this.quaternion.vmult(b,U),U.vadd(this.position,U),U},c.prototype.vectorToWorldFrame=function(b,U){var U=U||new r;return this.quaternion.vmult(b,U),U};var d=new r,f=new l;c.prototype.addShape=function(b,F,U){var W=new r,q=new l;return F&&W.copy(F),U&&q.copy(U),this.shapes.push(b),this.shapeOffsets.push(W),this.shapeOrientations.push(q),this.updateMassProperties(),this.updateBoundingRadius(),this.aabbNeedsUpdate=!0,this},c.prototype.updateBoundingRadius=function(){for(var b=this.shapes,F=this.shapeOffsets,U=b.length,W=0,q=0;q!==U;q++){var ee=b[q];ee.updateBoundingSphereRadius();var O=F[q].norm(),N=ee.boundingSphereRadius;O+N>W&&(W=O+N)}this.boundingRadius=W};var m=new h;c.prototype.computeAABB=function(){for(var b=this.shapes,F=this.shapeOffsets,U=this.shapeOrientations,W=b.length,q=d,ee=f,O=this.quaternion,N=this.aabb,te=m,J=0;J!==W;J++){var B=b[J];U[J].mult(O,ee),ee.vmult(F[J],q),q.vadd(this.position,q),B.calculateWorldAABB(q,ee,te.lowerBound,te.upperBound),J===0?N.copy(te):N.extend(te)}this.aabbNeedsUpdate=!1};var g=new a,v=new a;new a,c.prototype.updateInertiaWorld=function(b){var F=this.invInertia;if(!(F.x===F.y&&F.y===F.z&&!b)){var U=g,W=v;U.setRotationFromQuaternion(this.quaternion),U.transpose(W),U.scale(F,U),U.mmult(W,this.invInertiaWorld)}};var p=new r,x=new r;c.prototype.applyForce=function(b,F){if(this.type===c.DYNAMIC){var U=p;F.vsub(this.position,U);var W=x;U.cross(b,W),this.force.vadd(b,this.force),this.torque.vadd(W,this.torque)}};var y=new r,_=new r;c.prototype.applyLocalForce=function(b,F){if(this.type===c.DYNAMIC){var U=y,W=_;this.vectorToWorldFrame(b,U),this.pointToWorldFrame(F,W),this.applyForce(U,W)}};var T=new r,C=new r,I=new r;c.prototype.applyImpulse=function(b,F){if(this.type===c.DYNAMIC){var U=T;F.vsub(this.position,U);var W=C;W.copy(b),W.mult(this.invMass,W),this.velocity.vadd(W,this.velocity);var q=I;U.cross(b,q),this.invInertiaWorld.vmult(q,q),this.angularVelocity.vadd(q,this.angularVelocity)}};var P=new r,S=new r;c.prototype.applyLocalImpulse=function(b,F){if(this.type===c.DYNAMIC){var U=P,W=S;this.vectorToWorldFrame(b,U),this.pointToWorldFrame(F,W),this.applyImpulse(U,W)}};var M=new r;c.prototype.updateMassProperties=function(){var b=M;this.invMass=this.mass>0?1/this.mass:0;var F=this.inertia,U=this.fixedRotation;this.computeAABB(),b.set((this.aabb.upperBound.x-this.aabb.lowerBound.x)/2,(this.aabb.upperBound.y-this.aabb.lowerBound.y)/2,(this.aabb.upperBound.z-this.aabb.lowerBound.z)/2),u.calculateInertia(b,this.mass,F),this.invInertia.set(F.x>0&&!U?1/F.x:0,F.y>0&&!U?1/F.y:0,F.z>0&&!U?1/F.z:0),this.updateInertiaWorld(!0)},c.prototype.getVelocityAtWorldPoint=function(b,F){var U=new r;return b.vsub(this.position,U),this.angularVelocity.cross(U,F),this.velocity.vadd(F,F),F}},{"../collision/AABB":3,"../material/Material":25,"../math/Mat3":27,"../math/Quaternion":28,"../math/Vec3":30,"../shapes/Box":37,"../shapes/Shape":43,"../utils/EventTarget":49}],32:[function(t,n,i){t("./Body");var s=t("../math/Vec3"),r=t("../math/Quaternion");t("../collision/RaycastResult");var a=t("../collision/Ray"),l=t("../objects/WheelInfo");n.exports=h;function h(O){this.chassisBody=O.chassisBody,this.wheelInfos=[],this.sliding=!1,this.world=null,this.indexRightAxis=typeof O.indexRightAxis<"u"?O.indexRightAxis:1,this.indexForwardAxis=typeof O.indexForwardAxis<"u"?O.indexForwardAxis:0,this.indexUpAxis=typeof O.indexUpAxis<"u"?O.indexUpAxis:2}new s,new s,new s;var u=new s,c=new s,d=new s;new a,h.prototype.addWheel=function(O){O=O||{};var N=new l(O),te=this.wheelInfos.length;return this.wheelInfos.push(N),te},h.prototype.setSteeringValue=function(O,N){var te=this.wheelInfos[N];te.steering=O},new s,h.prototype.applyEngineForce=function(O,N){this.wheelInfos[N].engineForce=O},h.prototype.setBrake=function(O,N){this.wheelInfos[N].brake=O},h.prototype.addToWorld=function(O){this.constraints,O.add(this.chassisBody);var N=this;this.preStepCallback=function(){N.updateVehicle(O.dt)},O.addEventListener("preStep",this.preStepCallback),this.world=O},h.prototype.getVehicleAxisWorld=function(O,N){N.set(O===0?1:0,O===1?1:0,O===2?1:0),this.chassisBody.vectorToWorldFrame(N,N)},h.prototype.updateVehicle=function(O){for(var N=this.wheelInfos,te=N.length,J=this.chassisBody,B=0;B<te;B++)this.updateWheelTransform(B);this.currentVehicleSpeedKmHour=3.6*J.velocity.norm();var Q=new s;this.getVehicleAxisWorld(this.indexForwardAxis,Q),Q.dot(J.velocity)<0&&(this.currentVehicleSpeedKmHour*=-1);for(var B=0;B<te;B++)this.castRay(N[B]);this.updateSuspension(O);for(var z=new s,A=new s,B=0;B<te;B++){var R=N[B],k=R.suspensionForce;k>R.maxSuspensionForce&&(k=R.maxSuspensionForce),R.raycastResult.hitNormalWorld.scale(k*O,z),R.raycastResult.hitPointWorld.vsub(J.position,A),J.applyImpulse(z,R.raycastResult.hitPointWorld)}this.updateFriction(O);var Z=new s,ne=new s,Y=new s;for(B=0;B<te;B++){var R=N[B];J.getVelocityAtWorldPoint(R.chassisConnectionPointWorld,Y);var ie=1;switch(this.indexUpAxis){case 1:ie=-1;break}if(R.isInContact){this.getVehicleAxisWorld(this.indexForwardAxis,ne);var me=ne.dot(R.raycastResult.hitNormalWorld);R.raycastResult.hitNormalWorld.scale(me,Z),ne.vsub(Z,ne);var Le=ne.dot(Y);R.deltaRotation=ie*Le*O/R.radius}(R.sliding||!R.isInContact)&&R.engineForce!==0&&R.useCustomSlidingRotationalSpeed&&(R.deltaRotation=(R.engineForce>0?1:-1)*R.customSlidingRotationalSpeed*O),Math.abs(R.brake)>Math.abs(R.engineForce)&&(R.deltaRotation=0),R.rotation+=R.deltaRotation,R.deltaRotation*=.99}},h.prototype.updateSuspension=function(O){for(var N=this.chassisBody,te=N.mass,J=this.wheelInfos,B=J.length,Q=0;Q<B;Q++){var z=J[Q];if(z.isInContact){var A,R=z.suspensionRestLength,k=z.suspensionLength,Z=R-k;A=z.suspensionStiffness*Z*z.clippedInvContactDotSuspension;var ne=z.suspensionRelativeVelocity,Y;ne<0?Y=z.dampingCompression:Y=z.dampingRelaxation,A-=Y*ne,z.suspensionForce=A*te,z.suspensionForce<0&&(z.suspensionForce=0)}else z.suspensionForce=0}},h.prototype.removeFromWorld=function(O){this.constraints,O.remove(this.chassisBody),O.removeEventListener("preStep",this.preStepCallback),this.world=null};var f=new s,m=new s;h.prototype.castRay=function(O){var N=f,te=m;this.updateWheelTransformWorld(O);var J=this.chassisBody,B=-1,Q=O.suspensionRestLength+O.radius;O.directionWorld.scale(Q,N);var z=O.chassisConnectionPointWorld;z.vadd(N,te);var A=O.raycastResult;A.reset();var R=J.collisionResponse;J.collisionResponse=!1,this.world.rayTest(z,te,A),J.collisionResponse=R;var k=A.body;if(O.raycastResult.groundObject=0,k){B=A.distance,O.raycastResult.hitNormalWorld=A.hitNormalWorld,O.isInContact=!0;var Z=A.distance;O.suspensionLength=Z-O.radius;var ne=O.suspensionRestLength-O.maxSuspensionTravel,Y=O.suspensionRestLength+O.maxSuspensionTravel;O.suspensionLength<ne&&(O.suspensionLength=ne),O.suspensionLength>Y&&(O.suspensionLength=Y,O.raycastResult.reset());var ie=O.raycastResult.hitNormalWorld.dot(O.directionWorld),me=new s;J.getVelocityAtWorldPoint(O.raycastResult.hitPointWorld,me);var Le=O.raycastResult.hitNormalWorld.dot(me);if(ie>=-.1)O.suspensionRelativeVelocity=0,O.clippedInvContactDotSuspension=1/.1;else{var ve=-1/ie;O.suspensionRelativeVelocity=Le*ve,O.clippedInvContactDotSuspension=ve}}else O.suspensionLength=O.suspensionRestLength+0*O.maxSuspensionTravel,O.suspensionRelativeVelocity=0,O.directionWorld.scale(-1,O.raycastResult.hitNormalWorld),O.clippedInvContactDotSuspension=1;return B},h.prototype.updateWheelTransformWorld=function(O){O.isInContact=!1;var N=this.chassisBody;N.pointToWorldFrame(O.chassisConnectionPointLocal,O.chassisConnectionPointWorld),N.vectorToWorldFrame(O.directionLocal,O.directionWorld),N.vectorToWorldFrame(O.axleLocal,O.axleWorld)},h.prototype.updateWheelTransform=function(O){var N=u,te=c,J=d,B=this.wheelInfos[O];this.updateWheelTransformWorld(B),B.directionLocal.scale(-1,N),te.copy(B.axleLocal),N.cross(te,J),J.normalize(),te.normalize();var Q=B.steering,z=new r;z.setFromAxisAngle(N,Q);var A=new r;A.setFromAxisAngle(te,B.rotation);var R=B.worldTransform.quaternion;this.chassisBody.quaternion.mult(z,R),R.mult(A,R),R.normalize();var k=B.worldTransform.position;k.copy(B.directionWorld),k.scale(B.suspensionLength,k),k.vadd(B.chassisConnectionPointWorld,k)};var g=[new s(1,0,0),new s(0,1,0),new s(0,0,1)];h.prototype.getWheelTransformWorld=function(O){return this.wheelInfos[O].worldTransform};var v=new s,p=[],x=[],y=1;h.prototype.updateFriction=function(O){for(var N=v,te=this.wheelInfos,J=te.length,B=this.chassisBody,Q=x,z=p,A=0;A<J;A++){var R=te[A],k=R.raycastResult.body;R.sideImpulse=0,R.forwardImpulse=0,Q[A]||(Q[A]=new s),z[A]||(z[A]=new s)}for(var A=0;A<J;A++){var R=te[A],k=R.raycastResult.body;if(k){var Z=z[A],ne=this.getWheelTransformWorld(A);ne.vectorToWorldFrame(g[this.indexRightAxis],Z);var Y=R.raycastResult.hitNormalWorld,ie=Z.dot(Y);Y.scale(ie,N),Z.vsub(N,Z),Z.normalize(),Y.cross(Z,Q[A]),Q[A].normalize(),R.sideImpulse=ee(B,R.raycastResult.hitPointWorld,k,R.raycastResult.hitPointWorld,Z),R.sideImpulse*=y}}var me=1,Le=.5;this.sliding=!1;for(var A=0;A<J;A++){var R=te[A],k=R.raycastResult.body,ve=0;if(R.slipInfo=1,k){var D=0,de=R.brake?R.brake:D;ve=I(B,k,R.raycastResult.hitPointWorld,Q[A],de),ve+=R.engineForce*O;var he=de/ve;R.slipInfo*=he}if(R.forwardImpulse=0,R.skidInfo=1,k){R.skidInfo=1;var qe=R.suspensionForce*O*R.frictionSlip,ye=qe,nt=qe*ye;R.forwardImpulse=ve;var pe=R.forwardImpulse*Le,L=R.sideImpulse*me,E=pe*pe+L*L;if(R.sliding=!1,E>nt){this.sliding=!0,R.sliding=!0;var he=qe/Math.sqrt(E);R.skidInfo*=he}}}if(this.sliding)for(var A=0;A<J;A++){var R=te[A];R.sideImpulse!==0&&R.skidInfo<1&&(R.forwardImpulse*=R.skidInfo,R.sideImpulse*=R.skidInfo)}for(var A=0;A<J;A++){var R=te[A],K=new s;if(K.copy(R.raycastResult.hitPointWorld),R.forwardImpulse!==0){var le=new s;Q[A].scale(R.forwardImpulse,le),B.applyImpulse(le,K)}if(R.sideImpulse!==0){var k=R.raycastResult.body,ce=new s;ce.copy(R.raycastResult.hitPointWorld);var oe=new s;z[A].scale(R.sideImpulse,oe),B.pointToLocalFrame(K,K),K["xyz"[this.indexUpAxis]]*=R.rollInfluence,B.pointToWorldFrame(K,K),B.applyImpulse(oe,K),oe.scale(-1,oe),k.applyImpulse(oe,ce)}}};var _=new s,T=new s,C=new s;function I(O,N,te,J,B){var Q=0,z=te,A=_,R=T,k=C;O.getVelocityAtWorldPoint(z,A),N.getVelocityAtWorldPoint(z,R),A.vsub(R,k);var Z=J.dot(k),ne=F(O,te,J),Y=F(N,te,J),ie=1,me=ie/(ne+Y);return Q=-Z*me,B<Q&&(Q=B),Q<-B&&(Q=-B),Q}var P=new s,S=new s,M=new s,b=new s;function F(O,N,te){var J=P,B=S,Q=M,z=b;return N.vsub(O.position,J),J.cross(te,B),O.invInertiaWorld.vmult(B,z),z.cross(J,Q),O.invMass+te.dot(Q)}var U=new s,W=new s,q=new s;function ee(O,N,te,J,B,Y){var z=B.norm2();if(z>1.1)return 0;var A=U,R=W,k=q;O.getVelocityAtWorldPoint(N,A),te.getVelocityAtWorldPoint(J,R),A.vsub(R,k);var Z=B.dot(k),ne=1/(O.invMass+te.invMass),Y=-.2*Z*ne;return Y}},{"../collision/Ray":9,"../collision/RaycastResult":10,"../math/Quaternion":28,"../math/Vec3":30,"../objects/WheelInfo":36,"./Body":31}],33:[function(t,n,i){var s=t("./Body"),r=t("../shapes/Sphere"),a=t("../shapes/Box"),l=t("../math/Vec3"),h=t("../constraints/HingeConstraint");n.exports=u;function u(f){if(this.wheelBodies=[],this.coordinateSystem=typeof f.coordinateSystem>"u"?new l(1,2,3):f.coordinateSystem.clone(),this.chassisBody=f.chassisBody,!this.chassisBody){var m=new a(new l(5,2,.5));this.chassisBody=new s(1,m)}this.constraints=[],this.wheelAxes=[],this.wheelForces=[]}u.prototype.addWheel=function(f){f=f||{};var m=f.body;m||(m=new s(1,new r(1.2))),this.wheelBodies.push(m),this.wheelForces.push(0),new l;var g=typeof f.position<"u"?f.position.clone():new l,v=new l;this.chassisBody.pointToWorldFrame(g,v),m.position.set(v.x,v.y,v.z);var p=typeof f.axis<"u"?f.axis.clone():new l(0,1,0);this.wheelAxes.push(p);var x=new h(this.chassisBody,m,{pivotA:g,axisA:p,pivotB:l.ZERO,axisB:p,collideConnected:!1});return this.constraints.push(x),this.wheelBodies.length-1},u.prototype.setSteeringValue=function(f,m){var g=this.wheelAxes[m],v=Math.cos(f),p=Math.sin(f),x=g.x,y=g.y;this.constraints[m].axisA.set(v*x-p*y,p*x+v*y,0)},u.prototype.setMotorSpeed=function(f,m){var g=this.constraints[m];g.enableMotor(),g.motorTargetVelocity=f},u.prototype.disableMotor=function(f){var m=this.constraints[f];m.disableMotor()};var c=new l;u.prototype.setWheelForce=function(f,m){this.wheelForces[m]=f},u.prototype.applyWheelForce=function(f,m){var g=this.wheelAxes[m],v=this.wheelBodies[m],p=v.torque;g.scale(f,c),v.vectorToWorldFrame(c,c),p.vadd(c,p)},u.prototype.addToWorld=function(f){for(var m=this.constraints,g=this.wheelBodies.concat([this.chassisBody]),v=0;v<g.length;v++)f.add(g[v]);for(var v=0;v<m.length;v++)f.addConstraint(m[v]);f.addEventListener("preStep",this._update.bind(this))},u.prototype._update=function(){for(var f=this.wheelForces,m=0;m<f.length;m++)this.applyWheelForce(f[m],m)},u.prototype.removeFromWorld=function(f){for(var m=this.constraints,g=this.wheelBodies.concat([this.chassisBody]),v=0;v<g.length;v++)f.remove(g[v]);for(var v=0;v<m.length;v++)f.removeConstraint(m[v])};var d=new l;u.prototype.getWheelSpeed=function(f){var m=this.wheelAxes[f],g=this.wheelBodies[f],v=g.angularVelocity;return this.chassisBody.vectorToWorldFrame(m,d),v.dot(d)}},{"../constraints/HingeConstraint":15,"../math/Vec3":30,"../shapes/Box":37,"../shapes/Sphere":44,"./Body":31}],34:[function(t,n,i){n.exports=r,t("../shapes/Shape");var s=t("../math/Vec3");t("../math/Quaternion"),t("../shapes/Particle"),t("../objects/Body"),t("../material/Material");function r(){this.particles=[],this.density=1,this.smoothingRadius=1,this.speedOfSound=1,this.viscosity=.01,this.eps=1e-6,this.pressures=[],this.densities=[],this.neighbors=[]}r.prototype.add=function(m){this.particles.push(m),this.neighbors.length<this.particles.length&&this.neighbors.push([])},r.prototype.remove=function(m){var g=this.particles.indexOf(m);g!==-1&&(this.particles.splice(g,1),this.neighbors.length>this.particles.length&&this.neighbors.pop())};var a=new s;r.prototype.getNeighbors=function(m,g){for(var v=this.particles.length,p=m.id,x=this.smoothingRadius*this.smoothingRadius,y=a,_=0;_!==v;_++){var T=this.particles[_];T.position.vsub(m.position,y),p!==T.id&&y.norm2()<x&&g.push(T)}};var l=new s,h=new s,u=new s,c=new s,d=new s,f=new s;r.prototype.update=function(){for(var m=this.particles.length,g=l,v=this.speedOfSound,p=this.eps,x=0;x!==m;x++){var y=this.particles[x],_=this.neighbors[x];_.length=0,this.getNeighbors(y,_),_.push(this.particles[x]);for(var T=_.length,C=0,I=0;I!==T;I++){y.position.vsub(_[I].position,g);var P=g.norm(),S=this.w(P);C+=_[I].mass*S}this.densities[x]=C,this.pressures[x]=v*v*(this.densities[x]-this.density)}for(var M=h,b=u,F=c,U=d,W=f,x=0;x!==m;x++){var q=this.particles[x];M.set(0,0,0),b.set(0,0,0);for(var ee,O,_=this.neighbors[x],T=_.length,I=0;I!==T;I++){var N=_[I];q.position.vsub(N.position,U);var te=U.norm();ee=-N.mass*(this.pressures[x]/(this.densities[x]*this.densities[x]+p)+this.pressures[I]/(this.densities[I]*this.densities[I]+p)),this.gradw(U,F),F.mult(ee,F),M.vadd(F,M),N.velocity.vsub(q.velocity,W),W.mult(1/(1e-4+this.densities[x]*this.densities[I])*this.viscosity*N.mass,W),O=this.nablaw(te),W.mult(O,W),b.vadd(W,b)}b.mult(q.mass,b),M.mult(q.mass,M),q.force.vadd(b,q.force),q.force.vadd(M,q.force)}},r.prototype.w=function(m){var g=this.smoothingRadius;return 315/(64*Math.PI*Math.pow(g,9))*Math.pow(g*g-m*m,3)},r.prototype.gradw=function(m,g){var v=m.norm(),p=this.smoothingRadius;m.mult(945/(32*Math.PI*Math.pow(p,9))*Math.pow(p*p-v*v,2),g)},r.prototype.nablaw=function(m){var g=this.smoothingRadius,v=945/(32*Math.PI*Math.pow(g,9))*(g*g-m*m)*(7*m*m-3*g*g);return v}},{"../material/Material":25,"../math/Quaternion":28,"../math/Vec3":30,"../objects/Body":31,"../shapes/Particle":41,"../shapes/Shape":43}],35:[function(t,n,i){var s=t("../math/Vec3");n.exports=r;function r(x,y,_){_=_||{},this.restLength=typeof _.restLength=="number"?_.restLength:1,this.stiffness=_.stiffness||100,this.damping=_.damping||1,this.bodyA=x,this.bodyB=y,this.localAnchorA=new s,this.localAnchorB=new s,_.localAnchorA&&this.localAnchorA.copy(_.localAnchorA),_.localAnchorB&&this.localAnchorB.copy(_.localAnchorB),_.worldAnchorA&&this.setWorldAnchorA(_.worldAnchorA),_.worldAnchorB&&this.setWorldAnchorB(_.worldAnchorB)}r.prototype.setWorldAnchorA=function(x){this.bodyA.pointToLocalFrame(x,this.localAnchorA)},r.prototype.setWorldAnchorB=function(x){this.bodyB.pointToLocalFrame(x,this.localAnchorB)},r.prototype.getWorldAnchorA=function(x){this.bodyA.pointToWorldFrame(this.localAnchorA,x)},r.prototype.getWorldAnchorB=function(x){this.bodyB.pointToWorldFrame(this.localAnchorB,x)};var a=new s,l=new s,h=new s,u=new s,c=new s,d=new s,f=new s,m=new s,g=new s,v=new s,p=new s;r.prototype.applyForce=function(){var x=this.stiffness,y=this.damping,_=this.restLength,T=this.bodyA,C=this.bodyB,I=a,P=l,S=h,M=u,b=p,F=c,U=d,W=f,q=m,ee=g,O=v;this.getWorldAnchorA(F),this.getWorldAnchorB(U),F.vsub(T.position,W),U.vsub(C.position,q),U.vsub(F,I);var N=I.norm();P.copy(I),P.normalize(),C.velocity.vsub(T.velocity,S),C.angularVelocity.cross(q,b),S.vadd(b,S),T.angularVelocity.cross(W,b),S.vsub(b,S),P.mult(-x*(N-_)-y*S.dot(P),M),T.force.vsub(M,T.force),C.force.vadd(M,C.force),W.cross(M,ee),q.cross(M,O),T.torque.vsub(ee,T.torque),C.torque.vadd(O,C.torque)}},{"../math/Vec3":30}],36:[function(t,n,i){var s=t("../math/Vec3"),r=t("../math/Transform"),a=t("../collision/RaycastResult"),l=t("../utils/Utils");n.exports=h;function h(d){d=l.defaults(d,{chassisConnectionPointLocal:new s,chassisConnectionPointWorld:new s,directionLocal:new s,directionWorld:new s,axleLocal:new s,axleWorld:new s,suspensionRestLength:1,suspensionMaxLength:2,radius:1,suspensionStiffness:100,dampingCompression:10,dampingRelaxation:10,frictionSlip:1e4,steering:0,rotation:0,deltaRotation:0,rollInfluence:.01,maxSuspensionForce:Number.MAX_VALUE,isFrontWheel:!0,clippedInvContactDotSuspension:1,suspensionRelativeVelocity:0,suspensionForce:0,skidInfo:0,suspensionLength:0,maxSuspensionTravel:1,useCustomSlidingRotationalSpeed:!1,customSlidingRotationalSpeed:-.1}),this.maxSuspensionTravel=d.maxSuspensionTravel,this.customSlidingRotationalSpeed=d.customSlidingRotationalSpeed,this.useCustomSlidingRotationalSpeed=d.useCustomSlidingRotationalSpeed,this.sliding=!1,this.chassisConnectionPointLocal=d.chassisConnectionPointLocal.clone(),this.chassisConnectionPointWorld=d.chassisConnectionPointWorld.clone(),this.directionLocal=d.directionLocal.clone(),this.directionWorld=d.directionWorld.clone(),this.axleLocal=d.axleLocal.clone(),this.axleWorld=d.axleWorld.clone(),this.suspensionRestLength=d.suspensionRestLength,this.suspensionMaxLength=d.suspensionMaxLength,this.radius=d.radius,this.suspensionStiffness=d.suspensionStiffness,this.dampingCompression=d.dampingCompression,this.dampingRelaxation=d.dampingRelaxation,this.frictionSlip=d.frictionSlip,this.steering=0,this.rotation=0,this.deltaRotation=0,this.rollInfluence=d.rollInfluence,this.maxSuspensionForce=d.maxSuspensionForce,this.engineForce=0,this.brake=0,this.isFrontWheel=d.isFrontWheel,this.clippedInvContactDotSuspension=1,this.suspensionRelativeVelocity=0,this.suspensionForce=0,this.skidInfo=0,this.suspensionLength=0,this.sideImpulse=0,this.forwardImpulse=0,this.raycastResult=new a,this.worldTransform=new r,this.isInContact=!1}var c=new s,u=new s,c=new s;h.prototype.updateWheel=function(d){var f=this.raycastResult;if(this.isInContact){var m=f.hitNormalWorld.dot(f.directionWorld);f.hitPointWorld.vsub(d.position,u),d.getVelocityAtWorldPoint(u,c);var g=f.hitNormalWorld.dot(c);if(m>=-.1)this.suspensionRelativeVelocity=0,this.clippedInvContactDotSuspension=1/.1;else{var v=-1/m;this.suspensionRelativeVelocity=g*v,this.clippedInvContactDotSuspension=v}}else f.suspensionLength=this.suspensionRestLength,this.suspensionRelativeVelocity=0,f.directionWorld.scale(-1,f.hitNormalWorld),this.clippedInvContactDotSuspension=1}},{"../collision/RaycastResult":10,"../math/Transform":29,"../math/Vec3":30,"../utils/Utils":53}],37:[function(t,n,i){n.exports=l;var s=t("./Shape"),r=t("../math/Vec3"),a=t("./ConvexPolyhedron");function l(c){s.call(this),this.type=s.types.BOX,this.halfExtents=c,this.convexPolyhedronRepresentation=null,this.updateConvexPolyhedronRepresentation(),this.updateBoundingSphereRadius()}l.prototype=new s,l.prototype.constructor=l,l.prototype.updateConvexPolyhedronRepresentation=function(){var c=this.halfExtents.x,d=this.halfExtents.y,f=this.halfExtents.z,m=r,g=[new m(-c,-d,-f),new m(c,-d,-f),new m(c,d,-f),new m(-c,d,-f),new m(-c,-d,f),new m(c,-d,f),new m(c,d,f),new m(-c,d,f)],v=[[3,2,1,0],[4,5,6,7],[5,4,0,1],[2,3,7,6],[0,4,7,3],[1,2,6,5]];new m(0,0,1),new m(0,1,0),new m(1,0,0);var p=new a(g,v);this.convexPolyhedronRepresentation=p,p.material=this.material},l.prototype.calculateLocalInertia=function(c,d){return d=d||new r,l.calculateInertia(this.halfExtents,c,d),d},l.calculateInertia=function(c,d,f){var m=c;f.x=1/12*d*(2*m.y*2*m.y+2*m.z*2*m.z),f.y=1/12*d*(2*m.x*2*m.x+2*m.z*2*m.z),f.z=1/12*d*(2*m.y*2*m.y+2*m.x*2*m.x)},l.prototype.getSideNormals=function(c,d){var f=c,m=this.halfExtents;if(f[0].set(m.x,0,0),f[1].set(0,m.y,0),f[2].set(0,0,m.z),f[3].set(-m.x,0,0),f[4].set(0,-m.y,0),f[5].set(0,0,-m.z),d!==void 0)for(var g=0;g!==f.length;g++)d.vmult(f[g],f[g]);return f},l.prototype.volume=function(){return 8*this.halfExtents.x*this.halfExtents.y*this.halfExtents.z},l.prototype.updateBoundingSphereRadius=function(){this.boundingSphereRadius=this.halfExtents.norm()};var h=new r;new r,l.prototype.forEachWorldCorner=function(c,d,f){for(var m=this.halfExtents,g=[[m.x,m.y,m.z],[-m.x,m.y,m.z],[-m.x,-m.y,m.z],[-m.x,-m.y,-m.z],[m.x,-m.y,-m.z],[m.x,m.y,-m.z],[-m.x,m.y,-m.z],[m.x,-m.y,m.z]],v=0;v<g.length;v++)h.set(g[v][0],g[v][1],g[v][2]),d.vmult(h,h),c.vadd(h,h),f(h.x,h.y,h.z)};var u=[new r,new r,new r,new r,new r,new r,new r,new r];l.prototype.calculateWorldAABB=function(c,d,f,m){var g=this.halfExtents;u[0].set(g.x,g.y,g.z),u[1].set(-g.x,g.y,g.z),u[2].set(-g.x,-g.y,g.z),u[3].set(-g.x,-g.y,-g.z),u[4].set(g.x,-g.y,-g.z),u[5].set(g.x,g.y,-g.z),u[6].set(-g.x,g.y,-g.z),u[7].set(g.x,-g.y,g.z);var v=u[0];d.vmult(v,v),c.vadd(v,v),m.copy(v),f.copy(v);for(var p=1;p<8;p++){var v=u[p];d.vmult(v,v),c.vadd(v,v);var x=v.x,y=v.y,_=v.z;x>m.x&&(m.x=x),y>m.y&&(m.y=y),_>m.z&&(m.z=_),x<f.x&&(f.x=x),y<f.y&&(f.y=y),_<f.z&&(f.z=_)}}},{"../math/Vec3":30,"./ConvexPolyhedron":38,"./Shape":43}],38:[function(t,n,i){n.exports=l;var s=t("./Shape"),r=t("../math/Vec3");t("../math/Quaternion");var a=t("../math/Transform");function l(B,Q,z){s.call(this),this.type=s.types.CONVEXPOLYHEDRON,this.vertices=B||[],this.worldVertices=[],this.worldVerticesNeedsUpdate=!0,this.faces=Q||[],this.faceNormals=[],this.computeNormals(),this.worldFaceNormalsNeedsUpdate=!0,this.worldFaceNormals=[],this.uniqueEdges=[],this.uniqueAxes=z?z.slice():null,this.computeEdges(),this.updateBoundingSphereRadius()}l.prototype=new s,l.prototype.constructor=l;var h=new r;l.prototype.computeEdges=function(){var B=this.faces,Q=this.vertices;Q.length;var z=this.uniqueEdges;z.length=0;for(var A=h,R=0;R!==B.length;R++)for(var k=B[R],Z=k.length,ne=0;ne!==Z;ne++){var Y=(ne+1)%Z;Q[k[ne]].vsub(Q[k[Y]],A),A.normalize();for(var ie=!1,me=0;me!==z.length;me++)if(z[me].almostEquals(A)||z[me].almostEquals(A)){ie=!0;break}ie||z.push(A.clone())}},l.prototype.computeNormals=function(){this.faceNormals.length=this.faces.length;for(var B=0;B<this.faces.length;B++){for(var Q=0;Q<this.faces[B].length;Q++)if(!this.vertices[this.faces[B][Q]])throw new Error("Vertex "+this.faces[B][Q]+" not found!");var z=this.faceNormals[B]||new r;this.getFaceNormal(B,z),z.negate(z),this.faceNormals[B]=z;var A=this.vertices[this.faces[B][0]];if(z.dot(A)<0){console.error(".faceNormals["+B+"] = Vec3("+z.toString()+") looks like it points into the shape? The vertices follow. Make sure they are ordered CCW around the normal, using the right hand rule.");for(var Q=0;Q<this.faces[B].length;Q++)console.warn(".vertices["+this.faces[B][Q]+"] = Vec3("+this.vertices[this.faces[B][Q]].toString()+")")}}};var u=new r,c=new r;l.computeNormal=function(B,Q,z,A){Q.vsub(B,c),z.vsub(Q,u),u.cross(c,A),A.isZero()||A.normalize()},l.prototype.getFaceNormal=function(B,Q){var z=this.faces[B],A=this.vertices[z[0]],R=this.vertices[z[1]],k=this.vertices[z[2]];return l.computeNormal(A,R,k,Q)};var d=new r;l.prototype.clipAgainstHull=function(B,Q,z,A,R,k,Z,ne,Y){for(var ie=d,me=-1,Le=-Number.MAX_VALUE,ve=0;ve<z.faces.length;ve++){ie.copy(z.faceNormals[ve]),R.vmult(ie,ie);var D=ie.dot(k);D>Le&&(Le=D,me=ve)}for(var de=[],he=z.faces[me],qe=he.length,ye=0;ye<qe;ye++){var nt=z.vertices[he[ye]],pe=new r;pe.copy(nt),R.vmult(pe,pe),A.vadd(pe,pe),de.push(pe)}me>=0&&this.clipFaceAgainstHull(k,B,Q,de,Z,ne,Y)};var f=new r,m=new r,g=new r,v=new r,p=new r,x=new r;l.prototype.findSeparatingAxis=function(B,Q,z,A,R,k,Z,ne){var Y=f,ie=m,me=g,Le=v,ve=p,D=x,de=Number.MAX_VALUE,he=this;if(he.uniqueAxes)for(var ye=0;ye!==he.uniqueAxes.length;ye++){z.vmult(he.uniqueAxes[ye],Y);var pe=he.testSepAxis(Y,B,Q,z,A,R);if(pe===!1)return!1;pe<de&&(de=pe,k.copy(Y))}else for(var qe=Z?Z.length:he.faces.length,ye=0;ye<qe;ye++){var nt=Z?Z[ye]:ye;Y.copy(he.faceNormals[nt]),z.vmult(Y,Y);var pe=he.testSepAxis(Y,B,Q,z,A,R);if(pe===!1)return!1;pe<de&&(de=pe,k.copy(Y))}if(B.uniqueAxes)for(var ye=0;ye!==B.uniqueAxes.length;ye++){R.vmult(B.uniqueAxes[ye],ie);var pe=he.testSepAxis(ie,B,Q,z,A,R);if(pe===!1)return!1;pe<de&&(de=pe,k.copy(ie))}else for(var L=ne?ne.length:B.faces.length,ye=0;ye<L;ye++){var nt=ne?ne[ye]:ye;ie.copy(B.faceNormals[nt]),R.vmult(ie,ie);var pe=he.testSepAxis(ie,B,Q,z,A,R);if(pe===!1)return!1;pe<de&&(de=pe,k.copy(ie))}for(var E=0;E!==he.uniqueEdges.length;E++){z.vmult(he.uniqueEdges[E],Le);for(var K=0;K!==B.uniqueEdges.length;K++)if(R.vmult(B.uniqueEdges[K],ve),Le.cross(ve,D),!D.almostZero()){D.normalize();var le=he.testSepAxis(D,B,Q,z,A,R);if(le===!1)return!1;le<de&&(de=le,k.copy(D))}}return A.vsub(Q,me),me.dot(k)>0&&k.negate(k),!0};var y=[],_=[];l.prototype.testSepAxis=function(B,Q,z,A,R,k){var Z=this;l.project(Z,B,z,A,y),l.project(Q,B,R,k,_);var ne=y[0],Y=y[1],ie=_[0],me=_[1];if(ne<me||ie<Y)return!1;var Le=ne-me,ve=ie-Y,D=Le<ve?Le:ve;return D};var T=new r,C=new r;l.prototype.calculateLocalInertia=function(B,Q){this.computeLocalAABB(T,C);var z=C.x-T.x,A=C.y-T.y,R=C.z-T.z;Q.x=1/12*B*(2*A*2*A+2*R*2*R),Q.y=1/12*B*(2*z*2*z+2*R*2*R),Q.z=1/12*B*(2*A*2*A+2*z*2*z)},l.prototype.getPlaneConstantOfFace=function(B){var Q=this.faces[B],z=this.faceNormals[B],A=this.vertices[Q[0]],R=-z.dot(A);return R};var I=new r,P=new r,S=new r,M=new r,b=new r,F=new r,U=new r,W=new r;l.prototype.clipFaceAgainstHull=function(B,Q,z,A,R,k,Z){for(var ne=I,Y=P,ie=S,me=M,Le=b,ve=F,D=U,de=W,he=this,qe=[],ye=A,nt=qe,pe=-1,L=Number.MAX_VALUE,E=0;E<he.faces.length;E++){ne.copy(he.faceNormals[E]),z.vmult(ne,ne);var K=ne.dot(B);K<L&&(L=K,pe=E)}if(!(pe<0)){var le=he.faces[pe];le.connectedFaces=[];for(var ce=0;ce<he.faces.length;ce++)for(var oe=0;oe<he.faces[ce].length;oe++)le.indexOf(he.faces[ce][oe])!==-1&&ce!==pe&&le.connectedFaces.indexOf(ce)===-1&&le.connectedFaces.push(ce);ye.length;for(var Ee=le.length,we=0;we<Ee;we++){var Fe=he.vertices[le[we]],ct=he.vertices[le[(we+1)%Ee]];Fe.vsub(ct,Y),ie.copy(Y),z.vmult(ie,ie),Q.vadd(ie,ie),me.copy(this.faceNormals[pe]),z.vmult(me,me),Q.vadd(me,me),ie.cross(me,Le),Le.negate(Le),ve.copy(Fe),z.vmult(ve,ve),Q.vadd(ve,ve),-ve.dot(Le);var Ze;{var Se=le.connectedFaces[we];D.copy(this.faceNormals[Se]);var He=this.getPlaneConstantOfFace(Se);de.copy(D),z.vmult(de,de);var Ze=He-de.dot(Q)}for(this.clipFaceAgainstPlane(ye,nt,de,Ze);ye.length;)ye.shift();for(;nt.length;)ye.push(nt.shift())}D.copy(this.faceNormals[pe]);var He=this.getPlaneConstantOfFace(pe);de.copy(D),z.vmult(de,de);for(var Ze=He-de.dot(Q),ce=0;ce<ye.length;ce++){var Je=de.dot(ye[ce])+Ze;if(Je<=R&&(console.log("clamped: depth="+Je+" to minDist="+(R+"")),Je=R),Je<=k){var Xe=ye[ce];if(Je<=0){var ht={point:Xe,normal:de,depth:Je};Z.push(ht)}}}}},l.prototype.clipFaceAgainstPlane=function(B,Q,z,A){var R,k,Z=B.length;if(Z<2)return Q;var ne=B[B.length-1],Y=B[0];R=z.dot(ne)+A;for(var ie=0;ie<Z;ie++){if(Y=B[ie],k=z.dot(Y)+A,R<0)if(k<0){var me=new r;me.copy(Y),Q.push(me)}else{var me=new r;ne.lerp(Y,R/(R-k),me),Q.push(me)}else if(k<0){var me=new r;ne.lerp(Y,R/(R-k),me),Q.push(me),Q.push(Y)}ne=Y,R=k}return Q},l.prototype.computeWorldVertices=function(B,Q){for(var z=this.vertices.length;this.worldVertices.length<z;)this.worldVertices.push(new r);for(var A=this.vertices,R=this.worldVertices,k=0;k!==z;k++)Q.vmult(A[k],R[k]),B.vadd(R[k],R[k]);this.worldVerticesNeedsUpdate=!1},new r,l.prototype.computeLocalAABB=function(B,Q){var z=this.vertices.length,A=this.vertices;B.set(Number.MAX_VALUE,Number.MAX_VALUE,Number.MAX_VALUE),Q.set(-Number.MAX_VALUE,-Number.MAX_VALUE,-Number.MAX_VALUE);for(var R=0;R<z;R++){var k=A[R];k.x<B.x?B.x=k.x:k.x>Q.x&&(Q.x=k.x),k.y<B.y?B.y=k.y:k.y>Q.y&&(Q.y=k.y),k.z<B.z?B.z=k.z:k.z>Q.z&&(Q.z=k.z)}},l.prototype.computeWorldFaceNormals=function(B){for(var Q=this.faceNormals.length;this.worldFaceNormals.length<Q;)this.worldFaceNormals.push(new r);for(var z=this.faceNormals,A=this.worldFaceNormals,R=0;R!==Q;R++)B.vmult(z[R],A[R]);this.worldFaceNormalsNeedsUpdate=!1},l.prototype.updateBoundingSphereRadius=function(){for(var B=0,Q=this.vertices,z=0,A=Q.length;z!==A;z++){var R=Q[z].norm2();R>B&&(B=R)}this.boundingSphereRadius=Math.sqrt(B)};var q=new r;l.prototype.calculateWorldAABB=function(B,Q,z,A){for(var R=this.vertices.length,k=this.vertices,Z,ne,Y,ie,me,Le,ve=0;ve<R;ve++){q.copy(k[ve]),Q.vmult(q,q),B.vadd(q,q);var D=q;D.x<Z||Z===void 0?Z=D.x:(D.x>ie||ie===void 0)&&(ie=D.x),D.y<ne||ne===void 0?ne=D.y:(D.y>me||me===void 0)&&(me=D.y),D.z<Y||Y===void 0?Y=D.z:(D.z>Le||Le===void 0)&&(Le=D.z)}z.set(Z,ne,Y),A.set(ie,me,Le)},l.prototype.volume=function(){return 4*Math.PI*this.boundingSphereRadius/3},l.prototype.getAveragePointLocal=function(B){B=B||new r;for(var Q=this.vertices.length,z=this.vertices,A=0;A<Q;A++)B.vadd(z[A],B);return B.mult(1/Q,B),B},l.prototype.transformAllPoints=function(B,Q){var z=this.vertices.length,A=this.vertices;if(Q){for(var R=0;R<z;R++){var k=A[R];Q.vmult(k,k)}for(var R=0;R<this.faceNormals.length;R++){var k=this.faceNormals[R];Q.vmult(k,k)}}if(B)for(var R=0;R<z;R++){var k=A[R];k.vadd(B,k)}};var ee=new r,O=new r,N=new r;l.prototype.pointIsInside=function(B){var Q=this.vertices.length,z=this.vertices,A=this.faces,R=this.faceNormals,k=null,Z=this.faces.length,ne=ee;this.getAveragePointLocal(ne);for(var Y=0;Y<Z;Y++){this.faces[Y].length;var Q=R[Y],ie=z[A[Y][0]],me=O;B.vsub(ie,me);var Le=Q.dot(me),ve=N;ne.vsub(ie,ve);var D=Q.dot(ve);if(Le<0&&D>0||Le>0&&D<0)return!1}return k?1:-1},new r;var te=new r,J=new r;l.project=function(B,Q,z,A,R){var k=B.vertices.length,Z=te,ne=0,Y=0,ie=J,me=B.vertices;ie.setZero(),a.vectorToLocalFrame(z,A,Q,Z),a.pointToLocalFrame(z,A,ie,ie);var Le=ie.dot(Z);Y=ne=me[0].dot(Z);for(var ve=1;ve<k;ve++){var D=me[ve].dot(Z);D>ne&&(ne=D),D<Y&&(Y=D)}if(Y-=Le,ne-=Le,Y>ne){var de=Y;Y=ne,ne=de}R[0]=ne,R[1]=Y}},{"../math/Quaternion":28,"../math/Transform":29,"../math/Vec3":30,"./Shape":43}],39:[function(t,n,i){n.exports=l;var s=t("./Shape"),r=t("../math/Vec3");t("../math/Quaternion");var a=t("./ConvexPolyhedron");function l(h,u,c,d){var f=d,m=[],g=[],v=[],p=[],x=[],y=Math.cos,_=Math.sin;m.push(new r(u*y(0),u*_(0),-c*.5)),p.push(0),m.push(new r(h*y(0),h*_(0),c*.5)),x.push(1);for(var T=0;T<f;T++){var C=2*Math.PI/f*(T+1),I=2*Math.PI/f*(T+.5);T<f-1?(m.push(new r(u*y(C),u*_(C),-c*.5)),p.push(2*T+2),m.push(new r(h*y(C),h*_(C),c*.5)),x.push(2*T+3),v.push([2*T+2,2*T+3,2*T+1,2*T])):v.push([0,1,2*T+1,2*T]),(f%2===1||T<f/2)&&g.push(new r(y(I),_(I),0))}v.push(x),g.push(new r(0,0,1));for(var P=[],T=0;T<p.length;T++)P.push(p[p.length-T-1]);v.push(P),this.type=s.types.CONVEXPOLYHEDRON,a.call(this,m,v,g)}l.prototype=new a},{"../math/Quaternion":28,"../math/Vec3":30,"./ConvexPolyhedron":38,"./Shape":43}],40:[function(t,n,i){var s=t("./Shape"),r=t("./ConvexPolyhedron"),a=t("../math/Vec3"),l=t("../utils/Utils");n.exports=h;function h(u,c){c=l.defaults(c,{maxValue:null,minValue:null,elementSize:1}),this.data=u,this.maxValue=c.maxValue,this.minValue=c.minValue,this.elementSize=c.elementSize,c.minValue===null&&this.updateMinValue(),c.maxValue===null&&this.updateMaxValue(),this.cacheEnabled=!0,s.call(this),this.pillarConvex=new r,this.pillarOffset=new a,this.type=s.types.HEIGHTFIELD,this.updateBoundingSphereRadius(),this._cachedPillars={}}h.prototype=new s,h.prototype.update=function(){this._cachedPillars={}},h.prototype.updateMinValue=function(){for(var u=this.data,c=u[0][0],d=0;d!==u.length;d++)for(var f=0;f!==u[d].length;f++){var m=u[d][f];m<c&&(c=m)}this.minValue=c},h.prototype.updateMaxValue=function(){for(var u=this.data,c=u[0][0],d=0;d!==u.length;d++)for(var f=0;f!==u[d].length;f++){var m=u[d][f];m>c&&(c=m)}this.maxValue=c},h.prototype.setHeightValueAtIndex=function(u,c,d){var f=this.data;f[u][c]=d,this.clearCachedConvexTrianglePillar(u,c,!1),u>0&&(this.clearCachedConvexTrianglePillar(u-1,c,!0),this.clearCachedConvexTrianglePillar(u-1,c,!1)),c>0&&(this.clearCachedConvexTrianglePillar(u,c-1,!0),this.clearCachedConvexTrianglePillar(u,c-1,!1)),c>0&&u>0&&this.clearCachedConvexTrianglePillar(u-1,c-1,!0)},h.prototype.getRectMinMax=function(u,c,d,f,m){m=m||[];for(var g=this.data,v=this.minValue,p=u;p<=d;p++)for(var x=c;x<=f;x++){var y=g[p][x];y>v&&(v=y)}m[0]=this.minValue,m[1]=v},h.prototype.getIndexOfPosition=function(u,c,d,f){var m=this.elementSize,g=this.data,v=Math.floor(u/m),p=Math.floor(c/m);return d[0]=v,d[1]=p,f&&(v<0&&(v=0),p<0&&(p=0),v>=g.length-1&&(v=g.length-1),p>=g[0].length-1&&(p=g[0].length-1)),!(v<0||p<0||v>=g.length-1||p>=g[0].length-1)},h.prototype.getHeightAt=function(u,c,d){var f=[];this.getIndexOfPosition(u,c,f,d);var m=[];return this.getRectMinMax(f[0],f[1]+1,f[0],f[1]+1,m),(m[0]+m[1])/2},h.prototype.getCacheConvexTrianglePillarKey=function(u,c,d){return u+"_"+c+"_"+(d?1:0)},h.prototype.getCachedConvexTrianglePillar=function(u,c,d){return this._cachedPillars[this.getCacheConvexTrianglePillarKey(u,c,d)]},h.prototype.setCachedConvexTrianglePillar=function(u,c,d,f,m){this._cachedPillars[this.getCacheConvexTrianglePillarKey(u,c,d)]={convex:f,offset:m}},h.prototype.clearCachedConvexTrianglePillar=function(u,c,d){delete this._cachedPillars[this.getCacheConvexTrianglePillarKey(u,c,d)]},h.prototype.getConvexTrianglePillar=function(u,c,d){var f=this.pillarConvex,m=this.pillarOffset;if(this.cacheEnabled){var g=this.getCachedConvexTrianglePillar(u,c,d);if(g){this.pillarConvex=g.convex,this.pillarOffset=g.offset;return}f=new r,m=new a,this.pillarConvex=f,this.pillarOffset=m}var g=this.data,v=this.elementSize,p=f.faces;f.vertices.length=6;for(var x=0;x<6;x++)f.vertices[x]||(f.vertices[x]=new a);p.length=5;for(var x=0;x<5;x++)p[x]||(p[x]=[]);var y=f.vertices,_=(Math.min(g[u][c],g[u+1][c],g[u][c+1],g[u+1][c+1])-this.minValue)/2+this.minValue;d?(m.set((u+.75)*v,(c+.75)*v,_),y[0].set(.25*v,.25*v,g[u+1][c+1]-_),y[1].set(-.75*v,.25*v,g[u][c+1]-_),y[2].set(.25*v,-.75*v,g[u+1][c]-_),y[3].set(.25*v,.25*v,-_-1),y[4].set(-.75*v,.25*v,-_-1),y[5].set(.25*v,-.75*v,-_-1),p[0][0]=0,p[0][1]=1,p[0][2]=2,p[1][0]=5,p[1][1]=4,p[1][2]=3,p[2][0]=2,p[2][1]=5,p[2][2]=3,p[2][3]=0,p[3][0]=3,p[3][1]=4,p[3][2]=1,p[3][3]=0,p[4][0]=1,p[4][1]=4,p[4][2]=5,p[4][3]=2):(m.set((u+.25)*v,(c+.25)*v,_),y[0].set(-.25*v,-.25*v,g[u][c]-_),y[1].set(.75*v,-.25*v,g[u+1][c]-_),y[2].set(-.25*v,.75*v,g[u][c+1]-_),y[3].set(-.25*v,-.25*v,-_-1),y[4].set(.75*v,-.25*v,-_-1),y[5].set(-.25*v,.75*v,-_-1),p[0][0]=0,p[0][1]=1,p[0][2]=2,p[1][0]=5,p[1][1]=4,p[1][2]=3,p[2][0]=0,p[2][1]=2,p[2][2]=5,p[2][3]=3,p[3][0]=1,p[3][1]=0,p[3][2]=3,p[3][3]=4,p[4][0]=4,p[4][1]=5,p[4][2]=2,p[4][3]=1),f.computeNormals(),f.computeEdges(),f.updateBoundingSphereRadius(),this.setCachedConvexTrianglePillar(u,c,d,f,m)},h.prototype.calculateLocalInertia=function(u,c){return c=c||new a,c.set(0,0,0),c},h.prototype.volume=function(){return Number.MAX_VALUE},h.prototype.calculateWorldAABB=function(u,c,d,f){d.set(-Number.MAX_VALUE,-Number.MAX_VALUE,-Number.MAX_VALUE),f.set(Number.MAX_VALUE,Number.MAX_VALUE,Number.MAX_VALUE)},h.prototype.updateBoundingSphereRadius=function(){var u=this.data,c=this.elementSize;this.boundingSphereRadius=new a(u.length*c,u[0].length*c,Math.max(Math.abs(this.maxValue),Math.abs(this.minValue))).norm()}},{"../math/Vec3":30,"../utils/Utils":53,"./ConvexPolyhedron":38,"./Shape":43}],41:[function(t,n,i){n.exports=a;var s=t("./Shape"),r=t("../math/Vec3");function a(){s.call(this),this.type=s.types.PARTICLE}a.prototype=new s,a.prototype.constructor=a,a.prototype.calculateLocalInertia=function(l,h){return h=h||new r,h.set(0,0,0),h},a.prototype.volume=function(){return 0},a.prototype.updateBoundingSphereRadius=function(){this.boundingSphereRadius=0},a.prototype.calculateWorldAABB=function(l,h,u,c){u.copy(l),c.copy(l)}},{"../math/Vec3":30,"./Shape":43}],42:[function(t,n,i){n.exports=a;var s=t("./Shape"),r=t("../math/Vec3");function a(){s.call(this),this.type=s.types.PLANE,this.worldNormal=new r,this.worldNormalNeedsUpdate=!0,this.boundingSphereRadius=Number.MAX_VALUE}a.prototype=new s,a.prototype.constructor=a,a.prototype.computeWorldNormal=function(h){var u=this.worldNormal;u.set(0,0,1),h.vmult(u,u),this.worldNormalNeedsUpdate=!1},a.prototype.calculateLocalInertia=function(h,u){return u=u||new r,u},a.prototype.volume=function(){return Number.MAX_VALUE};var l=new r;a.prototype.calculateWorldAABB=function(h,u,c,d){l.set(0,0,1),u.vmult(l,l);var f=Number.MAX_VALUE;c.set(-f,-f,-f),d.set(f,f,f),l.x===1&&(d.x=h.x),l.y===1&&(d.y=h.y),l.z===1&&(d.z=h.z),l.x===-1&&(c.x=h.x),l.y===-1&&(c.y=h.y),l.z===-1&&(c.z=h.z)},a.prototype.updateBoundingSphereRadius=function(){this.boundingSphereRadius=Number.MAX_VALUE}},{"../math/Vec3":30,"./Shape":43}],43:[function(t,n,i){n.exports=s;var s=t("./Shape");t("../math/Vec3"),t("../math/Quaternion"),t("../material/Material");function s(){this.id=s.idCounter++,this.type=0,this.boundingSphereRadius=0,this.collisionResponse=!0,this.material=null}s.prototype.constructor=s,s.prototype.updateBoundingSphereRadius=function(){throw"computeBoundingSphereRadius() not implemented for shape type "+this.type},s.prototype.volume=function(){throw"volume() not implemented for shape type "+this.type},s.prototype.calculateLocalInertia=function(r,a){throw"calculateLocalInertia() not implemented for shape type "+this.type},s.idCounter=0,s.types={SPHERE:1,PLANE:2,BOX:4,COMPOUND:8,CONVEXPOLYHEDRON:16,HEIGHTFIELD:32,PARTICLE:64,CYLINDER:128,TRIMESH:256}},{"../material/Material":25,"../math/Quaternion":28,"../math/Vec3":30,"./Shape":43}],44:[function(t,n,i){n.exports=a;var s=t("./Shape"),r=t("../math/Vec3");function a(l){if(s.call(this),this.radius=l!==void 0?Number(l):1,this.type=s.types.SPHERE,this.radius<0)throw new Error("The sphere radius cannot be negative.");this.updateBoundingSphereRadius()}a.prototype=new s,a.prototype.constructor=a,a.prototype.calculateLocalInertia=function(l,h){h=h||new r;var u=2*l*this.radius*this.radius/5;return h.x=u,h.y=u,h.z=u,h},a.prototype.volume=function(){return 4*Math.PI*this.radius/3},a.prototype.updateBoundingSphereRadius=function(){this.boundingSphereRadius=this.radius},a.prototype.calculateWorldAABB=function(l,h,u,c){for(var d=this.radius,f=["x","y","z"],m=0;m<f.length;m++){var g=f[m];u[g]=l[g]-d,c[g]=l[g]+d}}},{"../math/Vec3":30,"./Shape":43}],45:[function(t,n,i){n.exports=u;var s=t("./Shape"),r=t("../math/Vec3");t("../math/Quaternion");var a=t("../math/Transform"),l=t("../collision/AABB"),h=t("../utils/Octree");function u(P,S){s.call(this),this.type=s.types.TRIMESH,this.vertices=new Float32Array(P),this.indices=new Int16Array(S),this.normals=new Float32Array(S.length),this.aabb=new l,this.edges=null,this.scale=new r(1,1,1),this.tree=new h,this.updateEdges(),this.updateNormals(),this.updateAABB(),this.updateBoundingSphereRadius(),this.updateTree()}u.prototype=new s,u.prototype.constructor=u;var c=new r;u.prototype.updateTree=function(){var P=this.tree;P.reset(),P.aabb.copy(this.aabb);var S=this.scale;P.aabb.lowerBound.x*=1/S.x,P.aabb.lowerBound.y*=1/S.y,P.aabb.lowerBound.z*=1/S.z,P.aabb.upperBound.x*=1/S.x,P.aabb.upperBound.y*=1/S.y,P.aabb.upperBound.z*=1/S.z;for(var M=new l,b=new r,F=new r,U=new r,W=[b,F,U],q=0;q<this.indices.length/3;q++){var ee=q*3;this._getUnscaledVertex(this.indices[ee],b),this._getUnscaledVertex(this.indices[ee+1],F),this._getUnscaledVertex(this.indices[ee+2],U),M.setFromPoints(W),P.insert(M,q)}P.removeEmptyNodes()};var d=new l;u.prototype.getTrianglesInAABB=function(P,S){d.copy(P);var M=this.scale,b=M.x,F=M.y,U=M.z,W=d.lowerBound,q=d.upperBound;return W.x/=b,W.y/=F,W.z/=U,q.x/=b,q.y/=F,q.z/=U,this.tree.aabbQuery(d,S)},u.prototype.setScale=function(P){var S=this.scale.x===this.scale.y===this.scale.z,M=P.x===P.y===P.z;S&&M||this.updateNormals(),this.scale.copy(P),this.updateAABB(),this.updateBoundingSphereRadius()},u.prototype.updateNormals=function(){for(var P=c,S=this.normals,M=0;M<this.indices.length/3;M++){var b=M*3,F=this.indices[b],U=this.indices[b+1],W=this.indices[b+2];this.getVertex(F,p),this.getVertex(U,x),this.getVertex(W,y),u.computeNormal(x,p,y,P),S[b]=P.x,S[b+1]=P.y,S[b+2]=P.z}},u.prototype.updateEdges=function(){for(var P={},S=function(ee,O){var N=F<U?F+"_"+U:U+"_"+F;P[N]=!0},M=0;M<this.indices.length/3;M++){var b=M*3,F=this.indices[b],U=this.indices[b+1];this.indices[b+2],S(),S(),S()}var W=Object.keys(P);this.edges=new Int16Array(W.length*2);for(var M=0;M<W.length;M++){var q=W[M].split("_");this.edges[2*M]=parseInt(q[0],10),this.edges[2*M+1]=parseInt(q[1],10)}},u.prototype.getEdgeVertex=function(P,S,M){var b=this.edges[P*2+(S?1:0)];this.getVertex(b,M)};var f=new r,m=new r;u.prototype.getEdgeVector=function(P,S){var M=f,b=m;this.getEdgeVertex(P,0,M),this.getEdgeVertex(P,1,b),b.vsub(M,S)};var g=new r,v=new r;u.computeNormal=function(P,S,M,b){S.vsub(P,v),M.vsub(S,g),g.cross(v,b),b.isZero()||b.normalize()};var p=new r,x=new r,y=new r;u.prototype.getVertex=function(P,S){var M=this.scale;return this._getUnscaledVertex(P,S),S.x*=M.x,S.y*=M.y,S.z*=M.z,S},u.prototype._getUnscaledVertex=function(P,S){var M=P*3,b=this.vertices;return S.set(b[M],b[M+1],b[M+2])},u.prototype.getWorldVertex=function(P,S,M,b){return this.getVertex(P,b),a.pointToWorldFrame(S,M,b,b),b},u.prototype.getTriangleVertices=function(P,S,M,b){var F=P*3;this.getVertex(this.indices[F],S),this.getVertex(this.indices[F+1],M),this.getVertex(this.indices[F+2],b)},u.prototype.getNormal=function(P,S){var M=P*3;return S.set(this.normals[M],this.normals[M+1],this.normals[M+2])};var _=new l;u.prototype.calculateLocalInertia=function(P,S){this.computeLocalAABB(_);var M=_.upperBound.x-_.lowerBound.x,b=_.upperBound.y-_.lowerBound.y,F=_.upperBound.z-_.lowerBound.z;return S.set(1/12*P*(2*b*2*b+2*F*2*F),1/12*P*(2*M*2*M+2*F*2*F),1/12*P*(2*b*2*b+2*M*2*M))};var T=new r;u.prototype.computeLocalAABB=function(P){var S=P.lowerBound,M=P.upperBound,b=this.vertices.length;this.vertices;var F=T;this.getVertex(0,F),S.copy(F),M.copy(F);for(var U=0;U!==b;U++)this.getVertex(U,F),F.x<S.x?S.x=F.x:F.x>M.x&&(M.x=F.x),F.y<S.y?S.y=F.y:F.y>M.y&&(M.y=F.y),F.z<S.z?S.z=F.z:F.z>M.z&&(M.z=F.z)},u.prototype.updateAABB=function(){this.computeLocalAABB(this.aabb)},u.prototype.updateBoundingSphereRadius=function(){for(var P=0,S=this.vertices,M=new r,b=0,F=S.length/3;b!==F;b++){this.getVertex(b,M);var U=M.norm2();U>P&&(P=U)}this.boundingSphereRadius=Math.sqrt(P)},new r;var C=new a,I=new l;u.prototype.calculateWorldAABB=function(P,S,M,b){var F=C,U=I;F.position=P,F.quaternion=S,this.aabb.toWorldFrame(F,U),M.copy(U.lowerBound),b.copy(U.upperBound)},u.prototype.volume=function(){return 4*Math.PI*this.boundingSphereRadius/3},u.createTorus=function(P,S,M,b,F){P=P||1,S=S||.5,M=M||8,b=b||6,F=F||Math.PI*2;for(var U=[],W=[],q=0;q<=M;q++)for(var ee=0;ee<=b;ee++){var O=ee/b*F,N=q/M*Math.PI*2,te=(P+S*Math.cos(N))*Math.cos(O),J=(P+S*Math.cos(N))*Math.sin(O),B=S*Math.sin(N);U.push(te,J,B)}for(var q=1;q<=M;q++)for(var ee=1;ee<=b;ee++){var Q=(b+1)*q+ee-1,z=(b+1)*(q-1)+ee-1,A=(b+1)*(q-1)+ee,R=(b+1)*q+ee;W.push(Q,z,R),W.push(z,A,R)}return new u(U,W)}},{"../collision/AABB":3,"../math/Quaternion":28,"../math/Transform":29,"../math/Vec3":30,"../utils/Octree":50,"./Shape":43}],46:[function(t,n,i){n.exports=r,t("../math/Vec3"),t("../math/Quaternion");var s=t("./Solver");function r(){s.call(this),this.iterations=10,this.tolerance=1e-7}r.prototype=new s;var a=[],l=[],h=[];r.prototype.solve=function(u,c){var d=0,f=this.iterations,m=this.tolerance*this.tolerance,g=this.equations,v=g.length,p=c.bodies,x=p.length,y=u,_,T,C,I,P,S;if(v!==0)for(var M=0;M!==x;M++)p[M].updateSolveMassProperties();var b=l,F=h,U=a;b.length=v,F.length=v,U.length=v;for(var M=0;M!==v;M++){var W=g[M];U[M]=0,F[M]=W.computeB(y),b[M]=1/W.computeC()}if(v!==0){for(var M=0;M!==x;M++){var q=p[M],ee=q.vlambda,O=q.wlambda;ee.set(0,0,0),O&&O.set(0,0,0)}for(d=0;d!==f;d++){I=0;for(var N=0;N!==v;N++){var W=g[N];_=F[N],T=b[N],S=U[N],P=W.computeGWlambda(),C=T*(_-P-W.eps*S),S+C<W.minForce?C=W.minForce-S:S+C>W.maxForce&&(C=W.maxForce-S),U[N]+=C,I+=C>0?C:-C,W.addToWlambda(C)}if(I*I<m)break}for(var M=0;M!==x;M++){var q=p[M],te=q.velocity,J=q.angularVelocity;te.vadd(q.vlambda,te),J&&J.vadd(q.wlambda,J)}}return d}},{"../math/Quaternion":28,"../math/Vec3":30,"./Solver":47}],47:[function(t,n,i){n.exports=s;function s(){this.equations=[]}s.prototype.solve=function(r,a){return 0},s.prototype.addEquation=function(r){r.enabled&&this.equations.push(r)},s.prototype.removeEquation=function(r){var a=this.equations,l=a.indexOf(r);l!==-1&&a.splice(l,1)},s.prototype.removeAllEquations=function(){this.equations.length=0}},{}],48:[function(t,n,i){n.exports=a,t("../math/Vec3"),t("../math/Quaternion");var s=t("./Solver"),r=t("../objects/Body");function a(p){for(s.call(this),this.iterations=10,this.tolerance=1e-7,this.subsolver=p,this.nodes=[],this.nodePool=[];this.nodePool.length<128;)this.nodePool.push(this.createNode())}a.prototype=new s;var l=[],h=[],u={bodies:[]},c=r.STATIC;function d(p){for(var x=p.length,y=0;y!==x;y++){var _=p[y];if(!_.visited&&!(_.body.type&c))return _}return!1}var f=[];function m(p,x,y,_){for(f.push(p),p.visited=!0,x(p,y,_);f.length;)for(var T=f.pop(),C;C=d(T.children);)C.visited=!0,x(C,y,_),f.push(C)}function g(p,x,y){x.push(p.body);for(var _=p.eqs.length,T=0;T!==_;T++){var C=p.eqs[T];y.indexOf(C)===-1&&y.push(C)}}a.prototype.createNode=function(){return{body:null,children:[],eqs:[],visited:!1}},a.prototype.solve=function(p,x){for(var y=l,_=this.nodePool,T=x.bodies,C=this.equations,I=C.length,P=T.length,S=this.subsolver;_.length<P;)_.push(this.createNode());y.length=P;for(var M=0;M<P;M++)y[M]=_[M];for(var M=0;M!==P;M++){var b=y[M];b.body=T[M],b.children.length=0,b.eqs.length=0,b.visited=!1}for(var F=0;F!==I;F++){var U=C[F],M=T.indexOf(U.bi),W=T.indexOf(U.bj),q=y[M],ee=y[W];q.children.push(ee),q.eqs.push(U),ee.children.push(q),ee.eqs.push(U)}var O,N=0,te=h;S.tolerance=this.tolerance,S.iterations=this.iterations;for(var J=u;O=d(y);){te.length=0,J.bodies.length=0,m(O,g,J.bodies,te);var B=te.length;te=te.sort(v);for(var M=0;M!==B;M++)S.addEquation(te[M]);S.solve(p,J),S.removeAllEquations(),N++}return N};function v(p,x){return x.id-p.id}},{"../math/Quaternion":28,"../math/Vec3":30,"../objects/Body":31,"./Solver":47}],49:[function(t,n,i){var s=function(){};n.exports=s,s.prototype={constructor:s,addEventListener:function(r,a){this._listeners===void 0&&(this._listeners={});var l=this._listeners;return l[r]===void 0&&(l[r]=[]),l[r].indexOf(a)===-1&&l[r].push(a),this},hasEventListener:function(r,a){if(this._listeners===void 0)return!1;var l=this._listeners;return l[r]!==void 0&&l[r].indexOf(a)!==-1},removeEventListener:function(r,a){if(this._listeners===void 0)return this;var l=this._listeners;if(l[r]===void 0)return this;var h=l[r].indexOf(a);return h!==-1&&l[r].splice(h,1),this},dispatchEvent:function(r){if(this._listeners===void 0)return this;var a=this._listeners,l=a[r.type];if(l!==void 0){r.target=this;for(var h=0,u=l.length;h<u;h++)l[h].call(this,r)}return this}}},{}],50:[function(t,n,i){var s=t("../collision/AABB"),r=t("../math/Vec3");n.exports=l;function a(c){c=c||{},this.root=c.root||null,this.aabb=c.aabb?c.aabb.clone():new s,this.data=[],this.children=[]}function l(c,d){d=d||{},d.root=null,d.aabb=c,a.call(this,d),this.maxDepth=typeof d.maxDepth<"u"?d.maxDepth:8}l.prototype=new a,a.prototype.reset=function(c,d){this.children.length=this.data.length=0},a.prototype.insert=function(c,d,f){var m=this.data;if(f=f||0,!this.aabb.contains(c))return!1;var g=this.children;if(f<(this.maxDepth||this.root.maxDepth)){var v=!1;g.length||(this.subdivide(),v=!0);for(var p=0;p!==8;p++)if(g[p].insert(c,d,f+1))return!0;v&&(g.length=0)}return m.push(d),!0};var h=new r;a.prototype.subdivide=function(){var c=this.aabb,d=c.lowerBound,f=c.upperBound,m=this.children;m.push(new a({aabb:new s({lowerBound:new r(0,0,0)})}),new a({aabb:new s({lowerBound:new r(1,0,0)})}),new a({aabb:new s({lowerBound:new r(1,1,0)})}),new a({aabb:new s({lowerBound:new r(1,1,1)})}),new a({aabb:new s({lowerBound:new r(0,1,1)})}),new a({aabb:new s({lowerBound:new r(0,0,1)})}),new a({aabb:new s({lowerBound:new r(1,0,1)})}),new a({aabb:new s({lowerBound:new r(0,1,0)})})),f.vsub(d,h),h.scale(.5,h);for(var g=this.root||this,v=0;v!==8;v++){var p=m[v];p.root=g;var x=p.aabb.lowerBound;x.x*=h.x,x.y*=h.y,x.z*=h.z,x.vadd(d,x),x.vadd(h,p.aabb.upperBound)}},a.prototype.aabbQuery=function(c,d){this.data,this.children;for(var f=[this];f.length;){var m=f.pop();m.aabb.overlaps(c)&&Array.prototype.push.apply(d,m.data),Array.prototype.push.apply(f,m.children)}return d};var u=new s;a.prototype.rayQuery=function(c,d,f){return c.getAABB(u),u.toLocalFrame(d,u),this.aabbQuery(u,f),f},a.prototype.removeEmptyNodes=function(){for(var c=[this];c.length;){for(var d=c.pop(),f=d.children.length-1;f>=0;f--)d.children[f].data.length||d.children.splice(f,1);Array.prototype.push.apply(c,d.children)}}},{"../collision/AABB":3,"../math/Vec3":30}],51:[function(t,n,i){n.exports=s;function s(){this.objects=[],this.type=Object}s.prototype.release=function(){for(var r=arguments.length,a=0;a!==r;a++)this.objects.push(arguments[a])},s.prototype.get=function(){return this.objects.length===0?this.constructObject():this.objects.pop()},s.prototype.constructObject=function(){throw new Error("constructObject() not implemented in this Pool subclass yet!")}},{}],52:[function(t,n,i){n.exports=s;function s(){this.data={keys:[]}}s.prototype.get=function(r,a){if(r>a){var l=a;a=r,r=l}return this.data[r+"-"+a]},s.prototype.set=function(r,a,l){if(r>a){var h=a;a=r,r=h}var u=r+"-"+a;this.get(r,a)||this.data.keys.push(u),this.data[u]=l},s.prototype.reset=function(){for(var r=this.data,a=r.keys;a.length>0;){var l=a.pop();delete r[l]}}},{}],53:[function(t,n,i){function s(){}n.exports=s,s.defaults=function(r,a){r=r||{};for(var l in a)l in r||(r[l]=a[l]);return r}},{}],54:[function(t,n,i){n.exports=a;var s=t("../math/Vec3"),r=t("./Pool");function a(){r.call(this),this.type=s}a.prototype=new r,a.prototype.constructObject=function(){return new s}},{"../math/Vec3":30,"./Pool":51}],55:[function(t,n,i){n.exports=m;var s=t("../collision/AABB"),r=t("../shapes/Shape"),a=t("../collision/Ray"),l=t("../math/Vec3"),h=t("../math/Transform");t("../shapes/ConvexPolyhedron");var u=t("../math/Quaternion");t("../solver/Solver");var c=t("../utils/Vec3Pool"),d=t("../equations/ContactEquation"),f=t("../equations/FrictionEquation");function m(re){this.contactPointPool=[],this.frictionEquationPool=[],this.result=[],this.frictionResult=[],this.v3pool=new c,this.world=re,this.currentContactMaterial=null,this.enableFrictionReduction=!1}m.prototype.createContactEquation=function(re,ue,ge,_e,tt,Be){var Te;this.contactPointPool.length?(Te=this.contactPointPool.pop(),Te.bi=re,Te.bj=ue):Te=new d(re,ue),Te.enabled=re.collisionResponse&&ue.collisionResponse&&ge.collisionResponse&&_e.collisionResponse;var De=this.currentContactMaterial;Te.restitution=De.restitution,Te.setSpookParams(De.contactEquationStiffness,De.contactEquationRelaxation,this.world.dt);var se=ge.material||re.material,Ae=_e.material||ue.material;return se&&Ae&&se.restitution>=0&&Ae.restitution>=0&&(Te.restitution=se.restitution*Ae.restitution),Te.si=tt||ge,Te.sj=Be||_e,Te},m.prototype.createFrictionEquationsFromContact=function(re,ue){var ge=re.bi,_e=re.bj,tt=re.si,Be=re.sj,Te=this.world,De=this.currentContactMaterial,se=De.friction,Ae=tt.material||ge.material,Ie=Be.material||_e.material;if(Ae&&Ie&&Ae.friction>=0&&Ie.friction>=0&&(se=Ae.friction*Ie.friction),se>0){var Ye=se*Te.gravity.length(),Ce=ge.invMass+_e.invMass;Ce>0&&(Ce=1/Ce);var be=this.frictionEquationPool,Ne=be.length?be.pop():new f(ge,_e,Ye*Ce),Qe=be.length?be.pop():new f(ge,_e,Ye*Ce);return Ne.bi=Qe.bi=ge,Ne.bj=Qe.bj=_e,Ne.minForce=Qe.minForce=-Ye*Ce,Ne.maxForce=Qe.maxForce=Ye*Ce,Ne.ri.copy(re.ri),Ne.rj.copy(re.rj),Qe.ri.copy(re.ri),Qe.rj.copy(re.rj),re.ni.tangents(Ne.t,Qe.t),Ne.setSpookParams(De.frictionEquationStiffness,De.frictionEquationRelaxation,Te.dt),Qe.setSpookParams(De.frictionEquationStiffness,De.frictionEquationRelaxation,Te.dt),Ne.enabled=Qe.enabled=re.enabled,ue.push(Ne,Qe),!0}return!1};var g=new l,v=new l,p=new l;m.prototype.createFrictionFromAverage=function(re){var ue=this.result[this.result.length-1];if(!(!this.createFrictionEquationsFromContact(ue,this.frictionResult)||re===1)){var ge=this.frictionResult[this.frictionResult.length-2],_e=this.frictionResult[this.frictionResult.length-1];g.setZero(),v.setZero(),p.setZero();var tt=ue.bi;ue.bj;for(var Be=0;Be!==re;Be++)ue=this.result[this.result.length-1-Be],ue.bodyA!==tt?(g.vadd(ue.ni,g),v.vadd(ue.ri,v),p.vadd(ue.rj,p)):(g.vsub(ue.ni,g),v.vadd(ue.rj,v),p.vadd(ue.ri,p));var Te=1/re;v.scale(Te,ge.ri),p.scale(Te,ge.rj),_e.ri.copy(ge.ri),_e.rj.copy(ge.rj),g.normalize(),g.tangents(ge.t,_e.t)}};var x=new l,y=new l,_=new u,T=new u;m.prototype.getContacts=function(re,ue,ge,_e,tt,Be,Te){this.contactPointPool=tt,this.frictionEquationPool=Te,this.result=_e,this.frictionResult=Be;for(var De=_,se=T,Ae=x,Ie=y,Ye=0,Ce=re.length;Ye!==Ce;Ye++){var be=re[Ye],Ne=ue[Ye],Qe=null;be.material&&Ne.material&&(Qe=ge.getContactMaterial(be.material,Ne.material)||null);for(var at=0;at<be.shapes.length;at++){be.quaternion.mult(be.shapeOrientations[at],De),be.quaternion.vmult(be.shapeOffsets[at],Ae),Ae.vadd(be.position,Ae);for(var Me=be.shapes[at],ut=0;ut<Ne.shapes.length;ut++){Ne.quaternion.mult(Ne.shapeOrientations[ut],se),Ne.quaternion.vmult(Ne.shapeOffsets[ut],Ie),Ie.vadd(Ne.position,Ie);var w=Ne.shapes[ut];if(!(Ae.distanceTo(Ie)>Me.boundingSphereRadius+w.boundingSphereRadius)){var G=null;Me.material&&w.material&&(G=ge.getContactMaterial(Me.material,w.material)||null),this.currentContactMaterial=G||Qe||ge.defaultContactMaterial;var j=this[Me.type|w.type];j&&(Me.type<w.type?j.call(this,Me,w,Ae,Ie,De,se,be,Ne,Me,w):j.call(this,w,Me,Ie,Ae,se,De,Ne,be,Me,w))}}}}},m.prototype[r.types.BOX|r.types.BOX]=m.prototype.boxBox=function(re,ue,ge,_e,tt,Be,Te,De){re.convexPolyhedronRepresentation.material=re.material,ue.convexPolyhedronRepresentation.material=ue.material,re.convexPolyhedronRepresentation.collisionResponse=re.collisionResponse,ue.convexPolyhedronRepresentation.collisionResponse=ue.collisionResponse,this.convexConvex(re.convexPolyhedronRepresentation,ue.convexPolyhedronRepresentation,ge,_e,tt,Be,Te,De,re,ue)},m.prototype[r.types.BOX|r.types.CONVEXPOLYHEDRON]=m.prototype.boxConvex=function(re,ue,ge,_e,tt,Be,Te,De){re.convexPolyhedronRepresentation.material=re.material,re.convexPolyhedronRepresentation.collisionResponse=re.collisionResponse,this.convexConvex(re.convexPolyhedronRepresentation,ue,ge,_e,tt,Be,Te,De,re,ue)},m.prototype[r.types.BOX|r.types.PARTICLE]=m.prototype.boxParticle=function(re,ue,ge,_e,tt,Be,Te,De){re.convexPolyhedronRepresentation.material=re.material,re.convexPolyhedronRepresentation.collisionResponse=re.collisionResponse,this.convexParticle(re.convexPolyhedronRepresentation,ue,ge,_e,tt,Be,Te,De,re,ue)},m.prototype[r.types.SPHERE]=m.prototype.sphereSphere=function(re,ue,ge,_e,tt,Be,Te,De){var se=this.createContactEquation(Te,De,re,ue);_e.vsub(ge,se.ni),se.ni.normalize(),se.ri.copy(se.ni),se.rj.copy(se.ni),se.ri.mult(re.radius,se.ri),se.rj.mult(-ue.radius,se.rj),se.ri.vadd(ge,se.ri),se.ri.vsub(Te.position,se.ri),se.rj.vadd(_e,se.rj),se.rj.vsub(De.position,se.rj),this.result.push(se),this.createFrictionEquationsFromContact(se,this.frictionResult)};var C=new l,I=new l,P=new l;m.prototype[r.types.PLANE|r.types.TRIMESH]=m.prototype.planeTrimesh=function(re,ue,ge,_e,tt,Be,Te,De){var se=new l,Ae=C;Ae.set(0,0,1),tt.vmult(Ae,Ae);for(var Ie=0;Ie<ue.vertices.length/3;Ie++){ue.getVertex(Ie,se);var Ye=new l;Ye.copy(se),h.pointToWorldFrame(_e,Be,Ye,se);var Ce=I;se.vsub(ge,Ce);var be=Ae.dot(Ce);if(be<=0){var Ne=this.createContactEquation(Te,De,re,ue);Ne.ni.copy(Ae);var Qe=P;Ae.scale(Ce.dot(Ae),Qe),se.vsub(Qe,Qe),Ne.ri.copy(Qe),Ne.ri.vsub(Te.position,Ne.ri),Ne.rj.copy(se),Ne.rj.vsub(De.position,Ne.rj),this.result.push(Ne),this.createFrictionEquationsFromContact(Ne,this.frictionResult)}}};var S=new l,M=new l;new l;var b=new l,F=new l,U=new l,W=new l,q=new l,ee=new l,O=new l,N=new l,te=new l,J=new l,B=new l,Q=new s,z=[];m.prototype[r.types.SPHERE|r.types.TRIMESH]=m.prototype.sphereTrimesh=function(re,ue,ge,_e,tt,Be,Te,De){var se=U,Ae=W,Ie=q,Ye=ee,Ce=O,be=N,Ne=Q,Qe=F,at=M,Me=z;h.pointToLocalFrame(_e,Be,ge,Ce);var ut=re.radius;Ne.lowerBound.set(Ce.x-ut,Ce.y-ut,Ce.z-ut),Ne.upperBound.set(Ce.x+ut,Ce.y+ut,Ce.z+ut),ue.getTrianglesInAABB(Ne,Me);for(var w=b,G=re.radius*re.radius,j=0;j<Me.length;j++)for(var $=0;$<3;$++)if(ue.getVertex(ue.indices[Me[j]*3+$],w),w.vsub(Ce,at),at.norm2()<=G){Qe.copy(w),h.pointToWorldFrame(_e,Be,Qe,w),w.vsub(ge,at);var V=this.createContactEquation(Te,De,re,ue);V.ni.copy(at),V.ni.normalize(),V.ri.copy(V.ni),V.ri.scale(re.radius,V.ri),V.ri.vadd(ge,V.ri),V.ri.vsub(Te.position,V.ri),V.rj.copy(w),V.rj.vsub(De.position,V.rj),this.result.push(V),this.createFrictionEquationsFromContact(V,this.frictionResult)}for(var j=0;j<Me.length;j++)for(var $=0;$<3;$++){ue.getVertex(ue.indices[Me[j]*3+$],se),ue.getVertex(ue.indices[Me[j]*3+($+1)%3],Ae),Ae.vsub(se,Ie),Ce.vsub(Ae,be);var xe=be.dot(Ie);Ce.vsub(se,be);var Re=be.dot(Ie);if(Re>0&&xe<0){Ce.vsub(se,be),Ye.copy(Ie),Ye.normalize(),Re=be.dot(Ye),Ye.scale(Re,be),be.vadd(se,be);var Ue=be.distanceTo(Ce);if(Ue<re.radius){var V=this.createContactEquation(Te,De,re,ue);be.vsub(Ce,V.ni),V.ni.normalize(),V.ni.scale(re.radius,V.ri),h.pointToWorldFrame(_e,Be,be,be),be.vsub(De.position,V.rj),h.vectorToWorldFrame(Be,V.ni,V.ni),h.vectorToWorldFrame(Be,V.ri,V.ri),this.result.push(V),this.createFrictionEquationsFromContact(V,this.frictionResult)}}}for(var Ge=te,$e=J,We=B,Ke=S,j=0,et=Me.length;j!==et;j++){ue.getTriangleVertices(Me[j],Ge,$e,We),ue.getNormal(Me[j],Ke),Ce.vsub(Ge,be);var Ue=be.dot(Ke);if(Ke.scale(Ue,be),Ce.vsub(be,be),Ue=be.distanceTo(Ce),a.pointInTriangle(be,Ge,$e,We)&&Ue<re.radius){var V=this.createContactEquation(Te,De,re,ue);be.vsub(Ce,V.ni),V.ni.normalize(),V.ni.scale(re.radius,V.ri),h.pointToWorldFrame(_e,Be,be,be),be.vsub(De.position,V.rj),h.vectorToWorldFrame(Be,V.ni,V.ni),h.vectorToWorldFrame(Be,V.ri,V.ri),this.result.push(V),this.createFrictionEquationsFromContact(V,this.frictionResult)}}Me.length=0};var A=new l,R=new l;m.prototype[r.types.SPHERE|r.types.PLANE]=m.prototype.spherePlane=function(re,ue,ge,_e,tt,Be,Te,De){var se=this.createContactEquation(Te,De,re,ue);if(se.ni.set(0,0,1),Be.vmult(se.ni,se.ni),se.ni.negate(se.ni),se.ni.normalize(),se.ni.mult(re.radius,se.ri),ge.vsub(_e,A),se.ni.mult(se.ni.dot(A),R),A.vsub(R,se.rj),-A.dot(se.ni)<=re.radius){var Ae=se.ri,Ie=se.rj;Ae.vadd(ge,Ae),Ae.vsub(Te.position,Ae),Ie.vadd(_e,Ie),Ie.vsub(De.position,Ie),this.result.push(se),this.createFrictionEquationsFromContact(se,this.frictionResult)}};var k=new l,Z=new l,ne=new l;function Y(re,ue,ge){for(var _e=null,tt=re.length,Be=0;Be!==tt;Be++){var Te=re[Be],De=k;re[(Be+1)%tt].vsub(Te,De);var se=Z;De.cross(ue,se);var Ae=ne;ge.vsub(Te,Ae);var Ie=se.dot(Ae);if(_e===null||Ie>0&&_e===!0||Ie<=0&&_e===!1){_e===null&&(_e=Ie>0);continue}else return!1}return!0}var ie=new l,me=new l,Le=new l,ve=new l,D=[new l,new l,new l,new l,new l,new l],de=new l,he=new l,qe=new l,ye=new l;m.prototype[r.types.SPHERE|r.types.BOX]=m.prototype.sphereBox=function(re,ue,ge,_e,tt,Be,Te,De){var se=this.v3pool,Ae=D;ge.vsub(_e,ie),ue.getSideNormals(Ae,Be);for(var Ie=re.radius,Ye=!1,Ce=he,be=qe,Ne=ye,Qe=null,at=0,Me=0,ut=0,w=null,G=0,j=Ae.length;G!==j&&Ye===!1;G++){var $=me;$.copy(Ae[G]);var V=$.norm();$.normalize();var xe=ie.dot($);if(xe<V+Ie&&xe>0){var Re=Le,Ue=ve;Re.copy(Ae[(G+1)%3]),Ue.copy(Ae[(G+2)%3]);var Ge=Re.norm(),$e=Ue.norm();Re.normalize(),Ue.normalize();var We=ie.dot(Re),Ke=ie.dot(Ue);if(We<Ge&&We>-Ge&&Ke<$e&&Ke>-$e){var It=Math.abs(xe-V-Ie);(w===null||It<w)&&(w=It,Me=We,ut=Ke,Qe=V,Ce.copy($),be.copy(Re),Ne.copy(Ue),at++)}}}if(at){Ye=!0;var Ve=this.createContactEquation(Te,De,re,ue);Ce.mult(-Ie,Ve.ri),Ve.ni.copy(Ce),Ve.ni.negate(Ve.ni),Ce.mult(Qe,Ce),be.mult(Me,be),Ce.vadd(be,Ce),Ne.mult(ut,Ne),Ce.vadd(Ne,Ve.rj),Ve.ri.vadd(ge,Ve.ri),Ve.ri.vsub(Te.position,Ve.ri),Ve.rj.vadd(_e,Ve.rj),Ve.rj.vsub(De.position,Ve.rj),this.result.push(Ve),this.createFrictionEquationsFromContact(Ve,this.frictionResult)}for(var et=se.get(),mt=de,St=0;St!==2&&!Ye;St++)for(var gt=0;gt!==2&&!Ye;gt++)for(var st=0;st!==2&&!Ye;st++)if(et.set(0,0,0),St?et.vadd(Ae[0],et):et.vsub(Ae[0],et),gt?et.vadd(Ae[1],et):et.vsub(Ae[1],et),st?et.vadd(Ae[2],et):et.vsub(Ae[2],et),_e.vadd(et,mt),mt.vsub(ge,mt),mt.norm2()<Ie*Ie){Ye=!0;var Ve=this.createContactEquation(Te,De,re,ue);Ve.ri.copy(mt),Ve.ri.normalize(),Ve.ni.copy(Ve.ri),Ve.ri.mult(Ie,Ve.ri),Ve.rj.copy(et),Ve.ri.vadd(ge,Ve.ri),Ve.ri.vsub(Te.position,Ve.ri),Ve.rj.vadd(_e,Ve.rj),Ve.rj.vsub(De.position,Ve.rj),this.result.push(Ve),this.createFrictionEquationsFromContact(Ve,this.frictionResult)}se.release(et),et=null;for(var je=se.get(),Ct=se.get(),Ve=se.get(),Lt=se.get(),It=se.get(),Bt=Ae.length,St=0;St!==Bt&&!Ye;St++)for(var gt=0;gt!==Bt&&!Ye;gt++)if(St%3!==gt%3){Ae[gt].cross(Ae[St],je),je.normalize(),Ae[St].vadd(Ae[gt],Ct),Ve.copy(ge),Ve.vsub(Ct,Ve),Ve.vsub(_e,Ve);var an=Ve.dot(je);je.mult(an,Lt);for(var st=0;st===St%3||st===gt%3;)st++;It.copy(ge),It.vsub(Lt,It),It.vsub(Ct,It),It.vsub(_e,It);var Pt=Math.abs(an),nn=It.norm();if(Pt<Ae[st].norm()&&nn<Ie){Ye=!0;var xt=this.createContactEquation(Te,De,re,ue);Ct.vadd(Lt,xt.rj),xt.rj.copy(xt.rj),It.negate(xt.ni),xt.ni.normalize(),xt.ri.copy(xt.rj),xt.ri.vadd(_e,xt.ri),xt.ri.vsub(ge,xt.ri),xt.ri.normalize(),xt.ri.mult(Ie,xt.ri),xt.ri.vadd(ge,xt.ri),xt.ri.vsub(Te.position,xt.ri),xt.rj.vadd(_e,xt.rj),xt.rj.vsub(De.position,xt.rj),this.result.push(xt),this.createFrictionEquationsFromContact(xt,this.frictionResult)}}se.release(je,Ct,Ve,Lt,It)};var nt=new l,pe=new l,L=new l,E=new l,K=new l,le=new l,ce=new l,oe=new l,Ee=new l,we=new l;m.prototype[r.types.SPHERE|r.types.CONVEXPOLYHEDRON]=m.prototype.sphereConvex=function(re,ue,ge,_e,tt,Be,Te,De){var se=this.v3pool;ge.vsub(_e,nt);for(var Ae=ue.faceNormals,Ie=ue.faces,Ye=ue.vertices,Ce=re.radius,be=0;be!==Ye.length;be++){var Ne=Ye[be],Qe=K;Be.vmult(Ne,Qe),_e.vadd(Qe,Qe);var at=E;if(Qe.vsub(ge,at),at.norm2()<Ce*Ce){ut=!0;var Me=this.createContactEquation(Te,De,re,ue);Me.ri.copy(at),Me.ri.normalize(),Me.ni.copy(Me.ri),Me.ri.mult(Ce,Me.ri),Qe.vsub(_e,Me.rj),Me.ri.vadd(ge,Me.ri),Me.ri.vsub(Te.position,Me.ri),Me.rj.vadd(_e,Me.rj),Me.rj.vsub(De.position,Me.rj),this.result.push(Me),this.createFrictionEquationsFromContact(Me,this.frictionResult);return}}for(var ut=!1,be=0,w=Ie.length;be!==w&&ut===!1;be++){var G=Ae[be],j=Ie[be],$=le;Be.vmult(G,$);var V=ce;Be.vmult(Ye[j[0]],V),V.vadd(_e,V);var xe=oe;$.mult(-Ce,xe),ge.vadd(xe,xe);var Re=Ee;xe.vsub(V,Re);var Ue=Re.dot($),Ge=we;if(ge.vsub(V,Ge),Ue<0&&Ge.dot($)>0){for(var $e=[],We=0,Ke=j.length;We!==Ke;We++){var et=se.get();Be.vmult(Ye[j[We]],et),_e.vadd(et,et),$e.push(et)}if(Y($e,$,ge)){ut=!0;var Me=this.createContactEquation(Te,De,re,ue);$.mult(-Ce,Me.ri),$.negate(Me.ni);var mt=se.get();$.mult(-Ue,mt);var St=se.get();$.mult(-Ce,St),ge.vsub(_e,Me.rj),Me.rj.vadd(St,Me.rj),Me.rj.vadd(mt,Me.rj),Me.rj.vadd(_e,Me.rj),Me.rj.vsub(De.position,Me.rj),Me.ri.vadd(ge,Me.ri),Me.ri.vsub(Te.position,Me.ri),se.release(mt),se.release(St),this.result.push(Me),this.createFrictionEquationsFromContact(Me,this.frictionResult);for(var We=0,gt=$e.length;We!==gt;We++)se.release($e[We]);return}else for(var We=0;We!==j.length;We++){var st=se.get(),je=se.get();Be.vmult(Ye[j[(We+1)%j.length]],st),Be.vmult(Ye[j[(We+2)%j.length]],je),_e.vadd(st,st),_e.vadd(je,je);var Ct=pe;je.vsub(st,Ct);var Ve=L;Ct.unit(Ve);var Lt=se.get(),It=se.get();ge.vsub(st,It);var Bt=It.dot(Ve);Ve.mult(Bt,Lt),Lt.vadd(st,Lt);var an=se.get();if(Lt.vsub(ge,an),Bt>0&&Bt*Bt<Ct.norm2()&&an.norm2()<Ce*Ce){var Me=this.createContactEquation(Te,De,re,ue);Lt.vsub(_e,Me.rj),Lt.vsub(ge,Me.ni),Me.ni.normalize(),Me.ni.mult(Ce,Me.ri),Me.rj.vadd(_e,Me.rj),Me.rj.vsub(De.position,Me.rj),Me.ri.vadd(ge,Me.ri),Me.ri.vsub(Te.position,Me.ri),this.result.push(Me),this.createFrictionEquationsFromContact(Me,this.frictionResult);for(var We=0,gt=$e.length;We!==gt;We++)se.release($e[We]);se.release(st),se.release(je),se.release(Lt),se.release(an),se.release(It);return}se.release(st),se.release(je),se.release(Lt),se.release(an),se.release(It)}for(var We=0,gt=$e.length;We!==gt;We++)se.release($e[We])}}},new l,new l,m.prototype[r.types.PLANE|r.types.BOX]=m.prototype.planeBox=function(re,ue,ge,_e,tt,Be,Te,De){ue.convexPolyhedronRepresentation.material=ue.material,ue.convexPolyhedronRepresentation.collisionResponse=ue.collisionResponse,this.planeConvex(re,ue.convexPolyhedronRepresentation,ge,_e,tt,Be,Te,De)};var Fe=new l,ct=new l,Se=new l,He=new l;m.prototype[r.types.PLANE|r.types.CONVEXPOLYHEDRON]=m.prototype.planeConvex=function(re,ue,ge,_e,tt,Be,Te,De){var se=Fe,Ae=ct;Ae.set(0,0,1),tt.vmult(Ae,Ae);for(var Ie=0,Ye=Se,Ce=0;Ce!==ue.vertices.length;Ce++){se.copy(ue.vertices[Ce]),Be.vmult(se,se),_e.vadd(se,se),se.vsub(ge,Ye);var be=Ae.dot(Ye);if(be<=0){var Ne=this.createContactEquation(Te,De,re,ue),Qe=He;Ae.mult(Ae.dot(Ye),Qe),se.vsub(Qe,Qe),Qe.vsub(ge,Ne.ri),Ne.ni.copy(Ae),se.vsub(_e,Ne.rj),Ne.ri.vadd(ge,Ne.ri),Ne.ri.vsub(Te.position,Ne.ri),Ne.rj.vadd(_e,Ne.rj),Ne.rj.vsub(De.position,Ne.rj),this.result.push(Ne),Ie++,this.enableFrictionReduction||this.createFrictionEquationsFromContact(Ne,this.frictionResult)}}this.enableFrictionReduction&&Ie&&this.createFrictionFromAverage(Ie)};var Ze=new l,Je=new l;m.prototype[r.types.CONVEXPOLYHEDRON]=m.prototype.convexConvex=function(re,ue,ge,_e,tt,Be,Te,De,se,Ae,Ie,Ye){var Ce=Ze;if(!(ge.distanceTo(_e)>re.boundingSphereRadius+ue.boundingSphereRadius)&&re.findSeparatingAxis(ue,ge,tt,_e,Be,Ce,Ie,Ye)){var be=[],Ne=Je;re.clipAgainstHull(ge,tt,ue,_e,Be,Ce,-100,100,be);for(var Qe=0,at=0;at!==be.length;at++){var Me=this.createContactEquation(Te,De,re,ue,se,Ae),ut=Me.ri,w=Me.rj;Ce.negate(Me.ni),be[at].normal.negate(Ne),Ne.mult(be[at].depth,Ne),be[at].point.vadd(Ne,ut),w.copy(be[at].point),ut.vsub(ge,ut),w.vsub(_e,w),ut.vadd(ge,ut),ut.vsub(Te.position,ut),w.vadd(_e,w),w.vsub(De.position,w),this.result.push(Me),Qe++,this.enableFrictionReduction||this.createFrictionEquationsFromContact(Me,this.frictionResult)}this.enableFrictionReduction&&Qe&&this.createFrictionFromAverage(Qe)}};var Xe=new l,ht=new l,it=new l;m.prototype[r.types.PLANE|r.types.PARTICLE]=m.prototype.planeParticle=function(re,ue,ge,_e,tt,Be,Te,De){var se=Xe;se.set(0,0,1),Te.quaternion.vmult(se,se);var Ae=ht;_e.vsub(Te.position,Ae);var Ie=se.dot(Ae);if(Ie<=0){var Ye=this.createContactEquation(De,Te,ue,re);Ye.ni.copy(se),Ye.ni.negate(Ye.ni),Ye.ri.set(0,0,0);var Ce=it;se.mult(se.dot(_e),Ce),_e.vsub(Ce,Ce),Ye.rj.copy(Ce),this.result.push(Ye),this.createFrictionEquationsFromContact(Ye,this.frictionResult)}};var _t=new l;m.prototype[r.types.PARTICLE|r.types.SPHERE]=m.prototype.sphereParticle=function(re,ue,ge,_e,tt,Be,Te,De){var se=_t;se.set(0,0,1),_e.vsub(ge,se);var Ae=se.norm2();if(Ae<=re.radius*re.radius){var Ie=this.createContactEquation(De,Te,ue,re);se.normalize(),Ie.rj.copy(se),Ie.rj.mult(re.radius,Ie.rj),Ie.ni.copy(se),Ie.ni.negate(Ie.ni),Ie.ri.set(0,0,0),this.result.push(Ie),this.createFrictionEquationsFromContact(Ie,this.frictionResult)}};var X=new u,Pe=new l;new l;var ae=new l,fe=new l,ze=new l;m.prototype[r.types.PARTICLE|r.types.CONVEXPOLYHEDRON]=m.prototype.convexParticle=function(re,ue,ge,_e,tt,Be,Te,De){var se=-1,Ae=ae,Ie=ze,Ye=null,Ce=Pe;if(Ce.copy(_e),Ce.vsub(ge,Ce),tt.conjugate(X),X.vmult(Ce,Ce),re.pointIsInside(Ce)){re.worldVerticesNeedsUpdate&&re.computeWorldVertices(ge,tt),re.worldFaceNormalsNeedsUpdate&&re.computeWorldFaceNormals(tt);for(var be=0,Ne=re.faces.length;be!==Ne;be++){var Qe=[re.worldVertices[re.faces[be][0]]],at=re.worldFaceNormals[be];_e.vsub(Qe[0],fe);var Me=-at.dot(fe);(Ye===null||Math.abs(Me)<Math.abs(Ye))&&(Ye=Me,se=be,Ae.copy(at))}if(se!==-1){var ut=this.createContactEquation(De,Te,ue,re);Ae.mult(Ye,Ie),Ie.vadd(_e,Ie),Ie.vsub(ge,Ie),ut.rj.copy(Ie),Ae.negate(ut.ni),ut.ri.set(0,0,0);var w=ut.ri,G=ut.rj;w.vadd(_e,w),w.vsub(De.position,w),G.vadd(ge,G),G.vsub(Te.position,G),this.result.push(ut),this.createFrictionEquationsFromContact(ut,this.frictionResult)}else console.warn("Point found inside convex, but did not find penetrating face!")}},m.prototype[r.types.BOX|r.types.HEIGHTFIELD]=m.prototype.boxHeightfield=function(re,ue,ge,_e,tt,Be,Te,De){re.convexPolyhedronRepresentation.material=re.material,re.convexPolyhedronRepresentation.collisionResponse=re.collisionResponse,this.convexHeightfield(re.convexPolyhedronRepresentation,ue,ge,_e,tt,Be,Te,De)};var Oe=new l,rt=new l,bt=[0];m.prototype[r.types.CONVEXPOLYHEDRON|r.types.HEIGHTFIELD]=m.prototype.convexHeightfield=function(re,ue,ge,_e,tt,Be,Te,De){var se=ue.data,Ae=ue.elementSize,Ie=re.boundingSphereRadius,Ye=rt,Ce=bt,be=Oe;h.pointToLocalFrame(_e,Be,ge,be);var Ne=Math.floor((be.x-Ie)/Ae)-1,Qe=Math.ceil((be.x+Ie)/Ae)+1,at=Math.floor((be.y-Ie)/Ae)-1,Me=Math.ceil((be.y+Ie)/Ae)+1;if(!(Qe<0||Me<0||Ne>se.length||at>se[0].length)){Ne<0&&(Ne=0),Qe<0&&(Qe=0),at<0&&(at=0),Me<0&&(Me=0),Ne>=se.length&&(Ne=se.length-1),Qe>=se.length&&(Qe=se.length-1),Me>=se[0].length&&(Me=se[0].length-1),at>=se[0].length&&(at=se[0].length-1);var ut=[];ue.getRectMinMax(Ne,at,Qe,Me,ut);var w=ut[0],G=ut[1];if(!(be.z-Ie>G||be.z+Ie<w))for(var j=Ne;j<Qe;j++)for(var $=at;$<Me;$++)ue.getConvexTrianglePillar(j,$,!1),h.pointToWorldFrame(_e,Be,ue.pillarOffset,Ye),ge.distanceTo(Ye)<ue.pillarConvex.boundingSphereRadius+re.boundingSphereRadius&&this.convexConvex(re,ue.pillarConvex,ge,Ye,tt,Be,Te,De,null,null,Ce,null),ue.getConvexTrianglePillar(j,$,!0),h.pointToWorldFrame(_e,Be,ue.pillarOffset,Ye),ge.distanceTo(Ye)<ue.pillarConvex.boundingSphereRadius+re.boundingSphereRadius&&this.convexConvex(re,ue.pillarConvex,ge,Ye,tt,Be,Te,De,null,null,Ce,null)}};var Ut=new l,ot=new l;m.prototype[r.types.SPHERE|r.types.HEIGHTFIELD]=m.prototype.sphereHeightfield=function(re,ue,ge,_e,tt,Be,Te,De){var se=ue.data,Ae=re.radius,Ie=ue.elementSize,Ye=ot,Ce=Ut;h.pointToLocalFrame(_e,Be,ge,Ce);var be=Math.floor((Ce.x-Ae)/Ie)-1,Ne=Math.ceil((Ce.x+Ae)/Ie)+1,Qe=Math.floor((Ce.y-Ae)/Ie)-1,at=Math.ceil((Ce.y+Ae)/Ie)+1;if(!(Ne<0||at<0||be>se.length||at>se[0].length)){be<0&&(be=0),Ne<0&&(Ne=0),Qe<0&&(Qe=0),at<0&&(at=0),be>=se.length&&(be=se.length-1),Ne>=se.length&&(Ne=se.length-1),at>=se[0].length&&(at=se[0].length-1),Qe>=se[0].length&&(Qe=se[0].length-1);var Me=[];ue.getRectMinMax(be,Qe,Ne,at,Me);var ut=Me[0],w=Me[1];if(!(Ce.z-Ae>w||Ce.z+Ae<ut))for(var G=this.result,j=be;j<Ne;j++)for(var $=Qe;$<at;$++){var V=G.length;ue.getConvexTrianglePillar(j,$,!1),h.pointToWorldFrame(_e,Be,ue.pillarOffset,Ye),ge.distanceTo(Ye)<ue.pillarConvex.boundingSphereRadius+re.boundingSphereRadius&&this.sphereConvex(re,ue.pillarConvex,ge,Ye,tt,Be,Te,De),ue.getConvexTrianglePillar(j,$,!0),h.pointToWorldFrame(_e,Be,ue.pillarOffset,Ye),ge.distanceTo(Ye)<ue.pillarConvex.boundingSphereRadius+re.boundingSphereRadius&&this.sphereConvex(re,ue.pillarConvex,ge,Ye,tt,Be,Te,De);var xe=G.length-V;if(xe>2)return}}}},{"../collision/AABB":3,"../collision/Ray":9,"../equations/ContactEquation":19,"../equations/FrictionEquation":21,"../math/Quaternion":28,"../math/Transform":29,"../math/Vec3":30,"../shapes/ConvexPolyhedron":38,"../shapes/Shape":43,"../solver/Solver":47,"../utils/Vec3Pool":54}],56:[function(t,n,i){n.exports=_;var s=t("../shapes/Shape"),r=t("../math/Vec3"),a=t("../math/Quaternion"),l=t("../solver/GSSolver");t("../utils/Vec3Pool"),t("../equations/ContactEquation"),t("../equations/FrictionEquation");var h=t("./Narrowphase"),u=t("../utils/EventTarget"),c=t("../collision/ArrayCollisionMatrix"),d=t("../material/Material"),f=t("../material/ContactMaterial"),m=t("../objects/Body"),g=t("../utils/TupleDictionary"),v=t("../collision/RaycastResult"),p=t("../collision/AABB"),x=t("../collision/Ray"),y=t("../collision/NaiveBroadphase");function _(){u.apply(this),this.dt=-1,this.allowSleep=!1,this.contacts=[],this.frictionEquations=[],this.quatNormalizeSkip=0,this.quatNormalizeFast=!1,this.time=0,this.stepnumber=0,this.default_dt=1/60,this.nextId=0,this.gravity=new r,this.broadphase=new y,this.bodies=[],this.solver=new l,this.constraints=[],this.narrowphase=new h(this),this.collisionMatrix=new c,this.collisionMatrixPrevious=new c,this.materials=[],this.contactmaterials=[],this.contactMaterialTable=new g,this.defaultMaterial=new d("default"),this.defaultContactMaterial=new f(this.defaultMaterial,this.defaultMaterial,{friction:.3,restitution:0}),this.doProfiling=!1,this.profile={solve:0,makeContactConstraints:0,broadphase:0,integrate:0,narrowphase:0},this.subsystems=[],this.addBodyEvent={type:"addBody",body:null},this.removeBodyEvent={type:"removeBody",body:null}}_.prototype=new u,new p;var T=new x;if(_.prototype.getContactMaterial=function(N,te){return this.contactMaterialTable.get(N.id,te.id)},_.prototype.numObjects=function(){return this.bodies.length},_.prototype.collisionMatrixTick=function(){var N=this.collisionMatrixPrevious;this.collisionMatrixPrevious=this.collisionMatrix,this.collisionMatrix=N,this.collisionMatrix.reset()},_.prototype.add=_.prototype.addBody=function(N){this.bodies.indexOf(N)===-1&&(N.index=this.bodies.length,this.bodies.push(N),N.world=this,N.initPosition.copy(N.position),N.initVelocity.copy(N.velocity),N.timeLastSleepy=this.time,N instanceof m&&(N.initAngularVelocity.copy(N.angularVelocity),N.initQuaternion.copy(N.quaternion)),this.collisionMatrix.setNumObjects(this.bodies.length),this.addBodyEvent.body=N,this.dispatchEvent(this.addBodyEvent))},_.prototype.addConstraint=function(N){this.constraints.push(N)},_.prototype.removeConstraint=function(N){var te=this.constraints.indexOf(N);te!==-1&&this.constraints.splice(te,1)},_.prototype.rayTest=function(N,te,J){J instanceof v?this.raycastClosest(N,te,{skipBackfaces:!0},J):this.raycastAll(N,te,{skipBackfaces:!0},J)},_.prototype.raycastAll=function(N,te,J,B){return J.mode=x.ALL,J.from=N,J.to=te,J.callback=B,T.intersectWorld(this,J)},_.prototype.raycastAny=function(N,te,J,B){return J.mode=x.ANY,J.from=N,J.to=te,J.result=B,T.intersectWorld(this,J)},_.prototype.raycastClosest=function(N,te,J,B){return J.mode=x.CLOSEST,J.from=N,J.to=te,J.result=B,T.intersectWorld(this,J)},_.prototype.remove=function(N){N.world=null;var te=this.bodies.length-1,J=this.bodies,B=J.indexOf(N);if(B!==-1){J.splice(B,1);for(var Q=0;Q!==J.length;Q++)J[Q].index=Q;this.collisionMatrix.setNumObjects(te),this.removeBodyEvent.body=N,this.dispatchEvent(this.removeBodyEvent)}},_.prototype.removeBody=_.prototype.remove,_.prototype.addMaterial=function(N){this.materials.push(N)},_.prototype.addContactMaterial=function(N){this.contactmaterials.push(N),this.contactMaterialTable.set(N.materials[0].id,N.materials[1].id,N)},typeof performance>"u"&&(performance={}),!performance.now){var C=Date.now();performance.timing&&performance.timing.navigationStart&&(C=performance.timing.navigationStart),performance.now=function(){return Date.now()-C}}var I=new r;_.prototype.step=function(N,te,J){if(J=J||10,te=te||0,te===0)this.internalStep(N),this.time+=N;else{var B=Math.floor((this.time+te)/N)-Math.floor(this.time/N);B=Math.min(B,J);for(var Q=performance.now(),z=0;z!==B&&(this.internalStep(N),!(performance.now()-Q>N*1e3));z++);this.time+=te;for(var A=this.time%N,R=A/N,k=I,Z=this.bodies,ne=0;ne!==Z.length;ne++){var Y=Z[ne];Y.type!==m.STATIC&&Y.sleepState!==m.SLEEPING?(Y.position.vsub(Y.previousPosition,k),k.scale(R,k),Y.position.vadd(k,Y.interpolatedPosition)):(Y.interpolatedPosition.copy(Y.position),Y.interpolatedQuaternion.copy(Y.quaternion))}}};var P={type:"postStep"},S={type:"preStep"},M={type:"collide",body:null,contact:null},b=[],F=[],U=[],W=[];new r,new r,new r,new r,new r,new r,new r,new r,new r,new a;var q=new a,ee=new a,O=new r;_.prototype.internalStep=function(N){this.dt=N;var te=this.contacts,J=U,B=W,Q=this.numObjects(),z=this.bodies,A=this.solver,R=this.gravity,k=this.doProfiling,Z=this.profile,ne=m.DYNAMIC,Y,ie=this.constraints,me=F;R.norm();var Le=R.x,ve=R.y,D=R.z,de=0;for(k&&(Y=performance.now()),de=0;de!==Q;de++){var he=z[de];if(he.type&ne){var qe=he.force,ye=he.mass;qe.x+=ye*Le,qe.y+=ye*ve,qe.z+=ye*D}}for(var de=0,nt=this.subsystems.length;de!==nt;de++)this.subsystems[de].update();k&&(Y=performance.now()),J.length=0,B.length=0,this.broadphase.collisionPairs(this,J,B),k&&(Z.broadphase=performance.now()-Y);var Ze=ie.length;for(de=0;de!==Ze;de++){var pe=ie[de];if(!pe.collideConnected)for(var L=J.length-1;L>=0;L-=1)(pe.bodyA===J[L]&&pe.bodyB===B[L]||pe.bodyB===J[L]&&pe.bodyA===B[L])&&(J.splice(L,1),B.splice(L,1))}this.collisionMatrixTick(),k&&(Y=performance.now());var E=b,K=te.length;for(de=0;de!==K;de++)E.push(te[de]);te.length=0;var le=this.frictionEquations.length;for(de=0;de!==le;de++)me.push(this.frictionEquations[de]);this.frictionEquations.length=0,this.narrowphase.getContacts(J,B,this,te,E,this.frictionEquations,me),k&&(Z.narrowphase=performance.now()-Y),k&&(Y=performance.now());for(var de=0;de<this.frictionEquations.length;de++)A.addEquation(this.frictionEquations[de]);for(var ce=te.length,oe=0;oe!==ce;oe++){var pe=te[oe],he=pe.bi,Ee=pe.bj;pe.si,pe.sj;var we;if(he.material&&Ee.material?we=this.getContactMaterial(he.material,Ee.material)||this.defaultContactMaterial:we=this.defaultContactMaterial,we.friction,he.material&&Ee.material&&(he.material.friction>=0&&Ee.material.friction>=0&&he.material.friction*Ee.material.friction,he.material.restitution>=0&&Ee.material.restitution>=0&&(pe.restitution=he.material.restitution*Ee.material.restitution)),A.addEquation(pe),he.allowSleep&&he.type===m.DYNAMIC&&he.sleepState===m.SLEEPING&&Ee.sleepState===m.AWAKE&&Ee.type!==m.STATIC){var Fe=Ee.velocity.norm2()+Ee.angularVelocity.norm2(),ct=Math.pow(Ee.sleepSpeedLimit,2);Fe>=ct*2&&(he._wakeUpAfterNarrowphase=!0)}if(Ee.allowSleep&&Ee.type===m.DYNAMIC&&Ee.sleepState===m.SLEEPING&&he.sleepState===m.AWAKE&&he.type!==m.STATIC){var Se=he.velocity.norm2()+he.angularVelocity.norm2(),He=Math.pow(he.sleepSpeedLimit,2);Se>=He*2&&(Ee._wakeUpAfterNarrowphase=!0)}this.collisionMatrix.set(he,Ee,!0),this.collisionMatrixPrevious.get(he,Ee)||(M.body=Ee,M.contact=pe,he.dispatchEvent(M),M.body=he,Ee.dispatchEvent(M))}for(k&&(Z.makeContactConstraints=performance.now()-Y,Y=performance.now()),de=0;de!==Q;de++){var he=z[de];he._wakeUpAfterNarrowphase&&(he.wakeUp(),he._wakeUpAfterNarrowphase=!1)}var Ze=ie.length;for(de=0;de!==Ze;de++){var pe=ie[de];pe.update();for(var L=0,Je=pe.equations.length;L!==Je;L++){var Xe=pe.equations[L];A.addEquation(Xe)}}A.solve(N,this),k&&(Z.solve=performance.now()-Y),A.removeAllEquations();var ht=Math.pow;for(de=0;de!==Q;de++){var he=z[de];if(he.type&ne){var it=ht(1-he.linearDamping,N),_t=he.velocity;_t.mult(it,_t);var X=he.angularVelocity;if(X){var Pe=ht(1-he.angularDamping,N);X.mult(Pe,X)}}}for(this.dispatchEvent(S),de=0;de!==Q;de++){var he=z[de];he.preStep&&he.preStep.call(he)}k&&(Y=performance.now());var ae=q,fe=ee,ze=this.stepnumber,Oe=m.DYNAMIC|m.KINEMATIC,rt=ze%(this.quatNormalizeSkip+1)===0,bt=this.quatNormalizeFast,Ut=N*.5;for(s.types.PLANE,s.types.CONVEXPOLYHEDRON,de=0;de!==Q;de++){var ot=z[de],re=ot.force,ue=ot.torque;if(ot.type&Oe&&ot.sleepState!==m.SLEEPING){var ge=ot.velocity,_e=ot.angularVelocity,tt=ot.position,Be=ot.quaternion,Te=ot.invMass,De=ot.invInertiaWorld;ge.x+=re.x*Te*N,ge.y+=re.y*Te*N,ge.z+=re.z*Te*N,ot.angularVelocity&&(De.vmult(ue,O),O.mult(N,O),O.vadd(_e,_e)),tt.x+=ge.x*N,tt.y+=ge.y*N,tt.z+=ge.z*N,ot.angularVelocity&&(ae.set(_e.x,_e.y,_e.z,0),ae.mult(Be,fe),Be.x+=Ut*fe.x,Be.y+=Ut*fe.y,Be.z+=Ut*fe.z,Be.w+=Ut*fe.w,rt&&(bt?Be.normalizeFast():Be.normalize())),ot.aabb&&(ot.aabbNeedsUpdate=!0),ot.updateInertiaWorld&&ot.updateInertiaWorld()}}for(this.clearForces(),this.broadphase.dirty=!0,k&&(Z.integrate=performance.now()-Y),this.time+=N,this.stepnumber+=1,this.dispatchEvent(P),de=0;de!==Q;de++){var he=z[de],se=he.postStep;se&&se.call(he)}if(this.allowSleep)for(de=0;de!==Q;de++)z[de].sleepTick(this.time)},_.prototype.clearForces=function(){for(var N=this.bodies,te=N.length,J=0;J!==te;J++){var B=N[J];B.force,B.torque,B.force.set(0,0,0),B.torque.set(0,0,0)}}},{"../collision/AABB":3,"../collision/ArrayCollisionMatrix":4,"../collision/NaiveBroadphase":7,"../collision/Ray":9,"../collision/RaycastResult":10,"../equations/ContactEquation":19,"../equations/FrictionEquation":21,"../material/ContactMaterial":24,"../material/Material":25,"../math/Quaternion":28,"../math/Vec3":30,"../objects/Body":31,"../shapes/Shape":43,"../solver/GSSolver":46,"../utils/EventTarget":49,"../utils/TupleDictionary":52,"../utils/Vec3Pool":54,"./Narrowphase":55}]},{},[2])(2)})})(no)),no.exports}var $v=Zv();const Dt=Kv($v);class Ts{constructor(){this.callbacks={},this.callbacks.base={}}on(e,t){return typeof e>"u"||e===""?(console.warn("wrong names"),!1):typeof t>"u"?(console.warn("wrong callback"),!1):(this.resolveNames(e).forEach(i=>{const s=this.resolveName(i);this.callbacks[s.namespace]instanceof Object||(this.callbacks[s.namespace]={}),this.callbacks[s.namespace][s.value]instanceof Array||(this.callbacks[s.namespace][s.value]=[]),this.callbacks[s.namespace][s.value].push(t)}),this)}off(e){return typeof e>"u"||e===""?(console.warn("wrong name"),!1):(this.resolveNames(e).forEach(n=>{const i=this.resolveName(n);if(i.namespace!=="base"&&i.value==="")delete this.callbacks[i.namespace];else if(i.namespace==="base")for(const s in this.callbacks)this.callbacks[s]instanceof Object&&this.callbacks[s][i.value]instanceof Array&&(delete this.callbacks[s][i.value],Object.keys(this.callbacks[s]).length===0&&delete this.callbacks[s]);else this.callbacks[i.namespace]instanceof Object&&this.callbacks[i.namespace][i.value]instanceof Array&&(delete this.callbacks[i.namespace][i.value],Object.keys(this.callbacks[i.namespace]).length===0&&delete this.callbacks[i.namespace])}),this)}trigger(e,t){if(typeof e>"u"||e==="")return console.warn("wrong name"),!1;let n=null;const i=t instanceof Array?t:[];let s=this.resolveNames(e);if(s=this.resolveName(s[0]),s.namespace==="base")for(const r in this.callbacks)this.callbacks[r]instanceof Object&&this.callbacks[r][s.value]instanceof Array&&this.callbacks[r][s.value].forEach(function(a){a.apply(this,i)});else if(this.callbacks[s.namespace]instanceof Object){if(s.value==="")return console.warn("wrong name"),this;this.callbacks[s.namespace][s.value].forEach(function(r){r.apply(this,i)})}return n}resolveNames(e){let t=e;return t=t.replace(/[^a-zA-Z0-9 ,/.]/g,""),t=t.replace(/[,/]+/g," "),t=t.split(" "),t}resolveName(e){const t={},n=e.split(".");return t.original=e,t.value=n[0],t.namespace="base",n.length>1&&n[1]!==""&&(t.namespace=n[1]),t}}class Jv extends Ts{constructor(){super(),this.width=window.innerWidth,this.height=window.innerHeight,this.pixelRatio=Math.min(window.devicePixelRatio,2),window.addEventListener("resize",()=>{this.width=window.innerWidth,this.height=window.innerHeight,this.pixelRatio=Math.min(window.devicePixelRatio,2),this.trigger("resize")})}}class Qv extends Ts{constructor(){super(),this.start=Date.now(),this.current=this.start,this.elapsed=0,this.delta=16,window.requestAnimationFrame(()=>{this.tick()})}tick(){const e=Date.now();this.delta=e-this.current,this.current=e,this.elapsed=this.current-this.start,this.trigger("tick"),window.requestAnimationFrame(()=>{this.tick()})}}class eg{constructor(){this.game=new on,this.sizes=this.game.sizes,this.scene=this.game.scene,this.offset=new H(20,15.5,24),this.setInstance()}setInstance(){this.instance=new $t(35,this.sizes.width/this.sizes.height,.1,100),this.instance.position.copy(this.offset),this.scene.add(this.instance)}resize(){this.instance.aspect=this.sizes.width/this.sizes.height,this.instance.updateProjectionMatrix()}update(){var t;const e=(t=this.game.world)==null?void 0:t.car;e&&(this.instance.position.copy(e.position).add(this.offset),this.instance.lookAt(e.position))}}class tg{constructor(){this.game=new on,this.sizes=this.game.sizes,this.scene=this.game.scene,this.canvas=this.game.canvas,this.camera=this.game.camera,this.setInstance()}setInstance(){this.instance=new jv({canvas:this.canvas,antialias:!0}),this.instance.toneMapping=sc,this.instance.toneMappingExposure=1.75,this.instance.shadowMap.enabled=!0,this.instance.shadowMap.type=nc,this.instance.setSize(this.sizes.width,this.sizes.height),this.instance.setPixelRatio(this.sizes.pixelRatio)}resize(){this.instance.setSize(this.sizes.width,this.sizes.height),this.instance.setPixelRatio(this.sizes.pixelRatio)}update(){this.instance.render(this.scene,this.camera.instance)}}class ng{constructor(){this.Game=new on,this.scene=this.Game.scene,this.ressources=this.Game.ressources,this.physics=this.Game.physics,this.setGeometry(),this.setMaterial(),this.setMesh(),this.setPhysicsBody()}setGeometry(){this.geometry=new gr(40,68)}setMaterial(){this.material=new xa({matcap:this.ressources.items.grassColorTexture}),this.material.matcap.colorSpace=Vt}setMesh(){this.mesh=new Nt(this.geometry,this.material),this.mesh.rotation.x=-Math.PI*.5,this.scene.add(this.mesh)}setPhysicsBody(){const e=new Dt.Plane;this.body=new Dt.Body({mass:0}),this.body.addShape(e),this.body.quaternion.setFromAxisAngle(new Dt.Vec3(-1,0,0),Math.PI*.5),this.physics.world.addBody(this.body)}}class ig extends Ts{constructor(){super(),this.setActions(),this.setKeyboard()}setActions(){this.actions={up:!1,right:!1,down:!1,left:!1,brake:!1,boost:!1},document.addEventListener("visibilitychange",()=>{document.hidden||(this.actions.up=!1,this.actions.right=!1,this.actions.down=!1,this.actions.left=!1,this.actions.brake=!1,this.actions.boost=!1)})}setKeyboard(){this._onKeyDown=e=>{switch(e.code){case"ArrowUp":case"KeyW":case"KeyZ":this.actions.up=!0;break;case"ArrowRight":case"KeyD":this.actions.right=!0;break;case"ArrowDown":case"KeyS":this.actions.down=!0;break;case"ArrowLeft":case"KeyA":case"KeyQ":this.actions.left=!0;break;case"ControlLeft":case"ControlRight":case"Space":this.actions.brake=!0;break;case"ShiftLeft":case"ShiftRight":this.actions.boost=!0;break}},this._onKeyUp=e=>{switch(e.code){case"ArrowUp":case"KeyW":case"KeyZ":this.actions.up=!1;break;case"ArrowRight":case"KeyD":this.actions.right=!1;break;case"ArrowDown":case"KeyS":this.actions.down=!1;break;case"ArrowLeft":case"KeyA":case"KeyQ":this.actions.left=!1;break;case"ControlLeft":case"ControlRight":case"Space":this.actions.brake=!1;break;case"ShiftLeft":case"ShiftRight":this.actions.boost=!1;break}},document.addEventListener("keydown",this._onKeyDown),document.addEventListener("keyup",this._onKeyUp)}}class sg{constructor(){this.game=new on,this.scene=this.game.scene,this.resources=this.game.ressources,this.physics=this.game.physics,this.time=this.game.time,this.options={chassisMass:40,wheelRadius:.25,wheelSuspensionStiffness:50,wheelSuspensionRestLength:.1,wheelFrictionSlip:10,wheelDampingRelaxation:1.8,wheelDampingCompression:1.5,wheelMaxSuspensionForce:1e5,wheelRollInfluence:.01,wheelMaxSuspensionTravel:.3,wheelCustomSlidingRotationalSpeed:-30,steeringSpeed:.005*3,steeringMax:Math.PI*.17,acceleratingSpeed:272,acceleratingSpeedBoost:476,maxSpeed:.055*3/17,maxSpeedBoost:.11*3/17,brakeStrength:1.35},this.steering=0,this.speed=0,this.goingForward=!0,this.position=new H,this._oldPosition=new H,this.movement={speed:new H,localSpeed:new H,acceleration:new H,localAcceleration:new H},this.controls=new ig,this.wheels=[],this.setModel(),this.setPhysics(),this.setMovement(),this.setAntena()}setModel(){this.model=this.resources.items.carModel.scene,this.carMat=new xa({matcap:this.resources.items.matcapTexture}),this.carMat.matcap.colorSpace=Vt,this.carMeshes=[],this.model.traverse(t=>{t.isMesh&&(t.material=this.carMat,this.carMeshes.push(t))}),this.group=new Mn,this.group.add(this.model),this.scene.add(this.group);const e=[{name:"wheel_fl",steering:!0},{name:"wheel_fr",steering:!0},{name:"wheel_bl",steering:!1},{name:"wheel_br",steering:!1}];for(const{name:t,steering:n}of e){const i=this.model.getObjectByName(t);i&&this.wheels.push({mesh:i,steering:n,worldPos:i.getWorldPosition(new H)})}this.wheels.forEach(t=>this.scene.attach(t.mesh))}setPhysics(){this.chassisBody=new Dt.Body({mass:this.options.chassisMass}),this.chassisBody.allowSleep=!1;let e=!1;if(this.model.traverse(r=>{var a,l;((a=r.userData)==null?void 0:a.data)==="collision"&&((l=r.userData)==null?void 0:l.shape)==="box"&&(r.visible=!1,e=!0,this.chassisBody.addShape(new Dt.Box(new Dt.Vec3(r.scale.x,r.scale.y,r.scale.z)),new Dt.Vec3(r.position.x,r.position.y,r.position.z)))}),!e){const r=new An().setFromObject(this.model),a=new H,l=new H;r.getCenter(a),r.getSize(l),this.chassisBody.addShape(new Dt.Box(new Dt.Vec3(l.x/2,l.y/3,l.z/2)),new Dt.Vec3(a.x,a.y,a.z))}const t=this.options.wheelSuspensionRestLength,n=this.options.wheelRadius,i=this.wheels.length>0?this.wheels[0].worldPos.y+.2:0;this.chassisBody.position.set(0,t+n-i+.2,0),this.vehicle=new Dt.RaycastVehicle({chassisBody:this.chassisBody,indexRightAxis:0,indexUpAxis:1,indexForwardAxis:2});const s=this.options;this.wheels.forEach(r=>{this.vehicle.addWheel({radius:s.wheelRadius,suspensionStiffness:s.wheelSuspensionStiffness,suspensionRestLength:s.wheelSuspensionRestLength,frictionSlip:s.wheelFrictionSlip,dampingRelaxation:s.wheelDampingRelaxation,dampingCompression:s.wheelDampingCompression,maxSuspensionForce:s.wheelMaxSuspensionForce,rollInfluence:s.wheelRollInfluence,maxSuspensionTravel:s.wheelMaxSuspensionTravel,customSlidingRotationalSpeed:s.wheelCustomSlidingRotationalSpeed,useCustomSlidingRotationalSpeed:!0,directionLocal:new Dt.Vec3(0,-1,0),axleLocal:new Dt.Vec3(-1,0,0),chassisConnectionPointLocal:new Dt.Vec3(r.worldPos.x,r.worldPos.y+.2,r.worldPos.z)}),r.index=this.vehicle.wheelInfos.length-1}),this.vehicle.addToWorld(this.physics.world)}setMovement(){this.time.on("tick",()=>{const e=new H;e.copy(this.group.position).sub(this._oldPosition),e.multiplyScalar(1/this.time.delta*17),this.movement.acceleration=e.clone().sub(this.movement.speed),this.movement.speed.copy(e);const t=this.group.rotation.y;this.movement.localSpeed=this.movement.speed.clone().applyAxisAngle(new H(0,1,0),-t),this.movement.localAcceleration=this.movement.acceleration.clone().applyAxisAngle(new H(0,1,0),-t)})}setAntena(){const e=this.model.getObjectByName("antena");e&&(this.antena={object:e,speedStrength:10,damping:.035,pullBackStrength:.02,speed:new ft,absolutePosition:new ft,localPosition:new ft},this.time.on("tick",()=>{const n=Math.min(Math.max(this.movement.acceleration.x,-1),1),i=Math.min(Math.max(this.movement.acceleration.z,-1),1);this.antena.speed.x-=n*this.antena.speedStrength,this.antena.speed.y-=i*this.antena.speedStrength;const s=this.antena.absolutePosition.clone(),r=s.negate().multiplyScalar(s.length()*this.antena.pullBackStrength);this.antena.speed.add(r),this.antena.speed.x*=1-this.antena.damping,this.antena.speed.y*=1-this.antena.damping,this.antena.absolutePosition.add(this.antena.speed),this.antena.localPosition.copy(this.antena.absolutePosition),this.antena.localPosition.rotateAround(new ft,-this.group.rotation.y),this.antena.object.rotation.z=this.antena.localPosition.x*.1,this.antena.object.rotation.x=this.antena.localPosition.y*.1}))}_applyWheelOptions(){for(const e of this.vehicle.wheelInfos)e.radius=this.options.wheelRadius,e.suspensionStiffness=this.options.wheelSuspensionStiffness,e.suspensionRestLength=this.options.wheelSuspensionRestLength,e.maxSuspensionTravel=this.options.wheelMaxSuspensionTravel,e.frictionSlip=this.options.wheelFrictionSlip,e.dampingRelaxation=this.options.wheelDampingRelaxation,e.dampingCompression=this.options.wheelDampingCompression,e.rollInfluence=this.options.wheelRollInfluence}resetPosition(){this.chassisBody.position.set(0,1,0),this.chassisBody.velocity.set(0,0,0),this.chassisBody.angularVelocity.set(0,0,0),this.chassisBody.quaternion.set(0,0,0,1)}flashRed(){const e=new Jt({color:16719904});let t=0;const n=setInterval(()=>{var s,r;const i=t%2===0;(s=this.carMeshes)==null||s.forEach(a=>a.material=i?e:this.carMat),t++,t>=10&&(clearInterval(n),(r=this.carMeshes)==null||r.forEach(a=>a.material=this.carMat))},130)}knockback(e){if(this.isInvincible)return!1;this.isInvincible=!0;const t=this.chassisBody.position,n=t.x-e.x,i=t.z-e.z,s=Math.sqrt(n*n+i*i)||1,r=18;return this.chassisBody.velocity.set(n/s*r,3,i/s*r),this.chassisBody.angularVelocity.set(0,0,0),this.flashRed(),setTimeout(()=>{this.isInvincible=!1},2e3),!0}update(){this._oldPosition.copy(this.group.position);const e=this.controls.disabled??!1,{up:t,down:n,left:i,right:s,brake:r,boost:a}=e?{up:!1,down:!1,left:!1,right:!1,brake:!0,boost:!1}:this.controls.actions,l=this.chassisBody.velocity;this.speed=Math.hypot(l.x,l.y,l.z)/1e3;const h=new Tn(this.chassisBody.quaternion.x,this.chassisBody.quaternion.y,this.chassisBody.quaternion.z,this.chassisBody.quaternion.w),u=new H(0,0,-1).applyQuaternion(h),c=new H(l.x,l.y,l.z);this.goingForward=c.dot(u)>0;const d=this.time.delta*this.options.steeringSpeed;s?this.steering+=d:i?this.steering-=d:Math.abs(this.steering)>d?this.steering-=d*Math.sign(this.steering):this.steering=0,this.steering=Math.max(-this.options.steeringMax,Math.min(this.options.steeringMax,this.steering)),this.wheels.forEach(p=>{p.steering&&this.vehicle.setSteeringValue(-this.steering,p.index)});const f=a?this.options.acceleratingSpeedBoost:this.options.acceleratingSpeed,m=a?this.options.maxSpeedBoost:this.options.maxSpeed;let g=0;if(t&&(g=this.speed<m||!this.goingForward?f:0),n&&(g=this.speed<m||this.goingForward?-f:0),this.wheels.forEach(p=>{p.steering?this.vehicle.applyEngineForce(0,p.index):this.vehicle.applyEngineForce(-g,p.index)}),!t&&!n){const p=new Dt.Vec3(-l.x*.1,0,-l.z*.1);this.chassisBody.applyImpulse(p,this.chassisBody.position)}const v=r?this.options.brakeStrength:0;this.wheels.forEach(p=>this.vehicle.setBrake(v,p.index)),this.group.position.copy(this.chassisBody.position),this.group.quaternion.copy(this.chassisBody.quaternion),this.position.copy(this.group.position);for(let p=0;p<this.vehicle.wheelInfos.length;p++){this.vehicle.updateWheelTransform(p);const x=this.vehicle.wheelInfos[p].worldTransform,y=this.wheels[p];y!=null&&y.mesh&&(y.mesh.position.set(x.position.x,x.position.y,x.position.z),y.mesh.quaternion.set(x.quaternion.x,x.quaternion.y,x.quaternion.z,x.quaternion.w))}}}class rg{constructor(){const e=new on().scene;e.background=new lt(8900331),e.fog=null}}const tr=40,io=4,Xl=24;class og{constructor(){this.game=new on,this.scene=this.game.scene,this.physics=this.game.physics,this._buildVisual(),this._buildPhysics()}_buildVisual(){const e=new _r(tr,tr,io,64,6,!0),t=new Xn({uniforms:{uColor:{value:new lt(4500223)},uHeight:{value:io}},vertexShader:`
                varying float vY;
                void main() {
                    vY = position.y;
                    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
                }
            `,fragmentShader:`
                uniform vec3  uColor;
                uniform float uHeight;
                varying float vY;
                void main() {
                    // vY va de -uHeight/2 (bas) à +uHeight/2 (haut)
                    float t     = 1.0 - (vY + uHeight * 0.5) / uHeight; // 1 en bas, 0 en haut
                    float alpha = t * 0.72;
                    gl_FragColor = vec4(uColor, alpha);
                }
            `,transparent:!0,side:fn,depthWrite:!1}),n=new Nt(e,t);n.position.y=io/2,this.scene.add(n)}_buildPhysics(){for(let e=0;e<Xl;e++){const t=e/Xl*Math.PI*2,n=new H(-Math.cos(t),0,-Math.sin(t)),i=new Tn().setFromUnitVectors(new H(0,0,1),n),s=new Dt.Body({mass:0});s.addShape(new Dt.Plane),s.position.set(Math.cos(t)*tr,0,Math.sin(t)*tr),s.quaternion.set(i.x,i.y,i.z,i.w),this.physics.world.addBody(s)}}}class ag{constructor(){this.score=0,this._injectStyles(),this._createHUD()}_injectStyles(){const e=document.createElement("style");e.textContent=`
            @keyframes scoreFloat {
                0%   { opacity: 1; transform: translate(-50%, 0) scale(1.3); }
                100% { opacity: 0; transform: translate(-50%, -90px) scale(0.9); }
            }
            .score-popup {
                position: fixed;
                left: 50%;
                top: 38%;
                font-family: 'Inter', sans-serif;
                font-size: 26px;
                font-weight: 900;
                color: #ffffff;
                text-shadow: 2px 2px 5px #000;
                text-align: center;
                pointer-events: none;
                z-index: 200;
                animation: scoreFloat 1.8s ease-out forwards;
            }
        `,document.head.appendChild(e)}_createHUD(){this.hudEl=document.createElement("div"),this.hudEl.style.cssText=`
            position: fixed; top: 20px; left: 50%;
            transform: translateX(-50%);
            font-family: 'Inter', sans-serif;
            font-size: 34px; font-weight: 900; color: #fff;
            text-shadow: 2px 2px 6px #000;
            pointer-events: none; z-index: 100; letter-spacing: 3px;
        `,this.hudEl.textContent="0 PTS",document.body.appendChild(this.hudEl)}add(e,t=""){this.score+=e,this.hudEl.textContent=`${this.score} PTS`;const n=document.createElement("div");n.className="score-popup",n.textContent=t?`${t}
+${e} pts`:`+${e} pts`,document.body.appendChild(n),setTimeout(()=>n.remove(),1800)}}class lg extends Ts{constructor({balls:e=0,rings:t=0,rocks:n=0,timeSeconds:i=30,level:s=1}={}){super(),this.game=new on,this.timeLeft=i,this.totalTime=i,this.finished=!1,this.level=s,this._defs=[],e>0&&this._defs.push({key:"balls",label:"Boules d'énergie",total:e,done:0}),t>0&&this._defs.push({key:"rings",label:"Anneaux",total:t,done:0}),n>0&&this._defs.push({key:"rocks",label:"Structures",total:n,done:0}),this._injectStyles(),this._buildTimerBar(),this._buildObjectivesPanel(),this._buildTimerHUD(),this.game.time.on("tick",()=>this._tick())}_tick(){if(!this.finished){if(this.timeLeft-=this.game.time.delta/1e3,this.timeLeft<=0){this.timeLeft=0,this.finished=!0,this._updateTimer(),this.trigger("levelFailed");return}this._updateTimer()}}complete(e){if(this.finished)return;const t=this._defs.find(n=>n.key===e);!t||t.done>=t.total||(t.done++,this._updateObjectiveRow(t),this._allDone()&&(this.finished=!0,this.trigger("levelComplete")))}_allDone(){return this._defs.every(e=>e.done>=e.total)}destroy(){var e,t,n;this.finished=!0,(e=this._barEl)==null||e.remove(),(t=this._panelEl)==null||t.remove(),(n=this._timerEl)==null||n.remove()}_buildObjectivesPanel(){this._panelEl=document.createElement("div"),this._panelEl.className="obj-panel";const e=document.createElement("div");e.className="obj-title",e.textContent=`Niveau ${this.level} — Objectifs`,this._panelEl.appendChild(e),this._rowEls={};for(const t of this._defs){const n=document.createElement("div");n.className="obj-row";const i=document.createElement("div");i.className="obj-check";const s=document.createElement("div");s.className="obj-label",s.textContent=t.label;const r=document.createElement("div");r.className="obj-count",r.textContent=`0 / ${t.total}`,n.append(i,s,r),this._panelEl.appendChild(n),this._rowEls[t.key]={row:n,check:i,count:r}}document.body.appendChild(this._panelEl)}_updateObjectiveRow(e){const t=this._rowEls[e.key];t.count.textContent=`${e.done} / ${e.total}`,e.done>=e.total&&t.row.classList.add("done")}_buildTimerBar(){this._barEl=document.createElement("div"),this._barEl.className="timer-bar-bg",this._barFillEl=document.createElement("div"),this._barFillEl.className="timer-bar-fill",this._barFillEl.style.width="100%",this._barEl.appendChild(this._barFillEl),document.body.appendChild(this._barEl)}_updateTimerBar(){const e=Math.max(0,this.timeLeft/this.totalTime),t=this._barColor(e);this._barFillEl.style.width=`${e*100}%`,this._barFillEl.style.background=t,this._barFillEl.style.boxShadow=`0 0 8px ${t}`}_barColor(e){if(e>.5){const t=(e-.5)*2;return`rgb(255, 255, ${Math.round(255*t)})`}else{const t=e*2;return`rgb(255, ${Math.round(255*t)}, 0)`}}_buildTimerHUD(){this._timerEl=document.createElement("div"),this._timerEl.className="timer-hud";const e=document.createElement("div");e.className="timer-label",e.textContent="TEMPS",this._timerValue=document.createElement("div"),this._timerValue.textContent=`${Math.ceil(this.timeLeft)}s`,this._timerEl.append(e,this._timerValue),document.body.appendChild(this._timerEl)}_updateTimer(){const e=Math.ceil(this.timeLeft);this._timerValue.textContent=`${e}s`,this.timeLeft<=10&&!this._timerEl.classList.contains("urgent")&&this._timerEl.classList.add("urgent"),this._updateTimerBar()}_showBanner(e,t){const n=document.createElement("div");n.className="obj-banner",n.textContent=e,n.style.color=t,n.style.textShadow=`0 0 30px ${t}`,document.body.appendChild(n),setTimeout(()=>n.remove(),3e3)}_injectStyles(){if(document.getElementById("obj-manager-styles"))return;const e=document.createElement("style");e.id="obj-manager-styles",e.textContent=`
            @keyframes timerPulse {
                0%, 100% { transform: scale(1); }
                50%       { transform: scale(1.1); }
            }
            @keyframes bannerIn {
                0%   { opacity: 0; transform: translate(-50%, -50%) scale(0.7); }
                20%  { opacity: 1; transform: translate(-50%, -50%) scale(1.05); }
                80%  { opacity: 1; transform: translate(-50%, -50%) scale(1); }
                100% { opacity: 0; transform: translate(-50%, -50%) scale(0.95); }
            }

            .timer-bar-bg {
                position: fixed; top: 0; left: 0; right: 0;
                height: 6px;
                background: rgba(0, 0, 0, 0.35);
                z-index: 200; pointer-events: none;
            }
            .timer-bar-fill {
                position: absolute; right: 0; top: 0; bottom: 0;
                background: #fff;
                transition: width 0.1s linear;
            }

            .obj-panel {
                position: fixed; top: 20px; left: 20px;
                background: rgba(0, 0, 0, 0.55);
                padding: 14px 18px;
                font-family: 'Inter', sans-serif;
                pointer-events: none; z-index: 100;
                min-width: 210px;
            }
            .obj-title {
                font-size: 10px; font-weight: 900; letter-spacing: 3px;
                color: rgba(255, 255, 255, 0.4); text-transform: uppercase;
                margin-bottom: 12px;
            }
            .obj-row {
                display: flex; align-items: center; gap: 10px;
                margin-bottom: 8px; transition: opacity 0.4s;
            }
            .obj-row.done { opacity: 0.4; }
            .obj-check {
                width: 18px; height: 18px; flex-shrink: 0;
                border: 2px solid rgba(255, 255, 255, 0.35);
                border-radius: 50%;
                display: flex; align-items: center; justify-content: center;
                font-size: 11px; font-weight: 900; color: #000;
                transition: background 0.3s, border-color 0.3s;
            }
            .obj-row.done .obj-check {
                background: #44ff88; border-color: #44ff88;
            }
            .obj-label {
                flex: 1; font-size: 13px; font-weight: 700;
                color: #fff; letter-spacing: 0.5px;
            }
            .obj-count {
                font-size: 13px; font-weight: 700;
                color: rgba(255, 255, 255, 0.5);
            }
            .obj-row.done .obj-count { color: #44ff88; }

            .timer-hud {
                position: fixed; top: 20px; right: 20px;
                font-family: 'Inter', sans-serif;
                pointer-events: none; z-index: 100;
                text-align: right;
            }
            .timer-label {
                font-size: 10px; font-weight: 900; letter-spacing: 3px;
                color: rgba(255, 255, 255, 0.4); text-transform: uppercase;
                margin-bottom: 2px;
            }
            .timer-hud > div:last-child {
                font-size: 44px; font-weight: 900; color: #fff;
                text-shadow: 0 0 20px rgba(68, 204, 255, 0.5), 2px 2px 6px #000;
                letter-spacing: 2px; line-height: 1;
            }
            .timer-hud.urgent > div:last-child {
                color: #ff4444;
                text-shadow: 0 0 24px rgba(255, 68, 68, 0.8), 2px 2px 6px #000;
                animation: timerPulse 0.5s ease-in-out infinite;
            }

            .obj-banner {
                position: fixed; top: 50%; left: 50%;
                transform: translate(-50%, -50%);
                font-family: 'Inter', sans-serif;
                font-size: 48px; font-weight: 900; letter-spacing: 4px;
                pointer-events: none; z-index: 300;
                animation: bannerIn 3s ease-in-out forwards;
                white-space: nowrap;
            }
        `,document.head.appendChild(e)}}const cg=36,ql=6,hg=5;class ug{getConfig(e){const t=Math.min(2+e,7),n=Math.min(e,4),i=Math.max(0,e-2),s=Math.min((3+Math.floor((e-1)/2))*3,21),r=Math.max(12,22-(e-1)*2);return{balls:t,rings:n,rocks:i,obstacles:s,timeSeconds:r}}generatePositions({balls:e,rings:t,rocks:n,obstacles:i=3}){const s=[],r=Array.from({length:e},()=>{const u=this._randomPoint(s);return s.push(u),new H(u.x,1,u.z)}),a=Array.from({length:t},()=>{const u=this._randomPoint(s);s.push(u);const c=Math.random()*Math.PI,d=new H(Math.sin(c),0,Math.cos(c));return{pos:new H(u.x,3.9,u.z),normal:d,points:100}}),l=Array.from({length:n},()=>{const u=this._randomPoint(s);return s.push(u),new H(u.x,0,u.z)}),h=Array.from({length:i},()=>{const u=this._randomPoint(s);return s.push(u),new H(u.x,0,u.z)});return{ballPositions:r,ringData:a,rockPositions:l,obstaclePositions:h}}_randomPoint(e=[]){for(let n=0;n<150;n++){const i=Math.random()*Math.PI*2,s=Math.sqrt(Math.random())*(cg-ql)+ql,r=Math.cos(i)*s,a=Math.sin(i)*s;if(!e.some(h=>Math.hypot(h.x-r,h.z-a)<hg))return{x:r,z:a}}const t=e.length/8*Math.PI*2;return{x:Math.cos(t)*12,z:Math.sin(t)*12}}}let so=null;class _s{constructor(){if(so)return so;so=this,this.music=new Audio("/sounds/musicgame.mp3"),this.collect=new Audio("/sounds/collectsound.mp3"),this.damage=new Audio("/sounds/damagesound.mp3"),this.music.loop=!0,this.music.volume=.4,this.collect.volume=.7,this.damage.volume=.8}playMusic(){this.music.currentTime=0,this.music.play().catch(()=>{})}stopMusic(){this.music.pause(),this.music.currentTime=0}playCollect(){this.collect.currentTime=0,this.collect.play().catch(()=>{})}playDamage(){this.damage.currentTime=0,this.damage.play().catch(()=>{})}}const dg=1.5;class fg{constructor(e,t=50){this.game=new on,this.scene=this.game.scene,this.time=this.game.time,this.points=t,this.collected=!1,this.baseY=e.y,this._build(e)}_build(e){this.group=new Mn,this.group.position.set(e.x,e.y,e.z),this.coreMesh=new Nt(new zi(.35,16,16),new Jt({color:65535}));const t=new Nt(new zi(.52,16,16),new Jt({color:6745855,transparent:!0,opacity:.45,side:Yt})),n=new Nt(new zi(.82,16,16),new Jt({color:17663,transparent:!0,opacity:.12,side:Yt}));this.orbit=new Nt(new Es(.58,.03,8,32),new Jt({color:65535})),this.group.add(this.coreMesh,t,n,this.orbit),this.scene.add(this.group)}update(){if(this.collected)return;const e=this.game.world.car;if(!e)return;if(this.group.position.distanceTo(e.position)<dg){this._collect();return}const t=this.time.elapsed*.001;this.group.position.y=this.baseY+Math.sin(t*2.4)*.18,this.group.rotation.y=t*.9,this.orbit.rotation.x=t*1.8,this.coreMesh.scale.setScalar(1+Math.sin(t*5.5)*.08)}destroy(){this.collected=!0,this.scene.remove(this.group)}_collect(){var e,t;this.collected=!0,this.scene.remove(this.group),(e=this.game.world.scoreManager)==null||e.add(this.points),(t=this.game.world.objectiveManager)==null||t.complete("balls"),new _s().playCollect()}}class pg{constructor(e,t=new H(0,0,1),n=2.5,i=100){this.game=new on,this.scene=this.game.scene,this.time=this.game.time,this.center=e.clone(),this.normal=t.clone().normalize(),this.radius=n,this.points=i,this.triggered=!1,this.prevPerp=null,this._build()}_build(){this.group=new Mn,this.group.position.copy(this.center),this.group.quaternion.setFromUnitVectors(new H(0,0,1),this.normal),this.ringMat=new Jt({color:16753152}),this.ringMesh=new Nt(new Es(this.radius,.14,14,80),this.ringMat),this.diskMat=new Jt({color:16755200,transparent:!0,opacity:.1,side:fn,depthWrite:!1}),this.diskMesh=new Nt(new gr(this.radius-.14,80),this.diskMat),this.innerMat=new Jt({color:16772744,transparent:!0,opacity:.55}),this.innerMesh=new Nt(new Es(this.radius*.78,.05,8,80),this.innerMat),this.group.add(this.ringMesh,this.diskMesh,this.innerMesh),this.scene.add(this.group)}update(){const e=this.game.world.car;if(!e||this.triggered)return;const t=new H().subVectors(e.position,this.center),n=t.dot(this.normal),i=t.clone().addScaledVector(this.normal,-n);i.y=0,i.length()<this.radius&&this.prevPerp!==null&&n!==0&&Math.sign(n)!==Math.sign(this.prevPerp)&&this._trigger(),this.prevPerp=n;const r=this.time.elapsed*.001;this.ringMesh.scale.setScalar(1+Math.sin(r*2.8)*.04),this.innerMesh.rotation.z=r*.6,this.diskMat.opacity=.08+Math.sin(r*3.5)*.04}destroy(){this.triggered=!0,this.scene.remove(this.group)}_trigger(){var e,t;this.triggered=!0,(e=this.game.world.scoreManager)==null||e.add(this.points),(t=this.game.world.objectiveManager)==null||t.complete("rings"),new _s().playCollect(),this.ringMat.color.set(16777215),this.innerMat.color.set(16777215),this.diskMat.opacity=.55,setTimeout(()=>this.scene.remove(this.group),600)}}const Bn=1,Yl=.05,mg=.55,vg=15;class gg{constructor(e){this.game=new on,this.scene=this.game.scene,this.physics=this.game.physics,this.time=this.game.time,this.origin=e.clone(),this.blocks=[],this._structureCompleted=!1;const t=new xa({matcap:this.game.ressources.items.rockColorTexture});for(let n=0;n<2;n++)for(let i=0;i<3;i++){const s=(i-1)*(Bn+Yl),r=n*(Bn+Yl)+Bn/2,a=this.origin.x+s,l=this.origin.y+r,h=this.origin.z,u=new Nt(new Qi(Bn,Bn,Bn),t);u.position.set(a,l,h),this.scene.add(u);const c=new Dt.Body({mass:3});c.addShape(new Dt.Box(new Dt.Vec3(Bn/2,Bn/2,Bn/2))),c.position.set(a,l,h),c.linearDamping=.3,c.angularDamping=.4,this.physics.world.addBody(c),this.blocks.push({mesh:u,body:c,ix:a,iy:l,iz:h,fallen:!1})}}destroy(){for(const e of this.blocks)this.scene.remove(e.mesh),this.physics.world.remove(e.body);this.blocks=[]}update(){var e,t;for(const n of this.blocks)if(n.mesh.position.copy(n.body.position),n.mesh.quaternion.copy(n.body.quaternion),!n.fallen){const i=n.body.position.x-n.ix,s=n.body.position.y-n.iy,r=n.body.position.z-n.iz;Math.sqrt(i*i+s*s+r*r)>mg&&(n.fallen=!0,(e=this.game.world.scoreManager)==null||e.add(vg))}!this._structureCompleted&&this.blocks.every(n=>n.fallen)&&(this._structureCompleted=!0,(t=this.game.world.objectiveManager)==null||t.complete("rocks"))}}class _g{constructor(){this.lives=3,this.maxLives=3,this._injectStyles(),this._createHUD()}_injectStyles(){if(document.getElementById("life-manager-styles"))return;const e=document.createElement("style");e.id="life-manager-styles",e.textContent=`
            @keyframes heartLost {
                0%   { transform: scale(1); }
                30%  { transform: scale(1.5); }
                60%  { transform: scale(0.6); }
                100% { transform: scale(1); }
            }
            .life-heart {
                display: inline-flex;
                align-items: center;
                justify-content: center;
                transition: color 0.3s, filter 0.3s, opacity 0.3s;
                user-select: none;
                filter: drop-shadow(0 0 6px rgba(255, 255, 255, 0.82)) drop-shadow(2px 2px 3px #000);
            }
            .life-heart.lost {
                animation: heartLost 0.4s ease-out forwards;
            }
        `,document.head.appendChild(e)}_createHUD(){this.wrapper=document.createElement("div"),this.wrapper.style.cssText=`
            position: fixed; bottom: 24px; left: 50%;
            transform: translateX(-50%);
            display: flex; flex-direction: column; align-items: center; gap: 6px;
            pointer-events: none; z-index: 100;
        `,this.usernameEl=document.createElement("div"),this.usernameEl.style.cssText=`
            font-family: 'Inter', sans-serif;
            font-size: 11px; font-weight: 700;
            letter-spacing: 3px; text-transform: uppercase;
            color: rgba(255,255,255,0.55);
            text-shadow: 1px 1px 4px #000;
            display: none;
        `,this.wrapper.appendChild(this.usernameEl),this.container=document.createElement("div"),this.container.style.cssText="display: flex; gap: 12px; align-items: center;",this.wrapper.appendChild(this.container),this.hearts=[];for(let e=0;e<this.maxLives;e++){const t=document.createElement("div");t.className="life-heart",t.innerHTML=`<svg width="34" height="34" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M4.03553 1C1.80677 1 0 2.80677 0 5.03553C0 6.10582 0.42517 7.13228 1.18198 7.88909L7.14645 13.8536C7.34171 14.0488 7.65829 14.0488 7.85355 13.8536L13.818 7.88909C14.5748 7.13228 15 6.10582 15 5.03553C15 2.80677 13.1932 1 10.9645 1C9.89418 1 8.86772 1.42517 8.11091 2.18198L7.5 2.79289L6.88909 2.18198C6.13228 1.42517 5.10582 1 4.03553 1Z" fill="currentColor"/>
</svg>`,t.style.color="#fff",this.container.appendChild(t),this.hearts.push(t)}document.body.appendChild(this.wrapper)}setUsername(e){e&&(this.usernameEl.textContent=e,this.usernameEl.style.display="block")}loseLife(){if(this.lives<=0)return!0;this.lives--;const e=this.hearts[this.lives];return e.classList.add("lost"),e.style.color="rgba(80,80,80,0.4)",e.style.filter="none",e.style.opacity="0.35",setTimeout(()=>e.classList.remove("lost"),400),this.lives<=0}destroy(){var e;(e=this.wrapper)==null||e.remove()}}const us=.6,ro=.75,xg=.09,jl=20;class yg{constructor(e){this.game=new on,this.scene=this.game.scene,this.physics=this.game.physics,this.mat=new yr({color:13373713,emissive:16711680,emissiveIntensity:.4,roughness:.3,metalness:.6}),this.group=new Mn,this.group.add(new Nt(new zi(us,14,10),this.mat));const t=new _a(xg,ro,6),n=new H(0,1,0);for(let i=0;i<jl;i++){const s=Math.acos(1-2*(i+.5)/jl),r=Math.PI*(1+Math.sqrt(5))*i,a=new H(Math.sin(s)*Math.cos(r),Math.cos(s),Math.sin(s)*Math.sin(r)),l=new Nt(t,this.mat);l.position.copy(a).multiplyScalar(us+ro*.5),l.quaternion.setFromUnitVectors(n,a),this.group.add(l)}this.group.position.set(e.x,us,e.z),this.scene.add(this.group),this.body=new Dt.Body({mass:0}),this.body.addShape(new Dt.Sphere(us+ro*.45)),this.body.position.set(e.x,us,e.z),this.body.isObstacle=!0,this.physics.world.addBody(this.body),this._t=Math.random()*Math.PI*2}update(){this._t+=.022,this.group.rotation.y+=.007,this.group.rotation.x+=.004}destroy(){this.scene.remove(this.group),this.physics.world.remove(this.body),this.mat.dispose()}}const nr="http://45.155.169.226";let oo=null;class Ta{constructor(){if(oo)return oo;oo=this,this.token=null,this.user=null}get isLoggedIn(){return!!this.token&&!!this.user}async login(e,t){const n=await fetch(`${nr}/api/login`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({username:e,password:t})});if(!n.ok)throw new Error("Pseudo ou mot de passe incorrect");const{token:i}=await n.json();this.token=i;const s=await fetch(`${nr}/api/me`,{headers:{Authorization:`Bearer ${i}`}});if(!s.ok)throw new Error("Impossible de récupérer le profil");return this.user=await s.json(),this.user}async register(e,t,n){var s;const i=await fetch(`${nr}/api/users`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({email:e,username:t,plainPassword:n})});if(!i.ok){let r="Données invalides";try{const a=await i.json();(s=a.violations)!=null&&s.length?r=a.violations.map(l=>l.message).join(" • "):a.detail&&(r=a.detail)}catch{}throw new Error(r)}}async pushScore(e){if(!this.isLoggedIn)return!1;try{return(await fetch(`${nr}/api/games`,{method:"POST",headers:{"Content-Type":"application/json",Authorization:`Bearer ${this.token}`},body:JSON.stringify({score:e,user:`/api/users/${this.user.id}`})})).ok}catch{return!1}}}class Mg{constructor(){this.authService=new Ta,this._resolve=null,this._activeTab="login",this._loading=!1,this.promise=new Promise(e=>{this._resolve=e}),this._injectStyles(),this._render(),this._show()}_injectStyles(){if(document.getElementById("auth-modal-styles"))return;const e=document.createElement("style");e.id="auth-modal-styles",e.textContent=`
            @keyframes authFadeIn {
                from { opacity: 0; transform: translate(-50%, -48%) scale(0.96); }
                to   { opacity: 1; transform: translate(-50%, -50%) scale(1); }
            }
            #auth-overlay {
                display: none;
                position: fixed; inset: 0;
                background: rgba(0, 0, 0, 0.88);
                z-index: 1000;
            }
            #auth-card {
                position: absolute;
                top: 50%; left: 50%;
                transform: translate(-50%, -50%);
                background: #111;
                border: 1px solid rgba(255,255,255,0.08);
                width: 360px;
                padding: 36px 32px 28px;
                font-family: 'Inter', sans-serif;
                color: #fff;
                animation: authFadeIn 0.3s ease forwards;
            }
            #auth-logo {
                text-align: center;
                font-size: 11px;
                letter-spacing: 5px;
                color: rgba(255,255,255,0.3);
                text-transform: uppercase;
                margin-bottom: 28px;
            }
            #auth-tabs {
                display: flex;
                gap: 0;
                margin-bottom: 28px;
                border-bottom: 1px solid rgba(255,255,255,0.1);
            }
            .auth-tab {
                flex: 1;
                background: none;
                border: none;
                padding: 10px 0;
                font-family: 'Inter', sans-serif;
                font-size: 13px;
                font-weight: 700;
                letter-spacing: 2px;
                text-transform: uppercase;
                cursor: pointer;
                color: rgba(255,255,255,0.3);
                transition: color 0.2s;
                border-bottom: 2px solid transparent;
                margin-bottom: -1px;
            }
            .auth-tab.active {
                color: #fff;
                border-bottom-color: #fff;
            }
            .auth-form { display: none; flex-direction: column; gap: 14px; }
            .auth-form.active { display: flex; }
            .auth-field {
                display: flex;
                flex-direction: column;
                gap: 6px;
            }
            .auth-field label {
                font-size: 10px;
                letter-spacing: 2px;
                text-transform: uppercase;
                color: rgba(255,255,255,0.4);
            }
            .auth-field input {
                background: rgba(255,255,255,0.05);
                border: 1px solid rgba(255,255,255,0.12);
                color: #fff;
                font-family: 'Inter', sans-serif;
                font-size: 14px;
                padding: 11px 14px;
                outline: none;
                transition: border-color 0.2s;
            }
            .auth-field input:focus {
                border-color: rgba(255,255,255,0.4);
            }
            .auth-field input::placeholder { color: rgba(255,255,255,0.2); }
            #auth-error {
                font-size: 12px;
                color: #ff5555;
                letter-spacing: 0.5px;
                min-height: 18px;
                text-align: center;
            }
            .auth-submit {
                background: #fff;
                color: #000;
                border: none;
                font-family: 'Inter', sans-serif;
                font-size: 13px;
                font-weight: 900;
                letter-spacing: 3px;
                text-transform: uppercase;
                padding: 14px;
                cursor: pointer;
                margin-top: 4px;
                transition: background 0.2s, opacity 0.2s;
            }
            .auth-submit:hover { background: #e0e0e0; }
            .auth-submit:disabled { opacity: 0.4; cursor: not-allowed; }
            #auth-offline {
                display: block;
                background: none;
                border: none;
                font-family: 'Inter', sans-serif;
                font-size: 11px;
                letter-spacing: 2px;
                text-transform: uppercase;
                color: rgba(255,255,255,0.25);
                cursor: pointer;
                text-align: center;
                width: 100%;
                margin-top: 18px;
                padding: 6px;
                transition: color 0.2s;
            }
            #auth-offline:hover { color: rgba(255,255,255,0.55); }
            .auth-hint {
                font-size: 10px;
                color: rgba(255,255,255,0.2);
                letter-spacing: 0.5px;
                margin-top: -6px;
            }
        `,document.head.appendChild(e)}_render(){this.overlay=document.createElement("div"),this.overlay.id="auth-overlay",this.overlay.innerHTML=`
            <div id="auth-card">
                <div id="auth-tabs">
                    <button class="auth-tab active" data-tab="login">Connexion</button>
                    <button class="auth-tab" data-tab="register">Inscription</button>
                </div>

                <!-- Login form -->
                <form class="auth-form active" id="form-login" autocomplete="on">
                    <div class="auth-field">
                        <label>Pseudo</label>
                        <input type="text" name="username" placeholder="MonPseudo" autocomplete="username" required />
                    </div>
                    <div class="auth-field">
                        <label>Mot de passe</label>
                        <input type="password" name="password" placeholder="••••••••" autocomplete="current-password" required />
                    </div>
                    <div id="auth-error"></div>
                    <button class="auth-submit" type="submit">Se connecter</button>
                </form>

                <!-- Register form -->
                <form class="auth-form" id="form-register" autocomplete="off">
                    <div class="auth-field">
                        <label>Email</label>
                        <input type="email" name="email" placeholder="you@example.com" required />
                    </div>
                    <div class="auth-field">
                        <label>Pseudo</label>
                        <input type="text" name="username" placeholder="MonPseudo" required />
                    </div>
                    <div class="auth-field">
                        <label>Mot de passe</label>
                        <input type="password" name="password" placeholder="Min. 4 car., 1 majuscule, 1 chiffre" required />
                        <span class="auth-hint">4–20 caractères · 1 majuscule · 1 chiffre</span>
                    </div>
                    <div id="auth-error-register"></div>
                    <button class="auth-submit" type="submit">Créer le compte</button>
                </form>

                <button id="auth-offline">Jouer hors ligne</button>
            </div>
        `,document.body.appendChild(this.overlay),this._bindEvents()}_bindEvents(){this.overlay.querySelectorAll(".auth-tab").forEach(e=>{e.addEventListener("click",()=>this._switchTab(e.dataset.tab))}),this.overlay.querySelector("#form-login").addEventListener("submit",async e=>{e.preventDefault(),await this._handleLogin(e.target)}),this.overlay.querySelector("#form-register").addEventListener("submit",async e=>{e.preventDefault(),await this._handleRegister(e.target)}),this.overlay.querySelector("#auth-offline").addEventListener("click",()=>{this._close(null)})}_switchTab(e){this._activeTab=e,this.overlay.querySelectorAll(".auth-tab").forEach(t=>{t.classList.toggle("active",t.dataset.tab===e)}),this.overlay.querySelectorAll(".auth-form").forEach(t=>{t.classList.toggle("active",t.id===`form-${e}`)}),this._setError("")}_setError(e,t="auth-error"){const n=this.overlay.querySelector(`#${t}`)||this.overlay.querySelector("#auth-error");n&&(n.textContent=e)}_setLoading(e){this._loading=e,this.overlay.querySelectorAll(".auth-submit").forEach(t=>{t.disabled=e,t.textContent=e?"...":t.closest("#form-login")?"Se connecter":"Créer le compte"})}async _handleLogin(e){if(this._loading)return;const t=e.username.value.trim(),n=e.password.value;this._setError("","auth-error"),this._setLoading(!0);try{const i=await this.authService.login(t,n);this._close({user:i,token:this.authService.token})}catch(i){this._setError(i.message,"auth-error")}finally{this._setLoading(!1)}}async _handleRegister(e){if(this._loading)return;const t=e.email.value.trim(),n=e.username.value.trim(),i=e.password.value;this._setError("","auth-error-register"),this._setLoading(!0);try{await this.authService.register(t,n,i);const s=await this.authService.login(n,i);this._close({user:s,token:this.authService.token})}catch(s){this._setError(s.message,"auth-error-register")}finally{this._setLoading(!1)}}_show(){this.overlay.style.display="block"}_close(e){this.overlay.remove(),this._resolve(e)}}const Kl="http://45.155.169.226";class Sg{constructor(){this.authService=new Ta,this._createHUD(),this.refresh()}_createHUD(){this.el=document.createElement("div"),this.el.style.cssText=`
            position: fixed; bottom: 24px; left: 20px;
            background: rgba(0, 0, 0, 0.55);
            padding: 14px 18px;
            font-family: 'Inter', sans-serif;
            pointer-events: none; z-index: 100;
            min-width: 180px;
        `,document.body.appendChild(this.el),this._render([])}async refresh(){if(!this.authService.token){this._render([]);return}try{const e=await fetch(`${Kl}/api/games`,{headers:{Authorization:`Bearer ${this.authService.token}`}});if(!e.ok)return;const n=[...await e.json()].sort((a,l)=>l.score-a.score).slice(0,5),i=[...new Set(n.map(a=>a.user.split("/").pop()))],s={};await Promise.all(i.map(async a=>{const l=await fetch(`${Kl}/api/users/${a}`,{headers:{Authorization:`Bearer ${this.authService.token}`}});if(l.ok){const h=await l.json();s[a]=h.username}}));const r=n.map(a=>({username:s[a.user.split("/").pop()]??"???",score:a.score}));this._render(r)}catch{}}_render(e){this.el.innerHTML=`
            <div style="font-size:10px; font-weight:900; letter-spacing:3px;
                        color:rgba(255,255,255,0.4); text-transform:uppercase;
                        margin-bottom:12px;">
                Classement
            </div>
            ${e.length===0?`<div style="font-size:12px; font-weight:700;
                               color:rgba(255,255,255,0.2); letter-spacing:1px;">—</div>`:e.map((t,n)=>`
                    <div style="display:flex; align-items:baseline; gap:10px; margin-bottom:6px;">
                        <span style="font-size:10px; font-weight:900;
                                     color:rgba(255,255,255,0.4); width:10px;
                                     text-align:right; letter-spacing:1px;">${n+1}</span>
                        <span style="font-size:13px; font-weight:700; color:#fff;
                                     letter-spacing:0.5px; flex:1;">${t.username}</span>
                        <span style="font-size:13px; font-weight:700;
                                     color:rgba(255,255,255,0.5);">${t.score}</span>
                    </div>
                `).join("")}
        `}destroy(){var e;(e=this.el)==null||e.remove()}}class Eg{constructor(){this.game=new on,this.scene=this.game.scene,this.ressources=this.game.ressources,this.level=1,this.environment=new rg,this.mapBorder=new og,this.scoreManager=new ag,this.levelManager=new ug,this.lifeManager=new _g,this.authService=new Ta,this._authPending=!0,this._pendingLevelLoad=!1,this.ressources.on("ready",()=>{var t;this.floor=new ng,this.car=new sg,(t=this.car)!=null&&t.controls&&(this.car.controls.disabled=!0),this._setupObstacleCollision(),this._authPending?this._pendingLevelLoad=!0:this._loadLevel()}),new Mg().promise.then(t=>{this._authPending=!1,this.authUser=(t==null?void 0:t.user)||null,this.authToken=(t==null?void 0:t.token)||null,this.authUser&&this.lifeManager.setUsername(this.authUser.username),this.leaderboard=new Sg,this._showStartScreen()})}_startObjectiveManager(){const e=this.levelManager.getConfig(this.level);this.objectiveManager=new lg({...e,level:this.level}),this.objectiveManager.on("levelComplete",()=>this._onLevelComplete()),this.objectiveManager.on("levelFailed",()=>this._onLevelFailed())}_loadLevel(){const e=this.levelManager.getConfig(this.level),{ballPositions:t,ringData:n,rockPositions:i,obstaclePositions:s}=this.levelManager.generatePositions(e);this.energyBalls=t.map(r=>new fg(r)),this.rings=n.map(({pos:r,normal:a,points:l})=>new pg(r,a,3.9,l)),this.rockStructures=i.map(r=>new gg(r)),this.obstacles=s.map(r=>new yg(r))}_clearObjectives(){for(const e of this.energyBalls??[])e.destroy();for(const e of this.rings??[])e.destroy();for(const e of this.rockStructures??[])e.destroy();for(const e of this.obstacles??[])e.destroy();this.energyBalls=[],this.rings=[],this.rockStructures=[],this.obstacles=[]}_setupObstacleCollision(){this.car.chassisBody.addEventListener("collide",e=>{var s;const t=(s=this.obstacles)==null?void 0:s.find(r=>r.body===e.body);if(!t||!this.car.knockback(t.body.position))return;new _s().playDamage(),this.lifeManager.loseLife()&&this._onLifeOut()})}_nextLevel(){var e;this.level++,this._clearObjectives(),this.objectiveManager.destroy(),this._startObjectiveManager(),(e=this.car)==null||e.resetPosition(),this._loadLevel()}_onLevelComplete(){this._showLevelComplete()}_onLevelFailed(){var e;(e=this.car)!=null&&e.controls&&(Object.keys(this.car.controls.actions).forEach(t=>this.car.controls.actions[t]=!1),this.car.controls.disabled=!0),this._showGameOver("Temps écoulé")}_onLifeOut(){var e,t;(e=this.car)!=null&&e.controls&&(Object.keys(this.car.controls.actions).forEach(n=>this.car.controls.actions[n]=!1),this.car.controls.disabled=!0),((t=this.game.world.objectiveManager)==null?void 0:t.finished)===!1&&(this.game.world.objectiveManager.finished=!0),this._showGameOver("Vies épuisées")}_showStartScreen(){const e=document.createElement("div");e.style.cssText=`
            position: fixed; inset: 0;
            background: rgba(0,0,0,0.65);
            display: flex; flex-direction: column;
            align-items: center; justify-content: center;
            z-index: 500; cursor: pointer;
            font-family: 'Inter', sans-serif;
            animation: fadeIn 0.4s ease forwards;
        `,e.innerHTML=`
            <style>
                @keyframes fadeIn { from{opacity:0} to{opacity:1} }
                @keyframes pulse  { 0%,100%{opacity:1} 50%{opacity:0.4} }
            </style>
            <div style="font-size:13px; letter-spacing:5px; color:rgba(255,255,255,0.9);
                        text-transform:uppercase; animation: pulse 2s ease-in-out infinite;">
                Cliquer pour commencer
            </div>
        `,e.addEventListener("click",()=>{var t;e.remove(),new _s().playMusic(),(t=this.car)!=null&&t.controls&&(this.car.controls.disabled=!1),this._startObjectiveManager(),this._pendingLevelLoad&&(this._pendingLevelLoad=!1,this._loadLevel())}),document.body.appendChild(e)}_showLevelComplete(){const e=document.createElement("div");e.style.cssText=`
            position: fixed; inset: 0;
            background: rgba(0,0,0,0.65);
            display: flex; flex-direction: column;
            align-items: center; justify-content: center;
            z-index: 500; pointer-events: none;
            font-family: 'Inter', sans-serif;
            animation: fadeIn 0.4s ease forwards;
        `,e.innerHTML=`
            <style>@keyframes fadeIn { from{opacity:0} to{opacity:1} }</style>
            <div style="font-size:16px; letter-spacing:4px; color:rgba(255,255,255,0.5);
                        margin-bottom:8px; text-transform:uppercase;">
                Niveau ${this.level-1}
            </div>
            <div style="font-size:64px; font-weight:900; color:#44ff88;
                        letter-spacing:4px; margin-bottom:40px;">
                TERMINÉ !
            </div>
            <div style="font-size:48px; font-weight:900; color:#fff;
                        letter-spacing:3px;">
                ${this.scoreManager.score} PTS
            </div>
        `,document.body.appendChild(e);let t=3;const n=document.createElement("div");n.style.cssText=`margin-top:48px; font-size:15px; letter-spacing:3px;
            color:rgba(255,255,255,0.4); text-transform:uppercase;`,n.textContent=`Niveau suivant dans ${t}…`,e.appendChild(n);const i=setInterval(()=>{t--,t>0?n.textContent=`Niveau suivant dans ${t}…`:(clearInterval(i),e.remove(),this._nextLevel())},1e3)}_showGameOver(e="Temps écoulé"){const t=document.createElement("div");t.style.cssText=`
            position: fixed; inset: 0;
            background: rgba(0,0,0,0.75);
            display: flex; flex-direction: column;
            align-items: center; justify-content: center;
            z-index: 500;
            font-family: 'Inter', sans-serif;
            animation: fadeIn 0.6s ease forwards;
        `;const n=this.authUser?`<div id="go-save-status" style="font-size:12px; letter-spacing:2px; color:rgba(255,255,255,0.3);
                    margin-bottom:40px; text-transform:uppercase;">Sauvegarde en cours…</div>`:'<div style="margin-bottom:40px;"></div>';t.innerHTML=`
            <style>
                @keyframes fadeIn { from{opacity:0} to{opacity:1} }
                .go-btn:hover { background:#ff2222 !important; transform:scale(1.05); }
            </style>
            <div style="font-size:14px; letter-spacing:4px; color:rgba(255,255,255,0.4);
                        margin-bottom:8px; text-transform:uppercase;">
                Niveau ${this.level}
            </div>
            <div style="font-size:72px; font-weight:900; color:#ff4444;
                        letter-spacing:6px; margin-bottom:12px;">
                GAME OVER
            </div>
            <div style="font-size:16px; letter-spacing:3px; color:rgba(255,255,255,0.5);
                        margin-bottom:8px; text-transform:uppercase;">
                Score final
            </div>
            <div style="font-size:56px; font-weight:900; color:#fff;
                        letter-spacing:3px; margin-bottom:20px;">
                ${this.scoreManager.score} PTS
            </div>
            ${n}
            <button class="go-btn" style="
                background:#cc0000; border:none;
                color:#fff; font-family:'Inter', sans-serif;
                font-size:18px; font-weight:900; letter-spacing:3px;
                padding:16px 48px; cursor:pointer; text-transform:uppercase;
                transition:background 0.2s, transform 0.15s;">
                Rejouer
            </button>
        `,new _s().stopMusic(),t.querySelector(".go-btn").addEventListener("click",()=>window.location.reload()),document.body.appendChild(t),this.authUser&&this.authService.pushScore(this.scoreManager.score).then(i=>{var r;const s=t.querySelector("#go-save-status");s&&(i?(s.textContent="✓ Score sauvegardé",s.style.color="#44ff88",(r=this.leaderboard)==null||r.refresh()):(s.textContent="Score non sauvegardé",s.style.color="rgba(255,100,100,0.6)"))})}update(){if(this.car&&this.car.update(),this.energyBalls)for(const e of this.energyBalls)e.update();if(this.rings)for(const e of this.rings)e.update();if(this.rockStructures)for(const e of this.rockStructures)e.update();if(this.obstacles)for(const e of this.obstacles)e.update()}}function Zl(o,e){if(e===xh)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),o;if(e===Ko||e===vc){let t=o.getIndex();if(t===null){const r=[],a=o.getAttribute("position");if(a!==void 0){for(let l=0;l<a.count;l++)r.push(l);o.setIndex(r),t=o.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),o}const n=t.count-2,i=[];if(e===Ko)for(let r=1;r<=n;r++)i.push(t.getX(0)),i.push(t.getX(r)),i.push(t.getX(r+1));else for(let r=0;r<n;r++)r%2===0?(i.push(t.getX(r)),i.push(t.getX(r+1)),i.push(t.getX(r+2))):(i.push(t.getX(r+2)),i.push(t.getX(r+1)),i.push(t.getX(r)));i.length/3!==n&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");const s=o.clone();return s.setIndex(i),s.clearGroups(),s}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",e),o}class wg extends xi{constructor(e){super(e),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(t){return new Cg(t)}),this.register(function(t){return new Pg(t)}),this.register(function(t){return new zg(t)}),this.register(function(t){return new Vg(t)}),this.register(function(t){return new kg(t)}),this.register(function(t){return new Ig(t)}),this.register(function(t){return new Ng(t)}),this.register(function(t){return new Dg(t)}),this.register(function(t){return new Ug(t)}),this.register(function(t){return new Rg(t)}),this.register(function(t){return new Fg(t)}),this.register(function(t){return new Lg(t)}),this.register(function(t){return new Og(t)}),this.register(function(t){return new Bg(t)}),this.register(function(t){return new Tg(t)}),this.register(function(t){return new Hg(t)}),this.register(function(t){return new Gg(t)})}load(e,t,n,i){const s=this;let r;if(this.resourcePath!=="")r=this.resourcePath;else if(this.path!==""){const h=gs.extractUrlBase(e);r=gs.resolveURL(h,this.path)}else r=gs.extractUrlBase(e);this.manager.itemStart(e);const a=function(h){i?i(h):console.error(h),s.manager.itemError(e),s.manager.itemEnd(e)},l=new Nc(this.manager);l.setPath(this.path),l.setResponseType("arraybuffer"),l.setRequestHeader(this.requestHeader),l.setWithCredentials(this.withCredentials),l.load(e,function(h){try{s.parse(h,r,function(u){t(u),s.manager.itemEnd(e)},a)}catch(u){a(u)}},n,a)}setDRACOLoader(e){return this.dracoLoader=e,this}setKTX2Loader(e){return this.ktx2Loader=e,this}setMeshoptDecoder(e){return this.meshoptDecoder=e,this}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}parse(e,t,n,i){let s;const r={},a={},l=new TextDecoder;if(typeof e=="string")s=JSON.parse(e);else if(e instanceof ArrayBuffer)if(l.decode(new Uint8Array(e,0,4))===kc){try{r[Mt.KHR_BINARY_GLTF]=new Wg(e)}catch(c){i&&i(c);return}s=JSON.parse(r[Mt.KHR_BINARY_GLTF].content)}else s=JSON.parse(l.decode(e));else s=e;if(s.asset===void 0||s.asset.version[0]<2){i&&i(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}const h=new i0(s,{path:t||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});h.fileLoader.setRequestHeader(this.requestHeader);for(let u=0;u<this.pluginCallbacks.length;u++){const c=this.pluginCallbacks[u](h);c.name||console.error("THREE.GLTFLoader: Invalid plugin found: missing name"),a[c.name]=c,r[c.name]=!0}if(s.extensionsUsed)for(let u=0;u<s.extensionsUsed.length;++u){const c=s.extensionsUsed[u],d=s.extensionsRequired||[];switch(c){case Mt.KHR_MATERIALS_UNLIT:r[c]=new Ag;break;case Mt.KHR_DRACO_MESH_COMPRESSION:r[c]=new Xg(s,this.dracoLoader);break;case Mt.KHR_TEXTURE_TRANSFORM:r[c]=new qg;break;case Mt.KHR_MESH_QUANTIZATION:r[c]=new Yg;break;default:d.indexOf(c)>=0&&a[c]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+c+'".')}}h.setExtensions(r),h.setPlugins(a),h.parse(n,i)}parseAsync(e,t){const n=this;return new Promise(function(i,s){n.parse(e,t,i,s)})}}function bg(){let o={};return{get:function(e){return o[e]},add:function(e,t){o[e]=t},remove:function(e){delete o[e]},removeAll:function(){o={}}}}const Mt={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_DISPERSION:"KHR_materials_dispersion",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_MATERIALS_BUMP:"EXT_materials_bump",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"};class Tg{constructor(e){this.parser=e,this.name=Mt.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){const e=this.parser,t=this.parser.json.nodes||[];for(let n=0,i=t.length;n<i;n++){const s=t[n];s.extensions&&s.extensions[this.name]&&s.extensions[this.name].light!==void 0&&e._addNodeRef(this.cache,s.extensions[this.name].light)}}_loadLight(e){const t=this.parser,n="light:"+e;let i=t.cache.get(n);if(i)return i;const s=t.json,l=((s.extensions&&s.extensions[this.name]||{}).lights||[])[e];let h;const u=new lt(16777215);l.color!==void 0&&u.setRGB(l.color[0],l.color[1],l.color[2],tn);const c=l.range!==void 0?l.range:0;switch(l.type){case"directional":h=new Qu(u),h.target.position.set(0,0,-1),h.add(h.target);break;case"point":h=new $u(u),h.distance=c;break;case"spot":h=new Ku(u),h.distance=c,l.spot=l.spot||{},l.spot.innerConeAngle=l.spot.innerConeAngle!==void 0?l.spot.innerConeAngle:0,l.spot.outerConeAngle=l.spot.outerConeAngle!==void 0?l.spot.outerConeAngle:Math.PI/4,h.angle=l.spot.outerConeAngle,h.penumbra=1-l.spot.innerConeAngle/l.spot.outerConeAngle,h.target.position.set(0,0,-1),h.add(h.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+l.type)}return h.position.set(0,0,0),zn(h,l),l.intensity!==void 0&&(h.intensity=l.intensity),h.name=t.createUniqueName(l.name||"light_"+e),i=Promise.resolve(h),t.cache.add(n,i),i}getDependency(e,t){if(e==="light")return this._loadLight(t)}createNodeAttachment(e){const t=this,n=this.parser,s=n.json.nodes[e],a=(s.extensions&&s.extensions[this.name]||{}).light;return a===void 0?null:this._loadLight(a).then(function(l){return n._getNodeRef(t.cache,a,l)})}}class Ag{constructor(){this.name=Mt.KHR_MATERIALS_UNLIT}getMaterialType(){return Jt}extendParams(e,t,n){const i=[];e.color=new lt(1,1,1),e.opacity=1;const s=t.pbrMetallicRoughness;if(s){if(Array.isArray(s.baseColorFactor)){const r=s.baseColorFactor;e.color.setRGB(r[0],r[1],r[2],tn),e.opacity=r[3]}s.baseColorTexture!==void 0&&i.push(n.assignTexture(e,"map",s.baseColorTexture,Vt))}return Promise.all(i)}}class Rg{constructor(e){this.parser=e,this.name=Mt.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(e,t){const i=this.parser.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=i.extensions[this.name].emissiveStrength;return s!==void 0&&(t.emissiveIntensity=s),Promise.resolve()}}class Cg{constructor(e){this.parser=e,this.name=Mt.KHR_MATERIALS_CLEARCOAT}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Cn}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=[],r=i.extensions[this.name];if(r.clearcoatFactor!==void 0&&(t.clearcoat=r.clearcoatFactor),r.clearcoatTexture!==void 0&&s.push(n.assignTexture(t,"clearcoatMap",r.clearcoatTexture)),r.clearcoatRoughnessFactor!==void 0&&(t.clearcoatRoughness=r.clearcoatRoughnessFactor),r.clearcoatRoughnessTexture!==void 0&&s.push(n.assignTexture(t,"clearcoatRoughnessMap",r.clearcoatRoughnessTexture)),r.clearcoatNormalTexture!==void 0&&(s.push(n.assignTexture(t,"clearcoatNormalMap",r.clearcoatNormalTexture)),r.clearcoatNormalTexture.scale!==void 0)){const a=r.clearcoatNormalTexture.scale;t.clearcoatNormalScale=new ft(a,a)}return Promise.all(s)}}class Pg{constructor(e){this.parser=e,this.name=Mt.KHR_MATERIALS_DISPERSION}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Cn}extendMaterialParams(e,t){const i=this.parser.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=i.extensions[this.name];return t.dispersion=s.dispersion!==void 0?s.dispersion:0,Promise.resolve()}}class Lg{constructor(e){this.parser=e,this.name=Mt.KHR_MATERIALS_IRIDESCENCE}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Cn}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=[],r=i.extensions[this.name];return r.iridescenceFactor!==void 0&&(t.iridescence=r.iridescenceFactor),r.iridescenceTexture!==void 0&&s.push(n.assignTexture(t,"iridescenceMap",r.iridescenceTexture)),r.iridescenceIor!==void 0&&(t.iridescenceIOR=r.iridescenceIor),t.iridescenceThicknessRange===void 0&&(t.iridescenceThicknessRange=[100,400]),r.iridescenceThicknessMinimum!==void 0&&(t.iridescenceThicknessRange[0]=r.iridescenceThicknessMinimum),r.iridescenceThicknessMaximum!==void 0&&(t.iridescenceThicknessRange[1]=r.iridescenceThicknessMaximum),r.iridescenceThicknessTexture!==void 0&&s.push(n.assignTexture(t,"iridescenceThicknessMap",r.iridescenceThicknessTexture)),Promise.all(s)}}class Ig{constructor(e){this.parser=e,this.name=Mt.KHR_MATERIALS_SHEEN}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Cn}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=[];t.sheenColor=new lt(0,0,0),t.sheenRoughness=0,t.sheen=1;const r=i.extensions[this.name];if(r.sheenColorFactor!==void 0){const a=r.sheenColorFactor;t.sheenColor.setRGB(a[0],a[1],a[2],tn)}return r.sheenRoughnessFactor!==void 0&&(t.sheenRoughness=r.sheenRoughnessFactor),r.sheenColorTexture!==void 0&&s.push(n.assignTexture(t,"sheenColorMap",r.sheenColorTexture,Vt)),r.sheenRoughnessTexture!==void 0&&s.push(n.assignTexture(t,"sheenRoughnessMap",r.sheenRoughnessTexture)),Promise.all(s)}}class Ng{constructor(e){this.parser=e,this.name=Mt.KHR_MATERIALS_TRANSMISSION}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Cn}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=[],r=i.extensions[this.name];return r.transmissionFactor!==void 0&&(t.transmission=r.transmissionFactor),r.transmissionTexture!==void 0&&s.push(n.assignTexture(t,"transmissionMap",r.transmissionTexture)),Promise.all(s)}}class Dg{constructor(e){this.parser=e,this.name=Mt.KHR_MATERIALS_VOLUME}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Cn}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=[],r=i.extensions[this.name];t.thickness=r.thicknessFactor!==void 0?r.thicknessFactor:0,r.thicknessTexture!==void 0&&s.push(n.assignTexture(t,"thicknessMap",r.thicknessTexture)),t.attenuationDistance=r.attenuationDistance||1/0;const a=r.attenuationColor||[1,1,1];return t.attenuationColor=new lt().setRGB(a[0],a[1],a[2],tn),Promise.all(s)}}class Ug{constructor(e){this.parser=e,this.name=Mt.KHR_MATERIALS_IOR}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Cn}extendMaterialParams(e,t){const i=this.parser.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=i.extensions[this.name];return t.ior=s.ior!==void 0?s.ior:1.5,Promise.resolve()}}class Fg{constructor(e){this.parser=e,this.name=Mt.KHR_MATERIALS_SPECULAR}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Cn}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=[],r=i.extensions[this.name];t.specularIntensity=r.specularFactor!==void 0?r.specularFactor:1,r.specularTexture!==void 0&&s.push(n.assignTexture(t,"specularIntensityMap",r.specularTexture));const a=r.specularColorFactor||[1,1,1];return t.specularColor=new lt().setRGB(a[0],a[1],a[2],tn),r.specularColorTexture!==void 0&&s.push(n.assignTexture(t,"specularColorMap",r.specularColorTexture,Vt)),Promise.all(s)}}class Bg{constructor(e){this.parser=e,this.name=Mt.EXT_MATERIALS_BUMP}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Cn}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=[],r=i.extensions[this.name];return t.bumpScale=r.bumpFactor!==void 0?r.bumpFactor:1,r.bumpTexture!==void 0&&s.push(n.assignTexture(t,"bumpMap",r.bumpTexture)),Promise.all(s)}}class Og{constructor(e){this.parser=e,this.name=Mt.KHR_MATERIALS_ANISOTROPY}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Cn}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=[],r=i.extensions[this.name];return r.anisotropyStrength!==void 0&&(t.anisotropy=r.anisotropyStrength),r.anisotropyRotation!==void 0&&(t.anisotropyRotation=r.anisotropyRotation),r.anisotropyTexture!==void 0&&s.push(n.assignTexture(t,"anisotropyMap",r.anisotropyTexture)),Promise.all(s)}}class zg{constructor(e){this.parser=e,this.name=Mt.KHR_TEXTURE_BASISU}loadTexture(e){const t=this.parser,n=t.json,i=n.textures[e];if(!i.extensions||!i.extensions[this.name])return null;const s=i.extensions[this.name],r=t.options.ktx2Loader;if(!r){if(n.extensionsRequired&&n.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return t.loadTextureImage(e,s.source,r)}}class Vg{constructor(e){this.parser=e,this.name=Mt.EXT_TEXTURE_WEBP,this.isSupported=null}loadTexture(e){const t=this.name,n=this.parser,i=n.json,s=i.textures[e];if(!s.extensions||!s.extensions[t])return null;const r=s.extensions[t],a=i.images[r.source];let l=n.textureLoader;if(a.uri){const h=n.options.manager.getHandler(a.uri);h!==null&&(l=h)}return this.detectSupport().then(function(h){if(h)return n.loadTextureImage(e,r.source,l);if(i.extensionsRequired&&i.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: WebP required by asset but unsupported.");return n.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){const t=new Image;t.src="data:image/webp;base64,UklGRiIAAABXRUJQVlA4IBYAAAAwAQCdASoBAAEADsD+JaQAA3AAAAAA",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}}class kg{constructor(e){this.parser=e,this.name=Mt.EXT_TEXTURE_AVIF,this.isSupported=null}loadTexture(e){const t=this.name,n=this.parser,i=n.json,s=i.textures[e];if(!s.extensions||!s.extensions[t])return null;const r=s.extensions[t],a=i.images[r.source];let l=n.textureLoader;if(a.uri){const h=n.options.manager.getHandler(a.uri);h!==null&&(l=h)}return this.detectSupport().then(function(h){if(h)return n.loadTextureImage(e,r.source,l);if(i.extensionsRequired&&i.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: AVIF required by asset but unsupported.");return n.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){const t=new Image;t.src="data:image/avif;base64,AAAAIGZ0eXBhdmlmAAAAAGF2aWZtaWYxbWlhZk1BMUIAAADybWV0YQAAAAAAAAAoaGRscgAAAAAAAAAAcGljdAAAAAAAAAAAAAAAAGxpYmF2aWYAAAAADnBpdG0AAAAAAAEAAAAeaWxvYwAAAABEAAABAAEAAAABAAABGgAAABcAAAAoaWluZgAAAAAAAQAAABppbmZlAgAAAAABAABhdjAxQ29sb3IAAAAAamlwcnAAAABLaXBjbwAAABRpc3BlAAAAAAAAAAEAAAABAAAAEHBpeGkAAAAAAwgICAAAAAxhdjFDgQAMAAAAABNjb2xybmNseAACAAIABoAAAAAXaXBtYQAAAAAAAAABAAEEAQKDBAAAAB9tZGF0EgAKCBgABogQEDQgMgkQAAAAB8dSLfI=",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}}class Hg{constructor(e){this.name=Mt.EXT_MESHOPT_COMPRESSION,this.parser=e}loadBufferView(e){const t=this.parser.json,n=t.bufferViews[e];if(n.extensions&&n.extensions[this.name]){const i=n.extensions[this.name],s=this.parser.getDependency("buffer",i.buffer),r=this.parser.options.meshoptDecoder;if(!r||!r.supported){if(t.extensionsRequired&&t.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return s.then(function(a){const l=i.byteOffset||0,h=i.byteLength||0,u=i.count,c=i.byteStride,d=new Uint8Array(a,l,h);return r.decodeGltfBufferAsync?r.decodeGltfBufferAsync(u,c,d,i.mode,i.filter).then(function(f){return f.buffer}):r.ready.then(function(){const f=new ArrayBuffer(u*c);return r.decodeGltfBuffer(new Uint8Array(f),u,c,d,i.mode,i.filter),f})})}else return null}}class Gg{constructor(e){this.name=Mt.EXT_MESH_GPU_INSTANCING,this.parser=e}createNodeMesh(e){const t=this.parser.json,n=t.nodes[e];if(!n.extensions||!n.extensions[this.name]||n.mesh===void 0)return null;const i=t.meshes[n.mesh];for(const h of i.primitives)if(h.mode!==dn.TRIANGLES&&h.mode!==dn.TRIANGLE_STRIP&&h.mode!==dn.TRIANGLE_FAN&&h.mode!==void 0)return null;const r=n.extensions[this.name].attributes,a=[],l={};for(const h in r)a.push(this.parser.getDependency("accessor",r[h]).then(u=>(l[h]=u,l[h])));return a.length<1?null:(a.push(this.parser.createNodeMesh(e)),Promise.all(a).then(h=>{const u=h.pop(),c=u.isGroup?u.children:[u],d=h[0].count,f=[];for(const m of c){const g=new pt,v=new H,p=new Tn,x=new H(1,1,1),y=new Au(m.geometry,m.material,d);for(let _=0;_<d;_++)l.TRANSLATION&&v.fromBufferAttribute(l.TRANSLATION,_),l.ROTATION&&p.fromBufferAttribute(l.ROTATION,_),l.SCALE&&x.fromBufferAttribute(l.SCALE,_),y.setMatrixAt(_,g.compose(v,p,x));for(const _ in l)if(_==="_COLOR_0"){const T=l[_];y.instanceColor=new $o(T.array,T.itemSize,T.normalized)}else _!=="TRANSLATION"&&_!=="ROTATION"&&_!=="SCALE"&&m.geometry.setAttribute(_,l[_]);Ft.prototype.copy.call(y,m),this.parser.assignFinalMaterial(y),f.push(y)}return u.isGroup?(u.clear(),u.add(...f),u):f[0]}))}}const kc="glTF",ds=12,$l={JSON:1313821514,BIN:5130562};class Wg{constructor(e){this.name=Mt.KHR_BINARY_GLTF,this.content=null,this.body=null;const t=new DataView(e,0,ds),n=new TextDecoder;if(this.header={magic:n.decode(new Uint8Array(e.slice(0,4))),version:t.getUint32(4,!0),length:t.getUint32(8,!0)},this.header.magic!==kc)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");const i=this.header.length-ds,s=new DataView(e,ds);let r=0;for(;r<i;){const a=s.getUint32(r,!0);r+=4;const l=s.getUint32(r,!0);if(r+=4,l===$l.JSON){const h=new Uint8Array(e,ds+r,a);this.content=n.decode(h)}else if(l===$l.BIN){const h=ds+r;this.body=e.slice(h,h+a)}r+=a}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}}class Xg{constructor(e,t){if(!t)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=Mt.KHR_DRACO_MESH_COMPRESSION,this.json=e,this.dracoLoader=t,this.dracoLoader.preload()}decodePrimitive(e,t){const n=this.json,i=this.dracoLoader,s=e.extensions[this.name].bufferView,r=e.extensions[this.name].attributes,a={},l={},h={};for(const u in r){const c=ea[u]||u.toLowerCase();a[c]=r[u]}for(const u in e.attributes){const c=ea[u]||u.toLowerCase();if(r[u]!==void 0){const d=n.accessors[e.attributes[u]],f=Vi[d.componentType];h[c]=f.name,l[c]=d.normalized===!0}}return t.getDependency("bufferView",s).then(function(u){return new Promise(function(c,d){i.decodeDracoFile(u,function(f){for(const m in f.attributes){const g=f.attributes[m],v=l[m];v!==void 0&&(g.normalized=v)}c(f)},a,h,tn,d)})})}}class qg{constructor(){this.name=Mt.KHR_TEXTURE_TRANSFORM}extendTexture(e,t){return(t.texCoord===void 0||t.texCoord===e.channel)&&t.offset===void 0&&t.rotation===void 0&&t.scale===void 0||(e=e.clone(),t.texCoord!==void 0&&(e.channel=t.texCoord),t.offset!==void 0&&e.offset.fromArray(t.offset),t.rotation!==void 0&&(e.rotation=t.rotation),t.scale!==void 0&&e.repeat.fromArray(t.scale),e.needsUpdate=!0),e}}class Yg{constructor(){this.name=Mt.KHR_MESH_QUANTIZATION}}class Hc extends bs{constructor(e,t,n,i){super(e,t,n,i)}copySampleValue_(e){const t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,s=e*i*3+i;for(let r=0;r!==i;r++)t[r]=n[s+r];return t}interpolate_(e,t,n,i){const s=this.resultBuffer,r=this.sampleValues,a=this.valueSize,l=a*2,h=a*3,u=i-t,c=(n-t)/u,d=c*c,f=d*c,m=e*h,g=m-h,v=-2*f+3*d,p=f-d,x=1-v,y=p-d+c;for(let _=0;_!==a;_++){const T=r[g+_+a],C=r[g+_+l]*u,I=r[m+_+a],P=r[m+_]*u;s[_]=x*T+y*C+v*I+p*P}return s}}const jg=new Tn;class Kg extends Hc{interpolate_(e,t,n,i){const s=super.interpolate_(e,t,n,i);return jg.fromArray(s).normalize().toArray(s),s}}const dn={POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6},Vi={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},Jl={9728:Qt,9729:hn,9984:oc,9985:ir,9986:fs,9987:Vn},Ql={33071:ei,33648:hr,10497:Wi},ao={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},ea={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},Jn={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},Zg={CUBICSPLINE:void 0,LINEAR:Ms,STEP:ys},lo={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function $g(o){return o.DefaultMaterial===void 0&&(o.DefaultMaterial=new yr({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:Gn})),o.DefaultMaterial}function ui(o,e,t){for(const n in t.extensions)o[n]===void 0&&(e.userData.gltfExtensions=e.userData.gltfExtensions||{},e.userData.gltfExtensions[n]=t.extensions[n])}function zn(o,e){e.extras!==void 0&&(typeof e.extras=="object"?Object.assign(o.userData,e.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+e.extras))}function Jg(o,e,t){let n=!1,i=!1,s=!1;for(let h=0,u=e.length;h<u;h++){const c=e[h];if(c.POSITION!==void 0&&(n=!0),c.NORMAL!==void 0&&(i=!0),c.COLOR_0!==void 0&&(s=!0),n&&i&&s)break}if(!n&&!i&&!s)return Promise.resolve(o);const r=[],a=[],l=[];for(let h=0,u=e.length;h<u;h++){const c=e[h];if(n){const d=c.POSITION!==void 0?t.getDependency("accessor",c.POSITION):o.attributes.position;r.push(d)}if(i){const d=c.NORMAL!==void 0?t.getDependency("accessor",c.NORMAL):o.attributes.normal;a.push(d)}if(s){const d=c.COLOR_0!==void 0?t.getDependency("accessor",c.COLOR_0):o.attributes.color;l.push(d)}}return Promise.all([Promise.all(r),Promise.all(a),Promise.all(l)]).then(function(h){const u=h[0],c=h[1],d=h[2];return n&&(o.morphAttributes.position=u),i&&(o.morphAttributes.normal=c),s&&(o.morphAttributes.color=d),o.morphTargetsRelative=!0,o})}function Qg(o,e){if(o.updateMorphTargets(),e.weights!==void 0)for(let t=0,n=e.weights.length;t<n;t++)o.morphTargetInfluences[t]=e.weights[t];if(e.extras&&Array.isArray(e.extras.targetNames)){const t=e.extras.targetNames;if(o.morphTargetInfluences.length===t.length){o.morphTargetDictionary={};for(let n=0,i=t.length;n<i;n++)o.morphTargetDictionary[t[n]]=n}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function e0(o){let e;const t=o.extensions&&o.extensions[Mt.KHR_DRACO_MESH_COMPRESSION];if(t?e="draco:"+t.bufferView+":"+t.indices+":"+co(t.attributes):e=o.indices+":"+co(o.attributes)+":"+o.mode,o.targets!==void 0)for(let n=0,i=o.targets.length;n<i;n++)e+=":"+co(o.targets[n]);return e}function co(o){let e="";const t=Object.keys(o).sort();for(let n=0,i=t.length;n<i;n++)e+=t[n]+":"+o[t[n]]+";";return e}function ta(o){switch(o){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function t0(o){return o.search(/\.jpe?g($|\?)/i)>0||o.search(/^data\:image\/jpeg/)===0?"image/jpeg":o.search(/\.webp($|\?)/i)>0||o.search(/^data\:image\/webp/)===0?"image/webp":o.search(/\.ktx2($|\?)/i)>0||o.search(/^data\:image\/ktx2/)===0?"image/ktx2":"image/png"}const n0=new pt;class i0{constructor(e={},t={}){this.json=e,this.extensions={},this.plugins={},this.options=t,this.cache=new bg,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let n=!1,i=-1,s=!1,r=-1;if(typeof navigator<"u"){const a=navigator.userAgent;n=/^((?!chrome|android).)*safari/i.test(a)===!0;const l=a.match(/Version\/(\d+)/);i=n&&l?parseInt(l[1],10):-1,s=a.indexOf("Firefox")>-1,r=s?a.match(/Firefox\/([0-9]+)\./)[1]:-1}typeof createImageBitmap>"u"||n&&i<17||s&&r<98?this.textureLoader=new Uc(this.options.manager):this.textureLoader=new ed(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new Nc(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials"&&this.fileLoader.setWithCredentials(!0)}setExtensions(e){this.extensions=e}setPlugins(e){this.plugins=e}parse(e,t){const n=this,i=this.json,s=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(r){return r._markDefs&&r._markDefs()}),Promise.all(this._invokeAll(function(r){return r.beforeRoot&&r.beforeRoot()})).then(function(){return Promise.all([n.getDependencies("scene"),n.getDependencies("animation"),n.getDependencies("camera")])}).then(function(r){const a={scene:r[0][i.scene||0],scenes:r[0],animations:r[1],cameras:r[2],asset:i.asset,parser:n,userData:{}};return ui(s,a,i),zn(a,i),Promise.all(n._invokeAll(function(l){return l.afterRoot&&l.afterRoot(a)})).then(function(){for(const l of a.scenes)l.updateMatrixWorld();e(a)})}).catch(t)}_markDefs(){const e=this.json.nodes||[],t=this.json.skins||[],n=this.json.meshes||[];for(let i=0,s=t.length;i<s;i++){const r=t[i].joints;for(let a=0,l=r.length;a<l;a++)e[r[a]].isBone=!0}for(let i=0,s=e.length;i<s;i++){const r=e[i];r.mesh!==void 0&&(this._addNodeRef(this.meshCache,r.mesh),r.skin!==void 0&&(n[r.mesh].isSkinnedMesh=!0)),r.camera!==void 0&&this._addNodeRef(this.cameraCache,r.camera)}}_addNodeRef(e,t){t!==void 0&&(e.refs[t]===void 0&&(e.refs[t]=e.uses[t]=0),e.refs[t]++)}_getNodeRef(e,t,n){if(e.refs[t]<=1)return n;const i=n.clone(),s=(r,a)=>{const l=this.associations.get(r);l!=null&&this.associations.set(a,l);for(const[h,u]of r.children.entries())s(u,a.children[h])};return s(n,i),i.name+="_instance_"+e.uses[t]++,i}_invokeOne(e){const t=Object.values(this.plugins);t.push(this);for(let n=0;n<t.length;n++){const i=e(t[n]);if(i)return i}return null}_invokeAll(e){const t=Object.values(this.plugins);t.unshift(this);const n=[];for(let i=0;i<t.length;i++){const s=e(t[i]);s&&n.push(s)}return n}getDependency(e,t){const n=e+":"+t;let i=this.cache.get(n);if(!i){switch(e){case"scene":i=this.loadScene(t);break;case"node":i=this._invokeOne(function(s){return s.loadNode&&s.loadNode(t)});break;case"mesh":i=this._invokeOne(function(s){return s.loadMesh&&s.loadMesh(t)});break;case"accessor":i=this.loadAccessor(t);break;case"bufferView":i=this._invokeOne(function(s){return s.loadBufferView&&s.loadBufferView(t)});break;case"buffer":i=this.loadBuffer(t);break;case"material":i=this._invokeOne(function(s){return s.loadMaterial&&s.loadMaterial(t)});break;case"texture":i=this._invokeOne(function(s){return s.loadTexture&&s.loadTexture(t)});break;case"skin":i=this.loadSkin(t);break;case"animation":i=this._invokeOne(function(s){return s.loadAnimation&&s.loadAnimation(t)});break;case"camera":i=this.loadCamera(t);break;default:if(i=this._invokeOne(function(s){return s!=this&&s.getDependency&&s.getDependency(e,t)}),!i)throw new Error("Unknown type: "+e);break}this.cache.add(n,i)}return i}getDependencies(e){let t=this.cache.get(e);if(!t){const n=this,i=this.json[e+(e==="mesh"?"es":"s")]||[];t=Promise.all(i.map(function(s,r){return n.getDependency(e,r)})),this.cache.add(e,t)}return t}loadBuffer(e){const t=this.json.buffers[e],n=this.fileLoader;if(t.type&&t.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+t.type+" buffer type is not supported.");if(t.uri===void 0&&e===0)return Promise.resolve(this.extensions[Mt.KHR_BINARY_GLTF].body);const i=this.options;return new Promise(function(s,r){n.load(gs.resolveURL(t.uri,i.path),s,void 0,function(){r(new Error('THREE.GLTFLoader: Failed to load buffer "'+t.uri+'".'))})})}loadBufferView(e){const t=this.json.bufferViews[e];return this.getDependency("buffer",t.buffer).then(function(n){const i=t.byteLength||0,s=t.byteOffset||0;return n.slice(s,s+i)})}loadAccessor(e){const t=this,n=this.json,i=this.json.accessors[e];if(i.bufferView===void 0&&i.sparse===void 0){const r=ao[i.type],a=Vi[i.componentType],l=i.normalized===!0,h=new a(i.count*r);return Promise.resolve(new en(h,r,l))}const s=[];return i.bufferView!==void 0?s.push(this.getDependency("bufferView",i.bufferView)):s.push(null),i.sparse!==void 0&&(s.push(this.getDependency("bufferView",i.sparse.indices.bufferView)),s.push(this.getDependency("bufferView",i.sparse.values.bufferView))),Promise.all(s).then(function(r){const a=r[0],l=ao[i.type],h=Vi[i.componentType],u=h.BYTES_PER_ELEMENT,c=u*l,d=i.byteOffset||0,f=i.bufferView!==void 0?n.bufferViews[i.bufferView].byteStride:void 0,m=i.normalized===!0;let g,v;if(f&&f!==c){const p=Math.floor(d/f),x="InterleavedBuffer:"+i.bufferView+":"+i.componentType+":"+p+":"+i.count;let y=t.cache.get(x);y||(g=new h(a,p*f,i.count*f/u),y=new Su(g,f/u),t.cache.add(x,y)),v=new pa(y,l,d%f/u,m)}else a===null?g=new h(i.count*l):g=new h(a,d,i.count*l),v=new en(g,l,m);if(i.sparse!==void 0){const p=ao.SCALAR,x=Vi[i.sparse.indices.componentType],y=i.sparse.indices.byteOffset||0,_=i.sparse.values.byteOffset||0,T=new x(r[1],y,i.sparse.count*p),C=new h(r[2],_,i.sparse.count*l);a!==null&&(v=new en(v.array.slice(),v.itemSize,v.normalized)),v.normalized=!1;for(let I=0,P=T.length;I<P;I++){const S=T[I];if(v.setX(S,C[I*l]),l>=2&&v.setY(S,C[I*l+1]),l>=3&&v.setZ(S,C[I*l+2]),l>=4&&v.setW(S,C[I*l+3]),l>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}v.normalized=m}return v})}loadTexture(e){const t=this.json,n=this.options,s=t.textures[e].source,r=t.images[s];let a=this.textureLoader;if(r.uri){const l=n.manager.getHandler(r.uri);l!==null&&(a=l)}return this.loadTextureImage(e,s,a)}loadTextureImage(e,t,n){const i=this,s=this.json,r=s.textures[e],a=s.images[t],l=(a.uri||a.bufferView)+":"+r.sampler;if(this.textureCache[l])return this.textureCache[l];const h=this.loadImageSource(t,n).then(function(u){u.flipY=!1,u.name=r.name||a.name||"",u.name===""&&typeof a.uri=="string"&&a.uri.startsWith("data:image/")===!1&&(u.name=a.uri);const d=(s.samplers||{})[r.sampler]||{};return u.magFilter=Jl[d.magFilter]||hn,u.minFilter=Jl[d.minFilter]||Vn,u.wrapS=Ql[d.wrapS]||Wi,u.wrapT=Ql[d.wrapT]||Wi,u.generateMipmaps=!u.isCompressedTexture&&u.minFilter!==Qt&&u.minFilter!==hn,i.associations.set(u,{textures:e}),u}).catch(function(){return null});return this.textureCache[l]=h,h}loadImageSource(e,t){const n=this,i=this.json,s=this.options;if(this.sourceCache[e]!==void 0)return this.sourceCache[e].then(c=>c.clone());const r=i.images[e],a=self.URL||self.webkitURL;let l=r.uri||"",h=!1;if(r.bufferView!==void 0)l=n.getDependency("bufferView",r.bufferView).then(function(c){h=!0;const d=new Blob([c],{type:r.mimeType});return l=a.createObjectURL(d),l});else if(r.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+e+" is missing URI and bufferView");const u=Promise.resolve(l).then(function(c){return new Promise(function(d,f){let m=d;t.isImageBitmapLoader===!0&&(m=function(g){const v=new Wt(g);v.needsUpdate=!0,d(v)}),t.load(gs.resolveURL(c,s.path),m,void 0,f)})}).then(function(c){return h===!0&&a.revokeObjectURL(l),zn(c,r),c.userData.mimeType=r.mimeType||t0(r.uri),c}).catch(function(c){throw console.error("THREE.GLTFLoader: Couldn't load texture",l),c});return this.sourceCache[e]=u,u}assignTexture(e,t,n,i){const s=this;return this.getDependency("texture",n.index).then(function(r){if(!r)return null;if(n.texCoord!==void 0&&n.texCoord>0&&(r=r.clone(),r.channel=n.texCoord),s.extensions[Mt.KHR_TEXTURE_TRANSFORM]){const a=n.extensions!==void 0?n.extensions[Mt.KHR_TEXTURE_TRANSFORM]:void 0;if(a){const l=s.associations.get(r);r=s.extensions[Mt.KHR_TEXTURE_TRANSFORM].extendTexture(r,a),s.associations.set(r,l)}}return i!==void 0&&(r.colorSpace=i),e[t]=r,r})}assignFinalMaterial(e){const t=e.geometry;let n=e.material;const i=t.attributes.tangent===void 0,s=t.attributes.color!==void 0,r=t.attributes.normal===void 0;if(e.isPoints){const a="PointsMaterial:"+n.uuid;let l=this.cache.get(a);l||(l=new Cc,En.prototype.copy.call(l,n),l.color.copy(n.color),l.map=n.map,l.sizeAttenuation=!1,this.cache.add(a,l)),n=l}else if(e.isLine){const a="LineBasicMaterial:"+n.uuid;let l=this.cache.get(a);l||(l=new Rc,En.prototype.copy.call(l,n),l.color.copy(n.color),l.map=n.map,this.cache.add(a,l)),n=l}if(i||s||r){let a="ClonedMaterial:"+n.uuid+":";i&&(a+="derivative-tangents:"),s&&(a+="vertex-colors:"),r&&(a+="flat-shading:");let l=this.cache.get(a);l||(l=n.clone(),s&&(l.vertexColors=!0),r&&(l.flatShading=!0),i&&(l.normalScale&&(l.normalScale.y*=-1),l.clearcoatNormalScale&&(l.clearcoatNormalScale.y*=-1)),this.cache.add(a,l),this.associations.set(l,this.associations.get(n))),n=l}e.material=n}getMaterialType(){return yr}loadMaterial(e){const t=this,n=this.json,i=this.extensions,s=n.materials[e];let r;const a={},l=s.extensions||{},h=[];if(l[Mt.KHR_MATERIALS_UNLIT]){const c=i[Mt.KHR_MATERIALS_UNLIT];r=c.getMaterialType(),h.push(c.extendParams(a,s,t))}else{const c=s.pbrMetallicRoughness||{};if(a.color=new lt(1,1,1),a.opacity=1,Array.isArray(c.baseColorFactor)){const d=c.baseColorFactor;a.color.setRGB(d[0],d[1],d[2],tn),a.opacity=d[3]}c.baseColorTexture!==void 0&&h.push(t.assignTexture(a,"map",c.baseColorTexture,Vt)),a.metalness=c.metallicFactor!==void 0?c.metallicFactor:1,a.roughness=c.roughnessFactor!==void 0?c.roughnessFactor:1,c.metallicRoughnessTexture!==void 0&&(h.push(t.assignTexture(a,"metalnessMap",c.metallicRoughnessTexture)),h.push(t.assignTexture(a,"roughnessMap",c.metallicRoughnessTexture))),r=this._invokeOne(function(d){return d.getMaterialType&&d.getMaterialType(e)}),h.push(Promise.all(this._invokeAll(function(d){return d.extendMaterialParams&&d.extendMaterialParams(e,a)})))}s.doubleSided===!0&&(a.side=fn);const u=s.alphaMode||lo.OPAQUE;if(u===lo.BLEND?(a.transparent=!0,a.depthWrite=!1):(a.transparent=!1,u===lo.MASK&&(a.alphaTest=s.alphaCutoff!==void 0?s.alphaCutoff:.5)),s.normalTexture!==void 0&&r!==Jt&&(h.push(t.assignTexture(a,"normalMap",s.normalTexture)),a.normalScale=new ft(1,1),s.normalTexture.scale!==void 0)){const c=s.normalTexture.scale;a.normalScale.set(c,c)}if(s.occlusionTexture!==void 0&&r!==Jt&&(h.push(t.assignTexture(a,"aoMap",s.occlusionTexture)),s.occlusionTexture.strength!==void 0&&(a.aoMapIntensity=s.occlusionTexture.strength)),s.emissiveFactor!==void 0&&r!==Jt){const c=s.emissiveFactor;a.emissive=new lt().setRGB(c[0],c[1],c[2],tn)}return s.emissiveTexture!==void 0&&r!==Jt&&h.push(t.assignTexture(a,"emissiveMap",s.emissiveTexture,Vt)),Promise.all(h).then(function(){const c=new r(a);return s.name&&(c.name=s.name),zn(c,s),t.associations.set(c,{materials:e}),s.extensions&&ui(i,c,s),c})}createUniqueName(e){const t=At.sanitizeNodeName(e||"");return t in this.nodeNamesUsed?t+"_"+ ++this.nodeNamesUsed[t]:(this.nodeNamesUsed[t]=0,t)}loadGeometries(e){const t=this,n=this.extensions,i=this.primitiveCache;function s(a){return n[Mt.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(a,t).then(function(l){return ec(l,a,t)})}const r=[];for(let a=0,l=e.length;a<l;a++){const h=e[a],u=e0(h),c=i[u];if(c)r.push(c.promise);else{let d;h.extensions&&h.extensions[Mt.KHR_DRACO_MESH_COMPRESSION]?d=s(h):d=ec(new rn,h,t),i[u]={primitive:h,promise:d},r.push(d)}}return Promise.all(r)}loadMesh(e){const t=this,n=this.json,i=this.extensions,s=n.meshes[e],r=s.primitives,a=[];for(let l=0,h=r.length;l<h;l++){const u=r[l].material===void 0?$g(this.cache):this.getDependency("material",r[l].material);a.push(u)}return a.push(t.loadGeometries(r)),Promise.all(a).then(function(l){const h=l.slice(0,l.length-1),u=l[l.length-1],c=[];for(let f=0,m=u.length;f<m;f++){const g=u[f],v=r[f];let p;const x=h[f];if(v.mode===dn.TRIANGLES||v.mode===dn.TRIANGLE_STRIP||v.mode===dn.TRIANGLE_FAN||v.mode===void 0)p=s.isSkinnedMesh===!0?new wu(g,x):new Nt(g,x),p.isSkinnedMesh===!0&&p.normalizeSkinWeights(),v.mode===dn.TRIANGLE_STRIP?p.geometry=Zl(p.geometry,vc):v.mode===dn.TRIANGLE_FAN&&(p.geometry=Zl(p.geometry,Ko));else if(v.mode===dn.LINES)p=new Pu(g,x);else if(v.mode===dn.LINE_STRIP)p=new ga(g,x);else if(v.mode===dn.LINE_LOOP)p=new Lu(g,x);else if(v.mode===dn.POINTS)p=new Iu(g,x);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+v.mode);Object.keys(p.geometry.morphAttributes).length>0&&Qg(p,s),p.name=t.createUniqueName(s.name||"mesh_"+e),zn(p,s),v.extensions&&ui(i,p,v),t.assignFinalMaterial(p),c.push(p)}for(let f=0,m=c.length;f<m;f++)t.associations.set(c[f],{meshes:e,primitives:f});if(c.length===1)return s.extensions&&ui(i,c[0],s),c[0];const d=new Mn;s.extensions&&ui(i,d,s),t.associations.set(d,{meshes:e});for(let f=0,m=c.length;f<m;f++)d.add(c[f]);return d})}loadCamera(e){let t;const n=this.json.cameras[e],i=n[n.type];if(!i){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return n.type==="perspective"?t=new $t(qh.radToDeg(i.yfov),i.aspectRatio||1,i.znear||1,i.zfar||2e6):n.type==="orthographic"&&(t=new Sa(-i.xmag,i.xmag,i.ymag,-i.ymag,i.znear,i.zfar)),n.name&&(t.name=this.createUniqueName(n.name)),zn(t,n),Promise.resolve(t)}loadSkin(e){const t=this.json.skins[e],n=[];for(let i=0,s=t.joints.length;i<s;i++)n.push(this._loadNodeShallow(t.joints[i]));return t.inverseBindMatrices!==void 0?n.push(this.getDependency("accessor",t.inverseBindMatrices)):n.push(null),Promise.all(n).then(function(i){const s=i.pop(),r=i,a=[],l=[];for(let h=0,u=r.length;h<u;h++){const c=r[h];if(c){a.push(c);const d=new pt;s!==null&&d.fromArray(s.array,h*16),l.push(d)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',t.joints[h])}return new ma(a,l)})}loadAnimation(e){const t=this.json,n=this,i=t.animations[e],s=i.name?i.name:"animation_"+e,r=[],a=[],l=[],h=[],u=[];for(let c=0,d=i.channels.length;c<d;c++){const f=i.channels[c],m=i.samplers[f.sampler],g=f.target,v=g.node,p=i.parameters!==void 0?i.parameters[m.input]:m.input,x=i.parameters!==void 0?i.parameters[m.output]:m.output;g.node!==void 0&&(r.push(this.getDependency("node",v)),a.push(this.getDependency("accessor",p)),l.push(this.getDependency("accessor",x)),h.push(m),u.push(g))}return Promise.all([Promise.all(r),Promise.all(a),Promise.all(l),Promise.all(h),Promise.all(u)]).then(function(c){const d=c[0],f=c[1],m=c[2],g=c[3],v=c[4],p=[];for(let x=0,y=d.length;x<y;x++){const _=d[x],T=f[x],C=m[x],I=g[x],P=v[x];if(_===void 0)continue;_.updateMatrix&&_.updateMatrix();const S=n._createAnimationTracks(_,T,C,I,P);if(S)for(let M=0;M<S.length;M++)p.push(S[M])}return new ku(s,void 0,p)})}createNodeMesh(e){const t=this.json,n=this,i=t.nodes[e];return i.mesh===void 0?null:n.getDependency("mesh",i.mesh).then(function(s){const r=n._getNodeRef(n.meshCache,i.mesh,s);return i.weights!==void 0&&r.traverse(function(a){if(a.isMesh)for(let l=0,h=i.weights.length;l<h;l++)a.morphTargetInfluences[l]=i.weights[l]}),r})}loadNode(e){const t=this.json,n=this,i=t.nodes[e],s=n._loadNodeShallow(e),r=[],a=i.children||[];for(let h=0,u=a.length;h<u;h++)r.push(n.getDependency("node",a[h]));const l=i.skin===void 0?Promise.resolve(null):n.getDependency("skin",i.skin);return Promise.all([s,Promise.all(r),l]).then(function(h){const u=h[0],c=h[1],d=h[2];d!==null&&u.traverse(function(f){f.isSkinnedMesh&&f.bind(d,n0)});for(let f=0,m=c.length;f<m;f++)u.add(c[f]);return u})}_loadNodeShallow(e){const t=this.json,n=this.extensions,i=this;if(this.nodeCache[e]!==void 0)return this.nodeCache[e];const s=t.nodes[e],r=s.name?i.createUniqueName(s.name):"",a=[],l=i._invokeOne(function(h){return h.createNodeMesh&&h.createNodeMesh(e)});return l&&a.push(l),s.camera!==void 0&&a.push(i.getDependency("camera",s.camera).then(function(h){return i._getNodeRef(i.cameraCache,s.camera,h)})),i._invokeAll(function(h){return h.createNodeAttachment&&h.createNodeAttachment(e)}).forEach(function(h){a.push(h)}),this.nodeCache[e]=Promise.all(a).then(function(h){let u;if(s.isBone===!0?u=new Tc:h.length>1?u=new Mn:h.length===1?u=h[0]:u=new Ft,u!==h[0])for(let c=0,d=h.length;c<d;c++)u.add(h[c]);if(s.name&&(u.userData.name=s.name,u.name=r),zn(u,s),s.extensions&&ui(n,u,s),s.matrix!==void 0){const c=new pt;c.fromArray(s.matrix),u.applyMatrix4(c)}else s.translation!==void 0&&u.position.fromArray(s.translation),s.rotation!==void 0&&u.quaternion.fromArray(s.rotation),s.scale!==void 0&&u.scale.fromArray(s.scale);return i.associations.has(u)||i.associations.set(u,{}),i.associations.get(u).nodes=e,u}),this.nodeCache[e]}loadScene(e){const t=this.extensions,n=this.json.scenes[e],i=this,s=new Mn;n.name&&(s.name=i.createUniqueName(n.name)),zn(s,n),n.extensions&&ui(t,s,n);const r=n.nodes||[],a=[];for(let l=0,h=r.length;l<h;l++)a.push(i.getDependency("node",r[l]));return Promise.all(a).then(function(l){for(let u=0,c=l.length;u<c;u++)s.add(l[u]);const h=u=>{const c=new Map;for(const[d,f]of i.associations)(d instanceof En||d instanceof Wt)&&c.set(d,f);return u.traverse(d=>{const f=i.associations.get(d);f!=null&&c.set(d,f)}),c};return i.associations=h(s),s})}_createAnimationTracks(e,t,n,i,s){const r=[],a=e.name?e.name:e.uuid,l=[];Jn[s.path]===Jn.weights?e.traverse(function(d){d.morphTargetInfluences&&l.push(d.name?d.name:d.uuid)}):l.push(a);let h;switch(Jn[s.path]){case Jn.weights:h=Ki;break;case Jn.rotation:h=Zi;break;case Jn.position:case Jn.scale:h=$i;break;default:switch(n.itemSize){case 1:h=Ki;break;case 2:case 3:default:h=$i;break}break}const u=i.interpolation!==void 0?Zg[i.interpolation]:Ms,c=this._getArrayFromAccessor(n);for(let d=0,f=l.length;d<f;d++){const m=new h(l[d]+"."+Jn[s.path],t.array,c,u);i.interpolation==="CUBICSPLINE"&&this._createCubicSplineTrackInterpolant(m),r.push(m)}return r}_getArrayFromAccessor(e){let t=e.array;if(e.normalized){const n=ta(t.constructor),i=new Float32Array(t.length);for(let s=0,r=t.length;s<r;s++)i[s]=t[s]*n;t=i}return t}_createCubicSplineTrackInterpolant(e){e.createInterpolant=function(n){const i=this instanceof Zi?Kg:Hc;return new i(this.times,this.values,this.getValueSize()/3,n)},e.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}}function s0(o,e,t){const n=e.attributes,i=new An;if(n.POSITION!==void 0){const a=t.json.accessors[n.POSITION],l=a.min,h=a.max;if(l!==void 0&&h!==void 0){if(i.set(new H(l[0],l[1],l[2]),new H(h[0],h[1],h[2])),a.normalized){const u=ta(Vi[a.componentType]);i.min.multiplyScalar(u),i.max.multiplyScalar(u)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;const s=e.targets;if(s!==void 0){const a=new H,l=new H;for(let h=0,u=s.length;h<u;h++){const c=s[h];if(c.POSITION!==void 0){const d=t.json.accessors[c.POSITION],f=d.min,m=d.max;if(f!==void 0&&m!==void 0){if(l.setX(Math.max(Math.abs(f[0]),Math.abs(m[0]))),l.setY(Math.max(Math.abs(f[1]),Math.abs(m[1]))),l.setZ(Math.max(Math.abs(f[2]),Math.abs(m[2]))),d.normalized){const g=ta(Vi[d.componentType]);l.multiplyScalar(g)}a.max(l)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}i.expandByVector(a)}o.boundingBox=i;const r=new Rn;i.getCenter(r.center),r.radius=i.min.distanceTo(i.max)/2,o.boundingSphere=r}function ec(o,e,t){const n=e.attributes,i=[];function s(r,a){return t.getDependency("accessor",r).then(function(l){o.setAttribute(a,l)})}for(const r in n){const a=ea[r]||r.toLowerCase();a in o.attributes||i.push(s(n[r],a))}if(e.indices!==void 0&&!o.index){const r=t.getDependency("accessor",e.indices).then(function(a){o.setIndex(a)});i.push(r)}return Et.workingColorSpace!==tn&&"COLOR_0"in n&&console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${Et.workingColorSpace}" not supported.`),zn(o,e),s0(o,e,t),Promise.all(i).then(function(){return e.targets!==void 0?Jg(o,e.targets,t):o})}class r0 extends Ts{constructor(e){super(),this.sources=e,this.items={},this.toLoad=this.sources.length,this.loaded=0,this.setLoaders(),this.startLoading()}setLoaders(){this.loaders={},this.loaders.gltfLoader=new wg,this.loaders.textureLoader=new Uc,this.loaders.CubeTextureLoader=new Yu}startLoading(){for(const e of this.sources)e.type==="gltfModel"?this.loaders.gltfLoader.load(e.path,t=>{this.sourceLoaded(e,t)}):e.type==="texture"?this.loaders.textureLoader.load(e.path,t=>{this.sourceLoaded(e,t)}):e.type==="cubeTexture"&&this.loaders.CubeTextureLoader.load(e.path,t=>{this.sourceLoaded(e,t)})}sourceLoaded(e,t){this.items[e.name]=t,this.loaded++,this.loaded===this.toLoad&&(console.log("Finished"),this.trigger("ready"))}}const o0=[{name:"matcapTexture",type:"texture",path:"textures/matcaps/8.png"},{name:"grassColorTexture",type:"texture",path:"textures/matcaps/7.png"},{name:"rockColorTexture",type:"texture",path:"textures/matcaps/2.png"},{name:"carModel",type:"gltfModel",path:"models/car2.glb"}];class a0{constructor(){this.game=new on,this.time=this.game.time,this.world=new Dt.World,this.world.gravity.set(0,-9.82,0),this.world.broadphase=new Dt.SAPBroadphase(this.world),this.world.allowSleep=!0,this.world.defaultContactMaterial.friction=0,this.world.defaultContactMaterial.restitution=.2}update(){this.world.step(this.time.delta/1e3)}}let ho=null;class on{constructor(e){if(ho)return ho;ho=this,this.canvas=e,this.sizes=new Jv,this.time=new Qv,this.scene=new Mu,this.ressources=new r0(o0),this.physics=new a0,this.camera=new eg,this.renderer=new tg,this.world=new Eg,this.sizes.on("resize",()=>{this.resize()}),this.time.on("tick",()=>{this.update()})}resize(){this.camera.resize(),this.renderer.resize()}update(){this.physics.update(),this.world.update(),this.camera.update(),this.renderer.update()}}const l0=new on(document.querySelector("canvas.webgl"));window.__game=l0;
//# sourceMappingURL=index-BLuM6t-E.js.map
