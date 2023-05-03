
function calculateDamage(yourType, opponentType, attack, defense) {
    if (yourType === 'fire' && opponentType === 'grass'){
       return damage = 50 * (attack / defense) * 2;
    }
    if (yourType === 'grass' && opponentType === 'fire'){
       return damage = 50 * (attack / defense) * .05;
    }
    if (yourType === 'fire' && opponentType === 'water'){
       return damage = 50 * (attack / defense) * .5;
    }
    if (yourType === 'water' && opponentType === 'fire'){
       return damage = 50 * (attack / defense) * 2;
    }
    if (yourType === 'fire' && opponentType === 'electric'){
       return damage = 50 * (attack / defense) * 1;
    }
    if (yourType === 'electric' && opponentType === 'fire'){
       return damage = 50 * (attack / defense) * 1;
    }
    if (yourType === 'water' && opponentType === 'grass'){
       return damage = 50 * (attack / defense) * .5;
    }
    if (yourType === 'grass' && opponentType === 'water'){
       return damage = 50 * (attack / defense) * 2;
    }
    if (yourType === 'water' && opponentType === 'electric'){
       return damage = 50 * (attack / defense) * .5;
    }
    if (yourType === 'electric' && opponentType === 'water'){
       return damage = 50 * (attack / defense) * 2;
    }
    if (yourType === 'grass' && opponentType === 'electric'){
       return damage = 50 * (attack / defense) * 1;
    }
    if (yourType === 'electric' && opponentType === 'grass'){
       return damage = 50 * (attack / defense) * 1;
    }
    if(yourType===opponentType){
        return (damage = 50 * (attack / defense) * 1);
    }

}

console.log(calculateDamage("fire", "water", 100, 100))