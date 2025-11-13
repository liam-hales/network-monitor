import { FunctionComponent, ReactElement, ReactNode } from 'react';
import { BaseProps } from '../types';
import { getHostNetworkInfo } from '../helpers';
import { AppSidebar } from './';

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
const App: FunctionComponent<Props> = ({ children }): ReactElement<Props> => {
  const { address, mac } = getHostNetworkInfo();

  return (
    <div className="flex flex-row items-start">
      <div className="h-screen sticky top-0">
        <AppSidebar
          ipAddress={address}
          macAddress={mac}
        />
      </div>
      <div className="w-full flex flex-col items-center p-8">
        {children}
      </div>
    </div>
  );
};

export default App;
