import React from "react";
import Header from './Components/Header/Header';
import Main from "./Components/Main/Main";
import Hero from "./Components/Hero/Hero";

const data = [
  {
    image: "https://www.mnfansubs.net/resource/mnfansubs/image/2021/10/01/ze4mvgubpp99yzdm/_m.jpg",
    title: "Title"
  },
  {
    image: "https://www.mnfansubs.net/resource/mnfansubs/image/2021/10/01/ze4mvgubpp99yzdm/_m.jpg",
    title: "Title"
  },
  {
    image: "https://www.mnfansubs.net/resource/mnfansubs/image/2021/10/01/ze4mvgubpp99yzdm/_m.jpg",
    title: "Title"
  },
  {
    image: "https://www.mnfansubs.net/resource/mnfansubs/image/2021/10/01/ze4mvgubpp99yzdm/_m.jpg",
    title: "Title"
  },
  {
    image: "https://www.mnfansubs.net/resource/mnfansubs/image/2021/10/01/ze4mvgubpp99yzdm/_m.jpg",
    title: "Title"
  },
  {
    image: "https://www.mnfansubs.net/resource/mnfansubs/image/2021/10/01/ze4mvgubpp99yzdm/_m.jpg",
    title: "Title"
  },
  {
    image: "https://www.mnfansubs.net/resource/mnfansubs/image/2021/10/01/ze4mvgubpp99yzdm/_m.jpg",
    title: "Title"
  },
  {
    image: "https://www.mnfansubs.net/resource/mnfansubs/image/2021/10/01/ze4mvgubpp99yzdm/_m.jpg",
    title: "Title"
  },
  {
    image: "https://www.mnfansubs.net/resource/mnfansubs/image/2021/10/01/ze4mvgubpp99yzdm/_m.jpg",
    title: "Title"
  }
]

const App = () => {
  return <>
    <Header />
    <Hero />
    <Main data={data} />
  </>
}

export default App;