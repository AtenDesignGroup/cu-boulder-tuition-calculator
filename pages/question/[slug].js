import { useRouter } from 'next/router'
import ErrorPage from 'next/error'

import { Calculator } from '@/components/calculator'

import {Spinner} from '@chakra-ui/react'
import { getAllQuestions } from '@/lib/sanity-api'



export default function QuestionPage({ question, questions, siteSettings, slug }) {
  const router = useRouter()
  if (!router.isFallback && !question?._id) {
    return <ErrorPage statusCode={404} />
  }
  if (router.isFallback) {
    return <Spinner size="md"/>
  }

  return (
<>
    {questions && <Calculator slug={slug} questions={questions} question={question} />}
</>
    )
}

export const getStaticProps = async ({ params }) => {
  const slug = parseInt(params?.slug)
  const pages = await getAllQuestions()
  const question = pages?.tuitionCalculator?.questions[slug] || null
  const questions = pages?.tuitionCalculator?.questions || null
  const siteSettings = pages?.siteSettings || null
  console.log({pages})
  return {
    props: {
      question,
      questions,
      siteSettings,
      slug
    },
    revalidate: 30,
  }
}

export async function getStaticPaths () {
  const pageData = await getAllQuestions()

  const pages = pageData?.tuitionCalculator?.questions?.map((q) => ({ params: { slug: q._id } }))
  return {
    paths: pages || null,
    fallback: true
  }
}