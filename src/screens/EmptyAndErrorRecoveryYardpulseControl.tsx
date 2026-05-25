// AUTO-GENERATED from Stitch — DO NOT modify layout or CSS
// Screen: Empty and Error Recovery - YardPulse Control
// 
// AGENT INSTRUCTIONS:
// 1. DO NOT change className values or layout structure
// 2. Add useState for dynamic values (replace hardcoded text)
// 3. Wire interactive controls through the typed actions prop
// 4. Replace placeholder data with props/state

import { BadgeHelp, BarChart3, Bell, CircleHelp, CircleUserRound, LayoutDashboard, LogOut, PackageSearch, Search, SearchX, Settings, TriangleAlert } from "lucide-react";


export type EmptyAndErrorRecoveryYardpulseControlActionId = "notifications-1" | "account-circle-2" | "act-retry-load-3" | "view-logs-4" | "clear-all-filters-5" | "act-create-record-6" | "items-1" | "editor-2" | "status-board-3" | "insights-4" | "settings-5" | "help-6" | "logout-7";

export interface EmptyAndErrorRecoveryYardpulseControlProps {
  actions?: Partial<Record<EmptyAndErrorRecoveryYardpulseControlActionId, () => void>>;
}

export function EmptyAndErrorRecoveryYardpulseControl({ actions }: EmptyAndErrorRecoveryYardpulseControlProps) {
  return (
    <>
      {/* TopAppBar */}
      <header className="bg-surface dark:bg-surface text-primary dark:text-primary fixed top-0 w-full z-50 border-b border-outline-variant dark:border-outline-variant transition-colors duration-150 flex justify-between items-center h-12 px-xl">
      <div className="flex items-center gap-md">
      <BadgeHelp  style={{fontVariationSettings: "'FILL' 1"}} className="text-secondary" aria-hidden={true} focusable="false" />
      <span className="font-headline-sm text-headline-sm font-bold text-secondary dark:text-secondary">YardPulse Control</span>
      </div>
      <div className="flex items-center gap-sm bg-surface-container px-sm py-xs rounded border border-outline-variant w-64">
      <Search className="text-on-surface-variant text-[18px]" aria-hidden={true} focusable="false" />
      <input className="bg-transparent border-none outline-none text-body-sm font-body-sm text-on-surface w-full placeholder:text-on-surface-variant focus:ring-0" placeholder="Search Yard Data..." type="text" />
      </div>
      <div className="flex items-center gap-sm">
      <button className="p-xs rounded hover:bg-surface-variant dark:hover:bg-surface-variant transition-colors duration-150 text-on-surface-variant dark:text-on-surface-variant" type="button" data-action-id="notifications-1" onClick={actions?.["notifications-1"]}>
      <Bell aria-hidden={true} focusable="false" />
      </button>
      <button className="p-xs rounded hover:bg-surface-variant dark:hover:bg-surface-variant transition-colors duration-150 text-on-surface-variant dark:text-on-surface-variant" type="button" data-action-id="account-circle-2" onClick={actions?.["account-circle-2"]}>
      <CircleUserRound aria-hidden={true} focusable="false" />
      </button>
      </div>
      </header>
      <div className="flex flex-1 pt-12 h-full">
      {/* SideNavBar */}
      <nav className="bg-surface-container dark:bg-surface-container text-primary dark:text-primary fixed left-0 top-0 h-full w-sidebar_width border-r border-outline-variant dark:border-outline-variant transition-colors duration-200 flex flex-col pt-12 z-40 hidden md:flex">
      <div className="px-lg py-md mb-md border-b border-outline-variant">
      <div className="font-headline-sm text-headline-sm text-on-surface">Yard Master</div>
      <div className="font-body-sm text-body-sm text-on-surface-variant mt-xs">Active Session</div>
      </div>
      <div className="flex-1 flex flex-col gap-unit overflow-y-auto py-sm">
      {/* Items (Active) */}
      <a className="border-l-4 border-tertiary text-tertiary-fixed-dim bg-surface-container-high font-bold flex items-center px-md py-sm transition-colors duration-200" href="#" data-action-id="items-1" onClick={actions?.["items-1"]}>
      <PackageSearch  style={{fontVariationSettings: "'FILL' 1"}} className="mr-sm text-[20px]" aria-hidden={true} focusable="false" />
      <span className="font-body-md text-body-md">Items</span>
      </a>
      <a className="text-on-surface-variant dark:text-on-surface-variant flex items-center px-md py-sm hover:bg-surface-container-highest dark:hover:bg-surface-container-highest transition-colors duration-200" href="#" data-action-id="editor-2" onClick={actions?.["editor-2"]}>
      <BadgeHelp className="mr-sm text-[20px]" aria-hidden={true} focusable="false" />
      <span className="font-body-md text-body-md">Editor</span>
      </a>
      <a className="text-on-surface-variant dark:text-on-surface-variant flex items-center px-md py-sm hover:bg-surface-container-highest dark:hover:bg-surface-container-highest transition-colors duration-200" href="#" data-action-id="status-board-3" onClick={actions?.["status-board-3"]}>
      <LayoutDashboard className="mr-sm text-[20px]" aria-hidden={true} focusable="false" />
      <span className="font-body-md text-body-md">Status Board</span>
      </a>
      <a className="text-on-surface-variant dark:text-on-surface-variant flex items-center px-md py-sm hover:bg-surface-container-highest dark:hover:bg-surface-container-highest transition-colors duration-200" href="#" data-action-id="insights-4" onClick={actions?.["insights-4"]}>
      <BarChart3 className="mr-sm text-[20px]" aria-hidden={true} focusable="false" />
      <span className="font-body-md text-body-md">Insights</span>
      </a>
      <a className="text-on-surface-variant dark:text-on-surface-variant flex items-center px-md py-sm hover:bg-surface-container-highest dark:hover:bg-surface-container-highest transition-colors duration-200" href="#" data-action-id="settings-5" onClick={actions?.["settings-5"]}>
      <Settings className="mr-sm text-[20px]" aria-hidden={true} focusable="false" />
      <span className="font-body-md text-body-md">Settings</span>
      </a>
      </div>
      <div className="mt-auto border-t border-outline-variant py-sm flex flex-col gap-unit">
      <a className="text-on-surface-variant dark:text-on-surface-variant flex items-center px-md py-sm hover:bg-surface-container-highest dark:hover:bg-surface-container-highest transition-colors duration-200" href="#" data-action-id="help-6" onClick={actions?.["help-6"]}>
      <CircleHelp className="mr-sm text-[20px]" aria-hidden={true} focusable="false" />
      <span className="font-body-md text-body-md">Help</span>
      </a>
      <a className="text-on-surface-variant dark:text-on-surface-variant flex items-center px-md py-sm hover:bg-surface-container-highest dark:hover:bg-surface-container-highest transition-colors duration-200" href="#" data-action-id="logout-7" onClick={actions?.["logout-7"]}>
      <LogOut className="mr-sm text-[20px]" aria-hidden={true} focusable="false" />
      <span className="font-body-md text-body-md">Logout</span>
      </a>
      </div>
      </nav>
      {/* Main Content Area */}
      <main className="flex-1 ml-0 md:ml-sidebar_width p-lg overflow-y-auto bg-surface-dim">
      <div className="max-w-6xl mx-auto space-y-xl">
      <div className="mb-lg">
      <h1 className="font-display-sm text-display-sm text-on-surface mb-xs">System Recovery &amp; Empty States</h1>
      <p className="font-body-sm text-body-sm text-on-surface-variant">Diagnostics view for unpopulated or failed data requests.</p>
      </div>
      {/* 1. Global Data Load Failure */}
      <section className="bg-error-container/10 border border-error/20 rounded p-lg flex items-start gap-lg relative overflow-hidden">
      <div className="absolute top-0 left-0 w-1 h-full bg-error"></div>
      <div className="p-sm bg-error-container/20 rounded-full flex-shrink-0">
      <TriangleAlert className="text-error text-[28px]" aria-hidden={true} focusable="false" />
      </div>
      <div className="flex-1">
      <h2 className="font-headline-sm text-headline-sm text-error mb-xs">System Connection Error</h2>
      <p className="font-body-sm text-body-sm text-on-surface-variant mb-md">Unable to establish a secure connection with the central dispatch server. Live telemetry data cannot be fetched at this time.</p>
      <div className="bg-surface-container p-sm rounded border border-outline-variant inline-block mb-md">
      <span className="font-mono-data text-mono-data text-on-surface-variant">ERR_CODE: 503 Service Unavailable | NODE: YRD-ALPHA-01</span>
      </div>
      <div className="flex gap-md">
      <button className="bg-secondary-container hover:bg-secondary text-on-secondary-container font-body-sm text-body-sm px-lg py-sm rounded font-bold transition-colors shadow-sm" type="button" data-action-id="act-retry-load-3" onClick={actions?.["act-retry-load-3"]}>ACT_RETRY_LOAD</button>
      <button className="border border-outline-variant text-on-surface hover:bg-surface-variant font-body-sm text-body-sm px-lg py-sm rounded transition-colors" type="button" data-action-id="view-logs-4" onClick={actions?.["view-logs-4"]}>View Logs</button>
      </div>
      </div>
      </section>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-lg">
      {/* 2. Empty Search/Filter State */}
      <section className="bg-surface-container rounded border border-outline-variant p-xl flex flex-col items-center justify-center text-center min-h-[300px]">
      <div className="w-16 h-16 rounded-full bg-surface-variant flex items-center justify-center mb-md border border-outline-variant">
      <SearchX className="text-on-surface-variant text-[32px]" aria-hidden={true} focusable="false" />
      </div>
      <h3 className="font-headline-sm text-headline-sm text-on-surface mb-xs">No matching trains found</h3>
      <p className="font-body-sm text-body-sm text-on-surface-variant mb-lg max-w-sm">
                                  Query for Train ID <span className="font-mono-data text-mono-data bg-surface-dim px-unit rounded">UX-8921</span> returned zero results in the current yard. Try searching by Track ID or Status instead.
                              </p>
      <div className="flex gap-sm">
      <button className="border border-outline-variant text-on-surface hover:bg-surface-variant font-body-sm text-body-sm px-lg py-sm rounded transition-colors" type="button" data-action-id="clear-all-filters-5" onClick={actions?.["clear-all-filters-5"]}>Clear All Filters</button>
      </div>
      </section>
      {/* 3. No Records Created (Empty State) */}
      <section className="bg-surface-container rounded border border-outline-variant p-xl flex flex-col items-center justify-center text-center min-h-[300px]">
      <div className="w-16 h-16 rounded-full bg-surface-variant flex items-center justify-center mb-md border border-outline-variant border-dashed">
      <BadgeHelp className="text-on-surface-variant text-[32px]" aria-hidden={true} focusable="false" />
      </div>
      <h3 className="font-headline-sm text-headline-sm text-on-surface mb-xs">No Active Trains in Yard</h3>
      <p className="font-body-sm text-body-sm text-on-surface-variant mb-lg max-w-sm">
                                  The current sector is empty. Waiting for incoming manifest data or manual dispatcher entry.
                              </p>
      <button className="bg-surface-bright border border-outline-variant hover:border-tertiary-fixed-dim text-on-surface font-body-sm text-body-sm px-lg py-sm rounded transition-colors flex items-center gap-xs group" type="button" data-action-id="act-create-record-6" onClick={actions?.["act-create-record-6"]}>
      <BadgeHelp className="text-[18px] group-hover:text-tertiary-fixed-dim transition-colors" aria-hidden={true} focusable="false" />
                                  ACT_CREATE_RECORD
                              </button>
      </section>
      </div>
      </div>
      </main>
      </div>
    </>
  );
}
