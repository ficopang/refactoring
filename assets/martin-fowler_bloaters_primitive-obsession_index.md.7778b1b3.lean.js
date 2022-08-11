import{_ as s,c as o,b as e,d as i,w as n,a as r,e as a,r as l,o as d}from"./app.34f80447.js";const W=JSON.parse('{"title":"Primitive Obsession","description":"","frontmatter":{},"headers":[{"level":2,"title":"Penjelasan Smell","slug":"penjelasan-smell"},{"level":2,"title":"Penyelesaian","slug":"penyelesaian"}],"relativePath":"martin-fowler/bloaters/primitive-obsession/index.md"}'),c={name:"martin-fowler/bloaters/primitive-obsession/index.md"},h=r("",5),_=a("Perhatikan contoh "),p=a("Mahasiswa.java"),u=a(". Terdapat field "),m=e("code",null,"name",-1),g=a(" menggunakan String dan tanggal lahir yang dipecah-pecah menjadi integer. Padahal "),b=e("code",null,"name",-1),f=a(" memiliki validasi sesuai dengan regex dalam code, dan tanggal lahir memiliki validasi tanggal harus valid."),k=a("Selain itu, terdapat juga field "),v=e("code",null,"type",-1),y=a(" menggunakan String. Padahal value "),j=e("code",null,"type",-1),w=a(" hanya boleh Reguler atau Global. Selain itu, "),x=e("code",null,"type",-1),S=a(" juga digunakan pada "),P=a("MahasiswaGreeter"),N=a(" yang di dalam sini terdapat smell switch statement."),T=e("h2",{id:"penyelesaian",tabindex:"-1"},[a("Penyelesaian "),e("a",{class:"header-anchor",href:"#penyelesaian","aria-hidden":"true"},"#")],-1),B=a("Dilakukan "),M=a("Extract Class]("),O=e("a",{href:"https://sourcemaking.com/refactoring/extract-class",target:"_blank",rel:"noopener noreferrer"},"https://sourcemaking.com/refactoring/extract-class",-1),V=a(") pada "),C=e("code",null,"name",-1),D=a(", dibuatkan class baru bernama [FullName"),G=a(". Kemudian "),$=e("a",{href:"https://sourcemaking.com/refactoring/replace-data-value-with-object",target:"_blank",rel:"noopener noreferrer"},"replace data value with object",-1),A=a(" pada field "),E=e("code",null,"name",-1),I=a(" di class Mahasiswa."),F=e("p",null,[a("Untuk integer "),e("code",null,"dayOfBirth"),a(", "),e("code",null,"monthOfBirth"),a(", dan "),e("code",null,"yearOfBirth"),a(", kita ganti menggunakan class java.util.Date bawaan dari Java.")],-1),H=e("p",null,[a("Untuk logic Greeter, kita gunakan "),e("a",{href:"https://sourcemaking.com/refactoring/replace-type-code-with-state-strategy",target:"_blank",rel:"noopener noreferrer"},"replace type code with state/strategy"),a(".")],-1);function J(R,U,K,q,z,L){const t=l("github-url");return d(),o("div",null,[h,e("p",null,[_,i(t,{to:"before/Mahasiswa.java"},{default:n(()=>[p]),_:1}),u,m,g,b,f]),e("p",null,[k,v,y,j,w,x,S,i(t,{to:"before/MahasiswaGreeter.java"},{default:n(()=>[P]),_:1}),N]),T,e("p",null,[B,i(t,{to:"after/FullName.java"},{default:n(()=>[M,O,V,C,D]),_:1}),G,$,A,E,I]),F,H])}var X=s(c,[["render",J]]);export{W as __pageData,X as default};
