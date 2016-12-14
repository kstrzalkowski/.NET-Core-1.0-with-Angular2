/**
 * System configuration for Angular 2 samples
 * Adjust as necessary for your application needs.
 */
(function (global) {
    System.config({
        paths: {
            // paths serve as alias
            'lib:': 'lib/'
        },
        // map tells the System loader where to look for things
        map: {
            // our app is within the app folder
            app: 'app',
            // angular bundles
            '@angular/core': 'lib:@angular/core/bundles/core.umd.js',
            '@angular/core/testing': 'lib:@angular/core/bundles/core-testing.umd.js',
            '@angular/common': 'lib:@angular/common/bundles/common.umd.js',
            '@angular/compiler': 'lib:@angular/compiler/bundles/compiler.umd.js',
            '@angular/compiler/testing': 'lib:@angular/compiler/bundles/compiler-testing.umd.js',
            '@angular/platform-browser': 'lib:@angular/platform-browser/bundles/platform-browser.umd.js',
            '@angular/platform-browser/testing': 'lib:@angular/platform-browser/bundles/platform-browser-testing.umd.js',
            '@angular/platform-browser-dynamic': 'lib:@angular/platform-browser-dynamic/bundles/platform-browser-dynamic.umd.js',
            '@angular/platform-browser-dynamic/testing': 'lib:@angular/platform-browser-dynamic/bundles/platform-browser-dynamic-testing.umd.js',
            '@angular/http': 'lib:@angular/http/bundles/http.umd.js',
            '@angular/http/testing': 'lib:@angular/http/bundles/http-testing.umd.js',
            '@angular/router': 'lib:@angular/router/bundles/router.umd.js',
            '@angular/forms': 'lib:@angular/forms/bundles/forms.umd.js',
            // other libraries
            'rxjs': 'lib:rxjs',
            'angular2-google-maps': 'lib:angular2-google-maps',
            'angular2-localstorage': '/node_modules/angular2-localstorage',
            'ng2-charts': 'lib:ng2-charts',
            'angular2-notifications': 'lib:angular2-notifications',
            'ng2-file-upload': 'lib:ng2-file-upload'
        },
        // packages tells the System loader how to load when no filename and/or no extension
        packages: {
            app: {
                main: './main.js',
                defaultExtension: 'js'
            },
            rxjs: {
                defaultExtension: 'js'
            },
            'angular2-google-maps/core': {
                defaultExtension: 'js',
                main: 'index.js' // you can also use core.umd.js here, if you want faster loads
            },
            'angular2-localstorage': {
                defaultExtension: "js"
            },
            "ng2-charts": {
                main: 'ng2-charts.js',
                defaultExtension: "js"
            },
            'angular2-notifications': { 
                main: 'components.js', 
                defaultExtension: 'js' 
            },
            'ng2-file-upload': {
                main: 'index.js',
                defaultExtension: 'js'
            }
        }
    });
})(this);
