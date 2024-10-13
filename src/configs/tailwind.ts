import type { TypedFlatConfigItem } from '../types'

import { ensurePackages, interopDefault } from '../utils'

export async function tailwind(
): Promise<TypedFlatConfigItem[]> {
  await ensurePackages([
    'eslint-plugin-tailwindcss',
  ])

  const [
    pluginTailwind,
  ] = await Promise.all([
    interopDefault(import('eslint-plugin-tailwindcss')),
  ] as const)

  return [
    {
      name: 'keksiqc/tailwind',
      plugins: {
        tailwindcss: pluginTailwind,
      },
      rules: {
        'tailwindcss/classnames-order': 'warn',
        'tailwindcss/enforces-negative-arbitrary-values': 'warn',
        'tailwindcss/enforces-shorthand': 'warn',
        'tailwindcss/migration-from-tailwind-2': 'warn',
        'tailwindcss/no-arbitrary-value': 'off',
        'tailwindcss/no-contradicting-classname': 'error',
        'tailwindcss/no-custom-classname': 'warn',
        'tailwindcss/no-unnecessary-arbitrary-value': 'warn',
      },
    },
  ]
}
