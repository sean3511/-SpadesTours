var t={d:(e,n)=>{for(var r in n)t.o(n,r)&&!t.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:n[r]})},o:(t,e)=>Object.prototype.hasOwnProperty.call(t,e)},e={};t.d(e,{iE:()=>Le,fw:()=>se,sb:()=>ue,YH:()=>Sn,QN:()=>ce,h:()=>Fe,I4:()=>de,d4:()=>pe,Dp:()=>fe,bt:()=>he,Ye:()=>ve,sO:()=>rt,eJ:()=>et,qo:()=>ae,$e:()=>le});var n,r,o,i,s,u,_,c,l,a={},f=[],p=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i,h=Array.isArray;function d(t,e){for(var n in e)t[n]=e[n];return t}function v(t){var e=t.parentNode;e&&e.removeChild(t)}function y(t,e,r){var o,i,s,u={};for(s in e)"key"==s?o=e[s]:"ref"==s?i=e[s]:u[s]=e[s];if(arguments.length>2&&(u.children=arguments.length>3?n.call(arguments,2):r),"function"==typeof t&&null!=t.defaultProps)for(s in t.defaultProps)void 0===u[s]&&(u[s]=t.defaultProps[s]);return g(t,u,o,i,null)}function g(t,e,n,i,s){var u={type:t,props:e,key:n,ref:i,__k:null,__:null,__b:0,__e:null,__d:void 0,__c:null,constructor:void 0,__v:null==s?++o:s,__i:-1,__u:0};return null==s&&null!=r.vnode&&r.vnode(u),u}function m(t){return t.children}function w(t,e){this.props=t,this.context=e}function b(t,e){if(null==e)return t.__?b(t.__,t.__i+1):null;for(var n;e<t.__k.length;e++)if(null!=(n=t.__k[e])&&null!=n.__e)return n.__e;return"function"==typeof t.type?b(t):null}function k(t){var e,n;if(null!=(t=t.__)&&null!=t.__c){for(t.__e=t.__c.base=null,e=0;e<t.__k.length;e++)if(null!=(n=t.__k[e])&&null!=n.__e){t.__e=t.__c.base=n.__e;break}return k(t)}}function x(t){(!t.__d&&(t.__d=!0)&&s.push(t)&&!S.__r++||u!==r.debounceRendering)&&((u=r.debounceRendering)||_)(S)}function S(){var t,e,n,o,i,u,_,l,a;for(s.sort(c);t=s.shift();)t.__d&&(e=s.length,o=void 0,u=(i=(n=t).__v).__e,l=[],a=[],(_=n.__P)&&((o=d({},i)).__v=i.__v+1,r.vnode&&r.vnode(o),T(_,o,i,n.__n,void 0!==_.ownerSVGElement,32&i.__u?[u]:null,l,null==u?b(i):u,!!(32&i.__u),a),o.__.__k[o.__i]=o,W(l,o,a),o.__e!=u&&k(o)),s.length>e&&s.sort(c));S.__r=0}function E(t,e,n,r,o,i,s,u,_,c,l){var p,h,d,v,y,g=r&&r.__k||f,m=e.length;for(n.__d=_,P(n,e,g),_=n.__d,p=0;p<m;p++)null!=(d=n.__k[p])&&"boolean"!=typeof d&&"function"!=typeof d&&(h=-1===d.__i?a:g[d.__i]||a,d.__i=p,T(t,d,h,o,i,s,u,_,c,l),v=d.__e,d.ref&&h.ref!=d.ref&&(h.ref&&U(h.ref,null,d),l.push(d.ref,d.__c||v,d)),null==y&&null!=v&&(y=v),65536&d.__u||h.__k===d.__k?_=C(d,_,t):"function"==typeof d.type&&void 0!==d.__d?_=d.__d:v&&(_=v.nextSibling),d.__d=void 0,d.__u&=-196609);n.__d=_,n.__e=y}function P(t,e,n){var r,o,i,s,u,_=e.length,c=n.length,l=c,a=0;for(t.__k=[],r=0;r<_;r++)null!=(o=t.__k[r]=null==(o=e[r])||"boolean"==typeof o||"function"==typeof o?null:"string"==typeof o||"number"==typeof o||"bigint"==typeof o||o.constructor==String?g(null,o,null,null,o):h(o)?g(m,{children:o},null,null,null):void 0===o.constructor&&o.__b>0?g(o.type,o.props,o.key,o.ref?o.ref:null,o.__v):o)?(o.__=t,o.__b=t.__b+1,u=O(o,n,s=r+a,l),o.__i=u,i=null,-1!==u&&(l--,(i=n[u])&&(i.__u|=131072)),null==i||null===i.__v?(-1==u&&a--,"function"!=typeof o.type&&(o.__u|=65536)):u!==s&&(u===s+1?a++:u>s?l>_-s?a+=u-s:a--:a=u<s&&u==s-1?u-s:0,u!==r+a&&(o.__u|=65536))):(i=n[r])&&null==i.key&&i.__e&&(i.__e==t.__d&&(t.__d=b(i)),A(i,i,!1),n[r]=null,l--);if(l)for(r=0;r<c;r++)null!=(i=n[r])&&!(131072&i.__u)&&(i.__e==t.__d&&(t.__d=b(i)),A(i,i))}function C(t,e,n){var r,o;if("function"==typeof t.type){for(r=t.__k,o=0;r&&o<r.length;o++)r[o]&&(r[o].__=t,e=C(r[o],e,n));return e}return t.__e!=e&&(n.insertBefore(t.__e,e||null),e=t.__e),e&&e.nextSibling}function O(t,e,n,r){var o=t.key,i=t.type,s=n-1,u=n+1,_=e[n];if(null===_||_&&o==_.key&&i===_.type)return n;if(r>(null==_||131072&_.__u?0:1))for(;s>=0||u<e.length;){if(s>=0){if((_=e[s])&&!(131072&_.__u)&&o==_.key&&i===_.type)return s;s--}if(u<e.length){if((_=e[u])&&!(131072&_.__u)&&o==_.key&&i===_.type)return u;u++}}return-1}function $(t,e,n){"-"===e[0]?t.setProperty(e,null==n?"":n):t[e]=null==n?"":"number"!=typeof n||p.test(e)?n:n+"px"}function N(t,e,n,r,o){var i;t:if("style"===e)if("string"==typeof n)t.style.cssText=n;else{if("string"==typeof r&&(t.style.cssText=r=""),r)for(e in r)n&&e in n||$(t.style,e,"");if(n)for(e in n)r&&n[e]===r[e]||$(t.style,e,n[e])}else if("o"===e[0]&&"n"===e[1])i=e!==(e=e.replace(/(PointerCapture)$|Capture$/,"$1")),e=e.toLowerCase()in t?e.toLowerCase().slice(2):e.slice(2),t.l||(t.l={}),t.l[e+i]=n,n?r?n.u=r.u:(n.u=Date.now(),t.addEventListener(e,i?H:M,i)):t.removeEventListener(e,i?H:M,i);else{if(o)e=e.replace(/xlink(H|:h)/,"h").replace(/sName$/,"s");else if("width"!==e&&"height"!==e&&"href"!==e&&"list"!==e&&"form"!==e&&"tabIndex"!==e&&"download"!==e&&"rowSpan"!==e&&"colSpan"!==e&&"role"!==e&&e in t)try{t[e]=null==n?"":n;break t}catch(t){}"function"==typeof n||(null==n||!1===n&&"-"!==e[4]?t.removeAttribute(e):t.setAttribute(e,n))}}function M(t){var e=this.l[t.type+!1];if(t.t){if(t.t<=e.u)return}else t.t=Date.now();return e(r.event?r.event(t):t)}function H(t){return this.l[t.type+!0](r.event?r.event(t):t)}function T(t,e,n,o,i,s,u,_,c,l){var a,f,p,v,y,g,b,k,x,S,P,C,O,$,N,M=e.type;if(void 0!==e.constructor)return null;128&n.__u&&(c=!!(32&n.__u),s=[_=e.__e=n.__e]),(a=r.__b)&&a(e);t:if("function"==typeof M)try{if(k=e.props,x=(a=M.contextType)&&o[a.__c],S=a?x?x.props.value:a.__:o,n.__c?b=(f=e.__c=n.__c).__=f.__E:("prototype"in M&&M.prototype.render?e.__c=f=new M(k,S):(e.__c=f=new w(k,S),f.constructor=M,f.render=L),x&&x.sub(f),f.props=k,f.state||(f.state={}),f.context=S,f.__n=o,p=f.__d=!0,f.__h=[],f._sb=[]),null==f.__s&&(f.__s=f.state),null!=M.getDerivedStateFromProps&&(f.__s==f.state&&(f.__s=d({},f.__s)),d(f.__s,M.getDerivedStateFromProps(k,f.__s))),v=f.props,y=f.state,f.__v=e,p)null==M.getDerivedStateFromProps&&null!=f.componentWillMount&&f.componentWillMount(),null!=f.componentDidMount&&f.__h.push(f.componentDidMount);else{if(null==M.getDerivedStateFromProps&&k!==v&&null!=f.componentWillReceiveProps&&f.componentWillReceiveProps(k,S),!f.__e&&(null!=f.shouldComponentUpdate&&!1===f.shouldComponentUpdate(k,f.__s,S)||e.__v===n.__v)){for(e.__v!==n.__v&&(f.props=k,f.state=f.__s,f.__d=!1),e.__e=n.__e,e.__k=n.__k,e.__k.forEach((function(t){t&&(t.__=e)})),P=0;P<f._sb.length;P++)f.__h.push(f._sb[P]);f._sb=[],f.__h.length&&u.push(f);break t}null!=f.componentWillUpdate&&f.componentWillUpdate(k,f.__s,S),null!=f.componentDidUpdate&&f.__h.push((function(){f.componentDidUpdate(v,y,g)}))}if(f.context=S,f.props=k,f.__P=t,f.__e=!1,C=r.__r,O=0,"prototype"in M&&M.prototype.render){for(f.state=f.__s,f.__d=!1,C&&C(e),a=f.render(f.props,f.state,f.context),$=0;$<f._sb.length;$++)f.__h.push(f._sb[$]);f._sb=[]}else do{f.__d=!1,C&&C(e),a=f.render(f.props,f.state,f.context),f.state=f.__s}while(f.__d&&++O<25);f.state=f.__s,null!=f.getChildContext&&(o=d(d({},o),f.getChildContext())),p||null==f.getSnapshotBeforeUpdate||(g=f.getSnapshotBeforeUpdate(v,y)),E(t,h(N=null!=a&&a.type===m&&null==a.key?a.props.children:a)?N:[N],e,n,o,i,s,u,_,c,l),f.base=e.__e,e.__u&=-161,f.__h.length&&u.push(f),b&&(f.__E=f.__=null)}catch(t){e.__v=null,c||null!=s?(e.__e=_,e.__u|=c?160:32,s[s.indexOf(_)]=null):(e.__e=n.__e,e.__k=n.__k),r.__e(t,e,n)}else null==s&&e.__v===n.__v?(e.__k=n.__k,e.__e=n.__e):e.__e=j(n.__e,e,n,o,i,s,u,c,l);(a=r.diffed)&&a(e)}function W(t,e,n){e.__d=void 0;for(var o=0;o<n.length;o++)U(n[o],n[++o],n[++o]);r.__c&&r.__c(e,t),t.some((function(e){try{t=e.__h,e.__h=[],t.some((function(t){t.call(e)}))}catch(t){r.__e(t,e.__v)}}))}function j(t,e,r,o,i,s,u,_,c){var l,f,p,d,y,g,m,w=r.props,k=e.props,x=e.type;if("svg"===x&&(i=!0),null!=s)for(l=0;l<s.length;l++)if((y=s[l])&&"setAttribute"in y==!!x&&(x?y.localName===x:3===y.nodeType)){t=y,s[l]=null;break}if(null==t){if(null===x)return document.createTextNode(k);t=i?document.createElementNS("http://www.w3.org/2000/svg",x):document.createElement(x,k.is&&k),s=null,_=!1}if(null===x)w===k||_&&t.data===k||(t.data=k);else{if(s=s&&n.call(t.childNodes),w=r.props||a,!_&&null!=s)for(w={},l=0;l<t.attributes.length;l++)w[(y=t.attributes[l]).name]=y.value;for(l in w)y=w[l],"children"==l||("dangerouslySetInnerHTML"==l?p=y:"key"===l||l in k||N(t,l,null,y,i));for(l in k)y=k[l],"children"==l?d=y:"dangerouslySetInnerHTML"==l?f=y:"value"==l?g=y:"checked"==l?m=y:"key"===l||_&&"function"!=typeof y||w[l]===y||N(t,l,y,w[l],i);if(f)_||p&&(f.__html===p.__html||f.__html===t.innerHTML)||(t.innerHTML=f.__html),e.__k=[];else if(p&&(t.innerHTML=""),E(t,h(d)?d:[d],e,r,o,i&&"foreignObject"!==x,s,u,s?s[0]:r.__k&&b(r,0),_,c),null!=s)for(l=s.length;l--;)null!=s[l]&&v(s[l]);_||(l="value",void 0!==g&&(g!==t[l]||"progress"===x&&!g||"option"===x&&g!==w[l])&&N(t,l,g,w[l],!1),l="checked",void 0!==m&&m!==t[l]&&N(t,l,m,w[l],!1))}return t}function U(t,e,n){try{"function"==typeof t?t(e):t.current=e}catch(t){r.__e(t,n)}}function A(t,e,n){var o,i;if(r.unmount&&r.unmount(t),(o=t.ref)&&(o.current&&o.current!==t.__e||U(o,null,e)),null!=(o=t.__c)){if(o.componentWillUnmount)try{o.componentWillUnmount()}catch(t){r.__e(t,e)}o.base=o.__P=null,t.__c=void 0}if(o=t.__k)for(i=0;i<o.length;i++)o[i]&&A(o[i],e,n||"function"!=typeof t.type);n||null==t.__e||v(t.__e),t.__=t.__e=t.__d=void 0}function L(t,e,n){return this.constructor(t,n)}function D(t,e,o){var i,s,u,_;r.__&&r.__(t,e),s=(i="function"==typeof o)?null:o&&o.__k||e.__k,u=[],_=[],T(e,t=(!i&&o||e).__k=y(m,null,[t]),s||a,a,void 0!==e.ownerSVGElement,!i&&o?[o]:s?null:e.firstChild?n.call(e.childNodes):null,u,!i&&o?o:s?s.__e:e.firstChild,i,_),W(u,t,_)}function F(t,e){D(t,e,F)}function V(t,e,r){var o,i,s,u,_=d({},t.props);for(s in t.type&&t.type.defaultProps&&(u=t.type.defaultProps),e)"key"==s?o=e[s]:"ref"==s?i=e[s]:_[s]=void 0===e[s]&&void 0!==u?u[s]:e[s];return arguments.length>2&&(_.children=arguments.length>3?n.call(arguments,2):r),g(t.type,_,o||t.key,i||t.ref,null)}n=f.slice,r={__e:function(t,e,n,r){for(var o,i,s;e=e.__;)if((o=e.__c)&&!o.__)try{if((i=o.constructor)&&null!=i.getDerivedStateFromError&&(o.setState(i.getDerivedStateFromError(t)),s=o.__d),null!=o.componentDidCatch&&(o.componentDidCatch(t,r||{}),s=o.__d),s)return o.__E=o}catch(e){t=e}throw t}},o=0,i=function(t){return null!=t&&null==t.constructor},w.prototype.setState=function(t,e){var n;n=null!=this.__s&&this.__s!==this.state?this.__s:this.__s=d({},this.state),"function"==typeof t&&(t=t(d({},n),this.props)),t&&d(n,t),null!=t&&this.__v&&(e&&this._sb.push(e),x(this))},w.prototype.forceUpdate=function(t){this.__v&&(this.__e=!0,t&&this.__h.push(t),x(this))},w.prototype.render=m,s=[],_="function"==typeof Promise?Promise.prototype.then.bind(Promise.resolve()):setTimeout,c=function(t,e){return t.__v.__b-e.__v.__b},S.__r=0,l=0;var R,I,B,q,G=0,z=[],J=[],Y=r.__b,K=r.__r,Q=r.diffed,X=r.__c,Z=r.unmount;function tt(t,e){r.__h&&r.__h(I,t,G||e),G=0;var n=I.__H||(I.__H={__:[],__h:[]});return t>=n.__.length&&n.__.push({__V:J}),n.__[t]}function et(t){return G=1,function(t,e,n){var r=tt(R++,2);if(r.t=t,!r.__c&&(r.__=[pt(void 0,e),function(t){var e=r.__N?r.__N[0]:r.__[0],n=r.t(e,t);e!==n&&(r.__N=[n,r.__[1]],r.__c.setState({}))}],r.__c=I,!I.u)){var o=function(t,e,n){if(!r.__c.__H)return!0;var o=r.__c.__H.__.filter((function(t){return t.__c}));if(o.every((function(t){return!t.__N})))return!i||i.call(this,t,e,n);var s=!1;return o.forEach((function(t){if(t.__N){var e=t.__[0];t.__=t.__N,t.__N=void 0,e!==t.__[0]&&(s=!0)}})),!(!s&&r.__c.props===t)&&(!i||i.call(this,t,e,n))};I.u=!0;var i=I.shouldComponentUpdate,s=I.componentWillUpdate;I.componentWillUpdate=function(t,e,n){if(this.__e){var r=i;i=void 0,o(t,e,n),i=r}s&&s.call(this,t,e,n)},I.shouldComponentUpdate=o}return r.__N||r.__}(pt,t)}function nt(t,e){var n=tt(R++,3);!r.__s&&ft(n.__H,e)&&(n.__=t,n.i=e,I.__H.__h.push(n))}function rt(t){return G=5,ot((function(){return{current:t}}),[])}function ot(t,e){var n=tt(R++,7);return ft(n.__H,e)?(n.__V=t(),n.i=e,n.__h=t,n.__V):n.__}function it(t,e){return G=8,ot((function(){return t}),e)}function st(t){var e=I.context[t.__c],n=tt(R++,9);return n.c=t,e?(null==n.__&&(n.__=!0,e.sub(I)),e.props.value):t.__}function ut(){for(var t;t=z.shift();)if(t.__P&&t.__H)try{t.__H.__h.forEach(lt),t.__H.__h.forEach(at),t.__H.__h=[]}catch(e){t.__H.__h=[],r.__e(e,t.__v)}}r.__b=function(t){I=null,Y&&Y(t)},r.__r=function(t){K&&K(t),R=0;var e=(I=t.__c).__H;e&&(B===I?(e.__h=[],I.__h=[],e.__.forEach((function(t){t.__N&&(t.__=t.__N),t.__V=J,t.__N=t.i=void 0}))):(e.__h.forEach(lt),e.__h.forEach(at),e.__h=[],R=0)),B=I},r.diffed=function(t){Q&&Q(t);var e=t.__c;e&&e.__H&&(e.__H.__h.length&&(1!==z.push(e)&&q===r.requestAnimationFrame||((q=r.requestAnimationFrame)||ct)(ut)),e.__H.__.forEach((function(t){t.i&&(t.__H=t.i),t.__V!==J&&(t.__=t.__V),t.i=void 0,t.__V=J}))),B=I=null},r.__c=function(t,e){e.some((function(t){try{t.__h.forEach(lt),t.__h=t.__h.filter((function(t){return!t.__||at(t)}))}catch(n){e.some((function(t){t.__h&&(t.__h=[])})),e=[],r.__e(n,t.__v)}})),X&&X(t,e)},r.unmount=function(t){Z&&Z(t);var e,n=t.__c;n&&n.__H&&(n.__H.__.forEach((function(t){try{lt(t)}catch(t){e=t}})),n.__H=void 0,e&&r.__e(e,n.__v))};var _t="function"==typeof requestAnimationFrame;function ct(t){var e,n=function(){clearTimeout(r),_t&&cancelAnimationFrame(e),setTimeout(t)},r=setTimeout(n,100);_t&&(e=requestAnimationFrame(n))}function lt(t){var e=I,n=t.__c;"function"==typeof n&&(t.__c=void 0,n()),I=e}function at(t){var e=I;t.__c=t.__(),I=e}function ft(t,e){return!t||t.length!==e.length||e.some((function(e,n){return e!==t[n]}))}function pt(t,e){return"function"==typeof e?e(t):e}function ht(){throw new Error("Cycle detected")}function dt(){if(wt>1)wt--;else{for(var t,e=!1;void 0!==mt;){var n=mt;for(mt=void 0,bt++;void 0!==n;){var r=n.o;if(n.o=void 0,n.f&=-3,!(8&n.f)&&Pt(n))try{n.c()}catch(n){e||(t=n,e=!0)}n=r}}if(bt=0,wt--,e)throw t}}function vt(t){if(wt>0)return t();wt++;try{return t()}finally{dt()}}var yt,gt=void 0,mt=void 0,wt=0,bt=0,kt=0;function xt(t){if(void 0!==gt){var e=t.n;if(void 0===e||e.t!==gt)return e={i:0,S:t,p:gt.s,n:void 0,t:gt,e:void 0,x:void 0,r:e},void 0!==gt.s&&(gt.s.n=e),gt.s=e,t.n=e,32&gt.f&&t.S(e),e;if(-1===e.i)return e.i=0,void 0!==e.n&&(e.n.p=e.p,void 0!==e.p&&(e.p.n=e.n),e.p=gt.s,e.n=void 0,gt.s.n=e,gt.s=e),e}}function St(t){this.v=t,this.i=0,this.n=void 0,this.t=void 0}function Et(t){return new St(t)}function Pt(t){for(var e=t.s;void 0!==e;e=e.n)if(e.S.i!==e.i||!e.S.h()||e.S.i!==e.i)return!0;return!1}function Ct(t){for(var e=t.s;void 0!==e;e=e.n){var n=e.S.n;if(void 0!==n&&(e.r=n),e.S.n=e,e.i=-1,void 0===e.n){t.s=e;break}}}function Ot(t){for(var e=t.s,n=void 0;void 0!==e;){var r=e.p;-1===e.i?(e.S.U(e),void 0!==r&&(r.n=e.n),void 0!==e.n&&(e.n.p=r)):n=e,e.S.n=e.r,void 0!==e.r&&(e.r=void 0),e=r}t.s=n}function $t(t){St.call(this,void 0),this.x=t,this.s=void 0,this.g=kt-1,this.f=4}function Nt(t){return new $t(t)}function Mt(t){var e=t.u;if(t.u=void 0,"function"==typeof e){wt++;var n=gt;gt=void 0;try{e()}catch(e){throw t.f&=-2,t.f|=8,Ht(t),e}finally{gt=n,dt()}}}function Ht(t){for(var e=t.s;void 0!==e;e=e.n)e.S.U(e);t.x=void 0,t.s=void 0,Mt(t)}function Tt(t){if(gt!==this)throw new Error("Out-of-order effect");Ot(this),gt=t,this.f&=-2,8&this.f&&Ht(this),dt()}function Wt(t){this.x=t,this.u=void 0,this.s=void 0,this.o=void 0,this.f=32}function jt(t){var e=new Wt(t);try{e.c()}catch(t){throw e.d(),t}return e.d.bind(e)}function Ut(t,e){r[t]=e.bind(null,r[t]||function(){})}function At(t){yt&&yt(),yt=t&&t.S()}function Lt(t){var e=this,n=t.data,r=function(t){return ot((function(){return Et(t)}),[])}(n);r.value=n;var o=ot((function(){for(var t=e.__v;t=t.__;)if(t.__c){t.__c.__$f|=4;break}return e.__$u.c=function(){var t;i(o.peek())||3!==(null==(t=e.base)?void 0:t.nodeType)?(e.__$f|=1,e.setState({})):e.base.data=o.peek()},Nt((function(){var t=r.value.value;return 0===t?0:!0===t?"":t||""}))}),[]);return o.value}function Dt(t,e,n,r){var o=e in t&&void 0===t.ownerSVGElement,i=Et(n);return{o:function(t,e){i.value=t,r=e},d:jt((function(){var n=i.value.value;r[e]!==n&&(r[e]=n,o?t[e]=n:n?t.setAttribute(e,n):t.removeAttribute(e))}))}}St.prototype.h=function(){return!0},St.prototype.S=function(t){this.t!==t&&void 0===t.e&&(t.x=this.t,void 0!==this.t&&(this.t.e=t),this.t=t)},St.prototype.U=function(t){if(void 0!==this.t){var e=t.e,n=t.x;void 0!==e&&(e.x=n,t.e=void 0),void 0!==n&&(n.e=e,t.x=void 0),t===this.t&&(this.t=n)}},St.prototype.subscribe=function(t){var e=this;return jt((function(){var n=e.value,r=32&this.f;this.f&=-33;try{t(n)}finally{this.f|=r}}))},St.prototype.valueOf=function(){return this.value},St.prototype.toString=function(){return this.value+""},St.prototype.toJSON=function(){return this.value},St.prototype.peek=function(){return this.v},Object.defineProperty(St.prototype,"value",{get:function(){var t=xt(this);return void 0!==t&&(t.i=this.i),this.v},set:function(t){if(gt instanceof $t&&function(){throw new Error("Computed cannot have side-effects")}(),t!==this.v){bt>100&&ht(),this.v=t,this.i++,kt++,wt++;try{for(var e=this.t;void 0!==e;e=e.x)e.t.N()}finally{dt()}}}}),($t.prototype=new St).h=function(){if(this.f&=-3,1&this.f)return!1;if(32==(36&this.f))return!0;if(this.f&=-5,this.g===kt)return!0;if(this.g=kt,this.f|=1,this.i>0&&!Pt(this))return this.f&=-2,!0;var t=gt;try{Ct(this),gt=this;var e=this.x();(16&this.f||this.v!==e||0===this.i)&&(this.v=e,this.f&=-17,this.i++)}catch(t){this.v=t,this.f|=16,this.i++}return gt=t,Ot(this),this.f&=-2,!0},$t.prototype.S=function(t){if(void 0===this.t){this.f|=36;for(var e=this.s;void 0!==e;e=e.n)e.S.S(e)}St.prototype.S.call(this,t)},$t.prototype.U=function(t){if(void 0!==this.t&&(St.prototype.U.call(this,t),void 0===this.t)){this.f&=-33;for(var e=this.s;void 0!==e;e=e.n)e.S.U(e)}},$t.prototype.N=function(){if(!(2&this.f)){this.f|=6;for(var t=this.t;void 0!==t;t=t.x)t.t.N()}},$t.prototype.peek=function(){if(this.h()||ht(),16&this.f)throw this.v;return this.v},Object.defineProperty($t.prototype,"value",{get:function(){1&this.f&&ht();var t=xt(this);if(this.h(),void 0!==t&&(t.i=this.i),16&this.f)throw this.v;return this.v}}),Wt.prototype.c=function(){var t=this.S();try{if(8&this.f)return;if(void 0===this.x)return;var e=this.x();"function"==typeof e&&(this.u=e)}finally{t()}},Wt.prototype.S=function(){1&this.f&&ht(),this.f|=1,this.f&=-9,Mt(this),Ct(this),wt++;var t=gt;return gt=this,Tt.bind(this,t)},Wt.prototype.N=function(){2&this.f||(this.f|=2,this.o=mt,mt=this)},Wt.prototype.d=function(){this.f|=8,1&this.f||Ht(this)},Lt.displayName="_st",Object.defineProperties(St.prototype,{constructor:{configurable:!0,value:void 0},type:{configurable:!0,value:Lt},props:{configurable:!0,get:function(){return{data:this}}},__b:{configurable:!0,value:1}}),Ut("__b",(function(t,e){if("string"==typeof e.type){var n,r=e.props;for(var o in r)if("children"!==o){var i=r[o];i instanceof St&&(n||(e.__np=n={}),n[o]=i,r[o]=i.peek())}}t(e)})),Ut("__r",(function(t,e){At();var n,r=e.__c;r&&(r.__$f&=-2,void 0===(n=r.__$u)&&(r.__$u=n=function(t){var e;return jt((function(){e=this})),e.c=function(){r.__$f|=1,r.setState({})},e}())),At(n),t(e)})),Ut("__e",(function(t,e,n,r){At(),t(e,n,r)})),Ut("diffed",(function(t,e){var n;if(At(),"string"==typeof e.type&&(n=e.__e)){var r=e.__np,o=e.props;if(r){var i=n.U;if(i)for(var s in i){var u=i[s];void 0===u||s in r||(u.d(),i[s]=void 0)}else n.U=i={};for(var _ in r){var c=i[_],l=r[_];void 0===c?(c=Dt(n,_,l,o),i[_]=c):c.o(l,o)}}}t(e)})),Ut("unmount",(function(t,e){if("string"==typeof e.type){var n=e.__e;if(n){var r=n.U;if(r)for(var o in n.U=void 0,r){var i=r[o];i&&i.d()}}}else{var s=e.__c;if(s){var u=s.__$u;u&&(s.__$u=void 0,u.d())}}t(e)})),Ut("__h",(function(t,e,n,r){(r<3||9===r)&&(e.__$f|=2),t(e,n,r)})),w.prototype.shouldComponentUpdate=function(t,e){var n=this.__$u;if(!(n&&void 0!==n.s||4&this.__$f))return!0;if(3&this.__$f)return!0;for(var r in e)return!0;for(var o in t)if("__source"!==o&&t[o]!==this.props[o])return!0;for(var i in this.props)if(!(i in t))return!0;return!1};const Ft=new WeakMap,Vt=new WeakMap,Rt=new WeakMap,It=new Set([Object,Array]),Bt=(t,e,n)=>{if(!zt(e))throw Error("This object cannot be proxified.");if(!Ft.has(e)){const r=new Proxy(e,n);Ft.set(e,r),Vt.set(r,e),Rt.set(r,t)}return Ft.get(e)},qt=t=>Ft.get(t),Gt=t=>Rt.get(t),zt=t=>"object"==typeof t&&null!==t&&!Rt.has(t)&&It.has(t.constructor),Jt=[],Yt=()=>Jt.slice(-1)[0],Kt=t=>{Jt.push(t)},Qt=()=>{Jt.pop()},Xt=[],Zt=()=>Xt.slice(-1)[0],te=t=>{Xt.push(t)},ee=()=>{Xt.pop()},ne=new WeakMap,re=()=>{throw new Error("Please use `data-wp-bind` to modify the attributes of an element.")},oe={get(t,e,n){const r=Reflect.get(t,e,n);return r&&"object"==typeof r?ie(r):r},set:re,deleteProperty:re},ie=t=>(ne.has(t)||ne.set(t,new Proxy(t,oe)),ne.get(t)),se=t=>Zt().context[t||Yt()],ue=()=>{const t=Zt(),{ref:e,attributes:n}=t;return Object.freeze({ref:e.current,attributes:ie(n)})},_e=t=>new Promise((e=>{const n=()=>{clearTimeout(r),window.cancelAnimationFrame(o),setTimeout((()=>{t(),e()}))},r=setTimeout(n,100),o=window.requestAnimationFrame(n)})),ce=()=>new Promise((t=>{setTimeout(t,0)}));function le(t){const e=Zt(),n=Yt();return"GeneratorFunction"===t?.constructor?.name?async(...r)=>{const o=t(...r);let i,s;for(;;){Kt(n),te(e);try{s=o.next(i)}finally{ee(),Qt()}try{i=await s.value}catch(t){Kt(n),te(e),o.throw(t)}finally{ee(),Qt()}if(s.done)break}return i}:(...r)=>{Kt(n),te(e);try{return t(...r)}finally{Qt(),ee()}}}function ae(t){!function(t){nt((()=>{let e=null,n=!1;return e=function(t,e){let n=()=>{};const r=jt((function(){return n=this.c.bind(this),this.x=t,this.c=e,t()}));return{flush:n,dispose:r}}(t,(async()=>{e&&!n&&(n=!0,await _e(e.flush),n=!1)})),e.dispose}),[])}(le(t))}function fe(t){nt(le(t),[])}function pe(t,e){nt(le(t),e)}function he(t,e){!function(t,e){var n=tt(R++,4);!r.__s&&ft(n.__H,e)&&(n.__=t,n.i=e,I.__h.push(n))}(le(t),e)}function de(t,e){return it(le(t),e)}function ve(t,e){return ot(le(t),e)}new Set;const ye=t=>Boolean(t&&"object"==typeof t&&t.constructor===Object),ge={};class me{constructor(t){this.owner=t,this.computedsByScope=new WeakMap}setValue(t){this.update({value:t})}setGetter(t){this.update({get:t})}getComputed(){const t=Zt()||ge;if(this.valueSignal||this.getterSignal||this.update({}),!this.computedsByScope.has(t)){const e=()=>{const t=this.getterSignal?.value;return t?t.call(this.owner):this.valueSignal?.value};Kt(Gt(this.owner)),this.computedsByScope.set(t,Nt(le(e))),Qt()}return this.computedsByScope.get(t)}update({get:t,value:e}){this.valueSignal?e===this.valueSignal.peek()&&t===this.getterSignal.peek()||vt((()=>{this.valueSignal.value=e,this.getterSignal.value=t})):(this.valueSignal=Et(e),this.getterSignal=Et(t))}}const we=new Set(Object.getOwnPropertyNames(Symbol).map((t=>Symbol[t])).filter((t=>"symbol"==typeof t))),be=new WeakMap,ke=(t,e)=>be.has(t)&&be.get(t).has(e),xe=(t,e,n)=>{be.has(t)||be.set(t,new Map),e="number"==typeof e?`${e}`:e;const r=be.get(t);if(!r.has(e)){const o=Gt(t),i=new me(t);if(r.set(e,i),n){const{get:t,value:e}=n;t?i.setGetter(t):i.setValue(zt(e)?Ce(o,e):e)}}return r.get(e)},Se=new WeakMap;let Ee=!1;const Pe={get(t,e,n){if(Ee||!t.hasOwnProperty(e)&&e in t||"symbol"==typeof e&&we.has(e))return Reflect.get(t,e,n);const r=Object.getOwnPropertyDescriptor(t,e),o=xe(n,e,r).getComputed().value;if("function"==typeof o){const t=Gt(n);return(...e)=>{Kt(t);try{return o.call(n,...e)}finally{Qt()}}}return o},set(t,e,n,r){Kt(Gt(r));try{return Reflect.set(t,e,n,r)}finally{Qt()}},defineProperty(t,e,n){const r=!(e in t),o=Reflect.defineProperty(t,e,n);if(o){const o=qt(t),i=xe(o,e),{get:s,value:u}=n;if(s)i.setGetter(s);else{const t=Gt(o);i.setValue(zt(u)?Ce(t,u):u)}r&&Se.has(t)&&Se.get(t).value++,Array.isArray(t)&&be.get(o)?.has("length")&&xe(o,"length").setValue(t.length)}return o},deleteProperty(t,e){const n=Reflect.deleteProperty(t,e);return n&&(xe(qt(t),e).setValue(void 0),Se.has(t)&&Se.get(t).value++),n},ownKeys:t=>(Se.has(t)||Se.set(t,Et(0)),Se._=Se.get(t).value,Reflect.ownKeys(t))},Ce=(t,e)=>Bt(t,e,Pe),Oe=(t,e)=>{Ee=!0;try{return t[e]}finally{Ee=!1}},$e=(t,e,n=!0)=>{if(ye(t)&&ye(e))for(const r in e){const o=Object.getOwnPropertyDescriptor(e,r);if("function"==typeof o?.get||"function"==typeof o?.set){if(n||!(r in t)){Object.defineProperty(t,r,{...o,configurable:!0,enumerable:!0});const e=qt(t);o?.get&&e&&ke(e,r)&&xe(e,r).setGetter(o.get)}}else if(ye(e[r]))r in t||(t[r]={}),$e(t[r],e[r],n);else if(n||!(r in t)){Object.defineProperty(t,r,o);const e=qt(t);o?.value&&e&&ke(e,r)&&xe(e,r).setValue(o.value)}}},Ne=(t,e,n=!0)=>vt((()=>{return $e((r=t,Vt.get(r)||t),e,n);var r})),Me=new WeakSet,He={get:(t,e,n)=>{const r=Reflect.get(t,e),o=Gt(n);if(void 0===r&&Me.has(n)){const n={};return Reflect.set(t,e,n),Te(o,n,!1)}if("function"==typeof r){Kt(o);const t=le(r);return Qt(),t}return ye(r)&&zt(r)?Te(o,r,!1):r}},Te=(t,e,n=!0)=>{const r=Bt(t,e,He);return r&&n&&Me.add(r),r},We=new Map,je=new Map,Ue=new Map,Ae=new Map,Le=t=>Ae.get(t||Yt())||{},De="I acknowledge that using a private store means my plugin will inevitably break on the next store release.";function Fe(t,{state:e={},...n}={},{lock:r=!1}={}){if(We.has(t)){if(r===De||Ue.has(t)){const e=Ue.get(t);if(r!==De&&(!0===r||r!==e))throw e?Error("Cannot unlock a private store with an invalid lock code"):Error("Cannot lock a public store")}else Ue.set(t,r);const o=je.get(t);Ne(o,n),Ne(o.state,e)}else{r!==De&&Ue.set(t,r);const o={state:Ce(t,ye(e)?e:{}),...n},i=Te(t,o);je.set(t,o),We.set(t,i)}return We.get(t)}const Ve=(t=document)=>{var e;const n=null!==(e=t.getElementById("wp-script-module-data-@wordpress/interactivity"))&&void 0!==e?e:t.getElementById("wp-interactivity-data");if(n?.textContent)try{return JSON.parse(n.textContent)}catch{}return{}},Re=t=>{ye(t?.state)&&Object.entries(t.state).forEach((([t,e])=>{const n=Fe(t,{},{lock:De});Ne(n.state,e,!1)})),ye(t?.config)&&Object.entries(t.config).forEach((([t,e])=>{Ae.set(t,e)}))},Ie=Ve();Re(Ie);const Be=function(t,e){var n={__c:e="__cC"+l++,__:{},Consumer:function(t,e){return t.children(e)},Provider:function(t){var n,r;return this.getChildContext||(n=[],(r={})[e]=this,this.getChildContext=function(){return r},this.shouldComponentUpdate=function(t){this.props.value!==t.value&&n.some((function(t){t.__e=!0,x(t)}))},this.sub=function(t){n.push(t);var e=t.componentWillUnmount;t.componentWillUnmount=function(){n.splice(n.indexOf(t),1),e&&e.call(t)}}),t.children}};return n.Provider.__=n.Consumer.contextType=n}(),qe={},Ge={},ze=(t,e,{priority:n=10}={})=>{qe[t]=e,Ge[t]=n},Je=({scope:t})=>(e,...n)=>{let{value:r,namespace:o}=e;if("string"!=typeof r)throw new Error("The `value` prop should be a string path");const i="!"===r[0]&&!!(r=r.slice(1));te(t);const s=((t,e)=>{if(!e)return;let n=We.get(e);void 0===n&&(n=Fe(e,void 0,{lock:De}));const r={...n,context:Zt().context[e]};try{return t.split(".").reduce(((t,e)=>t[e]),r)}catch(t){}})(r,o),u="function"==typeof s?s(...n):s;return ee(),i?!u:u},Ye=({directives:t,priorityLevels:[e,...n],element:r,originalProps:o,previousScope:i})=>{const s=rt({}).current;s.evaluate=it(Je({scope:s}),[]),s.context=st(Be),s.ref=i?.ref||rt(null),r=V(r,{ref:s.ref}),s.attributes=r.props;const u=n.length>0?y(Ye,{directives:t,priorityLevels:n,element:r,originalProps:o,previousScope:s}):r,_={...o,children:u},c={directives:t,props:_,element:r,context:Be,evaluate:s.evaluate};te(s);for(const t of e){const e=qe[t]?.(c);void 0!==e&&(_.children=e)}return ee(),_.children},Ke=r.vnode;r.vnode=t=>{if(t.props.__directives){const e=t.props,n=e.__directives;n.key&&(t.key=n.key.find((({suffix:t})=>"default"===t)).value),delete e.__directives;const r=(t=>{const e=Object.keys(t).reduce(((t,e)=>{if(qe[e]){const n=Ge[e];(t[n]=t[n]||[]).push(e)}return t}),{});return Object.entries(e).sort((([t],[e])=>parseInt(t)-parseInt(e))).map((([,t])=>t))})(n);r.length>0&&(t.props={directives:n,priorityLevels:r,originalProps:e,type:t.type,element:y(t.type,e),top:!0},t.type=Ye)}Ke&&Ke(t)};const Qe=new WeakMap,Xe=new WeakMap,Ze=new WeakMap,tn=new WeakMap,en=Reflect.getOwnPropertyDescriptor,nn=(t,e={})=>{if(tn.set(t,e),!Xe.has(t)){const e=new Proxy(t,{get:(e,n)=>{const r=tn.get(t),o=e[n];return!(n in e)&&n in r?r[n]:n in e&&!Qe.get(e)?.has(n)&&ye(o)?nn(o):Xe.has(o)?Xe.get(o):n in e?o:r[n]},set:(e,n,r)=>{const o=tn.get(t),i=n in e||!(n in o)?e:o;if(r&&"object"==typeof r&&(Qe.has(i)||Qe.set(i,new Set),Qe.get(i).add(n)),Ze.has(r)){const t=Ze.get(r);i[n]=t}else i[n]=r;return!0},ownKeys:e=>[...new Set([...Object.keys(tn.get(t)),...Object.keys(e)])],getOwnPropertyDescriptor:(e,n)=>en(e,n)||en(tn.get(t),n)});Xe.set(t,e),Ze.set(e,t)}return Xe.get(t)},rn=(t,e)=>{for(const n in e)ye(Oe(t,n))&&ye(e[n])?rn(Oe(t,n),e[n]):n in t||(t[n]=e[n])};function on(t){return ye(t)?Object.fromEntries(Object.entries(t).map((([t,e])=>[t,on(e)]))):Array.isArray(t)?t.map((t=>on(t))):t}const sn=/(?:([\u0080-\uFFFF\w-%@]+) *:? *([^{;]+?);|([^;}{]*?) *{)|(}\s*)/g,un=/\/\*[^]*?\*\/|  +/g,cn=/\n+/g,ln=t=>({directives:e,evaluate:n})=>{e[`on-${t}`].filter((({suffix:t})=>"default"!==t)).forEach((e=>{const r=e.suffix.split("--",1)[0];fe((()=>{const o=t=>n(e,t),i="window"===t?window:document;return i.addEventListener(r,o),()=>i.removeEventListener(r,o)}))}))},an=t=>({directives:e,evaluate:n})=>{e[`on-async-${t}`].filter((({suffix:t})=>"default"!==t)).forEach((e=>{const r=e.suffix.split("--",1)[0];fe((()=>{const o=async t=>{await ce(),n(e,t)},i="window"===t?window:document;return i.addEventListener(r,o,{passive:!0}),()=>i.removeEventListener(r,o)}))}))},fn="wp",pn=`data-${fn}-ignore`,hn=`data-${fn}-interactive`,dn=`data-${fn}-`,vn=[],yn=new RegExp(`^data-${fn}-([a-z0-9]+(?:-[a-z0-9]+)*)(?:--([a-z0-9_-]+))?$`,"i"),gn=/^([\w_\/-]+)::(.+)$/,mn=new WeakSet;function wn(t){const e=document.createTreeWalker(t,205);return function t(n){const{nodeType:r}=n;if(3===r)return[n.data];if(4===r){var o;const t=e.nextSibling();return n.replaceWith(new window.Text(null!==(o=n.nodeValue)&&void 0!==o?o:"")),[n.nodeValue,t]}if(8===r||7===r){const t=e.nextSibling();return n.remove(),[null,t]}const i=n,{attributes:s}=i,u=i.localName,_={},c=[],l=[];let a=!1,f=!1;for(let t=0;t<s.length;t++){const e=s[t].name,n=s[t].value;if(e[dn.length]&&e.slice(0,dn.length)===dn)if(e===pn)a=!0;else{var p,h;const t=gn.exec(n),r=null!==(p=t?.[1])&&void 0!==p?p:null;let o=null!==(h=t?.[2])&&void 0!==h?h:n;try{const t=JSON.parse(o);d=t,o=Boolean(d&&"object"==typeof d&&d.constructor===Object)?t:o}catch{}if(e===hn){f=!0;const t="string"==typeof o?o:"string"==typeof o?.namespace?o.namespace:null;vn.push(t)}else l.push([e,r,o])}else if("ref"===e)continue;_[e]=n}var d;if(a&&!f)return[y(u,{..._,innerHTML:i.innerHTML,__directives:{ignore:!0}})];if(f&&mn.add(i),l.length&&(_.__directives=l.reduce(((t,[e,n,r])=>{const o=yn.exec(e);if(null===o)return t;const i=o[1]||"",s=o[2]||"default";var u;return t[i]=t[i]||[],t[i].push({namespace:null!=n?n:null!==(u=vn[vn.length-1])&&void 0!==u?u:null,value:r,suffix:s}),t}),{})),"template"===u)_.content=[...i.content.childNodes].map((t=>wn(t)));else{let n=e.firstChild();if(n){for(;n;){const[r,o]=t(n);r&&c.push(r),n=o||e.nextSibling()}e.parentNode()}}return f&&vn.pop(),[y(u,_,c)]}(e.currentNode)}const bn=new WeakMap,kn=t=>{if(!t.parentElement)throw Error("The passed region should be an element with a parent.");return bn.has(t)||bn.set(t,((t,e)=>{const n=(e=[].concat(e))[e.length-1].nextSibling;function r(e,r){t.insertBefore(e,r||n)}return t.__k={nodeType:1,parentNode:t,firstChild:e[0],childNodes:e,insertBefore:r,appendChild:r,removeChild(e){t.removeChild(e)}}})(t.parentElement,t)),bn.get(t)},xn=new WeakMap,Sn=t=>{if("I acknowledge that using private APIs means my theme or plugin will inevitably break in the next version of WordPress."===t)return{directivePrefix:fn,getRegionRootFragment:kn,initialVdom:xn,toVdom:wn,directive:ze,getNamespace:Yt,h:y,cloneElement:V,render:D,proxifyState:Ce,parseServerData:Ve,populateServerData:Re,batch:vt};throw new Error("Forbidden access.")};ze("context",(({directives:{context:t},props:{children:e},context:n})=>{const{Provider:r}=n,o=t.find((({suffix:t})=>"default"===t)),i=st(n),s=o.namespace,u=rt(Ce(s,{}));return y(r,{value:ot((()=>{const t={...i};if(o){const{namespace:e,value:n}=o;ye(n),rn(u.current,on(n)),t[e]=nn(u.current,i[e])}return t}),[o,i])},e)}),{priority:5}),ze("watch",(({directives:{watch:t},evaluate:e})=>{t.forEach((t=>{ae((()=>e(t)))}))})),ze("init",(({directives:{init:t},evaluate:e})=>{t.forEach((t=>{fe((()=>e(t)))}))})),ze("on",(({directives:{on:t},element:e,evaluate:n})=>{const r=new Map;t.filter((({suffix:t})=>"default"!==t)).forEach((t=>{const e=t.suffix.split("--")[0];r.has(e)||r.set(e,new Set),r.get(e).add(t)})),r.forEach(((t,r)=>{const o=e.props[`on${r}`];e.props[`on${r}`]=e=>{t.forEach((t=>{o&&o(e),n(t,e)}))}}))})),ze("on-async",(({directives:{"on-async":t},element:e,evaluate:n})=>{const r=new Map;t.filter((({suffix:t})=>"default"!==t)).forEach((t=>{const e=t.suffix.split("--")[0];r.has(e)||r.set(e,new Set),r.get(e).add(t)})),r.forEach(((t,r)=>{const o=e.props[`on${r}`];e.props[`on${r}`]=e=>{o&&o(e),t.forEach((async t=>{await ce(),n(t,e)}))}}))})),ze("on-window",ln("window")),ze("on-document",ln("document")),ze("on-async-window",an("window")),ze("on-async-document",an("document")),ze("class",(({directives:{class:t},element:e,evaluate:n})=>{t.filter((({suffix:t})=>"default"!==t)).forEach((t=>{const r=t.suffix,o=n(t),i=e.props.class||"",s=new RegExp(`(^|\\s)${r}(\\s|$)`,"g");o?s.test(i)||(e.props.class=i?`${i} ${r}`:r):e.props.class=i.replace(s," ").trim(),fe((()=>{o?e.ref.current.classList.add(r):e.ref.current.classList.remove(r)}))}))})),ze("style",(({directives:{style:t},element:e,evaluate:n})=>{t.filter((({suffix:t})=>"default"!==t)).forEach((t=>{const r=t.suffix,o=n(t);e.props.style=e.props.style||{},"string"==typeof e.props.style&&(e.props.style=(t=>{const e=[{}];let n,r;for(;n=sn.exec(t.replace(un,""));)n[4]?e.shift():n[3]?(r=n[3].replace(cn," ").trim(),e.unshift(e[0][r]=e[0][r]||{})):e[0][n[1]]=n[2].replace(cn," ").trim();return e[0]})(e.props.style)),o?e.props.style[r]=o:delete e.props.style[r],fe((()=>{o?e.ref.current.style[r]=o:e.ref.current.style.removeProperty(r)}))}))})),ze("bind",(({directives:{bind:t},element:e,evaluate:n})=>{t.filter((({suffix:t})=>"default"!==t)).forEach((t=>{const r=t.suffix,o=n(t);e.props[r]=o,fe((()=>{const t=e.ref.current;if("style"!==r){if("width"!==r&&"height"!==r&&"href"!==r&&"list"!==r&&"form"!==r&&"tabIndex"!==r&&"download"!==r&&"rowSpan"!==r&&"colSpan"!==r&&"role"!==r&&r in t)try{return void(t[r]=null==o?"":o)}catch(t){}null==o||!1===o&&"-"!==r[4]?t.removeAttribute(r):t.setAttribute(r,o)}else"string"==typeof o&&(t.style.cssText=o)}))}))})),ze("ignore",(({element:{type:t,props:{innerHTML:e,...n}}})=>y(t,{dangerouslySetInnerHTML:{__html:ot((()=>e),[])},...n}))),ze("text",(({directives:{text:t},element:e,evaluate:n})=>{const r=t.find((({suffix:t})=>"default"===t));if(r)try{const t=n(r);e.props.children="object"==typeof t?null:t.toString()}catch(t){e.props.children=null}else e.props.children=null})),ze("run",(({directives:{run:t},evaluate:e})=>{t.forEach((t=>e(t)))})),ze("each",(({directives:{each:t,"each-key":e},context:n,element:r,evaluate:o})=>{if("template"!==r.type)return;const{Provider:i}=n,s=st(n),[u]=t,{namespace:_,suffix:c}=u;return o(u).map((t=>{const n="default"===c?"item":c.replace(/^-+|-+$/g,"").toLowerCase().replace(/-([a-z])/g,(function(t,e){return e.toUpperCase()})),o=nn(Ce(_,{}),s[_]),u={...s,[_]:o};u[_][n]=t;const l={...Zt(),context:u},a=e?Je({scope:l})(e[0]):t;return y(i,{value:u,key:a},r.props.content)}))}),{priority:20}),ze("each-child",(()=>null),{priority:1}),(async()=>{const t=document.querySelectorAll(`[data-${fn}-interactive]`);for(const e of t)if(!mn.has(e)){await ce();const t=kn(e),n=wn(e);xn.set(e,n),await ce(),F(n,t)}})();var En=e.iE,Pn=e.fw,Cn=e.sb,On=e.YH,$n=e.QN,Nn=e.h,Mn=e.I4,Hn=e.d4,Tn=e.Dp,Wn=e.bt,jn=e.Ye,Un=e.sO,An=e.eJ,Ln=e.qo,Dn=e.$e;export{En as getConfig,Pn as getContext,Cn as getElement,On as privateApis,$n as splitTask,Nn as store,Mn as useCallback,Hn as useEffect,Tn as useInit,Wn as useLayoutEffect,jn as useMemo,Un as useRef,An as useState,Ln as useWatch,Dn as withScope};
//# sourceMappingURL=index.min.js.map