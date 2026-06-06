import { defineConfig } from "tinacms";

// Configuración adaptada para tu web de Astro
export default defineConfig({
  branch: "main", // Si tu rama principal se llama 'master', cambia 'main' por 'master'
  clientId: process.env.TINA_CLIENT_ID || null,
  token: process.env.TINA_TOKEN || null,
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
        label: "Mis Posts",
        path: "src/data/post", // Aquí es donde están tus textos
        format: "md", // Si tus archivos terminan en .mdx, cambia "md" por "mdx"
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
            label: "Contenido",
            isBody: true,
          },
        ],
      },
    ],
  },
});
