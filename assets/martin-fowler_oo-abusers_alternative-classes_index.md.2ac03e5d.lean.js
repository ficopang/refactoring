import{_ as o,c as r,b as s,d as a,e as n,w as l,a as t,r as p,o as i}from"./app.a804e8e4.js";const x=JSON.parse('{"title":"Alternative Classes with Different Interfaces","description":"","frontmatter":{},"headers":[{"level":2,"title":"Penjelasan Smell","slug":"penjelasan-smell","link":"#penjelasan-smell","children":[]},{"level":2,"title":"Penyelesaian","slug":"penyelesaian","link":"#penyelesaian","children":[]}],"relativePath":"martin-fowler/oo-abusers/alternative-classes/index.md"}'),c={name:"martin-fowler/oo-abusers/alternative-classes/index.md"},d=t("",7),_=s("code",null,"paint",-1),u=t("",1),y=s("code",null,"draw",-1),A=t("",2),h=s("a",{href:"https://sourcemaking.com/refactoring/extract-superclass",target:"_blank",rel:"noreferrer"},"Extract Superclass",-1),C=t("",1),m=s("code",null,"draw",-1),D=s("code",null,"paint",-1),g=s("code",null,"draw",-1),f=s("code",null,"Drawable",-1),b=s("a",{href:"https://sourcemaking.com/refactoring/rename-method",target:"_blank",rel:"noreferrer"},"Rename Method",-1),k=s("code",null,"paint",-1);function F(v,j,T,w,E,P){const e=p("github-url");return i(),r("div",null,[d,s("p",null,[a("Contohnya, class "),n(e,{to:"before/Ghost.java"},{default:l(()=>[a("Ghost.java")]),_:1}),a(" memiliki fungsi "),_,a(" yang bertujuan menggambar Ghost dari spritesheet yang tersedia.")]),u,s("p",null,[a("Di sisi lain, class "),n(e,{to:"before/PacMan.java"},{default:l(()=>[a("PacMan.java")]),_:1}),a(" memiliki fungsi "),y,a(" yang bertujuan sama. Menggambar PacMan dari spritesheet yang tersedia.")]),A,s("p",null,[a("Untuk contoh kasus ini, kita melakukan "),h,a(". Kita membuat interface "),n(e,{to:"after/Drawable.java"},{default:l(()=>[a("Drawable.java")]),_:1}),a(" yang akan di-implement oleh kedua class.")]),C,s("p",null,[a("Pada class PacMan sebelumnya, nama fungsi adalah "),m,a(", sedangkan pada Ghost nama fungsi adalah "),D,a(". Dipilih salah satu dari kedua sinonim tersebut yang akan dipakai. Misal diputuskan "),g,a(" yang dipakai sebagai nama method di interface "),f,a(", maka dilakukan "),b,a(" pada fungsi "),k,a(" di "),n(e,{to:"after/Ghost.java"},{default:l(()=>[a("Ghost.java")]),_:1}),a(".")])])}const I=o(c,[["render",F]]);export{x as __pageData,I as default};
