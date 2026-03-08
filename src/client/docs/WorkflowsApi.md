# WorkflowsApi

All URIs are relative to *https://api.dms.example.com/v1*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**approveStep**](#approvestep) | **POST** /workflows/{workflowId}/steps/{stepId}/approve | Approve workflow step|
|[**cancelWorkflow**](#cancelworkflow) | **POST** /workflows/{workflowId}/cancel | Cancel workflow|
|[**createWorkflow**](#createworkflow) | **POST** /workflows | Assign approval workflow to a document|
|[**createWorkflowTemplate**](#createworkflowtemplate) | **POST** /workflow-templates | Create workflow template|
|[**deleteWorkflowTemplate**](#deleteworkflowtemplate) | **DELETE** /workflow-templates/{templateId} | Delete workflow template|
|[**getWorkflow**](#getworkflow) | **GET** /workflows/{workflowId} | Get workflow instance|
|[**getWorkflowHistory**](#getworkflowhistory) | **GET** /workflows/{workflowId}/history | Get workflow history|
|[**getWorkflowTemplate**](#getworkflowtemplate) | **GET** /workflow-templates/{templateId} | Get workflow template|
|[**listWorkflowTemplates**](#listworkflowtemplates) | **GET** /workflow-templates | List workflow templates|
|[**listWorkflows**](#listworkflows) | **GET** /workflows | List workflow instances|
|[**rejectStep**](#rejectstep) | **POST** /workflows/{workflowId}/steps/{stepId}/reject | Reject workflow step|
|[**submitWorkflow**](#submitworkflow) | **POST** /workflows/{workflowId}/submit | Submit document for approval|
|[**updateWorkflowTemplate**](#updateworkflowtemplate) | **PUT** /workflow-templates/{templateId} | Update workflow template|

# **approveStep**
> WorkflowInstanceResponse approveStep()


### Example

```typescript
import {
    WorkflowsApi,
    Configuration,
    WorkflowDecisionRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new WorkflowsApi(configuration);

let workflowId: string; // (default to undefined)
let stepId: string; // (default to undefined)
let workflowDecisionRequest: WorkflowDecisionRequest; // (optional)

const { status, data } = await apiInstance.approveStep(
    workflowId,
    stepId,
    workflowDecisionRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **workflowDecisionRequest** | **WorkflowDecisionRequest**|  | |
| **workflowId** | [**string**] |  | defaults to undefined|
| **stepId** | [**string**] |  | defaults to undefined|


### Return type

**WorkflowInstanceResponse**

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Step approved |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **cancelWorkflow**
> WorkflowInstanceResponse cancelWorkflow()


### Example

```typescript
import {
    WorkflowsApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new WorkflowsApi(configuration);

let workflowId: string; // (default to undefined)

const { status, data } = await apiInstance.cancelWorkflow(
    workflowId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **workflowId** | [**string**] |  | defaults to undefined|


### Return type

**WorkflowInstanceResponse**

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Workflow cancelled |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **createWorkflow**
> WorkflowInstanceResponse createWorkflow(createWorkflowRequest)


### Example

```typescript
import {
    WorkflowsApi,
    Configuration,
    CreateWorkflowRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new WorkflowsApi(configuration);

let createWorkflowRequest: CreateWorkflowRequest; //

const { status, data } = await apiInstance.createWorkflow(
    createWorkflowRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **createWorkflowRequest** | **CreateWorkflowRequest**|  | |


### Return type

**WorkflowInstanceResponse**

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**201** | Workflow instance created |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **createWorkflowTemplate**
> WorkflowTemplateResponse createWorkflowTemplate(createWorkflowTemplateRequest)


### Example

```typescript
import {
    WorkflowsApi,
    Configuration,
    CreateWorkflowTemplateRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new WorkflowsApi(configuration);

let createWorkflowTemplateRequest: CreateWorkflowTemplateRequest; //

const { status, data } = await apiInstance.createWorkflowTemplate(
    createWorkflowTemplateRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **createWorkflowTemplateRequest** | **CreateWorkflowTemplateRequest**|  | |


### Return type

**WorkflowTemplateResponse**

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**201** | Template created |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **deleteWorkflowTemplate**
> deleteWorkflowTemplate()


### Example

```typescript
import {
    WorkflowsApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new WorkflowsApi(configuration);

let templateId: string; // (default to undefined)

const { status, data } = await apiInstance.deleteWorkflowTemplate(
    templateId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **templateId** | [**string**] |  | defaults to undefined|


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
|**204** | Template deleted |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getWorkflow**
> WorkflowInstanceResponse getWorkflow()


### Example

```typescript
import {
    WorkflowsApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new WorkflowsApi(configuration);

let workflowId: string; // (default to undefined)

const { status, data } = await apiInstance.getWorkflow(
    workflowId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **workflowId** | [**string**] |  | defaults to undefined|


### Return type

**WorkflowInstanceResponse**

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Workflow instance details |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getWorkflowHistory**
> WorkflowHistoryPageResponse getWorkflowHistory()


### Example

```typescript
import {
    WorkflowsApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new WorkflowsApi(configuration);

let workflowId: string; // (default to undefined)
let page: number; //Zero-based page index (optional) (default to 0)
let size: number; //Number of items per page (optional) (default to 20)

const { status, data } = await apiInstance.getWorkflowHistory(
    workflowId,
    page,
    size
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **workflowId** | [**string**] |  | defaults to undefined|
| **page** | [**number**] | Zero-based page index | (optional) defaults to 0|
| **size** | [**number**] | Number of items per page | (optional) defaults to 20|


### Return type

**WorkflowHistoryPageResponse**

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Workflow history events |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getWorkflowTemplate**
> WorkflowTemplateResponse getWorkflowTemplate()


### Example

```typescript
import {
    WorkflowsApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new WorkflowsApi(configuration);

let templateId: string; // (default to undefined)

const { status, data } = await apiInstance.getWorkflowTemplate(
    templateId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **templateId** | [**string**] |  | defaults to undefined|


### Return type

**WorkflowTemplateResponse**

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Template details |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **listWorkflowTemplates**
> WorkflowTemplatePageResponse listWorkflowTemplates()


### Example

```typescript
import {
    WorkflowsApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new WorkflowsApi(configuration);

let page: number; //Zero-based page index (optional) (default to 0)
let size: number; //Number of items per page (optional) (default to 20)

const { status, data } = await apiInstance.listWorkflowTemplates(
    page,
    size
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **page** | [**number**] | Zero-based page index | (optional) defaults to 0|
| **size** | [**number**] | Number of items per page | (optional) defaults to 20|


### Return type

**WorkflowTemplatePageResponse**

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Workflow templates |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **listWorkflows**
> WorkflowInstancePageResponse listWorkflows()


### Example

```typescript
import {
    WorkflowsApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new WorkflowsApi(configuration);

let page: number; //Zero-based page index (optional) (default to 0)
let size: number; //Number of items per page (optional) (default to 20)
let sort: string; //Sort expression: field,asc or field,desc (optional) (default to undefined)
let status: 'pending' | 'in_progress' | 'approved' | 'rejected' | 'cancelled'; // (optional) (default to undefined)
let fileId: string; // (optional) (default to undefined)
let assigneeId: string; // (optional) (default to undefined)

const { status, data } = await apiInstance.listWorkflows(
    page,
    size,
    sort,
    status,
    fileId,
    assigneeId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **page** | [**number**] | Zero-based page index | (optional) defaults to 0|
| **size** | [**number**] | Number of items per page | (optional) defaults to 20|
| **sort** | [**string**] | Sort expression: field,asc or field,desc | (optional) defaults to undefined|
| **status** | [**&#39;pending&#39; | &#39;in_progress&#39; | &#39;approved&#39; | &#39;rejected&#39; | &#39;cancelled&#39;**]**Array<&#39;pending&#39; &#124; &#39;in_progress&#39; &#124; &#39;approved&#39; &#124; &#39;rejected&#39; &#124; &#39;cancelled&#39;>** |  | (optional) defaults to undefined|
| **fileId** | [**string**] |  | (optional) defaults to undefined|
| **assigneeId** | [**string**] |  | (optional) defaults to undefined|


### Return type

**WorkflowInstancePageResponse**

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Workflow instances |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **rejectStep**
> WorkflowInstanceResponse rejectStep()


### Example

```typescript
import {
    WorkflowsApi,
    Configuration,
    WorkflowDecisionRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new WorkflowsApi(configuration);

let workflowId: string; // (default to undefined)
let stepId: string; // (default to undefined)
let workflowDecisionRequest: WorkflowDecisionRequest; // (optional)

const { status, data } = await apiInstance.rejectStep(
    workflowId,
    stepId,
    workflowDecisionRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **workflowDecisionRequest** | **WorkflowDecisionRequest**|  | |
| **workflowId** | [**string**] |  | defaults to undefined|
| **stepId** | [**string**] |  | defaults to undefined|


### Return type

**WorkflowInstanceResponse**

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Step rejected |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **submitWorkflow**
> WorkflowInstanceResponse submitWorkflow()


### Example

```typescript
import {
    WorkflowsApi,
    Configuration,
    WorkflowSubmitRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new WorkflowsApi(configuration);

let workflowId: string; // (default to undefined)
let workflowSubmitRequest: WorkflowSubmitRequest; // (optional)

const { status, data } = await apiInstance.submitWorkflow(
    workflowId,
    workflowSubmitRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **workflowSubmitRequest** | **WorkflowSubmitRequest**|  | |
| **workflowId** | [**string**] |  | defaults to undefined|


### Return type

**WorkflowInstanceResponse**

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Workflow submitted |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **updateWorkflowTemplate**
> WorkflowTemplateResponse updateWorkflowTemplate(createWorkflowTemplateRequest)


### Example

```typescript
import {
    WorkflowsApi,
    Configuration,
    CreateWorkflowTemplateRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new WorkflowsApi(configuration);

let templateId: string; // (default to undefined)
let createWorkflowTemplateRequest: CreateWorkflowTemplateRequest; //

const { status, data } = await apiInstance.updateWorkflowTemplate(
    templateId,
    createWorkflowTemplateRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **createWorkflowTemplateRequest** | **CreateWorkflowTemplateRequest**|  | |
| **templateId** | [**string**] |  | defaults to undefined|


### Return type

**WorkflowTemplateResponse**

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Template updated |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

