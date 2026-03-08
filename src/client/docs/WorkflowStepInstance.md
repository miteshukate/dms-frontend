# WorkflowStepInstance


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **string** |  | [optional] [default to undefined]
**order** | **number** |  | [optional] [default to undefined]
**name** | **string** |  | [optional] [default to undefined]
**status** | **string** |  | [optional] [default to undefined]
**approver** | [**UserSummary**](UserSummary.md) |  | [optional] [default to undefined]
**decidedAt** | **string** |  | [optional] [default to undefined]
**comment** | **string** |  | [optional] [default to undefined]
**dueAt** | **string** |  | [optional] [default to undefined]

## Example

```typescript
import { WorkflowStepInstance } from './api';

const instance: WorkflowStepInstance = {
    id,
    order,
    name,
    status,
    approver,
    decidedAt,
    comment,
    dueAt,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
