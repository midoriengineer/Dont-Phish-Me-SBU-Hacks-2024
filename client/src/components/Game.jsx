import React from "react";

export class Game {

    constructor(timeLimit, totalNumOfEmails) {
        this.score = 0
        this.misplacedEmails = []
        this.time = timeLimit
        this.numOfEmails = totalNumOfEmails
    }

    //If email placement is correct, add to score
    addScore() {
        this.score++;
        this.numOfEmails--;
    }

    //If email placement is incorrect, add to misplacedEmails
    addMiss(email) {
        this.misplacedEmails.push(email);
        this.numOfEmails--;
    }

    minusTime() {
        this.time--;
    }

    CheckWin(){
        console.log(this.numOfEmails)
        if (this.numOfEmails < 1) {
            console.log("You win!")
            return true;
        }
        return false
    }

    CheckLose(){
        console.log(this.misplacedEmails.length)
        if (this.misplacedEmails.length > 4) {
            console.log("You lose!")
            return true;
        }
        return false
    }

}