/*                    Modell-Ordner : blog.js
Wir erstellen dieses Modell, damit wir es überall verwenden können, um zu speichern, zu löschen und zu erhalten.
*/
const mongoose = require("mongoose");
const { title } = require("process");
const Schema = mongoose.Schema;

/*  Schritt 1: Grundstruktur eines Schemas
Mit dem Schema erstellen wir eine Instanz, um eine Verbindung zur Sammlung in unserer Datenbank herzustellen.
*/
const blogSchema = new Schema(
  {
    title: {
      type: String, // mit großem 'S'
      required: true
    },
    snippet: {
      type: String,
      required: true
    },
    body: {
      type: String,
      required: true
    }
  },
  { timestamps: true });
  /* Sobald ein Blog oder Dokument in meiner Sammlung erstellt wird, soll automatisch die Zeit, das Datum und alle anderen Informationen erstellt werden und mir zurückgegeben werden. */


// Schritt 2: Grundstruktur eines Models
// Das erste Argument hier "Blog" ist sehr wichtig, da wir damit mit der speziellen Collection verbinden:Blog oder User
const Blog = mongoose.model("Blog", blogSchema);//Mit dem Schema konnte ich eine Instanz meines Dokuments erstellen, um eine Verbindung zu meiner Datenbankkollektion herzustellen.

module.exports = Blog;
