import React, { useState, useEffect } from 'react';
import LoadingScreen from '../components/loading_screen';
import Trash from '../assets/trash.svg';
import Check from '../assets/check.svg';
import Quit from '../assets/quit.svg';
import ProfileImage from '../assets/creepyguy.jpg';
import Approve from '../assets/sounds/approve.wav';
import Delete from '../assets/sounds/delete.wav';
import GameOver from '../assets/sounds/game-over.wav';
import GameWin from '../assets/sounds/game-win.wav';
import Dots from '../assets/dots.svg';
import { Link } from 'react-router-dom';
import { Email } from '../components/Email';
import { EmailFolder } from '../components/EmailFolder';
import { Game } from '../components/Game';


let setup = false;
let bonusTime = 0;
const numOfEmails = localStorage.getItem('round')
const game = new Game(numOfEmails * 3, numOfEmails + 1);
const inbox = new EmailFolder("Inbox", 100);
const trash = new EmailFolder("Trash", 5);

//DEBUG EMAILS --- CHANGE LATER ---------------------

const startEmail = new Email(
    "Today's Task",
    "<p>Time to work, rookie! You have until I get back to sort these emails.</p><p>You must finish on time. <u style='color: red;'>NO EXPECPTIONS.</u></p><p>Approve this email and get stepping.</p>",
    "Boss Man",
    "boss@gmail.com",
    "boss.png",
    [],
    false,
    true
)

const winEmail = new Email(
    "Good Work",
    "<p>Not bad, rookie.</p>",
    "Boss Man",
    "boss@gmail.com",
    "boss.png",
    [],
    false,
    true
)

const loseEmail = new Email(
    "You're Fired",
    "<p>You absolute failure.</p>",
    "Boss Man",
    "boss@gmail.com",
    "boss.png",
    [],
    false,
    true
)

const emails = [
    new Email(
        "Greetings",
        "Dear Customer, your account has been updated. Please review the changes.",
        "Company ABC",
        "info@companyabc.com",
        "icon.png",
        ["file.pdf", "image.jpg"],
        false,
        true
    ),
    new Email(
        "Important Notice",
        "Your recent purchase confirmation is attached. If you didn't make this purchase, please contact us.",
        "Online Store",
        "noreply@store.com",
        "icon.png",
        ["receipt.pdf", "promo.png"],
        false,
        true
    ),
    new Email(
        "Verify Your Account",
        "We noticed unusual activity on your account. Please click the link to verify your identity.",
        "Security Team",
        "security@securemail.com",
        "shield.png",
        ["verification.docx"],
        true,
        false
    ),
    new Email(
        "Urgent Action Required",
        "Your attention is needed immediately. Click the link to take action.",
        "Customer Support",
        "support@urgent.com",
        "alert.png",
        ["action_required.pdf"],
        true,
        false
    ),
    new Email(
        "Exclusive Offer",
        "Congratulations! You've been selected for an exclusive offer. Claim your reward now.",
        "Promotions Team",
        "promo@exclusive.com",
        "gift.png",
        ["special_offer.jpg"],
        false,
        true
    ),
    new Email(
        "Invoice Reminder",
        "Your invoice is due soon. Please make payment to avoid any disruptions.",
        "Billing Department",
        "billing@companyxyz.com",
        "invoice.png",
        ["invoice.pdf"],
        false,
        true
    ),
    new Email(
        "Account Update",
        "Action required: Update your account information to continue enjoying our services.",
        "Service Provider",
        "info@serviceprovider.com",
        "update.png",
        ["account_update.docx"],
        true,
        true
    ),
    new Email(
        "Survey Invitation",
        "We value your opinion. Participate in our survey and get a chance to win exciting prizes.",
        "Research Team",
        "survey@research.com",
        "survey.png",
        ["survey_link.txt"],
        false,
        true
    ),
    new Email(
        "Important Announcement",
        "An important announcement regarding changes to our policies. Please review and acknowledge.",
        "Management Team",
        "management@companyxyz.com",
        "announcement.png",
        ["policy_changes.pdf"],
        false,
        true
    ),
    new Email(
        "Account Suspension",
        "Due to suspicious activity, your account has been temporarily suspended. Click to appeal.",
        "Security Team",
        "security@securemail.com",
        "lock.png",
        ["appeal_form.docx"],
        true,
        true
    ),
    new Email(
        "Invoice #1234",
        "Attached is the invoice for your recent purchase. Please review and make the payment.",
        "Billing Department",
        "billing@companyxyz.com",
        "invoice.png",
        ["invoice_1234.pdf"],
        false,
        true
    ),
    new Email(
        "Security Alert",
        "We detected unauthorized access to your account. Click to secure your account now.",
        "Security Team",
        "security@securemail.com",
        "security.png",
        ["account_security.pdf"],
        true,
        true
    ),
    new Email(
        "Job Opportunity",
        "Exciting job opportunity available! Apply now and join our dynamic team.",
        "Human Resources",
        "hr@companyabc.com",
        "job.png",
        ["job_application_form.docx"],
        false,
        true
    ),
    new Email(
        "Important Update",
        "Important system update scheduled. Please read the attached document for details.",
        "IT Department",
        "it@companyxyz.com",
        "update.png",
        ["system_update_details.pdf"],
        false,
        true
    ),
    new Email(
        "Congratulations!",
        "You're a winner! Claim your prize by following the instructions in the attached file.",
        "Promotions Team",
        "winner@promotions.com",
        "winner.png",
        ["claim_prize_instructions.txt"],
        true,
        true
    ),
    new Email(
        "Account Verification",
        "Verify your account to prevent service interruption. Click the link to verify now.",
        "Account Services",
        "account@serviceprovider.com",
        "verify.png",
        ["account_verification_link.html"],
        true,
        true
    ),
    new Email(
        "Product Launch",
        "Exciting new product launch! Check out the attached brochure for more details.",
        "Marketing Team",
        "marketing@companyabc.com",
        "product_launch.png",
        ["product_brochure.pdf"],
        false,
        true
    ),
    new Email(
        "Phishing Alert",
        "This is a simulated phishing test. Do not click on any links. Report suspicious emails.",
        "IT Security",
        "security@companyxyz.com",
        "alert.png",
        ["phishing_test_instructions.txt"],
        true,
        true
    ),
    new Email(
        "Exclusive Offer",
        "Limited-time exclusive offer! Save big on your next purchase. Don't miss out!",
        "Sales Team",
        "sales@companyxyz.com",
        "exclusive_offer.png",
        ["discount_code.pdf"],
        false,
        true
    ),
    new Email(
        "Important Notice",
        "Your account will be upgraded to a premium plan. Review the changes in the attached document.",
        "Customer Support",
        "support@companyxyz.com",
        "upgrade.png",
        ["upgrade_details.docx"],
        false,
        true
    )
]
//DEBUG EMAILS --- CHANGE LATER ---------------------



