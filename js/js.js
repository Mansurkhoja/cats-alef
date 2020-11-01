'use strict'
const sortDrop = document.getElementById('sortdrop');
const dropdown = sortDrop.querySelectorAll('.dropdown');
const select = document.getElementsByClassName('select');
const selected = document.querySelectorAll('.selected');


// dropdown
function closeAllDrop() {
    dropdown.forEach(element => {
        element.classList.remove('open');
    });
};
for (let i = 0; i < dropdown.length; i++) {

    dropdown[i].addEventListener('click', () => {

        if (dropdown[i].classList.contains('open')) {
            dropdown[i].classList.remove('open')
        } else {
            closeAllDrop()
            dropdown[i].classList.add('open')
        };

    })
};
window.addEventListener('click', function(e) {
    if (e.target.closest('.dropdown') === null) {
        closeAllDrop()
    }
});

//selected inner
function selectHodeShow(e) {
    selected.forEach(element => {
        element.classList.remove('show');
    })
    let parent = e.currentTarget.parentNode.parentNode;
    parent.querySelector('.selected').textContent = e.currentTarget.textContent;
    parent.querySelector('.selected').classList.add('show');
}
for (let m = 0; m < select.length; m++) {
    select[m].addEventListener('click', selectHodeShow);
};

//Sort
const items = document.querySelector('.cat-items');
const priceByDecrease = document.getElementById('priceDecrease');
const priceByIncrease = document.getElementById('priceIncrease');
const ageByDecrease = document.getElementById('ageDecrease');
const ageByIncrease = document.getElementById('ageIncrease');

priceByDecrease.addEventListener('click', function() {
    sortDecrease("data-price");
});
priceByIncrease.addEventListener('click', function() {
    sortIncrease("data-price");
});
ageByDecrease.addEventListener('click', function() {
    sortDecrease("data-age");
});
ageByIncrease.addEventListener('click', function() {
    sortIncrease("data-age");
});

function sortDecrease(dataType) {
    for (let i = 0; i < items.children.length; i++) {
        for (let m = i; m < items.children.length; m++) {
            if (+items.children[i].getAttribute(dataType) > +items.children[m].getAttribute(dataType)) {
                let replace = items.replaceChild(items.children[m], items.children[i]);
                console.log(items.children[i].parentNode);
                insertAfter(replace, items.children[i]);
            }
        }
    }
}

function sortIncrease(dataType) {
    for (let i = 0; i < items.children.length; i++) {
        for (let m = i; m < items.children.length; m++) {
            if (+items.children[i].getAttribute(dataType) < +items.children[m].getAttribute(dataType)) {
                let replace = items.replaceChild(items.children[m], items.children[i]);
                console.log(items.children[i].parentNode);
                insertAfter(replace, items.children[i]);
            }
        }
    }
}

function insertAfter(el, chEl) {
    return chEl.parentNode.insertBefore(el, chEl.nextSibling);
}
//Burger
const burger = document.getElementById('burger');
const menu = document.getElementById('menu');
const body = document.body;
burger.addEventListener('click', function() {
    menu.classList.toggle('open');
    if (menu.classList.contains('open')) {
        body.classList.add('hide');
    } else {
        body.classList.remove('hide');
    }
});

// Validation
const submit = document.getElementById('email-submit');
const email = document.getElementById('email');
submit.addEventListener('blur', function() {

    let value = this.value;
    let check;

    if (check = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(value)) {
        email.classList.remove('invalid');
        email.classList.add('valid');

    } else {
        email.classList.remove('valid');
        email.classList.add('invalid');
    }

});
// for srollTop
let moveTop = document.getElementById('movetop')
moveTop.addEventListener('click', function() {
    window.scrollTo(0, 0);
})
let scroltop = function() {
    if (document.body.scrollTop > 44 || document.documentElement.scrollTop > 44) {
        document.getElementById('movetop').style.display = "flex";
    } else {
        document.getElementById('movetop').style.display = "none";
    }
};
window.addEventListener('load', scroltop, false);
window.addEventListener('scroll', scroltop, false);
window.addEventListener('resize', scroltop, false);