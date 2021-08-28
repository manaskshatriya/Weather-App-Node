

// console.log("client sode javscrpit loading")


// fetch('http://puzzle.mead.io/puzzle').then((res) => [ 
//     res.json().then((data) => {
//         console.log(data)
//     })
// ])

// fetch('http://localhost:3000/weather?address=boston').then((res) => {
//     res.json().then((data) => {
//         if(data.error)
//         {
//             console.log(data.error)
//         }
//         else 
//         {
//             console.log(data.forecast)
//             console.log(data.location)
//         }
        
//     })
// })

const form = document.querySelector('form')

const search = document.querySelector('input')
const messageOne = document.getElementById("1")
const messageTwo = document.getElementById("2")
form.addEventListener('submit', (event) => {
    event.preventDefault();
    const location = search.value
    
    messageOne.innerHTML = "Loading..."
    messageTwo.innerHTML = ""

    fetch('https://tranquil-citadel-53417.herokuapp.com/weather?address='+location).then((res) => {
    res.json().then((data) => {
        if(data.error)
        {
            console.log(data.error)
            messageOne.innerHTML = data.error
        }
        else 
        {
            messageOne.innerHTML = data.forecast
            messageTwo.innerHTML = data.location
            console.log(data.forecast)
            console.log(data.location)
        }
        
    })
})




    console.log(location);

})