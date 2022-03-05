// Créez un programme qui transforme une heure affichée en format 24h en une heure affichée en format 12h.

const to_12h = (hour, minutes) => {
	let result
	if (hour == 0) {
		result = `12:${minutes}AM`
	}else if (hour < 12 && hour) {
		result = `${hour}:${minutes}AM`
	} else if (hour == 12) {
		result = `${hour}:${minutes}PM`
	}else {
		result = `${hour - 12}:${minutes}PM`
	}
	return result
}

hour = process.argv[2].split(':')[0]
minutes = process.argv[2].split(':')[1]

if (hour > "24") throw new Error("Entrez une date valide.")
if (minutes > "59") throw new Error("Entrez une date valide.")
if (process.argv.length > 3) throw new Error(" Trop d'arguments")


printTo_12h = to_12h(hour, minutes)

console.log(printTo_12h)