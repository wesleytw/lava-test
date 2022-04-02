import React, { useEffect, useState } from "react";
export const ConnectMoralis = React.createContext();

export const TransactionsProvider = ( ) => {

	// const [currentAccount, setCurrentAccount] = useState("");
	const { authenticate, isAuthenticated, isAuthenticating, user, account, logout } = useMoralis();
	const login = async () => {
		if (!isAuthenticated) {
				await authenticate({ signingMessage: "Log in using Moralis" })
						.then(function (user) {
						console.log("logged in user:", user);
						console.log(user.get("ethAddress"));
				})
						.catch(function (error) {
						console.log(error);
				});
		}
	};
	const logOut = async () => {
		await logout();
		console.log("logged out");
	};
	return (
	<ConnectMoralis.Provider 
	value={{ currentAccount,}}>
	</ConnectMoralis.Provider>
	);
}

