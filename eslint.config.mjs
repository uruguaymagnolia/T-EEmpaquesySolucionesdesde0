// @ts-check

import eslint from '@eslint/js';
import tseslint from 'typescript-eslint';
import nextPlugin from '@next/eslint-plugin-next';
import reactPlugin from 'eslint-plugin-react';
import compilerPlugin from 'eslint-plugin-react-compiler';
import globals from 'globals';

export default tseslint.config(
  {
    // Configuraciones globales para todo el proyecto
    ignores: [
      '.next/',
      'node_modules/',
      '**/*.config.js',
      '**/*.config.mjs',
      'prisma/seed.ts',
      'prisma/subir.ts',
      'prisma/bajar.ts'
    ],
  },
  {
    // Configuraciones para archivos de código fuente (TS/TSX)
    files: ['src/**/*.{ts,tsx}'],
    plugins: {
      '@next/next': nextPlugin,
      'react': reactPlugin,
      'react-compiler': compilerPlugin,
      '@typescript-eslint': tseslint.plugin,
    },
    languageOptions: {
      parser: tseslint.parser,
      parserOptions: {
        project: true,
      },
      globals: {
        ...globals.browser,
        ...globals.node,
      },
    },
    rules: {
      // Reglas recomendadas de plugins
      ...eslint.configs.recommended.rules,
      ...tseslint.configs.recommended.rules,
      ...reactPlugin.configs.recommended.rules,
      ...nextPlugin.configs.recommended.rules,
      ...nextPlugin.configs['core-web-vitals'].rules,

      // Regla del nuevo compilador de React
      'react-compiler/react-compiler': 'error',

      // Desactivar reglas obsoletas o innecesarias
      'react/react-in-jsx-scope': 'off',
      'react/prop-types': 'off',

      // Personalizaciones (opcional, pero recomendado)
      '@typescript-eslint/no-unused-vars': [
        'error',
        { argsIgnorePattern: '^_' },
      ],
    },
    settings: {
      react: {
        version: 'detect',
      },
    },
  }
);
