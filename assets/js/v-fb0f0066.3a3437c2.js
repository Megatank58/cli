"use strict";(self.webpackChunksapphire_cli_guide=self.webpackChunksapphire_cli_guide||[]).push([[170],{4:(a,n,e)=>{e.r(n),e.d(n,{data:()=>s});const s={key:"v-fb0f0066",path:"/guide/getting-started.html",title:"Getting Started",lang:"en-US",frontmatter:{title:"Getting Started",description:"Get Started with Sapphire CLI",next:"/guide/generating-components.md"},excerpt:"",headers:[{level:2,title:"Installation",slug:"installation",children:[]},{level:2,title:"Creating a bot",slug:"creating-a-bot",children:[]}],filePathRelative:"guide/getting-started.md",git:{updatedTime:1633902474e3,contributors:[{name:"Enes Genç",email:"enesgenc4661@gmail.com",commits:1}]}}},72:(a,n,e)=>{e.r(n),e.d(n,{default:()=>d});var s=e(252);const t=(0,s._)("h1",{id:"getting-started",tabindex:"-1"},[(0,s._)("a",{class:"header-anchor",href:"#getting-started","aria-hidden":"true"},"#"),(0,s.Uk)(" Getting Started")],-1),o=(0,s._)("h2",{id:"installation",tabindex:"-1"},[(0,s._)("a",{class:"header-anchor",href:"#installation","aria-hidden":"true"},"#"),(0,s.Uk)(" Installation")],-1),p=(0,s._)("div",{class:"language-bash ext-sh"},[(0,s._)("pre",{class:"language-bash"},[(0,s._)("code",null,[(0,s.Uk)("$ "),(0,s._)("span",{class:"token function"},"yarn"),(0,s.Uk)(" global "),(0,s._)("span",{class:"token function"},"add"),(0,s.Uk)(" @sapphire/cli\n")])])],-1),i=(0,s._)("div",{class:"language-bash ext-sh"},[(0,s._)("pre",{class:"language-bash"},[(0,s._)("code",null,[(0,s.Uk)("$ "),(0,s._)("span",{class:"token function"},"npm"),(0,s.Uk)(),(0,s._)("span",{class:"token function"},"install"),(0,s.Uk)(" @sapphire/cli -g\n")])])],-1),c=(0,s.uE)('<div class="custom-container warning"><p class="custom-container-title">WARNING</p><p>You can install the CLI as a devDependency, but we recommend installing it globally.</p></div><h2 id="creating-a-bot" tabindex="-1"><a class="header-anchor" href="#creating-a-bot" aria-hidden="true">#</a> Creating a bot</h2><div class="custom-container tip"><p class="custom-container-title">TIP</p><p>If you want to use the CLI on an existing project, skip this part.</p></div><div class="language-bash ext-sh"><pre class="language-bash"><code>$ sapphire new\n</code></pre></div><p>Run this command to start.</p><div class="language-bash ext-sh"><pre class="language-bash"><code>$ sapphire new\n? What&#39;s the name of your project? › my-sapphire-bot\n</code></pre><div class="highlight-lines"><br><div class="highlight-line"> </div></div></div><p>Choose a name for your project, that will also be the folder name for your project.<br> Defaults to <code>my-sapphire-bot</code>.</p><div class="language-bash ext-sh"><pre class="language-bash"><code>$ sapphire new\n✔ What&#39;s the name of your project? … my-sapphire-bot\n? Choose a language <span class="token keyword">for</span> your project › - Use arrow-keys. Return to submit.\n❯   TypeScript <span class="token punctuation">(</span>Recommended<span class="token punctuation">)</span>\n    JavaScript\n</code></pre><div class="highlight-lines"><br><br><div class="highlight-line"> </div><div class="highlight-line"> </div><div class="highlight-line"> </div></div></div><p>Choose a language for your project, we will choose <strong>TypeScript</strong> in this guide.</p><div class="language-bash ext-sh"><pre class="language-bash"><code>$ sapphire new\n✔ What&#39;s the name of your project? … my-sapphire-bot\n✔ Choose a language <span class="token keyword">for</span> your project › TypeScript <span class="token punctuation">(</span>Recommended<span class="token punctuation">)</span>\n? Choose a template <span class="token keyword">for</span> your project › - Use arrow-keys. Return to submit.\n❯   Default template <span class="token punctuation">(</span>Recommended<span class="token punctuation">)</span>\n    with Docker\n</code></pre><div class="highlight-lines"><br><br><br><div class="highlight-line"> </div><div class="highlight-line"> </div><div class="highlight-line"> </div></div></div><p>Choose a template for your project, we will go with the <strong>default template</strong> in this guide.</p><div class="language-bash ext-sh"><pre class="language-bash"><code>$ sapphire new\n✔ What&#39;s the name of your project? … my-sapphire-bot\n✔ Choose a language <span class="token keyword">for</span> your project › TypeScript <span class="token punctuation">(</span>Recommended<span class="token punctuation">)</span>\n✔ Choose a template <span class="token keyword">for</span> your project › Default template <span class="token punctuation">(</span>Recommended<span class="token punctuation">)</span>\n? What <span class="token function">format</span> <span class="token keyword">do</span> you want your config <span class="token function">file</span> to be in? › - Use arrow-keys. Return to submit.\n    JSON\n❯   YAML\n</code></pre><div class="highlight-lines"><br><br><br><br><div class="highlight-line"> </div><div class="highlight-line"> </div><div class="highlight-line"> </div></div></div><p>Choose a format for your config file, we will choose <strong>YAML</strong> in this guide. <br> This config file is for Sapphire CLI, read more about it here.</p><div class="language-bash ext-sh"><pre class="language-bash"><code>$ sapphire new\n✔ What&#39;s the name of your project? … my-sapphire-bot\n✔ Choose a language <span class="token keyword">for</span> your project › TypeScript <span class="token punctuation">(</span>Recommended<span class="token punctuation">)</span>\n✔ Choose a template <span class="token keyword">for</span> your project › Default template <span class="token punctuation">(</span>Recommended<span class="token punctuation">)</span>\n✔ What <span class="token function">format</span> <span class="token keyword">do</span> you want your config <span class="token function">file</span> to be in? › YAML\n? What package manager <span class="token keyword">do</span> you want to use? › - Use arrow-keys. Return to submit.\n❯   Yarn <span class="token punctuation">(</span>Recommended<span class="token punctuation">)</span>\n    <span class="token function">npm</span>\n</code></pre><div class="highlight-lines"><br><br><br><br><br><div class="highlight-line"> </div><div class="highlight-line"> </div><div class="highlight-line"> </div></div></div><p>Choose a package manager for your project, we will choose <strong>Yarn</strong> in this guide.</p><div class="language-bash ext-sh"><pre class="language-bash"><code>$ sapphire new\n✔ What&#39;s the name of your project? … my-sapphire-bot\n✔ Choose a language <span class="token keyword">for</span> your project › TypeScript <span class="token punctuation">(</span>Recommended<span class="token punctuation">)</span>\n✔ Choose a template <span class="token keyword">for</span> your project › Default template <span class="token punctuation">(</span>Recommended<span class="token punctuation">)</span>\n✔ What <span class="token function">format</span> <span class="token keyword">do</span> you want your config <span class="token function">file</span> to be in? › YAML\n✔ What package manager <span class="token keyword">do</span> you want to use? › Yarn <span class="token punctuation">(</span>Recommended<span class="token punctuation">)</span>\n? Do you want to create a <span class="token function">git</span> repository <span class="token keyword">for</span> this project? › <span class="token punctuation">(</span>y/N<span class="token punctuation">)</span>\n</code></pre><div class="highlight-lines"><br><br><br><br><br><br><div class="highlight-line"> </div></div></div><p>Lastly, if you want to initialize a git repository in your project, type <code>y</code> and enter. <br> If you don&#39;t want a git repository in your project, just enter.</p><p>Now wait for the CLI to create your project and install the dependencies. This should take ~2 minutes.</p><div class="language-bash ext-sh"><pre class="language-bash"><code>$ sapphire new\n✔ What&#39;s the name of your project? … my-sapphire-bot\n✔ Choose a language <span class="token keyword">for</span> your project › TypeScript <span class="token punctuation">(</span>Recommended<span class="token punctuation">)</span>\n✔ Choose a template <span class="token keyword">for</span> your project › Default template <span class="token punctuation">(</span>Recommended<span class="token punctuation">)</span>\n✔ What <span class="token function">format</span> <span class="token keyword">do</span> you want your config <span class="token function">file</span> to be in? › YAML\n✔ What package manager <span class="token keyword">do</span> you want to use? › Yarn <span class="token punctuation">(</span>Recommended<span class="token punctuation">)</span>\n✔ Do you want to create a <span class="token function">git</span> repository <span class="token keyword">for</span> this project? … no\n✔ Cloning the repository\n✔ Setting up the project\n✔ Installing dependencies using Yarn\nDone<span class="token operator">!</span>\n</code></pre></div><p>Congratulations, you created a bot using Sapphire CLI. Read the README to see what you need to do before running it.</p>',20),l=(0,s._)("div",{class:"language-bash ext-sh"},[(0,s._)("pre",{class:"language-bash"},[(0,s._)("code",null,[(0,s.Uk)("$ "),(0,s._)("span",{class:"token function"},"cat"),(0,s.Uk)(" my-sapphire-bot/README.md\n"),(0,s._)("span",{class:"token comment"},"# TypeScript Sapphire Bot example"),(0,s.Uk)("\n\nThis is a basic setup of a Discord bot using the "),(0,s._)("span",{class:"token punctuation"},"["),(0,s.Uk)("sapphire framework"),(0,s._)("span",{class:"token punctuation"},"]"),(0,s._)("span",{class:"token punctuation"},"["),(0,s.Uk)("sapphire"),(0,s._)("span",{class:"token punctuation"},"]"),(0,s.Uk)(" written "),(0,s._)("span",{class:"token keyword"},"in"),(0,s.Uk)(" TypeScript\n"),(0,s._)("span",{class:"token punctuation"},".."),(0,s.Uk)(".\n")])])],-1),r=(0,s._)("div",{class:"language-bash ext-sh"},[(0,s._)("pre",{class:"language-bash"},[(0,s._)("code",null,[(0,s.Uk)("$ Get-Content ."),(0,s._)("span",{class:"token punctuation"},"\\"),(0,s.Uk)("my-sapphire-bot"),(0,s._)("span",{class:"token punctuation"},"\\"),(0,s.Uk)("README.md\n"),(0,s._)("span",{class:"token comment"},"# TypeScript Sapphire Bot example"),(0,s.Uk)("\n\nThis is a basic setup of a Discord bot using the "),(0,s._)("span",{class:"token punctuation"},"["),(0,s.Uk)("sapphire framework"),(0,s._)("span",{class:"token punctuation"},"]"),(0,s._)("span",{class:"token punctuation"},"["),(0,s.Uk)("sapphire"),(0,s._)("span",{class:"token punctuation"},"]"),(0,s.Uk)(" written "),(0,s._)("span",{class:"token keyword"},"in"),(0,s.Uk)(" TypeScript\n"),(0,s._)("span",{class:"token punctuation"},".."),(0,s.Uk)(".\n")])])],-1),u=(0,s._)("div",{class:"language-bash ext-sh"},[(0,s._)("pre",{class:"language-bash"},[(0,s._)("code",null,[(0,s.Uk)("$ "),(0,s._)("span",{class:"token builtin class-name"},"type"),(0,s.Uk)(" my-sapphire-bot"),(0,s._)("span",{class:"token punctuation"},"\\"),(0,s.Uk)("README.md\n"),(0,s._)("span",{class:"token comment"},"# TypeScript Sapphire Bot example"),(0,s.Uk)("\n\nThis is a basic setup of a Discord bot using the "),(0,s._)("span",{class:"token punctuation"},"["),(0,s.Uk)("sapphire framework"),(0,s._)("span",{class:"token punctuation"},"]"),(0,s._)("span",{class:"token punctuation"},"["),(0,s.Uk)("sapphire"),(0,s._)("span",{class:"token punctuation"},"]"),(0,s.Uk)(" written "),(0,s._)("span",{class:"token keyword"},"in"),(0,s.Uk)(" TypeScript\n"),(0,s._)("span",{class:"token punctuation"},".."),(0,s.Uk)(".\n")])])],-1),h={},d=(0,e(744).Z)(h,[["render",function(a,n){const e=(0,s.up)("CodeGroupItem"),h=(0,s.up)("CodeGroup");return(0,s.wg)(),(0,s.iD)(s.HY,null,[t,o,(0,s.Wm)(h,null,{default:(0,s.w5)((()=>[(0,s.Wm)(e,{title:"Yarn (Recommended)"},{default:(0,s.w5)((()=>[p])),_:1}),(0,s.Wm)(e,{title:"NPM"},{default:(0,s.w5)((()=>[i])),_:1})])),_:1}),c,(0,s.Wm)(h,null,{default:(0,s.w5)((()=>[(0,s.Wm)(e,{title:"Bash"},{default:(0,s.w5)((()=>[l])),_:1}),(0,s.Wm)(e,{title:"PowerShell"},{default:(0,s.w5)((()=>[r])),_:1}),(0,s.Wm)(e,{title:"CMD"},{default:(0,s.w5)((()=>[u])),_:1})])),_:1})],64)}]])},744:(a,n)=>{n.Z=(a,n)=>{for(const[e,s]of n)a[e]=s;return a}}}]);