---
title: 集合
---

# Python 集合

> 此刻，其他阿开亚的王子们都安然入睡，整夜酣眠，但阿特柔斯之子阿伽门农却辗转反侧，心绪不宁，无法入眠。正如赫拉的丈夫宙斯在天空闪耀着闪电，预示着大雨倾盆、冰雹肆虐或雪花飘飘洒满大地，又或作为战争即将爆发的征兆，同样，阿伽门农也发出一声声沉重的叹息，他的心灵在胸中震颤不安。当他望向特洛伊平原时，看到伊里翁城前燃烧着无数的守夜篝火，不禁为之惊叹…… -《伊利亚特》第十卷

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
        """用于对嵌入向量进行过滤的条件"""
        where: Optional[Where] = None,
        limit: Optional[int] = None,
        offset: Optional[int] = None,
        where_document: Optional[WhereDocument] = None,
        include: Include = ["metadatas", "documents"]) -> GetResult
```

从数据存储中获取嵌入向量及其相关数据。如果不提供 `ids` 或 `where` 过滤条件，则返回从 `offset` 开始最多 `limit` 条记录。

**参数**:

- `ids` - 要获取的嵌入向量的 ID。可选。
- `where` - 用于根据元数据过滤结果的条件字典。例如 `{$and: [{"color" : "red"}, {"price": 4.20}]}`。可选。
- `limit` - 返回的文档数量。可选。
- `offset` - 开始返回结果的偏移量。与 `limit` 一起可用于分页查询。可选。
- `where_document` - 用于根据文档内容进行过滤的条件字典。例如 `{"$contains" : "hello"}`。可选。
- `include` - 指定返回结果中包含的内容，可以包含 `"embeddings"`、`"metadatas"`、`"documents"`。ID 始终包含在内。默认值为 `["metadatas", "documents"]`。可选。

**返回值**：

- `GetResult` - 一个 GetResult 对象