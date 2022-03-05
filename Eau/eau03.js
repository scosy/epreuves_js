// Créez un programme qui affiche le N-ème élément de la célèbre suite de Fibonacci.
// (0, 1, 1, 2) étant le début de la suite et le premier élément étant à l’index 0.

const fibonacci = num => {
	if (num == 0) {
		return 0
	} else if ( num == 1) {
		return 1
	}else {
		return fibonacci(num - 1) + fibonacci(num - 2)
	}
}

number = process.argv[2]

if (process.argv.length != 3) throw new Error("Entrez un nombre")
if (number.match(/[^\d]/)) throw new Error("Entrez un nombre")
if (number < 0) throw new Error('Entrez un nombre positif')

printNthFibonacci = fibonacci(number)

console.log(printNthFibonacci)