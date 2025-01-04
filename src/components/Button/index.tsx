import { ReactNode } from 'react';
import style from './Button.module.css'

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: "secondary" | "primary" | "switch" | "social";
    children?: ReactNode;
    onClick?: React.MouseEventHandler<HTMLButtonElement>;
}

const Button: React.FC<Props> = ({
    variant = 'primary',
    children,
    onClick,
    ...props
}) => {
    const btnDefaultClasses: string = `${style.btn} ${style[`btn-${variant}`]}`;

    return (
        <button
            className={btnDefaultClasses}
            onClick={onClick}
            {...props}
        >
            {children}
        </button>
    );
};

export default Button;