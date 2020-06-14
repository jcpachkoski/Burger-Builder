import React from "react";
import { Route, Switch } from "react-router-dom";

import Layout from "./hoc/Layout/Layout";
import BurgerBuilder from "./containers/BurgerBuilder/BurgerBuilder";
import Checkout from "./containers/Checkout/Checkout";
import Orders from "./containers/Orders/Orders";
import Auth from "./containers/Auth/Auth";
import Signout from "./containers/Auth/Signout/Signout";

function App() {
	return (
		<Layout>
			<Switch>
				<Route path="/checkout" component={Checkout} />
				<Route path="/order" component={Orders} />
				<Route path="/auth" component={Auth} />
				<Route path="/signout" component={Signout} />
				<Route path="/" exact component={BurgerBuilder} />
			</Switch>
		</Layout>
	);
}

export default App;
