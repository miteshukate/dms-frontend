# AuditLogEntry


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **string** |  | [optional] [default to undefined]
**action** | **string** |  | [optional] [default to undefined]
**actor** | [**UserSummary**](UserSummary.md) |  | [optional] [default to undefined]
**resourceType** | **string** |  | [optional] [default to undefined]
**resourceId** | **string** |  | [optional] [default to undefined]
**resourceName** | **string** |  | [optional] [default to undefined]
**ipAddress** | **string** |  | [optional] [default to undefined]
**userAgent** | **string** |  | [optional] [default to undefined]
**metadata** | **{ [key: string]: any; }** | Additional context specific to the action | [optional] [default to undefined]
**occurredAt** | **string** |  | [optional] [default to undefined]

## Example

```typescript
import { AuditLogEntry } from './api';

const instance: AuditLogEntry = {
    id,
    action,
    actor,
    resourceType,
    resourceId,
    resourceName,
    ipAddress,
    userAgent,
    metadata,
    occurredAt,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
