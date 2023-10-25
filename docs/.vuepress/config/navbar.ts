import { navbar } from "vuepress-theme-hope";

export const navbarConfig = navbar([
    {
        text: "最新",
        link: "/article/"
    },
    {
        text: "Java",
        icon: "java",
        children: [
            {
                text: "Java 基础与面向对象",
                children: [
                    {
                        text: "Java 基础知识",
                        link: "/passages/2021-04-09-java-lan-basic.html"
                    },
                    {
                        text: "Java 面向对象",
                        link: "/passages/2021-04-09-java-basic-oop.html"
                    }
                ]
            },
            {
                text: "Java进阶 - 集合框架",
                children: [
                    {
                        text: "Java 集合框架",
                        link: "/passages/2021-04-25-java-collection-frame.html"
                    }
                ]
            },
            {
                text: "Java进阶 - IO框架",
                children: [
                    {
                        text: "Java I/O知识详解",
                        link: "/passages/2021-05-05-java-io-basic.html"
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
                link: "/passages/2021-08-18-springboot-argument-resolver.html"
            },
            {
                text: "Spring Cloud 基础",
                link: "/passages/2021-07-27-spring-cloud-alibaba.html"
            }
        ]
    },
    {
        text: "数据库",
        children: [
            {
                text: "SQL数据库",
                children: [
                    {
                        text: "Mysql",
                        link: "/passages/2021-06-29-mysql-manage-auth.html"
                    }
                ]
            },
            {
                text: "NOSQL数据库",
                children: [
                    {
                        text: "Redis",
                        link: "/passages/2021-08-02-redis-overview.html"
                    },
                    {
                        text: "Mongo",
                        link: "/passages/2021-08-15-mongo-overview.html"
                    },
                    {
                        text: "Elasticsearch",
                        link: "/passages/2021-08-06-elasticsearch.html"
                    },
                ]
            }
        ]
    },
    {
        text: "框架",
        children: [
            {
                text: "常用框架",
                children: [
                    {
                        text: "Activity7 系列",
                        link: "/passages/2021-07-21-activiti7-note.html"
                    }
                ]
            }
        ]
    },
    {
        text: "Golang",
        link: "/golang/"
    },
    {
        text: "工具|部署",
        icon: "relation",
        children: [
            {
                text: "容器",
                children: [
                    {
                        text: "Docker",
                        link: "/passages/2020-02-24-docker-install.html"
                    },
                    {
                        text: "Kubernetes",
                        link: "/passages/2020-08-12-kubernetes-deploy-ready.html"
                    }
                ]
            },
            {
                text: "工具",
                children: [
                    {
                        text: "Git",
                        link: "/passages/2021-06-28-git-common-cmd.html"
                    },
                    {
                        text: "Nginx",
                        link: "/passages/2020-02-25-nginx-install.html"
                    }
                ]
            },
        ]
    },
    {
        text: "开发指南",
        children: [
            {
                text: "设计模式",
                children: [
                    {
                        text: "设计模式 - Overview",
                        link: "/passages/dev-pattern-overview.html"
                    }
                ]
            }
        ]
    },
    // 其它
    {
        text: "荒腔走板",
        link: "/chit-chat/",
    }
    
    //
    // {
    //     text: "面试",
    //     link: "/zh/guide/README.md",
    //     icon: "editor",
    //     // 仅在 `/zh/guide/` 激活
    //     activeMatch: "^/zh/guide/$",
    // },
    // {
    //     text: "项目",
    //     link: "/zh/guide/README.md",
    //     icon: "creative",
    //     // 仅在 `/zh/guide/` 激活
    //     activeMatch: "^/zh/guide/$",
    // },
]);