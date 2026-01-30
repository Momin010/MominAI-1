'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Box, MoreVertical, Cpu, HardDrive, ChevronRight } from 'lucide-react';

export const SandboxCard = ({ name, status, cpu, ram, onOpen }: { name: string, status: string, cpu: string, ram: string, onOpen: () => void }) => {
    return (
        <motion.div
            layoutId={`card-${name}`}
            onDoubleClick={onOpen}
            className="pro-card p-6 cursor-pointer group flex flex-col h-full"
        >
            <div className="flex justify-between items-start mb-6">
                <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-blue-50 text-momin-blue rounded-lg flex items-center justify-center">
                        <Box size={20} />
                    </div>
                    <div>
                        <h3 className="font-bold text-slate-900 text-lg group-hover:text-momin-blue transition-colors">{name}</h3>
                        <div className="flex items-center gap-2 mt-1">
                            <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                            <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">{status}</span>
                        </div>
                    </div>
                </div>
                <button className="text-slate-300 hover:text-slate-600">
                    <MoreVertical size={18} />
                </button>
            </div>

            <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="bg-slate-50 rounded-lg p-3 border border-slate-100">
                    <div className="flex items-center gap-2 text-[10px] font-bold text-slate-400 uppercase mb-1">
                        <Cpu size={12} /> CPU
                    </div>
                    <div className="text-sm font-bold text-slate-900">{cpu}</div>
                </div>
                <div className="bg-slate-50 rounded-lg p-3 border border-slate-100">
                    <div className="flex items-center gap-2 text-[10px] font-bold text-slate-400 uppercase mb-1">
                        <HardDrive size={12} /> RAM
                    </div>
                    <div className="text-sm font-bold text-slate-900">{ram}</div>
                </div>
            </div>

            <div className="mt-auto pt-4 border-t border-slate-100 flex items-center justify-between">
                <div className="flex gap-1">
                    <span className="px-2 py-0.5 bg-slate-100 text-slate-600 rounded text-[9px] font-bold uppercase tracking-tight">Isolated</span>
                    <span className="px-2 py-0.5 bg-blue-50 text-momin-blue rounded text-[9px] font-bold uppercase tracking-tight">GPU-V1</span>
                </div>
                <ChevronRight size={16} className="text-slate-300 group-hover:text-momin-blue translate-x-0 group-hover:translate-x-1 transition-all" />
            </div>
        </motion.div>
    );
};
