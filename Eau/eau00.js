// Créez un programme qui affiche toutes les différentes combinaisons possibles de trois chiffres
//  dans l’ordre croissant, dans l’ordre croissant. 
// La répétition est volontaire.

const threeNumbersCombinations = () => {
	let numbers = [...Array(999).keys()]
	numbers = numbers.map(num => num + "")
	const range = numbers.map(element => element.padStart(3, "0"))
	let result = []

	 range.forEach(element => {
		if ((element.split(element[0]).length - 1) == 1 && element.split(element[1]).length - 1 == 1) {
			if (!result.includes(element.split('').sort().join(''))) result.push(element.split('').sort().join(''))
		}
	})
	 return result.join(" ")
}

printThreeNumbersCombinations = threeNumbersCombinations()

console.log(printThreeNumbersCombinations)