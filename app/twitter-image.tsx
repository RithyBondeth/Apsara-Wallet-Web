import {
  OG_ALT,
  OG_CONTENT_TYPE,
  OG_SIZE,
  renderBrandOgImage,
} from "@/components/utils/og-image";

export const alt = OG_ALT;
export const size = OG_SIZE;
export const contentType = OG_CONTENT_TYPE;

// Same card as Open Graph — Twitter/X does not fall back to og:image once a
// twitter:card is declared, so it needs its own tag.
export default async function TwitterImage() {
  return renderBrandOgImage();
}
