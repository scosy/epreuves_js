// Créez un programme qui met en majuscule la première lettre de chaque mot d’une chaîne de caractères.
// Les autres lettres devront être en minuscules.
// Les mots ne sont délimités que par un espace, une tabulation ou un retour à la ligne.

const firstUpcase = string => {
	let result = string.split(' ')
	result = result.map(word =>  {
		return word.charAt(0).toUpperCase() + word.slice(1)
	})
	return result.join(' ')
}

string = process.argv[2]

if (process.argv.length != 3) throw new Error('Entrez une chaîne de caractères.')
if (/[\d]/.test(string)) throw new Error('Entrez une chaîne de caractères.')

printFirstUpcase = firstUpcase(string)

console.log(printFirstUpcase)