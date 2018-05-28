const proxies = [
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


function proxiedFetch(requestUrl, proxyList = proxies) {
    
    const requestData = {
        headers: {
            'X-Requested-With': 'XMLHttpRequest'
        }
    };

    const requestPromises = proxyList.map(({url, setHeaders}) => fetch(`${url}${requestUrl}`, setHeaders ? requestData : null ));

    return Promise.race(requestPromises);

}

export default proxiedFetch;
