import{_ as i,c as a,a as e,o as t}from"./app-nZl_11uo.js";const n={};function l(r,s){return t(),a("div",null,s[0]||(s[0]=[e(`<h2 id="q1-安装指定版本的-r-包" tabindex="-1"><a class="header-anchor" href="#q1-安装指定版本的-r-包"><span>Q1：安装指定版本的 R 包</span></a></h2><p>( 一般会在老版本的R里面经常遇到，比如说 <code>Matrix</code>，<code>MASS</code> 等等 )</p><ul><li><code>CRAN</code> 来源的 R 包</li></ul><div class="language-r line-numbers-mode" data-ext="r" data-title="r"><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;"># 以 Matrix 为例</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965;">install.packages</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">(</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&quot;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">https://cran.r-project.org/src/contrib/Archive/Matrix/Matrix_1.6-5.tar.gz</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&quot;</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">)</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;"># 使用南大镜像</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965;">install.packages</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">(</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&quot;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">https://mirror.nju.edu.cn/CRAN/src/contrib/Archive/Matrix/Matrix_1.6-5.tar.gz</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&quot;</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">)</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="q2-锁定虚拟环境中-r-的版本" tabindex="-1"><a class="header-anchor" href="#q2-锁定虚拟环境中-r-的版本"><span>Q2：锁定虚拟环境中 R 的版本</span></a></h2><ul><li>可以使用 <code>pinned</code> 文件显式指定来实现锁定版本</li></ul><div class="language-shell line-numbers-mode" data-ext="shell" data-title="shell"><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965;">echo</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;"> &quot;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">r-base==4.3.2</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&quot;</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;"> &gt;</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;"> &quot;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">~/anaconda3/envs/R4.3.2/conda-meta/pinned</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&quot;</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;"># Python 之类的也可以这样锁定</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="q3-指定镜像源" tabindex="-1"><a class="header-anchor" href="#q3-指定镜像源"><span>Q3：指定镜像源</span></a></h2><ul><li><a href="https://mirror.nju.edu.cn/mirrorz-help/CRAN/?mirror=NJU" target="_blank" rel="noopener noreferrer">南京大学 CRAN 镜像</a></li></ul><div class="language-r line-numbers-mode" data-ext="r" data-title="r"><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">echo </span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&quot;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">options(</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076;">\\&quot;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">repos</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076;">\\&quot;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> = c(CRAN=</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076;">\\&quot;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">https://mirror.nju.edu.cn/CRAN/</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076;">\\&quot;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">))</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&quot;</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;"> &gt;&gt;</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;"> ~</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">/</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">.Rprofile</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><h2 id="q4-升级所有包" tabindex="-1"><a class="header-anchor" href="#q4-升级所有包"><span>Q4：升级所有包</span></a></h2><div class="language-r line-numbers-mode" data-ext="r" data-title="r"><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;"># 默认询问每个包是否要安装</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965;">update.packages</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">()</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;"># 不询问，直接安装</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965;">update.packages</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">(</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">ask</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> =</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;"> False)</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,12)]))}const p=i(n,[["render",l],["__file","index.html.vue"]]),d=JSON.parse(`{"path":"/R/19awg8g2/","title":"R 包安装","lang":"zh-CN","frontmatter":{"title":"R 包安装","createTime":"2024/11/09 08:37:02","permalink":"/R/19awg8g2/","description":"Q1：安装指定版本的 R 包 ( 一般会在老版本的R里面经常遇到，比如说 Matrix，MASS 等等 ) CRAN 来源的 R 包 Q2：锁定虚拟环境中 R 的版本 可以使用 pinned 文件显式指定来实现锁定版本 Q3：指定镜像源 南京大学 CRAN 镜像 Q4：升级所有包","head":[["meta",{"property":"og:url","content":"https://meteor-oxalis3.com/R/19awg8g2/"}],["meta",{"property":"og:site_name","content":"Meteor03's Oxalis Garden"}],["meta",{"property":"og:title","content":"R 包安装"}],["meta",{"property":"og:description","content":"Q1：安装指定版本的 R 包 ( 一般会在老版本的R里面经常遇到，比如说 Matrix，MASS 等等 ) CRAN 来源的 R 包 Q2：锁定虚拟环境中 R 的版本 可以使用 pinned 文件显式指定来实现锁定版本 Q3：指定镜像源 南京大学 CRAN 镜像 Q4：升级所有包"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"R 包安装\\",\\"image\\":[\\"\\"],\\"dateModified\\":null,\\"author\\":[]}"]]},"headers":[{"level":2,"title":"Q1：安装指定版本的 R 包","slug":"q1-安装指定版本的-r-包","link":"#q1-安装指定版本的-r-包","children":[]},{"level":2,"title":"Q2：锁定虚拟环境中 R 的版本","slug":"q2-锁定虚拟环境中-r-的版本","link":"#q2-锁定虚拟环境中-r-的版本","children":[]},{"level":2,"title":"Q3：指定镜像源","slug":"q3-指定镜像源","link":"#q3-指定镜像源","children":[]},{"level":2,"title":"Q4：升级所有包","slug":"q4-升级所有包","link":"#q4-升级所有包","children":[]}],"readingTime":{"minutes":0.58,"words":175},"git":{},"autoDesc":true,"filePathRelative":"notes/R/install.md"}`);export{p as comp,d as data};
