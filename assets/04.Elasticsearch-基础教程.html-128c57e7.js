import{_ as i}from"./plugin-vue_export-helper-c27b6911.js";import{r as o,o as l,c,d as n,e as s,b as a,w as u,a as t}from"./app-6b854282.js";const r={},d=n("h1",{id:"es-查询和聚合的基础使用",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#es-查询和聚合的基础使用","aria-hidden":"true"},"#"),s(" ES - 查询和聚合的基础使用")],-1),k=n("blockquote",null,[n("p",null,"本文学习 Elasticsearch 基础的 API 使用以及使用官网提供的数据来操作学习：查询以及聚合操作")],-1),v=n("h2",{id:"参考资料",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#参考资料","aria-hidden":"true"},"#"),s(" 参考资料")],-1),m={href:"https://www.elastic.co/guide/en/elasticsearch/reference/7.14/index.html",target:"_blank",rel:"noopener noreferrer"},b={href:"https://www.elastic.co/guide/cn/elasticsearch/guide/current/foreword_id.html",target:"_blank",rel:"noopener noreferrer"},q={href:"https://www.pdai.tech/md/db/nosql-es/elasticsearch-x-usage.html",target:"_blank",rel:"noopener noreferrer"},g=t(`<h2 id="elasticsearch-基础-api" tabindex="-1"><a class="header-anchor" href="#elasticsearch-基础-api" aria-hidden="true">#</a> Elasticsearch - 基础 API</h2><p>在先前的文档中我们有说到 Elasticsearch 是在 Lucene 基础上，提供了 <strong>REST API</strong> 的操作接口，所以我们操作 Elasticsearch 的所有增删改查都是使用 <code>GET、POST、PUT、DELETE</code> 请求方式来区分</p><h3 id="cat-操作" tabindex="-1"><a class="header-anchor" href="#cat-操作" aria-hidden="true">#</a> _cat 操作</h3><div class="language-apl line-numbers-mode" data-ext="apl"><pre class="language-apl"><code><span class="token comment"># 查看所有节点</span>
GET <span class="token monadic-operator operator">/</span>_cat<span class="token monadic-operator operator">/</span>indices
<span class="token comment"># 查看 es 健康状况</span>
GET <span class="token monadic-operator operator">/</span>_cat<span class="token monadic-operator operator">/</span>health
<span class="token comment"># 查看主节点</span>
GET <span class="token monadic-operator operator">/</span>_cat<span class="token monadic-operator operator">/</span>master
<span class="token comment"># 查看所有索引 - 类似 show database;</span>
GET <span class="token monadic-operator operator">/</span>_cat<span class="token monadic-operator operator">/</span>indices
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="索引一个文档-保存" tabindex="-1"><a class="header-anchor" href="#索引一个文档-保存" aria-hidden="true">#</a> 索引一个文档(保存)</h3><p>保存一个数据，保存在哪个索引的哪个类型下，指定用哪个唯一标识</p><p><code>PUT customer/_doc/1</code> - 在 customer 索引下的 _doc 类型下保存 1 号数据为</p><p><strong>其中就是 type 是 <code>_doc</code>，这是 ES 团队选择的一种废弃Type的方案，使用 _doc 后面可以无缝对接 API</strong></p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 添加一个文档、一般 put 用于修改</span>
PUT customer/_doc/1
<span class="token punctuation">{</span>
  <span class="token string">&quot;name&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;zenghr&quot;</span>,
  <span class="token string">&quot;age&quot;</span><span class="token builtin class-name">:</span> <span class="token number">18</span>,
  <span class="token string">&quot;sex&quot;</span><span class="token builtin class-name">:</span> <span class="token number">0</span>
<span class="token punctuation">}</span>

<span class="token comment"># post 会自动分配 id</span>
POST customer/_doc
<span class="token punctuation">{</span>
  <span class="token string">&quot;name&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;test&quot;</span>,
  <span class="token string">&quot;age&quot;</span><span class="token builtin class-name">:</span> <span class="token number">18</span>,
  <span class="token string">&quot;sex&quot;</span><span class="token builtin class-name">:</span> <span class="token number">0</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>返回结果</strong></p><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">&quot;_index&quot;</span> <span class="token operator">:</span> <span class="token string">&quot;customer&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;_type&quot;</span> <span class="token operator">:</span> <span class="token string">&quot;_doc&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;_id&quot;</span> <span class="token operator">:</span> <span class="token string">&quot;1&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;_version&quot;</span> <span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
  <span class="token property">&quot;result&quot;</span> <span class="token operator">:</span> <span class="token string">&quot;created&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;_shards&quot;</span> <span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;total&quot;</span> <span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span>
    <span class="token property">&quot;successful&quot;</span> <span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
    <span class="token property">&quot;failed&quot;</span> <span class="token operator">:</span> <span class="token number">0</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token property">&quot;_seq_no&quot;</span> <span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
  <span class="token property">&quot;_primary_term&quot;</span> <span class="token operator">:</span> <span class="token number">1</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>PUT 和 POST 都可以<br> POST 新增：如果不指定 id，会自动生成 id。指定 id 就会修改这个数据，并新增版本号<br> PUT 可以新增可以修改：PUT 必须指定 id;由于 PUT 需要指定 id，我们一般都用来做修改 操作，不指定 id 会报错</p><h3 id="查询文档" tabindex="-1"><a class="header-anchor" href="#查询文档" aria-hidden="true">#</a> 查询文档</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>GET customer/_doc/1
<span class="token comment"># 返回结果</span>
<span class="token punctuation">{</span>
  <span class="token string">&quot;_index&quot;</span> <span class="token builtin class-name">:</span> <span class="token string">&quot;customer&quot;</span>,
  <span class="token string">&quot;_type&quot;</span> <span class="token builtin class-name">:</span> <span class="token string">&quot;_doc&quot;</span>,
  <span class="token string">&quot;_id&quot;</span> <span class="token builtin class-name">:</span> <span class="token string">&quot;1&quot;</span>,
  <span class="token string">&quot;_version&quot;</span> <span class="token builtin class-name">:</span> <span class="token number">1</span>,
  <span class="token string">&quot;_seq_no&quot;</span> <span class="token builtin class-name">:</span> <span class="token number">0</span>,
  <span class="token string">&quot;_primary_term&quot;</span> <span class="token builtin class-name">:</span> <span class="token number">1</span>,
  <span class="token string">&quot;found&quot;</span> <span class="token builtin class-name">:</span> true,
  <span class="token string">&quot;_source&quot;</span> <span class="token builtin class-name">:</span> <span class="token punctuation">{</span>
    <span class="token string">&quot;name&quot;</span> <span class="token builtin class-name">:</span> <span class="token string">&quot;zenghr&quot;</span>,
    <span class="token string">&quot;age&quot;</span> <span class="token builtin class-name">:</span> <span class="token number">18</span>,
    <span class="token string">&quot;sex&quot;</span> <span class="token builtin class-name">:</span> <span class="token number">0</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li><strong>_index：</strong> 在哪个索引</li><li><strong>_type：</strong> 在哪个类型</li><li><strong>_id：</strong> 记录 id</li><li><strong>_version：</strong> 版本号</li><li><strong>_seq_no：</strong> 并发控制字段，每次更新就会+1，用来做乐观锁</li><li><strong>_primary_term：</strong> 同上，主分片重新分配，如重启，就会变化</li><li><strong>_source：</strong> 真正的内容</li><li><strong>found：</strong> 数据是否存在</li></ul><h3 id="更新文档" tabindex="-1"><a class="header-anchor" href="#更新文档" aria-hidden="true">#</a> 更新文档</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 修改文档</span>
PUT customer/_doc/1
<span class="token punctuation">{</span>
  <span class="token string">&quot;name&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;test&quot;</span>,
  <span class="token string">&quot;age&quot;</span><span class="token builtin class-name">:</span> <span class="token number">18</span>,
  <span class="token string">&quot;sex&quot;</span><span class="token builtin class-name">:</span> <span class="token number">0</span>
<span class="token punctuation">}</span>
<span class="token comment"># 或者</span>
POST customer/_doc/1
<span class="token punctuation">{</span>
  <span class="token string">&quot;name&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;test&quot;</span>,
  <span class="token string">&quot;age&quot;</span><span class="token builtin class-name">:</span> <span class="token number">18</span>,
  <span class="token string">&quot;sex&quot;</span><span class="token builtin class-name">:</span> <span class="token number">0</span>
<span class="token punctuation">}</span>
<span class="token comment"># 或者</span>
POST customer/_doc/1/_update
<span class="token punctuation">{</span>
  <span class="token string">&quot;doc&quot;</span><span class="token builtin class-name">:</span> <span class="token punctuation">{</span>
    <span class="token string">&quot;name&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;test&quot;</span>,
    <span class="token string">&quot;age&quot;</span><span class="token builtin class-name">:</span> <span class="token number">18</span>,
    <span class="token string">&quot;sex&quot;</span><span class="token builtin class-name">:</span> <span class="token number">0</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token comment"># 执行返回结果</span>
<span class="token punctuation">{</span>
  <span class="token string">&quot;_index&quot;</span> <span class="token builtin class-name">:</span> <span class="token string">&quot;customer&quot;</span>,
  <span class="token string">&quot;_type&quot;</span> <span class="token builtin class-name">:</span> <span class="token string">&quot;_doc&quot;</span>,
  <span class="token string">&quot;_id&quot;</span> <span class="token builtin class-name">:</span> <span class="token string">&quot;1&quot;</span>,
  <span class="token string">&quot;_version&quot;</span> <span class="token builtin class-name">:</span> <span class="token number">2</span>,
  <span class="token string">&quot;result&quot;</span> <span class="token builtin class-name">:</span> <span class="token string">&quot;updated&quot;</span>,
  <span class="token string">&quot;_shards&quot;</span> <span class="token builtin class-name">:</span> <span class="token punctuation">{</span>
    <span class="token string">&quot;total&quot;</span> <span class="token builtin class-name">:</span> <span class="token number">2</span>,
    <span class="token string">&quot;successful&quot;</span> <span class="token builtin class-name">:</span> <span class="token number">1</span>,
    <span class="token string">&quot;failed&quot;</span> <span class="token builtin class-name">:</span> <span class="token number">0</span>
  <span class="token punctuation">}</span>,
  <span class="token string">&quot;_seq_no&quot;</span> <span class="token builtin class-name">:</span> <span class="token number">1</span>,
  <span class="token string">&quot;_primary_term&quot;</span> <span class="token builtin class-name">:</span> <span class="token number">1</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>POST 和 PUT 的区别：</p><ul><li><p><strong>POST 操作：</strong> 会对比源文档数据，如果相同不会有什么操作，文档 version 不增加</p></li><li><p><strong>PUT 操作：</strong> 总会将数据重新保存并增加 version 版本</p></li></ul><p>带_update 对比元数据如果一样就不进行任何操作。 看场景：<br> 对于大并发更新，不带 update;<br> 对于大并发查询偶尔更新，带 update; 对比更新，重新计算分配规则</p><h3 id="删除文档或索引" tabindex="-1"><a class="header-anchor" href="#删除文档或索引" aria-hidden="true">#</a> 删除文档或索引</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 创建一个索引</span>
PUT customer
<span class="token comment"># 删除文档</span>
DELETE customer/_doc/1
<span class="token comment"># 删除一整个索引</span>
DELETE customer
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="bulk-批量-api" tabindex="-1"><a class="header-anchor" href="#bulk-批量-api" aria-hidden="true">#</a> bulk 批量 API</h3>`,23),h=n("p",null,"在单个 API 调用中执行多个索引或删除操作，这减少了开销并且可以大大提高索引速度",-1),_={href:"https://www.elastic.co/guide/cn/elasticsearch/guide/current/bulk.html",target:"_blank",rel:"noopener noreferrer"},y=t(`<div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>POST customer/_doc/_bulk
<span class="token punctuation">{</span><span class="token string">&quot;index&quot;</span>:<span class="token punctuation">{</span><span class="token string">&quot;_id&quot;</span><span class="token builtin class-name">:</span><span class="token string">&quot;2&quot;</span><span class="token punctuation">}</span><span class="token punctuation">}</span>
<span class="token punctuation">{</span><span class="token string">&quot;name&quot;</span><span class="token builtin class-name">:</span><span class="token string">&quot;test1&quot;</span>,<span class="token string">&quot;age&quot;</span>:18,<span class="token string">&quot;sex&quot;</span>:0<span class="token punctuation">}</span>
<span class="token punctuation">{</span><span class="token string">&quot;delete&quot;</span>:<span class="token punctuation">{</span><span class="token string">&quot;_id&quot;</span><span class="token builtin class-name">:</span><span class="token string">&quot;2&quot;</span><span class="token punctuation">}</span><span class="token punctuation">}</span>
<span class="token punctuation">{</span><span class="token string">&quot;index&quot;</span>:<span class="token punctuation">{</span><span class="token string">&quot;_id&quot;</span><span class="token builtin class-name">:</span><span class="token string">&quot;3&quot;</span><span class="token punctuation">}</span><span class="token punctuation">}</span>
<span class="token punctuation">{</span><span class="token string">&quot;name&quot;</span><span class="token builtin class-name">:</span><span class="token string">&quot;test2&quot;</span>,<span class="token string">&quot;age&quot;</span>:18,<span class="token string">&quot;sex&quot;</span>:0<span class="token punctuation">}</span>
</code></pre><div class="highlight-lines"><br><br><br><div class="highlight-line"> </div><br><br></div><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="hint-container warning"><p class="hint-container-title">注意</p><p><strong>请注意 <code>delete</code> 动作不能有请求体,它后面跟着的是另外一个操作</strong></p><p>行与行之间要以换行符相隔 <code>\\n</code></p></div><p><strong>批量操作语法</strong></p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token punctuation">{</span> action: <span class="token punctuation">{</span> metadata <span class="token punctuation">}</span><span class="token punctuation">}</span><span class="token punctuation">\\</span>n
<span class="token punctuation">{</span> request body        <span class="token punctuation">}</span><span class="token punctuation">\\</span>n
<span class="token punctuation">{</span> action: <span class="token punctuation">{</span> metadata <span class="token punctuation">}</span><span class="token punctuation">}</span><span class="token punctuation">\\</span>n
<span class="token punctuation">{</span> request body        <span class="token punctuation">}</span><span class="token punctuation">\\</span>n
<span class="token punctuation">..</span>.
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="学习准备-导入测试数据" tabindex="-1"><a class="header-anchor" href="#学习准备-导入测试数据" aria-hidden="true">#</a> 学习准备：导入测试数据</h2><div class="hint-container tip"><p class="hint-container-title">提示</p><p>为了方便我们学习 Elasticsearch 的 API 操作，官方提供了测试数据，下面我们需要批量导入测试数据</p></div><h3 id="下载测试数据" tabindex="-1"><a class="header-anchor" href="#下载测试数据" aria-hidden="true">#</a> 下载测试数据</h3>`,7),f={href:"https://media.zenghr.cn/blog/docs/accounts.json",target:"_blank",rel:"noopener noreferrer"},x=t(`<p>数据的格式如下：</p><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span><span class="token property">&quot;index&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token property">&quot;_id&quot;</span><span class="token operator">:</span> <span class="token string">&quot;1&quot;</span><span class="token punctuation">}</span><span class="token punctuation">}</span>
<span class="token punctuation">{</span>
	<span class="token property">&quot;account_number&quot;</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
	<span class="token property">&quot;balance&quot;</span><span class="token operator">:</span> <span class="token number">39225</span><span class="token punctuation">,</span>
	<span class="token property">&quot;firstname&quot;</span><span class="token operator">:</span> <span class="token string">&quot;Amber&quot;</span><span class="token punctuation">,</span>
	<span class="token property">&quot;lastname&quot;</span><span class="token operator">:</span> <span class="token string">&quot;Duke&quot;</span><span class="token punctuation">,</span>
	<span class="token property">&quot;age&quot;</span><span class="token operator">:</span> <span class="token number">32</span><span class="token punctuation">,</span>
	<span class="token property">&quot;gender&quot;</span><span class="token operator">:</span> <span class="token string">&quot;M&quot;</span><span class="token punctuation">,</span>
	<span class="token property">&quot;address&quot;</span><span class="token operator">:</span> <span class="token string">&quot;880 Holmes Lane&quot;</span><span class="token punctuation">,</span>
	<span class="token property">&quot;employer&quot;</span><span class="token operator">:</span> <span class="token string">&quot;Pyrami&quot;</span><span class="token punctuation">,</span>
	<span class="token property">&quot;email&quot;</span><span class="token operator">:</span> <span class="token string">&quot;amberduke@pyrami.com&quot;</span><span class="token punctuation">,</span>
	<span class="token property">&quot;city&quot;</span><span class="token operator">:</span> <span class="token string">&quot;Brogan&quot;</span><span class="token punctuation">,</span>
	<span class="token property">&quot;state&quot;</span><span class="token operator">:</span> <span class="token string">&quot;IL&quot;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="批量插入数据" tabindex="-1"><a class="header-anchor" href="#批量插入数据" aria-hidden="true">#</a> 批量插入数据</h3><p>查看测试数据的格式我们发现数据格式是 <strong>bulk</strong> 的数据语法，我们可以使用批量操作的 API <strong><code>_bulk</code></strong> 来插入数据</p><p>但是官方也提供了另外一种批量操作方式，可以直接导入 Json 文件，插入数据，这里我们使用导入文件的方式</p><p>将 <em>accounts.json</em> 拷贝至指定目录，我这里的目录是 <code>Desktop/accounts.json</code></p><p>然后执行</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">curl</span> <span class="token parameter variable">-H</span> <span class="token string">&quot;Content-Type: application/json&quot;</span> <span class="token parameter variable">-XPOST</span> <span class="token string">&quot;localhost:9200/bank/_doc/_bulk?pretty&amp;refresh&quot;</span> --data-binary <span class="token string">&quot;@Desktop/accounts.json&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="查询数据-kibana" tabindex="-1"><a class="header-anchor" href="#查询数据-kibana" aria-hidden="true">#</a> 查询数据 - Kibana</h3>`,9),E=t(`<figure><img src="https://media.zenghr.cn/blog/img/20210807/00PrB5.png" alt="00PrB5" tabindex="0" loading="lazy"><figcaption>00PrB5</figcaption></figure><h2 id="进阶检索" tabindex="-1"><a class="header-anchor" href="#进阶检索" aria-hidden="true">#</a> 进阶检索</h2><p>ES 支持两种基本方式检索 :</p><ul><li>一个是通过使用 REST request URI 发送搜索参数(uri+检索参数)</li><li>另一个是通过使用 REST request body 来发送它们(uri+请求体)</li></ul><h3 id="检索信息" tabindex="-1"><a class="header-anchor" href="#检索信息" aria-hidden="true">#</a> 检索信息</h3><p>搜索API的最基础的形式是没有指定任何查询的空搜索，它简单地返回集群中所有索引下的所有文档：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>GET /bank/_doc/_search
<span class="token comment"># 请求参数方式检索</span>
GET bank/_search?q<span class="token operator">=</span>*<span class="token operator">&amp;</span><span class="token assign-left variable">sort</span><span class="token operator">=</span>account_number:asc
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>返回的结果像这样：</p><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">&quot;took&quot;</span> <span class="token operator">:</span> <span class="token number">8</span><span class="token punctuation">,</span>
  <span class="token property">&quot;timed_out&quot;</span> <span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
  <span class="token property">&quot;_shards&quot;</span> <span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;total&quot;</span> <span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
    <span class="token property">&quot;successful&quot;</span> <span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
    <span class="token property">&quot;skipped&quot;</span> <span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
    <span class="token property">&quot;failed&quot;</span> <span class="token operator">:</span> <span class="token number">0</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token property">&quot;hits&quot;</span> <span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;total&quot;</span> <span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token property">&quot;value&quot;</span> <span class="token operator">:</span> <span class="token number">1000</span><span class="token punctuation">,</span>
      <span class="token property">&quot;relation&quot;</span> <span class="token operator">:</span> <span class="token string">&quot;eq&quot;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token property">&quot;max_score&quot;</span> <span class="token operator">:</span> <span class="token number">1.0</span><span class="token punctuation">,</span>
    <span class="token property">&quot;hits&quot;</span> <span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token punctuation">{</span>
        <span class="token property">&quot;_index&quot;</span> <span class="token operator">:</span> <span class="token string">&quot;bank&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;_type&quot;</span> <span class="token operator">:</span> <span class="token string">&quot;_doc&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;_id&quot;</span> <span class="token operator">:</span> <span class="token string">&quot;1&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;_score&quot;</span> <span class="token operator">:</span> <span class="token number">1.0</span><span class="token punctuation">,</span>
        <span class="token property">&quot;_source&quot;</span> <span class="token operator">:</span> <span class="token punctuation">{</span>
          <span class="token property">&quot;account_number&quot;</span> <span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
          <span class="token property">&quot;balance&quot;</span> <span class="token operator">:</span> <span class="token number">39225</span><span class="token punctuation">,</span>
          <span class="token property">&quot;firstname&quot;</span> <span class="token operator">:</span> <span class="token string">&quot;Amber&quot;</span><span class="token punctuation">,</span>
          <span class="token property">&quot;lastname&quot;</span> <span class="token operator">:</span> <span class="token string">&quot;Duke&quot;</span><span class="token punctuation">,</span>
          <span class="token property">&quot;age&quot;</span> <span class="token operator">:</span> <span class="token number">32</span><span class="token punctuation">,</span>
          <span class="token property">&quot;gender&quot;</span> <span class="token operator">:</span> <span class="token string">&quot;M&quot;</span><span class="token punctuation">,</span>
          <span class="token property">&quot;address&quot;</span> <span class="token operator">:</span> <span class="token string">&quot;880 Holmes Lane&quot;</span><span class="token punctuation">,</span>
          <span class="token property">&quot;employer&quot;</span> <span class="token operator">:</span> <span class="token string">&quot;Pyrami&quot;</span><span class="token punctuation">,</span>
          <span class="token property">&quot;email&quot;</span> <span class="token operator">:</span> <span class="token string">&quot;amberduke@pyrami.com&quot;</span><span class="token punctuation">,</span>
          <span class="token property">&quot;city&quot;</span> <span class="token operator">:</span> <span class="token string">&quot;Brogan&quot;</span><span class="token punctuation">,</span>
          <span class="token property">&quot;state&quot;</span> <span class="token operator">:</span> <span class="token string">&quot;IL&quot;</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token comment">// ...</span>
    <span class="token punctuation">]</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>相关字段解释</p><ul><li><code>took</code> – Elasticsearch运行查询所花费的时间（以毫秒为单位）</li><li><code>timed_out</code> –搜索请求是否超时</li><li><code>_shards</code> - 搜索了多少个碎片，以及成功，失败或跳过了多少个碎片的细目分类。</li><li><code>max_score</code> – 找到的最相关文档的分数</li><li><code>hits.total.value</code> - 找到了多少个匹配的文档</li><li><code>hits.sort</code> - 文档的排序位置（不按相关性得分排序时）</li><li><code>hits._score</code> - 文档的相关性得分（使用match_all时不适用）</li><li><strong><code>hits.hits</code></strong> - 实际的搜索结果数组(默认为前 10 的文档)</li></ul><h3 id="uri-请求体进行检索" tabindex="-1"><a class="header-anchor" href="#uri-请求体进行检索" aria-hidden="true">#</a> uri+请求体进行检索</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>GET bank/_search
<span class="token punctuation">{</span>
  <span class="token string">&quot;query&quot;</span><span class="token builtin class-name">:</span> <span class="token punctuation">{</span>
    <span class="token string">&quot;match_all&quot;</span><span class="token builtin class-name">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
  <span class="token punctuation">}</span>,
  <span class="token string">&quot;sort&quot;</span><span class="token builtin class-name">:</span> <span class="token punctuation">[</span>
    <span class="token punctuation">{</span>
      <span class="token string">&quot;account_number&quot;</span><span class="token builtin class-name">:</span> <span class="token punctuation">{</span>
        <span class="token string">&quot;order&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;desc&quot;</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="query-dsl" tabindex="-1"><a class="header-anchor" href="#query-dsl" aria-hidden="true">#</a> Query DSL</h2><blockquote><p>查询表达式(Query DSL)是一种非常灵活又富有表现力的 查询语言。 Elasticsearch 使用它可以以简单的 JSON 接口来展现 Lucene 功能的绝大部分</p></blockquote><h3 id="基本语法格式" tabindex="-1"><a class="header-anchor" href="#基本语法格式" aria-hidden="true">#</a> 基本语法格式</h3><p>要使用这种查询表达式，只需将查询语句传递给 <code>query</code> 参数：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>GET /bank/_search
<span class="token punctuation">{</span>
    <span class="token string">&quot;query&quot;</span><span class="token builtin class-name">:</span> YOUR_QUERY_HERE
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><em>空查询（empty search）</em> —<code>{}</code>— 在功能上等价于使用 <code>match_all</code> 查询， 正如其名字一样，匹配所有文档：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>GET /bank/_search
<span class="token punctuation">{</span>
    <span class="token string">&quot;query&quot;</span><span class="token builtin class-name">:</span> <span class="token punctuation">{</span>
        <span class="token string">&quot;match_all&quot;</span><span class="token builtin class-name">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="查询语句结构" tabindex="-1"><a class="header-anchor" href="#查询语句结构" aria-hidden="true">#</a> 查询语句结构</h4><p>一个查询语句的典型结构：</p><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
    <span class="token property">&quot;query_name&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token property">&quot;argument&quot;</span><span class="token operator">:</span> value<span class="token punctuation">,</span>
        <span class="token property">&quot;argument&quot;</span><span class="token operator">:</span> value<span class="token punctuation">,</span>...
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>如果是针对某个字段，那么它的结构如下：</p><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
    <span class="token property">&quot;query_name&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token property">&quot;field_name&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token property">&quot;argument&quot;</span><span class="token operator">:</span> value<span class="token punctuation">,</span>
            <span class="token property">&quot;argument&quot;</span><span class="token operator">:</span> value<span class="token punctuation">,</span>...
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>举个例子，你可以使用 <code>match</code> 查询语句 来查询 bank 索引下 <code>email</code> 字段中包含 <code>cedward.com</code> 的 账号信息：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>GET bank/_search
<span class="token punctuation">{</span>
  <span class="token string">&quot;query&quot;</span><span class="token builtin class-name">:</span> <span class="token punctuation">{</span>
    <span class="token string">&quot;match&quot;</span><span class="token builtin class-name">:</span> <span class="token punctuation">{</span>
      <span class="token string">&quot;email&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;cedward.com&quot;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>query 定义如何查询</li><li>match_all 查询类型【代表查询所有的所有】，es 中可以在 query 中组合非常多的查<br> 询类型完成复杂查询</li><li>除了 query 参数之外，我们也可以传递其它的参数以改变查询结果。如 sort，size</li><li>from+size限定，完成分页功能</li><li>sort排序，多字段排序，会在前序字段相等时后续字段内部排序，否则以前序为准</li></ul><h3 id="返回部分字段" tabindex="-1"><a class="header-anchor" href="#返回部分字段" aria-hidden="true">#</a> 返回部分字段</h3><p>如果只想要返回部分的字段，可以使用 <code>_source</code> 指定字段</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 返回部分字段</span>
GET bank/_search
<span class="token punctuation">{</span>
  <span class="token string">&quot;query&quot;</span><span class="token builtin class-name">:</span> <span class="token punctuation">{</span>
    <span class="token string">&quot;match_all&quot;</span><span class="token builtin class-name">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
  <span class="token punctuation">}</span>,
  <span class="token string">&quot;from&quot;</span><span class="token builtin class-name">:</span> <span class="token number">0</span>,
  <span class="token string">&quot;size&quot;</span><span class="token builtin class-name">:</span> <span class="token number">5</span>,
  <span class="token string">&quot;_source&quot;</span><span class="token builtin class-name">:</span> <span class="token punctuation">[</span>
    <span class="token string">&quot;age&quot;</span>,
    <span class="token string">&quot;balance&quot;</span>
  <span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="match【匹配查询】" tabindex="-1"><a class="header-anchor" href="#match【匹配查询】" aria-hidden="true">#</a> match【匹配查询】</h3><p>如果要在字段中搜索特定字词，可以使用<code>match</code></p><ul><li>全文检索</li></ul><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>GET bank/_search
<span class="token punctuation">{</span>
  <span class="token string">&quot;query&quot;</span><span class="token builtin class-name">:</span> <span class="token punctuation">{</span>
    <span class="token string">&quot;match&quot;</span><span class="token builtin class-name">:</span> <span class="token punctuation">{</span>
      <span class="token string">&quot;email&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;cedward.com&quot;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="https://media.zenghr.cn/blog/img/20210807/UphieL.png" alt="UphieL" tabindex="0" loading="lazy"><figcaption>UphieL</figcaption></figure><p>最终查询出 email 中包含 <code>cedward.com</code> 单词的所有记录<br> match 当搜索字符串类型的时候，会进行全文检索，并且每条记录有相关性得分</p><ul><li>多个单词 - 分词 + 全文检索</li></ul><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>GET bank/_search
<span class="token punctuation">{</span>
  <span class="token string">&quot;query&quot;</span><span class="token builtin class-name">:</span> <span class="token punctuation">{</span>
    <span class="token string">&quot;match&quot;</span><span class="token builtin class-name">:</span> <span class="token punctuation">{</span>
      <span class="token string">&quot;email&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;cedward.com pyrami.com&quot;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,39),T={href:"http://cedward.com",target:"_blank",rel:"noopener noreferrer"},w={href:"http://pyrami.com",target:"_blank",rel:"noopener noreferrer"},P={href:"http://cedward.com",target:"_blank",rel:"noopener noreferrer"},j={href:"http://pyrami.com",target:"_blank",rel:"noopener noreferrer"},z=t(`<h3 id="match-phrase【短语匹配】" tabindex="-1"><a class="header-anchor" href="#match-phrase【短语匹配】" aria-hidden="true">#</a> match_phrase【短语匹配】</h3><p>将需要匹配的值当成一个 <strong>整体单词(<code>不分词</code>)</strong> 进行检索</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>GET /bank/_search
<span class="token punctuation">{</span>
  <span class="token string">&quot;query&quot;</span><span class="token builtin class-name">:</span> <span class="token punctuation">{</span>
    <span class="token string">&quot;match_phrase&quot;</span><span class="token builtin class-name">:</span> <span class="token punctuation">{</span>
      <span class="token string">&quot;address&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;mill lane&quot;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>查出 address 中包含 mill road 的所有记录，并给出相关性得分</p><h3 id="multi-match【多字段匹配】" tabindex="-1"><a class="header-anchor" href="#multi-match【多字段匹配】" aria-hidden="true">#</a> multi_match【多字段匹配】</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>GET bank/_search
<span class="token punctuation">{</span>
  <span class="token string">&quot;query&quot;</span><span class="token builtin class-name">:</span> <span class="token punctuation">{</span>
    <span class="token string">&quot;multi_match&quot;</span><span class="token builtin class-name">:</span> <span class="token punctuation">{</span>
      <span class="token string">&quot;query&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;mill&quot;</span>,
      <span class="token string">&quot;fields&quot;</span><span class="token builtin class-name">:</span> <span class="token punctuation">[</span>
        <span class="token string">&quot;state&quot;</span>,
        <span class="token string">&quot;address&quot;</span>
      <span class="token punctuation">]</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>state 或者 address 包含 mill</p><h3 id="bool【复合查询】" tabindex="-1"><a class="header-anchor" href="#bool【复合查询】" aria-hidden="true">#</a> bool【复合查询】</h3><p>bool 用来做复合查询:<br> 复合语句可以合并 任何 其它查询语句，包括复合语句，了解这一点是很重要的。这就意味 着，复合语句之间可以互相嵌套，可以表达非常复杂的逻辑</p><ul><li><strong>must - 必须达到must列举的所有条件</strong></li></ul><figure><img src="https://media.zenghr.cn/blog/img/20210807/DVw0gY.png" alt="DVw0gY" tabindex="0" loading="lazy"><figcaption>DVw0gY</figcaption></figure><ul><li><strong>should：</strong> 应该达到 should 列举的条件，如果达到会 <code>增加相关文档的评分</code> ，并不会改变 查询的结果。如果 query 中只有 should 且只有一种匹配规则，那么 should 的条件就会 被作为默认匹配条件而去改变查询结果</li></ul><figure><img src="https://media.zenghr.cn/blog/img/20210807/Q2WPhu.png" alt="Q2WPhu" tabindex="0" loading="lazy"><figcaption>Q2WPhu</figcaption></figure><p>query 只有 should 的情况</p><figure><img src="https://media.zenghr.cn/blog/img/20210807/mAxF6y.png" alt="mAxF6y" tabindex="0" loading="lazy"><figcaption>mAxF6y</figcaption></figure><ul><li><strong>must_not 必须不是指定的情况</strong></li></ul><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code>GET bank/_search
<span class="token punctuation">{</span>
  <span class="token property">&quot;query&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;bool&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token property">&quot;must&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
        <span class="token punctuation">{</span>
          <span class="token property">&quot;match&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token property">&quot;address&quot;</span><span class="token operator">:</span> <span class="token string">&quot;mill&quot;</span>
          <span class="token punctuation">}</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">{</span>
          <span class="token property">&quot;match&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token property">&quot;gender&quot;</span><span class="token operator">:</span> <span class="token string">&quot;M&quot;</span>
          <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">]</span><span class="token punctuation">,</span>
      <span class="token property">&quot;should&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
        <span class="token punctuation">{</span>
          <span class="token property">&quot;match&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token property">&quot;address&quot;</span><span class="token operator">:</span> <span class="token string">&quot;lane&quot;</span>
          <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">]</span><span class="token punctuation">,</span>
      <span class="token property">&quot;must_not&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
        <span class="token punctuation">{</span>
          <span class="token property">&quot;match&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token property">&quot;email&quot;</span><span class="token operator">:</span> <span class="token string">&quot;neteria.com&quot;</span>
          <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">]</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,17),A={href:"http://neteria.com",target:"_blank",rel:"noopener noreferrer"},L=t(`<table><thead><tr><th>事件</th><th>描述</th></tr></thead><tbody><tr><td><strong>must</strong></td><td>子句（查询）必须出现在匹配的文档中，并将有助于得分</td></tr><tr><td><strong>filter</strong></td><td>子句（查询）必须出现在匹配的文档中，但它以不评分、过滤模式来进行，只是根据过滤标准来排除或包含文档</td></tr><tr><td><strong>should</strong></td><td>子句（查询）应该出现在匹配的文档中，出现则得分，没有也不要紧</td></tr><tr><td><strong>must_not</strong></td><td>子句（查询）不能出现在匹配的文档中</td></tr></tbody></table><h3 id="range【区间查询】" tabindex="-1"><a class="header-anchor" href="#range【区间查询】" aria-hidden="true">#</a> range【区间查询】</h3><p><code>range</code> 查询找出那些落在指定区间内的数字或者时间</p><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
    <span class="token property">&quot;range&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token property">&quot;age&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token property">&quot;gte&quot;</span><span class="token operator">:</span>  <span class="token number">20</span><span class="token punctuation">,</span>
            <span class="token property">&quot;lt&quot;</span><span class="token operator">:</span>   <span class="token number">30</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>被允许的操作符如下：</p><ul><li><strong><code>gt</code></strong> - 大于</li><li><strong><code>gte</code></strong> - 大于等于</li><li><strong><code>lt</code></strong> - 小于</li><li><strong><code>lte</code></strong> - 小于等于</li></ul><h3 id="filter【结果过滤】" tabindex="-1"><a class="header-anchor" href="#filter【结果过滤】" aria-hidden="true">#</a> filter【结果过滤】</h3><p>并不是所有的查询都需要产生分数，特别是那些仅用于 &quot;filtering&quot;(过滤)的文档。为了不计算分数 Elasticsearch 会自动检查场景并且优化查询的执行</p><p><strong>增加带过滤器（filtering）的查询</strong></p><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">&quot;query&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;bool&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token property">&quot;must&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
        <span class="token punctuation">{</span>
          <span class="token property">&quot;match&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token property">&quot;address&quot;</span><span class="token operator">:</span> <span class="token string">&quot;mill&quot;</span>
          <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">]</span><span class="token punctuation">,</span>
      <span class="token property">&quot;should&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
        <span class="token punctuation">{</span>
          <span class="token property">&quot;match&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token property">&quot;address&quot;</span><span class="token operator">:</span> <span class="token string">&quot;lane&quot;</span>
          <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">]</span><span class="token punctuation">,</span>
      <span class="token property">&quot;filter&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token property">&quot;range&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
          <span class="token property">&quot;balance&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token property">&quot;gte&quot;</span><span class="token operator">:</span> <span class="token number">10000</span><span class="token punctuation">,</span>
            <span class="token property">&quot;lte&quot;</span><span class="token operator">:</span> <span class="token number">20000</span>
          <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>过滤 balance 大于等于 10000 并且 小于等于 20000 的数据，并且address 包含 mill，如果 address 里面有 lane 最好不过</p></blockquote><figure><img src="https://media.zenghr.cn/blog/img/20210807/CyBWLf.png" alt="CyBWLf" tabindex="0" loading="lazy"><figcaption>CyBWLf</figcaption></figure><h3 id="term-查询" tabindex="-1"><a class="header-anchor" href="#term-查询" aria-hidden="true">#</a> term 查询</h3><blockquote><p>和 match 一样。匹配某个属性的值。全文检索字段用 match，其他非 text 字段匹配用 term</p></blockquote><p><strong>term</strong> 查询被用于 <code>精确值匹配</code> ，这些精确值可能是数字、时间、布尔或者那些 <code>not_analyzed</code> 的字符串：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token punctuation">{</span> <span class="token string">&quot;term&quot;</span><span class="token builtin class-name">:</span> <span class="token punctuation">{</span> <span class="token string">&quot;age&quot;</span><span class="token builtin class-name">:</span>    <span class="token number">26</span>           <span class="token punctuation">}</span><span class="token punctuation">}</span>
<span class="token punctuation">{</span> <span class="token string">&quot;term&quot;</span><span class="token builtin class-name">:</span> <span class="token punctuation">{</span> <span class="token string">&quot;date&quot;</span><span class="token builtin class-name">:</span>   <span class="token string">&quot;2014-09-01&quot;</span> <span class="token punctuation">}</span><span class="token punctuation">}</span>
<span class="token punctuation">{</span> <span class="token string">&quot;term&quot;</span><span class="token builtin class-name">:</span> <span class="token punctuation">{</span> <span class="token string">&quot;public&quot;</span><span class="token builtin class-name">:</span> <span class="token boolean">true</span>         <span class="token punctuation">}</span><span class="token punctuation">}</span>
<span class="token punctuation">{</span> <span class="token string">&quot;term&quot;</span><span class="token builtin class-name">:</span> <span class="token punctuation">{</span> <span class="token string">&quot;tag&quot;</span><span class="token builtin class-name">:</span>    <span class="token string">&quot;full_text&quot;</span>  <span class="token punctuation">}</span><span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="aggregation【聚合查询】" tabindex="-1"><a class="header-anchor" href="#aggregation【聚合查询】" aria-hidden="true">#</a> Aggregation【聚合查询】</h2><div class="hint-container tip"><p class="hint-container-title">提示</p><p>聚合提供了从数据中分组和提取数据的能力。最简单的聚合方法大致等于 <strong>SQL GROUP BY</strong> 和 <strong>SQL 聚合函数</strong>。在 Elasticsearch 中，您有执行搜索返回 hits(命中结果)，并且同时返 回聚合结果，把一个响应中的所有 hits(命中结果)分隔开的能力。这是非常强大且有效的， 您可以执行查询和多个聚合，并且在一次使用中得到各自的(任何一个的)返回结果，使用 一次简洁和简化的 API 来避免网络往返</p></div><h3 id="简单聚合" tabindex="-1"><a class="header-anchor" href="#简单聚合" aria-hidden="true">#</a> 简单聚合</h3><p>比如我们希望计算出account每个州的统计数量， 使用<code>aggs</code>关键字对<code>state</code>字段聚合，被聚合的字段无需对分词统计，所以使用<code>state.keyword</code>对整个字段统计</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>GET /bank/_search
<span class="token punctuation">{</span>
  <span class="token string">&quot;size&quot;</span><span class="token builtin class-name">:</span> <span class="token number">0</span>,
  <span class="token string">&quot;aggs&quot;</span><span class="token builtin class-name">:</span> <span class="token punctuation">{</span>
    <span class="token string">&quot;group_by_state&quot;</span><span class="token builtin class-name">:</span> <span class="token punctuation">{</span>
      <span class="token string">&quot;terms&quot;</span><span class="token builtin class-name">:</span> <span class="token punctuation">{</span>
        <span class="token string">&quot;field&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;state.keyword&quot;</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="https://media.zenghr.cn/blog/img/20210807/wFOuAC.png" alt="wFOuAC" tabindex="0" loading="lazy"><figcaption>wFOuAC</figcaption></figure><p>因为无需返回条件的具体数据, 所以设置size=0，返回hits为空。</p><p><code>doc_count</code>表示bucket中每个州的数据条数</p><h3 id="复杂查询-聚合排序" tabindex="-1"><a class="header-anchor" href="#复杂查询-聚合排序" aria-hidden="true">#</a> 复杂查询 - 聚合排序</h3><ul><li>按照年龄聚合，并且请求这些年龄段的这些人的平均薪资，并且通过聚合结果排序</li></ul><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code>GET bank/_search
<span class="token punctuation">{</span>
  <span class="token property">&quot;query&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;match_all&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token property">&quot;aggs&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;age_avg&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token property">&quot;terms&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token property">&quot;field&quot;</span><span class="token operator">:</span> <span class="token string">&quot;age&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;size&quot;</span><span class="token operator">:</span> <span class="token number">1000</span><span class="token punctuation">,</span>
        <span class="token property">&quot;order&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
          <span class="token property">&quot;banlances_avg&quot;</span><span class="token operator">:</span> <span class="token string">&quot;desc&quot;</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token property">&quot;aggs&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token property">&quot;banlances_avg&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
          <span class="token property">&quot;avg&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token property">&quot;field&quot;</span><span class="token operator">:</span> <span class="token string">&quot;balance&quot;</span>
          <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token property">&quot;size&quot;</span><span class="token operator">:</span> <span class="token number">1000</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="https://media.zenghr.cn/blog/img/20210807/A9ERdl.png" alt="A9ERdl" tabindex="0" loading="lazy"><figcaption>A9ERdl</figcaption></figure><ul><li>查出所有年龄分布，并且这些年龄段中 M 的平均薪资和 F 的平均薪资以及这个年龄段的总体平均薪资</li></ul><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code>GET bank/_search
<span class="token punctuation">{</span>
  <span class="token property">&quot;query&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;match_all&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token property">&quot;aggs&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;age_agg&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token property">&quot;terms&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token property">&quot;field&quot;</span><span class="token operator">:</span> <span class="token string">&quot;age&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;size&quot;</span><span class="token operator">:</span> <span class="token number">100</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token property">&quot;aggs&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token property">&quot;gender_agg&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
          <span class="token property">&quot;terms&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token property">&quot;field&quot;</span><span class="token operator">:</span> <span class="token string">&quot;gender.keyword&quot;</span><span class="token punctuation">,</span>
            <span class="token property">&quot;size&quot;</span><span class="token operator">:</span> <span class="token number">100</span>
          <span class="token punctuation">}</span><span class="token punctuation">,</span>
          <span class="token property">&quot;aggs&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token property">&quot;balance_avg&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
              <span class="token property">&quot;avg&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
                <span class="token property">&quot;field&quot;</span><span class="token operator">:</span> <span class="token string">&quot;balance&quot;</span>
              <span class="token punctuation">}</span>
            <span class="token punctuation">}</span>
          <span class="token punctuation">}</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token property">&quot;balance_avg&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
          <span class="token property">&quot;avg&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token property">&quot;field&quot;</span><span class="token operator">:</span> <span class="token string">&quot;balance&quot;</span>
          <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token property">&quot;size&quot;</span><span class="token operator">:</span> <span class="token number">1000</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="https://media.zenghr.cn/blog/img/20210807/MKwEkH.png" alt="MKwEkH" tabindex="0" loading="lazy"><figcaption>MKwEkH</figcaption></figure>`,31);function S(G,U){const e=o("ExternalLinkIcon"),p=o("RouterLink");return l(),c("div",null,[d,k,v,n("ul",null,[n("li",null,[n("a",m,[s("官方文档"),a(e)])]),n("li",null,[n("a",b,[s("官方中文文档(部分 API 可能过时)"),a(e)])]),n("li",null,[n("a",q,[s("https://www.pdai.tech/md/db/nosql-es/elasticsearch-x-usage.html"),a(e)])])]),g,n("blockquote",null,[h,n("p",null,[n("a",_,[s("官方批量操作文档"),a(e)])])]),y,n("p",null,[s("数据的 索引(Index) 是 bank，"),n("a",f,[s("测试数据 JOSN 文件下载地址"),a(e)])]),x,n("blockquote",null,[n("p",null,[s("为了方便测试，我们使用 "),a(p,{to:"/passages/2021-08-06-elasticsearch-env.html"},{default:u(()=>[s("kibana")]),_:1}),s(" 的dev tool来进行学习测试：")])]),E,n("p",null,[s("最终查询出 email 中包含 "),n("a",T,[s("cedward.com"),a(e)]),s(" 或者 "),n("a",w,[s("pyrami.com"),a(e)]),s(" 或者 "),n("a",P,[s("cedward.com"),a(e)]),s(),n("a",j,[s("pyrami.com"),a(e)]),s(" 的所有记录，并给出相关性得分")]),z,n("blockquote",null,[n("p",null,[s("address 包含 mill，并且 gender 是 M，如果 address 里面有 lane 最好不过，但是 email 必 须不包含 "),n("a",A,[s("neteria.com"),a(e)])])]),L])}const R=i(r,[["render",S],["__file","04.Elasticsearch-基础教程.html.vue"]]);export{R as default};
