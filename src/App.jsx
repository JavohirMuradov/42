import { useTranslation } from "react-i18next";
import Layout from "./Layout/Layout"
import Main from "./Main/Main"
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/swiper-bundle.css';


function App() {
  const { t } = useTranslation();
  return (
    <Layout>
      <Main />
    </Layout>
  )
}

export default App
