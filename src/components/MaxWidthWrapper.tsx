import { cn } from '@/lib/utils'
import React, { ReactNode } from 'react'

const MaxWidthWrapper = ({
    classname,children
}:{classname?:string
children:ReactNode}) => {
  return (
    <div className={cn('mx-auto w-full max-w-screen-xl px-2.5 md:px-10',classname)}>
        {children}
    </div>
  )
}

export default MaxWidthWrapper