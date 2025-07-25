---
title: 集合
---

# Python 集合

> 现在其他的阿开奥斯王子们都整夜安睡，但阿特柔斯之子阿伽门农却心绪烦乱，无法安眠。就像赫拉的丈夫宙斯在天空闪耀他的闪电，预示着大雨、冰雹或雪花覆盖大地的暴风雪，或者又是战争即将爆发的征兆，阿伽门农也一次次地发出沉重的叹息，因为他的灵魂在颤抖。当他望向特洛伊平原时，看到伊里翁城前燃起的众多警卫篝火，不禁感到惊奇…… ——《伊利亚特》第十卷

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
        """where filter to apply to the embeddings"""
        where: Optional[Where] = None,
        limit: Optional[int] = None,
        offset: Optional[int] = None,
        where_document: Optional[WhereDocument] = None,
        include: Include = ["metadatas", "documents"]) -> GetResult
```

从数据存储中获取嵌入向量及其关联数据。如果没有提供 ids 或 where 过滤器，则返回从 offset 开始最多 limit 条记录的所有嵌入向量。

**参数**:

- `ids` - 要获取的嵌入向量的 ID。可选。
- `where` - 用于过滤结果的 `Where` 类型的字典。例如：`{$and: [{"color" : "red"}, {"price": 4.20}]}`。可选。
- `limit` - 返回的文档数量。可选。
- `offset` - 开始返回结果的偏移量。与 limit 一起用于分页。可选。
- `where_document` - 用于通过文档内容进行过滤的 `WhereDocument` 类型的字典。例如：`{"$contains" : "hello"}`。可选。
- `include` - 指定结果中包含的内容列表。可以包含 `"embeddings"`、`"metadatas"`、`"documents"`。ID 始终包含在内。默认为 `["metadatas", "documents"]`。可选。

**返回值**：

- `GetResult` - 一个 GetResult 对象