import Store from "electron-store";

export const getDefaultReminders = (): RemindersPreferences => [
  { type: "eyes", frequency: 18 * 60 * 1000 },
  { type: "fingers", frequency: 38 * 60 * 1000 },
  { type: "arms", frequency: 50 * 60 * 1000 },
  { type: "legs", frequency: 60 * 60 * 1000 },
  { type: "neck", frequency: 45 * 60 * 1000 },
  { type: "water", frequency: 33 * 60 * 1000 },
  { type: "posture", frequency: 27 * 60 * 1000 },
  { type: "breath", frequency: 22 * 60 * 1000 },
];

export const getRemindersFromStore = (store: Store<NamiPreferences>) => {
  if (!store) throw new Error("Store instance not loaded");
  const reminders = store.get("reminders");

  if (!reminders) return getDefaultReminders();
  return reminders;
};
