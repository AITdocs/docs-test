---
title: 集合
---

# Python 集合

> 此刻，其他所有的阿开亚王子都安然入睡，整夜酣眠，唯有阿特柔斯之子阿伽门农心绪烦乱，辗转难眠。正如赫拉的丈夫宙斯在天空闪耀着闪电，预示着大雨、冰雹或雪花染白大地，又或作为即将开启饥饿战争之巨口的征兆，同样，阿伽门农也发出一声又一声沉重的叹息，他的心灵在胸中震颤。当他凝视着特洛伊平原时，看到前方伊利翁城头燃起了无数守夜的篝火，不禁感到惊奇…… ——《伊利亚特》第十卷


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

从数据存储中获取嵌入向量及其关联数据。如果没有提供 ids 或 where 条件，则返回从 offset 开始的最多 limit 个嵌入向量。

**参数**:

- `ids` - 要获取的嵌入向量的 ID。可选。
- `where` - 用于过滤结果的 Where 类型字典。例如 `{"$and": [{"color" : "red"}, {"price": 4.20}]}`。可选。
- `limit` - 要返回的文档数量。可选。
- `offset` - 开始返回结果的偏移量。与 limit 一起使用可实现分页功能。可选。
- `where_document` - 用于根据文档内容进行过滤的 WhereDocument 类型字典。例如 `{"$contains" : "hello"}`。可选。
- `include` - 指定结果中包含的内容，可以包含 `"embeddings"`、`"metadatas"`、`"documents"`。ID 始终会被包含。默认值为 `["metadatas", "documents"]`。可选。

**返回值**：

- `GetResult` - 包含结果的 `GetResult` 对象。