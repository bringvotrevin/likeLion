export default function Hello(props) {
  return (
    <>
      <h1 style={{ backgroundColor: 'black', color: 'white' }}>
        안녕, {props.name} 1호
      </h1>
      <h1 style={{ height: '30px' }}>안녕, {props.name} 2호!</h1>
    </>
  );
}
