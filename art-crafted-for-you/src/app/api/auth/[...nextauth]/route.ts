import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

const handler = NextAuth({
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        username: { label: "Name", type: "text" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        if (!credentials?.username) return null;

        return {
          id: "1",
          name: credentials.username,
          email: `${credentials.username}@johndoe.com`,
        };
      },
    }),
  ],
  session: {
    strategy: "jwt",
  },
});

export { handler as GET, handler as POST };
