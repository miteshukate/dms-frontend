# SharingApi

All URIs are relative to *https://api.dms.example.com/v1*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**createShare**](#createshare) | **POST** /shares | Share file or folder with users/teams|
|[**generatePublicLink**](#generatepubliclink) | **POST** /shares/public-links | Generate public share link|
|[**getAcl**](#getacl) | **GET** /shares/{resourceType}/{resourceId} | Get ACL for a resource|
|[**revokeAccess**](#revokeaccess) | **DELETE** /shares/{resourceType}/{resourceId}/entries/{principalId} | Revoke access for a principal|
|[**revokeAllShares**](#revokeallshares) | **DELETE** /shares/{resourceType}/{resourceId} | Revoke all sharing for a resource|
|[**revokePublicLink**](#revokepubliclink) | **DELETE** /shares/public-links/{token} | Revoke public link|
|[**updatePermission**](#updatepermission) | **PUT** /shares/{resourceType}/{resourceId}/entries/{principalId} | Update permission for a principal|

# **createShare**
> ShareResponse createShare(createShareRequest)


### Example

```typescript
import {
    SharingApi,
    Configuration,
    CreateShareRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new SharingApi(configuration);

let createShareRequest: CreateShareRequest; //

const { status, data } = await apiInstance.createShare(
    createShareRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **createShareRequest** | **CreateShareRequest**|  | |


### Return type

**ShareResponse**

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**201** | Share created |  -  |
|**400** | Bad request – validation error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **generatePublicLink**
> PublicLinkResponse generatePublicLink(publicLinkRequest)


### Example

```typescript
import {
    SharingApi,
    Configuration,
    PublicLinkRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new SharingApi(configuration);

let publicLinkRequest: PublicLinkRequest; //

const { status, data } = await apiInstance.generatePublicLink(
    publicLinkRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **publicLinkRequest** | **PublicLinkRequest**|  | |


### Return type

**PublicLinkResponse**

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**201** | Public link generated |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getAcl**
> AclResponse getAcl()


### Example

```typescript
import {
    SharingApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new SharingApi(configuration);

let resourceType: 'file' | 'folder'; // (default to undefined)
let resourceId: string; // (default to undefined)

const { status, data } = await apiInstance.getAcl(
    resourceType,
    resourceId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **resourceType** | [**&#39;file&#39; | &#39;folder&#39;**]**Array<&#39;file&#39; &#124; &#39;folder&#39;>** |  | defaults to undefined|
| **resourceId** | [**string**] |  | defaults to undefined|


### Return type

**AclResponse**

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Access control list |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **revokeAccess**
> revokeAccess()


### Example

```typescript
import {
    SharingApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new SharingApi(configuration);

let resourceType: 'file' | 'folder'; // (default to undefined)
let resourceId: string; // (default to undefined)
let principalId: string; // (default to undefined)

const { status, data } = await apiInstance.revokeAccess(
    resourceType,
    resourceId,
    principalId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **resourceType** | [**&#39;file&#39; | &#39;folder&#39;**]**Array<&#39;file&#39; &#124; &#39;folder&#39;>** |  | defaults to undefined|
| **resourceId** | [**string**] |  | defaults to undefined|
| **principalId** | [**string**] |  | defaults to undefined|


### Return type

void (empty response body)

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**204** | Access revoked |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **revokeAllShares**
> revokeAllShares()


### Example

```typescript
import {
    SharingApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new SharingApi(configuration);

let resourceType: 'file' | 'folder'; // (default to undefined)
let resourceId: string; // (default to undefined)

const { status, data } = await apiInstance.revokeAllShares(
    resourceType,
    resourceId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **resourceType** | [**&#39;file&#39; | &#39;folder&#39;**]**Array<&#39;file&#39; &#124; &#39;folder&#39;>** |  | defaults to undefined|
| **resourceId** | [**string**] |  | defaults to undefined|


### Return type

void (empty response body)

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**204** | All shares revoked |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **revokePublicLink**
> revokePublicLink()


### Example

```typescript
import {
    SharingApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new SharingApi(configuration);

let token: string; // (default to undefined)

const { status, data } = await apiInstance.revokePublicLink(
    token
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **token** | [**string**] |  | defaults to undefined|


### Return type

void (empty response body)

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**204** | Public link revoked |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **updatePermission**
> AclEntryResponse updatePermission(updatePermissionRequest)


### Example

```typescript
import {
    SharingApi,
    Configuration,
    UpdatePermissionRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new SharingApi(configuration);

let resourceType: 'file' | 'folder'; // (default to undefined)
let resourceId: string; // (default to undefined)
let principalId: string; // (default to undefined)
let updatePermissionRequest: UpdatePermissionRequest; //

const { status, data } = await apiInstance.updatePermission(
    resourceType,
    resourceId,
    principalId,
    updatePermissionRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **updatePermissionRequest** | **UpdatePermissionRequest**|  | |
| **resourceType** | [**&#39;file&#39; | &#39;folder&#39;**]**Array<&#39;file&#39; &#124; &#39;folder&#39;>** |  | defaults to undefined|
| **resourceId** | [**string**] |  | defaults to undefined|
| **principalId** | [**string**] |  | defaults to undefined|


### Return type

**AclEntryResponse**

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Permission updated |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

