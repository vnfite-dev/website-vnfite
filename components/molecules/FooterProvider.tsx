"use client";

import { createContext, useContext, useState } from "react";

interface FooterContextType {
    isOpenFooter: boolean;
    setIsOpenFooter: (value: boolean) => void;
    isDisabled: boolean;
    setIsDisabled: (value: boolean) => void;
}

const FooterContext = createContext<FooterContextType | undefined>(undefined);

export const FooterProvider = ({ children }: { children: React.ReactNode }) => {
    const [isOpenFooter, setIsOpenFooter] = useState(false);
    const [isDisabled, setIsDisabled] = useState(false);

    return (
        <FooterContext.Provider value={{ isOpenFooter, setIsOpenFooter, isDisabled, setIsDisabled }}>
            {children}
        </FooterContext.Provider>
    );
};

export const useFooter = (): FooterContextType => {
    const context = useContext(FooterContext);
    if (!context) {
        throw new Error("useFooter must be used within a FooterProvider");
    }
    return context;
};
