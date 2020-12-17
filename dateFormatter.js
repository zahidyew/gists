const isoDate = "2015-03-25"
const shortDate = '03/25/2015'
const longDate = "Mar 25 2015"
const date = "Mar.5.2015"

const myRegex = /(?:-|\/|\s|\.)/g

const splitDate = isoDate.split(myRegex)

console.log(splitDate)

for (let i = 0; i < splitDate.length; i++) {
   console.log(i)
}



// Long Date	"Mar 25 2015" or "25 Mar 2015"