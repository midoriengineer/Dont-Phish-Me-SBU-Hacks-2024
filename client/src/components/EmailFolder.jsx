import React from "react";

export class EmailFolder {

    constructor(name, capacity) {
        this.emails = [];
        this.name = name;
        this.capacity = capacity;
    }

    addEmail(email) {
        this.emails = [email, ...this.emails];
    }

    removeEmail(email) {
        this.emails = this.emails.filter(e => e !== email);
    }

    popEmailTop(){
        this.emails = this.emails.filter(e => e !== this.emails[0]);
    }

    popEmailBottom(){
        this.emails = this.emails.filter(e => e !== this.emails[this.emails.length-1]);
    }

    countUnread(){
        if (this.emails.length > 99) {
            return "99+"
        }
        else if (this.emails.length < 1) {
            return "0"
        }
        return (this.emails.length).toString();
    }

}