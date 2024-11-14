/* eslint-disable @typescript-eslint/no-explicit-any */
import { SessionStrategy } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";


const admin = {
  email: "tajisan789@gmail.com",
  password: "123456",
  role: "admin",
};

export const authOptions = {
  secret: process.env.NEXT_PUBLIC_AUTH_SECRET,
  session: {
    strategy: "jwt" as SessionStrategy,
  },
  providers: [
    CredentialsProvider({
      credentials: {
        email: {
          label: "Email",
          type: "text",
          placeholder: "Enter your Gmail",
          required: true,
        },
        password: {
          label: "Password",
          type: "password",
          placeholder: "Enter your password",
          required: true,
        },
      },
      async authorize(credentials) {
        if (!credentials) {
          return null;
        }
        const { email, password } = credentials;

        if (email === admin.email && password === admin.password) {
          const user = {
            id: "admin-unique-id",
            name: "Tahsin Zaman",
            email: email,
            password: password,
            role: admin.role,
          };
          return user;
        }
        return null;
      },
    }),
  ],
  pages: {
    signIn: "/admin",
  },
  callbacks: {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    async jwt({
      token,
      account,
      user,
    }: {
      token: any;
      account: any;
      user: any;
    }) {
      console.log({ token, account, user });
      // Persist the OAuth access_token and or the user id to the token right after signin
      if (account) {
        console.log(token);
        token.role = user.role;
      }
      return token;
    },
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    async session({ session, token }: { session: any; token: any }) {
      session.user.role = token.role;
      return session;
    },
  },
};
