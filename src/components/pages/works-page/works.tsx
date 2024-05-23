import placeholder from "/src/assets/placeholder-pic.jpg";

const Works = () => {
  return (
    <>
      <ul>
        <li>
          <img
            src={placeholder}
            className=""
            alt="Developer`s photo"
            width={361}
            height={347}
          />
          <h4>Title</h4>
        </li>
      </ul>
      <button type="button" onClick={() => console.log("hi")}>
        Load more works
      </button>
    </>
  );
};

export default Works;
