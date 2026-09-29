var ic=0,ho=1,nc=2;var uo=1,rc=2,Qt=3,Cn=0,Et=1,ei=2,mi=0,fi=1,po=2,mo=3,fo=4,sc=5,Rn=100,ac=101,oc=102,lc=103,cc=104,hc=200,uc=201,dc=202,pc=203,mc=204,fc=205,gc=206,vc=207,_c=208,xc=209,yc=210,Mc=211,Sc=212,bc=213,Tc=214,Ys=0,Zs=1,Js=2,_r=3,Ks=4,$s=5,Qs=6,ea=7,wc=0,Ac=1,Ec=2,Vt=0,Cc=1,Rc=2,Ic=3,Pc=4,Lc=5,Dc=6,Uc=7;var go=300,In=301,Yi=302,ta=303,ia=304,xr=306,is=1e3,Ei=1001,ns=1002,Jt=1003,Nc=1004;var yr=1005;var Pt=1006,na=1007;var Zi=1008;var gi=1009,vo=1010,_o=1011,Pn=1012,ra=1013,Ji=1014,ti=1015,Ki=1016,sa=1017,aa=1018,Ln=1020,xo=35902,yo=35899,Fc=1021,Oc=1022,kt=1023,Mr=1026,Sr=1027,Mo=1028,oa=1029,So=1030,bo=1031;var To=1033,la=33776,ca=33777,ha=33778,ua=33779,wo=35840,Ao=35841,Eo=35842,Co=35843,Ro=36196,Io=37492,Po=37496,Lo=37808,Do=37809,Uo=37810,No=37811,Fo=37812,Oo=37813,Bo=37814,zo=37815,Go=37816,Vo=37817,ko=37818,Ho=37819,Wo=37820,Xo=37821,jo=36492,qo=36494,Yo=36495,Zo=36283,Jo=36284,Ko=36285,$o=36286;var qn=2300,rs=2301,es=2302,io=2400,no=2401,ro=2402;var Bc=3201;var zc=0,Gc=1,$i="",Tt="srgb",ui="srgb-linear",Yn="linear",je="srgb";var Gi=7680;var Vc=512,kc=513,Hc=514,Qo=515,Wc=516,Xc=517,jc=518,qc=519,so=35044;var el="300 es",di=2e3,Zn=2001;function tl(r){for(let e=r.length-1;e>=0;--e)if(r[e]>=65535)return!0;return!1}function Jn(r){return document.createElementNS("http://www.w3.org/1999/xhtml",r)}function Yc(){let r=Jn("canvas");return r.style.display="block",r}var Dl={},xn=null;function il(...r){let e="THREE."+r.shift();xn?xn("log",e,...r):console.log(e,...r)}function be(...r){let e="THREE."+r.shift();xn?xn("warn",e,...r):console.warn(e,...r)}function Oe(...r){let e="THREE."+r.shift();xn?xn("error",e,...r):console.error(e,...r)}function yn(...r){let e=r.join(" ");e in Dl||(Dl[e]=!0,be(...r))}function Zc(r,e,t){return new Promise(function(i,n){setTimeout(function s(){switch(r.clientWaitSync(e,r.SYNC_FLUSH_COMMANDS_BIT,0)){case r.WAIT_FAILED:n();break;case r.TIMEOUT_EXPIRED:setTimeout(s,t);break;default:i()}},t)})}var pi=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){let i=this._listeners;return i!==void 0&&i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){let i=this._listeners;if(i===void 0)return;let n=i[e];if(n!==void 0){let s=n.indexOf(t);s!==-1&&n.splice(s,1)}}dispatchEvent(e){let t=this._listeners;if(t===void 0)return;let i=t[e.type];if(i!==void 0){e.target=this;let n=i.slice(0);for(let s=0,a=n.length;s<a;s++)n[s].call(this,e);e.target=null}}},ft=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];var ts=Math.PI/180,ss=180/Math.PI;function Dn(){let r=4294967295*Math.random()|0,e=4294967295*Math.random()|0,t=4294967295*Math.random()|0,i=4294967295*Math.random()|0;return(ft[255&r]+ft[r>>8&255]+ft[r>>16&255]+ft[r>>24&255]+"-"+ft[255&e]+ft[e>>8&255]+"-"+ft[e>>16&15|64]+ft[e>>24&255]+"-"+ft[63&t|128]+ft[t>>8&255]+"-"+ft[t>>16&255]+ft[t>>24&255]+ft[255&i]+ft[i>>8&255]+ft[i>>16&255]+ft[i>>24&255]).toLowerCase()}function Be(r,e,t){return Math.max(e,Math.min(t,r))}function zh(r,e){return(r%e+e)%e}function Ra(r,e,t){return(1-t)*r+t*e}function zn(r,e){switch(e.constructor){case Float32Array:return r;case Uint32Array:return r/4294967295;case Uint16Array:return r/65535;case Uint8Array:return r/255;case Int32Array:return Math.max(r/2147483647,-1);case Int16Array:return Math.max(r/32767,-1);case Int8Array:return Math.max(r/127,-1);default:throw new Error("Invalid component type.")}}function xt(r,e){switch(e.constructor){case Float32Array:return r;case Uint32Array:return Math.round(4294967295*r);case Uint16Array:return Math.round(65535*r);case Uint8Array:return Math.round(255*r);case Int32Array:return Math.round(2147483647*r);case Int16Array:return Math.round(32767*r);case Int8Array:return Math.round(127*r);default:throw new Error("Invalid component type.")}}var re=class r{constructor(e=0,t=0){r.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,i=this.y,n=e.elements;return this.x=n[0]*t+n[3]*i+n[6],this.y=n[1]*t+n[4]*i+n[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Be(this.x,e.x,t.x),this.y=Be(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=Be(this.x,e,t),this.y=Be(this.y,e,t),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Be(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let i=this.dot(e)/t;return Math.acos(Be(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let i=Math.cos(t),n=Math.sin(t),s=this.x-e.x,a=this.y-e.y;return this.x=s*i-a*n+e.x,this.y=s*n+a*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},Bt=class{constructor(e=0,t=0,i=0,n=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=n}static slerpFlat(e,t,i,n,s,a,o){let c=i[n+0],l=i[n+1],h=i[n+2],u=i[n+3],d=s[a+0],p=s[a+1],f=s[a+2],x=s[a+3];if(o<=0)return e[t+0]=c,e[t+1]=l,e[t+2]=h,void(e[t+3]=u);if(o>=1)return e[t+0]=d,e[t+1]=p,e[t+2]=f,void(e[t+3]=x);if(u!==x||c!==d||l!==p||h!==f){let m=c*d+l*p+h*f+u*x;m<0&&(d=-d,p=-p,f=-f,x=-x,m=-m);let g=1-o;if(m<.9995){let v=Math.acos(m),_=Math.sin(v);g=Math.sin(g*v)/_,c=c*g+d*(o=Math.sin(o*v)/_),l=l*g+p*o,h=h*g+f*o,u=u*g+x*o}else{c=c*g+d*o,l=l*g+p*o,h=h*g+f*o,u=u*g+x*o;let v=1/Math.sqrt(c*c+l*l+h*h+u*u);c*=v,l*=v,h*=v,u*=v}}e[t]=c,e[t+1]=l,e[t+2]=h,e[t+3]=u}static multiplyQuaternionsFlat(e,t,i,n,s,a){let o=i[n],c=i[n+1],l=i[n+2],h=i[n+3],u=s[a],d=s[a+1],p=s[a+2],f=s[a+3];return e[t]=o*f+h*u+c*p-l*d,e[t+1]=c*f+h*d+l*u-o*p,e[t+2]=l*f+h*p+o*d-c*u,e[t+3]=h*f-o*u-c*d-l*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,n){return this._x=e,this._y=t,this._z=i,this._w=n,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let i=e._x,n=e._y,s=e._z,a=e._order,o=Math.cos,c=Math.sin,l=o(i/2),h=o(n/2),u=o(s/2),d=c(i/2),p=c(n/2),f=c(s/2);switch(a){case"XYZ":this._x=d*h*u+l*p*f,this._y=l*p*u-d*h*f,this._z=l*h*f+d*p*u,this._w=l*h*u-d*p*f;break;case"YXZ":this._x=d*h*u+l*p*f,this._y=l*p*u-d*h*f,this._z=l*h*f-d*p*u,this._w=l*h*u+d*p*f;break;case"ZXY":this._x=d*h*u-l*p*f,this._y=l*p*u+d*h*f,this._z=l*h*f+d*p*u,this._w=l*h*u-d*p*f;break;case"ZYX":this._x=d*h*u-l*p*f,this._y=l*p*u+d*h*f,this._z=l*h*f-d*p*u,this._w=l*h*u+d*p*f;break;case"YZX":this._x=d*h*u+l*p*f,this._y=l*p*u+d*h*f,this._z=l*h*f-d*p*u,this._w=l*h*u-d*p*f;break;case"XZY":this._x=d*h*u-l*p*f,this._y=l*p*u-d*h*f,this._z=l*h*f+d*p*u,this._w=l*h*u+d*p*f;break;default:be("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let i=t/2,n=Math.sin(i);return this._x=e.x*n,this._y=e.y*n,this._z=e.z*n,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,i=t[0],n=t[4],s=t[8],a=t[1],o=t[5],c=t[9],l=t[2],h=t[6],u=t[10],d=i+o+u;if(d>0){let p=.5/Math.sqrt(d+1);this._w=.25/p,this._x=(h-c)*p,this._y=(s-l)*p,this._z=(a-n)*p}else if(i>o&&i>u){let p=2*Math.sqrt(1+i-o-u);this._w=(h-c)/p,this._x=.25*p,this._y=(n+a)/p,this._z=(s+l)/p}else if(o>u){let p=2*Math.sqrt(1+o-i-u);this._w=(s-l)/p,this._x=(n+a)/p,this._y=.25*p,this._z=(c+h)/p}else{let p=2*Math.sqrt(1+u-i-o);this._w=(a-n)/p,this._x=(s+l)/p,this._y=(c+h)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<1e-8?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Be(this.dot(e),-1,1)))}rotateTowards(e,t){let i=this.angleTo(e);if(i===0)return this;let n=Math.min(1,t/i);return this.slerp(e,n),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let i=e._x,n=e._y,s=e._z,a=e._w,o=t._x,c=t._y,l=t._z,h=t._w;return this._x=i*h+a*o+n*l-s*c,this._y=n*h+a*c+s*o-i*l,this._z=s*h+a*l+i*c-n*o,this._w=a*h-i*o-n*c-s*l,this._onChangeCallback(),this}slerp(e,t){if(t<=0)return this;if(t>=1)return this.copy(e);let i=e._x,n=e._y,s=e._z,a=e._w,o=this.dot(e);o<0&&(i=-i,n=-n,s=-s,a=-a,o=-o);let c=1-t;if(o<.9995){let l=Math.acos(o),h=Math.sin(l);c=Math.sin(c*l)/h,t=Math.sin(t*l)/h,this._x=this._x*c+i*t,this._y=this._y*c+n*t,this._z=this._z*c+s*t,this._w=this._w*c+a*t,this._onChangeCallback()}else this._x=this._x*c+i*t,this._y=this._y*c+n*t,this._z=this._z*c+s*t,this._w=this._w*c+a*t,this.normalize();return this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),i=Math.random(),n=Math.sqrt(1-i),s=Math.sqrt(i);return this.set(n*Math.sin(e),n*Math.cos(e),s*Math.sin(t),s*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},C=class r{constructor(e=0,t=0,i=0){r.prototype.isVector3=!0,this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Ul.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Ul.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,i=this.y,n=this.z,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6]*n,this.y=s[1]*t+s[4]*i+s[7]*n,this.z=s[2]*t+s[5]*i+s[8]*n,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,i=this.y,n=this.z,s=e.elements,a=1/(s[3]*t+s[7]*i+s[11]*n+s[15]);return this.x=(s[0]*t+s[4]*i+s[8]*n+s[12])*a,this.y=(s[1]*t+s[5]*i+s[9]*n+s[13])*a,this.z=(s[2]*t+s[6]*i+s[10]*n+s[14])*a,this}applyQuaternion(e){let t=this.x,i=this.y,n=this.z,s=e.x,a=e.y,o=e.z,c=e.w,l=2*(a*n-o*i),h=2*(o*t-s*n),u=2*(s*i-a*t);return this.x=t+c*l+a*u-o*h,this.y=i+c*h+o*l-s*u,this.z=n+c*u+s*h-a*l,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,i=this.y,n=this.z,s=e.elements;return this.x=s[0]*t+s[4]*i+s[8]*n,this.y=s[1]*t+s[5]*i+s[9]*n,this.z=s[2]*t+s[6]*i+s[10]*n,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Be(this.x,e.x,t.x),this.y=Be(this.y,e.y,t.y),this.z=Be(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=Be(this.x,e,t),this.y=Be(this.y,e,t),this.z=Be(this.z,e,t),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Be(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let i=e.x,n=e.y,s=e.z,a=t.x,o=t.y,c=t.z;return this.x=n*c-s*o,this.y=s*a-i*c,this.z=i*o-n*a,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return Ia.copy(this).projectOnVector(e),this.sub(Ia)}reflect(e){return this.sub(Ia.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let i=this.dot(e)/t;return Math.acos(Be(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,i=this.y-e.y,n=this.z-e.z;return t*t+i*i+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){let n=Math.sin(t)*e;return this.x=n*Math.sin(i),this.y=Math.cos(t)*e,this.z=n*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),n=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=n,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,4*t)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,3*t)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=2*Math.random()-1,i=Math.sqrt(1-t*t);return this.x=i*Math.cos(e),this.y=t,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},Ia=new C,Ul=new Bt,Ie=class r{constructor(e,t,i,n,s,a,o,c,l){r.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,n,s,a,o,c,l)}set(e,t,i,n,s,a,o,c,l){let h=this.elements;return h[0]=e,h[1]=n,h[2]=o,h[3]=t,h[4]=s,h[5]=c,h[6]=i,h[7]=a,h[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let i=e.elements,n=t.elements,s=this.elements,a=i[0],o=i[3],c=i[6],l=i[1],h=i[4],u=i[7],d=i[2],p=i[5],f=i[8],x=n[0],m=n[3],g=n[6],v=n[1],_=n[4],T=n[7],E=n[2],b=n[5],D=n[8];return s[0]=a*x+o*v+c*E,s[3]=a*m+o*_+c*b,s[6]=a*g+o*T+c*D,s[1]=l*x+h*v+u*E,s[4]=l*m+h*_+u*b,s[7]=l*g+h*T+u*D,s[2]=d*x+p*v+f*E,s[5]=d*m+p*_+f*b,s[8]=d*g+p*T+f*D,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],i=e[1],n=e[2],s=e[3],a=e[4],o=e[5],c=e[6],l=e[7],h=e[8];return t*a*h-t*o*l-i*s*h+i*o*c+n*s*l-n*a*c}invert(){let e=this.elements,t=e[0],i=e[1],n=e[2],s=e[3],a=e[4],o=e[5],c=e[6],l=e[7],h=e[8],u=h*a-o*l,d=o*c-h*s,p=l*s-a*c,f=t*u+i*d+n*p;if(f===0)return this.set(0,0,0,0,0,0,0,0,0);let x=1/f;return e[0]=u*x,e[1]=(n*l-h*i)*x,e[2]=(o*i-n*a)*x,e[3]=d*x,e[4]=(h*t-n*c)*x,e[5]=(n*s-o*t)*x,e[6]=p*x,e[7]=(i*c-l*t)*x,e[8]=(a*t-i*s)*x,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,n,s,a,o){let c=Math.cos(s),l=Math.sin(s);return this.set(i*c,i*l,-i*(c*a+l*o)+a+e,-n*l,n*c,-n*(-l*a+c*o)+o+t,0,0,1),this}scale(e,t){return this.premultiply(Pa.makeScale(e,t)),this}rotate(e){return this.premultiply(Pa.makeRotation(-e)),this}translate(e,t){return this.premultiply(Pa.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,i=e.elements;for(let n=0;n<9;n++)if(t[n]!==i[n])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){let i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}},Pa=new Ie,Nl=new Ie().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Fl=new Ie().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Gh(){let r={enabled:!0,workingColorSpace:ui,spaces:{},convert:function(n,s,a){return this.enabled!==!1&&s!==a&&s&&a&&(this.spaces[s].transfer===je&&(n.r=hi(n.r),n.g=hi(n.g),n.b=hi(n.b)),this.spaces[s].primaries!==this.spaces[a].primaries&&(n.applyMatrix3(this.spaces[s].toXYZ),n.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===je&&(n.r=_n(n.r),n.g=_n(n.g),n.b=_n(n.b))),n},workingToColorSpace:function(n,s){return this.convert(n,this.workingColorSpace,s)},colorSpaceToWorking:function(n,s){return this.convert(n,s,this.workingColorSpace)},getPrimaries:function(n){return this.spaces[n].primaries},getTransfer:function(n){return n===""?Yn:this.spaces[n].transfer},getToneMappingMode:function(n){return this.spaces[n].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(n,s=this.workingColorSpace){return n.fromArray(this.spaces[s].luminanceCoefficients)},define:function(n){Object.assign(this.spaces,n)},_getMatrix:function(n,s,a){return n.copy(this.spaces[s].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(n){return this.spaces[n].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(n=this.workingColorSpace){return this.spaces[n].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(n,s){return yn("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),r.workingToColorSpace(n,s)},toWorkingColorSpace:function(n,s){return yn("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),r.colorSpaceToWorking(n,s)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],i=[.3127,.329];return r.define({[ui]:{primaries:e,whitePoint:i,transfer:Yn,toXYZ:Nl,fromXYZ:Fl,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:Tt},outputColorSpaceConfig:{drawingBufferColorSpace:Tt}},[Tt]:{primaries:e,whitePoint:i,transfer:je,toXYZ:Nl,fromXYZ:Fl,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:Tt}}}),r}var He=Gh();function hi(r){return r<.04045?.0773993808*r:Math.pow(.9478672986*r+.0521327014,2.4)}function _n(r){return r<.0031308?12.92*r:1.055*Math.pow(r,.41666)-.055}var on,as=class{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let i;if(e instanceof HTMLCanvasElement)i=e;else{on===void 0&&(on=Jn("canvas")),on.width=e.width,on.height=e.height;let n=on.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),i=on}return i.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=Jn("canvas");t.width=e.width,t.height=e.height;let i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);let n=i.getImageData(0,0,e.width,e.height),s=n.data;for(let a=0;a<s.length;a++)s[a]=255*hi(s[a]/255);return i.putImageData(n,0,0),t}if(e.data){let t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(255*hi(t[i]/255)):t[i]=hi(t[i]);return{data:t,width:e.width,height:e.height}}return be("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},Vh=0,Mn=class{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Vh++}),this.uuid=Dn(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){let t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):t instanceof VideoFrame?e.set(t.displayHeight,t.displayWidth,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let i={uuid:this.uuid,url:""},n=this.data;if(n!==null){let s;if(Array.isArray(n)){s=[];for(let a=0,o=n.length;a<o;a++)n[a].isDataTexture?s.push(La(n[a].image)):s.push(La(n[a]))}else s=La(n);i.url=s}return t||(e.images[this.uuid]=i),i}};function La(r){return typeof HTMLImageElement<"u"&&r instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&r instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&r instanceof ImageBitmap?as.getDataURL(r):r.data?{data:Array.from(r.data),width:r.width,height:r.height,type:r.data.constructor.name}:(be("Texture: Unable to serialize Texture."),{})}var kh=0,Da=new C,Mt=class r extends pi{constructor(e=r.DEFAULT_IMAGE,t=r.DEFAULT_MAPPING,i=1001,n=1001,s=1006,a=1008,o=1023,c=1009,l=r.DEFAULT_ANISOTROPY,h=""){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:kh++}),this.uuid=Dn(),this.name="",this.source=new Mn(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=n,this.magFilter=s,this.minFilter=a,this.anisotropy=l,this.format=o,this.internalFormat=null,this.type=c,this.offset=new re(0,0),this.repeat=new re(1,1),this.center=new re(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ie,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(Da).x}get height(){return this.source.getSize(Da).y}get depth(){return this.source.getSize(Da).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(let t in e){let i=e[t];if(i===void 0){be(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}let n=this[t];n!==void 0?n&&i&&n.isVector2&&i.isVector2||n&&i&&n.isVector3&&i.isVector3||n&&i&&n.isMatrix3&&i.isMatrix3?n.copy(i):this[t]=i:be(`Texture.setValues(): property '${t}' does not exist.`)}}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==go)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case is:e.x=e.x-Math.floor(e.x);break;case Ei:e.x=e.x<0?0:1;break;case ns:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x)}if(e.y<0||e.y>1)switch(this.wrapT){case is:e.y=e.y-Math.floor(e.y);break;case Ei:e.y=e.y<0?0:1;break;case ns:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y)}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};Mt.DEFAULT_IMAGE=null,Mt.DEFAULT_MAPPING=go,Mt.DEFAULT_ANISOTROPY=1;var Ke=class r{constructor(e=0,t=0,i=0,n=1){r.prototype.isVector4=!0,this.x=e,this.y=t,this.z=i,this.w=n}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,n){return this.x=e,this.y=t,this.z=i,this.w=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,i=this.y,n=this.z,s=this.w,a=e.elements;return this.x=a[0]*t+a[4]*i+a[8]*n+a[12]*s,this.y=a[1]*t+a[5]*i+a[9]*n+a[13]*s,this.z=a[2]*t+a[6]*i+a[10]*n+a[14]*s,this.w=a[3]*t+a[7]*i+a[11]*n+a[15]*s,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,n,s,c=e.elements,l=c[0],h=c[4],u=c[8],d=c[1],p=c[5],f=c[9],x=c[2],m=c[6],g=c[10];if(Math.abs(h-d)<.01&&Math.abs(u-x)<.01&&Math.abs(f-m)<.01){if(Math.abs(h+d)<.1&&Math.abs(u+x)<.1&&Math.abs(f+m)<.1&&Math.abs(l+p+g-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let _=(l+1)/2,T=(p+1)/2,E=(g+1)/2,b=(h+d)/4,D=(u+x)/4,z=(f+m)/4;return _>T&&_>E?_<.01?(i=0,n=.707106781,s=.707106781):(i=Math.sqrt(_),n=b/i,s=D/i):T>E?T<.01?(i=.707106781,n=0,s=.707106781):(n=Math.sqrt(T),i=b/n,s=z/n):E<.01?(i=.707106781,n=.707106781,s=0):(s=Math.sqrt(E),i=D/s,n=z/s),this.set(i,n,s,t),this}let v=Math.sqrt((m-f)*(m-f)+(u-x)*(u-x)+(d-h)*(d-h));return Math.abs(v)<.001&&(v=1),this.x=(m-f)/v,this.y=(u-x)/v,this.z=(d-h)/v,this.w=Math.acos((l+p+g-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Be(this.x,e.x,t.x),this.y=Be(this.y,e.y,t.y),this.z=Be(this.z,e.z,t.z),this.w=Be(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=Be(this.x,e,t),this.y=Be(this.y,e,t),this.z=Be(this.z,e,t),this.w=Be(this.w,e,t),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Be(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},os=class extends pi{constructor(e=1,t=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Pt,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},i),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=i.depth,this.scissor=new Ke(0,0,e,t),this.scissorTest=!1,this.viewport=new Ke(0,0,e,t);let n={width:e,height:t,depth:i.depth},s=new Mt(n);this.textures=[];let a=i.count;for(let o=0;o<a;o++)this.textures[o]=s.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview}_setTextureOptions(e={}){let t={minFilter:Pt,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let n=0,s=this.textures.length;n<s;n++)this.textures[n].image.width=e,this.textures[n].image.height=t,this.textures[n].image.depth=i,this.textures[n].isData3DTexture!==!0&&(this.textures[n].isArrayTexture=this.textures[n].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,i=e.textures.length;t<i;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;let n=Object.assign({},e.textures[t].image);this.textures[t].source=new Mn(n)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},Kt=class extends os{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}},Kn=class extends Mt{constructor(e=null,t=1,i=1,n=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:n},this.magFilter=Jt,this.minFilter=Jt,this.wrapR=Ei,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}};var ls=class extends Mt{constructor(e=null,t=1,i=1,n=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:n},this.magFilter=Jt,this.minFilter=Jt,this.wrapR=Ei,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var zt=class{constructor(e=new C(1/0,1/0,1/0),t=new C(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(Nt.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(Nt.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let i=Nt.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let i=e.geometry;if(i!==void 0){let s=i.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=s.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,Nt):Nt.fromBufferAttribute(s,a),Nt.applyMatrix4(e.matrixWorld),this.expandByPoint(Nt);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Ir.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Ir.copy(i.boundingBox)),Ir.applyMatrix4(e.matrixWorld),this.union(Ir)}let n=e.children;for(let s=0,a=n.length;s<a;s++)this.expandByObject(n[s],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Nt),Nt.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Gn),Pr.subVectors(this.max,Gn),ln.subVectors(e.a,Gn),cn.subVectors(e.b,Gn),hn.subVectors(e.c,Gn),xi.subVectors(cn,ln),yi.subVectors(hn,cn),Fi.subVectors(ln,hn);let t=[0,-xi.z,xi.y,0,-yi.z,yi.y,0,-Fi.z,Fi.y,xi.z,0,-xi.x,yi.z,0,-yi.x,Fi.z,0,-Fi.x,-xi.y,xi.x,0,-yi.y,yi.x,0,-Fi.y,Fi.x,0];return!!Ua(t,ln,cn,hn,Pr)&&(t=[1,0,0,0,1,0,0,0,1],!!Ua(t,ln,cn,hn,Pr)&&(Lr.crossVectors(xi,yi),t=[Lr.x,Lr.y,Lr.z],Ua(t,ln,cn,hn,Pr)))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Nt).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=.5*this.getSize(Nt).length()),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()||(ri[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),ri[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),ri[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),ri[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),ri[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),ri[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),ri[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),ri[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(ri)),this}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}},ri=[new C,new C,new C,new C,new C,new C,new C,new C],Nt=new C,Ir=new zt,ln=new C,cn=new C,hn=new C,xi=new C,yi=new C,Fi=new C,Gn=new C,Pr=new C,Lr=new C,Oi=new C;function Ua(r,e,t,i,n){for(let s=0,a=r.length-3;s<=a;s+=3){Oi.fromArray(r,s);let o=n.x*Math.abs(Oi.x)+n.y*Math.abs(Oi.y)+n.z*Math.abs(Oi.z),c=e.dot(Oi),l=t.dot(Oi),h=i.dot(Oi);if(Math.max(-Math.max(c,l,h),Math.min(c,l,h))>o)return!1}return!0}var Hh=new zt,Vn=new C,Na=new C,Gt=class{constructor(e=new C,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let i=this.center;t!==void 0?i.copy(t):Hh.setFromPoints(e).getCenter(i);let n=0;for(let s=0,a=e.length;s<a;s++)n=Math.max(n,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(n),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Vn.subVectors(e,this.center);let t=Vn.lengthSq();if(t>this.radius*this.radius){let i=Math.sqrt(t),n=.5*(i-this.radius);this.center.addScaledVector(Vn,n/i),this.radius+=n}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Na.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Vn.copy(e.center).add(Na)),this.expandByPoint(Vn.copy(e.center).sub(Na))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}},si=new C,Fa=new C,Dr=new C,Mi=new C,Oa=new C,Ur=new C,Ba=new C,ki=class{constructor(e=new C,t=new C(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,si)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=si.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(si.copy(this.origin).addScaledVector(this.direction,t),si.distanceToSquared(e))}distanceSqToSegment(e,t,i,n){Fa.copy(e).add(t).multiplyScalar(.5),Dr.copy(t).sub(e).normalize(),Mi.copy(this.origin).sub(Fa);let s=.5*e.distanceTo(t),a=-this.direction.dot(Dr),o=Mi.dot(this.direction),c=-Mi.dot(Dr),l=Mi.lengthSq(),h=Math.abs(1-a*a),u,d,p,f;if(h>0)if(u=a*c-o,d=a*o-c,f=s*h,u>=0)if(d>=-f)if(d<=f){let x=1/h;u*=x,d*=x,p=u*(u+a*d+2*o)+d*(a*u+d+2*c)+l}else d=s,u=Math.max(0,-(a*d+o)),p=-u*u+d*(d+2*c)+l;else d=-s,u=Math.max(0,-(a*d+o)),p=-u*u+d*(d+2*c)+l;else d<=-f?(u=Math.max(0,-(-a*s+o)),d=u>0?-s:Math.min(Math.max(-s,-c),s),p=-u*u+d*(d+2*c)+l):d<=f?(u=0,d=Math.min(Math.max(-s,-c),s),p=d*(d+2*c)+l):(u=Math.max(0,-(a*s+o)),d=u>0?s:Math.min(Math.max(-s,-c),s),p=-u*u+d*(d+2*c)+l);else d=a>0?-s:s,u=Math.max(0,-(a*d+o)),p=-u*u+d*(d+2*c)+l;return i&&i.copy(this.origin).addScaledVector(this.direction,u),n&&n.copy(Fa).addScaledVector(Dr,d),p}intersectSphere(e,t){si.subVectors(e.center,this.origin);let i=si.dot(this.direction),n=si.dot(si)-i*i,s=e.radius*e.radius;if(n>s)return null;let a=Math.sqrt(s-n),o=i-a,c=i+a;return c<0?null:o<0?this.at(c,t):this.at(o,t)}intersectsSphere(e){return!(e.radius<0)&&this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){let i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0?!0:e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,n,s,a,o,c,l=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,d=this.origin;return l>=0?(i=(e.min.x-d.x)*l,n=(e.max.x-d.x)*l):(i=(e.max.x-d.x)*l,n=(e.min.x-d.x)*l),h>=0?(s=(e.min.y-d.y)*h,a=(e.max.y-d.y)*h):(s=(e.max.y-d.y)*h,a=(e.min.y-d.y)*h),i>a||s>n?null:((s>i||isNaN(i))&&(i=s),(a<n||isNaN(n))&&(n=a),u>=0?(o=(e.min.z-d.z)*u,c=(e.max.z-d.z)*u):(o=(e.max.z-d.z)*u,c=(e.min.z-d.z)*u),i>c||o>n?null:((o>i||i!=i)&&(i=o),(c<n||n!=n)&&(n=c),n<0?null:this.at(i>=0?i:n,t)))}intersectsBox(e){return this.intersectBox(e,si)!==null}intersectTriangle(e,t,i,n,s){Oa.subVectors(t,e),Ur.subVectors(i,e),Ba.crossVectors(Oa,Ur);let a,o=this.direction.dot(Ba);if(o>0){if(n)return null;a=1}else{if(!(o<0))return null;a=-1,o=-o}Mi.subVectors(this.origin,e);let c=a*this.direction.dot(Ur.crossVectors(Mi,Ur));if(c<0)return null;let l=a*this.direction.dot(Oa.cross(Mi));if(l<0||c+l>o)return null;let h=-a*Mi.dot(Ba);return h<0?null:this.at(h/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},Le=class r{constructor(e,t,i,n,s,a,o,c,l,h,u,d,p,f,x,m){r.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,n,s,a,o,c,l,h,u,d,p,f,x,m)}set(e,t,i,n,s,a,o,c,l,h,u,d,p,f,x,m){let g=this.elements;return g[0]=e,g[4]=t,g[8]=i,g[12]=n,g[1]=s,g[5]=a,g[9]=o,g[13]=c,g[2]=l,g[6]=h,g[10]=u,g[14]=d,g[3]=p,g[7]=f,g[11]=x,g[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new r().fromArray(this.elements)}copy(e){let t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){let t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){let t=this.elements,i=e.elements,n=1/un.setFromMatrixColumn(e,0).length(),s=1/un.setFromMatrixColumn(e,1).length(),a=1/un.setFromMatrixColumn(e,2).length();return t[0]=i[0]*n,t[1]=i[1]*n,t[2]=i[2]*n,t[3]=0,t[4]=i[4]*s,t[5]=i[5]*s,t[6]=i[6]*s,t[7]=0,t[8]=i[8]*a,t[9]=i[9]*a,t[10]=i[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,i=e.x,n=e.y,s=e.z,a=Math.cos(i),o=Math.sin(i),c=Math.cos(n),l=Math.sin(n),h=Math.cos(s),u=Math.sin(s);if(e.order==="XYZ"){let d=a*h,p=a*u,f=o*h,x=o*u;t[0]=c*h,t[4]=-c*u,t[8]=l,t[1]=p+f*l,t[5]=d-x*l,t[9]=-o*c,t[2]=x-d*l,t[6]=f+p*l,t[10]=a*c}else if(e.order==="YXZ"){let d=c*h,p=c*u,f=l*h,x=l*u;t[0]=d+x*o,t[4]=f*o-p,t[8]=a*l,t[1]=a*u,t[5]=a*h,t[9]=-o,t[2]=p*o-f,t[6]=x+d*o,t[10]=a*c}else if(e.order==="ZXY"){let d=c*h,p=c*u,f=l*h,x=l*u;t[0]=d-x*o,t[4]=-a*u,t[8]=f+p*o,t[1]=p+f*o,t[5]=a*h,t[9]=x-d*o,t[2]=-a*l,t[6]=o,t[10]=a*c}else if(e.order==="ZYX"){let d=a*h,p=a*u,f=o*h,x=o*u;t[0]=c*h,t[4]=f*l-p,t[8]=d*l+x,t[1]=c*u,t[5]=x*l+d,t[9]=p*l-f,t[2]=-l,t[6]=o*c,t[10]=a*c}else if(e.order==="YZX"){let d=a*c,p=a*l,f=o*c,x=o*l;t[0]=c*h,t[4]=x-d*u,t[8]=f*u+p,t[1]=u,t[5]=a*h,t[9]=-o*h,t[2]=-l*h,t[6]=p*u+f,t[10]=d-x*u}else if(e.order==="XZY"){let d=a*c,p=a*l,f=o*c,x=o*l;t[0]=c*h,t[4]=-u,t[8]=l*h,t[1]=d*u+x,t[5]=a*h,t[9]=p*u-f,t[2]=f*u-p,t[6]=o*h,t[10]=x*u+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Wh,e,Xh)}lookAt(e,t,i){let n=this.elements;return St.subVectors(e,t),St.lengthSq()===0&&(St.z=1),St.normalize(),Si.crossVectors(i,St),Si.lengthSq()===0&&(Math.abs(i.z)===1?St.x+=1e-4:St.z+=1e-4,St.normalize(),Si.crossVectors(i,St)),Si.normalize(),Nr.crossVectors(St,Si),n[0]=Si.x,n[4]=Nr.x,n[8]=St.x,n[1]=Si.y,n[5]=Nr.y,n[9]=St.y,n[2]=Si.z,n[6]=Nr.z,n[10]=St.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let i=e.elements,n=t.elements,s=this.elements,a=i[0],o=i[4],c=i[8],l=i[12],h=i[1],u=i[5],d=i[9],p=i[13],f=i[2],x=i[6],m=i[10],g=i[14],v=i[3],_=i[7],T=i[11],E=i[15],b=n[0],D=n[4],z=n[8],L=n[12],B=n[1],V=n[5],F=n[9],Y=n[13],G=n[2],Z=n[6],$=n[10],ae=n[14],ne=n[3],he=n[7],ue=n[11],ve=n[15];return s[0]=a*b+o*B+c*G+l*ne,s[4]=a*D+o*V+c*Z+l*he,s[8]=a*z+o*F+c*$+l*ue,s[12]=a*L+o*Y+c*ae+l*ve,s[1]=h*b+u*B+d*G+p*ne,s[5]=h*D+u*V+d*Z+p*he,s[9]=h*z+u*F+d*$+p*ue,s[13]=h*L+u*Y+d*ae+p*ve,s[2]=f*b+x*B+m*G+g*ne,s[6]=f*D+x*V+m*Z+g*he,s[10]=f*z+x*F+m*$+g*ue,s[14]=f*L+x*Y+m*ae+g*ve,s[3]=v*b+_*B+T*G+E*ne,s[7]=v*D+_*V+T*Z+E*he,s[11]=v*z+_*F+T*$+E*ue,s[15]=v*L+_*Y+T*ae+E*ve,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],i=e[4],n=e[8],s=e[12],a=e[1],o=e[5],c=e[9],l=e[13],h=e[2],u=e[6],d=e[10],p=e[14];return e[3]*(+s*c*u-n*l*u-s*o*d+i*l*d+n*o*p-i*c*p)+e[7]*(+t*c*p-t*l*d+s*a*d-n*a*p+n*l*h-s*c*h)+e[11]*(+t*l*u-t*o*p-s*a*u+i*a*p+s*o*h-i*l*h)+e[15]*(-n*o*h-t*c*u+t*o*d+n*a*u-i*a*d+i*c*h)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){let n=this.elements;return e.isVector3?(n[12]=e.x,n[13]=e.y,n[14]=e.z):(n[12]=e,n[13]=t,n[14]=i),this}invert(){let e=this.elements,t=e[0],i=e[1],n=e[2],s=e[3],a=e[4],o=e[5],c=e[6],l=e[7],h=e[8],u=e[9],d=e[10],p=e[11],f=e[12],x=e[13],m=e[14],g=e[15],v=u*m*l-x*d*l+x*c*p-o*m*p-u*c*g+o*d*g,_=f*d*l-h*m*l-f*c*p+a*m*p+h*c*g-a*d*g,T=h*x*l-f*u*l+f*o*p-a*x*p-h*o*g+a*u*g,E=f*u*c-h*x*c-f*o*d+a*x*d+h*o*m-a*u*m,b=t*v+i*_+n*T+s*E;if(b===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let D=1/b;return e[0]=v*D,e[1]=(x*d*s-u*m*s-x*n*p+i*m*p+u*n*g-i*d*g)*D,e[2]=(o*m*s-x*c*s+x*n*l-i*m*l-o*n*g+i*c*g)*D,e[3]=(u*c*s-o*d*s-u*n*l+i*d*l+o*n*p-i*c*p)*D,e[4]=_*D,e[5]=(h*m*s-f*d*s+f*n*p-t*m*p-h*n*g+t*d*g)*D,e[6]=(f*c*s-a*m*s-f*n*l+t*m*l+a*n*g-t*c*g)*D,e[7]=(a*d*s-h*c*s+h*n*l-t*d*l-a*n*p+t*c*p)*D,e[8]=T*D,e[9]=(f*u*s-h*x*s-f*i*p+t*x*p+h*i*g-t*u*g)*D,e[10]=(a*x*s-f*o*s+f*i*l-t*x*l-a*i*g+t*o*g)*D,e[11]=(h*o*s-a*u*s-h*i*l+t*u*l+a*i*p-t*o*p)*D,e[12]=E*D,e[13]=(h*x*n-f*u*n+f*i*d-t*x*d-h*i*m+t*u*m)*D,e[14]=(f*o*n-a*x*n-f*i*c+t*x*c+a*i*m-t*o*m)*D,e[15]=(a*u*n-h*o*n+h*i*c-t*u*c-a*i*d+t*o*d)*D,this}scale(e){let t=this.elements,i=e.x,n=e.y,s=e.z;return t[0]*=i,t[4]*=n,t[8]*=s,t[1]*=i,t[5]*=n,t[9]*=s,t[2]*=i,t[6]*=n,t[10]*=s,t[3]*=i,t[7]*=n,t[11]*=s,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],n=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,n))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let i=Math.cos(t),n=Math.sin(t),s=1-i,a=e.x,o=e.y,c=e.z,l=s*a,h=s*o;return this.set(l*a+i,l*o-n*c,l*c+n*o,0,l*o+n*c,h*o+i,h*c-n*a,0,l*c-n*o,h*c+n*a,s*c*c+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,n,s,a){return this.set(1,i,s,0,e,1,a,0,t,n,1,0,0,0,0,1),this}compose(e,t,i){let n=this.elements,s=t._x,a=t._y,o=t._z,c=t._w,l=s+s,h=a+a,u=o+o,d=s*l,p=s*h,f=s*u,x=a*h,m=a*u,g=o*u,v=c*l,_=c*h,T=c*u,E=i.x,b=i.y,D=i.z;return n[0]=(1-(x+g))*E,n[1]=(p+T)*E,n[2]=(f-_)*E,n[3]=0,n[4]=(p-T)*b,n[5]=(1-(d+g))*b,n[6]=(m+v)*b,n[7]=0,n[8]=(f+_)*D,n[9]=(m-v)*D,n[10]=(1-(d+x))*D,n[11]=0,n[12]=e.x,n[13]=e.y,n[14]=e.z,n[15]=1,this}decompose(e,t,i){let n=this.elements,s=un.set(n[0],n[1],n[2]).length(),a=un.set(n[4],n[5],n[6]).length(),o=un.set(n[8],n[9],n[10]).length();this.determinant()<0&&(s=-s),e.x=n[12],e.y=n[13],e.z=n[14],Ft.copy(this);let c=1/s,l=1/a,h=1/o;return Ft.elements[0]*=c,Ft.elements[1]*=c,Ft.elements[2]*=c,Ft.elements[4]*=l,Ft.elements[5]*=l,Ft.elements[6]*=l,Ft.elements[8]*=h,Ft.elements[9]*=h,Ft.elements[10]*=h,t.setFromRotationMatrix(Ft),i.x=s,i.y=a,i.z=o,this}makePerspective(e,t,i,n,s,a,o=2e3,c=!1){let l=this.elements,h=2*s/(t-e),u=2*s/(i-n),d=(t+e)/(t-e),p=(i+n)/(i-n),f,x;if(c)f=s/(a-s),x=a*s/(a-s);else if(o===di)f=-(a+s)/(a-s),x=-2*a*s/(a-s);else{if(o!==Zn)throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);f=-a/(a-s),x=-a*s/(a-s)}return l[0]=h,l[4]=0,l[8]=d,l[12]=0,l[1]=0,l[5]=u,l[9]=p,l[13]=0,l[2]=0,l[6]=0,l[10]=f,l[14]=x,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,i,n,s,a,o=2e3,c=!1){let l=this.elements,h=2/(t-e),u=2/(i-n),d=-(t+e)/(t-e),p=-(i+n)/(i-n),f,x;if(c)f=1/(a-s),x=a/(a-s);else if(o===di)f=-2/(a-s),x=-(a+s)/(a-s);else{if(o!==Zn)throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);f=-1/(a-s),x=-s/(a-s)}return l[0]=h,l[4]=0,l[8]=0,l[12]=d,l[1]=0,l[5]=u,l[9]=0,l[13]=p,l[2]=0,l[6]=0,l[10]=f,l[14]=x,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){let t=this.elements,i=e.elements;for(let n=0;n<16;n++)if(t[n]!==i[n])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){let i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}},un=new C,Ft=new Le,Wh=new C(0,0,0),Xh=new C(1,1,1),Si=new C,Nr=new C,St=new C,Ol=new Le,Bl=new Bt,$t=class r{constructor(e=0,t=0,i=0,n=r.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=n}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,n=this._order){return this._x=e,this._y=t,this._z=i,this._order=n,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){let n=e.elements,s=n[0],a=n[4],o=n[8],c=n[1],l=n[5],h=n[9],u=n[2],d=n[6],p=n[10];switch(t){case"XYZ":this._y=Math.asin(Be(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,p),this._z=Math.atan2(-a,s)):(this._x=Math.atan2(d,l),this._z=0);break;case"YXZ":this._x=Math.asin(-Be(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,p),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-u,s),this._z=0);break;case"ZXY":this._x=Math.asin(Be(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,p),this._z=Math.atan2(-a,l)):(this._y=0,this._z=Math.atan2(c,s));break;case"ZYX":this._y=Math.asin(-Be(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,p),this._z=Math.atan2(c,s)):(this._x=0,this._z=Math.atan2(-a,l));break;case"YZX":this._z=Math.asin(Be(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-h,l),this._y=Math.atan2(-u,s)):(this._x=0,this._y=Math.atan2(o,p));break;case"XZY":this._z=Math.asin(-Be(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(d,l),this._y=Math.atan2(o,s)):(this._x=Math.atan2(-h,p),this._y=0);break;default:be("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return Ol.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Ol,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Bl.setFromEuler(this),this.setFromQuaternion(Bl,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};$t.DEFAULT_ORDER="XYZ";var $n=class{constructor(){this.mask=1}set(e){this.mask=1<<e>>>0}enable(e){this.mask|=1<<e}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e}disable(e){this.mask&=~(1<<e)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return!!(this.mask&1<<e)}},jh=0,zl=new C,dn=new Bt,ai=new Le,Fr=new C,kn=new C,qh=new C,Yh=new Bt,Gl=new C(1,0,0),Vl=new C(0,1,0),kl=new C(0,0,1),Hl={type:"added"},Zh={type:"removed"},pn={type:"childadded",child:null},za={type:"childremoved",child:null},It=class r extends pi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:jh++}),this.uuid=Dn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=r.DEFAULT_UP.clone();let e=new C,t=new $t,i=new Bt,n=new C(1,1,1);t._onChange(function(){i.setFromEuler(t,!1)}),i._onChange(function(){t.setFromQuaternion(i,void 0,!1)}),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:n},modelViewMatrix:{value:new Le},normalMatrix:{value:new Ie}}),this.matrix=new Le,this.matrixWorld=new Le,this.matrixAutoUpdate=r.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=r.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new $n,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return dn.setFromAxisAngle(e,t),this.quaternion.multiply(dn),this}rotateOnWorldAxis(e,t){return dn.setFromAxisAngle(e,t),this.quaternion.premultiply(dn),this}rotateX(e){return this.rotateOnAxis(Gl,e)}rotateY(e){return this.rotateOnAxis(Vl,e)}rotateZ(e){return this.rotateOnAxis(kl,e)}translateOnAxis(e,t){return zl.copy(e).applyQuaternion(this.quaternion),this.position.add(zl.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Gl,e)}translateY(e){return this.translateOnAxis(Vl,e)}translateZ(e){return this.translateOnAxis(kl,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(ai.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?Fr.copy(e):Fr.set(e,t,i);let n=this.parent;this.updateWorldMatrix(!0,!1),kn.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?ai.lookAt(kn,Fr,this.up):ai.lookAt(Fr,kn,this.up),this.quaternion.setFromRotationMatrix(ai),n&&(ai.extractRotation(n.matrixWorld),dn.setFromRotationMatrix(ai),this.quaternion.premultiply(dn.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(Oe("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Hl),pn.child=e,this.dispatchEvent(pn),pn.child=null):Oe("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Zh),za.child=e,this.dispatchEvent(za),za.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),ai.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),ai.multiply(e.parent.matrixWorld)),e.applyMatrix4(ai),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Hl),pn.child=e,this.dispatchEvent(pn),pn.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,n=this.children.length;i<n;i++){let s=this.children[i].getObjectByProperty(e,t);if(s!==void 0)return s}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);let n=this.children;for(let s=0,a=n.length;s<a;s++)n[s].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(kn,e,qh),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(kn,Yh,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);let t=this.children;for(let i=0,n=t.length;i<n;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let i=0,n=t.length;i<n;i++)t[i].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let i=0,n=t.length;i<n;i++)t[i].updateMatrixWorld(e)}updateWorldMatrix(e,t){let i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){let n=this.children;for(let s=0,a=n.length;s<a;s++)n[s].updateWorldMatrix(!1,!0)}}toJSON(e){let t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let n={};function s(o,c){return o[c.uuid]===void 0&&(o[c.uuid]=c.toJSON(e)),c.uuid}if(n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.castShadow===!0&&(n.castShadow=!0),this.receiveShadow===!0&&(n.receiveShadow=!0),this.visible===!1&&(n.visible=!1),this.frustumCulled===!1&&(n.frustumCulled=!1),this.renderOrder!==0&&(n.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(n.userData=this.userData),n.layers=this.layers.mask,n.matrix=this.matrix.toArray(),n.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(n.matrixAutoUpdate=!1),this.isInstancedMesh&&(n.type="InstancedMesh",n.count=this.count,n.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(n.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(n.type="BatchedMesh",n.perObjectFrustumCulled=this.perObjectFrustumCulled,n.sortObjects=this.sortObjects,n.drawRanges=this._drawRanges,n.reservedRanges=this._reservedRanges,n.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),n.instanceInfo=this._instanceInfo.map(o=>({...o})),n.availableInstanceIds=this._availableInstanceIds.slice(),n.availableGeometryIds=this._availableGeometryIds.slice(),n.nextIndexStart=this._nextIndexStart,n.nextVertexStart=this._nextVertexStart,n.geometryCount=this._geometryCount,n.maxInstanceCount=this._maxInstanceCount,n.maxVertexCount=this._maxVertexCount,n.maxIndexCount=this._maxIndexCount,n.geometryInitialized=this._geometryInitialized,n.matricesTexture=this._matricesTexture.toJSON(e),n.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(n.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(n.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(n.boundingBox=this.boundingBox.toJSON())),this.isScene)this.background&&(this.background.isColor?n.background=this.background.toJSON():this.background.isTexture&&(n.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(n.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){n.geometry=s(e.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let c=o.shapes;if(Array.isArray(c))for(let l=0,h=c.length;l<h;l++){let u=c[l];s(e.shapes,u)}else s(e.shapes,c)}}if(this.isSkinnedMesh&&(n.bindMode=this.bindMode,n.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),n.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let c=0,l=this.material.length;c<l;c++)o.push(s(e.materials,this.material[c]));n.material=o}else n.material=s(e.materials,this.material);if(this.children.length>0){n.children=[];for(let o=0;o<this.children.length;o++)n.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){n.animations=[];for(let o=0;o<this.animations.length;o++){let c=this.animations[o];n.animations.push(s(e.animations,c))}}if(t){let o=a(e.geometries),c=a(e.materials),l=a(e.textures),h=a(e.images),u=a(e.shapes),d=a(e.skeletons),p=a(e.animations),f=a(e.nodes);o.length>0&&(i.geometries=o),c.length>0&&(i.materials=c),l.length>0&&(i.textures=l),h.length>0&&(i.images=h),u.length>0&&(i.shapes=u),d.length>0&&(i.skeletons=d),p.length>0&&(i.animations=p),f.length>0&&(i.nodes=f)}return i.object=n,i;function a(o){let c=[];for(let l in o){let h=o[l];delete h.metadata,c.push(h)}return c}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){let n=e.children[i];this.add(n.clone())}return this}};It.DEFAULT_UP=new C(0,1,0),It.DEFAULT_MATRIX_AUTO_UPDATE=!0,It.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var Ot=new C,oi=new C,Ga=new C,li=new C,mn=new C,fn=new C,Wl=new C,Va=new C,ka=new C,Ha=new C,Wa=new Ke,Xa=new Ke,ja=new Ke,ci=class r{constructor(e=new C,t=new C,i=new C){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,n){n.subVectors(i,t),Ot.subVectors(e,t),n.cross(Ot);let s=n.lengthSq();return s>0?n.multiplyScalar(1/Math.sqrt(s)):n.set(0,0,0)}static getBarycoord(e,t,i,n,s){Ot.subVectors(n,t),oi.subVectors(i,t),Ga.subVectors(e,t);let a=Ot.dot(Ot),o=Ot.dot(oi),c=Ot.dot(Ga),l=oi.dot(oi),h=oi.dot(Ga),u=a*l-o*o;if(u===0)return s.set(0,0,0),null;let d=1/u,p=(l*c-o*h)*d,f=(a*h-o*c)*d;return s.set(1-p-f,f,p)}static containsPoint(e,t,i,n){return this.getBarycoord(e,t,i,n,li)!==null&&li.x>=0&&li.y>=0&&li.x+li.y<=1}static getInterpolation(e,t,i,n,s,a,o,c){return this.getBarycoord(e,t,i,n,li)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(s,li.x),c.addScaledVector(a,li.y),c.addScaledVector(o,li.z),c)}static getInterpolatedAttribute(e,t,i,n,s,a){return Wa.setScalar(0),Xa.setScalar(0),ja.setScalar(0),Wa.fromBufferAttribute(e,t),Xa.fromBufferAttribute(e,i),ja.fromBufferAttribute(e,n),a.setScalar(0),a.addScaledVector(Wa,s.x),a.addScaledVector(Xa,s.y),a.addScaledVector(ja,s.z),a}static isFrontFacing(e,t,i,n){return Ot.subVectors(i,t),oi.subVectors(e,t),Ot.cross(oi).dot(n)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,n){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[n]),this}setFromAttributeAndIndices(e,t,i,n){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,n),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Ot.subVectors(this.c,this.b),oi.subVectors(this.a,this.b),.5*Ot.cross(oi).length()}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return r.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return r.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,i,n,s){return r.getInterpolation(e,this.a,this.b,this.c,t,i,n,s)}containsPoint(e){return r.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return r.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let i=this.a,n=this.b,s=this.c,a,o;mn.subVectors(n,i),fn.subVectors(s,i),Va.subVectors(e,i);let c=mn.dot(Va),l=fn.dot(Va);if(c<=0&&l<=0)return t.copy(i);ka.subVectors(e,n);let h=mn.dot(ka),u=fn.dot(ka);if(h>=0&&u<=h)return t.copy(n);let d=c*u-h*l;if(d<=0&&c>=0&&h<=0)return a=c/(c-h),t.copy(i).addScaledVector(mn,a);Ha.subVectors(e,s);let p=mn.dot(Ha),f=fn.dot(Ha);if(f>=0&&p<=f)return t.copy(s);let x=p*l-c*f;if(x<=0&&l>=0&&f<=0)return o=l/(l-f),t.copy(i).addScaledVector(fn,o);let m=h*f-p*u;if(m<=0&&u-h>=0&&p-f>=0)return Wl.subVectors(s,n),o=(u-h)/(u-h+(p-f)),t.copy(n).addScaledVector(Wl,o);let g=1/(m+x+d);return a=x*g,o=d*g,t.copy(i).addScaledVector(mn,a).addScaledVector(fn,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},Jc={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},bi={h:0,s:0,l:0},Or={h:0,s:0,l:0};function qa(r,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?r+6*(e-r)*t:t<.5?e:t<2/3?r+6*(e-r)*(2/3-t):r}var ke=class{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){let n=e;n&&n.isColor?this.copy(n):typeof n=="number"?this.setHex(n):typeof n=="string"&&this.setStyle(n)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Tt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(255&e)/255,He.colorSpaceToWorking(this,t),this}setRGB(e,t,i,n=He.workingColorSpace){return this.r=e,this.g=t,this.b=i,He.colorSpaceToWorking(this,n),this}setHSL(e,t,i,n=He.workingColorSpace){if(e=zh(e,1),t=Be(t,0,1),i=Be(i,0,1),t===0)this.r=this.g=this.b=i;else{let s=i<=.5?i*(1+t):i+t-i*t,a=2*i-s;this.r=qa(a,s,e+1/3),this.g=qa(a,s,e),this.b=qa(a,s,e-1/3)}return He.colorSpaceToWorking(this,n),this}setStyle(e,t=Tt){function i(s){s!==void 0&&parseFloat(s)<1&&be("Color: Alpha component of "+e+" will be ignored.")}let n;if(n=/^(\w+)\(([^\)]*)\)/.exec(e)){let s,a=n[1],o=n[2];switch(a){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:be("Color: Unknown color model "+e)}}else if(n=/^\#([A-Fa-f\d]+)$/.exec(e)){let s=n[1],a=s.length;if(a===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(s,16),t);be("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Tt){let i=Jc[e.toLowerCase()];return i!==void 0?this.setHex(i,t):be("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=hi(e.r),this.g=hi(e.g),this.b=hi(e.b),this}copyLinearToSRGB(e){return this.r=_n(e.r),this.g=_n(e.g),this.b=_n(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Tt){return He.workingToColorSpace(gt.copy(this),e),65536*Math.round(Be(255*gt.r,0,255))+256*Math.round(Be(255*gt.g,0,255))+Math.round(Be(255*gt.b,0,255))}getHexString(e=Tt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=He.workingColorSpace){He.workingToColorSpace(gt.copy(this),t);let i=gt.r,n=gt.g,s=gt.b,a=Math.max(i,n,s),o=Math.min(i,n,s),c,l,h=(o+a)/2;if(o===a)c=0,l=0;else{let u=a-o;switch(l=h<=.5?u/(a+o):u/(2-a-o),a){case i:c=(n-s)/u+(n<s?6:0);break;case n:c=(s-i)/u+2;break;case s:c=(i-n)/u+4}c/=6}return e.h=c,e.s=l,e.l=h,e}getRGB(e,t=He.workingColorSpace){return He.workingToColorSpace(gt.copy(this),t),e.r=gt.r,e.g=gt.g,e.b=gt.b,e}getStyle(e=Tt){He.workingToColorSpace(gt.copy(this),e);let t=gt.r,i=gt.g,n=gt.b;return e!==Tt?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${n.toFixed(3)})`:`rgb(${Math.round(255*t)},${Math.round(255*i)},${Math.round(255*n)})`}offsetHSL(e,t,i){return this.getHSL(bi),this.setHSL(bi.h+e,bi.s+t,bi.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(bi),e.getHSL(Or);let i=Ra(bi.h,Or.h,t),n=Ra(bi.s,Or.s,t),s=Ra(bi.l,Or.l,t);return this.setHSL(i,n,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,i=this.g,n=this.b,s=e.elements;return this.r=s[0]*t+s[3]*i+s[6]*n,this.g=s[1]*t+s[4]*i+s[7]*n,this.b=s[2]*t+s[5]*i+s[8]*n,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},gt=new ke;ke.NAMES=Jc;var Jh=0,Hi=class extends pi{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Jh++}),this.uuid=Dn(),this.name="",this.type="Material",this.blending=1,this.side=0,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=204,this.blendDst=205,this.blendEquation=100,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new ke(0,0,0),this.blendAlpha=0,this.depthFunc=3,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=519,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Gi,this.stencilZFail=Gi,this.stencilZPass=Gi,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let i=e[t];if(i===void 0){be(`Material: parameter '${t}' has value of undefined.`);continue}let n=this[t];n!==void 0?n&&n.isColor?n.set(i):n&&n.isVector3&&i&&i.isVector3?n.copy(i):this[t]=i:be(`Material: '${t}' is not a property of THREE.${this.type}.`)}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};function n(s){let a=[];for(let o in s){let c=s[o];delete c.metadata,a.push(c)}return a}if(i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==1&&(i.blending=this.blending),this.side!==0&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==204&&(i.blendSrc=this.blendSrc),this.blendDst!==205&&(i.blendDst=this.blendDst),this.blendEquation!==100&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==3&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==519&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Gi&&(i.stencilFail=this.stencilFail),this.stencilZFail!==Gi&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==Gi&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData),t){let s=n(e.textures),a=n(e.images);s.length>0&&(i.textures=s),a.length>0&&(i.images=a)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,i=null;if(t!==null){let n=t.length;i=new Array(n);for(let s=0;s!==n;++s)i[s]=t[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}},Qn=class extends Hi{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new ke(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new $t,this.combine=0,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}},sp=Kh();function Kh(){let r=new ArrayBuffer(4),e=new Float32Array(r),t=new Uint32Array(r),i=new Uint32Array(512),n=new Uint32Array(512);for(let c=0;c<256;++c){let l=c-127;l<-27?(i[c]=0,i[256|c]=32768,n[c]=24,n[256|c]=24):l<-14?(i[c]=1024>>-l-14,i[256|c]=1024>>-l-14|32768,n[c]=-l-1,n[256|c]=-l-1):l<=15?(i[c]=l+15<<10,i[256|c]=l+15<<10|32768,n[c]=13,n[256|c]=13):l<128?(i[c]=31744,i[256|c]=64512,n[c]=24,n[256|c]=24):(i[c]=31744,i[256|c]=64512,n[c]=13,n[256|c]=13)}let s=new Uint32Array(2048),a=new Uint32Array(64),o=new Uint32Array(64);for(let c=1;c<1024;++c){let l=c<<13,h=0;for(;!(8388608&l);)l<<=1,h-=8388608;l&=-8388609,h+=947912704,s[c]=l|h}for(let c=1024;c<2048;++c)s[c]=939524096+(c-1024<<13);for(let c=1;c<31;++c)a[c]=c<<23;a[31]=1199570944,a[32]=2147483648;for(let c=33;c<63;++c)a[c]=2147483648+(c-32<<23);a[63]=3347054592;for(let c=1;c<64;++c)c!==32&&(o[c]=1024);return{floatView:e,uint32View:t,baseTable:i,shiftTable:n,mantissaTable:s,exponentTable:a,offsetTable:o}}var at=new C,Br=new re,$h=0,pt=class{constructor(e,t,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:$h++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=so,this.updateRanges=[],this.gpuType=ti,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let n=0,s=this.itemSize;n<s;n++)this.array[e+n]=t.array[i+n];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)Br.fromBufferAttribute(this,t),Br.applyMatrix3(e),this.setXY(t,Br.x,Br.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)at.fromBufferAttribute(this,t),at.applyMatrix3(e),this.setXYZ(t,at.x,at.y,at.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)at.fromBufferAttribute(this,t),at.applyMatrix4(e),this.setXYZ(t,at.x,at.y,at.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)at.fromBufferAttribute(this,t),at.applyNormalMatrix(e),this.setXYZ(t,at.x,at.y,at.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)at.fromBufferAttribute(this,t),at.transformDirection(e),this.setXYZ(t,at.x,at.y,at.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=zn(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=xt(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=zn(t,this.array)),t}setX(e,t){return this.normalized&&(t=xt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=zn(t,this.array)),t}setY(e,t){return this.normalized&&(t=xt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=zn(t,this.array)),t}setZ(e,t){return this.normalized&&(t=xt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=zn(t,this.array)),t}setW(e,t){return this.normalized&&(t=xt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=xt(t,this.array),i=xt(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,n){return e*=this.itemSize,this.normalized&&(t=xt(t,this.array),i=xt(i,this.array),n=xt(n,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=n,this}setXYZW(e,t,i,n,s){return e*=this.itemSize,this.normalized&&(t=xt(t,this.array),i=xt(i,this.array),n=xt(n,this.array),s=xt(s,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=n,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==so&&(e.usage=this.usage),e}};var er=class extends pt{constructor(e,t,i){super(new Uint16Array(e),t,i)}};var tr=class extends pt{constructor(e,t,i){super(new Uint32Array(e),t,i)}};var Me=class extends pt{constructor(e,t,i){super(new Float32Array(e),t,i)}},Qh=0,Rt=new Le,Ya=new It,gn=new C,bt=new zt,Hn=new zt,ht=new C,$e=class r extends pi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Qh++}),this.uuid=Dn(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(tl(e)?tr:er)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let i=this.attributes.normal;if(i!==void 0){let s=new Ie().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}let n=this.attributes.tangent;return n!==void 0&&(n.transformDirection(e),n.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Rt.makeRotationFromQuaternion(e),this.applyMatrix4(Rt),this}rotateX(e){return Rt.makeRotationX(e),this.applyMatrix4(Rt),this}rotateY(e){return Rt.makeRotationY(e),this.applyMatrix4(Rt),this}rotateZ(e){return Rt.makeRotationZ(e),this.applyMatrix4(Rt),this}translate(e,t,i){return Rt.makeTranslation(e,t,i),this.applyMatrix4(Rt),this}scale(e,t,i){return Rt.makeScale(e,t,i),this.applyMatrix4(Rt),this}lookAt(e){return Ya.lookAt(e),Ya.updateMatrix(),this.applyMatrix4(Ya.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(gn).negate(),this.translate(gn.x,gn.y,gn.z),this}setFromPoints(e){let t=this.getAttribute("position");if(t===void 0){let i=[];for(let n=0,s=e.length;n<s;n++){let a=e[n];i.push(a.x,a.y,a.z||0)}this.setAttribute("position",new Me(i,3))}else{let i=Math.min(e.length,t.count);for(let n=0;n<i;n++){let s=e[n];t.setXYZ(n,s.x,s.y,s.z||0)}e.length>t.count&&be("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new zt);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute)return Oe("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),void this.boundingBox.set(new C(-1/0,-1/0,-1/0),new C(1/0,1/0,1/0));if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,n=t.length;i<n;i++){let s=t[i];bt.setFromBufferAttribute(s),this.morphTargetsRelative?(ht.addVectors(this.boundingBox.min,bt.min),this.boundingBox.expandByPoint(ht),ht.addVectors(this.boundingBox.max,bt.max),this.boundingBox.expandByPoint(ht)):(this.boundingBox.expandByPoint(bt.min),this.boundingBox.expandByPoint(bt.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Oe('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Gt);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute)return Oe("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),void this.boundingSphere.set(new C,1/0);if(e){let i=this.boundingSphere.center;if(bt.setFromBufferAttribute(e),t)for(let s=0,a=t.length;s<a;s++){let o=t[s];Hn.setFromBufferAttribute(o),this.morphTargetsRelative?(ht.addVectors(bt.min,Hn.min),bt.expandByPoint(ht),ht.addVectors(bt.max,Hn.max),bt.expandByPoint(ht)):(bt.expandByPoint(Hn.min),bt.expandByPoint(Hn.max))}bt.getCenter(i);let n=0;for(let s=0,a=e.count;s<a;s++)ht.fromBufferAttribute(e,s),n=Math.max(n,i.distanceToSquared(ht));if(t)for(let s=0,a=t.length;s<a;s++){let o=t[s],c=this.morphTargetsRelative;for(let l=0,h=o.count;l<h;l++)ht.fromBufferAttribute(o,l),c&&(gn.fromBufferAttribute(e,l),ht.add(gn)),n=Math.max(n,i.distanceToSquared(ht))}this.boundingSphere.radius=Math.sqrt(n),isNaN(this.boundingSphere.radius)&&Oe('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0)return void Oe("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");let i=t.position,n=t.normal,s=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new pt(new Float32Array(4*i.count),4));let a=this.getAttribute("tangent"),o=[],c=[];for(let z=0;z<i.count;z++)o[z]=new C,c[z]=new C;let l=new C,h=new C,u=new C,d=new re,p=new re,f=new re,x=new C,m=new C;function g(z,L,B){l.fromBufferAttribute(i,z),h.fromBufferAttribute(i,L),u.fromBufferAttribute(i,B),d.fromBufferAttribute(s,z),p.fromBufferAttribute(s,L),f.fromBufferAttribute(s,B),h.sub(l),u.sub(l),p.sub(d),f.sub(d);let V=1/(p.x*f.y-f.x*p.y);isFinite(V)&&(x.copy(h).multiplyScalar(f.y).addScaledVector(u,-p.y).multiplyScalar(V),m.copy(u).multiplyScalar(p.x).addScaledVector(h,-f.x).multiplyScalar(V),o[z].add(x),o[L].add(x),o[B].add(x),c[z].add(m),c[L].add(m),c[B].add(m))}let v=this.groups;v.length===0&&(v=[{start:0,count:e.count}]);for(let z=0,L=v.length;z<L;++z){let B=v[z],V=B.start;for(let F=V,Y=V+B.count;F<Y;F+=3)g(e.getX(F+0),e.getX(F+1),e.getX(F+2))}let _=new C,T=new C,E=new C,b=new C;function D(z){E.fromBufferAttribute(n,z),b.copy(E);let L=o[z];_.copy(L),_.sub(E.multiplyScalar(E.dot(L))).normalize(),T.crossVectors(b,L);let B=T.dot(c[z])<0?-1:1;a.setXYZW(z,_.x,_.y,_.z,B)}for(let z=0,L=v.length;z<L;++z){let B=v[z],V=B.start;for(let F=V,Y=V+B.count;F<Y;F+=3)D(e.getX(F+0)),D(e.getX(F+1)),D(e.getX(F+2))}}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new pt(new Float32Array(3*t.count),3),this.setAttribute("normal",i);else for(let d=0,p=i.count;d<p;d++)i.setXYZ(d,0,0,0);let n=new C,s=new C,a=new C,o=new C,c=new C,l=new C,h=new C,u=new C;if(e)for(let d=0,p=e.count;d<p;d+=3){let f=e.getX(d+0),x=e.getX(d+1),m=e.getX(d+2);n.fromBufferAttribute(t,f),s.fromBufferAttribute(t,x),a.fromBufferAttribute(t,m),h.subVectors(a,s),u.subVectors(n,s),h.cross(u),o.fromBufferAttribute(i,f),c.fromBufferAttribute(i,x),l.fromBufferAttribute(i,m),o.add(h),c.add(h),l.add(h),i.setXYZ(f,o.x,o.y,o.z),i.setXYZ(x,c.x,c.y,c.z),i.setXYZ(m,l.x,l.y,l.z)}else for(let d=0,p=t.count;d<p;d+=3)n.fromBufferAttribute(t,d+0),s.fromBufferAttribute(t,d+1),a.fromBufferAttribute(t,d+2),h.subVectors(a,s),u.subVectors(n,s),h.cross(u),i.setXYZ(d+0,h.x,h.y,h.z),i.setXYZ(d+1,h.x,h.y,h.z),i.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)ht.fromBufferAttribute(e,t),ht.normalize(),e.setXYZ(t,ht.x,ht.y,ht.z)}toNonIndexed(){function e(o,c){let l=o.array,h=o.itemSize,u=o.normalized,d=new l.constructor(c.length*h),p=0,f=0;for(let x=0,m=c.length;x<m;x++){p=o.isInterleavedBufferAttribute?c[x]*o.data.stride+o.offset:c[x]*h;for(let g=0;g<h;g++)d[f++]=l[p++]}return new pt(d,h,u)}if(this.index===null)return be("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new r,i=this.index.array,n=this.attributes;for(let o in n){let c=e(n[o],i);t.setAttribute(o,c)}let s=this.morphAttributes;for(let o in s){let c=[],l=s[o];for(let h=0,u=l.length;h<u;h++){let d=e(l[h],i);c.push(d)}t.morphAttributes[o]=c}t.morphTargetsRelative=this.morphTargetsRelative;let a=this.groups;for(let o=0,c=a.length;o<c;o++){let l=a[o];t.addGroup(l.start,l.count,l.materialIndex)}return t}toJSON(){let e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){let c=this.parameters;for(let l in c)c[l]!==void 0&&(e[l]=c[l]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let i=this.attributes;for(let c in i){let l=i[c];e.data.attributes[c]=l.toJSON(e.data)}let n={},s=!1;for(let c in this.morphAttributes){let l=this.morphAttributes[c],h=[];for(let u=0,d=l.length;u<d;u++){let p=l[u];h.push(p.toJSON(e.data))}h.length>0&&(n[c]=h,s=!0)}s&&(e.data.morphAttributes=n,e.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let i=e.index;i!==null&&this.setIndex(i.clone());let n=e.attributes;for(let l in n){let h=n[l];this.setAttribute(l,h.clone(t))}let s=e.morphAttributes;for(let l in s){let h=[],u=s[l];for(let d=0,p=u.length;d<p;d++)h.push(u[d].clone(t));this.morphAttributes[l]=h}this.morphTargetsRelative=e.morphTargetsRelative;let a=e.groups;for(let l=0,h=a.length;l<h;l++){let u=a[l];this.addGroup(u.start,u.count,u.materialIndex)}let o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());let c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},Xl=new Le,Bi=new ki,zr=new Gt,jl=new C,Gr=new C,Vr=new C,kr=new C,Za=new C,Hr=new C,ql=new C,Wr=new C,ut=class extends It{constructor(e=new $e,t=new Qn){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,t=Object.keys(e);if(t.length>0){let i=e[t[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let n=0,s=i.length;n<s;n++){let a=i[n].name||String(n);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=n}}}}getVertexPosition(e,t){let i=this.geometry,n=i.attributes.position,s=i.morphAttributes.position,a=i.morphTargetsRelative;t.fromBufferAttribute(n,e);let o=this.morphTargetInfluences;if(s&&o){Hr.set(0,0,0);for(let c=0,l=s.length;c<l;c++){let h=o[c],u=s[c];h!==0&&(Za.fromBufferAttribute(u,e),a?Hr.addScaledVector(Za,h):Hr.addScaledVector(Za.sub(t),h))}t.add(Hr)}return t}raycast(e,t){let i=this.geometry,n=this.material,s=this.matrixWorld;if(n!==void 0){if(i.boundingSphere===null&&i.computeBoundingSphere(),zr.copy(i.boundingSphere),zr.applyMatrix4(s),Bi.copy(e.ray).recast(e.near),zr.containsPoint(Bi.origin)===!1&&(Bi.intersectSphere(zr,jl)===null||Bi.origin.distanceToSquared(jl)>(e.far-e.near)**2))return;Xl.copy(s).invert(),Bi.copy(e.ray).applyMatrix4(Xl),i.boundingBox!==null&&Bi.intersectsBox(i.boundingBox)===!1||this._computeIntersections(e,t,Bi)}}_computeIntersections(e,t,i){let n,s=this.geometry,a=this.material,o=s.index,c=s.attributes.position,l=s.attributes.uv,h=s.attributes.uv1,u=s.attributes.normal,d=s.groups,p=s.drawRange;if(o!==null)if(Array.isArray(a))for(let f=0,x=d.length;f<x;f++){let m=d[f],g=a[m.materialIndex];for(let v=Math.max(m.start,p.start),_=Math.min(o.count,Math.min(m.start+m.count,p.start+p.count));v<_;v+=3)n=Xr(this,g,e,i,l,h,u,o.getX(v),o.getX(v+1),o.getX(v+2)),n&&(n.faceIndex=Math.floor(v/3),n.face.materialIndex=m.materialIndex,t.push(n))}else for(let f=Math.max(0,p.start),x=Math.min(o.count,p.start+p.count);f<x;f+=3)n=Xr(this,a,e,i,l,h,u,o.getX(f),o.getX(f+1),o.getX(f+2)),n&&(n.faceIndex=Math.floor(f/3),t.push(n));else if(c!==void 0)if(Array.isArray(a))for(let f=0,x=d.length;f<x;f++){let m=d[f],g=a[m.materialIndex];for(let v=Math.max(m.start,p.start),_=Math.min(c.count,Math.min(m.start+m.count,p.start+p.count));v<_;v+=3)n=Xr(this,g,e,i,l,h,u,v,v+1,v+2),n&&(n.faceIndex=Math.floor(v/3),n.face.materialIndex=m.materialIndex,t.push(n))}else for(let f=Math.max(0,p.start),x=Math.min(c.count,p.start+p.count);f<x;f+=3)n=Xr(this,a,e,i,l,h,u,f,f+1,f+2),n&&(n.faceIndex=Math.floor(f/3),t.push(n))}};function Xr(r,e,t,i,n,s,a,o,c,l){r.getVertexPosition(o,Gr),r.getVertexPosition(c,Vr),r.getVertexPosition(l,kr);let h=(function(u,d,p,f,x,m,g,v){let _;if(_=d.side===1?f.intersectTriangle(g,m,x,!0,v):f.intersectTriangle(x,m,g,d.side===0,v),_===null)return null;Wr.copy(v),Wr.applyMatrix4(u.matrixWorld);let T=p.ray.origin.distanceTo(Wr);return T<p.near||T>p.far?null:{distance:T,point:Wr.clone(),object:u}})(r,e,t,i,Gr,Vr,kr,ql);if(h){let u=new C;ci.getBarycoord(ql,Gr,Vr,kr,u),n&&(h.uv=ci.getInterpolatedAttribute(n,o,c,l,u,new re)),s&&(h.uv1=ci.getInterpolatedAttribute(s,o,c,l,u,new re)),a&&(h.normal=ci.getInterpolatedAttribute(a,o,c,l,u,new C),h.normal.dot(i.direction)>0&&h.normal.multiplyScalar(-1));let d={a:o,b:c,c:l,normal:new C,materialIndex:0};ci.getNormal(Gr,Vr,kr,d.normal),h.face=d,h.barycoord=u}return h}var Wi=class r extends $e{constructor(e=1,t=1,i=1,n=1,s=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:n,heightSegments:s,depthSegments:a};let o=this;n=Math.floor(n),s=Math.floor(s),a=Math.floor(a);let c=[],l=[],h=[],u=[],d=0,p=0;function f(x,m,g,v,_,T,E,b,D,z,L){let B=T/D,V=E/z,F=T/2,Y=E/2,G=b/2,Z=D+1,$=z+1,ae=0,ne=0,he=new C;for(let ue=0;ue<$;ue++){let ve=ue*V-Y;for(let Se=0;Se<Z;Se++){let J=Se*B-F;he[x]=J*v,he[m]=ve*_,he[g]=G,l.push(he.x,he.y,he.z),he[x]=0,he[m]=0,he[g]=b>0?1:-1,h.push(he.x,he.y,he.z),u.push(Se/D),u.push(1-ue/z),ae+=1}}for(let ue=0;ue<z;ue++)for(let ve=0;ve<D;ve++){let Se=d+ve+Z*ue,J=d+ve+Z*(ue+1),K=d+(ve+1)+Z*(ue+1),Q=d+(ve+1)+Z*ue;c.push(Se,J,Q),c.push(J,K,Q),ne+=6}o.addGroup(p,ne,L),p+=ne,d+=ae}f("z","y","x",-1,-1,i,t,e,a,s,0),f("z","y","x",1,-1,i,t,-e,a,s,1),f("x","z","y",1,1,e,i,t,n,a,2),f("x","z","y",1,-1,e,i,-t,n,a,3),f("x","y","z",1,-1,e,t,i,n,s,4),f("x","y","z",-1,-1,e,t,-i,n,s,5),this.setIndex(c),this.setAttribute("position",new Me(l,3)),this.setAttribute("normal",new Me(h,3)),this.setAttribute("uv",new Me(u,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new r(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}};function Qi(r){let e={};for(let t in r){e[t]={};for(let i in r[t]){let n=r[t][i];n&&(n.isColor||n.isMatrix3||n.isMatrix4||n.isVector2||n.isVector3||n.isVector4||n.isTexture||n.isQuaternion)?n.isRenderTargetTexture?(be("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=n.clone():Array.isArray(n)?e[t][i]=n.slice():e[t][i]=n}}return e}function vt(r){let e={};for(let t=0;t<r.length;t++){let i=Qi(r[t]);for(let n in i)e[n]=i[n]}return e}function nl(r){let e=r.getRenderTarget();return e===null?r.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:He.workingColorSpace}var Kc={clone:Qi,merge:vt},mt=class extends Hi{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,this.fragmentShader=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Qi(e.uniforms),this.uniformsGroups=(function(t){let i=[];for(let n=0;n<t.length;n++)i.push(t[n].clone());return i})(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let n in this.uniforms){let s=this.uniforms[n].value;s&&s.isTexture?t.uniforms[n]={type:"t",value:s.toJSON(e).uuid}:s&&s.isColor?t.uniforms[n]={type:"c",value:s.getHex()}:s&&s.isVector2?t.uniforms[n]={type:"v2",value:s.toArray()}:s&&s.isVector3?t.uniforms[n]={type:"v3",value:s.toArray()}:s&&s.isVector4?t.uniforms[n]={type:"v4",value:s.toArray()}:s&&s.isMatrix3?t.uniforms[n]={type:"m3",value:s.toArray()}:s&&s.isMatrix4?t.uniforms[n]={type:"m4",value:s.toArray()}:t.uniforms[n]={value:s}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let i={};for(let n in this.extensions)this.extensions[n]===!0&&(i[n]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}},Sn=class extends It{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Le,this.projectionMatrix=new Le,this.projectionMatrixInverse=new Le,this.coordinateSystem=di,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},Ti=new C,Yl=new re,Zl=new re,yt=class extends Sn{constructor(e=50,t=1,i=.1,n=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=n,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=2*ss*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(.5*ts*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return 2*ss*Math.atan(Math.tan(.5*ts*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){Ti.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Ti.x,Ti.y).multiplyScalar(-e/Ti.z),Ti.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Ti.x,Ti.y).multiplyScalar(-e/Ti.z)}getViewSize(e,t){return this.getViewBounds(e,Yl,Zl),t.subVectors(Zl,Yl)}setViewOffset(e,t,i,n,s,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=n,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(.5*ts*this.fov)/this.zoom,i=2*t,n=this.aspect*i,s=-.5*n,a=this.view;if(this.view!==null&&this.view.enabled){let c=a.fullWidth,l=a.fullHeight;s+=a.offsetX*n/c,t-=a.offsetY*i/l,n*=a.width/c,i*=a.height/l}let o=this.filmOffset;o!==0&&(s+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+n,t,t-i,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},vn=-90,cs=class extends It{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;let n=new yt(vn,1,e,t);n.layers=this.layers,this.add(n);let s=new yt(vn,1,e,t);s.layers=this.layers,this.add(s);let a=new yt(vn,1,e,t);a.layers=this.layers,this.add(a);let o=new yt(vn,1,e,t);o.layers=this.layers,this.add(o);let c=new yt(vn,1,e,t);c.layers=this.layers,this.add(c);let l=new yt(vn,1,e,t);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[i,n,s,a,o,c]=t;for(let l of t)this.remove(l);if(e===di)i.up.set(0,1,0),i.lookAt(1,0,0),n.up.set(0,1,0),n.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else{if(e!==Zn)throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);i.up.set(0,-1,0),i.lookAt(-1,0,0),n.up.set(0,-1,0),n.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1)}for(let l of t)this.add(l),l.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:i,activeMipmapLevel:n}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[s,a,o,c,l,h]=this.children,u=e.getRenderTarget(),d=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),f=e.xr.enabled;e.xr.enabled=!1;let x=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,n),e.render(t,s),e.setRenderTarget(i,1,n),e.render(t,a),e.setRenderTarget(i,2,n),e.render(t,o),e.setRenderTarget(i,3,n),e.render(t,c),e.setRenderTarget(i,4,n),e.render(t,l),i.texture.generateMipmaps=x,e.setRenderTarget(i,5,n),e.render(t,h),e.setRenderTarget(u,d,p),e.xr.enabled=f,i.texture.needsPMREMUpdate=!0}},ir=class extends Mt{constructor(e=[],t=301,i,n,s,a,o,c,l,h){super(e,t,i,n,s,a,o,c,l,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},hs=class extends Kt{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let i={width:e,height:e,depth:1},n=[i,i,i,i,i,i];this.texture=new ir(n),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},n=new Wi(5,5,5),s=new mt({name:"CubemapFromEquirect",uniforms:Qi(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:1,blending:0});s.uniforms.tEquirect.value=t;let a=new ut(n,s),o=t.minFilter;return t.minFilter===Zi&&(t.minFilter=Pt),new cs(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t=!0,i=!0,n=!0){let s=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,i,n);e.setRenderTarget(s)}},Vi=class extends It{constructor(){super(),this.isGroup=!0,this.type="Group"}},eu={type:"move"},bn=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Vi,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Vi,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new C,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new C),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Vi,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new C,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new C),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let n=null,s=null,a=null,o=this._targetRay,c=this._grip,l=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(l&&e.hand){a=!0;for(let x of e.hand.values()){let m=t.getJointPose(x,i),g=this._getHandJoint(l,x);m!==null&&(g.matrix.fromArray(m.transform.matrix),g.matrix.decompose(g.position,g.rotation,g.scale),g.matrixWorldNeedsUpdate=!0,g.jointRadius=m.radius),g.visible=m!==null}let h=l.joints["index-finger-tip"],u=l.joints["thumb-tip"],d=h.position.distanceTo(u.position),p=.02,f=.005;l.inputState.pinching&&d>p+f?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!l.inputState.pinching&&d<=p-f&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,i),s!==null&&(c.matrix.fromArray(s.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,s.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(s.linearVelocity)):c.hasLinearVelocity=!1,s.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(s.angularVelocity)):c.hasAngularVelocity=!1));o!==null&&(n=t.getPose(e.targetRaySpace,i),n===null&&s!==null&&(n=s),n!==null&&(o.matrix.fromArray(n.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,n.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(n.linearVelocity)):o.hasLinearVelocity=!1,n.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(n.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(eu)))}return o!==null&&(o.visible=n!==null),c!==null&&(c.visible=s!==null),l!==null&&(l.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let i=new Vi;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}};var nr=class extends It{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new $t,this.environmentIntensity=1,this.environmentRotation=new $t,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}};var ap=new C;var op=new C,lp=new C,cp=new C,hp=new re,up=new re,dp=new Le,pp=new C,mp=new C,fp=new C,gp=new re,vp=new re,_p=new re;var xp=new C,yp=new C;var Mp=new C,Sp=new Ke,bp=new Ke,Tp=new C,wp=new Le,Ap=new C,Ep=new Gt,Cp=new Le,Rp=new ki;var us=class extends Mt{constructor(e=null,t=1,i=1,n,s,a,o,c,l=1003,h=1003,u,d){super(null,a,o,c,l,h,n,s,u,d),this.isDataTexture=!0,this.image={data:e,width:t,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}},Ip=new Le,Pp=new Le;var Ci=class extends pt{constructor(e,t,i,n=1){super(e,t,i),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=n}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){let e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}},Lp=new Le,Dp=new Le;var Up=new zt,Np=new Le,Fp=new ut,Op=new Gt;var Ja=new C,tu=new C,iu=new Ie,Yt=class{constructor(e=new C(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,n){return this.normal.set(e,t,i),this.constant=n,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){let n=Ja.subVectors(i,t).cross(tu.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(n,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){let i=e.delta(Ja),n=this.normal.dot(i);if(n===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let s=-(e.start.dot(this.normal)+this.constant)/n;return s<0||s>1?null:t.copy(e.start).addScaledVector(i,s)}intersectsLine(e){let t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let i=t||iu.getNormalMatrix(e),n=this.coplanarPoint(Ja).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-n.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}},zi=new Gt,nu=new re(.5,.5),jr=new C,Xi=class{constructor(e=new Yt,t=new Yt,i=new Yt,n=new Yt,s=new Yt,a=new Yt){this.planes=[e,t,i,n,s,a]}set(e,t,i,n,s,a){let o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(i),o[3].copy(n),o[4].copy(s),o[5].copy(a),this}copy(e){let t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=2e3,i=!1){let n=this.planes,s=e.elements,a=s[0],o=s[1],c=s[2],l=s[3],h=s[4],u=s[5],d=s[6],p=s[7],f=s[8],x=s[9],m=s[10],g=s[11],v=s[12],_=s[13],T=s[14],E=s[15];if(n[0].setComponents(l-a,p-h,g-f,E-v).normalize(),n[1].setComponents(l+a,p+h,g+f,E+v).normalize(),n[2].setComponents(l+o,p+u,g+x,E+_).normalize(),n[3].setComponents(l-o,p-u,g-x,E-_).normalize(),i)n[4].setComponents(c,d,m,T).normalize(),n[5].setComponents(l-c,p-d,g-m,E-T).normalize();else if(n[4].setComponents(l-c,p-d,g-m,E-T).normalize(),t===di)n[5].setComponents(l+c,p+d,g+m,E+T).normalize();else{if(t!==Zn)throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);n[5].setComponents(c,d,m,T).normalize()}return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),zi.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),zi.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(zi)}intersectsSprite(e){zi.center.set(0,0,0);let t=nu.distanceTo(e.center);return zi.radius=.7071067811865476+t,zi.applyMatrix4(e.matrixWorld),this.intersectsSphere(zi)}intersectsSphere(e){let t=this.planes,i=e.center,n=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(i)<n)return!1;return!0}intersectsBox(e){let t=this.planes;for(let i=0;i<6;i++){let n=t[i];if(jr.x=n.normal.x>0?e.max.x:e.min.x,jr.y=n.normal.y>0?e.max.y:e.min.y,jr.z=n.normal.z>0?e.max.z:e.min.z,n.distanceToPoint(jr)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}},jt=new Le,qt=new Xi,ds=class r{constructor(){this.coordinateSystem=di}intersectsObject(e,t){if(!t.isArrayCamera||t.cameras.length===0)return!1;for(let i=0;i<t.cameras.length;i++){let n=t.cameras[i];if(jt.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),qt.setFromProjectionMatrix(jt,n.coordinateSystem,n.reversedDepth),qt.intersectsObject(e))return!0}return!1}intersectsSprite(e,t){if(!t||!t.cameras||t.cameras.length===0)return!1;for(let i=0;i<t.cameras.length;i++){let n=t.cameras[i];if(jt.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),qt.setFromProjectionMatrix(jt,n.coordinateSystem,n.reversedDepth),qt.intersectsSprite(e))return!0}return!1}intersectsSphere(e,t){if(!t||!t.cameras||t.cameras.length===0)return!1;for(let i=0;i<t.cameras.length;i++){let n=t.cameras[i];if(jt.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),qt.setFromProjectionMatrix(jt,n.coordinateSystem,n.reversedDepth),qt.intersectsSphere(e))return!0}return!1}intersectsBox(e,t){if(!t||!t.cameras||t.cameras.length===0)return!1;for(let i=0;i<t.cameras.length;i++){let n=t.cameras[i];if(jt.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),qt.setFromProjectionMatrix(jt,n.coordinateSystem,n.reversedDepth),qt.intersectsBox(e))return!0}return!1}containsPoint(e,t){if(!t||!t.cameras||t.cameras.length===0)return!1;for(let i=0;i<t.cameras.length;i++){let n=t.cameras[i];if(jt.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),qt.setFromProjectionMatrix(jt,n.coordinateSystem,n.reversedDepth),qt.containsPoint(e))return!0}return!1}clone(){return new r}};var ao=class{constructor(){this.index=0,this.pool=[],this.list=[]}push(e,t,i,n){let s=this.pool,a=this.list;this.index>=s.length&&s.push({start:-1,count:-1,z:-1,index:-1});let o=s[this.index];a.push(o),this.index++,o.start=e,o.count=t,o.z=i,o.index=n}reset(){this.list.length=0,this.index=0}},Bp=new Le,zp=new ke(1,1,1),Gp=new Xi,Vp=new ds,kp=new zt,Hp=new Gt,Wp=new C,Xp=new C,jp=new C,qp=new ao,Yp=new ut;var Zp=new C,Jp=new C,Kp=new Le,$p=new ki,Qp=new Gt,em=new C,tm=new C;var im=new C,nm=new C;var rm=new Le,sm=new ki,am=new Gt,om=new C;var rr=class extends Mt{constructor(e,t,i=1014,n,s,a,o=1003,c=1003,l,h=1026,u=1){if(h!==Mr&&h!==1027)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");super({width:e,height:t,depth:u},n,s,a,o,c,h,i,l),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Mn(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}},sr=class extends Mt{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}},ps=class r extends $e{constructor(e=1,t=1,i=4,n=8,s=1){super(),this.type="CapsuleGeometry",this.parameters={radius:e,height:t,capSegments:i,radialSegments:n,heightSegments:s},t=Math.max(0,t),i=Math.max(1,Math.floor(i)),n=Math.max(3,Math.floor(n)),s=Math.max(1,Math.floor(s));let a=[],o=[],c=[],l=[],h=t/2,u=Math.PI/2*e,d=t,p=2*u+d,f=2*i+s,x=n+1,m=new C,g=new C;for(let v=0;v<=f;v++){let _=0,T=0,E=0,b=0;if(v<=i){let L=v/i,B=L*Math.PI/2;T=-h-e*Math.cos(B),E=e*Math.sin(B),b=-e*Math.cos(B),_=L*u}else if(v<=i+s){let L=(v-i)/s;T=L*t-h,E=e,b=0,_=u+L*d}else{let L=(v-i-s)/i,B=L*Math.PI/2;T=h+e*Math.sin(B),E=e*Math.cos(B),b=e*Math.sin(B),_=u+d+L*u}let D=Math.max(0,Math.min(1,_/p)),z=0;v===0?z=.5/n:v===f&&(z=-.5/n);for(let L=0;L<=n;L++){let B=L/n,V=B*Math.PI*2,F=Math.sin(V),Y=Math.cos(V);g.x=-E*Y,g.y=T,g.z=E*F,o.push(g.x,g.y,g.z),m.set(-E*Y,b,E*F),m.normalize(),c.push(m.x,m.y,m.z),l.push(B+z,D)}if(v>0){let L=(v-1)*x;for(let B=0;B<n;B++){let V=L+B,F=L+B+1,Y=v*x+B,G=v*x+B+1;a.push(V,F,Y),a.push(F,G,Y)}}}this.setIndex(a),this.setAttribute("position",new Me(o,3)),this.setAttribute("normal",new Me(c,3)),this.setAttribute("uv",new Me(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new r(e.radius,e.height,e.capSegments,e.radialSegments,e.heightSegments)}},ms=class r extends $e{constructor(e=1,t=32,i=0,n=2*Math.PI){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:i,thetaLength:n},t=Math.max(3,t);let s=[],a=[],o=[],c=[],l=new C,h=new re;a.push(0,0,0),o.push(0,0,1),c.push(.5,.5);for(let u=0,d=3;u<=t;u++,d+=3){let p=i+u/t*n;l.x=e*Math.cos(p),l.y=e*Math.sin(p),a.push(l.x,l.y,l.z),o.push(0,0,1),h.x=(a[d]/e+1)/2,h.y=(a[d+1]/e+1)/2,c.push(h.x,h.y)}for(let u=1;u<=t;u++)s.push(u,u+1,0);this.setIndex(s),this.setAttribute("position",new Me(a,3)),this.setAttribute("normal",new Me(o,3)),this.setAttribute("uv",new Me(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new r(e.radius,e.segments,e.thetaStart,e.thetaLength)}},ar=class r extends $e{constructor(e=1,t=1,i=1,n=32,s=1,a=!1,o=0,c=2*Math.PI){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:i,radialSegments:n,heightSegments:s,openEnded:a,thetaStart:o,thetaLength:c};let l=this;n=Math.floor(n),s=Math.floor(s);let h=[],u=[],d=[],p=[],f=0,x=[],m=i/2,g=0;function v(_){let T=f,E=new re,b=new C,D=0,z=_===!0?e:t,L=_===!0?1:-1;for(let V=1;V<=n;V++)u.push(0,m*L,0),d.push(0,L,0),p.push(.5,.5),f++;let B=f;for(let V=0;V<=n;V++){let F=V/n*c+o,Y=Math.cos(F),G=Math.sin(F);b.x=z*G,b.y=m*L,b.z=z*Y,u.push(b.x,b.y,b.z),d.push(0,L,0),E.x=.5*Y+.5,E.y=.5*G*L+.5,p.push(E.x,E.y),f++}for(let V=0;V<n;V++){let F=T+V,Y=B+V;_===!0?h.push(Y,Y+1,F):h.push(Y+1,Y,F),D+=3}l.addGroup(g,D,_===!0?1:2),g+=D}(function(){let _=new C,T=new C,E=0,b=(t-e)/i;for(let D=0;D<=s;D++){let z=[],L=D/s,B=L*(t-e)+e;for(let V=0;V<=n;V++){let F=V/n,Y=F*c+o,G=Math.sin(Y),Z=Math.cos(Y);T.x=B*G,T.y=-L*i+m,T.z=B*Z,u.push(T.x,T.y,T.z),_.set(G,b,Z).normalize(),d.push(_.x,_.y,_.z),p.push(F,1-L),z.push(f++)}x.push(z)}for(let D=0;D<n;D++)for(let z=0;z<s;z++){let L=x[z][D],B=x[z+1][D],V=x[z+1][D+1],F=x[z][D+1];(e>0||z!==0)&&(h.push(L,B,F),E+=3),(t>0||z!==s-1)&&(h.push(B,V,F),E+=3)}l.addGroup(g,E,0),g+=E})(),a===!1&&(e>0&&v(!0),t>0&&v(!1)),this.setIndex(h),this.setAttribute("position",new Me(u,3)),this.setAttribute("normal",new Me(d,3)),this.setAttribute("uv",new Me(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new r(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},fs=class r extends ar{constructor(e=1,t=1,i=32,n=1,s=!1,a=0,o=2*Math.PI){super(0,e,t,i,n,s,a,o),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:i,heightSegments:n,openEnded:s,thetaStart:a,thetaLength:o}}static fromJSON(e){return new r(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},Ri=class r extends $e{constructor(e=[],t=[],i=1,n=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:i,detail:n};let s=[],a=[];function o(p,f,x,m){let g=m+1,v=[];for(let _=0;_<=g;_++){v[_]=[];let T=p.clone().lerp(x,_/g),E=f.clone().lerp(x,_/g),b=g-_;for(let D=0;D<=b;D++)v[_][D]=D===0&&_===g?T:T.clone().lerp(E,D/b)}for(let _=0;_<g;_++)for(let T=0;T<2*(g-_)-1;T++){let E=Math.floor(T/2);T%2==0?(c(v[_][E+1]),c(v[_+1][E]),c(v[_][E])):(c(v[_][E+1]),c(v[_+1][E+1]),c(v[_+1][E]))}}function c(p){s.push(p.x,p.y,p.z)}function l(p,f){let x=3*p;f.x=e[x+0],f.y=e[x+1],f.z=e[x+2]}function h(p,f,x,m){m<0&&p.x===1&&(a[f]=p.x-1),x.x===0&&x.z===0&&(a[f]=m/2/Math.PI+.5)}function u(p){return Math.atan2(p.z,-p.x)}function d(p){return Math.atan2(-p.y,Math.sqrt(p.x*p.x+p.z*p.z))}(function(p){let f=new C,x=new C,m=new C;for(let g=0;g<t.length;g+=3)l(t[g+0],f),l(t[g+1],x),l(t[g+2],m),o(f,x,m,p)})(n),(function(p){let f=new C;for(let x=0;x<s.length;x+=3)f.x=s[x+0],f.y=s[x+1],f.z=s[x+2],f.normalize().multiplyScalar(p),s[x+0]=f.x,s[x+1]=f.y,s[x+2]=f.z})(i),(function(){let p=new C;for(let f=0;f<s.length;f+=3){p.x=s[f+0],p.y=s[f+1],p.z=s[f+2];let x=u(p)/2/Math.PI+.5,m=d(p)/Math.PI+.5;a.push(x,1-m)}(function(){let f=new C,x=new C,m=new C,g=new C,v=new re,_=new re,T=new re;for(let E=0,b=0;E<s.length;E+=9,b+=6){f.set(s[E+0],s[E+1],s[E+2]),x.set(s[E+3],s[E+4],s[E+5]),m.set(s[E+6],s[E+7],s[E+8]),v.set(a[b+0],a[b+1]),_.set(a[b+2],a[b+3]),T.set(a[b+4],a[b+5]),g.copy(f).add(x).add(m).divideScalar(3);let D=u(g);h(v,b+0,f,D),h(_,b+2,x,D),h(T,b+4,m,D)}})(),(function(){for(let f=0;f<a.length;f+=6){let x=a[f+0],m=a[f+2],g=a[f+4],v=Math.max(x,m,g),_=Math.min(x,m,g);v>.9&&_<.1&&(x<.2&&(a[f+0]+=1),m<.2&&(a[f+2]+=1),g<.2&&(a[f+4]+=1))}})()})(),this.setAttribute("position",new Me(s,3)),this.setAttribute("normal",new Me(s.slice(),3)),this.setAttribute("uv",new Me(a,2)),n===0?this.computeVertexNormals():this.normalizeNormals()}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new r(e.vertices,e.indices,e.radius,e.details)}},gs=class r extends Ri{constructor(e=1,t=0){let i=(1+Math.sqrt(5))/2,n=1/i;super([-1,-1,-1,-1,-1,1,-1,1,-1,-1,1,1,1,-1,-1,1,-1,1,1,1,-1,1,1,1,0,-n,-i,0,-n,i,0,n,-i,0,n,i,-n,-i,0,-n,i,0,n,-i,0,n,i,0,-i,0,-n,i,0,-n,-i,0,n,i,0,n],[3,11,7,3,7,15,3,15,13,7,19,17,7,17,6,7,6,15,17,4,8,17,8,10,17,10,6,8,0,16,8,16,2,8,2,10,0,12,1,0,1,18,0,18,16,6,10,2,6,2,13,6,13,15,2,16,18,2,18,3,2,3,13,18,1,9,18,9,11,18,11,3,4,14,12,4,12,0,4,0,8,11,9,5,11,5,19,11,19,7,19,5,14,19,14,4,19,4,17,1,12,14,1,14,5,1,5,9],e,t),this.type="DodecahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new r(e.radius,e.detail)}},qr=new C,Yr=new C,Ka=new C,Zr=new ci,vs=class extends $e{constructor(e=null,t=1){if(super(),this.type="EdgesGeometry",this.parameters={geometry:e,thresholdAngle:t},e!==null){let n=Math.pow(10,4),s=Math.cos(ts*t),a=e.getIndex(),o=e.getAttribute("position"),c=a?a.count:o.count,l=[0,0,0],h=["a","b","c"],u=new Array(3),d={},p=[];for(let f=0;f<c;f+=3){a?(l[0]=a.getX(f),l[1]=a.getX(f+1),l[2]=a.getX(f+2)):(l[0]=f,l[1]=f+1,l[2]=f+2);let{a:x,b:m,c:g}=Zr;if(x.fromBufferAttribute(o,l[0]),m.fromBufferAttribute(o,l[1]),g.fromBufferAttribute(o,l[2]),Zr.getNormal(Ka),u[0]=`${Math.round(x.x*n)},${Math.round(x.y*n)},${Math.round(x.z*n)}`,u[1]=`${Math.round(m.x*n)},${Math.round(m.y*n)},${Math.round(m.z*n)}`,u[2]=`${Math.round(g.x*n)},${Math.round(g.y*n)},${Math.round(g.z*n)}`,u[0]!==u[1]&&u[1]!==u[2]&&u[2]!==u[0])for(let v=0;v<3;v++){let _=(v+1)%3,T=u[v],E=u[_],b=Zr[h[v]],D=Zr[h[_]],z=`${T}_${E}`,L=`${E}_${T}`;L in d&&d[L]?(Ka.dot(d[L].normal)<=s&&(p.push(b.x,b.y,b.z),p.push(D.x,D.y,D.z)),d[L]=null):z in d||(d[z]={index0:l[v],index1:l[_],normal:Ka.clone()})}}for(let f in d)if(d[f]){let{index0:x,index1:m}=d[f];qr.fromBufferAttribute(o,x),Yr.fromBufferAttribute(o,m),p.push(qr.x,qr.y,qr.z),p.push(Yr.x,Yr.y,Yr.z)}this.setAttribute("position",new Me(p,3))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}},At=class{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){be("Curve: .getPoint() not implemented.")}getPointAt(e,t){let i=this.getUtoTmapping(e);return this.getPoint(i,t)}getPoints(e=5){let t=[];for(let i=0;i<=e;i++)t.push(this.getPoint(i/e));return t}getSpacedPoints(e=5){let t=[];for(let i=0;i<=e;i++)t.push(this.getPointAt(i/e));return t}getLength(){let e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let t=[],i,n=this.getPoint(0),s=0;t.push(0);for(let a=1;a<=e;a++)i=this.getPoint(a/e),s+=i.distanceTo(n),t.push(s),n=i;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t=null){let i=this.getLengths(),n=0,s=i.length,a;a=t||e*i[s-1];let o,c=0,l=s-1;for(;c<=l;)if(n=Math.floor(c+(l-c)/2),o=i[n]-a,o<0)c=n+1;else{if(!(o>0)){l=n;break}l=n-1}if(n=l,i[n]===a)return n/(s-1);let h=i[n];return(n+(a-h)/(i[n+1]-h))/(s-1)}getTangent(e,t){let n=e-1e-4,s=e+1e-4;n<0&&(n=0),s>1&&(s=1);let a=this.getPoint(n),o=this.getPoint(s),c=t||(a.isVector2?new re:new C);return c.copy(o).sub(a).normalize(),c}getTangentAt(e,t){let i=this.getUtoTmapping(e);return this.getTangent(i,t)}computeFrenetFrames(e,t=!1){let i=new C,n=[],s=[],a=[],o=new C,c=new Le;for(let p=0;p<=e;p++){let f=p/e;n[p]=this.getTangentAt(f,new C)}s[0]=new C,a[0]=new C;let l=Number.MAX_VALUE,h=Math.abs(n[0].x),u=Math.abs(n[0].y),d=Math.abs(n[0].z);h<=l&&(l=h,i.set(1,0,0)),u<=l&&(l=u,i.set(0,1,0)),d<=l&&i.set(0,0,1),o.crossVectors(n[0],i).normalize(),s[0].crossVectors(n[0],o),a[0].crossVectors(n[0],s[0]);for(let p=1;p<=e;p++){if(s[p]=s[p-1].clone(),a[p]=a[p-1].clone(),o.crossVectors(n[p-1],n[p]),o.length()>Number.EPSILON){o.normalize();let f=Math.acos(Be(n[p-1].dot(n[p]),-1,1));s[p].applyMatrix4(c.makeRotationAxis(o,f))}a[p].crossVectors(n[p],s[p])}if(t===!0){let p=Math.acos(Be(s[0].dot(s[e]),-1,1));p/=e,n[0].dot(o.crossVectors(s[0],s[e]))>0&&(p=-p);for(let f=1;f<=e;f++)s[f].applyMatrix4(c.makeRotationAxis(n[f],p*f)),a[f].crossVectors(n[f],s[f])}return{tangents:n,normals:s,binormals:a}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){let e={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}},Tn=class extends At{constructor(e=0,t=0,i=1,n=1,s=0,a=2*Math.PI,o=!1,c=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=i,this.yRadius=n,this.aStartAngle=s,this.aEndAngle=a,this.aClockwise=o,this.aRotation=c}getPoint(e,t=new re){let i=t,n=2*Math.PI,s=this.aEndAngle-this.aStartAngle,a=Math.abs(s)<Number.EPSILON;for(;s<0;)s+=n;for(;s>n;)s-=n;s<Number.EPSILON&&(s=a?0:n),this.aClockwise!==!0||a||(s===n?s=-n:s-=n);let o=this.aStartAngle+e*s,c=this.aX+this.xRadius*Math.cos(o),l=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){let h=Math.cos(this.aRotation),u=Math.sin(this.aRotation),d=c-this.aX,p=l-this.aY;c=d*h-p*u+this.aX,l=d*u+p*h+this.aY}return i.set(c,l)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){let e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}},_s=class extends Tn{constructor(e,t,i,n,s,a){super(e,t,i,i,n,s,a),this.isArcCurve=!0,this.type="ArcCurve"}};function rl(){let r=0,e=0,t=0,i=0;function n(s,a,o,c){r=s,e=o,t=-3*s+3*a-2*o-c,i=2*s-2*a+o+c}return{initCatmullRom:function(s,a,o,c,l){n(a,o,l*(o-s),l*(c-a))},initNonuniformCatmullRom:function(s,a,o,c,l,h,u){let d=(a-s)/l-(o-s)/(l+h)+(o-a)/h,p=(o-a)/h-(c-a)/(h+u)+(c-o)/u;d*=h,p*=h,n(a,o,d,p)},calc:function(s){let a=s*s;return r+e*s+t*a+i*(a*s)}}}var Jr=new C,$a=new rl,Qa=new rl,eo=new rl,xs=class extends At{constructor(e=[],t=!1,i="centripetal",n=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=i,this.tension=n}getPoint(e,t=new C){let i=t,n=this.points,s=n.length,a=(s-(this.closed?0:1))*e,o,c,l=Math.floor(a),h=a-l;this.closed?l+=l>0?0:(Math.floor(Math.abs(l)/s)+1)*s:h===0&&l===s-1&&(l=s-2,h=1),this.closed||l>0?o=n[(l-1)%s]:(Jr.subVectors(n[0],n[1]).add(n[0]),o=Jr);let u=n[l%s],d=n[(l+1)%s];if(this.closed||l+2<s?c=n[(l+2)%s]:(Jr.subVectors(n[s-1],n[s-2]).add(n[s-1]),c=Jr),this.curveType==="centripetal"||this.curveType==="chordal"){let p=this.curveType==="chordal"?.5:.25,f=Math.pow(o.distanceToSquared(u),p),x=Math.pow(u.distanceToSquared(d),p),m=Math.pow(d.distanceToSquared(c),p);x<1e-4&&(x=1),f<1e-4&&(f=x),m<1e-4&&(m=x),$a.initNonuniformCatmullRom(o.x,u.x,d.x,c.x,f,x,m),Qa.initNonuniformCatmullRom(o.y,u.y,d.y,c.y,f,x,m),eo.initNonuniformCatmullRom(o.z,u.z,d.z,c.z,f,x,m)}else this.curveType==="catmullrom"&&($a.initCatmullRom(o.x,u.x,d.x,c.x,this.tension),Qa.initCatmullRom(o.y,u.y,d.y,c.y,this.tension),eo.initCatmullRom(o.z,u.z,d.z,c.z,this.tension));return i.set($a.calc(h),Qa.calc(h),eo.calc(h)),i}copy(e){super.copy(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){let n=e.points[t];this.points.push(n.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,i=this.points.length;t<i;t++){let n=this.points[t];e.points.push(n.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){let n=e.points[t];this.points.push(new C().fromArray(n))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}};function Jl(r,e,t,i,n){let s=.5*(i-e),a=.5*(n-t),o=r*r;return(2*t-2*i+s+a)*(r*o)+(-3*t+3*i-2*s-a)*o+s*r+t}function Xn(r,e,t,i){return(function(n,s){let a=1-n;return a*a*s})(r,e)+(function(n,s){return 2*(1-n)*n*s})(r,t)+(function(n,s){return n*n*s})(r,i)}function jn(r,e,t,i,n){return(function(s,a){let o=1-s;return o*o*o*a})(r,e)+(function(s,a){let o=1-s;return 3*o*o*s*a})(r,t)+(function(s,a){return 3*(1-s)*s*s*a})(r,i)+(function(s,a){return s*s*s*a})(r,n)}var or=class extends At{constructor(e=new re,t=new re,i=new re,n=new re){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=i,this.v3=n}getPoint(e,t=new re){let i=t,n=this.v0,s=this.v1,a=this.v2,o=this.v3;return i.set(jn(e,n.x,s.x,a.x,o.x),jn(e,n.y,s.y,a.y,o.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},ys=class extends At{constructor(e=new C,t=new C,i=new C,n=new C){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=i,this.v3=n}getPoint(e,t=new C){let i=t,n=this.v0,s=this.v1,a=this.v2,o=this.v3;return i.set(jn(e,n.x,s.x,a.x,o.x),jn(e,n.y,s.y,a.y,o.y),jn(e,n.z,s.z,a.z,o.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},lr=class extends At{constructor(e=new re,t=new re){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new re){let i=t;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new re){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Ms=class extends At{constructor(e=new C,t=new C){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new C){let i=t;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new C){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},cr=class extends At{constructor(e=new re,t=new re,i=new re){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=i}getPoint(e,t=new re){let i=t,n=this.v0,s=this.v1,a=this.v2;return i.set(Xn(e,n.x,s.x,a.x),Xn(e,n.y,s.y,a.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},hr=class extends At{constructor(e=new C,t=new C,i=new C){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=i}getPoint(e,t=new C){let i=t,n=this.v0,s=this.v1,a=this.v2;return i.set(Xn(e,n.x,s.x,a.x),Xn(e,n.y,s.y,a.y),Xn(e,n.z,s.z,a.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},ur=class extends At{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new re){let i=t,n=this.points,s=(n.length-1)*e,a=Math.floor(s),o=s-a,c=n[a===0?a:a-1],l=n[a],h=n[a>n.length-2?n.length-1:a+1],u=n[a>n.length-3?n.length-1:a+2];return i.set(Jl(o,c.x,l.x,h.x,u.x),Jl(o,c.y,l.y,h.y,u.y)),i}copy(e){super.copy(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){let n=e.points[t];this.points.push(n.clone())}return this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,i=this.points.length;t<i;t++){let n=this.points[t];e.points.push(n.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){let n=e.points[t];this.points.push(new re().fromArray(n))}return this}},Ss=Object.freeze({__proto__:null,ArcCurve:_s,CatmullRomCurve3:xs,CubicBezierCurve:or,CubicBezierCurve3:ys,EllipseCurve:Tn,LineCurve:lr,LineCurve3:Ms,QuadraticBezierCurve:cr,QuadraticBezierCurve3:hr,SplineCurve:ur}),bs=class extends At{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){let e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){let i=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Ss[i](t,e))}return this}getPoint(e,t){let i=e*this.getLength(),n=this.getCurveLengths(),s=0;for(;s<n.length;){if(n[s]>=i){let a=n[s]-i,o=this.curves[s],c=o.getLength(),l=c===0?0:1-a/c;return o.getPointAt(l,t)}s++}return null}getLength(){let e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let e=[],t=0;for(let i=0,n=this.curves.length;i<n;i++)t+=this.curves[i].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){let t=[];for(let i=0;i<=e;i++)t.push(this.getPoint(i/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){let t=[],i;for(let n=0,s=this.curves;n<s.length;n++){let a=s[n],o=a.isEllipseCurve?2*e:a.isLineCurve||a.isLineCurve3?1:a.isSplineCurve?e*a.points.length:e,c=a.getPoints(o);for(let l=0;l<c.length;l++){let h=c[l];i&&i.equals(h)||(t.push(h),i=h)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,i=e.curves.length;t<i;t++){let n=e.curves[t];this.curves.push(n.clone())}return this.autoClose=e.autoClose,this}toJSON(){let e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,i=this.curves.length;t<i;t++){let n=this.curves[t];e.curves.push(n.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,i=e.curves.length;t<i;t++){let n=e.curves[t];this.curves.push(new Ss[n.type]().fromJSON(n))}return this}},dr=class extends bs{constructor(e){super(),this.type="Path",this.currentPoint=new re,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,i=e.length;t<i;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){let i=new lr(this.currentPoint.clone(),new re(e,t));return this.curves.push(i),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,i,n){let s=new cr(this.currentPoint.clone(),new re(e,t),new re(i,n));return this.curves.push(s),this.currentPoint.set(i,n),this}bezierCurveTo(e,t,i,n,s,a){let o=new or(this.currentPoint.clone(),new re(e,t),new re(i,n),new re(s,a));return this.curves.push(o),this.currentPoint.set(s,a),this}splineThru(e){let t=[this.currentPoint.clone()].concat(e),i=new ur(t);return this.curves.push(i),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,i,n,s,a){let o=this.currentPoint.x,c=this.currentPoint.y;return this.absarc(e+o,t+c,i,n,s,a),this}absarc(e,t,i,n,s,a){return this.absellipse(e,t,i,i,n,s,a),this}ellipse(e,t,i,n,s,a,o,c){let l=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(e+l,t+h,i,n,s,a,o,c),this}absellipse(e,t,i,n,s,a,o,c){let l=new Tn(e,t,i,n,s,a,o,c);if(this.curves.length>0){let u=l.getPoint(0);u.equals(this.currentPoint)||this.lineTo(u.x,u.y)}this.curves.push(l);let h=l.getPoint(1);return this.currentPoint.copy(h),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){let e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}},pr=class extends dr{constructor(e){super(e),this.uuid=Dn(),this.type="Shape",this.holes=[]}getPointsHoles(e){let t=[];for(let i=0,n=this.holes.length;i<n;i++)t[i]=this.holes[i].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,i=e.holes.length;t<i;t++){let n=e.holes[t];this.holes.push(n.clone())}return this}toJSON(){let e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,i=this.holes.length;t<i;t++){let n=this.holes[t];e.holes.push(n.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,i=e.holes.length;t<i;t++){let n=e.holes[t];this.holes.push(new dr().fromJSON(n))}return this}};function ru(r,e,t=2){let i=e&&e.length,n=i?e[0]*t:r.length,s=Kl(r,0,n,t,!0),a=[];if(!s||s.next===s.prev)return a;let o,c,l;if(i&&(s=(function(h,u,d,p){let f=[];for(let x=0,m=u.length;x<m;x++){let g=Kl(h,u[x]*p,x<m-1?u[x+1]*p:h.length,p,!1);g===g.next&&(g.steiner=!0),f.push(du(g))}f.sort(cu);for(let x=0;x<f.length;x++)d=hu(f[x],d);return d})(r,e,s,t)),r.length>80*t){o=r[0],c=r[1];let h=o,u=c;for(let d=t;d<n;d+=t){let p=r[d],f=r[d+1];p<o&&(o=p),f<c&&(c=f),p>h&&(h=p),f>u&&(u=f)}l=Math.max(h-o,u-c),l=l!==0?32767/l:0}return mr(s,a,t,o,c,l,0),a}function Kl(r,e,t,i,n){let s;if(n===(function(a,o,c,l){let h=0;for(let u=o,d=c-l;u<c;u+=l)h+=(a[d]-a[u])*(a[u+1]+a[d+1]),d=u;return h})(r,e,t,i)>0)for(let a=e;a<t;a+=i)s=$l(a/i|0,r[a],r[a+1],s);else for(let a=t-i;a>=e;a-=i)s=$l(a/i|0,r[a],r[a+1],s);return s&&wn(s,s.next)&&(gr(s),s=s.next),s}function ji(r,e){if(!r)return r;e||(e=r);let t,i=r;do if(t=!1,i.steiner||!wn(i,i.next)&&tt(i.prev,i,i.next)!==0)i=i.next;else{if(gr(i),i=e=i.prev,i===i.next)break;t=!0}while(t||i!==e);return e}function mr(r,e,t,i,n,s,a){if(!r)return;!a&&s&&(function(c,l,h,u){let d=c;do d.z===0&&(d.z=oo(d.x,d.y,l,h,u)),d.prevZ=d.prev,d.nextZ=d.next,d=d.next;while(d!==c);d.prevZ.nextZ=null,d.prevZ=null,(function(p){let f,x=1;do{let m,g=p;p=null;let v=null;for(f=0;g;){f++;let _=g,T=0;for(let b=0;b<x&&(T++,_=_.nextZ,_);b++);let E=x;for(;T>0||E>0&&_;)T!==0&&(E===0||!_||g.z<=_.z)?(m=g,g=g.nextZ,T--):(m=_,_=_.nextZ,E--),v?v.nextZ=m:p=m,m.prevZ=v,v=m;g=_}v.nextZ=null,x*=2}while(f>1)})(d)})(r,i,n,s);let o=r;for(;r.prev!==r.next;){let c=r.prev,l=r.next;if(s?au(r,i,n,s):su(r))e.push(c.i,r.i,l.i),gr(r),r=l.next,o=l.next;else if((r=l)===o){a?a===1?mr(r=ou(ji(r),e),e,t,i,n,s,2):a===2&&lu(r,e,t,i,n,s):mr(ji(r),e,t,i,n,s,1);break}}}function su(r){let e=r.prev,t=r,i=r.next;if(tt(e,t,i)>=0)return!1;let n=e.x,s=t.x,a=i.x,o=e.y,c=t.y,l=i.y,h=Math.min(n,s,a),u=Math.min(o,c,l),d=Math.max(n,s,a),p=Math.max(o,c,l),f=i.next;for(;f!==e;){if(f.x>=h&&f.x<=d&&f.y>=u&&f.y<=p&&Wn(n,o,s,c,a,l,f.x,f.y)&&tt(f.prev,f,f.next)>=0)return!1;f=f.next}return!0}function au(r,e,t,i){let n=r.prev,s=r,a=r.next;if(tt(n,s,a)>=0)return!1;let o=n.x,c=s.x,l=a.x,h=n.y,u=s.y,d=a.y,p=Math.min(o,c,l),f=Math.min(h,u,d),x=Math.max(o,c,l),m=Math.max(h,u,d),g=oo(p,f,e,t,i),v=oo(x,m,e,t,i),_=r.prevZ,T=r.nextZ;for(;_&&_.z>=g&&T&&T.z<=v;){if(_.x>=p&&_.x<=x&&_.y>=f&&_.y<=m&&_!==n&&_!==a&&Wn(o,h,c,u,l,d,_.x,_.y)&&tt(_.prev,_,_.next)>=0||(_=_.prevZ,T.x>=p&&T.x<=x&&T.y>=f&&T.y<=m&&T!==n&&T!==a&&Wn(o,h,c,u,l,d,T.x,T.y)&&tt(T.prev,T,T.next)>=0))return!1;T=T.nextZ}for(;_&&_.z>=g;){if(_.x>=p&&_.x<=x&&_.y>=f&&_.y<=m&&_!==n&&_!==a&&Wn(o,h,c,u,l,d,_.x,_.y)&&tt(_.prev,_,_.next)>=0)return!1;_=_.prevZ}for(;T&&T.z<=v;){if(T.x>=p&&T.x<=x&&T.y>=f&&T.y<=m&&T!==n&&T!==a&&Wn(o,h,c,u,l,d,T.x,T.y)&&tt(T.prev,T,T.next)>=0)return!1;T=T.nextZ}return!0}function ou(r,e){let t=r;do{let i=t.prev,n=t.next.next;!wn(i,n)&&Qc(i,t,t.next,n)&&fr(i,n)&&fr(n,i)&&(e.push(i.i,t.i,n.i),gr(t),gr(t.next),t=r=n),t=t.next}while(t!==r);return ji(t)}function lu(r,e,t,i,n,s){let a=r;do{let o=a.next.next;for(;o!==a.prev;){if(a.i!==o.i&&pu(a,o)){let c=eh(a,o);return a=ji(a,a.next),c=ji(c,c.next),mr(a,e,t,i,n,s,0),void mr(c,e,t,i,n,s,0)}o=o.next}a=a.next}while(a!==r)}function cu(r,e){let t=r.x-e.x;return t===0&&(t=r.y-e.y,t===0)&&(t=(r.next.y-r.y)/(r.next.x-r.x)-(e.next.y-e.y)/(e.next.x-e.x)),t}function hu(r,e){let t=(function(n,s){let a=s,o=n.x,c=n.y,l,h=-1/0;if(wn(n,a))return a;do{if(wn(n,a.next))return a.next;if(c<=a.y&&c>=a.next.y&&a.next.y!==a.y){let x=a.x+(c-a.y)*(a.next.x-a.x)/(a.next.y-a.y);if(x<=o&&x>h&&(h=x,l=a.x<a.next.x?a:a.next,x===o))return l}a=a.next}while(a!==s);if(!l)return null;let u=l,d=l.x,p=l.y,f=1/0;a=l;do{if(o>=a.x&&a.x>=d&&o!==a.x&&$c(c<p?o:h,c,d,p,c<p?h:o,c,a.x,a.y)){let x=Math.abs(c-a.y)/(o-a.x);fr(a,n)&&(x<f||x===f&&(a.x>l.x||a.x===l.x&&uu(l,a)))&&(l=a,f=x)}a=a.next}while(a!==u);return l})(r,e);if(!t)return e;let i=eh(t,r);return ji(i,i.next),ji(t,t.next)}function uu(r,e){return tt(r.prev,r,e.prev)<0&&tt(e.next,r,r.next)<0}function oo(r,e,t,i,n){return(r=1431655765&((r=858993459&((r=252645135&((r=16711935&((r=(r-t)*n|0)|r<<8))|r<<4))|r<<2))|r<<1))|(e=1431655765&((e=858993459&((e=252645135&((e=16711935&((e=(e-i)*n|0)|e<<8))|e<<4))|e<<2))|e<<1))<<1}function du(r){let e=r,t=r;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==r);return t}function $c(r,e,t,i,n,s,a,o){return(n-a)*(e-o)>=(r-a)*(s-o)&&(r-a)*(i-o)>=(t-a)*(e-o)&&(t-a)*(s-o)>=(n-a)*(i-o)}function Wn(r,e,t,i,n,s,a,o){return!(r===a&&e===o)&&$c(r,e,t,i,n,s,a,o)}function pu(r,e){return r.next.i!==e.i&&r.prev.i!==e.i&&!(function(t,i){let n=t;do{if(n.i!==t.i&&n.next.i!==t.i&&n.i!==i.i&&n.next.i!==i.i&&Qc(n,n.next,t,i))return!0;n=n.next}while(n!==t);return!1})(r,e)&&(fr(r,e)&&fr(e,r)&&(function(t,i){let n=t,s=!1,a=(t.x+i.x)/2,o=(t.y+i.y)/2;do n.y>o!=n.next.y>o&&n.next.y!==n.y&&a<(n.next.x-n.x)*(o-n.y)/(n.next.y-n.y)+n.x&&(s=!s),n=n.next;while(n!==t);return s})(r,e)&&(tt(r.prev,r,e.prev)||tt(r,e.prev,e))||wn(r,e)&&tt(r.prev,r,r.next)>0&&tt(e.prev,e,e.next)>0)}function tt(r,e,t){return(e.y-r.y)*(t.x-e.x)-(e.x-r.x)*(t.y-e.y)}function wn(r,e){return r.x===e.x&&r.y===e.y}function Qc(r,e,t,i){let n=$r(tt(r,e,t)),s=$r(tt(r,e,i)),a=$r(tt(t,i,r)),o=$r(tt(t,i,e));return n!==s&&a!==o||!(n!==0||!Kr(r,t,e))||!(s!==0||!Kr(r,i,e))||!(a!==0||!Kr(t,r,i))||!(o!==0||!Kr(t,e,i))}function Kr(r,e,t){return e.x<=Math.max(r.x,t.x)&&e.x>=Math.min(r.x,t.x)&&e.y<=Math.max(r.y,t.y)&&e.y>=Math.min(r.y,t.y)}function $r(r){return r>0?1:r<0?-1:0}function fr(r,e){return tt(r.prev,r,r.next)<0?tt(r,e,r.next)>=0&&tt(r,r.prev,e)>=0:tt(r,e,r.prev)<0||tt(r,r.next,e)<0}function eh(r,e){let t=lo(r.i,r.x,r.y),i=lo(e.i,e.x,e.y),n=r.next,s=e.prev;return r.next=e,e.prev=r,t.next=n,n.prev=t,i.next=t,t.prev=i,s.next=i,i.prev=s,i}function $l(r,e,t,i){let n=lo(r,e,t);return i?(n.next=i.next,n.prev=i,i.next.prev=n,i.next=n):(n.prev=n,n.next=n),n}function gr(r){r.next.prev=r.prev,r.prev.next=r.next,r.prevZ&&(r.prevZ.nextZ=r.nextZ),r.nextZ&&(r.nextZ.prevZ=r.prevZ)}function lo(r,e,t){return{i:r,x:e,y:t,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}var co=class{static triangulate(e,t,i=2){return ru(e,t,i)}},Zt=class r{static area(e){let t=e.length,i=0;for(let n=t-1,s=0;s<t;n=s++)i+=e[n].x*e[s].y-e[s].x*e[n].y;return .5*i}static isClockWise(e){return r.area(e)<0}static triangulateShape(e,t){let i=[],n=[],s=[];Ql(e),ec(i,e);let a=e.length;t.forEach(Ql);for(let c=0;c<t.length;c++)n.push(a),a+=t[c].length,ec(i,t[c]);let o=co.triangulate(i,n);for(let c=0;c<o.length;c+=3)s.push(o.slice(c,c+3));return s}};function Ql(r){let e=r.length;e>2&&r[e-1].equals(r[0])&&r.pop()}function ec(r,e){for(let t=0;t<e.length;t++)r.push(e[t].x),r.push(e[t].y)}var Ts=class r extends $e{constructor(e=new pr([new re(.5,.5),new re(-.5,.5),new re(-.5,-.5),new re(.5,-.5)]),t={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:e,options:t},e=Array.isArray(e)?e:[e];let i=this,n=[],s=[];for(let o=0,c=e.length;o<c;o++)a(e[o]);function a(o){let c=[],l=t.curveSegments!==void 0?t.curveSegments:12,h=t.steps!==void 0?t.steps:1,u=t.depth!==void 0?t.depth:1,d=t.bevelEnabled===void 0||t.bevelEnabled,p=t.bevelThickness!==void 0?t.bevelThickness:.2,f=t.bevelSize!==void 0?t.bevelSize:p-.1,x=t.bevelOffset!==void 0?t.bevelOffset:0,m=t.bevelSegments!==void 0?t.bevelSegments:3,g=t.extrudePath,v=t.UVGenerator!==void 0?t.UVGenerator:mu,_,T,E,b,D,z=!1;g&&(_=g.getSpacedPoints(h),z=!0,d=!1,T=g.computeFrenetFrames(h,!1),E=new C,b=new C,D=new C),d||(m=0,p=0,f=0,x=0);let L=o.extractPoints(l),B=L.shape,V=L.holes;if(!Zt.isClockWise(B)){B=B.reverse();for(let I=0,y=V.length;I<y;I++){let A=V[I];Zt.isClockWise(A)&&(V[I]=A.reverse())}}function F(I){let y=10000000000000001e-36,A=I[0];for(let N=1;N<=I.length;N++){let R=N%I.length,W=I[R],O=W.x-A.x,H=W.y-A.y,j=O*O+H*H,te=Math.max(Math.abs(W.x),Math.abs(W.y),Math.abs(A.x),Math.abs(A.y));j<=y*te*te?(I.splice(R,1),N--):A=W}}F(B),V.forEach(F);let Y=V.length,G=B;for(let I=0;I<Y;I++){let y=V[I];B=B.concat(y)}function Z(I,y,A){return y||Oe("ExtrudeGeometry: vec does not exist"),I.clone().addScaledVector(y,A)}let $=B.length;function ae(I,y,A){let N,R,W,O=I.x-y.x,H=I.y-y.y,j=A.x-I.x,te=A.y-I.y,ie=O*O+H*H,oe=O*te-H*j;if(Math.abs(oe)>Number.EPSILON){let ge=Math.sqrt(ie),ye=Math.sqrt(j*j+te*te),Ee=y.x-H/ge,Pe=y.y+O/ge,Fe=((A.x-te/ye-Ee)*te-(A.y+j/ye-Pe)*j)/(O*te-H*j);N=Ee+O*Fe-I.x,R=Pe+H*Fe-I.y;let me=N*N+R*R;if(me<=2)return new re(N,R);W=Math.sqrt(me/2)}else{let ge=!1;O>Number.EPSILON?j>Number.EPSILON&&(ge=!0):O<-Number.EPSILON?j<-Number.EPSILON&&(ge=!0):Math.sign(H)===Math.sign(te)&&(ge=!0),ge?(N=-H,R=O,W=Math.sqrt(ie)):(N=O,R=H,W=Math.sqrt(ie/2))}return new re(N/W,R/W)}let ne=[];for(let I=0,y=G.length,A=y-1,N=I+1;I<y;I++,A++,N++)A===y&&(A=0),N===y&&(N=0),ne[I]=ae(G[I],G[A],G[N]);let he=[],ue,ve,Se=ne.concat();for(let I=0,y=Y;I<y;I++){let A=V[I];ue=[];for(let N=0,R=A.length,W=R-1,O=N+1;N<R;N++,W++,O++)W===R&&(W=0),O===R&&(O=0),ue[N]=ae(A[N],A[W],A[O]);he.push(ue),Se=Se.concat(ue)}if(m===0)ve=Zt.triangulateShape(G,V);else{let I=[],y=[];for(let A=0;A<m;A++){let N=A/m,R=p*Math.cos(N*Math.PI/2),W=f*Math.sin(N*Math.PI/2)+x;for(let O=0,H=G.length;O<H;O++){let j=Z(G[O],ne[O],W);de(j.x,j.y,-R),N===0&&I.push(j)}for(let O=0,H=Y;O<H;O++){let j=V[O];ue=he[O];let te=[];for(let ie=0,oe=j.length;ie<oe;ie++){let ge=Z(j[ie],ue[ie],W);de(ge.x,ge.y,-R),N===0&&te.push(ge)}N===0&&y.push(te)}}ve=Zt.triangulateShape(I,y)}let J=ve.length,K=f+x;for(let I=0;I<$;I++){let y=d?Z(B[I],Se[I],K):B[I];z?(b.copy(T.normals[0]).multiplyScalar(y.x),E.copy(T.binormals[0]).multiplyScalar(y.y),D.copy(_[0]).add(b).add(E),de(D.x,D.y,D.z)):de(y.x,y.y,0)}for(let I=1;I<=h;I++)for(let y=0;y<$;y++){let A=d?Z(B[y],Se[y],K):B[y];z?(b.copy(T.normals[I]).multiplyScalar(A.x),E.copy(T.binormals[I]).multiplyScalar(A.y),D.copy(_[I]).add(b).add(E),de(D.x,D.y,D.z)):de(A.x,A.y,u/h*I)}for(let I=m-1;I>=0;I--){let y=I/m,A=p*Math.cos(y*Math.PI/2),N=f*Math.sin(y*Math.PI/2)+x;for(let R=0,W=G.length;R<W;R++){let O=Z(G[R],ne[R],N);de(O.x,O.y,u+A)}for(let R=0,W=V.length;R<W;R++){let O=V[R];ue=he[R];for(let H=0,j=O.length;H<j;H++){let te=Z(O[H],ue[H],N);z?de(te.x,te.y+_[h-1].y,_[h-1].x+A):de(te.x,te.y,u+A)}}}function Q(I,y){let A=I.length;for(;--A>=0;){let N=A,R=A-1;R<0&&(R=I.length-1);for(let W=0,O=h+2*m;W<O;W++){let H=$*W,j=$*(W+1);S(y+N+H,y+R+H,y+R+j,y+N+j)}}}function de(I,y,A){c.push(I),c.push(y),c.push(A)}function xe(I,y,A){M(I),M(y),M(A);let N=n.length/3,R=v.generateTopUV(i,n,N-3,N-2,N-1);U(R[0]),U(R[1]),U(R[2])}function S(I,y,A,N){M(I),M(y),M(N),M(y),M(A),M(N);let R=n.length/3,W=v.generateSideWallUV(i,n,R-6,R-3,R-2,R-1);U(W[0]),U(W[1]),U(W[3]),U(W[1]),U(W[2]),U(W[3])}function M(I){n.push(c[3*I+0]),n.push(c[3*I+1]),n.push(c[3*I+2])}function U(I){s.push(I.x),s.push(I.y)}(function(){let I=n.length/3;if(d){let y=0,A=$*y;for(let N=0;N<J;N++){let R=ve[N];xe(R[2]+A,R[1]+A,R[0]+A)}y=h+2*m,A=$*y;for(let N=0;N<J;N++){let R=ve[N];xe(R[0]+A,R[1]+A,R[2]+A)}}else{for(let y=0;y<J;y++){let A=ve[y];xe(A[2],A[1],A[0])}for(let y=0;y<J;y++){let A=ve[y];xe(A[0]+$*h,A[1]+$*h,A[2]+$*h)}}i.addGroup(I,n.length/3-I,0)})(),(function(){let I=n.length/3,y=0;Q(G,y),y+=G.length;for(let A=0,N=V.length;A<N;A++){let R=V[A];Q(R,y),y+=R.length}i.addGroup(I,n.length/3-I,1)})()}this.setAttribute("position",new Me(n,3)),this.setAttribute("uv",new Me(s,2)),this.computeVertexNormals()}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON();return(function(t,i,n){if(n.shapes=[],Array.isArray(t))for(let s=0,a=t.length;s<a;s++){let o=t[s];n.shapes.push(o.uuid)}else n.shapes.push(t.uuid);return n.options=Object.assign({},i),i.extrudePath!==void 0&&(n.options.extrudePath=i.extrudePath.toJSON()),n})(this.parameters.shapes,this.parameters.options,e)}static fromJSON(e,t){let i=[];for(let s=0,a=e.shapes.length;s<a;s++){let o=t[e.shapes[s]];i.push(o)}let n=e.options.extrudePath;return n!==void 0&&(e.options.extrudePath=new Ss[n.type]().fromJSON(n)),new r(i,e.options)}},mu={generateTopUV:function(r,e,t,i,n){let s=e[3*t],a=e[3*t+1],o=e[3*i],c=e[3*i+1],l=e[3*n],h=e[3*n+1];return[new re(s,a),new re(o,c),new re(l,h)]},generateSideWallUV:function(r,e,t,i,n,s){let a=e[3*t],o=e[3*t+1],c=e[3*t+2],l=e[3*i],h=e[3*i+1],u=e[3*i+2],d=e[3*n],p=e[3*n+1],f=e[3*n+2],x=e[3*s],m=e[3*s+1],g=e[3*s+2];return Math.abs(o-h)<Math.abs(a-l)?[new re(a,1-c),new re(l,1-u),new re(d,1-f),new re(x,1-g)]:[new re(o,1-c),new re(h,1-u),new re(p,1-f),new re(m,1-g)]}},ws=class r extends Ri{constructor(e=1,t=0){let i=(1+Math.sqrt(5))/2;super([-1,i,0,1,i,0,-1,-i,0,1,-i,0,0,-1,i,0,1,i,0,-1,-i,0,1,-i,i,0,-1,i,0,1,-i,0,-1,-i,0,1],[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1],e,t),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new r(e.radius,e.detail)}},As=class r extends $e{constructor(e=[new re(0,-.5),new re(.5,0),new re(0,.5)],t=12,i=0,n=2*Math.PI){super(),this.type="LatheGeometry",this.parameters={points:e,segments:t,phiStart:i,phiLength:n},t=Math.floor(t),n=Be(n,0,2*Math.PI);let s=[],a=[],o=[],c=[],l=[],h=1/t,u=new C,d=new re,p=new C,f=new C,x=new C,m=0,g=0;for(let v=0;v<=e.length-1;v++)switch(v){case 0:m=e[v+1].x-e[v].x,g=e[v+1].y-e[v].y,p.x=1*g,p.y=-m,p.z=0*g,x.copy(p),p.normalize(),c.push(p.x,p.y,p.z);break;case e.length-1:c.push(x.x,x.y,x.z);break;default:m=e[v+1].x-e[v].x,g=e[v+1].y-e[v].y,p.x=1*g,p.y=-m,p.z=0*g,f.copy(p),p.x+=x.x,p.y+=x.y,p.z+=x.z,p.normalize(),c.push(p.x,p.y,p.z),x.copy(f)}for(let v=0;v<=t;v++){let _=i+v*h*n,T=Math.sin(_),E=Math.cos(_);for(let b=0;b<=e.length-1;b++){u.x=e[b].x*T,u.y=e[b].y,u.z=e[b].x*E,a.push(u.x,u.y,u.z),d.x=v/t,d.y=b/(e.length-1),o.push(d.x,d.y);let D=c[3*b+0]*T,z=c[3*b+1],L=c[3*b+0]*E;l.push(D,z,L)}}for(let v=0;v<t;v++)for(let _=0;_<e.length-1;_++){let T=_+v*e.length,E=T,b=T+e.length,D=T+e.length+1,z=T+1;s.push(E,b,z),s.push(D,z,b)}this.setIndex(s),this.setAttribute("position",new Me(a,3)),this.setAttribute("uv",new Me(o,2)),this.setAttribute("normal",new Me(l,3))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new r(e.points,e.segments,e.phiStart,e.phiLength)}},Es=class r extends Ri{constructor(e=1,t=0){super([1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2],e,t),this.type="OctahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new r(e.radius,e.detail)}},Ii=class r extends $e{constructor(e=1,t=1,i=1,n=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:n};let s=e/2,a=t/2,o=Math.floor(i),c=Math.floor(n),l=o+1,h=c+1,u=e/o,d=t/c,p=[],f=[],x=[],m=[];for(let g=0;g<h;g++){let v=g*d-a;for(let _=0;_<l;_++){let T=_*u-s;f.push(T,-v,0),x.push(0,0,1),m.push(_/o),m.push(1-g/c)}}for(let g=0;g<c;g++)for(let v=0;v<o;v++){let _=v+l*g,T=v+l*(g+1),E=v+1+l*(g+1),b=v+1+l*g;p.push(_,T,b),p.push(T,E,b)}this.setIndex(p),this.setAttribute("position",new Me(f,3)),this.setAttribute("normal",new Me(x,3)),this.setAttribute("uv",new Me(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new r(e.width,e.height,e.widthSegments,e.heightSegments)}},Cs=class r extends $e{constructor(e=.5,t=1,i=32,n=1,s=0,a=2*Math.PI){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:i,phiSegments:n,thetaStart:s,thetaLength:a},i=Math.max(3,i);let o=[],c=[],l=[],h=[],u=e,d=(t-e)/(n=Math.max(1,n)),p=new C,f=new re;for(let x=0;x<=n;x++){for(let m=0;m<=i;m++){let g=s+m/i*a;p.x=u*Math.cos(g),p.y=u*Math.sin(g),c.push(p.x,p.y,p.z),l.push(0,0,1),f.x=(p.x/t+1)/2,f.y=(p.y/t+1)/2,h.push(f.x,f.y)}u+=d}for(let x=0;x<n;x++){let m=x*(i+1);for(let g=0;g<i;g++){let v=g+m,_=v,T=v+i+1,E=v+i+2,b=v+1;o.push(_,T,b),o.push(T,E,b)}}this.setIndex(o),this.setAttribute("position",new Me(c,3)),this.setAttribute("normal",new Me(l,3)),this.setAttribute("uv",new Me(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new r(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}},Rs=class r extends $e{constructor(e=new pr([new re(0,.5),new re(-.5,-.5),new re(.5,-.5)]),t=12){super(),this.type="ShapeGeometry",this.parameters={shapes:e,curveSegments:t};let i=[],n=[],s=[],a=[],o=0,c=0;if(Array.isArray(e)===!1)l(e);else for(let h=0;h<e.length;h++)l(e[h]),this.addGroup(o,c,h),o+=c,c=0;function l(h){let u=n.length/3,d=h.extractPoints(t),p=d.shape,f=d.holes;Zt.isClockWise(p)===!1&&(p=p.reverse());for(let m=0,g=f.length;m<g;m++){let v=f[m];Zt.isClockWise(v)===!0&&(f[m]=v.reverse())}let x=Zt.triangulateShape(p,f);for(let m=0,g=f.length;m<g;m++){let v=f[m];p=p.concat(v)}for(let m=0,g=p.length;m<g;m++){let v=p[m];n.push(v.x,v.y,0),s.push(0,0,1),a.push(v.x,v.y)}for(let m=0,g=x.length;m<g;m++){let v=x[m],_=v[0]+u,T=v[1]+u,E=v[2]+u;i.push(_,T,E),c+=3}}this.setIndex(i),this.setAttribute("position",new Me(n,3)),this.setAttribute("normal",new Me(s,3)),this.setAttribute("uv",new Me(a,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON();return(function(t,i){if(i.shapes=[],Array.isArray(t))for(let n=0,s=t.length;n<s;n++){let a=t[n];i.shapes.push(a.uuid)}else i.shapes.push(t.uuid);return i})(this.parameters.shapes,e)}static fromJSON(e,t){let i=[];for(let n=0,s=e.shapes.length;n<s;n++){let a=t[e.shapes[n]];i.push(a)}return new r(i,e.curveSegments)}},Is=class r extends $e{constructor(e=1,t=32,i=16,n=0,s=2*Math.PI,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:i,phiStart:n,phiLength:s,thetaStart:a,thetaLength:o},t=Math.max(3,Math.floor(t)),i=Math.max(2,Math.floor(i));let c=Math.min(a+o,Math.PI),l=0,h=[],u=new C,d=new C,p=[],f=[],x=[],m=[];for(let g=0;g<=i;g++){let v=[],_=g/i,T=0;g===0&&a===0?T=.5/t:g===i&&c===Math.PI&&(T=-.5/t);for(let E=0;E<=t;E++){let b=E/t;u.x=-e*Math.cos(n+b*s)*Math.sin(a+_*o),u.y=e*Math.cos(a+_*o),u.z=e*Math.sin(n+b*s)*Math.sin(a+_*o),f.push(u.x,u.y,u.z),d.copy(u).normalize(),x.push(d.x,d.y,d.z),m.push(b+T,1-_),v.push(l++)}h.push(v)}for(let g=0;g<i;g++)for(let v=0;v<t;v++){let _=h[g][v+1],T=h[g][v],E=h[g+1][v],b=h[g+1][v+1];(g!==0||a>0)&&p.push(_,T,b),(g!==i-1||c<Math.PI)&&p.push(T,E,b)}this.setIndex(p),this.setAttribute("position",new Me(f,3)),this.setAttribute("normal",new Me(x,3)),this.setAttribute("uv",new Me(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new r(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}},Ps=class r extends Ri{constructor(e=1,t=0){super([1,1,1,-1,-1,1,-1,1,-1,1,-1,-1],[2,1,0,0,3,2,1,3,0,2,3,1],e,t),this.type="TetrahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new r(e.radius,e.detail)}},Ls=class r extends $e{constructor(e=1,t=.4,i=12,n=48,s=2*Math.PI){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:i,tubularSegments:n,arc:s},i=Math.floor(i),n=Math.floor(n);let a=[],o=[],c=[],l=[],h=new C,u=new C,d=new C;for(let p=0;p<=i;p++)for(let f=0;f<=n;f++){let x=f/n*s,m=p/i*Math.PI*2;u.x=(e+t*Math.cos(m))*Math.cos(x),u.y=(e+t*Math.cos(m))*Math.sin(x),u.z=t*Math.sin(m),o.push(u.x,u.y,u.z),h.x=e*Math.cos(x),h.y=e*Math.sin(x),d.subVectors(u,h).normalize(),c.push(d.x,d.y,d.z),l.push(f/n),l.push(p/i)}for(let p=1;p<=i;p++)for(let f=1;f<=n;f++){let x=(n+1)*p+f-1,m=(n+1)*(p-1)+f-1,g=(n+1)*(p-1)+f,v=(n+1)*p+f;a.push(x,m,v),a.push(m,g,v)}this.setIndex(a),this.setAttribute("position",new Me(o,3)),this.setAttribute("normal",new Me(c,3)),this.setAttribute("uv",new Me(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new r(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}},Ds=class r extends $e{constructor(e=1,t=.4,i=64,n=8,s=2,a=3){super(),this.type="TorusKnotGeometry",this.parameters={radius:e,tube:t,tubularSegments:i,radialSegments:n,p:s,q:a},i=Math.floor(i),n=Math.floor(n);let o=[],c=[],l=[],h=[],u=new C,d=new C,p=new C,f=new C,x=new C,m=new C,g=new C;for(let _=0;_<=i;++_){let T=_/i*s*Math.PI*2;v(T,s,a,e,p),v(T+.01,s,a,e,f),m.subVectors(f,p),g.addVectors(f,p),x.crossVectors(m,g),g.crossVectors(x,m),x.normalize(),g.normalize();for(let E=0;E<=n;++E){let b=E/n*Math.PI*2,D=-t*Math.cos(b),z=t*Math.sin(b);u.x=p.x+(D*g.x+z*x.x),u.y=p.y+(D*g.y+z*x.y),u.z=p.z+(D*g.z+z*x.z),c.push(u.x,u.y,u.z),d.subVectors(u,p).normalize(),l.push(d.x,d.y,d.z),h.push(_/i),h.push(E/n)}}for(let _=1;_<=i;_++)for(let T=1;T<=n;T++){let E=(n+1)*(_-1)+(T-1),b=(n+1)*_+(T-1),D=(n+1)*_+T,z=(n+1)*(_-1)+T;o.push(E,b,z),o.push(b,D,z)}function v(_,T,E,b,D){let z=Math.cos(_),L=Math.sin(_),B=E/T*_,V=Math.cos(B);D.x=b*(2+V)*.5*z,D.y=b*(2+V)*L*.5,D.z=b*Math.sin(B)*.5}this.setIndex(o),this.setAttribute("position",new Me(c,3)),this.setAttribute("normal",new Me(l,3)),this.setAttribute("uv",new Me(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new r(e.radius,e.tube,e.tubularSegments,e.radialSegments,e.p,e.q)}},Us=class r extends $e{constructor(e=new hr(new C(-1,-1,0),new C(-1,1,0),new C(1,1,0)),t=64,i=1,n=8,s=!1){super(),this.type="TubeGeometry",this.parameters={path:e,tubularSegments:t,radius:i,radialSegments:n,closed:s};let a=e.computeFrenetFrames(t,s);this.tangents=a.tangents,this.normals=a.normals,this.binormals=a.binormals;let o=new C,c=new C,l=new re,h=new C,u=[],d=[],p=[],f=[];function x(m){h=e.getPointAt(m/t,h);let g=a.normals[m],v=a.binormals[m];for(let _=0;_<=n;_++){let T=_/n*Math.PI*2,E=Math.sin(T),b=-Math.cos(T);c.x=b*g.x+E*v.x,c.y=b*g.y+E*v.y,c.z=b*g.z+E*v.z,c.normalize(),d.push(c.x,c.y,c.z),o.x=h.x+i*c.x,o.y=h.y+i*c.y,o.z=h.z+i*c.z,u.push(o.x,o.y,o.z)}}(function(){for(let m=0;m<t;m++)x(m);x(s===!1?t:0),(function(){for(let m=0;m<=t;m++)for(let g=0;g<=n;g++)l.x=m/t,l.y=g/n,p.push(l.x,l.y)})(),(function(){for(let m=1;m<=t;m++)for(let g=1;g<=n;g++){let v=(n+1)*(m-1)+(g-1),_=(n+1)*m+(g-1),T=(n+1)*m+g,E=(n+1)*(m-1)+g;f.push(v,_,E),f.push(_,T,E)}})()})(),this.setIndex(f),this.setAttribute("position",new Me(u,3)),this.setAttribute("normal",new Me(d,3)),this.setAttribute("uv",new Me(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON();return e.path=this.parameters.path.toJSON(),e}static fromJSON(e){return new r(new Ss[e.path.type]().fromJSON(e.path),e.tubularSegments,e.radius,e.radialSegments,e.closed)}},Ns=class extends $e{constructor(e=null){if(super(),this.type="WireframeGeometry",this.parameters={geometry:e},e!==null){let t=[],i=new Set,n=new C,s=new C;if(e.index!==null){let a=e.attributes.position,o=e.index,c=e.groups;c.length===0&&(c=[{start:0,count:o.count,materialIndex:0}]);for(let l=0,h=c.length;l<h;++l){let u=c[l],d=u.start;for(let p=d,f=d+u.count;p<f;p+=3)for(let x=0;x<3;x++){let m=o.getX(p+x),g=o.getX(p+(x+1)%3);n.fromBufferAttribute(a,m),s.fromBufferAttribute(a,g),tc(n,s,i)===!0&&(t.push(n.x,n.y,n.z),t.push(s.x,s.y,s.z))}}}else{let a=e.attributes.position;for(let o=0,c=a.count/3;o<c;o++)for(let l=0;l<3;l++){let h=3*o+l,u=3*o+(l+1)%3;n.fromBufferAttribute(a,h),s.fromBufferAttribute(a,u),tc(n,s,i)===!0&&(t.push(n.x,n.y,n.z),t.push(s.x,s.y,s.z))}}this.setAttribute("position",new Me(t,3))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}};function tc(r,e,t){let i=`${r.x},${r.y},${r.z}-${e.x},${e.y},${e.z}`,n=`${e.x},${e.y},${e.z}-${r.x},${r.y},${r.z}`;return t.has(i)!==!0&&t.has(n)!==!0&&(t.add(i),t.add(n),!0)}var lm=Object.freeze({__proto__:null,BoxGeometry:Wi,CapsuleGeometry:ps,CircleGeometry:ms,ConeGeometry:fs,CylinderGeometry:ar,DodecahedronGeometry:gs,EdgesGeometry:vs,ExtrudeGeometry:Ts,IcosahedronGeometry:ws,LatheGeometry:As,OctahedronGeometry:Es,PlaneGeometry:Ii,PolyhedronGeometry:Ri,RingGeometry:Cs,ShapeGeometry:Rs,SphereGeometry:Is,TetrahedronGeometry:Ps,TorusGeometry:Ls,TorusKnotGeometry:Ds,TubeGeometry:Us,WireframeGeometry:Ns});var Fs=class extends Hi{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=3200,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},Os=class extends Hi{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}};function Qr(r,e){return r&&r.constructor!==e?typeof e.BYTES_PER_ELEMENT=="number"?new e(r):Array.prototype.slice.call(r):r}function fu(r){return ArrayBuffer.isView(r)&&!(r instanceof DataView)}var qi=class{constructor(e,t,i,n){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=n!==void 0?n:new t.constructor(i),this.sampleValues=t,this.valueSize=i,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,i=this._cachedIndex,n=t[i],s=t[i-1];i:{e:{let a;t:{n:if(!(e<n)){for(let o=i+2;;){if(n===void 0){if(e<s)break n;return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}if(i===o)break;if(s=n,n=t[++i],e<n)break e}a=t.length;break t}if(!(e>=s)){let o=t[1];e<o&&(i=2,s=o);for(let c=i-2;;){if(s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===c)break;if(n=s,s=t[--i-1],e>=s)break e}a=i,i=0;break t}break i}for(;i<a;){let o=i+a>>>1;e<t[o]?a=o:i=o+1}if(n=t[i],s=t[i-1],s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===void 0)return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}this._cachedIndex=i,this.intervalChanged_(i,s,n)}return this.interpolate_(i,s,e,n)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,i=this.sampleValues,n=this.valueSize,s=e*n;for(let a=0;a!==n;++a)t[a]=i[s+a];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},Bs=class extends qi{constructor(e,t,i,n){super(e,t,i,n),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:io,endingEnd:io}}intervalChanged_(e,t,i){let n=this.parameterPositions,s=e-2,a=e+1,o=n[s],c=n[a];if(o===void 0)switch(this.getSettings_().endingStart){case no:s=e,o=2*t-i;break;case ro:s=n.length-2,o=t+n[s]-n[s+1];break;default:s=e,o=i}if(c===void 0)switch(this.getSettings_().endingEnd){case no:a=e,c=2*i-t;break;case ro:a=1,c=i+n[1]-n[0];break;default:a=e-1,c=t}let l=.5*(i-t),h=this.valueSize;this._weightPrev=l/(t-o),this._weightNext=l/(c-i),this._offsetPrev=s*h,this._offsetNext=a*h}interpolate_(e,t,i,n){let s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=e*o,l=c-o,h=this._offsetPrev,u=this._offsetNext,d=this._weightPrev,p=this._weightNext,f=(i-t)/(n-t),x=f*f,m=x*f,g=-d*m+2*d*x-d*f,v=(1+d)*m+(-1.5-2*d)*x+(-.5+d)*f+1,_=(-1-p)*m+(1.5+p)*x+.5*f,T=p*m-p*x;for(let E=0;E!==o;++E)s[E]=g*a[h+E]+v*a[l+E]+_*a[c+E]+T*a[u+E];return s}},zs=class extends qi{constructor(e,t,i,n){super(e,t,i,n)}interpolate_(e,t,i,n){let s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=e*o,l=c-o,h=(i-t)/(n-t),u=1-h;for(let d=0;d!==o;++d)s[d]=a[l+d]*u+a[c+d]*h;return s}},Gs=class extends qi{constructor(e,t,i,n){super(e,t,i,n)}interpolate_(e){return this.copySampleValue_(e-1)}},wt=class{constructor(e,t,i,n){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=Qr(t,this.TimeBufferType),this.values=Qr(i,this.ValueBufferType),this.setInterpolation(n||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,i;if(t.toJSON!==this.toJSON)i=t.toJSON(e);else{i={name:e.name,times:Qr(e.times,Array),values:Qr(e.values,Array)};let n=e.getInterpolation();n!==e.DefaultInterpolation&&(i.interpolation=n)}return i.type=e.ValueTypeName,i}InterpolantFactoryMethodDiscrete(e){return new Gs(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new zs(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new Bs(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case qn:t=this.InterpolantFactoryMethodDiscrete;break;case rs:t=this.InterpolantFactoryMethodLinear;break;case es:t=this.InterpolantFactoryMethodSmooth}if(t===void 0){let i="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0){if(e===this.DefaultInterpolation)throw new Error(i);this.setInterpolation(this.DefaultInterpolation)}return be("KeyframeTrack:",i),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return qn;case this.InterpolantFactoryMethodLinear:return rs;case this.InterpolantFactoryMethodSmooth:return es}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let i=0,n=t.length;i!==n;++i)t[i]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let i=0,n=t.length;i!==n;++i)t[i]*=e}return this}trim(e,t){let i=this.times,n=i.length,s=0,a=n-1;for(;s!==n&&i[s]<e;)++s;for(;a!==-1&&i[a]>t;)--a;if(++a,s!==0||a!==n){s>=a&&(a=Math.max(a,1),s=a-1);let o=this.getValueSize();this.times=i.slice(s,a),this.values=this.values.slice(s*o,a*o)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(Oe("KeyframeTrack: Invalid value size in track.",this),e=!1);let i=this.times,n=this.values,s=i.length;s===0&&(Oe("KeyframeTrack: Track is empty.",this),e=!1);let a=null;for(let o=0;o!==s;o++){let c=i[o];if(typeof c=="number"&&isNaN(c)){Oe("KeyframeTrack: Time is not a valid number.",this,o,c),e=!1;break}if(a!==null&&a>c){Oe("KeyframeTrack: Out of order keys.",this,o,c,a),e=!1;break}a=c}if(n!==void 0&&fu(n))for(let o=0,c=n.length;o!==c;++o){let l=n[o];if(isNaN(l)){Oe("KeyframeTrack: Value is not a valid number.",this,o,l),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),i=this.getValueSize(),n=this.getInterpolation()===es,s=e.length-1,a=1;for(let o=1;o<s;++o){let c=!1,l=e[o];if(l!==e[o+1]&&(o!==1||l!==e[0]))if(n)c=!0;else{let h=o*i,u=h-i,d=h+i;for(let p=0;p!==i;++p){let f=t[h+p];if(f!==t[u+p]||f!==t[d+p]){c=!0;break}}}if(c){if(o!==a){e[a]=e[o];let h=o*i,u=a*i;for(let d=0;d!==i;++d)t[u+d]=t[h+d]}++a}}if(s>0){e[a]=e[s];for(let o=s*i,c=a*i,l=0;l!==i;++l)t[c+l]=t[o+l];++a}return a!==e.length?(this.times=e.slice(0,a),this.values=t.slice(0,a*i)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),i=new this.constructor(this.name,e,t);return i.createInterpolant=this.createInterpolant,i}};wt.prototype.ValueTypeName="",wt.prototype.TimeBufferType=Float32Array,wt.prototype.ValueBufferType=Float32Array,wt.prototype.DefaultInterpolation=rs;var wi=class extends wt{constructor(e,t,i){super(e,t,i)}};wi.prototype.ValueTypeName="bool",wi.prototype.ValueBufferType=Array,wi.prototype.DefaultInterpolation=qn,wi.prototype.InterpolantFactoryMethodLinear=void 0,wi.prototype.InterpolantFactoryMethodSmooth=void 0;var Vs=class extends wt{constructor(e,t,i,n){super(e,t,i,n)}};Vs.prototype.ValueTypeName="color";var ks=class extends wt{constructor(e,t,i,n){super(e,t,i,n)}};ks.prototype.ValueTypeName="number";var Hs=class extends qi{constructor(e,t,i,n){super(e,t,i,n)}interpolate_(e,t,i,n){let s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=(i-t)/(n-t),l=e*o;for(let h=l+o;l!==h;l+=4)Bt.slerpFlat(s,0,a,l-o,a,l,c);return s}},vr=class extends wt{constructor(e,t,i,n){super(e,t,i,n)}InterpolantFactoryMethodLinear(e){return new Hs(this.times,this.values,this.getValueSize(),e)}};vr.prototype.ValueTypeName="quaternion",vr.prototype.InterpolantFactoryMethodSmooth=void 0;var Ai=class extends wt{constructor(e,t,i){super(e,t,i)}};Ai.prototype.ValueTypeName="string",Ai.prototype.ValueBufferType=Array,Ai.prototype.DefaultInterpolation=qn,Ai.prototype.InterpolantFactoryMethodLinear=void 0,Ai.prototype.InterpolantFactoryMethodSmooth=void 0;var Ws=class extends wt{constructor(e,t,i,n){super(e,t,i,n)}};Ws.prototype.ValueTypeName="vector";var Xs=class{constructor(e,t,i){let n=this,s,a=!1,o=0,c=0,l=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=i,this._abortController=null,this.itemStart=function(h){c++,a===!1&&n.onStart!==void 0&&n.onStart(h,o,c),a=!0},this.itemEnd=function(h){o++,n.onProgress!==void 0&&n.onProgress(h,o,c),o===c&&(a=!1,n.onLoad!==void 0&&n.onLoad())},this.itemError=function(h){n.onError!==void 0&&n.onError(h)},this.resolveURL=function(h){return s?s(h):h},this.setURLModifier=function(h){return s=h,this},this.addHandler=function(h,u){return l.push(h,u),this},this.removeHandler=function(h){let u=l.indexOf(h);return u!==-1&&l.splice(u,2),this},this.getHandler=function(h){for(let u=0,d=l.length;u<d;u+=2){let p=l[u],f=l[u+1];if(p.global&&(p.lastIndex=0),p.test(h))return f}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},th=new Xs,js=class{constructor(e){this.manager=e!==void 0?e:th,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){let i=this;return new Promise(function(n,s){i.load(e,n,t,s)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}abort(){return this}};js.DEFAULT_MATERIAL_NAME="__DEFAULT";var cm=new Le,hm=new C,um=new C;var dm=new Le,pm=new C,mm=new C;var An=class extends Sn{constructor(e=-1,t=1,i=1,n=-1,s=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=n,this.near=s,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,n,s,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=n,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,n=(this.top+this.bottom)/2,s=i-e,a=i+e,o=n+t,c=n-t;if(this.view!==null&&this.view.enabled){let l=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=l*this.view.offsetX,a=s+l*this.view.width,o-=h*this.view.offsetY,c=o-h*this.view.height}this.projectionMatrix.makeOrthographic(s,a,o,c,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}};var En=class extends $e{constructor(){super(),this.isInstancedBufferGeometry=!0,this.type="InstancedBufferGeometry",this.instanceCount=1/0}copy(e){return super.copy(e),this.instanceCount=e.instanceCount,this}toJSON(){let e=super.toJSON();return e.instanceCount=this.instanceCount,e.isInstancedBufferGeometry=!0,e}};var fm=new Le,gm=new Le,vm=new Le;var qs=class extends yt{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}};var _m=new C,xm=new Bt,ym=new C,Mm=new C,Sm=new C;var bm=new C,Tm=new Bt,wm=new C,Am=new C;var sl="\\[\\]\\.:\\/",gu=new RegExp("["+sl+"]","g"),to="[^"+sl+"]",vu="[^"+sl.replace("\\.","")+"]",_u=new RegExp("^"+/((?:WC+[\/:])*)/.source.replace("WC",to)+/(WCOD+)?/.source.replace("WCOD",vu)+/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",to)+/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",to)+"$"),xu=["material","materials","bones","map"],Ye=class r{constructor(e,t,i){this.path=t,this.parsedPath=i||r.parseTrackName(t),this.node=r.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,i){return e&&e.isAnimationObjectGroup?new r.Composite(e,t,i):new r(e,t,i)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(gu,"")}static parseTrackName(e){let t=_u.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);let i={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},n=i.nodeName&&i.nodeName.lastIndexOf(".");if(n!==void 0&&n!==-1){let s=i.nodeName.substring(n+1);xu.indexOf(s)!==-1&&(i.nodeName=i.nodeName.substring(0,n),i.objectName=s)}if(i.propertyName===null||i.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return i}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let i=e.skeleton.getBoneByName(t);if(i!==void 0)return i}if(e.children){let i=function(s){for(let a=0;a<s.length;a++){let o=s[a];if(o.name===t||o.uuid===t)return o;let c=i(o.children);if(c)return c}return null},n=i(e.children);if(n)return n}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let i=this.resolvedProperty;for(let n=0,s=i.length;n!==s;++n)e[t++]=i[n]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let i=this.resolvedProperty;for(let n=0,s=i.length;n!==s;++n)i[n]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let i=this.resolvedProperty;for(let n=0,s=i.length;n!==s;++n)i[n]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let i=this.resolvedProperty;for(let n=0,s=i.length;n!==s;++n)i[n]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,i=t.objectName,n=t.propertyName,s=t.propertyIndex;if(e||(e=r.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e)return void be("PropertyBinding: No target node found for track: "+this.path+".");if(i){let l=t.objectIndex;switch(i){case"materials":if(!e.material)return void Oe("PropertyBinding: Can not bind to material as node does not have a material.",this);if(!e.material.materials)return void Oe("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);e=e.material.materials;break;case"bones":if(!e.skeleton)return void Oe("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);e=e.skeleton.bones;for(let h=0;h<e.length;h++)if(e[h].name===l){l=h;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material)return void Oe("PropertyBinding: Can not bind to material as node does not have a material.",this);if(!e.material.map)return void Oe("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);e=e.material.map;break;default:if(e[i]===void 0)return void Oe("PropertyBinding: Can not bind to objectName of node undefined.",this);e=e[i]}if(l!==void 0){if(e[l]===void 0)return void Oe("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);e=e[l]}}let a=e[n];if(a===void 0)return void Oe("PropertyBinding: Trying to update property for track: "+t.nodeName+"."+n+" but it wasn't found.",e);let o=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?o=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(s!==void 0){if(n==="morphTargetInfluences"){if(!e.geometry)return void Oe("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);if(!e.geometry.morphAttributes)return void Oe("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);e.morphTargetDictionary[s]!==void 0&&(s=e.morphTargetDictionary[s])}c=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=s}else a.fromArray!==void 0&&a.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(c=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=n;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};Ye.Composite=class{constructor(r,e,t){let i=t||Ye.parseTrackName(e);this._targetGroup=r,this._bindings=r.subscribe_(e,i)}getValue(r,e){this.bind();let t=this._targetGroup.nCachedObjects_,i=this._bindings[t];i!==void 0&&i.getValue(r,e)}setValue(r,e){let t=this._bindings;for(let i=this._targetGroup.nCachedObjects_,n=t.length;i!==n;++i)t[i].setValue(r,e)}bind(){let r=this._bindings;for(let e=this._targetGroup.nCachedObjects_,t=r.length;e!==t;++e)r[e].bind()}unbind(){let r=this._bindings;for(let e=this._targetGroup.nCachedObjects_,t=r.length;e!==t;++e)r[e].unbind()}},Ye.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3},Ye.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2},Ye.prototype.GetterByBindingType=[Ye.prototype._getValue_direct,Ye.prototype._getValue_array,Ye.prototype._getValue_arrayElement,Ye.prototype._getValue_toArray],Ye.prototype.SetterByBindingTypeAndVersioning=[[Ye.prototype._setValue_direct,Ye.prototype._setValue_direct_setNeedsUpdate,Ye.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Ye.prototype._setValue_array,Ye.prototype._setValue_array_setNeedsUpdate,Ye.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Ye.prototype._setValue_arrayElement,Ye.prototype._setValue_arrayElement_setNeedsUpdate,Ye.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Ye.prototype._setValue_fromArray,Ye.prototype._setValue_fromArray_setNeedsUpdate,Ye.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var Em=new Float32Array(1);var Cm=new Le;var Rm=new re;var Im=new C,Pm=new C,Lm=new C,Dm=new C,Um=new C,Nm=new C,Fm=new C;var Om=new C;var Bm=new C,zm=new Le,Gm=new Le;var Vm=new C,km=new ke,Hm=new ke;var Wm=new C,Xm=new C,jm=new C;var qm=new C,Ym=new Sn;var Zm=new zt;var Jm=new C;function al(r,e,t,i){let n=(function(s){switch(s){case gi:case vo:return{byteLength:1,components:1};case Pn:case _o:case Ki:return{byteLength:2,components:1};case sa:case aa:return{byteLength:2,components:4};case Ji:case ra:case ti:return{byteLength:4,components:1};case xo:case yo:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${s}.`)})(i);switch(t){case 1021:return r*e;case Mo:case oa:return r*e/n.components*n.byteLength;case 1030:case 1031:return r*e*2/n.components*n.byteLength;case 1022:return r*e*3/n.components*n.byteLength;case kt:case 1033:return r*e*4/n.components*n.byteLength;case 33776:case 33777:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*8;case 33778:case 33779:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case 35841:case 35843:return Math.max(r,16)*Math.max(e,8)/4;case 35840:case 35842:return Math.max(r,8)*Math.max(e,8)/2;case 36196:case 37492:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*8;case 37496:case 37808:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case 37809:return Math.floor((r+4)/5)*Math.floor((e+3)/4)*16;case 37810:return Math.floor((r+4)/5)*Math.floor((e+4)/5)*16;case 37811:return Math.floor((r+5)/6)*Math.floor((e+4)/5)*16;case 37812:return Math.floor((r+5)/6)*Math.floor((e+5)/6)*16;case 37813:return Math.floor((r+7)/8)*Math.floor((e+4)/5)*16;case 37814:return Math.floor((r+7)/8)*Math.floor((e+5)/6)*16;case 37815:return Math.floor((r+7)/8)*Math.floor((e+7)/8)*16;case 37816:return Math.floor((r+9)/10)*Math.floor((e+4)/5)*16;case 37817:return Math.floor((r+9)/10)*Math.floor((e+5)/6)*16;case 37818:return Math.floor((r+9)/10)*Math.floor((e+7)/8)*16;case 37819:return Math.floor((r+9)/10)*Math.floor((e+9)/10)*16;case 37820:return Math.floor((r+11)/12)*Math.floor((e+9)/10)*16;case 37821:return Math.floor((r+11)/12)*Math.floor((e+11)/12)*16;case 36492:case 36494:case 36495:return Math.ceil(r/4)*Math.ceil(e/4)*16;case 36283:case 36284:return Math.ceil(r/4)*Math.ceil(e/4)*8;case 36285:case 36286:return Math.ceil(r/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"181"}})),typeof window<"u"&&(window.__THREE__?be("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="181");function Th(){let r=null,e=!1,t=null,i=null;function n(s,a){t(s,a),i=r.requestAnimationFrame(n)}return{start:function(){e!==!0&&t!==null&&(i=r.requestAnimationFrame(n),e=!0)},stop:function(){r.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){r=s}}}function Mu(r){let e=new WeakMap;return{get:function(t){return t.isInterleavedBufferAttribute&&(t=t.data),e.get(t)},remove:function(t){t.isInterleavedBufferAttribute&&(t=t.data);let i=e.get(t);i&&(r.deleteBuffer(i.buffer),e.delete(t))},update:function(t,i){if(t.isInterleavedBufferAttribute&&(t=t.data),t.isGLBufferAttribute){let s=e.get(t);return void((!s||s.version<t.version)&&e.set(t,{buffer:t.buffer,type:t.type,bytesPerElement:t.elementSize,version:t.version}))}let n=e.get(t);if(n===void 0)e.set(t,(function(s,a){let o=s.array,c=s.usage,l=o.byteLength,h=r.createBuffer(),u;if(r.bindBuffer(a,h),r.bufferData(a,o,c),s.onUploadCallback(),o instanceof Float32Array)u=r.FLOAT;else if(typeof Float16Array<"u"&&o instanceof Float16Array)u=r.HALF_FLOAT;else if(o instanceof Uint16Array)u=s.isFloat16BufferAttribute?r.HALF_FLOAT:r.UNSIGNED_SHORT;else if(o instanceof Int16Array)u=r.SHORT;else if(o instanceof Uint32Array)u=r.UNSIGNED_INT;else if(o instanceof Int32Array)u=r.INT;else if(o instanceof Int8Array)u=r.BYTE;else if(o instanceof Uint8Array)u=r.UNSIGNED_BYTE;else{if(!(o instanceof Uint8ClampedArray))throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+o);u=r.UNSIGNED_BYTE}return{buffer:h,type:u,bytesPerElement:o.BYTES_PER_ELEMENT,version:s.version,size:l}})(t,i));else if(n.version<t.version){if(n.size!==t.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");(function(s,a,o){let c=a.array,l=a.updateRanges;if(r.bindBuffer(o,s),l.length===0)r.bufferSubData(o,0,c);else{l.sort((u,d)=>u.start-d.start);let h=0;for(let u=1;u<l.length;u++){let d=l[h],p=l[u];p.start<=d.start+d.count+1?d.count=Math.max(d.count,p.start+p.count-d.start):(++h,l[h]=p)}l.length=h+1;for(let u=0,d=l.length;u<d;u++){let p=l[u];r.bufferSubData(o,p.start*c.BYTES_PER_ELEMENT,c,p.start,p.count)}a.clearUpdateRanges()}a.onUploadCallback()})(n.buffer,t,i),n.version=t.version}}}}var De={alphahash_fragment:`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,alphahash_pars_fragment:`#ifdef USE_ALPHAHASH
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
#endif`,alphamap_fragment:`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,alphamap_pars_fragment:`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,alphatest_fragment:`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,alphatest_pars_fragment:`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,aomap_fragment:`#ifdef USE_AOMAP
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
#endif`,aomap_pars_fragment:`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,batching_pars_vertex:`#ifdef USE_BATCHING
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
#endif`,batching_vertex:`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,begin_vertex:`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,beginnormal_vertex:`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,bsdfs:`float G_BlinnPhong_Implicit( ) {
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
} // validated`,iridescence_fragment:`#ifdef USE_IRIDESCENCE
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
#endif`,bumpmap_pars_fragment:`#ifdef USE_BUMPMAP
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
#endif`,clipping_planes_fragment:`#if NUM_CLIPPING_PLANES > 0
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
#endif`,clipping_planes_pars_fragment:`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,clipping_planes_pars_vertex:`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,clipping_planes_vertex:`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,color_fragment:`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,color_pars_fragment:`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,color_pars_vertex:`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,color_vertex:`#if defined( USE_COLOR_ALPHA )
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
#endif`,common:`#define PI 3.141592653589793
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
} // validated`,cube_uv_reflection_fragment:`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,defaultnormal_vertex:`vec3 transformedNormal = objectNormal;
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
#endif`,displacementmap_pars_vertex:`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,displacementmap_vertex:`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,emissivemap_fragment:`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,emissivemap_pars_fragment:`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,colorspace_fragment:"gl_FragColor = linearToOutputTexel( gl_FragColor );",colorspace_pars_fragment:`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,envmap_fragment:`#ifdef USE_ENVMAP
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
#endif`,envmap_common_pars_fragment:`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,envmap_pars_fragment:`#ifdef USE_ENVMAP
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
#endif`,envmap_pars_vertex:`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,envmap_physical_pars_fragment:`#ifdef USE_ENVMAP
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
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
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
#endif`,envmap_vertex:`#ifdef USE_ENVMAP
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
#endif`,fog_vertex:`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,fog_pars_vertex:`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,fog_fragment:`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,fog_pars_fragment:`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,gradientmap_pars_fragment:`#ifdef USE_GRADIENTMAP
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
}`,lightmap_pars_fragment:`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,lights_lambert_fragment:`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,lights_lambert_pars_fragment:`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,lights_pars_begin:`uniform bool receiveShadow;
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
#endif`,lights_toon_fragment:`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,lights_toon_pars_fragment:`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,lights_phong_fragment:`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,lights_phong_pars_fragment:`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,lights_physical_fragment:`PhysicalMaterial material;
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
#endif`,lights_physical_pars_fragment:`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
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
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
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
	vec2 uv = vec2( roughness, dotNV );
	return texture2D( dfgLUT, uv ).rg;
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
vec3 BRDF_GGX_Multiscatter( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 singleScatter = BRDF_GGX( lightDir, viewDir, normal, material );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 dfgV = DFGApprox( vec3(0.0, 0.0, 1.0), vec3(sqrt(1.0 - dotNV * dotNV), 0.0, dotNV), material.roughness );
	vec2 dfgL = DFGApprox( vec3(0.0, 0.0, 1.0), vec3(sqrt(1.0 - dotNL * dotNL), 0.0, dotNL), material.roughness );
	vec3 FssEss_V = material.specularColor * dfgV.x + material.specularF90 * dfgV.y;
	vec3 FssEss_L = material.specularColor * dfgL.x + material.specularF90 * dfgL.y;
	float Ess_V = dfgV.x + dfgV.y;
	float Ess_L = dfgL.x + dfgL.y;
	float Ems_V = 1.0 - Ess_V;
	float Ems_L = 1.0 - Ess_L;
	vec3 Favg = material.specularColor + ( 1.0 - material.specularColor ) * 0.047619;
	vec3 Fms = FssEss_V * FssEss_L * Favg / ( 1.0 - Ems_V * Ems_L * Favg * Favg + EPSILON );
	float compensationFactor = Ems_V * Ems_L;
	vec3 multiScatter = Fms * compensationFactor;
	return singleScatter + multiScatter;
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
	reflectedLight.directSpecular += irradiance * BRDF_GGX_Multiscatter( directLight.direction, geometryViewDir, geometryNormal, material );
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
}`,lights_fragment_begin:`
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
#endif`,lights_fragment_maps:`#if defined( RE_IndirectDiffuse )
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
#endif`,lights_fragment_end:`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,logdepthbuf_fragment:`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,logdepthbuf_pars_fragment:`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,logdepthbuf_pars_vertex:`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,logdepthbuf_vertex:`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,map_fragment:`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,map_pars_fragment:`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,map_particle_fragment:`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,map_particle_pars_fragment:`#if defined( USE_POINTS_UV )
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
#endif`,metalnessmap_fragment:`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,metalnessmap_pars_fragment:`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,morphinstance_vertex:`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,morphcolor_vertex:`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,morphnormal_vertex:`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,morphtarget_pars_vertex:`#ifdef USE_MORPHTARGETS
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
#endif`,morphtarget_vertex:`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,normal_fragment_begin:`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,normal_fragment_maps:`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,normal_pars_fragment:`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,normal_pars_vertex:`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,normal_vertex:`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,normalmap_pars_fragment:`#ifdef USE_NORMALMAP
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
#endif`,clearcoat_normal_fragment_begin:`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,clearcoat_normal_fragment_maps:`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,clearcoat_pars_fragment:`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,iridescence_pars_fragment:`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,opaque_fragment:`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,packing:`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,premultiplied_alpha_fragment:`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,project_vertex:`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,dithering_fragment:`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,dithering_pars_fragment:`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,roughnessmap_fragment:`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,roughnessmap_pars_fragment:`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,shadowmap_pars_fragment:`#if NUM_SPOT_LIGHT_COORDS > 0
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
		float depth = unpackRGBAToDepth( texture2D( depths, uv ) );
		#ifdef USE_REVERSED_DEPTH_BUFFER
			return step( depth, compare );
		#else
			return step( compare, depth );
		#endif
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow( sampler2D shadow, vec2 uv, float compare ) {
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		#ifdef USE_REVERSED_DEPTH_BUFFER
			float hard_shadow = step( distribution.x, compare );
		#else
			float hard_shadow = step( compare, distribution.x );
		#endif
		if ( hard_shadow != 1.0 ) {
			float distance = compare - distribution.x;
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
#endif`,shadowmap_pars_vertex:`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,shadowmap_vertex:`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,shadowmask_pars_fragment:`float getShadowMask() {
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
}`,skinbase_vertex:`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,skinning_pars_vertex:`#ifdef USE_SKINNING
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
#endif`,skinning_vertex:`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,skinnormal_vertex:`#ifdef USE_SKINNING
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
#endif`,specularmap_fragment:`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,specularmap_pars_fragment:`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,tonemapping_fragment:`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,tonemapping_pars_fragment:`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,transmission_fragment:`#ifdef USE_TRANSMISSION
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
#endif`,transmission_pars_fragment:`#ifdef USE_TRANSMISSION
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
#endif`,uv_pars_fragment:`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,uv_pars_vertex:`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,uv_vertex:`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,worldpos_vertex:`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,background_vert:`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,background_frag:`uniform sampler2D t2D;
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
}`,backgroundCube_vert:`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,backgroundCube_frag:`#ifdef ENVMAP_TYPE_CUBE
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
}`,cube_vert:`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,cube_frag:`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,depth_vert:`#include <common>
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
}`,depth_frag:`#if DEPTH_PACKING == 3200
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
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,distanceRGBA_vert:`#define DISTANCE
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
}`,distanceRGBA_frag:`#define DISTANCE
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
}`,equirect_vert:`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,equirect_frag:`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,linedashed_vert:`uniform float scale;
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
}`,linedashed_frag:`uniform vec3 diffuse;
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
}`,meshbasic_vert:`#include <common>
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
}`,meshbasic_frag:`uniform vec3 diffuse;
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
}`,meshlambert_vert:`#define LAMBERT
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
}`,meshlambert_frag:`#define LAMBERT
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
}`,meshmatcap_vert:`#define MATCAP
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
}`,meshmatcap_frag:`#define MATCAP
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
}`,meshnormal_vert:`#define NORMAL
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
}`,meshnormal_frag:`#define NORMAL
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
}`,meshphong_vert:`#define PHONG
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
}`,meshphong_frag:`#define PHONG
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
}`,meshphysical_vert:`#define STANDARD
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
}`,meshphysical_frag:`#define STANDARD
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
}`,meshtoon_vert:`#define TOON
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
}`,meshtoon_frag:`#define TOON
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
}`,points_vert:`uniform float size;
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
}`,points_frag:`uniform vec3 diffuse;
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
}`,shadow_vert:`#include <common>
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
}`,shadow_frag:`uniform vec3 color;
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
}`,sprite_vert:`uniform float rotation;
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
}`,sprite_frag:`uniform vec3 diffuse;
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
}`},le={common:{diffuse:{value:new ke(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ie},alphaMap:{value:null},alphaMapTransform:{value:new Ie},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ie}},envmap:{envMap:{value:null},envMapRotation:{value:new Ie},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ie}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ie}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ie},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ie},normalScale:{value:new re(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ie},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ie}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ie}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ie}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new ke(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new ke(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ie},alphaTest:{value:0},uvTransform:{value:new Ie}},sprite:{diffuse:{value:new ke(16777215)},opacity:{value:1},center:{value:new re(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ie},alphaMap:{value:null},alphaMapTransform:{value:new Ie},alphaTest:{value:0}}},ii={basic:{uniforms:vt([le.common,le.specularmap,le.envmap,le.aomap,le.lightmap,le.fog]),vertexShader:De.meshbasic_vert,fragmentShader:De.meshbasic_frag},lambert:{uniforms:vt([le.common,le.specularmap,le.envmap,le.aomap,le.lightmap,le.emissivemap,le.bumpmap,le.normalmap,le.displacementmap,le.fog,le.lights,{emissive:{value:new ke(0)}}]),vertexShader:De.meshlambert_vert,fragmentShader:De.meshlambert_frag},phong:{uniforms:vt([le.common,le.specularmap,le.envmap,le.aomap,le.lightmap,le.emissivemap,le.bumpmap,le.normalmap,le.displacementmap,le.fog,le.lights,{emissive:{value:new ke(0)},specular:{value:new ke(1118481)},shininess:{value:30}}]),vertexShader:De.meshphong_vert,fragmentShader:De.meshphong_frag},standard:{uniforms:vt([le.common,le.envmap,le.aomap,le.lightmap,le.emissivemap,le.bumpmap,le.normalmap,le.displacementmap,le.roughnessmap,le.metalnessmap,le.fog,le.lights,{emissive:{value:new ke(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:De.meshphysical_vert,fragmentShader:De.meshphysical_frag},toon:{uniforms:vt([le.common,le.aomap,le.lightmap,le.emissivemap,le.bumpmap,le.normalmap,le.displacementmap,le.gradientmap,le.fog,le.lights,{emissive:{value:new ke(0)}}]),vertexShader:De.meshtoon_vert,fragmentShader:De.meshtoon_frag},matcap:{uniforms:vt([le.common,le.bumpmap,le.normalmap,le.displacementmap,le.fog,{matcap:{value:null}}]),vertexShader:De.meshmatcap_vert,fragmentShader:De.meshmatcap_frag},points:{uniforms:vt([le.points,le.fog]),vertexShader:De.points_vert,fragmentShader:De.points_frag},dashed:{uniforms:vt([le.common,le.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:De.linedashed_vert,fragmentShader:De.linedashed_frag},depth:{uniforms:vt([le.common,le.displacementmap]),vertexShader:De.depth_vert,fragmentShader:De.depth_frag},normal:{uniforms:vt([le.common,le.bumpmap,le.normalmap,le.displacementmap,{opacity:{value:1}}]),vertexShader:De.meshnormal_vert,fragmentShader:De.meshnormal_frag},sprite:{uniforms:vt([le.sprite,le.fog]),vertexShader:De.sprite_vert,fragmentShader:De.sprite_frag},background:{uniforms:{uvTransform:{value:new Ie},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:De.background_vert,fragmentShader:De.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ie}},vertexShader:De.backgroundCube_vert,fragmentShader:De.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:De.cube_vert,fragmentShader:De.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:De.equirect_vert,fragmentShader:De.equirect_frag},distanceRGBA:{uniforms:vt([le.common,le.displacementmap,{referencePosition:{value:new C},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:De.distanceRGBA_vert,fragmentShader:De.distanceRGBA_frag},shadow:{uniforms:vt([le.lights,le.fog,{color:{value:new ke(0)},opacity:{value:1}}]),vertexShader:De.shadow_vert,fragmentShader:De.shadow_frag}};ii.physical={uniforms:vt([ii.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ie},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ie},clearcoatNormalScale:{value:new re(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ie},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ie},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ie},sheen:{value:0},sheenColor:{value:new ke(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ie},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ie},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ie},transmissionSamplerSize:{value:new re},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ie},attenuationDistance:{value:0},attenuationColor:{value:new ke(0)},specularColor:{value:new ke(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ie},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ie},anisotropyVector:{value:new re},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ie}}]),vertexShader:De.meshphysical_vert,fragmentShader:De.meshphysical_frag};var da={r:0,b:0,g:0},en=new $t,Su=new Le;function bu(r,e,t,i,n,s,a){let o=new ke(0),c,l,h=s===!0?0:1,u=null,d=0,p=null;function f(m){let g=m.isScene===!0?m.background:null;return g&&g.isTexture&&(g=(m.backgroundBlurriness>0?t:e).get(g)),g}function x(m,g){m.getRGB(da,nl(r)),i.buffers.color.setClear(da.r,da.g,da.b,g,a)}return{getClearColor:function(){return o},setClearColor:function(m,g=1){o.set(m),h=g,x(o,h)},getClearAlpha:function(){return h},setClearAlpha:function(m){h=m,x(o,h)},render:function(m){let g=!1,v=f(m);v===null?x(o,h):v&&v.isColor&&(x(v,1),g=!0);let _=r.xr.getEnvironmentBlendMode();_==="additive"?i.buffers.color.setClear(0,0,0,1,a):_==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,a),(r.autoClear||g)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),r.clear(r.autoClearColor,r.autoClearDepth,r.autoClearStencil))},addToRenderList:function(m,g){let v=f(g);v&&(v.isCubeTexture||v.mapping===xr)?(l===void 0&&(l=new ut(new Wi(1,1,1),new mt({name:"BackgroundCubeMaterial",uniforms:Qi(ii.backgroundCube.uniforms),vertexShader:ii.backgroundCube.vertexShader,fragmentShader:ii.backgroundCube.fragmentShader,side:Et,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),l.geometry.deleteAttribute("uv"),l.onBeforeRender=function(_,T,E){this.matrixWorld.copyPosition(E.matrixWorld)},Object.defineProperty(l.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(l)),en.copy(g.backgroundRotation),en.x*=-1,en.y*=-1,en.z*=-1,v.isCubeTexture&&v.isRenderTargetTexture===!1&&(en.y*=-1,en.z*=-1),l.material.uniforms.envMap.value=v,l.material.uniforms.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,l.material.uniforms.backgroundBlurriness.value=g.backgroundBlurriness,l.material.uniforms.backgroundIntensity.value=g.backgroundIntensity,l.material.uniforms.backgroundRotation.value.setFromMatrix4(Su.makeRotationFromEuler(en)),l.material.toneMapped=He.getTransfer(v.colorSpace)!==je,u===v&&d===v.version&&p===r.toneMapping||(l.material.needsUpdate=!0,u=v,d=v.version,p=r.toneMapping),l.layers.enableAll(),m.unshift(l,l.geometry,l.material,0,0,null)):v&&v.isTexture&&(c===void 0&&(c=new ut(new Ii(2,2),new mt({name:"BackgroundMaterial",uniforms:Qi(ii.background.uniforms),vertexShader:ii.background.vertexShader,fragmentShader:ii.background.fragmentShader,side:Cn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(c)),c.material.uniforms.t2D.value=v,c.material.uniforms.backgroundIntensity.value=g.backgroundIntensity,c.material.toneMapped=He.getTransfer(v.colorSpace)!==je,v.matrixAutoUpdate===!0&&v.updateMatrix(),c.material.uniforms.uvTransform.value.copy(v.matrix),u===v&&d===v.version&&p===r.toneMapping||(c.material.needsUpdate=!0,u=v,d=v.version,p=r.toneMapping),c.layers.enableAll(),m.unshift(c,c.geometry,c.material,0,0,null))},dispose:function(){l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}}}function Tu(r,e){let t=r.getParameter(r.MAX_VERTEX_ATTRIBS),i={},n=l(null),s=n,a=!1;function o(g){return r.bindVertexArray(g)}function c(g){return r.deleteVertexArray(g)}function l(g){let v=[],_=[],T=[];for(let E=0;E<t;E++)v[E]=0,_[E]=0,T[E]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:v,enabledAttributes:_,attributeDivisors:T,object:g,attributes:{},index:null}}function h(){let g=s.newAttributes;for(let v=0,_=g.length;v<_;v++)g[v]=0}function u(g){d(g,0)}function d(g,v){let _=s.newAttributes,T=s.enabledAttributes,E=s.attributeDivisors;_[g]=1,T[g]===0&&(r.enableVertexAttribArray(g),T[g]=1),E[g]!==v&&(r.vertexAttribDivisor(g,v),E[g]=v)}function p(){let g=s.newAttributes,v=s.enabledAttributes;for(let _=0,T=v.length;_<T;_++)v[_]!==g[_]&&(r.disableVertexAttribArray(_),v[_]=0)}function f(g,v,_,T,E,b,D){D===!0?r.vertexAttribIPointer(g,v,_,E,b):r.vertexAttribPointer(g,v,_,T,E,b)}function x(){m(),a=!0,s!==n&&(s=n,o(s.object))}function m(){n.geometry=null,n.program=null,n.wireframe=!1}return{setup:function(g,v,_,T,E){let b=!1,D=(function(z,L,B){let V=B.wireframe===!0,F=i[z.id];F===void 0&&(F={},i[z.id]=F);let Y=F[L.id];Y===void 0&&(Y={},F[L.id]=Y);let G=Y[V];return G===void 0&&(G=l(r.createVertexArray()),Y[V]=G),G})(T,_,v);s!==D&&(s=D,o(s.object)),b=(function(z,L,B,V){let F=s.attributes,Y=L.attributes,G=0,Z=B.getAttributes();for(let $ in Z)if(Z[$].location>=0){let ae=F[$],ne=Y[$];if(ne===void 0&&($==="instanceMatrix"&&z.instanceMatrix&&(ne=z.instanceMatrix),$==="instanceColor"&&z.instanceColor&&(ne=z.instanceColor)),ae===void 0||ae.attribute!==ne||ne&&ae.data!==ne.data)return!0;G++}return s.attributesNum!==G||s.index!==V})(g,T,_,E),b&&(function(z,L,B,V){let F={},Y=L.attributes,G=0,Z=B.getAttributes();for(let $ in Z)if(Z[$].location>=0){let ae=Y[$];ae===void 0&&($==="instanceMatrix"&&z.instanceMatrix&&(ae=z.instanceMatrix),$==="instanceColor"&&z.instanceColor&&(ae=z.instanceColor));let ne={};ne.attribute=ae,ae&&ae.data&&(ne.data=ae.data),F[$]=ne,G++}s.attributes=F,s.attributesNum=G,s.index=V})(g,T,_,E),E!==null&&e.update(E,r.ELEMENT_ARRAY_BUFFER),(b||a)&&(a=!1,(function(z,L,B,V){h();let F=V.attributes,Y=B.getAttributes(),G=L.defaultAttributeValues;for(let Z in Y){let $=Y[Z];if($.location>=0){let ae=F[Z];if(ae===void 0&&(Z==="instanceMatrix"&&z.instanceMatrix&&(ae=z.instanceMatrix),Z==="instanceColor"&&z.instanceColor&&(ae=z.instanceColor)),ae!==void 0){let ne=ae.normalized,he=ae.itemSize,ue=e.get(ae);if(ue===void 0)continue;let ve=ue.buffer,Se=ue.type,J=ue.bytesPerElement,K=Se===r.INT||Se===r.UNSIGNED_INT||ae.gpuType===ra;if(ae.isInterleavedBufferAttribute){let Q=ae.data,de=Q.stride,xe=ae.offset;if(Q.isInstancedInterleavedBuffer){for(let S=0;S<$.locationSize;S++)d($.location+S,Q.meshPerAttribute);z.isInstancedMesh!==!0&&V._maxInstanceCount===void 0&&(V._maxInstanceCount=Q.meshPerAttribute*Q.count)}else for(let S=0;S<$.locationSize;S++)u($.location+S);r.bindBuffer(r.ARRAY_BUFFER,ve);for(let S=0;S<$.locationSize;S++)f($.location+S,he/$.locationSize,Se,ne,de*J,(xe+he/$.locationSize*S)*J,K)}else{if(ae.isInstancedBufferAttribute){for(let Q=0;Q<$.locationSize;Q++)d($.location+Q,ae.meshPerAttribute);z.isInstancedMesh!==!0&&V._maxInstanceCount===void 0&&(V._maxInstanceCount=ae.meshPerAttribute*ae.count)}else for(let Q=0;Q<$.locationSize;Q++)u($.location+Q);r.bindBuffer(r.ARRAY_BUFFER,ve);for(let Q=0;Q<$.locationSize;Q++)f($.location+Q,he/$.locationSize,Se,ne,he*J,he/$.locationSize*Q*J,K)}}else if(G!==void 0){let ne=G[Z];if(ne!==void 0)switch(ne.length){case 2:r.vertexAttrib2fv($.location,ne);break;case 3:r.vertexAttrib3fv($.location,ne);break;case 4:r.vertexAttrib4fv($.location,ne);break;default:r.vertexAttrib1fv($.location,ne)}}}}p()})(g,v,_,T),E!==null&&r.bindBuffer(r.ELEMENT_ARRAY_BUFFER,e.get(E).buffer))},reset:x,resetDefaultState:m,dispose:function(){x();for(let g in i){let v=i[g];for(let _ in v){let T=v[_];for(let E in T)c(T[E].object),delete T[E];delete v[_]}delete i[g]}},releaseStatesOfGeometry:function(g){if(i[g.id]===void 0)return;let v=i[g.id];for(let _ in v){let T=v[_];for(let E in T)c(T[E].object),delete T[E];delete v[_]}delete i[g.id]},releaseStatesOfProgram:function(g){for(let v in i){let _=i[v];if(_[g.id]===void 0)continue;let T=_[g.id];for(let E in T)c(T[E].object),delete T[E];delete _[g.id]}},initAttributes:h,enableAttribute:u,disableUnusedAttributes:p}}function wu(r,e,t){let i;function n(s,a,o){o!==0&&(r.drawArraysInstanced(i,s,a,o),t.update(a,i,o))}this.setMode=function(s){i=s},this.render=function(s,a){r.drawArrays(i,s,a),t.update(a,i,1)},this.renderInstances=n,this.renderMultiDraw=function(s,a,o){if(o===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,s,0,a,0,o);let c=0;for(let l=0;l<o;l++)c+=a[l];t.update(c,i,1)},this.renderMultiDrawInstances=function(s,a,o,c){if(o===0)return;let l=e.get("WEBGL_multi_draw");if(l===null)for(let h=0;h<s.length;h++)n(s[h],a[h],c[h]);else{l.multiDrawArraysInstancedWEBGL(i,s,0,a,0,c,0,o);let h=0;for(let u=0;u<o;u++)h+=a[u]*c[u];t.update(h,i,1)}}}function Au(r,e,t,i){let n;function s(d){if(d==="highp"){if(r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.HIGH_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.HIGH_FLOAT).precision>0)return"highp";d="mediump"}return d==="mediump"&&r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.MEDIUM_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let a=t.precision!==void 0?t.precision:"highp",o=s(a);o!==a&&(be("WebGLRenderer:",a,"not supported, using",o,"instead."),a=o);let c=t.logarithmicDepthBuffer===!0,l=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),h=r.getParameter(r.MAX_TEXTURE_IMAGE_UNITS),u=r.getParameter(r.MAX_VERTEX_TEXTURE_IMAGE_UNITS);return{isWebGL2:!0,getMaxAnisotropy:function(){if(n!==void 0)return n;if(e.has("EXT_texture_filter_anisotropic")===!0){let d=e.get("EXT_texture_filter_anisotropic");n=r.getParameter(d.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n},getMaxPrecision:s,textureFormatReadable:function(d){return d===kt||i.convert(d)===r.getParameter(r.IMPLEMENTATION_COLOR_READ_FORMAT)},textureTypeReadable:function(d){let p=d===Ki&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(d!==gi&&i.convert(d)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_TYPE)&&d!==ti&&!p)},precision:a,logarithmicDepthBuffer:c,reversedDepthBuffer:l,maxTextures:h,maxVertexTextures:u,maxTextureSize:r.getParameter(r.MAX_TEXTURE_SIZE),maxCubemapSize:r.getParameter(r.MAX_CUBE_MAP_TEXTURE_SIZE),maxAttributes:r.getParameter(r.MAX_VERTEX_ATTRIBS),maxVertexUniforms:r.getParameter(r.MAX_VERTEX_UNIFORM_VECTORS),maxVaryings:r.getParameter(r.MAX_VARYING_VECTORS),maxFragmentUniforms:r.getParameter(r.MAX_FRAGMENT_UNIFORM_VECTORS),vertexTextures:u>0,maxSamples:r.getParameter(r.MAX_SAMPLES)}}function Eu(r){let e=this,t=null,i=0,n=!1,s=!1,a=new Yt,o=new Ie,c={value:null,needsUpdate:!1};function l(h,u,d,p){let f=h!==null?h.length:0,x=null;if(f!==0){if(x=c.value,p!==!0||x===null){let m=d+4*f,g=u.matrixWorldInverse;o.getNormalMatrix(g),(x===null||x.length<m)&&(x=new Float32Array(m));for(let v=0,_=d;v!==f;++v,_+=4)a.copy(h[v]).applyMatrix4(g,o),a.normal.toArray(x,_),x[_+3]=a.constant}c.value=x,c.needsUpdate=!0}return e.numPlanes=f,e.numIntersection=0,x}this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(h,u){let d=h.length!==0||u||i!==0||n;return n=u,i=h.length,d},this.beginShadows=function(){s=!0,l(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(h,u){t=l(h,u,0)},this.setState=function(h,u,d){let p=h.clippingPlanes,f=h.clipIntersection,x=h.clipShadows,m=r.get(h);if(!n||p===null||p.length===0||s&&!x)s?l(null):(function(){c.value!==t&&(c.value=t,c.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0})();else{let g=s?0:i,v=4*g,_=m.clippingState||null;c.value=_,_=l(p,u,v,d);for(let T=0;T!==v;++T)_[T]=t[T];m.clippingState=_,this.numIntersection=f?this.numPlanes:0,this.numPlanes+=g}}}function Cu(r){let e=new WeakMap;function t(n,s){return s===ta?n.mapping=In:s===ia&&(n.mapping=Yi),n}function i(n){let s=n.target;s.removeEventListener("dispose",i);let a=e.get(s);a!==void 0&&(e.delete(s),a.dispose())}return{get:function(n){if(n&&n.isTexture){let s=n.mapping;if(s===ta||s===ia){if(e.has(n))return t(e.get(n).texture,n.mapping);{let a=n.image;if(a&&a.height>0){let o=new hs(a.height);return o.fromEquirectangularTexture(r,n),e.set(n,o),n.addEventListener("dispose",i),t(o.texture,n.mapping)}return null}}}return n},dispose:function(){e=new WeakMap}}}var ih=[.125,.215,.35,.446,.526,.582],br=20,Tr=new An,nh=new ke,ol=null,ll=0,cl=0,hl=!1,Ru=new C,ma=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,i=.1,n=100,s={}){let{size:a=256,position:o=Ru}=s;ol=this._renderer.getRenderTarget(),ll=this._renderer.getActiveCubeFace(),cl=this._renderer.getActiveMipmapLevel(),hl=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);let c=this._allocateTargets();return c.depthBuffer=!0,this._sceneToCubeUV(e,i,n,c,o),t>0&&this._blur(c,0,0,t),this._applyPMREM(c),this._cleanup(c),c}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=ah(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=sh(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(ol,ll,cl),this._renderer.xr.enabled=hl,e.scissorTest=!1,Un(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===In||e.mapping===Yi?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),ol=this._renderer.getRenderTarget(),ll=this._renderer.getActiveCubeFace(),cl=this._renderer.getActiveMipmapLevel(),hl=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:Pt,minFilter:Pt,generateMipmaps:!1,type:Ki,format:kt,colorSpace:ui,depthBuffer:!1},n=rh(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=rh(e,t,i);let{_lodMax:s}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=(function(a){let o=[],c=[],l=[],h=a,u=a-4+1+ih.length;for(let d=0;d<u;d++){let p=Math.pow(2,h);o.push(p);let f=1/p;d>a-4?f=ih[d-a+4-1]:d===0&&(f=0),c.push(f);let x=1/(p-2),m=-x,g=1+x,v=[m,m,g,m,g,g,m,m,g,g,m,g],_=6,T=6,E=3,b=2,D=1,z=new Float32Array(E*T*_),L=new Float32Array(b*T*_),B=new Float32Array(D*T*_);for(let F=0;F<_;F++){let Y=F%3*2/3-1,G=F>2?0:-1,Z=[Y,G,0,Y+2/3,G,0,Y+2/3,G+1,0,Y,G,0,Y+2/3,G+1,0,Y,G+1,0];z.set(Z,E*T*F),L.set(v,b*T*F);let $=[F,F,F,F,F,F];B.set($,D*T*F)}let V=new $e;V.setAttribute("position",new pt(z,E)),V.setAttribute("uv",new pt(L,b)),V.setAttribute("faceIndex",new pt(B,D)),l.push(new ut(V,null)),h>4&&h--}return{lodMeshes:l,sizeLods:o,sigmas:c}})(s)),this._blurMaterial=(function(a,o,c){let l=new Float32Array(br),h=new C(0,1,0);return new mt({name:"SphericalGaussianBlur",defines:{n:br,CUBEUV_TEXEL_WIDTH:1/o,CUBEUV_TEXEL_HEIGHT:1/c,CUBEUV_MAX_MIP:`${a}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:l},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:h}},vertexShader:fa(),fragmentShader:`

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
		`,blending:mi,depthTest:!1,depthWrite:!1})})(s,e,t),this._ggxMaterial=(function(a,o,c){return new mt({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:256,CUBEUV_TEXEL_WIDTH:1/o,CUBEUV_TEXEL_HEIGHT:1/c,CUBEUV_MAX_MIP:`${a}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:fa(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 3.2: Transform view direction to hemisphere configuration
				vec3 Vh = normalize(vec3(alpha * V.x, alpha * V.y, V.z));

				// Section 4.1: Orthonormal basis
				float lensq = Vh.x * Vh.x + Vh.y * Vh.y;
				vec3 T1 = lensq > 0.0 ? vec3(-Vh.y, Vh.x, 0.0) / sqrt(lensq) : vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(Vh, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + Vh.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * Vh;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:mi,depthTest:!1,depthWrite:!1})})(s,e,t)}return n}_compileMaterial(e){let t=new ut(new $e,e);this._renderer.compile(t,Tr)}_sceneToCubeUV(e,t,i,n,s){let a=new yt(90,1,t,i),o=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],l=this._renderer,h=l.autoClear,u=l.toneMapping;l.getClearColor(nh),l.toneMapping=Vt,l.autoClear=!1,l.state.buffers.depth.getReversed()&&(l.setRenderTarget(n),l.clearDepth(),l.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new ut(new Wi,new Qn({name:"PMREM.Background",side:Et,depthWrite:!1,depthTest:!1})));let d=this._backgroundBox,p=d.material,f=!1,x=e.background;x?x.isColor&&(p.color.copy(x),e.background=null,f=!0):(p.color.copy(nh),f=!0);for(let m=0;m<6;m++){let g=m%3;g===0?(a.up.set(0,o[m],0),a.position.set(s.x,s.y,s.z),a.lookAt(s.x+c[m],s.y,s.z)):g===1?(a.up.set(0,0,o[m]),a.position.set(s.x,s.y,s.z),a.lookAt(s.x,s.y+c[m],s.z)):(a.up.set(0,o[m],0),a.position.set(s.x,s.y,s.z),a.lookAt(s.x,s.y,s.z+c[m]));let v=this._cubeSize;Un(n,g*v,m>2?v:0,v,v),l.setRenderTarget(n),f&&l.render(d,a),l.render(e,a)}l.toneMapping=u,l.autoClear=h,e.background=x}_textureToCubeUV(e,t){let i=this._renderer,n=e.mapping===In||e.mapping===Yi;n?(this._cubemapMaterial===null&&(this._cubemapMaterial=ah()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=sh());let s=n?this._cubemapMaterial:this._equirectMaterial,a=this._lodMeshes[0];a.material=s,s.uniforms.envMap.value=e;let o=this._cubeSize;Un(t,0,0,3*o,2*o),i.setRenderTarget(t),i.render(a,Tr)}_applyPMREM(e){let t=this._renderer,i=t.autoClear;t.autoClear=!1;let n=this._lodMeshes.length;for(let s=1;s<n;s++)this._applyGGXFilter(e,s-1,s);t.autoClear=i}_applyGGXFilter(e,t,i){let n=this._renderer,s=this._pingPongRenderTarget,a=this._ggxMaterial,o=this._lodMeshes[i];o.material=a;let c=a.uniforms,l=i/(this._lodMeshes.length-1),h=t/(this._lodMeshes.length-1),u=Math.sqrt(l*l-h*h)*(.05+.95*l),{_lodMax:d}=this,p=this._sizeLods[i],f=3*p*(i>d-4?i-d+4:0),x=4*(this._cubeSize-p);c.envMap.value=e.texture,c.roughness.value=u,c.mipInt.value=d-t,Un(s,f,x,3*p,2*p),n.setRenderTarget(s),n.render(o,Tr),c.envMap.value=s.texture,c.roughness.value=0,c.mipInt.value=d-i,Un(e,f,x,3*p,2*p),n.setRenderTarget(e),n.render(o,Tr)}_blur(e,t,i,n,s){let a=this._pingPongRenderTarget;this._halfBlur(e,a,t,i,n,"latitudinal",s),this._halfBlur(a,e,i,i,n,"longitudinal",s)}_halfBlur(e,t,i,n,s,a,o){let c=this._renderer,l=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&Oe("blur direction must be either latitudinal or longitudinal!");let h=this._lodMeshes[n];h.material=l;let u=l.uniforms,d=this._sizeLods[i]-1,p=isFinite(s)?Math.PI/(2*d):2*Math.PI/39,f=s/p,x=isFinite(s)?1+Math.floor(3*f):br;x>br&&be(`sigmaRadians, ${s}, is too large and will clip, as it requested ${x} samples when the maximum is set to 20`);let m=[],g=0;for(let T=0;T<br;++T){let E=T/f,b=Math.exp(-E*E/2);m.push(b),T===0?g+=b:T<x&&(g+=2*b)}for(let T=0;T<m.length;T++)m[T]=m[T]/g;u.envMap.value=e.texture,u.samples.value=x,u.weights.value=m,u.latitudinal.value=a==="latitudinal",o&&(u.poleAxis.value=o);let{_lodMax:v}=this;u.dTheta.value=p,u.mipInt.value=v-i;let _=this._sizeLods[n];Un(t,3*_*(n>v-4?n-v+4:0),4*(this._cubeSize-_),3*_,2*_),c.setRenderTarget(t),c.render(h,Tr)}};function rh(r,e,t){let i=new Kt(r,e,t);return i.texture.mapping=xr,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Un(r,e,t,i,n){r.viewport.set(e,t,i,n),r.scissor.set(e,t,i,n)}function sh(){return new mt({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:fa(),fragmentShader:`

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
		`,blending:mi,depthTest:!1,depthWrite:!1})}function ah(){return new mt({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:fa(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:mi,depthTest:!1,depthWrite:!1})}function fa(){return`

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
	`}function Iu(r){let e=new WeakMap,t=null;function i(n){let s=n.target;s.removeEventListener("dispose",i);let a=e.get(s);a!==void 0&&(e.delete(s),a.dispose())}return{get:function(n){if(n&&n.isTexture){let s=n.mapping,a=s===ta||s===ia,o=s===In||s===Yi;if(a||o){let c=e.get(n),l=c!==void 0?c.texture.pmremVersion:0;if(n.isRenderTargetTexture&&n.pmremVersion!==l)return t===null&&(t=new ma(r)),c=a?t.fromEquirectangular(n,c):t.fromCubemap(n,c),c.texture.pmremVersion=n.pmremVersion,e.set(n,c),c.texture;if(c!==void 0)return c.texture;{let h=n.image;return a&&h&&h.height>0||o&&h&&(function(u){let d=0,p=6;for(let f=0;f<p;f++)u[f]!==void 0&&d++;return d===p})(h)?(t===null&&(t=new ma(r)),c=a?t.fromEquirectangular(n):t.fromCubemap(n),c.texture.pmremVersion=n.pmremVersion,e.set(n,c),n.addEventListener("dispose",i),c.texture):null}}}return n},dispose:function(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}}}function Pu(r){let e={};function t(i){if(e[i]!==void 0)return e[i];let n=r.getExtension(i);return e[i]=n,n}return{has:function(i){return t(i)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(i){let n=t(i);return n===null&&yn("WebGLRenderer: "+i+" extension not supported."),n}}}function Lu(r,e,t,i){let n={},s=new WeakMap;function a(c){let l=c.target;l.index!==null&&e.remove(l.index);for(let u in l.attributes)e.remove(l.attributes[u]);l.removeEventListener("dispose",a),delete n[l.id];let h=s.get(l);h&&(e.remove(h),s.delete(l)),i.releaseStatesOfGeometry(l),l.isInstancedBufferGeometry===!0&&delete l._maxInstanceCount,t.memory.geometries--}function o(c){let l=[],h=c.index,u=c.attributes.position,d=0;if(h!==null){let x=h.array;d=h.version;for(let m=0,g=x.length;m<g;m+=3){let v=x[m+0],_=x[m+1],T=x[m+2];l.push(v,_,_,T,T,v)}}else{if(u===void 0)return;{let x=u.array;d=u.version;for(let m=0,g=x.length/3-1;m<g;m+=3){let v=m+0,_=m+1,T=m+2;l.push(v,_,_,T,T,v)}}}let p=new(tl(l)?tr:er)(l,1);p.version=d;let f=s.get(c);f&&e.remove(f),s.set(c,p)}return{get:function(c,l){return n[l.id]===!0||(l.addEventListener("dispose",a),n[l.id]=!0,t.memory.geometries++),l},update:function(c){let l=c.attributes;for(let h in l)e.update(l[h],r.ARRAY_BUFFER)},getWireframeAttribute:function(c){let l=s.get(c);if(l){let h=c.index;h!==null&&l.version<h.version&&o(c)}else o(c);return s.get(c)}}}function Du(r,e,t){let i,n,s;function a(o,c,l){l!==0&&(r.drawElementsInstanced(i,c,n,o*s,l),t.update(c,i,l))}this.setMode=function(o){i=o},this.setIndex=function(o){n=o.type,s=o.bytesPerElement},this.render=function(o,c){r.drawElements(i,c,n,o*s),t.update(c,i,1)},this.renderInstances=a,this.renderMultiDraw=function(o,c,l){if(l===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,c,0,n,o,0,l);let h=0;for(let u=0;u<l;u++)h+=c[u];t.update(h,i,1)},this.renderMultiDrawInstances=function(o,c,l,h){if(l===0)return;let u=e.get("WEBGL_multi_draw");if(u===null)for(let d=0;d<o.length;d++)a(o[d]/s,c[d],h[d]);else{u.multiDrawElementsInstancedWEBGL(i,c,0,n,o,0,h,0,l);let d=0;for(let p=0;p<l;p++)d+=c[p]*h[p];t.update(d,i,1)}}}function Uu(r){let e={frame:0,calls:0,triangles:0,points:0,lines:0};return{memory:{geometries:0,textures:0},render:e,programs:null,autoReset:!0,reset:function(){e.calls=0,e.triangles=0,e.points=0,e.lines=0},update:function(t,i,n){switch(e.calls++,i){case r.TRIANGLES:e.triangles+=n*(t/3);break;case r.LINES:e.lines+=n*(t/2);break;case r.LINE_STRIP:e.lines+=n*(t-1);break;case r.LINE_LOOP:e.lines+=n*t;break;case r.POINTS:e.points+=n*t;break;default:Oe("WebGLInfo: Unknown draw mode:",i)}}}}function Nu(r,e,t){let i=new WeakMap,n=new Ke;return{update:function(s,a,o){let c=s.morphTargetInfluences,l=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,h=l!==void 0?l.length:0,u=i.get(a);if(u===void 0||u.count!==h){let z=function(){b.dispose(),i.delete(a),a.removeEventListener("dispose",z)};u!==void 0&&u.texture.dispose();let d=a.morphAttributes.position!==void 0,p=a.morphAttributes.normal!==void 0,f=a.morphAttributes.color!==void 0,x=a.morphAttributes.position||[],m=a.morphAttributes.normal||[],g=a.morphAttributes.color||[],v=0;d===!0&&(v=1),p===!0&&(v=2),f===!0&&(v=3);let _=a.attributes.position.count*v,T=1;_>e.maxTextureSize&&(T=Math.ceil(_/e.maxTextureSize),_=e.maxTextureSize);let E=new Float32Array(_*T*4*h),b=new Kn(E,_,T,h);b.type=ti,b.needsUpdate=!0;let D=4*v;for(let L=0;L<h;L++){let B=x[L],V=m[L],F=g[L],Y=_*T*4*L;for(let G=0;G<B.count;G++){let Z=G*D;d===!0&&(n.fromBufferAttribute(B,G),E[Y+Z+0]=n.x,E[Y+Z+1]=n.y,E[Y+Z+2]=n.z,E[Y+Z+3]=0),p===!0&&(n.fromBufferAttribute(V,G),E[Y+Z+4]=n.x,E[Y+Z+5]=n.y,E[Y+Z+6]=n.z,E[Y+Z+7]=0),f===!0&&(n.fromBufferAttribute(F,G),E[Y+Z+8]=n.x,E[Y+Z+9]=n.y,E[Y+Z+10]=n.z,E[Y+Z+11]=F.itemSize===4?n.w:1)}}u={count:h,texture:b,size:new re(_,T)},i.set(a,u),a.addEventListener("dispose",z)}if(s.isInstancedMesh===!0&&s.morphTexture!==null)o.getUniforms().setValue(r,"morphTexture",s.morphTexture,t);else{let d=0;for(let f=0;f<c.length;f++)d+=c[f];let p=a.morphTargetsRelative?1:1-d;o.getUniforms().setValue(r,"morphTargetBaseInfluence",p),o.getUniforms().setValue(r,"morphTargetInfluences",c)}o.getUniforms().setValue(r,"morphTargetsTexture",u.texture,t),o.getUniforms().setValue(r,"morphTargetsTextureSize",u.size)}}}function Fu(r,e,t,i){let n=new WeakMap;function s(a){let o=a.target;o.removeEventListener("dispose",s),t.remove(o.instanceMatrix),o.instanceColor!==null&&t.remove(o.instanceColor)}return{update:function(a){let o=i.render.frame,c=a.geometry,l=e.get(a,c);if(n.get(l)!==o&&(e.update(l),n.set(l,o)),a.isInstancedMesh&&(a.hasEventListener("dispose",s)===!1&&a.addEventListener("dispose",s),n.get(a)!==o&&(t.update(a.instanceMatrix,r.ARRAY_BUFFER),a.instanceColor!==null&&t.update(a.instanceColor,r.ARRAY_BUFFER),n.set(a,o))),a.isSkinnedMesh){let h=a.skeleton;n.get(h)!==o&&(h.update(),n.set(h,o))}return l},dispose:function(){n=new WeakMap}}}var wh=new Mt,oh=new rr(1,1),Ah=new Kn,Eh=new ls,Ch=new ir,lh=[],ch=[],hh=new Float32Array(16),uh=new Float32Array(9),dh=new Float32Array(4);function Fn(r,e,t){let i=r[0];if(i<=0||i>0)return r;let n=e*t,s=lh[n];if(s===void 0&&(s=new Float32Array(n),lh[n]=s),e!==0){i.toArray(s,0);for(let a=1,o=0;a!==e;++a)o+=t,r[a].toArray(s,o)}return s}function lt(r,e){if(r.length!==e.length)return!1;for(let t=0,i=r.length;t<i;t++)if(r[t]!==e[t])return!1;return!0}function ct(r,e){for(let t=0,i=e.length;t<i;t++)r[t]=e[t]}function va(r,e){let t=ch[e];t===void 0&&(t=new Int32Array(e),ch[e]=t);for(let i=0;i!==e;++i)t[i]=r.allocateTextureUnit();return t}function Ou(r,e){let t=this.cache;t[0]!==e&&(r.uniform1f(this.addr,e),t[0]=e)}function Bu(r,e){let t=this.cache;if(e.x!==void 0)t[0]===e.x&&t[1]===e.y||(r.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(lt(t,e))return;r.uniform2fv(this.addr,e),ct(t,e)}}function zu(r,e){let t=this.cache;if(e.x!==void 0)t[0]===e.x&&t[1]===e.y&&t[2]===e.z||(r.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)t[0]===e.r&&t[1]===e.g&&t[2]===e.b||(r.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(lt(t,e))return;r.uniform3fv(this.addr,e),ct(t,e)}}function Gu(r,e){let t=this.cache;if(e.x!==void 0)t[0]===e.x&&t[1]===e.y&&t[2]===e.z&&t[3]===e.w||(r.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(lt(t,e))return;r.uniform4fv(this.addr,e),ct(t,e)}}function Vu(r,e){let t=this.cache,i=e.elements;if(i===void 0){if(lt(t,e))return;r.uniformMatrix2fv(this.addr,!1,e),ct(t,e)}else{if(lt(t,i))return;dh.set(i),r.uniformMatrix2fv(this.addr,!1,dh),ct(t,i)}}function ku(r,e){let t=this.cache,i=e.elements;if(i===void 0){if(lt(t,e))return;r.uniformMatrix3fv(this.addr,!1,e),ct(t,e)}else{if(lt(t,i))return;uh.set(i),r.uniformMatrix3fv(this.addr,!1,uh),ct(t,i)}}function Hu(r,e){let t=this.cache,i=e.elements;if(i===void 0){if(lt(t,e))return;r.uniformMatrix4fv(this.addr,!1,e),ct(t,e)}else{if(lt(t,i))return;hh.set(i),r.uniformMatrix4fv(this.addr,!1,hh),ct(t,i)}}function Wu(r,e){let t=this.cache;t[0]!==e&&(r.uniform1i(this.addr,e),t[0]=e)}function Xu(r,e){let t=this.cache;if(e.x!==void 0)t[0]===e.x&&t[1]===e.y||(r.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(lt(t,e))return;r.uniform2iv(this.addr,e),ct(t,e)}}function ju(r,e){let t=this.cache;if(e.x!==void 0)t[0]===e.x&&t[1]===e.y&&t[2]===e.z||(r.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(lt(t,e))return;r.uniform3iv(this.addr,e),ct(t,e)}}function qu(r,e){let t=this.cache;if(e.x!==void 0)t[0]===e.x&&t[1]===e.y&&t[2]===e.z&&t[3]===e.w||(r.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(lt(t,e))return;r.uniform4iv(this.addr,e),ct(t,e)}}function Yu(r,e){let t=this.cache;t[0]!==e&&(r.uniform1ui(this.addr,e),t[0]=e)}function Zu(r,e){let t=this.cache;if(e.x!==void 0)t[0]===e.x&&t[1]===e.y||(r.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(lt(t,e))return;r.uniform2uiv(this.addr,e),ct(t,e)}}function Ju(r,e){let t=this.cache;if(e.x!==void 0)t[0]===e.x&&t[1]===e.y&&t[2]===e.z||(r.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(lt(t,e))return;r.uniform3uiv(this.addr,e),ct(t,e)}}function Ku(r,e){let t=this.cache;if(e.x!==void 0)t[0]===e.x&&t[1]===e.y&&t[2]===e.z&&t[3]===e.w||(r.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(lt(t,e))return;r.uniform4uiv(this.addr,e),ct(t,e)}}function $u(r,e,t){let i=this.cache,n=t.allocateTextureUnit(),s;i[0]!==n&&(r.uniform1i(this.addr,n),i[0]=n),this.type===r.SAMPLER_2D_SHADOW?(oh.compareFunction=Qo,s=oh):s=wh,t.setTexture2D(e||s,n)}function Qu(r,e,t){let i=this.cache,n=t.allocateTextureUnit();i[0]!==n&&(r.uniform1i(this.addr,n),i[0]=n),t.setTexture3D(e||Eh,n)}function ed(r,e,t){let i=this.cache,n=t.allocateTextureUnit();i[0]!==n&&(r.uniform1i(this.addr,n),i[0]=n),t.setTextureCube(e||Ch,n)}function td(r,e,t){let i=this.cache,n=t.allocateTextureUnit();i[0]!==n&&(r.uniform1i(this.addr,n),i[0]=n),t.setTexture2DArray(e||Ah,n)}function id(r,e){r.uniform1fv(this.addr,e)}function nd(r,e){let t=Fn(e,this.size,2);r.uniform2fv(this.addr,t)}function rd(r,e){let t=Fn(e,this.size,3);r.uniform3fv(this.addr,t)}function sd(r,e){let t=Fn(e,this.size,4);r.uniform4fv(this.addr,t)}function ad(r,e){let t=Fn(e,this.size,4);r.uniformMatrix2fv(this.addr,!1,t)}function od(r,e){let t=Fn(e,this.size,9);r.uniformMatrix3fv(this.addr,!1,t)}function ld(r,e){let t=Fn(e,this.size,16);r.uniformMatrix4fv(this.addr,!1,t)}function cd(r,e){r.uniform1iv(this.addr,e)}function hd(r,e){r.uniform2iv(this.addr,e)}function ud(r,e){r.uniform3iv(this.addr,e)}function dd(r,e){r.uniform4iv(this.addr,e)}function pd(r,e){r.uniform1uiv(this.addr,e)}function md(r,e){r.uniform2uiv(this.addr,e)}function fd(r,e){r.uniform3uiv(this.addr,e)}function gd(r,e){r.uniform4uiv(this.addr,e)}function vd(r,e,t){let i=this.cache,n=e.length,s=va(t,n);lt(i,s)||(r.uniform1iv(this.addr,s),ct(i,s));for(let a=0;a!==n;++a)t.setTexture2D(e[a]||wh,s[a])}function _d(r,e,t){let i=this.cache,n=e.length,s=va(t,n);lt(i,s)||(r.uniform1iv(this.addr,s),ct(i,s));for(let a=0;a!==n;++a)t.setTexture3D(e[a]||Eh,s[a])}function xd(r,e,t){let i=this.cache,n=e.length,s=va(t,n);lt(i,s)||(r.uniform1iv(this.addr,s),ct(i,s));for(let a=0;a!==n;++a)t.setTextureCube(e[a]||Ch,s[a])}function yd(r,e,t){let i=this.cache,n=e.length,s=va(t,n);lt(i,s)||(r.uniform1iv(this.addr,s),ct(i,s));for(let a=0;a!==n;++a)t.setTexture2DArray(e[a]||Ah,s[a])}var dl=class{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=(function(n){switch(n){case 5126:return Ou;case 35664:return Bu;case 35665:return zu;case 35666:return Gu;case 35674:return Vu;case 35675:return ku;case 35676:return Hu;case 5124:case 35670:return Wu;case 35667:case 35671:return Xu;case 35668:case 35672:return ju;case 35669:case 35673:return qu;case 5125:return Yu;case 36294:return Zu;case 36295:return Ju;case 36296:return Ku;case 35678:case 36198:case 36298:case 36306:case 35682:return $u;case 35679:case 36299:case 36307:return Qu;case 35680:case 36300:case 36308:case 36293:return ed;case 36289:case 36303:case 36311:case 36292:return td}})(t.type)}},pl=class{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=(function(n){switch(n){case 5126:return id;case 35664:return nd;case 35665:return rd;case 35666:return sd;case 35674:return ad;case 35675:return od;case 35676:return ld;case 5124:case 35670:return cd;case 35667:case 35671:return hd;case 35668:case 35672:return ud;case 35669:case 35673:return dd;case 5125:return pd;case 36294:return md;case 36295:return fd;case 36296:return gd;case 35678:case 36198:case 36298:case 36306:case 35682:return vd;case 35679:case 36299:case 36307:return _d;case 35680:case 36300:case 36308:case 36293:return xd;case 36289:case 36303:case 36311:case 36292:return yd}})(t.type)}},ml=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){let n=this.seq;for(let s=0,a=n.length;s!==a;++s){let o=n[s];o.setValue(e,t[o.id],i)}}},ul=/(\w+)(\])?(\[|\.)?/g;function ph(r,e){r.seq.push(e),r.map[e.id]=e}function Md(r,e,t){let i=r.name,n=i.length;for(ul.lastIndex=0;;){let s=ul.exec(i),a=ul.lastIndex,o=s[1],c=s[2]==="]",l=s[3];if(c&&(o|=0),l===void 0||l==="["&&a+2===n){ph(t,l===void 0?new dl(o,r,e):new pl(o,r,e));break}{let h=t.map[o];h===void 0&&(h=new ml(o),ph(t,h)),t=h}}}var Nn=class{constructor(e,t){this.seq=[],this.map={};let i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let n=0;n<i;++n){let s=e.getActiveUniform(t,n);Md(s,e.getUniformLocation(t,s.name),this)}}setValue(e,t,i,n){let s=this.map[t];s!==void 0&&s.setValue(e,i,n)}setOptional(e,t,i){let n=t[i];n!==void 0&&this.setValue(e,i,n)}static upload(e,t,i,n){for(let s=0,a=t.length;s!==a;++s){let o=t[s],c=i[o.id];c.needsUpdate!==!1&&o.setValue(e,c.value,n)}}static seqWithValue(e,t){let i=[];for(let n=0,s=e.length;n!==s;++n){let a=e[n];a.id in t&&i.push(a)}return i}};function mh(r,e,t){let i=r.createShader(e);return r.shaderSource(i,t),r.compileShader(i),i}var Sd=0,fh=new Ie;function gh(r,e,t){let i=r.getShaderParameter(e,r.COMPILE_STATUS),n=(r.getShaderInfoLog(e)||"").trim();if(i&&n==="")return"";let s=/ERROR: 0:(\d+)/.exec(n);if(s){let a=parseInt(s[1]);return t.toUpperCase()+`

`+n+`

`+(function(o,c){let l=o.split(`
`),h=[],u=Math.max(c-6,0),d=Math.min(c+6,l.length);for(let p=u;p<d;p++){let f=p+1;h.push(`${f===c?">":" "} ${f}: ${l[p]}`)}return h.join(`
`)})(r.getShaderSource(e),a)}return n}function bd(r,e){let t=(function(i){He._getMatrix(fh,He.workingColorSpace,i);let n=`mat3( ${fh.elements.map(s=>s.toFixed(4))} )`;switch(He.getTransfer(i)){case Yn:return[n,"LinearTransferOETF"];case je:return[n,"sRGBTransferOETF"];default:return be("WebGLProgram: Unsupported color space: ",i),[n,"LinearTransferOETF"]}})(e);return[`vec4 ${r}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function Td(r,e){let t;switch(e){case Cc:t="Linear";break;case Rc:t="Reinhard";break;case Ic:t="Cineon";break;case Pc:t="ACESFilmic";break;case Dc:t="AgX";break;case Uc:t="Neutral";break;case Lc:t="Custom";break;default:be("WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+r+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}var pa=new C;function wd(){return He.getLuminanceCoefficients(pa),["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${pa.x.toFixed(4)}, ${pa.y.toFixed(4)}, ${pa.z.toFixed(4)} );`,"	return dot( weights, rgb );","}"].join(`
`)}function wr(r){return r!==""}function vh(r,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return r.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function _h(r,e){return r.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var Ad=/^[ \t]*#include +<([\w\d./]+)>/gm;function fl(r){return r.replace(Ad,Cd)}var Ed=new Map;function Cd(r,e){let t=De[e];if(t===void 0){let i=Ed.get(e);if(i===void 0)throw new Error("Can not resolve #include <"+e+">");t=De[i],be('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i)}return fl(t)}var Rd=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function xh(r){return r.replace(Rd,Id)}function Id(r,e,t,i){let n="";for(let s=parseInt(e);s<parseInt(t);s++)n+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return n}function yh(r){let e=`precision ${r.precision} float;
	precision ${r.precision} int;
	precision ${r.precision} sampler2D;
	precision ${r.precision} samplerCube;
	precision ${r.precision} sampler3D;
	precision ${r.precision} sampler2DArray;
	precision ${r.precision} sampler2DShadow;
	precision ${r.precision} samplerCubeShadow;
	precision ${r.precision} sampler2DArrayShadow;
	precision ${r.precision} isampler2D;
	precision ${r.precision} isampler3D;
	precision ${r.precision} isamplerCube;
	precision ${r.precision} isampler2DArray;
	precision ${r.precision} usampler2D;
	precision ${r.precision} usampler3D;
	precision ${r.precision} usamplerCube;
	precision ${r.precision} usampler2DArray;
	`;return r.precision==="highp"?e+=`
#define HIGH_PRECISION`:r.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:r.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function Pd(r,e,t,i){let n=r.getContext(),s=t.defines,a=t.vertexShader,o=t.fragmentShader,c=(function(V){let F="SHADOWMAP_TYPE_BASIC";return V.shadowMapType===uo?F="SHADOWMAP_TYPE_PCF":V.shadowMapType===rc?F="SHADOWMAP_TYPE_PCF_SOFT":V.shadowMapType===Qt&&(F="SHADOWMAP_TYPE_VSM"),F})(t),l=(function(V){let F="ENVMAP_TYPE_CUBE";if(V.envMap)switch(V.envMapMode){case In:case Yi:F="ENVMAP_TYPE_CUBE";break;case xr:F="ENVMAP_TYPE_CUBE_UV"}return F})(t),h=(function(V){let F="ENVMAP_MODE_REFLECTION";return V.envMap&&V.envMapMode===Yi&&(F="ENVMAP_MODE_REFRACTION"),F})(t),u=(function(V){let F="ENVMAP_BLENDING_NONE";if(V.envMap)switch(V.combine){case wc:F="ENVMAP_BLENDING_MULTIPLY";break;case Ac:F="ENVMAP_BLENDING_MIX";break;case Ec:F="ENVMAP_BLENDING_ADD"}return F})(t),d=(function(V){let F=V.envMapCubeUVHeight;if(F===null)return null;let Y=Math.log2(F)-2,G=1/F;return{texelWidth:1/(3*Math.max(Math.pow(2,Y),112)),texelHeight:G,maxMip:Y}})(t),p=(function(V){return[V.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",V.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(wr).join(`
`)})(t),f=(function(V){let F=[];for(let Y in V){let G=V[Y];G!==!1&&F.push("#define "+Y+" "+G)}return F.join(`
`)})(s),x=n.createProgram(),m,g,v=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,f].filter(wr).join(`
`),m.length>0&&(m+=`
`),g=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,f].filter(wr).join(`
`),g.length>0&&(g+=`
`)):(m=[yh(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,f,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(wr).join(`
`),g=[yh(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,f,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+l:"",t.envMap?"#define "+h:"",t.envMap?"#define "+u:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Vt?"#define TONE_MAPPING":"",t.toneMapping!==Vt?De.tonemapping_pars_fragment:"",t.toneMapping!==Vt?Td("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",De.colorspace_pars_fragment,bd("linearToOutputTexel",t.outputColorSpace),wd(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(wr).join(`
`)),a=fl(a),a=vh(a,t),a=_h(a,t),o=fl(o),o=vh(o,t),o=_h(o,t),a=xh(a),o=xh(o),t.isRawShaderMaterial!==!0&&(v=`#version 300 es
`,m=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,g=["#define varying in",t.glslVersion===el?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===el?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+g);let _=v+m+a,T=v+g+o,E=mh(n,n.VERTEX_SHADER,_),b=mh(n,n.FRAGMENT_SHADER,T);function D(V){if(r.debug.checkShaderErrors){let F=n.getProgramInfoLog(x)||"",Y=n.getShaderInfoLog(E)||"",G=n.getShaderInfoLog(b)||"",Z=F.trim(),$=Y.trim(),ae=G.trim(),ne=!0,he=!0;if(n.getProgramParameter(x,n.LINK_STATUS)===!1)if(ne=!1,typeof r.debug.onShaderError=="function")r.debug.onShaderError(n,x,E,b);else{let ue=gh(n,E,"vertex"),ve=gh(n,b,"fragment");Oe("THREE.WebGLProgram: Shader Error "+n.getError()+" - VALIDATE_STATUS "+n.getProgramParameter(x,n.VALIDATE_STATUS)+`

Material Name: `+V.name+`
Material Type: `+V.type+`

Program Info Log: `+Z+`
`+ue+`
`+ve)}else Z!==""?be("WebGLProgram: Program Info Log:",Z):$!==""&&ae!==""||(he=!1);he&&(V.diagnostics={runnable:ne,programLog:Z,vertexShader:{log:$,prefix:m},fragmentShader:{log:ae,prefix:g}})}n.deleteShader(E),n.deleteShader(b),z=new Nn(n,x),L=(function(F,Y){let G={},Z=F.getProgramParameter(Y,F.ACTIVE_ATTRIBUTES);for(let $=0;$<Z;$++){let ae=F.getActiveAttrib(Y,$),ne=ae.name,he=1;ae.type===F.FLOAT_MAT2&&(he=2),ae.type===F.FLOAT_MAT3&&(he=3),ae.type===F.FLOAT_MAT4&&(he=4),G[ne]={type:ae.type,location:F.getAttribLocation(Y,ne),locationSize:he}}return G})(n,x)}let z,L;n.attachShader(x,E),n.attachShader(x,b),t.index0AttributeName!==void 0?n.bindAttribLocation(x,0,t.index0AttributeName):t.morphTargets===!0&&n.bindAttribLocation(x,0,"position"),n.linkProgram(x),this.getUniforms=function(){return z===void 0&&D(this),z},this.getAttributes=function(){return L===void 0&&D(this),L};let B=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return B===!1&&(B=n.getProgramParameter(x,37297)),B},this.destroy=function(){i.releaseStatesOfProgram(this),n.deleteProgram(x),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=Sd++,this.cacheKey=e,this.usedTimes=1,this.program=x,this.vertexShader=E,this.fragmentShader=b,this}var Ld=0,gl=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){let t=e.vertexShader,i=e.fragmentShader,n=this._getShaderStage(t),s=this._getShaderStage(i),a=this._getShaderCacheForMaterial(e);return a.has(n)===!1&&(a.add(n),n.usedTimes++),a.has(s)===!1&&(a.add(s),s.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){let t=this.shaderCache,i=t.get(e);return i===void 0&&(i=new vl(e),t.set(e,i)),i}},vl=class{constructor(e){this.id=Ld++,this.code=e,this.usedTimes=0}};function Dd(r,e,t,i,n,s,a){let o=new $n,c=new gl,l=new Set,h=[],u=n.logarithmicDepthBuffer,d=n.vertexTextures,p=n.precision,f={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function x(m){return l.add(m),m===0?"uv":`uv${m}`}return{getParameters:function(m,g,v,_,T){let E=_.fog,b=T.geometry,D=m.isMeshStandardMaterial?_.environment:null,z=(m.isMeshStandardMaterial?t:e).get(m.envMap||D),L=z&&z.mapping===xr?z.image.height:null,B=f[m.type];m.precision!==null&&(p=n.getMaxPrecision(m.precision),p!==m.precision&&be("WebGLProgram.getParameters:",m.precision,"not supported, using",p,"instead."));let V=b.morphAttributes.position||b.morphAttributes.normal||b.morphAttributes.color,F=V!==void 0?V.length:0,Y,G,Z,$,ae=0;if(b.morphAttributes.position!==void 0&&(ae=1),b.morphAttributes.normal!==void 0&&(ae=2),b.morphAttributes.color!==void 0&&(ae=3),B){let P=ii[B];Y=P.vertexShader,G=P.fragmentShader}else Y=m.vertexShader,G=m.fragmentShader,c.update(m),Z=c.getVertexShaderID(m),$=c.getFragmentShaderID(m);let ne=r.getRenderTarget(),he=r.state.buffers.depth.getReversed(),ue=T.isInstancedMesh===!0,ve=T.isBatchedMesh===!0,Se=!!m.map,J=!!m.matcap,K=!!z,Q=!!m.aoMap,de=!!m.lightMap,xe=!!m.bumpMap,S=!!m.normalMap,M=!!m.displacementMap,U=!!m.emissiveMap,I=!!m.metalnessMap,y=!!m.roughnessMap,A=m.anisotropy>0,N=m.clearcoat>0,R=m.dispersion>0,W=m.iridescence>0,O=m.sheen>0,H=m.transmission>0,j=A&&!!m.anisotropyMap,te=N&&!!m.clearcoatMap,ie=N&&!!m.clearcoatNormalMap,oe=N&&!!m.clearcoatRoughnessMap,ge=W&&!!m.iridescenceMap,ye=W&&!!m.iridescenceThicknessMap,Ee=O&&!!m.sheenColorMap,Pe=O&&!!m.sheenRoughnessMap,Fe=!!m.specularMap,me=!!m.specularColorMap,Re=!!m.specularIntensityMap,ze=H&&!!m.transmissionMap,qe=H&&!!m.thicknessMap,ce=!!m.gradientMap,We=!!m.alphaMap,Xe=m.alphaTest>0,rn=!!m.alphaHash,_t=!!m.extensions,it=Vt;m.toneMapped&&(ne!==null&&ne.isXRRenderTarget!==!0||(it=r.toneMapping));let nt={shaderID:B,shaderType:m.type,shaderName:m.name,vertexShader:Y,fragmentShader:G,defines:m.defines,customVertexShaderID:Z,customFragmentShaderID:$,isRawShaderMaterial:m.isRawShaderMaterial===!0,glslVersion:m.glslVersion,precision:p,batching:ve,batchingColor:ve&&T._colorsTexture!==null,instancing:ue,instancingColor:ue&&T.instanceColor!==null,instancingMorph:ue&&T.morphTexture!==null,supportsVertexTextures:d,outputColorSpace:ne===null?r.outputColorSpace:ne.isXRRenderTarget===!0?ne.texture.colorSpace:ui,alphaToCoverage:!!m.alphaToCoverage,map:Se,matcap:J,envMap:K,envMapMode:K&&z.mapping,envMapCubeUVHeight:L,aoMap:Q,lightMap:de,bumpMap:xe,normalMap:S,displacementMap:d&&M,emissiveMap:U,normalMapObjectSpace:S&&m.normalMapType===Gc,normalMapTangentSpace:S&&m.normalMapType===zc,metalnessMap:I,roughnessMap:y,anisotropy:A,anisotropyMap:j,clearcoat:N,clearcoatMap:te,clearcoatNormalMap:ie,clearcoatRoughnessMap:oe,dispersion:R,iridescence:W,iridescenceMap:ge,iridescenceThicknessMap:ye,sheen:O,sheenColorMap:Ee,sheenRoughnessMap:Pe,specularMap:Fe,specularColorMap:me,specularIntensityMap:Re,transmission:H,transmissionMap:ze,thicknessMap:qe,gradientMap:ce,opaque:m.transparent===!1&&m.blending===fi&&m.alphaToCoverage===!1,alphaMap:We,alphaTest:Xe,alphaHash:rn,combine:m.combine,mapUv:Se&&x(m.map.channel),aoMapUv:Q&&x(m.aoMap.channel),lightMapUv:de&&x(m.lightMap.channel),bumpMapUv:xe&&x(m.bumpMap.channel),normalMapUv:S&&x(m.normalMap.channel),displacementMapUv:M&&x(m.displacementMap.channel),emissiveMapUv:U&&x(m.emissiveMap.channel),metalnessMapUv:I&&x(m.metalnessMap.channel),roughnessMapUv:y&&x(m.roughnessMap.channel),anisotropyMapUv:j&&x(m.anisotropyMap.channel),clearcoatMapUv:te&&x(m.clearcoatMap.channel),clearcoatNormalMapUv:ie&&x(m.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:oe&&x(m.clearcoatRoughnessMap.channel),iridescenceMapUv:ge&&x(m.iridescenceMap.channel),iridescenceThicknessMapUv:ye&&x(m.iridescenceThicknessMap.channel),sheenColorMapUv:Ee&&x(m.sheenColorMap.channel),sheenRoughnessMapUv:Pe&&x(m.sheenRoughnessMap.channel),specularMapUv:Fe&&x(m.specularMap.channel),specularColorMapUv:me&&x(m.specularColorMap.channel),specularIntensityMapUv:Re&&x(m.specularIntensityMap.channel),transmissionMapUv:ze&&x(m.transmissionMap.channel),thicknessMapUv:qe&&x(m.thicknessMap.channel),alphaMapUv:We&&x(m.alphaMap.channel),vertexTangents:!!b.attributes.tangent&&(S||A),vertexColors:m.vertexColors,vertexAlphas:m.vertexColors===!0&&!!b.attributes.color&&b.attributes.color.itemSize===4,pointsUvs:T.isPoints===!0&&!!b.attributes.uv&&(Se||We),fog:!!E,useFog:m.fog===!0,fogExp2:!!E&&E.isFogExp2,flatShading:m.flatShading===!0&&m.wireframe===!1,sizeAttenuation:m.sizeAttenuation===!0,logarithmicDepthBuffer:u,reversedDepthBuffer:he,skinning:T.isSkinnedMesh===!0,morphTargets:b.morphAttributes.position!==void 0,morphNormals:b.morphAttributes.normal!==void 0,morphColors:b.morphAttributes.color!==void 0,morphTargetsCount:F,morphTextureStride:ae,numDirLights:g.directional.length,numPointLights:g.point.length,numSpotLights:g.spot.length,numSpotLightMaps:g.spotLightMap.length,numRectAreaLights:g.rectArea.length,numHemiLights:g.hemi.length,numDirLightShadows:g.directionalShadowMap.length,numPointLightShadows:g.pointShadowMap.length,numSpotLightShadows:g.spotShadowMap.length,numSpotLightShadowsWithMaps:g.numSpotLightShadowsWithMaps,numLightProbes:g.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:m.dithering,shadowMapEnabled:r.shadowMap.enabled&&v.length>0,shadowMapType:r.shadowMap.type,toneMapping:it,decodeVideoTexture:Se&&m.map.isVideoTexture===!0&&He.getTransfer(m.map.colorSpace)===je,decodeVideoTextureEmissive:U&&m.emissiveMap.isVideoTexture===!0&&He.getTransfer(m.emissiveMap.colorSpace)===je,premultipliedAlpha:m.premultipliedAlpha,doubleSided:m.side===ei,flipSided:m.side===Et,useDepthPacking:m.depthPacking>=0,depthPacking:m.depthPacking||0,index0AttributeName:m.index0AttributeName,extensionClipCullDistance:_t&&m.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(_t&&m.extensions.multiDraw===!0||ve)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:m.customProgramCacheKey()};return nt.vertexUv1s=l.has(1),nt.vertexUv2s=l.has(2),nt.vertexUv3s=l.has(3),l.clear(),nt},getProgramCacheKey:function(m){let g=[];if(m.shaderID?g.push(m.shaderID):(g.push(m.customVertexShaderID),g.push(m.customFragmentShaderID)),m.defines!==void 0)for(let v in m.defines)g.push(v),g.push(m.defines[v]);return m.isRawShaderMaterial===!1&&((function(v,_){v.push(_.precision),v.push(_.outputColorSpace),v.push(_.envMapMode),v.push(_.envMapCubeUVHeight),v.push(_.mapUv),v.push(_.alphaMapUv),v.push(_.lightMapUv),v.push(_.aoMapUv),v.push(_.bumpMapUv),v.push(_.normalMapUv),v.push(_.displacementMapUv),v.push(_.emissiveMapUv),v.push(_.metalnessMapUv),v.push(_.roughnessMapUv),v.push(_.anisotropyMapUv),v.push(_.clearcoatMapUv),v.push(_.clearcoatNormalMapUv),v.push(_.clearcoatRoughnessMapUv),v.push(_.iridescenceMapUv),v.push(_.iridescenceThicknessMapUv),v.push(_.sheenColorMapUv),v.push(_.sheenRoughnessMapUv),v.push(_.specularMapUv),v.push(_.specularColorMapUv),v.push(_.specularIntensityMapUv),v.push(_.transmissionMapUv),v.push(_.thicknessMapUv),v.push(_.combine),v.push(_.fogExp2),v.push(_.sizeAttenuation),v.push(_.morphTargetsCount),v.push(_.morphAttributeCount),v.push(_.numDirLights),v.push(_.numPointLights),v.push(_.numSpotLights),v.push(_.numSpotLightMaps),v.push(_.numHemiLights),v.push(_.numRectAreaLights),v.push(_.numDirLightShadows),v.push(_.numPointLightShadows),v.push(_.numSpotLightShadows),v.push(_.numSpotLightShadowsWithMaps),v.push(_.numLightProbes),v.push(_.shadowMapType),v.push(_.toneMapping),v.push(_.numClippingPlanes),v.push(_.numClipIntersection),v.push(_.depthPacking)})(g,m),(function(v,_){o.disableAll(),_.supportsVertexTextures&&o.enable(0),_.instancing&&o.enable(1),_.instancingColor&&o.enable(2),_.instancingMorph&&o.enable(3),_.matcap&&o.enable(4),_.envMap&&o.enable(5),_.normalMapObjectSpace&&o.enable(6),_.normalMapTangentSpace&&o.enable(7),_.clearcoat&&o.enable(8),_.iridescence&&o.enable(9),_.alphaTest&&o.enable(10),_.vertexColors&&o.enable(11),_.vertexAlphas&&o.enable(12),_.vertexUv1s&&o.enable(13),_.vertexUv2s&&o.enable(14),_.vertexUv3s&&o.enable(15),_.vertexTangents&&o.enable(16),_.anisotropy&&o.enable(17),_.alphaHash&&o.enable(18),_.batching&&o.enable(19),_.dispersion&&o.enable(20),_.batchingColor&&o.enable(21),_.gradientMap&&o.enable(22),v.push(o.mask),o.disableAll(),_.fog&&o.enable(0),_.useFog&&o.enable(1),_.flatShading&&o.enable(2),_.logarithmicDepthBuffer&&o.enable(3),_.reversedDepthBuffer&&o.enable(4),_.skinning&&o.enable(5),_.morphTargets&&o.enable(6),_.morphNormals&&o.enable(7),_.morphColors&&o.enable(8),_.premultipliedAlpha&&o.enable(9),_.shadowMapEnabled&&o.enable(10),_.doubleSided&&o.enable(11),_.flipSided&&o.enable(12),_.useDepthPacking&&o.enable(13),_.dithering&&o.enable(14),_.transmission&&o.enable(15),_.sheen&&o.enable(16),_.opaque&&o.enable(17),_.pointsUvs&&o.enable(18),_.decodeVideoTexture&&o.enable(19),_.decodeVideoTextureEmissive&&o.enable(20),_.alphaToCoverage&&o.enable(21),v.push(o.mask)})(g,m),g.push(r.outputColorSpace)),g.push(m.customProgramCacheKey),g.join()},getUniforms:function(m){let g=f[m.type],v;if(g){let _=ii[g];v=Kc.clone(_.uniforms)}else v=m.uniforms;return v},acquireProgram:function(m,g){let v;for(let _=0,T=h.length;_<T;_++){let E=h[_];if(E.cacheKey===g){v=E,++v.usedTimes;break}}return v===void 0&&(v=new Pd(r,g,m,s),h.push(v)),v},releaseProgram:function(m){if(--m.usedTimes===0){let g=h.indexOf(m);h[g]=h[h.length-1],h.pop(),m.destroy()}},releaseShaderCache:function(m){c.remove(m)},programs:h,dispose:function(){c.dispose()}}}function Ud(){let r=new WeakMap;return{has:function(e){return r.has(e)},get:function(e){let t=r.get(e);return t===void 0&&(t={},r.set(e,t)),t},remove:function(e){r.delete(e)},update:function(e,t,i){r.get(e)[t]=i},dispose:function(){r=new WeakMap}}}function Nd(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.material.id!==e.material.id?r.material.id-e.material.id:r.z!==e.z?r.z-e.z:r.id-e.id}function Mh(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.z!==e.z?e.z-r.z:r.id-e.id}function Sh(){let r=[],e=0,t=[],i=[],n=[];function s(a,o,c,l,h,u){let d=r[e];return d===void 0?(d={id:a.id,object:a,geometry:o,material:c,groupOrder:l,renderOrder:a.renderOrder,z:h,group:u},r[e]=d):(d.id=a.id,d.object=a,d.geometry=o,d.material=c,d.groupOrder=l,d.renderOrder=a.renderOrder,d.z=h,d.group=u),e++,d}return{opaque:t,transmissive:i,transparent:n,init:function(){e=0,t.length=0,i.length=0,n.length=0},push:function(a,o,c,l,h,u){let d=s(a,o,c,l,h,u);c.transmission>0?i.push(d):c.transparent===!0?n.push(d):t.push(d)},unshift:function(a,o,c,l,h,u){let d=s(a,o,c,l,h,u);c.transmission>0?i.unshift(d):c.transparent===!0?n.unshift(d):t.unshift(d)},finish:function(){for(let a=e,o=r.length;a<o;a++){let c=r[a];if(c.id===null)break;c.id=null,c.object=null,c.geometry=null,c.material=null,c.group=null}},sort:function(a,o){t.length>1&&t.sort(a||Nd),i.length>1&&i.sort(o||Mh),n.length>1&&n.sort(o||Mh)}}}function Fd(){let r=new WeakMap;return{get:function(e,t){let i=r.get(e),n;return i===void 0?(n=new Sh,r.set(e,[n])):t>=i.length?(n=new Sh,i.push(n)):n=i[t],n},dispose:function(){r=new WeakMap}}}function Od(){let r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new C,color:new ke};break;case"SpotLight":t={position:new C,direction:new C,color:new ke,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new C,color:new ke,distance:0,decay:0};break;case"HemisphereLight":t={direction:new C,skyColor:new ke,groundColor:new ke};break;case"RectAreaLight":t={color:new ke,position:new C,halfWidth:new C,halfHeight:new C}}return r[e.id]=t,t}}}var Bd=0;function zd(r,e){return(e.castShadow?2:0)-(r.castShadow?2:0)+(e.map?1:0)-(r.map?1:0)}function Gd(r){let e=new Od,t=(function(){let o={};return{get:function(c){if(o[c.id]!==void 0)return o[c.id];let l;switch(c.type){case"DirectionalLight":case"SpotLight":l={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new re};break;case"PointLight":l={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new re,shadowCameraNear:1,shadowCameraFar:1e3}}return o[c.id]=l,l}}})(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let o=0;o<9;o++)i.probe.push(new C);let n=new C,s=new Le,a=new Le;return{setup:function(o){let c=0,l=0,h=0;for(let D=0;D<9;D++)i.probe[D].set(0,0,0);let u=0,d=0,p=0,f=0,x=0,m=0,g=0,v=0,_=0,T=0,E=0;o.sort(zd);for(let D=0,z=o.length;D<z;D++){let L=o[D],B=L.color,V=L.intensity,F=L.distance,Y=L.shadow&&L.shadow.map?L.shadow.map.texture:null;if(L.isAmbientLight)c+=B.r*V,l+=B.g*V,h+=B.b*V;else if(L.isLightProbe){for(let G=0;G<9;G++)i.probe[G].addScaledVector(L.sh.coefficients[G],V);E++}else if(L.isDirectionalLight){let G=e.get(L);if(G.color.copy(L.color).multiplyScalar(L.intensity),L.castShadow){let Z=L.shadow,$=t.get(L);$.shadowIntensity=Z.intensity,$.shadowBias=Z.bias,$.shadowNormalBias=Z.normalBias,$.shadowRadius=Z.radius,$.shadowMapSize=Z.mapSize,i.directionalShadow[u]=$,i.directionalShadowMap[u]=Y,i.directionalShadowMatrix[u]=L.shadow.matrix,m++}i.directional[u]=G,u++}else if(L.isSpotLight){let G=e.get(L);G.position.setFromMatrixPosition(L.matrixWorld),G.color.copy(B).multiplyScalar(V),G.distance=F,G.coneCos=Math.cos(L.angle),G.penumbraCos=Math.cos(L.angle*(1-L.penumbra)),G.decay=L.decay,i.spot[p]=G;let Z=L.shadow;if(L.map&&(i.spotLightMap[_]=L.map,_++,Z.updateMatrices(L),L.castShadow&&T++),i.spotLightMatrix[p]=Z.matrix,L.castShadow){let $=t.get(L);$.shadowIntensity=Z.intensity,$.shadowBias=Z.bias,$.shadowNormalBias=Z.normalBias,$.shadowRadius=Z.radius,$.shadowMapSize=Z.mapSize,i.spotShadow[p]=$,i.spotShadowMap[p]=Y,v++}p++}else if(L.isRectAreaLight){let G=e.get(L);G.color.copy(B).multiplyScalar(V),G.halfWidth.set(.5*L.width,0,0),G.halfHeight.set(0,.5*L.height,0),i.rectArea[f]=G,f++}else if(L.isPointLight){let G=e.get(L);if(G.color.copy(L.color).multiplyScalar(L.intensity),G.distance=L.distance,G.decay=L.decay,L.castShadow){let Z=L.shadow,$=t.get(L);$.shadowIntensity=Z.intensity,$.shadowBias=Z.bias,$.shadowNormalBias=Z.normalBias,$.shadowRadius=Z.radius,$.shadowMapSize=Z.mapSize,$.shadowCameraNear=Z.camera.near,$.shadowCameraFar=Z.camera.far,i.pointShadow[d]=$,i.pointShadowMap[d]=Y,i.pointShadowMatrix[d]=L.shadow.matrix,g++}i.point[d]=G,d++}else if(L.isHemisphereLight){let G=e.get(L);G.skyColor.copy(L.color).multiplyScalar(V),G.groundColor.copy(L.groundColor).multiplyScalar(V),i.hemi[x]=G,x++}}f>0&&(r.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=le.LTC_FLOAT_1,i.rectAreaLTC2=le.LTC_FLOAT_2):(i.rectAreaLTC1=le.LTC_HALF_1,i.rectAreaLTC2=le.LTC_HALF_2)),i.ambient[0]=c,i.ambient[1]=l,i.ambient[2]=h;let b=i.hash;b.directionalLength===u&&b.pointLength===d&&b.spotLength===p&&b.rectAreaLength===f&&b.hemiLength===x&&b.numDirectionalShadows===m&&b.numPointShadows===g&&b.numSpotShadows===v&&b.numSpotMaps===_&&b.numLightProbes===E||(i.directional.length=u,i.spot.length=p,i.rectArea.length=f,i.point.length=d,i.hemi.length=x,i.directionalShadow.length=m,i.directionalShadowMap.length=m,i.pointShadow.length=g,i.pointShadowMap.length=g,i.spotShadow.length=v,i.spotShadowMap.length=v,i.directionalShadowMatrix.length=m,i.pointShadowMatrix.length=g,i.spotLightMatrix.length=v+_-T,i.spotLightMap.length=_,i.numSpotLightShadowsWithMaps=T,i.numLightProbes=E,b.directionalLength=u,b.pointLength=d,b.spotLength=p,b.rectAreaLength=f,b.hemiLength=x,b.numDirectionalShadows=m,b.numPointShadows=g,b.numSpotShadows=v,b.numSpotMaps=_,b.numLightProbes=E,i.version=Bd++)},setupView:function(o,c){let l=0,h=0,u=0,d=0,p=0,f=c.matrixWorldInverse;for(let x=0,m=o.length;x<m;x++){let g=o[x];if(g.isDirectionalLight){let v=i.directional[l];v.direction.setFromMatrixPosition(g.matrixWorld),n.setFromMatrixPosition(g.target.matrixWorld),v.direction.sub(n),v.direction.transformDirection(f),l++}else if(g.isSpotLight){let v=i.spot[u];v.position.setFromMatrixPosition(g.matrixWorld),v.position.applyMatrix4(f),v.direction.setFromMatrixPosition(g.matrixWorld),n.setFromMatrixPosition(g.target.matrixWorld),v.direction.sub(n),v.direction.transformDirection(f),u++}else if(g.isRectAreaLight){let v=i.rectArea[d];v.position.setFromMatrixPosition(g.matrixWorld),v.position.applyMatrix4(f),a.identity(),s.copy(g.matrixWorld),s.premultiply(f),a.extractRotation(s),v.halfWidth.set(.5*g.width,0,0),v.halfHeight.set(0,.5*g.height,0),v.halfWidth.applyMatrix4(a),v.halfHeight.applyMatrix4(a),d++}else if(g.isPointLight){let v=i.point[h];v.position.setFromMatrixPosition(g.matrixWorld),v.position.applyMatrix4(f),h++}else if(g.isHemisphereLight){let v=i.hemi[p];v.direction.setFromMatrixPosition(g.matrixWorld),v.direction.transformDirection(f),p++}}},state:i}}function bh(r){let e=new Gd(r),t=[],i=[],n={lightsArray:t,shadowsArray:i,camera:null,lights:e,transmissionRenderTarget:{}};return{init:function(s){n.camera=s,t.length=0,i.length=0},state:n,setupLights:function(){e.setup(t)},setupLightsView:function(s){e.setupView(t,s)},pushLight:function(s){t.push(s)},pushShadow:function(s){i.push(s)}}}function Vd(r){let e=new WeakMap;return{get:function(t,i=0){let n=e.get(t),s;return n===void 0?(s=new bh(r),e.set(t,[s])):i>=n.length?(s=new bh(r),n.push(s)):s=n[i],s},dispose:function(){e=new WeakMap}}}function kd(r,e,t){let i=new Xi,n=new re,s=new re,a=new Ke,o=new Fs({depthPacking:Bc}),c=new Os,l={},h=t.maxTextureSize,u={[Cn]:Et,[Et]:Cn,[ei]:ei},d=new mt({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new re},radius:{value:4}},vertexShader:`void main() {
	gl_Position = vec4( position, 1.0 );
}`,fragmentShader:`uniform sampler2D shadow_pass;
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
}`}),p=d.clone();p.defines.HORIZONTAL_PASS=1;let f=new $e;f.setAttribute("position",new pt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let x=new ut(f,d),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=uo;let g=this.type;function v(b,D){let z=e.update(x);d.defines.VSM_SAMPLES!==b.blurSamples&&(d.defines.VSM_SAMPLES=b.blurSamples,p.defines.VSM_SAMPLES=b.blurSamples,d.needsUpdate=!0,p.needsUpdate=!0),b.mapPass===null&&(b.mapPass=new Kt(n.x,n.y)),d.uniforms.shadow_pass.value=b.map.texture,d.uniforms.resolution.value=b.mapSize,d.uniforms.radius.value=b.radius,r.setRenderTarget(b.mapPass),r.clear(),r.renderBufferDirect(D,null,z,d,x,null),p.uniforms.shadow_pass.value=b.mapPass.texture,p.uniforms.resolution.value=b.mapSize,p.uniforms.radius.value=b.radius,r.setRenderTarget(b.map),r.clear(),r.renderBufferDirect(D,null,z,p,x,null)}function _(b,D,z,L){let B=null,V=z.isPointLight===!0?b.customDistanceMaterial:b.customDepthMaterial;if(V!==void 0)B=V;else if(B=z.isPointLight===!0?c:o,r.localClippingEnabled&&D.clipShadows===!0&&Array.isArray(D.clippingPlanes)&&D.clippingPlanes.length!==0||D.displacementMap&&D.displacementScale!==0||D.alphaMap&&D.alphaTest>0||D.map&&D.alphaTest>0||D.alphaToCoverage===!0){let F=B.uuid,Y=D.uuid,G=l[F];G===void 0&&(G={},l[F]=G);let Z=G[Y];Z===void 0&&(Z=B.clone(),G[Y]=Z,D.addEventListener("dispose",E)),B=Z}return B.visible=D.visible,B.wireframe=D.wireframe,B.side=L===Qt?D.shadowSide!==null?D.shadowSide:D.side:D.shadowSide!==null?D.shadowSide:u[D.side],B.alphaMap=D.alphaMap,B.alphaTest=D.alphaToCoverage===!0?.5:D.alphaTest,B.map=D.map,B.clipShadows=D.clipShadows,B.clippingPlanes=D.clippingPlanes,B.clipIntersection=D.clipIntersection,B.displacementMap=D.displacementMap,B.displacementScale=D.displacementScale,B.displacementBias=D.displacementBias,B.wireframeLinewidth=D.wireframeLinewidth,B.linewidth=D.linewidth,z.isPointLight===!0&&B.isMeshDistanceMaterial===!0&&(r.properties.get(B).light=z),B}function T(b,D,z,L,B){if(b.visible===!1)return;if(b.layers.test(D.layers)&&(b.isMesh||b.isLine||b.isPoints)&&(b.castShadow||b.receiveShadow&&B===Qt)&&(!b.frustumCulled||i.intersectsObject(b))){b.modelViewMatrix.multiplyMatrices(z.matrixWorldInverse,b.matrixWorld);let F=e.update(b),Y=b.material;if(Array.isArray(Y)){let G=F.groups;for(let Z=0,$=G.length;Z<$;Z++){let ae=G[Z],ne=Y[ae.materialIndex];if(ne&&ne.visible){let he=_(b,ne,L,B);b.onBeforeShadow(r,b,D,z,F,he,ae),r.renderBufferDirect(z,null,F,he,b,ae),b.onAfterShadow(r,b,D,z,F,he,ae)}}}else if(Y.visible){let G=_(b,Y,L,B);b.onBeforeShadow(r,b,D,z,F,G,null),r.renderBufferDirect(z,null,F,G,b,null),b.onAfterShadow(r,b,D,z,F,G,null)}}let V=b.children;for(let F=0,Y=V.length;F<Y;F++)T(V[F],D,z,L,B)}function E(b){b.target.removeEventListener("dispose",E);for(let D in l){let z=l[D],L=b.target.uuid;L in z&&(z[L].dispose(),delete z[L])}}this.render=function(b,D,z){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||b.length===0)return;let L=r.getRenderTarget(),B=r.getActiveCubeFace(),V=r.getActiveMipmapLevel(),F=r.state;F.setBlending(mi),F.buffers.depth.getReversed()===!0?F.buffers.color.setClear(0,0,0,0):F.buffers.color.setClear(1,1,1,1),F.buffers.depth.setTest(!0),F.setScissorTest(!1);let Y=g!==Qt&&this.type===Qt,G=g===Qt&&this.type!==Qt;for(let Z=0,$=b.length;Z<$;Z++){let ae=b[Z],ne=ae.shadow;if(ne===void 0){be("WebGLShadowMap:",ae,"has no shadow.");continue}if(ne.autoUpdate===!1&&ne.needsUpdate===!1)continue;n.copy(ne.mapSize);let he=ne.getFrameExtents();if(n.multiply(he),s.copy(ne.mapSize),(n.x>h||n.y>h)&&(n.x>h&&(s.x=Math.floor(h/he.x),n.x=s.x*he.x,ne.mapSize.x=s.x),n.y>h&&(s.y=Math.floor(h/he.y),n.y=s.y*he.y,ne.mapSize.y=s.y)),ne.map===null||Y===!0||G===!0){let ve=this.type!==Qt?{minFilter:Jt,magFilter:Jt}:{};ne.map!==null&&ne.map.dispose(),ne.map=new Kt(n.x,n.y,ve),ne.map.texture.name=ae.name+".shadowMap",ne.camera.updateProjectionMatrix()}r.setRenderTarget(ne.map),r.clear();let ue=ne.getViewportCount();for(let ve=0;ve<ue;ve++){let Se=ne.getViewport(ve);a.set(s.x*Se.x,s.y*Se.y,s.x*Se.z,s.y*Se.w),F.viewport(a),ne.updateMatrices(ae,ve),i=ne.getFrustum(),T(D,z,ne.camera,ae,this.type)}ne.isPointLightShadow!==!0&&this.type===Qt&&v(ne,z),ne.needsUpdate=!1}g=this.type,m.needsUpdate=!1,r.setRenderTarget(L,B,V)}}var Hd={[Ys]:Zs,[Js]:Qs,[Ks]:ea,[_r]:$s,[Zs]:Ys,[Qs]:Js,[ea]:Ks,[$s]:_r};function Wd(r,e){let t=new function(){let y=!1,A=new Ke,N=null,R=new Ke(0,0,0,0);return{setMask:function(W){N===W||y||(r.colorMask(W,W,W,W),N=W)},setLocked:function(W){y=W},setClear:function(W,O,H,j,te){te===!0&&(W*=j,O*=j,H*=j),A.set(W,O,H,j),R.equals(A)===!1&&(r.clearColor(W,O,H,j),R.copy(A))},reset:function(){y=!1,N=null,R.set(-1,0,0,0)}}},i=new function(){let y=!1,A=!1,N=null,R=null,W=null;return{setReversed:function(O){if(A!==O){let H=e.get("EXT_clip_control");O?H.clipControlEXT(H.LOWER_LEFT_EXT,H.ZERO_TO_ONE_EXT):H.clipControlEXT(H.LOWER_LEFT_EXT,H.NEGATIVE_ONE_TO_ONE_EXT),A=O;let j=W;W=null,this.setClear(j)}},getReversed:function(){return A},setTest:function(O){O?K(r.DEPTH_TEST):Q(r.DEPTH_TEST)},setMask:function(O){N===O||y||(r.depthMask(O),N=O)},setFunc:function(O){if(A&&(O=Hd[O]),R!==O){switch(O){case Ys:r.depthFunc(r.NEVER);break;case Zs:r.depthFunc(r.ALWAYS);break;case Js:r.depthFunc(r.LESS);break;case _r:r.depthFunc(r.LEQUAL);break;case Ks:r.depthFunc(r.EQUAL);break;case $s:r.depthFunc(r.GEQUAL);break;case Qs:r.depthFunc(r.GREATER);break;case ea:r.depthFunc(r.NOTEQUAL);break;default:r.depthFunc(r.LEQUAL)}R=O}},setLocked:function(O){y=O},setClear:function(O){W!==O&&(A&&(O=1-O),r.clearDepth(O),W=O)},reset:function(){y=!1,N=null,R=null,W=null,A=!1}}},n=new function(){let y=!1,A=null,N=null,R=null,W=null,O=null,H=null,j=null,te=null;return{setTest:function(ie){y||(ie?K(r.STENCIL_TEST):Q(r.STENCIL_TEST))},setMask:function(ie){A===ie||y||(r.stencilMask(ie),A=ie)},setFunc:function(ie,oe,ge){N===ie&&R===oe&&W===ge||(r.stencilFunc(ie,oe,ge),N=ie,R=oe,W=ge)},setOp:function(ie,oe,ge){O===ie&&H===oe&&j===ge||(r.stencilOp(ie,oe,ge),O=ie,H=oe,j=ge)},setLocked:function(ie){y=ie},setClear:function(ie){te!==ie&&(r.clearStencil(ie),te=ie)},reset:function(){y=!1,A=null,N=null,R=null,W=null,O=null,H=null,j=null,te=null}}},s=new WeakMap,a=new WeakMap,o={},c={},l=new WeakMap,h=[],u=null,d=!1,p=null,f=null,x=null,m=null,g=null,v=null,_=null,T=new ke(0,0,0),E=0,b=!1,D=null,z=null,L=null,B=null,V=null,F=r.getParameter(r.MAX_COMBINED_TEXTURE_IMAGE_UNITS),Y=!1,G=0,Z=r.getParameter(r.VERSION);Z.indexOf("WebGL")!==-1?(G=parseFloat(/^WebGL (\d)/.exec(Z)[1]),Y=G>=1):Z.indexOf("OpenGL ES")!==-1&&(G=parseFloat(/^OpenGL ES (\d)/.exec(Z)[1]),Y=G>=2);let $=null,ae={},ne=r.getParameter(r.SCISSOR_BOX),he=r.getParameter(r.VIEWPORT),ue=new Ke().fromArray(ne),ve=new Ke().fromArray(he);function Se(y,A,N,R){let W=new Uint8Array(4),O=r.createTexture();r.bindTexture(y,O),r.texParameteri(y,r.TEXTURE_MIN_FILTER,r.NEAREST),r.texParameteri(y,r.TEXTURE_MAG_FILTER,r.NEAREST);for(let H=0;H<N;H++)y===r.TEXTURE_3D||y===r.TEXTURE_2D_ARRAY?r.texImage3D(A,0,r.RGBA,1,1,R,0,r.RGBA,r.UNSIGNED_BYTE,W):r.texImage2D(A+H,0,r.RGBA,1,1,0,r.RGBA,r.UNSIGNED_BYTE,W);return O}let J={};function K(y){o[y]!==!0&&(r.enable(y),o[y]=!0)}function Q(y){o[y]!==!1&&(r.disable(y),o[y]=!1)}J[r.TEXTURE_2D]=Se(r.TEXTURE_2D,r.TEXTURE_2D,1),J[r.TEXTURE_CUBE_MAP]=Se(r.TEXTURE_CUBE_MAP,r.TEXTURE_CUBE_MAP_POSITIVE_X,6),J[r.TEXTURE_2D_ARRAY]=Se(r.TEXTURE_2D_ARRAY,r.TEXTURE_2D_ARRAY,1,1),J[r.TEXTURE_3D]=Se(r.TEXTURE_3D,r.TEXTURE_3D,1,1),t.setClear(0,0,0,1),i.setClear(1),n.setClear(0),K(r.DEPTH_TEST),i.setFunc(_r),M(!1),U(ho),K(r.CULL_FACE),S(mi);let de={[Rn]:r.FUNC_ADD,[ac]:r.FUNC_SUBTRACT,[oc]:r.FUNC_REVERSE_SUBTRACT};de[lc]=r.MIN,de[cc]=r.MAX;let xe={[hc]:r.ZERO,[uc]:r.ONE,[dc]:r.SRC_COLOR,[mc]:r.SRC_ALPHA,[yc]:r.SRC_ALPHA_SATURATE,[_c]:r.DST_COLOR,[gc]:r.DST_ALPHA,[pc]:r.ONE_MINUS_SRC_COLOR,[fc]:r.ONE_MINUS_SRC_ALPHA,[xc]:r.ONE_MINUS_DST_COLOR,[vc]:r.ONE_MINUS_DST_ALPHA,[Mc]:r.CONSTANT_COLOR,[Sc]:r.ONE_MINUS_CONSTANT_COLOR,[bc]:r.CONSTANT_ALPHA,[Tc]:r.ONE_MINUS_CONSTANT_ALPHA};function S(y,A,N,R,W,O,H,j,te,ie){if(y!==mi){if(d===!1&&(K(r.BLEND),d=!0),y===sc)W=W||A,O=O||N,H=H||R,A===f&&W===g||(r.blendEquationSeparate(de[A],de[W]),f=A,g=W),N===x&&R===m&&O===v&&H===_||(r.blendFuncSeparate(xe[N],xe[R],xe[O],xe[H]),x=N,m=R,v=O,_=H),j.equals(T)!==!1&&te===E||(r.blendColor(j.r,j.g,j.b,te),T.copy(j),E=te),p=y,b=!1;else if(y!==p||ie!==b){if(f===Rn&&g===Rn||(r.blendEquation(r.FUNC_ADD),f=Rn,g=Rn),ie)switch(y){case fi:r.blendFuncSeparate(r.ONE,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case po:r.blendFunc(r.ONE,r.ONE);break;case mo:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case fo:r.blendFuncSeparate(r.DST_COLOR,r.ONE_MINUS_SRC_ALPHA,r.ZERO,r.ONE);break;default:Oe("WebGLState: Invalid blending: ",y)}else switch(y){case fi:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case po:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE,r.ONE,r.ONE);break;case mo:Oe("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case fo:Oe("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Oe("WebGLState: Invalid blending: ",y)}x=null,m=null,v=null,_=null,T.set(0,0,0),E=0,p=y,b=ie}}else d===!0&&(Q(r.BLEND),d=!1)}function M(y){D!==y&&(y?r.frontFace(r.CW):r.frontFace(r.CCW),D=y)}function U(y){y!==ic?(K(r.CULL_FACE),y!==z&&(y===ho?r.cullFace(r.BACK):y===nc?r.cullFace(r.FRONT):r.cullFace(r.FRONT_AND_BACK))):Q(r.CULL_FACE),z=y}function I(y,A,N){y?(K(r.POLYGON_OFFSET_FILL),B===A&&V===N||(r.polygonOffset(A,N),B=A,V=N)):Q(r.POLYGON_OFFSET_FILL)}return{buffers:{color:t,depth:i,stencil:n},enable:K,disable:Q,bindFramebuffer:function(y,A){return c[y]!==A&&(r.bindFramebuffer(y,A),c[y]=A,y===r.DRAW_FRAMEBUFFER&&(c[r.FRAMEBUFFER]=A),y===r.FRAMEBUFFER&&(c[r.DRAW_FRAMEBUFFER]=A),!0)},drawBuffers:function(y,A){let N=h,R=!1;if(y){N=l.get(A),N===void 0&&(N=[],l.set(A,N));let W=y.textures;if(N.length!==W.length||N[0]!==r.COLOR_ATTACHMENT0){for(let O=0,H=W.length;O<H;O++)N[O]=r.COLOR_ATTACHMENT0+O;N.length=W.length,R=!0}}else N[0]!==r.BACK&&(N[0]=r.BACK,R=!0);R&&r.drawBuffers(N)},useProgram:function(y){return u!==y&&(r.useProgram(y),u=y,!0)},setBlending:S,setMaterial:function(y,A){y.side===ei?Q(r.CULL_FACE):K(r.CULL_FACE);let N=y.side===Et;A&&(N=!N),M(N),y.blending===fi&&y.transparent===!1?S(mi):S(y.blending,y.blendEquation,y.blendSrc,y.blendDst,y.blendEquationAlpha,y.blendSrcAlpha,y.blendDstAlpha,y.blendColor,y.blendAlpha,y.premultipliedAlpha),i.setFunc(y.depthFunc),i.setTest(y.depthTest),i.setMask(y.depthWrite),t.setMask(y.colorWrite);let R=y.stencilWrite;n.setTest(R),R&&(n.setMask(y.stencilWriteMask),n.setFunc(y.stencilFunc,y.stencilRef,y.stencilFuncMask),n.setOp(y.stencilFail,y.stencilZFail,y.stencilZPass)),I(y.polygonOffset,y.polygonOffsetFactor,y.polygonOffsetUnits),y.alphaToCoverage===!0?K(r.SAMPLE_ALPHA_TO_COVERAGE):Q(r.SAMPLE_ALPHA_TO_COVERAGE)},setFlipSided:M,setCullFace:U,setLineWidth:function(y){y!==L&&(Y&&r.lineWidth(y),L=y)},setPolygonOffset:I,setScissorTest:function(y){y?K(r.SCISSOR_TEST):Q(r.SCISSOR_TEST)},activeTexture:function(y){y===void 0&&(y=r.TEXTURE0+F-1),$!==y&&(r.activeTexture(y),$=y)},bindTexture:function(y,A,N){N===void 0&&(N=$===null?r.TEXTURE0+F-1:$);let R=ae[N];R===void 0&&(R={type:void 0,texture:void 0},ae[N]=R),R.type===y&&R.texture===A||($!==N&&(r.activeTexture(N),$=N),r.bindTexture(y,A||J[y]),R.type=y,R.texture=A)},unbindTexture:function(){let y=ae[$];y!==void 0&&y.type!==void 0&&(r.bindTexture(y.type,null),y.type=void 0,y.texture=void 0)},compressedTexImage2D:function(){try{r.compressedTexImage2D(...arguments)}catch(y){y("WebGLState:",y)}},compressedTexImage3D:function(){try{r.compressedTexImage3D(...arguments)}catch(y){y("WebGLState:",y)}},texImage2D:function(){try{r.texImage2D(...arguments)}catch(y){y("WebGLState:",y)}},texImage3D:function(){try{r.texImage3D(...arguments)}catch(y){y("WebGLState:",y)}},updateUBOMapping:function(y,A){let N=a.get(A);N===void 0&&(N=new WeakMap,a.set(A,N));let R=N.get(y);R===void 0&&(R=r.getUniformBlockIndex(A,y.name),N.set(y,R))},uniformBlockBinding:function(y,A){let N=a.get(A).get(y);s.get(A)!==N&&(r.uniformBlockBinding(A,N,y.__bindingPointIndex),s.set(A,N))},texStorage2D:function(){try{r.texStorage2D(...arguments)}catch(y){y("WebGLState:",y)}},texStorage3D:function(){try{r.texStorage3D(...arguments)}catch(y){y("WebGLState:",y)}},texSubImage2D:function(){try{r.texSubImage2D(...arguments)}catch(y){y("WebGLState:",y)}},texSubImage3D:function(){try{r.texSubImage3D(...arguments)}catch(y){y("WebGLState:",y)}},compressedTexSubImage2D:function(){try{r.compressedTexSubImage2D(...arguments)}catch(y){y("WebGLState:",y)}},compressedTexSubImage3D:function(){try{r.compressedTexSubImage3D(...arguments)}catch(y){y("WebGLState:",y)}},scissor:function(y){ue.equals(y)===!1&&(r.scissor(y.x,y.y,y.z,y.w),ue.copy(y))},viewport:function(y){ve.equals(y)===!1&&(r.viewport(y.x,y.y,y.z,y.w),ve.copy(y))},reset:function(){r.disable(r.BLEND),r.disable(r.CULL_FACE),r.disable(r.DEPTH_TEST),r.disable(r.POLYGON_OFFSET_FILL),r.disable(r.SCISSOR_TEST),r.disable(r.STENCIL_TEST),r.disable(r.SAMPLE_ALPHA_TO_COVERAGE),r.blendEquation(r.FUNC_ADD),r.blendFunc(r.ONE,r.ZERO),r.blendFuncSeparate(r.ONE,r.ZERO,r.ONE,r.ZERO),r.blendColor(0,0,0,0),r.colorMask(!0,!0,!0,!0),r.clearColor(0,0,0,0),r.depthMask(!0),r.depthFunc(r.LESS),i.setReversed(!1),r.clearDepth(1),r.stencilMask(4294967295),r.stencilFunc(r.ALWAYS,0,4294967295),r.stencilOp(r.KEEP,r.KEEP,r.KEEP),r.clearStencil(0),r.cullFace(r.BACK),r.frontFace(r.CCW),r.polygonOffset(0,0),r.activeTexture(r.TEXTURE0),r.bindFramebuffer(r.FRAMEBUFFER,null),r.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),r.bindFramebuffer(r.READ_FRAMEBUFFER,null),r.useProgram(null),r.lineWidth(1),r.scissor(0,0,r.canvas.width,r.canvas.height),r.viewport(0,0,r.canvas.width,r.canvas.height),o={},$=null,ae={},c={},l=new WeakMap,h=[],u=null,d=!1,p=null,f=null,x=null,m=null,g=null,v=null,_=null,T=new ke(0,0,0),E=0,b=!1,D=null,z=null,L=null,B=null,V=null,ue.set(0,0,r.canvas.width,r.canvas.height),ve.set(0,0,r.canvas.width,r.canvas.height),t.reset(),i.reset(),n.reset()}}}function Xd(r,e,t,i,n,s,a){let o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator<"u"&&/OculusBrowser/g.test(navigator.userAgent),l=new re,h=new WeakMap,u,d=new WeakMap,p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function f(S,M){return p?new OffscreenCanvas(S,M):Jn("canvas")}function x(S,M,U){let I=1,y=xe(S);if((y.width>U||y.height>U)&&(I=U/Math.max(y.width,y.height)),I<1){if(typeof HTMLImageElement<"u"&&S instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&S instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&S instanceof ImageBitmap||typeof VideoFrame<"u"&&S instanceof VideoFrame){let A=Math.floor(I*y.width),N=Math.floor(I*y.height);u===void 0&&(u=f(A,N));let R=M?f(A,N):u;return R.width=A,R.height=N,R.getContext("2d").drawImage(S,0,0,A,N),be("WebGLRenderer: Texture has been resized from ("+y.width+"x"+y.height+") to ("+A+"x"+N+")."),R}return"data"in S&&be("WebGLRenderer: Image in DataTexture is too big ("+y.width+"x"+y.height+")."),S}return S}function m(S){return S.generateMipmaps}function g(S){r.generateMipmap(S)}function v(S){return S.isWebGLCubeRenderTarget?r.TEXTURE_CUBE_MAP:S.isWebGL3DRenderTarget?r.TEXTURE_3D:S.isWebGLArrayRenderTarget||S.isCompressedArrayTexture?r.TEXTURE_2D_ARRAY:r.TEXTURE_2D}function _(S,M,U,I,y=!1){if(S!==null){if(r[S]!==void 0)return r[S];be("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+S+"'")}let A=M;if(M===r.RED&&(U===r.FLOAT&&(A=r.R32F),U===r.HALF_FLOAT&&(A=r.R16F),U===r.UNSIGNED_BYTE&&(A=r.R8)),M===r.RED_INTEGER&&(U===r.UNSIGNED_BYTE&&(A=r.R8UI),U===r.UNSIGNED_SHORT&&(A=r.R16UI),U===r.UNSIGNED_INT&&(A=r.R32UI),U===r.BYTE&&(A=r.R8I),U===r.SHORT&&(A=r.R16I),U===r.INT&&(A=r.R32I)),M===r.RG&&(U===r.FLOAT&&(A=r.RG32F),U===r.HALF_FLOAT&&(A=r.RG16F),U===r.UNSIGNED_BYTE&&(A=r.RG8)),M===r.RG_INTEGER&&(U===r.UNSIGNED_BYTE&&(A=r.RG8UI),U===r.UNSIGNED_SHORT&&(A=r.RG16UI),U===r.UNSIGNED_INT&&(A=r.RG32UI),U===r.BYTE&&(A=r.RG8I),U===r.SHORT&&(A=r.RG16I),U===r.INT&&(A=r.RG32I)),M===r.RGB_INTEGER&&(U===r.UNSIGNED_BYTE&&(A=r.RGB8UI),U===r.UNSIGNED_SHORT&&(A=r.RGB16UI),U===r.UNSIGNED_INT&&(A=r.RGB32UI),U===r.BYTE&&(A=r.RGB8I),U===r.SHORT&&(A=r.RGB16I),U===r.INT&&(A=r.RGB32I)),M===r.RGBA_INTEGER&&(U===r.UNSIGNED_BYTE&&(A=r.RGBA8UI),U===r.UNSIGNED_SHORT&&(A=r.RGBA16UI),U===r.UNSIGNED_INT&&(A=r.RGBA32UI),U===r.BYTE&&(A=r.RGBA8I),U===r.SHORT&&(A=r.RGBA16I),U===r.INT&&(A=r.RGBA32I)),M===r.RGB&&(U===r.UNSIGNED_INT_5_9_9_9_REV&&(A=r.RGB9_E5),U===r.UNSIGNED_INT_10F_11F_11F_REV&&(A=r.R11F_G11F_B10F)),M===r.RGBA){let N=y?Yn:He.getTransfer(I);U===r.FLOAT&&(A=r.RGBA32F),U===r.HALF_FLOAT&&(A=r.RGBA16F),U===r.UNSIGNED_BYTE&&(A=N===je?r.SRGB8_ALPHA8:r.RGBA8),U===r.UNSIGNED_SHORT_4_4_4_4&&(A=r.RGBA4),U===r.UNSIGNED_SHORT_5_5_5_1&&(A=r.RGB5_A1)}return A!==r.R16F&&A!==r.R32F&&A!==r.RG16F&&A!==r.RG32F&&A!==r.RGBA16F&&A!==r.RGBA32F||e.get("EXT_color_buffer_float"),A}function T(S,M){let U;return S?M===null||M===Ji||M===Ln?U=r.DEPTH24_STENCIL8:M===ti?U=r.DEPTH32F_STENCIL8:M===Pn&&(U=r.DEPTH24_STENCIL8,be("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):M===null||M===Ji||M===Ln?U=r.DEPTH_COMPONENT24:M===ti?U=r.DEPTH_COMPONENT32F:M===Pn&&(U=r.DEPTH_COMPONENT16),U}function E(S,M){return m(S)===!0||S.isFramebufferTexture&&S.minFilter!==Jt&&S.minFilter!==Pt?Math.log2(Math.max(M.width,M.height))+1:S.mipmaps!==void 0&&S.mipmaps.length>0?S.mipmaps.length:S.isCompressedTexture&&Array.isArray(S.image)?M.mipmaps.length:1}function b(S){let M=S.target;M.removeEventListener("dispose",b),(function(U){let I=i.get(U);if(I.__webglInit===void 0)return;let y=U.source,A=d.get(y);if(A){let N=A[I.__cacheKey];N.usedTimes--,N.usedTimes===0&&z(U),Object.keys(A).length===0&&d.delete(y)}i.remove(U)})(M),M.isVideoTexture&&h.delete(M)}function D(S){let M=S.target;M.removeEventListener("dispose",D),(function(U){let I=i.get(U);if(U.depthTexture&&(U.depthTexture.dispose(),i.remove(U.depthTexture)),U.isWebGLCubeRenderTarget)for(let A=0;A<6;A++){if(Array.isArray(I.__webglFramebuffer[A]))for(let N=0;N<I.__webglFramebuffer[A].length;N++)r.deleteFramebuffer(I.__webglFramebuffer[A][N]);else r.deleteFramebuffer(I.__webglFramebuffer[A]);I.__webglDepthbuffer&&r.deleteRenderbuffer(I.__webglDepthbuffer[A])}else{if(Array.isArray(I.__webglFramebuffer))for(let A=0;A<I.__webglFramebuffer.length;A++)r.deleteFramebuffer(I.__webglFramebuffer[A]);else r.deleteFramebuffer(I.__webglFramebuffer);if(I.__webglDepthbuffer&&r.deleteRenderbuffer(I.__webglDepthbuffer),I.__webglMultisampledFramebuffer&&r.deleteFramebuffer(I.__webglMultisampledFramebuffer),I.__webglColorRenderbuffer)for(let A=0;A<I.__webglColorRenderbuffer.length;A++)I.__webglColorRenderbuffer[A]&&r.deleteRenderbuffer(I.__webglColorRenderbuffer[A]);I.__webglDepthRenderbuffer&&r.deleteRenderbuffer(I.__webglDepthRenderbuffer)}let y=U.textures;for(let A=0,N=y.length;A<N;A++){let R=i.get(y[A]);R.__webglTexture&&(r.deleteTexture(R.__webglTexture),a.memory.textures--),i.remove(y[A])}i.remove(U)})(M)}function z(S){let M=i.get(S);r.deleteTexture(M.__webglTexture);let U=S.source;delete d.get(U)[M.__cacheKey],a.memory.textures--}let L=0;function B(S,M){let U=i.get(S);if(S.isVideoTexture&&(function(I){let y=a.render.frame;h.get(I)!==y&&(h.set(I,y),I.update())})(S),S.isRenderTargetTexture===!1&&S.isExternalTexture!==!0&&S.version>0&&U.__version!==S.version){let I=S.image;if(I===null)be("WebGLRenderer: Texture marked for update but no image data found.");else{if(I.complete!==!1)return void ae(U,S,M);be("WebGLRenderer: Texture marked for update but image is incomplete")}}else S.isExternalTexture&&(U.__webglTexture=S.sourceTexture?S.sourceTexture:null);t.bindTexture(r.TEXTURE_2D,U.__webglTexture,r.TEXTURE0+M)}let V={[is]:r.REPEAT,[Ei]:r.CLAMP_TO_EDGE,[ns]:r.MIRRORED_REPEAT},F={[Jt]:r.NEAREST,[Nc]:r.NEAREST_MIPMAP_NEAREST,[yr]:r.NEAREST_MIPMAP_LINEAR,[Pt]:r.LINEAR,[na]:r.LINEAR_MIPMAP_NEAREST,[Zi]:r.LINEAR_MIPMAP_LINEAR},Y={[Vc]:r.NEVER,[qc]:r.ALWAYS,[kc]:r.LESS,[Qo]:r.LEQUAL,[Hc]:r.EQUAL,[jc]:r.GEQUAL,[Wc]:r.GREATER,[Xc]:r.NOTEQUAL};function G(S,M){if(M.type!==ti||e.has("OES_texture_float_linear")!==!1||M.magFilter!==Pt&&M.magFilter!==na&&M.magFilter!==yr&&M.magFilter!==Zi&&M.minFilter!==Pt&&M.minFilter!==na&&M.minFilter!==yr&&M.minFilter!==Zi||be("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),r.texParameteri(S,r.TEXTURE_WRAP_S,V[M.wrapS]),r.texParameteri(S,r.TEXTURE_WRAP_T,V[M.wrapT]),S!==r.TEXTURE_3D&&S!==r.TEXTURE_2D_ARRAY||r.texParameteri(S,r.TEXTURE_WRAP_R,V[M.wrapR]),r.texParameteri(S,r.TEXTURE_MAG_FILTER,F[M.magFilter]),r.texParameteri(S,r.TEXTURE_MIN_FILTER,F[M.minFilter]),M.compareFunction&&(r.texParameteri(S,r.TEXTURE_COMPARE_MODE,r.COMPARE_REF_TO_TEXTURE),r.texParameteri(S,r.TEXTURE_COMPARE_FUNC,Y[M.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(M.magFilter===Jt||M.minFilter!==yr&&M.minFilter!==Zi||M.type===ti&&e.has("OES_texture_float_linear")===!1)return;if(M.anisotropy>1||i.get(M).__currentAnisotropy){let U=e.get("EXT_texture_filter_anisotropic");r.texParameterf(S,U.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(M.anisotropy,n.getMaxAnisotropy())),i.get(M).__currentAnisotropy=M.anisotropy}}}function Z(S,M){let U=!1;S.__webglInit===void 0&&(S.__webglInit=!0,M.addEventListener("dispose",b));let I=M.source,y=d.get(I);y===void 0&&(y={},d.set(I,y));let A=(function(N){let R=[];return R.push(N.wrapS),R.push(N.wrapT),R.push(N.wrapR||0),R.push(N.magFilter),R.push(N.minFilter),R.push(N.anisotropy),R.push(N.internalFormat),R.push(N.format),R.push(N.type),R.push(N.generateMipmaps),R.push(N.premultiplyAlpha),R.push(N.flipY),R.push(N.unpackAlignment),R.push(N.colorSpace),R.join()})(M);if(A!==S.__cacheKey){y[A]===void 0&&(y[A]={texture:r.createTexture(),usedTimes:0},a.memory.textures++,U=!0),y[A].usedTimes++;let N=y[S.__cacheKey];N!==void 0&&(y[S.__cacheKey].usedTimes--,N.usedTimes===0&&z(M)),S.__cacheKey=A,S.__webglTexture=y[A].texture}return U}function $(S,M,U){return Math.floor(Math.floor(S/U)/M)}function ae(S,M,U){let I=r.TEXTURE_2D;(M.isDataArrayTexture||M.isCompressedArrayTexture)&&(I=r.TEXTURE_2D_ARRAY),M.isData3DTexture&&(I=r.TEXTURE_3D);let y=Z(S,M),A=M.source;t.bindTexture(I,S.__webglTexture,r.TEXTURE0+U);let N=i.get(A);if(A.version!==N.__version||y===!0){t.activeTexture(r.TEXTURE0+U);let R=He.getPrimaries(He.workingColorSpace),W=M.colorSpace===$i?null:He.getPrimaries(M.colorSpace),O=M.colorSpace===$i||R===W?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,M.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,M.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,O);let H=x(M.image,!1,n.maxTextureSize);H=de(M,H);let j=s.convert(M.format,M.colorSpace),te=s.convert(M.type),ie,oe=_(M.internalFormat,j,te,M.colorSpace,M.isVideoTexture);G(I,M);let ge=M.mipmaps,ye=M.isVideoTexture!==!0,Ee=N.__version===void 0||y===!0,Pe=A.dataReady,Fe=E(M,H);if(M.isDepthTexture)oe=T(M.format===Sr,M.type),Ee&&(ye?t.texStorage2D(r.TEXTURE_2D,1,oe,H.width,H.height):t.texImage2D(r.TEXTURE_2D,0,oe,H.width,H.height,0,j,te,null));else if(M.isDataTexture)if(ge.length>0){ye&&Ee&&t.texStorage2D(r.TEXTURE_2D,Fe,oe,ge[0].width,ge[0].height);for(let me=0,Re=ge.length;me<Re;me++)ie=ge[me],ye?Pe&&t.texSubImage2D(r.TEXTURE_2D,me,0,0,ie.width,ie.height,j,te,ie.data):t.texImage2D(r.TEXTURE_2D,me,oe,ie.width,ie.height,0,j,te,ie.data);M.generateMipmaps=!1}else ye?(Ee&&t.texStorage2D(r.TEXTURE_2D,Fe,oe,H.width,H.height),Pe&&(function(me,Re,ze,qe){let ce=me.updateRanges;if(ce.length===0)t.texSubImage2D(r.TEXTURE_2D,0,0,0,Re.width,Re.height,ze,qe,Re.data);else{ce.sort((it,nt)=>it.start-nt.start);let We=0;for(let it=1;it<ce.length;it++){let nt=ce[We],P=ce[it],Li=nt.start+nt.count,Di=$(P.start,Re.width,4),Qe=$(nt.start,Re.width,4);P.start<=Li+1&&Di===Qe&&$(P.start+P.count-1,Re.width,4)===Di?nt.count=Math.max(nt.count,P.start+P.count-nt.start):(++We,ce[We]=P)}ce.length=We+1;let Xe=r.getParameter(r.UNPACK_ROW_LENGTH),rn=r.getParameter(r.UNPACK_SKIP_PIXELS),_t=r.getParameter(r.UNPACK_SKIP_ROWS);r.pixelStorei(r.UNPACK_ROW_LENGTH,Re.width);for(let it=0,nt=ce.length;it<nt;it++){let P=ce[it],Li=Math.floor(P.start/4),Di=Math.ceil(P.count/4),Qe=Li%Re.width,On=Math.floor(Li/Re.width),Ar=Di;r.pixelStorei(r.UNPACK_SKIP_PIXELS,Qe),r.pixelStorei(r.UNPACK_SKIP_ROWS,On),t.texSubImage2D(r.TEXTURE_2D,0,Qe,On,Ar,1,ze,qe,Re.data)}me.clearUpdateRanges(),r.pixelStorei(r.UNPACK_ROW_LENGTH,Xe),r.pixelStorei(r.UNPACK_SKIP_PIXELS,rn),r.pixelStorei(r.UNPACK_SKIP_ROWS,_t)}})(M,H,j,te)):t.texImage2D(r.TEXTURE_2D,0,oe,H.width,H.height,0,j,te,H.data);else if(M.isCompressedTexture)if(M.isCompressedArrayTexture){ye&&Ee&&t.texStorage3D(r.TEXTURE_2D_ARRAY,Fe,oe,ge[0].width,ge[0].height,H.depth);for(let me=0,Re=ge.length;me<Re;me++)if(ie=ge[me],M.format!==kt)if(j!==null)if(ye){if(Pe)if(M.layerUpdates.size>0){let ze=al(ie.width,ie.height,M.format,M.type);for(let qe of M.layerUpdates){let ce=ie.data.subarray(qe*ze/ie.data.BYTES_PER_ELEMENT,(qe+1)*ze/ie.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,me,0,0,qe,ie.width,ie.height,1,j,ce)}M.clearLayerUpdates()}else t.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,me,0,0,0,ie.width,ie.height,H.depth,j,ie.data)}else t.compressedTexImage3D(r.TEXTURE_2D_ARRAY,me,oe,ie.width,ie.height,H.depth,0,ie.data,0,0);else be("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else ye?Pe&&t.texSubImage3D(r.TEXTURE_2D_ARRAY,me,0,0,0,ie.width,ie.height,H.depth,j,te,ie.data):t.texImage3D(r.TEXTURE_2D_ARRAY,me,oe,ie.width,ie.height,H.depth,0,j,te,ie.data)}else{ye&&Ee&&t.texStorage2D(r.TEXTURE_2D,Fe,oe,ge[0].width,ge[0].height);for(let me=0,Re=ge.length;me<Re;me++)ie=ge[me],M.format!==kt?j!==null?ye?Pe&&t.compressedTexSubImage2D(r.TEXTURE_2D,me,0,0,ie.width,ie.height,j,ie.data):t.compressedTexImage2D(r.TEXTURE_2D,me,oe,ie.width,ie.height,0,ie.data):be("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):ye?Pe&&t.texSubImage2D(r.TEXTURE_2D,me,0,0,ie.width,ie.height,j,te,ie.data):t.texImage2D(r.TEXTURE_2D,me,oe,ie.width,ie.height,0,j,te,ie.data)}else if(M.isDataArrayTexture)if(ye){if(Ee&&t.texStorage3D(r.TEXTURE_2D_ARRAY,Fe,oe,H.width,H.height,H.depth),Pe)if(M.layerUpdates.size>0){let me=al(H.width,H.height,M.format,M.type);for(let Re of M.layerUpdates){let ze=H.data.subarray(Re*me/H.data.BYTES_PER_ELEMENT,(Re+1)*me/H.data.BYTES_PER_ELEMENT);t.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,Re,H.width,H.height,1,j,te,ze)}M.clearLayerUpdates()}else t.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,0,H.width,H.height,H.depth,j,te,H.data)}else t.texImage3D(r.TEXTURE_2D_ARRAY,0,oe,H.width,H.height,H.depth,0,j,te,H.data);else if(M.isData3DTexture)ye?(Ee&&t.texStorage3D(r.TEXTURE_3D,Fe,oe,H.width,H.height,H.depth),Pe&&t.texSubImage3D(r.TEXTURE_3D,0,0,0,0,H.width,H.height,H.depth,j,te,H.data)):t.texImage3D(r.TEXTURE_3D,0,oe,H.width,H.height,H.depth,0,j,te,H.data);else if(M.isFramebufferTexture){if(Ee)if(ye)t.texStorage2D(r.TEXTURE_2D,Fe,oe,H.width,H.height);else{let me=H.width,Re=H.height;for(let ze=0;ze<Fe;ze++)t.texImage2D(r.TEXTURE_2D,ze,oe,me,Re,0,j,te,null),me>>=1,Re>>=1}}else if(ge.length>0){if(ye&&Ee){let me=xe(ge[0]);t.texStorage2D(r.TEXTURE_2D,Fe,oe,me.width,me.height)}for(let me=0,Re=ge.length;me<Re;me++)ie=ge[me],ye?Pe&&t.texSubImage2D(r.TEXTURE_2D,me,0,0,j,te,ie):t.texImage2D(r.TEXTURE_2D,me,oe,j,te,ie);M.generateMipmaps=!1}else if(ye){if(Ee){let me=xe(H);t.texStorage2D(r.TEXTURE_2D,Fe,oe,me.width,me.height)}Pe&&t.texSubImage2D(r.TEXTURE_2D,0,0,0,j,te,H)}else t.texImage2D(r.TEXTURE_2D,0,oe,j,te,H);m(M)&&g(I),N.__version=A.version,M.onUpdate&&M.onUpdate(M)}S.__version=M.version}function ne(S,M,U,I,y,A){let N=s.convert(U.format,U.colorSpace),R=s.convert(U.type),W=_(U.internalFormat,N,R,U.colorSpace),O=i.get(M),H=i.get(U);if(H.__renderTarget=M,!O.__hasExternalTextures){let j=Math.max(1,M.width>>A),te=Math.max(1,M.height>>A);y===r.TEXTURE_3D||y===r.TEXTURE_2D_ARRAY?t.texImage3D(y,A,W,j,te,M.depth,0,N,R,null):t.texImage2D(y,A,W,j,te,0,N,R,null)}t.bindFramebuffer(r.FRAMEBUFFER,S),Q(M)?o.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,I,y,H.__webglTexture,0,K(M)):(y===r.TEXTURE_2D||y>=r.TEXTURE_CUBE_MAP_POSITIVE_X&&y<=r.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&r.framebufferTexture2D(r.FRAMEBUFFER,I,y,H.__webglTexture,A),t.bindFramebuffer(r.FRAMEBUFFER,null)}function he(S,M,U){if(r.bindRenderbuffer(r.RENDERBUFFER,S),M.depthBuffer){let I=M.depthTexture,y=I&&I.isDepthTexture?I.type:null,A=T(M.stencilBuffer,y),N=M.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,R=K(M);Q(M)?o.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,R,A,M.width,M.height):U?r.renderbufferStorageMultisample(r.RENDERBUFFER,R,A,M.width,M.height):r.renderbufferStorage(r.RENDERBUFFER,A,M.width,M.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,N,r.RENDERBUFFER,S)}else{let I=M.textures;for(let y=0;y<I.length;y++){let A=I[y],N=s.convert(A.format,A.colorSpace),R=s.convert(A.type),W=_(A.internalFormat,N,R,A.colorSpace),O=K(M);U&&Q(M)===!1?r.renderbufferStorageMultisample(r.RENDERBUFFER,O,W,M.width,M.height):Q(M)?o.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,O,W,M.width,M.height):r.renderbufferStorage(r.RENDERBUFFER,W,M.width,M.height)}}r.bindRenderbuffer(r.RENDERBUFFER,null)}function ue(S,M){if(M&&M.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(r.FRAMEBUFFER,S),!M.depthTexture||!M.depthTexture.isDepthTexture)throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");let U=i.get(M.depthTexture);U.__renderTarget=M,U.__webglTexture&&M.depthTexture.image.width===M.width&&M.depthTexture.image.height===M.height||(M.depthTexture.image.width=M.width,M.depthTexture.image.height=M.height,M.depthTexture.needsUpdate=!0),B(M.depthTexture,0);let I=U.__webglTexture,y=K(M);if(M.depthTexture.format===Mr)Q(M)?o.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,I,0,y):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,I,0);else{if(M.depthTexture.format!==Sr)throw new Error("Unknown depthTexture format");Q(M)?o.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,I,0,y):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,I,0)}}function ve(S){let M=i.get(S),U=S.isWebGLCubeRenderTarget===!0;if(M.__boundDepthTexture!==S.depthTexture){let I=S.depthTexture;if(M.__depthDisposeCallback&&M.__depthDisposeCallback(),I){let y=()=>{delete M.__boundDepthTexture,delete M.__depthDisposeCallback,I.removeEventListener("dispose",y)};I.addEventListener("dispose",y),M.__depthDisposeCallback=y}M.__boundDepthTexture=I}if(S.depthTexture&&!M.__autoAllocateDepthBuffer){if(U)throw new Error("target.depthTexture not supported in Cube render targets");let I=S.texture.mipmaps;I&&I.length>0?ue(M.__webglFramebuffer[0],S):ue(M.__webglFramebuffer,S)}else if(U){M.__webglDepthbuffer=[];for(let I=0;I<6;I++)if(t.bindFramebuffer(r.FRAMEBUFFER,M.__webglFramebuffer[I]),M.__webglDepthbuffer[I]===void 0)M.__webglDepthbuffer[I]=r.createRenderbuffer(),he(M.__webglDepthbuffer[I],S,!1);else{let y=S.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,A=M.__webglDepthbuffer[I];r.bindRenderbuffer(r.RENDERBUFFER,A),r.framebufferRenderbuffer(r.FRAMEBUFFER,y,r.RENDERBUFFER,A)}}else{let I=S.texture.mipmaps;if(I&&I.length>0?t.bindFramebuffer(r.FRAMEBUFFER,M.__webglFramebuffer[0]):t.bindFramebuffer(r.FRAMEBUFFER,M.__webglFramebuffer),M.__webglDepthbuffer===void 0)M.__webglDepthbuffer=r.createRenderbuffer(),he(M.__webglDepthbuffer,S,!1);else{let y=S.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,A=M.__webglDepthbuffer;r.bindRenderbuffer(r.RENDERBUFFER,A),r.framebufferRenderbuffer(r.FRAMEBUFFER,y,r.RENDERBUFFER,A)}}t.bindFramebuffer(r.FRAMEBUFFER,null)}let Se=[],J=[];function K(S){return Math.min(n.maxSamples,S.samples)}function Q(S){let M=i.get(S);return S.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&M.__useRenderToTexture!==!1}function de(S,M){let U=S.colorSpace,I=S.format,y=S.type;return S.isCompressedTexture===!0||S.isVideoTexture===!0||U!==ui&&U!==$i&&(He.getTransfer(U)===je?I===kt&&y===gi||be("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Oe("WebGLTextures: Unsupported texture color space:",U)),M}function xe(S){return typeof HTMLImageElement<"u"&&S instanceof HTMLImageElement?(l.width=S.naturalWidth||S.width,l.height=S.naturalHeight||S.height):typeof VideoFrame<"u"&&S instanceof VideoFrame?(l.width=S.displayWidth,l.height=S.displayHeight):(l.width=S.width,l.height=S.height),l}this.allocateTextureUnit=function(){let S=L;return S>=n.maxTextures&&be("WebGLTextures: Trying to use "+S+" texture units while this GPU supports only "+n.maxTextures),L+=1,S},this.resetTextureUnits=function(){L=0},this.setTexture2D=B,this.setTexture2DArray=function(S,M){let U=i.get(S);S.isRenderTargetTexture===!1&&S.version>0&&U.__version!==S.version?ae(U,S,M):(S.isExternalTexture&&(U.__webglTexture=S.sourceTexture?S.sourceTexture:null),t.bindTexture(r.TEXTURE_2D_ARRAY,U.__webglTexture,r.TEXTURE0+M))},this.setTexture3D=function(S,M){let U=i.get(S);S.isRenderTargetTexture===!1&&S.version>0&&U.__version!==S.version?ae(U,S,M):t.bindTexture(r.TEXTURE_3D,U.__webglTexture,r.TEXTURE0+M)},this.setTextureCube=function(S,M){let U=i.get(S);S.version>0&&U.__version!==S.version?(function(I,y,A){if(y.image.length!==6)return;let N=Z(I,y),R=y.source;t.bindTexture(r.TEXTURE_CUBE_MAP,I.__webglTexture,r.TEXTURE0+A);let W=i.get(R);if(R.version!==W.__version||N===!0){t.activeTexture(r.TEXTURE0+A);let O=He.getPrimaries(He.workingColorSpace),H=y.colorSpace===$i?null:He.getPrimaries(y.colorSpace),j=y.colorSpace===$i||O===H?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,y.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,y.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,j);let te=y.isCompressedTexture||y.image[0].isCompressedTexture,ie=y.image[0]&&y.image[0].isDataTexture,oe=[];for(let ce=0;ce<6;ce++)oe[ce]=te||ie?ie?y.image[ce].image:y.image[ce]:x(y.image[ce],!0,n.maxCubemapSize),oe[ce]=de(y,oe[ce]);let ge=oe[0],ye=s.convert(y.format,y.colorSpace),Ee=s.convert(y.type),Pe=_(y.internalFormat,ye,Ee,y.colorSpace),Fe=y.isVideoTexture!==!0,me=W.__version===void 0||N===!0,Re=R.dataReady,ze,qe=E(y,ge);if(G(r.TEXTURE_CUBE_MAP,y),te){Fe&&me&&t.texStorage2D(r.TEXTURE_CUBE_MAP,qe,Pe,ge.width,ge.height);for(let ce=0;ce<6;ce++){ze=oe[ce].mipmaps;for(let We=0;We<ze.length;We++){let Xe=ze[We];y.format!==kt?ye!==null?Fe?Re&&t.compressedTexSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ce,We,0,0,Xe.width,Xe.height,ye,Xe.data):t.compressedTexImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ce,We,Pe,Xe.width,Xe.height,0,Xe.data):be("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Fe?Re&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ce,We,0,0,Xe.width,Xe.height,ye,Ee,Xe.data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ce,We,Pe,Xe.width,Xe.height,0,ye,Ee,Xe.data)}}}else{if(ze=y.mipmaps,Fe&&me){ze.length>0&&qe++;let ce=xe(oe[0]);t.texStorage2D(r.TEXTURE_CUBE_MAP,qe,Pe,ce.width,ce.height)}for(let ce=0;ce<6;ce++)if(ie){Fe?Re&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ce,0,0,0,oe[ce].width,oe[ce].height,ye,Ee,oe[ce].data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ce,0,Pe,oe[ce].width,oe[ce].height,0,ye,Ee,oe[ce].data);for(let We=0;We<ze.length;We++){let Xe=ze[We].image[ce].image;Fe?Re&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ce,We+1,0,0,Xe.width,Xe.height,ye,Ee,Xe.data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ce,We+1,Pe,Xe.width,Xe.height,0,ye,Ee,Xe.data)}}else{Fe?Re&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ce,0,0,0,ye,Ee,oe[ce]):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ce,0,Pe,ye,Ee,oe[ce]);for(let We=0;We<ze.length;We++){let Xe=ze[We];Fe?Re&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ce,We+1,0,0,ye,Ee,Xe.image[ce]):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ce,We+1,Pe,ye,Ee,Xe.image[ce])}}}m(y)&&g(r.TEXTURE_CUBE_MAP),W.__version=R.version,y.onUpdate&&y.onUpdate(y)}I.__version=y.version})(U,S,M):t.bindTexture(r.TEXTURE_CUBE_MAP,U.__webglTexture,r.TEXTURE0+M)},this.rebindTextures=function(S,M,U){let I=i.get(S);M!==void 0&&ne(I.__webglFramebuffer,S,S.texture,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,0),U!==void 0&&ve(S)},this.setupRenderTarget=function(S){let M=S.texture,U=i.get(S),I=i.get(M);S.addEventListener("dispose",D);let y=S.textures,A=S.isWebGLCubeRenderTarget===!0,N=y.length>1;if(N||(I.__webglTexture===void 0&&(I.__webglTexture=r.createTexture()),I.__version=M.version,a.memory.textures++),A){U.__webglFramebuffer=[];for(let R=0;R<6;R++)if(M.mipmaps&&M.mipmaps.length>0){U.__webglFramebuffer[R]=[];for(let W=0;W<M.mipmaps.length;W++)U.__webglFramebuffer[R][W]=r.createFramebuffer()}else U.__webglFramebuffer[R]=r.createFramebuffer()}else{if(M.mipmaps&&M.mipmaps.length>0){U.__webglFramebuffer=[];for(let R=0;R<M.mipmaps.length;R++)U.__webglFramebuffer[R]=r.createFramebuffer()}else U.__webglFramebuffer=r.createFramebuffer();if(N)for(let R=0,W=y.length;R<W;R++){let O=i.get(y[R]);O.__webglTexture===void 0&&(O.__webglTexture=r.createTexture(),a.memory.textures++)}if(S.samples>0&&Q(S)===!1){U.__webglMultisampledFramebuffer=r.createFramebuffer(),U.__webglColorRenderbuffer=[],t.bindFramebuffer(r.FRAMEBUFFER,U.__webglMultisampledFramebuffer);for(let R=0;R<y.length;R++){let W=y[R];U.__webglColorRenderbuffer[R]=r.createRenderbuffer(),r.bindRenderbuffer(r.RENDERBUFFER,U.__webglColorRenderbuffer[R]);let O=s.convert(W.format,W.colorSpace),H=s.convert(W.type),j=_(W.internalFormat,O,H,W.colorSpace,S.isXRRenderTarget===!0),te=K(S);r.renderbufferStorageMultisample(r.RENDERBUFFER,te,j,S.width,S.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+R,r.RENDERBUFFER,U.__webglColorRenderbuffer[R])}r.bindRenderbuffer(r.RENDERBUFFER,null),S.depthBuffer&&(U.__webglDepthRenderbuffer=r.createRenderbuffer(),he(U.__webglDepthRenderbuffer,S,!0)),t.bindFramebuffer(r.FRAMEBUFFER,null)}}if(A){t.bindTexture(r.TEXTURE_CUBE_MAP,I.__webglTexture),G(r.TEXTURE_CUBE_MAP,M);for(let R=0;R<6;R++)if(M.mipmaps&&M.mipmaps.length>0)for(let W=0;W<M.mipmaps.length;W++)ne(U.__webglFramebuffer[R][W],S,M,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+R,W);else ne(U.__webglFramebuffer[R],S,M,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+R,0);m(M)&&g(r.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(N){for(let R=0,W=y.length;R<W;R++){let O=y[R],H=i.get(O),j=r.TEXTURE_2D;(S.isWebGL3DRenderTarget||S.isWebGLArrayRenderTarget)&&(j=S.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),t.bindTexture(j,H.__webglTexture),G(j,O),ne(U.__webglFramebuffer,S,O,r.COLOR_ATTACHMENT0+R,j,0),m(O)&&g(j)}t.unbindTexture()}else{let R=r.TEXTURE_2D;if((S.isWebGL3DRenderTarget||S.isWebGLArrayRenderTarget)&&(R=S.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),t.bindTexture(R,I.__webglTexture),G(R,M),M.mipmaps&&M.mipmaps.length>0)for(let W=0;W<M.mipmaps.length;W++)ne(U.__webglFramebuffer[W],S,M,r.COLOR_ATTACHMENT0,R,W);else ne(U.__webglFramebuffer,S,M,r.COLOR_ATTACHMENT0,R,0);m(M)&&g(R),t.unbindTexture()}S.depthBuffer&&ve(S)},this.updateRenderTargetMipmap=function(S){let M=S.textures;for(let U=0,I=M.length;U<I;U++){let y=M[U];if(m(y)){let A=v(S),N=i.get(y).__webglTexture;t.bindTexture(A,N),g(A),t.unbindTexture()}}},this.updateMultisampleRenderTarget=function(S){if(S.samples>0){if(Q(S)===!1){let M=S.textures,U=S.width,I=S.height,y=r.COLOR_BUFFER_BIT,A=S.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,N=i.get(S),R=M.length>1;if(R)for(let O=0;O<M.length;O++)t.bindFramebuffer(r.FRAMEBUFFER,N.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+O,r.RENDERBUFFER,null),t.bindFramebuffer(r.FRAMEBUFFER,N.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+O,r.TEXTURE_2D,null,0);t.bindFramebuffer(r.READ_FRAMEBUFFER,N.__webglMultisampledFramebuffer);let W=S.texture.mipmaps;W&&W.length>0?t.bindFramebuffer(r.DRAW_FRAMEBUFFER,N.__webglFramebuffer[0]):t.bindFramebuffer(r.DRAW_FRAMEBUFFER,N.__webglFramebuffer);for(let O=0;O<M.length;O++){if(S.resolveDepthBuffer&&(S.depthBuffer&&(y|=r.DEPTH_BUFFER_BIT),S.stencilBuffer&&S.resolveStencilBuffer&&(y|=r.STENCIL_BUFFER_BIT)),R){r.framebufferRenderbuffer(r.READ_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.RENDERBUFFER,N.__webglColorRenderbuffer[O]);let H=i.get(M[O]).__webglTexture;r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,H,0)}r.blitFramebuffer(0,0,U,I,0,0,U,I,y,r.NEAREST),c===!0&&(Se.length=0,J.length=0,Se.push(r.COLOR_ATTACHMENT0+O),S.depthBuffer&&S.resolveDepthBuffer===!1&&(Se.push(A),J.push(A),r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,J)),r.invalidateFramebuffer(r.READ_FRAMEBUFFER,Se))}if(t.bindFramebuffer(r.READ_FRAMEBUFFER,null),t.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),R)for(let O=0;O<M.length;O++){t.bindFramebuffer(r.FRAMEBUFFER,N.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+O,r.RENDERBUFFER,N.__webglColorRenderbuffer[O]);let H=i.get(M[O]).__webglTexture;t.bindFramebuffer(r.FRAMEBUFFER,N.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+O,r.TEXTURE_2D,H,0)}t.bindFramebuffer(r.DRAW_FRAMEBUFFER,N.__webglMultisampledFramebuffer)}else if(S.depthBuffer&&S.resolveDepthBuffer===!1&&c){let M=S.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,[M])}}},this.setupDepthRenderbuffer=ve,this.setupFrameBufferTexture=ne,this.useMultisampledRTT=Q}function jd(r,e){return{convert:function(t,i=$i){let n,s=He.getTransfer(i);if(t===gi)return r.UNSIGNED_BYTE;if(t===sa)return r.UNSIGNED_SHORT_4_4_4_4;if(t===aa)return r.UNSIGNED_SHORT_5_5_5_1;if(t===xo)return r.UNSIGNED_INT_5_9_9_9_REV;if(t===yo)return r.UNSIGNED_INT_10F_11F_11F_REV;if(t===vo)return r.BYTE;if(t===_o)return r.SHORT;if(t===Pn)return r.UNSIGNED_SHORT;if(t===ra)return r.INT;if(t===Ji)return r.UNSIGNED_INT;if(t===ti)return r.FLOAT;if(t===Ki)return r.HALF_FLOAT;if(t===Fc)return r.ALPHA;if(t===Oc)return r.RGB;if(t===kt)return r.RGBA;if(t===Mr)return r.DEPTH_COMPONENT;if(t===Sr)return r.DEPTH_STENCIL;if(t===Mo)return r.RED;if(t===oa)return r.RED_INTEGER;if(t===So)return r.RG;if(t===bo)return r.RG_INTEGER;if(t===To)return r.RGBA_INTEGER;if(t===la||t===ca||t===ha||t===ua)if(s===je){if(n=e.get("WEBGL_compressed_texture_s3tc_srgb"),n===null)return null;if(t===la)return n.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(t===ca)return n.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(t===ha)return n.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(t===ua)return n.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else{if(n=e.get("WEBGL_compressed_texture_s3tc"),n===null)return null;if(t===la)return n.COMPRESSED_RGB_S3TC_DXT1_EXT;if(t===ca)return n.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(t===ha)return n.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(t===ua)return n.COMPRESSED_RGBA_S3TC_DXT5_EXT}if(t===wo||t===Ao||t===Eo||t===Co){if(n=e.get("WEBGL_compressed_texture_pvrtc"),n===null)return null;if(t===wo)return n.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(t===Ao)return n.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(t===Eo)return n.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(t===Co)return n.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}if(t===Ro||t===Io||t===Po){if(n=e.get("WEBGL_compressed_texture_etc"),n===null)return null;if(t===Ro||t===Io)return s===je?n.COMPRESSED_SRGB8_ETC2:n.COMPRESSED_RGB8_ETC2;if(t===Po)return s===je?n.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:n.COMPRESSED_RGBA8_ETC2_EAC}if(t===Lo||t===Do||t===Uo||t===No||t===Fo||t===Oo||t===Bo||t===zo||t===Go||t===Vo||t===ko||t===Ho||t===Wo||t===Xo){if(n=e.get("WEBGL_compressed_texture_astc"),n===null)return null;if(t===Lo)return s===je?n.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:n.COMPRESSED_RGBA_ASTC_4x4_KHR;if(t===Do)return s===je?n.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:n.COMPRESSED_RGBA_ASTC_5x4_KHR;if(t===Uo)return s===je?n.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:n.COMPRESSED_RGBA_ASTC_5x5_KHR;if(t===No)return s===je?n.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:n.COMPRESSED_RGBA_ASTC_6x5_KHR;if(t===Fo)return s===je?n.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:n.COMPRESSED_RGBA_ASTC_6x6_KHR;if(t===Oo)return s===je?n.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:n.COMPRESSED_RGBA_ASTC_8x5_KHR;if(t===Bo)return s===je?n.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:n.COMPRESSED_RGBA_ASTC_8x6_KHR;if(t===zo)return s===je?n.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:n.COMPRESSED_RGBA_ASTC_8x8_KHR;if(t===Go)return s===je?n.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:n.COMPRESSED_RGBA_ASTC_10x5_KHR;if(t===Vo)return s===je?n.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:n.COMPRESSED_RGBA_ASTC_10x6_KHR;if(t===ko)return s===je?n.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:n.COMPRESSED_RGBA_ASTC_10x8_KHR;if(t===Ho)return s===je?n.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:n.COMPRESSED_RGBA_ASTC_10x10_KHR;if(t===Wo)return s===je?n.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:n.COMPRESSED_RGBA_ASTC_12x10_KHR;if(t===Xo)return s===je?n.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:n.COMPRESSED_RGBA_ASTC_12x12_KHR}if(t===jo||t===qo||t===Yo){if(n=e.get("EXT_texture_compression_bptc"),n===null)return null;if(t===jo)return s===je?n.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:n.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(t===qo)return n.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(t===Yo)return n.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}if(t===Zo||t===Jo||t===Ko||t===$o){if(n=e.get("EXT_texture_compression_rgtc"),n===null)return null;if(t===Zo)return n.COMPRESSED_RED_RGTC1_EXT;if(t===Jo)return n.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(t===Ko)return n.COMPRESSED_RED_GREEN_RGTC2_EXT;if(t===$o)return n.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}return t===Ln?r.UNSIGNED_INT_24_8:r[t]!==void 0?r[t]:null}}}var _l=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){let i=new sr(e.texture);e.depthNear===t.depthNear&&e.depthFar===t.depthFar||(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,i=new mt({vertexShader:`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,fragmentShader:`
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

}`,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new ut(new Ii(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},xl=class extends pi{constructor(e,t){super();let i=this,n=null,s=1,a=null,o="local-floor",c=1,l=null,h=null,u=null,d=null,p=null,f=null,x=typeof XRWebGLBinding<"u",m=new _l,g={},v=t.getContextAttributes(),_=null,T=null,E=[],b=[],D=new re,z=null,L=new yt;L.viewport=new Ke;let B=new yt;B.viewport=new Ke;let V=[L,B],F=new qs,Y=null,G=null;function Z(J){let K=b.indexOf(J.inputSource);if(K===-1)return;let Q=E[K];Q!==void 0&&(Q.update(J.inputSource,J.frame,l||a),Q.dispatchEvent({type:J.type,data:J.inputSource}))}function $(){n.removeEventListener("select",Z),n.removeEventListener("selectstart",Z),n.removeEventListener("selectend",Z),n.removeEventListener("squeeze",Z),n.removeEventListener("squeezestart",Z),n.removeEventListener("squeezeend",Z),n.removeEventListener("end",$),n.removeEventListener("inputsourceschange",ae);for(let J=0;J<E.length;J++){let K=b[J];K!==null&&(b[J]=null,E[J].disconnect(K))}Y=null,G=null,m.reset();for(let J in g)delete g[J];e.setRenderTarget(_),p=null,d=null,u=null,n=null,T=null,Se.stop(),i.isPresenting=!1,e.setPixelRatio(z),e.setSize(D.width,D.height,!1),i.dispatchEvent({type:"sessionend"})}function ae(J){for(let K=0;K<J.removed.length;K++){let Q=J.removed[K],de=b.indexOf(Q);de>=0&&(b[de]=null,E[de].disconnect(Q))}for(let K=0;K<J.added.length;K++){let Q=J.added[K],de=b.indexOf(Q);if(de===-1){for(let S=0;S<E.length;S++){if(S>=b.length){b.push(Q),de=S;break}if(b[S]===null){b[S]=Q,de=S;break}}if(de===-1)break}let xe=E[de];xe&&xe.connect(Q)}}this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(J){let K=E[J];return K===void 0&&(K=new bn,E[J]=K),K.getTargetRaySpace()},this.getControllerGrip=function(J){let K=E[J];return K===void 0&&(K=new bn,E[J]=K),K.getGripSpace()},this.getHand=function(J){let K=E[J];return K===void 0&&(K=new bn,E[J]=K),K.getHandSpace()},this.setFramebufferScaleFactor=function(J){s=J,i.isPresenting===!0&&be("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(J){o=J,i.isPresenting===!0&&be("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||a},this.setReferenceSpace=function(J){l=J},this.getBaseLayer=function(){return d!==null?d:p},this.getBinding=function(){return u===null&&x&&(u=new XRWebGLBinding(n,t)),u},this.getFrame=function(){return f},this.getSession=function(){return n},this.setSession=async function(J){if(n=J,n!==null){if(_=e.getRenderTarget(),n.addEventListener("select",Z),n.addEventListener("selectstart",Z),n.addEventListener("selectend",Z),n.addEventListener("squeeze",Z),n.addEventListener("squeezestart",Z),n.addEventListener("squeezeend",Z),n.addEventListener("end",$),n.addEventListener("inputsourceschange",ae),v.xrCompatible!==!0&&await t.makeXRCompatible(),z=e.getPixelRatio(),e.getSize(D),x&&"createProjectionLayer"in XRWebGLBinding.prototype){let K=null,Q=null,de=null;v.depth&&(de=v.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,K=v.stencil?Sr:Mr,Q=v.stencil?Ln:Ji);let xe={colorFormat:t.RGBA8,depthFormat:de,scaleFactor:s};u=this.getBinding(),d=u.createProjectionLayer(xe),n.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),T=new Kt(d.textureWidth,d.textureHeight,{format:kt,type:gi,depthTexture:new rr(d.textureWidth,d.textureHeight,Q,void 0,void 0,void 0,void 0,void 0,void 0,K),stencilBuffer:v.stencil,colorSpace:e.outputColorSpace,samples:v.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1})}else{let K={antialias:v.antialias,alpha:!0,depth:v.depth,stencil:v.stencil,framebufferScaleFactor:s};p=new XRWebGLLayer(n,t,K),n.updateRenderState({baseLayer:p}),e.setPixelRatio(1),e.setSize(p.framebufferWidth,p.framebufferHeight,!1),T=new Kt(p.framebufferWidth,p.framebufferHeight,{format:kt,type:gi,colorSpace:e.outputColorSpace,stencilBuffer:v.stencil,resolveDepthBuffer:p.ignoreDepthValues===!1,resolveStencilBuffer:p.ignoreDepthValues===!1})}T.isXRRenderTarget=!0,this.setFoveation(c),l=null,a=await n.requestReferenceSpace(o),Se.setContext(n),Se.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(n!==null)return n.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};let ne=new C,he=new C;function ue(J,K){K===null?J.matrixWorld.copy(J.matrix):J.matrixWorld.multiplyMatrices(K.matrixWorld,J.matrix),J.matrixWorldInverse.copy(J.matrixWorld).invert()}this.updateCamera=function(J){if(n===null)return;let K=J.near,Q=J.far;m.texture!==null&&(m.depthNear>0&&(K=m.depthNear),m.depthFar>0&&(Q=m.depthFar)),F.near=B.near=L.near=K,F.far=B.far=L.far=Q,Y===F.near&&G===F.far||(n.updateRenderState({depthNear:F.near,depthFar:F.far}),Y=F.near,G=F.far),F.layers.mask=6|J.layers.mask,L.layers.mask=3&F.layers.mask,B.layers.mask=5&F.layers.mask;let de=J.parent,xe=F.cameras;ue(F,de);for(let S=0;S<xe.length;S++)ue(xe[S],de);xe.length===2?(function(S,M,U){ne.setFromMatrixPosition(M.matrixWorld),he.setFromMatrixPosition(U.matrixWorld);let I=ne.distanceTo(he),y=M.projectionMatrix.elements,A=U.projectionMatrix.elements,N=y[14]/(y[10]-1),R=y[14]/(y[10]+1),W=(y[9]+1)/y[5],O=(y[9]-1)/y[5],H=(y[8]-1)/y[0],j=(A[8]+1)/A[0],te=N*H,ie=N*j,oe=I/(-H+j),ge=oe*-H;if(M.matrixWorld.decompose(S.position,S.quaternion,S.scale),S.translateX(ge),S.translateZ(oe),S.matrixWorld.compose(S.position,S.quaternion,S.scale),S.matrixWorldInverse.copy(S.matrixWorld).invert(),y[10]===-1)S.projectionMatrix.copy(M.projectionMatrix),S.projectionMatrixInverse.copy(M.projectionMatrixInverse);else{let ye=N+oe,Ee=R+oe,Pe=te-ge,Fe=ie+(I-ge),me=W*R/Ee*ye,Re=O*R/Ee*ye;S.projectionMatrix.makePerspective(Pe,Fe,me,Re,ye,Ee),S.projectionMatrixInverse.copy(S.projectionMatrix).invert()}})(F,L,B):F.projectionMatrix.copy(L.projectionMatrix),(function(S,M,U){U===null?S.matrix.copy(M.matrixWorld):(S.matrix.copy(U.matrixWorld),S.matrix.invert(),S.matrix.multiply(M.matrixWorld)),S.matrix.decompose(S.position,S.quaternion,S.scale),S.updateMatrixWorld(!0),S.projectionMatrix.copy(M.projectionMatrix),S.projectionMatrixInverse.copy(M.projectionMatrixInverse),S.isPerspectiveCamera&&(S.fov=2*ss*Math.atan(1/S.projectionMatrix.elements[5]),S.zoom=1)})(J,F,de)},this.getCamera=function(){return F},this.getFoveation=function(){if(d!==null||p!==null)return c},this.setFoveation=function(J){c=J,d!==null&&(d.fixedFoveation=J),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=J)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(F)},this.getCameraTexture=function(J){return g[J]};let ve=null,Se=new Th;Se.setAnimationLoop(function(J,K){if(h=K.getViewerPose(l||a),f=K,h!==null){let Q=h.views;p!==null&&(e.setRenderTargetFramebuffer(T,p.framebuffer),e.setRenderTarget(T));let de=!1;Q.length!==F.cameras.length&&(F.cameras.length=0,de=!0);for(let S=0;S<Q.length;S++){let M=Q[S],U=null;if(p!==null)U=p.getViewport(M);else{let y=u.getViewSubImage(d,M);U=y.viewport,S===0&&(e.setRenderTargetTextures(T,y.colorTexture,y.depthStencilTexture),e.setRenderTarget(T))}let I=V[S];I===void 0&&(I=new yt,I.layers.enable(S),I.viewport=new Ke,V[S]=I),I.matrix.fromArray(M.transform.matrix),I.matrix.decompose(I.position,I.quaternion,I.scale),I.projectionMatrix.fromArray(M.projectionMatrix),I.projectionMatrixInverse.copy(I.projectionMatrix).invert(),I.viewport.set(U.x,U.y,U.width,U.height),S===0&&(F.matrix.copy(I.matrix),F.matrix.decompose(F.position,F.quaternion,F.scale)),de===!0&&F.cameras.push(I)}let xe=n.enabledFeatures;if(xe&&xe.includes("depth-sensing")&&n.depthUsage=="gpu-optimized"&&x){u=i.getBinding();let S=u.getDepthInformation(Q[0]);S&&S.isValid&&S.texture&&m.init(S,n.renderState)}if(xe&&xe.includes("camera-access")&&x){e.state.unbindTexture(),u=i.getBinding();for(let S=0;S<Q.length;S++){let M=Q[S].camera;if(M){let U=g[M];U||(U=new sr,g[M]=U);let I=u.getCameraImage(M);U.sourceTexture=I}}}}for(let Q=0;Q<E.length;Q++){let de=b[Q],xe=E[Q];de!==null&&xe!==void 0&&xe.update(de,K,l||a)}ve&&ve(J,K),K.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:K}),f=null}),this.setAnimationLoop=function(J){ve=J},this.dispose=function(){}}},tn=new $t,qd=new Le;function Yd(r,e){function t(n,s){n.matrixAutoUpdate===!0&&n.updateMatrix(),s.value.copy(n.matrix)}function i(n,s){n.opacity.value=s.opacity,s.color&&n.diffuse.value.copy(s.color),s.emissive&&n.emissive.value.copy(s.emissive).multiplyScalar(s.emissiveIntensity),s.map&&(n.map.value=s.map,t(s.map,n.mapTransform)),s.alphaMap&&(n.alphaMap.value=s.alphaMap,t(s.alphaMap,n.alphaMapTransform)),s.bumpMap&&(n.bumpMap.value=s.bumpMap,t(s.bumpMap,n.bumpMapTransform),n.bumpScale.value=s.bumpScale,s.side===Et&&(n.bumpScale.value*=-1)),s.normalMap&&(n.normalMap.value=s.normalMap,t(s.normalMap,n.normalMapTransform),n.normalScale.value.copy(s.normalScale),s.side===Et&&n.normalScale.value.negate()),s.displacementMap&&(n.displacementMap.value=s.displacementMap,t(s.displacementMap,n.displacementMapTransform),n.displacementScale.value=s.displacementScale,n.displacementBias.value=s.displacementBias),s.emissiveMap&&(n.emissiveMap.value=s.emissiveMap,t(s.emissiveMap,n.emissiveMapTransform)),s.specularMap&&(n.specularMap.value=s.specularMap,t(s.specularMap,n.specularMapTransform)),s.alphaTest>0&&(n.alphaTest.value=s.alphaTest);let a=e.get(s),o=a.envMap,c=a.envMapRotation;o&&(n.envMap.value=o,tn.copy(c),tn.x*=-1,tn.y*=-1,tn.z*=-1,o.isCubeTexture&&o.isRenderTargetTexture===!1&&(tn.y*=-1,tn.z*=-1),n.envMapRotation.value.setFromMatrix4(qd.makeRotationFromEuler(tn)),n.flipEnvMap.value=o.isCubeTexture&&o.isRenderTargetTexture===!1?-1:1,n.reflectivity.value=s.reflectivity,n.ior.value=s.ior,n.refractionRatio.value=s.refractionRatio),s.lightMap&&(n.lightMap.value=s.lightMap,n.lightMapIntensity.value=s.lightMapIntensity,t(s.lightMap,n.lightMapTransform)),s.aoMap&&(n.aoMap.value=s.aoMap,n.aoMapIntensity.value=s.aoMapIntensity,t(s.aoMap,n.aoMapTransform))}return{refreshFogUniforms:function(n,s){s.color.getRGB(n.fogColor.value,nl(r)),s.isFog?(n.fogNear.value=s.near,n.fogFar.value=s.far):s.isFogExp2&&(n.fogDensity.value=s.density)},refreshMaterialUniforms:function(n,s,a,o,c){s.isMeshBasicMaterial||s.isMeshLambertMaterial?i(n,s):s.isMeshToonMaterial?(i(n,s),(function(l,h){h.gradientMap&&(l.gradientMap.value=h.gradientMap)})(n,s)):s.isMeshPhongMaterial?(i(n,s),(function(l,h){l.specular.value.copy(h.specular),l.shininess.value=Math.max(h.shininess,1e-4)})(n,s)):s.isMeshStandardMaterial?(i(n,s),(function(l,h){l.metalness.value=h.metalness,h.metalnessMap&&(l.metalnessMap.value=h.metalnessMap,t(h.metalnessMap,l.metalnessMapTransform)),l.roughness.value=h.roughness,h.roughnessMap&&(l.roughnessMap.value=h.roughnessMap,t(h.roughnessMap,l.roughnessMapTransform)),h.envMap&&(l.envMapIntensity.value=h.envMapIntensity)})(n,s),s.isMeshPhysicalMaterial&&(function(l,h,u){l.ior.value=h.ior,h.sheen>0&&(l.sheenColor.value.copy(h.sheenColor).multiplyScalar(h.sheen),l.sheenRoughness.value=h.sheenRoughness,h.sheenColorMap&&(l.sheenColorMap.value=h.sheenColorMap,t(h.sheenColorMap,l.sheenColorMapTransform)),h.sheenRoughnessMap&&(l.sheenRoughnessMap.value=h.sheenRoughnessMap,t(h.sheenRoughnessMap,l.sheenRoughnessMapTransform))),h.clearcoat>0&&(l.clearcoat.value=h.clearcoat,l.clearcoatRoughness.value=h.clearcoatRoughness,h.clearcoatMap&&(l.clearcoatMap.value=h.clearcoatMap,t(h.clearcoatMap,l.clearcoatMapTransform)),h.clearcoatRoughnessMap&&(l.clearcoatRoughnessMap.value=h.clearcoatRoughnessMap,t(h.clearcoatRoughnessMap,l.clearcoatRoughnessMapTransform)),h.clearcoatNormalMap&&(l.clearcoatNormalMap.value=h.clearcoatNormalMap,t(h.clearcoatNormalMap,l.clearcoatNormalMapTransform),l.clearcoatNormalScale.value.copy(h.clearcoatNormalScale),h.side===Et&&l.clearcoatNormalScale.value.negate())),h.dispersion>0&&(l.dispersion.value=h.dispersion),h.iridescence>0&&(l.iridescence.value=h.iridescence,l.iridescenceIOR.value=h.iridescenceIOR,l.iridescenceThicknessMinimum.value=h.iridescenceThicknessRange[0],l.iridescenceThicknessMaximum.value=h.iridescenceThicknessRange[1],h.iridescenceMap&&(l.iridescenceMap.value=h.iridescenceMap,t(h.iridescenceMap,l.iridescenceMapTransform)),h.iridescenceThicknessMap&&(l.iridescenceThicknessMap.value=h.iridescenceThicknessMap,t(h.iridescenceThicknessMap,l.iridescenceThicknessMapTransform))),h.transmission>0&&(l.transmission.value=h.transmission,l.transmissionSamplerMap.value=u.texture,l.transmissionSamplerSize.value.set(u.width,u.height),h.transmissionMap&&(l.transmissionMap.value=h.transmissionMap,t(h.transmissionMap,l.transmissionMapTransform)),l.thickness.value=h.thickness,h.thicknessMap&&(l.thicknessMap.value=h.thicknessMap,t(h.thicknessMap,l.thicknessMapTransform)),l.attenuationDistance.value=h.attenuationDistance,l.attenuationColor.value.copy(h.attenuationColor)),h.anisotropy>0&&(l.anisotropyVector.value.set(h.anisotropy*Math.cos(h.anisotropyRotation),h.anisotropy*Math.sin(h.anisotropyRotation)),h.anisotropyMap&&(l.anisotropyMap.value=h.anisotropyMap,t(h.anisotropyMap,l.anisotropyMapTransform))),l.specularIntensity.value=h.specularIntensity,l.specularColor.value.copy(h.specularColor),h.specularColorMap&&(l.specularColorMap.value=h.specularColorMap,t(h.specularColorMap,l.specularColorMapTransform)),h.specularIntensityMap&&(l.specularIntensityMap.value=h.specularIntensityMap,t(h.specularIntensityMap,l.specularIntensityMapTransform))})(n,s,c)):s.isMeshMatcapMaterial?(i(n,s),(function(l,h){h.matcap&&(l.matcap.value=h.matcap)})(n,s)):s.isMeshDepthMaterial?i(n,s):s.isMeshDistanceMaterial?(i(n,s),(function(l,h){let u=e.get(h).light;l.referencePosition.value.setFromMatrixPosition(u.matrixWorld),l.nearDistance.value=u.shadow.camera.near,l.farDistance.value=u.shadow.camera.far})(n,s)):s.isMeshNormalMaterial?i(n,s):s.isLineBasicMaterial?((function(l,h){l.diffuse.value.copy(h.color),l.opacity.value=h.opacity,h.map&&(l.map.value=h.map,t(h.map,l.mapTransform))})(n,s),s.isLineDashedMaterial&&(function(l,h){l.dashSize.value=h.dashSize,l.totalSize.value=h.dashSize+h.gapSize,l.scale.value=h.scale})(n,s)):s.isPointsMaterial?(function(l,h,u,d){l.diffuse.value.copy(h.color),l.opacity.value=h.opacity,l.size.value=h.size*u,l.scale.value=.5*d,h.map&&(l.map.value=h.map,t(h.map,l.uvTransform)),h.alphaMap&&(l.alphaMap.value=h.alphaMap,t(h.alphaMap,l.alphaMapTransform)),h.alphaTest>0&&(l.alphaTest.value=h.alphaTest)})(n,s,a,o):s.isSpriteMaterial?(function(l,h){l.diffuse.value.copy(h.color),l.opacity.value=h.opacity,l.rotation.value=h.rotation,h.map&&(l.map.value=h.map,t(h.map,l.mapTransform)),h.alphaMap&&(l.alphaMap.value=h.alphaMap,t(h.alphaMap,l.alphaMapTransform)),h.alphaTest>0&&(l.alphaTest.value=h.alphaTest)})(n,s):s.isShadowMaterial?(n.color.value.copy(s.color),n.opacity.value=s.opacity):s.isShaderMaterial&&(s.uniformsNeedUpdate=!1)}}}function Zd(r,e,t,i){let n={},s={},a=[],o=r.getParameter(r.MAX_UNIFORM_BUFFER_BINDINGS);function c(u,d,p,f){let x=u.value,m=d+"_"+p;if(f[m]===void 0)return f[m]=typeof x=="number"||typeof x=="boolean"?x:x.clone(),!0;{let g=f[m];if(typeof x=="number"||typeof x=="boolean"){if(g!==x)return f[m]=x,!0}else if(g.equals(x)===!1)return g.copy(x),!0}return!1}function l(u){let d={boundary:0,storage:0};return typeof u=="number"||typeof u=="boolean"?(d.boundary=4,d.storage=4):u.isVector2?(d.boundary=8,d.storage=8):u.isVector3||u.isColor?(d.boundary=16,d.storage=12):u.isVector4?(d.boundary=16,d.storage=16):u.isMatrix3?(d.boundary=48,d.storage=48):u.isMatrix4?(d.boundary=64,d.storage=64):u.isTexture?be("WebGLRenderer: Texture samplers can not be part of an uniforms group."):be("WebGLRenderer: Unsupported uniform value type.",u),d}function h(u){let d=u.target;d.removeEventListener("dispose",h);let p=a.indexOf(d.__bindingPointIndex);a.splice(p,1),r.deleteBuffer(n[d.id]),delete n[d.id],delete s[d.id]}return{bind:function(u,d){let p=d.program;i.uniformBlockBinding(u,p)},update:function(u,d){let p=n[u.id];p===void 0&&((function(m){let g=m.uniforms,v=0,_=16;for(let E=0,b=g.length;E<b;E++){let D=Array.isArray(g[E])?g[E]:[g[E]];for(let z=0,L=D.length;z<L;z++){let B=D[z],V=Array.isArray(B.value)?B.value:[B.value];for(let F=0,Y=V.length;F<Y;F++){let G=l(V[F]),Z=v%_,$=Z%G.boundary,ae=Z+$;v+=$,ae!==0&&_-ae<G.storage&&(v+=_-ae),B.__data=new Float32Array(G.storage/Float32Array.BYTES_PER_ELEMENT),B.__offset=v,v+=G.storage}}}let T=v%_;T>0&&(v+=_-T),m.__size=v,m.__cache={}})(u),p=(function(m){let g=(function(){for(let E=0;E<o;E++)if(a.indexOf(E)===-1)return a.push(E),E;return Oe("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0})();m.__bindingPointIndex=g;let v=r.createBuffer(),_=m.__size,T=m.usage;return r.bindBuffer(r.UNIFORM_BUFFER,v),r.bufferData(r.UNIFORM_BUFFER,_,T),r.bindBuffer(r.UNIFORM_BUFFER,null),r.bindBufferBase(r.UNIFORM_BUFFER,g,v),v})(u),n[u.id]=p,u.addEventListener("dispose",h));let f=d.program;i.updateUBOMapping(u,f);let x=e.render.frame;s[u.id]!==x&&((function(m){let g=n[m.id],v=m.uniforms,_=m.__cache;r.bindBuffer(r.UNIFORM_BUFFER,g);for(let T=0,E=v.length;T<E;T++){let b=Array.isArray(v[T])?v[T]:[v[T]];for(let D=0,z=b.length;D<z;D++){let L=b[D];if(c(L,T,D,_)===!0){let B=L.__offset,V=Array.isArray(L.value)?L.value:[L.value],F=0;for(let Y=0;Y<V.length;Y++){let G=V[Y],Z=l(G);typeof G=="number"||typeof G=="boolean"?(L.__data[0]=G,r.bufferSubData(r.UNIFORM_BUFFER,B+F,L.__data)):G.isMatrix3?(L.__data[0]=G.elements[0],L.__data[1]=G.elements[1],L.__data[2]=G.elements[2],L.__data[3]=0,L.__data[4]=G.elements[3],L.__data[5]=G.elements[4],L.__data[6]=G.elements[5],L.__data[7]=0,L.__data[8]=G.elements[6],L.__data[9]=G.elements[7],L.__data[10]=G.elements[8],L.__data[11]=0):(G.toArray(L.__data,F),F+=Z.storage/Float32Array.BYTES_PER_ELEMENT)}r.bufferSubData(r.UNIFORM_BUFFER,B,L.__data)}}}r.bindBuffer(r.UNIFORM_BUFFER,null)})(u),s[u.id]=x)},dispose:function(){for(let u in n)r.deleteBuffer(n[u]);a=[],n={},s={}}}}var Jd=new Uint16Array([11481,15204,11534,15171,11808,15015,12385,14843,12894,14716,13396,14600,13693,14483,13976,14366,14237,14171,14405,13961,14511,13770,14605,13598,14687,13444,14760,13305,14822,13066,14876,12857,14923,12675,14963,12517,14997,12379,15025,12230,15049,12023,15070,11843,15086,11687,15100,11551,15111,11433,15120,11330,15127,11217,15132,11060,15135,10922,15138,10801,15139,10695,15139,10600,13012,14923,13020,14917,13064,14886,13176,14800,13349,14666,13513,14526,13724,14398,13960,14230,14200,14020,14383,13827,14488,13651,14583,13491,14667,13348,14740,13132,14803,12908,14856,12713,14901,12542,14938,12394,14968,12241,14992,12017,15010,11822,15024,11654,15034,11507,15041,11380,15044,11269,15044,11081,15042,10913,15037,10764,15031,10635,15023,10520,15014,10419,15003,10330,13657,14676,13658,14673,13670,14660,13698,14622,13750,14547,13834,14442,13956,14317,14112,14093,14291,13889,14407,13704,14499,13538,14586,13389,14664,13201,14733,12966,14792,12758,14842,12577,14882,12418,14915,12272,14940,12033,14959,11826,14972,11646,14980,11490,14983,11355,14983,11212,14979,11008,14971,10830,14961,10675,14950,10540,14936,10420,14923,10315,14909,10204,14894,10041,14089,14460,14090,14459,14096,14452,14112,14431,14141,14388,14186,14305,14252,14130,14341,13941,14399,13756,14467,13585,14539,13430,14610,13272,14677,13026,14737,12808,14790,12617,14833,12449,14869,12303,14896,12065,14916,11845,14929,11655,14937,11490,14939,11347,14936,11184,14930,10970,14921,10783,14912,10621,14900,10480,14885,10356,14867,10247,14848,10062,14827,9894,14805,9745,14400,14208,14400,14206,14402,14198,14406,14174,14415,14122,14427,14035,14444,13913,14469,13767,14504,13613,14548,13463,14598,13324,14651,13082,14704,12858,14752,12658,14795,12483,14831,12330,14860,12106,14881,11875,14895,11675,14903,11501,14905,11351,14903,11178,14900,10953,14892,10757,14880,10589,14865,10442,14847,10313,14827,10162,14805,9965,14782,9792,14757,9642,14731,9507,14562,13883,14562,13883,14563,13877,14566,13862,14570,13830,14576,13773,14584,13689,14595,13582,14613,13461,14637,13336,14668,13120,14704,12897,14741,12695,14776,12516,14808,12358,14835,12150,14856,11910,14870,11701,14878,11519,14882,11361,14884,11187,14880,10951,14871,10748,14858,10572,14842,10418,14823,10286,14801,10099,14777,9897,14751,9722,14725,9567,14696,9430,14666,9309,14702,13604,14702,13604,14702,13600,14703,13591,14705,13570,14707,13533,14709,13477,14712,13400,14718,13305,14727,13106,14743,12907,14762,12716,14784,12539,14807,12380,14827,12190,14844,11943,14855,11727,14863,11539,14870,11376,14871,11204,14868,10960,14858,10748,14845,10565,14829,10406,14809,10269,14786,10058,14761,9852,14734,9671,14705,9512,14674,9374,14641,9253,14608,9076,14821,13366,14821,13365,14821,13364,14821,13358,14821,13344,14821,13320,14819,13252,14817,13145,14815,13011,14814,12858,14817,12698,14823,12539,14832,12389,14841,12214,14850,11968,14856,11750,14861,11558,14866,11390,14867,11226,14862,10972,14853,10754,14840,10565,14823,10401,14803,10259,14780,10032,14754,9820,14725,9635,14694,9473,14661,9333,14627,9203,14593,8988,14557,8798,14923,13014,14922,13014,14922,13012,14922,13004,14920,12987,14919,12957,14915,12907,14909,12834,14902,12738,14894,12623,14888,12498,14883,12370,14880,12203,14878,11970,14875,11759,14873,11569,14874,11401,14872,11243,14865,10986,14855,10762,14842,10568,14825,10401,14804,10255,14781,10017,14754,9799,14725,9611,14692,9445,14658,9301,14623,9139,14587,8920,14548,8729,14509,8562,15008,12672,15008,12672,15008,12671,15007,12667,15005,12656,15001,12637,14997,12605,14989,12556,14978,12490,14966,12407,14953,12313,14940,12136,14927,11934,14914,11742,14903,11563,14896,11401,14889,11247,14879,10992,14866,10767,14851,10570,14833,10400,14812,10252,14789,10007,14761,9784,14731,9592,14698,9424,14663,9279,14627,9088,14588,8868,14548,8676,14508,8508,14467,8360,15080,12386,15080,12386,15079,12385,15078,12383,15076,12378,15072,12367,15066,12347,15057,12315,15045,12253,15030,12138,15012,11998,14993,11845,14972,11685,14951,11530,14935,11383,14920,11228,14904,10981,14887,10762,14870,10567,14850,10397,14827,10248,14803,9997,14774,9771,14743,9578,14710,9407,14674,9259,14637,9048,14596,8826,14555,8632,14514,8464,14471,8317,14427,8182,15139,12008,15139,12008,15138,12008,15137,12007,15135,12003,15130,11990,15124,11969,15115,11929,15102,11872,15086,11794,15064,11693,15041,11581,15013,11459,14987,11336,14966,11170,14944,10944,14921,10738,14898,10552,14875,10387,14850,10239,14824,9983,14794,9758,14762,9563,14728,9392,14692,9244,14653,9014,14611,8791,14569,8597,14526,8427,14481,8281,14436,8110,14391,7885,15188,11617,15188,11617,15187,11617,15186,11618,15183,11617,15179,11612,15173,11601,15163,11581,15150,11546,15133,11495,15110,11427,15083,11346,15051,11246,15024,11057,14996,10868,14967,10687,14938,10517,14911,10362,14882,10206,14853,9956,14821,9737,14787,9543,14752,9375,14715,9228,14675,8980,14632,8760,14589,8565,14544,8395,14498,8248,14451,8049,14404,7824,14357,7630,15228,11298,15228,11298,15227,11299,15226,11301,15223,11303,15219,11302,15213,11299,15204,11290,15191,11271,15174,11217,15150,11129,15119,11015,15087,10886,15057,10744,15024,10599,14990,10455,14957,10318,14924,10143,14891,9911,14856,9701,14820,9516,14782,9352,14744,9200,14703,8946,14659,8725,14615,8533,14568,8366,14521,8220,14472,7992,14423,7770,14374,7578,14315,7408,15260,10819,15260,10819,15259,10822,15258,10826,15256,10832,15251,10836,15246,10841,15237,10838,15225,10821,15207,10788,15183,10734,15151,10660,15120,10571,15087,10469,15049,10359,15012,10249,14974,10041,14937,9837,14900,9647,14860,9475,14820,9320,14779,9147,14736,8902,14691,8688,14646,8499,14598,8335,14549,8189,14499,7940,14448,7720,14397,7529,14347,7363,14256,7218,15285,10410,15285,10411,15285,10413,15284,10418,15282,10425,15278,10434,15272,10442,15264,10449,15252,10445,15235,10433,15210,10403,15179,10358,15149,10301,15113,10218,15073,10059,15033,9894,14991,9726,14951,9565,14909,9413,14865,9273,14822,9073,14777,8845,14730,8641,14682,8459,14633,8300,14583,8129,14531,7883,14479,7670,14426,7482,14373,7321,14305,7176,14201,6939,15305,9939,15305,9940,15305,9945,15304,9955,15302,9967,15298,9989,15293,10010,15286,10033,15274,10044,15258,10045,15233,10022,15205,9975,15174,9903,15136,9808,15095,9697,15053,9578,15009,9451,14965,9327,14918,9198,14871,8973,14825,8766,14775,8579,14725,8408,14675,8259,14622,8058,14569,7821,14515,7615,14460,7435,14405,7276,14350,7108,14256,6866,14149,6653,15321,9444,15321,9445,15321,9448,15320,9458,15317,9470,15314,9490,15310,9515,15302,9540,15292,9562,15276,9579,15251,9577,15226,9559,15195,9519,15156,9463,15116,9389,15071,9304,15025,9208,14978,9023,14927,8838,14878,8661,14827,8496,14774,8344,14722,8206,14667,7973,14612,7749,14556,7555,14499,7382,14443,7229,14385,7025,14322,6791,14210,6588,14100,6409,15333,8920,15333,8921,15332,8927,15332,8943,15329,8965,15326,9002,15322,9048,15316,9106,15307,9162,15291,9204,15267,9221,15244,9221,15212,9196,15175,9134,15133,9043,15088,8930,15040,8801,14990,8665,14938,8526,14886,8391,14830,8261,14775,8087,14719,7866,14661,7664,14603,7482,14544,7322,14485,7178,14426,6936,14367,6713,14281,6517,14166,6348,14054,6198,15341,8360,15341,8361,15341,8366,15341,8379,15339,8399,15336,8431,15332,8473,15326,8527,15318,8585,15302,8632,15281,8670,15258,8690,15227,8690,15191,8664,15149,8612,15104,8543,15055,8456,15001,8360,14948,8259,14892,8122,14834,7923,14776,7734,14716,7558,14656,7397,14595,7250,14534,7070,14472,6835,14410,6628,14350,6443,14243,6283,14125,6135,14010,5889,15348,7715,15348,7717,15348,7725,15347,7745,15345,7780,15343,7836,15339,7905,15334,8e3,15326,8103,15310,8193,15293,8239,15270,8270,15240,8287,15204,8283,15163,8260,15118,8223,15067,8143,15014,8014,14958,7873,14899,7723,14839,7573,14778,7430,14715,7293,14652,7164,14588,6931,14524,6720,14460,6531,14396,6362,14330,6210,14207,6015,14086,5781,13969,5576,15352,7114,15352,7116,15352,7128,15352,7159,15350,7195,15348,7237,15345,7299,15340,7374,15332,7457,15317,7544,15301,7633,15280,7703,15251,7754,15216,7775,15176,7767,15131,7733,15079,7670,15026,7588,14967,7492,14906,7387,14844,7278,14779,7171,14714,6965,14648,6770,14581,6587,14515,6420,14448,6269,14382,6123,14299,5881,14172,5665,14049,5477,13929,5310,15355,6329,15355,6330,15355,6339,15355,6362,15353,6410,15351,6472,15349,6572,15344,6688,15337,6835,15323,6985,15309,7142,15287,7220,15260,7277,15226,7310,15188,7326,15142,7318,15090,7285,15036,7239,14976,7177,14914,7045,14849,6892,14782,6736,14714,6581,14645,6433,14576,6293,14506,6164,14438,5946,14369,5733,14270,5540,14140,5369,14014,5216,13892,5043,15357,5483,15357,5484,15357,5496,15357,5528,15356,5597,15354,5692,15351,5835,15347,6011,15339,6195,15328,6317,15314,6446,15293,6566,15268,6668,15235,6746,15197,6796,15152,6811,15101,6790,15046,6748,14985,6673,14921,6583,14854,6479,14785,6371,14714,6259,14643,6149,14571,5946,14499,5750,14428,5567,14358,5401,14242,5250,14109,5111,13980,4870,13856,4657,15359,4555,15359,4557,15358,4573,15358,4633,15357,4715,15355,4841,15353,5061,15349,5216,15342,5391,15331,5577,15318,5770,15299,5967,15274,6150,15243,6223,15206,6280,15161,6310,15111,6317,15055,6300,14994,6262,14928,6208,14860,6141,14788,5994,14715,5838,14641,5684,14566,5529,14492,5384,14418,5247,14346,5121,14216,4892,14079,4682,13948,4496,13822,4330,15359,3498,15359,3501,15359,3520,15359,3598,15358,3719,15356,3860,15355,4137,15351,4305,15344,4563,15334,4809,15321,5116,15303,5273,15280,5418,15250,5547,15214,5653,15170,5722,15120,5761,15064,5763,15002,5733,14935,5673,14865,5597,14792,5504,14716,5400,14640,5294,14563,5185,14486,5041,14410,4841,14335,4655,14191,4482,14051,4325,13918,4183,13790,4012,15360,2282,15360,2285,15360,2306,15360,2401,15359,2547,15357,2748,15355,3103,15352,3349,15345,3675,15336,4020,15324,4272,15307,4496,15285,4716,15255,4908,15220,5086,15178,5170,15128,5214,15072,5234,15010,5231,14943,5206,14871,5166,14796,5102,14718,4971,14639,4833,14559,4687,14480,4541,14402,4401,14315,4268,14167,4142,14025,3958,13888,3747,13759,3556,15360,923,15360,925,15360,946,15360,1052,15359,1214,15357,1494,15356,1892,15352,2274,15346,2663,15338,3099,15326,3393,15309,3679,15288,3980,15260,4183,15226,4325,15185,4437,15136,4517,15080,4570,15018,4591,14950,4581,14877,4545,14800,4485,14720,4411,14638,4325,14556,4231,14475,4136,14395,3988,14297,3803,14145,3628,13999,3465,13861,3314,13729,3177,15360,263,15360,264,15360,272,15360,325,15359,407,15358,548,15356,780,15352,1144,15347,1580,15339,2099,15328,2425,15312,2795,15292,3133,15264,3329,15232,3517,15191,3689,15143,3819,15088,3923,15025,3978,14956,3999,14882,3979,14804,3931,14722,3855,14639,3756,14554,3645,14470,3529,14388,3409,14279,3289,14124,3173,13975,3055,13834,2848,13701,2658,15360,49,15360,49,15360,52,15360,75,15359,111,15358,201,15356,283,15353,519,15348,726,15340,1045,15329,1415,15314,1795,15295,2173,15269,2410,15237,2649,15197,2866,15150,3054,15095,3140,15032,3196,14963,3228,14888,3236,14808,3224,14725,3191,14639,3146,14553,3088,14466,2976,14382,2836,14262,2692,14103,2549,13952,2409,13808,2278,13674,2154,15360,4,15360,4,15360,4,15360,13,15359,33,15358,59,15357,112,15353,199,15348,302,15341,456,15331,628,15316,827,15297,1082,15272,1332,15241,1601,15202,1851,15156,2069,15101,2172,15039,2256,14970,2314,14894,2348,14813,2358,14728,2344,14640,2311,14551,2263,14463,2203,14376,2133,14247,2059,14084,1915,13930,1761,13784,1609,13648,1464,15360,0,15360,0,15360,0,15360,3,15359,18,15358,26,15357,53,15354,80,15348,97,15341,165,15332,238,15318,326,15299,427,15275,529,15245,654,15207,771,15161,885,15108,994,15046,1089,14976,1170,14900,1229,14817,1266,14731,1284,14641,1282,14550,1260,14460,1223,14370,1174,14232,1116,14066,1050,13909,981,13761,910,13623,839]),vi=null,ga=class{constructor(e={}){let{canvas:t=Yc(),context:i=null,depth:n=!0,stencil:s=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1,reversedDepthBuffer:d=!1}=e,p;if(this.isWebGLRenderer=!0,i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=i.getContextAttributes().alpha}else p=a;let f=new Set([To,bo,oa]),x=new Set([gi,Ji,Pn,Ln,sa,aa]),m=new Uint32Array(4),g=new Int32Array(4),v=null,_=null,T=[],E=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Vt,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let b=this,D=!1;this._outputColorSpace=Tt;let z=0,L=0,B=null,V=-1,F=null,Y=new Ke,G=new Ke,Z=null,$=new ke(0),ae=0,ne=t.width,he=t.height,ue=1,ve=null,Se=null,J=new Ke(0,0,ne,he),K=new Ke(0,0,ne,he),Q=!1,de=new Xi,xe=!1,S=!1,M=new Le,U=new C,I=new Ke,y={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},A=!1;function N(){return B===null?ue:1}let R,W,O,H,j,te,ie,oe,ge,ye,Ee,Pe,Fe,me,Re,ze,qe,ce,We,Xe,rn,_t,it,nt,P=i;function Li(w,k){return t.getContext(w,k)}try{let w={alpha:!0,depth:n,stencil:s,antialias:o,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${"181"}`),t.addEventListener("webglcontextlost",On,!1),t.addEventListener("webglcontextrestored",Ar,!1),t.addEventListener("webglcontextcreationerror",Ma,!1),P===null){let k="webgl2";if(P=Li(k,w),P===null)throw Li(k)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(w){throw w("WebGLRenderer: "+w.message),w}function Di(){R=new Pu(P),R.init(),_t=new jd(P,R),W=new Au(P,R,e,_t),O=new Wd(P,R),W.reversedDepthBuffer&&d&&O.buffers.depth.setReversed(!0),H=new Uu(P),j=new Ud,te=new Xd(P,R,O,j,W,_t,H),ie=new Cu(b),oe=new Iu(b),ge=new Mu(P),it=new Tu(P,ge),ye=new Lu(P,ge,H,it),Ee=new Fu(P,ye,ge,H),We=new Nu(P,W,te),ze=new Eu(j),Pe=new Dd(b,ie,oe,R,W,it,ze),Fe=new Yd(b,j),me=new Fd,Re=new Vd(R),ce=new bu(b,ie,oe,O,Ee,p,c),qe=new kd(b,Ee,W),nt=new Zd(P,H,W,O),Xe=new wu(P,R,H),rn=new Du(P,R,H),H.programs=Pe.programs,b.capabilities=W,b.extensions=R,b.properties=j,b.renderLists=me,b.shadowMap=qe,b.state=O,b.info=H}Di();let Qe=new xl(b,P);function On(w){w.preventDefault(),il("WebGLRenderer: Context Lost."),D=!0}function Ar(){il("WebGLRenderer: Context Restored."),D=!1;let w=H.autoReset,k=qe.enabled,q=qe.autoUpdate,ee=qe.needsUpdate,X=qe.type;Di(),H.autoReset=w,qe.enabled=k,qe.autoUpdate=q,qe.needsUpdate=ee,qe.type=X}function Ma(w){Oe("WebGLRenderer: A WebGL context could not be created. Reason: ",w.statusMessage)}function yl(w){let k=w.target;k.removeEventListener("dispose",yl),(function(q){(function(ee){let X=j.get(ee).programs;X!==void 0&&(X.forEach(function(se){Pe.releaseProgram(se)}),ee.isShaderMaterial&&Pe.releaseShaderCache(ee))})(q),j.remove(q)})(k)}function Ml(w,k,q){w.transparent===!0&&w.side===ei&&w.forceSinglePass===!1?(w.side=Et,w.needsUpdate=!0,Cr(w,k,q),w.side=Cn,w.needsUpdate=!0,Cr(w,k,q),w.side=ei):Cr(w,k,q)}this.xr=Qe,this.getContext=function(){return P},this.getContextAttributes=function(){return P.getContextAttributes()},this.forceContextLoss=function(){let w=R.get("WEBGL_lose_context");w&&w.loseContext()},this.forceContextRestore=function(){let w=R.get("WEBGL_lose_context");w&&w.restoreContext()},this.getPixelRatio=function(){return ue},this.setPixelRatio=function(w){w!==void 0&&(ue=w,this.setSize(ne,he,!1))},this.getSize=function(w){return w.set(ne,he)},this.setSize=function(w,k,q=!0){Qe.isPresenting?be("WebGLRenderer: Can't change size while VR device is presenting."):(ne=w,he=k,t.width=Math.floor(w*ue),t.height=Math.floor(k*ue),q===!0&&(t.style.width=w+"px",t.style.height=k+"px"),this.setViewport(0,0,w,k))},this.getDrawingBufferSize=function(w){return w.set(ne*ue,he*ue).floor()},this.setDrawingBufferSize=function(w,k,q){ne=w,he=k,ue=q,t.width=Math.floor(w*q),t.height=Math.floor(k*q),this.setViewport(0,0,w,k)},this.getCurrentViewport=function(w){return w.copy(Y)},this.getViewport=function(w){return w.copy(J)},this.setViewport=function(w,k,q,ee){w.isVector4?J.set(w.x,w.y,w.z,w.w):J.set(w,k,q,ee),O.viewport(Y.copy(J).multiplyScalar(ue).round())},this.getScissor=function(w){return w.copy(K)},this.setScissor=function(w,k,q,ee){w.isVector4?K.set(w.x,w.y,w.z,w.w):K.set(w,k,q,ee),O.scissor(G.copy(K).multiplyScalar(ue).round())},this.getScissorTest=function(){return Q},this.setScissorTest=function(w){O.setScissorTest(Q=w)},this.setOpaqueSort=function(w){ve=w},this.setTransparentSort=function(w){Se=w},this.getClearColor=function(w){return w.copy(ce.getClearColor())},this.setClearColor=function(){ce.setClearColor(...arguments)},this.getClearAlpha=function(){return ce.getClearAlpha()},this.setClearAlpha=function(){ce.setClearAlpha(...arguments)},this.clear=function(w=!0,k=!0,q=!0){let ee=0;if(w){let X=!1;if(B!==null){let se=B.texture.format;X=f.has(se)}if(X){let se=B.texture.type,pe=x.has(se),fe=ce.getClearColor(),_e=ce.getClearAlpha(),Te=fe.r,Ae=fe.g,we=fe.b;pe?(m[0]=Te,m[1]=Ae,m[2]=we,m[3]=_e,P.clearBufferuiv(P.COLOR,0,m)):(g[0]=Te,g[1]=Ae,g[2]=we,g[3]=_e,P.clearBufferiv(P.COLOR,0,g))}else ee|=P.COLOR_BUFFER_BIT}k&&(ee|=P.DEPTH_BUFFER_BIT),q&&(ee|=P.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),P.clear(ee)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",On,!1),t.removeEventListener("webglcontextrestored",Ar,!1),t.removeEventListener("webglcontextcreationerror",Ma,!1),ce.dispose(),me.dispose(),Re.dispose(),j.dispose(),ie.dispose(),oe.dispose(),Ee.dispose(),it.dispose(),nt.dispose(),Pe.dispose(),Qe.dispose(),Qe.removeEventListener("sessionstart",Sl),Qe.removeEventListener("sessionend",bl),Ui.stop()},this.renderBufferDirect=function(w,k,q,ee,X,se){k===null&&(k=y);let pe=X.isMesh&&X.matrixWorld.determinant()<0,fe=(function(Ge,et,dt,Ne,Ce){et.isScene!==!0&&(et=y),te.resetTextureUnits();let Lt=et.fog,Ta=Ne.isMeshStandardMaterial?et.environment:null,Rr=B===null?b.outputColorSpace:B.isXRRenderTarget===!0?B.texture.colorSpace:ui,_i=(Ne.isMeshStandardMaterial?oe:ie).get(Ne.envMap||Ta),Ht=Ne.vertexColors===!0&&!!dt.attributes.color&&dt.attributes.color.itemSize===4,sn=!!dt.attributes.tangent&&(!!Ne.normalMap||Ne.anisotropy>0),ni=!!dt.morphAttributes.position,wa=!!dt.morphAttributes.normal,an=!!dt.morphAttributes.color,Rl=Vt;Ne.toneMapped&&(B!==null&&B.isXRRenderTarget!==!0||(Rl=b.toneMapping));let Il=dt.morphAttributes.position||dt.morphAttributes.normal||dt.morphAttributes.color,Fh=Il!==void 0?Il.length:0,Ve=j.get(Ne),Oh=_.state.lights;if(xe===!0&&(S===!0||Ge!==F)){let Ct=Ge===F&&Ne.id===V;ze.setState(Ne,Ge,Ct)}let Dt=!1;Ne.version===Ve.__version?Ve.needsLights&&Ve.lightsStateVersion!==Oh.state.version||Ve.outputColorSpace!==Rr||Ce.isBatchedMesh&&Ve.batching===!1?Dt=!0:Ce.isBatchedMesh||Ve.batching!==!0?Ce.isBatchedMesh&&Ve.batchingColor===!0&&Ce.colorTexture===null||Ce.isBatchedMesh&&Ve.batchingColor===!1&&Ce.colorTexture!==null||Ce.isInstancedMesh&&Ve.instancing===!1?Dt=!0:Ce.isInstancedMesh||Ve.instancing!==!0?Ce.isSkinnedMesh&&Ve.skinning===!1?Dt=!0:Ce.isSkinnedMesh||Ve.skinning!==!0?Ce.isInstancedMesh&&Ve.instancingColor===!0&&Ce.instanceColor===null||Ce.isInstancedMesh&&Ve.instancingColor===!1&&Ce.instanceColor!==null||Ce.isInstancedMesh&&Ve.instancingMorph===!0&&Ce.morphTexture===null||Ce.isInstancedMesh&&Ve.instancingMorph===!1&&Ce.morphTexture!==null||Ve.envMap!==_i||Ne.fog===!0&&Ve.fog!==Lt?Dt=!0:Ve.numClippingPlanes===void 0||Ve.numClippingPlanes===ze.numPlanes&&Ve.numIntersection===ze.numIntersection?(Ve.vertexAlphas!==Ht||Ve.vertexTangents!==sn||Ve.morphTargets!==ni||Ve.morphNormals!==wa||Ve.morphColors!==an||Ve.toneMapping!==Rl||Ve.morphTargetsCount!==Fh)&&(Dt=!0):Dt=!0:Dt=!0:Dt=!0:Dt=!0:(Dt=!0,Ve.__version=Ne.version);let Ni=Ve.currentProgram;Dt===!0&&(Ni=Cr(Ne,et,Ce));let Pl=!1,Bn=!1,Aa=!1,st=Ni.getUniforms(),Wt=Ve.uniforms;if(O.useProgram(Ni.program)&&(Pl=!0,Bn=!0,Aa=!0),Ne.id!==V&&(V=Ne.id,Bn=!0),Pl||F!==Ge){O.buffers.depth.getReversed()&&Ge.reversedDepth!==!0&&(Ge._reversedDepth=!0,Ge.updateProjectionMatrix()),st.setValue(P,"projectionMatrix",Ge.projectionMatrix),st.setValue(P,"viewMatrix",Ge.matrixWorldInverse);let Ct=st.map.cameraPosition;Ct!==void 0&&Ct.setValue(P,U.setFromMatrixPosition(Ge.matrixWorld)),W.logarithmicDepthBuffer&&st.setValue(P,"logDepthBufFC",2/(Math.log(Ge.far+1)/Math.LN2)),(Ne.isMeshPhongMaterial||Ne.isMeshToonMaterial||Ne.isMeshLambertMaterial||Ne.isMeshBasicMaterial||Ne.isMeshStandardMaterial||Ne.isShaderMaterial)&&st.setValue(P,"isOrthographic",Ge.isOrthographicCamera===!0),F!==Ge&&(F=Ge,Bn=!0,Aa=!0)}if(Ce.isSkinnedMesh){st.setOptional(P,Ce,"bindMatrix"),st.setOptional(P,Ce,"bindMatrixInverse");let Ct=Ce.skeleton;Ct&&(Ct.boneTexture===null&&Ct.computeBoneTexture(),st.setValue(P,"boneTexture",Ct.boneTexture,te))}Ce.isBatchedMesh&&(st.setOptional(P,Ce,"batchingTexture"),st.setValue(P,"batchingTexture",Ce._matricesTexture,te),st.setOptional(P,Ce,"batchingIdTexture"),st.setValue(P,"batchingIdTexture",Ce._indirectTexture,te),st.setOptional(P,Ce,"batchingColorTexture"),Ce._colorsTexture!==null&&st.setValue(P,"batchingColorTexture",Ce._colorsTexture,te));let Ea=dt.morphAttributes;Ea.position===void 0&&Ea.normal===void 0&&Ea.color===void 0||We.update(Ce,dt,Ni),(Bn||Ve.receiveShadow!==Ce.receiveShadow)&&(Ve.receiveShadow=Ce.receiveShadow,st.setValue(P,"receiveShadow",Ce.receiveShadow)),Ne.isMeshGouraudMaterial&&Ne.envMap!==null&&(Wt.envMap.value=_i,Wt.flipEnvMap.value=_i.isCubeTexture&&_i.isRenderTargetTexture===!1?-1:1),Ne.isMeshStandardMaterial&&Ne.envMap===null&&et.environment!==null&&(Wt.envMapIntensity.value=et.environmentIntensity),Wt.dfgLUT!==void 0&&(Wt.dfgLUT.value=(vi===null&&(vi=new us(Jd,32,32,So,Ki),vi.minFilter=Pt,vi.magFilter=Pt,vi.wrapS=Ei,vi.wrapT=Ei,vi.generateMipmaps=!1,vi.needsUpdate=!0),vi)),Bn&&(st.setValue(P,"toneMappingExposure",b.toneMappingExposure),Ve.needsLights&&(Ut=Aa,(Xt=Wt).ambientLightColor.needsUpdate=Ut,Xt.lightProbe.needsUpdate=Ut,Xt.directionalLights.needsUpdate=Ut,Xt.directionalLightShadows.needsUpdate=Ut,Xt.pointLights.needsUpdate=Ut,Xt.pointLightShadows.needsUpdate=Ut,Xt.spotLights.needsUpdate=Ut,Xt.spotLightShadows.needsUpdate=Ut,Xt.rectAreaLights.needsUpdate=Ut,Xt.hemisphereLights.needsUpdate=Ut),Lt&&Ne.fog===!0&&Fe.refreshFogUniforms(Wt,Lt),Fe.refreshMaterialUniforms(Wt,Ne,ue,he,_.state.transmissionRenderTarget[Ge.id]),Nn.upload(P,El(Ve),Wt,te));var Xt,Ut;if(Ne.isShaderMaterial&&Ne.uniformsNeedUpdate===!0&&(Nn.upload(P,El(Ve),Wt,te),Ne.uniformsNeedUpdate=!1),Ne.isSpriteMaterial&&st.setValue(P,"center",Ce.center),st.setValue(P,"modelViewMatrix",Ce.modelViewMatrix),st.setValue(P,"normalMatrix",Ce.normalMatrix),st.setValue(P,"modelMatrix",Ce.matrixWorld),Ne.isShaderMaterial||Ne.isRawShaderMaterial){let Ct=Ne.uniformsGroups;for(let Ca=0,Bh=Ct.length;Ca<Bh;Ca++){let Ll=Ct[Ca];nt.update(Ll,Ni),nt.bind(Ll,Ni)}}return Ni})(w,k,q,ee,X);O.setMaterial(ee,pe);let _e=q.index,Te=1;if(ee.wireframe===!0){if(_e=ye.getWireframeAttribute(q),_e===void 0)return;Te=2}let Ae=q.drawRange,we=q.attributes.position,Ue=Ae.start*Te,Ze=(Ae.start+Ae.count)*Te;se!==null&&(Ue=Math.max(Ue,se.start*Te),Ze=Math.min(Ze,(se.start+se.count)*Te)),_e!==null?(Ue=Math.max(Ue,0),Ze=Math.min(Ze,_e.count)):we!=null&&(Ue=Math.max(Ue,0),Ze=Math.min(Ze,we.count));let ot=Ze-Ue;if(ot<0||ot===1/0)return;let rt;it.setup(X,ee,fe,q,_e);let Je=Xe;if(_e!==null&&(rt=ge.get(_e),Je=rn,Je.setIndex(rt)),X.isMesh)ee.wireframe===!0?(O.setLineWidth(ee.wireframeLinewidth*N()),Je.setMode(P.LINES)):Je.setMode(P.TRIANGLES);else if(X.isLine){let Ge=ee.linewidth;Ge===void 0&&(Ge=1),O.setLineWidth(Ge*N()),X.isLineSegments?Je.setMode(P.LINES):X.isLineLoop?Je.setMode(P.LINE_LOOP):Je.setMode(P.LINE_STRIP)}else X.isPoints?Je.setMode(P.POINTS):X.isSprite&&Je.setMode(P.TRIANGLES);if(X.isBatchedMesh)if(X._multiDrawInstances!==null)yn("WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),Je.renderMultiDrawInstances(X._multiDrawStarts,X._multiDrawCounts,X._multiDrawCount,X._multiDrawInstances);else if(R.get("WEBGL_multi_draw"))Je.renderMultiDraw(X._multiDrawStarts,X._multiDrawCounts,X._multiDrawCount);else{let Ge=X._multiDrawStarts,et=X._multiDrawCounts,dt=X._multiDrawCount,Ne=_e?ge.get(_e).bytesPerElement:1,Ce=j.get(ee).currentProgram.getUniforms();for(let Lt=0;Lt<dt;Lt++)Ce.setValue(P,"_gl_DrawID",Lt),Je.render(Ge[Lt]/Ne,et[Lt])}else if(X.isInstancedMesh)Je.renderInstances(Ue,ot,X.count);else if(q.isInstancedBufferGeometry){let Ge=q._maxInstanceCount!==void 0?q._maxInstanceCount:1/0,et=Math.min(q.instanceCount,Ge);Je.renderInstances(Ue,ot,et)}else Je.render(Ue,ot)},this.compile=function(w,k,q=null){q===null&&(q=w),_=Re.get(q),_.init(k),E.push(_),q.traverseVisible(function(X){X.isLight&&X.layers.test(k.layers)&&(_.pushLight(X),X.castShadow&&_.pushShadow(X))}),w!==q&&w.traverseVisible(function(X){X.isLight&&X.layers.test(k.layers)&&(_.pushLight(X),X.castShadow&&_.pushShadow(X))}),_.setupLights();let ee=new Set;return w.traverse(function(X){if(!(X.isMesh||X.isPoints||X.isLine||X.isSprite))return;let se=X.material;if(se)if(Array.isArray(se))for(let pe=0;pe<se.length;pe++){let fe=se[pe];Ml(fe,q,X),ee.add(fe)}else Ml(se,q,X),ee.add(se)}),_=E.pop(),ee},this.compileAsync=function(w,k,q=null){let ee=this.compile(w,k,q);return new Promise(X=>{function se(){ee.forEach(function(pe){j.get(pe).currentProgram.isReady()&&ee.delete(pe)}),ee.size!==0?setTimeout(se,10):X(w)}R.get("KHR_parallel_shader_compile")!==null?se():setTimeout(se,10)})};let Sa=null;function Sl(){Ui.stop()}function bl(){Ui.start()}let Ui=new Th;function ba(w,k,q,ee){if(w.visible===!1)return;if(w.layers.test(k.layers)){if(w.isGroup)q=w.renderOrder;else if(w.isLOD)w.autoUpdate===!0&&w.update(k);else if(w.isLight)_.pushLight(w),w.castShadow&&_.pushShadow(w);else if(w.isSprite){if(!w.frustumCulled||de.intersectsSprite(w)){ee&&I.setFromMatrixPosition(w.matrixWorld).applyMatrix4(M);let se=Ee.update(w),pe=w.material;pe.visible&&v.push(w,se,pe,q,I.z,null)}}else if((w.isMesh||w.isLine||w.isPoints)&&(!w.frustumCulled||de.intersectsObject(w))){let se=Ee.update(w),pe=w.material;if(ee&&(w.boundingSphere!==void 0?(w.boundingSphere===null&&w.computeBoundingSphere(),I.copy(w.boundingSphere.center)):(se.boundingSphere===null&&se.computeBoundingSphere(),I.copy(se.boundingSphere.center)),I.applyMatrix4(w.matrixWorld).applyMatrix4(M)),Array.isArray(pe)){let fe=se.groups;for(let _e=0,Te=fe.length;_e<Te;_e++){let Ae=fe[_e],we=pe[Ae.materialIndex];we&&we.visible&&v.push(w,se,we,q,I.z,Ae)}}else pe.visible&&v.push(w,se,pe,q,I.z,null)}}let X=w.children;for(let se=0,pe=X.length;se<pe;se++)ba(X[se],k,q,ee)}function Tl(w,k,q,ee){let{opaque:X,transmissive:se,transparent:pe}=w;_.setupLightsView(q),xe===!0&&ze.setGlobalState(b.clippingPlanes,q),ee&&O.viewport(Y.copy(ee)),X.length>0&&Er(X,k,q),se.length>0&&Er(se,k,q),pe.length>0&&Er(pe,k,q),O.buffers.depth.setTest(!0),O.buffers.depth.setMask(!0),O.buffers.color.setMask(!0),O.setPolygonOffset(!1)}function wl(w,k,q,ee){if((q.isScene===!0?q.overrideMaterial:null)!==null)return;_.state.transmissionRenderTarget[ee.id]===void 0&&(_.state.transmissionRenderTarget[ee.id]=new Kt(1,1,{generateMipmaps:!0,type:R.has("EXT_color_buffer_half_float")||R.has("EXT_color_buffer_float")?Ki:gi,minFilter:Zi,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:He.workingColorSpace}));let X=_.state.transmissionRenderTarget[ee.id],se=ee.viewport||Y;X.setSize(se.z*b.transmissionResolutionScale,se.w*b.transmissionResolutionScale);let pe=b.getRenderTarget(),fe=b.getActiveCubeFace(),_e=b.getActiveMipmapLevel();b.setRenderTarget(X),b.getClearColor($),ae=b.getClearAlpha(),ae<1&&b.setClearColor(16777215,.5),b.clear(),A&&ce.render(q);let Te=b.toneMapping;b.toneMapping=Vt;let Ae=ee.viewport;if(ee.viewport!==void 0&&(ee.viewport=void 0),_.setupLightsView(ee),xe===!0&&ze.setGlobalState(b.clippingPlanes,ee),Er(w,q,ee),te.updateMultisampleRenderTarget(X),te.updateRenderTargetMipmap(X),R.has("WEBGL_multisampled_render_to_texture")===!1){let we=!1;for(let Ue=0,Ze=k.length;Ue<Ze;Ue++){let ot=k[Ue],{object:rt,geometry:Je,material:Ge,group:et}=ot;if(Ge.side===ei&&rt.layers.test(ee.layers)){let dt=Ge.side;Ge.side=Et,Ge.needsUpdate=!0,Al(rt,q,ee,Je,Ge,et),Ge.side=dt,Ge.needsUpdate=!0,we=!0}}we===!0&&(te.updateMultisampleRenderTarget(X),te.updateRenderTargetMipmap(X))}b.setRenderTarget(pe,fe,_e),b.setClearColor($,ae),Ae!==void 0&&(ee.viewport=Ae),b.toneMapping=Te}function Er(w,k,q){let ee=k.isScene===!0?k.overrideMaterial:null;for(let X=0,se=w.length;X<se;X++){let pe=w[X],{object:fe,geometry:_e,group:Te}=pe,Ae=pe.material;Ae.allowOverride===!0&&ee!==null&&(Ae=ee),fe.layers.test(q.layers)&&Al(fe,k,q,_e,Ae,Te)}}function Al(w,k,q,ee,X,se){w.onBeforeRender(b,k,q,ee,X,se),w.modelViewMatrix.multiplyMatrices(q.matrixWorldInverse,w.matrixWorld),w.normalMatrix.getNormalMatrix(w.modelViewMatrix),X.onBeforeRender(b,k,q,ee,w,se),X.transparent===!0&&X.side===ei&&X.forceSinglePass===!1?(X.side=Et,X.needsUpdate=!0,b.renderBufferDirect(q,k,ee,X,w,se),X.side=Cn,X.needsUpdate=!0,b.renderBufferDirect(q,k,ee,X,w,se),X.side=ei):b.renderBufferDirect(q,k,ee,X,w,se),w.onAfterRender(b,k,q,ee,X,se)}function Cr(w,k,q){k.isScene!==!0&&(k=y);let ee=j.get(w),X=_.state.lights,se=_.state.shadowsArray,pe=X.state.version,fe=Pe.getParameters(w,X.state,se,k,q),_e=Pe.getProgramCacheKey(fe),Te=ee.programs;ee.environment=w.isMeshStandardMaterial?k.environment:null,ee.fog=k.fog,ee.envMap=(w.isMeshStandardMaterial?oe:ie).get(w.envMap||ee.environment),ee.envMapRotation=ee.environment!==null&&w.envMap===null?k.environmentRotation:w.envMapRotation,Te===void 0&&(w.addEventListener("dispose",yl),Te=new Map,ee.programs=Te);let Ae=Te.get(_e);if(Ae!==void 0){if(ee.currentProgram===Ae&&ee.lightsStateVersion===pe)return Cl(w,fe),Ae}else fe.uniforms=Pe.getUniforms(w),w.onBeforeCompile(fe,b),Ae=Pe.acquireProgram(fe,_e),Te.set(_e,Ae),ee.uniforms=fe.uniforms;let we=ee.uniforms;return(w.isShaderMaterial||w.isRawShaderMaterial)&&w.clipping!==!0||(we.clippingPlanes=ze.uniform),Cl(w,fe),ee.needsLights=(function(Ue){return Ue.isMeshLambertMaterial||Ue.isMeshToonMaterial||Ue.isMeshPhongMaterial||Ue.isMeshStandardMaterial||Ue.isShadowMaterial||Ue.isShaderMaterial&&Ue.lights===!0})(w),ee.lightsStateVersion=pe,ee.needsLights&&(we.ambientLightColor.value=X.state.ambient,we.lightProbe.value=X.state.probe,we.directionalLights.value=X.state.directional,we.directionalLightShadows.value=X.state.directionalShadow,we.spotLights.value=X.state.spot,we.spotLightShadows.value=X.state.spotShadow,we.rectAreaLights.value=X.state.rectArea,we.ltc_1.value=X.state.rectAreaLTC1,we.ltc_2.value=X.state.rectAreaLTC2,we.pointLights.value=X.state.point,we.pointLightShadows.value=X.state.pointShadow,we.hemisphereLights.value=X.state.hemi,we.directionalShadowMap.value=X.state.directionalShadowMap,we.directionalShadowMatrix.value=X.state.directionalShadowMatrix,we.spotShadowMap.value=X.state.spotShadowMap,we.spotLightMatrix.value=X.state.spotLightMatrix,we.spotLightMap.value=X.state.spotLightMap,we.pointShadowMap.value=X.state.pointShadowMap,we.pointShadowMatrix.value=X.state.pointShadowMatrix),ee.currentProgram=Ae,ee.uniformsList=null,Ae}function El(w){if(w.uniformsList===null){let k=w.currentProgram.getUniforms();w.uniformsList=Nn.seqWithValue(k.seq,w.uniforms)}return w.uniformsList}function Cl(w,k){let q=j.get(w);q.outputColorSpace=k.outputColorSpace,q.batching=k.batching,q.batchingColor=k.batchingColor,q.instancing=k.instancing,q.instancingColor=k.instancingColor,q.instancingMorph=k.instancingMorph,q.skinning=k.skinning,q.morphTargets=k.morphTargets,q.morphNormals=k.morphNormals,q.morphColors=k.morphColors,q.morphTargetsCount=k.morphTargetsCount,q.numClippingPlanes=k.numClippingPlanes,q.numIntersection=k.numClipIntersection,q.vertexAlphas=k.vertexAlphas,q.vertexTangents=k.vertexTangents,q.toneMapping=k.toneMapping}Ui.setAnimationLoop(function(w){Sa&&Sa(w)}),typeof self<"u"&&Ui.setContext(self),this.setAnimationLoop=function(w){Sa=w,Qe.setAnimationLoop(w),w===null?Ui.stop():Ui.start()},Qe.addEventListener("sessionstart",Sl),Qe.addEventListener("sessionend",bl),this.render=function(w,k){if(k!==void 0&&k.isCamera!==!0)return void Oe("WebGLRenderer.render: camera is not an instance of THREE.Camera.");if(D===!0)return;if(w.matrixWorldAutoUpdate===!0&&w.updateMatrixWorld(),k.parent===null&&k.matrixWorldAutoUpdate===!0&&k.updateMatrixWorld(),Qe.enabled===!0&&Qe.isPresenting===!0&&(Qe.cameraAutoUpdate===!0&&Qe.updateCamera(k),k=Qe.getCamera()),w.isScene===!0&&w.onBeforeRender(b,w,k,B),_=Re.get(w,E.length),_.init(k),E.push(_),M.multiplyMatrices(k.projectionMatrix,k.matrixWorldInverse),de.setFromProjectionMatrix(M,di,k.reversedDepth),S=this.localClippingEnabled,xe=ze.init(this.clippingPlanes,S),v=me.get(w,T.length),v.init(),T.push(v),Qe.enabled===!0&&Qe.isPresenting===!0){let se=b.xr.getDepthSensingMesh();se!==null&&ba(se,k,-1/0,b.sortObjects)}ba(w,k,0,b.sortObjects),v.finish(),b.sortObjects===!0&&v.sort(ve,Se),A=Qe.enabled===!1||Qe.isPresenting===!1||Qe.hasDepthSensing()===!1,A&&ce.addToRenderList(v,w),this.info.render.frame++,xe===!0&&ze.beginShadows();let q=_.state.shadowsArray;qe.render(q,w,k),xe===!0&&ze.endShadows(),this.info.autoReset===!0&&this.info.reset();let ee=v.opaque,X=v.transmissive;if(_.setupLights(),k.isArrayCamera){let se=k.cameras;if(X.length>0)for(let pe=0,fe=se.length;pe<fe;pe++)wl(ee,X,w,se[pe]);A&&ce.render(w);for(let pe=0,fe=se.length;pe<fe;pe++){let _e=se[pe];Tl(v,w,_e,_e.viewport)}}else X.length>0&&wl(ee,X,w,k),A&&ce.render(w),Tl(v,w,k);B!==null&&L===0&&(te.updateMultisampleRenderTarget(B),te.updateRenderTargetMipmap(B)),w.isScene===!0&&w.onAfterRender(b,w,k),it.resetDefaultState(),V=-1,F=null,E.pop(),E.length>0?(_=E[E.length-1],xe===!0&&ze.setGlobalState(b.clippingPlanes,_.state.camera)):_=null,T.pop(),v=T.length>0?T[T.length-1]:null},this.getActiveCubeFace=function(){return z},this.getActiveMipmapLevel=function(){return L},this.getRenderTarget=function(){return B},this.setRenderTargetTextures=function(w,k,q){let ee=j.get(w);ee.__autoAllocateDepthBuffer=w.resolveDepthBuffer===!1,ee.__autoAllocateDepthBuffer===!1&&(ee.__useRenderToTexture=!1),j.get(w.texture).__webglTexture=k,j.get(w.depthTexture).__webglTexture=ee.__autoAllocateDepthBuffer?void 0:q,ee.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(w,k){let q=j.get(w);q.__webglFramebuffer=k,q.__useDefaultFramebuffer=k===void 0};let Dh=P.createFramebuffer();this.setRenderTarget=function(w,k=0,q=0){B=w,z=k,L=q;let ee=!0,X=null,se=!1,pe=!1;if(w){let fe=j.get(w);if(fe.__useDefaultFramebuffer!==void 0)O.bindFramebuffer(P.FRAMEBUFFER,null),ee=!1;else if(fe.__webglFramebuffer===void 0)te.setupRenderTarget(w);else if(fe.__hasExternalTextures)te.rebindTextures(w,j.get(w.texture).__webglTexture,j.get(w.depthTexture).__webglTexture);else if(w.depthBuffer){let Ae=w.depthTexture;if(fe.__boundDepthTexture!==Ae){if(Ae!==null&&j.has(Ae)&&(w.width!==Ae.image.width||w.height!==Ae.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");te.setupDepthRenderbuffer(w)}}let _e=w.texture;(_e.isData3DTexture||_e.isDataArrayTexture||_e.isCompressedArrayTexture)&&(pe=!0);let Te=j.get(w).__webglFramebuffer;w.isWebGLCubeRenderTarget?(X=Array.isArray(Te[k])?Te[k][q]:Te[k],se=!0):X=w.samples>0&&te.useMultisampledRTT(w)===!1?j.get(w).__webglMultisampledFramebuffer:Array.isArray(Te)?Te[q]:Te,Y.copy(w.viewport),G.copy(w.scissor),Z=w.scissorTest}else Y.copy(J).multiplyScalar(ue).floor(),G.copy(K).multiplyScalar(ue).floor(),Z=Q;if(q!==0&&(X=Dh),O.bindFramebuffer(P.FRAMEBUFFER,X)&&ee&&O.drawBuffers(w,X),O.viewport(Y),O.scissor(G),O.setScissorTest(Z),se){let fe=j.get(w.texture);P.framebufferTexture2D(P.FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_CUBE_MAP_POSITIVE_X+k,fe.__webglTexture,q)}else if(pe){let fe=k;for(let _e=0;_e<w.textures.length;_e++){let Te=j.get(w.textures[_e]);P.framebufferTextureLayer(P.FRAMEBUFFER,P.COLOR_ATTACHMENT0+_e,Te.__webglTexture,q,fe)}}else if(w!==null&&q!==0){let fe=j.get(w.texture);P.framebufferTexture2D(P.FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_2D,fe.__webglTexture,q)}V=-1},this.readRenderTargetPixels=function(w,k,q,ee,X,se,pe,fe=0){if(!w||!w.isWebGLRenderTarget)return void Oe("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let _e=j.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&pe!==void 0&&(_e=_e[pe]),_e){O.bindFramebuffer(P.FRAMEBUFFER,_e);try{let Te=w.textures[fe],Ae=Te.format,we=Te.type;if(!W.textureFormatReadable(Ae))return void Oe("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");if(!W.textureTypeReadable(we))return void Oe("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");k>=0&&k<=w.width-ee&&q>=0&&q<=w.height-X&&(w.textures.length>1&&P.readBuffer(P.COLOR_ATTACHMENT0+fe),P.readPixels(k,q,ee,X,_t.convert(Ae),_t.convert(we),se))}finally{let Te=B!==null?j.get(B).__webglFramebuffer:null;O.bindFramebuffer(P.FRAMEBUFFER,Te)}}},this.readRenderTargetPixelsAsync=async function(w,k,q,ee,X,se,pe,fe=0){if(!w||!w.isWebGLRenderTarget)throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let _e=j.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&pe!==void 0&&(_e=_e[pe]),_e){if(k>=0&&k<=w.width-ee&&q>=0&&q<=w.height-X){O.bindFramebuffer(P.FRAMEBUFFER,_e);let Te=w.textures[fe],Ae=Te.format,we=Te.type;if(!W.textureFormatReadable(Ae))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!W.textureTypeReadable(we))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let Ue=P.createBuffer();P.bindBuffer(P.PIXEL_PACK_BUFFER,Ue),P.bufferData(P.PIXEL_PACK_BUFFER,se.byteLength,P.STREAM_READ),w.textures.length>1&&P.readBuffer(P.COLOR_ATTACHMENT0+fe),P.readPixels(k,q,ee,X,_t.convert(Ae),_t.convert(we),0);let Ze=B!==null?j.get(B).__webglFramebuffer:null;O.bindFramebuffer(P.FRAMEBUFFER,Ze);let ot=P.fenceSync(P.SYNC_GPU_COMMANDS_COMPLETE,0);return P.flush(),await Zc(P,ot,4),P.bindBuffer(P.PIXEL_PACK_BUFFER,Ue),P.getBufferSubData(P.PIXEL_PACK_BUFFER,0,se),P.deleteBuffer(Ue),P.deleteSync(ot),se}throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(w,k=null,q=0){let ee=Math.pow(2,-q),X=Math.floor(w.image.width*ee),se=Math.floor(w.image.height*ee),pe=k!==null?k.x:0,fe=k!==null?k.y:0;te.setTexture2D(w,0),P.copyTexSubImage2D(P.TEXTURE_2D,q,0,0,pe,fe,X,se),O.unbindTexture()};let Uh=P.createFramebuffer(),Nh=P.createFramebuffer();this.copyTextureToTexture=function(w,k,q=null,ee=null,X=0,se=null){let pe,fe,_e,Te,Ae,we,Ue,Ze,ot;se===null&&(X!==0?(yn("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),se=X,X=0):se=0);let rt=w.isCompressedTexture?w.mipmaps[se]:w.image;if(q!==null)pe=q.max.x-q.min.x,fe=q.max.y-q.min.y,_e=q.isBox3?q.max.z-q.min.z:1,Te=q.min.x,Ae=q.min.y,we=q.isBox3?q.min.z:0;else{let Ht=Math.pow(2,-X);pe=Math.floor(rt.width*Ht),fe=Math.floor(rt.height*Ht),_e=w.isDataArrayTexture?rt.depth:w.isData3DTexture?Math.floor(rt.depth*Ht):1,Te=0,Ae=0,we=0}ee!==null?(Ue=ee.x,Ze=ee.y,ot=ee.z):(Ue=0,Ze=0,ot=0);let Je=_t.convert(k.format),Ge=_t.convert(k.type),et;k.isData3DTexture?(te.setTexture3D(k,0),et=P.TEXTURE_3D):k.isDataArrayTexture||k.isCompressedArrayTexture?(te.setTexture2DArray(k,0),et=P.TEXTURE_2D_ARRAY):(te.setTexture2D(k,0),et=P.TEXTURE_2D),P.pixelStorei(P.UNPACK_FLIP_Y_WEBGL,k.flipY),P.pixelStorei(P.UNPACK_PREMULTIPLY_ALPHA_WEBGL,k.premultiplyAlpha),P.pixelStorei(P.UNPACK_ALIGNMENT,k.unpackAlignment);let dt=P.getParameter(P.UNPACK_ROW_LENGTH),Ne=P.getParameter(P.UNPACK_IMAGE_HEIGHT),Ce=P.getParameter(P.UNPACK_SKIP_PIXELS),Lt=P.getParameter(P.UNPACK_SKIP_ROWS),Ta=P.getParameter(P.UNPACK_SKIP_IMAGES);P.pixelStorei(P.UNPACK_ROW_LENGTH,rt.width),P.pixelStorei(P.UNPACK_IMAGE_HEIGHT,rt.height),P.pixelStorei(P.UNPACK_SKIP_PIXELS,Te),P.pixelStorei(P.UNPACK_SKIP_ROWS,Ae),P.pixelStorei(P.UNPACK_SKIP_IMAGES,we);let Rr=w.isDataArrayTexture||w.isData3DTexture,_i=k.isDataArrayTexture||k.isData3DTexture;if(w.isDepthTexture){let Ht=j.get(w),sn=j.get(k),ni=j.get(Ht.__renderTarget),wa=j.get(sn.__renderTarget);O.bindFramebuffer(P.READ_FRAMEBUFFER,ni.__webglFramebuffer),O.bindFramebuffer(P.DRAW_FRAMEBUFFER,wa.__webglFramebuffer);for(let an=0;an<_e;an++)Rr&&(P.framebufferTextureLayer(P.READ_FRAMEBUFFER,P.COLOR_ATTACHMENT0,j.get(w).__webglTexture,X,we+an),P.framebufferTextureLayer(P.DRAW_FRAMEBUFFER,P.COLOR_ATTACHMENT0,j.get(k).__webglTexture,se,ot+an)),P.blitFramebuffer(Te,Ae,pe,fe,Ue,Ze,pe,fe,P.DEPTH_BUFFER_BIT,P.NEAREST);O.bindFramebuffer(P.READ_FRAMEBUFFER,null),O.bindFramebuffer(P.DRAW_FRAMEBUFFER,null)}else if(X!==0||w.isRenderTargetTexture||j.has(w)){let Ht=j.get(w),sn=j.get(k);O.bindFramebuffer(P.READ_FRAMEBUFFER,Uh),O.bindFramebuffer(P.DRAW_FRAMEBUFFER,Nh);for(let ni=0;ni<_e;ni++)Rr?P.framebufferTextureLayer(P.READ_FRAMEBUFFER,P.COLOR_ATTACHMENT0,Ht.__webglTexture,X,we+ni):P.framebufferTexture2D(P.READ_FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_2D,Ht.__webglTexture,X),_i?P.framebufferTextureLayer(P.DRAW_FRAMEBUFFER,P.COLOR_ATTACHMENT0,sn.__webglTexture,se,ot+ni):P.framebufferTexture2D(P.DRAW_FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_2D,sn.__webglTexture,se),X!==0?P.blitFramebuffer(Te,Ae,pe,fe,Ue,Ze,pe,fe,P.COLOR_BUFFER_BIT,P.NEAREST):_i?P.copyTexSubImage3D(et,se,Ue,Ze,ot+ni,Te,Ae,pe,fe):P.copyTexSubImage2D(et,se,Ue,Ze,Te,Ae,pe,fe);O.bindFramebuffer(P.READ_FRAMEBUFFER,null),O.bindFramebuffer(P.DRAW_FRAMEBUFFER,null)}else _i?w.isDataTexture||w.isData3DTexture?P.texSubImage3D(et,se,Ue,Ze,ot,pe,fe,_e,Je,Ge,rt.data):k.isCompressedArrayTexture?P.compressedTexSubImage3D(et,se,Ue,Ze,ot,pe,fe,_e,Je,rt.data):P.texSubImage3D(et,se,Ue,Ze,ot,pe,fe,_e,Je,Ge,rt):w.isDataTexture?P.texSubImage2D(P.TEXTURE_2D,se,Ue,Ze,pe,fe,Je,Ge,rt.data):w.isCompressedTexture?P.compressedTexSubImage2D(P.TEXTURE_2D,se,Ue,Ze,rt.width,rt.height,Je,rt.data):P.texSubImage2D(P.TEXTURE_2D,se,Ue,Ze,pe,fe,Je,Ge,rt);P.pixelStorei(P.UNPACK_ROW_LENGTH,dt),P.pixelStorei(P.UNPACK_IMAGE_HEIGHT,Ne),P.pixelStorei(P.UNPACK_SKIP_PIXELS,Ce),P.pixelStorei(P.UNPACK_SKIP_ROWS,Lt),P.pixelStorei(P.UNPACK_SKIP_IMAGES,Ta),se===0&&k.generateMipmaps&&P.generateMipmap(et),O.unbindTexture()},this.initRenderTarget=function(w){j.get(w).__webglFramebuffer===void 0&&te.setupRenderTarget(w)},this.initTexture=function(w){w.isCubeTexture?te.setTextureCube(w,0):w.isData3DTexture?te.setTexture3D(w,0):w.isDataArrayTexture||w.isCompressedArrayTexture?te.setTexture2DArray(w,0):te.setTexture2D(w,0),O.unbindTexture()},this.resetState=function(){z=0,L=0,B=null,O.reset(),it.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return di}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=He._getDrawingBufferColorSpace(e),t.unpackColorSpace=He._getUnpackColorSpace()}};var Pi=12,_a={"dark-green":"#222A1B",green:"#C6DDA4",cyan:"#B7D6D6","off-white":"#F2F0E2"},nn=Math.PI*2;function Rh(r){let e=r>>>0;return()=>{e=e+1831565813>>>0;let t=e;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}}function xa(r){let e=Math.max(r(),1e-9),t=r();return Math.sqrt(-2*Math.log(e))*Math.cos(nn*t)}function ya(r){let e=parseInt(r.replace("#",""),16);return[(e>>16&255)/255,(e>>8&255)/255,(e&255)/255]}function Kd(r){let e=new Uint8Array(512),t=Array.from({length:256},(s,a)=>a);for(let s=255;s>0;s--){let a=Math.floor(r()*(s+1));[t[s],t[a]]=[t[a],t[s]]}for(let s=0;s<512;s++)e[s]=t[s&255];let i=(s,a,o)=>{let c=s/256*nn;return Math.cos(c)*a+Math.sin(c)*o},n=s=>s*s*s*(s*(s*6-15)+10);return(s,a)=>{let o=Math.floor(s),c=Math.floor(a),l=s-o,h=a-c,u=o&255,d=c&255,p=e[e[u]+d],f=e[e[u]+d+1],x=e[e[u+1]+d],m=e[e[u+1]+d+1],g=n(l),v=n(h),_=i(p,l,h)+g*(i(x,l-1,h)-i(p,l,h)),T=i(f,l,h-1)+g*(i(m,l-1,h-1)-i(f,l,h-1));return _+v*(T-_)}}var $d=`
vec3 mod289(vec3 x){return x-floor(x*(1.0/289.0))*289.0;}
vec4 mod289(vec4 x){return x-floor(x*(1.0/289.0))*289.0;}
vec4 permute(vec4 x){return mod289(((x*34.0)+1.0)*x);}
vec4 taylorInvSqrt(vec4 r){return 1.79284291400159-0.85373472095314*r;}
float snoise(vec3 v){
  const vec2 C=vec2(1.0/6.0,1.0/3.0);
  const vec4 D=vec4(0.0,0.5,1.0,2.0);
  vec3 i=floor(v+dot(v,C.yyy));
  vec3 x0=v-i+dot(i,C.xxx);
  vec3 g=step(x0.yzx,x0.xyz);
  vec3 l=1.0-g;
  vec3 i1=min(g.xyz,l.zxy);
  vec3 i2=max(g.xyz,l.zxy);
  vec3 x1=x0-i1+C.xxx;
  vec3 x2=x0-i2+C.yyy;
  vec3 x3=x0-D.yyy;
  i=mod289(i);
  vec4 p=permute(permute(permute(i.z+vec4(0.0,i1.z,i2.z,1.0))+i.y+vec4(0.0,i1.y,i2.y,1.0))+i.x+vec4(0.0,i1.x,i2.x,1.0));
  float n_=0.142857142857;
  vec3 ns=n_*D.wyz-D.xzx;
  vec4 j=p-49.0*floor(p*ns.z*ns.z);
  vec4 x_=floor(j*ns.z);
  vec4 y_=floor(j-7.0*x_);
  vec4 x=x_*ns.x+ns.yyyy;
  vec4 y=y_*ns.x+ns.yyyy;
  vec4 h=1.0-abs(x)-abs(y);
  vec4 b0=vec4(x.xy,y.xy);
  vec4 b1=vec4(x.zw,y.zw);
  vec4 s0=floor(b0)*2.0+1.0;
  vec4 s1=floor(b1)*2.0+1.0;
  vec4 sh=-step(h,vec4(0.0));
  vec4 a0=b0.xzyw+s0.xzyw*sh.xxyy;
  vec4 a1=b1.xzyw+s1.xzyw*sh.zzww;
  vec3 p0=vec3(a0.xy,h.x);
  vec3 p1=vec3(a0.zw,h.y);
  vec3 p2=vec3(a1.xy,h.z);
  vec3 p3=vec3(a1.zw,h.w);
  vec4 norm=taylorInvSqrt(vec4(dot(p0,p0),dot(p1,p1),dot(p2,p2),dot(p3,p3)));
  p0*=norm.x;p1*=norm.y;p2*=norm.z;p3*=norm.w;
  vec4 m=max(0.6-vec4(dot(x0,x0),dot(x1,x1),dot(x2,x2),dot(x3,x3)),0.0);
  m=m*m;
  return 42.0*dot(m*m,vec4(dot(p0,x0),dot(p1,x1),dot(p2,x2),dot(p3,x3)));
}
`,Ph=`
uniform vec2 uRes;
uniform float uPR;
uniform float uTheta;
uniform vec2 uFocus;   // centre of the material, p-space
uniform vec2 uQuiet;   // unit vector toward the type side, which stays silent
uniform vec2 uDrift;   // slow camera drift, p-space
uniform float uSeed;
${$d}
float fbm(vec3 p){
  float a=0.5, s=0.0;
  for(int i=0;i<OCTAVES;i++){ s+=a*snoise(p); p=p*2.03+vec3(17.1,9.2,4.7); a*=0.5; }
  return s;
}
float presence(vec2 p){
  vec2 d = p - uFocus;
  d += uQuiet * max(dot(d, uQuiet), 0.0) * 0.9;   // falls off faster toward the type
  return exp(-dot(d,d) / (2.0*0.36*0.36));
}
// A gel layer's field, drifting on a circle of radius R in noise space. The
// presence term is coupled in weakly, so near the focus a layer is ~60% covered
// (islands with gaps the ground shows through: hydrated, not milky) and far
// from it nothing clears the threshold. Strong coupling saturates every layer
// into one opaque blob, which reads as fog.
// Low warp on purpose: at ~1.2 the warp turns sheets into smoke wisps.
float gelField(vec2 p, float freq, float ph, float R, float s){
  vec3 off = vec3(R*cos(uTheta+ph), s + uSeed, R*sin(uTheta+ph));
  vec2 q = p*freq;
  vec2 w = vec2(fbm(vec3(q,0.0)+off), fbm(vec3(q+vec2(5.2,1.3),3.1)+off));
  float f = fbm(vec3(q + 0.7*w, 7.7) + off*0.7);
  return f + (presence(p) - 0.55) * 0.7 - 0.25;   // 0 is the layer's boundary
}
float gelAlpha(float f, float soft){ return smoothstep(-soft, soft, f); }
// The layer's own boundary as a 1.5px line: a membrane edge, which gives the
// plane definition without a hard slab or a glow.
float membrane(float f){
  return 1.0 - smoothstep(0.0, 1.5*uPR, abs(f) / max(fwidth(f), 1e-5));
}
vec2 toP(vec2 frag){ return (frag - 0.5*uRes) / uRes.y; }
`,Ih=`
void main(){ gl_Position = vec4(position.xy, 0.0, 1.0); }
`,Qd=`
uniform vec3 uGround, uGreen, uCyan, uOff;
${Ph}
float hash(vec2 p){ return fract(sin(dot(p, vec2(12.9898,78.233))) * 43758.5453); }
void main(){
  vec2 frag = gl_FragCoord.xy;
  vec2 uv = frag / uRes;
  vec2 p = toP(frag);

  // Ground: dark-green, lifted toward off-white at <=4% in the top-right corner.
  // "If you can name it as a gradient, it is too strong" (frame.md, ground-shift law).
  vec3 col = mix(uGround, uOff, 0.04 * pow(clamp((uv.x + uv.y)*0.5, 0.0, 1.0), 1.6));

  // Grid-underlay: static 1px rules at 4%, the bottom of the 4\u20138% band: at 5%
  // the empty type side read as graph paper ("never legible as a pattern").
  // Cells from the LONG edge: from the width, a phone got 22px graph paper.
  float cell = max(uRes.x, uRes.y) / 24.0;
  vec2 g = mod(frag - 0.5, cell);
  float line = max(step(g.x, uPR), step(g.y, uPR));
  col = mix(col, uOff, 0.04 * line);

  // Far layer (cyan): lowest contrast, widest edge: atmospheric falloff, not smallness.
  vec2 pf = p - uDrift*0.3;
  float ff = gelField(pf, 0.75, 0.0, 0.11, 0.0);
  col = mix(col, uCyan, 0.12 * gelAlpha(ff, 0.11));

  // Mid layer (green): membrane edge, plus a few faint internal iso-lines for
  // the hydrogel's structure (few and faint, or it reads as a contour map).
  vec2 pm = p - uDrift*0.6;
  float fm = gelField(pm, 1.05, 2.1, 0.13, 11.0);
  // Tight fill edge: a soft ramp outside the membrane line reads as a glow
  // halo, which the brand bans. Only the far layer is allowed to be soft.
  float aMid = gelAlpha(fm, 0.012);
  col = mix(col, uGreen, 0.18 * aMid);
  col = mix(col, uGreen, 0.20 * membrane(fm));
  float k = fm * 5.0;
  float contour = 1.0 - smoothstep(0.0, 1.1*uPR, abs(fract(k - 0.5) - 0.5) / max(fwidth(k), 1e-4));
  col = mix(col, uGreen, 0.06 * contour * aMid);

  // Static dither: +-0.5 of one 8-bit level, so the dark lift does not band in H.264.
  col += (hash(frag) - 0.5) / 255.0;
  gl_FragColor = vec4(col, 1.0);
}
`,ep=`
uniform vec3 uOff;
${Ph}
void main(){
  vec2 p = toP(gl_FragCoord.xy) - uDrift*1.25;
  float f = gelField(p, 1.4, 4.3, 0.15, 23.0);
  gl_FragColor = vec4(uOff, 0.09 * gelAlpha(f, 0.014) + 0.10 * membrane(f));
}
`,tp=`
attribute vec2 corner;          // x: 0 = A end, 1 = B end \xB7 y: -1/+1 side
attribute vec3 aA;              // x, y (p-space), alpha
attribute vec3 aB;
attribute vec2 aStyle;          // width (CSS px), colour mix cyan->off-white
uniform vec2 uRes;
uniform float uPR;
varying float vAlpha;
varying float vDist;
varying float vHW;
varying float vMix;
void main(){
  vec2 a = aA.xy * uRes.y, b = aB.xy * uRes.y;
  vec2 dir = b - a;
  float len = length(dir);
  dir = len > 1e-5 ? dir / len : vec2(1.0, 0.0);
  vec2 n = vec2(-dir.y, dir.x);
  float hw = 0.5 * aStyle.x * uPR;
  float ext = hw + 1.0;                           // 1 device px of AA fringe
  vec2 P = mix(a, b, corner.x) + n * corner.y * ext;
  vAlpha = mix(aA.z, aB.z, corner.x);
  vDist = corner.y * ext;
  vHW = hw;
  vMix = aStyle.y;
  gl_Position = vec4(P / (0.5 * uRes), 0.0, 1.0);
}
`,ip=`
uniform vec3 uCyan, uOff;
varying float vAlpha;
varying float vDist;
varying float vHW;
varying float vMix;
void main(){
  float cover = clamp(vHW + 0.5 - abs(vDist), 0.0, 1.0);
  gl_FragColor = vec4(mix(uCyan, uOff, vMix), vAlpha * cover);
}
`,np=`
attribute vec2 corner;          // -1..1 quad
attribute vec4 aCell;           // x, y (p-space), radius (p-space), alpha
uniform vec2 uRes;
varying vec2 vLocal;
varying float vRpx;
varying float vAlpha;
void main(){
  float rpx = aCell.z * uRes.y;
  float ext = rpx + 1.5;
  vLocal = corner * ext;
  vRpx = rpx;
  vAlpha = aCell.w;
  vec2 P = aCell.xy * uRes.y + corner * ext;
  gl_Position = vec4(P / (0.5 * uRes), 0.0, 1.0);
}
`,rp=`
uniform vec3 uGreen, uOff;
uniform float uPR;
varying vec2 vLocal;
varying float vRpx;
varying float vAlpha;
void main(){
  float d = length(vLocal);
  float fill = clamp(vRpx - d + 0.5, 0.0, 1.0);
  float ring = clamp(1.0 - abs(d - (vRpx - 0.6*uPR)) / (0.8*uPR), 0.0, 1.0) * fill;
  vec3 col = mix(uGreen, uOff, 0.55 * ring);
  float a = vAlpha * max(fill * 0.62, ring);
  if (a <= 0.001) discard;
  gl_FragColor = vec4(col, a);
}
`;function Lh(r,e={}){let t=e.seed??3,i=e.quality??"high",n=Rh(t*9973+17),s=Kd(Rh(t*7919+5)),a=new ga({canvas:r,antialias:!0,alpha:!1,premultipliedAlpha:!1,preserveDrawingBuffer:!0,powerPreference:"high-performance"});a.outputColorSpace=ui,a.toneMapping=Vt,a.autoClear=!0;let o=new nr,c=new An(-1,1,1,-1,0,1),l={uRes:{value:[1,1]},uPR:{value:1},uTheta:{value:0},uFocus:{value:[0,0]},uQuiet:{value:[-1,0]},uDrift:{value:[0,0]},uSeed:{value:t*1.37},uGround:{value:ya(e.ground??_a["dark-green"])},uGreen:{value:ya(_a.green)},uCyan:{value:ya(_a.cyan)},uOff:{value:ya(_a["off-white"])}},h={OCTAVES:i==="low"?3:4},u=new Ii(2,2),d=new ut(u,new mt({uniforms:l,defines:h,vertexShader:Ih,fragmentShader:Qd,depthTest:!1,depthWrite:!1}));d.renderOrder=0;let p=new ut(u,new mt({uniforms:l,defines:h,vertexShader:Ih,fragmentShader:ep,transparent:!0,blending:fi,depthTest:!1,depthWrite:!1}));p.renderOrder=3;let f=84,x=52,m=.0058,g=[.35,1.95,-.85],v=Array.from({length:f},(J,K)=>({sx:xa(n)*.34,sy:xa(n)*.26,fam:g[K%g.length],z:n(),ph:n()*nn,k:n()<.5?1:2})),_=f*x,T=new En;T.setAttribute("corner",new pt(new Float32Array([0,-1,1,-1,0,1,1,1]),2)),T.setIndex([0,1,2,2,1,3]);let E=new Float32Array(_*3),b=new Float32Array(_*3),D=new Float32Array(_*2);T.setAttribute("aA",new Ci(E,3)),T.setAttribute("aB",new Ci(b,3)),T.setAttribute("aStyle",new Ci(D,2)),T.instanceCount=_,v.forEach((J,K)=>{for(let Q=0;Q<x;Q++)D[(K*x+Q)*2]=1.15+.95*J.z,D[(K*x+Q)*2+1]=.25+.6*J.z});let z=new ut(T,new mt({uniforms:l,vertexShader:tp,fragmentShader:ip,transparent:!0,blending:fi,depthTest:!1,depthWrite:!1}));z.frustumCulled=!1,z.renderOrder=1;let L=[];for(let J=0;J<7;J++){let K=.026+n()*.036,Q=[],de=Math.round(18+n()*42);for(let xe=0;Q.length<de&&xe<de*40;xe++){let S=n()*nn,M=Math.sqrt(n())*K,U=Math.cos(S)*M,I=Math.sin(S)*M*.82,y=.0028+n()*.0032*(1-M/K*.5);Q.every(A=>Math.hypot(A.x-U,A.y-I)>A.r+y+.0012)&&Q.push({x:U,y:I,r:y,d:M/K,ph:n()*nn})}L.push({sx:xa(n)*.3,sy:xa(n)*.22,z:.35+n()*.5,ph:n()*nn,cells:Q})}let B=L.reduce((J,K)=>J+K.cells.length,0),V=new En;V.setAttribute("corner",new pt(new Float32Array([-1,-1,1,-1,-1,1,1,1]),2)),V.setIndex([0,1,2,2,1,3]);let F=new Float32Array(B*4);V.setAttribute("aCell",new Ci(F,4)),V.instanceCount=B;let Y=new ut(V,new mt({uniforms:l,vertexShader:np,fragmentShader:rp,transparent:!0,blending:fi,depthTest:!1,depthWrite:!1}));Y.frustumCulled=!1,Y.renderOrder=2,o.add(d,z,Y,p);function G(J,K){let[Q,de]=l.uFocus.value,[xe,S]=l.uQuiet.value,M=J-Q,U=K-de,I=Math.max(M*xe+U*S,0)*.9;return M+=xe*I,U+=S*I,Math.exp(-(M*M+U*U)/(2*.36*.36))}let Z=(J,K,Q)=>{let de=Math.min(Math.max((Q-J)/(K-J),0),1);return de*de*(3-2*de)},$=(J,K)=>Z(.25,.75,G(J,K));function ae(J,K){let Q=J/K;e.focus?l.uFocus.value=[(e.focus[0]-.5)*Q,e.focus[1]-.5]:Q>=1.2?(l.uFocus.value=[.19*Q,0],l.uQuiet.value=[-1,0]):(l.uFocus.value=[0,-.2],l.uQuiet.value=[0,1])}let ne=1,he=1;function ue(J,K,Q=1){ne=J,he=K,a.setPixelRatio(Q),a.setSize(J,K,!1);let de=a.getDrawingBufferSize(new re);l.uRes.value=[de.x,de.y],l.uPR.value=Q,ae(J,K)}function ve(J){let K=nn*((J%Pi+Pi)%Pi)/Pi;l.uTheta.value=K;let Q=[.01*Math.cos(K),.007*Math.sin(K)];l.uDrift.value=Q;let[de,xe]=l.uFocus.value,[S,M]=l.uQuiet.value,U=M!==0,I=.07*Math.cos(K),y=.07*Math.sin(K),A=0;for(let R of v){let W=.5+.5*R.z,O=de+(U?R.sy*1.3:R.sx)+.012*Math.cos(R.k*K+R.ph),H=xe+(U?R.sx*.75:R.sy)+.012*Math.sin(R.k*K+R.ph),j=O-Q[0]*W,te=H-Q[1]*W,ie=.08+.16*R.z;for(let oe=0;oe<x;oe++){let ge=R.fam+2.8*s(O*3.2+I+3.1,H*3.2+y-1.7);O+=Math.cos(ge)*m,H+=Math.sin(ge)*m;let ye=O-Q[0]*W,Ee=H-Q[1]*W,Pe=me=>Math.pow(Math.sin(Math.PI*me),.8),Fe=A*3;E[Fe]=j,E[Fe+1]=te,E[Fe+2]=ie*Pe(oe/x)*$(j,te),b[Fe]=ye,b[Fe+1]=Ee,b[Fe+2]=ie*Pe((oe+1)/x)*$(ye,Ee),j=ye,te=Ee,A++}}T.attributes.aA.needsUpdate=!0,T.attributes.aB.needsUpdate=!0;let N=0;for(let R of L){let W=.5+.5*R.z,O=de+(U?R.sy*1.3:R.sx)+.009*Math.cos(K+R.ph)-Q[0]*W,H=xe+(U?R.sx*.75:R.sy)+.009*Math.sin(K+R.ph)-Q[1]*W,j=$(O,H);for(let te of R.cells){let ie=1+.07*Math.cos(K-te.d*3+R.ph),oe=N*4;F[oe]=O+te.x*ie,F[oe+1]=H+te.y*ie,F[oe+2]=te.r*(1+.05*Math.cos(K+te.ph)),F[oe+3]=(.3+.35*R.z)*j*(1-.35*te.d),N++}}V.attributes.aCell.needsUpdate=!0,a.render(o,c)}function Se(){u.dispose(),T.dispose(),V.dispose(),[d,p,z,Y].forEach(J=>J.material.dispose()),a.dispose()}return ue(e.width??(r.clientWidth||1920),e.height??(r.clientHeight||1080),e.pixelRatio??1),{renderAt:ve,setSize:ue,dispose:Se,period:Pi,renderer:a}}function r1(r,e={}){let t=e.maxDpr??1.5,i=e.stillAt??Pi*.3,n=window.matchMedia?.("(prefers-reduced-motion: reduce)"),s=window.matchMedia?.("(pointer: coarse)").matches,a=document.createElement("canvas");a.setAttribute("aria-hidden","true"),a.style.cssText="position:absolute;inset:0;width:100%;height:100%;display:block",r.appendChild(a);let o;try{o=Lh(a,{width:r.clientWidth||1,height:r.clientHeight||1,pixelRatio:Math.min(window.devicePixelRatio||1,t),quality:e.quality??(s?"low":"high"),seed:e.seed})}catch(_){return a.remove(),console.warn("[hero-gel] WebGL unavailable, keeping the CSS fallback",_),()=>{}}let c=!0,l=0,h=performance.now(),u=()=>n?.matches,d=_=>{l=0,o.renderAt((_-h)/1e3%Pi),p()},p=()=>{!l&&c&&!document.hidden&&!u()&&(l=requestAnimationFrame(d))},f=()=>o.renderAt(i),x=new ResizeObserver(()=>{let _=r.clientWidth,T=r.clientHeight;!_||!T||(o.setSize(_,T,Math.min(window.devicePixelRatio||1,t)),(u()||!l)&&f())});x.observe(r);let m=new IntersectionObserver(([_])=>{c=_.isIntersecting,p()});m.observe(r);let g=()=>p();document.addEventListener("visibilitychange",g);let v=()=>u()?f():p();return n?.addEventListener?.("change",v),f(),p(),function(){cancelAnimationFrame(l),x.disconnect(),m.disconnect(),document.removeEventListener("visibilitychange",g),n?.removeEventListener?.("change",v),o.dispose(),a.remove()}}export{Pi as PERIOD,Lh as createHeroGel,r1 as mountHeroGel};
/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */
