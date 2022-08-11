import{_ as o,c as i,b as s,d as n,w as t,a as l,e as a,r,o as p}from"./app.34f80447.js";const J=JSON.parse('{"title":"Message Chains","description":"","frontmatter":{},"headers":[{"level":2,"title":"Penjelasan Smell","slug":"penjelasan-smell"},{"level":2,"title":"Penyelesaian","slug":"penyelesaian"},{"level":2,"title":"Tambahan","slug":"tambahan"}],"relativePath":"martin-fowler/couplers/message-chains/index.md"}'),c={name:"martin-fowler/couplers/message-chains/index.md"},d=l("",4),_=a("Perhatikan "),h=a("DistanceTest.java"),u=a(", terdapat message chaining ketika ingin mengakses latitude dan longitude."),g=l("",2),D=a("Dilakukan "),y=s("a",{href:"https://sourcemaking.com/refactoring/hide-delegate",target:"_blank",rel:"noopener noreferrer"},"Hide Delegate",-1),m=a(". Perhatikan class "),F=s("a",{href:"after/BojekDriver.java"},"BojekDriver",-1),A=a(" dan "),k=a("Destination"),C=a(", telah ditambahkan fungsi "),b=s("code",null,"latitude()",-1),f=a(" dan "),T=s("code",null,"longitude()",-1),v=a(" yang sebenarnya melakukan delegasi chaining yang dilakukan di package before. Hal ini dilakukan agar class client tidak merasakan adanya chaining, disembunyikan di dalam sini."),j=l("",1),P=a("Alhasil, seperti yang bisa dilihat di "),S=a("DistanceTest.java"),x=a(" di package after, message chain sudah tidak ada."),V=s("h2",{id:"tambahan",tabindex:"-1"},[a("Tambahan "),s("a",{class:"header-anchor",href:"#tambahan","aria-hidden":"true"},"#")],-1),E=s("p",null,"Jangan terlalu agresif mengurusi message chain karena bisa menyebabkan smell Middle Man.",-1),N=s("p",null,"Pertimbangkan mengurusi message chain bila terjadi di banyak tempat atau kebetulan ada class yang behavior-nya cocok untuk menampung method delegasi.",-1);function I(B,w,M,$,L,R){const e=r("github-url");return p(),i("div",null,[d,s("p",null,[_,n(e,{to:"before/DistanceTest.java"},{default:t(()=>[h]),_:1}),u]),g,s("p",null,[D,y,m,F,A,n(e,{to:"after/Destination.java"},{default:t(()=>[k]),_:1}),C,b,f,T,v]),j,s("p",null,[P,n(e,{to:"after/DistanceTest.java"},{default:t(()=>[S]),_:1}),x]),V,E,N])}var O=o(c,[["render",I]]);export{J as __pageData,O as default};
