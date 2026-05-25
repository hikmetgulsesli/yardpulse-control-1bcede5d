// AUTO-GENERATED from Stitch — DO NOT modify layout or CSS
// Screen: Item Editor - YardPulse Control
// 
// AGENT INSTRUCTIONS:
// 1. DO NOT change className values or layout structure
// 2. Add useState for dynamic values (replace hardcoded text)
// 3. Wire interactive controls through the typed actions prop
// 4. Replace placeholder data with props/state

import { BadgeHelp, BarChart3, Bell, CircleAlert, CircleHelp, CircleUserRound, LayoutDashboard, LogOut, PackageSearch, Save, Settings, TriangleAlert } from "lucide-react";


export type ItemEditorYardpulseControlActionId = "cancel-1" | "save-changes-2" | "items-1" | "editor-2" | "status-board-3" | "insights-4" | "settings-5" | "help-6" | "logout-7" | "items-8" | "editor-9" | "status-10" | "settings-11";

export interface ItemEditorYardpulseControlProps {
  actions?: Partial<Record<ItemEditorYardpulseControlActionId, () => void>>;
}

export function ItemEditorYardpulseControl({ actions }: ItemEditorYardpulseControlProps) {
  return (
    <>
      {/* Mobile Top Navigation (md:hidden) */}
      <nav className="md:hidden fixed top-0 w-full z-50 bg-surface border-b border-outline-variant flex justify-between items-center h-12 px-xl">
      <div className="font-headline-sm text-headline-sm font-bold text-secondary">YardPulse Control</div>
      <div className="flex items-center gap-4">
      <Bell className="text-on-surface-variant cursor-pointer hover:text-primary transition-colors duration-150" aria-hidden={true} focusable="false" />
      <CircleUserRound className="text-on-surface-variant cursor-pointer hover:text-primary transition-colors duration-150" aria-hidden={true} focusable="false" />
      </div>
      </nav>
      {/* SideNavBar (hidden on mobile, visible on md+) */}
      <nav className="hidden md:flex fixed left-0 top-0 h-full w-sidebar_width bg-surface-container border-r border-outline-variant flex-col pt-12 z-40 transition-colors duration-200">
      <div className="px-md mb-8">
      <div className="font-headline-sm text-headline-sm text-secondary font-bold truncate">YardPulse Control</div>
      <div className="mt-4 flex items-center gap-3">
      <div className="w-10 h-10 rounded-full bg-surface-variant flex items-center justify-center overflow-hidden border border-outline-variant">
      <img alt="Dispatcher Avatar" className="w-full h-full object-cover" data-alt="A close-up headshot of a professional dispatcher in an industrial control room setting. The lighting is slightly dim, emphasizing the glow from monitors, with a cool, modern industrial vibe. The focus is sharp on the person's face." src="https://lh3.googleusercontent.com/aida-public/AB6AXuBQKi-F5PuSEUEq1q4zBW9_HDmiLAOWhrFLsZfUdhpEgaaREcG07X4PDRnOhgiS2xywM8rPkp9w5ABpw6pWypNVe4-i84k4PBlwhMObjs49_hIPSVn_Mm_jWJ039bpXPZjGB9iqFDnjhDWV8NuxLow5vKZOiBDdhmrBq1SUulIATpqFXJkDTAxHYLmmDjhx4dqZSkwatcdcsO5pLXlhM8X-5hWa2wyGfDalyumn3JsssCY6oB7RDlkYwDQwbPbql-Gk_VHXbGaOr5w" />
      </div>
      <div>
      <div className="font-body-md text-body-md text-primary font-medium">Yard Master</div>
      <div className="font-body-sm text-body-sm text-on-surface-variant">Active Session</div>
      </div>
      </div>
      </div>
      <ul className="flex-1 space-y-2 px-sm">
      <li>
      <a className="flex items-center px-md py-xs text-on-surface-variant hover:bg-surface-container-highest transition-colors duration-200 rounded" href="#" data-action-id="items-1" onClick={actions?.["items-1"]}>
      <PackageSearch className="mr-3 text-[20px]" aria-hidden={true} focusable="false" />
      <span className="font-body-md text-body-md">Items</span>
      </a>
      </li>
      <li>
      <a className="flex items-center px-md py-xs border-l-4 border-tertiary text-tertiary-fixed-dim bg-surface-container-high font-bold transition-colors duration-200" href="#" data-action-id="editor-2" onClick={actions?.["editor-2"]}>
      <BadgeHelp className="mr-3 text-[20px] icon-fill" aria-hidden={true} focusable="false" />
      <span className="font-body-md text-body-md">Editor</span>
      </a>
      </li>
      <li>
      <a className="flex items-center px-md py-xs text-on-surface-variant hover:bg-surface-container-highest transition-colors duration-200 rounded" href="#" data-action-id="status-board-3" onClick={actions?.["status-board-3"]}>
      <LayoutDashboard className="mr-3 text-[20px]" aria-hidden={true} focusable="false" />
      <span className="font-body-md text-body-md">Status Board</span>
      </a>
      </li>
      <li>
      <a className="flex items-center px-md py-xs text-on-surface-variant hover:bg-surface-container-highest transition-colors duration-200 rounded" href="#" data-action-id="insights-4" onClick={actions?.["insights-4"]}>
      <BarChart3 className="mr-3 text-[20px]" aria-hidden={true} focusable="false" />
      <span className="font-body-md text-body-md">Insights</span>
      </a>
      </li>
      <li>
      <a className="flex items-center px-md py-xs text-on-surface-variant hover:bg-surface-container-highest transition-colors duration-200 rounded" href="#" data-action-id="settings-5" onClick={actions?.["settings-5"]}>
      <Settings className="mr-3 text-[20px]" aria-hidden={true} focusable="false" />
      <span className="font-body-md text-body-md">Settings</span>
      </a>
      </li>
      </ul>
      <div className="mt-auto p-4 border-t border-outline-variant space-y-2">
      <a className="flex items-center px-md py-xs text-on-surface-variant hover:bg-surface-container-highest transition-colors duration-200 rounded" href="#" data-action-id="help-6" onClick={actions?.["help-6"]}>
      <CircleHelp className="mr-3 text-[20px]" aria-hidden={true} focusable="false" />
      <span className="font-body-md text-body-md">Help</span>
      </a>
      <a className="flex items-center px-md py-xs text-on-surface-variant hover:bg-surface-container-highest transition-colors duration-200 rounded" href="#" data-action-id="logout-7" onClick={actions?.["logout-7"]}>
      <LogOut className="mr-3 text-[20px]" aria-hidden={true} focusable="false" />
      <span className="font-body-md text-body-md">Logout</span>
      </a>
      </div>
      </nav>
      {/* Main Content Area */}
      <main className="flex-1 md:ml-sidebar_width mt-12 md:mt-0 p-gutter md:p-xl flex flex-col items-center">
      {/* Header */}
      <div className="w-full max-w-4xl flex justify-between items-end border-b border-outline-variant pb-4 mb-xl">
      <div>
      <h1 className="font-display-sm text-display-sm text-on-surface">Edit Item: <span className="font-mono-data text-mono-data text-primary ml-2 bg-surface-container-high px-2 py-1 rounded">TRN-8492</span></h1>
      <p className="font-body-sm text-body-sm text-on-surface-variant mt-1">Modify routing and configuration details.</p>
      </div>
      <div className="flex items-center gap-2 text-secondary-fixed">
      <TriangleAlert className="text-[16px]" aria-hidden={true} focusable="false" />
      <span className="font-body-sm text-body-sm font-medium">Unsaved Changes</span>
      </div>
      </div>
      {/* Editor Form */}
      <form className="w-full max-w-4xl bg-surface-container rounded-lg border border-outline-variant p-lg shadow-lg">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-xl">
      {/* Train ID */}
      <div className="space-y-1">
      <label className="block font-label-caps text-label-caps text-on-surface-variant" htmlFor="trainId">Train ID <span className="text-error">*</span></label>
      <input className="w-full bg-[#0F172A] border border-outline-variant rounded px-3 py-2 font-mono-data text-mono-data text-on-surface focus:outline-none focus:ring-1 focus:ring-secondary-container focus:border-secondary-container transition-colors" id="trainId" required={true} type="text" defaultValue="TRN-8492" />
      <p className="font-body-sm text-body-sm text-outline mt-1 hidden">Unique identifier required.</p>
      </div>
      {/* Locomotive Type */}
      <div className="space-y-1">
      <label className="block font-label-caps text-label-caps text-on-surface-variant" htmlFor="locomotiveType">Locomotive Type <span className="text-error">*</span></label>
      <select className="w-full bg-[#0F172A] border border-outline-variant rounded px-3 py-2 font-body-md text-body-md text-on-surface focus:outline-none focus:ring-1 focus:ring-secondary-container focus:border-secondary-container transition-colors" id="locomotiveType" required={true}>
      <option selected={true} value="SD70ACe">EMD SD70ACe</option>
      <option value="ES44AC">GE ES44AC</option>
      <option value="GP38-2">EMD GP38-2 (Switcher)</option>
      </select>
      </div>
      {/* Cargo Class */}
      <div className="space-y-1">
      <label className="block font-label-caps text-label-caps text-on-surface-variant" htmlFor="cargoClass">Cargo Class <span className="text-error">*</span></label>
      <div className="relative">
      <select className="w-full bg-[#0F172A] border border-error rounded px-3 py-2 font-body-md text-body-md text-on-surface focus:outline-none focus:ring-1 focus:ring-error transition-colors appearance-none" id="cargoClass" required={true}>
      <option disabled={true} value="">Select Classification</option>
      <option selected={true} value="hazmat">HAZMAT (Class 3)</option>
      <option value="intermodal">Intermodal Container</option>
      <option value="bulk">Bulk Coal/Grain</option>
      </select>
      <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-on-surface">
      <BadgeHelp className="text-[16px]" aria-hidden={true} focusable="false" />
      </div>
      </div>
      <p className="font-body-sm text-body-sm text-error mt-1 flex items-center gap-1">
      <CircleAlert className="text-[14px]" aria-hidden={true} focusable="false" />
                              Requires special handling protocols.
                          </p>
      </div>
      {/* Track Assignment */}
      <div className="space-y-1">
      <label className="block font-label-caps text-label-caps text-on-surface-variant" htmlFor="trackAssignment">Track Assignment (Optional)</label>
      <input className="w-full bg-[#0F172A] border border-outline-variant rounded px-3 py-2 font-mono-data text-mono-data text-on-surface focus:outline-none focus:ring-1 focus:ring-secondary-container focus:border-secondary-container transition-colors" id="trackAssignment" type="text" defaultValue="Yard 4, Track 12" />
      </div>
      {/* Scheduled Departure */}
      <div className="space-y-1 md:col-span-2 lg:col-span-1">
      <label className="block font-label-caps text-label-caps text-on-surface-variant" htmlFor="departureTime">Scheduled Departure <span className="text-error">*</span></label>
      <input className="w-full bg-[#0F172A] border border-outline-variant rounded px-3 py-2 font-data-tabular text-data-tabular text-on-surface focus:outline-none focus:ring-1 focus:ring-secondary-container focus:border-secondary-container transition-colors" id="departureTime" required={true} type="datetime-local" defaultValue="2024-05-20T14:30" />
      </div>
      </div>
      {/* Action Area */}
      <div className="mt-xl pt-lg border-t border-outline-variant flex justify-end items-center gap-4">
      <button className="px-6 py-2 rounded font-body-md text-body-md text-on-surface border border-slate-300 hover:bg-surface-variant transition-colors" type="button" data-action-id="cancel-1" onClick={actions?.["cancel-1"]}>
                          Cancel
                      </button>
      <button className="px-6 py-2 rounded font-body-md text-body-md font-medium bg-secondary-container text-white hover:bg-orange-600 transition-colors flex items-center gap-2 shadow-[0_0_10px_rgba(236,106,6,0.3)]" type="submit" data-action-id="save-changes-2" onClick={actions?.["save-changes-2"]}>
      <Save className="text-[18px]" aria-hidden={true} focusable="false" />
                          Save Changes
                      </button>
      </div>
      </form>
      </main>
      {/* Mobile Bottom Navigation (md:hidden) */}
      <nav className="md:hidden fixed bottom-0 w-full bg-surface-container border-t border-outline-variant flex justify-around items-center h-16 z-50">
      <a className="flex flex-col items-center justify-center w-full h-full text-on-surface-variant hover:text-primary" href="#" data-action-id="items-8" onClick={actions?.["items-8"]}>
      <PackageSearch className="text-[24px]" aria-hidden={true} focusable="false" />
      <span className="font-label-caps text-label-caps mt-1">Items</span>
      </a>
      <a className="flex flex-col items-center justify-center w-full h-full text-tertiary-fixed-dim bg-surface-container-high border-t-2 border-tertiary" href="#" data-action-id="editor-9" onClick={actions?.["editor-9"]}>
      <BadgeHelp className="text-[24px] icon-fill" aria-hidden={true} focusable="false" />
      <span className="font-label-caps text-label-caps mt-1 font-bold">Editor</span>
      </a>
      <a className="flex flex-col items-center justify-center w-full h-full text-on-surface-variant hover:text-primary" href="#" data-action-id="status-10" onClick={actions?.["status-10"]}>
      <LayoutDashboard className="text-[24px]" aria-hidden={true} focusable="false" />
      <span className="font-label-caps text-label-caps mt-1">Status</span>
      </a>
      <a className="flex flex-col items-center justify-center w-full h-full text-on-surface-variant hover:text-primary" href="#" data-action-id="settings-11" onClick={actions?.["settings-11"]}>
      <Settings className="text-[24px]" aria-hidden={true} focusable="false" />
      <span className="font-label-caps text-label-caps mt-1">Settings</span>
      </a>
      </nav>
      
    </>
  );
}
