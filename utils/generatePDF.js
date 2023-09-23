import * as Print from "expo-print";
import { shareAsync } from "expo-sharing";
import { generateHTML } from "./generateHTML";

export const generatePDF = async (labelsSpentCollection, defectsCollection) => {
  const html = generateHTML(labelsSpentCollection, defectsCollection);
  const { uri } = await Print.printToFileAsync({ html });
  await shareAsync(uri, { UTI: ".pdf", mimeType: "application/pdf" });
  return uri;
};
