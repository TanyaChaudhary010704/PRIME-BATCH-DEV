export const SignupPage = () => {
  const handleSendOtp = async (e) => {
    try {
      e.preventDefault();

      const email = e.target.email.value;

      const resp = await fetch("http://localhost:2200/api/v1/auth/otps", {
        method: "POST",
        body: JSON.stringify({ email }),
        headers: {
          "Content-type": "application/json",
        },
      });

      const data = await resp.json();

      console.log(data);
    } catch (err) {
      console.log("Error sending otp", err.message);
    }
  };

  return (
    <div>
      <form onSubmit={handleSendOtp}>
        <div>
          <input
            type="email"
            name="email"
            required
            className="border-2 border-gray-300 rounded-md p-2 width-full"
            placeholder="Enter your email"
          />
        </div>
        <div>
          <button className="p-2 bg-lime-600">Send OTP</button>
        </div>
      </form>
    </div>
  );
};
