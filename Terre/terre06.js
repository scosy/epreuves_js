// Créez un programme qui affiche l’inverse de la chaîne de caractères donnée en argument.

const reverse = (string) => {
	let reversed = []
	for (let i = string.length - 1; i >= 0; i--) {
		reversed.push(string[i])
	}
	return reversed.join('')
}

string = process.argv[2]

if (process.argv.length > 3) throw new Error('Trop d\'arguments')

printReversedString = reverse(string)

console.log(printReversedString)