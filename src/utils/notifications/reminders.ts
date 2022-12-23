import { Notification } from "electron";
export const getReminderNotification = (reminder: Reminder) => {
  switch (reminder.type) {
    case "eyes":
      return new Notification({
        title: "Blink your eyes",
        body: "Look away from the screen and slowly blink your eyes for 10 seconds.",
      });
    case "arms":
      return new Notification({
        title: "Stretch your arms",
        body: "Stretch your arms, and twist your wrists for 10 seconds.",
      });
    case "legs":
      return new Notification({
        title: "Stretch your legs",
        body: "Stand up, twist each ankle, and bend each knee.",
      });
    case "neck":
      return new Notification({
        title: "Turn your neck",
        body: "Turn your head in all directions. Repeat 3 times.",
      });
    case "water":
      return new Notification({
        title: "Hydrate yourself",
        body: "Drink a glass of water.",
      });
    case "posture":
      return new Notification({
        title: "Watch your posture",
        body: "Make sure your back is straight.",
      });
    case "breath":
      return new Notification({
        title: "Focus on your breath",
        body: "Inhale and exhale deeply, thrice.",
      });
    default:
      return null;
  }
};
