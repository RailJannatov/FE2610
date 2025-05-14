export default function Home({ data }) {
  console.log("====================================");
  console.log(data);
  console.log("====================================");
  return (
    <>
      <div>this is About page</div>
      {/* <ul>
        {props.map((item) => (
          <li>{item.name}</li>
        ))}
      </ul> */}
    </>
  );
}

export const getServerSideProps = async () => {
  const response = await fetch(
    "https://6800a325b72e9cfaf7281bec.mockapi.io/Turbo_Az/cards"
  );
  const data = await response.json();

  if (!data) {
    return {
      notFound: true,
    };
  }

  return {
    props: { data },
  };
};
