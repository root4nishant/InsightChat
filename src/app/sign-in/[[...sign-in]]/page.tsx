// app/sign-in/page.tsx
import { SignIn } from "@clerk/nextjs";

export default function SignInPage() {
  return (
    <div className="flex items-center justify-center p-8 md:p-16 bg-white">
      <SignIn
        path="/sign-in"
        routing="path"
        appearance={{
          elements: {
            card: "shadow-none border border-gray-200 rounded-xl",
            headerTitle: "text-lg font-semibold text-gray-800",
            socialButtonsBlockButton:
              "bg-white border border-gray-300 text-gray-800 hover:bg-gray-100 transition",
          },
          variables: {
            colorPrimary: "#5D3FD3",
          },
        }}
      />
    </div>
  );
}
