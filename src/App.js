import {StylesProvider} from '@material-ui/styles';
import GlobaStyle from './commons/styles/global-style';
import Main from './containers/Main';

function App() {
  return (
   <StylesProvider injectFirst>
     <GlobaStyle/>
      <Main/>
   </StylesProvider>
  );
}
export default App;
