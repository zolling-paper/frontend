import React, { createContext, useCallback, useMemo, useState } from "react";
import { createPortal } from "react-dom";

interface OverlayContextType {
    overlayMap: Map<string, React.ReactNode>;
    addOverlay: (key: string, overlayElement: React.ReactNode) => void;
    removeOverlay: (key: string) => void;
    portalContainerRef: HTMLDivElement | null;
}

export const OverlayContext = createContext<OverlayContextType | null>(null);

export const OverlayProvider = ({ children }: { children: React.ReactNode }) => {
    const [overlayMap, setOverlayMap] = useState<Map<string, React.ReactNode>>(new Map());
    const [portalContainerRef, setPortalContainerRef] =
    useState<HTMLDivElement | null>(null);

    const addOverlay = useCallback((key: string, overlayElement: React.ReactNode) => {
        setOverlayMap(prev => {
            const copy = new Map(prev);
            copy.set(key, overlayElement);
            return copy;
        });
    }, []);

    const removeOverlay = useCallback((key: string) => {
        setOverlayMap(prev => {
            const copy = new Map(prev);
            copy.delete(key);
            return copy;
        });
    }, []);

    const context = useMemo(() => ({
        overlayMap,
        addOverlay,
        removeOverlay,
        portalContainerRef,
    }), [overlayMap, addOverlay, removeOverlay, portalContainerRef]);

    return (
        <OverlayContext.Provider value={context}>
            {children}
            <div
                id="overlay-container"
                ref={(elem) => {
                    if (portalContainerRef !== null || elem === null) {
                        return;
                    }
                    setPortalContainerRef(elem);
                }}
            />
        </OverlayContext.Provider>
    );
};

export const OverlayConsumer = () => {
    return (
        <OverlayContext.Consumer>
            {(context) => {
                if (!context) {
                    return null;
                }
                if (context.portalContainerRef === null) {
                  return null;
                }
                const elements = [...context.overlayMap.entries()].map(([id, element]) => (
                    <React.Fragment key={id}>{element}</React.Fragment>
                ));

                return createPortal(elements, context.portalContainerRef);
              }}
        </OverlayContext.Consumer>
    );
};

export const Overlay = {
    Provider: OverlayProvider,
    Consumer: OverlayConsumer,
};
