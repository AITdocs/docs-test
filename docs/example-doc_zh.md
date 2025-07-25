---
title: 集合
---

# Python 集合

> 此刻，其他阿开奥斯的诸位王子都安然入睡，整夜酣眠，但阿特柔斯之子阿伽门农却心绪难宁，辗转反侧。就像赫拉的丈夫宙斯在天空闪烁雷电，预示着大雨、冰雹、雪花覆盖大地的寒冬，或者预兆着即将开启饥饿的战争之口，阿伽门农也不断发出沉重的叹息，他的心灵在体内震颤。当他望向特洛伊平原时，惊叹于伊里翁城前燃烧的无数守夜篝火…… -《伊利亚特》第十卷

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
        """用于过滤嵌入向量的where条件"""
        where: Optional[Where] = None,
        limit: Optional[int] = None,
        offset: Optional[int] = None,
        where_document: Optional[WhereDocument] = None,
        include: Include = ["metadatas", "documents"]) -> GetResult
```

从数据存储中获取嵌入向量及其相关数据。如果没有提供 `ids` 或 `where` 过滤条件，则返回从 `offset` 开始的最多 `limit` 条记录。

**参数**:

- `ids` - 要获取的嵌入向量的ID。可选。
- `where` - 用于按元数据过滤结果的字典类型条件。例如：`{$and: [{"color" : "red"}, {"price": 4.20}]}`。可选。
- `limit` - 返回的文档数量。可选。
- `offset` - 开始返回结果的偏移量。与 `limit` 一起用于分页查询。可选。
- `where_document` - 用于按文档内容过滤的字典类型条件。例如：`{"$contains" : "hello"}`。可选。
- `include` - 指定结果中包含的内容，可以包含 `"embeddings"`、`"metadatas"`、`"documents"`。ID 始终包含在内。默认值为 `["metadatas", "documents"]`。可选。

**返回值**：

- `GetResult` - 一个 GetResult 对象