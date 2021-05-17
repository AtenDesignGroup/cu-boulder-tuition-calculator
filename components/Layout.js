import { useRef } from 'react'

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
        <Box position='fixed' top='0' left='0' width='100%' background='#fff' pt='4' pl='4'>
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
