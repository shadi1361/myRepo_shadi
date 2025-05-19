// Importieren von benötigten Komponenten aus Chakra UI
import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";

// Importieren eines Icons für den Dropdown-Pfeil
import { BsChevronDown } from "react-icons/bs";

// Definition der Props-Schnittstelle
interface Props {
  onSelectSortOrder: (sortOrder: string) => void; // Funktion zur Auswahl der Sortierreihenfolge
  sortOrder: string; // Aktuell ausgewählte Sortierreihenfolge
}

// Hauptkomponente zur Auswahl der Sortierreihenfolge
export default function SortSelector({ onSelectSortOrder, sortOrder }: Props) {
  // Definition der verfügbaren Sortieroptionen
  const sortOrders = [
    { value: "", label: "Relevance" }, // Relevanz (Standard)
    { value: "-added", label: "Date added" }, // Nach Hinzufügedatum sortieren
    { value: "-name", label: "Name" }, // Nach Name sortieren
    { value: "-released", label: "Release date" }, // Nach Veröffentlichungsdatum sortieren
    { value: "-metacritic", label: "Popularity" }, // Nach Beliebtheit sortieren (Metacritic)
    { value: "-rating", label: "Average rating" } // Nach durchschnittlicher Bewertung sortieren
  ];

  // Finden des aktuell ausgewählten Sortierlabels anhand des Werts
  const currentSortOrder = sortOrders.find(
    (order) => order.value === sortOrder
  );

  return (
    <Menu>
      {/* Menüknopf mit Dropdown-Icon */}
      <MenuButton as={Button} rightIcon={<BsChevronDown />}>
        {/* Anzeige des aktuell ausgewählten Labels oder 'Relevance' als Standard */}
        Order by: {currentSortOrder?.label || "Relevance"}
      </MenuButton>

      {/* Liste der Sortieroptionen im Dropdown-Menü */}
      <MenuList>
        {sortOrders.map((order) => (
          <MenuItem
            key={order.value}
            onClick={() => onSelectSortOrder(order.value)} // Auswahlfunktion aufrufen
          >
            {order.label} {/* Anzeigen der Option im Menü */}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
}
