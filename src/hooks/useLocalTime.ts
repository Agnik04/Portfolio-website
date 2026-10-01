import { useEffect, useState } from "react";

/** Current time in the given IANA time zone, refreshed every 30 seconds. */
export function useLocalTime(timeZone: string) {
  const [time, setTime] = useState(() => format(timeZone));

  useEffect(() => {
    setTime(format(timeZone));
    const id = window.setInterval(() => setTime(format(timeZone)), 30_000);
    return () => window.clearInterval(id);
  }, [timeZone]);

  return time;
}

function format(timeZone: string) {
  return new Intl.DateTimeFormat("en-US", {
    hour: "numeric",
    minute: "2-digit",
    timeZone,
  }).format(new Date());
}
