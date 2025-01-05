import style from './Button.module.css'

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: "secondary" | "primary" | "switcher" | "socials" | "turn";
    customClass?: string;
}

const Button: React.FC<Props> = ({
    variant = 'primary',
    customClass,
    children,
    ...props
}) => {
    const btnClasses: string = `${style.btn} ${style[`btn-${variant}`]} ${customClass || ""}`;

    return (
        <button
            className={btnClasses}
            {...props}
        >
            {children}
        </button>
    );
};

export default Button;