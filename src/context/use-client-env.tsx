import { useContext } from 'react'
import { EnvContext } from './env'

export const useClientEnv = () => useContext(EnvContext)