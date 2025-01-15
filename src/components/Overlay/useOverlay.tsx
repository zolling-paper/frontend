import { useContext } from "react";

import { OverlayContext } from "./OverlayContext";

export const useOverlay = () => {
    const context = useContext(OverlayContext);
    if (!context) {
        throw new Error('useOverlay must be used within an OverlayProvider');
    }

    const open = (key: string, overlayElement: React.ReactNode) => {
        context.addOverlay(key, overlayElement);
    };

    const close = (key: string) => {
        context.removeOverlay(key);
    };

    return { open, close };
};
