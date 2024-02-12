'use client';
import {ShowMorePrompts} from "@/types";
import {useRouter} from "next/navigation";
import {CustomButton} from "@/components/index";
import {updateSearchParams} from "@/utils";

const ShowMore = ({pageNumber, isNext, setLimit}: ShowMorePrompts) => {
    const router = useRouter();
    const handleNavigation = () => {
        const newLimit = (pageNumber + 1) * 10;
        setLimit(newLimit)
    }
    return (
        <div className={"w-full flex-center gap-5 mt-10"}>
            {!isNext && (
                <CustomButton title={"Show More"} btnType={"button"} containerStyles={"bg-primary-blue rounded-full text-white"} handleClick={handleNavigation}/>
            )}
        </div>
    )
}
export default ShowMore;