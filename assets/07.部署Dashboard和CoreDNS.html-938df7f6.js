import{_ as d}from"./plugin-vue_export-helper-c27b6911.js";import{r,o as i,c as o,d as e,e as a,b as c,a as n}from"./app-2b9eaf17.js";const l={},t=n(`<h1 id="部署dashboard和coredns" tabindex="-1"><a class="header-anchor" href="#部署dashboard和coredns" aria-hidden="true">#</a> 部署Dashboard和CoreDNS</h1><h2 id="一、部署dashboard" tabindex="-1"><a class="header-anchor" href="#一、部署dashboard" aria-hidden="true">#</a> 一、部署Dashboard</h2><h3 id="_1-1-dashboard简介" tabindex="-1"><a class="header-anchor" href="#_1-1-dashboard简介" aria-hidden="true">#</a> 1.1 Dashboard简介</h3><p>Dashboard 是基于网页的 Kubernetes 用户界面。您可以使用 Dashboard 将容器应用部署到 Kubernetes 集群中，也可以对容器应用排错，还能管理集群资源。您可以使用 Dashboard 获取运行在集群中的应用的概览信息，也可以创建或者修改 Kubernetes 资源（如 Deployment，Job，DaemonSet 等等）。例如，您可以对 Deployment 实现弹性伸缩、发起滚动升级、重启 Pod 或者使用向导创建新的应用。</p><p>Dashboard 同时展示了 Kubernetes 集群中的资源状态信息和所有报错信息。</p><figure><img src="https://media.zenghr.cn/blog/img/ui-dashboard.png" alt="ui-dashboard" tabindex="0" loading="lazy"><figcaption>ui-dashboard</figcaption></figure><h3 id="_1-2-下载-yaml-文件" tabindex="-1"><a class="header-anchor" href="#_1-2-下载-yaml-文件" aria-hidden="true">#</a> 1.2 下载 YAML 文件</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">wget</span> https://raw.githubusercontent.com/kubernetes/dashboard/v2.0.0/aio/deploy/recommended.yaml
<span class="token comment"># 默认Dashboard只能集群内部访问，修改Service为NodePort类型，暴露到外部：</span>
<span class="token function">vim</span> recommended.yaml
<span class="token comment"># 修改如下</span>
kind: Service
apiVersion: v1
metadata:
  labels:
    k8s-app: kubernetes-dashboard
  name: kubernetes-dashboard
  namespace: kubernetes-dashboard
spec:
  ports:
    - port: <span class="token number">443</span>
      targetPort: <span class="token number">8443</span>
      nodePort: <span class="token number">30001</span>
  type: NodePort
  selector:
    k8s-app: kubernetes-dashboard
    
<span class="token comment"># 启动服务</span>
kubectl apply <span class="token parameter variable">-f</span> recommended.yaml
<span class="token comment"># 查看</span>
kubectl get pods,svc <span class="token parameter variable">-n</span> kubernetes-dashboard
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,8),b={href:"https://nodeip:30001/",target:"_blank",rel:"noopener noreferrer"},p=n(`<h2 id="二、部署-dns" tabindex="-1"><a class="header-anchor" href="#二、部署-dns" aria-hidden="true">#</a> 二、部署 DNS</h2><h3 id="_2-1-coredns简介" tabindex="-1"><a class="header-anchor" href="#_2-1-coredns简介" aria-hidden="true">#</a> 2.1 coreDNS简介</h3><p>服务发现是 K8s 的一项很重要的功能。K8s 的服务发现有两种方式，一种是将 svc 的 ClusterIP 以环境变量的方式注入到 pod 中；一种就是 DNS，从 1.13 版本开始，coreDNS 就取代了 kube dns 成为了内置的 DNS 服务器。</p><h3 id="_2-2-下载部署脚本" tabindex="-1"><a class="header-anchor" href="#_2-2-下载部署脚本" aria-hidden="true">#</a> 2.2 下载部署脚本</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">git</span> clone https://github.com/coredns/deployment.git
<span class="token builtin class-name">cd</span> deployment/kubernetes
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2-3-部署" tabindex="-1"><a class="header-anchor" href="#_2-3-部署" aria-hidden="true">#</a> 2.3 部署</h3><p>总体流程是我们使用 <code>deploy.sh</code> 生成 yaml 并保存成 <code>coredns.yaml</code> 文件并执行 <code>kubectl apply -f coredns.yaml</code> 进行部署 ，如果要卸载，执行 <code>kubectl delete -f coredns.yaml</code></p><p><code>deploy.sh</code> 脚本依赖 <code>jq</code> 命令，所以先确保 <code>jq</code> 已安装: <strong><code>apt install -y jq</code></strong></p><div class="hint-container tip"><p class="hint-container-title">提示</p><p>如果集群中没有 kube-dns 或低版本 coredns，我们直接用 <code>-i</code> 参数指定集群 DNS 的 CLUSTER IP，这个 IP 是安装集群时就确定好的，可以在 <code>kubelet</code> 的 <code>clusterDNS</code> 配置设置，示例:</p></div><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>./deploy.sh <span class="token parameter variable">-i</span> <span class="token number">10.0</span>.0.2 <span class="token operator">&gt;</span> coredns.yaml
kubectl apply <span class="token parameter variable">-f</span> coredns.yaml
<span class="token comment"># 查看是否部署成功</span>
kubectl get pods <span class="token parameter variable">-n</span> kube-system 
<span class="token operator">&gt;</span>
NAME                          READY   STATUS    RESTARTS   AGE
coredns-5ffbfd976d-j6shb      <span class="token number">1</span>/1     Running   <span class="token number">0</span>          32s

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,10);function m(h,u){const s=r("ExternalLinkIcon");return i(),o("div",null,[t,e("p",null,[a("访问地址："),e("a",b,[a("https://NodeIP:30001"),c(s)])]),p])}const g=d(l,[["render",m],["__file","07.部署Dashboard和CoreDNS.html.vue"]]);export{g as default};
