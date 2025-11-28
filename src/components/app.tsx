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
  const privateHost = await getHost();
  const publicNetwork = await getNetwork();

  return (
    <div className="flex flex-row items-start">
      <div className="h-screen sticky top-0">
        <AppSidebar
          privateHost={privateHost}
          publicNetwork={publicNetwork}
        />
      </div>
      <div className="w-full flex flex-col items-center p-8">
        {children}
      </div>
    </div>
  );
};

export default App;
