// File generated from our OpenAPI spec by Stainless.

import * as Core from 'cloudflare/core';
import { APIResource } from 'cloudflare/resource';
import * as VariantsAPI from 'cloudflare/resources/cache/variants';

export class Variants extends APIResource {
  /**
   * Variant support enables caching variants of images with certain file extensions
   * in addition to the original. This only applies when the origin server sends the
   * 'Vary: Accept' response header. If the origin server sends 'Vary: Accept' but
   * does not serve the variant requested, the response will not be cached. This will
   * be indicated with BYPASS cache status in the response headers.
   */
  update(
    zoneId: string,
    body: VariantUpdateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<VariantUpdateResponse> {
    return (
      this._client.patch(`/zones/${zoneId}/cache/variants`, { body, ...options }) as Core.APIPromise<{
        result: VariantUpdateResponse;
      }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Variant support enables caching variants of images with certain file extensions
   * in addition to the original. This only applies when the origin server sends the
   * 'Vary: Accept' response header. If the origin server sends 'Vary: Accept' but
   * does not serve the variant requested, the response will not be cached. This will
   * be indicated with BYPASS cache status in the response headers.
   */
  list(zoneId: string, options?: Core.RequestOptions): Core.APIPromise<VariantListResponse> {
    return (
      this._client.get(`/zones/${zoneId}/cache/variants`, options) as Core.APIPromise<{
        result: VariantListResponse;
      }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Variant support enables caching variants of images with certain file extensions
   * in addition to the original. This only applies when the origin server sends the
   * 'Vary: Accept' response header. If the origin server sends 'Vary: Accept' but
   * does not serve the variant requested, the response will not be cached. This will
   * be indicated with BYPASS cache status in the response headers.
   */
  delete(zoneId: string, options?: Core.RequestOptions): Core.APIPromise<VariantDeleteResponse> {
    return (
      this._client.delete(`/zones/${zoneId}/cache/variants`, options) as Core.APIPromise<{
        result: VariantDeleteResponse;
      }>
    )._thenUnwrap((obj) => obj.result);
  }
}

/**
 * Variant support enables caching variants of images with certain file extensions
 * in addition to the original. This only applies when the origin server sends the
 * 'Vary: Accept' response header. If the origin server sends 'Vary: Accept' but
 * does not serve the variant requested, the response will not be cached. This will
 * be indicated with BYPASS cache status in the response headers.
 */
export interface VariantUpdateResponse {
  /**
   * ID of the zone setting.
   */
  id: 'variants';

  /**
   * last time this setting was modified.
   */
  modified_on: string | null;

  /**
   * Value of the zone setting.
   */
  value: VariantUpdateResponse.Value;
}

export namespace VariantUpdateResponse {
  /**
   * Value of the zone setting.
   */
  export interface Value {
    /**
     * List of strings with the MIME types of all the variants that should be served
     * for avif.
     */
    avif?: Array<unknown>;

    /**
     * List of strings with the MIME types of all the variants that should be served
     * for bmp.
     */
    bmp?: Array<unknown>;

    /**
     * List of strings with the MIME types of all the variants that should be served
     * for gif.
     */
    gif?: Array<unknown>;

    /**
     * List of strings with the MIME types of all the variants that should be served
     * for jp2.
     */
    jp2?: Array<unknown>;

    /**
     * List of strings with the MIME types of all the variants that should be served
     * for jpeg.
     */
    jpeg?: Array<unknown>;

    /**
     * List of strings with the MIME types of all the variants that should be served
     * for jpg.
     */
    jpg?: Array<unknown>;

    /**
     * List of strings with the MIME types of all the variants that should be served
     * for jpg2.
     */
    jpg2?: Array<unknown>;

    /**
     * List of strings with the MIME types of all the variants that should be served
     * for png.
     */
    png?: Array<unknown>;

    /**
     * List of strings with the MIME types of all the variants that should be served
     * for tif.
     */
    tif?: Array<unknown>;

    /**
     * List of strings with the MIME types of all the variants that should be served
     * for tiff.
     */
    tiff?: Array<unknown>;

    /**
     * List of strings with the MIME types of all the variants that should be served
     * for webp.
     */
    webp?: Array<unknown>;
  }
}

/**
 * Variant support enables caching variants of images with certain file extensions
 * in addition to the original. This only applies when the origin server sends the
 * 'Vary: Accept' response header. If the origin server sends 'Vary: Accept' but
 * does not serve the variant requested, the response will not be cached. This will
 * be indicated with BYPASS cache status in the response headers.
 */
export interface VariantListResponse {
  /**
   * ID of the zone setting.
   */
  id: 'variants';

  /**
   * last time this setting was modified.
   */
  modified_on: string | null;

  /**
   * Value of the zone setting.
   */
  value: VariantListResponse.Value;
}

export namespace VariantListResponse {
  /**
   * Value of the zone setting.
   */
  export interface Value {
    /**
     * List of strings with the MIME types of all the variants that should be served
     * for avif.
     */
    avif?: Array<unknown>;

    /**
     * List of strings with the MIME types of all the variants that should be served
     * for bmp.
     */
    bmp?: Array<unknown>;

    /**
     * List of strings with the MIME types of all the variants that should be served
     * for gif.
     */
    gif?: Array<unknown>;

    /**
     * List of strings with the MIME types of all the variants that should be served
     * for jp2.
     */
    jp2?: Array<unknown>;

    /**
     * List of strings with the MIME types of all the variants that should be served
     * for jpeg.
     */
    jpeg?: Array<unknown>;

    /**
     * List of strings with the MIME types of all the variants that should be served
     * for jpg.
     */
    jpg?: Array<unknown>;

    /**
     * List of strings with the MIME types of all the variants that should be served
     * for jpg2.
     */
    jpg2?: Array<unknown>;

    /**
     * List of strings with the MIME types of all the variants that should be served
     * for png.
     */
    png?: Array<unknown>;

    /**
     * List of strings with the MIME types of all the variants that should be served
     * for tif.
     */
    tif?: Array<unknown>;

    /**
     * List of strings with the MIME types of all the variants that should be served
     * for tiff.
     */
    tiff?: Array<unknown>;

    /**
     * List of strings with the MIME types of all the variants that should be served
     * for webp.
     */
    webp?: Array<unknown>;
  }
}

/**
 * Variant support enables caching variants of images with certain file extensions
 * in addition to the original. This only applies when the origin server sends the
 * 'Vary: Accept' response header. If the origin server sends 'Vary: Accept' but
 * does not serve the variant requested, the response will not be cached. This will
 * be indicated with BYPASS cache status in the response headers.
 */
export interface VariantDeleteResponse {
  /**
   * ID of the zone setting.
   */
  id: 'variants';

  /**
   * last time this setting was modified.
   */
  modified_on: string | null;
}

export interface VariantUpdateParams {
  /**
   * Value of the zone setting.
   */
  value: VariantUpdateParams.Value;
}

export namespace VariantUpdateParams {
  /**
   * Value of the zone setting.
   */
  export interface Value {
    /**
     * List of strings with the MIME types of all the variants that should be served
     * for avif.
     */
    avif?: Array<unknown>;

    /**
     * List of strings with the MIME types of all the variants that should be served
     * for bmp.
     */
    bmp?: Array<unknown>;

    /**
     * List of strings with the MIME types of all the variants that should be served
     * for gif.
     */
    gif?: Array<unknown>;

    /**
     * List of strings with the MIME types of all the variants that should be served
     * for jp2.
     */
    jp2?: Array<unknown>;

    /**
     * List of strings with the MIME types of all the variants that should be served
     * for jpeg.
     */
    jpeg?: Array<unknown>;

    /**
     * List of strings with the MIME types of all the variants that should be served
     * for jpg.
     */
    jpg?: Array<unknown>;

    /**
     * List of strings with the MIME types of all the variants that should be served
     * for jpg2.
     */
    jpg2?: Array<unknown>;

    /**
     * List of strings with the MIME types of all the variants that should be served
     * for png.
     */
    png?: Array<unknown>;

    /**
     * List of strings with the MIME types of all the variants that should be served
     * for tif.
     */
    tif?: Array<unknown>;

    /**
     * List of strings with the MIME types of all the variants that should be served
     * for tiff.
     */
    tiff?: Array<unknown>;

    /**
     * List of strings with the MIME types of all the variants that should be served
     * for webp.
     */
    webp?: Array<unknown>;
  }
}

export namespace Variants {
  export import VariantUpdateResponse = VariantsAPI.VariantUpdateResponse;
  export import VariantListResponse = VariantsAPI.VariantListResponse;
  export import VariantDeleteResponse = VariantsAPI.VariantDeleteResponse;
  export import VariantUpdateParams = VariantsAPI.VariantUpdateParams;
}