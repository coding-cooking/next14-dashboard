"use client";

import { authenticate } from "../../../lib/actions"
import styles from "./loginForm.module.css";
import { useFormState } from "react-dom";

const LoginForm = () => {
    const [state, formAction] = useFormState(authenticate, undefined);
    console.log("state is", state)

    return (
        <form action={formAction} className={styles.form}>
            <h1>Login</h1>
            <input type="text" placeholder="username" name="username" />
            <input type="password" placeholder="password" name="password" />
            <button>Login</button>
            {state?.success && state?.message}
        </form>
    );
};

export default LoginForm;