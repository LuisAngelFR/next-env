'use client'

import { Env } from '../types/env'
import { EnvContext } from './env'
import { ReactNode } from 'react'

interface ProviderProps {
  env: Env
  children: ReactNode
}

export const Provider = ({ env, children }: ProviderProps) => {
  return (
    <EnvContext.Provider value={env}>
      {children}
    </EnvContext.Provider>
  )
}