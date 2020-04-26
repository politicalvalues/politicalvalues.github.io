var scoresplus = JSON.parse(Cookies.get("scoresplus"));
var scoresminus = JSON.parse(Cookies.get("scoresminus"));

// for (var key in questions[index].effect)
//     {
//         var val = questions[index].effect[key];
//         if ((val * mod) > 0) scoresplus[key] += Math.abs(val * mod);
//         else scoresminus[key] += Math.abs(val * mod);
//     }

// "x": 0,
// "national": 0,
// "authoritarian": 0,
// "progressive": 0,
// "rev": 0,
// "central": 0,
// "production": 0,
// "cultural": 0,
// "state": 0,
// "religion": 0,
// "race": 0,

var axes =
{
    "x": 0,
    "national": 0,
    "authoritarian": 0,
    "progressive": 0,
    "rev": 0,
    "central": 0,
    "production": 0,
    "cultural": 0,
    "state": 0,
    "religion": 0,
    "race": 0,
}
var iaxes =
{
    "x": 0,
    "national": 0,
    "authoritarian": 0,
    "progressive": 0,
    "rev": 0,
    "central": 0,
    "production": 0,
    "cultural": 0,
    "state": 0,
    "religion": 0,
    "race": 0,  
}
var titles =
{
    "x":
    {
        "negative": "Liberal",
        "positive": "Conservative",
    },
    "national":
    {
        "negative": "Internationalist",
        "positive": "Nationalist",
    },
    "authoritarian":
    {
        "negative": "Libertarian",
        "positive": "Authoritarian",
    },
    "progressive":
    {
        "negative": "Progressive",
        "positive": "Traditional",
    },
    "rev":
    {
        "negative": "Revolutionary",
        "positive": "Reformist",
    },
    "central":
    {
        "negative": "Centralized",
        "positive": "Decentralized",
    },
    "production":
    {
        "negative": "Production",
        "positive": "Nature",
    },
    "cultural":
    {
        "negative": "Cultural",
        "positive": "Scientific",
    },
    "state":
    {
        "negative": "Communal",
        "positive": "Market",
    },
    "religion":
    {
        "negative": "Religious",
        "positive": "Scientific",
    },
    "race":
    {
        "negative": "Identity",
        "positive": "Equality",
    },
}

for (var key in axes)
{
    axes[key] = Math.floor((scoresplus[key] / scoresminus[key]) / ((scoresplus[key] / scoresminus[key]) + (scoresminus[key] / scoresplus[key])) * 100);
    iaxes[key] = 100 - axes[key];
    document.getElementById("l_bar_" + key).style.width = iaxes[key] + "%";
    document.getElementById("r_bar_" + key).style.width = axes[key] + "%";
    if (axes[key] >= iaxes[key]) _("#t_" + key).html("<b>" + axes[key] + "%</b> " + titles[key].positive);
    else _("#t_" + key).html("<b>" + iaxes[key] + "%</b> " + titles[key].negative);
}

// console.log(scoresplus);
// console.log(scoresminus);

// var x_axis = scoresplus.x / scoresminus.x;
// var x_axis_invert = scoresminus.x / scoresplus.x;
// var x_axis_total = x_axis + x_axis_invert;
// x_axis = x_axis / x_axis_total * 100;
// x_axis_invert = x_axis_invert / x_axis_total * 100;
// document.getElementById("x_axis_right").style.width = x_axis + "%";
// document.getElementById("x_axis_left").style.width = x_axis_invert + "%";

// var xat;
// if (x_axis_invert > 85) xat = "Incredibly Liberal"; // Incredibly liberal
// if (x_axis_invert < 85 && x_axis_invert > 70) xat = "Very Liberal"; // Very liberal
// if (x_axis_invert < 70 && x_axis_invert > 60) xat = "Liberal"; // Liberal
// if (x_axis > 85) xat = "Incredibly Conservative"; // Incredibly conservative
// if (x_axis < 85 && x_axis > 70) xat = "Very Conservative"; // Very conservative
// if (x_axis < 70 && x_axis > 60) xat = "Conservative"; // Conservative
// if (x_axis_invert < 60 && x_axis < 60) xat = "Central"; // Central
// document.getElementById("x_axis_title").innerHTML = xat;

// var authoritarian_axis = scoresplus.authoritarian / scoresminus.authoritarian;
// var authoritarian_axis_invert = scoresminus.authoritarian / scoresplus.authoritarian;
// var authoritarian_axis_total = authoritarian_axis + authoritarian_axis_invert;
// authoritarian_axis = authoritarian_axis / authoritarian_axis_total * 100;
// authoritarian_axis_invert = authoritarian_axis_invert / authoritarian_axis_total * 100;
// document.getElementById("authoritarian_axis_right").style.width = authoritarian_axis + "%";
// document.getElementById("authoritarian_axis_left").style.width = authoritarian_axis_invert + "%";

// var aat;
// if (authoritarian_axis_invert > 85) xat = "Incredibly Libertarian";
// if (authoritarian_axis_invert < 85 && authoritarian_axis_invert > 70) xat = "Very Libertarian";
// if (authoritarian_axis_invert < 70 && authoritarian_axis_invert > 60) xat = "Libertarian";
// if (authoritarian_axis > 85) xat = "Incredibly Authoritarian";
// if (authoritarian_axis < 85 && authoritarian_axis > 70) xat = "Very Authoritarian";
// if (authoritarian_axis < 70 && authoritarian_axis > 60) xat = "Authoritarian";
// if (authoritarian_axis_invert < 60 && authoritarian_axis < 60) xat = "Central";
// document.getElementById("authoritarian_axis_title").innerHTML = xat;