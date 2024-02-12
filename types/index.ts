import {Dispatch, MouseEventHandler, SetStateAction} from "react";

export interface CustomButtonProps {
    title: string;
    containerStyles?: string;
    handleClick?: MouseEventHandler<HTMLButtonElement>;
    btnType?: "button" | "submit";
    textStyles?: string;
    rightIcon?: string;
    isDisabled?: boolean
}

export interface CustomFilterProps {
    title: string;
    options: OptionProps[];
    setFilter: (filter: string) => void
}

export interface OptionProps{
    title: string;
    value: string;
}

export interface FilterPrompts {
    manufacturer: string,
    year: string;
    fuel: string;
    limit: number;
    model: string;
}

export interface SearchManufacturerProps {
    manufacturer: string;
    setManufacturer: (manufacturer: string) => void;
}

export interface CarPrompts {
    city_mpg: number;
    class: string;
    combination_mpg: number;
    cylinders: number;
    displacement: number;
    drive: string;
    fuel_type: string;
    highway_mpg: number;
    make: string;
    model: string;
    transmission: string;
    year: number;
}

export interface ShowMorePrompts {
    pageNumber: number;
    isNext: boolean;
    setLimit: (limit: number) => void;
}

export interface SearchBarPrompts {
    setManufacturer: (manufacturer: string) => void;
    setModel: (model: string) => void;
    manufacturer: string;
    model: string;
}