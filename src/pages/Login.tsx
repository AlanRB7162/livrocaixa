export function Login(){
    return(
        <section className="login">
        <h2 className="login-title">Login</h2>
        <div className="login-form">
            <label htmlFor="email"></label><br/>
            <input type="text" placeholder="Insira seu E-mail" id="email" name="email"></input>
            <label htmlFor="password"></label>
            <input type="password" placeholder="Insira sua senha" id="password" name="password"></input>
            <button type="submit">Login</button>
        </div>
        </section>
    )
}