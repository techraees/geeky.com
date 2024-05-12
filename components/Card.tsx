// import React from "react";
// import { Box, Flex, Text, Image, Button } from "@chakra-ui/react";
// import "./../style/card.css";

// const Card = () => {
//   return (
//     <Box w="100%" color="black" className=" rounded-md border border-[#dfdede]">
//       <Flex
//         color="white"
//         justify="space-between"
//         className="xl:p-2 lg:p-1 sm:p-1 p-2 sm:flex-row flex-col  bg-[#f8f8f8] border-b border-[#dfdede] "
//       >
//         <Box className="">
//           <Image
//             className="2xl:h-[55px] xl:h-[46px] lg:h-[37px] md:h-[33px] sm:h-[30px] h-full w-full"
//             src="/Layer 1575.png"
//             alt="logo"
//           />
//         </Box>
//         <Box>
//           <Text className=" text-black font-semibold 2xl:text-[24px] xl:text-[21.5px] lg:text-[17.5px] md:text-[15.5px] sm:text-[13.5px] text-[24.5px]    2xl:leading-[30px]  xl:leading-[25px] lg:leading-[20px] md:leading-[18px] sm:leading-[16px] ">
//             Blue Star Ferries
//           </Text>
//           <Flex className=" sm:justify-between justify-start">
//             <Box></Box>
//             <Box>
//               <Text className=" text-black 2xl:text-[18px] xl:text-[16px] lg:text-[13px] md:text-[11px] sm:text-[9.5px] text-[18px]  xl:leading-[24px] lg:leading-[18px] md:leading-[16px] sm:leading-[14px] leading-[16px]">
//                 by 1342 customers
//               </Text>
//             </Box>
//           </Flex>
//         </Box>
//       </Flex>
//       <Box className="xl:px-4 xl:py-4 lg:px-2.5 lg:py-2.5 md:px-2 md:py-2 sm:px-2 sm:py-2 py-2 px-2">
//         <Flex>
//           <Box className="sm:w-[42%] w-full sm:mb-0 mb-4">
//             <Text className=" 2xl:text-[15.5px] xl:text-[14.5px] lg:text-[13.5px] md:text-[12.5px] sm:text-[11.5px] text-[16px] text-black font-bold text-opacity-80">
//               Operates in
//             </Text>
//             <Flex className=" md:gap-x-2 gap-x-1 items-center xl:mt-[2px]">
//               <Image
//                 className="2xl:h-[15px] 2xl:w-[27px] xl:h-[14px] xl:w-[25px] lg:h-[12px] lg:w-[20px] md:h-[10px] md:w-[18px] sm:h-[9px] sm:w-[16px]"
//                 src="/Layer 1577.png"
//                 alt="logo"
//               />
//               <Text className="2xl:text-[15.5px] xl:text-[14.5px] lg:text-[13.5px] md:text-[12.5px] sm:text-[11.5px] text-[16px] 2xl:leading-[10px] xl:leading-[15px] text-black font-bold text-opacity-80">
//                 Greece
//               </Text>
//             </Flex>
//           </Box>
//           <Box className="w-[58%] sm:block hidden">
//             <Text className=" 2xl:text-[15px] xl:text-[14px] lg:text-[13px] md:text-[12px] sm:text-[11px]  text-[#333333] 2xl:leading-[22px] xl:leading-[20px] ">
//               Blue Star Ferries is currently the biggest ferry company in
//               Greece.
//               <br /> It is a member of Attica Group, one of the most significant
//               companies in the Greek shipping industry.
//             </Text>
//           </Box>
//         </Flex>
//         <Flex>
//           <Box className="sm:w-[42%] w-full sm:mb-0 mb-4">
//             <Text className=" 2xl:text-[15.5px] xl:text-[14.5px] font-medium lg:text-[13.5px] md:text-[12.5px] sm:text-[11.5px] text-black text-opacity-90">
//               Vessels number: <span className=" font-normal">8</span>
//             </Text>
//             <Text className=" 2xl:text-[15.5px] xl:text-[14.5px] font-medium lg:text-[13.5px] md:text-[12.5px] sm:text-[11.5px] text-black text-opacity-90">
//               Ferry types: <span className=" font-normal"> 8 normal</span>
//             </Text>
//           </Box>
//           <Box className="w-[58%] sm:block hidden">
//             <Text className="  2xl:text-[15px] xl:text-[14px] lg:text-[13px] md:text-[12px] sm:text-[11px] text-[#333333] 2xl:leading-[22px] xl:leading-[20px]  ">
//               Its fleet consists of vessels of the latest technology and serves
//               itineraries starting from the port of Piraeus and heading to the
//               islands of Cyclades (Mykonos, Santorini, Paros etc)Dodecanese
//               (Rhodes, Kos etc). Blue Star Ferries reaches over 50 destinations
//               in total.
//             </Text>
//           </Box>
//         </Flex>
//         <Flex>
//           <Box className="sm:w-[42%] w-full sm:mb-0 mb-4">
//             <Text className=" 2xl:text-[15.5px] xl:text-[14.5px] lg:text-[13.5px] font-medium md:text-[12.5px] sm:text-[11.5px] text-black text-opacity-90">
//               Popular vessels:
//             </Text>
//             <Text className=" 2xl:text-[15.5px] xl:text-[14.5px] lg:text-[13.5px] font-medium md:text-[12.5px] sm:text-[11.5px] text-[#43c4df] text-opacity-90">
//               Blue Star Delos, Blue Star Naxos
//             </Text>
//           </Box>
//           <Box className="w-[58%] sm:block hidden">
//             <Text className="  2xl:text-[15px] xl:text-[14px] lg:text-[13px] md:text-[12px] sm:text-[11px] text-[#333333] 2xl:leading-[22px] xl:leading-[20px]  ">
//               Even though Blue Star ...
//             </Text>
//             <Text className=" md:py-3 py-2">
//               <hr />
//             </Text>
//           </Box>
//         </Flex>
//         <Box className=" sm:hidden block">
//           <Text className=" 2xl:text-[15px] xl:text-[14px] lg:text-[13px] md:text-[12px] sm:text-[11px] text-[18px]  text-[#333333] 2xl:leading-[22px] xl:leading-[20px] ">
//             Blue Star Ferries is currently the biggest ferry company in Greece.
//             <br /> It is a member of Attica Group, one of the most significant
//             companies in the Greek shipping industry.
//           </Text>
//           <Text className="  2xl:text-[15px] xl:text-[14px] lg:text-[13px] md:text-[12px] sm:text-[11px]  text-[18px]  text-[#333333] 2xl:leading-[22px] xl:leading-[20px]  ">
//             Its fleet consists of vessels of the latest technology and serves
//             itineraries starting from the port of Piraeus and heading to the
//             islands of Cyclades (Mykonos, Santorini, Paros etc)Dodecanese
//             (Rhodes, Kos etc). Blue Star Ferries reaches over 50 destinations in
//             total.
//           </Text>
//           <Text className="  2xl:text-[15px] xl:text-[14px] lg:text-[13px] md:text-[12px] sm:text-[11px]  text-[18px]  text-[#333333] 2xl:leading-[22px] xl:leading-[20px]  ">
//             Even though Blue Star ...
//           </Text>
//           <Text className=" md:py-3 py-2">
//             <hr className=" bg-[#f8f8f8] text-[#f8f8f8]" />
//           </Text>
//         </Box>

