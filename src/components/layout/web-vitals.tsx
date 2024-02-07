'use client'

import { useReportWebVitals } from 'next/web-vitals'

export const WebVitals = () => {
  useReportWebVitals((metric) => {
    console.log([metric.name, metric.rating])
  })
  return <></>
}