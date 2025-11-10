/**
 * Describes all app navigation items used to render the
 * navigation buttons and determine the URL path
 */
export const appNavItems = [
  {
    name: 'Dashboard',
    path: '/',
  },
  {
    name: 'Speed Test',
    path: '/speedtest',
  },
  {
    name: 'Devices',
    path: '/devices',
  },
] as const;
