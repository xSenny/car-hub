"use client";
import React, {useEffect, useState} from "react";
import {Hero, CustomFilter, SearchBar, CarCard, ShowMore} from "@/components";
import {fetchCars} from "@/utils";
import {fuels, manufacturers, yearsOfProduction} from "@/constants";
import Image from "next/image";

export default function Home() {
    const [allCars, setAllCars] = useState([]);
    const [loading, setLoading] = useState(true)

    const [manufacturer, setManufacturer] = useState('')
    const [model, setModel] = useState('')
    const [fuel, setFuel] = useState('')
    const [year, setYear] = useState('2022');
    const [limit, setLimit] = useState(10);

    const getCars = async () => {
        setLoading(true)
        try {
            const result = await fetchCars({
                manufacturer: manufacturer || '',
                year: year || '2022',
                fuel: fuel || '',
                limit: limit || 10,
                model: model || ''
            });
            console.log(result);
            setAllCars(result)
        }catch (e) {
            console.log(e);
        }finally {
            setLoading(false);
        }
    }

    useEffect(() => {
        getCars()
    }, [fuel, year, limit, manufacturer, model])
    const isDataEmpty = !Array.isArray(allCars) || allCars.length < 1 || !allCars;

  return (
    <main className="overflow-hidden">
        <Hero />
        <div className={"mt-12 padding-x padding-y max-width"} id={"discover"}>
            <div className={"home__text-container"}>
                <h1 className={"text-4xl font-extrabold"}>Car Catalog</h1>
                <p>Explore the cars you might like</p>
            </div>
            <div className={"home__filters"}>
                <SearchBar setManufacturer={setManufacturer} setModel={setModel} manufacturer={manufacturer} model={model}/>
                <div className={"home__filter-container"}>
                    <CustomFilter
                        title={"fuel"}
                        options={fuels}
                        setFilter={setFuel}
                    />
                    <CustomFilter
                        title={"year"}
                        options={yearsOfProduction}
                        setFilter={setYear}
                    />
                </div>
            </div>

            {allCars.length > 0 || loading ? (
                <section>
                    <div className={"home__cars-wrapper"}>
                        {allCars?.map((car) => <CarCard car={car}/>)}
                    </div>
                    {loading && (
                        <div className={"mt-16 w-full flex-center"}>
                            <Image src={"/loader.svg"} alt={"loader"} width={50} height={50}/>
                        </div>
                    )}
                    <ShowMore
                        pageNumber={(limit || 10) / 10}
                        isNext={((limit || 10) > allCars.length)}
                        setLimit={setLimit}
                    />
                </section>
            ) : (
                <div className={"home__error-container"}>
                    <h2 className={"text-black text-xl font-bold"}>Oops, no results</h2>
                </div>
            )}

        </div>
    </main>
  );
}
