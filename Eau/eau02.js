// Créez un programme qui affiche ses arguments reçus à l’envers.

const reversedArguments = args => {
	let reversed = []
	while (args.length > 0) {
		reversed.push(args.pop())
	}
	return reversed.join('\n')
}

args = process.argv.slice(2, process.argv.length)

if (!args.length) throw new Error('Pas d\'arguments')

printReversedArguments = reversedArguments(args)

console.log(printReversedArguments)