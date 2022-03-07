// Créez un programme qui affiche le premier index d’un élément recherché dans un tableau.
// Le tableau est constitué de tous les arguments sauf le dernier.
// L’élément recherché est le dernier argument.
// Afficher -1 si l’élément n’est pas trouvé.

const separateWantedString = array => {
	const wanted = array.pop()
	return wanted
}

const findIndex = array =>  {
	const wanted = separateWantedString(array)
	let index = -1
	array.forEach((word, i) =>{
		return word == wanted ? index = i : "" 
	})
	return index
}

const array = process.argv
array.splice(0, 2)

if (process.argv.length < 5) throw new Error('Erreur d\'arguments')

printIndexWanted = findIndex(array)

console.log(printIndexWanted)