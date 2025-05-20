import { HStack, Image} from "@chakra-ui/react";
import logo1 from "../assets/logo1.png";
import ColorModeSwitch from "./ColorModeSwitch";
import SearchInput from "./SearchInput";

export default function Navbar() {
  return (
    <HStack padding='10px'>
      <Image src={logo1} boxSize="65px" borderRadius="md" />
      <SearchInput/>

      <ColorModeSwitch />
    </HStack>
  );
}
