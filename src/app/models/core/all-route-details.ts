export const ALL_ROUTINGS: RouteDetails[] = [
  { routingUrl: 'dashboard', pageName: 'Dashboard' },
  { routingUrl: 'user-profile', pageName: 'User Profile' },
  { routingUrl: 'advertising', pageName: 'Advertising' },
  { routingUrl: 'pet-shop-advertising', pageName: 'Pet Shop' },
  { routingUrl: 'advertisements', pageName: 'Advertisements' },
  { routingUrl: 'activities', pageName: 'Activities' },
  { routingUrl: 'appointments', pageName: 'Appointments' },
  { routingUrl: 'user-list', pageName: 'User' },
  { routingUrl: 'my-clinic', pageName: 'My Clinic' },
]

export class RouteDetails {
  routingUrl: string;
  pageName: string;
}

declare interface RouteInfo {
  path: string;
  title: string;
  icon: string;
  class: string;
  permissionLevel: number[];
}

export const ROUTES: RouteInfo[] = [
  { path: '/dashboard', title: 'Dashboard', icon: 'ni-tv-2 text-yellow', class: '', permissionLevel: [1, 2, 3] },
  { path: '/user-profile', title: 'User Profile', icon: 'ni-single-02 text-yellow', class: '', permissionLevel: [1, 2, 3] },
  { path: '/advertising', title: 'Advertising', icon: 'ni-bullet-list-67 text-yellow', class: '', permissionLevel: [1, 2, 3] },
  { path: '/pet-shop-advertising', title: 'Pet Shop', icon: 'ni-bullet-list-67 text-yellow', class: '', permissionLevel: [3] },
  { path: '/advertisements', title: 'Advertisements', icon: 'ni-app text-yellow', class: '', permissionLevel: [1, 2, 3] },
  { path: '/activities', title: 'Activities', icon: 'ni-bag-17 text-yellow', class: '', permissionLevel: [1, 2] },
  { path: '/appointments', title: 'Appointments', icon: 'ni-calendar-grid-58 text-yellow', class: '', permissionLevel: [2] },
  { path: '/user-list', title: 'User', icon: 'ni-laptop text-yellow', class: '', permissionLevel: [2] },
  { path: '/my-clinic', title: 'My Clinic', icon: 'ni-tv-2 text-yellow', class: '', permissionLevel: [2] }
];
