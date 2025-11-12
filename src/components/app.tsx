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
    <div className="h-full flex flex-row items-start">
      <AppSidebar
        ipAddress={address}
        macAddress={mac}
      />
      <div className="flex flex-col items-center p-8">
        {children}
      </div>
    </div>
  );
};

export default App;
