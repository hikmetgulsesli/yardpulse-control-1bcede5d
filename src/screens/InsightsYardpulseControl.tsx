// AUTO-GENERATED from Stitch — DO NOT modify layout or CSS
// Screen: Insights - YardPulse Control
// 
// AGENT INSTRUCTIONS:
// 1. DO NOT change className values or layout structure
// 2. Add useState for dynamic values (replace hardcoded text)
// 3. Wire interactive controls through the typed actions prop
// 4. Replace placeholder data with props/state

import { ArrowUp, BadgeHelp, BarChart3, Bell, CircleHelp, CircleUserRound, Download, LayoutDashboard, ListFilter, LogOut, PackageSearch, Search, Settings, TriangleAlert } from "lucide-react";


export type InsightsYardpulseControlActionId = "notifications-1" | "account-circle-2" | "export-summary-3" | "filter-4" | "items-1" | "editor-2" | "status-board-3" | "insights-4" | "settings-5" | "help-6" | "logout-7";

export interface InsightsYardpulseControlProps {
  actions?: Partial<Record<InsightsYardpulseControlActionId, () => void>>;
}

export function InsightsYardpulseControl({ actions }: InsightsYardpulseControlProps) {
  return (
    <>
      {/* Shared Component: TopAppBar */}
      <nav className="bg-surface text-primary font-headline-sm text-headline-sm fixed top-0 w-full z-50 border-b border-outline-variant transition-colors duration-150 flex justify-between items-center h-[48px] px-xl">
      <div className="flex items-center gap-xl h-full">
      <span className="font-headline-sm text-headline-sm font-bold text-secondary">YardPulse Control</span>
      {/* Search Bar (on_left configuration) */}
      <div className="hidden md:flex relative items-center bg-surface-container border border-outline-variant rounded h-[28px] w-[280px] px-sm focus-within:border-secondary transition-colors">
      <Search className="text-[16px] text-on-surface-variant mr-sm" aria-hidden={true} focusable="false" />
      <input className="bg-transparent border-none p-0 h-full w-full font-body-sm text-body-sm text-primary placeholder-on-surface-variant focus:ring-0 focus:outline-none" placeholder="Search Track ID, Consist..." type="text" />
      </div>
      </div>
      {/* Trailing Icons */}
      <div className="flex items-center gap-sm">
      <button className="h-[32px] w-[32px] flex items-center justify-center rounded hover:bg-surface-variant text-on-surface-variant transition-colors duration-150 relative" type="button" data-action-id="notifications-1" onClick={actions?.["notifications-1"]}>
      <Bell className="text-[20px]" aria-hidden={true} focusable="false" />
      <span className="absolute top-[6px] right-[6px] w-[6px] h-[6px] rounded-full bg-secondary-container"></span>
      </button>
      <button className="h-[32px] w-[32px] flex items-center justify-center rounded hover:bg-surface-variant text-on-surface-variant transition-colors duration-150" type="button" data-action-id="account-circle-2" onClick={actions?.["account-circle-2"]}>
      <CircleUserRound className="text-[20px]" aria-hidden={true} focusable="false" />
      </button>
      </div>
      </nav>
      {/* Shared Component: SideNavBar */}
      <aside className="bg-surface-container text-primary font-body-md text-body-md fixed left-0 top-0 h-full w-sidebar_width border-r border-outline-variant transition-colors duration-200 flex flex-col pt-[48px] z-40">
      {/* Header Info */}
      <div className="px-md py-lg border-b border-outline-variant flex items-center gap-md">
      <div className="w-8 h-8 rounded bg-surface-variant overflow-hidden flex-shrink-0 border border-outline-variant">
      <img alt="Dispatcher Avatar" className="w-full h-full object-cover grayscale opacity-80" data-alt="A small, square profile picture of a serious-looking rail yard dispatcher wearing a high-visibility vest. The image is rendered in black and white to match the utilitarian, industrial aesthetic of the UI. The lighting is harsh and functional." src="https://lh3.googleusercontent.com/aida-public/AB6AXuAfde2o64XWYuohxyPFaA_RfiNN_2uXJT6jSBMep_M7gKCx6osF3LwHJkEAUVaw_vboc3s8i8ypBit2raUeGxKF-tD72-oCdbdVVW2G_4Oz-8ZqHAmC3Cg1QaMMcDkKPfFOgZPZ66KZX5y5yJdujIqS0X0129Lnfh3_o43o754-WtfDpTyRx3_GTyeCihrV6oPBJXSDITnDtEtOjxPGKTAJCVwpU_yOVuAKbzhmrq8KxyA9bI9J-Jm0dgD5QNqNNuJV3kfvhTMENIA" />
      </div>
      <div className="flex flex-col min-w-0">
      <span className="font-data-tabular text-data-tabular text-primary truncate">Yard Master</span>
      <span className="font-mono-data text-mono-data text-tertiary-fixed-dim truncate">Active Session</span>
      </div>
      </div>
      {/* Navigation Tabs */}
      <div className="flex-1 overflow-y-auto py-sm flex flex-col gap-[2px]">
      <a className="text-on-surface-variant flex items-center px-md py-sm hover:bg-surface-container-highest transition-colors group" href="#" data-action-id="items-1" onClick={actions?.["items-1"]}>
      <PackageSearch className="mr-md text-[20px] group-hover:text-primary transition-colors" aria-hidden={true} focusable="false" />
      <span>Items</span>
      </a>
      <a className="text-on-surface-variant flex items-center px-md py-sm hover:bg-surface-container-highest transition-colors group" href="#" data-action-id="editor-2" onClick={actions?.["editor-2"]}>
      <BadgeHelp className="mr-md text-[20px] group-hover:text-primary transition-colors" aria-hidden={true} focusable="false" />
      <span>Editor</span>
      </a>
      <a className="text-on-surface-variant flex items-center px-md py-sm hover:bg-surface-container-highest transition-colors group" href="#" data-action-id="status-board-3" onClick={actions?.["status-board-3"]}>
      <LayoutDashboard className="mr-md text-[20px] group-hover:text-primary transition-colors" aria-hidden={true} focusable="false" />
      <span>Status Board</span>
      </a>
      {/* ACTIVE TAB */}
      <a className="border-l-4 border-tertiary text-tertiary-fixed-dim bg-surface-container-high font-bold flex items-center pl-[8px] pr-md py-sm transition-colors duration-200" href="#" data-action-id="insights-4" onClick={actions?.["insights-4"]}>
      <BarChart3  style={{fontVariationSettings: "'FILL' 1"}} className="mr-md text-[20px]" aria-hidden={true} focusable="false" />
      <span>Insights</span>
      </a>
      <a className="text-on-surface-variant flex items-center px-md py-sm hover:bg-surface-container-highest transition-colors group" href="#" data-action-id="settings-5" onClick={actions?.["settings-5"]}>
      <Settings className="mr-md text-[20px] group-hover:text-primary transition-colors" aria-hidden={true} focusable="false" />
      <span>Settings</span>
      </a>
      </div>
      {/* Footer Tabs */}
      <div className="border-t border-outline-variant py-sm flex flex-col gap-[2px] mt-auto">
      <a className="text-on-surface-variant flex items-center px-md py-sm hover:bg-surface-container-highest transition-colors group" href="#" data-action-id="help-6" onClick={actions?.["help-6"]}>
      <CircleHelp className="mr-md text-[20px] group-hover:text-primary transition-colors" aria-hidden={true} focusable="false" />
      <span>Help</span>
      </a>
      <a className="text-on-surface-variant flex items-center px-md py-sm hover:bg-surface-container-highest transition-colors group" href="#" data-action-id="logout-7" onClick={actions?.["logout-7"]}>
      <LogOut className="mr-md text-[20px] group-hover:text-primary transition-colors" aria-hidden={true} focusable="false" />
      <span>Logout</span>
      </a>
      </div>
      </aside>
      {/* Main Content Area */}
      <main className="ml-sidebar_width pt-[48px] flex-1 h-screen overflow-y-auto bg-background p-xl">
      {/* Page Header */}
      <header className="flex justify-between items-end mb-xl pb-md border-b border-outline-variant">
      <div>
      <h1 className="font-headline-sm text-headline-sm text-primary">Operational Insights</h1>
      <p className="font-body-sm text-body-sm text-on-surface-variant mt-xs">Real-time throughput and yard metrics for current shift.</p>
      </div>
      <button className="flex items-center gap-xs px-md py-[6px] border border-outline text-primary font-body-sm text-body-sm rounded hover:bg-surface-variant transition-colors group" type="button" data-action-id="export-summary-3" onClick={actions?.["export-summary-3"]}>
      <Download className="text-[18px] group-hover:-translate-y-[1px] transition-transform" aria-hidden={true} focusable="false" />
                      Export Summary
                  </button>
      </header>
      {/* Dashboard Grid */}
      <div className="grid grid-cols-12 gap-gutter">
      {/* Key Metrics Row */}
      {/* Metric 1 */}
      <div className="col-span-12 md:col-span-4 bg-surface-container border border-outline-variant rounded p-md flex flex-col justify-between h-[100px]">
      <div className="flex justify-between items-start">
      <span className="font-label-caps text-label-caps text-on-surface-variant uppercase">24H Throughput</span>
      <BadgeHelp className="text-[16px] text-on-surface-variant" aria-hidden={true} focusable="false" />
      </div>
      <div className="flex items-end gap-sm">
      <span className="font-display-sm text-display-sm text-primary">1,482</span>
      <span className="font-mono-data text-mono-data text-on-surface-variant pb-[4px]">cars</span>
      <div className="flex items-center text-tertiary-fixed-dim bg-tertiary-container px-[4px] rounded ml-auto mb-[4px]">
      <ArrowUp className="text-[14px]" aria-hidden={true} focusable="false" />
      <span className="font-mono-data text-mono-data">4.2%</span>
      </div>
      </div>
      </div>
      {/* Metric 2 */}
      <div className="col-span-12 md:col-span-4 bg-surface-container border border-outline-variant rounded p-md flex flex-col justify-between h-[100px]">
      <div className="flex justify-between items-start">
      <span className="font-label-caps text-label-caps text-on-surface-variant uppercase">Avg Dwell Time</span>
      <BadgeHelp className="text-[16px] text-on-surface-variant" aria-hidden={true} focusable="false" />
      </div>
      <div className="flex items-end gap-sm">
      <span className="font-display-sm text-display-sm text-secondary-container">18.4</span>
      <span className="font-mono-data text-mono-data text-on-surface-variant pb-[4px]">hrs</span>
      <div className="flex items-center text-secondary bg-secondary-container/20 px-[4px] rounded ml-auto mb-[4px]">
      <ArrowUp className="text-[14px]" aria-hidden={true} focusable="false" />
      <span className="font-mono-data text-mono-data">1.1h</span>
      </div>
      </div>
      </div>
      {/* Metric 3 */}
      <div className="col-span-12 md:col-span-4 bg-surface-container border border-outline-variant rounded p-md flex flex-col justify-between h-[100px]">
      <div className="flex justify-between items-start">
      <span className="font-label-caps text-label-caps text-on-surface-variant uppercase">Active Crews</span>
      <BadgeHelp className="text-[16px] text-on-surface-variant" aria-hidden={true} focusable="false" />
      </div>
      <div className="flex items-end gap-sm">
      <span className="font-display-sm text-display-sm text-primary">14</span>
      <span className="font-mono-data text-mono-data text-on-surface-variant pb-[4px]">teams</span>
      <span className="font-mono-data text-mono-data text-on-surface-variant ml-auto pb-[4px]">On Schedule</span>
      </div>
      </div>
      {/* Yard Utilization Chart Section */}
      <div className="col-span-12 md:col-span-8 bg-surface-container border border-outline-variant rounded p-md flex flex-col">
      <div className="flex justify-between items-center mb-md">
      <h2 className="font-data-tabular text-data-tabular text-primary">Yard State Distribution</h2>
      <span className="font-mono-data text-mono-data text-on-surface-variant">Total Capacity: 4,200 cars</span>
      </div>
      {/* Simulated Horizontal Stacked Bar */}
      <div className="w-full h-[24px] bg-surface-container-lowest flex rounded overflow-hidden mt-auto mb-sm border border-outline-variant">
      <div className="h-full bg-tertiary-fixed-dim border-r border-surface-container-lowest" style={{width: "65%"}} title="Occupied (65%)"></div>
      <div className="h-full bg-secondary-container border-r border-surface-container-lowest" style={{width: "25%"}} title="Switching (25%)"></div>
      <div className="h-full bg-surface-variant" style={{width: "10%"}} title="Empty/Maintenance (10%)"></div>
      </div>
      {/* Legend */}
      <div className="flex gap-lg mt-auto">
      <div className="flex items-center gap-xs">
      <div className="w-[12px] h-[12px] rounded-sm bg-tertiary-fixed-dim"></div>
      <span className="font-mono-data text-mono-data text-primary">Occupied (65%)</span>
      </div>
      <div className="flex items-center gap-xs">
      <div className="w-[12px] h-[12px] rounded-sm bg-secondary-container"></div>
      <span className="font-mono-data text-mono-data text-primary">Switching (25%)</span>
      </div>
      <div className="flex items-center gap-xs">
      <div className="w-[12px] h-[12px] rounded-sm bg-surface-variant border border-outline-variant"></div>
      <span className="font-mono-data text-mono-data text-primary">Available (10%)</span>
      </div>
      </div>
      </div>
      {/* Actionable Hints (Bottlenecks) */}
      <div className="col-span-12 md:col-span-4 bg-surface-container border border-outline-variant rounded p-md flex flex-col">
      <div className="flex items-center gap-xs mb-md">
      <TriangleAlert className="text-[18px] text-secondary" aria-hidden={true} focusable="false" />
      <h2 className="font-data-tabular text-data-tabular text-primary">Active Bottlenecks</h2>
      </div>
      <div className="flex flex-col gap-sm overflow-y-auto">
      {/* Hint 1 */}
      <div className="bg-surface-container-lowest border-l-[3px] border-secondary-container p-sm rounded-r">
      <div className="flex justify-between items-start mb-[2px]">
      <span className="font-mono-data text-mono-data text-primary">Track 04-North</span>
      <span className="font-mono-data text-mono-data text-secondary-container">High Dwell</span>
      </div>
      <p className="font-body-sm text-body-sm text-on-surface-variant">Consist ID-992 stalled. Awaiting outbound power assignment for 4h.</p>
      </div>
      {/* Hint 2 */}
      <div className="bg-surface-container-lowest border-l-[3px] border-secondary p-sm rounded-r">
      <div className="flex justify-between items-start mb-[2px]">
      <span className="font-mono-data text-mono-data text-primary">Receiving Yard B</span>
      <span className="font-mono-data text-mono-data text-secondary">Congestion</span>
      </div>
      <p className="font-body-sm text-body-sm text-on-surface-variant">Inbound flow exceeds classification rate. Divert recommended.</p>
      </div>
      </div>
      </div>
      {/* Recent Activity Feed (Data Table) */}
      <div className="col-span-12 bg-surface-container border border-outline-variant rounded overflow-hidden flex flex-col">
      <div className="p-md border-b border-outline-variant flex justify-between items-center bg-surface-container-high">
      <h2 className="font-data-tabular text-data-tabular text-primary">Recent Operations Log</h2>
      <button className="font-mono-data text-mono-data text-on-surface-variant hover:text-primary transition-colors flex items-center gap-xs" type="button" data-action-id="filter-4" onClick={actions?.["filter-4"]}>
      <ListFilter className="text-[14px]" aria-hidden={true} focusable="false" />
                              Filter
                          </button>
      </div>
      <div className="overflow-x-auto">
      <table className="w-full text-left border-collapse">
      <thead>
      <tr className="border-b border-outline-variant bg-surface-container-highest font-label-caps text-label-caps text-on-surface-variant">
      <th className="py-xs px-md font-medium w-[100px]">Time</th>
      <th className="py-xs px-md font-medium">Event Type</th>
      <th className="py-xs px-md font-medium">Entity Ref</th>
      <th className="py-xs px-md font-medium">Location</th>
      <th className="py-xs px-md font-medium text-right">Status</th>
      </tr>
      </thead>
      <tbody className="font-mono-data text-mono-data text-primary">
      {/* Row 1 */}
      <tr className="border-b border-surface-container-highest hover:bg-surface-variant/50 transition-colors">
      <td className="py-[6px] px-md text-on-surface-variant">14:22:05</td>
      <td className="py-[6px] px-md">Crew Handoff</td>
      <td className="py-[6px] px-md">Team Alpha → Bravo</td>
      <td className="py-[6px] px-md">Mainline Switch 2</td>
      <td className="py-[6px] px-md text-right">
      <span className="inline-flex items-center px-[6px] py-[2px] rounded-[2px] bg-tertiary-container text-tertiary-fixed-dim">
                                              Completed
                                          </span>
      </td>
      </tr>
      {/* Row 2 */}
      <tr className="border-b border-surface-container-highest hover:bg-surface-variant/50 transition-colors bg-surface-container-lowest/30">
      <td className="py-[6px] px-md text-on-surface-variant">14:18:30</td>
      <td className="py-[6px] px-md">Track Assignment</td>
      <td className="py-[6px] px-md text-secondary">Inbound TR-8442</td>
      <td className="py-[6px] px-md">Receiving Track 08</td>
      <td className="py-[6px] px-md text-right">
      <span className="inline-flex items-center px-[6px] py-[2px] rounded-[2px] bg-secondary-container/20 text-secondary">
                                              In Progress
                                          </span>
      </td>
      </tr>
      {/* Row 3 */}
      <tr className="border-b border-surface-container-highest hover:bg-surface-variant/50 transition-colors">
      <td className="py-[6px] px-md text-on-surface-variant">14:10:12</td>
      <td className="py-[6px] px-md">Classification</td>
      <td className="py-[6px] px-md">Cut C-901</td>
      <td className="py-[6px] px-md">Bowl Track 14</td>
      <td className="py-[6px] px-md text-right">
      <span className="inline-flex items-center px-[6px] py-[2px] rounded-[2px] bg-tertiary-container text-tertiary-fixed-dim">
                                              Completed
                                          </span>
      </td>
      </tr>
      {/* Row 4 */}
      <tr className="border-b border-surface-container-highest hover:bg-surface-variant/50 transition-colors bg-surface-container-lowest/30">
      <td className="py-[6px] px-md text-on-surface-variant">13:55:00</td>
      <td className="py-[6px] px-md">Maintenance Alert</td>
      <td className="py-[6px] px-md">Switch Heater H-4</td>
      <td className="py-[6px] px-md">Departure Lead South</td>
      <td className="py-[6px] px-md text-right">
      <span className="inline-flex items-center px-[6px] py-[2px] rounded-[2px] bg-error-container/30 text-error">
                                              Requires Action
                                          </span>
      </td>
      </tr>
      {/* Row 5 */}
      <tr className="hover:bg-surface-variant/50 transition-colors">
      <td className="py-[6px] px-md text-on-surface-variant">13:42:15</td>
      <td className="py-[6px] px-md">Outbound Depart</td>
      <td className="py-[6px] px-md">Manifest M-LDN-3</td>
      <td className="py-[6px] px-md">Departure Track 02</td>
      <td className="py-[6px] px-md text-right">
      <span className="inline-flex items-center px-[6px] py-[2px] rounded-[2px] bg-tertiary-container text-tertiary-fixed-dim">
                                              Cleared
                                          </span>
      </td>
      </tr>
      </tbody>
      </table>
      </div>
      </div>
      </div>
      </main>
    </>
  );
}
