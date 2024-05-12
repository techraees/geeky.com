"use client";

import OperationBoxWithSelection from "@/components/OperationBoxWithSelection";
import OperationBox from "@/components/OperationBox";
import React, { useState } from "react";

import filterIcon from "@/public/filter_mobile.png";
import sortIcon from "@/public/sort_icon.png";
import searchIcon from "@/public/search_icon.jpg";
import globalIcon from "@/public/global.png";
import Image from "next/image";
import { Flex } from "@chakra-ui/react";
import FilterBox from "@/components/FilterBox";

interface FilterData {
  citySelect: any;
  setCitySelect: any;
  ferryType: any;
  setFerryType: any;
  selectData: any;
  ferriesData: any;
}

const AllOperations = ({
  citySelect,
  setCitySelect,
  ferryType,
  setFerryType,
  selectData,
  ferriesData,
}: FilterData) => {
  const [isActive, setIsActive] = useState<boolean>(false);
  return (
    <>
      <Flex className="gap-2.5">
        <OperationBox
          setIsActive={setIsActive}
          isActive={isActive}
          element={
            <>
              <Image
                src={filterIcon}
                alt="dsfsdfs"
                className="w-[16px] h-[16px]"
              />

              <span className="filter_data ">Filters</span>
            </>
          }
        />
        <OperationBoxWithSelection
          citySelect={null}
          setCitySelect={null}
          ferryType={null}
          setFerryType={null}
          selectData={null}
          element={
            <>
              <Image
                src={sortIcon}
                alt="dsfsdfs"
                className="w-[16px] h-[16px]"
              />
            </>
          }
          text={<span className="filter_data">Sort By Reviews</span>}
        />

        <div className="lg:block hidden">
          <OperationBox
            setIsActive={null}
            isActive={false}
            element={
              <>
                <Image
                  src={searchIcon}
                  alt="dsfsdfs"
                  className="w-[16px] h-[16px]"
                />

                <span className="filter_data ">Search</span>
              </>
            }
          />
        </div>
      </Flex>
      <div className="lg:block hidden">
        <OperationBox
          setIsActive={null}
          isActive={false}
          element={
            <>
              <Image
                src={globalIcon}
                alt="dsfsdfs"
                className="w-[16px] h-[16px]"
              />

              <span className="filter_data text-[#00afd4]">Live Map View</span>
            </>
          }
        />
      </div>

      {isActive && (
        <div className="lg:hidden block">
          <FilterBox
            citySelect={citySelect}
            setCitySelect={setCitySelect}
            ferryType={ferryType}
            setFerryType={setFerryType}
            selectData={selectData}
            ferriesData={ferriesData}
          />
        </div>
      )}
    </>
  );
};

export default AllOperations;
