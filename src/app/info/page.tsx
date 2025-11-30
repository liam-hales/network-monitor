import { ReactElement } from 'react';
import { AsyncComponent } from '../../types';
import { getHostDevice, getPublicNetwork } from '../../server/actions';
import { Map } from '../../components';

/**
 * The entry point for the `/info` app route,
 * used to render the info page
 *
 * @returns The `InfoPage` component
 */
const InfoPage: AsyncComponent = async (): Promise<ReactElement> => {

  const hostDevice = await getHostDevice();
  const publicNetwork = await getPublicNetwork();

  return (
    <div className="w-full flex flex-row items-start gap-x-6">
      <div className="w-[50%] flex flex-col items-start bg-neutral-950 rounded-lg border-solid border-[1px] border-neutral-900 gap-y-4 pt-4 pb-4 pl-5 pr-5">
        <p className="font-mono text-white">
          Host Device
        </p>
        <div className="flex flex-col items-start gap-y-1">
          <div className="flex flex-row items-center">
            <p className="w-32 font-mono text-neutral-500 text-xs">
              IP address:
            </p>
            <p className="font-mono text-neutral-500 text-xs">
              {hostDevice.ipAddress}
            </p>
          </div>
          <div className="flex flex-row items-center">
            <p className="w-32 font-mono text-neutral-500 text-xs">
              MAC address:
            </p>
            <p className="font-mono text-neutral-500 text-xs">
              {hostDevice.macAddress}
            </p>
          </div>
        </div>
      </div>
      <div className="w-[50%] flex flex-col items-start bg-neutral-950 rounded-lg border-solid border-[1px] border-neutral-900 gap-y-4 pt-4 pb-4 pl-5 pr-5">
        <p className="font-mono text-white">
          Public Network
        </p>
        <div className="flex flex-col items-start gap-y-1">
          <div className="flex flex-row items-center">
            <p className="w-32 font-mono text-neutral-500 text-xs">
              IP address:
            </p>
            <p className="font-mono text-neutral-500 text-xs">
              {publicNetwork.ipAddress}
            </p>
          </div>
          <div className="flex flex-row items-center">
            <p className="w-32 font-mono text-neutral-500 text-xs">
              ISP name:
            </p>
            <p className="font-mono text-neutral-500 text-xs">
              {publicNetwork.isp}
            </p>
          </div>
          <div className="flex flex-row items-center">
            <p className="w-32 font-mono text-neutral-500 text-xs">
              ISP ASN:
            </p>
            <p className="font-mono text-neutral-500 text-xs">
              {`AS${publicNetwork.asn}`}
            </p>
          </div>
        </div>
        <Map
          className="w-full h-60 rounded-lg mt-3"
          latitude={publicNetwork.latitude}
          longitude={publicNetwork.longitude}
          zoom={12}
        />
        <p className="font-mono text-neutral-500 text-xs">
          {'The approximate location of your ISP\'s server used to assign your public IP address'}
        </p>
      </div>
    </div>
  );
};

export default InfoPage;
