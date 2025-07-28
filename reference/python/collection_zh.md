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

添加到数据库中的嵌入向量总数

**返回值**:

- `int` - 添加到数据库中的嵌入向量总数

## add

```python
def add(ids: OneOrMany[ID],
        embeddings: Optional[OneOrMany[Embedding]] = None,
        metadatas: Optional[OneOrMany[Metadata]] = None,
        documents: Optional[OneOrMany[Document]] = None) -> None
```

向数据存储中添加嵌入向量。

**参数**:

- `ids` - 你希望添加的嵌入向量的ID
- `embeddings` - 要添加的嵌入向量。如果为 None，则将根据 documents 使用 Collection 中设置的 embedding_function 来计算嵌入向量。可选参数。
- `metadatas` - 要与嵌入向量关联的元数据。在进行查询时，可以基于此元数据进行过滤。可选参数。
- `documents` - 要与嵌入向量关联的文档。可选参数。

**返回值**:

  None

**异常**:

- `ValueError` - 如果你没有提供 embeddings 或 documents
- `ValueError` - 如果 ids、embeddings、metadatas 或 documents 的长度不一致
- `ValueError` - 如果你没有提供 embedding function 且没有提供 embeddings
- `DuplicateIDError` - 如果提供的 ID 已经存在