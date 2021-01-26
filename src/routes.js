import HomeContainer from './containers/HomeContainer';
import AboutContainer from './containers/AboutContainer';
import NotFoundContainer from './containers/DefaultRouteContainer';
import PanelLeftContainer from './containers/PanelLeftContainer';

export default [
  {
    path: '/',
    component: HomeContainer,
  },
  {
    path: '/panel-left/',
    panel: {
      component: PanelLeftContainer,
    },
  },
  {
    path: '/about/',
    component: AboutContainer,
  },
  {
    path: '(.*)',
    component: NotFoundContainer,
  },
];
