import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import BackgroundImage from "gatsby-background-image"

const Image = ({ name, className, isBackground }) => {
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
            titleImage: file(relativePath: {eq: "titleImage.jpg"}) {
                childImageSharp {
                    fluid(maxWidth: 1500) {
                        ...GatsbyImageSharpFluid
                      }
                }
            }
            nightImage: file(relativePath: {eq: "nightImage.jpg"}) {
                childImageSharp {
                    fluid(maxWidth: 500) {
                        ...GatsbyImageSharpFluid
                      }
                }
            }
            groundPlan: file(relativePath: {eq: "groundPlan.jpg"}) {
                childImageSharp {
                    fluid(maxWidth: 500) {
                        ...GatsbyImageSharpFluid
                      }
                }
            }
            krknjasi: file(relativePath: {eq: "krknjasi.jpg"}) {
                childImageSharp {
                    fluid(maxWidth: 500) {
                        ...GatsbyImageSharpFluid
                      }
                }
            }
            zlatniRat: file(relativePath: {eq: "zlatniRat.jpeg"}) {
                childImageSharp {
                    fluid(maxWidth: 500) {
                        ...GatsbyImageSharpFluid
                      }
                }
            }
            sakarun: file(relativePath: {eq: "sakarun.jpg"}) {
                childImageSharp {
                    fluid(maxWidth: 500) {
                        ...GatsbyImageSharpFluid
                      }
                }
            }
            palmizana: file(relativePath: {eq: "palmizana.jpeg"}) {
                childImageSharp {
                    fluid(maxWidth: 500) {
                        ...GatsbyImageSharpFluid
                      }
                }
            }
            sailsImage: file(relativePath: {eq: "sailsImage.jpg"}) {
                childImageSharp {
                    fluid(maxWidth: 1000) {
                        ...GatsbyImageSharpFluid
                      }
                }
            }
            podrug: file(relativePath: {eq: "podrug.jpg"}) {
                childImageSharp {
                    fluid(maxWidth: 1000) {
                        ...GatsbyImageSharpFluid
                      }
                }
            }
            borovic: file(relativePath: {eq: "borovic.jpeg"}) {
                childImageSharp {
                    fluid(maxWidth: 1000) {
                        ...GatsbyImageSharpFluid
                      }
                }
            }
            kostovski: file(relativePath: {eq: "kostovski.jpeg"}) {
                childImageSharp {
                    fluid(maxWidth: 1000) {
                        ...GatsbyImageSharpFluid
                      }
                }
            }
            sisko: file(relativePath: {eq: "sisko.jpeg"}) {
                childImageSharp {
                    fluid(maxWidth: 1000) {
                        ...GatsbyImageSharpFluid
                      }
                }
            }
            zivkovic: file(relativePath: {eq: "zivkovic.jpg"}) {
                childImageSharp {
                    fluid(maxWidth: 1000) {
                        ...GatsbyImageSharpFluid
                      }
                }
            }
            butic: file(relativePath: {eq: "butic.jpg"}) {
                childImageSharp {
                    fluid(maxWidth: 1000) {
                        ...GatsbyImageSharpFluid
                      }
                }
            }
        }
    `)
    return (isBackground ? <BackgroundImage className={className} fluid={data[name].childImageSharp.fluid} style={{height: `100%`}}/> : <Img className={className} fluid={data[name].childImageSharp.fluid} />)
}

export default Image