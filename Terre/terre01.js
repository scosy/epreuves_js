// Créez un programme qui affiche son nom de fichier.

const filename = () => {
	name = __filename.slice(__filename.lastIndexOf('/') + 1, __filename.length)
	console.log(name)
}

filename()