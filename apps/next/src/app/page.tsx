import { Box } from "rizzui/box";
import { Flex } from "rizzui/flex";

export default function Page() {
  return (
    <div className="p-12 flex justify-center">
      <Flex justify="center" align="center">
        <Box className="...">1</Box>
        <Box className="...">2</Box>
        <Box className="...">3</Box>
      </Flex>
    </div>
  );
}
