const container = document.createElement("div")
// container.textContent = "I am a div"
document.body.style.display = "flex"
document.body.style.alignItems = "center"
document.body.style.justifyContent = "center"
document.body.append(container)

container.style.display = "flex"
container.style.flexWrap = "wrap"
container.style.height = "min(100vw, 100vh)"
container.style.width = "min(100vw, 100vh)"

container.style.border = "3px solid green"

// i = row
// j = column


// Red and White checkerboard
/*for (let j = 0; j < 8; j++) {
    for (let i = 0; i < 8; i++){
        const tile = document.createElement("div")
        tile.style.width = "12.23%"
        tile.style.height = "12.23%"
    
        if ((i + j) % 2 === 0 ) {
        tile.style.background = "red"
        }

        else {
        tile.style.background = "white"
        } 

        tile.innerText = i
        tile.style.border = "1px solid black"
        container.append(tile) 
     }
 } */

 // const row = Math.floor(i/8)
 // const col = i % 8
 // const red = Math.floor (row/7) * 200
 // const blue = Math.floor (col/7) * 200


 // Randomized color checkerboard

function randomColor() {
    let r = Math.floor(Math.random() * 256 )
    let g = Math.floor(Math.random() * 256 ) 
    let b = Math.floor(Math.random() * 256 )  
    return "rgb(" + r + "," + g + "," + b + ")"
}

 /* 
 for (let j = 0; j < 8; j++) {
    for (let i = 0; i < 8; i++){
        const tile = document.createElement("div")
        tile.style.width = "12.5%"
        tile.style.height = "12.5%"
    
        tile.style.background = randomColor()

        tile.innerText = i
        //tile.style.border = "1px solid black"
        container.append(tile) 
     }
 } */



 // Gradient checkerboard
 // Create a start color and an end color
 // Gradually bring start value to end value


// Flash checkerboard

 for (let j = 0; j < 8; j++) {
    for (let i = 0; i < 8; i++){
        const tile = document.createElement("div")
        tile.style.width = "12.5%"
        tile.style.height = "12.5%"
    
        tile.style.background = randomColor()

        tile.innerText = i
        setInterval( function() {
            tile.style.background = randomColor()
         }, 2000)
        //tile.style.border = "1px solid black"
        container.append(tile) 
     }
 }

