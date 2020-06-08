import { useEffect, useState } from 'react'

export const useUpdateTable = (value, data) => {
  const [tableData, setTableData] = useState(data)

  useEffect(() => {
    const currentData = data.filter((row) =>
      row[1].toLowerCase().includes(value.toLowerCase())
    )
    setTableData(currentData)
  }, [value])

  return tableData
}
