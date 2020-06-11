import { onSnake, expandSnake } from "./snake.js"
import { randomGridPosition } from "./grid.js"

const food = getRandomFoodPostition()
const EXPANSION_RATE = 1

export function update() {
    if (onSnake(food)) {
        expandSnake(EXPANSION_RATE)
        food = getRandomFoodPostition()
    }
}

export function draw(board) {
        const foodElement = document.createElement("div")
        foodElement.style.gridRowStart = food.y
        foodElement.style.gridColumnStart = food.x
        foodElement.classList.add("food")
        board.appendChild(foodElement)
}

function getRandomFoodPostition() {
    const newFoodPosition
    while (newFoodPosition == null || onSnake(newFoodPosition)) {
        newFoodPosition = randomGridPosition()
    }
    return newFoodPosition
    
}