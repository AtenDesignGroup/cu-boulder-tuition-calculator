import { useStateMachine } from 'little-state-machine'
import CountUp from 'react-countup'
import { Counter } from '@/components/counter'

import { Heading, Box, Text, Flex } from '@chakra-ui/react'

export function Results() {
  const { state } = useStateMachine()
  const { questions } = state.calculator
  return (
    <Box>
      <Box mb={4}>
        <Heading size="md" mb={4} color="gray.600">
          My Results
        </Heading>
        <Heading mb={2}>Estimated cost for one year (or one semester)</Heading>
      </Box>

      <Box mb={8}>
        <Heading mb={2}>
          Total <Counter target={28886} duration={2} />
        </Heading>
        <Text mb={3}>
          Includes: Tuition, fees, living on campus, and books and supplies are considered direct
          educational costs. Tuition, fees and on-campus housing are billed by the university on the
          tuition and fee bill.
        </Text>{' '}
        <Text mb={3}>
          Direct costs are included in the Cost of Attendance for financial aid purposes.
        </Text>
      </Box>

      <Box mb={8}>
        <Heading mb={2}>
          Tuition <Counter target={10728} duration={2} />
        </Heading>
        <Text mb={3}>
          domestic Colorado resident undergraduate College of Arts & Sciences, All Others (Educ,
          ENVD, etc.), 15 credit hours, two semesters
        </Text>

        <Text mb={3}>
          If Colorado resident undergraduate, include this statement: This tuition rate assumes that
          you’ve applied for and authorized the College Opportunity Fund stipend to reduce your
          tuition.
        </Text>
      </Box>

      <Box mb={8}>
        <Heading mb={2}>
          Mandatory Fees <Counter target={1738} duration={2} />
        </Heading>
        <Text mb={3}>
          Mandatory fees support student services, student activities, technology, capital
          construction and need-based financial aid. Fees are charged per semester and are based on
          your college level (undergraduate or graduate), citizenship, and the number of credit
          hours and classes in which you are enrolled. Visit <a href="https://www.colorado.edu/bursar/costs/mandatory-student-fees" target='_blank' rel="noreferrer noopener">Mandatory Student Fees</a> for details.
        </Text>
      </Box>

      <Box mb={8}>
        <Heading mb={2}>
          On-Campus Housing and Meals <Counter target={15220} duration={2} />
        </Heading>
        <Text mb={3}>
          This cost is for a standard double room (roommate(s) and community bath) with 19 meals per
          week. Please visit <a href="https://www.colorado.edu/living/" target='_blank' rel="noreferrer noopener">Housing & Dining</a> to explore residence hall living.
        </Text>

        <Text mb={3}>
        <a href="https://www.colorado.edu/living/" target='_blank' rel="noreferrer noopener">Housing Security Deposit</a> $300 (one-time deposit submitted with on-campus housing
          application)
        </Text>
        <Text mb={3}><a href="https://living.colorado.edu/" target='_blank' rel="noreferrer noopener">Residential Academic Program</a> optional $425 per year</Text>
      </Box>

      <Box mb={8}>
        <Heading mb={2}>
          or Living with parents $4,626 or Off Campus <Counter target={13515} duration={2} />
        </Heading>
        <Text mb={3}>
          This estimate is determined by the Colorado Department of Education, the Office of
          Financial Aid and Off-Campus Housing & Neighborhood Relations for Cost of Attendance.
        </Text>
      </Box>

      <Box mb={8}>
        <Heading mb={2}>
          Books and Supplies <Counter target={1200} duration={2} />
        </Heading>
        <Text mb={3}>
          Costs for books and supplies vary widely depending on your college, school or program.
          This estimate is determined by the Colorado Department of Education and the Office of
          Financial Aid, and it is included in the Cost of Attendance. Books and supplies purchased
          from the CU Book Store (up to $1,500 per semester) can be charged to the tuition bill.
        </Text>
      </Box>

      <Box mb={8}>
        <Heading mb={2}>
          Health Insurance <Counter target={3896} duration={2} /> or BuffCare{' '}
          <Counter target={225} duration={2} />
        </Heading>
      </Box>

      <Box mb={8}>
        <Heading mb={2}>Other Costs</Heading>
        <Text mb={3}>
          Personal Costs <Counter target={1440} duration={2} />
        </Text>
        <Text mb={3}>
          Transportation Costs <Counter target={1152} duration={2} /> (if nonres, then{' '}
          <Counter target={1814} duration={2} />)
        </Text>
        <Text mb={3}>
          Personal and transportation estimates are determined by the Colorado Department of
          Education and the Office of Financial Aid for Cost of Attendance.
        </Text>
      </Box>

      <Box mb={8}>
        <Heading mb={2}>New Students:</Heading>
        <Text mb={3}>
          Application Fee: <Counter target={50} duration={2} /> (undergrad domestic students), <Counter target={70} duration={2} /> (undergrad international students)
        </Text>
        <Text mb={3}>
          Confirmation Deposit <Counter target={200} duration={2} /> (one-time deposit, confirms your intent to enroll)
        </Text>
        <Text mb={3}>New Student Fee <Counter target={232} duration={2} /> (one-time fee upon entering a degree program)</Text>

        <Text mb={3}>Parking Permit optional <Counter target={180} duration={2} />-<Counter target={213} duration={2} /></Text>
      </Box>
    </Box>
  )
}
