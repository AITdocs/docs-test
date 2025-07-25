---
title: 集合
---

# Python 集合

> 此刻，其他阿开奥斯的王公们都酣睡整夜，唯有阿特柔斯之子阿伽门农心绪烦乱，难以入眠。就像赫拉的丈夫宙斯在天空闪动雷霆，预示着大雨倾盆、冰雹肆虐或雪花纷飞覆盖大地，又或作为战争即将爆发的征兆，同样地，阿伽门农长叹连连，内心震颤不安。当他望向特洛伊平原时，看到许多守夜的篝火在伊利翁城前燃烧，不禁为之惊叹…… -《伊利亚特》，第十卷

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
        """用于过滤嵌入向量的where条件"""
        where: Optional[Where] = None,
        limit: Optional[int] = None,
        offset: Optional[int] = None,
        where_document: Optional[WhereDocument] = None,
        include: Include = ["metadatas", "documents"]) -> GetResult
```

从数据存储中获取嵌入向量及其相关数据。如果没有提供 ids 或 where 条件，则返回从 offset 开始的最多 limit 个嵌入向量。

**参数**:

- `ids` - 要获取的嵌入向量的 ids。可选。
- `where` - 一个 Where 类型的字典，用于按元数据过滤结果。例如 `{$and: [{"color" : "red"}, {"price": 4.20}]}`。可选。
- `limit` - 返回的文档数量。可选。
- `offset` - 开始返回结果的偏移量。与 limit 一起用于分页查询。可选。
- `where_document` - 一个 WhereDocument 类型的字典，用于按文档内容进行过滤。例如 `{"$contains" : "hello"}`。可选。
- `include` - 一个列表，指定结果中包含的内容。可以包含 `"embeddings"`、`"metadatas"`、`"documents"`。ids 始终包含在内。默认为 `["metadatas", "documents"]`。可选。

**返回值**：

- `GetResult` - 一个包含结果的 `GetResult` 对象。