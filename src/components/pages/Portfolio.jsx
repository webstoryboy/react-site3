import React, { useEffect, useState } from "react";
import Header from "../layout/Header";
import Footer from "../layout/Footer";
import Contents from "../layout/Contents";
import PortCont from "../includes/PortCont";
import Title from "../layout/Title";
import Contact from "../layout/Contact";
// import axios from "axios";

// function Portfolio() {
//   return (
//     <>
//       <Header />
//       <Contents>
//         <PortCont />
//       </Contents>
//       <Footer />
//     </>
//   );
// }

// class Portfolio extends React.Component {
//   state = {
//     ports: [],
//   };

//   getPorts = async () => {
//     const {
//       data: {
//         data: { ports },
//       },
//     } = await axios.get(
//       "https://webstoryboy.github.io/react5001/src/assets/json/portfolio.json"
//     );
//     //console.log(data.data.data.ports);
//     this.setState({ ports });
//   };

//   componentDidMount() {
//     this.getPorts();
//   }

//   render() {
//     const { ports } = this.state;
//     return (
//       <>
//         <Header />
//         <Contents>
//           <PortCont ports={ports} />
//         </Contents>
//         <Footer />
//       </>
//     );
//   }
// }

function Portfolio() {
  const [ports, setPorts] = useState([]);

  useEffect(() => {
    const requestOption = {
      method: "GET",
      redirect: "follow",
    };
    fetch(
      "https://webstoryboy.github.io/react5001/src/assets/json/portfolio.json",
      requestOption
    )
      .then((response) => response.json())
      //.then((result) => console.log(result.data.ports))
      .then((result) => setPorts(result.data.ports))
      .then((error) => console.log("error", error));
  }, []);

  return (
    <>
      <Header />
      <Contents>
        <Title title={["portrolio", "site"]} />
        <PortCont ports={ports} />
        <Contact />
      </Contents>
      <Footer />
    </>
  );
}

export default Portfolio;
