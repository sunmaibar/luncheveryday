import React from "react"
import { Link } from "gatsby"
import Layout from "../components/Layout"
import SimpleHero from "../components/SimpleHero"
import Banner from "../components/Banner"
import About from "../components/Home/About"
import Services from "../components/Home/Services"

export default function Home() {
  return (
    <Layout>
      <SimpleHero>
        <Banner
          title="信義區巷弄美食情報"
          info="在這國際金融重鎮中，地方上的媽媽已經準備好了"
        >
          <Link to="/lunches" className="btn-white">
            看看有什麼好料的
          </Link>
        </Banner>
      </SimpleHero>
      <About />
      <Services />
    </Layout>
  )
}
