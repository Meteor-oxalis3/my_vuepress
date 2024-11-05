import{_ as i,c as e,a,o as l}from"./app-B17C_cj8.js";const n={};function t(d,s){return l(),e("div",null,s[0]||(s[0]=[a(`<h2 id="任务" tabindex="-1"><a class="header-anchor" href="#任务"><span>任务</span></a></h2><ol><li>练习 <code>screen</code>或 <code>tmux</code> ，后续的所有操作尽量放在会话中</li><li>练习 lab0.html 代码</li><li>安装 <a href="https://bioinf.shenwei.me/seqkit/" target="_blank" rel="noopener noreferrer">SeqKit2</a></li><li>利用 SeqKit2 从 <code>/public/workspace/shaojf/Course/NGS/DataSets/Lab0/ENCFF000PAI.fastq.gz</code> 随机提取1000条序列，保存到 <code>~/NGS/Lab0/seqkit.s1000.fastq</code> ( <code>wc -l seqkit.s1000.fastq</code> 应得到4000)</li></ol><h2 id="_1-练习-screen-或-tmux" tabindex="-1"><a class="header-anchor" href="#_1-练习-screen-或-tmux"><span>1. 练习 <code>screen</code> 或 <code>tmux</code></span></a></h2><h3 id="screen" tabindex="-1"><a class="header-anchor" href="#screen"><span>screen</span></a></h3><ul><li><code>screen</code> 在新建会话后会默认进入所建会话</li></ul><div class="language-shell line-numbers-mode" data-ext="shell" data-title="shell"><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;"># 新建screen会话&#39;lab0&#39;</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">screen</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076;"> -S</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> lab0</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;"># 若想要退出tmux会话, 先 Ctrl+a 一起按, 然后再按d</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;"># 再次进入screen会话&#39;lab0&#39;</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">screen</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076;"> -r</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> lab0</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="tmux" tabindex="-1"><a class="header-anchor" href="#tmux"><span>tmux</span></a></h3><ul><li><code>tmux</code> 在新建会话后也会默认进入所建会话</li></ul><div class="language-shell line-numbers-mode" data-ext="shell" data-title="shell"><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;"># 新建tmux会话&#39;lab0&#39;</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">tmux</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> new</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076;"> -s</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> lab0</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;"># 若想要退出tmux会话, 先 Ctrl+b 一起按, 然后再按d</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;"># 再次进入tmux会话&#39;lab0&#39;</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">tmux</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> a</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076;"> -t</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> lab0</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_2-练习-lab0-html-代码" tabindex="-1"><a class="header-anchor" href="#_2-练习-lab0-html-代码"><span>2. 练习 lab0.html 代码</span></a></h2><ul><li>略</li></ul><h2 id="_3-安装-seqkit2" tabindex="-1"><a class="header-anchor" href="#_3-安装-seqkit2"><span>3. 安装 <code>SeqKit2</code></span></a></h2><p>( <code>anaconda</code> 与 <code>micromamba</code> 二选一即可 )</p><h3 id="使用-anaconda-安装" tabindex="-1"><a class="header-anchor" href="#使用-anaconda-安装"><span>使用 <code>anaconda</code> 安装</span></a></h3><ul><li>新建虚拟环境 <code>seqkit2</code></li></ul><div class="language-shell line-numbers-mode" data-ext="shell" data-title="shell"><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">conda</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> create</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076;"> -n</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> seqkit2</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;"># 等待一会儿后输入 y , 然后回车</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>进入虚拟环境 <code>seqkit2</code></li></ul><div class="language-shell line-numbers-mode" data-ext="shell" data-title="shell"><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">conda</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> activate</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> seqkit2</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><ul><li>安装 <code>seqkit2</code></li></ul><div class="language-shell line-numbers-mode" data-ext="shell" data-title="shell"><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;"># 注意！是seqkit，后面不用加2</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">conda</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> install</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076;"> -c</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> bioconda</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> seqkit</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;"># 等待一会儿后输入 y , 然后回车</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;"># 检验是否安装成功</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">seqkit</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> version</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;"># 我的输出是: seqkit v2.8.2</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="使用-micromamba-安装" tabindex="-1"><a class="header-anchor" href="#使用-micromamba-安装"><span>使用 <code>micromamba</code> 安装</span></a></h3><ul><li>新建虚拟环境 <code>seqkit2</code></li></ul><div class="language-shell line-numbers-mode" data-ext="shell" data-title="shell"><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;"># 和 anaconda 不同, micromamba 在新建虚拟环境的时候需要加上 env</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">micromamba</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> env</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> create</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076;"> -n</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> seqkit2</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>进入虚拟环境 <code>seqkit2</code></li></ul><div class="language-shell line-numbers-mode" data-ext="shell" data-title="shell"><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">micromamba</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> activate</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> seqkit2</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><ul><li>安装 <code>seqkit2</code></li></ul><div class="language-shell line-numbers-mode" data-ext="shell" data-title="shell"><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;"># 注意！是seqkit，后面不用加2</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;"># 注意！如果不添加 -c conda-forge, 则默认无法下载最新版本的 seqkit</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">micromamba</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> install</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076;"> -c</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> bioconda</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076;"> -c</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> conda-forge</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> seqkit</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;"># 等待进度条消失后，输入 Y ，然后回车</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;"># 检验是否安装成功</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">seqkit</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> version</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;"># 我的输出是: seqkit v2.8.2</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_4-随机提取1000条序列" tabindex="-1"><a class="header-anchor" href="#_4-随机提取1000条序列"><span>4. 随机提取1000条序列</span></a></h2><div class="language-shell line-numbers-mode" data-ext="shell" data-title="shell"><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;"># 创建指定文件夹</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">mkdir</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076;"> -p</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> ~/NGS/Lab0</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;"># 随机提取1000条序列</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">seqkit</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> sample</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076;"> -n</span><span style="--shiki-light:#2F798A;--shiki-dark:#4C9A91;"> 1000</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076;"> \\</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">/public/workspace/shaojf/Course/NGS/DataSets/Lab0/ENCFF000PAI.fastq.gz </span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076;">\\</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">-o </span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">~/NGS/Lab0/seqkit.s1000.fastq</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;"># 整个处理过程有点慢，因为要先把整个fastq读取到内存里面，稍安勿躁～</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;"># 检查一下</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">wc</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076;"> -l</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> ~/NGS/Lab0/seqkit.s1000.fastq</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;"># 若输出结果是4000的话, 说明你完美成功啦!</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,29)]))}const p=i(n,[["render",t],["__file","index.html.vue"]]),r=JSON.parse(`{"path":"/article/xupe1dwa/","title":"NGS Lab0 (基础准备)","lang":"zh-CN","frontmatter":{"title":"NGS Lab0 (基础准备)","tags":["seqkit","Linux","NGS"],"createTime":"2024/10/21 19:56:47","permalink":"/article/xupe1dwa/","description":"任务 练习 screen或 tmux ，后续的所有操作尽量放在会话中 练习 lab0.html 代码 安装 SeqKit2 利用 SeqKit2 从 /public/workspace/shaojf/Course/NGS/DataSets/Lab0/ENCFF000PAI.fastq.gz 随机提取1000条序列，保存到 ~/NGS/Lab0/seqk...","head":[["meta",{"property":"og:url","content":"https://meteor-oxalis3.com/article/xupe1dwa/"}],["meta",{"property":"og:site_name","content":"Meteor03's Oxalis Garden"}],["meta",{"property":"og:title","content":"NGS Lab0 (基础准备)"}],["meta",{"property":"og:description","content":"任务 练习 screen或 tmux ，后续的所有操作尽量放在会话中 练习 lab0.html 代码 安装 SeqKit2 利用 SeqKit2 从 /public/workspace/shaojf/Course/NGS/DataSets/Lab0/ENCFF000PAI.fastq.gz 随机提取1000条序列，保存到 ~/NGS/Lab0/seqk..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"article:tag","content":"seqkit"}],["meta",{"property":"article:tag","content":"Linux"}],["meta",{"property":"article:tag","content":"NGS"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"NGS Lab0 (基础准备)\\",\\"image\\":[\\"\\"],\\"dateModified\\":null,\\"author\\":[]}"]]},"headers":[{"level":2,"title":"任务","slug":"任务","link":"#任务","children":[]},{"level":2,"title":"1. 练习 screen 或 tmux","slug":"_1-练习-screen-或-tmux","link":"#_1-练习-screen-或-tmux","children":[{"level":3,"title":"screen","slug":"screen","link":"#screen","children":[]},{"level":3,"title":"tmux","slug":"tmux","link":"#tmux","children":[]}]},{"level":2,"title":"2. 练习 lab0.html 代码","slug":"_2-练习-lab0-html-代码","link":"#_2-练习-lab0-html-代码","children":[]},{"level":2,"title":"3. 安装 SeqKit2","slug":"_3-安装-seqkit2","link":"#_3-安装-seqkit2","children":[{"level":3,"title":"使用 anaconda 安装","slug":"使用-anaconda-安装","link":"#使用-anaconda-安装","children":[]},{"level":3,"title":"使用 micromamba 安装","slug":"使用-micromamba-安装","link":"#使用-micromamba-安装","children":[]}]},{"level":2,"title":"4. 随机提取1000条序列","slug":"_4-随机提取1000条序列","link":"#_4-随机提取1000条序列","children":[]}],"readingTime":{"minutes":1.74,"words":522},"git":{},"autoDesc":true,"filePathRelative":"NGS/NGS_Lab0.md","categoryList":[{"id":"2cdfc8","sort":10002,"name":"NGS"}]}`);export{p as comp,r as data};
