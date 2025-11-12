'use client';

import { FunctionComponent, ReactElement } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { BaseProps } from '../types';

/**
 * The `AppSidebarItem` component props
 */
interface Props extends BaseProps {
  readonly name: string;
  readonly path: string;
}

/**
 * Used to render an app sidebar item which when
 * actioned, will navigate to a different page
 *
 * @param props The component props
 * @returns The `AppSidebarItem` component
 */
const AppSidebarItem: FunctionComponent<Props> = ({ name, path }): ReactElement<Props> => {
  const pathname = usePathname();

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
};

export default AppSidebarItem;
