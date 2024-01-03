import { useState } from "react";
import { useEffect } from "react";

//Hook that takes in an initial state and a key for the local storage key-value pair. Stores the initial state in the local storage
//returns the value stored and a function to change the value. Every time the value changes it changes the stored value.

export function useLocalStorageState(initialState, key) {
  const [value, setValue] = useState(function () {
    const storedValue = localStorage.getItem(key);
    return storedValue ? JSON.parse(storedValue) : initialState;
  });

  useEffect(
    function () {
      localStorage.setItem(key, JSON.stringify(value));
    },
    [value, key]
  );
  return [value, setValue];
}
