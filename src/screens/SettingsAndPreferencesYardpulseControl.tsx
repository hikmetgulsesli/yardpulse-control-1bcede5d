// AUTO-GENERATED from Stitch — DO NOT modify layout or CSS
// Screen: Settings and Preferences - YardPulse Control
// 
// AGENT INSTRUCTIONS:
// 1. DO NOT change className values or layout structure
// 2. Add useState for dynamic values (replace hardcoded text)
// 3. Wire interactive controls through the typed actions prop
// 4. Replace placeholder data with props/state

import { BadgeHelp, BarChart3, Bell, CircleHelp, CircleUserRound, LayoutDashboard, ListFilter, LogOut, PackageSearch, Plus, Save, Settings, Trash2, TriangleAlert, User } from "lucide-react";


export type SettingsAndPreferencesYardpulseControlActionId = "notifications-1" | "account-2" | "reset-defaults-3" | "save-configuration-4" | "add-5" | "delete-6" | "delete-7" | "delete-8" | "items-1" | "editor-2" | "status-board-3" | "insights-4" | "settings-5" | "help-6" | "logout-7";

export interface SettingsAndPreferencesYardpulseControlProps {
  actions?: Partial<Record<SettingsAndPreferencesYardpulseControlActionId, () => void>>;
}

export function SettingsAndPreferencesYardpulseControl({ actions }: SettingsAndPreferencesYardpulseControlProps) {
  return (
    <>
      {/* TopAppBar Component */}
      <header className="bg-surface border-b border-outline-variant flex justify-between items-center h-12 px-xl fixed top-0 w-full z-50 transition-colors duration-150">
      <div className="flex items-center gap-md">
      <span className="font-headline-sm text-headline-sm font-bold text-secondary">YardPulse Control</span>
      </div>
      <div className="flex items-center gap-sm">
      <button aria-label="Notifications" className="p-xs text-on-surface-variant hover:bg-surface-variant rounded transition-colors duration-150" type="button" data-action-id="notifications-1" onClick={actions?.["notifications-1"]}>
      <Bell aria-hidden={true} focusable="false" />
      </button>
      <button aria-label="Account" className="p-xs text-on-surface-variant hover:bg-surface-variant rounded transition-colors duration-150" type="button" data-action-id="account-2" onClick={actions?.["account-2"]}>
      <CircleUserRound aria-hidden={true} focusable="false" />
      </button>
      </div>
      </header>
      <div className="flex flex-1 pt-12 h-full">
      {/* SideNavBar Component */}
      <nav className="bg-surface-container border-r border-outline-variant fixed left-0 top-0 h-full w-sidebar_width flex flex-col pt-12 transition-colors duration-200 z-40">
      <div className="p-md border-b border-outline-variant/50 mb-sm">
      <div className="flex items-center gap-sm">
      <div className="w-8 h-8 rounded-full bg-surface-variant flex items-center justify-center border border-outline text-on-surface-variant">
      <User  style={{fontSize: "16px"}} aria-hidden={true} focusable="false" />
      </div>
      <div>
      <div className="font-data-tabular text-data-tabular text-primary">Yard Master</div>
      <div className="font-body-sm text-body-sm text-on-surface-variant">Active Session</div>
      </div>
      </div>
      </div>
      <div className="flex-1 overflow-y-auto py-sm flex flex-col gap-xs">
      <a className="text-on-surface-variant flex items-center px-md py-xs hover:bg-surface-container-highest transition-colors duration-200" href="#" data-action-id="items-1" onClick={actions?.["items-1"]}>
      <PackageSearch className="mr-sm" aria-hidden={true} focusable="false" />
                          Items
                      </a>
      <a className="text-on-surface-variant flex items-center px-md py-xs hover:bg-surface-container-highest transition-colors duration-200" href="#" data-action-id="editor-2" onClick={actions?.["editor-2"]}>
      <BadgeHelp className="mr-sm" aria-hidden={true} focusable="false" />
                          Editor
                      </a>
      <a className="text-on-surface-variant flex items-center px-md py-xs hover:bg-surface-container-highest transition-colors duration-200" href="#" data-action-id="status-board-3" onClick={actions?.["status-board-3"]}>
      <LayoutDashboard className="mr-sm" aria-hidden={true} focusable="false" />
                          Status Board
                      </a>
      <a className="text-on-surface-variant flex items-center px-md py-xs hover:bg-surface-container-highest transition-colors duration-200" href="#" data-action-id="insights-4" onClick={actions?.["insights-4"]}>
      <BarChart3 className="mr-sm" aria-hidden={true} focusable="false" />
                          Insights
                      </a>
      <a className="border-l-4 border-tertiary text-tertiary-fixed-dim bg-surface-container-high font-bold flex items-center px-md py-xs" href="#" data-action-id="settings-5" onClick={actions?.["settings-5"]}>
      <Settings style={{fontVariationSettings: "'FILL' 1"}} className="mr-sm" aria-hidden={true} focusable="false" />
                          Settings
                      </a>
      </div>
      <div className="mt-auto border-t border-outline-variant/50 py-sm flex flex-col gap-xs">
      <a className="text-on-surface-variant flex items-center px-md py-xs hover:bg-surface-container-highest transition-colors duration-200" href="#" data-action-id="help-6" onClick={actions?.["help-6"]}>
      <CircleHelp className="mr-sm" aria-hidden={true} focusable="false" />
                          Help
                      </a>
      <a className="text-on-surface-variant flex items-center px-md py-xs hover:bg-surface-container-highest transition-colors duration-200" href="#" data-action-id="logout-7" onClick={actions?.["logout-7"]}>
      <LogOut className="mr-sm" aria-hidden={true} focusable="false" />
                          Logout
                      </a>
      </div>
      </nav>
      {/* Main Content Area */}
      <main className="ml-sidebar_width flex-1 bg-background overflow-y-auto p-xl">
      <div className="max-w-5xl mx-auto">
      {/* Page Header */}
      <div className="flex justify-between items-end border-b border-outline-variant pb-md mb-xl">
      <div>
      <h1 className="font-display-sm text-display-sm text-on-surface">Settings &amp; Preferences</h1>
      <p className="font-body-md text-body-md text-on-surface-variant mt-xs">Configure local workspace and alerting parameters.</p>
      </div>
      <div className="flex gap-sm">
      <button className="px-md py-sm border border-outline-variant rounded bg-transparent text-on-surface hover:bg-surface-variant font-data-tabular text-data-tabular transition-colors" type="button" data-action-id="reset-defaults-3" onClick={actions?.["reset-defaults-3"]}>
                                  Reset Defaults
                              </button>
      <button className="px-md py-sm rounded bg-secondary-container text-surface-container-lowest font-data-tabular text-data-tabular hover:bg-secondary transition-colors font-bold flex items-center gap-xs" id="btn-save" type="button" data-action-id="save-configuration-4" onClick={actions?.["save-configuration-4"]}>
      <Save  style={{fontSize: "16px"}} aria-hidden={true} focusable="false" />
                                  Save Configuration
                              </button>
      </div>
      </div>
      {/* Settings Grid */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-gutter">
      {/* Left Column (Core Display) */}
      <div className="md:col-span-7 flex flex-col gap-gutter">
      {/* Panel: Workspace Display */}
      <section className="bg-surface-container border border-outline-variant rounded-DEFAULT p-lg">
      <h2 className="font-headline-sm text-headline-sm text-primary mb-md flex items-center gap-xs border-b border-outline-variant/50 pb-xs">
      <BadgeHelp  style={{fontSize: "18px"}} aria-hidden={true} focusable="false" />
                                      Workspace Display
                                  </h2>
      <div className="flex flex-col gap-lg mt-md">
      {/* Default View */}
      <div>
      <label className="font-data-tabular text-data-tabular text-on-surface block mb-sm">Default Yard View</label>
      <div className="flex bg-surface-container-lowest border border-outline-variant rounded p-xs w-max">
      <label className="cursor-pointer">
      <input defaultChecked={true} className="peer sr-only" name="default_view" type="radio" defaultValue="list" />
      <div className="px-md py-xs rounded text-on-surface-variant peer-checked:bg-surface-variant peer-checked:text-on-surface font-body-sm text-body-sm flex items-center gap-xs transition-colors">
      <BadgeHelp  style={{fontSize: "16px"}} aria-hidden={true} focusable="false" />
                                                      Data List
                                                  </div>
      </label>
      <label className="cursor-pointer">
      <input className="peer sr-only" name="default_view" type="radio" defaultValue="board" />
      <div className="px-md py-xs rounded text-on-surface-variant peer-checked:bg-surface-variant peer-checked:text-on-surface font-body-sm text-body-sm flex items-center gap-xs transition-colors">
      <BadgeHelp  style={{fontSize: "16px"}} aria-hidden={true} focusable="false" />
                                                      Visual Board
                                                  </div>
      </label>
      </div>
      </div>
      {/* UI Density */}
      <div>
      <label className="font-data-tabular text-data-tabular text-on-surface block mb-sm">Information Density</label>
      <select className="w-full max-w-xs bg-surface border border-outline-variant rounded px-md py-sm text-on-surface font-mono-data text-mono-data focus:border-secondary-container focus:ring-1 focus:ring-secondary-container outline-none appearance-none">
      <option value="compact">High Density (Compact)</option>
      <option value="standard">Standard</option>
      </select>
      <p className="font-body-sm text-body-sm text-on-surface-variant mt-xs">Controls row heights and padding in data tables.</p>
      </div>
      </div>
      </section>
      {/* Panel: Alert Thresholds */}
      <section className="bg-surface-container border border-outline-variant rounded-DEFAULT p-lg">
      <h2 className="font-headline-sm text-headline-sm text-primary mb-md flex items-center gap-xs border-b border-outline-variant/50 pb-xs">
      <TriangleAlert  style={{fontSize: "18px"}} aria-hidden={true} focusable="false" />
                                      Operational Thresholds
                                  </h2>
      <div className="grid grid-cols-2 gap-md mt-md">
      <div>
      <label className="font-data-tabular text-data-tabular text-on-surface block mb-xs">Idle Car Warning (Hours)</label>
      <div className="relative w-full max-w-[160px]">
      <input className="w-full bg-surface border border-outline-variant rounded px-md py-sm text-on-surface font-mono-data text-mono-data focus:border-secondary-container outline-none" type="number" defaultValue="48" />
      <div className="absolute right-md top-1/2 -translate-y-1/2 text-on-surface-variant font-mono-data text-mono-data text-[10px]">HRS</div>
      </div>
      </div>
      <div>
      <label className="font-data-tabular text-data-tabular text-on-surface block mb-xs">Critical Delay (Minutes)</label>
      <div className="relative w-full max-w-[160px]">
      <input className="w-full bg-surface border border-error border-opacity-50 rounded px-md py-sm text-error font-mono-data text-mono-data focus:border-error outline-none" type="number" defaultValue="120" />
      <div className="absolute right-md top-1/2 -translate-y-1/2 text-error border-opacity-50 font-mono-data text-mono-data text-[10px]">MIN</div>
      </div>
      </div>
      </div>
      </section>
      </div>
      {/* Right Column (Filters & Meta) */}
      <div className="md:col-span-5 flex flex-col gap-gutter">
      {/* Panel: Saved Filters */}
      <section className="bg-surface-container border border-outline-variant rounded-DEFAULT flex flex-col h-full">
      <div className="p-lg pb-sm border-b border-outline-variant/50 flex justify-between items-center">
      <h2 className="font-headline-sm text-headline-sm text-primary flex items-center gap-xs">
      <ListFilter  style={{fontSize: "18px"}} aria-hidden={true} focusable="false" />
                                          Saved Filters
                                      </h2>
      <button className="text-on-surface-variant hover:text-on-surface transition-colors" type="button" data-action-id="add-5" onClick={actions?.["add-5"]}>
      <Plus  style={{fontSize: "18px"}} aria-hidden={true} focusable="false" />
      </button>
      </div>
      <div className="flex-1 overflow-y-auto p-0">
      <table className="w-full text-left border-collapse">
      <tbody className="font-body-sm text-body-sm">
      <tr className="border-b border-outline-variant/30 hover:bg-surface-container-highest transition-colors group">
      <td className="py-sm px-md text-on-surface">Inbound Hazmat</td>
      <td className="py-sm px-md text-right">
      <button className="text-outline hover:text-error opacity-0 group-hover:opacity-100 transition-colors" type="button" data-action-id="delete-6" onClick={actions?.["delete-6"]}>
      <Trash2  style={{fontSize: "16px"}} aria-hidden={true} focusable="false" />
      </button>
      </td>
      </tr>
      <tr className="border-b border-outline-variant/30 hover:bg-surface-container-highest transition-colors group">
      <td className="py-sm px-md text-on-surface">Track 4 Overdue</td>
      <td className="py-sm px-md text-right">
      <button className="text-outline hover:text-error opacity-0 group-hover:opacity-100 transition-colors" type="button" data-action-id="delete-7" onClick={actions?.["delete-7"]}>
      <Trash2  style={{fontSize: "16px"}} aria-hidden={true} focusable="false" />
      </button>
      </td>
      </tr>
      <tr className="border-b border-outline-variant/30 hover:bg-surface-container-highest transition-colors group">
      <td className="py-sm px-md text-on-surface">Maintenance Hold</td>
      <td className="py-sm px-md text-right">
      <button className="text-outline hover:text-error opacity-0 group-hover:opacity-100 transition-colors" type="button" data-action-id="delete-8" onClick={actions?.["delete-8"]}>
      <Trash2  style={{fontSize: "16px"}} aria-hidden={true} focusable="false" />
      </button>
      </td>
      </tr>
      </tbody>
      </table>
      <div className="p-md text-center">
      <span className="font-mono-data text-mono-data text-on-surface-variant text-[10px]">3 ACTIVE FILTERS</span>
      </div>
      </div>
      </section>
      </div>
      </div>
      </div>
      </main>
      </div>
      {/* Toast Notification (Hidden by default) */}
      <div className="fixed bottom-xl right-xl bg-tertiary-container border border-tertiary text-on-tertiary-container px-lg py-sm rounded shadow-lg flex items-center gap-sm transform translate-y-20 opacity-0 transition-colors duration-300 z-50 pointer-events-none" id="toast-success">
      <BadgeHelp  style={{fontVariationSettings: "'FILL' 1"}} aria-hidden={true} focusable="false" />
      <span className="font-data-tabular text-data-tabular">Settings Configuration Saved</span>
      </div>
      
    </>
  );
}
