---
title: 集合
---

# Python 集合

你好       

> 现在，其他阿开奥斯王子们都整夜安然入睡，但阿特柔斯之子阿伽门农却心绪不宁，无法安睡。当宙斯（赫拉美丽的丈夫）以闪电作为大雨、冰雹或雪花染白大地的征兆，或再次作为他将张开饥饿战争的巨口的预示时，阿伽门农也如此发出一声又一声沉重的叹息，因为他的灵魂在体内战栗。当他望着特洛伊平原时，对那些在伊利翁（特洛伊城）前燃烧的众多守夜篝火感到惊讶…… ——《伊利亚特》第十卷

```python
class Collection(BaseModel)
```

## count

```python
def count() -> int
```

添加到数据库中的嵌入向量的总数

**返回值**:

- `int` - 添加到数据库中的嵌入向量的总数

## get

```python
def get(ids: Optional[OneOrMany[ID]] = None,
        """应用在嵌入向量上的where过滤条件"""
        where: Optional[Where] = None,
        limit: Optional[int] = None,
        offset: Optional[int] = None,
        where_document: Optional[WhereDocument] = None,
        include: Include = ["metadatas", "documents"]) -> GetResult
```

从数据存储中获取嵌入向量及其相关数据。如果没有提供 ids 或 where 过滤条件，则返回从 offset 开始最多 limit 个嵌入向量。

**参数**:

- `ids` - 要获取的嵌入向量的 ids。可选参数。
- `where` - 用于按条件过滤结果的 Where 类型字典。例如：`{$and: [{"color" : "red"}, {"price": 4.20}]}`。可选参数。
- `limit` - 返回的文档数量。可选参数。
- `offset` - 开始返回结果的偏移量。与 limit 一起用于分页。可选参数。
- `where_document` - 用于按文档内容进行过滤的 WhereDocument 类型字典。例如：`{"$contains" : "hello"}`。可选参数。

- `include` - 一个列表，指定结果中要包含的内容。可以包含 `"embeddings"`、`"metadatas"`、`"documents"`。ID 始终会被包含。默认值为 `["metadatas", "documents"]`。可选。

**返回值**：

- `GetResult` - 一个 GetResult 对象