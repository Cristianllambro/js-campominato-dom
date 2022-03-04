const btnPlay = document.getElementById('btn-play');
const container = document.querySelector('.container-box');
const select = document.getElementById('difficulty');
const output = document. getElementById('output');


//main game function
function grid (max){

    for (let i = 1; i <= max; i++) {
        let item = document.createElement('div');
        item.classList.add('box');
        item.innerHTML = i;
        container.append(item);
        output.innerHTML = '';
        score = 0;
        

        //creation three difficulty
        if(max == 100) {
            item.classList.add('easy');
        } else if (max == 81) {
            item.classList.add('medium');
        } else {
            item.classList.add('hard');
        }

        // creation class score + lose
        item.addEventListener('click', function(){
            itemNumber = parseInt(this.innerHTML);
            
            if (arrFake.includes(itemNumber)){
                this.classList.add('bk-red');
            } else {
                this.classList.add('bk-color');
                score++;
            }
            
            if (score == item) {
                output.innerHTML = 'Hai perso, il tuo punteggio è: ' + score;
                const cell = document.querySelectorAll('.box');

            }
        })
    }
}


//button create grid for difficulty
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

//function number random red
const arrFake = [];
function randomNumber(max) {

    for(let i = 1; i <= 16; i++) {
        let arrRandom = Math.floor(Math.random() * max + 1);
    
        while (arrFake.includes(arrRandom)) {
            arrRandom = Math.floor(Math.random() * max + 1);
        }
        arrFake.push(arrRandom);
        console.log(arrFake)
    } 
}

randomNumber(100);
// randomNumber(81);
// randomNumber(49);











// do {
//     let arrRandom = Math.floor(Math.random() * max + 1);
// } while (arrFake.length < 16) {
//     arrFake.includes(arrRandom);
//     arrFake.push(arrRandom);
// }



// while (arrFake.length < 16) {
//     let arrRandom = Math.floor(Math.random() * max + 1);
//     if (arrFake.indexOf(arrRandom) === -1) arrFake.push(arrRandom);
//     console.log(arrFake)
// }

