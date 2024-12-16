import Flook from "./component/Flook";
import Header from "./component/Header";
import Hello from "./component/Hello";
import Cloth from "./component/Cloth";
import Featured from "./component/Featured";
import Shoe from "./component/Shoe";
import Lastly from "./component/Lastly";
import Footer from "./component/Footer";

export default function Home() {
  
  return (
    <div>
      <Header />
      <Hello />
      <Flook />
      <Shoe/>
      <Featured />
      <Cloth/>
      <Lastly/>
     <Footer/>
    </div>
  );
}

