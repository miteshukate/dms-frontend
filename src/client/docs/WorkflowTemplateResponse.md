# WorkflowTemplateResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **string** |  | [default to undefined]
**description** | **string** |  | [optional] [default to undefined]
**steps** | [**Array&lt;WorkflowStep&gt;**](WorkflowStep.md) |  | [default to undefined]
**isDefault** | **boolean** |  | [optional] [default to false]
**id** | **string** |  | [optional] [default to undefined]
**tenantId** | **string** |  | [optional] [default to undefined]
**createdBy** | [**UserSummary**](UserSummary.md) |  | [optional] [default to undefined]
**createdAt** | **string** |  | [optional] [default to undefined]
**updatedAt** | **string** |  | [optional] [default to undefined]

## Example

```typescript
import { WorkflowTemplateResponse } from './api';

const instance: WorkflowTemplateResponse = {
    name,
    description,
    steps,
    isDefault,
    id,
    tenantId,
    createdBy,
    createdAt,
    updatedAt,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
