'use client';

import { FunctionComponent, ReactElement } from 'react';
import { LineChart } from '../../components';
import { MoveDown, MoveUp } from 'lucide-react';
import { useDate } from '../../hooks';
import { BaseProps } from '../../types';

/**
 * The `NetworkSpeedPanel` component props
 */
interface Props extends BaseProps {
  readonly data: Record<string, string | number>[];
}

/**
 * Used to render the network speed
 * panel for the overview page
 *
 * @param props The component props
 * @returns The `NetworkSpeedPanel` component
 */
const NetworkSpeedPanel: FunctionComponent<Props> = ({ className, data }): ReactElement<Props> => {
  const { from } = useDate();

  return (
    <div className={`${className ?? ''} flex flex-col items-start bg-neutral-950 rounded-lg border-solid border-[1px] border-neutral-900 gap-y-5 p-4`}>
      <p className="font-mono text-white text-lg">
        Network Speed
      </p>
      <div className="flex flex-row items-center gap-x-10 bg-black rounded-lg border-solid border-[1px] border-neutral-800 pt-3 pb-3 pl-4 pr-4">
        <div className="flex flex-row items-center">
          <MoveDown
            className="text-blue-400"
            size={30}
          />
          <p className="font-sans font-bold text-blue-400 text-4xl">
            400
          </p>
          <p className="font-mono text-white text-sm pt-3 pl-1">
            mbps
          </p>
        </div>
        <div className="flex flex-row items-center">
          <MoveUp
            className="text-purple-400"
            size={30}
          />
          <p className="font-sans font-bold text-purple-400 text-4xl">
            380
          </p>
          <p className="font-mono text-white text-sm pt-3 pl-1">
            mbps
          </p>
        </div>
      </div>
      <LineChart
        className="p-2"
        xAxis={{
          name: 'Date Time',
          key: 'date',
          formatter: (value) => {
            // Format the date value
            // for the chart axis label
            return from(value)
              .format('MMM DD');
          },
        }}
        lines={[
          {
            name: 'Download',
            key: 'download',
            colour: 'var(--color-blue-400)',
          },
          {
            name: 'Upload',
            key: 'upload',
            colour: 'var(--color-purple-400)',
          },
        ]}
        data={data}
      />
    </div>
  );
};

export default NetworkSpeedPanel;
