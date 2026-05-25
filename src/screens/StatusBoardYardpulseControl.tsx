// AUTO-GENERATED from Stitch — DO NOT modify layout or CSS
// Screen: Status Board - YardPulse Control
// 
// AGENT INSTRUCTIONS:
// 1. DO NOT change className values or layout structure
// 2. Add useState for dynamic values (replace hardcoded text)
// 3. Wire interactive controls through the typed actions prop
// 4. Replace placeholder data with props/state

import { Badge, BadgeHelp, BarChart3, Bell, Check, CircleHelp, CircleUserRound, LayoutDashboard, ListFilter, LogOut, PackageSearch, Plus, Search, Settings, TriangleAlert, User } from "lucide-react";


export type StatusBoardYardpulseControlActionId = "notifications-1" | "account-circle-2" | "filter-3" | "new-entry-4" | "assign-5" | "assign-6" | "update-7" | "details-8" | "details-9" | "clear-to-dep-10" | "items-1" | "editor-2" | "status-board-3" | "insights-4" | "settings-5" | "help-6" | "logout-7";

export interface StatusBoardYardpulseControlProps {
  actions?: Partial<Record<StatusBoardYardpulseControlActionId, () => void>>;
}

export function StatusBoardYardpulseControl({ actions }: StatusBoardYardpulseControlProps) {
  return (
    <>
      {/* TopAppBar */}
      <header className="fixed top-0 w-full z-50 bg-surface dark:bg-surface border-b border-outline-variant dark:border-outline-variant flex justify-between items-center h-12 px-xl transition-colors duration-150">
      <div className="flex items-center gap-xl">
      <div className="font-headline-sm text-headline-sm font-bold text-secondary dark:text-secondary">
                      YardPulse Control
                  </div>
      {/* Search Bar (on_left) */}
      <div className="relative hidden md:flex items-center">
      <Search  style={{fontVariationSettings: "'FILL' 0"}} className="absolute left-sm text-on-surface-variant text-[18px]" aria-hidden={true} focusable="false" />
      <input className="bg-[#0F172A] border border-outline-variant text-on-surface text-body-sm font-body-sm rounded pl-8 pr-sm py-1 focus:outline-none focus:ring-1 focus:ring-secondary-container focus:border-secondary-container w-64 placeholder:text-on-surface-variant" placeholder="Search ID, Track..." type="text" />
      </div>
      </div>
      <div className="flex items-center gap-md">
      <button className="text-on-surface-variant dark:text-on-surface-variant hover:bg-surface-variant dark:hover:bg-surface-variant p-sm rounded transition-colors duration-150 flex items-center justify-center" type="button" data-action-id="notifications-1" onClick={actions?.["notifications-1"]}>
      <Bell aria-hidden={true} focusable="false" />
      </button>
      <button className="text-on-surface-variant dark:text-on-surface-variant hover:bg-surface-variant dark:hover:bg-surface-variant p-sm rounded transition-colors duration-150 flex items-center justify-center" type="button" data-action-id="account-circle-2" onClick={actions?.["account-circle-2"]}>
      <CircleUserRound aria-hidden={true} focusable="false" />
      </button>
      </div>
      </header>
      {/* SideNavBar */}
      <nav className="fixed left-0 top-0 h-full w-sidebar_width bg-surface-container dark:bg-surface-container border-r border-outline-variant dark:border-outline-variant flex flex-col pt-12 transition-colors duration-200 z-40">
      {/* Header Info */}
      <div className="px-md py-lg border-b border-outline-variant/50 mb-sm flex items-center gap-md">
      <div className="w-8 h-8 rounded bg-surface-variant flex items-center justify-center text-primary border border-outline-variant">
      <Badge className="text-[20px]" aria-hidden={true} focusable="false" />
      </div>
      <div>
      <div className="font-data-tabular text-data-tabular text-on-surface">Yard Master</div>
      <div className="font-body-sm text-body-sm text-tertiary">Active Session</div>
      </div>
      </div>
      {/* Navigation Links */}
      <div className="flex-1 flex flex-col gap-xs py-sm">
      <a className="text-on-surface-variant dark:text-on-surface-variant flex items-center px-md py-xs hover:bg-surface-container-highest dark:hover:bg-surface-container-highest transition-colors duration-200 group" href="#" data-action-id="items-1" onClick={actions?.["items-1"]}>
      <PackageSearch className="mr-md text-[20px] group-hover:text-primary transition-colors" aria-hidden={true} focusable="false" />
      <span className="font-body-md text-body-md">Items</span>
      </a>
      <a className="text-on-surface-variant dark:text-on-surface-variant flex items-center px-md py-xs hover:bg-surface-container-highest dark:hover:bg-surface-container-highest transition-colors duration-200 group" href="#" data-action-id="editor-2" onClick={actions?.["editor-2"]}>
      <BadgeHelp className="mr-md text-[20px] group-hover:text-primary transition-colors" aria-hidden={true} focusable="false" />
      <span className="font-body-md text-body-md">Editor</span>
      </a>
      {/* Active State */}
      <a className="border-l-4 border-tertiary text-tertiary-fixed-dim bg-surface-container-high font-bold flex items-center px-md py-xs transition-colors duration-200" href="#" data-action-id="status-board-3" onClick={actions?.["status-board-3"]}>
      <LayoutDashboard style={{fontVariationSettings: "'FILL' 1"}} className="mr-md text-[20px]" aria-hidden={true} focusable="false" />
      <span className="font-body-md text-body-md">Status Board</span>
      </a>
      <a className="text-on-surface-variant dark:text-on-surface-variant flex items-center px-md py-xs hover:bg-surface-container-highest dark:hover:bg-surface-container-highest transition-colors duration-200 group" href="#" data-action-id="insights-4" onClick={actions?.["insights-4"]}>
      <BarChart3 className="mr-md text-[20px] group-hover:text-primary transition-colors" aria-hidden={true} focusable="false" />
      <span className="font-body-md text-body-md">Insights</span>
      </a>
      <a className="text-on-surface-variant dark:text-on-surface-variant flex items-center px-md py-xs hover:bg-surface-container-highest dark:hover:bg-surface-container-highest transition-colors duration-200 group" href="#" data-action-id="settings-5" onClick={actions?.["settings-5"]}>
      <Settings className="mr-md text-[20px] group-hover:text-primary transition-colors" aria-hidden={true} focusable="false" />
      <span className="font-body-md text-body-md">Settings</span>
      </a>
      </div>
      {/* Footer Links */}
      <div className="mt-auto border-t border-outline-variant/50 py-sm flex flex-col gap-xs">
      <a className="text-on-surface-variant dark:text-on-surface-variant flex items-center px-md py-xs hover:bg-surface-container-highest dark:hover:bg-surface-container-highest transition-colors duration-200 group" href="#" data-action-id="help-6" onClick={actions?.["help-6"]}>
      <CircleHelp className="mr-md text-[20px] group-hover:text-primary transition-colors" aria-hidden={true} focusable="false" />
      <span className="font-body-md text-body-md">Help</span>
      </a>
      <a className="text-on-surface-variant dark:text-on-surface-variant flex items-center px-md py-xs hover:bg-surface-container-highest dark:hover:bg-surface-container-highest transition-colors duration-200 group" href="#" data-action-id="logout-7" onClick={actions?.["logout-7"]}>
      <LogOut className="mr-md text-[20px] group-hover:text-error transition-colors" aria-hidden={true} focusable="false" />
      <span className="font-body-md text-body-md">Logout</span>
      </a>
      </div>
      </nav>
      {/* Main Content Canvas */}
      <main className="ml-sidebar_width mt-12 flex-1 h-[calc(100vh-48px)] bg-background flex flex-col overflow-hidden">
      {/* Board Header Tools */}
      <div className="px-lg py-md border-b border-outline-variant flex justify-between items-center bg-surface-dim shrink-0">
      <div className="flex items-center gap-md">
      <h1 className="font-headline-sm text-headline-sm text-on-surface">Live Yard Status</h1>
      <div className="h-4 w-px bg-outline-variant"></div>
      <div className="flex gap-sm">
      <span className="inline-flex items-center gap-1 bg-surface-container px-2 py-1 rounded text-body-sm font-body-sm border border-outline-variant">
      <span className="w-2 h-2 rounded-full bg-tertiary"></span> System Nominal
                          </span>
      </div>
      </div>
      <div className="flex gap-sm">
      <button className="bg-surface-container hover:bg-surface-variant border border-outline-variant text-on-surface px-md py-xs rounded font-data-tabular text-data-tabular flex items-center gap-xs transition-colors" type="button" data-action-id="filter-3" onClick={actions?.["filter-3"]}>
      <ListFilter className="text-[16px]" aria-hidden={true} focusable="false" /> Filter
                      </button>
      <button className="bg-secondary-container hover:bg-[#ff8a3d] text-white px-md py-xs rounded font-data-tabular text-data-tabular flex items-center gap-xs transition-colors" type="button" data-action-id="new-entry-4" onClick={actions?.["new-entry-4"]}>
      <Plus className="text-[16px]" aria-hidden={true} focusable="false" /> New Entry
                      </button>
      </div>
      </div>
      {/* Kanban Board Area */}
      <div className="flex-1 overflow-x-auto overflow-y-hidden p-md flex gap-md items-start">
      {/* Column: Incoming */}
      <div className="flex flex-col w-[320px] shrink-0 bg-surface-container-low rounded-lg border border-outline-variant/30 h-full max-h-full">
      <div className="p-sm border-b border-outline-variant/50 flex justify-between items-center bg-surface/50 rounded-t-lg">
      <h2 className="font-label-caps text-label-caps text-on-surface-variant uppercase flex items-center gap-xs">
      <BadgeHelp className="text-[16px]" aria-hidden={true} focusable="false" /> Incoming
                          </h2>
      <span className="bg-surface-variant text-on-surface px-1.5 py-0.5 rounded font-mono-data text-mono-data text-[10px]">3</span>
      </div>
      <div className="p-sm flex flex-col gap-sm overflow-y-auto flex-1">
      {/* Card */}
      <div className="bg-surface-container-highest border border-outline-variant rounded p-sm hover:border-primary transition-colors group cursor-pointer">
      <div className="flex justify-between items-start mb-xs">
      <span className="font-mono-data text-mono-data text-primary-fixed">BNSF-8921</span>
      <BadgeHelp className="text-[16px] text-on-surface-variant" aria-hidden={true} focusable="false" />
      </div>
      <div className="font-data-tabular text-data-tabular text-on-surface mb-xs">Mixed Freight (112 Cars)</div>
      <div className="flex justify-between items-center border-t border-outline-variant/50 pt-xs mt-xs">
      <div className="font-body-sm text-body-sm text-on-surface-variant flex items-center gap-1">
      <BadgeHelp className="text-[14px]" aria-hidden={true} focusable="false" /> ETA: 14:30
                                  </div>
      <button className="text-secondary hover:text-secondary-fixed text-[10px] font-label-caps uppercase tracking-wider" type="button" data-action-id="assign-5" onClick={actions?.["assign-5"]}>Assign</button>
      </div>
      </div>
      {/* Card */}
      <div className="bg-surface-container-highest border border-outline-variant rounded p-sm hover:border-primary transition-colors group cursor-pointer">
      <div className="flex justify-between items-start mb-xs">
      <span className="font-mono-data text-mono-data text-primary-fixed">UP-4402</span>
      <TriangleAlert  style={{fontVariationSettings: "'FILL' 1"}} className="text-[16px] text-secondary" aria-hidden={true} focusable="false" />
      </div>
      <div className="font-data-tabular text-data-tabular text-on-surface mb-xs">Intermodal Priority</div>
      <div className="flex justify-between items-center border-t border-outline-variant/50 pt-xs mt-xs">
      <div className="font-body-sm text-body-sm text-on-surface-variant flex items-center gap-1">
      <BadgeHelp className="text-[14px]" aria-hidden={true} focusable="false" /> ETA: 15:15
                                  </div>
      <button className="text-secondary hover:text-secondary-fixed text-[10px] font-label-caps uppercase tracking-wider" type="button" data-action-id="assign-6" onClick={actions?.["assign-6"]}>Assign</button>
      </div>
      </div>
      </div>
      </div>
      {/* Column: In-Yard (Active) */}
      <div className="flex flex-col w-[320px] shrink-0 bg-surface-container-low rounded-lg border border-outline-variant/30 h-full max-h-full">
      <div className="p-sm border-b border-outline-variant/50 flex justify-between items-center bg-surface/50 rounded-t-lg">
      <h2 className="font-label-caps text-label-caps text-on-surface-variant uppercase flex items-center gap-xs">
      <BadgeHelp className="text-[16px]" aria-hidden={true} focusable="false" /> In-Yard Processing
                          </h2>
      <span className="bg-surface-variant text-on-surface px-1.5 py-0.5 rounded font-mono-data text-mono-data text-[10px]">4</span>
      </div>
      <div className="p-sm flex flex-col gap-sm overflow-y-auto flex-1">
      {/* Card (Blocked) */}
      <div className="bg-[#1b1114] border border-error-container rounded p-sm relative group cursor-pointer">
      <div className="absolute top-0 right-0 w-1.5 h-full bg-error rounded-r opacity-80"></div>
      <div className="flex justify-between items-start mb-xs">
      <span className="font-mono-data text-mono-data text-error">CSX-9910</span>
      <span className="bg-error-container text-on-error-container text-[10px] px-1 rounded font-label-caps">Blocked</span>
      </div>
      <div className="font-data-tabular text-data-tabular text-on-surface mb-xs">Coal Drag • Trk 14N</div>
      <div className="font-body-sm text-body-sm text-error/80 mb-sm text-[11px]">Mech issue on lead loco. Crew pending.</div>
      <div className="flex justify-between items-center border-t border-error-container/50 pt-xs mt-xs">
      <div className="font-mono-data text-mono-data text-on-surface-variant flex items-center gap-1 text-[11px]">
      <BadgeHelp className="text-[14px]" aria-hidden={true} focusable="false" /> 08h 42m
                                  </div>
      <button className="text-on-surface hover:text-white bg-surface-variant hover:bg-surface-bright px-2 py-0.5 rounded text-[10px] border border-outline-variant transition-colors" type="button" data-action-id="update-7" onClick={actions?.["update-7"]}>Update</button>
      </div>
      </div>
      {/* Card (Active) */}
      <div className="bg-surface-container-highest border border-outline-variant rounded p-sm hover:border-primary transition-colors group cursor-pointer">
      <div className="flex justify-between items-start mb-xs">
      <span className="font-mono-data text-mono-data text-primary-fixed">NS-228</span>
      <span className="bg-tertiary/20 text-tertiary-fixed-dim text-[10px] px-1 rounded font-label-caps border border-tertiary/30">Sorting</span>
      </div>
      <div className="font-data-tabular text-data-tabular text-on-surface mb-xs">Auto Racks • Bowl 4</div>
      <div className="flex justify-between items-center border-t border-outline-variant/50 pt-xs mt-xs">
      <div className="font-mono-data text-mono-data text-on-surface-variant flex items-center gap-1 text-[11px]">
      <BadgeHelp className="text-[14px]" aria-hidden={true} focusable="false" /> 02h 15m
                                  </div>
      <button className="text-on-surface hover:text-white bg-surface-variant hover:bg-surface-bright px-2 py-0.5 rounded text-[10px] border border-outline-variant transition-colors" type="button" data-action-id="details-8" onClick={actions?.["details-8"]}>Details</button>
      </div>
      </div>
      {/* Card (Active) */}
      <div className="bg-surface-container-highest border border-outline-variant rounded p-sm hover:border-primary transition-colors group cursor-pointer">
      <div className="flex justify-between items-start mb-xs">
      <span className="font-mono-data text-mono-data text-primary-fixed">CN-5044</span>
      <span className="bg-surface-variant text-on-surface-variant text-[10px] px-1 rounded font-label-caps border border-outline-variant/50">Inspection</span>
      </div>
      <div className="font-data-tabular text-data-tabular text-on-surface mb-xs">Grain Empty • Trk 08S</div>
      <div className="flex justify-between items-center border-t border-outline-variant/50 pt-xs mt-xs">
      <div className="font-mono-data text-mono-data text-on-surface-variant flex items-center gap-1 text-[11px]">
      <BadgeHelp className="text-[14px]" aria-hidden={true} focusable="false" /> 05h 30m
                                  </div>
      <button className="text-on-surface hover:text-white bg-surface-variant hover:bg-surface-bright px-2 py-0.5 rounded text-[10px] border border-outline-variant transition-colors" type="button" data-action-id="details-9" onClick={actions?.["details-9"]}>Details</button>
      </div>
      </div>
      </div>
      </div>
      {/* Column: Ready */}
      <div className="flex flex-col w-[320px] shrink-0 bg-surface-container-low rounded-lg border border-outline-variant/30 h-full max-h-full">
      <div className="p-sm border-b border-outline-variant/50 flex justify-between items-center bg-surface/50 rounded-t-lg">
      <h2 className="font-label-caps text-label-caps text-on-surface-variant uppercase flex items-center gap-xs">
      <BadgeHelp className="text-[16px]" aria-hidden={true} focusable="false" /> Ready
                          </h2>
      <span className="bg-tertiary/20 text-tertiary-fixed-dim px-1.5 py-0.5 rounded font-mono-data text-mono-data text-[10px] border border-tertiary/30">2</span>
      </div>
      <div className="p-sm flex flex-col gap-sm overflow-y-auto flex-1">
      {/* Card (Ready) */}
      <div className="bg-surface-container-highest border border-tertiary/40 rounded p-sm hover:border-tertiary transition-colors group cursor-pointer relative overflow-hidden">
      <div className="absolute left-0 top-0 w-1 h-full bg-tertiary/50"></div>
      <div className="flex justify-between items-start mb-xs pl-2">
      <span className="font-mono-data text-mono-data text-primary-fixed">KCS-771</span>
      <Check className="text-[16px] text-tertiary" aria-hidden={true} focusable="false" />
      </div>
      <div className="font-data-tabular text-data-tabular text-on-surface mb-xs pl-2">Built: Chemical Mix • Dep 2</div>
      <div className="flex justify-between items-center border-t border-outline-variant/50 pt-xs mt-xs pl-2">
      <div className="font-body-sm text-body-sm text-on-surface-variant flex items-center gap-1">
      <User className="text-[14px]" aria-hidden={true} focusable="false" /> Crew Ready
                                  </div>
      <button className="bg-secondary-container hover:bg-[#ff8a3d] text-white px-2 py-0.5 rounded text-[10px] font-label-caps uppercase tracking-wider transition-colors" type="button" data-action-id="clear-to-dep-10" onClick={actions?.["clear-to-dep-10"]}>Clear to Dep</button>
      </div>
      </div>
      </div>
      </div>
      </div>
      </main>
    </>
  );
}
