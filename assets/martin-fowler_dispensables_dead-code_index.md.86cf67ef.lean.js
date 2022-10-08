import{_ as r,c as D,b as s,d as a,e as l,w as n,a as c,r as e,o as i}from"./app.a804e8e4.js";const T=JSON.parse('{"title":"Dead Code","description":"","frontmatter":{},"headers":[{"level":2,"title":"Penjelasan Smell","slug":"penjelasan-smell","link":"#penjelasan-smell","children":[]},{"level":2,"title":"Penyelesaian","slug":"penyelesaian","link":"#penyelesaian","children":[]}],"relativePath":"martin-fowler/dispensables/dead-code/index.md"}'),y={name:"martin-fowler/dispensables/dead-code/index.md"},C=c("",8),F=s("p",null,"Bayangkan awalnya requirement dari client adalah: diskon diberikan 10% bila harga kurang dari 10.000, jika lebih, diskon 20%. Terbentuklah code berikut:",-1),A=s("div",{class:"language-java"},[s("button",{class:"copy"}),s("span",{class:"lang"},"java"),s("pre",null,[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#C792EA"}},"public"),s("span",{style:{color:"#A6ACCD"}}," "),s("span",{style:{color:"#C792EA"}},"double"),s("span",{style:{color:"#A6ACCD"}}," "),s("span",{style:{color:"#82AAFF"}},"calculate"),s("span",{style:{color:"#89DDFF"}},"("),s("span",{style:{color:"#C792EA"}},"double"),s("span",{style:{color:"#A6ACCD"}}," price"),s("span",{style:{color:"#89DDFF"}},","),s("span",{style:{color:"#A6ACCD"}}," "),s("span",{style:{color:"#C792EA"}},"boolean"),s("span",{style:{color:"#A6ACCD"}}," isDiscount"),s("span",{style:{color:"#89DDFF"}},"){")]),a(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"  "),s("span",{style:{color:"#C792EA"}},"double"),s("span",{style:{color:"#A6ACCD"}}," discountPrice "),s("span",{style:{color:"#89DDFF"}},"="),s("span",{style:{color:"#A6ACCD"}}," "),s("span",{style:{color:"#F78C6C"}},"0"),s("span",{style:{color:"#89DDFF"}},";")]),a(`
`),s("span",{class:"line"}),a(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"  "),s("span",{style:{color:"#89DDFF"}},"if"),s("span",{style:{color:"#89DDFF"}},"("),s("span",{style:{color:"#A6ACCD"}},"isDiscount"),s("span",{style:{color:"#89DDFF"}},"){")]),a(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"    "),s("span",{style:{color:"#89DDFF"}},"if"),s("span",{style:{color:"#89DDFF"}},"("),s("span",{style:{color:"#A6ACCD"}},"price "),s("span",{style:{color:"#89DDFF"}},"<"),s("span",{style:{color:"#A6ACCD"}}," "),s("span",{style:{color:"#F78C6C"}},"10000"),s("span",{style:{color:"#89DDFF"}},"){")]),a(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"      discountPrice "),s("span",{style:{color:"#89DDFF"}},"="),s("span",{style:{color:"#A6ACCD"}}," price "),s("span",{style:{color:"#89DDFF"}},"*"),s("span",{style:{color:"#A6ACCD"}}," "),s("span",{style:{color:"#F78C6C"}},"0.1"),s("span",{style:{color:"#89DDFF"}},";")]),a(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"    "),s("span",{style:{color:"#89DDFF"}},"}"),s("span",{style:{color:"#A6ACCD"}}," "),s("span",{style:{color:"#89DDFF"}},"else"),s("span",{style:{color:"#A6ACCD"}}," "),s("span",{style:{color:"#89DDFF"}},"{")]),a(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"      discountPrice "),s("span",{style:{color:"#89DDFF"}},"="),s("span",{style:{color:"#A6ACCD"}}," price "),s("span",{style:{color:"#89DDFF"}},"*"),s("span",{style:{color:"#A6ACCD"}}," "),s("span",{style:{color:"#F78C6C"}},"0.2"),s("span",{style:{color:"#89DDFF"}},";")]),a(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"    "),s("span",{style:{color:"#89DDFF"}},"}")]),a(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"  "),s("span",{style:{color:"#89DDFF"}},"}")]),a(`
`),s("span",{class:"line"}),a(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"  "),s("span",{style:{color:"#89DDFF"}},"return"),s("span",{style:{color:"#A6ACCD"}}," price "),s("span",{style:{color:"#89DDFF"}},"-"),s("span",{style:{color:"#A6ACCD"}}," discountPrice"),s("span",{style:{color:"#89DDFF"}},";")]),a(`
`),s("span",{class:"line"},[s("span",{style:{color:"#89DDFF"}},"}")]),a(`
`),s("span",{class:"line"})])])],-1),d=s("p",null,"Tiba-tiba, requirement dari client berubah. Client meminta diskon diketok rata 15%.",-1),u=s("p",null,"Entah mengapa, programmer tidak menghapus if yang pertama. Ia langsung menambahkan di bagian bawah sebelum return. Secara requirement, ini tidak masalah. Diskon akan selalu 15%.",-1),b=s("div",{class:"language-java"},[s("button",{class:"copy"}),s("span",{class:"lang"},"java"),s("pre",null,[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#C792EA"}},"public"),s("span",{style:{color:"#A6ACCD"}}," "),s("span",{style:{color:"#C792EA"}},"double"),s("span",{style:{color:"#A6ACCD"}}," "),s("span",{style:{color:"#82AAFF"}},"calculate"),s("span",{style:{color:"#89DDFF"}},"("),s("span",{style:{color:"#C792EA"}},"double"),s("span",{style:{color:"#A6ACCD"}}," price"),s("span",{style:{color:"#89DDFF"}},","),s("span",{style:{color:"#A6ACCD"}}," "),s("span",{style:{color:"#C792EA"}},"boolean"),s("span",{style:{color:"#A6ACCD"}}," isDiscount"),s("span",{style:{color:"#89DDFF"}},"){")]),a(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"  "),s("span",{style:{color:"#C792EA"}},"double"),s("span",{style:{color:"#A6ACCD"}}," discountPrice "),s("span",{style:{color:"#89DDFF"}},"="),s("span",{style:{color:"#A6ACCD"}}," "),s("span",{style:{color:"#F78C6C"}},"0"),s("span",{style:{color:"#89DDFF"}},";")]),a(`
`),s("span",{class:"line"}),a(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"  "),s("span",{style:{color:"#89DDFF"}},"if"),s("span",{style:{color:"#89DDFF"}},"("),s("span",{style:{color:"#A6ACCD"}},"isDiscount"),s("span",{style:{color:"#89DDFF"}},"){")]),a(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"    "),s("span",{style:{color:"#89DDFF"}},"if"),s("span",{style:{color:"#89DDFF"}},"("),s("span",{style:{color:"#A6ACCD"}},"price "),s("span",{style:{color:"#89DDFF"}},"<"),s("span",{style:{color:"#A6ACCD"}}," "),s("span",{style:{color:"#F78C6C"}},"10000"),s("span",{style:{color:"#89DDFF"}},"){")]),a(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"      discountPrice "),s("span",{style:{color:"#89DDFF"}},"="),s("span",{style:{color:"#A6ACCD"}}," price "),s("span",{style:{color:"#89DDFF"}},"*"),s("span",{style:{color:"#A6ACCD"}}," "),s("span",{style:{color:"#F78C6C"}},"0.1"),s("span",{style:{color:"#89DDFF"}},";")]),a(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"    "),s("span",{style:{color:"#89DDFF"}},"}"),s("span",{style:{color:"#A6ACCD"}}," "),s("span",{style:{color:"#89DDFF"}},"else"),s("span",{style:{color:"#A6ACCD"}}," "),s("span",{style:{color:"#89DDFF"}},"{")]),a(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"      discountPrice "),s("span",{style:{color:"#89DDFF"}},"="),s("span",{style:{color:"#A6ACCD"}}," price "),s("span",{style:{color:"#89DDFF"}},"*"),s("span",{style:{color:"#A6ACCD"}}," "),s("span",{style:{color:"#F78C6C"}},"0.2"),s("span",{style:{color:"#89DDFF"}},";")]),a(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"    "),s("span",{style:{color:"#89DDFF"}},"}")]),a(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"  "),s("span",{style:{color:"#89DDFF"}},"}")]),a(`
`),s("span",{class:"line"}),a(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"  "),s("span",{style:{color:"#89DDFF"}},"if"),s("span",{style:{color:"#89DDFF"}},"("),s("span",{style:{color:"#A6ACCD"}},"isDiscount"),s("span",{style:{color:"#89DDFF"}},")")]),a(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"    discountPrice "),s("span",{style:{color:"#89DDFF"}},"="),s("span",{style:{color:"#A6ACCD"}}," price "),s("span",{style:{color:"#89DDFF"}},"*"),s("span",{style:{color:"#A6ACCD"}}," "),s("span",{style:{color:"#F78C6C"}},"0.15"),s("span",{style:{color:"#89DDFF"}},";")]),a(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"  "),s("span",{style:{color:"#89DDFF"}},"return"),s("span",{style:{color:"#A6ACCD"}}," price "),s("span",{style:{color:"#89DDFF"}},"-"),s("span",{style:{color:"#A6ACCD"}}," discountPrice"),s("span",{style:{color:"#89DDFF"}},";")]),a(`
`),s("span",{class:"line"},[s("span",{style:{color:"#89DDFF"}},"}")]),a(`
`),s("span",{class:"line"})])])],-1),m=c("",4);function h(_,g,k,f,P,v){const t=e("github-url"),o=e("Tab"),p=e("Tabs");return i(),D("div",null,[C,s("p",null,[a("Terkadang, dead code tidak nampak sejelas itu. Contohnya di class "),l(t,{to:"before/PriceCalculator.java"},{default:n(()=>[a("PriceCalculator.java")]),_:1}),a(".")]),F,l(p,null,{default:n(()=>[l(o,{name:"PriceCalculator",text:"PriceCalculator.java"},{default:n(()=>[A]),_:1})]),_:1}),d,u,l(p,null,{default:n(()=>[l(o,{name:"PriceCalculator",text:"PriceCalculator.java"},{default:n(()=>[b]),_:1})]),_:1}),m])}const E=r(y,[["render",h]]);export{T as __pageData,E as default};
