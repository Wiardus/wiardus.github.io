function countVisitors () {
    const visitors = document.getElementById('visitors');
    let count = 0 + localStorage.getItem('count');
    count ++;
    localStorage.setItem('count', count)
    visitors.innerHTML += count    
}

