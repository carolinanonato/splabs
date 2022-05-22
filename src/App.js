import Hero from "./Components/Hero";
import Cases from "./Components/Cases";
import Video from "./Components/Video";
import Form from "./Components/Form";
import Footer from "./Components/Footer";
import data from './data.js'
import CasesCard from "./Components/CasesCard";
import './Styles/Cases.scss'

const test = data[0].cases

function App() {

  const cases = test.map(item => {
    return (
      <CasesCard
        key={item.link}
        title={item.title}
        description={item.description}
      />

    )
  })
  return (
    <div>
      <Hero />
      <Cases />
      <section className="cases">{cases}</section>
      <Video />
      <Form />
      <Footer />

    </div>
  );
}

export default App;
