# CreateShareRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**resourceType** | **string** |  | [default to undefined]
**resourceId** | **string** |  | [default to undefined]
**principals** | [**Array&lt;SharePrincipal&gt;**](SharePrincipal.md) |  | [default to undefined]
**notifyRecipients** | **boolean** |  | [optional] [default to true]
**message** | **string** |  | [optional] [default to undefined]

## Example

```typescript
import { CreateShareRequest } from './api';

const instance: CreateShareRequest = {
    resourceType,
    resourceId,
    principals,
    notifyRecipients,
    message,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
