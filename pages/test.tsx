import type { NextPage } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import Divisor from 'components/Divisor'
import { Footer } from 'components/Layout'

const Test: NextPage = () => {
    return (
        <div className="py-40 w-full h-full flex flex-col justify-center items-center gap-20 mx-auto">

            <div className="text-brandOrange flex flex-col items-center justify-center gap-10">
                <span className='font-din-pro text-6xl text-center'>Esto, es un título. <br /> d-din-pro, bold</span>
                <hr className='bg-black h-[2px] w-full' />
                <span className='text-4xl text-center font-din font-[500]'>Esto, es un subtítulo <br /> din, medium (regular es muy fina)</span>
                <hr className='bg-black h-[2px] w-full' />
                <span className='max-w-lg text-center text-2xl font-din font-[300]'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Hic sit atque voluptates expedita architecto eos nisi error officiis soluta quasi quis facilis iusto, repudiandae accusamus numquam odio sunt aliquid temporibus. <br /> din light</span>
            </div>


        </div>
    )
}

export default Test