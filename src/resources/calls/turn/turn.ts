// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from 'cloudflare/resource';
import * as KeysAPI from 'cloudflare/resources/calls/turn/keys';

export class Turn extends APIResource {
  keys: KeysAPI.Keys = new KeysAPI.Keys(this._client);
}

export namespace Turn {
  export import Keys = KeysAPI.Keys;
  export import KeyCreateResponse = KeysAPI.KeyCreateResponse;
  export import KeyUpdateResponse = KeysAPI.KeyUpdateResponse;
  export import KeyListResponse = KeysAPI.KeyListResponse;
  export import KeyDeleteResponse = KeysAPI.KeyDeleteResponse;
  export import KeyGetResponse = KeysAPI.KeyGetResponse;
  export import KeyListResponsesSinglePage = KeysAPI.KeyListResponsesSinglePage;
  export import KeyCreateParams = KeysAPI.KeyCreateParams;
  export import KeyUpdateParams = KeysAPI.KeyUpdateParams;
  export import KeyListParams = KeysAPI.KeyListParams;
  export import KeyDeleteParams = KeysAPI.KeyDeleteParams;
  export import KeyGetParams = KeysAPI.KeyGetParams;
}
