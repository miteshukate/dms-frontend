# FoldersApi

All URIs are relative to *https://api.dms.example.com/v1*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**copyFolder**](#copyfolder) | **POST** /folders/{folderId}/copy | Copy folder|
|[**createFolder**](#createfolder) | **POST** /folders | Create folder|
|[**deleteFolder**](#deletefolder) | **DELETE** /folders/{folderId} | Delete folder (moves to trash)|
|[**getFilesByFolder**](#getfilesbyfolder) | **GET** /folders/{folderId}/files | Get all files in folder|
|[**getFolder**](#getfolder) | **GET** /folders/{folderId} | Get folder metadata|
|[**moveFolder**](#movefolder) | **POST** /folders/{folderId}/move | Move folder|
|[**renameFolder**](#renamefolder) | **PATCH** /folders/{folderId} | Rename folder|
|[**restoreFolder**](#restorefolder) | **POST** /folders/{folderId}/restore | Restore folder from trash|

# **copyFolder**
> FolderResponse copyFolder(copyRequest)


### Example

```typescript
import {
    FoldersApi,
    Configuration,
    CopyRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new FoldersApi(configuration);

let folderId: string; // (default to undefined)
let copyRequest: CopyRequest; //

const { status, data } = await apiInstance.copyFolder(
    folderId,
    copyRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **copyRequest** | **CopyRequest**|  | |
| **folderId** | [**string**] |  | defaults to undefined|


### Return type

**FolderResponse**

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**201** | Folder copied |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **createFolder**
> FolderResponse createFolder(createFolderRequest)


### Example

```typescript
import {
    FoldersApi,
    Configuration,
    CreateFolderRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new FoldersApi(configuration);

let createFolderRequest: CreateFolderRequest; //

const { status, data } = await apiInstance.createFolder(
    createFolderRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **createFolderRequest** | **CreateFolderRequest**|  | |


### Return type

**FolderResponse**

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**201** | Folder created |  -  |
|**400** | Bad request – validation error |  -  |
|**409** | Conflict – resource already exists |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **deleteFolder**
> deleteFolder()


### Example

```typescript
import {
    FoldersApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new FoldersApi(configuration);

let folderId: string; // (default to undefined)
let permanent: boolean; // (optional) (default to false)

const { status, data } = await apiInstance.deleteFolder(
    folderId,
    permanent
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **folderId** | [**string**] |  | defaults to undefined|
| **permanent** | [**boolean**] |  | (optional) defaults to false|


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
|**204** | Folder deleted |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getFilesByFolder**
> GetFilesByFolder200Response getFilesByFolder()


### Example

```typescript
import {
    FoldersApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new FoldersApi(configuration);

let folderId: string; // (default to undefined)
let page: number; //Zero-indexed page number (optional) (default to 0)
let size: number; //Number of items per page (optional) (default to 20)
let sort: string; //Sort criteria (e.g., createdAt,desc) (optional) (default to 'createdAt,desc')
let status: 'active' | 'trashed' | 'archived'; //Filter by file status (optional) (default to undefined)
let mimeType: string; //Filter by MIME type (optional) (default to undefined)
let search: string; //Search in file name and tags (optional) (default to undefined)

const { status, data } = await apiInstance.getFilesByFolder(
    folderId,
    page,
    size,
    sort,
    status,
    mimeType,
    search
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **folderId** | [**string**] |  | defaults to undefined|
| **page** | [**number**] | Zero-indexed page number | (optional) defaults to 0|
| **size** | [**number**] | Number of items per page | (optional) defaults to 20|
| **sort** | [**string**] | Sort criteria (e.g., createdAt,desc) | (optional) defaults to 'createdAt,desc'|
| **status** | [**&#39;active&#39; | &#39;trashed&#39; | &#39;archived&#39;**]**Array<&#39;active&#39; &#124; &#39;trashed&#39; &#124; &#39;archived&#39;>** | Filter by file status | (optional) defaults to undefined|
| **mimeType** | [**string**] | Filter by MIME type | (optional) defaults to undefined|
| **search** | [**string**] | Search in file name and tags | (optional) defaults to undefined|


### Return type

**GetFilesByFolder200Response**

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | List of files in folder |  -  |
|**404** | Not found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getFolder**
> FolderResponse getFolder()


### Example

```typescript
import {
    FoldersApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new FoldersApi(configuration);

let folderId: string; // (default to undefined)

const { status, data } = await apiInstance.getFolder(
    folderId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **folderId** | [**string**] |  | defaults to undefined|


### Return type

**FolderResponse**

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Folder metadata |  -  |
|**404** | Not found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **moveFolder**
> FolderResponse moveFolder(moveRequest)


### Example

```typescript
import {
    FoldersApi,
    Configuration,
    MoveRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new FoldersApi(configuration);

let folderId: string; // (default to undefined)
let moveRequest: MoveRequest; //

const { status, data } = await apiInstance.moveFolder(
    folderId,
    moveRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **moveRequest** | **MoveRequest**|  | |
| **folderId** | [**string**] |  | defaults to undefined|


### Return type

**FolderResponse**

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Folder moved |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **renameFolder**
> FolderResponse renameFolder(renameRequest)


### Example

```typescript
import {
    FoldersApi,
    Configuration,
    RenameRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new FoldersApi(configuration);

let folderId: string; // (default to undefined)
let renameRequest: RenameRequest; //

const { status, data } = await apiInstance.renameFolder(
    folderId,
    renameRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **renameRequest** | **RenameRequest**|  | |
| **folderId** | [**string**] |  | defaults to undefined|


### Return type

**FolderResponse**

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Folder renamed |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **restoreFolder**
> FolderResponse restoreFolder()


### Example

```typescript
import {
    FoldersApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new FoldersApi(configuration);

let folderId: string; // (default to undefined)

const { status, data } = await apiInstance.restoreFolder(
    folderId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **folderId** | [**string**] |  | defaults to undefined|


### Return type

**FolderResponse**

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Folder restored |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

