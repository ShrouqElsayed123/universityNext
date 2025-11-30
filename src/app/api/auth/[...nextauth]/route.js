import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import connect from "@/lib/db";
import bcrypt from "bcryptjs";
import User from "@/models/User"; // موديل المستخدم

export const authOptions = {
    providers: [
        CredentialsProvider({
            name: "Credentials",
            async authorize(credentials) {
                await connect(); // نتأكد إن فيه اتصال
                const user = await User.findOne({ username: credentials.username });
                if (!user) return null;

                const isValid = credentials.password === user.password;
                if (!isValid) return null;

                return { id: user._id, name: user.name, username: user.username };
            },
        }),
    ],
    session: { strategy: "jwt" },
    pages: { signIn: "/login" },
};

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };
