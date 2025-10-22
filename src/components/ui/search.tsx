"use client";

import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search as SearchIcon, X, Cpu, Shield, Globe, Users, Zap, ArrowRight, Map } from 'lucide-react';
import { useTheme } from 'next-themes';

// Searchable SaaS Concept Data
const searchData = [
  { id: 1, title: 'Real-time Analytics Dashboard', category: 'Analytics', url: '/features/analytics', description: 'Visualize and interact with live enterprise data streams in real-time.', keywords: ['analytics', 'dashboard', 'real-time', 'metrics', 'charts'], icon: Cpu, featured: true },
  { id: 2, title: 'Global Data Flow Visualization', category: 'Visualization', url: '/features/global-flow', description: 'Interactive 3D globe showcasing data movement across connected systems worldwide.', keywords: ['3d globe', 'visualization', 'data flow', 'cobe', 'interactive'], icon: Globe, featured: true },
  { id: 3, title: 'Enterprise Security Suite', category: 'Security', url: '/features/security', description: 'AI-powered monitoring and threat detection for enterprise-grade security.', keywords: ['security', 'enterprise', 'AI monitoring', 'threat detection'], icon: Shield, featured: true },
  { id: 4, title: 'AI Insights Engine', category: 'AI', url: '/features/ai', description: 'Leverage machine learning models to predict trends and optimize operations.', keywords: ['AI', 'machine learning', 'prediction', 'optimization', 'insights'], icon: Cpu, featured: true },
  { id: 5, title: 'Interactive Observability', category: 'Observability', url: '/features/observability', description: 'Monitor, trace, and debug system events through interactive dashboards.', keywords: ['observability', 'tracing', 'debug', 'monitoring'], icon: Map, featured: false },
  { id: 6, title: 'Team Collaboration Hub', category: 'Collaboration', url: '/features/team', description: 'Seamless integration for teams to analyze and act on data collaboratively.', keywords: ['team', 'collaboration', 'integration', 'workflow'], icon: Users, featured: false },
  { id: 7, title: 'SaaS Platform Overview', category: 'About', url: '/about', description: 'Learn about DataFlow, the modern AI-powered data intelligence platform.', keywords: ['saas', 'data platform', 'overview', 'product demo'], icon: Zap, featured: false }
];

