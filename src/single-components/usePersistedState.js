import { useEffect, useState } from "react";

export default function usePersistedState(key, defaultValue) {
  const LocalValue = typeof window !== "undefined" && localStorage.getItem(key);

  const [state, setState] = useState(() => JSON.parse(LocalValue));
  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(state));
  }, [key, state]);
  return [state, setState];
}
