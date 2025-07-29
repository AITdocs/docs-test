# Chroma 参考文档

## 客户端 API

Chroma 目前提供了一等支持的 Python 和 JavaScript 客户端。对于其他语言的客户端，请参考它们各自的仓库以获取文档。

`Client` - 是封装了与 Chroma 数据库后端连接的对象。

`Collection` - 是封装了一个集合的对象。

{% special_table %}
{% /special_table %}

|              | 客户端                | 集合                        |
|--------------|-----------------------|----------------------------|
| Python | [客户端](./python/client) | [集合](./python/collection) |
| JavaScript | [客户端](./js/client) | [集合](./js/collection)  |

***

## 后端 API

Chroma 的后端 Swagger REST API 文档可以通过运行 Chroma 并访问 `http://localhost:8000/docs` 来查看。

```bash
# 使用 pip 安装 chromadb
pip install chromadb
chroma run
open http://localhost:8000/docs
```