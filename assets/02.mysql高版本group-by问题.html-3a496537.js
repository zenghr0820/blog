const e=JSON.parse('{"key":"v-59e71a4a","path":"/database/mysql/02.mysql%E9%AB%98%E7%89%88%E6%9C%ACgroup-by%E9%97%AE%E9%A2%98.html","title":"Mysql 高版本group by问题","lang":"zh-CN","frontmatter":{"title":"Mysql 高版本group by问题","date":"2021-07-06T00:00:00.000Z","re":"2021-07-06-group-by-error","description":"在 Mysql 5.7 以上的版本中，默认配置了 sqlmode：ONLYFULLGROUPBY 对于GROUP BY聚合操作，如果在SELECT中的列，没有在GROUP BY中出现，那么这个SQL是不合法的 本文记录一下 mysql 执行 group by 语句时遇到的错误，以及修改方案 查看 mysql 全局的 sql_mode 进入 Mysql ...","permalink":"/passages/2021-07-06-group-by-error.html","head":[["meta",{"property":"og:url","content":"https://blog.zenghr.cn/passages/2021-07-06-group-by-error.html"}],["meta",{"property":"og:site_name","content":"Zenghr"}],["meta",{"property":"og:title","content":"Mysql 高版本group by问题"}],["meta",{"property":"og:description","content":"在 Mysql 5.7 以上的版本中，默认配置了 sqlmode：ONLYFULLGROUPBY 对于GROUP BY聚合操作，如果在SELECT中的列，没有在GROUP BY中出现，那么这个SQL是不合法的 本文记录一下 mysql 执行 group by 语句时遇到的错误，以及修改方案 查看 mysql 全局的 sql_mode 进入 Mysql ..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"article:author","content":"Zenghr"}],["meta",{"property":"article:published_time","content":"2021-07-06T00:00:00.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Mysql 高版本group by问题\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2021-07-06T00:00:00.000Z\\",\\"dateModified\\":null,\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Zenghr\\"}]}"]]},"headers":[{"level":2,"title":"查看 mysql 全局的 sql_mode","slug":"查看-mysql-全局的-sql-mode","link":"#查看-mysql-全局的-sql-mode","children":[]},{"level":2,"title":"修改 my.cnf 配置文件","slug":"修改-my-cnf-配置文件","link":"#修改-my-cnf-配置文件","children":[]},{"level":2,"title":"sql_mode常用值","slug":"sql-mode常用值","link":"#sql-mode常用值","children":[]}],"git":{},"readingTime":{"minutes":2.2,"words":659},"filePathRelative":"database/mysql/02.mysql高版本group-by问题.md","localizedDate":"2021年7月6日","autoDesc":true,"excerpt":""}');export{e as data};
