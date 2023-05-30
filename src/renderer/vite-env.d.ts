/// <reference types="vite/client" />
import { uiPreload, ipcPreload } from "../preload";

interface ImportMetaEnv {
  readonly PACKAGE_VERSION: string;
  // more env variables...
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
declare global {
  interface Window {
    ipc: typeof ipcPreload;
    ui: typeof uiPreload;
  }
}
