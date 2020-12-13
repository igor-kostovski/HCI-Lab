import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const Logo = () => {
    const data = useStaticQuery(graphql`
        query {
            myImage: file(relativePath: {eq: "logo.png"}) {
                childImageSharp {
                    fluid(maxWidth: 250) {
                        ...GatsbyImageSharpFluid
                      }
                }
            }
        }
    `)
    return <Img fluid={data.myImage.childImageSharp.fluid}/>
}

export default Logo