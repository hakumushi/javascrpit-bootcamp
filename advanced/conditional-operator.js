const myAge = 27
let message

if (myAge>= 18){
    message = "You can vote!"
} else  {
    message = "You cannot vote."
}

const messageTernary = myAge >= 18 ? "You can vote!" : "You cannot vote."

console.log(message)

console.log(messageTernary)

const showPage = () => "Showing the page"

const showErrorPage = () => "Showing the error page"


let newMessage = myAge >= 21 ? showPage() : showErrorPage()
console.log(newMessage)

const team = ['Tyler', 'Porter']

console.log(team.length <= 4 ? `Team size: ${team.length}` : "Too many people on your team")
