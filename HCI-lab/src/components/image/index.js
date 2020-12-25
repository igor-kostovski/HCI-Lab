import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const Image = ({ name, className }) => {
    const data = useStaticQuery(graphql`
        query {
            logo: file(relativePath: {eq: "logo.png"}) {
                childImageSharp {
                    fluid(maxWidth: 250) {
                        ...GatsbyImageSharpFluid
                      }
                }
            }
            facebook: file(relativePath: {eq: "facebook.png"}) {
                childImageSharp {
                    fluid(maxWidth: 250) {
                        ...GatsbyImageSharpFluid
                      }
                }
            }
            youtube: file(relativePath: {eq: "youtube.png"}) {
                childImageSharp {
                    fluid(maxWidth: 250) {
                        ...GatsbyImageSharpFluid
                      }
                }
            }
            instagram: file(relativePath: {eq: "instagram.png"}) {
                childImageSharp {
                    fluid(maxWidth: 250) {
                        ...GatsbyImageSharpFluid
                      }
                }
            }
            eu: file(relativePath: {eq: "eu.png"}) {
                childImageSharp {
                    fluid(maxWidth: 1000) {
                        ...GatsbyImageSharpFluid
                      }
                }
            }
            exterior2: file(relativePath: {eq: "exterior2.jpg"}) {
                childImageSharp {
                    fluid(maxWidth: 500) {
                        ...GatsbyImageSharpFluid
                      }
                }
            }
            exterior3: file(relativePath: {eq: "exterior3.jpg"}) {
                childImageSharp {
                    fluid(maxWidth: 500) {
                        ...GatsbyImageSharpFluid
                      }
                }
            }
        }
    `)
    return <Img className={className} fluid={data[name].childImageSharp.fluid} />
}

export default Image