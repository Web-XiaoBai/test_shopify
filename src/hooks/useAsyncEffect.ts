import { useEffect } from 'react';

const useAsyncEffect = (effect: () => Promise<void | (() => void)>, dependencies?: any[]) => {
  return useEffect(() => {
    const cleanupPromise = effect()
    return () => { cleanupPromise.then(cleanup => cleanup && cleanup()) }
  }, dependencies)
};

export default useAsyncEffect;