import{_ as i,c as t,o as n,a as e,b as a}from"./app.34f80447.js";var r="/assets/encapsulation.6338599e.png",s="/assets/encapsulation-principles.9dfc4f18.png";const y=JSON.parse('{"title":"Encapsulation","description":"","frontmatter":{},"headers":[{"level":2,"title":"Filosofi","slug":"filosofi"},{"level":2,"title":"Prinsip Encapsulation","slug":"prinsip-encapsulation"}],"relativePath":"girish/encapsulation/index.md"}'),l={name:"girish/encapsulation/index.md"},p=e('<h1 id="encapsulation" tabindex="-1">Encapsulation <a class="header-anchor" href="#encapsulation" aria-hidden="true">#</a></h1><p><img src="'+r+'" alt="Girish encapsulation smell"></p><p>Semua smell di dalam grup ini berkaitan dengan kesalahan dalam merancang enkapsulasi dalam interface/abstraksi.</p><ul><li>Encapsulation Intro | <a href="https://www.youtube.com/watch?v=WqXM5lHEwGY&amp;list=PLG_Cu5FmqSk2KHT6lXngRvcOmOzuk4_ju&amp;index=1" target="_blank" rel="noopener noreferrer">Link Video</a></li><li><a href="./deficient/">Deficient Encapsulation</a> | <a href="https://www.youtube.com/watch?v=r-wphP9hQ8E&amp;list=PLG_Cu5FmqSk2KHT6lXngRvcOmOzuk4_ju&amp;index=2" target="_blank" rel="noopener noreferrer">Link Video</a></li><li><a href="./leaky/">Leaky Encapsulation</a> | <a href="https://www.youtube.com/watch?v=FXLKSYTwk_0&amp;list=PLG_Cu5FmqSk2KHT6lXngRvcOmOzuk4_ju&amp;index=3" target="_blank" rel="noopener noreferrer">Link Video</a></li><li><a href="./missing/">Missing Encapsulation</a> | <a href="https://www.youtube.com/watch?v=tHKGrugra70&amp;list=PLG_Cu5FmqSk2KHT6lXngRvcOmOzuk4_ju&amp;index=4" target="_blank" rel="noopener noreferrer">Link Video</a></li><li><a href="./unexploited/">Unexploited Encapsulation</a> | <a href="https://www.youtube.com/watch?v=qQC5cXVuX9Y&amp;list=PLG_Cu5FmqSk2KHT6lXngRvcOmOzuk4_ju&amp;index=5" target="_blank" rel="noopener noreferrer">Link Video</a></li></ul><h2 id="filosofi" tabindex="-1">Filosofi <a class="header-anchor" href="#filosofi" aria-hidden="true">#</a></h2><p>Sebuah mobil mempunyai setir, pedal gas, dan pedal rem. Pedal rem berfungsi untuk melakukan pengereman mobil. Pengereman mobil sendiri mempunyai beberapa jenis, salah satunya adalah pengereman Anti-locking Braking System (ABS). Terkait terhadap kasus tersebut kita sebagai driver tentunya tidak perlu mengetahui detail mengenai sistem pengereman, karena kita cukup mengetahui pengereman tersebut melalui pedal rem kita sehingga detail sistem pengereman seperti ABS tidak diketahui secara langsung oleh kita.</p><h2 id="prinsip-encapsulation" tabindex="-1">Prinsip Encapsulation <a class="header-anchor" href="#prinsip-encapsulation" aria-hidden="true">#</a></h2>',7),d=a("div",{class:"video-wrapper"},[a("iframe",{width:"560",height:"315",src:"https://www.youtube.com/embed/WqXM5lHEwGY",title:"YouTube video player",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:""})],-1),o=e('<p><img src="'+s+'" alt="Girish encapsulation principles"></p><p>Menurut Girish Suryanarayana dkk, terdapat 2 prinsip encapsulation yaitu:</p><ul><li><strong>Hide implementation details</strong> - Class tidak perlu mengetahui detail implementasi member dan algoritma yang dimiliki oleh abstraksi.</li><li><strong>Hide variations</strong> - Class tidak perlu mengetahui variasi-variasi yang dimiliki pada hierarki sehingga ia cukup mengetahui implementasi abstraknya saja.</li></ul><p>Berdasarkan pada pengamatan abstraction smell, terdapat pelanggaran prinsip encapsulation antara lain:</p><table><thead><tr><th>Encapsulation smell</th><th>Pelanggaran prinsip encapsulation</th><th>Penyebab</th><th>Martin Fowler smells</th></tr></thead><tbody><tr><td>Deficient Encapsulation</td><td>Hide implementation details</td><td>Adanya akses terhadap member abstraksi, terutama jika access modifier <code>public</code></td><td>Inappropriate Intimacy</td></tr><tr><td>Leaky Encapsulation</td><td>Hide implementation details</td><td>- List: Data diperoleh dengan <em>swallow copy</em> bukan <em>deep copy</em><br>- Penamaan method yang mengandung detail implementasi</td><td>Inappropriate Intimacy</td></tr><tr><td>Missing Encapsulation</td><td>Hide variations</td><td>a. Tidak ada pembagian Class<br>b. Hierarki bucin alias ada hierarki kembar</td><td>Divergent Changes, Parallel Inheritence</td></tr><tr><td>Unexploited Encapsulation</td><td>Hide variations</td><td>Penggunaan <code>if-else</code> atau <code>switch</code> statement dalam object type checking</td><td>Switch Statements</td></tr></tbody></table><hr><p>Repository ini hanyalah rangkuman dari buku Suryanarayana et al. dengan sedikit tambahan informasi lain. Diharapkan mahasiswa juga membaca sumber aslinya pada bab 4 halaman 61 - 91.</p>',7),m=[p,d,o];function u(c,h,g,k,_,b){return n(),t("div",null,m)}var w=i(l,[["render",u]]);export{y as __pageData,w as default};
