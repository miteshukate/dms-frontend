# AuthResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**accessToken** | **string** | JWT access token (short-lived) | [default to undefined]
**refreshToken** | **string** | Opaque refresh token (long-lived) | [default to undefined]
**expiresIn** | **number** | Access token lifetime in seconds | [default to undefined]
**tokenType** | **string** |  | [default to undefined]
**user** | [**UserSummary**](UserSummary.md) |  | [optional] [default to undefined]

## Example

```typescript
import { AuthResponse } from './api';

const instance: AuthResponse = {
    accessToken,
    refreshToken,
    expiresIn,
    tokenType,
    user,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
