# AdminApi

All URIs are relative to *https://api.dms.example.com/v1*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**getAllowedFileTypes**](#getallowedfiletypes) | **GET** /admin/allowed-file-types | Get allowed file types|
|[**getQuota**](#getquota) | **GET** /admin/tenants/{tenantId}/quota | Get storage quota|
|[**getSettings**](#getsettings) | **GET** /admin/settings | Get system settings|
|[**getTenant**](#gettenant) | **GET** /admin/tenants/{tenantId} | Get tenant configuration|
|[**updateAllowedFileTypes**](#updateallowedfiletypes) | **PUT** /admin/allowed-file-types | Update allowed file types|
|[**updateQuota**](#updatequota) | **PUT** /admin/tenants/{tenantId}/quota | Update storage quota|
|[**updateSettings**](#updatesettings) | **PUT** /admin/settings | Update system settings|
|[**updateTenant**](#updatetenant) | **PUT** /admin/tenants/{tenantId} | Update tenant configuration|

# **getAllowedFileTypes**
> AllowedFileTypesResponse getAllowedFileTypes()


### Example

```typescript
import {
    AdminApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new AdminApi(configuration);

const { status, data } = await apiInstance.getAllowedFileTypes();
```

### Parameters
This endpoint does not have any parameters.


### Return type

**AllowedFileTypesResponse**

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Allowed MIME types and extensions |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getQuota**
> QuotaResponse getQuota()


### Example

```typescript
import {
    AdminApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new AdminApi(configuration);

let tenantId: string; // (default to undefined)

const { status, data } = await apiInstance.getQuota(
    tenantId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **tenantId** | [**string**] |  | defaults to undefined|


### Return type

**QuotaResponse**

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Quota details |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getSettings**
> SystemSettingsResponse getSettings()


### Example

```typescript
import {
    AdminApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new AdminApi(configuration);

const { status, data } = await apiInstance.getSettings();
```

### Parameters
This endpoint does not have any parameters.


### Return type

**SystemSettingsResponse**

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | System settings |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getTenant**
> TenantResponse getTenant()


### Example

```typescript
import {
    AdminApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new AdminApi(configuration);

let tenantId: string; // (default to undefined)

const { status, data } = await apiInstance.getTenant(
    tenantId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **tenantId** | [**string**] |  | defaults to undefined|


### Return type

**TenantResponse**

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Tenant configuration |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **updateAllowedFileTypes**
> AllowedFileTypesResponse updateAllowedFileTypes(updateAllowedFileTypesRequest)


### Example

```typescript
import {
    AdminApi,
    Configuration,
    UpdateAllowedFileTypesRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new AdminApi(configuration);

let updateAllowedFileTypesRequest: UpdateAllowedFileTypesRequest; //

const { status, data } = await apiInstance.updateAllowedFileTypes(
    updateAllowedFileTypesRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **updateAllowedFileTypesRequest** | **UpdateAllowedFileTypesRequest**|  | |


### Return type

**AllowedFileTypesResponse**

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Updated allowed file types |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **updateQuota**
> QuotaResponse updateQuota(updateQuotaRequest)


### Example

```typescript
import {
    AdminApi,
    Configuration,
    UpdateQuotaRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new AdminApi(configuration);

let tenantId: string; // (default to undefined)
let updateQuotaRequest: UpdateQuotaRequest; //

const { status, data } = await apiInstance.updateQuota(
    tenantId,
    updateQuotaRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **updateQuotaRequest** | **UpdateQuotaRequest**|  | |
| **tenantId** | [**string**] |  | defaults to undefined|


### Return type

**QuotaResponse**

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Updated quota |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **updateSettings**
> SystemSettingsResponse updateSettings(updateSystemSettingsRequest)


### Example

```typescript
import {
    AdminApi,
    Configuration,
    UpdateSystemSettingsRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new AdminApi(configuration);

let updateSystemSettingsRequest: UpdateSystemSettingsRequest; //

const { status, data } = await apiInstance.updateSettings(
    updateSystemSettingsRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **updateSystemSettingsRequest** | **UpdateSystemSettingsRequest**|  | |


### Return type

**SystemSettingsResponse**

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Updated settings |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **updateTenant**
> TenantResponse updateTenant(updateTenantRequest)


### Example

```typescript
import {
    AdminApi,
    Configuration,
    UpdateTenantRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new AdminApi(configuration);

let tenantId: string; // (default to undefined)
let updateTenantRequest: UpdateTenantRequest; //

const { status, data } = await apiInstance.updateTenant(
    tenantId,
    updateTenantRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **updateTenantRequest** | **UpdateTenantRequest**|  | |
| **tenantId** | [**string**] |  | defaults to undefined|


### Return type

**TenantResponse**

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Updated tenant |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

