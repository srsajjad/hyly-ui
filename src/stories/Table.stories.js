import React from 'react'
import { Table } from 'hyly-ui'
import 'hyly-ui/dist/index.css'
import { data } from 'dummy-data/data'
import withTheme from "../themes/app_theme";
import { storiesOf } from "@storybook/react";

import {
  withKnobs,
  object,
  text,
  number,
  boolean,
  select
} from "@storybook/addon-knobs/react";

export default {
  title: 'Table',
  component: Table
}

const SearchableTable = withTheme(Table)

storiesOf("Table", module)
  .add("SearchableTable", () =>
    <div style = {{padding: 30}}>
      <SearchableTable
        data = {data}
      />
    </div>
  )
