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
export default proxiedFetch;