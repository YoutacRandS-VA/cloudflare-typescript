// File generated from our OpenAPI spec by Stainless.

import { APIResource } from 'cloudflare/resource';
import * as DevicesAPI from 'cloudflare/resources/zero-trust/dex/fleet-status/devices';
import * as LiveAPI from 'cloudflare/resources/zero-trust/dex/fleet-status/live';
import * as OverTimeAPI from 'cloudflare/resources/zero-trust/dex/fleet-status/over-time';

export class FleetStatus extends APIResource {
  devices: DevicesAPI.Devices = new DevicesAPI.Devices(this._client);
  live: LiveAPI.Live = new LiveAPI.Live(this._client);
  overTime: OverTimeAPI.OverTime = new OverTimeAPI.OverTime(this._client);
}

export namespace FleetStatus {
  export import Devices = DevicesAPI.Devices;
  export import DigitalExperienceMonitoringDevice = DevicesAPI.DigitalExperienceMonitoringDevice;
  export import DigitalExperienceMonitoringDevicesV4PagePaginationArray = DevicesAPI.DigitalExperienceMonitoringDevicesV4PagePaginationArray;
  export import DeviceListParams = DevicesAPI.DeviceListParams;
  export import Live = LiveAPI.Live;
  export import LiveListResponse = LiveAPI.LiveListResponse;
  export import LiveListParams = LiveAPI.LiveListParams;
  export import OverTime = OverTimeAPI.OverTime;
  export import OverTimeListParams = OverTimeAPI.OverTimeListParams;
}