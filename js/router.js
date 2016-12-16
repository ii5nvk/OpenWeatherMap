define("router", ['controller'], controller => ({
    handle: id => {
        controller.weatherRoute(id);
    }
}));