import React from "react";
import { useState, useEffect } from "react";
import { User } from "./interfaces/User";
import Loading from "./components/Loading";
import Error from "./components/Error";
import UserCard from "./components/UserCard";

const API_URL = "https://jsonplaceholder.typicode.com/users";

const UserList: React.FC = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [users, setUsers] = useState<User[]>([]);
  const [selectedUser, setSelectedUser] = useState<User | null>(null);

  // Function for fetching users from the API
  const fetchUsers = async () => {
    // TO DO: Fetch users from the API, handle loading and error states
    try {
      setIsLoading(true); 
      const response = await fetch(API_URL);

      if (!response.ok) {
        setError("API call was not ok.");
      }

      const data = await response.json();
      setUsers(data);
    } catch (error) {
      setError(`Error while trying to fetch the data: ${error}`);
    } finally {
      setIsLoading(false);
    }
  };

  // Call fetchUsers when the component mounts
  useEffect(() => {
    fetchUsers();
  }, []);

  const handleSelectUser = (user: User) => {
    setUsers([]);
    setSelectedUser(user);
  };

  const handleCloseUser = () => {
    setSelectedUser(null);
    fetchUsers();
  };

  const handleCloseError = () => {
    setError(null);
  };
  // Render the component
  return (
    <div>
      {/* TO DO: display simple view with the following: ui for isLoading, errors (if any) & table for displaying users, with a select field for managing user selection*/}
      {isLoading ? (
        <Loading />
      ) : (
        <>
          {users.length > 0 ? (
            <table>
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Name</th>
                  <th>Username</th>
                  <th>Email</th>
                  <th>City</th>
                  <th>Phone</th>
                  <th>Website</th>
                  <th>Company Name</th>
                </tr>
              </thead>
              <tbody>
                {users.map((user) => (
                  
                    <tr
                      key={user.id}
                      onClick={() => handleSelectUser(user)}
                      className="user-wrapper"
                    >
                      <td>{user.id}</td>
                      <td>{user.name}</td>
                      <td>{user.username}</td>
                      <td>{user.email}</td>
                      <td>{user.address.city}</td>
                      <td>{user.phone}</td>
                      <td>{user.website}</td>
                      <td>{user.company.name}</td>
                    </tr>
                 
                ))}
              </tbody>
            </table>
          ) : (
            <>{!selectedUser && <p>No users found!</p>}</>
          )}
        </>
      )}

      {selectedUser !== null && (
        <UserCard user={selectedUser} handleClose={handleCloseUser} />
      )}

      {error && <Error error={error} handleClose={handleCloseError} />}
    </div>
  );
};

export default UserList;
