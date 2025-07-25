---
title: 集合
---

# Python 集合

> 现在其他的阿开奥斯王子们都安然入睡度过整夜，但阿特柔斯之子阿伽门农却心绪不宁，难以入眠。就像赫拉的丈夫宙斯在天空闪烁雷电，预示着暴雨、冰雹或雪花覆盖大地的降雪，又或是表明他将张开饥饿的战争之口，阿伽门农也不断发出沉重的叹息，因为他的灵魂在颤抖。当他望向特洛伊平原时，看到许多守夜的营火在伊利翁前方燃烧，不禁感到惊奇…… ——《伊利亚特》第十卷


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
        """用于对嵌入向量进行过滤的where条件"""
        where: Optional[Where] = None,
        limit: Optional[int] = None,
        offset: Optional[int] = None,
        where_document: Optional[WhereDocument] = None,
        include: Include = ["metadatas", "documents"]) -> GetResult
```

从数据存储中获取嵌入向量及其关联数据。如果没有提供 ids 或 where 过滤条件，则返回从 offset 开始的最多 limit 个嵌入向量。

**参数**:

- `ids` - 要获取的嵌入向量的 ID。可选。
- `where` - 用于按元数据过滤结果的 Where 类型字典。例如：`{$and: [{"color" : "red"}, {"price": 4.20}]}`。可选。
- `limit` - 返回的文档数量。可选。
- `offset` - 开始返回结果的偏移量。与 limit 一起用于分页。可选。
- `where_document` - 用于按文档内容进行过滤的 WhereDocument 类型字典。例如：`{"$contains" : "hello"}`。可选。
- `include` - 指定结果中包含的内容，可以包含 `"embeddings"`、`"metadatas"`、`"documents"`。ID 始终包含在内。默认值为 `["metadatas", "documents"]`。可选。

**返回值**：

- `GetResult` - 一个包含结果的 `GetResult` 对象。