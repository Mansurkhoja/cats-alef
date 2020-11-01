if (window.NodeList && !NodeList.prototype.forEach) {
    NodeList.prototype.forEach = Array.prototype.forEach;
};
if (!Element.prototype.matches) {
    Element.prototype.matches =
        Element.prototype.msMatchesSelector ||
        Element.prototype.webkitMatchesSelector;
};
if (!Element.prototype.closest) {
    Element.prototype.closest = function(s) {
        var el = this;
        do {
            if (Element.prototype.matches.call(el, s)) return el;
            el = el.parentElement || el.parentNode;
        } while (el !== null && el.nodeType === 1);
        return null;
    };
};
//dropdown
var sortDrop = document.getElementById("sortdrop");
var dropdown = sortDrop.querySelectorAll(".dropdown");
var select = document.getElementsByClassName("select");
var selected = document.querySelectorAll(".selected"); // dropdown

function closeAllDrop() {
    dropdown.forEach(function(element) {
        element.classList.remove("open");
    });
}

var _loop = function _loop(i) {
    dropdown[i].addEventListener("click", function() {
        if (dropdown[i].classList.contains("open")) {
            dropdown[i].classList.remove("open");
        } else {
            closeAllDrop();
            dropdown[i].classList.add("open");
        }
    });
};

for (var i = 0; i < dropdown.length; i++) {
    _loop(i);
}

window.addEventListener("click", function(e) {
    if (e.target.closest(".dropdown") === null) {
        closeAllDrop();
    }
}); //selected inner

function selectHodeShow(e) {
    selected.forEach(function(element) {
        element.classList.remove("show");
    });
    var parent = e.currentTarget.parentNode.parentNode;
    parent.querySelector(".selected").textContent = e.currentTarget.textContent;
    parent.querySelector(".selected").classList.add("show");
}

for (var m = 0; m < select.length; m++) {
    select[m].addEventListener("click", selectHodeShow);
} //Sort

var items = document.querySelector(".cat-items");
var priceByDecrease = document.getElementById("priceDecrease");
var priceByIncrease = document.getElementById("priceIncrease");
var ageByDecrease = document.getElementById("ageDecrease");
var ageByIncrease = document.getElementById("ageIncrease");
priceByDecrease.addEventListener("click", function() {
    sortDecrease("data-price");
});
priceByIncrease.addEventListener("click", function() {
    sortIncrease("data-price");
});
ageByDecrease.addEventListener("click", function() {
    sortDecrease("data-age");
});
ageByIncrease.addEventListener("click", function() {
    sortIncrease("data-age");
});

function sortDecrease(dataType) {
    for (var _i = 0; _i < items.children.length; _i++) {
        for (var _m = _i; _m < items.children.length; _m++) {
            if (+items.children[_i].getAttribute(dataType) >
                +items.children[_m].getAttribute(dataType)
            ) {
                var replace = items.replaceChild(
                    items.children[_m],
                    items.children[_i]
                );
                console.log(items.children[_i].parentNode);
                insertAfter(replace, items.children[_i]);
            }
        }
    }
}

function sortIncrease(dataType) {
    for (var _i2 = 0; _i2 < items.children.length; _i2++) {
        for (var _m2 = _i2; _m2 < items.children.length; _m2++) {
            if (+items.children[_i2].getAttribute(dataType) <
                +items.children[_m2].getAttribute(dataType)
            ) {
                var replace = items.replaceChild(
                    items.children[_m2],
                    items.children[_i2]
                );
                console.log(items.children[_i2].parentNode);
                insertAfter(replace, items.children[_i2]);
            }
        }
    }
}

function insertAfter(el, chEl) {
    return chEl.parentNode.insertBefore(el, chEl.nextSibling);
} //Burger

var burger = document.getElementById("burger");
var menu = document.getElementById("menu");
var body = document.body;
burger.addEventListener("click", function() {
    menu.classList.toggle("open");

    if (menu.classList.contains("open")) {
        body.classList.add("hide");
    } else {
        body.classList.remove("hide");
    }
}); // Validation

var submit = document.getElementById("email-submit");
var email = document.getElementById("email");
submit.addEventListener("blur", function() {
    var value = this.value;
    var check;

    if (
        (check = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(
            value
        ))
    ) {
        email.classList.remove("invalid");
        email.classList.add("valid");
    } else {
        email.classList.remove("valid");
        email.classList.add("invalid");
    }
});
// for srollTop

var moveTop = document.getElementById("movetop");
moveTop.addEventListener("click", function() {
    window.scrollTo(0, 0);
});

var scroltop = function scroltop() {
    if (document.body.scrollTop > 44 || document.documentElement.scrollTop > 44) {
        document.getElementById("movetop").style.display = "flex";
    } else {
        document.getElementById("movetop").style.display = "none";
    }
};

window.addEventListener("load", scroltop, false);
window.addEventListener("scroll", scroltop, false);
window.addEventListener("resize", scroltop, false);