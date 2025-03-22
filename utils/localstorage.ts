export function setItem<T>(key: string, value: T): void {
  if (typeof window !== 'undefined') {
    localStorage.setItem(key, JSON.stringify(value));
  }
}

export function getItem<T>(key: string): T | null {
  if (typeof window !== 'undefined') {
    const item = localStorage.getItem(key);
    return item ? JSON.parse(item) : null;
  }
  return null;
}

export function removeItem(key: string): void {
  if (typeof window !== 'undefined') {
    localStorage.removeItem(key);
  }
}
