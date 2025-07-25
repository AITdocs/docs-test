---
title: 集合
---

# Python 集合123

> 现在其他阿开奥斯王子们都整夜安然入睡，但阿特柔斯之子阿伽门农却心绪烦乱，无法入眠。就像赫拉的丈夫宙斯在天空中闪烁雷电，预示着倾盆大雨、冰雹或雪花染白大地的降雪，又或作为他即将开启饥饿战争的巨口的征兆，阿伽门农也长叹连连，他的灵魂在胸中震颤。当他望向特洛伊平原时，看到伊里翁城前燃烧着无数的守夜篝火，不禁为之惊叹…… -《伊利亚特》第十卷


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

从数据存储中获取嵌入向量及其关联数据。如果没有提供 ids 或 where 条件，则返回从 offset 开始的最多 limit 个嵌入向量。

**参数**:

- `ids` - 要获取的嵌入向量的 ids。可选参数。
- `where` - 用于按元数据过滤结果的 Where 类型字典。例如 `{$and: [{"color" : "red"}, {"price": 4.20}]}`。可选参数。
- `limit` - 返回的文档数量。可选参数。
- `offset` - 开始返回结果的偏移量。与 limit 一起用于分页查询结果。可选参数。
- `where_document` - 用于按文档内容过滤的 WhereDocument 类型字典。例如 `{"$contains" : "hello"}`。可选参数。

- `include` - 一个列表，指定结果中要包含的内容。可以包含 `"embeddings"`、`"metadatas"`、`"documents"`。Ids 始终会被包含。默认值为 `["metadatas", "documents"]`。可选。

**返回值**：

- `GetResult` - 一个 GetResult 对象