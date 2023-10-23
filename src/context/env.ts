'use client'

import { createContext } from 'react'
import { Env } from '../types/env'

export const EnvContext = createContext<Env>({})