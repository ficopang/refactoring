import{_ as r,c as p,b as s,d as o,w as n,a as D,e as l,r as t,o as A}from"./app.5c0e4cd3.js";const Q=JSON.parse('{"title":"Message Chains","description":"","frontmatter":{},"headers":[{"level":2,"title":"Penjelasan Smell","slug":"penjelasan-smell"},{"level":2,"title":"Penyelesaian","slug":"penyelesaian"},{"level":2,"title":"Tambahan","slug":"tambahan"}],"relativePath":"martin-fowler/couplers/message-chains/index.md"}'),y={name:"martin-fowler/couplers/message-chains/index.md"},i=D('<h1 id="message-chains" tabindex="-1">Message Chains <a class="header-anchor" href="#message-chains" aria-hidden="true">#</a></h1><p><a href="https://sourcemaking.com/refactoring/smells/message-chains" target="_blank" rel="noopener noreferrer">sourcemaking</a></p><h2 id="penjelasan-smell" tabindex="-1">Penjelasan Smell <a class="header-anchor" href="#penjelasan-smell" aria-hidden="true">#</a></h2><p>Smell ini terjadi ketika ingin mengakses sebuah method, perlu dilakukan pemanggilan dari hasil return method lainnya sehingga membentuk rantai: <code>obj.a().b().c()</code>.</p>',4),C=l("Perhatikan "),F=l("DistanceTest.java"),d=l(", terdapat message chaining ketika ingin mengakses latitude dan longitude."),u=s("div",{class:"language-java"},[s("span",{class:"copy"}),s("div",{class:"highlight-lines"},[s("br"),s("br"),s("br"),s("br"),s("br"),s("br"),s("br"),s("br"),s("br"),s("br"),s("br"),s("br"),s("br"),s("br"),s("div",{class:"highlighted"},"\xA0"),s("div",{class:"highlighted"},"\xA0"),s("div",{class:"highlighted"},"\xA0"),s("div",{class:"highlighted"},"\xA0"),s("br"),s("br"),s("br"),s("br"),s("br"),s("br"),s("br"),s("br"),s("br"),s("br"),s("div",{class:"highlighted"},"\xA0"),s("div",{class:"highlighted"},"\xA0"),s("div",{class:"highlighted"},"\xA0"),s("div",{class:"highlighted"},"\xA0"),s("br"),s("br"),s("br"),s("br"),s("br"),s("br"),s("br")]),s("pre",null,[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#C792EA"}},"class"),s("span",{style:{color:"#A6ACCD"}}," "),s("span",{style:{color:"#FFCB6B"}},"DistanceTest"),s("span",{style:{color:"#A6ACCD"}}," "),s("span",{style:{color:"#89DDFF"}},"{")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"	"),s("span",{style:{color:"#C792EA"}},"static"),s("span",{style:{color:"#A6ACCD"}}," "),s("span",{style:{color:"#C792EA"}},"BojekDriver"),s("span",{style:{color:"#A6ACCD"}}," driver"),s("span",{style:{color:"#89DDFF"}},";")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"	"),s("span",{style:{color:"#C792EA"}},"static"),s("span",{style:{color:"#A6ACCD"}}," "),s("span",{style:{color:"#C792EA"}},"Destination"),s("span",{style:{color:"#A6ACCD"}}," destination"),s("span",{style:{color:"#89DDFF"}},";")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"	"),s("span",{style:{color:"#89DDFF"}},"@"),s("span",{style:{color:"#C792EA"}},"BeforeAll")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"	"),s("span",{style:{color:"#C792EA"}},"static"),s("span",{style:{color:"#A6ACCD"}}," "),s("span",{style:{color:"#C792EA"}},"void"),s("span",{style:{color:"#A6ACCD"}}," "),s("span",{style:{color:"#82AAFF"}},"init"),s("span",{style:{color:"#89DDFF"}},"()"),s("span",{style:{color:"#A6ACCD"}}," "),s("span",{style:{color:"#89DDFF"}},"{")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"		driver "),s("span",{style:{color:"#89DDFF"}},"="),s("span",{style:{color:"#A6ACCD"}}," "),s("span",{style:{color:"#89DDFF","font-style":"italic"}},"new"),s("span",{style:{color:"#A6ACCD"}}," "),s("span",{style:{color:"#82AAFF"}},"BojekDriver"),s("span",{style:{color:"#89DDFF"}},"("),s("span",{style:{color:"#89DDFF"}},'"'),s("span",{style:{color:"#C3E88D"}},"Amir"),s("span",{style:{color:"#89DDFF"}},'"'),s("span",{style:{color:"#89DDFF"}},","),s("span",{style:{color:"#A6ACCD"}}," "),s("span",{style:{color:"#89DDFF","font-style":"italic"}},"new"),s("span",{style:{color:"#A6ACCD"}}," "),s("span",{style:{color:"#82AAFF"}},"Position"),s("span",{style:{color:"#89DDFF"}},"(-"),s("span",{style:{color:"#F78C6C"}},"6.201932"),s("span",{style:{color:"#89DDFF"}},","),s("span",{style:{color:"#A6ACCD"}}," "),s("span",{style:{color:"#F78C6C"}},"106.781529"),s("span",{style:{color:"#89DDFF"}},"));")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"		destination "),s("span",{style:{color:"#89DDFF"}},"="),s("span",{style:{color:"#A6ACCD"}}," "),s("span",{style:{color:"#89DDFF","font-style":"italic"}},"new"),s("span",{style:{color:"#A6ACCD"}}," "),s("span",{style:{color:"#82AAFF"}},"Destination"),s("span",{style:{color:"#89DDFF"}},"("),s("span",{style:{color:"#89DDFF"}},'"'),s("span",{style:{color:"#C3E88D"}},"Binus Anggrek"),s("span",{style:{color:"#89DDFF"}},'"'),s("span",{style:{color:"#89DDFF"}},","),s("span",{style:{color:"#A6ACCD"}}," "),s("span",{style:{color:"#89DDFF","font-style":"italic"}},"new"),s("span",{style:{color:"#A6ACCD"}}," "),s("span",{style:{color:"#82AAFF"}},"Position"),s("span",{style:{color:"#89DDFF"}},"(-"),s("span",{style:{color:"#F78C6C"}},"6.201935"),s("span",{style:{color:"#89DDFF"}},","),s("span",{style:{color:"#A6ACCD"}}," "),s("span",{style:{color:"#F78C6C"}},"106.781525"),s("span",{style:{color:"#89DDFF"}},"));")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"	"),s("span",{style:{color:"#89DDFF"}},"}")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"	"),s("span",{style:{color:"#89DDFF"}},"@"),s("span",{style:{color:"#C792EA"}},"Test")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"	"),s("span",{style:{color:"#C792EA"}},"void"),s("span",{style:{color:"#A6ACCD"}}," "),s("span",{style:{color:"#82AAFF"}},"manhattan"),s("span",{style:{color:"#89DDFF"}},"()"),s("span",{style:{color:"#A6ACCD"}}," "),s("span",{style:{color:"#89DDFF"}},"{")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"		"),s("span",{style:{color:"#C792EA"}},"DistanceCalculator"),s("span",{style:{color:"#A6ACCD"}}," calc "),s("span",{style:{color:"#89DDFF"}},"="),s("span",{style:{color:"#A6ACCD"}}," "),s("span",{style:{color:"#89DDFF","font-style":"italic"}},"new"),s("span",{style:{color:"#A6ACCD"}}," "),s("span",{style:{color:"#82AAFF"}},"Manhattan"),s("span",{style:{color:"#89DDFF"}},"();")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"		"),s("span",{style:{color:"#C792EA"}},"double"),s("span",{style:{color:"#A6ACCD"}}," result "),s("span",{style:{color:"#89DDFF"}},"="),s("span",{style:{color:"#A6ACCD"}}," calc"),s("span",{style:{color:"#89DDFF"}},"."),s("span",{style:{color:"#82AAFF"}},"distance"),s("span",{style:{color:"#89DDFF"}},"(")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"			driver"),s("span",{style:{color:"#89DDFF"}},"."),s("span",{style:{color:"#82AAFF"}},"getCurrentPosition"),s("span",{style:{color:"#89DDFF"}},"()."),s("span",{style:{color:"#82AAFF"}},"getLatitude"),s("span",{style:{color:"#89DDFF"}},"(),")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"			driver"),s("span",{style:{color:"#89DDFF"}},"."),s("span",{style:{color:"#82AAFF"}},"getCurrentPosition"),s("span",{style:{color:"#89DDFF"}},"()."),s("span",{style:{color:"#82AAFF"}},"getLongitude"),s("span",{style:{color:"#89DDFF"}},"(),")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"			destination"),s("span",{style:{color:"#89DDFF"}},"."),s("span",{style:{color:"#82AAFF"}},"getPosition"),s("span",{style:{color:"#89DDFF"}},"()."),s("span",{style:{color:"#82AAFF"}},"getLatitude"),s("span",{style:{color:"#89DDFF"}},"(),")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"			destination"),s("span",{style:{color:"#89DDFF"}},"."),s("span",{style:{color:"#82AAFF"}},"getPosition"),s("span",{style:{color:"#89DDFF"}},"()."),s("span",{style:{color:"#82AAFF"}},"getLongitude"),s("span",{style:{color:"#89DDFF"}},"()")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"		"),s("span",{style:{color:"#89DDFF"}},");")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"		"),s("span",{style:{color:"#C792EA"}},"double"),s("span",{style:{color:"#A6ACCD"}}," expected "),s("span",{style:{color:"#89DDFF"}},"="),s("span",{style:{color:"#A6ACCD"}}," "),s("span",{style:{color:"#F78C6C"}},"0.000007"),s("span",{style:{color:"#89DDFF"}},";")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"		"),s("span",{style:{color:"#82AAFF"}},"assertEquals"),s("span",{style:{color:"#89DDFF"}},"("),s("span",{style:{color:"#A6ACCD"}},"expected"),s("span",{style:{color:"#89DDFF"}},","),s("span",{style:{color:"#A6ACCD"}}," result"),s("span",{style:{color:"#89DDFF"}},");")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"	"),s("span",{style:{color:"#89DDFF"}},"}")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"	"),s("span",{style:{color:"#89DDFF"}},"@"),s("span",{style:{color:"#C792EA"}},"Test")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"	"),s("span",{style:{color:"#C792EA"}},"void"),s("span",{style:{color:"#A6ACCD"}}," "),s("span",{style:{color:"#82AAFF"}},"euclidean"),s("span",{style:{color:"#89DDFF"}},"()"),s("span",{style:{color:"#A6ACCD"}}," "),s("span",{style:{color:"#89DDFF"}},"{")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"		"),s("span",{style:{color:"#C792EA"}},"DistanceCalculator"),s("span",{style:{color:"#A6ACCD"}}," calc "),s("span",{style:{color:"#89DDFF"}},"="),s("span",{style:{color:"#A6ACCD"}}," "),s("span",{style:{color:"#89DDFF","font-style":"italic"}},"new"),s("span",{style:{color:"#A6ACCD"}}," "),s("span",{style:{color:"#82AAFF"}},"Euclidean"),s("span",{style:{color:"#89DDFF"}},"();")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"		"),s("span",{style:{color:"#C792EA"}},"double"),s("span",{style:{color:"#A6ACCD"}}," result "),s("span",{style:{color:"#89DDFF"}},"="),s("span",{style:{color:"#A6ACCD"}}," calc"),s("span",{style:{color:"#89DDFF"}},"."),s("span",{style:{color:"#82AAFF"}},"distance"),s("span",{style:{color:"#89DDFF"}},"(")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"			driver"),s("span",{style:{color:"#89DDFF"}},"."),s("span",{style:{color:"#82AAFF"}},"getCurrentPosition"),s("span",{style:{color:"#89DDFF"}},"()."),s("span",{style:{color:"#82AAFF"}},"getLatitude"),s("span",{style:{color:"#89DDFF"}},"(),")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"			driver"),s("span",{style:{color:"#89DDFF"}},"."),s("span",{style:{color:"#82AAFF"}},"getCurrentPosition"),s("span",{style:{color:"#89DDFF"}},"()."),s("span",{style:{color:"#82AAFF"}},"getLongitude"),s("span",{style:{color:"#89DDFF"}},"(),")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"			destination"),s("span",{style:{color:"#89DDFF"}},"."),s("span",{style:{color:"#82AAFF"}},"getPosition"),s("span",{style:{color:"#89DDFF"}},"()."),s("span",{style:{color:"#82AAFF"}},"getLatitude"),s("span",{style:{color:"#89DDFF"}},"(),")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"			destination"),s("span",{style:{color:"#89DDFF"}},"."),s("span",{style:{color:"#82AAFF"}},"getPosition"),s("span",{style:{color:"#89DDFF"}},"()."),s("span",{style:{color:"#82AAFF"}},"getLongitude"),s("span",{style:{color:"#89DDFF"}},"()")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"		"),s("span",{style:{color:"#89DDFF"}},");")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"		"),s("span",{style:{color:"#C792EA"}},"double"),s("span",{style:{color:"#A6ACCD"}}," expected "),s("span",{style:{color:"#89DDFF"}},"="),s("span",{style:{color:"#A6ACCD"}}," "),s("span",{style:{color:"#F78C6C"}},"0.000005"),s("span",{style:{color:"#89DDFF"}},";")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"		"),s("span",{style:{color:"#82AAFF"}},"assertEquals"),s("span",{style:{color:"#89DDFF"}},"("),s("span",{style:{color:"#A6ACCD"}},"expected"),s("span",{style:{color:"#89DDFF"}},","),s("span",{style:{color:"#A6ACCD"}}," result"),s("span",{style:{color:"#89DDFF"}},");")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"	"),s("span",{style:{color:"#89DDFF"}},"}")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#89DDFF"}},"}")]),l(`
`),s("span",{class:"line"})])])],-1),h=s("div",{class:"language-java"},[s("span",{class:"copy"}),s("pre",null,[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#C792EA"}},"public"),s("span",{style:{color:"#A6ACCD"}}," "),s("span",{style:{color:"#C792EA"}},"class"),s("span",{style:{color:"#A6ACCD"}}," "),s("span",{style:{color:"#FFCB6B"}},"BojekDriver"),s("span",{style:{color:"#A6ACCD"}}," "),s("span",{style:{color:"#89DDFF"}},"{")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"	"),s("span",{style:{color:"#C792EA"}},"private"),s("span",{style:{color:"#A6ACCD"}}," "),s("span",{style:{color:"#C792EA"}},"String"),s("span",{style:{color:"#A6ACCD"}}," name"),s("span",{style:{color:"#89DDFF"}},";")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"	"),s("span",{style:{color:"#C792EA"}},"private"),s("span",{style:{color:"#A6ACCD"}}," "),s("span",{style:{color:"#C792EA"}},"Position"),s("span",{style:{color:"#A6ACCD"}}," currentPosition"),s("span",{style:{color:"#89DDFF"}},";")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"	"),s("span",{style:{color:"#C792EA"}},"public"),s("span",{style:{color:"#A6ACCD"}}," "),s("span",{style:{color:"#82AAFF"}},"BojekDriver"),s("span",{style:{color:"#89DDFF"}},"("),s("span",{style:{color:"#C792EA"}},"String"),s("span",{style:{color:"#A6ACCD"}}," name"),s("span",{style:{color:"#89DDFF"}},","),s("span",{style:{color:"#A6ACCD"}}," "),s("span",{style:{color:"#C792EA"}},"Position"),s("span",{style:{color:"#A6ACCD"}}," currentPosition"),s("span",{style:{color:"#89DDFF"}},")"),s("span",{style:{color:"#A6ACCD"}}," "),s("span",{style:{color:"#89DDFF"}},"{")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"		super"),s("span",{style:{color:"#89DDFF"}},"();")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"		"),s("span",{style:{color:"#89DDFF"}},"this."),s("span",{style:{color:"#A6ACCD"}},"name "),s("span",{style:{color:"#89DDFF"}},"="),s("span",{style:{color:"#A6ACCD"}}," name"),s("span",{style:{color:"#89DDFF"}},";")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"		"),s("span",{style:{color:"#89DDFF"}},"this."),s("span",{style:{color:"#A6ACCD"}},"currentPosition "),s("span",{style:{color:"#89DDFF"}},"="),s("span",{style:{color:"#A6ACCD"}}," currentPosition"),s("span",{style:{color:"#89DDFF"}},";")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"	"),s("span",{style:{color:"#89DDFF"}},"}")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"	"),s("span",{style:{color:"#C792EA"}},"public"),s("span",{style:{color:"#A6ACCD"}}," "),s("span",{style:{color:"#C792EA"}},"String"),s("span",{style:{color:"#A6ACCD"}}," "),s("span",{style:{color:"#82AAFF"}},"getName"),s("span",{style:{color:"#89DDFF"}},"()"),s("span",{style:{color:"#A6ACCD"}}," "),s("span",{style:{color:"#89DDFF"}},"{")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"		"),s("span",{style:{color:"#89DDFF","font-style":"italic"}},"return"),s("span",{style:{color:"#A6ACCD"}}," name"),s("span",{style:{color:"#89DDFF"}},";")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"	"),s("span",{style:{color:"#89DDFF"}},"}")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"	"),s("span",{style:{color:"#C792EA"}},"public"),s("span",{style:{color:"#A6ACCD"}}," "),s("span",{style:{color:"#C792EA"}},"Position"),s("span",{style:{color:"#A6ACCD"}}," "),s("span",{style:{color:"#82AAFF"}},"getCurrentPosition"),s("span",{style:{color:"#89DDFF"}},"()"),s("span",{style:{color:"#A6ACCD"}}," "),s("span",{style:{color:"#89DDFF"}},"{")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"		"),s("span",{style:{color:"#89DDFF","font-style":"italic"}},"return"),s("span",{style:{color:"#A6ACCD"}}," currentPosition"),s("span",{style:{color:"#89DDFF"}},";")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"	"),s("span",{style:{color:"#89DDFF"}},"}")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#89DDFF"}},"}")]),l(`
`),s("span",{class:"line"})])])],-1),g=s("div",{class:"language-java"},[s("span",{class:"copy"}),s("pre",null,[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#C792EA"}},"public"),s("span",{style:{color:"#A6ACCD"}}," "),s("span",{style:{color:"#C792EA"}},"class"),s("span",{style:{color:"#A6ACCD"}}," "),s("span",{style:{color:"#FFCB6B"}},"Position"),s("span",{style:{color:"#A6ACCD"}}," "),s("span",{style:{color:"#89DDFF"}},"{")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"	"),s("span",{style:{color:"#C792EA"}},"private"),s("span",{style:{color:"#A6ACCD"}}," "),s("span",{style:{color:"#C792EA"}},"double"),s("span",{style:{color:"#A6ACCD"}}," latitude"),s("span",{style:{color:"#89DDFF"}},";")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"	"),s("span",{style:{color:"#C792EA"}},"private"),s("span",{style:{color:"#A6ACCD"}}," "),s("span",{style:{color:"#C792EA"}},"double"),s("span",{style:{color:"#A6ACCD"}}," longitude"),s("span",{style:{color:"#89DDFF"}},";")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"	"),s("span",{style:{color:"#C792EA"}},"public"),s("span",{style:{color:"#A6ACCD"}}," "),s("span",{style:{color:"#82AAFF"}},"Position"),s("span",{style:{color:"#89DDFF"}},"("),s("span",{style:{color:"#C792EA"}},"double"),s("span",{style:{color:"#A6ACCD"}}," latitude"),s("span",{style:{color:"#89DDFF"}},","),s("span",{style:{color:"#A6ACCD"}}," "),s("span",{style:{color:"#C792EA"}},"double"),s("span",{style:{color:"#A6ACCD"}}," longitude"),s("span",{style:{color:"#89DDFF"}},")"),s("span",{style:{color:"#A6ACCD"}}," "),s("span",{style:{color:"#89DDFF"}},"{")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"		super"),s("span",{style:{color:"#89DDFF"}},"();")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"		"),s("span",{style:{color:"#89DDFF"}},"this."),s("span",{style:{color:"#A6ACCD"}},"latitude "),s("span",{style:{color:"#89DDFF"}},"="),s("span",{style:{color:"#A6ACCD"}}," latitude"),s("span",{style:{color:"#89DDFF"}},";")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"		"),s("span",{style:{color:"#89DDFF"}},"this."),s("span",{style:{color:"#A6ACCD"}},"longitude "),s("span",{style:{color:"#89DDFF"}},"="),s("span",{style:{color:"#A6ACCD"}}," longitude"),s("span",{style:{color:"#89DDFF"}},";")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"	"),s("span",{style:{color:"#89DDFF"}},"}")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"	"),s("span",{style:{color:"#C792EA"}},"public"),s("span",{style:{color:"#A6ACCD"}}," "),s("span",{style:{color:"#C792EA"}},"double"),s("span",{style:{color:"#A6ACCD"}}," "),s("span",{style:{color:"#82AAFF"}},"getLatitude"),s("span",{style:{color:"#89DDFF"}},"()"),s("span",{style:{color:"#A6ACCD"}}," "),s("span",{style:{color:"#89DDFF"}},"{")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"		"),s("span",{style:{color:"#89DDFF","font-style":"italic"}},"return"),s("span",{style:{color:"#A6ACCD"}}," latitude"),s("span",{style:{color:"#89DDFF"}},";")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"	"),s("span",{style:{color:"#89DDFF"}},"}")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"	"),s("span",{style:{color:"#C792EA"}},"public"),s("span",{style:{color:"#A6ACCD"}}," "),s("span",{style:{color:"#C792EA"}},"double"),s("span",{style:{color:"#A6ACCD"}}," "),s("span",{style:{color:"#82AAFF"}},"getLongitude"),s("span",{style:{color:"#89DDFF"}},"()"),s("span",{style:{color:"#A6ACCD"}}," "),s("span",{style:{color:"#89DDFF"}},"{")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"		"),s("span",{style:{color:"#89DDFF","font-style":"italic"}},"return"),s("span",{style:{color:"#A6ACCD"}}," longitude"),s("span",{style:{color:"#89DDFF"}},";")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"	"),s("span",{style:{color:"#89DDFF"}},"}")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#89DDFF"}},"}")]),l(`
`),s("span",{class:"line"})])])],-1),b=s("h2",{id:"penyelesaian",tabindex:"-1"},[l("Penyelesaian "),s("a",{class:"header-anchor",href:"#penyelesaian","aria-hidden":"true"},"#")],-1),_=l("Dilakukan "),m=s("a",{href:"https://sourcemaking.com/refactoring/hide-delegate",target:"_blank",rel:"noopener noreferrer"},"Hide Delegate",-1),E=l(". Perhatikan class "),v=s("a",{href:"after/BojekDriver.java"},"BojekDriver",-1),f=l(" dan "),k=l("Destination"),P=l(", telah ditambahkan fungsi "),j=s("code",null,"latitude()",-1),B=l(" dan "),T=s("code",null,"longitude()",-1),x=l(" yang sebenarnya melakukan delegasi chaining yang dilakukan di package before. Hal ini dilakukan agar class client tidak merasakan adanya chaining, disembunyikan di dalam sini."),S=s("div",{class:"language-java"},[s("span",{class:"copy"}),s("div",{class:"highlight-lines"},[s("br"),s("br"),s("br"),s("br"),s("br"),s("br"),s("br"),s("br"),s("br"),s("br"),s("br"),s("br"),s("br"),s("br"),s("br"),s("br"),s("br"),s("br"),s("div",{class:"highlighted"},"\xA0"),s("div",{class:"highlighted"},"\xA0"),s("div",{class:"highlighted"},"\xA0"),s("br"),s("div",{class:"highlighted"},"\xA0"),s("div",{class:"highlighted"},"\xA0"),s("div",{class:"highlighted"},"\xA0"),s("br"),s("br")]),s("pre",null,[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#C792EA"}},"public"),s("span",{style:{color:"#A6ACCD"}}," "),s("span",{style:{color:"#C792EA"}},"class"),s("span",{style:{color:"#A6ACCD"}}," "),s("span",{style:{color:"#FFCB6B"}},"BojekDriver"),s("span",{style:{color:"#A6ACCD"}}," "),s("span",{style:{color:"#89DDFF"}},"{")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"	"),s("span",{style:{color:"#C792EA"}},"private"),s("span",{style:{color:"#A6ACCD"}}," "),s("span",{style:{color:"#C792EA"}},"String"),s("span",{style:{color:"#A6ACCD"}}," name"),s("span",{style:{color:"#89DDFF"}},";")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"	"),s("span",{style:{color:"#C792EA"}},"private"),s("span",{style:{color:"#A6ACCD"}}," "),s("span",{style:{color:"#C792EA"}},"Position"),s("span",{style:{color:"#A6ACCD"}}," currentPosition"),s("span",{style:{color:"#89DDFF"}},";")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"	"),s("span",{style:{color:"#C792EA"}},"public"),s("span",{style:{color:"#A6ACCD"}}," "),s("span",{style:{color:"#82AAFF"}},"BojekDriver"),s("span",{style:{color:"#89DDFF"}},"("),s("span",{style:{color:"#C792EA"}},"String"),s("span",{style:{color:"#A6ACCD"}}," name"),s("span",{style:{color:"#89DDFF"}},","),s("span",{style:{color:"#A6ACCD"}}," "),s("span",{style:{color:"#C792EA"}},"Position"),s("span",{style:{color:"#A6ACCD"}}," currentPosition"),s("span",{style:{color:"#89DDFF"}},")"),s("span",{style:{color:"#A6ACCD"}}," "),s("span",{style:{color:"#89DDFF"}},"{")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"		super"),s("span",{style:{color:"#89DDFF"}},"();")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"		"),s("span",{style:{color:"#89DDFF"}},"this."),s("span",{style:{color:"#A6ACCD"}},"name "),s("span",{style:{color:"#89DDFF"}},"="),s("span",{style:{color:"#A6ACCD"}}," name"),s("span",{style:{color:"#89DDFF"}},";")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"		"),s("span",{style:{color:"#89DDFF"}},"this."),s("span",{style:{color:"#A6ACCD"}},"currentPosition "),s("span",{style:{color:"#89DDFF"}},"="),s("span",{style:{color:"#A6ACCD"}}," currentPosition"),s("span",{style:{color:"#89DDFF"}},";")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"	"),s("span",{style:{color:"#89DDFF"}},"}")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"	"),s("span",{style:{color:"#C792EA"}},"public"),s("span",{style:{color:"#A6ACCD"}}," "),s("span",{style:{color:"#C792EA"}},"String"),s("span",{style:{color:"#A6ACCD"}}," "),s("span",{style:{color:"#82AAFF"}},"getName"),s("span",{style:{color:"#89DDFF"}},"()"),s("span",{style:{color:"#A6ACCD"}}," "),s("span",{style:{color:"#89DDFF"}},"{")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"		"),s("span",{style:{color:"#89DDFF","font-style":"italic"}},"return"),s("span",{style:{color:"#A6ACCD"}}," name"),s("span",{style:{color:"#89DDFF"}},";")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"	"),s("span",{style:{color:"#89DDFF"}},"}")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"	"),s("span",{style:{color:"#C792EA"}},"public"),s("span",{style:{color:"#A6ACCD"}}," "),s("span",{style:{color:"#C792EA"}},"Position"),s("span",{style:{color:"#A6ACCD"}}," "),s("span",{style:{color:"#82AAFF"}},"getCurrentPosition"),s("span",{style:{color:"#89DDFF"}},"()"),s("span",{style:{color:"#A6ACCD"}}," "),s("span",{style:{color:"#89DDFF"}},"{")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"		"),s("span",{style:{color:"#89DDFF","font-style":"italic"}},"return"),s("span",{style:{color:"#A6ACCD"}}," currentPosition"),s("span",{style:{color:"#89DDFF"}},";")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"	"),s("span",{style:{color:"#89DDFF"}},"}")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"	"),s("span",{style:{color:"#C792EA"}},"public"),s("span",{style:{color:"#A6ACCD"}}," "),s("span",{style:{color:"#C792EA"}},"double"),s("span",{style:{color:"#A6ACCD"}}," "),s("span",{style:{color:"#82AAFF"}},"latitude"),s("span",{style:{color:"#89DDFF"}},"()"),s("span",{style:{color:"#A6ACCD"}}," "),s("span",{style:{color:"#89DDFF"}},"{")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"		"),s("span",{style:{color:"#89DDFF","font-style":"italic"}},"return"),s("span",{style:{color:"#A6ACCD"}}," "),s("span",{style:{color:"#89DDFF"}},"this."),s("span",{style:{color:"#82AAFF"}},"getCurrentPosition"),s("span",{style:{color:"#89DDFF"}},"()."),s("span",{style:{color:"#82AAFF"}},"getLatitude"),s("span",{style:{color:"#89DDFF"}},"();")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"	"),s("span",{style:{color:"#89DDFF"}},"}")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"	"),s("span",{style:{color:"#C792EA"}},"public"),s("span",{style:{color:"#A6ACCD"}}," "),s("span",{style:{color:"#C792EA"}},"double"),s("span",{style:{color:"#A6ACCD"}}," "),s("span",{style:{color:"#82AAFF"}},"longitude"),s("span",{style:{color:"#89DDFF"}},"()"),s("span",{style:{color:"#A6ACCD"}}," "),s("span",{style:{color:"#89DDFF"}},"{")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"		"),s("span",{style:{color:"#89DDFF","font-style":"italic"}},"return"),s("span",{style:{color:"#A6ACCD"}}," "),s("span",{style:{color:"#89DDFF"}},"this."),s("span",{style:{color:"#82AAFF"}},"getCurrentPosition"),s("span",{style:{color:"#89DDFF"}},"()."),s("span",{style:{color:"#82AAFF"}},"getLongitude"),s("span",{style:{color:"#89DDFF"}},"();")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"	"),s("span",{style:{color:"#89DDFF"}},"}")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#89DDFF"}},"}")]),l(`
`),s("span",{class:"line"})])])],-1),L=s("div",{class:"language-java"},[s("span",{class:"copy"}),s("div",{class:"highlight-lines"},[s("br"),s("br"),s("br"),s("br"),s("br"),s("br"),s("br"),s("br"),s("br"),s("br"),s("br"),s("br"),s("br"),s("br"),s("br"),s("br"),s("br"),s("br"),s("div",{class:"highlighted"},"\xA0")]),s("pre",null,[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#C792EA"}},"public"),s("span",{style:{color:"#A6ACCD"}}," "),s("span",{style:{color:"#C792EA"}},"class"),s("span",{style:{color:"#A6ACCD"}}," "),s("span",{style:{color:"#FFCB6B"}},"Destination"),s("span",{style:{color:"#A6ACCD"}}," "),s("span",{style:{color:"#89DDFF"}},"{")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"	"),s("span",{style:{color:"#C792EA"}},"private"),s("span",{style:{color:"#A6ACCD"}}," "),s("span",{style:{color:"#C792EA"}},"String"),s("span",{style:{color:"#A6ACCD"}}," name"),s("span",{style:{color:"#89DDFF"}},";")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"	"),s("span",{style:{color:"#C792EA"}},"private"),s("span",{style:{color:"#A6ACCD"}}," "),s("span",{style:{color:"#C792EA"}},"Position"),s("span",{style:{color:"#A6ACCD"}}," position"),s("span",{style:{color:"#89DDFF"}},";")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"	"),s("span",{style:{color:"#C792EA"}},"public"),s("span",{style:{color:"#A6ACCD"}}," "),s("span",{style:{color:"#82AAFF"}},"Destination"),s("span",{style:{color:"#89DDFF"}},"("),s("span",{style:{color:"#C792EA"}},"String"),s("span",{style:{color:"#A6ACCD"}}," name"),s("span",{style:{color:"#89DDFF"}},","),s("span",{style:{color:"#A6ACCD"}}," "),s("span",{style:{color:"#C792EA"}},"Position"),s("span",{style:{color:"#A6ACCD"}}," position"),s("span",{style:{color:"#89DDFF"}},")"),s("span",{style:{color:"#A6ACCD"}}," "),s("span",{style:{color:"#89DDFF"}},"{")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"		super"),s("span",{style:{color:"#89DDFF"}},"();")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"		"),s("span",{style:{color:"#89DDFF"}},"this."),s("span",{style:{color:"#A6ACCD"}},"name "),s("span",{style:{color:"#89DDFF"}},"="),s("span",{style:{color:"#A6ACCD"}}," name"),s("span",{style:{color:"#89DDFF"}},";")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"		"),s("span",{style:{color:"#89DDFF"}},"this."),s("span",{style:{color:"#A6ACCD"}},"position "),s("span",{style:{color:"#89DDFF"}},"="),s("span",{style:{color:"#A6ACCD"}}," position"),s("span",{style:{color:"#89DDFF"}},";")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"	"),s("span",{style:{color:"#89DDFF"}},"}")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"	"),s("span",{style:{color:"#C792EA"}},"public"),s("span",{style:{color:"#A6ACCD"}}," "),s("span",{style:{color:"#C792EA"}},"String"),s("span",{style:{color:"#A6ACCD"}}," "),s("span",{style:{color:"#82AAFF"}},"getName"),s("span",{style:{color:"#89DDFF"}},"()"),s("span",{style:{color:"#A6ACCD"}}," "),s("span",{style:{color:"#89DDFF"}},"{")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"		"),s("span",{style:{color:"#89DDFF","font-style":"italic"}},"return"),s("span",{style:{color:"#A6ACCD"}}," name"),s("span",{style:{color:"#89DDFF"}},";")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"	"),s("span",{style:{color:"#89DDFF"}},"}")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"	"),s("span",{style:{color:"#C792EA"}},"public"),s("span",{style:{color:"#A6ACCD"}}," "),s("span",{style:{color:"#C792EA"}},"Position"),s("span",{style:{color:"#A6ACCD"}}," "),s("span",{style:{color:"#82AAFF"}},"getPosition"),s("span",{style:{color:"#89DDFF"}},"()"),s("span",{style:{color:"#A6ACCD"}}," "),s("span",{style:{color:"#89DDFF"}},"{")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"		"),s("span",{style:{color:"#89DDFF","font-style":"italic"}},"return"),s("span",{style:{color:"#A6ACCD"}}," position"),s("span",{style:{color:"#89DDFF"}},";")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"	"),s("span",{style:{color:"#89DDFF"}},"}")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#89DDFF"}},"}")]),l(`
`),s("span",{class:"line"})])])],-1),w=l("Alhasil, seperti yang bisa dilihat di "),N=l("DistanceTest.java"),V=l(" di package after, message chain sudah tidak ada."),M=s("h2",{id:"tambahan",tabindex:"-1"},[l("Tambahan "),s("a",{class:"header-anchor",href:"#tambahan","aria-hidden":"true"},"#")],-1),$=s("p",null,"Jangan terlalu agresif mengurusi message chain karena bisa menyebabkan smell Middle Man.",-1),q=s("p",null,"Pertimbangkan mengurusi message chain bila terjadi di banyak tempat atau kebetulan ada class yang behavior-nya cocok untuk menampung method delegasi.",-1);function H(I,J,O,R,z,G){const e=t("github-url"),a=t("Tab"),c=t("Tabs");return A(),p("div",null,[i,s("p",null,[C,o(e,{to:"before/DistanceTest.java"},{default:n(()=>[F]),_:1}),d]),o(c,null,{default:n(()=>[o(a,{name:"DistanceTest",text:"DistanceTest.java"},{default:n(()=>[u]),_:1}),o(a,{name:"BojekDriver",text:"BojekDriver.java"},{default:n(()=>[h]),_:1}),o(a,{name:"Position",text:"Position.java"},{default:n(()=>[g]),_:1})]),_:1}),b,s("p",null,[_,m,E,v,f,o(e,{to:"after/Destination.java"},{default:n(()=>[k]),_:1}),P,j,B,T,x]),o(c,null,{default:n(()=>[o(a,{name:"BojekDriver",text:"BojekDriver.java"},{default:n(()=>[S]),_:1}),o(a,{name:"Destination",text:"Destination.java"},{default:n(()=>[L]),_:1})]),_:1}),s("p",null,[w,o(e,{to:"after/DistanceTest.java"},{default:n(()=>[N]),_:1}),V]),M,$,q])}var U=r(y,[["render",H]]);export{Q as __pageData,U as default};
