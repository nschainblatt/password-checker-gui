import './Checker.css'

export const Checker = ({ password, setPassword, send_password, found, setFound, count, setCount, foundPassword, setFoundPassword }) => {

    const get_password = (e) => {
        setPassword({password: e.target.value});
    }

    const display_results = () => {
        if (found && count) {
            return (
                `Breached: ${count} times!`
            );
        } else if (!found && foundPassword) {
            return `Not been breached!`
        }
    }

    return (
        <div className='container'>
            <div className='header'>
                <h2>Password Checker</h2>
            </div>
            <form className='input-layer'>
                <input onChange={get_password} id='password' type='password' placeholder='Password'/>
                <button onClick={send_password} type='submit'>Submit</button>
            </form>
            <div className='results'>
                {display_results()}
            </div>
        </div>
    );
}