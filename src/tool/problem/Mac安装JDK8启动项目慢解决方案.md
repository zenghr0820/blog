---
title: "Mac安装JDK8启动项目慢解决方案"
date: 2022-01-11 13:50:00
re: mac-jdk8-slow-solution
---

# Mac安装JDK8启动项目慢解决方案

在使用 Mac 系统启动 SpringBoot 项目时，切换到 JDK8 发现启动超级慢，切换回 JDK12 又不会这样，后来才发现是MacOS 使用 Java8 的时候都会出现获取主机名会出现这个时间超长的问题

>系统环境
>
>- macOS Catalina 10.15.4
>- JDK版本 - ***1.8.0.292***

## 解决方案

- 打开终端输入 ***`hostname`*** ，查看你的mac的主机名称，把它给复制下来

- 修改  ***`/etc/hosts文件`*** ，大家应该都知道这个文件是做什么的

- 没修改前应该是这个样子

  ```shell
  ##
  127.0.0.1		localhost
  255.255.255.255	broadcasthost
  ::1             localhost
  ```

- 修改后

  ```shell
  ##
  127.0.0.1		localhost macBook-Pro.local
  255.255.255.255	broadcasthost
  ::1             localhost macBook-Pro.local
  ```

- ***`macBook-Pro.local`*** 即是前边复制下的主机名

  好了，再运行项目就可以了, 只有在 JDK8 才会出现该问题，在 JDK11 正常。

