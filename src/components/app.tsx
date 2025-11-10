'use client';

import { FunctionComponent, ReactElement, ReactNode } from 'react';
import { BaseProps } from '../types';
import { appNavItems } from '../constants';
import { usePathname } from 'next/navigation';
import Link from 'next/link';

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
  const pathname = usePathname();

  return (
    <div className="h-full flex flex-row items-center">
      <div className="h-full flex flex-col items-start gap-y-10 pt-8 pb-8 pl-4 pr-4 border-solid border-r-[1px] border-neutral-900">
        <div className="flex flex-col items-start gap-y-1 pl-4 pr-8">
          <p className="font-mono text-white text-xl">
            Network Monitor
          </p>
          <p className="font-mono text-neutral-500 text-xs">
            192.168.0.1
          </p>
        </div>
        <div className="w-full flex flex-col items-start gap-y-2">
          {
            appNavItems.map((item) => {
              const { name, path } = item;
              return (
                <Link
                  className="w-full"
                  key={`sidebar-menu-item-${name}`}
                  href={path}
                  passHref={true}
                  aria-label={name}
                >
                  <div className={`
                    w-full flex flex-row items-center border-solid border-[1px] rounded-sm cursor-pointer gap-x-4 pt-2 pb-2 pl-4

                    hover:bg-neutral-900

                    ${(pathname === path) ? 'bg-neutral-900' : 'bg-transparent'}
                    ${(pathname === path) ? 'border-neutral-800' : 'border-transparent'}
                  `}
                  >
                    <p className="font-mono text-white text-sm">
                      {name}
                    </p>
                  </div>
                </Link>
              );
            })
          }
        </div>
      </div>
      <div className="flex flex-col items-center p-4">
        {children}
      </div>
    </div>
  );
};

export default App;