export function Search() {
  const { theme } = useTheme();
  const isDark = theme === 'dark';
  const [isOpen, setIsOpen] = useState(false);
  const [query, setQuery] = useState('');
  const [results, setResults] = useState<typeof searchData>([]);
  const searchRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const performSearch = (q: string) => {
    if (!q.trim()) return setResults([]);
    const queryLower = q.toLowerCase().trim();

    const scoredResults = searchData.map(item => {
      let score = 0;
      const matches: string[] = [];

      if (item.title.toLowerCase().includes(queryLower)) { score += 20; matches.push('title'); }
      if (item.featured) score += 5;
      if (item.description.toLowerCase().includes(queryLower)) { score += 8; matches.push('description'); }
      if (item.category.toLowerCase().includes(queryLower)) { score += 6; matches.push('category'); }
      const kws = item.keywords.filter(k => k.toLowerCase().includes(queryLower));
      if (kws.length) { score += kws.length * 3; matches.push(...kws.map(k => `keyword:${k}`)); }

      queryLower.split(' ').filter(w => w.length>2).forEach(w => {
        if (item.title.toLowerCase().includes(w)) score += 4;
        if (item.description.toLowerCase().includes(w)) score += 2;
        if (item.keywords.some(k => k.toLowerCase().includes(w))) score += 3;
        if (item.category.toLowerCase().includes(w)) score += 3;
      });

      return { ...item, score, matches: [...new Set(matches)] };
    }).filter(item => item.score>0).sort((a,b)=>b.score-a.score).slice(0,8);

    setResults(scoredResults);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (searchRef.current && !searchRef.current.contains(event.target as Node)) {
        setIsOpen(false); setQuery('');
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  useEffect(() => {
    if (isOpen && inputRef.current) { inputRef.current.focus(); document.body.style.overflow='hidden'; }
    else document.body.style.overflow='unset';
    return ()=>{ document.body.style.overflow='unset'; };
  }, [isOpen]);

  useEffect(() => {
    const timeoutId = setTimeout(()=>performSearch(query),120);
    return ()=>clearTimeout(timeoutId);
  }, [query]);

  const handleSearchToggle = () => { setIsOpen(!isOpen); setQuery(''); setResults([]); };
  const handleResultClick = (url:string) => {
    setIsOpen(false); setQuery(''); setResults([]);
    if (url.startsWith('/')) window.location.href=url;
    else setTimeout(()=>{ const el = document.querySelector(url); if(el) el.scrollIntoView({behavior:'smooth', block:'start'}); },100);
  };

  const popularSearches = ['Analytics', '3D Globe', 'AI Insights', 'Observability', 'Security Suite', 'Collaboration', 'DataFlow SaaS'];
  const solutionCategories = [
    { name:'Analytics', description:'Real-time Enterprise Metrics', icon: Cpu, query:'analytics' },
    { name:'AI & Insights', description:'Predictive & Optimization Models', icon: Zap, query:'AI insights' },
    { name:'Security', description:'Enterprise Threat Detection', icon: Shield, query:'security' },
    { name:'Visualization', description:'Global Data Flow & 3D Globe', icon: Globe, query:'visualization' }
  ];

  const navigationItems = [
    { name: "Home", id: "hero", icon: Zap },
    { name: "Stats", id: "stats" },
    { name: "About", id: "about" },
    { name: "Features", id: "features" },
    { name: "Integrations", id: "integrations" },
    { name: "Team", id: "team" },
    { name: "Pricing", id: "pricing" },
    { name: "Global", id: "global" },
  ];

  const bgColor = isDark ? '#293289' : 'white';
  const textColor = isDark ? 'text-white' : 'text-foreground';
  const subTextColor = isDark ? 'text-white/70' : 'text-foreground/70';
  const borderColor = isDark ? 'border-white/20' : 'border-border/50';

  return (
    <div ref={searchRef} className="relative">
      <motion.button
        onClick={handleSearchToggle}
        className={`group relative px-4 py-2 ${textColor} hover:text-blue-400 hover:bg-blue-100 rounded-xl transition-all duration-200 bg-background/80 backdrop-blur-sm border ${borderColor} flex items-center space-x-2`}
        whileHover={{ scale:1.02 }} whileTap={{ scale:0.98 }}
        aria-label="Search DataFlow features and concepts" title="Search DataFlow Platform"
      >
        <SearchIcon className="w-4 h-4" />
        <span className="text-sm font-medium hidden sm:block">Search</span>
      </motion.button>

      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div initial={{opacity:0}} animate={{opacity:1}} exit={{opacity:0}} className="fixed inset-0 bg-black/60 backdrop-blur-lg z-50" onClick={()=>setIsOpen(false)} />

            <motion.div
              initial={{opacity:0,scale:0.95,y:-10}}
              animate={{opacity:1,scale:1,y:0}}
              exit={{opacity:0,scale:0.95,y:-10}}
              transition={{ type:'spring', damping:30, stiffness:400 }}
              className={`fixed top-20 left-1/2 transform -translate-x-1/2 w-full max-w-4xl rounded-2xl shadow-2xl z-50 mx-4 overflow-hidden`}
              style={{ backgroundColor: bgColor, borderColor: isDark ? 'rgba(255,255,255,0.2)' : 'rgba(0,0,0,0.1)' }}
              role="dialog" aria-modal="true" aria-label="DataFlow Search"
            >
              {/* Search Header */}
              <div className={`relative p-6 border-b ${borderColor}`}>
                <div className="relative">
                  <div className="absolute left-4 top-1/2 transform -translate-y-1/2"><SearchIcon className="w-5 h-5 text-blue-400" /></div>
                  <input
                    ref={inputRef} type="text" value={query} onChange={(e)=>setQuery(e.target.value)}
                    placeholder="Search DataFlow features, modules, or concepts..."
                    className={`w-full pl-12 pr-12 py-4 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent ${textColor} ${subTextColor} text-lg backdrop-blur-sm`}
                  />
                  {query && <button onClick={()=>setQuery('')} className="absolute right-12 top-1/2 transform -translate-y-1/2 text-foreground/40 hover:text-foreground/60 p-1"><X className="w-4 h-4" /></button>}
                  <button onClick={handleSearchToggle} className="absolute right-4 top-1/2 transform -translate-y-1/2 text-foreground/40 hover:text-foreground/60 p-1"><X className="w-5 h-5" /></button>
                </div>
              </div>

              {/* Results & Quick Search */}
              <div className="max-h-[70vh] overflow-y-auto">
                {results.length > 0 ? (
                  <div className="p-4 space-y-2">
                    <div className="px-3 py-2 text-xs font-semibold text-blue-400 uppercase tracking-wide bg-blue-50 rounded-lg inline-block">
                      {results.length} Feature{results.length!==1?'s':''} Found
                    </div>
                    {results.map((result,index)=>(
                      <motion.button
                        key={result.id} initial={{opacity:0,x:-10}} animate={{opacity:1,x:0}} transition={{delay:index*0.03}}
                        onClick={()=>handleResultClick(result.url)}
                        className={`w-full text-left p-4 rounded-xl hover:bg-blue-50 transition-all duration-200 group border border-transparent`}
                        style={{ backgroundColor: isDark ? '#2f2f6f' : 'white', borderColor: isDark ? 'rgba(255,255,255,0.1)' : 'transparent' }}
                      >
                        <div className="flex items-start space-x-4">
                          <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-indigo-500 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-200 shadow-md flex-shrink-0">
                            <result.icon className="w-5 h-5 text-white" />
                          </div>
                          <div className="flex-1 min-w-0">
                            <div className="flex items-start justify-between">
                              <div className="flex-1">
                                <h4 className="font-semibold group-hover:text-blue-400 transition-colors text-base leading-tight">{result.title}</h4>
                                <p className="text-sm text-foreground/60 mt-1 line-clamp-2">{result.description}</p>
                                <div className="flex items-center gap-2 mt-2">
                                  <span className="text-xs font-medium text-blue-400 bg-blue-50 px-2 py-1 rounded-full border border-blue-100">{result.category}</span>
                                  {result.featured && <span className="text-xs font-medium text-amber-600 bg-amber-100 px-2 py-1 rounded-full border border-amber-200">Featured</span>}
                                </div>
                              </div>
                              <ArrowRight className="w-4 h-4 text-foreground/40 group-hover:text-blue-400 group-hover:translate-x-1 transition-all duration-200 flex-shrink-0 mt-1 ml-2" />
                            </div>
                          </div>
                        </div>
                      </motion.button>
                    ))}
                  </div>
                ) : query.trim()!=='' ? (
                  <div className="p-12 text-center">
                    <div className="w-16 h-16 bg-foreground/5 rounded-2xl flex items-center justify-center mx-auto mb-4"><SearchIcon className="w-8 h-8 text-foreground/20" /></div>
                    <p className="text-foreground/60 font-semibold text-lg mb-2">No features found</p>
                    <p className="text-sm text-foreground/40 max-w-sm mx-auto">No results for &quot;{query}&quot;. Try searching for analytics, AI, or global visualization.</p>
                  </div>
                ) : (
                  <div className="p-8">
                    <div className="text-center mb-8">
                      <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-indigo-500 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                        <SearchIcon className="w-8 h-8 text-white" />
                      </div>
                      <h2 className="text-2xl font-bold mb-2">Search DataFlow Features</h2>
                      <p className="text-foreground/60">Explore interactive SaaS modules, AI insights, and global data visualizations.</p>
                    </div>

                    <div className="mb-8">
                      <h3 className="text-sm font-semibold text-foreground/60 uppercase tracking-wide mb-4 flex items-center">
                        <span className="bg-blue-400 w-2 h-2 rounded-full mr-2"></span>Feature Categories
                      </h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                        {solutionCategories.map(category=>{
                          const Icon = category.icon;
                          return (
                            <button key={category.name} onClick={()=>setQuery(category.query)}
                              className="p-4 text-left bg-background border border-border rounded-xl hover:border-blue-400 hover:bg-blue-50 transition-all duration-200 group"
                            >
                              <div className="flex items-center space-x-3">
                                <div className="w-10 h-10 bg-blue-50 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-200"><Icon className="w-5 h-5 text-blue-400" /></div>
                                <div>
                                  <div className="font-semibold group-hover:text-blue-400 transition-colors">{category.name}</div>
                                  <div className="text-xs text-foreground/50 mt-1">{category.description}</div>
                                </div>
                              </div>
                            </button>
                          )
                        })}
                      </div>
                    </div>

                    <div>
                      <h3 className="text-sm font-semibold text-foreground/60 uppercase tracking-wide mb-4 flex items-center">
                        <span className="bg-blue-400 w-2 h-2 rounded-full mr-2"></span>Popular Searches
                      </h3>
                      <div className="flex flex-wrap gap-2">
                        {popularSearches.map(tag=>(
                          <button key={tag} onClick={()=>setQuery(tag)}
                            className="px-4 py-2 text-sm bg-blue-50 text-blue-400 rounded-lg hover:bg-blue-100 transition-all duration-200 border border-blue-100 hover:border-blue-400 hover:scale-105 font-medium"
                          >{tag}</button>
                        ))}
                      </div>
                    </div>
                  </div>
                )}
              </div>

              <div className="p-4 border-t border-border/20">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-foreground/40 font-medium">Quick Navigation</span>
                  <div className="flex space-x-6">
                    {navigationItems.map(item=>(
                      <button key={item.name} onClick={()=>handleResultClick(`#${item.id}`)} className="text-foreground/60 hover:text-blue-400 transition-colors font-medium hover:scale-105 duration-200">{item.name}</button>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
}
