# TeamsApi

All URIs are relative to *https://api.dms.example.com/v1*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**addTeamMembers**](#addteammembers) | **POST** /teams/{teamId}/members | Add members to team|
|[**createTeam**](#createteam) | **POST** /teams | Create team|
|[**deleteTeam**](#deleteteam) | **DELETE** /teams/{teamId} | Delete team|
|[**getTeam**](#getteam) | **GET** /teams/{teamId} | Get team|
|[**listTeamMembers**](#listteammembers) | **GET** /teams/{teamId}/members | List team members|
|[**listTeams**](#listteams) | **GET** /teams | List teams|
|[**removeTeamMembers**](#removeteammembers) | **DELETE** /teams/{teamId}/members | Remove members from team|
|[**updateTeam**](#updateteam) | **PUT** /teams/{teamId} | Update team|

# **addTeamMembers**
> addTeamMembers(teamMembersRequest)


### Example

```typescript
import {
    TeamsApi,
    Configuration,
    TeamMembersRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new TeamsApi(configuration);

let teamId: string; // (default to undefined)
let teamMembersRequest: TeamMembersRequest; //

const { status, data } = await apiInstance.addTeamMembers(
    teamId,
    teamMembersRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **teamMembersRequest** | **TeamMembersRequest**|  | |
| **teamId** | [**string**] |  | defaults to undefined|


### Return type

void (empty response body)

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: Not defined


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**204** | Members added |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **createTeam**
> TeamResponse createTeam(createTeamRequest)


### Example

```typescript
import {
    TeamsApi,
    Configuration,
    CreateTeamRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new TeamsApi(configuration);

let createTeamRequest: CreateTeamRequest; //

const { status, data } = await apiInstance.createTeam(
    createTeamRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **createTeamRequest** | **CreateTeamRequest**|  | |


### Return type

**TeamResponse**

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**201** | Team created |  -  |
|**400** | Bad request – validation error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **deleteTeam**
> deleteTeam()


### Example

```typescript
import {
    TeamsApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new TeamsApi(configuration);

let teamId: string; // (default to undefined)

const { status, data } = await apiInstance.deleteTeam(
    teamId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **teamId** | [**string**] |  | defaults to undefined|


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
|**204** | Team deleted |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getTeam**
> TeamResponse getTeam()


### Example

```typescript
import {
    TeamsApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new TeamsApi(configuration);

let teamId: string; // (default to undefined)

const { status, data } = await apiInstance.getTeam(
    teamId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **teamId** | [**string**] |  | defaults to undefined|


### Return type

**TeamResponse**

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Team details |  -  |
|**404** | Not found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **listTeamMembers**
> UserPageResponse listTeamMembers()


### Example

```typescript
import {
    TeamsApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new TeamsApi(configuration);

let teamId: string; // (default to undefined)
let page: number; //Zero-based page index (optional) (default to 0)
let size: number; //Number of items per page (optional) (default to 20)

const { status, data } = await apiInstance.listTeamMembers(
    teamId,
    page,
    size
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **teamId** | [**string**] |  | defaults to undefined|
| **page** | [**number**] | Zero-based page index | (optional) defaults to 0|
| **size** | [**number**] | Number of items per page | (optional) defaults to 20|


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
|**200** | Team members |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **listTeams**
> TeamPageResponse listTeams()


### Example

```typescript
import {
    TeamsApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new TeamsApi(configuration);

let page: number; //Zero-based page index (optional) (default to 0)
let size: number; //Number of items per page (optional) (default to 20)
let sort: string; //Sort expression: field,asc or field,desc (optional) (default to undefined)
let search: string; // (optional) (default to undefined)

const { status, data } = await apiInstance.listTeams(
    page,
    size,
    sort,
    search
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **page** | [**number**] | Zero-based page index | (optional) defaults to 0|
| **size** | [**number**] | Number of items per page | (optional) defaults to 20|
| **sort** | [**string**] | Sort expression: field,asc or field,desc | (optional) defaults to undefined|
| **search** | [**string**] |  | (optional) defaults to undefined|


### Return type

**TeamPageResponse**

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Paginated list of teams |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **removeTeamMembers**
> removeTeamMembers()


### Example

```typescript
import {
    TeamsApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new TeamsApi(configuration);

let teamId: string; // (default to undefined)
let userIds: Array<string>; //Comma-separated list of user UUIDs to remove (default to undefined)

const { status, data } = await apiInstance.removeTeamMembers(
    teamId,
    userIds
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **teamId** | [**string**] |  | defaults to undefined|
| **userIds** | **Array&lt;string&gt;** | Comma-separated list of user UUIDs to remove | defaults to undefined|


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
|**204** | Members removed |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **updateTeam**
> TeamResponse updateTeam(updateTeamRequest)


### Example

```typescript
import {
    TeamsApi,
    Configuration,
    UpdateTeamRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new TeamsApi(configuration);

let teamId: string; // (default to undefined)
let updateTeamRequest: UpdateTeamRequest; //

const { status, data } = await apiInstance.updateTeam(
    teamId,
    updateTeamRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **updateTeamRequest** | **UpdateTeamRequest**|  | |
| **teamId** | [**string**] |  | defaults to undefined|


### Return type

**TeamResponse**

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Team updated |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

