import{_ as a,c as e,o as n,a as i}from"./app.34f80447.js";var s="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIkAAAAeCAYAAAAYRz0yAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAOGSURBVHhe7ZpNkjIhDIY9F/f4rsAJ3H9XwIWncOGu927nAG5Yu/IQGWgJBOjmJ7alU/JUpWq6IcDISxKc2cFgUGGIZFBliGRQZYhkUGWI5A8wSQFSafeUoycJQk7uaXuGSD4crQTsdjvYCQXLMtGghGk3fV4llK8TySQfH+i6SXjdmezERIh5TasCQSaQbv2iEHG4DJFk9iEi0QrEvB4BTfve27+DrxXJK07cdoQU0pNB6qmJR1Ekd7WH/7t/xvZwMbPepzOchH1+2FGc4bq6mhtc5R6Oru9s4gCX6ebaLT9w8m1nuLu3S1wljnOAq3vHgS0SPYEyBeQj2rgxhIk6ujAOx8fSnGZS+sVli2IbfUqFcaNIjCDMhuPPsS1smj7H4kjsKH9cxxtcUHStIqn0q8ESib09uE1essWxOD4OXCOnDvXRpMXZpyhr62m2WSQlO0Wjk40vGPq0RQgyphcYj36RkKLQfPDBS5uxMEqkdQDHB0FfZm3kN77B/yUiMenikV5sKgnvj4qkkOlAfLC/JfbBzU5TmiWPGiEtRXMxQJGsWnICaydzSXQcHw9uHLuu6Es5KNrSoekQSXzSozZyuqkQ4ghjITUIjudFhSKhffJ3+Zh99Imk4QPP6geODwHbWnZ4Bfwdnxgior0mSU8wjRhLNUbVnEhI/TILIKln4nch2nApnuIMDP2Fa2V28jk+AYxC7ekwZ4sxKO8XSZJKcM6TdOPbsTcQyXw6P9QoXyaS1g2lIvlx/tYXhWHE5OeKUx6HvkiCqaMQFbL0wPEJ1OqZFj483SS1Sva9iGnXRgjmOh1qC3pzOTwEMxes4f1RuDGfvP5a+kQS+i9vWqg/6HgcH0+pXmmiQaQEf9sqzLe5SGrfkaDRAjS69RjDuSLBWaPzMOkViTna/pq4fp1Nro8cH8+TV+Aef7LOea0rn8n2IrGYtppQqEhSMfg2OoexbA0MukVi8Clg0ZZPLMcH4azR03U7QkE5W/F5jUgsLq3EYjHP8pyloFgMtO6g1+FYWFy4G6AnBVLQjRcmSiiYCsNwfGbYKacv1czgXNY4Ihm8i0rdskZXFEFCNGGlm8Eb8fVCY1To7W+xf4B0YmR/LT94L6GuqRWhIfI0BZGkYK0Ja4jkw6lfURmpCUVi6iWp6O1rmSGSP4AViixUu1rJ4v+DPMsQyaDKEMmgyhDJoMoQyaACwC9AZAdEbISQcwAAAABJRU5ErkJggg==";const m=JSON.parse('{"title":"Unutilized Abstraction","description":"","frontmatter":{},"headers":[{"level":2,"title":"Penyebab Smell","slug":"penyebab-smell"},{"level":2,"title":"Penyelesaian","slug":"penyelesaian"},{"level":2,"title":"Tambahan","slug":"tambahan"}],"relativePath":"girish/abstraction/unutilized/index.md"}'),l={name:"girish/abstraction/unutilized/index.md"},t=i(`<h1 id="unutilized-abstraction" tabindex="-1">Unutilized Abstraction <a class="header-anchor" href="#unutilized-abstraction" aria-hidden="true">#</a></h1><p>Smell ini terjadi ketika ada class atau interface yang tidak pernah digunakan di dalam project. Smell ini mirip dengan dead code Martin Fowler.</p><p>Suryanarayana et al. menggolongkannya dalam dua jenis:</p><ul><li>Unreferenced abstractions: concrete class yang tidak pernah dipakai.</li><li>Orphan abstractions: interface/abstract class yang tidak pernah diturunkan.</li></ul><h2 id="penyebab-smell" tabindex="-1">Penyebab Smell <a class="header-anchor" href="#penyebab-smell" aria-hidden="true">#</a></h2><ul><li><strong>Speculative design</strong>: sama dengan Martin Fowler speculative generality. Developer membuatnya karena spekulasi fitur di masa yang akan datang yang tidak pasti kejadian.</li><li><strong>Leftover Garbage</strong>: awalnya class masih dipakai. Tapi ternyata setelah beberapa kali mengalami refactoring (untuk mengatasi smell lain), developer tidak menyadari class sudah tidak dipakai lagi.</li><li><strong>Fear of breaking code</strong>: developer takut menghapus class karena khawatir akan masih dipakai.</li></ul><h2 id="penyelesaian" tabindex="-1">Penyelesaian <a class="header-anchor" href="#penyelesaian" aria-hidden="true">#</a></h2><p>Class/interface dihapus.</p><p>Untuk kasus public library/framework yang belum mau dinaikkan major version-nya (karena menghapus class = breaking changes), maka Anda bisa menandai class/interface itu sebagai <code>deprecated</code>. Dengan menandai <code>deprecated</code>, Anda memperingatkan developer lain yang menggunakan library ini, bahwa bagian code tersebut akan dihapus di versi yang akan mendatang.</p><p>Di Java, cara menandai <code>deprecated</code> adalah tinggal menggunakan annotation <code>@Deprecated</code>. Contoh:</p><div class="language-java"><span class="copy"></span><pre><code><span class="line"><span style="color:#89DDFF;">@</span><span style="color:#C792EA;">Deprecated</span></span>
<span class="line"><span style="color:#C792EA;">public</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">class</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">Foo</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre></div><p>Bila menggunakan Eclipse IDE, code yang sudah ditandai <code>deprecated</code> akan diberi tanda coret.</p><p><img src="`+s+'" alt=""></p><h2 id="tambahan" tabindex="-1">Tambahan <a class="header-anchor" href="#tambahan" aria-hidden="true">#</a></h2><p>Flag <code>deprecated</code> tidak hanya berlaku untuk smell ini saja. <code>Deprecated</code> bisa Anda manfaatkan ketika belum mau melakukan major breaking changes untuk refactoring smell apapun.</p>',15),r=[t];function c(d,p,o,g,u,k){return n(),e("div",null,r)}var A=a(l,[["render",c]]);export{m as __pageData,A as default};
