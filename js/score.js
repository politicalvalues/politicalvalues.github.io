/**
 * |--------------|-----------------|
 * | name         | score.js        |
 * |--------------|-----------------|
 * | function     | jQuery-like lib |
 * |              | designed for    |
 * |              | easy js dev.    |
 * |--------------|-----------------|
 * | release date | June 25th, 2020 |
 * |--------------|-----------------|
 * | author       | colin robertson |
 * |--------------|-----------------|
 */

"use strict";
const U = void 0, _ = function (t) {
    const s = new E(t);
    return s.I(), s
}, E = function (t) {
    this._S = t || null, this._E = null
};
E.prototype.I = function () {
    switch (this._S.charAt(0)) {
        case".":
            this._E = document.getElementsByClassName(this._S.substr(1));
            break;
        case"#":
            this._E = document.getElementById(this._S.substr(1));
            break;
        case"$":
            this._E = document.querySelector('[sv="' + this._S.substr(1) + '"]');
            break;
        case"@":
            this._E = document.body;
            break;
        default:
            this._E = document[this._S]
    }
    this._E === U && console.error('Error in score.js/_.js: No element(s) could be found matching the query for "' + this._S + '"')
};
const storage = window.localStorage, Cookies = {
    d_json: {
        "score.js_version": {value: "1.0.0", parameters: {expiration: -1}},
        "score.js_cced": {value: 2e3, parameters: {expiration: -1}},
        "score.js_csce": {value: !0, parameters: {expiration: -1}}
    },
    json: {
        "score.js_version": {value: "1.0.0", parameters: {expiration: -1}},
        "score.js_cced": {value: 2e3, parameters: {expiration: -1}},
        "score.js_csce": {value: !0, parameters: {expiration: -1}}
    },
    set: function (e, o, n) {
        this.json[e] = {value: o, parameters: null == n ? {expiration: -1} : n}
    },
    get: function (e) {
        return this.json[e].value
    },
    getParams: function (e) {
        return this.json[e].parameters
    },
    getAll: function (e) {
        return this.json[e]
    },
    remove: function (e) {
        delete this.json[e]
    },
    setExpiration: function (e, o) {
        this.json[e].parameters.expiration = o
    },
    checkExpire: function (e) {
        if (this.json["score.js_csce"].value && this.json[e].hasOwnProperty("parameters") && this.json[e].parameters.hasOwnProperty("expiration")) {
            let o = this.json[e].parameters.expiration;
            Date.now() > o && -1 != o && this.remove(e)
        }
    },
    getExpiration: function (e) {
        return this.json[e].parameters.expiration
    },
    Expiration: {
        enable: function () {
            Cookies.json["score.js_csce"].value = !0, Cookies.expirationChecker = setInterval(function () {
                Cookies.expirationCheck()
            }, Cookies.json["score.js_cced"].value)
        }, disable: function () {
            Cookies.json["score.js_csce"] = !1, clearInterval(Cookies.expirationChecker)
        }
    },
    expirationCheck: function () {
        for (let e in this.json) this.checkExpire(e)
    },
    expirationChecker: null,
    load: function () {
        const e = JSON.parse(storage.getItem("score.js"));
        Cookies.json = null == e ? Cookies.d_json : e
    },
    save: function () {
        storage.setItem("score.js", JSON.stringify(Cookies.json))
    },
    clear: function () {
        storage.removeItem("score.js")
    },
    autosaver: setInterval(function () {
        Cookies.save()
    }, 15e3)
};

function msFromNow(e) {
    return Date.now() + e
}

function millisecondsFromNow(e) {
    return msFromNow(e)
}

function secondsFromNow(e) {
    return millisecondsFromNow(1e3 * e)
}

function minutesFromNow(e) {
    return secondsFromNow(60 * e)
}

function hoursFromNow(e) {
    return minutesFromNow(60 * e)
}

function daysFromNow(e) {
    return hoursFromNow(24 * e)
}

function weeksFromNow(e) {
    return daysFromNow(7 * e)
}

function monthsFromNow(e) {
    return weeksFromNow(4 * e)
}

function yearsFromNow(e) {
    return monthsFromNow(12 * e)
}

function never() {
    return -1
}

