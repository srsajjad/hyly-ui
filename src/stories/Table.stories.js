import React from 'react'
import { Table } from 'hyly-ui'
import 'hyly-ui/dist/index.css'
import { data } from 'dummy-data/data'

export default {
  title: 'Table',
  component: Table
}

export const SearchableTable = () => <Table data={data} />
