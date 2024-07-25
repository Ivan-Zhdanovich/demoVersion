
export interface IIconProps {
    classNames?: string;
}

export interface IEnterModal {
    email?: string;
    phone?: string;
    open: boolean;
    close: () => void;
}