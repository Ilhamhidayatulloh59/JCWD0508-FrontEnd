import { Flex } from "@chakra-ui/react";
import DemoDrawer from "./components/myComp/drawer";
import { Avatar } from "./components/ui/avatar";

function App() {
  return (
    <div>
      <Flex
        bgColor={"teal"}
        h={"60px"}
        justifyContent={"space-between"}
        alignItems={"center"}
        color={"white"}
        px={'20px'}
        // _hover={{ bgColor: "pink" }}
      >
        <DemoDrawer />
        <Avatar />
      </Flex>
    </div>
  );
}

export default App;
