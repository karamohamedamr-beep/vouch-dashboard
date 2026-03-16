let week = 38
let total = 5882

const reviewsDiv = document.getElementById("reviews")
const transactionsDiv = document.getElementById("transactions")

const names = [
"astro","wizz","nex","volt","drip","storm","nova","hex"
]

const reviews = [
"Fast trade",
"Very trusted seller",
"Great service",
"Super quick delivery",
"Legit seller",
"Smooth trade",
"Highly recommended"
]

function random(arr){
return arr[Math.floor(Math.random()*arr.length)]
}

function addReview(){

const review = document.createElement("div")
review.className="review"

review.innerHTML = `
<b>${random(names)}</b><br>
⭐ ⭐ ⭐ ⭐ ⭐<br>
${random(reviews)}
`

reviewsDiv.prepend(review)

if(reviewsDiv.children.length > 500){
reviewsDiv.removeChild(reviewsDiv.lastChild)
}

}

function addTransaction(){

const t = document.createElement("div")
t.className="transaction"

const price = Math.floor(Math.random()*600)+20

t.innerHTML = `
${random(names)} bought $${price}
`

transactionsDiv.appendChild(t)

}

setInterval(()=>{

addReview()
addTransaction()

week++
total++

document.getElementById("week").innerText = week
document.getElementById("total").innerText = total

},8000)
