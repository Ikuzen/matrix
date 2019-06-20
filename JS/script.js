
// class populate(){

// }

let grid = document.getElementById("grid")
let numInput = document.getElementById("num-input")
let numButton = document.getElementById("num-button")
numButton.addEventListener("click", addGrid)
let index = 0;
// adds class to all svg tags
$("svg").addClass("box");

// button fill all
const fillAll = document.getElementById("fill-all")
fillAll.addEventListener("click", () => {
    $("svg").addClass("fill")

})
//button unfill
const unfill = document.getElementById("unfill")
unfill.addEventListener("click", () => {
    $("svg").removeClass("fill")

})

// populate the svg tags with rect and circles
// size of line*row is square root of the number of elements
function addGrid() {
    // first we remove existing element
    $("svg").remove()

    // add the svg
    for (let i = 0; i < numInput.value**2; i++) {
        $(grid).append(`<svg width="100%" height="100%" viewBox="0 0 100 100" preserveAspectRatio="xMinYMin meet"></svg>`)
    }

    let size = numInput.value
    // change grid style to match number of elements (resize etc)
    //
    for (let i = 0; i < size; i++) {
        for (let j = 0; j < size; j++) {
            let element = grid.children[i * size + j]
            // adds id to each svg
            $(element).attr("id", `${j}${i}`)
            // case of rect in the middle == diamond
            if (i === Math.floor(size / 2) && j === Math.floor(size / 2)) {
                console.log("double mmm")
                let p = document.createElementNS("http://www.w3.org/2000/svg", `rect`)
                $(p).attr({
                    x: 35,
                    y: -35,
                    width: 70,
                    height: 70,
                    style: "transform:rotate(45deg)"
                })
                $(`#grid:nth-child(${i * size + j})`).append($(p))
                element.appendChild(p)
                $(element).addClass("diamond")
                // case of rect not in the middle == square
            }
            else if (i === j && (i != size / 2 || j != size / 2)) {
                let p = document.createElementNS("http://www.w3.org/2000/svg", `rect`)
                $(`#grid:nth-child(${i * size + j})`).append($(p))
                element.appendChild(p)
                $(element).addClass("square")
                $(p).attr({
                    x: 0,
                    y: 0,
                    width: 100,
                    height: 100,
                })
                console.log(i, j)
                if (i === Math.floor(size / 2) && j === Math.floor(size / 2)) {
                    console.log("mmm")
                }

            } else {


                // create a NS element with svg link 
                let p = document.createElementNS("http://www.w3.org/2000/svg", `circle`)
                $(p).attr({
                    cx: 50,
                    cy: 50,
                    r: 50
                })
                $(`#grid:nth-child(${i * size + j})`).append($(p))
                $(element).addClass("round")
                element.appendChild(p)
            }



            ///

            element.addEventListener("click", () => {
                //
                //case of circle
                //
                if ($(element).hasClass("round")) {
                    if (!$(element).hasClass("fill")) {
                        $(element).addClass("fill")
                    } else {

                        $(element).removeClass("fill")
                    }
                    //
                    // case of square
                    //
                } else if ($(element).hasClass("square")) {
                    // checks if the square is full or empty
                    if ($(element).hasClass("fill")) {
                        var delayedFill = false
                    }
                    else {
                        var delayedFill = true
                    }

                    // j fixed > col
                    for (let k = 0; k < size; k++) {
                        if (delayedFill === false) {
                            $(grid.children[j + k * size]).removeClass("fill")


                        }
                        else {
                            $(grid.children[j + k * size]).addClass("fill")
                        }
                    }

                    // i fixed > row
                    for (let l = 0; l < size; l++) {
                        if (!$(grid.children[l + i * size]).hasClass("fill")) {
                            $(grid.children[l + i * size]).addClass("fill")
                        }
                        else {
                            $(grid.children[l + i * size]).removeClass("fill")
                        }
                    }

                    if (delayedFill === true) {
                        $(element).addClass("fill")
                        console.log("to fill")
                    }
                    else if (delayedFill === false) {
                        $(element).removeClass("fill")
                        console.log("not to fill")

                    }



                    ///
                    // case of diamond
                    ///
                } else if ($(element).hasClass("diamond")) {
                    if ($(element).hasClass("fill")) {
                        var delayedFill = false
                        console.log("got the class")
                    }
                    else {
                        var delayedFill = true
                        console.log("don't got the class")
                        console.log(delayedFill)
                    }

                    for (let k = 0; k < size; k++) {
                        if (delayedFill === false) {
                            $(grid.children[j + k * size]).removeClass("fill")
                        }
                        else {
                            $(grid.children[j + k * size]).addClass("fill")
                        }

                    }
                    for (let l = 0; l < size; l++) {
                        if (delayedFill === false) {
                            $(grid.children[l + i * size]).removeClass("fill")


                        }
                        else {
                            $(grid.children[l + i * size]).addClass("fill")
                        }
                    }

                    if (delayedFill === true) {
                        $(element).addClass("fill")
                        console.log("to fill")
                    }
                    else if (delayedFill === false) {
                        $(element).removeClass("fill")
                        console.log("not to fill")

                    }
                }

            }

            )
        }
    }
    let gridSize = ""
    for (let z = 0; z < size; z++) {
        gridSize += " 1fr"
    }
    console.log(gridSize)
    grid.style = `grid-template-rows:${gridSize}`
    grid.style = ` grid-template-columns:${gridSize}`
    $('svg').css({
        'width': `${35-size}vmin`,
        'height': `${35-size}vmin`,
    });
    $('circle').css({
        'width': `${35 -size}vmin`,
        'height': `${35 -size}vmin`,
    })
}
