import Email from "./Email"

export const emails = [
    // Legitimate Emails
    new Email(
      "Greetings",
      "Dear Customer, your account has been updated. Please review the changes.",
      "Company ABC",
      "info@companyabc.com",
      "icon.png",
      "file.pdf",
      false,
      true
    ),
    new Email(
      "Invoice #1234",
      "Attached is the invoice for your recent purchase. Please review and make the payment.",
      "Billing Department",
      "billing@companyxyz.com",
      "invoice.png",
      "invoice_1234.pdf",
      false,
      true
    ),
    new Email(
      "Job Opportunity",
      "Exciting job opportunity available! Apply now and join our dynamic team.",
      "Human Resources",
      "hr@companyabc.com",
      "job.png",
      "job_application_form.docx",
      false,
      true
    ),
    new Email(
      "Product Launch",
      "Exciting new product launch! Check out the attached brochure for more details.",
      "Marketing Team",
      "marketing@companyabc.com",
      "product_launch.png",
      "product_brochure.pdf",
      false,
      true
    ),
    new Email(
      "Exclusive Offer",
      "Limited-time exclusive offer! Save big on your next purchase. Don't miss out!",
      "Sales Team",
      "sales@companyxyz.com",
      "exclusive_offer.png",
      "discount_code.pdf",
      false,
      true
    ),
    new Email(
      "Important Notice",
      "Your account will be upgraded to a premium plan. Review the changes in the attached document.",
      "Customer Support",
      "support@companyxyz.com",
      "upgrade.png",
      "upgrade_details.docx",
      false,
      true
    ),
  
    // Phishing Attempts
    new Email(
      "Verify Your Account",
      "We noticed unusual activity on your account. Please click the link to verify your identity.",
      "Security Team",
      "security@securemail.com",
      "shield.png",
      "verification.docx",
      true,
      true
    ),
    new Email(
      "Urgent Action Required",
      "Your attention is needed immediately. Click the link to take action.",
      "Customer Support",
      "support@urgent.com",
      "alert.png",
      "action_required.pdf",
      true,
      true
    ),
    new Email(
      "Account Update",
      "Action required: Update your account information to continue enjoying our services.",
      "Service Provider",
      "info@serviceprovider.com",
      "update.png",
      "account_update.docx",
      true,
      true
    ),
    new Email(
      "Survey Invitation",
      "We value your opinion. Participate in our survey and get a chance to win exciting prizes.",
      "Research Team",
      "survey@research.com",
      "survey.png",
      "survey_link.txt",
      true,
      false
    ),
    new Email(
      "Account Suspension",
      "Due to suspicious activity, your account has been temporarily suspended. Click to appeal.",
      "Security Team",
      "security@securemail.com",
      "lock.png",
      "appeal_form.docx",
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
      "Congratulations!",
      "You're a winner! Claim your prize by following the instructions in the attached file.",
      "Promotions Team",
      "winner@promotions.com",
      "winner.png",
      "claim_prize_instructions.txt",
      true,
      true
    ),
    new Email(
      "Account Verification",
      "Verify your account to prevent service interruption. Click the link to verify now.",
      "Account Services",
      "account@serviceprovider.com",
      "verify.png",
      "account_verification_link.html",
      true,
      true
    )
  ];