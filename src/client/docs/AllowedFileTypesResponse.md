# AllowedFileTypesResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**allowAll** | **boolean** | If true, all file types are allowed and the lists below are ignored | [optional] [default to undefined]
**allowedMimeTypes** | **Array&lt;string&gt;** |  | [optional] [default to undefined]
**allowedExtensions** | **Array&lt;string&gt;** |  | [optional] [default to undefined]
**blockedMimeTypes** | **Array&lt;string&gt;** |  | [optional] [default to undefined]

## Example

```typescript
import { AllowedFileTypesResponse } from './api';

const instance: AllowedFileTypesResponse = {
    allowAll,
    allowedMimeTypes,
    allowedExtensions,
    blockedMimeTypes,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
