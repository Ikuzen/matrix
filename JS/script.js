const store = {
    matrix: [
        [null, null, null, null, null],
        [null, null, null, null, null],
        [null, null, null, null, null],
        [null, null, null, null, null],
        [null, null, null, null, null],
    ]
};

const matrixDiv = Object.assign([], store.matrix);
let grid = document.getElementById("grid")
let index = 0;
let shape = "round"
$("svg").addClass("box");

const fillAll = document.getElementById("fill-all")
fillAll.addEventListener("click",()=>{
    $(".box").addClass("fill")
})
const unfill = document.getElementById("unfill")
unfill.addEventListener("click",()=>{
    $(".box").removeClass("fill")
})


for (let i = 0; i < 5; i++) {
    for (let j = 0; j < 5; j++) {
        let element = grid.children[i * 5 + j]
        console.log("mmh")
        if (i === j && (i != 2 || j != 2)) {
            let p = document.createElementNS("http://www.w3.org/2000/svg", `rect`)
            $(p).attr("x", "0")
            $(p).attr("y", "0")
            $(p).attr("width", "100")
            $(p).attr("height", "100")
            $(`#grid:nth-child(${i*5+j})`).append($(p))
            element.appendChild(p)
            $(element).addClass("square")

            shape = "square"
        } else if (i === 2 && j === 2) {
            let p = document.createElementNS("http://www.w3.org/2000/svg", `rect`)
            $(p).attr("x", "35")
            $(p).attr("y", "-35")
            $(p).attr("width", "70")
            $(p).attr("height", "70")
            $(p).attr("style", "transform:rotate(45deg)");
            $(`#grid:nth-child(${i*5+j})`).append($(p))
            element.appendChild(p)
            $(element).addClass("diamond")
            shape = "diamond"
        } else {
            
            // adds id to each svg
            $(element).attr("id", `${j}${i}`)
            // create a NS element with svg link 
            let p = document.createElementNS("http://www.w3.org/2000/svg", `circle`)
            $(p).attr("cx", "50")
            $(p).attr("cy", "50")
            $(p).attr("r", "50")
            $(p).attr("width", "100")
            $(p).attr("height", "100")
            $(`#grid:nth-child(${i*5+j})`).append($(p))
            $(element).addClass("round")
shape = "round"
            element.appendChild(p)
        }



        ///

        store.matrix[j][i] = {
            "shape": shape,
            "fill": "empty"
        }

        element.addEventListener("click", () => {

                if ($(element).hasClass("round")) {
                    if (!$(element).hasClass("fill")) {
                        $(element).addClass("fill")
                    } else {

                        $(element).removeClass("fill")
                        store.matrix[j][i].fill = "empty"
                    }

                    // case of square
                } else if ($(element).hasClass("square")) {
                    // checks if the square is full or empty
                    if($(element).hasClass("fill")){
                        var delayedFill = false
                        console.log("got the class")
                    }
                    else{
                        var delayedFill = true
                        console.log("don't got the class")
                        console.log(delayedFill)
                    }

                    // j fixed > col
                    for(let k = 0; k<5;k++){
                        if(delayedFill === false){
                            $(grid.children[j+k*5]).removeClass("fill")
                            
                            
                        }
                        else {
                            $(grid.children[j+k*5]).addClass("fill")
                        }
                    }

                    // i fixed > row
                    for(let l = 0; l<5;l++){
                        console.log(l)
                        // console.log(i+" "+l)
                        if(!$(grid.children[l+i*5]).hasClass("fill")){
                            $(grid.children[l+i*5]).addClass("fill")
                            store.matrix[l][i].fill ==="full"
                        }
                        else{
                            $(grid.children[l+i*5]).removeClass("fill" )
                            store.matrix[l][i].fill ==="empty"
                        }
                    }

                    if(delayedFill === true){
                        $(element).addClass("fill")
                        console.log("to fill")
                    }
                    else if(delayedFill === false){
                        $(element).removeClass("fill")
                        console.log("not to fill")

                    }
                    
                } else if ($(element).hasClass("diamond")){
                    if($(element).hasClass("fill")){
                        var delayedFill = false
                        console.log("got the class")
                    }
                    else{
                        var delayedFill = true
                        console.log("don't got the class")
                        console.log(delayedFill)
                    }

                    for(let k = 0; k<5;k++){
                        if(delayedFill === false){
                            $(grid.children[j+k*5]).removeClass("fill")
                            
                            
                        }
                        else {
                            $(grid.children[j+k*5]).addClass("fill")
                        }

                    }
                    for(let l = 0; l<5;l++){
                        if(delayedFill === false){
                            $(grid.children[l+i*5]).removeClass("fill")
                            
                            
                        }
                        else {
                            $(grid.children[l+i*5]).addClass("fill")
                        }
                    }

                    if(delayedFill === true){
                        $(element).addClass("fill")
                        console.log("to fill")
                    }
                    else if(delayedFill === false){
                        $(element).removeClass("fill")
                        console.log("not to fill")

                    }
                }

            }

        )
    }
}