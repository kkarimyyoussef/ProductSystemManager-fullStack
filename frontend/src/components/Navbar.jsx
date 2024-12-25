import { Container, Flex, Text, HStack, Button, useColorMode } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { CiSquarePlus } from "react-icons/ci";
import {IoMoon} from "react-icons/io5";
import {LuSun} from "react-icons/lu";

const Navbar = () => {
  const {colorMode, toggleColorMode} = useColorMode();
  return (
    <Container maxW="1140px" px={4}>
      <Flex
        h="16"
        alignItems="center"
        justifyContent="space-between"
        flexDir={{
          base: "column",  // stacks on top of each other in smaller screens
          sm: "row"        // side by side in larger screens
        }}
      >
        <Text
          fontSize={{ base: "22px", sm: "28px" }}  // corrected property name and added px for clarity
          fontWeight="bold"
          textTransform="uppercase"
          textAlign="center"
          bgGradient="linear(to-r, cyan.400, blue.500)"
          bgClip="text"
        >
          <Link to="/">Product Store 🛒</Link>
        </Text>
        <HStack spacing={2} alignItems="center">
          <Link to="/create">
            <Button leftIcon={<CiSquarePlus fontSize="20px" />} variant="solid">
              Add Product
            </Button>
          </Link>
          <Button onClick={toggleColorMode}>
             {colorMode === "light" ? <IoMoon />: <LuSun  size="20"/>}
          </Button>
        </HStack>
      </Flex>
    </Container>
  );
}

export default Navbar;
