# AnalyticsApi

All URIs are relative to *https://api.dms.example.com/v1*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**getActivitySummary**](#getactivitysummary) | **GET** /analytics/activity | Recent activity summary|
|[**getFileTypeStats**](#getfiletypestats) | **GET** /analytics/file-types | File counts by MIME type|
|[**getStorageStats**](#getstoragestats) | **GET** /analytics/storage | Storage usage statistics|
|[**getWorkflowMetrics**](#getworkflowmetrics) | **GET** /analytics/workflows | Workflow metrics|

# **getActivitySummary**
> ActivitySummaryResponse getActivitySummary()


### Example

```typescript
import {
    AnalyticsApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new AnalyticsApi(configuration);

let days: number; // (optional) (default to 7)

const { status, data } = await apiInstance.getActivitySummary(
    days
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **days** | [**number**] |  | (optional) defaults to 7|


### Return type

**ActivitySummaryResponse**

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Activity summary |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getFileTypeStats**
> FileTypeStatsResponse getFileTypeStats()


### Example

```typescript
import {
    AnalyticsApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new AnalyticsApi(configuration);

const { status, data } = await apiInstance.getFileTypeStats();
```

### Parameters
This endpoint does not have any parameters.


### Return type

**FileTypeStatsResponse**

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | File type distribution |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getStorageStats**
> StorageStatsResponse getStorageStats()


### Example

```typescript
import {
    AnalyticsApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new AnalyticsApi(configuration);

const { status, data } = await apiInstance.getStorageStats();
```

### Parameters
This endpoint does not have any parameters.


### Return type

**StorageStatsResponse**

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Storage usage breakdown |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getWorkflowMetrics**
> WorkflowMetricsResponse getWorkflowMetrics()


### Example

```typescript
import {
    AnalyticsApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new AnalyticsApi(configuration);

let from: string; // (optional) (default to undefined)
let to: string; // (optional) (default to undefined)

const { status, data } = await apiInstance.getWorkflowMetrics(
    from,
    to
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **from** | [**string**] |  | (optional) defaults to undefined|
| **to** | [**string**] |  | (optional) defaults to undefined|


### Return type

**WorkflowMetricsResponse**

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Workflow metrics |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

