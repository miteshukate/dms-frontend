# ErrorResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**code** | **string** | Machine-readable error code | [default to undefined]
**message** | **string** | Human-readable error message | [default to undefined]
**details** | [**Array&lt;ErrorDetail&gt;**](ErrorDetail.md) |  | [optional] [default to undefined]
**traceId** | **string** | Distributed trace identifier | [optional] [default to undefined]

## Example

```typescript
import { ErrorResponse } from './api';

const instance: ErrorResponse = {
    code,
    message,
    details,
    traceId,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
