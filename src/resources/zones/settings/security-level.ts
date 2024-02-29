// File generated from our OpenAPI spec by Stainless.

import * as Core from 'cloudflare/core';
import { APIResource } from 'cloudflare/resource';
import * as SecurityLevelAPI from 'cloudflare/resources/zones/settings/security-level';

export class SecurityLevel extends APIResource {
  /**
   * Choose the appropriate security profile for your website, which will
   * automatically adjust each of the security settings. If you choose to customize
   * an individual security setting, the profile will become Custom.
   * (https://support.cloudflare.com/hc/en-us/articles/200170056).
   */
  edit(
    params: SecurityLevelEditParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<SecurityLevelEditResponse> {
    const { zone_id, ...body } = params;
    return (
      this._client.patch(`/zones/${zone_id}/settings/security_level`, {
        body,
        ...options,
      }) as Core.APIPromise<{ result: SecurityLevelEditResponse }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Choose the appropriate security profile for your website, which will
   * automatically adjust each of the security settings. If you choose to customize
   * an individual security setting, the profile will become Custom.
   * (https://support.cloudflare.com/hc/en-us/articles/200170056).
   */
  get(
    params: SecurityLevelGetParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<SecurityLevelGetResponse> {
    const { zone_id } = params;
    return (
      this._client.get(`/zones/${zone_id}/settings/security_level`, options) as Core.APIPromise<{
        result: SecurityLevelGetResponse;
      }>
    )._thenUnwrap((obj) => obj.result);
  }
}

/**
 * Choose the appropriate security profile for your website, which will
 * automatically adjust each of the security settings. If you choose to customize
 * an individual security setting, the profile will become Custom.
 * (https://support.cloudflare.com/hc/en-us/articles/200170056).
 */
export interface SecurityLevelEditResponse {
  /**
   * ID of the zone setting.
   */
  id: 'security_level';

  /**
   * Current value of the zone setting.
   */
  value: 'off' | 'essentially_off' | 'low' | 'medium' | 'high' | 'under_attack';

  /**
   * Whether or not this setting can be modified for this zone (based on your
   * Cloudflare plan level).
   */
  editable?: true | false;

  /**
   * last time this setting was modified.
   */
  modified_on?: string | null;
}

/**
 * Choose the appropriate security profile for your website, which will
 * automatically adjust each of the security settings. If you choose to customize
 * an individual security setting, the profile will become Custom.
 * (https://support.cloudflare.com/hc/en-us/articles/200170056).
 */
export interface SecurityLevelGetResponse {
  /**
   * ID of the zone setting.
   */
  id: 'security_level';

  /**
   * Current value of the zone setting.
   */
  value: 'off' | 'essentially_off' | 'low' | 'medium' | 'high' | 'under_attack';

  /**
   * Whether or not this setting can be modified for this zone (based on your
   * Cloudflare plan level).
   */
  editable?: true | false;

  /**
   * last time this setting was modified.
   */
  modified_on?: string | null;
}

export interface SecurityLevelEditParams {
  /**
   * Path param: Identifier
   */
  zone_id: string;

  /**
   * Body param: Value of the zone setting.
   */
  value: 'off' | 'essentially_off' | 'low' | 'medium' | 'high' | 'under_attack';
}

export interface SecurityLevelGetParams {
  /**
   * Identifier
   */
  zone_id: string;
}

export namespace SecurityLevel {
  export import SecurityLevelEditResponse = SecurityLevelAPI.SecurityLevelEditResponse;
  export import SecurityLevelGetResponse = SecurityLevelAPI.SecurityLevelGetResponse;
  export import SecurityLevelEditParams = SecurityLevelAPI.SecurityLevelEditParams;
  export import SecurityLevelGetParams = SecurityLevelAPI.SecurityLevelGetParams;
}