---
title: Collection
---

# Python Collection

```python
class Collection(BaseModel)
```

## count

```python
def count() -> int
```

The total number of embeddings added to the database

**Returns**:

- `int` - The total number of embeddings added to the database

## add

```python
def add(ids: OneOrMany[ID],
        embeddings: Optional[OneOrMany[Embedding]] = None,
        metadatas: Optional[OneOrMany[Metadata]] = None,
        documents: Optional[OneOrMany[Document]] = None) -> None
```

Add embeddings to the data store.

**Arguments**:

- `ids` - The ids of the embeddings you wish to add
- `embeddings` - The embeddings to add. If None, embeddings will be computed based on the documents using the embedding_function set for the Collection. Optional.
- `metadatas` - The metadata to associate with the embeddings. When querying, you can filter on this metadata. Optional.
- `documents` - The documents to associate with the embeddings. Optional.


**Returns**:

  None


**Raises**:

- `ValueError` - If you don't provide either embeddings or documents
- `ValueError` - If the length of ids, embeddings, metadatas, or documents don't match
- `ValueError` - If you don't provide an embedding function and don't provide embeddings
- `DuplicateIDError` - If you provide an id that already exists
