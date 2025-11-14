import { FunctionComponent, ReactElement } from 'react';
import { SummaryPanel, SpeedPanel, LatencyPanel } from '../../components';

/**
 * The entry point for the `/overview` app route,
 * used to render the overview page
 *
 * @returns The `OverviewPage` component
 */
const OverviewPage: FunctionComponent = (): ReactElement => {
  return (
    <div className="w-full flex flex-col items-center gap-y-6">
      <SummaryPanel
        className="w-full"
        download={0}
        upload={0}
        latency={0}
        jitter={0}
      />
      <SpeedPanel
        className="w-full h-[300px]"
        chartData={[]}
      />
      <LatencyPanel
        className="w-full h-[300px]"
        chartData={[]}
      />
    </div>
  );
};

export default OverviewPage;
