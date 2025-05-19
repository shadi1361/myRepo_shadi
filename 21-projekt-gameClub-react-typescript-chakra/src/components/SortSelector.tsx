import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";

export default function SortSelector() {
  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronDown />}>
            order by:Relevance
      </MenuButton>
      <MenuList>
            <MenuItem>Relavance</MenuItem>
            <MenuItem>Data added</MenuItem>
            <MenuItem>Name</MenuItem>
            <MenuItem>Release data</MenuItem>
            <MenuItem>Popularity</MenuItem>
            <MenuItem>Average rating</MenuItem>
      </MenuList>
    </Menu>
  );
}
