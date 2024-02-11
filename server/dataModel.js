const emailModel =`{
   
        Subject: "",
        Body: "",
        FromName: "",
        FromEmail: "",
        Attachments: "",
        IsPhishing: "",
        Security: "",
}`

const sampleResponseLegimiate = {
    Email: {
        Subject: "Job Opportunity",
        Body: "Exciting job opportunity available! Apply now and join our dynamic team.",
        FromName: "Human Resources",
        FromEmail: "hr@companyabc.com",
        Attachments: "job_application_form.docx",
        IsPhishing: "false",
        Security: "true",
    }
}

const sampleResponseNotLegimiate = {
    Email: {
        Subject: "Urgent Action Required",
        Body: "Your attention is needed immediately. Click the link to take action.",
        FromName: "Customer Support",
        FromEmail: "support@urgent.com",
        Attachments: "alert.png",
        IsPhishing: "true",
        Security: "false",
    }
}

module.exports = {emailModel,sampleResponseLegimiate,sampleResponseNotLegimiate}