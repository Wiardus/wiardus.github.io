const visitors = document.getElementById('visitors');
let count = 0;

function countVisitors () {
    count ++;
    visitors.innerHTML += count;
}

