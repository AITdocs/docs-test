---
title: 集合
---

# Python 集合

> 现在其他的阿开奥斯王子们都安然入睡度过整夜，但阿特柔斯之子阿伽门农却心绪不宁，无法入眠。就像赫拉的丈夫宙斯在天空闪耀他的闪电，预示着大雨、冰雹或雪花染白大地的降雪，又或作为他即将开启饥饿战争的巨口的征兆，阿伽门农同样发出许多沉重的叹息，因为他的灵魂在他体内战栗。当他望向特洛伊平原时，他惊叹于伊利翁前方燃烧着的众多守夜篝火…… ——《伊利亚特》第十卷

```python
class Collection(BaseModel)
```

## count

```python
def count() -> int
```

添加到数据库中的嵌入向量的总数。

**返回**:

- `int` - 添加到数据库中的嵌入向量的总数。

## get

```python
def get(ids: Optional[OneOrMany[ID]] = None,
        """应用在嵌入向量上的 where 过滤条件"""
        where: Optional[Where] = None,
        limit: Optional[int] = None,
        offset: Optional[int] = None,
        where_document: Optional[WhereDocument] = None,
        include: Include = ["metadatas", "documents"]) -> GetResult
```

从数据存储中获取嵌入向量及其相关数据。如果没有提供 ids 或 where 过滤条件，则返回从 offset 开始最多 limit 个嵌入向量。

**参数**:

- `ids` - 要获取的嵌入向量的 ID。可选。
- `where` - 用于过滤结果的 `Where` 类型字典。例如：`{$and: [{"color" : "red"}, {"price": 4.20}]}`。可选。
- `limit` - 返回的文档数量。可选。
- `offset` - 开始返回结果的偏移量。与 limit 一起用于分页。可选。
- `where_document` - 用于通过文档内容进行过滤的 `WhereDocument` 类型字典。例如：`{"$contains" : "hello"}`。可选。
- `include` - 结果中包含的内容列表。可以包含 `"embeddings"`、`"metadatas"`、`"documents"`。ID 始终包含在内。默认为 `["metadatas", "documents"]`。可选。

**返回值**：

- `GetResult` - 一个包含结果的 GetResult 对象。