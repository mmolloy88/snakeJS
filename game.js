import { update as updateSnake, draw as drawSnake, SNAKE_SPEED,
getSnakeHead, snakeIntersection } from "./snake.js"

import { update as updateFood, draw as drawFood }
from "./food.js"

import { outsideGrid } from "./grid.js"

const lastRenderTime = 0
const gameOver = false
const board = document.getElementById("board")

function main(currentTime) {

    if (gameOver) {
        if (confirm("you lost. press ok to restart")) {
            window.location = "/"
        }
        return
    }

    window.requestAnimationFrame(main)
    const secondsSinceLastRender = (currentTime - lastRenderTime) / 1000
    if (secondsSinceLastRender < 1 / SNAKE_SPEED) return
    

    lastRenderTime = currentTime

    update()
    draw()
}

window.requestAnimationFrame(main)

function update() {
    updateSnake()
    updateFood()
    checkDeath()
}

function draw() {
    board.innerHTML = ""
    drawSnake(board)
    drawFood(board)
}

function checkDeath() {
    gameOver = outsideGrid(getSnakeHead()) || snakeIntersection()
}
