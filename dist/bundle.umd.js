(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
    typeof define === 'function' && define.amd ? define(factory) :
    (global.proxiedFetch = factory());
}(this, (function () { 'use strict';

    var proxies = [
        'https://cors.io/?',
        // 'https://thingproxy.freeboard.io/fetch/'
        {
            url: 'https://cors-anywhere.herokuapp.com/',
            headers: {'X-Requested-With': 'XMLHttpRequest'}
        },
        // 'https://cors.now.sh/'
    ];


    function proxiedFetch(requestUrl, proxyList) {
        
        proxyList = proxyList || proxies;

        var requestPromises = proxyList.map(function(proxy) {

            var proxyUrl = proxy.url || proxy,
                headers = proxy.headers,
                finalUrl = proxyUrl + requestUrl;

            return fetch(finalUrl, headers ? {headers} : null);
        });

        return Promise.race(requestPromises);

    }

    return proxiedFetch;

})));
