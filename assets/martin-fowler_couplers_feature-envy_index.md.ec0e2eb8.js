import{_ as l,c as o,b as e,d as t,w as r,a as s,e as a,r as p,o as i}from"./app.34f80447.js";const x=JSON.parse('{"title":"Feature Envy","description":"","frontmatter":{},"headers":[{"level":2,"title":"Penjelasan Smell","slug":"penjelasan-smell"},{"level":2,"title":"Penyelesaian","slug":"penyelesaian"},{"level":2,"title":"Tambahan","slug":"tambahan"}],"relativePath":"martin-fowler/couplers/feature-envy/index.md"}'),c={name:"martin-fowler/couplers/feature-envy/index.md"},d=s('<h1 id="feature-envy" tabindex="-1">Feature Envy <a class="header-anchor" href="#feature-envy" aria-hidden="true">#</a></h1><p><a href="https://sourcemaking.com/refactoring/smells/feature-envy" target="_blank" rel="noopener noreferrer">sourcemaking</a></p><h2 id="penjelasan-smell" tabindex="-1">Penjelasan Smell <a class="header-anchor" href="#penjelasan-smell" aria-hidden="true">#</a></h2><p>Smell ini terjadi bila ada sebuah method yang lebih sering mengakses data class lain ketimbang class sendiri. Class sendiri pun menjadi &#39;cemburu&#39;. Bila hal ini terjadi, harus dipikirkan bagaimana cara mengusir method ini ke class lain tersebut.</p>',4),y=a("Pada contoh "),h=a("Lecturer.java"),u=a(", terdapat method "),D=e("code",null,"isScored",-1),m=a(" yang hanya mengakses data examiner di class Exam."),_=s(`<div class="language-java"><span class="copy"></span><pre><code><span class="line"><span style="color:#C792EA;">public</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">boolean</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">isScored</span><span style="color:#89DDFF;">(</span><span style="color:#C792EA;">Exam</span><span style="color:#A6ACCD;"> exam</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;font-style:italic;">return</span><span style="color:#A6ACCD;"> exam</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">getExaminer</span><span style="color:#89DDFF;">()</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">!=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">null;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre></div><h2 id="penyelesaian" tabindex="-1">Penyelesaian <a class="header-anchor" href="#penyelesaian" aria-hidden="true">#</a></h2><p>Dilakukan <a href="https://sourcemaking.com/refactoring/move-method" target="_blank" rel="noopener noreferrer">Move Method</a> pada fungsi <code>isScored</code>. Perhatikan di package <code>after</code>, isScored dipindahkan ke class Exam.</p><p>Selain itu, code fragment ini pun dipindahkan juga ke fungsi <code>setScore</code> di class Exam.</p><div class="language-java"><span class="copy"></span><pre><code><span class="line"><span style="color:#89DDFF;font-style:italic;">if</span><span style="color:#89DDFF;">(this.</span><span style="color:#82AAFF;">isScored</span><span style="color:#89DDFF;">())</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;font-style:italic;">throw</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;font-style:italic;">new</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">IllegalArgumentException</span><span style="color:#89DDFF;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">exam already scored</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">);</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre></div><h2 id="tambahan" tabindex="-1">Tambahan <a class="header-anchor" href="#tambahan" aria-hidden="true">#</a></h2><p>Di bukunya, Martin Fowler menyatakan bahwa ada beberapa kondisi class atau method yang sengaja dirancang untuk hanya consume data di class lain. Contoh yang paling umum terjadi adalah penggunaan design pattern Strategy atau Visitor. Design pattern ini masuk ke dalam Gang of Four Design Pattern, akan kita pelajari di semester depan.</p>`,7);function F(g,A,C,f,k,b){const n=p("github-url");return i(),o("div",null,[d,e("p",null,[y,t(n,{to:"before/Lecturer.java"},{default:r(()=>[h]),_:1}),u,D,m]),_])}var S=l(c,[["render",F]]);export{x as __pageData,S as default};
