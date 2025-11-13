'use client';

import { FunctionComponent, ReactElement } from 'react';
import { LineChart } from '../../components';
import { useDate } from '../../hooks';
import { BaseProps, ChartDataPoint } from '../../types';

/**
 * The `LatencyPanel` component props
 */
interface Props extends BaseProps {
  readonly chartData: ChartDataPoint<'idle' | 'download' | 'upload'>[];
}

/**
 * Used to render the network latency
 * panel for the overview page
 *
 * @param props The component props
 * @returns The `LatencyPanel` component
 */
const LatencyPanel: FunctionComponent<Props> = ({ className, chartData }): ReactElement<Props> => {
  const { from } = useDate();

  return (
    <div className={`${className ?? ''} flex flex-col items-start bg-neutral-950 rounded-lg border-solid border-[1px] border-neutral-900 gap-y-5 p-4`}>
      <p className="font-mono text-white text-lg">
        Latency
      </p>
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
            name: 'Idle',
            key: 'idle',
            colour: 'var(--color-emerald-400)',
          },
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
        unit="ms"
        data={chartData}
      />
    </div>
  );
};

export default LatencyPanel;
