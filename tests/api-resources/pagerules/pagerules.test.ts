// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Cloudflare from 'cloudflare';
import { Response } from 'node-fetch';

const cloudflare = new Cloudflare({
  apiKey: '144c9defac04969c7bfad8efaa8ea194',
  apiEmail: 'user@example.com',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource pagerules', () => {
  // skipped: tests are disabled for the time being
  test.skip('create: only required params', async () => {
    const responsePromise = cloudflare.pagerules.create({
      zone_id: '023e105f4ecef8ad9ca31a8372d0c353',
      actions: [{}, {}, {}],
      targets: [{ constraint: { operator: 'matches', value: '*example.com/images/*' }, target: 'url' }],
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
    const response = await cloudflare.pagerules.create({
      zone_id: '023e105f4ecef8ad9ca31a8372d0c353',
      actions: [
        {
          name: 'forward_url',
          value: {
            type: 'temporary',
            url: 'http://www.example.com/somewhere/$1/astring/$2/anotherstring/$3',
          },
        },
        {
          name: 'forward_url',
          value: {
            type: 'temporary',
            url: 'http://www.example.com/somewhere/$1/astring/$2/anotherstring/$3',
          },
        },
        {
          name: 'forward_url',
          value: {
            type: 'temporary',
            url: 'http://www.example.com/somewhere/$1/astring/$2/anotherstring/$3',
          },
        },
      ],
      targets: [{ constraint: { operator: 'matches', value: '*example.com/images/*' }, target: 'url' }],
      priority: 0,
      status: 'active',
    });
  });

  // skipped: tests are disabled for the time being
  test.skip('update: only required params', async () => {
    const responsePromise = cloudflare.pagerules.update('023e105f4ecef8ad9ca31a8372d0c353', {
      zone_id: '023e105f4ecef8ad9ca31a8372d0c353',
      actions: [{}, {}, {}],
      targets: [{ constraint: { operator: 'matches', value: '*example.com/images/*' }, target: 'url' }],
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
    const response = await cloudflare.pagerules.update('023e105f4ecef8ad9ca31a8372d0c353', {
      zone_id: '023e105f4ecef8ad9ca31a8372d0c353',
      actions: [
        {
          name: 'forward_url',
          value: {
            type: 'temporary',
            url: 'http://www.example.com/somewhere/$1/astring/$2/anotherstring/$3',
          },
        },
        {
          name: 'forward_url',
          value: {
            type: 'temporary',
            url: 'http://www.example.com/somewhere/$1/astring/$2/anotherstring/$3',
          },
        },
        {
          name: 'forward_url',
          value: {
            type: 'temporary',
            url: 'http://www.example.com/somewhere/$1/astring/$2/anotherstring/$3',
          },
        },
      ],
      targets: [{ constraint: { operator: 'matches', value: '*example.com/images/*' }, target: 'url' }],
      priority: 0,
      status: 'active',
    });
  });

  // skipped: tests are disabled for the time being
  test.skip('list: only required params', async () => {
    const responsePromise = cloudflare.pagerules.list({ zone_id: '023e105f4ecef8ad9ca31a8372d0c353' });
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
    const response = await cloudflare.pagerules.list({
      zone_id: '023e105f4ecef8ad9ca31a8372d0c353',
      direction: 'desc',
      match: 'any',
      order: 'status',
      status: 'active',
    });
  });

  // skipped: tests are disabled for the time being
  test.skip('delete: only required params', async () => {
    const responsePromise = cloudflare.pagerules.delete('023e105f4ecef8ad9ca31a8372d0c353', {
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
    const response = await cloudflare.pagerules.delete('023e105f4ecef8ad9ca31a8372d0c353', {
      zone_id: '023e105f4ecef8ad9ca31a8372d0c353',
    });
  });

  // skipped: tests are disabled for the time being
  test.skip('edit: only required params', async () => {
    const responsePromise = cloudflare.pagerules.edit('023e105f4ecef8ad9ca31a8372d0c353', {
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
  test.skip('edit: required and optional params', async () => {
    const response = await cloudflare.pagerules.edit('023e105f4ecef8ad9ca31a8372d0c353', {
      zone_id: '023e105f4ecef8ad9ca31a8372d0c353',
      actions: [
        {
          name: 'forward_url',
          value: {
            type: 'temporary',
            url: 'http://www.example.com/somewhere/$1/astring/$2/anotherstring/$3',
          },
        },
        {
          name: 'forward_url',
          value: {
            type: 'temporary',
            url: 'http://www.example.com/somewhere/$1/astring/$2/anotherstring/$3',
          },
        },
        {
          name: 'forward_url',
          value: {
            type: 'temporary',
            url: 'http://www.example.com/somewhere/$1/astring/$2/anotherstring/$3',
          },
        },
      ],
      priority: 0,
      status: 'active',
      targets: [{ constraint: { operator: 'matches', value: '*example.com/images/*' }, target: 'url' }],
    });
  });

  // skipped: tests are disabled for the time being
  test.skip('get: only required params', async () => {
    const responsePromise = cloudflare.pagerules.get('023e105f4ecef8ad9ca31a8372d0c353', {
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
    const response = await cloudflare.pagerules.get('023e105f4ecef8ad9ca31a8372d0c353', {
      zone_id: '023e105f4ecef8ad9ca31a8372d0c353',
    });
  });
});
