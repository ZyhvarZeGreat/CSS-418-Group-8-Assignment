import { Fragment } from "react";
import {
  Page,
  Text,
  View,
  Document,
  StyleSheet,
  Font,
} from "@react-pdf/renderer";
// import {
//   Table,
//   TableBody,
//   TableCaption,
//   TableCell,
//   TableHead,
//   TableHeader,
//   TableRow,
// } from "../../components/ui/table";
import { supabaseCourse } from "./data";

type Props = {
  data?: supabaseCourse[];
  username: string | null;
  department: string | null;
  matricNo: string | null;
};
Font.register({
  family: "Plus Jakarta",
  src: "../../public/PlusJakartaSans-VariableFont_wght.ttf",
});

const styles = StyleSheet.create({
  page: {
    fontFamily: "Plus Jakarta",
    fontSize: 11,
    paddingTop: 20,
    display: "flex",
    paddingLeft: 40,
    paddingRight: 40,
    lineHeight: 1.5,
    gap: "3rem",
    flexDirection: "column",
  },

  column: {
    display: "flex",
    flexDirection: "column",
    gap: "2rem",
  },
  spaceBetween: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    color: "#3E3E3E",
  },

  titleContainer: { flexDirection: "row", marginTop: 24, height: "15rem" },

  logo: { width: 90 },

  reportTitle: { fontSize: 16, textAlign: "center" },

  addressTitle: { fontSize: 11, fontStyle: "bold" },

  invoice: { fontWeight: "bold", fontSize: 20 },

  invoiceNumber: { fontSize: 11, fontWeight: "bold" },

  address: { fontWeight: 400, fontSize: 10 },

  theader: {
    marginTop: 20,
    fontSize: 10,
    fontStyle: "bold",
    paddingTop: 4,
    paddingLeft: 7,
    flex: 1,
    height: 20,
    backgroundColor: "#DEDEDE",
    borderColor: "whitesmoke",
    borderRightWidth: 1,
    borderBottomWidth: 1,
  },

  theader2: { flex: 2, borderRightWidth: 0, borderBottomWidth: 1 },

  tbody: {
    fontSize: 9,
    paddingTop: 4,
    paddingLeft: 7,
    flex: 1,
    borderColor: "whitesmoke",
    borderRightWidth: 1,
    borderBottomWidth: 1,
  },

  total: {
    fontSize: 9,
    paddingTop: 4,
    paddingLeft: 7,
    flex: 1.5,
    borderColor: "whitesmoke",
    borderBottomWidth: 1,
  },

  tbody2: { flex: 2, borderRightWidth: 1 },
});

const Doc = (props: Props) => (
  <Document>
    <Page size="A4" style={styles.page}>
      <View style={styles.titleContainer}>
        <View style={styles.column}>
          <Text style={styles.reportTitle}>{props?.username}</Text>
          <Text style={styles.reportTitle}>{props?.department}</Text>
          <Text style={styles.reportTitle}>{props?.matricNo}</Text>
        </View>
      </View>

      <View style={{ display: "flex", flexDirection: "column", gap: "2rem" }}>
        <View style={{ width: "100%", flexDirection: "row", marginTop: 10 }}>
          <View style={[styles.theader, styles.theader2]}>
            <Text>Course Code</Text>
          </View>
          <View style={styles.theader}>
            <Text>Course Title</Text>
          </View>
          <View style={styles.theader}>
            <Text>Credit Unit</Text>
          </View>
          <View style={styles.theader}>
            <Text>Semester</Text>
          </View>
          <View style={styles.theader}>
            <Text>Nature</Text>
          </View>
        </View>
        {props.data
          ?.filter((course: supabaseCourse) => course.semester === "1st")
          .map((course, i) => {
            return (
              <Fragment key={i}>
                <View style={{ width: "100%", flexDirection: "row" }}>
                  <View style={[styles.tbody, styles.tbody2]}>
                    <Text>{course.course_code}</Text>
                  </View>
                  <View style={styles.tbody}>
                    <Text>{course.course_title} </Text>
                  </View>
                  <View style={styles.tbody}>
                    <Text>{course.credit_load}</Text>
                  </View>
                  <View style={styles.tbody}>
                    <Text>{course.semester}</Text>
                  </View>
                  <View style={styles.tbody}>
                    <Text>{course.nature}</Text>
                  </View>
                </View>
              </Fragment>
            );
          })}

        <View>
          <Fragment>
            <View
              style={{
                display: "flex",
                gap: "2rem",
                width: "100%",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Text>First Semester Courses</Text>
              <Text>
                Credit Units:
                {props.data
                  ?.filter(
                    (course: supabaseCourse) => course.semester === "1st"
                  )
                  .reduce(
                    (acc: number, course: supabaseCourse) =>
                      acc + course.credit_load,
                    0
                  )}
              </Text>
            </View>
          </Fragment>
        </View>
      </View>

      <View style={{ display: "flex", flexDirection: "column", gap: "2rem" }}>
        <View style={{ width: "100%", flexDirection: "row", marginTop: 10 }}>
          <View style={[styles.theader, styles.theader2]}>
            <Text>Course Code</Text>
          </View>
          <View style={styles.theader}>
            <Text>Course Title</Text>
          </View>
          <View style={styles.theader}>
            <Text>Credit Unit</Text>
          </View>
          <View style={styles.theader}>
            <Text>Semester</Text>
          </View>
          <View style={styles.theader}>
            <Text>Nature</Text>
          </View>
        </View>
        {props.data
          ?.filter((course: supabaseCourse) => course.semester === "2nd")
          .map((course, i) => {
            return (
              <Fragment key={i}>
                <View style={{ width: "100%", flexDirection: "row" }}>
                  <View style={[styles.tbody, styles.tbody2]}>
                    <Text>{course.course_code}</Text>
                  </View>
                  <View style={styles.tbody}>
                    <Text>{course.course_title} </Text>
                  </View>
                  <View style={styles.tbody}>
                    <Text>{course.credit_load}</Text>
                  </View>
                  <View style={styles.tbody}>
                    <Text>{course.semester}</Text>
                  </View>
                  <View style={styles.tbody}>
                    <Text>{course.nature}</Text>
                  </View>
                </View>
              </Fragment>
            );
          })}

        <View>
          <Fragment>
            <View
              style={{
                display: "flex",
                gap: "2rem",
                width: "100%",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Text>Second Semester Courses</Text>
              <Text>
                Credit Units:
                {props.data
                  ?.filter(
                    (course: supabaseCourse) => course.semester === "2nd"
                  )
                  .reduce(
                    (acc: number, course: supabaseCourse) =>
                      acc + course.credit_load,
                    0
                  )}
              </Text>
            </View>
          </Fragment>
        </View>
      </View>
    </Page>
  </Document>
);

export default Doc;
