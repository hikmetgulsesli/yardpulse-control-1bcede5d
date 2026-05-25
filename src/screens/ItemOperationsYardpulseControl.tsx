// AUTO-GENERATED from Stitch — DO NOT modify layout or CSS
// Screen: Item Operations - YardPulse Control
// 
// AGENT INSTRUCTIONS:
// 1. DO NOT change className values or layout structure
// 2. Add useState for dynamic values (replace hardcoded text)
// 3. Wire interactive controls through the typed actions prop
// 4. Replace placeholder data with props/state

import { ArrowDown, BadgeHelp, BarChart3, Bell, CircleHelp, CircleUserRound, LayoutDashboard, ListFilter, LogOut, PackageSearch, Plus, RefreshCw, Search, Settings, X } from "lucide-react";


export type ItemOperationsYardpulseControlActionId = "notifications-1" | "account-circle-2" | "refresh-3" | "create-new-item-4" | "status-all-5" | "track-mainline-6" | "close-7" | "edit-details-8" | "reassign-track-9" | "items-1" | "editor-2" | "status-board-3" | "insights-4" | "settings-5" | "help-6" | "logout-7";

export interface ItemOperationsYardpulseControlProps {
  actions?: Partial<Record<ItemOperationsYardpulseControlActionId, () => void>>;
}

