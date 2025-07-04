'use client'

import { useEffect, useState } from 'react'

export default function PolicyPage() {
  const [htmlContent, setHtmlContent] = useState<string>('Đang tải...')

  useEffect(() => {
    fetch('/rules5.html')
      .then((res) => res.text())
      .then((data) => setHtmlContent(data))
      .catch(() => setHtmlContent('Không tìm thấy nội dung cho chính sách này'))
  }, [])

  return (
    <div
      className="w-full h-auto flex flex-col items-center justify-start px-4 lg:px-8 xl:px-16 2xl:px-24 py-8 lg:py-12 xl:py-16 2xl:py-20"
      dangerouslySetInnerHTML={{ __html: htmlContent }}
    />
  )
}
