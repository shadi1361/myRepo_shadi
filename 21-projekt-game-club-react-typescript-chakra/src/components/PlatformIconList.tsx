import {
  FaWindows,
  FaPlaystation,
  FaXbox,
  FaApple,
  FaLinux,
  FaAndroid
} from "react-icons/fa";
import { HStack, Icon } from "@chakra-ui/react";
import { Platform } from "../hooks/useGames";

import { MdPhoneIphone } from "react-icons/md";
import { SiNintendo } from "react-icons/si";
import { BsGlobe } from "react-icons/bs";
import { IconType } from "react-icons";

interface Props {
  platforms: Platform[];
}

export default function PlatformIconList({ platforms }: Props) {
  const iconMap: { [key: string]: IconType } = {
    pc: FaWindows,
    playstation: FaPlaystation,
    xbox: FaXbox,
    nintendo: SiNintendo,
    mac: FaApple,
    linux: FaLinux,
    android: FaAndroid,
    ios: MdPhoneIphone,
    web: BsGlobe
  };

  return (
    <HStack marginY="13px">
      {platforms.map((platform) => {
        const IconComponent = iconMap[platform.slug];
        return IconComponent ? (
          <Icon key={platform.id} as={IconComponent} color="gray.500" />
        ) : null;
      })}
    </HStack>
  );
}
