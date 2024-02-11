const emailModel =`{
   
        Subject: "",
        Body: "",
        FromName: "",
        FromEmail: "",
        Attachments: "",
        IsPhishing: "",
        Security: "",
}`



const dummyEmails = [
    
        {
          "Subject": "Urgent: Team Meeting Cancelled",
          "Body": "Dear Team Member, Due to unforeseen circumstances, today's team meeting has been cancelled. Please click the link to confirm receipt of this message.",
          "FromName": "HR Department",
          "FromEmail": "hr@company.com",
          "Attachments": "",
          "IsPhishing": "true",
          "Security": "unverified"
        },
        {
          "Subject": "Account Locked: Action Required",
          "Body": "Dear Employee, Your account has been temporarily locked due to suspicious activity. Click the link to verify your identity and unlock your account.",
          "FromName": "IT Support",
          "FromEmail": "support@company.com",
          "Attachments": "",
          "IsPhishing": "true",
          "Security": "unverified"
        },
        {
          "Subject": "HR Policy Update: Read Immediately",
          "Body": "Dear Colleague, Our HR policies have been updated. Please click the link to review the changes and acknowledge receipt of the updated policies.",
          "FromName": "HR Department",
          "FromEmail": "hr@company.com",
          "Attachments": "",
          "IsPhishing": "true",
          "Security": "unverified"
        },
        {
          "Subject": "Invoice Payment Request",
          "Body": "Dear [Your Name], Attached is an invoice that needs to be paid urgently. Click the link to view and process the payment.",
          "FromName": "Finance Department",
          "FromEmail": "finance@company.com",
          "Attachments": "Invoice.pdf",
          "IsPhishing": "true",
          "Security": "unverified"
        },
        
            {
              "Subject": "Urgent: Mandatory Software Update Required",
              "Body": "Dear Team, Our software requires an immediate update to ensure continued functionality. Please click the link to download and install the latest version.",
              "FromName": "IT Department",
              "FromEmail": "it@company.com",
              "Attachments": "",
              "IsPhishing": "true",
              "Security": "unverified"
            },
            {
              "Subject": "Important: Company Policy Change",
              "Body": "Dear Employee, Our company policies have been revised. Click the link to review the updated policies and acknowledge your understanding.",
              "FromName": "HR Department",
              "FromEmail": "hr@company.com",
              "Attachments": "",
              "IsPhishing": "true",
              "Security": "unverified"
            },
            {
              "Subject": "Security Alert: Unauthorized Access Attempt",
              "Body": "Dear User, Our security system detected an unauthorized access attempt on your account. Click the link to verify your identity and secure your account.",
              "FromName": "Security Team",
              "FromEmail": "security@company.com",
              "Attachments": "",
              "IsPhishing": "true",
              "Security": "unverified"
            },
            {
              "Subject": "Account Review Required: Verify Your Information",
              "Body": "Dear Customer, We need to review your account information for security purposes. Please click the link to provide the necessary details.",
              "FromName": "Customer Support",
              "FromEmail": "support@company.com",
              "Attachments": "",
              "IsPhishing": "true",
              "Security": "unverified"
            }
          
          
      
      
]


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