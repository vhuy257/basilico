'use client'
import React from 'react'
import { Button } from '@/components/ui/button'
import styles from './Button.module.css'

type classType = 'btnDefault' | 'btnPrimary' | 'btnHeader' | 'btnBookTable';

type btnProps = {
    btnText: string
    btnTypeClass: classType
    btnType?: any,
    onClick?: () => void
    className?: string
}

const ButtonComponent = ({
    btnText,
    btnTypeClass,
    btnType,
    onClick,
    className
}: btnProps) => {
    
    const classBtnType = () => {        
        let classStyle = ''

        switch (btnTypeClass) {
            case 'btnDefault': 
                classStyle = styles.btnDefault
                break;
            case 'btnHeader':
                classStyle = styles.btnHeader
                break;
            case 'btnPrimary':
                classStyle = styles.btnPrimary
                break;
            case 'btnBookTable':
                classStyle = styles.btnBookTable
                break;
            default:
                break;
        }
        return classStyle
    }

    return (
        <Button className={`rounded-none border-none shadow-none uppercase ${className} font-calibri ${styles.btnStyle} ${classBtnType()}`} type={btnType || 'button'} onClick={onClick}>
            {btnText}
        </Button>
    )
}

export default ButtonComponent