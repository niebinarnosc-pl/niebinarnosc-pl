import {type SchemaTypeDefinition} from 'sanity'

import blockContent from './schemas/blockContent'
import story from './schemas/story'
import definition from './schemas/definition'
import representation from './schemas/representation'
import author from './schemas/author'
import page from './schemas/page'

export const schemaTypes: SchemaTypeDefinition[] = [
  page,
  story,
  definition,
  representation,
  author,
  blockContent,
]
