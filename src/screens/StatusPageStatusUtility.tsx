// AUTO-GENERATED from Stitch — DO NOT modify layout or CSS
// Screen: Status Page - Status Utility
// 
// AGENT INSTRUCTIONS:
// 1. DO NOT change className values or layout structure
// 2. Preserve the generated action-input state and exact payload transport
// 3. Wire interactive controls through the typed actions prop
// 4. Replace placeholder data with props/state


export type StatusPageStatusUtilityActionId = "refresh-status-1";

export interface StatusPageStatusUtilityProps {
  actions?: {
    "refresh-status-1"?: () => void;
  };

}

export type StatusPageStatusUtilityActionCallbacks = NonNullable<StatusPageStatusUtilityProps["actions"]>;

export function StatusPageStatusUtility({ actions }: StatusPageStatusUtilityProps) {
  return (
    <>
      <div data-surface-id="SURF_STATUS_PAGE" className="min-h-screen flex flex-col justify-between p-8 md:p-12" data-setfarm-element-ref="E000001" data-observable-refs="OBS_REFRESH_STATUS_STATUS_ROUTE_UNCHANGED">
          <header className="max-w-4xl w-full mx-auto flex items-center justify-between pb-6 border-b border-slate-200">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 rounded-lg bg-emerald-600 flex items-center justify-center text-white font-bold text-lg">
                S
              </div>
              <div>
                <h1 className="text-xl font-bold text-slate-900 leading-tight">Status Utility</h1>
                <p className="text-xs font-mono text-slate-500">Route: /status</p>
              </div>
            </div>
            <div className="flex items-center space-x-2 bg-emerald-50 text-emerald-700 px-3 py-1 rounded-full text-xs font-medium border border-emerald-200">
              <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
              <span>Operational</span>
            </div>
          </header>
      
          <main className="max-w-xl w-full mx-auto my-auto py-12">
            <div className="bg-white rounded-2xl shadow-sm border border-slate-200/80 p-8 space-y-8">
              <div data-surface-id="SURF_STATUS_SUMMARY_PANEL" className="bg-slate-50 border border-slate-100 rounded-xl p-6" data-setfarm-element-ref="E000002" data-observable-refs="OBS_REFRESH_STATUS_STATUS_MESSAGE_AFTER_RELOAD OBS_REFRESH_STATUS_STATUS_MESSAGE_TEXT OBS_REFRESH_STATUS_STATUS_VALUE_DISPLAY">
                <div className="flex items-center justify-between pb-4 mb-4 border-b border-slate-200/60 text-xs font-semibold text-slate-400 uppercase tracking-wider">
                  <span>System Status Summary</span>
                  <span className="font-mono text-[11px] text-slate-400">ID: SURF_STATUS_SUMMARY_PANEL</span>
                </div>
      
                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 rounded-lg bg-emerald-100 text-emerald-600 flex items-center justify-center font-bold text-base flex-shrink-0">
                    OK
                  </div>
                  <div className="space-y-1">
                    <h2 className="text-base font-semibold text-slate-900">Status refreshed</h2>
                    <div className="text-sm text-slate-600 flex items-center space-x-2">
                      <span>Current State:</span>
                      <span className="font-mono text-xs px-2 py-0.5 rounded bg-emerald-50 text-emerald-700 font-semibold border border-emerald-200/60">refreshed</span>
                    </div>
                  </div>
                </div>
      
                <div className="mt-6 pt-4 border-t border-slate-200/60 flex items-center justify-between text-xs text-slate-500 font-mono">
                  <span>Persistence: Local Storage Active</span>
                  <span>Retained across reloads</span>
                </div>
              </div>
      
              <div className="flex flex-col items-center justify-center pt-2">
                <button type="button" data-action="ACT_REFRESH_STATUS" data-control-slot="CSLOT_REFRESH_STATUS_REFRESH_BUTTON" className="inline-flex items-center justify-center px-6 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-medium text-sm transition-colors shadow-sm focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2 cursor-pointer" data-setfarm-element-ref="E000003" data-observable-refs="OBS_REFRESH_STATUS_REFRESH_BUTTON_ENABLED OBS_REFRESH_STATUS_REFRESH_BUTTON_VISIBLE" data-action-id="refresh-status-1" onClick={actions?.["refresh-status-1"]}>
                  Refresh Status
                </button>
                <p className="text-xs text-slate-400 mt-3 text-center">
                  Click to refresh and persist current system status.
                </p>
              </div>
            </div>
          </main>
      
          <footer className="max-w-4xl w-full mx-auto pt-6 border-t border-slate-200 text-center text-xs text-slate-400">
            <p>Status Page © Status Utility. All systems verified.</p>
          </footer>
        </div>
    </>
  );
}
