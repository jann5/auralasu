'use client';

import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useConfiguratorStore } from '@/lib/store/configuratorStore';
import { MODELS } from '@/data/models';
import Image from 'next/image';

const MODEL_WOOD_IMAGE_MAP: Record<string, Record<string, string>> = {
    wisla: {
        dab_naturalny: '/images/zdjecia-safe/calm_dab_naturalny.png',
        dab_wedzony: '/images/zdjecia-safe/calm_dab_wedzony.png',
        jesion_jasny: '/images/zdjecia-safe/calm_jesion_jasny.png',
        jesion_smolowany: '/images/zdjecia-safe/calm_jesion_smolowany.png',
    },
    bieszczady: {
        dab_wedzony: '/images/zdjecia-safe/facet_dab_wedzony.png',
        jesion_jasny: '/images/zdjecia-safe/facet_jesion_jasny.png',
        jesion_smolowany: '/images/zdjecia-safe/facet_jesion_smolowany.png',
    },
    tatry: {
        dab_naturalny: '/images/zdjecia-safe/soft_dab_naturalny.jpg',
        dab_wedzony: '/images/zdjecia-safe/soft_dab_wedzony.jpg',
        jesion_jasny: '/images/zdjecia-safe/soft_jesion_jasny.png',
        jesion_smolowany: '/images/zdjecia-safe/soft_jesion_smolowany.png',
    },
    karpaty: {
        jesion_jasny: '/images/zdjecia-safe/rhythm_jesion_jasny.png',
    },
    sudety: {
        dab_naturalny: '/images/zdjecia-safe/geo_dab_naturalny.png',
    }
};

export function ImagePreview() {
    const { selectedModel, selectedWood } = useConfiguratorStore();
    const modelData = MODELS.find(m => m.id === selectedModel);

    const sameModelImages = selectedModel ? MODEL_WOOD_IMAGE_MAP[selectedModel] : undefined;
    const sameModelFallback = sameModelImages ? Object.values(sameModelImages)[0] : undefined;

    const woodSpecificImage =
        selectedModel && selectedWood
            ? MODEL_WOOD_IMAGE_MAP[selectedModel]?.[selectedWood]
            : undefined;

    // If exact model+wood image is missing, use another wood variant of the same model.
    const activeImage = woodSpecificImage || sameModelFallback || modelData?.image || '/images/hero-fallback.jpg';

    return (
        <div className="w-full h-full bg-gray-50 flex flex-col items-center justify-center p-8 lg:p-12 relative overflow-hidden">

            {/* Main Image with AnimatePresence */}
            <div className="relative w-full flex-grow max-w-5xl h-[65vh] shadow-2xl rounded-sm overflow-hidden bg-white mb-6">
                <AnimatePresence mode="wait">
                    <motion.div
                        key={`${selectedModel}-${selectedWood}-${activeImage}`}
                        className="absolute inset-0 w-full h-full"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.4 }}
                    >
                        <Image
                            src={activeImage}
                            alt={`${modelData?.name || 'Model'} preview`}
                            fill
                            className="object-cover"
                            priority
                        />
                        {/* Overlay Text (Optional, purely aesthetic) */}
                        <div className="absolute bottom-6 left-6 z-10 pointer-events-none">
                            <h3 className="text-white text-lg font-light tracking-widest uppercase drop-shadow-md">
                                {modelData?.name}
                            </h3>
                        </div>
                        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-60 pointer-events-none" />
                    </motion.div>
                </AnimatePresence>
            </div>
        </div>
    );
}
