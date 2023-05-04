let big_List = []
let small_List = [...big_List]
let count = 1

const modal = document.querySelector(".modal")
const found = document.querySelector(".put__found")
const container = document.querySelector(".container")
const select = document.querySelector(".game__choose__number")

choose__number()

function btn1() {

    if (count < 3) {

        let array = []

        sort__list(1, array)

        sort__list(0, array)

        sort__list(2, array)

        big_List = array

        list__append(array)

        count += 1

    } else add__modal(0)
}

function btn2() {

    if (count < 3) {

        let array = []

        sort__list(2, array)

        sort__list(1, array)

        sort__list(0, array)

        big_List = array

        list__append(array)

        count += 1

    } else add__modal(1)

}

function btn3() {

    if (count < 3) {

        let array = []

        sort__list(1, array)

        sort__list(2, array)

        sort__list(0, array)

        big_List = array

        list__append(array)

        count += 1

    } else add__modal(2)

}

function replay() {
    count = 1
    select.value = "Choose"
    list__append(small_List)
    modal.classList.remove("active")
    container.classList.remove("active")
}

function add__modal(num) {
    let array = []
    switch (num) {
        case 0:
            sort__list(0, array)
            break
        case 1:
            sort__list(1, array)
            break
        case 2:
            sort__list(2, array)
    }

    modal.classList.add("active")
    container.classList.add("active")
    found.innerHTML = array[parseInt(array.length / 2)]
}

function choose__number() {
    select.addEventListener("change", ({ target }) => {
        switch (target.value) {
            case "15":
                push__number__list(15)
                break
            case "21":
                push__number__list(21)
                break
            case "27":
                push__number__list(27)
                break
            default:
                alert("Selectdan Tanlang")
                break
        }
    })   
}

function list__append(list) {
    const body = document.querySelector(".container__body")
    body.innerHTML = ""
    for (let i = 0; i < list.length; i++) {
        let div = document.createElement("div")
        div.innerHTML = list[i]
        body.append(div)
    }
}

function push__number__list(num) {
    big_List = []
    let defined = num

    while (defined > 0) {
        let random = Math.floor(Math.random() * 99);
        if (big_List.includes(random) == false) {
            big_List.push(random)
            defined -= 1
        }
    }

    list__append(big_List)
}

function sort__list(num, gap__list) {
    for (let i = num; i < big_List.length; i += 3) {
        gap__list.push(big_List[i])
    }
}