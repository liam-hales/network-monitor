import { FunctionComponent, ReactElement } from 'react';
import { appNavItems } from '../constants';
import { AppSidebarItem } from './';

/**
 * Used to render the app sidebar used for
 * navigation and displaying host details
 *
 * @returns The `AppSidebar` component
 */
const AppSidebar: FunctionComponent = (): ReactElement => {
  return (
    <div className="w-[270px] h-full flex flex-col items-start justify-between pt-8 pb-8 pl-4 pr-4 border-solid border-r-[1px] border-neutral-900">
      <div className="flex flex-col items-start gap-y-10">
        <div className="flex flex-col items-start gap-y-1 pl-2 pr-2">
          <p className="font-mono text-white text-xl">
            Network Monitor
          </p>
          <p className="font-mono text-neutral-500 text-xs">
            Self hosted network monitoring
          </p>
        </div>
        <div className="w-full flex flex-col items-start gap-y-2">
          {
            appNavItems.map((item) => {
              const { name, path, subItems } = item;
              return (
                <div
                  className="w-full flex flex-col items-start"
                  key={`sidebar-item-${name}`}
                >
                  <AppSidebarItem
                    name={name}
                    path={path}
                  />
                  {
                    (subItems.length > 0) && (
                      <div className="w-full flex flex-col items-start gap-y-2 pt-2 pb-4 pl-6">
                        {
                          subItems.map((item) => {
                            const { name, path } = item;
                            return (
                              <AppSidebarItem
                                key={`sidebar-sub-item-${name}`}
                                name={name}
                                path={path}
                              />
                            );
                          })
                        }
                      </div>
                    )
                  }
                </div>
              );
            })
          }
        </div>
      </div>
    </div>
  );
};

export default AppSidebar;
