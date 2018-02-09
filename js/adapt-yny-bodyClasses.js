define([
    'coreJS/adapt'
], function (Adapt) {

    var $body = $('body');
    var className = '';

    Adapt.on('pageView:preRender', function (view) {
        if (view.model.has('_bodyClasses')) {
            className = view.model.get('_bodyClasses');
            $body.addClass(className);
        }
    });

    Adapt.on('remove', function () {
        if (className.length) {
            $body.removeClass(className);
        }
    });

});
