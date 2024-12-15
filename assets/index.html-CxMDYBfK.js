import{_ as i,c as a,a as e,o as n}from"./app-Dr5Jgm_i.js";const l={};function t(p,s){return n(),a("div",null,s[0]||(s[0]=[e(`<h2 id="官方指南" tabindex="-1"><a class="header-anchor" href="#官方指南"><span>官方指南</span></a></h2><p><a href="https://mamba.readthedocs.io/en/latest/user_guide/micromamba.html" target="_blank" rel="noopener noreferrer">micromamba 官方用户指南</a></p><h2 id="下载" tabindex="-1"><a class="header-anchor" href="#下载"><span>下载</span></a></h2><ul><li>根据你的系统架构来选择对应命令</li></ul><div class="language-shell line-numbers-mode" data-ext="shell" data-title="shell"><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;"># Linux Intel (x86_64):</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">curl</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076;"> -Ls</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> https://micro.mamba.pm/api/micromamba/linux-64/latest</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;"> |</span><span style="--shiki-light:#59873A;--shiki-dark:#80A665;"> tar</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076;"> -xvj</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> bin/micromamba</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;"># Linux ARM64:</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">curl</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076;"> -Ls</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> https://micro.mamba.pm/api/micromamba/linux-aarch64/latest</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;"> |</span><span style="--shiki-light:#59873A;--shiki-dark:#80A665;"> tar</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076;"> -xvj</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> bin/micromamba</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;"># Linux Power:</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">curl</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076;"> -Ls</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> https://micro.mamba.pm/api/micromamba/linux-ppc64le/latest</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;"> |</span><span style="--shiki-light:#59873A;--shiki-dark:#80A665;"> tar</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076;"> -xvj</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> bin/micromamba</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;"># macOS Intel (x86_64):</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">curl</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076;"> -Ls</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> https://micro.mamba.pm/api/micromamba/osx-64/latest</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;"> |</span><span style="--shiki-light:#59873A;--shiki-dark:#80A665;"> tar</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076;"> -xvj</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> bin/micromamba</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;"># macOS Silicon/M1 (ARM64):</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">curl</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076;"> -Ls</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> https://micro.mamba.pm/api/micromamba/osx-arm64/latest</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;"> |</span><span style="--shiki-light:#59873A;--shiki-dark:#80A665;"> tar</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076;"> -xvj</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> bin/micromamba</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>不知道选什么的可以查看一下</li></ul><div class="language-shell line-numbers-mode" data-ext="shell" data-title="shell"><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">uname</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076;"> -mo</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;"># 我的输出是:</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;"># x86_64 GNU/Linux</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>发现是 <code>Linux x86_64</code>，所以选第一行命令</p><div class="language-shell line-numbers-mode" data-ext="shell" data-title="shell"><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;"># 下载会有点慢, 还请耐心等待</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">curl</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076;"> -Ls</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> https://micro.mamba.pm/api/micromamba/linux-64/latest</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;"> |</span><span style="--shiki-light:#59873A;--shiki-dark:#80A665;"> tar</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076;"> -xvj</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> bin/micromamba</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="移动" tabindex="-1"><a class="header-anchor" href="#移动"><span>移动</span></a></h2><ul><li>移动 <code>micromamba</code> 二进制文件到你的 <code>$PATH</code> 文件夹之一 (或者自己添加一个新的 <code>$PATH</code>)</li></ul><div class="language-shell line-numbers-mode" data-ext="shell" data-title="shell"><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;"># 保险起见, 先新建文件夹</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">mkdir</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076;"> -p</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> ~/.local/bin</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;"># 开始移动</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">mv</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> ./bin/micromamba</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> ~/.local/bin</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>测试 <code>micromamba</code> 是否已经添加到你的 <code>$PATH</code> 里面了</li></ul><div class="language-shell line-numbers-mode" data-ext="shell" data-title="shell"><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">micromamba</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076;"> --version</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;"># 我的输出是:</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;"># 2.0.2</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="配置" tabindex="-1"><a class="header-anchor" href="#配置"><span>配置</span></a></h2><ul><li>初始化shell</li></ul><div class="language-shell line-numbers-mode" data-ext="shell" data-title="shell"><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">micromamba</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> shell</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> init</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076;"> -s</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> bash</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076;"> -r</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> ~/micromamba</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965;">source</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> ~/.bashrc</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>这样 shell 就初始化好了，主目录下的 <code>micromamba</code> 文件夹存放虚拟环境等相关文件</li></ul><h2 id="测试" tabindex="-1"><a class="header-anchor" href="#测试"><span>测试</span></a></h2><ul><li>新建虚拟环境</li></ul><div class="language-shell line-numbers-mode" data-ext="shell" data-title="shell"><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">micromamba</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> env</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> create</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076;"> -n</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> GATK4</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><ul><li>进入虚拟环境</li></ul><div class="language-shell line-numbers-mode" data-ext="shell" data-title="shell"><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">micromamba</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> activate</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> GATK4</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>可以发现我们的 shell 多了个虚拟环境提示 <code>(GATK4)</code></p><div class="language- line-numbers-mode" data-ext="" data-title=""><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span># 默认状态下的 bash 会显示:</span></span>
<span class="line"><span># (GATK4) [saturn@Debian ~]$</span></span>
<span class="line"><span></span></span>
<span class="line"><span># 假如你装了 starship , 默认会显示:</span></span>
<span class="line"><span># ~ via 🅒 GATK4 </span></span>
<span class="line"><span># ❯</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>装个 <code>GATK4</code> 试试</li></ul><div class="language-shell line-numbers-mode" data-ext="shell" data-title="shell"><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">micromamba</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> install</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076;"> -c</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> bioconda</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076;"> -c</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> conda-forge</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> gatk4</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>输入 <code>Y</code> 后回车</p><ul><li>看看 <code>GATK</code> 版本</li></ul><div class="language-shell line-numbers-mode" data-ext="shell" data-title="shell"><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">gatk</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076;"> --version</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;"># 我的输出是:</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;"># Using GATK jar /public/workspace/stu22230111/micromamba/envs/gatk4/share/gatk4-4.5.0.0-0/gatk-package-4.5.0.0-local.jar</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;"># Running:</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">#     java -Dsamjdk.use_async_io_read_samtools=false -Dsamjdk.use_async_io_write_samtools=true -Dsamjdk.use_async_io_write_tribble=false -Dsamjdk.compression_level=2 -jar /public/workspace/stu22230111/micromamba/envs/gatk4/share/gatk4-4.5.0.0-0/gatk-package-4.5.0.0-local.jar --version</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;"># The Genome Analysis Toolkit (GATK) v4.5.0.0</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;"># HTSJDK Version: 4.1.0</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;"># Picard Version: 3.1.1</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;"># 说明安装成功啦!</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="进阶" tabindex="-1"><a class="header-anchor" href="#进阶"><span>进阶</span></a></h2><ul><li><p>方便以后安装软件，可设置默认频道</p></li><li><p>创建 <code>.mambarc</code></p></li></ul><div class="language-shell line-numbers-mode" data-ext="shell" data-title="shell"><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">vim</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> ~/.mambarc</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><ul><li>并且修改内容为</li></ul><div class="language-yml line-numbers-mode" data-ext="yml" data-title="yml"><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965;">channels</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">:</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">  -</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> bioconda</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">  -</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> conda-forge</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>以后安装大部分生物软件就不用再指定频道 <code>-c bioconda</code> 和 <code>-c conda-forge</code> 啦～</li></ul><h2 id="附-常用命令" tabindex="-1"><a class="header-anchor" href="#附-常用命令"><span>附：常用命令</span></a></h2><div class="language-shell line-numbers-mode" data-ext="shell" data-title="shell"><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;"># 新建虚拟环境</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">micromamba</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> env</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> create</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076;"> -n</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> ENV_NAME</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;"># 激活虚拟环境</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">micromamba</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> activate</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> ENV_NAME</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;"># 退出当前虚拟环境</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">micromamba</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> deactivate</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;"># 列出所有虚拟环境</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">micromamba</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> env</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> list</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;"># 安装软件</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">micromamba</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> install</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076;"> -c</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> CHANNEL_NAME</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> SOFTWARE_NAME</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;"># 卸载软件</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">micromamba</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> remove</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> SOFTWARE_NAME</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;"># 更新当前环境内指定软件</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">micromamba</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> update</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> SOFTWARE_NAME</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;"># 更新当前环境内所有软件</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">micromamba</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> update</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076;"> --all</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;"># 更新 micromamba 软件本身</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">micromamba</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> self-update</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,38)]))}const d=i(l,[["render",t],["__file","index.html.vue"]]),r=JSON.parse(`{"path":"/article/uk2rbbww/","title":"Micromamba 教程","lang":"zh-CN","frontmatter":{"title":"Micromamba 教程","tags":["Linux","micromamba"],"createTime":"2024/10/21 19:33:31","permalink":"/article/uk2rbbww/","description":"官方指南 micromamba 官方用户指南 下载 根据你的系统架构来选择对应命令 不知道选什么的可以查看一下 发现是 Linux x86_64，所以选第一行命令 移动 移动 micromamba 二进制文件到你的 $PATH 文件夹之一 (或者自己添加一个新的 $PATH) 测试 micromamba 是否已经添加到你的 $PATH 里面了 配置 初...","head":[["meta",{"property":"og:url","content":"https://meteor-oxalis3.com/article/uk2rbbww/"}],["meta",{"property":"og:site_name","content":"Meteor03's Oxalis Garden"}],["meta",{"property":"og:title","content":"Micromamba 教程"}],["meta",{"property":"og:description","content":"官方指南 micromamba 官方用户指南 下载 根据你的系统架构来选择对应命令 不知道选什么的可以查看一下 发现是 Linux x86_64，所以选第一行命令 移动 移动 micromamba 二进制文件到你的 $PATH 文件夹之一 (或者自己添加一个新的 $PATH) 测试 micromamba 是否已经添加到你的 $PATH 里面了 配置 初..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"article:tag","content":"Linux"}],["meta",{"property":"article:tag","content":"micromamba"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Micromamba 教程\\",\\"image\\":[\\"\\"],\\"dateModified\\":null,\\"author\\":[]}"]]},"headers":[{"level":2,"title":"官方指南","slug":"官方指南","link":"#官方指南","children":[]},{"level":2,"title":"下载","slug":"下载","link":"#下载","children":[]},{"level":2,"title":"移动","slug":"移动","link":"#移动","children":[]},{"level":2,"title":"配置","slug":"配置","link":"#配置","children":[]},{"level":2,"title":"测试","slug":"测试","link":"#测试","children":[]},{"level":2,"title":"进阶","slug":"进阶","link":"#进阶","children":[]},{"level":2,"title":"附：常用命令","slug":"附-常用命令","link":"#附-常用命令","children":[]}],"readingTime":{"minutes":1.95,"words":584},"git":{},"autoDesc":true,"filePathRelative":"Linux/micromamba.md","categoryList":[{"id":"edc9f0","sort":10000,"name":"Linux"}]}`);export{d as comp,r as data};
