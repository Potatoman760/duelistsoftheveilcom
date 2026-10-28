/**
 * Attributes for an anchor, decided by where it points.
 *
 * External links open in a new tab so a visitor never loses the site; internal
 * ones and unset placeholders (`#`) are left alone, which matters because the
 * footer renders both from the same list.
 */
export const isExternal = (href: string): boolean => /^https?:\/\//i.test(href);

export function linkAttrs(href: string) {
  return isExternal(href)
    ? { target: "_blank", rel: "noopener noreferrer" }
    : {};
}
