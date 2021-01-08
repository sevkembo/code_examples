"use strict";
var _ul=document.getElementsByClassName('list__item');
var listView = document.getElementsByClassName('list-view')[0];
var price = document.getElementsByClassName('price')[0];
var twixPastaSpan = document.getElementsByClassName('twix-pasta-count')[0];
var twixPastaCount = document.getElementsByClassName('twix-pasta').length;

for (let item of _ul) {
    item.onclick = function(event) {
        if (listView.classList.contains('active')) {
            listView.classList.remove('active');
            listView.removeChild(listView.firstChild);
            price.removeChild(price.firstChild);
            price.style.display = "none";
        }
        if (listView.firstChild) {
            // listView.classList.remove('active');
            listView.removeChild(listView.firstChild);
            price.removeChild(price.firstChild);
            listView.append(event.target.cloneNode(true));
            price.style.display = "inline-block";
            price.append(item.getAttribute('value') + ' euro');
        }
        else {
            listView.classList.add('active');
            listView.append(event.target.cloneNode(true));
            price.style.display = "inline-block";
            price.append(item.getAttribute('value') + ' euro');
            console.log(event.target);
        }
    }
};

twixPastaSpan.append(twixPastaCount);











