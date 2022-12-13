import "./App.css";

function App() {
  // Local Components adalah components yang hanya bisa dipanggil di dalem componets yang dibuat
  const LocalComponents = () => (
    <div className="cardSatu">
      <h1>Local Components</h1>
      <p>
        "Local Components" Lorem ipsum dolor sit, amet consectetur adipisicing
        elit. Labore veritatis repellendus iure qui corrupti sunt voluptas
        necessitatibus velit? Magni, odio.
      </p>
    </div>
  );

  const LocalComponentsProps = ({ title, paragraf }) => (
    // title, dan paragraf adalah props
    <div className="cardDua">
      <h1>{title}</h1>
      <p>{paragraf}</p>
    </div>
  );

  return (
    <section className="column">
      {/* Start ROW */}
      <section className="rowSatu">
        <LocalComponents />
        <LocalComponentsProps
          title="Local Components Props"
          paragraf=" 'Local Components Props' React lets you define components as classes or functions. Components defined as classes currently provide more features which are described in detail on this page."
        />
        <GlobalComponents />
        <GlobalComponentsProps
          title="Global Components Props"
          paragraf=" Global Components Props' React lets you define components as classes or functions. Components defined as classes currently provide more features which are described in detail on this page."
        />
      </section>
      {/* End ROW */}
      <section className="rowDua">
        <LocalComponents />
        <LocalComponentsProps
          title="Local Components Props"
          paragraf=" 'Local Components Props' React lets you define components as classes or functions. Components defined as classes currently provide more features which are described in detail on this page."
        />
        <GlobalComponents />
        <GlobalComponentsProps
          title="Global Components Props"
          paragraf=" Global Components Props' React lets you define components as classes or functions. Components defined as classes currently provide more features which are described in detail on this page."
        />
      </section>
    </section>
  );
}

export default App;

// Global Components adalah components yang bisa dipanggil mana aja
export const GlobalComponents = () => {
  return (
    <div className="cardTiga">
      <h1>Global Components</h1>
      <p>
        "Global Components" Lorem ipsum dolor sit, amet consectetur adipisicing
        elit. Labore veritatis repellendus iure qui corrupti sunt voluptas
        necessitatibus velit? Magni, odio.
      </p>
    </div>
  );
};

const GlobalComponentsProps = ({ title, paragraf }) => {
  // title, dan paragraf adalah props
  return (
    <div className="cardEmpat">
      <h1>{title}</h1>
      <p>{paragraf}</p>
    </div>
  );
};
