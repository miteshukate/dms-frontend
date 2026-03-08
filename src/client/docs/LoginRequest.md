# LoginRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**email** | **string** |  | [default to undefined]
**password** | **string** |  | [default to undefined]
**tenantId** | **string** | Required for multi-tenant disambiguation if email is in multiple tenants | [optional] [default to undefined]

## Example

```typescript
import { LoginRequest } from './api';

const instance: LoginRequest = {
    email,
    password,
    tenantId,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
