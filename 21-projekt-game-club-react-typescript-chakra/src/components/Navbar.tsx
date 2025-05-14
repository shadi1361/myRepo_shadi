import { HStack, Image, Text } from "@chakra-ui/react";
import logo1 from '../assets/logo1.png'

export default function Navbar() {
  return (
    <HStack>
      <Image src={logo1} boxSize='65px'/>
      <Text>Velomo</Text>
    </HStack>
  );
}
