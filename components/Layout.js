import { useRef } from 'react'

import { Head } from '@/components/Head'
import Footer from '@/components/Footer'
import { Debug } from '@/components/calculator/debug'
import {
  Text,
  Flex,
  Button,
  Box,
  Input,
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  useDisclosure
} from '@chakra-ui/react'

export function Layout({ children, siteSettings }) {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const btnRef = useRef()
  return (
    <>
      <Head
        title={siteSettings?.seoSettings?.title || ''}
        description={siteSettings?.seoSettings?.description || ''}
      />
      <Flex height="100vh" flexDir="column">
        {children}
        <Box paddingY={'5rem'}  width='100%' maxW='860px' mx='auto'>
        <Button ref={btnRef} colorScheme="blue" onClick={onOpen} display='inline-block' isFullWidth={false} variant="outline">
          Debug
        </Button>
        </Box>
        <Footer />
      </Flex>
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
              <Debug />
            </DrawerBody>
          </DrawerContent>
        </DrawerOverlay>
      </Drawer>
    </>
  )
}
