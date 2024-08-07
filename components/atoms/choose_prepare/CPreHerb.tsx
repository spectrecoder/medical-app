import React, { useEffect } from "react";
import Image from "next/image";
import { ImBin2 } from "react-icons/im";
import { useDispatch, useSelector } from "react-redux";
import BasicRating from "./CPreStarRating";

interface IHerbData {
  herbImg: string;
  herbName: string;
  herbTHC: number;
  herbCBD: number;
  herbKultivar: string;
  herbGenetik: string;
  herbPriceFrom: number;
  herbPriceTo: number;
  herbTalent: number;
  herbAmount?: number;
  index?: number;
  removeHerbAmount?: any;
  classname?: string;
}

const CPreHerb: React.FC<IHerbData> = ({
  herbCBD,
  herbGenetik,
  herbImg,
  herbKultivar,
  herbName,
  herbPriceFrom,
  herbPriceTo,
  herbTHC,
  herbTalent,
  herbAmount,
  removeHerbAmount,
  index,
  classname,
}) => {
  const dispatch = useDispatch();

  const selectedHerbList = useSelector(
    (state: any) => state.counter.selectedHerbList
  );
  const handleRemove = (index: number | undefined) => {
    removeHerbAmount(index);
  };
  return (
    <div
      className={` ${classname} md:p-5 px-4 py-6 flex -webkit-flex flex-row max-[875px]:flex-col w-full mx-auto h-auto bg-[#FFFFFF] 
    rounded-[30px] mb-4 justify-between`}
    >
      <div className="flex -webkit-flex flex-row md:gap-5 gap-2">
        <div className="flex -webkit-flex sm:w-[113px] w-[80px] sm:h-auto h-[80px]">
          <Image
            src={herbImg}
            alt=""
            width={65}
            height={65}
            className="w-full h-full"
          />
        </div>

        <div className="flex -webkit-flex flex-col md:w-[219px] w-[176px] ">
          <div className="flex -webkit-flex justify-start items-center">
            <p className="flex -webkit-flex gap-1">
              <span className="w-auto h-auto py-1 px-4 rounded-[60px] text-[10px] text-[#F3F3F3] bg-custom-purple flex -webkit-flex justify-center items-center">
                THC {herbTHC}%
              </span>
              <span className="w-auto py-1 px-4 rounded-[60px] text-[10px] text-[#363636] bg-herb-light-purple flex -webkit-flex justify-center items-center">
                CBD {herbCBD}%
              </span>
            </p>
            <div className="w-[22px] h-[22px] ml-1">
              <Image
                src={"/Icon/herb.png"}
                alt=""
                width={20}
                height={20}
                className="w-[22px] h-[22px]"
              />
            </div>
          </div>
          <p className="text-normal-text text-base mt-[10px] font-extrabold">
            {herbName}
          </p>
          <p className="text-custom-grey mt-[10px]">Kultivar: {herbKultivar}</p>
          <p className="text-custom-grey mt-1">Genetic: {herbGenetik}</p>
        </div>
      </div>
      <div
        className={` ${
          herbAmount
            ? "hidden"
            : "w-full min-[875px]:w-[156px] justify-between items-end 875px:flex-col flex -webkit-flex max-sm:mt-[16px]"
        }`}
      >
        <div
          className={`multi-select ${
            herbTalent === 0
              ? "invisible"
              : "flex -webkit-flex flex-col sm:items-end items-start"
          }`}
        >
          <p className="text-[#B5985C] text-[16px]">Sehr beliebt</p>
          <BasicRating rate={herbTalent} />
        </div>
        <div>
          <p className="text-custom-purple text-xl font-extrabold">
            ab {herbPriceFrom.toFixed(2)}
            {/* ,{herbPriceTo} */}
            <span className="text-base text-custom-grey ml-1 mt-[2px]">
              pro g
            </span>
          </p>
        </div>
      </div>
      <div
        className={`multi-select ${
          herbAmount ? "flex -webkit-flex flex-col items-end" : "hidden"
        }`}
      >
        <div className="text-base text-[#363636]">{herbAmount} Gramm</div>
        <div>
          <p className="text-custom-purple text-xl font-extrabold">
            ab {herbPriceFrom.toFixed(2)}
            {/* ,{herbPriceTo} */}
            <span className="text-[16px] text-custom-grey ml-1 mt-[2px]">
              pro g
            </span>
          </p>
        </div>
        <div
          className="mt-[37px] cursor-pointer"
          onClick={() => handleRemove(index)}
        >
          <ImBin2 color="#00000012" size={24} />
        </div>
      </div>
    </div>
  );
};

export default CPreHerb;
