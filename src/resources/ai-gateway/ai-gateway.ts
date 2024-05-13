// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import * as Core from 'cloudflare/core';
import { APIResource } from 'cloudflare/resource';
import * as LogsAPI from 'cloudflare/resources/ai-gateway/logs';
import { V4PagePaginationArray, type V4PagePaginationArrayParams } from 'cloudflare/pagination';

export class AIGateway extends APIResource {
  logs: LogsAPI.Logs = new LogsAPI.Logs(this._client);

  /**
   * Create a new Gateway
   */
  create(
    params: AIGatewayCreateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<AIGatewayCreateResponse> {
    const { account_id, ...body } = params;
    return (
      this._client.post(`/accounts/${account_id}/ai-gateway/gateways`, {
        body,
        ...options,
      }) as Core.APIPromise<{ result: AIGatewayCreateResponse }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Update a Gateway
   */
  update(
    id: string,
    params: AIGatewayUpdateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<AIGatewayUpdateResponse> {
    const { account_id, ...body } = params;
    return (
      this._client.put(`/accounts/${account_id}/ai-gateway/gateways/${id}`, {
        body,
        ...options,
      }) as Core.APIPromise<{ result: AIGatewayUpdateResponse }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * List Gateway's
   */
  list(
    params: AIGatewayListParams,
    options?: Core.RequestOptions,
  ): Core.PagePromise<AIGatewayListResponsesV4PagePaginationArray, AIGatewayListResponse> {
    const { account_id, ...query } = params;
    return this._client.getAPIList(
      `/accounts/${account_id}/ai-gateway/gateways`,
      AIGatewayListResponsesV4PagePaginationArray,
      { query, ...options },
    );
  }

  /**
   * Delete a Gateway
   */
  delete(
    id: string,
    params: AIGatewayDeleteParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<AIGatewayDeleteResponse> {
    const { account_id } = params;
    return (
      this._client.delete(`/accounts/${account_id}/ai-gateway/gateways/${id}`, options) as Core.APIPromise<{
        result: AIGatewayDeleteResponse;
      }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Fetch a Gateway
   */
  get(
    id: string,
    params: AIGatewayGetParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<AIGatewayGetResponse> {
    const { account_id } = params;
    return (
      this._client.get(`/accounts/${account_id}/ai-gateway/gateways/${id}`, options) as Core.APIPromise<{
        result: AIGatewayGetResponse;
      }>
    )._thenUnwrap((obj) => obj.result);
  }
}

export class AIGatewayListResponsesV4PagePaginationArray extends V4PagePaginationArray<AIGatewayListResponse> {}

export interface AIGatewayCreateResponse {
  task: AIGatewayCreateResponse.Task;
}

export namespace AIGatewayCreateResponse {
  export interface Task {
    id: string;

    cache_invalidate_on_update: boolean;

    cache_ttl: number;

    collect_logs: boolean;

    created_at: string;

    modified_at: string;

    name: string;

    slug: string;

    rate_limiting_interval?: number;

    rate_limiting_limit?: number;

    rate_limiting_technique?: string;
  }
}

export interface AIGatewayUpdateResponse {
  id: string;

  cache_invalidate_on_update: boolean;

  cache_ttl: number;

  collect_logs: boolean;

  created_at: string;

  modified_at: string;

  name: string;

  slug: string;

  rate_limiting_interval?: number;

  rate_limiting_limit?: number;

  rate_limiting_technique?: string;
}

export interface AIGatewayListResponse {
  id: string;

  cache_invalidate_on_update: boolean;

  cache_ttl: number;

  collect_logs: boolean;

  created_at: string;

  modified_at: string;

  name: string;

  slug: string;

  rate_limiting_interval?: number;

  rate_limiting_limit?: number;

  rate_limiting_technique?: string;
}

export interface AIGatewayDeleteResponse {
  id: string;

  cache_invalidate_on_update: boolean;

  cache_ttl: number;

  collect_logs: boolean;

  created_at: string;

  modified_at: string;

  name: string;

  slug: string;

  rate_limiting_interval?: number;

  rate_limiting_limit?: number;

  rate_limiting_technique?: string;
}

export interface AIGatewayGetResponse {
  id: string;

  cache_invalidate_on_update: boolean;

  cache_ttl: number;

  collect_logs: boolean;

  created_at: string;

  modified_at: string;

  name: string;

  slug: string;

  rate_limiting_interval?: number;

  rate_limiting_limit?: number;

  rate_limiting_technique?: string;
}

export interface AIGatewayCreateParams {
  /**
   * Path param:
   */
  account_id: string;

  /**
   * Body param:
   */
  cache_invalidate_on_update: boolean;

  /**
   * Body param:
   */
  cache_ttl: number;

  /**
   * Body param:
   */
  collect_logs: boolean;

  /**
   * Body param:
   */
  name: string;

  /**
   * Body param:
   */
  slug: string;

  /**
   * Body param:
   */
  rate_limiting_interval?: number;

  /**
   * Body param:
   */
  rate_limiting_limit?: number;

  /**
   * Body param:
   */
  rate_limiting_technique?: string;
}

export interface AIGatewayUpdateParams {
  /**
   * Path param:
   */
  account_id: string;

  /**
   * Body param:
   */
  cache_invalidate_on_update: boolean;

  /**
   * Body param:
   */
  cache_ttl: number;

  /**
   * Body param:
   */
  collect_logs: boolean;

  /**
   * Body param:
   */
  name: string;

  /**
   * Body param:
   */
  slug: string;

  /**
   * Body param:
   */
  rate_limiting_interval?: number;

  /**
   * Body param:
   */
  rate_limiting_limit?: number;

  /**
   * Body param:
   */
  rate_limiting_technique?: string;
}

export interface AIGatewayListParams extends V4PagePaginationArrayParams {
  /**
   * Path param:
   */
  account_id: string;

  /**
   * Query param:
   */
  id?: string;

  /**
   * Query param: Order By Column Name
   */
  order_by?: string;
}

export interface AIGatewayDeleteParams {
  account_id: string;
}

export interface AIGatewayGetParams {
  account_id: string;
}

export namespace AIGateway {
  export import Logs = LogsAPI.Logs;
  export import LogGetResponse = LogsAPI.LogGetResponse;
  export import LogGetParams = LogsAPI.LogGetParams;
}