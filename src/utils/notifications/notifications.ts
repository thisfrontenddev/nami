import { Notification } from "electron";

/**
 * Iterates over the list of Notifications and returns
 * a list of interval clear functions to be called for
 * cleanup.
 */
export const createNotificationIntervals = (
  scheduledNotifications: Map<Reminder, Notification>
) => {
  if (!scheduledNotifications) return [];
  const intervals = [];
  for (const [reminder, notification] of scheduledNotifications) {
    const interval = setInterval(() => {
      notification.show();
    }, reminder.frequency);
    intervals.push(interval);
  }
  return intervals;
};
