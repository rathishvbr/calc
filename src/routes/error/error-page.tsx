import { useRouteError } from "react-router-dom";

interface RouterError {
  statusText?: string;
  message?: string;
}

export default function ErrorPage() {
  const error = useRouteError() as RouterError;

  return (
    <div className="flex flex-col items-center justify-center h-screen" id="error-page">
      <h1 className="text-4xl font-bold">Oops!</h1>
      <p className="text-lg">Sorry, an unexpected error has occurred.</p>
      <p>
        <i>{error.statusText || error.message}</i>
      </p>
    </div>
  );
}