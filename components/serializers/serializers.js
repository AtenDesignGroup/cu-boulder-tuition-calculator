import React from 'react'
import Link from 'next/link'

const serializers = {

  marks: {

    link: ({ mark, children }) => {
      const { blank, href } = mark
      if (!href) {
        return null
      }
      return blank === true ? (
        <>
          {href.includes('https') || href.includes('http') ? (
            <a href={href} target='_blank' rel='noopener noreferrer'>
              {children}
            </a>
          ) : (
            <a href={href}>{children}</a>
          )}
        </>
      ) : (
        <>
          {href.includes('https') || href.includes('http') || href.includes('tel') || href.includes('mailto') ? (
            <a href={href}>{children}</a>
          ) : (
            <Link href={href}>
              <a>{children}</a>
            </Link>
          )}
        </>
      )
    }
  },
  list: (props) => {
    // console.log({ props })
    switch (props.type) {
      case 'number': {
        return <ol>{props.children}</ol>
      }
      case 'bullet': {
        return <ul>{props.children}</ul>
      }
      default: {
        return <ul>{props.children}</ul>
      }
    }
  }
}

export default serializers
