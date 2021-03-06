let button_array = [];
for (let key in buttons) {
    let val = buttons[key], order,
        empty_button = '<button class="button" onclick="submitAnswer(%INDEX%, %MODIFIER%)" style="background-color: %BACKGROUND%">%TEXT%</button>';
    for (var sub_key in val) {
        var sub_val = val[sub_key];
        switch (sub_key) {
            case "modifier":
                empty_button = empty_button.replace("%MODIFIER%", sub_val);
                break;
            case "color":
                empty_button = empty_button.replace("%BACKGROUND%", sub_val);
                break;
            case "text":
                empty_button = empty_button.replace("%TEXT%", sub_val);
                break;
            case "order":
                order = sub_val;
                break;
            case "function":
                empty_button = empty_button.replace("onclick", "usmfak").replace(')"', ')" onclick="arrayPop()"');
                break;
        }
    }
    button_array[order] = empty_button;
}

questions.forEach(function (question, index) {
    var questionIndexTitle = "question_" + index;
    _("@").append('<div class="q_hidden" sv="' + questionIndexTitle + '"></div>');
    _("$" + questionIndexTitle).append('<p class="question">' + question.question + '</p>');
    _("$" + questionIndexTitle).append('<p class="description">' + question.description + '</p>');
    _("$" + questionIndexTitle).append('<div sv="buttons_' + questionIndexTitle + '" class="buttoncontainer"></div>');
    button_array.forEach(function (element) {
        element = element.replace("%INDEX%", index);
        _("$buttons_" + questionIndexTitle).append(element);
    });
});

let pointer = 1;
let scoresplus = {}, scoresminus = {};
axes.forEach(function (element) {
    scoresplus[element.key] = 0;
    scoresminus[element.key] = 0;
});

function submitAnswer(index, mod) {
    for (var key in questions[index].effect) {
        var val = questions[index].effect[key];
        if ((val * mod) > 0) Math.floor(scoresplus[key] += Math.abs(val * mod));
        else scoresminus[key] += Math.floor(Math.abs(val * mod));
    }
    _("$question_" + index).class("q q_hiding");
    setTimeout(function () {
        _("$question_" + index).class("q q_hidden");
        if ((index + 1) == questions.length) finish();
        else _("$question_" + parseInt(index + 1)).class("q q_shown");
    }, 400);
    pointer++;
    _("$qn").html(pointer);
    arrayPush(questions[index].effect, mod);
}

var previousAnswers = [];

function arrayPush(modifier, mod) {
    modifier.mod = mod;
    previousAnswers.push(modifier);
}

function arrayPop() {
    if (pointer === 1) return;
    var toUndo = previousAnswers[previousAnswers.length - 1];
    previousAnswers.pop();
    for (var key in toUndo) {
        var val = toUndo[key];
        if ((val * toUndo.mod) > 0) scoresplus[key] -= Math.abs(val * toUndo.mod);
        else scoresminus[key] -= Math.abs(val * toUndo.mod);
    }
    _("$question_" + parseInt(pointer - 1)).class("q q_hiding");
    setTimeout(function () {
        _("$question_" + parseInt(pointer)).class("q q_hidden");
        _("$question_" + parseInt(pointer - 1)).class("q q_shown");
    }, 400);
    pointer--;
}

function finish() {
    window.location.href = "results.html?p=" + JSON.stringify(scoresplus) + "&n=" + JSON.stringify(scoresminus);
}

_("$question_0").class("q q_shown");
setTimeout(function () {
    _("$qt").html(questions.length);
}, 100);