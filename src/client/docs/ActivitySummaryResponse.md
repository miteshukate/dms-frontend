# ActivitySummaryResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**period** | [**ActivitySummaryResponsePeriod**](ActivitySummaryResponsePeriod.md) |  | [optional] [default to undefined]
**uploads** | **number** |  | [optional] [default to undefined]
**downloads** | **number** |  | [optional] [default to undefined]
**shares** | **number** |  | [optional] [default to undefined]
**deletions** | **number** |  | [optional] [default to undefined]
**activeUsers** | **number** |  | [optional] [default to undefined]
**dailySeries** | [**Array&lt;ActivitySummaryResponseDailySeriesInner&gt;**](ActivitySummaryResponseDailySeriesInner.md) |  | [optional] [default to undefined]

## Example

```typescript
import { ActivitySummaryResponse } from './api';

const instance: ActivitySummaryResponse = {
    period,
    uploads,
    downloads,
    shares,
    deletions,
    activeUsers,
    dailySeries,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
