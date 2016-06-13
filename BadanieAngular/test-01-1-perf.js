var browserPerf = require('browser-perf');
browserPerf('http://localhost:63342/pracadyplomowa/AngularMechanizmy/test-01-1.html', function(err, res)
    {
        console.log('Scripting = ', res[0]['Javascript']);
        console.log('Rendering = ', res[0]['Layout'] + res[0]['Styles'] + res[0]['UpdateLayerTree']);
        console.log('Painting = ', res[0]['Paint'] + res[0]['CompositeLayers']);
    },
    {
        selenium: "http://localhost:4444/wd/hub",
        browsers: ["chrome"],
        actions: function(browser) {
            return browser.elementByCssSelector('.btn')
                .then(function(el) {
                    return el.click();
                })
                .then(function() {
                    return browser.elementById('update').then(function(el) {
                        return el.click();
                    })
                })
                .then(function() {
                    return browser.sleep(10000);
                });
        }
    }
);