function Login() {
    let isLoggedIn = true;
    // let result = isLoggedIn ? 'Welcome' : 'Please Login';

    // if (isLoggedIn) {
    //     return (
    //         <h1>Welcome back</h1>
    //     )
    // }
    // else {
    //     return (
    //         <h1>Please Register</h1>
    //     )
    // }

    return (
        <>
            {/* <h1>{result}</h1> */}

            {/* Logical AND  */}
            {isLoggedIn && <h1>Welcome</h1>}
        </>
    )
}

export default Login;