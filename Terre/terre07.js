// Créez un programme qui affiche le nombre de caractères d’une chaîne de caractères passée en argument.

const nbCharacters = string => {
	let number = 0
	do {
	 number++
	} while (string[number])
	return number
}


string = process.argv[2]

if (process.argv.length > 3) throw new Error('Trop d\'arguments')

printnbCharacters = nbCharacters(string)

console.log(printnbCharacters)