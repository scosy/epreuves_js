// Créez un programme qui détermine si une liste d’entiers est triée ou pas.

const isSorted = args => {
	let unsorted_numbers = []
	for (let i = 0; i < args.length - 1; i++) {
		args[i] > args[i + 1] ? unsorted_numbers.push(i) : ''
	}
	return unsorted_numbers.length > 0 ? "Pas triée" : "Triée"
}

args = process.argv.slice(2, process.argv.length)
args = args.map(element => parseInt(element))

if (args.some(element => /[^\d]/.test(element))) throw new Error('N\'entrez que des nombres.')

printIsSorted = isSorted(args)

console.log(printIsSorted)