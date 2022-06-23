/** *******************************************************************************************************************
  Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
  
  Licensed under the Apache License, Version 2.0 (the "License").
  You may not use this file except in compliance with the License.
  You may obtain a copy of the License at
  
      http://www.apache.org/licenses/LICENSE-2.0
  
  Unless required by applicable law or agreed to in writing, software
  distributed under the License is distributed on an "AS IS" BASIS,
  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  See the License for the specific language governing permissions and
  limitations under the License.                                                                              *
 ******************************************************************************************************************** */
import { ComponentType, FunctionComponent } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import NorthStarThemeProvider from "aws-northstar/components/NorthStarThemeProvider";
import SidePanel from "./components/SidePanel";
import MainMap from "./components/MainMap";

const fillAbsolute = {};

const Dashboard: FunctionComponent = () => (
  <div
    style={{
      display: "flex",
      flexDirection: "column",
      position: "absolute",
      left: 0,
      right: 0,
      top: 0,
      bottom: 0,
    }}
  >
    <div style={{ background: "#6B7D6B", width: "100%", height: 48 }}>
      <h1 style={{ color: "white", marginLeft: 32 }}>
        Cycling Facilities Network Editor
      </h1>
    </div>
    <div style={{ flexGrow: 1, display: "flex" }}>
      <div style={{ flexGrow: 1, height: "100%", maxWidth: 500 }}>
        <SidePanel />
      </div>
      <div style={{ background: "teal", flexGrow: 3, height: "100%" }}>
        <MainMap />
      </div>
    </div>
  </div>
);

const App = () => {
  return (
    <NorthStarThemeProvider>
      <Router>
        <Switch>
          {/* <Route exact path="/data" component={withLayout(Analytics)}></Route>
                    <Route exact path="/createOrder" component={withLayout(OrderForm)}></Route> */}
          <Route exact path="/" component={Dashboard}></Route>
        </Switch>
      </Router>
    </NorthStarThemeProvider>
  );
};

export default App;
