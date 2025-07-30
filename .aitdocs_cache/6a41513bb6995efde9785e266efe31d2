---
title: 集合
---

# Python 集合  11


> 此刻，其他的阿开亚王子们都安然入睡，但阿特柔斯之子阿伽门农却心绪烦乱，无法入眠。当他像赫拉的丈夫宙斯一样闪烁着闪电，预示着大雨、冰雹或雪花覆盖大地的暴风雪，或再次作为战争即将爆发的征兆时，他心中充满了沉重的叹息，他的灵魂在颤抖。当他望着特洛伊平原时，惊叹着伊利昂城前燃烧着的无数篝火…… ——《伊利亚特》第十卷



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
        """用于筛选嵌入向量的where条件"""
        where: Optional[Where] = None,
        limit: Optional[int] = None,
        offset: Optional[int] = None,
        where_document: Optional[WhereDocument] = None,
        include: Include = ["metadatas", "documents"]) -> GetResult
```

从数据存储中获取嵌入向量及其相关数据。如果没有提供 ids 或 where 条件，则返回从 offset 开始的最多 limit 个嵌入向量。

**参数**:

- `ids` - 要获取的嵌入向量的 ID。可选。
- `where` - 用于过滤嵌入向量的 `Where` 类型字典。例如：`{$and: [{"color" : "red"}, {"price": 4.20}]}`。可选。
- `limit` - 返回的文档数量。可选。
- `offset` - 开始返回结果的偏移量。与 limit 一起可用于分页查询结果。可选。
- `where_document` - 用于根据文档内容进行过滤的 `WhereDocument` 类型字典。例如：`{"$contains" : "hello"}`。可选。
- `include` - 指定结果中包含的内容。可以包含 `"embeddings"`、`"metadatas"`、`"documents"`。ids 始终会被包含。默认值为 `["metadatas", "documents"]`。可选。

**返回值**:

- `GetResult` - 一个 `GetResult` 对象