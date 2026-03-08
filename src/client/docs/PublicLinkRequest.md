# PublicLinkRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**resourceType** | **string** |  | [default to undefined]
**resourceId** | **string** |  | [default to undefined]
**permission** | **string** |  | [optional] [default to PermissionEnum_Read]
**expiresAt** | **string** | Expiry time; null for no expiry | [optional] [default to undefined]
**password** | **string** | Optional link password | [optional] [default to undefined]
**maxDownloads** | **number** | Maximum number of uses; null for unlimited | [optional] [default to undefined]

## Example

```typescript
import { PublicLinkRequest } from './api';

const instance: PublicLinkRequest = {
    resourceType,
    resourceId,
    permission,
    expiresAt,
    password,
    maxDownloads,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
