---
title: 集合
---

# Python 集合

Hello World,22

> 现在，其他的阿开亚王子们都整夜酣睡，但阿特柔斯之子阿伽门农却心绪烦乱，难以入眠。就像赫拉的丈夫宙斯在天空闪烁雷电，预示着暴雨、冰雹或雪花覆盖大地的严寒，又或昭示着即将开启饥饿的战争之口，阿伽门农同样长吁短叹，内心震颤不安。当他望向特洛伊平原时，看到伊利昂城前燃烧着无数的营火，不禁惊叹不已…… -《伊利亚特》第十卷

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
        """应用到嵌入向量的 where 过滤条件"""
        where: Optional[Where] = None,
        limit: Optional[int] = None,
        offset: Optional[int] = None,
        where_document: Optional[WhereDocument] = None,
        include: Include = ["metadatas", "documents"]) -> GetResult
```

从数据存储中获取嵌入向量及其相关数据。如果不提供 ids 或 where 过滤条件，则返回从 offset 开始的最多 limit 个嵌入向量。

**参数**:

- `ids` - 要获取的嵌入向量的 ID。可选。
- `where` - 用于按元数据过滤结果的 Where 类型字典。例如 `{$and: [{"color" : "red"}, {"price": 4.20}]}`。可选。
- `limit` - 返回的文档数量。可选。
- `offset` - 开始返回结果的偏移量。与 limit 一起用于分页查询。可选。
- `where_document` - 用于按文档内容过滤的 WhereDocument 类型字典。例如 `{"$contains" : "hello"}`。可选。

- `include` - 一个列表，指定在结果中包含哪些内容。可以包含 `"embeddings"`、`"metadatas"`、`"documents"`。ID 始终会被包含。默认值为 `["metadatas", "documents"]`。可选参数。


**返回值**：

- `GetResult` - 一个 `GetResult` 对象