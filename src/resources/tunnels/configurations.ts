// File generated from our OpenAPI spec by Stainless.

import * as Core from 'cloudflare/core';
import { APIResource } from 'cloudflare/resource';
import * as ConfigurationsAPI from 'cloudflare/resources/tunnels/configurations';

export class Configurations extends APIResource {
  /**
   * Gets the configuration for a remotely-managed tunnel
   */
  list(
    accountId: string,
    tunnelId: string,
    options?: Core.RequestOptions,
  ): Core.APIPromise<ConfigurationListResponse> {
    return (
      this._client.get(
        `/accounts/${accountId}/cfd_tunnel/${tunnelId}/configurations`,
        options,
      ) as Core.APIPromise<{ result: ConfigurationListResponse }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Adds or updates the configuration for a remotely-managed tunnel.
   */
  replace(
    accountId: string,
    tunnelId: string,
    body: ConfigurationReplaceParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<ConfigurationReplaceResponse> {
    return (
      this._client.put(`/accounts/${accountId}/cfd_tunnel/${tunnelId}/configurations`, {
        body,
        ...options,
      }) as Core.APIPromise<{ result: ConfigurationReplaceResponse }>
    )._thenUnwrap((obj) => obj.result);
  }
}

export type ConfigurationListResponse = unknown | Array<unknown> | string;

export type ConfigurationReplaceResponse = unknown | Array<unknown> | string;

export interface ConfigurationReplaceParams {
  /**
   * The tunnel configuration and ingress rules.
   */
  config?: ConfigurationReplaceParams.Config;
}

export namespace ConfigurationReplaceParams {
  /**
   * The tunnel configuration and ingress rules.
   */
  export interface Config {
    /**
     * List of public hostname definitions
     */
    ingress?: Array<Config.Ingress>;

    /**
     * Configuration parameters of connection between cloudflared and origin server.
     */
    originRequest?: Config.OriginRequest;

    /**
     * Enable private network access from WARP users to private network routes
     */
    'warp-routing'?: Config.WarpRouting;
  }

  export namespace Config {
    /**
     * Public hostname
     */
    export interface Ingress {
      /**
       * Public hostname for this service.
       */
      hostname: string;

      /**
       * Protocol and address of destination server. Supported protocols: http://,
       * https://, unix://, tcp://, ssh://, rdp://, unix+tls://, smb://. Alternatively
       * can return a HTTP status code http_status:[code] e.g. 'http_status:404'.
       */
      service: string;

      /**
       * Configuration parameters of connection between cloudflared and origin server.
       */
      originRequest?: Ingress.OriginRequest;

      /**
       * Requests with this path route to this public hostname.
       */
      path?: string;
    }

    export namespace Ingress {
      /**
       * Configuration parameters of connection between cloudflared and origin server.
       */
      export interface OriginRequest {
        /**
         * For all L7 requests to this hostname, cloudflared will validate each request's
         * Cf-Access-Jwt-Assertion request header.
         */
        access?: OriginRequest.Access;

        /**
         * Path to the certificate authority (CA) for the certificate of your origin. This
         * option should be used only if your certificate is not signed by Cloudflare.
         */
        caPool?: string;

        /**
         * Timeout for establishing a new TCP connection to your origin server. This
         * excludes the time taken to establish TLS, which is controlled by tlsTimeout.
         */
        connectTimeout?: number;

        /**
         * Disables chunked transfer encoding. Useful if you are running a WSGI server.
         */
        disableChunkedEncoding?: boolean;

        /**
         * Attempt to connect to origin using HTTP2. Origin must be configured as https.
         */
        http2Origin?: boolean;

        /**
         * Sets the HTTP Host header on requests sent to the local service.
         */
        httpHostHeader?: string;

        /**
         * Maximum number of idle keepalive connections between Tunnel and your origin.
         * This does not restrict the total number of concurrent connections.
         */
        keepAliveConnections?: number;

        /**
         * Timeout after which an idle keepalive connection can be discarded.
         */
        keepAliveTimeout?: number;

        /**
         * Disable the “happy eyeballs” algorithm for IPv4/IPv6 fallback if your local
         * network has misconfigured one of the protocols.
         */
        noHappyEyeballs?: boolean;

        /**
         * Disables TLS verification of the certificate presented by your origin. Will
         * allow any certificate from the origin to be accepted.
         */
        noTLSVerify?: boolean;

        /**
         * Hostname that cloudflared should expect from your origin server certificate.
         */
        originServerName?: string;

        /**
         * cloudflared starts a proxy server to translate HTTP traffic into TCP when
         * proxying, for example, SSH or RDP. This configures what type of proxy will be
         * started. Valid options are: "" for the regular proxy and "socks" for a SOCKS5
         * proxy.
         */
        proxyType?: string;

        /**
         * The timeout after which a TCP keepalive packet is sent on a connection between
         * Tunnel and the origin server.
         */
        tcpKeepAlive?: number;

        /**
         * Timeout for completing a TLS handshake to your origin server, if you have chosen
         * to connect Tunnel to an HTTPS server.
         */
        tlsTimeout?: number;
      }

      export namespace OriginRequest {
        /**
         * For all L7 requests to this hostname, cloudflared will validate each request's
         * Cf-Access-Jwt-Assertion request header.
         */
        export interface Access {
          /**
           * Access applications that are allowed to reach this hostname for this Tunnel.
           * Audience tags can be identified in the dashboard or via the List Access policies
           * API.
           */
          audTag: Array<string>;

          teamName: string;

          /**
           * Deny traffic that has not fulfilled Access authorization.
           */
          required?: boolean;
        }
      }
    }

    /**
     * Configuration parameters of connection between cloudflared and origin server.
     */
    export interface OriginRequest {
      /**
       * For all L7 requests to this hostname, cloudflared will validate each request's
       * Cf-Access-Jwt-Assertion request header.
       */
      access?: OriginRequest.Access;

      /**
       * Path to the certificate authority (CA) for the certificate of your origin. This
       * option should be used only if your certificate is not signed by Cloudflare.
       */
      caPool?: string;

      /**
       * Timeout for establishing a new TCP connection to your origin server. This
       * excludes the time taken to establish TLS, which is controlled by tlsTimeout.
       */
      connectTimeout?: number;

      /**
       * Disables chunked transfer encoding. Useful if you are running a WSGI server.
       */
      disableChunkedEncoding?: boolean;

      /**
       * Attempt to connect to origin using HTTP2. Origin must be configured as https.
       */
      http2Origin?: boolean;

      /**
       * Sets the HTTP Host header on requests sent to the local service.
       */
      httpHostHeader?: string;

      /**
       * Maximum number of idle keepalive connections between Tunnel and your origin.
       * This does not restrict the total number of concurrent connections.
       */
      keepAliveConnections?: number;

      /**
       * Timeout after which an idle keepalive connection can be discarded.
       */
      keepAliveTimeout?: number;

      /**
       * Disable the “happy eyeballs” algorithm for IPv4/IPv6 fallback if your local
       * network has misconfigured one of the protocols.
       */
      noHappyEyeballs?: boolean;

      /**
       * Disables TLS verification of the certificate presented by your origin. Will
       * allow any certificate from the origin to be accepted.
       */
      noTLSVerify?: boolean;

      /**
       * Hostname that cloudflared should expect from your origin server certificate.
       */
      originServerName?: string;

      /**
       * cloudflared starts a proxy server to translate HTTP traffic into TCP when
       * proxying, for example, SSH or RDP. This configures what type of proxy will be
       * started. Valid options are: "" for the regular proxy and "socks" for a SOCKS5
       * proxy.
       */
      proxyType?: string;

      /**
       * The timeout after which a TCP keepalive packet is sent on a connection between
       * Tunnel and the origin server.
       */
      tcpKeepAlive?: number;

      /**
       * Timeout for completing a TLS handshake to your origin server, if you have chosen
       * to connect Tunnel to an HTTPS server.
       */
      tlsTimeout?: number;
    }

    export namespace OriginRequest {
      /**
       * For all L7 requests to this hostname, cloudflared will validate each request's
       * Cf-Access-Jwt-Assertion request header.
       */
      export interface Access {
        /**
         * Access applications that are allowed to reach this hostname for this Tunnel.
         * Audience tags can be identified in the dashboard or via the List Access policies
         * API.
         */
        audTag: Array<string>;

        teamName: string;

        /**
         * Deny traffic that has not fulfilled Access authorization.
         */
        required?: boolean;
      }
    }

    /**
     * Enable private network access from WARP users to private network routes
     */
    export interface WarpRouting {
      enabled?: boolean;
    }
  }
}

export namespace Configurations {
  export import ConfigurationListResponse = ConfigurationsAPI.ConfigurationListResponse;
  export import ConfigurationReplaceResponse = ConfigurationsAPI.ConfigurationReplaceResponse;
  export import ConfigurationReplaceParams = ConfigurationsAPI.ConfigurationReplaceParams;
}