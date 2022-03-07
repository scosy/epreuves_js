// Créez un programme qui met en majuscule une lettre sur deux d’une chaîne de caractères.
//  Seule les lettres (A-Z, a-z) sont prises en compte.

const evenToUpcase = string => {
	let str = string.split('')
	let result = string.split('')
	result = result.filter(letter => /\w/.test(letter))
	result = result.map((letter, index) => {
		return !(index % 2) ? letter.toUpperCase() : letter
	})
	for (let i = 0; i < str.length; i++) {
		if (result[i]) {
		result[i].toLowerCase() != str[i].toLowerCase() ? result.splice(i, 0, str[i]) : ""
		} else {
			result.splice(i, 0, str[i])
		}
	}
	return result.join("")
}

string = process.argv[2]

if (process.argv.length != 3) throw new Error('Entrez une chaîne de caractères.')
if (/[\d]/.test(string)) throw new Error('Entrez une chaîne de caractères.')

printEvenToUpcase = evenToUpcase(string)

console.log(printEvenToUpcase)