// Créez un programme qui affiche si un nombre est premier ou pas.

const primeNumber = number => {
	const prime = [2, 3, 5]
	let result
	console.log(((!prime.includes(number)) &&( number == 1 || number % 2 == 0 || number % 3 == 0 || number % 5 == 0)))
	if ((!prime.includes(number)) &&( number == 1 || number % 2 == 0 || number % 3 == 0 || number % 5 == 0)) {
		result = `Non, ${number} n'est pas un nombre premier.`
	}
	else {
		result = `Oui, ${number} est un nombre premier.` 
	}
	return result
}

n1 = parseInt(process.argv[2])

if (/[^\d]/.test(n1)) throw new Error("entrez un chiffre")
if (process.argv.length > 3) throw new Error("Trop d'arguments")

printPrimeNumber = primeNumber(n1)

console.log(printPrimeNumber)