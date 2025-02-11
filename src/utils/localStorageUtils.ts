// utils/localStorageUtils.ts

/**
 * Retrieves data from localStorage.
 * Safely checks for window object to avoid SSR errors.
 * @param {string} key - The key to retrieve from localStorage.
 * @returns {string | null} The retrieved item or null if not found.
 */
export function getFromLocalStorage(key: string): string | null {
  if (typeof window !== "undefined") {
    return localStorage.getItem(key);
  }
  return null;
}

/**
 * Saves data to localStorage.
 * Safely checks for window object to avoid SSR errors.
 * @param {string} key - The key under which data is stored.
 * @param {unknown} value - The value to store in localStorage.
 */
export function saveToLocalStorage(key: string, value: unknown): void {
  if (typeof window !== "undefined") {
    localStorage.setItem(key, JSON.stringify(value));
  }
}

/**
 * Example usage:
 * const userSettings = getFromLocalStorage("userSettings");
 * saveToLocalStorage("userSettings", settings);
 */
