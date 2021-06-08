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
  Progress
} from '@chakra-ui/react'

export function Layout({ children, siteSettings, position, totalQuestions, status }) {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const btnRef = useRef()

  return (
    <>
      <Head
        title={siteSettings?.seoSettings?.title || ''}
        description={siteSettings?.seoSettings?.description || ''}
      />
    {/* isStringEmpty(status) ? <Progress value={(position + 1) / totalQuestions * 100} /> : <Progress value={status} /> */}
      <Flex height="100vh" flexDir="column" maxWidth='1120px' mx='auto' px='15px' py='50'>
        {children}

        <Box position='fixed' bottom='0' left='0' width='100%' pb='4' pl='4' >
        <Button ref={btnRef} colorScheme="blue" onClick={onOpen} display='inline-block' isFullWidth={false} variant="outline" size="sm">
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
