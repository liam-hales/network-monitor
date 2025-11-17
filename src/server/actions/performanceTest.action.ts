'use server';

import { PerformanceTestResults } from '../types';
import SpeedTest from '@cloudflare/speedtest';

/**
 * Used to perform a network performance test
 * and `yield` the data as the test runs
 *
 * @returns The data async generator
 */
const performanceTest = async function* (): AsyncGenerator<PerformanceTestResults> {
  let resolveNext: ((value: [PerformanceTestResults, boolean]) => void) | undefined;

  // Define the speed test client used to
  // perform the network performance test
  const client = new SpeedTest({
    autoStart: false,
  });

  /**
   * Used as the callback for the `SpeedTest` client which is
   * called when results change and when the test has completed
   *
   * @param isFinal Determines if the callback is for the final results
   */
  const _callback = (isFinal: boolean) => {
    const results = client.results.getSummary();

    // Skip if the resolve next function
    // has not been defined yet
    if (resolveNext == null) {
      return;
    }

    // Yield the result data
    // from the summary
    resolveNext([
      {
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
      },
      isFinal,
    ]);
  };

  // Set client functions to call the `_callback` and
  // start the network performance test
  client.onResultsChange = () => _callback(false);
  client.onFinish = () => _callback(true);
  client.play();

  while (true) {

    // Await on a new promise and assign its `resolve`
    // to `resolveNext` to wait for the new data
    const [value, isFinal] = await new Promise<[PerformanceTestResults, boolean]>((resolve) => {
      resolveNext = resolve;
    });

    yield value;

    // If these are the final results
    // then break out the loop
    if (isFinal === true) {
      break;
    }
  }
};

export default performanceTest;
