# UsersApi

All URIs are relative to *https://api.dms.example.com/v1*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**assignRoles**](#assignroles) | **PUT** /users/{userId}/roles | Assign roles to user|
|[**deleteUser**](#deleteuser) | **DELETE** /users/{userId} | Delete user|
|[**getUserById**](#getuserbyid) | **GET** /users/{userId} | Get user by ID|
|[**listUsers**](#listusers) | **GET** /users | List users|
|[**updateProfile**](#updateprofile) | **PATCH** /users/{userId}/profile | Update user profile|
|[**updateUser**](#updateuser) | **PUT** /users/{userId} | Update user|

# **assignRoles**
> UserResponse assignRoles(assignRolesRequest)


### Example

```typescript
import {
    UsersApi,
    Configuration,
    AssignRolesRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new UsersApi(configuration);

let userId: string; // (default to undefined)
let assignRolesRequest: AssignRolesRequest; //

const { status, data } = await apiInstance.assignRoles(
    userId,
    assignRolesRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **assignRolesRequest** | **AssignRolesRequest**|  | |
| **userId** | [**string**] |  | defaults to undefined|


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
|**200** | Roles updated |  -  |
|**403** | Forbidden – insufficient permissions |  -  |
|**404** | Not found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **deleteUser**
> deleteUser()


### Example

```typescript
import {
    UsersApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new UsersApi(configuration);

let userId: string; // (default to undefined)

const { status, data } = await apiInstance.deleteUser(
    userId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **userId** | [**string**] |  | defaults to undefined|


### Return type

void (empty response body)

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**204** | User deleted |  -  |
|**403** | Forbidden – insufficient permissions |  -  |
|**404** | Not found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getUserById**
> UserResponse getUserById()


### Example

```typescript
import {
    UsersApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new UsersApi(configuration);

let userId: string; // (default to undefined)

const { status, data } = await apiInstance.getUserById(
    userId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **userId** | [**string**] |  | defaults to undefined|


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
|**200** | User details |  -  |
|**404** | Not found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **listUsers**
> UserPageResponse listUsers()


### Example

```typescript
import {
    UsersApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new UsersApi(configuration);

let page: number; //Zero-based page index (optional) (default to 0)
let size: number; //Number of items per page (optional) (default to 20)
let sort: string; //Sort expression: field,asc or field,desc (optional) (default to undefined)
let search: string; //Filter by name or email (optional) (default to undefined)
let role: 'admin' | 'manager' | 'editor' | 'viewer'; // (optional) (default to undefined)
let teamId: string; // (optional) (default to undefined)
let status: 'active' | 'inactive' | 'pending'; // (optional) (default to undefined)

const { status, data } = await apiInstance.listUsers(
    page,
    size,
    sort,
    search,
    role,
    teamId,
    status
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **page** | [**number**] | Zero-based page index | (optional) defaults to 0|
| **size** | [**number**] | Number of items per page | (optional) defaults to 20|
| **sort** | [**string**] | Sort expression: field,asc or field,desc | (optional) defaults to undefined|
| **search** | [**string**] | Filter by name or email | (optional) defaults to undefined|
| **role** | [**&#39;admin&#39; | &#39;manager&#39; | &#39;editor&#39; | &#39;viewer&#39;**]**Array<&#39;admin&#39; &#124; &#39;manager&#39; &#124; &#39;editor&#39; &#124; &#39;viewer&#39;>** |  | (optional) defaults to undefined|
| **teamId** | [**string**] |  | (optional) defaults to undefined|
| **status** | [**&#39;active&#39; | &#39;inactive&#39; | &#39;pending&#39;**]**Array<&#39;active&#39; &#124; &#39;inactive&#39; &#124; &#39;pending&#39;>** |  | (optional) defaults to undefined|


### Return type

**UserPageResponse**

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Paginated list of users |  -  |
|**401** | Unauthorized – missing or invalid token |  -  |
|**403** | Forbidden – insufficient permissions |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **updateProfile**
> UserResponse updateProfile()


### Example

```typescript
import {
    UsersApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new UsersApi(configuration);

let userId: string; // (default to undefined)
let firstName: string; // (optional) (default to undefined)
let lastName: string; // (optional) (default to undefined)
let avatar: File; //Profile picture file (optional) (default to undefined)

const { status, data } = await apiInstance.updateProfile(
    userId,
    firstName,
    lastName,
    avatar
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **userId** | [**string**] |  | defaults to undefined|
| **firstName** | [**string**] |  | (optional) defaults to undefined|
| **lastName** | [**string**] |  | (optional) defaults to undefined|
| **avatar** | [**File**] | Profile picture file | (optional) defaults to undefined|


### Return type

**UserResponse**

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: multipart/form-data
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Profile updated |  -  |
|**400** | Bad request – validation error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **updateUser**
> UserResponse updateUser(updateUserRequest)


### Example

```typescript
import {
    UsersApi,
    Configuration,
    UpdateUserRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new UsersApi(configuration);

let userId: string; // (default to undefined)
let updateUserRequest: UpdateUserRequest; //

const { status, data } = await apiInstance.updateUser(
    userId,
    updateUserRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **updateUserRequest** | **UpdateUserRequest**|  | |
| **userId** | [**string**] |  | defaults to undefined|


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
|**200** | Updated user |  -  |
|**400** | Bad request – validation error |  -  |
|**403** | Forbidden – insufficient permissions |  -  |
|**404** | Not found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

