// File generated from our OpenAPI spec by Stainless.

import Cloudflare from 'cloudflare';
import { Response } from 'node-fetch';

const cloudflare = new Cloudflare({
  apiKey: '144c9defac04969c7bfad8efaa8ea194',
  apiEmail: 'user@example.com',
  apiToken: 'Sn3lZJTBX6kkg7OdcBUAxOO963GEIyGQqnFTOFYY',
  userServiceKey:
    'v1.0-144c9defac04969c7bfad8ef-631a41d003a32d25fe878081ef365c49503f7fada600da935e2851a1c7326084b85cbf6429c4b859de8475731dc92a9c329631e6d59e6c73da7b198497172b4cefe071d90d0f5d2719',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource records', () => {
  // skipped: tests are disabled for the time being
  test.skip('create: only required params', async () => {
    const responsePromise = cloudflare.dns.records.create({
      zone_id: '023e105f4ecef8ad9ca31a8372d0c353',
      name: 'example.com',
      type: 'URI',
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // skipped: tests are disabled for the time being
  test.skip('create: required and optional params', async () => {
    const response = await cloudflare.dns.records.create({
      zone_id: '023e105f4ecef8ad9ca31a8372d0c353',
      name: 'example.com',
      type: 'URI',
      comment: 'Domain verification record',
      data: {
        flags: 'string',
        tag: 'issue',
        value: 'alpn="h3,h2" ipv4hint="127.0.0.1" ipv6hint="::1"',
        algorithm: 2,
        certificate: 'string',
        key_tag: 1,
        type: 1,
        protocol: 3,
        public_key: 'string',
        digest: 'string',
        digest_type: 1,
        priority: 1,
        target: '.',
        altitude: 0,
        lat_degrees: 37,
        lat_direction: 'N',
        lat_minutes: 46,
        lat_seconds: 46,
        long_degrees: 122,
        long_direction: 'W',
        long_minutes: 23,
        long_seconds: 35,
        precision_horz: 0,
        precision_vert: 0,
        size: 100,
        order: 100,
        preference: 10,
        regex: 'string',
        replacement: 'string',
        service: '_sip',
        matching_type: 1,
        selector: 0,
        usage: 0,
        name: 'example.com',
        port: 8806,
        proto: '_tcp',
        weight: 20,
        fingerprint: 'string',
        content: 'http://example.com/example.html',
      },
      meta: { auto_added: true, source: 'primary' },
      priority: 10,
      proxied: false,
      tags: ['owner:dns-team', 'owner:dns-team', 'owner:dns-team'],
      ttl: 3600,
    });
  });

  // skipped: tests are disabled for the time being
  test.skip('update: only required params', async () => {
    const responsePromise = cloudflare.dns.records.update('023e105f4ecef8ad9ca31a8372d0c353', {
      zone_id: '023e105f4ecef8ad9ca31a8372d0c353',
      name: 'example.com',
      type: 'URI',
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // skipped: tests are disabled for the time being
  test.skip('update: required and optional params', async () => {
    const response = await cloudflare.dns.records.update('023e105f4ecef8ad9ca31a8372d0c353', {
      zone_id: '023e105f4ecef8ad9ca31a8372d0c353',
      name: 'example.com',
      type: 'URI',
      comment: 'Domain verification record',
      data: {
        flags: 'string',
        tag: 'issue',
        value: 'alpn="h3,h2" ipv4hint="127.0.0.1" ipv6hint="::1"',
        algorithm: 2,
        certificate: 'string',
        key_tag: 1,
        type: 1,
        protocol: 3,
        public_key: 'string',
        digest: 'string',
        digest_type: 1,
        priority: 1,
        target: '.',
        altitude: 0,
        lat_degrees: 37,
        lat_direction: 'N',
        lat_minutes: 46,
        lat_seconds: 46,
        long_degrees: 122,
        long_direction: 'W',
        long_minutes: 23,
        long_seconds: 35,
        precision_horz: 0,
        precision_vert: 0,
        size: 100,
        order: 100,
        preference: 10,
        regex: 'string',
        replacement: 'string',
        service: '_sip',
        matching_type: 1,
        selector: 0,
        usage: 0,
        name: 'example.com',
        port: 8806,
        proto: '_tcp',
        weight: 20,
        fingerprint: 'string',
        content: 'http://example.com/example.html',
      },
      meta: { auto_added: true, source: 'primary' },
      priority: 10,
      proxied: false,
      tags: ['owner:dns-team', 'owner:dns-team', 'owner:dns-team'],
      ttl: 3600,
    });
  });

  // skipped: tests are disabled for the time being
  test.skip('list: only required params', async () => {
    const responsePromise = cloudflare.dns.records.list({ zone_id: '023e105f4ecef8ad9ca31a8372d0c353' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // skipped: tests are disabled for the time being
  test.skip('list: required and optional params', async () => {
    const response = await cloudflare.dns.records.list({
      zone_id: '023e105f4ecef8ad9ca31a8372d0c353',
      comment: {
        present: 'string',
        absent: 'string',
        exact: 'Hello, world',
        contains: 'ello, worl',
        startswith: 'Hello, w',
        endswith: 'o, world',
      },
      content: '127.0.0.1',
      direction: 'asc',
      match: 'any',
      name: 'example.com',
      order: 'type',
      page: 1,
      per_page: 5,
      proxied: false,
      search: 'www.cloudflare.com',
      tag: {
        present: 'important',
        absent: 'important',
        exact: 'greeting:Hello, world',
        contains: 'greeting:ello, worl',
        startswith: 'greeting:Hello, w',
        endswith: 'greeting:o, world',
      },
      tag_match: 'any',
      type: 'A',
    });
  });

  // skipped: tests are disabled for the time being
  test.skip('delete: only required params', async () => {
    const responsePromise = cloudflare.dns.records.delete('023e105f4ecef8ad9ca31a8372d0c353', {
      zone_id: '023e105f4ecef8ad9ca31a8372d0c353',
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // skipped: tests are disabled for the time being
  test.skip('delete: required and optional params', async () => {
    const response = await cloudflare.dns.records.delete('023e105f4ecef8ad9ca31a8372d0c353', {
      zone_id: '023e105f4ecef8ad9ca31a8372d0c353',
    });
  });

  // skipped: tests are disabled for the time being
  test.skip('edit: only required params', async () => {
    const responsePromise = cloudflare.dns.records.edit('023e105f4ecef8ad9ca31a8372d0c353', {
      zone_id: '023e105f4ecef8ad9ca31a8372d0c353',
      name: 'example.com',
      type: 'URI',
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // skipped: tests are disabled for the time being
  test.skip('edit: required and optional params', async () => {
    const response = await cloudflare.dns.records.edit('023e105f4ecef8ad9ca31a8372d0c353', {
      zone_id: '023e105f4ecef8ad9ca31a8372d0c353',
      name: 'example.com',
      type: 'URI',
      comment: 'Domain verification record',
      data: {
        flags: 'string',
        tag: 'issue',
        value: 'alpn="h3,h2" ipv4hint="127.0.0.1" ipv6hint="::1"',
        algorithm: 2,
        certificate: 'string',
        key_tag: 1,
        type: 1,
        protocol: 3,
        public_key: 'string',
        digest: 'string',
        digest_type: 1,
        priority: 1,
        target: '.',
        altitude: 0,
        lat_degrees: 37,
        lat_direction: 'N',
        lat_minutes: 46,
        lat_seconds: 46,
        long_degrees: 122,
        long_direction: 'W',
        long_minutes: 23,
        long_seconds: 35,
        precision_horz: 0,
        precision_vert: 0,
        size: 100,
        order: 100,
        preference: 10,
        regex: 'string',
        replacement: 'string',
        service: '_sip',
        matching_type: 1,
        selector: 0,
        usage: 0,
        name: 'example.com',
        port: 8806,
        proto: '_tcp',
        weight: 20,
        fingerprint: 'string',
        content: 'http://example.com/example.html',
      },
      meta: { auto_added: true, source: 'primary' },
      priority: 10,
      proxied: false,
      tags: ['owner:dns-team', 'owner:dns-team', 'owner:dns-team'],
      ttl: 3600,
    });
  });

  // skipped: tests are disabled for the time being
  test.skip('export: only required params', async () => {
    const responsePromise = cloudflare.dns.records.export({ zone_id: '023e105f4ecef8ad9ca31a8372d0c353' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // skipped: tests are disabled for the time being
  test.skip('export: required and optional params', async () => {
    const response = await cloudflare.dns.records.export({ zone_id: '023e105f4ecef8ad9ca31a8372d0c353' });
  });

  // skipped: tests are disabled for the time being
  test.skip('get: only required params', async () => {
    const responsePromise = cloudflare.dns.records.get('023e105f4ecef8ad9ca31a8372d0c353', {
      zone_id: '023e105f4ecef8ad9ca31a8372d0c353',
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // skipped: tests are disabled for the time being
  test.skip('get: required and optional params', async () => {
    const response = await cloudflare.dns.records.get('023e105f4ecef8ad9ca31a8372d0c353', {
      zone_id: '023e105f4ecef8ad9ca31a8372d0c353',
    });
  });

  // skipped: tests are disabled for the time being
  test.skip('import: only required params', async () => {
    const responsePromise = cloudflare.dns.records.import({
      zone_id: '023e105f4ecef8ad9ca31a8372d0c353',
      file: 'www.example.com. 300 IN  A 127.0.0.1',
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // skipped: tests are disabled for the time being
  test.skip('import: required and optional params', async () => {
    const response = await cloudflare.dns.records.import({
      zone_id: '023e105f4ecef8ad9ca31a8372d0c353',
      file: 'www.example.com. 300 IN  A 127.0.0.1',
      proxied: 'true',
    });
  });

  // skipped: tests are disabled for the time being
  test.skip('scan: only required params', async () => {
    const responsePromise = cloudflare.dns.records.scan({ zone_id: '023e105f4ecef8ad9ca31a8372d0c353' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // skipped: tests are disabled for the time being
  test.skip('scan: required and optional params', async () => {
    const response = await cloudflare.dns.records.scan({ zone_id: '023e105f4ecef8ad9ca31a8372d0c353' });
  });
});