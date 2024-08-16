import { Flex, Box, FlexProps } from "rizzui";

export function FlexLayout({ justify, align, gap, className }: FlexProps) {
  return (
    <Flex
      justify={justify}
      align={align}
      gap={gap}
      className={className}
    >
      {[1, 2, 3].map((i) => (
        <Box
          key={i}
          className="border border-muted rounded-md size-16 text-xl font-semibold flex justify-center items-center shadow"
        >
          {i}
        </Box>
      ))}
    </Flex>
  );
}

export function FlexLayoutAlign({ justify, align, gap, className }: FlexProps) {
  return (
    <Flex
      justify={justify}
      align={align}
      gap={gap}
      className={className}
    >
      {[1, 2, 3].map((i) => (
        <Box
          key={i}
          className="border border-muted rounded-md w-16 text-xl font-semibold flex justify-center items-center shadow"
          style={{ height: `${(i + 1) * 20}px` }}
        >
          {i}
        </Box>
      ))}
    </Flex>
  );
}
