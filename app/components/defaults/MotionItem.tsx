"use client"
import {motion} from "motion/react"

export default function MotionItem ({children , className , initial , whileInView , transition} : {children:React.ReactNode , className ?: string , initial ?: any  ; whileInView ?: any , transition ?: any }) {
    return (
        <motion.div 
        initial = {initial}
        whileInView={whileInView}
        transition={transition}
        className = {className || ""}>
            {children}
        </motion.div>
    )
}