import { useState, useEffect } from 'react';
import { useLocalStorage } from '../hooks/useLocalStorage';

export const useDarkMode = () => {
    const [isDark, setIsdark] = useLocalStorage('dark', false);
  
    const toggleDark = () => {
      document.body.classList.toggle('dark-mode')
      setIsdark(!isDark);
    }
  
    useEffect(() => {
      isDark
        ? document.body.classList.add('dark-mode')
        : document.body.classList.remove('dark-mode');
    }, [isDark])
  
    return [isDark, toggleDark];
  }
  