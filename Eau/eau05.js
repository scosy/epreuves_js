// Créez un programme qui détermine si une chaîne de caractère se trouve dans une autre.

const stringInclude = (str1, str2) => {
	let count = 0
	let array = splitStrings(str1, str2)
	for (let i = 0; i < array[0].length ; i++) {
		if (array[1][count] == array[0][i]) {
			count++
		} else {
			if (count == array[1].length) break
	}
}
return count == array[1].length
}

const splitStrings = (str1, str2) => {
	let array = []
	array.push(str1.split(''))
	array.push(str2.split(''))
	return array
}

str1 = process.argv[2]
str2 = process.argv[3]

if (process.argv.length != 4) throw new Error('Entrez deux chaines de caractère.')
if (/[\d]/.test(str1) || /[\d]/.test(str2)) throw new Error('Entrez deux chaines de caractère.')

printStringInclude = stringInclude(str1, str2)

console.log(printStringInclude)