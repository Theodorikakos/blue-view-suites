// Low-quality image placeholder (LQIP) — a tiny blurred gradient that matches our brand palette
// Used as blurDataURL for Next.js Image components
export const blurPlaceholder =
  "data:image/svg+xml;base64," +
  Buffer.from(
    `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 8 5">
      <filter id="b" color-interpolation-filters="sRGB">
        <feGaussianBlur stdDeviation="1"/>
      </filter>
      <rect preserveAspectRatio="none" filter="url(#b)" x="0" y="0" height="100%" width="100%" fill="#c8e6fc"/>
      <rect preserveAspectRatio="none" filter="url(#b)" x="0" y="0" height="100%" width="100%" fill="#132f4c" opacity="0.3"/>
    </svg>`
  ).toString("base64");

// Alternative warmer placeholder for sand-themed sections
export const blurPlaceholderWarm =
  "data:image/svg+xml;base64," +
  Buffer.from(
    `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 8 5">
      <filter id="b" color-interpolation-filters="sRGB">
        <feGaussianBlur stdDeviation="1"/>
      </filter>
      <rect preserveAspectRatio="none" filter="url(#b)" x="0" y="0" height="100%" width="100%" fill="#f5f0e8"/>
      <rect preserveAspectRatio="none" filter="url(#b)" x="0" y="0" height="100%" width="100%" fill="#d4c4a8" opacity="0.4"/>
    </svg>`
  ).toString("base64");
