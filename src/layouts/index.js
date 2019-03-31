import './index.less';
import Header from '../components/header';
import Menu from '../components/menu';
import Footer from '../components/footer';

function BasicLayout(props) {
  return (
    <div className="app">
      <Header/>
      <Menu/>
      {props.children}
      <Footer/>
    </div>
  );
}

export default BasicLayout;
