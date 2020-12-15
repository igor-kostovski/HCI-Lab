import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const Image = ({ name }) => {
    const data = useStaticQuery(graphql`
        query {
            logo: file(relativePath: {eq: "logo.png"}) {
                childImageSharp {
                    fluid(maxWidth: 250) {
                        ...GatsbyImageSharpFluid
                      }
                }
            }
        }
    `)
    return <Img fluid={data[name].childImageSharp.fluid} />
}

export default Image