import { FC } from "react"

import Directory from "../../components/Directory/Directory.component"
import MainBanner from "../../components/MainBanner/MainBanner.component"
import ServicesList from "../../components/ServicesList/ServicesList.component"

import useScreenWidth from "../../hook/useScreenWidth"

import Curry from "../../assets/images/cover/curry.jpg"
import Deserts from "../../assets/images/cover/deserts.jpg"
import Drinks from "../../assets/images/cover/drinks.jpg"
import Pasta from "../../assets/images/cover/pasta.jpg"
import Pizza from "../../assets/images/cover/pizza.jpg"
import Salad from "../../assets/images/cover/salad.jpg"
import Soup from "../../assets/images/cover/soup.jpg"
import ImageBanner1 from "../../assets/images/home/home-slide-1.jpg"
import ImageBanner1_50 from "../../assets/images/home/home-slide-1_50.jpg"

const Home: FC = () => {
  const isMobile = !useScreenWidth(961)
  const preload = isMobile ? ImageBanner1_50 : ImageBanner1

  const img = new Image()
  img.src = preload

  const categories = [
    {
      id: 1,
      title: "Soup",
      imageUrl: Soup,
    },
    {
      id: 2,
      title: "Salad",
      imageUrl: Salad
    },
    {
      id: 3,
      title: "Pizza",
      imageUrl: Pizza
    },
    {
      id: 4,
      title: "Pasta",
      imageUrl: Pasta
    },
    {
      id: 5,
      title: "Curry",
      imageUrl: Curry
    },
    {
      id: 6,
      title: "Desert",
      imageUrl: Deserts
    },
    {
      id: 7,
      title: "Drinks",
      imageUrl: Drinks
    }
  ]

  return (
    <>
      <MainBanner />
      <ServicesList />
      <Directory categories={categories} />
    </>
  )
}

export default Home
