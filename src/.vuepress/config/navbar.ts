import { navbar } from "vuepress-theme-hope";

export const navbarConfig = navbar([
    { text: "主页", icon: "home", link: "/" },
    {
        text: "Java",
        icon: "leaf",
        children: [
            {
                text: "Java 基础与面向对象",
                prefix: "/Java/basic/",
                children: [
                    {
                        text: "Java 基础知识",
                        link: "01.Java基础 - 快速入门.md"
                    },
                    {
                        text: "Java 面向对象",
                        link: "02.Java基础 - 面向对象.md"
                    }
                ]
            },
            {
                text: "Java进阶 - 集合框架",
                prefix: "/Java/collection/",
                children: [
                    {
                        text: "Java 集合框架",
                        link: "01.Java集合框架体系.md"
                    }
                ]
            },
            {
                text: "Java进阶 - IO框架",
                prefix: "/Java/io/",
                children: [
                    {
                        text: "Java I/O知识详解",
                        link: "01.Java-IO-流基础.md"
                    }
                ]
            }
        ]
    },
    {
        text: "Spring",
        children: [
            {
                text: "SpringBoot 系列",
                link: "/spring/spring-boot/自定义参数解析器.md"
            },
            {
                text: "Spring Cloud 基础",
                link: "/spring/spring-cloud/spring-cloud-alibaba.html"
            }
        ]
    },
    {
        text: "数据库",
        icon: "database",
        children: [
            {
                text: "SQL数据库",
                prefix: "/database/mysql/",
                children: [
                    {
                        text: "Mysql",
                        link: "01.mysql 创建用户并赋权.md"
                    }
                ]
            },
            {
                text: "NOSQL数据库",
                children: [
                    {
                        text: "Redis",
                        link: "/database/redis/00.Redis-知识体系.md"
                    },
                    {
                        text: "Mongo",
                        link: "/database/mongo/01.Mongo-知识体系.md"
                    },
                    {
                        text: "Elasticsearch",
                        link: "/database/elasticsearch/01.Elasticsearch-知识体系.md"
                    },
                ]
            }
        ]
    },
    {
        text: "开发笔记",
        icon: "code",
        children: [
            {
                text: "常用框架",
                prefix:"/frame/",
                children: [
                    { text: "Activity7 系列", icon: "", link: "activity7/" },
                ]
            },
            {
              text: "开发架构",
              children: [
                { text: "Golang", icon: "", link: "/golang/" },
              ]
            },
            {
              text: "开发指南",
              prefix:"/dev-guide/design/",
              children: [
                { text: "设计模式", icon: "object-ungroup", link: "00.设计模式-Overview.md" },
              ]
            }
        ]
    },
    {
        text: "工具|部署",
        icon: "hammer",
        children: [
            {
                text: "容器",
                prefix: "/tool/",
                children: [
                    {
                        text: "Docker",
                        link: "docker/01.安装Docker.md"
                    },
                    {
                        text: "Kubernetes",
                        link: "kubernetes/00.kubernetes安装环境.md"
                    }
                ]
            },
            {
                text: "工具",
                prefix: "/tool/",
                children: [
                    {
                        text: "Git",
                        link: "git/01.git 常用命令.md"
                    },
                    {
                        text: "Nginx",
                        link: "nginx/01.安装Nginx.md"
                    }
                ]
            },
        ]
    },
    // 其它
    {
        text: "关于本站",
        icon: "ghost",
        children: [
            {
                text: "荒腔走板",
                icon: "comment",
                link: "/chit-chat/",
            },
            {
                text: "链接",
                icon: "link",
                link: "/link/",
            }
        ]
    },
]);