'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
    Zap,
    Server,
    MoreVertical,
    Plus,
    Laptop,
    Cpu,
    Activity,
    Globe,
    HardDrive,
    ExternalLink,
    Monitor,
    Terminal,
    Settings,
    ShieldCheck,
    CheckCircle2,
    RefreshCw,
    AlertCircle,
    Layers
} from 'lucide-react';

export const InfrastructureView = () => {
    const [isLocalConnected, setIsLocalConnected] = useState(true);

    const nodes = [
        { name: 'node-us-east-01', type: 'NVIDIA A100 Cluster', status: 'Healthy', load: '82%', latency: '14ms', region: 'NA-East' },
        { name: 'node-eu-west-04', type: 'Edge Compute (ARM)', status: 'Standby', load: '12%', latency: '42ms', region: 'EU-West' },
        { name: 'node-asia-pre-02', type: 'H100 Optimized', status: 'Maintenance', load: '0%', latency: '0ms', region: 'ASIA-South' },
    ];

    const localStats = {
        cpu: 'Intel Core i9-13900K',
        gpu: 'NVIDIA RTX 4090',
        ram: '64GB DDR5',
        disk: '2TB NVMe Gen4',
        os: 'Windows 11 (MominAI OS Layer)',
        status: 'Operational'
    };

    return (
        <div className="flex-1 p-8 md:p-12 overflow-y-auto bg-slate-50 text-slate-900">
            <div className="max-w-7xl mx-auto space-y-12">
                {/* Header */}
                <header className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6">
                    <div>
                        <div className="flex items-center gap-2 text-momin-blue mb-2">
                            <Activity size={16} />
                            <span className="text-[10px] font-black uppercase tracking-[0.2em] leading-none">Cluster Management</span>
                        </div>
                        <h3 className="text-4xl font-black tracking-tight">Infrastructure Logs</h3>
                    </div>

                    <div className="flex gap-4">
                        <div className="bg-white border border-slate-200 px-6 py-4 rounded-[2rem] shadow-xl shadow-blue-50/50 flex items-center gap-6">
                            <div className="flex flex-col">
                                <p className="text-[10px] uppercase font-black text-slate-400 tracking-widest mb-1">Global Compute</p>
                                <div className="flex items-center gap-3">
                                    <div className="w-2 h-2 rounded-full bg-momin-blue animate-pulse shadow-[0_0_10px_#0066FF]" />
                                    <p className="text-2xl font-black text-slate-900">4.2 PFLOPS</p>
                                </div>
                            </div>
                            <div className="w-px h-10 bg-slate-100" />
                            <div className="flex flex-col">
                                <p className="text-[10px] uppercase font-black text-slate-400 tracking-widest mb-1">Active Nodes</p>
                                <p className="text-2xl font-black text-slate-900">142</p>
                            </div>
                        </div>
                    </div>
                </header>

                {/* Local Node Integration */}
                <section className="bg-white border border-slate-200 rounded-[3rem] p-10 overflow-hidden relative group">
                    <div className="absolute top-0 right-0 p-12 opacity-5 pointer-events-none group-hover:scale-110 group-hover:rotate-12 transition-transform duration-700">
                        <Monitor size={300} />
                    </div>

                    <div className="relative z-10">
                        <div className="flex flex-col md:flex-row justify-between items-start mb-10 gap-6">
                            <div className="flex items-center gap-6">
                                <div className="w-20 h-20 bg-blue-50 text-momin-blue rounded-[2rem] flex items-center justify-center shadow-inner">
                                    <Laptop size={40} />
                                </div>
                                <div>
                                    <div className="flex items-center gap-3 mb-1">
                                        <h4 className="text-2xl font-black text-slate-900">Personal Node (Localhost)</h4>
                                        <span className="px-3 py-1 bg-green-50 text-green-600 rounded-full text-[10px] font-black uppercase flex items-center gap-1.5 border border-green-100">
                                            <CheckCircle2 size={12} /> Connected
                                        </span>
                                    </div>
                                    <p className="text-slate-500 font-medium">MominAI Core is running locally. Your computer is providing compute for sandboxes.</p>
                                </div>
                            </div>
                            <div className="flex gap-3 w-full md:w-auto">
                                <button className="flex-1 md:flex-none px-6 py-3 bg-slate-900 text-white rounded-2xl font-black text-xs shadow-xl flex items-center justify-center gap-2 hover:bg-slate-800 transition-all">
                                    <Terminal size={14} /> Open CLI
                                </button>
                                <button className="flex-1 md:flex-none px-6 py-3 bg-white border border-slate-200 text-slate-600 rounded-2xl font-black text-xs shadow-sm flex items-center justify-center gap-2 hover:border-momin-blue transition-all">
                                    <Settings size={14} /> Config
                                </button>
                            </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                            {[
                                { label: 'Processor', value: localStats.cpu, icon: Cpu },
                                { label: 'Graphics', value: localStats.gpu, icon: Zap },
                                { label: 'Memory', value: localStats.ram, icon: Layers },
                                { label: 'Storage', value: localStats.disk, icon: HardDrive },
                            ].map((stat, i) => (
                                <div key={i} className="bg-slate-50 border border-slate-100 p-6 rounded-[2rem] hover:border-momin-blue shadow-sm transition-all group/stat">
                                    <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center text-slate-400 group-hover/stat:text-momin-blue shadow-sm mb-4 transition-colors">
                                        <stat.icon size={20} />
                                    </div>
                                    <p className="text-[10px] uppercase font-black text-slate-400 tracking-widest mb-1">{stat.label}</p>
                                    <p className="font-bold text-slate-900 leading-tight">{stat.value}</p>
                                </div>
                            ))}
                        </div>

                        <div className="mt-8 pt-8 border-t border-slate-100 flex flex-wrap gap-8">
                            <div className="flex items-center gap-3">
                                <div className="p-2 bg-blue-50 text-momin-blue rounded-lg">
                                    <ShieldCheck size={14} />
                                </div>
                                <div>
                                    <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Isolation Layer</p>
                                    <p className="text-xs font-bold text-slate-900">Virtualization-Based Security (VBS)</p>
                                </div>
                            </div>
                            <div className="flex items-center gap-3">
                                <div className="p-2 bg-green-50 text-green-600 rounded-lg">
                                    <Activity size={14} />
                                </div>
                                <div>
                                    <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Network Mode</p>
                                    <p className="text-xs font-bold text-slate-900">NAT (Isolated Interface)</p>
                                </div>
                            </div>
                            <div className="flex items-center gap-3 ml-auto">
                                <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Data syncing via:</p>
                                <span className="text-xs font-black text-momin-blue">MOMIN_IO_STREAM</span>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Cloud & Edge Nodes */}
                <section className="space-y-6">
                    <div className="flex justify-between items-center">
                        <div className="flex items-center gap-4">
                            <h4 className="text-2xl font-black tracking-tight">Cloud Backbone</h4>
                            <span className="px-3 py-1 bg-slate-900 text-white rounded-full text-[10px] font-black">PRO NODES</span>
                        </div>
                        <button className="text-momin-blue text-sm font-black flex items-center gap-2 hover:underline">
                            View All Regions <ExternalLink size={14} />
                        </button>
                    </div>

                    <div className="grid grid-cols-1 gap-4">
                        {nodes.map((node, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: i * 0.1 }}
                                className="flex flex-col md:flex-row items-center gap-6 p-6 bg-white border border-slate-200 rounded-[2.5rem] hover:border-momin-blue transition-all shadow-sm group"
                            >
                                <div className={`w-16 h-16 rounded-2xl flex items-center justify-center shrink-0 ${node.status === 'Healthy'
                                    ? 'bg-green-50 text-green-600'
                                    : node.status === 'Standby'
                                        ? 'bg-blue-50 text-momin-blue'
                                        : 'bg-amber-50 text-amber-600'
                                    }`}>
                                    <Server size={32} />
                                </div>

                                <div className="flex-1">
                                    <div className="flex items-center gap-3 mb-1">
                                        <h4 className="font-black text-lg">{node.name}</h4>
                                        <span className="px-2 py-0.5 bg-slate-100 text-slate-500 rounded text-[9px] font-black uppercase tracking-widest">{node.region}</span>
                                    </div>
                                    <p className="text-xs text-slate-500 font-bold uppercase tracking-wider">{node.type}</p>
                                </div>

                                <div className="flex gap-4 md:gap-12 text-center md:text-left overflow-x-auto w-full md:w-auto scrollbar-hide py-2 md:py-0">
                                    <div className="min-w-[80px]">
                                        <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1">Compute Load</p>
                                        <div className="flex items-center gap-2">
                                            <div className="w-16 h-1.5 bg-slate-100 rounded-full overflow-hidden">
                                                <motion.div
                                                    initial={{ width: 0 }}
                                                    animate={{ width: node.load }}
                                                    className={`h-full ${parseInt(node.load) > 80 ? 'bg-amber-500' : 'bg-momin-blue'}`}
                                                />
                                            </div>
                                            <p className="font-black text-slate-700 text-xs">{node.load}</p>
                                        </div>
                                    </div>
                                    <div className="min-w-[70px]">
                                        <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1">Latency</p>
                                        <p className="font-black text-slate-700 text-xs">{node.latency}</p>
                                    </div>
                                    <div className="min-w-[90px]">
                                        <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1">Cluster status</p>
                                        <div className="flex items-center gap-2">
                                            <div className={`w-1.5 h-1.5 rounded-full ${node.status === 'Healthy' ? 'bg-green-500' : node.status === 'Standby' ? 'bg-blue-500' : 'bg-amber-500'}`} />
                                            <p className={`font-black uppercase text-[10px] ${node.status === 'Healthy' ? 'text-green-500' : node.status === 'Maintenance' ? 'text-amber-500' : 'text-slate-400'}`}>{node.status}</p>
                                        </div>
                                    </div>
                                </div>
                                <button className="p-3 hover:bg-slate-50 rounded-2xl transition-colors">
                                    <MoreVertical size={20} className="text-slate-300" />
                                </button>
                            </motion.div>
                        ))}
                    </div>
                </section>

                {/* Add New Resource */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="p-10 border-2 border-dashed border-slate-200 rounded-[3rem] bg-white group hover:border-momin-blue transition-all cursor-pointer flex flex-col items-center justify-center text-center">
                        <div className="w-16 h-16 bg-blue-50 text-momin-blue rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                            <Plus size={32} />
                        </div>
                        <h5 className="text-xl font-black text-slate-900 mb-2">Deploy Cloud Instance</h5>
                        <p className="text-sm text-slate-500 font-medium max-w-xs">Spin up a high-performance NVIDIA H100 or A100 node in any region.</p>
                    </div>
                    <div className="p-10 border-2 border-dashed border-slate-200 rounded-[3rem] bg-white group hover:border-green-500 transition-all cursor-pointer flex flex-col items-center justify-center text-center">
                        <div className="w-16 h-16 bg-green-50 text-green-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                            <Monitor size={32} />
                        </div>
                        <h5 className="text-xl font-black text-slate-900 mb-2">Add Local Worker</h5>
                        <p className="text-sm text-slate-500 font-medium max-w-xs">Connect another local machine to the MominAI peer-to-peer compute grid.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};
