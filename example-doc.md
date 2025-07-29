---
title: Collection
---

# Python Collections  


> Now the other princes of the Achaeans slept soundly the whole night through, but Agamemnon son of Atreus was troubled, so that he could get no rest. As when fair Hera's lord flashes his lightning in token of great rain or hail or snow when the snow-flakes whiten the ground, or again as a sign that he will open the wide jaws of hungry war, even so did Agamemnon heave many a heavy sigh, for his soul trembled within him. When he looked upon the plain of Troy he marveled at the many watchfires burning in front of Ilion... - The Iliad, Scroll 10



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

## get

```python
def get(ids: Optional[OneOrMany[ID]] = None,
        """where filter to apply to the embeddings"""
        where: Optional[Where] = None,
        limit: Optional[int] = None,
        offset: Optional[int] = None,
        where_document: Optional[WhereDocument] = None,
        include: Include = ["metadatas", "documents"]) -> GetResult
```

Get embeddings and their associate data from the data store. If no ids or where filter is provided returns
all embeddings up to limit starting at offset.

**Arguments**:

- `ids` - The ids of the embeddings to get. Optional.
- `where` - A Where type dict used to filter results by. E.g. `{$and: [{"color" : "red"}, {"price": 4.20}]}`. Optional.
- `limit` - The number of documents to return. Optional.
- `offset` - The offset to start returning results from. Useful for paging results with limit. Optional.
- `where_document` - A WhereDocument type dict used to filter by the documents. E.g. `{"$contains" : "hello"}`. Optional.
- `include` - A list of what to include in the results. Can contain `"embeddings"`, `"metadatas"`, `"documents"`. Ids are always included. Defaults to `["metadatas", "documents"]`. Optional.


**Returns**:

- `GetResult` - A GetResult object
