import * as E from "fp-ts/Either";
import * as TE from "fp-ts/TaskEither";

import { flow, pipe } from "fp-ts/function";

type FetchParams = Parameters<typeof fetch>;

const wrapToNetworkError = (error: Error) => ({
    type: "NetworkError" as const,
    error,
} as const);

export const funFetch = (
    ...args: FetchParams
) => pipe(
    TE.tryCatch(
        () => fetch(...args),
        flow(E.toError, wrapToNetworkError)
    )
);
