export const pillColors = ["default", "primary", "danger", "warning"] as const;
export type PillColor = (typeof pillColors)[number];

export const pillSizes = ['default', 'small'] as const;
export type PillSize = (typeof pillSizes)[number];
