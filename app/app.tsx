//Dependencies ----------------------------------------------------

//React
const ReactDOM = require("react-dom/client");
const React = require("react");

//React-Router-dom
import { BrowserRouter, Route, Routes } from "react-router-dom";

// //Redux: Provider & Store
// import { Provider } from 'react-redux';
// import { Store } from './reduxStore/store.jsx';

//Typescript Component
import {MyName} from './components/typescript_comp';

//SCSS styles
import './src/scss/main.scss'

ReactDOM.createRoot(
    document.getElementById("app")
)

    .render(
        // <Provider store={Store}>
            <BrowserRouter>
                <div>
                    {/* <Navigator /> */}
                    <Routes>
                        <Route path="*" element={<MyName />} />
                        {/* <Route path="/about" element={<Article content={article} />} />
                        <Route path="*" element={<NotFound data={notFoundText} />} /> */}
                    </Routes>
                </div>
            </BrowserRouter>
        // {/* </Provider> */}
    );