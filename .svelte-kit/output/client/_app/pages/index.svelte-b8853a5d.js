import{S as X,i as Y,s as Z,e as g,k as H,t as E,c as v,a as P,m as I,h as x,d as m,b as d,L as O,g as q,F as f,j as D,E as Q,w as te,x as ae,y as re,q as F,o as V,B as le,K as se,p as oe,M as ie,N as ne,n as ue}from"../chunks/index-c31d8efe.js";import{w as ce}from"../chunks/index-ef99b1ce.js";const ee=ce([]),de=async o=>{const t=`https://www.reddit.com/r/dataisbeautiful/top.json?limit=${o}`,u=(await(await fetch(t)).json()).data.children.map((n,h)=>({id:h+1,title:n.data.title,author:n.data.author,thumbnail:n.data.thumbnail,selftext:n.data.selftext,subreddit_name_prefixed:n.data.subreddit_name_prefixed,url:n.data.url}));ee.set(u)};de(100);function fe(o){let t,l,r,u,n,h,w=o[0].id+"",b,y,_,s=o[0].title+"",B,e,i,a,$,k=o[0].author+"",S,M,G,K,j,A=o[0].selftext+"",T,L,C;return{c(){t=g("a"),l=g("img"),n=H(),h=g("h3"),b=E(w),y=E(". "),_=g("a"),B=E(s),i=E(" | Posted by "),a=g("a"),$=E("u/"),S=E(k),G=g("br"),K=H(),j=g("p"),T=E(A),L=g("br"),this.h()},l(p){t=v(p,"A",{class:!0,href:!0,target:!0});var c=P(t);l=v(c,"IMG",{class:!0,src:!0,alt:!0}),n=I(c),h=v(c,"H3",{class:!0});var R=P(h);b=x(R,w),y=x(R,". "),_=v(R,"A",{href:!0,target:!0});var z=P(_);B=x(z,s),z.forEach(m),i=x(R," | Posted by "),a=v(R,"A",{href:!0,target:!0});var N=P(a);$=x(N,"u/"),S=x(N,k),N.forEach(m),R.forEach(m),G=v(c,"BR",{}),K=I(c),j=v(c,"P",{});var J=P(j);T=x(J,A),J.forEach(m),L=v(c,"BR",{}),c.forEach(m),this.h()},h(){d(l,"class","h-40"),O(l.src,r=o[0].thumbnail)||d(l,"src",r),d(l,"alt",u=o[0].title),d(_,"href",e=o[0].url),d(_,"target","_blank"),d(a,"href",M="https://www.reddit.com/user/"+o[0].author+"/"),d(a,"target","_blank"),d(h,"class","font-normal"),d(t,"class","py-4 p-6 bg-gray-100 text-gray-800 text-center rounded-md shadow-sm hover:shadow-md flex flex-col items-center"),d(t,"href",C=o[0].url),d(t,"target","_blank")},m(p,c){q(p,t,c),f(t,l),f(t,n),f(t,h),f(h,b),f(h,y),f(h,_),f(_,B),f(h,i),f(h,a),f(a,$),f(a,S),f(t,G),f(t,K),f(t,j),f(j,T),f(t,L)},p(p,[c]){c&1&&!O(l.src,r=p[0].thumbnail)&&d(l,"src",r),c&1&&u!==(u=p[0].title)&&d(l,"alt",u),c&1&&w!==(w=p[0].id+"")&&D(b,w),c&1&&s!==(s=p[0].title+"")&&D(B,s),c&1&&e!==(e=p[0].url)&&d(_,"href",e),c&1&&k!==(k=p[0].author+"")&&D(S,k),c&1&&M!==(M="https://www.reddit.com/user/"+p[0].author+"/")&&d(a,"href",M),c&1&&A!==(A=p[0].selftext+"")&&D(T,A),c&1&&C!==(C=p[0].url)&&d(t,"href",C)},i:Q,o:Q,d(p){p&&m(t)}}}function he(o,t,l){let{redditpost:r}=t;return o.$$set=u=>{"redditpost"in u&&l(0,r=u.redditpost)},[r]}class _e extends X{constructor(t){super(),Y(this,t,he,fe,Z,{redditpost:0})}}function U(o,t,l){const r=o.slice();return r[1]=t[l],r}function W(o){let t,l;return t=new _e({props:{redditpost:o[1]}}),{c(){te(t.$$.fragment)},l(r){ae(t.$$.fragment,r)},m(r,u){re(t,r,u),l=!0},p(r,u){const n={};u&1&&(n.redditpost=r[1]),t.$set(n)},i(r){l||(F(t.$$.fragment,r),l=!0)},o(r){V(t.$$.fragment,r),l=!1},d(r){le(t,r)}}}function me(o){let t,l,r,u,n,h,w,b,y,_=o[0],s=[];for(let e=0;e<_.length;e+=1)s[e]=W(U(o,_,e));const B=e=>V(s[e],1,1,()=>{s[e]=null});return{c(){t=H(),l=g("h1"),r=E("Soyreader"),u=H(),n=g("h2"),h=E("Top Posts"),w=H(),b=g("div");for(let e=0;e<s.length;e+=1)s[e].c();this.h()},l(e){se('[data-svelte="svelte-1h8e1nb"]',document.head).forEach(m),t=I(e),l=v(e,"H1",{class:!0});var a=P(l);r=x(a,"Soyreader"),a.forEach(m),u=I(e),n=v(e,"H2",{class:!0});var $=P(n);h=x($,"Top Posts"),$.forEach(m),w=I(e),b=v(e,"DIV",{class:!0});var k=P(b);for(let S=0;S<s.length;S+=1)s[S].l(k);k.forEach(m),this.h()},h(){document.title="Soyreader",d(l,"class","text-4xl text-center antialiased text-indigo-700 my-8 uppercase"),d(n,"class","text-2xl text-center text-indigo-600 my-8"),d(b,"class","grid gap-4 md:grid-cols-2 grid-cols-1")},m(e,i){q(e,t,i),q(e,l,i),f(l,r),q(e,u,i),q(e,n,i),f(n,h),q(e,w,i),q(e,b,i);for(let a=0;a<s.length;a+=1)s[a].m(b,null);y=!0},p(e,[i]){if(i&1){_=e[0];let a;for(a=0;a<_.length;a+=1){const $=U(e,_,a);s[a]?(s[a].p($,i),F(s[a],1)):(s[a]=W($),s[a].c(),F(s[a],1),s[a].m(b,null))}for(ue(),a=_.length;a<s.length;a+=1)B(a);oe()}},i(e){if(!y){for(let i=0;i<_.length;i+=1)F(s[i]);y=!0}},o(e){s=s.filter(Boolean);for(let i=0;i<s.length;i+=1)V(s[i]);y=!1},d(e){e&&m(t),e&&m(l),e&&m(u),e&&m(n),e&&m(w),e&&m(b),ie(s,e)}}}function pe(o,t,l){let r;return ne(o,ee,u=>l(0,r=u)),console.log(r),[r]}class ve extends X{constructor(t){super(),Y(this,t,pe,me,Z,{})}}export{ve as default};