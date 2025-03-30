const ROUTES = {
  HOME: '/',
  LOGIN: '/login',
  SIGNUP: '/signup',
  MY_DASHBOARD: '/mydashboard',
  MYPAGE: '/mypage',

  DASHBOARD: {
    root: (dashboardId: number) => `/dashboard/${dashboardId}`,
    edit: (dashboardId: number) => `/dashboard/${dashboardId}/edit`,
  },
};

export default ROUTES;
