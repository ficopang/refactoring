import{_ as a,c as e,o as n,a as r}from"./app.34f80447.js";const k=JSON.parse('{"title":"Speculative Generality","description":"","frontmatter":{},"headers":[{"level":2,"title":"Penjelasan Smell","slug":"penjelasan-smell"},{"level":2,"title":"Penyelesaian","slug":"penyelesaian"}],"relativePath":"martin-fowler/dispensables/speculative-generality/index.md"}'),i={name:"martin-fowler/dispensables/speculative-generality/index.md"},t=r('<h1 id="speculative-generality" tabindex="-1">Speculative Generality <a class="header-anchor" href="#speculative-generality" aria-hidden="true">#</a></h1><p><a href="https://sourcemaking.com/refactoring/smells/speculative-generality" target="_blank" rel="noopener noreferrer">sourcemaking</a></p><h2 id="penjelasan-smell" tabindex="-1">Penjelasan Smell <a class="header-anchor" href="#penjelasan-smell" aria-hidden="true">#</a></h2><p>Class, method, field, atau parameter yang sudah disiapkan walaupun belum dipakai. Bahkan sebenarnya tidak ada dalam requirement.</p><p>Biasanya karena programmer sok ide, berspekulasi, bahwa ini akan dibutuhkan. Namun ternyata setelah produk berjalan lama, spekulasinya ini tidak terbukti.</p><p>Hal ini tentunya menjadi masalah karena kita membuat code lebih sulit dibaca untuk hal yang tidak perlu.</p><p>Salah satu prinsip extreme programming (XP) yang terkenal adalah <a href="https://en.wikipedia.org/wiki/You_aren%27t_gonna_need_it" target="_blank" rel="noopener noreferrer">You aren&#39;t gonna need it (YAGNI)</a>. Disarankan oleh XP untuk tidak menambahkan fungsionalitas sampai benar-benar diperlukan.</p><p>Contohnya, pada package <code>before</code>.</p><p>Requirement dari client adalah Price bisa memiliki Currency antara IDR atau USD.</p><p>Programmer berspekulasi bahwa IDR dan USD adalah kurs jenis tradisional, nantinya akan ada kurs jenis digital seperti bitcoin. Oleh karena itu, Programmer membuat hirarki seperti di dalam package <code>before</code>.</p><h2 id="penyelesaian" tabindex="-1">Penyelesaian <a class="header-anchor" href="#penyelesaian" aria-hidden="true">#</a></h2><p>Dilakukan <a href="https://sourcemaking.com/refactoring/collapse-hierarchy" target="_blank" rel="noopener noreferrer">Collapse Hierarchy</a>. Class <code>Traditional</code> dan <code>Digital</code> dihapus. class <code>USD</code> dan <code>IDR</code> menjadi turunan langsung dari class <code>Currency</code>.</p>',12),l=[t];function s(d,o,p,c,u,h){return n(),e("div",null,l)}var g=a(i,[["render",s]]);export{k as __pageData,g as default};
