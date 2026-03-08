# RegisterUserRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**email** | **string** |  | [default to undefined]
**firstName** | **string** |  | [default to undefined]
**lastName** | **string** |  | [default to undefined]
**role** | **string** |  | [default to undefined]
**teamIds** | **Array&lt;string&gt;** |  | [optional] [default to undefined]
**sendInviteEmail** | **boolean** |  | [optional] [default to true]

## Example

```typescript
import { RegisterUserRequest } from './api';

const instance: RegisterUserRequest = {
    email,
    firstName,
    lastName,
    role,
    teamIds,
    sendInviteEmail,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
