import { Page, Text, View, Document, StyleSheet } from "@react-pdf/renderer";
// import { VehicleConfigurationState } from "../state/vehicleConfiguration/vehicleConfiguratonSlice";

// Create styles
const styles = StyleSheet.create({
  page: {
    flexDirection: "row",
    backgroundColor: "#E4E4E4",
  },
  section: {
    margin: 10,
    padding: 10,
    flexGrow: 1,
  },
});

// interface VehicleConfigurationProps {
//   vehicleConfigurationState: VehicleConfigurationState;
// }

// // Create Document Component
// const VehicleSummaryDocument = ({
//   vehicleConfigurationState,
// }: VehicleConfigurationProps) => {
//   return (
//     <Document>
//       <Page size="A4" style={styles.page}>
//         <View style={styles.section}>
//           <Text>Section #1</Text>
//         </View>
//         <View style={styles.section}>
//           <Text>Section #2</Text>
//         </View>
//       </Page>
//     </Document>
//   );
// };

// export default VehicleSummaryDocument;
