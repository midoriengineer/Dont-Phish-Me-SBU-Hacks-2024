import React, { useEffect, useState } from 'react';
import { Email } from '../components/Email';
import { EmailFolder } from '../components/EmailFolder';
import { Game } from '../components/Game';

let setup = false;
let bonusTime = 0;
const game = new Game(60, 21);
const inbox = new EmailFolder("Inbox", 100);
const trash = new EmailFolder("Trash", 5);


function Debug() {

    //TODO: Replace with actual emails

    const startEmail = new Email(
        "Today's Task",
        "<p>Time to work, rookie! You have until I get back to sort these emails.</p><p>You must finish on time. <u style='color: red;'>NO EXPECPTIONS.</u></p><p>Approve this email and get stepping.</p>",
        "Boss Man",
        "boss@gmail.com",
        "boss.png",
        [],
        false
    )

    const winEmail = new Email(
        "Good Work",
        "<p>Not bad, rookie.</p>",
        "Boss Man",
        "boss@gmail.com",
        "boss.png",
        [],
        false
    )

    const loseEmail = new Email(
        "You're Fired",
        "<p>You absolute failure.</p>",
        "Boss Man",
        "boss@gmail.com",
        "boss.png",
        [],
        false
    )

    const emails = [
        new Email(
          "Greetings",
          "Dear Customer, your account has been updated. Please review the changes.",
          "Company ABC",
          "info@companyabc.com",
          "icon.png",
          ["file.pdf", "image.jpg"],
          false
        ),
        new Email(
          "Important Notice",
          "Your recent purchase confirmation is attached. If you didn't make this purchase, please contact us.",
          "Online Store",
          "noreply@store.com",
          "icon.png",
          ["receipt.pdf", "promo.png"],
          false
        ),
        new Email(
          "Verify Your Account",
          "We noticed unusual activity on your account. Please click the link to verify your identity.",
          "Security Team",
          "security@securemail.com",
          "shield.png",
          ["verification.docx"],
          true
        ),
        new Email(
          "Urgent Action Required",
          "Your attention is needed immediately. Click the link to take action.",
          "Customer Support",
          "support@urgent.com",
          "alert.png",
          ["action_required.pdf"],
          true
        ),
        new Email(
          "Exclusive Offer",
          "Congratulations! You've been selected for an exclusive offer. Claim your reward now.",
          "Promotions Team",
          "promo@exclusive.com",
          "gift.png",
          ["special_offer.jpg"],
          false
        ),
        new Email(
          "Invoice Reminder",
          "Your invoice is due soon. Please make payment to avoid any disruptions.",
          "Billing Department",
          "billing@companyxyz.com",
          "invoice.png",
          ["invoice.pdf"],
          false
        ),
        new Email(
          "Account Update",
          "Action required: Update your account information to continue enjoying our services.",
          "Service Provider",
          "info@serviceprovider.com",
          "update.png",
          ["account_update.docx"],
          true
        ),
        new Email(
          "Survey Invitation",
          "We value your opinion. Participate in our survey and get a chance to win exciting prizes.",
          "Research Team",
          "survey@research.com",
          "survey.png",
          ["survey_link.txt"],
          false
        ),
        new Email(
          "Important Announcement",
          "An important announcement regarding changes to our policies. Please review and acknowledge.",
          "Management Team",
          "management@companyxyz.com",
          "announcement.png",
          ["policy_changes.pdf"],
          false
        ),
        new Email(
          "Account Suspension",
          "Due to suspicious activity, your account has been temporarily suspended. Click to appeal.",
          "Security Team",
          "security@securemail.com",
          "lock.png",
          ["appeal_form.docx"],
          true
        ),
        new Email(
            "Invoice #1234",
            "Attached is the invoice for your recent purchase. Please review and make the payment.",
            "Billing Department",
            "billing@companyxyz.com",
            "invoice.png",
            ["invoice_1234.pdf"],
            false
          ),
          new Email(
            "Security Alert",
            "We detected unauthorized access to your account. Click to secure your account now.",
            "Security Team",
            "security@securemail.com",
            "security.png",
            ["account_security.pdf"],
            true
          ),
          new Email(
            "Job Opportunity",
            "Exciting job opportunity available! Apply now and join our dynamic team.",
            "Human Resources",
            "hr@companyabc.com",
            "job.png",
            ["job_application_form.docx"],
            false
          ),
          new Email(
            "Important Update",
            "Important system update scheduled. Please read the attached document for details.",
            "IT Department",
            "it@companyxyz.com",
            "update.png",
            ["system_update_details.pdf"],
            false
          ),
          new Email(
            "Congratulations!",
            "You're a winner! Claim your prize by following the instructions in the attached file.",
            "Promotions Team",
            "winner@promotions.com",
            "winner.png",
            ["claim_prize_instructions.txt"],
            true
          ),
          new Email(
            "Account Verification",
            "Verify your account to prevent service interruption. Click the link to verify now.",
            "Account Services",
            "account@serviceprovider.com",
            "verify.png",
            ["account_verification_link.html"],
            true
          ),
          new Email(
            "Product Launch",
            "Exciting new product launch! Check out the attached brochure for more details.",
            "Marketing Team",
            "marketing@companyabc.com",
            "product_launch.png",
            ["product_brochure.pdf"],
            false
          ),
          new Email(
            "Phishing Alert",
            "This is a simulated phishing test. Do not click on any links. Report suspicious emails.",
            "IT Security",
            "security@companyxyz.com",
            "alert.png",
            ["phishing_test_instructions.txt"],
            true
          ),
          new Email(
            "Exclusive Offer",
            "Limited-time exclusive offer! Save big on your next purchase. Don't miss out!",
            "Sales Team",
            "sales@companyxyz.com",
            "exclusive_offer.png",
            ["discount_code.pdf"],
            false
          ),
          new Email(
            "Important Notice",
            "Your account will be upgraded to a premium plan. Review the changes in the attached document.",
            "Customer Support",
            "support@companyxyz.com",
            "upgrade.png",
            ["upgrade_details.docx"],
            false
          )
      ];

    //VARIABLES----------------------------------------------------

    const [currentEmail, setCurrentEmail] = useState(startEmail);
    const [recentDeleted, setRecentDeleted] = useState([]);
    const [unreadCount, setUnreadCount] = useState(emails.length +1);
    const [score, setScore] = useState(0);
    const [timer, setTimer] = useState();

    //FUNCTIONS----------------------------------------------------

    function CheckWinLose() {
        if (timer <1) {
            if (game.CheckWin() && !game.CheckLose()) {
                if(game.misplacedEmails.length > 0) {
                    winEmail.addBody("<p>However!!!!</p>")
                    printMisplacedEmails(winEmail)
                }
                setCurrentEmail(winEmail)
            }
            else {
                if (game.numOfEmails >0) loseEmail.addBody("<p>Look at how many emails are left. Shame on you!</p>")
                if (game.misplacedEmails.length > 0) printMisplacedEmails(loseEmail)

                setCurrentEmail(loseEmail)
            }
        }
    }

    function printMisplacedEmails(email) {
        email.addBody("<p>Below are all the emails you let slip through the crack: </p>")
        email.addBody(game.misplacedEmails.map(e => 
            "<hr></hr>" +
            '<p style="color:' + (e.isPhish ? "red" : "green") + 
            ';">THIS EMAIL WAS ' + (e.isPhish ? "" : "NOT") + " A SCAM</p><p>From: "+
            e.fromName + " (" + e.fromEmail + ")</p><p>Subject: " +
            e.subject + "</p><p>" + 
            e.body + "</p><p>" + 
            e.attachments.join(", ") + "</p>"
            ).join("<br>"))
        }

    function addEmails() {
        for(let i = 0; i < emails.length; i++){
            inbox.addEmail(emails[i])
        }
        setUnreadCount(inbox.countUnread())
    }

    function setupInbox(){
        addEmails()
        setCurrentEmail(inbox.emails[0])
    }

    function checkStartGame() {
        if (currentEmail.body === startEmail.body) {
            setTimer(game.time)
            setupInbox()
            return true
        }
        return false
    }

    function ApproveEmail() {
        if (currentEmail === undefined || (timer && timer <1)) return

        if(!checkStartGame()) inbox.removeEmail(currentEmail)
        setUnreadCount(inbox.countUnread())

        if (currentEmail.isPhish) {
            game.addMiss(currentEmail)
            //TODO Visually penalize player?
        }
        else {
            game.addScore()
            bonusTime++
            setScore(game.score)
        }
        setCurrentEmail(inbox.emails[0])

    }

    function RejectEmail() {
        if (currentEmail === undefined|| (timer && timer <1)) return
        
        if(!checkStartGame()) inbox.removeEmail(currentEmail)

        trash.addEmail(currentEmail)
        setRecentDeleted([currentEmail, ...recentDeleted])
        setUnreadCount(inbox.countUnread())

        if (!currentEmail.isPhish) {
            game.addMiss(currentEmail)
            //TODO Visually penalize player?
        }
        else {
            game.addScore()
            bonusTime++
            setScore(game.score)
        }
        setCurrentEmail(inbox.emails[0])
    }

    function isDigit(value) {
        return typeof value === 'number' && !isNaN(value) && value % 1 === 0;
      }

    //HOOKS----------------------------------------------------

    //track time + trigger win condition
    useEffect(() => {
        if (timer === null) return
        if (timer < 1) {
            CheckWinLose()
            return
        }

        const interval = setInterval(() => {
            setTimer(prevTime => prevTime - 1 + bonusTime);
            bonusTime = 0;
        }, 1000);
        return () => clearInterval(interval);

    }, [timer]);

    //RENDER----------------------------------------------------

    return (
        <>
            <div>
                <h1>Inbox: {unreadCount}</h1>
                <h1>Time: {isDigit(timer) ? timer: game.time}</h1>
                <h1>Score: {score}</h1>

                <h1>Email:</h1>
                {currentEmail ? (
                    <>
                        <p>From: {currentEmail.fromName} ({currentEmail.fromEmail})</p>
                        <p>Subject: {currentEmail.subject}</p>
                        <div dangerouslySetInnerHTML={{ __html: currentEmail.body }} />
                        {currentEmail.attachments.length > 0 ? (<p>Attachments: {currentEmail.attachments.join(", ")}</p>) : null}
                    </>
                ) : (
                    <p>Your inbox is empty.</p>
                )}

                <h1>Recently Deleted:</h1>
                {recentDeleted.length > 0 ? (
                    <>
                        {recentDeleted.slice(0, 5).map((email, i) => (
                            <p key={i}>{email.fromName} {email.subject}</p>
                        ))}
                    </>
                ) : (
                    <p>Your trash is empty.</p>
                )}

                <button onClick={ApproveEmail}>Approve</button>
                <button onClick={RejectEmail}>Reject</button>
            </div>

        </>
    );
}
export default Debug;
