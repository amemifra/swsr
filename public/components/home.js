var app=function(){"use strict";function t(){}function e(t){return t()}function n(){return Object.create(null)}function o(t){t.forEach(e)}function r(t){return"function"==typeof t}function c(t,e){return t!=t?e==e:t!==e||t&&"object"==typeof t||"function"==typeof t}function a(t,e){t.appendChild(e)}function u(t){return document.createElement(t)}function l(t){return document.createTextNode(t)}function f(t,e,n){null==n?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}let i;function s(t){i=t}const d=[],p=[],m=[],h=[],$=Promise.resolve();let g=!1;function y(t){m.push(t)}let b=!1;const _=new Set;function x(){if(!b){b=!0;do{for(let t=0;t<d.length;t+=1){const e=d[t];s(e),v(e.$$)}for(d.length=0;p.length;)p.pop()();for(let t=0;t<m.length;t+=1){const e=m[t];_.has(e)||(_.add(e),e())}m.length=0}while(d.length);for(;h.length;)h.pop()();g=!1,b=!1,_.clear()}}function v(t){if(null!==t.fragment){t.update(),o(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(y)}}const w=new Set;function k(t,e){-1===t.$$.dirty[0]&&(d.push(t),g||(g=!0,$.then(x)),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function j(c,a,u,l,f,d,p=[-1]){const m=i;s(c);const h=a.props||{},$=c.$$={fragment:null,ctx:null,props:d,update:t,not_equal:f,bound:n(),on_mount:[],on_destroy:[],before_update:[],after_update:[],context:new Map(m?m.$$.context:[]),callbacks:n(),dirty:p};let g=!1;var b,_;$.ctx=u?u(c,h,(t,e,...n)=>{const o=n.length?n[0]:e;return $.ctx&&f($.ctx[t],$.ctx[t]=o)&&($.bound[t]&&$.bound[t](o),g&&k(c,t)),e}):[],$.update(),g=!0,o($.before_update),$.fragment=!!l&&l($.ctx),a.target&&(a.hydrate?$.fragment&&$.fragment.l(function(t){return Array.from(t.childNodes)}(a.target)):$.fragment&&$.fragment.c(),a.intro&&((b=c.$$.fragment)&&b.i&&(w.delete(b),b.i(_))),function(t,n,c){const{fragment:a,on_mount:u,on_destroy:l,after_update:f}=t.$$;a&&a.m(n,c),y(()=>{const n=u.map(e).filter(r);l?l.push(...n):o(n),t.$$.on_mount=[]}),f.forEach(y)}(c,a.target,a.anchor),x()),s(m)}function A(e){let n,o,r,c,i,s,d;return{c(){n=u("main"),o=u("h1"),r=l("Hello "),c=l(e[0]),i=l("!"),s=l(" "),d=u("p"),d.innerHTML='Visit the <a href="https://svelte.dev/tutorial">Svelte tutorial</a> to learn how to build Svelte apps.',f(o,"class","svelte-1tky8bj"),f(n,"class","svelte-1tky8bj")},m(t,e){!function(t,e,n){t.insertBefore(e,n||null)}(t,n,e),a(n,o),a(o,r),a(o,c),a(o,i),a(n,s),a(n,d)},p(t,[e]){1&e&&function(t,e){e=""+e,t.data!==e&&(t.data=e)}(c,t[0])},i:t,o:t,d(t){var e;t&&(e=n).parentNode.removeChild(e)}}}function E(t,e,n){let{name:o}=e;return t.$set=t=>{"name"in t&&n(0,o=t.name)},[o]}return new class extends class{$destroy(){!function(t,e){const n=t.$$;null!==n.fragment&&(o(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}(this,1),this.$destroy=t}$on(t,e){const n=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return n.push(e),()=>{const t=n.indexOf(e);-1!==t&&n.splice(t,1)}}$set(){}}{constructor(t){super(),j(this,t,E,A,c,{name:0})}}({target:document.body,props:{name:"world"}})}();
