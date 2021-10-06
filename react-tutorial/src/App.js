import React from "react";
import Header from './Components/Header/Header';
import Hero from "./Components/Hero/Hero";
import Card from "./Card";
import hun from './static/images/hun-01.svg';
import horongo from './static/images/horongo-01.svg';
import tsag from './static/images/tcag-01.svg';
import assets from './static/images/Asset6.svg';

const data = [
  {
    image: tsag,
    title: "Цаг",
    text: 'Нийт 93,081 харилцагчийн зээл авахад зарцуулах байсан 279,000 цаг буюу 31,8 жил хэмнэсэн'
  },
  {
    image: horongo,
    title: "Тэрбум төгрөг",
    text: 'Нийт 93,081 харилцагчийн зээл авахад зарцуулах шууд бус зардал буюу 1,5 тэрбум төгрөгийг хэмнэсэн'
  },
  {
    image: hun,
    title: "Сая хүн",
    text: 'Нийт 2,5 сая хүний хооронд үүсэх байсан зээлийн харилцааг ганцхан товчоор шийдвэрлэсэн 835,110 Барьцаа'
  },
  {
    image: assets,
    title: "Барьцаа",
    text: '93,081 харилцагч 835 мянга гаруй удаа зээл авсан бөгөөд мөн хэмжээний хөрөнгийг барьцаалах байсан асуудлыг шийдэж чадсан'
  }
]

const App = () => {
  return <>
    <Header />
    <Hero />
    <div className="container my-6 mx-auto flex justify-between">
      {
        data.map((item, index) => (
          <Card key={`card-${index}`} icon={item.image} title={item.title} text={item.text}>
          </Card>
        ))
      }
    </div>
  </>
}

export default App;