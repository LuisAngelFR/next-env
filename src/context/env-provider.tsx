import React from 'react';
import { ReactNode } from 'react';
import { Env } from './env';
import { Provider } from './provider';

interface EnvProviderProps {
  children: ReactNode
}

export const EnvProvider = ({ children }: EnvProviderProps) => {
  const publicEnv = Object.keys(process.env)
  .filter((key) => key.startsWith('ENV_PUBLIC_'))
  .reduce((env, key) => ({
    ...env,
    [key]: process.env[key],
  }), {}) as Env

  return (
    <Provider env={publicEnv}>
      {children}
    </Provider>
  )
}