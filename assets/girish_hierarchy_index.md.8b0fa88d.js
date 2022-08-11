import{_ as i,c as r,o as t,a as e,b as a}from"./app.34f80447.js";var n="/assets/hierarchy.cba8a860.png",s="/assets/hierarchy-philosophy.2bd0d5b8.png",l="/assets/hierarchy-principles.560cbba9.png";const v=JSON.parse('{"title":"Hierarchy","description":"","frontmatter":{},"headers":[{"level":2,"title":"Filosofi","slug":"filosofi"},{"level":2,"title":"Prinsip Hierarchy","slug":"prinsip-hierarchy"}],"relativePath":"girish/hierarchy/index.md"}'),d={name:"girish/hierarchy/index.md"},u=e('<h1 id="hierarchy" tabindex="-1">Hierarchy <a class="header-anchor" href="#hierarchy" aria-hidden="true">#</a></h1><p><img src="'+n+'" alt="Girish hierarchy smell"></p><p>Semua smell di dalam grup ini berkaitan dengan kesalahan dalam merancang hierarki.</p><ul><li>Hierarchy Intro | <a href="https://www.youtube.com/watch?v=FvLtPJzya5o&amp;list=PLG_Cu5FmqSk2KHT6lXngRvcOmOzuk4_ju" target="_blank" rel="noopener noreferrer">Link Video</a></li><li><a href="./missing/">Missing Hierarchy</a> | <a href="https://www.youtube.com/watch?v=Z0gVvdARFWw&amp;list=PLG_Cu5FmqSk2KHT6lXngRvcOmOzuk4_ju" target="_blank" rel="noopener noreferrer">Link Video</a></li><li><a href="./unnecessary/">Unnecessary Hierarchy</a> | <a href="https://www.youtube.com/watch?v=hfNd8QPcWDk&amp;list=PLG_Cu5FmqSk2KHT6lXngRvcOmOzuk4_ju" target="_blank" rel="noopener noreferrer">Link Video</a></li><li><a href="./unfactored/">Unfactored Hierarchy</a> | <a href="https://www.youtube.com/watch?v=IJFO8YlSosc&amp;list=PLG_Cu5FmqSk2KHT6lXngRvcOmOzuk4_ju" target="_blank" rel="noopener noreferrer">Link Video</a></li><li><a href="./wide/">Wide Hierarchy</a> | <a href="https://www.youtube.com/watch?v=7pyZYGDz54w&amp;list=PLG_Cu5FmqSk2KHT6lXngRvcOmOzuk4_ju" target="_blank" rel="noopener noreferrer">Link Video</a></li><li><a href="./speculative/">Speculative Hierarchy</a> | <a href="https://www.youtube.com/watch?v=WaI-tpREgd8&amp;list=PLG_Cu5FmqSk2KHT6lXngRvcOmOzuk4_ju" target="_blank" rel="noopener noreferrer">Link Video</a></li></ul><h2 id="filosofi" tabindex="-1">Filosofi <a class="header-anchor" href="#filosofi" aria-hidden="true">#</a></h2><p><img src="'+s+'" alt="Human Taxonomy"></p><p>Semua makhluk hidup (baik hewan, tumbuhan, manusia, bakteri, jamur, dan makhluk hidup lainnya) dikelompokkan berdasarkan klasifikasi spesies mulai dari kingdom, filum, class, ordo, family, genus, hingga spesies. Pengelompokkan makhluk hidup (taxonomy) tentunya mempermudah identifikasi makhluk hidup di muka bumi ini, termasuk manusia. Fakta menarik bahwa manusia merupakan spesies makhluk hidup bernamakan <em>Homo Sapiens</em>, dimana secara hierarki dapat ditujukan pada gambar diatas, merupakan hewan (bertulang belakang) Mamalia <em>ordo</em> Primata yang berevolusi dari saudara-saudara se-ordonya.</p><p>Semua ini tentunya merupakan kemajuan dalam dunia biologi berkat <a href="https://en.wikipedia.org/wiki/Carl_Linnaeus" target="_blank" rel="noopener noreferrer">Carl Linnaeus</a> karena ialah yang merancang pengelompokan makhluk hidup secara taksonomis olehnya.</p><h2 id="prinsip-hierarchy" tabindex="-1">Prinsip Hierarchy <a class="header-anchor" href="#prinsip-hierarchy" aria-hidden="true">#</a></h2>',9),o=a("div",{class:"video-wrapper"},[a("iframe",{width:"560",height:"315",src:"https://www.youtube.com/embed/FvLtPJzya5o",title:"YouTube video player",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:""})],-1),p=e('<p><img src="'+l+'" alt="Girish hierarchy principles"></p><p>Terdapat 5 prinsip dalam merancang hierarki:</p><ul><li><strong>Apply meaningful classification</strong>: Terdapat 2 langkah penting dalam mengklasifikasikan suatu hierarki yaitu: <ol><li>Identifikasi kesamaan dan variasi dari berbagai jenis, temukan kesamaan sebagai superclass dan variasi sebagai subclass.</li><li>Golongkan kesamaan dalam superclass/root (tentunya dalam bentuk <em>abstract class</em> atau <em>interface</em> jika abstraksi superclass berupa template) dan variasi dalam subclass/child/leaves (melalui <code>extends</code> atau <code>implements</code>).</li></ol></li><li><strong>Apply meaningful generalization</strong>: Kelompokkan semua elemen-elemen (behaviour dan elemen) yang sama antar subclass sebagai bagian dari superclass. Generalization tentunya mempermudah pemakaian kembali code sehingga mengurangi jumlah duplikat dalam hierarki class.</li><li><strong>Ensure substitutability</strong>: Pastikan setiap reference yang diturunkan dari superclass bisa disubstitusi di subclass tanpa mengubah behaviour secara hierarkis alias sesuai dengan prinsip <em>Liskov\u2019s Substitution (LSP)</em>. Kasus ini terjadi bila class turunannya melanggar prinsip LSP seperti pada <a href="./../../martin-fowler/oo-abusers/refused-bequest/">OO-Abusers - Refused Bequest</a>.</li><li><strong>Avoid redundant paths</strong>: Hindari jalan pintas <em>inheritance</em> dikarenakan class turunan &quot;cucu&quot; sudah mengimplementasikan semuanya dari &quot;kakek&quot; hingga &quot;anak&quot; sehingga tidak berguna jika class &quot;cicit&quot; ambil jalan pintas dari kakeknya padahal class tersebut merupakan turunan dari cucu-nya sendiri. <em>(ya apalagi kalo Tamika sampai nekat ambil jalan pintas dari Kakek Sugiono padahal bapaknya Tamika sendiri adalah anaknya Kakek Sugiono)</em></li><li><strong>Ensure proper ordering</strong>: Pastikan subclass/anaknya bergantung dengan superclass/parentnya, bukan sebaliknya. Jika hal ini terjadi sebaliknya, maka bisa mempersulit dalam reusability <em>parent class</em> secara hierarkis.</li></ul><p>Berdasarkan pada pengamatan hierarchy smell, terdapat pelanggaran prinsip hierarki antara lain:</p><table><thead><tr><th>Hierarchy smell</th><th>Pelanggaran prinsip hierarchy</th><th>Penyebab</th><th>Martin Fowler smells</th></tr></thead><tbody><tr><td>Missing Hierarchy</td><td>Apply meaningful classification</td><td>Pemakaian conditional checking untuk menentukan behaviour object yang seharusnya dapat diganti dengan polymorphism</td><td>-</td></tr><tr><td>Unnecessary Hierarchy</td><td>Apply meaningful classification</td><td>Developer membuatkan subclass hanya karena masalah perbedaan attribute bukan pada perbedaan behaviour</td><td>-</td></tr><tr><td>Unfactored Hierarchy</td><td>Apply meaningful generalization</td><td>Terdapat duplikat antara sesama saudara subclass atau antar subclass dengan superclass</td><td>Duplicate Code (class-to-class)</td></tr><tr><td>Wide Hierarchy</td><td>Apply meaningful generalization</td><td>Superclass mempunyai banyak anakan langsung tanpa intermediate class</td><td>-</td></tr><tr><td>Speculative Hierarchy</td><td>Apply meaningful generalization</td><td>Adanya class yang dibuatkan oleh developer karena alasan spekulatif untuk memenuhi kasus tertentu</td><td>Speculative Generalities</td></tr><tr><td>Deep Hierarchy</td><td>Apply meaningful generalization</td><td>Pembuatan hierarki terlalu besar dan terlalu dalam subclass levelnya.</td><td>-</td></tr><tr><td>Rebellious Hierarchy</td><td>Ensure substitutability</td><td>Subclass menolak behaviour dari superclass</td><td>Refused Bequest</td></tr><tr><td>Broken Hierarchy</td><td>Ensure substitutability</td><td>Hubungan relationship antar superclass dan subclass terputus meski ada inheritance</td><td>?</td></tr><tr><td>Multipath Hierarchy</td><td>Avoid redundant paths</td><td>Subclass (cucu) mengambil jalan pintas inheritance ke base class</td><td>?</td></tr><tr><td>Cyclic Hierarchy</td><td>Ensure proper ordering</td><td>Superclass bergantung pada subclass</td><td>Feature Envy</td></tr></tbody></table><hr><p>Repository ini hanyalah rangkuman dari buku Suryanarayana et al. dengan sedikit tambahan informasi lain. Diharapkan mahasiswa juga membaca sumber aslinya pada bab 6 halaman 123 - 192.</p>',7),m=[u,o,p];function h(c,k,g,b,y,f){return t(),r("div",null,m)}var w=i(d,[["render",h]]);export{v as __pageData,w as default};
