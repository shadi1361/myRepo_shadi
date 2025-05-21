import { Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import { BsSearch } from "react-icons/bs";
import { useRef } from "react";

interface Props {
    onSearch:(searchText:string)=>void
}

export default function SearchInput({onSearch}: Props) {

  const ref= useRef<HTMLInputElement>(null)

  return (
    <form onSubmit={(e)=>{
      e.preventDefault()
      if(ref.current) onSearch(ref.current.value)
    }}>
      <InputGroup>
        <InputLeftElement children={<BsSearch />} />
        <Input ref={ref}
          borderRadius={20}
          placeholder="Search Games..."
          variant="field"
        ></Input>
      </InputGroup>
    </form>
  );
}
