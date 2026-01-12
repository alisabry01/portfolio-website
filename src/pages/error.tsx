import { useRouteError } from "react-router";

export function Error() {
  const error = useRouteError() as Error;

  return (
    <div id="error-page">
      <h1>Oops!</h1>
      <h2>Sorry, unexpected error has occurred.</h2>
      <h3>
        <i>Details:</i>
      </h3>
      <p>{`${error.name}: ${error.message}`}</p>
      <p>{error.stack}</p>
    </div>
  );
}
