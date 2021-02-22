let coinFlip = Math.round(Math.random());
let choice=(prompt('Select Heads or Tails: ')).toLowerCase();
if (coinFlip<1){
    if (choice==='heads'){
        window.alert('The flip was Heads and you chose Heads...you win!');
    }else{
        window.alert('The flip was Heads but you chose Tails...you lose!');
    }
}
else{
    if (choice==='tails'){
        window.alert('The flip was Tails and you chose Tails...you win!');
    }else{
        window.alert('The flip was Tails but you chose Heads...you lose!');
    }
}
