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
- `embeddings` - 要添加的嵌入向量。如果为None，则将根据documents使用为集合设置的embedding_function来计算嵌入向量。可选。
- `metadatas` - 与嵌入向量相关联的元数据。在查询时，可以基于此元数据进行过滤。可选。
- `documents` - 与嵌入向量相关联的文档。可选。

**返回值**:

  None

**异常**:

- `ValueError` - 如果你未提供嵌入向量或文档
- `ValueError` - 如果ids、embeddings、metadatas或documents的长度不一致
- `ValueError` - 如果未提供嵌入函数且未提供嵌入向量
- `DuplicateIDError` - 如果提供的ID已存在