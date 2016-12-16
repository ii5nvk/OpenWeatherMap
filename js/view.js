define("view", [], () => ({
    render: function(templateName, model) {
        templateName = `${templateName}Template`;
        let templateElement = document.getElementById(templateName),
            templateSource = templateElement.innerHTML,
            renderFn = Handlebars.compile(templateSource);
        return renderFn(model);
    }
}));