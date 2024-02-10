import React from "react";

export class Game {

    constructor(time, numOfEmails) {
        this.score = 0
        this.misses = 0
        this.time = time
        this.numOfEmails = numOfEmails
    }

    addScore() {
        this.score++;
        this.numOfEmails--;
    }

    addMiss() {
        this.misses++;
        this.numOfEmails--;
    }

    minusTime() {
        this.time--;
    }

    CheckWin(){
        if (this.time===0 && this.numOfEmails < 1) {
            return true;
        }
        return false
    }

    CheckLose(){
        if (this.misses > 4) {
            return true;
        }
        return false
    }

}