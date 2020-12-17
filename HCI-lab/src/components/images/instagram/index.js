import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const Instagram = () => {
    const data = useStaticQuery(graphql`
        query {
            myImage: file(relativePath: {eq: "instagram.png"}) {
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

export default Instagram