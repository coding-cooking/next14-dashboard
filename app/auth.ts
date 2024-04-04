import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { authConfig } from "./authconfig";
import { connectToDB } from "./lib/utils";
import { User } from "./lib/models";
import bcrypt from "bcrypt";
import { UserInterface } from "./dashboard/users/page";

type credentialsInterface = {
    username: string,
    password: string,
}

// type CustomUser = User & {
//     username: string,
//     img?: string,
// }

const login = async (credentials: credentialsInterface) => {
    try {
        connectToDB();
        console.log("hahaha")
        const user = await User.findOne({ username: credentials.username });
        console.log('1111', user)

        if (!user || !user.isAdmin) {
            throw new Error("Wrong credentials1111!");
        } else {
            const isPasswordCorrect = await bcrypt.compare(
                credentials.password,
                user.password
            );

            if (!isPasswordCorrect) {
                throw new Error("Wrong credentials2222!");
            }
        }
        return user;
    } catch (err) {
        console.log('err is',err);
        throw new Error("Failed to login4444!");
    }
};

export const { signIn, signOut, auth } = NextAuth({
    ...authConfig,
    providers: [
        CredentialsProvider({
            async authorize(credentials: credentialsInterface) {
                try {
                    const user = await login(credentials);
                    return user;
                } catch (err) {
                    return null;
                }
            },
        }),
    ],
    // ADD ADDITIONAL INFORMATION TO SESSION
    callbacks: {
        async jwt({ token, user }: { token: JWT, user}) {
            console.log('user user',user);
            if (user) {
                console.log('aaaaa user is', user.id, user.username, user.img, user.email)
                token.name = user.username;
                token.image = user.img;
            }
            return token;
        },
        async session({ session, token }) {
            if (token) {
                console.log('token is', token.name, token.image)
                session.user.name = token.name;
                session.user.image = token.image;
                console.log('session is', session)

            }
            return session;
        },
    },
});