//         <Flex className=" justify-end lg:mt-1 ">
//           <button className="border-none sm:bg-[#f8f8f8] rounded-md flex items-center lg:px-4 lg:py-2 md:px-3 md:py-1.5 px-2 py-1">
//             <span className="2xl:text-[17.5px] xl:text-[16px] lg:text-[14.5px] md:text-[12.5px] sm:text-[11.5px] text-[#43c4df] text-opacity-90">
//               More about Blue Star Ferries
//             </span>
//             <span className="ml-[10px]">
//               <Image
//                 className=" 2xl:w-[19px] 2xl:h-[19px] xl:w-[17px] xl:h-[17px] lg:w-[15px] lg:h-[15px] md:w-[12px] md:h-[12px] w-[16px] h-[16px]"
//                 src="/Layer 1066.png"
//               />
//             </span>
//           </button>
//         </Flex>
//       </Box>
//     </Box>
//   );
// };

// export default Card;

import React from "react";
import { Box, Flex, Text, Image } from "@chakra-ui/react";
import "./../style/card.css";
import ReactStars from "react-rating-stars-component";
interface CardProps {
  data: {
    name: string;
    logo: string;
    customers: number;
    operatingImage: string;
    operatingLocation: string;
    description: string;
    VesselsNo: string;
    FerryTypes: string;
    VesselsDescription: string;
    PopularVessels: string;
    DelosNaxos: string;
    PopularVesselsdescription: string;
    MoreAbout: string;
    rating: string;
  };
}

