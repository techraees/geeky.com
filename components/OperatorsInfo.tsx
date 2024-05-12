"use client";

import { Heading, Text } from "@chakra-ui/react";
import React from "react";
import "./index.css";

interface OperatorsInfoProps {
  title: string;
  active_operators: React.ReactNode;
}

const OperatorsInfo = ({ title, active_operators }: OperatorsInfoProps) => {
  return (
    <>
      <Text className="2xl:text-[37px] xl:text-[32px] lg:text-[27px] md:text-[27px] text-[24px] operators_heading">
        {title}
      </Text>
      <Text className="2xl:text-[16px] xl:text-[12px] lg:text-[10px]  text-[12px] mb-2 operators_text ">
        {active_operators}
      </Text>
    </>
  );
};

export default OperatorsInfo;
