// Créez un programme qui affiche la racine carrée d’un entier positif.

const squareRoot = number => {
	return Math.sqrt(number)
}

n1 = process.argv[2]

if (/[^\d]/.test(n1)) throw new Error("entrez un chiffre")
if (process.argv.length > 3) throw new Error("Trop d'arguments")

printSquareRoot = squareRoot(n1)

console.log(printSquareRoot)