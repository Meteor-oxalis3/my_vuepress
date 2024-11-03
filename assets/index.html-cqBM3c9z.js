import{_ as i,c as a,a as e,o as l}from"./app-7OvMmhL2.js";const n={};function t(h,s){return l(),a("div",null,s[0]||(s[0]=[e(`<h2 id="相关软件" tabindex="-1"><a class="header-anchor" href="#相关软件"><span>相关软件</span></a></h2><ul><li><a href="http://www.htslib.org/" target="_blank" rel="noopener noreferrer">Samtools</a></li><li><a href="https://gatk.broadinstitute.org/" target="_blank" rel="noopener noreferrer">GATK</a></li><li><a href="https://igv.org/" target="_blank" rel="noopener noreferrer">IGV</a></li></ul><h2 id="安装" tabindex="-1"><a class="header-anchor" href="#安装"><span>安装</span></a></h2><h3 id="使用-anaconda" tabindex="-1"><a class="header-anchor" href="#使用-anaconda"><span>使用 <code>anaconda</code></span></a></h3><h4 id="创建虚拟环境" tabindex="-1"><a class="header-anchor" href="#创建虚拟环境"><span>创建虚拟环境</span></a></h4><div class="language-shell line-numbers-mode" data-ext="shell" data-title="shell"><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">conda</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> create</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076;"> -n</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> snv_calling</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;"># 等待一会儿后输入 y , 然后回车</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="进入虚拟环境" tabindex="-1"><a class="header-anchor" href="#进入虚拟环境"><span>进入虚拟环境</span></a></h4><div class="language-shell line-numbers-mode" data-ext="shell" data-title="shell"><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">conda</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> activate</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> snv_calling</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><h4 id="安装相关软件" tabindex="-1"><a class="header-anchor" href="#安装相关软件"><span>安装相关软件</span></a></h4><div class="language-shell line-numbers-mode" data-ext="shell" data-title="shell"><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">conda</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> install</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076;"> -c</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> bioconda</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076;"> -c</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> conda-forge</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> samtools</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> gatk4</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> igv</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;"># 等待一会儿后输入 y , 然后回车</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="查看软件版本" tabindex="-1"><a class="header-anchor" href="#查看软件版本"><span>查看软件版本</span></a></h4><div class="language-shell line-numbers-mode" data-ext="shell" data-title="shell"><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">conda</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> list</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;"> |</span><span style="--shiki-light:#59873A;--shiki-dark:#80A665;"> grep</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076;"> -E</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;"> &quot;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">samtools|gatk4|igv</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&quot;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;"># gatk4                     4.6.1.0</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;"># igv                       2.17.4</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;"># samtools                  1.21</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><hr><h3 id="使用-micromamba" tabindex="-1"><a class="header-anchor" href="#使用-micromamba"><span>使用 <code>micromamba</code></span></a></h3><h4 id="创建虚拟环境-1" tabindex="-1"><a class="header-anchor" href="#创建虚拟环境-1"><span>创建虚拟环境</span></a></h4><div class="language-shell line-numbers-mode" data-ext="shell" data-title="shell"><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;"># 和 anaconda 不同, micromamba 在新建虚拟环境的时候需要加上 env</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">micromamba</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> env</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> create</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076;"> -n</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> snv_calling</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="进入虚拟环境-1" tabindex="-1"><a class="header-anchor" href="#进入虚拟环境-1"><span>进入虚拟环境</span></a></h4><div class="language-shell line-numbers-mode" data-ext="shell" data-title="shell"><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">micromamba</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> activate</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> snv_calling</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><h4 id="安装相关软件-1" tabindex="-1"><a class="header-anchor" href="#安装相关软件-1"><span>安装相关软件</span></a></h4><div class="language-shell line-numbers-mode" data-ext="shell" data-title="shell"><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">micromamba</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> install</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076;"> -c</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> bioconda</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076;"> -c</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> conda-forge</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> samtools</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> gatk4</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> igv</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;"># 等待一会儿后输入 Y , 然后回车</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="查看软件版本-1" tabindex="-1"><a class="header-anchor" href="#查看软件版本-1"><span>查看软件版本</span></a></h4><div class="language-shell line-numbers-mode" data-ext="shell" data-title="shell"><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">micromamba</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> list</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;"> |</span><span style="--shiki-light:#59873A;--shiki-dark:#80A665;"> grep</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076;"> -E</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;"> &quot;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">samtools|gatk4|igv</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&quot;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;"># gatk4                      4.6.1.0 </span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;"># igv                        2.17.4</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;"># samtools                   1.21</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="任务一" tabindex="-1"><a class="header-anchor" href="#任务一"><span>任务一</span></a></h2><ul><li><p>数据： <code>/public/workspace/shaojf/Course/NGS/DataSets/Lab5/WXS-Case1.subsample.sam</code></p></li><li><p>需求： (在主目录下下创建myNGS/Lab5，所有分析均放在该目录下)</p><ol><li><p>用 <code>samtools view</code> 把 <code>.sam</code> 文件转成 <code>.bam</code> 文件，并按坐标排序</p></li><li><p>用 <code>samtools markdup</code> 删除PCR重复</p></li><li><p>用 <code>samtools markdup</code> 标记PCR重复</p></li><li><p>用 <code>samtools flagstat</code> 对三个 <code>.bam</code> 文件进行简单统计</p></li><li><p>用 <code>samtools addreplacerg</code> 添加如下信息： <code>ID:Case1_Run1</code> <code>LB:WXS PL:Illumina</code> <code>SM:Case1</code></p></li></ol></li></ul><h2 id="参考代码" tabindex="-1"><a class="header-anchor" href="#参考代码"><span>参考代码</span></a></h2><h3 id="_0-准备工作" tabindex="-1"><a class="header-anchor" href="#_0-准备工作"><span>0. 准备工作</span></a></h3><ul><li><p>新建文件夹并进入</p><div class="language-shell line-numbers-mode" data-ext="shell" data-title="shell"><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">mkdir</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> ~/myNGS/Lab5</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965;">cd</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> ~/myNGS/Lab5</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>将 <code>.sam</code> 文件软链接到你的文件夹</p><div class="language-shell line-numbers-mode" data-ext="shell" data-title="shell"><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">ln</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076;"> -s</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> /public/workspace/shaojf/Course/NGS/DataSets/Lab5/WXS-Case1.subsample.sam</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> .</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div></li></ul><h3 id="_1-将-sam-转-bam-并按坐标排序" tabindex="-1"><a class="header-anchor" href="#_1-将-sam-转-bam-并按坐标排序"><span>1. 将 <code>.sam</code> 转 <code>.bam</code> 并按坐标排序</span></a></h3><ul><li><p><code>.sam</code> 转 <code>.bam</code></p><div class="language-shell line-numbers-mode" data-ext="shell" data-title="shell"><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">samtools</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> view</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076;"> -Sb</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> ./WXS-Case1.subsample.sam</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076;"> -o</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> WXS-Case1.subsample.bam</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076;"> -@</span><span style="--shiki-light:#2F798A;--shiki-dark:#4C9A91;"> 20</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div></li><li><p>按坐标排序</p><div class="language-shell line-numbers-mode" data-ext="shell" data-title="shell"><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;"># 若建索引，必须先按坐标排序</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">samtools</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> sort</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> ./WXS-Case1.subsample.bam</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076;"> -o</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> ./sorted_WXS-Case1.subsample.bam</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076;"> -@</span><span style="--shiki-light:#2F798A;--shiki-dark:#4C9A91;"> 20</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div></li></ul><hr><h3 id="_2-删除pcr重复" tabindex="-1"><a class="header-anchor" href="#_2-删除pcr重复"><span>2. 删除PCR重复</span></a></h3><ul><li><p>添加 ms 和 mc 标签以供 markdup 使用</p><div class="language-shell line-numbers-mode" data-ext="shell" data-title="shell"><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">samtools</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> fixmate</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076;"> -m</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> WXS-Case1.subsample.bam</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> fixmate_WXS-Case1.subsample.bam</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076;"> -@</span><span style="--shiki-light:#2F798A;--shiki-dark:#4C9A91;"> 20</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div></li><li><p>markdup 需要按坐标排序</p><div class="language-shell line-numbers-mode" data-ext="shell" data-title="shell"><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">samtools</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> sort</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> fixmate_WXS-Case1.subsample.bam</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076;"> -o</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> sorted_fixmate_WXS-Case1.subsample.bam</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076;"> -@</span><span style="--shiki-light:#2F798A;--shiki-dark:#4C9A91;"> 20</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div></li><li><p>去除重复项</p><div class="language-shell line-numbers-mode" data-ext="shell" data-title="shell"><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">samtools</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> markdup</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076;"> -r</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> sorted_fixmate_WXS-Case1.subsample.bam</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> dedup_WXS-Case1.subsample.bam</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076;"> -@</span><span style="--shiki-light:#2F798A;--shiki-dark:#4C9A91;"> 20</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div></li></ul><hr><h3 id="_3-标记pcr重复" tabindex="-1"><a class="header-anchor" href="#_3-标记pcr重复"><span>3. 标记PCR重复</span></a></h3><ul><li>和去除重复项差不多，只是不需要加 <code>-r</code> 参数<div class="language-shell line-numbers-mode" data-ext="shell" data-title="shell"><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">samtools</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> markdup</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> sorted_fixmate_WXS-Case1.subsample.bam</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> markdup_WXS-Case1.subsample.bam</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076;"> -@</span><span style="--shiki-light:#2F798A;--shiki-dark:#4C9A91;"> 20</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div></li></ul><h3 id="_4-简单统计三个-bam" tabindex="-1"><a class="header-anchor" href="#_4-简单统计三个-bam"><span>4. 简单统计三个 <code>.bam</code></span></a></h3><div class="language-shell line-numbers-mode" data-ext="shell" data-title="shell"><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">samtools</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> flagstat</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> sorted_WXS-Case1.subsample.bam</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;"> &gt;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> sorted_WXS-Case1.subsample.flagstat</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">samtools</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> flagstat</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> dedup_WXS-Case1.subsample.bam</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;"> &gt;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> dedup_WXS-Case1.subsample.flagstat</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">samtools</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> flagstat</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> markdup_WXS-Case1.subsample.bam</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;"> &gt;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> markdup_WXS-Case1.subsample.flagstat</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_5-添加信息" tabindex="-1"><a class="header-anchor" href="#_5-添加信息"><span>5. 添加信息</span></a></h3><div class="language-shell line-numbers-mode" data-ext="shell" data-title="shell"><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">samtools</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> addreplacerg</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076;"> -r</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> ID:Case1_Run1</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076;"> -r</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> LB:WXS</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076;"> -r</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> PL:Illumina</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076;"> -r</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> SM:Case1</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076;"> \\</span></span>
<span class="line"><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">                      sorted_WXS-Case1.subsample.bam</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076;"> \\</span></span>
<span class="line"><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076;">                      -o</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> RG_sorted_WXS-Case1.subsample.bam</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076;"> -@</span><span style="--shiki-light:#2F798A;--shiki-dark:#4C9A91;"> 20</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,39)]))}const p=i(n,[["render",t],["__file","index.html.vue"]]),r=JSON.parse(`{"path":"/article/0xhffwci/","title":"NGS Lab5 (基因组重测序-SNV calling)","lang":"zh-CN","frontmatter":{"title":"NGS Lab5 (基因组重测序-SNV calling)","tags":["samtools","GATK","IGV"],"createTime":"2024/11/01 21:41:53","permalink":"/article/0xhffwci/","description":"相关软件 Samtools GATK IGV 安装 使用 anaconda 创建虚拟环境 进入虚拟环境 安装相关软件 查看软件版本 使用 micromamba 创建虚拟环境 进入虚拟环境 安装相关软件 查看软件版本 任务一 数据： /public/workspace/shaojf/Course/NGS/DataSets/Lab5/WXS-Case1.s...","head":[["meta",{"property":"og:url","content":"https://meteor-oxalis3.com/article/0xhffwci/"}],["meta",{"property":"og:site_name","content":"Meteor03's Oxalis Garden"}],["meta",{"property":"og:title","content":"NGS Lab5 (基因组重测序-SNV calling)"}],["meta",{"property":"og:description","content":"相关软件 Samtools GATK IGV 安装 使用 anaconda 创建虚拟环境 进入虚拟环境 安装相关软件 查看软件版本 使用 micromamba 创建虚拟环境 进入虚拟环境 安装相关软件 查看软件版本 任务一 数据： /public/workspace/shaojf/Course/NGS/DataSets/Lab5/WXS-Case1.s..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"article:tag","content":"samtools"}],["meta",{"property":"article:tag","content":"GATK"}],["meta",{"property":"article:tag","content":"IGV"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"NGS Lab5 (基因组重测序-SNV calling)\\",\\"image\\":[\\"\\"],\\"dateModified\\":null,\\"author\\":[]}"]]},"headers":[{"level":2,"title":"相关软件","slug":"相关软件","link":"#相关软件","children":[]},{"level":2,"title":"安装","slug":"安装","link":"#安装","children":[{"level":3,"title":"使用 anaconda","slug":"使用-anaconda","link":"#使用-anaconda","children":[]},{"level":3,"title":"使用 micromamba","slug":"使用-micromamba","link":"#使用-micromamba","children":[]}]},{"level":2,"title":"任务一","slug":"任务一","link":"#任务一","children":[]},{"level":2,"title":"参考代码","slug":"参考代码","link":"#参考代码","children":[{"level":3,"title":"0. 准备工作","slug":"_0-准备工作","link":"#_0-准备工作","children":[]},{"level":3,"title":"1. 将 .sam 转 .bam 并按坐标排序","slug":"_1-将-sam-转-bam-并按坐标排序","link":"#_1-将-sam-转-bam-并按坐标排序","children":[]},{"level":3,"title":"2. 删除PCR重复","slug":"_2-删除pcr重复","link":"#_2-删除pcr重复","children":[]},{"level":3,"title":"3. 标记PCR重复","slug":"_3-标记pcr重复","link":"#_3-标记pcr重复","children":[]},{"level":3,"title":"4. 简单统计三个 .bam","slug":"_4-简单统计三个-bam","link":"#_4-简单统计三个-bam","children":[]},{"level":3,"title":"5. 添加信息","slug":"_5-添加信息","link":"#_5-添加信息","children":[]}]}],"readingTime":{"minutes":1.87,"words":560},"git":{},"autoDesc":true,"filePathRelative":"NGS/NGS_Lab5.md","categoryList":[{"id":"2cdfc8","sort":10002,"name":"NGS"}]}`);export{p as comp,r as data};
