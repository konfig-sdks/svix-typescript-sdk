type Parameter = {
    name: string
}
type Entry = {
    parameters: Parameter[]
}
export const operationParameterMap: Record<string, Entry> = {
    '/api/v1/app-POST': {
        parameters: [
            {
                name: 'name'
            },
            {
                name: 'rateLimit'
            },
            {
                name: 'uid'
            },
            {
                name: 'metadata'
            },
            {
                name: 'get_if_exists'
            },
            {
                name: 'idempotency-key'
            },
        ]
    },
    '/api/v1/app/{app_id}-GET': {
        parameters: [
            {
                name: 'app_id'
            },
        ]
    },
    '/api/v1/app-GET': {
        parameters: [
            {
                name: 'limit'
            },
            {
                name: 'iterator'
            },
            {
                name: 'order'
            },
        ]
    },
    '/api/v1/app/{app_id}-PATCH': {
        parameters: [
            {
                name: 'app_id'
            },
            {
                name: 'name'
            },
            {
                name: 'rateLimit'
            },
            {
                name: 'uid'
            },
            {
                name: 'metadata'
            },
        ]
    },
    '/api/v1/app/{app_id}-DELETE': {
        parameters: [
            {
                name: 'app_id'
            },
        ]
    },
    '/api/v1/app/{app_id}-PUT': {
        parameters: [
            {
                name: 'name'
            },
            {
                name: 'app_id'
            },
            {
                name: 'rateLimit'
            },
            {
                name: 'uid'
            },
            {
                name: 'metadata'
            },
        ]
    },
    '/api/v1/auth/app/{app_id}/expire-all-POST': {
        parameters: [
            {
                name: 'app_id'
            },
            {
                name: 'expiry'
            },
            {
                name: 'idempotency-key'
            },
        ]
    },
    '/api/v1/auth/dashboard-access/{app_id}-POST': {
        parameters: [
            {
                name: 'app_id'
            },
            {
                name: 'idempotency-key'
            },
        ]
    },
    '/api/v1/auth/app-portal-access/{app_id}-POST': {
        parameters: [
            {
                name: 'app_id'
            },
            {
                name: 'featureFlags'
            },
            {
                name: 'expiry'
            },
            {
                name: 'idempotency-key'
            },
        ]
    },
    '/api/v1/auth/logout-POST': {
        parameters: [
            {
                name: 'idempotency-key'
            },
        ]
    },
    '/api/v1/background-task/{task_id}-GET': {
        parameters: [
            {
                name: 'task_id'
            },
        ]
    },
    '/api/v1/background-task-GET': {
        parameters: [
            {
                name: 'status'
            },
            {
                name: 'task'
            },
            {
                name: 'limit'
            },
            {
                name: 'iterator'
            },
            {
                name: 'order'
            },
        ]
    },
    '/api/v1/app/{app_id}/endpoint-POST': {
        parameters: [
            {
                name: 'url'
            },
            {
                name: 'app_id'
            },
            {
                name: 'description'
            },
            {
                name: 'version'
            },
            {
                name: 'rateLimit'
            },
            {
                name: 'uid'
            },
            {
                name: 'disabled'
            },
            {
                name: 'filterTypes'
            },
            {
                name: 'channels'
            },
            {
                name: 'secret'
            },
            {
                name: 'metadata'
            },
            {
                name: 'idempotency-key'
            },
        ]
    },
    '/api/v1/app/{app_id}/endpoint/{endpoint_id}-GET': {
        parameters: [
            {
                name: 'app_id'
            },
            {
                name: 'endpoint_id'
            },
        ]
    },
    '/api/v1/app/{app_id}/endpoint/{endpoint_id}/headers-GET': {
        parameters: [
            {
                name: 'app_id'
            },
            {
                name: 'endpoint_id'
            },
        ]
    },
    '/api/v1/app/{app_id}/endpoint/{endpoint_id}/secret-GET': {
        parameters: [
            {
                name: 'app_id'
            },
            {
                name: 'endpoint_id'
            },
        ]
    },
    '/api/v1/app/{app_id}/endpoint/{endpoint_id}/stats-GET': {
        parameters: [
            {
                name: 'app_id'
            },
            {
                name: 'endpoint_id'
            },
            {
                name: 'since'
            },
            {
                name: 'until'
            },
        ]
    },
    '/api/v1/app/{app_id}/endpoint/{endpoint_id}/transformation-GET': {
        parameters: [
            {
                name: 'app_id'
            },
            {
                name: 'endpoint_id'
            },
        ]
    },
    '/api/v1/app/{app_id}/endpoint-GET': {
        parameters: [
            {
                name: 'app_id'
            },
            {
                name: 'limit'
            },
            {
                name: 'iterator'
            },
            {
                name: 'order'
            },
        ]
    },
    '/api/v1/app/{app_id}/endpoint/{endpoint_id}/headers-PATCH': {
        parameters: [
            {
                name: 'headers'
            },
            {
                name: 'app_id'
            },
            {
                name: 'endpoint_id'
            },
        ]
    },
    '/api/v1/app/{app_id}/endpoint/{endpoint_id}-PATCH': {
        parameters: [
            {
                name: 'app_id'
            },
            {
                name: 'endpoint_id'
            },
            {
                name: 'description'
            },
            {
                name: 'version'
            },
            {
                name: 'rateLimit'
            },
            {
                name: 'uid'
            },
            {
                name: 'url'
            },
            {
                name: 'disabled'
            },
            {
                name: 'filterTypes'
            },
            {
                name: 'channels'
            },
            {
                name: 'secret'
            },
            {
                name: 'metadata'
            },
        ]
    },
    '/api/v1/app/{app_id}/endpoint/{endpoint_id}-DELETE': {
        parameters: [
            {
                name: 'app_id'
            },
            {
                name: 'endpoint_id'
            },
        ]
    },
    '/api/v1/app/{app_id}/endpoint/{endpoint_id}/replay-missing-POST': {
        parameters: [
            {
                name: 'since'
            },
            {
                name: 'app_id'
            },
            {
                name: 'endpoint_id'
            },
            {
                name: 'until'
            },
            {
                name: 'idempotency-key'
            },
        ]
    },
    '/api/v1/app/{app_id}/endpoint/{endpoint_id}/recover-POST': {
        parameters: [
            {
                name: 'since'
            },
            {
                name: 'app_id'
            },
            {
                name: 'endpoint_id'
            },
            {
                name: 'until'
            },
            {
                name: 'idempotency-key'
            },
        ]
    },
    '/api/v1/app/{app_id}/endpoint/{endpoint_id}/secret/rotate-POST': {
        parameters: [
            {
                name: 'app_id'
            },
            {
                name: 'endpoint_id'
            },
            {
                name: 'key'
            },
            {
                name: 'idempotency-key'
            },
        ]
    },
    '/api/v1/app/{app_id}/endpoint/{endpoint_id}/send-example-POST': {
        parameters: [
            {
                name: 'eventType'
            },
            {
                name: 'app_id'
            },
            {
                name: 'endpoint_id'
            },
            {
                name: 'idempotency-key'
            },
        ]
    },
    '/api/v1/app/{app_id}/endpoint/{endpoint_id}/transformation-PATCH': {
        parameters: [
            {
                name: 'app_id'
            },
            {
                name: 'endpoint_id'
            },
            {
                name: 'code'
            },
            {
                name: 'enabled'
            },
        ]
    },
    '/api/v1/app/{app_id}/endpoint/{endpoint_id}-PUT': {
        parameters: [
            {
                name: 'url'
            },
            {
                name: 'app_id'
            },
            {
                name: 'endpoint_id'
            },
            {
                name: 'description'
            },
            {
                name: 'version'
            },
            {
                name: 'rateLimit'
            },
            {
                name: 'uid'
            },
            {
                name: 'disabled'
            },
            {
                name: 'filterTypes'
            },
            {
                name: 'channels'
            },
            {
                name: 'metadata'
            },
        ]
    },
    '/api/v1/app/{app_id}/endpoint/{endpoint_id}/headers-PUT': {
        parameters: [
            {
                name: 'headers'
            },
            {
                name: 'app_id'
            },
            {
                name: 'endpoint_id'
            },
        ]
    },
    '/api/v1/event-type/{event_type_name}-DELETE': {
        parameters: [
            {
                name: 'event_type_name'
            },
            {
                name: 'expunge'
            },
        ]
    },
    '/api/v1/event-type-POST': {
        parameters: [
            {
                name: 'description'
            },
            {
                name: 'name'
            },
            {
                name: 'archived'
            },
            {
                name: 'schemas'
            },
            {
                name: 'featureFlag'
            },
            {
                name: 'idempotency-key'
            },
        ]
    },
    '/api/v1/event-type/{event_type_name}-GET': {
        parameters: [
            {
                name: 'event_type_name'
            },
        ]
    },
    '/api/v1/event-type-GET': {
        parameters: [
            {
                name: 'limit'
            },
            {
                name: 'iterator'
            },
            {
                name: 'order'
            },
            {
                name: 'include_archived'
            },
            {
                name: 'with_content'
            },
        ]
    },
    '/api/v1/event-type/import/openapi-POST': {
        parameters: [
            {
                name: 'spec'
            },
            {
                name: 'specRaw'
            },
            {
                name: 'idempotency-key'
            },
        ]
    },
    '/api/v1/event-type/{event_type_name}-PATCH': {
        parameters: [
            {
                name: 'event_type_name'
            },
            {
                name: 'description'
            },
            {
                name: 'archived'
            },
            {
                name: 'schemas'
            },
            {
                name: 'featureFlag'
            },
        ]
    },
    '/api/v1/event-type/{event_type_name}-PUT': {
        parameters: [
            {
                name: 'description'
            },
            {
                name: 'event_type_name'
            },
            {
                name: 'archived'
            },
            {
                name: 'schemas'
            },
            {
                name: 'featureFlag'
            },
        ]
    },
    '/api/v1/health-GET': {
        parameters: [
        ]
    },
    '/api/v1/app/{app_id}/integration-POST': {
        parameters: [
            {
                name: 'name'
            },
            {
                name: 'app_id'
            },
            {
                name: 'idempotency-key'
            },
        ]
    },
    '/api/v1/app/{app_id}/integration/{integ_id}-DELETE': {
        parameters: [
            {
                name: 'app_id'
            },
            {
                name: 'integ_id'
            },
        ]
    },
    '/api/v1/app/{app_id}/integration/{integ_id}-GET': {
        parameters: [
            {
                name: 'app_id'
            },
            {
                name: 'integ_id'
            },
        ]
    },
    '/api/v1/app/{app_id}/integration/{integ_id}/key-GET': {
        parameters: [
            {
                name: 'app_id'
            },
            {
                name: 'integ_id'
            },
        ]
    },
    '/api/v1/app/{app_id}/integration-GET': {
        parameters: [
            {
                name: 'app_id'
            },
            {
                name: 'limit'
            },
            {
                name: 'iterator'
            },
        ]
    },
    '/api/v1/app/{app_id}/integration/{integ_id}/key/rotate-POST': {
        parameters: [
            {
                name: 'app_id'
            },
            {
                name: 'integ_id'
            },
            {
                name: 'idempotency-key'
            },
        ]
    },
    '/api/v1/app/{app_id}/integration/{integ_id}-PUT': {
        parameters: [
            {
                name: 'name'
            },
            {
                name: 'app_id'
            },
            {
                name: 'integ_id'
            },
        ]
    },
    '/api/v1/app/{app_id}/msg-POST': {
        parameters: [
            {
                name: 'eventType'
            },
            {
                name: 'payload'
            },
            {
                name: 'app_id'
            },
            {
                name: 'tags'
            },
            {
                name: 'eventId'
            },
            {
                name: 'channels'
            },
            {
                name: 'payloadRetentionPeriod'
            },
            {
                name: 'application'
            },
            {
                name: 'transformationsParams'
            },
            {
                name: 'with_content'
            },
            {
                name: 'idempotency-key'
            },
        ]
    },
    '/api/v1/app/{app_id}/msg/{msg_id}/content-DELETE': {
        parameters: [
            {
                name: 'app_id'
            },
            {
                name: 'msg_id'
            },
        ]
    },
    '/api/v1/app/{app_id}/msg/{msg_id}-GET': {
        parameters: [
            {
                name: 'app_id'
            },
            {
                name: 'msg_id'
            },
            {
                name: 'with_content'
            },
        ]
    },
    '/api/v1/app/{app_id}/msg-GET': {
        parameters: [
            {
                name: 'app_id'
            },
            {
                name: 'limit'
            },
            {
                name: 'iterator'
            },
            {
                name: 'channel'
            },
            {
                name: 'before'
            },
            {
                name: 'after'
            },
            {
                name: 'with_content'
            },
            {
                name: 'tag'
            },
            {
                name: 'event_types'
            },
        ]
    },
    '/api/v1/app/{app_id}/msg/{msg_id}/attempt/{attempt_id}/content-DELETE': {
        parameters: [
            {
                name: 'app_id'
            },
            {
                name: 'msg_id'
            },
            {
                name: 'attempt_id'
            },
        ]
    },
    '/api/v1/app/{app_id}/msg/{msg_id}/attempt/{attempt_id}-GET': {
        parameters: [
            {
                name: 'app_id'
            },
            {
                name: 'msg_id'
            },
            {
                name: 'attempt_id'
            },
        ]
    },
    '/api/v1/app/{app_id}/msg/{msg_id}/endpoint-GET': {
        parameters: [
            {
                name: 'app_id'
            },
            {
                name: 'msg_id'
            },
            {
                name: 'limit'
            },
            {
                name: 'iterator'
            },
        ]
    },
    '/api/v1/app/{app_id}/endpoint/{endpoint_id}/msg-GET': {
        parameters: [
            {
                name: 'app_id'
            },
            {
                name: 'endpoint_id'
            },
            {
                name: 'limit'
            },
            {
                name: 'iterator'
            },
            {
                name: 'channel'
            },
            {
                name: 'tag'
            },
            {
                name: 'status'
            },
            {
                name: 'before'
            },
            {
                name: 'after'
            },
            {
                name: 'with_content'
            },
            {
                name: 'event_types'
            },
        ]
    },
    '/api/v1/app/{app_id}/attempt/endpoint/{endpoint_id}-GET': {
        parameters: [
            {
                name: 'app_id'
            },
            {
                name: 'endpoint_id'
            },
            {
                name: 'limit'
            },
            {
                name: 'iterator'
            },
            {
                name: 'status'
            },
            {
                name: 'status_code_class'
            },
            {
                name: 'channel'
            },
            {
                name: 'tag'
            },
            {
                name: 'before'
            },
            {
                name: 'after'
            },
            {
                name: 'with_content'
            },
            {
                name: 'with_msg'
            },
            {
                name: 'event_types'
            },
        ]
    },
    '/api/v1/app/{app_id}/msg/{msg_id}/endpoint/{endpoint_id}/attempt-GET': {
        parameters: [
            {
                name: 'app_id'
            },
            {
                name: 'msg_id'
            },
            {
                name: 'endpoint_id'
            },
            {
                name: 'limit'
            },
            {
                name: 'iterator'
            },
            {
                name: 'channel'
            },
            {
                name: 'tag'
            },
            {
                name: 'status'
            },
            {
                name: 'before'
            },
            {
                name: 'after'
            },
            {
                name: 'event_types'
            },
        ]
    },
    '/api/v1/app/{app_id}/attempt/msg/{msg_id}-GET': {
        parameters: [
            {
                name: 'app_id'
            },
            {
                name: 'msg_id'
            },
            {
                name: 'limit'
            },
            {
                name: 'iterator'
            },
            {
                name: 'status'
            },
            {
                name: 'status_code_class'
            },
            {
                name: 'channel'
            },
            {
                name: 'tag'
            },
            {
                name: 'endpoint_id'
            },
            {
                name: 'before'
            },
            {
                name: 'after'
            },
            {
                name: 'with_content'
            },
            {
                name: 'event_types'
            },
        ]
    },
    '/api/v1/app/{app_id}/msg/{msg_id}/attempt-GET': {
        parameters: [
            {
                name: 'app_id'
            },
            {
                name: 'msg_id'
            },
            {
                name: 'limit'
            },
            {
                name: 'iterator'
            },
            {
                name: 'endpoint_id'
            },
            {
                name: 'channel'
            },
            {
                name: 'tag'
            },
            {
                name: 'status'
            },
            {
                name: 'before'
            },
            {
                name: 'after'
            },
            {
                name: 'status_code_class'
            },
            {
                name: 'event_types'
            },
        ]
    },
    '/api/v1/app/{app_id}/msg/{msg_id}/endpoint/{endpoint_id}/resend-POST': {
        parameters: [
            {
                name: 'app_id'
            },
            {
                name: 'msg_id'
            },
            {
                name: 'endpoint_id'
            },
            {
                name: 'idempotency-key'
            },
        ]
    },
    '/api/v1/stats/usage/event-types-PUT': {
        parameters: [
        ]
    },
    '/api/v1/stats/usage/app-POST': {
        parameters: [
            {
                name: 'since'
            },
            {
                name: 'until'
            },
            {
                name: 'appIds'
            },
            {
                name: 'idempotency-key'
            },
        ]
    },
}