'use server';

import { StreamableValue, createStreamableValue } from '@ai-sdk/rsc';
import { PerformanceTestResults } from '../types';

/**
 * Used to convert an `AsyncGenerator` server action into
 * a stream to send data in real-time to the client
 *
 * @returns The client streamable value
 */
const stream = async (serverAction: () => AsyncGenerator): Promise<StreamableValue<PerformanceTestResults>> => {
  // Create the stream used to send data to the client
  // and call the async generator server action
  const stream = createStreamableValue();
  const asyncGenerator = serverAction();

  /**
   * Used to update the stream with each
   * part and close the stream once done
   */
  void (async () => {
    for await (const part of asyncGenerator) {
      stream.update(part);
    }

    stream.done();
  })();

  // Return the stream value immediately
  // so the client can process it
  return stream.value;
};

export default stream;
