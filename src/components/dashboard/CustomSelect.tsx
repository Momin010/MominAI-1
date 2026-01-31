'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

export const CustomSelect = ({ label, options, value, onChange }: { label?: string, options: string[], value?: string, onChange?: (v: string) => void }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [internalSelected, setInternalSelected] = useState(options[0]);

    const selected = value !== undefined ? value : internalSelected;
    const setSelected = (v: string) => {
        if (onChange) {
            onChange(v);
        } else {
            setInternalSelected(v);
        }
    };

    return (
        <div className="space-y-4 relative">
            {label && <label className="text-xs font-bold text-slate-400 uppercase tracking-widest">{label}</label>}
            <div
                onClick={() => setIsOpen(!isOpen)}
                className="w-full p-3 bg-white border border-slate-200 rounded-xl text-sm flex items-center justify-between cursor-pointer hover:border-slate-300 transition-all shadow-sm"
            >
                <span className="text-slate-900 font-medium">{selected}</span>
                <ChevronDown size={16} className={`text-slate-400 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
            </div>

            <AnimatePresence>
                {isOpen && (
                    <>
                        <div className="fixed inset-0 z-10" onClick={() => setIsOpen(false)} />
                        <motion.div
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -10 }}
                            className="absolute top-full left-0 right-0 mt-2 bg-white border border-slate-200 rounded-xl shadow-xl z-20 overflow-hidden"
                        >
                            {options.map((option) => (
                                <div
                                    key={option}
                                    onClick={() => {
                                        setSelected(option);
                                        setIsOpen(false);
                                    }}
                                    className={`px-4 py-3 text-sm cursor-pointer transition-colors ${selected === option
                                        ? 'bg-blue-50 text-momin-blue font-bold'
                                        : 'text-slate-600 hover:bg-slate-50'
                                        }`}
                                >
                                    {option}
                                </div>
                            ))}
                        </motion.div>
                    </>
                )}
            </AnimatePresence>
        </div>
    );
};
