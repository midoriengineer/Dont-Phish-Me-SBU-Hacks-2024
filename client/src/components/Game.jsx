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
        if (this.numOfEmails < 1) {
            return true;
        }
        return false
    }

    CheckLose(){
        if (this.misplacedEmails.length > 4) {
            return true;
        }
        return false
    }

}