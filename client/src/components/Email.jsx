import React from "react";

export class Email {


    constructor(subject, body, fromName, fromEmail, icon, attachments, isPhish) {
        this.subject = subject;
        this.body = body;
        this.fromName = fromName;
        this.fromEmail = fromEmail;
        this.icon = icon;
        this.attachments = attachments;
        this.isPhish = isPhish;
    }

    addBody(body) {
        this.body = this.body + body;
    }

}