import React, {useEffect,useState} from 'react';
import {Email} from '../components/Email';
import {EmailFolder} from '../components/EmailFolder';
import {Game} from '../components/Game';

function Debug() {

  const emails = [
    new Email(
      "Hello",
      "Hello, this is a test email.",
      "John Doe",
      "jodo@gmail.com",
      "image.png",
      ["image.png", "file.docx"],
      false),
    new Email(
      "Test",
      "This is a test email.",
      "Jane Doe",
      "jado@gmail.com",
      "image.png",
      ["image.png", "file.exe"],
    )
      
    ]

  const game = new Game(20,10);
  const inbox = new EmailFolder("Inbox", 100);
  const trash = new EmailFolder("Trash", 5);
  const [currentEmail, setCurrentEmail] = useState(null);
  const [recentDeleted, setRecentDeleted] = useState([]);
  const [unreadCount, setUnreadCount] = useState(0);
  const [score, setScore] = useState(0);
  const [timer, setTimer] = useState(game.time);


  function CheckWinLose() {
    if (timer === 0) {
      if (game.CheckWin() && !game.CheckLose()) {
        alert("You Win!");
      } else {
        alert("You Lose!");
      }
    }
  }

  //setup inbox
  useEffect(() => { 
    inbox.emails = emails
    setUnreadCount(inbox.countUnread())
    setCurrentEmail(inbox.emails[0])
  },[])

  //track time + trigger win condition
  useEffect(() => {
    if (timer===0) {
      CheckWinLose()
      return
    }
    const interval = setInterval(() => {
      setTimer(prevTime => prevTime - 1);
    
    }, 1000);
    return () => clearInterval(interval);

  }, [timer]);


  return (
    <>
    <div>
      <h1>Inbox (Unread): {unreadCount}</h1>
      <h1>Time: {timer}</h1>
      <h1>Score: {score}</h1>

      <h1>Email:</h1>
      {currentEmail ? (
        <>
          <p>From: {currentEmail.fromName} ({currentEmail.fromEmail})</p>
          <p>Subject: {currentEmail.subject}</p>
          <p><div dangerouslySetInnerHTML={{ __html: currentEmail.body }}/></p>
          <p>Attachments: {currentEmail.attachments.join(", ")}</p>
        </>
      ) : (
        <p>Your inbox is empty.</p>
      )}

        </div>
    
    </>
  );
}
export default Debug;
