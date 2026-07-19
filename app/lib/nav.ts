export type NavLink = {
  href: string;
  label: string;
  exact?: boolean;
  match?: string[];
};

export function isActive(pathname: string, item: NavLink) {
  if (item.match?.some((m) => pathname.startsWith(m))) return true;
  if (item.exact) return pathname === item.href;
  return pathname.startsWith(item.href);
}
