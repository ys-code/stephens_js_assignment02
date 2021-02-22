let play=(prompt('Are  you ready to play ? \( yes or no \)')).toLowerCase();
if (play ==='yes'){
    window.alert('You are in a dark, dingy, and humid cave searching for the lost treasure of Captain Chingadera. You are disoriented, lost, hungry and extremely thirsty. You see a speck of light in the distance ahead of you, something shimmering to your right, and the sound of running water to your left. Your back is against the wall.');
    let direction = (prompt('Which direction would you like to head (\please enter forward, left, or right)\.')).toLowerCase();
    switch(direction){
        case 'left':
            window.alert('has gotten the better of you. You trip on a rock, hit your head, and fall into a pool of water and drown!');
            break;
        case 'forward':
            window.alert('You walk 100 yards and safely make your way out of the cave.');
            break;
        case 'right':
            window.alert('You found the gold! You walk into a small room and see thousands of gold coins, jewels, chalices, and more. You jump into the pile of gold in celebration and immediately a hidden door slams down and traps you in the room forever!');
            break;
        default:
            window.alert('The ghost of Captain Chingadera has condemned you to eternal damnation and you shall now burn in the hot excoriation for lifeless lowlifes for not choosing the correct option.');
    }
}
else{
    window.alert('Thank you. Please come back soon.')

}
let rate= parseInt(prompt('Please rate the game between 1 and 10'));
if (rate <1 || rate>10){
    window.alert('Thank you for palying, Bey.');
}else if(rate>=6 && rate<=10){
    window.alert('Than you for playing. Let\'s play again.');
}else if (rate>=1 && rate<=5){
    window.alert('Thank you for playing. We are working hard to improve the game.');
}