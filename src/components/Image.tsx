'use client'

import Image from 'next/image'

export default function Page() {
  return (
    <div>
      <h1>Gambar Pengarang</h1>
      <Image
        src="/me.png" 
        alt="Picture of the author"
        width={500}
        height={500}
      />
    </div>
  )
  
}

