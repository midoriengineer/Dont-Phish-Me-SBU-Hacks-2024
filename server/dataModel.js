const emailModel =`{
   
        subject: "",
        body: "",
        fromName: "",
        fromEmail: "",
        attachment: "",
        isPhish: "",
        security: "",
}`



const dummyEmails = [
    
        {
          "subject": "Urgent: Team Meeting Cancelled",
          "body": "Dear Team Member, Due to unforeseen circumstances, today's team meeting has been cancelled. Please click the link to confirm receipt of this message.",
          "FromName": "HR Department",
          "fromEmail": "hr@company.com",
          "attachment": "",
          "isPhish": "true",
          "security": "unverified"
        },
        {
          "subject": "Account Locked: Action Required",
          "body": "Dear Employee, Your account has been temporarily locked due to suspicious activity. Click the link to verify your identity and unlock your account.",
          "FromName": "IT Support",
          "fromEmail": "support@company.com",
          "attachment": "",
          "isPhish": "true",
          "security": "unverified"
        },
        {
          "subject": "HR Policy Update: Read Immediately",
          "body": "Dear Colleague, Our HR policies have been updated. Please click the link to review the changes and acknowledge receipt of the updated policies.",
          "FromName": "HR Department",
          "fromEmail": "hr@company.com",
          "attachment": "",
          "isPhish": "true",
          "security": "unverified"
        },
        {
          "subject": "Invoice Payment Request",
          "body": "Dear [Your Name], Attached is an invoice that needs to be paid urgently. Click the link to view and process the payment.",
          "FromName": "Finance Department",
          "fromEmail": "finance@company.com",
          "attachment": "Invoice.pdf",
          "isPhish": "true",
          "security": "unverified"
        },
        
            {
              "subject": "Urgent: Mandatory Software Update Required",
              "body": "Dear Team, Our software requires an immediate update to ensure continued functionality. Please click the link to download and install the latest version.",
              "FromName": "IT Department",
              "fromEmail": "it@company.com",
              "attachment": "",
              "isPhish": "true",
              "security": "unverified"
            },
            {
              "subject": "Important: Company Policy Change",
              "body": "Dear Employee, Our company policies have been revised. Click the link to review the updated policies and acknowledge your understanding.",
              "FromName": "HR Department",
              "fromEmail": "hr@company.com",
              "attachment": "",
              "isPhish": "true",
              "security": "unverified"
            },
            {
              "subject": "Security Alert: Unauthorized Access Attempt",
              "body": "Dear User, Our security system detected an unauthorized access attempt on your account. Click the link to verify your identity and secure your account.",
              "FromName": "Security Team",
              "fromEmail": "security@company.com",
              "attachment": "",
              "isPhish": "true",
              "security": "unverified"
            },
            {
              "subject": "Account Review Required: Verify Your Information",
              "body": "Dear Customer, We need to review your account information for security purposes. Please click the link to provide the necessary details.",
              "FromName": "Customer Support",
              "fromEmail": "support@company.com",
              "attachment": "",
              "isPhish": "true",
              "security": "unverified"
            }
          
          
      
      
]


const sampleResponseLegimiate = {
    
        subject: "Job Opportunity",
        body: "Exciting job opportunity available! Apply now and join our dynamic team.",
        FromName: "Human Resources",
        fromEmail: "hr@companyabc.com",
        attachment: "job_application_form.docx",
        isPhish: "false",
        security: "true",
    
}

const sampleResponseNotLegimiate = {
    
        subject: "Urgent Action Required",
        body: "Your attention is needed immediately. Click the link to take action.",
        FromName: "Customer Support",
        fromEmail: "support@urgent.com",
        attachment: "alert.png",
        isPhish: "true",
        security: "false",
}

module.exports = {emailModel,sampleResponseLegimiate,sampleResponseNotLegimiate,dummyEmails}