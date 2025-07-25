---
title: 集合
---

# Python 集合（Collection）

> 此刻，其他阿开奥斯王子们都安然入睡，整夜酣眠，但阿特柔斯之子阿伽门农却心绪不宁，难以入眠。就像赫拉的丈夫宙斯在天空闪耀着闪电，预示着大雨、冰雹或雪花染白大地的冬天，又或预示着即将开启饥饿战争的广阔战端，阿伽门农也频频发出沉重的叹息，他的灵魂在体内颤抖。当他望着特洛伊平原时，他惊叹于伊利昂城前燃烧着的无数警卫篝火…… ——《伊利亚特》第十卷

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

从数据存储中获取嵌入向量及其相关数据。如果没有提供 `ids` 或 `where` 过滤条件，则返回从 `offset` 开始的最多 `limit` 个嵌入向量。

**参数**:

- `ids` - 要获取的嵌入向量的 ID。可选。
- `where` - 用于按元数据字段过滤结果的字典类型对象。例如：`{$and: [{"color" : "red"}, {"price": 4.20}]}`。可选。
- `limit` - 返回的文档数量。可选。
- `offset` - 开始返回结果的偏移量。与 `limit` 一起用于分页。可选。
- `where_document` - 用于按文档内容进行过滤的字典类型对象。例如：`{"$contains" : "hello"}`。可选。

- `include` - 一个列表，指定结果中要包含的内容。可以包含 `"embeddings"`、`"metadatas"`、`"documents"`。ID 始终会被包含。默认值为 `["metadatas", "documents"]`。可选参数。

**返回值**：

- `GetResult` - 一个 GetResult 对象