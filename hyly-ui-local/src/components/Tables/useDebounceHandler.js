import { useEffect, useState } from 'react'

export const useDebounceHandler = (handler, debouncedValue) => {
  useEffect(() => {
    if (typeof handler === 'function') handler(debouncedValue)
  }, [debouncedValue])
}
