# CreateWorkflowTemplateRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **string** |  | [default to undefined]
**description** | **string** |  | [optional] [default to undefined]
**steps** | [**Array&lt;WorkflowStep&gt;**](WorkflowStep.md) |  | [default to undefined]
**isDefault** | **boolean** |  | [optional] [default to false]

## Example

```typescript
import { CreateWorkflowTemplateRequest } from './api';

const instance: CreateWorkflowTemplateRequest = {
    name,
    description,
    steps,
    isDefault,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
