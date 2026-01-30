'use client';

import React, { useState } from 'react';
import {
    Lock,
    MoreVertical,
    Plus,
    ShieldCheck,
    ShieldAlert,
    Key,
    Eye,
    EyeOff,
    Fingerprint,
    History,
    Search,
    RefreshCw,
    Download,
    Trash2,
    CheckCircle2
} from 'lucide-react';

export const VaultView = () => {
    const [showKeys, setShowKeys] = useState<Record<number, boolean>>({});

    const toggleKey = (idx: number) => {
        setShowKeys(prev => ({ ...prev, [idx]: !prev[idx] }));
    };

    const secrets = [
        {
            sandbox: 'alpha-lab-01', title: 'OPENAI_API_KEY', key: 'sk-proj-T1vK8a2xP9zLqM4', updated: '2h ago', type: 'API Key', strength: 'Strong'
        },
        { sandbox: 'alpha-lab-01', title: 'TAVILY_API_KEY', key: 'tvly-7e1b9w0q5r3n6m', updated: '4d ago', type: 'API Key', strength: 'Strong' },
        { sandbox: 'beta-node-02', title: 'DATABASE_URL', key: 'postgres://admin:pass123@db:5432', updated: '12m ago', type: 'Env Var', strength: 'Medium' },
        { sandbox: 'Global System', title: 'MOMIN_ROOT_SECRET', key: 'momin-rt-ax99-zz01', updated: 'Last session', type: 'System Root', strength: 'Critical' },
        { sandbox: 'gamma-research', title: 'HUGGINGFACE_TOKEN', key: 'hf_xYz82910Asd921', updated: '1d ago', type: 'Bearer Token', strength: 'Strong' },
    ];

    return (
        <div className="flex-1 p-8 md:p-12 overflow-y-auto bg-slate-50 text-slate-900">
            <div className="max-w-7xl mx-auto space-y-12">
                <header className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6">
                    <div>
                        <div className="flex items-center gap-2 text-momin-blue mb-2">
                            <ShieldCheck size={16} />
                            <span className="text-[10px] font-black uppercase tracking-[0.2em] leading-none">Encrypted Storage</span>
                        </div>
                        <h3 className="text-4xl font-black text-slate-900 tracking-tight">Security Vault</h3>
                    </div>
                    <div className="flex gap-3 w-full md:w-auto">
                        <button className="flex-1 md:flex-none flex items-center justify-center gap-2 px-6 py-3 bg-white border border-slate-200 text-slate-600 rounded-2xl font-black text-xs shadow-sm hover:border-momin-blue transition-all">
                            <History size={14} /> Audit Logs
                        </button>
                        <button className="flex-1 md:flex-none flex items-center justify-center gap-2 px-6 py-3 bg-slate-900 text-white rounded-2xl font-black text-xs shadow-xl hover:bg-slate-800 transition-all">
                            <Lock size={14} /> Rotate All Keys
                        </button>
                    </div>
                </header>

                {/* Security Overview Cards */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="bg-white border border-slate-200 p-8 rounded-[2.5rem] shadow-sm flex items-center gap-6">
                        <div className="w-16 h-16 bg-blue-50 text-momin-blue rounded-3xl flex items-center justify-center">
                            <Key size={30} />
                        </div>
                        <div>
                            <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1">Total Secrets</p>
                            <p className="text-3xl font-black text-slate-900">42</p>
                        </div>
                    </div>
                    <div className="bg-white border border-slate-200 p-8 rounded-[2.5rem] shadow-sm flex items-center gap-6">
                        <div className="w-16 h-16 bg-green-50 text-green-500 rounded-3xl flex items-center justify-center">
                            <Fingerprint size={30} />
                        </div>
                        <div>
                            <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1">Auth Mode</p>
                            <p className="text-3xl font-black text-slate-900 uppercase text-lg">Biometric</p>
                        </div>
                    </div>
                    <div className="bg-white border border-slate-200 p-8 rounded-[2.5rem] shadow-sm flex items-center gap-6">
                        <div className="w-16 h-16 bg-amber-50 text-amber-500 rounded-3xl flex items-center justify-center">
                            <ShieldAlert size={30} />
                        </div>
                        <div>
                            <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1">Vulnerabilities</p>
                            <p className="text-3xl font-black text-slate-900">0</p>
                        </div>
                    </div>
                </div>

                {/* Secrets Table */}
                <div className="bg-white border border-slate-200 rounded-[3rem] overflow-hidden shadow-sm">
                    <div className="p-8 border-b border-slate-100 flex flex-col md:flex-row justify-between items-center gap-6">
                        <div className="relative flex-1 w-full md:max-w-md">
                            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
                            <input
                                type="text"
                                placeholder="Filter secrets by name or sandbox..."
                                className="w-full bg-slate-50 border border-slate-100 rounded-2xl pl-12 pr-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-momin-blue/20 transition-all font-medium"
                            />
                        </div>
                        <div className="flex items-center gap-4">
                            <button className="p-3 text-slate-400 hover:text-momin-blue transition-colors">
                                <RefreshCw size={20} />
                            </button>
                            <button className="px-6 py-3 bg-momin-blue text-white rounded-2xl font-black text-xs shadow-lg shadow-blue-200 flex items-center gap-2 hover:bg-blue-600 transition-all">
                                <Plus size={16} /> Add Secret
                            </button>
                        </div>
                    </div>

                    <div className="overflow-x-auto">
                        <table className="w-full text-left border-collapse">
                            <thead>
                                <tr className="bg-slate-50 border-b border-slate-100">
                                    <th className="px-10 py-5 text-[10px] font-black text-slate-400 uppercase tracking-widest">Sandbox / Context</th>
                                    <th className="px-10 py-5 text-[10px] font-black text-slate-400 uppercase tracking-widest">Identifier</th>
                                    <th className="px-10 py-5 text-[10px] font-black text-slate-400 uppercase tracking-widest">Payload</th>
                                    <th className="px-10 py-5 text-[10px] font-black text-slate-400 uppercase tracking-widest text-right">Updated</th>
                                    <th className="px-10 py-5 text-[10px] font-black text-slate-400 uppercase tracking-widest text-right">Actions</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-slate-50">
                                {secrets.map((s, i) => (
                                    <tr key={i} className="hover:bg-slate-50/50 transition-colors group">
                                        <td className="px-10 py-8">
                                            <div className="flex items-center gap-4">
                                                <div className={`w-3 h-3 rounded-full ${s.sandbox === 'Global System' ? 'bg-amber-500 shadow-[0_0_8px_rgba(245,158,11,0.5)]' : 'bg-momin-blue shadow-[0_0_8px_rgba(0,102,255,0.4)]'}`} />
                                                <div>
                                                    <p className="text-sm font-black text-slate-900">{s.sandbox}</p>
                                                    <p className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">{s.type}</p>
                                                </div>
                                            </div>
                                        </td>
                                        <td className="px-10 py-8">
                                            <span className="px-3 py-1.5 bg-slate-100 text-slate-600 rounded-xl font-mono text-[11px] font-black border border-slate-200">{s.title}</span>
                                        </td>
                                        <td className="px-10 py-8">
                                            <div className="flex items-center gap-4">
                                                <div className="w-full min-w-[200px] flex items-center justify-between px-4 py-2 bg-slate-900 text-white rounded-xl border border-slate-800 font-mono text-xs">
                                                    <span>{showKeys[i] ? s.key : '••••••••••••••••••••'}</span>
                                                    <button
                                                        onClick={() => toggleKey(i)}
                                                        className="text-slate-500 hover:text-white transition-colors ml-4"
                                                    >
                                                        {showKeys[i] ? <EyeOff size={14} /> : <Eye size={14} />}
                                                    </button>
                                                </div>
                                                <div className={`px-2 py-0.5 rounded text-[9px] font-black uppercase ${s.strength === 'Critical' ? 'bg-red-50 text-red-600' :
                                                    s.strength === 'Strong' ? 'bg-green-50 text-green-600' : 'bg-amber-50 text-amber-600'
                                                    }`}>
                                                    {s.strength}
                                                </div>
                                            </div>
                                        </td>
                                        <td className="px-10 py-8 text-right">
                                            <span className="text-[11px] font-black text-slate-400">{s.updated}</span>
                                        </td>
                                        <td className="px-10 py-8 text-right">
                                            <div className="flex items-center justify-end gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                                                <button className="p-2.5 bg-slate-50 text-slate-400 hover:text-momin-blue hover:bg-blue-50 rounded-xl transition-all">
                                                    <Download size={16} />
                                                </button>
                                                <button className="p-2.5 bg-slate-50 text-slate-400 hover:text-red-500 hover:bg-red-50 rounded-xl transition-all">
                                                    <Trash2 size={16} />
                                                </button>
                                                <button className="p-2.5 text-slate-400 hover:text-slate-900 transition-colors">
                                                    <MoreVertical size={18} />
                                                </button>
                                            </div>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>

                {/* Security Announcement */}
                <div className="p-8 bg-blue-50/50 rounded-[3rem] text-slate-900 flex flex-col md:flex-row items-center justify-between gap-8 border border-blue-100 relative overflow-hidden">
                    <div className="absolute top-0 right-0 p-12 opacity-5 pointer-events-none text-momin-blue">
                        <ShieldCheck size={200} />
                    </div>
                    <div className="relative z-10 flex items-center gap-8 text-center md:text-left">
                        <div className="w-20 h-20 bg-white text-momin-blue rounded-[2rem] flex items-center justify-center shadow-lg shadow-blue-100">
                            <Fingerprint size={40} />
                        </div>
                        <div>
                            <h4 className="text-2xl font-black mb-2">Kernel-Level Key Protection</h4>
                            <p className="text-slate-500 font-medium max-w-xl">MominAI Pro uses hardware-backed enclave encryption (Intel SGX / AMD SEV) to ensure your API keys never touch the main application memory heap.</p>
                        </div>
                    </div>
                    <button className="relative z-10 w-full md:w-auto px-8 py-4 bg-momin-blue text-white rounded-[2rem] font-black text-sm hover:scale-105 active:scale-95 transition-all flex items-center justify-center gap-2 shadow-lg shadow-blue-200">
                        <CheckCircle2 size={18} /> Verified Secure
                    </button>
                </div>
            </div>
        </div>
    );
};
