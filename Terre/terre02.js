// Créez un programme qui affiche les arguments qu’il reçoit ligne par ligne, peu importe le nombre d’arguments.

const arguments = (args) => {
	args.splice(0, 2)
	return args.join('\n')
}
printArguments = arguments(process.argv)

console.log(printArguments)