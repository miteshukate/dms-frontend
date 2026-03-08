# StorageStatsResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**totalQuotaBytes** | **number** |  | [optional] [default to undefined]
**usedBytes** | **number** |  | [optional] [default to undefined]
**availableBytes** | **number** |  | [optional] [default to undefined]
**usedPercent** | **number** |  | [optional] [default to undefined]
**trashBytes** | **number** |  | [optional] [default to undefined]
**fileCount** | **number** |  | [optional] [default to undefined]
**folderCount** | **number** |  | [optional] [default to undefined]
**byUser** | [**Array&lt;StorageStatsResponseByUserInner&gt;**](StorageStatsResponseByUserInner.md) |  | [optional] [default to undefined]

## Example

```typescript
import { StorageStatsResponse } from './api';

const instance: StorageStatsResponse = {
    totalQuotaBytes,
    usedBytes,
    availableBytes,
    usedPercent,
    trashBytes,
    fileCount,
    folderCount,
    byUser,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
