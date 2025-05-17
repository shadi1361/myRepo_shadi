import { HStack, Image} from "@chakra-ui/react";
import logo1 from "../assets/logo1.png";
import ColorModeSwitch from "./ColorModeSwitch";

export default function Navbar() {
  return (
    <HStack justifyContent='space-between' padding='10px'>
      <Image src={logo1} boxSize="65px" borderRadius="md" />
      <ColorModeSwitch />
    </HStack>
  );
}
