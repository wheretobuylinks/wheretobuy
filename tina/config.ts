import { defineConfig } from "tinacms";

export default defineConfig({
  branch: "cloudflare/workers-autoconfig", 
  // Busca el Client ID de todas las formas posibles según el framework que uses
  clientId: process.env.TINA_CLIENT_ID || process.env.PUBLIC_TINA_CLIENT_ID || process.env.NEXT_PUBLIC_TINA_CLIENT_ID,
  token: process.env.TINA_TOKEN,
  build: {
    outputFolder: "admin",
    publicFolder: "public",
  },
  media: {
    tina: {
      mediaRoot: "images",
      publicFolder: "public",
    },
  },
  schema: {
    collections: [
      {
        name: "post",
        label: "Posts (Entradas)",
        path: "src/content/post",
        format: "md",
        fields: [
          {
            type: "string",
            name: "title",
            label: "Título",
            isTitle: true,
            required: true,
          },
          {
            type: "rich-text",
            name: "body",
            label: "Cuerpo del artículo",
            isBody: true,
          },
        ],
      },
    ],
  },
});
