---
title: 集合
---

# Python 集合（Collection）

> 现在其他的阿开亚王子们都安然入睡度过整夜，但阿特柔斯之子阿伽门农却心绪不宁，无法安歇。就像赫拉的丈夫宙斯在天空中闪耀他的闪电，预示着大雨、冰雹或雪花染白大地的降雪，又或作为他即将开启饥饿战争的巨口的征兆，阿伽门农也不断发出沉重的叹息，他的灵魂在颤抖。当他望向特洛伊平原时，看到伊里翁城前燃烧着无数的守夜篝火，不禁惊叹不已…… ——《伊利亚特》第十卷

```python
class Collection(BaseModel)
```

## count

```python
def count() -> int
```

添加到数据库中的嵌入向量的总数。

**返回值**:

- `int` - 添加到数据库中的嵌入向量的总数。

## get

```python
def get(ids: Optional[OneOrMany[ID]] = None,
        """用于过滤嵌入向量的where条件"""
        where: Optional[Where] = None,
        limit: Optional[int] = None,
        offset: Optional[int] = None,
        where_document: Optional[WhereDocument] = None,
        include: Include = ["metadatas", "documents"]) -> GetResult
```

从数据存储中获取嵌入向量及其关联数据。如果未提供 ids 或 where 条件，则返回从 offset 开始最多 limit 个嵌入向量。

**参数**:

- `ids` - 要获取的嵌入向量的 ID。可选。
- `where` - 用于过滤结果的 Where 类型字典。例如：`{$and: [{"color" : "red"}, {"price": 4.20}]}`。可选。
- `limit` - 返回的文档数量。可选。
- `offset` - 开始返回结果的偏移量。与 limit 一起用于分页。可选。
- `where_document` - 用于根据文档内容进行过滤的 WhereDocument 类型字典。例如：`{"$contains" : "hello"}`。可选。

- `include` - 一个列表，指定在结果中包含哪些内容。可以包含 `"embeddings"`、`"metadatas"`、`"documents"`。Ids 始终包含在内。默认值为 `["metadatas", "documents"]`。可选。

**返回值**：

- `GetResult` - 一个 GetResult 对象