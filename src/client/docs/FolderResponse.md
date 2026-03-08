# FolderResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **string** |  | [default to undefined]
**name** | **string** |  | [default to undefined]
**parentId** | **string** |  | [optional] [default to undefined]
**path** | **string** |  | [optional] [default to undefined]
**ownerId** | **string** |  | [default to undefined]
**owner** | [**UserSummary**](UserSummary.md) |  | [optional] [default to undefined]
**status** | **string** |  | [default to undefined]
**fileCount** | **number** |  | [optional] [default to undefined]
**folderCount** | **number** |  | [optional] [default to undefined]
**totalSize** | **number** | Total size of contents in bytes | [optional] [default to undefined]
**tags** | **Array&lt;string&gt;** |  | [optional] [default to undefined]
**createdAt** | **string** |  | [default to undefined]
**updatedAt** | **string** |  | [default to undefined]

## Example

```typescript
import { FolderResponse } from './api';

const instance: FolderResponse = {
    id,
    name,
    parentId,
    path,
    ownerId,
    owner,
    status,
    fileCount,
    folderCount,
    totalSize,
    tags,
    createdAt,
    updatedAt,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
