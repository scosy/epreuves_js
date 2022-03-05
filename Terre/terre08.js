// Créez un programme qui affiche le résultat d’une puissance.

const exponential = (number, exponent) => {
	return number**exponent
}

n1 = process.argv[2]
n2 = process.argv[3]

if (/[^\d]/.test(n1) || /[^\d]/.test(n2)) throw new Error("entrez deux chiffres")
if (process.argv.length > 4) throw new Error("Trop d'arguments")

printExponential = exponential(n1, n2)

console.log(printExponential)