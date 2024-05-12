"use client";

import { CloseIcon } from "@chakra-ui/icons";
import {
  Box,
  Checkbox,
  CheckboxGroup,
  Flex,
  FormControl,
  FormLabel,
  HStack,
  Text,
  FormHelperText,
} from "@chakra-ui/react";
import Image from "next/image";
import React from "react";
import OperationBoxWithSelection from "./OperationBoxWithSelection";
import locationIcon from "../public/location_icon.png";
import "./index.css";

interface FilterData {
  citySelect: any;
  setCitySelect: any;
  ferryType: any;
  setFerryType: any;
  selectData: any;
  ferriesData: any;
}

const FilterBox = ({
  citySelect,
  setCitySelect,
  ferryType,
  setFerryType,
  selectData,
  ferriesData,
}: FilterData) => {
  return (
    <Box className="flex flex-col border border-1 border-[#e9e9e9] lg:p-3 p-4 rounded-lg overflow-hidden">
      <Flex className="justify-between w-full items-center  ">
        <Text className="operators_heading 2xl:text-[25px] xl:text-[22px] lg:text-[20px] md:text-[18px] text-[16px] font-[700]">
          Filters
        </Text>
        <CloseIcon
          w={3}
          h={3}
          className="cursor-pointer"
          onClick={() => {
            setCitySelect(null);
            setFerryType(null);
          }}
        />
      </Flex>
      <Text className="py-3 operators_span ">Operating In</Text>

      <OperationBoxWithSelection
        citySelect={citySelect}
        setCitySelect={setCitySelect}
        ferryType={ferryType}
        setFerryType={setFerryType}
        selectData={selectData}
        element={
          <>
            <Image
              src={locationIcon}
              alt="dsfsdfs"
              className="w-[16px] h-[16px]"
            />
          </>
        }
        text={<span className="filter_data">Select a country</span>}
      />

      {/* Line */}
      <div className="w-[120%] bg-[#ebebeb] h-[2px] my-5 relative right-[40px]"></div>

      <Flex className="flex-col ">
        <Text className=" operators_span mb-2">Ferry Types</Text>
        <Flex className="flex-col">
          <Flex className="flex-col gap-2">
            {ferriesData &&
              ferriesData.map((item: any) => {
                return (
                  <>
                    <Flex className="items-center my-0.5">
                      <input
                        type="checkbox"
                        className="w-[18px] h-[18px]"
                        name=""
                        id="checkboxData"
                        onChange={() => {
                          setFerryType(item.code);
                        }}
                        checked={ferryType == item.code ? true : false}
                      />
                      <label
                        onClick={() => {
                          setFerryType(item.code);
                        }}
                        htmlFor="checkboxData cursor-pointer"
                        className="ml-3 text-[#7e7e7e]"
                      >
                        {item.value}
                      </label>
                    </Flex>
                  </>
                );
              })}
          </Flex>
        </Flex>
      </Flex>
    </Box>
  );
};

export default FilterBox;
