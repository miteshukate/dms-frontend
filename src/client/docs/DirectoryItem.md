# DirectoryItem


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **string** |  | [default to undefined]
**type** | **string** |  | [default to undefined]
**name** | **string** |  | [default to undefined]
**mimeType** | **string** |  | [optional] [default to undefined]
**size** | **number** |  | [optional] [default to undefined]
**owner** | [**UserSummary**](UserSummary.md) |  | [optional] [default to undefined]
**tags** | **Array&lt;string&gt;** |  | [optional] [default to undefined]
**updatedAt** | **string** |  | [default to undefined]

## Example

```typescript
import { DirectoryItem } from './api';

const instance: DirectoryItem = {
    id,
    type,
    name,
    mimeType,
    size,
    owner,
    tags,
    updatedAt,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
