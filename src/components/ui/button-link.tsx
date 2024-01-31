import * as React from "react";
import { Link as RouterLink } from "react-router-dom";

import { cn } from "../../lib/utils";
import { ButtonProps, buttonVariants } from "./button";

// Define a new interface ButtonLinkProps that extends ButtonProps and adds 'to' prop
interface ButtonLinkProps extends ButtonProps {
    className?: string;
    to: string;
    onClick?: () => void;
    children: React.ReactNode;
}

const ButtonLink = React.forwardRef<HTMLAnchorElement, ButtonLinkProps>(({ className, variant, size, to, onClick, children }, ref) => {
    return (
        <RouterLink className={cn(buttonVariants({ variant, size, className }))} ref={ref} to={to || ""} onClick={onClick}>
            {children}
        </RouterLink>
    );
});

ButtonLink.displayName = "ButtonLink";

export { ButtonLink };
