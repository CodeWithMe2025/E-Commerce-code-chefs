import React from 'react'
import heroImage from '../assets/hero-image.webp'
import { useNavigate } from 'react-router-dom'
import zara from '../assets/zara.svg'
import versace from '../assets/versace.svg'
import gucci from '../assets/versace.svg'
import prdada from '../assets/prada.svg'
import calvinklein from '../assets/calvinklein.svg'


const Hero = () => {

    const navigate = useNavigate()

    return (
        <>
            <section className='Hero flex flex-col md:flex-row items-center justify-between px-4 p-10 lg:px-14 py-12 pb-0 w-full min-w-full mx-auto bg-[#F2F0F1]'>

                <div className="hero-content flex flex-col lg:gap-9 md:w-3xl">
                    <div className="hero-text flex flex-col gap-8">
                        <h1 className="font-integral text-3xl lg:text-5xl 2xl:text-7xl font-bold">FIND CLOTHES<br />THAT MATCHES<br />YOUR STYLE</h1>
                        <p className="font-satoshi text-gray-600 text-sm2xl:text-3xl">Browse through our diverse range of meticulously crafted garments, designed to bring out your individuality and cater to your sense of style.</p>
                        <button onClick={() => navigate('/shop')} className="font-satoshi bg-black text-white px-6 py-3 rounded-full text-xl md:text-base sm:m-0 md:max-w-44 xl:max-w-52 xl:text-xl hover:bg-gray-800 cursor-pointer transition">Shop Now</button>
                    </div>

                    {/* Numbers holder */}
                    <div className="numbers flex justify-center items-center my-6 gap-3 2xl:text-9xl ">
                        <div className="flex flex-col">
                            <strong className="font-satoshi text-2xl font-bold">200+</strong>
                            <span className="font-satoshi text-gray-500 text-sm xl:text-xl 2xl:text-2xl">International Brands</span>
                        </div>
                        <div className="midle-num flex flex-col border border-[#0000001A] border-y-0 p-[15px]">
                            <strong className="font-satoshi text-2xl font-bold ">2,000+</strong>
                            <span className="font-satoshi text-gray-500 text-sm xl:text-xl 2xl:text-2xl">High-Quality Products</span>
                        </div>
                        <div className="flex flex-col">
                            <strong className="font-satoshi text-2xl font-bold">30,000+</strong>
                            <span className="font-satoshi text-gray-500 text-sm xl:text-xl 2xl:text-2xl">Happy Customers</span>
                        </div>
                    </div>
                </div>

                <figure className="hero-image w-5xs md:w-5xl">
                    <img src={heroImage} alt="models" className="" />
                </figure>

            </section>

            <div className="w-full bg-black py-6">
                <div className="brands-hlder flex flex-wrap justify-around gap-5 md:gap-7">
                    <img className='brand-logo text-center w-32 lg:w-40 xl:w-56' src={versace} alt="versace logo" />
                    <img className='brand-logo text-center w-20' src={zara} alt="zara logo" />
                    <img className='brand-logo text-center w-32 lg:w-40 xl:w-56' src={gucci} alt="gucci logo" />
                    <img className='brand-logo text-center w-32 lg:w-40 xl:w-56' src={prdada} alt="pdada logo" />
                    <img className='brand-logo text-center w-32 lg:w-40 xl:w-56' src={calvinklein} alt="calvinklein logo" />
                </div>
            </div>
        </>

    )
}

export default Hero
