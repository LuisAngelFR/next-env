import { createContext } from 'react'

export interface Env {
  [key: string]: string
}

export const EnvContext = createContext<Env>({})