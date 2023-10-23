import React from 'react'
import { describe, it, expect, beforeEach, afterEach } from 'vitest'

import { cleanup, render, screen } from '@testing-library/react'

import { EnvProvider } from '../src/context/env-provider'
import { useEnv } from '../src/context/use-env'
import { useClientEnv } from '../src/context/use-client-env'

describe('env-context', () => {

  beforeEach(() => {
    process.env = {}
  })

  afterEach(cleanup)

  it('should provide public env', () => {
    process.env = { ENV_PUBLIC_FOO: 'bar', ENV_PUBLIC_BAZ: 'qux', XYZ: 'xyz' }

    const Child = () => {
      const env = useClientEnv()
      return (
        <>
          <p>foo: {env.ENV_PUBLIC_FOO}</p>
          <p>baz: {env.ENV_PUBLIC_BAZ}</p>
          <p>xyz: {env.XYZ}</p>
        </>
      )
    }
    render(
      <EnvProvider>
        <Child />
      </EnvProvider>
    )

    screen.getByText('foo: bar')
    screen.getByText('baz: qux')
    expect(screen.queryByText('xyz: xyz')).toBeNull()
  })

  it ('should provide all env', () => {

    process.env = { ENV_PUBLIC_FOO: 'bar', ENV_PUBLIC_BAZ: 'qux', XYZ: 'xyz' }

    const Child = () => {
      const env = useEnv()
      return (
        <>
          <p>foo: {env.ENV_PUBLIC_FOO}</p>
          <p>baz: {env.ENV_PUBLIC_BAZ}</p>
          <p>xyz: {env.XYZ}</p>
        </>
      )
    }
    render(
      <EnvProvider>
        <Child />
      </EnvProvider>
    )

    screen.getByText('foo: bar')
    screen.getByText('baz: qux')
    screen.getByText('xyz: xyz')

  })

})