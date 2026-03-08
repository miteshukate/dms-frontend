# WorkflowInstanceResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **string** |  | [optional] [default to undefined]
**title** | **string** |  | [optional] [default to undefined]
**status** | **string** |  | [optional] [default to undefined]
**file** | [**FileResponse**](FileResponse.md) |  | [optional] [default to undefined]
**template** | [**WorkflowTemplateResponse**](WorkflowTemplateResponse.md) |  | [optional] [default to undefined]
**initiatedBy** | [**UserSummary**](UserSummary.md) |  | [optional] [default to undefined]
**steps** | [**Array&lt;WorkflowStepInstance&gt;**](WorkflowStepInstance.md) |  | [optional] [default to undefined]
**currentStep** | **number** |  | [optional] [default to undefined]
**dueDate** | **string** |  | [optional] [default to undefined]
**completedAt** | **string** |  | [optional] [default to undefined]
**createdAt** | **string** |  | [optional] [default to undefined]
**updatedAt** | **string** |  | [optional] [default to undefined]

## Example

```typescript
import { WorkflowInstanceResponse } from './api';

const instance: WorkflowInstanceResponse = {
    id,
    title,
    status,
    file,
    template,
    initiatedBy,
    steps,
    currentStep,
    dueDate,
    completedAt,
    createdAt,
    updatedAt,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
