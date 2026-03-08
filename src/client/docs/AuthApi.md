# AuthApi

All URIs are relative to *https://api.dms.example.com/v1*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**changePassword**](#changepassword) | **PUT** /auth/me/password | Change own password|
|[**getMe**](#getme) | **GET** /auth/me | Get current user profile|
|[**login**](#login) | **POST** /auth/login | Login|
|[**logout**](#logout) | **POST** /auth/logout | Logout|
|[**refreshToken**](#refreshtoken) | **POST** /auth/refresh | Refresh access token|
|[**registerUser**](#registeruser) | **POST** /auth/register | Register user (admin only)|

# **changePassword**
> changePassword(changePasswordRequest)


### Example

```typescript
import {
    AuthApi,
    Configuration,
    ChangePasswordRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new AuthApi(configuration);

let changePasswordRequest: ChangePasswordRequest; //

const { status, data } = await apiInstance.changePassword(
    changePasswordRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **changePasswordRequest** | **ChangePasswordRequest**|  | |


### Return type

void (empty response body)

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**204** | Password changed |  -  |
|**400** | Bad request – validation error |  -  |
|**401** | Unauthorized – missing or invalid token |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getMe**
> UserResponse getMe()


### Example

```typescript
import {
    AuthApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new AuthApi(configuration);

const { status, data } = await apiInstance.getMe();
```

### Parameters
This endpoint does not have any parameters.


### Return type

**UserResponse**

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Current authenticated user |  -  |
|**401** | Unauthorized – missing or invalid token |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **login**
> AuthResponse login(loginRequest)

Authenticate with email and password, receive JWT access and refresh tokens.

### Example

```typescript
import {
    AuthApi,
    Configuration,
    LoginRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new AuthApi(configuration);

let loginRequest: LoginRequest; //

const { status, data } = await apiInstance.login(
    loginRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **loginRequest** | **LoginRequest**|  | |


### Return type

**AuthResponse**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Successful login |  -  |
|**400** | Bad request – validation error |  -  |
|**401** | Unauthorized – missing or invalid token |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **logout**
> logout(logoutRequest)

Invalidate the current refresh token.

### Example

```typescript
import {
    AuthApi,
    Configuration,
    LogoutRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new AuthApi(configuration);

let logoutRequest: LogoutRequest; //

const { status, data } = await apiInstance.logout(
    logoutRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **logoutRequest** | **LogoutRequest**|  | |


### Return type

void (empty response body)

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**204** | Logged out successfully |  -  |
|**401** | Unauthorized – missing or invalid token |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **refreshToken**
> AuthResponse refreshToken(refreshTokenRequest)


### Example

```typescript
import {
    AuthApi,
    Configuration,
    RefreshTokenRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new AuthApi(configuration);

let refreshTokenRequest: RefreshTokenRequest; //

const { status, data } = await apiInstance.refreshToken(
    refreshTokenRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **refreshTokenRequest** | **RefreshTokenRequest**|  | |


### Return type

**AuthResponse**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | New access token issued |  -  |
|**401** | Unauthorized – missing or invalid token |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **registerUser**
> UserResponse registerUser(registerUserRequest)

Create a new user account within the tenant. Requires admin role.

### Example

```typescript
import {
    AuthApi,
    Configuration,
    RegisterUserRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new AuthApi(configuration);

let registerUserRequest: RegisterUserRequest; //

const { status, data } = await apiInstance.registerUser(
    registerUserRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **registerUserRequest** | **RegisterUserRequest**|  | |


### Return type

**UserResponse**

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**201** | User created |  -  |
|**400** | Bad request – validation error |  -  |
|**403** | Forbidden – insufficient permissions |  -  |
|**409** | Conflict – resource already exists |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

