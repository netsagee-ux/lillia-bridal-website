"use client";

import { useEffect, useState } from "react";
import { Heart } from "lucide-react";

const STORAGE_KEY = "lillia-favourite-designers";

export function SaveDesigner({ name }: { name: string }) {
  const [saved, setSaved] = useState(false);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    try {
      const value = JSON.parse(window.localStorage.getItem(STORAGE_KEY) || "[]");
      setSaved(Array.isArray(value) && value.includes(name));
    } catch {
      setSaved(false);
    }
    setReady(true);
  }, [name]);

  function toggle() {
    if (!ready) return;
    try {
      const value = JSON.parse(window.localStorage.getItem(STORAGE_KEY) || "[]");
      const current: string[] = Array.isArray(value) ? value.filter((item): item is string => typeof item === "string") : [];
      const next = saved ? current.filter(item => item !== name) : [...new Set([...current, name])];
      window.localStorage.setItem(STORAGE_KEY, JSON.stringify(next));
      setSaved(!saved);
    } catch {
      // Browsers may block local storage; avoid claiming a save succeeded.
    }
  }

  return (
    <button
      type="button"
      onClick={toggle}
      disabled={!ready}
      aria-pressed={saved}
      aria-label={saved ? `Remove ${name} from favourites` : `Save ${name} to favourites`}
      style={{ display: "inline-flex", alignItems: "center", gap: "0.6rem", border: "1px solid currentColor", borderRadius: "999px", padding: "0.75rem 1.1rem", background: "transparent", color: "inherit", cursor: "pointer", marginTop: "1.5rem", font: "inherit", fontSize: "0.85rem" }}
    >
      <Heart size={17} fill={saved ? "currentColor" : "none"} aria-hidden="true" />
      {saved ? "Saved to favourites" : "Save this designer"}
    </button>
  );
}
