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
import { AppPortalAccessIn } from '../models';
// @ts-ignore
import { AppPortalAccessOut } from '../models';
// @ts-ignore
import { ApplicationTokenExpireIn } from '../models';
// @ts-ignore
import { DashboardAccessOut } from '../models';
// @ts-ignore
import { HTTPValidationError } from '../models';
// @ts-ignore
import { HttpErrorOut } from '../models';
import { paginate } from "../pagination/paginate";
import type * as buffer from "buffer"
import { requestBeforeHook } from '../requestBeforeHook';
/**
 * AuthenticationApi - axios parameter creator
 * @export
 */
export const AuthenticationApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * Expire all of the tokens associated with a specific Application
         * @summary Expire All
         * @param {string} appId The app\&#39;s ID or UID
         * @param {ApplicationTokenExpireIn} applicationTokenExpireIn 
         * @param {string} [idempotencyKey] The request\&#39;s idempotency key
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        expireAllTokens: async (appId: string, applicationTokenExpireIn: ApplicationTokenExpireIn, idempotencyKey?: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'appId' is not null or undefined
            assertParamExists('expireAllTokens', 'appId', appId)
            // verify required parameter 'applicationTokenExpireIn' is not null or undefined
            assertParamExists('expireAllTokens', 'applicationTokenExpireIn', applicationTokenExpireIn)
            const localVarPath = `/api/v1/auth/app/{app_id}/expire-all`
                .replace(`{${"app_id"}}`, encodeURIComponent(String(appId !== undefined ? appId : `-app_id-`)));
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
                requestBody: applicationTokenExpireIn,
                queryParameters: localVarQueryParameter,
                requestConfig: localVarRequestOptions,
                path: localVarPath,
                configuration,
                pathTemplate: '/api/v1/auth/app/{app_id}/expire-all',
                httpMethod: 'POST'
            });
            localVarRequestOptions.data = serializeDataIfNeeded(applicationTokenExpireIn, localVarRequestOptions, configuration)

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Use this function to get magic links (and authentication codes) for connecting your users to the Consumer Application Portal.
         * @summary Get Consumer App Portal Access
         * @param {string} appId The app\&#39;s ID or UID
         * @param {AppPortalAccessIn} appPortalAccessIn 
         * @param {string} [idempotencyKey] The request\&#39;s idempotency key
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        generateMagicLinks: async (appId: string, appPortalAccessIn: AppPortalAccessIn, idempotencyKey?: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'appId' is not null or undefined
            assertParamExists('generateMagicLinks', 'appId', appId)
            // verify required parameter 'appPortalAccessIn' is not null or undefined
            assertParamExists('generateMagicLinks', 'appPortalAccessIn', appPortalAccessIn)
            const localVarPath = `/api/v1/auth/app-portal-access/{app_id}`
                .replace(`{${"app_id"}}`, encodeURIComponent(String(appId !== undefined ? appId : `-app_id-`)));
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
                requestBody: appPortalAccessIn,
                queryParameters: localVarQueryParameter,
                requestConfig: localVarRequestOptions,
                path: localVarPath,
                configuration,
                pathTemplate: '/api/v1/auth/app-portal-access/{app_id}',
                httpMethod: 'POST'
            });
            localVarRequestOptions.data = serializeDataIfNeeded(appPortalAccessIn, localVarRequestOptions, configuration)

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * DEPRECATED: Please use `app-portal-access` instead.  Use this function to get magic links (and authentication codes) for connecting your users to the Consumer Application Portal.
         * @summary Dashboard Access
         * @param {string} appId The app\&#39;s ID or UID
         * @param {string} [idempotencyKey] The request\&#39;s idempotency key
         * @param {*} [options] Override http request option.
         * @deprecated
         * @throws {RequiredError}
         */
        getMagicLinks: async (appId: string, idempotencyKey?: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'appId' is not null or undefined
            assertParamExists('getMagicLinks', 'appId', appId)
            const localVarPath = `/api/v1/auth/dashboard-access/{app_id}`
                .replace(`{${"app_id"}}`, encodeURIComponent(String(appId !== undefined ? appId : `-app_id-`)));
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


    
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            requestBeforeHook({
                queryParameters: localVarQueryParameter,
                requestConfig: localVarRequestOptions,
                path: localVarPath,
                configuration,
                pathTemplate: '/api/v1/auth/dashboard-access/{app_id}',
                httpMethod: 'POST'
            });

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Logout an app token.  Trying to log out other tokens will fail.
         * @summary Logout
         * @param {string} [idempotencyKey] The request\&#39;s idempotency key
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        logoutToken: async (idempotencyKey?: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/api/v1/auth/logout`;
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


    
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            requestBeforeHook({
                queryParameters: localVarQueryParameter,
                requestConfig: localVarRequestOptions,
                path: localVarPath,
                configuration,
                pathTemplate: '/api/v1/auth/logout',
                httpMethod: 'POST'
            });

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * AuthenticationApi - functional programming interface
 * @export
 */
export const AuthenticationApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = AuthenticationApiAxiosParamCreator(configuration)
    return {
        /**
         * Expire all of the tokens associated with a specific Application
         * @summary Expire All
         * @param {AuthenticationApiExpireAllTokensRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async expireAllTokens(requestParameters: AuthenticationApiExpireAllTokensRequest, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>> {
            const applicationTokenExpireIn: ApplicationTokenExpireIn = {
                expiry: requestParameters.expiry
            };
            const localVarAxiosArgs = await localVarAxiosParamCreator.expireAllTokens(requestParameters.appId, applicationTokenExpireIn, requestParameters.idempotencyKey, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * Use this function to get magic links (and authentication codes) for connecting your users to the Consumer Application Portal.
         * @summary Get Consumer App Portal Access
         * @param {AuthenticationApiGenerateMagicLinksRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async generateMagicLinks(requestParameters: AuthenticationApiGenerateMagicLinksRequest, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<AppPortalAccessOut>> {
            const appPortalAccessIn: AppPortalAccessIn = {
                featureFlags: requestParameters.featureFlags,
                expiry: requestParameters.expiry
            };
            const localVarAxiosArgs = await localVarAxiosParamCreator.generateMagicLinks(requestParameters.appId, appPortalAccessIn, requestParameters.idempotencyKey, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * DEPRECATED: Please use `app-portal-access` instead.  Use this function to get magic links (and authentication codes) for connecting your users to the Consumer Application Portal.
         * @summary Dashboard Access
         * @param {AuthenticationApiGetMagicLinksRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @deprecated
         * @throws {RequiredError}
         */
        async getMagicLinks(requestParameters: AuthenticationApiGetMagicLinksRequest, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<DashboardAccessOut>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getMagicLinks(requestParameters.appId, requestParameters.idempotencyKey, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * Logout an app token.  Trying to log out other tokens will fail.
         * @summary Logout
         * @param {AuthenticationApiLogoutTokenRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async logoutToken(requestParameters: AuthenticationApiLogoutTokenRequest = {}, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.logoutToken(requestParameters.idempotencyKey, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
    }
};

/**
 * AuthenticationApi - factory interface
 * @export
 */
export const AuthenticationApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = AuthenticationApiFp(configuration)
    return {
        /**
         * Expire all of the tokens associated with a specific Application
         * @summary Expire All
         * @param {AuthenticationApiExpireAllTokensRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        expireAllTokens(requestParameters: AuthenticationApiExpireAllTokensRequest, options?: AxiosRequestConfig): AxiosPromise<void> {
            return localVarFp.expireAllTokens(requestParameters, options).then((request) => request(axios, basePath));
        },
        /**
         * Use this function to get magic links (and authentication codes) for connecting your users to the Consumer Application Portal.
         * @summary Get Consumer App Portal Access
         * @param {AuthenticationApiGenerateMagicLinksRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        generateMagicLinks(requestParameters: AuthenticationApiGenerateMagicLinksRequest, options?: AxiosRequestConfig): AxiosPromise<AppPortalAccessOut> {
            return localVarFp.generateMagicLinks(requestParameters, options).then((request) => request(axios, basePath));
        },
        /**
         * DEPRECATED: Please use `app-portal-access` instead.  Use this function to get magic links (and authentication codes) for connecting your users to the Consumer Application Portal.
         * @summary Dashboard Access
         * @param {AuthenticationApiGetMagicLinksRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @deprecated
         * @throws {RequiredError}
         */
        getMagicLinks(requestParameters: AuthenticationApiGetMagicLinksRequest, options?: AxiosRequestConfig): AxiosPromise<DashboardAccessOut> {
            return localVarFp.getMagicLinks(requestParameters, options).then((request) => request(axios, basePath));
        },
        /**
         * Logout an app token.  Trying to log out other tokens will fail.
         * @summary Logout
         * @param {AuthenticationApiLogoutTokenRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        logoutToken(requestParameters: AuthenticationApiLogoutTokenRequest = {}, options?: AxiosRequestConfig): AxiosPromise<void> {
            return localVarFp.logoutToken(requestParameters, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * Request parameters for expireAllTokens operation in AuthenticationApi.
 * @export
 * @interface AuthenticationApiExpireAllTokensRequest
 */
export type AuthenticationApiExpireAllTokensRequest = {
    
    /**
    * The app\'s ID or UID
    * @type {string}
    * @memberof AuthenticationApiExpireAllTokens
    */
    readonly appId: string
    
    /**
    * The request\'s idempotency key
    * @type {string}
    * @memberof AuthenticationApiExpireAllTokens
    */
    readonly idempotencyKey?: string
    
} & ApplicationTokenExpireIn

/**
 * Request parameters for generateMagicLinks operation in AuthenticationApi.
 * @export
 * @interface AuthenticationApiGenerateMagicLinksRequest
 */
export type AuthenticationApiGenerateMagicLinksRequest = {
    
    /**
    * The app\'s ID or UID
    * @type {string}
    * @memberof AuthenticationApiGenerateMagicLinks
    */
    readonly appId: string
    
    /**
    * The request\'s idempotency key
    * @type {string}
    * @memberof AuthenticationApiGenerateMagicLinks
    */
    readonly idempotencyKey?: string
    
} & AppPortalAccessIn

/**
 * Request parameters for getMagicLinks operation in AuthenticationApi.
 * @export
 * @interface AuthenticationApiGetMagicLinksRequest
 */
export type AuthenticationApiGetMagicLinksRequest = {
    
    /**
    * The app\'s ID or UID
    * @type {string}
    * @memberof AuthenticationApiGetMagicLinks
    */
    readonly appId: string
    
    /**
    * The request\'s idempotency key
    * @type {string}
    * @memberof AuthenticationApiGetMagicLinks
    */
    readonly idempotencyKey?: string
    
}

/**
 * Request parameters for logoutToken operation in AuthenticationApi.
 * @export
 * @interface AuthenticationApiLogoutTokenRequest
 */
export type AuthenticationApiLogoutTokenRequest = {
    
    /**
    * The request\'s idempotency key
    * @type {string}
    * @memberof AuthenticationApiLogoutToken
    */
    readonly idempotencyKey?: string
    
}

/**
 * AuthenticationApiGenerated - object-oriented interface
 * @export
 * @class AuthenticationApiGenerated
 * @extends {BaseAPI}
 */
export class AuthenticationApiGenerated extends BaseAPI {
    /**
     * Expire all of the tokens associated with a specific Application
     * @summary Expire All
     * @param {AuthenticationApiExpireAllTokensRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof AuthenticationApiGenerated
     */
    public expireAllTokens(requestParameters: AuthenticationApiExpireAllTokensRequest, options?: AxiosRequestConfig) {
        return AuthenticationApiFp(this.configuration).expireAllTokens(requestParameters, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Use this function to get magic links (and authentication codes) for connecting your users to the Consumer Application Portal.
     * @summary Get Consumer App Portal Access
     * @param {AuthenticationApiGenerateMagicLinksRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof AuthenticationApiGenerated
     */
    public generateMagicLinks(requestParameters: AuthenticationApiGenerateMagicLinksRequest, options?: AxiosRequestConfig) {
        return AuthenticationApiFp(this.configuration).generateMagicLinks(requestParameters, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * DEPRECATED: Please use `app-portal-access` instead.  Use this function to get magic links (and authentication codes) for connecting your users to the Consumer Application Portal.
     * @summary Dashboard Access
     * @param {AuthenticationApiGetMagicLinksRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @deprecated
     * @throws {RequiredError}
     * @memberof AuthenticationApiGenerated
     */
    public getMagicLinks(requestParameters: AuthenticationApiGetMagicLinksRequest, options?: AxiosRequestConfig) {
        return AuthenticationApiFp(this.configuration).getMagicLinks(requestParameters, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Logout an app token.  Trying to log out other tokens will fail.
     * @summary Logout
     * @param {AuthenticationApiLogoutTokenRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof AuthenticationApiGenerated
     */
    public logoutToken(requestParameters: AuthenticationApiLogoutTokenRequest = {}, options?: AxiosRequestConfig) {
        return AuthenticationApiFp(this.configuration).logoutToken(requestParameters, options).then((request) => request(this.axios, this.basePath));
    }
}
