import React, { useContext } from "react";
import { AuthUserContext } from "./context/AuthContext";

const Auth = () => {
	const { user, setUser } = useContext(AuthUserContext);

	return (
		<div>
			{!user ? (
				<p>you are not authenticated</p>
			) : (
				<p className="authText">
					You are now authenticated, you can proceed
				</p>
			)}
			<label>
				<input
					type="checkbox"
					checked={user}
					onChange={() => setUser((prev) => !prev)}
				/>
				I'm not a robot
			</label>
		</div>
	);
};

export default Auth;
