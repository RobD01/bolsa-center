import { useState } from "react";
import { code } from "@/constants";
import CodeCard from "@/components/shared/CodeCard";

const Tenant = () => {
  const [accessCode, setAccessCode] = useState<string>("");
  const [isCodeCorrect, setIsCodeCorrect] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState<string>("");
  const correctCode = "101coffee";

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (accessCode === correctCode) {
      setIsCodeCorrect(true);
      setErrorMessage("");
    } else {
      setIsCodeCorrect(false);
      setErrorMessage("Invalid access code. Please try again.");
    }
  };

  return (
    <div className="home-container">
      {!isCodeCorrect ? (
        <form onSubmit={handleSubmit} className="flex flex-col gap-2">
          <label htmlFor="accessCode">Enter Access Code:</label>
          <input
            type="text"
            id="accessCode"
            value={accessCode}
            onChange={(e) => setAccessCode(e.target.value)}
            className="p-1 rounded-md"
            required
          />
          <button type="submit" className="shad-button_primary">
            Submit
          </button>
          {errorMessage && <p style={{ color: "red" }}>{errorMessage}</p>}
        </form>
      ) : (
        <div>
          <p>Welcome to the Tenant Portal</p>
          <p>
            This will be where we list the codes for locks (restroom, roof,
            etc), and other relevant news for the tenants from management. Do
            not share with customers or anyone not authorized. Only reserved for
            the landlord, property management, and tenants
          </p>
          {code?.map((post) => (
            // @ts-expect-error post
            <CodeCard post={post} key={post.id} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Tenant;
