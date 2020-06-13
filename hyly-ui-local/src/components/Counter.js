import React, { useState } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { Result } from './Result'
import './Counter.css'

export const Counter = (props) => {
  const [count, setCount] = useState(0)

  const useStyles = makeStyles({
    btn: {
      border: '3px solid red'
    }
  })

  const classes = useStyles()

  return (
    <div>
      <button
        className={classes.btn}
        style={{
          color: 'orange'
        }}
        onClick={() => setCount(count + 69)}
      >
        Click Me !!
      </button>

      <Result count={count} />
    </div>
  )
}
