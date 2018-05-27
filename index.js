const proxies = [
    {
        url: 'https://cors.io/?',
        useOrigin: false
    },
    {
        url: 'https://thingproxy.freeboard.io/fetch/',
        useOrigin: false
    },
    {
        url: 'https://cors-anywhere.herokuapp.com/',
        useOrigin: true
    },
    {
        url: 'https://cors.now.sh/',
        useOrigin: false
    }
];


function proxiedFetch(requestUrl, proxyList = proxies) {
    
    const { origin } = new URL(requestUrl);
    const headersData = {
        headers: {
            origin,
            method: 'POST'
        }
    };

    const requestPromises = proxyList.map(({url, useOrigin}) => fetch(`${url}${requestUrl}`, useOrigin ? headersData : null ));

    return Promise.race(requestPromises);

}

export default proxiedFetch;