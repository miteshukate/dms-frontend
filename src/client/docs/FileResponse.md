# FileResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **string** |  | [default to undefined]
**name** | **string** |  | [default to undefined]
**mimeType** | **string** |  | [default to undefined]
**extension** | **string** |  | [optional] [default to undefined]
**size** | **number** | File size in bytes | [default to undefined]
**folderId** | **string** |  | [default to undefined]
**path** | **string** | Full logical path | [optional] [default to undefined]
**ownerId** | **string** |  | [default to undefined]
**owner** | [**UserSummary**](UserSummary.md) |  | [optional] [default to undefined]
**status** | **string** |  | [default to undefined]
**currentVersion** | **number** |  | [optional] [default to undefined]
**tags** | **Array&lt;string&gt;** |  | [optional] [default to undefined]
**checksum** | **string** | MD5 or SHA-256 checksum | [optional] [default to undefined]
**previewAvailable** | **boolean** |  | [optional] [default to undefined]
**createdAt** | **string** |  | [default to undefined]
**updatedAt** | **string** |  | [default to undefined]
**deletedAt** | **string** |  | [optional] [default to undefined]

## Example

```typescript
import { FileResponse } from './api';

const instance: FileResponse = {
    id,
    name,
    mimeType,
    extension,
    size,
    folderId,
    path,
    ownerId,
    owner,
    status,
    currentVersion,
    tags,
    checksum,
    previewAvailable,
    createdAt,
    updatedAt,
    deletedAt,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
