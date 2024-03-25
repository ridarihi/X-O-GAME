let turn = "x"
let turnTitle = document.querySelector('.title')
let squares = []
function end(x,y,z) {
    turnTitle.innerHTML = `${squares[x]} winner`
    document.getElementById('item' + x).style.backgroundColor = "green"
    document.getElementById('item' + y).style.backgroundColor = "green"
    document.getElementById('item' + z).style.backgroundColor = "green"
    setInterval(() => {
        turnTitle.innerHTML += '.'
    }, 1000);
    setTimeout(function () { location.reload() }, 4000)
}
function winner() {
    for (i = 1; i < 10; i++){
        squares[i] = document.getElementById('item' + i).innerHTML
    }
    if (squares[1] === squares[2] && squares[3] === squares[2] && squares[2] !== "") {
        end(1,2,3)
    }
    else if (squares[4] === squares[5] && squares[5] === squares[6] && squares[6] !== "") {
        end(4, 5, 6)
    } else if (squares[7] === squares[8] && squares[8] === squares[9] && squares[6] !== "") {
        end(7, 8, 9)
    } else if (squares[1] === squares[4] && squares[4] === squares[7] && squares[7] !== "") {
        end(1, 4, 7)
    } else if (squares[2] === squares[5] && squares[5] === squares[8] && squares[8] !== "") {
        end(2, 5, 8)
    } else if (squares[3] === squares[6] && squares[6] === squares[9] && squares[9] !== "") {
        end(3, 6, 9)
    } else if (squares[1] === squares[5] && squares[5] === squares[9] && squares[9] !== "") {
        end(1, 5, 9)
    } else if (squares[3] === squares[5] && squares[5] === squares[7] && squares[7] !== "") {
        end(3, 5, 7)
    }


}
function game(id) {
    let squareValue = document.getElementById(id)
    if (turn === "x" && squareValue.innerHTML === "") {
        squareValue.innerHTML = "x"
        turn = "o"
        turnTitle.innerHTML = " o"
    } else if (turn === "o" && squareValue.innerHTML === "") {
        squareValue.innerHTML = "o"
        turn = "x"
        turnTitle.innerHTML = " x"
    }
    winner()
}

