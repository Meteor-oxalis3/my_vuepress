import{_ as i,c as a,a as e,o as n}from"./app-B17C_cj8.js";const l={};function t(h,s){return n(),a("div",null,s[0]||(s[0]=[e(`<h2 id="相关软件" tabindex="-1"><a class="header-anchor" href="#相关软件"><span>相关软件</span></a></h2><h3 id="组装工具" tabindex="-1"><a class="header-anchor" href="#组装工具"><span>组装工具</span></a></h3><ul><li><p><a href="https://canu.readthedocs.io/en/latest/" target="_blank" rel="noopener noreferrer">Canu</a></p></li><li><p><a href="https://github.com/ruanjue/wtdbg2" target="_blank" rel="noopener noreferrer">wtdbg2</a></p></li><li><p><a href="https://github.com/ablab/spades" target="_blank" rel="noopener noreferrer">SPAdes</a></p></li></ul><h3 id="评估工具" tabindex="-1"><a class="header-anchor" href="#评估工具"><span>评估工具</span></a></h3><ul><li><a href="https://github.com/ablab/quast" target="_blank" rel="noopener noreferrer">QUAST</a></li></ul><h2 id="安装" tabindex="-1"><a class="header-anchor" href="#安装"><span>安装</span></a></h2><p>( 是时候简化安装方法了：将同一类软件安装在一个虚拟环境里面！)</p><h3 id="使用-anaconda" tabindex="-1"><a class="header-anchor" href="#使用-anaconda"><span>使用 <code>anaconda</code></span></a></h3><h4 id="创建虚拟环境" tabindex="-1"><a class="header-anchor" href="#创建虚拟环境"><span>创建虚拟环境</span></a></h4><div class="language-shell line-numbers-mode" data-ext="shell" data-title="shell"><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">conda</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> create</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076;"> -n</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> assemble</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;"># 等待一会儿后输入 y , 然后回车</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="进入虚拟环境" tabindex="-1"><a class="header-anchor" href="#进入虚拟环境"><span>进入虚拟环境</span></a></h4><div class="language-shell line-numbers-mode" data-ext="shell" data-title="shell"><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">conda</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> activate</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> assemble</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><h4 id="安装相关软件" tabindex="-1"><a class="header-anchor" href="#安装相关软件"><span>安装相关软件</span></a></h4><div class="language-shell line-numbers-mode" data-ext="shell" data-title="shell"><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">conda</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> install</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076;"> -c</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> bioconda</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076;"> -c</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> conda-forge</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> canu</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> wtdbg</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> spades</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> quast</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;"># 等待一会儿后输入 y , 然后回车</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="检验是否安装成功" tabindex="-1"><a class="header-anchor" href="#检验是否安装成功"><span>检验是否安装成功</span></a></h4><div class="language-shell line-numbers-mode" data-ext="shell" data-title="shell"><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">canu</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076;"> --version</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> &amp;&amp;</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076;"> \\</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">wtdbg2</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076;"> --version</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> &amp;&amp;</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076;"> \\</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">spades.py</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076;"> -v</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> &amp;&amp;</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076;"> \\</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">quast</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076;"> -v</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;"># 我的输出是:</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;"># canu 2.2</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;"># wtdbg2 0.0</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;"># SPAdes genome assembler v4.0.0</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;"># QUAST v5.2.0</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="使用-micromamba" tabindex="-1"><a class="header-anchor" href="#使用-micromamba"><span>使用 <code>micromamba</code></span></a></h3><h4 id="创建虚拟环境-1" tabindex="-1"><a class="header-anchor" href="#创建虚拟环境-1"><span>创建虚拟环境</span></a></h4><div class="language-shell line-numbers-mode" data-ext="shell" data-title="shell"><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;"># 和 anaconda 不同, micromamba 在新建虚拟环境的时候需要加上 env</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">micromamba</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> env</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> create</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076;"> -n</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> assemble</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="进入虚拟环境-1" tabindex="-1"><a class="header-anchor" href="#进入虚拟环境-1"><span>进入虚拟环境</span></a></h4><div class="language-shell line-numbers-mode" data-ext="shell" data-title="shell"><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">micromamba</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> activate</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> assemble</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><h4 id="安装相关软件-1" tabindex="-1"><a class="header-anchor" href="#安装相关软件-1"><span>安装相关软件</span></a></h4><div class="language-shell line-numbers-mode" data-ext="shell" data-title="shell"><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">micromamba</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> install</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076;"> -c</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> bioconda</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076;"> -c</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> conda-forge</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> canu</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> wtdbg</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> spades</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> quast</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;"># 等待一会儿后输入 Y , 然后回车</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="检验是否安装成功-1" tabindex="-1"><a class="header-anchor" href="#检验是否安装成功-1"><span>检验是否安装成功</span></a></h4><div class="language-shell line-numbers-mode" data-ext="shell" data-title="shell"><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">canu</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076;"> --version</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> &amp;&amp;</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076;"> \\</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">wtdbg2</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076;"> --version</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> &amp;&amp;</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076;"> \\</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">spades.py</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076;"> -v</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> &amp;&amp;</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076;"> \\</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">quast</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076;"> -v</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;"># 我的输出是:</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;"># canu 2.2</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;"># wtdbg2 0.0</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;"># SPAdes genome assembler v4.0.0</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;"># QUAST v5.2.0</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="任务" tabindex="-1"><a class="header-anchor" href="#任务"><span>任务</span></a></h2><h4 id="数据" tabindex="-1"><a class="header-anchor" href="#数据"><span>数据:</span></a></h4><p><code>/public/workspace/shaojf/Course/NGS/DataSets/Lab3/SRR30883004/SRR30883004_subreads.fastq.gz</code></p><h4 id="测序技术" tabindex="-1"><a class="header-anchor" href="#测序技术"><span>测序技术：</span></a></h4><ul><li><p>PacBio Sequel IIe CCS</p></li><li><p>所测基因组大小为 2.9Mb</p></li></ul><p>https://www.ncbi.nlm.nih.gov/datasets/genome/?taxon=1675036 https://www.ncbi.nlm.nih.gov/datasets/genome/GCF_003315775.1/</p><p>第一版基因组由454测序所的</p><h4 id="需求" tabindex="-1"><a class="header-anchor" href="#需求"><span>需求:</span></a></h4><ul><li>利用 <code>canu</code> 、 <code>wtdbg2</code> 、 <code>SPAdes</code> 进行组装</li><li>利用 <code>QUAST</code> 对三个组装结果进行评估</li></ul><h2 id="参考代码" tabindex="-1"><a class="header-anchor" href="#参考代码"><span>参考代码</span></a></h2><h3 id="数据准备" tabindex="-1"><a class="header-anchor" href="#数据准备"><span>数据准备</span></a></h3><div class="language-shell line-numbers-mode" data-ext="shell" data-title="shell"><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;"># 新建文件夹 Lab3</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">mkdir</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076;"> -p</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> ~/myNGS/Lab3</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965;">cd</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> ~/myNGS/Lab3</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;"># 将原始数据软链接 (已预处理)</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">ln</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076;"> -s</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> /public/workspace/shaojf/Course/NGS/DataSets/Lab3/SRR30883004/SRR30883004_subreads.fastq.gz</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> .</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="使用-canu-进行组装" tabindex="-1"><a class="header-anchor" href="#使用-canu-进行组装"><span>使用 <code>Canu</code> 进行组装</span></a></h3><ul><li>新建文件夹 <code>canu</code> 用于保存结果</li></ul><div class="language-shell line-numbers-mode" data-ext="shell" data-title="shell"><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">mkdir</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> ~/myNGS/Lab3/canu</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965;">cd</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> ~/myNGS/Lab3/canu</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>开始组装！</li></ul><div class="language-shell line-numbers-mode" data-ext="shell" data-title="shell"><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">canu</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> useGrid=</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;">false</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076;"> \\</span></span>
<span class="line"><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076;">    -p</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> M.hexanoica.canu</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076;"> \\</span></span>
<span class="line"><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076;">    -d</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> M.hexanoica.canu.res</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076;"> \\</span></span>
<span class="line"><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">    genomeSize=2.9m</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076;"> \\</span></span>
<span class="line"><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076;">    -pacbio-hifi</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> ../SRR30883004_subreads.fastq.gz</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;"># -d 指定输出文件夹</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="使用-wtdbg2-进行组装" tabindex="-1"><a class="header-anchor" href="#使用-wtdbg2-进行组装"><span>使用 <code>wtdbg2</code> 进行组装</span></a></h3><ul><li>新建文件夹 <code>wtdbg2</code> 用于保存结果</li></ul><div class="language-shell line-numbers-mode" data-ext="shell" data-title="shell"><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">mkdir</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> ~/myNGS/Lab3/wtdbg2</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965;">cd</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> ~/myNGS/Lab3/wtdbg2</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>开始组装！</li></ul><div class="language-shell line-numbers-mode" data-ext="shell" data-title="shell"><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;"># 运行时间较长，建议放入 tmux 或 SCREEN 里面，具体方法不多赘述，可参考 Lab0</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">wtdbg2</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076;"> -x</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> ccs</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076;"> -t</span><span style="--shiki-light:#2F798A;--shiki-dark:#4C9A91;"> 4</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076;"> \\</span></span>
<span class="line"><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076;">       -g</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> 2.9m</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076;"> -o</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> M.hexanoica.wtdbg2</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076;"> \\</span></span>
<span class="line"><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076;">       -i</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> ../SRR30883004_subreads.fastq.gz</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">wtpoa-cns</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076;"> -t</span><span style="--shiki-light:#2F798A;--shiki-dark:#4C9A91;"> 4</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076;"> \\</span></span>
<span class="line"><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076;">    -i</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> M.hexanoica.wtdbg2.ctg.lay.gz</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076;"> \\</span></span>
<span class="line"><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076;">    -o</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> M.hexanoica.wtdbg2.ctg.cns.fa</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="使用-spades-进行组装" tabindex="-1"><a class="header-anchor" href="#使用-spades-进行组装"><span>使用 <code>SPAdes</code> 进行组装</span></a></h3><ul><li>新建文件夹 <code>SPAdes</code> 用于保存结果</li></ul><div class="language-shell line-numbers-mode" data-ext="shell" data-title="shell"><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">mkdir</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> ~/myNGS/Lab3/SPAdes</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965;">cd</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> ~/myNGS/Lab3/SPAdes</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>开始组装！</li></ul><div class="language-shell line-numbers-mode" data-ext="shell" data-title="shell"><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;"># 运行时间较长，建议放入 tmux 或 SCREEN 里面，具体方法不多赘述，可参考 Lab0</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">spades.py</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076;"> --isolate</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076;"> -t</span><span style="--shiki-light:#2F798A;--shiki-dark:#4C9A91;"> 4</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076;"> \\</span></span>
<span class="line"><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076;">          -o</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> M.hexanoica.spades.res</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076;"> \\</span></span>
<span class="line"><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076;">          -s</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> ../SRR30883004_subreads.fastq.gz</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="评估结果" tabindex="-1"><a class="header-anchor" href="#评估结果"><span>评估结果</span></a></h3><ul><li>新建文件夹 <code>quast</code> 用于保存结果</li></ul><div class="language-shell line-numbers-mode" data-ext="shell" data-title="shell"><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">mkdir</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> ~/myNGS/Lab3/quast</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><ul><li>本任务中使用 <code>QUAST</code> 前需要先运行一次 <code>quast-download-gridss</code></li></ul><div class="language-shell line-numbers-mode" data-ext="shell" data-title="shell"><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">quast-download-gridss</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;"># 下载的数据来源于 github，若下载失败可多试几次...</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>开始评估！</li></ul><div class="language-shell line-numbers-mode" data-ext="shell" data-title="shell"><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">quast.py</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> ./canu/M.hexanoica.canu.res/M.hexanoica.canu.contigs.fasta</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076;"> \\</span></span>
<span class="line"><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">         ./wtdbg2/M.hexanoica.wtdbg2.ctg.cns.fa</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076;"> \\</span></span>
<span class="line"><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">         ./SPAdes/M.hexanoica.spades.res/contigs.fasta</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076;"> \\</span></span>
<span class="line"><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076;">         -t</span><span style="--shiki-light:#2F798A;--shiki-dark:#4C9A91;"> 4</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076;"> --glimmer</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076;"> --pacbio</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> ./SRR30883004_subreads.fastq.gz</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076;"> \\</span></span>
<span class="line"><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076;">         -o</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> ./quast/M.hexanoica.quast</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p><a href="https://r2-hugo.meteor-oxalis3.com/02_NGS/Lab3/report.html" target="_blank" rel="noopener noreferrer">📄 report.html</a></p></blockquote><ul><li>从<code>QUAST</code> 输出的结果网页文件可以看出，<code>canu</code> 的 contigs 最长，组装效果最好</li></ul><p>(绿的线条对应的软件是 <code>SPAdes</code>)</p>`,62)]))}const p=i(l,[["render",t],["__file","index.html.vue"]]),r=JSON.parse(`{"path":"/article/s65645jf/","title":"NGS Lab3 (基因组从头组装)","lang":"zh-CN","frontmatter":{"title":"NGS Lab3 (基因组从头组装)","tags":["canu","wtdbg2","SPAdes","QUAST","NGS","Linux"],"createTime":"2024/10/21 22:13:43","permalink":"/article/s65645jf/","description":"相关软件 组装工具 Canu wtdbg2 SPAdes 评估工具 QUAST 安装 ( 是时候简化安装方法了：将同一类软件安装在一个虚拟环境里面！) 使用 anaconda 创建虚拟环境 进入虚拟环境 安装相关软件 检验是否安装成功 使用 micromamba 创建虚拟环境 进入虚拟环境 安装相关软件 检验是否安装成功 任务 数据: /public/...","head":[["meta",{"property":"og:url","content":"https://meteor-oxalis3.com/article/s65645jf/"}],["meta",{"property":"og:site_name","content":"Meteor03's Oxalis Garden"}],["meta",{"property":"og:title","content":"NGS Lab3 (基因组从头组装)"}],["meta",{"property":"og:description","content":"相关软件 组装工具 Canu wtdbg2 SPAdes 评估工具 QUAST 安装 ( 是时候简化安装方法了：将同一类软件安装在一个虚拟环境里面！) 使用 anaconda 创建虚拟环境 进入虚拟环境 安装相关软件 检验是否安装成功 使用 micromamba 创建虚拟环境 进入虚拟环境 安装相关软件 检验是否安装成功 任务 数据: /public/..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"article:tag","content":"canu"}],["meta",{"property":"article:tag","content":"wtdbg2"}],["meta",{"property":"article:tag","content":"SPAdes"}],["meta",{"property":"article:tag","content":"QUAST"}],["meta",{"property":"article:tag","content":"NGS"}],["meta",{"property":"article:tag","content":"Linux"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"NGS Lab3 (基因组从头组装)\\",\\"image\\":[\\"\\"],\\"dateModified\\":null,\\"author\\":[]}"]]},"headers":[{"level":2,"title":"相关软件","slug":"相关软件","link":"#相关软件","children":[{"level":3,"title":"组装工具","slug":"组装工具","link":"#组装工具","children":[]},{"level":3,"title":"评估工具","slug":"评估工具","link":"#评估工具","children":[]}]},{"level":2,"title":"安装","slug":"安装","link":"#安装","children":[{"level":3,"title":"使用 anaconda","slug":"使用-anaconda","link":"#使用-anaconda","children":[]},{"level":3,"title":"使用 micromamba","slug":"使用-micromamba","link":"#使用-micromamba","children":[]}]},{"level":2,"title":"任务","slug":"任务","link":"#任务","children":[]},{"level":2,"title":"参考代码","slug":"参考代码","link":"#参考代码","children":[{"level":3,"title":"数据准备","slug":"数据准备","link":"#数据准备","children":[]},{"level":3,"title":"使用 Canu 进行组装","slug":"使用-canu-进行组装","link":"#使用-canu-进行组装","children":[]},{"level":3,"title":"使用 wtdbg2 进行组装","slug":"使用-wtdbg2-进行组装","link":"#使用-wtdbg2-进行组装","children":[]},{"level":3,"title":"使用 SPAdes 进行组装","slug":"使用-spades-进行组装","link":"#使用-spades-进行组装","children":[]},{"level":3,"title":"评估结果","slug":"评估结果","link":"#评估结果","children":[]}]}],"readingTime":{"minutes":2.31,"words":693},"git":{},"autoDesc":true,"filePathRelative":"NGS/NGS_Lab3.md","categoryList":[{"id":"2cdfc8","sort":10002,"name":"NGS"}]}`);export{p as comp,r as data};