import { useCallback, useEffect, useRef, useState } from "react";

/** Copies text to the clipboard and flags `copied` for a short moment. */
export function useCopy(timeout = 2000) {
  const [copied, setCopied] = useState(false);
  const timer = useRef<number>();

  useEffect(() => () => window.clearTimeout(timer.current), []);

  const copy = useCallback(
    async (text: string) => {
      try {
        await navigator.clipboard.writeText(text);
      } catch {
        return false;
      }
      setCopied(true);
      window.clearTimeout(timer.current);
      timer.current = window.setTimeout(() => setCopied(false), timeout);
      return true;
    },
    [timeout]
  );

  return { copied, copy };
}
