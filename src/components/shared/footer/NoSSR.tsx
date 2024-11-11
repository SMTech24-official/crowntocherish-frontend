'use client'

import dynamic from 'next/dynamic'

const NoSSRFooter = dynamic(() => import('./Footer'), { ssr: false })

export default function NewFooter() {
    return (
        <div>
            <NoSSRFooter />
        </div>
    )
}