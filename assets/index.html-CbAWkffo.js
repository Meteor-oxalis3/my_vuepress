import{_ as i,c as a,a as e,o as n}from"./app-Dh22Eyom.js";const l={};function t(h,s){return n(),a("div",null,s[0]||(s[0]=[e(`<h2 id="相关软件" tabindex="-1"><a class="header-anchor" href="#相关软件"><span>相关软件</span></a></h2><ul><li><a href="https://github.com/lh3/bwa" target="_blank" rel="noopener noreferrer">bwa</a></li><li><a href="https://github.com/BenLangmead/bowtie2" target="_blank" rel="noopener noreferrer">bowtie2</a></li><li><a href="https://github.com/lh3/minimap2" target="_blank" rel="noopener noreferrer">minimap2</a></li></ul><h2 id="安装" tabindex="-1"><a class="header-anchor" href="#安装"><span>安装</span></a></h2><h3 id="使用-anaconda" tabindex="-1"><a class="header-anchor" href="#使用-anaconda"><span>使用 <code>anaconda</code></span></a></h3><h4 id="创建虚拟环境" tabindex="-1"><a class="header-anchor" href="#创建虚拟环境"><span>创建虚拟环境</span></a></h4><div class="language-shell line-numbers-mode" data-ext="shell" data-title="shell"><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">conda</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> create</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076;"> -n</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> alignment</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;"># 等待一会儿后输入 y , 然后回车</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="进入虚拟环境" tabindex="-1"><a class="header-anchor" href="#进入虚拟环境"><span>进入虚拟环境</span></a></h4><div class="language-shell line-numbers-mode" data-ext="shell" data-title="shell"><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">conda</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> activate</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> alignment</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><h4 id="安装相关软件" tabindex="-1"><a class="header-anchor" href="#安装相关软件"><span>安装相关软件</span></a></h4><div class="language-shell line-numbers-mode" data-ext="shell" data-title="shell"><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">conda</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> install</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076;"> -c</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> bioconda</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076;"> -c</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> conda-forge</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> bwa</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> bowtie2</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> minimap2</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;"># 等待一会儿后输入 y , 然后回车</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="查看软件版本" tabindex="-1"><a class="header-anchor" href="#查看软件版本"><span>查看软件版本</span></a></h4><div class="language-shell line-numbers-mode" data-ext="shell" data-title="shell"><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">bwa</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">bowtie2</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076;"> --version</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">minimap2</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076;"> --version</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;"># 我的版本分别是:</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;"># Version: 0.7.18-r1243-dirty</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;"># version 2.5.4</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;"># 2.28-r1209</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="使用-micromamba" tabindex="-1"><a class="header-anchor" href="#使用-micromamba"><span>使用 <code>micromamba</code></span></a></h3><h4 id="创建虚拟环境-1" tabindex="-1"><a class="header-anchor" href="#创建虚拟环境-1"><span>创建虚拟环境</span></a></h4><div class="language-shell line-numbers-mode" data-ext="shell" data-title="shell"><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;"># 和 anaconda 不同, micromamba 在新建虚拟环境的时候需要加上 env</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">micromamba</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> env</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> create</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076;"> -n</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> alignment</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="进入虚拟环境-1" tabindex="-1"><a class="header-anchor" href="#进入虚拟环境-1"><span>进入虚拟环境</span></a></h4><div class="language-shell line-numbers-mode" data-ext="shell" data-title="shell"><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">micromamba</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> activate</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> alignment</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><h4 id="安装相关软件-1" tabindex="-1"><a class="header-anchor" href="#安装相关软件-1"><span>安装相关软件</span></a></h4><div class="language-shell line-numbers-mode" data-ext="shell" data-title="shell"><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">micromamba</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> install</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076;"> -c</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> bioconda</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076;"> -c</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> conda-forge</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> bwa</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> bowtie2</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> minimap2</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;"># 等待一会儿后输入 Y , 然后回车</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="查看软件版本-1" tabindex="-1"><a class="header-anchor" href="#查看软件版本-1"><span>查看软件版本</span></a></h4><div class="language-shell line-numbers-mode" data-ext="shell" data-title="shell"><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">bwa</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">bowtie2</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076;"> --version</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">minimap2</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076;"> --version</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;"># 我的版本分别是:</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;"># Version: 0.7.18-r1243-dirty</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;"># version 2.5.4</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;"># 2.28-r1209</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="任务" tabindex="-1"><a class="header-anchor" href="#任务"><span>任务</span></a></h2><ul><li><p>fastq 文件：<code>/public/workspace/shaojf/Course/NGS/DataSets/Lab2/Con_sequence_{1,2}.fastq.gz</code> (可直接用lab2已完成质控的数据直接进行比对)</p></li><li><p>索引文件</p></li></ul><ol><li><code>bwa</code> 前缀： <code>BWA_Index/Homo_sapiens.GRCh38.dna.primary_assembly.fa</code></li><li><code>bowtie2</code> 前缀： <code>bowtie2_Index/Homo_sapiens.GRCh38.dna.primary_assembly</code></li></ol><ul><li><strong>需求：</strong> 用 <code>bwa</code> 和 <code>bowtie2</code> 分别进行比对，生成 <code>.sam</code> 文件备用</li></ul><h2 id="参考代码" tabindex="-1"><a class="header-anchor" href="#参考代码"><span>参考代码</span></a></h2><h3 id="_0-准备工作" tabindex="-1"><a class="header-anchor" href="#_0-准备工作"><span>0. 准备工作</span></a></h3><ul><li>新建文件夹 Lab4</li></ul><div class="language-shell line-numbers-mode" data-ext="shell" data-title="shell"><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">mkdir</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076;"> -p</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> ~/myNGS/Lab4</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965;">cd</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> ~/myNGS/Lab4</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>先将 Lab2 里面质控好的数据软链接过来</li></ul><div class="language-shell line-numbers-mode" data-ext="shell" data-title="shell"><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;"># 这里我选择的是使用 cutadapt 切好接头的数据, 可根据你的实际情况调整对应文件路径</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">ln</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076;"> -s</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> ../Lab2/cutadapt/cutadapt_Con_sequence_1.fastq.gz</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> .</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">ln</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076;"> -s</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> ../Lab2/cutadapt/cutadapt_Con_sequence_2.fastq.gz</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> .</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>再将索引文件夹软链接过来</li></ul><div class="language-shell line-numbers-mode" data-ext="shell" data-title="shell"><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;"># bwa 索引文件夹</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">ln</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076;"> -s</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> /public/workspace/shaojf/Course/NGS/Reference/BWA_Index/</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> .</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;"># bowtie2 索引文件夹</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">ln</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076;"> -s</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> /public/workspace/shaojf/Course/NGS/Reference/bowtie2_Index/</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> .</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_1-使用-bwa-比对" tabindex="-1"><a class="header-anchor" href="#_1-使用-bwa-比对"><span>1. 使用 <code>bwa</code> 比对</span></a></h3><ul><li>新建文件夹用于保存结果</li></ul><div class="language-shell line-numbers-mode" data-ext="shell" data-title="shell"><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">mkdir</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> ~/myNGS/Lab4/bwa</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965;">cd</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> ~/myNGS/Lab4/bwa</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>开始比对！</li></ul><div class="language-shell line-numbers-mode" data-ext="shell" data-title="shell"><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;"># 运行时间较长，建议放入 tmux 或 SCREEN 里面。具体方法不多赘述，可参考 Lab0</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">bwa</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> mem</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076;"> -t</span><span style="--shiki-light:#2F798A;--shiki-dark:#4C9A91;"> 4</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> ../BWA_Index/Homo_sapiens.GRCh38.dna.primary_assembly.fa</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076;"> \\</span></span>
<span class="line"><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">        ../cutadapt_Con_sequence_1.fastq.gz</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076;"> \\</span></span>
<span class="line"><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">        ../cutadapt_Con_sequence_2.fastq.gz</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076;"> \\</span></span>
<span class="line"><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">        &gt;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> lab4.bwa.pe.sam</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2-使用-bowtie2-比对" tabindex="-1"><a class="header-anchor" href="#_2-使用-bowtie2-比对"><span>2. 使用 <code>bowtie2</code> 比对</span></a></h3><ul><li>新建文件夹用于保存结果</li></ul><div class="language-shell line-numbers-mode" data-ext="shell" data-title="shell"><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">mkdir</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> ~/myNGS/Lab4/bowtie2</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965;">cd</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> ~/myNGS/Lab4/bowtie2</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>开始比对！</li></ul><div class="language-shell line-numbers-mode" data-ext="shell" data-title="shell"><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;"># 运行时间较长，建议放入 tmux 或 SCREEN 里面。具体方法不多赘述，可参考 Lab0</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">bowtie2</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076;"> --phred33</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076;"> -p</span><span style="--shiki-light:#2F798A;--shiki-dark:#4C9A91;"> 4</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076;"> \\</span></span>
<span class="line"><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076;">        -x</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> ../bowtie2_Index/Homo_sapiens.GRCh38.dna.primary_assembly</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076;"> \\</span></span>
<span class="line"><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076;">        -1</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> ../cutadapt_Con_sequence_1.fastq.gz</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076;"> \\</span></span>
<span class="line"><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076;">        -2</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> ../cutadapt_Con_sequence_2.fastq.gz</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076;"> \\</span></span>
<span class="line"><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076;">        -S</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> lab4.bowtie2.pe.sam</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="结果文件" tabindex="-1"><a class="header-anchor" href="#结果文件"><span>结果文件</span></a></h2><div class="language-shell line-numbers-mode" data-ext="shell" data-title="shell"><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;"># 瞅眼各自的大小</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">du</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076;"> -h</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> ~/myNGS/Lab4/bwa/</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076;">*</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">.sam</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> ~/myNGS/Lab4/bowtie2/</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076;">*</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">.sam</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;"># 2.9G    /public/workspace/stu22230111/myNGS/Lab4/bwa/lab4.bwa.pe.sam</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;"># 2.9G    /public/workspace/stu22230111/myNGS/Lab4/bowtie2/lab4.bowtie2.pe.sam</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,45)]))}const p=i(l,[["render",t],["__file","index.html.vue"]]),r=JSON.parse(`{"path":"/article/3m5fmsg3/","title":"NGS Lab4 (基因组重测序-读段比对)","lang":"zh-CN","frontmatter":{"title":"NGS Lab4 (基因组重测序-读段比对)","tags":["bwa","bowtie2","minimap2","Linux","NGS"],"createTime":"2024/10/28 20:22:22","permalink":"/article/3m5fmsg3/","description":"相关软件 bwa bowtie2 minimap2 安装 使用 anaconda 创建虚拟环境 进入虚拟环境 安装相关软件 查看软件版本 使用 micromamba 创建虚拟环境 进入虚拟环境 安装相关软件 查看软件版本 任务 fastq 文件：/public/workspace/shaojf/Course/NGS/DataSets/Lab2/Con_...","head":[["meta",{"property":"og:url","content":"https://meteor-oxalis3.com/article/3m5fmsg3/"}],["meta",{"property":"og:site_name","content":"Meteor03's Oxalis Garden"}],["meta",{"property":"og:title","content":"NGS Lab4 (基因组重测序-读段比对)"}],["meta",{"property":"og:description","content":"相关软件 bwa bowtie2 minimap2 安装 使用 anaconda 创建虚拟环境 进入虚拟环境 安装相关软件 查看软件版本 使用 micromamba 创建虚拟环境 进入虚拟环境 安装相关软件 查看软件版本 任务 fastq 文件：/public/workspace/shaojf/Course/NGS/DataSets/Lab2/Con_..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"article:tag","content":"bwa"}],["meta",{"property":"article:tag","content":"bowtie2"}],["meta",{"property":"article:tag","content":"minimap2"}],["meta",{"property":"article:tag","content":"Linux"}],["meta",{"property":"article:tag","content":"NGS"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"NGS Lab4 (基因组重测序-读段比对)\\",\\"image\\":[\\"\\"],\\"dateModified\\":null,\\"author\\":[]}"]]},"headers":[{"level":2,"title":"相关软件","slug":"相关软件","link":"#相关软件","children":[]},{"level":2,"title":"安装","slug":"安装","link":"#安装","children":[{"level":3,"title":"使用 anaconda","slug":"使用-anaconda","link":"#使用-anaconda","children":[]},{"level":3,"title":"使用 micromamba","slug":"使用-micromamba","link":"#使用-micromamba","children":[]}]},{"level":2,"title":"任务","slug":"任务","link":"#任务","children":[]},{"level":2,"title":"参考代码","slug":"参考代码","link":"#参考代码","children":[{"level":3,"title":"0. 准备工作","slug":"_0-准备工作","link":"#_0-准备工作","children":[]},{"level":3,"title":"1. 使用 bwa 比对","slug":"_1-使用-bwa-比对","link":"#_1-使用-bwa-比对","children":[]},{"level":3,"title":"2. 使用 bowtie2 比对","slug":"_2-使用-bowtie2-比对","link":"#_2-使用-bowtie2-比对","children":[]}]},{"level":2,"title":"结果文件","slug":"结果文件","link":"#结果文件","children":[]}],"readingTime":{"minutes":1.87,"words":561},"git":{},"autoDesc":true,"filePathRelative":"NGS/NGS_Lab4.md","categoryList":[{"id":"2cdfc8","sort":10002,"name":"NGS"}]}`);export{p as comp,r as data};
