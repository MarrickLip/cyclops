import MainMap from "../MainMap";
import SidePanel from "../SidePanel";

export default () => (
  <div
    style={{
      display: "flex",
      flexDirection: "column",
      position: "absolute",
      left: 0,
      right: 0,
      top: 0,
      bottom: 0,
    }}
  >
    <div style={{ background: "#6B7D6B", width: "100%", height: 48 }}>
      <h1 style={{ color: "white", marginLeft: 32 }}>
        Cycling Facilities Network Editor
      </h1>
    </div>
    <div style={{ flexGrow: 1, display: "flex" }}>
      <div style={{ flexGrow: 1, height: "100%", maxWidth: 500 }}>
        <SidePanel />
      </div>
      <div style={{ background: "teal", flexGrow: 3, height: "100%" }}>
        <MainMap />
      </div>
    </div>
  </div>
);
