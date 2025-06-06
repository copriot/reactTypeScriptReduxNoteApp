import { FC } from "react";
import { useSelector } from "react-redux";
import { Navigate, Outlet, useParams } from "react-router-dom";
import { RootState } from "../../redux/store";

const Layout: FC = () => {
  //store abone ol
  const { notes } = useSelector((store: RootState) => store.notes);

  //Urlden ıd parçasını al
  const { id } = useParams();
  //id ye göre note'u note'ların içinde arayıp bul
  const note = notes.find((note) => note.id === id);
  //not bulunamazsa hata dön
  if (!note) {
    return <Navigate to="/" />;
  }
  //not bulunursa layout' elementine prop outlet komponentine context olarak note'u  olarak gönder
  return <Outlet context={note} />;
};

export default Layout;
