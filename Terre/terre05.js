// Créez un programme qui affiche le résultat et le reste d’une division entre deux nombres.

const divide = (n1, n2) => {
	let result = n1 / n2
	let rest = n1 % n2
	return `résultat: ${result} \nreste: ${rest}`
}

n1 = parseInt(process.argv[2])
n2 = parseInt(process.argv[3])

if (n1 < n2) throw new Error('n1 doit être supérieur à n2')
if (n2 == 0) throw new Error('n2 ne doit pas être égal à 0')

printResult = divide(n1, n2)

console.log(printResult)