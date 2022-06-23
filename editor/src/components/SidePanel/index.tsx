import { Container } from "aws-northstar";
import SegmentPicker from "./components/SegmentPicker";

export default () => {
  return (
    <Container title="Facilities" subtitle="" style={{ height: "100%" }}>
      <SegmentPicker></SegmentPicker>
    </Container>
  );
};