export function ItemOperationsYardpulseControl({ actions }: ItemOperationsYardpulseControlProps) {
  return (
    <>
      {/* TopAppBar */}
      <header className="bg-surface dark:bg-surface text-primary dark:text-primary fixed top-0 w-full z-50 border-b border-outline-variant dark:border-outline-variant flex justify-between items-center h-12 px-xl transition-colors duration-150 shrink-0">
      <div className="flex items-center gap-md">
      <span className="font-headline-sm text-headline-sm font-bold text-secondary dark:text-secondary">YardPulse Control</span>
      </div>
      <div className="flex-1 max-w-md mx-lg hidden md:block">
      <div className="relative">
      <Search className="absolute left-sm top-1/2 -translate-y-1/2 text-on-surface-variant text-[16px]" aria-hidden={true} focusable="false" />
      <input className="w-full bg-[#0F172A] border border-outline-variant text-on-surface font-body-sm rounded pl-8 pr-sm py-[6px] focus:outline-none focus:ring-1 focus:ring-[#ec6a06] focus:border-[#ec6a06] placeholder:text-on-surface-variant transition-shadow" placeholder="Search ID, Track, or Status..." type="text" />
      </div>
      </div>
      <div className="flex items-center gap-sm">
      <button className="p-sm rounded hover:bg-surface-variant dark:hover:bg-surface-variant transition-colors duration-150 text-on-surface-variant dark:text-on-surface-variant flex items-center justify-center" type="button" data-action-id="notifications-1" onClick={actions?.["notifications-1"]}>
      <Bell className="text-[20px]" aria-hidden={true} focusable="false" />
      </button>
      <button className="p-sm rounded hover:bg-surface-variant dark:hover:bg-surface-variant transition-colors duration-150 text-on-surface-variant dark:text-on-surface-variant flex items-center justify-center" type="button" data-action-id="account-circle-2" onClick={actions?.["account-circle-2"]}>
      <CircleUserRound className="text-[20px]" aria-hidden={true} focusable="false" />
      </button>
      </div>
      </header>
      <div className="flex flex-1 h-full pt-12 overflow-hidden">
      {/* SideNavBar */}
      <nav className="bg-surface-container dark:bg-surface-container text-primary dark:text-primary fixed left-0 top-0 h-full w-sidebar_width border-r border-outline-variant dark:border-outline-variant transition-colors duration-200 flex flex-col pt-12 z-40 hidden md:flex shrink-0">
      <div className="px-md py-lg border-b border-outline-variant mb-sm flex items-center gap-sm">
      <div className="w-8 h-8 rounded bg-surface-variant flex items-center justify-center overflow-hidden shrink-0">
      <img alt="Dispatcher Avatar" className="w-full h-full object-cover" data-alt="A close-up portrait of a professional dispatcher in an industrial control room setting, looking focused. The lighting is low-key with cool blue ambient tones reflecting off screens, contrasting with warm accent lights. The mood is serious and authoritative, fitting a high-stakes rail yard operations environment." src="https://lh3.googleusercontent.com/aida-public/AB6AXuD2087MdujCZ8WjvCuYJcJKnctEejEOOcSvZkaGZ2L4BVh7N0vV4lD5m_JRyxiTxYha-a2ly5Y8_6redS0lVECH5Cjxrs7Gv3zev8nNM_n-tLOZEzrQNgUcPDIWojNWg3k1y2L6eKUDTgkXVjBTr55AJfG7NdHRsfj4V8ikjb-a8_hFDtzIroHyZp_GCBgZlyf6QXhwFp7YEYtWBUzCn_N9AchiANPIcHIlv3UGHEFYAXkvzEy2B8y1DlURjdnoiDjDkJ66vSQD_wU" />
      </div>
      <div className="flex flex-col overflow-hidden">
      <span className="font-data-tabular text-data-tabular text-on-surface truncate">Yard Master</span>
      <span className="font-body-sm text-body-sm text-on-surface-variant truncate">Active Session</span>
      </div>
      </div>
      <div className="flex-1 flex flex-col gap-xs overflow-y-auto">
      <a className="border-l-4 border-tertiary text-tertiary-fixed-dim bg-surface-container-high font-bold flex items-center px-md py-xs hover:bg-surface-container-highest dark:hover:bg-surface-container-highest transition-colors duration-150" href="#" data-action-id="items-1" onClick={actions?.["items-1"]}>
      <PackageSearch className="text-[20px] mr-sm" aria-hidden={true} focusable="false" />
      <span className="font-body-md text-body-md">Items</span>
      </a>
      <a className="text-on-surface-variant dark:text-on-surface-variant flex items-center px-md py-xs border-l-4 border-transparent hover:bg-surface-container-highest dark:hover:bg-surface-container-highest transition-colors duration-150" href="#" data-action-id="editor-2" onClick={actions?.["editor-2"]}>
      <BadgeHelp className="text-[20px] mr-sm" aria-hidden={true} focusable="false" />
      <span className="font-body-md text-body-md">Editor</span>
      </a>
      <a className="text-on-surface-variant dark:text-on-surface-variant flex items-center px-md py-xs border-l-4 border-transparent hover:bg-surface-container-highest dark:hover:bg-surface-container-highest transition-colors duration-150" href="#" data-action-id="status-board-3" onClick={actions?.["status-board-3"]}>
      <LayoutDashboard className="text-[20px] mr-sm" aria-hidden={true} focusable="false" />
      <span className="font-body-md text-body-md">Status Board</span>
      </a>
      <a className="text-on-surface-variant dark:text-on-surface-variant flex items-center px-md py-xs border-l-4 border-transparent hover:bg-surface-container-highest dark:hover:bg-surface-container-highest transition-colors duration-150" href="#" data-action-id="insights-4" onClick={actions?.["insights-4"]}>
      <BarChart3 className="text-[20px] mr-sm" aria-hidden={true} focusable="false" />
      <span className="font-body-md text-body-md">Insights</span>
      </a>
      <a className="text-on-surface-variant dark:text-on-surface-variant flex items-center px-md py-xs border-l-4 border-transparent hover:bg-surface-container-highest dark:hover:bg-surface-container-highest transition-colors duration-150" href="#" data-action-id="settings-5" onClick={actions?.["settings-5"]}>
      <Settings className="text-[20px] mr-sm" aria-hidden={true} focusable="false" />
      <span className="font-body-md text-body-md">Settings</span>
      </a>
      </div>
      <div className="border-t border-outline-variant mt-auto py-sm flex flex-col gap-xs">
      <a className="text-on-surface-variant dark:text-on-surface-variant flex items-center px-md py-xs border-l-4 border-transparent hover:bg-surface-container-highest dark:hover:bg-surface-container-highest transition-colors duration-150" href="#" data-action-id="help-6" onClick={actions?.["help-6"]}>
      <CircleHelp className="text-[20px] mr-sm" aria-hidden={true} focusable="false" />
      <span className="font-body-md text-body-md">Help</span>
      </a>
      <a className="text-on-surface-variant dark:text-on-surface-variant flex items-center px-md py-xs border-l-4 border-transparent hover:bg-surface-container-highest dark:hover:bg-surface-container-highest transition-colors duration-150" href="#" data-action-id="logout-7" onClick={actions?.["logout-7"]}>
      <LogOut className="text-[20px] mr-sm" aria-hidden={true} focusable="false" />
      <span className="font-body-md text-body-md">Logout</span>
      </a>
      </div>
      </nav>
      {/* Main Content Area */}
      <main className="flex-1 md:ml-sidebar_width flex flex-col min-w-0 overflow-hidden bg-background">
      {/* Page Header & Metrics */}
      <div className="px-gutter py-md border-b border-outline-variant bg-[#1E293B] shrink-0">
      <div className="flex justify-between items-center mb-md">
      <h1 className="font-display-sm text-display-sm text-on-surface">Item Operations</h1>
      <div className="flex gap-sm">
      <button className="px-sm py-xs border border-outline-variant rounded text-on-surface font-data-tabular text-data-tabular hover:bg-surface-variant transition-colors flex items-center gap-xs" type="button" data-action-id="refresh-3" onClick={actions?.["refresh-3"]}>
      <RefreshCw className="text-[16px]" aria-hidden={true} focusable="false" />
                                  Refresh
                              </button>
      <button className="px-md py-xs bg-[#ec6a06] text-white rounded font-data-tabular text-data-tabular hover:bg-orange-600 transition-colors flex items-center gap-xs border border-transparent" type="button" data-action-id="create-new-item-4" onClick={actions?.["create-new-item-4"]}>
      <Plus className="text-[16px]" aria-hidden={true} focusable="false" />
                                  Create New Item
                              </button>
      </div>
      </div>
      {/* Summary Metrics Bento */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-gutter">
      <div className="bg-[#334155] rounded border border-outline-variant p-sm flex flex-col">
      <span className="font-label-caps text-label-caps text-on-surface-variant uppercase mb-xs">Active Tracks</span>
      <div className="flex items-end justify-between">
      <span className="font-headline-sm text-headline-sm text-on-surface">14 / 24</span>
      <span className="font-body-sm text-body-sm text-tertiary-fixed-dim">Nominal</span>
      </div>
      </div>
      <div className="bg-[#334155] rounded border border-outline-variant p-sm flex flex-col">
      <span className="font-label-caps text-label-caps text-on-surface-variant uppercase mb-xs">Pending Arrivals</span>
      <div className="flex items-end justify-between">
      <span className="font-headline-sm text-headline-sm text-on-surface">08</span>
      <span className="font-body-sm text-body-sm text-secondary">+2 in 1hr</span>
      </div>
      </div>
      <div className="bg-[#334155] rounded border border-outline-variant p-sm flex flex-col">
      <span className="font-label-caps text-label-caps text-on-surface-variant uppercase mb-xs">Cleared Departures</span>
      <div className="flex items-end justify-between">
      <span className="font-headline-sm text-headline-sm text-on-surface">12</span>
      <span className="font-body-sm text-body-sm text-on-surface-variant">Last 4hrs</span>
      </div>
      </div>
      <div className="bg-[#334155] rounded border border-outline-variant p-sm flex flex-col border-l-4 border-l-error">
      <span className="font-label-caps text-label-caps text-on-surface-variant uppercase mb-xs">Anomalies Detected</span>
      <div className="flex items-end justify-between">
      <span className="font-headline-sm text-headline-sm text-error">02</span>
      <span className="font-body-sm text-body-sm text-error">Review Req.</span>
      </div>
      </div>
      </div>
      </div>
      {/* Toolbar */}
      <div className="px-gutter py-xs border-b border-outline-variant bg-[#1E293B] flex items-center gap-sm shrink-0">
      <button className="px-sm py-xs border border-outline-variant rounded bg-[#0F172A] text-on-surface font-body-sm text-body-sm flex items-center gap-xs hover:border-[#ec6a06] transition-colors" type="button" data-action-id="status-all-5" onClick={actions?.["status-all-5"]}>
      <ListFilter className="text-[14px]" aria-hidden={true} focusable="false" />
                          Status: All
                      </button>
      <button className="px-sm py-xs border border-outline-variant rounded bg-[#0F172A] text-on-surface font-body-sm text-body-sm flex items-center gap-xs hover:border-[#ec6a06] transition-colors" type="button" data-action-id="track-mainline-6" onClick={actions?.["track-mainline-6"]}>
      <BadgeHelp className="text-[14px]" aria-hidden={true} focusable="false" />
                          Track: Mainline
                      </button>
      <div className="w-px h-4 bg-outline-variant mx-xs"></div>
      <span className="font-body-sm text-body-sm text-on-surface-variant">Showing 42 Items</span>
      </div>
      {/* Content Area: Table + Preview Pane */}
      <div className="flex-1 flex min-h-0 relative">
      {/* Data Table */}
      <div className="flex-1 overflow-auto bg-[#0F172A]">
      <table className="w-full text-left border-collapse whitespace-nowrap">
      <thead className="sticky top-0 bg-[#1E293B] z-10 border-b border-outline-variant shadow-sm">
      <tr>
      <th className="px-sm py-[6px] font-label-caps text-label-caps text-on-surface-variant font-bold cursor-pointer hover:text-on-surface transition-colors w-10 text-center">
      <input className="rounded border-outline-variant bg-transparent text-[#ec6a06] focus:ring-[#ec6a06] w-3 h-3" type="checkbox" />
      </th>
      <th className="px-sm py-[6px] font-label-caps text-label-caps text-on-surface-variant font-bold cursor-pointer hover:text-on-surface transition-colors">
      <div className="flex items-center gap-xs">ID <ArrowDown className="text-[12px]" aria-hidden={true} focusable="false" /></div>
      </th>
      <th className="px-sm py-[6px] font-label-caps text-label-caps text-on-surface-variant font-bold cursor-pointer hover:text-on-surface transition-colors">Type</th>
      <th className="px-sm py-[6px] font-label-caps text-label-caps text-on-surface-variant font-bold cursor-pointer hover:text-on-surface transition-colors">Status</th>
      <th className="px-sm py-[6px] font-label-caps text-label-caps text-on-surface-variant font-bold cursor-pointer hover:text-on-surface transition-colors">Track</th>
      <th className="px-sm py-[6px] font-label-caps text-label-caps text-on-surface-variant font-bold cursor-pointer hover:text-on-surface transition-colors">Destination</th>
      <th className="px-sm py-[6px] font-label-caps text-label-caps text-on-surface-variant font-bold cursor-pointer hover:text-on-surface transition-colors">ETD</th>
      </tr>
      </thead>
      <tbody className="font-data-tabular text-data-tabular">
      {/* Row 1: Selected */}
      <tr className="border-b border-[#334155] bg-[#1E293B] hover:bg-[#26364a] cursor-pointer transition-colors h-[32px]">
      <td className="px-sm text-center">
      <input defaultChecked={true} className="rounded border-outline-variant bg-transparent text-[#ec6a06] focus:ring-[#ec6a06] w-3 h-3" type="checkbox" />
      </td>
      <td className="px-sm font-mono-data text-mono-data text-on-surface">RC-8492A</td>
      <td className="px-sm text-on-surface-variant">Boxcar</td>
      <td className="px-sm">
      <span className="inline-flex items-center px-xs py-[2px] rounded bg-[#003915] text-[#4ae176] font-label-caps text-[10px] uppercase border border-[#005321]">Cleared</span>
      </td>
      <td className="px-sm font-mono-data text-mono-data text-on-surface">TRK-04</td>
      <td className="px-sm text-on-surface-variant">Chicago, IL</td>
      <td className="px-sm font-mono-data text-mono-data text-on-surface-variant">14:30:00</td>
      </tr>
      {/* Row 2 */}
      <tr className="border-b border-[#334155] hover:bg-[#26364a] cursor-pointer transition-colors h-[32px]">
      <td className="px-sm text-center">
      <input className="rounded border-outline-variant bg-transparent text-[#ec6a06] focus:ring-[#ec6a06] w-3 h-3" type="checkbox" />
      </td>
      <td className="px-sm font-mono-data text-mono-data text-on-surface">RC-9102B</td>
      <td className="px-sm text-on-surface-variant">Tanker</td>
      <td className="px-sm">
      <span className="inline-flex items-center px-xs py-[2px] rounded bg-[#4a1c00] text-[#ffb690] font-label-caps text-[10px] uppercase border border-[#783200]">Loading</span>
      </td>
      <td className="px-sm font-mono-data text-mono-data text-on-surface">TRK-04</td>
      <td className="px-sm text-on-surface-variant">Denver, CO</td>
      <td className="px-sm font-mono-data text-mono-data text-on-surface-variant">16:45:00</td>
      </tr>
      {/* Row 3: Anomaly */}
      <tr className="border-b border-[#334155] bg-error-container/20 hover:bg-[#26364a] cursor-pointer transition-colors h-[32px]">
      <td className="px-sm text-center">
      <input className="rounded border-outline-variant bg-transparent text-[#ec6a06] focus:ring-[#ec6a06] w-3 h-3" type="checkbox" />
      </td>
      <td className="px-sm font-mono-data text-mono-data text-error">RC-4411X</td>
      <td className="px-sm text-on-surface-variant">Flatbed</td>
      <td className="px-sm">
      <span className="inline-flex items-center px-xs py-[2px] rounded bg-[#93000a] text-[#ffb4ab] font-label-caps text-[10px] uppercase border border-[#690005]">Maintenance</span>
      </td>
      <td className="px-sm font-mono-data text-mono-data text-on-surface">TRK-12</td>
      <td className="px-sm text-on-surface-variant">Local Yard</td>
      <td className="px-sm font-mono-data text-mono-data text-on-surface-variant">TBD</td>
      </tr>
      {/* Repeated Rows for density */}
      <tr className="border-b border-[#334155] hover:bg-[#26364a] cursor-pointer transition-colors h-[32px]">
      <td className="px-sm text-center"><input className="rounded border-outline-variant bg-transparent text-[#ec6a06] focus:ring-[#ec6a06] w-3 h-3" type="checkbox" /></td>
      <td className="px-sm font-mono-data text-mono-data text-on-surface">LO-0012</td>
      <td className="px-sm text-on-surface-variant">Locomotive</td>
      <td className="px-sm"><span className="inline-flex items-center px-xs py-[2px] rounded bg-[#003915] text-[#4ae176] font-label-caps text-[10px] uppercase border border-[#005321]">Active</span></td>
      <td className="px-sm font-mono-data text-mono-data text-on-surface">TRK-01</td>
      <td className="px-sm text-on-surface-variant">N/A</td>
      <td className="px-sm font-mono-data text-mono-data text-on-surface-variant">--:--:--</td>
      </tr>
      <tr className="border-b border-[#334155] bg-[#0F172A] hover:bg-[#26364a] cursor-pointer transition-colors h-[32px]">
      <td className="px-sm text-center"><input className="rounded border-outline-variant bg-transparent text-[#ec6a06] focus:ring-[#ec6a06] w-3 h-3" type="checkbox" /></td>
      <td className="px-sm font-mono-data text-mono-data text-on-surface">RC-2281C</td>
      <td className="px-sm text-on-surface-variant">Hopper</td>
      <td className="px-sm"><span className="inline-flex items-center px-xs py-[2px] rounded bg-[#26364a] text-on-surface-variant font-label-caps text-[10px] uppercase border border-[#45464d]">Idle</span></td>
      <td className="px-sm font-mono-data text-mono-data text-on-surface">TRK-08</td>
      <td className="px-sm text-on-surface-variant">Omaha, NE</td>
      <td className="px-sm font-mono-data text-mono-data text-on-surface-variant">08:00:00</td>
      </tr>
      </tbody>
      </table>
      </div>
      {/* Item Preview Sidebar (Contextual) */}
      <aside className="w-80 bg-[#1E293B] border-l border-outline-variant flex flex-col shrink-0 hidden lg:flex">
      {/* Preview Header */}
      <div className="p-sm border-b border-outline-variant flex justify-between items-start">
      <div>
      <span className="font-mono-data text-mono-data text-on-surface-variant mb-xs block">Selected Item</span>
      <h2 className="font-headline-sm text-headline-sm text-on-surface">RC-8492A</h2>
      </div>
      <button className="text-on-surface-variant hover:text-on-surface transition-colors" type="button" data-action-id="close-7" onClick={actions?.["close-7"]}>
      <X className="text-[16px]" aria-hidden={true} focusable="false" />
      </button>
      </div>
      {/* Preview Content */}
      <div className="flex-1 overflow-y-auto p-sm flex flex-col gap-sm">
      {/* Status Banner */}
      <div className="bg-[#003915] border border-[#005321] rounded p-xs flex items-center gap-xs">
      <BadgeHelp className="text-[#4ae176] text-[16px]" aria-hidden={true} focusable="false" />
      <span className="font-body-sm text-body-sm text-[#4ae176] font-bold">Cleared for Departure</span>
      </div>
      {/* Data Grid */}
      <div className="grid grid-cols-2 gap-xs">
      <div className="bg-[#0F172A] border border-outline-variant p-xs rounded">
      <span className="font-label-caps text-label-caps text-on-surface-variant block mb-1">Type</span>
      <span className="font-body-sm text-body-sm text-on-surface">Boxcar (Class A)</span>
      </div>
      <div className="bg-[#0F172A] border border-outline-variant p-xs rounded">
      <span className="font-label-caps text-label-caps text-on-surface-variant block mb-1">Weight</span>
      <span className="font-body-sm text-body-sm text-on-surface">142 Tons</span>
      </div>
      <div className="bg-[#0F172A] border border-outline-variant p-xs rounded">
      <span className="font-label-caps text-label-caps text-on-surface-variant block mb-1">Current Track</span>
      <span className="font-mono-data text-mono-data text-on-surface">TRK-04</span>
      </div>
      <div className="bg-[#0F172A] border border-outline-variant p-xs rounded">
      <span className="font-label-caps text-label-caps text-on-surface-variant block mb-1">Consist ID</span>
      <span className="font-mono-data text-mono-data text-on-surface">CNS-992</span>
      </div>
      </div>
      {/* Mini Track Visualizer */}
      <div className="mt-sm">
      <span className="font-label-caps text-label-caps text-on-surface-variant block mb-xs">Track Position</span>
      <div className="h-8 bg-[#0F172A] border border-outline-variant rounded relative flex items-center px-xs overflow-hidden">
      {/* Track Line */}
      <div className="absolute left-0 right-0 h-px bg-[#45464d] top-1/2 -translate-y-1/2 z-0"></div>
      {/* Cars */}
      <div className="relative z-10 w-8 h-4 bg-[#334155] border border-outline-variant rounded-sm mx-1"></div>
      <div className="relative z-10 w-8 h-4 bg-[#334155] border border-outline-variant rounded-sm mx-1"></div>
      <div className="relative z-10 w-8 h-4 bg-[#ec6a06] border border-[#ffb690] rounded-sm mx-1 shadow-[0_0_8px_rgba(236,106,6,0.5)]"></div> {/* Selected */}
      <div className="relative z-10 w-8 h-4 bg-[#334155] border border-outline-variant rounded-sm mx-1"></div>
      </div>
      </div>
      </div>
      {/* Actions */}
      <div className="p-sm border-t border-outline-variant flex flex-col gap-xs">
      <button className="w-full py-xs border border-outline-variant rounded text-on-surface font-body-sm hover:bg-surface-variant transition-colors" type="button" data-action-id="edit-details-8" onClick={actions?.["edit-details-8"]}>Edit Details</button>
      <button className="w-full py-xs border border-[#ec6a06] text-[#ec6a06] rounded font-body-sm hover:bg-[#ec6a06]/10 transition-colors" type="button" data-action-id="reassign-track-9" onClick={actions?.["reassign-track-9"]}>Reassign Track</button>
      </div>
      </aside>
      </div>
      </main>
      </div>
    </>
  );
}
