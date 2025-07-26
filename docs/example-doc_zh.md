---
title: 集合
---

# Python 集合

> 此刻其他阿开亚诸王都安然度过整夜，唯有阿特柔斯之子阿伽门农心绪不宁，难以入眠。正如赫拉的丈夫宙斯在天空闪耀他的闪电，预示着大雨、冰雹或雪花覆盖大地的暴风雪，又或作为战争巨口即将张开的征兆，同样地，阿伽门农长叹连连，内心震颤不安。当他望向特洛伊平原时，看到伊利翁城前燃起无数守夜的篝火，不禁心生惊异…… ——《伊利亚特》第十卷


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

从数据存储中获取嵌入向量及其相关数据。如果没有提供 ids 或 where 过滤条件，则返回从 offset 开始最多 limit 个嵌入向量。

**参数**:

- `ids` - 要获取的嵌入向量的 ID。可选。
- `where` - 一个 `Where` 类型的字典，用于按元数据过滤结果。例如：`{$and: [{"color" : "red"}, {"price": 4.20}]}`。可选。
- `limit` - 返回的文档数量。可选。
- `offset` - 开始返回结果的偏移量。与 limit 配合可用于分页。可选。
- `where_document` - 一个 `WhereDocument` 类型的字典，用于按文档内容进行过滤。例如：`{"$contains" : "hello"}`。可选。
- `include` - 一个列表，指定结果中包含的内容，可包含 `"embeddings"`、`"metadatas"`、`"documents"`。ID 始终包含在内。默认为 `["metadatas", "documents"]`。可选。

**返回值**：

- `GetResult` - 一个 GetResult 对象