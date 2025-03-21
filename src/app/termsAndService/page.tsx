import Heading from "@/components/custom/reusables/Heading";
import Banner from "../(home)/components/Banner";
// import { RxCounterClockwiseClock } from "react-icons/rx";

const TermsAndConditions = () => {
  return (
    <div className="w-full mx-auto lg:max-w-[1400px] md:max-w-[900px] lg:px-20 px-4 font-primary">
      <div className="lg:px-6 px-2 pt-28">
        <Heading text="Terms and Services" />
        {/* <div className="flex justify-center items-center">
          <p className="text-center text-gray-600 mb-8 border border-blue-100 p-2 rounded-full w-fit font-semibold flex items-center gap-2">
            <RxCounterClockwiseClock />
            Last Updated on November 12, 2024
          </p>
        </div> */}
        <div className="lg:text-xl text-sm">
          <p className="mb-6">
            Welcome to <span className="font-semibold">ColumsproutAI</span>. By
            accessing our website and services, you agree to be bound by the
            following Terms and Conditions. Please read these terms carefully.
            If you do not agree with these terms, you should not use our
            services.
          </p>

          <h2 className="lg:text-xl text-md font-bold mb-4">
            1. Acceptance of Terms
          </h2>
          <p className="mb-4">
            By using our website, you agree to these Terms of Services and our
            Privacy Notice. These terms may be updated at any time, and
            continued use of our services constitutes your acceptance of any
            changes.
          </p>

          <h2 className="lg:text-xl text-md font-bold mb-4">
            2. Use of Services
          </h2>
          <ul className="list-disc list-inside mb-6">
            <li>
              You agree to use our services only for lawful purposes and agree
              not to use our services for any unlawful or unauthorized purposes.
            </li>
            <li>
              You are responsible for maintaining the confidentiality of your
              account information and are liable for all activities conducted
              under your account.
            </li>
            <li>
              You may not copy, modify, or distribute content associated with
              the website.
            </li>
          </ul>

          <h2 className="lg:text-xl text-md font-bold mb-4">
            3. Termination and Suspension
          </h2>
          <p className="mb-4">
            We reserve the right to terminate or suspend your access to the
            services immediately if you breach any of these terms.
          </p>

          <h2 className="lg:text-xl text-md font-bold mb-4">
            4. Prohibited Uses
          </h2>
          <p className="mb-6">
            Users are prohibited from engaging in the following activities:
          </p>
          <ul className="list-disc list-inside mb-6">
            <li>
              Interfering with the proper functionality or performance of the
              website.
            </li>
            <li>
              Attempting to gain unauthorized access to any part of the website.
            </li>
            <li>Using the services for any fraudulent or illegal purposes.</li>
          </ul>

          <h2 className="lg:text-xl text-md font-bold mb-4">
            5. Intellectual Property
          </h2>
          <p className="mb-6">
            All trademarks, logos, and intellectual property related to
            ColumsproutAI are owned by Columspro AI Inc. and its licensors. You may not
            reproduce, distribute, or create derivative works based on our
            intellectual property without prior written permission.
          </p>

          <h2 className="lg:text-xl text-md font-bold mb-4">
            6. Disclaimer of Warranties
          </h2>
          <p className="mb-6">
            We provide our services &quot;as is&quot; and &quot;as
            available&quot; basis. While we strive to ensure the accuracy and
            reliability of our services, we do not make any warranties, express
            or implied, regarding the operation of the website, its content, or
            the services provided.
          </p>

          <h2 className="lg:text-xl text-md font-bold mb-4">
            7. Limitation of Liability
          </h2>
          <p className="mb-6">
            To the fullest extent permitted by law, ColumsproutAI will not be
            liable for any damages that result from the use of the services.
          </p>

          <h2 className="lg:text-xl text-md font-bold mb-4">
            8. Governing Law
          </h2>
          <p className="mb-6">
            These terms shall be governed by and construed in accordance with
            the laws of the Government of Karnataka, without regard to
            its conflict of law provisions.
          </p>

          <h2 className="lg:text-xl text-md font-bold mb-4">
            9. Contact Information
          </h2>
          <p className="mb-6">
            If you have any questions about these Terms of Service, please
            contact us at{" "}
            <a
              href="mailto:connect@columsprout.ai"
              className="text-primary-dark hover:underline"
            >
              connect@columsprout.ai
            </a>
            .
          </p>
        </div>
      </div>
      <Banner
        message="Try Columsprout AI today & "
        buttonText="Try Now"
        buttonLink="/try"
        message2="Elevate your Storefront"
      />
    </div>
  );
};

export default TermsAndConditions;
