(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{"KZ+V":function(e,t,a){"use strict";a.r(t),a.d(t,"_frontmatter",(function(){return b})),a.d(t,"default",(function(){return p}));a("1c7q"),a("abGl"),a("gZHo"),a("Fdmb"),a("Ir+3"),a("2mQt");var n=a("/FXl"),o=a("TjRS"),s=a("erf5"),r=a("Vkpr"),l=a.n(r);a("aD51");function i(){return(i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}var b={};void 0!==b&&b&&b===Object(b)&&Object.isExtensible(b)&&!b.hasOwnProperty("__filemeta")&&Object.defineProperty(b,"__filemeta",{configurable:!0,value:{name:"_frontmatter",filename:"src/__docz__/index.mdx"}});var c={_frontmatter:b},u=o.a;function p(e){var t=e.components,a=function(e,t){if(null==e)return{};var a,n,o={},s=Object.keys(e);for(n=0;n<s.length;n++)a=s[n],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,["components"]);return Object(n.b)(u,i({},c,a,{components:t,mdxType:"MDXLayout"}),Object(n.b)("div",{style:{display:"flex",alignItems:"center"}},Object(n.b)("div",null,Object(n.b)("h1",null,"React Use Window.sessionStorage")),Object(n.b)("div",null,Object(n.b)("a",{href:"https://github.com/devboldly/react-use-window-sessionstorage/",target:"_blank",rel:"noopener noreferrer"},Object(n.b)(s.SvgIcon,{src:l.a,size:28,style:{margin:"0 0 0 20px"},mdxType:"SvgIcon"})))),Object(n.b)("p",null,Object(n.b)("strong",{parentName:"p"},"React hooks for accessing the sessionStorage ",Object(n.b)("a",i({parentName:"strong"},{href:"https://developer.mozilla.org/en-US/docs/Web/API/Web_Storage_API"}),"Web Storage API"),".")),Object(n.b)("p",null,"👁️ ",Object(n.b)("strong",{parentName:"p"},Object(n.b)("a",i({parentName:"strong"},{href:"/react-use-window-sessionstorage/useSessionStorageString#example"}),"Live Demo"))),Object(n.b)("h2",{id:"overview"},"Overview"),Object(n.b)("p",null,"A set of hooks to easily store and retrieve data from ",Object(n.b)("a",i({parentName:"p"},{href:"https://developer.mozilla.org/en-US/docs/Web/API/Window/sessionStorage"}),"sessionStorage"),"."),Object(n.b)("p",null,"Encoding is handled for common data types, including ",Object(n.b)("a",i({parentName:"p"},{href:"/react-use-window-sessionstorage/useSessionStorageBoolean"}),"booleans"),", ",Object(n.b)("a",i({parentName:"p"},{href:"/react-use-window-sessionstorage/useSessionStorageNumber"}),"numbers"),", ",Object(n.b)("a",i({parentName:"p"},{href:"/react-use-window-sessionstorage/useSessionStorageString"}),"strings"),", and ",Object(n.b)("a",i({parentName:"p"},{href:"/react-use-window-sessionstorage/useSessionStorageObject"}),"objects"),", or you can ",Object(n.b)("a",i({parentName:"p"},{href:"/react-use-window-sessionstorage/useSessionStorageItem"}),"encode data yourself")," if you'd like."),Object(n.b)("p",null,"Changes to sessionStorage are synchronized across all hooks automatically."),Object(n.b)("blockquote",null,Object(n.b)("p",{parentName:"blockquote"},Object(n.b)("strong",{parentName:"p"},"What is sessionStorage?")," The ",Object(n.b)("inlineCode",{parentName:"p"},"sessionStorage")," property allows you to store ",Object(n.b)("inlineCode",{parentName:"p"},"{key: value}")," string data that is cleared when the page session ends. A page session lasts as long as the browser is open, and survives over page reloads and restores.")),Object(n.b)("blockquote",null,Object(n.b)("p",{parentName:"blockquote"},"For localStorage, check out the companion project ",Object(n.b)("a",i({parentName:"p"},{href:"https://devboldly.github.io/react-use-window-localstorage"}),"react-use-window-localstorage"),".")),Object(n.b)("h3",{id:"features-include"},"Features include:"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},Object(n.b)("strong",{parentName:"li"},"💪 Easily add ",Object(n.b)("inlineCode",{parentName:"strong"},"sessionStorage")," support"),Object(n.b)("ul",{parentName:"li"},Object(n.b)("li",{parentName:"ul"},"Easily store data that is cleared when the page session ends."))),Object(n.b)("li",{parentName:"ul"},Object(n.b)("strong",{parentName:"li"},"🔢 Support for primitives and objects"),Object(n.b)("ul",{parentName:"li"},Object(n.b)("li",{parentName:"ul"},"Store and retrieve strings, booleans, numbers, and objects effortlessly."))),Object(n.b)("li",{parentName:"ul"},Object(n.b)("strong",{parentName:"li"},"💁 Default values"),Object(n.b)("ul",{parentName:"li"},Object(n.b)("li",{parentName:"ul"},"Optional support for defaults is baked right in."))),Object(n.b)("li",{parentName:"ul"},Object(n.b)("strong",{parentName:"li"},"🔄 Automatic synchronization"),Object(n.b)("ul",{parentName:"li"},Object(n.b)("li",{parentName:"ul"},"Changes are synchronized across hooks automatically."))),Object(n.b)("li",{parentName:"ul"},Object(n.b)("strong",{parentName:"li"},"👾 Customizable"),Object(n.b)("ul",{parentName:"li"},Object(n.b)("li",{parentName:"ul"},"Want to store something unusual? Just provide your own encoder."))),Object(n.b)("li",{parentName:"ul"},Object(n.b)("strong",{parentName:"li"},"⛔ Storage availability detection"),Object(n.b)("ul",{parentName:"li"},Object(n.b)("li",{parentName:"ul"},"Detects if ",Object(n.b)("inlineCode",{parentName:"li"},"sessionStorage")," is available for use and lets you know otherwise."))),Object(n.b)("li",{parentName:"ul"},Object(n.b)("strong",{parentName:"li"},"🧼 Clearing support"),Object(n.b)("ul",{parentName:"li"},Object(n.b)("li",{parentName:"ul"},"Clear all sessionStorage values and reset hooks to defaults with one simple call.")))),Object(n.b)("h2",{id:"installation"},"Installation"),Object(n.b)("pre",null,Object(n.b)("code",i({parentName:"pre"},{}),"npm i react-use-window-sessionstorage\n")),Object(n.b)("h2",{id:"quick-start"},"Quick Start"),Object(n.b)("h3",{id:"storing-strings"},"Storing Strings"),Object(n.b)("p",null,"Use the ",Object(n.b)("a",i({parentName:"p"},{href:"/react-use-window-sessionstorage/useSessionStorageString"}),"useSessionStorageString")," hook:"),Object(n.b)("pre",null,Object(n.b)("code",i({parentName:"pre"},{className:"language-jsx"}),"import { useSessionStorageString } from 'react-use-window-sessionstorage';\n")),Object(n.b)("p",null,"In your function component:"),Object(n.b)("pre",null,Object(n.b)("code",i({parentName:"pre"},{className:"language-jsx"}),"const defaultValue = 'cyan';\nconst [value, setValue] = useSessionStorageString('favColor', defaultValue);\n")),Object(n.b)("h3",{id:"storing-objects"},"Storing Objects"),Object(n.b)("p",null,"Use the ",Object(n.b)("a",i({parentName:"p"},{href:"/react-use-window-sessionstorage/useSessionStorageObject"}),"useSessionStorageObject")," hook:"),Object(n.b)("pre",null,Object(n.b)("code",i({parentName:"pre"},{className:"language-jsx"}),"import { useSessionStorageObject } from 'react-use-window-sessionstorage';\n")),Object(n.b)("p",null,"In your function component:"),Object(n.b)("pre",null,Object(n.b)("code",i({parentName:"pre"},{className:"language-jsx"}),"const defaultValue = { a: 'hello', b: 123 };\nconst [value, setValue] = useSessionStorageObject('myObj', defaultValue);\n")),Object(n.b)("p",null,"Note that your objects must be compatible with ",Object(n.b)("a",i({parentName:"p"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify"}),"JSON.stringify()"),". Use ",Object(n.b)("a",i({parentName:"p"},{href:"/react-use-window-sessionstorage/useSessionStorageItem"}),"useSessionStorageItem")," otherwise."),Object(n.b)("h3",{id:"storing-booleans"},"Storing Booleans"),Object(n.b)("p",null,"Use the ",Object(n.b)("a",i({parentName:"p"},{href:"/react-use-window-sessionstorage/useSessionStorageBoolean"}),"useSessionStorageBoolean")," hook:"),Object(n.b)("pre",null,Object(n.b)("code",i({parentName:"pre"},{className:"language-jsx"}),"import { useSessionStorageBoolean } from 'react-use-window-sessionstorage';\n")),Object(n.b)("p",null,"In your function component:"),Object(n.b)("pre",null,Object(n.b)("code",i({parentName:"pre"},{className:"language-jsx"}),"const defaultValue = true;\nconst [value, setValue] = useSessionStorageBoolean('swordEquipped', defaultValue);\n")),Object(n.b)("h3",{id:"storing-numbers"},"Storing Numbers"),Object(n.b)("p",null,"Use the ",Object(n.b)("a",i({parentName:"p"},{href:"/react-use-window-sessionstorage/useSessionStorageNumber"}),"useSessionStorageNumber")," hook:"),Object(n.b)("pre",null,Object(n.b)("code",i({parentName:"pre"},{className:"language-jsx"}),"import { useSessionStorageNumber } from 'react-use-window-sessionstorage';\n")),Object(n.b)("p",null,"In your function component:"),Object(n.b)("pre",null,Object(n.b)("code",i({parentName:"pre"},{className:"language-jsx"}),"const defaultValue = 3.14159;\nconst [value, setValue] = useSessionStorageNumber('importantNumber', defaultValue);\n")),Object(n.b)("blockquote",null,Object(n.b)("p",{parentName:"blockquote"},"Note: All value defaults are optional. Hooks will return ",Object(n.b)("inlineCode",{parentName:"p"},"null")," if none is provided.")),Object(n.b)("h3",{id:"storing-everything-else"},"Storing Everything Else"),Object(n.b)("p",null,"If you'd like to store something other than the data types above, define your own encoding using the ",Object(n.b)("a",i({parentName:"p"},{href:"/react-use-window-sessionstorage/useSessionStorageItem"}),"useSessionStorageItem")," hook."),Object(n.b)("p",null,"Here's a starting point:"),Object(n.b)("pre",null,Object(n.b)("code",i({parentName:"pre"},{className:"language-jsx"}),"import { useSessionStorageItem } from 'react-use-window-sessionstorage';\n")),Object(n.b)("p",null,"In your function component:"),Object(n.b)("pre",null,Object(n.b)("code",i({parentName:"pre"},{className:"language-jsx"}),"const defaultValue = 'something custom';\nconst encode = value => JSON.stringify(value);\nconst decode = itemString => JSON.parse(itemString);\nconst [value, setValue] = useSessionStorageItem('name', defaultValue, encode, decode);\n")),Object(n.b)("p",null,"Provide ",Object(n.b)("inlineCode",{parentName:"p"},"null")," for no default value."),Object(n.b)("h3",{id:"additional-features"},"Additional Features"),Object(n.b)("p",null,"All hooks provide additional features in their return arrays, should you be interested:"),Object(n.b)("pre",null,Object(n.b)("code",i({parentName:"pre"},{className:"language-jsx"}),"const [value, setValue, loading, available, reset, restore] = useSessionStorageString('favColor', 'cyan');\n")),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"A ",Object(n.b)("inlineCode",{parentName:"li"},"loading")," value of ",Object(n.b)("inlineCode",{parentName:"li"},"true")," indicates that the value is being loaded from sessionStorage."),Object(n.b)("li",{parentName:"ul"},"An ",Object(n.b)("inlineCode",{parentName:"li"},"available")," value of ",Object(n.b)("inlineCode",{parentName:"li"},"true")," indicates that ",Object(n.b)("inlineCode",{parentName:"li"},"sessionStorage")," is supported and available for use. "),Object(n.b)("li",{parentName:"ul"},"The ",Object(n.b)("inlineCode",{parentName:"li"},"reset()")," function sets the value back to the provided default, or ",Object(n.b)("inlineCode",{parentName:"li"},"null")," if none was given."),Object(n.b)("li",{parentName:"ul"},"The ",Object(n.b)("inlineCode",{parentName:"li"},"restore()")," function retrieves the latest value from sessionStorage. Use this if the sessionStorage value changes outside of this hook and you need to restore it to the latest.")),Object(n.b)("h3",{id:"clearing-sessionstorage"},"Clearing ",Object(n.b)("inlineCode",{parentName:"h3"},"sessionStorage")),Object(n.b)("pre",null,Object(n.b)("code",i({parentName:"pre"},{className:"language-jsx"}),"import { useClear } from 'react-use-window-sessionstorage';\n")),Object(n.b)("pre",null,Object(n.b)("code",i({parentName:"pre"},{className:"language-jsx"}),"const clearSessionStorage = useClearSessionStorage();\n")),Object(n.b)("p",null,"Call ",Object(n.b)("inlineCode",{parentName:"p"},"clearSessionStorage()")," to clear all values in sessionStorage using ",Object(n.b)("a",i({parentName:"p"},{href:"https://developer.mozilla.org/en-US/docs/Web/API/Window/sessionStorage"}),"sessionStorage.clear()"),"\nand reset all hooks to their defaults (or ",Object(n.b)("inlineCode",{parentName:"p"},"null")," if none provided)."),Object(n.b)("h2",{id:"typescript"},"TypeScript"),Object(n.b)("p",null,"Type definitions have been included for ",Object(n.b)("a",i({parentName:"p"},{href:"https://www.typescriptlang.org/"}),"TypeScript")," support."),Object(n.b)("h2",{id:"contributing"},"Contributing"),Object(n.b)("p",null,"Open source software is awesome and so are you. 😎"),Object(n.b)("p",null,"Feel free to submit a pull request for bugs or additions, and make sure to update tests as appropriate. If you find a mistake in the docs, send a PR! Even the smallest changes help."),Object(n.b)("p",null,"For major changes, open an issue first to discuss what you'd like to change."),Object(n.b)("p",null,"See the ",Object(n.b)("a",i({parentName:"p"},{href:"https://tinyurl.com/ya3k258d"}),"library template")," for npm script documentation."),Object(n.b)("h2",{id:"-found-it-helpful-star-it"},"⭐ Found It Helpful? ",Object(n.b)("a",i({parentName:"h2"},{href:"https://github.com/devboldly/react-use-window-sessionstorage/stargazers"}),"Star It!")),Object(n.b)("p",null,"If you found this project helpful, let the community know by giving it a ",Object(n.b)("a",i({parentName:"p"},{href:"https://github.com/devboldly/react-use-window-sessionstorage/stargazers"}),"star"),": ",Object(n.b)("a",i({parentName:"p"},{href:"https://github.com/devboldly/react-use-window-sessionstorage/stargazers"}),"👉⭐")))}p&&p===Object(p)&&Object.isExtensible(p)&&!p.hasOwnProperty("__filemeta")&&Object.defineProperty(p,"__filemeta",{configurable:!0,value:{name:"MDXContent",filename:"src/__docz__/index.mdx"}}),p.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-docz-index-mdx-291dbcd94048e28c366c.js.map