"use client";

import React, { useEffect, useState } from "react";
import { Button, ButtonGroup } from "@chakra-ui/react";
import { Box, Flex, Text, Image } from "@chakra-ui/react";
import OperatorsInfo from "@/components/OperatorsInfo";
import AllOperations from "./AllOperations";
import Card from "@/components/Card";
import FilterBox from "@/components/FilterBox";
const dataArrayOriginal = [
  {
    name: "Blue Star Ferries",
    logo: "/Layer 1575.png",
    customers: 1342,
    operatingLocation: "Greece",
    operatingImage: "/Layer 1577.png",
    description:
      "Blue Star Ferries is currently the biggest ferry company in Greece. It is a member of Attica Group, one of the most significant companies in the Greek shipping industry. ",
    VesselsNo: "8",
    FerryTypes: " 8 normal",
    FerryTypesCode: "normal",
    VesselsDescription:
      " Its fleet consists of vessels of the latest technology and serves itineraries starting from the port of Piraeus and heading to the islands of Cyclades (Mykonos, Santorini, Paros etc)Dodecanese (Rhodes, Kos etc). Blue Star Ferries reaches over 50 destinations in total.",
    PopularVessels: "",
    DelosNaxos: "Blue Star Delos, Blue Star Naxos",
    PopularVesselsdescription: "Even though Blue Star ...",
    MoreAbout: "More about Blue Star Ferries",
    rating: "4",
  },
  {
    name: "Seajets",
    logo: "/Layer 1578.png",
    customers: 2467,
    operatingLocation: "Italy",
    operatingImage: "/Layer 1585.png",
    description:
      "Seajets is the biggest company of high-speed vessels of the Aegean Sea. It is a joint venture of speedboats that was initially founded in 1989 to provide shipping services. ",
    VesselsNo: "17",
    FerryTypes: " 10 normal 7 high-speed",
    FerryTypesCode: "high-speed",
    VesselsDescription:
      "The company's passenger ferries have been connecting over 26 destinations in the Aegean Sea since 2002. Their fleet consists of 14 high-speed catamarans and 3 conventional ones, with a speed of up to 50 knots. Seajets connect the main ports of Athens (Piraeus, Rafina and Lavrion), other parts of the mainland (Thessaloniki, Kavala, Peloponnese) and ..",
    PopularVessels: "Ferries",
    DelosNaxos: "WorldChampion jet, Seajet 2",
    PopularVesselsdescription: "Even though Blue Star ...",
    MoreAbout: "More about Blue Star Ferries",
    rating: "3.5",

  },
  {
    name: "Anek-Superfast",
    logo: "/Layer 1584.png",
    customers: 667,
    operatingLocation: "London",
    operatingImage: "/Layer 1578.png",
    description:
      "Anek-Superfast is a joint venture established in June 2011 as a result of the cooperation between two major Greek ferry companies, Anek Lines and Superfast Ferries. ",
    VesselsNo: "8",
    FerryTypes: " 8 normal",
    FerryTypesCode: "normal",
    VesselsDescription:
      "The goal was to provide fast and convenient service to the customers, as both companies had vessels of the latest technology. The ferry lines available by the companies connect not only Athens to Crete (Piraeus to Heraklion and Chania) but also makes the route from Italy to Greece (from Ancona, Bari and Venice to Patra, Corfu and ...",
    PopularVessels: "",
    DelosNaxos: "Superfast XII, Superfast XI",
    PopularVesselsdescription: "Even though Blue Star ...",
    MoreAbout: "More about Blue Star Ferries",
    rating: "5",

  },
];

const citiesData = [
  {
    value: "Greece",
    id: "Greece",
  },
  {
    value: "Italy",
    id: "Italy",
  },
  {
    value: "London",
    id: "London",
  },
];

const ferriesData = [
  {
    value: "Normal Ferries",
    code: "normal",
    id: "Greece",
  },
  {
    value: "High-speed ferries",
    code: "high-speed",
    id: "Italy",
  },
];

const page = () => {
  const [citySelect, setCitySelect] = useState<any | null>(null);
  const [ferryType, setFerryType] = useState<any | null>(null);
  const [dataArray, setDataArray] = useState<any | null>(dataArrayOriginal);

  useEffect(() => {
    if (citySelect && ferryType) {
      const filteredData = dataArrayOriginal.filter((item: any) => {
        return (
          item.operatingLocation === citySelect &&
          item.FerryTypesCode === ferryType
        );
      });
      setDataArray(filteredData);
    } else if (citySelect) {
      const filteredData = dataArrayOriginal.filter((item: any) => {
        return item.operatingLocation === citySelect;
      });
      setDataArray(filteredData);
    } else if (ferryType) {
      const filteredData = dataArrayOriginal.filter((item: any) => {
        return item.FerryTypesCode === ferryType;
      });
      setDataArray(filteredData);
    } else {
      setDataArray(dataArrayOriginal);
    }
  }, [citySelect, ferryType]);

  return (
    <div className="pt-5">
      {/* Headding Operators */}
      <OperatorsInfo
        title="Ferry operators"
        active_operators={
          <>
            Discover the{" "}
            <span className="operators_span">57 ferry operators</span> we work
            with
          </>
        }
      />

      {/* Sorting Filter Live Map Operations */}
      <Flex className="gap-3 lg:flex-row lg:justify-between flex-col  mt-3">
        <AllOperations
          citySelect={citySelect}
          setCitySelect={setCitySelect}
          ferryType={ferryType}
          setFerryType={setFerryType}
          selectData={citiesData}
          ferriesData={ferriesData}
        />
      </Flex>

      <div className=" flex w-full  py-10 lg:px-3 gap-2">
        <div className=" w-[27.5%] lg:block hidden my-5">
          <FilterBox
            citySelect={citySelect}
            setCitySelect={setCitySelect}
            ferryType={ferryType}
            setFerryType={setFerryType}
            selectData={citiesData}
            ferriesData={ferriesData}
          />
        </div>
        <div className=" lg:w-[72.5%] w-full bg-white">
          {dataArray &&
            dataArray.map((data: any, index: number) => (
              <Card key={index} data={data} />
            ))}
        </div>
      </div>
    </div>
  );
};
export default page;
