/* tslint:disable */
/* eslint-disable */
/*
Svix API

Welcome to the Svix API documentation!

Useful links: [Homepage](https://www.svix.com) | [Support email](mailto:support+docs@svix.com) | [Blog](https://www.svix.com/blog/) | [Slack Community](https://www.svix.com/slack/)

# Introduction

This is the reference documentation and schemas for the [Svix webhook service](https://www.svix.com) API. For tutorials and other documentation please refer to [the documentation](https://docs.svix.com).

## Main concepts

In Svix you have four important entities you will be interacting with:

- `messages`: these are the webhooks being sent. They can have contents and a few other properties.
- `application`: this is where `messages` are sent to. Usually you want to create one application for each user on your platform.
- `endpoint`: endpoints are the URLs messages will be sent to. Each application can have multiple `endpoints` and each message sent to that application will be sent to all of them (unless they are not subscribed to the sent event type).
- `event-type`: event types are identifiers denoting the type of the message being sent. Event types are primarily used to decide which events are sent to which endpoint.


## Authentication

Get your authentication token (`AUTH_TOKEN`) from the [Svix dashboard](https://dashboard.svix.com) and use it as part of the `Authorization` header as such: `Authorization: Bearer ${AUTH_TOKEN}`. For more information on authentication, please refer to the [authentication token docs](https://docs.svix.com/api-keys).




## Code samples

The code samples assume you already have the respective libraries installed and you know how to use them. For the latest information on how to do that, please refer to [the documentation](https://docs.svix.com/).


## Idempotency

Svix supports [idempotency](https://en.wikipedia.org/wiki/Idempotence) for safely retrying requests without accidentally performing the same operation twice. This is useful when an API call is disrupted in transit and you do not receive a response.

To perform an idempotent request, pass the idempotency key in the `Idempotency-Key` header to the request. The idempotency key should be a unique value generated by the client. You can create the key in however way you like, though we suggest using UUID v4, or any other string with enough entropy to avoid collisions.

Svix's idempotency works by saving the resulting status code and body of the first request made for any given idempotency key for any successful request. Subsequent requests with the same key return the same result for a period of up to 12 hours.

Please note that idempotency is only supported for `POST` requests.


## Cross-Origin Resource Sharing

This API features Cross-Origin Resource Sharing (CORS) implemented in compliance with [W3C spec](https://www.w3.org/TR/cors/). And that allows cross-domain communication from the browser. All responses have a wildcard same-origin which makes them completely public and accessible to everyone, including any code on any site.


The version of the OpenAPI document: 1.21.0


NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/

import globalAxios, { AxiosPromise, AxiosInstance, AxiosRequestConfig } from 'axios';
import { Configuration } from '../configuration';
// Some imports not used depending on template conditions
// @ts-ignore
import { DUMMY_BASE_URL, assertParamExists, setApiKeyToObject, setBasicAuthToObject, setBearerAuthToObject, setSearchParams, serializeDataIfNeeded, toPathString, createRequestFunction, isBrowser } from '../common';
// @ts-ignore
import { BASE_PATH, COLLECTION_FORMATS, RequestArgs, BaseAPI, RequiredError } from '../base';
// @ts-ignore
import { AggregateEventTypesOut } from '../models';
// @ts-ignore
import { AppUsageStatsIn } from '../models';
// @ts-ignore
import { AppUsageStatsOut } from '../models';
// @ts-ignore
import { HTTPValidationError } from '../models';
// @ts-ignore
import { HttpErrorOut } from '../models';
import { paginate } from "../pagination/paginate";
import type * as buffer from "buffer"
import { requestBeforeHook } from '../requestBeforeHook';
/**
 * StatisticsApi - axios parameter creator
 * @export
 */
