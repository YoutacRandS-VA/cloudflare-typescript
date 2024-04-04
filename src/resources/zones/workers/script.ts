// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import * as Core from 'cloudflare/core';
import { APIResource } from 'cloudflare/resource';
import { type Response } from 'cloudflare/_shims/index';
import * as ScriptAPI from 'cloudflare/resources/zones/workers/script';
import * as Shared from 'cloudflare/resources/shared';

export class Script extends APIResource {
  /**
   * Upload a worker, or a new version of a worker.
   */
  update(
    params: ScriptUpdateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<Shared.UnnamedSchemaRef9444735ca60712dbcf8afd832eb5716a> {
    const { zone_id, body } = params;
    return (
      this._client.put(`/zones/${zone_id}/workers/script`, { body: body, ...options }) as Core.APIPromise<{
        result: Shared.UnnamedSchemaRef9444735ca60712dbcf8afd832eb5716a;
      }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Delete your Worker. This call has no response body on a successful delete.
   */
  delete(params: ScriptDeleteParams, options?: Core.RequestOptions): Core.APIPromise<void> {
    const { zone_id, body } = params;
    return this._client.delete(`/zones/${zone_id}/workers/script`, {
      body: body,
      ...options,
      headers: { Accept: '*/*', ...options?.headers },
    });
  }

  /**
   * Fetch raw script content for your worker. Note this is the original script
   * content, not JSON encoded.
   */
  get(params: ScriptGetParams, options?: Core.RequestOptions): Core.APIPromise<Response> {
    const { zone_id } = params;
    return this._client.get(`/zones/${zone_id}/workers/script`, { ...options, __binaryResponse: true });
  }
}

export interface ScriptUpdateParams {
  /**
   * Path param: Identifier
   */
  zone_id: string;

  /**
   * Body param:
   */
  body: unknown;
}

export interface ScriptDeleteParams {
  /**
   * Path param: Identifier
   */
  zone_id: string;

  /**
   * Body param:
   */
  body: unknown;
}

export interface ScriptGetParams {
  /**
   * Identifier
   */
  zone_id: string;
}

export namespace Script {
  export import ScriptUpdateParams = ScriptAPI.ScriptUpdateParams;
  export import ScriptDeleteParams = ScriptAPI.ScriptDeleteParams;
  export import ScriptGetParams = ScriptAPI.ScriptGetParams;
}