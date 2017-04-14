define(['plugins/router'], function (router) {
    return {
        router: router,
        activate: function () {
            return router.map([

                { route: '',    moduleId: 'home/index',    title: 'Home',      nav: false}
                
            
            ]).buildNavigationModel()
              .mapUnknownRoutes('home/index', 'not-found')
              .activate();
        }
    };
});