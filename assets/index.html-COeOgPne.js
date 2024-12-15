import{_ as i,c as e,a,o as l}from"./app-Csvmzp9p.js";const n={};function t(d,s){return l(),e("div",null,s[0]||(s[0]=[a(`<p>( 这里以当时最新发布的版本 4.6.1.0 为例, 以后可根据最新版本更新相关名称 )</p><p><a href="https://gatk.broadinstitute.org/hc/en-us/articles/360035889851--How-to-Install-and-use-Conda-for-GATK4" target="_blank" rel="noopener noreferrer"><code>GATK4</code>官方</a> 不推荐直接使用 <code>bioconda</code> 里面的包</p><blockquote><p>Some tools in GATK4, like the gCNV pipeline and the new deep learning variant filtering tools, require extensive Python dependencies. To avoid having to worry about managing these dependencies, we recommend using the GATK4 docker container, which comes with everything pre-installed, as explained here. If you are running GATK4 on a server and/or cannot use the Docker image, we recommend using the Conda package manager as a backup solution. The Conda package manager comes with all the dependencies you need, so you do not need to install everything separately. Both Conda and Docker are intended to solve the same problem, but one of the big differences/benefits of Conda is that you can use Conda without having root access. Conda should be easy to install if you follow these steps.</p></blockquote><blockquote><p>Do not confuse the above mentioned GATK conda environment setup with this bioconda gatk installation. The current version of the bioconda installation of GATK does not set up the conda environment used for the GATK python tools, so that must still be set up manually.</p></blockquote><h2 id="使用-anaconda" tabindex="-1"><a class="header-anchor" href="#使用-anaconda"><span>使用 <code>anaconda</code></span></a></h2><ol><li>下载官方 <a href="https://github.com/broadinstitute/gatk/releases/" target="_blank" rel="noopener noreferrer">Github Release</a>的 zip包</li></ol><div class="language-shell line-numbers-mode" data-ext="shell" data-title="shell"><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">wget</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> https://github.com/broadinstitute/gatk/releases/download/4.6.1.0/gatk-4.6.1.0.zip</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><ol start="2"><li>解压并进入</li></ol><div class="language-shell line-numbers-mode" data-ext="shell" data-title="shell"><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">unzip</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> gatk-4.6.1.0.zip</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965;">cd</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> gatk-4.6.1.0</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><ol start="3"><li><p>通过 yaml 文件创建虚拟环境</p><ul><li>(可选) 更换国内镜像</li></ul><div class="language-shell line-numbers-mode" data-ext="shell" data-title="shell"><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;"># 我选的南京大学 conda-forge 镜像源</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">sed</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;"> &quot;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">s/conda-forge:://g</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&quot;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> gatkcondaenv.yml</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;"> |</span><span style="--shiki-light:#59873A;--shiki-dark:#80A665;"> sed</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;"> &quot;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">s/conda-forge://g</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&quot;</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;"> |</span><span style="--shiki-light:#59873A;--shiki-dark:#80A665;"> sed</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;"> &quot;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">s/- conda-forge/- https:\\/\\/mirror.nju.edu.cn\\/anaconda\\/cloud\\/conda-forge/g</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&quot;</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;"> &gt;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> my_gatkcondaenv.yml</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>安装依赖</li></ul><div class="language-shell line-numbers-mode" data-ext="shell" data-title="shell"><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;"># 如果你跳过了上一步</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">conda</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> env</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> create</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076;"> -n</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> GATK4.6.1.0</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076;"> -f</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> gatkcondaenv.yml</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;"># 如果你做了上一步</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">conda</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> env</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> create</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076;"> -n</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> GATK4.6.1.0</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076;"> -f</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> my_gatkcondaenv.yml</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>链接 <code>gatk</code> 二进制文件</p><div class="language-shell line-numbers-mode" data-ext="shell" data-title="shell"><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">ln</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076;"> -s</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> $(</span><span style="--shiki-light:#998418;--shiki-dark:#B8A965;">pwd</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">)</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&quot;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">/gatk</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&quot;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> ~/anaconda3/envs/GATK4.6.1.0/bin</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;"># 所以第2步解压后生成的文件夹还是要保留的</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>检查安装</p><ul><li>激活虚拟环境 <code>GATK4.6.1.0</code></li></ul><div class="language-shell line-numbers-mode" data-ext="shell" data-title="shell"><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">conda</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> activate</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> GATK4.6.1.0</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><ul><li>看看用的是不是自己安的 <code>GATK4</code></li></ul><div class="language-shell line-numbers-mode" data-ext="shell" data-title="shell"><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965;">which</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> gatk</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;"># /home/saturn/anaconda3/envs/GATK4.6.1.0/bin/gatk</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>查看版本</li></ul><div class="language-shell line-numbers-mode" data-ext="shell" data-title="shell"><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">gatk</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076;"> --version</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;"># The Genome Analysis Toolkit (GATK) v4.6.1.0</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;"># HTSJDK Version: 4.1.3</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;"># Picard Version: 3.3.0</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ol><h2 id="使用-micromamba" tabindex="-1"><a class="header-anchor" href="#使用-micromamba"><span>使用 <code>micromamba</code></span></a></h2><ol><li>下载官方 <a href="https://github.com/broadinstitute/gatk/releases/" target="_blank" rel="noopener noreferrer">Github Release</a>的 zip包</li></ol><div class="language-shell line-numbers-mode" data-ext="shell" data-title="shell"><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">wget</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> https://github.com/broadinstitute/gatk/releases/download/4.6.1.0/gatk-4.6.1.0.zip</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><ol start="2"><li>解压并进入</li></ol><div class="language-shell line-numbers-mode" data-ext="shell" data-title="shell"><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">unzip</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> gatk-4.6.1.0.zip</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965;">cd</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> gatk-4.6.1.0</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><ol start="3"><li><p>通过 yaml 文件创建虚拟环境</p><ul><li>使用 <code>micromamba</code> 必须修改一下 yaml 文件 ( 不能使用 &quot;conda-forge::&quot; 这种写法，否则会一直卡住 )</li></ul><div class="language-shell line-numbers-mode" data-ext="shell" data-title="shell"><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;"># 改都改了，顺便也换个源吧～</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;"># 我还是选的南京大学 conda-forge 镜像源</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">sed</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;"> &quot;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">s/conda-forge:://g</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&quot;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> gatkcondaenv.yml</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;"> |</span><span style="--shiki-light:#59873A;--shiki-dark:#80A665;"> sed</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;"> &quot;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">s/conda-forge://g</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&quot;</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;"> |</span><span style="--shiki-light:#59873A;--shiki-dark:#80A665;"> sed</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;"> &quot;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">s/- conda-forge/- https:\\/\\/mirror.nju.edu.cn\\/anaconda\\/cloud\\/conda-forge/g</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&quot;</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;"> &gt;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> my_gatkcondaenv.yml</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>安装依赖</li></ul><div class="language-shell line-numbers-mode" data-ext="shell" data-title="shell"><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">micromamba</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> env</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> create</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076;"> -n</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> GATK4.6.1.0</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076;"> -f</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> my_gatkcondaenv.yml</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div></li><li><p>链接 <code>gatk</code> 二进制文件</p><div class="language-shell line-numbers-mode" data-ext="shell" data-title="shell"><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">ln</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076;"> -s</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> $(</span><span style="--shiki-light:#998418;--shiki-dark:#B8A965;">pwd</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">)</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&quot;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">/gatk</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&quot;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> ~/micromamba/envs/GATK4.6.1.0/bin</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;"># 所以第2步解压后生成的文件夹还是要保留的</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>检查安装</p><ul><li>激活虚拟环境 <code>GATK4.6.1.0</code></li></ul><div class="language-shell line-numbers-mode" data-ext="shell" data-title="shell"><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">micromamba</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> activate</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> GATK4.6.1.0</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><ul><li>看看用的是不是自己安的 <code>GATK4</code></li></ul><div class="language-shell line-numbers-mode" data-ext="shell" data-title="shell"><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965;">which</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> gatk</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;"># /public/workspace/stu22230111/micromamba/envs/GATK4.6.1.0/bin/gatk</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>查看版本</li></ul><div class="language-shell line-numbers-mode" data-ext="shell" data-title="shell"><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">gatk</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076;"> --version</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;"># The Genome Analysis Toolkit (GATK) v4.6.1.0</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;"># HTSJDK Version: 4.1.3</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;"># Picard Version: 3.3.0</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ol><h2 id="使用-singularity" tabindex="-1"><a class="header-anchor" href="#使用-singularity"><span>使用 <code>singularity</code></span></a></h2><ul><li><p>注意！目前国内无法直接访问 dockerhub，相关镜像网站也关闭相应服务。解决办法如下：</p><ol><li>使用 <a href="https://github.com/cmliu/CF-Workers-docker.io?tab=readme-ov-file#%E7%AC%AC%E4%B8%89%E6%96%B9-dockerhub-%E9%95%9C%E5%83%8F%E6%9C%8D%E5%8A%A1" target="_blank" rel="noopener noreferrer">第三方 dockerhub 镜像网站</a></li><li><a href="https://github.com/cmliu/CF-Workers-docker.io" target="_blank" rel="noopener noreferrer">自建 dockerhub 镜像网站</a></li><li>配置代理 (懂的都懂)</li></ol></li></ul><div class="language-shell line-numbers-mode" data-ext="shell" data-title="shell"><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;"># 在可以正常访问 dockerhub 网站的网络环境下可以直接运行</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">singularity</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> pull</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> docker://broadinstitute/gatk:latest</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;"># 国内网络环境 (镜像网址替换为自己搭建或者第三方网站的域名，无需添加 https:// )</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;"># 例如：singularity pull docker://dockerpull.org/broadinstitute/gatk:latest</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">singularity</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> pull</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> docker://镜像网址/broadinstitute/gatk:latest</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>耐心等待后，当前文件夹会有一个 <code>gatk_latest.sif</code> 镜像文件</li></ul><div class="language-shell line-numbers-mode" data-ext="shell" data-title="shell"><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;"># 进入镜像</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">singularity</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> shell</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> ./gatk_latest.sif</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;"># 当你的 shell 前面转变为 \`Singularity&gt;\` 提示时，就说明成功进入镜像了</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;"># Singularity&gt;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>查看版本</li></ul><div class="language-shell line-numbers-mode" data-ext="shell" data-title="shell"><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">gatk</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076;"> --version</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;"># Singularity&gt; gatk --version</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;"># Using GATK jar /gatk/gatk-package-4.6.1.0-local.jar</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;"># Running:</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">#     java -Dsamjdk.use_async_io_read_samtools=false -Dsamjdk.use_async_io_write_samtools=true -Dsamjdk.use_async_io_write_tribble=false -Dsamjdk.compression_level=2 -jar /gatk/gatk-package-4.6.1.0-local.jar --version</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;"># The Genome Analysis Toolkit (GATK) v4.6.1.0</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;"># HTSJDK Version: 4.1.3</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;"># Picard Version: 3.3.0</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,23)]))}const r=i(n,[["render",t],["__file","index.html.vue"]]),p=JSON.parse(`{"path":"/NGS/fxwe3xh4/","title":"GATK4 安装方法","lang":"zh-CN","frontmatter":{"title":"GATK4 安装方法","createTime":"2024/11/06 21:05:19","permalink":"/NGS/fxwe3xh4/","description":"( 这里以当时最新发布的版本 4.6.1.0 为例, 以后可根据最新版本更新相关名称 ) GATK4官方 不推荐直接使用 bioconda 里面的包 Some tools in GATK4, like the gCNV pipeline and the new deep learning variant filtering tools, require...","head":[["meta",{"property":"og:url","content":"https://meteor-oxalis3.com/NGS/fxwe3xh4/"}],["meta",{"property":"og:site_name","content":"Meteor03's Oxalis Garden"}],["meta",{"property":"og:title","content":"GATK4 安装方法"}],["meta",{"property":"og:description","content":"( 这里以当时最新发布的版本 4.6.1.0 为例, 以后可根据最新版本更新相关名称 ) GATK4官方 不推荐直接使用 bioconda 里面的包 Some tools in GATK4, like the gCNV pipeline and the new deep learning variant filtering tools, require..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"GATK4 安装方法\\",\\"image\\":[\\"\\"],\\"dateModified\\":null,\\"author\\":[]}"]]},"headers":[{"level":2,"title":"使用 anaconda","slug":"使用-anaconda","link":"#使用-anaconda","children":[]},{"level":2,"title":"使用 micromamba","slug":"使用-micromamba","link":"#使用-micromamba","children":[]},{"level":2,"title":"使用 singularity","slug":"使用-singularity","link":"#使用-singularity","children":[]}],"readingTime":{"minutes":3.1,"words":929},"git":{},"autoDesc":true,"filePathRelative":"notes/NGS/gatk.md"}`);export{r as comp,p as data};
