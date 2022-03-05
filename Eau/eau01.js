// Créez un programme qui affiche toutes les différentes combinaisons de deux nombre entre 00 et 99 dans l’ordre croissant.

const twoNumbersCombinations = () => {
	let arr = [...Array(100).keys()]
	arr = arr.map(num => num + "")
	const range1 = arr.map(element => element.padStart(2, "0"))
	const range2 = arr.map(element => element.padStart(2, "0"))
	let result = []

	range1.forEach(n1 => {
		range2.forEach(n2 => {
			if (n1 != n2) {
				if (!result.includes(`${n2} ${n1}`.split(' ').sort().join(' '))) {
					result.push(`${n2} ${n1}`.split(' ').sort().join(' '))
				}
			}
		})
	})
	return result.join(', ')
}


printTwoNumbersCombinations = twoNumbersCombinations()

console.log(printTwoNumbersCombinations)