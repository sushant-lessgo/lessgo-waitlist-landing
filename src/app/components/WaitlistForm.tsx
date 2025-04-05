import { useState } from "react";

export default function WaitlistForm() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");

    const res = await fetch("/api/subscribe", {
      method: "POST",
      body: JSON.stringify({ email }),
    });

    if (res.ok) {
      setStatus("success");
      setEmail("");
    } else {
      setStatus("error");
    }
  };

  return (
    <div className="max-w-md mx-auto mt-10">
      {status === "success" ? (
        <p className="text-green-600 text-center">
          ✅ You're on the waitlist! Check your email to confirm.
        </p>
      ) : (
        <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-2">
          <input
            type="email"
            placeholder="Enter your email to join the Lessgo.ai waitlist"
            className="flex-1 p-2 border border-gray-300 rounded"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            required
          />
          <button
            type="submit"
            className="bg-black text-white px-4 py-2 rounded hover:bg-gray-800"
            disabled={status === "loading"}
          >
            {status === "loading" ? "Joining..." : "Get Early Access"}
          </button>
        </form>
      )}
      {status === "error" && (
        <p className="text-red-500 text-center mt-2">Oops! Something went wrong.</p>
      )}
    </div>
  );
} 