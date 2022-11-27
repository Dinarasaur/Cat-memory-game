const cards= document.querySelectorAll('.card');
let locked=false;
let flippedCard = false;
let firstSelection, secondSelection;

const flipCard =event =>{
   if(locked) return;

   const target = event.target.parentElement;

   if (target === firstSelection) return;
   target.classList.add('visible');
   
   if(!flippedCard){
    flippedCard =true;
    firstSelection = target;
    
    return;
}
    flippedCard =false;
    secondSelection = target;

    ifMatched();

};

function ifMatched (){
    let match = firstSelection.dataset.cat === secondSelection.dataset.cat;
    match ? disabledCards() : unflipCards();
}
function disabledCards (){
    firstSelection.removeEventListener('click', flipCard);
    secondSelection.removeEventListener('click', flipCard);
}

function unflipCards(){
        locked=true;

    setTimeout(()=>{
        firstSelection.classList.remove('visible');
        secondSelection.classList.remove('visible');

        resetAll();
        },1500); 
};

cards.forEach(card => {
    card.addEventListener('click', flipCard);
    const randomIdx= Math.floor(Math.random () * cards.length);
    card.style.order = randomIdx;
});

const resetAll =()=>{
    flippedCard = locked = false;
    firstSelection = secondSelection = null;
};


