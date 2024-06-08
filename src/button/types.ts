export const buttonColors = ["default", "primary", "danger"] as const;
export type ButtonColors = (typeof buttonColors)[number];
