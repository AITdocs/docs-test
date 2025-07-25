---
title: 集合
---

# Python 集合

> 此刻，其他阿开亚人的首领们都酣睡整夜，唯有阿特柔斯之子阿伽门农心绪烦乱，难以入眠。当他看着赫拉的丈夫宙斯在天空中闪耀着闪电，预示着大雨、冰雹或雪花覆盖大地的暴风雪，又或预示着即将开启饥渴的战争之口时，阿伽门农也发出了一次次沉重的叹息，他的心灵在体内震颤。当他凝视特洛伊平原时，惊叹于伊利翁城前燃烧着的众多守望之火…… ——《伊利亚特》第十卷

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

从数据存储中获取嵌入向量及其相关数据。如果没有提供 ids 或 where 过滤条件，则返回从 offset 开始、最多 limit 个嵌入向量。

**参数**:

- `ids` - 要获取的嵌入向量的 ID。可选。
- `where` - 用于按元数据过滤结果的 `Where` 类型字典。例如 `{"$and": [{"color" : "red"}, {"price": 4.20}]}`。可选。
- `limit` - 返回的文档数量。可选。
- `offset` - 开始返回结果的偏移量。与 limit 一起用于分页查询。可选。
- `where_document` - 用于按文档内容过滤的 `WhereDocument` 类型字典。例如 `{"$contains" : "hello"}`。可选。
- `include` - 指定返回结果中包含的内容。可以包含 `"embeddings"`、`"metadatas"`、`"documents"`。ID 始终包含在内。默认为 `["metadatas", "documents"]`。可选。

**返回值**:

- `GetResult` - 一个包含结果的 GetResult 对象。