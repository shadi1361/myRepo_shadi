import { HStack, Switch, Text, useColorMode } from "@chakra-ui/react";

export default function ColorModeSwitch() {
    const{colorMode, toggleColorMode}=useColorMode()

  return (
    <HStack>        
        <Switch isChecked={colorMode ==='dark'} onChange={toggleColorMode} />
        <Text>Dark Mode</Text>
    </HStack>
  )
}