const GameScreen = () => {


    //---------------------------------------------------------
    //VARIABLES----------------------------------------------------
    const [isLoading, setIsLoading] = useState(true);
    const [playSound, setPlaySound] = useState(null);

    const [currentEmail, setCurrentEmail] = useState(startEmail);
    const [recentDeleted, setRecentDeleted] = useState([]);
    const [unreadCount, setUnreadCount] = useState(emails.length + 1);
    const [score, setScore] = useState(0);
    const [timer, setTimer] = useState();

    //---------------------------------------------------------
    //FUNCTIONS----------------------------------------------------

    function CheckWinLose() {
        if (timer < 1) {
            if (game.CheckWin() && !game.CheckLose()) {
                if (game.misplacedEmails.length > 0) {
                    winEmail.addBody("<p>However!!!!</p>")
                    printMisplacedEmails(winEmail)
                }
                setCurrentEmail(winEmail)
            }
            else {
                if (game.numOfEmails > 0) loseEmail.addBody("<p>Look at how many emails are left. Shame on you!</p>")
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
            ';">THIS EMAIL WAS ' + (e.isPhish ? "" : "NOT") + " A SCAM</p><p>From: " +
            e.fromName + " (" + e.fromEmail + ")</p><p>Subject: " +
            e.subject + "</p><p>" +
            e.body + "</p><p>" +
            e.attachments.join(", ") + "</p>"
        ).join("<br>"))
    }

    function addEmails() {
        for (let i = 0; i < emails.length; i++) {
            inbox.addEmail(emails[i])
        }
        setUnreadCount(inbox.countUnread())
    }

    function setupInbox() {
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

    const handleButtonClick = (sound) => {
        setPlaySound(sound);
    };

    function ApproveEmail(sound) {
        handleButtonClick(sound)
        if (currentEmail === undefined || (timer && timer < 1)) return

        if (!checkStartGame()) inbox.removeEmail(currentEmail)
        setUnreadCount(inbox.countUnread())

        if (currentEmail.isPhish) {
            game.addMiss(currentEmail)
        }
        else {
            game.addScore()
            bonusTime++
            setScore(game.score)
        }
        setCurrentEmail(inbox.emails[0])

    }

    function RejectEmail(sound) {
        handleButtonClick(sound)
        if (currentEmail === undefined || (timer && timer < 1)) return

        if (!checkStartGame()) inbox.removeEmail(currentEmail)

        trash.addEmail(currentEmail)
        setRecentDeleted([currentEmail, ...recentDeleted])
        setUnreadCount(inbox.countUnread())

        if (!currentEmail.isPhish) {
            game.addMiss(currentEmail)
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

    //---------------------------------------------------------
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


    //play sound effect
    useEffect(() => {
        if (playSound) {
            const audio = new Audio(playSound);
            audio.play()
                .then(() => {
                    setPlaySound(null);
                })
                .catch(error => console.error("Error playing the sound:", error));
        }
    }, [playSound]);

    //set up game - LOADING SCREEN
    useEffect(() => {
        const timer = setTimeout(() => {
            setIsLoading(false);
        }, 500);
        return () => clearTimeout(timer);
    }, []);

    //---------------------------------------------------------
    //RENDER----------------------------------------------------
    if (isLoading) {
        return <LoadingScreen />;
    }
    return (
        <div className="flex flex-col h-screen">

            <header className="bg-headerColor h-1/6">
                <div className="bg-primary 200 h-1/6">
                    <p className="text-background font-pixelated text-2xl">DON'T PHISH ME</p>
                </div>
                <p className="text-background font-pixelated p-8">Inbox: {unreadCount} (unread mail)</p>
            </header>

            <div className="flex flex-1 overflow-hidden">

                <div className="w-1/4 bg-secondaryLight p-4 flex flex-col items-center">

                    {/* ABOUT SECTION */}
                    {currentEmail ? (
                        <div className="flex-1 overflow-auto w-full">
                            <h1 className="font-pixelated font-bold text-4xl text-primary mt-8 mb-6 text-center">About</h1>
                            <div className="w-48 h-48 overflow-hidden shadow-circle object-center flex justify-center items-center mx-auto mb-10"> {/* Centered div */}
                                <img src={ProfileImage} className="w-full h-full object-cover object-center" /> {/* Centered image */}
                            </div>
                            <p className="font-cmd text-s bg-background border-2 border-secondary py-2 pl-6 m-4 shadow-custom text-left"><span className="font-black">Name: </span>{currentEmail.fromName}</p>
                            <p className="font-cmd text-xs bg-background border-2 border-secondary py-6 pl-6 m-4 shadow-custom text-left">
                                <span className="font-black">from:</span> &lt;{currentEmail.fromEmail}&gt;<br />
                                <span className="font-black">to:</span> &lt;dontphishme@dpm.com&gt;<br />
                                <span className="font-black">date: </span>{new Date().toLocaleString() }<br />
                                <span className="font-black">subject: </span>{currentEmail.subject}<br />
                                <span className="font-black">security: </span>{currentEmail.security ? "Encrypted" : "Unverified"}<br />
                            </p>
                        </div>) : null}
                </div>


                <div className="bg-background border-secondary border-2 flex-1 overflow-auto">
                    <div className="bg-background border-2 border-secondary shadow-custom flex justify-between">
                        <p className="px-4 py-1 font-pixelated">SBU Hacks Mail</p>
                        <p className="px-4 py-1 font-pixelated"> - [] X</p>
                    </div>

                    <div className="bg-background border-2 border-secondary py-2 pl-6 m-6 shadow-custom">
                        {currentEmail ? (
                            <p className="font-cmd font-bold">{currentEmail.subject}</p>) : null}
                    </div>
                    <div className="bg-background border-2 border-secondary py-2 pl-6 m-6 shadow-custom">
                        <p className="font-cmd">
                            {currentEmail ? (<div dangerouslySetInnerHTML={{ __html: currentEmail.body }} /> )   : (
                                <p>Your inbox is empty.</p>
                            )}

                        </p>
                    </div>
                    <div className="flex justify-center items-center">
                        <button className="text-center font-cmd bg-background border-2 border-secondary py-2 pl-6 m-4 px-14 py-2 shadow-custom">Reply</button>
                        <button className="text-center font-cmd bg-background border-2 border-secondary py-2 pl-6 m-4 px-14 py-2 shadow-custom">Forward</button>
                        <button className="text-center font-cmd bg-background border-2 border-secondary flex items-center justify-center py-2 pl-6 m-4 px-14 py-2 shadow-custom">
                            More <img src={Dots} alt="More" className="h-6 ml-2" />
                        </button>
                    </div>
                </div>


                <div className="w-1/5 bg-secondary p-4 flex flex-col">
                    {/* Control Panel */}
                    <div className="flex-1 overflow-auto flex flex-col items-center justify-start">
                        <h1 className="font-pixelated text-3xl text-background py-10">Controls</h1>
                        <Link to="/" className="bg-background hover:bg-background/[0.7] text-white p-4 mb-4 w-32 h-32 flex flex-col items-center justify-center shadow-button">
                            <div className="flex flex-col items-center justify-center">
                                <img src={Quit} alt="Quit Icon" className="h-16" />
                                <h1 className="text-primary font-pixelated">Quit Game</h1>
                            </div>
                        </Link>
                        <button onClick={() => RejectEmail(Delete)}
                            className="bg-red-500 hover:bg-red-600 text-white p-4 mb-4 w-32 h-32 flex flex-col items-center justify-center shadow-button">
                            <div className="flex flex-col items-center justify-center">
                                <img src={Trash} alt="Trash Icon" className="h-16" />
                                <h1 className="text-primary font-pixelated">Delete Email</h1>
                            </div>
                        </button>
                        <button onClick={() => ApproveEmail(Approve)}
                            className="bg-green-500 hover:bg-green-600 text-white p-4 w-32 h-32 flex flex-col items-center justify-center shadow-button">
                            <div className="flex flex-col items-center justify-center">
                                <img src={Check} alt="Check Icon" className="h-16" />
                                <h1 className="text-primary font-pixelated">Approve Email</h1>
                            </div>
                        </button>
                        <h1 className="font-pixelated text-xl text-background py-10">Time Left: {isDigit(timer) ? timer: game.time}</h1>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default GameScreen;