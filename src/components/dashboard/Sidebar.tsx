'use client';

import React from 'react';
import { motion } from 'framer-motion';
import {
    Box,
    Library,
    Server,
    ShieldCheck,
    Settings,
    Sparkles,
    ChevronRight,
    User,
    LogOut,
    Plus,
    CreditCard
} from 'lucide-react';

export const Sidebar = ({ activeView, onViewChange }: { activeView: string, onViewChange: (view: any) => void }) => {
    const items = [
        { icon: Box, label: 'Sandboxes', id: 'sandboxes' },
        { icon: Library, label: 'Library', id: 'library' },
        { icon: Server, label: 'Infrastructure', id: 'infrastructure' },
        { icon: ShieldCheck, label: 'Vault', id: 'vault' },
    ];

    return (
        <div className="w-72 border-r border-slate-200 bg-white flex flex-col h-screen fixed left-0 top-0 shadow-sm z-50">
            {/* Branding */}
            <div className="p-8 flex items-center justify-between mb-2">
                <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-momin-blue rounded-2xl shadow-xl shadow-blue-200 flex items-center justify-center text-white font-black text-xl">M</div>
                    <div>
                        <span className="font-black text-slate-900 tracking-tighter text-lg leading-none">MominAI</span>
                        <div className="flex items-center gap-1.5 mt-0.5">
                            <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                            <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Enterprise v3</span>
                        </div>
                    </div>
                </div>
            </div>

            {/* Navigation */}
            <nav className="flex-1 px-4 py-6 space-y-1.5">
                <h4 className="px-4 text-[10px] font-black text-slate-400 uppercase tracking-widest mb-4">Core Management</h4>
                {items.map((item, i) => (
                    <div
                        key={i}
                        onClick={() => onViewChange(item.id)}
                        className={`group flex items-center gap-3 px-4 py-3 rounded-2xl text-sm font-bold transition-all cursor-pointer relative ${activeView === item.id
                            ? 'bg-blue-50 text-momin-blue shadow-sm border border-blue-100'
                            : 'text-slate-500 hover:text-slate-900 hover:bg-slate-50'
                            }`}
                    >
                        <item.icon size={20} className={`${activeView === item.id ? 'text-momin-blue' : 'text-slate-400 group-hover:text-slate-900'} transition-colors`} />
                        <span className="flex-1">{item.label}</span>
                        {activeView === item.id && (
                            <motion.div
                                layoutId="sidebar-active"
                                className="absolute right-2 w-1.5 h-1.5 rounded-full bg-momin-blue"
                            />
                        )}
                        {item.id === 'library' && (
                            <span className="px-1.5 py-0.5 bg-momin-blue text-white rounded-md text-[9px] font-black">NEW</span>
                        )}
                    </div>
                ))}

                <div className="pt-8 pb-4">
                    <h4 className="px-4 text-[10px] font-black text-slate-400 uppercase tracking-widest mb-4">Developer Tools</h4>
                    <div className="flex items-center gap-3 px-4 py-3 rounded-2xl text-sm font-bold text-slate-500 hover:text-slate-900 hover:bg-slate-50 transition-all cursor-pointer group">
                        <Sparkles size={20} className="text-slate-400 group-hover:text-amber-500 transition-colors" />
                        <span>Creator Program</span>
                        <ChevronRight size={14} className="ml-auto text-slate-300" />
                    </div>
                    <div className="flex items-center gap-3 px-4 py-3 rounded-2xl text-sm font-bold text-slate-500 hover:text-slate-900 hover:bg-slate-50 transition-all cursor-pointer">
                        <CreditCard size={20} className="text-slate-400" />
                        <span>Billing & Usage</span>
                    </div>
                </div>
            </nav>

            {/* User Section */}
            <div className="p-4 border-t border-slate-100 mt-auto bg-slate-50/50">
                <div className="p-4 bg-white border border-slate-200 rounded-[2rem] shadow-sm flex items-center gap-3 group cursor-pointer hover:border-momin-blue transition-all">
                    <div className="w-10 h-10 bg-slate-100 rounded-full overflow-hidden flex items-center justify-center text-slate-500 font-black border-2 border-white shadow-sm ring-1 ring-slate-100">
                        <User size={20} />
                    </div>
                    <div className="flex-1 min-w-0">
                        <p className="text-sm font-black text-slate-900 truncate">Soren Iversen</p>
                        <p className="text-[10px] font-bold text-slate-400 uppercase tracking-tight">Pro Plan</p>
                    </div>
                    <Settings size={16} className="text-slate-300 group-hover:text-momin-blue transition-colors" />
                </div>
            </div>
        </div>
    );
};
