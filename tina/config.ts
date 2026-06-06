import { defineConfig } from "tinacms";

export default defineConfig({
  branch: "main", 
  // Busca el Client ID de todas las formas posibles según el framework que uses
  clientId: "53a6b864-54f0-4d88-8b65-06b0691457d2",
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
