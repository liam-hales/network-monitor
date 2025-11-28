import { FunctionComponent, ReactElement } from 'react';
import { LineChart } from '../../components';
import { BaseProps, ChartDataPoint } from '../../types';

/**
 * The `ThroughputPanel` component props
 */
interface Props extends BaseProps {
  readonly chartData: ChartDataPoint<'download' | 'upload'>[];
}

/**
 * Used to render the network throughput
 * panel for the overview page
 *
 * @param props The component props
 * @returns The `ThroughputPanel` component
 */
const ThroughputPanel: FunctionComponent<Props> = ({ className, chartData }): ReactElement<Props> => {
  return (
    <div className={`${className ?? ''} flex flex-col items-start bg-neutral-950 rounded-lg border-solid border-[1px] border-neutral-900 gap-y-5 p-4`}>
      <p className="font-mono text-white text-lg">
        Throughput
      </p>
      <LineChart
        className="p-2"
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
        data={chartData}
        unit="Mbps"
      />
    </div>
  );
};

export default ThroughputPanel;
