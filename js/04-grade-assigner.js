let score =parseInt( prompt('Enter a score between 1 and 100: '));
if (score < 1 || score > 100){window.alert('Only numbers between 1 and 100 are accepted');}
else if(score<60) {window.console.log('You received an F');}
else if(score >= 60 && score <=69){window.console.log('You received an D');}
else if(score >= 70 && score <=79){window.console.log('You received an C');}
else if(score >= 80 && score <=89){window.console.log('You received an B');}
else if(score >= 90 && score <=100){window.console.log('You received an A');}