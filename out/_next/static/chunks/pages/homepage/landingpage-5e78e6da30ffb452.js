(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[809],{8707:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/homepage/landingpage",function(){return t(1574)}])},1127:function(e,n,t){"use strict";var r=t(5893),a=(t(7294),t(1664));n.Z=function(){return(0,r.jsxs)("div",{className:"flex justify-evenly items-center p-4 bg-white",children:[(0,r.jsxs)("div",{className:"md:flex hidden cursor-pointer",children:[(0,r.jsx)(a.default,{href:"/archive/2021",children:(0,r.jsx)("div",{className:"font-Cinzel p-4",children:"About"})}),(0,r.jsx)(a.default,{href:"/archive/2021",children:(0,r.jsx)("div",{className:"font-Cinzel p-4",children:"Speaker"})})]}),(0,r.jsx)("div",{className:"cursor-pointer",children:(0,r.jsx)(a.default,{href:"/",children:(0,r.jsx)("img",{src:"https://i.ibb.co/ncZ8qLG/image.png",className:"h-10 "})})}),(0,r.jsxs)("div",{className:"md:flex hidden cursor-pointer",children:[(0,r.jsx)(a.default,{href:"/archive/2011",children:(0,r.jsx)("div",{className:"font-Cinzel p-4",children:"Archive"})}),(0,r.jsx)(a.default,{href:"/contact/",children:(0,r.jsx)("div",{className:"font-Cinzel p-4",children:"Contact"})})]})]})}},8418:function(e,n,t){"use strict";function r(e,n){return function(e){if(Array.isArray(e))return e}(e)||function(e,n){var t=[],r=!0,a=!1,i=void 0;try{for(var l,c=e[Symbol.iterator]();!(r=(l=c.next()).done)&&(t.push(l.value),!n||t.length!==n);r=!0);}catch(o){a=!0,i=o}finally{try{r||null==c.return||c.return()}finally{if(a)throw i}}return t}(e,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}n.default=void 0;var a,i=(a=t(7294))&&a.__esModule?a:{default:a},l=t(6273),c=t(387),o=t(7190);var s={};function u(e,n,t,r){if(e&&l.isLocalURL(n)){e.prefetch(n,t,r).catch((function(e){0}));var a=r&&"undefined"!==typeof r.locale?r.locale:e&&e.locale;s[n+"%"+t+(a?"%"+a:"")]=!0}}var f=function(e){var n,t=!1!==e.prefetch,a=c.useRouter(),f=i.default.useMemo((function(){var n=r(l.resolveHref(a,e.href,!0),2),t=n[0],i=n[1];return{href:t,as:e.as?l.resolveHref(a,e.as):i||t}}),[a,e.href,e.as]),d=f.href,h=f.as,v=e.children,p=e.replace,m=e.shallow,x=e.scroll,y=e.locale;"string"===typeof v&&(v=i.default.createElement("a",null,v));var g=(n=i.default.Children.only(v))&&"object"===typeof n&&n.ref,b=r(o.useIntersection({rootMargin:"200px"}),2),j=b[0],N=b[1],w=i.default.useCallback((function(e){j(e),g&&("function"===typeof g?g(e):"object"===typeof g&&(g.current=e))}),[g,j]);i.default.useEffect((function(){var e=N&&t&&l.isLocalURL(d),n="undefined"!==typeof y?y:a&&a.locale,r=s[d+"%"+h+(n?"%"+n:"")];e&&!r&&u(a,d,h,{locale:n})}),[h,d,N,y,t,a]);var E={ref:w,onClick:function(e){n.props&&"function"===typeof n.props.onClick&&n.props.onClick(e),e.defaultPrevented||function(e,n,t,r,a,i,c,o){("A"!==e.currentTarget.nodeName||!function(e){var n=e.currentTarget.target;return n&&"_self"!==n||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&l.isLocalURL(t))&&(e.preventDefault(),null==c&&r.indexOf("#")>=0&&(c=!1),n[a?"replace":"push"](t,r,{shallow:i,locale:o,scroll:c}))}(e,a,d,h,p,m,x,y)},onMouseEnter:function(e){l.isLocalURL(d)&&(n.props&&"function"===typeof n.props.onMouseEnter&&n.props.onMouseEnter(e),u(a,d,h,{priority:!0}))}};if(e.passHref||"a"===n.type&&!("href"in n.props)){var _="undefined"!==typeof y?y:a&&a.locale,C=a&&a.isLocaleDomain&&l.getDomainLocale(h,_,a&&a.locales,a&&a.domainLocales);E.href=C||l.addBasePath(l.addLocale(h,_,a&&a.defaultLocale))}return i.default.cloneElement(n,E)};n.default=f},7190:function(e,n,t){"use strict";function r(e,n){return function(e){if(Array.isArray(e))return e}(e)||function(e,n){var t=[],r=!0,a=!1,i=void 0;try{for(var l,c=e[Symbol.iterator]();!(r=(l=c.next()).done)&&(t.push(l.value),!n||t.length!==n);r=!0);}catch(o){a=!0,i=o}finally{try{r||null==c.return||c.return()}finally{if(a)throw i}}return t}(e,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}Object.defineProperty(n,"__esModule",{value:!0}),n.useIntersection=function(e){var n=e.rootMargin,t=e.disabled||!l,o=a.useRef(),s=r(a.useState(!1),2),u=s[0],f=s[1],d=a.useCallback((function(e){o.current&&(o.current(),o.current=void 0),t||u||e&&e.tagName&&(o.current=function(e,n,t){var r=function(e){var n=e.rootMargin||"",t=c.get(n);if(t)return t;var r=new Map,a=new IntersectionObserver((function(e){e.forEach((function(e){var n=r.get(e.target),t=e.isIntersecting||e.intersectionRatio>0;n&&t&&n(t)}))}),e);return c.set(n,t={id:n,observer:a,elements:r}),t}(t),a=r.id,i=r.observer,l=r.elements;return l.set(e,n),i.observe(e),function(){l.delete(e),i.unobserve(e),0===l.size&&(i.disconnect(),c.delete(a))}}(e,(function(e){return e&&f(e)}),{rootMargin:n}))}),[t,n,u]);return a.useEffect((function(){if(!l&&!u){var e=i.requestIdleCallback((function(){return f(!0)}));return function(){return i.cancelIdleCallback(e)}}}),[u]),[d,u]};var a=t(7294),i=t(9311),l="undefined"!==typeof IntersectionObserver;var c=new Map},1574:function(e,n,t){"use strict";t.r(n);var r=t(5893);t(7294),t(1127);n.default=function(){return(0,r.jsxs)("div",{className:"landingPage font-Cinzel flex flex-col gap-5 bg-white",children:[(0,r.jsxs)("div",{className:" text-3xl md:text-5xl text-center flex flex-col ",children:[(0,r.jsx)("h3",{children:"Different Lenses"}),(0,r.jsx)("span",{className:"text-base",children:"at"}),(0,r.jsx)("h2",{className:"text-2xl",children:"Jamia Millia islamia"})]}),(0,r.jsx)("div",{className:"flex justify-center",children:(0,r.jsx)("img",{src:"static/images/landingPage-bg-image.jpg",className:"md:w-4/5"})})]})}},1664:function(e,n,t){e.exports=t(8418)}},function(e){e.O(0,[774,888,179],(function(){return n=8707,e(e.s=n);var n}));var n=e.O();_N_E=n}]);