import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import BackgroundImage from "gatsby-background-image"

const BackgroundImg = ({ name, className }) => {
    const data = useStaticQuery(graphql`
        query {
            exterior1: file(relativePath: {eq: "exterior1.jpg"}) {
                childImageSharp {
                    fluid(maxWidth: 1500) {
                        ...GatsbyImageSharpFluid
                      }
                }
            }
            croatia1: file(relativePath: {eq: "croatia1.jpg"}) {
                childImageSharp {
                    fluid(maxWidth: 500) {
                        ...GatsbyImageSharpFluid
                      }
                }
            }
            croatia2: file(relativePath: {eq: "croatia2.jpeg"}) {
                childImageSharp {
                    fluid(maxWidth: 500) {
                        ...GatsbyImageSharpFluid
                      }
                }
            }
            croatia3: file(relativePath: {eq: "croatia3.jpg"}) {
                childImageSharp {
                    fluid(maxWidth: 500) {
                        ...GatsbyImageSharpFluid
                      }
                }
            }
            croatia4: file(relativePath: {eq: "croatia4.jpeg"}) {
                childImageSharp {
                    fluid(maxWidth: 500) {
                        ...GatsbyImageSharpFluid
                      }
                }
            }
        }
    `)
    return <BackgroundImage className={className} fluid={data[name].childImageSharp.fluid} style={{height: `100%`}}/>
}

export default BackgroundImg