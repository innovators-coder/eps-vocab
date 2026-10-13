const C="eps-topik-v5";
const FILES=["./","./index.html","./manifest.webmanifest","./icon-192.png","./icon-512.png","./vocab.json"];
self.addEventListener("install",e=>{e.waitUntil(caches.open(C).then(c=>c.addAll(FILES)).then(()=>self.skipWaiting()))});
self.addEventListener("activate",e=>{e.waitUntil(caches.keys().then(k=>Promise.all(k.filter(x=>x!==C).map(x=>caches.delete(x)))).then(()=>self.clients.claim()))});
// Cache first (works offline), refreshes the cache quietly in the background.
self.addEventListener("fetch",e=>{
 if(e.request.method!=="GET"||new URL(e.request.url).origin!==location.origin)return;
 // vocab.json: network first so edits show up right away; falls back to the cache offline.
 if(new URL(e.request.url).pathname.endsWith("/vocab.json")){
  e.respondWith(fetch(e.request).then(r=>{if(r&&r.ok){const cp=r.clone();caches.open(C).then(c=>c.put(e.request,cp))}return r}).catch(()=>caches.match(e.request,{ignoreSearch:true})));
  return;
 }
 e.respondWith(caches.match(e.request,{ignoreSearch:true}).then(hit=>{
  const net=fetch(e.request).then(r=>{if(r&&r.ok&&r.type==="basic"){const cp=r.clone();caches.open(C).then(c=>c.put(e.request,cp))}return r}).catch(()=>null);
  return hit||net.then(r=>r||caches.match("./index.html")).then(r=>r||Response.error());
 }));
});
