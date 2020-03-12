import dayjs from 'dayjs'

const headers = [
  { text: '検査確定日', value: '検査確定日' },
  { text: '発症日', value: '発症日' },
  { text: '居住地', value: '居住地' },
  { text: '年代・性別', value: '年代・性別' },
  { text: '備考', value: '備考' }
]

type DataType = {
  検査確定日: Date
  発症日: Date
  居住地: string | null
  '年代・性別': string | null
  備考: string | null
  [key: string]: any
}

type TableDataType = {
  検査確定日: string
  発症日: string
  居住地: DataType['居住地']
  '年代・性別': DataType['年代・性別']
  備考: DataType['備考']
}

type TableDateType = {
  headers: typeof headers
  datasets: TableDataType[]
}

export default (data: DataType[]) => {
  const tableDate: TableDateType = {
    headers,
    datasets: []
  }
  data.forEach(d => {
    const TableRow: TableDataType = {
      検査確定日: dayjs(d['検査確定日']).format('MM/DD') ?? '不明',
      発症日: d['発症日'] ? dayjs(d['発症日']).format('MM/DD') : '不詳',
      居住地: d['住居地'] ?? '不明',
      '年代・性別': d['年代・性別'] ?? '不明',
      備考: d['備考'] ?? '不明'
    }
    tableDate.datasets.push(TableRow)
  })
  tableDate.datasets.sort((a, b) => (a === b ? 0 : a < b ? 1 : -1))
  return tableDate
}
