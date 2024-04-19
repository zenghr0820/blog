import{_ as n,o as s,c as a,a as e}from"./app-d6e30719.js";const t={},p=e(`<h1 id="责任链-chain" tabindex="-1"><a class="header-anchor" href="#责任链-chain" aria-hidden="true">#</a> 责任链(Chain)</h1><div class="hint-container tip"><p class="hint-container-title">提示</p><p>责任链（Chain of Responsibility）模式的定义：<strong>为了避免请求发送者与多个请求处理者耦合在一起，于是将所有请求的处理者通过前一对象记住其下一个对象的引用而连成一条链；当有请求发生时，可将请求沿着这条链传递，直到有对象处理它为止</strong></p></div><p>在责任链模式中，客户只需要将请求发送到责任链上即可，无须关心请求的处理细节和请求的传递过程，请求会自动进行传递。所以责任链将请求的发送者和请求的处理者解耦了</p><h2 id="责任链-优缺点" tabindex="-1"><a class="header-anchor" href="#责任链-优缺点" aria-hidden="true">#</a> 责任链 - 优缺点</h2><p><strong>责任链模式是一种对象行为型模式，其主要优点如下</strong></p><ol><li><p>降低耦合度。它将请求的发送者和接收者解耦</p></li><li><p>简化了对象。使得对象不需要知道链的结构</p></li><li><p>增强给对象指派职责的灵活性。通过改变链内的成员或者调动它们的次序，允许动态地新增或者删除责任</p></li><li><p>增加新的请求处理类很方便</p></li></ol><p><strong>主要缺点如下</strong></p><ol><li><p>不能保证请求一定被接收</p></li><li><p>系统性能将受到一定影响，而且在进行代码调试时不太方便，可能会造成循环调用</p></li><li><p>可能不容易观察运行时的特征，有碍于除错</p></li></ol><h2 id="责任链模式的结构与实现" tabindex="-1"><a class="header-anchor" href="#责任链模式的结构与实现" aria-hidden="true">#</a> 责任链模式的结构与实现</h2><h3 id="责任链模式的结构" tabindex="-1"><a class="header-anchor" href="#责任链模式的结构" aria-hidden="true">#</a> 责任链模式的结构</h3><ol><li>抽象处理者（Handler）角色：定义一个处理请求的接口，包含抽象处理方法和一个后继连接。</li><li>具体处理者（Concrete Handler）角色：实现抽象处理者的处理方法，判断能否处理本次请求，如果可以处理请求则处理，否则将该请求转给它的后继者。</li><li>客户类（Client）角色：创建处理链，并向链头的具体处理者对象提交请求，它不关心处理细节和请求的传递过程。</li></ol><h3 id="代码实现" tabindex="-1"><a class="header-anchor" href="#代码实现" aria-hidden="true">#</a> 代码实现</h3><blockquote><p>开发一个流程流转控制器功能，通过配置是否需要自动流转到下一个流程</p></blockquote><p><strong>定义抽象的handler接口</strong></p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token doc-comment comment">/**
 * 自动执行器抽象类
 */</span>
<span class="token keyword">public</span> <span class="token keyword">abstract</span> <span class="token keyword">class</span> <span class="token class-name">AbstractAutoHandler</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">S</span><span class="token punctuation">,</span> <span class="token class-name">T</span><span class="token punctuation">&gt;</span></span> <span class="token punctuation">{</span>
    <span class="token comment">// 下一个执行器</span>
    <span class="token keyword">protected</span> <span class="token class-name">AbstractAutoHandler</span> handler<span class="token punctuation">;</span>

    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">execute</span><span class="token punctuation">(</span><span class="token class-name">S</span> s<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// 判断是否需要自动执行</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token function">isAutoExec</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token class-name">T</span> t <span class="token operator">=</span> <span class="token function">doExecute</span><span class="token punctuation">(</span>s<span class="token punctuation">)</span><span class="token punctuation">;</span>

            <span class="token comment">//执行下一个自动执行器</span>
            <span class="token keyword">if</span> <span class="token punctuation">(</span>handler <span class="token operator">!=</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                handler<span class="token punctuation">.</span><span class="token function">execute</span><span class="token punctuation">(</span>t<span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>

    <span class="token doc-comment comment">/**
     * 业务逻辑实现
     */</span>
    <span class="token keyword">public</span> <span class="token keyword">abstract</span> <span class="token class-name">T</span> <span class="token function">doExecute</span><span class="token punctuation">(</span><span class="token class-name">S</span> s<span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token doc-comment comment">/**
     * 是否自动执行
     */</span>
    <span class="token keyword">public</span> <span class="token keyword">abstract</span> <span class="token keyword">boolean</span> <span class="token function">isAutoExec</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>定义具体实现事项</strong></p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token doc-comment comment">/**
 * 审核自动执行器
 */</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">ApproveHandler</span> <span class="token keyword">extends</span> <span class="token class-name">AbstractAutoHandler</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">List</span><span class="token punctuation">&lt;</span><span class="token class-name">Long</span><span class="token punctuation">&gt;</span><span class="token punctuation">,</span> <span class="token class-name">List</span><span class="token punctuation">&lt;</span><span class="token class-name">Long</span><span class="token punctuation">&gt;</span><span class="token punctuation">&gt;</span></span> <span class="token punctuation">{</span>

    <span class="token keyword">public</span> <span class="token class-name">ApproveHandler</span><span class="token punctuation">(</span><span class="token annotation punctuation">@Autowired</span> <span class="token annotation punctuation">@Qualifier</span><span class="token punctuation">(</span><span class="token string">&quot;geneHandler&quot;</span><span class="token punctuation">)</span> <span class="token class-name">AbstractAutoHandler</span> handler<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>handler <span class="token operator">=</span> handler<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Long</span><span class="token punctuation">&gt;</span></span> <span class="token function">doExecute</span><span class="token punctuation">(</span><span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Long</span><span class="token punctuation">&gt;</span></span> list<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// 业务实现...</span>
    <span class="token punctuation">}</span>

    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token keyword">boolean</span> <span class="token function">isAutoExec</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// 业务实现...</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token doc-comment comment">/**
 * 单据生成自动执行器
 */</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">GeneHandler</span> <span class="token keyword">extends</span> <span class="token class-name">AbstractAutoHandler</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">List</span><span class="token punctuation">&lt;</span><span class="token class-name">Long</span><span class="token punctuation">&gt;</span><span class="token punctuation">,</span> <span class="token class-name">List</span><span class="token punctuation">&lt;</span><span class="token class-name">Long</span><span class="token punctuation">&gt;</span><span class="token punctuation">&gt;</span></span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token class-name">GeneHandler</span><span class="token punctuation">(</span><span class="token annotation punctuation">@Autowired</span> <span class="token annotation punctuation">@Qualifier</span><span class="token punctuation">(</span><span class="token string">&quot;confirmHandler&quot;</span><span class="token punctuation">)</span> <span class="token class-name">AbstractAutoHandler</span> handler<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>handler <span class="token operator">=</span> handler<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Long</span><span class="token punctuation">&gt;</span></span> <span class="token function">doExecute</span><span class="token punctuation">(</span><span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Long</span><span class="token punctuation">&gt;</span></span> list<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// 业务实现...</span>
    <span class="token punctuation">}</span>

    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token keyword">boolean</span> <span class="token function">isAutoExec</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// 业务实现...</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token doc-comment comment">/**
 * 自动确认执行器
 */</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">ConfirmHandler</span> <span class="token keyword">extends</span> <span class="token class-name">AbstractAutoHandler</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">List</span><span class="token punctuation">&lt;</span><span class="token class-name">Long</span><span class="token punctuation">&gt;</span><span class="token punctuation">,</span> <span class="token class-name">List</span><span class="token punctuation">&lt;</span><span class="token class-name">Long</span><span class="token punctuation">&gt;</span><span class="token punctuation">&gt;</span></span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token class-name">ConfirmHandler</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token punctuation">}</span>
    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Long</span><span class="token punctuation">&gt;</span></span> <span class="token function">doExecute</span><span class="token punctuation">(</span><span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Long</span><span class="token punctuation">&gt;</span></span> list<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// 业务实现...</span>
    <span class="token punctuation">}</span>

    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token keyword">boolean</span> <span class="token function">isAutoExec</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// 业务实现...</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>注意：需要在每个具体handler里面执行下一个需要执行的handler，直到最后一个</p><p>可以看到我们在构造器中定义的关系强耦合，如果现在我们需要改变顺序或者是新增其他handler，需要改动代码，可扩展性较差</p><p>那么我们可以把 beanId 关系维护到数据库中，利用 spring 容器，根据 beanId 获取到每个具体的实例对象</p><p>这里就不多演示，有兴趣的可以自己尝试一下</p>`,23),c=[p];function l(o,i){return s(),a("div",null,c)}const d=n(t,[["render",l],["__file","22.行为型-责任链模式(Chain).html.vue"]]);export{d as default};