export const StatisticsApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * Creates a background task to calculate the listed event types for all apps in the organization.  Note that this endpoint is asynchronous. You will need to poll the `Get Background Task` endpoint to retrieve the results of the operation.
         * @summary Aggregate Event Types
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        calculateEventTypesForApps: async (options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/api/v1/stats/usage/event-types`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions: AxiosRequestConfig = { method: 'PUT', ...baseOptions, ...options};
            const localVarHeaderParameter = configuration && !isBrowser() ? { "User-Agent": configuration.userAgent } : {} as any;
            const localVarQueryParameter = {} as any;

            // authentication HTTPBearer required
            // http bearer authentication required
            await setBearerAuthToObject(localVarHeaderParameter, configuration)

    
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            requestBeforeHook({
                queryParameters: localVarQueryParameter,
                requestConfig: localVarRequestOptions,
                path: localVarPath,
                configuration,
                pathTemplate: '/api/v1/stats/usage/event-types',
                httpMethod: 'PUT'
            });

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Creates a background task to calculate the message destinations for all applications in the environment.  Note that this endpoint is asynchronous. You will need to poll the `Get Background Task` endpoint to retrieve the results of the operation.
         * @summary Aggregate App Stats
         * @param {AppUsageStatsIn} appUsageStatsIn 
         * @param {string} [idempotencyKey] The request\&#39;s idempotency key
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        calculateMessageDestinationsForApps: async (appUsageStatsIn: AppUsageStatsIn, idempotencyKey?: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'appUsageStatsIn' is not null or undefined
            assertParamExists('calculateMessageDestinationsForApps', 'appUsageStatsIn', appUsageStatsIn)
            const localVarPath = `/api/v1/stats/usage/app`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions: AxiosRequestConfig = { method: 'POST', ...baseOptions, ...options};
            const localVarHeaderParameter = configuration && !isBrowser() ? { "User-Agent": configuration.userAgent } : {} as any;
            const localVarQueryParameter = {} as any;

            // authentication HTTPBearer required
            // http bearer authentication required
            await setBearerAuthToObject(localVarHeaderParameter, configuration)
            if (idempotencyKey != null) {
                localVarHeaderParameter['idempotency-key'] = String(idempotencyKey);
            }


    
            localVarHeaderParameter['Content-Type'] = 'application/json';


            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            requestBeforeHook({
                requestBody: appUsageStatsIn,
                queryParameters: localVarQueryParameter,
                requestConfig: localVarRequestOptions,
                path: localVarPath,
                configuration,
                pathTemplate: '/api/v1/stats/usage/app',
                httpMethod: 'POST'
            });
            localVarRequestOptions.data = serializeDataIfNeeded(appUsageStatsIn, localVarRequestOptions, configuration)

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * StatisticsApi - functional programming interface
 * @export
 */
export const StatisticsApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = StatisticsApiAxiosParamCreator(configuration)
    return {
        /**
         * Creates a background task to calculate the listed event types for all apps in the organization.  Note that this endpoint is asynchronous. You will need to poll the `Get Background Task` endpoint to retrieve the results of the operation.
         * @summary Aggregate Event Types
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async calculateEventTypesForApps(options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<AggregateEventTypesOut>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.calculateEventTypesForApps(options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * Creates a background task to calculate the message destinations for all applications in the environment.  Note that this endpoint is asynchronous. You will need to poll the `Get Background Task` endpoint to retrieve the results of the operation.
         * @summary Aggregate App Stats
         * @param {StatisticsApiCalculateMessageDestinationsForAppsRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async calculateMessageDestinationsForApps(requestParameters: StatisticsApiCalculateMessageDestinationsForAppsRequest, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<AppUsageStatsOut>> {
            const appUsageStatsIn: AppUsageStatsIn = {
                since: requestParameters.since,
                until: requestParameters.until,
                appIds: requestParameters.appIds
            };
            const localVarAxiosArgs = await localVarAxiosParamCreator.calculateMessageDestinationsForApps(appUsageStatsIn, requestParameters.idempotencyKey, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
    }
};

/**
 * StatisticsApi - factory interface
 * @export
 */
export const StatisticsApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = StatisticsApiFp(configuration)
    return {
        /**
         * Creates a background task to calculate the listed event types for all apps in the organization.  Note that this endpoint is asynchronous. You will need to poll the `Get Background Task` endpoint to retrieve the results of the operation.
         * @summary Aggregate Event Types
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        calculateEventTypesForApps(options?: AxiosRequestConfig): AxiosPromise<AggregateEventTypesOut> {
            return localVarFp.calculateEventTypesForApps(options).then((request) => request(axios, basePath));
        },
        /**
         * Creates a background task to calculate the message destinations for all applications in the environment.  Note that this endpoint is asynchronous. You will need to poll the `Get Background Task` endpoint to retrieve the results of the operation.
         * @summary Aggregate App Stats
         * @param {StatisticsApiCalculateMessageDestinationsForAppsRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        calculateMessageDestinationsForApps(requestParameters: StatisticsApiCalculateMessageDestinationsForAppsRequest, options?: AxiosRequestConfig): AxiosPromise<AppUsageStatsOut> {
            return localVarFp.calculateMessageDestinationsForApps(requestParameters, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * Request parameters for calculateMessageDestinationsForApps operation in StatisticsApi.
 * @export
 * @interface StatisticsApiCalculateMessageDestinationsForAppsRequest
 */
export type StatisticsApiCalculateMessageDestinationsForAppsRequest = {
    
    /**
    * The request\'s idempotency key
    * @type {string}
    * @memberof StatisticsApiCalculateMessageDestinationsForApps
    */
    readonly idempotencyKey?: string
    
} & AppUsageStatsIn

/**
 * StatisticsApiGenerated - object-oriented interface
 * @export
 * @class StatisticsApiGenerated
 * @extends {BaseAPI}
 */
export class StatisticsApiGenerated extends BaseAPI {
    /**
     * Creates a background task to calculate the listed event types for all apps in the organization.  Note that this endpoint is asynchronous. You will need to poll the `Get Background Task` endpoint to retrieve the results of the operation.
     * @summary Aggregate Event Types
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof StatisticsApiGenerated
     */
    public calculateEventTypesForApps(options?: AxiosRequestConfig) {
        return StatisticsApiFp(this.configuration).calculateEventTypesForApps(options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Creates a background task to calculate the message destinations for all applications in the environment.  Note that this endpoint is asynchronous. You will need to poll the `Get Background Task` endpoint to retrieve the results of the operation.
     * @summary Aggregate App Stats
     * @param {StatisticsApiCalculateMessageDestinationsForAppsRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof StatisticsApiGenerated
     */
    public calculateMessageDestinationsForApps(requestParameters: StatisticsApiCalculateMessageDestinationsForAppsRequest, options?: AxiosRequestConfig) {
        return StatisticsApiFp(this.configuration).calculateMessageDestinationsForApps(requestParameters, options).then((request) => request(this.axios, this.basePath));
    }
}
