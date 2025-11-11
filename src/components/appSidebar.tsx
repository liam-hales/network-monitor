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
          <div className="flex flex-row items-center">
            <p className="w-28 font-mono text-neutral-500 text-xs">
              IP address:
            </p>
            <p className="font-mono text-neutral-500 text-xs">
              {ipAddress}
            </p>
          </div>
          <div className="flex flex-row items-center">
            <p className="w-28 font-mono text-neutral-500 text-xs">
              MAC address:
            </p>
            <p className="font-mono text-neutral-500 text-xs">
              {macAddress}
            </p>
          </div>
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
                    w-full flex flex-row items-center border-solid border-[1px] border-transparent rounded-sm cursor-pointer gap-x-4 pt-2 pb-2 pl-4

                    hover:bg-neutral-900
                    hover:border-neutral-800
                  `}
                >
                  <p className={`
                    font-mono text-white text-sm decoration-solid decoration-2 underline-offset-4

                    ${(pathname === path) ? 'font-bold' : 'font-normal'}
                    ${(pathname === path) ? 'underline' : 'no-underline'}
                  `}
                  >
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
