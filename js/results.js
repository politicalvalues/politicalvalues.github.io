var parameters = new URLSearchParams(window.location.search);
var scoresplus = JSON.parse(parameters.get("p"));
var scoresminus = JSON.parse(parameters.get("n"));

var results =
    {
        "positive": {},
        "negative": {},
    }

axes.forEach(function (axis) {
    _("#ncont").append('<div sv="container_' + axis.key + '"></div>');
    _("$container_" + axis.key).append('<p class="text"><sect id="m_' + axis.key + '">%NEGATIVE%-%POSITIVE% Axis:</sect> <br> <sect id="t_' + axis.key + '"></sect></p>');
    _("$container_" + axis.key).append('<div class="result_bar"><div class="bar_left" id="l_bar_' + axis.key + '"></div><div class="bar_right" id="r_bar_' + axis.key + '"></div></div>');
    document.getElementById("l_bar_" + axis.key).style.backgroundColor = axis.colors.negative;
    document.getElementById("r_bar_" + axis.key).style.backgroundColor = axis.colors.positive;
    results.positive[axis.key] = Math.floor((scoresplus[axis.key] / scoresminus[axis.key]) / ((scoresplus[axis.key] / scoresminus[axis.key]) + (scoresminus[axis.key] / scoresplus[axis.key])) * 100);
    results.negative[axis.key] = 100 - results.positive[axis.key];
    document.getElementById("l_bar_" + axis.key).style.width = results.negative[axis.key] + "%";
    document.getElementById("r_bar_" + axis.key).style.width = results.positive[axis.key] + "%";
    if (results.positive[axis.key] >= results.negative[axis.key]) _("#t_" + axis.key).html("<b>" + results.positive[axis.key] + "%</b> " + axis.titles.positive);
    else _("#t_" + axis.key).html("<b>" + results.negative[axis.key] + "%</b> " + axis.titles.negative);
    _("#m_" + axis.key).html(_("#m_" + axis.key).html().replace("%NEGATIVE%", axis.titles.negative).replace("%POSITIVE%", axis.titles.positive));
});