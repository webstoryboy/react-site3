import React from "react";
import Header from "../layout/Header";
import Footer from "../layout/Footer";
import Contents from "../layout/Contents";
import ReferCont from "../includes/ReferCont";
import Loading from "../layout/Loading";
import Title from "../layout/Title";
import Contact from "../layout/Contact";
import axios from "axios";

// function Reference() {
//   return (
//     <>
//       <Header />
//       <Contents>
//         <ReferCont />
//       </Contents>
//       <Footer />
//     </>
//   );
// }

class Reference extends React.Component {
  state = {
    isLoading: true,
    refers: [],
  };

  getRefers = async () => {
    const {
      data: {
        data: { htmlRefer },
      },
    } = await axios.get(
      "https://webstoryboy.github.io/react2022/src/assets/json/refer.json"
    );
    this.setState({ refers: htmlRefer, isLoading: false });
    //console.log(html);
  };

  componentDidMount() {
    setTimeout(() => {
      this.getRefers();
    }, 1000);
  }

  render() {
    const { isLoading, refers } = this.state;

    return (
      <>
        {isLoading ? (
          <Loading />
        ) : (
          <>
            <Header />
            <Contents>
              <Title title={["Reference", "book"]} />
              <section className="refer__cont">
                <div className="container">
                  <div className="refer__inner">
                    <h2>html</h2>
                    <div className="refer__list">
                      {refers.map((refer) => (
                        <ReferCont
                          key={refer.id}
                          id={refer.id}
                          title={refer.title}
                          desc={refer.desc}
                          use={refer.use}
                        />
                      ))}
                    </div>
                  </div>
                </div>
              </section>
              <Contact />
            </Contents>
            <Footer />
          </>
        )}
      </>
    );
  }
}

export default Reference;
