# DirectoryResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**folder** | [**FolderResponse**](FolderResponse.md) | Current folder metadata; null if listing root | [optional] [default to undefined]
**items** | [**Array&lt;DirectoryItem&gt;**](DirectoryItem.md) |  | [optional] [default to undefined]
**meta** | [**PageMeta**](PageMeta.md) |  | [optional] [default to undefined]

## Example

```typescript
import { DirectoryResponse } from './api';

const instance: DirectoryResponse = {
    folder,
    items,
    meta,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
