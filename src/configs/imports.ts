import type { OptionsStylistic, TypedFlatConfigItem } from '../types'

import { pluginImport, pluginkeksiqc } from '../plugins'

export async function imports(options: OptionsStylistic = {}): Promise<TypedFlatConfigItem[]> {
  const {
    stylistic = true,
  } = options

  return [
    {
      name: 'keksiqc/imports/rules',
      plugins: {
        import: pluginImport,
        keksiqc: pluginkeksiqc,
      },
      rules: {
        'import/first': 'error',
        'import/no-duplicates': 'error',
        'import/no-mutable-exports': 'error',

        'import/no-named-default': 'error',
        'import/no-self-import': 'error',
        'import/no-webpack-loader-syntax': 'error',
        'keksiqc/import-dedupe': 'error',
        'keksiqc/no-import-dist': 'error',
        'keksiqc/no-import-node-modules-by-path': 'error',

        ...stylistic
          ? {
              'import/newline-after-import': ['error', { count: 1 }],
            }
          : {},
      },
    },
  ]
}
