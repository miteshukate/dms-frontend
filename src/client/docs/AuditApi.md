# AuditApi

All URIs are relative to *https://api.dms.example.com/v1*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**getFileActivity**](#getfileactivity) | **GET** /audit/file-activity | File activity history|
|[**getSecurityAudit**](#getsecurityaudit) | **GET** /audit/security | Security audit trail|
|[**getUserActivity**](#getuseractivity) | **GET** /audit/user-activity | User activity logs|

# **getFileActivity**
> AuditLogPageResponse getFileActivity()


### Example

```typescript
import {
    AuditApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new AuditApi(configuration);

let fileId: string; // (optional) (default to undefined)
let folderId: string; // (optional) (default to undefined)
let userId: string; // (optional) (default to undefined)
let action: 'upload' | 'download' | 'view' | 'move' | 'copy' | 'delete' | 'restore' | 'share' | 'rename' | 'version'; // (optional) (default to undefined)
let from: string; // (optional) (default to undefined)
let to: string; // (optional) (default to undefined)
let page: number; //Zero-based page index (optional) (default to 0)
let size: number; //Number of items per page (optional) (default to 20)
let sort: string; //Sort expression: field,asc or field,desc (optional) (default to undefined)

const { status, data } = await apiInstance.getFileActivity(
    fileId,
    folderId,
    userId,
    action,
    from,
    to,
    page,
    size,
    sort
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **fileId** | [**string**] |  | (optional) defaults to undefined|
| **folderId** | [**string**] |  | (optional) defaults to undefined|
| **userId** | [**string**] |  | (optional) defaults to undefined|
| **action** | [**&#39;upload&#39; | &#39;download&#39; | &#39;view&#39; | &#39;move&#39; | &#39;copy&#39; | &#39;delete&#39; | &#39;restore&#39; | &#39;share&#39; | &#39;rename&#39; | &#39;version&#39;**]**Array<&#39;upload&#39; &#124; &#39;download&#39; &#124; &#39;view&#39; &#124; &#39;move&#39; &#124; &#39;copy&#39; &#124; &#39;delete&#39; &#124; &#39;restore&#39; &#124; &#39;share&#39; &#124; &#39;rename&#39; &#124; &#39;version&#39;>** |  | (optional) defaults to undefined|
| **from** | [**string**] |  | (optional) defaults to undefined|
| **to** | [**string**] |  | (optional) defaults to undefined|
| **page** | [**number**] | Zero-based page index | (optional) defaults to 0|
| **size** | [**number**] | Number of items per page | (optional) defaults to 20|
| **sort** | [**string**] | Sort expression: field,asc or field,desc | (optional) defaults to undefined|


### Return type

**AuditLogPageResponse**

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | File activity logs |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getSecurityAudit**
> AuditLogPageResponse getSecurityAudit()


### Example

```typescript
import {
    AuditApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new AuditApi(configuration);

let userId: string; // (optional) (default to undefined)
let eventType: 'login' | 'logout' | 'login_failed' | 'password_change' | 'role_change' | 'permission_change' | 'mfa_enabled' | 'mfa_disabled'; // (optional) (default to undefined)
let from: string; // (optional) (default to undefined)
let to: string; // (optional) (default to undefined)
let page: number; //Zero-based page index (optional) (default to 0)
let size: number; //Number of items per page (optional) (default to 20)

const { status, data } = await apiInstance.getSecurityAudit(
    userId,
    eventType,
    from,
    to,
    page,
    size
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **userId** | [**string**] |  | (optional) defaults to undefined|
| **eventType** | [**&#39;login&#39; | &#39;logout&#39; | &#39;login_failed&#39; | &#39;password_change&#39; | &#39;role_change&#39; | &#39;permission_change&#39; | &#39;mfa_enabled&#39; | &#39;mfa_disabled&#39;**]**Array<&#39;login&#39; &#124; &#39;logout&#39; &#124; &#39;login_failed&#39; &#124; &#39;password_change&#39; &#124; &#39;role_change&#39; &#124; &#39;permission_change&#39; &#124; &#39;mfa_enabled&#39; &#124; &#39;mfa_disabled&#39;>** |  | (optional) defaults to undefined|
| **from** | [**string**] |  | (optional) defaults to undefined|
| **to** | [**string**] |  | (optional) defaults to undefined|
| **page** | [**number**] | Zero-based page index | (optional) defaults to 0|
| **size** | [**number**] | Number of items per page | (optional) defaults to 20|


### Return type

**AuditLogPageResponse**

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Security audit trail |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getUserActivity**
> AuditLogPageResponse getUserActivity()


### Example

```typescript
import {
    AuditApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new AuditApi(configuration);

let userId: string; // (optional) (default to undefined)
let action: string; // (optional) (default to undefined)
let from: string; // (optional) (default to undefined)
let to: string; // (optional) (default to undefined)
let page: number; //Zero-based page index (optional) (default to 0)
let size: number; //Number of items per page (optional) (default to 20)

const { status, data } = await apiInstance.getUserActivity(
    userId,
    action,
    from,
    to,
    page,
    size
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **userId** | [**string**] |  | (optional) defaults to undefined|
| **action** | [**string**] |  | (optional) defaults to undefined|
| **from** | [**string**] |  | (optional) defaults to undefined|
| **to** | [**string**] |  | (optional) defaults to undefined|
| **page** | [**number**] | Zero-based page index | (optional) defaults to 0|
| **size** | [**number**] | Number of items per page | (optional) defaults to 20|


### Return type

**AuditLogPageResponse**

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | User activity logs |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

