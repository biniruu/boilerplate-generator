if(!self.define){let e,i={};const r=(r,n)=>(r=new URL(r+".js",n).href,i[r]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=r,e.onload=i,document.head.appendChild(e)}else e=r,importScripts(r),i()})).then((()=>{let e=i[r];if(!e)throw new Error(`Module ${r} didn’t register its module`);return e})));self.define=(n,c)=>{const o=e||("document"in self?document.currentScript.src:"")||location.href;if(i[o])return;let d={};const a=e=>r(e,o),s={module:{uri:o},exports:d,require:a};i[o]=Promise.all(n.map((e=>s[e]||a(e)))).then((e=>(c(...e),d)))}}define(["./workbox-9a84fccb"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"android-chrome-192x192.png",revision:"fdb719d038f830374f0cd6092a1aa8f9"},{url:"android-chrome-512x512.png",revision:"7d27a226c5ada0324a3dfe1c05d8a44b"},{url:"apple-touch-icon.png",revision:"5a27dab91c099213cc96a325ee2e07fb"},{url:"favicon-16x16.png",revision:"68037b8198bb7ec023f5b3003c885d8a"},{url:"favicon-32x32.png",revision:"bd5be5088a73a4f0625c82e5a1626a1d"},{url:"favicon.ico",revision:"9c2dbd9068d949e21522f74ac6020ab6"},{url:"github-mark.svg",revision:"8dcc6b5262f3b6138b1566b357ba89a9"},{url:"index.html",revision:"dee251762c5eb571dd6a6826ab2f9cf3"},{url:"index.js",revision:"609ad33dd83414a74449a6b8417fd17c"},{url:"main.css",revision:"08f0ee5cbfcce124a38b69d27ec4226b"},{url:"site.webmanifest",revision:"8b4f920595f35dbe0fe64fa14979d7ab"}],{})}));
