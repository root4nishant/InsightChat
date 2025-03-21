import { Button } from "../ui/button";

export default function CTASection() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold text-gray-800">
          Try Columnsprout AI & elevate your storefront today
        </h2>
        <Button className="mt-6 px-8 py-3 text-white bg-blue-600 rounded-md hover:bg-blue-700">
          Start Free Trial
        </Button>
      </div>
    </section>
  );
}
