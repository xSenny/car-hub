'use client';
import React, { useState } from 'react';
import Image from "next/image";
import {CarPrompts} from "@/types";
import {calculateCarRent, generateCarImageUrl} from "@/utils";
import {CarDetails, CustomButton} from "@/components/index";

interface CarCardProps{
    car: CarPrompts;
}

const CarCard = ({car}: CarCardProps) => {
    const {city_mpg, year, make, model, transmission, drive} = car;
    const [isOpen, setIsOpen] = useState(false);
    return (
        <div className={"car-card group"}>
            <div className={"car-card__content"}>
                <h2 className={"car-card__content-title"}>{make} {model}</h2>
            </div>
            <p className={"flex mt-6 text-[32px] font-extrabold"}>
                <span className={"self-start text-[14px] font-semibold"}>
                    $
                </span>
                <span className={"self-start text-[14px] font-semibold"}>
                    {calculateCarRent(city_mpg, year)}
                </span>
                <span className={"self-end text-[14px] font-medium"}>
                    /day
                </span>
            </p>
            <div className={"relative w-full h-40 my-4 object-contain"}>
                <Image src={'/hero.png'} alt={"Car model"} fill priority className={"object-contain"}/>
            </div>
            <div className={"relative flex w-full mt-2"}>
                <div className={"flex group-hover:invisible w-full justify-between text-gray-700"}>
                    <div className={"flex flex-col justify-center items-center gap-2"}>
                        <Image src={"/steering-wheel.svg"} width={20} height={20} alt={"steering wheel"}/>
                        <p className={"text-[14px]"}>{transmission === 'a' ? 'Automatic' : 'Manual'}</p>
                    </div>
                    <div className={"flex flex-col justify-center items-center gap-2"}>
                        <Image src={"/tire.svg"} width={20} height={20} alt={"tire"}/>
                        <p className={"text-[14px]"}>{drive.toUpperCase()}</p>
                    </div>
                    <div className={"flex flex-col justify-center items-center gap-2"}>
                        <Image src={"/gas.svg"} width={20} height={20} alt={"gas"}/>
                        <p className={"text-[14px]"}>{city_mpg}</p>
                    </div>
                </div>
                <div className={"car-card__btn-container"}>
                    <CustomButton title={"View More"} containerStyles={"w-full py-[16px] rounded-full bg-primary-blue"} textStyles={"text-white text-[14px] leading-[17px] font-bold"} rightIcon={"/right-arrow.svg"} handleClick={() => setIsOpen(true)}/>
                </div>
            </div>
            <CarDetails isOpen={isOpen} closeModal={() => setIsOpen(false)} car={car} />
        </div>
    )
}

export default CarCard;