import Review from "./Review";

const App = () => {
  return <main>
    <section className="container">
      <div className="title">
        <h2>our reviews</h2>
        <div className="title-underline"></div>
      </div>
      <Review />
    </section>
  </main>;
};

export default App;