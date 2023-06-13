import { resolve } from 'path'

export type PathMapping = {
  pattern: RegExp
  paths: string[]
}

/**
 * @see https://github.com/aleclarson/vite-tsconfig-paths/blob/e8f0acf7adfcfbf77edbe937f64b4e5d39557ad0/src/mappings.ts
 */
export function convertTsPathsToRegexes(paths: Record<string, string[]>, baseUrl: string) {
  // If a module name can be matched with multiple patterns then pattern
  // with the longest prefix will be picked.
  const sortedPatterns = Object.keys(paths).sort((a: string, b: string) => getPrefixLength(b) - getPrefixLength(a))
  const resolved: PathMapping[] = []
  for (let pattern of sortedPatterns) {
    const relativePaths = paths[pattern]
    pattern = escapeStringRegexp(pattern).replace(/\*/g, '(.+)')
    resolved.push({
      pattern: new RegExp('^' + pattern + '$'),
      paths: relativePaths.map((relativePath) => resolve(baseUrl, relativePath)),
    })
  }
  return resolved
}

/**
 * @see https://github.com/aleclarson/vite-tsconfig-paths/blob/e8f0acf7adfcfbf77edbe937f64b4e5d39557ad0/src/index.ts#LL231C57-L231C57
 */
export const resolveTsPathPattern = (pathMappings: PathMapping[], moduleSpecifier: string) => {
  for (const mapping of pathMappings) {
    const match = moduleSpecifier.match(mapping.pattern)
    if (!match) {
      continue
    }
    for (const pathTemplate of mapping.paths) {
      let starCount = 0
      const mappedId = pathTemplate.replace(/\*/g, () => {
        // There may exist more globs in the path template than in
        // the match pattern. In that case, we reuse the final
        // glob match.
        const matchIndex = Math.min(++starCount, match.length - 1)
        return match[matchIndex]
      })

      return mappedId
    }
  }
}

function getPrefixLength(pattern: string): number {
  const prefixLength = pattern.indexOf('*')
  return pattern.substr(0, prefixLength).length
}

// Adapted from:
// https://github.com/sindresorhus/escape-string-regexp/blob/ba9a4473850cb367936417e97f1f2191b7cc67dd/index.js
//
// MIT License
//
// Copyright (c) Sindre Sorhus <sindresorhus@gmail.com> (https://
// sindresorhus.com)
//
function escapeStringRegexp(string: string) {
  // Escape characters with special meaning either inside or outside
  // character sets. Use a simple backslash escape when it’s always
  // valid, and a `\xnn` escape when the simpler form would be
  // disallowed by Unicode patterns’ stricter grammar.
  return string.replace(/[|\\{}()[\]^$+?.]/g, '\\$&').replace(/-/g, '\\x2d')
}