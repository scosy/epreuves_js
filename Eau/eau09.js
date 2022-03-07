// Créez un programme qui affiche toutes les valeurs comprises entre deux nombres dans l’ordre croissant.
//  Min inclus, max exclus.

const minMax = (n1, n2) => {
	const min = Math.min(n1, n2)
	const max = Math.max(n1, n2)
	return [min, max]
}

const middleValues = (n1, n2) => {
	const range = (start, stop, step) => Array.from({ length: (stop - 1 - start) / step + 1}, (_, i) => start + (i * step));
	const min = minMax(n1, n2)[0]
	const max = minMax(n1, n2)[1]
	console.log(min, max)
	return range(min, max, 1)
}

n1 = parseInt(process.argv[2])
n2 = parseInt(process.argv[3])

if (/[^\d]/.test(n1) || /[^\d]/.test(n2)) throw new Error("entrez 2 chiffres")
if (process.argv.length != 4) throw new Error("Erreur d'arguments")

printMiddleValues = middleValues(n1, n2)

console.log(printMiddleValues)