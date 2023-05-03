function calculateDamage(yourType, opponentType, attack, defense) {
	if (yourType === opponentType) {
		return (damage = 50 * (attack / defense) * 1);
	}

	if (yourType === "fire" && opponentType === "grass") {
		return (damage = 50 * (attack / defense) * 2);
	}

	if (yourType === "fire" && opponentType === "water") {
		return (damage = 50 * (attack / defense) * 0.5);
	}

	if (yourType === "fire" && opponentType === "electric") {
		return (damage = 50 * (attack / defense) * 1);
	}

	if (yourType === "grass" && opponentType === "fire") {
		return (damage = 50 * (attack / defense) * 0.5);
	}
	if (yourType === "grass" && opponentType === "water") {
		return (damage = 50 * (attack / defense) * 2);
	}
	if (yourType === "grass" && opponentType === "electric") {
		return (damage = 50 * (attack / defense) * 1);
	}

	if (yourType === "water" && opponentType === "fire") {
		return (damage = 50 * (attack / defense) * 2);
	}

	if (yourType === "water" && opponentType === "grass") {
		return (damage = 50 * (attack / defense) * 0.5);
	}

	if (yourType === "water" && opponentType === "electric") {
		return (damage = 50 * (attack / defense) * 0.5);
	}

	if (yourType === "electric" && opponentType === "water") {
		return (damage = 50 * (attack / defense) * 2);
	}

	if (yourType === "electric" && opponentType === "fire") {
		return (damage = 50 * (attack / defense) * 1);
	}

	if (yourType === "electric" && opponentType === "grass") {
		return (damage = 50 * (attack / defense) * 1);
	}
}

console.log("Testing Fire:");
console.log(calculateDamage("fire", "water", 100, 100));
console.log(calculateDamage("fire", "grass", 100, 100));
console.log(calculateDamage("fire", "electric", 100, 100));
console.log(calculateDamage("fire", "fire", 100, 100));

console.log("\nTesting Water:");
console.log(calculateDamage("water", "water", 100, 100));
console.log(calculateDamage("water", "grass", 100, 100));
console.log(calculateDamage("water", "electric", 100, 100));
console.log(calculateDamage("water", "fire", 100, 100));

console.log("\nTesting Grass:");
console.log(calculateDamage("grass", "grass", 100, 100));
console.log(calculateDamage("grass", "water", 100, 100));
console.log(calculateDamage("grass", "electric", 100, 100));
console.log(calculateDamage("grass", "fire", 100, 100));

console.log("\nTesting Electric:");
console.log(calculateDamage("electric", "electric", 100, 100));
console.log(calculateDamage("electric", "grass", 100, 100));
console.log(calculateDamage("electric", "water", 100, 100));
console.log(calculateDamage("electric", "fire", 100, 100));
