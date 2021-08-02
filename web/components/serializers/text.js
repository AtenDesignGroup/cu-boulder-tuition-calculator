import { PortableText } from '@/utils/sanity'
import serializers from '@/components/serializers/serializers'

export function Text ({ blocks }) {
  // console.log({ blocks })
  // TODO: Test this conditional logic out more to make sure it's SOLID
  return (blocks?.length && blocks[0]?.children.length) ? <PortableText blocks={blocks} serializers={serializers} /> : null
}
