import React, { useState, useEffect, createContext } from 'react';


const UserContext = createContext({
    user: undefined,
    handleUser: (data: any) => {}
});

export const UserProvider = ({ children }: {
    children: any
}) => {
	const [ currentUser, setCurrentUser ] = useState();
    function handleUser(data: any) {
        setCurrentUser(data)
    }
	return (
		<UserContext.Provider value={{ user: currentUser, handleUser }}>
			{children}
		</UserContext.Provider>
	);
};


export default UserContext;