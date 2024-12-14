import{_ as t,c as l,a as e,b as a,d as s,e as d,f as r,r as h,o as c}from"./app-ChR0t5KL.js";const o={};function p(k,i){const n=h("RouteLink");return c(),l("div",null,[i[3]||(i[3]=e(`<h2 id="前情提要" tabindex="-1"><a class="header-anchor" href="#前情提要"><span>前情提要</span></a></h2><ul><li>有时，我们不想自己安装软件（绝对不是因为懒！），或者为了保持软件一致性，可以由一个人配置虚拟环境后，让大家共用。这样不仅节省时间，还节省磁盘。</li></ul><h2 id="举例" tabindex="-1"><a class="header-anchor" href="#举例"><span>举例</span></a></h2><ul><li>现在武老师在服务器上装好了一个虚拟环境 <code>/public/workspace/wujian/miniconda3/envs/Bismarkenv/</code>（含有与 <code>WGBS</code> 相关的软件和 R 包）。作为学生的我们，该如何在自己的 shell 里面激活它呢？</li></ul><h2 id="方法" tabindex="-1"><a class="header-anchor" href="#方法"><span>方法</span></a></h2><p>（根据你的实际情况，选择一个运行即可）</p><h3 id="使用-anaconda" tabindex="-1"><a class="header-anchor" href="#使用-anaconda"><span>使用 <code>anaconda</code></span></a></h3><div class="language-shell line-numbers-mode" data-ext="shell" data-title="shell"><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">ln</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076;"> -s</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> /public/workspace/wujian/miniconda3/envs/Bismarkenv/</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> ~/anaconda3/envs/Bismarkenv</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">conda</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> activate</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> Bismarkenv</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="使用-miniconda" tabindex="-1"><a class="header-anchor" href="#使用-miniconda"><span>使用 <code>miniconda</code></span></a></h3><div class="language-shell line-numbers-mode" data-ext="shell" data-title="shell"><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">ln</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076;"> -s</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> /public/workspace/wujian/miniconda3/envs/Bismarkenv/</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> ~/miniconda3/envs/Bismarkenv</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">conda</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> activate</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> Bismarkenv</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="使用-miniforge" tabindex="-1"><a class="header-anchor" href="#使用-miniforge"><span>使用 <code>miniforge</code></span></a></h3><div class="language-shell line-numbers-mode" data-ext="shell" data-title="shell"><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">ln</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076;"> -s</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> /public/workspace/wujian/miniconda3/envs/Bismarkenv/</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> ~/miniforge3/envs/Bismarkenv</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">mamba</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> activate</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> Bismarkenv</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="使用-micromamba" tabindex="-1"><a class="header-anchor" href="#使用-micromamba"><span>使用 <code>micromamba</code></span></a></h3><div class="language-shell line-numbers-mode" data-ext="shell" data-title="shell"><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">ln</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076;"> -s</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> /public/workspace/wujian/miniconda3/envs/Bismarkenv/</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> ~/micromamba/envs/Bismarkenv</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">micromamba</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> activate</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> Bismarkenv</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="进阶玩法" tabindex="-1"><a class="header-anchor" href="#进阶玩法"><span>进阶玩法</span></a></h2>`,15)),a("ul",null,[a("li",null,[i[1]||(i[1]=s("若想配合 ")),d(n,{to:"/Linux/cveq.html"},{default:r(()=>i[0]||(i[0]=[s("我的快速切换脚本")])),_:1}),i[2]||(i[2]=s(" 使用，可以再运行一下这行命令："))])]),i[4]||(i[4]=e('<p>（根据你的实际情况，选择一个运行即可）</p><h3 id="使用-anaconda-1" tabindex="-1"><a class="header-anchor" href="#使用-anaconda-1"><span>使用 <code>anaconda</code></span></a></h3><div class="language-shell line-numbers-mode" data-ext="shell" data-title="shell"><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965;">echo</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;"> &quot;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">$HOME/anaconda3/envs/Bismarkenv</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&quot;</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;"> &gt;&gt;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> ~/.conda/environments.txt</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><h3 id="使用-miniconda-1" tabindex="-1"><a class="header-anchor" href="#使用-miniconda-1"><span>使用 <code>miniconda</code></span></a></h3><div class="language-shell line-numbers-mode" data-ext="shell" data-title="shell"><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965;">echo</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;"> &quot;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">$HOME/miniconda3/envs/Bismarkenv</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&quot;</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;"> &gt;&gt;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> ~/.conda/environments.txt</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><h3 id="使用-miniforge-1" tabindex="-1"><a class="header-anchor" href="#使用-miniforge-1"><span>使用 <code>miniforge</code></span></a></h3><div class="language-shell line-numbers-mode" data-ext="shell" data-title="shell"><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965;">echo</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;"> &quot;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">$HOME/miniforge3/envs/Bismarkenv</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&quot;</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;"> &gt;&gt;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> ~/.conda/environments.txt</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><h3 id="使用-micromamba-1" tabindex="-1"><a class="header-anchor" href="#使用-micromamba-1"><span>使用 <code>micromamba</code></span></a></h3><div class="language-shell line-numbers-mode" data-ext="shell" data-title="shell"><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965;">echo</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;"> &quot;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">$HOME/micromamba/envs/Bismarkenv</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&quot;</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;"> &gt;&gt;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> ~/.conda/environments.txt</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div>',9))])}const v=t(o,[["render",p],["__file","index.html.vue"]]),u=JSON.parse(`{"path":"/article/o6m8l6c3/","title":"如何借用他人的虚拟环境？","lang":"zh-CN","frontmatter":{"title":"如何借用他人的虚拟环境？","tags":["conda","micromamba","mamba"],"createTime":"2024/11/13 15:34:20","permalink":"/article/o6m8l6c3/","description":"前情提要 有时，我们不想自己安装软件（绝对不是因为懒！），或者为了保持软件一致性，可以由一个人配置虚拟环境后，让大家共用。这样不仅节省时间，还节省磁盘。 举例 现在武老师在服务器上装好了一个虚拟环境 /public/workspace/wujian/miniconda3/envs/Bismarkenv/（含有与 WGBS 相关的软件和 R 包）。作为学...","head":[["meta",{"property":"og:url","content":"https://meteor-oxalis3.com/article/o6m8l6c3/"}],["meta",{"property":"og:site_name","content":"Meteor03's Oxalis Garden"}],["meta",{"property":"og:title","content":"如何借用他人的虚拟环境？"}],["meta",{"property":"og:description","content":"前情提要 有时，我们不想自己安装软件（绝对不是因为懒！），或者为了保持软件一致性，可以由一个人配置虚拟环境后，让大家共用。这样不仅节省时间，还节省磁盘。 举例 现在武老师在服务器上装好了一个虚拟环境 /public/workspace/wujian/miniconda3/envs/Bismarkenv/（含有与 WGBS 相关的软件和 R 包）。作为学..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"article:tag","content":"conda"}],["meta",{"property":"article:tag","content":"micromamba"}],["meta",{"property":"article:tag","content":"mamba"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"如何借用他人的虚拟环境？\\",\\"image\\":[\\"\\"],\\"dateModified\\":null,\\"author\\":[]}"]]},"headers":[{"level":2,"title":"前情提要","slug":"前情提要","link":"#前情提要","children":[]},{"level":2,"title":"举例","slug":"举例","link":"#举例","children":[]},{"level":2,"title":"方法","slug":"方法","link":"#方法","children":[{"level":3,"title":"使用 anaconda","slug":"使用-anaconda","link":"#使用-anaconda","children":[]},{"level":3,"title":"使用 miniconda","slug":"使用-miniconda","link":"#使用-miniconda","children":[]},{"level":3,"title":"使用 miniforge","slug":"使用-miniforge","link":"#使用-miniforge","children":[]},{"level":3,"title":"使用 micromamba","slug":"使用-micromamba","link":"#使用-micromamba","children":[]}]},{"level":2,"title":"进阶玩法","slug":"进阶玩法","link":"#进阶玩法","children":[{"level":3,"title":"使用 anaconda","slug":"使用-anaconda-1","link":"#使用-anaconda-1","children":[]},{"level":3,"title":"使用 miniconda","slug":"使用-miniconda-1","link":"#使用-miniconda-1","children":[]},{"level":3,"title":"使用 miniforge","slug":"使用-miniforge-1","link":"#使用-miniforge-1","children":[]},{"level":3,"title":"使用 micromamba","slug":"使用-micromamba-1","link":"#使用-micromamba-1","children":[]}]}],"readingTime":{"minutes":0.93,"words":279},"git":{},"autoDesc":true,"filePathRelative":"Linux/env_activate.md","categoryList":[{"id":"edc9f0","sort":10000,"name":"Linux"}]}`);export{v as comp,u as data};
