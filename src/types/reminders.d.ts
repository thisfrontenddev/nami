declare interface Reminder {
  type:
    | "eyes"
    | "fingers"
    | "arms"
    | "legs"
    | "neck"
    | "water"
    | "posture"
    | "breath";
  frequency: number;
}
