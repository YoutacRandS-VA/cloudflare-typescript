// File generated from our OpenAPI spec by Stainless.

import * as Core from 'cloudflare/core';
import { APIResource } from 'cloudflare/resource';
import * as DefaultPolicyAPI from 'cloudflare/resources/zero-trust/devices/policies/default-policy';

export class DefaultPolicy extends APIResource {
  /**
   * Fetches the default device settings profile for an account.
   */
  get(
    params: DefaultPolicyGetParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<DefaultPolicyGetResponse | null> {
    const { account_id } = params;
    return (
      this._client.get(`/accounts/${account_id}/devices/policy`, options) as Core.APIPromise<{
        result: DefaultPolicyGetResponse | null;
      }>
    )._thenUnwrap((obj) => obj.result);
  }
}

export type DefaultPolicyGetResponse = Array<unknown>;

export interface DefaultPolicyGetParams {
  account_id: unknown;
}

export namespace DefaultPolicy {
  export import DefaultPolicyGetResponse = DefaultPolicyAPI.DefaultPolicyGetResponse;
  export import DefaultPolicyGetParams = DefaultPolicyAPI.DefaultPolicyGetParams;
}