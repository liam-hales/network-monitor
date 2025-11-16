'use server';

import { StreamableValue, createStreamableValue } from '@ai-sdk/rsc';
import { PerformanceTestResults } from '../types';
import SpeedTest from '@cloudflare/speedtest';

/**
 * Used to perform a network performance test and
 * stream the data in real-time to the client
 *
 * @returns The client streamable value
 */
const performanceTest = async (): Promise<StreamableValue<PerformanceTestResults>> => {
  // Define the new stream used to send data to the client
  // Define the speed test client used to perform the speed test
  const stream = createStreamableValue<PerformanceTestResults>();
  const client = new SpeedTest({
    autoStart: false,
  });

  client.onResultsChange = () => {
    const results = client.results.getSummary();

    // Update the stream with the result
    // values from the speed test
    stream.update({
      idle: {
        bandwidth: 0,
        latency: results.latency ?? 0,
        jitter: results.jitter ?? 0,
      },
      download: {
        bandwidth: results.download ?? 0,
        latency: results.downLoadedLatency ?? 0,
        jitter: results.downLoadedJitter ?? 0,
      },
      upload: {
        bandwidth: results.upload ?? 0,
        latency: results.upLoadedLatency ?? 0,
        jitter: results.upLoadedJitter ?? 0,
      },
    });
  };

  // Tell the client to start
  // the network speed test
  client.play();

  return stream.value;
};

export default performanceTest;
