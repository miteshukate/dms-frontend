# WorkflowHistoryEvent


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **string** |  | [optional] [default to undefined]
**eventType** | **string** |  | [optional] [default to undefined]
**actor** | [**UserSummary**](UserSummary.md) |  | [optional] [default to undefined]
**stepName** | **string** |  | [optional] [default to undefined]
**comment** | **string** |  | [optional] [default to undefined]
**occurredAt** | **string** |  | [optional] [default to undefined]

## Example

```typescript
import { WorkflowHistoryEvent } from './api';

const instance: WorkflowHistoryEvent = {
    id,
    eventType,
    actor,
    stepName,
    comment,
    occurredAt,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
