"use client";

import { Box, Flex } from "@chakra-ui/react";
import React from "react";

interface OperationBoxObject {
  element: React.ReactNode;
  setIsActive: any;
  isActive: boolean;
}

const OperationBox = ({
  element,
  setIsActive,
  isActive,
}: OperationBoxObject) => {
  return (
    <Box
      onClick={() => setIsActive(!isActive)}
      className="cursor-pointer flex items-center gap-2 relative w-fit  rounded-md bg-white py-1.5 pl-3 pr-5  text-left text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:outline-none focus:ring-2 sm:text-sm sm:leading-6"
    >
      {element}
    </Box>
  );
};

export default OperationBox;
