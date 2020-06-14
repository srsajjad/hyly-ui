import React from 'react'
import { Table, SearchableTable } from 'hyly-ui-local'
import 'hyly-ui-local/dist/index.css'
import { data } from 'dummy-data/data'
import { storiesOf } from '@storybook/react'

import {
  withKnobs,
  object,
  text,
  number,
  boolean,
  select
} from '@storybook/addon-knobs/react'

export default {
  title: 'Table',
  component: Table
}

storiesOf('Just a Table', module).add('Just A Table', () => (
  <div style={{ padding: 30 }}>
    <Table data={data} />
  </div>
))

storiesOf('Searchable Table', module).add('SearchableTable', () => (
  <div style={{ padding: 30 }}>
    <SearchableTable
      handleChange={(val) => console.log('input value', val)}
      data={data}
    />
  </div>
))
