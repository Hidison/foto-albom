import React from "react";
import TablePhotos from "../TablePhotos/TablePhotos";
import MainStyles from "./Main.module.css";

const Main = ({ fotos }) => {
  return (
    <main className={MainStyles.table}>
      {fotos &&
        fotos.map((cards, index) => (
          <TablePhotos cards={cards} key={cards.id} />
        ))}
    </main>
  );
};

export default Main;
