export const bannerVariants = ["info", "warning", "danger"] as const;
export type BannerVariant = (typeof bannerVariants)[number];
