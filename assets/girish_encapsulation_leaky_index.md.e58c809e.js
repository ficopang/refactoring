import{_ as t,c as p,b as s,d as l,w as o,e as a,a as n,r,o as c}from"./app.34f80447.js";var i="/assets/leaky-1.d00db092.png";const $=JSON.parse('{"title":"Leaky Encapsulation","description":"","frontmatter":{},"headers":[{"level":2,"title":"Penyebab smell","slug":"penyebab-smell"},{"level":2,"title":"Contoh 1: Swallowed-copy of Collections","slug":"contoh-1-swallowed-copy-of-collections"},{"level":2,"title":"Masalah","slug":"masalah"},{"level":2,"title":"Penyelesaian","slug":"penyelesaian"},{"level":2,"title":"Catatan","slug":"catatan"},{"level":2,"title":"Contoh 2: Penamaan method yang mengumbarkan detail implementasi","slug":"contoh-2-penamaan-method-yang-mengumbarkan-detail-implementasi"},{"level":2,"title":"When to Ignore","slug":"when-to-ignore"}],"relativePath":"girish/encapsulation/leaky/index.md"}'),y={name:"girish/encapsulation/leaky/index.md"},D=s("h1",{id:"leaky-encapsulation",tabindex:"-1"},[a("Leaky Encapsulation "),s("a",{class:"header-anchor",href:"#leaky-encapsulation","aria-hidden":"true"},"#")],-1),d=s("div",{class:"video-wrapper"},[s("iframe",{width:"560",height:"315",src:"https://www.youtube.com/embed/FXLKSYTwk_0",title:"YouTube video player",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:""})],-1),A=n('<p>Smell ini terjadi jika pada suatu abstraction membocorkan detail melalui suatu method/interface. Smell ini berbeda dengan Deficient Encapsulation dimana kebocoran abstraction tersebut terjadi pada method yang sudah benar dalam access modifier. Selain itu, penamaan public method/implementation yang mengumbar-umbarkan detail implementation juga menimbulkan smell ini (Misal dalam class <code>List</code> terdapat public method bernama <code>bubbleSort()</code> yang seharusnya dapat diganti nama dengan <code>sort()</code> sehingga dapat diubah implementasi dari proses sorting tersebut).</p><h2 id="penyebab-smell" tabindex="-1">Penyebab smell <a class="header-anchor" href="#penyebab-smell" aria-hidden="true">#</a></h2><ul><li><strong>Lack of awareness of what should be &quot;hidden&quot;</strong>: Developer kurang mengetahui bahwa implementasi tersebut harus disembunyikan dari abstraksi lain sehingga developer tersebut kadang tidak sengaja membocorkan akses tersebut ke abstraksi lain.</li><li><strong>Viscosity</strong>: Dimana kasus tersebut memerlukan upaya ekstra agar dapat menciptakan &quot;leak-proof&quot; interface. Pada kasus tersebut, developer terkadang harus menyelesaikan project dengan cepat dan jorok sehingga membiarkan class tersebut dicap smell karenanya.</li><li><strong>Use of fine-grained interface</strong>: Pemakaian interface yang terlalu lengkap (termasuk setter dan getternya) sehingga membocorkan detail implementasi yang seharusnya tidak diperlukan.</li></ul><h2 id="contoh-1-swallowed-copy-of-collections" tabindex="-1">Contoh 1: <em>Swallowed-copy of Collections</em> <a class="header-anchor" href="#contoh-1-swallowed-copy-of-collections" aria-hidden="true">#</a></h2><h2 id="masalah" tabindex="-1">Masalah <a class="header-anchor" href="#masalah" aria-hidden="true">#</a></h2><p><img src="'+i+'" alt="Member class TodoList"></p>',6),F=a("Di package before, terdapat class "),C=a("TodoList"),u=a(" dimana terdapat method "),m=s("code",null,"getList()",-1),h=a(" yang seharusnya return Vector salinan dari "),g=s("code",null,"list",-1),b=a("."),k=n(`<div class="language-java"><span class="copy"></span><pre><code><span class="line"><span style="color:#C792EA;">public</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">Vector</span><span style="color:#89DDFF;">&lt;</span><span style="color:#A6ACCD;">ToDo</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">getList</span><span style="color:#89DDFF;">()</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#89DDFF;">  </span><span style="color:#676E95;font-style:italic;">//shallow copy</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;font-style:italic;">return</span><span style="color:#A6ACCD;"> list</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre></div><p>Namun tanpa disadari, dikarenakan Java merupakan bahasa pemrograman yang dibekali dengan <a href="https://www.geeksforgeeks.org/is-there-any-concept-of-pointers-in-java/" target="_blank" rel="noopener noreferrer">variable referencing</a>, variabel yang direturn merupakan referensi dari <code>list</code> pada class tersebut. Dikarenakan variabel hasil return method tersebut merupakan referensi terhadap <code>list</code> atau istilah kerennya adalah <em>shallow copy</em>, maka ketika variabel hasil shallow copy tersebut mengalami perubahan, maka referensi terkait juga ikutan berubah sehingga dapat menimbulkan masalah secara sistematis terhadap <code>list</code> tersebut.</p><h2 id="penyelesaian" tabindex="-1">Penyelesaian <a class="header-anchor" href="#penyelesaian" aria-hidden="true">#</a></h2><p>Dikarenakan method tersebut meminta Vector salinan dari <code>list</code>, maka salah satu cara menyelesaikan masalah tersebut adalah dengan <em>deep copy</em>, dimana variabel <code>list</code> diperoleh dengan cloning sehingga menghasilkan copy untuk variabel yang mereka return.</p><div class="language-java"><span class="copy"></span><pre><code><span class="line"><span style="color:#C792EA;">public</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">Vector</span><span style="color:#89DDFF;">&lt;</span><span style="color:#A6ACCD;">ToDo</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">getList</span><span style="color:#89DDFF;">()</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#89DDFF;">  </span><span style="color:#676E95;font-style:italic;">//deep copy</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#C792EA;">Vector</span><span style="color:#89DDFF;">&lt;</span><span style="color:#C792EA;">ToDo</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;"> result </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;font-style:italic;">new</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">Vector</span><span style="color:#89DDFF;">&lt;&gt;();</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;font-style:italic;">for</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">(</span><span style="color:#C792EA;">ToDo</span><span style="color:#A6ACCD;"> toDo </span><span style="color:#89DDFF;font-style:italic;">:</span><span style="color:#A6ACCD;"> list</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;font-style:italic;">try</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">      result</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">add</span><span style="color:#89DDFF;">((</span><span style="color:#A6ACCD;">ToDo</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> toDo</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">clone</span><span style="color:#89DDFF;">());</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;font-style:italic;">catch</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">(</span><span style="color:#C792EA;">CloneNotSupportedException</span><span style="color:#A6ACCD;"> e</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">      e</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">printStackTrace</span><span style="color:#89DDFF;">();</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;font-style:italic;">return</span><span style="color:#A6ACCD;"> result</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre></div>`,5),_=a("Sehingga ketika method dalam "),f=a("TodoList (after)"),v=a(" tersebut di-invoke, maka setiap isi dari todo list akan diclone ke Vector baru sehingga diperoleh Vector hasil clone dimana setiap modifikasi yang dilakukan pada list tersebut tidak berpengaruh pada list asli dari class tersebut."),E=n(`<h2 id="catatan" tabindex="-1">Catatan <a class="header-anchor" href="#catatan" aria-hidden="true">#</a></h2><p>Pada beberapa bahasa pemrograman (termasuk Java), kasus <strong>shallow copy</strong> juga terjadi pada Object dimana ketika suatu variabel yang diassign dari Object mengalami perubahan nilai (baik dari referensi asli maupun variabel pengikutnya), maka variabel-variabel yang mengikuti referensi asli dari Object tersebut mengalami perubahan nilai.</p><div class="language-java"><span class="copy"></span><pre><code><span class="line"><span style="color:#C792EA;">Rectangle</span><span style="color:#A6ACCD;"> r1 </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;font-style:italic;">new</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">Rectangle</span><span style="color:#89DDFF;">(</span><span style="color:#F78C6C;">20</span><span style="color:#89DDFF;">);</span></span>
<span class="line"><span style="color:#C792EA;">Rectangle</span><span style="color:#A6ACCD;"> r2 </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> r1</span><span style="color:#89DDFF;">;</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;font-style:italic;">//shallow copy (return as reference of r1)</span></span>
<span class="line"><span style="color:#A6ACCD;">r2</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">setLength</span><span style="color:#89DDFF;">(</span><span style="color:#F78C6C;">40</span><span style="color:#89DDFF;">);</span></span>
<span class="line"><span style="color:#A6ACCD;">System</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">out</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">println</span><span style="color:#89DDFF;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">Rectangle 1 length: </span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">+</span><span style="color:#A6ACCD;"> r1</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">getLength</span><span style="color:#89DDFF;">());</span></span>
<span class="line"><span style="color:#A6ACCD;">System</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">out</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">println</span><span style="color:#89DDFF;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">Rectangle 2 length: </span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">+</span><span style="color:#A6ACCD;"> r2</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">getLength</span><span style="color:#89DDFF;">());</span></span>
<span class="line"></span></code></pre></div><p>Sebagai solusinya, pergunakan <strong>deep copy</strong> pada setiap <code>Vektor</code>/<code>ArrayList</code>/<code>Collections</code> beserta membernya untuk dibuatkan copy dari variabel tersebut beserta isinya secara utuh dengan method <code>clone()</code> sehingga ketika variabel pengikutnya (returner) ataupun variabel asli mengalami perubahan value, maka variabel lain yang mengikutinya tidak mengalami perubahan.</p><div class="language-java"><span class="copy"></span><pre><code><span class="line"><span style="color:#C792EA;">Rectangle</span><span style="color:#A6ACCD;"> r1 </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;font-style:italic;">new</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">Rectangle</span><span style="color:#89DDFF;">(</span><span style="color:#F78C6C;">20</span><span style="color:#89DDFF;">);</span></span>
<span class="line"><span style="color:#C792EA;">Rectangle</span><span style="color:#A6ACCD;"> r2 </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> r1</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">clone</span><span style="color:#89DDFF;">();</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;font-style:italic;">//deep copy (return as value of r1!)</span></span>
<span class="line"><span style="color:#A6ACCD;">r2</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">setLength</span><span style="color:#89DDFF;">(</span><span style="color:#F78C6C;">40</span><span style="color:#89DDFF;">);</span></span>
<span class="line"><span style="color:#A6ACCD;">System</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">out</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">println</span><span style="color:#89DDFF;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">Rectangle 1 length: </span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">+</span><span style="color:#A6ACCD;"> r1</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">getLength</span><span style="color:#89DDFF;">());</span></span>
<span class="line"><span style="color:#A6ACCD;">System</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">out</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">println</span><span style="color:#89DDFF;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">Rectangle 2 length: </span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">+</span><span style="color:#A6ACCD;"> r2</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">getLength</span><span style="color:#89DDFF;">());</span></span>
<span class="line"></span></code></pre></div><p>Maka dengan penggunaan <code>clone()</code> setidaknya dapat menyelesaikan kasus <em>shallow copy</em> pada Object sehingga tidak mempengaruhi Object secara struktural.</p><h2 id="contoh-2-penamaan-method-yang-mengumbarkan-detail-implementasi" tabindex="-1">Contoh 2: Penamaan method yang mengumbarkan detail implementasi <a class="header-anchor" href="#contoh-2-penamaan-method-yang-mengumbarkan-detail-implementasi" aria-hidden="true">#</a></h2><p>Dalam beberapa kasus, misal dalam class <code>List</code> terdapat algoritma yang memaparkan detail mengenai sorting pada suatu list.</p><div class="language-java"><span class="copy"></span><pre><code><span class="line"><span style="color:#C792EA;">public</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">class</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">List</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#C792EA;">public</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">boolean</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">isSorted</span><span style="color:#89DDFF;">()</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">...</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#C792EA;">public</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">void</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">bubbleSort</span><span style="color:#89DDFF;">()</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">...</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre></div><p>Jika algoritma tersebut perlu diganti implementasi dari <code>bubbleSort()</code> menjadi <code>quickSort()</code> atau algoritma-algoritma sorting lainnya, tentunya memerlukan waktu yang tidak sebentar untuk mengubah isi dan nama method sekaligus. Sebagai gantinya, kita dapat mengubah nama public method dari <code>bubbleSort()</code> menjadi <code>sort()</code> sehingga dapat mempermudah implementasi dari proses sorting tersebut dan mencegah user mengetahui detail pada proses sorting List tersebut.</p><h2 id="when-to-ignore" tabindex="-1">When to Ignore <a class="header-anchor" href="#when-to-ignore" aria-hidden="true">#</a></h2>`,11),w=a("Adalah bila kasus tersebut terjadi pada "),S=s("em",null,"low-level class",-1),T=a(" yang berisikan implementasi yang sangat detail dan tidak bakal dipakai sama client class di tempat lain karena class tersebut berperan untuk membantu class yang hierarkinya lebih tinggi dan dipakai oleh Client (higher hierarchical class means usable API implementation). Salah satu contoh kasus "),j=s("em",null,"low-level class",-1),L=a(" adalah class "),V=a("AStar.java"),P=s("a",{href:"./.html"},null,-1),x=n(`<div class="language-java"><span class="copy"></span><pre><code><span class="line"><span style="color:#C792EA;">public</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">class</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">AStar</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#C792EA;">private</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">int</span><span style="color:#A6ACCD;"> f</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#C792EA;">private</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">int</span><span style="color:#A6ACCD;"> g</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#C792EA;">private</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">int</span><span style="color:#A6ACCD;"> h</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#C792EA;">Vector</span><span style="color:#89DDFF;">&lt;</span><span style="color:#C792EA;">Location</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">shortestPath</span><span style="color:#89DDFF;">(</span><span style="color:#C792EA;">Location</span><span style="color:#A6ACCD;"> current</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">Location</span><span style="color:#A6ACCD;"> destination</span><span style="color:#89DDFF;">){</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#C792EA;">Vector</span><span style="color:#89DDFF;">&lt;</span><span style="color:#C792EA;">Location</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;"> paths </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;font-style:italic;">new</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">Vector</span><span style="color:#89DDFF;">&lt;&gt;();</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">    </span><span style="color:#676E95;font-style:italic;">//...</span></span>
<span class="line"><span style="color:#89DDFF;">    </span><span style="color:#676E95;font-style:italic;">//complex A* algorithm code. using f, g, h variable</span></span>
<span class="line"><span style="color:#89DDFF;">    </span><span style="color:#676E95;font-style:italic;">//...</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;font-style:italic;">return</span><span style="color:#A6ACCD;"> paths</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre></div><p>Pada contoh class <code>AStar.java</code>, secara struktural class tersebut memiliki variabel <code>f</code>, <code>g</code>, dan <code>h</code> dimana class tersebut juga berisikan detail rumus A* dimana rumus tersebut hanya dipakai untuk membantu class <code>BojekDriver.java</code> dan tidak digunakan pada client class sehingga smell tersebut dapat diabaikan/ignore.</p><p>Girish dalam bukunya juga memberikan catatan pada developer untuk mengabaikan smell-smell yang terjadi pada low-level class yang berperan sebagai helper untuk class dengan hierarkinya lebih tinggi:</p><blockquote><p>In such cases, when public interface is designed purposefully in this way, clients should be warned that the improper use of those public methods might result in violating the integrity of the object</p></blockquote><p>(Rujukan: 4.2.7 - Practical considerations (hal 78))</p>`,5);function q(R,I,N,B,O,M){const e=r("github-url");return c(),p("div",null,[D,d,A,s("p",null,[F,l(e,{to:"before/ToDoList.java"},{default:o(()=>[C]),_:1}),u,m,h,g,b]),k,s("p",null,[_,l(e,{to:"after/ToDoList.java"},{default:o(()=>[f]),_:1}),v]),E,s("p",null,[w,S,T,j,L,l(e,{to:"../../../../martin-fowler/oo-abusers/temporary-field/after/AStar.java"},{default:o(()=>[V]),_:1}),P]),x])}var W=t(y,[["render",q]]);export{$ as __pageData,W as default};
