'use client';

import { FunctionComponent, ReactElement } from 'react';
import { LineChart } from '../../components';
import { BaseProps, ChartDataPoint } from '../../types';
import date from '../../date';

/**
 * The `SpeedPanel` component props
 */
interface Props extends BaseProps {
  readonly chartData: ChartDataPoint<'download' | 'upload'>[];
}

/**
 * Used to render the network speed
 * panel for the overview page
 *
 * @param props The component props
 * @returns The `SpeedPanel` component
 */
const SpeedPanel: FunctionComponent<Props> = ({ className, chartData }): ReactElement<Props> => {
  return (
    <div className={`${className ?? ''} flex flex-col items-start bg-neutral-950 rounded-lg border-solid border-[1px] border-neutral-900 gap-y-5 p-4`}>
      <p className="font-mono text-white text-lg">
        Speed
      </p>
      <LineChart
        className="p-2"
        xAxis={{
          name: 'Date Time',
          key: 'date',
          labelFormatter: (value) => {
            return date
              .utc(value)
              .format('MMM DD');
          },
          tooltipFormatter: (value) => {
            return date
              .utc(value)
              .format('MMM D YYYY, HH:mm');
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
        unit="mbps"
        data={chartData}
      />
    </div>
  );
};

export default SpeedPanel;
