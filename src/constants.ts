/**
 * Describes all app navigation items used to render the
 * navigation buttons and determine the URL path
 */
export const appNavItems = [
  {
    name: 'Overview',
    path: '/',
    subItems: [
      {
        name: 'Network Speed',
        path: '/network-speed',
      },
      {
        name: 'Latency',
        path: '/latency',
      },
      {
        name: 'Jitter',
        path: '/jitter',
      },
    ],
  },
  {
    name: 'Speed Test',
    path: '/speedtest',
    subItems: [],
  },
  {
    name: 'Devices',
    path: '/devices',
    subItems: [],
  },
] as const;
