'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
    Search,
    ShieldCheck,
    Globe,
    Database,
    Filter,
    Sparkles,
    ArrowUpRight,
    Lock,
    Download,
    Heart,
    Users,
    Zap,
    Layout,
    Layers,
    Binary,
    ChevronRight,
    X,
    Info,
    Rocket
} from 'lucide-react';

const CATEGORIES = [
    { id: 'all', label: 'All Assets', icon: Layout },
    { id: 'agents', label: 'Agent Blueprints', icon: Users },
    { id: 'skills', label: 'Shared Skills', icon: Zap },
    { id: 'data', label: 'Storage Modules', icon: Database },
    { id: 'security', label: 'Security Protocols', icon: ShieldCheck },
];

const TEMPLATES = [
    {
        id: '1',
        name: 'Research Specialist V4',
        category: 'agents',
        type: 'Autonomous Agent',
        desc: 'Optimized for deep-web data extraction, academic synthesis, and multi-source cross-referencing.',
        icon: Search,
        downloads: '12.4k',
        likes: '842',
        author: 'MominAI Core',
        version: '4.2.1',
        image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=800',
        tags: ['Research', 'LLM', 'WebAccess'],
        performance: '98%'
    },
    {
        id: '2',
        name: 'Sentinel Code Auditor',
        category: 'security',
        type: 'Security Blueprint',
        desc: 'Real-time repository analysis for vulnerabilities, logic flaws, and secret detection with auto-remediation.',
        icon: ShieldCheck,
        downloads: '8.1k',
        likes: '1.2k',
        author: 'CyberGuard Labs',
        version: '1.0.5',
        image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=800',
        tags: ['Security', 'StaticAnalysis', 'Rust'],
        performance: '99.9%'
    },
    {
        id: '3',
        name: 'Global Web Crawler',
        category: 'skills',
        type: 'Shared Skill',
        desc: 'High-concurrency browsing capability with multi-regional bypass protocols and headless rendering.',
        icon: Globe,
        downloads: '45k',
        likes: '3.4k',
        author: 'OpenNet Foundation',
        version: '3.1.0',
        image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=800',
        tags: ['Networking', 'Scraping', 'Global'],
        performance: '94%'
    },
    {
        id: '4',
        name: 'Pinecone Vector Bridge',
        category: 'data',
        type: 'Storage Module',
        desc: 'Native integration for long-term vector memory with sub-10ms retrieval latency across trillions of tokens.',
        icon: Database,
        downloads: '15.2k',
        likes: '920',
        author: 'VectorDB.ai',
        version: '2.0.0',
        image: 'https://images.unsplash.com/photo-1639322537228-f710d846310a?auto=format&fit=crop&q=80&w=800',
        tags: ['Memory', 'Vector', 'Scalability'],
        performance: '97%'
    },
    {
        id: '5',
        name: 'Market Intel Agent',
        category: 'agents',
        type: 'Autonomous Agent',
        desc: 'Real-time financial market analyzer with sentiment tracking across social media and news wires.',
        icon: Binary,
        downloads: '22k',
        likes: '1.5k',
        author: 'QuantFlux',
        version: '0.9.8',
        image: 'https://images.unsplash.com/photo-1611974714652-921cba3e498c?auto=format&fit=crop&q=80&w=800',
        tags: ['Finance', 'Sentiment', 'API'],
        performance: '92%'
    },
    {
        id: '6',
        name: 'Zero-Knowledge Vault',
        category: 'security',
        type: 'Security Protocol',
        desc: 'Encrypted storage for agent keys using ZK-proofs for maximum privacy without compromising speed.',
        icon: Lock,
        downloads: '9.3k',
        likes: '560',
        author: 'PrivacyOne',
        version: '1.2.0',
        image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc48?auto=format&fit=crop&q=80&w=800',
        tags: ['ZK-Proof', 'Privacy', 'Crypto'],
        performance: '100%'
    }
];

