'use client';

import { FunctionComponent, ReactElement } from 'react';

/**
 * The entry point for the `/` app route,
 * used to render the home/dashboard page
 *
 * @returns The `HomePage` component
 */
const HomePage: FunctionComponent = (): ReactElement => {
  return (
    <p className="font-mono text-white text-xl">
      Dashboard
    </p>
  );
};

export default HomePage;
