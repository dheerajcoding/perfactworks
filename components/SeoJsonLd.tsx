import React from 'react'

type JsonLd = Record<string, unknown>

export default function SeoJsonLd({ data }: { data: JsonLd | JsonLd[] }) {
  const items = Array.isArray(data) ? data : [data]
  return (
    <>
      {items.map((item, index) => (
        <script
          // eslint-disable-next-line react/no-danger
          key={index}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(item) }}
        />
      ))}
    </>
  )
}
