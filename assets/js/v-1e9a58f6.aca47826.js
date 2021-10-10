"use strict";(self.webpackChunksapphire_cli_guide=self.webpackChunksapphire_cli_guide||[]).push([[359],{700:(n,s,e)=>{e.r(s),e.d(s,{data:()=>a});const a={key:"v-1e9a58f6",path:"/guide/existing-project.html",title:"Using Sapphire CLI on an existing project",lang:"en-US",frontmatter:{title:"Using Sapphire CLI on an existing project",prev:"/guide/README.md"},excerpt:"",headers:[],filePathRelative:"guide/existing-project.md",git:{updatedTime:1633898821e3,contributors:[{name:"Enes Genç",email:"enesgenc4661@gmail.com",commits:1}]}}},679:(n,s,e)=>{e.r(s),e.d(s,{default:()=>t});const a=(0,e(252).uE)('<h1 id="using-sapphire-cli-on-an-existing-project" tabindex="-1"><a class="header-anchor" href="#using-sapphire-cli-on-an-existing-project" aria-hidden="true">#</a> Using Sapphire CLI on an existing project</h1><div class="custom-container tip"><p class="custom-container-title">TIP</p><p>If you used Sapphire CLI to create your project, you can skip this.</p></div><div class="language-bash ext-sh"><pre class="language-bash"><code>$ sapphire init\n</code></pre></div><p>Run this command to start.</p><div class="language-bash ext-sh"><pre class="language-bash"><code>$ sapphire init\n? What <span class="token function">format</span> <span class="token keyword">do</span> you want your config <span class="token function">file</span> to be in? › - Use arrow-keys. Return to submit.\n    JSON\n❯   YAML\n</code></pre><div class="highlight-lines"><br><div class="highlight-line"> </div><div class="highlight-line"> </div><div class="highlight-line"> </div></div></div><p>Choose a format for your config file, we will choose <strong>YAML</strong> in this guide. <br> This config file is for Sapphire CLI, read more about it here.</p><div class="language-bash ext-sh"><pre class="language-bash"><code>$ sapphire init\n✔ What <span class="token function">format</span> <span class="token keyword">do</span> you want your config <span class="token function">file</span> to be in? › YAML\n? Choose the language used <span class="token keyword">in</span> your project › - Use arrow-keys. Return to submit.\n❯   TypeScript\n    JavaScript\n</code></pre><div class="highlight-lines"><br><br><div class="highlight-line"> </div><div class="highlight-line"> </div><div class="highlight-line"> </div></div></div><p>Choose the language you are using in your project, we are using <strong>TypeScript</strong> in this one, so we will go with it.</p><div class="language-bash ext-sh"><pre class="language-bash"><code>$ sapphire init\n✔ What <span class="token function">format</span> <span class="token keyword">do</span> you want your config <span class="token function">file</span> to be in? › YAML\n✔ Choose the language used <span class="token keyword">in</span> your project › TypeScript\n? Your base directory › src\n</code></pre><div class="highlight-lines"><br><br><br><div class="highlight-line"> </div></div></div><p>Enter your base directory, where your project&#39;s entry point is located, defaults to <code>src</code>.</p><div class="language-bash ext-sh"><pre class="language-bash"><code>$ sapphire init\n✔ What <span class="token function">format</span> <span class="token keyword">do</span> you want your config <span class="token function">file</span> to be in? › YAML\n✔ Choose the language used <span class="token keyword">in</span> your project › TypeScript\n✔ Your base directory … src\n? Where <span class="token keyword">do</span> you store your commands? <span class="token punctuation">(</span>do not include the base<span class="token punctuation">)</span> › commands\n</code></pre><div class="highlight-lines"><br><br><br><br><div class="highlight-line"> </div></div></div><p>Enter your commands directory, where your commands are located (don&#39;t include the base), defaults to <code>commands</code>.</p><div class="language-bash ext-sh"><pre class="language-bash"><code>$ sapphire init\n✔ What <span class="token function">format</span> <span class="token keyword">do</span> you want your config <span class="token function">file</span> to be in? › YAML\n✔ Choose the language used <span class="token keyword">in</span> your project › TypeScript\n✔ Your base directory … src\n✔ Where <span class="token keyword">do</span> you store your commands? <span class="token punctuation">(</span>do not include the base<span class="token punctuation">)</span> … commands\n? Where <span class="token keyword">do</span> you store your listeners? <span class="token punctuation">(</span>do not include the base<span class="token punctuation">)</span> › listeners\n</code></pre><div class="highlight-lines"><br><br><br><br><br><div class="highlight-line"> </div></div></div><p>Enter your listeners directory, where your listeners are located (don&#39;t include the base), defaults to <code>listeners</code>.</p><div class="language-bash ext-sh"><pre class="language-bash"><code>$ sapphire init\n✔ What <span class="token function">format</span> <span class="token keyword">do</span> you want your config <span class="token function">file</span> to be in? › YAML\n✔ Choose the language used <span class="token keyword">in</span> your project › TypeScript\n✔ Your base directory … src\n✔ Where <span class="token keyword">do</span> you store your commands? <span class="token punctuation">(</span>do not include the base<span class="token punctuation">)</span> … commands\n✔ Where <span class="token keyword">do</span> you store your listeners? <span class="token punctuation">(</span>do not include the base<span class="token punctuation">)</span> … listeners\n? Where <span class="token keyword">do</span> you store your arguments? <span class="token punctuation">(</span>do not include the base<span class="token punctuation">)</span> › arguments\n</code></pre><div class="highlight-lines"><br><br><br><br><br><br><div class="highlight-line"> </div></div></div><p>Enter your arguments directory, where your arguments are located (don&#39;t include the base), defaults to <code>arguments</code>.</p><div class="language-bash ext-sh"><pre class="language-bash"><code>$ sapphire init\n✔ What <span class="token function">format</span> <span class="token keyword">do</span> you want your config <span class="token function">file</span> to be in? › YAML\n✔ Choose the language used <span class="token keyword">in</span> your project › TypeScript\n✔ Your base directory … src\n✔ Where <span class="token keyword">do</span> you store your commands? <span class="token punctuation">(</span>do not include the base<span class="token punctuation">)</span> … commands\n✔ Where <span class="token keyword">do</span> you store your listeners? <span class="token punctuation">(</span>do not include the base<span class="token punctuation">)</span> … listeners\n✔ Where <span class="token keyword">do</span> you store your arguments? <span class="token punctuation">(</span>do not include the base<span class="token punctuation">)</span> … arguments\n? Where <span class="token keyword">do</span> you store your preconditions? <span class="token punctuation">(</span>do not include the base<span class="token punctuation">)</span> › preconditions\n</code></pre><div class="highlight-lines"><br><br><br><br><br><br><br><div class="highlight-line"> </div></div></div><p>Enter your preconditions directory, where your preconditions are located (don&#39;t include the base), defaults to <code>preconditions</code>.</p><div class="language-bash ext-sh"><pre class="language-bash"><code>$ sapphire init\n✔ What <span class="token function">format</span> <span class="token keyword">do</span> you want your config <span class="token function">file</span> to be in? › YAML\n✔ Choose the language used <span class="token keyword">in</span> your project › TypeScript\n✔ Your base directory … src\n✔ Where <span class="token keyword">do</span> you store your commands? <span class="token punctuation">(</span>do not include the base<span class="token punctuation">)</span> … commands\n✔ Where <span class="token keyword">do</span> you store your listeners? <span class="token punctuation">(</span>do not include the base<span class="token punctuation">)</span> … listeners\n✔ Where <span class="token keyword">do</span> you store your arguments? <span class="token punctuation">(</span>do not include the base<span class="token punctuation">)</span> … arguments\n✔ Where <span class="token keyword">do</span> you store your preconditions? <span class="token punctuation">(</span>do not include the base<span class="token punctuation">)</span> … preconditions\n? Do you want to <span class="token builtin class-name">enable</span> custom <span class="token function">file</span> templates? › <span class="token punctuation">(</span>y/N<span class="token punctuation">)</span>\n</code></pre><div class="highlight-lines"><br><br><br><br><br><br><br><br><div class="highlight-line"> </div></div></div><p>Choose if you want to enable custom file (piece) templates, type <code>y</code> and enter if you want to enable it. If you don&#39;t want to enable it, just enter.</p><div class="language-bash ext-sh"><pre class="language-bash"><code>$ sapphire init\n✔ What <span class="token function">format</span> <span class="token keyword">do</span> you want your config <span class="token function">file</span> to be in? › YAML\n✔ Choose the language used <span class="token keyword">in</span> your project › TypeScript\n✔ Your base directory … src\n✔ Where <span class="token keyword">do</span> you store your commands? <span class="token punctuation">(</span>do not include the base<span class="token punctuation">)</span> … commands\n✔ Where <span class="token keyword">do</span> you store your listeners? <span class="token punctuation">(</span>do not include the base<span class="token punctuation">)</span> … listeners\n✔ Where <span class="token keyword">do</span> you store your arguments? <span class="token punctuation">(</span>do not include the base<span class="token punctuation">)</span> … arguments\n✔ Where <span class="token keyword">do</span> you store your preconditions? <span class="token punctuation">(</span>do not include the base<span class="token punctuation">)</span> … preconditions\n✔ Do you want to <span class="token builtin class-name">enable</span> custom <span class="token function">file</span> templates? … no\n</code></pre></div><p>Done! Now you can use Sapphire CLI in your project. 🎉</p>',22),o={},t=(0,e(744).Z)(o,[["render",function(n,s){return a}]])},744:(n,s)=>{s.Z=(n,s)=>{for(const[e,a]of s)n[e]=a;return n}}}]);