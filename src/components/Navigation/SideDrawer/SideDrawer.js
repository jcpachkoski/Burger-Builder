import React, { Component } from "react";

//components
import NavigationItems from "../NavigationItems/NavigationItems";
import Logo from "../../Logo/Logo";

//styles
import styleSD from "./SideDrawer.module.css";

const SideDrawer = props => {
	let classes = [styleSD.SideDrawer];
	if (props.sideDrawerVisible) {
		classes.push(styleSD.Open);
	} else {
		classes.push(styleSD.Close);
	}

	return (
		<div className={classes.join(" ")}>
			<div className={styleSD.Logo}>
				<Logo />
			</div>
			<NavigationItems isAuthenticated={props.isAuthenticated} />
		</div>
	);
};

export default SideDrawer;
