// Créez un programme qui détermine si une chaîne de caractères ne contient que des chiffres.

const allFigures = string => {
	let isFigure = true
	string.split('').forEach(char => {
		/[0-9]/.test(char) ? isFigure : isFigure = false
		if (!isFigure) return isFigure
	})
	return isFigure
}

string = process.argv[2]

if (process.argv.length != 3) throw new Error('Erreur d\'arguments')

printAllFigures = allFigures(string)

console.log(printAllFigures)