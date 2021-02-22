
$(function() {
    // show percent complete on index pages
    $('.clesson .colles').each((_, e) => {
        var lid = parseInt($('.ncolles p', e).text());
        var states = (function() {
            try { return JSON.parse(localStorage.getItem("lr_lesson_" + lid)) || {}; }
            catch {}
            return ({});
        })();
        console.log(lid, states);
        var com=Math.round(100 * Object.values(states).filter(x => x).length / Object.keys(states).length) || 0;
        console.log({com})
        $('.completed p', e).html(com+'%');
    })
});
