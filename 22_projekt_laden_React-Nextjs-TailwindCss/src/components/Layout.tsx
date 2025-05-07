/* Mit dem Erstellen der Datei Layout.tsx im components und dem Einbinden dieser Komponente in die Hauptlayout-Datei bzw. layout.tsx wird der children-Inhalt durch die neue Layout.tsx-Komponente geleitet. Dadurch kann die Navbar in die erstellte Layout.tsx-Komponente verschoben werden. Wenn später noch eine Sidebar und ein Footer zum Projekt hinzugefügt werden, bleibt das Hauptlayout der Anwendung übersichtlich und aufgeräumt.
 */

import React from "react";
import Navbar from "./Navbar";
import TopNavbar from "./TopNavbar";
import Logo from "./Logo";
import Search from "./Search";
import NavBottomRight from "./NavBottomRight";
import Container from "./Container";

interface ILayoutProps {
  children: React.ReactNode;
}

function Layout({ children }: ILayoutProps) {
  return (
    <div>
      <TopNavbar />
      <Navbar />

      {/* Flexbox zum Platzieren der Komponenten nebeneinander */}

      <Container>
        <div className="flex items-center justify-between px-4 py-2 bg-wh
        ">
          {/* Logo */}

          <div className="flex-shrink-0">
            <Logo />
          </div>

          {/* Suchleiste */}
          <div className="flex-grow mx-4">
            <Search />
          </div>

          {/* NavBottomRight */}
          <div className="flex-shrink-0">
            <NavBottomRight />
          </div>
        </div>
      </Container>
      {/* Seiteninhalt */}
      {children}
    </div>
  );
}

export default Layout;
