import type { Metadata } from "next";

// Alias da lp-2 para tráfego do link da bio do Instagram.
// Renderiza exatamente o mesmo componente — só muda o título (visível no GA)
// e o path (/bio). Qualquer alteração na lp-2 reflete aqui automaticamente.
export { default } from "../lp-2/page";

export const metadata: Metadata = {
  title: "Cimbre - P1C2 Bio",
  robots: { index: false }, // evita conteúdo duplicado da lp-2 nos buscadores
};
