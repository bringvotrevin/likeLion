import React from "react";

const items = [
  { id: 1, name: 'Apple', desc: '빨간건 사과' },
  { id: 2, name: 'Banana', desc: '바나나는 길어' },
  { id: 3, name: 'Cherry', desc: '체리는 비싸' }
];

function TableItem() {
  return (
    items.map((cur) => {
      return (
        <>
          <h2>{cur.name}</h2>
          <p>{cur.desc}</p>
        </>
      )
    })
  )
}

function ItemList() {

  const itemList = items.map(({ id, name, desc }) => {
    return (<React.Fragment key={id}>
      <dt>{name}</dt>
      <dd>{desc}</dd>
    </React.Fragment>);
  });

  return (
    <dl>
      {itemList}
    </dl>
  )

}

function App() {
  return (
    <div>
      hello world
      <h2> 안녕</h2>
      <TableItem></TableItem>
      <ItemList></ItemList>
    </div>
  );
}
export default App;
