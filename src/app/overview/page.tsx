import { ReactElement } from 'react';
import { SummaryPanel, SpeedPanel, LatencyPanel, JitterPanel } from '../../components';
import { dbFind } from '../../server/actions';
import { AsyncComponent } from '../../types';
import { PerformanceEntity } from '../../server/types';

/**
 * The entry point for the `/overview` app route,
 * used to render the overview page
 *
 * @returns The `OverviewPage` component
 */
const OverviewPage: AsyncComponent = async (): Promise<ReactElement> => {
  const data = await dbFind<PerformanceEntity>({
    collectionName: 'network_performance',
    query: {},
  });

  /**
   * The mapped chart data for
   * the `SummaryPanel` component
   */
  const speedChartData = data.map((item) => {
    const { date, download, upload } = item;

    return {
      date: date,
      download: Math.round(download.bandwidth),
      upload: Math.round(upload.bandwidth),
    };
  });

  /**
   * The mapped chart data for
   * the `LatencyPanel` component
   */
  const latencyChartData = data.map((item) => {
    const { date, idle } = item;

    return {
      date: date,
      idle: Math.round(idle.latency),
    };
  });

  /**
   * The mapped chart data for
   * the `JitterPanel` component
   */
  const jitterChartData = data.map((item) => {
    const { date, idle } = item;

    return {
      date: date,
      idle: Math.round(idle.jitter),
    };
  });

  const [latestSpeed] = [...speedChartData].reverse();
  const [latestLatency] = [...latencyChartData].reverse();
  const [latestJitter] = [...jitterChartData].reverse();

  return (
    <div className="w-full flex flex-col items-center gap-y-6">
      <SummaryPanel
        className="w-full"
        download={latestSpeed.download}
        upload={latestSpeed.download}
        latency={latestLatency.idle}
        jitter={latestJitter.idle}
      />
      <SpeedPanel
        className="w-full h-[300px]"
        chartData={speedChartData}
      />
      <div className="w-full flex flex-row items-center justify-between gap-x-6">
        <LatencyPanel
          className="w-full h-[300px]"
          chartData={latencyChartData}
        />
        <JitterPanel
          className="w-full h-[300px]"
          chartData={jitterChartData}
        />
      </div>
    </div>
  );
};

export default OverviewPage;
