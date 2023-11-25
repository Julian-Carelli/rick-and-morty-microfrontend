/// <reference types="vite/client" />

interface ImportMetaEnv {
  VITE_API_RICK_AND_MORTY: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
