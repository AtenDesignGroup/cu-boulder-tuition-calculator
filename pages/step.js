import {
  Box,
  BoxProps,
  Avatar,
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

import { Step } from "@/components/step/Step";
import { StepContent } from "@/components/step/StepContent";
import { Steps } from "@/components/step/Steps";
import { useSteps } from "@/components/step/useSteps";

const FormExample = () => {
  return (
    <>
      <Text fontSize="sm" mb=".75rem">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua.
      </Text>
      <FormControl isRequired>
        <Select id="" name="">
          <option>Choose an option</option>
          <option>Option one</option>
          <option>Option two</option>
          <option>Option three</option>
        </Select>
        <FormHelperText>Add the help text here</FormHelperText>
        <FormErrorMessage>Error message shown here</FormErrorMessage>
      </FormControl>
    </>
  );
};

export default function StepPage({ siteSettings }) {
  const { nextStep, prevStep, reset, activeStep } = useSteps({
    initialStep: 0,
  });

  return (
    <Box mx="auto" maxW="2xl" py="10" px={{ base: "6", md: "8" }} minH="400px">
      <Steps activeStep={activeStep}>
        <Step title="I am a/an">
          <StepContent>
            <Stack shouldWrapChildren spacing="4">
              <FormExample />
              <HStack>
                <Button size="sm" variant="ghost" isDisabled>
                  Back
                </Button>
                <Button size="sm" onClick={nextStep}>
                  Next
                </Button>
              </HStack>
            </Stack>
          </StepContent>
        </Step>
        <Step title="Select Residency">
          <StepContent>
            <Stack shouldWrapChildren spacing="4">
              <FormExample />
              <HStack>
                <Button size="sm" onClick={prevStep} variant="ghost">
                  Back
                </Button>
                <Button size="sm" onClick={nextStep}>
                  Next
                </Button>
              </HStack>
            </Stack>
          </StepContent>
        </Step>
        <Step title="Where will you be living?">
          <StepContent>
            <Stack shouldWrapChildren spacing="4">
              <FormExample />
              <HStack>
                <Button size="sm" onClick={prevStep} variant="ghost">
                  Back
                </Button>
                <Button size="sm" onClick={nextStep}>
                  Finish
                </Button>
              </HStack>
            </Stack>
          </StepContent>
        </Step>
      </Steps>
      <HStack
        display={activeStep === 3 ? "flex" : "none"}
        mt="10"
        spacing="4"
        shouldWrapChildren
      >
        <Text>All steps completed - you&apos;re finished</Text>
        <Button
          size="sm"
          onClick={reset}
          variant="outline"
          verticalAlign="baseline"
        >
          Reset
        </Button>
      </HStack>
    </Box>
  );
}
