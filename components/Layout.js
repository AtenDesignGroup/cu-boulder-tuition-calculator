import { useRef } from 'react'
import { useRouter } from 'next/router'

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
  const router = useRouter()
  return (
    <>
      <Head
        title={siteSettings?.seoSettings?.title || ''}
        description={siteSettings?.seoSettings?.description || ''}
      />
      <Flex height="100vh" flexDir="column" maxWidth='890px' mx='auto' px='6' py='6'>
        {children}

        <Box position='fixed' bottom='0' left='0' width='100%' background='#fff' pb='4' pl='4'>
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
