import { ReactNode } from 'react';
import { Provider } from './provider';
import { Env } from '../types/env';

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