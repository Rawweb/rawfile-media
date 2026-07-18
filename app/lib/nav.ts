export type NavLink = { href: string; label: string; exact?: boolean };

export function isActive(pathname: string, item: NavLink) {
  if (item.exact) return pathname === item.href;
  return pathname.startsWith(item.href);
}
