import { ReactElement, ReactNode } from 'react';
import { AsyncComponent, BaseProps } from '../types';
import { AppSidebar } from './';
import { getHost, getNetwork } from '../server/actions';

/**
 * The `App` component props
 */
interface Props extends BaseProps {
  readonly children: ReactNode;
}

/**
 * Used to render the main application
 *
 * @param props The component props
 * @returns The `App` component
 */
const App: AsyncComponent<Props> = async ({ children }): Promise<ReactElement<Props>> => {
  const host = await getHost();
  const network = await getNetwork();

  return (
    <div className="flex flex-row items-start">
      <div className="h-screen sticky top-0">
        <AppSidebar
          host={host}
          network={network}
        />
      </div>
      <div className="w-full flex flex-col items-center p-8">
        {children}
      </div>
    </div>
  );
};

export default App;
