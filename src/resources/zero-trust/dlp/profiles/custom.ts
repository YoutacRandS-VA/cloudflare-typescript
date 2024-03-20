// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import * as Core from 'cloudflare/core';
import { APIResource } from 'cloudflare/resource';
import * as CustomAPI from 'cloudflare/resources/zero-trust/dlp/profiles/custom';

export class Custom extends APIResource {
  /**
   * Creates a set of DLP custom profiles.
   */
  create(
    params: CustomCreateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<CustomCreateResponse | null> {
    const { account_id, ...body } = params;
    return (
      this._client.post(`/accounts/${account_id}/dlp/profiles/custom`, {
        body,
        ...options,
      }) as Core.APIPromise<{ result: CustomCreateResponse | null }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Updates a DLP custom profile.
   */
  update(
    profileId: string,
    params: CustomUpdateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<DLPCustomProfile> {
    const { account_id, ...body } = params;
    return this._client.put(`/accounts/${account_id}/dlp/profiles/custom/${profileId}`, { body, ...options });
  }

  /**
   * Deletes a DLP custom profile.
   */
  delete(
    profileId: string,
    params: CustomDeleteParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<CustomDeleteResponse> {
    const { account_id } = params;
    return (
      this._client.delete(
        `/accounts/${account_id}/dlp/profiles/custom/${profileId}`,
        options,
      ) as Core.APIPromise<{ result: CustomDeleteResponse }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Fetches a custom DLP profile.
   */
  get(
    profileId: string,
    params: CustomGetParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<DLPCustomProfile> {
    const { account_id } = params;
    return (
      this._client.get(
        `/accounts/${account_id}/dlp/profiles/custom/${profileId}`,
        options,
      ) as Core.APIPromise<{ result: DLPCustomProfile }>
    )._thenUnwrap((obj) => obj.result);
  }
}

export interface DLPCustomProfile {
  /**
   * The ID for this profile
   */
  id?: string;

  /**
   * Related DLP policies will trigger when the match count exceeds the number set.
   */
  allowed_match_count?: number;

  /**
   * Scan the context of predefined entries to only return matches surrounded by
   * keywords.
   */
  context_awareness?: DLPCustomProfile.ContextAwareness;

  created_at?: string;

  /**
   * The description of the profile.
   */
  description?: string;

  /**
   * The entries for this profile.
   */
  entries?: Array<DLPCustomProfile.Entry>;

  /**
   * The name of the profile.
   */
  name?: string;

  /**
   * If true, scan images via OCR to determine if any text present matches filters.
   */
  ocr_enabled?: boolean;

  /**
   * The type of the profile.
   */
  type?: 'custom';

  updated_at?: string;
}

export namespace DLPCustomProfile {
  /**
   * Scan the context of predefined entries to only return matches surrounded by
   * keywords.
   */
  export interface ContextAwareness {
    /**
     * If true, scan the context of predefined entries to only return matches
     * surrounded by keywords.
     */
    enabled: boolean;

    /**
     * Content types to exclude from context analysis and return all matches.
     */
    skip: ContextAwareness.Skip;
  }

  export namespace ContextAwareness {
    /**
     * Content types to exclude from context analysis and return all matches.
     */
    export interface Skip {
      /**
       * If the content type is a file, skip context analysis and return all matches.
       */
      files: boolean;
    }
  }

  /**
   * A custom entry that matches a profile
   */
  export interface Entry {
    /**
     * The ID for this entry
     */
    id?: string;

    created_at?: string;

    /**
     * Whether the entry is enabled or not.
     */
    enabled?: boolean;

    /**
     * The name of the entry.
     */
    name?: string;

    /**
     * A pattern that matches an entry
     */
    pattern?: Entry.Pattern;

    /**
     * ID of the parent profile
     */
    profile_id?: unknown;

    updated_at?: string;
  }

  export namespace Entry {
    /**
     * A pattern that matches an entry
     */
    export interface Pattern {
      /**
       * The regex pattern.
       */
      regex: string;

      /**
       * Validation algorithm for the pattern. This algorithm will get run on potential
       * matches, and if it returns false, the entry will not be matched.
       */
      validation?: 'luhn';
    }
  }
}

export type CustomCreateResponse = Array<DLPCustomProfile>;

export type CustomDeleteResponse = unknown | string | null;

export interface CustomCreateParams {
  /**
   * Path param: Identifier
   */
  account_id: string;

  /**
   * Body param:
   */
  profiles: Array<CustomCreateParams.Profile>;
}

export namespace CustomCreateParams {
  export interface Profile {
    /**
     * Related DLP policies will trigger when the match count exceeds the number set.
     */
    allowed_match_count?: number;

    /**
     * Scan the context of predefined entries to only return matches surrounded by
     * keywords.
     */
    context_awareness?: Profile.ContextAwareness;

    /**
     * The description of the profile.
     */
    description?: string;

    /**
     * The entries for this profile.
     */
    entries?: Array<Profile.Entry>;

    /**
     * The name of the profile.
     */
    name?: string;

    /**
     * If true, scan images via OCR to determine if any text present matches filters.
     */
    ocr_enabled?: boolean;
  }

  export namespace Profile {
    /**
     * Scan the context of predefined entries to only return matches surrounded by
     * keywords.
     */
    export interface ContextAwareness {
      /**
       * If true, scan the context of predefined entries to only return matches
       * surrounded by keywords.
       */
      enabled: boolean;

      /**
       * Content types to exclude from context analysis and return all matches.
       */
      skip: ContextAwareness.Skip;
    }

    export namespace ContextAwareness {
      /**
       * Content types to exclude from context analysis and return all matches.
       */
      export interface Skip {
        /**
         * If the content type is a file, skip context analysis and return all matches.
         */
        files: boolean;
      }
    }

    /**
     * A custom entry create payload
     */
    export interface Entry {
      /**
       * Whether the entry is enabled or not.
       */
      enabled: boolean;

      /**
       * The name of the entry.
       */
      name: string;

      /**
       * A pattern that matches an entry
       */
      pattern: Entry.Pattern;
    }

    export namespace Entry {
      /**
       * A pattern that matches an entry
       */
      export interface Pattern {
        /**
         * The regex pattern.
         */
        regex: string;

        /**
         * Validation algorithm for the pattern. This algorithm will get run on potential
         * matches, and if it returns false, the entry will not be matched.
         */
        validation?: 'luhn';
      }
    }
  }
}

export interface CustomUpdateParams {
  /**
   * Path param: Identifier
   */
  account_id: string;

  /**
   * Body param: Related DLP policies will trigger when the match count exceeds the
   * number set.
   */
  allowed_match_count?: number;

  /**
   * Body param: Scan the context of predefined entries to only return matches
   * surrounded by keywords.
   */
  context_awareness?: CustomUpdateParams.ContextAwareness;

  /**
   * Body param: The description of the profile.
   */
  description?: string;

  /**
   * Body param: The custom entries for this profile. Array elements with IDs are
   * modifying the existing entry with that ID. Elements without ID will create new
   * entries. Any entry not in the list will be deleted.
   */
  entries?: Array<CustomUpdateParams.Entry>;

  /**
   * Body param: The name of the profile.
   */
  name?: string;

  /**
   * Body param: If true, scan images via OCR to determine if any text present
   * matches filters.
   */
  ocr_enabled?: boolean;

  /**
   * Body param: Entries from other profiles (e.g. pre-defined Cloudflare profiles,
   * or your Microsoft Information Protection profiles).
   */
  shared_entries?: Array<
    CustomUpdateParams.DLPSharedEntryUpdatePredefined | CustomUpdateParams.DLPSharedEntryUpdateIntegration
  >;
}

export namespace CustomUpdateParams {
  /**
   * Scan the context of predefined entries to only return matches surrounded by
   * keywords.
   */
  export interface ContextAwareness {
    /**
     * If true, scan the context of predefined entries to only return matches
     * surrounded by keywords.
     */
    enabled: boolean;

    /**
     * Content types to exclude from context analysis and return all matches.
     */
    skip: ContextAwareness.Skip;
  }

  export namespace ContextAwareness {
    /**
     * Content types to exclude from context analysis and return all matches.
     */
    export interface Skip {
      /**
       * If the content type is a file, skip context analysis and return all matches.
       */
      files: boolean;
    }
  }

  /**
   * A custom entry that matches a profile
   */
  export interface Entry {
    /**
     * Whether the entry is enabled or not.
     */
    enabled?: boolean;

    /**
     * The name of the entry.
     */
    name?: string;

    /**
     * A pattern that matches an entry
     */
    pattern?: Entry.Pattern;

    /**
     * ID of the parent profile
     */
    profile_id?: unknown;
  }

  export namespace Entry {
    /**
     * A pattern that matches an entry
     */
    export interface Pattern {
      /**
       * The regex pattern.
       */
      regex: string;

      /**
       * Validation algorithm for the pattern. This algorithm will get run on potential
       * matches, and if it returns false, the entry will not be matched.
       */
      validation?: 'luhn';
    }
  }

  /**
   * Properties of a predefined entry in a custom profile
   */
  export interface DLPSharedEntryUpdatePredefined {
    /**
     * Whether the entry is enabled or not.
     */
    enabled?: boolean;
  }

  /**
   * Properties of an integration entry in a custom profile
   */
  export interface DLPSharedEntryUpdateIntegration {
    /**
     * Whether the entry is enabled or not.
     */
    enabled?: boolean;
  }
}

export interface CustomDeleteParams {
  /**
   * Identifier
   */
  account_id: string;
}

export interface CustomGetParams {
  /**
   * Identifier
   */
  account_id: string;
}

export namespace Custom {
  export import DLPCustomProfile = CustomAPI.DLPCustomProfile;
  export import CustomCreateResponse = CustomAPI.CustomCreateResponse;
  export import CustomDeleteResponse = CustomAPI.CustomDeleteResponse;
  export import CustomCreateParams = CustomAPI.CustomCreateParams;
  export import CustomUpdateParams = CustomAPI.CustomUpdateParams;
  export import CustomDeleteParams = CustomAPI.CustomDeleteParams;
  export import CustomGetParams = CustomAPI.CustomGetParams;
}
