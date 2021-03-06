import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('new');
  this.route('top');
  this.route('item', { path: '/:item_id' });
});

export default Router;
