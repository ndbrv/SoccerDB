const {useParams} = window.ReactRouterDOM;
const {useState, useEffect} = React;
import userService from "./user-service"
const UserFormEditor = () => {
        const {id} = useParams()
        const [user, setUser] = useState({})
        useEffect(() => {
                if(id !== "new") {
                        findUserById(id)
                }
        }, []);
        const findUserById = (id) =>
            userService.findUserById(id)
                .then(user => setUser(user))

        const deleteUser = (id) =>
            userService.deleteUser(id)
                .then(() => history.back())

        const createUser = (user) =>
            userService.createUser(user)
                .then(() => history.back())

        const updateUser = (id, newUser) =>
            userService.updateUser(id, newUser)
                .then(() => history.back())




        return (
        <div>
                <h2>User Editor</h2>
                <label>First Name</label>
                <input
                    onChange={(e) =>
                        setUser(user =>
                                    ({...user, firstName: e.target.value}))}
                    value={user.firstName}/>
                <label>Last Name</label>
                <input
                    onChange={(e) =>
                        setUser(user =>
                                    ({...user, lastName: e.target.value}))}
                    value={user.lastName}/>

                <label>Username</label>
                <input
                    onChange={(e) =>
                        setUser(user =>
                                    ({...user, username: e.target.value}))}
                    value={user.username}/>

                <label>Password</label>
                <input value={user.password}/><br/>
                <button>Cancel</button>
                <button>Delete</button>
                <button
                    onClick={() => deleteUser(user.id)}>
                        Delete
                </button>
                <input
                    onChange={(e) =>
                        setUser(user =>
                                    ({...user, password: e.target.value}))}
                    value={user.password}/>
                <button
                    onClick={() => updateUser(user.id, user)}>
                        Save
                </button>

        </div>
    )
}

export default UserFormEditor