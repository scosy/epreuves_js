// Créez un programme qui prend en paramètre trois entiers et affiche la valeur du milieu.

const findSwitzerland = (n1, n2, n3) => {
	let arr = [n1, n2, n3]
	return arr.sort()[1]
}

n1 = process.argv[2]
n2 = process.argv[3]
n3 = process.argv[4]



if (/[^\d]/.test(n1) || /[^\d]/.test(n2)|| /[^\d]/.test(n3)) throw new Error("entrez trois chiffres")
if (n1 == n2 || n2 == n3|| n1 == n3) throw new Error("entrez trois chiffres différents")
if (process.argv.length > 5) throw new Error("Trop d'arguments")

printSwitzerland = findSwitzerland(n1, n2, n3)

console.log(printSwitzerland)