'use client';

import { FunctionComponent, ReactElement } from 'react';
import { LineChart } from '../../components';
import { BaseProps, ChartDataPoint } from '../../types';
import date from '../../date';

/**
 * The `JitterPanel` component props
 */
interface Props extends BaseProps {
  readonly chartData: ChartDataPoint<'idle'>[];
}

/**
 * Used to render the network jitter
 * panel for the overview page
 *
 * @param props The component props
 * @returns The `JitterPanel` component
 */
const JitterPanel: FunctionComponent<Props> = ({ className, chartData }): ReactElement<Props> => {
  return (
    <div className={`${className ?? ''} flex flex-col items-start bg-neutral-950 rounded-lg border-solid border-[1px] border-neutral-900 gap-y-5 p-4`}>
      <p className="font-mono text-white text-lg">
        Jitter
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
            name: 'Idle Jitter',
            key: 'idle',
            colour: 'var(--color-rose-400)',
          },
        ]}
        unit="ms"
        data={chartData}
      />
    </div>
  );
};

export default JitterPanel;
