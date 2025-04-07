---
title: "Idea JRebel 热更新"
date: 2021-06-30 10:31:00
re: 2021-06-30-idea-jrebel-config
order: 2
---

# JRebel 热更新

最近在写 **springboot** 项目时，修改代码后都需要更新启动服务，当项目很大时，启动就很慢了，严重限制开发效率，所以就用上了热部署插件 **JReble**

:::tip

JRebel是一款JVM插件，它使得Java代码修改后不用重启系统，立即生效。记录一下插件配置步骤

:::

## 安装插件

在 **IDE** 的插件市场中查找插件并安装

![vscB1Q](https://media.zenghr.cn/blog/img/20210630/vscB1Q.png)

**在插件安装后 Idea 设置界面会出现 JRebel 的设置选项, 但是该插件是付费的，所以我们需要进行一些配置才能使用**

## 插件注册

在 **JRebel** 设置中填写注册信息:

- 先生成 GUID 信息，[GUID 在线生成工具](https://www.iamwawa.cn/guid.html)
- 根据反向代理服务器地址拼接激活地址，服务器地址：`https://jrebel.qekang.com/{你生成的GUID}`

在注册窗口第一个选项填写 上面拼接的 URL , 第二个选项填写你的邮箱地址 点击注册即可完成激活插件

## 插件配置

### 1. 开启离线模式

**设置JRebel插件进入离线工作模式，双击 Work offline 按钮，一定要设置！！！**

![VubDWo](https://media.zenghr.cn/blog/img/20210630/VubDWo.png)

**设置离线模式成功，如果离线模式到期。可以打开破解软件，再点击renew offline seat 即可刷新离线时间**

![FrLmbz](https://media.zenghr.cn/blog/img/20210630/FrLmbz.png)

### 2. 打开自动编译

:::tip

由于JRebel是实时监控class文件的变化来实现热部署的，所以在idea环境下需要打开自动编译功能才能实现随时修改，随时生效

:::

- 打开 IDEA 设置界面：`Build, Execution, Deployment` ==> ` Compiler` 然后勾选☑️  `Build project automatically`

![N5fXQZ](https://media.zenghr.cn/blog/img/20210630/N5fXQZ.png)

- Intellij IEDA 使用 `ctrl + shift + alt + / `快捷键选择 `Registry... `，勾选 `compiler.automake.allow.when.app.running`

![IseCCT](https://media.zenghr.cn/blog/img/20210630/IseCCT.png)

### 3. 使用 JRebel

将我们的项目使用JRebel进行管理项目，勾选中我们的 maven 项目，当勾选上之后，在我们 Maven 项目的 resources 文件夹下生成了管理文件`rebel.xml`，并且右上角多了两个按钮，使用 JRebel 启动，这样我们每次修改代码只需要稍微等待一会，就会自动更新代码了

![hPVkQC](https://media.zenghr.cn/blog/img/20210630/hPVkQC.png)