const Card: React.FC<CardProps> = ({ data }) => {
  return (
    <Box
      w="100%"
      color="black"
      className="rounded-md border border-[#dfdede] my-5"
    >
      <Flex
        color="white"
        justify="space-between"
        className="xl:p-2 lg:p-1 sm:p-1 p-2 sm:flex-row flex-col bg-[#f8f8f8] border-b border-[#dfdede]"
      >
        <Box>
          <Image
            className="2xl:h-[55px] xl:h-[46px] lg:h-[37px] md:h-[33px] sm:h-[30px] h-full w-full"
            src={data.logo}
            alt="logo"
          />
        </Box>
        <Box>
          <Text className="text-black text-right font-semibold 2xl:text-[24px] xl:text-[21.5px] lg:text-[17.5px] md:text-[15.5px] sm:text-[13.5px] text-[24.5px] 2xl:leading-[30px] xl:leading-[25px] lg:leading-[20px] md:leading-[18px] sm:leading-[16px]">
            {data.name}
          </Text>
          <Flex className="sm:justify-between justify-start items-center">
            <Box>
              <ReactStars
                count={5}
                size={20}
                activeColor="#ffd700"
                value={data.rating} // Set the initial rating value to 4
              />
            </Box>
            <Box>
              <Text className="text-black 2xl:text-[18px] xl:text-[16px] lg:text-[13px] md:text-[11px] sm:text-[9.5px] text-[18px] xl:leading-[24px] lg:leading-[18px] md:leading-[16px] sm:leading-[14px] leading-[16px]">
                by {data.customers} customers
              </Text>
            </Box>
          </Flex>
        </Box>
      </Flex>
      <Box className="xl:px-4 xl:py-4 lg:px-2.5 lg:py-2.5 md:px-2 md:py-2 sm:px-2 sm:py-2 py-2 px-2">
        <Flex>
          <Box className="sm:w-[42%] w-full sm:mb-0 mb-4">
            <Text className="2xl:text-[15.5px] xl:text-[14.5px] lg:text-[13.5px] md:text-[12.5px] sm:text-[11.5px] text-[16px] text-black font-bold text-opacity-80">
              Operates in
            </Text>
            <Flex className="md:gap-x-2 gap-x-1 items-center xl:mt-[2px]">
              <Image
                className="2xl:h-[15px] 2xl:w-[27px] xl:h-[14px] xl:w-[25px] lg:h-[12px] lg:w-[20px] md:h-[10px] md:w-[18px] sm:h-[9px] sm:w-[16px]"
                src={data.operatingImage}
                alt="logo"
              />
              <Text className="2xl:text-[15.5px] xl:text-[14.5px] lg:text-[13.5px] md:text-[12.5px] sm:text-[11.5px] text-[16px] 2xl:leading-[10px] xl:leading-[15px] text-black font-bold text-opacity-80">
                {data.operatingLocation}
              </Text>
            </Flex>
          </Box>
          <Box className="w-[58%] sm:block hidden">
            <Text className="2xl:text-[15px] xl:text-[14px] lg:text-[13px] md:text-[12px] sm:text-[11px] text-[#333333] 2xl:leading-[22px] xl:leading-[20px]">
              {data.description}
            </Text>
          </Box>
        </Flex>
        <Flex>
          <Box className="sm:w-[42%] w-full sm:mb-0 mb-4">
            <Text className=" 2xl:text-[15.5px] xl:text-[14.5px] font-medium lg:text-[13.5px] md:text-[12.5px] sm:text-[11.5px] text-black text-opacity-90">
              Vessels number:{" "}
              <span className=" font-normal">{data.VesselsNo}</span>
            </Text>
            <Text className=" 2xl:text-[15.5px] xl:text-[14.5px] font-medium lg:text-[13.5px] md:text-[12.5px] sm:text-[11.5px] text-black text-opacity-90">
              Ferry types:{" "}
              <span className=" font-normal"> {data.FerryTypes}</span>
            </Text>
          </Box>
          <Box className="w-[58%] sm:block hidden">
            <Text className="  2xl:text-[15px] xl:text-[14px] lg:text-[13px] md:text-[12px] sm:text-[11px] text-[#333333] 2xl:leading-[22px] xl:leading-[20px]  ">
              {data.VesselsDescription}
            </Text>
          </Box>
        </Flex>
        <Flex>
          <Box className="sm:w-[42%] w-full sm:mb-0 mb-4">
            <Text className=" 2xl:text-[15.5px] xl:text-[14.5px] lg:text-[13.5px] font-medium md:text-[12.5px] sm:text-[11.5px] text-black text-opacity-90">
              Popular vessels:{" "}
              <span className=" font-normal"> {data.PopularVessels}</span>
            </Text>
            <Text className=" 2xl:text-[15.5px] xl:text-[14.5px] lg:text-[13.5px] font-medium md:text-[12.5px] sm:text-[11.5px] text-[#43c4df] text-opacity-90">
              {data.DelosNaxos}
            </Text>
          </Box>
          <Box className="w-[58%] sm:block hidden">
            <Text className="  2xl:text-[15px] xl:text-[14px] lg:text-[13px] md:text-[12px] sm:text-[11px] text-[#333333] 2xl:leading-[22px] xl:leading-[20px]  ">
              {data.PopularVesselsdescription}
            </Text>

            <Box className="md:py-3 py-2 h-0 w-full border-t border-[#cbcbcb]"></Box>
          </Box>
        </Flex>
        <Box className=" sm:hidden block">
          <Text className=" 2xl:text-[15px] xl:text-[14px] lg:text-[13px] md:text-[12px] sm:text-[11px] text-[18px]  text-[#333333] 2xl:leading-[22px] xl:leading-[20px] ">
            {data.description}
          </Text>
          <Text className="  2xl:text-[15px] xl:text-[14px] lg:text-[13px] md:text-[12px] sm:text-[11px]  text-[18px]  text-[#333333] 2xl:leading-[22px] xl:leading-[20px]  ">
            {data.VesselsDescription}
          </Text>
          <Text className="  2xl:text-[15px] xl:text-[14px] lg:text-[13px] md:text-[12px] sm:text-[11px]  text-[18px]  text-[#333333] 2xl:leading-[22px] xl:leading-[20px]  ">
            {data.PopularVesselsdescription}
          </Text>
          <Box className="md:py-3 py-2 h-0 w-full border-t border-[#cbcbcb]"></Box>
        </Box>

        <Flex className=" justify-end lg:mt-1 ">
          <button className="border-none sm:bg-[#f8f8f8] rounded-md flex items-center lg:px-4 lg:py-2 md:px-3 md:py-1.5 px-2 py-1">
            <span className="2xl:text-[17.5px] xl:text-[16px] lg:text-[14.5px] md:text-[12.5px] sm:text-[11.5px] text-[#43c4df] text-opacity-90">
              {data.MoreAbout}
            </span>
            <span className="ml-[10px]">
              <Image
                className=" 2xl:w-[19px] 2xl:h-[19px] xl:w-[17px] xl:h-[17px] lg:w-[15px] lg:h-[15px] md:w-[12px] md:h-[12px] w-[16px] h-[16px]"
                src="/Layer 1066.png"
              />
            </span>
          </button>
        </Flex>
      </Box>
    </Box>
  );
};

export default Card;
