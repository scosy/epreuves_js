// Créez un programme qui permet de déterminer si l’argument donné est un entier pair ou impair..

const evenOrOdd = (arg) => {
	if (!arg) return "erreur"
	if (arg.match(/[^\d]/)) return "erreur" 
	return arg % 2 === 0 ? "pair" : "impair" 
}

isEvenOrOdd = evenOrOdd(process.argv[2])

console.log(isEvenOrOdd)