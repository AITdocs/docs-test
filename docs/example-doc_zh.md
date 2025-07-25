---
title: 集合
---

# Python 集合

> 此刻，其他阿开亚的王公们都安然入睡，整夜酣眠，唯有阿特柔斯之子阿伽门农心绪不宁，辗转反侧，难以入眠。就像赫拉的丈夫宙斯在天空闪烁雷霆，预示着大雨倾盆、冰雹肆虐或雪花纷飞，大地银装素裹；又或作为战争即将爆发的征兆，张开饥饿的战争巨口，阿伽门农亦是如此长吁短叹，内心震颤不安。当他凝视着特洛伊平原时，望着伊利翁城前燃烧的众多守夜篝火，不禁心生惊叹…… ——《伊利亚特》，第十卷


```python
class Collection(BaseModel)
```

## count

```python
def count() -> int
```

添加到数据库中的嵌入向量总数。

**返回值**:

- `int` - 添加到数据库中的嵌入向量总数。

## get

```python
def get(ids: Optional[OneOrMany[ID]] = None,
        """用于过滤嵌入向量的 where 条件"""
        where: Optional[Where] = None,
        limit: Optional[int] = None,
        offset: Optional[int] = None,
        where_document: Optional[WhereDocument] = None,
        include: Include = ["metadatas", "documents"]) -> GetResult
```

从数据存储中获取嵌入向量及其关联数据。如果不提供 `ids` 或 `where` 过滤条件，则返回从 `offset` 开始最多 `limit` 个嵌入向量。

**参数**:

- `ids` - 要获取的嵌入向量的 ID。可选。
- `where` - 用于过滤结果的 `Where` 类型字典。例如：`{$and: [{"color" : "red"}, {"price": 4.20}]}`。可选。
- `limit` - 返回的文档数量。可选。
- `offset` - 开始返回结果的偏移量。与 `limit` 一起用于分页查询。可选。
- `where_document` - 用于根据文档内容进行过滤的 `WhereDocument` 类型字典。例如：`{"$contains" : "hello"}`。可选。
- `include` - 指定结果中包含的内容，可以包含 `"embeddings"`、`"metadatas"`、`"documents"`。ID 始终会被包含。默认值为 `["metadatas", "documents"]`。可选。

**返回值**：

- `GetResult` - 一个 GetResult 对象