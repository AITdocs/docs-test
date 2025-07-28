---
title: 集合
---

# Python 集合

Hello World,22

> 现在，其他阿开亚王子们都整夜安睡，但阿特柔斯之子阿伽门农却心烦意乱，无法入眠。正如赫拉的丈夫宙斯在天空闪烁他的闪电，预示着大雨、冰雹或雪花使大地变白，或者又作为他将张开饥饿战争的巨口的征兆，阿伽门农同样长叹连连，他的灵魂在胸中震颤。当他注视着特洛伊平原时，看到伊利昂城前燃烧着众多守夜的篝火，不禁感到惊异…… ——《伊利亚特》，第10卷

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
        """where filter to apply to the embeddings"""
        where: Optional[Where] = None,
        limit: Optional[int] = None,
        offset: Optional[int] = None,
        where_document: Optional[WhereDocument] = None,
        include: Include = ["metadatas", "documents"]) -> GetResult
```

从数据存储中获取嵌入向量及其关联数据。如果没有提供 ids 或 where 过滤条件，则返回从 offset 开始最多 limit 个嵌入向量。

**参数**:

- `ids` - 要获取的嵌入向量的 ID。可选。
- `where` - 用于过滤结果的 Where 类型字典。例如 `{$and: [{"color" : "red"}, {"price": 4.20}]}`。可选。
- `limit` - 返回的文档数量。可选。
- `offset` - 开始返回结果的偏移量。与 limit 一起用于分页。可选。
- `where_document` - 用于根据文档内容进行过滤的 WhereDocument 类型字典。例如 `{"$contains" : "hello"}`。可选。

- `include` - 一个列表，指定结果中要包含的内容。可以包含 `"embeddings"`、`"metadatas"`、`"documents"`。ID 始终会被包含。默认值为 `["metadatas", "documents"]`。可选。

**返回值**：

- `GetResult` - 一个 GetResult 对象