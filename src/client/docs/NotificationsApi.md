# NotificationsApi

All URIs are relative to *https://api.dms.example.com/v1*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**getUnreadCount**](#getunreadcount) | **GET** /notifications/unread-count | Get unread notification count|
|[**listNotifications**](#listnotifications) | **GET** /notifications | List notifications|
|[**markAllNotificationsRead**](#markallnotificationsread) | **POST** /notifications/read-all | Mark all notifications as read|
|[**markNotificationRead**](#marknotificationread) | **POST** /notifications/{notificationId}/read | Mark notification as read|

# **getUnreadCount**
> GetUnreadCount200Response getUnreadCount()


### Example

```typescript
import {
    NotificationsApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new NotificationsApi(configuration);

const { status, data } = await apiInstance.getUnreadCount();
```

### Parameters
This endpoint does not have any parameters.


### Return type

**GetUnreadCount200Response**

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Unread count |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **listNotifications**
> NotificationPageResponse listNotifications()


### Example

```typescript
import {
    NotificationsApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new NotificationsApi(configuration);

let read: boolean; // (optional) (default to undefined)
let page: number; //Zero-based page index (optional) (default to 0)
let size: number; //Number of items per page (optional) (default to 20)

const { status, data } = await apiInstance.listNotifications(
    read,
    page,
    size
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **read** | [**boolean**] |  | (optional) defaults to undefined|
| **page** | [**number**] | Zero-based page index | (optional) defaults to 0|
| **size** | [**number**] | Number of items per page | (optional) defaults to 20|


### Return type

**NotificationPageResponse**

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Notifications list |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **markAllNotificationsRead**
> markAllNotificationsRead()


### Example

```typescript
import {
    NotificationsApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new NotificationsApi(configuration);

const { status, data } = await apiInstance.markAllNotificationsRead();
```

### Parameters
This endpoint does not have any parameters.


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
|**204** | All notifications marked as read |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **markNotificationRead**
> markNotificationRead()


### Example

```typescript
import {
    NotificationsApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new NotificationsApi(configuration);

let notificationId: string; // (default to undefined)

const { status, data } = await apiInstance.markNotificationRead(
    notificationId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **notificationId** | [**string**] |  | defaults to undefined|


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
|**204** | Marked as read |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

