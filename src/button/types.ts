export const buttonColors = ["default", "primary", "danger"] as const;
export type ButtonColor = (typeof buttonColors)[number];

export const sizes = ["default"] as const;
export type ButtonSize = (typeof sizes)[number];