export const LibraryView = () => {
    const [selectedCategory, setSelectedCategory] = useState('all');
    const [searchQuery, setSearchQuery] = useState('');
    const [selectedItem, setSelectedItem] = useState<any>(null);

    const filteredTemplates = TEMPLATES.filter(t => {
        const matchesCategory = selectedCategory === 'all' || t.category === selectedCategory;
        const matchesSearch = t.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
            t.desc.toLowerCase().includes(searchQuery.toLowerCase());
        return matchesCategory && matchesSearch;
    });

    return (
        <div className="flex-1 flex flex-col h-full bg-slate-50 relative overflow-hidden">
            {/* Header / Search */}
            <header className="p-8 bg-white border-b border-slate-200">
                <div className="max-w-7xl mx-auto flex flex-col md:flex-row md:items-center justify-between gap-6">
                    <div>
                        <div className="flex items-center gap-2 text-momin-blue mb-2">
                            <Sparkles size={16} />
                            <span className="text-[10px] font-black uppercase tracking-[0.2em] leading-none">Universal Archive</span>
                        </div>
                        <h3 className="text-3xl font-black text-slate-900 tracking-tight">Agent Library</h3>
                    </div>

                    <div className="relative flex-1 max-w-xl group">
                        <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-momin-blue transition-colors" size={20} />
                        <input
                            type="text"
                            placeholder="Search for agents, skills, or blueprints..."
                            className="w-full bg-slate-50 border border-slate-200 rounded-2xl pl-12 pr-4 py-4 text-sm focus:outline-none focus:ring-2 focus:ring-momin-blue/20 focus:bg-white transition-all text-slate-900 shadow-sm"
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                        />
                        <div className="absolute right-4 top-1/2 -translate-y-1/2 flex gap-2">
                            <span className="px-1.5 py-0.5 bg-slate-200 text-slate-500 rounded text-[10px] font-bold">⌘</span>
                            <span className="px-1.5 py-0.5 bg-slate-200 text-slate-500 rounded text-[10px] font-bold">K</span>
                        </div>
                    </div>
                </div>
            </header>

            <div className="flex-1 flex overflow-hidden">
                {/* Sidebar Categories */}
                <aside className="w-64 bg-white border-r border-slate-200 p-6 flex flex-col gap-6 hidden lg:flex">
                    <div>
                        <h4 className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-4">Categories</h4>
                        <div className="space-y-1">
                            {CATEGORIES.map(cat => (
                                <button
                                    key={cat.id}
                                    onClick={() => setSelectedCategory(cat.id)}
                                    className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-bold transition-all ${selectedCategory === cat.id
                                            ? 'bg-blue-50 text-momin-blue shadow-sm'
                                            : 'text-slate-500 hover:bg-slate-50 hover:text-slate-900'
                                        }`}
                                >
                                    <cat.icon size={18} />
                                    {cat.label}
                                </button>
                            ))}
                        </div>
                    </div>

                    <div className="mt-auto p-4 bg-slate-900 rounded-2xl text-white">
                        <p className="text-[10px] font-black text-momin-blue uppercase tracking-widest mb-2 flex items-center gap-2">
                            <Info size={12} /> Pro Tip
                        </p>
                        <p className="text-[11px] text-slate-400 leading-relaxed font-medium">
                            Join the creator program to publish your own agent manifests.
                        </p>
                        <button className="mt-4 w-full py-2 bg-momin-blue hover:bg-blue-600 rounded-xl text-[10px] font-bold transition-all uppercase tracking-wider">
                            Learn More
                        </button>
                    </div>
                </aside>

                {/* Main Grid */}
                <main className="flex-1 p-8 overflow-y-auto">
                    <div className="max-w-7xl mx-auto">
                        <div className="flex items-center justify-between mb-8">
                            <div className="flex items-center gap-4">
                                <h4 className="text-xl font-black text-slate-900">{selectedCategory === 'all' ? 'Featured Assets' : CATEGORIES.find(c => c.id === selectedCategory)?.label}</h4>
                                <span className="px-2 py-0.5 bg-slate-200 text-slate-500 rounded text-[10px] font-black">{filteredTemplates.length}</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <button className="p-2 bg-white border border-slate-200 rounded-lg text-slate-500 hover:text-momin-blue transition-colors">
                                    <Filter size={18} />
                                </button>
                                <button className="p-2 bg-white border border-slate-200 rounded-lg text-slate-500 hover:text-momin-blue transition-colors">
                                    <Layers size={18} />
                                </button>
                            </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                            <AnimatePresence mode="popLayout">
                                {filteredTemplates.map((t, i) => (
                                    <motion.div
                                        key={t.id}
                                        layout
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={{ opacity: 0, scale: 0.95 }}
                                        transition={{ delay: i * 0.05 }}
                                        onClick={() => setSelectedItem(t)}
                                        className="bg-white border border-slate-200 rounded-3xl overflow-hidden cursor-pointer hover:shadow-2xl hover:shadow-slate-200 transition-all group"
                                    >
                                        <div className="relative h-48 overflow-hidden">
                                            <img
                                                src={t.image}
                                                alt={t.name}
                                                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                                            />
                                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-6">
                                                <div className="flex items-center gap-2 text-white text-[10px] font-bold uppercase tracking-widest">
                                                    View Details <ArrowUpRight size={14} />
                                                </div>
                                            </div>
                                            <div className="absolute top-4 right-4 px-3 py-1 bg-white/90 backdrop-blur rounded-full text-[10px] font-black text-momin-blue shadow-xl">
                                                {t.performance} Performance
                                            </div>
                                        </div>

                                        <div className="p-6">
                                            <div className="flex justify-between items-start mb-4">
                                                <div>
                                                    <p className="text-[10px] font-black text-momin-blue uppercase tracking-widest mb-1">{t.type}</p>
                                                    <h5 className="font-black text-slate-900 text-lg group-hover:text-momin-blue transition-colors">{t.name}</h5>
                                                </div>
                                                <div className="w-10 h-10 bg-slate-50 rounded-2xl flex items-center justify-center text-slate-400 group-hover:bg-blue-50 group-hover:text-momin-blue transition-colors">
                                                    <t.icon size={20} />
                                                </div>
                                            </div>

                                            <p className="text-xs text-slate-500 leading-relaxed line-clamp-2 mb-6 font-medium">
                                                {t.desc}
                                            </p>

                                            <div className="flex items-center justify-between pt-4 border-t border-slate-100">
                                                <div className="flex items-center gap-4">
                                                    <div className="flex items-center gap-1.5 text-[10px] font-bold text-slate-400">
                                                        <Download size={12} /> {t.downloads}
                                                    </div>
                                                    <div className="flex items-center gap-1.5 text-[10px] font-bold text-slate-400">
                                                        <Heart size={12} /> {t.likes}
                                                    </div>
                                                </div>
                                                <div className="text-[10px] font-black text-slate-400 uppercase tracking-widest">
                                                    V{t.version}
                                                </div>
                                            </div>
                                        </div>
                                    </motion.div>
                                ))}
                            </AnimatePresence>
                        </div>
                    </div>
                </main>
            </div>

            {/* Detail Modal Overlay */}
            <AnimatePresence>
                {selectedItem && (
                    <div className="fixed inset-0 z-[60] flex items-center justify-center p-4 md:p-12">
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setSelectedItem(null)}
                            className="absolute inset-0 bg-slate-900/40 backdrop-blur-sm"
                        />
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9, y: 20 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.9, y: 20 }}
                            className="bg-white w-full max-w-5xl h-full max-h-[800px] rounded-[40px] shadow-2xl relative overflow-hidden flex flex-col md:flex-row"
                        >
                            <button
                                onClick={() => setSelectedItem(null)}
                                className="absolute top-6 right-6 z-10 p-3 bg-white/20 hover:bg-white/40 backdrop-blur-xl text-white rounded-full transition-all"
                            >
                                <X size={20} />
                            </button>

                            {/* Left: Visual Content */}
                            <div className="w-full md:w-1/2 h-64 md:h-auto relative">
                                <img
                                    src={selectedItem.image}
                                    alt={selectedItem.name}
                                    className="w-full h-full object-cover"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent flex flex-col justify-end p-12">
                                    <div className="flex items-center gap-2 px-4 py-1.5 bg-momin-blue text-white rounded-full text-[10px] font-black uppercase tracking-widest w-fit mb-4">
                                        <Rocket size={12} /> Featured Template
                                    </div>
                                    <h2 className="text-4xl font-black text-white tracking-tight">{selectedItem.name}</h2>
                                    <p className="text-slate-300 font-bold uppercase text-[12px] tracking-widest mt-2">By {selectedItem.author}</p>
                                </div>
                            </div>

                            {/* Right: Detailed Info */}
                            <div className="flex-1 p-12 overflow-y-auto">
                                <div className="space-y-10">
                                    <section>
                                        <h4 className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-4">Description</h4>
                                        <p className="text-slate-600 leading-relaxed font-medium">
                                            {selectedItem.desc} This asset is part of the premium MominAI ecosystem, designed for high-performance autonomous operations. It includes pre-configured prompts, optimized cognitive weights, and native tool-bindings.
                                        </p>
                                    </section>

                                    <div className="grid grid-cols-2 gap-6">
                                        <div className="p-6 bg-slate-50 rounded-3xl border border-slate-100">
                                            <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1">Architecture</p>
                                            <p className="font-black text-slate-900">Multi-Agent Transformer</p>
                                        </div>
                                        <div className="p-6 bg-slate-50 rounded-3xl border border-slate-100">
                                            <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1">Latency</p>
                                            <p className="font-black text-slate-900">~140ms Avg</p>
                                        </div>
                                    </div>

                                    <section>
                                        <h4 className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-4">Capabilities</h4>
                                        <div className="flex flex-wrap gap-2">
                                            {selectedItem.tags.map((tag: string) => (
                                                <span key={tag} className="px-4 py-2 bg-slate-100 text-slate-600 rounded-2xl text-[11px] font-black">
                                                    {tag}
                                                </span>
                                            ))}
                                        </div>
                                    </section>

                                    <div className="pt-10 mt-10 border-t border-slate-100 flex items-center justify-between">
                                        <div className="flex items-center gap-6">
                                            <div>
                                                <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Version</p>
                                                <p className="font-bold text-slate-900">{selectedItem.version}</p>
                                            </div>
                                            <div>
                                                <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Released</p>
                                                <p className="font-bold text-slate-900">2 days ago</p>
                                            </div>
                                        </div>
                                        <button className="px-8 py-4 bg-momin-blue text-white rounded-3xl font-black text-sm shadow-xl shadow-blue-200 hover:scale-105 active:scale-95 transition-all">
                                            Deploy to Sandbox
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                )}
            </AnimatePresence>
        </div>
    );
};
