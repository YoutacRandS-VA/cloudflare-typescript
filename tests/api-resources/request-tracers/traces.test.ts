// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Cloudflare from 'cloudflare';
import { Response } from 'node-fetch';

const cloudflare = new Cloudflare({
  apiKey: '144c9defac04969c7bfad8efaa8ea194',
  apiEmail: 'user@example.com',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource traces', () => {
  // skipped: tests are disabled for the time being
  test.skip('create: only required params', async () => {
    const responsePromise = cloudflare.requestTracers.traces.create({
      account_id: '023e105f4ecef8ad9ca31a8372d0c353',
      method: 'PUT',
      url: 'https://some.zone/some_path',
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
    const response = await cloudflare.requestTracers.traces.create({
      account_id: '023e105f4ecef8ad9ca31a8372d0c353',
      method: 'PUT',
      url: 'https://some.zone/some_path',
      body: { base64: 'c29tZV9yZXF1ZXN0X2JvZHk=', json: {}, plain_text: 'string' },
      context: {
        bot_score: 0,
        geoloc: {
          city: 'London',
          continent: 'string',
          is_eu_country: true,
          iso_code: 'string',
          latitude: 0,
          longitude: 0,
          postal_code: 'string',
          region_code: 'string',
          subdivision_2_iso_code: 'string',
          timezone: 'string',
        },
        skip_challenge: true,
        threat_score: 0,
      },
      cookies: { cookie_name_1: 'cookie_value_1', cookie_name_2: 'cookie_value_2' },
      headers: { header_name_1: 'header_value_1', header_name_2: 'header_value_2' },
      protocol: 'HTTP/1.1',
      skip_response: true,
    });
  });
});
