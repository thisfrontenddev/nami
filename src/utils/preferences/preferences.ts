import Store, { Schema } from "electron-store";
import { getDefaultReminders } from "./reminders";

const schema: Schema<NamiPreferences> = {
  reminders: {
    type: "array",
    items: {
      type: "object",
      properties: {
        type: {
          enum: [
            "eyes",
            "fingers",
            "arms",
            "legs",
            "neck",
            "water",
            "posture",
            "breath",
          ],
        },
        frequency: { type: "number" },
      },
    },
  },
};

const defaults: NamiPreferences = {
  reminders: getDefaultReminders(),
};

const Preferences = new Store({ schema, defaults });

export default Preferences;
