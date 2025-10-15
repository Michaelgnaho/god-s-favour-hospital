import Image from "next/image";

export default function Home() {
  return (
    <div
      className="container text-4xl text-green-700"
      style={{ padding: "20px" }}
    >
      <h1>Welcome to God&apos;s Favour Hospital</h1>
      <p>
        Your health is our priority. We provide top-notch medical services with
        a dedicated team of professionals.
      </p>
      <Image
        src="/hospital.jpg"
        alt="God's Favour Hospital"
        width={800}
        height={400}
        style={{ borderRadius: "8px", marginTop: "20px" }}
      />
    </div>
  );
}
