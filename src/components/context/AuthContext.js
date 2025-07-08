import React, { createContext, useState } from "react";

const AuthUserContext = createContext();

const AuthContextProvider = ({ children }) => {
	const [user, setUser] = useState(false);

	return (
		<AuthUserContext.Provider value={{ user, setUser }}>
			{children}
		</AuthUserContext.Provider>
	);
};

export { AuthUserContext };
export default AuthContextProvider;
