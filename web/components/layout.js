import { useRef } from 'react'
import { isStringEmpty } from '@/utils/helpers'
import { Head } from '@/components/head'
import Footer from '@/components/footer'
import { Debug } from '@/components/calculator/debug'
import {
  Flex,
  Button,
  Box,
  Drawer,
  DrawerBody,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  useDisclosure,
  Alert,
  AlertIcon
} from '@chakra-ui/react'

export function Layout({ children, siteSettings, dev, position, totalQuestions, status }) {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const btnRef = useRef()

  return (
    <>
      <Head
        title={siteSettings?.seoSettings?.title || ''}
        description={siteSettings?.seoSettings?.description || ''}
      />
      {dev && (
        <Alert status="warning" w="100%" position="fixed" top="0" zIndex="100">
          <AlertIcon />
          You are currently using the dev app.
        </Alert>
      )}
      <Flex
        height="100vh"
        flexDir="column"
        maxWidth="1120px"
        mx="auto"
        px="15px"
        pt="3rem"
        mt={dev ? '48px' : '0'}
      >
        {children}

        {dev && (
          <Box position="fixed" bottom="0" left="0" width="100%" pb="4" pl="4">
            <Button
              ref={btnRef}
              colorScheme="blue"
              onClick={onOpen}
              display="inline-block"
              isFullWidth={false}
              variant="outline"
              size="sm"
            >
              Debug
            </Button>
          </Box>
        )}

        <Footer />
      </Flex>
      {dev && (
        <Drawer
          isOpen={isOpen}
          placement="right"
          onClose={onClose}
          finalFocusRef={btnRef}
          size="sm"
          blockScrollOnMount={false}
        >
          <DrawerOverlay>
            <DrawerContent>
              <DrawerCloseButton />
              <DrawerHeader>Debug App</DrawerHeader>
              <DrawerBody>
                <Debug dev="true"/>
              </DrawerBody>
            </DrawerContent>
          </DrawerOverlay>
        </Drawer>
      )}
    </>
  )
}
