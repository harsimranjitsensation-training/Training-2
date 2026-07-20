function Navbar({name , age}){
    return (
        <>
        <h1 className="p-4 h-10 border-2xl text-3xl">this is navbar</h1>
        <img src="./images.jfif"></img>
        <ol>
            <li>Home</li>
            <li>About us</li>
            <li>Contact</li>
        </ol>
        <h1>NAME FROM PROPS IS:{name}</h1>
        <h2>age: {age}</h2>
        </>
    )
}

export default Navbar;
