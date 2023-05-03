function calculateDamage(yourType, opponentType, attack, defense) {
   let baseStats = (attack/defense)
   if (yourType === opponentType) {
      (damage = 50 * baseStats * .5)
      return damage;
	}

	if (yourType === "fire" && opponentType === "grass") {
      (damage = 50 * baseStats * 2)

      return damage;
	}

	if (yourType === "fire" && opponentType === "water") {
      damage = 50 * baseStats * 0.5;
      return damage;
	}

	if (yourType === "fire" && opponentType === "electric") {
      damage = 50 * baseStats * 1;

      return damage;
	}

	if (yourType === "grass" && opponentType === "fire") {
      damage = 50 * baseStats * 0.5;

      return damage;
	}
	if (yourType === "grass" && opponentType === "water") {
      damage = 50 * baseStats * 2;

      return damage;
	}
	if (yourType === "grass" && opponentType === "electric") {
      damage = 50 * baseStats * 1;

      return damage;
	}

	if (yourType === "water" && opponentType === "fire") {
      damage = 50 * baseStats * 2;

      return damage;
	}

	if (yourType === "water" && opponentType === "grass") {
      damage = 50 * baseStats * 0.5;

      return damage;
	}

	if (yourType === "water" && opponentType === "electric") {
      damage = 50 * baseStats * 0.5;

      return damage;
	}

	if (yourType === "electric" && opponentType === "water") {
      damage = 50 * baseStats * 2;

      return damage;
	}

	if (yourType === "electric" && opponentType === "fire") {
      damage = 50 * baseStats * 1;

      return damage;
	}

	if (yourType === "electric" && opponentType === "grass") {
      damage = 50 * baseStats * 1;

      return damage;
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
