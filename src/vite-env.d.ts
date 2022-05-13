/// <reference types="vite/client" />

declare const MENU_PATH = "path"
declare const MENU_SHOW = "isShowOnMenu"
declare const MENU_KEEPALIVE = "keepAlive"
declare const MENU_KEY = "key"
declare const MENU_ICON = "icon"
declare const MENU_TITLE = "title"
declare const MENU_CHILDREN = "children"
declare const MENU_PARENTKEY = "parentKey"
declare const MENU_ALLPATH = "allPath"
declare const MENU_PARENTPATH = "parentPath"

declare namespace NodeJS {
  interface ProcessEnv {
    readonly NODE_ENV: 'development' | 'production' | 'test';
    readonly PUBLIC_URL: string;
    readonly showColorSet: string
  }
}
interface Window {
  __REDUX_DEVTOOLS_EXTENSION__?: () => any
}


interface ImportMetaEnv {
  readonly REACT_APP_MODE: 'development' | 'production'
  readonly REACT_APP_ROUTERBASE: string
  readonly REACT_APP_API_BASEURL: string
  readonly REACT_APP_MOCK: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}