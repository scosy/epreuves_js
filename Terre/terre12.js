// Créez un programme qui transforme une heure affichée en format 12h en une heure affichée au format 24h.

const to_24h = (hour, minutes, period) => {
	let result
	if (period == "AM")
		(hour == 12) ? result = `00:${minutes}` : result = `${hour}:${minutes}`
	else 
		(hour == 12) ? result = `${hour}:${minutes}` : result = `${parseInt(hour) + 12}:${minutes}`
	return result
}


hour = process.argv[2].split(':')[0]
minutes = process.argv[2].split(':')[1].slice(0, 2)
period = process.argv[2].split(':')[1].slice(2, 4)

if (hour > "24") throw new Error("Entrez une date valide.")
if (minutes > "59") throw new Error("Entrez une date valide.")
if (!period) throw new Error("Entrez une date valide au format 12H.")
if (process.argv.length > 3) throw new Error(" Trop d'arguments")


printTo_24h = to_24h(hour, minutes, period)

console.log(printTo_24h)