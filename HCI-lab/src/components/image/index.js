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
                    fluid(maxWidth: 2000) {
                        ...GatsbyImageSharpFluid
                      }
                }
            }
            nightImage: file(relativePath: {eq: "nightImage.jpg"}) {
                childImageSharp {
                    fluid(maxWidth: 2000) {
                        ...GatsbyImageSharpFluid
                      }
                }
            }
            groundPlan: file(relativePath: {eq: "groundPlan.jpg"}) {
                childImageSharp {
                    fluid(maxWidth: 2000) {
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
            firstPerson: file(relativePath: {eq: "firstPerson.jpg"}) {
                childImageSharp {
                    fluid(maxWidth: 2000) {
                        ...GatsbyImageSharpFluid
                      }
                }
            }
            frogPerspective: file(relativePath: {eq: "frogPerspective.jpg"}) {
                childImageSharp {
                    fluid(maxWidth: 2000) {
                        ...GatsbyImageSharpFluid
                      }
                }
            }
            nextToIsland: file(relativePath: {eq: "nextToIsland.jpg"}) {
                childImageSharp {
                    fluid(maxWidth: 2000) {
                        ...GatsbyImageSharpFluid
                      }
                }
            }
            openSeaWithoutSails: file(relativePath: {eq: "openSeaWithoutSails.jpg"}) {
                childImageSharp {
                    fluid(maxWidth: 2000) {
                        ...GatsbyImageSharpFluid
                      }
                }
            }
            openSeaWithSails: file(relativePath: {eq: "openSeaWithSails.jpg"}) {
                childImageSharp {
                    fluid(maxWidth: 2000) {
                        ...GatsbyImageSharpFluid
                      }
                }
            }
            bed: file(relativePath: {eq: "bed.png"}) {
                childImageSharp {
                    fluid(maxWidth: 150) {
                        ...GatsbyImageSharpFluid
                      }
                }
            }
            sailsImage: file(relativePath: {eq: "sailsImage.jpg"}) {
                childImageSharp {
                    fluid(maxWidth: 2000) {
                        ...GatsbyImageSharpFluid
                      }
                }
            }
            livingRoom: file(relativePath: {eq: "livingRoom.jpg"}) {
                childImageSharp {
                    fluid(maxWidth: 2000) {
                        ...GatsbyImageSharpFluid
                      }
                }
            }
            livingAreaDay: file(relativePath: {eq: "livingAreaDay.jpg"}) {
                childImageSharp {
                    fluid(maxWidth: 2000) {
                        ...GatsbyImageSharpFluid
                      }
                }
            }
            livingAreaNight: file(relativePath: {eq: "livingAreaNight.jpg"}) {
                childImageSharp {
                    fluid(maxWidth: 2000) {
                        ...GatsbyImageSharpFluid
                      }
                }
            }
            masterBedroom: file(relativePath: {eq: "masterBedroom.jpg"}) {
                childImageSharp {
                    fluid(maxWidth: 2000) {
                        ...GatsbyImageSharpFluid
                      }
                }
            }
            masterBathroom: file(relativePath: {eq: "masterBathroom.jpg"}) {
                childImageSharp {
                    fluid(maxWidth: 2000) {
                        ...GatsbyImageSharpFluid
                      }
                }
            }
            secondBedroom: file(relativePath: {eq: "secondBedroom.jpg"}) {
                childImageSharp {
                    fluid(maxWidth: 2000) {
                        ...GatsbyImageSharpFluid
                      }
                }
            }
            secondBathroom: file(relativePath: {eq: "secondBathroom.jpg"}) {
                childImageSharp {
                    fluid(maxWidth: 2000) {
                        ...GatsbyImageSharpFluid
                      }
                }
            }
            kidsBedroom: file(relativePath: {eq: "kidsBedroom.jpg"}) {
                childImageSharp {
                    fluid(maxWidth: 2000) {
                        ...GatsbyImageSharpFluid
                      }
                }
            }
            mainDeckFrontDay: file(relativePath: {eq: "mainDeckFrontDay.jpg"}) {
                childImageSharp {
                    fluid(maxWidth: 2000) {
                        ...GatsbyImageSharpFluid
                      }
                }
            }
            mainDeckFrontNight: file(relativePath: {eq: "mainDeckFrontNight.jpg"}) {
                childImageSharp {
                    fluid(maxWidth: 2000) {
                        ...GatsbyImageSharpFluid
                      }
                }
            }
            mainDeckFrontNight2: file(relativePath: {eq: "mainDeckFrontNight2.jpg"}) {
                childImageSharp {
                    fluid(maxWidth: 2000) {
                        ...GatsbyImageSharpFluid
                      }
                }
            }
            mainDeckBehind: file(relativePath: {eq: "mainDeckBehind.jpg"}) {
                childImageSharp {
                    fluid(maxWidth: 2000) {
                        ...GatsbyImageSharpFluid
                      }
                }
            }
            mainDeckSide: file(relativePath: {eq: "mainDeckSide.jpg"}) {
                childImageSharp {
                    fluid(maxWidth: 2000) {
                        ...GatsbyImageSharpFluid
                      }
                }
            }
            outsideTableDay: file(relativePath: {eq: "outsideTableDay.jpg"}) {
                childImageSharp {
                    fluid(maxWidth: 2000) {
                        ...GatsbyImageSharpFluid
                      }
                }
            }
            outsideTableDay2: file(relativePath: {eq: "outsideTableDay2.jpg"}) {
                childImageSharp {
                    fluid(maxWidth: 2000) {
                        ...GatsbyImageSharpFluid
                      }
                }
            }
            outsideTableNight: file(relativePath: {eq: "outsideTableNight.jpg"}) {
                childImageSharp {
                    fluid(maxWidth: 2000) {
                        ...GatsbyImageSharpFluid
                      }
                }
            }
            cog: file(relativePath: {eq: "cog.png"}) {
                childImageSharp {
                    fluid(maxWidth: 150) {
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
            deck: file(relativePath: {eq: "deck.png"}) {
                childImageSharp {
                    fluid(maxWidth: 150) {
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
            entertainment: file(relativePath: {eq: "entertainment.png"}) {
                childImageSharp {
                    fluid(maxWidth: 150) {
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
            jetSki: file(relativePath: {eq: "jetSki.png"}) {
                childImageSharp {
                    fluid(maxWidth: 150) {
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
            bag: file(relativePath: {eq: "bag.png"}) {
                childImageSharp {
                    fluid(maxWidth: 150) {
                        ...GatsbyImageSharpFluid
                      }
                }
            }
            cancel: file(relativePath: {eq: "cancel.png"}) {
                childImageSharp {
                    fluid(maxWidth: 150) {
                        ...GatsbyImageSharpFluid
                      }
                }
            }
            sailing: file(relativePath: {eq: "sailing.png"}) {
                childImageSharp {
                    fluid(maxWidth: 150) {
                        ...GatsbyImageSharpFluid
                      }
                }
            }
            payment: file(relativePath: {eq: "payment.png"}) {
                childImageSharp {
                    fluid(maxWidth: 150) {
                        ...GatsbyImageSharpFluid
                      }
                }
            }
            dish: file(relativePath: {eq: "dish.png"}) {
                childImageSharp {
                    fluid(maxWidth: 150) {
                        ...GatsbyImageSharpFluid
                      }
                }
            }
            helmet: file(relativePath: {eq: "helmet.png"}) {
                childImageSharp {
                    fluid(maxWidth: 150) {
                        ...GatsbyImageSharpFluid
                      }
                }
            }
        }
    `)
    return (isBackground ? <BackgroundImage className={className} fluid={data[name].childImageSharp.fluid} style={{ height: `100%` }} /> : <Img className={className} fluid={data[name].childImageSharp.fluid} />)
}

export default Image