const btnPlay = document.getElementById('btn-play');
const container = document.querySelector('.container-box');
const select = document.getElementById('difficulty');
const arrFake = [];

function grid (max){

    for (let i = 1; i <= max; i++) {
        let item = document.createElement('div');
        item.classList.add('box');
        item.innerHTML = i;
        container.append(item);
        
        if(max == 100) {
            item.classList.add('easy')
        } else if (max == 81) {
            item.classList.add('medium');
        } else {
            item.classList.add('hard');
        }

        item.addEventListener('click', function(){
            this.classList.add('bk-color');
        })
    }
    
}

btnPlay.addEventListener('click', function() {
    container.innerHTML = '';
    
    if(select.value == 'easy'){
        grid(100);
    } else if(select.value == 'medium') {
        grid(81);
    } else if(select.value == 'hard') {
        grid(49);
    }
})

function randomNumber(min, max) {
    while (arrFake.length < 16) {
        let arrRandom = Math.floor(Math.random() * (max - min + 1) + min);
        if (arrFake.indexOf(arrRandom) === -1) arrFake.push(arrRandom);
        console.log(arrFake)
    }
}

randomNumber(1, 100)
