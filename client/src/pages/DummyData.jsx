/* 

dummy data for testing
{
    Email : name
    Subject : subject
    Body : Body
    isphish : true
    Email url : @example.org
}
*/


const phishMail = [

    {
        "Subject": "Urgent: Account Verification",
        "First": "John",
        "Last": "Doe",
        "Body": "Dear John, your account has been compromised. Click the link to verify your information immediately or risk losing access.",
        "Email": "mail@mail.com",
        "Verified": "unverified",
        "isPhish": true,
        "FromName": "Customer Support",
      },
      {
        "Subject": "Immediate Action Required: Security Breach Detected!",
        "First": "Emily",
        "Last": "Smith",
        "Body": "Attention Emily, our system has detected a security breach! Your account is at risk. Click the link now to secure your account or face consequences.",
        "Email": "mail@mail.com",
        "Verified": "unverified",
        "isPhish": true,
        "FromName": "Customer Support",
      },
      {
        "Subject": "URGENT: Data Breach Alert!",
        "First": "Alex",
        "Last": "Johnson",
        "Body": "Alex, our servers have been compromised! Your sensitive data is in danger. Click the link immediately to prevent further damage.",
        "Email": "mail@mail.com",
        "Verified": "unverified",
        "isPhish": true,
        "FromName": "Customer Support",
      },
      {
        "Subject": "Immediate Response Required: Important Message",
        "First": "Sarah",
        "Last": "Brown",
        "Body": "Sarah, urgent action is needed regarding your account! Click the link now to avoid suspension or loss of data.",
        "Email": "mail@mail.com",
        "Verified": "unverified",
        "isPhish": true,
        "FromName": "Customer Support",
      }
      
      
      
      
]


export default phishMail;