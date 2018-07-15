(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
    typeof define === 'function' && define.amd ? define(factory) :
    (global.proxiedFetch = factory());
}(this, (function () { 'use strict';

    var proxies = [
        {
            url: 'https://cors.io/?',
            setHeaders: false
        },
        // {
        //     url: 'https://thingproxy.freeboard.io/fetch/',
        //     setHeaders: false
        // },
        {
            url: 'https://cors-anywhere.herokuapp.com/',
            setHeaders: true
        },
        // {
        //     url: 'https://cors.now.sh/',
        //     setHeaders: false
        // }
    ];


    function proxiedFetch(requestUrl, proxyList) {
        
        proxyList = proxyList || proxies;

        var requestPromises = proxyList.map(function(proxy) {

            var proxyUrl = proxy.url,
                setHeaders = proxy.setHeaders,
                url = proxyUrl + requestUrl;

            return fetch(url, setHeaders ? {headers: {'X-Requested-With': 'XMLHttpRequest'}} : null);
        });

        return Promise.race(requestPromises);

    }

    return proxiedFetch;

})));
