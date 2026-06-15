import express, { Request, Response } from "express";
/* NOTA IMPORTANTE
Debes escribir la extensión .js en el import, incluso si el archivo fuente tiene extensión .ts. */

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware para entender JSON (Esencial para APIs)
app.use(express.json());

app.get("/", (req: Request, res: Response) => {
  res.json({ message: "API funcionando correctamente" });
});

app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
