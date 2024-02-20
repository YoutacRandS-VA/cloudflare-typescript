// File generated from our OpenAPI spec by Stainless.

import * as Core from 'cloudflare/core';
import { APIResource } from 'cloudflare/resource';
import * as AnalyzeAPI from 'cloudflare/resources/ssl/analyze';

export class Analyze extends APIResource {
  /**
   * Returns the set of hostnames, the signature algorithm, and the expiration date
   * of the certificate.
   */
  create(
    zoneId: string,
    body: AnalyzeCreateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<AnalyzeCreateResponse> {
    return (
      this._client.post(`/zones/${zoneId}/ssl/analyze`, { body, ...options }) as Core.APIPromise<{
        result: AnalyzeCreateResponse;
      }>
    )._thenUnwrap((obj) => obj.result);
  }
}

export type AnalyzeCreateResponse = unknown | string;

export interface AnalyzeCreateParams {
  /**
   * A ubiquitous bundle has the highest probability of being verified everywhere,
   * even by clients using outdated or unusual trust stores. An optimal bundle uses
   * the shortest chain and newest intermediates. And the force bundle verifies the
   * chain, but does not otherwise modify it.
   */
  bundle_method?: 'ubiquitous' | 'optimal' | 'force';

  /**
   * The zone's SSL certificate or certificate and the intermediate(s).
   */
  certificate?: string;
}

export namespace Analyze {
  export import AnalyzeCreateResponse = AnalyzeAPI.AnalyzeCreateResponse;
  export import AnalyzeCreateParams = AnalyzeAPI.AnalyzeCreateParams;
}