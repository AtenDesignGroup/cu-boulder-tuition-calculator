import {
  Avatar,
  Box,
  Button,
  Checkbox,
  FormControl,
  FormHelperText,
  FormLabel,
  FormErrorMessage,
  Tag,
  TagLabel,
  Flex,
  Heading,
  HStack,
  Input,
  Stack,
  StackDivider,
  Text,
  Textarea,
  Select,
  useColorModeValue,
  VStack,
} from "@chakra-ui/react";
export function Question() {
  return (
    <FormControl isRequired>
      <Flex alignItems="baseline" mb=".25rem">
        <Tag
          size="md"
          borderRadius="full"
          variant="solid"
          colorScheme="green"
          mr=".5rem"
        >
          <TagLabel fontWeight="bold" htmlFor="questionExample">Q1.</TagLabel>
        </Tag>
        <FormLabel fontSize="1.2rem">Question title goes here</FormLabel>
      </Flex>
      <Select id="" name="">
        <option>Choose an option</option>
        <option>Option one</option>
        <option>Option two</option>
        <option>Option three</option>
      </Select>
      <FormHelperText>Add the help text here</FormHelperText>
      <FormErrorMessage>Error message shown here</FormErrorMessage>
    </FormControl>
  );
}
