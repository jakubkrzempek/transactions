import { Link } from "react-router-dom"
import { useLogout } from '../hooks/useLogout'

// styles
import styles from './Navbar.module.css'
import { useAuthContext } from "../hooks/useAuthContext"

export default function Navbar() {
    const { logout } = useLogout()
    const { user } = useAuthContext();
    return (
        <nav className={styles.navbar}>
            <ul>
                <li className={styles.title}>Transakcje</li>

                {!user && (<>
                    <li><Link to="/login">Zaloguj sie</Link></li>
                    <li><Link to="/signup">Zarejestruj</Link></li>
                </>
                )}

                {user && <>
                    <li>     {user.displayName}</li>
                    <li>
                        <button className="btn" onClick={logout}>Wyloguj</button>
                    </li>

                </>}
            </ul>
        </nav>
    )
}