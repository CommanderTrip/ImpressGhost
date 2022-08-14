const SignUp = () => {

    return (
        <div className={"signup-form"}>
            <form>
                <label htmlFor={"username"}>New Username</label><br/>
                <input type={"text"} id={"username"}/><br/>
                <label htmlFor={"password"}>New Password</label><br/>
                <input type={"password"} id={"password"}/><br/>
                <input type={"submit"}/><br/>
            </form>

        </div>
    )
}

export default SignUp;