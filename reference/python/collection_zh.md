---
title: 集合
---

# Python 集合

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

## add

```python
def add(ids: OneOrMany[ID],
        embeddings: Optional[OneOrMany[Embedding]] = None,
        metadatas: Optional[OneOrMany[Metadata]] = None,
        documents: Optional[OneOrMany[Document]] = None) -> None
```

向数据存储中添加嵌入向量。

**参数**:

- `ids` - 要添加的嵌入向量的 ID。
- `embeddings` - 要添加的嵌入向量。如果为 None，则会根据 documents 使用 Collection 中设置的 embedding_function 来计算嵌入向量。可选。
- `metadatas` - 与嵌入向量相关联的元数据。在查询时，可以基于此元数据进行过滤。可选。
- `documents` - 与嵌入向量相关联的文档。可选。

**返回**:

  None

**异常**:

- `ValueError` - 如果既没有提供 embeddings 也没有提供 documents
- `ValueError` - 如果 ids、embeddings、metadatas 或 documents 的长度不一致
- `ValueError` - 如果没有提供嵌入函数且没有提供嵌入向量
- `DuplicateIDError` - 如果提供的 ID 已经存在