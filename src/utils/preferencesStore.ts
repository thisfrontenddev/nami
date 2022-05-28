import Store from "electron-store";

export type Preferences = {
  TIMER_INTERVAL: number;
};

export const PreferencesStore = new Store<Preferences>();

export default PreferencesStore;
