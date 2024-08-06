function askNotificationPermission() {
  // Check if the browser supports notifications
  if (!("Notification" in window)) {
    console.log("This browser does not support notifications.");
    return;
  }
  Notification.requestPermission().then((permission) => {
    // set the button to shown or hidden, depending on what the user answers
    $("#enableBtn").prop('disabled', permission === "granted");
  });
}

function sendNotification() {
  const title = "Hello World";
  const img = "/to-do-notifications/img/icon-128.png";
  const text = `HEY! Your task "${title}" is now overdue.`;
  const notification = new Notification("title", { body: "body", icon: "img/icon.png" });
  console.log(notification)
}