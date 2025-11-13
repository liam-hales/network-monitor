import './globals.css';

import { FunctionComponent, ReactElement, ReactNode } from 'react';
import { BaseProps } from '../types';
import { montserrat, cascadiaCode } from '../fonts';
import { viewport } from './metadata';
import { App } from '../components';

/**
 * The `AppLayout` component props
 */
interface Props extends BaseProps {
  readonly children: ReactNode;
}

/**
 * The root layout component used as the entry point to the app which renders
 * the main `App` component and configures things such as fonts and app state
 *
 * @param props The component props
 * @returns The `AppLayout` component
 */
const AppLayout: FunctionComponent<Props> = ({ children }): ReactElement<Props> => {
  return (
    <html
      lang="en"
      className={`${montserrat.className} ${cascadiaCode.variable} overscroll-none`}
    >
      <body className="bg-black touch-none">
        <App>
          {children}
        </App>
      </body>
    </html>
  );
};

export default AppLayout;
export {
  viewport,
};
