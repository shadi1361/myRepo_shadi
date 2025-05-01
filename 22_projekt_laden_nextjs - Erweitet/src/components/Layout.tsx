/* Mit dem Erstellen der Datei Layout.tsx im components und dem Einbinden dieser Komponente in die Hauptlayout-Datei bzw. layout.tsx wird der children-Inhalt durch die neue Layout.tsx-Komponente geleitet. Dadurch kann die Navbar in die erstellte Layout.tsx-Komponente verschoben werden.Wenn später noch eine Sidebar und ein Footer zum Projekt hinzugefügt werden, bleibt das Hauptlayout der Anwendung übersichtlich und aufgeräumt.
 */

import React from "react";
import Navbar from "./Navbar";
import TopNavbar from "./TopNavbar";

interface ILayoutProps {
  children: React.ReactNode;
}

function Layout({ children }: ILayoutProps) {
  return (
    <div>
      <TopNavbar />
      <Navbar />
      {children}
    </div>
  );
}

export default Layout;
