import Router from "next/router";

export default function Custom404() {
  setTimeout(() => {
    Router.push("/");
  }, 3000);

  return (
    <div
      className="w-full flex flex-col justify-center items-center"
      style={{ height: "100vh" }}>
      <h1 className="font-bold text-xl">404 | Page Not Found Go Back</h1>
      <span>Re-Routing back to Home Page in 3 seconds</span>
    </div>
  );
}
