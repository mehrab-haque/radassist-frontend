import FuseAnimate from '@fuse/core/FuseAnimate';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import { makeStyles } from '@material-ui/core/styles';
import { darken } from '@material-ui/core/styles/colorManipulator';
import Typography from '@material-ui/core/Typography';
import clsx from 'clsx';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import JWTRegisterTab from './tabs/JWTRegisterTab';
import SnackbarAlert from '../subComponent/SnackbarAlert';
import { Button } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
	root: {
		background: 'white',
		color: theme.palette.primary.contrastText
	}
}));

function Register() {
	const classes = useStyles();
	const [selectedTab, setSelectedTab] = useState(0);
	const [errorMessages, setErrorMessages] = useState([]);

	function handleTabChange(event, value) {
		setSelectedTab(value);
	}

	return (
		<div className={clsx(classes.root, 'flex flex-col flex-1 flex-shrink-0 p-24 md:flex-row md:p-0')}>
			<div
				className="flex flex-col flex-grow-0 items-center text-white p-16 text-center md:p-128 md:items-start md:flex-shrink-0 md:flex-1 md:text-left">
				<FuseAnimate animation="transition.expandIn">
					<div>
						<img style={{float: 'left'}} className="w-512 mb-32" src="assets/images/logos/radassist_logo.svg" alt="logo"/>
						{/* <div  style={{float: 'right', 'position':'relative', 'margin':'10px', 'width': '130px'}}>
							<h1>RadAssist</h1>
							<p>AI-Based Teleradiology Solution</p>
						</div> */}
					</div>
				</FuseAnimate>

				{/* <FuseAnimate delay={400}>
					<Typography variant="subtitle1" color="inherit" className="max-w-512 mt-16">
						Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ullamcorper nisl erat, vel
						convallis elit fermentum pellentesque. Sed mollis velit facilisis facilisis.
					</Typography>
				</FuseAnimate> */}
			</div>

			<FuseAnimate animation={{ translateX: [0, '100%'] }}>
				<Card className="w-full max-w-400 mx-auto m-16 md:m-0" square>
					{
						errorMessages &&
						errorMessages.map(msg => <SnackbarAlert severity="error">{msg}</SnackbarAlert>)
					}
					<CardContent className="flex flex-col items-center justify-center p-32 md:p-48 md:pt-128 ">
						<Typography variant="h6" className="md:w-full mb-32">
							CREATE AN ACCOUNT
						</Typography>

						{/* <Tabs
							value={selectedTab}
							onChange={handleTabChange}
							variant="fullWidth"
							className="w-full mb-32"
						>
							<Tab
								icon={
									<img
										className="h-40 p-4 bg-black rounded-12"
										src="assets/images/logos/jwt.svg"
										alt="firebase"
									/>
								}
								className="min-w-0"
								label="JWT"
							/>
							<Tab
								icon={<img className="h-40" src="assets/images/logos/firebase.svg" alt="firebase" />}
								className="min-w-0"
								label="Firebase"
							/>
							<Tab
								icon={<img className="h-40" src="assets/images/logos/auth0.svg" alt="auth0" />}
								className="min-w-0"
								label="Auth0"
							/>
						</Tabs> */}

						<JWTRegisterTab showErrors={setErrorMessages}/>

						{/* {selectedTab === 0 && <JWTRegisterTab />}
						{selectedTab === 1 && <FirebaseRegisterTab />}
						{selectedTab === 2 && <Auth0RegisterTab />} */}

						<div className="flex flex-col items-center justify-center pt-32 pb-24">
							<span className="font-medium">Already have an account?</span>
							<Link className="font-medium" to="/login">
								Login
							</Link>
							<Link className="font-medium mt-8" to="/">
								Back to Dashboard
							</Link>
							{/* <Link className="font-medium" to="/faceauth">
								<Button
									variant='contained'
									fullWidth
									type='button'
									style={{marginTop:'10px'}}
									color='primary'
								>
									Face Authentication
								</Button>
							</Link> */}
						</div>

						<div className="flex flex-col items-center"/>
					</CardContent>
				</Card>
			</FuseAnimate>
		</div>
	);
}

export default Register;
