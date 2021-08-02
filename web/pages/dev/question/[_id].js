import { useRouter } from 'next/router'
import ErrorPage from 'next/error'
import { Layout } from '@/components/layout'
import { Calculator } from '@/components/calculator'
import {Spinner} from '@chakra-ui/react'
import { getAllQuestionsDev } from '@/lib/sanity-api'


export default function QuestionPage({ question, questions, siteSettings, slug, position }) {
  const router = useRouter()
  if (!router.isFallback && !question?._id) {
    return <ErrorPage statusCode={404} />
  }
  if (router.isFallback) {
    return <Spinner size="md"/>
  }

  return (
    <Layout siteSettings={siteSettings} position={position} totalQuestions={questions.length} dev={true}>
     {questions && <Calculator slug={position} questions={questions} question={question} dev={true} />}
    </Layout>
  )
}

export const getStaticProps = async ({ params }) => {
  const slug = params?._id
  const pages = await getAllQuestionsDev()
  const question = pages?.tuitionCalculator?.questions?.find((s) => s._id === slug) || null
  const questions = pages?.tuitionCalculator?.questions || null
  const position = questions?.indexOf(question)
  const siteSettings = pages?.siteSettings || null

  return {
    props: {
      question,
      questions,
      siteSettings,
      slug,
      position
    },
    revalidate: 30,
  }
}

export async function getStaticPaths () {
  const pageData = await getAllQuestionsDev()
  const pages = pageData?.tuitionCalculator?.questions?.map((q) => ({ params: { _id: q._id } }))
  return {
    paths: pages || null,
    fallback: false
  }
}