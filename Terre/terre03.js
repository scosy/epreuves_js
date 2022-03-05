// Créez un programme qui affiche l’alphabet à partir de la lettre donnée en argument en lettres minuscules suivi d’un retour à la ligne.

const alphabetFrom = (letter) => {
	a = [..."abcdefghijklmnopqrstuvwxyz"]
	while (a[0] !== letter) {
		a.shift()
	}
	return a.join('')
}

printAlphabetFrom = alphabetFrom(process.argv[2])

console.log(printAlphabetFrom)