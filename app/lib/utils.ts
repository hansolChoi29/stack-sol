import { Slug } from "../data/Intro";

export function getSlugTopFromPath(pathname: string): Slug | null {
  const seg = pathname.split("/")[1] ?? "";
  if (
    seg === "coreboard" ||
    seg === "momentix" ||
    seg === "camkeep" ||
    seg === "dogo"
  )
    return seg;
  return null;
}

export function getSlugSideFromPath(pathname: string) {
  // pathname: "/momentix", "/momentix/abc" etc
  const seg = pathname.split("/")[1] ?? "";
  if (
    seg === "coreboard" ||
    seg === "momentix" ||
    seg === "camkeep" ||
    seg === "dogo"
  )
    return seg;
  return null;
}
