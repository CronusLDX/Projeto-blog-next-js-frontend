import { createNavigationConfig } from "next-safe-navigation";
import { z } from "zod";

const pagination = ({
  itemsPerPage,
  page,
}: {
  itemsPerPage: string;
  page: string;
}) => {
  return z
    .object({
      itemsPerPage: z.string().default(itemsPerPage),
      page: z.string().default(page),
    })
    .default({ itemsPerPage, page });
};

export const { routes } = createNavigationConfig((defineRoute) => ({
  exampleParam: defineRoute("/example/[id]", {
    params: z.object({ id: z.string() }),
  }),
  exampleSearch: defineRoute("/example-search", {
    search: pagination({ itemsPerPage: "10", page: "1" }),
  }),
  home: defineRoute("/"),
}));
