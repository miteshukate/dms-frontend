# UpdateTenantRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **string** |  | [optional] [default to undefined]
**logoUrl** | **string** |  | [optional] [default to undefined]
**primaryColor** | **string** |  | [optional] [default to undefined]
**defaultUserRole** | **string** |  | [optional] [default to undefined]
**mfaRequired** | **boolean** |  | [optional] [default to undefined]
**ssoEnabled** | **boolean** |  | [optional] [default to undefined]
**ssoProvider** | **string** |  | [optional] [default to undefined]
**ssoConfig** | **{ [key: string]: any; }** |  | [optional] [default to undefined]

## Example

```typescript
import { UpdateTenantRequest } from './api';

const instance: UpdateTenantRequest = {
    name,
    logoUrl,
    primaryColor,
    defaultUserRole,
    mfaRequired,
    ssoEnabled,
    ssoProvider,
    ssoConfig,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
