/**
 * Describes all app navigation items used to render the
 * navigation buttons and determine the URL path
 */
export const appNavItems = [
  {
    name: 'Overview',
    path: '/overview',
    subItems: [
      {
        name: 'Speed',
        path: '/overview/speed',
      },
      {
        name: 'Latency',
        path: '/overview/latency',
      },
      {
        name: 'Jitter',
        path: '/overview/jitter',
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
