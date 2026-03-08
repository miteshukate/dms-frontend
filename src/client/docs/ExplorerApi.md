# ExplorerApi

All URIs are relative to *https://api.dms.example.com/v1*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**getBreadcrumb**](#getbreadcrumb) | **GET** /explorer/breadcrumb | Get breadcrumb path for a folder|
|[**listDirectory**](#listdirectory) | **GET** /explorer | List directory contents|
|[**search**](#search) | **GET** /explorer/search | Search files and folders|

# **getBreadcrumb**
> BreadcrumbResponse getBreadcrumb()


### Example

```typescript
import {
    ExplorerApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new ExplorerApi(configuration);

let folderId: string; // (default to undefined)

const { status, data } = await apiInstance.getBreadcrumb(
    folderId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **folderId** | [**string**] |  | defaults to undefined|


### Return type

**BreadcrumbResponse**

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Breadcrumb path from root to folder |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **listDirectory**
> DirectoryResponse listDirectory()


### Example

```typescript
import {
    ExplorerApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new ExplorerApi(configuration);

let folderId: string; //Folder to list; omit for root (optional) (default to undefined)
let page: number; //Zero-based page index (optional) (default to 0)
let size: number; //Number of items per page (optional) (default to 20)
let sort: string; //Sort expression: field,asc or field,desc (optional) (default to undefined)
let type: 'file' | 'folder' | 'all'; // (optional) (default to 'all')

const { status, data } = await apiInstance.listDirectory(
    folderId,
    page,
    size,
    sort,
    type
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **folderId** | [**string**] | Folder to list; omit for root | (optional) defaults to undefined|
| **page** | [**number**] | Zero-based page index | (optional) defaults to 0|
| **size** | [**number**] | Number of items per page | (optional) defaults to 20|
| **sort** | [**string**] | Sort expression: field,asc or field,desc | (optional) defaults to undefined|
| **type** | [**&#39;file&#39; | &#39;folder&#39; | &#39;all&#39;**]**Array<&#39;file&#39; &#124; &#39;folder&#39; &#124; &#39;all&#39;>** |  | (optional) defaults to 'all'|


### Return type

**DirectoryResponse**

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Directory listing |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **search**
> SearchResultPageResponse search()


### Example

```typescript
import {
    ExplorerApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new ExplorerApi(configuration);

let q: string; //Full-text search query (optional) (default to undefined)
let type: 'file' | 'folder' | 'all'; // (optional) (default to 'all')
let mimeType: string; // (optional) (default to undefined)
let ownerId: string; // (optional) (default to undefined)
let tags: Array<string>; // (optional) (default to undefined)
let createdFrom: string; // (optional) (default to undefined)
let createdTo: string; // (optional) (default to undefined)
let modifiedFrom: string; // (optional) (default to undefined)
let modifiedTo: string; // (optional) (default to undefined)
let folderId: string; //Scope search to a specific folder (and descendants) (optional) (default to undefined)
let page: number; //Zero-based page index (optional) (default to 0)
let size: number; //Number of items per page (optional) (default to 20)
let sort: string; //Sort expression: field,asc or field,desc (optional) (default to undefined)

const { status, data } = await apiInstance.search(
    q,
    type,
    mimeType,
    ownerId,
    tags,
    createdFrom,
    createdTo,
    modifiedFrom,
    modifiedTo,
    folderId,
    page,
    size,
    sort
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **q** | [**string**] | Full-text search query | (optional) defaults to undefined|
| **type** | [**&#39;file&#39; | &#39;folder&#39; | &#39;all&#39;**]**Array<&#39;file&#39; &#124; &#39;folder&#39; &#124; &#39;all&#39;>** |  | (optional) defaults to 'all'|
| **mimeType** | [**string**] |  | (optional) defaults to undefined|
| **ownerId** | [**string**] |  | (optional) defaults to undefined|
| **tags** | **Array&lt;string&gt;** |  | (optional) defaults to undefined|
| **createdFrom** | [**string**] |  | (optional) defaults to undefined|
| **createdTo** | [**string**] |  | (optional) defaults to undefined|
| **modifiedFrom** | [**string**] |  | (optional) defaults to undefined|
| **modifiedTo** | [**string**] |  | (optional) defaults to undefined|
| **folderId** | [**string**] | Scope search to a specific folder (and descendants) | (optional) defaults to undefined|
| **page** | [**number**] | Zero-based page index | (optional) defaults to 0|
| **size** | [**number**] | Number of items per page | (optional) defaults to 20|
| **sort** | [**string**] | Sort expression: field,asc or field,desc | (optional) defaults to undefined|


### Return type

**SearchResultPageResponse**

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Search results |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

