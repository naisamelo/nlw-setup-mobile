import daysjs from 'dayjs'

export function generateRangeDatesFromYearStart(){
    const startDate = daysjs().startOf('year')
    const endDate = new Date()

    let dateRange = []
    let compareDate = startDate

    while (compareDate.isBefore(endDate)){
        dateRange.push(compareDate.toDate())
        compareDate = compareDate.add(1, 'day')
    }

    return dateRange
}