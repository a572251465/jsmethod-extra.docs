import{_ as s,c as i,o as a,a2 as t}from"./chunks/framework.wwe-HlSg.js";const g=JSON.parse('{"title":"isArray","description":"","frontmatter":{},"headers":[],"relativePath":"configure/array/isArray.md","filePath":"configure/array/isArray.md"}'),e={name:"configure/array/isArray.md"},h=t(`<h1 id="isarray" tabindex="-1">isArray <a class="header-anchor" href="#isarray" aria-label="Permalink to &quot;isArray&quot;">​</a></h1><p><code>V2.0.0</code></p><blockquote><p>判断 <code>value</code> 的值是否为数组</p></blockquote><h4 id="导入" tabindex="-1">导入 <a class="header-anchor" href="#导入" aria-label="Permalink to &quot;导入&quot;">​</a></h4><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">import</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> {</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> isArray</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> }</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> from</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;jsmethod-extra&quot;</span></span></code></pre></div><h4 id="数据类型" tabindex="-1">数据类型 <a class="header-anchor" href="#数据类型" aria-label="Permalink to &quot;数据类型&quot;">​</a></h4><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">export</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> declare</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> const</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> isArray</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> (</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">value</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> unknown</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=&gt;</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;"> value</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> is</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> any</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">[];</span></span></code></pre></div><h4 id="使用案例" tabindex="-1">使用案例 <a class="header-anchor" href="#使用案例" aria-label="Permalink to &quot;使用案例&quot;">​</a></h4><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">import</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {isArray} </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">from</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;jsmethod-extra&quot;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">isArray</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">([]) </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// true</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">isArray</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">false</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">); </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// false</span></span></code></pre></div>`,9),n=[h];function l(r,p,k,d,o,c){return a(),i("div",null,n)}const F=s(e,[["render",l]]);export{g as __pageData,F as default};
