# UserResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **string** |  | [default to undefined]
**email** | **string** |  | [default to undefined]
**firstName** | **string** |  | [default to undefined]
**lastName** | **string** |  | [default to undefined]
**avatarUrl** | **string** |  | [optional] [default to undefined]
**roles** | **Array&lt;string&gt;** |  | [optional] [default to undefined]
**status** | **string** |  | [optional] [default to undefined]
**tenantId** | **string** |  | [optional] [default to undefined]
**teams** | [**Array&lt;TeamSummary&gt;**](TeamSummary.md) |  | [optional] [default to undefined]
**lastLoginAt** | **string** |  | [optional] [default to undefined]
**createdAt** | **string** |  | [optional] [default to undefined]
**updatedAt** | **string** |  | [optional] [default to undefined]

## Example

```typescript
import { UserResponse } from './api';

const instance: UserResponse = {
    id,
    email,
    firstName,
    lastName,
    avatarUrl,
    roles,
    status,
    tenantId,
    teams,
    lastLoginAt,
    createdAt,
    updatedAt,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
