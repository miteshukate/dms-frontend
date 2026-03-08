# FilesApi

All URIs are relative to *https://api.dms.example.com/v1*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**bulkDownload**](#bulkdownload) | **POST** /files/bulk-download | Bulk download files as ZIP|
|[**bulkUploadFiles**](#bulkuploadfiles) | **POST** /files/bulk | Bulk upload files|
|[**copyFile**](#copyfile) | **POST** /files/{fileId}/copy | Copy file|
|[**deleteFile**](#deletefile) | **DELETE** /files/{fileId} | Delete file (moves to trash)|
|[**downloadFile**](#downloadfile) | **GET** /files/{fileId}/download | Download file|
|[**getAllFiles**](#getallfiles) | **GET** /files | Get all files|
|[**getFile**](#getfile) | **GET** /files/{fileId} | Get file metadata|
|[**listFileVersions**](#listfileversions) | **GET** /files/{fileId}/versions | List file versions|
|[**moveFile**](#movefile) | **POST** /files/{fileId}/move | Move file|
|[**previewFile**](#previewfile) | **GET** /files/{fileId}/preview | Get file preview|
|[**renameFile**](#renamefile) | **PATCH** /files/{fileId} | Rename file|
|[**restoreFile**](#restorefile) | **POST** /files/{fileId}/restore | Restore file from trash|
|[**restoreFileVersion**](#restorefileversion) | **POST** /files/{fileId}/versions/{versionId}/restore | Restore a specific file version|
|[**setFileTags**](#setfiletags) | **PUT** /files/{fileId}/tags | Set tags on file|
|[**uploadFile**](#uploadfile) | **POST** /files | Upload single file|
|[**uploadFileVersion**](#uploadfileversion) | **POST** /files/{fileId}/versions | Upload new file version|

# **bulkDownload**
> File bulkDownload(bulkDownloadRequest)


### Example

```typescript
import {
    FilesApi,
    Configuration,
    BulkDownloadRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new FilesApi(configuration);

let bulkDownloadRequest: BulkDownloadRequest; //

const { status, data } = await apiInstance.bulkDownload(
    bulkDownloadRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **bulkDownloadRequest** | **BulkDownloadRequest**|  | |


### Return type

**File**

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/zip


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | ZIP archive of selected files |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **bulkUploadFiles**
> BulkUploadResponse bulkUploadFiles()


### Example

```typescript
import {
    FilesApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new FilesApi(configuration);

let files: Array<File>; //Multiple file binaries (default to undefined)
let folderId: string; // (optional) (default to undefined)

const { status, data } = await apiInstance.bulkUploadFiles(
    files,
    folderId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **files** | **Array&lt;File&gt;** | Multiple file binaries | defaults to undefined|
| **folderId** | [**string**] |  | (optional) defaults to undefined|


### Return type

**BulkUploadResponse**

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: multipart/form-data
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**207** | Multi-status bulk upload result |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **copyFile**
> FileResponse copyFile(copyRequest)


### Example

```typescript
import {
    FilesApi,
    Configuration,
    CopyRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new FilesApi(configuration);

let fileId: string; // (default to undefined)
let copyRequest: CopyRequest; //

const { status, data } = await apiInstance.copyFile(
    fileId,
    copyRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **copyRequest** | **CopyRequest**|  | |
| **fileId** | [**string**] |  | defaults to undefined|


### Return type

**FileResponse**

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**201** | File copied |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **deleteFile**
> deleteFile()


### Example

```typescript
import {
    FilesApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new FilesApi(configuration);

let fileId: string; // (default to undefined)
let permanent: boolean; // (optional) (default to false)

const { status, data } = await apiInstance.deleteFile(
    fileId,
    permanent
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **fileId** | [**string**] |  | defaults to undefined|
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
|**204** | File deleted |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **downloadFile**
> File downloadFile()


### Example

```typescript
import {
    FilesApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new FilesApi(configuration);

let fileId: string; // (default to undefined)
let version: number; //Specific version number; defaults to latest (optional) (default to undefined)

const { status, data } = await apiInstance.downloadFile(
    fileId,
    version
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **fileId** | [**string**] |  | defaults to undefined|
| **version** | [**number**] | Specific version number; defaults to latest | (optional) defaults to undefined|


### Return type

**File**

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/octet-stream, application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | File binary content |  * Content-Disposition -  <br>  * Content-Type -  <br>  |
|**404** | Not found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getAllFiles**
> GetFilesByFolder200Response getAllFiles()


### Example

```typescript
import {
    FilesApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new FilesApi(configuration);

let page: number; //Zero-indexed page number (optional) (default to 0)
let size: number; //Number of items per page (optional) (default to 20)
let sort: string; //Sort criteria (e.g., createdAt,desc) (optional) (default to 'createdAt,desc')
let status: 'active' | 'trashed' | 'archived'; //Filter by file status (optional) (default to undefined)
let mimeType: string; //Filter by MIME type (optional) (default to undefined)
let search: string; //Search in file name and tags (optional) (default to undefined)

const { status, data } = await apiInstance.getAllFiles(
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
|**200** | List of all files |  -  |
|**400** | Bad request – validation error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getFile**
> FileResponse getFile()


### Example

```typescript
import {
    FilesApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new FilesApi(configuration);

let fileId: string; // (default to undefined)

const { status, data } = await apiInstance.getFile(
    fileId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **fileId** | [**string**] |  | defaults to undefined|


### Return type

**FileResponse**

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | File metadata |  -  |
|**404** | Not found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **listFileVersions**
> FileVersionPageResponse listFileVersions()


### Example

```typescript
import {
    FilesApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new FilesApi(configuration);

let fileId: string; // (default to undefined)
let page: number; //Zero-based page index (optional) (default to 0)
let size: number; //Number of items per page (optional) (default to 20)

const { status, data } = await apiInstance.listFileVersions(
    fileId,
    page,
    size
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **fileId** | [**string**] |  | defaults to undefined|
| **page** | [**number**] | Zero-based page index | (optional) defaults to 0|
| **size** | [**number**] | Number of items per page | (optional) defaults to 20|


### Return type

**FileVersionPageResponse**

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | List of file versions |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **moveFile**
> FileResponse moveFile(moveRequest)


### Example

```typescript
import {
    FilesApi,
    Configuration,
    MoveRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new FilesApi(configuration);

let fileId: string; // (default to undefined)
let moveRequest: MoveRequest; //

const { status, data } = await apiInstance.moveFile(
    fileId,
    moveRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **moveRequest** | **MoveRequest**|  | |
| **fileId** | [**string**] |  | defaults to undefined|


### Return type

**FileResponse**

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | File moved |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **previewFile**
> File previewFile()

Returns a preview image or HTML rendition of the file.

### Example

```typescript
import {
    FilesApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new FilesApi(configuration);

let fileId: string; // (default to undefined)
let format: 'png' | 'jpg' | 'pdf' | 'html'; // (optional) (default to 'png')
let page: number; //Page number for multi-page documents (optional) (default to 1)

const { status, data } = await apiInstance.previewFile(
    fileId,
    format,
    page
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **fileId** | [**string**] |  | defaults to undefined|
| **format** | [**&#39;png&#39; | &#39;jpg&#39; | &#39;pdf&#39; | &#39;html&#39;**]**Array<&#39;png&#39; &#124; &#39;jpg&#39; &#124; &#39;pdf&#39; &#124; &#39;html&#39;>** |  | (optional) defaults to 'png'|
| **page** | [**number**] | Page number for multi-page documents | (optional) defaults to 1|


### Return type

**File**

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: image/png, image/jpeg, application/pdf, text/html


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Preview content |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **renameFile**
> FileResponse renameFile(renameRequest)


### Example

```typescript
import {
    FilesApi,
    Configuration,
    RenameRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new FilesApi(configuration);

let fileId: string; // (default to undefined)
let renameRequest: RenameRequest; //

const { status, data } = await apiInstance.renameFile(
    fileId,
    renameRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **renameRequest** | **RenameRequest**|  | |
| **fileId** | [**string**] |  | defaults to undefined|


### Return type

**FileResponse**

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | File renamed |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **restoreFile**
> FileResponse restoreFile()


### Example

```typescript
import {
    FilesApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new FilesApi(configuration);

let fileId: string; // (default to undefined)

const { status, data } = await apiInstance.restoreFile(
    fileId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **fileId** | [**string**] |  | defaults to undefined|


### Return type

**FileResponse**

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | File restored |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **restoreFileVersion**
> FileResponse restoreFileVersion()


### Example

```typescript
import {
    FilesApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new FilesApi(configuration);

let fileId: string; // (default to undefined)
let versionId: string; // (default to undefined)

const { status, data } = await apiInstance.restoreFileVersion(
    fileId,
    versionId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **fileId** | [**string**] |  | defaults to undefined|
| **versionId** | [**string**] |  | defaults to undefined|


### Return type

**FileResponse**

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Version restored as latest |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **setFileTags**
> FileResponse setFileTags(tagsRequest)


### Example

```typescript
import {
    FilesApi,
    Configuration,
    TagsRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new FilesApi(configuration);

let fileId: string; // (default to undefined)
let tagsRequest: TagsRequest; //

const { status, data } = await apiInstance.setFileTags(
    fileId,
    tagsRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **tagsRequest** | **TagsRequest**|  | |
| **fileId** | [**string**] |  | defaults to undefined|


### Return type

**FileResponse**

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Tags updated |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **uploadFile**
> FileResponse uploadFile()


### Example

```typescript
import {
    FilesApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new FilesApi(configuration);

let file: File; //File content (default to undefined)
let folderId: string; //Target folder; root if omitted (optional) (default to undefined)
let tags: string; //Comma-separated tags (optional) (default to undefined)
let description: string; // (optional) (default to undefined)

const { status, data } = await apiInstance.uploadFile(
    file,
    folderId,
    tags,
    description
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **file** | [**File**] | File content | defaults to undefined|
| **folderId** | [**string**] | Target folder; root if omitted | (optional) defaults to undefined|
| **tags** | [**string**] | Comma-separated tags | (optional) defaults to undefined|
| **description** | [**string**] |  | (optional) defaults to undefined|


### Return type

**FileResponse**

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: multipart/form-data
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**201** | File uploaded |  -  |
|**400** | Bad request – validation error |  -  |
|**413** | File exceeds maximum allowed size |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **uploadFileVersion**
> FileVersionResponse uploadFileVersion()


### Example

```typescript
import {
    FilesApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new FilesApi(configuration);

let fileId: string; // (default to undefined)
let file: File; // (default to undefined)
let comment: string; // (optional) (default to undefined)

const { status, data } = await apiInstance.uploadFileVersion(
    fileId,
    file,
    comment
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **fileId** | [**string**] |  | defaults to undefined|
| **file** | [**File**] |  | defaults to undefined|
| **comment** | [**string**] |  | (optional) defaults to undefined|


### Return type

**FileVersionResponse**

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: multipart/form-data
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**201** | New version uploaded |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

