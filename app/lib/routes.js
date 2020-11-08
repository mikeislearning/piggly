Router.configure({
	layoutTemplate: 'MasterLayout',
	loadingTemplate: 'loading',
	notFoundTemplate: 'notfound'
});

Router.route('/', {
  name: 'home',
  controller: 'HomeController',
  where: 'client'
});


Router.route('/settings', {
  name: 'settings',
  where: 'client'
});

Router.route('/intro', {
  name: 'intro',
  where: 'client'
});

Router.route('/balances', {
  name: 'balances',
  where: 'client'
});