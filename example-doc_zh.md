---
title: 集合
---

# Python 集合（Collections）


> 现在其他阿开奥斯王子们都整夜安然酣睡，唯有阿特柔斯之子阿伽门农心绪烦乱，辗转难眠。就像赫拉的丈夫宙斯闪烁雷霆，预示着滂沱大雨、冰雹或雪花使大地一片银白，又或作为张开饥饿战争巨口的征兆，阿伽门农也一次次沉重地叹息，他的灵魂在胸中震颤不安。当他望向特洛伊平原时，看到伊里翁城前燃着无数的守望篝火，不禁心生惊叹…… ——《伊利亚特》第十卷

20250730 11:13


```python
class Collection(BaseModel)
```

## count

```python
def count() -> int
```

添加到数据库中的嵌入向量总数。

**返回**:

- `int` - 添加到数据库中的嵌入向量总数。

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
- `where` - 用于过滤结果的 Where 类型字典。例如：`{$and: [{"color" : "red"}, {"price": 4.20}]}`。可选。
- `limit` - 返回的文档数量。可选。
- `offset` - 开始返回结果的偏移量。与 limit 一起用于分页。可选。
- `where_document` - 用于根据文档内容进行过滤的 WhereDocument 类型字典。例如：`{"$contains" : "hello"}`。可选。
- `include` - 指定返回结果中包含的内容列表。可以包含 `"embeddings"`、`"metadatas"`、`"documents"`。ID 始终包含在内。默认值为 `["metadatas", "documents"]`。可选。

**返回**:

- `GetResult` - 一个 GetResult 对象