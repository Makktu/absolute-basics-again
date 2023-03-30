const DisplayArea = ({ testArr }) => {
  return (
    <>
      <div className="display-area">
        {testArr.map((item, ind) => {
          return <p key={ind}>{item}</p>;
        })}
      </div>
    </>
  );
};

export default DisplayArea;
