import React, { useEffect, useState } from "react";
import { supabase } from "./api/supabaseClient";

export default function App() {
  const [session, setSession] = useState(null);

  useEffect(() => {
    const { data: listener } = supabase.auth.onAuthStateChange((event, session) => {
      setSession(session);
    });

    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session);
    });

    return () => {
      listener?.subscription.unsubscribe();
    };
  }, []);

  const signIn = async () => {
    await supabase.auth.signInWithOAuth({ provider: "google" });
  };

  const signOut = async () => {
    await supabase.auth.signOut();
  };

  return (
    <div style={{ padding: "2rem", fontFamily: "sans-serif" }}>
      <h1>GiftWho Clean Supabase Login</h1>
      {!session ? (
        <button onClick={signIn}>Login with Google</button>
      ) : (
        <>
          <p>You are logged in as <b>{session.user.email}</b></p>
          <pre>{JSON.stringify(session.user, null, 2)}</pre>
          <button onClick={signOut}>Logout</button>
        </>
      )}
    </div>
  );
}