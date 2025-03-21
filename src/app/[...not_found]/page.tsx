import { notFound } from "next/navigation";

export default function NotFoundCatchAll() {
  <div className="min-h-screen">{notFound()}</div>;
}
