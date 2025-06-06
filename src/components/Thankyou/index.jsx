import Link from 'next/link'
import React from 'react'

const Thankyou = () => {
  return (
    <div className="flex items-center justify-center h-screen">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-green-600 mb-4">Rahmat!</h1>
        <p className="text-lg text-white">Sizning so'rovingiz qabul qilindi.</p>
        <p className="text-lg text-white mb-8">Biz tez orada siz bilan bog'lanamiz.</p>
        <Link href="/" className="btn">
          Bosh sahifaga qaytish
        </Link>
      </div>
    </div>
  )
}

export default Thankyou