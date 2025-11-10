'use client';

import { FunctionComponent, ReactElement } from 'react';
import { appNavItems } from '../constants';
import { BaseProps } from '../types';
import { usePathname } from 'next/navigation';
import Link from 'next/link';

/**
 * The `AppSidebar` component props
 */
interface Props extends BaseProps {
  readonly ipAddress: string;
  readonly macAddress: string;
}

/**
 * Used to render the app sidebar used for
 * navigation and displaying host details
 *
 * @param props The component props
 * @returns The `AppSidebar` component
 */
const AppSidebar: FunctionComponent<Props> = ({ ipAddress, macAddress }): ReactElement<Props> => {
  const pathname = usePathname();

  return (
    <div className="h-full flex flex-col items-start gap-y-10 pt-8 pb-8 pl-4 pr-4 border-solid border-r-[1px] border-neutral-900">
      <div className="flex flex-col items-start gap-y-4 pl-4 pr-4">
        <p className="font-mono text-white text-xl">
          Network Monitor
        </p>
        <div className="flex flex-col items-start gap-y-1">
          <p className="font-mono text-neutral-500 text-xs">
            {`IP address - ${ipAddress}`}
          </p>
          <p className="font-mono text-neutral-500 text-xs">
            {`MAC address - ${macAddress}`}
          </p>
        </div>
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
  );
};

export default AppSidebar;
