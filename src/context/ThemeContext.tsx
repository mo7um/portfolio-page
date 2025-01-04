import { useState, useEffect, createContext, ReactNode} from 'react';

export const ThemeContext = createContext<[string, React.Dispatch<React.SetStateAction<string>>] | undefined>(undefined);

interface Props {
    children: ReactNode;
}

export const ThemeProvider: React.FC<Props> = ({ children }) => {
    const [theme, setTheme] = useState(() => {
        // Проверяем текущую тему из localStorage или устанавливаем темную по умолчанию
        return localStorage.getItem('theme') || 'dark';
    });

    // Синхронизация атрибута data-theme и сохранение в localStorage
    useEffect(() => {
        document.documentElement.setAttribute('data-theme', theme);
        localStorage.setItem('theme', theme)
    }, [theme]);

    return (
        <ThemeContext.Provider value={[theme, setTheme]}>
            {children}
        </ThemeContext.Provider>
    );
};
