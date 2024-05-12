"use client";

import { Box, Flex } from "@chakra-ui/react";
import Image from "next/image";
import React, { useState } from "react";
import chevronicon from "../public/chevronicon.png";

interface OperationBoxObject {
  element: React.ReactNode;
  text: React.ReactNode;
  citySelect: any;
  setCitySelect: any;
  ferryType: any;
  setFerryType: any;
  selectData: any;
}

const OperationBox = ({
  element,
  text,
  citySelect,
  setCitySelect,
  ferryType,
  setFerryType,
  selectData,
}: OperationBoxObject) => {
  const [isActiveSelect, setIsActiveSelect] = useState<boolean>(false);
  return (
    <Box
      onClick={() => setIsActiveSelect(!isActiveSelect)}
      className=" flex items-center gap-2 relative w-full cursor-pointer rounded-md bg-white py-1.5 px-3  text-left text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:outline-none focus:ring-2 sm:text-sm sm:leading-6"
    >
      <div className="flex gap-2 w-full items-center">
        {element}
        {citySelect ? citySelect : text}
      </div>

      <Image src={chevronicon} alt="dsfsdfs" />

      {isActiveSelect && selectData && (
        <ul className="flex flex-col items-center gap-2 absolute w-full cursor-pointer rounded-md bg-white p-0  text-left text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:outline-none focus:ring-2 sm:text-sm sm:leading-6 top-[40px] right-[0px] z-[10] overflow-hidden">
          {selectData &&
            selectData.map((item: any, index: number) => {
              return (
                <li
                  key={index}
                  onClick={() => setCitySelect(item.value)}
                  className="text-gray-900 relative  select-none hover:bg-[#eae9e9]  py-1.5 px-6 w-full cursor-pointer"
                  id="listbox-option-0"
                  role="option"
                >
                  <div className="flex items-center">
                    <span className="font-normal ml-3 block truncate">
                      {item.value}
                    </span>
                  </div>
                </li>
              );
            })}
        </ul>
      )}
    </Box>
  );
};

export default OperationBox;
