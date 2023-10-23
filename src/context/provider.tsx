'use client'

import { EnvContext, Env } from './env'
import { ReactNode } from 'react'
import React from 'react'

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