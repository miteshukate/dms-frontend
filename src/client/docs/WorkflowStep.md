# WorkflowStep


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**order** | **number** |  | [default to undefined]
**name** | **string** |  | [default to undefined]
**approverType** | **string** |  | [default to undefined]
**approverId** | **string** |  | [default to undefined]
**requireAllMembers** | **boolean** | For team approvers; require unanimous approval | [optional] [default to false]
**deadlineHours** | **number** |  | [optional] [default to undefined]

## Example

```typescript
import { WorkflowStep } from './api';

const instance: WorkflowStep = {
    order,
    name,
    approverType,
    approverId,
    requireAllMembers,
    deadlineHours,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
