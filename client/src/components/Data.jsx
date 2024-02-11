import Email from "./Email"

export const emails = [
  // Legitimate Emails
  new Email(
    "Invoice #1234",
    "Attached is the invoice for the IT department's recent purchase. Please ask the CFO to review the invoice.",
    "Billing Department",
    "billing@companyxyz.com",
    "invoice_1234.pdf",
    false, //phish
    true //security
  ),
  // Phishing Attempts
  new Email(
    "Product Launch",
    "Exciting new product launch! We sell magical pills that will help you lose 100lbs in 2 days! Check out the attached brochure for more details.",
    "Miracle Pill",
    "marketing@companyabc.com",
    "product_launch.png",
    "product_brochure.pdf",
    true,
    true
  ),
  new Email(
    "Update on Your Job Application",
    "We have unfortunately decided to move forward with other candidates due to record layoffs. Better luck next time.",
    "Hiring Team",
    "hiring@badcompany.com",
    false,
    true
  ),
  new Email(
    "Job Opportunity",
    "We are opening up a new office, apply for an exciting job opportunity available in Denver, CO!",
    "Human Resources",
    "hr@companyabc.com",
    "job.png",
    "job_application_form.docx",
    false,
    true
  ),
  new Email(
    "Exclusive Offer",
    "Limited-time exclusive offer! Save big on your next purchase, thank you for being our valued customer. Don't miss out!",
    "Macy's Sales Team",
    "sales@macys.com",
    "exclusive_offer.png",
    "discount_code.pdf",
    false,
    true
  ),
  new Email(
    "Congratulations!",
    "You're a winner! Claim your prize by following the instructions in the attached file.",
    "Promotions Team",
    "winner@promotions.com",
    "winner.png",
    "claim_prize_instructions.txt",
    true,
    false
  ),
  new Email(
    "Important Notice",
    "Your CFO has not paid his electric bill for the last 3 months. His account is past due. Please forward this to the billing dept.",
    "Optimum Support",
    "support@optimum.com",
    "invoice.docx",
    false,
    true
  ),
  new Email(
    "Netflix Price Increase",
    "Action required: Update your payment information to continue enjoying our services as we have again raised our prices.",
    "Netflix Company",
    "info@netflix.com",
    "account_update.docx",
    false,
    true
  ),
  new Email(
    "Verify Your Account",
    "We noticed unusual activity on your account from an undentified device. Please click the link to verify your identity. ",
    "Security Team",
    "security@securemail.com",
    "shield.png",
    "verification.docx",
    true,
    false
  ),
  new Email(
    "You Won!",
    "CLICK HERE FOR FREE IPHONE 5.",
    "Lotto",
    "lotto@3h3hj.com",
    true,
    true
  ),
  new Email(
    "Survey Invitation",
    "We value your opinion. Participate in our survey and get a chance to win a free Dodge Charger.",
    "Research Team",
    "survey@research.com",
    "survey.png",
    "survey_link.txt",
    true,
    false
  ),
  new Email(
    "Security Alert",
    "We detected unauthorized access to your account. Click to secure your account now.",
    "Security Team",
    "security@securemail.com",
    "security.png",
    "account_security.pdf",
    true,
    false
  ),
  new Email(
    "Inheritance",
    "Hello dear, this is your grandmother. I am leaving an inheritance for you of $1,000,000. Click this link to claim it.",
    "Granny Smith",
    "sweetgrammy@sbumail.com",
    true, // phish
    false // security
  )
];