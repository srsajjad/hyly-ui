import React, { useState } from 'react'
import ReactTable from 'react-table'

import { useDebounce } from './useDebounce'
import { useUpdateTable } from './useUpdateTable'

import { withStyles } from '@material-ui/core'
import { styles } from './styles'
import style from './index.css'
import 'react-table/react-table.css'

let Table = (props) => {
  const { classes, data } = props

  // hooks
  const [inputVal, setInputVal] = useState('')
  const debouncedVal = useDebounce(inputVal, 100)
  const tableData = useUpdateTable(debouncedVal, data)

  // up down arrow component - sort icons
  const UpDownSort = (props) => (
    <div className={classes.arrows}>
      <i className={classes.custom_arrow_up}></i>
      <i className={classes.custom_arrow_down}></i>
    </div>
  )

  // columns
  const columns = [
    {
      Header: () => {
        return (
          <div className={classes.header}>
            <input
              value={inputVal}
              onChange={(e) => setInputVal(e.target.value)}
              className={classes.input}
              placeholder='Search please'
            />
          </div>
        )
      },

      accessor: '1',
      Cell: (props) => (
        <div>
          {props.value}
          <div className={classes.arrows}></div>
        </div>
      ),
      minWidth: 200,
      sortable: false
    },

    {
      Header: () => (
        <div className={classes.header}>
          Tours
          <UpDownSort />
        </div>
      ),
      accessor: '2',
      Cell: (props) => <div>{props.value}</div>,
      minWidth: 100
    },

    {
      Header: () => (
        <div className={classes.header}>
          Leases
          <UpDownSort />
        </div>
      ),
      accessor: '3',
      Cell: (props) => <div>{props.value}</div>,
      minWidth: 100
    },

    {
      Header: () => (
        <div className={classes.header}>
          Cancel
          <UpDownSort />
        </div>
      ),
      accessor: '4',
      Cell: (props) => <div>{props.value}</div>,
      minWidth: 100
    },

    {
      Header: () => (
        <div className={classes.header}>
          Denials
          <UpDownSort />
        </div>
      ),
      accessor: '5',
      Cell: (props) => <div>{props.value}</div>,
      minWidth: 100
    },

    {
      Header: () => (
        <div className={classes.header}>
          Net
          <UpDownSort />
        </div>
      ),
      accessor: '6',
      Cell: (props) => <div>{props.value}</div>,
      minWidth: 100
    },

    {
      Header: () => (
        <div className={classes.header}>
          % Leased
          <UpDownSort />
        </div>
      ),
      accessor: '7',
      Cell: (props) => <div>{props.value}</div>,
      minWidth: 100
    }
  ]

  if (!columns || !tableData) return null

  return (
    <ReactTable
      className={style.search_table_root}
      columns={columns}
      data={tableData}
      pageSize={10}
      showPagination={false}
    />
  )
}

Table = withStyles(styles)(Table)

export { Table }