window.addEventListener("load", function (e) {
    Cookies.load()
}), window.addEventListener("beforeunload", function (e) {
    Cookies.save()
}), Cookies.expirationChecker = setInterval(function () {
    Cookies.expirationCheck()
}, Cookies.json["score.js_cced"].value);
E.prototype.class = function (t) {
    if (t === U) return this._E.className;
    this._E.className = t
}, E.prototype.addClass = function (t) {
    t !== U ? this._E.classList.add(t) : console.error("Error in score.js/dom.css.js - can't add a class which is undefined.")
}, E.prototype.removeClass = function (t) {
    t !== U ? this._E.classList.remove(t) : console.error("Error in score.js/dom.css.js - can't remove a class which is undefined.")
}, E.prototype._fade = function (t, s, o) {
    isNaN(parseFloat(o.style.opacity)) && (o.style.opacity = Math.abs(s - 1).toString());
    const e = 4 * (parseFloat(o.style.opacity) - s),
        a = setInterval(function () {
            o.style.opacity = (parseFloat(o.style.opacity) - e / t).toString()
        }, e / t);
    setTimeout(function () {
        clearInterval(a), o.style.opacity = s
    }, t)
}, E.prototype.fadeOut = function (t) {
    this._fade(t, 0, this._E)
}, E.prototype.fadeIn = function (t) {
    this._fade(t, 1, this._E)
}, E.prototype.fadeTo = function (t, s) {
    s = s > 1 ? s / 100 : s, this._fade(t, s, this._E)
};
E.prototype.on = function (t, n) {
    this.eventBinderObject.bind(t, this._E, n)
}, E.prototype.click = function (t) {
    this.on("click", t)
}, E.prototype.updated = function (t) {
    this.on("change", t)
}, E.prototype.redirect = function (t) {
    this.on("click", function () {
        window.location.href = "/" + t
    })
}, E.prototype.onLoad = function (t) {
    this.on("load", t)
}, E.prototype.load = function (t) {
    this.on("load", t)
}, E.prototype.off = function (t) {
    this.eventBinderObject.unbind(t, this._E)
}, E.prototype.eventBinderObject = {
    events: [], bind: function (t, n, e) {
        this.unbind(t, n), n.addEventListener(t, e, !1), this.events.push({
            eventType: t,
            eventCallback: e,
            eventElement: n
        })
    }, fetch: function (t, n) {
        return this.events.filter(function (e) {
            return t === e.eventType && n === e.eventElement
        }, t)[0]
    }, unbind: function (t, n) {
        this.fetch(t, n) !== U && n.removeEventListener(t, this.fetch(t, n).eventCallback)
    }
};
E.prototype.remove = function () {
    this._E.outerHTML = ""
}, E.prototype.outerHTML = function (t) {
    if (t === U) return this._E.outerHTML;
    this._E.outerHTML = t
}, E.prototype.innerHTML = function (t) {
    if (t === U) return this._E.innerHTML;
    this._E.innerHTML = t
}, E.prototype.append = function (t) {
    t !== U && (this._E.innerHTML = this._E.innerHTML + t)
}, E.prototype.prepend = function (t) {
    t !== U && (this._E.innerHTML = t + this._E.innerHTML)
}, E.prototype.appendScript = function (t) {
    t !== U ? document.body.innerHTML += `<script src=${t}"><\/script>` : console.error("Error in score.js/dom.man.js: Could not append a nonexistent script.")
}, E.prototype.addScript = function (t) {
    this._E.appendScript(t)
}, E.prototype.appendStyle = function (t) {
    t !== U ? document.head.innerHTML += `<link rel="stylesheet" href="${t}"` : console.error("Error in score.js/dom.man.js: Could not append a nonexistent style.")
}, E.prototype.addStyle = function (t) {
    this._E.appendStyle(t)
};
E.prototype.value = function (t) {
    if (t === U) return this._E.value;
    this._E.value = t
}, E.prototype.html = function (t) {
    if (t === U) return this._E.innerHTML;
    this._E.innerHTML = t
}, E.prototype.show = function () {
    this._E.style.display = "block"
}, E.prototype.hide = function () {
    this._E.style.display = "none"
}, E.prototype.attribute = function (t, i) {
    if (t !== U) {
        if (i === U) return this._E[t];
        this._E[t] = i
    }
};