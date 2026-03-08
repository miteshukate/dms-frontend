# SearchResult


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **string** |  | [default to undefined]
**type** | **string** |  | [default to undefined]
**name** | **string** |  | [default to undefined]
**path** | **string** |  | [default to undefined]
**mimeType** | **string** |  | [optional] [default to undefined]
**owner** | [**UserSummary**](UserSummary.md) |  | [optional] [default to undefined]
**tags** | **Array&lt;string&gt;** |  | [optional] [default to undefined]
**highlight** | **string** | Snippet of matched content with highlights | [optional] [default to undefined]
**updatedAt** | **string** |  | [default to undefined]

## Example

```typescript
import { SearchResult } from './api';

const instance: SearchResult = {
    id,
    type,
    name,
    path,
    mimeType,
    owner,
    tags,
    highlight,
    updatedAt,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
