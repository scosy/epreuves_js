// Créez un programme qui affiche le premier nombre premier supérieur au nombre donné en argument.

const primeNumber = number => {
	const prime = [2, 3, 5]
	let result
	if ((!prime.includes(number)) &&( number == 1 || number % 2 == 0 || number % 3 == 0 || number % 5 == 0)) {
		!result
	}
	else {
		result = true
	}
	return result
}


const nextPrimeNumber = num => {
	num++
	while (!primeNumber(num)) {
		num++
	}
	return num
}


n1 = parseInt(process.argv[2])

if (/[^\d]/.test(n1)) throw new Error("entrez un chiffre")
if (process.argv.length > 3) throw new Error("Trop d'arguments")

printNextPrimeNumber = nextPrimeNumber(n1)

console.log(printNextPrimeNumber)