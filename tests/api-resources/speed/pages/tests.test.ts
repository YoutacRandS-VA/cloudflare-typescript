// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Cloudflare from 'cloudflare';
import { Response } from 'node-fetch';

const cloudflare = new Cloudflare({
  apiKey: '144c9defac04969c7bfad8efaa8ea194',
  apiEmail: 'user@example.com',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource tests', () => {
  test('create: only required params', async () => {
    const responsePromise = cloudflare.speed.pages.tests.create('example.com', {
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

  test('create: required and optional params', async () => {
    const response = await cloudflare.speed.pages.tests.create('example.com', {
      zone_id: '023e105f4ecef8ad9ca31a8372d0c353',
      region: 'us-central1',
    });
  });

  test('list: only required params', async () => {
    const responsePromise = cloudflare.speed.pages.tests.list('example.com', {
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

  test('list: required and optional params', async () => {
    const response = await cloudflare.speed.pages.tests.list('example.com', {
      zone_id: '023e105f4ecef8ad9ca31a8372d0c353',
      page: 1,
      per_page: 20,
      region: 'us-central1',
    });
  });

  test('delete: only required params', async () => {
    const responsePromise = cloudflare.speed.pages.tests.delete('example.com', {
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

  test('delete: required and optional params', async () => {
    const response = await cloudflare.speed.pages.tests.delete('example.com', {
      zone_id: '023e105f4ecef8ad9ca31a8372d0c353',
      region: 'us-central1',
    });
  });

  test('get: only required params', async () => {
    const responsePromise = cloudflare.speed.pages.tests.get('example.com', 'string', {
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

  test('get: required and optional params', async () => {
    const response = await cloudflare.speed.pages.tests.get('example.com', 'string', {
      zone_id: '023e105f4ecef8ad9ca31a8372d0c353',
    });
  });
});